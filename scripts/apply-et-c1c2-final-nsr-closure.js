#!/usr/bin/env node
"use strict";
/**
 * ET–DE C1/C2 final NSR closure: TRUE_EXTRA study removal + sectionAccents deterministic repair.
 * Usage: node scripts/apply-et-c1c2-final-nsr-closure.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const {
  fixSectionAccentsIterative,
  verifyDeUnchanged,
} = require("./lib/et-b1-sectionaccents-fix");
const {
  countSectionAccentIssues,
  listDedupedTargets,
} = require("./lib/et-c1c2-sectionaccents-validate");
const { parsePipeRows } = require("./lib/et-c1c2-owner-accepted-parse");
const { normalizeField, findEntry } = require("./lib/et-c1c2-owner-path");

const DRY_RUN = process.argv.includes("--dry-run");
const ACCEPTED_MD = path.join(ROOT, "reports/et-c1c2-owner-decisions-accepted.md");
const REPORT_MD = path.join(ROOT, "reports/et-c1c2-final-nsr-closure.md");
const LOG_JSON = path.join(ROOT, "reports/temp/et-c1c2-final-nsr-closure-log.json");

const LEVELS = {
  c1: {
    key: "C1_WORDS",
    rel: "data/et/c1.js",
    files: [path.join(ROOT, "data/et/c1.js"), path.join(ROOT, "www/data/et/c1.js")],
    lvFile: path.join(ROOT, "data/c1.js"),
    expectedStudies: 15,
  },
  c2: {
    key: "C2_WORDS",
    rel: "data/et/c2.js",
    files: [path.join(ROOT, "data/et/c2.js"), path.join(ROOT, "www/data/et/c2.js")],
    lvFile: path.join(ROOT, "data/c2.js"),
    expectedStudies: 1,
  },
};

/** TRUE_EXTRA_STUDY — LV MASTER has card but no study object. */
const REMOVE_STUDY_IDS = [
  {
    auditId: "ET-C1C2-0001",
    cardId: "c1-wettbewerb",
    level: "c1",
    de: "Wettbewerb",
    classification: "TRUE_EXTRA_STUDY",
    evidence: "LV MASTER C1 has Wettbewerb card without study; ET-only standardStudy.",
  },
  {
    auditId: "ET-C1C2-0002",
    cardId: "c2-inwiefern",
    level: "c2",
    de: "inwiefern",
    classification: "TRUE_EXTRA_STUDY",
    evidence: "LV MASTER C2 has only Gewichtseinheit study; inwiefern has no LV study counterpart.",
  },
  {
    auditId: "ET-C1C2-0002",
    cardId: "c2-inwieweit",
    level: "c2",
    de: "inwieweit",
    classification: "TRUE_EXTRA_STUDY",
    evidence: "LV MASTER C2 has only Gewichtseinheit study; inwieweit has no LV study counterpart.",
  },
];

function loadWords(filePath, key) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function writeWords(filePath, words, key) {
  fs.writeFileSync(
    filePath,
    `const ${key} = ${JSON.stringify(words, null, 2)};\n\nwindow.${key} = ${key};\n`,
    "utf8",
  );
}

function gitBlob(filePath) {
  return execSync(`git hash-object ${filePath}`, { cwd: ROOT, encoding: "utf8" }).trim();
}

function readCurrent(entry, field) {
  const f = normalizeField(field);
  if (f === "lv") return entry.lv;
  const { getAt } = require("./lib/et-c1c2-owner-path");
  return getAt(entry, f);
}

function verifyOwnerLabotRetained(wordsByLevel, applyMap) {
  let ok = 0;
  const failures = [];
  for (const row of applyMap.apply) {
    const words = wordsByLevel[row.level];
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      failures.push({ auditId: row.auditId, reason: "card_missing" });
      continue;
    }
    const actual = readCurrent(entry, row.field);
    if (String(actual) === String(row.ownerNew)) ok++;
    else failures.push({ auditId: row.auditId, expected: row.ownerNew, actual });
  }
  return { ok, failures };
}

