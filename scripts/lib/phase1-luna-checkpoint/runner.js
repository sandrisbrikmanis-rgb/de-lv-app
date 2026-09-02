#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { DEFAULT_MODEL } = require("../luna-phase1-openai");
const { runBatchedAdapter } = require("../luna-adapter-runner");
const { adapterKey, ADAPTER_BY_SCOPE } = require("../luna-orchestrator");
const {
  RUNS_ROOT,
  HEARTBEAT_INTERVAL_MS,
  checkpointFilePath,
} = require("./constants");
const { writeJsonAtomic } = require("./atomic-io");
const {
  generateRunId,
  createRunManifest,
  writeRunManifest,
  loadObjectsForScope,
  getObjectId,
  getBatchSizeForScope,
} = require("./manifest");
const { createInitialProgress, updateProgressAtomic, formatProgressLine, touchHeartbeat } = require("./progress");
const { acquireRunLock, touchRunLock, releaseRunLock } = require("./lock");
const {
  buildBatchCheckpoint,
  saveBatchCheckpoint,
  loadConfirmedCheckpoints,
  stableBatchId,
  validateBatchCheckpoint,
  classifyCheckpointValidation,
} = require("./batch-checkpoint");
const { normalizeLunaItemsToFindings } = require("./findings");
const { buildLunaRequestPayload } = require("./object-identity");
const { prepareResumeContext, buildExpectedIdentity } = require("./resume");
const { createInterruptState, installSignalHandlers, assertNotInterrupted } = require("./signals");
const { runBaselineGate } = require("../content-discovery/baseline-gate");
const { resolvePhase1GitIdentity } = require("../phase1-git-identity");

function ensureSignalHandlers() {
  const state = createInterruptState();
  installSignalHandlers(state);
  return state;
}

function ensureRunsRoot() {
  fs.mkdirSync(RUNS_ROOT, { recursive: true });
}

function initFreshRun({
  scopes,
  cliScope,
  transport,
  model = DEFAULT_MODEL,
  command,
  baseline,
  gitIdentity,
}) {
  ensureRunsRoot();
  const runId = generateRunId();
  const baselineResult = baseline || runBaselineGate();
  const identity = gitIdentity || resolvePhase1GitIdentity();
  const manifest = createRunManifest({
    runId,
    discoveryBaselineSha: baselineResult.originMainSha,
    headSha: identity.headSha,
    originMainSha: identity.originMainSha,
    model,
    transport,
    cliScope,
    scopes,
    status: "IN_PROGRESS",
  });
  writeRunManifest(manifest);
  fs.mkdirSync(require("./constants").runDir(runId), { recursive: true });
  const progress = createInitialProgress(runId, scopes);
  writeJsonAtomic(require("./constants").progressPath(runId), progress);
  acquireRunLock({ runId, baselineSha: baselineResult.originMainSha, command });
  return { runId, manifest, progress };
}

function createCheckpointHooks({
  runId,
  scope,
  transport,
  model,
  interruptState,
  onProgress,
}) {
  const confirmed = loadConfirmedCheckpoints(runId, scope.scopeId);
  const confirmedByBatchId = new Map(confirmed.map((cp) => [cp.batchId, cp]));
  let skippedBatches = 0;
  let resumedFindings = [];

  return {
    shouldSkipBatch({ batchIndex, batch, getId, requestPayload }) {
      assertNotInterrupted(interruptState);
      const expectedIds = batch.map(getId);
      const batchId = stableBatchId(scope.scopeId, batchIndex, expectedIds);
      const existing = confirmedByBatchId.get(batchId);
      if (!existing) return false;
      const requestHash = require("./hash").hashRequestInput(requestPayload);
      const filePath = checkpointFilePath(runId, scope.scopeId, batchId);
      const validation = validateBatchCheckpoint(existing, {
        expectedRunId: runId,
        scopeId: scope.scopeId,
        batchIndex,
        expectedIds,
        requestInputHash: requestHash,
      });
      const classification = classifyCheckpointValidation(validation, existing, {
        scopeId: scope.scopeId,
        filePath,
      });
      if (
        classification === "RESUMABLE_INVALID" ||
        classification === "UNTRUSTED_LOCAL_PATCH_RUN" ||
        classification === "PARTIAL"
      ) {
        return false;
      }
      if (classification !== "VALID_PASS") {
        const err = new Error(`Corrupt checkpoint for ${batchId}: ${validation.issues.join(",")}`);
        err.code = "CHECKPOINT_CORRUPT";
        throw err;
      }
      skippedBatches += 1;
      resumedFindings.push(...(existing.normalizedFindings || []));
      return { skip: true, checkpoint: existing };
    },
    onBatchPass({ batchIndex, batch, getId, requestPayload, rawResult, attemptCount, tokensUsed, startedAt }) {
      const expectedIds = batch.map(getId);
      const normalizedFindings = normalizeLunaItemsToFindings(rawResult.items, scope, {
        productionFile: batch[0]?.productionFile,
      });
      const checkpoint = buildBatchCheckpoint({
        runId,
        scopeId: scope.scopeId,
        batchIndex,
        expectedObjects: batch,
        getId,
        requestPayload,
        rawResult,
        normalizedFindings,
        attemptCount,
        tokensUsed,
        model,
        transport,
        startedAt,
      });
      saveBatchCheckpoint(checkpoint);
      touchRunLock(runId);
      return checkpoint;
    },
    getSkippedStats() {
      return { skippedBatches, resumedFindings };
    },
    onHeartbeat: (patch) => {
      touchRunLock(runId);
      const progress = touchHeartbeat(runId, patch);
      if (onProgress) onProgress(progress);
      return progress;
    },
  };
}

