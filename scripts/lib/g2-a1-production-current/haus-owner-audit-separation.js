#!/usr/bin/env node
"use strict";

const { isHomepageUrl } = require("./source-adapters/create-config-adapter");
const { extractNormativeLemma } = require("../master-capitalization-rule-verify");

const CURRENT_PILOT_COUNTS = Object.freeze({
  PASS: 4,
  FINDING: 10,
  NEEDS_SOURCE_REVIEW: 18,
  SOURCE_DE_ISSUE: 0,
});

const ORIGINAL_PACKAGE_BASELINE = Object.freeze({
  PASS: 4,
  FINDING: 9,
  NEEDS_SOURCE_REVIEW: 19,
  SOURCE_DE_ISSUE: 0,
});

const FINDING_DECISION_LANG_ORDER = Object.freeze([
  "en",
  "da",
  "tr",
  "gr",
  "ru",
  "cs",
  "sk",
  "nb",
  "nn",
  "fi",
]);

function emptyOwnerFields() {
  return {
    OWNER_STATUS: "",
    OWNER_NEW: "",
    OWNER_NOTE: "",
    OWNER_EVIDENCE_ACCEPTED: "",
    OWNER_REVIEWED_AT: "",
  };
}

function isLatinDom(value) {
  return /^dom$/i.test(String(value || "").trim());
}

function auditProposedNewForRow(row) {
  const proposed = row.proposedTarget;
  if (row.language === "ru") {
    if (isLatinDom(proposed)) return { ok: false, code: "RU_LATIN_DOM_REJECTED", value: proposed };
    if (!/\p{Script=Cyrillic}/u.test(String(proposed || ""))) {
      return { ok: false, code: "RU_NON_CYRILLIC_PROPOSED", value: proposed };
    }
    return { ok: true, value: "дом" };
  }
  return { ok: true, value: proposed };
}

function normalizeRuEvidenceUrl(entryUrl, auditProposedNew) {
  const url = String(entryUrl || "");
  const lemma = auditProposedNew || "дом";
  if (/orfo\.ruslang\.ru\/search\/word\/?$/i.test(url)) {
    return `https://orfo.ruslang.ru/search?word=${encodeURIComponent(lemma)}`;
  }
  if (/orfo\.ruslang\.ru\/search\/?$/i.test(url) && !url.includes("word=")) {
    return `https://orfo.ruslang.ru/search?word=${encodeURIComponent(lemma)}`;
  }
  return url;
}

function evidenceUrlAcceptable(entryUrl, { language, auditProposedNew } = {}) {
  const url = String(entryUrl || "");
  if (!url || url.includes("…") || url.includes("...")) {
    return { ok: false, code: "EVIDENCE_URL_ELLIPSIS_OR_EMPTY" };
  }
  if (isHomepageUrl(url)) {
    return { ok: false, code: "EVIDENCE_URL_HOMEPAGE" };
  }
  if (language === "ru") {
    const normalized = normalizeRuEvidenceUrl(url, auditProposedNew);
    if (!/word=|%D0%B4%D0%BE%D0%BC|дом/i.test(normalized)) {
      return { ok: false, code: "RU_EVIDENCE_URL_NO_REPRODUCIBLE_WORD", url: normalized };
    }
    return { ok: true, url: normalized };
  }
  return { ok: true, url };
}

function auditEvidenceStatus(row) {
  if (row.sourceAccessStatus === "SOURCE_ENTRY_VALIDATED" && row.evidenceSha256) {
    return "SOURCE_ENTRY_VALIDATED";
  }
  return row.sourceAccessStatus || "UNKNOWN";
}

