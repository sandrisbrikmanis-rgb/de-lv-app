#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const fixture = require("./fixtures/phase1-id-recovery-lb-sq.json");
const { runBatchedAdapter } = require("./lib/luna-adapter-runner");
const { createRealLunaTransport } = require("./lib/luna-transport");
const { buildLunaRequestPayload } = require("./lib/phase1-luna-checkpoint/object-identity");

const NO_BACKOFF = [0, 0];
const SCOPE_ID = "g2/b1/lb";
const BATCH_INDEX = 68;

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function buildLandlichBatch() {
  return [buildLunaRequestPayload(SCOPE_ID, { de: "ländlich", index: 1718, productionFile: "data/lb/b1.js" })];
}

function createFakeClient(returnedItems) {
  return {
    responses: {
      create: async () => ({
        output_text: JSON.stringify({ items: returnedItems }),
        usage: { total_tokens: 7 },
      }),
    },
  };
}

async function withDiagnosticsDir(run) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "id-recovery-transport-diag-"));
  const prev = process.env.PHASE1_ID_RECOVERY_DIAGNOSTICS_DIR;
  process.env.PHASE1_ID_RECOVERY_DIAGNOSTICS_DIR = dir;
  try {
    return await run(dir);
  } finally {
    if (prev === undefined) delete process.env.PHASE1_ID_RECOVERY_DIAGNOSTICS_DIR;
    else process.env.PHASE1_ID_RECOVERY_DIAGNOSTICS_DIR = prev;
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function readDiagnosticFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".json"))
    .map((name) => JSON.parse(fs.readFileSync(path.join(dir, name), "utf8")));
}

async function testValidLbVariantRecoversThroughRealTransport() {
  await withDiagnosticsDir(async (dir) => {
    const batch = buildLandlichBatch();
    const expectedId = batch[0].id;
    const transport = createRealLunaTransport({
      client: createFakeClient([{ id: fixture.landlichLbMutationId, status: "PASS" }]),
    });
    const result = await runBatchedAdapter({
      transport,
      objects: batch,
      getId: (o) => o.id,
      serialize: (o) => o,
      batchSize: 1,
      scopeId: SCOPE_ID,
      adapterName: "g2-reuse",
      retryBackoffMs: NO_BACKOFF,
    });
    assert(result.ok, "valid lb variant recovers through real transport");
    assert(result.stats.realCalls === 1, "valid path realCalls=1");
    assert(readDiagnosticFiles(dir).length === 0, "valid path writes no diagnostics");
    assert(result.results?.[0]?.id === expectedId, "canonical id restored");
  });
}

async function testInvalidVariantWritesDiagnostics() {
  await withDiagnosticsDir(async (dir) => {
    const batch = buildLandlichBatch();
    const transport = createRealLunaTransport({
      client: createFakeClient([{ id: fixture.landlichLbUnknownSubstitutionId, status: "PASS" }]),
    });
    const result = await runBatchedAdapter({
      transport,
      objects: batch,
      getId: (o) => o.id,
      serialize: (o) => o,
      batchSize: 1,
      scopeId: SCOPE_ID,
      adapterName: "g2-reuse",
      retryBackoffMs: NO_BACKOFF,
    });
    assert(!result.ok, "invalid variant fails");
    const files = readDiagnosticFiles(dir);
    assert(files.length >= 1, "invalid variant writes diagnostics JSON");
    const payload = files[0];
    assert(payload.scopeId === SCOPE_ID, "diagnostics scopeId");
    assert(payload.batchIndex === 0, "diagnostics batchIndex from first batch in run");
    assert(payload.attempt === 1, "diagnostics attempt 1 on first failure");
    const record = payload.records[0];
    assert(record.returnedIdEscaped.includes("\\u"), "escaped returnedId");
    assert(record.returnedRawEscaped.includes("\\u"), "escaped returnedRaw");
    assert(record.expectedCanonicalId === fixture.landlichCanonicalId, "expected canonical id");
    assert(record.parsed.scopeId === SCOPE_ID, "parsed scopeId");
    assert(record.parsed.objectIndex === 1718, "parsed objectIndex");
    assert(record.parsed.sourceFile === "b1.js", "parsed sourceFile");
    assert(result.reason.includes("BLOCKED_UNCAPTURED_RAW_VARIANT"), "short lastError classification");
    assert(!JSON.stringify(payload).includes("sk-test-secret-key"), "no api key in diagnostics");
  });
}

async function testThreeRetriesWriteAttemptsOneTwoThree() {
  await withDiagnosticsDir(async (dir) => {
    process.env.OPENAI_API_KEY = "sk-test-secret-key-12345";
    const batch = buildLandlichBatch();
    const transport = createRealLunaTransport({
      client: createFakeClient([{ id: fixture.landlichLbUnknownSubstitutionId, status: "PASS" }]),
    });
    const result = await runBatchedAdapter({
      transport,
      objects: batch,
      getId: (o) => o.id,
      serialize: (o) => o,
      batchSize: 1,
      scopeId: SCOPE_ID,
      adapterName: "g2-reuse",
      retryBackoffMs: NO_BACKOFF,
    });
    assert(!result.ok, "three retries fail");
    assert(result.stats.realCalls === 3, "three rejected attempts realCalls=3");
    assert(result.stats.retries === 2, "three rejected attempts retries=2");
    assert(result.reason.includes("BLOCKED_UNCAPTURED_RAW_VARIANT"), "sanitized lastError only");
    assert(!result.reason.includes("sk-test-secret-key-12345"), "lastError has no api key");

    const attempts = readDiagnosticFiles(dir)
      .map((file) => file.attempt)
      .sort((a, b) => a - b);
    assert(attempts.length === 3, "three diagnostic files for three attempts");
    assert(attempts[0] === 1 && attempts[1] === 2 && attempts[2] === 3, "attempts 1,2,3 recorded");
    delete process.env.OPENAI_API_KEY;
  });
}

