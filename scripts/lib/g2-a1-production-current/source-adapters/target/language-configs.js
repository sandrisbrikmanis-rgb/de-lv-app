#!/usr/bin/env node
"use strict";

const { ADAPTER_TYPES } = require("../adapter-types");
const { SOURCE_ACCESS_OUTCOME } = require("../../official-source-access-constants");
const {
  parseOxfordLearners,
  parsePriruckaUjc,
  parseJulsSkPortal,
  parseOrfoRuslang,
  parseFranSi,
  parseGreekTriantafyllides,
  parseRaeDle,
  parseTezaursLv,
  parseTitleHeadword,
} = require("../parsers/shared-parsers");
const { createConfigAdapter } = require("../create-config-adapter");
const { createBrowserAdapter } = require("../browser/create-browser-adapter");

function browserLang(appLang, standardCode, adapterId, browserFlowId, primaryDomain, positive, negative) {
  return {
    appLang,
    standardCode,
    adapterId,
    adapterVersion: "2.0.0",
    adapterType: ADAPTER_TYPES.PUBLIC_BROWSER_SESSION,
    lookupType: "public-browser-session",
    browserFlowId,
    primaryDomain,
    positiveFixture: positive,
    negativeFixture: negative,
    liveIntegrationStatus: "LIVE",
  };
}

function parseValidated(parseFn) {
  return (html, ctx) => {
    const r = parseFn(html, ctx.lookupTerm, ctx);
    if (!r) return { validated: false, reason: "parse_failed" };
    return {
      validated: true,
      headword: r.headword,
      fragment: r.fragment,
      entryOrRule: r.entryOrRule,
      entryUrl: r.entryUrl || ctx.finalUrl,
    };
  };
}

function blocked(appLang, adapterId, outcome, reason, limitations = []) {
  return {
    appLang,
    adapterId,
    adapterVersion: "1.0.0",
    adapterType: ADAPTER_TYPES.BLOCKED_OFFICIAL_SOURCE,
    lookupType: "blocked",
    blockedOutcome: outcome,
    blockedReason: reason,
    knownLimitations: limitations,
    positiveFixture: { lookupTerm: "fixture-not-applicable" },
    negativeFixture: { lookupTerm: "zzqqxxnotaword999" },
    liveIntegrationStatus: "BLOCKED",
  };
}

