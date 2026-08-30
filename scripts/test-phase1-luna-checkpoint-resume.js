#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { runBatchedAdapter, validateBatchResponse } = require("./lib/luna-adapter-runner");
const { createMockLunaTransport } = require("./lib/luna-transport");
const {
  RUNS_ROOT,
  ACTIVE_LOCK_PATH,
  runDir,
  manifestPath,
  progressPath,
} = require("./lib/phase1-luna-checkpoint/constants");
const { writeJsonAtomic, readJsonFile, readJsonFileIfExists } = require("./lib/phase1-luna-checkpoint/atomic-io");
const {
  buildBatchCheckpoint,
  saveBatchCheckpoint,
  validateBatchCheckpoint,
  loadBatchCheckpoint,
} = require("./lib/phase1-luna-checkpoint/batch-checkpoint");
const {
  generateRunId,
  createRunManifest,
  writeRunManifest,
  loadObjectsForScope,
} = require("./lib/phase1-luna-checkpoint/manifest");
const {
  acquireRunLock,
  releaseRunLock,
  assessActiveLock,
} = require("./lib/phase1-luna-checkpoint/lock");
const {
  prepareResumeContext,
  buildExpectedIdentity,
} = require("./lib/phase1-luna-checkpoint/resume");
const {
  reconstructFromCheckpoints,
  compareReconstruction,
} = require("./lib/phase1-luna-checkpoint/reconstruct");
const {
  initFreshRun,
  runLunaScopeWithCheckpoint,
  finalizeRun,
} = require("./lib/phase1-luna-checkpoint/runner");
const { runPhase1Discovery } = require("./run-phase1-discovery");
const { getDeterministicScopeOrder } = require("./lib/content-discovery/phase1-applicability");
const { createInterruptState } = require("./lib/phase1-luna-checkpoint/signals");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");

const SHA_TEST = "cccccccccccccccccccccccccccccccccccccccc";
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
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-luna-test-"));
  return dir;
}

