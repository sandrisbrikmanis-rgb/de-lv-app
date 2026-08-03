#!/usr/bin/env node
/**
 * Deterministic ET-DE structural fixes per audit remediation task.
 * Run: node scripts/apply-et-structural-fixes.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  const key = Object.keys(sandbox.window).find((k) => k.endsWith("_WORDS"));
  return key ? sandbox.window[key] : [];
}

const stats = {
  deFieldFixed: 0,
  dePluralFilled: 0,
  poihiideeRemoved: 0,
  semanticAccentAdded: 0,
  etDuplicatesRemoved: 0,
  courseLessonFixed: 0,
  poihiideeCards: [],
};

const DE_PLURAL_FIXES = {
  b1: [
    "Hass", "Klatsch", "Kosmos", "Kummer", "Kunde", "Leid", "Lob", "Mars",
    "Mitleid", "Mobbing", "Mobilfunk", "Mumps", "Nachwuchs", "Plunder", "Putz",
    "Skispringen", "Erbe",
  ],
  b2: ["Akrobatik", "Bewusstsein", "Doping", "Dumping", "Eifer"],
  c1: [
    "Leichtathletik", "Morgengymnastik", "Schneewittchen", "Eisenbahnverkehr",
    "Friedenspolitik", "Matsch",
  ],
};

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const lvData = {};
const etData = {};

for (const level of LEVELS) {
  lvData[level] = loadWords(path.join(ROOT, "data", `${level}.js`));
  etData[level] = loadWords(path.join(ROOT, "data", "et", `${level}.js`));
}

function findLvEntry(level, de) {
  return lvData[level].find((w) => w.de === de);
}

function findEtEntry(level, de) {
  return etData[level].find((w) => w.de === de);
}

function fixFuhrunternehmen() {
  const entry = findEtEntry("c1", "Fuhrunternehmen");
  if (!entry) return;
  entry.de = "Führunternehmen";
  entry.de_plural = "die Führunternehmen";
  stats.deFieldFixed = 1;
}

function fillDePlural() {
  for (const [level, words] of Object.entries(DE_PLURAL_FIXES)) {
    for (const de of words) {
      const lv = findLvEntry(level, de);
      const et = findEtEntry(level, de);
      if (!lv || !et) continue;
      if (!lv.de_plural) continue;
      if (!et.de_plural) {
        et.de_plural = lv.de_plural;
        stats.dePluralFilled++;
      }
    }
  }
}

function lvPurpleTerms(lvCard) {
  const sa = lvCard?.study?.sectionAccents?.explanation;
  if (!sa || !Array.isArray(sa.purple)) return [];
  return sa.purple.filter((t) => !String(t).startsWith("Galvenā"));
}

function etFlashAndStudyParts(etCard) {
  const flashParts = (etCard.lv || "").split("•").map((s) => s.trim()).filter(Boolean);
  const studyParts = (etCard.study?.translation || "").split("•").map((s) => s.trim()).filter(Boolean);
  const seen = new Set();
  const out = [];
  for (const p of [...flashParts, ...studyParts]) {
    const key = p.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(p);
    }
  }
  return out;
}

function parseExplanationEstonianTerms(etCard) {
  const expl = etCard.study?.explanation;
  const first = Array.isArray(expl) ? expl[0] || "" : String(expl || "");
  if (!first.includes("Põhiidee")) return [];

  const terms = [];
  const afterColon = first.split(/Põhiidee:\s*/i).pop() || "";
  const orSegments = afterColon.split(/\s+või\s+/i);
  for (const segment of orSegments) {
    const cleaned = segment.replace(/\.\s*$/, "").trim();
    const commaParts = cleaned.split(",");
    for (const part of commaParts) {
      const trimmed = part.trim();
      if (trimmed.toLowerCase().includes("tähendab")) {
        const after = trimmed.split(/tähendab/i).pop().trim();
        const last = after.split(/\s+/).pop().replace(/[.,]+$/, "");
        if (last.length >= 3 && last.length <= 20) terms.push(last);
      } else {
        const words = trimmed.split(/\s+/).filter(Boolean);
        for (const w of words) {
          const clean = w.replace(/[.,]+$/, "");
          if (clean.length >= 3 && clean.length <= 20 && /^[a-zõäöü]+$/i.test(clean)) {
            terms.push(clean);
          }
        }
      }
    }
  }
  return [...new Set(terms)];
}

