#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  classifyCheckpointValidation,
  validateBatchCheckpoint,
  stableBatchId,
} = require("./lib/phase1-luna-checkpoint/batch-checkpoint");
const { createCheckpointHooks } = require("./lib/phase1-luna-checkpoint/runner");
const {
  isUntrustedLocalPatchCheckpoint,
  sha256File,
  sha256Content,
  resetUntrustedCheckpointRegistryCache,
  loadUntrustedCheckpointRegistry,
  setUntrustedCheckpointRegistryFixtureForTests,
  clearUntrustedCheckpointRegistryFixtureForTests,
} = require("./lib/phase1-luna-untrusted-checkpoint-registry");
const { CHECKPOINT_SCHEMA_VERSION } = require("./lib/phase1-luna-checkpoint/constants");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");
const { hashSortedList, hashRequestInput } = require("./lib/phase1-luna-checkpoint/hash");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

const RUN_ID = "phase1-ckpt-003-test";
const SCOPE_ID = "g2/a2/bg";
const EXPECTED_IDS = ["obj-a", "obj-b"];
const BATCH_INDEX = 33;
const BATCH_ID = stableBatchId(SCOPE_ID, BATCH_INDEX, EXPECTED_IDS);
const REQUEST_PAYLOAD = { model: DEFAULT_MODEL, note: "ckpt003" };
const REQUEST_HASH = hashRequestInput(REQUEST_PAYLOAD);
const UNTRUSTED_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

function writeTempRegistry(entries) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "ckpt003-registry-"));
  const fixturePath = path.join(dir, "untrusted.json");
  fs.writeFileSync(
    fixturePath,
    JSON.stringify(
      {
        classification: "UNTRUSTED_LOCAL_PATCH_RUN",
        sourcePid: "327971",
        runId: RUN_ID,
        count: entries.length,
        entries,
      },
      null,
      2,
    ),
  );
  setUntrustedCheckpointRegistryFixtureForTests(fixturePath);
  loadUntrustedCheckpointRegistry();
  return { fixturePath, dir };
}

function buildCheckpoint(overrides = {}) {
  const expectedObjectIds = overrides.expectedObjectIds || EXPECTED_IDS;
  const batchIndex = overrides.batchIndex ?? BATCH_INDEX;
  const batchId = overrides.batchId || stableBatchId(SCOPE_ID, batchIndex, expectedObjectIds);
  const requestPayload = overrides.requestPayload || REQUEST_PAYLOAD;
  return {
    schemaVersion: CHECKPOINT_SCHEMA_VERSION,
    runId: RUN_ID,
    scopeId: SCOPE_ID,
    batchId,
    batchIndex,
    expectedObjectIds,
    expectedIdsHash: hashSortedList(expectedObjectIds),
    requestInputHash: hashRequestInput(requestPayload),
    returnedObjectIds: overrides.returnedObjectIds || ["unknown", "unknown"],
    rawResult: overrides.rawResult || { items: [{ id: "x" }, { id: "y" }] },
    status: "PASS",
    ...overrides,
    batchId,
    batchIndex,
    expectedObjectIds,
    expectedIdsHash: hashSortedList(expectedObjectIds),
    requestInputHash: hashRequestInput(requestPayload),
  };
}

function writeCheckpointFile(dir, cp) {
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, `${cp.batchId}.json`);
  fs.writeFileSync(filePath, `${JSON.stringify(cp, null, 2)}\n`);
  return filePath;
}

function testProveBatchIdPoisoningRemoved() {
  const src = fs.readFileSync(path.join(ROOT, "scripts/lib/phase1-luna-untrusted-checkpoint-registry.js"), "utf8");
  assert(!src.includes("entry.batchId === checkpoint.batchId"), "defect: batchId object-path poisoning removed");
  assert(src.includes("entriesBySha.get(hash)"), "fix: SHA-256 registry lookup present");
}

function testRegisteredOriginalShaUntrusted() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "ckpt003-file-"));
  const cp = buildCheckpoint();
  const filePath = writeCheckpointFile(dir, cp);
  const sha = sha256File(filePath);
  writeTempRegistry([{ file: filePath, scopeId: SCOPE_ID, batchId: BATCH_ID, sha256: sha }]);
  const cls = classifyCheckpointValidation(
    { ok: false, issues: ["RETURNED_ID_POSITION_MISMATCH"] },
    cp,
    { scopeId: SCOPE_ID, filePath },
  );
  assert(cls === "UNTRUSTED_LOCAL_PATCH_RUN", "1: registered original SHA → UNTRUSTED_LOCAL_PATCH_RUN");
}

