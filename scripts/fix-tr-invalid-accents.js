#!/usr/bin/env node
/** Remove sectionAccents terms that don't appear in section text (TR). */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const FILES = [
  ["data/tr/a1.js", "A1_WORDS"],
  ["data/tr/a2.js", "A2_WORDS"],
  ["data/tr/b1.js", "B1_WORDS"],
  ["data/tr/b2.js", "B2_WORDS"],
  ["data/tr/c1.js", "C1_WORDS"],
  ["data/tr/c2.js", "C2_WORDS"],
];

const COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function escapeRegex(v) {
  return String(v).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesTerm(text, term) {
  if (!text || !term) return false;
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`, "iu").test(String(text));
  } catch {
    return false;
  }
}

function stemMatch(text, term) {
  if (!text || !term || term.length < 4) return false;
  const stem = String(term).replace(/(?:ler|lar|den|dan|de|da|in|ın|un|ün|i|ı|u|ü|e|a|yi|yı|yu|yü|si|sı|su|sü)$/iu, "");
  if (stem.length < 3) return false;
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(stem)}[\\p{L}\\p{N}_]*`, "iu").test(String(text));
  } catch {
    return false;
  }
}

function termOk(term, texts) {
  const blob = texts.join("\n");
  return matchesTerm(blob, term);
}

function collectTexts(study, section, index, field) {
  const texts = [];
  const push = (v) => {
    if (typeof v === "string" && v.trim()) texts.push(v);
    if (Array.isArray(v)) v.forEach(push);
  };
  if (section === "explanation") push(study.explanation);
  if (section === "examples") {
    const rows = index != null ? [study.examples?.[index]] : study.examples || [];
    rows.forEach((ex) => { if (ex) { push(ex.de); push(ex.lv); } });
  }
  if (section === "comparison") {
    const rows = index != null ? [study.comparison?.[index]] : study.comparison || [];
    rows.forEach((r) => { if (r) { push(r.word); push(r.meaning); push(r.example); } });
  }
  if (section === "tip") push(study.tip);
  if (section === "important") push(study.important);
  return texts;
}

function cleanAccents(study) {
  const sa = study.sectionAccents;
  if (!sa) return 0;
  let removed = 0;
  for (const [section, rules] of Object.entries(sa)) {
    const cleanMap = (map, index, field) => {
      if (!map || typeof map !== "object") return;
      for (const color of COLORS) {
        if (!Array.isArray(map[color])) continue;
        const texts = collectTexts(study, section, index, field);
        map[color] = map[color].filter((t) => {
          const ok = termOk(t, texts);
          if (!ok) removed++;
          return ok;
        });
        if (!map[color].length) delete map[color];
      }
    };
    if (Array.isArray(rules)) {
      rules.forEach((entry, i) => {
        if (!entry || typeof entry !== "object") return;
        const hasColors = COLORS.some((c) => Array.isArray(entry[c]));
        if (hasColors) cleanMap(entry, i);
        else Object.entries(entry).forEach(([f, m]) => cleanMap(m, i, f));
      });
    } else if (rules && typeof rules === "object") {
      const hasColors = COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) cleanMap(rules);
      else Object.entries(rules).forEach(([f, m]) => cleanMap(m, null, f));
    }
  }
  return removed;
}

function load(file, varName) {
  delete global[varName];
  eval(fs.readFileSync(path.join(ROOT, file), "utf8").replace(/window\./g, "global."));
  return global[varName];
}

function write(file, varName, data) {
  const content = `const ${varName} = ${JSON.stringify(data, null, 2)};\n\nwindow.${varName} = ${varName};\n`;
  fs.writeFileSync(path.join(ROOT, file), content, "utf8");
  const www = file.replace(/^data\//, "www/data/");
  if (fs.existsSync(path.join(ROOT, path.dirname(www)))) {
    fs.writeFileSync(path.join(ROOT, www), content, "utf8");
  }
}

let total = 0;
for (const [file, varName] of FILES) {
  const cards = load(file, varName);
  for (const card of cards) {
    if (card.study) total += cleanAccents(card.study);
  }
  write(file, varName, cards);
}
console.log(JSON.stringify({ removed: total }, null, 2));
