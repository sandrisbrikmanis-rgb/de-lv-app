#!/usr/bin/env node
"use strict";

const {
  EVIDENCE_TIER,
  assessDefinitionSemanticTranslationEvidence,
  isAutomaticTranslationDictionaryEvidence,
  rescan6InstitutionalCandidatesForLang,
} = require("./lib/g2-a1-production-current/card-translation-evidence-ladder");
const {
  sourceQualifiesAsBilingualDictionaryEvidence,
  pageTextIsAutomaticTranslationOnly,
  glosbePageHasIdentifiedDictionaryEntry,
} = require("./lib/g2-a1-production-current/card-translation-forbidden-sources");
const { TRANSLATION_AUDIT_VERDICT } = require("./lib/g2-a1-production-current/card-translation-audit-search");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");

function main() {
  const blockers = [];
  const cases = [];

  const etInst = rescan6InstitutionalCandidatesForLang("et");
  if (!etInst.length || etInst[0].platform !== "digar-de-et") {
    blockers.push({ code: "ET_INSTITUTIONAL_FIRST", got: etInst[0]?.platform });
  }

  if (
    !isAutomaticTranslationDictionaryEvidence({
      platform: "glosbe",
      sourceId: "glosbe-de-et",
      pageText: "Automatic translations only for this lemma",
    })
  ) {
    blockers.push({ code: "AUTO_GLOSBE_SHOULD_REJECT" });
  }

  if (!pageTextIsAutomaticTranslationOnly("Translation memory only — no editorial entries")) {
    blockers.push({ code: "TM_ONLY_SHOULD_BE_AUTO" });
  }

  const glosbeAuto = sourceQualifiesAsBilingualDictionaryEvidence(
    { url: "https://glosbe.com/de/et/foo", platform: "glosbe", type: "COMMUNITY" },
    "Automatic translations for Kleingeld\nShow algorithmically generated translations",
    "Kleingeld",
  );
  if (glosbeAuto.ok) {
    blockers.push({ code: "GLOSBE_AUTO_SHOULD_NOT_QUALIFY", got: glosbeAuto.code });
  }

  const glosbePhrase = glosbePageHasIdentifiedDictionaryEntry(
    'Grenzkonflikt\nphrase dictionary\npiirikonflikt noun\nAUTOMATIC TRANSLATIONS\nfoo bar',
    "Grenzkonflikt",
  );
  if (!glosbePhrase) {
    blockers.push({ code: "GLOSBE_PHRASE_DICT_SHOULD_QUALIFY" });
  }

  const deGrenz = {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    entryUrl: "https://www.dwds.de/wb/Grenzkonflikt",
    evidenceFragment:
      "Grenzkonflikt, der Substantiv (Maskulinum) · Konflikt zwischen Staaten oder Gruppen an oder über eine Grenze",
    entryHeadwordOrRule: "Grenzkonflikt",
    adapterId: "de-dwds-wb-entry",
    contentSha256: "c".repeat(64),
  };
  const etGrenz = {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    entryHeadwordOrRule: "piirikonflikt",
    entryUrl: "https://sonaveeb.ee/search/unif/dlall/dsall/piirikonflikt/1/est",
    evidenceFragment:
      "piirikonflikt · riikide või rahvarühmade konflikt piirialal või piiri ümber",
    adapterId: "et-sonaveeb-unif",
    contentSha256: "d".repeat(64),
  };
  const grenzMatch = assessDefinitionSemanticTranslationEvidence(
    deGrenz,
    etGrenz,
    { lemma: "Grenzkonflikt", partOfSpeech: "noun" },
    "piirikonflikt",
    "et",
  );
  cases.push({ id: "grenzkonflikt-et-positive", ...grenzMatch, expectedVerdict: TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED });
  if (grenzMatch.tier !== EVIDENCE_TIER.DEFINITION_SEMANTIC_CLEAR) {
    blockers.push({ code: "GRENZKONFLIKT_DEFINITION_CLEAR", tier: grenzMatch.tier, reason: grenzMatch.reason });
  }

  const dePartial = { ...deGrenz };
  const etPartial = {
    ...etGrenz,
    evidenceFragment: "konflikt · üldine vastuolu bez piirialast konteksti",
    entryHeadwordOrRule: "konflikt",
  };
  const partialMatch = assessDefinitionSemanticTranslationEvidence(
    dePartial,
    etPartial,
    { lemma: "Grenzkonflikt", partOfSpeech: "noun" },
    "konflikt",
    "et",
  );
  cases.push({
    id: "grenzkonflikt-et-partial-negative",
    ...partialMatch,
    expectedVerdict: TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW,
  });
  if (partialMatch.tier !== EVIDENCE_TIER.DEFINITION_SEMANTIC_UNCLEAR) {
    blockers.push({ code: "PARTIAL_SHOULD_BE_UNCLEAR", tier: partialMatch.tier, reason: partialMatch.reason });
  }

  const pass = blockers.length === 0;
  const out = { pass, blockers, cases };
  console.log(JSON.stringify(out, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