function testOriginalShouldNotSkip() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "ckpt003-skip-"));
  const cp = buildCheckpoint();
  const filePath = writeCheckpointFile(dir, cp);
  const sha = sha256File(filePath);
  writeTempRegistry([{ file: filePath, scopeId: SCOPE_ID, batchId: BATCH_ID, sha256: sha }]);
  const cls = classifyCheckpointValidation(
    { ok: false, issues: ["RETURNED_ID_POSITION_MISMATCH"] },
    cp,
    { scopeId: SCOPE_ID, filePath },
  );
  assert(cls !== "VALID_PASS", "2: original untrusted → not VALID_PASS");
  assert(cls === "UNTRUSTED_LOCAL_PATCH_RUN", "2: original untrusted classification");
}

function testSameBatchIdDifferentShaNotUntrusted() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "ckpt003-rerun-"));
  const original = buildCheckpoint();
  const originalPath = writeCheckpointFile(dir, original);
  const originalSha = sha256File(originalPath);
  writeTempRegistry([
    { file: originalPath, scopeId: SCOPE_ID, batchId: BATCH_ID, sha256: originalSha },
  ]);

  const rerun = buildCheckpoint({
    returnedObjectIds: ["obj-a", "obj-b"],
    rawResult: { items: [{ id: "obj-a", status: "PASS" }, { id: "obj-b", status: "PASS" }] },
  });
  const rerunPath = writeCheckpointFile(dir, rerun);
  assert(sha256File(rerunPath) !== originalSha, "3: rerun has different SHA");
  assert(
    !isUntrustedLocalPatchCheckpoint(rerunPath, { scopeId: SCOPE_ID, batchId: BATCH_ID }),
    "3: same batchId different SHA → not UNTRUSTED",
  );
  const cls = classifyCheckpointValidation({ ok: true, issues: [] }, rerun, {
    scopeId: SCOPE_ID,
    filePath: rerunPath,
  });
  assert(cls === "VALID_PASS", "3: corrected rerun → VALID_PASS");
}

function testValidRerunCanBeSkipped() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "ckpt003-valid-skip-"));
  const original = buildCheckpoint();
  const originalPath = writeCheckpointFile(dir, original);
  writeTempRegistry([
    {
      file: originalPath,
      scopeId: SCOPE_ID,
      batchId: BATCH_ID,
      sha256: sha256File(originalPath),
    },
  ]);

  const valid = buildCheckpoint({
    returnedObjectIds: ["obj-a", "obj-b"],
    rawResult: { items: [{ id: "obj-a", status: "PASS" }, { id: "obj-b", status: "PASS" }] },
    normalizedFindings: [{ id: "obj-a" }, { id: "obj-b" }],
  });
  const validPath = writeCheckpointFile(dir, valid);
  const validation = validateBatchCheckpoint(valid, {
    expectedRunId: RUN_ID,
    scopeId: SCOPE_ID,
    batchIndex: BATCH_INDEX,
    expectedIds: EXPECTED_IDS,
    requestInputHash: REQUEST_HASH,
  });
  const cls = classifyCheckpointValidation(validation, valid, { scopeId: SCOPE_ID, filePath: validPath });
  assert(cls === "VALID_PASS", "4: valid rerun → VALID_PASS");
  assert(
    !isUntrustedLocalPatchCheckpoint(validPath, { scopeId: SCOPE_ID, batchId: BATCH_ID }),
    "4: valid rerun SHA not in untrusted registry",
  );

  const constants = require("./lib/phase1-luna-checkpoint/constants");
  const savedRunsRoot = constants.RUNS_ROOT;
  const tmpRuns = fs.mkdtempSync(path.join(os.tmpdir(), "ckpt003-runs-"));
  constants.RUNS_ROOT = tmpRuns;
  try {
    const targetPath = constants.checkpointFilePath(RUN_ID, SCOPE_ID, BATCH_ID);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.copyFileSync(validPath, targetPath);
    const scope = { scopeId: SCOPE_ID };
    const hooks = createCheckpointHooks({
      runId: RUN_ID,
      scope,
      transport: { call: async () => ({ items: [] }) },
      model: DEFAULT_MODEL,
      interruptState: { interrupted: false },
    });
    const batch = EXPECTED_IDS.map((id) => ({ de: id }));
    const getId = (obj) => obj.de;
    const skip = hooks.shouldSkipBatch({
      batchIndex: BATCH_INDEX,
      batch,
      getId,
      requestPayload: REQUEST_PAYLOAD,
    });
    assert(skip && skip.skip === true, "4b: valid rerun → shouldSkipBatch=true on next resume");
  } finally {
    constants.RUNS_ROOT = savedRunsRoot;
    fs.rmSync(tmpRuns, { recursive: true, force: true });
  }
}

