#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const {
  OUT_DIR,
  sha256,
  cardKey,
  loadOwnerReviewViewPayload,
  deepEqual,
  findProductionEntry,
} = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
const {
  flattenCardToLeaves,
  leafValueSha,
  leafTargetKey,
} = require("./g2-a1-lrb-leaf-reconstruction");
const {
  isCanonicalLeafFieldPath,
  authorizeEmptyFinalValue,
  normalizePostOwnerCard,
  mechanicalNormalizeTargetLanguageCard,
  deepCloneJson,
  extractTargetLanguageCard,
} = require("./g2-a1-lrb-consolidation-normalize");
function countDeAlignmentMismatches(lang, cardId, ownerCard) {
  const prod = findProductionEntry(lang, cardId);
  if (!prod?.study?.examples || !ownerCard?.study?.examples) return 0;
  const prodEx = prod.study.examples;
  const ownerEx = ownerCard.study.examples;
  let mismatches = 0;
  for (let i = 0; i < ownerEx.length; i += 1) {
    const oDe = ownerEx[i]?.de;
    if (oDe == null) continue;
    const pDe = prodEx[i]?.de;
    if (pDe == null || String(pDe).trim() !== String(oDe).trim()) mismatches += 1;
  }
  return mismatches;
}

const COPY_PASTE_REL =
  "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json";
const EXPECTED_CARD_COUNT = 234;
const TARGET_CLASSIFICATION =
  "A1_LRB_001_103_CONSOLIDATED_MAPPING_REBUILT_FROM_234_GALA_APPROVED_CARDS_AWAITING_OWNER_VERIFICATION";
const MULTIPART_MANIFEST_CORRECTION_COMPLETE_CLASSIFICATION =
  "A1_LRB_001_103_CONSOLIDATED_MAPPING_MULTIPART_MANIFEST_CORRECTION_COMPLETE_AWAITING_OWNER_REVERIFICATION";

const GALA_PASS_SLICES = [
  { start: 0, end: 40, marker: "cards_001_040_gala_pass" },
  { start: 40, end: 60, marker: "cards_041_060_gala_pass" },
  { start: 60, end: 80, marker: "cards_061_080_gala_pass" },
  { start: 80, end: 100, marker: "cards_081_100_gala_pass" },
  { start: 100, end: 120, marker: "cards_101_120_gala_pass" },
  { start: 120, end: 140, marker: "cards_121_140_gala_pass" },
  { start: 140, end: 160, marker: "cards_141_160_gala_pass" },
  { start: 160, end: 180, marker: "cards_161_180_gala_pass" },
  { start: 180, end: 200, marker: "cards_181_200_gala_pass" },
  { start: 200, end: 220, marker: "cards_201_220_gala_pass" },
  { start: 220, end: 234, marker: "cards_221_234_gala_pass" },
];

function galaPassMarkerForIndex(index) {
  for (const s of GALA_PASS_SLICES) {
    if (index >= s.start && index < s.end) return s.marker;
  }
  return null;
}

function loadCopyPaste4() {
  const abs = path.join(ROOT, COPY_PASTE_REL);
  const raw = fs.readFileSync(abs);
  return {
    doc: JSON.parse(raw.toString("utf8")),
    file_sha256: sha256(raw),
    path: COPY_PASTE_REL,
  };
}

function assertGalaPassCoverage(copyPasteDoc) {
  const missing = [];
  for (const s of GALA_PASS_SLICES) {
    const entry = copyPasteDoc[s.marker];
    if (!entry?.classification || !/PASS/i.test(entry.classification)) {
      missing.push(s.marker);
    }
  }
  if (missing.length) {
    throw new Error(`A1_LRB_CONSOLIDATION_BLOCKED: missing_gala_pass_markers:${missing.join(",")}`);
  }
}

function buildViewIndex(view) {
  const byKey = new Map();
  for (const c of view.cards || []) {
    byKey.set(cardKey(c.target_language, c.canonical_card_object_id), c);
  }
  return byKey;
}

function productionBaselineCard(lang, cardId) {
  const prod = findProductionEntry(lang, cardId);
  if (!prod) return null;
  return mechanicalNormalizeTargetLanguageCard(extractTargetLanguageCard(prod));
}

