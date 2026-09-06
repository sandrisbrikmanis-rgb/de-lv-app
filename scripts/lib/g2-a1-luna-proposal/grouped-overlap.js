#!/usr/bin/env node
"use strict";

const { unitKey } = require("./hash");

const OVERLAP_CLASS = Object.freeze({
  SAFE_WITH_GROUP_CONTEXT: "SAFE_WITH_GROUP_CONTEXT",
  OWNER_CONFLICT_REVIEW_REQUIRED: "OWNER_CONFLICT_REVIEW_REQUIRED",
  INVALID_OVERLAP: "INVALID_OVERLAP",
});

function groupedKeysForEntry(entry) {
  const keys = new Set();
  if (entry.crowdinKey) keys.add(entry.crowdinKey);
  if (Array.isArray(entry.mappedKeys)) entry.mappedKeys.forEach((k) => keys.add(k));
  if (Array.isArray(entry.resolvedKeys)) entry.resolvedKeys.forEach((k) => keys.add(k));
  return [...keys];
}

function hasFullExplicitSetContext(entry) {
  return (
    entry.subKind === "MAPPED_EXPLICIT_SET" &&
    Array.isArray(entry.mappedKeys) &&
    entry.mappedKeys.length > 0 &&
    entry.keyCurrents &&
    typeof entry.keyCurrents === "object" &&
    entry.mappingProvenance
  );
}

function extractGroupedContextReadOnly(entry) {
  if (hasFullExplicitSetContext(entry)) {
    return {
      subKind: entry.subKind,
      auditId: entry.auditId,
      objectIndex: entry.objectIndex,
      cardId: entry.cardId,
      fieldPath: entry.fieldPath,
      mappedKeys: entry.mappedKeys,
      keyCurrents: entry.keyCurrents,
      mappingProvenance: entry.mappingProvenance,
    };
  }
  if (entry.subKind === "PARTIAL_MAPPING_REVIEW_REQUIRED") {
    return {
      subKind: entry.subKind,
      auditId: entry.auditId,
      objectIndex: entry.objectIndex,
      cardId: entry.cardId,
      fieldPath: entry.fieldPath,
      resolvedKeys: entry.resolvedKeys,
      unresolvedReason: entry.unresolvedReason,
      deField: entry.deField,
      contextComplete: false,
    };
  }
  if (entry.subKind === "GROUP_REVIEW_REQUIRED") {
    return {
      subKind: entry.subKind,
      auditId: entry.auditId,
      objectIndex: entry.objectIndex,
      cardId: entry.cardId,
      fieldPath: entry.fieldPath,
      subtype: entry.subtype,
      reason: entry.reason,
      contextComplete: false,
    };
  }
  return null;
}

function classifyGroupedEntryOverlap(groupedEntry, individualTask) {
  if (!individualTask) return OVERLAP_CLASS.INVALID_OVERLAP;
  if (hasFullExplicitSetContext(groupedEntry)) return OVERLAP_CLASS.SAFE_WITH_GROUP_CONTEXT;
  if (groupedEntry.subKind === "PARTIAL_MAPPING_REVIEW_REQUIRED") {
    return OVERLAP_CLASS.OWNER_CONFLICT_REVIEW_REQUIRED;
  }
  if (groupedEntry.subKind === "GROUP_REVIEW_REQUIRED") {
    return OVERLAP_CLASS.OWNER_CONFLICT_REVIEW_REQUIRED;
  }
  return OVERLAP_CLASS.OWNER_CONFLICT_REVIEW_REQUIRED;
}

function buildGroupedContextIndex(groupedManualReview) {
  const byLocaleKey = new Map();
  for (const entry of groupedManualReview) {
    for (const key of groupedKeysForEntry(entry)) {
      const uk = unitKey(entry.locale, key);
      if (!byLocaleKey.has(uk)) byLocaleKey.set(uk, []);
      const list = byLocaleKey.get(uk);
      if (!list.some((e) => e.auditId === entry.auditId && e.subKind === entry.subKind)) {
        list.push(entry);
      }
    }
  }
  return byLocaleKey;
}

