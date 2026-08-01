#!/usr/bin/env node
/**
 * Generate Slovenian UI strings from Macedonian UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll, loadCache, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".sl-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "sl"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "mk", "sl", {
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
  const mkPath = path.join(ROOT, "languages/mk/ui.js");
  const slDir = path.join(ROOT, "languages/sl");
  const slPath = path.join(slDir, "ui.js");

  const code = fs.readFileSync(mkPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const mkUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(mkUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const slUi = applyTranslations(mkUi, map);
  slUi.__langCode = "sl";
  if (slUi.app) {
    slUi.app.title = "Nemščina • SL-DE";
    slUi.app.subtitle = "Vaš inteligentni vodnik za nemščino po ravneh";
    slUi.app.shellLabel = "Nemško-slovenske kartice";
  }
  if (slUi.splash) {
    slUi.splash.title = "Nemščina";
    slUi.splash.subtitle = "Uči nemščino";
  }
  if (slUi.languageSelect) {
    slUi.languageSelect.title = "Izberite jezik";
    slUi.languageSelect.footer = "Uči nemščino";
  }
  if (slUi.study?.table) {
    slUi.study.table.native = "SL";
  }
  if (slUi.spelling) {
    slUi.spelling.writeNative = "Piši slovensko";
    slUi.spelling.writeGerman = "Piši nemško";
  }

  fs.mkdirSync(slDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(slUi, null, 2)};\n`;
  fs.writeFileSync(slPath, output, "utf8");
  console.log(`Written ${slPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
