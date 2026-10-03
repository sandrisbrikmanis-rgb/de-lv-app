#!/usr/bin/env node
"use strict";

const { TRANSLATION_AUDIT_VERDICT } = require("./lib/g2-a1-production-current/card-translation-audit-search");
const { assessPositiveRegressionVerdict } = require("./lib/g2-a1-production-current/card-translation-audit-flow");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");

function deAuth() {
  return {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    entryUrl: "https://www.dwds.de/wb/Haus",
    evidenceFragment: "Haus, das",
    adapterId: "de-dwds",
    entryHeadwordOrRule: "Haus",
  };
}

function main() {
  const blockers = [];
  const cardGerman = { lemma: "Haus", partOfSpeech: "noun" };

  const tonv = assessPositiveRegressionVerdict(
    { verdict: TRANSLATION_AUDIT_VERDICT.TARGET_OFFICIAL_NOT_VALIDATED, deAuthority: deAuth(), dictionaryCandidates: [{}] },
    cardGerman,
  );
  if (tonv.pass) blockers.push({ code: "TONV_MUST_NOT_PASS" });

  const noElig = assessPositiveRegressionVerdict(
    {
      verdict: TRANSLATION_AUDIT_VERDICT.NO_ELIGIBLE_DICTIONARY_CANDIDATE,
      deAuthority: deAuth(),
      bilingualMeta: { resultUrl: "https://example.com" },
    },
    cardGerman,
  );
  if (noElig.pass) blockers.push({ code: "NO_ELIGIBLE_MUST_NOT_PASS" });

  const nsr = assessPositiveRegressionVerdict(
    { verdict: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW, deAuthority: deAuth(), blockers: [{ code: "MULTIPLE_DICTIONARY_CANDIDATES" }] },
    cardGerman,
  );
  if (nsr.pass) blockers.push({ code: "NSR_MUST_NOT_PASS_READINESS", detail: nsr });

  const pass = blockers.length === 0;
  console.log(JSON.stringify({ pass, blockers }, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