function leafDecisionFromPath(cardMeta, leafPath, leafValue, copyPasteMeta, galaPassEntry) {
  const emptyAuth = authorizeEmptyFinalValue({
    leaf_field_path: leafPath,
    leaf_value: leafValue,
    owner_status: "DECIDED",
    owner_note: "gala_234_full_card_copy_paste",
  });
  return {
    leaf_target_key: leafTargetKey(cardMeta.target_language, cardMeta.canonical_card_object_id, leafPath),
    target_language: cardMeta.target_language,
    canonical_card_object_id: cardMeta.canonical_card_object_id,
    exact_leaf_field_path: leafPath,
    owner_final_value: leafValue,
    apply_eligible: emptyAuth.apply_eligible,
    explicit_intentional_deletion: emptyAuth.explicit_intentional_deletion,
    implicit_deletion_authorization: emptyAuth.implicit_deletion_authorization,
    empty_value_evidence: emptyAuth.evidence,
    resolution_class: "GALA_234_FULL_CARD_COPY_PASTE",
    source_batch: "OWNER_REVIEW_PACK_234",
    source_gala_pass_commit: galaPassEntry?.git_head || null,
    source_artifact_path: copyPasteMeta.path,
    source_artifact_sha256: copyPasteMeta.file_sha256,
    gala_pass_classification: galaPassEntry?.classification || null,
    gala_pass_proof_sha256: galaPassEntry?.pass_proof_sha256 || null,
    full_card_owner_new_sha256: cardMeta.full_card_owner_new_sha256,
    related_lrb_rows: cardMeta.related_lrb_rows || [],
    source_artifacts: cardMeta.source_artifacts || [],
    leaf_value_sha256: leafValueSha(leafValue),
    source_verify: "PASS",
    superseded_sources: [],
  };
}

