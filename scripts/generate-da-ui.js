#!/usr/bin/env node
/**
 * Generate Danish UI strings from Swedish UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".da-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "da"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "sv", "da", {
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
  const daDir = path.join(ROOT, "languages/da");
  const daPath = path.join(daDir, "ui.js");

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

  const daUi = applyTranslations(svUi, map);
  daUi.__langCode = "da";
  if (daUi.app) {
    daUi.app.title = "Tysk • DA-DE";
    daUi.app.subtitle = "Din smarte tysklæringsguide efter niveauer";
    daUi.app.shellLabel = "Tysk–dansk kort";
  }
  if (daUi.splash) {
    daUi.splash.title = "Tysk";
    daUi.splash.subtitle = "Lær tysk";
  }
  if (daUi.languageSelect) {
    daUi.languageSelect.title = "Vælg sprog";
    daUi.languageSelect.footer = "Lær tysk";
  }
  if (daUi.study?.table) {
    daUi.study.table.native = "DA";
  }
  if (daUi.spelling) {
    daUi.spelling.writeNative = "Skriv på dansk";
    daUi.spelling.writeGerman = "Skriv på tysk";
  }

  fs.mkdirSync(daDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(daUi, null, 2)};\n`;
  fs.writeFileSync(daPath, output, "utf8");
  console.log(`Written ${daPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
