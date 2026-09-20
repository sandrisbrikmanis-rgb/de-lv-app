#!/usr/bin/env node
"use strict";

const {
  buildAuditDecisionRow,
  auditProposedNewForRow,
  evidenceUrlAcceptable,
  ownerFieldsAreEmpty,
  assertCsNotPassWhenCapitalizationMismatch,
  emptyOwnerFields,
} = require("./lib/g2-a1-production-current/haus-owner-audit-separation");

const deEvidence = {
  deHeadword: "Haus",
  senseNote: "Building/dwelling sense (das Haus)",
  deAuthority: "DWDS",
  deEntryUrl: "https://www.dwds.de/wb/Haus",
};

function assert(name, cond) {
  if (!cond) {
    console.error(JSON.stringify({ pass: false, case: name }, null, 2));
    process.exit(1);
  }
}

function row(lang, overrides) {
  return {
    language: lang,
    appCode: lang,
    productionFile: `data/${lang}/a1.js`,
    cardId: `a1-haus-${lang}-3`,
    cardIndex: 3,
    currentTarget: "X",
    proposedTarget: "y",
    findingType: "CAPITALIZATION_ERROR",
    targetHeadword: "y",
    targetMeaningFragment: "building for people to live in",
    targetEntryUrl: "https://example.org/entry/y",
    sourceAccessStatus: "SOURCE_ENTRY_VALIDATED",
    evidenceSha256: "abc123",
    checkedAt: "2026-01-01T00:00:00.000Z",
    ...overrides,
  };
}

function main() {
  const empty = emptyOwnerFields();
  const auditRow = buildAuditDecisionRow(
    row("en", { currentTarget: "House", proposedTarget: "house", targetHeadword: "house" }),
    deEvidence,
  );
  assert("case1_audit_finding_empty_owner", auditRow.AUDIT_VERDICT === "FINDING" && ownerFieldsAreEmpty(auditRow));

  const badOwner = { ...auditRow, OWNER_STATUS: "LABOT", OWNER_NEW: "house" };
  assert("case2_auto_labot_fail", !ownerFieldsAreEmpty(badOwner));

  const ruOk = auditProposedNewForRow(row("ru", { currentTarget: "Дом", proposedTarget: "дом" }));
  assert("case3_ru_cyrillic_pass", ruOk.ok && ruOk.value === "дом");

  const ruBad = auditProposedNewForRow(row("ru", { proposedTarget: "dom" }));
  assert("case4_ru_dom_fail", !ruBad.ok);

  const csBlockers = [];
  assertCsNotPassWhenCapitalizationMismatch(
    [row("cs", { verdict: "PASS", currentTarget: "Dům", proposedTarget: "dům" })],
    csBlockers,
  );
  assert("case5_cs_pass_cap_fail", csBlockers.length === 1);

  const csOk = buildAuditDecisionRow(
    row("cs", { currentTarget: "Dům", proposedTarget: "dům", targetHeadword: "dům" }),
    deEvidence,
  );
  assert("case6_cs_finding_pass", csOk.AUDIT_FINDING_TYPE === "CAPITALIZATION_ERROR" && csOk.AUDIT_PROPOSED_NEW === "dům");

  const urlBad = evidenceUrlAcceptable("https://orfo.ruslang.ru/search/word", { language: "ru", auditProposedNew: "дом" });
  assert("case7_ru_url_normalized", urlBad.ok && urlBad.url.includes("word="));

  const ell = evidenceUrlAcceptable("https://example.org/…", { language: "en" });
  assert("case8_ellipsis_fail", !ell.ok);

  const yesBad = { ...emptyOwnerFields(), OWNER_EVIDENCE_ACCEPTED: "YES" };
  assert("case9_owner_yes_without_owner", !ownerFieldsAreEmpty(yesBad));

  console.log(JSON.stringify({ pass: true, HAUS_OWNER_AUDIT_SEPARATION_CASES: 9 }, null, 2));
}

main();
