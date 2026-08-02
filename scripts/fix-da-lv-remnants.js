#!/usr/bin/env node
/**
 * Second-pass cleanup: re-translate strings that still contain Latvian fragments.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { translateAll } = require("./lib/translate-helper");

const DA_DIR = path.join(ROOT, "data", "da");
const CACHE_PATH = path.join(ROOT, "scripts", ".da-lv-remnant-cache.json");

const LV_PATTERN =
  /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]|bieži|vārdi|vārdu|nospiest|drukāt|kontekstos|nenotika|latviešu|Šie |Ja kāds|Ja runa|Ja redzi|Ja doma|nav tas|dažādi vārdi|Sievišķās|pretstats|emocionāli|pārbaudi kontekstu|Ar pogām|umlautu|nozīmē|vācu valodā|vienkārši|locījumā|dzimtes|vietniekvārds|artikuls|pareiza vārdu/i;

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember",
]);

function needsFix(text) {
  return text && typeof text === "string" && LV_PATTERN.test(text);
}

function collect(value, out, parentKey = "") {
  if (value == null) return;
  if (typeof value === "string") {
    if ((NATIVE_KEYS.has(parentKey) || parentKey === "example") && needsFix(value)) out.add(value);
    return;
  }
  if (Array.isArray(value)) value.forEach((v) => collect(v, out, parentKey));
  else if (typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      if (["de", "de_article", "de_plural", "sectionAccents", "id", "layout", "level"].includes(k)) continue;
      collect(v, out, k);
    }
  }
}

function applyMap(value, map, parentKey = "") {
  if (value == null) return value;
  if (typeof value === "string") {
    if ((NATIVE_KEYS.has(parentKey) || parentKey === "example") && map[value]) return map[value];
    if (parentKey === "example") {
      const dash = value.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
      if (dash && map[dash[3].trim()]) return `${dash[1]}${dash[2]}${map[dash[3].trim()]}`;
    }
    return value;
  }
  if (Array.isArray(value)) return value.map((v) => applyMap(v, map, parentKey));
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (k === "sectionAccents") {
        out[k] = applyMap(v, map, k);
        continue;
      }
      out[k] = applyMap(v, map, k);
    }
    return out;
  }
  return value;
}

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function writeArrayFile(filePath, varName, data) {
  fs.writeFileSync(
    filePath,
    `const ${varName} = ${JSON.stringify(data, null, 2)};\n\nwindow.${varName} = ${varName};\n`,
    "utf8"
  );
}

async function main() {
  const remnants = new Set();
  const levels = ["a1", "a2", "b1", "b2", "c1", "c2"];
  const levelData = {};

  for (const level of levels) {
    const key = `${level.toUpperCase()}_WORDS`;
    levelData[level] = load(`data/da/${level}.js`)[key];
    levelData[level].forEach((e) => collect(e, remnants));
  }

  const unique = [...remnants].filter(Boolean);
  console.log(`Found ${unique.length} LV-pattern strings`);

  const map = await translateAll(unique, "lv", "da", {
    cachePath: CACHE_PATH,
    delayMs: 40,
    concurrency: 8,
    onProgress: (n, remaining) => {
      if (n % 50 === 0) process.stdout.write(`  lv→da ${n} (~${remaining} left)\n`);
    },
  });

  for (const level of levels) {
    const key = `${level.toUpperCase()}_WORDS`;
    writeArrayFile(path.join(DA_DIR, `${level}.js`), key, levelData[level].map((e) => applyMap(e, map)));
    console.log(`Updated ${level}.js`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
