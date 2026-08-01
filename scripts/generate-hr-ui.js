#!/usr/bin/env node
/**
 * Generate Croatian UI strings from Serbian UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".hr-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "hr"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "sr", "hr", {
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
  const srPath = path.join(ROOT, "languages/sr/ui.js");
  const hrDir = path.join(ROOT, "languages/hr");
  const hrPath = path.join(hrDir, "ui.js");

  const code = fs.readFileSync(srPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const srUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(srUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const hrUi = applyTranslations(srUi, map);
  hrUi.__langCode = "hr";
  if (hrUi.app) {
    hrUi.app.title = "Njemački • HR-DE";
    hrUi.app.subtitle = "Vaš inteligentni vodič za njemački po razinama";
    hrUi.app.shellLabel = "Njemačko-hrvatske kartice";
  }
  if (hrUi.splash) {
    hrUi.splash.title = "Njemački";
    hrUi.splash.subtitle = "Uči njemački";
  }
  if (hrUi.languageSelect) {
    hrUi.languageSelect.title = "Odaberite jezik";
    hrUi.languageSelect.footer = "Uči njemački";
  }
  if (hrUi.study?.table) {
    hrUi.study.table.native = "HR";
  }
  if (hrUi.spelling) {
    hrUi.spelling.writeNative = "Piši hrvatski";
    hrUi.spelling.writeGerman = "Piši njemački";
  }

  fs.mkdirSync(hrDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(hrUi, null, 2)};\n`;
  fs.writeFileSync(hrPath, output, "utf8");
  console.log(`Written ${hrPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
