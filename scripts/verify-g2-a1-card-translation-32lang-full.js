#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { listAllTargetAppLanguages } = require("./lib/g2-a1-production-current/source-adapters/target");
const { verifyCardTranslationLanguageReadiness } = require("./lib/g2-a1-production-current/card-translation-lang-verify");
const { assertTargetedFieldCardTranslationBatchAllowed } = require("./lib/g2-a1-production-current/card-translation-audit-policy");
const { closeBrowserPool } = require("./lib/g2-a1-production-current/source-adapters/browser/pool");
const { assessCardTranslationProductionGitState } = require("./lib/g2-a1-production-current/card-translation-production-git-state");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-32lang-readiness");
const OUT_JSON = path.join(OUT_DIR, "card-translation-32lang-full-verification.json");

async function main() {
  const filterEnv = process.env.CARD_TRANSLATION_VERIFY_LANGS;
  let langs = listAllTargetAppLanguages().sort();
  if (filterEnv && filterEnv.trim() !== "all") {
    const want = new Set(filterEnv.split(/[\s,]+/).filter(Boolean));
    langs = langs.filter((l) => want.has(l));
  }

  const languageResults = [];
  for (const appLang of langs) {
    // eslint-disable-next-line no-await-in-loop
    languageResults.push(await verifyCardTranslationLanguageReadiness(appLang));
  }

  await closeBrowserPool();

  const expectedCount = 32;
  const allAppLangs = listAllTargetAppLanguages().sort();
  const partialMerge = filterEnv && filterEnv.trim() !== "all" && langs.length < allAppLangs.length;
  let mergedLanguageRows = languageResults;
  if (partialMerge && fs.existsSync(OUT_JSON)) {
    try {
      const prior = JSON.parse(fs.readFileSync(OUT_JSON, "utf8"));
      const byLang = new Map((prior.languages || []).map((r) => [r.appLang, r]));
      for (const row of languageResults) byLang.set(row.appLang, row);
      mergedLanguageRows = allAppLangs.map((l) => byLang.get(l)).filter(Boolean);
    } catch {
      mergedLanguageRows = languageResults;
    }
  }

  const ready = mergedLanguageRows.filter((r) => r.cardTranslationReady);
  const notReady = mergedLanguageRows.filter((r) => !r.cardTranslationReady);
  const readyCount = ready.length;
  const fullReady = readyCount === expectedCount && mergedLanguageRows.length === expectedCount;
  const productionGit = assessCardTranslationProductionGitState();

  const report = {
    schemaVersion: "g2-a1-card-translation-32lang-full-v1",
    generatedAt: new Date().toISOString(),
    expectedCount,
    verifiedLanguageCount: mergedLanguageRows.length,
    partialVerifyLangs: partialMerge ? langs : null,
    liveVerifiedThisRun: langs,
    readyCount,
    remainingCount: expectedCount - readyCount,
    readyLanguages: ready.map((r) => r.appLang),
    notReadyLanguages: notReady.map((r) => r.appLang),
    fullCardTranslationBatchReady: fullReady,
    batchBlockerActive: null,
    classification: fullReady
      ? "CARD_TRANSLATION_READINESS_32_OF_32_VERIFIED"
      : "CARD_TRANSLATION_READINESS_IN_PROGRESS",
    nextAction: fullReady
      ? "OWNER_MAY_AUTHORIZE_FULL_A1_SOURCE_BASED_AUDIT"
      : "CONTINUE_DE_TO_TARGET_COLLECTORS_AND_TARGET_VALIDATORS_PER_LANGUAGE",
    fullA1AuditExecuted: false,
    productionDataModified: productionGit.productionDataModified,
    productionGit,
    languages: mergedLanguageRows,
    blockersSummary: notReady.map((r) => ({
      appLang: r.appLang,
      blockers: r.blockers,
      collector: r.collector,
      targetValidator: r.targetValidator,
      productionPilot: r.productionPilot,
    })),
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_JSON, `${JSON.stringify(report, null, 2)}\n`);

  const batchGate = assertTargetedFieldCardTranslationBatchAllowed({ executeLuna: true, pilotOnly: false });
  report.batchBlockerActive = !batchGate.pass;
  fs.writeFileSync(OUT_JSON, `${JSON.stringify(report, null, 2)}\n`);

  console.log(
    JSON.stringify(
      {
        classification: report.classification,
        readyCount: report.readyCount,
        expectedCount: report.expectedCount,
        readyLanguages: report.readyLanguages,
        batchBlockerActive: report.batchBlockerActive,
        notReadyLanguages: report.notReadyLanguages,
        fullA1AuditExecuted: false,
        productionDataModified: report.productionDataModified,
        productionGit: {
          pr843ProductionPaths: productionGit.pr843ProductionPaths,
          inheritedFromPr842PathCount: productionGit.inheritedFromPr842.pathCount,
        },
      },
      null,
      2,
    ),
  );

  process.exitCode = fullReady ? 0 : 2;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
