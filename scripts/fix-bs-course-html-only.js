#!/usr/bin/env node
/** Fix BS courseLessons HTML tags + remnants only (no LV template rebuild). */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const BS_PATH = path.join(ROOT, "data/bs/courseLessons.js");
const stats = { htmlFixes: 0, remnants: 0, kurssWords: 0 };

const LV_REMNANT = [
  [/Na letonskom/g, "Na bosanskom"],
  [/na letonskom/g, "na bosanskom"],
  [/U letonskom/g, "U bosanskom"],
  [/u letonskom/g, "u bosanskom"],
  [/Letonski dativ/g, "Bosanski dativ"],
  [/Letonska dativna/g, "Bosanska dativna"],
  [/Letonski /g, "Bosanski "],
  [/letonski /g, "bosanski "],
  [/Letonac /g, "Bosanac "],
  [/letonac /g, "bosanac "],
  [/Letonsko /g, "Bosansko "],
  [/letonsko /g, "bosansko "],
  [/Letonski:/g, "Bosanski:"],
  [/Latviešu/g, "Bosanski"],
  [/latviešu/g, "bosanski"],
  [/latviski/g, "bosanski"],
  [/letonskom/g, "bosanskom"],
  [/letonska/g, "bosanska"],
  [/letonsk/g, "bosansk"],
];

const KURSS_WORDS = [
  [/kas tas ir/gi, "šta je to"],
  [/\btagad\b/g, "sada"],
  [/beidzot/g, "konačno"],
  [/dzirnavnieks/g, "mlinar"],
  [/galdnieks/g, "stolar"],
  [/skaidri/g, "jasno"],
  [/jūs varat/g, "možete"],
  [/tas grib/g, "to želi"],
  [/jūs gribat/g, "želite"],
  [/Daudzskaitlis/g, "Množina"],
  [/galotni/g, "nastavku"],
];

function applyRules(text, rules, key) {
  let out = text;
  for (const [re, rep] of rules) {
    const m = out.match(re);
    if (m) stats[key] += m.length;
    out = out.replace(re, rep);
  }
  return out;
}

function fixHtml(html) {
  let out = html;
  const rules = [
    [/<detalji/g, "<details"],
    [/<\/detalji>/g, "</details>"],
    [/ otvoren>/g, " open>"],
    [/<divs>/g, "</div>"],
    [/kurss-example">/g, "<div class=\"kurss-example\">"],
    [/class="kurss">-example\./g, ""],
    [/Flum class="kurss">F koridor/g, "Flur (flūr) — hodnik"],
    [/ščeto/g, "često"],
    [/Loše \(šišmiš\) - klasa="kurss-example">Loše \(šišmiš\) - klasa="kurles"><div class="kurss-example"> - kupke/g,
      "Loše (šišmiš) — kupke"],
  ];
  for (const [re, rep] of rules) {
    const m = out.match(re);
    if (m) stats.htmlFixes += m.length;
    out = out.replace(re, rep);
  }
  out = applyRules(out, LV_REMNANT, "remnants");
  out = applyRules(out, KURSS_WORDS, "kurssWords");
  return out;
}

function walkStrings(obj) {
  if (typeof obj === "string") {
    return applyRules(applyRules(fixHtml(obj), LV_REMNANT, "remnants"), KURSS_WORDS, "kurssWords");
  }
  if (Array.isArray(obj)) return obj.map(walkStrings);
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) out[k] = walkStrings(v);
    return out;
  }
  return obj;
}

const code = fs.readFileSync(BS_PATH, "utf8");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(code, ctx);

const html = {};
for (const [k, h] of Object.entries(ctx.window.COURSE_LESSON_HTML || {})) {
  html[k] = fixHtml(h);
}

const data = walkStrings(ctx.window.COURSE_LESSON_DATA || {});

// Sync legacyHtml from COURSE_LESSON_HTML for lesson keys
for (const [key, lesson] of Object.entries(data)) {
  if (lesson && html[key]) lesson.legacyHtml = html[key];
}

fs.writeFileSync(
  BS_PATH,
  `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(data, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
  "utf8"
);

fs.copyFileSync(BS_PATH, path.join(ROOT, "www/data/bs/courseLessons.js"));
console.log(JSON.stringify(stats, null, 2));
