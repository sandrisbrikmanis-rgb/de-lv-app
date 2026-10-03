#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  getCardTranslation32LangReadiness,
  isFullCardTranslationBatchReady,
  FULL_CARD_TRANSLATION_LANGUAGES,
} = require("./lib/g2-a1-production-current/card-translation-32lang-readiness");
const { assertTargetedFieldCardTranslationBatchAllowed } = require("./lib/g2-a1-production-current/card-translation-audit-policy");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-32lang-readiness");

function main() {
  const blockers = [];
  const readiness = getCardTranslation32LangReadiness();

  if (readiness.registryLanguageCount !== readiness.expectedCount) {
    blockers.push({
      code: "REGISTRY_LANG_COUNT",
      got: readiness.registryLanguageCount,
      expected: readiness.expectedCount,
    });
  }

  if (readiness.readyCount !== FULL_CARD_TRANSLATION_LANGUAGES.length) {
    blockers.push({
      code: "READY_COUNT_MUST_MATCH_LB_ONLY_PHASE",
      got: readiness.readyCount,
      expected: FULL_CARD_TRANSLATION_LANGUAGES.length,
      readyLanguages: readiness.readyLanguages,
    });
  }

  if (readiness.readyLanguages.join(",") !== FULL_CARD_TRANSLATION_LANGUAGES.join(",")) {
    blockers.push({
      code: "READY_MUST_BE_LB_ONLY",
      got: readiness.readyLanguages,
      expected: FULL_CARD_TRANSLATION_LANGUAGES,
    });
  }

  if (isFullCardTranslationBatchReady()) {
    blockers.push({ code: "FULL_BATCH_MUST_NOT_BE_READY_YET" });
  }

  const fullBatchGate = assertTargetedFieldCardTranslationBatchAllowed({ executeLuna: true, pilotOnly: false });
  if (fullBatchGate.pass) {
    blockers.push({ code: "FULL_LUNA_BATCH_SHOULD_STAY_BLOCKED" });
  }
  if (!fullBatchGate.blockers.some((b) => b.code === "CARD_TRANSLATION_32LANG_COLLECTORS_NOT_READY")) {
    blockers.push({ code: "MISSING_BATCH_BLOCKER_CODE" });
  }

  const pilotGate = assertTargetedFieldCardTranslationBatchAllowed({ executeLuna: true, pilotOnly: true });
  if (!pilotGate.pass) {
    blockers.push({ code: "PILOT_ONLY_SHOULD_REMAIN_ALLOWED", detail: pilotGate.blockers });
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const gate = {
    pass: blockers.length === 0,
    blockers,
    readiness,
    batchBlockerActive: !fullBatchGate.pass,
    generatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(path.join(OUT_DIR, "card-translation-32lang-readiness-verification.json"), `${JSON.stringify(gate, null, 2)}\n`);
  console.log(
    JSON.stringify(
      {
        pass: gate.pass,
        blockers,
        readyCount: readiness.readyCount,
        remainingCount: readiness.remainingCount,
        batchBlockerActive: gate.batchBlockerActive,
      },
      null,
      2,
    ),
  );
  process.exit(gate.pass ? 0 : 1);
}

main();
