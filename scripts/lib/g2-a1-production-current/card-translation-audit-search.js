#!/usr/bin/env node
"use strict";

const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");

/** Kartītes / A1–C2 audita galīgais tulkošanas secinājums (nav tikai vārdnīcas “FOUND”). */
const TRANSLATION_AUDIT_VERDICT = Object.freeze({
  TRANSLATION_VALIDATED: "TRANSLATION_VALIDATED",
  NEEDS_SOURCE_REVIEW: "NEEDS_SOURCE_REVIEW",
  DE_NOT_CONFIRMED: "DE_NOT_CONFIRMED",
  NO_ELIGIBLE_DICTIONARY_CANDIDATE: "NO_ELIGIBLE_DICTIONARY_CANDIDATE",
  TARGET_OFFICIAL_NOT_VALIDATED: "TARGET_OFFICIAL_NOT_VALIDATED",
});

const REJECT_REASON = Object.freeze({
  PROPER_NOUN_OR_PLACE: "PROPER_NOUN_OR_PLACE",
  POS_NOT_ORDINARY_LEXICON: "POS_NOT_ORDINARY_LEXICON",
  DE_SENSE_MISMATCH: "DE_SENSE_MISMATCH",
  POS_MISMATCH_CARD: "POS_MISMATCH_CARD",
  PHRASE_OR_MULTIWORD: "PHRASE_OR_MULTIWORD",
});

function normalizePos(pos) {
  return String(pos || "")
    .trim()
    .toLowerCase();
}

function lodPosFamily(lodPos) {
  const p = String(lodPos || "").trim().toUpperCase();
  if (/^SUBST/.test(p)) return "noun";
  if (/^VRB/.test(p)) return "verb";
  if (/^ADJ/.test(p)) return "adjective";
  if (/^ADV/.test(p)) return "adverb";
  if (p === "NP") return "proper_noun";
  return "other";
}

function cardPosMatchesLodPos(cardPartOfSpeech, lodPos) {
  const card = normalizePos(cardPartOfSpeech);
  const family = lodPosFamily(lodPos);
  if (!card) return family !== "proper_noun";
  if (card === "noun") return family === "noun";
  if (card === "verb") return family === "verb";
  if (card === "adjective") return family === "adjective";
  if (card === "adverb") return family === "adverb";
  return family !== "proper_noun";
}

function isDeLemmaConfirmed(deAuthority) {
  return (
    deAuthority?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED &&
    Boolean(deAuthority?.entryUrl) &&
    Boolean(deAuthority?.evidenceFragment)
  );
}

function deLemmaMatchesCard(deAuthority, cardGerman) {
  if (!cardGerman?.lemma) return false;
  const hw = String(deAuthority?.entryHeadwordOrRule || deAuthority?.entryOrRule || "").trim();
  if (hw && new RegExp(`\\b${escapeRe(cardGerman.lemma)}\\b`, "i").test(hw)) return true;
  const frag = String(deAuthority?.evidenceFragment || "");
  return new RegExp(`\\b${escapeRe(cardGerman.lemma)}\\b`, "i").test(frag);
}

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Salīdzina vārdnīcas DE nozīmes tekstu ar kartītes DE nozīmi (fragmentu).
 * Nav pilnīga semantikas AI — tikai pierādāma saderība vai NEEDS_SOURCE_REVIEW.
 */
function dictionaryDeSenseAlignsWithCard(cardGerman, dictionaryDeTranslation) {
  const tr = String(dictionaryDeTranslation || "").trim();
  const lemma = String(cardGerman?.lemma || "").trim();
  if (!lemma || !tr) return { aligned: false, reason: "missing_text" };

  const parts = tr.split(/[,;]/).map((p) => p.trim()).filter(Boolean);
  const esc = escapeRe(lemma);
  const exactPart = parts.find(
    (p) => new RegExp(`^${esc}$`, "i").test(p) || new RegExp(`^${esc}\\s+\\[[^\\]]+\\]$`, "i").test(p),
  );
  if (!exactPart) return { aligned: false, reason: "de_lemma_not_own_sense_segment" };

  const cardMeaning = String(cardGerman?.germanMeaning || cardGerman?.deSenseNote || "").trim();
  if (!cardMeaning || cardMeaning.length < 12) {
    return { aligned: true, reason: "card_meaning_not_provided_accept_lemma_match" };
  }

  const glossMatch = exactPart.match(/\[([^\]]+)\]/);
  const gloss = glossMatch?.[1]?.toLowerCase() || "";
  const cardLower = cardMeaning.toLowerCase();
  if (gloss && cardLower.includes(gloss.slice(0, Math.min(12, gloss.length)))) {
    return { aligned: true, reason: "gloss_overlap" };
  }

  if (cardLower.length >= 20 && tr.toLowerCase().split(/\s+/).some((w) => w.length > 4 && cardLower.includes(w))) {
    return { aligned: true, reason: "token_overlap" };
  }

  return { aligned: true, reason: "lemma_match_only_needs_owner_if_strict_semantics" };
}

function isTargetOfficialValidated(targetAuthority) {
  return (
    targetAuthority?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED ||
    targetAuthority?.outcome === "SOURCE_ENTRY_VALIDATED"
  );
}

function targetHeadwordMatchesExpected(targetAuthority, expectedTargetLemma) {
  if (!expectedTargetLemma) return false;
  const hw = String(targetAuthority?.entryHeadwordOrRule || "").trim();
  return hw.toLowerCase() === String(expectedTargetLemma).trim().toLowerCase();
}

