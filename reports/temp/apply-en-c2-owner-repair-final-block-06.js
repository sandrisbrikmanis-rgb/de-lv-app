#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS = path.join(__dirname, "en-c2-owner-repair-final-block-06-repairs.json");
const EN_DATA = path.join(ROOT, "data", "en", "c2.js");
const EN_WWW = path.join(ROOT, "www", "data", "en", "c2.js");
const DE_DATA = path.join(ROOT, "data", "c2.js");
const DE_WWW = path.join(ROOT, "www", "data", "c2.js");
const EN_C1_DATA = path.join(ROOT, "data", "en", "c1.js");
const LOG = path.join(__dirname, "en-c2-owner-repair-final-block-06-apply-log.json");

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function loadWords(filePath, globalName) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalName];
}

function writeC2(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const C2_WORDS = ${json};\n\nwindow.C2_WORDS = C2_WORDS;\n`, "utf8");
}

function entryId(entry, index) {
  return entry.study?.id || `c2-${entry.de}-${index}`;
}

function parsePath(fieldPath) {
  return String(fieldPath)
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
}

function getAt(root, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (const part of parts) {
    if (cur == null) return undefined;
    const key = /^\d+$/.test(part) ? parseInt(part, 10) : part;
    cur = cur[key];
  }
  return cur;
}

function setAt(root, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = /^\d+$/.test(parts[i]) ? parseInt(parts[i], 10) : parts[i];
    if (cur[key] == null) return false;
    cur = cur[key];
  }
  const last = parts[parts.length - 1];
  const lastKey = /^\d+$/.test(last) ? parseInt(last, 10) : last;
  cur[lastKey] = value;
  return true;
}

function findEntry(words, cardId) {
  for (let i = 0; i < words.length; i++) {
    if (entryId(words[i], i) === cardId || words[i].study?.id === cardId) return words[i];
  }
  return null;
}

function resolveField(entry, fieldPath) {
  if (fieldPath === "lv" || fieldPath === "enText") return { root: entry, path: "lv" };
  if (fieldPath.startsWith("study.")) {
    return { root: entry.study, path: fieldPath.slice("study.".length) };
  }
  return null;
}

function main() {
  const deBefore = md5(DE_DATA);
  const deWwwBefore = md5(DE_WWW);
  const c1Before = md5(EN_C1_DATA);
  const cfg = JSON.parse(fs.readFileSync(REPAIRS, "utf8"));
  const { fieldRepairs, cardMeta } = cfg;
  const words = loadWords(EN_DATA, "C2_WORDS");

  const log = { applied: 0, mismatch: [], notFound: [], results: [] };
  const cardsTouched = new Set();

  for (const r of fieldRepairs) {
    const entry = findEntry(words, r.cardId);
    if (!entry) {
      log.notFound.push({ cardId: r.cardId, fieldPath: r.fieldPath });
      log.results.push({ cardId: r.cardId, fieldPath: r.fieldPath, status: "NOT_FOUND" });
      continue;
    }
    const target = resolveField(entry, r.fieldPath);
    if (!target || !target.root) {
      log.mismatch.push({ cardId: r.cardId, fieldPath: r.fieldPath, reason: "unresolved_field" });
      log.results.push({ cardId: r.cardId, fieldPath: r.fieldPath, status: "FIELD_NOT_FOUND" });
      continue;
    }
    const actual = getAt(target.root, target.path);
    if (actual === r.before) {
      setAt(target.root, target.path, r.after);
      log.applied++;
      cardsTouched.add(r.cardId);
      log.results.push({ cardId: r.cardId, fieldPath: r.fieldPath, status: "APPLIED" });
    } else if (actual === r.after) {
      log.applied++;
      cardsTouched.add(r.cardId);
      log.results.push({ cardId: r.cardId, fieldPath: r.fieldPath, status: "ALREADY_APPLIED" });
    } else {
      log.mismatch.push({ cardId: r.cardId, fieldPath: r.fieldPath, expected: r.before, actual });
      log.results.push({ cardId: r.cardId, fieldPath: r.fieldPath, status: "MISMATCH", expected: r.before, actual });
    }
  }

  if (log.applied > 0) {
    writeC2(EN_DATA, words);
    writeC2(EN_WWW, words);
  }

  let syntaxPass = true;
  try {
    execSync("node --check data/en/c2.js", { cwd: ROOT });
    execSync("node --check www/data/en/c2.js", { cwd: ROOT });
  } catch {
    syntaxPass = false;
  }

  const uniqueCards = cardMeta?.uniqueCardIds || [...new Set(fieldRepairs.map((r) => r.cardId))];
  const cardsFound = uniqueCards.filter((id) => findEntry(words, id)).length;

  const out = {
    block: "C2 final 6",
    cardsTargeted: uniqueCards.length,
    flashcardsTargeted: cardMeta?.flashcards || 34,
    studyCardsTargeted: cardMeta?.studyCards || 1,
    cardsFound,
    cardsWithRepairsApplied: cardsTouched.size,
    fieldReplacementsTargeted: fieldRepairs.length,
    fieldReplacementsApplied: log.applied,
    mismatch: log.mismatch.length,
    mismatchDetails: log.mismatch,
    mirrorPass: md5(EN_DATA) === md5(EN_WWW),
    deReadOnly: md5(DE_DATA) === deBefore && md5(DE_WWW) === deWwwBefore,
    c1Unchanged: md5(EN_C1_DATA) === c1Before,
    syntaxPass,
    results: log.results,
  };

  fs.writeFileSync(LOG, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
  if (log.mismatch.length > 0 || cardsFound < uniqueCards.length) process.exit(1);
}

main();
