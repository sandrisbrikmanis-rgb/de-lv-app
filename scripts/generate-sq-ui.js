#!/usr/bin/env node
/**
 * Generate Albanian UI strings from Romanian UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".sq-ui-translation-cache.json");
const FROM_LANG = "ro";
const TO_LANG = "sq";

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
      if (k === "__langCode") { out[k] = "sq"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function main() {
  const roPath = path.join(ROOT, "languages/ro/ui.js");
  const sqDir = path.join(ROOT, "languages/sq");
  const sqPath = path.join(sqDir, "ui.js");

  const code = fs.readFileSync(roPath, "utf8");
  const ctx = { LANGUAGE_UI_STRINGS: null };
  vm.createContext(ctx);
  vm.runInContext(code.replace("window.LANGUAGE_UI_STRINGS", "LANGUAGE_UI_STRINGS"), ctx);
  const roUi = ctx.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(roUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const map = await translateAll(unique, FROM_LANG, TO_LANG, {
    cachePath: CACHE_PATH,
    delayMs: 350,
    onProgress: (n) => {
      if (n % 20 === 0) process.stdout.write(`  UI translated ${n}\n`);
    },
  });

  const sqUi = applyTranslations(roUi, map);
  sqUi.__langCode = "sq";
  if (sqUi.app) {
    sqUi.app.title = "Gjermanisht • SQ-DE";
    sqUi.app.subtitle = "Udhëzuesi juaj inteligjent i gjermanishtes sipas niveleve";
    sqUi.app.shellLabel = "Karta gjermanisht-shqip";
  }
  if (sqUi.splash) {
    sqUi.splash.title = "Gjermanisht";
    sqUi.splash.subtitle = "Mëso gjermanisht";
  }
  if (sqUi.languageSelect) {
    sqUi.languageSelect.title = "Zgjidhni gjuhën";
    sqUi.languageSelect.footer = "Mëso gjermanisht";
  }
  if (sqUi.study?.table) {
    sqUi.study.table.native = "SQ";
  }
  if (sqUi.spelling) {
    sqUi.spelling.writeNative = "Shkruaj në shqip";
    sqUi.spelling.writeGerman = "Shkruaj në gjermanisht";
  }

  fs.mkdirSync(sqDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(sqUi, null, 2)};\n`;
  fs.writeFileSync(sqPath, output, "utf8");
  console.log(`Written ${sqPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
