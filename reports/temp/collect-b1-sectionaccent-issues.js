#!/usr/bin/env node
/** Collect all B1 sectionAccent issues using validate-study-design logic (array tokens only). */
const fs = require("fs");
const vm = require("vm");
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function boundaryPattern(term) {
  return `(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`;
}
function matchesTerm(text, term) {
  if (!text || !term) return false;
  try {
    return new RegExp(boundaryPattern(term), "iu").test(String(text));
  } catch {
    return false;
  }
}
function stemMatch(text, term) {
  if (!text || !term || term.length < 4) return false;
  const stem = String(term).replace(/(?:en|ern|eln)$/i, "");
  if (stem.length < 3) return false;
  try {
    return new RegExp(boundaryPattern(stem) + "[\\p{L}\\p{N}_]*", "iu").test(String(text));
  } catch {
    return false;
  }
}
function asArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}
function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) {
      v.forEach(push);
      return;
    }
    if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) =>
        push(v[k])
      );
    }
  };
  if (sectionKey === "explanation") {
    push(study.explanation);
    (study.explanationLines || []).forEach(push);
    return texts;
  }
  if (sectionKey === "examples") {
    const rows = index !== null ? asArray(study.examples?.[index]) : asArray(study.examples);
    rows.forEach((ex) => {
      if (!field || field === "de") push(ex.de);
      if (!field || field === "lv") push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === "comparison") {
    const rows = index !== null ? asArray(study.comparison?.[index]) : asArray(study.comparison);
    rows.forEach((r) => {
      if (!field || field === "word") push(r.word);
      if (!field || field === "meaning") push(r.meaning);
      if (!field || field === "example") push(r.example);
    });
    return texts;
  }
  if (sectionKey === "tip") {
    if (field === "left") {
      push(study.tip?.left || study.tip?.text);
      return texts;
    }
    if (field === "right") {
      push(study.tip?.right || study.tip?.example);
      return texts;
    }
    push(study.tip);
    return texts;
  }
  if (sectionKey === "important") {
    const source = study.important;
    const rows =
      index !== null ? asArray(Array.isArray(source) ? source[index] : source) : asArray(source);
    rows.forEach(push);
    return texts;
  }
  if (sectionKey === "info") {
    asArray(study.info).forEach(push);
    return texts;
  }
  return texts;
}
function fold(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
}
function substringMatch(text, term) {
  if (!text || !term || term.length < 3) return null;
  const hay = String(text);
  const idx = fold(hay).indexOf(fold(term));
  if (idx >= 0) return hay.slice(idx, idx + term.length);
  return null;
}
function accentTermMatches(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join("\n");
  if (matchesTerm(blob, term) || stemMatch(blob, term)) return true;
  for (const text of texts) {
    if (substringMatch(text, term)) return true;
  }
  return false;
}

function collectIssues(enWords) {
  const issues = [];
  for (let productionIndex = 0; productionIndex < enWords.length; productionIndex++) {
    const card = enWords[productionIndex];
    const study = card.study;
    if (!study?.sectionAccents) continue;
    const de = card.de;
    const productionId = study.id;

    const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
      if (!accentMap || typeof accentMap !== "object") return;
      for (const color of ACCENT_COLORS) {
        if (!Array.isArray(accentMap[color])) continue;
        for (let ti = 0; ti < accentMap[color].length; ti++) {
          const raw = String(accentMap[color][ti] || "").trim();
          if (!raw) continue;
          if (!accentTermMatches(study, sectionKey, index, field, raw)) {
            issues.push({
              de,
              productionId,
              productionIndex,
              term: raw,
              section: sectionKey,
              field: field || null,
              index,
              color,
              tokenIndex: ti,
              accentPath: `${pathPrefix}.${color}[${ti}]`,
              targetTexts: collectSectionTexts(study, sectionKey, index, field),
            });
          }
        }
      }
    };

    for (const [sectionKey, rules] of Object.entries(study.sectionAccents)) {
      if (Array.isArray(rules)) {
        rules.forEach((entry, i) => {
          if (!entry || typeof entry !== "object") return;
          const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry[c]));
          if (hasColors) {
            checkMap(sectionKey, i, null, entry, `sectionAccents.${sectionKey}[${i}]`);
            return;
          }
          for (const f of Object.keys(entry)) {
            checkMap(sectionKey, i, f, entry[f], `sectionAccents.${sectionKey}[${i}].${f}`);
          }
        });
      } else if (rules && typeof rules === "object") {
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
        if (hasColors) checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
        else {
          for (const [field, map] of Object.entries(rules)) {
            checkMap(sectionKey, null, field, map, `sectionAccents.${sectionKey}.${field}`);
          }
        }
      }
    }
  }
  return issues;
}

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("data/en/b1.js", "utf8"), ctx);
const issues = collectIssues(ctx.window.B1_WORDS);
console.log(JSON.stringify({ count: issues.length, issues }, null, 2));
