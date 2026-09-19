#!/usr/bin/env node
"use strict";

const { BULK_FORBIDDEN_PASS_RATIONALES } = require("./constants");

function rejectBulkPassRationale(record) {
  const errors = [];
  if (record.AUDIT_VERDICT !== "PASS") return { pass: true, errors };
  const rationale = String(record.PASS_RATIONALE || record.passRationale || record.bulkRationale || "").trim();
  if (!rationale) return { pass: true, errors };
  for (const code of BULK_FORBIDDEN_PASS_RATIONALES) {
    if (rationale === code || rationale.includes(code)) errors.push(code);
  }
  return { pass: errors.length === 0, errors };
}

function rejectSharedEvidenceWithoutRowBinding(records) {
  const errors = [];
  const byEvidence = new Map();
  for (const r of records) {
    if (r.AUDIT_VERDICT !== "PASS") continue;
    const key = `${r.DE_SOURCE_EVIDENCE}||${r.TARGET_SOURCE_EVIDENCE}`;
    if (!byEvidence.has(key)) byEvidence.set(key, []);
    byEvidence.get(key).push(r.rowId || r.fieldPath);
  }
  for (const [key, rowIds] of byEvidence) {
    if (key === "||") continue;
    if (rowIds.length > 1) {
      const sameContext = records
        .filter((r) => rowIds.includes(r.rowId || r.fieldPath))
        .every((r, _, arr) => arr[0].currentValue === r.currentValue && arr[0].fieldPath === r.fieldPath);
      if (!sameContext) errors.push({ code: "SHARED_EVIDENCE_MULTI_ROW", key, rowIds });
    }
  }
  return { pass: errors.length === 0, errors };
}

module.exports = {
  rejectBulkPassRationale,
  rejectSharedEvidenceWithoutRowBinding,
  BULK_FORBIDDEN_PASS_RATIONALES,
};
