#!/usr/bin/env node
"use strict";
/**
 * ES-DE B1 OWNER COPY-ONLY apply (2654 LABOT).
 * Authority: reports/es-de-b1-owner-decisions-final.json only.
 * Usage: node scripts/apply-es-de-b1-owner-decisions-final.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { PRODUCTION_PATH, TOTAL_CARDS, STUDY_COUNT } = require("./lib/es-b1-discovery-config");
const { resolveCard, normalizeFieldPath } = require("./lib/es-b1-owner-context");
const { getAt, setAt } = require("./lib/da-a1-owner-path");
const {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
  assertWritePostcondition,
} = require("./lib/repair-apply-safety");

const DECISIONS_JSON = path.join(ROOT, "reports/es-de-b1-owner-decisions-final.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-de-b1-owner-repair-apply-final-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-de-b1-owner-repair-apply-final.md");
const DATA_REL = PRODUCTION_PATH;
const WWW_REL = `www/${PRODUCTION_PATH}`;
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];
const PR = 665;
const BRANCH = "cursor/es-de-b1-first-full-discovery-master-1-9-3141";
const EXPECTED = {
  total: 2842,
  labot: 2654,
  nelabot: 184,
  sourceDeIssue: 4,
};

function loadWords() {
  const filePath = path.join(ROOT, DATA_REL);
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function writeWords(words) {
  const content = `const B1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.B1_WORDS = B1_WORDS;\n`;
  fs.writeFileSync(path.join(ROOT, DATA_REL), content, "utf8");
  fs.writeFileSync(path.join(ROOT, WWW_REL), content, "utf8");
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
  const f = normalizeFieldPath(field);
  if (f === "lv") return entry.lv;
  return getAt(entry, f);
}

function applySet(entry, field, ownerNew) {
  const f = normalizeFieldPath(field);
  if (!f) return { ok: false, reason: "empty_field" };
  if (f === "lv") {
    entry.lv = ownerNew;
    return { ok: true, field: f };
  }
  if (f.startsWith("study.") && !entry.study) {
    return { ok: false, reason: "no_study", field: f };
  }
  const before = getAt(entry, f);
  if (before === undefined) return { ok: false, reason: "path_missing", field: f };
  if (!setAt(entry, f, ownerNew)) {
    return { ok: false, reason: "set_failed", field: f };
  }
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

function validatePrerequisites(decisions) {
  const items = decisions.items || [];
  const errors = [];
  const seen = new Set();

  if (items.length !== EXPECTED.total) errors.push(`items ${items.length} !== ${EXPECTED.total}`);

  const labot = items.filter((i) => i.status === "LABOT");
  const nelabot = items.filter((i) => i.status === "NELABOT");
  const sourceDeIssue = items.filter((i) => i.status === "SOURCE_DE_ISSUE");
  const unresolved = items.filter(
    (i) => !["LABOT", "NELABOT", "SOURCE_DE_ISSUE"].includes(i.status),
  );

  if (labot.length !== EXPECTED.labot) errors.push(`LABOT ${labot.length} !== ${EXPECTED.labot}`);
  if (nelabot.length !== EXPECTED.nelabot) errors.push(`NELABOT ${nelabot.length} !== ${EXPECTED.nelabot}`);
  if (sourceDeIssue.length !== EXPECTED.sourceDeIssue) {
    errors.push(`SOURCE_DE_ISSUE ${sourceDeIssue.length} !== ${EXPECTED.sourceDeIssue}`);
  }
  if (unresolved.length) errors.push(`unresolved ${unresolved.length}`);

  for (const item of items) {
    const key = `${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate ${key}`);
    seen.add(key);
    if (item.status === "LABOT") {
      if (item.action !== "REPLACE") errors.push(`${item.id}: LABOT action !== REPLACE`);
      if (String(item.new ?? "").trim() === "") errors.push(`${item.id}: empty LABOT new`);
    }
  }

  return { errors, labot, nelabot, sourceDeIssue, unresolved };
}

function verifyNelabotUnchanged(words, nelabotItems) {
  let unchanged = 0;
  const changed = [];
  for (const item of nelabotItems) {
    const { entry } = resolveCard(words, item.cardId);
    if (!entry) {
      changed.push({ id: item.id, reason: "card_not_found" });
      continue;
    }
    const actual = readCurrent(entry, item.field);
    if (currentMatches(actual, item.current)) unchanged += 1;
    else changed.push({ id: item.id, cardId: item.cardId, field: item.field, actual, expected: item.current });
  }
  return { unchanged, changed };
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ES–DE B1 — OWNER COPY-ONLY repair apply (final)",
    "",
    "**Standard:** `REPAIR_APPLY_SAFETY_STANDARD.md` + `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Authority:** `reports/es-de-b1-owner-decisions-final.json`",
    `**Branch:** \`${BRANCH}\``,
    `**PR:** #${PR}`,
    `**HEAD before:** \`${log.headBefore}\``,
    `**HEAD after:** \`${log.headAfter || "pending"}\``,
    "**DE:** STRICT READ-ONLY",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| OWNER LABOT | ${s.requestedLabot} |`,
    `| APPLIED_VERIFIED | ${s.appliedVerified}/${s.requestedLabot} |`,
    `| CURRENT_VALUE_MISMATCH | ${s.currentValueMismatch} |`,
    `| NEW_VALUE_MISMATCH | ${s.newValueMismatch} |`,
    `| FAILED | ${s.failed} |`,
    `| NELABOT_UNCHANGED | ${s.nelabotUnchanged}/${s.nelabotTotal} |`,
    `| SOURCE_DE_ISSUE_UNCHANGED | ${s.sourceDeIssueUnchanged}/${s.sourceDeIssueTotal} |`,
    `| B1 kartītes | ${s.totalCards} |`,
    `| Study | ${s.studyCount} |`,
    `| DE izmaiņas | ${s.deChanges} |`,
    `| Citu valodu izmaiņas | ${s.otherLangChanges} |`,
    `| Unexpected production changes | ${s.unexpectedChanges} |`,
    `| Mirror | ${s.mirrorPass} |`,
    `| Syntax | ${s.syntaxPass} |`,
    `| ID/order | ${s.idOrderPass} |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
  ];

  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const m of log.mismatches.slice(0, 50)) {
      lines.push(`- ${m.auditId} \`${m.cardId}\` \`${m.field}\``);
    }
    lines.push("");
  }
  if (log.verificationFailures.length) {
    lines.push("## NEW_VALUE_MISMATCH", "");
    for (const f of log.verificationFailures.slice(0, 50)) {
      lines.push(`- ${f.auditId} \`${f.cardId}\` \`${f.field}\``);
    }
    lines.push("");
  }
  if (log.failed.length) {
    lines.push("## FAILED", "");
    for (const f of log.failed.slice(0, 50)) {
      lines.push(`- ${f.auditId} \`${f.cardId}\` \`${f.field}\` — ${f.reason || f.status}`);
    }
    lines.push("");
  }

  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  const headBefore = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const branch = execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
  if (branch !== BRANCH) {
    console.error(`STOP: branch ${branch} !== ${BRANCH}`);
    process.exit(1);
  }

  if (!isSyncedWithWww(DATA_REL)) {
    console.error("STOP: mirror not synced before apply");
    process.exit(1);
  }

  try {
    execSync(`node --check ${DATA_REL}`, { cwd: ROOT, stdio: "pipe" });
    execSync(`node --check ${WWW_REL}`, { cwd: ROOT, stdio: "pipe" });
  } catch {
    console.error("STOP: syntax check failed before apply");
    process.exit(1);
  }

  const decisions = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const prereq = validatePrerequisites(decisions);
  if (prereq.errors.length) {
    console.error("STOP prerequisite:", prereq.errors);
    process.exit(1);
  }

  const words = loadWords();
  const beforeAll = deepClone(words);
  const wordsCardIndex = words;

  const log = {
    dryRun: DRY_RUN,
    headBefore,
    staged: [],
    appliedVerified: [],
    mismatches: [],
    failed: [],
    verificationFailures: [],
    nelabotChanged: [],
    sourceDeIssueChanged: [],
  };

  for (const row of prereq.labot) {
    const { entry } = resolveCard(words, row.cardId);
    if (!entry) {
      log.failed.push({
        auditId: row.id,
        cardId: row.cardId,
        field: row.field,
        reason: "card_not_found",
        status: "FAILED",
      });
      continue;
    }

    const actualCurrent = readCurrent(entry, row.field);
    if (!currentMatches(actualCurrent, row.current)) {
      log.mismatches.push({
        auditId: row.id,
        cardId: row.cardId,
        field: row.field,
        expectedCurrent: row.current,
        actualCurrent: actualCurrent === undefined ? "(undefined)" : actualCurrent,
        status: "CURRENT_VALUE_MISMATCH",
      });
      continue;
    }

    const result = applySet(entry, row.field, row.new);
    if (!result.ok) {
      log.failed.push({
        auditId: row.id,
        cardId: row.cardId,
        field: row.field,
        reason: result.reason,
        status: "FAILED",
      });
      continue;
    }

    log.staged.push({
      auditId: row.id,
      cardId: row.cardId,
      field: normalizeFieldPath(row.field),
      ownerNew: row.new,
      ownerCurrent: row.current,
      _entryResolver: (reloaded) => resolveCard(reloaded, row.cardId).entry,
    });
  }

  if (!DRY_RUN && log.staged.length > 0) {
    writeWords(words);
  }

  const loadFn = () => loadWords();
  const readFn = (entry, field) => readCurrent(entry, field);
  const { verified, failures } = DRY_RUN
    ? {
        verified: log.staged.map((r) => ({
          auditId: r.auditId,
          cardId: r.cardId,
          field: r.field,
          status: "APPLIED_VERIFIED_DRY_RUN",
        })),
        failures: [],
      }
    : verifyFromDisk(loadFn, log.staged, readFn);

  log.appliedVerified = verified;
  log.verificationFailures = failures;

  const afterWords = DRY_RUN ? words : loadWords();
  const nelabotCheck = verifyNelabotUnchanged(afterWords, prereq.nelabot);
  const sourceDeCheck = verifyNelabotUnchanged(afterWords, prereq.sourceDeIssue);

  const deChanges = verifyDeUnchanged(beforeAll, afterWords);
  const studyCount = countStudies(afterWords);
  const standardStudy = afterWords.filter((e) => e.study?.layout === "standardStudy").length;
  const minimalStudy = afterWords.filter((e) => e.study?.layout === "minimalStudy").length;

  let syntaxPass = true;
  let mirrorPass = true;
  if (!DRY_RUN) {
    try {
      execSync(`node --check ${DATA_REL}`, { cwd: ROOT, stdio: "pipe" });
      execSync(`node --check ${WWW_REL}`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
    mirrorPass = isSyncedWithWww(DATA_REL);
  }

  const deDiff = DRY_RUN
    ? false
    : execSync("git diff --name-only HEAD", { cwd: ROOT, encoding: "utf8" })
        .split("\n")
        .filter(Boolean)
        .some((f) => f.startsWith("data/") && !f.startsWith("data/es/"));

  const reconciliation = buildReconciliation({
    uniqueTargets: prereq.labot.length,
    verified: log.appliedVerified,
    mismatches: log.mismatches,
    skipped: 0,
    failed: log.failed,
  });

  const passApply =
    log.appliedVerified.length === EXPECTED.labot &&
    log.mismatches.length === 0 &&
    log.verificationFailures.length === 0 &&
    log.failed.length === 0 &&
    nelabotCheck.unchanged === EXPECTED.nelabot &&
    sourceDeCheck.unchanged === EXPECTED.sourceDeIssue &&
    deChanges === 0 &&
    !deDiff &&
    syntaxPass &&
    mirrorPass &&
    afterWords.length === TOTAL_CARDS;

  const finalVerdict = passApply
    ? "PASS — ALL 2654 OWNER LABOT APPLIED AND VERIFIED"
    : log.mismatches.length || log.verificationFailures.length || log.failed.length
      ? "FAIL"
      : "BLOCKED";

  log.summary = {
    requestedLabot: EXPECTED.labot,
    appliedVerified: log.appliedVerified.length,
    currentValueMismatch: log.mismatches.length,
    newValueMismatch: log.verificationFailures.length,
    failed: log.failed.length,
    nelabotUnchanged: nelabotCheck.unchanged,
    nelabotTotal: EXPECTED.nelabot,
    sourceDeIssueUnchanged: sourceDeCheck.unchanged,
    sourceDeIssueTotal: EXPECTED.sourceDeIssue,
    totalCards: afterWords.length,
    studyCount,
    standardStudy,
    minimalStudy,
    deChanges,
    otherLangChanges: deDiff ? 1 : 0,
    unexpectedChanges: deDiff ? 1 : 0,
    mirrorPass: mirrorPass ? "PASS" : "FAIL",
    syntaxPass: syntaxPass ? "PASS" : "FAIL",
    idOrderPass: afterWords.length === TOTAL_CARDS ? "PASS" : "FAIL",
    reconciliation,
    finalVerdict,
  };

  log.headAfter = DRY_RUN ? headBefore : execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  log.nelabotChanged = nelabotCheck.changed;
  log.sourceDeIssueChanged = sourceDeCheck.changed;

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2) + "\n");
  writeReport(log);

  console.log(JSON.stringify(log.summary, null, 2));

  if (!DRY_RUN) {
    const hasChanges = execSync("git status --porcelain data/es/b1.js www/data/es/b1.js", {
      cwd: ROOT,
      encoding: "utf8",
    }).trim().length > 0;
    if (log.appliedVerified.length > 0 && !hasChanges) {
      console.error("HARD FAIL — EXPECTED PRODUCTION WRITE MISSING");
      process.exit(1);
    }
  }

  if (!passApply) process.exit(1);
}

main();
