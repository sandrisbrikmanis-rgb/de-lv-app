#!/usr/bin/env node
"use strict";
/**
 * DA–DE Verbs regression OWNER COPY-ONLY repair apply.
 * Usage: node scripts/apply-da-verbs-regression-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getDaValue, setDaValue, normalizeField } = require("./lib/da-verbs-owner-path");

const APPLY_MAP = path.join(ROOT, "reports/temp/da-verbs-regression-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/da-verbs-regression-owner-apply-log.json");
const REPORT = path.join(ROOT, "reports/da-verbs-regression-owner-repair-apply.md");
const FILES = [path.join(ROOT, "data/da/verbs.js"), path.join(ROOT, "www/data/da/verbs.js")];
const DE_FILE = path.join(ROOT, "data/verbs.js");
const DRY_RUN = process.argv.includes("--dry-run");

function loadVerbs(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function writeVerbs(filePath, entries) {
  fs.writeFileSync(
    filePath,
    `const VERB_ENTRIES = ${JSON.stringify(entries, null, 2)};\n\nwindow.VERB_ENTRIES = VERB_ENTRIES;\n`,
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

function verifyDeUnchanged(beforeDa, afterDa, beforeDe, afterDe) {
  let daDeChanges = 0;
  for (let i = 0; i < afterDa.length; i++) {
    for (const formKey of Object.keys(afterDa[i] || {})) {
      if (JSON.stringify(beforeDa[i]?.[formKey]?.de) !== JSON.stringify(afterDa[i]?.[formKey]?.de)) {
        daDeChanges++;
      }
    }
  }
  let deRefChanges = 0;
  if (beforeDe.length === afterDe.length) {
    for (let i = 0; i < afterDe.length; i++) {
      for (const formKey of Object.keys(afterDe[i] || {})) {
        if (JSON.stringify(beforeDe[i]?.[formKey]?.de) !== JSON.stringify(afterDe[i]?.[formKey]?.de)) {
          deRefChanges++;
        }
      }
    }
  }
  return { daDeChanges, deRefChanges };
}

function main() {
  execSync("node scripts/build-da-verbs-regression-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });

  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const verbs = loadVerbs(FILES[0]);
  const deRef = loadVerbs(DE_FILE);
  const beforeDa = deepClone(verbs);
  const beforeDe = deepClone(deRef);
  const log = { dryRun: DRY_RUN, applied: [], skipped: [], failed: [] };

  for (const row of applyMap.apply || []) {
    const entry = findEntry(verbs, row.cardId);
    if (!entry) {
      log.failed.push({ ...row, status: "CARD_NOT_FOUND" });
      continue;
    }

    const formKey = normalizeField(row.field);
    const actualCurrent = getDaValue(entry, row.field);
    if (actualCurrent === undefined) {
      log.failed.push({ ...row, status: "FIELD_NOT_FOUND", field: formKey });
      continue;
    }

    if (!currentMatches(actualCurrent, row.currentDa)) {
      log.skipped.push({
        regId: row.regId,
        cardId: row.cardId,
        field: formKey,
        status: "CURRENT_VALUE_MISMATCH",
        expected: row.currentDa,
        actual: normalizeCompare(actualCurrent).slice(0, 200),
      });
      continue;
    }

    const result = setDaValue(entry, row.field, row.ownerNew);
    if (!result.ok) {
      log.failed.push({ ...row, status: result.reason, field: formKey });
      continue;
    }

    log.applied.push({
      regId: row.regId,
      cardId: row.cardId,
      field: formKey,
      track: row.track,
      ownerNew: row.ownerNew,
    });
  }

  const integrity = verifyDeUnchanged(beforeDa, verbs, beforeDe, deRef);
  log.summary = {
    applied: log.applied.length,
    skipped: log.skipped.length,
    failed: log.failed.length,
    reapply: log.applied.filter((r) => r.track === "reapply").length,
    linguistic: log.applied.filter((r) => r.track === "linguistic").length,
    count: verbs.length,
    daDeFieldChanges: integrity.daDeChanges,
    deRefChanges: integrity.deRefChanges,
    mirrorPass: null,
    signedFiles: applyMap.signedFiles?.length || 0,
  };

  if (!DRY_RUN) {
    for (const f of FILES) writeVerbs(f, verbs);
    execSync("node --check data/da/verbs.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/da/verbs.js", { cwd: ROOT, stdio: "pipe" });
    log.summary.mirrorPass = fs.readFileSync(FILES[0], "utf8") === fs.readFileSync(FILES[1], "utf8");
    if (!log.summary.mirrorPass) {
      console.error("Mirror mismatch");
      process.exit(1);
    }
    if (integrity.daDeChanges !== 0 || integrity.deRefChanges !== 0) {
      console.error("DE integrity violation", integrity);
      process.exit(1);
    }
  }

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));

  const md = [
    "# DA–DE Verbs regression OWNER repair apply",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    `**Mode:** ${DRY_RUN ? "DRY-RUN" : "APPLY"}`,
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Applied | **${log.summary.applied}** |`,
    `| Reapply | **${log.summary.reapply}** |`,
    `| Linguistic | **${log.summary.linguistic}** |`,
    `| Skipped | **${log.summary.skipped}** |`,
    `| Failed | **${log.summary.failed}** |`,
    `| DE changes | **${log.summary.deRefChanges}** |`,
    `| Mirror | **${log.summary.mirrorPass === null ? "n/a" : log.summary.mirrorPass ? "PASS" : "FAIL"}** |`,
    "",
  ];
  fs.writeFileSync(REPORT, md.join("\n"));

  console.log(JSON.stringify(log.summary, null, 2));
  if (log.skipped.length) {
    console.error("Skipped:", log.skipped.length);
    log.skipped.slice(0, 10).forEach((s) => console.error(JSON.stringify(s)));
  }
  if (log.failed.length) {
    log.failed.slice(0, 10).forEach((f) => console.error(JSON.stringify(f)));
    process.exit(1);
  }
  if (log.skipped.length && log.applied.length === 0) process.exit(1);
}

main();
