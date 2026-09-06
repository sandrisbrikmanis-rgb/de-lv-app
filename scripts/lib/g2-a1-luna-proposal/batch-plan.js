#!/usr/bin/env node
"use strict";

const { DEFAULT_BATCH_SIZES, TASK_KINDS } = require("./constants");
const { buildBatchRequest } = require("./request-schema");

function chunk(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

function buildBatchPlan(queues, options = {}) {
  const batchSizes = { ...DEFAULT_BATCH_SIZES, ...(options.batchSizes || {}) };
  const batches = [];
  let batchIndex = 0;

  for (const queueKind of [
    TASK_KINDS.AUDIT_MAPPED_UNIQUE,
    TASK_KINDS.EMPTY_OR_MISSING,
    TASK_KINDS.SOURCE_IDENTICAL,
  ]) {
    const tasks = (queues[queueKind] || []).filter((t) => !t.ownerConflictStatus);
    const size = batchSizes[queueKind] || 25;
    const chunks = chunk(tasks, size);
    for (const group of chunks) {
      const batch = buildBatchRequest(group, queueKind, batchIndex);
      batches.push({
        ...batch,
        tasks: group,
        taskCount: group.length,
        individualApplyEligible: group.every((t) => t.individualApplyEligible !== false),
        overlapTaskCount: group.filter((t) => t.groupedOverlap).length,
      });
      batchIndex += 1;
    }
  }

  const byQueue = {};
  for (const b of batches) {
    byQueue[b.queueKind] = (byQueue[b.queueKind] || 0) + 1;
  }

  return {
    totalBatches: batches.length,
    batches,
    byQueue,
    batchSizes,
  };
}

module.exports = { buildBatchPlan, chunk };
