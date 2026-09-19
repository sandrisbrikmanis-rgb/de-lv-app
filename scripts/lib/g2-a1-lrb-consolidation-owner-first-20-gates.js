#!/usr/bin/env node
"use strict";

const {
  cardKey,
  findProductionEntry,
  deepEqual,
} = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
const { mechanicalNormalizeTargetLanguageCard } = require("./g2-a1-lrb-consolidation-normalize");
const { flattenCardToLeaves } = require("./g2-a1-lrb-leaf-reconstruction");

/** Latvian-only letters (exclude č/š/ž shared with Czech and other Latin langs). */
const LV_RESIDUE_RE = /[āēģīķļņūĀĒĢĪĶĻŅŪ]/;

function validateSectionAccents(card, cardKeyStr, failures) {
  const sa = card?.study?.sectionAccents;
  if (sa == null) return;
  if (typeof sa !== "object" || Array.isArray(sa)) {
    failures.push(`${cardKeyStr}:sectionAccents_not_object`);
    return;
  }
  const examples = card.study?.examples;
  if (Array.isArray(sa.examples) && Array.isArray(examples) && sa.examples.length !== examples.length) {
    failures.push(`${cardKeyStr}:sectionAccents_examples_length_mismatch`);
  }
}

function countEmptyTargetFields(card) {
  const norm = mechanicalNormalizeTargetLanguageCard(card);
  if (!norm) return 1;
  let empty = 0;
  if (norm.lv == null || String(norm.lv).trim() === "") empty += 1;
  const study = norm.study || {};
  if (study.translation != null && String(study.translation).trim() === "") empty += 1;
  const leaves = flattenCardToLeaves(norm);
  for (const [path, val] of leaves) {
    if (path === "lv" || path === "study.translation") continue;
    if (val === "") empty += 1;
  }
  return empty;
}

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

function countWrongLanguageResidue(lang, ownerCard) {
  if (lang === "lv" || lang === "lt") return 0;
  const norm = mechanicalNormalizeTargetLanguageCard(ownerCard);
  if (!norm) return 0;
  const leaves = flattenCardToLeaves(norm);
  let hits = 0;
  for (const [, val] of leaves) {
    if (typeof val === "string" && LV_RESIDUE_RE.test(val)) hits += 1;
  }
  return hits;
}

function runFirst20Gates({ scopeCards, sourceByKey, appliedByKey }) {
  const scopeKeys = scopeCards.map((c) => cardKey(c.target_language, c.canonical_card_object_id));
  const duplicateKeys = scopeKeys.filter((k, i) => scopeKeys.indexOf(k) !== i);
  const degeneratePairs = duplicateKeys.length;

  let appliedExactly = 0;
  let pending = 0;
  let emptyTargetFields = 0;
  let deAlignment = 0;
  let wrongLanguageResidue = 0;
  const schemaSectionAccentsFailures = [];

  for (const key of scopeKeys) {
    const applied = appliedByKey.get(key);
    const source = sourceByKey.get(key);
    if (applied == null) {
      pending += 1;
      continue;
    }
    if (source && deepEqual(applied, source.full_card_owner_new)) appliedExactly += 1;
    emptyTargetFields += countEmptyTargetFields(applied);
    const [lang, cardId] = key.split("|");
    deAlignment += countDeAlignmentMismatches(lang, cardId, applied);
    wrongLanguageResidue += countWrongLanguageResidue(lang, applied);
    validateSectionAccents(applied, key, schemaSectionAccentsFailures);
  }

  return {
    applied_exactly: `${appliedExactly}/${scopeKeys.length}`,
    pending,
    empty_target_fields: emptyTargetFields,
    de_alignment: deAlignment,
    wrong_language_residue: wrongLanguageResidue,
    duplicate_degenerate_pairs: degeneratePairs,
    schema_sectionAccents_failures: schemaSectionAccentsFailures.length,
    schema_sectionAccents_failure_details: schemaSectionAccentsFailures.slice(0, 20),
    pass:
      appliedExactly === scopeKeys.length &&
      pending === 0 &&
      emptyTargetFields === 0 &&
      deAlignment === 0 &&
      wrongLanguageResidue === 0 &&
      degeneratePairs === 0 &&
      schemaSectionAccentsFailures.length === 0,
  };
}

module.exports = { runFirst20Gates, validateSectionAccents, countEmptyTargetFields };