const LANGUAGE_CONFIGS = [
  {
    appLang: "en",
    standardCode: "en",
    adapterId: "en-oald-entry",
    adapterVersion: "1.0.0",
    adapterType: ADAPTER_TYPES.HTML_ENTRY_URL,
    lookupType: "lemma-slug-entry",
    buildEntryUrls: (t) => [
      `https://www.oxfordlearnersdictionaries.com/definition/english/${encodeURIComponent(String(t).toLowerCase())}_1`,
    ],
    parseEntry: parseValidated((html, term) => parseOxfordLearners(html, term)),
    positiveFixture: { lookupTerm: "house", expectedHeadword: "house" },
    negativeFixture: { lookupTerm: "zzqqxxnotaword999" },
  },
  {
    appLang: "cs",
    standardCode: "cs",
    adapterId: "cs-prirucka-ujc-entry",
    adapterVersion: "1.0.0",
    adapterType: ADAPTER_TYPES.HTML_SEARCH_THEN_ENTRY,
    lookupType: "slovo-query",
    buildEntryUrls: (t) => [`https://prirucka.ujc.cas.cz/?slovo=${encodeURIComponent(t)}`],
    parseEntry: parseValidated((html, term) => parsePriruckaUjc(html, term)),
    positiveFixture: { lookupTerm: "dřít", expectedHeadword: "dřít" },
    negativeFixture: { lookupTerm: "zzqqxxnotaword999" },
  },
  browserLang("sk", "sk", "sk-juls-browser-entry", "sk-juls", "slovnik.juls.savba.sk", { lookupTerm: "dobrý", expectedHeadword: "dobrý" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("hr", "hr", "hr-rjecnik-browser-entry", "hr-rjecnik", "rjecnik.hr", { lookupTerm: "kuća", expectedHeadword: "kuća" }, { lookupTerm: "zzqqxxnotaword999" }),
  {
    appLang: "sl",
    standardCode: "sl",
    adapterId: "sl-fran-entry",
    adapterVersion: "1.0.0",
    adapterType: ADAPTER_TYPES.HTML_SEARCH_THEN_ENTRY,
    lookupType: "fran-search",
    buildEntryUrls: (t) => [`https://fran.si/iskanje?View=1&Query=${encodeURIComponent(t)}`],
    parseEntry: parseValidated((html, term) => parseFranSi(html, term)),
    positiveFixture: { lookupTerm: "hiša", expectedHeadword: "hiša" },
    negativeFixture: { lookupTerm: "zzqqxxnotaword999" },
  },
  browserLang("ru", "ru", "ru-orfo-browser-entry", "ru-orfo", "orfo.ruslang.ru", { lookupTerm: "дом", expectedHeadword: "дом" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("nb", "nb", "nb-ordbokene-browser-entry", "nb-ordbokene", "ordbokene.no", { lookupTerm: "hus", expectedHeadword: "hus" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("nn", "nn", "nn-ordbokene-browser-entry", "nn-ordbokene", "ordbokene.no", { lookupTerm: "hus", expectedHeadword: "hus" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("fi", "fi", "fi-kielitoimisto-browser-entry", "fi-kielitoimisto", "kielitoimistonsanakirja.fi", { lookupTerm: "talo", expectedHeadword: "talo" }, { lookupTerm: "zzqqxxnotaword999" }),
  {
    appLang: "tr",
    standardCode: "tr",
    adapterId: "tr-tdk-gts-entry",
    adapterVersion: "1.0.0",
    adapterType: ADAPTER_TYPES.HTML_SEARCH_THEN_ENTRY,
    lookupType: "gts-ara",
    buildEntryUrls: (t) => [`https://sozluk.gov.tr/gts?ara=${encodeURIComponent(t)}`],
    parseEntry: parseValidated((html, term) => parseTitleHeadword(html, term)),
    positiveFixture: { lookupTerm: "ev", expectedHeadword: "ev" },
    negativeFixture: { lookupTerm: "zzqqxxnotaword999" },
  },
  {
    appLang: "gr",
    standardCode: "el",
    adapterId: "el-greek-language-triantafyllides",
    adapterVersion: "1.0.0",
    adapterType: ADAPTER_TYPES.HTML_SEARCH_THEN_ENTRY,
    lookupType: "triantafyllides-search",
    buildEntryUrls: (t) => [
      `https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/search.html?lq=${encodeURIComponent(t)}`,
    ],
    parseEntry: parseValidated((html, term) => parseGreekTriantafyllides(html, term)),
    positiveFixture: { lookupTerm: "σπίτι", expectedHeadword: "σπίτι" },
    negativeFixture: { lookupTerm: "zzqqxxnotaword999" },
  },
  {
    appLang: "es",
    standardCode: "es",
    adapterId: "es-rae-dle-entry",
    adapterVersion: "1.1.0",
    adapterType: ADAPTER_TYPES.HTML_ENTRY_URL,
    lookupType: "dle-lemma-path",
    buildEntryUrls: (t) => [
      `https://dle.rae.es/${encodeURIComponent(String(t).trim().toLowerCase())}`,
    ],
    parseEntry: parseValidated((html, term) => parseRaeDle(html, term)),
    positiveFixture: { lookupTerm: "casa", expectedHeadword: "casa" },
    negativeFixture: { lookupTerm: "zzqqxxnotaword999" },
  },
  {
    appLang: "lv",
    standardCode: "lv",
    adapterId: "lv-tezaurs-simplified-entry",
    adapterVersion: "1.1.0",
    adapterType: ADAPTER_TYPES.HTML_ENTRY_URL,
    lookupType: "tezaurs-lemma-path",
    buildEntryUrls: (t) => [
      `https://tezaurs.lv/${encodeURIComponent(String(t).trim().toLowerCase())}`,
    ],
    parseEntry: parseValidated((html, term) => parseTezaursLv(html, term)),
    positiveFixture: { lookupTerm: "māja", expectedHeadword: "māja" },
    negativeFixture: { lookupTerm: "zzqqxxnotaword999" },
  },
  browserLang("pl", "pl", "pl-wsjp-browser-entry", "pl-wsjp", "wsjp.pl", { lookupTerm: "dom", expectedHeadword: "dom" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("bg", "bg", "bg-beron-browser-entry", "bg-beron", "beron.mon.bg", { lookupTerm: "къща", expectedHeadword: "къща" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("da", "da", "da-ddo-browser-entry", "da-ddo", "ordnet.dk", { lookupTerm: "hus", expectedHeadword: "hus" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("nl", "nl", "nl-woordenlijst-browser-entry", "nl-woordenlijst", "woordenlijst.org", { lookupTerm: "huis", expectedHeadword: "huis" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("sv", "sv", "sv-svenska-browser-entry", "sv-svenska", "svenska.se", { lookupTerm: "hus", expectedHeadword: "hus" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("pt", "pt", "pt-acl-browser-entry", "pt-acl", "dicionario.acad-ciencias.pt", { lookupTerm: "casa", expectedHeadword: "casa" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("ro", "ro", "ro-doom-browser-entry", "ro-doom", "doom.lingv.ro", { lookupTerm: "casa", expectedHeadword: "casa" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("uk", "uk", "uk-dictua-browser-entry", "uk-dictua", "lcorp.ulif.org.ua", { lookupTerm: "дім", expectedHeadword: "дім" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("lt", "lt", "lt-ekalba-browser-entry", "lt-ekalba", "ekalba.lt", { lookupTerm: "namas", expectedHeadword: "namas" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("hu", "hu", "hu-nagyszotar-browser-entry", "hu-nagyszotar", "nagyszotar.nytud.hu", { lookupTerm: "asztal", expectedHeadword: "asztal" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("is", "is", "is-bin-browser-entry", "is-bin", "bin.arnastofnun.is", { lookupTerm: "hús", expectedHeadword: "hús" }, { lookupTerm: "zzqqxxnotaword999" }),
  blocked(
    "bs",
    "bs-izj-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "izj.unsa.ba lacks verified automated dictionary entry lookup",
  ),
  blocked(
    "sr",
    "sr-isj-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "isj.sanu.ac.rs / maticasrpska.org.rs lack verified automated entry lookup",
  ),
  blocked(
    "sq",
    "sq-akad-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "akad.gov.al lacks verified automated dictionary entry lookup",
  ),
  browserLang("mk", "mk", "mk-drmj-browser-entry", "mk-drmj", "drmj.eu", { lookupTerm: "куќа", expectedHeadword: "куќа" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("fr", "fr", "fr-academie-browser-entry", "fr-academie", "dictionnaire-academie.fr", { lookupTerm: "maison", expectedHeadword: "maison" }, { lookupTerm: "zzqqxxnotaword999" }),
  browserLang("it", "it", "it-lessicografia-browser-entry", "it-lessicografia", "lessicografia.it", { lookupTerm: "casa", expectedHeadword: "casa" }, { lookupTerm: "zzqqxxnotaword999" }),
];

function buildAdapterRegistry() {
  const registry = {};
  for (const cfg of LANGUAGE_CONFIGS) {
    registry[cfg.appLang] = {
      config: cfg,
      lookup: cfg.browserFlowId ? createBrowserAdapter(cfg) : createConfigAdapter(cfg),
      id: cfg.adapterId,
      version: cfg.adapterVersion,
      masterUrl: cfg.masterSourceUrl,
    };
  }
  return registry;
}

module.exports = {
  LANGUAGE_CONFIGS,
  buildAdapterRegistry,
};
