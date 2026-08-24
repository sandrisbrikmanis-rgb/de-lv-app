#!/usr/bin/env node
"use strict";
/**
 * ET A1 multi-translation OWNER COPY-ONLY apply (59 LABOT, MASTER v1.12).
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

const ACCEPTED = path.join(ROOT, "reports/et-a1-multitranslation-owner-decisions-accepted.md");
const UPLOAD = path.join(ROOT, "uploads/et-a1-multitranslation-owner-decisions-accepted_84d1.md");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-a1-multitranslation-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-a1-multitranslation-owner-repair-apply.md");
const DATA_REL = "data/et/a1.js";
const FILES = [path.join(ROOT, DATA_REL), path.join(ROOT, "www/data/et/a1.js")];
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

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

function parseAccepted() {
  const src = fs.existsSync(ACCEPTED)
    ? fs.readFileSync(ACCEPTED, "utf8")
    : fs.readFileSync(UPLOAD, "utf8");
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-A1-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 8) continue;
    const status = parts[7];
    if (status !== "LABOT") continue;
    rows.push({
      auditId: parts[1],
      cardId: parts[2].replace(/^`|`$/g, ""),
      field: parts[3].replace(/^`|`$/g, ""),
      de: parts[4],
      current: parts[5],
      ownerNew: parts[6].replace(/\*\*/g, "").trim(),
      status,
    });
  }
  return rows;
}

function readCurrent(entry, field) {
  if (field === "lv") return entry.lv;
  if (field === "study.translation") return entry.study?.translation;
  return getAt(entry, field);
}

function applySet(entry, field, ownerNew) {
  if (field === "lv") {
    entry.lv = ownerNew;
    return { ok: true };
  }
  if (!entry.study) return { ok: false, reason: "no_study" };
  if (field === "study.translation") {
    entry.study.translation = ownerNew;
    return { ok: true };
  }
  if (getAt(entry, field) === undefined) return { ok: false, reason: "path_missing" };
  setAt(entry, field, ownerNew);
  return { ok: true };
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
  if (!fs.existsSync(ACCEPTED) && fs.existsSync(UPLOAD)) {
    fs.copyFileSync(UPLOAD, ACCEPTED);
  }
  const apply = parseAccepted();
  if (apply.length !== 59) {
    console.error(`Expected 59 LABOT rows, got ${apply.length}`);
    process.exit(1);
  }

  const words = loadWords(FILES[0]);
  const beforeAll = deepClone(words);
  const log = {
    dryRun: DRY_RUN,
    masterVersion: "1.12",
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
    if (String(actual).trim() === String(row.ownerNew).trim()) {
      log.skipped.push({ ...row, status: "ALREADY_MATCHED" });
      continue;
    }
    if (String(actual || "").trim() !== String(row.current || "").trim()) {
      log.mismatches.push({
        ...row,
        actualCurrent: actual,
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

  if (!DRY_RUN && log.staged.length > 0) {
    for (const f of FILES) writeWords(f, words);
    try {
      execSync("node --check data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    mirrorPass = isSyncedWithWww(DATA_REL);
    const { verified, failures } = verifyFromDisk(
      () => loadWords(FILES[0]),
      log.staged,
      readCurrent,
    );
    log.appliedVerified = verified;
    log.verificationFailures = failures;
    gitDiffPass = gitDiffNonEmpty([DATA_REL, "www/data/et/a1.js"], ROOT);
    const writeCheck = assertWritePostcondition({
      appliedVerified: verified.length,
      gitDiffPass,
      dryRun: DRY_RUN,
    });
    if (!writeCheck.pass) log.hardFail = writeCheck.verdict;
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

  const appliedCount = log.appliedVerified.length + log.skipped.length;
  const finalVerdict =
    log.hardFail ||
    (log.failed.length > 0
      ? "FAIL"
      : log.mismatches.length > 0
        ? "FAIL — CURRENT_VALUE_MISMATCH"
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
                  : appliedCount !== 59
                    ? "FAIL — INCOMPLETE APPLY"
                    : !gitDiffPass
                      ? "HARD FAIL — EXPECTED PRODUCTION WRITE MISSING"
                      : "PASS");

  log.summary = {
    requestedLabot: 59,
    appliedVerified: log.appliedVerified.length,
    alreadyMatched: log.skipped.length,
    appliedTotal: appliedCount,
    currentValueMismatch: log.mismatches.length,
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

  const lines = [
    "# ET A1 — Multi-translation OWNER COPY-ONLY apply",
    "",
    "**MASTER:** v1.12",
    `**Authority:** \`reports/et-a1-multitranslation-owner-decisions-accepted.md\``,
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| REQUESTED_LABOT | **59** |`,
    `| APPLIED_VERIFIED | **${log.appliedVerified.length}** |`,
    `| ALREADY_MATCHED | **${log.skipped.length}** |`,
    `| CURRENT_VALUE_MISMATCH | **${log.mismatches.length}** |`,
    `| DE_CHANGES | **${deChanges}** |`,
    `| SYNTAX | **${log.summary.syntaxPass}** |`,
    `| MIRROR | **${log.summary.mirrorPass}** |`,
    "",
    `## FINAL VERDICT: **${finalVerdict}**`,
    "",
  ];
  fs.writeFileSync(REPORT_MD, lines.join("\n"));
  console.log(JSON.stringify(log.summary, null, 2));

  if (finalVerdict !== "PASS" && finalVerdict !== "DRY_RUN NOT CLOSED") process.exit(1);
}

main();
