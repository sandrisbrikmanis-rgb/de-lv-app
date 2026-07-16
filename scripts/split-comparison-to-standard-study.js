#!/usr/bin/env node
/**
 * Splits all comparisonStudy cards into individual standardStudy entries,
 * then removes every comparisonStudy card from level data and comparisonStudy.js.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const DATA_FILES = [
  { file: "data/a1.js", key: "A1_WORDS" },
  { file: "data/a2.js", key: "A2_WORDS" },
  { file: "data/b1.js", key: "B1_WORDS" },
  { file: "data/b2.js", key: "B2_WORDS" },
  { file: "data/c1.js", key: "C1_WORDS" },
  { file: "data/c2.js", key: "C2_WORDS" },
];

function loadWords(file, key) {
  const win = {};
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), vm.createContext({ window: win }));
  return win[key] || [];
}

function loadComparisonStudyCards() {
  const win = {};
  vm.runInContext(fs.readFileSync(path.join(root, "data/comparisonStudy.js"), "utf8"), vm.createContext({ window: win }));
  return win.COMPARISON_STUDY_CARDS || [];
}

function serializeWords(key, words) {
  return `const ${key} = ${JSON.stringify(words, null, 2)};\n\nwindow.${key} = ${key};\n`;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseGermanWord(raw) {
  const text = String(raw || "").trim();
  const match = text.match(/^(der|die|das)\s+(.+)$/i);
  if (match) {
    return { de: match[2].trim(), de_article: match[1].toLowerCase() };
  }
  return { de: text };
}

function normalizeLv(value) {
  return String(value || "")
    .split(/[•/]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" • ");
}

function siblingBares(words, currentDe) {
  const current = bareDe(currentDe);
  return words
    .map((word) => bareDe(word.de))
    .filter((bare) => bare && bare !== current);
}

function bareDe(value) {
  return String(value || "").replace(/^(der|die|das)\s+/i, "").trim().toLowerCase();
}

function mentionsAny(text, bares) {
  const lower = String(text || "").toLowerCase();
  return bares.some((bare) => lower.includes(bare));
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function mentionsWord(text, bare) {
  if (!bare) return false;
  const pattern = new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegExp(bare)}(?![\\p{L}\\p{N}_])`, "iu");
  return pattern.test(String(text || ""));
}

function cleanLines(lines, bare, siblings) {
  return (Array.isArray(lines) ? lines : [])
    .map((line) => String(line || "").trim())
    .filter(Boolean)
    .filter((line) => !/salīdzini ar pārējiem/i.test(line))
    .filter((line) => !/šajā kartītē/i.test(line))
    .filter((line) => {
      const mentionsSibling = siblings.some((sibling) => mentionsWord(line, sibling));
      const mentionsSelf = mentionsWord(line, bare);
      if (mentionsSibling && mentionsSelf) return false;
      if (mentionsSibling && !mentionsSelf) return false;
      return true;
    });
}

function uniqueExamples(examples) {
  const seen = new Set();
  const out = [];
  for (const example of examples || []) {
    const de = String(example?.de || "").trim();
    const lv = String(example?.lv || "").trim();
    if (!de || !lv) continue;
    const key = `${de}|${lv}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ de, lv });
  }
  return out;
}

function buildStudyId(level, de, compareId) {
  const parsed = parseGermanWord(de);
  const base = `${level.toLowerCase()}-${slugify(parsed.de)}`;
  return base || `${level.toLowerCase()}-${slugify(compareId)}`;
}

function buildTip(word, card, bare, siblings) {
  const tips = cleanLines(word.tip, bare, siblings);
  if (word.description) tips.unshift(word.description);
  while (tips.length < 2) tips.push(`Izmanto ${word.de}, kad konteksts atbilst šai nozīmei.`);
  return tips.slice(0, 2);
}

function buildImportant(word, card, bare, siblings) {
  const items = cleanLines(word.important, bare, siblings);
  while (items.length < 2) items.push(`${word.de}: pārbaudi kontekstu pirms lietošanas.`);
  return items.slice(0, 4);
}

function wordToStandardEntry(word, card, level, compareId, existingIds) {
  const parsed = parseGermanWord(word.de);
  const bare = bareDe(parsed.de);
  const siblings = siblingBares(card.words || [], word.de);
  let studyId = buildStudyId(level, parsed.de, compareId);
  if (existingIds.has(studyId)) {
    studyId = `${studyId}-study`;
  }
  while (existingIds.has(studyId)) {
    studyId = `${studyId}-2`;
  }
  existingIds.add(studyId);

  const explanation = cleanLines(word.explanation, bare, siblings);
  if (!explanation.length || !/galvenā doma/i.test(explanation[0])) {
    const seed = word.description || normalizeLv(word.lv) || parsed.de;
    explanation.unshift(`Galvenā doma: ${seed}`);
  }

  const examples = uniqueExamples(word.examples);
  const tip = buildTip(word, card, bare, siblings);
  const important = buildImportant(word, card, bare, siblings);

  const entry = {
    de: parsed.de,
    lv: normalizeLv(word.lv) || parsed.de,
    level,
    study: {
      id: studyId,
      layout: "standardStudy",
      translation: normalizeLv(word.lv) || parsed.de,
      explanation,
      examples: examples.slice(0, 6),
      tip,
      important,
      sectionAccents: word.sectionAccents || {},
    },
  };

  if (parsed.de_article) entry.de_article = parsed.de_article;

  return entry;
}

function splitComparisonCard(card, existingIds) {
  const study = card.study;
  if (!study || study.layout !== "comparisonStudy") return [];
  const words = Array.isArray(study.words) ? study.words : [];
  const compareId = study.id || card.id || "compare";
  const level = card.level || "A2";
  return words.map((word) => wordToStandardEntry(word, study, level, compareId, existingIds));
}

function processLevelFile({ file, key }) {
  const words = loadWords(file, key);
  const existingIds = new Set(
    words.map((entry) => entry.study?.id).filter(Boolean)
  );
  const existingDe = new Set(words.map((entry) => `${entry.level}|${entry.de.toLowerCase()}`));

  const output = [];
  let removed = 0;
  let added = 0;

  for (const entry of words) {
    if (entry.study?.layout === "comparisonStudy") {
      const replacements = splitComparisonCard(entry, existingIds).filter((candidate) => {
        const keyDe = `${candidate.level}|${candidate.de.toLowerCase()}`;
        if (existingDe.has(keyDe) && !candidate.study) return false;
        if (existingDe.has(keyDe)) {
          const hasStudy = words.some(
            (w) => w.de.toLowerCase() === candidate.de.toLowerCase()
              && w.level === candidate.level
              && w.study?.layout === "standardStudy"
          );
          return !hasStudy;
        }
        existingDe.add(keyDe);
        return true;
      });
      output.push(...replacements);
      removed += 1;
      added += replacements.length;
      continue;
    }
    output.push(entry);
  }

  fs.writeFileSync(path.join(root, file), serializeWords(key, output), "utf8");
  return { file, removed, added, total: output.length };
}

function addComparisonStudyOnlyCards() {
  const cards = loadComparisonStudyCards().filter((card) => card.study?.layout === "comparisonStudy");
  if (!cards.length) return { added: 0 };

  const byLevel = {};
  for (const card of cards) {
    const level = card.level || "A2";
    if (!byLevel[level]) byLevel[level] = [];
    byLevel[level].push(card);
  }

  let added = 0;
  for (const [level, levelCards] of Object.entries(byLevel)) {
    const fileInfo = DATA_FILES.find((item) => item.key === `${level}_WORDS`);
    if (!fileInfo) continue;

    const words = loadWords(fileInfo.file, fileInfo.key);
    const existingIds = new Set(words.map((entry) => entry.study?.id).filter(Boolean));
    const existingDe = new Set(words.map((entry) => `${entry.level}|${entry.de.toLowerCase()}`));

    for (const card of levelCards) {
      for (const entry of splitComparisonCard(card, existingIds)) {
        const keyDe = `${entry.level}|${entry.de.toLowerCase()}`;
        if (existingDe.has(keyDe)) continue;
        words.push(entry);
        existingDe.add(keyDe);
        added += 1;
      }
    }

    fs.writeFileSync(path.join(root, fileInfo.file), serializeWords(fileInfo.key, words), "utf8");
  }

  return { added };
}

function emptyComparisonStudyFile() {
  const stub = `const COMPARISON_STUDY_CARDS = [];\n\nwindow.COMPARISON_STUDY_CARDS = COMPARISON_STUDY_CARDS;\n`;
  fs.writeFileSync(path.join(root, "data/comparisonStudy.js"), stub, "utf8");
}

function syncWwwData() {
  for (const { file } of DATA_FILES) {
    const src = path.join(root, file);
    const dest = path.join(root, file.replace(/^data\//, "www/data/"));
    fs.copyFileSync(src, dest);
  }
  fs.copyFileSync(
    path.join(root, "data/comparisonStudy.js"),
    path.join(root, "www/data/comparisonStudy.js")
  );
}

function verifyNoComparisonStudy() {
  const issues = [];
  for (const { file, key } of DATA_FILES) {
    const words = loadWords(file, key);
    const remaining = words.filter((entry) => entry.study?.layout === "comparisonStudy");
    if (remaining.length) {
      issues.push(`${file}: ${remaining.length} comparisonStudy entries remain`);
    }
  }
  const comp = loadComparisonStudyCards().filter((card) => card.study?.layout === "comparisonStudy");
  if (comp.length) issues.push(`comparisonStudy.js: ${comp.length} comparison cards remain`);
  return issues;
}

function main() {
  const results = DATA_FILES.map(processLevelFile);
  const extra = addComparisonStudyOnlyCards();
  emptyComparisonStudyFile();
  syncWwwData();

  console.log("Level file results:");
  for (const result of results) {
    console.log(`  ${result.file}: removed ${result.removed} comparison cards, added ${result.added} standardStudy entries (total ${result.total})`);
  }
  console.log(`comparisonStudy.js-only cards added: ${extra.added}`);

  const issues = verifyNoComparisonStudy();
  if (issues.length) {
    console.error("\nVerification failed:");
    issues.forEach((issue) => console.error(`  - ${issue}`));
    process.exit(1);
  }

  console.log("\nVerification OK: no comparisonStudy cards remain.");
}

if (require.main === module) main();

module.exports = { wordToStandardEntry, splitComparisonCard };
