#!/usr/bin/env node
"use strict";

/**
 * Crowdin-compatible JSON bridge for languages/{lang}/ui.js (UI localization only).
 *
 * Export:  window.LANGUAGE_UI_STRINGS  →  flat dot-key JSON (sorted, deterministic)
 * Import:  flat dot-key JSON  →  same nested fields + __langCode
 *
 * Does not touch course data, training cards, or runtime i18n loaders.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..", "..");

/** All 32 UI locales (lv master + 31 translated ui.js files). */
const UI_LANGUAGES = [
  "lv", "lt", "ru", "pl", "uk", "et", "en", "ro", "bg", "tr", "gr", "sq", "mk",
  "sl", "bs", "sr", "hr", "sk", "cs", "fi", "sv", "nb", "nn", "da", "nl", "lb",
  "fr", "it", "es", "pt", "hu", "is",
];

const UI_JS_REL = (lang) => path.join("languages", lang, "ui.js");
const UI_JSON_REL = (lang) => path.join("crowdin", "ui", `${lang}.json`);

/** Crowdin source locale for UI string keys (305-key master set). */
const CROWDIN_SOURCE_LANG = "lv";

/**
 * Mandatory Crowdin ↔ repo folder mappings (ISO / Crowdin code → repo dir).
 * All others use the same code in Crowdin and languages/{code}/.
 */
const CROWDIN_LANGUAGE_MAP = {
  el: "gr", // Greek: Crowdin `el` → repo `languages/gr/ui.js`
};

const METADATA_KEYS = new Set(["__langCode"]);
const PLACEHOLDER_RE = /\{(\w+)\}/g;
const HTML_TAG_RE = /<\/?([a-zA-Z][\w-]*)\b[^>]*>/g;

function abs(relPath) {
  return path.join(ROOT, relPath);
}

function loadUiObject(relPath) {
  const filePath = abs(relPath);
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const obj = ctx.window.LANGUAGE_UI_STRINGS;
  if (!obj || typeof obj !== "object") {
    throw new Error(`Missing window.LANGUAGE_UI_STRINGS in ${relPath}`);
  }
  return { filePath, code, obj };
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function flattenUiStrings(obj, options = {}) {
  const { includeMetadata = false } = options;
  const flat = {};

  function walk(value, prefix) {
    if (typeof value === "string") {
      flat[prefix] = value;
      return;
    }
    if (!isPlainObject(value)) {
      throw new Error(`Non-string leaf at ${prefix || "(root)"}: ${typeof value}`);
    }
    for (const key of Object.keys(value)) {
      if (!includeMetadata && METADATA_KEYS.has(key) && !prefix) {
        continue;
      }
      const next = prefix ? `${prefix}.${key}` : key;
      walk(value[key], next);
    }
  }

  walk(obj, "");
  return flat;
}

function unflattenUiStrings(flat) {
  const root = {};
  for (const dotPath of Object.keys(flat).sort()) {
    const value = flat[dotPath];
    if (typeof value !== "string") {
      throw new Error(`Expected string at ${dotPath}, got ${typeof value}`);
    }
    const parts = dotPath.split(".");
    let cur = root;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!(part in cur)) {
        cur[part] = {};
      } else if (!isPlainObject(cur[part])) {
        throw new Error(`Path conflict at ${parts.slice(0, i + 1).join(".")}`);
      }
      cur = cur[part];
    }
    const leaf = parts[parts.length - 1];
    if (leaf in cur && isPlainObject(cur[leaf])) {
      throw new Error(`Path conflict: ${dotPath} overlaps an object node`);
    }
    cur[leaf] = value;
  }
  return root;
}

function sortObjectDeep(obj) {
  if (!isPlainObject(obj)) return obj;
  const sorted = {};
  for (const key of Object.keys(obj).sort()) {
    sorted[key] = sortObjectDeep(obj[key]);
  }
  return sorted;
}

function exportUiToCrowdinJson(obj, options = {}) {
  const flat = flattenUiStrings(obj, options);
  const sortedFlat = {};
  for (const key of Object.keys(flat).sort()) {
    sortedFlat[key] = flat[key];
  }
  return `${JSON.stringify(sortedFlat, null, 2)}\n`;
}

function importCrowdinJsonToUi(flat, langCode) {
  if (!langCode || typeof langCode !== "string") {
    throw new Error("langCode is required for import");
  }
  const nested = unflattenUiStrings(flat);
  nested.__langCode = langCode;
  return nested;
}

/**
 * Overlay Crowdin flat keys onto an existing ui.js object.
 * Keys present in the target but absent from Crowdin (e.g. EN/ES +7) are preserved.
 */
function mergeCrowdinImport(existingObj, crowdinFlat, langCode) {
  if (!langCode || typeof langCode !== "string") {
    throw new Error("langCode is required for merge import");
  }
  const existingFlat = flattenUiStrings(existingObj);
  const mergedFlat = { ...existingFlat, ...crowdinFlat };
  const nested = unflattenUiStrings(mergedFlat);
  nested.__langCode = langCode;
  return nested;
}

