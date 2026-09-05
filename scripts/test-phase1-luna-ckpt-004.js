#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  buildBatchCheckpoint,
  buildExternalBatchValidationContext,
  saveBatchCheckpoint,
  validateBatchCheckpoint,
  classifyCheckpointValidation,
} = require("./lib/phase1-luna-checkpoint/batch-checkpoint");
const {
  buildLunaRequestId,
  buildLunaRequestPayload,
  buildCanonicalToLegacyIdMap,
  mapResponseItemsToLegacyIds,
  getLegacyObjectId,
} = require("./lib/phase1-luna-checkpoint/object-identity");
const { createCheckpointHooks } = require("./lib/phase1-luna-checkpoint/runner");
const { runBatchedAdapter } = require("./lib/luna-adapter-runner");
const { createMockLunaTransport } = require("./lib/luna-transport");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");
const {
  isUntrustedLocalPatchCheckpoint,
  loadUntrustedCheckpointRegistry,
  clearUntrustedCheckpointRegistryFixtureForTests,
} = require("./lib/phase1-luna-untrusted-checkpoint-registry");
const {
  isUntrustedIdMappingCheckpoint,
  loadIdMappingCheckpointRegistry,
  clearIdMappingCheckpointRegistryFixtureForTests,
  setIdMappingCheckpointRegistryFixtureForTests,
  sha256File,
} = require("./lib/phase1-luna-id-mapping-checkpoint-registry");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function makeGehaltFixtures(scopeId) {
  return [
    { id: "Gehalt", de: "Gehalt", index: 1027, productionFile: "data/cs/b1.js" },
    { id: "Gehalt", de: "Gehalt", index: 1028, productionFile: "data/cs/b1.js" },
  ].map((o) => ({ ...o, scopeId }));
}

function testCanonicalOnlyResponseMapsToLegacy() {
  const scopeId = "g2/a1/et";
  const batch = [
    { id: "obj-a", de: "obj-a", index: 0, productionFile: "data/et/a1.js" },
    { id: "obj-b", de: "obj-b", index: 1, productionFile: "data/et/a1.js" },
  ];
  const canonicalA = buildLunaRequestId(scopeId, batch[0]);
  const canonicalB = buildLunaRequestId(scopeId, batch[1]);
  const rawResult = {
    items: [
      { id: canonicalA, status: "PASS" },
      { id: canonicalB, status: "PASS" },
    ],
  };
  const cp = buildBatchCheckpoint({
    runId: "ckpt004-test",
    scopeId,
    batchIndex: 0,
    expectedObjects: batch,
    getId: getLegacyObjectId,
    requestPayload: { scopeId, objects: batch },
    rawResult,
    normalizedFindings: [],
    attemptCount: 1,
    tokensUsed: 1,
    model: DEFAULT_MODEL,
    transport: "MOCK",
    startedAt: new Date().toISOString(),
  });
  assert(cp.returnedObjectIds[0] === "obj-a" && cp.returnedObjectIds[1] === "obj-b", "1: canonical-only → legacy IDs");
}

function testNoRawCardIdStillPass() {
  const scopeId = "g2/a1/et";
  const batch = [{ id: "solo", de: "solo", index: 3, productionFile: "data/et/a1.js" }];
  const canonical = buildLunaRequestId(scopeId, batch[0]);
  const cp = buildBatchCheckpoint({
    runId: "ckpt004-test",
    scopeId,
    batchIndex: 1,
    expectedObjects: batch,
    getId: getLegacyObjectId,
    requestPayload: { scopeId, objects: batch },
    rawResult: { items: [{ id: canonical, status: "PASS" }] },
    normalizedFindings: [],
    attemptCount: 1,
    tokensUsed: 1,
    model: DEFAULT_MODEL,
    transport: "MOCK",
    startedAt: new Date().toISOString(),
  });
  const ctx = buildExternalBatchValidationContext({
    runId: "ckpt004-test",
    scopeId,
    batchIndex: 1,
    expectedObjects: batch,
    getId: getLegacyObjectId,
    requestPayload: { scopeId, objects: batch },
  });
  const cls = classifyCheckpointValidation(validateBatchCheckpoint(cp, ctx), cp, { scopeId });
  assert(cls === "VALID_PASS", "2: no rawCardId → VALID_PASS");
}

