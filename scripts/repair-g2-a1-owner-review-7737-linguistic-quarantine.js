#!/usr/bin/env node
"use strict";

const { ROOT } = require("./lib/audit-common");
const { runLinguisticQuarantineRepair } = require("./lib/g2-a1-phase3/linguistic-quarantine-7737-repair");

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const repair = runLinguisticQuarantineRepair({ root: ROOT, dryRun });
  if (!repair.pass) {
    console.error(
      JSON.stringify(
        { pass: false, classification: repair.classification, errors: repair.errors || [], stage: "repair" },
        null,
        2,
      ),
    );
    process.exit(1);
  }
  console.log(
    JSON.stringify(
      {
        pass: true,
        classification: repair.classification,
        quarantinedToPending: repair.proof.quarantinedToPending,
        remainingNewDecided: repair.proof.remainingNewDecided,
        remainingPending: repair.proof.remainingPending,
        automaticOwnerDecisions: repair.proof.automaticOwnerDecisions,
        individualLinguisticOwnerReview: repair.proof.individualLinguisticOwnerReview,
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
