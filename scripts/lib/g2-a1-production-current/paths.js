#!/usr/bin/env node
"use strict";

const { dataRel } = require("../content-crowdin-bridge/roundtrip");

function productionA1Rel(lang) {
  return dataRel(lang, "a1.js");
}

function wwwA1Rel(lang) {
  return lang === "lv" ? "www/data/a1.js" : `www/data/${lang}/a1.js`;
}

module.exports = {
  productionA1Rel,
  wwwA1Rel,
};
