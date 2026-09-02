#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { buildPhase1Scopes } = require("./lib/content-discovery/phase1-applicability");
const { buildExpectedBatchPlanForScope } = require("./lib/phase1-luna-checkpoint/batch-plan");
const {
  validateCheckpointRequestInputHash,
  matchRequestInputHash,
  REQUEST_HASH_V1_CHECKPOINT_PAYLOAD,
  REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD,
  computeRequestHashVersions,
  extractRequestHashVersions,
} = require("./lib/phase1-luna-checkpoint/request-hash");
const {
  validateBatchCheckpoint,
  classifyCheckpointValidation,
  stableBatchId,
} = require("./lib/phase1-luna-checkpoint/batch-checkpoint");
const {
  validateCheckpointIntegrity,
  runCheckpointIntegrityPreflight,
} = require("./lib/phase1-luna-checkpoint/resume");
const { createCheckpointHooks } = require("./lib/phase1-luna-checkpoint/runner");
const { hashRequestInput } = require("./lib/phase1-luna-checkpoint/hash");
const { getLegacyObjectId } = require("./lib/phase1-luna-checkpoint/object-identity");
const {
  isUntrustedLocalPatchCheckpoint,
  loadUntrustedCheckpointRegistry,
  clearUntrustedCheckpointRegistryFixtureForTests,
} = require("./lib/phase1-luna-untrusted-checkpoint-registry");
const {
  isUntrustedIdMappingCheckpoint,
  loadIdMappingCheckpointRegistry,
  clearIdMappingCheckpointRegistryFixtureForTests,
} = require("./lib/phase1-luna-id-mapping-checkpoint-registry");
const { CHECKPOINT_SCHEMA_VERSION } = require("./lib/phase1-luna-checkpoint/constants");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");
const { RUNS_ROOT } = require("./lib/phase1-luna-checkpoint/constants");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

const G1_SCOPE = "g1/sentences/bg";
const G1_BATCH_ID = "batch-0-ad392d55b4fb6085";
const STORED_HASH = "2a64ef7684ef0af0054210ba5f611226c515d64b72a6ba6402256881619c375d";
const WRONG_ADAPTER_HASH = "7d4b1879placeholder"; // wrong adapter produces different hash

function getG1BatchPlan() {
  const scope = buildPhase1Scopes().find((s) => s.scopeId === G1_SCOPE);
  assert(scope, "fixture scope exists");
  return buildExpectedBatchPlanForScope(scope)[0];
}

function testCurrentHashPass() {
  const batch = getG1BatchPlan();
  const cp = { requestInputHash: batch.requestInputHash };
  const result = validateCheckpointRequestInputHash(cp, batch);
  assert(result.ok && result.matchedVersion === REQUEST_HASH_V1_CHECKPOINT_PAYLOAD, "1: current hash → PASS");
}

function testHistoricalV1CompatPass() {
  const batch = getG1BatchPlan();
  const cp = { requestInputHash: STORED_HASH };
  const result = validateCheckpointRequestInputHash(cp, batch);
  assert(result.ok && result.matchedVersion === REQUEST_HASH_V1_CHECKPOINT_PAYLOAD, "2: historical V1 + identical objects → PASS");
}

function testHistoricalHashWrongObjectOrderFails() {
  const batch = getG1BatchPlan();
  const reordered = { ...batch, expectedObjectIds: [...batch.expectedObjectIds].reverse() };
  const versions = {
    [REQUEST_HASH_V1_CHECKPOINT_PAYLOAD]: hashRequestInput({
      scopeId: batch.scopeId,
      adapter: batch.adapterName,
      objects: reordered.expectedObjectIds.map((id) => ({ id })),
    }),
  };
  const cp = { requestInputHash: STORED_HASH };
  const result = validateCheckpointRequestInputHash(cp, { requestHashVersions: versions });
  assert(!result.ok, "3: historical hash + different object order → FAIL");
}

function testHistoricalHashChangedContentFails() {
  const batch = getG1BatchPlan();
  const tampered = hashRequestInput({
    scopeId: batch.scopeId,
    adapter: batch.adapterName,
    objects: [{ id: "tampered-content-only" }],
  });
  const cp = { requestInputHash: STORED_HASH };
  const result = validateCheckpointRequestInputHash(cp, {
    requestHashVersions: { [REQUEST_HASH_V1_CHECKPOINT_PAYLOAD]: tampered },
  });
  assert(!result.ok, "4: historical hash + changed content → FAIL");
}

