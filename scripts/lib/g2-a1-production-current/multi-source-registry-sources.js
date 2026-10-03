#!/usr/bin/env node
"use strict";

const { stripTrackingParams } = require("../master-language-authority-sources-33");

function dedupeSources(list) {
  const seen = new Set();
  const out = [];
  for (const s of list) {
    const key = stripTrackingParams(s.url);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push({ ...s, url: key });
  }
  return out;
}

/** MASTER-ordered source tiers for multi-source translation pilot. */
function orderedMasterSources(row) {
  const sources = [];

  if (row.GERMAN_TARGET_DICTIONARY_URL) {
    sources.push({
      tier: 1,
      sourceType: "GERMAN_TARGET_BILINGUAL_PRIMARY",
      sourceName: row.GERMAN_TARGET_DICTIONARY_NAME,
      url: row.GERMAN_TARGET_DICTIONARY_URL,
      bilingual: true,
    });
  }

  for (const b of row.GERMAN_TARGET_BILINGUAL_SOURCES || []) {
    const u = b.sourceUrl;
    if (!u || u === row.GERMAN_TARGET_DICTIONARY_URL) continue;
    sources.push({
      tier: 2,
      sourceType: "GERMAN_TARGET_BILINGUAL_OTHER",
      sourceName: b.sourceName,
      url: u,
      bilingual: true,
      sourceClass: b.sourceClass,
    });
  }

  for (const u of row.PRIMARY_DICTIONARY_URLS || []) {
    sources.push({
      tier: 3,
      sourceType: "PRIMARY_DICTIONARY",
      sourceName: row.PRIMARY_DICTIONARY_AUTHORITY || "PRIMARY",
      url: u,
      bilingual: false,
    });
  }

  for (const u of row.ADDITIONAL_DICTIONARY_URLS || []) {
    sources.push({
      tier: 4,
      sourceType: "ADDITIONAL_DICTIONARY",
      sourceName: row.ADDITIONAL_DICTIONARY_AUTHORITY || "ADDITIONAL_DICTIONARY",
      url: u,
      bilingual: false,
    });
  }

  for (const u of row.ADDITIONAL_AUTHORITY_URLS || []) {
    sources.push({
      tier: 5,
      sourceType: "ADDITIONAL_AUTHORITY",
      sourceName: row.ADDITIONAL_AUTHORITY || "ADDITIONAL_AUTHORITY",
      url: u,
      bilingual: false,
    });
  }

  for (const u of row.LANGUAGE_NORM_URLS || []) {
    sources.push({
      tier: 6,
      sourceType: "LANGUAGE_NORM",
      sourceName: row.LANGUAGE_NORM_AUTHORITY || "LANGUAGE_NORM",
      url: u,
      bilingual: false,
    });
  }

  for (const u of row.LANGUAGE_LEARNING_CEFR_URLS || []) {
    sources.push({
      tier: 7,
      sourceType: "LANGUAGE_LEARNING_CEFR",
      sourceName: row.LANGUAGE_LEARNING_CEFR_AUTHORITY || "CEFR",
      url: u,
      bilingual: false,
    });
  }

  return dedupeSources(sources);
}

module.exports = { orderedMasterSources, dedupeSources };
