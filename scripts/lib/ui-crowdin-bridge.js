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
const UI_ROOT_MARKER = "window.LANGUAGE_UI_STRINGS";

let lvSourceKeyCache = null;

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
  const lvSourceKeys = options.lvSourceKeys || null;
  const flat = flattenUiStrings(obj, options);
  const sortedFlat = {};
  for (const key of Object.keys(flat).sort()) {
    if (lvSourceKeys && !lvSourceKeys.has(key)) {
      continue;
    }
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
function getLvSourceKeySet() {
  if (!lvSourceKeyCache) {
    const { obj } = loadUiObject(UI_JS_REL(CROWDIN_SOURCE_LANG));
    lvSourceKeyCache = new Set(Object.keys(flattenUiStrings(obj)));
  }
  return lvSourceKeyCache;
}

function validateCrowdinKeySet(crowdinFlat, lvSourceKeys = getLvSourceKeySet()) {
  const errors = [];
  for (const key of Object.keys(crowdinFlat).sort()) {
    if (!lvSourceKeys.has(key)) {
      errors.push(`Unknown Crowdin key not in LV ${lvSourceKeys.size}-key source set: ${key}`);
    }
  }
  return errors;
}

function skipWs(source, index) {
  while (index < source.length && /\s/.test(source[index])) {
    index++;
  }
  return index;
}

function readJsStringLiteral(source, index) {
  const quote = source[index];
  if (quote !== '"') {
    throw new Error(`Expected double-quoted string at ${index}, got ${JSON.stringify(source[index])}`);
  }
  const start = index;
  index++;
  while (index < source.length) {
    const ch = source[index];
    if (ch === "\\") {
      index += 2;
      continue;
    }
    if (ch === quote) {
      const literal = source.slice(start, index + 1);
      return { start, end: index + 1, value: JSON.parse(literal), literal };
    }
    index++;
  }
  throw new Error(`Unterminated string literal at ${start}`);
}

function readJsKey(source, index) {
  index = skipWs(source, index);
  const start = index;
  let key;
  let end;
  const ch = source[index];
  if (ch === '"') {
    const parsed = readJsStringLiteral(source, index);
    key = parsed.value;
    end = parsed.end;
  } else if (ch === "'") {
    throw new Error(`Single-quoted property keys are not supported at ${index}`);
  } else if (/[a-zA-Z_$]/.test(ch)) {
    while (index < source.length && /[a-zA-Z0-9_$]/.test(source[index])) {
      index++;
    }
    key = source.slice(start, index);
    end = index;
  } else if (/[0-9]/.test(ch)) {
    while (index < source.length && /[0-9]/.test(source[index])) {
      index++;
    }
    key = source.slice(start, index);
    end = index;
  } else {
    throw new Error(`Unexpected property key at ${index}: ${JSON.stringify(ch)}`);
  }
  index = skipWs(source, end);
  if (source[index] !== ":") {
    throw new Error(`Expected ':' after key ${key} at ${index}`);
  }
  const valueStart = skipWs(source, index + 1);
  return { key, valueStart };
}

function skipPropertyValue(source, valueStart) {
  let index = valueStart;
  const ch = source[index];
  if (ch === '"') {
    return readJsStringLiteral(source, index).end;
  }
  if (ch === "{") {
    return skipObjectLiteral(source, index);
  }
  throw new Error(`Unsupported value type at ${index}: ${JSON.stringify(ch)}`);
}

function skipObjectLiteral(source, startIndex) {
  let index = startIndex + 1;
  index = skipWs(source, index);
  while (index < source.length) {
    const ch = source[index];
    if (ch === "}") {
      return index + 1;
    }
    const keyInfo = readJsKey(source, index);
    index = skipPropertyValue(source, keyInfo.valueStart);
    index = skipWs(source, index);
    if (source[index] === ",") {
      index++;
    }
    index = skipWs(source, index);
  }
  throw new Error(`Unterminated object literal at ${startIndex}`);
}

function findUiRootObjectStart(source) {
  const markerIndex = source.indexOf(UI_ROOT_MARKER);
  if (markerIndex === -1) {
    throw new Error(`Missing ${UI_ROOT_MARKER} assignment`);
  }
  let index = markerIndex + UI_ROOT_MARKER.length;
  index = skipWs(source, index);
  if (source[index] !== "=") {
    throw new Error(`Expected '=' after ${UI_ROOT_MARKER}`);
  }
  index = skipWs(source, index + 1);
  if (source[index] !== "{") {
    throw new Error(`Expected '{' after ${UI_ROOT_MARKER} =`);
  }
  return index;
}

function locateStringLiteralAtPath(source, dotPath) {
  const parts = dotPath.split(".");
  function walk(objectStart, partIndex) {
    let index = objectStart + 1;
    index = skipWs(source, index);
    while (index < source.length) {
      const ch = source[index];
      if (ch === "}") {
        break;
      }
      const keyInfo = readJsKey(source, index);
      if (keyInfo.key !== parts[partIndex]) {
        index = skipPropertyValue(source, keyInfo.valueStart);
        index = skipWs(source, index);
        if (source[index] === ",") {
          index++;
        }
        index = skipWs(source, index);
        continue;
      }
      const valueStart = keyInfo.valueStart;
      if (partIndex === parts.length - 1) {
        if (source[valueStart] !== '"') {
          throw new Error(`Expected string value for ${dotPath} at ${valueStart}`);
        }
        return readJsStringLiteral(source, valueStart);
      }
      if (source[valueStart] !== "{") {
        throw new Error(`Expected nested object for ${parts.slice(0, partIndex + 1).join(".")} at ${valueStart}`);
      }
      return walk(valueStart, partIndex + 1);
    }
    throw new Error(`Path not found in ui.js source: ${dotPath}`);
  }
  return walk(findUiRootObjectStart(source), 0);
}

/**
 * Replace only string values whose Crowdin JSON differs from the current ui.js.
 * Preserves file formatting, key order, and quoting style (no full re-serialize).
 */
function applySurgicalCrowdinPatch(sourceCode, existingFlat, crowdinFlat) {
  const replacements = [];
  for (const key of Object.keys(crowdinFlat).sort()) {
    const oldValue = existingFlat[key];
    const newValue = crowdinFlat[key];
    if (oldValue === undefined) {
      throw new Error(`Crowdin key ${key} not present in target ui.js`);
    }
    if (newValue === oldValue) {
      continue;
    }
    const literal = locateStringLiteralAtPath(sourceCode, key);
    if (literal.value !== oldValue) {
      throw new Error(
        `Source literal mismatch for ${key}: file has ${JSON.stringify(literal.value)}, expected ${JSON.stringify(oldValue)}`
      );
    }
    const newLiteral = JSON.stringify(newValue);
    replacements.push({ key, start: literal.start, end: literal.end, newLiteral, oldValue, newValue });
  }
  replacements.sort((a, b) => b.start - a.start);
  let content = sourceCode;
  for (const repl of replacements) {
    content = content.slice(0, repl.start) + repl.newLiteral + content.slice(repl.end);
  }
  return { content, changes: replacements, changed: replacements.length > 0 };
}

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
  const lvSourceKeys = getLvSourceKeySet();
  const json = exportUiToCrowdinJson(original, { lvSourceKeys });
  const parsedFlat = parseCrowdinJson(json);
  const langCode = original.__langCode;
  const reimported = mergeCrowdinImport(original, parsedFlat, langCode);
  return { flat: parsedFlat, json, reimported };
}

