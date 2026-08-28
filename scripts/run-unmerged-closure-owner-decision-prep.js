#!/usr/bin/env node
"use strict";

/**
 * READ-ONLY OWNER decision preparation for 12 EVIDENCE_SUFFICIENT candidates.
 */

const { runOwnerDecisionPreparation } = require("./lib/content-discovery/unmerged-closure-owner-decision-prep");

function main() {
  console.log("\n=== Unmerged closure OWNER decision preparation (READ-ONLY) ===\n");

  const result = runOwnerDecisionPreparation();
  if (!result.ok) {
    console.error(`STOP: ${result.error}`);
    if (result.baselineErrors) console.error(result.baselineErrors.join("\n"));
    if (result.coverage) console.error(JSON.stringify(result.coverage, null, 2));
    if (result.recheck) console.error(JSON.stringify(result.recheck, null, 2));
    process.exit(1);
  }

  console.log(`ORIGIN_MAIN_SHA = ${result.baseline.originMainSha}`);
  console.log(`PR_693_HEAD_SHA = ${result.baseline.pr693HeadSha}`);
  console.log(`COVERAGE = ${result.coverage.processed}/${result.coverage.expected}`);
  console.log(`PREPARED = ${result.preparedCount}`);
  console.log(`BLOCKED = ${result.blockedCount}`);
  console.log("");
  for (const entry of result.prepared) {
    console.log(
      `PR #${entry.prNumber}: prepared CLOSED_SUPERSEDED / APSTIPRINĀT (delta=${entry.preparedOwnerDecision.evidenceRefs.validation.branchDeltaFieldCount})`,
    );
  }
  console.log("");
  console.log(`Prepared JSON: ${result.paths.outPreparedJson}`);
  console.log(`Prepared MD: ${result.paths.outPreparedMd}`);
  console.log(`Decisions (resolvedCategory still null): ${result.paths.outDecisions}`);
}

main();
