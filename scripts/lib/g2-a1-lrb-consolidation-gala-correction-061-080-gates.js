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
const {
  assessFullCompositeCompleteness,
} = require("./g2-a1-lrb-consolidation-gala-correction-gates");

const PASSEN_KEY = "gr|passen";
const PASSEN_EX2_DE = "Die Farbe passt zu dir.";
const PASSEN_EX2_LV_EXPECTED = "Το χρώμα σού πηγαίνει.";

function loadExpectedCards061080Map(correctionByKey) {
  const expected = new Map();
  const bundlePath = path.join(
    OUT_DIR,
    "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-061-080.json"
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

function auditPassenSemanticSource(card) {
  let extraMeaningNotInSource = 0;
  let semanticNarrowingFromSource = 0;
  if (!card?.study?.examples) return { extraMeaningNotInSource: 1, semanticNarrowingFromSource: 0 };

  const ex2 = card.study.examples[2];
  if (!ex2 || String(ex2.de || "").trim() !== PASSEN_EX2_DE) {
    semanticNarrowingFromSource += 1;
    return { extraMeaningNotInSource, semanticNarrowingFromSource };
  }
  const lv = String(ex2.lv || "").trim();
  if (lv !== PASSEN_EX2_LV_EXPECTED) semanticNarrowingFromSource += 1;
  if (/^Αυτό\b/.test(lv)) extraMeaningNotInSource += 1;

  return { extraMeaningNotInSource, semanticNarrowingFromSource };
}

function runGalaCorrection061080Gates({
  scopeCards,
  appliedByKey,
  correctionChanges,
  correctionByKey,
}) {
  const scopeKeys = scopeCards.map((c) => cardKey(c.target_language, c.canonical_card_object_id));
  const expectedByKey = loadExpectedCards061080Map(correctionByKey);

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
  let extraMeaningNotInSource = 0;
  let semanticNarrowingFromSource = 0;
  const schemaSectionAccentsFailures = [];

  for (const key of scopeKeys) {
    const applied = appliedByKey.get(key);
    if (!assessFullCompositeCompleteness(applied)) fullCompositeFailures += 1;
    validateSectionAccents(applied, key, schemaSectionAccentsFailures);
    if (key === PASSEN_KEY) {
      const sem = auditPassenSemanticSource(applied);
      extraMeaningNotInSource += sem.extraMeaningNotInSource;
      semanticNarrowingFromSource += sem.semanticNarrowingFromSource;
    }
  }

  const pass =
    correctionsAppliedExactly === correctionChanges.length &&
    baseGates.pending === 0 &&
    baseGates.wrong_language_residue === 0 &&
    baseGates.de_alignment === 0 &&
    (baseGates.duplicate_scope_keys ?? 0) === 0 &&
    baseGates.duplicate_degenerate_example_pairs === 0 &&
    baseGates.internal_contradictions === 0 &&
    extraMeaningNotInSource === 0 &&
    semanticNarrowingFromSource === 0 &&
    fullCompositeFailures === 0 &&
    schemaSectionAccentsFailures.length === 0;

  return {
    applied_exactly: `${correctionsAppliedExactly}/${correctionChanges.length}`,
    pending: baseGates.pending,
    wrong_language_residue: baseGates.wrong_language_residue,
    de_alignment: baseGates.de_alignment,
    de_target_alignment_violations: baseGates.de_alignment,
    extra_meaning_not_in_source: extraMeaningNotInSource,
    semantic_narrowing_from_source: semanticNarrowingFromSource,
    duplicate_degenerate_pairs:
      (baseGates.duplicate_scope_keys ?? 0) + (baseGates.duplicate_degenerate_example_pairs ?? 0),
    internal_card_contradictions: baseGates.internal_contradictions,
    internal_contradictions: baseGates.internal_contradictions,
    full_composite_completeness: fullCompositeFailures === 0 ? "PASS" : "FAIL",
    full_composite_completeness_failures: fullCompositeFailures,
    schema_sectionAccents_failures: schemaSectionAccentsFailures.length,
    schema_sectionAccents_failure_details: schemaSectionAccentsFailures.slice(0, 20),
    cards_061_080_reviewed: scopeKeys.length,
    pass,
  };
}

module.exports = { runGalaCorrection061080Gates, auditPassenSemanticSource };
