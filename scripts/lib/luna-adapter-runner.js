/**
 * Luna adapter infrastructure — batching, retry, timeout, validation (mock transport in F0).
 */
const { createLunaTransport } = require('./luna-transport');

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
  };
}

function validateBatchResponse(batch, response, getId) {
  const issues = [];
  if (!response || typeof response !== 'object') {
    issues.push('MALFORMED_RESPONSE');
    return { ok: false, issues, missingIds: batch.map(getId) };
  }
  const items = Array.isArray(response.items) ? response.items : null;
  if (!items) {
    issues.push('MALFORMED_RESPONSE');
    return { ok: false, issues, missingIds: batch.map(getId) };
  }
  const expectedIds = batch.map(getId);
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

async function runBatchedAdapter({
  transport,
  objects,
  getId,
  serialize,
  batchSize = 50,
  scopeId,
  adapterName,
  checkpointHooks = null,
  interruptState = null,
}) {
  const stats = createAdapterStats();
  stats.objectsExpected = objects.length;
  stats.skippedBatches = 0;
  const results = [];
  const checkpoints = [];
  let lastBatchId = null;
  const batches = [];
  for (let i = 0; i < objects.length; i += batchSize) {
    batches.push(objects.slice(i, i + batchSize));
  }

  const batchStart = Date.now();

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex += 1) {
    const batch = batches[batchIndex];
    checkInterrupted(interruptState);

    if (Date.now() - batchStart > BATCH_WALL_CLOCK_MS) {
      stats.failures += 1;
      return { ok: false, reason: 'BATCH_WALL_CLOCK_EXCEEDED', stats, results, checkpoints, lastBatchId };
    }

    const payload = {
      scopeId,
      adapter: adapterName,
      objects: batch.map((obj) => serialize(obj)),
    };

    if (checkpointHooks?.shouldSkipBatch) {
      const skipResult = checkpointHooks.shouldSkipBatch({
        batchIndex,
        batch,
        getId,
        requestPayload: payload,
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
      try {
        let heartbeatTimer;
        const callPromise = transport.call(payload);
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('TIMEOUT')), TIMEOUT_MS);
        });
        if (checkpointHooks?.onHeartbeat) {
          heartbeatTimer = setInterval(() => {
            checkpointHooks.onHeartbeat({ currentScopeId: scopeId, batchIndex });
          }, 15_000);
        }

        let response;
        try {
          response = await Promise.race([callPromise, timeoutPromise]);
        } finally {
          if (heartbeatTimer) clearInterval(heartbeatTimer);
        }

        stats.realCalls += transport.realCallsDelta || 0;
        stats.tokensUsed += response?.tokensUsed || 0;

        const validation = validateBatchResponse(batch, response, getId);
        if (!validation.ok) {
          lastError = validation.issues.join(',');
          if (attempt < MAX_RETRIES) {
            stats.retries += 1;
            await sleep(BACKOFF_MS[Math.min(attempt - 1, BACKOFF_MS.length - 1)]);
            continue;
          }
          stats.failures += 1;
          return {
            ok: false,
            reason: lastError,
            stats,
            results,
            checkpoints,
            lastBatchId,
            missingIds: validation.missingIds,
          };
        }

        let savedCheckpoint = null;
        if (checkpointHooks?.onBatchPass) {
          savedCheckpoint = checkpointHooks.onBatchPass({
            batchIndex,
            batch,
            getId,
            requestPayload: payload,
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
        lastError = err.message === 'TIMEOUT' ? 'TIMEOUT' : err.message;
        if (attempt < MAX_RETRIES) {
          stats.retries += 1;
          await sleep(BACKOFF_MS[Math.min(attempt - 1, BACKOFF_MS.length - 1)]);
        } else {
          stats.failures += 1;
          return { ok: false, reason: lastError, stats, results, checkpoints, lastBatchId };
        }
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
      serialize,
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
  TIMEOUT_MS,
  MAX_RETRIES,
  BATCH_WALL_CLOCK_MS,
};
