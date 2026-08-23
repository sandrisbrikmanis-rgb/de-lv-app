#!/usr/bin/env node
"use strict";
/**
 * ET–DE B2 final NSR closure: TRUE_EXTRA study removal + study parity.
 * Usage: node scripts/apply-et-b2-final-nsr-closure.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { countSectionAccentIssues } = require("./lib/et-c1c2-sectionaccents-validate");
const { fixSectionAccentsIterative } = require("./lib/et-b1-sectionaccents-fix");

const DRY_RUN = process.argv.includes("--dry-run");
const REPORT_MD = path.join(ROOT, "reports/et-b2-final-nsr-closure.md");
const LOG_JSON = path.join(ROOT, "reports/temp/et-b2-final-nsr-closure-log.json");

const B2_FILES = [
  path.join(ROOT, "data/et/b2.js"),
  path.join(ROOT, "www/data/et/b2.js"),
];
const B2_KEY = "B2_WORDS";
const LV_FILE = path.join(ROOT, "data/b2.js");
const EXPECTED_STUDIES = 60;
const EXPECTED_CARDS = 2118;

/** TRUE_EXTRA_STUDY — LV MASTER has card but no study object. */
const REMOVE_STUDY = [
  {
    auditId: "ET-B2-STUDY-01",
    cardId: "b2-genosse",
    de: "Genosse",
    classification: "TRUE_EXTRA_STUDY",
    evidence: "LV MASTER B2 has Genosse card without study; ET-only standardStudy with char-split sectionAccents.",
  },
  {
    auditId: "ET-B2-STUDY-02",
    cardId: "b2-genossin",
    de: "Genossin",
    classification: "TRUE_EXTRA_STUDY",
    evidence: "LV MASTER B2 has Genossin card without study; ET-only standardStudy.",
  },
  {
    auditId: "ET-B2-STUDY-03",
    cardId: "b2-neger",
    de: "Neger",
    classification: "TRUE_EXTRA_STUDY",
    evidence: "LV MASTER B2 has Neger card without study; ET-only standardStudy.",
  },
  {
    auditId: "ET-B2-STUDY-04",
    cardId: "b2-pacht",
    de: "Pacht",
    classification: "TRUE_EXTRA_STUDY",
    evidence: "LV MASTER B2 has Pacht card without study; ET-only standardStudy.",
  },
];

function loadWords(filePath, key) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const ${B2_KEY} = ${JSON.stringify(words, null, 2)};\n\nwindow.${B2_KEY} = ${B2_KEY};\n`,
    "utf8",
  );
}

function gitBlob(filePath) {
  return execSync(`git hash-object ${filePath}`, { cwd: ROOT, encoding: "utf8" }).trim();
}

function verifyDeUnchanged(before, after) {
  const fields = ["de", "de_article", "de_plural", "level"];
  let n = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of fields) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) n++;
    }
  }
  return n;
}

function removeExtraStudies(words) {
  const removed = [];
  for (const spec of REMOVE_STUDY) {
    const entry = words.find((e) => e.de === spec.de || e.study?.id === spec.cardId);
    if (!entry) {
      removed.push({ ...spec, status: "CARD_NOT_FOUND" });
      continue;
    }
    if (!entry.study) {
      removed.push({ ...spec, status: "ALREADY_NO_STUDY" });
      continue;
    }
    if (!DRY_RUN) delete entry.study;
    removed.push({ ...spec, status: DRY_RUN ? "DRY_RUN_WOULD_REMOVE" : "REMOVED" });
  }
  return removed;
}

function main() {
  const words = loadWords(B2_FILES[0], B2_KEY);
  const before = JSON.parse(JSON.stringify(words));
  const lvWords = loadWords(LV_FILE, B2_KEY);

  const studiesBefore = words.filter((e) => e.study).length;
  const removed = removeExtraStudies(words);
  const studiesAfter = words.filter((e) => e.study).length;
  const lvStudies = lvWords.filter((e) => e.study).length;

  let sectionAccentsRepair = null;
  if (!DRY_RUN) {
    sectionAccentsRepair = fixSectionAccentsIterative(words);
    for (const f of B2_FILES) writeWords(f, words);
  }

  const sa = countSectionAccentIssues(words);
  const deChanges = DRY_RUN ? 0 : verifyDeUnchanged(before, words);

  const mirror = DRY_RUN ? "N/A" : isSyncedWithWww("data/et/b2.js") ? "PASS" : "FAIL";
  let syntaxPass = true;
  if (!DRY_RUN) {
    try {
      execSync("node --check data/et/b2.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/et/b2.js", { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntaxPass = false;
    }
  }

  const studyParityPass =
    studiesAfter === EXPECTED_STUDIES && studiesAfter === lvStudies && words.length === EXPECTED_CARDS;
  const sectionAccentsPass = sa.raw === 0 && sa.deduped === 0;

  const finalVerdict =
    deChanges > 0
      ? "FAIL — DE CHANGES"
      : !syntaxPass
        ? "FAIL — SYNTAX"
        : mirror === "FAIL"
          ? "FAIL — MIRROR"
          : !studyParityPass
            ? "FAIL — STUDY PARITY"
            : !sectionAccentsPass
              ? "FAIL — SECTIONACCENTS"
              : DRY_RUN
                ? "DRY_RUN NOT CLOSED"
                : "ET_B2_NSR_CLOSURE_PASS";

  const log = {
    studiesBefore,
    studiesAfter,
    lvStudies,
    expectedStudies: EXPECTED_STUDIES,
    sectionAccents: sa,
    removed,
    deChanges,
    mirror,
    syntaxPass,
    studyParityPass,
    sectionAccentsPass,
    finalVerdict,
    sectionAccentsRepair,
    B2_PRODUCTION_BLOB: DRY_RUN ? "N/A" : gitBlob("data/et/b2.js"),
  };

  fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2));

  const lines = [
    "# ET–DE B2 — final NSR closure",
    "",
    "**Scope:** TRUE_EXTRA_STUDY removal + study parity",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| Studies before | **${studiesBefore}** |`,
    `| Studies after | **${studiesAfter}** |`,
    `| LV MASTER studies | **${lvStudies}** |`,
    `| sectionAccents raw | **${sa.raw}** |`,
    `| sectionAccents deduped | **${sa.deduped}** |`,
    `| DE_CHANGES | **${deChanges}** |`,
    `| Study parity | **${studyParityPass ? "PASS" : "FAIL"}** |`,
    `| sectionAccents | **${sectionAccentsPass ? "PASS" : "FAIL"}** |`,
    "",
    "## TRUE_EXTRA_STUDY removals",
    "",
    ...removed.map((r) => `- **${r.de}** (${r.cardId}): ${r.status} — ${r.classification}`),
    "",
    `## FINAL VERDICT: **${finalVerdict}**`,
    "",
  ];
  fs.writeFileSync(REPORT_MD, lines.join("\n"));
  console.log(JSON.stringify(log, null, 2));

  if (!DRY_RUN && finalVerdict !== "ET_B2_NSR_CLOSURE_PASS") process.exit(1);
}

if (require.main === module) main();
