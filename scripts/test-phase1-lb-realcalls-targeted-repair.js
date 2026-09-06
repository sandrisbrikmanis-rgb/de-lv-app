#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const fixture = require("./fixtures/phase1-id-recovery-lb-sq.json");
const { recoverLunaResponseItems } = require("./lib/phase1-luna-id-recovery");
const { runBatchedAdapter } = require("./lib/luna-adapter-runner");
const {
  createMockLunaTransport,
  createRealLunaTransport,
} = require("./lib/luna-transport");
const checkpointConstants = require("./lib/phase1-luna-checkpoint/constants");
const { progressPath } = checkpointConstants;
const { writeJsonAtomic } = require("./lib/phase1-luna-checkpoint/atomic-io");
const { createRunManifest, writeRunManifest } = require("./lib/phase1-luna-checkpoint/manifest");
const { createInitialProgress } = require("./lib/phase1-luna-checkpoint/progress");
const { runLunaScopeWithCheckpoint } = require("./lib/phase1-luna-checkpoint/runner");
const { getDeterministicScopeOrder } = require("./lib/content-discovery/phase1-applicability");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");

const SHA_TEST = "cccccccccccccccccccccccccccccccccccccccc";
const NO_BACKOFF = [0, 0];

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function passItem(id, status = "PASS") {
  return { id, status };
}

function buildItems(ids) {
  return ids.map((id) => passItem(id));
}

function testLbVariantFull25Recovery(mutationId, label) {
  const expectedIds = fixture.expectedIds25;
  const items = buildItems(
    expectedIds.map((id) => (id === fixture.landlichCanonicalId ? mutationId : id)),
  );
  const result = recoverLunaResponseItems(items, expectedIds);
  assert(result.ok, `${label}: full 25-object batch recovery PASS`);
  assert(result.recoveries.length === 1, `${label}: one recovery`);
  assert(result.recoveries[0].canonicalId === fixture.landlichCanonicalId, `${label}: canonical id`);
}

function testLbAllowlistVariants() {
  testLbVariantFull25Recovery(fixture.landlichLbMutationId, "lb U0002");
  testLbVariantFull25Recovery(fixture.landlichLbMutationIdU0014, "lb U0014");
  testLbVariantFull25Recovery(fixture.landlichLbMutationIdU0005, "lb U0005");
}

function testLbUnknownSubstitutionFails() {
  const expectedIds = [fixture.landlichCanonicalId];
  const items = [passItem(fixture.landlichLbUnknownSubstitutionId)];
  const result = recoverLunaResponseItems(items, expectedIds);
  assert(!result.ok, "unknown lb C0 substitution FAIL");
}

function testWrongScopeIndexSourceFail() {
  const expected = [fixture.landlichCanonicalId];
  assert(!recoverLunaResponseItems([passItem("g2/b1/sq|idx:1718|raw:l\u00023ndlich|src:b1.js")], expected).ok, "wrong scope FAIL");
  assert(!recoverLunaResponseItems([passItem("g2/b1/lb|idx:1719|raw:l\u00023ndlich|src:b1.js")], expected).ok, "wrong index FAIL");
  assert(!recoverLunaResponseItems([passItem("g2/b1/lb|idx:1718|raw:l\u00023ndlich|src:b2.js")], expected).ok, "wrong source FAIL");
}

function createRejectingRealTransport() {
  return createRealLunaTransport({
    client: {
      responses: {
        create: async () => {
          throw new Error("TRANSPORT_REJECTED");
        },
      },
    },
  });
}

async function testThreeRejectedRealCalls() {
  const transport = createRejectingRealTransport();
  const result = await runBatchedAdapter({
    transport,
    objects: [{ id: "card-1" }],
    getId: (o) => o.id,
    serialize: (o) => o,
    batchSize: 1,
    scopeId: "g2/b1/lb",
    adapterName: "g2-reuse",
    retryBackoffMs: NO_BACKOFF,
  });
  assert(!result.ok, "three rejected attempts fail");
  assert(result.stats.realCalls === 3, "three rejected real transport attempts realCalls=3");
  assert(result.stats.retries === 2, "three rejected attempts retries=2");
}

async function testNextScopeCountsOnlyOwnCall() {
  const failTransport = createRejectingRealTransport();
  const failResult = await runBatchedAdapter({
    transport: failTransport,
    objects: [{ id: "fail-card" }],
    getId: (o) => o.id,
    serialize: (o) => o,
    batchSize: 1,
    scopeId: "g2/b1/lb",
    adapterName: "g2-reuse",
    retryBackoffMs: NO_BACKOFF,
  });
  assert(failResult.stats.realCalls === 3, "failed scope consumed 3 realCalls");

  const successTransport = createRealLunaTransport({
    client: {
      responses: {
        create: async () => ({
          output_text: JSON.stringify({ items: [{ id: "ok-card", status: "PASS" }] }),
          usage: { total_tokens: 1 },
        }),
      },
    },
  });
  const okResult = await runBatchedAdapter({
    transport: successTransport,
    objects: [{ id: "ok-card" }],
    getId: (o) => o.id,
    serialize: (o) => o,
    batchSize: 1,
    scopeId: "g2/b1/sq",
    adapterName: "g2-reuse",
    retryBackoffMs: NO_BACKOFF,
  });
  assert(okResult.ok, "next scope succeeds");
  assert(okResult.stats.realCalls === 1, "next successful scope realCalls=1 only");
}

