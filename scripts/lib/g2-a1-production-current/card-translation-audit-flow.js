#!/usr/bin/env node
"use strict";

const {
  TRANSLATION_AUDIT_VERDICT,
  isTargetOfficialValidated,
} = require("./card-translation-audit-search");
const {
  isGermanDeAuthorityDwdsOrDuden,
  canEmitFindingWithProposedNew,
} = require("./card-translation-audit-policy");

/** Verdicti, kas var apmierināt pozitīvo regresiju (NSR nav gatavība). */
const POSITIVE_REGRESSION_VERDICTS = Object.freeze([
  TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED,
  TRANSLATION_AUDIT_VERDICT.FINDING,
]);

function provenTargetLemmaFromAudit(audit) {
  return (
    audit?.provenTargetLemma ||
    audit?.selectedCandidate?.targetLemma ||
    audit?.selectedCandidate?.wordLb ||
    null
  );
}

function targetSourceUrlFromAudit(audit) {
  return audit?.targetAuthority?.entryUrl || audit?.targetAuthority?.finalUrl || null;
}

/**
 * TARGET oficiālā validācija gatavībai — obligāti URL + lemma + SOURCE_ENTRY_VALIDATED.
 */
function assessHausPilotTargetOfficialValidation(audit) {
  const targetSourceUrl = targetSourceUrlFromAudit(audit);
  const provenTargetLemma = provenTargetLemmaFromAudit(audit);
  if (!targetSourceUrl || !String(provenTargetLemma || "").trim()) {
    return {
      valid: false,
      targetSourceUrl,
      provenTargetLemma,
      code: "MISSING_TARGET_URL_OR_PROVEN_LEMMA",
    };
  }
  if (!isTargetOfficialValidated(audit?.targetAuthority)) {
    return {
      valid: false,
      targetSourceUrl,
      provenTargetLemma,
      code: "TARGET_AUTHORITY_NOT_VALIDATED",
    };
  }
  return { valid: true, targetSourceUrl, provenTargetLemma, code: null };
}

function assessBilingualCollectorProven(audit, appLang) {
  if (appLang === "lb") {
    return Boolean(audit?.bilingualResultUrl || audit?.bilingualMeta?.resultUrl || audit?.dictionaryCandidates?.length);
  }
  const resultUrl = audit?.bilingualResultUrl || audit?.bilingualMeta?.resultUrl;
  const hasDictionaryPath = Boolean(audit?.bilingualSourceUrl || audit?.bilingualMeta?.sourceUrl);
  const hasCandidates =
    (audit?.dictionaryCandidates?.length || 0) > 0 ||
    audit?.verdict === TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED ||
    audit?.verdict === TRANSLATION_AUDIT_VERDICT.FINDING;
  return Boolean(resultUrl && hasDictionaryPath && hasCandidates);
}

/**
 * Pozitīvā regresija — tikai TRANSLATION_VALIDATED vai pierādījumos balstīts FINDING.
 * NEEDS_SOURCE_REVIEW nekad nav gatavība.
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

  if (got === TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW) {
    return {
      pass: false,
      code: "NSR_NOT_READINESS_VERDICT",
      got,
      auditVerdictPreserved: true,
    };
  }

  if (!POSITIVE_REGRESSION_VERDICTS.includes(got)) {
    return {
      pass: false,
      code: "VERDICT_NOT_ACCEPTABLE_FOR_READINESS",
      got,
    };
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
  }

  return { pass: true, got };
}

function hausPilotProvesAuditFlow(audit, cardGerman) {
  return assessPositiveRegressionVerdict(audit, cardGerman).pass;
}

module.exports = {
  POSITIVE_REGRESSION_VERDICTS,
  provenTargetLemmaFromAudit,
  targetSourceUrlFromAudit,
  assessHausPilotTargetOfficialValidation,
  assessBilingualCollectorProven,
  assessPositiveRegressionVerdict,
  hausPilotProvesAuditFlow,
};
