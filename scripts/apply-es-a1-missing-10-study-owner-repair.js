#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1 missing 10 Study OWNER structural apply (COPY-ONLY).
 * Usage: node scripts/apply-es-a1-missing-10-study-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");

const REPAIRS_PATH = path.join(ROOT, "scripts/data/es-a1-missing-10-study-repairs.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-a1-missing-10-study-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-de-a1-missing-10-study-repair-apply.md");
const DATA_REL = "data/es/a1.js";
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

function loadWords(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function writeWords(rel, words) {
  const content = `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`;
  fs.writeFileSync(path.join(ROOT, rel), content, "utf8");
  fs.writeFileSync(path.join(ROOT, "www", rel), content, "utf8");
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function countStudies(words) {
  return words.filter((e) => e.study && typeof e.study === "object").length;
}

function countStudyIds(words) {
  return new Set(words.filter((e) => e.study?.id).map((e) => e.study.id)).size;
}

function verifyDeUnchanged(before, after) {
  let n = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) n++;
    }
    if (before[i]?.lv !== after[i]?.lv) n++;
  }
  return n;
}

function serializeStudy(study) {
  return JSON.stringify(study);
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ES–DE A1 — missing 10 Study OWNER repair apply",
    "",
    "**Source:** `reports/es-de-a1-missing-10-study-owner-decisions.md`",
    "**DE:** STRICT READ-ONLY",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| OWNER targets | **${s.uniqueTargets}** |`,
    `| **APPLIED_VERIFIED** | **${s.appliedVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${s.currentValueMismatch}** |`,
    `| FAILED | **${s.failed}** |`,
    `| A1 Study skaits pirms | **${s.studyCountBefore}** |`,
    `| A1 Study skaits pēc | **${s.studyCountAfter}** |`,
    `| Unique study.id pēc | **${s.studyIdsAfter}** |`,
    `| DE + lv izmaiņas | **${s.deChanges}** |`,
    `| Mirror | **${s.mirrorPass}** |`,
    `| Syntax | **${s.syntaxPass}** |`,
    `| ID/order | **${s.idOrderPass}** |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
  ];
  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const m of log.mismatches) lines.push(`- \`${m.de}\` — ${m.reason}`);
    lines.push("");
  }
  if (log.failed.length) {
    lines.push("## FAILED", "");
    for (const f of log.failed) lines.push(`- \`${f.de}\` — ${f.reason || f.status}`);
    lines.push("");
  }
  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  const repairs = JSON.parse(fs.readFileSync(REPAIRS_PATH, "utf8"));
  const words = loadWords(DATA_REL);
  const before = deepClone(words);
  const studyCountBefore = countStudies(words);
  const beforeIds = words.map((e) => e.study?.id).filter(Boolean);

  const log = {
    dryRun: DRY_RUN,
    staged: [],
    appliedVerified: [],
    mismatches: [],
    failed: [],
    verificationFailures: [],
  };

  for (const row of repairs) {
    const idx = words.findIndex((e) => e.de === row.de);
    if (idx < 0) {
      log.failed.push({ ...row, status: "FAILED", reason: "CARD_NOT_FOUND" });
      continue;
    }
    const entry = words[idx];
    if (entry.study !== undefined && entry.study !== null) {
      log.mismatches.push({
        de: row.de,
        index: idx,
        status: "CURRENT_VALUE_MISMATCH",
        reason: `study already present (id=${entry.study?.id || "?"})`,
      });
      continue;
    }
    if (DRY_RUN) {
      log.staged.push({ de: row.de, index: idx, studyId: row.study.id, status: "STAGED" });
      continue;
    }
    entry.study = deepClone(row.study);
    log.staged.push({
      de: row.de,
      index: idx,
      studyId: row.study.id,
      status: "WRITTEN_PENDING_VERIFY",
    });
  }

  let syntaxPass = true;
  let mirrorPass = true;
  let deChanges = 0;
  let idOrderPass = true;

  if (!DRY_RUN && log.staged.length > 0) {
    writeWords(DATA_REL, words);
    deChanges = verifyDeUnchanged(before, words);

    for (let i = 0; i < words.length; i++) {
      for (const f of DE_FIELDS) {
        if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(words[i]?.[f])) idOrderPass = false;
      }
      if (before[i]?.lv !== words[i]?.lv) idOrderPass = false;
      if (before[i]?.de !== words[i]?.de) idOrderPass = false;
    }

    try {
      execSync("node --check data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    mirrorPass = isSyncedWithWww(DATA_REL);

    const reloaded = loadWords(DATA_REL);
    for (const row of log.staged) {
      const entry = reloaded[row.index];
      const expected = repairs.find((r) => r.de === row.de)?.study;
      if (!entry || entry.de !== row.de) {
        log.verificationFailures.push({ ...row, reason: "card_not_found_after_reload" });
        continue;
      }
      if (serializeStudy(entry.study) !== serializeStudy(expected)) {
        log.verificationFailures.push({
          ...row,
          reason: "study_mismatch_after_reload",
          expectedId: expected?.id,
          actualId: entry.study?.id,
        });
        continue;
      }
      log.appliedVerified.push({ de: row.de, studyId: row.studyId, status: "APPLIED_VERIFIED" });
    }
  } else if (DRY_RUN) {
    log.appliedVerified = log.staged.map((r) => ({ ...r, status: "DRY_RUN_STAGED" }));
  }

  const studyCountAfter = DRY_RUN ? studyCountBefore + log.staged.length : countStudies(loadWords(DATA_REL));
  const studyIdsAfter = DRY_RUN ? studyCountBefore + log.staged.length : countStudyIds(loadWords(DATA_REL));

  const finalVerdict =
    log.failed.length > 0
      ? "FAIL"
      : log.mismatches.length > 0
        ? "FAIL — CURRENT_VALUE_MISMATCH"
        : deChanges > 0
          ? "HARD FAIL — DE/LV CHANGES"
          : !syntaxPass
            ? "FAIL — SYNTAX"
            : log.verificationFailures.length > 0
              ? "FAIL — APPLY_VERIFICATION"
              : DRY_RUN
                ? "DRY_RUN NOT CLOSED"
                : studyCountAfter !== studyCountBefore + repairs.length - log.mismatches.length - log.failed.length
                  ? "FAIL — STUDY COUNT"
                  : "PASS";

  log.summary = {
    uniqueTargets: repairs.length,
    staged: log.staged.length,
    appliedVerified: log.appliedVerified.length,
    currentValueMismatch: log.mismatches.length,
    failed: log.failed.length,
    studyCountBefore,
    studyCountAfter,
    studyIdsAfter,
    deChanges,
    mirrorPass: DRY_RUN ? "N/A" : mirrorPass,
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass,
    idOrderPass: DRY_RUN ? "N/A" : idOrderPass,
    finalVerdict,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));

  if (finalVerdict !== "PASS" && finalVerdict !== "DRY_RUN NOT CLOSED") process.exit(1);
}

main();
