#!/usr/bin/env node
/**
 * Generate Norwegian Nynorsk UI strings from Bokmål UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".nn-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "nn"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "no", "nn", {
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
  const nbPath = path.join(ROOT, "languages/nb/ui.js");
  const nnDir = path.join(ROOT, "languages/nn");
  const nnPath = path.join(nnDir, "ui.js");

  const code = fs.readFileSync(nbPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const nbUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(nbUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const nnUi = applyTranslations(nbUi, map);
  nnUi.__langCode = "nn";
  if (nnUi.app) {
    nnUi.app.title = "Tysk • NN-DE";
    nnUi.app.subtitle = "Den smarte læreguiden din for tysk etter nivå";
    nnUi.app.shellLabel = "Tysk–nynorsk kort";
  }
  if (nnUi.splash) {
    nnUi.splash.title = "Tysk";
    nnUi.splash.subtitle = "Lær tysk";
  }
  if (nnUi.languageSelect) {
    nnUi.languageSelect.title = "Vel språk";
    nnUi.languageSelect.footer = "Lær tysk";
  }
  if (nnUi.study?.table) {
    nnUi.study.table.native = "NN";
  }
  if (nnUi.spelling) {
    nnUi.spelling.writeNative = "Skriv på nynorsk";
    nnUi.spelling.writeGerman = "Skriv på tysk";
  }

  fs.mkdirSync(nnDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(nnUi, null, 2)};\n`;
  fs.writeFileSync(nnPath, output, "utf8");
  console.log(`Written ${nnPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
