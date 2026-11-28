#!/usr/bin/env node
"use strict";

const { ROOT } = require("./lib/audit-common");
const { ingestIndividualOwnerReview7737 } = require("./lib/g2-a1-phase3/individual-7737-ingest");

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const result = ingestIndividualOwnerReview7737({ root: ROOT, dryRun });
  if (!result.pass) {
    console.error(JSON.stringify({ pass: false, classification: result.classification, errors: result.errors }, null, 2));
    process.exit(1);
  }
  console.log(
    JSON.stringify(
      {
        pass: true,
        classification: result.classification,
        newLabot: result.proof.newLabot,
        newNelabot: result.proof.newNelabot,
        newDecided: result.proof.newDecided,
        remainingPending: result.proof.remainingPending,
        decided: result.proof.decided,
        labot: result.proof.labot,
        nelabot: result.proof.nelabot,
        pending: result.proof.pending,
        nextStep: result.proof.nextStep,
        outputHash: result.proof.outputHash,
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
