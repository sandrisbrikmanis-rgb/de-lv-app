#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { parseRegistryTable, APP_LANGUAGE_CODES } = require("./official-language-sources-registry");

const JSON_REL = "scripts/lib/data/master-language-authority-sources-33.json";
const URL_RE = /https?:\/\/[^\s<>"')\]|]+/gi;

function stripTrackingParams(url) {
  try {
    const u = new URL(url);
    for (const key of [...u.searchParams.keys()]) {
      if (/^utm_/i.test(key)) u.searchParams.delete(key);
    }
    u.hash = "";
    return u.toString().replace(/\/$/, "") + (u.pathname === "/" ? "/" : "");
  } catch {
    return url;
  }
}

function normalizeUrlList(urls) {
  const out = [];
  const seen = new Set();
  for (const raw of urls || []) {
    const cleaned = stripTrackingParams(String(raw).trim());
    if (!cleaned || seen.has(cleaned)) continue;
    seen.add(cleaned);
    out.push(cleaned);
  }
  return out;
}

function loadStructuredLanguageAuthoritySources(root = ROOT) {
  const jsonPath = path.join(root, JSON_REL);
  if (!fs.existsSync(jsonPath)) {
    return { pass: false, error: "STRUCTURED_REGISTRY_JSON_MISSING", languages: [] };
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const languages = (data.languages || []).map((row) => ({
    ...row,
    LANGUAGE_NORM_URLS: normalizeUrlList(row.LANGUAGE_NORM_URLS),
    PRIMARY_DICTIONARY_URLS: normalizeUrlList(row.PRIMARY_DICTIONARY_URLS),
    ADDITIONAL_AUTHORITY_URLS: normalizeUrlList(row.ADDITIONAL_AUTHORITY_URLS),
    LANGUAGE_LEARNING_CEFR_URLS: normalizeUrlList(row.LANGUAGE_LEARNING_CEFR_URLS),
  }));
  return { pass: true, schemaVersion: data.schemaVersion, languages };
}

function allUrlsForLanguage(row) {
  return [
    ...(row.LANGUAGE_NORM_URLS || []),
    ...(row.PRIMARY_DICTIONARY_URLS || []),
    ...(row.ADDITIONAL_AUTHORITY_URLS || []),
    ...(row.LANGUAGE_LEARNING_CEFR_URLS || []),
  ];
}

function rowByAppCode(languages, appCode) {
  const lookup = appCode === "gr" ? "gr" : appCode;
  return languages.find((r) => r.appCode === lookup) || null;
}

function verifyStructuredRegistry(root = ROOT) {
  const loaded = loadStructuredLanguageAuthoritySources(root);
  if (!loaded.pass) return { pass: false, error: loaded.error };

  const apv = parseRegistryTable(
    fs.readFileSync(path.join(root, "docs_and_rules/MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md"), "utf8"),
  );
  if (!apv.pass) return { pass: false, error: "APVIENOTS_PARSE_FAIL" };

  const structured = loaded.languages;
  if (structured.length !== 33) {
    return { pass: false, error: "STRUCTURED_COUNT_NOT_33", count: structured.length };
  }

  const missingApp = APP_LANGUAGE_CODES.filter(
    (c) => !structured.some((r) => r.appCode === c),
  );
  const hasDe = structured.some((r) => r.appCode === "de");
  const elGr = structured.some((r) => r.appCode === "gr" && r.standardCode === "el");

  const reconciliation = [];
  for (const sRow of structured) {
    const tRow = apv.rows.find((r) => r.appCode === sRow.appCode);
    if (!tRow) {
      reconciliation.push({ appCode: sRow.appCode, issue: "MISSING_IN_SECTION3_TABLE" });
      continue;
    }
    const section3Urls = new Set((tRow.urls || []).map((u) => stripTrackingParams(u)));
    const structuredUrls = allUrlsForLanguage(sRow);
    const missingInSection3 = structuredUrls.filter((u) => !section3Urls.has(stripTrackingParams(u)));
    reconciliation.push({
      appCode: sRow.appCode,
      standardCode: sRow.standardCode,
      section3Authority: tRow.authorityName,
      section3Urls: [...section3Urls],
      structuredUrlCount: structuredUrls.length,
      missingInSection3Table: missingInSection3,
      registryGapNotes: sRow.registryGapNotes || null,
    });
  }

  const pass =
    missingApp.length === 0 &&
    hasDe &&
    elGr &&
    structured.every((r) => r.LANGUAGE_NORM_AUTHORITY && (r.LANGUAGE_NORM_URLS?.length || 0) > 0);

  return {
    pass,
    schemaVersion: loaded.schemaVersion,
    languageCount: structured.length,
    missingApp,
    elGr,
    dePresent: hasDe,
    reconciliation,
    registryIncomplete: reconciliation.some((r) => r.missingInSection3Table?.length > 0),
  };
}

module.exports = {
  JSON_REL,
  loadStructuredLanguageAuthoritySources,
  verifyStructuredRegistry,
  allUrlsForLanguage,
  rowByAppCode,
  stripTrackingParams,
  normalizeUrlList,
};
