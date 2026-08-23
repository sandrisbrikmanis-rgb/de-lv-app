#!/usr/bin/env node
"use strict";
/**
 * ET–DE B2 OWNER COPY-ONLY repair apply.
 * Usage: node scripts/apply-et-b2-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { normalizeField, getAt, setAt, findEntry } = require("./lib/et-b2-owner-path");
const {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
} = require("./lib/repair-apply-safety");

const APPLY_MAP = path.join(ROOT, "reports/temp/et-b2-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-b2-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-b2-owner-repair-apply.md");
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

const B2_FILES = [
  path.join(ROOT, "data/et/b2.js"),
  path.join(ROOT, "www/data/et/b2.js"),
];
const B2_KEY = "B2_WORDS";

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[B2_KEY];
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const ${B2_KEY} = ${JSON.stringify(words, null, 2)};\n\nwindow.${B2_KEY} = ${B2_KEY};\n`,
    "utf8",
  );
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function currentMatches(actual, expected) {
  const exp = String(expected ?? "");
  if (actual === undefined || actual === null) return exp === "";
  return String(actual) === exp;
}

function readCurrent(entry, field) {
  const f = normalizeField(field);
  if (f === "lv") return entry.lv;
  return getAt(entry, f);
}

function applySet(entry, field, ownerNew) {
  const f = normalizeField(field);
  if (!f) return { ok: false, reason: "sectionaccents_skip", field };
  if (f === "lv") {
    entry.lv = ownerNew;
    return { ok: true, field: f };
  }
  if (!entry.study && f.startsWith("study.")) {
    return { ok: false, reason: "no_study", field: f };
  }
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

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ET–DE B2 — OWNER COPY-ONLY repair apply",
    "",
    "**Standard:** `REPAIR_APPLY_SAFETY_STANDARD.md` + `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Authority:** `reports/et-b2-owner-decisions-accepted.md`",
    "**DE:** STRICT READ-ONLY",
    "",
    "## Kopsavilkums",
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
    `| B2 studies | **${s.b2Studies}** |`,
    `| Mirror | **${s.mirror}** |`,
    `| Syntax | **${s.syntaxPass}** |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
  ];

  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const m of log.mismatches.slice(0, 30)) {
      lines.push(`- ${m.auditId} ${m.cardId} ${m.field}`);
    }
    lines.push("");
  }

  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  execSync("node scripts/build-et-b2-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  const mapData = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const apply = mapData.apply;
  const expectedLabot = mapData.meta.expectedLabot;

  const words = loadWords(B2_FILES[0]);
  const before = deepClone(words);

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
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      log.failed.push({ ...row, status: "FAILED", reason: "CARD_NOT_FOUND" });
      continue;
    }
    const actual = readCurrent(entry, row.field);
    if (String(actual) === String(row.ownerNew)) {
      log.skipped.push({ ...row, status: "ALREADY_MATCHED" });
      log.appliedVerified.push({
        auditId: row.auditId,
        cardId: row.cardId,
        field: row.field,
        status: "APPLIED_VERIFIED_ALREADY",
      });
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
      log.failed.push({
        ...row,
        ...result,
        status: result.reason === "path_missing" ? "MISSING_PATH" : "FAILED",
      });
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

  let syntaxPass = true;
  let mirrorPass = true;
  let gitDiffPass = true;
  const deChanges = DRY_RUN ? 0 : verifyDeUnchanged(before, words);

  if (!DRY_RUN && log.staged.length > 0) {
    for (const f of B2_FILES) writeWords(f, words);
    try {
      execSync("node --check data/et/b2.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/b2.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    mirrorPass = isSyncedWithWww("data/et/b2.js");

    const { verified, failures } = verifyFromDisk(
      () => loadWords(B2_FILES[0]),
      log.staged,
      (entry, field) => readCurrent(entry, field),
    );
    log.appliedVerified = [
      ...log.appliedVerified.filter((r) => r.status === "APPLIED_VERIFIED_ALREADY"),
      ...verified,
    ];
    log.verificationFailures = failures;

    gitDiffPass = gitDiffNonEmpty(["data/et/b2.js", "www/data/et/b2.js"], ROOT);
    const writeCheck = assertWritePostcondition({
      appliedVerified: verified.length,
      gitDiffPass,
      dryRun: DRY_RUN,
    });
    if (!writeCheck.pass) log.hardFail = writeCheck.verdict;
  } else if (DRY_RUN) {
    log.appliedVerified = log.staged.map((r) => ({ ...r, status: "DRY_RUN_STAGED" }));
  }

  const missingPath = log.failed.filter((f) => f.reason === "path_missing" || f.status === "MISSING_PATH").length;
  buildReconciliation({
    uniqueTargets: apply.length,
    verified: log.appliedVerified,
    mismatches: log.mismatches,
    skipped: log.skipped,
    failed: log.failed,
  });

  const appliedVerifiedCount = log.appliedVerified.length;
  const passVerdict = `ET_B2_OWNER_REPAIR_${expectedLabot}_PASS`;
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
                : appliedVerifiedCount === apply.length
                  ? !gitDiffPass
                    ? "HARD FAIL — EXPECTED PRODUCTION WRITE MISSING"
                    : !mirrorPass
                      ? "FAIL — MIRROR"
                      : passVerdict
                  : "FAIL — INCOMPLETE APPLY");

  log.summary = {
    requestedLabot: apply.length,
    appliedVerified: appliedVerifiedCount,
    currentValueMismatch: log.mismatches.length,
    ownerNewMismatch: log.verificationFailures.length,
    missingPath,
    skippedAlready: log.skipped.length,
    failed: log.failed.length,
    deChanges,
    b2Studies: countStudies(words),
    mirror: DRY_RUN ? "N/A" : mirrorPass ? "PASS" : "FAIL",
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass ? "PASS" : "FAIL",
    gitDiffPass: DRY_RUN ? "N/A" : gitDiffPass,
    finalVerdict,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  const logOut = { ...log, staged: log.staged.map(({ _entryResolver, ...r }) => r) };
  fs.writeFileSync(APPLY_LOG, JSON.stringify(logOut, null, 2));
  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));

  if (!DRY_RUN && finalVerdict !== passVerdict) process.exit(1);
}

main();