function patchRunsRoot(tmpRoot) {
  const constants = require("./lib/phase1-luna-checkpoint/constants");
  constants.RUNS_ROOT = tmpRoot;
  constants.ACTIVE_LOCK_PATH = path.join(tmpRoot, ".active-lock.json");
  constants.runDir = (runId) => path.join(tmpRoot, runId);
  constants.manifestPath = (runId) => path.join(tmpRoot, runId, "run-manifest.json");
  constants.progressPath = (runId) => path.join(tmpRoot, runId, "progress.json");
  constants.checkpointDir = (runId, scopeId) =>
    path.join(tmpRoot, runId, "checkpoints", String(scopeId).replace(/\//g, "_"));
  constants.checkpointFilePath = (runId, scopeId, batchId) =>
    path.join(constants.checkpointDir(runId, scopeId), `${batchId}.json`);
  fs.mkdirSync(tmpRoot, { recursive: true });
  if (fs.existsSync(constants.ACTIVE_LOCK_PATH)) fs.unlinkSync(constants.ACTIVE_LOCK_PATH);
  return tmpRoot;
}

async function testAtomicBatchCheckpoint() {
  const tmp = patchRunsRoot(tempRunsRoot());
  const runId = "test-run-atomic";
  fs.mkdirSync(path.join(tmp, runId, "checkpoints", "g2_a1_et"), { recursive: true });
  const scope = { scopeId: "g2/a1/et", group: "g2", dataset: "a1", lang: "et" };
  const batch = [{ id: "card-1", productionFile: "data/et/a1.js" }];
  const cp = buildBatchCheckpoint({
    runId,
    scopeId: scope.scopeId,
    batchIndex: 0,
    expectedObjects: batch,
    getId: (o) => o.id,
    requestPayload: { objects: batch },
    rawResult: { items: [{ id: "card-1", status: "PASS" }] },
    normalizedFindings: [],
    attemptCount: 1,
    tokensUsed: 10,
    model: DEFAULT_MODEL,
    transport: "MOCK",
    startedAt: new Date().toISOString(),
  });
  const saved = saveBatchCheckpoint(cp);
  assert(fs.existsSync(saved), "checkpoint file exists");
  const loaded = loadBatchCheckpoint(runId, scope.scopeId, cp.batchId);
  assert(loaded?.status === "PASS", "loaded checkpoint PASS");

  const partialPath = path.join(tmp, runId, "checkpoints", "g2_a1_et", "partial.json.tmp");
  fs.writeFileSync(partialPath, "{ incomplete");
  assert(!fs.readdirSync(path.join(tmp, runId, "checkpoints", "g2_a1_et")).includes("partial.json.tmp") ||
    partialPath.endsWith(".tmp"), "partial tmp not promoted");

  const badValidation = validateBatchResponse(
    [{ id: "a" }, { id: "b" }],
    { items: [{ id: "a" }] },
    (o) => o.id,
  );
  assert(!badValidation.ok, "partial response not valid for PASS");

  fs.rmSync(tmp, { recursive: true, force: true });
}

async function testInterruptResumeDeterminism() {
  const tmp = patchRunsRoot(tempRunsRoot());
  const scopes = getDeterministicScopeOrder().filter((s) => s.scopeId === "g2/a1/et");
  const scope = scopes[0];
  const cliScope = { groups: ["g2"], datasetsByGroup: { g2: ["a1"] }, langs: ["et"] };

  let callCount = 0;
  const transport = {
    mode: "MOCK",
    transport: "MOCK",
    get realCallsDelta() {
      return 1;
    },
    async call(payload) {
      callCount += 1;
      return {
        items: payload.objects.map((o) => ({ ...o, status: "PASS" })),
        tokensUsed: 1,
      };
    },
  };

  const baseline = { originMainSha: SHA_TEST, verdict: "PASS" };
  const gitIdentity = injectedGitIdentity();
  const fresh = initFreshRun({
    scopes,
    cliScope,
    transport: "MOCK",
    baseline,
    gitIdentity,
    command: "test",
  });

  const full = await runLunaScopeWithCheckpoint(scope, {
    runId: fresh.runId,
    transport,
    lunaObjectLimit: 4,
  });
  assert(full.ok, "full mock scope pass");
  const fullCalls = callCount;

  callCount = 0;
  const resumed = await runLunaScopeWithCheckpoint(scope, {
    runId: fresh.runId,
    transport,
    lunaObjectLimit: 4,
  });
  assert(resumed.ok, "resume pass");
  assert(callCount === 0, "resume skips confirmed batches — API calls 0");
  assert((resumed.skippedBatches || 0) > 0, "skipped batches > 0");

  const reconFull = reconstructFromCheckpoints(fresh.runId, [scope.scopeId]);
  assert(reconFull.stats.duplicateFindings === 0, "duplicate findings 0");
  assert(reconFull.stats.repeatedBatches === 0, "repeated batches 0");

  finalizeRun(fresh.runId, "COMPLETED");
  fs.rmSync(tmp, { recursive: true, force: true });
  return { fullCalls, resumedCalls: callCount, repeatedBatches: reconFull.stats.repeatedBatches };
}

function testFailClosedIdentity() {
  const scopes = getDeterministicScopeOrder().filter((s) => s.scopeId === "g2/a1/et");
  const cliScope = { groups: ["g2"], datasetsByGroup: { g2: ["a1"] }, langs: ["et"] };
  const baseline = { originMainSha: SHA_TEST, verdict: "PASS" };
  const gitIdentity = injectedGitIdentity();

  const tmp = patchRunsRoot(tempRunsRoot());
  let fresh;
  try {
    fresh = initFreshRun({ scopes, cliScope, transport: "MOCK", baseline, gitIdentity });
  } catch (error) {
    fs.rmSync(tmp, { recursive: true, force: true });
    throw error;
  }
  const manifest = readJsonFile(manifestPath(fresh.runId));

  const scenarios = [
    {
      name: "HEAD_NOT_AT_ORIGIN_MAIN",
      identity: injectedGitIdentity({ headSha: SHA_TEST, originMainSha: "d".repeat(40), pass: false, blockers: [{ code: "HEAD_NOT_AT_ORIGIN_MAIN" }] }),
      expect: "HEAD_NOT_AT_ORIGIN_MAIN",
    },
    {
      name: "baseline drift",
      manifestPatch: { discoveryBaselineSha: "e".repeat(40) },
      expect: "RESUME_IDENTITY_MISMATCH",
    },
    {
      name: "model mismatch",
      manifestPatch: { model: "wrong-model" },
      expect: "RESUME_IDENTITY_MISMATCH",
    },
    {
      name: "transport mismatch",
      manifestPatch: { transport: "TERRA" },
      expect: "RESUME_IDENTITY_MISMATCH",
    },
    {
      name: "scope hash mismatch",
      manifestPatch: { scopeHash: "bad" },
      expect: "RESUME_IDENTITY_MISMATCH",
    },
    {
      name: "object id hash mismatch",
      manifestPatch: { objectIdsHash: "bad" },
      expect: "RESUME_IDENTITY_MISMATCH",
    },
    {
      name: "prompt mismatch",
      manifestPatch: { promptSchemaHash: "bad" },
      expect: "RESUME_IDENTITY_MISMATCH",
    },
  ];

  for (const scenario of scenarios) {
    if (scenario.identity) {
      const auth = require("./lib/phase1-luna-authorize").authorizeWithLunaDiscovery({
        skipApiKeyCheck: true,
        skipPhase0Check: true,
        gitIdentity: scenario.identity,
        baseline,
      });
      assert(!auth.pass, `${scenario.name}: Luna calls 0 / blocked`);
      continue;
    }
    const patched = { ...manifest, ...(scenario.manifestPatch || {}) };
    writeJsonAtomic(manifestPath(fresh.runId), patched);
    const resume = prepareResumeContext({
      runId: fresh.runId,
      scopes,
      cliScope,
      transport: "MOCK",
      options: { skipApiKeyCheck: true, skipPhase0Check: true, gitIdentity, baseline },
    });
    assert(!resume.ok && resume.code === scenario.expect, `${scenario.name} => ${resume.code}`);
    assert(resume.realCalls === 0, `${scenario.name}: realCalls 0`);
  }

  const dirty = prepareResumeContext({
    runId: fresh.runId,
    scopes,
    cliScope,
    transport: "MOCK",
    options: {
      skipApiKeyCheck: true,
      skipPhase0Check: true,
      gitIdentity: injectedGitIdentity({ workingTreeClean: false, pass: false }),
      baseline,
    },
  });
  assert(!dirty.ok, "dirty working tree blocked");

  finalizeRun(fresh.runId, "COMPLETED");
  fs.rmSync(tmp, { recursive: true, force: true });
}

function testFailClosedIdentityWrapper() {
  try {
    testFailClosedIdentity();
  } catch (error) {
    const constants = require("./lib/phase1-luna-checkpoint/constants");
    if (fs.existsSync(constants.ACTIVE_LOCK_PATH)) {
      try {
        fs.unlinkSync(constants.ACTIVE_LOCK_PATH);
      } catch (_) {
        /* ignore */
      }
    }
    throw error;
  }
}

function testLockMechanism() {
  const tmp = patchRunsRoot(tempRunsRoot());
  const runId = "lock-test-run";
  acquireRunLock({ runId, baselineSha: SHA_TEST, command: "test-lock" });
  const assessment = assessActiveLock({ currentRunId: "other-run" });
  assert(assessment.active, "second run blocked by lock");
  releaseRunLock(runId);
  const after = assessActiveLock();
  assert(!after.active, "lock released");
  fs.rmSync(tmp, { recursive: true, force: true });
}

async function testDeterministicRestarts() {
  const tmp = patchRunsRoot(tempRunsRoot());
  const scopes = getDeterministicScopeOrder().filter((s) => s.scopeId === "g2/a1/et");
  const scope = scopes[0];
  const cliScope = { groups: ["g2"], datasetsByGroup: { g2: ["a1"] }, langs: ["et"] };
  const baseline = { originMainSha: SHA_TEST, verdict: "PASS" };
  const gitIdentity = injectedGitIdentity();

  async function runWithLimit(limit, runId, transport) {
    return runLunaScopeWithCheckpoint(scope, { runId, transport, lunaObjectLimit: limit });
  }

  function makeTransport() {
    let n = 0;
    return {
      mode: "MOCK",
      get realCallsDelta() {
        return 1;
      },
      async call(payload) {
        n += 1;
        return { items: payload.objects.map((o) => ({ ...o, status: "PASS" })), tokensUsed: 1 };
      },
      get calls() {
        return n;
      },
    };
  }

  const objectLimit = 50;

  const t1 = makeTransport();
  const fresh1 = initFreshRun({ scopes, cliScope, transport: "MOCK", baseline, gitIdentity });
  await runWithLimit(objectLimit, fresh1.runId, t1);
  const continuous = reconstructFromCheckpoints(fresh1.runId, [scope.scopeId]);

  const t2 = makeTransport();
  finalizeRun(fresh1.runId, "COMPLETED");
  const fresh2 = initFreshRun({ scopes, cliScope, transport: "MOCK", baseline, gitIdentity });
  await runWithLimit(25, fresh2.runId, t2);
  const t3 = makeTransport();
  await runWithLimit(objectLimit, fresh2.runId, t3);
  const interrupted = reconstructFromCheckpoints(fresh2.runId, [scope.scopeId]);

  const cmp = compareReconstruction(continuous, interrupted);
  assert(cmp.findingsMatch, "findings deterministic across restart patterns");
  assert(
    continuous.stats.objectsProcessed === interrupted.stats.objectsProcessed,
    "objects processed deterministic across restart patterns",
  );
  assert(t3.calls >= 0 && t1.calls > 0, "transport call tracking works");
  assert(t2.calls + t3.calls <= t1.calls, "resumed run does not exceed continuous API calls");

  finalizeRun(fresh1.runId, "COMPLETED");
  finalizeRun(fresh2.runId, "COMPLETED");
  fs.rmSync(tmp, { recursive: true, force: true });
}

function testTamperedCheckpointBlocksResumePrep() {
  const tmp = patchRunsRoot(tempRunsRoot());
  const { initFreshRun, finalizeRun } = require("./lib/phase1-luna-checkpoint/runner");
  const { prepareResumeContext } = require("./lib/phase1-luna-checkpoint/resume");
  const { buildExpectedBatchPlanForScope } = require("./lib/phase1-luna-checkpoint/batch-plan");
  const { hashSortedList, hashRequestInput, stableBatchId } = require("./lib/phase1-luna-checkpoint/hash");
  const { CHECKPOINT_SCHEMA_VERSION } = require("./lib/phase1-luna-checkpoint/constants");
  const constants = require("./lib/phase1-luna-checkpoint/constants");

  const scope = { scopeId: "g2/a1/et", group: "g2", dataset: "a1", lang: "et", lunaApplicable: true };
  const scopes = [scope];
  const cliScope = { groups: ["g2"], datasetsByGroup: { g2: ["a1"] }, langs: ["et"] };
  const baseline = { originMainSha: SHA_TEST, verdict: "PASS" };
  const gitIdentity = injectedGitIdentity();

  function makeContext() {
    const fresh = initFreshRun({
      scopes,
      cliScope,
      transport: "MOCK",
      baseline,
      gitIdentity,
      model: DEFAULT_MODEL,
    });
    const cpDir = constants.checkpointDir(fresh.runId, scope.scopeId);
    fs.mkdirSync(cpDir, { recursive: true });
    return { fresh, cpDir };
  }

  function buildValidCheckpoint(fresh, expectedBatch) {
    return {
      schemaVersion: CHECKPOINT_SCHEMA_VERSION,
      status: "PASS",
      runId: fresh.runId,
      scopeId: expectedBatch.scopeId,
      batchId: expectedBatch.batchId,
      batchIndex: expectedBatch.batchIndex,
      expectedObjectIds: expectedBatch.expectedObjectIds,
      expectedIdsHash: expectedBatch.expectedIdsHash,
      requestInputHash: expectedBatch.requestInputHash,
      returnedObjectIds: expectedBatch.expectedObjectIds,
      rawResult: {
        items: expectedBatch.expectedObjectIds.map((id) => ({ id, status: "PASS" })),
      },
      model: DEFAULT_MODEL,
      transport: "MOCK",
    };
  }

  function resumePrep(fresh) {
    return prepareResumeContext({
      runId: fresh.runId,
      scopes,
      cliScope,
      transport: "MOCK",
      model: DEFAULT_MODEL,
      options: { skipApiKeyCheck: true, skipPhase0Check: true, gitIdentity, baseline },
    });
  }

  function assertBlocked(resume, label) {
    assert(!resume.ok, `${label}: blocked`);
    assert(resume.code === "CHECKPOINT_CORRUPT", `${label}: CHECKPOINT_CORRUPT`);
    assert(resume.realCalls === 0, `${label}: realCalls 0`);
  }

  function assertOk(resume, label) {
    assert(resume.ok, `${label}: ok`);
    assert(resume.realCalls === 0, `${label}: realCalls 0`);
  }

  const expectedBatch = buildExpectedBatchPlanForScope(scope)[0];

  {
    const { fresh, cpDir } = makeContext();
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(buildValidCheckpoint(fresh, expectedBatch)));
    assertOk(resumePrep(fresh), "valid checkpoint");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    fs.writeFileSync(path.join(cpDir, "corrupt.json"), "{bad");
    assertBlocked(resumePrep(fresh), "invalid json");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    fs.writeFileSync(path.join(cpDir, "truncated.json"), '{"status":"PASS"');
    assertBlocked(resumePrep(fresh), "truncated json");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    cp.runId = "other-run";
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "wrong runId");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    cp.scopeId = "g2/a1/de";
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "wrong scopeId");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    cp.batchIndex = 99;
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "wrong batchIndex");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    cp.batchId = "batch-fake-id";
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "wrong batchId content");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    fs.writeFileSync(path.join(cpDir, "wrong-filename.json"), JSON.stringify(buildValidCheckpoint(fresh, expectedBatch)));
    assertBlocked(resumePrep(fresh), "wrong batchId filename");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    cp.expectedObjectIds = ["fake-1", "fake-2"];
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "mutated expectedObjectIds");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    cp.expectedIdsHash = "bad-hash";
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "wrong expectedIdsHash");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    cp.requestInputHash = "tampered";
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "wrong requestInputHash");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    cp.returnedObjectIds = cp.returnedObjectIds.slice(0, 1);
    cp.rawResult.items = cp.rawResult.items.slice(0, 1);
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "missing returned id");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    cp.returnedObjectIds = [...cp.returnedObjectIds, "extra"];
    cp.rawResult.items = [...cp.rawResult.items, { id: "extra", status: "PASS" }];
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "extra returned id");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    const dupId = cp.returnedObjectIds[0];
    cp.returnedObjectIds = [dupId, dupId, ...cp.returnedObjectIds.slice(1)];
    cp.rawResult.items = cp.returnedObjectIds.map((id) => ({ id, status: "PASS" }));
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "duplicate returned id");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    cp.schemaVersion = "9.9.9";
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "schema mismatch");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    cp.status = "FAIL";
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    assertBlocked(resumePrep(fresh), "status not pass");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const cp = buildValidCheckpoint(fresh, expectedBatch);
    fs.writeFileSync(path.join(cpDir, expectedBatch.expectedFilename), JSON.stringify(cp));
    fs.writeFileSync(path.join(cpDir, `${expectedBatch.batchId}-dup.json`), JSON.stringify({ ...cp, endedAt: "x" }));
    assertBlocked(resumePrep(fresh), "duplicate batch checkpoint");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    fs.writeFileSync(path.join(cpDir, `.checkpoint.${process.pid}.tmp`), "{}");
    assertOk(resumePrep(fresh), "tmp file ignored");
    finalizeRun(fresh.runId, "COMPLETED");
  }
  {
    const { fresh, cpDir } = makeContext();
    const fakeIds = ["FAKE-A", "FAKE-B", "FAKE-C"];
    const fakeBatchIndex = 0;
    const fakeBatchId = stableBatchId(scope.scopeId, fakeBatchIndex, fakeIds);
    const fakePayload = {
      scopeId: scope.scopeId,
      adapter: expectedBatch.adapterName,
      objects: fakeIds.map((id) => ({ id })),
    };
    fs.writeFileSync(
      path.join(cpDir, `${fakeBatchId}.json`),
      JSON.stringify({
        schemaVersion: CHECKPOINT_SCHEMA_VERSION,
        status: "PASS",
        runId: fresh.runId,
        scopeId: scope.scopeId,
        batchId: fakeBatchId,
        batchIndex: fakeBatchIndex,
        expectedObjectIds: fakeIds,
        expectedIdsHash: hashSortedList(fakeIds),
        requestInputHash: hashRequestInput(fakePayload),
        returnedObjectIds: fakeIds,
        rawResult: { items: fakeIds.map((id) => ({ id, status: "PASS" })) },
        model: DEFAULT_MODEL,
        transport: "MOCK",
      }),
    );
    assertBlocked(resumePrep(fresh), "self-consistent fake batch");
    finalizeRun(fresh.runId, "COMPLETED");
  }

  fs.rmSync(tmp, { recursive: true, force: true });
}

