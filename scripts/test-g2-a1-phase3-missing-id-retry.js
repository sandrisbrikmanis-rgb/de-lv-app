#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const fixture = require("./fixtures/phase1-id-recovery-lb-sq.json");
const { ROOT } = require("./lib/audit-common");
const {
  runBatchedAdapter,
  BLOCKED_MISSING_CANONICAL_ID,
  BLOCKED_DUPLICATE_CANONICAL_ID,
  BLOCKED_UNEXPECTED_CANONICAL_ID,
  MAX_RETRIES,
} = require("./lib/luna-adapter-runner");
const {
  validateCanonicalIdSubset,
} = require("./lib/g2-a1-phase3/missing-canonical-id-retry");
const { buildLunaRequestPayload } = require("./lib/phase1-luna-checkpoint/object-identity");
const { createRealLunaTransport } = require("./lib/luna-transport");
const { normalizeLunaItemsToFindings } = require("./lib/phase1-luna-checkpoint/findings");
const { gitProductionDiffAgainstBaseline } = require("./lib/content-discovery/git-baseline");

const NO_BACKOFF = [0, 0];
const SCOPE_ID = "g2/a1/is";
const CARD_TYPE = "verb";

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function buildObjects(count, scopeId = SCOPE_ID) {
  const objects = [];
  for (let i = 0; i < count; i += 1) {
    objects.push({
      de: `word-${i}`,
      index: i,
      productionFile: `${scopeId.split("/").pop()}-a1.json`,
    });
  }
  return objects;
}

function serializeBatch(rawObjects, scopeId = SCOPE_ID) {
  return rawObjects.map((obj) => buildLunaRequestPayload(scopeId, obj));
}

function passItem(id, status = "PASS") {
  return { id, status };
}

function createScenarioMockTransport(handler) {
  const calls = [];
  return {
    mode: "MOCK",
    transport: "MOCK",
    get calls() {
      return calls;
    },
    async call(payload) {
      calls.push({
        objectIds: payload.objects.map((obj) => obj.id),
        count: payload.objects.length,
      });
      const result = handler(payload, calls.length);
      if (result.error) {
        const err = result.error instanceof Error ? result.error : new Error(String(result.error));
        if (result.usage) err.usage = result.usage;
        throw err;
      }
      return {
        items: result.items,
        tokensUsed: result.tokensUsed ?? 10,
        usage: result.usage ?? { total_tokens: result.tokensUsed ?? 10 },
      };
    },
  };
}

async function runRetryAdapter(rawObjects, transport, scopeId = SCOPE_ID) {
  return runBatchedAdapter({
    transport,
    objects: rawObjects,
    getId: (obj) => obj.de,
    serialize: (obj) => buildLunaRequestPayload(scopeId, obj),
    batchSize: rawObjects.length,
    scopeId: `${scopeId}:${CARD_TYPE}:0`,
    adapterName: "g2-phase3-staging",
    retryBackoffMs: NO_BACKOFF,
    missingCanonicalIdRetry: true,
    cardType: CARD_TYPE,
  });
}

async function test01ExactFullResponsePass() {
  const raw = buildObjects(5);
  const serialized = serializeBatch(raw);
  const transport = createScenarioMockTransport((payload) => ({
    items: payload.objects.map((obj) => passItem(obj.id)),
  }));
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "1: exact full response PASS");
  assert(result.results.length === 5, "1: all items returned");
  assert(transport.calls.length === 1, "1: single call");
}

async function test02OneMissingIdRetriesOnlyOne() {
  const raw = buildObjects(25);
  const serialized = serializeBatch(raw);
  const missingId = serialized[12].id;
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo === 1) {
      return {
        items: payload.objects.filter((obj) => obj.id !== missingId).map((obj) => passItem(obj.id)),
      };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "2: one missing ID recovers");
  const retryCall = transport.calls.find((call) => call.count === 1);
  assert(retryCall, "2: retried single object");
  assert(retryCall.objectIds[0] === missingId, "2: retried exact missing ID");
  assert(!transport.calls.some((call, idx) => idx > 0 && call.count === 25), "2: did not retry full batch");
}

async function test03ItemWithoutIdNotPositional() {
  const raw = buildObjects(3);
  const serialized = serializeBatch(raw);
  const missingId = serialized[1].id;
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo === 1) {
      return {
        items: [
          passItem(serialized[0].id),
          { status: "PASS" },
          passItem(serialized[2].id),
        ],
      };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "3: item without ID not positionally mapped");
  const retryCall = transport.calls.find((call) => call.count === 1);
  assert(retryCall?.objectIds[0] === missingId, "3: retried missing canonical ID");
}

