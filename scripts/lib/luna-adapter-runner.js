/**
 * Luna adapter infrastructure — batching, retry, timeout, validation (mock transport in F0).
 */
const { isRealLunaTransport } = require('./luna-transport');
const { splitObjectsIntoBatches } = require('./phase1-luna-checkpoint/batch-split');
const { isCanonicalLunaRequestId, shouldAttemptCanonicalIdRecovery } = require('./phase1-luna-checkpoint/object-identity');
const { recoverLunaResponseItems } = require('./phase1-luna-id-recovery');
const { writeRecoveryDiagnostics, formatShortRecoveryError } = require('./phase1-luna-id-recovery-diagnostics');
const {
  nowMs,
  createAttemptDeadlines,
  createAttemptAbortContext,
  trackDetachedPromise,
  normalizeTransportError,
  getMonotonicBatchRemainingMs,
  assertPostAwaitDeadline,
} = require('./luna-request-guard');

const TIMEOUT_MS = 180_000;
const MAX_RETRIES = 3;
const BACKOFF_MS = [5_000, 15_000];
const BATCH_WALL_CLOCK_MS = 10 * 60 * 1000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createAdapterStats() {
  return {
    tokensUsed: 0,
    batches: 0,
    retries: 0,
    failures: 0,
    objectsExpected: 0,
    objectsReturned: 0,
    realCalls: 0,
    skippedBatches: 0,
  };
}

function validateBatchResponse(batch, response, getId, options = {}) {
  const issues = [];
  if (!response || typeof response !== 'object') {
    issues.push('MALFORMED_RESPONSE');
    return { ok: false, issues, missingIds: batch.map(getId) };
  }
  const itemsInput = Array.isArray(response.items) ? response.items : null;
  if (!itemsInput) {
    issues.push('MALFORMED_RESPONSE');
    return { ok: false, issues, missingIds: batch.map(getId) };
  }
  const expectedIds = batch.map(getId);
  let items = itemsInput;

  if (
    expectedIds.length > 0 &&
    expectedIds.every((id) => isCanonicalLunaRequestId(id)) &&
    shouldAttemptCanonicalIdRecovery(items, expectedIds)
  ) {
    const recovery = recoverLunaResponseItems(items, expectedIds, { attempt: options.attempt || 1 });
    if (!recovery.ok) {
      const diagnosticsPath = writeRecoveryDiagnostics(recovery.diagnostics, {
        scopeId: options.scopeId,
        batchIndex: options.batchIndex,
        attempt: options.attempt || 1,
      });
      const shortError = recovery.shortError || formatShortRecoveryError(recovery.issues, recovery.diagnostics);
      return {
        ok: false,
        issues: recovery.issues,
        missingIds: expectedIds,
        idRecoveries: recovery.recoveries,
        idRecoveryDiagnostics: recovery.diagnostics,
        idRecoveryDiagnosticsPath: diagnosticsPath,
        shortError,
      };
    }
    items = recovery.items;
  }

  const returnedIds = items.map((item) => getId(item));
  const missingIds = expectedIds.filter((id) => !returnedIds.includes(id));
  if (missingIds.length) issues.push('PARTIAL_RESPONSE');
  const idCounts = {};
  for (const id of returnedIds) {
    idCounts[id] = (idCounts[id] || 0) + 1;
  }
  const duplicateIds = Object.keys(idCounts).filter((id) => idCounts[id] > 1);
  if (duplicateIds.length) issues.push('DUPLICATE_IDS');
  const extra = returnedIds.filter((id) => !expectedIds.includes(id));
  if (extra.length) issues.push('UNEXPECTED_IDS');
  return {
    ok: issues.length === 0,
    issues,
    missingIds,
    items,
  };
}

function checkInterrupted(interruptState) {
  if (interruptState?.interrupted) {
    const err = new Error(`Interrupted by ${interruptState.signal || "SIGNAL"}`);
    err.code = "INTERRUPTED";
    throw err;
  }
}

function batchWallExceededResult(stats, results, checkpoints, lastBatchId) {
  stats.failures += 1;
  return {
    ok: false,
    reason: 'BATCH_WALL_CLOCK_EXCEEDED',
    stats,
    results,
    checkpoints,
    lastBatchId,
  };
}

