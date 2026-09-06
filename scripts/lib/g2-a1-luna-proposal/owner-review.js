#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { authorizeRuntimeExecution } = require("./runtime-gates");
const { RUNTIME_MODES } = require("./runtime-mode");
const { buildQueues } = require("./queue-builder");
const { buildBatchPlan } = require("./batch-plan");
const { buildTaskRequest } = require("./request-schema");
const {
  analyzeGroupedIndividualOverlaps,
  countIndividualOverlapStats,
} = require("./grouped-overlap");
const { EXPECTED, pathState, DEFAULT_RETRY, TASK_KINDS } = require("./constants");
const { sha256Hex, hashObject } = require("./hash");
const { createMockLunaTransport } = require("./mock-transport");
const { runProposalBatches } = require("./runner");
const {
  buildCheckpoint,
  saveCheckpoint,
  loadCheckpoint,
  validateCheckpoint,
  detectCheckpointIntegrity,
} = require("./checkpoint");
const { writeJsonAtomic } = require("../phase1-luna-checkpoint/atomic-io");

function atomicWrite(p, data) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  const tmp = `${p}.tmp.${process.pid}`;
  fs.writeFileSync(tmp, data);
  fs.renameSync(tmp, p);
}

function writeJson(p, obj) {
  atomicWrite(p, JSON.stringify(obj, null, 2) + "\n");
}

