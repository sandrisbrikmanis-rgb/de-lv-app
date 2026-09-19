#!/usr/bin/env node
"use strict";

const { AUDIT_VERDICTS, AUDIT_PASS_LABEL } = require("./constants");
const { isOwnerReviewRow } = require("./owner-scope");

function tallyAuditedRecords(records) {
  const counts = {
    TOTAL_CHECKED: 0,
    AUDIT_PASS: 0,
    FINDING: 0,
    NEEDS_SOURCE_REVIEW: 0,
    SOURCE_DE_ISSUE: 0,
    OWNER_REVIEW_REQUIRED: 0,
    missingVerdict: 0,
    duplicateRowIds: 0,
    unknownVerdict: 0,
  };
  const seen = new Set();
  for (const r of records) {
    counts.TOTAL_CHECKED += 1;
    const id = r.rowId || `${r.language}|${r.fieldPath}`;
    if (seen.has(id)) counts.duplicateRowIds += 1;
    seen.add(id);
    const v = r.AUDIT_VERDICT;
    if (!v) {
      counts.missingVerdict += 1;
      continue;
    }
    if (v === "PASS") counts.AUDIT_PASS += 1;
    else if (v === "FINDING") counts.FINDING += 1;
    else if (v === "NEEDS_SOURCE_REVIEW") counts.NEEDS_SOURCE_REVIEW += 1;
    else if (v === "SOURCE_DE_ISSUE") counts.SOURCE_DE_ISSUE += 1;
    else counts.unknownVerdict += 1;
    if (isOwnerReviewRow(r)) counts.OWNER_REVIEW_REQUIRED += 1;
  }
  return counts;
}

function validateCoverageEquation(counts) {
  const errors = [];
  const sum =
    counts.AUDIT_PASS + counts.FINDING + counts.NEEDS_SOURCE_REVIEW + counts.SOURCE_DE_ISSUE;
  if (counts.TOTAL_CHECKED !== sum) {
    errors.push({
      code: "COVERAGE_EQUATION",
      total: counts.TOTAL_CHECKED,
      sum,
    });
  }
  if (counts.missingVerdict > 0) errors.push({ code: "MISSING_VERDICT", n: counts.missingVerdict });
  if (counts.duplicateRowIds > 0) errors.push({ code: "DUPLICATE_ROWS", n: counts.duplicateRowIds });
  if (counts.unknownVerdict > 0) errors.push({ code: "UNKNOWN_VERDICT", n: counts.unknownVerdict });
  const expectedOwner =
    counts.FINDING + counts.NEEDS_SOURCE_REVIEW + counts.SOURCE_DE_ISSUE;
  if (counts.OWNER_REVIEW_REQUIRED !== expectedOwner) {
    errors.push({
      code: "OWNER_REVIEW_COUNT",
      expected: expectedOwner,
      actual: counts.OWNER_REVIEW_REQUIRED,
    });
  }
  return { pass: errors.length === 0, errors, counts, equation: `${counts.TOTAL_CHECKED} = ${AUDIT_PASS_LABEL} + FINDING + NEEDS_SOURCE_REVIEW + SOURCE_DE_ISSUE` };
}

module.exports = {
  tallyAuditedRecords,
  validateCoverageEquation,
};
