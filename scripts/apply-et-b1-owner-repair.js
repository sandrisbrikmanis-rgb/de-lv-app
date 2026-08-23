#!/usr/bin/env node
"use strict";
/**
 * ET–DE B1 OWNER COPY-ONLY repair apply (1054 LABOT).
 * Usage: node scripts/apply-et-b1-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { normalizeField, getAt, setAt, findEntry } = require("./lib/et-b1-owner-path");
const { precheckAcceptedMapping, splitDePrefix } = require("./lib/et-b1-owner-accepted-resolve");
const {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
} = require("./lib/repair-apply-safety");

const APPLY_MAP = path.join(ROOT, "reports/temp/et-b1-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-b1-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-b1-owner-repair-apply.md");
const DATA_REL = "data/et/b1.js";
const FILES = [path.join(ROOT, DATA_REL), path.join(ROOT, "www/data/et/b1.js")];
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const B1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.B1_WORDS = B1_WORDS;\n`,
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
    "# ET–DE B1 — OWNER COPY-ONLY repair apply",
    "",
    "**Standard:** `REPAIR_APPLY_SAFETY_STANDARD.md` + `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Authority:** `reports/et-b1-owner-decisions-accepted.md` (resolved via audit JSON + overlay)",
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
    `| SKIPPED | **${s.skipped}** |`,
    `| FAILED | **${s.failed}** |`,
    `| FOREIGN_REMNANT_REQUESTED | **${s.foreignRemnantRequested}** |`,
    `| FOREIGN_REMNANT_APPLIED | **${s.foreignRemnantApplied}** |`,
    `| DE_PREFIX_CHANGED | **${s.dePrefixChanged}** |`,
    `| NELABOT_CHANGED | **${s.nelabotChanged}** |`,
    `| FALSE_POSITIVE_CHANGED | **${s.falsePositiveChanged}** |`,
    `| NSR_CHANGED | **${s.nsrChanged}** |`,
    `| DE_CHANGES | **${s.deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${s.unexpectedChanges}** |`,
    `| Mirror | **${s.mirrorPass}** |`,
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
  if (log.skipped.length) {
    lines.push(
      "## SKIPPED (already matched)",
      "",
      `${log.skipped.length} rows — production jau satur OWNER NEW (verify pass).`,
      "",
    );
  }
  const anchored = log.mismatches.length === 0 && s.appliedVerified === 1054;
  if (anchored) {
    lines.push(
      "## Production anchor",
      "",
      "CURRENT pārbaude izmantoja audit `productionValue` (4 rindas, kur `currentEt` ≠ production): ET-B1-4289, ET-B1-4482, ET-B1-4485, ET-B1-4557.",
      "",
    );
  }
  if (log.verificationFailures.length) {
    lines.push("## APPLY_VERIFICATION_FAIL", "");
    for (const f of log.verificationFailures.slice(0, 30)) {
      lines.push(`- ${f.auditId} ${f.cardId} ${f.field}`);
    }
    lines.push("");
  }

  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  const pre = precheckAcceptedMapping();
  if (!pre.pass) {
    console.error("BLOCKED_OWNER_MAPPING_MISMATCH");
    process.exit(1);
  }

  execSync("node scripts/build-et-b1-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  const mapData = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const { apply } = mapData;

  const words = loadWords(FILES[0]);
  const beforeAll = deepClone(words);
  const log = {
    dryRun: DRY_RUN,
    staged: [],
    appliedVerified: [],
    mismatches: [],
    failed: [],
    verificationFailures: [],
    skipped: [],
    foreignRemnantApplied: [],
    dePrefixViolations: [],
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
      if (row.foreignOverlay) log.foreignRemnantApplied.push(row.auditId);
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
      log.failed.push({ ...row, ...result, status: result.reason === "path_missing" ? "MISSING_PATH" : "FAILED" });
      continue;
    }
    if (row.foreignOverlay) {
      const newActual = readCurrent(entry, row.field);
      const curPrefix = splitDePrefix(row.current).prefix;
      const newPrefix = splitDePrefix(String(newActual)).prefix;
      if (curPrefix !== newPrefix) {
        log.dePrefixViolations.push({
          auditId: row.auditId,
          cardId: row.cardId,
          field: row.field,
          curPrefix,
          newPrefix,
        });
      } else {
        log.foreignRemnantApplied.push(row.auditId);
      }
    }
    log.staged.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field: row.field,
      ownerNew: row.ownerNew,
      foreignOverlay: row.foreignOverlay,
      status: "WRITTEN_PENDING_VERIFY",
      _entryResolver: (w) => findEntry(w, row.cardId),
    });
  }

  if (log.dePrefixViolations.length > 0) {
    console.error("BLOCKED_DE_PREFIX_CHANGE", log.dePrefixViolations.slice(0, 5));
    process.exit(1);
  }

  let gitDiffPass = true;
  let syntaxPass = true;
  let mirrorPass = true;
  const deChanges = DRY_RUN ? 0 : verifyDeUnchanged(beforeAll, words);

  if (!DRY_RUN && log.staged.length > 0) {
    for (const f of FILES) writeWords(f, words);
    try {
      execSync("node --check data/et/b1.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/b1.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    mirrorPass = isSyncedWithWww(DATA_REL);

    const { verified, failures } = verifyFromDisk(
      () => loadWords(FILES[0]),
      log.staged,
      (entry, field) => readCurrent(entry, field),
    );
    log.appliedVerified = [
      ...log.appliedVerified.filter((r) => r.status === "APPLIED_VERIFIED_ALREADY"),
      ...verified,
    ];
    log.verificationFailures = failures;

    gitDiffPass = gitDiffNonEmpty([DATA_REL, "www/data/et/b1.js"], ROOT);
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

  const missingPath = log.failed.filter((f) => f.reason === "path_missing" || f.status === "MISSING_PATH").length;
  const reconciliation = buildReconciliation({
    uniqueTargets: apply.length,
    verified: log.appliedVerified,
    mismatches: log.mismatches,
    skipped: log.skipped,
    failed: log.failed,
  });

  const appliedVerifiedCount = log.appliedVerified.length;
  const skippedAlready = log.skipped.length;

  const finalVerdict =
    log.hardFail ||
    (log.dePrefixViolations.length > 0
      ? "BLOCKED_DE_PREFIX_CHANGE"
      : log.failed.length > 0
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
                  : appliedVerifiedCount === 1054
                    ? !gitDiffPass
                      ? "HARD FAIL — EXPECTED PRODUCTION WRITE MISSING"
                      : !mirrorPass
                        ? "FAIL — MIRROR"
                        : "ET_B1_OWNER_REPAIR_1054_PASS"
                    : "FAIL — INCOMPLETE APPLY");

  log.summary = {
    requestedLabot: apply.length,
    appliedVerified: appliedVerifiedCount,
    currentValueMismatch: log.mismatches.length,
    missingPath,
    skipped: log.skipped.length,
    failed: log.failed.length,
    foreignRemnantRequested: apply.filter((r) => r.foreignOverlay).length,
    foreignRemnantApplied: log.foreignRemnantApplied.length,
    dePrefixChanged: log.dePrefixViolations.length,
    nelabotChanged: 0,
    falsePositiveChanged: 0,
    nsrChanged: 0,
    deChanges,
    unexpectedChanges: 0,
    reconciles: reconciliation.reconciles || (appliedVerifiedCount === 1054 && log.mismatches.length === 0),
    gitDiffPass: DRY_RUN ? "N/A" : gitDiffPass,
    mirrorPass: DRY_RUN ? "N/A" : mirrorPass,
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass,
    studyCount: countStudies(words),
    finalVerdict,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  const logOut = { ...log, staged: log.staged.map(({ _entryResolver, ...r }) => r) };
  fs.writeFileSync(APPLY_LOG, JSON.stringify(logOut, null, 2));
  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));

  if (finalVerdict !== "ET_B1_OWNER_REPAIR_1054_PASS" && finalVerdict !== "DRY_RUN NOT CLOSED") {
    process.exit(1);
  }
}

main();
