#!/usr/bin/env node
"use strict";

/**
 * Kartīšu tulkojuma pierādījumu kārtība (MASTER §7.162).
 */

const { assessDeSenseUniqueness } = require("./g2-a1-bilingual-de-sense-gate");
const { isGermanDeAuthorityDwdsOrDuden } = require("./card-translation-audit-policy");
const {
  isDeLemmaConfirmed,
  isTargetOfficialValidated,
  targetLemmaEquals,
  deLemmaMatchesCard,
} = require("./card-translation-audit-search");
const { stripQuotes } = require("./source-adapters/lookup-normalization");
const { assessRegistryDefinitionAlignment } = require("./card-translation-definition-semantic");

const EVIDENCE_TIER = Object.freeze({
  BILINGUAL_PDF_FORWARD: "BILINGUAL_PDF_FORWARD_DE_TARGET",
  BILINGUAL_PDF_REVERSE: "BILINGUAL_PDF_REVERSE_TARGET_DE",
  BILINGUAL_INSTITUTIONAL_PAIR: "BILINGUAL_INSTITUTIONAL_PAIR",
  DEFINITION_SEMANTIC_CLEAR: "DEFINITION_SEMANTIC_CLEAR",
  DEFINITION_SEMANTIC_UNCLEAR: "DEFINITION_SEMANTIC_UNCLEAR",
  AI_CANDIDATE_UNCONFIRMED: "AI_CANDIDATE_UNCONFIRMED",
  AUTOMATIC_TRANSLATION_REJECTED: "AUTOMATIC_TRANSLATION_REJECTED",
  NONE: "NONE",
});

const PDF_SCANNED_BILINGUAL_PLATFORMS = Object.freeze([
  "digar-de-et",
  "digar-et-de-reverse",
]);

const INSTITUTIONAL_BILINGUAL_PLATFORMS = Object.freeze([
  ...PDF_SCANNED_BILINGUAL_PLATFORMS,
  "lod",
  "luxdico",
]);

const AUTOMATIC_TRANSLATION_PLATFORMS = Object.freeze(["google-translate", "deepl", "microsoft-translator"]);

function isPdfScannedInstitutionalPlatform(platform) {
  return PDF_SCANNED_BILINGUAL_PLATFORMS.includes(String(platform || "").trim());
}

function isInstitutionalBilingualPlatform(platform) {
  return INSTITUTIONAL_BILINGUAL_PLATFORMS.includes(String(platform || "").trim());
}

function isAutomaticTranslationDictionaryEvidence({ platform, sourceId, sourceUrl, pageText }) {
  const p = String(platform || "").trim();
  const id = String(sourceId || "").trim().toLowerCase();
  const url = String(sourceUrl || "").trim().toLowerCase();
  const text = String(pageText || "");

  if (AUTOMATIC_TRANSLATION_PLATFORMS.includes(p)) return true;
  if (/translate\.google\.com|translate\.googleapis\.com/i.test(url)) return true;
  if (/glosbe\.com\/.*\/translate/i.test(url)) return true;
  if (/translation memory only/i.test(text)) return true;
  if (/glosbe translate/i.test(text)) return true;
  if (/^glosbe-de-/i.test(id) && /automatic translations|algorithmically generated/i.test(text)) {
    return true;
  }
  return false;
}

/**
 * Definīciju salīdzinājums: tikai reģistrētas nepārprotamas pāris + valodas iekšējie marķieri.
 * Nav krusteniskas DE/TARGET vārdu tokenu sakritības.
 */
