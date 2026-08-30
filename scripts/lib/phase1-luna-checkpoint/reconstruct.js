#!/usr/bin/env node
"use strict";

const { listScopeCheckpoints } = require("./batch-checkpoint");

function reconstructFromCheckpoints(runId, scopeIds) {
  const allCheckpoints = [];
  const stats = {
    batches: 0,
    objectsProcessed: 0,
    objectsReturned: 0,
    tokensUsed: 0,
    realCalls: 0,
    retries: 0,
    skippedBatches: 0,
    repeatedBatches: 0,
    findings: [],
    duplicateFindings: 0,
    duplicateObjects: 0,
  };

  const seenBatchIds = new Set();
  const seenObjectKeys = new Set();
  const seenFindingKeys = new Set();

  for (const scopeId of scopeIds) {
    const checkpoints = listScopeCheckpoints(runId, scopeId).filter((cp) => cp.status === "PASS");
    for (const cp of checkpoints) {
      if (seenBatchIds.has(cp.batchId)) {
        stats.repeatedBatches += 1;
        continue;
      }
      seenBatchIds.add(cp.batchId);
      allCheckpoints.push(cp);
    }
  }

  allCheckpoints.sort((a, b) => {
    if (a.scopeId !== b.scopeId) return a.scopeId.localeCompare(b.scopeId);
    return (a.batchIndex ?? 0) - (b.batchIndex ?? 0);
  });

  for (const cp of allCheckpoints) {
    stats.batches += 1;
    stats.tokensUsed += cp.tokensUsed || 0;
    stats.retries += Math.max(0, (cp.attemptCount || 1) - 1);

    for (const id of cp.expectedObjectIds || []) {
      const key = `${cp.scopeId}|${id}`;
      if (seenObjectKeys.has(key)) stats.duplicateObjects += 1;
      seenObjectKeys.add(key);
      stats.objectsProcessed += 1;
    }
    stats.objectsReturned += (cp.returnedObjectIds || []).length;

    for (const finding of cp.normalizedFindings || []) {
      const fKey = finding.findingStableId || finding.dedupKey || finding.auditId;
      if (seenFindingKeys.has(fKey)) {
        stats.duplicateFindings += 1;
        continue;
      }
      seenFindingKeys.add(fKey);
      stats.findings.push(finding);
    }
  }

  return {
    checkpoints: allCheckpoints,
    findings: stats.findings,
    stats,
  };
}

function compareReconstruction(a, b, { ignoreTimeFields = true } = {}) {
  const stripTime = (obj) => {
    if (!ignoreTimeFields || !obj || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map(stripTime);
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (["startedAt", "updatedAt", "heartbeatAt", "endedAt", "generatedAt"].includes(k)) continue;
      out[k] = stripTime(v);
    }
    return out;
  };

  const findingsA = stripTime(a.findings).map((f) => f.findingStableId).sort();
  const findingsB = stripTime(b.findings).map((f) => f.findingStableId).sort();
  const metricsA = {
    batches: a.stats.batches,
    objectsProcessed: a.stats.objectsProcessed,
    duplicateFindings: a.stats.duplicateFindings,
    duplicateObjects: a.stats.duplicateObjects,
    repeatedBatches: a.stats.repeatedBatches,
    tokensUsed: a.stats.tokensUsed,
  };
  const metricsB = {
    batches: b.stats.batches,
    objectsProcessed: b.stats.objectsProcessed,
    duplicateFindings: b.stats.duplicateFindings,
    duplicateObjects: b.stats.duplicateObjects,
    repeatedBatches: b.stats.repeatedBatches,
    tokensUsed: b.stats.tokensUsed,
  };

  return {
    findingsMatch: JSON.stringify(findingsA) === JSON.stringify(findingsB),
    metricsMatch: JSON.stringify(metricsA) === JSON.stringify(metricsB),
    findingsA: findingsA.length,
    findingsB: findingsB.length,
  };
}

module.exports = {
  reconstructFromCheckpoints,
  compareReconstruction,
};
