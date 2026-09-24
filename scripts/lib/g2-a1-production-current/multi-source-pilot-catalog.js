#!/usr/bin/env node
"use strict";

const { APP_LANGUAGE_CODES } = require("../official-language-sources-registry");

const GERMAN_PILOT_WORDS = Object.freeze([
  { id: "abholen", lemma: "abholen", partOfSpeech: "verb", article: null },
  { id: "route", lemma: "Route", partOfSpeech: "noun", article: "die" },
  { id: "getriebe", lemma: "Getriebe", partOfSpeech: "noun", article: "das" },
]);

const RESULT_STATUS = Object.freeze({
  DIRECT_TRANSLATION_FOUND: "DIRECT_TRANSLATION_FOUND",
  MULTIPLE_TRANSLATIONS_FOUND: "MULTIPLE_TRANSLATIONS_FOUND",
  SUPPORTING_SOURCE_FOUND: "SUPPORTING_SOURCE_FOUND",
  ENTRY_NOT_FOUND: "ENTRY_NOT_FOUND",
  SOURCE_ACCESS_BLOCKED: "SOURCE_ACCESS_BLOCKED",
  SOURCE_CONFLICT: "SOURCE_CONFLICT",
});

module.exports = {
  GERMAN_PILOT_WORDS,
  TARGET_APP_CODES: APP_LANGUAGE_CODES,
  RESULT_STATUS,
};
