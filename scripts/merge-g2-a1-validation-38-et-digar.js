#!/usr/bin/env node
"use strict";

/**
 * Re-run bilingual validation for ET rows only (DIGAR chain) and merge into existing 38-row report.
 */

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { lookupDeForCard } = require("./lib/g2-a1-production-current/card-translation-lang-run");
const {
  TRANSLATION_PAIR_STATUS,
  TARGET_LEMMA_STATUS,
  GALA_CONCLUSION,
} = require("./lib/g2-a1-production-current/g2-a1-bilingual-row-status");

const AUDIT_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/sample-lemmas-32lang-audit.json",
);
const OUT_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/complete-bilingual-validation-38.json",
);
const OUT_MD = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/complete-bilingual-validation-38.md",
);

async function main() {
  const { validateRow } = require("./run-g2-a1-complete-bilingual-validation-38");
  if (typeof validateRow !== "function") {
    throw new Error("validateRow must be exported from run-g2-a1-complete-bilingual-validation-38.js");
  }

  const prior = JSON.parse(fs.readFileSync(OUT_JSON, "utf8"));
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const keys = new Set(
    (audit.needsAdditionalBilingualSource || []).map((r) => `${r.appLang}|${r.level}|${r.deLemma}`),
  );
  const etRows = audit.rows.filter(
    (r) =>
      r.appLang === "et" &&
      r.needsAdditionalBilingualSource &&
      keys.has(`${r.appLang}|${r.level}|${r.deLemma}`),
  );

  const deAuthorityByLemma = new Map();
  for (const row of etRows) {
    if (deAuthorityByLemma.has(row.deLemma)) continue;
    // eslint-disable-next-line no-await-in-loop
    deAuthorityByLemma.set(
      row.deLemma,
      await lookupDeForCard({
        lemma: row.deLemma,
        partOfSpeech: row.partOfSpeech,
        article: row.article || null,
      }),
    );
  }

  const updatedByKey = new Map();
  for (const row of etRows) {
    // eslint-disable-next-line no-await-in-loop
    const r = await validateRow(row, deAuthorityByLemma.get(row.deLemma));
    updatedByKey.set(`${r.appLang}|${r.level}|${r.deLemma}`, r);
    process.stderr.write(
      `${r.deEtInstitutionalBilingualLookupStatus || "—"} pair=${r.translationPairStatus} ${r.deLemma}\n`,
    );
  }

  const results = prior.results.map((row) => {
    const k = `${row.appLang}|${row.level}|${row.deLemma}`;
    return updatedByKey.get(k) || row;
  });

  const generatedAt = new Date().toISOString();
  const tv = results.filter((r) => r.galaConclusion === GALA_CONCLUSION.TRANSLATION_VALIDATED);
  const finding = results.filter((r) => r.galaConclusion === GALA_CONCLUSION.FINDING);
  const pairPending = results.filter(
    (r) => r.galaConclusion === GALA_CONCLUSION.TRANSLATION_PAIR_VALIDATED_TARGET_LEMMA_PENDING,
  );
  const capPending = results.filter(
    (r) => r.galaConclusion === GALA_CONCLUSION.CAPITALIZATION_CANDIDATE_TARGET_VALIDATION_PENDING,
  );
  const nsr = results.filter((r) => r.galaConclusion === GALA_CONCLUSION.NEEDS_SOURCE_REVIEW);
  const nf = results.filter((r) => r.galaConclusion === GALA_CONCLUSION.NOT_FOUND);
  const pairValidated = results.filter((r) => r.translationPairStatus === TRANSLATION_PAIR_STATUS.VALIDATED);
  const targetValidated = results.filter((r) => r.targetLemmaStatus === TARGET_LEMMA_STATUS.VALIDATED);
  const targetNotApplicable = results.filter((r) => r.targetLemmaStatus === TARGET_LEMMA_STATUS.NOT_APPLICABLE);

  const payload = {
    ...prior,
    generatedAt,
    translationValidatedCount: tv.length,
    findingCount: finding.length,
    translationPairValidatedTargetLemmaPendingCount: pairPending.length,
    capitalizationCandidateTargetValidationPendingCount: capPending.length,
    needsSourceReviewCount: nsr.length,
    notFoundCount: nf.length,
    translationPairValidatedCount: pairValidated.length,
    targetLemmaValidatedCount: targetValidated.length,
    targetLemmaNotApplicableCount: targetNotApplicable.length,
    policy:
      "v5 gala; ET rows refreshed via DIGAR Valgus 1976 (merge-g2-a1-validation-38-et-digar.js)",
    results,
  };

  fs.writeFileSync(OUT_JSON, `${JSON.stringify(payload, null, 2)}\n`);

  const md = [
    "# G2/A1 — pilna divvalodu validācija (38 rindas)",
    "",
    `Ģenerēts: ${generatedAt}`,
    "",
    "**Gala secinājums:**",
    `- TRANSLATION_VALIDATED: ${tv.length}/38`,
    `- FINDING: ${finding.length}/38`,
    `- TRANSLATION_PAIR_VALIDATED_TARGET_LEMMA_PENDING: ${pairPending.length}/38`,
    `- CAPITALIZATION_CANDIDATE_TARGET_VALIDATION_PENDING: ${capPending.length}/38`,
    `- NEEDS_SOURCE_REVIEW: ${nsr.length}/38`,
    `- NOT_FOUND: ${nf.length}/38`,
    "",
    `**TRANSLATION_PAIR_STATUS:** VALIDATED ${pairValidated.length}/38 | MULTIPLE_CANDIDATES ${results.filter((r) => r.translationPairStatus === TRANSLATION_PAIR_STATUS.MULTIPLE_CANDIDATES).length}/38 | NOT_FOUND ${results.filter((r) => r.translationPairStatus === TRANSLATION_PAIR_STATUS.NOT_FOUND).length}/38`,
    "",
    `**TARGET_LEMMA_STATUS:** VALIDATED ${targetValidated.length}/38 | VALIDATION_PENDING ${results.filter((r) => r.targetLemmaStatus === TARGET_LEMMA_STATUS.VALIDATION_PENDING).length}/38 | NOT_VALIDATED ${results.filter((r) => r.targetLemmaStatus === TARGET_LEMMA_STATUS.NOT_VALIDATED).length}/38 | NOT_APPLICABLE ${targetNotApplicable.length}/38`,
    "",
    "| Valoda | DE vārds | CURRENT | TARGET tulkojums | Divvalodu vārdnīca | URL | TRANSLATION_PAIR_STATUS | TARGET_LEMMA_STATUS | Gala secinājums |",
    "|--------|----------|---------|------------------|-------------------|-----|-------------------------|---------------------|-----------------|",
  ];

  for (const r of results) {
    let gala = r.galaConclusion;
    if (
      r.galaConclusion === GALA_CONCLUSION.FINDING ||
      r.galaConclusion === GALA_CONCLUSION.CAPITALIZATION_CANDIDATE_TARGET_VALIDATION_PENDING
    ) {
      gala = `${r.galaConclusion}${r.proposedNew ? ` → ${r.proposedNew}` : ""}`;
    }
    md.push(
      `| ${r.appLang} | ${r.deLemma} | ${r.currentTarget || "—"} | ${r.targetTranslationDisplay} | ${r.dictionaryName || "—"} | ${r.resultUrl || "—"} | ${r.translationPairStatus} | ${r.targetLemmaStatus} | ${gala} |`,
    );
  }
  fs.writeFileSync(OUT_MD, `${md.join("\n")}\n`);

  console.log(
    JSON.stringify(
      {
        mergedEtRows: etRows.length,
        etUpdates: [...updatedByKey.values()].map((r) => ({
          deLemma: r.deLemma,
          deEtInstitutionalBilingualLookupStatus: r.deEtInstitutionalBilingualLookupStatus,
          translationPairStatus: r.translationPairStatus,
          galaConclusion: r.galaConclusion,
        })),
        NOT_FOUND: nf.length,
        out: OUT_JSON,
      },
      null,
      2,
    ),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
