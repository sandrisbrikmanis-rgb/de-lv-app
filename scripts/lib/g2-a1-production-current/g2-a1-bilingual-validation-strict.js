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
const { evaluateDictionaryCapitalization, extractNormativeLemma } = require("../master-capitalization-rule-verify");
const { assessDeSenseUniqueness } = require("./g2-a1-bilingual-de-sense-gate");
const { isTargetOfficialValidated } = require("./card-translation-audit-search");

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

/** Deterministiski izņēmumi (POS/frāze/homonīms) — bez EN kā pierādījuma. */
function blockedBySenseGuard(deLemma, appLang, targetLemma) {
  const t = stripQuotes(targetLemma || "").trim();

  const perLemmaLang = {
    stinken: {
      sq: [/^(duket|urre)$/i],
      bs: [/izgledati/i],
    },
    bewirten: {
      uk: [/^гостинність$/iu],
    },
    Attacke: {
      nn: [/gå til/i],
    },
    Goldader: {
      "*": [/hemoroid/i, /haemorrhoid/i, /rrhoid/i, /варикоз/i, /сплетення/i],
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

  return false;
}

function filterStrictCandidates(candidates, cardGerman, deAuthority, appLang) {
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
    if (blockedBySenseGuard(cardGerman.lemma, appLang, lemma)) {
      reasons.push("CARD_SENSE_MISMATCH");
    }

    const sense = dictionaryDeSenseAlignsWithCard(cardGerman, c.deTranslation, deAuthority);
    const deProof = String(cardGerman.deSenseProof || cardGerman.germanMeaning || "").trim();
    if (!sense.aligned && deProof.length >= 40) {
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

/**
 * DE nozīmes un TARGET oficiālā avota vārti pēc divvalodu secinājuma.
 * @param {Function} lookupTargetForProvenLemma — (appLang, term) => Promise<targetAuthority>
 */
async function applyDeAndTargetAuthorityGates(
  verdict,
  { appLang, currentTarget, cardGerman, deAuthority, lookupTargetForProvenLemma, targetLookupVariants },
) {
  const base = { ...verdict };
  const deSense = assessDeSenseUniqueness(deAuthority, cardGerman);
  base.deSenseConfirmed = deSense.ok;
  base.deSenseGateReason = deSense.reason;

  const needsStrict =
    base.finalStatus === TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED ||
    base.finalStatus === TRANSLATION_AUDIT_VERDICT.FINDING;

  if (needsStrict && !deSense.ok) {
    return {
      ...base,
      finalStatus: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      reason: `DE_SENSE_${deSense.reason}`,
      findingType: null,
      proposedNew: null,
    };
  }

  if (!needsStrict) return base;

  const current = stripQuotes(currentTarget || "");
  const dictLemma =
    base.matchedLemma ||
    stripQuotes(
      verdict.provenLemma ||
        (() => {
          const m = (verdict.candidates || []).find((c) => targetLemmaEquals(c.targetLemma || c.wordLb, current));
          return m?.targetLemma || m?.wordLb || "";
        })(),
    );

  let targetAuthority = null;
  for (const term of targetLookupVariants(dictLemma, current)) {
    // eslint-disable-next-line no-await-in-loop
    targetAuthority = await lookupTargetForProvenLemma(appLang, term);
    if (isTargetOfficialValidated(targetAuthority)) break;
  }

  base.targetOfficialValidated = isTargetOfficialValidated(targetAuthority);
  base.targetSourceUrl = targetAuthority?.entryUrl || null;

  if (!isTargetOfficialValidated(targetAuthority)) {
    return {
      ...base,
      finalStatus: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      reason: "TARGET_OFFICIAL_NOT_VALIDATED",
      findingType: null,
      proposedNew: null,
    };
  }

  const normative =
    extractNormativeLemma(
      targetAuthority.entryHeadwordOrRule,
      targetAuthority.evidenceFragment,
    ) || dictLemma;

  if (base.finalStatus === TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED) {
    if (current === normative) {
      return { ...base, matchedLemma: normative };
    }
    const cap = evaluateDictionaryCapitalization({
      fieldKind: "dictionary",
      current,
      authorityLemma: normative,
      isProperNoun: false,
    });
    if (cap.findingType === "CAPITALIZATION_ERROR") {
      return {
        ...base,
        finalStatus: TRANSLATION_AUDIT_VERDICT.FINDING,
        reason: cap.reason || "case_mismatch_same_lemma",
        findingType: "CAPITALIZATION_ERROR",
        proposedNew: cap.proposedTarget || normative,
        matchedLemma: normative,
      };
    }
    return {
      ...base,
      finalStatus: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      reason: "TARGET_NORMATIVE_MISMATCH",
      findingType: null,
      proposedNew: null,
    };
  }

  if (base.finalStatus === TRANSLATION_AUDIT_VERDICT.FINDING) {
    const cap = evaluateDictionaryCapitalization({
      fieldKind: "dictionary",
      current,
      authorityLemma: normative,
      isProperNoun: false,
    });
    if (cap.findingType === "CAPITALIZATION_ERROR") {
      return {
        ...base,
        findingType: "CAPITALIZATION_ERROR",
        proposedNew: cap.proposedTarget || normative,
        matchedLemma: normative,
      };
    }
    return {
      ...base,
      finalStatus: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      reason: "TARGET_CAPITALIZATION_NOT_CONFIRMED",
      findingType: null,
      proposedNew: null,
    };
  }

  return base;
}

function sanitizeDeEvidenceText(raw) {
  let t = String(raw || "");
  if (/<[a-z][\s\S]*>/i.test(t)) {
    try {
      const { htmlToPlainText } = require("./source-adapters/http-page");
      t = htmlToPlainText(t);
    } catch {
      t = t.replace(/<[^>]+>/g, " ");
    }
  }
  return t
    .replace(/class="[^"]*"/gi, " ")
    .replace(/Lesezeichen|zitieren\/teilen|zuklappen|ausklappen|Grammatik|DWDS\s+›/gi, " ")
    .replace(/^>\s*/, "")
    .replace(/Aussprache Fehler Worttrennung[\s\S]*$/i, "")
    .replace(/\bWort(bildung|zerlegung|artikel)\b[\s\S]*$/i, "")
    .replace(/&middot;|&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 500);
}

function cardMeaningDisplayLabel(cardGerman, deAuthority) {
  const pos = cardGerman.partOfSpeech || "?";
  const art = cardGerman.article ? ` (${cardGerman.article})` : "";
  const deFrag = sanitizeDeEvidenceText(deAuthority?.evidenceFragment || cardGerman.deSenseProof || "");
  const deShort = deFrag ? deFrag.slice(0, 90) : "—";
  const enHelp = String(cardGerman.cardSenseEnHelper || "").trim();
  const enSuffix = enHelp ? ` [EN palīgs: ${enHelp.slice(0, 40)}]` : "";
  return `${pos}${art}; DE: ${deShort}${enSuffix}`;
}

module.exports = {
  loadCardSenseContext,
  filterStrictCandidates,
  resolveStrictBilingualFinalStatus,
  applyDeAndTargetAuthorityGates,
  cardMeaningDisplayLabel,
  sanitizeDeEvidenceText,
  isDictionaryLemmaForm,
  blockedBySenseGuard,
};
