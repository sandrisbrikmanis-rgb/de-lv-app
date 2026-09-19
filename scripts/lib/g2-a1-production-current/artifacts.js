#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { REPORTS_DIR } = require("./constants");

const REQUIRED_ROW_FIELDS = [
  "auditSource",
  "productionFile",
  "language",
  "cardId",
  "fieldPath",
  "currentValue",
  "datasetProductionSha",
  "auditBaselineSha",
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

function validateAuditRowSchema(row) {
  const missing = REQUIRED_ROW_FIELDS.filter((k) => !(k in row));
  if (missing.length) return { pass: false, missing };
  if (row.auditSource !== "production-current") {
    return { pass: false, code: "BAD_AUDIT_SOURCE", value: row.auditSource };
  }
  if (String(row.productionFile).includes("crowdin-staging") || String(row.productionFile).includes("reports/staging")) {
    return { pass: false, code: "FORBIDDEN_SOURCE_PATH", value: row.productionFile };
  }
  return { pass: true };
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
  return { pass: errors.length === 0, errors, requiredRowFields: REQUIRED_ROW_FIELDS };
}

module.exports = {
  REQUIRED_ROW_FIELDS,
  writeJsonAtomic,
  validateAuditRowSchema,
  validateDryRunArtifact,
  REPORTS_DIR,
};
