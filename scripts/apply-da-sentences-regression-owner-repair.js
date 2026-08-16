#!/usr/bin/env node
"use strict";
/**
 * DA–DE Sätze regression OWNER COPY-ONLY micro-repair apply.
 * Usage: node scripts/apply-da-sentences-regression-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry } = require("./lib/da-sentences-owner-path");

const APPLY_MAP = path.join(ROOT, "reports/temp/da-sentences-regression-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/da-sentences-regression-owner-apply-log.json");
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
  return normalizeCompare(actual) === normalizeCompare(expected);
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
  execSync("node scripts/build-da-sentences-regression-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });

  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const sentences = loadSentences(FILES[0]);
  const beforeAll = deepClone(sentences);
  const log = { dryRun: DRY_RUN, applied: [], skipped: [], failed: [] };

  for (const row of applyMap.apply) {
    const entry = findEntry(sentences, row.cardId);
    if (!entry) {
      log.failed.push({ ...row, status: "CARD_NOT_FOUND" });
      continue;
    }
    if (!currentMatches(entry.lv, row.currentDa)) {
      log.skipped.push({
        auditId: row.auditId,
        cardId: row.cardId,
        status: "CURRENT_VALUE_MISMATCH",
        expected: row.currentDa,
        actual: normalizeCompare(entry.lv).slice(0, 200),
      });
      continue;
    }
    entry.lv = row.ownerNew;
    log.applied.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field: "lv",
      before: row.currentDa,
      after: row.ownerNew,
    });
  }

  log.summary = {
    applied: log.applied.length,
    skipped: log.skipped.length,
    failed: log.failed.length,
    deChanges: verifyDeUnchanged(beforeAll, sentences),
    mirrorPass: null,
  };

  if (!DRY_RUN) {
    for (const f of FILES) writeSentences(f, sentences);
    execSync("node --check data/da/sentences.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/da/sentences.js", { cwd: ROOT, stdio: "pipe" });
    log.summary.mirrorPass = fs.readFileSync(FILES[0]).equals(fs.readFileSync(FILES[1]));
    if (!log.summary.mirrorPass) {
      console.error("Mirror mismatch");
      process.exit(1);
    }
  }

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
  console.log(JSON.stringify(log.summary, null, 2));

  if (log.skipped.length) {
    console.error("Skipped:", log.skipped.length);
    log.skipped.forEach((s) => console.error(JSON.stringify(s)));
  }
  if (log.failed.length) {
    console.error("Failed:", log.failed.length);
    process.exit(1);
  }
  if (log.skipped.length) process.exit(1);
}

main();
