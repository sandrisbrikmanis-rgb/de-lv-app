#!/usr/bin/env node
/**
 * Generate British Magyar UI strings from Latvian UI template.
 * Uses Google gtx endpoint for LV → hu translation.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, cacheKey, sleep } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".hu-ui-translation-cache.json");

async function translateGtx(text, from, to) {
  const trimmed = text.trim();
  if (!trimmed || from === to) return text;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(trimmed)}`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`gtx HTTP ${res.status}`);
  const data = await res.json();
  return data?.[0]?.map((seg) => seg[0]).join("") || trimmed;
}

async function translateAllGtx(strings, from, to, options = {}) {
  const { cachePath, delayMs = 120, concurrency = 6, onProgress } = options;
  const cache = loadCache(cachePath);
  const unique = [...new Set(strings.filter((s) => s && s.trim()))];
  const pending = unique.filter((s) => !cache[cacheKey(from, to, s)]);
  let done = 0;

  async function worker(queue) {
    while (queue.length) {
      const src = queue.shift();
      if (!src) break;
      const key = cacheKey(from, to, src);
      if (!cache[key]) {
        try {
          cache[key] = await translateGtx(src, from, to);
          if (cachePath) saveCache(cachePath, cache);
        } catch {
          cache[key] = src;
        }
      }
      done++;
      if (onProgress && done % 25 === 0) onProgress(done, pending.length - done);
      await sleep(delayMs);
    }
  }

  const queue = [...pending];
  const workers = Array.from({ length: Math.min(concurrency, queue.length || 1) }, () => worker(queue));
  await Promise.all(workers);

  const map = {};
  unique.forEach((s) => { map[s] = cache[cacheKey(from, to, s)] || s; });
  return map;
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
      if (k === "__langCode") { out[k] = "hu"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function main() {
  const lvPath = path.join(ROOT, "languages/lv/ui.js");
  const huDir = path.join(ROOT, "languages/hu");
  const huPath = path.join(huDir, "ui.js");

  const code = fs.readFileSync(lvPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const lvUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(lvUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings LV → hu`);

  const translationMap = await translateAllGtx(unique, "lv", "hu", {
    cachePath: CACHE_PATH,
    delayMs: 100,
    concurrency: 8,
    onProgress: (n, remaining) => {
      if (n % 25 === 0) process.stdout.write(`  UI translated ${n} (~${remaining} remaining)\n`);
    },
  });
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const huUi = applyTranslations(lvUi, map);
  huUi.__langCode = "hu";
  if (huUi.app) {
    huUi.app.title = "Német • HU-DE";
    huUi.app.subtitle = "Az intelligens német nyelvtanulási útmutatód szintenként";
    huUi.app.shellLabel = "Német–magyar kártyák";
  }
  if (huUi.splash) {
    huUi.splash.title = "Német";
    huUi.splash.subtitle = "Német nyelv tanulása";
  }
  if (huUi.languageSelect) {
    huUi.languageSelect.title = "Válassz nyelvet";
    huUi.languageSelect.footer = "Német nyelv tanulása";
  }
  if (huUi.study?.table) {
    huUi.study.table.native = "HU";
  }
  if (huUi.spelling) {
    huUi.spelling.writeNative = "Írj magyarul";
    huUi.spelling.writeGerman = "Írj németül";
  }

  fs.mkdirSync(huDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(huUi, null, 2)};\n`;
  fs.writeFileSync(huPath, output, "utf8");
  console.log(`Written ${huPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