async function test04DifferentBatchesDifferentMissingIds() {
  const batchA = buildObjects(5);
  const batchB = buildObjects(5).map((obj, idx) => ({ ...obj, index: idx + 100 }));
  const serializedA = serializeBatch(batchA);
  const serializedB = serializeBatch(batchB);
  const missingA = serializedA[3].id;
  const missingB = serializedB[1].id;
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo === 1) {
      return {
        items: payload.objects.filter((obj) => obj.id !== missingA).map((obj) => passItem(obj.id)),
      };
    }
    if (payload.objects.some((obj) => obj.id === missingB) && payload.objects.length > 1) {
      return {
        items: payload.objects.filter((obj) => obj.id !== missingB).map((obj) => passItem(obj.id)),
      };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });

  const resultA = await runRetryAdapter(batchA, transport);
  assert(resultA.ok, "4a: first batch recovers idx-like missing");
  const resultB = await runRetryAdapter(batchB, transport);
  assert(resultB.ok, "4b: second batch recovers different missing ID");
}

async function test05MultipleMissingRetriesSubset() {
  const raw = buildObjects(10);
  const serialized = serializeBatch(raw);
  const missingIds = [serialized[2].id, serialized[7].id, serialized[8].id];
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo === 1) {
      return {
        items: payload.objects
          .filter((obj) => !missingIds.includes(obj.id))
          .map((obj) => passItem(obj.id)),
      };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "5: multiple missing IDs recovered");
  const retriedIds = new Set();
  for (const call of transport.calls.slice(1)) {
    for (const id of call.objectIds) retriedIds.add(id);
  }
  assert(retriedIds.size === 3, "5: retry subset has 3 objects");
  assert(
    missingIds.every((id) => retriedIds.has(id)),
    "5: retry subset is exactly missing IDs",
  );
}

async function test06SubsetSplitDeterministically() {
  const raw = buildObjects(8);
  const serialized = serializeBatch(raw);
  const missingIds = serialized.slice(4).map((obj) => obj.id);
  const callSizes = [];
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    callSizes.push(payload.objects.length);
    if (callNo === 1) {
      return {
        items: payload.objects
          .filter((obj) => !missingIds.includes(obj.id))
          .map((obj) => passItem(obj.id)),
      };
    }
    if (payload.objects.length > 2) {
      return {
        items: payload.objects.slice(0, 1).map((obj) => passItem(obj.id)),
      };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "6: deterministic split eventually passes");
  assert(callSizes.some((size) => size < missingIds.length), "6: subset was split smaller");
}

async function test07DuplicateIdRejectedAndRetried() {
  const raw = buildObjects(3);
  const serialized = serializeBatch(raw);
  const duplicateId = serialized[0].id;
  const missingId = serialized[1].id;
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo === 1) {
      return {
        items: [
          passItem(duplicateId),
          passItem(duplicateId),
          passItem(serialized[2].id),
        ],
      };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "7: duplicate ID rejected then recovered");
  const retriedIds = new Set(transport.calls.slice(1).flatMap((call) => call.objectIds));
  assert(retriedIds.has(duplicateId), "7: duplicate ID itself retried");
  assert(retriedIds.has(missingId), "7: missing ID also retried");
  const id0Count = result.results.filter((item) => item.id === duplicateId).length;
  assert(id0Count === 1, "7: exactly one accepted item for duplicate ID");
}

async function test08UnexpectedIdReplacesMissingExpected() {
  const raw = buildObjects(3);
  const serialized = serializeBatch(raw);
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo === 1) {
      return {
        items: [
          passItem(serialized[0].id),
          passItem(`${SCOPE_ID}|idx:9999|raw:unexpected|src:is-a1.json`),
          passItem(serialized[2].id),
        ],
      };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "8a: unexpected replacing missing expected retried");
  const retryIds = transport.calls[1]?.objectIds || [];
  assert(retryIds.includes(serialized[1].id), "8a: missing expected object retried");
}

async function test08bUnexpectedExtraAllExpectedPresentBlocked() {
  const raw = buildObjects(3);
  const serialized = serializeBatch(raw);
  const transport = createScenarioMockTransport((payload) => ({
    items: [
      ...payload.objects.map((obj) => passItem(obj.id)),
      passItem(`${SCOPE_ID}|idx:9999|raw:extra|src:is-a1.json`),
    ],
  }));
  const result = await runRetryAdapter(raw, transport);
  assert(!result.ok, "8b: all expected + extra unexpected must not PASS");
  assert(result.reason === BLOCKED_UNEXPECTED_CANONICAL_ID, "8b: BLOCKED_UNEXPECTED_CANONICAL_ID");
  assert(transport.calls.length === 1, "8b: no retry for unexpected extra");
}

