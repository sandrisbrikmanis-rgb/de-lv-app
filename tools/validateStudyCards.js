#!/usr/bin/env node
// tools/validateStudyCards.js
// Pārbauda study kartītes pret STUDY_CARD_RULES / COMPARISON_STUDY_RULES.
// BLOCKER = aptur build; WARNING = tikai ziņo.
// Palaist no projekta saknes:  node tools/validateStudyCards.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");

const WORD_FILES = ["a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js"];
const WORD_VARS = ["A1_WORDS", "A2_WORDS", "B1_WORDS", "B2_WORDS", "C1_WORDS", "C2_WORDS"];

const COLOR_KEYS = new Set(["blue", "green", "yellow", "red", "purple", "orange"]);

const blockers = [];
const warnings = [];
const cardStatus = new Map();
let checked = 0;

function cardLabel(entry) {
  return entry.study?.id || entry.id || entry.de || "(bez id/de)";
}

function cardKey(file, entry) {
  return `${file}::${cardLabel(entry)}`;
}

function trackCard(file, entry, severity) {
  const key = cardKey(file, entry);
  if (!cardStatus.has(key)) {
    cardStatus.set(key, { blockers: 0, warnings: 0 });
  }
  cardStatus.get(key)[severity]++;
}

function reportBlocker(file, entry, rule) {
  blockers.push(`${file} · ${cardLabel(entry)} · ${rule}`);
  trackCard(file, entry, "blockers");
}

function reportWarning(file, entry, rule) {
  warnings.push(`${file} · ${cardLabel(entry)} · ${rule}`);
  trackCard(file, entry, "warnings");
}

