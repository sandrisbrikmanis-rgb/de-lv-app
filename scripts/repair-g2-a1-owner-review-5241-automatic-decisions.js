#!/usr/bin/env node
"use strict";

const { ROOT } = require("./lib/audit-common");
const {
  runAutomaticDecisionsAudit,
  runAutomaticDecisionsRepair,
} = require("./lib/g2-a1-phase3/automatic-decisions-5241-audit-repair");

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const audit = runAutomaticDecisionsAudit({ root: ROOT, dryRun: true });
  if (!audit.pass) {
    console.error(JSON.stringify({ pass: false, classification: audit.classification, stage: "audit" }, null, 2));
    process.exit(1);
  }
  const repair = runAutomaticDecisionsRepair({ root: ROOT, dryRun });
  if (!repair.pass) {
    console.error(JSON.stringify({ pass: false, classification: repair.classification, errors: repair.errors || [], stage: "repair" }, null, 2));
    process.exit(1);
  }
  console.log(
    JSON.stringify(
      {
        pass: true,
        classification: repair.classification,
        restoredToPending: repair.proof.restoredToPending,
        escalationPending: repair.proof.escalationPending,
        automaticOwnerDecisions: repair.proof.automaticOwnerDecisions,
        nextStep: repair.proof.nextStep,
        outputHash: repair.proof.outputHash,
      },
      null,
      2,
    ),
  );
}

if (require.main === module) {
  main();
}

module.exports = { main };
