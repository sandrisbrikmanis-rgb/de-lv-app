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
  parseTitleHeadword,
} = require("../parsers/shared-parsers");
const { createConfigAdapter } = require("../create-config-adapter");

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
  blocked(
    "sk",
    "sk-juls-js-required",
    SOURCE_ACCESS_OUTCOME.SOURCE_CONTENT_UNREADABLE,
    "slovnik.juls.savba.sk returns JS-required gate page without server-rendered dictionary entry",
  ),
  blocked(
    "hr",
    "hr-pravopis-spa",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "pravopis.hr rječnik search is client-side; ?trazi= query returns shell page without server-rendered entry",
  ),
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
  blocked(
    "ru",
    "ru-orfo-no-entry-in-search",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "orfo.ruslang.ru search page has no server-rendered article/entry links for automated search→entry chain",
  ),
  blocked(
    "nb",
    "nb-ordbokene-nuxt-spa",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "ordbokene.no (Bokmålsordboka) is Nuxt/JS-rendered; SSR search page lacks machine-readable entry body",
  ),
  blocked(
    "nn",
    "nn-ordbokene-nuxt-spa",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "ordbokene.no (Nynorskordboka) is Nuxt/JS-rendered; SSR search page lacks machine-readable entry body",
  ),
  blocked(
    "fi",
    "fi-kielitoimisto-spa",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "kielitoimistonsanakirja.fi search.php returns minimal shell without server-rendered entry content",
  ),
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
  blocked(
    "es",
    "es-rae-dle-blocked",
    SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
    "dle.rae.es / www.rae.es block automated access (Cloudflare); no alternate MASTER URL with machine-readable entry API",
  ),
  blocked(
    "lv",
    "lv-tezaurs-api-auth",
    SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED,
    "mlvv.tezaurs.lv/tezaurs.lv require JS; official api.tezaurs.lv requires API key per MASTER-adjacent official docs",
  ),
  blocked(
    "pl",
    "pl-wsjp-blocked",
    SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
    "wsjp.pl returns 403 to automated fetch; rjp.pan.pl has no stable public entry URL adapter verified",
  ),
  blocked(
    "bg",
    "bg-ibl-beron-blocked",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "ibl.bas.bg lacks verified public entry lookup; beron.mon.bg blocks automated access (403/CF)",
  ),
  blocked(
    "da",
    "da-dsn-no-entry-url",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "ro.dsn.dk has no verified stable public entry URL for automated lemma lookup in MASTER registry",
  ),
  blocked(
    "nl",
    "nl-woordenlijst-spa",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "woordenlijst.org entry routes are client-rendered; taalunie.org is not a lemma lookup endpoint",
  ),
  blocked(
    "sv",
    "sv-svenska-se-spa",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "svenska.se/SAOB requires interactive lookup; no verified server-rendered entry URL",
  ),
  blocked(
    "pt",
    "pt-acad-dicionario-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "dicionario.acad-ciencias.pt has no verified public entry URL pattern for automated lookup",
  ),
  blocked(
    "ro",
    "ro-doom-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "doom.lingv.ro / acad.ro lack verified automated entry lookup endpoints",
  ),
  blocked(
    "uk",
    "uk-iul-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "iul-nasu.org.ua lacks verified public dictionary entry URL for automated lookup",
  ),
  blocked(
    "lt",
    "lt-lki-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "lki.lt / vlkk.lt lack verified automated entry lookup endpoints",
  ),
  blocked(
    "lb",
    "lb-zls-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "zls.lu / lod.lu lack verified automated entry lookup endpoints",
  ),
  blocked(
    "hu",
    "hu-nytud-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "nytud.hu lacks verified automated dictionary entry lookup",
  ),
  blocked(
    "is",
    "is-bin-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "bin.arnastofnun.is / malid.is lack verified automated entry lookup endpoints",
  ),
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
  blocked(
    "mk",
    "mk-imj-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "imj.ukim.edu.mk lacks verified automated entry lookup",
  ),
  blocked(
    "fr",
    "fr-academie-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "dictionnaire-academie.fr lacks verified public automated entry lookup API/URL",
  ),
  blocked(
    "it",
    "it-crusca-no-entry",
    SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
    "accademiadellacrusca.it lacks verified automated entry lookup endpoint",
  ),
];

function buildAdapterRegistry() {
  const registry = {};
  for (const cfg of LANGUAGE_CONFIGS) {
    registry[cfg.appLang] = {
      config: cfg,
      lookup: createConfigAdapter(cfg),
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
