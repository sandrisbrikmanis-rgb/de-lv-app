#!/usr/bin/env node
/**
 * Generate Finnish UI strings from Estonian UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".fi-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "fi"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "et", "fi", {
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
  const etPath = path.join(ROOT, "languages/et/ui.js");
  const fiDir = path.join(ROOT, "languages/fi");
  const fiPath = path.join(fiDir, "ui.js");

  const code = fs.readFileSync(etPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const etUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(etUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const fiUi = applyTranslations(etUi, map);
  fiUi.__langCode = "fi";
  if (fiUi.app) {
    fiUi.app.title = "Saksa • FI-DE";
    fiUi.app.subtitle = "Älykäs oppimisoppaasi saksan kieleen tasojen mukaan";
    fiUi.app.shellLabel = "Saksan–suomen kortit";
  }
  if (fiUi.splash) {
    fiUi.splash.title = "Saksa";
    fiUi.splash.subtitle = "Opi saksaa";
  }
  if (fiUi.languageSelect) {
    fiUi.languageSelect.title = "Valitse kieli";
    fiUi.languageSelect.footer = "Opi saksaa";
  }
  if (fiUi.study?.table) {
    fiUi.study.table.native = "FI";
  }
  if (fiUi.spelling) {
    fiUi.spelling.writeNative = "Kirjoita suomeksi";
    fiUi.spelling.writeGerman = "Kirjoita saksaksi";
  }

  fs.mkdirSync(fiDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(fiUi, null, 2)};\n`;
  fs.writeFileSync(fiPath, output, "utf8");
  console.log(`Written ${fiPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
