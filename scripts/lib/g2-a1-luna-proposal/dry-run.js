#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { runStartGates } = require("./identity-gates");
const { buildQueues } = require("./queue-builder");
const { buildBatchPlan } = require("./batch-plan");
const { EXPECTED, pathState, TASK_KINDS } = require("./constants");
const { sha256Hex } = require("./hash");

function atomicWrite(p, data) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  const tmp = `${p}.tmp.${process.pid}`;
  fs.writeFileSync(tmp, data);
  fs.renameSync(tmp, p);
}

function writeJson(p, obj) {
  atomicWrite(p, JSON.stringify(obj, null, 2) + "\n");
}

function renderQueueSummary(result) {
  return [
    "# G2/A1 Luna proposal queue summary",
    "",
    `Generated: ${result.generatedAt}`,
    `Classification: **${result.classification}**`,
    "",
    "## Queue counts",
    "",
    "| Queue | Count | Expected |",
    "|-------|------:|---------:|",
    ...Object.entries(EXPECTED.queueCounts).map(
      ([k, v]) => `| ${k} | ${result.counts[k]} | ${v} |`,
    ),
    "",
    "## Reconciliation",
    "",
    `- Duplicate locale+key in individual queues: ${result.reconciliation.duplicates.length}`,
    `- Excluded empty (mapped overlap): ${result.reconciliation.excludedEmptyDueToMappedUnique}`,
    `- Excluded source-identical (prior queue overlap): ${result.reconciliation.excludedSourceDueToPriorQueues}`,
    `- Grouped overlap with individual keys: ${result.reconciliation.overlapWithGrouped.length}`,
    "",
    "## Batch plan",
    "",
    `- Total batches: ${result.batchPlan.totalBatches}`,
    `- AUDIT_MAPPED_UNIQUE batches: ${result.batchPlan.byQueue[TASK_KINDS.AUDIT_MAPPED_UNIQUE] || 0}`,
    `- EMPTY_OR_MISSING batches: ${result.batchPlan.byQueue[TASK_KINDS.EMPTY_OR_MISSING] || 0}`,
    `- SOURCE_IDENTICAL batches: ${result.batchPlan.byQueue[TASK_KINDS.SOURCE_IDENTICAL] || 0}`,
    "",
    "## Transport",
    "",
    "- Luna real calls: 0 (dry-run only)",
    "- Crowdin writes: 0",
    "",
  ].join("\n");
}

function runDryRun(options = {}) {
  const outDir = options.outDir || pathState.artifactsRoot;
  const gates = runStartGates(options);
  if (!gates.pass) {
    return { classification: "START_GATE_BLOCKED", gates, generatedAt: new Date().toISOString() };
  }

  const built = buildQueues({ ...options, gates });
  const { counts, reconciliation, queues } = built;

  const countOk =
    counts.AUDIT_MAPPED_UNIQUE === EXPECTED.queueCounts.AUDIT_MAPPED_UNIQUE &&
    counts.EMPTY_OR_MISSING === EXPECTED.queueCounts.EMPTY_OR_MISSING &&
    counts.SOURCE_IDENTICAL === EXPECTED.queueCounts.SOURCE_IDENTICAL &&
    counts.GROUPED_MANUAL_REVIEW === EXPECTED.queueCounts.GROUPED_MANUAL_REVIEW &&
    reconciliation.duplicates.length === 0;

  const batchPlan = buildBatchPlan(queues, options);
  const generatedAt = new Date().toISOString();

  let classification = "G2_A1_LUNA_PROPOSAL_INFRA_READY_FOR_OWNER_REVIEW";
  if (!countOk) classification = "G2_A1_LUNA_PROPOSAL_QUEUE_INTEGRITY_BLOCKED";

  const result = {
    generatedAt,
    classification,
    gates: { pass: gates.pass, originMain: gates.originMain, sourceSha: gates.sourceSha },
    counts,
    rawCounts: {
      EMPTY_OR_MISSING: EXPECTED.rawQueueCounts.EMPTY_OR_MISSING,
      SOURCE_IDENTICAL: EXPECTED.rawQueueCounts.SOURCE_IDENTICAL,
    },
    reconciliation,
    batchPlan: {
      totalBatches: batchPlan.totalBatches,
      byQueue: batchPlan.byQueue,
      batchSizes: batchPlan.batchSizes,
    },
    lunaRealCalls: 0,
    crowdinApiWrites: 0,
  };

  if (options.writeArtifacts !== false) {
    fs.mkdirSync(outDir, { recursive: true });
    writeJson(path.join(outDir, "queue-proof.json"), {
      generatedAt: result.generatedAt,
      classification: result.classification,
      counts: result.counts,
      rawCounts: result.rawCounts,
      reconciliation: {
        duplicates: result.reconciliation.duplicates.length,
        excludedEmptyDueToMappedUnique: result.reconciliation.excludedEmptyDueToMappedUnique,
        excludedSourceDueToPriorQueues: result.reconciliation.excludedSourceDueToPriorQueues,
        overlapWithGrouped: result.reconciliation.overlapWithGrouped.length,
      },
      batchPlan: result.batchPlan,
      lunaRealCalls: 0,
      crowdinApiWrites: 0,
    });
    atomicWrite(path.join(outDir, "queue-summary.md"), renderQueueSummary(result));
    writeJson(path.join(outDir, "batch-plan.json"), batchPlan);
    writeJson(path.join(outDir, "grouped-manual-review.json"), {
      count: queues.GROUPED_MANUAL_REVIEW.length,
      rows: queues.GROUPED_MANUAL_REVIEW,
    });
    writeJson(path.join(outDir, "dry-run-proof.json"), {
      generatedAt: result.generatedAt,
      classification: result.classification,
      counts: result.counts,
      rawCounts: result.rawCounts,
      reconciliation: {
        duplicates: result.reconciliation.duplicates.length,
        excludedEmptyDueToMappedUnique: result.reconciliation.excludedEmptyDueToMappedUnique,
        excludedSourceDueToPriorQueues: result.reconciliation.excludedSourceDueToPriorQueues,
        overlapWithGrouped: result.reconciliation.overlapWithGrouped.length,
      },
      batchPlan: result.batchPlan,
      lunaRealCalls: 0,
      crowdinApiWrites: 0,
    });

    const manifestFiles = [
      "queue-proof.json",
      "queue-summary.md",
      "batch-plan.json",
      "grouped-manual-review.json",
      "dry-run-proof.json",
    ];
    const files = {};
    for (const f of manifestFiles) files[f] = sha256Hex(fs.readFileSync(path.join(outDir, f)));
    writeJson(path.join(outDir, "sha256-manifest.json"), { generatedAt, files });
  }

  return result;
}

module.exports = { runDryRun, renderQueueSummary };
