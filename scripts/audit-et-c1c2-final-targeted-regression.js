#!/usr/bin/env node
"use strict";
/**
 * ET–DE C1/C2 final targeted regression after NSR closure.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry, normalizeField, getAt } = require("./lib/et-c1c2-owner-path");
const { parsePipeRows } = require("./lib/et-c1c2-owner-accepted-parse");
const { countSectionAccentIssues } = require("./lib/et-c1c2-sectionaccents-validate");

const REPORT_MD = path.join(ROOT, "reports/et-c1c2-final-targeted-regression.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-c1c2-final-targeted-regression.json");
const ACCEPTED_MD = path.join(ROOT, "reports/et-c1c2-owner-decisions-accepted.md");
const APPLY_MAP = path.join(ROOT, "reports/temp/et-c1c2-owner-apply-map.json");
const BEFORE_C1 = process.env.ET_C1_BEFORE || "/tmp/et-c1-before-nsr.js";
const BEFORE_C2 = process.env.ET_C2_BEFORE || "/tmp/et-c2-before-nsr.js";
const MERGE_REF = "69360f44";

const DE_FIELDS = ["de", "de_article", "de_plural", "level"];
const EXPECTED_C1_STUDIES = 15;
const EXPECTED_C2_STUDIES = 1;
const EXPECTED_C1_CARDS = 572;
const EXPECTED_C2_CARDS = 219;

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

function ensureBefore(ref, gitPath) {
  if (!fs.existsSync(ref)) {
    execSync(`git show ${MERGE_REF}:${gitPath} > ${ref}`, { cwd: ROOT, stdio: "pipe" });
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

function stripSectionAccents(entry) {
  const c = JSON.parse(JSON.stringify(entry));
  if (c.study?.sectionAccents) delete c.study.sectionAccents;
  return c;
}

function main() {
  ensureBefore(BEFORE_C1, "data/et/c1.js");
  ensureBefore(BEFORE_C2, "data/et/c2.js");

  const beforeC1 = loadWords(BEFORE_C1, "C1_WORDS");
  const beforeC2 = loadWords(BEFORE_C2, "C2_WORDS");
  const afterC1 = loadWords(path.join(ROOT, "data/et/c1.js"), "C1_WORDS");
  const afterC2 = loadWords(path.join(ROOT, "data/et/c2.js"), "C2_WORDS");
  const lvC1 = loadWords(path.join(ROOT, "data/c1.js"), "C1_WORDS");
  const lvC2 = loadWords(path.join(ROOT, "data/c2.js"), "C2_WORDS");
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const acceptedRows = parsePipeRows(fs.readFileSync(ACCEPTED_MD, "utf8"));

  const findings = [];
  let fid = 0;
  function add(severity, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({ id: `ET-C1C2-FIN-${String(fid).padStart(4, "0")}`, severity, cardId, field, problem, ...detail });
  }

  if (afterC1.length !== EXPECTED_C1_CARDS) add("CRITICAL", "STRUCT-c1", "cardCount", `C1 cards ${afterC1.length}`);
  if (afterC2.length !== EXPECTED_C2_CARDS) add("CRITICAL", "STRUCT-c2", "cardCount", `C2 cards ${afterC2.length}`);

  let deChanges = 0;
  for (const [before, after] of [
    [beforeC1, afterC1],
    [beforeC2, afterC2],
  ]) {
    for (let i = 0; i < after.length; i++) {
      for (const f of DE_FIELDS) {
        if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
      }
    }
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de", `${deChanges} DE changes`);

  const c1Studies = afterC1.filter((e) => e.study).length;
  const c2Studies = afterC2.filter((e) => e.study).length;
  const lvC1Studies = lvC1.filter((e) => e.study).length;
  const lvC2Studies = lvC2.filter((e) => e.study).length;

  if (c1Studies !== EXPECTED_C1_STUDIES) add("HIGH", "STRUCT-c1", "study.count", `C1 studies ${c1Studies}`);
  if (c2Studies !== EXPECTED_C2_STUDIES) add("HIGH", "STRUCT-c2", "study.count", `C2 studies ${c2Studies}`);
  if (c1Studies !== lvC1Studies) add("HIGH", "STRUCT-c1", "study.parity", `ET ${c1Studies} vs LV ${lvC1Studies}`);
  if (c2Studies !== lvC2Studies) add("HIGH", "STRUCT-c2", "study.parity", `ET ${c2Studies} vs LV ${lvC2Studies}`);

  const saC1 = countSectionAccentIssues(afterC1);
  const saC2 = countSectionAccentIssues(afterC2);
  if (saC1.raw > 0 || saC2.raw > 0) {
    add("HIGH", "sectionAccents", "all", `sectionAccents raw ${saC1.raw + saC2.raw}`);
  }

  const mirrorC1 = isSyncedWithWww("data/et/c1.js");
  const mirrorC2 = isSyncedWithWww("data/et/c2.js");
  if (!mirrorC1) add("HIGH", "MIRROR", "c1", "C1 mirror fail");
  if (!mirrorC2) add("HIGH", "MIRROR", "c2", "C2 mirror fail");

  let syntaxPass = true;
  try {
    execSync("node --check data/et/c1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/c1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/c2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("CRITICAL", "SYNTAX", "node --check", "Syntax fail");
  }

  for (let i = 0; i < afterC1.length; i++) {
    if (afterC1[i].de !== lvC1[i]?.de) add("CRITICAL", `c1-${afterC1[i].de}`, "de.order", "C1 DE order mismatch vs LV", { index: i });
  }
  for (let i = 0; i < afterC2.length; i++) {
    if (afterC2[i].de !== lvC2[i]?.de) add("CRITICAL", `c2-${afterC2[i].de}`, "de.order", "C2 DE order mismatch vs LV", { index: i });
  }

  let labotOk = 0;
  for (const row of applyMap.apply) {
    const words = row.level === "c2" ? afterC2 : afterC1;
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      add("HIGH", row.cardId, row.field, "LABOT card missing", { auditId: row.auditId });
      continue;
    }
    const actual = readCurrent(entry, row.field);
    if (String(actual) === String(row.ownerNew)) labotOk++;
    else add("HIGH", row.cardId, row.field, "OWNER LABOT not retained", { auditId: row.auditId, expected: row.ownerNew, actual });
  }

  let nelabotOk = 0;
  let fpOk = 0;
  for (const row of acceptedRows) {
    if (row.status !== "NELABOT" && row.status !== "FALSE_POSITIVE") continue;
    if (row.cardId.startsWith("STRUCT") || /sectionAccents/i.test(row.field)) continue;
    const level = row.cardId.startsWith("c2-") ? "c2" : "c1";
    const before = level === "c2" ? beforeC2 : beforeC1;
    const after = level === "c2" ? afterC2 : afterC1;
    const eb = findEntry(before, row.cardId);
    const ea = findEntry(after, row.cardId);
    if (!eb || !ea) continue;
    const field = normalizeField(row.field);
    if (!field) continue;
    const same = String(readCurrent(eb, field)) === String(readCurrent(ea, field));
    if (row.status === "NELABOT" && same) nelabotOk++;
    if (row.status === "FALSE_POSITIVE" && same) fpOk++;
    if (!same) add("HIGH", row.cardId, field, `${row.status} changed`, { auditId: row.auditId });
  }

  const expectedStudyRemovals = new Set(["c1-wettbewerb", "c2-inwiefern", "c2-inwieweit"]);
  const expectedStudyRemovalDe = new Set(["Wettbewerb", "inwiefern", "inwieweit"]);
  let unexpected = 0;
  for (const [level, before, after] of [
    ["c1", beforeC1, afterC1],
    ["c2", beforeC2, afterC2],
  ]) {
    for (let i = 0; i < after.length; i++) {
      if (expectedStudyRemovalDe.has(after[i].de) && before[i].study && !after[i].study) continue;
      const diffs = walkDiff(stripSectionAccents(before[i]), stripSectionAccents(after[i]));
      const cardId = after[i].study?.id || before[i].study?.id || `${level}-${after[i].de}-${i}`;
      for (const d of diffs) {
        if (d.path === "study" && expectedStudyRemovals.has(cardId)) continue;
        if (DE_FIELDS.includes(d.path)) continue;
        unexpected++;
        add("MEDIUM", cardId, d.path, "Unexpected change (excl. sectionAccents)", {
          before: String(d.before).slice(0, 60),
          after: String(d.after).slice(0, 60),
        });
      }
    }
  }

  const critical = findings.filter((f) => f.severity === "CRITICAL").length;
  const high = findings.filter((f) => f.severity === "HIGH").length;

  const studyParityC1 = c1Studies === lvC1Studies && c1Studies === EXPECTED_C1_STUDIES;
  const studyParityC2 = c2Studies === lvC2Studies && c2Studies === EXPECTED_C2_STUDIES;

  const pass =
    critical === 0 &&
    high === 0 &&
    labotOk === 76 &&
    nelabotOk === 3 &&
    fpOk === 7 &&
    saC1.raw + saC2.raw === 0 &&
    studyParityC1 &&
    studyParityC2 &&
    deChanges === 0 &&
    unexpected === 0 &&
    mirrorC1 &&
    mirrorC2 &&
    syntaxPass;

  const verdict = pass ? "ET_C1C2_FINAL_TARGETED_REGRESSION_PASS" : "ET_C1C2_FINAL_TARGETED_REGRESSION_FAIL";

  const report = {
    generatedAt: new Date().toISOString(),
    verdict,
    labotOk,
    nelabotOk,
    fpOk,
    sectionAccentsRaw: saC1.raw + saC2.raw,
    c1Studies,
    c2Studies,
    studyParityC1,
    studyParityC2,
    deChanges,
    unexpectedChanges: unexpected,
    mirrorC1,
    mirrorC2,
    syntaxPass,
    findingsCount: findings.length,
    critical,
    high,
    findings,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));

  const md = [
    "# ET–DE C1/C2 — final targeted regression",
    "",
    `**Verdict:** **${verdict}**`,
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| OWNER_76_RETAINED | **${labotOk}/76** |`,
    `| NELABOT_RETAINED | **${nelabotOk}/3** |`,
    `| FALSE_POSITIVE_RETAINED | **${fpOk}/7** |`,
    `| SECTIONACCENTS_RAW | **${saC1.raw + saC2.raw}** |`,
    `| C1 studies | **${c1Studies}** (LV ${lvC1Studies}) |`,
    `| C2 studies | **${c2Studies}** (LV ${lvC2Studies}) |`,
    `| STUDY_PARITY_C1 | **${studyParityC1 ? "PASS" : "FAIL"}** |`,
    `| STUDY_PARITY_C2 | **${studyParityC2 ? "PASS" : "FAIL"}** |`,
    `| DE_CHANGES | **${deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${unexpected}** |`,
    `| MIRROR | **${mirrorC1 && mirrorC2 ? "PASS" : "FAIL"}** |`,
    `| SYNTAX | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| Findings | **${findings.length}** (CRITICAL ${critical}, HIGH ${high}) |`,
    "",
  ];
  if (findings.length) {
    md.push("## Findings", "");
    for (const f of findings.slice(0, 30)) {
      md.push(`- ${f.severity} ${f.cardId} ${f.field}: ${f.problem}`);
    }
    md.push("");
  }
  fs.writeFileSync(REPORT_MD, md.join("\n"));

  console.log(JSON.stringify({ verdict, labotOk, nelabotOk, fpOk, sectionAccentsRaw: saC1.raw + saC2.raw, unexpected }, null, 2));
  if (!pass) process.exit(1);
}

main();
