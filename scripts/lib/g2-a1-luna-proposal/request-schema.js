#!/usr/bin/env node
"use strict";

const { hashObject, hashSortedList, stableBatchId } = require("./hash");
const { SCHEMA_VERSION } = require("./constants");

function buildTaskRequest(task) {
  const requestInputHash = hashObject({
    taskId: task.taskId,
    taskKind: task.taskKind,
    locale: task.locale,
    crowdinKey: task.crowdinKey,
    objectIndex: task.objectIndex,
    cardId: task.cardId,
    fieldPath: task.fieldPath,
    lvSourceValue: task.lvSourceValue,
    currentValue: task.currentValue,
    severity: task.severity,
    category: task.category,
    auditId: task.auditId,
    identity: task.identity,
  });

  return {
    schemaVersion: SCHEMA_VERSION,
    taskId: task.taskId,
    taskKind: task.taskKind,
    locale: task.locale,
    repoLang: task.repoLang,
    crowdinKey: task.crowdinKey,
    objectIndex: task.objectIndex,
    cardId: task.cardId,
    fieldPath: task.fieldPath,
    lvSourceValue: task.lvSourceValue,
    currentValue: task.currentValue,
    deContextReadOnly: task.deContextReadOnly,
    severity: task.severity,
    category: task.category,
    auditId: task.auditId,
    findingStableId: task.findingStableId,
    explanation: task.explanation,
    identity: task.identity,
    requestInputHash,
  };
}

function buildBatchRequest(tasks, queueKind, batchIndex) {
  const taskIds = tasks.map((t) => t.taskId);
  const expectedIdsHash = hashSortedList(taskIds);
  const batchId = stableBatchId(queueKind, batchIndex, taskIds);
  const items = tasks.map(buildTaskRequest);
  const requestInputHash = hashObject({ batchId, queueKind, batchIndex, items });
  return {
    batchId,
    batchIndex,
    queueKind,
    taskIds,
    expectedIdsHash,
    requestInputHash,
    items,
  };
}

module.exports = { buildTaskRequest, buildBatchRequest };
