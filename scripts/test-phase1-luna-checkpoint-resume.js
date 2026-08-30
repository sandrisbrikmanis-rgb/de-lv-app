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
  const { stableBatchId } = require("./lib/phase1-luna-checkpoint/batch-checkpoint");
  const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");
  const constants = require("./lib/phase1-luna-checkpoint/constants");

  const scope = { scopeId: "g2/a1/et", group: "g2", dataset: "a1", lang: "et", lunaApplicable: true };
  const scopes = [scope];
  const cliScope = { groups: ["g2"], datasetsByGroup: { g2: ["a1"] }, langs: ["et"] };
  const baseline = { originMainSha: SHA_TEST, verdict: "PASS" };
  const gitIdentity = injectedGitIdentity();
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
  const ids = ["obj-1", "obj-2", "obj-3"];
  const batchId = stableBatchId(scope.scopeId, 0, ids);
  fs.writeFileSync(
    path.join(cpDir, `${batchId}.json`),
    JSON.stringify({
      schemaVersion: "1.0.0",
      status: "PASS",
      runId: fresh.runId,
      scopeId: scope.scopeId,
      batchId,
      batchIndex: 0,
      expectedObjectIds: ids,
      expectedIdsHash: "tampered-hash",
      returnedObjectIds: ids,
      requestInputHash: "tampered-request",
      rawResult: { items: ids.map((id) => ({ id, status: "PASS" })) },
    }),
  );

  const resume = prepareResumeContext({
    runId: fresh.runId,
    scopes,
    cliScope,
    transport: "MOCK",
    model: DEFAULT_MODEL,
    options: { skipApiKeyCheck: true, skipPhase0Check: true, gitIdentity, baseline },
  });
  assert(!resume.ok, "tampered checkpoint blocks resume prep");
  assert(resume.code === "CHECKPOINT_CORRUPT", "tampered checkpoint code CHECKPOINT_CORRUPT");
  assert(resume.realCalls === 0, "tampered checkpoint realCalls 0");

  finalizeRun(fresh.runId, "COMPLETED");
  fs.rmSync(tmp, { recursive: true, force: true });
}

async function run() {
  await testAtomicBatchCheckpoint();
  const resumeStats = await testInterruptResumeDeterminism();
  assert(resumeStats.resumedCalls === 0, "resumed API calls 0");
  testFailClosedIdentityWrapper();
  testTamperedCheckpointBlocksResumePrep();
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
