#!/usr/bin/env node
"use strict";
/**
 * ET–DE A1 missing Study OWNER COPY-ONLY apply.
 * Complies with docs_and_rules/REPAIR_APPLY_SAFETY_STANDARD.md
 * Usage: node scripts/apply-et-a1-missing-study-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry: findEntryBase } = require("./lib/da-a1-owner-path");
const {
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
} = require("./lib/repair-apply-safety");

const REPAIRS = path.join(ROOT, "reports/temp/et-a1-missing-study-repairs.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-a1-missing-study-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-a1-missing-study-repair-apply.md");
const ACCEPTED = path.join(ROOT, "reports/et-a1-missing-study-owner-decisions-accepted.md");
const DATA_REL = "data/et/a1.js";
const FILES = [path.join(ROOT, DATA_REL), path.join(ROOT, "www/data/et/a1.js")];
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

function findEntry(words, cardId, de) {
  const base = findEntryBase(words, cardId);
  if (base) return base;
  const idxMatch = cardId.match(/-(\d+)$/);
  if (idxMatch && words[parseInt(idxMatch[1], 10)]) return words[parseInt(idxMatch[1], 10)];
  return words.find((e) => e.de === de) || null;
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

function studyMatches(actual, expected) {
  return JSON.stringify(actual) === JSON.stringify(expected);
}

function studyWithoutAccents(study) {
  const copy = deepClone(study);
  delete copy.sectionAccents;
  return copy;
}

function studyContentMatches(actual, expected) {
  if (!actual || !expected) return false;
  return JSON.stringify(studyWithoutAccents(actual)) === JSON.stringify(studyWithoutAccents(expected));
}

function ownerContentVerified(entry, expectedStudy) {
  return studyContentMatches(readCurrentStudy(entry), expectedStudy);
}

function readCurrentStudy(entry) {
  if (!entry.study) return undefined;
  return entry.study;
}

function countStudies(words) {
  return words.filter((e) => e.study && typeof e.study === "object").length;
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

function verifyFromDisk(loadFn, staged) {
  const reloaded = loadFn();
  const verified = [];
  const failures = [];
  for (const row of staged) {
    const entry = findEntry(reloaded, row.cardId, row.de);
    if (!entry) {
      failures.push({ ...row, status: "APPLY_VERIFICATION_FAIL", reason: "card_not_found_after_reload" });
      continue;
    }
    const actualAfter = readCurrentStudy(entry);
    if (studyMatches(actualAfter, row.ownerNew)) {
      verified.push({
        auditId: row.auditId,
        cardId: row.cardId,
        field: row.field,
        studyId: row.ownerNew.id,
        status: "APPLIED_VERIFIED",
      });
    } else {
      failures.push({
        auditId: row.auditId,
        cardId: row.cardId,
        field: row.field,
        status: "APPLY_VERIFICATION_FAIL",
        expectedStudyId: row.ownerNew.id,
        actualStudyId: actualAfter?.id,
      });
    }
  }
  return { verified, failures };
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ET–DE A1 — Missing Study OWNER COPY-ONLY repair apply",
    "",
    "**Standard:** `REPAIR_APPLY_SAFETY_STANDARD.md` + `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1",
    `**Source:** \`${path.basename(ACCEPTED)}\``,
    "**DE:** STRICT READ-ONLY",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| OWNER unique targets | **${s.uniqueTargets}** |`,
    `| **APPLIED_VERIFIED** | **${s.appliedVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${s.currentValueMismatch}** |`,
    `| ALREADY_MATCHED | **${s.alreadyMatched}** |`,
    `| FAILED | **${s.failed}** |`,
    `| APPLY_VERIFICATION_FAIL | **${s.verificationFail}** |`,
    `| Study count (before → after) | **${s.studyCountBefore} → ${s.studyCountAfter}** |`,
    `| DE field changes | **${s.deChanges}** |`,
    `| Reconciliation | **${s.reconciles ? "PASS" : "FAIL"}** |`,
    `| Production git diff | **${s.gitDiffPass}** |`,
    `| Mirror data ↔ www | **${s.mirrorPass}** |`,
    `| Syntax | **${s.syntaxPass}** |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
  ];
  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const m of log.mismatches) lines.push(`- ${m.auditId} ${m.cardId}: ${m.actualCurrent}`);
    lines.push("");
  }
  if (log.verificationFailures.length) {
    lines.push("## APPLY_VERIFICATION_FAIL", "");
    for (const f of log.verificationFailures) lines.push(`- ${f.auditId} ${f.cardId}`);
    lines.push("");
  }
  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  execSync("node scripts/build-et-a1-missing-study-repairs.js", { cwd: ROOT, stdio: "pipe" });
  const repairs = JSON.parse(fs.readFileSync(REPAIRS, "utf8"));
  const words = loadWords(FILES[0]);
  const beforeAll = deepClone(words);
  const studyCountBefore = countStudies(words);

  const log = {
    dryRun: DRY_RUN,
    standard: "REPAIR_APPLY_SAFETY_STANDARD.md",
    staged: [],
    appliedVerified: [],
    mismatches: [],
    alreadyMatched: [],
    failed: [],
    verificationFailures: [],
  };

  for (const row of repairs) {
    const entry = findEntry(words, row.cardId, row.de);
    if (!entry) {
      log.failed.push({ ...row, status: "FAILED", reason: "CARD_NOT_FOUND" });
      continue;
    }
    const actual = readCurrentStudy(entry);
    const expectedStudy = row.study;

    if (actual && studyMatches(actual, expectedStudy)) {
      log.alreadyMatched.push({
        auditId: row.auditId,
        cardId: row.cardId,
        studyId: actual.id,
        status: "ALREADY_MATCHED",
        note: "full_study_including_sectionAccents",
      });
      continue;
    }

    if (actual && studyContentMatches(actual, expectedStudy)) {
      log.alreadyMatched.push({
        auditId: row.auditId,
        cardId: row.cardId,
        studyId: actual.id,
        status: "ALREADY_MATCHED",
        note: "owner_content_verified_sectionAccents_post_repair",
      });
      continue;
    }

    if (actual !== undefined && actual !== null) {
      log.mismatches.push({
        auditId: row.auditId,
        cardId: row.cardId,
        field: row.field,
        expectedCurrent: row.current,
        actualCurrent: `(Study saturs nesakrīt: ${actual.id})`,
        status: "CURRENT_VALUE_MISMATCH",
      });
      continue;
    }

    if (row.current !== "(nav Study objekta)") {
      log.mismatches.push({
        auditId: row.auditId,
        cardId: row.cardId,
        field: row.field,
        expectedCurrent: row.current,
        actualCurrent: "(nav Study objekta)",
        status: "CURRENT_VALUE_MISMATCH",
      });
      continue;
    }

    if (DRY_RUN) {
      log.staged.push({ auditId: row.auditId, cardId: row.cardId, status: "STAGED" });
      continue;
    }

    entry.study = deepClone(expectedStudy);
    log.staged.push({
      auditId: row.auditId,
      cardId: row.cardId,
      de: row.de,
      field: row.field,
      ownerNew: expectedStudy,
      status: "WRITTEN_PENDING_VERIFY",
    });
  }

  let gitDiffPass = true;
  let syntaxPass = true;
  let mirrorPass = true;
  const deChanges = DRY_RUN ? 0 : verifyDeUnchanged(beforeAll, words);
  const studyCountAfter = DRY_RUN ? studyCountBefore : countStudies(words);

  if (!DRY_RUN && log.staged.length > 0) {
    for (const f of FILES) writeWords(f, words);
    try {
      execSync("node --check data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    mirrorPass = isSyncedWithWww(DATA_REL);

    const { verified, failures } = verifyFromDisk(() => loadWords(FILES[0]), log.staged);
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

  // §5 disk reload verification for ALREADY_MATCHED (OWNER content === NEW)
  if (!DRY_RUN) {
    const reloaded = loadWords(FILES[0]);
    for (const row of log.alreadyMatched) {
      const repair = repairs.find((r) => r.auditId === row.auditId);
      const entry = findEntry(reloaded, row.cardId, repair?.de);
      if (!entry || !ownerContentVerified(entry, repair.study)) {
        log.verificationFailures.push({
          auditId: row.auditId,
          cardId: row.cardId,
          status: "APPLY_VERIFICATION_FAIL",
          reason: "already_matched_content_mismatch_after_reload",
        });
      } else {
        log.appliedVerified.push({
          auditId: row.auditId,
          cardId: row.cardId,
          field: "study",
          studyId: entry.study.id,
          status: "APPLIED_VERIFIED",
          mode: row.note || "ALREADY_MATCHED",
        });
      }
    }
  }

  const reconciliation = buildReconciliation({
    uniqueTargets: repairs.length,
    verified: log.appliedVerified.filter((r) => r.status === "APPLIED_VERIFIED"),
    mismatches: log.mismatches,
    skipped: log.alreadyMatched.filter(
      (r) => !log.appliedVerified.some((v) => v.auditId === r.auditId && v.status === "APPLIED_VERIFIED"),
    ),
    failed: log.failed,
  });

  const appliedCount = log.appliedVerified.filter((r) => r.status === "APPLIED_VERIFIED").length;
  const allVerified = appliedCount === repairs.length && log.mismatches.length === 0 && log.failed.length === 0;
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
                : appliedCount > 0 && log.staged.length > 0 && !gitDiffPass
                  ? "HARD FAIL — EXPECTED PRODUCTION WRITE MISSING"
                  : allVerified && studyCountAfter === 134
                    ? log.staged.length > 0
                      ? "PASS"
                      : "PASS — ALREADY_MATCHED"
                    : "FAIL");

  log.summary = {
    uniqueTargets: repairs.length,
    staged: log.staged.length,
    appliedVerified: appliedCount,
    currentValueMismatch: log.mismatches.length,
    alreadyMatched: log.alreadyMatched.length,
    failed: log.failed.length,
    verificationFail: log.verificationFailures.length,
    studyCountBefore,
    studyCountAfter,
    deChanges,
    reconciles: reconciliation.reconciles,
    gitDiffPass: DRY_RUN ? "N/A" : gitDiffPass ? "PASS" : "FAIL",
    mirrorPass: DRY_RUN ? "N/A" : mirrorPass ? "PASS" : "FAIL",
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass ? "PASS" : "FAIL",
    finalVerdict,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(
    APPLY_LOG,
    JSON.stringify(
      {
        ...log,
        staged: log.staged.map(({ ownerNew, ...r }) => ({
          ...r,
          studyId: ownerNew?.id,
        })),
      },
      null,
      2,
    ),
  );
  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));

  if (finalVerdict !== "PASS" && finalVerdict !== "DRY_RUN NOT CLOSED" && finalVerdict !== "PASS — ALREADY_MATCHED") {
    process.exit(1);
  }
}

main();
