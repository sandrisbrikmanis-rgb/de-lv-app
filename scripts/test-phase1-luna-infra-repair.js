#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const {
  runBatchedAdapter,
  validateBatchResponse,
} = require("./lib/luna-adapter-runner");
const { createMockLunaTransport } = require("./lib/luna-transport");
const { loadG2Objects } = require("./lib/luna-object-loaders");
const {
  buildLunaRequestPayload,
  buildLunaRequestId,
  getLegacyObjectId,
  resolveLegacyObjectId,
} = require("./lib/phase1-luna-checkpoint/object-identity");
const {
  buildBatchCheckpoint,
  saveBatchCheckpoint,
  validateBatchCheckpoint,
} = require("./lib/phase1-luna-checkpoint/batch-checkpoint");
const {
  generateRunId,
  createRunManifest,
  writeRunManifest,
} = require("./lib/phase1-luna-checkpoint/manifest");
const { hashRequestInput } = require("./lib/phase1-luna-checkpoint/hash");
const { prepareResumeContext } = require("./lib/phase1-luna-checkpoint/resume");
const { initFreshRun, createCheckpointHooks, finalizeRun } = require("./lib/phase1-luna-checkpoint/runner");
const { normalizeLunaItemsToFindings } = require("./lib/phase1-luna-checkpoint/findings");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");
const { getDeterministicScopeOrder } = require("./lib/content-discovery/phase1-applicability");

const SHA_TEST = "6cfb96105f7f741f6052d20ee1d1e342f198fda2";
let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function injectedGitIdentity(overrides = {}) {
  return {
    pass: true,
    blockers: [],
    headSha: SHA_TEST,
    originMainSha: SHA_TEST,
    headMatchesOriginMain: true,
    workingTreeClean: true,
    productionDiffClean: true,
    deDiffClean: true,
    productionDiff: { clean: true, changed: [] },
    deDiff: { clean: true, changed: [] },
    fetchStatus: "PASS",
    ...overrides,
  };
}

function tempRunsRoot() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "phase1-infra-test-"));
}

function patchRunsRoot(tmpRoot) {
  const constants = require("./lib/phase1-luna-checkpoint/constants");
  const savedRunsRoot = constants.RUNS_ROOT;
  constants.RUNS_ROOT = tmpRoot;
  fs.mkdirSync(tmpRoot, { recursive: true });
  if (fs.existsSync(constants.ACTIVE_LOCK_PATH)) fs.unlinkSync(constants.ACTIVE_LOCK_PATH);
  return {
    tmpRoot,
    restore() {
      constants.RUNS_ROOT = savedRunsRoot;
      if (fs.existsSync(constants.ACTIVE_LOCK_PATH)) fs.unlinkSync(constants.ACTIVE_LOCK_PATH);
      fs.rmSync(tmpRoot, { recursive: true, force: true });
    },
  };
}

function makeGehaltFixtures(scopeId) {
  const base = loadG2Objects("cs", "b1");
  const gehaltA = base[1027];
  const gehaltB = base[1028];
  assert(gehaltA?.id === "Gehalt" && gehaltB?.id === "Gehalt", "fixture has duplicate Gehalt ids");
  return [gehaltA, gehaltB];
}

async function testPerBatchWallClockReset() {
  const scopeId = "g2/a1/et";
  let callCount = 0;
  const transport = {
    mode: "MOCK",
    get realCallsDelta() {
      return 1;
    },
    async call(payload) {
      callCount += 1;
      await new Promise((r) => setTimeout(r, 30));
      return {
        items: payload.objects.map((o) => ({ ...o, status: "PASS" })),
        tokensUsed: 1,
      };
    },
  };
  const objects = Array.from({ length: 6 }, (_, i) => ({
    id: `obj-${i}`,
    productionFile: "data/et/a1.js",
    index: i,
  }));
  const result = await runBatchedAdapter({
    transport,
    objects,
    getId: getLegacyObjectId,
    serialize: (o) => buildLunaRequestPayload(scopeId, o),
    serializeCheckpoint: (o) => o,
    batchSize: 2,
    scopeId,
    adapterName: "g2",
  });
  assert(result.ok, "multi-batch run completes with per-batch wall clock");
  assert(callCount === 3, "all batches executed (not short-circuited by scope wall clock)");
}

