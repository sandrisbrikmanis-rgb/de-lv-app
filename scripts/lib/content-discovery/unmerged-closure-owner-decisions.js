#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");

const DEFAULT_DECISIONS_PATH = path.join(
  ROOT,
  "reports",
  "unmerged-closure-owner-decisions.json",
);

const CATEGORY_INTEGRATED = "INTEGRATED_HISTORICAL";
const CATEGORY_CLOSED = "CLOSED_SUPERSEDED";
const CATEGORY_ACTIVE = "ACTIVE_UNMERGED_CLOSURE";
const CATEGORY_NEEDS_OWNER = "NEEDS_OWNER_REVIEW";

const RESOLVED_CATEGORIES = new Set([
  CATEGORY_INTEGRATED,
  CATEGORY_CLOSED,
  CATEGORY_ACTIVE,
  "DOCUMENTED_EXCEPTION",
]);

function loadOwnerDecisions(options = {}) {
  const decisionsPath = options.decisionsPath || DEFAULT_DECISIONS_PATH;
  if (!fs.existsSync(decisionsPath)) {
    return {
      ok: true,
      path: decisionsPath,
      exists: false,
      decisions: [],
      byHeadRef: new Map(),
      errors: [],
    };
  }

  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(decisionsPath, "utf8"));
  } catch (e) {
    return {
      ok: false,
      path: decisionsPath,
      exists: true,
      decisions: [],
      byHeadRef: new Map(),
      errors: [`Invalid JSON: ${e.message}`],
    };
  }

  const decisions = Array.isArray(parsed?.decisions) ? parsed.decisions : [];
  const byHeadRef = new Map();
  const errors = [];

  for (const [index, row] of decisions.entries()) {
    const headRefName = row?.headRefName?.trim();
    const resolvedCategory = row?.resolvedCategory?.trim();
    const ownerNote = row?.ownerNote?.trim();

    if (!headRefName) {
      errors.push(`decisions[${index}]: missing headRefName`);
      continue;
    }
    if (!resolvedCategory || !RESOLVED_CATEGORIES.has(resolvedCategory)) {
      errors.push(
        `decisions[${index}] (${headRefName}): invalid resolvedCategory "${resolvedCategory || ""}"`,
      );
      continue;
    }
    if (!ownerNote) {
      errors.push(`decisions[${index}] (${headRefName}): missing ownerNote`);
      continue;
    }
    if (byHeadRef.has(headRefName)) {
      errors.push(`decisions[${index}] (${headRefName}): duplicate headRefName`);
      continue;
    }

    byHeadRef.set(headRefName, {
      headRefName,
      resolvedCategory,
      ownerNote,
      baselineComparison: row?.baselineComparison?.trim() || null,
      decidedAt: row?.decidedAt || null,
      decidedBy: row?.decidedBy || parsed?.decidedBy || "OWNER",
      prNumber: row?.prNumber ?? null,
    });
  }

  return {
    ok: errors.length === 0,
    path: decisionsPath,
    exists: true,
    schemaVersion: parsed?.schemaVersion ?? null,
    module: parsed?.module ?? null,
    decisions,
    byHeadRef,
    errors,
  };
}

/**
 * Apply OWNER decisions on top of auto-classification.
 * Unresolved NEEDS_OWNER_REVIEW and any ACTIVE after decisions drive D1 blocking.
 */
function applyOwnerDecisions(classification, options = {}) {
  const ownerLoad = loadOwnerDecisions(options);
  if (!ownerLoad.ok) {
    return {
      ...classification,
      ok: false,
      error: ownerLoad.errors.join("; "),
      ownerDecisionsPath: ownerLoad.path,
      ownerDecisionsErrors: ownerLoad.errors,
    };
  }

  const candidates = (classification.candidates || []).map((row) => {
    const decision = ownerLoad.byHeadRef.get(row.headRefName);
    if (!decision) {
      return { ...row, ownerDecision: null, finalCategory: row.category };
    }

    const finalCategory =
      decision.resolvedCategory === "DOCUMENTED_EXCEPTION"
        ? CATEGORY_INTEGRATED
        : decision.resolvedCategory;

    return {
      ...row,
      autoCategory: row.category,
      ownerDecision: decision,
      category: finalCategory,
      finalCategory,
      reason: `${row.reason} → OWNER: ${decision.resolvedCategory} (${decision.ownerNote})`,
    };
  });

  const summary = {
    INTEGRATED_HISTORICAL: 0,
    CLOSED_SUPERSEDED: 0,
    ACTIVE_UNMERGED_CLOSURE: 0,
    NEEDS_OWNER_REVIEW: 0,
  };
  for (const row of candidates) {
    summary[row.finalCategory || row.category] = (summary[row.finalCategory || row.category] || 0) + 1;
  }

  const active = candidates.filter(
    (c) => (c.finalCategory || c.category) === CATEGORY_ACTIVE,
  );
  const unresolved = candidates.filter(
    (c) => (c.finalCategory || c.category) === CATEGORY_NEEDS_OWNER,
  );
  const resolvedByOwner = candidates.filter((c) => c.ownerDecision);

  return {
    ...classification,
    ownerDecisionsPath: ownerLoad.path,
    ownerDecisionsCount: ownerLoad.byHeadRef.size,
    ownerDecisionsApplied: resolvedByOwner.length,
    summary,
    activeUnmergedClosureCount: active.length,
    needsOwnerReviewCount: unresolved.length,
    unresolvedOwnerReviewCount: unresolved.length,
    activeUnmergedClosureCandidates: active,
    needsOwnerReviewCandidates: unresolved,
    candidates,
  };
}

module.exports = {
  DEFAULT_DECISIONS_PATH,
  RESOLVED_CATEGORIES,
  loadOwnerDecisions,
  applyOwnerDecisions,
};
