#!/usr/bin/env node
"use strict";

const { LEVEL } = require("./constants");
const { buildCardGermanFromFieldRequest } = require("./card-german-from-field-request");
const { TRANSLATION_AUDIT_VERDICT } = require("./lod-card-translation-audit");
const { runCardTranslationAuditForLanguage } = require("./card-translation-lang-run");
const { effectiveDeSenseText } = require("./card-translation-audit-search");
const { stripQuotes } = require("./source-adapters/lookup-normalization");

const EXECUTOR_VERSION = "g2-a1-card-translation-audit-executor-v2";
const { languageMayReceiveTranslationValidated, isGermanDeAuthorityDwdsOrDuden } = require("./card-translation-audit-policy");

function mapTranslationVerdictToAuditVerdict(translationVerdict) {
  switch (translationVerdict) {
    case TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED:
      return "PASS";
    case TRANSLATION_AUDIT_VERDICT.FINDING:
      return "FINDING";
    case TRANSLATION_AUDIT_VERDICT.DE_NOT_CONFIRMED:
      return "SOURCE_DE_ISSUE";
    default:
      return "NEEDS_SOURCE_REVIEW";
  }
}

function buildContextReasoning(audit, cardGerman) {
  const parts = [];
  parts.push(
    `DE lemma «${cardGerman.lemma}»${cardGerman.article ? ` (${cardGerman.article})` : ""}; POS=${cardGerman.partOfSpeech || "unknown"}.`,
  );
  if (cardGerman.contextSnippet) parts.push(`Card context (production): ${cardGerman.contextSnippet.slice(0, 200)}.`);
  const deSense = effectiveDeSenseText(cardGerman, audit.deAuthority);
  if (deSense.text) parts.push(`DE sense evidence (${deSense.provenance}): ${deSense.text.slice(0, 180)}…`);
  parts.push(
    `Dictionary candidates after POS+sense filter: eligible=${audit.dictionaryCandidates?.length ?? 0}, rejected=${audit.rejectedCandidates?.length ?? 0}.`,
  );
  if (audit.selectedCandidate) {
    parts.push(
      `Proven DE→TARGET candidate: «${audit.selectedCandidate.wordLb}» (${audit.selectedCandidate.articleUrl || audit.selectedCandidate.articleId}).`,
    );
  }
  if (audit.verdict === TRANSLATION_AUDIT_VERDICT.FINDING) {
    parts.push(
      `CURRENT «${audit.currentTarget}» ≠ source-proven «${audit.provenTargetLemma}» — FINDING without AI variant choice.`,
    );
  } else if (audit.verdict === TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED) {
    parts.push(`CURRENT matches source-proven TARGET lemma «${audit.provenTargetLemma}».`);
  } else if (audit.blockers?.length) {
    parts.push(`Blocker: ${audit.blockers.map((b) => b.code).join(", ")}.`);
  }
  return parts.join(" ");
}

/**
 * Avota balstīts tulkošanas audits vienam fieldRequest (bez Luna interpretācijas).
 * @param {object} fieldRequest
 */
async function runCardTranslationAuditForField(fieldRequest) {
  const cardGerman = buildCardGermanFromFieldRequest(fieldRequest);
  const currentTarget = stripQuotes(fieldRequest.CURRENT || fieldRequest.cardContext?.targetHeadword || "");

  if (!cardGerman.lemma) {
    return {
      executorVersion: EXECUTOR_VERSION,
      pass: false,
      translationVerdict: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      blockers: [{ code: "MISSING_DE_LEMMA_ON_CARD" }],
      cardGerman,
      currentTarget,
    };
  }

  if (!languageMayReceiveTranslationValidated(fieldRequest.language)) {
    return {
      executorVersion: EXECUTOR_VERSION,
      pass: false,
      translationVerdict: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      verdict: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
      blockers: [
        {
          code: "LANGUAGE_NOT_CARD_TRANSLATION_READY",
          language: fieldRequest.language,
          note: "Run verify-g2-a1-card-translation-32lang-full and pass all gates for this language.",
        },
      ],
      cardGerman,
      currentTarget,
    };
  }

  const audit = await runCardTranslationAuditForLanguage(fieldRequest.language, cardGerman, currentTarget);
  if (audit.deAuthority && !isGermanDeAuthorityDwdsOrDuden(audit.deAuthority)) {
    audit.verdict = TRANSLATION_AUDIT_VERDICT.DE_NOT_CONFIRMED;
    audit.blockers = [{ code: "DE_MUST_BE_DWDS_OR_DUDEN_NOT_LOD" }];
  }
  return {
    executorVersion: EXECUTOR_VERSION,
    pass: true,
    cardGerman,
    currentTarget,
    ...audit,
  };
}

