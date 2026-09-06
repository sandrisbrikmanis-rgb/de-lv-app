#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");
const { ROOT } = require("./lib/audit-common");
const {
  runStartGates,
  buildQueues,
  buildBatchPlan,
  runDryRun,
  createMockLunaTransport,
  runProposalBatches,
  validateLunaResponseItem,
  validateLunaBatchResponse,
  buildCheckpoint,
  saveCheckpoint,
  loadCheckpoint,
  validateCheckpoint,
  detectCheckpointIntegrity,
  buildTaskRequest,
  analyzeGroupedIndividualOverlaps,
  OVERLAP_CLASS,
  EXPECTED,
  TASK_KINDS,
  pathState,
} = require("./lib/g2-a1-luna-proposal");
const { stableTaskId, hashObject } = require("./lib/g2-a1-luna-proposal/hash");
const { writeJsonAtomic } = require("./lib/phase1-luna-checkpoint/atomic-io");

const FIXTURE = path.join(ROOT, "scripts/fixtures/g2-a1-luna-proposal-fixture.json");

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function testStableTaskId() {
  const a = stableTaskId("AUDIT_MAPPED_UNIQUE", "bg", "a1.card.x.native");
  const b = stableTaskId("AUDIT_MAPPED_UNIQUE", "bg", "a1.card.x.native");
  assert(a === b, "taskId stable");
  assert(a.startsWith("g2-a1-proposal-v1:"), "taskId prefix");
}

function testResponseValidatorFixture() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const task = fx.tasks[0];
  const ok = validateLunaResponseItem(fx.validResponse, task, { forbidDeWrite: true });
  assert(ok.ok, `valid response: ${ok.issues}`);
  for (const [name, item] of Object.entries(fx.invalidResponses)) {
    const bad = validateLunaResponseItem(item, task, { forbidDeWrite: true });
    assert(!bad.ok, `${name} should fail`);
  }
}

function testDeNeverWriteTarget() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const task = { ...fx.tasks[0], fieldPath: "study.examples[].de" };
  const bad = validateLunaResponseItem(
    { taskId: task.taskId, action: "PROPOSE_REPLACEMENT", proposedValue: "x", rationale: "r", confidence: 1, targetLanguageConfirmed: true },
    task,
    { forbidDeWrite: true },
  );
  assert(!bad.ok, "DE field write blocked");
}

function testGroupedNotInIndividualBatches() {
  const gates = runStartGates();
  if (!gates.pass) {
    console.log("SKIP testGroupedNotInIndividualBatches (gates blocked in env)");
    return;
  }
  const { queues } = buildQueues({ gates });
  const plan = buildBatchPlan(queues);
  const ids = new Set(plan.batches.flatMap((b) => b.taskIds));
  for (const row of queues.GROUPED_MANUAL_REVIEW) {
    assert(!ids.has(row.taskId), `grouped task ${row.taskId} in individual batches`);
  }
}

function testQueueReconciliation() {
  const gates = runStartGates();
  if (!gates.pass) throw new Error(`gates blocked: ${gates.errors.join(",")}`);
  const { counts, reconciliation } = buildQueues({ gates });
  assert(reconciliation.duplicates.length === 0, `duplicates: ${reconciliation.duplicates.length}`);
  assert(counts.AUDIT_MAPPED_UNIQUE === EXPECTED.queueCounts.AUDIT_MAPPED_UNIQUE, counts.AUDIT_MAPPED_UNIQUE);
  assert(counts.EMPTY_OR_MISSING === EXPECTED.queueCounts.EMPTY_OR_MISSING, counts.EMPTY_OR_MISSING);
  assert(counts.SOURCE_IDENTICAL === EXPECTED.queueCounts.SOURCE_IDENTICAL, counts.SOURCE_IDENTICAL);
  assert(counts.GROUPED_MANUAL_REVIEW === EXPECTED.queueCounts.GROUPED_MANUAL_REVIEW, counts.GROUPED_MANUAL_REVIEW);
}

function testSourceIdenticalNotAutoIntentional() {
  const gates = runStartGates();
  if (!gates.pass) return;
  const { queues } = buildQueues({ gates });
  for (const row of queues.SOURCE_IDENTICAL) {
    assert(row.preliminaryClass, "preliminary class set");
    assert(row.ownerStatus === "SOURCE_IDENTICAL_PENDING_OWNER", row.ownerStatus);
  }
}

