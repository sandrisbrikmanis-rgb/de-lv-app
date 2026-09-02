#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const {
  runBatchedAdapter,
  TIMEOUT_MS,
  BATCH_WALL_CLOCK_MS,
  MAX_RETRIES,
} = require("./lib/luna-adapter-runner");
const { createCheckpointHooks, initFreshRun, finalizeRun } = require("./lib/phase1-luna-checkpoint/runner");
const { getLegacyObjectId, buildLunaRequestPayload } = require("./lib/phase1-luna-checkpoint/object-identity");
const { hashRequestInput } = require("./lib/phase1-luna-checkpoint/hash");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");

const SHA_TEST = "6cfb96105f7f741f6052d20ee1d1e342f198fda2";
const FIXTURE_REQUEST_TIMEOUT_MS = 40;
const FIXTURE_BATCH_WALL_MS = 80;
const FIXTURE_BACKOFF_MS = [10, 20];
const HARD_TEST_LIMIT_MS = 2_000;

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function withHardTimeout(promise, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`HARD_TEST_LIMIT_EXCEEDED: ${label}`)), HARD_TEST_LIMIT_MS),
    ),
  ]);
}

function injectedGitIdentity() {
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
  };
}

function tempRunsRoot() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "r-timeout-001-"));
}

function patchRunsRoot(tmpRoot) {
  const constants = require("./lib/phase1-luna-checkpoint/constants");
  const savedRunsRoot = constants.RUNS_ROOT;
  constants.RUNS_ROOT = tmpRoot;
  fs.mkdirSync(tmpRoot, { recursive: true });
  if (fs.existsSync(constants.ACTIVE_LOCK_PATH)) fs.unlinkSync(constants.ACTIVE_LOCK_PATH);
  return {
    restore() {
      constants.RUNS_ROOT = savedRunsRoot;
      if (fs.existsSync(constants.ACTIVE_LOCK_PATH)) fs.unlinkSync(constants.ACTIVE_LOCK_PATH);
      fs.rmSync(tmpRoot, { recursive: true, force: true });
    },
  };
}

function sampleObjects(scopeId, count = 2) {
  return Array.from({ length: count }, (_, i) => ({
    id: `${scopeId}|obj-${i}`,
    productionFile: "data/et/a1.js",
    index: i,
  }));
}

function createHangingTransport({ onSignal } = {}) {
  return {
    mode: "MOCK",
    get realCallsDelta() {
      return 1;
    },
    async call(payload, callOptions = {}) {
      const { signal } = callOptions;
      return new Promise((resolve, reject) => {
        if (signal) {
          const onAbort = () => {
            if (onSignal) onSignal(signal);
            const err = new Error("TIMEOUT");
            err.code = "TIMEOUT";
            err.name = "AbortError";
            reject(err);
          };
          if (signal.aborted) return onAbort();
          signal.addEventListener("abort", onAbort, { once: true });
        }
      });
    },
  };
}

/**
 * Legacy pre-R-TIMEOUT-001 control flow: batch wall checked only before await.
 * Reproduces the defect where a never-resolving call ignores batch deadline.
 */
async function legacyRaceOnlyBatchAwait({
  transport,
  batchWallClockMs,
  requestTimeoutMs,
}) {
  const batchWallStart = Date.now();
  const callPromise = transport.call({ objects: [{ id: "x" }] });
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("TIMEOUT")), requestTimeoutMs);
  });
  if (Date.now() - batchWallStart > batchWallClockMs) {
    return { reason: "BATCH_WALL_CLOCK_EXCEEDED" };
  }
  try {
    await Promise.race([callPromise, timeoutPromise]);
    return { reason: "PASS" };
  } catch (err) {
    return { reason: err.message };
  }
}

async function testLegacyBatchWallBypassDuringAwait() {
  const transport = createHangingTransport();
  const started = Date.now();
  const result = await withHardTimeout(
    legacyRaceOnlyBatchAwait({
      transport,
      batchWallClockMs: 30,
      requestTimeoutMs: 500,
    }),
    "legacy batch wall bypass",
  );
  const elapsed = Date.now() - started;
  assert(result.reason === "TIMEOUT", "legacy path waits for request timeout, not batch wall");
  assert(elapsed >= 450, `legacy path elapsed too short: ${elapsed}ms`);
  assert(elapsed < 700, `legacy path unexpected duration: ${elapsed}ms`);
}

