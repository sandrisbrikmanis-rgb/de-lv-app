#!/usr/bin/env node
"use strict";
/**
 * ET–DE B1 sectionAccents post-repair regression (READ-ONLY).
 * Usage: node scripts/audit-et-b1-sectionaccents-regression.js [--json]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const {
  B1_FILES,
  loadWords,
  verifyDeUnchanged,
  verifyEtProseUnchanged,
  accentTermMatches,
} = require("./lib/et-b1-sectionaccents-fix");

const JSON_OUT = process.argv.includes("--json");
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const DATA_REL = "data/et/b1.js";
const REPORT_MD = path.join(ROOT, "reports/et-b1-sectionaccents-regression.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-b1-sectionaccents-regression.json");

function gitBlob(filePath) {
  return execSync(`git hash-object ${filePath}`, { cwd: ROOT, encoding: "utf8" }).trim();
}

function checkSyntax() {
  try {
    execSync(`node --check ${B1_FILES[0]}`, { cwd: ROOT, stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function countValidateStudyDesignIssues() {
  const out = execSync("node scripts/validate-study-design.js --lang=et --level=b1", {
    cwd: ROOT,
    encoding: "utf8",
  });
  const data = JSON.parse(out);
  const b1 = data.perFile?.find((f) => f.file === DATA_REL);
  return b1?.sectionAccentIssues ?? null;
}

function countFieldAwareIssues(words) {
  const issues = [];
  for (const card of words) {
    const study = card.study;
    if (!study?.sectionAccents) continue;
    const sa = study.sectionAccents;
    const cardId = study.id || card.de;
    const checkMap = (sectionKey, index, field, accentMap) => {
      if (!accentMap || typeof accentMap !== "object") return;
      for (const color of ACCENT_COLORS) {
        if (!Array.isArray(accentMap[color])) continue;
        for (const term of accentMap[color]) {
          const raw = String(term || "").trim();
          if (!raw) {
            issues.push({ cardId, section: sectionKey, index, field, color, term: raw, reason: "empty" });
            continue;
          }
          if (!accentTermMatches(study, sectionKey, index, field, raw)) {
            issues.push({ cardId, field: `study.sectionAccents (${sectionKey})`, term: raw, section: sectionKey, index, subField: field, color });
          }
        }
      }
    };
    for (const [sectionKey, rules] of Object.entries(sa)) {
      if (Array.isArray(rules)) {
        rules.forEach((entry, index) => {
          if (!entry || typeof entry !== "object") return;
          const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry[c]));
          if (hasColors) checkMap(sectionKey, index, null, entry);
          else for (const field of Object.keys(entry)) checkMap(sectionKey, index, field, entry[field]);
        });
      } else if (rules && typeof rules === "object") {
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
        if (hasColors) checkMap(sectionKey, null, null, rules);
        else for (const [field, map] of Object.entries(rules)) checkMap(sectionKey, null, field, map);
      }
    }
  }
  return issues;
}

function buildSectionAccentsFindings(collectIssues, validateIssues, fieldAwareIssues) {
  const all = [];
  let seq = 1;
  for (const issue of collectIssues) {
    all.push({
      findingId: `ET-B1-SA-${String(seq++).padStart(4, "0")}`,
      cardId: issue.id,
      field: `study.sectionAccents (${issue.section || "?"})`,
      category: "SECTIONACCENTS_LANGUAGE",
      currentEt: issue.term || issue.message,
    });
  }
  for (const issue of validateIssues) {
    all.push({
      findingId: `ET-B1-SA-${String(seq++).padStart(4, "0")}`,
      cardId: `b1-${issue.de}`,
      field: `study.sectionAccents.${issue.section}.${issue.field}`,
      category: "SECTIONACCENTS_LANGUAGE",
      currentEt: issue.term,
    });
  }
  for (const issue of fieldAwareIssues) {
    all.push({
      findingId: `ET-B1-SA-${String(seq++).padStart(4, "0")}`,
      cardId: issue.cardId,
      field: issue.field,
      category: "SECTIONACCENTS_LANGUAGE",
      currentEt: issue.term,
    });
  }
  const seen = new Set();
  return all.filter((f) => {
    const key = `${f.cardId}|${f.field}|${f.currentEt}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function countOwner1054() {
  const out = execSync("node scripts/audit-et-b1-targeted-regression.js", { cwd: ROOT, encoding: "utf8" });
  const m = out.match(/"appliedVerified":\s*(\d+)/);
  return m ? Number(m[1]) : null;
}

function main() {
  execSync("node scripts/audit-et-b1-collect.js", { cwd: ROOT, stdio: "pipe" });
  const collectData = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/et-b1-audit-data.json"), "utf8"),
  );
  const collectIssues = collectData.sectionAccents?.issues || [];

  const validateOut = execSync("node scripts/validate-study-design.js --lang=et --level=b1", {
    cwd: ROOT,
    encoding: "utf8",
  });
  const validateData = JSON.parse(validateOut);
  const b1Validate = validateData.perFile?.find((f) => f.file === DATA_REL);
  const validateExamples = b1Validate?.examples?.sectionAccentIssues || [];

  const words = loadWords(B1_FILES[0]);
  const beforeRef = process.env.ET_B1_SA_BEFORE || `/tmp/et-b1-sa-before.js`;
  let deChanges = 0;
  let etProseChanges = 0;
  if (fs.existsSync(beforeRef)) {
    const beforeWords = loadWords(beforeRef);
    deChanges = verifyDeUnchanged(beforeWords, words);
    etProseChanges = verifyEtProseUnchanged(beforeWords, words);
  }

  const fieldAwareIssues = countFieldAwareIssues(words);
  const findings = buildSectionAccentsFindings(collectIssues, validateExamples, fieldAwareIssues);
  const deduped = new Set(findings.map((f) => `${f.cardId}|${f.field}`));

  const blob = gitBlob(B1_FILES[0]);
  const mirrorPass = isSyncedWithWww(DATA_REL);
  const syntaxOk = checkSyntax();
  const owner1054 = countOwner1054();
  const validateSectionAccentIssues = b1Validate?.sectionAccentIssues ?? null;

  const pass =
    findings.length === 0
    && deduped.size === 0
    && collectIssues.length === 0
    && validateSectionAccentIssues === 0
    && fieldAwareIssues.length === 0
    && deChanges === 0
    && etProseChanges === 0
    && mirrorPass
    && syntaxOk
    && owner1054 === 1054;

  const result = {
    verdict: pass ? "ET_B1_SECTIONACCENTS_REGRESSION_PASS" : "ET_B1_SECTIONACCENTS_REGRESSION_FAIL",
    sectionAccentsRawAfter: findings.length,
    sectionAccentsDedupedAfter: deduped.size,
    collectSectionAccentsIssues: collectIssues.length,
    validateSectionAccentIssues,
    fieldAwareIssues: fieldAwareIssues.length,
    deChanges,
    etProseChanges,
    mirrorPass,
    syntaxPass: syntaxOk,
    owner1054Retained: owner1054,
    productionBlob: blob,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(result, null, 2));

  const md = [
    "# ET–DE B1 sectionAccents regression",
    "",
    `**Verdict:** ${result.verdict}`,
    "",
    "| Gate | Value |",
    "|---|---|",
    `| SECTIONACCENTS_RAW_AFTER | ${result.sectionAccentsRawAfter} |`,
    `| SECTIONACCENTS_DEDUPED_AFTER | ${result.sectionAccentsDedupedAfter} |`,
    `| collect issues | ${result.collectSectionAccentsIssues} |`,
    `| validate-study-design | ${result.validateSectionAccentIssues} |`,
    `| field-aware | ${result.fieldAwareIssues} |`,
    `| DE_CHANGES | ${result.deChanges} |`,
    `| ET_PROSE_CHANGES | ${result.etProseChanges} |`,
    `| MIRROR | ${result.mirrorPass ? "PASS" : "FAIL"} |`,
    `| SYNTAX | ${result.syntaxPass ? "PASS" : "FAIL"} |`,
    `| OWNER_1054_RETAINED | ${result.owner1054Retained}/1054 |`,
    "",
  ].join("\n");
  fs.writeFileSync(REPORT_MD, md);

  if (JSON_OUT) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(result.verdict);
    console.log(JSON.stringify(result, null, 2));
  }

  if (!pass) process.exit(1);
}

if (require.main === module) main();
