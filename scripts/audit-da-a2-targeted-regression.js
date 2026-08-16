#!/usr/bin/env node
"use strict";
/**
 * DA–DE A2 targeted regression audit (READ-ONLY).
 * Audits only cards/fields changed vs origin/main during OWNER repair.
 * Usage: node scripts/audit-da-a2-targeted-regression.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getAt } = require("./lib/da-a2-owner-path");

const DA_FILE = path.join(ROOT, "data/da/a2.js");
const WWW_FILE = path.join(ROOT, "www/data/da/a2.js");
const DE_FILE = path.join(ROOT, "data/a2.js");
const APPLY_MAP = path.join(ROOT, "reports/temp/da-a2-owner-apply-map.json");
const REPORT = path.join(ROOT, "reports/da-a2-targeted-regression-audit.md");
const BEFORE_REF = process.env.DA_A2_BEFORE || "/tmp/da-a2-before.js";

const EXPECTED_CARDS = 1640;
const EXPECTED_STUDIES = 231;

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(latviešu|vācu|vārd|vārdā|Galvenā doma|galvenā doma|Atceries|Izmanto|Nepareizi|Pareizi|Bieži|Norāda|tikai vienskait|tikai daudzskait|lietvār|darbības vār|sieviešu|vīriešu|viņa|viņš|viņiem|mēs|es eju|man nav|labprāt|brīvdien|pulksten|runā|mācī|ēst|vilciens|Berlīn|kā tev|jums|jūs\b|jūsu\b|neesmu|skatī|redzēt|locījum|artikul|daudzskaitļ|vienskaitļ|Vācu valodā|latviski|apmeklēj|tāpēc|braukt|aizvest|Autobuss|Vilciens|atslēgu|grāmatu|mājās|tagad|tūlīt|atiet|prom|rīt|sākam|aizbraucu|iesniedzu|pieteikumu)\b/i;
const EN_PATTERNS =
  /\b(Translation:|TODO|TBD|the sound that is pronounced|instead of|Change this|Ready\. Next|Look at the|meaning:)\b/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|```|Pārskatīti:|COPY-ONLY apply)/;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `a2-${entry.de}-${index}`;
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
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER/CORRUPTION");
  return reasons;
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
    if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) => push(v[k]));
    }
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
    if (field === "left") {
      push(study.tip?.left || study.tip?.text);
      return texts;
    }
    push(study.tip);
    return texts;
  }
  if (sectionKey === "important") {
    const source = study.important;
    const rows = index !== null ? [Array.isArray(source) ? source[index] : source].filter(Boolean) : source || [];
    if (Array.isArray(rows)) rows.forEach(push);
    else push(rows);
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
    return String(text).toLowerCase().includes(String(term).toLowerCase());
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
        const texts = collectSectionTexts(study, sectionKey, index, field);
        if (!matchesTerm(texts.join("\n"), raw)) {
          mismatches.push({ path: pathPrefix, target: raw, section: sectionKey, field: field || null, cardDe });
        }
      }
    }
    for (const [key, val] of Object.entries(accentMap)) {
      if (ACCENT_COLORS.includes(key)) continue;
      if (typeof val === "string" && val.trim()) {
        const texts = collectSectionTexts(study, sectionKey, index, field);
        if (!matchesTerm(texts.join("\n"), val)) {
          mismatches.push({ path: `${pathPrefix}.${key}`, target: val, section: sectionKey, field: field || null, cardDe });
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

function comparisonExampleIssues(study) {
  const issues = [];
  if (!Array.isArray(study?.comparison)) return issues;
  study.comparison.forEach((row, i) => {
    const ex = row?.example;
    if (typeof ex !== "string" || !ex.includes("=")) return;
    const daSide = ex.split("=").slice(1).join("=").trim();
    const reasons = classifyForeign(daSide);
    if (reasons.length) issues.push({ index: i, example: ex, reasons, daSide: daSide.slice(0, 80) });
  });
  return issues;
}

function dePairingOk(study) {
  const issues = [];
  if (!study?.examples) return issues;
  study.examples.forEach((ex, i) => {
    if (!ex.de || !ex.lv) return;
    if (typeof ex.lv !== "string" || ex.lv.length < 2) {
      issues.push({ kind: "EMPTY_LV_EXAMPLE", index: i, de: ex.de, lv: ex.lv });
    }
  });
  return issues;
}

function main() {
  execSync("node scripts/build-da-a2-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(`git show origin/main:data/da/a2.js > ${BEFORE_REF}`, { cwd: ROOT, stdio: "pipe" });
  }

  const before = loadWords(BEFORE_REF);
  const after = loadWords(DA_FILE);
  const deRef = loadWords(DE_FILE);
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const findings = [];
  let fid = 0;

  function add(severity, cardId, field, problem, detail = {}) {
    fid++;
    const { field: _ignore, ...rest } = detail;
    findings.push({ id: `DA-A2-REG-${String(fid).padStart(4, "0")}`, severity, cardId, field, problem, ...rest });
  }

  // Structural
  if (after.length !== EXPECTED_CARDS) add("CRITICAL", "STRUCT", "cardCount", `Expected ${EXPECTED_CARDS}, got ${after.length}`);
  const studyCount = after.filter((e) => e.study).length;
  if (studyCount !== EXPECTED_STUDIES) add("CRITICAL", "STRUCT", "studyCount", `Expected ${EXPECTED_STUDIES}, got ${studyCount}`);

  // DE read-only
  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of ["de", "de_article", "de_plural", "level"]) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
    if (before[i]?.de !== deRef[i]?.de) {
      add("CRITICAL", entryId(after[i], i), "de.order", "DE order mismatch vs etalon", { index: i });
    }
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de.fields", `${deChanges} DE field changes detected`, { deChanges });

  // Mirror
  if (!fs.readFileSync(DA_FILE).equals(fs.readFileSync(WWW_FILE))) {
    add("HIGH", "MIRROR", "data↔www", "Production mirror not identical");
  }

  // Changed cards scope
  const changedCards = new Map();
  for (let i = 0; i < after.length; i++) {
    const diffs = walkDiff(before[i], after[i]);
    if (!diffs.length) continue;
    changedCards.set(entryId(after[i], i), { index: i, de: after[i].de, diffs });
  }

  // OWNER apply map verification (SET actions only)
  for (const row of applyMap.apply) {
    if (row.action !== "SET") continue;
    const entry = findEntry(after, row.cardId);
    if (!entry) {
      add("HIGH", row.cardId, row.field, "OWNER target card not found");
      continue;
    }
    const fieldPath = row.field === "lv" || row.field.startsWith("study.") ? row.field : `study.${row.field}`;
    const actualVal = row.field === "lv" ? entry.lv : getAt(entry, fieldPath);
    if (actualVal === undefined) {
      add("HIGH", row.cardId, fieldPath, "OWNER target path missing after apply");
      continue;
    }
    if (String(actualVal) !== String(row.ownerNew)) {
      add("MEDIUM", row.cardId, fieldPath, "OWNER NEW value mismatch", {
        expected: String(row.ownerNew).slice(0, 120),
        actual: String(actualVal).slice(0, 120),
      });
    }
    const reasons = classifyForeign(String(actualVal));
    if (reasons.length) {
      add("HIGH", row.cardId, fieldPath, `Foreign remnant in OWNER field: ${reasons.join(", ")}`, {
        value: String(actualVal).slice(0, 100),
      });
    }
  }

  // Audit every changed card in scope
  for (const [cardId, info] of changedCards) {
    const entry = after[info.index];
    for (const d of info.diffs) {
      if (["de", "de_article", "de_plural", "level"].some((x) => d.path === x || d.path.startsWith(`${x}.`))) continue;
      if (typeof d.after !== "string") continue;
      const reasons = classifyForeign(d.after);
      if (reasons.length) {
        add("HIGH", cardId, d.path, `Foreign remnant in changed field: ${reasons.join(", ")}`, { value: d.after.slice(0, 120) });
      }
    }

    if (entry.study) {
      for (const p of dePairingOk(entry.study)) {
        add("MEDIUM", cardId, `study.examples[${p.index}]`, "Example lv empty or too short", p);
      }
      for (const c of comparisonExampleIssues(entry.study)) {
        add("HIGH", cardId, `study.comparison[${c.index}].example`, `Comparison DA side foreign: ${c.reasons.join(", ")}`, c);
      }
      if (entry.study.sectionAccents) {
        for (const m of validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de)) {
          const sev =
            classifyForeign(m.target).length > 0
              ? "MEDIUM"
              : "LOW";
          add(sev, cardId, m.path, `sectionAccent target not in Study text: "${m.target}"`, m);
        }
      }
    }
  }

  // Parity
  let parityPass = false;
  try {
    const out = execSync("node scripts/audit-language-parity.js --lang=da", { cwd: ROOT, encoding: "utf8" });
    const j = JSON.parse(out.trim());
    parityPass = j.pass === true;
    if (!parityPass) add("CRITICAL", "PARITY", "audit-language-parity", "Parity FAIL", { issues: j.issues });
  } catch (e) {
    add("CRITICAL", "PARITY", "audit-language-parity", "Parity script error", { error: String(e.message || e) });
  }

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const verdict =
    bySev.CRITICAL === 0 && bySev.HIGH === 0 && bySev.MEDIUM === 0
      ? `**DA–DE A2: FINAL CLOSED** (targeted regression PASS${bySev.LOW ? `; ${bySev.LOW} sectionAccent stale LOW residual` : ""})`
      : "**DA–DE A2: REGRESSION ISSUES REMAIN**";

  const md = [
    "# DA–DE A2 targeted regression audit (READ-ONLY)",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Scope:** Only cards/fields changed vs `origin/main` during OWNER repair (comparison + sectionAccents + misc)",
    "**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)",
    "**Production changes:** 0 (audit only)",
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Changed cards (vs main) | **${changedCards.size}** |`,
    `| OWNER apply rows (LABOT) | **${applyMap.apply.length}** |`,
    `| DE changes | **${deChanges}** |`,
    `| Study count | **${studyCount}/${EXPECTED_STUDIES}** |`,
    `| Mirror data↔www | **${fs.readFileSync(DA_FILE).equals(fs.readFileSync(WWW_FILE)) ? "PASS" : "FAIL"}** |`,
    `| Parity (--lang=da) | **${parityPass ? "PASS" : "FAIL"}** |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW (sectionAccent stale residual) | **${bySev.LOW}** |`,
    "",
    "### Verdict",
    "",
    verdict,
    "",
    "## Changed cards in scope",
    "",
    ...[...changedCards.entries()]
      .sort((a, b) => a[1].index - b[1].index)
      .map(([id, info]) => `- \`${id}\` (de: ${info.de}) — ${info.diffs.length} leaf diff(s)`),
    "",
  ];

  if (findings.length) {
    md.push("## Findings", "");
    for (const f of findings) {
      md.push(`### ${f.id} [${f.severity}]`, "");
      md.push(`- **Card:** ${f.cardId}`);
      md.push(`- **Field:** ${f.field}`);
      md.push(`- **Problem:** ${f.problem}`);
      if (f.expected) md.push(`- **Expected:** ${f.expected}`);
      if (f.actual) md.push(`- **Actual:** ${f.actual}`);
      if (f.value) md.push(`- **Value:** ${f.value}`);
      md.push("");
    }
  } else {
    md.push("## Findings", "", "_No CRITICAL/HIGH/MEDIUM findings in targeted scope._", "");
  }

  fs.writeFileSync(REPORT, md.join("\n"));
  console.log(
    JSON.stringify(
      {
        changedCards: changedCards.size,
        findings: findings.length,
        bySev,
        verdict: verdict.replace(/\*\*/g, ""),
        report: REPORT,
      },
      null,
      2
    )
  );
  process.exit(bySev.CRITICAL + bySev.HIGH + bySev.MEDIUM > 0 ? 1 : 0);
}

main();
