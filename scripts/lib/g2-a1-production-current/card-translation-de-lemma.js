#!/usr/bin/env node
"use strict";

/**
 * Divvalodu meklēšana — primāri kartes lemma; morfoloģiskie hinti tikai papildus.
 */
function dictionarySearchLemma(cardGerman) {
  const lemma = String(cardGerman?.lemma || "").trim();
  const pos = String(cardGerman?.partOfSpeech || "").trim().toLowerCase();
  let morphHint = null;
  if (lemma === "gefüllt" && (pos === "adjective" || pos === "participle")) {
    morphHint = "füllen";
  }
  return {
    searchLemma: lemma,
    displayLemma: lemma,
    strategy: "DIRECT",
    morphHint,
  };
}

/** DWDS/Duden — vispirms kartes lemma, tad morfoloģiskais hints. */
function deAuthorityLookupTerms(cardGerman) {
  const lemma = String(cardGerman?.lemma || "").trim();
  const terms = [lemma];
  const { morphHint } = dictionarySearchLemma(cardGerman);
  if (morphHint && !terms.includes(morphHint)) terms.push(morphHint);
  return terms;
}

module.exports = {
  dictionarySearchLemma,
  deAuthorityLookupTerms,
};