async function testSingleSuccessRealCalls() {
  const transport = createRealLunaTransport({
    client: {
      responses: {
        create: async () => ({
          output_text: JSON.stringify({ items: [{ id: "solo", status: "PASS" }] }),
          usage: { total_tokens: 3 },
        }),
      },
    },
  });
  const result = await runBatchedAdapter({
    transport,
    objects: [{ id: "solo" }],
    getId: (o) => o.id,
    serialize: (o) => o,
    batchSize: 1,
    scopeId: "g2/b1/lb",
    adapterName: "g2-reuse",
    retryBackoffMs: NO_BACKOFF,
  });
  assert(result.ok, "single success");
  assert(result.stats.realCalls === 1, "single success realCalls=1");
}

async function testMockTransportRealCallsZero() {
  const transport = createMockLunaTransport();
  const result = await runBatchedAdapter({
    transport,
    objects: [{ id: "mock-1" }, { id: "mock-2" }],
    getId: (o) => o.id,
    serialize: (o) => o,
    batchSize: 2,
    scopeId: "g2/b1/lb",
    adapterName: "g2-reuse",
    retryBackoffMs: NO_BACKOFF,
  });
  assert(result.ok, "mock transport succeeds");
  assert(result.stats.realCalls === 0, "mock transport realCalls=0");
}

async function testTimeoutAttemptCounted() {
  const transport = createRealLunaTransport({
    client: {
      responses: {
        create: () => new Promise(() => {}),
      },
    },
  });
  const result = await runBatchedAdapter({
    transport,
    objects: [{ id: "timeout-card" }],
    getId: (o) => o.id,
    serialize: (o) => o,
    batchSize: 1,
    scopeId: "g2/b1/lb",
    adapterName: "g2-reuse",
    requestTimeoutMs: 20,
    retryBackoffMs: NO_BACKOFF,
  });
  assert(!result.ok, "timeout scope fails");
  assert(result.stats.realCalls === 3, "timeout attempts counted in realCalls");
  assert(result.reason === "TIMEOUT", "timeout reason preserved");
}

function findLbScope() {
  const scopes = getDeterministicScopeOrder();
  const scope = scopes.find((s) => s.scopeId === "g2/b1/lb");
  if (!scope) throw new Error("g2/b1/lb scope not found");
  return scope;
}

async function testSanitizedLastErrorOnFailedScope() {
  const savedKey = process.env.OPENAI_API_KEY;
  process.env.OPENAI_API_KEY = "sk-test-secret-key-12345";

  const savedRunsRoot = checkpointConstants.RUNS_ROOT;
  const tempRunsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-lb-lasterror-"));
  checkpointConstants.RUNS_ROOT = tempRunsRoot;

  const runId = `phase1-test-${Date.now()}`;
  const scope = findLbScope();
  const scopes = [scope];
  const manifest = createRunManifest({
    runId,
    discoveryBaselineSha: SHA_TEST,
    headSha: SHA_TEST,
    originMainSha: SHA_TEST,
    model: DEFAULT_MODEL,
    transport: "REAL",
    cliScope: scope.scopeId,
    scopes,
    status: "IN_PROGRESS",
  });
  writeRunManifest(manifest);
  fs.mkdirSync(path.join(tempRunsRoot, runId), { recursive: true });
  writeJsonAtomic(progressPath(runId), createInitialProgress(runId, scopes));

  const transport = createRealLunaTransport({
    client: {
      responses: {
        create: async () => {
          throw new Error("OpenAI failure sk-test-secret-key-12345");
        },
      },
    },
  });

  const result = await runLunaScopeWithCheckpoint(scope, {
    runId,
    transport,
    lunaObjectLimit: 1,
    batchSize: 1,
    interruptState: { interrupted: false },
  });

  const progress = JSON.parse(fs.readFileSync(progressPath(runId), "utf8"));

  assert(!result.ok, "failed scope result");
  assert(typeof progress.lastError === "string" && progress.lastError.length > 0, "lastError saved");
  assert(!progress.lastError.includes("sk-test-secret-key-12345"), "lastError sanitized");
  assert(progress.realCalls === 3, "failed scope progress realCalls=3");

  checkpointConstants.RUNS_ROOT = savedRunsRoot;
  process.env.OPENAI_API_KEY = savedKey;
  fs.rmSync(tempRunsRoot, { recursive: true, force: true });
}

async function main() {
  testLbAllowlistVariants();
  testLbUnknownSubstitutionFails();
  testWrongScopeIndexSourceFail();
  await testThreeRejectedRealCalls();
  await testNextScopeCountsOnlyOwnCall();
  await testSingleSuccessRealCalls();
  await testMockTransportRealCallsZero();
  await testTimeoutAttemptCounted();
  await testSanitizedLastErrorOnFailedScope();

  console.log(`\nPhase 1 lb/realCalls targeted repair tests: ${testsRun - testsFailed}/${testsRun} passed`);
  if (testsFailed > 0) process.exit(1);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = { main };