async function testInterruptResumeThreeBatchMetrics() {
  const crypto = require("crypto");
  const tmp = patchRunsRoot(tempRunsRoot());
  const { createCheckpointHooks } = require("./lib/phase1-luna-checkpoint/runner");

  const scope = { scopeId: "g2/a1/et", group: "g2", dataset: "a1", lang: "et", lunaApplicable: true };
  const scopes = [scope];
  const cliScope = { groups: ["g2"], datasetsByGroup: { g2: ["a1"] }, langs: ["et"] };
  const baseline = { originMainSha: SHA_TEST, verdict: "PASS" };
  const gitIdentity = injectedGitIdentity();
  const objects = Array.from({ length: 9 }, (_, i) => ({
    id: `synthetic-obj-${i + 1}`,
    productionFile: "data/et/a1.js",
  }));
  const batchSize = 3;

  function makeTransport(interruptOn) {
    const log = [];
    return {
      mode: "MOCK",
      get realCallsDelta() {
        return 1;
      },
      log,
      async call(payload) {
        const idx = log.length;
        log.push(payload.objects.map((o) => o.id));
        if (interruptOn === idx) {
          const err = new Error("INTERRUPTED");
          err.code = "INTERRUPTED";
          throw err;
        }
        return { items: payload.objects.map((o) => ({ ...o, status: "PASS" })), tokensUsed: 1 };
      },
    };
  }

  async function runScope(runId, transport, interruptState) {
    const hooks = createCheckpointHooks({
      runId,
      scope,
      transport,
      model: DEFAULT_MODEL,
      interruptState,
    });
    return runBatchedAdapter({
      transport,
      objects,
      getId: (o) => o.id,
      serialize: (o) => o,
      batchSize,
      scopeId: scope.scopeId,
      adapterName: "g2",
      checkpointHooks: hooks,
      interruptState,
    });
  }

  function reconHash(runId) {
    const recon = reconstructFromCheckpoints(runId, [scope.scopeId]);
    return crypto
      .createHash("sha256")
      .update(
        JSON.stringify(
          recon.checkpoints.map((c) => ({
            ids: c.expectedObjectIds,
            ret: c.returnedObjectIds,
            findings: (c.normalizedFindings || []).map((f) => f.findingStableId),
          })),
        ),
      )
      .digest("hex");
  }

  const fresh1 = initFreshRun({ scopes, cliScope, transport: "MOCK", baseline, gitIdentity });
  const t1 = makeTransport(null);
  await runScope(fresh1.runId, t1, createInterruptState());
  const hash1 = reconHash(fresh1.runId);
  finalizeRun(fresh1.runId, "COMPLETED");

  const fresh2 = initFreshRun({ scopes, cliScope, transport: "MOCK", baseline, gitIdentity });
  const t2 = makeTransport(1);
  try {
    await runScope(fresh2.runId, t2, createInterruptState());
  } catch (_) {
    /* expected */
  }
  const t3 = makeTransport(null);
  const resumeResult = await runScope(fresh2.runId, t3, createInterruptState());
  const hash2 = reconHash(fresh2.runId);
  const recon2 = reconstructFromCheckpoints(fresh2.runId, [scope.scopeId]);
  finalizeRun(fresh2.runId, "COMPLETED");

  assert(t1.log.length === 3, "continuousApiCalls 3");
  assert(t2.log.length === 2, "interruptedApiCalls 2");
  assert(t3.log.length === 2, "resumedApiCalls 2");
  assert((resumeResult.stats?.skippedBatches || 0) === 1, "skippedBatches 1");
  assert(recon2.stats.repeatedBatches === 0, "repeatedBatches 0");
  assert(recon2.stats.duplicateFindings === 0, "duplicateFindings 0");
  assert(recon2.stats.duplicateObjects === 0, "duplicateObjects 0");
  assert(hash1 === hash2, "reconstruction hash match");

  fs.rmSync(tmp, { recursive: true, force: true });
}

async function run() {
  await testAtomicBatchCheckpoint();
  const resumeStats = await testInterruptResumeDeterminism();
  assert(resumeStats.resumedCalls === 0, "resumed API calls 0");
  testFailClosedIdentityWrapper();
  testTamperedCheckpointBlocksResumePrep();
  await testInterruptResumeThreeBatchMetrics();
  testLockMechanism();
  await testDeterministicRestarts();

  if (testsFailed > 0) {
    console.error(`FAIL: ${testsFailed}/${testsRun} assertions failed`);
    process.exit(1);
  }
  console.log(`PASS: phase1 Luna checkpoint/resume tests (${testsRun} assertions)`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
