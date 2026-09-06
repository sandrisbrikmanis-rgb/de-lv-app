#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const {
  authorizeRuntimeExecution,
  createRealLunaTransport,
  createLunaTransport,
  runProposalBatches,
  RUNTIME_MODES,
  AUTH_FROZEN,
  pathState,
  TASK_KINDS,
} = require("./lib/g2-a1-luna-proposal");
const {
  buildProductionRealLunaOptions,
  runIsolatedProductionRealLunaAuth,
} = require("./lib/g2-a1-luna-proposal/auth-test-harness");
const { buildFakeProposalClient, defaultItemsForTasks } = require("./lib/g2-a1-luna-proposal/fake-client-fixture");
const { redactSecrets } = require("./lib/luna-phase1-openai");
const { ROOT } = require("./lib/audit-common");

const FIXTURE = path.join(ROOT, "scripts/fixtures/g2-a1-luna-proposal-fixture.json");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

function buildSampleBatch(tasks) {
  return {
    batchId: "batch-test-0",
    batchIndex: 0,
    queueKind: TASK_KINDS.AUDIT_MAPPED_UNIQUE,
    taskIds: tasks.map((t) => t.taskId),
    expectedIdsHash: "test-hash",
    requestInputHash: "test-req",
    tasks,
  };
}

let cachedRealReceipt = null;

function alignOriginMainForTestAuth() {
  const headSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  execSync(`git update-ref refs/remotes/origin/main ${headSha}`, { cwd: ROOT });
  return headSha;
}

function getRealReceipt() {
  if (!cachedRealReceipt) {
    const isolated = runIsolatedProductionRealLunaAuth();
    assert(isolated.result.auth.pass, (isolated.result.auth.errors || []).join(","));
    const gitSha = alignOriginMainForTestAuth();
    const auth = authorizeRuntimeExecution(
      buildProductionRealLunaOptions({
        filePath: isolated.authPath,
        authorizationFileSha256: isolated.authorizationFileSha256,
        gitSha,
        batchPlanSha256: isolated.batchPlanSha256,
      }),
    );
    assert(auth.pass, (auth.errors || []).join(","));
    cachedRealReceipt = auth.receipt;
  }
  return cachedRealReceipt;
}

function authorizeRealWithFake() {
  return { receipt: getRealReceipt() };
}

async function testValidBatchResponsePass() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = [fx.tasks[0]];
  const auth = authorizeRealWithFake();
  const client = buildFakeProposalClient({ tasks });
  const transport = createRealLunaTransport(auth.receipt, { client });
  const batch = buildSampleBatch(tasks);
  const result = await transport.executeBatch(batch, tasks);
  assert(result.items.length === 1, "one item");
  assert(result.items[0].lunaResultStatus === "PROPOSED_LUNA_PENDING_OWNER", result.items[0].lunaResultStatus);
  assert(transport.stats.realCalls === 1, "realCalls 1");
}

async function testFakeClientReceivesModelAndRequest() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = [fx.tasks[0]];
  const auth = authorizeRealWithFake();
  const client = buildFakeProposalClient({ tasks });
  const transport = createRealLunaTransport(auth.receipt, { client });
  await transport.executeBatch(buildSampleBatch(tasks), tasks);
  assert(client.state.calls === 1, "fake client called once");
  assert(client.state.lastRequest.params.model === AUTH_FROZEN.model, "model frozen");
  const input = client.state.lastRequest.params.input;
  assert(input.includes(tasks[0].taskId), "taskId in request");
  assert(input.includes(tasks[0].crowdinKey), "crowdinKey in request");
}

async function testManualFakeReceiptFails() {
  const fake = Object.freeze({ mode: RUNTIME_MODES.REAL_LUNA, validated: true, executable: true });
  let code = null;
  try {
    createRealLunaTransport(fake);
  } catch (error) {
    code = error.code;
  }
  assert(code === "RUNTIME_RECEIPT_NOT_ISSUED", code);
}

async function testValidProductionReceiptCreatesTransport() {
  const auth = authorizeRealWithFake();
  const transport = createRealLunaTransport(auth.receipt, {
    client: buildFakeProposalClient({ tasks: [] }),
  });
  assert(transport.mode === "REAL_LUNA", transport.mode);
  assert(transport.authorizedRuntimeReceipt === auth.receipt, "receipt bound");
}

async function testApiRejectRealCallsOne() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = [fx.tasks[0]];
  const auth = authorizeRealWithFake();
  const client = buildFakeProposalClient({ tasks, reject: true });
  const transport = createRealLunaTransport(auth.receipt, { client });
  let failed = false;
  try {
    await transport.executeBatch(buildSampleBatch(tasks), tasks);
  } catch {
    failed = true;
  }
  assert(failed, "reject fails");
  assert(transport.stats.realCalls === 1, `realCalls ${transport.stats.realCalls}`);
}

