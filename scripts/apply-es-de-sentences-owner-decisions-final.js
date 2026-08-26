#!/usr/bin/env node
"use strict";
/**
 * ES-DE Sentences (Teikumi) OWNER COPY-ONLY apply (310 LABOT, 7 NELABOT).
 * Authority: reports/es-de-sentences-owner-decisions-final.json only.
 * Usage: node scripts/apply-es-de-sentences-owner-decisions-final.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getModuleConfig } = require("./lib/es-de-audit-config");
const { resolveCard, normalizeFieldPath } = require("./lib/es-de-audit-helpers");
const { buildReconciliation } = require("./lib/repair-apply-safety");

const cfg = getModuleConfig("sentences");
const DECISIONS_JSON = path.join(ROOT, "reports/es-de-sentences-owner-decisions-final.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-de-sentences-owner-repair-apply-final-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-de-sentences-owner-repair-apply-final.md");
const DATA_REL = cfg.productionPath;
const WWW_REL = cfg.wwwPath;
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "level"];
const BRANCH = "cursor/es-de-b2-c1-c2-sentences-verbs-full-audit-3141";
const EXPECTED = {
  total: 317,
  labot: 310,
  nelabot: 7,
  sourceDeIssue: 0,
};

function loadSentences() {
  const filePath = path.join(ROOT, DATA_REL);
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[cfg.globalKey];
}

function writeSentences(entries) {
  const content = `const ${cfg.globalKey} = ${JSON.stringify(entries, null, 2)};\n\nwindow.${cfg.globalKey} = ${cfg.globalKey};\n`;
  fs.writeFileSync(path.join(ROOT, DATA_REL), content, "utf8");
  fs.writeFileSync(path.join(ROOT, WWW_REL), content, "utf8");
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function normalizeComparable(value) {
  if (value === undefined || value === null) return "";
  return String(value)
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function currentMatches(actual, expected) {
  return normalizeComparable(actual) === normalizeComparable(expected);
}

function readCurrent(entry) {
  return entry.lv;
}

function applySet(entry, ownerNew) {
  entry.lv = ownerNew;
  return { ok: true, field: "lv" };
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

function verifyApplied(loadFn, staged) {
  const reloaded = loadFn();
  const verified = [];
  const failures = [];
  for (const row of staged) {
    const entry = row._entryResolver(reloaded);
    if (!entry) {
      failures.push({ ...row, status: "APPLY_VERIFICATION_FAIL", reason: "card_not_found_after_reload" });
      continue;
    }
    const actualAfter = readCurrent(entry);
    if (currentMatches(actualAfter, row.ownerNew)) {
      verified.push({ auditId: row.auditId, cardId: row.cardId, field: "lv", status: "APPLIED_VERIFIED" });
    } else {
      failures.push({
        auditId: row.auditId,
        cardId: row.cardId,
        field: "lv",
        status: "APPLY_VERIFICATION_FAIL",
        expectedNew: row.ownerNew,
        actualAfter: actualAfter === undefined ? "(undefined)" : actualAfter,
      });
    }
  }
  return { verified, failures };
}

function validatePrerequisites(decisions) {
  const items = decisions.decisions || decisions.items || [];
  const errors = [];
  const seen = new Set();

  if (items.length !== EXPECTED.total) errors.push(`items ${items.length} !== ${EXPECTED.total}`);

  const labot = items.filter((i) => i.status === "LABOT");
  const nelabot = items.filter((i) => i.status === "NELABOT");
  const sourceDeIssue = items.filter((i) => i.status === "SOURCE_DE_ISSUE");
  const unresolved = items.filter((i) => !["LABOT", "NELABOT", "SOURCE_DE_ISSUE"].includes(i.status));

  if (labot.length !== EXPECTED.labot) errors.push(`LABOT ${labot.length} !== ${EXPECTED.labot}`);
  if (nelabot.length !== EXPECTED.nelabot) errors.push(`NELABOT ${nelabot.length} !== ${EXPECTED.nelabot}`);
  if (sourceDeIssue.length !== EXPECTED.sourceDeIssue) {
    errors.push(`SOURCE_DE_ISSUE ${sourceDeIssue.length} !== ${EXPECTED.sourceDeIssue}`);
  }
  if (unresolved.length) errors.push(`unresolved ${unresolved.length}`);

  for (const item of items) {
    const key = `${item.cardId}|${item.field || "lv"}`;
    if (seen.has(key)) errors.push(`duplicate ${key}`);
    seen.add(key);
    if (item.status === "LABOT" && String(item.new ?? "").trim() === "") {
      errors.push(`${item.id}: empty LABOT new`);
    }
  }

  return { errors, labot, nelabot, sourceDeIssue, unresolved, items };
}

function verifyNelabotUnchanged(sentences, nelabotItems) {
  let unchanged = 0;
  const changed = [];
  for (const item of nelabotItems) {
    const { entry } = resolveCard(sentences, item.cardId, cfg);
    if (!entry) {
      changed.push({ id: item.id, reason: "card_not_found" });
      continue;
    }
    const actual = readCurrent(entry);
    if (currentMatches(actual, item.current)) unchanged += 1;
    else changed.push({ id: item.id, cardId: item.cardId, field: item.field, actual, expected: item.current });
  }
  return { unchanged, changed };
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ES–DE Teikumi/Sätze — OWNER COPY-ONLY repair apply (final)",
    "",
    "**Standard:** `REPAIR_APPLY_SAFETY_STANDARD.md` + `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "**Authority:** `reports/es-de-sentences-owner-decisions-final.json`",
    `**Branch:** \`${BRANCH}\``,
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
    `| Teikumi | ${s.totalCards} |`,
    `| DE izmaiņas | ${s.deChanges} |`,
    `| Mirror | ${s.mirrorPass} |`,
    `| Syntax | ${s.syntaxPass} |`,
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

  const sentences = loadSentences();
  const beforeAll = deepClone(sentences);

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
    const { entry } = resolveCard(sentences, row.cardId, cfg);
    if (!entry) {
      log.failed.push({
        auditId: row.id,
        cardId: row.cardId,
        field: "lv",
        reason: "card_not_found",
        status: "FAILED",
      });
      continue;
    }

    const actualCurrent = readCurrent(entry);
    if (!currentMatches(actualCurrent, row.current)) {
      log.mismatches.push({
        auditId: row.id,
        cardId: row.cardId,
        field: "lv",
        expectedCurrent: row.current,
        actualCurrent: actualCurrent === undefined ? "(undefined)" : actualCurrent,
        status: "CURRENT_VALUE_MISMATCH",
      });
      continue;
    }

    const result = applySet(entry, row.new);
    if (!result.ok) {
      log.failed.push({
        auditId: row.id,
        cardId: row.cardId,
        field: "lv",
        reason: result.reason,
        status: "FAILED",
      });
      continue;
    }

    log.staged.push({
      auditId: row.id,
      cardId: row.cardId,
      field: "lv",
      ownerNew: row.new,
      ownerCurrent: row.current,
      _entryResolver: (reloaded) => resolveCard(reloaded, row.cardId, cfg).entry,
    });
  }

  if (!DRY_RUN && log.staged.length > 0) {
    writeSentences(sentences);
  }

  const loadFn = () => loadSentences();
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
    : verifyApplied(loadFn, log.staged);

  log.appliedVerified = verified;
  log.verificationFailures = failures;

  const afterSentences = DRY_RUN ? sentences : loadSentences();
  const nelabotCheck = verifyNelabotUnchanged(afterSentences, prereq.nelabot);
  const sourceDeCheck = verifyNelabotUnchanged(afterSentences, prereq.sourceDeIssue);

  const deChanges = verifyDeUnchanged(beforeAll, afterSentences);

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
    afterSentences.length === cfg.totalCards;

  const finalVerdict = passApply
    ? "PASS — ALL 310 OWNER LABOT APPLIED AND VERIFIED"
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
    totalCards: afterSentences.length,
    deChanges,
    otherLangChanges: deDiff ? 1 : 0,
    unexpectedChanges: deDiff ? 1 : 0,
    mirrorPass: mirrorPass ? "PASS" : "FAIL",
    syntaxPass: syntaxPass ? "PASS" : "FAIL",
    idOrderPass: afterSentences.length === cfg.totalCards ? "PASS" : "FAIL",
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
    const hasChanges = execSync(`git status --porcelain ${DATA_REL} ${WWW_REL}`, {
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