async function testPartialBatchTimeoutPreservesComplete() {
  const patched = patchRunsRoot(tempRunsRoot());
  const scope = { scopeId: "g2/a1/et", group: "g2", dataset: "a1", lang: "et", lunaApplicable: true };
  const scopes = [scope];
  const cliScope = { groups: ["g2"], datasetsByGroup: { g2: ["a1"] }, langs: ["et"] };
  const fresh = initFreshRun({
    scopes,
    cliScope,
    transport: "MOCK",
    baseline: { originMainSha: SHA_TEST, verdict: "PASS" },
    gitIdentity: injectedGitIdentity(),
    model: DEFAULT_MODEL,
  });
  const objects = Array.from({ length: 4 }, (_, i) => ({
    id: `p-${i}`,
    productionFile: "data/et/a1.js",
    index: i,
  }));
  let batchNum = 0;
  const transport = {
    mode: "MOCK",
    get realCallsDelta() {
      return 1;
    },
    async call(payload) {
      batchNum += 1;
      if (batchNum === 2) {
        return { items: payload.objects.slice(0, 1).map((o) => ({ ...o, status: "PASS" })), tokensUsed: 1 };
      }
      return { items: payload.objects.map((o) => ({ ...o, status: "PASS" })), tokensUsed: 1 };
    },
  };
  const hooks = createCheckpointHooks({
    runId: fresh.runId,
    scope,
    transport,
    model: DEFAULT_MODEL,
    interruptState: { interrupted: false },
  });
  const result = await runBatchedAdapter({
    transport,
    objects,
    getId: getLegacyObjectId,
    serialize: (o) => buildLunaRequestPayload(scope.scopeId, o),
    serializeCheckpoint: (o) => o,
    batchSize: 2,
    scopeId: scope.scopeId,
    adapterName: "g2",
    checkpointHooks: hooks,
    batchWallClockMs: 1,
  });
  assert(!result.ok && result.reason === "BATCH_WALL_CLOCK_EXCEEDED", "batch 2 wall-clock fail-closed after retries");
  assert(result.checkpoints.length === 1, "batch 1 checkpoint preserved");
  assert(result.results.length === 2, "batch 1 results preserved");
  finalizeRun(fresh.runId, "COMPLETED");
  patched.restore();
}

async function testResumeSkipsCompleteBatches() {
  const patched = patchRunsRoot(tempRunsRoot());
  const scope = { scopeId: "g2/a1/et", group: "g2", dataset: "a1", lang: "et", lunaApplicable: true };
  const scopes = [scope];
  const cliScope = { groups: ["g2"], datasetsByGroup: { g2: ["a1"] }, langs: ["et"] };
  const fresh = initFreshRun({
    scopes,
    cliScope,
    transport: "MOCK",
    baseline: { originMainSha: SHA_TEST, verdict: "PASS" },
    gitIdentity: injectedGitIdentity(),
    model: DEFAULT_MODEL,
  });
  const objects = Array.from({ length: 4 }, (_, i) => ({
    id: `r-${i}`,
    productionFile: "data/et/a1.js",
    index: i,
  }));
  let calls = 0;
  const transport = {
    mode: "MOCK",
    get realCallsDelta() {
      return 1;
    },
    async call(payload) {
      calls += 1;
      return { items: payload.objects.map((o) => ({ ...o, status: "PASS" })), tokensUsed: 1 };
    },
  };
  const hooks1 = createCheckpointHooks({
    runId: fresh.runId,
    scope,
    transport,
    model: DEFAULT_MODEL,
    interruptState: { interrupted: false },
  });
  const first = await runBatchedAdapter({
    transport,
    objects: objects.slice(0, 2),
    getId: getLegacyObjectId,
    serialize: (o) => buildLunaRequestPayload(scope.scopeId, o),
    serializeCheckpoint: (o) => o,
    batchSize: 2,
    scopeId: scope.scopeId,
    adapterName: "g2",
    checkpointHooks: hooks1,
  });
  assert(first.ok, "first partial scope completes");
  const hooks2 = createCheckpointHooks({
    runId: fresh.runId,
    scope,
    transport,
    model: DEFAULT_MODEL,
    interruptState: { interrupted: false },
  });
  calls = 0;
  const second = await runBatchedAdapter({
    transport,
    objects,
    getId: getLegacyObjectId,
    serialize: (o) => buildLunaRequestPayload(scope.scopeId, o),
    serializeCheckpoint: (o) => o,
    batchSize: 2,
    scopeId: scope.scopeId,
    adapterName: "g2",
    checkpointHooks: hooks2,
  });
  assert(second.ok, "resume completes");
  assert(second.stats.skippedBatches === 1, "completed batch skipped on resume");
  assert(calls === 1, "only incomplete batch re-called");
  finalizeRun(fresh.runId, "COMPLETED");
  patched.restore();
}

