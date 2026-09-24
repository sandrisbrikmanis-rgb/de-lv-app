#!/usr/bin/env node
"use strict";

const { stripTrackingParams } = require("../master-language-authority-sources-33");
const { loadManifest, loadOverrides, manifestToCandidate, overrideToCandidate } = require("./german-target-dictionary-search-catalog");

/** MASTER §3 search priority tiers (LEO/bab.la/Wiktionary where HTTP allows). */
const TIER = Object.freeze({
  DICT_CC: 1,
  PONS: 2,
  LANGENSCHEIDT: 3,
  LEO: 4,
  BABL_LA: 5,
  GLOSBE: 6,
  NATIONAL: 7,
  MASTER_OTHER: 8,
  SUBSCRIPTION_REF: 9,
});

const PONS_SLUG = Object.freeze({
  en: "english",
  sv: "swedish",
  is: "icelandic",
  ru: "russian",
  ro: "romanian",
  fr: "french",
  it: "italian",
  nl: "dutch",
  es: "spanish",
  pt: "portuguese",
  fi: "finnish",
  hu: "hungarian",
  nb: "norwegian",
  bg: "bulgarian",
  hr: "croatian",
  cs: "czech",
  da: "danish",
  tr: "turkish",
  pl: "polish",
  sr: "serbian",
  gr: "greek",
  sl: "slovenian",
});

const LANGENSCHEIDT_SLUG = Object.freeze({
  en: "english",
  sv: "swedish",
  is: "icelandic",
  ru: "russian",
  ro: "romanian",
  fr: "french",
  sk: "slovak",
  it: "italian",
  nl: "dutch",
  uk: "ukrainian",
  es: "spanish",
  pt: "portuguese",
  fi: "finnish",
  hu: "hungarian",
  nb: "norwegian",
  bg: "bulgarian",
  hr: "croatian",
  cs: "czech",
  da: "danish",
  tr: "turkish",
  pl: "polish",
  sr: "serbian",
  sq: "albanian",
  gr: "greek",
  bs: "bosnian",
  lt: "lithuanian",
  lv: "latvian",
  et: "estonian",
  sl: "slovenian",
  mk: "macedonian",
  nn: "norwegian",
  lb: "luxembourgish",
});

const BABL_LA_SLUG = Object.freeze({
  en: "englisch",
  fr: "franzoesisch",
  es: "spanisch",
  it: "italienisch",
  nl: "niederlaendisch",
  pl: "polnisch",
  pt: "portugiesisch",
  ru: "russisch",
  cs: "tschechisch",
  da: "daenisch",
  sv: "schwedisch",
  nb: "norwegisch",
  fi: "finnisch",
  hu: "ungarisch",
  tr: "tuerkisch",
  ro: "rumaenisch",
  bg: "bulgarisch",
  hr: "kroatisch",
  sk: "slowakisch",
  uk: "ukrainisch",
  el: "griechisch",
  lt: "litauisch",
  lv: "lettisch",
  et: "estnisch",
  sl: "slowenisch",
  sq: "albanisch",
  sr: "serbisch",
  bs: "bosnisch",
});

function glosbeCode(appCode, standardCode) {
  return appCode === "gr" ? "el" : standardCode;
}

function makeCandidate(base) {
  return {
    subscriptionReferenceOnly: false,
    fromMasterManifest: false,
    entryCount: null,
    entryCountStatus: "ENTRY_COUNT_NOT_PUBLICLY_CONFIRMED",
    access: "PUBLIC_BROWSER_SESSION",
    searchMode: null,
    ...base,
    url: stripTrackingParams(base.url),
  };
}

function dedupeByUrl(list) {
  const seen = new Set();
  const out = [];
  for (const c of list) {
    const key = c.url;
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(c);
  }
  return out;
}