function removeExtraStudies(wordsByLevel) {
  const removed = [];
  for (const spec of REMOVE_STUDY_IDS) {
    const words = wordsByLevel[spec.level];
    const entry = words.find((e) => e.study?.id === spec.cardId || e.de === spec.de);
    if (!entry || !entry.study) {
      removed.push({ ...spec, action: "ALREADY_ABSENT" });
      continue;
    }
    const lvWords = loadWords(LEVELS[spec.level].lvFile, LEVELS[spec.level].key);
    const lvEntry = lvWords.find((e) => e.de === entry.de);
    const lvHasStudy = lvEntry?.study != null;
    const before = JSON.parse(JSON.stringify(entry.study));
    delete entry.study;
    removed.push({
      ...spec,
      action: "REMOVED_STUDY",
      index: words.indexOf(entry),
      lvHasStudy,
      studyLayout: before.layout,
    });
  }
  return removed;
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ET–DE C1/C2 — final NSR closure",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    "",
    "## Merge record (PR #629)",
    "",
    "| Field | SHA |",
    "|-------|-----|",
    `| MAIN_BEFORE | \`${s.mainBefore}\` |`,
    `| MERGE_COMMIT | \`${s.mergeCommit}\` |`,
    `| MAIN_AFTER (closure base) | \`${s.mainAfterBase}\` |`,
    `| C1_PRODUCTION_BLOB_BEFORE | \`${s.c1BlobBefore}\` |`,
    `| C2_PRODUCTION_BLOB_BEFORE | \`${s.c2BlobBefore}\` |`,
    `| C1_PRODUCTION_BLOB_AFTER | \`${s.c1BlobAfter}\` |`,
    `| C2_PRODUCTION_BLOB_AFTER | \`${s.c2BlobAfter}\` |`,
    "",
    "## sectionAccents",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| RAW_BEFORE | **${s.sectionAccentsRawBefore}** |`,
    `| DEDUPED_TARGETS_BEFORE | **${s.sectionAccentsDedupedBefore}** |`,
    `| APPLIED_REPAIRS | **${s.sectionAccentsApplied}** |`,
    `| OWNER_DECISION_REQUIRED | **${s.sectionAccentsOwnerRequired}** |`,
    `| RAW_AFTER | **${s.sectionAccentsRawAfter}** |`,
    `| DEDUPED_AFTER | **${s.sectionAccentsDedupedAfter}** |`,
    "",
    "## Study-count NSR",
    "",
    "| Card | Classification | Action |",
    "|------|----------------|--------|",
    ...log.studyRemovals.map(
      (r) => `| ${r.cardId} (${r.de}) | ${r.classification} | ${r.action} |`,
    ),
    "",
    `| C1 studies final | **${s.c1Studies}** (expected 15) |`,
    `| C2 studies final | **${s.c2Studies}** (expected 1) |`,
    "",
    "## OWNER retention",
    "",
    `| OWNER LABOT retained | **${s.ownerLabotRetained}/76** |`,
    `| NELABOT retained | **${s.nelabotRetained}/3** |`,
    `| FALSE_POSITIVE retained | **${s.falsePositiveRetained}/7** |`,
    "",
    "## Gates",
    "",
    `| DE changes | **${s.deChanges}** |`,
    `| ET prose changes (excl. sectionAccents) | **${s.etProseChanges}** |`,
    `| Mirror C1 | **${s.mirrorC1}** |`,
    `| Mirror C2 | **${s.mirrorC2}** |`,
    `| Syntax | **${s.syntax}** |`,
    "",
    `## FINAL VERDICT: **${s.finalVerdict}**`,
    "",
    "### Study removal evidence",
    "",
    ...log.studyRemovals.map((r) => `- **${r.cardId}**: ${r.evidence}`),
    "",
    "### sectionAccents dedup targets (before)",
    "",
    ...log.dedupedTargetsBefore.map((t) => `- ${t.cardId} · ${t.path} (${t.count} raw terms)`),
    "",
  ];
  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  const mainBefore = execSync("git rev-parse d1ea2b05", { cwd: ROOT, encoding: "utf8" }).trim();
  const mergeCommit = execSync("git rev-parse 69360f44", { cwd: ROOT, encoding: "utf8" }).trim();
  const mainAfterBase = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  const applyMap = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/et-c1c2-owner-apply-map.json"), "utf8"),
  );
  const acceptedRows = parsePipeRows(fs.readFileSync(ACCEPTED_MD, "utf8"));

  const wordsByLevel = {};
  const beforeByLevel = {};
  for (const [level, cfg] of Object.entries(LEVELS)) {
    wordsByLevel[level] = loadWords(cfg.files[0], cfg.key);
    beforeByLevel[level] = JSON.parse(JSON.stringify(wordsByLevel[level]));
  }

  const c1BlobBefore = gitBlob(LEVELS.c1.files[0]);
  const c2BlobBefore = gitBlob(LEVELS.c2.files[0]);

  const saBeforeC1 = countSectionAccentIssues(wordsByLevel.c1);
  const saBeforeC2 = countSectionAccentIssues(wordsByLevel.c2);
  const dedupedBefore = listDedupedTargets(wordsByLevel.c1).concat(listDedupedTargets(wordsByLevel.c2));

  const studyRemovals = removeExtraStudies(wordsByLevel);

  const fixC1 = fixSectionAccentsIterative(wordsByLevel.c1);
  const fixC2 = fixSectionAccentsIterative(wordsByLevel.c2);
  const unresolved = [...fixC1.unresolved, ...fixC2.unresolved];
  const repairs = [...fixC1.repairs, ...fixC2.repairs];
  const sectionAccentsApplied =
    fixC1.stats.autoFixed +
    fixC1.stats.dropped +
    fixC1.stats.scalarDropped +
    fixC1.stats.orphanComparisonRemoved +
    fixC1.stats.reshaped +
    fixC2.stats.autoFixed +
    fixC2.stats.dropped +
    fixC2.stats.scalarDropped +
    fixC2.stats.orphanComparisonRemoved +
    fixC2.stats.reshaped;

  if (!DRY_RUN) {
    for (const [level, cfg] of Object.entries(LEVELS)) {
      for (const f of cfg.files) writeWords(f, wordsByLevel[level], cfg.key);
    }
  }

  const afterC1 = DRY_RUN ? wordsByLevel.c1 : loadWords(LEVELS.c1.files[0], LEVELS.c1.key);
  const afterC2 = DRY_RUN ? wordsByLevel.c2 : loadWords(LEVELS.c2.files[0], LEVELS.c2.key);

  const saAfterC1 = countSectionAccentIssues(afterC1);
  const saAfterC2 = countSectionAccentIssues(afterC2);

  const ownerLabot = verifyOwnerLabotRetained(
    DRY_RUN ? wordsByLevel : { c1: afterC1, c2: afterC2 },
    applyMap,
  );

  const deChanges =
    verifyDeUnchanged(beforeByLevel.c1, afterC1) + verifyDeUnchanged(beforeByLevel.c2, afterC2);

  const removedIds = new Set(REMOVE_STUDY_IDS.map((r) => r.cardId));
  let etProseChanges = 0;
  for (const [level, before, after] of [
    ["c1", beforeByLevel.c1, afterC1],
    ["c2", beforeByLevel.c2, afterC2],
  ]) {
    for (let i = 0; i < after.length; i++) {
      const stripSa = (entry) => {
        const c = JSON.parse(JSON.stringify(entry));
        if (c.study?.sectionAccents) delete c.study.sectionAccents;
        return c;
      };
      const isRemovedStudy = REMOVE_STUDY_IDS.some((r) => r.level === level && r.de === after[i].de);
      if (isRemovedStudy && before[i].study && !after[i].study) continue;
      const b = stripSa(before[i]);
      const a = stripSa(after[i]);
      if (JSON.stringify(b) !== JSON.stringify(a)) etProseChanges++;
    }
  }

  let syntaxPass = true;
  if (!DRY_RUN) {
    try {
      execSync("node --check data/et/c1.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/c1.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
  }

  const mirrorC1 = DRY_RUN ? "N/A" : isSyncedWithWww(LEVELS.c1.rel) ? "PASS" : "FAIL";
  const mirrorC2 = DRY_RUN ? "N/A" : isSyncedWithWww(LEVELS.c2.rel) ? "PASS" : "FAIL";

  const c1Studies = afterC1.filter((e) => e.study).length;
  const c2Studies = afterC2.filter((e) => e.study).length;

  const nelabot = acceptedRows.filter((r) => r.status === "NELABOT");
  const fp = acceptedRows.filter((r) => r.status === "FALSE_POSITIVE");
  let nelabotRetained = 0;
  let fpRetained = 0;
  for (const row of nelabot) {
    const level = row.cardId.startsWith("c2-") ? "c2" : "c1";
    const b = findEntry(beforeByLevel[level], row.cardId);
    const a = findEntry(level === "c2" ? afterC2 : afterC1, row.cardId);
    if (b && a && String(readCurrent(b, row.field)) === String(readCurrent(a, row.field))) nelabotRetained++;
  }
  for (const row of fp) {
    const level = row.cardId.startsWith("c2-") ? "c2" : "c1";
    const b = findEntry(beforeByLevel[level], row.cardId);
    const a = findEntry(level === "c2" ? afterC2 : afterC1, row.cardId);
    if (b && a && String(readCurrent(b, row.field)) === String(readCurrent(a, row.field))) fpRetained++;
  }

  const rawBefore = saBeforeC1.raw + saBeforeC2.raw;
  const dedupedBeforeCount = saBeforeC1.deduped + saBeforeC2.deduped;
  const rawAfter = saAfterC1.raw + saAfterC2.raw;
  const dedupedAfter = saAfterC1.deduped + saAfterC2.deduped;

  const pass =
    !DRY_RUN &&
    ownerLabot.ok === 76 &&
    nelabotRetained === 3 &&
    fpRetained === 7 &&
    unresolved.length === 0 &&
    rawAfter === 0 &&
    dedupedAfter === 0 &&
    c1Studies === 15 &&
    c2Studies === 1 &&
    deChanges === 0 &&
    etProseChanges === 0 &&
    mirrorC1 === "PASS" &&
    mirrorC2 === "PASS" &&
    syntaxPass;

  const finalVerdict = DRY_RUN
    ? "DRY_RUN NOT CLOSED"
    : pass
      ? "ET_C1C2_FINAL_NSR_CLOSURE_PASS"
      : unresolved.length > 0
        ? "OWNER_DECISION_REQUIRED"
        : "ET_C1C2_FINAL_NSR_CLOSURE_FAIL";

  const log = {
    dryRun: DRY_RUN,
    studyRemovals,
    dedupedTargetsBefore: dedupedBefore,
    repairsSample: repairs.slice(0, 50),
    unresolved,
    ownerLabotFailures: ownerLabot.failures,
    summary: {
      mainBefore,
      mergeCommit,
      mainAfterBase,
      c1BlobBefore,
      c2BlobBefore,
      c1BlobAfter: DRY_RUN ? c1BlobBefore : gitBlob(LEVELS.c1.files[0]),
      c2BlobAfter: DRY_RUN ? c2BlobBefore : gitBlob(LEVELS.c2.files[0]),
      sectionAccentsRawBefore: rawBefore,
      sectionAccentsDedupedBefore: dedupedBeforeCount,
      sectionAccentsApplied,
      sectionAccentsOwnerRequired: unresolved.length,
      sectionAccentsRawAfter: rawAfter,
      sectionAccentsDedupedAfter: dedupedAfter,
      c1Studies,
      c2Studies,
      ownerLabotRetained: ownerLabot.ok,
      nelabotRetained,
      falsePositiveRetained: fpRetained,
      deChanges,
      etProseChanges,
      mirrorC1,
      mirrorC2,
      syntax: DRY_RUN ? "N/A" : syntaxPass ? "PASS" : "FAIL",
      finalVerdict,
    },
  };

  fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
  fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2));
  if (!DRY_RUN) writeReport(log);

  console.log(JSON.stringify(log.summary, null, 2));

  if (!DRY_RUN && finalVerdict !== "ET_C1C2_FINAL_NSR_CLOSURE_PASS") {
    process.exit(1);
  }
}

main();
