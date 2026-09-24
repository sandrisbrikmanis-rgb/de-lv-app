#!/usr/bin/env node
"use strict";

const {
  TRANSLATION_AUDIT_VERDICT,
  resolveCardTranslationAuditVerdict,
  selectProvenDictionaryCandidate,
} = require("./lib/g2-a1-production-current/card-translation-audit-search");
const {
  executeCardTranslationAuditFieldRecord,
  mapTranslationVerdictToAuditVerdict,
} = require("./lib/g2-a1-production-current/card-translation-audit-executor");
const { buildCardGermanFromFieldRequest } = require("./lib/g2-a1-production-current/card-german-from-field-request");
const { buildTargetedFieldRequest } = require("./lib/g2-a1-production-current/targeted-field-payload");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");

async function main() {
  const blockers = [];

  const mockCandidate = {
    wordLb: "Streck",
    articleId: "STRECK2",
    articleUrl: "https://lod.lu/artikel/STRECK2?lemma=Streck",
    pos: "SUBST",
    deTranslation: "Route, Weg",
  };
  const pick = selectProvenDictionaryCandidate([mockCandidate], "Streck");
  if (pick.status !== "selected" || pick.mismatchCurrent) {
    blockers.push({ code: "PICK_SHOULD_MATCH_CURRENT", pick });
  }
  const pickWrong = selectProvenDictionaryCandidate([mockCandidate], "Munnerëffer Strooss");
  if (!pickWrong.mismatchCurrent || pickWrong.selected?.wordLb !== "Streck") {
    blockers.push({ code: "PICK_SHOULD_MISMATCH_FOR_FINDING", pickWrong });
  }

  const mockDe = {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    entryUrl: "https://www.dwds.de/wb/Route",
    evidenceFragment: "Route, die — Weg, Strecke",
    entryHeadwordOrRule: "Route",
    authorityName: "DWDS",
  };
  const mockTarget = {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    entryHeadwordOrRule: "Streck",
    entryUrl: "https://lod.lu/artikel/STRECK2?lemma=Streck",
    evidenceFragment: "LOD lb/search: Streck (STRECK2)",
    authorityName: "LOD",
  };

  const finding = resolveCardTranslationAuditVerdict({
    cardGerman: { lemma: "Route", partOfSpeech: "noun" },
    deAuthority: mockDe,
    dictionaryCandidates: [mockCandidate],
    rejectedCandidates: [],
    currentTarget: "Munnerëffer Strooss",
    targetAuthorityForProven: mockTarget,
  });
  if (finding.verdict !== TRANSLATION_AUDIT_VERDICT.FINDING) {
    blockers.push({ code: "ROUTE_WRONG_CURRENT_SHOULD_FINDING", verdict: finding.verdict });
  }
  if (mapTranslationVerdictToAuditVerdict(finding.verdict) !== "FINDING") {
    blockers.push({ code: "MAP_FINDING" });
  }

  const validated = resolveCardTranslationAuditVerdict({
    cardGerman: { lemma: "Route", partOfSpeech: "noun" },
    deAuthority: mockDe,
    dictionaryCandidates: [mockCandidate],
    rejectedCandidates: [],
    currentTarget: "Streck",
    targetAuthorityForProven: mockTarget,
  });
  if (validated.verdict !== TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED) {
    blockers.push({ code: "ROUTE_STRECK_VALIDATED", verdict: validated.verdict });
  }

  const fieldRequest = buildTargetedFieldRequest({
    language: "lb",
    productionFile: "data/lb/a1.json",
    cardId: "Haus",
    fieldPath: "lv",
    currentValue: "Haus",
    identityKey: "lb|lv|Haus",
    auditSource: "production-current",
    datasetProductionSha: "test",
    auditBaselineSha: "test",
  });
  fieldRequest.cardContext = { de: "Haus", targetHeadword: "Haus", objectIndex: 3 };
  const cardGerman = buildCardGermanFromFieldRequest(fieldRequest);
  const record = await executeCardTranslationAuditFieldRecord(fieldRequest);
  if (record.AUDIT_VERDICT !== "PASS" && record.translationAuditVerdict !== TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED) {
    blockers.push({
      code: "LB_HAUS_LIVE_EXECUTOR",
      auditVerdict: record.AUDIT_VERDICT,
      translationVerdict: record.translationAuditVerdict,
    });
  }
  if (cardGerman.germanMeaning) {
    blockers.push({ code: "MUST_NOT_INVENT_GERMAN_MEANING" });
  }

  const pass = blockers.length === 0;
  console.log(JSON.stringify({ pass, blockers, hausAuditVerdict: record.AUDIT_VERDICT }, null, 2));
  process.exit(pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
