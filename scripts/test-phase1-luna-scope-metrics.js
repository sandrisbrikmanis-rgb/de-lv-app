#!/usr/bin/env node
"use strict";

const { reconcileUniqueScopeCoverage } = require("./lib/phase1-luna-scope-reconciliation");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function testPartialScopesAndRemainingBatchesLabels() {
  const recon = reconcileUniqueScopeCoverage({
    runId: "phase1-2026-08-30T08-56-50-163Z-a8e1dec1",
    skipIntegrity: true,
  });
  assert(recon.PARTIAL_SCOPES === 1, `PARTIAL_SCOPES=1 (got ${recon.PARTIAL_SCOPES})`);
  assert(recon.REMAINING_BATCHES === 67, `REMAINING_BATCHES=67 (got ${recon.REMAINING_BATCHES})`);
  assert(recon.FINAL_COMPLETE === 317, `FINAL_COMPLETE=317 (got ${recon.FINAL_COMPLETE})`);
  assert(
    recon.REMAINING_BATCHES !== recon.PARTIAL_SCOPES,
    "REMAINING_BATCHES must not be confused with PARTIAL_SCOPES",
  );
}

function main() {
  testPartialScopesAndRemainingBatchesLabels();
  console.log(`\nPhase 1 scope metric naming tests: ${testsRun - testsFailed}/${testsRun} passed`);
  if (testsFailed > 0) process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = { main };
