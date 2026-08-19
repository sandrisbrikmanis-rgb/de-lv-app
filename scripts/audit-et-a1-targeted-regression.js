#!/usr/bin/env node
"use strict";
/**
 * ET–DE A1 targeted regression audit (READ-ONLY).
 * Per PROJECT_LANGUAGE_MASTER_STANDARD.md §10 + REPAIR_APPLY_SAFETY_STANDARD.md §12.
 * Scope: cards/fields changed vs origin/main during OWNER apply + sectionAccents repair.
 * Usage: node scripts/audit-et-a1-targeted-regression.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync, spawnSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { findEntry: findEntryBase, getAt } = require("./lib/da-a1-owner-path");

const ET_FILE = path.join(ROOT, "data/et/a1.js");
const WWW_FILE = path.join(ROOT, "www/data/et/a1.js");
const LV_FILE = path.join(ROOT, "data/a1.js");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-a1-owner-apply-log.json");
const OWNER_MD = path.join(ROOT, "reports/et-a1-owner-accepted-all.md");
const REPORT_MD = path.join(ROOT, "reports/et-a1-targeted-regression-audit.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-a1-targeted-regression-audit.json");
const BEFORE_REF = process.env.ET_A1_BEFORE || "/tmp/et-a1-before-main.js";

const LV_DIAC = /[āēīūģķļņšĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(lūdzu|lūgums|Man ir|Es esmu|Es redzu|Es palīdzu|mājās|skolā|darbā|vācu valodu|vācu|latviešu|paņemt|paņemu|Bērns spēlējas|vīriešu dzimte|akuzatīvs|Vispirms mēs|Tad mēs|Līst|Es mācos|Man kaut kas|Es esmu mazliet|Jūs esat|Es jums|Tā ir jūsu|Man tas šķiet|Es saņemu|Es ņemu|Lūdzu, nāc|Man ir lūgums)\b/i;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];
const MAIN_BASE_SHA = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();

function findEntry(words, cardId) {
  const base = findEntryBase(words, cardId);
  if (base) return base;
  const idxMatch = cardId.match(/-(\d+)$/);
  if (idxMatch && words[parseInt(idxMatch[1], 10)]) return words[parseInt(idxMatch[1], 10)];
  const deGuess = cardId.replace(/^a1-/, "").replace(/-study.*$/i, "").replace(/-\d+$/, "");
  return words.find((e) => e.de === deGuess || e.de.toLowerCase() === deGuess.toLowerCase()) || null;
}

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `a1-${entry.de}-${index}`;
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

function parseOwnerRows() {
  const rows = [];
  for (const line of fs.readFileSync(OWNER_MD, "utf8").split("\n")) {
    if (!line.startsWith("| ET-A1-")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cols.length < 6) continue;
    rows.push({ auditId: cols[0], cardId: cols[1], field: cols[2], current: cols[3], ownerNew: cols[4], status: cols[5] });
  }
  return rows;
}

function normalizeField(field) {
  let f = field.trim();
  const m = f.match(/^entry\[\d+\]\.(.+)$/);
  if (m) f = m[1];
  return f;
}

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) {
      v.forEach(push);
      return;
    }
    if (typeof v === "object") ["text", "example", "de", "lv", "word", "meaning"].forEach((k) => push(v[k]));
  };
  if (sectionKey === "explanation") {
    push(study.explanation);
    return texts;
  }
  if (sectionKey === "examples") {
    const rows = index !== null ? [study.examples?.[index]].filter(Boolean) : study.examples || [];
    rows.forEach((ex) => {
      if (!field || field === "de") push(ex.de);
      if (!field || field === "lv") push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === "comparison") {
    const rows = index !== null ? [study.comparison?.[index]].filter(Boolean) : study.comparison || [];
    rows.forEach((r) => {
      if (!field || field === "word") push(r.word);
      if (!field || field === "meaning") push(r.meaning);
      if (!field || field === "example") push(r.example);
    });
    return texts;
  }
  if (sectionKey === "tip") {
    push(study.tip);
    return texts;
  }
  if (sectionKey === "important") {
    push(study.important);
    return texts;
  }
  return texts;
}

function matchesTerm(text, term) {
  if (!text || !term) return false;
  const escaped = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, "iu").test(String(text));
  } catch {
    return false;
  }
}

function validateSectionAccents(study, sectionAccents, cardDe) {
  const mismatches = [];
  if (!sectionAccents || typeof sectionAccents !== "object") return mismatches;
  const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
    if (!accentMap || typeof accentMap !== "object") return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(accentMap[color])) continue;
      for (const term of accentMap[color]) {
        const raw = String(term || "").trim();
        if (!raw) continue;
        if (LV_DIAC.test(raw) || LV_WORDS.test(raw)) {
          mismatches.push({ path: pathPrefix, target: raw, kind: "LV_REMNANT", cardDe });
          continue;
        }
        const texts = collectSectionTexts(study, sectionKey, index, field);
        if (!matchesTerm(texts.join("\n"), raw)) {
          mismatches.push({ path: pathPrefix, target: raw, kind: "STALE", cardDe, section: sectionKey });
        }
      }
    }
  };
  for (const [sectionKey, rules] of Object.entries(sectionAccents)) {
    if (Array.isArray(rules)) {
      rules.forEach((entry, index) => {
        if (!entry || typeof entry !== "object") return;
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry[c]));
        if (hasColors) checkMap(sectionKey, index, null, entry, `sectionAccents.${sectionKey}[${index}]`);
        else for (const field of Object.keys(entry)) checkMap(sectionKey, index, field, entry[field], `sectionAccents.${sectionKey}[${index}].${field}`);
      });
    } else if (rules && typeof rules === "object") {
      const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
      else for (const [field, map] of Object.entries(rules)) checkMap(sectionKey, null, field, map, `sectionAccents.${sectionKey}.${field}`);
    }
  }
  return mismatches;
}

function main() {
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(`git show origin/main:data/et/a1.js > ${BEFORE_REF}`, { cwd: ROOT, stdio: "pipe" });
  }

  const before = loadWords(BEFORE_REF);
  const after = loadWords(ET_FILE);
  const lvRef = loadWords(LV_FILE);
  const applyLog = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const ownerRows = parseOwnerRows();
  const findings = [];
  let fid = 0;

  function add(severity, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({ id: `ET-A1-REG-${String(fid).padStart(4, "0")}`, severity, cardId, field, problem, ...detail });
  }

  // §10.5 DE read-only
  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
    if (before[i]?.de !== lvRef[i]?.de) {
      add("CRITICAL", entryId(after[i], i), "de.order", "DE order mismatch vs LV etalon", { index: i });
    }
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de.fields", `${deChanges} DE field changes detected`, { deChanges });

  // §10.10 mirror
  const mirrorPass = isSyncedWithWww("data/et/a1.js");
  if (!mirrorPass) add("HIGH", "MIRROR", "data↔www", "Production mirror not identical");

  // §10.9 syntax
  let syntaxPass = true;
  try {
    execSync("node --check data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("CRITICAL", "SYNTAX", "node --check", "Syntax check FAIL");
  }

  // Changed cards vs origin/main
  const changedCards = new Map();
  for (let i = 0; i < after.length; i++) {
    const diffs = walkDiff(before[i], after[i]);
    if (!diffs.length) continue;
    changedCards.set(entryId(after[i], i), { index: i, de: after[i].de, diffs });
  }

  // §10.1 OWNER LABOT NEW verification (APPLIED_VERIFIED)
  let ownerVerified = 0;
  let ownerMismatch = 0;
  for (const row of applyLog.appliedVerified || []) {
    const mapRow = (applyLog.staged || []).find((s) => s.auditId === row.auditId) ||
      JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-a1-owner-apply-map.json"), "utf8")).apply.find((m) => m.auditId === row.auditId);
    const ownerNew = mapRow?.ownerNew;
    const field = mapRow?.field;
    const entry = findEntry(after, row.cardId);
    if (!entry || !field) {
      add("HIGH", row.cardId, field || "?", "APPLIED_VERIFIED target missing in production");
      ownerMismatch++;
      continue;
    }
    const actual = readCurrent(entry, field);
    if (String(actual) !== String(ownerNew)) {
      add("HIGH", row.cardId, field, "OWNER NEW mismatch after apply", {
        expected: String(ownerNew).slice(0, 120),
        actual: String(actual).slice(0, 120),
      });
      ownerMismatch++;
    } else {
      ownerVerified++;
      const reasons = classifyForeign(String(actual));
      if (reasons.length) add("HIGH", row.cardId, field, `Foreign remnant in verified OWNER field: ${reasons.join(", ")}`, { value: String(actual).slice(0, 100) });
    }
  }

  // §10.4 NSR not mechanically changed (sectionAccents paths from owner file)
  for (const row of ownerRows.filter((r) => r.status === "NEEDS_SOURCE_REVIEW")) {
    const field = normalizeField(row.field);
    if (!field.startsWith("study.")) continue;
    const entry = findEntry(after, row.cardId);
    const entryBefore = findEntry(before, row.cardId);
    if (!entry || !entryBefore) continue;
    const now = readCurrent(entry, field);
    const was = readCurrent(entryBefore, field);
    if (JSON.stringify(now) !== JSON.stringify(was)) {
      add("MEDIUM", row.cardId, field, "NEEDS_SOURCE_REVIEW field changed vs main (unexpected)", { was, now });
    }
  }

  // §10.13 remnants on changed scope
  for (const [cardId, info] of changedCards) {
    const entry = after[info.index];
    for (const d of info.diffs) {
      if (DE_FIELDS.some((x) => d.path === x || d.path.startsWith(`${x}.`))) continue;
      if (typeof d.after !== "string") continue;
      const reasons = classifyForeign(d.after);
      if (reasons.length) {
        add("HIGH", cardId, d.path, `Foreign remnant in changed field: ${reasons.join(", ")}`, { value: d.after.slice(0, 120) });
      }
    }
    if (entry.study?.sectionAccents) {
      for (const m of validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de)) {
        if (m.kind !== "STALE") {
          add(m.kind === "LV_REMNANT" ? "HIGH" : "MEDIUM", cardId, m.path, `sectionAccents ${m.kind}: "${m.target}"`, m);
        }
      }
    }
  }

  // validate-study A1 sectionAccents (authoritative per MASTER §10.11)
  let sectionAccentIssues = 0;
  let validatePass = true;
  const val = spawnSync("node", [path.join(ROOT, "scripts", "validate-study-design.js"), "--lang=et"], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  try {
    const j = JSON.parse((val.stdout || "").trim());
    const a1 = j.perFile?.find((f) => f.file === "data/et/a1.js");
    sectionAccentIssues = a1?.sectionAccentIssues || 0;
    if (sectionAccentIssues > 0) add("MEDIUM", "VALIDATE", "sectionAccents", `${sectionAccentIssues} validate-study A1 mismatches`);
  } catch (e) {
    validatePass = false;
    add("HIGH", "VALIDATE", "validate-study-design", "Validator parse error", {
      error: String(e.message || e),
      exit: val.status,
      stderr: (val.stderr || "").slice(0, 200),
    });
  }

  // Study count (known open — informational, not apply regression)
  const studyCount = after.filter((e) => e.study).length;
  const studyOpen = studyCount < 134;

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const repairScopePass =
    ownerMismatch === 0 &&
    deChanges === 0 &&
    mirrorPass &&
    syntaxPass &&
    validatePass &&
    sectionAccentIssues === 0;
  const verdict =
    bySev.CRITICAL === 0 && bySev.HIGH === 0 && repairScopePass
      ? studyOpen
        ? "**ET–DE A1: REPAIR SCOPE PASS** (targeted regression PASS; 10 Study objects still pending SOURCE_REQUIRED)"
        : "**ET–DE A1: TARGETED REGRESSION PASS**"
      : bySev.CRITICAL === 0 && bySev.HIGH === 0 && bySev.MEDIUM === 0
        ? "**ET–DE A1: TARGETED REGRESSION PASS**"
        : "**ET–DE A1: REGRESSION ISSUES REMAIN**";

  const payload = {
    meta: {
      date: new Date().toISOString().slice(0, 10),
      standard: "PROJECT_LANGUAGE_MASTER_STANDARD.md v1.1",
      repairStandard: "REPAIR_APPLY_SAFETY_STANDARD.md",
      mainBaseSha: MAIN_BASE_SHA,
      workBranch: execSync("git rev-parse --abbrev-ref HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
      scope: "OWNER apply + sectionAccents repair vs origin/main",
      readOnly: true,
    },
    summary: {
      changedCards: changedCards.size,
      ownerAppliedVerified: ownerVerified,
      ownerMismatch,
      deChanges,
      mirrorPass,
      syntaxPass,
      sectionAccentIssues,
      studyCount: `${studyCount}/134`,
      findings: findings.length,
      bySeverity: bySev,
      repairScopePass,
      verdict,
    },
    findings,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(payload, null, 2));

  const md = [
    "# ET–DE A1 targeted regression audit (READ-ONLY)",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1 §10",
    "**Repair standard:** `REPAIR_APPLY_SAFETY_STANDARD.md`",
    `**Date:** ${payload.meta.date}`,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**Scope:** cards/fields changed vs \`origin/main\` during OWNER apply + sectionAccents repair`,
    "**Production changes:** 0 (audit only)",
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Changed cards (vs main) | **${changedCards.size}** |`,
    `| OWNER APPLIED_VERIFIED checked | **${ownerVerified}/${(applyLog.appliedVerified || []).length}** |`,
    `| OWNER NEW mismatches | **${ownerMismatch}** |`,
    `| DE changes | **${deChanges}** |`,
    `| Mirror data↔www | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| sectionAccents (validate-study A1) | **${sectionAccentIssues}** |`,
    `| Study objects | **${studyCount}/134** |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    "",
    "## Verdict",
    "",
    verdict,
    "",
  ];

  if (findings.length) {
    md.push("## Findings", "");
    for (const f of findings.slice(0, 40)) {
      md.push(`### ${f.id} — ${f.severity}`);
      md.push(`- **Card:** ${f.cardId}`);
      md.push(`- **Field:** ${f.field}`);
      md.push(`- **Problem:** ${f.problem}`);
      md.push("");
    }
    if (findings.length > 40) md.push(`_… and ${findings.length - 40} more (see JSON)._`, "");
  }

  md.push("## Methodology", "");
  md.push("1. Diff `data/et/a1.js` vs `origin/main`");
  md.push("2. Verify all `APPLIED_VERIFIED` OWNER NEW values");
  md.push("3. NSR fields unchanged vs main");
  md.push("4. DE read-only, mirror, syntax");
  md.push("5. Foreign remnants + sectionAccents on changed scope only");
  md.push("6. **No full Luna re-audit** (per MASTER §11)");
  md.push("");

  fs.writeFileSync(REPORT_MD, md.join("\n"));
  console.log(JSON.stringify(payload.summary, null, 2));
  console.log(`Wrote ${REPORT_MD}`);
}

main();