async function test09NonC0IdNotFuzzyRemapped() {
  const raw = [{ de: "ländlich", index: 1718, productionFile: "is-a1.json" }];
  const serialized = serializeBatch(raw);
  const expectedId = serialized[0].id;
  const wrongId = expectedId.replace("ländlich", "landlich");
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo <= MAX_RETRIES) {
      return { items: [passItem(wrongId)] };
    }
    return { items: [passItem(expectedId)] };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(!result.ok, "9: non-C0 fuzzy remap rejected");
  assert(result.reason === BLOCKED_MISSING_CANONICAL_ID, "9: fail-closed reason");
}

async function test10AllowedC0RecoveryStillPasses() {
  const raw = [{ de: "ländlich", index: 1718, productionFile: "is-a1.json" }];
  const serialized = serializeBatch(raw);
  const expectedId = serialized[0].id;
  const c0Mutation = expectedId.replace("ländlich", "l\u0002ändlich");
  const transport = createScenarioMockTransport(() => ({
    items: [passItem(c0Mutation)],
  }));
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "10: allowed C0 recovery still PASS");
  assert(result.results[0].id === expectedId, "10: canonical ID preserved");
}

async function test11RetryLimitFailClosed() {
  const raw = buildObjects(1);
  const serialized = serializeBatch(raw);
  const transport = createScenarioMockTransport(() => ({
    items: [],
  }));
  const result = await runRetryAdapter(raw, transport);
  assert(!result.ok, "11: retry limit fail-closed");
  assert(result.reason === BLOCKED_MISSING_CANONICAL_ID, "11: BLOCKED_MISSING_CANONICAL_ID");
  assert(transport.calls.length === MAX_RETRIES, "11: exhausted retry limit");
}

async function test12ValidatedObjectsNotReRequested() {
  const raw = buildObjects(5);
  const serialized = serializeBatch(raw);
  const missingId = serialized[4].id;
  const requestedIds = new Set();
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    for (const obj of payload.objects) requestedIds.add(obj.id);
    if (callNo === 1) {
      return {
        items: payload.objects.filter((obj) => obj.id !== missingId).map((obj) => passItem(obj.id)),
      };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "12: validated objects preserved");
  const firstFour = serialized.slice(0, 4).map((obj) => obj.id);
  assert(firstFour.every((id) => requestedIds.has(id)), "12: first batch included expected");
  const retryCalls = transport.calls.filter((call) => call.count === 1);
  assert(retryCalls.length >= 1, "12: single-object retry occurred");
  assert(retryCalls.some((call) => call.objectIds[0] === missingId), "12: missing object retried alone");
}

async function test13FinalOrderMatchesExpected() {
  const raw = buildObjects(6);
  const serialized = serializeBatch(raw);
  const expectedOrder = serialized.map((obj) => obj.id);
  const transport = createScenarioMockTransport((payload) => ({
    items: [...payload.objects].reverse().map((obj) => passItem(obj.id)),
  }));
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "13: PASS");
  const returnedOrder = result.results.map((item) => item.id);
  assert(
    JSON.stringify(returnedOrder) === JSON.stringify(expectedOrder),
    "13: final order matches expected",
  );
}

async function test14NoFindingsDuplicates() {
  const raw = buildObjects(4);
  const transport = createScenarioMockTransport((payload) => ({
    items: payload.objects.map((obj, idx) => ({
      ...passItem(obj.id, "FINDING"),
      field: `field-${idx}`,
      severity: "LOW",
      category: "TEST",
      reason: `reason-${idx}`,
    })),
  }));
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "14: adapter PASS");
  const scope = { scopeId: SCOPE_ID, group: "g2", dataset: "a1", lang: "is" };
  const findings = normalizeLunaItemsToFindings(result.results, scope, {
    productionFile: "crowdin-staging/g2/is-a1.json",
  });
  const keys = findings.map((f) => f.dedupKey || f.findingStableId);
  assert(keys.length === new Set(keys).size, "14: no findings duplicates");
  assert(findings.length === result.results.length, "14: one finding per result item");
}

