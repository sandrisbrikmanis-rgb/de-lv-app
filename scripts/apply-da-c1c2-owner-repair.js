#!/usr/bin/env node
"use strict";
/**
 * DA–DE C1/C2 OWNER COPY-ONLY repair apply.
 * Usage: node scripts/apply-da-c1c2-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { getAt, setAt, findEntry, normalizeField } = require("./lib/da-c1c2-owner-path");

const APPLY_MAP = path.join(ROOT, "reports/temp/da-c1c2-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/da-c1c2-owner-apply-log.json");
const LEVEL_FILES = {
  c1: [path.join(ROOT, "data/da/c1.js"), path.join(ROOT, "www/data/da/c1.js")],
  c2: [path.join(ROOT, "data/da/c2.js"), path.join(ROOT, "www/data/da/c2.js")],
};
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

function loadWords(filePath, level) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = level.toUpperCase() + "_WORDS";
  return ctx.window[key];
}

function writeWords(filePath, words, level) {
  const key = level.toUpperCase() + "_WORDS";
  fs.writeFileSync(
    filePath,
    `const ${key} = ${JSON.stringify(words, null, 2)};\n\nwindow.${key} = ${key};\n`,
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

function stripZeroWidth(text) {
  return String(text ?? "").replace(/[\u200B-\u200D\uFEFF]/g, "");
}

function isTruncatedEllipsis(text) {
  return /(\.\.\.|…)\s*$/.test(String(text ?? ""));
}

function resolveSetValue(row, actualCurrent) {
  if (
    isTruncatedEllipsis(row.ownerNew) &&
    normalizeCompare(row.ownerNew) === normalizeCompare(row.currentDa)
  ) {
    const cleaned = stripZeroWidth(actualCurrent);
    if (cleaned !== actualCurrent) {
      return { value: cleaned, note: "zero_width_strip_from_actual" };
    }
  }
  return { value: row.ownerNew };
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
  execSync("node scripts/build-da-c1c2-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });

  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const wordsByLevel = {};
  const beforeByLevel = {};

  for (const level of ["c1", "c2"]) {
    wordsByLevel[level] = loadWords(LEVEL_FILES[level][0], level);
    beforeByLevel[level] = deepClone(wordsByLevel[level]);
  }

  const log = {
    dryRun: DRY_RUN,
    applied: [],
    skipped: [],
    failed: [],
  };

  if (applyMap.apply.length === 0) {
    log.summary = {
      applied: 0,
      skipped: 0,
      failed: 0,
      c1Studies: countStudies(wordsByLevel.c1),
      c2Studies: countStudies(wordsByLevel.c2),
      deChanges: 0,
      note: "No LABOT rows in owner decision files yet",
    };
    fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
    fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
    console.log(JSON.stringify(log.summary, null, 2));
    return;
  }

  for (const row of applyMap.apply) {
    const words = wordsByLevel[row.level];
    if (!words) {
      log.failed.push({ ...row, status: "LEVEL_UNKNOWN" });
      continue;
    }

    const entry = findEntry(words, row.cardId);
    if (!entry) {
      log.failed.push({ ...row, status: "CARD_NOT_FOUND" });
      continue;
    }

    const field = normalizeField(row.field);
    const actualCurrent = field === "lv" ? entry.lv : getAt(entry, field);
    if (actualCurrent === undefined) {
      log.failed.push({ ...row, status: "FIELD_NOT_FOUND", field });
      continue;
    }

    if (!currentMatches(actualCurrent, row.currentDa)) {
      log.skipped.push({
        finding: row.finding,
        cardId: row.cardId,
        field: row.field,
        level: row.level,
        status: "CURRENT_VALUE_MISMATCH",
        expected: row.currentDa,
        actual: normalizeCompare(actualCurrent).slice(0, 200),
      });
      continue;
    }

    let result;
    if (row.action === "FJERN_ACCENT") {
      result = removeAccentTerm(entry, row.field, row.removeTerm);
    } else {
      const resolved = resolveSetValue(row, actualCurrent);
      result = applySet(entry, row.field, resolved.value);
      if (result.ok && resolved.note) result.note = resolved.note;
    }

    if (result.ok) {
      log.applied.push({
        finding: row.finding,
        cardId: row.cardId,
        field: row.field,
        level: row.level,
        action: row.action,
      });
    } else {
      log.failed.push({ ...row, ...result, status: "APPLY_FAIL" });
    }
  }

  log.summary = {
    applied: log.applied.length,
    skipped: log.skipped.length,
    failed: log.failed.length,
    c1Studies: countStudies(wordsByLevel.c1),
    c2Studies: countStudies(wordsByLevel.c2),
    deChanges:
      verifyDeUnchanged(beforeByLevel.c1, wordsByLevel.c1) +
      verifyDeUnchanged(beforeByLevel.c2, wordsByLevel.c2),
  };

  if (!DRY_RUN) {
    for (const level of ["c1", "c2"]) {
      for (const f of LEVEL_FILES[level]) writeWords(f, wordsByLevel[level], level);
      execSync(`node --check data/da/${level}.js`, { cwd: ROOT, stdio: "pipe" });
      execSync(`node --check www/data/da/${level}.js`, { cwd: ROOT, stdio: "pipe" });
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