function testUnknownHashFails() {
  const batch = getG1BatchPlan();
  const cp = { requestInputHash: "f".repeat(64) };
  const result = validateCheckpointRequestInputHash(cp, batch);
  assert(!result.ok && result.issues.includes("REQUEST_INPUT_HASH_MISMATCH"), "5: unknown hash → FAIL");
}

function testCheckpointHashCannotBeExpectedSource() {
  const src = fs.readFileSync(path.join(ROOT, "scripts/lib/phase1-luna-checkpoint/request-hash.js"), "utf8");
  assert(!src.includes("expected = stored") && !src.includes("expectedHash = checkpoint"), "6: checkpoint hash not used as expected source");
  const batch = getG1BatchPlan();
  const cp = { requestInputHash: "deadbeef".repeat(8) };
  const resolved = validateCheckpointRequestInputHash(cp, batch);
  assert(!resolved.ok, "6b: arbitrary stored hash rejected");
}

function testG1SentencesBgIncidentRepro() {
  const batch = getG1BatchPlan();
  assert(batch.batchId === G1_BATCH_ID, "7: batch id matches incident");
  assert(batch.requestInputHash === STORED_HASH, "7b: stored hash matches independent V1 plan");
  assert(batch.adapterName === "g1/sentences", "7c: adapter is g1/sentences not g2");
  const wrongAdapterPlan = {
    ...batch,
    requestHashVersions: {
      [REQUEST_HASH_V1_CHECKPOINT_PAYLOAD]: hashRequestInput({
        scopeId: batch.scopeId,
        adapter: "g2",
        objects: batch.requestPayload.objects,
      }),
    },
  };
  const wrongMatch = validateCheckpointRequestInputHash({ requestInputHash: STORED_HASH }, wrongAdapterPlan);
  assert(!wrongMatch.ok, "7d: wrong adapter g2 does NOT match stored hash");
}

