#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS = path.join(__dirname, "en-c1-owner-repair-block-03-repairs.json");
const EN_DATA = path.join(ROOT, "data", "en", "c1.js");
const EN_WWW = path.join(ROOT, "www", "data", "en", "c1.js");
const DE_DATA = path.join(ROOT, "data", "c1.js");
const DE_WWW = path.join(ROOT, "www", "data", "c1.js");
const LOG = path.join(__dirname, "en-c1-owner-repair-block-03-apply-log.json");

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
  words.forEach((e, i) => byId.set(entryId(e, i), e));
  return byId;
}

function main() {
  const deHashBefore = md5(DE_DATA);
  const deWwwBefore = md5(DE_WWW);
  const cfg = JSON.parse(fs.readFileSync(REPAIRS, "utf8"));
  const { repairs, nelabot = [] } = cfg;
  const words = loadWords(EN_DATA);
  const index = buildIndex(words);

  const log = { applied: 0, mismatch: [], notFound: [], results: [] };

  for (const r of repairs) {
    const entry = index.get(r.cardId);
    if (!entry) {
      log.notFound.push(r.cardId);
      log.results.push({ cardId: r.cardId, status: "NOT_FOUND" });
      continue;
    }
    const actual = entry.lv;
    if (actual === r.before) {
      entry.lv = r.after;
      log.applied++;
      log.results.push({ cardId: r.cardId, status: "APPLIED" });
    } else if (actual === r.after) {
      log.applied++;
      log.results.push({ cardId: r.cardId, status: "ALREADY_APPLIED" });
    } else {
      log.mismatch.push({ cardId: r.cardId, expected: r.before, actual });
      log.results.push({ cardId: r.cardId, status: "MISMATCH", expected: r.before, actual });
    }
  }

  const nelabotResults = [];
  for (const n of nelabot) {
    const entry = index.get(n.cardId);
    const actual = entry?.lv;
    const pass = actual === n.expected;
    nelabotResults.push({ cardId: n.cardId, expected: n.expected, actual, pass });
  }

  if (log.applied > 0) {
    writeC1(EN_DATA, words);
    writeC1(EN_WWW, words);
  }

  let syntaxPass = true;
  try {
    execSync("node --check data/en/c1.js", { cwd: ROOT });
    execSync("node --check www/data/en/c1.js", { cwd: ROOT });
  } catch {
    syntaxPass = false;
  }

  const out = {
    block: "3/6",
    cardsTargeted: repairs.length,
    cardsFound: repairs.length - log.notFound.length,
    repairsApplied: log.applied,
    mismatch: log.mismatch.length,
    mismatchCardIds: log.mismatch.map((m) => m.cardId),
    nelabotPreserved: nelabotResults.filter((n) => n.pass).length,
    nelabotTotal: nelabot.length,
    nelabotResults,
    mirrorPass: md5(EN_DATA) === md5(EN_WWW),
    deReadOnly: md5(DE_DATA) === deHashBefore && md5(DE_WWW) === deWwwBefore,
    referenceFilesUnchanged: md5(DE_DATA) === deHashBefore && md5(DE_WWW) === deWwwBefore,
    syntaxPass,
    results: log.results,
    mismatches: log.mismatch,
  };

  fs.writeFileSync(LOG, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
  if (log.mismatch.length > 0 || log.notFound.length > 0) process.exit(1);
  if (nelabotResults.some((n) => !n.pass)) process.exit(1);
}

main();
