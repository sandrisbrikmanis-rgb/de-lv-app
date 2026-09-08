/**
 * Luna adapter infrastructure — batching, retry, timeout, validation (mock transport in F0).
 */
const { isRealLunaTransport } = require('./luna-transport');
const { splitObjectsIntoBatches } = require('./phase1-luna-checkpoint/batch-split');
const { isCanonicalLunaRequestId, shouldAttemptCanonicalIdRecovery } = require('./phase1-luna-checkpoint/object-identity');
const { recoverLunaResponseItems } = require('./phase1-luna-id-recovery');
const { writeRecoveryDiagnosticsBestEffort, formatShortRecoveryError } = require('./phase1-luna-id-recovery-diagnostics');
const {
  BLOCKED_MISSING_CANONICAL_ID,
  validateCanonicalIdSubset,
  dedupeObjectsByCanonicalId,
  deterministicRetrySubBatchSize,
  recordMissingIdDiagnostic,
} = require('./g2-a1-phase3/missing-canonical-id-retry');
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
    !response.idRecoveryParsedInTransport &&
    expectedIds.length > 0 &&
    expectedIds.every((id) => isCanonicalLunaRequestId(id)) &&
    shouldAttemptCanonicalIdRecovery(items, expectedIds)
  ) {
    const recovery = recoverLunaResponseItems(items, expectedIds, { attempt: options.attempt || 1 });
    if (!recovery.ok) {
      const diagnosticsWrite = writeRecoveryDiagnosticsBestEffort(recovery.diagnostics, {
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
        idRecoveryDiagnosticsPath: diagnosticsWrite.path,
        idRecoveryDiagnosticsWriteError: diagnosticsWrite.writeError,
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

async function runSingleTransportCall({
  transport,
  lunaPayload,
  attemptGuard,
  stats,
  allowPartialCanonicalIds,
}) {
  if (isRealLunaTransport(transport)) {
    stats.realCalls += 1;
  }
  const callPromise = transport.call(lunaPayload, {
    signal: attemptGuard.controller.signal,
    recoveryContext: lunaPayload.recoveryContext,
    allowPartialCanonicalIds,
  });
  trackDetachedPromise(callPromise);
  const response = await Promise.race([callPromise, attemptGuard.guardPromise]);
  stats.tokensUsed += response?.tokensUsed || 0;
  return response;
}

async function runMissingCanonicalIdRetryBatch({
  transport,
  batch,
  serialize,
  serializeCheckpoint,
  scopeId,
  adapterName,
  batchIndex,
  stats,
  interruptState,
  batchWallClockMs,
  requestTimeoutMs,
  retryBackoffMs,
  checkpointHooks,
  cardType = null,
}) {
  const checkpointSerialize = serializeCheckpoint || serialize;
  const expectedOrder = batch.map((obj) => obj.id);
  const acceptedById = new Map();
  let pendingObjects = [...batch];
  let attemptRound = 0;
  const batchStartedAt = new Date().toISOString();
  const batchStartedMono = nowMs();
  const batchDeadlineAt = batchStartedMono + batchWallClockMs;
  let totalAttempts = 0;
  let lastMissingIds = [];

  while (pendingObjects.length > 0) {
    attemptRound += 1;
    checkInterrupted(interruptState);

    if (attemptRound > MAX_RETRIES) {
      return failAttemptResult(BLOCKED_MISSING_CANONICAL_ID, stats, [], [], null, {
        missingIds: lastMissingIds,
        missingCanonicalIdRetry: true,
      });
    }

    const subBatchSize = deterministicRetrySubBatchSize(pendingObjects.length, attemptRound);
    const subBatches = splitObjectsIntoBatches(pendingObjects, subBatchSize);
    const nextPending = [];

    for (const subBatch of subBatches) {
      checkInterrupted(interruptState);
      const remainingBatchMs = getMonotonicBatchRemainingMs(batchDeadlineAt);
      if (remainingBatchMs <= 0) {
        return batchWallExceededResult(stats, [], [], null);
      }

      totalAttempts += 1;
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

        const checkpointPayload = {
          scopeId,
          adapter: adapterName,
          objects: subBatch.map((obj) => checkpointSerialize(obj)),
        };
        const lunaPayload = {
          scopeId,
          adapter: adapterName,
          objects: subBatch.map((obj) => serialize(obj)),
          recoveryContext: { scopeId, batchIndex, attempt: totalAttempts, cardType },
        };

        const response = await runSingleTransportCall({
          transport,
          lunaPayload,
          attemptGuard,
          stats,
          allowPartialCanonicalIds: true,
        });

        assertPostAwaitDeadline(deadlines);

        const validation = validateCanonicalIdSubset(subBatch, response, {
          scopeId,
          batchIndex,
          attempt: totalAttempts,
        });

        for (const [id, item] of validation.acceptedById.entries()) {
          if (!acceptedById.has(id)) {
            acceptedById.set(id, item);
          }
        }

        const subMissing = subBatch.map((obj) => obj.id).filter((id) => !acceptedById.has(id));
        for (const obj of subBatch) {
          if (!acceptedById.has(obj.id)) {
            nextPending.push(obj);
          }
        }
        lastMissingIds = subMissing;

        if (!validation.ok) {
          recordMissingIdDiagnostic({
            scopeId,
            cardType,
            batchIndex,
            attempt: totalAttempts,
            validation,
            usage: response?.usage || null,
            retrySubsetIds: subMissing,
            rejectionReason: validation.issues.join(","),
          });
        }
      } catch (err) {
        if (err.code === "INTERRUPTED") throw err;
        const normalized = normalizeTransportError(err);
        if (normalized.code === "BATCH_WALL_CLOCK_EXCEEDED") {
          return batchWallExceededResult(stats, [], [], null);
        }
        recordMissingIdDiagnostic({
          scopeId,
          cardType,
          batchIndex,
          attempt: totalAttempts,
          validation: {
            expectedIds: subBatch.map((obj) => obj.id),
            returnedCanonicalIds: [],
            missingIds: subBatch.map((obj) => obj.id),
            duplicateIds: [],
            unexpectedIds: [],
            itemsWithoutId: 0,
          },
          usage: err.usage || null,
          retrySubsetIds: subBatch.map((obj) => obj.id),
          rejectionReason: normalized.code === "TIMEOUT" ? "TIMEOUT" : normalized.message,
        });
        if (attemptRound >= MAX_RETRIES) {
          return failAttemptResult(
            normalized.code === "TIMEOUT" ? "TIMEOUT" : normalized.message,
            stats,
            [],
            [],
            null,
            { missingIds: subBatch.map((obj) => obj.id), missingCanonicalIdRetry: true },
          );
        }
      } finally {
        if (heartbeatTimer) clearInterval(heartbeatTimer);
        if (attemptGuard) attemptGuard.dispose();
      }
    }

    pendingObjects = dedupeObjectsByCanonicalId(nextPending);
    lastMissingIds = pendingObjects.map((obj) => obj.id);

    if (pendingObjects.length === 0) {
      break;
    }

    if (attemptRound < MAX_RETRIES) {
      const backoffDelayMs = retryBackoffMs[Math.min(attemptRound - 1, retryBackoffMs.length - 1)];
      if (getMonotonicBatchRemainingMs(batchDeadlineAt) <= backoffDelayMs) {
        return batchWallExceededResult(stats, [], [], null);
      }
      stats.retries += 1;
      await sleep(backoffDelayMs);
      if (getMonotonicBatchRemainingMs(batchDeadlineAt) <= 0) {
        return batchWallExceededResult(stats, [], [], null);
      }
    }
  }

  const finalItems = expectedOrder.map((id) => acceptedById.get(id));
  if (finalItems.some((item) => !item)) {
    return failAttemptResult(BLOCKED_MISSING_CANONICAL_ID, stats, [], [], null, {
      missingIds: expectedOrder.filter((id) => !acceptedById.has(id)),
      missingCanonicalIdRetry: true,
    });
  }

  let savedCheckpoint = null;
  if (checkpointHooks?.onBatchPass) {
    const checkpointPayload = {
      scopeId,
      adapter: adapterName,
      objects: batch.map((obj) => (serializeCheckpoint || serialize)(obj)),
    };
    savedCheckpoint = checkpointHooks.onBatchPass({
      batchIndex,
      batch,
      getId: (obj) => obj.id,
      requestPayload: checkpointPayload,
      rawResult: { items: finalItems, tokensUsed: 0 },
      attemptCount: totalAttempts,
      tokensUsed: 0,
      startedAt: batchStartedAt,
    });
  }

  stats.objectsReturned += finalItems.length;
  stats.batches += 1;

  const checkpoints = savedCheckpoint ? [savedCheckpoint] : [];
  const lastBatchId = savedCheckpoint?.batchId || null;

  return {
    ok: true,
    items: finalItems,
    checkpoints,
    lastBatchId,
    stats,
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
  missingCanonicalIdRetry = false,
  cardType = null,
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

    if (missingCanonicalIdRetry) {
      const retryResult = await runMissingCanonicalIdRetryBatch({
        transport,
        batch: batch.map((obj) => serialize(obj)),
        serialize: (obj) => obj,
        serializeCheckpoint: serializeCheckpoint
          ? (obj) => (serializeCheckpoint(obj))
          : (obj) => serialize(obj),
        scopeId,
        adapterName,
        batchIndex,
        stats,
        interruptState,
        batchWallClockMs,
        requestTimeoutMs,
        retryBackoffMs,
        checkpointHooks,
        cardType,
      });
      if (!retryResult.ok) {
        return {
          ok: false,
          reason: retryResult.reason,
          stats,
          results,
          checkpoints,
          lastBatchId,
          missingIds: retryResult.missingIds,
          missingCanonicalIdRetry: true,
        };
      }
      results.push(...retryResult.items);
      if (retryResult.checkpoints?.length) {
        checkpoints.push(...retryResult.checkpoints);
        lastBatchId = retryResult.lastBatchId;
      }
      continue;
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

        const callPromise = transport.call(lunaPayload, {
          signal: attemptGuard.controller.signal,
          recoveryContext: { scopeId, batchIndex, attempt },
        });
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
  runMissingCanonicalIdRetryBatch,
  TIMEOUT_MS,
  MAX_RETRIES,
  BATCH_WALL_CLOCK_MS,
  BACKOFF_MS,
  BLOCKED_MISSING_CANONICAL_ID,
};
