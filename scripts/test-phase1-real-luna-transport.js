#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  createMockLunaTransport,
  createRealLunaTransport,
  createLunaTransport,
} = require("./lib/luna-transport");
const {
  runBatchedAdapter,
  validateBatchResponse,
} = require("./lib/luna-adapter-runner");
const {
  parsePhase1LunaResponseStrict,
  isApiKeyConfigured,
  redactSecrets,
} = require("./lib/luna-phase1-openai");
const { authorizeWithLunaDiscovery } = require("./lib/phase1-luna-authorize");
const { runPhase1Discovery } = require("./run-phase1-discovery");
const { resolvePhase1GitIdentity } = require("./lib/phase1-git-identity");

const SHA_TEST = "cccccccccccccccccccccccccccccccccccccccc";

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

function testMockTransportNoApiKey() {
  const saved = process.env.OPENAI_API_KEY;
  delete process.env.OPENAI_API_KEY;
  const transport = createMockLunaTransport();
  assert(transport.transport === "MOCK", "mock transport mode");
  assert(transport.getRealCalls() === 0, "mock real calls 0");
  process.env.OPENAI_API_KEY = saved;
}

async function testMockCoverageMismatch() {
  const transport = createMockLunaTransport({ default: { partial: true } });
  const result = await runBatchedAdapter({
    transport,
    objects: [{ id: "a" }, { id: "b" }],
    getId: (o) => o.id,
    serialize: (o) => o,
    batchSize: 2,
    scopeId: "test",
    adapterName: "test",
  });
  assert(!result.ok, "partial mock fails");
}

async function testDuplicateIdsFail() {
  const batch = [{ id: "a" }, { id: "b" }];
  const validation = validateBatchResponse(
    batch,
    { items: [{ id: "a" }, { id: "a" }] },
    (o) => o.id,
  );
  assert(!validation.ok, "duplicate ids fail");
  assert(validation.issues.includes("DUPLICATE_IDS"), "duplicate issue flagged");
}

async function testMalformedResponseFail() {
  const batch = [{ id: "a" }];
  const validation = validateBatchResponse(batch, { nope: true }, (o) => o.id);
  assert(!validation.ok, "malformed response fails");
}

async function testRealTransportDI() {
  let calls = 0;
  const fakeClient = {
    responses: {
      create: async () => {
        calls += 1;
        return {
          output_text: JSON.stringify({ items: [{ id: "card-1", status: "PASS" }] }),
          usage: { total_tokens: 42 },
        };
      },
    },
  };
  const transport = createRealLunaTransport({ client: fakeClient });
  const result = await runBatchedAdapter({
    transport,
    objects: [{ id: "card-1", de: "Haus", lv: "maja" }],
    getId: (o) => o.id,
    serialize: (o) => o,
    batchSize: 1,
    scopeId: "g2/a1/et",
    adapterName: "g2-reuse",
  });
  assert(result.ok, "DI real transport pass");
  assert(transport.getRealCalls() === 1, "DI real calls counted");
  assert(result.stats.tokensUsed === 42, "tokens counted");
  assert(transport.transport === "REAL", "transport REAL");
}

async function testRealTransportMissingObjectFail() {
  const fakeClient = {
    responses: {
      create: async () => ({
        output_text: JSON.stringify({ items: [] }),
        usage: { total_tokens: 1 },
      }),
    },
  };
  const transport = createRealLunaTransport({ client: fakeClient });
  const result = await runBatchedAdapter({
    transport,
    objects: [{ id: "missing" }],
    getId: (o) => o.id,
    serialize: (o) => o,
    batchSize: 1,
    scopeId: "test",
    adapterName: "test",
  });
  assert(!result.ok, "missing object fails");
}

async function testParseStrictDuplicate() {
  let threw = false;
  try {
    parsePhase1LunaResponseStrict(JSON.stringify({ items: [{ id: "a" }, { id: "a" }] }), ["a"]);
  } catch (error) {
    threw = true;
    assert(/duplicate/i.test(error.message), "duplicate parse error");
  }
  assert(threw, "duplicate throws");
}

