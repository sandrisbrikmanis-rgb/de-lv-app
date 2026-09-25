#!/usr/bin/env node
"use strict";

const { TRANSLATION_AUDIT_VERDICT } = require("./card-translation-audit-search");
const {
  isGermanDeAuthorityDwdsOrDuden,
  canEmitFindingWithProposedNew,
} = require("./card-translation-audit-policy");

const ACCEPTABLE_READINESS_VERDICTS = Object.freeze([
  TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED,
  TRANSLATION_AUDIT_VERDICT.FINDING,
  TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
]);

/**
 * Pozitīvā regresija (Haus) — gatavībai drīkst būt tikai TV, pierādījumos balstīts FINDING
 * vai pamatots NEEDS_SOURCE_REVIEW. TARGET_OFFICIAL_NOT_VALIDATED un NO_ELIGIBLE nav gatavība.
 */
function assessPositiveRegressionVerdict(audit, cardGerman) {
  if (!audit || !isGermanDeAuthorityDwdsOrDuden(audit.deAuthority)) {
    return {
      pass: false,
      code: "DE_NOT_DWDS_DUDEN",
      got: audit?.verdict || null,
    };
  }

  const got = audit.verdict;
  if (!ACCEPTABLE_READINESS_VERDICTS.includes(got)) {
    return {
      pass: false,
      code: "VERDICT_NOT_ACCEPTABLE_FOR_READINESS",
      got,
    };
  }

  if (got === TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW) {
    if (!(audit.blockers?.length)) {
      return { pass: false, code: "NSR_WITHOUT_JUSTIFICATION", got };
    }
    return { pass: true, got, justification: audit.blockers.map((b) => b.code) };
  }

  if (got === TRANSLATION_AUDIT_VERDICT.FINDING) {
    const senseAlignedCount = audit.eligibleCount ?? 0;
    const gate = canEmitFindingWithProposedNew({
      senseAlignedCount,
      cardGerman,
      selectedCandidate: audit.selectedCandidate,
      deAuthority: audit.deAuthority,
      targetAuthority: audit.targetAuthority,
    });
    if (!gate.ok) {
      return { pass: false, code: gate.code, got };
    }
    return { pass: true, got };
  }

  return { pass: true, got };
}

/** @deprecated use assessPositiveRegressionVerdict — kept for callers migrating wording */
function hausPilotProvesAuditFlow(audit, cardGerman) {
  return assessPositiveRegressionVerdict(audit, cardGerman).pass;
}

module.exports = {
  ACCEPTABLE_READINESS_VERDICTS,
  assessPositiveRegressionVerdict,
  hausPilotProvesAuditFlow,
};
