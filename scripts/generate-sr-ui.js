#!/usr/bin/env node
/**
 * Generate Serbian UI strings from Bosnian UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll, loadCache, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".sr-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "sr"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "bs", "sr", {
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
  const bsPath = path.join(ROOT, "languages/bs/ui.js");
  const srDir = path.join(ROOT, "languages/sr");
  const srPath = path.join(srDir, "ui.js");

  const code = fs.readFileSync(bsPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const bsUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(bsUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const srUi = applyTranslations(bsUi, map);
  srUi.__langCode = "sr";
  if (srUi.app) {
    srUi.app.title = "Nemački • SR-DE";
    srUi.app.subtitle = "Vaš inteligentni vodič za nemački po nivoima";
    srUi.app.shellLabel = "Nemačko-srpske kartice";
  }
  if (srUi.splash) {
    srUi.splash.title = "Nemački";
    srUi.splash.subtitle = "Uči nemački";
  }
  if (srUi.languageSelect) {
    srUi.languageSelect.title = "Izaberite jezik";
    srUi.languageSelect.footer = "Uči nemački";
  }
  if (srUi.study?.table) {
    srUi.study.table.native = "SR";
  }
  if (srUi.spelling) {
    srUi.spelling.writeNative = "Piši srpski";
    srUi.spelling.writeGerman = "Piši nemački";
  }

  fs.mkdirSync(srDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(srUi, null, 2)};\n`;
  fs.writeFileSync(srPath, output, "utf8");
  console.log(`Written ${srPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
