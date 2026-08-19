#!/usr/bin/env node
"use strict";
/**
 * ET–DE A1 OWNER COPY-ONLY repair apply.
 * Complies with docs_and_rules/REPAIR_APPLY_SAFETY_STANDARD.md
 * Usage: node scripts/apply-et-a1-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getAt, setAt, findEntry: findEntryBase } = require("./lib/da-a1-owner-path");
const {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
} = require("./lib/repair-apply-safety");

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
const REPORT_MD = path.join(ROOT, "reports/et-a1-owner-repair-apply.md");
const DATA_REL = "data/et/a1.js";
const FILES = [
  path.join(ROOT, DATA_REL),
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

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ET–DE A1 — OWNER COPY-ONLY repair apply",
    "",
    "**Standard:** `REPAIR_APPLY_SAFETY_STANDARD.md` + `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1",
    "**Source:** `reports/et-a1-owner-accepted-all.md`",
    "**DE:** STRICT READ-ONLY",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| OWNER unique targets | **${s.uniqueTargets}** |`,
    `| **APPLIED_VERIFIED** | **${s.appliedVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${s.currentValueMismatch}** |`,
    `| SKIPPED (dry-run / already) | **${s.skipped}** |`,
    `| FAILED | **${s.failed}** |`,
    `| APPLY_VERIFICATION_FAIL | **${s.verificationFail}** |`,
    `| DE field changes | **${s.deChanges}** |`,
    `| Reconciliation | **${s.reconciles ? "PASS" : "FAIL"}** |`,
    `| Production git diff | **${s.gitDiffPass ? "PASS" : "FAIL"}** |`,
    `| Mirror data ↔ www | **${s.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${s.syntaxPass ? "PASS" : "FAIL"}** |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
  ];
  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    lines.push("| Audit ID | Card | Field |");
    lines.push("|----------|------|-------|");
    for (const m of log.mismatches) {
      lines.push(`| ${m.auditId} | ${m.cardId} | ${m.field} |`);
    }
    lines.push("");
  }
  if (log.verificationFailures.length) {
    lines.push("## APPLY_VERIFICATION_FAIL", "");
    for (const f of log.verificationFailures.slice(0, 20)) {
      lines.push(`- ${f.auditId} ${f.cardId} ${f.field}`);
    }
    lines.push("");
  }
  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  execSync("node scripts/build-et-a1-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  const mapData = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const { apply, skippedCount } = mapData;
  const words = loadWords(FILES[0]);
  const beforeAll = deepClone(words);
  const log = {
    dryRun: DRY_RUN,
    standard: "REPAIR_APPLY_SAFETY_STANDARD.md",
    staged: [],
    appliedVerified: [],
    mismatches: [],
    failed: [],
    verificationFailures: [],
    skipped: [],
  };

  for (const row of apply) {
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      log.failed.push({ ...row, status: "FAILED", reason: "CARD_NOT_FOUND" });
      continue;
    }
    const actual = readCurrent(entry, row.field);
    if (String(actual) === String(row.ownerNew)) {
      log.skipped.push({ ...row, status: "ALREADY_MATCHED" });
      continue;
    }
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
      log.staged.push({ ...row, status: "STAGED" });
      continue;
    }
    const result = applySet(entry, row.field, row.ownerNew);
    if (!result.ok) {
      log.failed.push({ ...row, ...result, status: "FAILED" });
      continue;
    }
    log.staged.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field: row.field,
      ownerNew: row.ownerNew,
      status: "WRITTEN_PENDING_VERIFY",
      _entryResolver: (w) => findEntry(w, row.cardId),
    });
  }

  let gitDiffPass = true;
  let syntaxPass = true;
  let mirrorPass = true;
  const deChanges = DRY_RUN ? 0 : verifyDeUnchanged(beforeAll, words);

  // §3 WRITE-TO-DISK: mismatches must NOT block valid writes
  if (!DRY_RUN && log.staged.length > 0) {
    for (const f of FILES) writeWords(f, words);
    try {
      execSync("node --check data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    mirrorPass = isSyncedWithWww(DATA_REL);

    // §5 reload from disk and verify
    const { verified, failures } = verifyFromDisk(
      () => loadWords(FILES[0]),
      log.staged,
      readCurrent,
    );
    log.appliedVerified = verified;
    log.verificationFailures = failures;

    // §6 git diff postcondition
    gitDiffPass = gitDiffNonEmpty([DATA_REL, "www/data/et/a1.js"], ROOT);
    const writeCheck = assertWritePostcondition({
      appliedVerified: verified.length,
      gitDiffPass,
      dryRun: DRY_RUN,
    });
    if (!writeCheck.pass) {
      log.hardFail = writeCheck.verdict;
    }
  } else if (DRY_RUN) {
    log.appliedVerified = log.staged.map((r) => ({ ...r, status: "DRY_RUN_STAGED" }));
  }

  const reconciliation = buildReconciliation({
    uniqueTargets: apply.length,
    verified: log.appliedVerified,
    mismatches: log.mismatches,
    skipped: log.skipped,
    failed: log.failed,
  });

  const finalVerdict =
    log.hardFail ||
    (log.failed.length > 0
      ? "FAIL"
      : !reconciliation.reconciles
        ? "HARD FAIL — RECONCILIATION MISMATCH"
        : deChanges > 0
          ? "HARD FAIL — DE CHANGES"
          : !syntaxPass
            ? "FAIL — SYNTAX"
            : log.verificationFailures.length > 0
              ? "FAIL — APPLY_VERIFICATION"
              : DRY_RUN
                ? "DRY_RUN NOT CLOSED"
                : log.appliedVerified.length > 0 && !gitDiffPass
                  ? "HARD FAIL — EXPECTED PRODUCTION WRITE MISSING"
                  : "PASS");

  log.summary = {
    uniqueTargets: apply.length,
    ownerRowsSkippedInMap: skippedCount,
    staged: log.staged.length,
    appliedVerified: log.appliedVerified.length,
    currentValueMismatch: log.mismatches.length,
    skipped: log.skipped.length,
    failed: log.failed.length,
    verificationFail: log.verificationFailures.length,
    deChanges,
    reconciles: reconciliation.reconciles,
    gitDiffPass: DRY_RUN ? "N/A" : gitDiffPass,
    mirrorPass: DRY_RUN ? "N/A" : mirrorPass,
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass,
    finalVerdict,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  const logOut = { ...log, staged: log.staged.map(({ _entryResolver, ...r }) => r) };
  fs.writeFileSync(APPLY_LOG, JSON.stringify(logOut, null, 2));
  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));

  if (finalVerdict !== "PASS" && finalVerdict !== "DRY_RUN NOT CLOSED") {
    process.exit(1);
  }
}

main();
