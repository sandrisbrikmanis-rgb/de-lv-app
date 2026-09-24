#!/usr/bin/env node
"use strict";

const { buildAllowlistForLanguage } = require("./registry-domain-allowlist");
const { lookupDeOfficialEntry } = require("./source-adapters/de");
const { lookupTargetOfficialEntry } = require("./source-adapters/target");
const { runLodLbCardTranslationAudit } = require("./lod-card-translation-audit");
const { collectDeTargetCandidatesFromBilingualDictionary, manifestRowForLang } = require("./card-translation-bilingual-collector");
const {
  TRANSLATION_AUDIT_VERDICT,
  resolveCardTranslationAuditVerdict,
} = require("./card-translation-audit-search");
const { getTargetAdapterMeta } = require("./source-adapters/target");

async function lookupDeForCard(cardGerman) {
  const allowDe = buildAllowlistForLanguage("lb");
  return lookupDeOfficialEntry({
    lookupTerm: cardGerman.lemma,
    allowedDomains: allowDe.de.allowedDomains,
    authorityName: allowDe.de.authorityName,
    provenance: { role: "DE", cardLemma: cardGerman.lemma },
  });
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
  const collected = await collectDeTargetCandidatesFromBilingualDictionary(appLang, cardGerman);
  const manifest = manifestRowForLang(appLang);
  const targetMeta = getTargetAdapterMeta(appLang);

  if (!collected.ok) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.NO_ELIGIBLE_DICTIONARY_CANDIDATE,
      blockers: [{ code: "BILINGUAL_COLLECTOR_FAIL", rejected: collected.rejected }],
      deAuthority,
      targetAuthority: null,
      dictionaryCandidates: [],
      rejectedCandidates: collected.rejected,
      bilingualMeta: collected.bilingualMeta,
      collectorId: collected.bilingualMeta?.sourceId || manifest?.overrideId || `manifest-${appLang}`,
      targetValidatorId: targetMeta?.adapterId || null,
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

  if (
    resolved.selectedCandidate &&
    resolved.verdict === TRANSLATION_AUDIT_VERDICT.TARGET_OFFICIAL_NOT_VALIDATED
  ) {
    const provenLemma = resolved.selectedCandidate.targetLemma || resolved.selectedCandidate.wordLb;
    const targetAuthority = await lookupTargetForProvenLemma(appLang, provenLemma);
    resolved = resolveCardTranslationAuditVerdict({
      cardGerman,
      deAuthority,
      dictionaryCandidates: collected.eligible,
      rejectedCandidates: collected.rejected,
      currentTarget,
      appLang,
      targetAuthorityForProven: targetAuthority,
    });
    resolved.targetAuthority = targetAuthority;
  }

  return {
    ...resolved,
    deAuthority,
    bilingualMeta: collected.bilingualMeta,
    collectorId: collected.bilingualMeta?.sourceId || `manifest-${appLang}`,
    targetValidatorId: targetMeta?.adapterId || null,
    bilingualSourceUrl: collected.bilingualMeta?.sourceUrl || manifest?.url || null,
    targetAuthorityName: targetMeta?.authorityName || null,
    dictionaryCandidates: collected.eligible,
    rejectedCandidates: collected.rejected,
  };
}

module.exports = {
  runCardTranslationAuditForLanguage,
  lookupDeForCard,
  lookupTargetForProvenLemma,
};
