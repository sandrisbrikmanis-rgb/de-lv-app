#!/usr/bin/env node
"use strict";
/**
 * ET–DE B2 final targeted regression after OWNER apply + NSR closure.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry, normalizeField, getAt } = require("./lib/et-b2-owner-path");
const { countSectionAccentIssues } = require("./lib/et-c1c2-sectionaccents-validate");
const { parsePipeRows } = require("./lib/et-b2-owner-accepted-parse");

const REPORT_MD = path.join(ROOT, "reports/et-b2-final-targeted-regression.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-b2-final-targeted-regression.json");
const ACCEPTED = path.join(ROOT, "reports/et-b2-owner-decisions-accepted.md");
const APPLY_MAP = path.join(ROOT, "reports/temp/et-b2-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-b2-owner-apply-log.json");
const BEFORE_REF = process.env.ET_B2_BEFORE || "/tmp/et-b2-before-closure.js";
const REVAL_LOG = path.join(ROOT, "reports/temp/et-b2-owner-revalidation-apply-log.json");
const REVAL_MD = path.join(ROOT, "reports/et-b2-owner-decisions-accepted-owner-revalidated.md");
const MERGE_BASE = process.env.ET_B2_MERGE_BASE ||
  (fs.existsSync(REVAL_MD) ? "11c7a45a" : "ab1e95c3");
const EXPECTED_LABOT = 345;
const EXPECTED_FP = 10;
const EXPECTED_NELABOT = 0;
const EXPECTED_STUDIES = 60;
const EXPECTED_CARDS = 2118;
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];
const TRUE_EXTRA_DE = ["Genosse", "Genossin", "Neger", "Pacht"];

function loadB2(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function ensureBefore() {
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(`git show ${MERGE_BASE}:data/et/b2.js > ${BEFORE_REF}`, { cwd: ROOT, stdio: "pipe" });
  }
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
    for (let i = 0; i < Math.max(before.length, after.length); i++) walkDiff(before[i], after[i], `${prefix}[${i}]`, out);
    return out;
  }
  if (typeof before === "object" && typeof after === "object") {
    const keys = new Set([...Object.keys(before || {}), ...Object.keys(after || {})]);
    for (const k of keys) walkDiff(before[k], after[k], prefix ? `${prefix}.${k}` : k, out);
  }
  return out;
}

function readCurrent(entry, field) {
  const f = normalizeField(field);
  if (f === "lv") return entry.lv;
  return getAt(entry, f);
}

function isExpectedStudyRemoval(de, pathStr, before, after) {
  if (!TRUE_EXTRA_DE.includes(de)) return false;
  if (pathStr === "study" && before && !after) return true;
  return false;
}

function main() {
  ensureBefore();
  if (fs.existsSync(REVAL_MD)) {
    execSync("node scripts/build-et-b2-owner-apply-map.js --from-accepted", { cwd: ROOT, stdio: "pipe" });
  }
  const before = loadB2(BEFORE_REF);
  const after = loadB2(path.join(ROOT, "data/et/b2.js"));
  const lv = loadB2(path.join(ROOT, "data/b2.js"));
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const accepted = parsePipeRows(fs.readFileSync(ACCEPTED, "utf8"));

  const findings = [];
  let fid = 0;
  function add(sev, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({ id: `ET-B2-REG-${String(fid).padStart(4, "0")}`, severity: sev, cardId, field, problem, ...detail });
  }

  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
    if (before[i]?.de !== lv[i]?.de) add("CRITICAL", `b2-${after[i].de}`, "de.order", "DE order mismatch vs LV", { index: i });
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de", `${deChanges} DE changes`);

  if (after.length !== EXPECTED_CARDS) add("CRITICAL", "STRUCT", "cardCount", `cards ${after.length}`);

  const studies = after.filter((e) => e.study).length;
  const lvStudies = lv.filter((e) => e.study).length;
  if (studies !== EXPECTED_STUDIES) add("HIGH", "STRUCT", "study.count", `studies ${studies}`);
  if (studies !== lvStudies) add("HIGH", "STRUCT", "study.parity", `ET ${studies} vs LV ${lvStudies}`);

  const sa = countSectionAccentIssues(after);
  if (sa.raw > 0 || sa.deduped > 0) add("HIGH", "sectionAccents", "all", `sectionAccents ${sa.raw}/${sa.deduped}`);

  const mirrorPass = isSyncedWithWww("data/et/b2.js");
  if (!mirrorPass) add("HIGH", "MIRROR", "data↔www", "Mirror fail");

  let syntaxPass = true;
  try {
    execSync("node --check data/et/b2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/b2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("CRITICAL", "SYNTAX", "node --check", "Syntax fail");
  }

  for (const row of accepted) {
    if (row.status !== "LABOT") continue;
    if (row.cardId === "STRUCT" || row.auditId === "ET-B2-0001") continue;
    if (/sectionAccents/i.test(row.field)) continue;
    const entry = findEntry(after, row.cardId);
    if (!entry) {
      add("HIGH", row.cardId, row.field, "LABOT card missing", { auditId: row.auditId });
      continue;
    }
    const actual = readCurrent(entry, row.field);
    if (String(actual) !== String(row.ownerNew)) {
      add("HIGH", row.cardId, row.field, "OWNER NEW mismatch", {
        auditId: row.auditId,
        expected: row.ownerNew,
        actual,
      });
    }
  }

  const labotKeys = new Set(
    accepted
      .filter((r) => r.status === "LABOT" && r.cardId !== "STRUCT" && !/sectionAccents/i.test(r.field))
      .map((r) => `${r.cardId}|${normalizeField(r.field)}`),
  );
  let nelabotOk = 0;
  let fpOk = 0;
  let fpSuperseded = 0;
  for (const row of accepted) {
    if (row.status !== "NELABOT" && row.status !== "FALSE_POSITIVE") continue;
    if (row.cardId === "STRUCT" && row.field === "study.count" && row.status === "LABOT") {
      if (studies === EXPECTED_STUDIES && studies === lvStudies) {
        // structural LABOT ET-B2-0001 satisfied
      } else {
        add("HIGH", row.cardId, row.field, "STRUCT LABOT not resolved", { auditId: row.auditId });
      }
      continue;
    }
    if (row.cardId === "STRUCT" && row.field === "study.count" && row.status === "FALSE_POSITIVE") {
      if (studies === EXPECTED_STUDIES && studies === lvStudies) fpOk++;
      else add("HIGH", row.cardId, row.field, "STRUCT FALSE_POSITIVE not resolved", { auditId: row.auditId });
      continue;
    }
    const eb = findEntry(before, row.cardId);
    const ea = findEntry(after, row.cardId);
    if (!eb || !ea) continue;
    const field = row.field === "lv" ? "lv" : normalizeField(row.field);
    const same = String(readCurrent(eb, field)) === String(readCurrent(ea, field));
    const superseded = labotKeys.has(`${row.cardId}|${field}`);
    if (row.status === "FALSE_POSITIVE" && superseded) {
      fpSuperseded++;
      continue;
    }
    if (row.status === "NELABOT" && same) nelabotOk++;
    if (row.status === "FALSE_POSITIVE" && same) fpOk++;
    else if (
      row.status === "FALSE_POSITIVE" &&
      String(readCurrent(ea, field)) === String(row.current)
    ) {
      fpOk++;
      continue;
    }
    if (!same && row.status === "FALSE_POSITIVE" && TRUE_EXTRA_DE.includes(ea.de) && !ea.study) {
      fpOk++;
      continue;
    }
    if (!same) add("HIGH", row.cardId, row.field, `${row.status} changed`, { auditId: row.auditId });
  }

  const expectedLabotSet = labotKeys;
  const expectedLabotIndices = new Set();
  for (const row of accepted) {
    if (row.status !== "LABOT" || row.cardId === "STRUCT" || /sectionAccents/i.test(row.field)) continue;
    const hit = findEntry(after, row.cardId);
    if (hit) expectedLabotIndices.add(after.indexOf(hit));
  }

  let unexpected = 0;
  for (let i = 0; i < after.length; i++) {
    const diffs = walkDiff(before[i], after[i]);
    if (!diffs.length) continue;
    const entry = after[i];
    const cardId = entry.study?.id || `b2-${entry.de}`;
    const de = entry.de;
    for (const d of diffs) {
      if (DE_FIELDS.includes(d.path)) continue;
      if (expectedLabotIndices.has(i) && (d.path === "lv" || d.path.startsWith("study."))) continue;
      if (d.path === "lv" && expectedLabotSet.has(`${cardId}|lv`)) continue;
      if (d.path.startsWith("study.") && expectedLabotSet.has(`${cardId}|${d.path}`)) continue;
      if (isExpectedStudyRemoval(de, d.path, d.before, d.after)) continue;
      if (d.path.startsWith("study.sectionAccents")) continue;
      if (d.path === "lv") {
        const fpRow = accepted.find(
          (r) =>
            r.status === "FALSE_POSITIVE" &&
            (r.cardId === cardId || r.cardId === `b2-${de}` || findEntry(after, r.cardId) === entry) &&
            r.field === "lv" &&
            String(d.after) === String(r.current),
        );
        if (fpRow) continue;
      }
      unexpected++;
      add("MEDIUM", cardId, d.path, "Unexpected change", {
        before: String(d.before).slice(0, 80),
        after: String(d.after).slice(0, 80),
      });
    }
  }

  const critical = findings.filter((f) => f.severity === "CRITICAL").length;
  const high = findings.filter((f) => f.severity === "HIGH").length;
  const contentLabotRows = accepted.filter(
    (r) => r.status === "LABOT" && r.cardId !== "STRUCT" && !/sectionAccents/i.test(r.field),
  );
  let appliedVerified = 0;
  for (const row of contentLabotRows) {
    const entry = findEntry(after, row.cardId);
    if (!entry) continue;
    if (String(readCurrent(entry, row.field)) === String(row.ownerNew)) appliedVerified++;
  }
  const structuralLabotOk =
    studies === EXPECTED_STUDIES &&
    studies === lvStudies &&
    accepted.find((r) => r.auditId === "ET-B2-0001")?.status === "LABOT";
  const nsr = accepted.filter((r) => r.status === "NEEDS_SOURCE_REVIEW").length;

  const pass =
    critical === 0 &&
    high === 0 &&
    appliedVerified === contentLabotRows.length &&
    structuralLabotOk &&
    nelabotOk === EXPECTED_NELABOT &&
    fpOk + fpSuperseded === EXPECTED_FP &&
    nsr === 0 &&
    deChanges === 0 &&
    unexpected === 0 &&
    studies === EXPECTED_STUDIES &&
    studies === lvStudies &&
    sa.raw === 0 &&
    mirrorPass &&
    syntaxPass;

  const verdict = pass ? "ET_B2_FINAL_TARGETED_REGRESSION_PASS" : "ET_B2_FINAL_TARGETED_REGRESSION_FAIL";

  const report = {
    generatedAt: new Date().toISOString(),
    verdict,
    appliedVerified,
    nelabotOk,
    fpOk,
    fpSuperseded,
    nsr,
    deChanges,
    unexpectedChanges: unexpected,
    studies,
    lvStudies,
    sectionAccents: sa,
    mirrorPass,
    syntaxPass,
    findingsCount: findings.length,
    critical,
    high,
    findings,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));

  const md = [
    "# ET–DE B2 — final targeted regression",
    "",
    `**Verdict:** **${verdict}**`,
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| REQUESTED_LABOT | **${contentLabotRows.length}/${contentLabotRows.length}** |`,
    `| APPLIED_VERIFIED | **${appliedVerified}/${contentLabotRows.length}** |`,
    `| STRUCTURAL_LABOT (ET-B2-0001) | **${structuralLabotOk ? "PASS" : "FAIL"}** |`,
    `| NELABOT_RETAINED | **${nelabotOk}/${EXPECTED_NELABOT}** |`,
    `| FALSE_POSITIVE_RETAINED | **${fpOk + fpSuperseded}/${EXPECTED_FP}** |`,
    `| NEEDS_SOURCE_REVIEW | **${nsr}** |`,
    `| Study parity | **${studies === lvStudies && studies === EXPECTED_STUDIES ? "PASS" : "FAIL"}** (${studies}/${lvStudies}) |`,
    `| sectionAccents | **${sa.raw === 0 ? "PASS" : "FAIL"}** |`,
    `| DE_CHANGES | **${deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${unexpected}** |`,
    `| MIRROR | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| SYNTAX | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    "",
    `## Findings: ${findings.length} (CRITICAL ${critical}, HIGH ${high})`,
    "",
  ];
  fs.writeFileSync(REPORT_MD, md.join("\n"));
  console.log(JSON.stringify({ verdict, appliedVerified, unexpected, studies, sa }, null, 2));
  if (!pass) process.exit(1);
}

main();