async function testCanonicalGehaltIdentity() {
  const scopeId = "g2/b1/cs";
  const batch = makeGehaltFixtures(scopeId);
  const ids = batch.map((o) => buildLunaRequestId(scopeId, o));
  assert(ids[0] !== ids[1], "canonical ids differ for duplicate raw Gehalt");
  assert(ids.every((id) => id.includes("Gehalt")), "raw Gehalt preserved in canonical id");
  const payload = batch.map((o) => buildLunaRequestPayload(scopeId, o));
  const validation = validateBatchResponse(
    payload,
    { items: payload.map((o) => ({ ...o, status: "PASS" })) },
    (item) => item.id,
  );
  assert(validation.ok, "duplicate raw Gehalt batch validates with canonical ids");
}

async function testFindingDedupUsesRawCardId() {
  const scope = { scopeId: "g2/b1/cs", group: "g2", dataset: "b1", lang: "cs" };
  const scopeId = scope.scopeId;
  const batch = makeGehaltFixtures(scopeId);
  const items = batch.map((o) => ({
    ...buildLunaRequestPayload(scopeId, o),
    status: "FINDING",
    field: "lv",
    category: "TRANSLATION",
    severity: "MEDIUM",
  }));
  const findings = normalizeLunaItemsToFindings(items, scope);
  assert(findings.length === 2, "both Gehalt objects produce findings");
  assert(findings[0].cardId === "Gehalt" && findings[1].cardId === "Gehalt", "raw card id preserved");
  assert(findings[0].findingStableId !== findings[1].findingStableId, "findings differ by scope position");
}

