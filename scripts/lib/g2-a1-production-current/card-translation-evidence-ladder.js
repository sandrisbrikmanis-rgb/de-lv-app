#!/usr/bin/env node
"use strict";

/**
 * Kartīšu tulkojuma pierādījumu kārtība (MASTER §7.162).
 * 1) PDF/skenēta divvalodu vārdnīca: DE→TARGET, tad TARGET→DE (reverso).
 * 2) Ja nav tieša pāra: DWDS/Duden DE definīcija + TARGET oficiālā definīcija.
 * 3) AI kandidāti — tikai pēc apstiprināšanas ar 1 vai 2.
 * 4) Glosbe Translate / Google Translate u.c. — nav vārdnīcas pierādījums.
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

  if (AUTOMATIC_TRANSLATION_PLATFORMS.includes(p)) return true;
  if (/^glosbe-de-/i.test(id) && /automatic translations|algorithmically generated/i.test(String(pageText || ""))) {
    return true;
  }
  if (/glosbe\.com\/.*\/translate/i.test(url)) return true;
  if (/translate\.google\.com|translate\.googleapis\.com/i.test(url)) return true;
  return false;
}

function normalizeForTokenCompare(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOP_DE = new Set([
  "der",
  "die",
  "das",
  "den",
  "dem",
  "des",
  "ein",
  "eine",
  "einer",
  "eines",
  "und",
  "oder",
  "mit",
  "von",
  "für",
  "substantiv",
  "verb",
  "femininum",
  "maskulinum",
  "neutrum",
]);

function contentTokens(text, minLen = 4) {
  const out = new Set();
  for (const w of normalizeForTokenCompare(text).split(/\s+/)) {
    if (w.length < minLen || STOP_DE.has(w)) continue;
    out.add(w);
  }
  return out;
}

function deLemmaReferencedInTargetText(deLemma, targetText) {
  const lemma = String(deLemma || "").trim();
  if (!lemma || !targetText) return false;
  const esc = lemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\b${esc}\\b`, "i").test(String(targetText));
}

/**
 * Deterministiska DE+TARGET definīciju salīdzināšana (nav AI verdicts).
 * @returns {{ tier: string, reason: string, signals: string[] }}
 */
function assessDefinitionSemanticTranslationEvidence(deAuthority, targetAuthority, cardGerman, currentTarget) {
  const signals = [];

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

  if (deLemmaReferencedInTargetText(cardGerman.lemma, targetFrag)) {
    signals.push("DE_LEMMA_IN_TARGET_DEFINITION");
  }

  const deTokens = contentTokens(deFrag);
  const targetTokens = contentTokens(targetFrag);
  let overlap = 0;
  for (const t of deTokens) {
    if (targetTokens.has(t)) overlap += 1;
  }
  if (overlap >= 2) signals.push(`SHARED_CONTENT_TOKENS_${overlap}`);

  const hasStrong =
    signals.includes("DE_LEMMA_IN_TARGET_DEFINITION") ||
    (signals.includes("DE_SENSE_UNIQUELY_ATTESTED") && overlap >= 3);

  const hasWeak =
    signals.includes("DE_SENSE_UNIQUELY_ATTESTED") &&
    (signals.includes("DE_LEMMA_IN_TARGET_DEFINITION") || overlap >= 1);

  if (hasStrong) {
    return { tier: EVIDENCE_TIER.DEFINITION_SEMANTIC_CLEAR, reason: "UNAMBIGUOUS_DEFINITION_ALIGNMENT", signals };
  }
  if (hasWeak && overlap >= 2) {
    return { tier: EVIDENCE_TIER.DEFINITION_SEMANTIC_CLEAR, reason: "DEFINITION_TOKEN_ALIGNMENT", signals };
  }
  if (hasWeak) {
    return { tier: EVIDENCE_TIER.DEFINITION_SEMANTIC_UNCLEAR, reason: "PARTIAL_DEFINITION_ALIGNMENT", signals };
  }
  return { tier: EVIDENCE_TIER.NONE, reason: "NO_DEFINITION_ALIGNMENT", signals };
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
