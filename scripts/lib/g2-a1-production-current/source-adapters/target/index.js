#!/usr/bin/env node
"use strict";

const { notImplemented } = require("../adapter-result");
const { lookupEtSonaveeb } = require("./et-sonaveeb-adapter");
const { loadRegistryRows, rowForAppLanguage } = require("../../registry-bindings");

/** @type {Record<string, { id: string, version: string, lookup: Function|null, masterUrl: string }>} */
const TARGET_ADAPTER_REGISTRY = {
  et: { id: "et-sonaveeb-eki-entry", version: "1.0.0", lookup: lookupEtSonaveeb, masterUrl: "https://sonaveeb.ee/" },
  bg: { id: "bg-ibl-pending", version: "0.0.0", lookup: null, masterUrl: "https://ibl.bas.bg/" },
  lv: { id: "lv-valoda-pending", version: "0.0.0", lookup: null, masterUrl: "https://valoda.lv/" },
  lt: { id: "lt-lki-pending", version: "0.0.0", lookup: null, masterUrl: "https://lki.lt/" },
  ru: { id: "ru-ruslang-pending", version: "0.0.0", lookup: null, masterUrl: "https://ruslang.ru/" },
  pl: { id: "pl-rjp-pending", version: "0.0.0", lookup: null, masterUrl: "https://rjp.pan.pl/" },
  uk: { id: "uk-iul-pending", version: "0.0.0", lookup: null, masterUrl: "https://iul-nasu.org.ua/" },
  en: { id: "en-oed-pending", version: "0.0.0", lookup: null, masterUrl: "https://www.oed.com/" },
  ro: { id: "ro-acad-pending", version: "0.0.0", lookup: null, masterUrl: "https://acad.ro/" },
  tr: { id: "tr-tdk-pending", version: "0.0.0", lookup: null, masterUrl: "https://tdk.gov.tr/" },
  gr: { id: "el-greek-language-pending", version: "0.0.0", lookup: null, masterUrl: "https://www.greek-language.gr/" },
  sq: { id: "sq-akad-pending", version: "0.0.0", lookup: null, masterUrl: "https://akad.gov.al/" },
  mk: { id: "mk-imj-pending", version: "0.0.0", lookup: null, masterUrl: "https://imj.ukim.edu.mk/" },
  sl: { id: "sl-zrc-pending", version: "0.0.0", lookup: null, masterUrl: "https://www.zrc-sazu.si/" },
  bs: { id: "bs-izj-pending", version: "0.0.0", lookup: null, masterUrl: "https://izj.unsa.ba/" },
  sr: { id: "sr-isj-pending", version: "0.0.0", lookup: null, masterUrl: "https://www.isj.sanu.ac.rs/" },
  hr: { id: "hr-pravopis-pending", version: "0.0.0", lookup: null, masterUrl: "https://pravopis.hr/" },
  sk: { id: "sk-juls-pending", version: "0.0.0", lookup: null, masterUrl: "https://www.juls.savba.sk/" },
  cs: { id: "cs-ujc-pending", version: "0.0.0", lookup: null, masterUrl: "https://prirucka.ujc.cas.cz/" },
  fi: { id: "fi-kotus-pending", version: "0.0.0", lookup: null, masterUrl: "https://www.kotus.fi/" },
  sv: { id: "sv-sa-pending", version: "0.0.0", lookup: null, masterUrl: "https://www.svenskaakademien.se/" },
  nb: { id: "nb-sprakradet-pending", version: "0.0.0", lookup: null, masterUrl: "https://sprakradet.no/" },
  nn: { id: "nn-sprakradet-pending", version: "0.0.0", lookup: null, masterUrl: "https://sprakradet.no/" },
  da: { id: "da-dsn-pending", version: "0.0.0", lookup: null, masterUrl: "https://ro.dsn.dk/" },
  nl: { id: "nl-taalunie-pending", version: "0.0.0", lookup: null, masterUrl: "https://taalunie.org/" },
  lb: { id: "lb-zls-pending", version: "0.0.0", lookup: null, masterUrl: "https://zls.lu/" },
  hu: { id: "hu-nytud-pending", version: "0.0.0", lookup: null, masterUrl: "https://nytud.hu/" },
  fr: { id: "fr-academie-pending", version: "0.0.0", lookup: null, masterUrl: "https://www.dictionnaire-academie.fr/" },
  it: { id: "it-crusca-pending", version: "0.0.0", lookup: null, masterUrl: "https://accademiadellacrusca.it/" },
  es: { id: "es-rae-pending", version: "0.0.0", lookup: null, masterUrl: "https://dle.rae.es/" },
  pt: { id: "pt-acad-pending", version: "0.0.0", lookup: null, masterUrl: "https://www.acad-ciencias.pt/" },
  is: { id: "is-bin-pending", version: "0.0.0", lookup: null, masterUrl: "https://bin.arnastofnun.is/" },
};

function getTargetAdapterMeta(appLang) {
  return TARGET_ADAPTER_REGISTRY[appLang] || null;
}

function listTargetAdapterMatrix() {
  const loaded = loadRegistryRows();
  const rows = loaded.pass ? loaded.rows.filter((r) => r.appCode !== "de") : [];
  return rows.map((row) => {
    const meta = getTargetAdapterMeta(row.appCode);
    const implemented = Boolean(meta?.lookup);
    return {
      language: row.appCode,
      standardCode: row.standardCode,
      authorityName: row.authorityName,
      masterSourceUrl: row.urls[0] || meta?.masterUrl,
      adapterId: meta?.id || "missing",
      adapterVersion: meta?.version || "0.0.0",
      realLookup: implemented ? "YES" : "NO",
      entryValidation: implemented ? "SOURCE_ENTRY_VALIDATED" : "SOURCE_ADAPTER_NOT_IMPLEMENTED",
      integrationTest: implemented ? "required" : "blocked_until_adapter",
    };
  });
}

async function lookupTargetOfficialEntry({ appLang, lookupTerm, allowedDomains, authorityName, provenance }) {
  const meta = getTargetAdapterMeta(appLang);
  if (!meta?.lookup) {
    return notImplemented({
      adapterId: meta?.id || `target-${appLang}-not-implemented`,
      adapterVersion: meta?.version || "0.0.0",
      authorityName,
      searchQuery: `TARGET:${appLang}:${lookupTerm}`,
      error: "SOURCE_ADAPTER_NOT_IMPLEMENTED",
      ...provenance,
    });
  }
  return meta.lookup({ lookupTerm, allowedDomains, authorityName, provenance });
}

module.exports = {
  TARGET_ADAPTER_REGISTRY,
  getTargetAdapterMeta,
  listTargetAdapterMatrix,
  lookupTargetOfficialEntry,
};
