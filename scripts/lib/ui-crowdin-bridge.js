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

const METADATA_KEYS = new Set(["__langCode"]);

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
  METADATA_KEYS,
  abs,
  loadUiObject,
  flattenUiStrings,
  unflattenUiStrings,
  exportUiToCrowdinJson,
  importCrowdinJsonToUi,
  serializeUiJs,
  parseCrowdinJson,
  deepEqualSemantic,
  roundTripUiObject,
  ensureDir,
};
