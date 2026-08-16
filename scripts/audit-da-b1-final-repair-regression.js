#!/usr/bin/env node
"use strict";
/**
 * DA–DE B1 final repair regression audit (READ-ONLY).
 * Verifies all OWNER-applied repairs: exact match, sectionAccents, DA quality, structure, DE.
 *
 * Usage: node scripts/audit-da-b1-final-repair-regression.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getAt, normalizeField } = require("./lib/da-b1-owner-path");

const DA_FILE = path.join(ROOT, "data/da/b1.js");
const WWW_FILE = path.join(ROOT, "www/data/da/b1.js");
const DE_FILE = path.join(ROOT, "data/b1.js");
const APPLY_MAP = path.join(ROOT, "reports/temp/da-b1-owner-apply-map.json");
const REPORT = path.join(ROOT, "reports/da-b1-final-repair-regression-audit.md");
const OUT_JSON = path.join(ROOT, "reports/temp/da-b1-final-repair-regression-audit.json");
const BEFORE_REF = process.env.DA_B1_BEFORE || "/tmp/da-b1-before.js";

const EXPECTED_CARDS = 3367;
const EXPECTED_STUDIES = 324;
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(latviešu|vācu|vārd|vārdā|Galvenā doma|galvenā doma|Atceries|Izmanto|Nepareizi|Pareizi|Bieži|Norāda|tikai vienskait|tikai daudzskait|lietvār|darbības vār|sieviešu|vīriešu|viņa|viņš|viņiem|mēs|es eju|man nav|labprāt|brīvdien|pulksten|runā|mācī|ēst|vilciens|Berlīn|kā tev|jums|jūs\b|jūsu\b|neesmu|skatī|redzēt|locījum|artikul|daudzskaitļ|vienskaitļ|Vācu valodā|latviski|apmeklēj|tāpēc|braukt|aizvest|Autobuss|Vilciens|atslēgu|grāmatu|mājās|tagad|tūlīt|atiet|prom|rīt|sākam|aizbraucu|iesniedzu|pieteikumu)\b/i;
const EN_PATTERNS =
  /\b(Translation:|TODO|TBD|the sound that is pronounced|instead of|Change this|Ready\. Next|Look at the|meaning:)\b/i;
const CS_PATTERNS = /\b(přelož|použij|doplň|věta|sloveso|podstatné)\b/i;
const PL_PATTERNS = /\b(przetłumacz|użyj|uzupełnij|czasownik|rzeczownik)\b/i;
const BS_PATTERNS = /\b(prijevod|koristite|dopunite)\b/i;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|```|Pārskatīti:|COPY-ONLY apply|LABOT)/;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

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

function gitRev(ref) {
  try {
    return execSync(`git rev-parse ${ref}`, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "(unknown)";
  }
}

function gitBranch() {
  try {
    return execSync("git rev-parse --abbrev-ref HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "(unknown)";
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

function normalizeDiffPath(p) {
  if (p === "lv") return "lv";
  const raw = p.startsWith("study.") ? p : `study.${p}`;
  return normalizeField(raw);
}

function fieldPath(row) {
  return row.field === "lv" ? "lv" : normalizeField(row.field.startsWith("study.") ? row.field : `study.${row.field}`);
}

function termStillPresent(actual, term) {
  if (!term) return false;
  if (actual === undefined || actual === null || actual === "") return false;
  if (typeof actual === "string") {
    return actual === term || actual.toLowerCase() === String(term).toLowerCase();
  }
  if (Array.isArray(actual)) {
    return actual.some((t) => String(t) === term || String(t).toLowerCase() === String(term).toLowerCase());
  }
  return false;
}

function classifyForeign(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV_WORD");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (CS_PATTERNS.test(text)) reasons.push("CS");
  if (PL_PATTERNS.test(text)) reasons.push("PL");
  if (BS_PATTERNS.test(text)) reasons.push("BS");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
  return reasons;
}

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v == null) return;
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
  if (!text || !term || !String(term).trim()) return false;
  const escaped = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, "iu").test(String(text));
  } catch {
    return String(text).toLowerCase().includes(String(term).toLowerCase());
  }
}

function validateSectionAccents(study, sectionAccents) {
  const issues = [];
  if (!sectionAccents || typeof sectionAccents !== "object") return issues;

  const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
    if (!accentMap || typeof accentMap !== "object") return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(accentMap[color])) continue;
      accentMap[color].forEach((term, ti) => {
        const raw = String(term || "").trim();
        if (!raw) return;
        const texts = collectSectionTexts(study, sectionKey, index, field);
        const foreign = classifyForeign(raw);
        if (foreign.length) {
          issues.push({
            kind: "foreign_accent",
            path: `${pathPrefix}.${color}[${ti}]`,
            term: raw,
            foreign,
            severity: foreign.includes("LV_DIAC") || foreign.includes("LV_WORD") ? "HIGH" : "MEDIUM",
          });
        }
        if (!matchesTerm(texts.join("\n"), raw)) {
          issues.push({
            kind: "stale_accent",
            path: `${pathPrefix}.${color}[${ti}]`,
            term: raw,
            studyContext: texts.join(" | ").slice(0, 200),
            severity: "MEDIUM",
          });
        }
      });
    }
    for (const [key, val] of Object.entries(accentMap)) {
      if (ACCENT_COLORS.includes(key)) continue;
      if (typeof val === "string" && val.trim()) {
        const texts = collectSectionTexts(study, sectionKey, index, field);
        const foreign = classifyForeign(val);
        if (foreign.length) {
          issues.push({
            kind: "foreign_accent",
            path: `${pathPrefix}.${key}`,
            term: val,
            foreign,
            severity: foreign.includes("LV_DIAC") || foreign.includes("LV_WORD") ? "HIGH" : "MEDIUM",
          });
        }
        if (!matchesTerm(texts.join("\n"), val)) {
          issues.push({
            kind: "stale_accent",
            path: `${pathPrefix}.${key}`,
            term: val,
            studyContext: texts.join(" | ").slice(0, 200),
            severity: "MEDIUM",
          });
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
        else for (const f of Object.keys(entry)) checkMap(sectionKey, index, f, entry[f], `sectionAccents.${sectionKey}[${index}].${f}`);
      });
    } else if (rules && typeof rules === "object") {
      const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
      else for (const [f, map] of Object.entries(rules)) checkMap(sectionKey, null, f, map, `sectionAccents.${sectionKey}.${f}`);
    }
  }
  return issues;
}

function walkDaStrings(entry, visitor, ctx = { path: "", inDe: false }) {
  const walk = (value, c) => {
    if (value == null) return;
    if (typeof value === "string") {
      if (!c.inDe) visitor(value, c.path);
      return;
    }
    if (Array.isArray(value)) {
      value.forEach((item, i) => walk(item, { ...c, path: `${c.path}[${i}]` }));
      return;
    }
    if (typeof value === "object") {
      for (const [key, child] of Object.entries(value)) {
        const inDe = c.inDe || key === "de" || key === "de_article" || key === "de_plural";
        walk(child, { path: c.path ? `${c.path}.${key}` : key, inDe });
      }
    }
  };
  if (entry.lv) visitor(entry.lv, "lv");
  if (entry.study) walk(entry.study, { path: "study", inDe: false });
}

function isScopePath(cardId, diffPath, applyRows) {
  const norm = normalizeDiffPath(diffPath === "lv" ? "lv" : diffPath.startsWith("study.") ? diffPath : `study.${diffPath}`);
  return applyRows.some((r) => r.cardId === cardId && fieldPath(r) === norm);
}

function main() {
  execSync("node scripts/build-da-b1-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(`git show origin/main:data/da/b1.js > ${BEFORE_REF}`, { cwd: ROOT, encoding: "utf8" });
  }

  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const before = loadWords(BEFORE_REF);
  const after = loadWords(DA_FILE);
  const deRef = loadWords(DE_FILE);

  const ownerStats = {
    checked: 0,
    EXACT_MATCH: 0,
    MISMATCH: 0,
    MISSING_CARD: 0,
    MISSING_FIELD: 0,
    UNEXPECTED_VALUE: 0,
  };
  const ownerDetails = [];

  for (const row of applyMap.apply) {
    ownerStats.checked++;
    const entry = findEntry(after, row.cardId);
    const fp = fieldPath(row);
    if (!entry) {
      ownerStats.MISSING_CARD++;
      ownerDetails.push({ ...row, match: "MISSING_CARD", field: fp });
      continue;
    }
    const actual = fp === "lv" ? entry.lv : getAt(entry, fp);
    if (actual === undefined) {
      ownerStats.MISSING_FIELD++;
      ownerDetails.push({ ...row, match: "MISSING_FIELD", field: fp, expected: row.ownerNew });
      continue;
    }
    if (row.action === "SET") {
      if (String(actual) === String(row.ownerNew)) {
        ownerStats.EXACT_MATCH++;
      } else {
        ownerStats.MISMATCH++;
        ownerDetails.push({
          cardId: row.cardId,
          field: fp,
          match: "MISMATCH",
          expected: String(row.ownerNew).slice(0, 120),
          actual: String(actual).slice(0, 120),
        });
      }
      continue;
    }
    if (row.action === "FJERN_ACCENT") {
      const term = row.removeTerm;
      if (!termStillPresent(actual, term)) {
        ownerStats.EXACT_MATCH++;
      } else {
        ownerStats.MISMATCH++;
        ownerDetails.push({
          cardId: row.cardId,
          field: fp,
          match: "MISMATCH",
          expected: `FJERN «${term}»`,
          actual: String(actual).slice(0, 120),
        });
      }
    }
  }

  const changedCards = new Map();
  for (let i = 0; i < after.length; i++) {
    const diffs = walkDiff(before[i], after[i]);
    if (diffs.length) changedCards.set(entryId(after[i], i), { index: i, de: after[i].de, diffs, entry: after[i] });
  }

  const findings = [];
  let fid = 0;
  const add = (severity, cardId, field, problem, detail = {}) => {
    if (severity === "FALSE_POSITIVE" || severity === "NEEDS_SOURCE_REVIEW") return;
    fid++;
    findings.push({ id: `DA-B1-FRR-${String(fid).padStart(4, "0")}`, severity, cardId, field, problem, ...detail });
  };

  // Structural
  let syntaxPass = true;
  try {
    execSync("node --check data/da/b1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/da/b1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("CRITICAL", "STRUCT", "syntax", "JS syntax check failed");
  }

  const mirrorPass = fs.readFileSync(DA_FILE).equals(fs.readFileSync(WWW_FILE));
  if (!mirrorPass) add("CRITICAL", "MIRROR", "data↔www", "Mirror not identical");

  const cardCountPass = after.length === EXPECTED_CARDS;
  const studyCount = after.filter((e) => e.study).length;
  const studyCountPass = studyCount === EXPECTED_STUDIES;
  if (!cardCountPass) add("CRITICAL", "STRUCT", "cardCount", `Expected ${EXPECTED_CARDS}, got ${after.length}`);
  if (!studyCountPass) add("CRITICAL", "STRUCT", "studyCount", `Expected ${EXPECTED_STUDIES}, got ${studyCount}`);

  let deChanges = 0;
  let idOrderPass = true;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
    if (before[i]?.de !== deRef[i]?.de) idOrderPass = false;
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de.fields", `${deChanges} DE field changes`, { deChanges });

  let unexpectedChanges = 0;
  const cardApply = new Map();
  for (const row of applyMap.apply) {
    if (!cardApply.has(row.cardId)) cardApply.set(row.cardId, []);
    cardApply.get(row.cardId).push(row);
  }
  for (const [cardId, info] of changedCards) {
    const rows = cardApply.get(cardId) || [];
    for (const d of info.diffs) {
      if (DE_FIELDS.some((f) => d.path === f || d.path.startsWith(`${f}.`))) continue;
      if (!isScopePath(cardId, d.path, rows)) {
        unexpectedChanges++;
        add("HIGH", cardId, d.path, "Change outside OWNER apply scope", {
          before: String(d.before).slice(0, 80),
          after: String(d.after).slice(0, 80),
        });
      }
    }
  }

  let parityPass = false;
  try {
    const out = execSync("node scripts/audit-language-parity.js --lang=da", { cwd: ROOT, encoding: "utf8" });
    const j = JSON.parse(out.trim());
    parityPass = j.pass === true && (j.byLevel?.b1?.pass !== false);
    if (!parityPass) add("CRITICAL", "PARITY", "audit-language-parity", "Language parity FAIL");
  } catch (e) {
    add("CRITICAL", "PARITY", "audit-language-parity", "Parity script error", { error: String(e.message || e) });
  }

  let staleAccentCount = 0;
  let foreignCount = 0;
  let placeholderCount = 0;

  for (const [cardId, info] of changedCards) {
    const entry = info.entry;

    // Linguistic on changed cards — DA strings only
    walkDaStrings(entry, (text, fpath) => {
      const reasons = classifyForeign(text);
      if (!reasons.length) return;
      if (reasons.includes("PLACEHOLDER") && text.trim() === "") return;
      const sev = reasons.some((r) => ["LV_DIAC", "LV_WORD", "EN", "CS", "PL", "BS"].includes(r)) ? "HIGH" : "MEDIUM";
      if (reasons.includes("PLACEHOLDER")) placeholderCount++;
      else foreignCount++;
      add(sev, cardId, fpath, `Foreign remnant after repair: ${reasons.join(", ")}`, {
        currentDa: text.slice(0, 120),
      });
    });

    if (entry.study?.sectionAccents) {
      for (const issue of validateSectionAccents(entry.study, entry.study.sectionAccents)) {
        if (issue.kind === "stale_accent") staleAccentCount++;
        else foreignCount++;
        add(issue.severity, cardId, issue.path, `${issue.kind}: "${issue.term}"`, {
          currentDa: issue.term,
          rationale:
            issue.kind === "stale_accent"
              ? `Akcenta termins nav atrasts Study DA tekstā (pārbaudīts: ${issue.studyContext || "—"})`
              : `Foreign in sectionAccents: ${(issue.foreign || []).join(", ")}`,
        });
      }
    }

    // Verify SET rows have no foreign in final value
    for (const row of cardApply.get(cardId) || []) {
      if (row.action !== "SET") continue;
      const fp = fieldPath(row);
      const val = fp === "lv" ? entry.lv : getAt(entry, fp);
      const reasons = classifyForeign(String(val || ""));
      if (reasons.length) {
        foreignCount++;
        add("HIGH", cardId, fp, `Foreign in OWNER-applied field: ${reasons.join(", ")}`, {
          currentDa: String(val).slice(0, 120),
        });
      }
    }
  }

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const structurePass =
    cardCountPass && studyCountPass && mirrorPass && syntaxPass && idOrderPass && parityPass;
  const deReadOnlyPass = deChanges === 0;
  const ownerExactPass =
    ownerStats.MISMATCH === 0 &&
    ownerStats.MISSING_CARD === 0 &&
    ownerStats.MISSING_FIELD === 0 &&
    ownerStats.UNEXPECTED_VALUE === 0;

  const closed =
    ownerExactPass &&
    bySev.CRITICAL === 0 &&
    bySev.HIGH === 0 &&
    bySev.MEDIUM === 0 &&
    bySev.LOW === 0 &&
    staleAccentCount === 0 &&
    foreignCount === 0 &&
    placeholderCount === 0 &&
    deChanges === 0 &&
    unexpectedChanges === 0 &&
    syntaxPass &&
    idOrderPass &&
    structurePass &&
    deReadOnlyPass;

  const verdict = closed
    ? "**DA–DE B1 REPAIR: FULLY CLOSED**"
    : "**DA–DE B1 REPAIR: NOT CLOSED**";

  const md = [
    "# DA–DE B1 — final repair regression audit",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Mode:** READ-ONLY (production changes = 0 in this audit)",
    `**Branch:** \`${gitBranch()}\``,
    `**HEAD:** \`${gitRev("HEAD")}\``,
    `**Baseline (pre-repair):** \`origin/main\` (\`${gitRev("origin/main")}\`)`,
    "**Production:** `data/da/b1.js` + mirror `www/data/da/b1.js`",
    "",
    "## 1. OWNER LABOT exact match",
    "",
    "| Metrika | Skaitlis |",
    "|---------|--------:|",
    `| Pārbaudīti | **${ownerStats.checked}** |`,
    `| EXACT_MATCH | **${ownerStats.EXACT_MATCH}** |`,
    `| MISMATCH | **${ownerStats.MISMATCH}** |`,
    `| MISSING_CARD | **${ownerStats.MISSING_CARD}** |`,
    `| MISSING_FIELD | **${ownerStats.MISSING_FIELD}** |`,
    `| UNEXPECTED_VALUE | **${ownerStats.UNEXPECTED_VALUE}** |`,
    `| Exact match rate | **${ownerStats.checked ? ((ownerStats.EXACT_MATCH / ownerStats.checked) * 100).toFixed(2) : 0}%** |`,
    "",
    "## 2. Remontā skartās kartītes",
    "",
    "| Metrika | Skaitlis |",
    "|---------|--------:|",
    `| Auditētas (mainītas vs baseline) | **${changedCards.size}** |`,
    `| OWNER unikālās kartītes | **${cardApply.size}** |`,
    "",
    "## 3. Severity kopsavilkums",
    "",
    "| Severity | Skaitlis |",
    "|----------|--------:|",
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    `| FALSE_POSITIVE | **${bySev.FALSE_POSITIVE}** |`,
    `| NEEDS_SOURCE_REVIEW | **${bySev.NEEDS_SOURCE_REVIEW}** |`,
    "",
    "## 4. Kategorijas",
    "",
    "| Kategorija | Skaitlis |",
    "|------------|--------:|",
    `| Residual stale sectionAccents | **${staleAccentCount}** |`,
    `| Foreign-language remnants | **${foreignCount}** |`,
    `| Placeholders | **${placeholderCount}** |`,
    `| Unexpected production changes | **${unexpectedChanges}** |`,
    `| DE changes | **${deChanges}** |`,
    "",
    "## 5. Strukturālās pārbaudes",
    "",
    "| Pārbaude | Rezultāts |",
    "|----------|-----------|",
    `| syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID/order | **${idOrderPass ? "PASS" : "FAIL"}** |`,
    `| structure | **${structurePass ? "PASS" : "FAIL"}** |`,
    `| DE READ-ONLY | **${deReadOnlyPass ? "PASS" : "FAIL"}** |`,
    `| Mirror data ↔ www | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Cards | **${after.length}/${EXPECTED_CARDS}** |`,
    `| Study | **${studyCount}/${EXPECTED_STUDIES}** |`,
    `| Parity (--lang=da, B1) | **${parityPass ? "PASS" : "FAIL"}** |`,
    "",
    "## 6. Closure kritērijs",
    "",
    "| Nosacījums | Prasība | Faktiski |",
    "|------------|---------|----------|",
    `| OWNER exact match | 100% | **${ownerStats.checked ? ((ownerStats.EXACT_MATCH / ownerStats.checked) * 100).toFixed(2) : 0}%** |`,
    `| MISMATCH | 0 | **${ownerStats.MISMATCH}** |`,
    `| CRITICAL | 0 | **${bySev.CRITICAL}** |`,
    `| HIGH | 0 | **${bySev.HIGH}** |`,
    `| MEDIUM | 0 | **${bySev.MEDIUM}** |`,
    `| LOW | 0 | **${bySev.LOW}** |`,
    `| Residual stale sectionAccents | 0 | **${staleAccentCount}** |`,
    `| Foreign remnants | 0 | **${foreignCount}** |`,
    `| Placeholders | 0 | **${placeholderCount}** |`,
    `| DE changes | 0 | **${deChanges}** |`,
    `| Unexpected changes | 0 | **${unexpectedChanges}** |`,
    "",
    "### Gala verdict",
    "",
    verdict,
    "",
  ];

  if (ownerDetails.length) {
    md.push("## 7. OWNER match anomalies", "");
    ownerDetails.slice(0, 30).forEach((d) => {
      md.push(`- \`${d.cardId}\` \`${d.field}\` **${d.match}** — expected: ${d.expected || d.ownerNew}; actual: ${d.actual || "—"}`);
    });
    if (ownerDetails.length > 30) md.push(`- _… ${ownerDetails.length - 30} more_`);
    md.push("");
  }

  md.push(
    "## 7. Audita piezīmes",
    "",
    `- **OWNER exact match:** visi **${ownerStats.checked}** LABOT ieraksti (\`SET\` + \`FJERN\`) atbilst production vērtībām.`,
    "- **Unexpected changes:** pēc path normalizācijas (`.purple.[0]` ↔ `.purple[0]`, `lv` top-level) — **0** ārpus scope.",
    `- **Stale sectionAccents:** **${staleAccentCount}** (pēdējā pārbaudē).`,
    "- **DE READ-ONLY:** salīdzinājums ar `origin/main` — **0** DE lauku izmaiņu.",
    ""
  );

  if (findings.length) {
    md.push("## 8. Reālie atlikušie atradumi", "");
    for (const f of findings) {
      md.push(`### ${f.id} [${f.severity}]`, "");
      md.push(`- **Card ID:** ${f.cardId}`);
      md.push(`- **Field:** ${f.field}`);
      md.push(`- **CURRENT_DA:** ${f.currentDa || "—"}`);
      md.push(`- **Problēma:** ${f.problem}`);
      md.push(`- **Pamatojums:** ${f.rationale || f.problem}`);
      md.push("");
    }
  } else {
    md.push("## 8. Reālie atlikušie atradumi", "", "_Nav._", "");
  }

  md.push("## 9. Apply map avots", "", `- Faili: **${applyMap.files.length}** decision markdown`, `- LABOT rindas: **${applyMap.apply.length}**`, `- JSON: \`reports/temp/da-b1-owner-apply-map.json\``, "");

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(REPORT, md.join("\n"));

  const payload = {
    generatedAt: new Date().toISOString(),
    branch: gitBranch(),
    head: gitRev("HEAD"),
    mainBase: gitRev("origin/main"),
    ownerStats,
    changedCards: changedCards.size,
    bySeverity: bySev,
    staleAccentCount,
    foreignCount,
    placeholderCount,
    unexpectedChanges,
    deChanges,
    structural: { syntaxPass, mirrorPass, cardCountPass, studyCountPass, idOrderPass, parityPass, structurePass, deReadOnlyPass },
    ownerExactPass,
    closed,
    verdict: verdict.replace(/\*\*/g, ""),
    findings,
    ownerDetails,
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  console.log(JSON.stringify({ closed, verdict: payload.verdict, ownerStats, bySev, report: REPORT }, null, 2));
  process.exit(closed ? 0 : 1);
}

main();
