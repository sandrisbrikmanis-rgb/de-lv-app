#!/usr/bin/env node
/**
 * Regenerate French UI strings from English UI template (audit fix).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".fr-ui-en-translation-cache.json");

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
      if (k === "__langCode") {
        out[k] = "fr";
        continue;
      }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function main() {
  const enPath = path.join(ROOT, "languages/en/ui.js");
  const frDir = path.join(ROOT, "languages/fr");
  const frPath = path.join(frDir, "ui.js");

  const code = fs.readFileSync(enPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const enUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(enUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings EN→FR`);

  const translationMap = await translateAll(unique, "en", "fr", {
    cachePath: CACHE_PATH,
    delayMs: 80,
    concurrency: 10,
    onProgress: (n, remaining) => {
      if (n % 50 === 0) process.stdout.write(`  UI translated ${n} (~${remaining} remaining)\n`);
    },
  });
  const map = {};
  unique.forEach((s) => {
    map[s] = translationMap[s] || s;
  });

  const frUi = applyTranslations(enUi, map);
  frUi.__langCode = "fr";
  if (frUi.app) {
    frUi.app.title = "Allemand • FR-DE";
    frUi.app.subtitle = "Votre guide intelligent d'apprentissage de l'allemand par niveau";
    frUi.app.shellLabel = "Cartes Allemand–Français";
  }
  if (frUi.splash) {
    frUi.splash.title = "Allemand";
    frUi.splash.subtitle = "Apprendre l'allemand";
  }
  if (frUi.languageSelect) {
    frUi.languageSelect.title = "Choisir la langue";
    frUi.languageSelect.footer = "Apprendre l'allemand";
  }
  if (frUi.study?.table) {
    frUi.study.table.native = "FR";
  }
  if (frUi.spelling) {
    frUi.spelling.writeNative = "Écrire en français";
    frUi.spelling.writeGerman = "Écrire en allemand";
  }

  fs.mkdirSync(frDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(frUi, null, 2)};\n`;
  fs.writeFileSync(frPath, output, "utf8");
  console.log(`Written ${frPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
