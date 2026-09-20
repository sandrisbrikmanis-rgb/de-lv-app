#!/usr/bin/env node
"use strict";

const { ROOT } = require("./lib/audit-common");
const { applyParallelEscalationReview } = require("./lib/g2-a1-phase3/owner-review-7737-escalations");

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const result = applyParallelEscalationReview({ root: ROOT, dryRun });
  if (!result.pass) {
    console.error(JSON.stringify({ pass: false, classification: result.classification, errors: result.errors }, null, 2));
    process.exit(1);
  }
  console.log(
    JSON.stringify(
      {
        pass: true,
        classification: result.classification,
        reviewedDecided: result.proof.reviewedDecided,
        labot: result.proof.labot,
        nelabot: result.proof.nelabot,
        remainingPending: result.proof.remainingPending,
        reviewBatchCount: result.proof.reviewBatchCount,
        parallelBatchReview: result.proof.parallelBatchReview,
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