function buildAuditReason(row, deEvidence, auditProposedNew) {
  if (row.findingType === "CAPITALIZATION_ERROR") {
    const lemma = extractNormativeLemma(row.targetHeadword, row.targetMeaningFragment);
    return `Official TARGET lemma «${lemma}»; CURRENT «${row.currentTarget}» differs only by capitalization (MASTER §7.158). AUDIT_PROPOSED_NEW «${auditProposedNew}». DE: ${deEvidence.senseNote}`;
  }
  return `CURRENT «${row.currentTarget}» vs validated TARGET lemma for DE «${deEvidence.deHeadword}» dwelling sense. AUDIT_PROPOSED_NEW «${auditProposedNew}».`;
}

function buildAuditDecisionRow(row, deEvidence) {
  const proposedCheck = auditProposedNewForRow(row);
  if (!proposedCheck.ok) {
    return { error: proposedCheck.code, language: row.language, proposed: proposedCheck.value };
  }
  const auditProposedNew = proposedCheck.value;
  const urlCheck = evidenceUrlAcceptable(row.targetEntryUrl, { language: row.language, auditProposedNew });
  const auditEvidenceUrl = urlCheck.ok ? urlCheck.url : row.targetEntryUrl;

  return {
    language: row.language,
    appCode: row.appCode,
    productionFile: row.productionFile,
    cardId: row.cardId,
    fieldPath: `cards[${row.cardIndex}].lv`,
    currentTarget: row.currentTarget,
    AUDIT_VERDICT: "FINDING",
    AUDIT_FINDING_TYPE: row.findingType,
    AUDIT_PROPOSED_NEW: auditProposedNew,
    AUDIT_REASON: buildAuditReason(row, deEvidence, auditProposedNew),
    AUDIT_EVIDENCE_URL: auditEvidenceUrl,
    AUDIT_EVIDENCE_STATUS: auditEvidenceStatus(row),
    AUDIT_EVIDENCE_SHA256: row.evidenceSha256,
    AUDIT_CHECKED_AT: row.checkedAt || new Date().toISOString(),
    targetNormativeLemma: extractNormativeLemma(row.targetHeadword, row.targetMeaningFragment),
    targetAuthority: row.targetAuthority,
    targetHeadword: row.targetHeadword,
    ...emptyOwnerFields(),
  };
}

function ownerFieldsAreEmpty(row) {
  return (
    !String(row.OWNER_STATUS || "").trim() &&
    !String(row.OWNER_NEW || "").trim() &&
    !String(row.OWNER_NOTE || "").trim() &&
    !String(row.OWNER_EVIDENCE_ACCEPTED || "").trim() &&
    !String(row.OWNER_REVIEWED_AT || "").trim()
  );
}

function assertCsNotPassWhenCapitalizationMismatch(rows, blockers) {
  const cs = rows.find((r) => r.language === "cs");
  if (!cs) return;
  if (cs.verdict === "PASS" && cs.currentTarget === "Dům" && cs.proposedTarget === "dům") {
    blockers.push({ code: "CS_PASS_CAPITALIZATION_CONTRADICTION" });
  }
  if (cs.verdict === "FINDING" && cs.currentTarget === "Dům" && cs.proposedTarget === "dům" && cs.findingType !== "CAPITALIZATION_ERROR") {
    blockers.push({ code: "CS_FINDING_TYPE_MISMATCH", got: cs.findingType });
  }
}

function assertCurrentPilotCounts(counts, blockers) {
  for (const [k, v] of Object.entries(CURRENT_PILOT_COUNTS)) {
    if (counts[k] !== v) {
      blockers.push({ code: "PILOT_COUNT_MISMATCH", metric: k, got: counts[k], expected: v });
    }
  }
}

module.exports = {
  CURRENT_PILOT_COUNTS,
  ORIGINAL_PACKAGE_BASELINE,
  FINDING_DECISION_LANG_ORDER,
  emptyOwnerFields,
  auditProposedNewForRow,
  normalizeRuEvidenceUrl,
  evidenceUrlAcceptable,
  buildAuditDecisionRow,
  buildAuditReason,
  ownerFieldsAreEmpty,
  assertCsNotPassWhenCapitalizationMismatch,
  assertCurrentPilotCounts,
  isLatinDom,
};
