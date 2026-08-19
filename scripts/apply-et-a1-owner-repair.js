#!/usr/bin/env node
"use strict";
/**
 * ET–DE A1 OWNER COPY-ONLY repair apply.
 * Usage: node scripts/apply-et-a1-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { getAt, setAt, findEntry: findEntryBase } = require("./lib/da-a1-owner-path");

function findEntry(words, cardId) {
  const base = findEntryBase(words, cardId);
  if (base) return base;
  const idxMatch = cardId.match(/-(\d+)$/);
  if (idxMatch) {
    const idx = parseInt(idxMatch[1], 10);
    if (words[idx]) return words[idx];
  }
  const deGuess = cardId
    .replace(/^a1-/, "")
    .replace(/-study.*$/i, "")
    .replace(/-\d+$/, "");
  return words.find((e) => e.de === deGuess || e.de.toLowerCase() === deGuess.toLowerCase()) || null;
}

const APPLY_MAP = path.join(ROOT, "reports/temp/et-a1-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-a1-owner-apply-log.json");
const FILES = [
  path.join(ROOT, "data/et/a1.js"),
  path.join(ROOT, "www/data/et/a1.js"),
];
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`,
    "utf8",
  );
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function currentMatches(actual, expected) {
  const exp = String(expected || "").trim();
  if (exp === "(tukšs)" || exp === "(empty)") {
    return actual === undefined || actual === null || String(actual).trim() === "";
  }
  if (actual === undefined || actual === null) return exp === "";
  return String(actual) === exp;
}

function readCurrent(entry, field) {
  if (field === "lv") return entry.lv;
  if (field === "study.tip.text") {
    const tip = entry.study?.tip;
    if (!tip) return undefined;
    if (typeof tip === "string") return tip;
    if (Array.isArray(tip)) return tip.join(" ");
    return tip.text;
  }
  return getAt(entry, field);
}

function applySet(entry, field, ownerNew) {
  if (field === "lv") {
    entry.lv = ownerNew;
    return { ok: true, field };
  }
  if (!entry.study && field.startsWith("study.")) {
    return { ok: false, reason: "no_study", field };
  }
  if (field === "study.tip.text") {
    entry.study.tip = { text: ownerNew };
    return { ok: true, field };
  }
  const before = getAt(entry, field);
  if (before === undefined) return { ok: false, reason: "path_missing", field };
  setAt(entry, field, ownerNew);
  return { ok: true, field, before, after: ownerNew };
}

function verifyDeUnchanged(before, after) {
  let n = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) n++;
    }
  }
  return n;
}

function main() {
  execSync("node scripts/build-et-a1-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  const { apply } = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const words = loadWords(FILES[0]);
  const beforeAll = deepClone(words);
  const log = {
    dryRun: DRY_RUN,
    applied: [],
    skipped: [],
    mismatches: [],
    failed: [],
  };

  for (const row of apply) {
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      log.failed.push({ ...row, status: "CARD_NOT_FOUND" });
      continue;
    }
    const actual = readCurrent(entry, row.field);
    if (!currentMatches(actual, row.current)) {
      log.mismatches.push({
        auditId: row.auditId,
        cardId: row.cardId,
        field: row.field,
        expectedCurrent: row.current,
        actualCurrent: actual === undefined ? "(undefined)" : actual,
        status: "CURRENT_VALUE_MISMATCH",
      });
      continue;
    }
    if (DRY_RUN) {
      log.applied.push({ ...row, status: "DRY_RUN_OK" });
      continue;
    }
    const result = applySet(entry, row.field, row.ownerNew);
    if (result.ok) log.applied.push({ auditId: row.auditId, cardId: row.cardId, field: row.field, status: "APPLIED" });
    else log.failed.push({ ...row, ...result, status: "APPLY_FAIL" });
  }

  log.summary = {
    requested: apply.length,
    applied: log.applied.length,
    mismatches: log.mismatches.length,
    failed: log.failed.length,
    deChanges: DRY_RUN ? 0 : verifyDeUnchanged(beforeAll, words),
    studyCount: words.filter((e) => e.study).length,
  };

  if (!DRY_RUN && log.mismatches.length === 0 && log.failed.length === 0) {
    for (const f of FILES) writeWords(f, words);
    execSync("node --check data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
  }

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
  console.log(JSON.stringify(log.summary, null, 2));
  if (log.mismatches.length) {
    console.error("CURRENT_VALUE_MISMATCH:", log.mismatches.length);
    log.mismatches.slice(0, 15).forEach((m) => console.error(m));
  }
  if (log.failed.length) {
    console.error("FAILED:", log.failed.length);
    log.failed.slice(0, 10).forEach((f) => console.error(f));
  }
  if (log.failed.length) process.exit(1);
  if (log.mismatches.length && log.applied.length === 0) process.exit(1);
}

main();