function failAttemptResult(reason, stats, results, checkpoints, lastBatchId, extra = {}) {
  stats.failures += 1;
  return {
    ok: false,
    reason,
    stats,
    results,
    checkpoints,
    lastBatchId,
    ...extra,
  };
}

async function runBatchedAdapter({
  transport,
  objects,
  getId,
  serialize,
  serializeCheckpoint = null,
  batchSize = 50,
  scopeId,
  adapterName,
  checkpointHooks = null,
  interruptState = null,
  batchWallClockMs = BATCH_WALL_CLOCK_MS,
  requestTimeoutMs = TIMEOUT_MS,
  retryBackoffMs = BACKOFF_MS,
}) {
  const stats = createAdapterStats();
  stats.objectsExpected = objects.length;
  const results = [];
  const checkpoints = [];
  let lastBatchId = null;
  const batches = splitObjectsIntoBatches(objects, batchSize);

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex += 1) {
    const batch = batches[batchIndex];
    checkInterrupted(interruptState);
    const batchStartedMono = nowMs();
    const batchDeadlineAt = batchStartedMono + batchWallClockMs;

    const checkpointSerialize = serializeCheckpoint || serialize;
    const checkpointPayload = {
      scopeId,
      adapter: adapterName,
      objects: batch.map((obj) => checkpointSerialize(obj)),
    };
    const lunaPayload = {
      scopeId,
      adapter: adapterName,
      objects: batch.map((obj) => serialize(obj)),
    };
    const getLunaId = (item) => item?.id;

    if (checkpointHooks?.shouldSkipBatch) {
      const skipResult = checkpointHooks.shouldSkipBatch({
        batchIndex,
        batch,
        getId,
        requestPayload: checkpointPayload,
      });
      if (skipResult?.skip) {
        const cp = skipResult.checkpoint;
        results.push(...(cp.rawResult?.items || []));
        stats.objectsReturned += (cp.returnedObjectIds || []).length;
        stats.skippedBatches += 1;
        stats.batches += 1;
        lastBatchId = cp.batchId;
        checkpoints.push(cp);
        checkpointHooks.onHeartbeat?.({ skippedBatches: stats.skippedBatches });
        continue;
      }
    }

    let attempt = 0;
    let batchOk = false;
    let lastError = null;
    const batchStartedAt = new Date().toISOString();

    while (attempt < MAX_RETRIES && !batchOk) {
      attempt += 1;
      checkInterrupted(interruptState);

      const remainingBatchMs = getMonotonicBatchRemainingMs(batchDeadlineAt);
      if (remainingBatchMs <= 0) {
        return batchWallExceededResult(stats, results, checkpoints, lastBatchId);
      }

      const attemptStart = nowMs();
      const deadlines = createAttemptDeadlines({
        attemptStart,
        requestTimeoutMs,
        batchDeadlineAt,
      });

      let heartbeatTimer;
      let attemptGuard = null;

      try {
        attemptGuard = createAttemptAbortContext({
          attemptLimitMs: deadlines.attemptLimitMs,
          isBatchDeadlineLimited: deadlines.isBatchDeadlineLimited,
        });

        if (checkpointHooks?.onHeartbeat) {
          heartbeatTimer = setInterval(() => {
            checkpointHooks.onHeartbeat({ currentScopeId: scopeId, batchIndex });
          }, 15_000);
        }

        if (isRealLunaTransport(transport)) {
          stats.realCalls += 1;
        }

        const callPromise = transport.call(lunaPayload, { signal: attemptGuard.controller.signal });
        trackDetachedPromise(callPromise);

        const response = await Promise.race([callPromise, attemptGuard.guardPromise]);

        assertPostAwaitDeadline(deadlines);

        stats.tokensUsed += response?.tokensUsed || 0;

        const validation = validateBatchResponse(lunaPayload.objects, response, getLunaId, {
          scopeId,
          batchIndex,
          attempt,
        });
        if (!validation.ok) {
          lastError = validation.shortError || validation.issues.join(',');
          if (attempt < MAX_RETRIES) {
            const backoffDelayMs = retryBackoffMs[Math.min(attempt - 1, retryBackoffMs.length - 1)];
            if (getMonotonicBatchRemainingMs(batchDeadlineAt) <= backoffDelayMs) {
              return batchWallExceededResult(stats, results, checkpoints, lastBatchId);
            }
            stats.retries += 1;
            await sleep(backoffDelayMs);
            if (getMonotonicBatchRemainingMs(batchDeadlineAt) <= 0) {
              return batchWallExceededResult(stats, results, checkpoints, lastBatchId);
            }
            continue;
          }
          return failAttemptResult(lastError, stats, results, checkpoints, lastBatchId, {
            missingIds: validation.missingIds,
          });
        }

        let savedCheckpoint = null;
        if (checkpointHooks?.onBatchPass) {
          savedCheckpoint = checkpointHooks.onBatchPass({
            batchIndex,
            batch,
            getId,
            requestPayload: checkpointPayload,
            rawResult: { items: validation.items, tokensUsed: response?.tokensUsed || 0 },
            attemptCount: attempt,
            tokensUsed: response?.tokensUsed || 0,
            startedAt: batchStartedAt,
          });
          if (savedCheckpoint) {
            checkpoints.push(savedCheckpoint);
            lastBatchId = savedCheckpoint.batchId;
          }
        }

        results.push(...validation.items);
        stats.objectsReturned += validation.items.length;
        stats.batches += 1;
        batchOk = true;
      } catch (err) {
        if (err.code === "INTERRUPTED") throw err;
        const normalized = normalizeTransportError(err);
        if (normalized.code === "BATCH_WALL_CLOCK_EXCEEDED") {
          return batchWallExceededResult(stats, results, checkpoints, lastBatchId);
        }
        lastError = normalized.code === "TIMEOUT" ? "TIMEOUT" : normalized.message;
        if (attempt < MAX_RETRIES) {
          const backoffDelayMs = retryBackoffMs[Math.min(attempt - 1, retryBackoffMs.length - 1)];
          if (getMonotonicBatchRemainingMs(batchDeadlineAt) <= backoffDelayMs) {
            return batchWallExceededResult(stats, results, checkpoints, lastBatchId);
          }
          stats.retries += 1;
          await sleep(backoffDelayMs);
          if (getMonotonicBatchRemainingMs(batchDeadlineAt) <= 0) {
            return batchWallExceededResult(stats, results, checkpoints, lastBatchId);
          }
        } else {
          return failAttemptResult(lastError, stats, results, checkpoints, lastBatchId);
        }
      } finally {
        if (heartbeatTimer) clearInterval(heartbeatTimer);
        if (attemptGuard) attemptGuard.dispose();
      }
    }
  }

  if (stats.objectsReturned !== stats.objectsExpected) {
    stats.failures += 1;
    return { ok: false, reason: 'COVERAGE_MISMATCH', stats, results, checkpoints, lastBatchId };
  }

  return { ok: true, stats, results, checkpoints, lastBatchId };
}

function createLunaAdapter({ name, loadObjects, getId, serialize, batchSize }) {
  return async function runAdapter(scopeId, options = {}) {
    const transport =
      options.transport ||
      (options.useRealTransport
        ? require("./luna-transport").createLunaTransport({ mode: "real" })
        : require("./luna-transport").createLunaTransport({ mode: "mock" }));
    let objects = loadObjects(scopeId, options);
    if (options.lunaObjectLimit && options.lunaObjectLimit > 0) {
      objects = objects.slice(0, options.lunaObjectLimit);
    }
    return runBatchedAdapter({
      transport,
      objects,
      getId,
      serialize: (obj) => serialize(obj, scopeId),
      batchSize: options.batchSize || batchSize,
      scopeId,
      adapterName: name,
    });
  };
}

module.exports = {
  runBatchedAdapter,
  createLunaAdapter,
  validateBatchResponse,
  isRealLunaTransport,
  TIMEOUT_MS,
  MAX_RETRIES,
  BATCH_WALL_CLOCK_MS,
  BACKOFF_MS,
};
