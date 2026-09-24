#!/usr/bin/env node
"use strict";

const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { evidenceQualityOk } = require("./targeted-source-access-validation");

function isDeLemmaConfirmed(deAuthority) {
  return (
    deAuthority?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED &&
    Boolean(deAuthority?.entryUrl) &&
    Boolean(deAuthority?.evidenceFragment)
  );
}

/** Pilna kartes tulkošanas validācija (ne tikai vārdnīcas FOUND) — tikai lb. */
const TRANSLATION_VALIDATED_LANGUAGES = Object.freeze(["lb"]);

/** Vācu DE avots kartes auditā — tikai šie (LOD ir lb TARGET, ne DE nozīme). */
const GERMAN_DE_AUTHORITY_ADAPTER_PREFIXES = Object.freeze(["de-dwds", "de-duden"]);

const WEAK_SENSE_ALIGNMENT_REASONS = Object.freeze([
  "card_meaning_not_provided_accept_lemma_match",
  "lemma_match_only_needs_owner_if_strict_semantics",
]);

function isGermanDeAuthorityDwdsOrDuden(deAuthority) {
  if (!isDeLemmaConfirmed(deAuthority)) return false;
  const adapterId = String(deAuthority.adapterId || "").trim();
  if (GERMAN_DE_AUTHORITY_ADAPTER_PREFIXES.some((p) => adapterId === p || adapterId.startsWith(`${p}-`))) {
    return true;
  }
  const url = String(deAuthority.entryUrl || deAuthority.finalUrl || "");
  if (/lod\.lu/i.test(url)) return false;
  return /(?:^|\.)dwds\.de|(?:^|\.)duden\.de/i.test(url);
}

function languageMayReceiveTranslationValidated(appLang) {
  return TRANSLATION_VALIDATED_LANGUAGES.includes(String(appLang || "").trim());
}

/**
 * FINDING + PROPOSED_NEW — tikai viens sense-aligned kandidāts, zināma POS, stipra nozīmes saderība,
 * DWDS/Duden DE, LOD (lb) TARGET ar evidence quality.
 */
function canEmitFindingWithProposedNew({
  senseAlignedCount,
  cardGerman,
  selectedCandidate,
  deAuthority,
  targetAuthority,
}) {
  if (senseAlignedCount !== 1) {
    return { ok: false, code: "FINDING_REQUIRES_SINGLE_SENSE_ALIGNED_CANDIDATE" };
  }
  if (!cardGerman?.partOfSpeech) {
    return { ok: false, code: "FINDING_REQUIRES_KNOWN_CARD_POS" };
  }
  if (!selectedCandidate) {
    return { ok: false, code: "FINDING_REQUIRES_SELECTED_CANDIDATE" };
  }
  const alignment = selectedCandidate.senseAlignment;
  if (WEAK_SENSE_ALIGNMENT_REASONS.includes(alignment)) {
    return { ok: false, code: "FINDING_REQUIRES_UNAMBIGUOUS_DE_SENSE", alignment };
  }
  if (!isGermanDeAuthorityDwdsOrDuden(deAuthority)) {
    return { ok: false, code: "FINDING_REQUIRES_DWDS_OR_DUDEN_DE" };
  }
  if (!evidenceQualityOk(targetAuthority)) {
    return { ok: false, code: "FINDING_REQUIRES_TARGET_EVIDENCE_QUALITY" };
  }
  return { ok: true };
}

function canEmitTranslationValidated({ appLang, deAuthority, targetAuthority, senseAlignedCount, pick }) {
  if (!languageMayReceiveTranslationValidated(appLang)) {
    return { ok: false, code: "TRANSLATION_VALIDATED_LB_ONLY" };
  }
  if (!isGermanDeAuthorityDwdsOrDuden(deAuthority)) {
    return { ok: false, code: "VALIDATED_REQUIRES_DWDS_OR_DUDEN_DE" };
  }
  if (!evidenceQualityOk(deAuthority) || !evidenceQualityOk(targetAuthority)) {
    return { ok: false, code: "VALIDATED_REQUIRES_DUAL_EVIDENCE_QUALITY" };
  }
  if (pick?.mismatchCurrent) {
    return { ok: false, code: "VALIDATED_REQUIRES_CURRENT_MATCH" };
  }
  if (senseAlignedCount > 1 && pick?.status === "selected") {
    /* Vairāki kandidāti, bet tieši viens atbilst CURRENT — pieļaujams lb. */
    return { ok: true };
  }
  if (senseAlignedCount !== 1) {
    return { ok: false, code: "VALIDATED_REQUIRES_UNAMBIGUOUS_CANDIDATE_SET" };
  }
  return { ok: true };
}

/** Pilna targeted-field-level plūsma ar kartes tulkošanas executoru — bloķēta līdz 32 valodu kolektoriem. */
function assertTargetedFieldCardTranslationBatchAllowed(options = {}) {
  if (options.pilotOnly === true) {
    return { pass: true, blockers: [] };
  }
  if (options.executeLuna !== true) {
    return { pass: true, blockers: [] };
  }
  return {
    pass: false,
    blockers: [
      {
        code: "CARD_TRANSLATION_32LANG_COLLECTORS_NOT_READY",
        message:
          "Do not run full targeted-field-level Luna batch until DE→TARGET collectors and TARGET official validation exist for all 32 languages. Use pilot-only or card-translation production verify scripts.",
      },
    ],
  };
}

module.exports = {
  TRANSLATION_VALIDATED_LANGUAGES,
  GERMAN_DE_AUTHORITY_ADAPTER_PREFIXES,
  isGermanDeAuthorityDwdsOrDuden,
  languageMayReceiveTranslationValidated,
  canEmitFindingWithProposedNew,
  canEmitTranslationValidated,
  assertTargetedFieldCardTranslationBatchAllowed,
};
