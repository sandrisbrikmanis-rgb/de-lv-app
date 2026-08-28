#!/usr/bin/env node
"use strict";

/**
 * READ-ONLY superseded evidence validation for 53 unmerged closure candidates.
 */

const {
  runSupersededValidation,
  mergeValidationIntoArtifacts,
} = require("./lib/content-discovery/unmerged-closure-superseded-validation");

function main() {
  console.log("\n=== Unmerged closure superseded evidence validation (READ-ONLY) ===\n");

  const result = runSupersededValidation();
  if (!result.ok) {
    console.error(`BLOCKED: ${result.error}`);
    process.exit(1);
  }

  mergeValidationIntoArtifacts(result);

  const { baseline, scope, summary, validation, paths, priority } = result;

  console.log(`MASTER_STANDARD_VERSION = ${baseline.masterStandardVersion}`);
  console.log(`ORIGIN_MAIN_SHA = ${baseline.originMainSha}`);
  console.log(`PR_693_HEAD_SHA = ${baseline.pr693HeadSha}`);
  console.log(`FETCH_STATUS = ${baseline.fetchStatus}`);
  console.log(`REV_PARSE_STATUS = ${baseline.revParseStatus}`);
  console.log(`PRODUCTION_DIFF_PR693 = ${baseline.productionDiffPr693.length}`);
  console.log(`DE_CHANGES_PR693 = ${baseline.deChangesPr693.length}`);
  console.log("");
  console.log(`SCOPE: ${scope.processed}/${scope.expected}`);
  console.log("");
  console.log("Evidence verdicts:", summary.evidence);
  console.log("Validated proposed categories:", summary.validated);
  console.log(
    `Field totals: NOT_PRESENT=${summary.notPresent} CONFLICTING=${summary.conflicting} UNRESOLVED=${summary.unresolved}`,
  );
  console.log("");
  if (priority.pr343) {
    console.log(
      `PR #343: ${priority.pr343.evidenceVerdict} → ${priority.pr343.validatedProposedCategory} (delta=${priority.pr343.branchDeltaFieldCount})`,
    );
  }
  if (priority.pr528) {
    console.log(
      `PR #528: ${priority.pr528.evidenceVerdict} → ${priority.pr528.validatedProposedCategory} (delta=${priority.pr528.branchDeltaFieldCount})`,
    );
  }
  console.log("");
  console.log("Validation:", JSON.stringify(validation, null, 2));
  console.log("");
  console.log(`Report JSON: ${paths.outJson}`);
  console.log(`Report MD: ${paths.outMd}`);
  console.log(`VERDICT = ${validation.VERDICT}`);
}

main();
