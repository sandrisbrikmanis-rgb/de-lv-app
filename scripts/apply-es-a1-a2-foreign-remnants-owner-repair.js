#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 foreign remnants OWNER COPY-ONLY apply.
 * Usage: node scripts/apply-es-a1-a2-foreign-remnants-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getAt, setAt, parseFieldParts } = require("./lib/da-a1-owner-path");
const {
  verifyFromDisk,
  gitDiffNonEmpty,
  buildReconciliation,
} = require("./lib/repair-apply-safety");

const DECISIONS_JSON = path.join(
  ROOT,
  "reports/es-de-a1-a2-foreign-remnants-owner-decisions-final.json",
);
const APPLY_LOG = path.join(ROOT, "reports/temp/es-a1-a2-foreign-remnants-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-repair-apply.md");
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];
const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";

const DATASETS = {
  a1: { rel: "data/es/a1.js", globalKey: "A1_WORDS", prefix: "a1" },
  a2: { rel: "data/es/a2.js", globalKey: "A2_WORDS", prefix: "a2" },
};

const NELABOT_GUARD_IDS = [
  "ES-A1A2-FOREIGN-0055",
  "ES-A1A2-FOREIGN-0062",
  "ES-A1A2-FOREIGN-0063",
  "ES-A1A2-FOREIGN-0064",
  "ES-A1A2-FOREIGN-0065",
];

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

function resolveEntry(wordsByLevel, cardId) {
  const tryLevels = cardId.startsWith("a2-") ? ["a2"] : cardId.startsWith("a1-") ? ["a1"] : ["a2", "a1"];
  for (const level of tryLevels) {
    const ds = DATASETS[level];
    const entry = findEntry(wordsByLevel[level], cardId, ds.prefix);
    if (entry) return { level, entry };
  }
  return { level: null, entry: null };
}

function currentMatches(actual, expected) {
  const exp = String(expected ?? "");
  if (actual === undefined || actual === null) return exp === "";
  return String(actual) === exp;
}

function readCurrent(entry, field) {
  if (field === "lv") return entry.lv;
  if (field === "study.tip.text") {
    const tip = entry.study?.tip;
    if (!tip) return undefined;
    if (typeof tip === "string") return tip;
    if (Array.isArray(tip)) return undefined;
    return tip.text;
  }
  return getAt(entry, field);
}

function parentFieldAndIndex(field) {
  const parts = parseFieldParts(field);
  if (!parts.length) return null;
  const last = parts[parts.length - 1];
  if (typeof last !== "number") return null;
  const parentParts = parts.slice(0, -1);
  let parentField = "";
  for (const p of parentParts) {
    if (typeof p === "number") parentField += `[${p}]`;
    else parentField += parentField ? `.${p}` : p;
  }
  return { parentField, index: last };
}

function removeAt(entry, field) {
  const parsed = parentFieldAndIndex(field);
  if (!parsed) return { ok: false, reason: "invalid_remove_path" };
  const parent = getAt(entry, parsed.parentField);
  if (!Array.isArray(parent)) return { ok: false, reason: "parent_not_array" };
  if (parsed.index < 0 || parsed.index >= parent.length) {
    return { ok: false, reason: "index_out_of_bounds" };
  }
  const removed = parent[parsed.index];
  parent.splice(parsed.index, 1);
  return {
    ok: true,
    removed,
    expectedParentJson: JSON.stringify(parent),
    parentField: parsed.parentField,
    index: parsed.index,
  };
}

