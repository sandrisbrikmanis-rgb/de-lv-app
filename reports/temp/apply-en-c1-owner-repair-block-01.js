#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS = path.join(__dirname, "en-c1-owner-repair-block-01-repairs.json");
const EN_DATA = path.join(ROOT, "data", "en", "c1.js");
const EN_WWW = path.join(ROOT, "www", "data", "en", "c1.js");
const DE_DATA = path.join(ROOT, "data", "c1.js");

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.C1_WORDS;
}

function writeC1(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const C1_WORDS = ${json};\n\nwindow.C1_WORDS = C1_WORDS;\n`, "utf8");
}

function entryId(entry, index) {
  return entry.study?.id || `c1-${entry.de}-${index}`;
}

function buildIndex(words) {
  const byId = new Map();
  words.forEach((e, i) => {
    const id = entryId(e, i);
    byId.set(id, { entry: e, index: i });
  });
  return byId;
}

function main() {
  const deHashBefore = md5(DE_DATA);
  const { repairs } = JSON.parse(fs.readFileSync(REPAIRS, "utf8"));
  const words = loadWords(EN_DATA);
  const index = buildIndex(words);

  const log = { applied: 0, mismatch: [], notFound: [], results: [] };

  for (const r of repairs) {
    const hit = index.get(r.cardId);
    if (!hit) {
      log.notFound.push(r.cardId);
      log.results.push({ cardId: r.cardId, status: "NOT_FOUND" });
      continue;
    }
    const actual = hit.entry.lv;
    if (actual === r.before) {
      hit.entry.lv = r.after;
      log.applied++;
      log.results.push({ cardId: r.cardId, status: "APPLIED", before: r.before, after: r.after });
    } else if (actual === r.after) {
      log.applied++;
      log.results.push({ cardId: r.cardId, status: "ALREADY_APPLIED", before: r.before, actual });
    } else {
      log.mismatch.push({ cardId: r.cardId, expected: r.before, actual });
      log.results.push({ cardId: r.cardId, status: "MISMATCH", expected: r.before, actual });
    }
  }

  if (log.applied > 0) {
    writeC1(EN_DATA, words);
    writeC1(EN_WWW, words);
  }

  const deHashAfter = md5(DE_DATA);
  const mirrorPass = md5(EN_DATA) === md5(EN_WWW);
  let syntaxPass = true;
  try {
    require("child_process").execSync("node --check data/en/c1.js", { cwd: ROOT });
    require("child_process").execSync("node --check www/data/en/c1.js", { cwd: ROOT });
  } catch {
    syntaxPass = false;
  }

  const out = {
    cardsTargeted: repairs.length,
    cardsFound: repairs.length - log.notFound.length,
    repairsApplied: log.applied,
    mismatch: log.mismatch.length,
    mismatchCardIds: log.mismatch.map((m) => m.cardId),
    mirrorPass,
    deReadOnly: deHashBefore === deHashAfter,
    syntaxPass,
    results: log.results,
    mismatches: log.mismatch,
  };

  fs.writeFileSync(path.join(__dirname, "en-c1-owner-repair-block-01-apply-log.json"), JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));

  if (log.mismatch.length > 0 || log.notFound.length > 0) process.exit(1);
}

main();
