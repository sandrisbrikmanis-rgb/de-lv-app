#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 OWNER COPY-ONLY repair apply (LUNA master 001-200).
 * Usage: node scripts/apply-es-a1-a2-owner-repair.js [--dry-run]
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

const APPLY_MAP = path.join(ROOT, "reports/temp/es-a1-a2-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-a1-a2-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-de-a1-a2-owner-repair-apply-001-200.md");
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

const DATASETS = {
  a1: {
    rel: "data/es/a1.js",
    globalKey: "A1_WORDS",
    prefix: "a1",
  },
  a2: {
    rel: "data/es/a2.js",
    globalKey: "A2_WORDS",
    prefix: "a2",
  },
};

function loadWords(rel, globalKey) {
  const filePath = path.join(ROOT, rel);
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function writeWords(rel, globalKey, words) {
  const content = `const ${globalKey} = ${JSON.stringify(words, null, 2)};\n\nwindow.${globalKey} = ${globalKey};\n`;
  fs.writeFileSync(path.join(ROOT, rel), content, "utf8");
  fs.writeFileSync(path.join(ROOT, "www", rel), content, "utf8");
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function levelFromCardId(cardId) {
  if (cardId.startsWith("a2-")) return "a2";
  return "a1";
}

function findEntry(words, cardId, prefix) {
  let entry = words.find((e) => e.study?.id === cardId);
  if (entry) return entry;
  const idxMatch = cardId.match(/-(\d+)$/);
  if (idxMatch) {
    const idx = parseInt(idxMatch[1], 10);
    if (words[idx]) return words[idx];
  }
  const deGuess = cardId
    .replace(new RegExp(`^${prefix}-`), "")
    .replace(/-study.*$/i, "")
    .replace(/-\d+$/, "");
  entry = words.find((e) => e.de === deGuess);
  if (entry) return entry;
  return words.find((e) => e.de.toLowerCase() === deGuess.toLowerCase()) || null;
}

function currentMatches(actual, expected) {
  const exp = String(expected || "").trim();
  if (actual === undefined || actual === null) return exp === "";
  return String(actual) === exp;
}

function readCurrent(entry, field) {
  if (field === "lv") return entry.lv;
  return entry[field];
}

function applySet(entry, field, ownerNew) {
  if (field !== "lv") return { ok: false, reason: "unsupported_field", field };
  entry.lv = ownerNew;
  return { ok: true, field };
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
    "# ES–DE A1+A2 — OWNER COPY-ONLY repair apply (MASTER 001–200)",
    "",
    "**Standard:** `REPAIR_APPLY_SAFETY_STANDARD.md`",
    "**Source:** `reports/es-de-a1-a2-owner-decisions-master-001-100.md` + `...-101-200.md`",
    "**DE:** STRICT READ-ONLY",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| OWNER targets | **${s.uniqueTargets}** |`,
    `| **APPLIED_VERIFIED** | **${s.appliedVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${s.currentValueMismatch}** |`,
    `| SKIPPED | **${s.skipped}** |`,
    `| FAILED | **${s.failed}** |`,
    `| DE field changes | **${s.deChanges}** |`,
    `| Mirror | **${s.mirrorPass}** |`,
    `| Syntax | **${s.syntaxPass}** |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
  ];
  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const m of log.mismatches) {
      lines.push(`- ${m.auditId} \`${m.cardId}\` expected \`${m.expectedCurrent}\` got \`${m.actualCurrent}\``);
    }
    lines.push("");
  }
  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  execSync("node scripts/build-es-a1-a2-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  const mapData = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const { apply } = mapData;

  const wordsByLevel = {
    a1: loadWords(DATASETS.a1.rel, DATASETS.a1.globalKey),
    a2: loadWords(DATASETS.a2.rel, DATASETS.a2.globalKey),
  };
  const beforeByLevel = {
    a1: deepClone(wordsByLevel.a1),
    a2: deepClone(wordsByLevel.a2),
  };

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
    const level = levelFromCardId(row.cardId);
    const ds = DATASETS[level];
    const words = wordsByLevel[level];
    const entry = findEntry(words, row.cardId, ds.prefix);
    if (!entry) {
      log.failed.push({ ...row, status: "FAILED", reason: "CARD_NOT_FOUND" });
      continue;
    }
    const actual = readCurrent(entry, row.field);
    if (String(actual) === String(row.ownerNew)) {
      log.skipped.push({ ...row, status: "ALREADY_MATCHED" });
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
      log.staged.push({ ...row, level, status: "STAGED" });
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
      level,
      ownerNew: row.ownerNew,
      status: "WRITTEN_PENDING_VERIFY",
      _resolver: { level, cardId: row.cardId },
    });
  }

  let syntaxPass = true;
  let mirrorPass = true;
  let deChanges = 0;
  let gitDiffPass = true;

  if (!DRY_RUN && log.staged.length > 0) {
    for (const level of ["a1", "a2"]) {
      const ds = DATASETS[level];
      writeWords(ds.rel, ds.globalKey, wordsByLevel[level]);
      deChanges += verifyDeUnchanged(beforeByLevel[level], wordsByLevel[level]);
    }
    try {
      execSync("node --check data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    mirrorPass = isSyncedWithWww(DATASETS.a1.rel) && isSyncedWithWww(DATASETS.a2.rel);

    const stagedLevel = (lvl) =>
      log.staged
        .filter((s) => s._resolver?.level === lvl)
        .map((row) => ({
          ...row,
          _entryResolver: (words) => findEntry(words, row._resolver.cardId, DATASETS[lvl].prefix),
        }));

    for (const level of ["a1", "a2"]) {
      const batch = stagedLevel(level);
      if (!batch.length) continue;
      const ds = DATASETS[level];
      const { verified, failures } = verifyFromDisk(
        () => loadWords(ds.rel, ds.globalKey),
        batch,
        readCurrent,
      );
      log.appliedVerified.push(...verified);
      log.verificationFailures.push(...failures);
    }

    gitDiffPass =
      gitDiffNonEmpty([DATASETS.a1.rel, "www/data/es/a1.js"], ROOT) &&
      gitDiffNonEmpty([DATASETS.a2.rel, "www/data/es/a2.js"], ROOT);
  } else if (DRY_RUN) {
    log.appliedVerified = log.staged.map((r) => ({ ...r, status: "DRY_RUN_STAGED" }));
  }

  const reconciliation = buildReconciliation({
    uniqueTargets: apply.length,
    verified: log.appliedVerified,
    mismatches: log.mismatches,
    skipped: log.skipped,
    failed: log.failed,
  });

  const finalVerdict =
    log.failed.length > 0
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
                : log.mismatches.length > 0
                  ? "FAIL — CURRENT_VALUE_MISMATCH"
                  : log.appliedVerified.length > 0 && !gitDiffPass
                    ? "HARD FAIL — EXPECTED PRODUCTION WRITE MISSING"
                    : "PASS";

  log.summary = {
    uniqueTargets: apply.length,
    staged: log.staged.length,
    appliedVerified: log.appliedVerified.length,
    currentValueMismatch: log.mismatches.length,
    skipped: log.skipped.length,
    failed: log.failed.length,
    verificationFail: log.verificationFailures.length,
    deChanges,
    reconciles: reconciliation.reconciles,
    gitDiffPass: DRY_RUN ? "N/A" : gitDiffPass,
    mirrorPass: DRY_RUN ? "N/A" : mirrorPass,
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass,
    finalVerdict,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  const logOut = {
    ...log,
    staged: log.staged.map(({ _resolver, ...r }) => r),
    appliedVerified: log.appliedVerified.map(({ _entryResolver, ...r }) => r),
  };
  fs.writeFileSync(APPLY_LOG, JSON.stringify(logOut, null, 2));
  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));

  if (finalVerdict !== "PASS" && finalVerdict !== "DRY_RUN NOT CLOSED") {
    process.exit(1);
  }
}

main();
