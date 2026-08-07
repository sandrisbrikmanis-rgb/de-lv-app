#!/usr/bin/env node
/**
 * Generate data/bs/a2.js from LV baseline (data/a2.js) using openai-translate.
 * German fields remain READ-ONLY.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateText } = require("./lib/openai-translate");

const SOURCE_FILE = path.join(ROOT, "data", "a2.js");
const OUT_FILE = path.join(ROOT, "data", "bs", "a2.js");
const WWW_OUT_FILE = path.join(ROOT, "www", "data", "bs", "a2.js");
const GOOGLE_CACHE_PATH = path.join(ROOT, "scripts", ".bs-lv-translation-cache.json");
const CACHE_PATH = path.join(ROOT, "scripts", ".bs-a2-openai-translation-cache.json");
const TARGET_LANGUAGE = "Bosnian";
const CONTEXT =
  "Educational German language learning content for Bosnian native speakers (BS-DE). " +
  "Translate from Latvian to natural Bosnian (Latin script). " +
  "Preserve all German words, HTML tags, placeholders, bullet separators (•), and structure. " +
  "Localize fictional Latvian character names (e.g. Jānis, Pēteris) to natural Bosnian forms while preserving gender, role, and identity.";

const BULLET = "•";
const LV_DIAC = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember", "info",
]);

const NAME_REPLACEMENTS = [
  [/\bPēteris\b/g, "Petar"], [/\bPētera\b/g, "Petra"],
  [/\bJānis\b/g, "Ivan"], [/\bJāņa\b/g, "Ivana"],
  [/\bRūdolfs\b/g, "Rudolf"], [/\bRoberts\b/g, "Robert"],
  [/\bMarija\b/g, "Marija"], [/\bLīga\b/g, "Liga"],
  [/\bAndris\b/g, "Andrija"], [/\bIlze\b/g, "Ilze"],
  [/\blatviešu\b/gi, "bosanski"], [/\bLatvijas\b/g, "Bosne"],
];

function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function seedCacheFromGoogle(cache) {
  if (!fs.existsSync(GOOGLE_CACHE_PATH)) return;
  const google = JSON.parse(fs.readFileSync(GOOGLE_CACHE_PATH, "utf8"));
  for (const [key, value] of Object.entries(google)) {
    if (!key.startsWith("lv|bs|")) continue;
    const source = key.slice("lv|bs|".length);
    if (!cache[source] && typeof value === "string" && value.trim() && !LV_DIAC.test(value)) {
      cache[source] = postProcess(value);
    }
  }
}

function postProcess(text) {
  if (!text || typeof text !== "string") return text;
  let out = text.replace(/;\s*/g, ` ${BULLET} `);
  for (const [from, to] of NAME_REPLACEMENTS) out = out.replace(from, to);
  out = out.replace(/\s+/g, " ").replace(/\s+•\s+/g, ` ${BULLET} `).trim();
  if (out.includes(BULLET)) {
    out = out.split(BULLET).map((part) => {
      const trimmed = part.trim();
      return trimmed ? trimmed.charAt(0).toUpperCase() + trimmed.slice(1) : trimmed;
    }).join(` ${BULLET} `);
  } else if (out.length) {
    out = out.charAt(0).toUpperCase() + out.slice(1);
  }
  return out;
}

function loadA2Words() {
  const code = fs.readFileSync(SOURCE_FILE, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function collectStrings(value, out, parentKey = "") {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    if (NATIVE_KEYS.has(parentKey) && value.trim()) out.add(value);
    return;
  }
  if (Array.isArray(value)) {
    const key = NATIVE_KEYS.has(parentKey) ? parentKey : "";
    value.forEach((item) => collectStrings(item, out, key || parentKey));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (["de", "de_article", "de_plural", "id", "layout", "level"].includes(key)) continue;
      if (key === "sectionAccents" || key === "accents") {
        collectSectionAccents(child, out);
        continue;
      }
      if (typeof child === "string") {
        if (NATIVE_KEYS.has(key) && child.trim()) out.add(child);
        else if (key === "example") {
          if (child.includes("=")) {
            const right = child.split("=").pop().trim();
            if (right) out.add(right);
          }
          const dash = child.match(/\s*[–—-]\s*(.+)$/);
          if (dash && dash[1].trim()) out.add(dash[1].trim());
        }
      } else {
        collectStrings(child, out, key);
      }
    }
  }
}

function shouldTranslateAccentString(text, inDeBranch, inLvBranch = false) {
  if (inDeBranch || !text || !text.trim()) return false;
  if (inLvBranch) return true;
  return LV_DIAC.test(text);
}