function extractPlaceholderMultiset(str) {
  const counts = {};
  if (typeof str !== "string") return counts;
  for (const match of str.matchAll(PLACEHOLDER_RE)) {
    const name = match[1];
    counts[name] = (counts[name] || 0) + 1;
  }
  return counts;
}

function multisetEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if ((a[key] || 0) !== (b[key] || 0)) return false;
  }
  return true;
}

function extractHtmlTagStructure(str) {
  if (typeof str !== "string" || !str.includes("<")) return "";
  const tokens = [];
  for (const match of str.matchAll(HTML_TAG_RE)) {
    const full = match[0];
    const name = match[1].toLowerCase();
    tokens.push(full.startsWith("</") ? `/${name}` : name);
  }
  return tokens.join("|");
}

/**
 * Guard imported Crowdin values before --write.
 * For each overlapping key, placeholder multiset and HTML tag structure
 * must match the existing target ui.js value.
 */
function validateImportGuards(existingFlat, crowdinFlat) {
  const errors = [];
  for (const key of Object.keys(crowdinFlat).sort()) {
    const incoming = crowdinFlat[key];
    const existing = existingFlat[key];
    if (existing === undefined) {
      continue;
    }
    const expectedPh = extractPlaceholderMultiset(existing);
    const incomingPh = extractPlaceholderMultiset(incoming);
    if (!multisetEqual(expectedPh, incomingPh)) {
      errors.push(
        `${key}: placeholder multiset mismatch (expected ${JSON.stringify(expectedPh)}, got ${JSON.stringify(incomingPh)})`
      );
    }
    const expectedHtml = extractHtmlTagStructure(existing);
    const incomingHtml = extractHtmlTagStructure(incoming);
    if (expectedHtml !== incomingHtml) {
      errors.push(
        `${key}: HTML tag structure mismatch (expected "${expectedHtml}", got "${incomingHtml}")`
      );
    }
  }
  return errors;
}

function assertKeysPreserved(existingFlat, mergedFlat, label) {
  const errors = [];
  for (const key of Object.keys(existingFlat).sort()) {
    if (!Object.prototype.hasOwnProperty.call(mergedFlat, key)) {
      errors.push(`${label}: lost key ${key}`);
    }
  }
  return errors;
}

function repoLangFromCrowdinCode(crowdinCode) {
  return CROWDIN_LANGUAGE_MAP[crowdinCode] || crowdinCode;
}

function crowdinCodeFromRepoLang(repoLang) {
  for (const [crowdinCode, mappedRepoLang] of Object.entries(CROWDIN_LANGUAGE_MAP)) {
    if (mappedRepoLang === repoLang) return crowdinCode;
  }
  return repoLang;
}

function serializeUiJs(obj) {
  const sorted = sortObjectDeep(obj);
  return `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(sorted, null, 2)};\n`;
}

function parseCrowdinJson(text) {
  const parsed = JSON.parse(text);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Crowdin UI JSON must be a flat object");
  }
  for (const [key, value] of Object.entries(parsed)) {
    if (typeof value !== "string") {
      throw new Error(`Crowdin UI JSON value for "${key}" must be a string`);
    }
  }
  return parsed;
}

function deepEqualSemantic(a, b, path = "") {
  if (a === b) return null;
  if (typeof a !== typeof b) {
    return `${path || "(root)"}: type ${typeof a} !== ${typeof b}`;
  }
  if (a === null || b === null) {
    return a === b ? null : `${path || "(root)"}: ${a} !== ${b}`;
  }
  if (typeof a !== "object") {
    return `${path || "(root)"}: ${JSON.stringify(a)} !== ${JSON.stringify(b)}`;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  const allKeys = new Set([...keysA, ...keysB]);
  for (const key of [...allKeys].sort()) {
    const next = path ? `${path}.${key}` : key;
    if (!Object.prototype.hasOwnProperty.call(a, key)) {
      return `${next}: missing in original`;
    }
    if (!Object.prototype.hasOwnProperty.call(b, key)) {
      return `${next}: missing in round-trip`;
    }
    const diff = deepEqualSemantic(a[key], b[key], next);
    if (diff) return diff;
  }
  return null;
}

function roundTripUiObject(original) {
  const flat = flattenUiStrings(original);
  const json = exportUiToCrowdinJson(original);
  const parsedFlat = parseCrowdinJson(json);
  const langCode = original.__langCode;
  const reimported = importCrowdinJsonToUi(parsedFlat, langCode);
  return { flat, json, reimported };
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

module.exports = {
  ROOT,
  UI_LANGUAGES,
  UI_JS_REL,
  UI_JSON_REL,
  CROWDIN_SOURCE_LANG,
  CROWDIN_LANGUAGE_MAP,
  METADATA_KEYS,
  abs,
  loadUiObject,
  flattenUiStrings,
  unflattenUiStrings,
  exportUiToCrowdinJson,
  importCrowdinJsonToUi,
  mergeCrowdinImport,
  extractPlaceholderMultiset,
  extractHtmlTagStructure,
  validateImportGuards,
  assertKeysPreserved,
  repoLangFromCrowdinCode,
  crowdinCodeFromRepoLang,
  serializeUiJs,
  parseCrowdinJson,
  deepEqualSemantic,
  roundTripUiObject,
  ensureDir,
};
