#!/usr/bin/env node
"use strict";

const { RECORD_KIND, AUDIT_SOURCE } = require("./constants");

function baseAudited(overrides) {
  return {
    recordKind: RECORD_KIND.AUDITED_EVIDENCE,
    auditSource: AUDIT_SOURCE,
    productionFile: "data/et/a1.js",
    language: "et",
    fieldPath: "a1.card.test.study",
    currentValue: "test",
    rowId: "et|a1.card.test.study",
    DE_AUTHORITY: "Rat für deutsche Rechtschreibung + …",
    DE_SOURCE_URL: "https://www.duden.de/",
    DE_SOURCE_ENTRY_OR_RULE: "Lemma: Test",
    DE_SOURCE_EVIDENCE: "Duden entry cites form Test for this card context.",
    TARGET_AUTHORITY: "Eesti Keele Instituut",
    TARGET_SOURCE_URL: "https://sonaveeb.ee/",
    TARGET_SOURCE_ENTRY_OR_RULE: "Entry matches pedagogical A1 usage",
    TARGET_SOURCE_EVIDENCE: "Sõnaveeb snippet supports CURRENT for this field.",
    CONTEXT_REASONING: "DE and ET authorities align for this card field in A1 context.",
    ...overrides,
  };
}

function syntheticAuditedSet() {
  return [
    baseAudited({
      AUDIT_VERDICT: "PASS",
      rowId: "et|pass-1",
      fieldPath: "a1.card.p1.study",
      DE_SOURCE_EVIDENCE: "Duden entry PASS-1 for a1.card.p1.study.",
      TARGET_SOURCE_EVIDENCE: "Sõnaveeb PASS-1 for a1.card.p1.study.",
      CONTEXT_REASONING: "Individual PASS-1 contextual alignment.",
    }),
    baseAudited({
      AUDIT_VERDICT: "FINDING",
      rowId: "et|finding-1",
      fieldPath: "a1.card.f1.study",
      DE_SOURCE_EVIDENCE: "Duden entry FINDING-1.",
      TARGET_SOURCE_EVIDENCE: "Sõnaveeb FINDING-1 mismatch.",
      CONTEXT_REASONING: "Individual FINDING-1 analysis.",
      CURRENT_PROBLEM: "Form does not match authority norm",
      PROPOSED_NEW: "corrected",
      NEW_SOURCE_EVIDENCE: "Authority rule §12 for f1",
    }),
    baseAudited({
      AUDIT_VERDICT: "NEEDS_SOURCE_REVIEW",
      rowId: "et|nsr-1",
      fieldPath: "a1.card.n1.study",
      DE_SOURCE_EVIDENCE: "Duden entry NSR-1 inconclusive.",
      TARGET_SOURCE_EVIDENCE: "Sõnaveeb NSR-1 inconclusive.",
      CONTEXT_REASONING: "Individual NSR-1 cannot close.",
    }),
    baseAudited({
      AUDIT_VERDICT: "SOURCE_DE_ISSUE",
      rowId: "lv|de-1",
      language: "lv",
      productionFile: "data/a1.js",
      fieldPath: "a1.card.d1.de",
      DE_SOURCE_EVIDENCE: "Duden entry DE-ISSUE-1 on DE field.",
      TARGET_SOURCE_EVIDENCE: "LVA authority TARGET for DE-ISSUE-1.",
      CONTEXT_REASONING: "Individual SOURCE_DE_ISSUE-1.",
    }),
    baseAudited({
      AUDIT_VERDICT: "PASS",
      rowId: "gr|cefr-1",
      language: "gr",
      productionFile: "data/gr/a1.js",
      fieldPath: "a1.card.c1.study",
      DE_SOURCE_EVIDENCE: "Duden entry CEFR-PASS-1.",
      TARGET_SOURCE_EVIDENCE: "Greek authority CEFR-PASS-1.",
      CONTEXT_REASONING: "Individual CEFR-PASS-1 alignment.",
      CEFR_APPLICABLE: true,
      CEFR_AUTHORITY: "Council of Europe CEFR",
      CEFR_SOURCE_URL: "https://www.coe.int/en/web/common-european-framework-reference-languages",
      CEFR_LEVEL: "A1",
      CEFR_EVIDENCE: "RLD profile supports vocabulary band for c1.",
    }),
  ];
}

module.exports = {
  syntheticAuditedSet,
  baseAudited,
};