async function testResumeIdentityGates() {
  const runId = "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";
  const scopes = getDeterministicScopeOrder();
  const cliScope = {
    groups: ["g2", "g1", "g3"],
    datasetsByGroup: {
      g2: ["a1", "a2", "b1", "b2", "c1", "c2"],
      g1: ["sentences", "verbs", "training"],
      g3: ["courseLessons"],
    },
    langs: [
      "lv", "lt", "ru", "pl", "uk", "et", "en", "ro", "bg", "tr", "gr", "sq", "mk", "sl", "bs", "sr",
      "hr", "sk", "cs", "fi", "sv", "nb", "nn", "da", "nl", "lb", "fr", "it", "es", "pt", "hu", "is",
    ],
  };
  const baseline = { originMainSha: SHA_TEST, verdict: "PASS" };
  const gitIdentity = injectedGitIdentity({ headSha: SHA_TEST, originMainSha: SHA_TEST });
  const opts = {
    skipApiKeyCheck: true,
    skipPhase0Check: true,
    baseline,
    gitIdentity,
  };

  const { buildExpectedBatchPlanForScope } = require("./lib/phase1-luna-checkpoint/batch-plan");
  const { readJsonFile } = require("./lib/phase1-luna-checkpoint/atomic-io");
  const scope = { scopeId: "g2/a1/et", group: "g2", dataset: "a1", lang: "et", lunaApplicable: true };
  const plan = buildExpectedBatchPlanForScope(scope)[0];
  const cpPath = require("./lib/phase1-luna-checkpoint/constants").checkpointFilePath(
    runId,
    scope.scopeId,
    plan.batchId,
  );
  const cp = readJsonFile(cpPath);
  assert(plan.requestInputHash === cp.requestInputHash, "real RUN_ID legacy checkpoint hash parity");

  const badBaseline = prepareResumeContext({
    runId,
    scopes,
    cliScope,
    transport: "REAL",
    model: DEFAULT_MODEL,
    options: {
      ...opts,
      baseline: { originMainSha: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef", verdict: "PASS" },
    },
  });
  assert(!badBaseline.ok && badBaseline.realCalls === 0, "wrong baseline blocked");

  const badRun = prepareResumeContext({
    runId: "phase1-fake-run-id",
    scopes,
    cliScope,
    transport: "REAL",
    model: DEFAULT_MODEL,
    options: opts,
  });
  assert(!badRun.ok && badRun.realCalls === 0, "wrong RUN_ID blocked");
}

async function testLegacyReturnedIdsInCheckpoint() {
  const scopeId = "g2/b1/cs";
  const batch = makeGehaltFixtures(scopeId);
  const lunaItems = batch.map((o) => ({
    ...buildLunaRequestPayload(scopeId, o),
    status: "PASS",
  }));
  const cp = buildBatchCheckpoint({
    runId: "test",
    scopeId,
    batchIndex: 41,
    expectedObjects: batch,
    getId: getLegacyObjectId,
    requestPayload: { scopeId, adapter: "g2", objects: batch },
    rawResult: { items: lunaItems },
    normalizedFindings: [],
    attemptCount: 1,
    tokensUsed: 1,
    model: DEFAULT_MODEL,
    transport: "MOCK",
    startedAt: new Date().toISOString(),
  });
  assert(cp.returnedObjectIds[0] === "Gehalt" && cp.returnedObjectIds[1] === "Gehalt", "legacy returned ids");
  assert(
    cp.returnedObjectIds.every((id) => !String(id).includes("|idx:")),
    "returned ids are not canonical",
  );
  const validation = validateBatchCheckpoint(cp, {
    expectedRunId: "test",
    scopeId,
    batchIndex: 41,
    expectedIds: cp.expectedObjectIds,
    requestInputHash: cp.requestInputHash,
  });
  assert(validation.ok, "checkpoint with canonical response maps to legacy ids");
}

async function testDeterministicFixtureRuns() {
  const scopeId = "g2/b1/cs";
  const batch = makeGehaltFixtures(scopeId);
  const runOnce = async () => {
    const transport = createMockLunaTransport();
    const result = await runBatchedAdapter({
      transport,
      objects: batch,
      getId: getLegacyObjectId,
      serialize: (o) => buildLunaRequestPayload(scopeId, o),
      serializeCheckpoint: (o) => o,
      batchSize: 2,
      scopeId,
      adapterName: "g2",
    });
    return JSON.stringify(result.results.map((r) => r.id).sort());
  };
  const a = await runOnce();
  const b = await runOnce();
  assert(a === b, "two fixture runs are deterministic");
}

async function main() {
  console.log("Phase 1 Luna infra repair tests");
  await testPerBatchWallClockReset();
  await testPartialBatchTimeoutPreservesComplete();
  await testResumeSkipsCompleteBatches();
  await testCanonicalGehaltIdentity();
  await testFindingDedupUsesRawCardId();
  await testResumeIdentityGates();
  await testLegacyReturnedIdsInCheckpoint();
  await testDeterministicFixtureRuns();

  console.log(`\nResults: ${testsRun - testsFailed}/${testsRun} passed`);
  if (testsFailed > 0) {
    process.exit(1);
  }
  console.log("PASS");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
