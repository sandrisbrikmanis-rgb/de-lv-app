#!/usr/bin/env node
"use strict";
/**
 * Build unified map of all signed OWNER LABOT decisions (original + regression + FPR).
 */
const { applyKey, normalizeField } = require("./da-verbs-owner-path");
const { parseAllDecisions, dedupeLabot, normalizeText } = require("./da-verbs-signed-decisions");
const {
  parseAllRegressionDecisions,
  dedupeRegressionLabot,
} = require("./da-verbs-regression-decisions");
const {
  parseAllFinalPostRepairDecisions,
  dedupeFinalPostRepairLabot,
} = require("./da-verbs-final-post-repair-decisions");

function buildUnifiedOwnerExpectations() {
  const { rows: originalRows } = parseAllDecisions();
  const { rows: regressionRows } = parseAllRegressionDecisions();
  const { rows: fprRows } = parseAllFinalPostRepairDecisions();

  const { labot: originalLabot, conflicts: origConflicts } = dedupeLabot(originalRows);
  const { labot: regressionLabot, conflicts: regConflicts } = dedupeRegressionLabot(regressionRows);
  const { labot: fprLabot, conflicts: fprConflicts } = dedupeFinalPostRepairLabot(fprRows);

  const byKey = new Map();

  for (const row of originalLabot) {
    const key = applyKey(row.cardId, row.field);
    byKey.set(key, {
      key,
      cardId: row.cardId,
      field: normalizeField(row.field),
      ownerDecision: row.ownerNew,
      source: row.source || "original",
      track: "original",
      auditId: row.auditId,
    });
  }

  for (const row of regressionLabot) {
    const key = applyKey(row.cardId, row.field);
    byKey.set(key, {
      key,
      cardId: row.cardId,
      field: normalizeField(row.field),
      ownerDecision: row.ownerNew,
      source: row.source || "regression",
      track: row.regId?.includes("-RL-") ? "regression-linguistic" : "regression-reapply",
      auditId: row.regId || row.auditId,
    });
  }

  for (const row of fprLabot) {
    const key = applyKey(row.cardId, row.field);
    byKey.set(key, {
      key,
      cardId: row.cardId,
      field: normalizeField(row.field),
      ownerDecision: row.ownerNew,
      source: row.source || "final-post-repair",
      track: "final-post-repair",
      auditId: row.auditId,
    });
  }

  return {
    expectations: [...byKey.values()],
    originalCount: originalLabot.length,
    regressionCount: regressionLabot.length,
    fprCount: fprLabot.length,
    uniqueCount: byKey.size,
    origConflicts,
    regConflicts,
    fprConflicts,
  };
}

module.exports = { buildUnifiedOwnerExpectations, normalizeText };