function annotateIndividualTaskOverlaps(task, groupedByLocaleKey) {
  const uk = unitKey(task.locale, task.crowdinKey);
  const groupedEntries = groupedByLocaleKey.get(uk) || [];
  if (!groupedEntries.length) {
    return {
      ...task,
      groupedOverlap: false,
      overlapClassification: null,
      groupedContextReadOnly: null,
      individualApplyEligible: true,
      ownerConflictStatus: null,
    };
  }

  const contexts = [];
  let worst = OVERLAP_CLASS.SAFE_WITH_GROUP_CONTEXT;
  for (const entry of groupedEntries) {
    const cls = classifyGroupedEntryOverlap(entry, task);
    if (cls === OVERLAP_CLASS.INVALID_OVERLAP) worst = cls;
    else if (cls === OVERLAP_CLASS.OWNER_CONFLICT_REVIEW_REQUIRED) worst = cls;
    const ctx = extractGroupedContextReadOnly(entry);
    if (ctx) contexts.push(ctx);
  }

  const ownerConflictStatus =
    worst === OVERLAP_CLASS.OWNER_CONFLICT_REVIEW_REQUIRED
      ? "OWNER_CONFLICT_REVIEW_REQUIRED"
      : null;

  return {
    ...task,
    groupedOverlap: true,
    overlapClassification: worst,
    groupedContextReadOnly: contexts.length ? contexts : null,
    individualApplyEligible: false,
    ownerConflictStatus,
  };
}

function analyzeGroupedIndividualOverlaps(queues, reconciliation) {
  const individualByKey = new Map();
  for (const kind of ["AUDIT_MAPPED_UNIQUE", "EMPTY_OR_MISSING", "SOURCE_IDENTICAL"]) {
    for (const task of queues[kind] || []) {
      individualByKey.set(unitKey(task.locale, task.crowdinKey), task);
    }
  }

  const rows = [];
  const summary = {
    SAFE_WITH_GROUP_CONTEXT: 0,
    OWNER_CONFLICT_REVIEW_REQUIRED: 0,
    INVALID_OVERLAP: 0,
  };

  for (const groupedEntry of reconciliation.overlapWithGrouped) {
    const individualTask = individualByKey.get(unitKey(groupedEntry.locale, groupedEntry.crowdinKey));
    const classification = classifyGroupedEntryOverlap(groupedEntry, individualTask);
    summary[classification] += 1;

    const groupedFindings = groupedEntriesForOverlap(groupedEntry, queues.GROUPED_MANUAL_REVIEW);
    const canChangeInterpretation =
      groupedEntry.subKind === "MAPPED_EXPLICIT_SET" ||
      groupedEntry.subKind === "PARTIAL_MAPPING_REVIEW_REQUIRED";

    rows.push({
      locale: groupedEntry.locale,
      crowdinKey: groupedEntry.crowdinKey,
      groupedSubKind: groupedEntry.subKind,
      groupedAuditId: groupedEntry.auditId,
      individualTaskId: individualTask?.taskId || null,
      individualTaskKind: individualTask?.taskKind || null,
      individualAuditId: individualTask?.auditId || null,
      classification,
      groupedContextInRequest:
        classification === OVERLAP_CLASS.SAFE_WITH_GROUP_CONTEXT &&
        Boolean(individualTask?.groupedContextReadOnly?.length),
      canChangeValueInterpretation: canChangeInterpretation,
      groupedFindingCount: groupedFindings.length,
      individualApplyEligible: individualTask?.individualApplyEligible ?? null,
      ownerConflictStatus: individualTask?.ownerConflictStatus ?? null,
    });
  }

  return { rows, summary, total: rows.length };
}

function groupedEntriesForOverlap(groupedEntry, groupedManualReview) {
  return groupedManualReview.filter(
    (g) => g.auditId === groupedEntry.auditId && g.subKind === groupedEntry.subKind,
  );
}

function countIndividualOverlapStats(queues) {
  const kinds = ["AUDIT_MAPPED_UNIQUE", "EMPTY_OR_MISSING", "SOURCE_IDENTICAL"];
  const stats = {
    withGroupedOverlap: 0,
    ownerConflictReviewRequired: 0,
    safeWithGroupContext: 0,
    applyEligible: 0,
  };
  for (const kind of kinds) {
    for (const task of queues[kind] || []) {
      if (task.groupedOverlap) stats.withGroupedOverlap += 1;
      if (task.ownerConflictStatus === "OWNER_CONFLICT_REVIEW_REQUIRED") {
        stats.ownerConflictReviewRequired += 1;
      } else if (task.groupedOverlap) {
        stats.safeWithGroupContext += 1;
      }
      if (task.individualApplyEligible) stats.applyEligible += 1;
    }
  }
  return stats;
}

module.exports = {
  OVERLAP_CLASS,
  groupedKeysForEntry,
  hasFullExplicitSetContext,
  extractGroupedContextReadOnly,
  classifyGroupedEntryOverlap,
  buildGroupedContextIndex,
  annotateIndividualTaskOverlaps,
  analyzeGroupedIndividualOverlaps,
  countIndividualOverlapStats,
};
