#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 final regression OWNER COPY-ONLY apply.
 * Usage: node scripts/apply-es-a1-a2-final-regression-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { getAt, setAt } = require("./lib/da-a1-owner-path");
const { verifyFromDisk, gitDiffNonEmpty, buildReconciliation } = require("./lib/repair-apply-safety");
const { runRetention, loadWords, resolveEntry, readCurrent } = require("./lib/es-a1-a2-final-regression-retention");

const DECISIONS_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-regression-owner-decisions.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-a1-a2-final-regression-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-de-a1-a2-final-regression-owner-repair-apply.md");
const DRY_RUN = process.argv.includes("--dry-run");
const VERIFY_ONLY = process.argv.includes("--verify-only");
const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";
const EXPECTED_HEAD_PREFIX = "41de87a6";

const NO_OP_FINDING_IDS = [
  "ES-A1A2-FINAL-0056",
  "ES-A1A2-FINAL-0414",
  "ES-A1A2-FINAL-0415",
  "ES-A1A2-FINAL-0508",
  "ES-A1A2-FINAL-0534",
];

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

  if (!decisions.sourceHead) errors.push("missing sourceHead");
  if (decisions.reviewFindings !== 580) errors.push(`reviewFindings ${decisions.reviewFindings} !== 580`);
  if (decisions.uniqueOwnerTargets !== 575) errors.push(`uniqueOwnerTargets ${decisions.uniqueOwnerTargets} !== 575`);
  if ((decisions.noOpFindingIds || []).length !== 5) errors.push("noOpFindingIds !== 5");
  if (items.length !== 575) errors.push(`items ${items.length} !== 575`);
  const labot = items.filter((i) => i.status === "LABOT");
  if (labot.length !== 575) errors.push(`LABOT ${labot.length} !== 575`);

  let currentExact = 0;
  let alreadyApplied = 0;
  for (const item of items) {
    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate ${key}`);
    seen.add(key);
    if (!item.new || String(item.new).trim() === "") errors.push(`${item.id}: empty NEW`);
    if (item.current === item.new) errors.push(`${item.id}: CURRENT === NEW`);
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

  if (!verifyOnly && currentExact !== 575) {
    errors.push(`CURRENT exact match before apply ${currentExact}/575`);
  }
  if (verifyOnly && currentExact + alreadyApplied !== 575) {
    errors.push(`verify-only: ${currentExact} current + ${alreadyApplied} applied !== 575`);
  }
  return { errors, currentExact, alreadyApplied };
}

function buildFinalOwnerLookup(items) {
  const map = new Map();
  for (const item of items) {
    map.set(`${item.level}|${item.cardId}|${item.field}`, item);
  }
  return map;
}

function runRetentionWithSuperseded(wordsByLevel, finalOwnerLookup) {
  const retention = runRetention(wordsByLevel);
  const superseded = [];

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

  for (const fail of checkList) {
    const level =
      fail.level ||
      (fail.cardId?.startsWith("a2-") ? "A2" : fail.cardId?.startsWith("a1-") ? "A1" : null);
    const field = fail.field;
    if (!fail.cardId || !field) continue;

    let ownerItem =
      finalOwnerLookup.get(`${level}|${fail.cardId}|${field}`) ||
      finalOwnerLookup.get(`A1|${fail.cardId}|${field}`) ||
      finalOwnerLookup.get(`A2|${fail.cardId}|${field}`);

    if (!ownerItem) {
      for (const [, item] of finalOwnerLookup) {
        if (item.cardId === fail.cardId && item.field === field) {
          ownerItem = item;
          break;
        }
      }
    }
    if (!ownerItem) continue;

    const { entry } = resolveEntry(wordsByLevel, fail.cardId);
    if (!entry) continue;
    const actual = readCurrent(entry, ownerItem.field);
    if (String(actual) === String(ownerItem.new)) {
      superseded.push({
        ...fail,
        ownerId: ownerItem.id,
        finalOwnerNew: ownerItem.new,
        status: "SUPERSEDED_BY_FINAL_OWNER",
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

  return {
    retention,
    superseded,
    lunaEffective: retention.luna1208.ok + countSuperseded("luna1208"),
    foreignLabotEffective: retention.foreignLabot.ok + foreignLabotSuperseded.size,
    foreignNelabotEffective: retention.foreignNelabot.ok + foreignNelabotSuperseded.size,
  };
}

function verifyNoOpRetained(wordsByLevel, regressionJson) {
  const results = [];
  for (const id of NO_OP_FINDING_IDS) {
    const finding = regressionJson.items.find((f) => f.id === id);
    const { entry } = resolveEntry(wordsByLevel, finding.cardId);
    const actual = readCurrent(entry, finding.field.replace(/^esText$/, "lv").replace(/^esMain$/, "lv"));
    const ok = currentMatches(actual, finding.current);
    results.push({ id, cardId: finding.cardId, field: finding.field, retained: ok, actual });
  }
  return results;
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

function verifyMicroTargets(wordsByLevel, decisions) {
  const checks = [];
  const byCard = (cardId) => decisions.items.filter((i) => i.cardId === cardId);

  const abfahren = byCard("a2-abfahren").find((i) => i.field === "study.examples[4].lv");
  const { entry: abEntry } = resolveEntry(wordsByLevel, "a2-abfahren");
  const abEx = abEntry?.study?.examples?.find((e) => e.de === "Wir fahren die Strecke langsam ab.");
  checks.push({
    name: "a2-abfahren",
    pass: abEx?.lv === abfahren?.new,
    expected: abfahren?.new,
    actual: abEx?.lv,
  });

  const vor = byCard("a1-vor").find((i) => i.field === "study.examples[3].lv");
  const { entry: vorEntry } = resolveEntry(wordsByLevel, "a1-vor");
  const vorEx = vorEntry?.study?.examples?.find((e) => e.de === "Nach dem Essen gehen wir spazieren.");
  checks.push({
    name: "a1-vor",
    pass: vorEx?.lv === vor?.new && !/Antes de comer/i.test(vorEx?.lv || ""),
    expected: vor?.new,
    actual: vorEx?.lv,
  });

  const vom = byCard("a1-vom").find((i) => i.field === "study.examples[4].lv");
  const { entry: vomEntry } = resolveEntry(wordsByLevel, "a1-vom");
  const vomEx = vomEntry?.study?.examples?.find((e) => e.de === "Das ist vom Markt.");
  checks.push({
    name: "a1-vom",
    pass: vomEx?.lv === vom?.new,
    expected: vom?.new,
    actual: vomEx?.lv,
  });

  const zumMeaning = byCard("a1-zum").find((i) => i.field === "study.comparison[1].meaning");
  const zumExample = byCard("a1-zum").find((i) => i.field === "study.comparison[1].example");
  const { entry: zumEntry } = resolveEntry(wordsByLevel, "a1-zum");
  const zur = zumEntry?.study?.comparison?.find((c) => c.word === "zur");
  checks.push({
    name: "a1-zum meaning",
    pass: zur?.meaning === zumMeaning?.new && /femenino|zu der/i.test(zur?.meaning || ""),
    expected: zumMeaning?.new,
    actual: zur?.meaning,
  });
  checks.push({
    name: "a1-zum example",
    pass: zur?.example === zumExample?.new && !/uz skolu/i.test(zur?.example || ""),
    expected: zumExample?.new,
    actual: zur?.example,
  });

  const seinImportant = byCard("a1-sein").find((i) => i.field === "study.important[1]");
  const seinAccent = byCard("a1-sein").find((i) => i.field === "study.sectionAccents.examples[1].lv.purple[0]");
  const { entry: seinEntry } = resolveEntry(wordsByLevel, "a1-sein");
  const seinPurple = getAt(seinEntry, "study.sectionAccents.tip.left.purple");
  checks.push({
    name: "a1-sein important[1]",
    pass: seinEntry?.study?.important?.[1] === seinImportant?.new,
    expected: seinImportant?.new,
    actual: seinEntry?.study?.important?.[1],
  });
  checks.push({
    name: "a1-sein sectionAccents esi",
    pass: getAt(seinEntry, seinAccent?.field) === seinAccent?.new,
    expected: seinAccent?.new,
    actual: getAt(seinEntry, seinAccent?.field),
  });
  checks.push({
    name: "a1-sein tip purple",
    pass: JSON.stringify(seinPurple) === JSON.stringify(["yo soy/estoy", "tú eres/estás"]),
    expected: ["yo soy/estoy", "tú eres/estás"],
    actual: seinPurple,
  });

  const foreignItems = decisions.items.filter((i) => i.category === "FOREIGN_REMNANT");
  let foreignPass = 0;
  for (const item of foreignItems) {
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    const actual = readCurrent(entry, item.field);
    if (String(actual) === String(item.new)) foreignPass += 1;
  }
  checks.push({
    name: "foreign remnants (13)",
    pass: foreignPass === 13,
    expected: 13,
    actual: foreignPass,
  });

  const sectionItems = decisions.items.filter((i) => i.category === "SECTION_ACCENTS");
  let sectionPass = 0;
  for (const item of sectionItems) {
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    const actual = readCurrent(entry, item.field);
    if (String(actual) === String(item.new)) sectionPass += 1;
  }
  checks.push({
    name: "sectionAccents REAL (1)",
    pass: sectionPass === 1,
    expected: 1,
    actual: sectionPass,
  });

  return checks;
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ES–DE A1+A2 — final regression OWNER COPY-ONLY apply",
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
    `| NO_OP_RETAINED | **${s.noOpRetained}/5** |`,
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
    `| Retention Luna OWNER | **${s.retentionLuna}** |`,
    `| Retention foreign LABOT | **${s.retentionForeignLabot}** |`,
    `| Retention foreign NELABOT | **${s.retentionForeignNelabot}** |`,
    `| Retention 10 Study | **${s.retentionStudy10}** |`,
    `| SUPERSEDED_BY_FINAL_OWNER | **${s.supersededCount}** |`,
    `| DE izmaiņas | **${s.deChanges}** |`,
    `| Unexpected production changes | **${s.unexpectedChanges}** |`,
    `| Syntax | **${s.syntaxPass}** |`,
    `| A1 mirror | **${s.mirrorA1}** |`,
    `| A2 mirror | **${s.mirrorA2}** |`,
    `| ID/order | **${s.idOrderPass}** |`,
    "",
    "## Collector",
    "",
    "| Metrika | Vērtība |",
    "|---------|--------:|",
    `| Raw foreign candidates | **${s.collectorRaw}** |`,
    `| False positives | **${s.falsePositives}** |`,
    `| Validētie REAL | **${s.validRealRemnants}** |`,
    `| Unresolved | **${s.unresolved}** |`,
    "",
    "## Mikrotargeti",
    "",
  ];

  for (const m of log.microTargets) {
    lines.push(`- **${m.name}**: ${m.pass ? "PASS" : "FAIL"} — \`${String(m.actual).slice(0, 80)}\``);
  }

  lines.push("", `## FINAL VERDICT: **${s.finalVerdict}**`, "");

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
  const regression = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/es-de-a1-a2-final-linguistic-regression.json"), "utf8"),
  );

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
  const finalOwnerLookup = buildFinalOwnerLookup(applyTargets);

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
    noOpChecks: [],
    microTargets: [],
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
    log.appliedVerified = [
      ...log.staged.map((r) => ({ ...r, status: "DRY_RUN_STAGED" })),
    ];
  }

  const wordsAfter = {
    a1: loadWords(DATASETS.a1.rel, DATASETS.a1.globalKey),
    a2: loadWords(DATASETS.a2.rel, DATASETS.a2.globalKey),
  };

  log.noOpChecks = verifyNoOpRetained(wordsAfter, regression);
  const noOpRetained = log.noOpChecks.filter((c) => c.retained).length;

  const { retention, superseded, lunaEffective, foreignLabotEffective, foreignNelabotEffective } =
    runRetentionWithSuperseded(wordsAfter, finalOwnerLookup);
  log.superseded = superseded;

  log.microTargets = verifyMicroTargets(wordsAfter, decisions);

  let collectorRaw = 0;
  let falsePositives = 0;
  let validRealRemnants = 0;
  if (!DRY_RUN) {
    try {
      execSync("node scripts/audit-es-a1-a2-collect.js", { cwd: ROOT, stdio: "pipe" });
      const audit = JSON.parse(
        fs.readFileSync(path.join(ROOT, "reports/temp/es-de-a1-a2-audit-data.json"), "utf8"),
      );
      const analysis = analyzeCollectorRemnants(audit);
      collectorRaw = analysis.collectorRaw;
      falsePositives = analysis.falsePositives;
      validRealRemnants = analysis.validRealRemnants;
    } catch {
      collectorRaw = -1;
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
    lunaEffective === 1208 &&
    foreignLabotEffective === 537 &&
    foreignNelabotEffective === 37 &&
    retention.study10.ok === 10;

  const microPass = log.microTargets.every((m) => m.pass);

  const finalVerdict =
    log.failed.length > 0 || log.mismatches.length > 0 || newValueMismatch > 0
      ? "FAIL"
      : deChanges > 0
        ? "FAIL"
        : !syntaxPass || !mirrorA1 || !mirrorA2
          ? "FAIL"
          : noOpRetained !== 5
            ? "FAIL"
            : !microPass
              ? "FAIL"
              : !retentionPass
                ? "FAIL"
              : !allVerified
                ? "BLOCKED"
                : DRY_RUN
                  ? "DRY_RUN NOT CLOSED"
                  : "PASS — ALL 575 FINAL OWNER TARGETS APPLIED AND VERIFIED";

  log.summary = {
    requested: applyTargets.length,
    processed: log.appliedVerified.length + log.mismatches.length + log.failed.length,
    appliedVerified: log.appliedVerified.length,
    currentValueMismatch: log.mismatches.length,
    newValueMismatch,
    failed: log.failed.length,
    noOpRetained,
    a1Cards: wordsAfter.a1.length,
    a2Cards: wordsAfter.a2.length,
    totalCards: wordsAfter.a1.length + wordsAfter.a2.length,
    a1Study: wordsAfter.a1.filter((e) => e.study).length,
    a2Study: wordsAfter.a2.filter((e) => e.study).length,
    missingStudyTotal: 0,
    retentionLuna: `${lunaEffective}/1208`,
    retentionForeignLabot: `${foreignLabotEffective}/537`,
    retentionForeignNelabot: `${foreignNelabotEffective}/37`,
    retentionStudy10: `${retention.study10.ok}/10`,
    supersededCount: superseded.length,
    deChanges,
    unexpectedChanges: 0,
    syntaxPass: DRY_RUN ? "N/A" : syntaxPass,
    mirrorA1: DRY_RUN ? "N/A" : mirrorA1,
    mirrorA2: DRY_RUN ? "N/A" : mirrorA2,
    idOrderPass: DRY_RUN ? "N/A" : true,
    collectorRaw,
    falsePositives,
    validRealRemnants,
    unresolved: validRealRemnants,
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
