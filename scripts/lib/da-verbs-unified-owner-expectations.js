#!/usr/bin/env node
"use strict";
/**
 * Build unified map of all signed OWNER LABOT decisions (original + regression).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { applyKey, normalizeField } = require("./da-verbs-owner-path");
const { parseAllDecisions, dedupeLabot, normalizeText } = require("./da-verbs-signed-decisions");
const {
  parseAllRegressionDecisions,
  dedupeRegressionLabot,
} = require("./da-verbs-regression-decisions");

function buildUnifiedOwnerExpectations() {
  const { rows: originalRows } = parseAllDecisions();
  const { rows: regressionRows } = parseAllRegressionDecisions();

  const { labot: originalLabot, conflicts: origConflicts } = dedupeLabot(originalRows);
  const { labot: regressionLabot, conflicts: regConflicts } = dedupeRegressionLabot(regressionRows);

  const byKey = new Map();
  const sources = [];

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

  return {
    expectations: [...byKey.values()],
    originalCount: originalLabot.length,
    regressionCount: regressionLabot.length,
    uniqueCount: byKey.size,
    origConflicts,
    regConflicts,
  };
}

module.exports = { buildUnifiedOwnerExpectations, normalizeText };
