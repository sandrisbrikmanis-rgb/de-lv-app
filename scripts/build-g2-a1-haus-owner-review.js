#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { runHaus32LanguageSourcePilot } = require("./lib/g2-a1-production-current/haus-32-language-source-pilot");
const {
  buildHausOwnerReviewPackage,
  writeHausOwnerReviewArtifacts,
  PILOT_DIR,
  OUT_DIR,
} = require("./lib/g2-a1-production-current/haus-owner-review");

function writeJsonPilot(name, obj) {
  fs.mkdirSync(PILOT_DIR, { recursive: true });
  fs.writeFileSync(path.join(PILOT_DIR, name), `${JSON.stringify(obj, null, 2)}\n`);
}

async function refreshPilotFromRun() {
  const result = await runHaus32LanguageSourcePilot();
  if (!result.pass && result.code === "HAUS_INVENTORY_INVALID") {
    return { pass: false, result };
  }
  writeJsonPilot("haus-de-source-evidence.json", result.deEvidence);
  writeJsonPilot("haus-32-language-verdicts.json", {
    generatedAt: new Date().toISOString(),
    counts: result.counts,
    classification: result.classification,
    nextAction: result.nextAction,
    rows: result.pilotRows,
  });
  writeJsonPilot("haus-pilot-verification.json", {
    generatedAt: new Date().toISOString(),
    pilotRowCount: result.pilotRows.length,
    counts: result.counts,
    classification: result.classification,
  });
  return { pass: true, counts: result.counts };
}

async function main() {
  const skipPilot = process.argv.includes("--skip-pilot-refresh");
  if (!skipPilot) {
    const pilotRefresh = await refreshPilotFromRun();
    if (!pilotRefresh.pass) {
      console.error(JSON.stringify(pilotRefresh, null, 2));
      process.exit(1);
    }
  }

  const built = buildHausOwnerReviewPackage();
  if (!built.pass) {
    console.error(JSON.stringify({ pass: false, ...built }, null, 2));
    process.exit(1);
  }
  writeHausOwnerReviewArtifacts(built);

  const legacyExecution = path.join(OUT_DIR, "haus-owner-review-execution.json");
  if (fs.existsSync(legacyExecution)) {
    fs.unlinkSync(legacyExecution);
  }
  fs.writeFileSync(
    path.join(OUT_DIR, "haus-owner-review-execution.json"),
    `${JSON.stringify(
      {
        invalidated: true,
        reason: "INVALIDATED_UNAUTHORIZED_OWNER_FIELD_POPULATION",
        replacedBy: "haus-audit-evidence-proposals.json",
        note: "Prior auto-filled OWNER LABOT rows are void.",
      },
      null,
      2,
    )}\n`,
  );

  console.log(
    JSON.stringify({
      pass: true,
      classification: built.manifest.classification,
      nextAction: built.manifest.nextAction,
      auditCounts: built.counts,
      ownerDecisionFinal: built.manifest.ownerDecisionFinal,
      outDir: "reports/g2-a1-production-current/haus-owner-review",
    }),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