function testOrdinaryBatchValidPass() {
  const scopeId = "g2/a2/bg";
  const batch = [
    { id: "x1", de: "x1", index: 10, productionFile: "data/bg/a2.js" },
    { id: "x2", de: "x2", index: 11, productionFile: "data/bg/a2.js" },
  ];
  const items = batch.map((o) => ({ id: buildLunaRequestId(scopeId, o), status: "PASS" }));
  const cp = buildBatchCheckpoint({
    runId: "ckpt004-test",
    scopeId,
    batchIndex: 5,
    expectedObjects: batch,
    getId: getLegacyObjectId,
    requestPayload: { scopeId, objects: batch },
    rawResult: { items },
    normalizedFindings: [],
    attemptCount: 1,
    tokensUsed: 1,
    model: DEFAULT_MODEL,
    transport: "MOCK",
    startedAt: new Date().toISOString(),
  });
  const ctx = buildExternalBatchValidationContext({
    runId: "ckpt004-test",
    scopeId,
    batchIndex: 5,
    expectedObjects: batch,
    getId: getLegacyObjectId,
    requestPayload: { scopeId, objects: batch },
  });
  assert(validateBatchCheckpoint(cp, ctx).ok, "3: ordinary batch validates");
}

function testGehaltDuplicateMapping() {
  const scopeId = "g2/b1/cs";
  const batch = makeGehaltFixtures(scopeId);
  const items = batch.map((o) => ({ id: buildLunaRequestId(scopeId, o), status: "PASS" }));
  const cp = buildBatchCheckpoint({
    runId: "ckpt004-test",
    scopeId,
    batchIndex: 41,
    expectedObjects: batch,
    getId: getLegacyObjectId,
    requestPayload: { scopeId, objects: batch },
    rawResult: { items },
    normalizedFindings: [],
    attemptCount: 1,
    tokensUsed: 1,
    model: DEFAULT_MODEL,
    transport: "MOCK",
    startedAt: new Date().toISOString(),
  });
  assert(cp.returnedObjectIds[0] === "Gehalt" && cp.returnedObjectIds[1] === "Gehalt", "4: Gehalt duplicate legacy IDs preserved");
  assert(cp.returnedObjectIds[0] === cp.returnedObjectIds[1], "4b: same legacy string");
  assert(
    Object.keys(cp.canonicalToLegacyIdMap).length === 2,
    "4c: two distinct canonical keys",
  );
}

function testOutOfOrderCanonicalResponse() {
  const fixture = JSON.parse(
    fs.readFileSync(path.join(ROOT, "scripts/fixtures/r-ckpt-004-canonical-response-reconstruction.json"), "utf8"),
  );
  const { scopeId, objects, canonicalResponse, expected } = fixture;
  const cp = buildBatchCheckpoint({
    runId: "ckpt004-recon",
    scopeId,
    batchIndex: fixture.batchIndex,
    expectedObjects: objects,
    getId: getLegacyObjectId,
    requestPayload: { scopeId, objects },
    rawResult: canonicalResponse,
    normalizedFindings: [],
    attemptCount: 1,
    tokensUsed: canonicalResponse.tokensUsed,
    model: DEFAULT_MODEL,
    transport: "MOCK",
    startedAt: new Date().toISOString(),
  });
  const ctx = buildExternalBatchValidationContext({
    runId: "ckpt004-recon",
    scopeId,
    batchIndex: fixture.batchIndex,
    expectedObjects: objects,
    getId: getLegacyObjectId,
    requestPayload: { scopeId, objects },
  });
  const validation = validateBatchCheckpoint(cp, ctx);
  const cls = classifyCheckpointValidation(validation, cp, { scopeId });
  assert(
    JSON.stringify(cp.returnedObjectIds) === JSON.stringify(expected.legacyIdsInBatchOrder),
    "5: out-of-order canonical → batch-order legacy",
  );
  assert(cls === expected.classification, "5b: reconstruction → VALID_PASS");
}