function buildApvienotsAuditRecord(fieldRequest, audit) {
  let translationVerdict = audit.verdict || audit.translationVerdict;
  if (
    translationVerdict === TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED &&
    !languageMayReceiveTranslationValidated(fieldRequest.language)
  ) {
    translationVerdict = TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW;
  }
  const auditVerdict = mapTranslationVerdictToAuditVerdict(translationVerdict);
  const de = audit.deAuthority || {};
  const target = audit.targetAuthority || {};
  const sel = audit.selectedCandidate;

  const record = {
    language: fieldRequest.language,
    dataset: fieldRequest.dataset || LEVEL,
    productionFile: fieldRequest.productionFile,
    cardId: fieldRequest.cardId,
    fieldPath: fieldRequest.fieldPath,
    CURRENT: fieldRequest.CURRENT,
    DE_AUTHORITY: de.authorityName || fieldRequest.DE_AUTHORITY,
    DE_SOURCE_URL: de.entryUrl || de.finalUrl || fieldRequest.DE_SOURCE_URL,
    DE_SOURCE_ENTRY_OR_RULE: de.entryHeadwordOrRule || de.entryOrRule || de.outcome,
    DE_SOURCE_EVIDENCE: de.evidenceFragment || de.error || de.outcome,
    TARGET_AUTHORITY: target.authorityName || fieldRequest.TARGET_AUTHORITY || "LOD (lb)",
    TARGET_SOURCE_URL: target.entryUrl || sel?.articleUrl || fieldRequest.TARGET_SOURCE_URL,
    TARGET_SOURCE_ENTRY_OR_RULE: target.entryHeadwordOrRule || sel?.wordLb || target.outcome,
    TARGET_SOURCE_EVIDENCE: target.evidenceFragment || sel?.deTranslation || target.error,
    CONTEXT_REASONING: buildContextReasoning(audit, audit.cardGerman || buildCardGermanFromFieldRequest(fieldRequest)),
    AUDIT_VERDICT: auditVerdict,
    translationAuditVerdict: translationVerdict,
    executorVersion: EXECUTOR_VERSION,
    dictionaryCandidateCount: audit.dictionaryCandidates?.length ?? 0,
    rejectedCandidateCount: audit.rejectedCandidates?.length ?? 0,
  };

  if (auditVerdict === "FINDING") {
    record.CURRENT_PROBLEM = `Production CURRENT «${audit.currentTarget || fieldRequest.CURRENT}» ≠ DE→TARGET dictionary candidate «${audit.provenTargetLemma || sel?.wordLb}».`;
    record.PROPOSED_NEW = audit.provenTargetLemma || sel?.wordLb || "";
    record.NEW_SOURCE_EVIDENCE = sel?.articleUrl || target.entryUrl || target.evidenceFragment || "";
    record.AUDIT_FINDING_TYPE = "WRONG_TRANSLATION";
  }

  return record;
}

async function executeCardTranslationAuditFieldRecord(fieldRequest) {
  const audit = await runCardTranslationAuditForField(fieldRequest);
  const cardGerman = audit.cardGerman || buildCardGermanFromFieldRequest(fieldRequest);
  return buildApvienotsAuditRecord(fieldRequest, { ...audit, cardGerman });
}

module.exports = {
  EXECUTOR_VERSION,
  mapTranslationVerdictToAuditVerdict,
  runCardTranslationAuditForField,
  buildApvienotsAuditRecord,
  executeCardTranslationAuditFieldRecord,
};
