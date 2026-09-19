#!/usr/bin/env node
"use strict";

const { AUDIT_VERDICTS, FORBIDDEN_AUDIT_VERDICTS, FINDING_REQUIRED_FIELDS } = require("./constants");
const { nonEmptyString } = require("./evidence-schema");
const { rejectBulkPassRationale } = require("./bulk-forbidden");

function validateAuditVerdict(record) {
  const errors = [];
  const v = record.AUDIT_VERDICT;
  if (FORBIDDEN_AUDIT_VERDICTS.includes(v) || v === "PENDING_HUMAN_REVIEW") {
    errors.push("forbidden_verdict_label");
  }
  if (!AUDIT_VERDICTS.includes(v)) errors.push("unknown_or_missing_verdict");
  const verdictCount = AUDIT_VERDICTS.filter((x) => record[x] === true).length;
  if (verdictCount > 0) errors.push("multiple_verdict_flags");
  return { pass: errors.length === 0, errors, verdict: v };
}

function validatePassRecord(record) {
  const base = validateAuditVerdict(record);
  if (!base.pass) return base;
  if (record.AUDIT_VERDICT !== "PASS") return { pass: false, errors: ["not_pass"] };
  const errors = [];
  if (!nonEmptyString(record.DE_SOURCE_EVIDENCE)) errors.push("pass_missing_DE_SOURCE_EVIDENCE");
  if (!nonEmptyString(record.TARGET_SOURCE_EVIDENCE)) errors.push("pass_missing_TARGET_SOURCE_EVIDENCE");
  if (!nonEmptyString(record.CONTEXT_REASONING)) errors.push("pass_missing_CONTEXT_REASONING");
  const bulk = rejectBulkPassRationale(record);
  if (!bulk.pass) errors.push(...bulk.errors.map((e) => `bulk:${e}`));
  return { pass: errors.length === 0, errors };
}

function validateFindingRecord(record) {
  const base = validateAuditVerdict(record);
  if (!base.pass) return base;
  if (record.AUDIT_VERDICT !== "FINDING") return { pass: false, errors: ["not_finding"] };
  const errors = [];
  for (const f of FINDING_REQUIRED_FIELDS) {
    if (!nonEmptyString(record[f])) errors.push(`finding_missing:${f}`);
  }
  return { pass: errors.length === 0, errors };
}

function validateRecordByVerdict(record) {
  const v = record.AUDIT_VERDICT;
  if (v === "PASS") return validatePassRecord(record);
  if (v === "FINDING") return validateFindingRecord(record);
  if (v === "NEEDS_SOURCE_REVIEW" || v === "SOURCE_DE_ISSUE") {
    return validateAuditVerdict(record);
  }
  return { pass: false, errors: ["invalid_verdict"] };
}

module.exports = {
  validateAuditVerdict,
  validatePassRecord,
  validateFindingRecord,
  validateRecordByVerdict,
};