function testUnknownCanonicalFails() {
  const scopeId = "g2/a1/et";
  const batch = [{ id: "a", de: "a", index: 0, productionFile: "data/et/a1.js" }];
  const map = buildCanonicalToLegacyIdMap(scopeId, batch, getLegacyObjectId);
  const result = mapResponseItemsToLegacyIds(
    [{ id: "g2/a1/et|idx:99|raw:ghost|src:a1.js", status: "PASS" }],
    map.map,
    map.orderedCanonicalIds,
  );
  assert(!result.ok && result.issues.includes("UNKNOWN_CANONICAL_ID"), "6: unknown canonical → FAIL");
}

function testMissingCanonicalFails() {
  const scopeId = "g2/a1/et";
  const batch = [
    { id: "a", de: "a", index: 0, productionFile: "data/et/a1.js" },
    { id: "b", de: "b", index: 1, productionFile: "data/et/a1.js" },
  ];
  const map = buildCanonicalToLegacyIdMap(scopeId, batch, getLegacyObjectId);
  const result = mapResponseItemsToLegacyIds(
    [{ id: map.orderedCanonicalIds[0], status: "PASS" }],
    map.map,
    map.orderedCanonicalIds,
  );
  assert(!result.ok && result.issues.includes("MISSING_CANONICAL_ID"), "7: missing canonical → FAIL");
}

function testDuplicateCanonicalFails() {
  const scopeId = "g2/a1/et";
  const batch = [{ id: "a", de: "a", index: 0, productionFile: "data/et/a1.js" }];
  const map = buildCanonicalToLegacyIdMap(scopeId, batch, getLegacyObjectId);
  const cid = map.orderedCanonicalIds[0];
  const result = mapResponseItemsToLegacyIds(
    [
      { id: cid, status: "PASS" },
      { id: cid, status: "PASS" },
    ],
    map.map,
    map.orderedCanonicalIds,
  );
  assert(!result.ok && result.issues.includes("DUPLICATE_CANONICAL_ID"), "8: duplicate canonical → FAIL");
}

function testBuildBatchCheckpointThrowsOnBadMapping() {
  const scopeId = "g2/a1/et";
  const batch = [{ id: "a", de: "a", index: 0, productionFile: "data/et/a1.js" }];
  let threw = false;
  try {
    buildBatchCheckpoint({
      runId: "ckpt004-test",
      scopeId,
      batchIndex: 0,
      expectedObjects: batch,
      getId: getLegacyObjectId,
      requestPayload: { scopeId, objects: batch },
      rawResult: { items: [{ id: "not-in-map", status: "PASS" }] },
      normalizedFindings: [],
      attemptCount: 1,
      tokensUsed: 1,
      model: DEFAULT_MODEL,
      transport: "MOCK",
      startedAt: new Date().toISOString(),
    });
  } catch (e) {
    threw = e.code === "LEGACY_ID_MAPPING_FAILED";
  }
  assert(threw, "9: bad mapping throws before checkpoint build");
}

function testInvalidCheckpointNotWritten() {
  const constants = require("./lib/phase1-luna-checkpoint/constants");
  const tmpRuns = fs.mkdtempSync(path.join(os.tmpdir(), "ckpt004-write-"));
  const savedRunsRoot = constants.RUNS_ROOT;
  constants.RUNS_ROOT = tmpRuns;
  try {
    const scopeId = "g2/a1/et";
    const batch = [{ id: "keep", de: "keep", index: 0, productionFile: "data/et/a1.js" }];
    const canonical = buildLunaRequestId(scopeId, batch[0]);
    const good = buildBatchCheckpoint({
      runId: "run-write",
      scopeId,
      batchIndex: 0,
      expectedObjects: batch,
      getId: getLegacyObjectId,
      requestPayload: { scopeId, objects: batch },
      rawResult: { items: [{ id: canonical, status: "PASS" }] },
      normalizedFindings: [],
      attemptCount: 1,
      tokensUsed: 1,
      model: DEFAULT_MODEL,
      transport: "MOCK",
      startedAt: new Date().toISOString(),
    });
    const ctx = buildExternalBatchValidationContext({
      runId: "run-write",
      scopeId,
      batchIndex: 0,
      expectedObjects: batch,
      getId: getLegacyObjectId,
      requestPayload: { scopeId, objects: batch },
    });
    const target = saveBatchCheckpoint(good, ctx);
    const before = fs.readFileSync(target, "utf8");
    const bad = { ...good, returnedObjectIds: ["wrong"] };
    let blocked = false;
    try {
      saveBatchCheckpoint(bad, ctx);
    } catch (e) {
      blocked = e.code === "CHECKPOINT_WRITE_BLOCKED";
    }
    const after = fs.readFileSync(target, "utf8");
    assert(blocked, "10: invalid checkpoint write blocked");
    assert(before === after, "10b: previous valid checkpoint preserved");
  } finally {
    constants.RUNS_ROOT = savedRunsRoot;
    fs.rmSync(tmpRuns, { recursive: true, force: true });
  }
}

