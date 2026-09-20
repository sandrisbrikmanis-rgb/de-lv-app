#!/usr/bin/env node
"use strict";

const {
  RECORD_KIND,
  APVIENOTS_EVIDENCE_FIELDS,
  CEFR_FIELDS,
  AUDIT_VERDICTS,
  FORBIDDEN_AUDIT_VERDICTS,
  AUDIT_SOURCE,
  FORBIDDEN_CURRENT_SOURCES,
} = require("./constants");
const { isLinguisticVerdictClosed } = require("./linguistic-closure");

function nonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function validateAuditChainMetadata(meta) {
  const errors = [];
  if (meta?.forbiddenChain === "AI_INTERPRETATION → AUDIT VERDICT") {
    errors.push("FORBIDDEN_CHAIN");
  }
  if (meta?.requiredChain && meta.requiredChain !== "AUTHORITATIVE SOURCE → SOURCE EVIDENCE → CONTEXTUAL ANALYSIS → AUDIT VERDICT") {
    errors.push("CHAIN_MISMATCH");
  }
  return { pass: errors.length === 0, errors };
}

function validateTechnicalInventoryRecord(row) {
  const errors = [];
  if (row.recordKind !== RECORD_KIND.TECHNICAL_INVENTORY) errors.push("recordKind");
  if (row.auditSource !== AUDIT_SOURCE) errors.push("auditSource");
  if (row.AUDIT_VERDICT != null && row.AUDIT_VERDICT !== "") errors.push("AUDIT_VERDICT_MUST_BE_EMPTY");
  for (const f of APVIENOTS_EVIDENCE_FIELDS) {
    if (f === "AUDIT_VERDICT") continue;
    if (nonEmptyString(row[f])) errors.push(`linguistic_field_filled:${f}`);
  }
  for (const f of CEFR_FIELDS) {
    if (nonEmptyString(row[f])) errors.push(`cefr_field_filled:${f}`);
  }
  const pf = String(row.productionFile || "");
  for (const bad of FORBIDDEN_CURRENT_SOURCES) {
    if (pf.includes(bad)) errors.push(`forbidden_source:${bad}`);
  }
  return { pass: errors.length === 0, errors };
}

function validateAuditedEvidenceRecord(row, options = {}) {
  const errors = [];
  if (row.recordKind !== RECORD_KIND.AUDITED_EVIDENCE) errors.push("recordKind");
  if (row.auditSource !== AUDIT_SOURCE) errors.push("auditSource");
  if (!isLinguisticVerdictClosed(row)) {
    if (row.AUDIT_VERDICT != null && row.AUDIT_VERDICT !== "") {
      errors.push("mapping_gap_with_verdict");
    }
    return { pass: errors.length === 0, errors, skipped: "MAPPING_GAP" };
  }
  for (const f of APVIENOTS_EVIDENCE_FIELDS) {
    if (!nonEmptyString(row[f])) errors.push(`missing:${f}`);
  }
  if (!AUDIT_VERDICTS.includes(row.AUDIT_VERDICT)) errors.push("invalid_AUDIT_VERDICT");
  if (FORBIDDEN_AUDIT_VERDICTS.includes(row.AUDIT_VERDICT)) errors.push("forbidden_verdict_label");
  if (options.cefrApplicable) {
    const cefr = validateCefrWhenApplicable(row, true);
    if (!cefr.pass) errors.push(...cefr.errors);
  }
  return { pass: errors.length === 0, errors };
}

function validateCefrWhenApplicable(row, applicable) {
  if (!applicable) {
    const filled = CEFR_FIELDS.some((f) => nonEmptyString(row[f]));
    return { pass: !filled, errors: filled ? ["cefr_unexpected"] : [] };
  }
  const errors = [];
  for (const f of CEFR_FIELDS) {
    if (!nonEmptyString(row[f])) errors.push(`missing:${f}`);
  }
  return { pass: errors.length === 0, errors };
}

module.exports = {
  validateAuditChainMetadata,
  validateTechnicalInventoryRecord,
  validateAuditedEvidenceRecord,
  validateCefrWhenApplicable,
  nonEmptyString,
};