function fold(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
}

function studyExplanationOnlyBlob(study) {
  const parts = [];
  const ex = study.explanation;
  if (Array.isArray(ex)) parts.push(...ex);
  else if (ex) parts.push(ex);
  if (Array.isArray(study.explanationLines)) parts.push(...study.explanationLines);
  return parts.join("\n");
}

function termMatchesExplanation(study, term) {
  const hay = fold(studyExplanationOnlyBlob(study));
  const needle = fold(term);
  if (!needle || needle.length < 2) return false;
  return hay.includes(needle);
}

function buildPurpleReplacement(etCard, lvCard) {
  const lvPurple = lvPurpleTerms(lvCard);
  const etParts = etFlashAndStudyParts(etCard).filter((t) =>
    termMatchesExplanation(etCard.study, t)
  );
  const explTerms = parseExplanationEstonianTerms(etCard).filter((t) =>
    termMatchesExplanation(etCard.study, t)
  );
  const pool = [...new Set([...etParts, ...explTerms])];

  if (lvPurple.length === 0) return null;
  if (pool.length === 0) return null;

  const result = [];
  for (let i = 0; i < lvPurple.length; i++) {
    if (i < pool.length && pool[i]) result.push(pool[i]);
  }
  return result.length > 0 ? result : null;
}

function fixExplanationPurple(etCard, lvCard) {
  const sa = etCard.study?.sectionAccents;
  if (!sa?.explanation?.purple || !Array.isArray(sa.explanation.purple)) return false;
  const purple = sa.explanation.purple;
  if (!purple.includes("Põhiidee")) return false;

  const without = purple.filter((x) => x !== "Põhiidee");
  const lvPurple = lvPurpleTerms(lvCard);
  const target = buildPurpleReplacement(etCard, lvCard);

  let newPurple;
  if (target && target.length >= lvPurple.length) {
    newPurple = target
      .slice(0, lvPurple.length)
      .filter((t) => termMatchesExplanation(etCard.study, t));
  } else if (target && without.length + target.length > without.length) {
    const existing = new Set(without.map((x) => x.toLowerCase()));
    newPurple = [...without];
    for (const t of target) {
      if (!existing.has(t.toLowerCase()) && termMatchesExplanation(etCard.study, t)) {
        newPurple.push(t);
        existing.add(t.toLowerCase());
      }
      if (newPurple.length >= lvPurple.length) break;
    }
  } else {
    newPurple = without;
    if (lvPurple.length > newPurple.length && target) {
      for (const t of target) {
        if (newPurple.length >= lvPurple.length) break;
        if (
          termMatchesExplanation(etCard.study, t) &&
          !newPurple.some((x) => x.toLowerCase() === t.toLowerCase())
        ) {
          newPurple.push(t);
        }
      }
    }
  }

  const added = newPurple.filter(
    (x) =>
      !without.some((y) => y.toLowerCase() === x.toLowerCase()) &&
      termMatchesExplanation(etCard.study, x)
  ).length;
  if (added > 0) stats.semanticAccentAdded += added;

  sa.explanation.purple = newPurple;
  stats.poihiideeRemoved++;
  if (!stats.poihiideeCards.includes(etCard.de)) stats.poihiideeCards.push(etCard.de);
  return true;
}

function removePoihiideeFromAllAccents(sectionAccents, etCard) {
  let removed = false;
  function walk(obj) {
    if (Array.isArray(obj)) {
      if (obj.includes("Põhiidee")) {
        const filtered = obj.filter((x) => x !== "Põhiidee");
        obj.length = 0;
        obj.push(...filtered);
        removed = true;
      }
      return;
    }
    if (!obj || typeof obj !== "object") return;
    for (const key of Object.keys(obj)) walk(obj[key]);
  }
  walk(sectionAccents);
  if (removed) {
    stats.poihiideeRemoved++;
    if (!stats.poihiideeCards.includes(etCard.de)) stats.poihiideeCards.push(etCard.de);
  }
}

