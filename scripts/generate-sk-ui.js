#!/usr/bin/env node
/**
 * Generate Slovak UI strings from Polish UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".sk-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "sk"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "pl", "sk", {
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
  const plPath = path.join(ROOT, "languages/pl/ui.js");
  const skDir = path.join(ROOT, "languages/sk");
  const skPath = path.join(skDir, "ui.js");

  const code = fs.readFileSync(plPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const plUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(plUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const skUi = applyTranslations(plUi, map);
  skUi.__langCode = "sk";
  if (skUi.app) {
    skUi.app.title = "Nemčina • SK-DE";
    skUi.app.subtitle = "Váš inteligentný sprievodca nemčinou podľa úrovní";
    skUi.app.shellLabel = "Nemecko-slovenské kartičky";
  }
  if (skUi.splash) {
    skUi.splash.title = "Nemčina";
    skUi.splash.subtitle = "Učte sa nemčinu";
  }
  if (skUi.languageSelect) {
    skUi.languageSelect.title = "Vyberte jazyk";
    skUi.languageSelect.footer = "Učte sa nemčinu";
  }
  if (skUi.study?.table) {
    skUi.study.table.native = "SK";
  }
  if (skUi.spelling) {
    skUi.spelling.writeNative = "Píšte po slovensky";
    skUi.spelling.writeGerman = "Píšte po nemecky";
  }

  fs.mkdirSync(skDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(skUi, null, 2)};\n`;
  fs.writeFileSync(skPath, output, "utf8");
  console.log(`Written ${skPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
