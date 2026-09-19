#!/usr/bin/env node
"use strict";

const { AUDIT_VERDICTS, OWNER_STATUSES } = require("./constants");

function isOwnerReviewRow(record) {
  const v = record.AUDIT_VERDICT;
  if (v === "FINDING" || v === "NEEDS_SOURCE_REVIEW" || v === "SOURCE_DE_ISSUE") return true;
  if (record.unresolvedDocumented === true) return true;
  return false;
}

function filterOwnerReviewRows(records) {
  return records.filter(isOwnerReviewRow);
}

function assertPassExcludedFromOwnerReview(records) {
  const passInOwner = records.filter((r) => r.AUDIT_VERDICT === "PASS" && r.includeInOwnerView === true);
  return { pass: passInOwner.length === 0, violations: passInOwner.map((r) => r.rowId || r.fieldPath) };
}

function isOwnerStatusNotAuditVerdict(status) {
  return OWNER_STATUSES.includes(status) && !AUDIT_VERDICTS.includes(status);
}

module.exports = {
  isOwnerReviewRow,
  filterOwnerReviewRows,
  assertPassExcludedFromOwnerReview,
  isOwnerStatusNotAuditVerdict,
};
