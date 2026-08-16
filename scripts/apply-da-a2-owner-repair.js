#!/usr/bin/env node
"use strict";
/**
 * DA–DE A2 OWNER COPY-ONLY repair apply.
 * Usage: node scripts/apply-da-a2-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { getAt, setAt, findEntry, normalizeField } = require("./lib/da-a2-owner-path");

const APPLY_MAP = path.join(ROOT, "reports/temp/da-a2-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/da-a2-owner-apply-log.json");
const FILES = [path.join(ROOT, "data/da/a2.js"), path.join(ROOT, "www/data/da/a2.js")];
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const A2_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A2_WORDS = A2_WORDS;\n`,
    "utf8"
  );
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function parentArrayField(field) {
  return normalizeField(field).replace(/\[\d+\]$/, "");
}

function removeAccentTerm(entry, field, term) {
  const f = normalizeField(field);
  let val = getAt(entry, f);
  if (typeof val === "string") {
    if (val === term || val.toLowerCase() === term.toLowerCase()) {
      setAt(entry, f, "");
      return { ok: true, field: f, term, note: "cleared_string" };
    }
    return { ok: true, field: f, term, note: "term_already_absent" };
  }

  let arrayField = f;
  if (!Array.isArray(val)) {
    arrayField = parentArrayField(f);
    val = getAt(entry, arrayField);
  }
  if (!Array.isArray(val)) return { ok: false, reason: "not_array", field: arrayField };
  const filtered = val.filter((t) => String(t) !== term);
  if (filtered.length === val.length) {
    return { ok: true, field: arrayField, term, note: "term_already_absent" };
  }
  setAt(entry, arrayField, filtered);
  return { ok: true, field: arrayField, term, before: val, after: filtered };
}

function applySet(entry, field, ownerNew) {
  const f = normalizeField(field);
  if (f === "lv") {
    entry.lv = ownerNew;
    return { ok: true, field: f };
  }
  if (!entry.study) return { ok: false, reason: "no_study", field: f };
  if (f === "study.tip.text") {
    const wasArray = Array.isArray(entry.study.tip);
    entry.study.tip = { text: ownerNew };
    return { ok: true, field: f, convertedFrom: wasArray ? "array" : typeof entry.study.tip };
  }
  const before = getAt(entry, f);
  if (before === undefined) return { ok: false, reason: "path_missing", field: f };
  setAt(entry, f, ownerNew);
  return { ok: true, field: f, before, after: ownerNew };
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

function countStudies(words) {
  return words.filter((e) => e.study && typeof e.study === "object").length;
}

function main() {
  execSync("node scripts/build-da-a2-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });

  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const words = loadWords(FILES[0]);
  const beforeAll = deepClone(words);
  const log = { dryRun: DRY_RUN, applied: [], failed: [], skipped: applyMap.apply.length === 0 };

  if (applyMap.apply.length === 0) {
    log.summary = {
      applied: 0,
      failed: 0,
      studyCount: countStudies(words),
      deChanges: 0,
      note: "No LABOT rows in owner decision files yet",
    };
    fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
    fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
    console.log(JSON.stringify(log.summary, null, 2));
    return;
  }

  for (const row of applyMap.apply) {
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      log.failed.push({ ...row, status: "CARD_NOT_FOUND" });
      continue;
    }
    let result;
    if (row.action === "FJERN_ACCENT") {
      result = removeAccentTerm(entry, row.field, row.removeTerm);
    } else {
      result = applySet(entry, row.field, row.ownerNew);
    }
    if (result.ok) {
      log.applied.push({
        finding: row.finding,
        cardId: row.cardId,
        field: row.field,
        action: row.action,
      });
    } else {
      log.failed.push({ ...row, ...result, status: "APPLY_FAIL" });
    }
  }

  log.summary = {
    applied: log.applied.length,
    failed: log.failed.length,
    studyCount: countStudies(words),
    deChanges: verifyDeUnchanged(beforeAll, words),
  };

  if (!DRY_RUN) {
    for (const f of FILES) writeWords(f, words);
    execSync("node --check data/da/a2.js", { cwd: ROOT, stdio: "pipe" });
  }

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
  console.log(JSON.stringify(log.summary, null, 2));
  if (log.failed.length) {
    console.error("Failures:", log.failed.length);
    log.failed.slice(0, 10).forEach((f) => console.error(f));
    process.exit(1);
  }
}

main();
