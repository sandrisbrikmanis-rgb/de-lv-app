#!/usr/bin/env node
/**
 * Comprehensive {lang}-DE study card and flashcard routing validation.
 * Generalized from the LT-specific validate-lt-study-design.js per
 * PROJECT_LANGUAGE_MASTER_STANDARD.md §7.7.
 *
 * Run: node scripts/validate-study-design.js --lang=lt
 *      node scripts/validate-study-design.js --lang=lv
 */
const fs = require("fs");
const path = require("path");
const { ROOT, parseLangArg, dataDir, fileExists, readFile } = require("./lib/audit-common");

const lang = parseLangArg("lt");
const DIR = dataDir(lang);

const FILES = [
  [`${DIR}/a1.js`, "A1_WORDS"],
  [`${DIR}/a2.js`, "A2_WORDS"],
  [`${DIR}/b1.js`, "B1_WORDS"],
  [`${DIR}/b2.js`, "B2_WORDS"],
  [`${DIR}/c1.js`, "C1_WORDS"],
  [`${DIR}/c2.js`, "C2_WORDS"],
  [`${DIR}/sentences.js`, "SENTENCE_ENTRIES"],
  [`${DIR}/verbs.js`, "VERB_ENTRIES"],
  [`${DIR}/courseLessons.js`, "COURSE_LESSON_HTML"],
];

const SKIP_CARD_VALIDATION = new Set([`${DIR}/courseLessons.js`]);

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function hasContent(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some(hasContent);
  if (typeof value === "object") return Object.values(value).some(hasContent);
  return Boolean(value);
}

function cardHasRenderableStudy(study) {
  if (!study || typeof study !== "object") return false;
  const layout = study.layout || "standardStudy";
  if (layout === "minimalStudy") {
    return hasContent(study.note) || hasContent(study.forms) || hasContent(study.tip) || hasContent(study.examples);
  }
  if (layout === "comparisonStudy") {
    return hasContent(study.words) || hasContent(study.items) || hasContent(study.terms)
      || hasContent(study.comparison) || hasContent(study.comparisonTable)
      || hasContent(study.subtitle) || hasContent(study.subtitleText)
      || hasContent(study.title) || hasContent(study.lead) || hasContent(study.question);
  }
  return hasContent(study.explanation) || hasContent(study.explanationLines)
    || hasContent(study.examples) || hasContent(study.comparison)
    || hasContent(study.tip) || hasContent(study.important) || hasContent(study.info)
    || hasContent(study.words) || hasContent(study.items) || hasContent(study.terms);
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
    if (typeof v === "string") { if (v.trim()) texts.push(v); return; }
    if (Array.isArray(v)) { v.forEach(push); return; }
    if (typeof v === "object") ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) => push(v[k]));
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
    if (field === "left") { push(study.tip?.left || study.tip?.text); return texts; }
    if (field === "right") { push(study.tip?.right || study.tip?.example); return texts; }
    push(study.tip);
    return texts;
  }
  if (sectionKey === "important") {
    const source = study.important;
    const rows = index !== null
      ? asArray(Array.isArray(source) ? source[index] : source)
      : asArray(source);
    rows.forEach(push);
    return texts;
  }
  if (sectionKey === "info") { asArray(study.info).forEach(push); return texts; }
  return texts;
}

function fold(value) {
  return String(value || "").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
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
  if (matchesTerm(blob, term) || stemMatch(blob, term)) return true;
  for (const text of texts) {
    if (extendedForm(text, term) || substringMatch(text, term)) return true;
  }
  return false;
}

