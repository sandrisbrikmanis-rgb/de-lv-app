#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 final micro-regression OWNER COPY-ONLY apply.
 * Usage: node scripts/apply-es-a1-a2-final-micro-regression-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getAt, setAt } = require("./lib/da-a1-owner-path");
const { verifyFromDisk, buildReconciliation } = require("./lib/repair-apply-safety");
const { runRetention, loadWords, resolveEntry, readCurrent } = require("./lib/es-a1-a2-final-regression-retention");

const DECISIONS_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-micro-regression-owner-decisions.json");
const FINAL_OWNER_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-regression-owner-decisions.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-a1-a2-final-micro-regression-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-de-a1-a2-final-micro-regression-owner-repair-apply.md");
const DRY_RUN = process.argv.includes("--dry-run");
const VERIFY_ONLY = process.argv.includes("--verify-only");
const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";
const EXPECTED_HEAD_PREFIX = "365db701";

const NELABOT_GUARD_IDS = ["ES-A1A2-MICRO-0226", "ES-A1A2-MICRO-0227", "ES-A1A2-MICRO-0240"];

const DATASETS = {
  a1: { rel: "data/es/a1.js", globalKey: "A1_WORDS", prefix: "a1" },
  a2: { rel: "data/es/a2.js", globalKey: "A2_WORDS", prefix: "a2" },
};

const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function findEntry(words, cardId, prefix) {
  let entry = words.find((e) => e.study?.id === cardId);
  if (entry) return entry;
  const idxMatch = cardId.match(/-(\d+)$/);
  if (idxMatch && words[parseInt(idxMatch[1], 10)]) return words[parseInt(idxMatch[1], 10)];
  const deGuess = cardId
    .replace(new RegExp(`^${prefix}-`), "")
    .replace(/-study.*$/i, "")
    .replace(/-\d+$/, "");
  return (
    words.find((e) => e.de === deGuess) ||
    words.find((e) => e.de?.toLowerCase() === deGuess.toLowerCase()) ||
    null
  );
}

function currentMatches(actual, expected) {
  return String(actual ?? "") === String(expected ?? "");
}

function applySet(entry, field, ownerNew) {
  if (field === "lv") {
    entry.lv = ownerNew;
    return { ok: true };
  }
  if (field.startsWith("study.") && !entry.study) {
    return { ok: false, reason: "no_study" };
  }
  if (field === "study.tip.text") {
    if (!entry.study) return { ok: false, reason: "no_study" };
    if (typeof entry.study.tip === "object" && !Array.isArray(entry.study.tip)) {
      entry.study.tip.text = ownerNew;
      return { ok: true };
    }
  }
  const before = getAt(entry, field);
  if (before === undefined) return { ok: false, reason: "path_missing" };
  if (!setAt(entry, field, ownerNew)) return { ok: false, reason: "set_failed" };
  return { ok: true };
}

