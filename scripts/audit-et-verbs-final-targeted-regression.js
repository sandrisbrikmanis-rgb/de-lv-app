#!/usr/bin/env node
"use strict";
/**
 * ET–DE Verbs targeted post-repair regression (OWNER retention + technical gates).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry, getEtValue, normalizeField, applyKey, FORM_KEYS } = require("./lib/et-verbs-owner-path");

const REPORT_MD = path.join(ROOT, "reports/et-verbs-final-targeted-regression.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-verbs-final-targeted-regression.json");
const RESOLVED = path.join(ROOT, "reports/temp/et-verbs-owner-resolved.json");
const APPLY_MAP = path.join(ROOT, "reports/temp/et-verbs-owner-apply-map.json");
const BEFORE_REF = process.env.ET_VERBS_BEFORE || "/tmp/et-verbs-before-repair.js";
const MERGE_BASE = process.env.ET_VERBS_MERGE_BASE || "078ea1b1";
const EXPECTED_VERBS = 189;
const EXPECTED_FORMS = 945;
const EXPECTED_LABOT = 183;
const EXPECTED_FP = 14;
const EXPECTED_UNIQUE = 171;

const PLACEHOLDER_PATTERNS = [
  "(Single natural Estonian form)",
  "(Distinct Estonian for this verb)",
  "(Natural Estonian:",
  "(Estonian",
  "(missing",
  "(needed",
];

function loadVerbs(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function ensureBefore() {
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(`git show ${MERGE_BASE}:data/et/verbs.js > ${BEFORE_REF}`, { cwd: ROOT, stdio: "pipe" });
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

function isPlaceholder(text) {
  const t = String(text || "").trim();
  if (!t) return false;
  for (const p of PLACEHOLDER_PATTERNS) {
    if (t.includes(p)) return true;
  }
  if (/^\([^)]+\)$/.test(t)) return true;
  return false;
}

function main() {
  ensureBefore();
  const resolved = JSON.parse(fs.readFileSync(RESOLVED, "utf8"));
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const before = loadVerbs(BEFORE_REF);
  const after = loadVerbs(path.join(ROOT, "data/et/verbs.js"));
  const deRef = loadVerbs(path.join(ROOT, "data/verbs.js"));
  const formKeys = [...FORM_KEYS];

  const findings = [];
  let fid = 0;
  function add(sev, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({
      id: `ET-VERB-REG-${String(fid).padStart(4, "0")}`,
      severity: sev,
      cardId,
      field,
      problem,
      ...detail,
    });
  }

  const meta = resolved.meta || {};
  const ownerRows = resolved.findings || [];

  let labotRetained = 0;
  let fpRetained = 0;
  let ownerNewMismatch = 0;
  let missingPath = 0;

  const labotKeys = new Set();
  for (const row of ownerRows) {
    if (row.status === "LABOT") {
      const entry = findEntry(after, row.cardId);
      if (!entry) {
        missingPath++;
        add("HIGH", row.cardId, row.field, "LABOT card missing", { auditId: row.id });
        continue;
      }
      const actual = getEtValue(entry, row.field);
      if (actual === undefined) {
        missingPath++;
        add("HIGH", row.cardId, row.field, "LABOT field missing", { auditId: row.id });
        continue;
      }
      if (String(actual) === String(row.ownerNew)) {
        labotRetained++;
        labotKeys.add(applyKey(row.cardId, row.field));
      } else {
        ownerNewMismatch++;
        add("HIGH", row.cardId, row.field, "LABOT OWNER NEW mismatch", {
          auditId: row.id,
          expected: row.ownerNew,
          actual,
        });
      }
    }
  }

  for (const row of ownerRows) {
    if (row.status !== "FALSE_POSITIVE") continue;
    const entry = findEntry(after, row.cardId);
    if (!entry) {
      add("HIGH", row.cardId, row.field, "FP card missing", { auditId: row.id });
      continue;
    }
    const actual = getEtValue(entry, row.field);
    const key = applyKey(row.cardId, row.field);
    if (labotKeys.has(key)) continue;
    const eb = findEntry(before, row.cardId);
    const beforeVal = eb ? getEtValue(eb, row.field) : undefined;
    const acceptedCurrent = row.currentEt;
    const retained =
      String(actual) === String(acceptedCurrent) ||
      (beforeVal !== undefined && String(actual) === String(beforeVal));
    if (retained) fpRetained++;
    else {
      add("HIGH", row.cardId, row.field, "FALSE_POSITIVE not retained", {
        auditId: row.id,
        expected: acceptedCurrent,
        actual,
        beforeVal,
      });
    }
  }

  let uniqueMatch = 0;
  for (const row of applyMap.apply || []) {
    const entry = findEntry(after, row.cardId);
    if (!entry) {
      missingPath++;
      add("HIGH", row.cardId, row.field, "apply target missing", { auditId: row.auditId });
      continue;
    }
    const actual = getEtValue(entry, row.field);
    if (String(actual) === String(row.ownerNew)) uniqueMatch++;
    else {
      ownerNewMismatch++;
      add("HIGH", row.cardId, row.field, "UNIQUE TARGET mismatch", {
        auditId: row.auditId,
        expected: row.ownerNew,
        actual,
      });
    }
  }

  const duplicateGroups = new Map();
  for (const row of ownerRows.filter((r) => r.status === "LABOT")) {
    const key = applyKey(row.cardId, row.field);
    if (!duplicateGroups.has(key)) duplicateGroups.set(key, []);
    duplicateGroups.get(key).push(row);
  }
  for (const [key, rows] of duplicateGroups) {
    if (rows.length < 2) continue;
    const entry = findEntry(after, rows[0].cardId);
    const actual = entry ? getEtValue(entry, rows[0].field) : undefined;
    const ownerNews = new Set(rows.map((r) => r.ownerNew));
    if (ownerNews.size > 1) {
      add("HIGH", rows[0].cardId, rows[0].field, "duplicate findings disagree on OWNER NEW", { key, ownerNews: [...ownerNews] });
    }
    for (const r of rows) {
      if (String(actual) !== String(r.ownerNew)) {
        add("MEDIUM", r.cardId, r.field, "duplicate field inconsistent", { auditId: r.id, expected: r.ownerNew, actual });
      }
    }
  }

  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const formKey of formKeys) {
      if (JSON.stringify(before[i]?.[formKey]?.de) !== JSON.stringify(after[i]?.[formKey]?.de)) deChanges++;
      if (JSON.stringify(after[i]?.[formKey]?.de) !== JSON.stringify(deRef[i]?.[formKey]?.de)) {
        add("CRITICAL", `verb-${i}`, `${formKey}.de`, "DE integrity vs etalon", { index: i });
      }
    }
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de", `${deChanges} DE field changes`);

  const verbCount = after.length;
  const formCount = after.reduce((n, v) => n + formKeys.filter((fk) => v?.[fk]).length, 0);
  if (verbCount !== EXPECTED_VERBS) add("CRITICAL", "STRUCT", "verbCount", `verbs ${verbCount}`);
  if (formCount !== EXPECTED_FORMS) add("CRITICAL", "STRUCT", "formCount", `forms ${formCount}`);

  let placeholderHits = 0;
  let slashMultiVariant = 0;
  for (let i = 0; i < after.length; i++) {
    const cardId = `verb-${i}`;
    for (const formKey of formKeys) {
      const lv = after[i]?.[formKey]?.lv;
      if (typeof lv !== "string") continue;
      if (isPlaceholder(lv)) {
        placeholderHits++;
        add("HIGH", cardId, `${formKey}.lv`, "placeholder string in production", { value: lv.slice(0, 80) });
      }
      if (/\s\/\s/.test(lv) || lv.includes("•")) {
        slashMultiVariant++;
        add("MEDIUM", cardId, `${formKey}.lv`, "multi-variant chain remains", { value: lv.slice(0, 80) });
      }
    }
  }

  const mirrorPass = isSyncedWithWww("data/et/verbs.js");
  if (!mirrorPass) add("HIGH", "MIRROR", "data↔www", "Mirror fail");

  let syntaxPass = true;
  try {
    execSync("node --check data/et/verbs.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/verbs.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("CRITICAL", "SYNTAX", "node --check", "Syntax fail");
  }

  const expectedKeys = new Set((applyMap.apply || []).map((r) => applyKey(r.cardId, r.field)));
  let unexpectedChanges = 0;
  for (let i = 0; i < after.length; i++) {
    const diffs = walkDiff(before[i], after[i]);
    if (!diffs.length) continue;
    const cardId = `verb-${i}`;
    for (const d of diffs) {
      if (d.path.endsWith(".de")) continue;
      if (!d.path.endsWith(".lv")) {
        unexpectedChanges++;
        add("HIGH", cardId, d.path, "Unexpected non-lv change", { before: String(d.before).slice(0, 60), after: String(d.after).slice(0, 60) });
        continue;
      }
      const formKey = d.path.replace(".lv", "");
      const key = applyKey(cardId, formKey);
      if (!expectedKeys.has(key)) {
        unexpectedChanges++;
        add("HIGH", cardId, d.path, "Unexpected lv change", { before: String(d.before).slice(0, 60), after: String(d.after).slice(0, 60) });
      }
    }
  }

  const critical = findings.filter((f) => f.severity === "CRITICAL").length;
  const high = findings.filter((f) => f.severity === "HIGH").length;

  const ownerResolved = ownerRows.length;
  const pending = ownerRows.filter((r) => r.status === "PENDING").length;
  const nsr = ownerRows.filter((r) => r.status === "NEEDS_SOURCE_REVIEW").length;

  const pass =
    critical === 0 &&
    high === 0 &&
    ownerResolved === 197 &&
    labotRetained === EXPECTED_LABOT &&
    fpRetained === EXPECTED_FP &&
    pending === 0 &&
    nsr === 0 &&
    uniqueMatch === EXPECTED_UNIQUE &&
    ownerNewMismatch === 0 &&
    missingPath === 0 &&
    deChanges === 0 &&
    unexpectedChanges === 0 &&
    placeholderHits === 0 &&
    verbCount === EXPECTED_VERBS &&
    formCount === EXPECTED_FORMS &&
    mirrorPass &&
    syntaxPass;

  const verdict = pass ? "ET_VERBS_FINAL_TARGETED_REGRESSION_PASS" : "ET_VERBS_FINAL_TARGETED_REGRESSION_FAIL";

  const report = {
    generatedAt: new Date().toISOString(),
    verdict,
    mergeBase: MERGE_BASE,
    ownerResolved,
    labotRetained,
    expectedLabot: EXPECTED_LABOT,
    fpRetained,
    expectedFp: EXPECTED_FP,
    pending,
    needsSourceReview: nsr,
    uniqueTargets: applyMap.apply?.length || 0,
    ownerNewMatch: uniqueMatch,
    ownerNewMismatch,
    missingPath,
    verbCount,
    formCount,
    placeholderHits,
    slashMultiVariant,
    deChanges,
    unexpectedChanges,
    mirrorPass,
    syntaxPass,
    idOrderPass: critical === 0 && !findings.some((f) => f.problem?.includes("DE integrity")),
    structurePass: verbCount === EXPECTED_VERBS && formCount === EXPECTED_FORMS,
    findingsCount: findings.length,
    critical,
    high,
    findings,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));

  const md = [
    "# ET–DE Verbs — final targeted regression",
    "",
    "**Standard:** MASTER v1.9 + REPAIR_APPLY_SAFETY_STANDARD",
    "**Authority:** `reports/et-verbs-owner-decisions-accepted.md`",
    "**Repair PR:** #635",
    "",
    `**Verdict:** **${verdict}**`,
    "",
    "## OWNER retention",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| OWNER_RESOLVED | **${ownerResolved}/197** |`,
    `| LABOT retained | **${labotRetained}/${EXPECTED_LABOT}** |`,
    `| FALSE_POSITIVE retained | **${fpRetained}/${EXPECTED_FP}** |`,
    `| PENDING | **${pending}** |`,
    `| NEEDS_SOURCE_REVIEW | **${nsr}** |`,
    `| UNIQUE_TARGETS | **${report.uniqueTargets}** |`,
    `| OWNER_NEW_MATCH | **${uniqueMatch}/${EXPECTED_UNIQUE}** |`,
    `| OWNER_NEW_MISMATCH | **${ownerNewMismatch}** |`,
    `| MISSING_PATH | **${missingPath}** |`,
    "",
    "## Verb quality gates",
    "",
    `| VERB_COUNT | **${verbCount}/${EXPECTED_VERBS}** |`,
    `| FORM_COUNT | **${formCount}/${EXPECTED_FORMS}** |`,
    `| PLACEHOLDER scan | **${placeholderHits}** |`,
    `| Multi-variant (/ or •) | **${slashMultiVariant}** |`,
    "",
    "## Technical gates",
    "",
    `| DE_CHANGES | **${deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${unexpectedChanges}** |`,
    `| MIRROR | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| SYNTAX | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID_ORDER | **${report.idOrderPass ? "PASS" : "FAIL"}** |`,
    `| STRUCTURE | **${report.structurePass ? "PASS" : "FAIL"}** |`,
    "",
    `| Merge baseline | \`${MERGE_BASE}\` |`,
    "",
  ];

  if (findings.length) {
    md.push("## Findings", "");
    for (const f of findings.slice(0, 30)) {
      md.push(`- **${f.severity}** ${f.cardId} ${f.field}: ${f.problem}`);
    }
    if (findings.length > 30) md.push(`_… +${findings.length - 30} more_`);
    md.push("");
  }

  fs.writeFileSync(REPORT_MD, md.join("\n"));
  console.log(
    JSON.stringify(
      {
        verdict,
        labotRetained,
        fpRetained,
        uniqueMatch,
        placeholderHits,
        slashMultiVariant,
        unexpectedChanges,
      },
      null,
      2
    )
  );
  if (!pass) process.exit(1);
}

main();
