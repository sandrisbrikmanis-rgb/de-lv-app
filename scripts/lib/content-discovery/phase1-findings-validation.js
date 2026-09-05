#!/usr/bin/env node
"use strict";

const ALLOWED_CLASSIFICATION = new Set([
  "VALIDATED_REAL_FINDING",
  "OWNER_DECISION_REQUIRED",
  "SOURCE_LV_ISSUE",
  "DE_SOURCE_ISSUE",
  "FALSE_POSITIVE",
  "STYLE_ONLY",
  "PROJECT_CONVENTION",
  "NEEDS_REVIEW",
  "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
]);

const ALLOWED_SEVERITY = new Set(["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"]);
const { applyOwnerSeverityMappings } = require("./phase1-owner-severity-mapping");

function buildFindingStableId(finding) {
  const scopeId = finding.scopeId || `${finding.group}/${finding.dataset}/${finding.lang}`;
  const cardId = finding.cardId || finding.nodePath || "aggregate";
  const fieldPath = finding.fieldPath || finding.field || "";
  const category = finding.category || "UNKNOWN";
  const source = finding.source || "deterministic/unknown";
  return `${scopeId}|${cardId}|${fieldPath}|${category}|${source}`;
}

function buildDedupKey(finding) {
  const scopeId = finding.scopeId || `${finding.group}/${finding.dataset}/${finding.lang}`;
  const parts = String(scopeId).split("/");
  const lang = finding.lang || parts[2] || "";
  const group = finding.group || parts[0] || "";
  const dataset = finding.dataset || parts[1] || "";
  const cardId = finding.cardId || finding.nodePath || "aggregate";
  const fieldPath = (finding.fieldPath || finding.field || "").trim().replace(/\s+/g, " ");
  const category = finding.category || "UNKNOWN";
  const objectIndex = resolveObjectIndexForDedup(finding);
  return `${scopeId}|${lang}|${group}|${dataset}|${cardId}|idx:${objectIndex}|${fieldPath}|${category}`;
}

function resolveObjectIndexForDedup(finding) {
  if (finding.objectIndex != null) return finding.objectIndex;
  const fromStable = String(finding.findingStableId || "").match(/\|idx:([^|]+)\|/);
  if (fromStable) return fromStable[1];
  const fromDedup = String(finding.dedupKey || "").match(/\|idx:([^|]+)\|/);
  if (fromDedup) return fromDedup[1];
  return "?";
}

function normalizeFinding(finding, index = 0) {
  const scopeId = finding.scopeId || `${finding.group}/${finding.dataset}/${finding.lang}`;
  const normalized = {
    ...finding,
    scopeId,
    fieldPath: finding.fieldPath || finding.field || "",
    cardId: finding.cardId ?? (finding.nodePath ? String(finding.nodePath) : ""),
    source: finding.source || "deterministic/unknown",
    classificationStatus: finding.classificationStatus || "NEEDS_REVIEW",
  };
  if (normalized.current === undefined) normalized.current = "";
  if (!normalized.cardId && normalized.group === "g3" && normalized.fieldPath) {
    const lessonKey = String(normalized.fieldPath).split(".")[0];
    if (lessonKey && !lessonKey.startsWith("legacyHtml")) normalized.cardId = lessonKey;
  }
  if (!normalized.cardId && String(normalized.fieldPath || "").startsWith("legacyHtml.")) {
    const parts = String(normalized.fieldPath).split(".");
    if (parts.length >= 2) normalized.cardId = parts[1];
  }
  normalized.findingStableId = finding.findingStableId || buildFindingStableId(normalized);
  normalized.dedupKey = finding.dedupKey || buildDedupKey(normalized);
  if (!normalized.auditId) {
    normalized.auditId = `PH1-${String(index + 1).padStart(6, "0")}`;
  }
  return normalized;
}