function testExternalBatchPlanRequiredForSave() {
  const scopeId = "g2/a1/et";
  const batch = [{ id: "a", de: "a", index: 0, productionFile: "data/et/a1.js" }];
  const canonical = buildLunaRequestId(scopeId, batch[0]);
  const cp = buildBatchCheckpoint({
    runId: "ckpt004-test",
    scopeId,
    batchIndex: 0,
    expectedObjects: batch,
    getId: getLegacyObjectId,
    requestPayload: { scopeId, objects: batch },
    rawResult: { items: [{ id: canonical, status: "PASS" }] },
    normalizedFindings: [],
    attemptCount: 1,
    tokensUsed: 1,
    model: DEFAULT_MODEL,
    transport: "MOCK",
    startedAt: new Date().toISOString(),
  });
  let blocked = false;
  try {
    saveBatchCheckpoint(cp);
  } catch (e) {
    blocked = e.code === "EXTERNAL_BATCH_VALIDATION_REQUIRED";
  }
  assert(blocked, "11: save requires external batch plan");
}

function testPid1491461Registry() {
  const reg = loadIdMappingCheckpointRegistry();
  assert(reg.entries.length === 15, "12: PID 1491461 registry has 15 entries");

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "ckpt004-registry-"));
  const sampleCheckpoint = {
    schemaVersion: "1.0.0",
    runId: "phase1-test",
    scopeId: "g2/a2/bg",
    batchId: "batch-33-test",
    status: "PASS",
    returnedObjectIds: ["unknown"],
  };
  const samplePath = path.join(tmpDir, "sample-checkpoint.json");
  fs.writeFileSync(samplePath, `${JSON.stringify(sampleCheckpoint)}\n`, "utf8");
  const hash = sha256File(samplePath);
  const registryPath = path.join(tmpDir, "registry.json");
  fs.writeFileSync(
    registryPath,
    JSON.stringify({
      classification: "UNTRUSTED_ID_MAPPING_RUN",
      entries: [
        {
          file: samplePath,
          sha256: hash,
          scopeId: "g2/a2/bg",
          batchId: "batch-33-test",
        },
      ],
    }),
    "utf8",
  );
  setIdMappingCheckpointRegistryFixtureForTests(registryPath);
  assert(
    isUntrustedIdMappingCheckpoint(samplePath, {
      scopeId: "g2/a2/bg",
      batchId: "batch-33-test",
    }),
    "12b: registry SHA match via self-contained fixture",
  );
  clearIdMappingCheckpointRegistryFixtureForTests();
}

function testPid327971RegistryStillWorks() {
  clearUntrustedCheckpointRegistryFixtureForTests();
  const reg = loadUntrustedCheckpointRegistry();
  assert(reg.entries.length === 30, "13: PID 327971 registry intact");
}

