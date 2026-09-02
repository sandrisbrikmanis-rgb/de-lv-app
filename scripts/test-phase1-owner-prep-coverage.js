#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { generateOwnerPrep, evaluateOwnerPrepCoverage } = require("./lib/content-discovery/phase1-owner-prep");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function sampleFinding(id) {
  return {
    auditId: id,
    findingStableId: `${id}|card|lv|TRANSLATION|gpt-5.6-luna`,
    dedupKey: `g2/b1/lv|lv|g2|b1|card|idx:1|lv|TRANSLATION`,
    scopeId: "g2/b1/lv",
    group: "g2",
    dataset: "b1",
    lang: "lv",
    cardId: "card",
    fieldPath: "lv",
    category: "TRANSLATION",
    severity: "MEDIUM",
    classificationStatus: "VALIDATED_REAL_FINDING",
    current: "x",
    source: "gpt-5.6-luna",
  };
}

function testOwnerPrepCoveragePass() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "owner-prep-"));
  const findings = [sampleFinding("PH1-000001"), sampleFinding("PH1-000002")];
  const prep = generateOwnerPrep(findings, dir);
  const matrix = { findings, ownerPrep: prep };
  const cov = evaluateOwnerPrepCoverage({ matrix, ownerPrepOutDir: dir });
  assert(cov.OWNER_PREP_FILES_EXIST, "files exist");
  assert(cov.OWNER_PREP_ROWS === 2, "row count matches");
  assert(cov.MISSING_AUDIT_IDS === 0, "no missing audit ids");
  assert(cov.ALL_INITIAL_STATUSES_PENDING, "all pending");
  assert(cov.pass, "F1-8 coverage pass");
}

function testOwnerPrepMissingFileFail() {
  const cov = evaluateOwnerPrepCoverage({
    matrix: { findings: [sampleFinding("PH1-000001")] },
    ownerPrepOutDir: path.join(os.tmpdir(), "missing-owner-prep-dir"),
  });
  assert(!cov.pass, "missing files fail");
}

function main() {
  testOwnerPrepCoveragePass();
  testOwnerPrepMissingFileFail();
  console.log(`R-OWNERPREP-001: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main();
