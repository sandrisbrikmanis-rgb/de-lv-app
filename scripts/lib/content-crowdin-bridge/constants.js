#!/usr/bin/env node
"use strict";

const { UI_LANGUAGES } = require("../ui-crowdin-bridge");

/** MASTER / binding agreement: full UI locale set (32). */
const CONTENT_LANGUAGES = UI_LANGUAGES;

const CROWDIN_SOURCE_LANG = "lv";

const TARGET_LANGUAGES = CONTENT_LANGUAGES.filter((l) => l !== CROWDIN_SOURCE_LANG);

const G2_LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];

const G2_GLOBALS = {
  a1: "A1_WORDS",
  a2: "A2_WORDS",
  b1: "B1_WORDS",
  b2: "B2_WORDS",
  c1: "C1_WORDS",
  c2: "C2_WORDS",
};

const MASTER_VERSION = "1.12";

/** Paths never exported to Crowdin (DE + structure). */
const READ_ONLY_FIELD_SEGMENTS = new Set([
  "de",
  "de_article",
  "de_plural",
  "level",
  "id",
  "layout",
  "sectionAccents",
  "accents",
  "word",
]);

const CONTENT_JSON_REL = (group, lang) => {
  const safeGroup = String(group).toLowerCase();
  return `crowdin/content/${safeGroup}/${lang}.json`;
};

module.exports = {
  CONTENT_LANGUAGES,
  CROWDIN_SOURCE_LANG,
  TARGET_LANGUAGES,
  G2_LEVELS,
  G2_GLOBALS,
  MASTER_VERSION,
  READ_ONLY_FIELD_SEGMENTS,
  CONTENT_JSON_REL,
};
