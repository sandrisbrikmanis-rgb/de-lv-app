#!/usr/bin/env node
"use strict";
/**
 * ET B1 multi-translation OWNER COPY-ONLY apply (25 LABOT, MASTER v1.12).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getAt, setAt, findEntry } = require("./lib/da-b1-owner-path");
const {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
} = require("./lib/repair-apply-safety");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");

const ACCEPTED = path.join(ROOT, "reports/et-b1-multitranslation-owner-decisions-accepted.md");
const UPLOAD = path.join(ROOT, "uploads/et-b1-multitranslation-owner-decisions-accepted_0d9d.md");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-b1-multitranslation-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-b1-multitranslation-owner-repair-apply.md");
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

function parseAccepted() {
  const src = fs.existsSync(ACCEPTED) ? fs.readFileSync(ACCEPTED, "utf8") : fs.readFileSync(UPLOAD, "utf8");
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.includes("ET-B1-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 8) continue;
    const auditId = parts[1];
    if (!auditId.startsWith("ET-B1-MT-")) continue;
    const status = parts[7];
    if (status !== "LABOT") continue;
    rows.push({
      auditId,
      cardId: parts[2].replace(/^`|`$/g, ""),
      field: parts[3].replace(/^`|`$/g, ""),
      de: parts[4].replace(/^`|`$/g, ""),
      current: parts[5].replace(/^`|`$/g, ""),
      ownerNew: parts[6].replace(/\*\*/g, "").trim(),
      status,
    });
  }
  return rows;
}

function readCurrent(entry, field) {
  if (field === "lv") return entry.lv;
  if (field === "study.translation") return entry.study?.translation;
  if (field === "study.title") return entry.study?.title;
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
  if (field === "study.title") {
    entry.study.title = ownerNew;
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

function runScan(words) {
  const scan = scanDatasetMainTranslations(words, (e, i) => e.study?.id || `b1-${e.de}-${i}`);
  return {
    violations: scan.violations.length,
    inventoryCoverage: scan.inventoryCoverage,
    fieldsScanned: scan.fieldsScanned,
    rawCandidates: scan.rawCandidates,
  };
}

function main() {
  if (!fs.existsSync(ACCEPTED) && fs.existsSync(UPLOAD)) {
    fs.copyFileSync(UPLOAD, ACCEPTED);
  }
  const apply = parseAccepted();
  if (apply.length !== 25) {
    console.error(`Expected 25 LABOT rows, got ${apply.length}`);
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
      log.mismatches.push({ ...row, actualCurrent: actual, status: "CURRENT_VALUE_MISMATCH" });
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
  let scan = DRY_RUN ? null : runScan(words);

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
      readCurrent,
    );
    log.appliedVerified = verified;
    log.verificationFailures = failures;
    gitDiffPass = gitDiffNonEmpty([DATA_REL, "www/data/et/b1.js"], ROOT);
    scan = runScan(loadWords(FILES[0]));
    const writeCheck = assertWritePostcondition({
      appliedVerified: verified.length,
      gitDiffPass,
      dryRun: DRY_RUN,
    });
    if (!writeCheck.pass) log.hardFail = writeCheck.verdict;
  } else if (DRY_RUN) {
    log.appliedVerified = log.staged.map((r) => ({ ...r, status: "DRY_RUN_STAGED" }));
  }

  const appliedCount = log.appliedVerified.length + log.skipped.length;
  const reconciliation = buildReconciliation({
    uniqueTargets: apply.length,
    verified: log.appliedVerified,
    mismatches: log.mismatches,
    skipped: log.skipped,
    failed: log.failed,
  });

  const scanPass = scan && scan.violations === 0;
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
                : appliedCount !== 25
                  ? "FAIL — INCOMPLETE APPLY"
                  : !scanPass
                    ? "FAIL — MULTI_T_RESIDUAL"
                    : !gitDiffPass
                      ? "HARD FAIL — GIT DIFF"
                      : "PASS");

  log.summary = {
    requestedLabot: 25,
    appliedVerified: log.appliedVerified.length,
    alreadyMatched: log.skipped.length,
    appliedTotal: appliedCount,
    currentValueMismatch: log.mismatches.length,
    failed: log.failed.length,
    deChanges,
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass,
    mirrorPass: DRY_RUN ? "N/A" : mirrorPass,
    multiTranslationScan: scan,
    multipleMainTranslationsValidatedReal: scan?.violations ?? "N/A",
    mainTranslationCountViolations: scan?.violations ?? "N/A",
    finalVerdict,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  const logOut = { ...log, staged: log.staged.map(({ _entryResolver, ...r }) => r) };
  fs.writeFileSync(APPLY_LOG, JSON.stringify(logOut, null, 2));

  fs.writeFileSync(
    REPORT_MD,
    [
      "# ET B1 — Multi-translation OWNER COPY-ONLY apply",
      "",
      "**MASTER:** v1.12",
      `**Authority:** \`reports/et-b1-multitranslation-owner-decisions-accepted.md\``,
      `**Generated:** ${new Date().toISOString()}`,
      "",
      "| Metric | Value |",
      "|--------|-------|",
      "| REQUESTED_LABOT | **25** |",
      `| APPLIED_VERIFIED | **${log.appliedVerified.length}** |`,
      `| CURRENT_VALUE_MISMATCH | **${log.mismatches.length}** |`,
      `| MAIN_TRANSLATION_COUNT_VIOLATIONS | **${scan?.violations ?? "N/A"}** |`,
      `| DE_CHANGES | **${deChanges}** |`,
      `| SYNTAX | **${log.summary.syntaxPass}** |`,
      `| MIRROR | **${log.summary.mirrorPass}** |`,
      "",
      `## FINAL VERDICT: **${finalVerdict}**`,
      "",
    ].join("\n"),
  );

  console.log(JSON.stringify(log.summary, null, 2));
  if (finalVerdict !== "PASS" && finalVerdict !== "DRY_RUN NOT CLOSED") process.exit(1);
}

main();
