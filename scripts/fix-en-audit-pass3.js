#!/usr/bin/env node
/** Pass 3: translate remaining LV keys in study.accents and coloured highlight terms. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { loadCache, cacheKey } = require("./lib/translate-helper");

const CACHE_PATH = path.join(ROOT, "scripts", ".en-lv-translation-cache.json");
const LV = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

const MANUAL = {
  "paklausīgs": "obedient",
  "kārtīgs": "neat",
  "labi audzināts": "well brought up",
  labs: "good",
  jauka: "nice",
  "dedzinoši sāp": "burns fiercely",
  ierakstīt: "to record",
  "no tā": "from it",
  priekšā: "in front",
  "pie tā": "next to it",
  klāt: "present",
  turklāt: "moreover",
  jautājumos: "in questions",
  plāns: "flat",
  "ārsts": "doctor",
  "ārsta": "doctor's",
  "ārsta prakse": "doctor's practice",
  grozīt: "to change",
  drukāt: "to print",
  drukāju: "I print",
  "šķidrs": "liquid",
  dēļ: "because of",
  godīgs: "honest",
  atklāts: "open",
  atklāta: "open",
  atklāti: "open",
  patiesībā: "in truth",
  Patiesībā: "In truth",
  "īstenībā": "in reality",
  "īstais": "real",
  taču: "however",
};

function tr(text, cache) {
  if (!text || typeof text !== "string") return text;
  if (MANUAL[text]) return MANUAL[text];
  if (!LV.test(text)) return text;
  return cache[cacheKey("lv", "en-GB", text)] || text;
}

function translateTerms(terms, cache) {
  return terms.map((t) => tr(t, cache));
}

function translateColoredBlock(block, cache) {
  if (!block || typeof block !== "object") return block;
  const out = { ...block };
  for (const color of COLORS) {
    if (Array.isArray(out[color])) out[color] = translateTerms(out[color], cache);
  }
  if (out.text && typeof out.text === "object") out.text = translateColoredBlock(out.text, cache);
  return out;
}

function fixAccents(accents, cache) {
  if (!accents || typeof accents !== "object") return accents;
  const out = {};
  for (const [key, color] of Object.entries(accents)) {
    const newKey = tr(key, cache);
    out[newKey] = color;
  }
  return out;
}

function fixStudy(study, cache) {
  if (!study) return;
  if (study.accents) study.accents = fixAccents(study.accents, cache);

  if (Array.isArray(study.important)) {
    study.important = study.important.map((item) => {
      if (item?.text && typeof item.text === "object") {
        return { ...item, text: translateColoredBlock(item.text, cache) };
      }
      return item;
    });
  }

  if (study.tip) {
    if (typeof study.tip === "object" && study.tip.text) {
      if (typeof study.tip.text === "string") {
        study.tip.text = study.tip.text
          .replace(/Latvian often uses "taču"/g, 'English often uses "however"')
          .replace(/Latvian often uses \"taču\"/g, 'English often uses "however"');
      } else {
        study.tip.text = translateColoredBlock(study.tip.text, cache);
      }
    }
  }

  if (Array.isArray(study.explanation)) {
    study.explanation = study.explanation.map((line) =>
      typeof line === "string"
        ? line.replace(/Latvian 'garš' and 'ilgs'/g, "English 'long' in different contexts")
        : line
    );
  }
}

function loadParts(rel) {
  const raw = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const s = raw.indexOf("["), e = raw.lastIndexOf("]");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw, ctx);
  const key = Object.keys(ctx.window).find((k) => k.endsWith("_WORDS") || k.endsWith("_ENTRIES"));
  return { arr: ctx.window[key], prefix: raw.slice(0, s), suffix: raw.slice(e + 1) };
}

function writeParts(rel, parts) {
  fs.writeFileSync(path.join(ROOT, rel), parts.prefix + JSON.stringify(parts.arr, null, 2) + parts.suffix);
  const www = rel.replace(/^data\//, "www/data/");
  fs.mkdirSync(path.dirname(path.join(ROOT, www)), { recursive: true });
  fs.copyFileSync(path.join(ROOT, rel), path.join(ROOT, www));
}

function fixCourseLessons(cache) {
  const file = path.join(ROOT, "data/en/courseLessons.js");
  let content = fs.readFileSync(file, "utf8");
  content = content
    .replace(/Robert and Jāni, exercise!/g, "Robert and John, exercise!")
    .replace(/pronounced like Latvian ordinary st/g, "pronounced like ordinary English st")
    .replace(/Latvian family/g, "English gender system")
    .replace(/latviešu ģimenes/g, "English gender system");
  fs.writeFileSync(file, content);
  fs.copyFileSync(file, path.join(ROOT, "www/data/en/courseLessons.js"));
}

function main() {
  const cache = loadCache(CACHE_PATH);
  for (const lvl of ["a1", "a2", "b1", "b2", "c1", "c2"]) {
    const parts = loadParts(`data/en/${lvl}.js`);
    parts.arr.forEach((entry) => {
      if (entry.study) fixStudy(entry.study, cache);
      if (typeof entry.lv === "string" && LV.test(entry.lv)) entry.lv = tr(entry.lv, cache);
    });
    writeParts(`data/en/${lvl}.js`, parts);
  }
  fixCourseLessons(cache);
  console.log("Pass 3 complete.");
}

main();
