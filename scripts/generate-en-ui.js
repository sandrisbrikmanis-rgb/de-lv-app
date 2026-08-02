#!/usr/bin/env node
/**
 * Generate British English UI strings from Latvian UI template.
 * Uses Google gtx endpoint for LV → en-GB translation.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, saveCache, cacheKey, sleep } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".en-ui-translation-cache.json");

const BRITISH_SPELLINGS = [
  [/(\w)ize\b/gi, "$1ise"],
  [/\bcolor\b/gi, "colour"],
  [/\bfavor\b/gi, "favour"],
  [/\bfavorite\b/gi, "favourite"],
  [/\bbehavior\b/gi, "behaviour"],
  [/\bcenter\b/gi, "centre"],
  [/\banalyze\b/gi, "analyse"],
  [/\bprogram\b/gi, "programme"],
  [/\btraveling\b/gi, "travelling"],
  [/\btraveled\b/gi, "travelled"],
  [/\bgray\b/gi, "grey"],
];

function toBritishEnglish(text) {
  if (!text || typeof text !== "string") return text;
  let out = text;
  for (const [pattern, replacement] of BRITISH_SPELLINGS) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

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
  unique.forEach((s) => { map[s] = toBritishEnglish(cache[cacheKey(from, to, s)] || s); });
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
      if (k === "__langCode") { out[k] = "en"; continue; }
      out[k] = applyTranslations(v, map);
    }
    return out;
  }
  return obj;
}

async function main() {
  const lvPath = path.join(ROOT, "languages/lv/ui.js");
  const enDir = path.join(ROOT, "languages/en");
  const enPath = path.join(enDir, "ui.js");

  const code = fs.readFileSync(lvPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const lvUi = ctx.window.LANGUAGE_UI_STRINGS;

  const strings = new Set();
  collectStrings(lvUi, strings);
  const unique = [...strings].filter((s) => s && s.trim());
  console.log(`Translating ${unique.length} UI strings LV → en-GB`);

  const translationMap = await translateAllGtx(unique, "lv", "en-GB", {
    cachePath: CACHE_PATH,
    delayMs: 100,
    concurrency: 8,
    onProgress: (n, remaining) => {
      if (n % 25 === 0) process.stdout.write(`  UI translated ${n} (~${remaining} remaining)\n`);
    },
  });
  const map = {};
  unique.forEach((s) => { map[s] = translationMap[s] || s; });

  const enUi = applyTranslations(lvUi, map);
  enUi.__langCode = "en";
  if (enUi.app) {
    enUi.app.title = "German • EN-DE";
    enUi.app.subtitle = "Your smart German learning guide by level";
    enUi.app.shellLabel = "German–English cards";
  }
  if (enUi.splash) {
    enUi.splash.title = "German";
    enUi.splash.subtitle = "Learn German";
  }
  if (enUi.languageSelect) {
    enUi.languageSelect.title = "Choose language";
    enUi.languageSelect.footer = "Learn German";
  }
  if (enUi.study?.table) {
    enUi.study.table.native = "EN";
  }
  if (enUi.spelling) {
    enUi.spelling.writeNative = "Write in English";
    enUi.spelling.writeGerman = "Write in German";
  }

  fs.mkdirSync(enDir, { recursive: true });
  const output = `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(enUi, null, 2)};\n`;
  fs.writeFileSync(enPath, output, "utf8");
  console.log(`Written ${enPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
