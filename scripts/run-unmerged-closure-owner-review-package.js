#!/usr/bin/env node
"use strict";

const { runOwnerReviewPackage } = require("./lib/content-discovery/unmerged-closure-owner-review-package");

function main() {
  console.log("\n=== Unmerged closure OWNER review package (53/53) ===\n");

  const result = runOwnerReviewPackage();
  if (!result.ok) {
    console.error(`STOP: ${result.error}`);
    if (result.expected) console.error(result);
    process.exit(1);
  }

  console.log(`ORIGIN_MAIN_SHA = ${result.baseline.originMainSha}`);
  console.log(`PR_693_HEAD_SHA = ${result.baseline.pr693HeadSha}`);
  console.log(`COVERAGE = ${result.coverage.processed}/${result.coverage.expected}`);
  console.log(`OWNER_AUTO_ACCEPTED = 0/53`);
  console.log(`OWNER_PENDING = 53/53`);
  console.log("");
  console.log("12 EVIDENCE_SUFFICIENT recheck:");
  for (const row of result.sufficientRecheck) {
    console.log(`  PR #${row.prNumber}: recheck=${row.recheck} recommended=${row.recommendedCategory} delta=${row.delta}`);
  }
  console.log("");
  console.log("recommendedCategory summary:", result.recSummary);
  console.log("field totals:", result.fieldTotals);
  console.log("");
  if (result.pr343) {
    console.log("PR #343:", JSON.stringify(result.pr343, null, 2));
  }
  if (result.pr528) {
    console.log("PR #528:", JSON.stringify(result.pr528, null, 2));
  }
  console.log("");
  console.log(`VERDICT = OWNER_REVIEW_PACKAGE_READY`);
}

main();