function validateFindingSchema(finding, index = 0) {
  const errors = [];
  const f = normalizeFinding(finding, index);
  const required = [
    "auditId",
    "findingStableId",
    "dedupKey",
    "scopeId",
    "source",
    "category",
    "severity",
    "classificationStatus",
    "fieldPath",
  ];
  for (const key of required) {
    if (f[key] === undefined || f[key] === null || f[key] === "") {
      errors.push({ index, field: key, message: `Missing required field: ${key}` });
    }
  }
  if (!f.cardId && !String(f.fieldPath || "").startsWith("legacyHtml.")) {
    errors.push({ index, field: "cardId", message: "cardId required unless legacyHtml nodePath" });
  }
  if (!ALLOWED_SEVERITY.has(String(f.severity || "").toUpperCase())) {
    errors.push({ index, field: "severity", message: `Invalid severity: ${f.severity}` });
  }
  if (!ALLOWED_CLASSIFICATION.has(String(f.classificationStatus || ""))) {
    errors.push({
      index,
      field: "classificationStatus",
      message: `Invalid classificationStatus: ${f.classificationStatus}`,
    });
  }
  if (f.classificationStatus === "UNCLASSIFIED") {
    errors.push({ index, field: "classificationStatus", message: "UNCLASSIFIED is forbidden" });
  }
  if (f.current === undefined) {
    errors.push({ index, field: "current", message: "current is required (may be empty string)" });
  }
  return { finding: f, errors };
}

function validateFindings(findings = []) {
  const ownerMapping = applyOwnerSeverityMappings(findings);
  if (ownerMapping.mappingErrors.length > 0) {
    const first = ownerMapping.mappingErrors[0];
    const expectedLabel = Array.isArray(first.expectedVariants)
      ? first.expectedVariants.join(" | ")
      : String(first.expected ?? "");
    const err = new Error(
      `OWNER_MAPPING_MISMATCH for ${first.findingId}: expected ${first.field} in [${expectedLabel}], got ${first.actual}`,
    );
    err.code = "OWNER_MAPPING_MISMATCH";
    err.mappingErrors = ownerMapping.mappingErrors;
    throw err;
  }

  const schemaErrors = [];
  const normalized = [];
  let unclassifiedCount = 0;

  ownerMapping.findings.forEach((finding, index) => {
    const { finding: f, errors } = validateFindingSchema(finding, index);
    normalized.push(f);
    schemaErrors.push(...errors);
    if (f.classificationStatus === "UNCLASSIFIED") unclassifiedCount++;
  });

  const validatedStatuses = new Set([
    "VALIDATED_REAL_FINDING",
    "OWNER_DECISION_REQUIRED",
    "SOURCE_LV_ISSUE",
    "DE_SOURCE_ISSUE",
    "NEEDS_REVIEW",
  ]);
  const excludedStatuses = new Set([
    "FALSE_POSITIVE",
    "STYLE_ONLY",
    "PROJECT_CONVENTION",
    "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
  ]);

  const validatedCount = normalized.filter((f) => validatedStatuses.has(f.classificationStatus)).length;
  const excludedCount = normalized.filter((f) => excludedStatuses.has(f.classificationStatus)).length;

  const pass =
    schemaErrors.length === 0 &&
    unclassifiedCount === 0 &&
    validatedCount + excludedCount === normalized.length;

  return {
    pass,
    schemaErrors,
    schemaErrorCount: schemaErrors.length,
    unclassifiedCount,
    validatedCount,
    excludedCount,
    totalRawFindings: normalized.length,
    findings: normalized,
    ownerMappingApplied: ownerMapping.ownerMappingApplied,
    ownerMappingExpected: ownerMapping.ownerMappingExpected,
    ownerSeverityNormalizationProofs: ownerMapping.proofs,
  };
}

module.exports = {
  ALLOWED_CLASSIFICATION,
  ALLOWED_SEVERITY,
  buildFindingStableId,
  buildDedupKey,
  resolveObjectIndexForDedup,
  normalizeFinding,
  validateFindingSchema,
  validateFindings,
};
