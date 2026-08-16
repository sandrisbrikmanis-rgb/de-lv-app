#!/usr/bin/env node
"use strict";
/**
 * COPY-ONLY apply for 29 FINAL tip sectionAccent owner decisions.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { getAt, setAt, findEntry, normalizeField } = require("./lib/da-a2-owner-path");
const CASES = require("./lib/da-a2-final29-cases");

const MAP = path.join(ROOT, "reports/temp/da-a2-final29-owner-apply-map.json");
const LOG = path.join(ROOT, "reports/temp/da-a2-final29-owner-apply-log.json");
const FILES = [path.join(ROOT, "data/da/a2.js"), path.join(ROOT, "www/data/da/a2.js")];
const DRY = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

function loadWords(p) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx);
  return ctx.window.A2_WORDS;
}

function writeWords(p, words) {
  fs.writeFileSync(p, `const A2_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A2_WORDS = A2_WORDS;\n`, "utf8");
}

function parentArrayField(field) {
  return normalizeField(field).replace(/\[\d+\]$/, "");
}

function applyRow(entry, row) {
  if (row.action === "FJERN_ACCENT") {
    const f = row.field;
    let val = getAt(entry, f);
    let arrayField = f;
    if (!Array.isArray(val)) {
      arrayField = parentArrayField(f);
      val = getAt(entry, arrayField);
    }
    if (typeof val === "string") {
      if (val === row.removeTerm) setAt(entry, f, "");
      return { ok: true };
    }
    if (!Array.isArray(val)) return { ok: false, reason: "not_array" };
    setAt(entry, arrayField, val.filter((t) => String(t) !== row.removeTerm));
    return { ok: true };
  }
  const before = getAt(entry, row.field);
  if (before === undefined) return { ok: false, reason: "path_missing" };
  setAt(entry, row.field, row.ownerNew);
  return { ok: true };
}

function main() {
  execSync("node scripts/build-da-a2-final29-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  const { apply } = JSON.parse(fs.readFileSync(MAP, "utf8"));
  const words = loadWords(FILES[0]);
  const beforeAll = JSON.parse(JSON.stringify(words));
  const log = { dryRun: DRY, applied: [], failed: [], skippedFalsePositive: CASES.length - apply.length };

  for (const row of apply) {
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      log.failed.push({ ...row, status: "CARD_NOT_FOUND" });
      continue;
    }
    const result = applyRow(entry, row);
    if (result.ok) log.applied.push(row);
    else log.failed.push({ ...row, ...result, status: "APPLY_FAIL" });
  }

  let deChanges = 0;
  for (let i = 0; i < words.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(beforeAll[i]?.[f]) !== JSON.stringify(words[i]?.[f])) deChanges++;
    }
  }
  log.summary = { applied: log.applied.length, failed: log.failed.length, deChanges };

  if (!DRY) {
    for (const f of FILES) writeWords(f, words);
    execSync("node --check data/da/a2.js", { cwd: ROOT, stdio: "pipe" });
  }
  fs.mkdirSync(path.dirname(LOG), { recursive: true });
  fs.writeFileSync(LOG, JSON.stringify(log, null, 2));
  console.log(JSON.stringify(log.summary, null, 2));
  if (log.failed.length) process.exit(1);
}

main();