async function testTimeoutRealCallsOne() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = [fx.tasks[0]];
  const auth = authorizeRealWithFake();
  const client = buildFakeProposalClient({ tasks, timeoutMs: 50_000 });
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5);
  const transport = createRealLunaTransport(auth.receipt, { client, signal: controller.signal });
  let code = null;
  try {
    await transport.executeBatch(buildSampleBatch(tasks), tasks);
  } catch (error) {
    code = error.code;
  }
  assert(code === "TIMEOUT" || code === "LUNA_TRANSPORT_ERROR", code);
  assert(transport.stats.realCalls === 1, `realCalls ${transport.stats.realCalls}`);
}

async function testMalformedJsonFails() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = [fx.tasks[0]];
  const gitSha = "f".repeat(40);
  const batchPlanSha256 = "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890";
  const auth = authorizeRealWithFake();
  const client = buildFakeProposalClient({ tasks, malformed: "not-json" });
  const transport = createRealLunaTransport(auth.receipt, { client });
  let failed = false;
  try {
    await transport.executeBatch(buildSampleBatch(tasks), tasks);
  } catch {
    failed = true;
  }
  assert(failed, "malformed fails");
}

async function testMissingExtraDuplicateIdsFail() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = [fx.tasks[0]];
  const gitSha = "1".repeat(40);
  const batchPlanSha256 = "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890";
  const auth = authorizeRealWithFake();

  for (const [name, items] of [
    ["missing", []],
    ["extra", [...defaultItemsForTasks(tasks), { taskId: "extra", action: "KEEP_CURRENT", proposedValue: null }]],
    ["duplicate", [...defaultItemsForTasks(tasks), ...defaultItemsForTasks(tasks)]],
  ]) {
    const client = buildFakeProposalClient({
      handler: () => ({ output_text: JSON.stringify({ items }), usage: { total_tokens: 1 } }),
    });
    const transport = createRealLunaTransport(auth.receipt, { client });
    let failed = false;
    try {
      await transport.executeBatch(buildSampleBatch(tasks), tasks);
    } catch (error) {
      failed = error.code === "LUNA_BATCH_RESPONSE_INVALID";
    }
    assert(failed, `${name} id issue fails`);
  }
}

async function testPlaceholderHtmlMismatchFails() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const task = fx.tasks[0];
  const gitSha = "2".repeat(40);
  const batchPlanSha256 = "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890";
  const auth = authorizeRealWithFake();
  const badItems = [fx.invalidResponses.htmlBroken];
  const client = buildFakeProposalClient({
    handler: () => ({ output_text: JSON.stringify({ items: badItems }), usage: { total_tokens: 1 } }),
  });
  const transport = createRealLunaTransport(auth.receipt, { client });
  let failed = false;
  try {
    await transport.executeBatch(buildSampleBatch([task]), [task]);
  } catch (error) {
    failed = error.code === "LUNA_BATCH_RESPONSE_INVALID";
  }
  assert(failed, "html mismatch fails");
}

async function testRetryNoDoubleCountingOnSuccess() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = [fx.tasks[0]];
  const gitSha = "3".repeat(40);
  const batchPlanSha256 = "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890";
  const auth = authorizeRealWithFake();
  let calls = 0;
  const client = buildFakeProposalClient({
    handler: () => {
      calls += 1;
      if (calls === 1) throw new Error("TRANSIENT");
      return { output_text: JSON.stringify({ items: defaultItemsForTasks(tasks) }), usage: { total_tokens: 2 } };
    },
  });
  const transport = createRealLunaTransport(auth.receipt, { client });
  const batch = buildSampleBatch(tasks);
  let firstFailed = false;
  try {
    await transport.executeBatch(batch, tasks);
  } catch {
    firstFailed = true;
  }
  assert(firstFailed, "first attempt fails");
  const result = await transport.executeBatch(batch, tasks);
  assert(result.realCalls === 1, "per-call realCalls is 1");
  assert(transport.stats.realCalls === 2, `transport stats ${transport.stats.realCalls}`);
  assert(result.retries === 0, "transport does not own retries");
}

async function testThreeRunnerAttemptsRealCallsThree() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = [fx.tasks[0]];
  const gitSha = "4".repeat(40);
  const batchPlanSha256 = "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890";
  const auth = authorizeRealWithFake();
  const client = buildFakeProposalClient({ tasks, reject: true });
  const transport = createRealLunaTransport(auth.receipt, { client });
  const gates = { pass: true };
  const batch = buildSampleBatch(tasks);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-real-transport-retry-"));
  const prev = pathState.runsRoot;
  pathState.runsRoot = path.join(tmp, "runs");
  const result = await runProposalBatches({
    runId: "retry-test",
    gates,
    queues: { counts: {} },
    batchPlan: { batches: [batch] },
    transport,
    options: { maxRetries: 2 },
  });
  assert(transport.stats.realCalls === 3, `realCalls ${transport.stats.realCalls}`);
  assert(result.progress.retries === 3, `retries ${result.progress.retries}`);
  pathState.runsRoot = prev;
}