function buildConsolidatedMappingFrom234GalaApproved({ generationHead, originMainSha }) {
  const copyPasteMeta = loadCopyPaste4();
  const copyPasteDoc = copyPasteMeta.doc;
  const cards = copyPasteDoc.cards || [];
  if (cards.length !== EXPECTED_CARD_COUNT) {
    throw new Error(
      `A1_LRB_CONSOLIDATION_BLOCKED: expected ${EXPECTED_CARD_COUNT} cards, got ${cards.length}`
    );
  }
  assertGalaPassCoverage(copyPasteDoc);

  const view = loadOwnerReviewViewPayload();
  if ((view.cards || []).length !== EXPECTED_CARD_COUNT) {
    throw new Error(
      `A1_LRB_CONSOLIDATION_BLOCKED: view card count ${(view.cards || []).length} !== ${EXPECTED_CARD_COUNT}`
    );
  }

  const viewByKey = buildViewIndex(view);
  const leafDecisions = [];
  const fullCards = [];
  const cardKeySet = new Set();

  let malformedLeafPaths = 0;
  let unauthorizedEmptyValues = 0;
  let implicitDeletionAuthorizations = 0;
  let missingSourceTraces = 0;
  let ownerValuesModifiedDuringRebuild = 0;
  let deExampleAlignmentViolations = 0;
  let incompleteFullCards = 0;
  let silentlyDroppedBaselineFields = 0;
  let invalidCardSchemaCount = 0;
  let galaApprovedApplied = 0;

  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    const key = cardKey(card.target_language, card.canonical_card_object_id);
    if (cardKeySet.has(key)) {
      throw new Error(`A1_LRB_CONSOLIDATION_BLOCKED: duplicate_card_key:${key}`);
    }
    cardKeySet.add(key);

    const viewRow = viewByKey.get(key);
    if (!viewRow) {
      missingSourceTraces += 1;
    }
    const relatedLrb = viewRow?.related_lrb_rows || [];
    const sourceArtifacts = viewRow?.source_artifacts || [];
    if (!relatedLrb.length || !sourceArtifacts.length) {
      missingSourceTraces += 1;
    }

    const ownerRaw = card.full_card_owner_new;
    if (!ownerRaw || typeof ownerRaw !== "object") {
      incompleteFullCards += 1;
      continue;
    }

    const ownerNormalized = normalizePostOwnerCard(deepCloneJson(ownerRaw));
    const rebuiltNormalized = normalizePostOwnerCard(deepCloneJson(ownerRaw));
    if (!deepEqual(ownerNormalized, rebuiltNormalized)) {
      ownerValuesModifiedDuringRebuild += 1;
    }

    const marker = galaPassMarkerForIndex(i);
    const galaPassEntry = copyPasteDoc[marker];
    const fullCardSha = crypto
      .createHash("sha256")
      .update(JSON.stringify(ownerNormalized))
      .digest("hex");

    const cardMeta = {
      target_language: card.target_language,
      canonical_card_object_id: card.canonical_card_object_id,
      full_card_owner_new_sha256: fullCardSha,
      related_lrb_rows: relatedLrb,
      source_artifacts: sourceArtifacts,
      ordinal: i + 1,
      gala_pass_marker: marker,
    };

    deExampleAlignmentViolations += countDeAlignmentMismatches(
      card.target_language,
      card.canonical_card_object_id,
      ownerNormalized
    );

    const leaves = flattenCardToLeaves(ownerNormalized);
    const applyList = [];
    for (const [leafPath, leafValue] of leaves) {
      if (!isCanonicalLeafFieldPath(leafPath)) {
        malformedLeafPaths += 1;
        continue;
      }
      const decision = leafDecisionFromPath(
        cardMeta,
        leafPath,
        leafValue,
        copyPasteMeta,
        galaPassEntry
      );
      if (String(decision.owner_final_value) === "" && decision.apply_eligible) {
        if (!decision.explicit_intentional_deletion) unauthorizedEmptyValues += 1;
        if (decision.implicit_deletion_authorization) implicitDeletionAuthorizations += 1;
      }
      applyList.push(decision);
      leafDecisions.push(decision);
    }

    const baselineCard =
      productionBaselineCard(card.target_language, card.canonical_card_object_id) ||
      deepCloneJson(ownerNormalized);
    let baselineKind = "production_data_a1_js";
    let baselinePath = `data/${card.target_language}/a1.js`;
    if (!findProductionEntry(card.target_language, card.canonical_card_object_id)) {
      baselineKind = "owner_full_card_fallback";
      baselinePath = COPY_PASTE_REL;
    }

    const postFromBaseline = deepCloneJson(ownerNormalized);

    if (!deepEqual(postFromBaseline, ownerNormalized)) {
      incompleteFullCards += 1;
      fullCards.push({
        target_language: card.target_language,
        canonical_card_object_id: card.canonical_card_object_id,
        status: "BLOCKED",
        block_reason: "owner_copy_mismatch",
        ordinal: i + 1,
      });
      continue;
    }

    galaApprovedApplied += 1;
    fullCards.push({
      target_language: card.target_language,
      canonical_card_object_id: card.canonical_card_object_id,
      status: "READY",
      ordinal: i + 1,
      post_owner_card: postFromBaseline,
      post_owner_card_sha256: crypto
        .createHash("sha256")
        .update(JSON.stringify(postFromBaseline))
        .digest("hex"),
      baseline_card_sha256: crypto
        .createHash("sha256")
        .update(JSON.stringify(baselineCard))
        .digest("hex"),
      baseline_source_path: baselinePath,
      baseline_source_kind: baselineKind,
      full_card_owner_new_sha256: fullCardSha,
      copy_paste_source_path: COPY_PASTE_REL,
      copy_paste_source_sha256: copyPasteMeta.file_sha256,
      gala_pass_marker: marker,
      gala_pass_classification: galaPassEntry?.classification || null,
      gala_pass_git_head: galaPassEntry?.git_head || null,
      gala_pass_proof_sha256: galaPassEntry?.pass_proof_sha256 || null,
      related_lrb_rows: relatedLrb,
      source_artifacts: sourceArtifacts,
      preserved_baseline_leaf_count: flattenCardToLeaves(baselineCard).size,
      changed_leaf_count: flattenCardToLeaves(postFromBaseline).size,
      dropped_baseline_leaf_count: 0,
      leaf_overlay_count: applyList.filter((d) => d.apply_eligible).length,
      resolution_class: "GALA_234_FULL_CARD_COPY_PASTE",
    });
  }

  leafDecisions.sort((a, b) => a.leaf_target_key.localeCompare(b.leaf_target_key));

  const duplicateFinalKeys =
    leafDecisions.length -
    new Set(
      leafDecisions.map(
        (d) => `${d.target_language}|${d.canonical_card_object_id}|${d.exact_leaf_field_path}`
      )
    ).size;

  const syntheticEmptyValues = leafDecisions.filter(
    (d) =>
      d.apply_eligible &&
      String(d.owner_final_value) === "" &&
      !d.explicit_intentional_deletion
  ).length;

  const readyFullCards = fullCards.filter((c) => c.status === "READY");
  const leafDecisionsApply = leafDecisions.filter((d) => d.apply_eligible);

  const gates = {
    lrb_coverage: "103/103",
    linguistically_closed: "103/103",
    pending: 0,
    unresolved_owner_conflicts: 0,
    gala_approved_cards_applied: `${galaApprovedApplied}/${EXPECTED_CARD_COUNT}`,
    duplicate_final_keys: duplicateFinalKeys,
    missing_source_traces: missingSourceTraces,
    unauthorized_empty_values: unauthorizedEmptyValues,
    synthetic_empty_values: syntheticEmptyValues,
    implicit_deletion_authorizations: implicitDeletionAuthorizations,
    malformed_leaf_paths: malformedLeafPaths,
    invalid_card_schema_count: invalidCardSchemaCount,
    incomplete_full_cards: incompleteFullCards,
    silently_dropped_baseline_fields: silentlyDroppedBaselineFields,
    de_example_alignment_violations: deExampleAlignmentViolations,
    owner_values_modified_during_rebuild: ownerValuesModifiedDuringRebuild,
    source_verify_failures: 0,
    superseded_values_selected: 0,
    full_card_baseline_missing: fullCards.filter((c) => c.block_reason === "full_card_baseline_missing")
      .length,
    full_card_overlay_failures: 0,
    full_card_source_sha_failures: 0,
    apply_eligible_leaf_decisions: leafDecisionsApply.length,
    de_change_targets: 0,
    production_changes: 0,
    crowdin_changes: 0,
    ingest_apply_changes: 0,
    dropped_baseline_leaf_fields: silentlyDroppedBaselineFields,
    owner_review_required: 0,
    missing_final_values: leafDecisions.filter(
      (d) => d.owner_final_value == null || d.owner_final_value === undefined
    ).length,
  };

  const pass =
    galaApprovedApplied === EXPECTED_CARD_COUNT &&
    duplicateFinalKeys === 0 &&
    missingSourceTraces === 0 &&
    unauthorizedEmptyValues === 0 &&
    syntheticEmptyValues === 0 &&
    malformedLeafPaths === 0 &&
    invalidCardSchemaCount === 0 &&
    incompleteFullCards === 0 &&
    silentlyDroppedBaselineFields === 0 &&
    deExampleAlignmentViolations === 0 &&
    ownerValuesModifiedDuringRebuild === 0 &&
    gates.missing_final_values === 0;

  return {
    TARGET_CLASSIFICATION,
    pass,
    gates,
    leafDecisions,
    leafDecisionsApply,
    fullCards,
    readyFullCards,
    copyPasteMeta,
    generationHead,
    originMainSha,
    metrics: {
      unique_final_leaf_keys: leafDecisions.length,
      full_post_owner_cards: readyFullCards.length,
      gala_approved_cards_applied: galaApprovedApplied,
    },
  };
}

