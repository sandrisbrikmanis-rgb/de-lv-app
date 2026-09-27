#!/usr/bin/env node
"use strict";

const {
  EVIDENCE_TIER,
  assessDefinitionSemanticTranslationEvidence,
  isAutomaticTranslationDictionaryEvidence,
  rescan6InstitutionalCandidatesForLang,
} = require("./lib/g2-a1-production-current/card-translation-evidence-ladder");
const { sourceQualifiesAsBilingualDictionaryEvidence } = require("./lib/g2-a1-production-current/card-translation-forbidden-sources");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");

function main() {
  const blockers = [];

  const etInst = rescan6InstitutionalCandidatesForLang("et");
  if (!etInst.length || etInst[0].platform !== "digar-de-et") {
    blockers.push({ code: "ET_INSTITUTIONAL_FIRST", got: etInst[0]?.platform });
  }

  if (
    !isAutomaticTranslationDictionaryEvidence({
      platform: "glosbe",
      sourceId: "glosbe-de-et",
      pageText: "Automatic translations only",
    })
  ) {
    blockers.push({ code: "AUTO_GLOSBE_SHOULD_REJECT" });
  }

  const glosbeAuto = sourceQualifiesAsBilingualDictionaryEvidence(
    { url: "https://glosbe.com/de/et/foo", platform: "glosbe", type: "COMMUNITY" },
    "Automatic translations for Kleingeld",
  );
  if (glosbeAuto.ok) {
    blockers.push({ code: "GLOSBE_AUTO_SHOULD_NOT_QUALIFY", codeGot: glosbeAuto.code });
  }

  const deAuthority = {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    entryUrl: "https://www.dwds.de/wb/Goldader",
    evidenceFragment:
      "Goldader, die Substantiv (Femininum) · Erzgang, in dem Gold vorkommt · eine ergiebige Goldader",
    entryHeadwordOrRule: "Goldader",
    adapterId: "de-dwds-wb-entry",
    contentSha256: "a".repeat(64),
  };
  const targetAuthority = {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    entryHeadwordOrRule: "kullasoon",
    entryUrl: "https://sonaveeb.ee/search/unif/dlall/dsall/kullasoon/1/eng",
    evidenceFragment: "kullasoon · kuldse maagi paik · etümoloogia: saksa Goldader",
    adapterId: "et-sonaveeb",
    contentSha256: "b".repeat(64),
  };
  const defMatch = assessDefinitionSemanticTranslationEvidence(
    deAuthority,
    targetAuthority,
    { lemma: "Goldader", partOfSpeech: "noun" },
    "kullasoon",
  );
  if (defMatch.tier !== EVIDENCE_TIER.DEFINITION_SEMANTIC_CLEAR) {
    blockers.push({ code: "GOLDADER_DEFINITION_MATCH", tier: defMatch.tier, reason: defMatch.reason });
  }

  const pass = blockers.length === 0;
  console.log(JSON.stringify({ pass, blockers, defMatchSample: defMatch }, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