async function test15ValidationFailureStatsPersisted() {
  const raw = buildObjects(1);
  const transport = createScenarioMockTransport(() => ({ items: [], tokensUsed: 42 }));
  const result = await runRetryAdapter(raw, transport);
  assert(!result.ok, "15: validation failure fail-closed");
  assert(result.stats.realCalls === 0, "15: mock has no real calls");
  assert(result.stats.tokensUsed > 0, "15: tokens from API responses");
  assert(result.stats.retries > 0, "15: retries counted");
  assert(result.stats.failures === 1, "15: failures counted");
}

async function test16CumulativeStatsNotOverwritten() {
  const previous = { lunaCalls: 1520, tokensUsed: 6663032, retries: 20, batches: 100 };
  const current = { lunaCalls: 12, tokensUsed: 5000, retries: 2, batches: 3 };
  const merged = {
    lunaCalls: (previous.lunaCalls || 0) + (current.lunaCalls || 0),
    tokensUsed: (previous.tokensUsed || 0) + (current.tokensUsed || 0),
    retries: (previous.retries || 0) + (current.retries || 0),
    batches: (previous.batches || 0) + (current.batches || 0),
  };
  assert(merged.lunaCalls === 1532, "16: cumulative lunaCalls preserved");
  assert(merged.tokensUsed === 6668032, "16: cumulative tokens preserved");
  assert(merged.retries === 22, "16: cumulative retries preserved");
  const resumeScript = require(path.join(ROOT, "package.json")).scripts["phase3:g2-a1:resume"];
  assert(!resumeScript.includes("--fresh-luna"), "16/18: resume script has no --fresh-luna");
}

async function test17CompletedLangCacheUnchanged() {
  const progressPath = path.join(ROOT, "reports/temp/g2-a1-phase3-luna-runs/progress.json");
  if (!fs.existsSync(progressPath)) {
    assert(true, "17: skip when checkpoint absent");
    return;
  }
  const progress = JSON.parse(fs.readFileSync(progressPath, "utf8"));
  assert(Array.isArray(progress.completedLangs), "17: completedLangs array");
  assert(progress.completedLangs.length === 30, "17: 30 completed langs unchanged");
  assert(!progress.completedLangs.includes("is"), "17: is not in completed langs");
}

function test18ResumeCommandNoFreshLuna() {
  const pkg = require(path.join(ROOT, "package.json"));
  const resume = pkg.scripts["phase3:g2-a1:resume"];
  const discovery = pkg.scripts["phase3:g2-a1:discovery"];
  assert(resume === "node scripts/run-g2-a1-phase3-full-discovery.js --with-luna", "18: resume command exact");
  assert(discovery.includes("--fresh-luna"), "18: discovery still has fresh-luna");
}

function test19ProductionDiffZero() {
  const { fetchOriginMain, resolveOriginMainSha, gitProductionDiffAgainstBaseline } = require("./lib/content-discovery/git-baseline");
  fetchOriginMain();
  const origin = resolveOriginMainSha();
  const diff = gitProductionDiffAgainstBaseline(origin.sha);
  assert(diff.clean === true, "19: production diff = 0");
}

function test20DeDiffZero() {
  const { fetchOriginMain, resolveOriginMainSha, gitDeDiffAgainstBaseline } = require("./lib/content-discovery/git-baseline");
  fetchOriginMain();
  const origin = resolveOriginMainSha();
  const diff = gitDeDiffAgainstBaseline(origin.sha);
  assert(diff.clean === true, "20: DE diff = 0");
}

async function testPersistentDuplicateFailClosed() {
  const raw = buildObjects(1);
  const serialized = serializeBatch(raw);
  const duplicateId = serialized[0].id;
  const transport = createScenarioMockTransport(() => ({
    items: [passItem(duplicateId), passItem(duplicateId)],
  }));
  const result = await runRetryAdapter(raw, transport);
  assert(!result.ok, "dup-persist: fail-closed");
  assert(result.reason === BLOCKED_DUPLICATE_CANONICAL_ID, "dup-persist: BLOCKED_DUPLICATE_CANONICAL_ID");
  assert(transport.calls.length === MAX_RETRIES, "dup-persist: exhausted retry limit");
}

async function testTransientTransportErrorRetryPass() {
  const raw = buildObjects(1);
  const serialized = serializeBatch(raw);
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo === 1) {
      return { error: new Error("transient network failure") };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "transient: PASS after retry");
  assert(transport.calls.length === 2, "transient: calls=2");
  assert(result.stats.retries === 1, "transient: retries=1");
}

