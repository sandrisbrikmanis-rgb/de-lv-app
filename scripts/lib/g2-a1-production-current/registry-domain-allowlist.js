#!/usr/bin/env node
"use strict";

const { URL } = require("url");
const { loadRegistryRows, deRegistryRow, rowForAppLanguage } = require("./registry-bindings");
const {
  loadStructuredLanguageAuthoritySources,
  allUrlsForLanguage,
  rowByAppCode,
} = require("../master-language-authority-sources-33");

function hostnameFromUrl(urlString) {
  try {
    return new URL(urlString).hostname.toLowerCase();
  } catch {
    return null;
  }
}

function domainsFromRegistryUrls(urls) {
  const set = new Set();
  for (const u of urls || []) {
    const h = hostnameFromUrl(u);
    if (h) set.add(h);
  }
  return set;
}

function buildAllowlistForLanguage(appLang) {
  const loaded = loadRegistryRows();
  if (!loaded.pass) return { pass: false, error: "REGISTRY_FAIL" };
  const structured = loadStructuredLanguageAuthoritySources();
  const deRow = deRegistryRow(loaded.rows);
  const targetRow = rowForAppLanguage(appLang, loaded.rows);
  if (!deRow || !targetRow) return { pass: false, error: "MISSING_ROW" };

  const deStructured = structured.pass ? rowByAppCode(structured.languages, "de") : null;
  const targetStructured = structured.pass ? rowByAppCode(structured.languages, appLang) : null;

  const deUrls = deStructured ? allUrlsForLanguage(deStructured) : deRow.urls;
  const targetUrls = targetStructured ? allUrlsForLanguage(targetStructured) : targetRow.urls;

  return {
    pass: true,
    de: {
      authorityName: deStructured?.LANGUAGE_NORM_AUTHORITY || deRow.authorityName,
      seedUrls: deUrls,
      allowedDomains: domainsFromRegistryUrls(deUrls),
    },
    target: {
      authorityName:
        targetStructured?.PRIMARY_DICTIONARY_AUTHORITY ||
        targetStructured?.LANGUAGE_NORM_AUTHORITY ||
        targetRow.authorityName,
      seedUrls: targetUrls,
      allowedDomains: domainsFromRegistryUrls(targetUrls),
      standardCode: targetRow.standardCode,
      appCode: targetRow.appCode,
      structuredSources: targetStructured || null,
    },
  };
}

function isHostnameAllowed(hostname, allowedDomains) {
  const host = String(hostname || "").toLowerCase();
  if (!host) return false;
  for (const allowed of allowedDomains) {
    const a = allowed.toLowerCase();
    if (host === a || host.endsWith(`.${a}`)) return true;
  }
  return false;
}

module.exports = {
  buildAllowlistForLanguage,
  domainsFromRegistryUrls,
  hostnameFromUrl,
  isHostnameAllowed,
};
