#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 final targeted 7 OWNER COPY-ONLY apply.
 * Usage: node scripts/apply-es-a1-a2-final-targeted-7-owner-repair.js [--dry-run] [--verify-only]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getAt, setAt } = require("./lib/da-a1-owner-path");
const { verifyFromDisk, buildReconciliation } = require("./lib/repair-apply-safety");
const { runRetention, loadWords, resolveEntry, readCurrent } = require("./lib/es-a1-a2-final-regression-retention");
const { accentFragmentsInNew } = require("./lib/es-a1-a2-final-targeted-7-owner-map");

const DECISIONS_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-targeted-7-owner-decisions.json");
const MICRO_OWNER_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-micro-regression-owner-decisions.json");
const FINAL_OWNER_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-regression-owner-decisions.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-a1-a2-final-targeted-7-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-de-a1-a2-final-targeted-7-owner-repair-apply.md");
const DRY_RUN = process.argv.includes("--dry-run");
const VERIFY_ONLY = process.argv.includes("--verify-only");
const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";
const EXPECTED_HEAD_PREFIX = "2c003ff7";

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
  return JSON.stringify(actual ?? "") === JSON.stringify(expected ?? "");
}

function applySet(entry, field, ownerNew) {
  if (field === "lv") {
    entry.lv = ownerNew;
    return { ok: true };
  }
  if (field.startsWith("study.") && !entry.study) return { ok: false, reason: "no_study" };
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

function buildTargetedLookup(items) {
  const map = new Map();
  for (const item of items) map.set(`${item.level}|${item.cardId}|${item.field}`, item);
  return map;
}

function runRetentionWithSuperseded(wordsByLevel, targetedLookup, microOwnerLookup) {
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

  function findOwnerItem(fail) {
    const level =
      fail.level ||
      (fail.cardId?.startsWith("a2-") ? "A2" : fail.cardId?.startsWith("a1-") ? "A1" : null);
    const field = fail.field;
    if (!fail.cardId || !field) return null;

    return (
      targetedLookup.get(`${level}|${fail.cardId}|${field}`) ||
      targetedLookup.get(`A1|${fail.cardId}|${field}`) ||
      targetedLookup.get(`A2|${fail.cardId}|${field}`) ||
      microOwnerLookup.get(`${level}|${fail.cardId}|${field}`) ||
      microOwnerLookup.get(`A1|${fail.cardId}|${field}`) ||
      microOwnerLookup.get(`A2|${fail.cardId}|${field}`) ||
      finalOwnerByField.get(`${level}|${fail.cardId}|${field}`) ||
      finalOwnerByField.get(`A1|${fail.cardId}|${field}`) ||
      finalOwnerByField.get(`A2|${fail.cardId}|${field}`) ||
      [...targetedLookup.values()].find((i) => i.cardId === fail.cardId && i.field === field) ||
      [...microOwnerLookup.values()].find((i) => i.cardId === fail.cardId && i.field === field) ||
      [...finalOwnerByField.values()].find((i) => i.cardId === fail.cardId && i.field === field) ||
      null
    );
  }

  const checkList = [
    ...retention.luna1208.fail.map((f) => enrichFail(f, "luna1208")),
    ...retention.foreignLabot.fail.map((f) => enrichFail(f, "foreignLabot")),
    ...retention.foreignNelabot.fail.map((f) => enrichFail(f, "foreignNelabot")),
  ];

  for (const fail of checkList) {
    const ownerItem = findOwnerItem(fail);
    if (!ownerItem) continue;

    const { entry } = resolveEntry(wordsByLevel, fail.cardId);
    if (!entry) continue;
    const actual = readCurrent(entry, ownerItem.field);
    if (String(actual) === String(ownerItem.new)) {
      const isTargeted = [...targetedLookup.values()].some(
        (t) => t.id === ownerItem.id || (t.cardId === ownerItem.cardId && t.field === ownerItem.field),
      );
      superseded.push({
        ...fail,
        ownerId: ownerItem.id,
        ownerNew: ownerItem.new,
        status: isTargeted ? "SUPERSEDED_BY_TARGETED7_OWNER" : "SUPERSEDED_BY_FINAL_MICRO_OWNER",
        kind: fail.kind,
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
    const targeted =
      targetedLookup.get(`${item.level}|${item.cardId}|${item.field}`) ||
      [...targetedLookup.values()].find((t) => t.cardId === item.cardId && t.field === item.field);
    if (targeted && String(actual) === String(targeted.new)) {
      finalOwnerOk += 1;
      superseded.push({
        id: item.id,
        cardId: item.cardId,
        field: item.field,
        ownerId: targeted.id,
        status: "SUPERSEDED_BY_TARGETED7_OWNER",
        kind: "finalOwner",
      });
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
        status: "SUPERSEDED_BY_FINAL_MICRO_OWNER",
        kind: "finalOwner",
      });
    }
  }

  const countSuperseded = (kind) =>
    new Set(superseded.filter((s) => s.kind === kind).map((s) => s.id || s.auditId)).size;

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
    if (String(actual) === String(item.new)) {
      microOwnerOk += 1;
      continue;
    }
    const targeted =
      targetedLookup.get(`${item.level}|${item.cardId}|${item.field}`) ||
      [...targetedLookup.values()].find((t) => t.cardId === item.cardId && t.field === item.field);
    if (targeted && String(actual) === String(targeted.new)) {
      microOwnerOk += 1;
      superseded.push({
        id: item.id,
        cardId: item.cardId,
        field: item.field,
        ownerId: targeted.id,
        status: "SUPERSEDED_BY_TARGETED7_OWNER",
        kind: "microOwner",
      });
    }
  }

  let targeted7Ok = 0;
  for (const [, item] of targetedLookup) {
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) continue;
    const actual = readCurrent(entry, item.field);
    if (String(actual) === String(item.new)) targeted7Ok += 1;
  }

  return {
    retention,
    superseded,
    microOwnerOk,
    finalOwnerEffective: finalOwnerOk,
    targeted7Ok,
    lunaEffective: retention.luna1208.ok + countSuperseded("luna1208"),
    foreignLabotEffective: retention.foreignLabot.ok + foreignLabotSuperseded.size,
    foreignNelabotEffective: retention.foreignNelabot.ok + foreignNelabotSuperseded.size,
  };
}

