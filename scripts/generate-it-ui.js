#!/usr/bin/env node
/**
 * Generate Italian UI strings from French UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".it-fr-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "it"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "fr", "it", {
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
  const frPath = path.join(ROOT, "languages/fr/ui.js");
  const itDir = path.join(ROOT, "languages/it");
  const itPath = path.join(itDir, "ui.js");

  const code = fs.readFileSync(frPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const frUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(frUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const itUi = applyTranslations(frUi, map);
  itUi.__langCode = "it";
  if (itUi.app) {
    itUi.app.title = "Tedesco • IT-DE";
    itUi.app.subtitle = "La tua guida intelligente per imparare il tedesco per livello";
    itUi.app.shellLabel = "Carte Tedesco–Italiano";
  }
  if (itUi.splash) {
    itUi.splash.title = "Tedesco";
    itUi.splash.subtitle = "Imparare il tedesco";
  }
  if (itUi.languageSelect) {
    itUi.languageSelect.title = "Scegli la lingua";
    itUi.languageSelect.footer = "Imparare il tedesco";
  }
  if (itUi.study?.table) {
    itUi.study.table.native = "IT";
  }
  if (itUi.spelling) {
    itUi.spelling.writeNative = "Scrivere in italiano";
    itUi.spelling.writeGerman = "Scrivere in tedesco";
  }

  fs.mkdirSync(itDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(itUi, null, 2)};\n`;
  fs.writeFileSync(itPath, output, "utf8");
  console.log(`Written ${itPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
