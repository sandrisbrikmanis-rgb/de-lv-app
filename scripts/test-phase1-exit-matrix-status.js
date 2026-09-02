#!/usr/bin/env node
"use strict";

const { evaluateF1Gates } = require("./run-phase1-exit-matrix");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

const baselinePass = {
  verdict: "PASS",
  fetchStatus: "PASS",
  revParseStatus: "PASS",
  activeUnmergedClosureCount: 0,
  deChanges: [],
};

const goodSummary = Array.from({ length: 320 }, (_, i) => ({
  scopeId: `scope-${i}`,
  applicability: i < 318 ? "APPLICABLE" : "EXPECTED_NOT_APPLICABLE",
  inventoryApplicable: i < 309,
  inventoryCoverage: 1,
  unmappedMainTranslationFields: 0,
  multiScanApplicable: i < 309,
  multiScanCoverage: 1,
  lunaApplicable: i < 318,
  lunaProcessed: i < 318,
  lunaStatus: "PASS",
  lunaObjectsExpected: 10,
  lunaObjectsReturned: 10,
}));

function matrixWith(overrides = {}) {
  return {
    summary: goodSummary,
    findings: [],
    totals: { findingsValidated: 0 },
    gates: {},
    validation: { pass: true, schemaErrorCount: 0, unclassifiedCount: 0 },
    ...overrides,
  };
}

function testAllPassPhase1Complete() {
  const r = evaluateF1Gates({
    matrix: matrixWith(),
    baseline: baselinePass,
    productionDiff: { clean: true },
    options: { withLuna: true },
  });
  assert(r.status === "PHASE_1_COMPLETE", "all pass => PHASE_1_COMPLETE");
  assert(r.pass === true, "pass true with PHASE_1_COMPLETE");
}

function testF1_5FailBlocked() {
  const summary = goodSummary.map((row, i) =>
    i === 0 ? { ...row, lunaStatus: "FAIL", lunaProcessed: true } : row,
  );
  const r = evaluateF1Gates({
    matrix: matrixWith({ summary }),
    baseline: baselinePass,
    productionDiff: { clean: true },
    options: { withLuna: true },
  });
  assert(r.status === "PHASE_1_BLOCKED", "F1-5 fail => PHASE_1_BLOCKED");
  assert(r.pass === false, "pass false when blocked");
  assert(r.gates["F1-5"] === "FAIL", "F1-5 FAIL");
}

function testF1_6FailBlocked() {
  const r = evaluateF1Gates({
    matrix: matrixWith(),
    baseline: baselinePass,
    productionDiff: { clean: true },
    options: { withLuna: true },
  });
  r.validation = { pass: false, schemaErrorCount: 1, unclassifiedCount: 0 };
  const r2 = evaluateF1Gates({
    matrix: matrixWith({ validation: { pass: false, schemaErrorCount: 1, unclassifiedCount: 1 } }),
    baseline: baselinePass,
    productionDiff: { clean: true },
    options: { withLuna: true },
  });
  assert(r2.status === "PHASE_1_BLOCKED", "F1-6 fail => PHASE_1_BLOCKED");
  assert(r2.gates["F1-6"] === "FAIL", "F1-6 FAIL");
}

function testF0Pass() {
  const r = evaluateF1Gates({
    matrix: matrixWith(),
    baseline: baselinePass,
    productionDiff: { clean: true },
    options: { withLuna: false },
  });
  assert(r.status === "PHASE_0_COMPLETION_PASS", "F0 all pass");
}

function main() {
  testAllPassPhase1Complete();
  testF1_5FailBlocked();
  testF1_6FailBlocked();
  testF0Pass();
  console.log(`R-EXIT-001: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main();