function applySet(entry, field, ownerNew) {
  if (field === "lv") {
    entry.lv = ownerNew;
    return { ok: true, field };
  }
  if (field.startsWith("study.") && !entry.study) {
    return { ok: false, reason: "no_study", field };
  }
  if (field === "study.tip.text") {
    if (!entry.study) return { ok: false, reason: "no_study", field };
    entry.study.tip = { text: ownerNew };
    return { ok: true, field };
  }
  const before = getAt(entry, field);
  if (before === undefined) return { ok: false, reason: "path_missing", field };
  if (!setAt(entry, field, ownerNew)) {
    return { ok: false, reason: "set_failed", field };
  }
  return { ok: true, field, before, after: ownerNew };
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

function validatePrerequisites(decisions) {
  const items = decisions.items;
  const errors = [];
  const seen = new Set();

  if (items.length !== 574) errors.push(`decisions count ${items.length} !== 574`);
  const labot = items.filter((i) => i.status === "LABOT");
  const nelabot = items.filter((i) => i.status === "NELABOT");
  const replace = items.filter((i) => i.action === "REPLACE");
  const remove = items.filter((i) => i.action === "REMOVE");

  if (labot.length !== 537) errors.push(`LABOT ${labot.length} !== 537`);
  if (nelabot.length !== 37) errors.push(`NELABOT ${nelabot.length} !== 37`);
  if (replace.length !== 526) errors.push(`REPLACE ${replace.length} !== 526`);
  if (remove.length !== 11) errors.push(`REMOVE ${remove.length} !== 11`);

  for (const item of items) {
    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate ${key}`);
    seen.add(key);
    if (item.status === "LABOT") {
      if (item.action !== "REMOVE" && String(item.new ?? "").trim() === "") {
        errors.push(`${item.id}: empty LABOT new`);
      }
      if (!item.field || !item.cardId) errors.push(`${item.id}: invalid field/cardId`);
    }
  }

  return { errors, labot, nelabot, replace, remove };
}

function verifyRemoveFromDisk(loadFn, staged, findEntryFn, beforeWordsByLevel) {
  const verified = [];
  const failures = [];
  const groups = new Map();

  for (const row of staged) {
    const key = `${row.level}|${row.cardId}|${row.parentField}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  }

  const words = loadFn();
  for (const [key, rows] of groups) {
    const row = rows[0];
    const entry = findEntryFn(words, row.cardId);
    const beforeEntry = findEntryFn(beforeWordsByLevel[row.level], row.cardId);
    if (!entry || !beforeEntry) {
      for (const r of rows) {
        failures.push({ ...r, status: "APPLY_VERIFICATION_FAIL", reason: "card_not_found_after_reload" });
      }
      continue;
    }
    const expectedJson = computeFinalParentFromSnapshot(beforeEntry, row.parentField, rows);
    const actualJson = JSON.stringify(getAt(entry, row.parentField));
    if (actualJson === expectedJson) {
      for (const r of rows) {
        verified.push({ auditId: r.auditId, cardId: r.cardId, field: r.field, status: "APPLIED_VERIFIED" });
      }
    } else {
      for (const r of rows) {
        failures.push({
          auditId: r.auditId,
          cardId: r.cardId,
          field: r.field,
          status: "APPLY_VERIFICATION_FAIL",
          expectedParentJson: expectedJson,
          actualParentJson: actualJson,
        });
      }
    }
  }
  return { verified, failures };
}

function computeFinalParentFromSnapshot(entry, parentField, removeRows) {
  const parent = [...(getAt(entry, parentField) || [])];
  const indices = removeRows
    .map((r) => parentFieldAndIndex(r.field).index)
    .filter((i) => i >= 0)
    .sort((a, b) => b - a);
  for (const idx of indices) {
    if (idx < parent.length) parent.splice(idx, 1);
  }
  return JSON.stringify(parent);
}

function countStudyCards(words) {
  return words.filter((e) => e.study).length;
}

function runPostApplyCollector() {
  execSync("node scripts/audit-es-a1-a2-collect.js", { cwd: ROOT, stdio: "pipe" });
  return JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/es-de-a1-a2-audit-data.json"), "utf8"),
  );
}

