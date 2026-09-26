#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  TRANSLATION_PAIR_STATUS,
  TARGET_LEMMA_STATUS,
  GALA_CONCLUSION,
  resolveFinalGalaConclusion,
  targetStatusWhenPairNotFound,
} = require("./lib/g2-a1-production-current/g2-a1-bilingual-row-status");

const IN_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/complete-bilingual-validation-38.json",
);
const OUT_JSON = IN_JSON;
const OUT_MD = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/complete-bilingual-validation-38.md",
);

function recomputeRow(row) {
  const pairStatus = row.translationPairStatus;
  let targetLemmaStatus = row.targetLemmaStatus;
  let targetLemmaReason = row.targetLemmaReason;
  let targetSourceUrl = row.targetSourceUrl;
  let normativeTargetLemma = row.normativeTargetLemma;

  if (pairStatus === TRANSLATION_PAIR_STATUS.NOT_FOUND) {
    const na = targetStatusWhenPairNotFound();
    targetLemmaStatus = na.targetLemmaStatus;
    targetLemmaReason = na.targetReason;
    targetSourceUrl = na.targetSourceUrl;
    normativeTargetLemma = na.normativeLemma;
  }

  const gala = resolveFinalGalaConclusion({
    translationPairStatus: pairStatus,
    targetLemmaStatus,
    pairLemma: row.pairLemma,
    currentTarget: row.currentTarget,
  });

  return {
    ...row,
    targetLemmaStatus,
    targetLemmaReason,
    targetSourceUrl,
    normativeTargetLemma,
    galaConclusion: gala.galaConclusion,
    galaReason: gala.galaReason,
    finalStatus: gala.galaConclusion,
    finalReason: gala.galaReason,
    findingType: gala.findingType,
    proposedNew: gala.proposedNew,
  };
}

function buildMd(results, generatedAt) {
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
  return { md: md.join("\n") + "\n", tv, finding, pairPending, capPending, nsr, nf, pairValidated, targetValidated, targetNotApplicable };
}

function main() {
  const prior = JSON.parse(fs.readFileSync(IN_JSON, "utf8"));
  const results = prior.results.map(recomputeRow);
  const generatedAt = new Date().toISOString();
  const summary = buildMd(results, generatedAt);

  const payload = {
    ...prior,
    schemaVersion: "g2-a1-complete-bilingual-validation-38-v5",
    generatedAt,
    rowCount: results.length,
    translationValidatedCount: summary.tv.length,
    findingCount: summary.finding.length,
    translationPairValidatedTargetLemmaPendingCount: summary.pairPending.length,
    capitalizationCandidateTargetValidationPendingCount: summary.capPending.length,
    needsSourceReviewCount: summary.nsr.length,
    notFoundCount: summary.nf.length,
    translationPairValidatedCount: summary.pairValidated.length,
    targetLemmaValidatedCount: summary.targetValidated.length,
    targetLemmaNotApplicableCount: summary.targetNotApplicable.length,
    policy:
      "v5 gala recompute on v4 bilingual evidence; pair VALIDATED + target pending; cap pending; NOT_FOUND → target N/A",
    results,
  };

  fs.writeFileSync(OUT_JSON, `${JSON.stringify(payload, null, 2)}\n`);
  fs.writeFileSync(OUT_MD, summary.md);

  console.log(
    JSON.stringify(
      {
        TRANSLATION_VALIDATED: summary.tv.length,
        FINDING: summary.finding.length,
        TRANSLATION_PAIR_VALIDATED_TARGET_LEMMA_PENDING: summary.pairPending.length,
        CAPITALIZATION_CANDIDATE_TARGET_VALIDATION_PENDING: summary.capPending.length,
        NEEDS_SOURCE_REVIEW: summary.nsr.length,
        NOT_FOUND: summary.nf.length,
        out: OUT_JSON,
      },
      null,
      2,
    ),
  );
}

main();
