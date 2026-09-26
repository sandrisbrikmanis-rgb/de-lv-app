#!/usr/bin/env node
"use strict";

const { buildAllowlistForLanguage } = require("./registry-domain-allowlist");
const { lookupDeOfficialEntry } = require("./source-adapters/de");
const { lookupTargetOfficialEntry } = require("./source-adapters/target");
const { runLodLbCardTranslationAudit } = require("./lod-card-translation-audit");
const {
  collectDeTargetFromCatalog,
  selectedDictionaryCandidateForLang,
} = require("./card-translation-catalog-collector");
const {
  TRANSLATION_AUDIT_VERDICT,
  resolveCardTranslationAuditVerdict,
} = require("./card-translation-audit-search");
const { getTargetAdapterMeta } = require("./source-adapters/target");
const { deAuthorityLookupTerms } = require("./card-translation-de-lemma");
const { targetLookupVariants } = require("./card-translation-target-lookup");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { isTargetOfficialValidated } = require("./card-translation-audit-search");

async function lookupDeForCard(cardGerman) {
  const allowDe = buildAllowlistForLanguage("lb");
  const terms = deAuthorityLookupTerms(cardGerman);
  let last = null;
  for (const lookupTerm of terms) {
    // eslint-disable-next-line no-await-in-loop
    last = await lookupDeOfficialEntry({
      lookupTerm,
      allowedDomains: allowDe.de.allowedDomains,
      authorityName: allowDe.de.authorityName,
      provenance: { role: "DE", cardLemma: cardGerman.lemma, lookupTerm },
    });
    if (last?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED) {
      return { ...last, cardLemma: cardGerman.lemma, deLookupTermUsed: lookupTerm };
    }
  }
  return last
    ? { ...last, cardLemma: cardGerman.lemma, deLookupTermUsed: terms[terms.length - 1] }
    : {
        outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
        cardLemma: cardGerman.lemma,
        deLookupTermUsed: terms[0],
      };
}

async function lookupTargetForProvenLemma(appLang, provenLemma) {
  const allow = buildAllowlistForLanguage(appLang);
  return lookupTargetOfficialEntry({
    appLang,
    lookupTerm: provenLemma,
    allowedDomains: allow.target.allowedDomains,
    authorityName: allow.target.authorityName,
    provenance: { role: "TARGET", appLang, lookupTerm: provenLemma },
  });
}

/**
 * Vienota valodas kartes tulkošanas audita palaišana (lb = LOD; pārējās = MASTER divvalodu + TARGET oficiālais).
 */
async function runCardTranslationAuditForLanguage(appLang, cardGerman, currentTarget) {
  if (appLang === "lb") {
    return runLodLbCardTranslationAudit(cardGerman, currentTarget);
  }

  const deAuthority = await lookupDeForCard(cardGerman);
  let collected = await collectDeTargetFromCatalog(appLang, cardGerman);
  const catalogCandidate = collected.catalogCandidate || selectedDictionaryCandidateForLang(appLang);
  const targetMeta = getTargetAdapterMeta(appLang);

  if (!collected.ok) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.NO_ELIGIBLE_DICTIONARY_CANDIDATE,
      blockers: [
        {
          code: "BILINGUAL_COLLECTOR_FAIL",
          rejected: collected.rejected,
          sourcesTried: collected.sourcesTried,
          searchLemma: collected.searchLemma,
          dictionarySearchStrategy: collected.dictionarySearchStrategy,
        },
      ],
      deAuthority,
      targetAuthority: null,
      dictionaryCandidates: [],
      rejectedCandidates: collected.rejected,
      bilingualMeta: collected.bilingualMeta,
      catalogCandidate,
      collectorId: collected.bilingualMeta?.sourceId || catalogCandidate?.id || `catalog-${appLang}`,
      targetValidatorId: targetMeta?.id || null,
      bilingualSourceUrl: collected.bilingualMeta?.sourceUrl || catalogCandidate?.url || null,
      bilingualResultUrl: collected.bilingualMeta?.resultUrl || null,
      deSourceUrl: deAuthority?.entryUrl || null,
      needsAdditionalBilingualSource: collected.needsAdditionalBilingualSource === true,
      sourcesTried: collected.sourcesTried,
      searchLemma: collected.searchLemma,
      dictionarySearchStrategy: collected.dictionarySearchStrategy,
    };
  }

  let resolved = resolveCardTranslationAuditVerdict({
    cardGerman,
    deAuthority,
    dictionaryCandidates: collected.eligible,
    rejectedCandidates: collected.rejected,
    currentTarget,
    appLang,
  });

  if (resolved.selectedCandidate && resolved.verdict === TRANSLATION_AUDIT_VERDICT.TARGET_OFFICIAL_NOT_VALIDATED) {
    const provenLemma = resolved.selectedCandidate.targetLemma || resolved.selectedCandidate.wordLb;
    const variants = targetLookupVariants(provenLemma, currentTarget);
    let best = resolved;
    for (const lookupTerm of variants) {
      // eslint-disable-next-line no-await-in-loop
      const targetAuthority = await lookupTargetForProvenLemma(appLang, lookupTerm);
      const retry = resolveCardTranslationAuditVerdict({
        cardGerman,
        deAuthority,
        dictionaryCandidates: collected.eligible,
        rejectedCandidates: collected.rejected,
        currentTarget,
        appLang,
        targetAuthorityForProven: targetAuthority,
      });
      retry.targetAuthority = targetAuthority;
      if (
        retry.verdict !== TRANSLATION_AUDIT_VERDICT.TARGET_OFFICIAL_NOT_VALIDATED &&
        isTargetOfficialValidated(targetAuthority)
      ) {
        best = retry;
        break;
      }
      if (isTargetOfficialValidated(targetAuthority) && retry.verdict === TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED) {
        best = retry;
        break;
      }
      if (isTargetOfficialValidated(targetAuthority)) {
        best = retry;
      }
    }
    resolved = best;
  }

  return {
    ...resolved,
    deAuthority,
    bilingualMeta: collected.bilingualMeta,
    collectorId: collected.bilingualMeta?.sourceId || catalogCandidate?.id,
    targetValidatorId: targetMeta?.id || null,
    bilingualSourceUrl: collected.bilingualMeta?.sourceUrl || catalogCandidate?.url || null,
    bilingualResultUrl: collected.bilingualMeta?.resultUrl || null,
    deSourceUrl: deAuthority?.entryUrl || null,
    targetAuthorityName: targetMeta?.authorityName || null,
    dictionaryCandidates: collected.eligible,
    rejectedCandidates: collected.rejected,
    sourcesTried: collected.sourcesTried,
    searchLemma: collected.searchLemma || collected.bilingualMeta?.searchLemma,
    dictionarySearchStrategy: collected.dictionarySearchStrategy || collected.bilingualMeta?.dictionarySearchStrategy,
  };
}

module.exports = {
  runCardTranslationAuditForLanguage,
  lookupDeForCard,
  lookupTargetForProvenLemma,
};