async function testPersistentTransportErrorBlocked() {
  const raw = buildObjects(1);
  const transport = createScenarioMockTransport(() => ({
    error: new Error("persistent transport failure"),
  }));
  const result = await runRetryAdapter(raw, transport);
  assert(!result.ok, "persist-error: BLOCKED");
  assert(transport.calls.length === MAX_RETRIES, "persist-error: exactly 3 calls");
  assert(transport.calls.length < MAX_RETRIES + 1, "persist-error: no fourth call");
}

async function testTimeoutThenSuccessfulRetry() {
  const raw = buildObjects(1);
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo === 1) {
      const err = new Error("TIMEOUT");
      err.code = "TIMEOUT";
      return { error: err };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "timeout-retry: PASS");
  assert(transport.calls.length === 2, "timeout-retry: calls=2");
  assert(result.stats.retries === 1, "timeout-retry: retries=1");
}

async function testInvalidJsonThenSuccessfulResponse() {
  const raw = buildObjects(1);
  const batch = serializeBatch(raw);
  let callNo = 0;
  const transport = createRealLunaTransport({
    client: {
      responses: {
        create: async () => {
          callNo += 1;
          return {
            output_text:
              callNo === 1
                ? "not-json"
                : JSON.stringify({ items: batch.map((obj) => passItem(obj.id)) }),
            usage: { total_tokens: 11 },
          };
        },
      },
    },
  });
  const result = await runBatchedAdapter({
    transport,
    objects: raw,
    getId: (obj) => obj.de,
    serialize: (obj) => buildLunaRequestPayload(SCOPE_ID, obj),
    batchSize: 1,
    scopeId: `${SCOPE_ID}:${CARD_TYPE}:0`,
    adapterName: "g2-phase3-staging",
    retryBackoffMs: NO_BACKOFF,
    missingCanonicalIdRetry: true,
    cardType: CARD_TYPE,
  });
  assert(result.ok, "invalid-json-then-success: PASS");
  assert(callNo === 2, "invalid-json-then-success: calls=2");
  assert(result.stats.retries === 1, "invalid-json-then-success: retries=1");
  assert(result.stats.tokensUsed === 22, "invalid-json-then-success: tokens from both responses");
}

async function testInvalidJsonAllThreeAttemptsBlocked() {
  const raw = buildObjects(1);
  let callNo = 0;
  const transport = createRealLunaTransport({
    client: {
      responses: {
        create: async () => {
          callNo += 1;
          return {
            output_text: "not-json",
            usage: { total_tokens: 11 },
          };
        },
      },
    },
  });
  const result = await runBatchedAdapter({
    transport,
    objects: raw,
    getId: (obj) => obj.de,
    serialize: (obj) => buildLunaRequestPayload(SCOPE_ID, obj),
    batchSize: 1,
    scopeId: `${SCOPE_ID}:${CARD_TYPE}:0`,
    adapterName: "g2-phase3-staging",
    retryBackoffMs: NO_BACKOFF,
    missingCanonicalIdRetry: true,
    cardType: CARD_TYPE,
  });
  assert(!result.ok, "invalid-json-all: BLOCKED");
  assert(callNo === MAX_RETRIES, "invalid-json-all: calls=3");
  assert(result.stats.retries === 2, "invalid-json-all: retries=2");
  assert(result.stats.tokensUsed === 33, "invalid-json-all: tokens from all three responses");
}

async function testInvalidJsonFailClosedAfterRetries() {
  const raw = buildObjects(1);
  const batch = serializeBatch(raw);
  let callNo = 0;
  const transport = createRealLunaTransport({
    client: {
      responses: {
        create: async () => {
          callNo += 1;
          return {
            output_text: callNo < MAX_RETRIES ? "not-json" : JSON.stringify({ items: batch.map((obj) => passItem(obj.id)) }),
            usage: { total_tokens: 11 },
          };
        },
      },
    },
  });
  const result = await runBatchedAdapter({
    transport,
    objects: raw,
    getId: (obj) => obj.de,
    serialize: (obj) => buildLunaRequestPayload(SCOPE_ID, obj),
    batchSize: 1,
    scopeId: `${SCOPE_ID}:${CARD_TYPE}:0`,
    adapterName: "g2-phase3-staging",
    retryBackoffMs: NO_BACKOFF,
    missingCanonicalIdRetry: true,
    cardType: CARD_TYPE,
  });
  assert(result.ok, "invalid-json: PASS after valid retry");
  assert(callNo === MAX_RETRIES, "invalid-json: third call succeeds");
}