function fixPoihiideeAccents() {
  for (const level of ["a1", "a2", "b1", "c1"]) {
    for (const etCard of etData[level]) {
      if (!etCard.study?.sectionAccents) continue;
      if (!JSON.stringify(etCard.study.sectionAccents).includes("Põhiidee")) continue;
      const lvCard = findLvEntry(level, etCard.de) || {};

      fixExplanationPurple(etCard, lvCard);
      removePoihiideeFromAllAccents(etCard.study.sectionAccents, etCard);
    }
  }
}

function syncExampleAccents(etCard) {
  const sa = etCard.study?.sectionAccents;
  if (!sa || !Array.isArray(sa.examples)) return;
  const exLen = etCard.study.examples.length;
  if (sa.examples.length > exLen) sa.examples = sa.examples.slice(0, exLen);
}

function fixDuplicateExamples() {
  for (const level of LEVELS) {
    for (const etCard of etData[level]) {
      if (!etCard.study?.examples || !Array.isArray(etCard.study.examples)) continue;
      const lvCard = findLvEntry(level, etCard.de);
      if (!lvCard?.study?.examples) continue;
      const lvExamples = lvCard.study.examples;

      const lvDeCounts = {};
      for (const ex of lvExamples) {
        lvDeCounts[ex.de] = (lvDeCounts[ex.de] || 0) + 1;
      }

      const etDeSeen = {};
      const newExamples = [];
      for (const ex of etCard.study.examples) {
        const de = ex.de;
        etDeSeen[de] = (etDeSeen[de] || 0) + 1;
        const lvCount = lvDeCounts[de] || 0;
        const etCount = etDeSeen[de];

        if (etCount > 1 && lvCount < etCount) {
          stats.etDuplicatesRemoved++;
          continue;
        }
        newExamples.push(ex);
      }

      if (newExamples.length !== etCard.study.examples.length) {
        etCard.study.examples = newExamples;
        syncExampleAccents(etCard);
      }
    }
  }
}

function fixCourseLessons() {
  const filePath = path.join(ROOT, "data", "et", "courseLessons.js");
  let content = fs.readFileSync(filePath, "utf8");
  const oldRu =
    "vene keeles: я имею тетрадь; отец имеет книгу.";
  const newRu =
    "vene keeles: я имею тетрадь; отец имеет книгу. — eesti keeles: mul on vihik; isal on raamat.";
  const oldEn =
    "inglise keeles: I have a book; the father has a pencil.";
  const newEn =
    "inglise keeles: I have a book; the father has a pencil. — eesti keeles: mul on raamat; isal on pliiats.";

  if (content.includes(oldRu) && !content.includes(newRu)) {
    content = content.split(oldRu).join(newRu);
    stats.courseLessonFixed++;
  }
  if (content.includes(oldEn) && !content.includes(newEn)) {
    content = content.split(oldEn).join(newEn);
    stats.courseLessonFixed++;
  }
  fs.writeFileSync(filePath, content, "utf8");
}

function serializeWords(level, words) {
  const varName = `${level.toUpperCase()}_WORDS`;
  return `const ${varName} = ${JSON.stringify(words, null, 2)};\n\nwindow.${varName} = ${varName};\n`;
}

function writeEtLevels() {
  for (const level of LEVELS) {
    fs.writeFileSync(
      path.join(ROOT, "data", "et", `${level}.js`),
      serializeWords(level, etData[level]),
      "utf8"
    );
  }
}

function syncToWww() {
  const etDir = path.join(ROOT, "data", "et");
  const wwwDir = path.join(ROOT, "www", "data", "et");
  for (const f of fs.readdirSync(etDir).filter((x) => x.endsWith(".js"))) {
    fs.copyFileSync(path.join(etDir, f), path.join(wwwDir, f));
  }
}

fixFuhrunternehmen();
fillDePlural();
fixPoihiideeAccents();
fixDuplicateExamples();
fixCourseLessons();
writeEtLevels();
syncToWww();

console.log(JSON.stringify(stats, null, 2));