async function runLunaScopeWithCheckpoint(scope, options = {}) {
  const interruptState = options.interruptState || ensureSignalHandlers();
  const runId = options.runId;
  const transport = options.transport;
  const model = options.model || DEFAULT_MODEL;
  const transportName = transport?.transport || transport?.mode || "MOCK";

  const key = adapterKey(scope.group, scope.dataset);
  const objects = loadObjectsForScope(scope);
  const limited =
    options.lunaObjectLimit && options.lunaObjectLimit > 0
      ? objects.slice(0, options.lunaObjectLimit)
      : objects;

  const batchSize = options.batchSize || getBatchSizeForScope(scope);
  const getId = getObjectId;
  const serializeLuna = (obj) => buildLunaRequestPayload(scope.scopeId, obj);
  const serializeCheckpoint = (obj) => obj;

  const hooks = createCheckpointHooks({
    runId,
    scope,
    transport,
    model,
    interruptState,
    onProgress: options.onProgress,
  });

  let lastProgressLog = 0;
  const heartbeatTimer = setInterval(() => {
    hooks.onHeartbeat({ currentScopeId: scope.scopeId });
    const progressFile = require("./constants").progressPath(runId);
    const progress = require("./atomic-io").readJsonFileIfExists(progressFile);
    if (progress && Date.now() - lastProgressLog > HEARTBEAT_INTERVAL_MS) {
      console.error(`[phase1-luna] ${formatProgressLine(progress)}`);
      lastProgressLog = Date.now();
    }
  }, HEARTBEAT_INTERVAL_MS);

  try {
    const result = await runBatchedAdapter({
      transport,
      objects: limited,
      getId,
      serialize: serializeLuna,
      serializeCheckpoint,
      batchSize,
      scopeId: scope.scopeId,
      adapterName: key,
      checkpointHooks: hooks,
      interruptState,
    });

    const skipped = hooks.getSkippedStats();
    const allFindings = [
      ...skipped.resumedFindings,
      ...(result.checkpoints || []).flatMap((cp) => cp.normalizedFindings || []),
    ];

    const currentProgress = require("./atomic-io").readJsonFileIfExists(require("./constants").progressPath(runId)) || {};
    const nextAttemptSeq =
      (currentProgress.scopeAttemptSequence ?? currentProgress.scopesCompleted ?? 0) + 1;
    updateProgressAtomic(runId, {
      scopeAttemptSequence: nextAttemptSeq,
      scopesCompleted: nextAttemptSeq,
      skippedBatches: (currentProgress.skippedBatches || 0) + skipped.skippedBatches,
      realCalls: (currentProgress.realCalls || 0) + (result.stats?.realCalls || 0),
      tokensUsed: (currentProgress.tokensUsed || 0) + (result.stats?.tokensUsed || 0),
      retries: (currentProgress.retries || 0) + (result.stats?.retries || 0),
      batchesCompleted: (currentProgress.batchesCompleted || 0) + (result.stats?.batches || 0),
      objectsProcessed: (currentProgress.objectsProcessed || 0) + (result.stats?.objectsReturned || 0),
      lastSuccessfulBatchId: result.lastBatchId || null,
      currentScopeId: scope.scopeId,
    });

    return {
      ...result,
      findings: allFindings,
      skippedBatches: skipped.skippedBatches,
      transport: transportName,
    };
  } finally {
    clearInterval(heartbeatTimer);
  }
}

function finalizeRun(runId, status) {
  const manifestFile = require("./constants").manifestPath(runId);
  const manifest = require("./atomic-io").readJsonFileIfExists(manifestFile);
  if (manifest) {
    manifest.status = status;
    manifest.endedAt = new Date().toISOString();
    writeJsonAtomic(manifestFile, manifest);
  }
  updateProgressAtomic(runId, { status });
  releaseRunLock(runId);
}

module.exports = {
  ensureRunsRoot,
  initFreshRun,
  createCheckpointHooks,
  runLunaScopeWithCheckpoint,
  finalizeRun,
  prepareResumeContext,
  buildExpectedIdentity,
};