function countUnexpectedProductionChanges() {
  const allowed = new Set([
    "data/es/a1.js",
    "data/es/a2.js",
    "www/data/es/a1.js",
    "www/data/es/a2.js",
  ]);
  return git("git diff --name-only HEAD")
    .split("\n")
    .filter(Boolean)
    .filter((f) => {
      if (allowed.has(f)) return false;
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

function validatePrerequisites(decisions, wordsByLevel) {
  const errors = [];
  const items = decisions.items || [];
  const seen = new Set();
  let currentExact = 0;
  let alreadyApplied = 0;

  if (items.length !== 13) errors.push(`items ${items.length} !== 13`);

  for (const item of items) {
    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate ${key}`);
    seen.add(key);
    if (item.field.startsWith("de") || item.field.includes(".de")) errors.push(`${item.id}: DE target`);

    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) {
      errors.push(`${item.id}: card not found`);
      continue;
    }
    const actual = readCurrent(entry, item.field);
    if (currentMatches(actual, item.current)) currentExact += 1;
    else if (VERIFY_ONLY && currentMatches(actual, item.new)) alreadyApplied += 1;
    else if (!VERIFY_ONLY) errors.push(`${item.id}: CURRENT mismatch (${item.field})`);

    if (item.kind === "accent" && item.linkedNew) {
      if (!accentFragmentsInNew(item.new, item.linkedNew)) {
        errors.push(`${item.id}: accent not in linked NEW`);
      }
    }
  }

  if (!VERIFY_ONLY && currentExact !== 13) errors.push(`CURRENT exact ${currentExact}/13`);
  if (VERIFY_ONLY && currentExact + alreadyApplied !== 13) {
    errors.push(`verify-only ${currentExact}+${alreadyApplied} !== 13`);
  }
  return { errors, currentExact, alreadyApplied };
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ES–DE A1+A2 — final targeted 7 OWNER COPY-ONLY apply",
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
    `| Requested | **${s.requested}** |`,
    `| **APPLIED_VERIFIED** | **${s.appliedVerified}** |`,
    `| Linguistic fields verified | **${s.linguisticVerified}** |`,
    `| Dependent accents verified | **${s.accentVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${s.currentValueMismatch}** |`,
    `| NEW_VALUE_MISMATCH | **${s.newValueMismatch}** |`,
    `| FAILED | **${s.failed}** |`,
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
    `| Final micro OWNER | **${s.retentionMicroOwner}** |`,
    `| Iepriekšējais gala OWNER | **${s.retentionFinalOwner}** |`,
    `| Luna OWNER | **${s.retentionLuna}** |`,
    `| Foreign LABOT | **${s.retentionForeignLabot}** |`,
    `| Foreign NELABOT | **${s.retentionForeignNelabot}** |`,
    `| Jaunās Study | **${s.retentionStudy10}** |`,
    `| Targeted 7 retention | **${s.retentionTargeted7}** |`,
    `| SUPERSEDED_BY_TARGETED7 | **${s.supersededCount}** |`,
    `| DE izmaiņas | **${s.deChanges}** |`,
    `| Unexpected production changes | **${s.unexpectedChanges}** |`,
    `| Course/Kurss izmaiņas | **${s.courseChanges}** |`,
    `| Syntax | **${s.syntaxPass}** |`,
    `| Mirror | **${s.mirrorPass}** |`,
    `| ID/order | **${s.idOrderPass}** |`,
    "",
    "## 13 target apply table",
    "",
    "| # | ID | Card | Field | CURRENT → NEW | Status |",
    "|--:|----|------|-------|---------------|--------|",
  ];

  for (let i = 0; i < (log.applyTable || []).length; i++) {
    const r = log.applyTable[i];
    lines.push(
      `| ${i + 1} | \`${r.id}\` | \`${r.cardId}\` | \`${r.field}\` | \`${r.current}\` → \`${r.new}\` | ${r.status} |`,
    );
  }

  lines.push("", `## FINAL VERDICT: **${s.finalVerdict}**`, "");
  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  const headBefore = git("git rev-parse HEAD");
  const branch = git("git branch --show-current");
  if (!branch.startsWith(BRANCH)) {
    console.error(`STOP: branch ${branch}`);
    process.exit(1);
  }
  if (!headBefore.startsWith(EXPECTED_HEAD_PREFIX) && !VERIFY_ONLY) {
    console.warn(`Note: HEAD ${headBefore} expected prefix ${EXPECTED_HEAD_PREFIX}`);
  }

  const decisions = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const wordsByLevel = {
    a1: loadWords(DATASETS.a1.rel, DATASETS.a1.globalKey),
    a2: loadWords(DATASETS.a2.rel, DATASETS.a2.globalKey),
  };
  const beforeByLevel = { a1: deepClone(wordsByLevel.a1), a2: deepClone(wordsByLevel.a2) };

  const prereq = validatePrerequisites(decisions, wordsByLevel);
  if (prereq.errors.length) {
    console.error("PREREQUISITE FAIL:", prereq.errors);
    process.exit(1);
  }

  const applyTargets = decisions.items.filter((i) => i.status === "LABOT");
  const targetedLookup = buildTargetedLookup(applyTargets);

  let microItems = [];
  try {
    microItems = JSON.parse(fs.readFileSync(MICRO_OWNER_JSON, "utf8")).items || [];
  } catch {
    /* optional */
  }
  const microOwnerLookup = buildTargetedLookup(microItems.filter((i) => i.status === "LABOT"));

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
    applyTable: [],
  };

  for (const row of applyTargets) {
    const { level, entry } = resolveEntry(wordsByLevel, row.cardId);
    const rowStatus = { id: row.id, cardId: row.cardId, field: row.field, current: row.current, new: row.new, status: "PENDING" };

    if (!entry || !level) {
      log.failed.push({ auditId: row.id, ...row, status: "FAILED", reason: "CARD_NOT_FOUND" });
      rowStatus.status = "FAILED";
      log.applyTable.push(rowStatus);
      continue;
    }

    const actual = readCurrent(entry, row.field);
    if (VERIFY_ONLY) {
      if (currentMatches(actual, row.new)) {
        log.appliedVerified.push({ auditId: row.id, cardId: row.cardId, field: row.field, status: "APPLIED_VERIFIED" });
        rowStatus.status = "APPLIED_VERIFIED";
      } else if (!currentMatches(actual, row.current)) {
        log.mismatches.push({ auditId: row.id, cardId: row.cardId, field: row.field, status: "CURRENT_VALUE_MISMATCH" });
        rowStatus.status = "CURRENT_VALUE_MISMATCH";
      } else {
        log.verificationFailures.push({ auditId: row.id, cardId: row.cardId, field: row.field, expectedNew: row.new });
        rowStatus.status = "NEW_VALUE_MISMATCH";
      }
      log.applyTable.push(rowStatus);
      continue;
    }

    if (currentMatches(actual, row.new)) {
      log.appliedVerified.push({ auditId: row.id, cardId: row.cardId, field: row.field, status: "APPLIED_VERIFIED" });
      rowStatus.status = "APPLIED_VERIFIED";
      log.applyTable.push(rowStatus);
      continue;
    }
    if (!currentMatches(actual, row.current)) {
      log.mismatches.push({ auditId: row.id, cardId: row.cardId, field: row.field, status: "CURRENT_VALUE_MISMATCH" });
      rowStatus.status = "CURRENT_VALUE_MISMATCH";
      log.applyTable.push(rowStatus);
      continue;
    }

    if (DRY_RUN) {
      log.staged.push({ auditId: row.id, ...row, level, status: "STAGED" });
      rowStatus.status = "STAGED";
      log.applyTable.push(rowStatus);
      continue;
    }

    const result = applySet(entry, row.field, row.new);
    if (!result.ok) {
      log.failed.push({ auditId: row.id, ...row, ...result, status: "FAILED" });
      rowStatus.status = "FAILED";
      log.applyTable.push(rowStatus);
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
    rowStatus.status = "WRITTEN";
    log.applyTable.push(rowStatus);
  }

  let syntaxPass = true;
  let mirrorPass = true;
  let deChanges = 0;

  if (!DRY_RUN && !VERIFY_ONLY && log.staged.some((s) => s.status === "WRITTEN_PENDING_VERIFY")) {
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
      const { verified, failures } = verifyFromDisk(() => loadWords(ds.rel, ds.globalKey), batch, readCurrent);
      log.appliedVerified.push(...verified);
      log.verificationFailures.push(...failures);
      for (const v of verified) {
        const t = log.applyTable.find((r) => r.id === v.auditId);
        if (t) t.status = "APPLIED_VERIFIED";
      }
    }
  }

  const wordsAfter = {
    a1: loadWords(DATASETS.a1.rel, DATASETS.a1.globalKey),
    a2: loadWords(DATASETS.a2.rel, DATASETS.a2.globalKey),
  };

  const { retention, superseded, microOwnerOk, finalOwnerEffective, targeted7Ok, lunaEffective, foreignLabotEffective, foreignNelabotEffective } =
    runRetentionWithSuperseded(wordsAfter, targetedLookup, microOwnerLookup);

  const linguisticVerified = applyTargets.filter((t) => t.kind === "linguistic").filter((t) => {
    const { entry } = resolveEntry(wordsAfter, t.cardId);
    return String(readCurrent(entry, t.field)) === String(t.new);
  }).length;

  const accentVerified = applyTargets.filter((t) => t.kind === "accent").filter((t) => {
    const { entry } = resolveEntry(wordsAfter, t.cardId);
    return JSON.stringify(readCurrent(entry, t.field)) === JSON.stringify(t.new);
  }).length;

  const idOrderPass = DRY_RUN ? true : verifyIdOrder(wordsAfter, beforeByLevel);
  const unexpectedFiles = DRY_RUN ? [] : countUnexpectedProductionChanges();
  let courseChanges = 0;
  if (!DRY_RUN) {
    try {
      courseChanges = git("git diff --name-only HEAD").split("\n").filter((f) => /course|kurss/i.test(f)).length;
    } catch {
      courseChanges = -1;
    }
  }

  const retentionPass =
    microOwnerOk === 237 &&
    finalOwnerEffective === 575 &&
    lunaEffective === 1208 &&
    foreignLabotEffective === 537 &&
    foreignNelabotEffective === 37 &&
    retention.study10.ok === 10 &&
    targeted7Ok === 13;

  const allVerified =
    log.appliedVerified.length === applyTargets.length &&
    log.mismatches.length === 0 &&
    log.failed.length === 0 &&
    log.verificationFailures.length === 0;

  const finalVerdict =
    log.failed.length > 0 || log.mismatches.length > 0 || log.verificationFailures.length > 0
      ? "FAIL"
      : deChanges > 0
        ? "FAIL"
        : !syntaxPass || !mirrorPass
          ? "FAIL"
          : !idOrderPass
            ? "FAIL"
            : unexpectedFiles.length > 0
              ? "FAIL"
              : courseChanges > 0
                ? "FAIL"
                : !retentionPass
                  ? "FAIL"
                  : !allVerified
                    ? "BLOCKED"
                    : DRY_RUN
                      ? "DRY_RUN NOT CLOSED"
                      : "PASS — ALL 13 TARGETED7 OWNER TARGETS APPLIED AND VERIFIED";

  log.summary = {
    requested: applyTargets.length,
    appliedVerified: log.appliedVerified.length,
    linguisticVerified: `${linguisticVerified}/7`,
    accentVerified: `${accentVerified}/6`,
    currentValueMismatch: log.mismatches.length,
    newValueMismatch: log.verificationFailures.length,
    failed: log.failed.length,
    a1Cards: wordsAfter.a1.length,
    a2Cards: wordsAfter.a2.length,
    totalCards: wordsAfter.a1.length + wordsAfter.a2.length,
    a1Study: wordsAfter.a1.filter((e) => e.study).length,
    a2Study: wordsAfter.a2.filter((e) => e.study).length,
    retentionMicroOwner: `${microOwnerOk}/237`,
    retentionFinalOwner: `${finalOwnerEffective}/575`,
    retentionLuna: `${lunaEffective}/1208`,
    retentionForeignLabot: `${foreignLabotEffective}/537`,
    retentionForeignNelabot: `${foreignNelabotEffective}/37`,
    retentionStudy10: `${retention.study10.ok}/10`,
    retentionTargeted7: `${targeted7Ok}/13`,
    supersededCount: superseded.length,
    deChanges,
    unexpectedChanges: unexpectedFiles.length,
    courseChanges,
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass,
    mirrorPass: DRY_RUN ? "N/A" : mirrorPass,
    idOrderPass: DRY_RUN ? "N/A" : idOrderPass,
    finalVerdict,
  };

  log.headAfter = DRY_RUN ? headBefore : git("git rev-parse HEAD");
  log.superseded = superseded;

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify({ ...log, staged: log.staged.map(({ _resolver, ...r }) => r) }, null, 2));
  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));

  if (!finalVerdict.startsWith("PASS")) process.exit(1);
}

main();
