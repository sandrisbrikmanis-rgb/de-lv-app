#!/usr/bin/env node
"use strict";

const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { TECHNICAL_EXECUTION_STATUS } = require("./targeted-field-validation");

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
    DE_SOURCE_URL: bundle.de.finalUrl || bundle.de.requestedUrl,
    DE_SOURCE_ENTRY_OR_RULE: bundle.de.entryOrRule || bundle.de.outcome,
    DE_SOURCE_EVIDENCE: bundle.de.evidenceFragment || bundle.de.error || bundle.de.outcome,
    TARGET_AUTHORITY: bundle.target.authorityName,
    TARGET_SOURCE_URL: bundle.target.finalUrl || bundle.target.requestedUrl,
    TARGET_SOURCE_ENTRY_OR_RULE: bundle.target.entryOrRule || bundle.target.outcome,
    TARGET_SOURCE_EVIDENCE: bundle.target.evidenceFragment || bundle.target.error || bundle.target.outcome,
    CONTEXT_REASONING: `Official source access incomplete (DE=${bundle.de.outcome}, TARGET=${bundle.target.outcome}). Not a linguistic NEEDS_SOURCE_REVIEW.`,
  };
}

function validateLinguisticVerdictAgainstSourceAccess(item, bundle) {
  const verdict = item.AUDIT_VERDICT;
  if (verdict !== "PASS" && verdict !== "FINDING") return { pass: true };

  const deOk = bundle.de.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ;
  const targetOk = bundle.target.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ;
  if (!deOk || !targetOk) {
    return {
      pass: false,
      error: "PASS_FINDING_WITHOUT_DUAL_SOURCE_READ",
      deOutcome: bundle.de.outcome,
      targetOutcome: bundle.target.outcome,
    };
  }

  if (!item.DE_SOURCE_EVIDENCE || !item.TARGET_SOURCE_EVIDENCE) {
    return { pass: false, error: "MISSING_EVIDENCE_FIELDS" };
  }
  if (item.DE_SOURCE_URL !== bundle.de.finalUrl && item.DE_SOURCE_URL !== bundle.de.requestedUrl) {
    return { pass: false, error: "DE_URL_NOT_FROM_PREFETCH" };
  }
  if (item.TARGET_SOURCE_URL !== bundle.target.finalUrl && item.TARGET_SOURCE_URL !== bundle.target.requestedUrl) {
    return { pass: false, error: "TARGET_URL_NOT_FROM_PREFETCH" };
  }
  return { pass: true };
}

function shouldBlockAsTechnical(bundle) {
  if (
    bundle.de.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_DOMAIN_REJECTED ||
    bundle.target.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_DOMAIN_REJECTED ||
    bundle.de.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED ||
    bundle.target.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED ||
    bundle.de.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_RATE_LIMITED ||
    bundle.target.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_RATE_LIMITED ||
    bundle.de.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED ||
    bundle.target.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED ||
    bundle.de.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_CONTENT_UNREADABLE ||
    bundle.target.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_CONTENT_UNREADABLE
  ) {
    return true;
  }
  return false;
}

module.exports = {
  buildTechnicalSourceAccessRecord,
  validateLinguisticVerdictAgainstSourceAccess,
  shouldBlockAsTechnical,
};