function validateSectionAccents(study, sectionAccents, report, cardDe) {
  if (!sectionAccents || typeof sectionAccents !== "object") return;
  let hasAny = false;
  const checkMap = (sectionKey, index, field, accentMap) => {
    if (!accentMap || typeof accentMap !== "object") return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(accentMap[color])) continue;
      for (const term of accentMap[color]) {
        const raw = String(term || "").trim();
        if (!raw) {
          report.sectionAccentIssues++;
          continue;
        }
        hasAny = true;
        if (!accentTermMatches(study, sectionKey, index, field, raw)) {
          report.sectionAccentIssues++;
          if (report.examples.sectionAccentIssues.length < 5) {
            report.examples.sectionAccentIssues.push({ de: cardDe, term: raw, section: sectionKey, field });
          }
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
  if (!hasAny) report.emptySectionAccents++;
}

function loadCards(file, varName) {
  for (const name of ["A1_WORDS", "A2_WORDS", "B1_WORDS", "B2_WORDS", "C1_WORDS", "C2_WORDS", "SENTENCE_ENTRIES", "VERB_ENTRIES", "COURSE_LESSON_HTML"]) {
    delete global[name];
  }
  const code = readFile(file);
  eval(code.replace(/window\./g, "global."));
  return global[varName];
}

function validateFile(file, varName) {
  const cards = loadCards(file, varName);
  const report = {
    file,
    total: cards.length,
    noStudy: 0,
    flashcard: 0,
    standardStudy: 0,
    minimalStudy: 0,
    comparisonStudy: 0,
    studyObjectNoRenderable: 0,
    sectionAccentIssues: 0,
    emptySectionAccents: 0,
    examples: {
      studyObjectNoRenderable: [],
      sectionAccentIssues: [],
    },
  };

  for (const card of cards) {
    const study = card.study;
    if (!study) {
      report.noStudy++;
      report.flashcard++;
      continue;
    }
    if (!cardHasRenderableStudy(study)) {
      report.studyObjectNoRenderable++;
      report.flashcard++;
      if (report.examples.studyObjectNoRenderable.length < 5) {
        report.examples.studyObjectNoRenderable.push({ de: card.de, layout: study.layout || "standardStudy" });
      }
      continue;
    }
    const layout = study.layout || "standardStudy";
    if (layout === "minimalStudy") report.minimalStudy++;
    else if (layout === "comparisonStudy") report.comparisonStudy++;
    else report.standardStudy++;

    if (study.sectionAccents) {
      validateSectionAccents(study, study.sectionAccents, report, card.de);
    }
  }
  return report;
}

function compareRootWww() {
  const mismatches = [];
  for (const [file] of FILES) {
    const root = path.join(ROOT, file);
    const www = path.join(ROOT, file.replace(new RegExp(`^${DIR}/`), `www/${DIR}/`));
    if (!fs.existsSync(root) || !fs.existsSync(www)) {
      mismatches.push({ file, issue: "missing-copy" });
      continue;
    }
    const a = fs.readFileSync(root, "utf8");
    const b = fs.readFileSync(www, "utf8");
    if (a !== b) mismatches.push({ file, issue: "content-diff" });
  }
  for (const uiFile of ["ui.js", "style.css"]) {
    const root = path.join(ROOT, uiFile);
    const www = path.join(ROOT, "www", uiFile);
    if (fs.existsSync(root) && fs.existsSync(www) && fs.readFileSync(root, "utf8") !== fs.readFileSync(www, "utf8")) {
      mismatches.push({ file: uiFile, issue: "content-diff" });
    }
  }
  return mismatches;
}

function main() {
  const perFile = [];
  const totals = {
    total: 0,
    noStudy: 0,
    flashcard: 0,
    standardStudy: 0,
    minimalStudy: 0,
    comparisonStudy: 0,
    studyObjectNoRenderable: 0,
    sectionAccentIssues: 0,
    emptySectionAccents: 0,
  };

  for (const [file, varName] of FILES) {
    if (!fileExists(file)) continue;
    if (SKIP_CARD_VALIDATION.has(file)) {
      perFile.push({ file, skipped: true, reason: "not a flashcard array" });
      continue;
    }
    try {
      const rep = validateFile(file, varName);
      perFile.push(rep);
      for (const key of Object.keys(totals)) totals[key] += rep[key] || 0;
    } catch (err) {
      perFile.push({ file, error: err.message });
    }
  }

  const sync = compareRootWww();
  const result = {
    lang,
    totals,
    perFile,
    rootWwwMismatches: sync,
    pass: totals.sectionAccentIssues === 0 && sync.length === 0,
  };
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.pass ? 0 : 1);
}

main();
