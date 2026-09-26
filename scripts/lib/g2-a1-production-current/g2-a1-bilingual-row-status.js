#!/usr/bin/env node
"use strict";

const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { stripQuotes } = require("./source-adapters/lookup-normalization");
const { evaluateDictionaryCapitalization, extractNormativeLemma } = require("../master-capitalization-rule-verify");
const {
  TRANSLATION_AUDIT_VERDICT,
  isTargetOfficialValidated,
  targetLemmaEquals,
} = require("./card-translation-audit-search");

const TRANSLATION_PAIR_STATUS = Object.freeze({
  VALIDATED: "VALIDATED",
  MULTIPLE_CANDIDATES: "MULTIPLE_CANDIDATES",
  NOT_FOUND: "NOT_FOUND",
});

const TARGET_LEMMA_STATUS = Object.freeze({
  VALIDATED: "VALIDATED",
  VALIDATION_PENDING: "VALIDATION_PENDING",
  NOT_VALIDATED: "NOT_VALIDATED",
  NOT_APPLICABLE: "NOT_APPLICABLE",
});

/** Gala secinājumi (paplašināti v5). */
const GALA_CONCLUSION = Object.freeze({
  TRANSLATION_VALIDATED: TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED,
  FINDING: TRANSLATION_AUDIT_VERDICT.FINDING,
  NEEDS_SOURCE_REVIEW: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
  NOT_FOUND: "NOT_FOUND",
  TRANSLATION_PAIR_VALIDATED_TARGET_LEMMA_PENDING: "TRANSLATION_PAIR_VALIDATED_TARGET_LEMMA_PENDING",
  CAPITALIZATION_CANDIDATE_TARGET_VALIDATION_PENDING: "CAPITALIZATION_CANDIDATE_TARGET_VALIDATION_PENDING",
});

function resolveTranslationPairStatus(filteredCandidates, currentTarget) {
  if (!filteredCandidates?.length) {
    return {
      translationPairStatus: TRANSLATION_PAIR_STATUS.NOT_FOUND,
      pairReason: "NO_FILTERED_BILINGUAL_CANDIDATES",
      pairLemma: null,
    };
  }

  const current = stripQuotes(currentTarget || "");
  const lemmas = filteredCandidates.map((c) => stripQuotes(c.targetLemma || c.wordLb)).filter(Boolean);
  const lowerSet = new Set(lemmas.map((l) => l.toLowerCase()));
  const matchesCurrent = filteredCandidates.filter((c) =>
    targetLemmaEquals(c.targetLemma || c.wordLb, current),
  );

  if (lowerSet.size === 1) {
    return {
      translationPairStatus: TRANSLATION_PAIR_STATUS.VALIDATED,
      pairReason: "SINGLE_FILTERED_BILINGUAL_CANDIDATE",
      pairLemma: lemmas[0],
    };
  }

  if (matchesCurrent.length === 1) {
    return {
      translationPairStatus: TRANSLATION_PAIR_STATUS.VALIDATED,
      pairReason: "CARD_CURRENT_UNIQUELY_IN_FILTERED_SET",
      pairLemma: stripQuotes(matchesCurrent[0].targetLemma || matchesCurrent[0].wordLb),
    };
  }

  return {
    translationPairStatus: TRANSLATION_PAIR_STATUS.MULTIPLE_CANDIDATES,
    pairReason: "MULTIPLE_FILTERED_BILINGUAL_CANDIDATES",
    pairLemma: null,
  };
}

function isTechnicalTargetAccessFailure(outcome) {
  return [
    SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
    SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED,
    SOURCE_ACCESS_OUTCOME.SOURCE_RATE_LIMITED,
    SOURCE_ACCESS_OUTCOME.SOURCE_DOMAIN_REJECTED,
    SOURCE_ACCESS_OUTCOME.SOURCE_CONTENT_UNREADABLE,
    SOURCE_ACCESS_OUTCOME.SOURCE_ADAPTER_NOT_IMPLEMENTED,
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    undefined,
    null,
    "",
  ].includes(outcome);
}

/**
 * @param {Function} lookupTargetForProvenLemma
 */
async function resolveTargetLemmaStatus(appLang, currentTarget, pairLemma, lookupTargetForProvenLemma, targetLookupVariants) {
  const current = stripQuotes(currentTarget || "");
  const seed = stripQuotes(pairLemma || current);
  if (!seed) {
    return {
      targetLemmaStatus: TARGET_LEMMA_STATUS.VALIDATION_PENDING,
      targetReason: "NO_LEMMA_TO_LOOKUP",
      targetSourceUrl: null,
      normativeLemma: null,
    };
  }

  let lastOutcome = null;
  let sawDefinitiveNotFound = false;
  let sawValidatedMismatch = false;

  for (const term of targetLookupVariants(seed, current)) {
    // eslint-disable-next-line no-await-in-loop
    const auth = await lookupTargetForProvenLemma(appLang, term);
    lastOutcome = auth?.outcome;

    if (isTargetOfficialValidated(auth)) {
      const normative =
        extractNormativeLemma(auth.entryHeadwordOrRule, auth.evidenceFragment) ||
        stripQuotes(auth.entryHeadwordOrRule || term);
      if (targetLemmaEquals(normative, current) || stripQuotes(current) === normative) {
        return {
          targetLemmaStatus: TARGET_LEMMA_STATUS.VALIDATED,
          targetReason: "TARGET_OFFICIAL_MATCHES_CURRENT",
          targetSourceUrl: auth.entryUrl || auth.finalUrl || null,
          normativeLemma: normative,
        };
      }
      sawValidatedMismatch = true;
      continue;
    }

    if (auth?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND) {
      sawDefinitiveNotFound = true;
    }
  }

  if (sawValidatedMismatch || sawDefinitiveNotFound) {
    return {
      targetLemmaStatus: TARGET_LEMMA_STATUS.NOT_VALIDATED,
      targetReason: sawValidatedMismatch ? "TARGET_OFFICIAL_HEADWORD_MISMATCH" : "TARGET_ENTRY_NOT_FOUND",
      targetSourceUrl: null,
      normativeLemma: null,
    };
  }

  return {
    targetLemmaStatus: TARGET_LEMMA_STATUS.VALIDATION_PENDING,
    targetReason: lastOutcome || "TARGET_ADAPTER_UNAVAILABLE",
    targetSourceUrl: null,
    normativeLemma: null,
  };
}

