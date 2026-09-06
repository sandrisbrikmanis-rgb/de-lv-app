#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const baseline = require("./fixtures/phase1-run-id-compatibility-baseline.json");
const {
  buildLunaRequestId,
  getLegacyObjectId,
} = require("./lib/phase1-luna-checkpoint/object-identity");

const RUN_ARTIFACT_ROOT = process.env.PHASE1_RUN_ARTIFACT_ROOT || baseline.runArtifactRoot;

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function sha256File(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function requireRunArtifactRoot() {
  if (!fs.existsSync(RUN_ARTIFACT_ROOT)) {
    throw new Error(`PHASE1_RUN_ARTIFACT_ROOT missing: ${RUN_ARTIFACT_ROOT}`);
  }
}

function testReferenceCheckpointHashes() {
  requireRunArtifactRoot();
  const rel = baseline.referenceCheckpoint.relPath;
  const filePath = path.join(RUN_ARTIFACT_ROOT, rel);
  assert(fs.existsSync(filePath), `reference checkpoint exists: ${rel}`);
  const cp = JSON.parse(fs.readFileSync(filePath, "utf8"));
  assert(
    cp.expectedIdsHash === baseline.referenceCheckpoint.expectedIdsHash,
    "reference expectedIdsHash matches frozen baseline",
  );
  assert(
    cp.requestInputHash === baseline.referenceCheckpoint.requestInputHash,
    "reference requestInputHash matches frozen baseline",
  );
  assert(
    sha256File(filePath) === baseline.referenceCheckpoint.sha256,
    "reference checkpoint sha256 matches frozen baseline",
  );
}

function testFrozenCheckpointBytesUnchanged() {
  requireRunArtifactRoot();
  for (const [rel, frozenSha] of Object.entries(baseline.frozenCheckpointSha256)) {
    const filePath = path.join(RUN_ARTIFACT_ROOT, rel);
    assert(fs.existsSync(filePath), `frozen checkpoint present: ${rel}`);
    assert(sha256File(filePath) === frozenSha, `frozen checkpoint unchanged: ${rel}`);
  }
}

function testCanonicalIdBuilderUnchanged() {
  const recoveryFixture = require("./fixtures/phase1-id-recovery-lb-sq.json");
  const scopeId = "g2/b1/lb";
  const obj = { de: "ländlich", index: 1718, productionFile: "data/lb/b1.js" };
  assert(
    buildLunaRequestId(scopeId, obj) === recoveryFixture.landlichCanonicalId,
    "canonical ID builder unchanged for ländlich",
  );
  assert(getLegacyObjectId(obj) === "ländlich", "legacy id unchanged");
}

function main() {
  testReferenceCheckpointHashes();
  testFrozenCheckpointBytesUnchanged();
  testCanonicalIdBuilderUnchanged();
  console.log(`\nPhase 1 RUN_ID compatibility tests: ${testsRun - testsFailed}/${testsRun} passed`);
  if (testsFailed > 0) process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = {
  testReferenceCheckpointHashes,
  testFrozenCheckpointBytesUnchanged,
};
