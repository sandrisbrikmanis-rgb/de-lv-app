#!/usr/bin/env node
"use strict";
/**
 * ET–DE Verbs OWNER COPY-ONLY repair apply.
 * Usage: node scripts/apply-et-verbs-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry, getEtValue, setEtValue, normalizeField } = require("./lib/et-verbs-owner-path");
const {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
} = require("./lib/repair-apply-safety");

const APPLY_MAP = path.join(ROOT, "reports/temp/et-verbs-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-verbs-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-verbs-owner-repair-apply.md");
const DATA_REL = "data/et/verbs.js";
const FILES = [path.join(ROOT, DATA_REL), path.join(ROOT, "www/data/et/verbs.js")];
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
  return normalizeCompare(actual) === normalizeCompare(expected);
}

function verifyDeUnchanged(beforeEt, afterEt, beforeDe, afterDe) {
  let etDeChanges = 0;
  for (let i = 0; i < afterEt.length; i++) {
    for (const formKey of Object.keys(afterEt[i] || {})) {
      if (JSON.stringify(beforeEt[i]?.[formKey]?.de) !== JSON.stringify(afterEt[i]?.[formKey]?.de)) {
        etDeChanges++;
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
  return { etDeChanges, deRefChanges };
}

function writeReport(log, uniqueTargets) {
  const s = log.summary;
  const lines = [
    "# ET–DE Verbs — OWNER COPY-ONLY repair apply",
    "",
    "**Standard:** `REPAIR_APPLY_SAFETY_STANDARD.md` + `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Authority:** `reports/et-verbs-owner-decisions-accepted.md`",
    "**DE:** STRICT READ-ONLY",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| UNIQUE_TARGETS | **${uniqueTargets}** |`,
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
    `| Count (189) | **${s.countPass}** |`,
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
  execSync("node scripts/build-et-verbs-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const apply = applyMap.apply || [];
  const uniqueTargets = apply.length;

  const verbs = loadVerbs(FILES[0]);
  const deRef = loadVerbs(DE_FILE);
  const beforeEt = deepClone(verbs);
  const beforeDe = deepClone(deRef);

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
    const entry = findEntry(verbs, row.cardId);
    if (!entry) {
      log.failed.push({ ...row, status: "FAILED", reason: "CARD_NOT_FOUND" });
      continue;
    }
    const formKey = normalizeField(row.field);
    const actual = getEtValue(entry, row.field);
    if (actual === undefined) {
      log.failed.push({ ...row, status: "MISSING_PATH", reason: "path_missing" });
      continue;
    }
    if (String(actual) === String(row.ownerNew)) {
      log.skipped.push({ ...row, status: "ALREADY_MATCHED" });
      log.appliedVerified.push({ auditId: row.auditId, cardId: row.cardId, field: formKey, status: "APPLIED_VERIFIED_ALREADY" });
      continue;
    }
    if (!currentMatches(actual, row.currentEt)) {
      log.mismatches.push({
        auditId: row.auditId,
        cardId: row.cardId,
        field: formKey,
        expectedCurrent: row.currentEt,
        actualCurrent: actual,
        status: "CURRENT_VALUE_MISMATCH",
      });
      continue;
    }
    if (DRY_RUN) {
      log.staged.push({ ...row, field: formKey, status: "STAGED" });
      continue;
    }
    const result = setEtValue(entry, row.field, row.ownerNew);
    if (!result.ok) {
      log.failed.push({ ...row, status: "FAILED", reason: result.reason });
      continue;
    }
    log.staged.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field: formKey,
      ownerNew: row.ownerNew,
      status: "WRITTEN_PENDING_VERIFY",
      _entryResolver: (v) => findEntry(v, row.cardId),
    });
  }

  let syntaxPass = true;
  let mirrorPass = true;
  let gitDiffPass = true;
  let countPass = true;
  const integrity = DRY_RUN ? { etDeChanges: 0, deRefChanges: 0 } : verifyDeUnchanged(beforeEt, verbs, beforeDe, deRef);

  if (!DRY_RUN && log.staged.length > 0) {
    for (const f of FILES) writeVerbs(f, verbs);
    try {
      execSync("node --check data/et/verbs.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/verbs.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    mirrorPass = isSyncedWithWww(DATA_REL);
    countPass = loadVerbs(FILES[0]).length === 189 && loadVerbs(DE_FILE).length === 189;

    const { verified, failures } = verifyFromDisk(
      () => loadVerbs(FILES[0]),
      log.staged,
      (entry, field) => getEtValue(entry, field)
    );
    log.appliedVerified = [
      ...log.appliedVerified.filter((r) => r.status === "APPLIED_VERIFIED_ALREADY"),
      ...verified,
    ];
    log.verificationFailures = failures;
    gitDiffPass = gitDiffNonEmpty([DATA_REL, "www/data/et/verbs.js"], ROOT);
    const wc = assertWritePostcondition({ appliedVerified: verified.length, gitDiffPass, dryRun: DRY_RUN });
    if (!wc.pass) log.hardFail = wc.verdict;
  } else if (DRY_RUN) {
    log.appliedVerified = log.staged.map((r) => ({ ...r, status: "DRY_RUN_STAGED" }));
  }

  const appliedVerifiedCount = log.appliedVerified.length;
  const reconciliation = buildReconciliation({
    uniqueTargets,
    verified: log.appliedVerified,
    mismatches: log.mismatches,
    skipped: log.skipped,
    failed: log.failed,
  });

  const finalVerdict =
    log.hardFail ||
    (log.failed.length > 0
      ? "FAIL"
      : log.mismatches.length > 0
        ? "FAIL — CURRENT_VALUE_MISMATCH"
        : integrity.etDeChanges > 0 || integrity.deRefChanges > 0
          ? "HARD FAIL — DE CHANGES"
          : !syntaxPass
            ? "FAIL — SYNTAX"
            : log.verificationFailures.length > 0
              ? "FAIL — APPLY_VERIFICATION"
              : DRY_RUN
                ? "DRY_RUN NOT CLOSED"
                : appliedVerifiedCount === uniqueTargets
                  ? !gitDiffPass
                    ? "HARD FAIL — EXPECTED PRODUCTION WRITE MISSING"
                    : !mirrorPass
                      ? "FAIL — MIRROR"
                      : !countPass
                        ? "FAIL — COUNT"
                        : "ET_VERBS_OWNER_REPAIR_PASS"
                  : "FAIL — INCOMPLETE APPLY");

  log.summary = {
    requestedLabot: apply.length,
    appliedVerified: appliedVerifiedCount,
    currentValueMismatch: log.mismatches.length,
    ownerNewMismatch: log.verificationFailures.length,
    missingPath: log.failed.filter((f) => f.status === "MISSING_PATH").length,
    skippedAlready: log.skipped.length,
    failed: log.failed.length,
    deChanges: integrity.etDeChanges + integrity.deRefChanges,
    mirrorPass: DRY_RUN ? "N/A" : mirrorPass ? "PASS" : "FAIL",
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass ? "PASS" : "FAIL",
    countPass: DRY_RUN ? "N/A" : countPass ? "PASS" : "FAIL",
    reconciliation,
    finalVerdict,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(
    APPLY_LOG,
    JSON.stringify({ ...log, staged: log.staged.map(({ _entryResolver, ...r }) => r) }, null, 2)
  );
  if (!DRY_RUN) writeReport(log, uniqueTargets);
  console.log(JSON.stringify(log.summary, null, 2));

  if (finalVerdict !== "ET_VERBS_OWNER_REPAIR_PASS" && finalVerdict !== "DRY_RUN NOT CLOSED") {
    process.exit(1);
  }
}

main();