/** Internet-priority candidate list (not limited to current MASTER primary). */
function orderedAlternativeCandidatesForLanguage(appCode, manifest, overrides) {
  const spec = manifest.sources.find((s) => s.appCode === appCode);
  if (!spec) throw new Error(`MANIFEST_MISSING_${appCode}`);
  const standardCode = spec.standardCode;
  const ov = overrides.languages?.[appCode] || {};
  const pair = `de→${standardCode}`;
  const list = [];

  if (appCode === "et") {
    /* Keelevara is subscription-only; public Glosbe + optional manifest note only. */
  } else if (spec.type === "COMMUNITY_BILINGUAL_DICT_CC") {
    list.push({ ...manifestToCandidate(spec), tier: TIER.DICT_CC, platform: "dict.cc" });
  } else if (appCode !== "lt" || spec.url.includes("zodynai")) {
    list.push({ ...manifestToCandidate(spec), tier: TIER.MASTER_OTHER, platform: "master_manifest" });
  }

  const ponsSlug = PONS_SLUG[appCode];
  if (ponsSlug) {
    list.push(
      makeCandidate({
        id: `pons-${appCode}`,
        appCode,
        standardCode,
        tier: TIER.PONS,
        platform: "pons",
        name: `PONS German–${standardCode.toUpperCase()} Dictionary`,
        publisher: "PONS (Klett Group)",
        url: `https://en.pons.com/translate/german-${ponsSlug}/`,
        languagePair: pair,
        type: "PROFESSIONAL_BILINGUAL_COMMERCIAL",
      }),
    );
  }

  const lsSlug = LANGENSCHEIDT_SLUG[appCode];
  if (lsSlug) {
    list.push(
      makeCandidate({
        id: `langenscheidt-${appCode}`,
        appCode,
        standardCode,
        tier: TIER.LANGENSCHEIDT,
        platform: "langenscheidt",
        name: `Langenscheidt German–${standardCode.toUpperCase()}`,
        publisher: "Langenscheidt",
        url: `https://en.langenscheidt.com/german-${lsSlug}/`,
        languagePair: pair,
        type: "PROFESSIONAL_BILINGUAL_COMMERCIAL",
      }),
    );
  }

  if (appCode === "en") {
    list.push(
      makeCandidate({
        id: "leo-de-en",
        appCode,
        standardCode,
        tier: TIER.LEO,
        platform: "leo",
        name: "LEO German–English",
        publisher: "LEO GmbH",
        url: "https://dict.leo.org/german-english/",
        languagePair: pair,
        type: "PROFESSIONAL_BILINGUAL_COMMERCIAL",
      }),
    );
  }

  const babSlug = BABL_LA_SLUG[standardCode] || BABL_LA_SLUG[appCode];
  if (babSlug) {
    list.push(
      makeCandidate({
        id: `babla-${appCode}`,
        appCode,
        standardCode,
        tier: TIER.BABL_LA,
        platform: "bab.la",
        name: `bab.la German–${standardCode.toUpperCase()}`,
        publisher: "bab.la (Reverso)",
        url: `https://de.bab.la/woerterbuch/deutsch-${babSlug}/`,
        languagePair: pair,
        type: "PROFESSIONAL_BILINGUAL_COMMERCIAL",
      }),
    );
  }

  list.push(
    makeCandidate({
      id: `glosbe-${appCode}`,
      appCode,
      standardCode,
      tier: TIER.GLOSBE,
      platform: "glosbe",
      name: `Glosbe German–${standardCode.toUpperCase()} (dictionary)`,
      publisher: "Glosbe (community lexicon)",
      url: `https://glosbe.com/de/${glosbeCode(appCode, standardCode)}`,
      languagePair: pair,
      type: "COMMUNITY_BILINGUAL_GLOSBE",
    }),
  );

  if (appCode === "lv") {
    list.push(
      makeCandidate({
        id: "letonika-lv",
        appCode,
        standardCode,
        tier: TIER.NATIONAL,
        platform: "letonika",
        name: "Letonika German–Latvian dictionary",
        publisher: "Latvijas Universitāte / Letonika",
        url: "https://www.letonika.lv/dictionary/",
        languagePair: pair,
        type: "INSTITUTIONAL_BILINGUAL_LEXICON",
        entryCount: 100000,
        entryCountStatus: "PUBLICLY_CONFIRMED_PUBLISHER_MINIMUM",
      }),
    );
  }

  if (appCode === "lt") {
    list.push(
      makeCandidate({
        id: "vokieciu-lietuviu",
        appCode,
        standardCode,
        tier: TIER.NATIONAL,
        platform: "vokieciu-lietuviu",
        name: "Vokiečių–lietuvių žodynas (vokieciu-lietuviu.com)",
        publisher: "LED / vokieciu-lietuviu.com",
        url: "http://www.vokieciu-lietuviu.com/",
        languagePair: pair,
        type: "COMMUNITY_BILINGUAL_LEXICON",
        entryCount: 16000,
        entryCountStatus: "PUBLICLY_CONFIRMED_PUBLISHER_ESTIMATE",
      }),
    );
  }

  if (appCode === "lb") {
    const lod = makeCandidate({
      id: "lod-lb",
      appCode,
      standardCode,
      tier: TIER.NATIONAL,
      platform: "lod",
      name: "Lëtzebuerger Online Dictionnaire (LOD)",
      publisher: "Zenter fir d'Lëtzebuerger Sprooch",
      url: "https://lod.lu/",
      languagePair: "de↔lb",
      type: "OFFICIAL_BILINGUAL_LEXICON",
      entryCount: 32000,
      entryCountStatus: "PUBLICLY_CONFIRMED_PUBLISHER_HEADWORD_COUNT",
      searchMode: "LOD_DE_REVERSE_API",
    });
    list.push(lod);
  }

  if (appCode === "et" && ov.subscriptionOnly) {
    list.push({
      ...overrideToCandidate(ov.subscriptionOnly, appCode, standardCode),
      tier: TIER.SUBSCRIPTION_REF,
      platform: "keelevara",
      subscriptionReferenceOnly: true,
      access: "SUBSCRIPTION_REQUIRED",
    });
  }

  if (ov.fallbackCandidate && appCode !== "lt" && appCode !== "lb") {
    list.push({
      ...overrideToCandidate(ov.fallbackCandidate, appCode, standardCode),
      tier: TIER.NATIONAL,
      platform: "override_fallback",
    });
  }

  return dedupeByUrl(list);
}

module.exports = {
  TIER,
  orderedAlternativeCandidatesForLanguage,
  PONS_SLUG,
  LANGENSCHEIDT_SLUG,
};
