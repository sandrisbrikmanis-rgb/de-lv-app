#!/usr/bin/env node
/** Pass 3: remaining accent LV tokens and Latvian tip blocks */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ROOT = path.join(__dirname, "..", "..");

function loadArray(relPath, key) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function serializeWords(words, constName) {
  const lines = [`const ${constName} = [`];
  for (const w of words) lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  lines.push("];\n\nwindow.A1_WORDS = A1_WORDS;\n");
  return lines.join("\n");
}

function serializeA2(words) {
  const lines = ["const A2_WORDS = ["];
  for (const w of words) lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  lines.push("];\n\nwindow.A2_WORDS = A2_WORDS;\n");
  return lines.join("\n");
}

function replaceInAccents(obj, map, inDe = false) {
  if (typeof obj === "string") return inDe ? obj : map[obj] || obj;
  if (Array.isArray(obj)) return obj.map((item) => replaceInAccents(item, map, inDe));
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const childDe = inDe || (k === "de" && typeof v === "string");
      out[k] = replaceInAccents(v, map, childDe);
    }
    return out;
  }
  return obj;
}

const ACCENT_MAP = {
  mazs: "small",
  teikt: "say",
  aizbraukt: "drive away",
  nobraukt: "drive off",
  noteiktu: "specified",
  "aizbraukt prom": "drive away",
  atteikt: "refuse",
  pateikt: "say",
  uzteikt: "give notice",
  pieteikties: "register",
  pieteikt: "register",
  noteikti: "certainly",
  noteikts: "certain",
  teiktais: "said",
};

const TIP_FIXES = [
  {
    id: "a2-sich-befinden",
    from: "Ja gribi pateikt “justies”, lieto sich fühlen, nevis sich befinden.",
    to: "If you want to say 'to feel', use sich fühlen, not sich befinden.",
  },
];

function findByStudyId(arr, id) {
  return arr.find((e) => e.study?.id === id);
}

function walkReplaceTips(study, from, to) {
  if (!study) return;
  function walk(o) {
    if (typeof o === "string") return o === from ? to : o;
    if (Array.isArray(o)) return o.map(walk);
    if (o && typeof o === "object") {
      const out = {};
      for (const [k, v] of Object.entries(o)) {
        out[k] = k === "de" && typeof v === "string" ? v : walk(v);
      }
      return out;
    }
    return o;
  }
  if (study.tip) study.tip = walk(study.tip);
}

const enA1 = loadArray("data/en/a1.js", "A1_WORDS");
const enA2 = loadArray("data/en/a2.js", "A2_WORDS");

for (const entry of [...enA1, ...enA2]) {
  if (!entry.study) continue;
  if (entry.study.sectionAccents) entry.study.sectionAccents = replaceInAccents(entry.study.sectionAccents, ACCENT_MAP);
  if (entry.study.accents) entry.study.accents = replaceInAccents(entry.study.accents, ACCENT_MAP);
  // tip.leftBlocks and nested tip text
  if (entry.study.tip) {
    entry.study.tip = replaceInAccents(entry.study.tip, ACCENT_MAP);
    entry.study.tip = fixLatvianTipBlocks(entry.study.tip);
  }
}

function fixLatvianTipBlocks(obj) {
  if (typeof obj === "string") {
    let t = obj;
    t = t.replace(/Ja gribi pateikt [""]justies[""], lieto sich fühlen, nevis sich befinden\./g,
      "If you want to say 'to feel', use sich fühlen, not sich befinden.");
    t = t.replace(/Ja gribi pateikt [""]uzvilkt[""], lieto anziehen; ja [""]atnest[""], lieto bringen\./g,
      "If you want to say 'to put on', use anziehen; for 'to bring', use bringen.");
    t = t.replace(/Kaffee oder Tee\? lieto oder, nevis ob\./g,
      "Coffee or tea? Use oder, not ob.");
    t = t.replace(/Ja runa ir par TV, datoru or gaismu, parasti lieto ausschalten\./g,
      "For TV, computer or light, you usually use ausschalten.");
    t = t.replace(/Ja kaut what pats deg, lieto brennen\./g,
      "If something is burning by itself, use brennen.");
    return t;
  }
  if (Array.isArray(obj)) return obj.map(fixLatvianTipBlocks);
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      out[k] = k === "de" && typeof v === "string" ? v : fixLatvianTipBlocks(v);
    }
    return out;
  }
  return obj;
}

for (const { id, from, to } of TIP_FIXES) {
  const entry = findByStudyId(enA2, id);
  if (entry?.study) walkReplaceTips(entry.study, from, to);
}

// während explanation Latvian tail
const waehrend = findByStudyId(enA2, "a2-während");
if (waehrend?.study?.explanation) {
  const exp = Array.isArray(waehrend.study.explanation)
    ? waehrend.study.explanation.join(" ")
    : String(waehrend.study.explanation);
  if (exp.includes("Latvian")) {
    waehrend.study.explanation = [
      "Main idea: während can be a preposition meaning 'during', often followed by the genitive: während des Tages.",
      "As a conjunction, während means 'while' and connects two simultaneous actions.",
      "In English, during/for time periods and while for simultaneous actions are the natural equivalents.",
    ];
  }
}

fs.writeFileSync(path.join(ROOT, "data/en/a1.js"), serializeWords(enA1, "A1_WORDS"));
fs.writeFileSync(path.join(ROOT, "data/en/a2.js"), serializeA2(enA2));
fs.writeFileSync(path.join(ROOT, "www/data/en/a1.js"), serializeWords(enA1, "A1_WORDS"));
fs.writeFileSync(path.join(ROOT, "www/data/en/a2.js"), serializeA2(enA2));
console.log("pass3 complete");