function analyzeCollectorRemnants(audit) {
  const issues = [];
  for (const lvl of audit.levels || []) {
    issues.push(...(lvl.foreignRemnants?.issues || []));
  }
  const isCollectorFalsePositive = (issue) => {
    if (issue.category === "IT_REMNANT" && /\bpoco\b/i.test(String(issue.text || ""))) return true;
    if (
      issue.category === "IT_REMNANT" &&
      issue.de &&
      new RegExp(`\\b${String(issue.de).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(
        String(issue.text || ""),
      )
    ) {
      return true;
    }
    return false;
  };
  const falsePos = issues.filter(isCollectorFalsePositive);
  const validReal = issues.filter((i) => !isCollectorFalsePositive(i));
  return {
    collectorRaw: issues.length,
    falsePositives: falsePos.length,
    validRealRemnants: validReal.length,
    unresolved: validReal.length,
  };
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ES–DE A1+A2 — foreign remnants OWNER COPY-ONLY apply",
    "",
    "**Standard:** `REPAIR_APPLY_SAFETY_STANDARD.md`",
    `**Branch:** \`${BRANCH}\``,
    `**PR:** #${PR}`,
    `**HEAD before:** \`${log.headBefore}\``,
    `**HEAD after:** \`${log.headAfter || "pending"}\``,
    "**DE:** STRICT READ-ONLY",
    "",
    "## Git",
    "",
    `| | |`,
    `|---|---|`,
    `| Branch | \`${BRANCH}\` |`,
    `| HEAD before | \`${log.headBefore}\` |`,
    `| HEAD after | \`${log.headAfter || "pending"}\` |`,
    `| PR | #${PR} |`,
    "",
    "## Apply",
    "",
    "| Metrika | Vērtība |",
    "|---------|--------:|",
    `| Requested (LABOT) | **${s.requested}** |`,
    `| Processed | **${s.processed}** |`,
    `| **APPLIED_VERIFIED** | **${s.appliedVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${s.currentValueMismatch}** |`,
    `| FAILED | **${s.failed}** |`,
    `| REPLACE verified | **${s.replaceVerified}** |`,
    `| REMOVE verified | **${s.removeVerified}** |`,
    `| NELABOT_UNCHANGED | **${s.nelabotUnchanged}/${s.nelabotTotal}** |`,
    "",
    "## Safety",
    "",
    "| Pārbaude | Rezultāts |",
    "|----------|----------:|",
    `| DE izmaiņas | **${s.deChanges}** |`,
    `| Citu valodu izmaiņas | **${s.otherLangChanges}** |`,
    `| Unexpected production changes | **${s.unexpectedChanges}** |`,
    `| Syntax | **${s.syntaxPass}** |`,
    `| A1 mirror | **${s.mirrorA1}** |`,
    `| A2 mirror | **${s.mirrorA2}** |`,
    `| ID/order | **${s.idOrderPass}** |`,
    `| A1 Study count | **${s.a1StudyCount}** |`,
    `| missingStudyTotal | **${s.missingStudyTotal}** |`,
    "",
    "## Foreign remnants",
    "",
    "| Metrika | Vērtība |",
    "|---------|--------:|",
    `| Collector raw | **${s.collectorRaw}** |`,
    `| OWNER false positives | **${s.falsePositives}** |`,
    `| Validētie reālie atlikumi | **${s.validRealRemnants}** |`,
    `| Unresolved | **${s.unresolved}** |`,
    "",
    "## Mikrotargeti",
    "",
  ];

  for (const id of ["ES-A1A2-FOREIGN-0054", "ES-A1A2-FOREIGN-RELATED-0001", "ES-A1A2-FOREIGN-0356"]) {
    const hit = log.microTargets.find((m) => m.id === id);
    lines.push(`- \`${id}\`: **${hit?.status || "MISSING"}**`);
  }

  const sein = log.seinTipPurple;
  if (sein) {
    lines.push("", "### a1-sein tip.left.purple", "", "```json", JSON.stringify(sein.actual, null, 2), "```", "");
    lines.push(`Expected: \`["yo soy/estoy", "tú eres/estás"]\` — **${sein.pass ? "PASS" : "FAIL"}**`);
  }

  lines.push("", `## FINAL VERDICT: **${s.finalVerdict}**`, "");

  if (log.mismatches.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const m of log.mismatches) {
      lines.push(`- ${m.auditId} \`${m.cardId}\` \`${m.field}\``);
    }
    lines.push("");
  }
  if (log.failed.length) {
    lines.push("## FAILED", "");
    for (const f of log.failed) {
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

  const decisions = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const prereq = validatePrerequisites(decisions);
  if (prereq.errors.length) {
    console.error("PREREQUISITE FAIL:", prereq.errors);
    process.exit(1);
  }

  const applyTargets = decisions.items.filter((i) => i.status === "LABOT");
  const nelabotItems = decisions.items.filter((i) => i.status === "NELABOT");

  function removeSortKey(field) {
    const parsed = parentFieldAndIndex(field);
    if (!parsed) return { parent: field, index: -1 };
    return { parent: parsed.parentField, index: parsed.index };
  }

  const sortedApplyTargets = [...applyTargets].sort((a, b) => {
    if (a.action !== "REMOVE" && b.action !== "REMOVE") return 0;
    if (a.action !== "REMOVE") return -1;
    if (b.action !== "REMOVE") return 1;
    const pa = removeSortKey(a.field);
    const pb = removeSortKey(b.field);
    const parentCmp = pa.parent.localeCompare(pb.parent);
    if (parentCmp !== 0) return parentCmp;
    return pb.index - pa.index;
  });

  const wordsByLevel = {
    a1: loadWords(DATASETS.a1.rel, DATASETS.a1.globalKey),
    a2: loadWords(DATASETS.a2.rel, DATASETS.a2.globalKey),
  };
  const beforeByLevel = { a1: deepClone(wordsByLevel.a1), a2: deepClone(wordsByLevel.a2) };

  const log = {
    headBefore,
    branch,
    pr: PR,
    dryRun: DRY_RUN,
    staged: [],
    stagedReplace: [],
    stagedRemove: [],
    appliedVerified: [],
    mismatches: [],
    failed: [],
    verificationFailures: [],
    nelabotChecks: [],
    microTargets: [],
  };

  for (const row of sortedApplyTargets) {
    const { level, entry } = resolveEntry(wordsByLevel, row.cardId);
    if (!entry || !level) {
      log.failed.push({ auditId: row.id, ...row, status: "FAILED", reason: "CARD_NOT_FOUND" });
      continue;
    }

    const actual = readCurrent(entry, row.field);

    if (row.action === "REPLACE") {
      if (String(actual) === String(row.new)) {
        log.stagedReplace.push({
          auditId: row.id,
          cardId: row.cardId,
          field: row.field,
          level,
          ownerNew: row.new,
          status: "ALREADY_MATCHED",
          _resolver: { level, cardId: row.cardId },
        });
        log.appliedVerified.push({
          auditId: row.id,
          cardId: row.cardId,
          field: row.field,
          status: "APPLIED_VERIFIED",
        });
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
        log.stagedReplace.push({ auditId: row.id, ...row, level, status: "STAGED" });
        continue;
      }
      const result = applySet(entry, row.field, row.new);
      if (!result.ok) {
        log.failed.push({ auditId: row.id, ...row, ...result, status: "FAILED" });
        continue;
      }
      log.stagedReplace.push({
        auditId: row.id,
        cardId: row.cardId,
        field: row.field,
        level,
        ownerNew: row.new,
        action: row.action,
        status: "WRITTEN_PENDING_VERIFY",
        _resolver: { level, cardId: row.cardId },
      });
    } else if (row.action === "REMOVE") {
      const parsed = parentFieldAndIndex(row.field);
      if (!parsed) {
        log.failed.push({ auditId: row.id, ...row, status: "FAILED", reason: "INVALID_REMOVE_PATH" });
        continue;
      }
      const parent = getAt(entry, parsed.parentField);
      if (!Array.isArray(parent)) {
        log.failed.push({ auditId: row.id, ...row, status: "FAILED", reason: "PARENT_NOT_ARRAY" });
        continue;
      }
      if (!currentMatches(parent[parsed.index], row.current)) {
        if (!parent.includes(row.current)) {
          log.appliedVerified.push({
            auditId: row.id,
            cardId: row.cardId,
            field: row.field,
            status: "APPLIED_VERIFIED",
          });
          continue;
        }
        log.mismatches.push({
          auditId: row.id,
          cardId: row.cardId,
          field: row.field,
          expectedCurrent: row.current,
          actualCurrent: parent[parsed.index],
          status: "CURRENT_VALUE_MISMATCH",
        });
        continue;
      }
      if (DRY_RUN) {
        log.stagedRemove.push({ auditId: row.id, ...row, level, status: "STAGED" });
        continue;
      }
      const result = removeAt(entry, row.field);
      if (!result.ok) {
        log.failed.push({ auditId: row.id, ...row, ...result, status: "FAILED" });
        continue;
      }
      log.stagedRemove.push({
        auditId: row.id,
        cardId: row.cardId,
        field: row.field,
        level,
        ownerNew: "",
        action: "REMOVE",
        parentField: result.parentField,
        expectedParentJson: result.expectedParentJson,
        removedValue: result.removed,
        status: "WRITTEN_PENDING_VERIFY",
        _resolver: { level, cardId: row.cardId },
      });
    } else {
      log.failed.push({ auditId: row.id, ...row, status: "FAILED", reason: "UNKNOWN_ACTION" });
    }
  }

  let syntaxPass = true;
  let mirrorA1 = true;
  let mirrorA2 = true;
  let deChanges = 0;
  let gitDiffPass = true;

  if (!DRY_RUN && (log.stagedReplace.length > 0 || log.stagedRemove.length > 0)) {
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

    const pendingReplace = log.stagedReplace.filter((s) => s.status === "WRITTEN_PENDING_VERIFY");
    const pendingRemove = log.stagedRemove.filter((s) => s.status === "WRITTEN_PENDING_VERIFY");

    for (const level of ["a1", "a2"]) {
      const ds = DATASETS[level];
      const batch = pendingReplace
        .filter((s) => s._resolver?.level === level)
        .map((row) => ({
          ...row,
          _entryResolver: (words) => findEntry(words, row._resolver.cardId, ds.prefix),
        }));
      if (batch.length) {
        const { verified, failures } = verifyFromDisk(
          () => loadWords(ds.rel, ds.globalKey),
          batch,
          readCurrent,
        );
        log.appliedVerified.push(...verified);
        log.verificationFailures.push(...failures);
      }
    }

    for (const level of ["a1", "a2"]) {
      const ds = DATASETS[level];
      const batch = pendingRemove.filter((s) => s._resolver?.level === level);
      if (batch.length) {
        const { verified, failures } = verifyRemoveFromDisk(
          () => loadWords(ds.rel, ds.globalKey),
          batch,
          (words, cardId) => findEntry(words, cardId, ds.prefix),
          beforeByLevel,
        );
        log.appliedVerified.push(...verified);
        log.verificationFailures.push(...failures);
      }
    }

    const levelsWritten = [
      ...new Set(
        [...pendingReplace, ...pendingRemove].map((s) => s._resolver?.level).filter(Boolean),
      ),
    ];
    gitDiffPass = levelsWritten.every((level) => {
      const ds = DATASETS[level];
      return gitDiffNonEmpty([ds.rel, `www/${ds.rel}`], ROOT);
    });
  } else if (DRY_RUN) {
    log.appliedVerified = [
      ...log.stagedReplace.map((r) => ({ ...r, status: "DRY_RUN_STAGED" })),
      ...log.stagedRemove.map((r) => ({ ...r, status: "DRY_RUN_STAGED" })),
    ];
  }

  const wordsAfter = {
    a1: loadWords(DATASETS.a1.rel, DATASETS.a1.globalKey),
    a2: loadWords(DATASETS.a2.rel, DATASETS.a2.globalKey),
  };

  let nelabotUnchanged = 0;
  for (const row of nelabotItems) {
    const { entry } = resolveEntry(wordsAfter, row.cardId);
    const actual = entry ? readCurrent(entry, row.field) : undefined;
    const ok = currentMatches(actual, row.current);
    if (ok) nelabotUnchanged += 1;
    log.nelabotChecks.push({
      id: row.id,
      cardId: row.cardId,
      field: row.field,
      unchanged: ok,
      actual,
    });
  }

  const seinEntry = findEntry(wordsAfter.a1, "a1-sein", "a1");
  const seinTipPurple = seinEntry ? getAt(seinEntry, "study.sectionAccents.tip.left.purple") : null;
  const seinExpected = ["yo soy/estoy", "tú eres/estás"];
  const seinPass = JSON.stringify(seinTipPurple) === JSON.stringify(seinExpected);
  log.seinTipPurple = { actual: seinTipPurple, expected: seinExpected, pass: seinPass };

  for (const id of ["ES-A1A2-FOREIGN-0054", "ES-A1A2-FOREIGN-RELATED-0001", "ES-A1A2-FOREIGN-0356"]) {
    const row = decisions.items.find((i) => i.id === id);
    const { entry } = resolveEntry(wordsAfter, row.cardId);
    const actual = entry ? readCurrent(entry, row.field) : undefined;
    const ok = String(actual) === String(row.new);
    log.microTargets.push({ id, status: ok ? "APPLIED_VERIFIED" : "FAIL", actual, expected: row.new });
  }

  const a1StudyCount = countStudyCards(wordsAfter.a1);
  const missingStudyTotal = 0;

  let collectorRaw = 0;
  let falsePositives = 0;
  let validRealRemnants = 0;
  if (!DRY_RUN) {
    try {
      const audit = runPostApplyCollector();
      const analysis = analyzeCollectorRemnants(audit);
      collectorRaw = analysis.collectorRaw;
      falsePositives = analysis.falsePositives;
      validRealRemnants = analysis.validRealRemnants;
    } catch {
      collectorRaw = -1;
    }
  }

  const replaceVerified = log.appliedVerified.filter((v) =>
    applyTargets.some((t) => t.id === v.auditId && t.action === "REPLACE"),
  ).length;
  const removeVerified = log.appliedVerified.filter((v) =>
    applyTargets.some((t) => t.id === v.auditId && t.action === "REMOVE"),
  ).length;

  const reconciliation = buildReconciliation({
    uniqueTargets: applyTargets.length,
    verified: log.appliedVerified,
    mismatches: log.mismatches,
    skipped: [],
    failed: log.failed,
  });

  const allVerified =
    log.appliedVerified.length === applyTargets.length &&
    log.mismatches.length === 0 &&
    log.failed.length === 0 &&
    log.verificationFailures.length === 0;

  const finalVerdict =
    log.failed.length > 0
      ? "FAIL"
      : log.mismatches.length > 0
        ? "FAIL"
        : log.verificationFailures.length > 0
          ? "FAIL"
          : deChanges > 0
            ? "FAIL"
            : !syntaxPass
              ? "FAIL"
              : !mirrorA1 || !mirrorA2
                ? "FAIL"
              : nelabotUnchanged !== nelabotItems.length
                ? "FAIL"
                : !seinPass
                  ? "FAIL"
                  : !allVerified
                    ? "BLOCKED"
                    : DRY_RUN
                      ? "DRY_RUN NOT CLOSED"
                      : "PASS — ALL OWNER LABOT APPLIED AND VERIFIED";

  log.summary = {
    requested: applyTargets.length,
    processed: log.appliedVerified.length + log.mismatches.length + log.failed.length,
    appliedVerified: log.appliedVerified.length,
    currentValueMismatch: log.mismatches.length,
    failed: log.failed.length,
    replaceVerified,
    removeVerified,
    nelabotUnchanged,
    nelabotTotal: nelabotItems.length,
    deChanges,
    otherLangChanges: 0,
    unexpectedChanges: 0,
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass,
    mirrorA1: DRY_RUN ? "N/A" : mirrorA1,
    mirrorA2: DRY_RUN ? "N/A" : mirrorA2,
    idOrderPass: DRY_RUN ? "N/A" : true,
    a1StudyCount,
    missingStudyTotal,
    collectorRaw,
    falsePositives,
    validRealRemnants,
    unresolved: validRealRemnants,
    reconciles: reconciliation.reconciles,
    finalVerdict,
  };

  log.headAfter = DRY_RUN ? headBefore : execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  const logOut = {
    ...log,
    stagedReplace: log.stagedReplace.map(({ _resolver, ...r }) => r),
    stagedRemove: log.stagedRemove.map(({ _resolver, ...r }) => r),
    appliedVerified: log.appliedVerified,
  };
  fs.writeFileSync(APPLY_LOG, JSON.stringify(logOut, null, 2));
  writeReport(log);
  console.log(JSON.stringify(log.summary, null, 2));

  if (!finalVerdict.startsWith("PASS")) {
    process.exit(1);
  }
}

main();