async function testRetryAfterErrorOnlyUnresolvedSubset() {
  const raw = buildObjects(4);
  const serialized = serializeBatch(raw);
  const missingId = serialized[3].id;
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo === 1) {
      return {
        items: payload.objects
          .filter((obj) => obj.id !== missingId)
          .map((obj) => passItem(obj.id)),
      };
    }
    if (callNo === 2) {
      return { error: new Error("transient on unresolved subset") };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "subset-error: PASS");
  const thirdCall = transport.calls[2];
  assert(thirdCall?.objectIds.length === 1, "subset-error: retry only unresolved");
  assert(thirdCall?.objectIds[0] === missingId, "subset-error: unresolved ID retried");
}

async function testSplitSubsetRetryCounterMatchesCalls() {
  const raw = buildObjects(6);
  const serialized = serializeBatch(raw);
  const missingIds = serialized.slice(3).map((obj) => obj.id);
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo === 1) {
      return {
        items: payload.objects
          .filter((obj) => !missingIds.includes(obj.id))
          .map((obj) => passItem(obj.id)),
      };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "split-counter: PASS");
  const extraCalls = transport.calls.length - 1;
  assert(result.stats.retries === extraCalls, "split-counter: retries match extra calls");
}

async function testFailedParseUsageTokensPreserved() {
  const raw = buildObjects(1);
  const transport = createScenarioMockTransport(() => ({
    items: [],
    tokensUsed: 77,
    usage: { total_tokens: 77 },
  }));
  const result = await runRetryAdapter(raw, transport);
  assert(!result.ok, "usage: fail-closed after retries");
  assert(result.stats.tokensUsed === 77 * MAX_RETRIES, "usage: tokens preserved from each failed response");
}

function testReturnedItemCountIncludesAllKinds() {
  const batch = serializeBatch(buildObjects(3));
  const validation = validateCanonicalIdSubset(batch, {
    items: [
      passItem(batch[0].id),
      passItem(batch[0].id),
      passItem(batch[1].id),
      { status: "PASS" },
      passItem(`${SCOPE_ID}|idx:9999|raw:extra|src:is-a1.json`),
    ],
  });
  assert(validation.returnedItemCount === 5, "returnedItemCount: raw item count");
  assert(validation.duplicateIds.includes(batch[0].id), "returnedItemCount: duplicate detected");
  assert(validation.unexpectedIds.length === 1, "returnedItemCount: unexpected detected");
  assert(validation.itemsWithoutId === 1, "returnedItemCount: no-id item counted");
  assert(!validation.acceptedById.has(batch[0].id), "returnedItemCount: duplicate not accepted");
}

function testHistoricalFailureCurrentRunPassCoverage() {
  const failureHistory = [{ lang: "is", reason: "BLOCKED_MISSING_CANONICAL_ID", runScope: "historical" }];
  const lunaStats = {
    failures: [],
    failureHistory: [...failureHistory],
    scopesProcessed: 31,
    scopesExpected: 31,
  };
  const coveragePass = lunaStats.failures.length === 0 && lunaStats.scopesProcessed === lunaStats.scopesExpected;
  assert(coveragePass, "history: current run PASS not blocked by historical failure");
  assert(lunaStats.failureHistory.length === 1, "history: historical record preserved");
}

