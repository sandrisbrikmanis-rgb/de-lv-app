#!/usr/bin/env node
"use strict";
/**
 * Shared helpers for REPAIR_APPLY_SAFETY_STANDARD.md compliance.
 */
const fs = require("fs");
const { execSync } = require("child_process");

function verifyFromDisk(loadFn, staged, readCurrentFn) {
  const reloaded = loadFn();
  const verified = [];
  const failures = [];
  for (const row of staged) {
    const entry = row._entryResolver(reloaded);
    if (!entry) {
      failures.push({ ...row, status: "APPLY_VERIFICATION_FAIL", reason: "card_not_found_after_reload" });
      continue;
    }
    const actualAfter = readCurrentFn(entry, row.field);
    if (String(actualAfter) === String(row.ownerNew)) {
      verified.push({ auditId: row.auditId, cardId: row.cardId, field: row.field, status: "APPLIED_VERIFIED" });
    } else {
      failures.push({
        auditId: row.auditId,
        cardId: row.cardId,
        field: row.field,
        status: "APPLY_VERIFICATION_FAIL",
        expectedNew: row.ownerNew,
        actualAfter: actualAfter === undefined ? "(undefined)" : actualAfter,
      });
    }
  }
  return { verified, failures };
}

function gitDiffNonEmpty(files, cwd) {
  try {
    const out = execSync(`git diff -- ${files.map((f) => `"${f}"`).join(" ")}`, {
      cwd,
      encoding: "utf8",
    });
    return out.trim().length > 0;
  } catch {
    return false;
  }
}

function buildReconciliation({ uniqueTargets, verified, mismatches, skipped, failed }) {
  const skippedCount = Array.isArray(skipped) ? skipped.length : skipped;
  const rhs = verified.length + mismatches.length + skippedCount + failed.length;
  return {
    uniqueTargets,
    appliedVerified: verified.length,
    currentValueMismatch: mismatches.length,
    skipped: skippedCount,
    failed: failed.length,
    reconciles: uniqueTargets === rhs,
    total: rhs,
  };
}

function assertWritePostcondition({ appliedVerified, gitDiffPass, dryRun }) {
  if (dryRun || appliedVerified === 0) return { pass: true };
  if (!gitDiffPass) {
    return {
      pass: false,
      verdict: "HARD FAIL — EXPECTED PRODUCTION WRITE MISSING",
    };
  }
  return { pass: true };
}

module.exports = {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
};
