#!/usr/bin/env node
/**
 * READ-ONLY: collect all sectionAccentIssues for EN A1/A2 regression audit.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

// Replicate validate-study-design accent logic
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function hasContent(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some(hasContent);
  if (typeof value === "object") return Object.values(value).some(hasContent);
  return Boolean(value);
}

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
    if (typeof v === "object")
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) =>
        push(v[k])
      );
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

function extendedForm(text, term) {
  if (!text || !term || term.length < 3) return null;
  try {
    const re = new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(term)}\\p{L}*`, "iu");
    const m = String(text).match(re);
    if (m && m[0].length > term.length) return m[0];
  } catch {
    return null;
  }
  return null;
}

function accentTermMatches(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join("\n");
  if (matchesTerm(blob, term) || stemMatch(blob, term)) return { match: true, method: "boundary/stem" };
  for (const text of texts) {
    if (extendedForm(text, term)) return { match: true, method: "extendedForm" };
    if (substringMatch(text, term)) return { match: true, method: "substring" };
  }
  return { match: false, method: null };
}

function collectAllAccentIssues(study, sectionAccents, cardDe, level) {
  const issues = [];
  if (!sectionAccents || typeof sectionAccents !== "object") return issues;

  const checkMap = (sectionKey, index, field, accentMap) => {
    if (!accentMap || typeof accentMap !== "object") return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(accentMap[color])) continue;
      for (const term of accentMap[color]) {
        const raw = String(term || "").trim();
        if (!raw) {
          issues.push({
            level,
            cardDe,
            studyId: study.id,
            section: sectionKey,
            index,
            field,
            color,
            term: raw,
            validatorFail: true,
            reason: "empty term",
            rendererMatch: false,
            texts: collectSectionTexts(study, sectionKey, index, field),
          });
          continue;
        }
        const result = accentTermMatches(study, sectionKey, index, field, raw);
        if (!result.match) {
          issues.push({
            level,
            cardDe,
            studyId: study.id,
            section: sectionKey,
            index,
            field,
            color,
            term: raw,
            validatorFail: true,
            reason: "term not found in section text",
            rendererMatch: false,
            texts: collectSectionTexts(study, sectionKey, index, field),
          });
        }
      }
    }
  };

  for (const [sectionKey, rules] of Object.entries(sectionAccents)) {
    if (Array.isArray(rules)) {
      rules.forEach((entry, index) => {
        if (!entry || typeof entry !== "object") return;
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry[c]));
        if (hasColors) {
          checkMap(sectionKey, index, null, entry);
          return;
        }
        for (const field of Object.keys(entry)) {
          checkMap(sectionKey, index, field, entry[field]);
        }
      });
      continue;
    }
    if (rules && typeof rules === "object") {
      const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) {
        checkMap(sectionKey, null, null, rules);
      } else {
        for (const [field, map] of Object.entries(rules)) {
          checkMap(sectionKey, null, field, map);
        }
      }
    }
  }
  return issues;
}

function loadWords(filePath, key) {
  const code = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

const enA1 = loadWords("data/en/a1.js", "A1_WORDS");
const enA2 = loadWords("data/en/a2.js", "A2_WORDS");
const lvA1 = loadWords("data/a1.js", "A1_WORDS");
const lvA2 = loadWords("data/a2.js", "A2_WORDS");

const allIssues = [];
for (const card of enA1) {
  if (!card.study?.sectionAccents) continue;
  allIssues.push(
    ...collectAllAccentIssues(card.study, card.study.sectionAccents, card.de, "A1")
  );
}
for (const card of enA2) {
  if (!card.study?.sectionAccents) continue;
  allIssues.push(
    ...collectAllAccentIssues(card.study, card.study.sectionAccents, card.de, "A2")
  );
}

const DE_DRIFT = [
  "sprechen", "klein", "auch", "bei", "bitte", "Bitte", "bringen",
  "dieser", "ein", "erst", "es", "finden", "groß", "hoch",
];

function getDeBranch(sa, section, index, field, color) {
  try {
    let node = sa[section];
    if (Array.isArray(node)) node = node[index];
    if (!node) return null;
    if (field && node[field]) {
      const m = node[field];
      if (m.de) return m.de[color];
      return m[color];
    }
    if (node.de) return node.de[color];
    return node[color];
  } catch {
    return null;
  }
}

for (const issue of allIssues) {
  const lvCard =
    issue.level === "A1"
      ? lvA1.find((c) => c.de === issue.cardDe)
      : lvA2.find((c) => c.de === issue.cardDe);
  const enCard =
    issue.level === "A1"
      ? enA1.find((c) => c.de === issue.cardDe)
      : enA2.find((c) => c.de === issue.cardDe);
  issue.isDeDriftCard = DE_DRIFT.includes(issue.cardDe);
  issue.currentTextBlob = issue.texts.join(" | ").slice(0, 200);
  if (lvCard?.study?.sectionAccents && enCard?.study?.sectionAccents) {
    const lvTokens = getDeBranch(
      lvCard.study.sectionAccents,
      issue.section,
      issue.index,
      issue.field,
      issue.color
    );
    const enTokens = getDeBranch(
      enCard.study.sectionAccents,
      issue.section,
      issue.index,
      issue.field,
      issue.color
    );
    issue.lvDeAccentTokens = lvTokens;
    issue.enDeAccentTokens = enTokens;
    issue.deAccentParityWithLv =
      JSON.stringify(lvTokens) === JSON.stringify(enTokens);
  }
  // Renderer uses same logic as validator for matching
  issue.rendererWouldMatch = accentTermMatches(
    enCard.study,
    issue.section,
    issue.index,
    issue.field,
    issue.term
  ).match;
}

const out = {
  generatedAt: new Date().toISOString(),
  totalIssues: allIssues.length,
  a1Count: allIssues.filter((i) => i.level === "A1").length,
  a2Count: allIssues.filter((i) => i.level === "A2").length,
  issues: allIssues,
};

fs.writeFileSync(
  path.join(ROOT, "reports/temp/en-a1-a2-regression-accent-issues.json"),
  JSON.stringify(out, null, 2)
);
console.log(JSON.stringify({ totalIssues: out.totalIssues, a1: out.a1Count, a2: out.a2Count }));
