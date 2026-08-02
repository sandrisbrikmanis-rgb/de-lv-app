#!/usr/bin/env node
/**
 * Generate Norwegian Bokmål UI strings from Swedish UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".nb-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "nb"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "sv", "no", {
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
  const svPath = path.join(ROOT, "languages/sv/ui.js");
  const nbDir = path.join(ROOT, "languages/nb");
  const nbPath = path.join(nbDir, "ui.js");

  const code = fs.readFileSync(svPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const svUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(svUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const nbUi = applyTranslations(svUi, map);
  nbUi.__langCode = "nb";
  if (nbUi.app) {
    nbUi.app.title = "Tysk • NB-DE";
    nbUi.app.subtitle = "Din smarte læreguide for tysk etter nivåer";
    nbUi.app.shellLabel = "Tysk–norsk kort";
  }
  if (nbUi.splash) {
    nbUi.splash.title = "Tysk";
    nbUi.splash.subtitle = "Lær tysk";
  }
  if (nbUi.languageSelect) {
    nbUi.languageSelect.title = "Velg språk";
    nbUi.languageSelect.footer = "Lær tysk";
  }
  if (nbUi.study?.table) {
    nbUi.study.table.native = "NB";
  }
  if (nbUi.spelling) {
    nbUi.spelling.writeNative = "Skriv på norsk";
    nbUi.spelling.writeGerman = "Skriv på tysk";
  }

  fs.mkdirSync(nbDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(nbUi, null, 2)};\n`;
  fs.writeFileSync(nbPath, output, "utf8");
  console.log(`Written ${nbPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
