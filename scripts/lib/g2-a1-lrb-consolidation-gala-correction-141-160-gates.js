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
} = require("./g2-a1-lrb-consolidation-owner-copy-paste-gates");
const { runOwnerCopyPasteExtendedGates } = require("./g2-a1-lrb-consolidation-owner-copy-paste-extended-gates");

const DA_KEY = "sl|da";
const ALSO_KEY = "sr|also";
const DA_EX1_DE = "Ich war da.";
const DA_EX1_LV_EXPECTED = "Bil sem tam oziroma bila sem tam.";
const ALSO_EX1_DE = "Du bist krank, also gehst du nicht zur Arbeit.";
const ALSO_EX2_DE = "Ich habe viel gelernt, also verstehe ich es jetzt.";

function loadExpectedCards141160Map(correctionByKey) {
  const expected = new Map();
  const bundlePath = path.join(
    OUT_DIR,
    "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-141-160.json"
  );
  if (fs.existsSync(bundlePath)) {
    const doc = JSON.parse(fs.readFileSync(bundlePath, "utf8"));
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

function auditDaGenderNeutrality(card) {
  let gender_mismatch = 0;
  let semantic_narrowing_from_source = 0;
  const ex1 = card?.study?.examples?.[1];
  if (!ex1 || String(ex1.de || "").trim() !== DA_EX1_DE) {
    semantic_narrowing_from_source += 1;
    return { gender_mismatch, semantic_narrowing_from_source };
  }
  const lv = String(ex1.lv || "").trim();
  if (lv !== DA_EX1_LV_EXPECTED) semantic_narrowing_from_source += 1;
  if (/^Bil sem tam\.$/.test(lv) || /^Bila sem tam\.$/.test(lv)) gender_mismatch += 1;
  if (!/oziroma/i.test(lv)) gender_mismatch += 1;
  return { gender_mismatch, semantic_narrowing_from_source };
}

function auditAlsoGenderNeutrality(card) {
  let gender_mismatch = 0;
  let semantic_narrowing_from_source = 0;
  const ex1 = card?.study?.examples?.[1];
  const ex2 = card?.study?.examples?.[2];
  if (!ex1 || String(ex1.de || "").trim() !== ALSO_EX1_DE) semantic_narrowing_from_source += 1;
  else {
    const lv1 = String(ex1.lv || "").trim();
    if (!/болестан\/болесна/i.test(lv1)) gender_mismatch += 1;
    if (/^Болестан си/i.test(lv1) && !/болесна/i.test(lv1)) gender_mismatch += 1;
  }
  if (!ex2 || String(ex2.de || "").trim() !== ALSO_EX2_DE) semantic_narrowing_from_source += 1;
  else {
    const lv2 = String(ex2.lv || "").trim();
    if (!/учио\/учила/i.test(lv2)) gender_mismatch += 1;
  }
  return { gender_mismatch, semantic_narrowing_from_source };
}

function runGalaCorrection141160Gates({
  scopeCards,
  appliedByKey,
  correctionChanges,
  correctionByKey,
}) {
  const scopeKeys = scopeCards.map((c) => cardKey(c.target_language, c.canonical_card_object_id));
  const expectedByKey = loadExpectedCards141160Map(correctionByKey);

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

  const baseGates = runOwnerCopyPasteExtendedGates({ scopeCards, sourceByKey, appliedByKey });

  let gender_mismatch = 0;
  let semantic_narrowing_from_source = 0;
  const schemaSectionAccentsFailures = [];

  for (const key of scopeKeys) {
    const applied = appliedByKey.get(key);
    validateSectionAccents(applied, key, schemaSectionAccentsFailures);
    if (key === DA_KEY) {
      const audit = auditDaGenderNeutrality(applied);
      gender_mismatch += audit.gender_mismatch;
      semantic_narrowing_from_source += audit.semantic_narrowing_from_source;
    } else if (key === ALSO_KEY) {
      const audit = auditAlsoGenderNeutrality(applied);
      gender_mismatch += audit.gender_mismatch;
      semantic_narrowing_from_source += audit.semantic_narrowing_from_source;
    }
  }

  const pass =
    correctionsAppliedExactly === correctionChanges.length &&
    baseGates.pending === 0 &&
    baseGates.wrong_language_residue === 0 &&
    baseGates.de_alignment === 0 &&
    baseGates.semantic_source_fidelity_violations === 0 &&
    (baseGates.duplicate_scope_keys ?? 0) === 0 &&
    baseGates.duplicate_degenerate_example_pairs === 0 &&
    baseGates.internal_contradictions === 0 &&
    gender_mismatch === 0 &&
    semantic_narrowing_from_source === 0 &&
    baseGates.full_composite_completeness === "PASS" &&
    schemaSectionAccentsFailures.length === 0;

  return {
    applied_exactly: `${correctionsAppliedExactly}/${correctionChanges.length}`,
    pending: baseGates.pending,
    wrong_language_residue: baseGates.wrong_language_residue,
    de_alignment: baseGates.de_alignment,
    de_target_alignment_violations: baseGates.de_alignment,
    semantic_source_fidelity_violations: baseGates.semantic_source_fidelity_violations,
    gender_mismatch,
    extra_meaning_not_in_source: 0,
    semantic_narrowing_from_source,
    duplicate_degenerate_pairs:
      (baseGates.duplicate_scope_keys ?? 0) + (baseGates.duplicate_degenerate_example_pairs ?? 0),
    internal_card_contradictions: baseGates.internal_contradictions,
    internal_contradictions: baseGates.internal_contradictions,
    full_composite_completeness: baseGates.full_composite_completeness,
    full_composite_completeness_failures: baseGates.full_composite_completeness_failures,
    schema_sectionAccents_failures: schemaSectionAccentsFailures.length,
    schema_sectionAccents_failure_details: schemaSectionAccentsFailures.slice(0, 20),
    cards_141_160_reviewed: scopeKeys.length,
    pass,
  };
}

module.exports = {
  runGalaCorrection141160Gates,
  auditDaGenderNeutrality,
  auditAlsoGenderNeutrality,
};
