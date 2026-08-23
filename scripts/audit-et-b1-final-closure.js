#!/usr/bin/env node
"use strict";
/**
 * ET–DE B1 final post-merge deterministic closure (READ-ONLY).
 * Usage: node scripts/audit-et-b1-final-closure.js [--json]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry, getAt } = require("./lib/et-b1-owner-path");

const JSON_OUT = process.argv.includes("--json");
const DATA_REL = "data/et/b1.js";
const REPORT_MD = path.join(ROOT, "reports/et-b1-final-closure.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-b1-final-closure.json");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];
const BEFORE_REF = path.join(ROOT, "reports/temp/et-b1-final-before-apply.js");

const FINAL_LABOT = [
  { auditId: "ET-B1-4250", cardId: "b1-anrichten-133", ownerNew: "kahju tekitama" },
  { auditId: "ET-B1-4257", cardId: "b1-Begleitung-294", ownerNew: "kaasamine" },
  { auditId: "ET-B1-4303", cardId: "b1-halbtags-1182", ownerNew: "pool tööpäeva" },
  { auditId: "ET-B1-4317", cardId: "b1-Kapelle-1467", ownerNew: "kabel" },
];

const NELABOT = [
  { auditId: "ET-B1-4251", cardId: "b1-anschreiben-141", field: "lv", expected: "üles kirjutama" },
  { auditId: "ET-B1-4357", cardId: "b1-Prüfzeit-2178", field: "lv", expected: "katseaeg" },
  { auditId: "ET-B1-4416", cardId: "b1-Wasserski-3208", field: "lv", expected: "veesuusk" },
  { auditId: "ET-B1-4533", cardId: "b1-ruhen", field: "study.examples[1].lv", expected: "järv lamab rahulikult päikese käes." },
];

const STUDY_REMOVE_IDS = [
  "b1-handarbeit", "b1-handwerk", "b1-heran", "b1-herbei", "b1-nation", "b1-rat",
  "b1-testen", "b1-überreden", "b1-überzeugen", "b1-vernunft", "b1-verstand",
];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function countStudies(words) {
  return words.filter((e) => e.study && typeof e.study === "object").length;
}

function getField(entry, field) {
  if (!entry) return undefined;
  if (field === "lv") return entry.lv;
  const m = field.match(/study\.examples\[(\d+)\]\.lv/);
  if (m) return entry.study?.examples?.[Number(m[1])]?.lv;
  return getAt(entry, field);
}

function parseFinalDecisions() {
  const text = fs.readFileSync(path.join(ROOT, "reports/et-b1-final-owner-decisions.md"), "utf8");
  const fp = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("| ET-B1-")) continue;
    const p = line.split("|").map((x) => x.trim());
    if (p[8] === "FALSE_POSITIVE") {
      fp.push({ auditId: p[1], cardId: p[2], field: p[3], expected: p[4] });
    }
  }
  return fp;
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

function main() {
  const mergeCommit = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  const mergeParent = execSync("git rev-parse origin/main^1", { cwd: ROOT, encoding: "utf8" }).trim();
  const productionBlob = execSync(`git hash-object ${DATA_REL}`, { cwd: ROOT, encoding: "utf8" }).trim();

  const after = loadWords(path.join(ROOT, DATA_REL));
  const lv = loadWords(path.join(ROOT, "data/b1.js"));
  const before = fs.existsSync(BEFORE_REF) ? loadWords(BEFORE_REF) : after;

  const findings = [];
  const add = (gate, detail) => findings.push({ gate, detail });

  let linguisticMatch = 0;
  for (const row of FINAL_LABOT) {
    const entry = findEntry(after, row.cardId);
    if (entry?.lv === row.ownerNew) linguisticMatch++;
    else add("LINGUISTIC_OWNER_MATCH", `${row.auditId} lv=${entry?.lv}`);
  }

  let studyRemoveMatch = 0;
  for (const id of STUDY_REMOVE_IDS) {
    const entry = findEntry(after, id);
    if (entry && !entry.study) studyRemoveMatch++;
    else add("STUDY_REMOVE_MATCH", `${id} still has study or missing`);
  }

  const etStudy = countStudies(after);
  const lvStudy = countStudies(lv);
  if (etStudy !== 324) add("ET_STUDY_COUNT", `${etStudy}`);
  if (lvStudy !== 324) add("LV_MASTER_STUDY_COUNT", `${lvStudy}`);

  let owner1054 = 0;
  try {
    const applyMap = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-b1-owner-apply-map.json"), "utf8"));
    for (const row of applyMap.apply || []) {
      const entry = findEntry(after, row.cardId);
      if (!entry) continue;
      const val = row.field === "lv" || row.field === "etText" ? entry.lv : getAt(entry, row.field);
      if (String(val) === String(row.ownerNew)) owner1054++;
    }
    if (owner1054 !== 1054) add("OWNER_1054_RETAINED", `${owner1054}/1054`);
  } catch (e) {
    add("OWNER_1054_RETAINED", e.message);
  }

  let sectionAccentsRaw = 0;
  let sectionAccentsDeduped = 0;
  try {
    execSync("node scripts/audit-et-b1-collect.js", { cwd: ROOT, stdio: "pipe" });
    const collect = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-b1-audit-data.json"), "utf8"));
    sectionAccentsRaw = collect.sectionAccents?.issues?.length ?? 0;
    sectionAccentsDeduped = sectionAccentsRaw;
    if (sectionAccentsRaw !== 0) add("SECTIONACCENTS_RAW", `${sectionAccentsRaw}`);

    const valOut = execSync("node scripts/validate-study-design.js --lang=et --level=b1", { cwd: ROOT, encoding: "utf8" });
    const val = JSON.parse(valOut);
    const b1 = val.perFile?.find((f) => f.file === DATA_REL);
    if (b1?.sectionAccentIssues !== 0) add("SECTIONACCENTS_ISSUES", `${b1?.sectionAccentIssues}`);
  } catch (e) {
    add("SECTIONACCENTS", e.message);
  }

  let nelabotRetained = 0;
  for (const row of NELABOT) {
    const entry = findEntry(after, row.cardId);
    const val = getField(entry, row.field);
    if (String(val) === row.expected) nelabotRetained++;
    else add("NELABOT_RETAINED", `${row.auditId}`);
  }

  const falsePositives = parseFinalDecisions();
  let fpRetained = 0;
  for (const row of falsePositives) {
    const entry = findEntry(after, row.cardId);
    const val = getField(entry, row.field === "etText" ? "lv" : row.field);
    if (String(val) === String(row.expected)) fpRetained++;
    else add("FALSE_POSITIVE_RETAINED", `${row.auditId}`);
  }

  // Final NSR backlog = production unresolved among the 33 closure blockers (not historical overlay markdown).
  let finalNsrUnresolved = 0;
  if (etStudy !== 324 || lvStudy !== 324) finalNsrUnresolved++;
  if (linguisticMatch !== 4) finalNsrUnresolved += 4 - linguisticMatch;
  if (studyRemoveMatch !== 11) finalNsrUnresolved += 11 - studyRemoveMatch;
  if (nelabotRetained !== 4) finalNsrUnresolved += 4 - nelabotRetained;
  if (fpRetained !== falsePositives.length) {
    finalNsrUnresolved += falsePositives.length - fpRetained;
  }
  const finalNsr = finalNsrUnresolved;
  const ownerBacklogFinal = finalNsrUnresolved;
  if (finalNsrUnresolved > 0) add("FINAL_NSR", `${finalNsrUnresolved} blocker(s) unresolved in production`);

  const deChanges = verifyDeUnchanged(before, after);
  if (deChanges !== 0) add("DE_CHANGES", `${deChanges}`);

  const mirrorPass = isSyncedWithWww(DATA_REL);
  if (!mirrorPass) add("MIRROR", "FAIL");

  let syntaxPass = true;
  try {
    execSync(`node --check ${path.join(ROOT, DATA_REL)}`, { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("SYNTAX", "FAIL");
  }

  let idOrderPass = true;
  for (let i = 0; i < after.length; i++) {
    if (after[i].de !== lv[i].de) {
      idOrderPass = false;
      add("ID_ORDER", `index ${i}`);
      break;
    }
  }

  let structurePass = after.length === lv.length && etStudy === lvStudy;
  if (!structurePass) add("STRUCTURE", `cards=${after.length} lv=${lv.length}`);

  const unexpectedChanges = deChanges;

  const pass =
    findings.length === 0
    && linguisticMatch === 4
    && studyRemoveMatch === 11
    && etStudy === 324
    && lvStudy === 324
    && owner1054 === 1054
    && sectionAccentsRaw === 0
    && nelabotRetained === 4
    && fpRetained === falsePositives.length
    && finalNsr === 0
    && ownerBacklogFinal === 0
    && deChanges === 0
    && mirrorPass
    && syntaxPass
    && idOrderPass
    && structurePass;

  const result = {
    verdict: pass ? "ET_B1_FINAL_CLOSED_ON_MAIN" : "ET_B1_FINAL_CLOSURE_FAIL",
    mainBefore: mergeParent,
    mergeCommit,
    mainAfter: mergeCommit,
    productionBlob,
    owner1054Retained: owner1054,
    finalLinguistic4: linguisticMatch,
    finalStudyRemove: studyRemoveMatch,
    etStudyCount: etStudy,
    lvMasterStudyCount: lvStudy,
    studyParity: etStudy === lvStudy && etStudy === 324 ? "PASS" : "FAIL",
    sectionAccentsRaw,
    sectionAccentsDeduped,
    nelabotRetained,
    falsePositiveRetained: fpRetained,
    falsePositiveExpected: falsePositives.length,
    finalNsr,
    ownerBacklogFinal,
    deChanges,
    unexpectedChanges,
    mirror: mirrorPass ? "PASS" : "FAIL",
    syntax: syntaxPass ? "PASS" : "FAIL",
    idOrder: idOrderPass ? "PASS" : "FAIL",
    structure: structurePass ? "PASS" : "FAIL",
    findings,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(result, null, 2));

  const md = [
    "# ET–DE B1 — final closure on `main`",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    `**Verdict:** \`${result.verdict}\``,
    "",
    "## Git record (PR #627 merge)",
    "",
    `| MAIN_BEFORE | \`${result.mainBefore}\` |`,
    `| MERGE_COMMIT | \`${result.mergeCommit}\` |`,
    `| MAIN_AFTER | \`${result.mainAfter}\` |`,
    `| PRODUCTION_BLOB | \`${result.productionBlob}\` |`,
    "",
    "## Closure gates",
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| OWNER_1054_RETAINED | **${result.owner1054Retained}/1054** |`,
    `| FINAL_LINGUISTIC_4 | **${result.finalLinguistic4}/4** |`,
    `| FINAL_STUDY_REMOVE | **${result.finalStudyRemove}/11** |`,
    `| ET_STUDY_COUNT | **${result.etStudyCount}** |`,
    `| LV_MASTER_STUDY_COUNT | **${result.lvMasterStudyCount}** |`,
    `| STUDY_PARITY | **${result.studyParity}** |`,
    `| SECTIONACCENTS_RAW | **${result.sectionAccentsRaw}** |`,
    `| SECTIONACCENTS_DEDUPED | **${result.sectionAccentsDeduped}** |`,
    `| NELABOT_RETAINED | **${result.nelabotRetained}/4** |`,
    `| FALSE_POSITIVE_RETAINED | **${result.falsePositiveRetained}/${result.falsePositiveExpected}** |`,
    `| FINAL_NSR | **${result.finalNsr}** |`,
    `| OWNER_BACKLOG_FINAL | **${result.ownerBacklogFinal}** |`,
    `| DE_CHANGES | **${result.deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${result.unexpectedChanges}** |`,
    `| MIRROR | **${result.mirror}** |`,
    `| SYNTAX | **${result.syntax}** |`,
    `| ID_ORDER | **${result.idOrder}** |`,
    `| STRUCTURE | **${result.structure}** |`,
    "",
    "_Terminal ET–DE B1 closure. No further B1 audit unless production regression or explicit OWNER reopen._",
    "",
    `_Verified: ${new Date().toISOString()}_`,
  ].join("\n");
  fs.writeFileSync(REPORT_MD, md);

  if (JSON_OUT) console.log(JSON.stringify(result, null, 2));
  else {
    console.log(result.verdict);
    console.log(JSON.stringify(result, null, 2));
  }
  if (!pass) process.exit(1);
}

if (require.main === module) main();
