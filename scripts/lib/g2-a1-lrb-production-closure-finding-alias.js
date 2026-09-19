#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { sha256, cardKey } = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
const { stableLeafValue } = require("./g2-a1-lrb-leaf-reconstruction");
const { isCanonicalLeafFieldPath } = require("./g2-a1-lrb-consolidation-normalize");
const { productionLeafSlotKey } = require("./g2-a1-lrb-production-target-alias");

const ALIAS_CLASS_PROVEN = "PROVEN_IDENTICAL_ALIAS";

function loadAliasReconciliationArtifact(reconciliationAbs) {
  const raw = fs.readFileSync(reconciliationAbs);
  const doc = JSON.parse(raw.toString("utf8"));
  return {
    doc,
    alias_evidence_path: path.relative(ROOT, reconciliationAbs),
    alias_evidence_sha256: sha256(raw),
  };
}

/**
 * Reconstruct proven production-leaf-slot alias evidence from reconciliation JSON + leaf decisions.
 * Does not read finding-row classifications.
 */
function buildProvenAliasLeafSlotEvidence(reconciliationAbs, atomicCards, leafDecisions) {
  const { doc, alias_evidence_path, alias_evidence_sha256 } = loadAliasReconciliationArtifact(
    reconciliationAbs
  );
  const cardByKey = new Map(atomicCards.map((c) => [c.card_key, c]));
  const groups = (doc.proven_alias_group_details || []).filter(
    (g) =>
      g.classification === ALIAS_CLASS_PROVEN &&
      Array.isArray(g.owner_card_keys) &&
      g.owner_card_keys.length >= 2
  );

  const provenLeafSlots = new Map();
  const cardToGroupMeta = new Map();

  for (const group of groups) {
    const alias_group_id = group.production_slot;
    const production_slot_key = group.production_slot;
    const alias_owner_card_keys = [...group.owner_card_keys];
    const primary_owner_card_key = alias_owner_card_keys[0];
    const meta = {
      alias_group_id,
      production_slot_key,
      alias_owner_card_keys,
      primary_owner_card_key,
      alias_evidence_path,
      alias_evidence_sha256,
      owner_payload_sha256: group.owner_payload_sha256 || null,
    };
    for (const ck of alias_owner_card_keys) {
      cardToGroupMeta.set(ck, meta);
    }

    const leafDecisionsBySlot = new Map();
    for (const ck of alias_owner_card_keys) {
      const card = cardByKey.get(ck);
      if (!card) continue;
      for (const decision of leafDecisions) {
        if (cardKey(decision.target_language, decision.canonical_card_object_id) !== ck) continue;
        const slotKey = productionLeafSlotKey(card, decision.exact_leaf_field_path);
        if (!leafDecisionsBySlot.has(slotKey)) leafDecisionsBySlot.set(slotKey, new Map());
        leafDecisionsBySlot.get(slotKey).set(ck, decision);
      }
    }

    for (const [slotKey, byCard] of leafDecisionsBySlot) {
      if (byCard.size < 2) continue;
      const ownerKeysPresent = [...byCard.keys()];
      if (!alias_owner_card_keys.every((k) => ownerKeysPresent.includes(k))) continue;
      const values = alias_owner_card_keys.map((k) =>
        stableLeafValue(byCard.get(k).owner_final_value)
      );
      if (!values.every((v) => v === values[0])) continue;
      provenLeafSlots.set(slotKey, { ...meta, identical_owner_leaf_value_sha256: byCard.get(primary_owner_card_key).leaf_value_sha256 || null });
    }
  }

  return {
    provenLeafSlots,
    cardToGroupMeta,
    groups,
    alias_evidence_path,
    alias_evidence_sha256,
  };
}

function canonicalLeafKeysFromRecord(record) {
  return (record.leaf_target_keys || []).filter((k) => {
    const fp = k.split("|").slice(2).join("|");
    return isCanonicalLeafFieldPath(fp);
  });
}

function recordMapsToProvenAliasSlot(record, rowCardKey, card, provenLeafSlots, groupMeta, leafByKey) {
  if (!groupMeta || rowCardKey === groupMeta.primary_owner_card_key) return null;
  if (groupMeta.alias_owner_card_keys.length < 2) return null;

  const leafKeys = canonicalLeafKeysFromRecord(record).filter((lk) => leafByKey.has(lk));
  if (!leafKeys.length) return null;

  let matchedProven = 0;
  for (const lk of leafKeys) {
    const fp = lk.split("|").slice(2).join("|");
    const slotKey = productionLeafSlotKey(card, fp);
    const ev = provenLeafSlots.get(slotKey);
    if (ev && ev.alias_group_id === groupMeta.alias_group_id) {
      matchedProven += 1;
      continue;
    }
    return null;
  }
  if (!matchedProven) return null;

  return {
    production_slot_key: groupMeta.production_slot_key,
    alias_group_id: groupMeta.alias_group_id,
    alias_owner_card_keys: groupMeta.alias_owner_card_keys,
    alias_evidence_path: groupMeta.alias_evidence_path,
    alias_evidence_sha256: groupMeta.alias_evidence_sha256,
  };
}

