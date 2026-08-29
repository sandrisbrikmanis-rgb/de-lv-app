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

async function runBatchedAdapter({
  transport,
  objects,
  getId,
  serialize,
  batchSize = 50,
  scopeId,
  adapterName,
}) {
  const stats = createAdapterStats();
  stats.objectsExpected = objects.length;
  const results = [];
  const batches = [];
  for (let i = 0; i < objects.length; i += batchSize) {
    batches.push(objects.slice(i, i + batchSize));
  }

  const batchStart = Date.now();

  for (const batch of batches) {
    if (Date.now() - batchStart > BATCH_WALL_CLOCK_MS) {
      stats.failures += 1;
      return { ok: false, reason: 'BATCH_WALL_CLOCK_EXCEEDED', stats, results };
    }

    stats.batches += 1;
    let attempt = 0;
    let batchOk = false;
    let lastError = null;

    while (attempt < MAX_RETRIES && !batchOk) {
      attempt += 1;
      try {
        const payload = {
          scopeId,
          adapter: adapterName,
          objects: batch.map((obj) => serialize(obj)),
        };

        const callPromise = transport.call(payload);
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('TIMEOUT')), TIMEOUT_MS);
        });

        const response = await Promise.race([callPromise, timeoutPromise]);
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
            missingIds: validation.missingIds,
          };
        }

        results.push(...validation.items);
        stats.objectsReturned += validation.items.length;
        batchOk = true;
      } catch (err) {
        lastError = err.message === 'TIMEOUT' ? 'TIMEOUT' : err.message;
        if (attempt < MAX_RETRIES) {
          stats.retries += 1;
          await sleep(BACKOFF_MS[Math.min(attempt - 1, BACKOFF_MS.length - 1)]);
        } else {
          stats.failures += 1;
          return { ok: false, reason: lastError, stats, results };
        }
      }
    }
  }

  if (stats.objectsReturned !== stats.objectsExpected) {
    stats.failures += 1;
    return { ok: false, reason: 'COVERAGE_MISMATCH', stats, results };
  }

  return { ok: true, stats, results };
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
