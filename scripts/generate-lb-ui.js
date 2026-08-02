#!/usr/bin/env node
/**
 * Generate Luxembourgish UI strings from LV UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".lb-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "lb"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "lv", "lb", {
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
  const lvPath = path.join(ROOT, "languages/lv/ui.js");
  const lbDir = path.join(ROOT, "languages/lb");
  const lbPath = path.join(lbDir, "ui.js");

  const code = fs.readFileSync(lvPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const lvUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(lvUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const lbUi = applyTranslations(lvUi, map);
  lbUi.__langCode = "lb";
  if (lbUi.app) {
    lbUi.app.title = "Däitsch • LB-DE";
    lbUi.app.subtitle = "Däin intelligenten Däitsch-Léierguide no Niveau";
    lbUi.app.shellLabel = "Däitsch–Lëtzebuergesch Kaarten";
  }
  if (lbUi.splash) {
    lbUi.splash.title = "Däitsch";
    lbUi.splash.subtitle = "Léier Däitsch";
  }
  if (lbUi.languageSelect) {
    lbUi.languageSelect.title = "Sprooch wielen";
    lbUi.languageSelect.footer = "Léier Däitsch";
  }
  if (lbUi.study?.table) {
    lbUi.study.table.native = "LB";
  }
  if (lbUi.spelling) {
    lbUi.spelling.writeNative = "Schreift op Lëtzebuergesch";
    lbUi.spelling.writeGerman = "Schreift op Däitsch";
  }

  fs.mkdirSync(lbDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(lbUi, null, 2)};\n`;
  fs.writeFileSync(lbPath, output, "utf8");
  console.log(`Written ${lbPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
