#!/usr/bin/env node
"use strict";

/**
 * READ-ONLY unmerged closure/repair/audit branch classification (D1).
 */

const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  classifyUnmergedClosureCandidates,
  writeClassificationReports,
} = require("./lib/content-discovery/unmerged-closure-classifier");
const { resolveOriginMainSha } = require("./lib/content-discovery/git-baseline");

function main() {
  const origin = resolveOriginMainSha();
  console.log("\n=== Unmerged closure classification (READ-ONLY) ===\n");
  console.log(`origin/main: ${origin.sha || "(unresolved)"}`);
  console.log(`fetch: ${origin.fetchStatus}`);

  const classification = classifyUnmergedClosureCandidates();
  const { outJson, outMd } = writeClassificationReports(classification);

  console.log(`Raw candidates: ${classification.unmergedClosureCountRaw}`);
  console.log(`INTEGRATED_HISTORICAL: ${classification.summary?.INTEGRATED_HISTORICAL || 0}`);
  console.log(`CLOSED_SUPERSEDED: ${classification.summary?.CLOSED_SUPERSEDED || 0}`);
  console.log(`ACTIVE_UNMERGED_CLOSURE: ${classification.activeUnmergedClosureCount}`);
  console.log(`NEEDS_OWNER_REVIEW: ${classification.needsOwnerReviewCount}`);
  console.log(`JSON: ${outJson}`);
  console.log(`MD: ${outMd}`);
  console.log("");

  if (!classification.ok) {
    console.error(`Classification failed: ${classification.error}`);
    process.exit(1);
  }

  if (classification.activeUnmergedClosureCount > 0) {
    console.log("D1: ACTIVE unmerged closures found — baseline would BLOCK.");
    process.exit(2);
  }

  console.log("D1: No active unmerged closures. Baseline closure gate would PASS.");
}

main();