function assessDefinitionSemanticTranslationEvidence(deAuthority, targetAuthority, cardGerman, currentTarget, appLang) {
  const signals = [];
  const lang = String(appLang || "").trim();

  if (!isDeLemmaConfirmed(deAuthority) || !isGermanDeAuthorityDwdsOrDuden(deAuthority)) {
    return { tier: EVIDENCE_TIER.NONE, reason: "DE_NOT_DWDS_OR_DUDEN", signals };
  }
  if (!deLemmaMatchesCard(deAuthority, cardGerman)) {
    return { tier: EVIDENCE_TIER.NONE, reason: "DE_LEMMA_CARD_MISMATCH", signals };
  }
  if (!isTargetOfficialValidated(targetAuthority)) {
    return { tier: EVIDENCE_TIER.NONE, reason: "TARGET_NOT_OFFICIAL", signals };
  }

  const current = stripQuotes(currentTarget || "");
  const hw = String(targetAuthority.entryHeadwordOrRule || "").trim();
  if (current && hw && !targetLemmaEquals(hw, current)) {
    return { tier: EVIDENCE_TIER.NONE, reason: "TARGET_HEADWORD_NOT_CURRENT", signals };
  }

  const deFrag = String(deAuthority.evidenceFragment || "").trim();
  const targetFrag = String(targetAuthority.evidenceFragment || "").trim();
  if (deFrag.length < 30 || targetFrag.length < 20) {
    return { tier: EVIDENCE_TIER.DEFINITION_SEMANTIC_UNCLEAR, reason: "EVIDENCE_FRAGMENT_TOO_SHORT", signals };
  }

  const deSense = assessDeSenseUniqueness(deAuthority, cardGerman);
  if (!deSense.ok) {
    return { tier: EVIDENCE_TIER.DEFINITION_SEMANTIC_UNCLEAR, reason: `DE_SENSE_NOT_UNIQUE:${deSense.reason}`, signals };
  }
  signals.push("DE_SENSE_UNIQUELY_ATTESTED");

  const registry = assessRegistryDefinitionAlignment(
    deAuthority,
    targetAuthority,
    cardGerman,
    currentTarget,
    lang,
  );

  if (registry.matched) {
    signals.push(`REGISTRY_${registry.pairId}`);
    if (registry.semanticLabel) signals.push(registry.semanticLabel);
    return {
      tier: EVIDENCE_TIER.DEFINITION_SEMANTIC_CLEAR,
      reason: registry.reason,
      signals,
      registryPairId: registry.pairId,
    };
  }

  if (registry.partial || registry.reason === "NO_REGISTERED_DEFINITION_PAIR") {
    return {
      tier: EVIDENCE_TIER.DEFINITION_SEMANTIC_UNCLEAR,
      reason: registry.reason || "DEFINITION_SEMANTIC_NOT_UNAMBIGUOUS",
      signals,
      registryPairId: registry.pairId,
    };
  }

  return {
    tier: EVIDENCE_TIER.DEFINITION_SEMANTIC_UNCLEAR,
    reason: registry.reason || "DEFINITION_ALIGNMENT_REQUIRES_REVIEW",
    signals,
  };
}

function bilingualEvidenceTierFromMeta(meta) {
  const platform = meta?.platform || meta?.bilingualMeta?.platform;
  const mode = meta?.bilingualLookupMode || meta?.lookupMode;
  if (isPdfScannedInstitutionalPlatform(platform)) {
    return mode === "REVERSE_ET_DE"
      ? EVIDENCE_TIER.BILINGUAL_PDF_REVERSE
      : EVIDENCE_TIER.BILINGUAL_PDF_FORWARD;
  }
  if (isInstitutionalBilingualPlatform(platform)) {
    return EVIDENCE_TIER.BILINGUAL_INSTITUTIONAL_PAIR;
  }
  return null;
}

function rescan6InstitutionalCandidatesForLang(appLang) {
  try {
    const fs = require("fs");
    const path = require("path");
    const { ROOT } = require("../audit-common");
    const p = path.join(ROOT, "scripts/lib/data/german-target-dictionary-rescan-6-candidates.json");
    const data = JSON.parse(fs.readFileSync(p, "utf8"));
    const list = data.languages?.[appLang] || [];
    return list
      .filter((c) => isPdfScannedInstitutionalPlatform(c.platform) || c.type === "INSTITUTIONAL_BILINGUAL_LEXICON_DIGAR")
      .map((c) => ({
        id: c.id,
        appCode: appLang,
        name: c.name,
        url: c.url,
        platform: c.platform,
        access: c.access || "PUBLIC_BROWSER_SESSION",
        languagePair: c.direction === "et→de" ? `et→de (reverse for de→${appLang})` : `de→${appLang}`,
        type: "RESCAN6_INSTITUTIONAL",
      }));
  } catch {
    return [];
  }
}

module.exports = {
  EVIDENCE_TIER,
  PDF_SCANNED_BILINGUAL_PLATFORMS,
  isPdfScannedInstitutionalPlatform,
  isInstitutionalBilingualPlatform,
  isAutomaticTranslationDictionaryEvidence,
  assessDefinitionSemanticTranslationEvidence,
  bilingualEvidenceTierFromMeta,
  rescan6InstitutionalCandidatesForLang,
};