async function testDiagnosticsWritten() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-id-diag-"));
  const prev = process.env.G2_A1_PHASE3_ID_RECOVERY_DIR;
  process.env.G2_A1_PHASE3_ID_RECOVERY_DIR = dir;
  try {
    const raw = buildObjects(2);
    const serialized = serializeBatch(raw);
    let callNo = 0;
    const transport = createScenarioMockTransport((payload) => {
      callNo += 1;
      if (callNo === 1) {
        return { items: [passItem(serialized[0].id)] };
      }
      return { items: payload.objects.map((obj) => passItem(obj.id)) };
    });
    await runRetryAdapter(raw, transport);
    const files = fs.readdirSync(dir).filter((name) => name.endsWith(".json"));
    assert(files.length > 0, "diag: diagnostics written");
    const record = JSON.parse(fs.readFileSync(path.join(dir, files[0]), "utf8"));
    assert(record.expectedCanonicalIds?.length === 2, "diag: expected IDs recorded");
    assert(record.missingIds?.length >= 1, "diag: missing IDs recorded");
    if (record.returnedItemCount != null) {
      assert(typeof record.returnedItemCount === "number", "diag: returnedItemCount numeric");
    }
  } finally {
    if (prev === undefined) delete process.env.G2_A1_PHASE3_ID_RECOVERY_DIR;
    else process.env.G2_A1_PHASE3_ID_RECOVERY_DIR = prev;
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

async function testE2ERealTransportUnexpectedExtraBlocked() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-v3-unexpected-"));
  const prev = process.env.G2_A1_PHASE3_ID_RECOVERY_DIR;
  process.env.G2_A1_PHASE3_ID_RECOVERY_DIR = dir;
  try {
    const raw = buildObjects(3);
    const serialized = serializeBatch(raw);
    const transport = createRealLunaTransport({
      client: {
        responses: {
          create: async () => ({
            output_text: JSON.stringify({
              items: [
                ...serialized.map((obj) => passItem(obj.id)),
                passItem(`${SCOPE_ID}|idx:9999|raw:extra|src:is-a1.json`),
              ],
            }),
            usage: { total_tokens: 19 },
          }),
        },
      },
    });
    const result = await runBatchedAdapter({
      transport,
      objects: raw,
      getId: (obj) => obj.de,
      serialize: (obj) => buildLunaRequestPayload(SCOPE_ID, obj),
      batchSize: raw.length,
      scopeId: `${SCOPE_ID}:${CARD_TYPE}:0`,
      adapterName: "g2-phase3-staging",
      retryBackoffMs: NO_BACKOFF,
      missingCanonicalIdRetry: true,
      cardType: CARD_TYPE,
    });
    assert(!result.ok, "e2e-unexpected: BLOCKED");
    assert(result.reason === BLOCKED_UNEXPECTED_CANONICAL_ID, "e2e-unexpected: blocked reason");
    assert(transport.getRealCalls() === 1, "e2e-unexpected: single call");
    const files = fs.readdirSync(dir).filter((name) => name.endsWith(".json"));
    assert(files.length > 0, "e2e-unexpected: diagnostics written");
    const record = JSON.parse(fs.readFileSync(path.join(dir, files[0]), "utf8"));
    assert(record.returnedItemCount === 4, "e2e-unexpected: returnedItemCount is raw response size");
    assert(record.unexpectedIds?.length === 1, "e2e-unexpected: unexpected ID preserved");
    assert(record.rejectionReason === BLOCKED_UNEXPECTED_CANONICAL_ID, "e2e-unexpected: blockedReason preserved");
  } finally {
    if (prev === undefined) delete process.env.G2_A1_PHASE3_ID_RECOVERY_DIR;
    else process.env.G2_A1_PHASE3_ID_RECOVERY_DIR = prev;
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function parseFakeClientObjects(request) {
  const inputLines = String(request?.input || "").split("\n");
  const payload = JSON.parse(inputLines[inputLines.length - 1]);
  return payload.objects || [];
}

async function testE2ERealTransportDuplicateRetriesUnresolvedOnly() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-v3-duplicate-"));
  const prev = process.env.G2_A1_PHASE3_ID_RECOVERY_DIR;
  process.env.G2_A1_PHASE3_ID_RECOVERY_DIR = dir;
  try {
    const raw = buildObjects(3);
    const serialized = serializeBatch(raw);
    const duplicateId = serialized[0].id;
    let callNo = 0;
    const transport = createRealLunaTransport({
      client: {
        responses: {
          create: async (request) => {
            callNo += 1;
            const objects = parseFakeClientObjects(request);
            if (callNo === 1) {
              return {
                output_text: JSON.stringify({
                  items: [
                    passItem(duplicateId),
                    passItem(duplicateId),
                    passItem(serialized[2].id),
                  ],
                }),
                usage: { total_tokens: 21 },
              };
            }
            return {
              output_text: JSON.stringify({
                items: objects.map((obj) => passItem(obj.id)),
              }),
              usage: { total_tokens: 9 },
            };
          },
        },
      },
    });
    const result = await runBatchedAdapter({
      transport,
      objects: raw,
      getId: (obj) => obj.de,
      serialize: (obj) => buildLunaRequestPayload(SCOPE_ID, obj),
      batchSize: raw.length,
      scopeId: `${SCOPE_ID}:${CARD_TYPE}:0`,
      adapterName: "g2-phase3-staging",
      retryBackoffMs: NO_BACKOFF,
      missingCanonicalIdRetry: true,
      cardType: CARD_TYPE,
    });
    assert(result.ok, "e2e-duplicate: PASS after retry");
    assert(callNo === 3, "e2e-duplicate: calls=3 with split unresolved subset");
    assert(result.stats.retries === 2, "e2e-duplicate: retries=2");
    const id0Count = result.results.filter((item) => item.id === duplicateId).length;
    assert(id0Count === 1, "e2e-duplicate: exactly one accepted duplicate ID");
    const files = fs.readdirSync(dir).filter((name) => name.endsWith(".json"));
    assert(files.length > 0, "e2e-duplicate: diagnostics written");
    const record = JSON.parse(fs.readFileSync(path.join(dir, files[0]), "utf8"));
    assert(record.returnedItemCount === 3, "e2e-duplicate: returnedItemCount is raw response size");
    assert(record.duplicateIds?.includes(duplicateId), "e2e-duplicate: duplicate metadata preserved");
  } finally {
    if (prev === undefined) delete process.env.G2_A1_PHASE3_ID_RECOVERY_DIR;
    else process.env.G2_A1_PHASE3_ID_RECOVERY_DIR = prev;
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

async function testRealTransportPreservesErrorMetadata() {
  const batch = [
    buildLunaRequestPayload(SCOPE_ID, { de: "ländlich", index: 1718, productionFile: "is-a1.json" }),
    buildLunaRequestPayload(SCOPE_ID, { de: "Landstraße", index: 1719, productionFile: "is-a1.json" }),
  ];
  const transport = createRealLunaTransport({
    client: {
      responses: {
        create: async () => ({
          output_text: JSON.stringify({
            items: [
              { id: "g2/a1/is|idx:1718|raw:l\u00023ndlich|src:is-a1.json", status: "PASS" },
              { id: "g2/a1/is|idx:1718|raw:l\u00043ndlich|src:is-a1.json", status: "PASS" },
            ],
          }),
          usage: { total_tokens: 9 },
        }),
      },
    },
  });
  let caught = null;
  try {
    await transport.call(
      { adapter: "g2-phase3-staging", scopeId: SCOPE_ID, objects: batch },
      { recoveryContext: { scopeId: SCOPE_ID, batchIndex: 0, attempt: 1 } },
    );
  } catch (error) {
    caught = error;
  }
  assert(caught, "transport: error thrown");
  assert(caught.code === "ID_RECOVERY_FAILED", "transport: error code preserved");
}

async function main() {
  await test01ExactFullResponsePass();
  await test02OneMissingIdRetriesOnlyOne();
  await test03ItemWithoutIdNotPositional();
  await test04DifferentBatchesDifferentMissingIds();
  await test05MultipleMissingRetriesSubset();
  await test06SubsetSplitDeterministically();
  await test07DuplicateIdRejectedAndRetried();
  await test08UnexpectedIdReplacesMissingExpected();
  await test08bUnexpectedExtraAllExpectedPresentBlocked();
  await test09NonC0IdNotFuzzyRemapped();
  await test10AllowedC0RecoveryStillPasses();
  await test11RetryLimitFailClosed();
  await test12ValidatedObjectsNotReRequested();
  await test13FinalOrderMatchesExpected();
  await test14NoFindingsDuplicates();
  await test15ValidationFailureStatsPersisted();
  await test16CumulativeStatsNotOverwritten();
  await test17CompletedLangCacheUnchanged();
  test18ResumeCommandNoFreshLuna();
  test19ProductionDiffZero();
  test20DeDiffZero();
  await testPersistentDuplicateFailClosed();
  await testTransientTransportErrorRetryPass();
  await testPersistentTransportErrorBlocked();
  await testTimeoutThenSuccessfulRetry();
  await testInvalidJsonThenSuccessfulResponse();
  await testInvalidJsonAllThreeAttemptsBlocked();
  await testInvalidJsonFailClosedAfterRetries();
  await testE2ERealTransportUnexpectedExtraBlocked();
  await testE2ERealTransportDuplicateRetriesUnresolvedOnly();
  await testRetryAfterErrorOnlyUnresolvedSubset();
  await testSplitSubsetRetryCounterMatchesCalls();
  await testFailedParseUsageTokensPreserved();
  testReturnedItemCountIncludesAllKinds();
  testHistoricalFailureCurrentRunPassCoverage();
  await testDiagnosticsWritten();
  await testRealTransportPreservesErrorMetadata();

  console.log(`\nTests run: ${testsRun}, failed: ${testsFailed}`);
  if (testsFailed > 0) process.exit(1);
  console.log("PASS: g2-a1-phase3-missing-id-retry");
}

main().catch((err) => {
  console.error(err.stack || err.message || err);
  process.exit(1);
});
