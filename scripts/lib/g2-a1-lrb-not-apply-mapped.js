#!/usr/bin/env node
"use strict";

const {
  isCanonicalLeafFieldPath,
  splitCompoundLeafFieldPath,
} = require("./g2-a1-lrb-consolidation-normalize");
const { reconstructDecisionLeaves } = require("./g2-a1-lrb-leaf-reconstruction");

const CLASSIFICATIONS = [
  "APPLY_ELIGIBLE",
  "OWNER_CONFIRMED_NO_CHANGE",
  "AUDIT_ONLY_NO_TARGET",
  "RECONSTRUCTION_FAILED",
  "OWNER_REVIEW_REQUIRED",
];

function rowNotInApplyMapping(record, applyKeys) {
  if (record.audit_only) return true;
  if (!record.leaf_target_keys?.length) return true;
  return !record.leaf_target_keys.some((k) => applyKeys.has(k));
}

function classifyNotApplyMappedRow(record, leafByKey, applyKeys) {
  const base = {
    batch_id: record.batch_id,
    finding_stable_ids: record.finding_stable_ids || "",
    target_language: record.target_language,
    card_object_id: record.canonical_card_object_id,
    field_path: record.field_path_raw,
    owner_status: record.owner_status || "",
    owner_new: record.owner_new ?? record.owner_new_payload ?? "",
    owner_note: record.owner_note || "",
    source_artifact_path: record.decision_source_path || null,
    source_artifact_sha256: record.decision_source_sha256 || null,
  };

  if (record.audit_only) {
    if (record.skip_reason === "RECONSTRUCTION_FAILED") {
      return {
        ...base,
        classification: "RECONSTRUCTION_FAILED",
        exclusion_reason: record.skip_reason,
      };
    }
    return {
      ...base,
      classification: "AUDIT_ONLY_NO_TARGET",
      exclusion_reason: record.skip_reason || "audit_only_finding_row",
    };
  }

  const leafKeys = (record.leaf_target_keys || []).filter((k) => {
    const fp = k.split("|").slice(2).join("|");
    return isCanonicalLeafFieldPath(fp);
  });

  if (leafKeys.some((k) => applyKeys.has(k))) {
    return {
      ...base,
      classification: "APPLY_ELIGIBLE",
      exclusion_reason: "finding_row_has_apply_eligible_leaf_but_row_excluded_from_row_level_apply_map",
    };
  }

  const leafDecs = leafKeys.map((k) => leafByKey.get(k)).filter(Boolean);
  const status = String(record.owner_status || "").toUpperCase();
  const note = String(record.owner_note || base.owner_note || "");
  const combinedNotes = leafDecs
    .map((d) => d.empty_value_evidence?.owner_note || d.empty_value_evidence?.implicit_reasons?.join(",") || "")
    .join(" ");
  const allAuditOnlyEmpty = leafDecs.length > 0 && leafDecs.every((d) => !d.apply_eligible);
  const noChangeSignal =
    /non-actionable|no writable|null in production|field absent|NELABOT|no change|non_actionable|paths null/i.test(
      note + combinedNotes
    );

  if (
    allAuditOnlyEmpty &&
    (noChangeSignal ||
      status === "NELABOT" ||
      (status === "DECIDED" && leafDecs.every((d) => String(d.owner_final_value) === "")))
  ) {
    return {
      ...base,
      classification: "OWNER_CONFIRMED_NO_CHANGE",
      exclusion_reason:
        "owner_decision_recorded; apply-eligible empty leaf values excluded (confirmed no production target or no change)",
    };
  }

  if (status === "LABOT" && !String(base.owner_new || "").trim() && allAuditOnlyEmpty) {
    return {
      ...base,
      classification: "OWNER_CONFIRMED_NO_CHANGE",
      exclusion_reason: "labot_empty_owner_new_audit_only_leaves",
    };
  }

  const ownerNewRaw = String(base.owner_new || "").trim();
  if (ownerNewRaw && (status === "DECIDED" || status === "LABOT")) {
    if (
      (ownerNewRaw.startsWith("{") && ownerNewRaw.endsWith("}")) ||
      (ownerNewRaw.startsWith("[") && ownerNewRaw.endsWith("]"))
    ) {
      try {
        const parsed = JSON.parse(ownerNewRaw);
        if (parsed && typeof parsed === "object" && (parsed.lv != null || parsed.study)) {
          return {
            ...base,
            classification: "APPLY_ELIGIBLE",
            exclusion_reason:
              "owner_new_full_composite_json_present; apply via consolidated leaf/full-card overlay (row-level map N/A)",
          };
        }
      } catch {
        /* fall through */
      }
    }
    const rec = reconstructDecisionLeaves({
      languages: base.target_language,
      card_object_id: base.card_object_id,
      field_path: base.field_path,
      owner_new: ownerNewRaw,
      owner_status: base.owner_status,
      owner_note: base.owner_note,
    });
    if (rec.ok) {
      const expandedCanonical = rec.decidedLeaves
        .map((l) => l.leaf_field_path)
        .filter((p) => isCanonicalLeafFieldPath(p));
      const compoundFromPath = splitCompoundLeafFieldPath(
        String(base.field_path || "").replace(/\s*\/\s*/g, "; ")
      );
      if (
        rec.fullComposite ||
        expandedCanonical.length ||
        compoundFromPath.length ||
        leafDecs.length
      ) {
        return {
          ...base,
          classification: "APPLY_ELIGIBLE",
          exclusion_reason:
            "owner_new_mechanically_recovered; consolidated leaf/full-card overlay applies; finding row excluded from row-level apply map",
        };
      }
    }
  }

  if (!ownerNewRaw && (status === "DECIDED" || status === "LABOT") && allAuditOnlyEmpty) {
    return {
      ...base,
      classification: "OWNER_CONFIRMED_NO_CHANGE",
      exclusion_reason: "decided_without_apply_target_empty_audit_leaves",
    };
  }

  return {
    ...base,
    classification: "OWNER_REVIEW_REQUIRED",
    exclusion_reason: "mechanical_recovery_failed_needs_owner_new",
  };
}