function prepareUiCrowdinImport(lang, options = {}) {
  const root = options.root || ROOT;
  const inDir = options.inDir || path.join(root, "crowdin", "ui");
  const jsonPath = path.join(inDir, `${lang}.json`);
  if (!fs.existsSync(jsonPath)) {
    throw new Error(`Missing JSON for ${lang}: ${jsonPath}`);
  }
  const rel = UI_JS_REL(lang);
  const filePath = path.join(root, rel);
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const existing = ctx.window.LANGUAGE_UI_STRINGS;
  if (!existing || typeof existing !== "object") {
    throw new Error(`Missing window.LANGUAGE_UI_STRINGS in ${rel}`);
  }
  const existingFlat = flattenUiStrings(existing);
  const crowdinFlat = parseCrowdinJson(fs.readFileSync(jsonPath, "utf8"));
  const lvSourceKeys = getLvSourceKeySet();

  const keyErrors = validateCrowdinKeySet(crowdinFlat, lvSourceKeys);
  if (keyErrors.length) {
    return { lang, ok: false, errors: keyErrors };
  }
  const guardErrors = validateImportGuards(existingFlat, crowdinFlat);
  if (guardErrors.length) {
    return { lang, ok: false, errors: guardErrors };
  }
  const merged = mergeCrowdinImport(existing, crowdinFlat, lang);
  const mergedFlat = flattenUiStrings(merged);
  const preserveErrors = assertKeysPreserved(existingFlat, mergedFlat, lang);
  if (preserveErrors.length) {
    return { lang, ok: false, errors: preserveErrors };
  }
  const patch = applySurgicalCrowdinPatch(code, existingFlat, crowdinFlat);
  if (patch.content !== code) {
    const reparsed = loadUiObjectFromCode(patch.content);
    const reparsedFlat = flattenUiStrings(reparsed);
    const mergedDiff = deepEqualSemantic(mergedFlat, reparsedFlat);
    if (mergedDiff) {
      return {
        lang,
        ok: false,
        errors: [`Surgical patch semantic mismatch after write preview: ${mergedDiff}`],
      };
    }
  }
  return {
    lang,
    ok: true,
    existingFlat,
    crowdinFlat,
    mergedFlat,
    patch,
    outPath: filePath,
    crowdinKeys: Object.keys(crowdinFlat).length,
    preservedKeys: Object.keys(existingFlat).length,
    mergedKeys: Object.keys(mergedFlat).length,
    changedKeys: patch.changes.length,
  };
}

function loadUiObjectFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const obj = ctx.window.LANGUAGE_UI_STRINGS;
  if (!obj || typeof obj !== "object") {
    throw new Error("Missing window.LANGUAGE_UI_STRINGS in patched code");
  }
  return obj;
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
  getLvSourceKeySet,
  validateCrowdinKeySet,
  applySurgicalCrowdinPatch,
  locateStringLiteralAtPath,
  prepareUiCrowdinImport,
  loadUiObjectFromCode,
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