async function testRetryWithoutNetwork() {
  let calls = 0;
  const transport = {
    mode: "MOCK",
    get realCallsDelta() {
      return 0;
    },
    async call() {
      calls += 1;
      if (calls < 2) throw new Error("TIMEOUT");
      return { items: [{ id: "x", status: "PASS" }], tokensUsed: 0 };
    },
  };
  const result = await runBatchedAdapter({
    transport,
    objects: [{ id: "x" }],
    getId: (o) => o.id,
    serialize: (o) => o,
    batchSize: 1,
    scopeId: "test",
    adapterName: "test",
  });
  assert(result.ok, "retry succeeds");
  assert(result.stats.retries >= 1, "retry counted");
}

function injectedGitIdentity() {
  return resolvePhase1GitIdentity({
    skipFetch: true,
    fetchStatus: "PASS",
    originMainSha: SHA_TEST,
    headSha: SHA_TEST,
    workingTreeClean: true,
    productionDiffClean: true,
    deDiffClean: true,
  });
}

function testAuthorizeMissingApiKey() {
  const saved = process.env.OPENAI_API_KEY;
  delete process.env.OPENAI_API_KEY;
  const auth = authorizeWithLunaDiscovery({
    skipPhase0Check: true,
    gitIdentity: injectedGitIdentity(),
    baseline: { verdict: "PASS", blockers: [] },
  });
  assert(!auth.pass, "missing api key blocks");
  assert(auth.blocker === "OPENAI_API_KEY_MISSING", "api key blocker code");
  process.env.OPENAI_API_KEY = saved;
}

function testAuthorizePhase0Fail() {
  const auth = authorizeWithLunaDiscovery({
    skipApiKeyCheck: true,
    gitIdentity: injectedGitIdentity(),
    baseline: { verdict: "PASS", blockers: [] },
    phase0Matrix: { phase0Complete: false, status: "PHASE_0_INCOMPLETE", gates: {} },
  });
  assert(!auth.pass, "phase0 fail blocks");
}

function testRedactSecrets() {
  process.env.OPENAI_API_KEY = "sk-test-secret-key-12345";
  const redacted = redactSecrets("Error with sk-test-secret-key-12345 inside");
  assert(!redacted.includes("sk-test-secret-key-12345"), "secret redacted");
}

function parseLastJson(stdout) {
  const marker = '"status":';
  const idx = stdout.lastIndexOf(marker);
  if (idx < 0) throw new Error("No JSON found in CLI output");
  const start = stdout.lastIndexOf("{", idx);
  const end = stdout.indexOf("}", idx);
  if (start < 0 || end < 0) throw new Error("Malformed CLI JSON");
  return JSON.parse(stdout.slice(start, stdout.lastIndexOf("}") + 1));
}

function testCliSkipLunaZeroCalls() {
  const out = execSync(
    "node scripts/run-phase1-discovery.js --skip-luna --group g2 --dataset a1 --lang et",
    { cwd: ROOT, encoding: "utf8" },
  );
  const json = parseLastJson(out);
  assert(json.lunaCalls === 0, "skip-luna zero calls");
}

function testCliWithLunaBlockedNoKey() {
  const saved = process.env.OPENAI_API_KEY;
  delete process.env.OPENAI_API_KEY;
  const auth = authorizeWithLunaDiscovery({
    skipPhase0Check: true,
    gitIdentity: injectedGitIdentity(),
    baseline: { verdict: "PASS", blockers: [] },
  });
  assert(!auth.pass, "with-luna should fail without key");
  assert(auth.blocker === "OPENAI_API_KEY_MISSING", "blocked message");
  process.env.OPENAI_API_KEY = saved;
}

function testCreateLunaTransportModes() {
  const mock = createLunaTransport({ mode: "mock" });
  const real = createLunaTransport({ mode: "real", client: { responses: { create: async () => ({ output_text: '{"items":[]}', usage: {} }) } } });
  assert(mock.transport === "MOCK", "mock mode");
  assert(real.transport === "REAL", "real mode");
}

async function run() {
  testMockTransportNoApiKey();
  await testMockCoverageMismatch();
  await testDuplicateIdsFail();
  await testMalformedResponseFail();
  await testRealTransportDI();
  await testRealTransportMissingObjectFail();
  await testParseStrictDuplicate();
  await testRetryWithoutNetwork();
  testAuthorizeMissingApiKey();
  testAuthorizePhase0Fail();
  testRedactSecrets();
  testCliSkipLunaZeroCalls();
  testCliWithLunaBlockedNoKey();
  testCreateLunaTransportModes();
  require("./test-phase1-dynamic-baseline-gate.js").run();
  console.log("PASS: phase1 real Luna transport tests");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
