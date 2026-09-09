#!/usr/bin/env node
"use strict";

const { ROOT } = require("./lib/audit-common");
const { runLinguisticDecisionsAudit } = require("./lib/g2-a1-phase3/linguistic-quarantine-7737-repair");

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const audit = runLinguisticDecisionsAudit({ root: ROOT, dryRun });
  if (!audit.pass) {
    console.error(JSON.stringify({ pass: false, classification: audit.classification, errors: audit.errors || [] }, null, 2));
    process.exit(1);
  }
  console.log(
    JSON.stringify(
      {
        pass: true,
        classification: audit.classification,
        quarantineTarget: audit.proof.quarantineTarget,
        automaticOwnerDecisions: audit.proof.automaticOwnerDecisions,
        individualLinguisticOwnerReview: audit.proof.individualLinguisticOwnerReview,
        nextStep: audit.proof.nextStep,
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
