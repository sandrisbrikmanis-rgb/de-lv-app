#!/usr/bin/env node
/**
 * Generate Bosnian UI strings from Slovenian UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll, loadCache, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".bs-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "bs"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "sl", "bs", {
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
  const slPath = path.join(ROOT, "languages/sl/ui.js");
  const bsDir = path.join(ROOT, "languages/bs");
  const bsPath = path.join(bsDir, "ui.js");

  const code = fs.readFileSync(slPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const slUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(slUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const bsUi = applyTranslations(slUi, map);
  bsUi.__langCode = "bs";
  if (bsUi.app) {
    bsUi.app.title = "Njemački • BS-DE";
    bsUi.app.subtitle = "Vaš inteligentni vodič za njemački po nivoima";
    bsUi.app.shellLabel = "Njemačko-bosanske kartice";
  }
  if (bsUi.splash) {
    bsUi.splash.title = "Njemački";
    bsUi.splash.subtitle = "Uči njemački";
  }
  if (bsUi.languageSelect) {
    bsUi.languageSelect.title = "Izaberite jezik";
    bsUi.languageSelect.footer = "Uči njemački";
  }
  if (bsUi.study?.table) {
    bsUi.study.table.native = "BS";
  }
  if (bsUi.spelling) {
    bsUi.spelling.writeNative = "Piši bosanski";
    bsUi.spelling.writeGerman = "Piši njemački";
  }

  fs.mkdirSync(bsDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(bsUi, null, 2)};\n`;
  fs.writeFileSync(bsPath, output, "utf8");
  console.log(`Written ${bsPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
