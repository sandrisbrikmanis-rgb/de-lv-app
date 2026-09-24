#!/usr/bin/env node
"use strict";

const { TRANSLATION_AUDIT_VERDICT } = require("./card-translation-audit-search");
const { isGermanDeAuthorityDwdsOrDuden } = require("./card-translation-audit-policy");

/**
 * Vai production (vai pilot) audita plūsma ir pierādāma — neatkarīgi no tā, vai CURRENT ir pareizs.
 */
function hausPilotProvesAuditFlow(audit) {
  if (!audit || !isGermanDeAuthorityDwdsOrDuden(audit.deAuthority)) return false;
  const v = audit.verdict;
  if (v === TRANSLATION_AUDIT_VERDICT.DE_NOT_CONFIRMED) return false;

  if (
    v === TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED ||
    v === TRANSLATION_AUDIT_VERDICT.FINDING ||
    v === TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW
  ) {
    return true;
  }

  if (v === TRANSLATION_AUDIT_VERDICT.TARGET_OFFICIAL_NOT_VALIDATED) {
    return (audit.dictionaryCandidates?.length || 0) > 0;
  }

  if (v === TRANSLATION_AUDIT_VERDICT.NO_ELIGIBLE_DICTIONARY_CANDIDATE) {
    return Boolean(audit.bilingualMeta?.resultUrl || audit.bilingualResultUrl || audit.collectorId);
  }

  return false;
}

module.exports = {
  hausPilotProvesAuditFlow,
};
