#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { REPORTS_DIR } = require("./constants");

const REQUIRED_INVENTORY_FIELDS = [
  "recordKind",
  "auditSource",
  "productionFile",
  "language",
  "cardId",
  "fieldPath",
  "currentValue",
  "datasetProductionSha",
  "auditBaselineSha",
  "rowId",
];

function sha256Buffer(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function writeJsonAtomic(relName, payload) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const abs = path.join(REPORTS_DIR, relName);
  const text = `${JSON.stringify(payload, null, 2)}\n`;
  fs.writeFileSync(abs, text, "utf8");
  return { rel: path.relative(path.join(REPORTS_DIR, "..", ".."), abs).replace(/\\/g, "/"), sha256: sha256Buffer(text) };
}

const { validateTechnicalInventoryRecord } = require("./evidence-schema");
const { RECORD_KIND } = require("./constants");

function validateAuditRowSchema(row) {
  const missing = REQUIRED_INVENTORY_FIELDS.filter((k) => !(k in row));
  if (missing.length) return { pass: false, missing };
  if (row.recordKind !== RECORD_KIND.TECHNICAL_INVENTORY) {
    return { pass: false, code: "NOT_TECHNICAL_INVENTORY", value: row.recordKind };
  }
  return validateTechnicalInventoryRecord(row);
}

function validateDryRunArtifact(payload) {
  const errors = [];
  if (!payload || !payload.summary) errors.push("missing summary");
  if (!Array.isArray(payload.perLang)) errors.push("missing perLang");
  const sample = payload.rowsSample || [];
  for (const row of sample) {
    const v = validateAuditRowSchema(row);
    if (!v.pass) errors.push(JSON.stringify(v));
  }
  return { pass: errors.length === 0, errors, requiredRowFields: REQUIRED_INVENTORY_FIELDS };
}

module.exports = {
  REQUIRED_INVENTORY_FIELDS,
  writeJsonAtomic,
  validateAuditRowSchema,
  validateDryRunArtifact,
  REPORTS_DIR,
};
