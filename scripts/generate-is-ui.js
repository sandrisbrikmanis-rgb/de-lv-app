#!/usr/bin/env node
/**
 * Generate Icelandic UI strings from Norwegian Bokmål UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".is-ui-translation-cache.json");

function collectStrings(obj, out) {
  if (obj === null || obj === undefined) return;
  if (typeof obj === "string") {
    if (obj.trim() && !obj.startsWith("__")) out.add(obj);
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v) => collectStrings(v, out));
    return;
  }
  if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "__langCode") continue;
      collectStrings(v, out);
    }
  }
}

function applyTranslations(obj, map) {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "string") return map[obj] ?? obj;
  if (Array.isArray(obj)) return obj.map((v) => applyTranslations(v, map));
  if (typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (k === "__langCode") { out[k] = "is"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "nb", "is", {
    cachePath: CACHE_PATH,
    delayMs: 80,
    concurrency: 10,
    onProgress: (n, remaining) => {
      if (n % 50 === 0) process.stdout.write(`  UI translated ${n} (~${remaining} remaining)\n`);
    },
  });
  return map;
}

async function main() {
  const nbPath = path.join(ROOT, "languages/nb/ui.js");
  const isDir = path.join(ROOT, "languages/is");
  const isPath = path.join(isDir, "ui.js");

  const code = fs.readFileSync(nbPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const nbUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(nbUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const isUi = applyTranslations(nbUi, map);
  isUi.__langCode = "is";
  if (isUi.app) {
    isUi.app.title = "Þýska • IS-DE";
    isUi.app.subtitle = "Snjalla þýskunámsleiðbeiningin þín eftir stigum";
    isUi.app.shellLabel = "Þýsk–íslensk kort";
  }
  if (isUi.splash) {
    isUi.splash.title = "Þýska";
    isUi.splash.subtitle = "Lærðu þýsku";
  }
  if (isUi.languageSelect) {
    isUi.languageSelect.title = "Veldu tungumál";
    isUi.languageSelect.footer = "Lærðu þýsku";
  }
  if (isUi.study?.table) {
    isUi.study.table.native = "IS";
  }
  if (isUi.spelling) {
    isUi.spelling.writeNative = "Skrifaðu á íslensku";
    isUi.spelling.writeGerman = "Skrifaðu á þýsku";
  }

  fs.mkdirSync(isDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(isUi, null, 2)};\n`;
  fs.writeFileSync(isPath, output, "utf8");
  console.log(`Written ${isPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
