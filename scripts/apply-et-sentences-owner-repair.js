#!/usr/bin/env node
"use strict";
/**
 * ET–DE Teikumi OWNER COPY-ONLY repair apply (103 LABOT).
 * Usage: node scripts/apply-et-sentences-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry, normalizeField } = require("./lib/et-sentences-owner-path");
const {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
} = require("./lib/repair-apply-safety");

const APPLY_MAP = path.join(ROOT, "reports/temp/et-sentences-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-sentences-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-sentences-owner-repair-apply.md");
const DATA_REL = "data/et/sentences.js";
const FILES = [path.join(ROOT, DATA_REL), path.join(ROOT, "www/data/et/sentences.js")];
const EXPECTED_LABOT = 103;
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
    "utf8",
  );
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function currentMatches(actual, expected) {
  return String(actual ?? "") === String(expected ?? "");
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
    "# ET–DE Teikumi — OWNER COPY-ONLY repair apply",
    "",
    "**Authority:** `reports/et-sentences-owner-decisions-accepted.md`",
    "**DE:** STRICT READ-ONLY",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| REQUESTED_LABOT | **${s.requestedLabot}** |`,
    `| APPLIED_VERIFIED | **${s.appliedVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${s.currentValueMismatch}** |`,
    `| OWNER_NEW_MISMATCH | **${s.ownerNewMismatch}** |`,
    `| MISSING_PATH | **${s.missingPath}** |`,
    `| SKIPPED_ALREADY | **${s.skippedAlready}** |`,
    `| FAILED | **${s.failed}** |`,
    `| DE_CHANGES | **${s.deChanges}** |`,
    `| Mirror | **${s.mirrorPass}** |`,
    `| Syntax | **${s.syntaxPass}** |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
  ];
  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const m of log.mismatches) lines.push(`- ${m.auditId} ${m.cardId}`);
    lines.push("");
  }
  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  execSync("node scripts/build-et-sentences-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  const { apply } = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));

  const sentences = loadSentences(FILES[0]);
  const beforeAll = deepClone(sentences);
  const log = {
    dryRun: DRY_RUN,
    staged: [],
    appliedVerified: [],
    mismatches: [],
    failed: [],
    verificationFailures: [],
    skipped: [],
  };

  for (const row of apply) {
    const entry = findEntry(sentences, row.cardId);
    if (!entry) {
      log.failed.push({ ...row, status: "FAILED", reason: "CARD_NOT_FOUND" });
      continue;
    }
    const field = normalizeField(row.field);
    const actual = entry[field];
    if (actual === undefined) {
      log.failed.push({ ...row, status: "MISSING_PATH", reason: "path_missing" });
      continue;
    }
    if (String(actual) === String(row.ownerNew)) {
      log.skipped.push({ ...row, status: "ALREADY_MATCHED" });
      log.appliedVerified.push({ auditId: row.auditId, cardId: row.cardId, status: "APPLIED_VERIFIED_ALREADY" });
      continue;
    }
    if (!currentMatches(actual, row.current)) {
      log.mismatches.push({
        auditId: row.auditId,
        cardId: row.cardId,
        expectedCurrent: row.current,
        actualCurrent: actual,
        status: "CURRENT_VALUE_MISMATCH",
      });
      continue;
    }
    if (DRY_RUN) {
      log.staged.push({ ...row, status: "STAGED" });
      continue;
    }
    entry[field] = row.ownerNew;
    log.staged.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field,
      ownerNew: row.ownerNew,
      status: "WRITTEN_PENDING_VERIFY",
      _entryResolver: (s) => findEntry(s, row.cardId),
    });
  }

  let syntaxPass = true;
  let mirrorPass = true;
  let gitDiffPass = true;
  const deChanges = DRY_RUN ? 0 : verifyDeUnchanged(beforeAll, sentences);

  if (!DRY_RUN && log.staged.length > 0) {
    for (const f of FILES) writeSentences(f, sentences);
    try {
      execSync("node --check data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    mirrorPass = isSyncedWithWww(DATA_REL);
    const { verified, failures } = verifyFromDisk(
      () => loadSentences(FILES[0]),
      log.staged,
      (entry, field) => entry[normalizeField(field)],
    );
    log.appliedVerified = [
      ...log.appliedVerified.filter((r) => r.status === "APPLIED_VERIFIED_ALREADY"),
      ...verified,
    ];
    log.verificationFailures = failures;
    gitDiffPass = gitDiffNonEmpty([DATA_REL, "www/data/et/sentences.js"], ROOT);
    const wc = assertWritePostcondition({ appliedVerified: verified.length, gitDiffPass, dryRun: DRY_RUN });
    if (!wc.pass) log.hardFail = wc.verdict;
  } else if (DRY_RUN) {
    log.appliedVerified = log.staged.map((r) => ({ ...r, status: "DRY_RUN_STAGED" }));
  }

  const appliedVerifiedCount = log.appliedVerified.length;
  const finalVerdict =
    log.hardFail ||
    (log.failed.length > 0
      ? "FAIL"
      : log.mismatches.length > 0
        ? "FAIL — CURRENT_VALUE_MISMATCH"
        : deChanges > 0
          ? "HARD FAIL — DE CHANGES"
          : !syntaxPass
            ? "FAIL — SYNTAX"
            : log.verificationFailures.length > 0
              ? "FAIL — APPLY_VERIFICATION"
              : DRY_RUN
                ? "DRY_RUN NOT CLOSED"
                : appliedVerifiedCount === EXPECTED_LABOT
                  ? !gitDiffPass
                    ? "HARD FAIL — EXPECTED PRODUCTION WRITE MISSING"
                    : !mirrorPass
                      ? "FAIL — MIRROR"
                      : "ET_SENTENCES_OWNER_REPAIR_103_PASS"
                  : "FAIL — INCOMPLETE APPLY");

  log.summary = {
    requestedLabot: apply.length,
    appliedVerified: appliedVerifiedCount,
    currentValueMismatch: log.mismatches.length,
    ownerNewMismatch: log.verificationFailures.length,
    missingPath: log.failed.filter((f) => f.status === "MISSING_PATH").length,
    skippedAlready: log.skipped.length,
    failed: log.failed.length,
    deChanges,
    mirrorPass: DRY_RUN ? "N/A" : mirrorPass ? "PASS" : "FAIL",
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass ? "PASS" : "FAIL",
    finalVerdict,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(
    APPLY_LOG,
    JSON.stringify({ ...log, staged: log.staged.map(({ _entryResolver, ...r }) => r) }, null, 2),
  );
  if (!DRY_RUN) writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));

  if (finalVerdict !== "ET_SENTENCES_OWNER_REPAIR_103_PASS" && finalVerdict !== "DRY_RUN NOT CLOSED") {
    process.exit(1);
  }
}

main();