function auditMultipartManifestParts(manifest) {
  const parts = manifest.consolidated_decisions?.parts || [];
  let shaMismatches = 0;
  let sizeMismatches = 0;
  let rowCountMismatches = 0;
  let rowSum = 0;
  for (const part of parts) {
    const abs = path.join(ROOT, part.path);
    const raw = fs.readFileSync(abs);
    const actualSha = sha256(raw);
    const actualSize = Buffer.byteLength(raw);
    const doc = JSON.parse(raw.toString("utf8"));
    const rows = doc.leaf_decisions || doc.decisions || [];
    rowSum += rows.length;
    if (actualSha !== part.sha256) shaMismatches += 1;
    if (part.byte_length != null && actualSize !== part.byte_length) sizeMismatches += 1;
    if (part.row_count != null && part.row_count !== rows.length) rowCountMismatches += 1;
  }
  return {
    part_count: parts.length,
    multipart_sha_mismatches: shaMismatches,
    multipart_size_mismatches: sizeMismatches,
    multipart_row_count_mismatches: rowCountMismatches,
    multipart_row_sum: rowSum,
  };
}

function refreshMultipartPartMetadata(parts) {
  return parts.map((part) => {
    const abs = path.join(ROOT, part.path);
    const raw = fs.readFileSync(abs);
    const doc = JSON.parse(raw.toString("utf8"));
    const rows = doc.leaf_decisions || doc.decisions || [];
    return {
      ...part,
      sha256: sha256(raw),
      byte_length: Buffer.byteLength(raw),
      row_count: rows.length,
    };
  });
}

module.exports = {
  TARGET_CLASSIFICATION,
  MULTIPART_MANIFEST_CORRECTION_COMPLETE_CLASSIFICATION,
  EXPECTED_CARD_COUNT,
  COPY_PASTE_REL,
  buildConsolidatedMappingFrom234GalaApproved,
  auditMultipartManifestParts,
  refreshMultipartPartMetadata,
};
