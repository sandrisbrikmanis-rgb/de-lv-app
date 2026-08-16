#!/usr/bin/env node
"use strict";
/**
 * DA–DE Sätze OWNER COPY-ONLY repair apply.
 * Usage: node scripts/apply-da-sentences-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry, normalizeField } = require("./lib/da-sentences-owner-path");

const APPLY_MAP = path.join(ROOT, "reports/temp/da-sentences-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/da-sentences-owner-apply-log.json");
const FILES = [path.join(ROOT, "data/da/sentences.js"), path.join(ROOT, "www/data/da/sentences.js")];
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "level"];

function loadSentences(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function writeSentences(filePath, entries) {
  fs.writeFileSync(
    filePath,
    `const SENTENCE_ENTRIES = ${JSON.stringify(entries, null, 2)};\n\nwindow.SENTENCE_ENTRIES = SENTENCE_ENTRIES;\n`,
    "utf8"
  );
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function normalizeCompare(val) {
  return String(val ?? "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function currentMatches(actual, expected) {
  const a = normalizeCompare(actual);
  const e = normalizeCompare(expected);
  if (a === e) return true;
  if (!e) return false;
  for (const suffix of ["...", "…"]) {
    if (e.endsWith(suffix)) {
      const prefix = e.slice(0, -suffix.length).trim();
      if (prefix && a.startsWith(prefix)) return true;
    }
  }
  return false;
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

function verifyMirror() {
  const data = fs.readFileSync(FILES[0], "utf8");
  const www = fs.readFileSync(FILES[1], "utf8");
  return data === www;
}

function main() {
  execSync("node scripts/build-da-sentences-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });

  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const sentences = loadSentences(FILES[0]);
  const beforeAll = deepClone(sentences);
  const log = { dryRun: DRY_RUN, applied: [], skipped: [], failed: [] };

  if (applyMap.apply.length === 0) {
    log.summary = {
      applied: 0,
      skipped: 0,
      failed: 0,
      count: sentences.length,
      deChanges: 0,
      note: "No LABOT rows in signed owner decision file",
    };
    fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
    fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
    console.log(JSON.stringify(log.summary, null, 2));
    return;
  }

  for (const row of applyMap.apply) {
    const entry = findEntry(sentences, row.cardId);
    if (!entry) {
      log.failed.push({ ...row, status: "CARD_NOT_FOUND" });
      continue;
    }

    const field = normalizeField(row.field);
    const actualCurrent = entry[field];
    if (actualCurrent === undefined) {
      log.failed.push({ ...row, status: "FIELD_NOT_FOUND", field });
      continue;
    }

    if (!currentMatches(actualCurrent, row.currentDa)) {
      log.skipped.push({
        finding: row.finding,
        cardId: row.cardId,
        field,
        status: "CURRENT_VALUE_MISMATCH",
        expected: row.currentDa,
        actual: normalizeCompare(actualCurrent).slice(0, 200),
      });
      continue;
    }

    entry[field] = row.ownerNew;
    log.applied.push({
      finding: row.finding,
      cardId: row.cardId,
      field,
      action: row.action,
    });
  }

  log.summary = {
    applied: log.applied.length,
    skipped: log.skipped.length,
    failed: log.failed.length,
    count: sentences.length,
    deChanges: verifyDeUnchanged(beforeAll, sentences),
    mirrorPass: null,
  };

  if (!DRY_RUN) {
    for (const f of FILES) writeSentences(f, sentences);
    execSync("node --check data/da/sentences.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/da/sentences.js", { cwd: ROOT, stdio: "pipe" });
    log.summary.mirrorPass = verifyMirror();
    if (!log.summary.mirrorPass) {
      console.error("Mirror mismatch between data/da/sentences.js and www/data/da/sentences.js");
      process.exit(1);
    }
  }

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
  console.log(JSON.stringify(log.summary, null, 2));

  if (log.skipped.length) {
    console.error("Skipped (CURRENT_VALUE_MISMATCH):", log.skipped.length);
    log.skipped.slice(0, 10).forEach((s) => console.error(JSON.stringify(s)));
  }
  if (log.failed.length) {
    console.error("Failures:", log.failed.length);
    log.failed.slice(0, 10).forEach((f) => console.error(JSON.stringify(f)));
    process.exit(1);
  }
  if (log.skipped.length) process.exit(1);
}

main();
