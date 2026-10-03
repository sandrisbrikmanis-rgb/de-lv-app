#!/usr/bin/env node
"use strict";

const { APP_LANGUAGE_CODES } = require("../official-language-sources-registry");

/** User task: Reute (not Route). */
const GERMAN_PILOT_WORDS = Object.freeze([
  {
    id: "ablehnen",
    lemma: "ablehnen",
    partOfSpeech: "verb",
    article: null,
    exactSpelling: true,
  },
  {
    id: "getreide",
    lemma: "Getreide",
    partOfSpeech: "noun",
    article: "das",
    exactSpelling: true,
  },
  {
    id: "reute",
    lemma: "Reute",
    partOfSpeech: "noun",
    article: "die",
    exactSpelling: true,
    forbidAutocorrectTo: ["Leute", "Reue", "Rute", "Route"],
  },
]);

const RESULT_STATUS = Object.freeze({
  TRANSLATION_FOUND: "TRANSLATION_FOUND",
  MULTIPLE_TRANSLATIONS_FOUND: "MULTIPLE_TRANSLATIONS_FOUND",
  ENTRY_NOT_FOUND: "ENTRY_NOT_FOUND",
  SOURCE_ACCESS_BLOCKED: "SOURCE_ACCESS_BLOCKED",
  SOURCE_DE_ISSUE: "SOURCE_DE_ISSUE",
});

module.exports = {
  GERMAN_PILOT_WORDS,
  TARGET_APP_CODES: APP_LANGUAGE_CODES,
  RESULT_STATUS,
};