async function testSecretsRedacted() {
  const saved = process.env.OPENAI_API_KEY;
  process.env.OPENAI_API_KEY = "sk-test-secret-key-12345";
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = [fx.tasks[0]];
  const gitSha = "5".repeat(40);
  const batchPlanSha256 = "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890";
  const auth = authorizeRealWithFake();
  const client = buildFakeProposalClient({
    reject: true,
    rejectMessage: "failure with sk-test-secret-key-12345 embedded",
  });
  const transport = createRealLunaTransport(auth.receipt, { client });
  let message = "";
  try {
    await transport.executeBatch(buildSampleBatch(tasks), tasks);
  } catch (error) {
    message = error.message;
  }
  assert(!message.includes("sk-test-secret-key-12345"), message);
  assert(message.includes("[REDACTED]"), message);
  assert(redactSecrets("x sk-test-secret-key-12345 y").includes("[REDACTED]"), "redact helper");
  process.env.OPENAI_API_KEY = saved;
}

async function testCheckpointResumeStillWorks() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = [fx.tasks[0]];
  const gitSha = "6".repeat(40);
  const batchPlanSha256 = "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890";
  const auth = authorizeRealWithFake();
  const client = buildFakeProposalClient({ tasks });
  const transport = createRealLunaTransport(auth.receipt, { client });
  const batch = buildSampleBatch(tasks);
  const gates = { pass: true };
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-real-transport-cp-"));
  const prev = pathState.runsRoot;
  pathState.runsRoot = path.join(tmp, "runs");
  const runId = "real-cp-run";
  const first = await runProposalBatches({
    runId,
    gates,
    queues: { counts: {} },
    batchPlan: { batches: [batch] },
    transport,
  });
  assert(first.results[0].checkpoint, "checkpoint saved");
  const callsAfterFirst = client.state.calls;
  const second = await runProposalBatches({
    runId,
    gates,
    queues: { counts: {} },
    batchPlan: { batches: [batch] },
    transport: createRealLunaTransport(auth.receipt, { client }),
  });
  assert(second.results[0].skipped === true, "batch skipped on resume");
  assert(client.state.calls === callsAfterFirst, "no extra client call on resume");
  pathState.runsRoot = prev;
}

async function testFakeClientZeroExternalCalls() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = [fx.tasks[0]];
  const gitSha = "7".repeat(40);
  const batchPlanSha256 = "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890";
  const auth = authorizeRealWithFake();
  const client = buildFakeProposalClient({ tasks });
  const transport = createLunaTransport({ authorizedRuntimeReceipt: auth.receipt, client });
  await transport.executeBatch(buildSampleBatch(tasks), tasks);
  assert(client.state.calls === 1, "only fake client used");
  assert(transport.stats.realCalls === 1, "counted as real transport call");
}

const tests = [
  ["testValidBatchResponsePass", testValidBatchResponsePass],
  ["testFakeClientReceivesModelAndRequest", testFakeClientReceivesModelAndRequest],
  ["testManualFakeReceiptFails", testManualFakeReceiptFails],
  ["testValidProductionReceiptCreatesTransport", testValidProductionReceiptCreatesTransport],
  ["testApiRejectRealCallsOne", testApiRejectRealCallsOne],
  ["testTimeoutRealCallsOne", testTimeoutRealCallsOne],
  ["testMalformedJsonFails", testMalformedJsonFails],
  ["testMissingExtraDuplicateIdsFail", testMissingExtraDuplicateIdsFail],
  ["testPlaceholderHtmlMismatchFails", testPlaceholderHtmlMismatchFails],
  ["testRetryNoDoubleCountingOnSuccess", testRetryNoDoubleCountingOnSuccess],
  ["testThreeRunnerAttemptsRealCallsThree", testThreeRunnerAttemptsRealCallsThree],
  ["testSecretsRedacted", testSecretsRedacted],
  ["testCheckpointResumeStillWorks", testCheckpointResumeStillWorks],
  ["testFakeClientZeroExternalCalls", testFakeClientZeroExternalCalls],
];

async function main() {
  let passed = 0;
  for (const [name, fn] of tests) {
    await fn();
    passed += 1;
    console.log(`OK ${name}`);
  }
  console.log(
    JSON.stringify({
      passed,
      failed: 0,
      skipped: 0,
      total: tests.length,
      lunaRealCalls: 0,
      crowdinApiWrites: 0,
      externalApiCalls: 0,
    }),
  );
  console.log(`PASS ${passed} g2-a1 luna real-transport tests (fake client only)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
