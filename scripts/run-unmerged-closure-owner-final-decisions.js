#!/usr/bin/env node
"use strict";

const { runOwnerFinalDecisions } = require("./lib/content-discovery/unmerged-closure-owner-final-decisions");

function main() {
  console.log("\n=== Unmerged closure OWNER final decisions (53/53) ===\n");

  const result = runOwnerFinalDecisions();
  if (!result.ok) {
    console.error(`STOP: ${result.error}`);
    if (result.expected) console.error(result);
    process.exit(1);
  }

  console.log(`ORIGIN_MAIN_SHA = ${result.baseline.originMainSha}`);
  console.log(`PR_693_HEAD_SHA = ${result.baseline.pr693HeadSha}`);
  console.log(`OWNER_REVIEWED = ${result.summary.reviewed}/53`);
  console.log(`OWNER_PENDING = ${result.summary.pending}/53`);
  console.log(`REPAIR_ROWS = ${result.summary.repairRows}`);
  console.log("");
  console.log("resolvedCategory:", result.summary.resolvedCategory);
  console.log("ownerDecision:", result.summary.ownerDecision);
  console.log("");
  for (const pr of [343, 528, 564, 508, 455]) {
    const p = result.packages.find((x) => x.prNumber === pr);
    if (p) {
      console.log(
        `PR #${pr}: ${p.resolvedCategory} / ${p.ownerDecision} | fields ${p.reviewedFields.reviewed}/${p.reviewedFields.expected} | repairs ${p.repairCount}`,
      );
    }
  }
  console.log("");
  console.log(`VERDICT = ${result.summary.verdict}`);
}

main();
