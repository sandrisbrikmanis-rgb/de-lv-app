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

const APPETIT_KEY = "sk|Appetit";
const MAL_KEY = "sk|Mal";
const ABER_KEY = "sl|aber";
const APPETIT_SINGULAR_SNIPPET =
  "V tomto význame sa Appetit zvyčajne používa v jednotnom čísle.";
const MAL_LV_EXPECTED = "raz";
const ABER_EX0_DE = "Ich möchte mitkommen, aber ich habe keine Zeit.";
const ABER_EX0_LV_EXPECTED = "Želim iti zraven, ampak nimam časa.";

function loadExpectedCards121140Map(correctionByKey) {
  const expected = new Map();
  const bundlePath = path.join(
    OUT_DIR,
    "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-121-140.json"
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

function auditAppetitSemanticSource(card) {
  let extraMeaningNotInSource = 0;
  let semanticNarrowingFromSource = 0;
  const important = card?.study?.important;
  const expl = card?.study?.explanation;
  const blobImp = Array.isArray(important) ? important.join(" ") : "";
  const blobExpl = Array.isArray(expl) ? expl.join(" ") : String(expl || "");
  if (!blobImp.includes(APPETIT_SINGULAR_SNIPPET) && !blobExpl.includes(APPETIT_SINGULAR_SNIPPET)) {
    semanticNarrowingFromSource += 1;
  }
  return { extraMeaningNotInSource, semanticNarrowingFromSource };
}

function auditMalSemanticSource(card) {
  let extraMeaningNotInSource = 0;
  let semanticNarrowingFromSource = 0;
  const lv = String(card?.lv ?? "").trim();
  const tr = String(card?.study?.translation ?? "").trim();
  if (lv !== MAL_LV_EXPECTED || tr !== MAL_LV_EXPECTED) semanticNarrowingFromSource += 1;
  if (/príležitosť/i.test(lv) || /príležitosť/i.test(tr)) extraMeaningNotInSource += 1;
  return { extraMeaningNotInSource, semanticNarrowingFromSource };
}

function auditAberSemanticSource(card) {
  let extraMeaningNotInSource = 0;
  let semanticNarrowingFromSource = 0;
  const ex0 = card?.study?.examples?.[0];
  if (!ex0 || String(ex0.de || "").trim() !== ABER_EX0_DE) {
    semanticNarrowingFromSource += 1;
    return { extraMeaningNotInSource, semanticNarrowingFromSource };
  }
  const lv = String(ex0.lv || "").trim();
  if (lv !== ABER_EX0_LV_EXPECTED) semanticNarrowingFromSource += 1;
  if (/Rad bi šel/i.test(lv)) extraMeaningNotInSource += 1;
  return { extraMeaningNotInSource, semanticNarrowingFromSource };
}

function runGalaCorrection121140Gates({
  scopeCards,
  appliedByKey,
  correctionChanges,
  correctionByKey,
}) {
  const scopeKeys = scopeCards.map((c) => cardKey(c.target_language, c.canonical_card_object_id));
  const expectedByKey = loadExpectedCards121140Map(correctionByKey);

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

  let extraMeaningNotInSource = 0;
  let semanticNarrowingFromSource = 0;
  const schemaSectionAccentsFailures = [];

  for (const key of scopeKeys) {
    const applied = appliedByKey.get(key);
    validateSectionAccents(applied, key, schemaSectionAccentsFailures);
    if (key === APPETIT_KEY) {
      const sem = auditAppetitSemanticSource(applied);
      extraMeaningNotInSource += sem.extraMeaningNotInSource;
      semanticNarrowingFromSource += sem.semanticNarrowingFromSource;
    } else if (key === MAL_KEY) {
      const sem = auditMalSemanticSource(applied);
      extraMeaningNotInSource += sem.extraMeaningNotInSource;
      semanticNarrowingFromSource += sem.semanticNarrowingFromSource;
    } else if (key === ABER_KEY) {
      const sem = auditAberSemanticSource(applied);
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
    baseGates.full_composite_completeness === "PASS" &&
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
    full_composite_completeness: baseGates.full_composite_completeness,
    full_composite_completeness_failures: baseGates.full_composite_completeness_failures,
    schema_sectionAccents_failures: schemaSectionAccentsFailures.length,
    schema_sectionAccents_failure_details: schemaSectionAccentsFailures.slice(0, 20),
    cards_121_140_reviewed: scopeKeys.length,
    pass,
  };
}

module.exports = {
  runGalaCorrection121140Gates,
  auditAppetitSemanticSource,
  auditMalSemanticSource,
  auditAberSemanticSource,
};
