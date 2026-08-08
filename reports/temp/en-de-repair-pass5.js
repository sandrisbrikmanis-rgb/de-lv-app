#!/usr/bin/env node
/** Pass 5: fix accent replacement recursion + remaining text fixes */
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

function findByStudyId(arr, id) {
  return arr.find((e) => e.study?.id === id);
}

function replaceAccentToken(obj, from, to, inDe = false) {
  if (typeof obj === "string") return inDe ? obj : obj === from ? to : obj;
  if (Array.isArray(obj)) return obj.map((item) => replaceAccentToken(item, from, to, inDe));
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      out[k] = k === "de" ? v : replaceAccentToken(v, from, to, inDe || k === "de");
    }
    return out;
  }
  return obj;
}

const ACCENT_MAP = [
  { id: "a1-klein-study", from: "mazs", to: "small" },
  { id: "a1-sagen-study", from: "teikt", to: "say" },
  { id: "a1-um", from: "lai", to: "so that" },
  { id: "a1-was", from: "kas", to: "what" },
  { id: "a1-was", from: "ko", to: "what" },
  { id: "a1-einmal", from: "reiz", to: "once" },
  { id: "a1-wie", from: "cik daudz", to: "how much" },
  { id: "a1-wie", from: "cik vecs", to: "how old" },
  { id: "a1-wie", from: "cik ilgi", to: "how long" },
  { id: "a1-fahren", from: "braukt", to: "drive" },
  { id: "a1-fahren", from: "vest", to: "take" },
  { id: "a1-fahren", from: "aizvest", to: "take away" },
  { id: "a1-haben", from: "Latvian", to: "English" },
  { id: "a2-klein", from: "mazs", to: "small" },
  { id: "a2-sagen", from: "teikt", to: "say" },
  { id: "a2-abfahren", from: "braukt", to: "drive" },
  { id: "a2-abfahren", from: "aizbraukt", to: "drive away" },
  { id: "a2-abgeben", from: "nodots vai atdots", to: "handed over or returned" },
  { id: "a2-bahn", from: "braukt ar vilcienu", to: "travel by train" },
  { id: "a2-etwa", from: "vai tad", to: "or then" },
  { id: "a2-führen", from: "vest", to: "lead" },
  { id: "a2-führen", from: "braukt", to: "drive" },
  { id: "a2-decke", from: "griesti", to: "ceiling" },
];

const enA1 = loadArray("data/en/a1.js", "A1_WORDS");
const enA2 = loadArray("data/en/a2.js", "A2_WORDS");

for (const { id, from, to } of ACCENT_MAP) {
  const entry = findByStudyId(enA1, id) || findByStudyId(enA2, id);
  if (!entry?.study) continue;
  if (entry.study.sectionAccents) {
    entry.study.sectionAccents = replaceAccentToken(entry.study.sectionAccents, from, to);
  }
  if (entry.study.accents) {
    entry.study.accents = replaceAccentToken(entry.study.accents, from, to);
  }
}

// a2-band tip - proper EN (owner rec was still LV)
const band = findByStudyId(enA2, "a2-band");
if (band?.study?.tip?.leftBlocks?.[0]) {
  band.study.tip.leftBlocks[0].text =
    "If the article is das, Band usually means tape, strap or strip.";
}

fs.writeFileSync(path.join(ROOT, "data/en/a1.js"), serializeWords(enA1, "A1_WORDS"));
fs.writeFileSync(path.join(ROOT, "data/en/a2.js"), serializeA2(enA2));
fs.writeFileSync(path.join(ROOT, "www/data/en/a1.js"), serializeWords(enA1, "A1_WORDS"));
fs.writeFileSync(path.join(ROOT, "www/data/en/a2.js"), serializeA2(enA2));
console.log("pass5 complete");
