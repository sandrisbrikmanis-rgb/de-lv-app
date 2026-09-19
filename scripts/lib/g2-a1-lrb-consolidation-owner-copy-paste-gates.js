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

function isScalarOwnerCard(card) {
  if (!card || typeof card !== "object" || Array.isArray(card)) return false;
  const topKeys = Object.keys(card);
  if (!topKeys.includes("lv")) return false;
  if (topKeys.some((k) => k !== "lv" && k !== "study")) return false;
  if (!card.study || Object.keys(card.study).length === 0) return topKeys.includes("lv");
  return false;
}

function countDuplicateDegenerateExamplePairs(card) {
  const ex = card?.study?.examples;
  if (!Array.isArray(ex)) return 0;
  let bad = 0;
  const seen = new Set();
  for (const e of ex) {
    if (!e) {
      bad += 1;
      continue;
    }
    const de = String(e.de ?? "").trim();
    const lv = String(e.lv ?? "").trim();
    if (!de && !lv) bad += 1;
    const sig = `${de}\0${lv}`;
    if (seen.has(sig)) bad += 1;
    else seen.add(sig);
  }
  return bad;
}

function countEmptyTargetFields(card) {
  if (isScalarOwnerCard(card)) {
    return card.lv == null || String(card.lv).trim() === "" ? 1 : 0;
  }
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

function lvTranslationPairSignature(card) {
  if (!card || typeof card !== "object") return null;
  const lv = card.lv != null ? String(card.lv).trim() : "";
  const tr = card.study?.translation != null ? String(card.study.translation).trim() : "";
  return `${lv}\0${tr}`;
}

/** Paste corruption if lv/translation pairing diverges from OWNER source (not lv===translation rule). */
function countInternalContradictions(ownerCard, sourceCard) {
  if (!sourceCard?.full_card_owner_new) return 0;
  const appliedSig = lvTranslationPairSignature(ownerCard);
  const sourceSig = lvTranslationPairSignature(sourceCard.full_card_owner_new);
  return appliedSig === sourceSig ? 0 : 1;
}

function runOwnerCopyPasteGates({ scopeCards, sourceByKey, appliedByKey }) {
  const scopeKeys = scopeCards.map((c) => cardKey(c.target_language, c.canonical_card_object_id));
  const duplicateKeys = scopeKeys.filter((k, i) => scopeKeys.indexOf(k) !== i);
  const degeneratePairs = duplicateKeys.length;

  let appliedExactly = 0;
  let pending = 0;
  let emptyTargetFields = 0;
  let deAlignment = 0;
  let wrongLanguageResidue = 0;
  let semanticSourceFidelityViolations = 0;
  let internalContradictions = 0;
  let duplicateDegenerateExamplePairs = 0;
  const schemaSectionAccentsFailures = [];

  for (const key of scopeKeys) {
    const applied = appliedByKey.get(key);
    const source = sourceByKey.get(key);
    if (applied == null) {
      pending += 1;
      continue;
    }
    if (source && deepEqual(applied, source.full_card_owner_new)) {
      appliedExactly += 1;
    } else if (source) {
      semanticSourceFidelityViolations += 1;
    }
    emptyTargetFields += countEmptyTargetFields(applied);
    const [lang, cardId] = key.split("|");
    deAlignment += countDeAlignmentMismatches(lang, cardId, applied);
    wrongLanguageResidue += countWrongLanguageResidue(lang, applied);
    internalContradictions += countInternalContradictions(applied, source);
    duplicateDegenerateExamplePairs += countDuplicateDegenerateExamplePairs(applied);
    validateSectionAccents(applied, key, schemaSectionAccentsFailures);
  }

  const expected = scopeKeys.length;
  return {
    applied_exactly: `${appliedExactly}/${expected}`,
    pending,
    empty_target_fields: emptyTargetFields,
    de_alignment: deAlignment,
    wrong_language_residue: wrongLanguageResidue,
    semantic_source_fidelity_violations: semanticSourceFidelityViolations,
    internal_contradictions: internalContradictions,
    duplicate_degenerate_pairs: degeneratePairs + duplicateDegenerateExamplePairs,
    duplicate_scope_keys: degeneratePairs,
    duplicate_degenerate_example_pairs: duplicateDegenerateExamplePairs,
    schema_sectionAccents_failures: schemaSectionAccentsFailures.length,
    schema_sectionAccents_failure_details: schemaSectionAccentsFailures.slice(0, 20),
    pass:
      appliedExactly === expected &&
      pending === 0 &&
      emptyTargetFields === 0 &&
      deAlignment === 0 &&
      wrongLanguageResidue === 0 &&
      semanticSourceFidelityViolations === 0 &&
      internalContradictions === 0 &&
      degeneratePairs === 0 &&
      duplicateDegenerateExamplePairs === 0 &&
      schemaSectionAccentsFailures.length === 0,
  };
}

/** @deprecated use runOwnerCopyPasteGates */
function runFirst20Gates(args) {
  const gates = runOwnerCopyPasteGates(args);
  const { semantic_source_fidelity_violations, internal_contradictions, ...rest } = gates;
  return rest;
}

module.exports = {
  runOwnerCopyPasteGates,
  runFirst20Gates,
  validateSectionAccents,
  countEmptyTargetFields,
  isScalarOwnerCard,
  countDuplicateDegenerateExamplePairs,
};
