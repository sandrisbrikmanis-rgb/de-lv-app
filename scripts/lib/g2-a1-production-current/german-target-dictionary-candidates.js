#!/usr/bin/env node
"use strict";

/** 14 German→TARGET bilingual dictionary candidates (OWNER-gated MASTER additions). */
const GERMAN_TARGET_DICTIONARY_LANGUAGES = Object.freeze([
  "bg",
  "bs",
  "fr",
  "hu",
  "is",
  "it",
  "lb",
  "lt",
  "nl",
  "pl",
  "pt",
  "ro",
  "sv",
  "uk",
]);

const HAUS_TARGET_LEMMA = Object.freeze({
  bg: "къща",
  bs: "kuća",
  fr: "maison",
  hu: "ház",
  is: "hús",
  it: "casa",
  lb: "Haus",
  lt: "namas",
  nl: "huis",
  pl: "dom",
  pt: "casa",
  ro: "casă",
  sv: "hus",
  uk: "дім",
});

const SOURCE_CLASS = Object.freeze({
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
});

/** Static candidate definitions before live validation. */
const CANDIDATES = Object.freeze({
  bg: {
    primary: {
      sourceId: "pons-de-bg",
      sourceName: "PONS German–Bulgarian Dictionary",
      baseUrl: "https://en.pons.com/translate/german-bulgarian/",
      entryUrlTemplate: (deLemma) =>
        `https://en.pons.com/translate/german-bulgarian/${encodeURIComponent(deLemma)}`,
      publisher: "PONS (Klett Group)",
      sourceClass: SOURCE_CLASS.B,
      languagePair: "de→bg",
      probeType: "pons",
      editorialProvenance: "professionally_edited_commercial",
    },
  },
  bs: {
    primary: {
      sourceId: "dictcc-de-bs",
      sourceName: "dict.cc German–Bosnian",
      baseUrl: "https://debs.dict.cc/",
      entryUrlTemplate: (deLemma) => `https://debs.dict.cc/?s=${encodeURIComponent(deLemma)}`,
      publisher: "dict.cc (community-maintained)",
      sourceClass: SOURCE_CLASS.E,
      languagePair: "de→bs",
      probeType: "dictcc",
      editorialProvenance: "community_contributed",
    },
    orthography: {
      sourceId: "pravopis-ba",
      sourceName: "Pravopis bosanskoga jezika (Halilović)",
      baseUrl: "https://www.pravopis.ba/",
      entryUrlTemplate: () => "https://www.pravopis.ba/",
      publisher: "Senahid Halilović / pravopis.ba",
      sourceClass: SOURCE_CLASS.D,
      languagePair: "bs monolingual orthography",
      probeType: "orthography_only",
      editorialProvenance: "professional_institutional_reference",
    },
  },
  fr: {
    primary: {
      sourceId: "pons-de-fr",
      sourceName: "PONS German–French Dictionary",
      baseUrl: "https://en.pons.com/translate/german-french/",
      entryUrlTemplate: (deLemma) =>
        `https://en.pons.com/translate/german-french/${encodeURIComponent(deLemma)}`,
      publisher: "PONS (Klett Group)",
      sourceClass: SOURCE_CLASS.B,
      languagePair: "de→fr",
      probeType: "pons",
      editorialProvenance: "professionally_edited_commercial",
    },
  },
  hu: {
    primary: {
      sourceId: "pons-de-hu",
      sourceName: "PONS German–Hungarian Dictionary",
      baseUrl: "https://en.pons.com/translate/german-hungarian/",
      entryUrlTemplate: (deLemma) =>
        `https://en.pons.com/translate/german-hungarian/${encodeURIComponent(deLemma)}`,
      publisher: "PONS (Klett Group)",
      sourceClass: SOURCE_CLASS.B,
      languagePair: "de→hu",
      probeType: "pons",
      editorialProvenance: "professionally_edited_commercial",
    },
  },
  is: {
    primary: {
      sourceId: "dictcc-de-is",
      sourceName: "dict.cc German–Icelandic",
      baseUrl: "https://deis.dict.cc/",
      entryUrlTemplate: (deLemma) => `https://deis.dict.cc/?s=${encodeURIComponent(deLemma)}`,
      publisher: "dict.cc (community-maintained)",
      sourceClass: SOURCE_CLASS.E,
      languagePair: "de→is",
      probeType: "dictcc",
      editorialProvenance: "community_contributed",
    },
    supplemental: {
      sourceId: "malid-is",
      sourceName: "Íslensk nútímamál (málfræði) — malid.is",
      baseUrl: "https://malid.is/",
      entryUrlTemplate: (lemma) => `https://malid.is/leit?q=${encodeURIComponent(lemma)}`,
      publisher: "Árnastofnun / Icelandic language resources",
      sourceClass: SOURCE_CLASS.A,
      languagePair: "is monolingual",
      probeType: "monolingual_target",
      editorialProvenance: "government_language_institute",
    },
  },
  it: {
    primary: {
      sourceId: "pons-de-it",
      sourceName: "PONS German–Italian Dictionary",
      baseUrl: "https://en.pons.com/translate/german-italian/",
      entryUrlTemplate: (deLemma) =>
        `https://en.pons.com/translate/german-italian/${encodeURIComponent(deLemma)}`,
      publisher: "PONS (Klett Group)",
      sourceClass: SOURCE_CLASS.B,
      languagePair: "de→it",
      probeType: "pons",
      editorialProvenance: "professionally_edited_commercial",
    },
  },
  lb: {
    primary: {
      sourceId: "lod-lu",
      sourceName: "Lëtzebuerger Online Dictionnaire (LOD)",
      baseUrl: "https://lod.lu/",
      entryUrlTemplate: (deLemma) => `https://lod.lu/`,
      publisher: "Zenter fir d'Lëtzebuerger Sprooch (ZLS)",
      sourceClass: SOURCE_CLASS.A,
      languagePair: "de↔lb (Luxembourg institutional)",
      probeType: "lod",
      editorialProvenance: "official_language_institute",
    },
  },
  lt: {
    primary: {
      sourceId: "pons-de-lt",
      sourceName: "PONS German–Lithuanian Dictionary",
      baseUrl: "https://en.pons.com/translate/german-lithuanian/",
      entryUrlTemplate: (deLemma) =>
        `https://en.pons.com/translate/german-lithuanian/${encodeURIComponent(deLemma)}`,
      publisher: "PONS (Klett Group)",
      sourceClass: SOURCE_CLASS.B,
      languagePair: "de→lt",
      probeType: "pons",
      editorialProvenance: "professionally_edited_commercial",
    },
  },
  nl: {
    primary: {
      sourceId: "pons-de-nl",
      sourceName: "PONS German–Dutch Dictionary",
      baseUrl: "https://en.pons.com/translate/german-dutch/",
      entryUrlTemplate: (deLemma) =>
        `https://en.pons.com/translate/german-dutch/${encodeURIComponent(deLemma)}`,
      publisher: "PONS (Klett Group)",
      sourceClass: SOURCE_CLASS.B,
      languagePair: "de→nl",
      probeType: "pons",
      editorialProvenance: "professionally_edited_commercial",
    },
  },
  pl: {
    primary: {
      sourceId: "pons-de-pl",
      sourceName: "PONS German–Polish Dictionary",
      baseUrl: "https://en.pons.com/translate/german-polish/",
      entryUrlTemplate: (deLemma) =>
        `https://en.pons.com/translate/german-polish/${encodeURIComponent(deLemma)}`,
      publisher: "PONS (Klett Group)",
      sourceClass: SOURCE_CLASS.B,
      languagePair: "de→pl",
      probeType: "pons",
      editorialProvenance: "professionally_edited_commercial",
    },
  },
  pt: {
    primary: {
      sourceId: "pons-de-pt",
      sourceName: "PONS German–Portuguese Dictionary",
      baseUrl: "https://en.pons.com/translate/german-portuguese/",
      entryUrlTemplate: (deLemma) =>
        `https://en.pons.com/translate/german-portuguese/${encodeURIComponent(deLemma)}`,
      publisher: "PONS (Klett Group)",
      sourceClass: SOURCE_CLASS.B,
      languagePair: "de→pt",
      probeType: "pons",
      editorialProvenance: "professionally_edited_commercial",
    },
  },
  ro: {
    primary: {
      sourceId: "pons-de-ro",
      sourceName: "PONS German–Romanian Dictionary",
      baseUrl: "https://en.pons.com/translate/german-romanian/",
      entryUrlTemplate: (deLemma) =>
        `https://en.pons.com/translate/german-romanian/${encodeURIComponent(deLemma)}`,
      publisher: "PONS (Klett Group)",
      sourceClass: SOURCE_CLASS.B,
      languagePair: "de→ro",
      probeType: "pons",
      editorialProvenance: "professionally_edited_commercial",
    },
  },
  sv: {
    primary: {
      sourceId: "pons-de-sv",
      sourceName: "PONS German–Swedish Dictionary",
      baseUrl: "https://en.pons.com/translate/german-swedish/",
      entryUrlTemplate: (deLemma) =>
        `https://en.pons.com/translate/german-swedish/${encodeURIComponent(deLemma)}`,
      publisher: "PONS (Klett Group)",
      sourceClass: SOURCE_CLASS.B,
      languagePair: "de→sv",
      probeType: "pons",
      editorialProvenance: "professionally_edited_commercial",
    },
  },
  uk: {
    primary: {
      sourceId: "pons-de-uk",
      sourceName: "PONS German–Ukrainian Dictionary",
      baseUrl: "https://en.pons.com/translate/german-ukrainian/",
      entryUrlTemplate: (deLemma) =>
        `https://en.pons.com/translate/german-ukrainian/${encodeURIComponent(deLemma)}`,
      publisher: "PONS (Klett Group)",
      sourceClass: SOURCE_CLASS.B,
      languagePair: "de→uk",
      probeType: "pons",
      editorialProvenance: "professionally_edited_commercial",
    },
  },
});

module.exports = {
  GERMAN_TARGET_DICTIONARY_LANGUAGES,
  HAUS_TARGET_LEMMA,
  SOURCE_CLASS,
  CANDIDATES,
};
