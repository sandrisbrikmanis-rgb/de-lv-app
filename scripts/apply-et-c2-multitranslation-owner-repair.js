#!/usr/bin/env node
"use strict";
/**
 * ET C2 multi-translation OWNER COPY-ONLY apply (19 LABOT, MASTER v1.12).
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
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");

const MATERIALIZED = path.join(
  ROOT,
  "reports/et-c2-multitranslation-owner-decisions-accepted-materialized.md",
);
const APPLY_LOG = path.join(ROOT, "reports/temp/et-c2-multitranslation-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-c2-multitranslation-owner-repair-apply.md");
const DATA_REL = "data/et/c2.js";
const FILES = [path.join(ROOT, DATA_REL), path.join(ROOT, "www/data/et/c2.js")];
const C2_KEY = "C2_WORDS";
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[C2_KEY];
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const ${C2_KEY} = ${JSON.stringify(words, null, 2)};\n\nwindow.${C2_KEY} = ${C2_KEY};\n`,
    "utf8",
  );
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function parseMaterialized() {
  const src = fs.readFileSync(MATERIALIZED, "utf8");
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-C2-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 9) continue;
    const status = parts[8];
    if (status !== "LABOT") continue;
    rows.push({
      auditId: parts[1],
      cardId: parts[2],
      cardType: parts[3],
      field: parts[4].replace(/^`|`$/g, ""),
      de: parts[5],
      current: parts[6],
      ownerNew: parts[7].replace(/\*\*/g, "").trim(),
      status,
    });
  }
  return rows;
}

function readCurrent(entry, field) {
  const f = normalizeField(field);
  if (!f) return undefined;
  if (f === "lv") return entry.lv;
  if (f === "study.translation") return entry.study?.translation;
  if (f === "study.title") return entry.study?.title;
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
  if (f === "study.translation") {
    entry.study.translation = ownerNew;
    return { ok: true, field: f };
  }
  if (f === "study.title") {
    entry.study.title = ownerNew;
    return { ok: true, field: f };
  }
  if (getAt(entry, f) === undefined) return { ok: false, reason: "path_missing", field: f };
  setAt(entry, f, ownerNew);
  return { ok: true, field: f };
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
  const scan = scanDatasetMainTranslations(words, (e, i) => e.study?.id || `c2-${e.de}-${i}`);
  return {
    violations: scan.violations.length,
    inventoryCoverage: scan.inventoryCoverage,
    fieldsScanned: scan.fieldsScanned,
    rawCandidates: scan.rawCandidates,
  };
}

function main() {
  const apply = parseMaterialized();
  if (apply.length !== 19) {
    console.error(`Expected 19 LABOT rows, got ${apply.length}`);
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
  let scan = DRY_RUN ? null : runScan(words);

  if (!DRY_RUN && log.staged.length > 0) {
    for (const f of FILES) writeWords(f, words);
    try {
      execSync("node --check data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
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
    gitDiffPass = gitDiffNonEmpty([DATA_REL, "www/data/et/c2.js"], ROOT);
    scan = runScan(loadWords(FILES[0]));
    const writeCheck = assertWritePostcondition({
      appliedVerified: verified.length,
      gitDiffPass,
      dryRun: DRY_RUN,
    });
    if (!writeCheck.pass) log.hardFail = writeCheck.verdict;
  } else if (DRY_RUN) {
    log.appliedVerified = log.staged.map((r) => ({ ...r, status: "DRY_RUN_STAGED" }));
    scan = runScan(words);
  }

  const reconciliation = buildReconciliation({
    uniqueTargets: apply.length,
    verified: log.appliedVerified,
    mismatches: log.mismatches,
    skipped: log.skipped,
    failed: log.failed,
  });

  const appliedCount = log.appliedVerified.length + log.skipped.length;
  const scanPass = scan && scan.violations === 0;
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
                  : appliedCount !== 19
                    ? "FAIL — INCOMPLETE APPLY"
                    : !scanPass
                      ? "FAIL — MULTI_T_RESIDUAL"
                      : !gitDiffPass
                        ? "HARD FAIL — EXPECTED PRODUCTION WRITE MISSING"
                        : "PASS");

  log.summary = {
    c2Cards: words.length,
    requestedLabot: 19,
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
      "# ET C2 — Multi-translation OWNER COPY-ONLY apply",
      "",
      "**MASTER:** v1.12",
      `**Authority:** \`reports/et-c2-multitranslation-owner-decisions-accepted-materialized.md\``,
      `**Generated:** ${new Date().toISOString()}`,
      "",
      "| Metric | Value |",
      "|--------|-------|",
      "| C2_CARDS | **219** |",
      "| REQUESTED_LABOT | **19** |",
      `| APPLIED_VERIFIED | **${log.appliedVerified.length}** |`,
      `| ALREADY_MATCHED | **${log.skipped.length}** |`,
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
