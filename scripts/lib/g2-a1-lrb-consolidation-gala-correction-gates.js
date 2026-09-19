#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const {
  cardKey,
  deepEqual,
  OUT_DIR,
} = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
const {
  validateSectionAccents,
  runOwnerCopyPasteGates,
} = require("./g2-a1-lrb-consolidation-owner-copy-paste-gates");
const { isSyntheticCardSkeleton } = require("./g2-a1-lrb-consolidation-full-cards");
const { flattenCardToLeaves } = require("./g2-a1-lrb-leaf-reconstruction");

function loadExpectedCards001040Map(correctionByKey) {
  const expected = new Map();
  const bundlePaths = [
    {
      p: path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-FIRST-20.json"),
      start: 0,
      end: 20,
    },
    {
      p: path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-021-040.json"),
      start: 20,
      end: 40,
    },
  ];
  for (const { p } of bundlePaths) {
    if (!fs.existsSync(p)) continue;
    const doc = JSON.parse(fs.readFileSync(p, "utf8"));
    for (const c of doc.cards || []) {
      expected.set(cardKey(c.target_language, c.canonical_card_object_id), {
        full_card_owner_new: c.full_card_owner_new,
      });
    }
  }
  for (const [key, ch] of correctionByKey) {
    expected.set(key, { full_card_owner_new: ch.full_card_owner_new });
  }
  return expected;
}

function hasNonemptyExplanation(study) {
  const expl = study?.explanation;
  if (Array.isArray(expl) && expl.length > 0) return true;
  if (typeof expl === "string" && expl.trim().length > 0) return true;
  return false;
}

function assessFullCompositeCompleteness(card) {
  if (!card || typeof card !== "object") return false;
  if (isSyntheticCardSkeleton(card)) return false;
  if (!String(card.lv || "").trim()) return false;
  if (!String(card.study?.translation || "").trim()) return false;
  if (!hasNonemptyExplanation(card.study)) return false;
  const ex = card.study?.examples;
  if (!Array.isArray(ex) || !ex.some((e) => e && String(e.lv || "").trim())) return false;
  return flattenCardToLeaves(card).size >= 3;
}

function runGalaCorrection001040Gates({
  scopeCards,
  appliedByKey,
  correctionChanges,
  correctionByKey,
}) {
  const scopeKeys = scopeCards.map((c) => cardKey(c.target_language, c.canonical_card_object_id));
  const expectedByKey = loadExpectedCards001040Map(correctionByKey);

  let correctionsAppliedExactly = 0;
  for (const ch of correctionChanges) {
    const key = cardKey(ch.target_language, ch.canonical_card_object_id);
    const applied = appliedByKey.get(key);
    if (applied && deepEqual(applied, ch.full_card_owner_new)) correctionsAppliedExactly += 1;
  }

  const sourceByKey = new Map();
  for (const key of scopeKeys) {
    const exp = expectedByKey.get(key);
    if (exp) sourceByKey.set(key, exp);
  }

  const baseGates = runOwnerCopyPasteGates({ scopeCards, sourceByKey, appliedByKey });

  let fullCompositeFailures = 0;
  const schemaSectionAccentsFailures = [];
  for (const key of scopeKeys) {
    const applied = appliedByKey.get(key);
    if (!assessFullCompositeCompleteness(applied)) fullCompositeFailures += 1;
    validateSectionAccents(applied, key, schemaSectionAccentsFailures);
  }

  const pass =
    correctionsAppliedExactly === correctionChanges.length &&
    baseGates.pending === 0 &&
    baseGates.empty_target_fields === 0 &&
    baseGates.wrong_language_residue === 0 &&
    baseGates.semantic_source_fidelity_violations === 0 &&
    baseGates.de_alignment === 0 &&
    baseGates.duplicate_degenerate_pairs === 0 &&
    baseGates.internal_contradictions === 0 &&
    fullCompositeFailures === 0 &&
    schemaSectionAccentsFailures.length === 0;

  return {
    applied_exactly: `${correctionsAppliedExactly}/${correctionChanges.length}`,
    pending: baseGates.pending,
    empty_target_fields: baseGates.empty_target_fields,
    wrong_language_residue: baseGates.wrong_language_residue,
    semantic_source_fidelity_violations: baseGates.semantic_source_fidelity_violations,
    de_alignment: baseGates.de_alignment,
    duplicate_degenerate_pairs: baseGates.duplicate_degenerate_pairs,
    internal_contradictions: baseGates.internal_contradictions,
    full_composite_completeness: fullCompositeFailures === 0 ? "PASS" : "FAIL",
    full_composite_completeness_failures: fullCompositeFailures,
    schema_sectionAccents_failures: schemaSectionAccentsFailures.length,
    schema_sectionAccents_failure_details: schemaSectionAccentsFailures.slice(0, 20),
    cards_001_040_reviewed: scopeKeys.length,
    pass,
  };
}

module.exports = {
  runGalaCorrection001040Gates,
  assessFullCompositeCompleteness,
  loadExpectedCards001040Map,
};
