#!/usr/bin/env node
"use strict";
/**
 * ET–DE A1 missing Study targeted regression (READ-ONLY).
 * Scope: 10 OWNER-applied Study objects per REPAIR_APPLY_SAFETY_STANDARD §12.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry: findEntryBase } = require("./lib/da-a1-owner-path");

const REPAIRS = path.join(ROOT, "reports/temp/et-a1-missing-study-repairs.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-a1-missing-study-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-a1-missing-study-targeted-regression.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-a1-missing-study-targeted-regression.json");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

function loadWords(rel) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, rel), "utf8"), ctx);
  return ctx.window.A1_WORDS;
}

function findEntry(words, cardId, de) {
  const base = findEntryBase(words, cardId);
  if (base) return base;
  const idxMatch = cardId.match(/-(\d+)$/);
  if (idxMatch && words[parseInt(idxMatch[1], 10)]) return words[parseInt(idxMatch[1], 10)];
  return words.find((e) => e.de === de) || null;
}

function studyWithoutAccents(study) {
  const copy = JSON.parse(JSON.stringify(study));
  delete copy.sectionAccents;
  return copy;
}

function main() {
  const repairs = JSON.parse(fs.readFileSync(REPAIRS, "utf8"));
  const applyLog = fs.existsSync(APPLY_LOG) ? JSON.parse(fs.readFileSync(APPLY_LOG, "utf8")) : null;
  const et = loadWords("data/et/a1.js");
  const lv = loadWords("data/a1.js");
  const findings = [];

  for (const row of repairs) {
    const entry = findEntry(et, row.cardId, row.de);
    if (!entry?.study) {
      findings.push({ severity: "CRITICAL", cardId: row.cardId, de: row.de, reason: "missing study object" });
      continue;
    }
    const prod = studyWithoutAccents(entry.study);
    const owner = studyWithoutAccents(row.study);
    if (JSON.stringify(prod) !== JSON.stringify(owner)) {
      findings.push({ severity: "HIGH", cardId: row.cardId, de: row.de, reason: "OWNER content mismatch" });
    }
    const lvEntry = lv.find((e) => e.de === row.de);
    if (lvEntry?.study && entry.study.layout !== lvEntry.study.layout) {
      findings.push({ severity: "HIGH", cardId: row.cardId, de: row.de, reason: "layout mismatch vs LV" });
    }
  }

  execSync("node scripts/audit-et-a1-collect.js", { cwd: ROOT, stdio: "pipe" });
  const collect = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-a1-audit-data.json"), "utf8"));
  const studyIds = new Set(repairs.map((r) => r.study.id));
  for (const issue of collect.sectionAccents?.issues || []) {
    if (studyIds.has(issue.id)) {
      findings.push({ severity: "MEDIUM", cardId: issue.id, reason: issue.message, term: issue.term });
    }
  }
  for (const issue of collect.lvRemnants?.issues || []) {
    if (studyIds.has(issue.id)) {
      findings.push({ severity: "HIGH", cardId: issue.id, reason: "LV remnant", text: issue.text });
    }
  }

  let deChanges = 0;
  try {
    const before = execSync("git show origin/main:data/et/a1.js", { cwd: ROOT, encoding: "utf8" });
    const ctxB = vm.createContext({ window: {} });
    vm.runInContext(before, ctxB);
    const mainEt = ctxB.window.A1_WORDS;
    for (const row of repairs) {
      const mi = mainEt.findIndex((e) => e.de === row.de);
      const ni = et.findIndex((e) => e.de === row.de);
      if (mi < 0 || ni < 0) continue;
      for (const f of DE_FIELDS) {
        if (JSON.stringify(mainEt[mi]?.[f]) !== JSON.stringify(et[ni]?.[f])) deChanges++;
      }
    }
  } catch {
    deChanges = -1;
  }

  const studyCount = et.filter((e) => e.study).length;
  const mirrorPass = isSyncedWithWww("data/et/a1.js");
  const appliedVerified = applyLog?.summary?.appliedVerified ?? null;
  const pass =
    findings.length === 0 &&
    studyCount === 134 &&
    deChanges === 0 &&
    mirrorPass &&
    appliedVerified === 10;

  const payload = {
    scope: "10 missing Study OWNER apply",
    studyCount: `${studyCount}/134`,
    appliedVerified,
    deChanges,
    mirrorPass,
    findings: findings.length,
    findingDetails: findings,
    repairScopePass: pass,
    verdict: pass ? "ET–DE A1 MISSING STUDY: TARGETED REGRESSION PASS" : "ET–DE A1 MISSING STUDY: TARGETED REGRESSION FAIL",
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(
    REPORT_MD,
    [
      "# ET–DE A1 — Missing Study targeted regression",
      "",
      "**Standard:** `REPAIR_APPLY_SAFETY_STANDARD.md` §12",
      "**Scope:** 10 OWNER-applied Study objects",
      "",
      "| Metrika | Vērtība |",
      "|---------|---------|",
      `| Study count | **${studyCount}/134** |`,
      `| APPLIED_VERIFIED (apply log) | **${appliedVerified}** |`,
      `| DE changes (10 cards vs main) | **${deChanges}** |`,
      `| Mirror | **${mirrorPass ? "PASS" : "FAIL"}** |`,
      `| Findings in scope | **${findings.length}** |`,
      "",
      `## VERDICT: **${payload.verdict}**`,
      "",
    ].join("\n"),
  );

  console.log(JSON.stringify(payload, null, 2));
  if (!pass) process.exit(1);
}

main();