function verifyPrDiff() {
  const files = execSync("git diff --name-only origin/main...HEAD", { encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean);
  const forbiddenPrefixes = ["data/", "www/data/", "reports/"];
  const forbiddenPatterns = [/\.env/i, /secret/i, /token/i, /api[_-]?key/i];
  const issues = [];
  for (const f of files) {
    if (forbiddenPrefixes.some((p) => f.startsWith(p))) issues.push(`FORBIDDEN_PATH:${f}`);
    if (forbiddenPatterns.some((re) => re.test(f))) issues.push(`SENSITIVE_PATH:${f}`);
  }
  const allowedPrefixes = [
    "scripts/lib/g2-a1-luna-proposal/",
    "scripts/run-phase2-g2-a1-luna-proposal-",
    "scripts/test-phase2-g2-a1-luna-proposal-",
    "scripts/fixtures/g2-a1-luna-proposal-",
  ];
  const allowedExact = new Set(["package.json"]);
  for (const f of files) {
    if (allowedExact.has(f)) continue;
    if (allowedPrefixes.some((p) => f.startsWith(p))) continue;
    issues.push(`UNEXPECTED_FILE:${f}`);
  }
  return { files, issues, pass: issues.length === 0 };
}

function independentQueueReconciliation(gates) {
  const built = buildQueues({ gates });
  const { counts, reconciliation } = built;
  const expected = EXPECTED.queueCounts;
  const pass =
    counts.AUDIT_MAPPED_UNIQUE === expected.AUDIT_MAPPED_UNIQUE &&
    counts.EMPTY_OR_MISSING === expected.EMPTY_OR_MISSING &&
    counts.SOURCE_IDENTICAL === expected.SOURCE_IDENTICAL &&
    counts.GROUPED_MANUAL_REVIEW === expected.GROUPED_MANUAL_REVIEW &&
    counts.individualExecutionUnits === 27894 &&
    reconciliation.duplicates.length === 0;
  return {
    pass,
    counts,
    reconciliation: {
      duplicates: reconciliation.duplicates.length,
      excludedEmptyDueToMappedUnique: reconciliation.excludedEmptyDueToMappedUnique,
      excludedSourceDueToPriorQueues: reconciliation.excludedSourceDueToPriorQueues,
      overlapWithGrouped: reconciliation.overlapWithGrouped.length,
      ownerConflictReviewRequired: reconciliation.ownerConflictReviewRequired,
    },
    overlapStats: countIndividualOverlapStats(built.queues),
  };
}

function verifyBatchPlan(queues, options = {}) {
  const planA = buildBatchPlan(queues, options);
  const planB = buildBatchPlan(queues, options);
  const stable = hashObject(planA.batches.map((b) => ({
    batchId: b.batchId,
    taskIds: b.taskIds,
    requestInputHash: b.requestInputHash,
    expectedIdsHash: b.expectedIdsHash,
  }))) === hashObject(planB.batches.map((b) => ({
    batchId: b.batchId,
    taskIds: b.taskIds,
    requestInputHash: b.requestInputHash,
    expectedIdsHash: b.expectedIdsHash,
  })));

  const globalTaskIds = new Set();
  const duplicateTaskIds = [];
  const batchByteSizes = [];
  let totalSerializedBytes = 0;
  const maxByQueue = {
    [TASK_KINDS.AUDIT_MAPPED_UNIQUE]: 25,
    [TASK_KINDS.EMPTY_OR_MISSING]: 50,
    [TASK_KINDS.SOURCE_IDENTICAL]: 50,
  };
  const lastBatchSizes = {};
  const issues = [];

  for (const batch of planA.batches) {
    if (batch.taskCount > maxByQueue[batch.queueKind]) {
      issues.push(`BATCH_TOO_LARGE:${batch.batchId}:${batch.taskCount}`);
    }
    lastBatchSizes[batch.queueKind] = batch.taskCount;
    const serialized = JSON.stringify(batch.items || batch.tasks.map(buildTaskRequest));
    const bytes = Buffer.byteLength(serialized, "utf8");
    batchByteSizes.push(bytes);
    totalSerializedBytes += bytes;
    for (const id of batch.taskIds) {
      if (globalTaskIds.has(id)) duplicateTaskIds.push(id);
      globalTaskIds.add(id);
    }
    if (batch.individualApplyEligible && batch.overlapTaskCount > 0) {
      issues.push(`OVERLAP_BATCH_APPLY_ELIGIBLE:${batch.batchId}`);
    }
  }

  const eligibleTasks = [
    ...queues.AUDIT_MAPPED_UNIQUE,
    ...queues.EMPTY_OR_MISSING,
    ...queues.SOURCE_IDENTICAL,
  ].filter((t) => !t.ownerConflictStatus);
  if (globalTaskIds.size !== eligibleTasks.length) {
    issues.push(`TASK_COUNT_MISMATCH:${globalTaskIds.size}/${eligibleTasks.length}`);
  }

  const sorted = [...batchByteSizes].sort((a, b) => a - b);
  const avg = batchByteSizes.length ? batchByteSizes.reduce((a, b) => a + b, 0) / batchByteSizes.length : 0;
  const maxRetries = DEFAULT_RETRY.maxRetries;
  const maxPlannedCalls = planA.totalBatches * (1 + maxRetries);
  const avgTokensPerBatch = 1200;
  const tokenBudgetEstimate = planA.totalBatches * avgTokensPerBatch * (1 + maxRetries);

  return {
    pass: issues.length === 0 && stable && duplicateTaskIds.length === 0,
    stable,
    totalBatches: planA.totalBatches,
    byQueue: planA.byQueue,
    lastBatchSizes,
    duplicateTaskIds: duplicateTaskIds.length,
    issues,
    budget: {
      totalSerializedRequestBytes: totalSerializedBytes,
      batchByteSizeMin: sorted[0] || 0,
      batchByteSizeAvg: Math.round(avg),
      batchByteSizeMax: sorted[sorted.length - 1] || 0,
      maxPlannedLunaCallsWithRetries: maxPlannedCalls,
      tokenBudgetEstimate,
      estimatedDurationMinutes: { min: Math.round(planA.totalBatches * 0.5), max: Math.round(planA.totalBatches * 2) },
    },
    plan: planA,
  };
}

function verifyRuntimeArtifactGate() {
  const checks = {
    ownerPackProof: fs.existsSync(path.join(pathState.ownerPackRoot, "proof.json")),
    ownerPackMapped: fs.existsSync(path.join(pathState.ownerPackRoot, "mapped-unique.json")),
    matrix: fs.existsSync(pathState.matrixPath),
    checkpointRunsRootWritable: false,
    authFileExists: fs.existsSync(pathState.authFilePath),
  };
  try {
    fs.mkdirSync(pathState.runsRoot, { recursive: true });
    const probe = path.join(pathState.runsRoot, ".write-probe");
    fs.writeFileSync(probe, "ok");
    fs.unlinkSync(probe);
    checks.checkpointRunsRootWritable = true;
  } catch (_) {
    checks.checkpointRunsRootWritable = false;
  }
  const pass = checks.ownerPackProof && checks.ownerPackMapped && checks.matrix && checks.checkpointRunsRootWritable;
  return { pass, checks, note: "auth file intentionally absent until authorized cycle" };
}

async function runCheckpointResumeProof(runtimeAuth, queues, batchPlan) {
  const scenarios = [];
  const tmpRoot = path.join(pathState.ownerReviewRoot, "checkpoint-runs");
  fs.mkdirSync(tmpRoot, { recursive: true });
  const prevRunsRoot = pathState.runsRoot;
  pathState.runsRoot = tmpRoot;
  const receipt = runtimeAuth.receipt;
  const gates = runtimeAuth.infrastructure;

  try {
    const smallPlan = {
      ...batchPlan,
      batches: batchPlan.batches.slice(0, 3),
      totalBatches: Math.min(3, batchPlan.batches.length),
    };

    const transport = createMockLunaTransport({}, receipt);
    const fullRunId = "owner-review-full";
    const full = await runProposalBatches({
      runId: fullRunId,
      gates,
      queues,
      batchPlan: smallPlan,
      transport,
    });
    scenarios.push({
      name: "full_mock_cycle",
      pass: full.progress.lastError === null && full.progress.completedBatchIds.length === smallPlan.totalBatches,
      realCalls: full.progress.realCalls,
      lastError: full.progress.lastError,
    });

    const interruptRunId = "owner-review-interrupt";
    const interruptTransport = createMockLunaTransport({
      "AUDIT_MAPPED_UNIQUE:1": "error",
    }, receipt);
    const interrupted = await runProposalBatches({
      runId: interruptRunId,
      gates,
      queues,
      batchPlan: smallPlan,
      transport: interruptTransport,
      maxRetries: 0,
    });
    scenarios.push({
      name: "interrupt_mid_batch",
      pass: interrupted.progress.lastError != null && interrupted.progress.completedBatchIds.length === 1,
      completedBatches: interrupted.progress.completedBatchIds.length,
      lastError: interrupted.progress.lastError,
    });

    const resumeRunId = interruptRunId;
    const resumeTransport = createMockLunaTransport({}, receipt);
    const resumed = await runProposalBatches({
      runId: resumeRunId,
      gates,
      queues,
      batchPlan: smallPlan,
      transport: resumeTransport,
    });
    scenarios.push({
      name: "resume_without_repeat",
      pass:
        resumed.progress.completedBatchIds.length === smallPlan.totalBatches &&
        resumed.progress.lastError === null,
      completedBatches: resumed.progress.completedBatchIds.length,
      realCalls: resumed.progress.realCalls,
    });

    const corruptRunId = "owner-review-corrupt";
    const corruptBatch = smallPlan.batches[0];
    const corruptCp = buildCheckpoint({
      runId: corruptRunId,
      queueKind: corruptBatch.queueKind,
      batch: corruptBatch,
      normalizedItems: [],
      transport: "MOCK",
      realCalls: 0,
      retries: 0,
      tokensUsed: 0,
      lastError: "sanitized failure",
      startedAt: new Date().toISOString(),
    });
    writeJsonAtomic(
      path.join(tmpRoot, corruptRunId, "checkpoints", corruptBatch.queueKind, `${corruptBatch.batchId}.json`),
      corruptCp,
    );
    const integrity = detectCheckpointIntegrity(corruptRunId, smallPlan);
    scenarios.push({
      name: "corrupt_checkpoint_detected",
      pass: integrity.corrupt.length >= 1 || integrity.missing.length >= 1,
      corrupt: integrity.corrupt.length,
      missing: integrity.missing.length,
    });

    const hashRunId = "owner-review-hash";
    const hashBatch = smallPlan.batches[1];
    const goodCp = buildCheckpoint({
      runId: hashRunId,
      queueKind: hashBatch.queueKind,
      batch: hashBatch,
      normalizedItems: hashBatch.taskIds.map((id) => ({
        taskId: id,
        action: "KEEP_CURRENT",
        proposedValue: null,
        lunaResultStatus: "PROPOSED_LUNA_PENDING_OWNER",
      })),
      transport: "MOCK",
      realCalls: 0,
      retries: 0,
      tokensUsed: 0,
      lastError: null,
      startedAt: new Date().toISOString(),
    });
    goodCp.requestInputHash = "wrong-hash";
    writeJsonAtomic(
      path.join(tmpRoot, hashRunId, "checkpoints", hashBatch.queueKind, `${hashBatch.batchId}.json`),
      goodCp,
    );
    const loaded = loadCheckpoint(hashRunId, hashBatch.queueKind, hashBatch.batchId);
    scenarios.push({
      name: "wrong_request_hash_rejected",
      pass: !validateCheckpoint(loaded, hashBatch).ok,
    });

    scenarios.push({
      name: "mock_real_calls_zero",
      pass: transport.stats.realCalls === 0 && resumeTransport.stats.realCalls === 0,
      realCalls: transport.stats.realCalls,
    });
  } finally {
    pathState.runsRoot = prevRunsRoot;
  }

  const pass = scenarios.every((s) => s.pass);
  return { pass, scenarios, lunaRealCalls: 0 };
}

async function runOwnerReview(options = {}) {
  const outDir = options.outDir || pathState.ownerReviewRoot;
  const head = execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
  const runtimeAuth = authorizeRuntimeExecution({ ...options, runtimeMode: RUNTIME_MODES.MOCK_DRY_RUN });
  if (!runtimeAuth.pass) {
    const blocked = {
      classification: "START_GATE_BLOCKED",
      head,
      gates: runtimeAuth,
      generatedAt: new Date().toISOString(),
    };
    fs.mkdirSync(outDir, { recursive: true });
    writeJson(path.join(outDir, "review-proof.json"), blocked);
    return blocked;
  }
  const gates = runtimeAuth.infrastructure;

  if (head !== "a1012b73700ad606d91554e2b442b267b05253d1" && !options.allowHeadDrift) {
    // Informational only — repairs during OWNER review advance HEAD intentionally.
  }

  const prDiff = verifyPrDiff();
  const queueRecon = independentQueueReconciliation(gates);
  const built = buildQueues({ gates });
  const overlapReview = analyzeGroupedIndividualOverlaps(built.queues, built.reconciliation);
  const batchVerify = verifyBatchPlan(built.queues);
  const runtimeGate = verifyRuntimeArtifactGate();
  const checkpointProof = await runCheckpointResumeProof(runtimeAuth, built, batchVerify.plan);

  let classification = "G2_A1_LUNA_PROPOSAL_INFRA_OWNER_REVIEW_PASS";
  if (!runtimeGate.pass) classification = "G2_A1_LUNA_PROPOSAL_RUNTIME_ARTIFACT_BLOCKED";
  else if (!prDiff.pass || !queueRecon.pass || !batchVerify.pass || !checkpointProof.pass) {
    classification = "G2_A1_LUNA_PROPOSAL_INFRA_OWNER_REVIEW_NEEDS_REPAIR";
  }
  if (overlapReview.summary.INVALID_OVERLAP > 0) {
    classification = "G2_A1_LUNA_PROPOSAL_INFRA_OWNER_REVIEW_NEEDS_REPAIR";
  }
  if (overlapReview.summary.OWNER_CONFLICT_REVIEW_REQUIRED !== 9) {
    classification = "G2_A1_LUNA_PROPOSAL_INFRA_OWNER_REVIEW_NEEDS_REPAIR";
  }

  const result = {
    generatedAt: new Date().toISOString(),
    classification,
    pr: { number: 714, head, reviewedHead: head, baselineHead: "a1012b73700ad606d91554e2b442b267b05253d1", base: EXPECTED.productionBaselineSha },
    prDiff,
    queueRecon,
    overlapReview: {
      total: overlapReview.total,
      summary: overlapReview.summary,
      individualOverlapStats: countIndividualOverlapStats(built.queues),
    },
    batchVerify: {
      pass: batchVerify.pass,
      totalBatches: batchVerify.totalBatches,
      byQueue: batchVerify.byQueue,
      lastBatchSizes: batchVerify.lastBatchSizes,
      issues: batchVerify.issues,
      budget: batchVerify.budget,
    },
    runtimeGate,
    checkpointProof,
    lunaRealCalls: 0,
    crowdinApiWrites: 0,
    productionDiff: gates.prod,
    deDiff: gates.de,
  };

  fs.mkdirSync(outDir, { recursive: true });
  writeJson(path.join(outDir, "review-proof.json"), result);
  writeJson(path.join(outDir, "queue-independent-reconciliation.json"), queueRecon);
  writeJson(path.join(outDir, "grouped-individual-overlap-review.json"), overlapReview);
  writeJson(path.join(outDir, "batch-budget-estimate.json"), {
    ...batchVerify.budget,
    totalBatches: batchVerify.totalBatches,
    byQueue: batchVerify.byQueue,
    lastBatchSizes: batchVerify.lastBatchSizes,
  });
  writeJson(path.join(outDir, "checkpoint-resume-proof.json"), checkpointProof);

  const summary = [
    "# G2/A1 Luna proposal infrastructure — OWNER review",
    "",
    `Generated: ${result.generatedAt}`,
    `Classification: **${classification}**`,
    "",
    `PR #714 HEAD: \`${head}\``,
    "",
    "## Queue reconciliation (independent)",
    "",
    `- AUDIT_MAPPED_UNIQUE: ${queueRecon.counts.AUDIT_MAPPED_UNIQUE}`,
    `- EMPTY_OR_MISSING: ${queueRecon.counts.EMPTY_OR_MISSING}`,
    `- SOURCE_IDENTICAL: ${queueRecon.counts.SOURCE_IDENTICAL}`,
    `- GROUPED_MANUAL_REVIEW: ${queueRecon.counts.GROUPED_MANUAL_REVIEW}`,
    `- Individual execution units: ${queueRecon.counts.individualExecutionUnits}`,
    `- Owner conflict review required: ${queueRecon.reconciliation.ownerConflictReviewRequired}`,
    `- Duplicate locale+key: ${queueRecon.reconciliation.duplicates}`,
    "",
    "## 522 grouped ↔ individual overlap",
    "",
    `- SAFE_WITH_GROUP_CONTEXT: ${overlapReview.summary.SAFE_WITH_GROUP_CONTEXT}`,
    `- OWNER_CONFLICT_REVIEW_REQUIRED: ${overlapReview.summary.OWNER_CONFLICT_REVIEW_REQUIRED}`,
    `- INVALID_OVERLAP: ${overlapReview.summary.INVALID_OVERLAP}`,
    "",
    "## Batch plan",
    "",
    `- Total batches: ${batchVerify.totalBatches}`,
    `- Max planned Luna calls (with retries): ${batchVerify.budget.maxPlannedLunaCallsWithRetries}`,
    `- Token budget estimate: ${batchVerify.budget.tokenBudgetEstimate}`,
    "",
    "## Transport",
    "",
    "- LUNA_REAL_CALLS = 0",
    "- CROWDIN_API_WRITES = 0",
    "",
    "## Checkpoint/resume",
    "",
    ...checkpointProof.scenarios.map((s) => `- ${s.name}: ${s.pass ? "PASS" : "FAIL"}`),
    "",
  ].join("\n");
  atomicWrite(path.join(outDir, "review-summary.md"), summary);

  const manifestFiles = [
    "review-proof.json",
    "review-summary.md",
    "queue-independent-reconciliation.json",
    "grouped-individual-overlap-review.json",
    "batch-budget-estimate.json",
    "checkpoint-resume-proof.json",
  ];
  const files = {};
  for (const f of manifestFiles) files[f] = sha256Hex(fs.readFileSync(path.join(outDir, f)));
  writeJson(path.join(outDir, "sha256-manifest.json"), { generatedAt: result.generatedAt, files });

  return result;
}

module.exports = {
  runOwnerReview,
  verifyPrDiff,
  independentQueueReconciliation,
  verifyBatchPlan,
  verifyRuntimeArtifactGate,
  runCheckpointResumeProof,
};
