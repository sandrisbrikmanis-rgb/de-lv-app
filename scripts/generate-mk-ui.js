#!/usr/bin/env node
/**
 * Generate Macedonian UI strings from Bulgarian UI template.
 * Translates only UI text; preserves structure and placeholders.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { translate } = require("google-translate-api-x");
const { ROOT } = require("./lib/audit-common");

const CACHE_PATH = path.join(ROOT, "scripts", ".mk-ui-translation-cache.json");
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
      if (k === "__langCode") { out[k] = "mk"; continue; }
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
      const res = await translate(chunk, { from: "bg", to: "mk", forceBatch: true });
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
          const res = await translate(src, { from: "bg", to: "mk" });
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
  const bgPath = path.join(ROOT, "languages/bg/ui.js");
  const mkDir = path.join(ROOT, "languages/mk");
  const mkPath = path.join(mkDir, "ui.js");

  const code = fs.readFileSync(bgPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const bgUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(bgUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings (${Object.keys(cache).length} cached)`);

  await translateBatch(unique);
  const map = {};
  unique.forEach((s) => { map[s] = cache[s] || s; });

  const mkUi = applyTranslations(bgUi, map);
  mkUi.__langCode = "mk";
  if (mkUi.app) {
    mkUi.app.title = "Германски јазик • MK-DE";
    mkUi.app.subtitle = "Вашиот интелигентен водич за германски јазик по нивоа";
    mkUi.app.shellLabel = "Германско-македонски картички";
  }
  if (mkUi.splash) {
    mkUi.splash.title = "Германски јазик";
    mkUi.splash.subtitle = "Учи германски";
  }
  if (mkUi.languageSelect) {
    mkUi.languageSelect.title = "Изберете јазик";
    mkUi.languageSelect.footer = "Учи германски";
  }
  if (mkUi.study?.table) {
    mkUi.study.table.native = "MK";
  }
  if (mkUi.spelling) {
    mkUi.spelling.writeNative = "Пиши на македонски";
    mkUi.spelling.writeGerman = "Пиши на германски";
  }

  fs.mkdirSync(mkDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(mkUi, null, 2)};\n`;
  fs.writeFileSync(mkPath, output, "utf8");
  saveCache();
  console.log(`Written ${mkPath}`);
}

main().catch((err) => { console.error(err); saveCache(); process.exit(1); });