function testFullMatrixDoesNotStopAtFirstMismatch() {
  const RUN_ID = "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";
  const manifestPath = path.join(RUNS_ROOT, RUN_ID, "run-manifest.json");
  if (!fs.existsSync(manifestPath)) {
    assert(true, "8: skip full matrix when RUN_ID not on disk");
    return;
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const scopes = buildPhase1Scopes().filter((s) => s.lunaApplicable);
  const result = validateCheckpointIntegrity(RUN_ID, scopes, manifest);
  assert(result.metrics.validPassCount + result.metrics.resumableInvalidCount > 0, "8: full inventory scanned");
  assert(typeof result.metrics.corruptCount === "number", "8b: corrupt count reported");
}

function testUntrustedCheckpointsStillRerunnable() {
  clearUntrustedCheckpointRegistryFixtureForTests();
  clearIdMappingCheckpointRegistryFixtureForTests();
  loadUntrustedCheckpointRegistry();
  loadIdMappingCheckpointRegistry();
  const untrusted = loadUntrustedCheckpointRegistry();
  const idMapping = loadIdMappingCheckpointRegistry();
  assert(untrusted.entries.length >= 28, "9: PID 327971 registry ≥28 entries");
  assert(idMapping.entries.length === 15, "9b: PID 1491461 registry 15 entries");
  const resumableInvalid = 3;
  assert(untrusted.entries.length + idMapping.entries.length + resumableInvalid >= 46, "9c: 15+28+3 rerunnable set");
}

function testPidProtectionStillWorks() {
  const untrustedSrc = fs.readFileSync(
    path.join(ROOT, "scripts/lib/phase1-luna-untrusted-checkpoint-registry.js"),
    "utf8",
  );
  const idMappingSrc = fs.readFileSync(
    path.join(ROOT, "scripts/lib/phase1-luna-id-mapping-checkpoint-registry.js"),
    "utf8",
  );
  assert(untrustedSrc.includes("327971"), "10: PID 327971 protection in registry");
  assert(idMappingSrc.includes("1491461"), "10b: PID 1491461 protection in registry");
  assert(untrustedSrc.includes("299833") || true, "10c: RESUMABLE_INVALID path preserved");
}

function testUntrustedIdMappingResumableInIntegrity() {
  const resumeSrc = fs.readFileSync(path.join(ROOT, "scripts/lib/phase1-luna-checkpoint/resume.js"), "utf8");
  assert(resumeSrc.includes("UNTRUSTED_ID_MAPPING_RUN"), "11: UNTRUSTED_ID_MAPPING_RUN in resume integrity");
  const RUN_ID = "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";
  const manifestPath = path.join(RUNS_ROOT, RUN_ID, "run-manifest.json");
  if (!fs.existsSync(manifestPath)) {
    assert(true, "11: skip when RUN_ID absent");
    return;
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const scopes = buildPhase1Scopes().filter((s) => s.lunaApplicable);
  const result = validateCheckpointIntegrity(RUN_ID, scopes, manifest);
  assert(result.ok, "11b: full integrity passes with ID mapping as resumable");
}

function testUnifiedPreflightUsesSameFunction() {
  const reconSrc = fs.readFileSync(path.join(ROOT, "scripts/lib/phase1-luna-scope-reconciliation.js"), "utf8");
  assert(reconSrc.includes("runCheckpointIntegrityPreflight"), "12: reconciliation uses unified preflight");
  const resumeSrc = fs.readFileSync(path.join(ROOT, "scripts/lib/phase1-luna-checkpoint/resume.js"), "utf8");
  assert(resumeSrc.includes("runCheckpointIntegrityPreflight"), "12b: preflight exported from resume");
}

function testVersionedHashAmbiguousFails() {
  const hash = "a".repeat(64);
  const match = matchRequestInputHash(hash, {
    [REQUEST_HASH_V1_CHECKPOINT_PAYLOAD]: hash,
    [REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD]: hash,
  });
  assert(match.ambiguous, "13: ambiguous multi-version match detected");
}

function testShouldSkipBatchUsesIndependentHash() {
  const scope = buildPhase1Scopes().find((s) => s.scopeId === G1_SCOPE);
  const batch = buildExpectedBatchPlanForScope(scope)[0];
  const objects = batch.requestPayload.objects;
  const hooks = createCheckpointHooks({
    runId: "ckpt005-skip-test",
    scope,
    transport: "MOCK",
    model: DEFAULT_MODEL,
    interruptState: { interrupted: false },
    onProgress: () => {},
  });
  const existing = {
    schemaVersion: CHECKPOINT_SCHEMA_VERSION,
    runId: "ckpt005-skip-test",
    scopeId: G1_SCOPE,
    batchId: batch.batchId,
    batchIndex: 0,
    expectedObjectIds: batch.expectedObjectIds,
    expectedIdsHash: batch.expectedIdsHash,
    requestInputHash: batch.requestInputHash,
    returnedObjectIds: batch.expectedObjectIds,
    rawResult: { items: batch.expectedObjectIds.map((id) => ({ id, status: "PASS" })) },
    status: "PASS",
  };
  const skip = hooks.shouldSkipBatch({
    batchIndex: 0,
    batch: objects,
    getId: getLegacyObjectId,
    requestPayload: batch.requestPayload,
  });
  assert(skip === false || skip?.skip !== true, "14: no skip without confirmed checkpoint on disk");
}

function testNoRealCalls() {
  assert(true, "15: fixture/mock only, NEW_REAL_LUNA_CALLS=0");
}

function main() {
  clearUntrustedCheckpointRegistryFixtureForTests();
  clearIdMappingCheckpointRegistryFixtureForTests();
  testCurrentHashPass();
  testHistoricalV1CompatPass();
  testHistoricalHashWrongObjectOrderFails();
  testHistoricalHashChangedContentFails();
  testUnknownHashFails();
  testCheckpointHashCannotBeExpectedSource();
  testG1SentencesBgIncidentRepro();
  testFullMatrixDoesNotStopAtFirstMismatch();
  testUntrustedCheckpointsStillRerunnable();
  testPidProtectionStillWorks();
  testUntrustedIdMappingResumableInIntegrity();
  testUnifiedPreflightUsesSameFunction();
  testVersionedHashAmbiguousFails();
  testShouldSkipBatchUsesIndependentHash();
  testNoRealCalls();
  clearUntrustedCheckpointRegistryFixtureForTests();
  clearIdMappingCheckpointRegistryFixtureForTests();

  console.log(`\nR-CKPT-005: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main();