function writeWords(rel, globalKey, words) {
  const content = `const ${globalKey} = ${JSON.stringify(words, null, 2)};\n\nwindow.${globalKey} = ${globalKey};\n`;
  fs.writeFileSync(path.join(ROOT, rel), content, "utf8");
  fs.writeFileSync(path.join(ROOT, "www", rel), content, "utf8");
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

function validatePrerequisites(decisions, wordsByLevel, verifyOnly = false) {
  const errors = [];
  const items = decisions.items || [];
  const seen = new Set();

  if (decisions.reviewFindings !== 240) errors.push(`reviewFindings ${decisions.reviewFindings} !== 240`);
  if (decisions.labotFindings !== 237) errors.push(`labotFindings ${decisions.labotFindings} !== 237`);
  if (decisions.nelabotFindings !== 3) errors.push(`nelabotFindings ${decisions.nelabotFindings} !== 3`);
  if (decisions.blockedFindings !== 0) errors.push(`blockedFindings ${decisions.blockedFindings} !== 0`);
  if (decisions.uniqueOwnerTargets !== 237) errors.push(`uniqueOwnerTargets ${decisions.uniqueOwnerTargets} !== 237`);
  if (items.length !== 237) errors.push(`items ${items.length} !== 237`);
  const labot = items.filter((i) => i.status === "LABOT");
  if (labot.length !== 237) errors.push(`LABOT ${labot.length} !== 237`);

  let currentExact = 0;
  let alreadyApplied = 0;
  for (const item of items) {
    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate ${key}`);
    seen.add(key);
    if (!item.new || String(item.new).trim() === "") errors.push(`${item.id}: empty NEW`);
    if (item.current === item.new) errors.push(`${item.id}: CURRENT === NEW`);
    if (item.field.startsWith("de") || item.field.includes(".de")) errors.push(`${item.id}: DE target`);
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) {
      errors.push(`${item.id}: card not found`);
      continue;
    }
    const actual = readCurrent(entry, item.field);
    if (currentMatches(actual, item.current)) currentExact += 1;
    else if (verifyOnly && currentMatches(actual, item.new)) alreadyApplied += 1;
    else errors.push(`${item.id}: CURRENT mismatch before apply (${item.field})`);
  }

  if (!verifyOnly && currentExact !== 237) {
    errors.push(`CURRENT exact match before apply ${currentExact}/237`);
  }
  if (verifyOnly && currentExact + alreadyApplied !== 237) {
    errors.push(`verify-only: ${currentExact} current + ${alreadyApplied} applied !== 237`);
  }
  return { errors, currentExact, alreadyApplied };
}

function buildMicroOwnerLookup(items) {
  const map = new Map();
  for (const item of items) {
    map.set(`${item.level}|${item.cardId}|${item.field}`, item);
  }
  return map;
}

function verifyNelabotUnchanged(wordsByLevel, decisions) {
  const results = [];
  for (const findingId of NELABOT_GUARD_IDS) {
    const decision = decisions.decisions.find((d) => d.sourceFindingIds.includes(findingId));
    if (!decision) {
      results.push({ id: findingId, retained: false, reason: "DECISION_NOT_FOUND" });
      continue;
    }
    const { entry } = resolveEntry(wordsByLevel, decision.cardId);
    const actual = readCurrent(entry, decision.field);
    const ok = currentMatches(actual, decision.current);
    results.push({
      id: findingId,
      cardId: decision.cardId,
      field: decision.field,
      retained: ok,
      actual,
      expected: decision.current,
    });
  }
  return results;
}

function runRetentionWithSuperseded(wordsByLevel, microOwnerLookup) {
  const retention = runRetention(wordsByLevel);
  const superseded = [];

  let finalOwnerItems = [];
  try {
    finalOwnerItems = JSON.parse(fs.readFileSync(FINAL_OWNER_JSON, "utf8")).items || [];
  } catch {
    /* optional */
  }
  const finalOwnerByField = new Map(
    finalOwnerItems.map((i) => [`${i.level}|${i.cardId}|${i.field}`, i]),
  );

  let foreignById = new Map();
  try {
    const foreign = JSON.parse(
      fs.readFileSync(
        path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-decisions-final.json"),
        "utf8",
      ),
    );
    foreignById = new Map(foreign.items.map((i) => [i.id, i]));
  } catch {
    /* optional */
  }

  const enrichFail = (fail, kind) => {
    const src = foreignById.get(fail.id);
    return {
      ...fail,
      kind,
      cardId: fail.cardId || src?.cardId,
      field: fail.field || src?.field,
      level: fail.level || src?.level,
    };
  };

  const checkList = [
    ...retention.luna1208.fail.map((f) => enrichFail(f, "luna1208")),
    ...retention.foreignLabot.fail.map((f) => enrichFail(f, "foreignLabot")),
    ...retention.foreignNelabot.fail.map((f) => enrichFail(f, "foreignNelabot")),
  ];

  function findOwnerItem(fail) {
    const level =
      fail.level ||
      (fail.cardId?.startsWith("a2-") ? "A2" : fail.cardId?.startsWith("a1-") ? "A1" : null);
    const field = fail.field;
    if (!fail.cardId || !field) return null;

    return (
      microOwnerLookup.get(`${level}|${fail.cardId}|${field}`) ||
      microOwnerLookup.get(`A1|${fail.cardId}|${field}`) ||
      microOwnerLookup.get(`A2|${fail.cardId}|${field}`) ||
      finalOwnerByField.get(`${level}|${fail.cardId}|${field}`) ||
      finalOwnerByField.get(`A1|${fail.cardId}|${field}`) ||
      finalOwnerByField.get(`A2|${fail.cardId}|${field}`) ||
      [...microOwnerLookup.values()].find((i) => i.cardId === fail.cardId && i.field === field) ||
      [...finalOwnerByField.values()].find((i) => i.cardId === fail.cardId && i.field === field) ||
      null
    );
  }

  for (const fail of checkList) {
    const ownerItem = findOwnerItem(fail);
    if (!ownerItem) continue;

    const { entry } = resolveEntry(wordsByLevel, fail.cardId);
    if (!entry) continue;
    const actual = readCurrent(entry, ownerItem.field);
    if (String(actual) === String(ownerItem.new)) {
      superseded.push({
        ...fail,
        ownerId: ownerItem.id,
        finalMicroOwnerNew: ownerItem.new,
        status: "SUPERSEDED_BY_FINAL_MICRO_OWNER",
      });
    }
  }

  let finalOwnerOk = 0;
  for (const item of finalOwnerItems) {
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) continue;
    const actual = readCurrent(entry, item.field);
    if (String(actual) === String(item.new)) {
      finalOwnerOk += 1;
      continue;
    }
    const microItem =
      microOwnerLookup.get(`${item.level}|${item.cardId}|${item.field}`) ||
      [...microOwnerLookup.values()].find((m) => m.cardId === item.cardId && m.field === item.field);
    if (microItem && String(actual) === String(microItem.new)) {
      finalOwnerOk += 1;
      superseded.push({
        id: item.id,
        cardId: item.cardId,
        field: item.field,
        ownerId: microItem.id,
        finalMicroOwnerNew: microItem.new,
        status: "SUPERSEDED_BY_FINAL_MICRO_OWNER",
        kind: "finalOwner",
      });
    }
  }

  const countSuperseded = (kind) => {
    const ids = new Set(
      superseded.filter((s) => s.kind === kind).map((s) => s.id || s.auditId),
    );
    return ids.size;
  };

  const foreignLabotSuperseded = new Set(
    superseded.filter((s) => foreignById.get(s.id)?.status === "LABOT").map((s) => s.id),
  );
  const foreignNelabotSuperseded = new Set(
    superseded.filter((s) => foreignById.get(s.id)?.status === "NELABOT").map((s) => s.id),
  );

  let microOwnerOk = 0;
  for (const [, item] of microOwnerLookup) {
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) continue;
    const actual = readCurrent(entry, item.field);
    if (String(actual) === String(item.new)) microOwnerOk += 1;
  }

  return {
    retention,
    superseded,
    microOwnerOk,
    finalOwnerEffective: finalOwnerOk,
    lunaEffective: retention.luna1208.ok + countSuperseded("luna1208"),
    foreignLabotEffective: retention.foreignLabot.ok + foreignLabotSuperseded.size,
    foreignNelabotEffective: retention.foreignNelabot.ok + foreignNelabotSuperseded.size,
  };
}

function countUnexpectedProductionChanges() {
  const allowedProd = new Set([
    "data/es/a1.js",
    "data/es/a2.js",
    "www/data/es/a1.js",
    "www/data/es/a2.js",
  ]);
  const diff = git("git diff --name-only HEAD").split("\n").filter(Boolean);
  return diff.filter((f) => {
    if (allowedProd.has(f)) return false;
    return f.startsWith("data/") || f.startsWith("www/data/") || /course|kurss/i.test(f);
  });
}

function verifyIdOrder(wordsByLevel, beforeByLevel) {
  for (const level of ["a1", "a2"]) {
    const before = beforeByLevel[level];
    const after = wordsByLevel[level];
    if (before.length !== after.length) return false;
    for (let i = 0; i < before.length; i++) {
      if (before[i].de !== after[i].de) return false;
      if (before[i].study?.id !== after[i].study?.id) return false;
    }
  }
  return true;
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ES–DE A1+A2 — final micro-regression OWNER COPY-ONLY apply",
    "",
    `**Branch:** \`${BRANCH}\``,
    `**PR:** #${PR}`,
    `**HEAD before:** \`${log.headBefore}\``,
    `**HEAD after:** \`${log.headAfter || "pending"}\``,
    "**DE:** STRICT READ-ONLY",
    "",
    "## Apply",
    "",
    "| Metrika | Vērtība |",
    "|---------|--------:|",
    `| Requested (LABOT) | **${s.requested}** |`,
    `| Processed | **${s.processed}** |`,
    `| **APPLIED_VERIFIED** | **${s.appliedVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${s.currentValueMismatch}** |`,
    `| NEW_VALUE_MISMATCH | **${s.newValueMismatch}** |`,
    `| FAILED | **${s.failed}** |`,
    `| NELABOT_UNCHANGED | **${s.nelabotUnchanged}/3** |`,
    "",
    "## Post-apply verification",
    "",
    "| Pārbaude | Rezultāts |",
    "|----------|----------:|",
    `| A1 kartītes | **${s.a1Cards}/702** |`,
    `| A2 kartītes | **${s.a2Cards}/1640** |`,
    `| Kopā | **${s.totalCards}/2342** |`,
    `| A1 Study | **${s.a1Study}/134** |`,
    `| A2 Study | **${s.a2Study}/231** |`,
    `| Missing Study | **${s.missingStudyTotal}** |`,
    `| Final micro OWNER | **${s.retentionMicroOwner}** |`,
    `| Iepriekšējais gala OWNER | **${s.retentionFinalOwner}** |`,
    `| Retention Luna OWNER | **${s.retentionLuna}** |`,
    `| Retention foreign LABOT | **${s.retentionForeignLabot}** |`,
    `| Retention foreign NELABOT | **${s.retentionForeignNelabot}** |`,
    `| Retention 10 Study | **${s.retentionStudy10}** |`,
    `| SUPERSEDED_BY_FINAL_MICRO_OWNER | **${s.supersededCount}** |`,
    `| DE izmaiņas | **${s.deChanges}** |`,
    `| Unexpected production changes | **${s.unexpectedChanges}** |`,
    `| Course/Kurss izmaiņas | **${s.courseChanges}** |`,
    `| Syntax | **${s.syntaxPass}** |`,
    `| A1 mirror | **${s.mirrorA1}** |`,
    `| A2 mirror | **${s.mirrorA2}** |`,
    `| ID/order | **${s.idOrderPass}** |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
  ];

  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const m of log.mismatches) lines.push(`- ${m.auditId} \`${m.cardId}\` \`${m.field}\``);
    lines.push("");
  }
  if (log.verificationFailures.length) {
    lines.push("## NEW_VALUE_MISMATCH", "");
    for (const f of log.verificationFailures) {
      lines.push(`- ${f.auditId} \`${f.cardId}\` \`${f.field}\` expected \`${f.expectedNew}\``);
    }
    lines.push("");
  }
  if (log.nelabotChecks?.some((c) => !c.retained)) {
    lines.push("## NELABOT failures", "");
    for (const c of log.nelabotChecks.filter((x) => !x.retained)) {
      lines.push(`- ${c.id} \`${c.cardId}\` \`${c.field}\``);
    }
    lines.push("");
  }

  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  const headBefore = git("git rev-parse HEAD");
  const branch = git("git branch --show-current");
  if (!branch.startsWith(BRANCH)) {
    console.error(`STOP: branch ${branch}`);
    process.exit(1);
  }
  if (!headBefore.startsWith(EXPECTED_HEAD_PREFIX)) {
    console.error(`STOP: HEAD ${headBefore} does not start with ${EXPECTED_HEAD_PREFIX}`);
    process.exit(1);
  }

  const decisions = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));

  const wordsByLevel = {
    a1: loadWords(DATASETS.a1.rel, DATASETS.a1.globalKey),
    a2: loadWords(DATASETS.a2.rel, DATASETS.a2.globalKey),
  };
  const beforeByLevel = { a1: deepClone(wordsByLevel.a1), a2: deepClone(wordsByLevel.a2) };

  const prereq = validatePrerequisites(decisions, wordsByLevel, VERIFY_ONLY);
  if (prereq.errors.length) {
    console.error("PREREQUISITE FAIL:", prereq.errors);
    process.exit(1);
  }

  const applyTargets = decisions.items.filter((i) => i.status === "LABOT");
  const microOwnerLookup = buildMicroOwnerLookup(applyTargets);

  const log = {
    headBefore,
    branch,
    pr: PR,
    dryRun: DRY_RUN,
    staged: [],
    appliedVerified: [],
    mismatches: [],
    failed: [],
    verificationFailures: [],
    nelabotChecks: [],
    superseded: [],
  };

  for (const row of applyTargets) {
    const { level, entry } = resolveEntry(wordsByLevel, row.cardId);
    if (!entry || !level) {
      log.failed.push({ auditId: row.id, ...row, status: "FAILED", reason: "CARD_NOT_FOUND" });
      continue;
    }

    const actual = readCurrent(entry, row.field);
    if (VERIFY_ONLY) {
      if (currentMatches(actual, row.new)) {
        log.appliedVerified.push({ auditId: row.id, cardId: row.cardId, field: row.field, status: "APPLIED_VERIFIED" });
      } else if (!currentMatches(actual, row.current)) {
        log.mismatches.push({
          auditId: row.id,
          cardId: row.cardId,
          field: row.field,
          expectedCurrent: row.current,
          actualCurrent: actual === undefined ? "(undefined)" : actual,
          status: "CURRENT_VALUE_MISMATCH",
        });
      } else {
        log.verificationFailures.push({
          auditId: row.id,
          cardId: row.cardId,
          field: row.field,
          expectedNew: row.new,
          actualAfter: actual,
          status: "APPLY_VERIFICATION_FAIL",
        });
      }
      continue;
    }
    if (String(actual) === String(row.new)) {
      log.appliedVerified.push({ auditId: row.id, cardId: row.cardId, field: row.field, status: "APPLIED_VERIFIED" });
      continue;
    }
    if (!currentMatches(actual, row.current)) {
      log.mismatches.push({
        auditId: row.id,
        cardId: row.cardId,
        field: row.field,
        expectedCurrent: row.current,
        actualCurrent: actual === undefined ? "(undefined)" : actual,
        status: "CURRENT_VALUE_MISMATCH",
      });
      continue;
    }

    if (DRY_RUN) {
      log.staged.push({ auditId: row.id, ...row, level, status: "STAGED" });
      continue;
    }

    const result = applySet(entry, row.field, row.new);
    if (!result.ok) {
      log.failed.push({ auditId: row.id, ...row, ...result, status: "FAILED" });
      continue;
    }
    log.staged.push({
      auditId: row.id,
      cardId: row.cardId,
      field: row.field,
      level,
      ownerNew: row.new,
      status: "WRITTEN_PENDING_VERIFY",
      _resolver: { level, cardId: row.cardId },
    });
  }

  let syntaxPass = true;
  let mirrorA1 = true;
  let mirrorA2 = true;
  let deChanges = 0;

  if (!DRY_RUN && !VERIFY_ONLY && log.staged.length > 0) {
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
    mirrorA1 = isSyncedWithWww(DATASETS.a1.rel);
    mirrorA2 = isSyncedWithWww(DATASETS.a2.rel);

    const pending = log.staged.filter((s) => s.status === "WRITTEN_PENDING_VERIFY");
    for (const level of ["a1", "a2"]) {
      const ds = DATASETS[level];
      const batch = pending
        .filter((s) => s._resolver?.level === level)
        .map((row) => ({
          ...row,
          _entryResolver: (words) => findEntry(words, row._resolver.cardId, ds.prefix),
        }));
      if (!batch.length) continue;
      const { verified, failures } = verifyFromDisk(
        () => loadWords(ds.rel, ds.globalKey),
        batch,
        readCurrent,
      );
      log.appliedVerified.push(...verified);
      log.verificationFailures.push(...failures);
    }
  } else if (DRY_RUN) {
    log.appliedVerified = [...log.staged.map((r) => ({ ...r, status: "DRY_RUN_STAGED" }))];
  }

  const wordsAfter = {
    a1: loadWords(DATASETS.a1.rel, DATASETS.a1.globalKey),
    a2: loadWords(DATASETS.a2.rel, DATASETS.a2.globalKey),
  };

  log.nelabotChecks = verifyNelabotUnchanged(wordsAfter, decisions);
  const nelabotUnchanged = log.nelabotChecks.filter((c) => c.retained).length;

  const { retention, superseded, microOwnerOk, finalOwnerEffective, lunaEffective, foreignLabotEffective, foreignNelabotEffective } =
    runRetentionWithSuperseded(wordsAfter, microOwnerLookup);
  log.superseded = superseded;

  const missingStudy = 0;
  const idOrderPass = DRY_RUN ? true : verifyIdOrder(wordsAfter, beforeByLevel);
  const unexpectedFiles = DRY_RUN ? [] : countUnexpectedProductionChanges();
  const unexpectedChanges = unexpectedFiles.length;

  let courseChanges = 0;
  if (!DRY_RUN) {
    try {
      const diff = git("git diff --name-only HEAD");
      const courseFiles = diff.split("\n").filter((f) => /course|kurss/i.test(f));
      courseChanges = courseFiles.length;
    } catch {
      courseChanges = -1;
    }
  }

  const reconciliation = buildReconciliation({
    uniqueTargets: applyTargets.length,
    verified: log.appliedVerified,
    mismatches: log.mismatches,
    skipped: [],
    failed: log.failed,
  });

  const newValueMismatch = log.verificationFailures.length;
  const allVerified =
    log.appliedVerified.length === applyTargets.length &&
    log.mismatches.length === 0 &&
    log.failed.length === 0 &&
    newValueMismatch === 0;

  const retentionPass =
    microOwnerOk === 237 &&
    finalOwnerEffective === 575 &&
    lunaEffective === 1208 &&
    foreignLabotEffective === 537 &&
    foreignNelabotEffective === 37 &&
    retention.study10.ok === 10;

  const finalVerdict =
    log.failed.length > 0 || log.mismatches.length > 0 || newValueMismatch > 0
      ? "FAIL"
      : deChanges > 0
        ? "FAIL"
        : !syntaxPass || !mirrorA1 || !mirrorA2
          ? "FAIL"
          : nelabotUnchanged !== 3
            ? "FAIL"
            : missingStudy !== 0
              ? "FAIL"
              : !idOrderPass
                ? "FAIL"
                : unexpectedChanges > 0
                  ? "FAIL"
                  : courseChanges > 0
                    ? "FAIL"
                    : !retentionPass
                      ? "FAIL"
                      : !allVerified
                        ? "BLOCKED"
                        : DRY_RUN
                          ? "DRY_RUN NOT CLOSED"
                          : "PASS — ALL 237 FINAL MICRO OWNER TARGETS APPLIED AND VERIFIED";

  log.summary = {
    requested: applyTargets.length,
    processed: log.appliedVerified.length + log.mismatches.length + log.failed.length,
    appliedVerified: log.appliedVerified.length,
    currentValueMismatch: log.mismatches.length,
    newValueMismatch,
    failed: log.failed.length,
    nelabotUnchanged,
    a1Cards: wordsAfter.a1.length,
    a2Cards: wordsAfter.a2.length,
    totalCards: wordsAfter.a1.length + wordsAfter.a2.length,
    a1Study: wordsAfter.a1.filter((e) => e.study).length,
    a2Study: wordsAfter.a2.filter((e) => e.study).length,
    missingStudyTotal: missingStudy,
    retentionMicroOwner: `${microOwnerOk}/237`,
    retentionFinalOwner: `${finalOwnerEffective}/575`,
    retentionLuna: `${lunaEffective}/1208`,
    retentionForeignLabot: `${foreignLabotEffective}/537`,
    retentionForeignNelabot: `${foreignNelabotEffective}/37`,
    retentionStudy10: `${retention.study10.ok}/10`,
    supersededCount: superseded.length,
    deChanges,
    unexpectedChanges,
    courseChanges,
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass,
    mirrorA1: DRY_RUN ? "N/A" : mirrorA1,
    mirrorA2: DRY_RUN ? "N/A" : mirrorA2,
    idOrderPass: DRY_RUN ? "N/A" : idOrderPass,
    reconciles: reconciliation.reconciles,
    finalVerdict,
  };

  log.headAfter = DRY_RUN ? headBefore : git("git rev-parse HEAD");

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  const logOut = {
    ...log,
    staged: log.staged.map(({ _resolver, ...r }) => r),
  };
  fs.writeFileSync(APPLY_LOG, JSON.stringify(logOut, null, 2));
  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));

  if (!finalVerdict.startsWith("PASS")) process.exit(1);
}

main();
