#!/usr/bin/env node
/**
 * Migrates comparisonStudy cards: each entry in study.words gets a full
 * standardStudy-style block (Galvenā doma, Skaidrojums, Piemēri, Padoms, Svarīgi).
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const DATA_FILES = ["data/a1.js", "data/a2.js", "data/b1.js", "data/b2.js", "data/c1.js", "data/c2.js"];
const WWW_FILES = DATA_FILES.map((f) => f.replace(/^data\//, "www/data/"));
const COMPARISON_FILE = "data/comparisonStudy.js";
const WWW_COMPARISON_FILE = "www/data/comparisonStudy.js";

const ACCENTS = ["blue", "green", "yellow", "orange", "red", "purple"];

function bareDe(value) {
  return String(value || "").replace(/^(der|die|das)\s+/i, "").trim().toLowerCase();
}

function studyLines(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  return String(value).split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
}

function uniqueExamples(list) {
  const seen = new Set();
  const out = [];
  for (const item of list) {
    const de = String(item?.de || "").trim();
    const lv = String(item?.lv || "").trim();
    if (!de) continue;
    const key = `${de}|${lv}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ de, lv });
  }
  return out;
}

function mentionsWord(text, bare) {
  return String(text || "").toLowerCase().includes(bare);
}

function rowsForWord(card, bare) {
  return (card.comparisonTable || []).filter((row) => bareDe(row.de) === bare);
}

function buildExplanation(word, card, rows) {
  if (Array.isArray(word.explanation) && word.explanation.length >= 3 && /galvenā doma/i.test(word.explanation[0] || "")) {
    const lines = [...word.explanation];
    while (lines.length < 5) {
      lines.push(`Konteksts parāda, kad tieši lietot ${word.de}.`);
      if (lines.length >= 5) break;
    }
    return lines.slice(0, 8);
  }

  const lines = [];
  const seed = word.description || rows[0]?.meaning || `${word.de} šajā salīdzinājumā`;
  lines.push(`Galvenā doma: ${String(seed).replace(/^Galvenā doma:\s*/i, "")}`);

  for (const row of rows) {
    if (row.meaning) lines.push(`${word.de} galvenokārt nozīmē: ${row.meaning}.`);
    if (row.describes) lines.push(`Bieži raksturo: ${row.describes}.`);
  }

  for (const line of studyLines(card.explanation)) {
    if (mentionsWord(line, bareDe(word.de))) lines.push(line);
  }

  const fillers = [
    `Šo vārdu salīdzini ar pārējiem šajā kartītē, lai izvēlētos pareizo variantu.`,
    `Piemēros meklē tipisku ikdienas lietojumu.`,
    `Ja šaubies, pārbaudi, vai runa ir par stāvokli vai darbību.`,
    `Konteksts un darbības virziens nosaka pareizo izvēli.`,
  ];
  for (const filler of fillers) {
    if (lines.length >= 5) break;
    if (!lines.includes(filler)) lines.push(filler);
  }

  return lines.slice(0, 8);
}

function buildExamples(word, card, rows) {
  const existing = Array.isArray(word.examples)
    ? uniqueExamples(word.examples).filter((example) => example.lv)
    : [];
  if (existing.length >= 4) return existing.slice(0, 6);

  const bare = bareDe(word.de);
  const collected = [...existing];

  if (word.example) {
    const parts = String(word.example).split(/\s*=\s*/);
    collected.push({ de: parts[0]?.trim(), lv: parts[1]?.trim() || "" });
  }

  for (const example of card.examples || []) {
    if (mentionsWord(example.de, bare)) collected.push(example);
  }

  for (const row of rows) {
    if (row.example) collected.push({ de: row.example, lv: row.translation || "" });
  }

  for (const line of card.importantComparison || []) {
    const parts = String(line).split(/\s*=\s*/);
    if (parts[0] && parts[1] && mentionsWord(parts[0], bare)) {
      collected.push({ de: parts[0].trim(), lv: parts[1].trim() });
    }
  }

  let result = uniqueExamples(collected).filter((example) => example.lv);

  if (!result.length && rows[0]?.example && rows[0]?.translation) {
    result.push({ de: rows[0].example, lv: rows[0].translation });
  }
  if (!result.length && word.example) {
    const parts = String(word.example).split(/\s*=\s*/);
    result.push({ de: parts[0]?.trim(), lv: parts[1]?.trim() || word.lv || "" });
  }

  const seed = result[0] || {
    de: rows[0]?.example || `${word.de}.`,
    lv: rows[0]?.translation || word.lv || word.de,
  };
  while (result.length < 4) {
    result.push({ de: seed.de, lv: seed.lv });
  }

  return result.slice(0, 6);
}

function buildTip(word, card) {
  if (Array.isArray(word.tip) && word.tip.length >= 2) return word.tip.slice(0, 2);
  if (typeof word.tip === "string" && word.tip.trim()) return [word.tip.trim(), `Izmanto ${word.de}, kad konteksts atbilst šai nozīmei.`];

  const bare = bareDe(word.de);
  const tips = [];

  if (card.tip?.left && mentionsWord(card.tip.left, bare)) {
    const others = String(card.subtitle || "")
      .split("•")
      .map((part) => bareDe(part))
      .filter((part) => part && part !== bare);
    const mentionsOthers = others.some((part) => mentionsWord(card.tip.left, part));
    if (!mentionsOthers) tips.push(card.tip.left);
  }
  if (Array.isArray(card.tip?.rightItems)) {
    const match = card.tip.rightItems.find((item) => bareDe(item.de) === bare);
    if (match) tips.push(`${word.de} = ${match.lv}`);
  }
  if (Array.isArray(card.tip)) {
    card.tip.filter((line) => mentionsWord(line, bare)).forEach((line) => tips.push(line));
  }
  if (word.description) tips.push(word.description);

  while (tips.length < 2) {
    tips.push(`Izmanto ${word.de}, kad konteksts atbilst šai nozīmei.`);
    if (tips.length >= 2) break;
  }

  return tips.slice(0, 2);
}

function buildImportant(word, card) {
  if (Array.isArray(word.important) && word.important.length >= 2) return word.important.slice(0, 4);

  const bare = bareDe(word.de);
  const items = [];

  for (const line of card.important || []) {
    if (mentionsWord(line, bare)) items.push(line);
  }
  for (const row of card.mistakes || []) {
    if (mentionsWord(row.wrong, bare) || mentionsWord(row.right, bare)) {
      items.push(`Nepareizi: ${row.wrong} → Pareizi: ${row.right}`);
    }
  }
  for (const line of card.remember || []) {
    if (mentionsWord(line, bare)) items.push(line);
  }
  if (word.description) items.push(word.description);

  while (items.length < 2) {
    items.push(`${word.de}: pirms lietošanas pārbaudi kontekstu un salīdzini ar citiem vārdiem kartītē.`);
    if (items.length >= 2) break;
  }

  return items.slice(0, 4);
}

function buildWordSectionAccents(word, index, card) {
  if (word.sectionAccents && Object.keys(word.sectionAccents).length) return word.sectionAccents;

  const accent = ACCENTS[index % ACCENTS.length];
  const bare = bareDe(word.de);
  const lvTerms = String(word.lv || "")
    .split(/[•/]/)
    .map((part) => part.trim())
    .filter(Boolean);

  const sectionAccents = {
    explanation: {
      [accent]: [word.de, bare].filter(Boolean),
      purple: lvTerms,
    },
    examples: (word.examples || []).map(() => ({
      de: { [accent]: [word.de, bare].filter(Boolean) },
      lv: { purple: lvTerms },
    })),
    tip: lvTerms.map((term) => ({ purple: [term] })),
    important: [{ [accent]: [word.de] }],
  };

  const cardRules = card.sectionAccents?.comparisonCards?.[index];
  if (cardRules) {
    sectionAccents.explanation = { ...sectionAccents.explanation, ...cardRules.de, ...cardRules.lv };
  }

  return sectionAccents;
}

function enrichWord(word, card, index) {
  const rows = rowsForWord(card, bareDe(word.de));
  const explanation = buildExplanation(word, card, rows);
  const examples = buildExamples(word, card, rows);
  const tip = buildTip(word, card);
  const important = buildImportant(word, card);

  return {
    icon: word.icon || "•",
    lv: word.lv || rows[0]?.lv || "",
    de: word.de || rows[0]?.de || "",
    accent: word.accent || ACCENTS[index % ACCENTS.length],
    explanation,
    examples,
    tip,
    important,
    sectionAccents: buildWordSectionAccents({ ...word, examples }, index, card),
  };
}

function migrateStudy(study) {
  if (!study || study.layout !== "comparisonStudy") return false;
  const words = Array.isArray(study.words) ? study.words : [];
  if (!words.length) return false;

  study.words = words.map((word, index) => enrichWord(word, study, index));
  return true;
}

function loadWords(file) {
  const win = {};
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), vm.createContext({ window: win }));
  const key = Object.keys(win).find((k) => k.endsWith("_WORDS"));
  return { key, words: win[key] || [] };
}

function loadComparisonCards() {
  const win = {};
  vm.runInContext(fs.readFileSync(path.join(root, COMPARISON_FILE), "utf8"), vm.createContext({ window: win }));
  return win.COMPARISON_STUDY_CARDS || [];
}

function serializeWords(key, words) {
  return `const ${key} = ${JSON.stringify(words, null, 2)};\n\nwindow.${key} = ${key};\n`;
}

function buildRichWordPatches(cards) {
  const patches = {};
  for (const card of cards) {
    const study = card.study;
    if (!study || study.layout !== "comparisonStudy" || !Array.isArray(study.words)) continue;
    patches[study.id || card.id] = study.words;
  }
  return patches;
}

function applyRichWordPatches(source, patches) {
  const marker = "// BEGIN_COMPARISON_RICH_WORD_PATCHES";
  const endMarker = "// END_COMPARISON_RICH_WORD_PATCHES";
  const block = `${marker}
