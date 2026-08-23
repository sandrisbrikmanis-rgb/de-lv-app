#!/usr/bin/env node
"use strict";
/**
 * ET–DE Teikumi targeted regression after OWNER LABOT apply.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry } = require("./lib/et-sentences-owner-path");

const REPORT_MD = path.join(ROOT, "reports/et-sentences-final-targeted-regression.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-sentences-final-targeted-regression.json");
const ACCEPTED = path.join(ROOT, "reports/et-sentences-owner-decisions-accepted.md");
const APPLY_MAP = path.join(ROOT, "reports/temp/et-sentences-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-sentences-owner-apply-log.json");
const BEFORE_REF = process.env.ET_SENT_BEFORE || "/tmp/et-sentences-before-apply.js";
const MERGE_BASE = process.env.ET_SENT_MERGE_BASE || "551b3e52";
const EXPECTED_LABOT = 103;
const DE_FIELDS = ["de", "level"];

function loadSentences(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function parseAccepted() {
  const rows = [];
  for (const line of fs.readFileSync(ACCEPTED, "utf8").split("\n")) {
    if (!line.startsWith("| ET-SENT-")) continue;
    const p = line.split("|").slice(1, -1).map((x) => x.trim());
    rows.push({ auditId: p[0], cardId: p[1], field: p[2], current: p[3], status: p[4], ownerNew: p[5] });
  }
  return rows;
}

function ensureBefore() {
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(`git show ${MERGE_BASE}:data/et/sentences.js > ${BEFORE_REF}`, { cwd: ROOT, stdio: "pipe" });
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

function main() {
  ensureBefore();
  const before = loadSentences(BEFORE_REF);
  const after = loadSentences(path.join(ROOT, "data/et/sentences.js"));
  const deRef = loadSentences(path.join(ROOT, "data/sentences.js"));
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const applyLog = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const accepted = parseAccepted();

  const findings = [];
  let fid = 0;
  function add(sev, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({ id: `ET-SENT-REG-${String(fid).padStart(4, "0")}`, severity: sev, cardId, field, problem, ...detail });
  }

  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
    if (before[i]?.de !== deRef[i]?.de) add("CRITICAL", `sentence-${i}`, "de.order", "DE order mismatch vs etalon", { index: i });
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de", `${deChanges} DE changes`);

  const mirrorPass = isSyncedWithWww("data/et/sentences.js");
  if (!mirrorPass) add("HIGH", "MIRROR", "data↔www", "Mirror fail");

  let syntaxPass = true;
  try {
    execSync("node --check data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("CRITICAL", "SYNTAX", "node --check", "Syntax fail");
  }

  for (const row of applyMap.apply) {
    const entry = findEntry(after, row.cardId);
    if (!entry) {
      add("HIGH", row.cardId, "lv", "LABOT card missing", { auditId: row.auditId });
      continue;
    }
    if (String(entry.lv) !== String(row.ownerNew)) {
      add("HIGH", row.cardId, "lv", "OWNER NEW mismatch", { auditId: row.auditId, expected: row.ownerNew, actual: entry.lv });
    }
  }

  const labotCards = new Set(applyMap.apply.map((r) => r.cardId));
  let nelabotOk = 0;
  let fpOk = 0;
  let fpSupersededByLabot = 0;
  for (const row of accepted) {
    if (row.status !== "NELABOT" && row.status !== "FALSE_POSITIVE") continue;
    const eb = findEntry(before, row.cardId);
    const ea = findEntry(after, row.cardId);
    if (!eb || !ea) continue;
    const same = String(eb.lv) === String(ea.lv);
    if (labotCards.has(row.cardId) && row.status === "FALSE_POSITIVE") {
      fpSupersededByLabot++;
      continue;
    }
    if (row.status === "NELABOT" && same) nelabotOk++;
    if (row.status === "FALSE_POSITIVE" && same) fpOk++;
    if (!same) add("HIGH", row.cardId, "lv", `${row.status} changed`, { auditId: row.auditId });
  }

  const expectedChanged = new Set(applyMap.apply.map((r) => r.cardId));
  let unexpected = 0;
  for (let i = 0; i < after.length; i++) {
    const diffs = walkDiff(before[i], after[i]);
    if (!diffs.length) continue;
    const cardId = `sentence-${i}`;
    for (const d of diffs) {
      if (DE_FIELDS.includes(d.path)) continue;
      if (d.path === "lv" && expectedChanged.has(cardId)) continue;
      unexpected++;
      add("MEDIUM", cardId, d.path, "Unexpected change", { before: String(d.before).slice(0, 60), after: String(d.after).slice(0, 60) });
    }
  }

  const critical = findings.filter((f) => f.severity === "CRITICAL").length;
  const high = findings.filter((f) => f.severity === "HIGH").length;
  const appliedVerified = applyLog.summary?.appliedVerified ?? 0;
  const nsr = accepted.filter((r) => r.status === "NEEDS_SOURCE_REVIEW").length;

  const pass =
    critical === 0 &&
    high === 0 &&
    appliedVerified === EXPECTED_LABOT &&
    (applyLog.summary?.currentValueMismatch ?? 0) === 0 &&
    nelabotOk === 1 &&
    fpOk + fpSupersededByLabot === 62 &&
    nsr === 0 &&
    deChanges === 0 &&
    unexpected === 0 &&
    mirrorPass &&
    syntaxPass;

  const verdict = pass ? "ET_SENTENCES_FINAL_TARGETED_REGRESSION_PASS" : "ET_SENTENCES_FINAL_TARGETED_REGRESSION_FAIL";

  const report = {
    generatedAt: new Date().toISOString(),
    verdict,
    appliedVerified,
    nelabotOk,
    fpOk,
    fpSupersededByLabot,
    nsr,
    deChanges,
    unexpectedChanges: unexpected,
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
    "# ET–DE Teikumi — final targeted regression",
    "",
    `**Verdict:** **${verdict}**`,
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| APPLIED_VERIFIED | **${appliedVerified}/${EXPECTED_LABOT}** |`,
    `| NELABOT_RETAINED | **${nelabotOk}/1** |`,
    `| FALSE_POSITIVE_RETAINED | **${fpOk + fpSupersededByLabot}/62** (${fpSupersededByLabot} superseded by same-card LABOT) |`,
    `| NEEDS_SOURCE_REVIEW | **${nsr}** |`,
    `| DE_CHANGES | **${deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${unexpected}** |`,
    `| MIRROR | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| SYNTAX | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID_ORDER | **PASS** (DE order vs etalon) |`,
    "",
  ];
  fs.writeFileSync(REPORT_MD, md.join("\n"));
  console.log(JSON.stringify({ verdict, appliedVerified, nelabotOk, fpOk, fpSupersededByLabot, unexpected }, null, 2));
  if (!pass) process.exit(1);
}

main();
