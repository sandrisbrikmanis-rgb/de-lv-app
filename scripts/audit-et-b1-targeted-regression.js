#!/usr/bin/env node
"use strict";
/**
 * ET–DE B1 targeted regression after OWNER 1054 LABOT apply (READ-ONLY).
 * Usage: node scripts/audit-et-b1-targeted-regression.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry, getAt } = require("./lib/et-b1-owner-path");
const { precheckAcceptedMapping } = require("./lib/et-b1-owner-accepted-resolve");

const ET_FILE = path.join(ROOT, "data/et/b1.js");
const WWW_FILE = path.join(ROOT, "www/data/et/b1.js");
const LV_FILE = path.join(ROOT, "data/b1.js");
const DATA_REL = "data/et/b1.js";
const APPLY_LOG = path.join(ROOT, "reports/temp/et-b1-owner-apply-log.json");
const APPLY_MAP = path.join(ROOT, "reports/temp/et-b1-owner-apply-map.json");
const REPORT_MD = path.join(ROOT, "reports/et-b1-targeted-regression-audit.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-b1-targeted-regression-audit.json");
const BEFORE_REF = process.env.ET_B1_BEFORE || "/tmp/et-b1-before-apply.js";

const EXPECTED_CARDS = 3367;
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

const LV_DIAC = /[āēīūģķļņšĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|apmeklējums|apciemojums|tāpēc|peldēt|maksāt|Berlīnē|\bjūs\b|\bjums\b|\bjūsu\b|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stāstu|man jā|tev jā|mums jā|\brīsi\b|mācēt|\bprast\b|\bbraukt\b|\baizvest\b|\blūdzu\b|\blūgums\b|Man ir|Es esmu|Es gribu|Es redzu|Es stāstu|Es palīdzu|nāc iekšā|paliec|aiziet|mājās|skolā|darbā/i;

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b1-${entry.de}-${index}`;
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

function classifyForeign(text) {
  if (typeof text !== "string") return [];
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV_WORD");
  return reasons;
}

function readCurrent(entry, field) {
  if (field === "lv") return entry.lv;
  return getAt(entry, field);
}

function main() {
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(
      `git show HEAD:${DATA_REL} > ${BEFORE_REF} 2>/dev/null || git show origin/cursor/et-de-b1-owner-accepted-mapping-4a7c:${DATA_REL} > ${BEFORE_REF}`,
      { cwd: ROOT, stdio: "pipe" },
    );
  }

  const before = loadWords(BEFORE_REF);
  const after = loadWords(ET_FILE);
  const lvRef = loadWords(LV_FILE);
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const applyLog = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const pre = precheckAcceptedMapping();

  const findings = [];
  let fid = 0;
  function add(severity, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({ id: `ET-B1-REG-${String(fid).padStart(4, "0")}`, severity, cardId, field, problem, ...detail });
  }

  if (after.length !== EXPECTED_CARDS) {
    add("CRITICAL", "STRUCT", "cardCount", `Expected ${EXPECTED_CARDS}, got ${after.length}`);
  }

  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
    if (before[i]?.de !== lvRef[i]?.de) {
      add("CRITICAL", entryId(after[i], i), "de.order", "DE order mismatch vs LV etalon", { index: i });
    }
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de.fields", `${deChanges} DE field changes`, { deChanges });

  const mirrorPass = isSyncedWithWww("data/et/b1.js");
  if (!mirrorPass) add("HIGH", "MIRROR", "data↔www", "Production mirror not identical");

  let syntaxPass = true;
  try {
    execSync("node --check data/et/b1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/b1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("CRITICAL", "SYNTAX", "node --check", "Syntax check failed");
  }

  const studyCount = after.filter((e) => e.study).length;
  if (studyCount !== 335) {
    add("HIGH", "STRUCT", "study.count", `Study count ${studyCount} (ET-B1-0001 NSR expects unresolved 335 vs LV 324)`);
  }

  for (const row of applyMap.apply) {
    const entry = findEntry(after, row.cardId);
    if (!entry) {
      add("HIGH", row.cardId, row.field, "OWNER LABOT card not found");
      continue;
    }
    const actual = readCurrent(entry, row.field);
    if (String(actual) !== String(row.ownerNew)) {
      add("HIGH", row.cardId, row.field, "OWNER NEW mismatch after apply", {
        expected: String(row.ownerNew).slice(0, 120),
        actual: String(actual).slice(0, 120),
        auditId: row.auditId,
      });
    }
    const reasons = classifyForeign(String(actual));
    if (reasons.length) {
      add("MEDIUM", row.cardId, row.field, `LV remnant in applied field: ${reasons.join(", ")}`, {
        auditId: row.auditId,
        sample: String(actual).slice(0, 80),
      });
    }
  }

  const nonLabot = pre.rows.filter((r) => r.status !== "LABOT");
  for (const row of nonLabot) {
    const entryBefore = findEntry(before, row.cardId);
    const entryAfter = findEntry(after, row.cardId);
    if (!entryBefore || !entryAfter) continue;
    const field = row.field === "etText" ? "lv" : row.field.replace(/^entry\[\d+\]\./, "");
    const normField = field === "etText" ? "lv" : require("./lib/et-b1-owner-path").normalizeField(field);
    if (!normField || normField.startsWith("study.sectionAccents")) continue;
    const bVal = readCurrent(entryBefore, normField);
    const aVal = readCurrent(entryAfter, normField);
    if (String(bVal) !== String(aVal)) {
      const label = row.status;
      add("HIGH", row.cardId, normField, `${label} field changed during apply`, {
        auditId: row.auditId,
        before: String(bVal).slice(0, 80),
        after: String(aVal).slice(0, 80),
      });
    }
  }

  const changedCards = new Map();
  for (let i = 0; i < after.length; i++) {
    const diffs = walkDiff(before[i], after[i]);
    if (!diffs.length) continue;
    changedCards.set(entryId(after[i], i), { index: i, de: after[i].de, diffs });
  }

  const expectedChanged = new Set(applyMap.apply.map((r) => `${r.cardId}|${r.field}`));
  for (const [cardId, info] of changedCards) {
    for (const d of info.diffs) {
      if (DE_FIELDS.includes(d.path) || d.path.startsWith("de")) {
        continue;
      }
      const isLv = d.path === "lv";
      const fieldGuess = isLv ? "lv" : d.path.startsWith("study.") ? d.path : `study.${d.path}`;
      const key = `${cardId}|${fieldGuess}`;
      const altKey = `${cardId}|lv`;
      if (!expectedChanged.has(key) && !expectedChanged.has(altKey) && !applyMap.apply.some((r) => r.cardId === cardId && d.path.endsWith(r.field.split(".").pop()))) {
        add("MEDIUM", cardId, d.path, "Unexpected production change", {
          before: String(d.before).slice(0, 60),
          after: String(d.after).slice(0, 60),
        });
      }
    }
  }

  const critical = findings.filter((f) => f.severity === "CRITICAL").length;
  const high = findings.filter((f) => f.severity === "HIGH").length;
  const unexpectedChanges = findings.filter((f) => f.problem.includes("Unexpected")).length;

  const appliedVerified = applyLog.summary?.appliedVerified ?? 0;
  const pass =
    critical === 0 &&
    high === 0 &&
    deChanges === 0 &&
    mirrorPass &&
    syntaxPass &&
    appliedVerified === 1054 &&
    applyLog.summary?.currentValueMismatch === 0;

  const verdict = pass ? "ET_B1_TARGETED_REGRESSION_PASS" : "ET_B1_TARGETED_REGRESSION_FAIL";

  const report = {
    generatedAt: new Date().toISOString(),
    verdict,
    appliedVerified,
    deChanges,
    mirrorPass,
    syntaxPass,
    studyCount,
    changedCardCount: changedCards.size,
    findingsCount: findings.length,
    critical,
    high,
    unexpectedChanges,
    nelabotChanged: findings.filter((f) => f.problem?.includes("NELABOT")).length,
    nsrChanged: findings.filter((f) => f.problem?.includes("NEEDS_SOURCE_REVIEW") || f.problem?.includes("FALSE_POSITIVE")).length,
    findings,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));

  const md = [
    "# ET–DE B1 — targeted regression audit",
    "",
    `**Verdict:** **${verdict}**`,
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| APPLIED_VERIFIED | **${appliedVerified}/1054** |`,
    `| DE_CHANGES | **${deChanges}** |`,
    `| Mirror | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| Study count | **${studyCount}** |`,
    `| Changed cards | **${changedCards.size}** |`,
    `| Findings | **${findings.length}** (CRITICAL ${critical}, HIGH ${high}) |`,
    `| UNEXPECTED_CHANGES | **${unexpectedChanges}** |`,
    "",
  ];
  if (findings.length) {
    md.push("## Findings", "", "| ID | Severity | Card | Field | Problem |", "|----|----------|------|-------|---------|");
    for (const f of findings.slice(0, 40)) {
      md.push(`| ${f.id} | ${f.severity} | ${f.cardId} | ${f.field} | ${f.problem} |`);
    }
    if (findings.length > 40) md.push(`| … | | | | +${findings.length - 40} more |`);
  }
  fs.writeFileSync(REPORT_MD, md.join("\n"));
  console.log(JSON.stringify({ verdict, appliedVerified, deChanges, mirrorPass, syntaxPass, findings: findings.length }, null, 2));

  if (!pass) process.exit(1);
}

main();
