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
  "NEEDS_REPAIR",
  "FALSE_POSITIVE",
]);

/** Map OWNER resolved categories to D1 gate categories (non-blocking when closed). */
const FINAL_CATEGORY_MAP = {
  DOCUMENTED_EXCEPTION: CATEGORY_INTEGRATED,
  INTEGRATED_HISTORICAL: CATEGORY_INTEGRATED,
  CLOSED_SUPERSEDED: CATEGORY_CLOSED,
  NEEDS_REPAIR: CATEGORY_CLOSED,
  FALSE_POSITIVE: CATEGORY_CLOSED,
  ACTIVE_UNMERGED_CLOSURE: CATEGORY_ACTIVE,
};

function ownerEvidenceText(row, parsed) {
  const rationale = row?.ownerRationale?.trim();
  const note = row?.ownerNote?.trim();
  if (rationale) return rationale;
  if (note) return note;
  if (row?.ownerDecision && row?.evidenceRefs?.length) {
    return `OWNER ${row.ownerDecision} (${row.evidenceRefs.length} evidence ref(s))`;
  }
  return null;
}

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
  const byPrNumber = new Map();
  const errors = [];

  for (const [index, row] of decisions.entries()) {
    const headRefName = row?.headRefName?.trim();
    const resolvedCategory = row?.resolvedCategory?.trim();
    const ownerText = ownerEvidenceText(row, parsed);

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
    if (!ownerText) {
      errors.push(
        `decisions[${index}] (${headRefName}): missing ownerRationale/ownerNote (or ownerDecision+evidenceRefs)`,
      );
      continue;
    }
    if (byHeadRef.has(headRefName)) {
      errors.push(`decisions[${index}] (${headRefName}): duplicate headRefName`);
      continue;
    }

    const entry = {
      headRefName,
      resolvedCategory,
      ownerNote: row?.ownerNote?.trim() || null,
      ownerRationale: row?.ownerRationale?.trim() || null,
      ownerDecision: row?.ownerDecision?.trim() || null,
      ownerText,
      baselineComparison: row?.baselineComparison?.trim() || null,
      decidedAt: row?.decidedAt || null,
      decidedBy: row?.decidedBy || parsed?.decidedBy || "OWNER",
      prNumber: row?.prNumber ?? null,
    };
    byHeadRef.set(headRefName, entry);
    if (row?.prNumber != null) {
      if (byPrNumber.has(row.prNumber)) {
        errors.push(`decisions[${index}] (PR #${row.prNumber}): duplicate prNumber`);
        continue;
      }
      byPrNumber.set(row.prNumber, entry);
    }
  }

  return {
    ok: errors.length === 0,
    path: decisionsPath,
    exists: true,
    schemaVersion: parsed?.schemaVersion ?? null,
    module: parsed?.module ?? null,
    verdict: parsed?.verdict ?? null,
    decisions,
    byHeadRef,
    byPrNumber,
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
    const decision =
      ownerLoad.byHeadRef.get(row.headRefName) ||
      (row.pr?.number != null ? ownerLoad.byPrNumber.get(row.pr.number) : null);
    if (!decision) {
      return { ...row, ownerDecision: null, finalCategory: row.category };
    }

    const finalCategory =
      FINAL_CATEGORY_MAP[decision.resolvedCategory] ?? decision.resolvedCategory;

    return {
      ...row,
      autoCategory: row.category,
      ownerDecision: decision,
      category: finalCategory,
      finalCategory,
      reason: `${row.reason} → OWNER: ${decision.resolvedCategory} (${decision.ownerText})`,
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
  FINAL_CATEGORY_MAP,
  loadOwnerDecisions,
  applyOwnerDecisions,
};
