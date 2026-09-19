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

const BRINGEN_KEY = "et|bringen";
const BRINGEN_REQUIRED_COMPARISON_MEANINGS = [
  "tooma",
  "ära viima",
  "viima",
  "kohale toimetama",
  "võtma",
];

function loadExpectedCards041060Map(correctionByKey) {
  const expected = new Map();
  const bundlePath = path.join(
    OUT_DIR,
    "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-041-060.json"
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

function auditBringenSemanticSource(card) {
  let extraMeaningNotInSource = 0;
  let semanticNarrowingFromSource = 0;
  if (!card?.study) return { extraMeaningNotInSource: 1, semanticNarrowingFromSource: 1 };

  const blob = JSON.stringify(card);
  if (/holen/i.test(blob)) extraMeaningNotInSource += 1;

  const comp = card.study.comparison;
  if (!Array.isArray(comp) || comp.length !== 5) {
    semanticNarrowingFromSource += 1;
    return { extraMeaningNotInSource, semanticNarrowingFromSource };
  }

  for (let i = 0; i < BRINGEN_REQUIRED_COMPARISON_MEANINGS.length; i += 1) {
    const got = String(comp[i]?.meaning ?? "").trim();
    if (got !== BRINGEN_REQUIRED_COMPARISON_MEANINGS[i]) semanticNarrowingFromSource += 1;
  }

  for (const row of comp) {
    const w = String(row?.word ?? "").trim().toLowerCase();
    if (w === "holen") extraMeaningNotInSource += 1;
  }

  return { extraMeaningNotInSource, semanticNarrowingFromSource };
}

function runGalaCorrection041060Gates({
  scopeCards,
  appliedByKey,
  correctionChanges,
  correctionByKey,
}) {
  const scopeKeys = scopeCards.map((c) => cardKey(c.target_language, c.canonical_card_object_id));
  const expectedByKey = loadExpectedCards041060Map(correctionByKey);

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
    if (key === BRINGEN_KEY) {
      const sem = auditBringenSemanticSource(applied);
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
    extra_meaning_not_in_source: extraMeaningNotInSource,
    semantic_narrowing_from_source: semanticNarrowingFromSource,
    duplicate_degenerate_pairs:
      (baseGates.duplicate_scope_keys ?? 0) + (baseGates.duplicate_degenerate_example_pairs ?? 0),
    internal_contradictions: baseGates.internal_contradictions,
    full_composite_completeness: fullCompositeFailures === 0 ? "PASS" : "FAIL",
    full_composite_completeness_failures: fullCompositeFailures,
    schema_sectionAccents_failures: schemaSectionAccentsFailures.length,
    schema_sectionAccents_failure_details: schemaSectionAccentsFailures.slice(0, 20),
    cards_041_060_reviewed: scopeKeys.length,
    pass,
  };
}

module.exports = { runGalaCorrection041060Gates, auditBringenSemanticSource };