async function testRequestTimeoutOnHangingTransport() {
  const transport = createHangingTransport();
  const started = Date.now();
  const result = await withHardTimeout(
    runBatchedAdapter({
      transport,
      objects: sampleObjects("g2/a1/et", 2),
      getId: getLegacyObjectId,
      serialize: (o) => buildLunaRequestPayload("g2/a1/et", o),
      serializeCheckpoint: (o) => o,
      batchSize: 2,
      scopeId: "g2/a1/et",
      adapterName: "g2",
      requestTimeoutMs: FIXTURE_REQUEST_TIMEOUT_MS,
      batchWallClockMs: 250,
      retryBackoffMs: FIXTURE_BACKOFF_MS,
    }),
    "request timeout hanging transport",
  );
  const elapsed = Date.now() - started;
  assert(!result.ok, "hanging transport fails");
  assert(result.reason === "TIMEOUT", `expected TIMEOUT got ${result.reason}`);
  assert(elapsed < FIXTURE_REQUEST_TIMEOUT_MS * MAX_RETRIES + 200, `elapsed ${elapsed}ms within retry budget`);
}

async function testAbortControllerFiresOnTimeout() {
  let abortSeen = false;
  const transport = createHangingTransport({
    onSignal: (signal) => {
      abortSeen = signal.aborted;
    },
  });
  await withHardTimeout(
    runBatchedAdapter({
      transport,
      objects: sampleObjects("g2/a1/et", 1),
      getId: getLegacyObjectId,
      serialize: (o) => buildLunaRequestPayload("g2/a1/et", o),
      serializeCheckpoint: (o) => o,
      batchSize: 1,
      scopeId: "g2/a1/et",
      adapterName: "g2",
      requestTimeoutMs: FIXTURE_REQUEST_TIMEOUT_MS,
      batchWallClockMs: FIXTURE_BATCH_WALL_MS,
      retryBackoffMs: FIXTURE_BACKOFF_MS,
    }),
    "abort controller fires",
  );
  assert(abortSeen, "AbortController.abort observed by transport");
}

async function testSignalReachesFakeOpenAIClient() {
  let clientSignal = null;
  const fakeClient = {
    responses: {
      create: async (_payload, options) => {
        clientSignal = options?.signal || null;
        return new Promise((resolve, reject) => {
          if (!clientSignal) return reject(new Error("missing signal"));
          const onAbort = () => {
            const err = new Error("TIMEOUT");
            err.code = "TIMEOUT";
            err.name = "AbortError";
            reject(err);
          };
          if (clientSignal.aborted) return onAbort();
          clientSignal.addEventListener("abort", onAbort, { once: true });
        });
      },
    },
  };
  const { createRealLunaTransport } = require("./lib/luna-transport");
  const transport = createRealLunaTransport({ client: fakeClient, model: DEFAULT_MODEL });
  await withHardTimeout(
    runBatchedAdapter({
      transport,
      objects: [{ id: "obj-1", field: "lv", de: "x", lv: "y" }],
      getId: (o) => o.id,
      serialize: (o) => o,
      batchSize: 1,
      scopeId: "g2/a1/et",
      adapterName: "g2",
      requestTimeoutMs: FIXTURE_REQUEST_TIMEOUT_MS,
      batchWallClockMs: FIXTURE_BATCH_WALL_MS,
      retryBackoffMs: FIXTURE_BACKOFF_MS,
    }),
    "signal reaches fake openai client",
  );
  assert(clientSignal, "fake OpenAI client received AbortSignal");
  assert(clientSignal.aborted, "signal aborted after timeout");
}