function testCheckpointResume() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-proposal-"));
  const prev = pathState.runsRoot;
  pathState.runsRoot = path.join(tmp, "runs");
  const runId = "test-run-resume";
  const batch = {
    batchId: "batch-0-abc",
    batchIndex: 0,
    queueKind: TASK_KINDS.AUDIT_MAPPED_UNIQUE,
    taskIds: ["t1"],
    expectedIdsHash: "hash",
    requestInputHash: "req",
    tasks: [
      {
        taskId: "t1",
        locale: "bg",
        crowdinKey: "k1",
        currentValue: "a",
        lvSourceValue: "lv",
        deContextReadOnly: null,
        fieldPath: "lv",
      },
    ],
  };
  const cp = buildCheckpoint({
    runId,
    queueKind: batch.queueKind,
    batch,
    normalizedItems: [{ taskId: "t1", action: "KEEP_CURRENT", lunaResultStatus: "PROPOSED_LUNA_PENDING_OWNER" }],
    transport: "MOCK",
    realCalls: 0,
    retries: 0,
    tokensUsed: 0,
    lastError: null,
    startedAt: new Date().toISOString(),
  });
  saveCheckpoint(runId, batch.queueKind, cp);
  const loaded = loadCheckpoint(runId, batch.queueKind, batch.batchId);
  assert(validateCheckpoint(loaded, batch).ok, "checkpoint valid");
  pathState.runsRoot = prev;
}

function testCorruptCheckpointDetected() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-proposal-"));
  const prev = pathState.runsRoot;
  pathState.runsRoot = path.join(tmp, "runs");
  const runId = "test-run-corrupt";
  const batch = {
    batchId: "batch-0-def",
    batchIndex: 0,
    queueKind: TASK_KINDS.AUDIT_MAPPED_UNIQUE,
    taskIds: ["t1"],
    expectedIdsHash: "expected",
    requestInputHash: "req",
    tasks: [{ taskId: "t1", locale: "bg", crowdinKey: "k", currentValue: null, lvSourceValue: "lv", fieldPath: "lv" }],
  };
  const cp = buildCheckpoint({
    runId,
    queueKind: batch.queueKind,
    batch,
    normalizedItems: [],
    transport: "MOCK",
    realCalls: 0,
    retries: 0,
    tokensUsed: 0,
    lastError: "fail",
    startedAt: new Date().toISOString(),
  });
  const { checkpointFilePath } = require("./lib/g2-a1-luna-proposal/constants");
  writeJsonAtomic(checkpointFilePath(runId, batch.queueKind, batch.batchId), cp);
  const integrity = detectCheckpointIntegrity(runId, { batches: [batch] });
  assert(integrity.corrupt.length === 1 || integrity.missing.length === 1, "corrupt or missing checkpoint");
  pathState.runsRoot = prev;
}

async function testMockRunnerNoRealCalls() {
  const gates = runStartGates();
  if (!gates.pass) return;
  const built = buildQueues({ gates });
  const plan = buildBatchPlan(built.queues, { batchSizes: { AUDIT_MAPPED_UNIQUE: 5000, EMPTY_OR_MISSING: 5000, SOURCE_IDENTICAL: 5000 } });
  const transport = createMockLunaTransport();
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-proposal-run-"));
  const prev = pathState.runsRoot;
  pathState.runsRoot = path.join(tmp, "runs");
  const runId = "mock-run-001";
  const result = await runProposalBatches({ runId, gates, queues: built, batchPlan: plan, transport });
  assert(transport.stats.realCalls === 0, "realCalls must be 0");
  assert(result.progress.realCalls === 0, "progress realCalls 0");
  pathState.runsRoot = prev;
}

function testOverlap522Classification() {
  const gates = runStartGates();
  if (!gates.pass) return;
  const { queues, reconciliation } = buildQueues({ gates });
  const review = analyzeGroupedIndividualOverlaps(queues, reconciliation);
  assert(review.total === 522, `overlap total ${review.total}`);
  assert(review.summary.SAFE_WITH_GROUP_CONTEXT === 513, review.summary.SAFE_WITH_GROUP_CONTEXT);
  assert(review.summary.OWNER_CONFLICT_REVIEW_REQUIRED === 9, review.summary.OWNER_CONFLICT_REVIEW_REQUIRED);
  assert(review.summary.INVALID_OVERLAP === 0, review.summary.INVALID_OVERLAP);
  for (const row of review.rows) {
    if (row.classification === OVERLAP_CLASS.SAFE_WITH_GROUP_CONTEXT) {
      assert(row.groupedContextInRequest, `missing grouped context for ${row.crowdinKey}`);
      assert(row.individualApplyEligible === false, "overlap must not be apply-eligible");
    }
  }
}

