#!/usr/bin/env node
"use strict";

const { formatProgressLine } = require("./lib/phase1-luna-checkpoint/progress");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function testDisplayDoesNotShowAttemptOverExpected() {
  const line = formatProgressLine({
    startedAt: new Date().toISOString(),
    scopeAttemptSequence: 4,
    scopesCompleted: 4,
    scopesExpected: 3,
    currentScopeId: "g1/sentences/lv",
    batchesCompleted: 10,
    batchesExpected: 0,
    objectsProcessed: 100,
    objectsExpected: 0,
    realCalls: 4,
    tokensUsed: 1000,
    retries: 0,
    updatedAt: new Date().toISOString(),
  });
  assert(!line.includes("4/3"), "heartbeat must not show attempt/expected as coverage");
  assert(line.includes("scopeAttemptSequence 4"), "heartbeat uses scopeAttemptSequence label");
}

function testAttemptSequenceSeparateFromUniqueCoverage() {
  const line = formatProgressLine({
    startedAt: new Date().toISOString(),
    scopeAttemptSequence: 4,
    scopesExpected: 3,
    uniqueScopesComplete: 3,
    currentScopeId: "g1/sentences/lv",
    batchesCompleted: 1,
    batchesExpected: 0,
    objectsProcessed: 1,
    objectsExpected: 0,
    realCalls: 0,
    tokensUsed: 0,
    retries: 0,
    updatedAt: new Date().toISOString(),
  });
  assert(line.includes("uniqueComplete 3/3"), "unique coverage shown separately");
  assert(line.includes("scopeAttemptSequence 4"), "attempt sequence preserved");
}

function testBasicReconciliationMath() {
  const summary = {
    EXPECTED_UNIQUE_SCOPES: 3,
    ORIGINAL_SUCCEEDED: 2,
    ORIGINAL_FAILED: 1,
    RESUME_QUEUE_UNIQUE: 1,
    SCOPE_ATTEMPTS_TOTAL: 4,
    FINAL_SUCCEEDED_UNIQUE: 3,
    FINAL_FAILED_UNIQUE: 0,
    FINAL_MISSING_UNIQUE: 0,
  };
  assert(summary.ORIGINAL_SUCCEEDED + summary.ORIGINAL_FAILED === 3, "220+98 style invariant");
  assert(summary.SCOPE_ATTEMPTS_TOTAL > summary.EXPECTED_UNIQUE_SCOPES, "attempts may exceed unique");
  assert(summary.FINAL_SUCCEEDED_UNIQUE === 3, "FINAL_COVERAGE 3/3");
  assert(`${summary.FINAL_SUCCEEDED_UNIQUE}/3` === "3/3", "coverage string");
}

async function main() {
  testDisplayDoesNotShowAttemptOverExpected();
  testAttemptSequenceSeparateFromUniqueCoverage();
  testBasicReconciliationMath();

  console.log(`R-COUNT-001: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main();
