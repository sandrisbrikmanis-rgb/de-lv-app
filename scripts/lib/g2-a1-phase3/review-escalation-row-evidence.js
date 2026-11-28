#!/usr/bin/env node
"use strict";

const { classifyUnresolvedCategory, buildPrecisePendingNote } = require("./owner-review-7737-escalations");

const OWNER_DECISION_WRITING_DISABLED = true;

function isScalarMapping(row) {
  return ["EXACT_FIELD", "EXPLICIT_FIELD_ALIAS"].includes(row.mapping_resolution);
}

function firstFieldPath(fieldPath) {
  return String(fieldPath || "").split(/[;,]/)[0]?.trim() || "";
}

function computeEvidenceTags(row) {
  const tags = [];
  if (row.mapping_resolution === "CONFIRMED_FIELD_ABSENT") {
    tags.push("CONFIRMED_FIELD_ABSENT");
  }
  if (row.mapping_resolution === "COMPOSITE_SCOPE_CAPTURED") {
    tags.push("COMPOSITE_SCOPE_CAPTURED");
  }
  if (row.post_crowdin_state === "UNCHANGED_SINCE_DISCOVERY" && isScalarMapping(row)) {
    tags.push("UNCHANGED_SINCE_DISCOVERY_SCALAR");
  }
  if (row.post_crowdin_state === "CHANGED_SINCE_DISCOVERY" && isScalarMapping(row)) {
    tags.push("CHANGED_SINCE_DISCOVERY_SCALAR");
    const production = String(row.production_current || "").trim();
    const lvSource = String(row.lv_source || "").trim();
    if (production) tags.push("PRODUCTION_CURRENT_POPULATED");
    if (row.canonical_bucket === "WRONG_OR_MIXED_TARGET_LANGUAGE" && firstFieldPath(row.field_path) === "lv") {
      tags.push("TARGET_LANGUAGE_LV_FIELD");
      if (production && production !== lvSource) tags.push("PRODUCTION_DIFFERS_FROM_LV_SOURCE");
    }
    if (row.canonical_bucket === "MISSING_OR_UNTRANSLATED" && production) {
      tags.push("MISSING_WITH_POPULATED_PRODUCTION");
    }
    if (row.canonical_bucket === "SEMANTIC_OR_MEANING_ERROR" && production) {
      tags.push("SEMANTIC_WITH_POPULATED_PRODUCTION");
    }
    if (row.canonical_bucket === "OTHER_REVIEW_REQUIRED" && String(row.raw_category || "").includes("DE_SOURCE")) {
      tags.push("DE_SOURCE_ISSUE");
    }
    if (["DUPLICATION", "FORMAT_PLACEHOLDER_OR_ENCODING"].includes(row.canonical_bucket) && production) {
      tags.push("LOW_SEVERITY_STRUCTURAL");
    }
    if (
      row.canonical_bucket === "WRONG_OR_MIXED_TARGET_LANGUAGE" &&
      production &&
      production !== lvSource &&
      firstFieldPath(row.field_path) !== "lv"
    ) {
      tags.push("TARGET_LANGUAGE_NON_LV_FIELD");
    }
  }
  if (!tags.length) tags.push("OWNER_REVIEW_REQUIRED");
  return tags;
}

function reviewEscalationRowEvidence(row) {
  const unresolvedCategory = classifyUnresolvedCategory(row);
  const evidenceTags = computeEvidenceTags(row);
  return {
    ...row,
    unresolved_category: unresolvedCategory,
    evidence_tags: evidenceTags.join(";"),
    owner_status: "PENDING",
    owner_decision: "",
    owner_new: "",
    owner_note: buildPrecisePendingNote(row),
    reviewOutcome: "PENDING",
  };
}

module.exports = {
  OWNER_DECISION_WRITING_DISABLED,
  reviewEscalationRowEvidence,
  computeEvidenceTags,
  isScalarMapping,
  firstFieldPath,
};
