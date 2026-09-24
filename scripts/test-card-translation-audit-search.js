#!/usr/bin/env node
"use strict";

const {
  TRANSLATION_AUDIT_VERDICT,
  resolveCardTranslationAuditVerdict,
} = require("./lib/g2-a1-production-current/card-translation-audit-search");
const { collectLodDeReverseAuditPayload, runLodLbCardTranslationAudit } = require("./lib/g2-a1-production-current/lod-card-translation-audit");
const { fetchLodDeSearchJson } = require("./lib/g2-a1-production-current/lod-de-reverse-api");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");

async function main() {
  const blockers = [];

  const routePayload = await fetchLodDeSearchJson("Route");
  const routeAudit = collectLodDeReverseAuditPayload(routePayload.payload, "Route");
  if (routeAudit.rejected.some((r) => /Munner/i.test(r.wordLb || ""))) {
    /* expected */
  } else {
    blockers.push({ code: "ROUTE_SHOULD_REJECT_MUNNEREFFER" });
  }
  if (routeAudit.eligible.some((c) => c.wordLb === "Munnerëffer Strooss")) {
    blockers.push({ code: "ROUTE_MUNNEREFFER_IN_ELIGIBLE" });
  }
  if (!routeAudit.eligible.some((c) => c.wordLb === "Streck")) {
    blockers.push({ code: "ROUTE_STRECK_MISSING" });
  }

  const mockDe = {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    entryUrl: "https://www.dwds.de/wb/Route",
    evidenceFragment: "Route, die — Weg, Strecke",
    entryHeadwordOrRule: "Route",
  };
  const mockTarget = {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    entryHeadwordOrRule: "Streck",
    entryUrl: "https://lod.lu/artikel/STRECK2?lemma=Streck",
  };
  const routeResolved = resolveCardTranslationAuditVerdict({
    cardGerman: { lemma: "Route", partOfSpeech: "noun", germanMeaning: "Route, die Weg Strecke" },
    deAuthority: mockDe,
    dictionaryCandidates: routeAudit.eligible.filter((c) => c.wordLb === "Streck"),
    rejectedCandidates: routeAudit.rejected,
    targetAuthority: mockTarget,
    expectedTargetLemma: "Streck",
  });
  if (routeResolved.verdict !== TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED) {
    blockers.push({ code: "ROUTE_MOCK_NOT_VALIDATED", verdict: routeResolved.verdict });
  }

  const abholenPayload = await fetchLodDeSearchJson("abholen");
  const abAll = collectLodDeReverseAuditPayload(abholenPayload.payload, "abholen");
  if (abAll.eligible.length < 2) {
    blockers.push({ code: "ABHOLEN_EXPECT_MULTIPLE_RAW_ELIGIBLE", count: abAll.eligible.length });
  }
  const abAmbiguous = resolveCardTranslationAuditVerdict({
    cardGerman: { lemma: "abholen", partOfSpeech: "verb" },
    deAuthority: mockDe,
    dictionaryCandidates: abAll.eligible,
    rejectedCandidates: abAll.rejected,
    targetAuthority: mockTarget,
    expectedTargetLemma: "ofhuelen",
  });
  if (abAmbiguous.verdict !== TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW) {
    blockers.push({ code: "ABHOLEN_SHOULD_BE_AMBIGUOUS_WITHOUT_NARROW", verdict: abAmbiguous.verdict });
  }

  const pass = blockers.length === 0;
  console.log(JSON.stringify({ pass, blockers }, null, 2));
  process.exit(pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
