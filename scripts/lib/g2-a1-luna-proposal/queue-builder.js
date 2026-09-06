#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { TASK_KINDS, pathState } = require("./constants");
const { stableTaskId, unitKey } = require("./hash");

function isProperNounOrSymbol(s) {
  const t = String(s || "").trim();
  if (!t) return false;
  if (/^[\d\s.,:;!?+\-–—%€$£()'"«»„“”[\]{}\\/|@#&*<>]+$/.test(t)) return true;
  if (/^[A-ZÄÖÜ][a-zäöüß]+(\s+[A-ZÄÖÜ][a-zäöüß]+)*$/.test(t)) return true;
  return false;
}

function classifySourceIdenticalPreliminary(row) {
  if (row.hasValidatedFinding) return "NEEDS_OWNER_REVIEW";
  if (row.subClass === "PROPER_NOUN_OR_SYMBOL" || isProperNounOrSymbol(row.value)) return "INTENTIONAL_SAME_CANDIDATE";
  return "TRANSLATION_REQUIRED";
}

function loadOwnerPack(ownerPackRoot = pathState.ownerPackRoot) {
  const read = (name) => JSON.parse(fs.readFileSync(path.join(ownerPackRoot, name), "utf8"));
  return {
    proof: read("proof.json"),
    mappedUnique: read("mapped-unique.json").rows,
    explicitSet: read("explicit-set-review.json").rows,
    partial: read("partial-mapping-review.json").rows,
    groupReview: read("group-review.json").rows,
    emptyMissing: read("empty-missing-review.json").rows,
    sourceIdentical: read("source-identical-review.json").rows,
  };
}

function buildIdentityContext(pack, gates) {
  return {
    originMain: gates.originMain,
    matrixIdentitySha: pack.proof.gates?.identity?.actual || null,
    ownerPackClassification: pack.proof.classification,
    ownerPackGeneratedAt: pack.proof.generatedAt,
    sourceSha256: gates.sourceSha,
    resolverVersion: pack.proof.resolverVersion,
  };
}

function buildAuditMappedUniqueTasks(rows, identity, deByAuditId) {
  return rows.map((row) => {
    const taskId = stableTaskId(TASK_KINDS.AUDIT_MAPPED_UNIQUE, row.crowdinLocaleId, row.crowdinKey);
    return {
      taskId,
      taskKind: TASK_KINDS.AUDIT_MAPPED_UNIQUE,
      locale: row.crowdinLocaleId,
      repoLang: row.repoLang,
      crowdinKey: row.crowdinKey,
      objectIndex: row.objectIndex,
      cardId: row.cardId,
      fieldPath: row.fieldPath,
      lvSourceValue: row.lvSource,
      currentValue: row.remoteValue || null,
      deContextReadOnly: deByAuditId.get(row.auditId) || null,
      severity: row.severity,
      category: row.category,
      auditId: row.auditId,
      findingStableId: row.findingStableId,
      explanation: `${row.severity}/${row.category} on ${row.fieldPath}`,
      identity,
      ownerStatus: "PENDING_OWNER_DECISION",
      lunaResultStatus: null,
    };
  });
}

function buildEmptyOrMissingTasks(rows, mappedKeys, identity) {
  const tasks = [];
  for (const row of rows) {
    const key = unitKey(row.crowdinLocaleId, row.crowdinKey);
    if (mappedKeys.has(key)) continue;
    const taskId = stableTaskId(TASK_KINDS.EMPTY_OR_MISSING, row.crowdinLocaleId, row.crowdinKey);
    tasks.push({
      taskId,
      taskKind: TASK_KINDS.EMPTY_OR_MISSING,
      locale: row.crowdinLocaleId,
      repoLang: row.repoLang,
      crowdinKey: row.crowdinKey,
      objectIndex: null,
      cardId: null,
      fieldPath: row.crowdinKey,
      lvSourceValue: row.lvSource,
      currentValue: null,
      deContextReadOnly: null,
      severity: null,
      category: null,
      auditId: null,
      findingStableId: null,
      explanation: row.reason,
      identity,
      ownerStatus: "TRANSLATION_REQUIRED_PENDING_OWNER",
      preliminaryClass: "TRANSLATION_REQUIRED",
      lunaResultStatus: null,
    });
  }
  return tasks;
}

function buildSourceIdenticalTasks(rows, mappedKeys, identity) {
  const tasks = [];
  for (const row of rows) {
    const key = unitKey(row.crowdinLocaleId, row.crowdinKey);
    if (mappedKeys.has(key)) continue;
    const preliminaryClass = classifySourceIdenticalPreliminary(row);
    const taskId = stableTaskId(TASK_KINDS.SOURCE_IDENTICAL, row.crowdinLocaleId, row.crowdinKey);
    tasks.push({
      taskId,
      taskKind: TASK_KINDS.SOURCE_IDENTICAL,
      locale: row.crowdinLocaleId,
      repoLang: row.repoLang,
      crowdinKey: row.crowdinKey,
      objectIndex: null,
      cardId: null,
      fieldPath: row.crowdinKey,
      lvSourceValue: row.lvValue,
      currentValue: row.value,
      deContextReadOnly: null,
      severity: null,
      category: null,
      auditId: row.validatedAuditId,
      findingStableId: null,
      explanation: `source-identical withheld; subClass=${row.subClass}`,
      identity,
      ownerStatus: "SOURCE_IDENTICAL_PENDING_OWNER",
      preliminaryClass,
      lunaResultStatus: null,
    });
  }
  return tasks;
}

function buildGroupedManualReviewTasks(explicitSet, partial, groupReview, identity) {
  const rows = [];
  for (const row of explicitSet) {
    rows.push({
      taskId: stableTaskId(TASK_KINDS.GROUPED_MANUAL_REVIEW, row.crowdinLocaleId || row.repoLang, `${row.auditId}:explicit`),
      taskKind: TASK_KINDS.GROUPED_MANUAL_REVIEW,
      subKind: "MAPPED_EXPLICIT_SET",
      locale: row.crowdinLocaleId,
      repoLang: row.repoLang,
      crowdinKey: row.mappedKeys?.[0] || null,
      objectIndex: row.objectIndex,
      cardId: row.cardId,
      fieldPath: row.fieldPath,
      mappedKeys: row.mappedKeys,
      keyCurrents: row.keyCurrents,
      mappingProvenance: row.mappingProvenance,
      auditId: row.auditId,
      identity,
      ownerStatus: "GROUPED_OWNER_REVIEW_REQUIRED",
      individualApplyEligible: false,
    });
  }
  for (const row of partial) {
    rows.push({
      taskId: stableTaskId(TASK_KINDS.GROUPED_MANUAL_REVIEW, row.crowdinLocaleId || row.repoLang, `${row.auditId}:partial`),
      taskKind: TASK_KINDS.GROUPED_MANUAL_REVIEW,
      subKind: "PARTIAL_MAPPING_REVIEW_REQUIRED",
      locale: row.crowdinLocaleId,
      repoLang: row.repoLang,
      crowdinKey: row.resolvedKeys?.[0] || null,
      objectIndex: row.objectIndex,
      cardId: row.cardId,
      fieldPath: row.fieldPath,
      resolvedKeys: row.resolvedKeys,
      unresolvedReason: row.unresolvedReason,
      deField: row.deField,
      auditId: row.auditId,
      identity,
      ownerStatus: "MANUAL_MAPPING_REVIEW_REQUIRED",
      individualApplyEligible: false,
    });
  }
  for (const row of groupReview) {
    rows.push({
      taskId: stableTaskId(TASK_KINDS.GROUPED_MANUAL_REVIEW, row.crowdinLocaleId || row.repoLang, `${row.auditId}:group`),
      taskKind: TASK_KINDS.GROUPED_MANUAL_REVIEW,
      subKind: "GROUP_REVIEW_REQUIRED",
      locale: row.crowdinLocaleId,
      repoLang: row.repoLang,
      crowdinKey: null,
      objectIndex: row.objectIndex,
      cardId: row.cardId,
      fieldPath: row.fieldPath,
      subtype: row.subtype,
      reason: row.reason,
      auditId: row.auditId,
      identity,
      ownerStatus: "GROUP_REVIEW_REQUIRED",
      individualApplyEligible: false,
    });
  }
  return rows;
}

function buildDeContextMap(matrixPath) {
  const matrix = JSON.parse(fs.readFileSync(matrixPath, "utf8"));
  const map = new Map();
  for (const f of matrix.findings || []) {
    if (f.group === "g2" && f.dataset === "a1" && f.auditId) {
      map.set(f.auditId, f.de || null);
    }
  }
  return map;
}

function buildQueues(options = {}) {
  const ownerPackRoot = options.ownerPackRoot || pathState.ownerPackRoot;
  const matrixPath = options.matrixPath || pathState.matrixPath;
  const gates = options.gates || { originMain: null, sourceSha: null };
  const pack = loadOwnerPack(ownerPackRoot);
  const identity = buildIdentityContext(pack, gates);
  const deByAuditId = buildDeContextMap(matrixPath);

  const auditMappedUnique = buildAuditMappedUniqueTasks(pack.mappedUnique, identity, deByAuditId);
  const mappedKeys = new Set(auditMappedUnique.map((t) => unitKey(t.locale, t.crowdinKey)));

  const emptyOrMissing = buildEmptyOrMissingTasks(pack.emptyMissing, mappedKeys, identity);
  const emptyKeys = new Set(emptyOrMissing.map((t) => unitKey(t.locale, t.crowdinKey)));
  const sourceIdentical = buildSourceIdenticalTasks(pack.sourceIdentical, new Set([...mappedKeys, ...emptyKeys]), identity);
  const groupedManualReview = buildGroupedManualReviewTasks(
    pack.explicitSet,
    pack.partial,
    pack.groupReview,
    identity,
  );

  const allIndividual = [...auditMappedUnique, ...emptyOrMissing, ...sourceIdentical];
  const activeKeys = new Set();
  const duplicates = [];
  for (const task of allIndividual) {
    const key = unitKey(task.locale, task.crowdinKey);
    if (activeKeys.has(key)) duplicates.push({ key, taskId: task.taskId, taskKind: task.taskKind });
    else activeKeys.add(key);
  }

  const overlapWithGrouped = groupedManualReview.filter((t) => t.crowdinKey && activeKeys.has(unitKey(t.locale, t.crowdinKey)));

  return {
    queues: {
      AUDIT_MAPPED_UNIQUE: auditMappedUnique,
      EMPTY_OR_MISSING: emptyOrMissing,
      SOURCE_IDENTICAL: sourceIdentical,
      GROUPED_MANUAL_REVIEW: groupedManualReview,
    },
    counts: {
      AUDIT_MAPPED_UNIQUE: auditMappedUnique.length,
      EMPTY_OR_MISSING: emptyOrMissing.length,
      SOURCE_IDENTICAL: sourceIdentical.length,
      GROUPED_MANUAL_REVIEW: groupedManualReview.length,
      individualExecutionUnits: allIndividual.length,
    },
    reconciliation: {
      duplicates,
      overlapWithGrouped,
      excludedEmptyDueToMappedUnique: pack.emptyMissing.length - emptyOrMissing.length,
      excludedSourceDueToPriorQueues:
        pack.sourceIdentical.length - sourceIdentical.length,
    },
    identity,
  };
}

module.exports = {
  loadOwnerPack,
  buildQueues,
  classifySourceIdenticalPreliminary,
  isProperNounOrSymbol,
};