function testOwnerConflictExcludedFromBatches() {
  const gates = runStartGates();
  if (!gates.pass) return;
  const { queues } = buildQueues({ gates });
  const plan = buildBatchPlan(queues);
  const batchIds = new Set(plan.batches.flatMap((b) => b.taskIds));
  for (const task of queues.OWNER_CONFLICT_REVIEW) {
    assert(!batchIds.has(task.taskId), `conflict task in batches ${task.taskId}`);
  }
  assert(queues.OWNER_CONFLICT_REVIEW.length === 72, queues.OWNER_CONFLICT_REVIEW.length);
}

function testGroupedContextInRequest() {
  const gates = runStartGates();
  if (!gates.pass) return;
  const { queues } = buildQueues({ gates });
  const withOverlap = queues.AUDIT_MAPPED_UNIQUE.filter((t) => t.groupedOverlap);
  assert(withOverlap.length > 0, "expected overlap tasks");
  const req = buildTaskRequest(withOverlap[0]);
  assert(req.groupedContextReadOnly && req.groupedContextReadOnly.length > 0, "grouped context missing");
  assert(req.individualApplyEligible === false, "apply eligible must be false");
}

function testForbiddenStatuses() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const task = fx.tasks[0];
  for (const status of ["OWNER_APPROVED", "LABOT", "AUTO_APPLIED"]) {
    const bad = validateLunaResponseItem(
      { taskId: task.taskId, action: "KEEP_CURRENT", proposedValue: null, ownerStatus: status },
      task,
      { forbidDeWrite: true },
    );
    assert(!bad.ok, `${status} should be rejected`);
  }
  const ok = validateLunaResponseItem(fx.validResponse, task, { forbidDeWrite: true });
  assert(ok.normalized.lunaResultStatus === "PROPOSED_LUNA_PENDING_OWNER", ok.normalized?.lunaResultStatus);
}

function testBatchPlanNoOverlapApplyEligible() {
  const gates = runStartGates();
  if (!gates.pass) return;
  const { queues } = buildQueues({ gates });
  const plan = buildBatchPlan(queues);
  for (const batch of plan.batches) {
    if (batch.overlapTaskCount > 0) assert(!batch.individualApplyEligible, batch.batchId);
  }
}

function testBatchResponseIds() {
  const fx = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
  const tasks = fx.tasks;
  const batch = { items: [fx.validResponse, { taskId: "extra", action: "KEEP_CURRENT", proposedValue: null }] };
  const bad = validateLunaBatchResponse(batch, [tasks[0]], { forbidDeWrite: true });
  assert(!bad.ok, "extra id rejected");
}

function testDryRunIntegration() {
  const result = runDryRun({ writeArtifacts: false });
  if (!runStartGates().pass) {
    assert(result.classification === "START_GATE_BLOCKED", result.classification);
    return;
  }
  assert(
    result.classification === "G2_A1_LUNA_PROPOSAL_INFRA_READY_FOR_OWNER_REVIEW",
    result.classification,
  );
  assert(result.lunaRealCalls === 0, "lunaRealCalls");
}

const tests = [
  testStableTaskId,
  testResponseValidatorFixture,
  testDeNeverWriteTarget,
  testBatchResponseIds,
  testQueueReconciliation,
  testSourceIdenticalNotAutoIntentional,
  testGroupedNotInIndividualBatches,
  testOverlap522Classification,
  testOwnerConflictExcludedFromBatches,
  testGroupedContextInRequest,
  testForbiddenStatuses,
  testBatchPlanNoOverlapApplyEligible,
  testCheckpointResume,
  testCorruptCheckpointDetected,
  testDryRunIntegration,
];

async function main() {
  const integration = process.argv.includes("--integration");
  for (const t of tests) {
    await t();
    console.log(`OK ${t.name}`);
  }
  if (integration) {
    await testMockRunnerNoRealCalls();
    console.log("OK testMockRunnerNoRealCalls");
  }
  console.log(`PASS ${tests.length + (integration ? 1 : 0)} g2-a1 luna proposal infra tests`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
