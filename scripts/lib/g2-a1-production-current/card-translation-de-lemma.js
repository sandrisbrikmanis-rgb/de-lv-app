#!/usr/bin/env node
"use strict";

/**
 * DE vārdnīcas meklēšanai — participle/adjective no infinitīva (gefüllt ← füllen).
 */
function dictionarySearchLemma(cardGerman) {
  const lemma = String(cardGerman?.lemma || "").trim();
  const pos = String(cardGerman?.partOfSpeech || "").trim().toLowerCase();
  if (lemma === "gefüllt" && (pos === "adjective" || pos === "participle")) {
    return {
      searchLemma: "füllen",
      displayLemma: lemma,
      strategy: "PARTICIPLE_VIA_INFINITIVE_FUELLEN",
    };
  }
  return { searchLemma: lemma, displayLemma: lemma, strategy: "DIRECT" };
}

/** DWDS/Duden lookup secība — vispirms kartes lemma, tad atvasinātais. */
function deAuthorityLookupTerms(cardGerman) {
  const lemma = String(cardGerman?.lemma || "").trim();
  const terms = [lemma];
  const { searchLemma, strategy } = dictionarySearchLemma(cardGerman);
  if (strategy !== "DIRECT" && searchLemma && !terms.includes(searchLemma)) {
    terms.push(searchLemma);
  }
  return terms;
}

module.exports = {
  dictionarySearchLemma,
  deAuthorityLookupTerms,
};
