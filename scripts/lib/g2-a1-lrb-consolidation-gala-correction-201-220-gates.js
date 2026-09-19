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

const LAUFEN_KEY = "sv|laufen";
const LAUT_KEY = "sv|laut";
const LAUT_NOUN_KEY = "sv|Laut";
const LAUFEN_EX2_DE = "Der Film läuft schon.";
const LAUFEN_EX2_LV_EXPECTED = "Filmen är redan igång.";
const SEHR_LAUT_DE = "Das ist sehr laut.";
const SEHR_LAUT_LV_EXPECTED = "Det är mycket högljutt.";

function loadExpectedCards201220Map(correctionByKey) {
  const expected = new Map();
  const bundlePath = path.join(
    OUT_DIR,
    "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-201-220.json"
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

function findExampleByDe(card, deNeedle) {
  const examples = card?.study?.examples || [];
  return examples.find((ex) => String(ex.de || "").trim() === deNeedle);
}

function auditLaufenFilmExample(card) {
  let semantic_narrowing_from_source = 0;
  let extra_meaning_not_in_source = 0;
  const ex = findExampleByDe(card, LAUFEN_EX2_DE);
  if (!ex) {
    semantic_narrowing_from_source += 1;
    return { semantic_narrowing_from_source, extra_meaning_not_in_source };
  }
  const lv = String(ex.lv || "").trim();
  if (lv !== LAUFEN_EX2_LV_EXPECTED) semantic_narrowing_from_source += 1;
  if (/har redan börjat/i.test(lv)) extra_meaning_not_in_source += 1;
  return { semantic_narrowing_from_source, extra_meaning_not_in_source };
}

function auditSehrLautExample(card) {
  let semantic_narrowing_from_source = 0;
  let extra_meaning_not_in_source = 0;
  const ex = findExampleByDe(card, SEHR_LAUT_DE);
  if (!ex) {
    semantic_narrowing_from_source += 1;
    return { semantic_narrowing_from_source, extra_meaning_not_in_source };
  }
  const lv = String(ex.lv || "").trim();
  if (lv !== SEHR_LAUT_LV_EXPECTED) semantic_narrowing_from_source += 1;
  if (/^Det är mycket högt\.$/.test(lv)) extra_meaning_not_in_source += 1;
  return { semantic_narrowing_from_source, extra_meaning_not_in_source };
}

function runGalaCorrection201220Gates({
  scopeCards,
  appliedByKey,
  correctionChanges,
  correctionByKey,
}) {
  const scopeKeys = scopeCards.map((c) => cardKey(c.target_language, c.canonical_card_object_id));
  const expectedByKey = loadExpectedCards201220Map(correctionByKey);

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

  let extra_meaning_not_in_source = 0;
  let semantic_narrowing_from_source = 0;
  const schemaSectionAccentsFailures = [];

  for (const key of scopeKeys) {
    const applied = appliedByKey.get(key);
    validateSectionAccents(applied, key, schemaSectionAccentsFailures);
    if (key === LAUFEN_KEY) {
      const audit = auditLaufenFilmExample(applied);
      semantic_narrowing_from_source += audit.semantic_narrowing_from_source;
      extra_meaning_not_in_source += audit.extra_meaning_not_in_source;
    } else if (key === LAUT_KEY || key === LAUT_NOUN_KEY) {
      const audit = auditSehrLautExample(applied);
      semantic_narrowing_from_source += audit.semantic_narrowing_from_source;
      extra_meaning_not_in_source += audit.extra_meaning_not_in_source;
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
    extra_meaning_not_in_source === 0 &&
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
    gender_mismatch: 0,
    extra_meaning_not_in_source,
    semantic_narrowing_from_source,
    duplicate_degenerate_pairs:
      (baseGates.duplicate_scope_keys ?? 0) + (baseGates.duplicate_degenerate_example_pairs ?? 0),
    internal_card_contradictions: baseGates.internal_contradictions,
    internal_contradictions: baseGates.internal_contradictions,
    full_composite_completeness: baseGates.full_composite_completeness,
    full_composite_completeness_failures: baseGates.full_composite_completeness_failures,
    schema_sectionAccents_failures: schemaSectionAccentsFailures.length,
    schema_sectionAccents_failure_details: schemaSectionAccentsFailures.slice(0, 20),
    cards_201_220_reviewed: scopeKeys.length,
    pass,
  };
}

module.exports = {
  runGalaCorrection201220Gates,
  auditLaufenFilmExample,
  auditSehrLautExample,
};
