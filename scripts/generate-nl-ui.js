#!/usr/bin/env node
/**
 * Generate Dutch UI strings from Danish UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".nl-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "nl"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "da", "nl", {
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
  const daPath = path.join(ROOT, "languages/da/ui.js");
  const nlDir = path.join(ROOT, "languages/nl");
  const nlPath = path.join(nlDir, "ui.js");

  const code = fs.readFileSync(daPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const daUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(daUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const nlUi = applyTranslations(daUi, map);
  nlUi.__langCode = "nl";
  if (nlUi.app) {
    nlUi.app.title = "Duits • NL-DE";
    nlUi.app.subtitle = "Jouw slimme Duitse leergids per niveau";
    nlUi.app.shellLabel = "Duits–Nederlands kaarten";
  }
  if (nlUi.splash) {
    nlUi.splash.title = "Duits";
    nlUi.splash.subtitle = "Leer Duits";
  }
  if (nlUi.languageSelect) {
    nlUi.languageSelect.title = "Kies taal";
    nlUi.languageSelect.footer = "Leer Duits";
  }
  if (nlUi.study?.table) {
    nlUi.study.table.native = "NL";
  }
  if (nlUi.spelling) {
    nlUi.spelling.writeNative = "Schrijf in het Nederlands";
    nlUi.spelling.writeGerman = "Schrijf in het Duits";
  }

  fs.mkdirSync(nlDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(nlUi, null, 2)};\n`;
  fs.writeFileSync(nlPath, output, "utf8");
  console.log(`Written ${nlPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