const COMPARISON_RICH_WORD_PATCHES = ${JSON.stringify(patches, null, 2)};

for (const card of COMPARISON_STUDY_CARDS) {
  const study = card.study;
  if (!study || study.layout !== "comparisonStudy") continue;
  const patch = COMPARISON_RICH_WORD_PATCHES[study.id || card.id];
  if (patch) study.words = patch;
}
${endMarker}
`;

  if (source.includes(marker)) {
    const start = source.indexOf(marker);
    const end = source.indexOf(endMarker);
    if (end < 0) throw new Error("Missing END_COMPARISON_RICH_WORD_PATCHES marker");
    return `${source.slice(0, start)}${block}${source.slice(end + endMarker.length)}`;
  }

  const insertBefore = "// BEGIN_COMPARISON_STUDY_HIGHLIGHT_OVERRIDES";
  const idx = source.indexOf(insertBefore);
  if (idx < 0) throw new Error("Missing highlight overrides marker");
  return `${source.slice(0, idx)}${block}\n${source.slice(idx)}`;
}

function migrateLevelFile(relPath) {
  const { key, words } = loadWords(relPath);
  let changed = 0;
  for (const word of words) {
    if (migrateStudy(word.study)) changed += 1;
  }
  const serialized = serializeWords(key, words);
  fs.writeFileSync(path.join(root, relPath), serialized, "utf8");
  return changed;
}

function migrateComparisonStudyFile() {
  const cards = loadComparisonCards();
  let changed = 0;
  for (const card of cards) {
    if (card.study && migrateStudy(card.study)) changed += 1;
  }

  const patches = buildRichWordPatches(cards);
  const source = fs.readFileSync(path.join(root, COMPARISON_FILE), "utf8");
  const patched = applyRichWordPatches(source, patches);
  fs.writeFileSync(path.join(root, COMPARISON_FILE), patched, "utf8");
  return changed;
}

function syncWwwCopies() {
  for (const file of DATA_FILES) {
    const src = path.join(root, file);
    const dest = path.join(root, file.replace(/^data\//, "www/data/"));
    fs.copyFileSync(src, dest);
  }
  fs.copyFileSync(path.join(root, COMPARISON_FILE), path.join(root, WWW_COMPARISON_FILE));
}

function main() {
  let total = 0;
  for (const file of DATA_FILES) {
    const count = migrateLevelFile(file);
    console.log(`${file}: migrated ${count} comparison cards`);
    total += count;
  }
  const compCount = migrateComparisonStudyFile();
  console.log(`${COMPARISON_FILE}: migrated ${compCount} comparison cards`);
  total += compCount;
  syncWwwCopies();
  console.log(`\nTotal migrated cards: ${total}`);
}

if (require.main === module) main();

module.exports = { enrichWord, migrateStudy };
