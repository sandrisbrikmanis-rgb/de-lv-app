#!/usr/bin/env node
"use strict";
/**
 * ET–DE C1/C2 targeted regression after OWNER 76 LABOT apply (READ-ONLY).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry, getAt, normalizeField } = require("./lib/et-c1c2-owner-path");
const { parsePipeRows } = require("./lib/et-c1c2-owner-accepted-parse");

const APPLY_MAP = path.join(ROOT, "reports/temp/et-c1c2-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-c1c2-owner-apply-log.json");
const ACCEPTED_MD = path.join(ROOT, "reports/et-c1c2-owner-decisions-accepted.md");
const REPORT_MD = path.join(ROOT, "reports/et-c1c2-targeted-regression-audit.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-c1c2-targeted-regression-audit.json");
const BEFORE_C1 = process.env.ET_C1_BEFORE || "/tmp/et-c1-before-apply.js";
const BEFORE_C2 = process.env.ET_C2_BEFORE || "/tmp/et-c2-before-apply.js";
const EXPECTED_LABOT = 76;
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

const LV_DIAC = /[āēīūģķļņšĀĒĪŪĢĶĻŅ]/;

function loadWords(filePath, key) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function readCurrent(entry, field) {
  const f = normalizeField(field);
  if (f === "lv") return entry.lv;
  return getAt(entry, f);
}

function walkDiff(before, after, prefix = "", out = []) {
  if (before === after) return out;
  if (typeof before !== typeof after || before == null || after == null) {
    out.push({ path: prefix, before, after });
    return out;
  }
  if (typeof before === "string" || typeof before === "number" || typeof before === "boolean") {
    if (before !== after) out.push({ path: prefix, before, after });
    return out;
  }
  if (Array.isArray(before) && Array.isArray(after)) {
    const len = Math.max(before.length, after.length);
    for (let i = 0; i < len; i++) walkDiff(before[i], after[i], `${prefix}[${i}]`, out);
    return out;
  }
  if (typeof before === "object" && typeof after === "object") {
    const keys = new Set([...Object.keys(before || {}), ...Object.keys(after || {})]);
    for (const k of keys) walkDiff(before[k], after[k], prefix ? `${prefix}.${k}` : k, out);
  }
  return out;
}

function ensureBefore(ref, gitPath) {
  if (!fs.existsSync(ref)) {
    execSync(`git show HEAD:${gitPath} > ${ref} 2>/dev/null || git show origin/main:${gitPath} > ${ref}`, {
      cwd: ROOT,
      stdio: "pipe",
    });
  }
}

function main() {
  ensureBefore(BEFORE_C1, "data/et/c1.js");
  ensureBefore(BEFORE_C2, "data/et/c2.js");

  const beforeC1 = loadWords(BEFORE_C1, "C1_WORDS");
  const beforeC2 = loadWords(BEFORE_C2, "C2_WORDS");
  const afterC1 = loadWords(path.join(ROOT, "data/et/c1.js"), "C1_WORDS");
  const afterC2 = loadWords(path.join(ROOT, "data/et/c2.js"), "C2_WORDS");
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const applyLog = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const acceptedRows = parsePipeRows(fs.readFileSync(ACCEPTED_MD, "utf8"));

  const findings = [];
  let fid = 0;
  function add(severity, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({ id: `ET-C1C2-REG-${String(fid).padStart(4, "0")}`, severity, cardId, field, problem, ...detail });
  }

  let deChanges = 0;
  for (const [level, before, after] of [
    ["c1", beforeC1, afterC1],
    ["c2", beforeC2, afterC2],
  ]) {
    for (let i = 0; i < after.length; i++) {
      for (const f of DE_FIELDS) {
        if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
      }
    }
    const expectedCards = level === "c1" ? 572 : 219;
    if (after.length !== expectedCards) {
      add("CRITICAL", `STRUCT-${level}`, "cardCount", `Expected ${expectedCards}, got ${after.length}`);
    }
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de.fields", `${deChanges} DE field changes`, { deChanges });

  const mirrorC1 = isSyncedWithWww("data/et/c1.js");
  const mirrorC2 = isSyncedWithWww("data/et/c2.js");
  if (!mirrorC1) add("HIGH", "MIRROR", "c1", "C1 production mirror not identical");
  if (!mirrorC2) add("HIGH", "MIRROR", "c2", "C2 production mirror not identical");

  let syntaxPass = true;
  try {
    execSync("node --check data/et/c1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/c1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("CRITICAL", "SYNTAX", "node --check", "Syntax check failed");
  }

  for (const row of applyMap.apply) {
    const words = row.level === "c2" ? afterC2 : afterC1;
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      add("HIGH", row.cardId, row.field, "OWNER LABOT card not found", { auditId: row.auditId });
      continue;
    }
    const actual = readCurrent(entry, row.field);
    if (String(actual) !== String(row.ownerNew)) {
      add("HIGH", row.cardId, row.field, "OWNER NEW mismatch after apply", {
        auditId: row.auditId,
        expected: String(row.ownerNew).slice(0, 120),
        actual: String(actual).slice(0, 120),
      });
    }
    if (LV_DIAC.test(String(actual))) {
      add("MEDIUM", row.cardId, row.field, "LV diacritic remnant in applied ET field", {
        auditId: row.auditId,
        sample: String(actual).slice(0, 80),
      });
    }
  }

  const nonLabot = acceptedRows.filter((r) => r.status !== "LABOT");
  for (const row of nonLabot) {
    if (row.cardId.startsWith("STRUCT") || /sectionAccents/i.test(row.field)) continue;
    const level = row.cardId.startsWith("c2-") ? "c2" : "c1";
    const before = level === "c2" ? beforeC2 : beforeC1;
    const after = level === "c2" ? afterC2 : afterC1;
    const entryBefore = findEntry(before, row.cardId);
    const entryAfter = findEntry(after, row.cardId);
    if (!entryBefore || !entryAfter) continue;
    const field = normalizeField(row.field);
    if (!field) continue;
    const bVal = readCurrent(entryBefore, field);
    const aVal = readCurrent(entryAfter, field);
    if (String(bVal) !== String(aVal)) {
      add("HIGH", row.cardId, field, `${row.status} field changed during apply`, {
        auditId: row.auditId,
        before: String(bVal).slice(0, 80),
        after: String(aVal).slice(0, 80),
      });
    }
  }

  const expectedChanged = new Set(applyMap.apply.map((r) => `${r.level}|${r.cardId}|${r.field}`));
  for (const [level, before, after] of [
    ["c1", beforeC1, afterC1],
    ["c2", beforeC2, afterC2],
  ]) {
    for (let i = 0; i < after.length; i++) {
      const diffs = walkDiff(before[i], after[i]);
      if (!diffs.length) continue;
      const cardId = after[i].study?.id || `${level}-${after[i].de}-${i}`;
      for (const d of diffs) {
        if (DE_FIELDS.includes(d.path) || d.path.startsWith("de")) continue;
        const fieldGuess = d.path === "lv" ? "lv" : d.path.startsWith("study.") ? d.path : `study.${d.path}`;
        const key = `${level}|${cardId}|${fieldGuess}`;
        if (!expectedChanged.has(key) && !applyMap.apply.some((r) => r.cardId === cardId && (r.field === fieldGuess || r.field === d.path))) {
          add("MEDIUM", cardId, d.path, "Unexpected production change", {
            before: String(d.before).slice(0, 60),
            after: String(d.after).slice(0, 60),
          });
        }
      }
    }
  }

  const critical = findings.filter((f) => f.severity === "CRITICAL").length;
  const high = findings.filter((f) => f.severity === "HIGH").length;
  const appliedVerified = applyLog.summary?.appliedVerified ?? 0;

  const pass =
    critical === 0 &&
    high === 0 &&
    deChanges === 0 &&
    mirrorC1 &&
    mirrorC2 &&
    syntaxPass &&
    appliedVerified === EXPECTED_LABOT &&
    (applyLog.summary?.currentValueMismatch ?? 0) === 0;

  const verdict = pass ? "ET_C1C2_TARGETED_REGRESSION_PASS" : "ET_C1C2_TARGETED_REGRESSION_FAIL";

  const report = {
    generatedAt: new Date().toISOString(),
    verdict,
    appliedVerified,
    deChanges,
    mirrorC1,
    mirrorC2,
    syntaxPass,
    c1Studies: afterC1.filter((e) => e.study).length,
    c2Studies: afterC2.filter((e) => e.study).length,
    findingsCount: findings.length,
    critical,
    high,
    findings,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));

  const md = [
    "# ET–DE C1/C2 — targeted regression audit",
    "",
    `**Verdict:** **${verdict}**`,
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| APPLIED_VERIFIED | **${appliedVerified}/${EXPECTED_LABOT}** |`,
    `| DE_CHANGES | **${deChanges}** |`,
    `| Mirror C1 | **${mirrorC1 ? "PASS" : "FAIL"}** |`,
    `| Mirror C2 | **${mirrorC2 ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| C1 studies | **${report.c1Studies}** |`,
    `| C2 studies | **${report.c2Studies}** |`,
    `| Findings | **${findings.length}** (CRITICAL ${critical}, HIGH ${high}) |`,
    "",
  ];
  if (findings.length) {
    md.push("## Findings", "", "| ID | Sev | Card | Problem |", "|----|-----|------|---------|");
    for (const f of findings.slice(0, 40)) {
      md.push(`| ${f.id} | ${f.severity} | ${f.cardId} | ${f.problem} |`);
    }
    md.push("");
  }
  fs.writeFileSync(REPORT_MD, md.join("\n"));
  console.log(JSON.stringify({ verdict, appliedVerified, deChanges, critical, high }, null, 2));
  if (!pass) process.exit(1);
}

main();