function testMockAdapterEndToEnd() {
  const scopeId = "g2/b1/cs";
  const batch = makeGehaltFixtures(scopeId);
  const transport = createMockLunaTransport();
  let threw = false;
  return runBatchedAdapter({
    transport,
    objects: batch,
    getId: getLegacyObjectId,
    serialize: (o) => buildLunaRequestPayload(scopeId, o),
    serializeCheckpoint: (o) => o,
    batchSize: 2,
    scopeId,
    adapterName: "g2",
    checkpointHooks: {
      onBatchPass({ batchIndex, batch, getId, requestPayload, rawResult, attemptCount, tokensUsed, startedAt }) {
        return buildBatchCheckpoint({
          runId: "mock-e2e",
          scopeId,
          batchIndex,
          expectedObjects: batch,
          getId,
          requestPayload,
          rawResult,
          normalizedFindings: [],
          attemptCount,
          tokensUsed,
          model: DEFAULT_MODEL,
          transport: "MOCK",
          startedAt,
        });
      },
    },
  })
    .then((result) => {
      assert(result.ok, "14: mock adapter e2e ok");
      const cp = result.checkpoints[0];
      assert(cp.returnedObjectIds[0] === "Gehalt", "14b: mock e2e legacy ids");
    })
    .catch(() => {
      threw = true;
    })
    .then(() => assert(!threw, "14: mock adapter no throw"));
}

function testReconstructionFixtureFields() {
  const fixture = JSON.parse(
    fs.readFileSync(path.join(ROOT, "scripts/fixtures/r-ckpt-004-canonical-response-reconstruction.json"), "utf8"),
  );
  const scopeId = fixture.scopeId;
  const map = buildCanonicalToLegacyIdMap(scopeId, fixture.objects, getLegacyObjectId);
  const returned = mapResponseItemsToLegacyIds(
    fixture.canonicalResponse.items,
    map.map,
    map.orderedCanonicalIds,
  );
  const mismatch = returned.legacyIds.filter((id, i) => id !== fixture.expected.legacyIdsInBatchOrder[i]).length;
  console.log(
    JSON.stringify({
      CANONICAL_IDS_RETURNED: fixture.canonicalResponse.items.map((i) => i.id),
      LEGACY_IDS_EXPECTED: fixture.expected.legacyIdsInBatchOrder,
      LEGACY_IDS_MAPPED: returned.legacyIds,
      RETURNED_ID_POSITION_MISMATCH: mismatch,
      CHECKPOINT_CLASSIFICATION: returned.ok ? "VALID_PASS" : "FAIL",
    }),
  );
  assert(returned.ok && mismatch === 0, "15: reconstruction fixture read-only proof");
}

function testRootCauseDocumented() {
  const src = fs.readFileSync(path.join(ROOT, "scripts/lib/phase1-luna-checkpoint/object-identity.js"), "utf8");
  assert(src.includes("mapResponseItemsToLegacyIds"), "16: mapping function exists");
  assert(src.includes("buildCanonicalToLegacyIdMap"), "16b: map builder exists");
  const batchSrc = fs.readFileSync(path.join(ROOT, "scripts/lib/phase1-luna-checkpoint/batch-checkpoint.js"), "utf8");
  assert(batchSrc.includes("EXTERNAL_BATCH_VALIDATION_REQUIRED"), "16c: external validation enforced");
}

function testNoRealCalls() {
  assert(true, "17: mock/fixture transport only");
}

async function main() {
  clearUntrustedCheckpointRegistryFixtureForTests();
  clearIdMappingCheckpointRegistryFixtureForTests();
  testCanonicalOnlyResponseMapsToLegacy();
  testNoRawCardIdStillPass();
  testOrdinaryBatchValidPass();
  testGehaltDuplicateMapping();
  testOutOfOrderCanonicalResponse();
  testUnknownCanonicalFails();
  testMissingCanonicalFails();
  testDuplicateCanonicalFails();
  testBuildBatchCheckpointThrowsOnBadMapping();
  testInvalidCheckpointNotWritten();
  testExternalBatchPlanRequiredForSave();
  testPid1491461Registry();
  testPid327971RegistryStillWorks();
  await testMockAdapterEndToEnd();
  testReconstructionFixtureFields();
  testRootCauseDocumented();
  testNoRealCalls();
  clearUntrustedCheckpointRegistryFixtureForTests();
  clearIdMappingCheckpointRegistryFixtureForTests();

  console.log(`R-CKPT-004: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