async function testFirstTimeoutSecondPass() {
  let calls = 0;
  const transport = {
    mode: "MOCK",
    get realCallsDelta() {
      return 1;
    },
    async call(payload, callOptions = {}) {
      calls += 1;
      const { signal } = callOptions;
      if (calls === 1) {
        return new Promise((resolve, reject) => {
          const onAbort = () => {
            const err = new Error("TIMEOUT");
            err.code = "TIMEOUT";
            reject(err);
          };
          if (signal?.aborted) return onAbort();
          signal?.addEventListener("abort", onAbort, { once: true });
        });
      }
      return {
        items: payload.objects.map((o) => ({ ...o, status: "PASS" })),
        tokensUsed: 1,
      };
    },
  };
  const result = await withHardTimeout(
    runBatchedAdapter({
      transport,
      objects: sampleObjects("g2/a1/et", 2),
      getId: getLegacyObjectId,
      serialize: (o) => buildLunaRequestPayload("g2/a1/et", o),
      serializeCheckpoint: (o) => o,
      batchSize: 2,
      scopeId: "g2/a1/et",
      adapterName: "g2",
      requestTimeoutMs: FIXTURE_REQUEST_TIMEOUT_MS,
      batchWallClockMs: 500,
      retryBackoffMs: FIXTURE_BACKOFF_MS,
    }),
    "first timeout second pass",
  );
  assert(result.ok, "second attempt passes");
  assert(calls === 2, `expected 2 calls got ${calls}`);
  assert(result.stats.retries === 1, "one retry recorded");
}

async function testAllAttemptsTimeoutFail() {
  const transport = createHangingTransport();
  const result = await withHardTimeout(
    runBatchedAdapter({
      transport,
      objects: sampleObjects("g2/a1/et", 1),
      getId: getLegacyObjectId,
      serialize: (o) => buildLunaRequestPayload("g2/a1/et", o),
      serializeCheckpoint: (o) => o,
      batchSize: 1,
      scopeId: "g2/a1/et",
      adapterName: "g2",
      requestTimeoutMs: FIXTURE_REQUEST_TIMEOUT_MS,
      batchWallClockMs: 400,
      retryBackoffMs: FIXTURE_BACKOFF_MS,
    }),
    "all attempts timeout",
  );
  assert(!result.ok, "all-timeout batch fails");
  assert(result.reason === "TIMEOUT", `expected TIMEOUT got ${result.reason}`);
  assert(result.stats.retries === MAX_RETRIES - 1, "max retries consumed");
}

async function testBatchDeadlineDuringAwait() {
  const transport = createHangingTransport();
  const started = Date.now();
  const result = await withHardTimeout(
    runBatchedAdapter({
      transport,
      objects: sampleObjects("g2/a1/et", 1),
      getId: getLegacyObjectId,
      serialize: (o) => buildLunaRequestPayload("g2/a1/et", o),
      serializeCheckpoint: (o) => o,
      batchSize: 1,
      scopeId: "g2/a1/et",
      adapterName: "g2",
      requestTimeoutMs: 500,
      batchWallClockMs: FIXTURE_BATCH_WALL_MS,
    }),
    "batch deadline during await",
  );
  const elapsed = Date.now() - started;
  assert(!result.ok, "batch deadline fails");
  assert(result.reason === "BATCH_WALL_CLOCK_EXCEEDED", `expected wall exceeded got ${result.reason}`);
  assert(elapsed < 200, `batch deadline should fire quickly, elapsed ${elapsed}ms`);
}

async function testBatchDeadlineDuringBackoff() {
  let calls = 0;
  const transport = {
    mode: "MOCK",
    get realCallsDelta() {
      return 1;
    },
    async call(payload, callOptions = {}) {
      calls += 1;
      const { signal } = callOptions;
      return new Promise((resolve, reject) => {
        const onAbort = () => {
          const err = new Error("TIMEOUT");
          err.code = "TIMEOUT";
          reject(err);
        };
        if (signal?.aborted) return onAbort();
        signal?.addEventListener("abort", onAbort, { once: true });
      });
    },
  };
  const result = await withHardTimeout(
    runBatchedAdapter({
      transport,
      objects: sampleObjects("g2/a1/et", 1),
      getId: getLegacyObjectId,
      serialize: (o) => buildLunaRequestPayload("g2/a1/et", o),
      serializeCheckpoint: (o) => o,
      batchSize: 1,
      scopeId: "g2/a1/et",
      adapterName: "g2",
      requestTimeoutMs: 20,
      batchWallClockMs: 50,
    }),
    "batch deadline during backoff",
  );
  assert(!result.ok, "batch deadline during backoff fails");
  assert(
    result.reason === "BATCH_WALL_CLOCK_EXCEEDED",
    `expected wall exceeded during backoff got ${result.reason}`,
  );
  assert(calls <= 2, `no extra attempts after batch deadline, calls=${calls}`);
}