function collectSectionAccents(value, out, inDeBranch = false, inLvBranch = false) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    if (shouldTranslateAccentString(value, inDeBranch, inLvBranch)) out.add(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectSectionAccents(item, out, inDeBranch, inLvBranch));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      collectSectionAccents(child, out, inDeBranch || key === "de", inLvBranch || key === "lv");
    }
  }
}

function applySectionAccents(value, map, inDeBranch = false, inLvBranch = false) {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") {
    if (!shouldTranslateAccentString(value, inDeBranch, inLvBranch)) return value;
    return map[value] ?? value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => applySectionAccents(item, map, inDeBranch, inLvBranch));
  }
  if (typeof value === "object") {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = applySectionAccents(child, map, inDeBranch || key === "de", inLvBranch || key === "lv");
    }
    return out;
  }
  return value;
}

function applyTranslation(value, map, parentKey = "") {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") {
    if (NATIVE_KEYS.has(parentKey)) return map[value] ?? value;
    if (parentKey === "example") {
      if (value.includes("=")) {
        const idx = value.indexOf("=");
        const left = value.slice(0, idx + 1);
        const right = value.slice(idx + 1).trim();
        return right && map[right] ? `${left} ${map[right]}` : value;
      }
      const dash = value.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
      if (dash) {
        const right = dash[3].trim();
        return right && map[right] ? `${dash[1]}${dash[2]}${map[right]}` : value;
      }
    }
    return value;
  }
  if (Array.isArray(value)) {
    if (NATIVE_KEYS.has(parentKey)) {
      return value.map((item) => {
        if (typeof item === "string") return map[item] ?? item;
        return applyTranslation(item, map, parentKey);
      });
    }
    return value.map((item) => applyTranslation(item, map, parentKey));
  }
  if (typeof value === "object") {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      if (key === "sectionAccents" || key === "accents") {
        out[key] = applySectionAccents(child, map);
        continue;
      }
      if (key === "word" && parentKey === "comparison") {
        out[key] = child;
        continue;
      }
      out[key] = applyTranslation(child, map, key);
    }
    return out;
  }
  return value;
}

async function translateWithCache(text, cache) {
  if (cache[text]) return cache[text];
  const translated = await translateText({
    text,
    targetLanguage: TARGET_LANGUAGE,
    context: CONTEXT,
  });
  const processed = postProcess(translated);
  cache[text] = processed;
  return processed;
}

let cacheWriteChain = Promise.resolve();

function scheduleCacheSave(cache) {
  cacheWriteChain = cacheWriteChain.then(() => {
    saveCache(cache);
  });
  return cacheWriteChain;
}

function writeA2File(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const A2_WORDS = ${json};\n\nwindow.A2_WORDS = A2_WORDS;\n`, "utf8");
}

async function main() {
  const cache = loadCache();
  seedCacheFromGoogle(cache);
  saveCache(cache);

  const words = loadA2Words();
  const allStrings = new Set();
  words.forEach((entry) => collectStrings(entry, allStrings));
  const unique = [...allStrings].filter((text) => text && text.trim());

  const pending = unique.filter((text) => !cache[text]);
  const concurrency = 8;
  console.log(`BS A2: ${unique.length} unique strings, ${pending.length} to translate via OpenAI`);

  let done = 0;
  async function worker(queue) {
    while (queue.length) {
      const text = queue.shift();
      if (!text) break;
      await translateWithCache(text, cache);
      done += 1;
      if (done % 25 === 0 || done === pending.length) {
        await scheduleCacheSave(cache);
        process.stdout.write(`  translated ${done}/${pending.length}\n`);
      }
    }
  }

  const queue = [...pending];
  const workers = Array.from(
    { length: Math.min(concurrency, queue.length || 1) },
    () => worker(queue),
  );
  await Promise.all(workers);
  await scheduleCacheSave(cache);

  const map = {};
  unique.forEach((text) => {
    map[text] = cache[text] || text;
  });

  const translatedWords = words.map((entry) => applyTranslation(entry, map));
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  writeA2File(OUT_FILE, translatedWords);
  fs.mkdirSync(path.dirname(WWW_OUT_FILE), { recursive: true });
  writeA2File(WWW_OUT_FILE, translatedWords);

  console.log(`Wrote ${OUT_FILE}`);
  console.log(`Wrote ${WWW_OUT_FILE}`);
  console.log(`Entries: ${translatedWords.length}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
