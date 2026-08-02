#!/usr/bin/env node
/**
 * Generate Swedish UI strings from Finnish UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".sv-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "sv"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "fi", "sv", {
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
  const fiPath = path.join(ROOT, "languages/fi/ui.js");
  const svDir = path.join(ROOT, "languages/sv");
  const svPath = path.join(svDir, "ui.js");

  const code = fs.readFileSync(fiPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const fiUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(fiUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const svUi = applyTranslations(fiUi, map);
  svUi.__langCode = "sv";
  if (svUi.app) {
    svUi.app.title = "Tyska • SV-DE";
    svUi.app.subtitle = "Din smarta lärguide för tyska efter nivåer";
    svUi.app.shellLabel = "Tyska–svenska kort";
  }
  if (svUi.splash) {
    svUi.splash.title = "Tyska";
    svUi.splash.subtitle = "Lär dig tyska";
  }
  if (svUi.languageSelect) {
    svUi.languageSelect.title = "Välj språk";
    svUi.languageSelect.footer = "Lär dig tyska";
  }
  if (svUi.study?.table) {
    svUi.study.table.native = "SV";
  }
  if (svUi.spelling) {
    svUi.spelling.writeNative = "Skriv på svenska";
    svUi.spelling.writeGerman = "Skriv på tyska";
  }

  fs.mkdirSync(svDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(svUi, null, 2)};\n`;
  fs.writeFileSync(svPath, output, "utf8");
  console.log(`Written ${svPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
