#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  getCardTranslation32LangReadiness,
  loadVerificationSnapshot,
  VERIFICATION_JSON,
} = require("./lib/g2-a1-production-current/card-translation-32lang-readiness");
const { assertTargetedFieldCardTranslationBatchAllowed } = require("./lib/g2-a1-production-current/card-translation-audit-policy");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-32lang-readiness");

function main() {
  const blockers = [];

  if (!fs.existsSync(VERIFICATION_JSON)) {
    blockers.push({
      code: "MISSING_FULL_VERIFICATION_ARTIFACT",
      hint: "Run npm run verify:g2-a1:card-translation-32lang-full",
    });
  }

  const snap = loadVerificationSnapshot();
  const readiness = getCardTranslation32LangReadiness();

  if (snap?.fullA1AuditExecuted) {
    blockers.push({ code: "FULL_A1_AUDIT_MUST_NOT_RUN_IN_THIS_TASK" });
  }
  if (snap?.productionDataModified) {
    blockers.push({
      code: "PRODUCTION_MUST_NOT_CHANGE",
      pr843Paths: snap.productionGit?.pr843ProductionPaths || [],
      workingTree: snap.productionGit?.workingTreeProductionPaths || [],
    });
  }

  const fullBatchGate = assertTargetedFieldCardTranslationBatchAllowed({ executeLuna: true, pilotOnly: false });

  if (snap?.classification === "CARD_TRANSLATION_READINESS_32_OF_32_VERIFIED") {
    if (readiness.readyCount !== 32) {
      blockers.push({ code: "CLASSIFICATION_MISMATCH_READY_COUNT" });
    }
  } else if (readiness.fullCardTranslationBatchReady) {
    blockers.push({ code: "BATCH_READY_WITHOUT_32_CLASSIFICATION" });
  }

  if (fullBatchGate.pass && readiness.readyCount < 32) {
    blockers.push({ code: "FULL_LUNA_BATCH_MUST_STAY_BLOCKED_UNTIL_32" });
  }
  if (!fullBatchGate.pass && readiness.readyCount === 32) {
    blockers.push({ code: "BATCH_BLOCKER_MUST_RELEASE_WHEN_32_READY" });
  }

  const pilotGate = assertTargetedFieldCardTranslationBatchAllowed({ executeLuna: true, pilotOnly: true });
  if (!pilotGate.pass) {
    blockers.push({ code: "PILOT_ONLY_SHOULD_REMAIN_ALLOWED" });
  }

  for (const script of [
    "scripts/test-g2-a1-card-translation-audit-flow.js",
    "scripts/test-g2-a1-card-translation-audit-executor.js",
    "scripts/test-card-translation-audit-search.js",
  ]) {
    try {
      execSync(`node ${script}`, { cwd: ROOT, stdio: "pipe", encoding: "utf8" });
    } catch (e) {
      blockers.push({ code: "REGRESSION_FAIL", script, detail: String(e.stderr || e.message).slice(0, 300) });
    }
  }

  const pass = blockers.length === 0;
  const gate = {
    pass,
    blockers,
    readiness,
    snap: snap
      ? {
          classification: snap.classification,
          nextAction: snap.nextAction,
          readyCount: snap.readyCount,
          readyLanguages: snap.readyLanguages,
          batchBlockerActive: snap.batchBlockerActive,
        }
      : null,
    batchBlockerActive: !fullBatchGate.pass,
    generatedAt: new Date().toISOString(),
  };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(OUT_DIR, "card-translation-32lang-readiness-verification.json"),
    `${JSON.stringify(gate, null, 2)}\n`,
  );
  console.log(JSON.stringify({ pass, blockers, readyCount: readiness.readyCount, classification: snap?.classification }, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
