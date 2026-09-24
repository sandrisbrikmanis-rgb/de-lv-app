#!/usr/bin/env node
"use strict";

const { buildAllowlistForLanguage } = require("./registry-domain-allowlist");
const { lookupDeOfficialEntry } = require("./source-adapters/de");
const { lookupLodOfficialLbEntry } = require("./lod-de-reverse-api");
const {
  fetchLodDeSearchJson,
  selectLodDeReverseMatches,
  isRejectedProperNounOrPlace,
  isOrdinaryDictionaryPos,
  deSenseMatchesLemma,
} = require("./lod-de-reverse-api");
const {
  TRANSLATION_AUDIT_VERDICT,
  REJECT_REASON,
  resolveCardTranslationAuditVerdict,
} = require("./card-translation-audit-search");

function collectLodDeReverseAuditPayload(payload, germanLemma) {
  const eligible = selectLodDeReverseMatches(payload, germanLemma);
  const rejected = [];
  const lemma = String(germanLemma || "").trim();

  for (const row of payload?.results || []) {
    const wordLb = String(row.word_lb || "").trim();
    if (isRejectedProperNounOrPlace(row, lemma)) {
      rejected.push({
        wordLb,
        articleId: row.article_id,
        reason: REJECT_REASON.PROPER_NOUN_OR_PLACE,
        pos: row.pos,
      });
      continue;
    }
    if (!isOrdinaryDictionaryPos(row.pos)) {
      rejected.push({
        wordLb,
        articleId: row.article_id,
        reason: REJECT_REASON.POS_NOT_ORDINARY_LEXICON,
        pos: row.pos,
      });
      continue;
    }
    let anySense = false;
    for (const meaning of row.meanings || []) {
      if (deSenseMatchesLemma(meaning.translation, lemma).match) anySense = true;
    }
    if (!anySense && wordLb) {
      rejected.push({
        wordLb,
        articleId: row.article_id,
        reason: REJECT_REASON.DE_SENSE_MISMATCH,
        pos: row.pos,
      });
    }
  }

  return { eligible, rejected };
}

/**
 * @param {object} cardGerman
 * @param {string} currentTarget — kartītes CURRENT (production TARGET); pilotos = pareizais variants
 */
async function runLodLbCardTranslationAudit(cardGerman, currentTarget) {
  const allowDe = buildAllowlistForLanguage("lb");
  const deAuthority = await lookupDeOfficialEntry({
    lookupTerm: cardGerman.lemma,
    allowedDomains: allowDe.de.allowedDomains,
    authorityName: allowDe.de.authorityName,
    provenance: { role: "DE", cardLemma: cardGerman.lemma, note: "DWDS/Duden only — LOD is lb TARGET" },
  });

  const fetched = await fetchLodDeSearchJson(cardGerman.lemma);
  if (!fetched.ok) {
    return {
      verdict: TRANSLATION_AUDIT_VERDICT.NO_ELIGIBLE_DICTIONARY_CANDIDATE,
      blockers: [{ code: "LOD_API_FAIL", error: fetched.error }],
      deAuthority,
      dictionaryCandidates: [],
      rejectedCandidates: [],
      targetAuthority: null,
    };
  }

  const { eligible, rejected } = collectLodDeReverseAuditPayload(fetched.payload, cardGerman.lemma);

  let resolved = resolveCardTranslationAuditVerdict({
    cardGerman,
    deAuthority,
    dictionaryCandidates: eligible,
    rejectedCandidates: rejected,
    currentTarget,
    appLang: "lb",
  });

  let targetAuthority = null;
  if (
    resolved.selectedCandidate &&
    resolved.verdict === TRANSLATION_AUDIT_VERDICT.TARGET_OFFICIAL_NOT_VALIDATED
  ) {
    const sel = resolved.selectedCandidate;
    targetAuthority = await lookupLodOfficialLbEntry(sel.wordLb, sel.articleId || null);
    resolved = resolveCardTranslationAuditVerdict({
      cardGerman,
      deAuthority,
      dictionaryCandidates: eligible,
      rejectedCandidates: rejected,
      currentTarget,
      appLang: "lb",
      targetAuthorityForProven: targetAuthority,
    });
  }

  return {
    ...resolved,
    deAuthority,
    targetAuthority,
    dictionaryCandidates: eligible,
    rejectedCandidates: rejected,
    lodSearchUrl: fetched.url,
  };
}

module.exports = {
  collectLodDeReverseAuditPayload,
  runLodLbCardTranslationAudit,
  TRANSLATION_AUDIT_VERDICT,
};