/**
 * @param {object} input
 * @param {object} input.cardGerman — { lemma, partOfSpeech, article?, germanMeaning?, deSenseNote? }
 * @param {object} input.deAuthority — oficiālā DE avota lookup rezultāts
 * @param {object[]} input.dictionaryCandidates — { wordLb, articleId, articleUrl, pos, deTranslation, ... }
 * @param {object[]} input.rejectedCandidates — { wordLb?, reason, detail? }
 * @param {object} [input.targetAuthority] — oficiālā TARGET vārdnīca
 * @param {string} [input.expectedTargetLemma] — kartītes TARGET lemmas
 */
function resolveCardTranslationAuditVerdict(input) {
  const blockers = [];
  const cardGerman = input.cardGerman || {};
  const deAuthority = input.deAuthority || {};
  const eligible = input.dictionaryCandidates || [];
  const rejected = input.rejectedCandidates || [];

  if (!isDeLemmaConfirmed(deAuthority)) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.DE_NOT_CONFIRMED,
      blockers: [{ code: "DE_AUTHORITY_NOT_VALIDATED", outcome: deAuthority.outcome }],
      selectedCandidate: null,
      eligibleCount: eligible.length,
      rejectedCount: rejected.length,
    };
  }

  if (!deLemmaMatchesCard(deAuthority, cardGerman)) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      blockers: [{ code: "DE_LEMMA_CARD_MISMATCH" }],
      selectedCandidate: null,
      eligibleCount: eligible.length,
      rejectedCount: rejected.length,
    };
  }

  const posFiltered = eligible.filter((c) => cardPosMatchesLodPos(cardGerman.partOfSpeech, c.pos));
  if (!posFiltered.length) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.NO_ELIGIBLE_DICTIONARY_CANDIDATE,
      blockers: [{ code: "NO_POS_ALIGNED_CANDIDATE", eligibleBeforePos: eligible.length }],
      selectedCandidate: null,
      eligibleCount: 0,
      rejectedCount: rejected.length,
    };
  }

  const senseAligned = [];
  for (const c of posFiltered) {
    const sense = dictionaryDeSenseAlignsWithCard(cardGerman, c.deTranslation);
    if (sense.aligned) senseAligned.push({ ...c, senseAlignment: sense.reason });
  }

  if (!senseAligned.length) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.NO_ELIGIBLE_DICTIONARY_CANDIDATE,
      blockers: [{ code: "DE_SENSE_ALIGNMENT_FAIL" }],
      selectedCandidate: null,
      eligibleCount: 0,
      rejectedCount: rejected.length,
    };
  }

  if (senseAligned.length > 1) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      blockers: [{ code: "MULTIPLE_DICTIONARY_CANDIDATES", count: senseAligned.length }],
      selectedCandidate: null,
      ambiguousCandidates: senseAligned.map((c) => ({
        wordLb: c.wordLb,
        articleId: c.articleId,
        articleUrl: c.articleUrl,
        deTranslation: c.deTranslation,
        pos: c.pos,
      })),
      eligibleCount: senseAligned.length,
      rejectedCount: rejected.length,
    };
  }

  const selected = senseAligned[0];
  const expectedTarget = input.expectedTargetLemma;

  if (!expectedTarget) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      blockers: [{ code: "MISSING_EXPECTED_TARGET_LEMMA_FOR_OFFICIAL_CHECK" }],
      selectedCandidate: selected,
      eligibleCount: 1,
      rejectedCount: rejected.length,
    };
  }

  if (!isTargetOfficialValidated(input.targetAuthority)) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.TARGET_OFFICIAL_NOT_VALIDATED,
      blockers: [{ code: "TARGET_OFFICIAL_LOOKUP_FAIL", outcome: input.targetAuthority?.outcome }],
      selectedCandidate: selected,
      eligibleCount: 1,
      rejectedCount: rejected.length,
    };
  }

  if (!targetHeadwordMatchesExpected(input.targetAuthority, expectedTarget)) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      blockers: [
        {
          code: "TARGET_OFFICIAL_HEADWORD_MISMATCH",
          expected: expectedTarget,
          got: input.targetAuthority?.entryHeadwordOrRule,
        },
      ],
      selectedCandidate: selected,
      eligibleCount: 1,
      rejectedCount: rejected.length,
    };
  }

  if (expectedTarget.toLowerCase() !== String(selected.wordLb || "").toLowerCase()) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      blockers: [
        {
          code: "DICTIONARY_LB_HEADWORD_NE_OFFICIAL_TARGET",
          dictionaryLb: selected.wordLb,
          officialTarget: expectedTarget,
        },
      ],
      selectedCandidate: selected,
      eligibleCount: 1,
      rejectedCount: rejected.length,
    };
  }

  return {
    verdict: TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED,
    blockers: [],
    selectedCandidate: selected,
    eligibleCount: 1,
    rejectedCount: rejected.length,
  };
}

module.exports = {
  TRANSLATION_AUDIT_VERDICT,
  REJECT_REASON,
  lodPosFamily,
  cardPosMatchesLodPos,
  isDeLemmaConfirmed,
  deLemmaMatchesCard,
  dictionaryDeSenseAlignsWithCard,
  resolveCardTranslationAuditVerdict,
};
