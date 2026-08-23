#!/usr/bin/env node
"use strict";
/**
 * ET–DE B1 final OWNER repair apply (4 linguistic LABOT + 11 Study REMOVE).
 * Usage: node scripts/apply-et-b1-final-owner-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry } = require("./lib/et-b1-owner-path");

const DRY_RUN = process.argv.includes("--dry-run");
const DATA_REL = "data/et/b1.js";
const FILES = [path.join(ROOT, DATA_REL), path.join(ROOT, "www/data/et/b1.js")];
const REPORT_MD = path.join(ROOT, "reports/et-b1-final-owner-repair-apply.md");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-b1-final-owner-apply-log.json");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

const LINGUISTIC_LABOT = [
  { auditId: "ET-B1-4250", cardId: "b1-anrichten-133", field: "etText", current: "tekitama", ownerNew: "kahju tekitama" },
  { auditId: "ET-B1-4257", cardId: "b1-Begleitung-294", field: "etText", current: "saatel", ownerNew: "kaasamine" },
  { auditId: "ET-B1-4303", cardId: "b1-halbtags-1182", field: "etText", current: "osaajaga", ownerNew: "pool tööpäeva" },
  { auditId: "ET-B1-4317", cardId: "b1-Kapelle-1467", field: "etText", current: "kapell", ownerNew: "kabel" },
];

const STUDY_REMOVE_IDS = [
  "b1-handarbeit",
  "b1-handwerk",
  "b1-heran",
  "b1-herbei",
  "b1-nation",
  "b1-rat",
  "b1-testen",
  "b1-überreden",
  "b1-überzeugen",
  "b1-vernunft",
  "b1-verstand",
];

const STUDY_REMOVE_META = {
  "b1-handarbeit": { de: "Handarbeit", index: 1190 },
  "b1-handwerk": { de: "Handwerk", index: 1197 },
  "b1-heran": { de: "heran", index: 1245 },
  "b1-herbei": { de: "herbei", index: 1249 },
  "b1-nation": { de: "Nation", index: 1964 },
  "b1-rat": { de: "Rat", index: 2224 },
  "b1-testen": { de: "testen", index: 2883 },
  "b1-überreden": { de: "überreden", index: 2956 },
  "b1-überzeugen": { de: "überzeugen", index: 2962 },
  "b1-vernunft": { de: "Vernunft", index: 3080 },
  "b1-verstand": { de: "Verstand", index: 3115 },
};

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const B1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.B1_WORDS = B1_WORDS;\n`,
    "utf8",
  );
}

function countStudies(words) {
  return words.filter((e) => e.study && typeof e.study === "object").length;
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

function countUnexpectedChanges(before, after, linguisticCards, removedIndices) {
  const allowedLv = new Set(linguisticCards.map((r) => r.cardId));
  const removed = new Set(removedIndices);
  let unexpected = 0;
  for (let i = 0; i < after.length; i++) {
    const b = before[i];
    const a = after[i];
    if (JSON.stringify(b) === JSON.stringify(a)) continue;
    const cardId = a.study?.id || `b1-${a.de}-${i}`;
    if (removed.has(i)) {
      const bNoStudy = { ...b };
      const aNoStudy = { ...a };
      delete bNoStudy.study;
      delete aNoStudy.study;
      if (JSON.stringify(bNoStudy) !== JSON.stringify(aNoStudy)) unexpected++;
      continue;
    }
    if (b.lv !== a.lv) {
      const entry = findEntry(after, cardId);
      const match = linguisticCards.find((r) => findEntry(after, r.cardId) === entry);
      if (match && a.lv === match.ownerNew) continue;
      unexpected++;
      continue;
    }
    unexpected++;
  }
  return unexpected;
}

function syntaxPass() {
  try {
    execSync(`node --check ${FILES[0]}`, { cwd: ROOT, stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function writeReport(log) {
  const s = log.summary;
  const lines = [
    "# ET–DE B1 — final OWNER repair apply",
    "",
    "**Authority:** `reports/et-b1-final-owner-decisions.md` (post PR #626)",
    `**Post-#626 MAIN:** \`49277b9f620931b909cc82c6c92b33cb4c9711ff\``,
    "**DE:** STRICT READ-ONLY",
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| LINGUISTIC_REQUESTED | **${s.linguisticRequested}** |`,
    `| LINGUISTIC_APPLIED_VERIFIED | **${s.linguisticAppliedVerified}** |`,
    `| CURRENT_VALUE_MISMATCH | **${s.currentValueMismatch}** |`,
    `| STUDY_REMOVE_REQUESTED | **${s.studyRemoveRequested}** |`,
    `| STUDY_REMOVE_VERIFIED | **${s.studyRemoveVerified}** |`,
    `| ET_STUDY_COUNT_BEFORE | **${s.etStudyBefore}** |`,
    `| ET_STUDY_COUNT_AFTER | **${s.etStudyAfter}** |`,
    `| LV_MASTER_STUDY_COUNT | **${s.lvStudyCount}** |`,
    `| DE_CHANGES | **${s.deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${s.unexpectedChanges}** |`,
    `| MIRROR | **${s.mirror}** |`,
    `| SYNTAX | **${s.syntax}** |`,
    `| PRODUCTION_BLOB_BEFORE | **${s.blobBefore}** |`,
    `| PRODUCTION_BLOB_AFTER | **${s.blobAfter}** |`,
    "",
    `## Verdict`,
    "",
    `**${s.verdict}**`,
    "",
  ];
  if (log.mismatches?.length) {
    lines.push("## Mismatches / skips", "", "| kind | auditId | cardId | detail |", "|------|---------|--------|--------|");
    for (const m of log.mismatches) lines.push(`| ${m.kind} | ${m.auditId || m.studyId} | ${m.cardId || "—"} | ${m.detail} |`);
    lines.push("");
  }
  lines.push("## Linguistic apply log", "", "| auditId | cardId | before | after | status |", "|---------|--------|--------|-------|--------|");
  for (const r of log.linguistic) {
    lines.push(`| ${r.auditId} | ${r.cardId} | ${r.before} | ${r.after} | ${r.status} |`);
  }
  lines.push("", "## Study remove log", "", "| studyId | index | de | status |", "|---------|-------|-----|--------|");
  for (const r of log.studyRemoves) {
    lines.push(`| ${r.studyId} | ${r.index} | ${r.de} | ${r.status} |`);
  }
  lines.push("", `_Applied: ${new Date().toISOString()}_`);
  fs.mkdirSync(path.dirname(REPORT_MD), { recursive: true });
  fs.writeFileSync(REPORT_MD, lines.join("\n"));
}

function main() {
  const beforeRef = path.join(ROOT, "reports/temp/et-b1-final-before-apply.js");
  fs.copyFileSync(FILES[0], beforeRef);
  process.env.ET_B1_FINAL_BEFORE = beforeRef;

  const beforeWords = loadWords(beforeRef);
  const lvWords = loadWords(path.join(ROOT, "data/b1.js"));
  const words = JSON.parse(JSON.stringify(beforeWords));
  const blobBefore = execSync(`git hash-object ${FILES[0]}`, { cwd: ROOT, encoding: "utf8" }).trim();

  const log = {
    linguistic: [],
    studyRemoves: [],
    mismatches: [],
    summary: {},
  };

  let linguisticApplied = 0;
  let currentMismatch = 0;
  let studyRemoveVerified = 0;

  for (const row of LINGUISTIC_LABOT) {
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      log.mismatches.push({ kind: "MISSING_CARD", auditId: row.auditId, cardId: row.cardId, detail: "card not found" });
      log.linguistic.push({ ...row, before: "", after: "", status: "MISSING_CARD" });
      continue;
    }
    const actual = entry.lv;
    if (String(actual) !== String(row.current)) {
      currentMismatch++;
      log.mismatches.push({
        kind: "CURRENT_VALUE_MISMATCH",
        auditId: row.auditId,
        cardId: row.cardId,
        detail: `expected "${row.current}", got "${actual}"`,
      });
      log.linguistic.push({ ...row, before: actual, after: "", status: "CURRENT_VALUE_MISMATCH" });
      continue;
    }
    entry.lv = row.ownerNew;
    linguisticApplied++;
    log.linguistic.push({ ...row, before: row.current, after: row.ownerNew, status: "APPLIED_VERIFIED" });
  }

  const removedIndices = [];
  for (const studyId of STUDY_REMOVE_IDS) {
    const meta = STUDY_REMOVE_META[studyId];
    const entry = findEntry(words, studyId);
    const idx = words.findIndex((e) => e.study?.id === studyId);
    if (!entry || idx < 0) {
      log.mismatches.push({ kind: "MISSING_STUDY_CARD", studyId, cardId: studyId, detail: "study card not found" });
      log.studyRemoves.push({ studyId, index: meta?.index, de: meta?.de, status: "MISSING_CARD" });
      continue;
    }
    if (!entry.study) {
      log.mismatches.push({ kind: "NO_STUDY", studyId, cardId: studyId, detail: "study object missing" });
      log.studyRemoves.push({ studyId, index: idx, de: entry.de, status: "NO_STUDY" });
      continue;
    }
    if (entry.de !== meta.de) {
      log.mismatches.push({
        kind: "DE_IDENTITY_MISMATCH",
        studyId,
        cardId: studyId,
        detail: `expected de=${meta.de}, got ${entry.de}`,
      });
      log.studyRemoves.push({ studyId, index: idx, de: entry.de, status: "DE_IDENTITY_MISMATCH" });
      continue;
    }
    if (idx !== meta.index) {
      log.mismatches.push({
        kind: "INDEX_MISMATCH",
        studyId,
        cardId: studyId,
        detail: `expected index ${meta.index}, got ${idx}`,
      });
      log.studyRemoves.push({ studyId, index: idx, de: entry.de, status: "INDEX_MISMATCH" });
      continue;
    }
    const lvEntry = lvWords[idx];
    if (lvEntry?.study) {
      log.mismatches.push({
        kind: "LV_HAS_STUDY",
        studyId,
        cardId: studyId,
        detail: "LV MASTER has study at same index — remove blocked",
      });
      log.studyRemoves.push({ studyId, index: idx, de: entry.de, status: "LV_HAS_STUDY" });
      continue;
    }
    delete entry.study;
    removedIndices.push(idx);
    studyRemoveVerified++;
    log.studyRemoves.push({ studyId, index: idx, de: entry.de, status: "REMOVED_VERIFIED" });
  }

  const etStudyBefore = countStudies(beforeWords);
  const etStudyAfter = countStudies(words);
  const lvStudyCount = countStudies(lvWords);

  if (!DRY_RUN) {
    for (const fp of FILES) writeWords(fp, words);
  }

  const afterWords = DRY_RUN ? words : loadWords(FILES[0]);
  const deChanges = verifyDeUnchanged(beforeWords, afterWords);
  const unexpectedChanges = countUnexpectedChanges(beforeWords, afterWords, LINGUISTIC_LABOT, removedIndices);
  const blobAfter = DRY_RUN ? blobBefore : execSync(`git hash-object ${FILES[0]}`, { cwd: ROOT, encoding: "utf8" }).trim();
  const mirror = DRY_RUN ? "DRY_RUN" : isSyncedWithWww(DATA_REL) ? "PASS" : "FAIL";
  const syntax = DRY_RUN ? "DRY_RUN" : syntaxPass() ? "PASS" : "FAIL";

  const pass =
    linguisticApplied === 4
    && studyRemoveVerified === 11
    && currentMismatch === 0
    && etStudyAfter === 324
    && lvStudyCount === 324
    && deChanges === 0
    && unexpectedChanges === 0
    && mirror === "PASS"
    && syntax === "PASS";

  log.summary = {
    linguisticRequested: 4,
    linguisticAppliedVerified: linguisticApplied,
    currentValueMismatch: currentMismatch,
    studyRemoveRequested: 11,
    studyRemoveVerified,
    etStudyBefore,
    etStudyAfter,
    lvStudyCount,
    deChanges,
    unexpectedChanges,
    mirror,
    syntax,
    blobBefore,
    blobAfter,
    verdict: pass ? "ET_B1_FINAL_OWNER_REPAIR_PASS" : "ET_B1_FINAL_OWNER_REPAIR_FAIL",
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  if (!DRY_RUN) {
    fs.writeFileSync(APPLY_LOG, JSON.stringify(log, null, 2));
    writeReport(log);
  }

  console.log(JSON.stringify(log.summary, null, 2));
  if (!DRY_RUN && !pass) process.exit(1);
}

if (require.main === module) main();
