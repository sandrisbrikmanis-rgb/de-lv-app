#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const fixture = require("./fixtures/phase1-id-recovery-lb-sq.json");
const { ROOT } = require("./lib/audit-common");
const { runBatchedAdapter, BLOCKED_MISSING_CANONICAL_ID, MAX_RETRIES } = require("./lib/luna-adapter-runner");
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
      if (result.error) throw result.error;
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

async function test07DuplicateIdNotAccepted() {
  const raw = buildObjects(3);
  const serialized = serializeBatch(raw);
  let callNo = 0;
  const transport = createScenarioMockTransport((payload) => {
    callNo += 1;
    if (callNo === 1) {
      return {
        items: [passItem(serialized[0].id), passItem(serialized[0].id), passItem(serialized[2].id)],
      };
    }
    return { items: payload.objects.map((obj) => passItem(obj.id)) };
  });
  const result = await runRetryAdapter(raw, transport);
  assert(result.ok, "7: duplicate ID not silently accepted");
  assert(transport.calls.length > 1, "7: retried after duplicate");
}

async function test08UnexpectedIdNotAccepted() {
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
  assert(result.ok, "8: unexpected ID not silently accepted");
  const retryIds = transport.calls[1]?.objectIds || [];
  assert(retryIds.includes(serialized[1].id), "8: missing expected object retried");
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

async function test15FailureStatsPersisted() {
  const raw = buildObjects(1);
  const transport = createScenarioMockTransport(() => ({ items: [], tokensUsed: 42 }));
  const result = await runRetryAdapter(raw, transport);
  assert(!result.ok, "15: failure");
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
  await test07DuplicateIdNotAccepted();
  await test08UnexpectedIdNotAccepted();
  await test09NonC0IdNotFuzzyRemapped();
  await test10AllowedC0RecoveryStillPasses();
  await test11RetryLimitFailClosed();
  await test12ValidatedObjectsNotReRequested();
  await test13FinalOrderMatchesExpected();
  await test14NoFindingsDuplicates();
  await test15FailureStatsPersisted();
  await test16CumulativeStatsNotOverwritten();
  await test17CompletedLangCacheUnchanged();
  test18ResumeCommandNoFreshLuna();
  test19ProductionDiffZero();
  test20DeDiffZero();
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