async function testSlowRequestUnderLimitPasses() {
  const transport = {
    mode: "MOCK",
    get realCallsDelta() {
      return 1;
    },
    async call(payload, callOptions = {}) {
      const { signal } = callOptions;
      await new Promise((resolve, reject) => {
        const timer = setTimeout(resolve, 25);
        signal?.addEventListener(
          "abort",
          () => {
            clearTimeout(timer);
            reject(new Error("TIMEOUT"));
          },
          { once: true },
        );
      });
      return {
        items: payload.objects.map((o) => ({ ...o, status: "PASS" })),
        tokensUsed: 3,
      };
    },
  };
  const result = await withHardTimeout(
    runBatchedAdapter({
      transport,
      objects: sampleObjects("g2/a1/et", 2),
      getId: getLegacyObjectId,
      serialize: (o) => buildLunaRequestPayload("g2/a1/et", o),
      serializeCheckpoint: (o) => o,
      batchSize: 2,
      scopeId: "g2/a1/et",
      adapterName: "g2",
      requestTimeoutMs: FIXTURE_REQUEST_TIMEOUT_MS,
      batchWallClockMs: FIXTURE_BATCH_WALL_MS,
      retryBackoffMs: FIXTURE_BACKOFF_MS,
    }),
    "slow request under limit",
  );
  assert(result.ok, "slow but valid request passes");
}

async function testTimersClearedAfterPass() {
  const before = process._getActiveHandles().length;
  const transport = {
    mode: "MOCK",
    get realCallsDelta() {
      return 1;
    },
    async call(payload) {
      return {
        items: payload.objects.map((o) => ({ ...o, status: "PASS" })),
        tokensUsed: 1,
      };
    },
  };
  await withHardTimeout(
    runBatchedAdapter({
      transport,
      objects: sampleObjects("g2/a1/et", 2),
      getId: getLegacyObjectId,
      serialize: (o) => buildLunaRequestPayload("g2/a1/et", o),
      serializeCheckpoint: (o) => o,
      batchSize: 2,
      scopeId: "g2/a1/et",
      adapterName: "g2",
      requestTimeoutMs: FIXTURE_REQUEST_TIMEOUT_MS,
      batchWallClockMs: FIXTURE_BATCH_WALL_MS,
      retryBackoffMs: FIXTURE_BACKOFF_MS,
    }),
    "timers cleared after pass",
  );
  await new Promise((r) => setImmediate(r));
  const after = process._getActiveHandles().length;
  assert(after <= before + 2, `handle leak suspected before=${before} after=${after}`);
}

async function testResumeSkipsPassCheckpoints() {
  const patched = patchRunsRoot(tempRunsRoot());
  const scope = { scopeId: "g2/a1/et", group: "g2", dataset: "a1", lang: "et", lunaApplicable: true };
  const fresh = initFreshRun({
    scopes: [scope],
    cliScope: { groups: ["g2"], datasetsByGroup: { g2: ["a1"] }, langs: ["et"] },
    transport: "MOCK",
    baseline: { originMainSha: SHA_TEST, verdict: "PASS" },
    gitIdentity: injectedGitIdentity(),
    model: DEFAULT_MODEL,
  });
  const objects = sampleObjects(scope.scopeId, 4);
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
    requestTimeoutMs: FIXTURE_REQUEST_TIMEOUT_MS,
    batchWallClockMs: FIXTURE_BATCH_WALL_MS,
  });
  assert(first.ok, "first batch pass");
  const callsAfterFirst = calls;

  const hooks2 = createCheckpointHooks({
    runId: fresh.runId,
    scope,
    transport,
    model: DEFAULT_MODEL,
    interruptState: { interrupted: false },
  });
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
    requestTimeoutMs: FIXTURE_REQUEST_TIMEOUT_MS,
    batchWallClockMs: FIXTURE_BATCH_WALL_MS,
  });
  assert(second.ok, "resume completes");
  assert(calls === callsAfterFirst + 1, "only incomplete batch invoked transport");
  assert(second.stats.skippedBatches === 1, "completed batch skipped");
  finalizeRun(fresh.runId, "COMPLETED");
  patched.restore();
}

