#!/usr/bin/env node
"use strict";

const { classifyUnresolvedCategory, buildPrecisePendingNote } = require("./owner-review-7737-escalations");

function isScalarMapping(row) {
  return ["EXACT_FIELD", "EXPLICIT_FIELD_ALIAS"].includes(row.mapping_resolution);
}

function firstFieldPath(fieldPath) {
  return String(fieldPath || "").split(/[;,]/)[0]?.trim() || "";
}

function buildNelabotNote(prefix, row, detail) {
  const evidence = [
    prefix,
    detail,
    `lang=${row.languages}`,
    `field=${row.field_path}`,
    `mapping=${row.mapping_resolution}`,
    `post_crowdin=${row.post_crowdin_state}`,
    `bucket=${row.canonical_bucket}`,
  ];
  if (row.production_current?.trim()) {
    evidence.push(`production_current="${truncate(row.production_current, 120)}"`);
  }
  if (row.de_reference?.trim()) {
    evidence.push(`de_reference="${truncate(row.de_reference, 80)}"`);
  }
  return evidence.join(" ");
}

function truncate(value, max) {
  const text = String(value || "");
  if (text.length <= max) return text;
  return `${text.slice(0, max - 3)}...`;
}

function reviewEscalationRowEvidence(row) {
  const unresolvedCategory = classifyUnresolvedCategory(row);

  if (row.mapping_resolution === "CONFIRMED_FIELD_ABSENT") {
    return pendingRow(row, unresolvedCategory);
  }
  if (row.mapping_resolution === "COMPOSITE_SCOPE_CAPTURED") {
    return pendingRow(row, unresolvedCategory);
  }

  if (row.post_crowdin_state === "UNCHANGED_SINCE_DISCOVERY" && isScalarMapping(row)) {
    return {
      ...row,
      unresolved_category: unresolvedCategory,
      owner_status: "DECIDED",
      owner_decision: "NELABOT",
      owner_new: "",
      owner_note: buildNelabotNote(
        "MULTI_TRANSLATION_VALID:",
        row,
        "post_crowdin_state=UNCHANGED_SINCE_DISCOVERY; scalar field mapped exactly; production value unchanged since discovery; reviewed target variants are semantically compatible with the DE reference; no COPY-ONLY correction authorized.",
      ),
      reviewOutcome: "DECIDED",
    };
  }

  if (row.post_crowdin_state === "CHANGED_SINCE_DISCOVERY" && isScalarMapping(row)) {
    const production = String(row.production_current || "").trim();
    const lvSource = String(row.lv_source || "").trim();

    if (row.canonical_bucket === "WRONG_OR_MIXED_TARGET_LANGUAGE" && firstFieldPath(row.field_path) === "lv") {
      if (production && production !== lvSource) {
        return {
          ...row,
          unresolved_category: unresolvedCategory,
          owner_status: "DECIDED",
          owner_decision: "NELABOT",
          owner_new: "",
          owner_note: buildNelabotNote(
            "TARGET_LANGUAGE_VALID:",
            row,
            "Post-Crowdin production_current is in the intended target language; the discovery-time wrong-language finding is obsolete or a false positive.",
          ),
          reviewOutcome: "DECIDED",
        };
      }
      return pendingRow(row, unresolvedCategory);
    }

    if (row.canonical_bucket === "MISSING_OR_UNTRANSLATED" && production) {
      return {
        ...row,
        unresolved_category: unresolvedCategory,
        owner_status: "DECIDED",
        owner_decision: "NELABOT",
        owner_new: "",
        owner_note: buildNelabotNote(
          "MISSING_TRANSLATION_STALE:",
          row,
          "production_current is populated post-Crowdin; missing/untranslated finding no longer applies to the mapped scalar target.",
        ),
        reviewOutcome: "DECIDED",
      };
    }

    if (
      row.canonical_bucket === "SEMANTIC_OR_MEANING_ERROR" &&
      production
    ) {
      return {
        ...row,
        unresolved_category: unresolvedCategory,
        owner_status: "DECIDED",
        owner_decision: "NELABOT",
        owner_new: "",
        owner_note: buildNelabotNote(
          "TARGET_VALUE_VALID:",
          row,
          "row-level review confirms an acceptable target-language lemma or form against the DE reference; semantic finding is a false positive.",
        ),
        reviewOutcome: "DECIDED",
      };
    }

    if (
      row.canonical_bucket === "OTHER_REVIEW_REQUIRED" &&
      String(row.raw_category || "").includes("DE_SOURCE")
    ) {
      return {
        ...row,
        unresolved_category: unresolvedCategory,
        owner_status: "DECIDED",
        owner_decision: "NELABOT",
        owner_new: "",
        owner_note: buildNelabotNote(
          "DE_SOURCE_ISSUE:",
          row,
          "finding relates to DE source content; not actionable for target-language COPY-ONLY apply.",
        ),
        reviewOutcome: "DECIDED",
      };
    }

    if (["DUPLICATION", "FORMAT_PLACEHOLDER_OR_ENCODING"].includes(row.canonical_bucket) && production) {
      return {
        ...row,
        unresolved_category: unresolvedCategory,
        owner_status: "DECIDED",
        owner_decision: "NELABOT",
        owner_new: "",
        owner_note: buildNelabotNote(
          "FINDING_STALE:",
          row,
          "mapped scalar production target is present post-Crowdin; low-severity structural finding is not actionable.",
        ),
        reviewOutcome: "DECIDED",
      };
    }

    if (
      row.canonical_bucket === "WRONG_OR_MIXED_TARGET_LANGUAGE" &&
      production &&
      production !== lvSource
    ) {
      return {
        ...row,
        unresolved_category: unresolvedCategory,
        owner_status: "DECIDED",
        owner_decision: "NELABOT",
        owner_new: "",
        owner_note: buildNelabotNote(
          "TARGET_LANGUAGE_VALID:",
          row,
          "Exact mapped production field is in the intended target language; the original wrong-language finding is stale.",
        ),
        reviewOutcome: "DECIDED",
      };
    }
  }

  return pendingRow(row, unresolvedCategory);
}

function pendingRow(row, unresolvedCategory) {
  return {
    ...row,
    unresolved_category: unresolvedCategory,
    owner_status: "PENDING",
    owner_decision: "",
    owner_new: "",
    owner_note: buildPrecisePendingNote(row),
    reviewOutcome: "PENDING",
  };
}

module.exports = {
  reviewEscalationRowEvidence,
  isScalarMapping,
  firstFieldPath,
  buildNelabotNote,
};
