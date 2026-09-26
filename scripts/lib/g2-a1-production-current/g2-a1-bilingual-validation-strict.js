#!/usr/bin/env node
"use strict";

const { loadG2Level } = require("../content-crowdin-bridge/roundtrip");
const { stripQuotes } = require("./source-adapters/lookup-normalization");
const {
  TRANSLATION_AUDIT_VERDICT,
  cardPosMatchesLodPos,
  dictionaryDeSenseAlignsWithCard,
  isDeLemmaConfirmed,
  selectProvenDictionaryCandidate,
  targetLemmaEquals,
} = require("./card-translation-audit-search");
const { evaluateDictionaryCapitalization } = require("../master-capitalization-rule-verify");

/** Kartītes angļu nozīmes atslēga (data/en) — disambiguācijai, ne tulkojumam. */
function loadCardSenseContext(level, lemma) {
  let senseEn = "";
  let deArticle = null;
  try {
    const enCards = loadG2Level("en", level);
    const enCard = enCards.find((c) => String(c.de || "").trim() === lemma);
    if (enCard) {
      senseEn = String(enCard.lv || "").trim();
      deArticle = enCard.de_article || null;
    }
  } catch {
    senseEn = "";
  }
  return { senseEn, deArticle };
}

function normalizeSenseEn(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/** Vārdnīcas pamatforma — nav frāze, UI, piemērs. */
function isDictionaryLemmaForm(targetLemma, cardPartOfSpeech) {
  const t = stripQuotes(targetLemma || "").trim();
  if (!t || t.length > 48) return false;
  if (/^(words?|others|verbs|nouns)\b/i.test(t)) return false;
  if (/\bstb\.|\bs\.th\.|\bsb\./i.test(t)) return false;
  if (/^German-|^".*" translation|translation for/i.test(t)) return false;

  const pos = String(cardPartOfSpeech || "").toLowerCase();
  const wordCount = t.split(/\s+/).filter(Boolean).length;

  if (pos === "verb") {
    if (wordCount > 2) return false;
    if (/\b(til|auf|an|mit|für|zu|me|te|për|na|do|od)\b/i.test(t) && wordCount >= 2) return false;
    if (/gå til|shikoj |shoh |watch tv|televis/i.test(t)) return false;
  }
  if (pos === "noun" && wordCount > 4) return false;
  if (wordCount >= 3 && /gå til|shikoj me|shikoj televizor/i.test(t)) return false;

  return true;
}

function looksLikeWrongPosForCard(targetLemma, cardPartOfSpeech, appLang) {
  const t = stripQuotes(targetLemma || "").trim();
  const pos = String(cardPartOfSpeech || "").toLowerCase();
  if (!t || !pos) return false;

  if (pos === "verb" && appLang === "uk") {
    if (/ність$|ство$|ення$|ція$/.test(t) && !/увати$|ити$|ати$/.test(t)) return true;
  }
  if (pos === "verb" && appLang === "sq") {
    if (/^(duket|urre)$/i.test(t)) return true;
  }
  return false;
}

/** Deterministiski izņēmumi no lietotāja piemēriem + nozīmes atslēgvārdi. */
function blockedBySenseGuard(deLemma, appLang, targetLemma, senseEn) {
  const t = stripQuotes(targetLemma || "").trim();
  const sense = normalizeSenseEn(senseEn);

  const perLemmaLang = {
    stinken: {
      sq: [/^(duket|urre)$/i],
    },
    bewirten: {
      uk: [/^гостинність$/iu],
    },
    Attacke: {
      nn: [/gå til/i],
    },
    Goldader: {
      "*": [/hemoroid/i, /haemorrhoid/i, /rrhoid/i],
    },
    glotzen: {
      sq: [/televizor/i, /sy hapur/i],
    },
  };

  const spec = perLemmaLang[deLemma];
  if (spec) {
    const pats = [...(spec[appLang] || []), ...(spec["*"] || [])];
    if (pats.some((rx) => rx.test(t))) return true;
  }

  if (deLemma === "Goldader" && /gold|vein/.test(sense) && /hemoroid|rrhoid/i.test(t)) return true;
  if (deLemma === "stinken" && /smell|stink/.test(sense) && /^(duket|urre)$/i.test(t)) return true;
  if (deLemma === "bewirten" && /host|serve|guest/.test(sense) && /^гостинність$/iu.test(t)) return true;
  if (deLemma === "Attacke" && /attack|assault/.test(sense) && /gå til/i.test(t)) return true;
  if (deLemma === "glotzen" && /stare|gawk/.test(sense) && /televizor|sy hapur/i.test(t)) return true;

  return false;
}

function filterStrictCandidates(candidates, cardGerman, deAuthority, appLang) {
  const senseEn = cardGerman.cardSenseEn || "";
  const out = [];
  const rejected = [];

  for (const c of candidates) {
    const lemma = c.targetLemma || c.wordLb;
    const reasons = [];

    if (!isDictionaryLemmaForm(lemma, cardGerman.partOfSpeech)) {
      reasons.push("PHRASE_OR_MULTIWORD");
    }
    if (!cardPosMatchesLodPos(cardGerman.partOfSpeech, c.pos)) {
      reasons.push("POS_MISMATCH_CARD");
    }
    if (looksLikeWrongPosForCard(lemma, cardGerman.partOfSpeech, appLang)) {
      reasons.push("POS_HEURISTIC_MISMATCH");
    }
    if (blockedBySenseGuard(cardGerman.lemma, appLang, lemma, senseEn)) {
      reasons.push("CARD_SENSE_MISMATCH");
    }

    const sense = dictionaryDeSenseAlignsWithCard(cardGerman, c.deTranslation, deAuthority);
    if (!sense.aligned && cardGerman.germanMeaning && cardGerman.germanMeaning.length >= 12) {
      reasons.push(`DE_SENSE_${sense.reason}`);
    }

    if (reasons.length) {
      rejected.push({ targetLemma: lemma, reasons });
      continue;
    }
    out.push(c);
  }

  return { filtered: out, rejected };
}

/**
 * Gala statuss pēc filtra + MASTER kapitalizācijas (§7.158 / §20).
 */
function resolveStrictBilingualFinalStatus(cardGerman, deAuthority, candidates, currentTarget) {
  if (!isDeLemmaConfirmed(deAuthority)) {
    return { finalStatus: "NOT_FOUND", reason: "DE_NOT_CONFIRMED", findingType: null, proposedNew: null };
  }
  if (!candidates.length) {
    return { finalStatus: "NOT_FOUND", reason: "NO_DICTIONARY_CANDIDATES", findingType: null, proposedNew: null };
  }

  const current = stripQuotes(currentTarget || "");
  const exactMatches = candidates.filter((c) => stripQuotes(c.targetLemma || c.wordLb) === current);
  const caseInsensitiveMatches = candidates.filter((c) => targetLemmaEquals(c.targetLemma || c.wordLb, current));

  if (exactMatches.length === 1 && caseInsensitiveMatches.length === 1) {
    return {
      finalStatus: TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED,
      reason: "CURRENT_EXACT_MATCH_DICTIONARY",
      findingType: null,
      proposedNew: null,
      matchedLemma: current,
    };
  }

  if (caseInsensitiveMatches.length === 1 && exactMatches.length === 0) {
    const dictLemma = stripQuotes(caseInsensitiveMatches[0].targetLemma || caseInsensitiveMatches[0].wordLb);
    const cap = evaluateDictionaryCapitalization({
      fieldKind: "dictionary",
      current,
      authorityLemma: dictLemma,
      isProperNoun: false,
    });
    if (cap.findingType === "CAPITALIZATION_ERROR") {
      return {
        finalStatus: TRANSLATION_AUDIT_VERDICT.FINDING,
        reason: cap.reason || "case_mismatch_same_lemma",
        findingType: "CAPITALIZATION_ERROR",
        proposedNew: cap.proposedTarget || dictLemma,
        matchedLemma: dictLemma,
      };
    }
  }

  if (caseInsensitiveMatches.length > 1) {
    return {
      finalStatus: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      reason: "MULTIPLE_FILTERED_CANDIDATES_MATCH_CURRENT",
      findingType: null,
      proposedNew: null,
    };
  }

  const pick = selectProvenDictionaryCandidate(candidates, currentTarget);
  if (pick.status === "ambiguous") {
    return {
      finalStatus: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      reason: pick.blockers?.[0]?.code || "AMBIGUOUS",
      findingType: null,
      proposedNew: null,
    };
  }
  if (pick.status === "selected" && pick.mismatchCurrent) {
    return {
      finalStatus: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      reason: "CURRENT_NOT_IN_FILTERED_DICTIONARY_LIST",
      findingType: null,
      proposedNew: null,
      provenLemma: stripQuotes(pick.selected?.targetLemma || ""),
    };
  }
  if (pick.status === "none") {
    return { finalStatus: "NOT_FOUND", reason: "NO_SENSE_ALIGNED", findingType: null, proposedNew: null };
  }

  return {
    finalStatus: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
    reason: "UNRESOLVED",
    findingType: null,
    proposedNew: null,
  };
}

module.exports = {
  loadCardSenseContext,
  filterStrictCandidates,
  resolveStrictBilingualFinalStatus,
  isDictionaryLemmaForm,
  blockedBySenseGuard,
};
