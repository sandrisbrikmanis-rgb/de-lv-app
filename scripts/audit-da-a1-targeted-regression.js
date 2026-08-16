#!/usr/bin/env node
"use strict";
/**
 * DA–DE A1 targeted regression audit (READ-ONLY).
 * Audits only fields/cards changed vs origin/main during OWNER repair + closure.
 * Usage: node scripts/audit-da-a1-targeted-regression.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getAt } = require("./lib/da-a1-owner-path");

const DA_FILE = path.join(ROOT, "data/da/a1.js");
const WWW_FILE = path.join(ROOT, "www/data/da/a1.js");
const DE_FILE = path.join(ROOT, "data/a1.js");
const APPLY_MAP = path.join(ROOT, "reports/temp/da-a1-owner-apply-map.json");
const REPORT = path.join(ROOT, "reports/da-a1-targeted-regression-audit.md");
const BEFORE_REF = process.env.DA_A1_BEFORE || "/tmp/da-a1-before.js";

const NEW_STUDY_IDS = [
  "a1-besuch",
  "a1-besuchen",
  "a1-fussball-study",
  "a1-ganz-study",
  "a1-gefallen-study",
  "a1-geschichte-study",
  "a1-geschwister-study",
  "a1-grosseltern-study",
  "a1-hand-study",
  "a1-huebsch",
];

const CLOSURE_STUDY_IDS = [
  "a1-fahren",
  "a1-bitte",
  "a1-bitte-study",
  "a1-finden",
  "a1-noch-study",
  "a1-besuch",
  "a1-besuchen",
  "a1-huebsch",
  "a1-fussball-study",
  "a1-ganz-study",
  "a1-gefallen-study",
  "a1-geschichte-study",
  "a1-geschwister-study",
  "a1-grosseltern-study",
  "a1-hand-study",
  "a1-es",
  "a1-sein",
  "a1-um",
  "a1-ein",
  "a1-bringen",
  "a1-bis",
  "a1-halten",
];

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(latviešu|vācu|apmeklējums|apciemojums|vizīte|apmeklēt|apciemot|vecvecāki|vecmāmiņa|vectētiņš|brāļi|māsa|brālis|stāsts|vēsture|patikt|latviski|Viņa|Viņš|mēs|es eju|Paldies|Pareizi|Nepareizi|Atceries|Izmanto|pulksten|lai\b|tu esi|Behage\b|Take away|braukt|braucu|vedu|aizvest|glīts|pievilcīgs|skaists|jauks|laipns|futbols|spēlē|nozīm|daudzskait|vienskait|locījum)\b/i;
const EN_PATTERNS =
  /\b(Translation:|TODO|TBD|the sound that is pronounced|instead of|Change this|Ready\. Next|Look at the|Please!|I'm learning|My arm hurts|Grandparents|Brothers and sisters|To attend|Take away|Main idea)\b/i;
const ZERO_WIDTH = /\u200B|\uFEFF|​​/;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|```|Pārskatīti:|COPY-ONLY apply)/;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

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
    for (let i = 0; i < len; i++) {
      walkDiff(before[i], after[i], `${prefix}[${i}]`, out);
    }
    return out;
  }
  if (typeof before === "object" && typeof after === "object") {
    const keys = new Set([...Object.keys(before || {}), ...Object.keys(after || {})]);
    for (const k of keys) {
      walkDiff(before[k], after[k], prefix ? `${prefix}.${k}` : k, out);
    }
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
  execSync("node scripts/build-da-a1-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(`git show origin/main:data/da/a1.js > ${BEFORE_REF}`, { cwd: ROOT, stdio: "pipe" });
  }

  const before = loadWords(BEFORE_REF);
  const after = loadWords(DA_FILE);
  const deRef = loadWords(DE_FILE);
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const findings = [];
  let fid = 0;

  function add(severity, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({ id: `DA-A1-REG-${String(fid).padStart(4, "0")}`, severity, cardId, field, problem, ...detail });
  }

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
    const cardId = entryId(after[i], i);
    changedCards.set(cardId, { index: i, de: after[i].de, diffs });
  }

  // OWNER apply map verification (SET actions only, on changed cards)
  const ownerByKey = new Map(applyMap.apply.map((r) => [`${r.cardId}|${r.field}`, r]));
  for (const row of applyMap.apply) {
    if (row.action !== "SET") continue;
    const entry = findEntry(after, row.cardId);
    if (!entry) {
      add("HIGH", row.cardId, row.field, "OWNER target card not found");
      continue;
    }
    const actual = row.field === "lv" ? entry.lv : getAt(entry, row.field);
    if (actual === undefined) {
      add("HIGH", row.cardId, row.field, "OWNER target path missing after apply");
      continue;
    }
    const expected = row.ownerNew;
    if (String(actual) !== String(expected)) {
      // Allow closure overrides on known closure-only fields
      const closureOverride = CLOSURE_STUDY_IDS.includes(row.cardId) && !NEW_STUDY_IDS.includes(row.cardId);
      if (!closureOverride || row.field.startsWith("study.sectionAccents")) {
        add("MEDIUM", row.cardId, row.field, "OWNER NEW value mismatch", {
          expected: String(expected).slice(0, 120),
          actual: String(actual).slice(0, 120),
        });
      }
    }
    const reasons = classifyForeign(String(actual));
    if (reasons.length) add("HIGH", row.cardId, row.field, `Foreign remnant in OWNER field: ${reasons.join(", ")}`, { value: String(actual).slice(0, 100) });
  }

  // Audit every changed leaf in scope
  for (const [cardId, info] of changedCards) {
    const entry = after[info.index];
    for (const d of info.diffs) {
      if (["de", "de_article", "de_plural", "level"].some((x) => d.path === x || d.path.startsWith(`${x}.`))) continue;
      if (typeof d.after !== "string") continue;
      const field = d.path;
      const reasons = classifyForeign(d.after);
      if (reasons.length) {
        add("HIGH", cardId, field, `Foreign remnant in changed field: ${reasons.join(", ")}`, { value: d.after.slice(0, 120) });
      }
    }

    if (entry.study) {
      for (const p of dePairingOk(entry.study)) {
        add("MEDIUM", cardId, `study.examples[${p.index}]`, "Example lv empty or too short", p);
      }
      if (entry.study.sectionAccents) {
        for (const m of validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de)) {
          add("MEDIUM", cardId, m.path, `sectionAccent target not in Study text: "${m.target}"`, m);
        }
      }
    }
  }

  // Full audit: 10 new Study objects
  for (const studyId of NEW_STUDY_IDS) {
    const entry = findEntry(after, studyId);
    if (!entry?.study) {
      add("CRITICAL", studyId, "study", "Missing new Study object");
      continue;
    }
    const s = entry.study;
    if (!s.translation || !s.explanation || !s.examples?.length) {
      add("HIGH", studyId, "study.structure", "Incomplete Study structure");
    }
    const walk = (val, p) => {
      if (typeof val === "string") {
        const reasons = classifyForeign(val);
        if (reasons.length) add("HIGH", studyId, p, `Foreign in new Study: ${reasons.join(", ")}`, { value: val.slice(0, 120) });
      } else if (Array.isArray(val)) val.forEach((v, i) => walk(v, `${p}[${i}]`));
      else if (val && typeof val === "object") Object.entries(val).forEach(([k, v]) => walk(v, p ? `${p}.${k}` : k));
    };
    walk(s, "study");
    if (s.sectionAccents) {
      for (const m of validateSectionAccents(s, s.sectionAccents, entry.de)) {
        add("MEDIUM", studyId, m.path, `sectionAccent mismatch: "${m.target}"`, m);
      }
    }
    for (const p of dePairingOk(s)) {
      add("MEDIUM", studyId, `study.examples[${p.index}]`, "DE/lv example pairing issue", p);
    }
  }

  // Closure-specific spot checks
  const spotChecks = [
    { studyId: "a1-huebsch", field: "study.comparison[2].example", mustInclude: "Hun er meget sød" },
    { studyId: "a1-fahren", field: "study.translation", mustEqual: "Køre" },
    { cardId: "a1-bitte", field: "study.sectionAccents.examples[1].lv.purple[0]", mustEqual: "Venligst" },
    { studyId: "a1-finden", field: "study.comparison[0].example", mustNotInclude: "Pārskatīti" },
    { studyId: "a1-noch-study", field: "study.explanation[1]", mustNotInclude: "Pārskatīti" },
  ];
  for (const sc of spotChecks) {
    const entry = findEntry(after, sc.studyId || sc.cardId);
    const val = sc.field === "lv" ? entry?.lv : getAt(entry, sc.field);
    if (val === undefined) add("HIGH", sc.studyId || sc.cardId, sc.field, "Closure spot-check path missing");
    else {
      if (sc.mustEqual && String(val) !== sc.mustEqual) add("HIGH", sc.studyId || sc.cardId, sc.field, `Expected "${sc.mustEqual}"`, { actual: val });
      if (sc.mustInclude && !String(val).includes(sc.mustInclude)) add("HIGH", sc.studyId || sc.cardId, sc.field, `Must include "${sc.mustInclude}"`, { actual: val });
      if (sc.mustNotInclude && String(val).includes(sc.mustNotInclude)) add("HIGH", sc.studyId || sc.cardId, sc.field, `Must not include "${sc.mustNotInclude}"`, { actual: val });
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
      ? "**DA–DE A1: FINAL CLOSED** (targeted regression PASS)"
      : "**DA–DE A1: REGRESSION ISSUES REMAIN**";

  const md = [
    "# DA–DE A1 targeted regression audit (READ-ONLY)",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Scope:** Only cards/fields changed vs \`origin/main\` during OWNER repair + final closure",
    "**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)",
    "**Production changes:** 0 (audit only)",
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Changed cards (vs main) | **${changedCards.size}** |`,
    `| New Study objects (full audit) | **${NEW_STUDY_IDS.length}/${NEW_STUDY_IDS.length}** |`,
    `| OWNER apply rows checked | **${applyMap.apply.length}** |`,
    `| DE changes | **${deChanges}** |`,
    `| Mirror data↔www | **${fs.readFileSync(DA_FILE).equals(fs.readFileSync(WWW_FILE)) ? "PASS" : "FAIL"}** |`,
    `| Parity (--lang=da) | **${parityPass ? "PASS" : "FAIL"}** |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    "",
    `### Verdict`,
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
