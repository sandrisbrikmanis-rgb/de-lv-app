#!/usr/bin/env node
"use strict";

const { sha256 } = require("./g2-a1-lrb-consolidation-owner-review-artifacts");

const ALIAS_CLASS = {
  UNIQUE: "UNIQUE_PRODUCTION_TARGET",
  PROVEN: "PROVEN_IDENTICAL_ALIAS",
  CONFLICT: "UNRESOLVED_ALIAS_CONFLICT",
};

function productionSlotKey(card) {
  return `${card.target_language}|${card.production_file}|${card.production_array_index}`;
}

function ownerPayloadSha256(card) {
  if (card.post_owner_card_sha256) return card.post_owner_card_sha256;
  if (card.owner_new_target_lang_sha256) return card.owner_new_target_lang_sha256;
  return null;
}

function analyzeProductionTargetAliases(cards) {
  const bySlot = new Map();
  for (const card of cards) {
    if (card.atomic_status === "BLOCKED") continue;
    const slot = productionSlotKey(card);
    if (!bySlot.has(slot)) bySlot.set(slot, []);
    bySlot.get(slot).push(card);
  }

  const perCardClassification = new Map();
  const provenAliasGroups = [];
  let unresolvedAliasConflicts = 0;
  let aliasCollapsedOwnerKeys = 0;

  for (const [slot, group] of bySlot) {
    if (group.length === 1) {
      perCardClassification.set(group[0].card_key, ALIAS_CLASS.UNIQUE);
      continue;
    }

    const currentShas = new Set(group.map((c) => c.production_current_entry_sha256));
    const plannedShas = new Set(group.map((c) => c.production_planned_entry_sha256));
    const ownerShas = new Set(group.map((c) => ownerPayloadSha256(c)).filter(Boolean));

    const proven =
      currentShas.size === 1 &&
      plannedShas.size === 1 &&
      ownerShas.size === 1 &&
      group.every(
        (c) =>
          c.production_file === group[0].production_file &&
          c.production_array_index === group[0].production_array_index &&
          c.target_language === group[0].target_language
      );

    if (proven) {
      aliasCollapsedOwnerKeys += group.length - 1;
      provenAliasGroups.push({
        production_slot: slot,
        production_language: group[0].target_language,
        production_file: group[0].production_file,
        production_mirror_file: group[0].production_mirror_file,
        production_array_index: group[0].production_array_index,
        owner_card_keys: group.map((c) => c.card_key),
        production_current_entry_sha256: [...currentShas][0],
        production_planned_entry_sha256: [...plannedShas][0],
        owner_payload_sha256: [...ownerShas][0],
        classification: ALIAS_CLASS.PROVEN,
      });
      for (const card of group) {
        perCardClassification.set(card.card_key, ALIAS_CLASS.PROVEN);
      }
    } else {
      unresolvedAliasConflicts += 1;
      for (const card of group) {
        perCardClassification.set(card.card_key, ALIAS_CLASS.CONFLICT);
      }
    }
  }

  const ownerTargetKeys = cards.filter((c) => c.atomic_status !== "BLOCKED").length;
  const uniqueProductionSlots = bySlot.size;

  return {
    owner_target_keys: ownerTargetKeys,
    unique_production_slots: uniqueProductionSlots,
    alias_collapsed_owner_keys: aliasCollapsedOwnerKeys,
    proven_alias_groups: provenAliasGroups.length,
    unresolved_alias_conflicts: unresolvedAliasConflicts,
    proven_alias_group_details: provenAliasGroups,
    per_card_classification: Object.fromEntries(perCardClassification),
    unique_production_target_count: ownerTargetKeys - aliasCollapsedOwnerKeys,
  };
}

function validateProductionTargetAliasGate(cards) {
  const analysis = analyzeProductionTargetAliases(cards);
  const errors = [];
  if (analysis.unresolved_alias_conflicts !== 0) {
    errors.push(`BLOCKED_TARGET_ALIAS_CONFLICT:count=${analysis.unresolved_alias_conflicts}`);
  }
  return { pass: errors.length === 0, errors, analysis };
}

function productionLeafSlotKey(card, exactLeafFieldPath) {
  return `${productionSlotKey(card)}|${exactLeafFieldPath}`;
}

function analyzeLeafAliasCollapse(cards, leafDecisions, cardKeyFromDecision) {
  const cardByKey = new Map(cards.map((c) => [c.card_key, c]));
  const seen = new Set();
  let collapsedDuplicateLeafTraceRows = 0;
  for (const decision of leafDecisions) {
    const ck = cardKeyFromDecision(decision);
    const card = cardByKey.get(ck);
    if (!card || card.atomic_status === "BLOCKED") continue;
    const key = productionLeafSlotKey(card, decision.exact_leaf_field_path);
    if (seen.has(key)) collapsedDuplicateLeafTraceRows += 1;
    else seen.add(key);
  }
  return {
    owner_leaf_trace_rows: leafDecisions.length,
    unique_production_leaf_targets: seen.size,
    collapsed_duplicate_leaf_trace_rows: collapsedDuplicateLeafTraceRows,
  };
}

module.exports = {
  ALIAS_CLASS,
  productionSlotKey,
  analyzeProductionTargetAliases,
  validateProductionTargetAliasGate,
  productionLeafSlotKey,
  analyzeLeafAliasCollapse,
};
