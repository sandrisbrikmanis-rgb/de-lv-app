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

function buildFindingStableId(finding) {
  const scopeId = finding.scopeId || `${finding.group}/${finding.dataset}/${finding.lang}`;
  const cardId = finding.cardId || finding.nodePath || "aggregate";
  const fieldPath = finding.fieldPath || finding.field || "";
  const category = finding.category || "UNKNOWN";
  const source = finding.source || "deterministic/unknown";
  return `${scopeId}|${cardId}|${fieldPath}|${category}|${source}`;
}

function buildDedupKey(finding) {
  const group = finding.group || "";
  const dataset = finding.dataset || "";
  const cardId = finding.cardId || finding.nodePath || "aggregate";
  const fieldPath = (finding.fieldPath || finding.field || "").trim().replace(/\s+/g, " ");
  const category = finding.category || "UNKNOWN";
  return `${group}|${dataset}|${cardId}|${fieldPath}|${category}`;
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
  const schemaErrors = [];
  const normalized = [];
  let unclassifiedCount = 0;

  findings.forEach((finding, index) => {
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
  };
}

module.exports = {
  ALLOWED_CLASSIFICATION,
  ALLOWED_SEVERITY,
  buildFindingStableId,
  buildDedupKey,
  normalizeFinding,
  validateFindingSchema,
  validateFindings,
};
