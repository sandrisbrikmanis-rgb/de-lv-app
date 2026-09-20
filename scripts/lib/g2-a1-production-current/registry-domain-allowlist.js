#!/usr/bin/env node
"use strict";

const { URL } = require("url");
const { loadRegistryRows, deRegistryRow, rowForAppLanguage } = require("./registry-bindings");

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
  const deRow = deRegistryRow(loaded.rows);
  const targetRow = rowForAppLanguage(appLang, loaded.rows);
  if (!deRow || !targetRow) return { pass: false, error: "MISSING_ROW" };
  return {
    pass: true,
    de: {
      authorityName: deRow.authorityName,
      seedUrls: deRow.urls,
      allowedDomains: domainsFromRegistryUrls(deRow.urls),
    },
    target: {
      authorityName: targetRow.authorityName,
      seedUrls: targetRow.urls,
      allowedDomains: domainsFromRegistryUrls(targetRow.urls),
      standardCode: targetRow.standardCode,
      appCode: targetRow.appCode,
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
