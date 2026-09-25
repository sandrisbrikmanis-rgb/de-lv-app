#!/usr/bin/env node
"use strict";

const {
  TRANSLATION_AUDIT_VERDICT,
  resolveCardTranslationAuditVerdict,
} = require("./lib/g2-a1-production-current/card-translation-audit-search");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");

function deAuth(lemma) {
  return {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    entryUrl: `https://www.dwds.de/wb/${lemma}`,
    evidenceFragment: `${lemma}, das; Gebäude zum Wohnen; substantivisches Substantiv mit ausreichend langem Belegtext`,
    adapterId: "de-dwds",
    entryHeadwordOrRule: lemma,
    contentSha256: "a".repeat(64),
  };
}

function main() {
  const blockers = [];
  const cardGerman = { lemma: "Haus", partOfSpeech: "noun" };
  const candidates = [
    { targetLemma: "maja", wordLb: "maja", deTranslation: "Haus", pos: "SUBST" },
    { targetLemma: "nams", wordLb: "nams", deTranslation: "Haus", pos: "SUBST" },
  ];
  const r = resolveCardTranslationAuditVerdict({
    cardGerman,
    deAuthority: deAuth("Haus"),
    dictionaryCandidates: candidates,
    rejectedCandidates: [],
    currentTarget: "maja",
    appLang: "lv",
    targetAuthorityForProven: {
      outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
      entryUrl: "https://example.com/maja",
      entryHeadwordOrRule: "maja",
      evidenceFragment:
        "maja — dzīvojamā ēka, ēka dzīvošanai; mājas, mājoklis; pietiekami garš oficiāls fragments",
      adapterId: "lv-letonika-entry",
      contentSha256: "b".repeat(64),
    },
  });
  if (r.verdict !== TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED) {
    blockers.push({ code: "EXPECTED_TV", got: r.verdict, blockers: r.blockers });
  }

  const pass = blockers.length === 0;
  console.log(JSON.stringify({ pass, blockers, verdict: r.verdict }, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
