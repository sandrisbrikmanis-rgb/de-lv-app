#!/usr/bin/env node
/**
 * Generate Bosnian UI strings from Latvian UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".bs-ui-lv-translation-cache.json");

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

async function main() {
  const lvPath = path.join(ROOT, "languages/lv/ui.js");
  const bsDir = path.join(ROOT, "languages/bs");
  const bsPath = path.join(bsDir, "ui.js");

  const code = fs.readFileSync(lvPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const lvUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(lvUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings LV → BS`);

  const translationMap = await translateAll(unique, "lv", "bs", {
    cachePath: CACHE_PATH,
    delayMs: 50,
    concurrency: 20,
    onProgress: (n, remaining) => {
      if (n % 50 === 0) process.stdout.write(`  UI translated ${n} (~${remaining} remaining)\n`);
    },
  });
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const bsUi = applyTranslations(lvUi, map);
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
  if (bsUi.direction) {
    bsUi.direction.deToNative = "🔄 DE ➔ {code}";
    bsUi.direction.nativeToDe = "🔄 {code} ➔ DE";
  }

  fs.mkdirSync(bsDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(bsUi, null, 2)};\n`;
  fs.writeFileSync(bsPath, output, "utf8");
  console.log(`Written ${bsPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