function isNonempty(value) {
  if (value == null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0 && value.some(isNonempty);
  if (typeof value === "object") {
    return Object.keys(value).length > 0 && Object.values(value).some(isNonempty);
  }
  return true;
}

function countInRange(arr, min, max) {
  const n = Array.isArray(arr) ? arr.length : 0;
  return n >= min && n <= max;
}

function countExplanationPoints(explanation) {
  if (Array.isArray(explanation)) {
    return explanation.filter((item) => String(item).trim()).length;
  }
  if (typeof explanation === "string") {
    const text = explanation.trim();
    if (!text) return 0;
    return text.split(/\.\s+/).filter((part) => part.trim().length > 0).length;
  }
  return 0;
}

function countLeafTexts(value, skipKeys = new Set()) {
  const texts = [];
  const walk = (node) => {
    if (node == null) return;
    if (typeof node === "string") {
      const text = node.trim();
      if (text) texts.push(text);
      return;
    }
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (typeof node === "object") {
      for (const [k, v] of Object.entries(node)) {
        if (skipKeys.has(k)) continue;
        walk(v);
      }
    }
  };
  walk(value);
  return texts;
}

function countTipItems(tip) {
  if (!tip) return 0;
  if (Array.isArray(tip)) return tip.filter((item) => String(item).trim()).length;
  if (typeof tip === "string") return tip.trim() ? 1 : 0;
  return countLeafTexts(tip, new Set(["separator", "icon"])).length;
}

function countImportantItems(important) {
  if (!important) return 0;
  if (Array.isArray(important)) {
    return important.filter((item) => String(item).trim()).length;
  }
  if (typeof important === "string") return important.trim() ? 1 : 0;
  if (typeof important === "object") {
    let count = 0;
    if (typeof important.text === "string" && important.text.trim()) count++;
    if (typeof important.example === "string" && important.example.trim()) count++;
    for (const value of Object.values(important)) {
      if (Array.isArray(value)) {
        count += value.filter((item) => String(item).trim()).length;
      }
    }
    return count;
  }
  return 0;
}

function getComparisonRows(study) {
  if (Array.isArray(study.comparison) && study.comparison.length) return study.comparison;
  if (Array.isArray(study.comparisonTable) && study.comparisonTable.length) {
    return study.comparisonTable;
  }
  return [];
}

function collectAccentTerms(node, terms = []) {
  if (!node || typeof node !== "object") return terms;
  if (Array.isArray(node)) {
    node.forEach((item) => collectAccentTerms(item, terms));
    return terms;
  }
  for (const [key, value] of Object.entries(node)) {
    if (COLOR_KEYS.has(key) && Array.isArray(value)) {
      for (const term of value) {
        if (typeof term === "string" && term.trim()) terms.push(term.trim());
      }
    } else if (value && typeof value === "object") {
      collectAccentTerms(value, terms);
    }
  }
  return terms;
}

function collectStudyTexts(study, skipKeys = new Set(["sectionAccents", "accents", "layout", "id", "type"])) {
  const texts = [];
  const walk = (node) => {
    if (node == null) return;
    if (typeof node === "string") {
      const text = node.trim();
      if (text) texts.push(text);
      return;
    }
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (typeof node === "object") {
      for (const [key, value] of Object.entries(node)) {
        if (skipKeys.has(key)) continue;
        walk(value);
      }
    }
  };
  walk(study);
  return texts;
}

function hasWordBoundary(text, term) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(^|[^A-Za-zÀ-ÖØ-öø-ÿß])${escaped}([^A-Za-zÀ-ÖØ-öø-ÿß]|$)`, "i");
  return re.test(text);
}

function validateAccents(file, entry, study) {
  const accents = study.sectionAccents;
  if (!accents) return;

  const terms = collectAccentTerms(accents);
  const texts = collectStudyTexts(study);

  for (const term of terms) {
    for (const text of texts) {
      const trimmed = text.trim();
      if (trimmed.toLowerCase() !== term.toLowerCase()) continue;
      if (trimmed.includes(" ") || trimmed.length > 15) {
        reportBlocker(file, entry, `akcentā iekrāsots vesels teikums/lauks (“${term}”)`);
        break;
      }
    }

    for (const text of texts) {
      if (text.trim().toLowerCase() === term.toLowerCase()) continue;
      if (!text.toLowerCase().includes(term.toLowerCase())) continue;
      if (!hasWordBoundary(text, term)) {
        reportBlocker(file, entry, `akcenta termins “${term}” nav pa vārda robežu (“${text}”)`);
      }
    }
  }
}

function getLayout(study) {
  if (study.layout === "comparisonStudy") return "comparisonStudy";
  if (study.layout === "standardStudy" || study.explanation != null) return "standardStudy";
  return null;
}

function validateStandardStudy(file, entry, study) {
  const explanationCount = countExplanationPoints(study.explanation);
  if (!isNonempty(study.explanation) || explanationCount === 0) {
    reportBlocker(file, entry, "explanation: trūkst vai tukšs");
  } else if (explanationCount < 5) {
    reportWarning(file, entry, `explanation: ieteicams ≥5 punkti (ir ${explanationCount})`);
  }

  const examplesCount = Array.isArray(study.examples) ? study.examples.length : 0;
  if (!isNonempty(study.examples)) {
    reportBlocker(file, entry, "examples: trūkst vai tukšs");
  } else if (!countInRange(study.examples, 6, 8)) {
    reportWarning(file, entry, `examples: ieteicams 6–8 elementi (ir ${examplesCount})`);
  }

  const comparisonRows = getComparisonRows(study);
  if (!comparisonRows.length) {
    reportBlocker(file, entry, "comparison/comparisonTable: trūkst vai tukšs");
  } else if (!countInRange(comparisonRows, 4, 6)) {
    reportWarning(file, entry, `comparison/comparisonTable: ieteicams 4–6 elementi (ir ${comparisonRows.length})`);
  }

  const tipCount = countTipItems(study.tip);
  if (!isNonempty(study.tip) || tipCount === 0) {
    reportBlocker(file, entry, "tip: trūkst vai tukšs");
  } else if (tipCount !== 2) {
    reportWarning(file, entry, `tip: ieteicams tieši 2 (ir ${tipCount})`);
  }

  const importantCount = countImportantItems(study.important);
  if (!isNonempty(study.important) || importantCount === 0) {
    reportBlocker(file, entry, "important: trūkst vai tukšs");
  } else if (importantCount < 2 || importantCount > 4) {
    reportWarning(file, entry, `important: ieteicams 2–4 (ir ${importantCount})`);
  }

  if (!isNonempty(study.sectionAccents)) {
    reportBlocker(file, entry, "sectionAccents: trūkst vai tukšs");
  } else {
    validateAccents(file, entry, study);
  }
}

function validateComparisonStudy(file, entry, study) {
  const required = [
    "title",
    "subtitle",
    "lead",
    "words",
    "examples",
    "comparisonTable",
    "tip",
    "important",
    "sectionAccents",
  ];

  for (const field of required) {
    if (!isNonempty(study[field])) {
      reportBlocker(file, entry, `${field}: obligāts un nedrīkst būt tukšs`);
    }
  }

  if (isNonempty(study.sectionAccents)) {
    validateAccents(file, entry, study);
  }
}

function validateEntry(file, entry) {
  if (!entry?.study || typeof entry.study !== "object") return;

  const study = entry.study;
  const layout = getLayout(study);
  if (!layout) return;

  checked++;
  const key = cardKey(file, entry);
  if (!cardStatus.has(key)) {
    cardStatus.set(key, { blockers: 0, warnings: 0 });
  }

  if (layout === "comparisonStudy") {
    validateComparisonStudy(file, entry, study);
  } else {
    validateStandardStudy(file, entry, study);
  }
}

function loadDataFile(file) {
  const full = path.join(DATA_DIR, file);
  if (!fs.existsSync(full)) {
    console.log(`⚠️  Nav atrasts: ${file}`);
    return;
  }
  const win = {};
  const ctx = vm.createContext({ window: win, console });
  vm.runInContext(fs.readFileSync(full, "utf8"), ctx, { filename: file });
  return win;
}

function summarizeCards() {
  let withBlocker = 0;
  let onlyWarning = 0;
  let clean = 0;

  for (const status of cardStatus.values()) {
    if (status.blockers > 0) withBlocker++;
    else if (status.warnings > 0) onlyWarning++;
    else clean++;
  }

  const unreportedClean = Math.max(0, checked - withBlocker - onlyWarning - clean);
  clean += unreportedClean;

  return { withBlocker, onlyWarning, clean };
}

function main() {
  for (let i = 0; i < WORD_FILES.length; i++) {
    const file = WORD_FILES[i];
    const win = loadDataFile(file);
    if (!win) continue;
    const words = win[WORD_VARS[i]];
    if (!Array.isArray(words)) continue;
    for (const entry of words) validateEntry(file, entry);
  }

  const compWin = loadDataFile("comparisonStudy.js");
  if (compWin?.COMPARISON_STUDY_CARDS) {
    for (const entry of compWin.COMPARISON_STUDY_CARDS) {
      validateEntry("comparisonStudy.js", entry);
    }
  }

  const { withBlocker, onlyWarning, clean } = summarizeCards();

  if (blockers.length) {
    console.log("\n=== BLOCKERS ===\n");
    blockers.forEach((line) => console.log(line));
  }

  if (warnings.length) {
    console.log("\n=== WARNINGS ===\n");
    warnings.forEach((line) => console.log(line));
  }

  if (!blockers.length && !warnings.length) {
    console.log("\n✅ Visas study kartītes pilnībā tīras.\n");
  }

  console.log("=== Kopsavilkums ===");
  console.log(`Pārbaudītas study kartītes: ${checked}`);
  console.log(`Ar blocker: ${withBlocker}`);
  console.log(`Tikai ar warning (bez blocker): ${onlyWarning}`);
  console.log(`Pilnībā tīras: ${clean}`);
  console.log(`Blocker pārkāpumi: ${blockers.length}`);
  console.log(`Warning pārkāpumi: ${warnings.length}`);

  if (blockers.length) process.exit(1);
}

main();