/**
 * Independent verification of PROVEN_IDENTICAL_ALIAS finding rows (does not trust builder labels).
 */
function verifyFindingRowAliasClassifications(
  findingRows,
  reconciliationAbs,
  atomicCards,
  leafDecisions
) {
  const evidence = buildProvenAliasLeafSlotEvidence(reconciliationAbs, atomicCards, leafDecisions);
  const cardByKey = new Map(atomicCards.map((c) => [c.card_key, c]));

  let false_alias_classifications = 0;
  let alias_rows_without_proven_group = 0;
  let alias_rows_without_two_distinct_owner_keys = 0;
  let alias_rows_without_identical_payload_proof = 0;
  const aliasRows = [];
  const falseAliasSamples = [];

  for (const row of findingRows) {
    const isAlias = row.final_classification === ALIAS_CLASS_PROVEN;
    if (!isAlias) continue;

    const rowCk = cardKey(row.target_language, row.canonical_card_object_id);
    const card = cardByKey.get(rowCk);
    const groupMeta = evidence.cardToGroupMeta.get(rowCk);

    if (!groupMeta) {
      alias_rows_without_proven_group += 1;
      false_alias_classifications += 1;
      if (falseAliasSamples.length < 5) falseAliasSamples.push({ row, reason: "no_proven_group" });
      continue;
    }
    if (groupMeta.alias_owner_card_keys.length < 2) {
      alias_rows_without_two_distinct_owner_keys += 1;
      false_alias_classifications += 1;
      continue;
    }
    if (!card) {
      false_alias_classifications += 1;
      continue;
    }

    const recordLike = {
      leaf_target_keys: row.primary_leaf_target_key
        ? [row.primary_leaf_target_key]
        : row.leaf_target_keys || [],
      target_language: row.target_language,
      canonical_card_object_id: row.canonical_card_object_id,
      field_path_raw: row.field_path,
    };
    if (row.leaf_target_keys?.length) {
      recordLike.leaf_target_keys = row.leaf_target_keys;
    }

    const leafByKey = new Map(leafDecisions.map((d) => [d.leaf_target_key, d]));
    const rebuilt = recordMapsToProvenAliasSlot(
      { ...recordLike, leaf_target_keys: row.leaf_target_keys || recordLike.leaf_target_keys },
      rowCk,
      card,
      evidence.provenLeafSlots,
      groupMeta,
      leafByKey
    );
    if (!rebuilt) {
      alias_rows_without_identical_payload_proof += 1;
      false_alias_classifications += 1;
      if (falseAliasSamples.length < 5) {
        falseAliasSamples.push({ finding_stable_id: row.finding_stable_id, reason: "payload_or_slot_proof_fail" });
      }
      continue;
    }

    if (rowCk === groupMeta.primary_owner_card_key) {
      false_alias_classifications += 1;
      continue;
    }

    aliasRows.push({
      ...row,
      production_slot_key: rebuilt.production_slot_key,
      alias_group_id: rebuilt.alias_group_id,
      alias_owner_card_keys: rebuilt.alias_owner_card_keys,
      alias_evidence_path: rebuilt.alias_evidence_path,
      alias_evidence_sha256: rebuilt.alias_evidence_sha256,
    });
  }

  return {
    pass:
      false_alias_classifications === 0 &&
      alias_rows_without_proven_group === 0 &&
      alias_rows_without_two_distinct_owner_keys === 0 &&
      alias_rows_without_identical_payload_proof === 0,
    false_alias_classifications,
    alias_rows_without_proven_group,
    alias_rows_without_two_distinct_owner_keys,
    alias_rows_without_identical_payload_proof,
    proven_alias_groups: evidence.groups.length,
    alias_row_count: aliasRows.length,
    alias_rows: aliasRows,
    falseAliasSamples,
    evidence,
  };
}

module.exports = {
  ALIAS_CLASS_PROVEN,
  buildProvenAliasLeafSlotEvidence,
  recordMapsToProvenAliasSlot,
  verifyFindingRowAliasClassifications,
  canonicalLeafKeysFromRecord,
};
