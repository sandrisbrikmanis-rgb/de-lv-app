#!/usr/bin/env node
"use strict";
/**
 * ET Teikumi/Sätze multi-translation OWNER COPY-ONLY apply (120 LABOT, MASTER v1.12).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
} = require("./lib/repair-apply-safety");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");

const MATERIALIZED = path.join(
  ROOT,
  "reports/et-sentences-multitranslation-owner-decisions-accepted-materialized.md",
);
const APPLY_LOG = path.join(ROOT, "reports/temp/et-sentences-multitranslation-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-sentences-multitranslation-owner-repair-apply.md");
const DATA_REL = "data/et/sentences.js";
const FILES = [path.join(ROOT, DATA_REL), path.join(ROOT, "www/data/et/sentences.js")];
const KEY = "SENTENCE_ENTRIES";
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "level"];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[KEY];
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const ${KEY} = ${JSON.stringify(words, null, 2)};\n\nwindow.${KEY} = ${KEY};\n`,
    "utf8",
  );
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function findEntry(words, cardId) {
  return words.find((e) => e.de === cardId) || null;
}

function parseMaterialized() {
  const src = fs.readFileSync(MATERIALIZED, "utf8");
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-SENT-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 9) continue;
    if (parts[8] !== "LABOT") continue;
    rows.push({
      auditId: parts[1],
      cardId: parts[2],
      cardType: parts[3],
      field: parts[4].replace(/^`|`$/g, ""),
      de: parts[5],
      current: parts[6],
      ownerNew: parts[7].replace(/\*\*/g, "").trim(),
      status: parts[8],
    });
  }
  return rows;
}

function readCurrent(entry, field) {
  if (field === "lv") return entry.lv;
  return undefined;
}

function applySet(entry, field, ownerNew) {
  if (field === "lv") {
    entry.lv = ownerNew;
    return { ok: true };
  }
  return { ok: false, reason: "path_missing", field };
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

function entryId(entry, index) {
  return entry.id || entry.de || `sent-${index}`;
}

function runScan(words) {
  const scan = scanDatasetMainTranslations(words, entryId);
  return {
    violations: scan.violations.length,
    inventoryCoverage: scan.inventoryCoverage,
    fieldsScanned: scan.fieldsScanned,
    rawCandidates: scan.rawCandidates,
  };
}

function main() {
  const apply = parseMaterialized();
  if (apply.length !== 120) {
    console.error(`Expected 120 LABOT rows, got ${apply.length}`);
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
      execSync("node --check data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
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
    gitDiffPass = gitDiffNonEmpty([DATA_REL, "www/data/et/sentences.js"], ROOT);
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
                  : appliedCount !== 120
                    ? "FAIL — INCOMPLETE APPLY"
                    : !scanPass
                      ? "FAIL — MULTI_T_RESIDUAL"
                      : !gitDiffPass && log.staged.length > 0
                        ? "HARD FAIL — EXPECTED PRODUCTION WRITE MISSING"
                        : "PASS");

  log.summary = {
    teikumiCards: words.length,
    requestedLabot: 120,
    appliedVerified: log.appliedVerified.length,
    alreadyMatched: log.skipped.length,
    appliedTotal: appliedCount,
    currentValueMismatch: log.mismatches.length,
    failed: log.failed.length,
    deChanges,
    multiTranslationScan: scan,
    multipleMainTranslationsValidatedReal: scan?.violations ?? "N/A",
    finalVerdict,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  const logOut = { ...log, staged: log.staged.map(({ _entryResolver, ...r }) => r) };
  fs.writeFileSync(APPLY_LOG, JSON.stringify(logOut, null, 2));

  fs.writeFileSync(
    REPORT_MD,
    [
      "# ET Teikumi — Multi-translation OWNER COPY-ONLY apply",
      "",
      "**MASTER:** v1.12",
      `**Generated:** ${new Date().toISOString()}`,
      "",
      `## FINAL VERDICT: **${finalVerdict}**`,
      "",
    ].join("\n"),
  );

  console.log(JSON.stringify(log.summary, null, 2));
  if (finalVerdict !== "PASS" && finalVerdict !== "DRY_RUN NOT CLOSED") process.exit(1);
}

main();
