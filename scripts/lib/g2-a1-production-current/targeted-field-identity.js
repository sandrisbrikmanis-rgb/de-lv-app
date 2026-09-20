#!/usr/bin/env node
"use strict";

const { LEVEL, AUDIT_SOURCE } = require("./constants");

function fieldIdentityKey(row) {
  return `${row.language}|${row.productionFile}|${row.cardId}|${row.fieldPath}`;
}

function rowIdFromParts(lang, fieldPath) {
  return `${lang}|${fieldPath}`;
}

function normalizeMissingFieldRow(inventoryRow, auditBaselineSha, datasetProductionSha) {
  return {
    identityKey: fieldIdentityKey(inventoryRow),
    rowId: inventoryRow.rowId || rowIdFromParts(inventoryRow.language, inventoryRow.fieldPath),
    language: inventoryRow.language,
    dataset: LEVEL,
    productionFile: inventoryRow.productionFile,
    cardId: inventoryRow.cardId,
    fieldPath: inventoryRow.fieldPath,
    currentValue: inventoryRow.currentValue,
    auditSource: AUDIT_SOURCE,
    datasetProductionSha: datasetProductionSha || inventoryRow.datasetProductionSha,
    auditBaselineSha: auditBaselineSha || inventoryRow.auditBaselineSha,
    technicalMappingStatus: "MAPPING_GAP",
    AUDIT_VERDICT: null,
  };
}

function validateIdentityRow(row) {
  const errors = [];
  if (!row.language) errors.push("language");
  if (!row.productionFile) errors.push("productionFile");
  if (!row.cardId) errors.push("cardId");
  if (!row.fieldPath) errors.push("fieldPath");
  if (row.AUDIT_VERDICT != null && row.AUDIT_VERDICT !== "") errors.push("AUDIT_VERDICT_must_be_null");
  if (row.identityKey !== fieldIdentityKey(row)) errors.push("identityKey_mismatch");
  return { pass: errors.length === 0, errors };
}

module.exports = {
  fieldIdentityKey,
  rowIdFromParts,
  normalizeMissingFieldRow,
  validateIdentityRow,
};
