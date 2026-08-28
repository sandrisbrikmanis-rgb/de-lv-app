#!/usr/bin/env node
"use strict";

/**
 * READ-ONLY OWNER-PREP audit for 53 unmerged closure candidates (D1).
 */

const { runOwnerPrepAudit } = require("./lib/content-discovery/unmerged-closure-owner-prep");

function main() {
  console.log("\n=== Unmerged closure OWNER-PREP audit (READ-ONLY) ===\n");

  const result = runOwnerPrepAudit();

  if (!result.ok) {
    console.error(`BLOCKED: ${result.error}`);
    if (result.baseline) {
      console.error(`fetch=${result.baseline.fetchStatus} revParse=${result.baseline.revParseStatus}`);
    }
    if (result.scope) console.error(JSON.stringify(result.scope, null, 2));
    process.exit(1);
  }

  const { baseline, scope, proposedSummary, validation, paths, priority } = result;

  console.log(`MASTER_STANDARD_VERSION = ${baseline.masterStandardVersion}`);
  console.log(`ORIGIN_MAIN_SHA = ${baseline.originMainSha}`);
  console.log(`PR_693_HEAD_SHA = ${baseline.pr693HeadSha}`);
  console.log(`FETCH_STATUS = ${baseline.fetchStatus}`);
  console.log(`REV_PARSE_STATUS = ${baseline.revParseStatus}`);
  console.log(`PRODUCTION_DIFF_PR693 = ${baseline.productionDiffPr693.length} files (clean=${baseline.productionDiffClean})`);
  console.log(`DE_CHANGES_PR693 = ${baseline.deChangesPr693.length} files (clean=${baseline.deDiffClean})`);
  console.log("");
  console.log(`SCOPE: ${scope.processed}/${scope.expected} · MISSING=${scope.missing} · DUPLICATES=${scope.duplicates}`);
  console.log("");
  console.log("PROPOSED summary:");
  for (const [cat, count] of Object.entries(proposedSummary)) {
    console.log(`  ${cat}: ${count}`);
  }
  console.log("");
  if (priority.pr343) {
    console.log(`PR #343 PROPOSED: ${priority.pr343.proposedCategory}`);
    console.log(`  ${priority.pr343.proposedReason}`);
  }
  if (priority.pr528) {
    console.log(`PR #528 PROPOSED: ${priority.pr528.proposedCategory}`);
    console.log(`  ${priority.pr528.proposedReason}`);
  }
  console.log("");
  console.log("Validation:", JSON.stringify(validation, null, 2));
  console.log("");
  console.log(`Evidence: ${paths.outEvidence}`);
  console.log(`Decisions: ${paths.outDecisions}`);
  console.log(`OWNER view: ${paths.outView}`);
  console.log(`GitHub index: ${paths.outGithub}`);
  console.log("");
  console.log(`VERDICT = ${validation.VERDICT}`);
}

main();
