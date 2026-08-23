#!/usr/bin/env node
"use strict";
/**
 * ET–DE B1 final targeted regression after final OWNER repair apply.
 * Usage: node scripts/audit-et-b1-final-targeted-regression.js [--json]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry } = require("./lib/et-b1-owner-path");
const { precheckAcceptedMapping } = require("./lib/et-b1-owner-accepted-resolve");

const JSON_OUT = process.argv.includes("--json");
const DATA_REL = "data/et/b1.js";
const FILES = [path.join(ROOT, DATA_REL), path.join(ROOT, "www/data/et/b1.js")];
const REPORT_MD = path.join(ROOT, "reports/et-b1-final-targeted-regression.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-b1-final-targeted-regression.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-b1-final-owner-apply-log.json");
const BEFORE_REF = process.env.ET_B1_FINAL_BEFORE || path.join(ROOT, "reports/temp/et-b1-final-before-apply.js");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

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

function verifyDeUnchanged(before, after) {
  let n = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) n++;
    }
  }
  return n;
}

function getField(entry, field) {
  if (field === "lv") return entry.lv;
  const m = field.match(/study\.examples\[(\d+)\]\.lv/);
  if (m) return entry.study?.examples?.[Number(m[1])]?.lv;
  return undefined;
}

function main() {
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(`git show HEAD:${DATA_REL} > ${BEFORE_REF} 2>/dev/null || git show origin/main:${DATA_REL} > ${BEFORE_REF}`, {
      cwd: ROOT,
      stdio: "pipe",
    });
  }

  const before = loadWords(BEFORE_REF);
  const after = loadWords(FILES[0]);
  const lv = loadWords(path.join(ROOT, "data/b1.js"));
  const applyLog = fs.existsSync(APPLY_LOG) ? JSON.parse(fs.readFileSync(APPLY_LOG, "utf8")) : null;

  const findings = [];
  const add = (severity, id, field, problem, detail = {}) => {
    findings.push({ severity, id, field, problem, ...detail });
  };

  const etStudy = countStudies(after);
  const lvStudy = countStudies(lv);
  if (etStudy !== 324) add("CRITICAL", "STRUCT", "study.count", `ET study count ${etStudy}, expected 324`);
  if (lvStudy !== 324) add("CRITICAL", "STRUCT", "lv.study.count", `LV study count ${lvStudy}`);

  for (const row of FINAL_LABOT) {
    const entry = findEntry(after, row.cardId);
    if (!entry || entry.lv !== row.ownerNew) {
      add("HIGH", row.auditId, "lv", "Final LABOT not applied", { expected: row.ownerNew, actual: entry?.lv });
    }
  }

  for (const row of NELABOT) {
    const entry = findEntry(after, row.cardId);
    const actual = getField(entry, row.field);
    const beforeEntry = findEntry(before, row.cardId);
    const beforeVal = getField(beforeEntry, row.field);
    if (String(actual) !== String(beforeVal) || String(actual) !== row.expected) {
      add("HIGH", row.auditId, row.field, "NELABOT field changed", { before: beforeVal, after: actual });
    }
  }

  for (const studyId of STUDY_REMOVE_IDS) {
    const entry = findEntry(after, studyId);
    if (entry?.study) add("HIGH", studyId, "study", "Study object still present after REMOVE");
  }

  let sectionAccentsRaw = null;
  let sectionAccentsDeduped = null;
  try {
    execSync("node scripts/audit-et-b1-collect.js", { cwd: ROOT, stdio: "pipe" });
    const collectData = JSON.parse(
      fs.readFileSync(path.join(ROOT, "reports/temp/et-b1-audit-data.json"), "utf8"),
    );
    sectionAccentsRaw = collectData.sectionAccents?.issues?.length ?? 0;
    if (sectionAccentsRaw !== 0) add("HIGH", "SECTIONACCENTS", "collect", `collect issues=${sectionAccentsRaw}`);

    const valOut = execSync("node scripts/validate-study-design.js --lang=et --level=b1", {
      cwd: ROOT,
      encoding: "utf8",
    });
    const valData = JSON.parse(valOut);
    const b1 = valData.perFile?.find((f) => f.file === DATA_REL);
    if (b1?.sectionAccentIssues !== 0) {
      add("HIGH", "SECTIONACCENTS", "validate", `validate issues=${b1?.sectionAccentIssues}`);
    }
    sectionAccentsDeduped = sectionAccentsRaw;
  } catch (e) {
    add("CRITICAL", "SECTIONACCENTS", "regression", `sectionAccents check failed: ${e.message}`);
  }

  let owner1054 = 0;
  try {
    const applyMap = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-b1-owner-apply-map.json"), "utf8"));
    const { getAt } = require("./lib/et-b1-owner-path");
    let ok = 0;
    for (const row of applyMap.apply || []) {
      const entry = findEntry(after, row.cardId);
      if (!entry) continue;
      const val = row.field === "lv" || row.field === "etText" ? entry.lv : getAt(entry, row.field);
      if (String(val) === String(row.ownerNew)) ok++;
    }
    owner1054 = ok;
    if (ok !== 1054) add("CRITICAL", "OWNER1054", "retention", `1054 LABOT retained ${ok}/1054`);
  } catch (e) {
    add("CRITICAL", "OWNER1054", "retention", `apply map check failed: ${e.message}`);
  }

  const deChanges = verifyDeUnchanged(before, after);
  if (deChanges > 0) add("CRITICAL", "DE", "fields", `${deChanges} DE field changes`);

  const mirrorPass = isSyncedWithWww(DATA_REL);
  if (!mirrorPass) add("HIGH", "MIRROR", "data↔www", "Mirror fail");

  let syntaxPass = true;
  try {
    execSync(`node --check ${FILES[0]}`, { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("CRITICAL", "SYNTAX", "check", "Syntax fail");
  }

  const linguisticVerified = applyLog?.summary?.linguisticAppliedVerified ?? FINAL_LABOT.length;
  const studyRemoveVerified = applyLog?.summary?.studyRemoveVerified ?? 0;

  const pass =
    findings.length === 0
    && linguisticVerified === 4
    && studyRemoveVerified === 11
    && etStudy === 324
    && lvStudy === 324
    && deChanges === 0
    && mirrorPass
    && syntaxPass
    && sectionAccentsRaw === 0
    && owner1054 === 1054;

  const result = {
    verdict: pass ? "ET_B1_FINAL_TARGETED_REGRESSION_PASS" : "ET_B1_FINAL_TARGETED_REGRESSION_FAIL",
    linguisticRequested: 4,
    linguisticAppliedVerified: linguisticVerified,
    studyRemoveRequested: 11,
    studyRemoveVerified,
    etStudyCount: etStudy,
    lvMasterStudyCount: lvStudy,
    studyParity: etStudy === lvStudy && etStudy === 324 ? "PASS" : "FAIL",
    owner1054Retained: owner1054,
    sectionAccentsRaw,
    sectionAccentsDeduped,
    nelabotRetained: NELABOT.length - findings.filter((f) => f.problem === "NELABOT field changed").length,
    deChanges,
    mirrorPass,
    syntaxPass,
    findings: findings.length,
    findingDetails: findings,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(result, null, 2));

  const md = [
    "# ET–DE B1 final targeted regression",
    "",
    `**Verdict:** ${result.verdict}`,
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| LINGUISTIC_APPLIED_VERIFIED | ${result.linguisticAppliedVerified}/4 |`,
    `| STUDY_REMOVE_VERIFIED | ${result.studyRemoveVerified}/11 |`,
    `| ET_STUDY_COUNT | ${result.etStudyCount} |`,
    `| LV_MASTER_STUDY_COUNT | ${result.lvMasterStudyCount} |`,
    `| STUDY_PARITY | ${result.studyParity} |`,
    `| OWNER_1054_RETAINED | ${result.owner1054Retained}/1054 |`,
    `| SECTIONACCENTS_RAW | ${result.sectionAccentsRaw} |`,
    `| DE_CHANGES | ${result.deChanges} |`,
    `| MIRROR | ${result.mirrorPass ? "PASS" : "FAIL"} |`,
    `| SYNTAX | ${result.syntaxPass ? "PASS" : "FAIL"} |`,
    `| Findings | ${result.findings} |`,
    "",
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
