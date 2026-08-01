#!/usr/bin/env node
/**
 * Generate Turkish UI strings from Polish UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".tr-ui-translation-cache.json");
const FROM_LANG = "pl";
const TO_LANG = "tr";

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
      if (k === "__langCode") { out[k] = "tr"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function main() {
  const plPath = path.join(ROOT, "languages/pl/ui.js");
  const trDir = path.join(ROOT, "languages/tr");
  const trPath = path.join(trDir, "ui.js");

  const code = fs.readFileSync(plPath, "utf8");
  const ctx = { LANGUAGE_UI_STRINGS: null };
  vm.createContext(ctx);
  vm.runInContext(code.replace("window.LANGUAGE_UI_STRINGS", "LANGUAGE_UI_STRINGS"), ctx);
  const plUi = ctx.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(plUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const map = await translateAll(unique, FROM_LANG, TO_LANG, {
    cachePath: CACHE_PATH,
    delayMs: 350,
    onProgress: (n) => {
      if (n % 20 === 0) process.stdout.write(`  UI translated ${n}\n`);
    },
  });

  const trUi = applyTranslations(plUi, map);
  trUi.__langCode = "tr";
  if (trUi.app) {
    trUi.app.title = "Almanca • TR-DE";
    trUi.app.subtitle = "Seviyelere göre akıllı Almanca rehberiniz";
    trUi.app.shellLabel = "Almanca-Türkçe kartlar";
  }
  if (trUi.splash) {
    trUi.splash.title = "Almanca";
    trUi.splash.subtitle = "Almanca öğren";
  }
  if (trUi.languageSelect) {
    trUi.languageSelect.title = "Dil seçin";
    trUi.languageSelect.footer = "Almanca öğren";
  }
  if (trUi.study?.table) {
    trUi.study.table.native = "TR";
  }
  if (trUi.spelling) {
    trUi.spelling.writeNative = "Türkçe yaz";
    trUi.spelling.writeGerman = "Almanca yaz";
  }

  fs.mkdirSync(trDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(trUi, null, 2)};\n`;
  fs.writeFileSync(trPath, output, "utf8");
  console.log(`Written ${trPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
