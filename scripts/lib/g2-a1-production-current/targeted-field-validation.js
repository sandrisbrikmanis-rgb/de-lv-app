#!/usr/bin/env node
"use strict";

const { AUDIT_VERDICTS, FORBIDDEN_AUDIT_VERDICTS, APVIENOTS_EVIDENCE_FIELDS, FINDING_REQUIRED_FIELDS, CEFR_FIELDS } = require("./constants");
const { nonEmptyString } = require("./evidence-schema");
const { fieldIdentityKey } = require("./targeted-field-identity");
const { mapLunaStatusToAuditVerdict } = require("./luna-apvienots-mapper");

const TECHNICAL_EXECUTION_STATUS = Object.freeze({
  MAPPING_GAP: "MAPPING_GAP",
  RESPONSE_SCHEMA_INVALID: "RESPONSE_SCHEMA_INVALID",
  RESULT_IDENTITY_MISMATCH: "RESULT_IDENTITY_MISMATCH",
  DUPLICATE_FIELD_RESULT: "DUPLICATE_FIELD_RESULT",
  MISSING_FIELD_RESULT: "MISSING_FIELD_RESULT",
  SOURCE_ACCESS_FAILURE: "SOURCE_ACCESS_FAILURE",
  BATCH_EXECUTION_FAILURE: "BATCH_EXECUTION_FAILURE",
});

function validateTargetedFieldResponse(item, expectedIdentity) {
  const errors = [];
  const technical = [];

  if (!item || typeof item !== "object") {
    return { pass: false, technicalStatus: TECHNICAL_EXECUTION_STATUS.RESPONSE_SCHEMA_INVALID, errors: ["MALFORMED"] };
  }

  const identity = {
    language: item.language,
    productionFile: item.productionFile,
    cardId: item.cardId,
    fieldPath: item.fieldPath || item.field,
  };
  if (fieldIdentityKey(identity) !== expectedIdentity.identityKey) {
    return {
      pass: false,
      technicalStatus: TECHNICAL_EXECUTION_STATUS.RESULT_IDENTITY_MISMATCH,
      errors: ["identity_mismatch"],
    };
  }
  if (!item.fieldPath && !item.field) errors.push("missing_fieldPath");

  const verdictMap = mapLunaStatusToAuditVerdict(item.AUDIT_VERDICT || item.status);
  if (!verdictMap.pass) {
    return {
      pass: false,
      technicalStatus: TECHNICAL_EXECUTION_STATUS.RESPONSE_SCHEMA_INVALID,
      errors: [verdictMap.error],
    };
  }

  for (const f of APVIENOTS_EVIDENCE_FIELDS) {
    if (f === "AUDIT_VERDICT") continue;
    if (!nonEmptyString(item[f])) errors.push(`missing:${f}`);
  }
  if (!nonEmptyString(item.CONTEXT_REASONING)) errors.push("missing:CONTEXT_REASONING");

  const verdict = verdictMap.verdict;
  if (FORBIDDEN_AUDIT_VERDICTS.includes(verdict) || !AUDIT_VERDICTS.includes(verdict)) {
    errors.push("invalid_verdict");
  }

  if (verdict === "PASS" && errors.length) {
    return { pass: false, technicalStatus: TECHNICAL_EXECUTION_STATUS.RESPONSE_SCHEMA_INVALID, errors, verdict };
  }

  if (verdict === "FINDING") {
    for (const f of FINDING_REQUIRED_FIELDS) {
      if (!nonEmptyString(item[f])) errors.push(`finding_missing:${f}`);
    }
    if (errors.length) {
      return { pass: false, technicalStatus: TECHNICAL_EXECUTION_STATUS.RESPONSE_SCHEMA_INVALID, errors, verdict };
    }
  }

  if (item.CEFR_APPLICABLE) {
    for (const f of CEFR_FIELDS) {
      if (!nonEmptyString(item[f])) errors.push(`cefr_missing:${f}`);
    }
  }

  if (errors.length) {
    return { pass: false, technicalStatus: TECHNICAL_EXECUTION_STATUS.RESPONSE_SCHEMA_INVALID, errors, verdict };
  }

  return { pass: true, verdict, technicalStatus: null, record: { ...item, AUDIT_VERDICT: verdict } };
}

function validateBatchFieldCoverage(expectedIdentities, returnedItems) {
  const byKey = new Map();
  const duplicates = [];
  for (const item of returnedItems || []) {
    const key = fieldIdentityKey({
      language: item.language,
      productionFile: item.productionFile,
      cardId: item.cardId,
      fieldPath: item.fieldPath || item.field,
    });
    if (byKey.has(key)) duplicates.push(key);
    byKey.set(key, item);
  }
  const missing = [];
  for (const exp of expectedIdentities) {
    if (!byKey.has(exp.identityKey)) missing.push(exp.identityKey);
  }
  return {
    pass: missing.length === 0 && duplicates.length === 0,
    EXPECTED_FIELD_RESULTS: expectedIdentities.length,
    RETURNED_FIELD_RESULTS: byKey.size,
    MISSING_FIELD_RESULTS: missing.length,
    DUPLICATE_FIELD_RESULTS: duplicates.length,
    missingKeys: missing.slice(0, 20),
    duplicateKeys: duplicates.slice(0, 20),
  };
}

function rejectCardLevelOnlyResponse(items, expectedCount) {
  if (!Array.isArray(items) || items.length !== 1) return { pass: true };
  const one = items[0];
  if ((one.fieldPath || one.field) && expectedCount === 1) return { pass: true };
  if (!one.fieldPath && !one.field && !one.fields && expectedCount > 1) {
    return { pass: false, code: "CARD_LEVEL_VERDICT_REJECTED" };
  }
  return { pass: true };
}

module.exports = {
  TECHNICAL_EXECUTION_STATUS,
  validateTargetedFieldResponse,
  validateBatchFieldCoverage,
  rejectCardLevelOnlyResponse,
};