async function testUnreadableDiagnosticsDirPreservesRecoveryError() {
  const blockedPath = path.join(os.tmpdir(), `id-recovery-blocked-${Date.now()}`);
  fs.writeFileSync(blockedPath, "not-a-directory");
  const prev = process.env.PHASE1_ID_RECOVERY_DIAGNOSTICS_DIR;
  process.env.PHASE1_ID_RECOVERY_DIAGNOSTICS_DIR = blockedPath;
  try {
    const batch = buildLandlichBatch();
    const transport = createRealLunaTransport({
      client: createFakeClient([{ id: fixture.landlichLbUnknownSubstitutionId, status: "PASS" }]),
    });
    const result = await runBatchedAdapter({
      transport,
      objects: batch,
      getId: (o) => o.id,
      serialize: (o) => o,
      batchSize: 1,
      scopeId: SCOPE_ID,
      adapterName: "g2-reuse",
      retryBackoffMs: NO_BACKOFF,
    });
    assert(!result.ok, "failure still reported");
    assert(
      result.reason === "Luna ID recovery failed: BLOCKED_UNCAPTURED_RAW_VARIANT",
      "filesystem error does not replace recovery classification",
    );
    assert(!/EACCES|ENOENT|not-a-directory/i.test(result.reason), "no filesystem error in lastError");
  } finally {
    if (prev === undefined) delete process.env.PHASE1_ID_RECOVERY_DIAGNOSTICS_DIR;
    else process.env.PHASE1_ID_RECOVERY_DIAGNOSTICS_DIR = prev;
    fs.rmSync(blockedPath, { force: true });
  }
}

async function testNoDuplicateDiagnosticsPerAttempt() {
  await withDiagnosticsDir(async (dir) => {
    const batch = buildLandlichBatch();
    const transport = createRealLunaTransport({
      client: createFakeClient([{ id: fixture.landlichLbUnknownSubstitutionId, status: "PASS" }]),
    });
    await runBatchedAdapter({
      transport,
      objects: batch,
      getId: (o) => o.id,
      serialize: (o) => o,
      batchSize: 1,
      scopeId: SCOPE_ID,
      adapterName: "g2-reuse",
      retryBackoffMs: NO_BACKOFF,
    });
    const files = readDiagnosticFiles(dir);
    assert(files.length === 3, "exactly one diagnostics file per failed attempt");
    for (const file of files) {
      assert(file.records.length >= 1, "at least one diagnostic record");
      const attempts = new Set(file.records.map((record) => record.attempt));
      assert(attempts.size === 1, "records within one file share one attempt");
      assert(attempts.has(file.attempt), "file attempt matches record attempt");
    }
  });
}

async function testDiagnosticsBatchIndexPropagated() {
  await withDiagnosticsDir(async (dir) => {
    const batch = buildLandlichBatch();
    const { auditObjectsBatch } = require("./lib/luna-phase1-openai");
    let threw = false;
    try {
      await auditObjectsBatch({
        adapter: "g2-reuse",
        scopeId: SCOPE_ID,
        objects: batch,
        client: createFakeClient([{ id: fixture.landlichLbUnknownSubstitutionId, status: "PASS" }]),
        recoveryContext: { scopeId: SCOPE_ID, batchIndex: BATCH_INDEX, attempt: 2 },
      });
    } catch (error) {
      threw = true;
      assert(error.message.includes("BLOCKED_UNCAPTURED_RAW_VARIANT"), "auditObjectsBatch throws recovery error");
    }
    assert(threw, "auditObjectsBatch fails on invalid variant");
    const payload = readDiagnosticFiles(dir)[0];
    assert(payload.scopeId === SCOPE_ID, "batchIndex propagation scopeId");
    assert(payload.batchIndex === BATCH_INDEX, "batchIndex 68 propagated");
    assert(payload.attempt === 2, "attempt 2 propagated");
  });
}

async function main() {
  await testValidLbVariantRecoversThroughRealTransport();
  await testInvalidVariantWritesDiagnostics();
  await testDiagnosticsBatchIndexPropagated();
  await testThreeRetriesWriteAttemptsOneTwoThree();
  await testUnreadableDiagnosticsDirPreservesRecoveryError();
  await testNoDuplicateDiagnosticsPerAttempt();

  console.log(`\nPhase 1 real-transport ID recovery diagnostics tests: ${testsRun - testsFailed}/${testsRun} passed`);
  if (testsFailed > 0) process.exit(1);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = { main };
