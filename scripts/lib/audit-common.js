#!/usr/bin/env node
/**
 * Shared helpers for the generalized, language-parametrized audit/validate
 * scripts (see docs_and_rules/LANGUAGE_AUDIT_STANDARD.md §5).
 *
 * All native-language data lives at:
 *   - data/{lang}/*.js        for lang !== "lv"
 *   - data/*.js                for lang === "lv" (LV is the root/original data)
 * and is mirrored under www/ the same way.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..", "..");

const KNOWN_LANGUAGES = ["lv", "lt", "ru", "pl", "uk", "et", "ro", "bg", "gr"];

const DATA_FILE_NAMES = [
  "a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js",
  "sentences.js", "verbs.js", "courseLessons.js",
  "dialogueIdMap.js", "nounArticles.js"
];

/** Parses `--lang=xx` (or `--lang xx`) from argv. Falls back to `defaultLang`. */
function parseLangArg(defaultLang = "lt") {
  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith("--lang=")) return arg.slice("--lang=".length).trim();
    if (arg === "--lang") return (argv[i + 1] || defaultLang).trim();
  }
  return defaultLang;
}

/** Returns the data directory for a native language: "data" for lv, "data/{lang}" otherwise. */
function dataDir(lang) {
  return lang === "lv" ? "data" : `data/${lang}`;
}

/** Returns the on-disk path (relative to repo root) for a dataset file of a given language. */
function dataPath(lang, fileName, { www = false } = {}) {
  const prefix = www ? "www/" : "";
  return `${prefix}${dataDir(lang)}/${fileName}`;
}

function fileExists(relPath) {
  return fs.existsSync(path.join(ROOT, relPath));
}

function readFile(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), "utf8");
}

/**
 * Loads a `window.X = [...]` (or `const X = [...]; window.X = X;`) data file
 * and returns the first array-valued global it defines. Works for a1-c2,
 * sentences.js, verbs.js.
 */
function loadArrayDataset(relPath) {
  const code = readFile(relPath);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? ctx.window[key] : null;
}

/** Loads any window.* globals from a data file (for courseLessons.js style multi-export files). */
function loadWindowGlobals(relPath) {
  const code = readFile(relPath);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

/** Capitalizes the first letter, e.g. "lt" -> "Lt". Used for suffix-based global names (TrainingCardsLt). */
function langSuffix(lang) {
  return lang.charAt(0).toUpperCase() + lang.slice(1);
}

/** Compares a root data file against its www/ mirror; returns true if identical (or both missing). */
function isSyncedWithWww(relPath) {
  const rootFull = path.join(ROOT, relPath);
  const wwwFull = path.join(ROOT, "www", relPath);
  const rootExists = fs.existsSync(rootFull);
  const wwwExists = fs.existsSync(wwwFull);
  if (!rootExists && !wwwExists) return true;
  if (rootExists !== wwwExists) return false;
  return fs.readFileSync(rootFull, "utf8") === fs.readFileSync(wwwFull, "utf8");
}

module.exports = {
  ROOT,
  KNOWN_LANGUAGES,
  DATA_FILE_NAMES,
  parseLangArg,
  dataDir,
  dataPath,
  fileExists,
  readFile,
  loadArrayDataset,
  loadWindowGlobals,
  langSuffix,
  isSyncedWithWww
};
