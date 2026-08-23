#!/usr/bin/env node
"use strict";
/**
 * ET–DE C1/C2 OWNER COPY-ONLY repair apply (76 LABOT).
 * Usage: node scripts/apply-et-c1c2-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { normalizeField, getAt, setAt, findEntry } = require("./lib/et-c1c2-owner-path");
const {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
} = require("./lib/repair-apply-safety");

const APPLY_MAP = path.join(ROOT, "reports/temp/et-c1c2-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-c1c2-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-c1c2-owner-repair-apply.md");
const EXPECTED_LABOT = 76;
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

const LEVEL_FILES = {
  c1: {
    rel: "data/et/c1.js",
    files: [path.join(ROOT, "data/et/c1.js"), path.join(ROOT, "www/data/et/c1.js")],
    key: "C1_WORDS",
  },
  c2: {
    rel: "data/et/c2.js",
    files: [path.join(ROOT, "data/et/c2.js"), path.join(ROOT, "www/data/et/c2.js")],
    key: "C2_WORDS",
  },
};

function loadWords(filePath, key) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function writeWords(filePath, words, key) {
  fs.writeFileSync(
    filePath,
    `const ${key} = ${JSON.stringify(words, null, 2)};\n\nwindow.${key} = ${key};\n`,
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
    "# ET–DE C1/C2 — OWNER COPY-ONLY repair apply",
    "",
    "**Standard:** `REPAIR_APPLY_SAFETY_STANDARD.md` + `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Authority:** `reports/et-c1c2-owner-decisions-accepted.md`",
    "**DE:** STRICT READ-ONLY",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| REQUESTED_LABOT | **${s.requestedLabot}** |`,
    `| APPLIED_VERIFIED | **${s.appliedVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${s.currentValueMismatch}** |`,
    `| MISSING_PATH | **${s.missingPath}** |`,
    `| SKIPPED_ALREADY | **${s.skippedAlready}** |`,
    `| FAILED | **${s.failed}** |`,
    `| DE_CHANGES | **${s.deChanges}** |`,
    `| C1 studies | **${s.c1Studies}** |`,
    `| C2 studies | **${s.c2Studies}** |`,
    `| Mirror C1 | **${s.mirrorC1}** |`,
    `| Mirror C2 | **${s.mirrorC2}** |`,
    `| Syntax | **${s.syntaxPass}** |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
  ];

  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "", "| Audit ID | Card | Field |", "|----------|------|-------|");
    for (const m of log.mismatches) {
      lines.push(`| ${m.auditId} | ${m.cardId} | ${m.field} |`);
    }
    lines.push("");
  }
  if (log.failed.length) {
    lines.push("## FAILED / MISSING_PATH", "");
    for (const f of log.failed.slice(0, 50)) {
      lines.push(`- ${f.auditId} ${f.cardId} ${f.field} — ${f.reason || f.status}`);
    }
    lines.push("");
  }

  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  execSync("node scripts/build-et-c1c2-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  const { apply } = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));

  const wordsByLevel = {};
  const beforeByLevel = {};
  for (const level of ["c1", "c2"]) {
    const { files, key } = LEVEL_FILES[level];
    wordsByLevel[level] = loadWords(files[0], key);
    beforeByLevel[level] = deepClone(wordsByLevel[level]);
  }

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
    const words = wordsByLevel[row.level];
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
        level: row.level,
        status: "APPLIED_VERIFIED_ALREADY",
      });
      continue;
    }
    if (!currentMatches(actual, row.current)) {
      log.mismatches.push({
        auditId: row.auditId,
        cardId: row.cardId,
        field: row.field,
        rawField: row.rawField,
        expectedCurrent: row.current,
        actualCurrent: actual === undefined ? "(undefined)" : actual,
        productionCurrent: row.productionCurrent,
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
      level: row.level,
      ownerNew: row.ownerNew,
      status: "WRITTEN_PENDING_VERIFY",
      _entryResolver: (w) => findEntry(w, row.cardId),
    });
  }

  let syntaxPass = true;
  let mirrorC1 = true;
  let mirrorC2 = true;
  let gitDiffPass = true;
  const deChanges = DRY_RUN
    ? 0
    : verifyDeUnchanged(beforeByLevel.c1, wordsByLevel.c1) +
      verifyDeUnchanged(beforeByLevel.c2, wordsByLevel.c2);

  if (!DRY_RUN && log.staged.length > 0) {
    for (const level of ["c1", "c2"]) {
      const { files, key } = LEVEL_FILES[level];
      for (const f of files) writeWords(f, wordsByLevel[level], key);
    }
    try {
      execSync("node --check data/et/c1.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/c1.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    mirrorC1 = isSyncedWithWww("data/et/c1.js");
    mirrorC2 = isSyncedWithWww("data/et/c2.js");

    const stagedByLevel = { c1: [], c2: [] };
    for (const s of log.staged) {
      const level = apply.find((r) => r.auditId === s.auditId)?.level || "c1";
      stagedByLevel[level].push(s);
    }

    const verifiedAll = [];
    const failuresAll = [];
    for (const level of ["c1", "c2"]) {
      const { files, key } = LEVEL_FILES[level];
      const { verified, failures } = verifyFromDisk(
        () => loadWords(files[0], key),
        stagedByLevel[level],
        (entry, field) => readCurrent(entry, field),
      );
      verifiedAll.push(...verified);
      failuresAll.push(...failures);
    }
    log.appliedVerified = [
      ...log.appliedVerified.filter((r) => r.status === "APPLIED_VERIFIED_ALREADY"),
      ...verifiedAll,
    ];
    log.verificationFailures = failuresAll;

    gitDiffPass = gitDiffNonEmpty(["data/et/c1.js", "www/data/et/c1.js", "data/et/c2.js", "www/data/et/c2.js"], ROOT);
    const writeCheck = assertWritePostcondition({
      appliedVerified: verifiedAll.length,
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
                    : !mirrorC1 || !mirrorC2
                      ? "FAIL — MIRROR"
                      : "ET_C1C2_OWNER_REPAIR_76_PASS"
                  : "FAIL — INCOMPLETE APPLY");

  log.summary = {
    requestedLabot: apply.length,
    appliedVerified: appliedVerifiedCount,
    currentValueMismatch: log.mismatches.length,
    missingPath,
    skippedAlready: log.skipped.length,
    failed: log.failed.length,
    deChanges,
    c1Studies: countStudies(wordsByLevel.c1),
    c2Studies: countStudies(wordsByLevel.c2),
    mirrorC1: DRY_RUN ? "N/A" : mirrorC1 ? "PASS" : "FAIL",
    mirrorC2: DRY_RUN ? "N/A" : mirrorC2 ? "PASS" : "FAIL",
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass ? "PASS" : "FAIL",
    gitDiffPass: DRY_RUN ? "N/A" : gitDiffPass,
    finalVerdict,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  const logOut = { ...log, staged: log.staged.map(({ _entryResolver, ...r }) => r) };
  fs.writeFileSync(APPLY_LOG, JSON.stringify(logOut, null, 2));
  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));

  if (finalVerdict !== "ET_C1C2_OWNER_REPAIR_76_PASS" && finalVerdict !== "DRY_RUN NOT CLOSED") {
    process.exit(1);
  }
}

main();