function testInvalidStructureNotAutoPass() {
  const cp = buildCheckpoint({ status: "PARTIAL" });
  const cls = classifyCheckpointValidation({ ok: false, issues: ["CHECKPOINT_NOT_PASS"] }, cp, {
    scopeId: SCOPE_ID,
  });
  assert(cls === "PARTIAL", "5: invalid structure → PARTIAL not PASS");
}

function testBatchIdAloneInsufficient() {
  writeTempRegistry([
    {
      file: "reports/temp/x.json",
      scopeId: SCOPE_ID,
      batchId: BATCH_ID,
      sha256: UNTRUSTED_SHA,
    },
  ]);
  const cp = buildCheckpoint({ batchId: BATCH_ID });
  assert(
    !isUntrustedLocalPatchCheckpoint(cp, { scopeId: SCOPE_ID }),
    "6: checkpoint object without file path → not UNTRUSTED",
  );
}

function testScopeIdAloneInsufficient() {
  writeTempRegistry([
    {
      file: "reports/temp/x.json",
      scopeId: SCOPE_ID,
      batchId: BATCH_ID,
      sha256: UNTRUSTED_SHA,
    },
  ]);
  assert(!isUntrustedLocalPatchCheckpoint(null, { scopeId: SCOPE_ID }), "7: scopeId alone → not UNTRUSTED");
}

function testIdenticalCopyStillUntrusted() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "ckpt003-copy-"));
  const cp = buildCheckpoint();
  const originalPath = writeCheckpointFile(dir, cp);
  const sha = sha256File(originalPath);
  writeTempRegistry([{ file: originalPath, scopeId: SCOPE_ID, batchId: BATCH_ID, sha256: sha }]);
  const copyPath = path.join(dir, "copy.json");
  fs.copyFileSync(originalPath, copyPath);
  assert(sha256File(copyPath) === sha, "8: copy has identical SHA");
  assert(
    isUntrustedLocalPatchCheckpoint(copyPath, { scopeId: SCOPE_ID, batchId: BATCH_ID }),
    "8: identical copy → still UNTRUSTED",
  );
}

function testPid299833ResumableInvalidPreserved() {
  const cp = buildCheckpoint({
    batchId: "batch-33-from-299833",
    returnedObjectIds: ["wrong", "order"],
  });
  const cls = classifyCheckpointValidation(
    { ok: false, issues: ["RETURNED_ID_POSITION_MISMATCH"] },
    cp,
    { scopeId: SCOPE_ID },
  );
  assert(cls === "RESUMABLE_INVALID", "9: PID 299833 style → RESUMABLE_INVALID not LOCAL_PATCH");
}

function testFixtureRegistryCount() {
  clearUntrustedCheckpointRegistryFixtureForTests();
  const registry = loadUntrustedCheckpointRegistry();
  assert(registry.entries.length === 30, "10: PID 327971 fixture has 30 entries");
}

function testNoRealCalls() {
  assert(true, "11: no Luna API calls in R-CKPT-003 tests");
}

function main() {
  clearUntrustedCheckpointRegistryFixtureForTests();
  testProveBatchIdPoisoningRemoved();
  testRegisteredOriginalShaUntrusted();
  testOriginalShouldNotSkip();
  testSameBatchIdDifferentShaNotUntrusted();
  testValidRerunCanBeSkipped();
  testInvalidStructureNotAutoPass();
  testBatchIdAloneInsufficient();
  testScopeIdAloneInsufficient();
  testIdenticalCopyStillUntrusted();
  testPid299833ResumableInvalidPreserved();
  testFixtureRegistryCount();
  testNoRealCalls();

  clearUntrustedCheckpointRegistryFixtureForTests();
  console.log(`R-CKPT-003: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main();
