#!/usr/bin/env node
/**
 * Fix remaining Latvian text in RO courseLessons HTML and data.
 * Targets em-dash translations and Latvian-character remnants.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { translate } = require("google-translate-api-x");
const { ROOT } = require("./lib/audit-common");

const LV_CHARS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const CACHE_PATH = path.join(ROOT, "scripts", ".ro-course-fix-cache.json");

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

async function translateText(text) {
  const t = text.trim();
  if (!t || !LV_CHARS.test(t)) return text;
  if (cache[t]) return cache[t];
  try {
    const res = await translate(t, { from: "lv", to: "ro" });
    cache[t] = res.text.trim();
    await sleep(60);
    return cache[t];
  } catch {
    return text;
  }
}

async function fixHtml(html) {
  if (!html || !LV_CHARS.test(html)) return html;
  let result = html;

  // Fix em-dash / hyphen translations: "DE — latvian"
  const dashRe = /(—|–|-)\s*([^<"\n]{2,80}?)(?=<|"|$|\n)/g;
  let m;
  const replacements = [];
  while ((m = dashRe.exec(html)) !== null) {
    const sep = m[1];
    const lvPart = m[2].trim();
    if (LV_CHARS.test(lvPart) && !replacements.some((r) => r.from === lvPart)) {
      replacements.push({ from: lvPart, sep });
    }
  }

  for (const { from, sep } of replacements) {
    const ro = await translateText(from);
    if (ro && ro !== from) {
      result = result.split(`${sep} ${from}`).join(`${sep} ${ro}`);
      result = result.split(`${sep}${from}`).join(`${sep} ${ro}`);
    }
  }

  // Fix inline Latvian text in tags
  const tagRe = />([^<]{3,200})</g;
  const seen = new Set();
  for (const match of [...result.matchAll(tagRe)]) {
    const text = match[1].trim();
    if (!text || seen.has(text) || !LV_CHARS.test(text)) continue;
    seen.add(text);
    const ro = await translateText(text);
    if (ro && ro !== text) {
      result = result.split(`>${text}<`).join(`>${ro}<`);
    }
  }

  return result;
}

async function main() {
  const file = path.join(ROOT, "data/ro/courseLessons.js");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx);

  const html = ctx.window.COURSE_LESSON_HTML;
  const data = ctx.window.COURSE_LESSON_DATA;

  console.log("Fixing course HTML...");
  for (const [key, value] of Object.entries(html)) {
    if (LV_CHARS.test(value)) {
      console.log(`  ${key}`);
      html[key] = await fixHtml(value);
      saveCache();
    }
  }

  console.log("Fixing course data...");
  async function walk(obj) {
    if (!obj || typeof obj !== "object") return;
    if (Array.isArray(obj)) {
      for (const item of obj) await walk(item);
      return;
    }
    for (const [k, v] of Object.entries(obj)) {
      if (typeof v === "string" && LV_CHARS.test(v) && k !== "de") {
        obj[k] = await translateText(v);
      } else if (typeof v === "object") {
        await walk(v);
      }
    }
  }
  await walk(data);

  const out = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(data, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(file, out, "utf8");
  fs.writeFileSync(path.join(ROOT, "www/data/ro/courseLessons.js"), out, "utf8");
  saveCache();
  console.log("Done.");
}

main().catch((e) => { console.error(e); saveCache(); process.exit(1); });
