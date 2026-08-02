#!/usr/bin/env node
/**
 * Generate Czech UI strings from Slovak UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".cs-ui-translation-cache.json");

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
      if (k === "__langCode") { out[k] = "cs"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const map = await translateAll(strings, "sk", "cs", {
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
  const skPath = path.join(ROOT, "languages/sk/ui.js");
  const csDir = path.join(ROOT, "languages/cs");
  const csPath = path.join(csDir, "ui.js");

  const code = fs.readFileSync(skPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const skUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(skUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings`);

  const translationMap = await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const csUi = applyTranslations(skUi, map);
  csUi.__langCode = "cs";
  if (csUi.app) {
    csUi.app.title = "Němčina • CS-DE";
    csUi.app.subtitle = "Váš inteligentní průvodce němčinou podle úrovní";
    csUi.app.shellLabel = "Německo-české kartičky";
  }
  if (csUi.splash) {
    csUi.splash.title = "Němčina";
    csUi.splash.subtitle = "Učte se němčinu";
  }
  if (csUi.languageSelect) {
    csUi.languageSelect.title = "Vyberte jazyk";
    csUi.languageSelect.footer = "Učte se němčinu";
  }
  if (csUi.study?.table) {
    csUi.study.table.native = "CS";
  }
  if (csUi.spelling) {
    csUi.spelling.writeNative = "Pište česky";
    csUi.spelling.writeGerman = "Pište německy";
  }

  fs.mkdirSync(csDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(csUi, null, 2)};\n`;
  fs.writeFileSync(csPath, output, "utf8");
  console.log(`Written ${csPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
