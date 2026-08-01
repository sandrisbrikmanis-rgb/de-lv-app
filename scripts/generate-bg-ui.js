#!/usr/bin/env node
/**
 * Generate Bulgarian UI strings from Romanian UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { translate } = require("google-translate-api-x");
const { ROOT } = require("./lib/audit-common");

const CACHE_PATH = path.join(ROOT, "scripts", ".bg-ui-translation-cache.json");
const BATCH_SIZE = 30;

let cache = {};
if (fs.existsSync(CACHE_PATH)) {
  try { cache = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")); } catch { cache = {}; }
}

function saveCache() {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

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
      if (k === "__langCode") { out[k] = "bg"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function translateBatch(strings) {
  const pending = strings.filter((s) => !cache[s]);
  for (let i = 0; i < pending.length; i += BATCH_SIZE) {
    const chunk = pending.slice(i, i + BATCH_SIZE);
    try {
      const res = await translate(chunk, { from: "ro", to: "bg", forceBatch: true });
      const results = Array.isArray(res) ? res : [res];
      chunk.forEach((src, idx) => {
        cache[src] = results[idx]?.text || src;
      });
      saveCache();
      process.stdout.write(`  UI batch ${Math.min(i + BATCH_SIZE, pending.length)}/${pending.length}\n`);
      await sleep(100);
    } catch (err) {
      console.error(`Batch failed: ${err.message}`);
      for (const src of chunk) {
        try {
          const res = await translate(src, { from: "ro", to: "bg" });
          cache[src] = res.text;
        } catch {
          cache[src] = src;
        }
        await sleep(80);
      }
      saveCache();
    }
  }
}

async function main() {
  const roPath = path.join(ROOT, "languages/ro/ui.js");
  const bgDir = path.join(ROOT, "languages/bg");
  const bgPath = path.join(bgDir, "ui.js");

  const code = fs.readFileSync(roPath, "utf8");
  const ctx = { LANGUAGE_UI_STRINGS: null };
  vm.createContext(ctx);
  vm.runInContext(code.replace("window.LANGUAGE_UI_STRINGS", "LANGUAGE_UI_STRINGS"), ctx);
  const roUi = ctx.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(roUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings (${Object.keys(cache).length} cached)`);

  await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = cache[s] || s; });

  const bgUi = applyTranslations(roUi, map);
  bgUi.__langCode = "bg";
  if (bgUi.app) {
    bgUi.app.title = "Немски език • BG-DE";
    bgUi.app.subtitle = "Вашият интелигентен наръчник за немски език по нива";
    bgUi.app.shellLabel = "Немско-български карти";
  }
  if (bgUi.splash) {
    bgUi.splash.title = "Немски език";
    bgUi.splash.subtitle = "Учи немски";
  }
  if (bgUi.languageSelect) {
    bgUi.languageSelect.title = "Изберете език";
    bgUi.languageSelect.footer = "Учи немски";
  }
  if (bgUi.study?.table) {
    bgUi.study.table.native = "BG";
  }
  if (bgUi.spelling) {
    bgUi.spelling.writeNative = "Пиши на български";
    bgUi.spelling.writeGerman = "Пиши на немски";
  }

  fs.mkdirSync(bgDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(bgUi, null, 2)};\n`;
  fs.writeFileSync(bgPath, output, "utf8");
  saveCache();
  console.log(`Written ${bgPath}`);
}

main().catch((err) => { console.error(err); saveCache(); process.exit(1); });
