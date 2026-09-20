#!/usr/bin/env node
"use strict";

const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { TECHNICAL_EXECUTION_STATUS } = require("./targeted-field-validation");

function isValidatedEntry(side) {
  return side?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED;
}

function evidenceQualityOk(side) {
  if (!isValidatedEntry(side)) return false;
  if (!side.entryUrl || !side.entryHeadwordOrRule) return false;
  if (!side.evidenceFragment || side.evidenceFragment.length < 25) return false;
  if (!side.adapterId || !side.contentSha256) return false;
  const generic = /^Located\s+/i.test(String(side.entryOrRule || ""));
  if (generic) return false;
  return true;
}

function buildTechnicalSourceAccessRecord(fieldRequest, bundle) {
  const status = [bundle.de.outcome, bundle.target.outcome].join("|");
  return {
    language: fieldRequest.language,
    dataset: fieldRequest.dataset,
    productionFile: fieldRequest.productionFile,
    cardId: fieldRequest.cardId,
    fieldPath: fieldRequest.fieldPath,
    CURRENT: fieldRequest.CURRENT,
    technicalSourceAccessStatus: status,
    technicalMappingStatus: TECHNICAL_EXECUTION_STATUS.SOURCE_ACCESS_FAILURE,
    AUDIT_VERDICT: null,
    DE_AUTHORITY: bundle.de.authorityName,
    DE_SOURCE_URL: bundle.de.entryUrl || bundle.de.finalUrl || bundle.de.requestedUrl,
    DE_SOURCE_ENTRY_OR_RULE: bundle.de.entryOrRule || bundle.de.outcome,
    DE_SOURCE_EVIDENCE: bundle.de.evidenceFragment || bundle.de.error || bundle.de.outcome,
    TARGET_AUTHORITY: bundle.target.authorityName,
    TARGET_SOURCE_URL: bundle.target.entryUrl || bundle.target.finalUrl || bundle.target.requestedUrl,
    TARGET_SOURCE_ENTRY_OR_RULE: bundle.target.entryOrRule || bundle.target.outcome,
    TARGET_SOURCE_EVIDENCE: bundle.target.evidenceFragment || bundle.target.error || bundle.target.outcome,
    CONTEXT_REASONING: `Official source entry not validated for audit (DE=${bundle.de.outcome}, TARGET=${bundle.target.outcome}). Not linguistic NEEDS_SOURCE_REVIEW.`,
  };
}

function validateLinguisticVerdictAgainstSourceAccess(item, bundle) {
  const verdict = item.AUDIT_VERDICT;
  if (verdict !== "PASS" && verdict !== "FINDING" && verdict !== "NEEDS_SOURCE_REVIEW") return { pass: true };

  const deOk = evidenceQualityOk(bundle.de);
  const targetOk = evidenceQualityOk(bundle.target);
  if (!deOk || !targetOk) {
    return {
      pass: false,
      error: "LINGUISTIC_VERDICT_WITHOUT_DUAL_ENTRY_VALIDATED",
      deOutcome: bundle.de.outcome,
      targetOutcome: bundle.target.outcome,
    };
  }

  if (verdict === "PASS" || verdict === "FINDING") {
    if (!item.DE_SOURCE_EVIDENCE || !item.TARGET_SOURCE_EVIDENCE) {
      return { pass: false, error: "MISSING_EVIDENCE_FIELDS" };
    }
  }
  return { pass: true };
}

function shouldBlockAsTechnical(bundle) {
  if (isValidatedEntry(bundle.de) && isValidatedEntry(bundle.target)) {
    return !evidenceQualityOk(bundle.de) || !evidenceQualityOk(bundle.target);
  }
  return true;
}

module.exports = {
  buildTechnicalSourceAccessRecord,
  validateLinguisticVerdictAgainstSourceAccess,
  shouldBlockAsTechnical,
  evidenceQualityOk,
  isValidatedEntry,
};
