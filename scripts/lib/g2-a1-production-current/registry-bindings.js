#!/usr/bin/env node
"use strict";

const { ROOT } = require("../audit-common");
const { verifyEmbeddedLanguageRegistry, parseRegistryTable } = require("../official-language-sources-registry");
const fs = require("fs");
const path = require("path");

function loadRegistryRows() {
  const reg = verifyEmbeddedLanguageRegistry(ROOT);
  if (!reg.pass) return { pass: false, reg, rows: [] };
  const text = fs.readFileSync(path.join(ROOT, reg.registryDocument), "utf8");
  const parsed = parseRegistryTable(text);
  return { pass: true, reg, rows: parsed.rows };
}

function rowForAppLanguage(lang, rows) {
  const lookup = lang === "gr" ? "gr" : lang;
  return rows.find((r) => r.appCode === lookup || r.standardCode === lookup) || null;
}

function deRegistryRow(rows) {
  return rows.find((r) => r.standardCode === "de" || r.appCode === "de") || null;
}

function bindRegistryAuthorities(lang) {
  const loaded = loadRegistryRows();
  if (!loaded.pass) return { pass: false, error: "REGISTRY_FAIL", binding: null };
  const target = rowForAppLanguage(lang, loaded.rows);
  const de = deRegistryRow(loaded.rows);
  if (!target || !de) return { pass: false, error: "MISSING_REGISTRY_ROW", binding: null };
  return {
    pass: true,
    binding: {
      DE_AUTHORITY: de.authorityName,
      DE_SOURCE_URL: de.urls[0] || null,
      TARGET_AUTHORITY: target.authorityName,
      TARGET_SOURCE_URL: target.urls[0] || null,
      targetStandardCode: target.standardCode,
      targetAppCode: target.appCode,
      deStandardCode: "de",
    },
  };
}

module.exports = {
  bindRegistryAuthorities,
  loadRegistryRows,
  rowForAppLanguage,
  deRegistryRow,
};