function capitalizationCandidate(current, dictLemma) {
  if (!targetLemmaEquals(current, dictLemma) || stripQuotes(current) === stripQuotes(dictLemma)) {
    return null;
  }
  const cap = evaluateDictionaryCapitalization({
    fieldKind: "dictionary",
    current: stripQuotes(current),
    authorityLemma: stripQuotes(dictLemma),
    isProperNoun: false,
  });
  return cap.findingType === "CAPITALIZATION_ERROR" ? cap : null;
}

/**
 * Gala secinājums no pāra + TARGET statusa (vārdnīcas pāris netiek mainīts).
 */
function resolveFinalGalaConclusion({ translationPairStatus, targetLemmaStatus, pairLemma, currentTarget }) {
  const current = stripQuotes(currentTarget || "");
  const dictLemma = stripQuotes(pairLemma || "");

  if (translationPairStatus === TRANSLATION_PAIR_STATUS.NOT_FOUND) {
    return {
      galaConclusion: GALA_CONCLUSION.NOT_FOUND,
      findingType: null,
      proposedNew: null,
      galaReason: "NO_BILINGUAL_PAIR",
    };
  }

  if (translationPairStatus === TRANSLATION_PAIR_STATUS.MULTIPLE_CANDIDATES) {
    return {
      galaConclusion: GALA_CONCLUSION.NEEDS_SOURCE_REVIEW,
      findingType: null,
      proposedNew: null,
      galaReason: "AMBIGUOUS_BILINGUAL_PAIR",
    };
  }

  if (!dictLemma) {
    return {
      galaConclusion: GALA_CONCLUSION.NEEDS_SOURCE_REVIEW,
      findingType: null,
      proposedNew: null,
      galaReason: "PAIR_LEMMA_MISSING",
    };
  }

  const exact = current === dictLemma;
  const cap = capitalizationCandidate(current, dictLemma);
  const alignsWithPair = exact || Boolean(cap);

  if (!alignsWithPair) {
    return {
      galaConclusion: GALA_CONCLUSION.NEEDS_SOURCE_REVIEW,
      findingType: null,
      proposedNew: null,
      galaReason: "CURRENT_NOT_BILINGUAL_PAIR_LEMMA",
    };
  }

  if (targetLemmaStatus === TARGET_LEMMA_STATUS.NOT_VALIDATED) {
    return {
      galaConclusion: GALA_CONCLUSION.NEEDS_SOURCE_REVIEW,
      findingType: null,
      proposedNew: null,
      galaReason: "TARGET_LEMMA_NOT_VALIDATED",
    };
  }

  if (targetLemmaStatus === TARGET_LEMMA_STATUS.VALIDATION_PENDING) {
    if (cap) {
      return {
        galaConclusion: GALA_CONCLUSION.CAPITALIZATION_CANDIDATE_TARGET_VALIDATION_PENDING,
        findingType: "CAPITALIZATION_ERROR",
        proposedNew: cap.proposedTarget || dictLemma,
        galaReason: cap.reason || "case_mismatch_same_lemma",
      };
    }
    return {
      galaConclusion: GALA_CONCLUSION.TRANSLATION_PAIR_VALIDATED_TARGET_LEMMA_PENDING,
      findingType: null,
      proposedNew: null,
      galaReason: "BILINGUAL_PAIR_OK_TARGET_OFFICIAL_PENDING",
    };
  }

  if (targetLemmaStatus === TARGET_LEMMA_STATUS.VALIDATED) {
    if (exact) {
      return {
        galaConclusion: GALA_CONCLUSION.TRANSLATION_VALIDATED,
        findingType: null,
        proposedNew: null,
        galaReason: "CURRENT_EXACT_BILINGUAL_AND_TARGET_OFFICIAL",
      };
    }
    if (cap) {
      return {
        galaConclusion: GALA_CONCLUSION.FINDING,
        findingType: "CAPITALIZATION_ERROR",
        proposedNew: cap.proposedTarget || dictLemma,
        galaReason: cap.reason || "case_mismatch_same_lemma",
      };
    }
  }

  return {
    galaConclusion: GALA_CONCLUSION.NEEDS_SOURCE_REVIEW,
    findingType: null,
    proposedNew: null,
    galaReason: "UNRESOLVED_GALA",
  };
}

function targetStatusWhenPairNotFound() {
  return {
    targetLemmaStatus: TARGET_LEMMA_STATUS.NOT_APPLICABLE,
    targetReason: "NO_BILINGUAL_PAIR",
    targetSourceUrl: null,
    normativeLemma: null,
  };
}

module.exports = {
  TRANSLATION_PAIR_STATUS,
  TARGET_LEMMA_STATUS,
  GALA_CONCLUSION,
  resolveTranslationPairStatus,
  resolveTargetLemmaStatus,
  resolveFinalGalaConclusion,
  targetStatusWhenPairNotFound,
  capitalizationCandidate,
};
