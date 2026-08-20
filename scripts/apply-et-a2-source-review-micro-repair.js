#!/usr/bin/env node
"use strict";
/**
 * ET–DE A2 source-review micro COPY-ONLY repair (single LABOT from NSR accepted).
 * Source: reports/et-a2-needs-source-decisions-accepted.md
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry } = require("./lib/da-a2-owner-path");
const {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
} = require("./lib/repair-apply-safety");

const DATA_REL = "data/et/a2.js";
const FILES = [path.join(ROOT, DATA_REL), path.join(ROOT, "www/data/et/a2.js")];
const REPORT = path.join(ROOT, "reports/et-a2-source-review-micro-repair-apply.md");
const LOG = path.join(ROOT, "reports/temp/et-a2-source-review-micro-repair-log.json");
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

const TARGET = {
  auditId: "ET-A2-0194",
  cardId: "a2-Traube-1464",
  field: "entry[1464].lv",
  current:
    "Ich lerne, damit LV/atlikušās bestehe. = ich die Prüfung Ma õpin, et eksami sooritada. saglabāta",
  ownerNew: "viinamari",
};

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const A2_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A2_WORDS = A2_WORDS;\n`,
    "utf8",
  );
}

function readLv(entry) {
  return entry.lv;
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
  const words = loadWords(FILES[0]);
  const beforeAll = JSON.parse(JSON.stringify(words));
  const entry = findEntry(words, TARGET.cardId);
  const log = { dryRun: DRY_RUN, target: TARGET, staged: [], mismatches: [], failed: [], verified: [] };

  if (!entry) {
    log.failed.push({ ...TARGET, reason: "CARD_NOT_FOUND" });
    log.finalVerdict = "FAIL";
    fs.writeFileSync(LOG, JSON.stringify(log, null, 2));
    process.exit(1);
  }

  const actual = readLv(entry);
  if (String(actual) === String(TARGET.ownerNew)) {
    log.skipped = [{ ...TARGET, status: "ALREADY_MATCHED" }];
    log.finalVerdict = "PASS";
    console.log(JSON.stringify(log, null, 2));
    return;
  }

  if (String(actual) !== String(TARGET.current)) {
    log.mismatches.push({
      auditId: TARGET.auditId,
      expectedCurrent: TARGET.current,
      actualCurrent: actual,
      status: "CURRENT_VALUE_MISMATCH",
    });
    log.finalVerdict = "BLOCKED_CURRENT_VALUE_MISMATCH";
    fs.writeFileSync(LOG, JSON.stringify(log, null, 2));
    writeReport(log);
    process.exit(2);
  }

  if (DRY_RUN) {
    log.staged = [{ ...TARGET, status: "DRY_RUN_STAGED" }];
    log.finalVerdict = "DRY_RUN NOT CLOSED";
    console.log(JSON.stringify(log, null, 2));
    return;
  }

  entry.lv = TARGET.ownerNew;
  log.staged = [
    {
      ...TARGET,
      status: "WRITTEN_PENDING_VERIFY",
      _entryResolver: (w) => findEntry(w, TARGET.cardId),
    },
  ];

  for (const f of FILES) writeWords(f, words);

  let syntaxPass = true;
  try {
    execSync("node --check data/et/a2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/a2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  const mirrorPass = isSyncedWithWww(DATA_REL);
  const deChanges = verifyDeUnchanged(beforeAll, words);
  const { verified, failures } = verifyFromDisk(() => loadWords(FILES[0]), log.staged, readLv);
  log.appliedVerified = verified;
  log.verificationFailures = failures;
  const gitDiffPass = gitDiffNonEmpty([DATA_REL, "www/data/et/a2.js"], ROOT);

  const reconciliation = buildReconciliation({
    uniqueTargets: 1,
    verified,
    mismatches: log.mismatches,
    skipped: [],
    failed: log.failed,
  });

  log.summary = {
    appliedVerified: verified.length,
    currentValueMismatch: log.mismatches.length,
    deChanges,
    syntaxPass,
    mirrorPass,
    gitDiffPass,
    reconciles: reconciliation.reconciles,
  };

  log.finalVerdict =
    deChanges > 0
      ? "HARD FAIL — DE CHANGES"
      : !syntaxPass
        ? "FAIL — SYNTAX"
        : failures.length
          ? "FAIL — APPLY_VERIFICATION"
          : verified.length === 1 && mirrorPass && gitDiffPass
            ? "PASS"
            : "FAIL";

  fs.mkdirSync(path.dirname(LOG), { recursive: true });
  fs.writeFileSync(LOG, JSON.stringify({ ...log, staged: log.staged.map(({ _entryResolver, ...r }) => r) }, null, 2));
  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));
  console.log("FINAL VERDICT:", log.finalVerdict);

  if (log.finalVerdict !== "PASS") process.exit(1);
}

function writeReport(log) {
  const s = log.summary || {};
  const lines = [
    "# ET–DE A2 — source-review micro-repair apply",
    "",
    "**Source:** `reports/et-a2-needs-source-decisions-accepted.md`",
    "**Target:** ET-A2-0194 · `a2-Traube-1464` · `entry[1464].lv`",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| APPLIED_VERIFIED | **${s.appliedVerified ?? 0}** |`,
    `| CURRENT_VALUE_MISMATCH | **${s.currentValueMismatch ?? log.mismatches?.length ?? 0}** |`,
    `| DE changes | **${s.deChanges ?? "—"}** |`,
    `| Syntax | **${s.syntaxPass ? "PASS" : s.syntaxPass === undefined ? "—" : "FAIL"}** |`,
    `| Mirror | **${s.mirrorPass ? "PASS" : s.mirrorPass === undefined ? "—" : "FAIL"}** |`,
    `| FINAL VERDICT | **${log.finalVerdict}** |`,
    "",
  ];
  fs.writeFileSync(REPORT, lines.join("\n"));
}

main();