function buildNotApplyMappedDecisions(batchRowRecords, leafDecisions, inventoryRowCount) {
  const expandedRows = batchRowRecords.filter((r) => r.owner_review_generation !== "initial");
  const applyKeys = new Set(
    leafDecisions.filter((d) => d.apply_eligible).map((d) => d.leaf_target_key)
  );
  const leafByKey = new Map(leafDecisions.map((d) => [d.leaf_target_key, d]));

  const rows = expandedRows
    .filter((r) => rowNotInApplyMapping(r, applyKeys))
    .map((r) => classifyNotApplyMappedRow(r, leafByKey, applyKeys));

  const counts = Object.fromEntries(CLASSIFICATIONS.map((c) => [c, 0]));
  for (const r of rows) counts[r.classification] = (counts[r.classification] || 0) + 1;

  const sum = CLASSIFICATIONS.reduce((s, c) => s + (counts[c] || 0), 0);
  const ownerReviewRequired = rows.filter((r) => r.classification === "OWNER_REVIEW_REQUIRED");

  return {
    schema_version: 1,
    finding_rows_not_in_apply_mapping: rows.length,
    inventory_expanded_finding_rows: inventoryRowCount,
    expanded_rows_recorded: expandedRows.length,
    classification_counts: counts,
    classification_sum: sum,
    rows,
    owner_review_required_rows: ownerReviewRequired,
    owner_review_required_count: ownerReviewRequired.length,
    equation_ok: sum === rows.length,
  };
}

module.exports = {
  buildNotApplyMappedDecisions,
  CLASSIFICATIONS,
  classifyNotApplyMappedRow,
};