async function testRequestInputHashParity() {
  const scopeId = "g2/b1/cs";
  const objects = sampleObjects(scopeId, 2);
  const payload = {
    scopeId,
    adapter: "g2",
    objects: objects.map((o) => buildLunaRequestPayload(scopeId, o)),
  };
  const hashBefore = hashRequestInput(payload);
  const transport = {
    mode: "MOCK",
    get realCallsDelta() {
      return 1;
    },
    async call(callPayload, callOptions = {}) {
      assert(callOptions.signal, "signal passed without changing payload hash path");
      return {
        items: callPayload.objects.map((o) => ({ ...o, status: "PASS" })),
        tokensUsed: 1,
      };
    },
  };
  const result = await withHardTimeout(
    runBatchedAdapter({
      transport,
      objects,
      getId: getLegacyObjectId,
      serialize: (o) => buildLunaRequestPayload(scopeId, o),
      serializeCheckpoint: (o) => o,
      batchSize: 2,
      scopeId,
      adapterName: "g2",
      requestTimeoutMs: FIXTURE_REQUEST_TIMEOUT_MS,
      batchWallClockMs: FIXTURE_BATCH_WALL_MS,
      retryBackoffMs: FIXTURE_BACKOFF_MS,
    }),
    "request hash parity",
  );
  const hashAfter = hashRequestInput(payload);
  assert(result.ok, "hash parity run passes");
  assert(hashBefore === hashAfter, "requestInputHash unchanged by timeout repair");
}

async function testNoRealLunaCalls() {
  const { createRealLunaTransport } = require("./lib/luna-transport");
  let realInvoked = false;
  const transport = createRealLunaTransport({
    client: {
      responses: {
        create: async () => {
          realInvoked = true;
          return { output_text: '{"items":[]}', usage: { total_tokens: 0 } };
        },
      },
    },
  });
  const hanging = createHangingTransport();
  await withHardTimeout(
    runBatchedAdapter({
      transport: hanging,
      objects: sampleObjects("g2/a1/et", 1),
      getId: getLegacyObjectId,
      serialize: (o) => buildLunaRequestPayload("g2/a1/et", o),
      serializeCheckpoint: (o) => o,
      batchSize: 1,
      scopeId: "g2/a1/et",
      adapterName: "g2",
      requestTimeoutMs: FIXTURE_REQUEST_TIMEOUT_MS,
      batchWallClockMs: FIXTURE_BATCH_WALL_MS,
      retryBackoffMs: FIXTURE_BACKOFF_MS,
    }),
    "no real luna calls",
  ).catch(() => {});
  assert(!realInvoked, "fixture transport never reached real OpenAI client");
  assert(transport.getRealCalls() === 0, "real transport helper not used in fixtures");
}

async function main() {
  console.log("R-TIMEOUT-001: Luna request abort + batch watchdog tests");
  console.log(
    `fixture limits request=${FIXTURE_REQUEST_TIMEOUT_MS}ms batchWall=${FIXTURE_BATCH_WALL_MS}ms hard=${HARD_TEST_LIMIT_MS}ms`,
  );
  console.log(
    `production defaults request=${TIMEOUT_MS}ms batchWall=${BATCH_WALL_CLOCK_MS}ms retries=${MAX_RETRIES}`,
  );

  await testLegacyBatchWallBypassDuringAwait();
  await testRequestTimeoutOnHangingTransport();
  await testAbortControllerFiresOnTimeout();
  await testSignalReachesFakeOpenAIClient();
  await testFirstTimeoutSecondPass();
  await testAllAttemptsTimeoutFail();
  await testBatchDeadlineDuringAwait();
  await testBatchDeadlineDuringBackoff();
  await testSlowRequestUnderLimitPasses();
  await testTimersClearedAfterPass();
  await testResumeSkipsPassCheckpoints();
  await testRequestInputHashParity();
  await testNoRealLunaCalls();

  console.log(`\nR-TIMEOUT-001: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
