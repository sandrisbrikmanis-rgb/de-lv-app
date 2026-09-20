#!/usr/bin/env node
"use strict";

const { loadRegistryRows, rowForAppLanguage } = require("../../registry-bindings");
const { domainsFromRegistryUrls } = require("../../registry-domain-allowlist");
const { ADAPTER_TYPES } = require("../adapter-types");
const { lookupEtSonaveeb } = require("./et-sonaveeb-adapter");
const { buildAdapterRegistry, LANGUAGE_CONFIGS } = require("./language-configs");

const ET_ADAPTER = {
  appLang: "et",
  standardCode: "et",
  adapterId: "et-sonaveeb-eki-entry",
  adapterVersion: "1.0.0",
  adapterType: ADAPTER_TYPES.SERVER_RENDERED_DICTIONARY,
  lookupType: "sonaveeb-search-entry",
  masterSourceUrl: "https://sonaveeb.ee/",
  positiveFixture: { lookupTerm: "õppima", expectedHeadword: "õppima" },
  negativeFixture: { lookupTerm: "zzqqxxnotaword999" },
  liveIntegrationStatus: "LIVE",
  knownLimitations: [],
};

function buildTargetAdapterRegistry() {
  const registry = buildAdapterRegistry();
  registry.et = {
    config: ET_ADAPTER,
    lookup: lookupEtSonaveeb,
    id: ET_ADAPTER.adapterId,
    version: ET_ADAPTER.adapterVersion,
    masterUrl: ET_ADAPTER.masterSourceUrl,
  };
  return registry;
}

const TARGET_ADAPTER_REGISTRY = buildTargetAdapterRegistry();

function configForLang(appLang) {
  return TARGET_ADAPTER_REGISTRY[appLang]?.config || null;
}

function getTargetAdapterMeta(appLang) {
  const entry = TARGET_ADAPTER_REGISTRY[appLang];
  if (!entry) return null;
  return {
    id: entry.id,
    version: entry.version,
    lookup: entry.lookup,
    masterUrl: entry.masterUrl || entry.config?.masterSourceUrl,
  };
}

function matrixRowForLanguage(row) {
  const appLang = row.appCode;
  const regEntry = TARGET_ADAPTER_REGISTRY[appLang];
  const cfg = regEntry?.config || {};
  const implemented = Boolean(regEntry?.lookup);
  const blocked = Boolean(cfg.blockedOutcome);
  const allowedDomains = [...domainsFromRegistryUrls(row.urls)];

  return {
    language: appLang,
    standardCode: row.standardCode,
    authorityName: row.authorityName,
    masterSourceUrl: row.urls[0] || regEntry?.masterUrl,
    masterSeedUrls: row.urls,
    allowedDomains,
    adapterId: regEntry?.id || cfg.adapterId || "missing",
    adapterVersion: regEntry?.version || cfg.adapterVersion || "0.0.0",
    adapterType: cfg.adapterType || (blocked ? ADAPTER_TYPES.BLOCKED_OFFICIAL_SOURCE : "unknown"),
    lookupType: cfg.lookupType || (blocked ? "blocked" : "unknown"),
    queryEntryUrlConstruction: cfg.buildEntryUrls
      ? "buildEntryUrls(lookupTerm) per language-configs"
      : blocked
        ? "n/a — blocked official source"
        : appLang === "et"
          ? "Sõnaveeb search → entry page"
          : "unknown",
    redirectPolicy: "manual follow; reject if final domain not in MASTER allowlist",
    entryIdentificationMethod: blocked
      ? cfg.blockedReason
      : "parseEntry(html) with headword + evidence fragment >= 25 chars",
    headwordIdentificationMethod: blocked ? "n/a" : "parser headword vs fixture + normalization NFC compare",
    evidenceFragmentMethod: blocked ? "n/a" : "htmlToPlainText on entry body / definition block",
    positiveFixture: cfg.positiveFixture || ET_ADAPTER.positiveFixture,
    negativeFixture: cfg.negativeFixture || { lookupTerm: "zzqqxxnotaword999" },
    liveIntegrationStatus: blocked ? "BLOCKED" : implemented ? "LIVE" : "NOT_IMPLEMENTED",
    knownLimitations: cfg.knownLimitations || (cfg.blockedReason ? [cfg.blockedReason] : []),
    blockedOutcome: cfg.blockedOutcome || null,
    realLookup: implemented ? "YES" : "NO",
    entryValidation: blocked
      ? cfg.blockedOutcome
      : implemented
        ? "SOURCE_ENTRY_VALIDATED-capable"
        : "SOURCE_ADAPTER_NOT_IMPLEMENTED",
    integrationTest: blocked ? "blocked_negative_only" : implemented ? "required_live" : "blocked_until_adapter",
  };
}

function listTargetAdapterMatrix() {
  const loaded = loadRegistryRows();
  const rows = loaded.pass ? loaded.rows.filter((r) => r.appCode !== "de") : [];
  return rows.map((row) => matrixRowForLanguage(row));
}

async function lookupTargetOfficialEntry({ appLang, lookupTerm, allowedDomains, authorityName, provenance }) {
  const regEntry = TARGET_ADAPTER_REGISTRY[appLang];
  if (!regEntry?.lookup) {
    const { notImplemented } = require("../adapter-result");
    return notImplemented({
      adapterId: `target-${appLang}-not-implemented`,
      adapterVersion: "0.0.0",
      authorityName,
      searchQuery: `TARGET:${appLang}:${lookupTerm}`,
      error: "SOURCE_ADAPTER_NOT_IMPLEMENTED",
      ...provenance,
    });
  }
  return regEntry.lookup({ lookupTerm, allowedDomains, authorityName, provenance });
}

function listAllTargetAppLanguages() {
  const loaded = loadRegistryRows();
  if (!loaded.pass) return [];
  return loaded.rows.filter((r) => r.appCode !== "de").map((r) => r.appCode);
}

function assertRegistryComplete() {
  const langs = listAllTargetAppLanguages();
  const missing = langs.filter((l) => !TARGET_ADAPTER_REGISTRY[l]?.lookup);
  return { pass: missing.length === 0, missing, count: langs.length };
}

module.exports = {
  TARGET_ADAPTER_REGISTRY,
  ET_ADAPTER,
  LANGUAGE_CONFIGS,
  buildTargetAdapterRegistry,
  configForLang,
  getTargetAdapterMeta,
  listTargetAdapterMatrix,
  lookupTargetOfficialEntry,
  listAllTargetAppLanguages,
  assertRegistryComplete,
  matrixRowForLanguage,
};
