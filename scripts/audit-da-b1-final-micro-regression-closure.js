#!/usr/bin/env node
"use strict";
/**
 * DA–DE B1 final micro-repair regression + closure audit (READ-ONLY).
 * Validates 11 OWNER FJERN sectionAccents + full repair-scope reconfirmation.
 *
 * Usage: node scripts/audit-da-b1-final-micro-regression-closure.js
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
const MICRO_DECISIONS = path.join(ROOT, "reports/da-b1-owner-decisions-final-regression-01.md");
const REPORT = path.join(ROOT, "reports/da-b1-final-micro-regression-closure.md");
const OUT_JSON = path.join(ROOT, "reports/temp/da-b1-final-micro-regression-closure.json");
const MAIN_BEFORE = process.env.DA_B1_BEFORE || "/tmp/da-b1-before.js";
const PRE_MICRO_SHA = process.env.DA_B1_PRE_MICRO || "4bf7c487e2f0f13855f0be8f858012a7a3b2d8db";
const PRE_MICRO_REF = process.env.DA_B1_PRE_MICRO_FILE || "/tmp/da-b1-pre-micro.js";

const EXPECTED_CARDS = 3367;
const EXPECTED_STUDIES = 324;
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];
const MICRO_REQUESTED = 11;

const TARGET_CARDS = [
  "b1-absetzen",
  "b1-bestehen",
  "b1-dienen",
  "b1-einführen",
  "b1-einhalten",
  "b1-festhalten",
  "b1-hupe",
  "b1-kante",
  "b1-senden",
  "b1-übergeben",
];

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

const PIPE_ROW_WITH_CURRENT = /^\|\s*(\d+)\s*\|\s*(?:`{1,2})?([^|`]+?)(?:`{1,2})?\s*\|\s*(?:`{1,2})?([^|`]+?)(?:`{1,2})?\s*\|\s*(?:`{1,2})?([^|`]+?)(?:`{1,2})?\s*\|\s*(?:\*\*)?(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)(?:\*\*)?\s*\|\s*(.+)\|\s*$/;

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
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

function parseFjern(text) {
  const m = String(text || "")
    .trim()
    .match(/^FJERN\s+[`'"«]([^`'»"]+)[`'»"]\s*$/i);
  return m ? m[1].trim() : null;
}

function parseMicroDecisions() {
  const md = fs.readFileSync(MICRO_DECISIONS, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    const m = line.match(PIPE_ROW_WITH_CURRENT);
    if (!m || m[5] !== "LABOT") continue;
    const term = parseFjern(m[6]);
    if (!term) continue;
    rows.push({
      finding: Number(m[1]),
      cardId: m[2].trim(),
      field: normalizeField(m[3].trim()),
      current: m[4].trim().replace(/^`|`$/g, ""),
      removeTerm: term,
      ownerNew: m[6].trim(),
      action: "FJERN_ACCENT",
    });
  }
  return rows;
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

function stripSectionAccents(entry) {
  const clone = JSON.parse(JSON.stringify(entry));
  if (clone.study?.sectionAccents) delete clone.study.sectionAccents;
  return clone;
}

function isScopePath(cardId, diffPath, applyRows) {
  const norm = normalizeDiffPath(diffPath === "lv" ? "lv" : diffPath.startsWith("study.") ? diffPath : `study.${diffPath}`);
  return applyRows.some((r) => r.cardId === cardId && fieldPath(r) === norm);
}

function validateAccentPaths(entry, cardId) {
  const issues = [];
  const sa = entry.study?.sectionAccents;
  if (!sa) return issues;

  const walk = (obj, pfx) => {
    if (obj == null) return;
    if (Array.isArray(obj)) {
      obj.forEach((v, i) => walk(v, `${pfx}[${i}]`));
      return;
    }
    if (typeof obj !== "object") return;
    for (const [k, v] of Object.entries(obj)) {
      walk(v, pfx ? `${pfx}.${k}` : k);
    }
  };
  walk(sa, "study.sectionAccents");

  for (const row of parseMicroDecisions()) {
    if (row.cardId !== cardId) continue;
    const val = getAt(entry, row.field);
    if (val === undefined) {
      issues.push({ path: row.field, problem: "micro field missing after apply" });
    }
  }
  return issues;
}

function main() {
  execSync("node scripts/build-da-b1-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });

  if (!fs.existsSync(MAIN_BEFORE)) {
    execSync(`git show origin/main:data/da/b1.js > ${MAIN_BEFORE}`, { cwd: ROOT, encoding: "utf8" });
  }
  if (!fs.existsSync(PRE_MICRO_REF)) {
    execSync(`git show ${PRE_MICRO_SHA}:data/da/b1.js > ${PRE_MICRO_REF}`, { cwd: ROOT, encoding: "utf8" });
  }

  const microRows = parseMicroDecisions();
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const mainBefore = loadWords(MAIN_BEFORE);
  const preMicro = loadWords(PRE_MICRO_REF);
  const after = loadWords(DA_FILE);
  const deRef = loadWords(DE_FILE);

  const findings = [];
  let fid = 0;
  const add = (severity, cardId, field, problem, detail = {}) => {
    if (severity === "FALSE_POSITIVE" || severity === "NEEDS_SOURCE_REVIEW") return;
    fid++;
    findings.push({ id: `DA-B1-MRC-${String(fid).padStart(4, "0")}`, severity, cardId, field, problem, ...detail });
  };

  // --- 1. MICRO OWNER 11/11 ---
  const microStats = {
    requested: MICRO_REQUESTED,
    checked: 0,
    EXACT_MATCH: 0,
    MISMATCH: 0,
    MISSING_CARD: 0,
    MISSING_FIELD: 0,
    UNEXPECTED_VALUE: 0,
  };
  const microDetails = [];

  if (microRows.length !== MICRO_REQUESTED) {
    add("CRITICAL", "MICRO", "decisions", `Expected ${MICRO_REQUESTED} micro rows, parsed ${microRows.length}`);
  }

  for (const row of microRows) {
    microStats.checked++;
    const entry = findEntry(after, row.cardId);
    const fp = row.field;
    if (!entry) {
      microStats.MISSING_CARD++;
      microDetails.push({ ...row, match: "MISSING_CARD" });
      continue;
    }
    const actual = getAt(entry, fp);
    if (actual === undefined) {
      microStats.MISSING_FIELD++;
      microDetails.push({ ...row, match: "MISSING_FIELD" });
      continue;
    }
    if (termStillPresent(actual, row.removeTerm)) {
      microStats.MISMATCH++;
      microDetails.push({
        cardId: row.cardId,
        field: fp,
        match: "MISMATCH",
        expected: `FJERN «${row.removeTerm}»`,
        actual: String(actual).slice(0, 120),
      });
      continue;
    }
    microStats.EXACT_MATCH++;
  }

  const microPass =
    microStats.checked === MICRO_REQUESTED &&
    microStats.EXACT_MATCH === MICRO_REQUESTED &&
    microStats.MISMATCH === 0 &&
    microStats.MISSING_CARD === 0 &&
    microStats.MISSING_FIELD === 0 &&
    microStats.UNEXPECTED_VALUE === 0;

  // --- Micro unexpected changes vs pre-micro ---
  const microScopeKeys = new Set(microRows.map((r) => `${r.cardId}|${r.field}`));
  let microUnexpected = 0;
  let microStudyContentChanges = 0;

  for (const cardId of TARGET_CARDS) {
    const pre = findEntry(preMicro, cardId);
    const cur = findEntry(after, cardId);
    if (!pre || !cur) continue;

    const preNoAcc = stripSectionAccents(pre);
    const curNoAcc = stripSectionAccents(cur);
    if (JSON.stringify(preNoAcc) !== JSON.stringify(curNoAcc)) {
      microStudyContentChanges++;
      add("HIGH", cardId, "study", "Study/DA content changed during micro-repair (excluding sectionAccents)");
    }

    const diffs = walkDiff(pre, cur);
    for (const d of diffs) {
      if (DE_FIELDS.some((f) => d.path === f || d.path.startsWith(`${f}.`))) {
        microUnexpected++;
        add("CRITICAL", cardId, d.path, "DE field changed during micro-repair");
        continue;
      }
      const norm = normalizeDiffPath(d.path.startsWith("study.") ? d.path : `study.${d.path}`);
      const key = `${cardId}|${norm}`;
      if (!microScopeKeys.has(key) && !norm.includes("sectionAccents")) {
        microUnexpected++;
        add("HIGH", cardId, d.path, "Change outside 11 micro OWNER scope", {
          before: String(d.before).slice(0, 80),
          after: String(d.after).slice(0, 80),
        });
      }
    }
  }

  // --- Full repair scope (1643) ---
  const fullStats = {
    checked: 0,
    EXACT_MATCH: 0,
    MISMATCH: 0,
    MISSING_CARD: 0,
    MISSING_FIELD: 0,
    UNEXPECTED_VALUE: 0,
  };

  for (const row of applyMap.apply) {
    fullStats.checked++;
    const entry = findEntry(after, row.cardId);
    const fp = fieldPath(row);
    if (!entry) {
      fullStats.MISSING_CARD++;
      continue;
    }
    const actual = fp === "lv" ? entry.lv : getAt(entry, fp);
    if (actual === undefined) {
      fullStats.MISSING_FIELD++;
      continue;
    }
    if (row.action === "SET") {
      if (String(actual) === String(row.ownerNew)) fullStats.EXACT_MATCH++;
      else fullStats.MISMATCH++;
      continue;
    }
    if (row.action === "FJERN_ACCENT") {
      if (!termStillPresent(actual, row.removeTerm)) fullStats.EXACT_MATCH++;
      else fullStats.MISMATCH++;
    }
  }

  const fullPass =
    fullStats.MISMATCH === 0 &&
    fullStats.MISSING_CARD === 0 &&
    fullStats.MISSING_FIELD === 0 &&
    fullStats.UNEXPECTED_VALUE === 0;

  // --- Repair scope cards vs origin/main ---
  const changedCards = new Map();
  const cardApply = new Map();
  for (const row of applyMap.apply) {
    if (!cardApply.has(row.cardId)) cardApply.set(row.cardId, []);
    cardApply.get(row.cardId).push(row);
  }
  for (let i = 0; i < after.length; i++) {
    const diffs = walkDiff(mainBefore[i], after[i]);
    if (diffs.length) changedCards.set(entryId(after[i], i), { index: i, diffs, entry: after[i] });
  }

  let unexpectedChanges = 0;
  for (const [cardId, info] of changedCards) {
    const rows = cardApply.get(cardId) || [];
    for (const d of info.diffs) {
      if (DE_FIELDS.some((f) => d.path === f || d.path.startsWith(`${f}.`))) continue;
      if (!isScopePath(cardId, d.path, rows)) unexpectedChanges++;
    }
  }

  // --- Structure ---
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
      if (JSON.stringify(mainBefore[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
    if (mainBefore[i]?.de !== deRef[i]?.de) idOrderPass = false;
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de.fields", `${deChanges} DE field changes vs origin/main`);

  let parityPass = false;
  try {
    const out = execSync("node scripts/audit-language-parity.js --lang=da", { cwd: ROOT, encoding: "utf8" });
    const j = JSON.parse(out.trim());
    parityPass = j.pass === true && j.byLevel?.b1?.pass !== false;
    if (!parityPass) add("CRITICAL", "PARITY", "audit-language-parity", "Language parity FAIL");
  } catch (e) {
    add("CRITICAL", "PARITY", "audit-language-parity", "Parity script error", { error: String(e.message || e) });
  }

  const structurePass =
    cardCountPass && studyCountPass && mirrorPass && syntaxPass && idOrderPass && parityPass;
  const deReadOnlyPass = deChanges === 0;

  // --- Targeted 10 cards + full sweep ---
  let staleAccentCount = 0;
  let foreignAccentCount = 0;
  let placeholderCount = 0;
  let invalidPathCount = 0;

  for (const cardId of TARGET_CARDS) {
    const entry = findEntry(after, cardId);
    if (!entry?.study?.sectionAccents) continue;
    for (const issue of validateSectionAccents(entry.study, entry.study.sectionAccents)) {
      if (issue.kind === "stale_accent") staleAccentCount++;
      else foreignAccentCount++;
      add(issue.severity, cardId, issue.path, `${issue.kind}: "${issue.term}"`, {
        currentDa: issue.term,
        rationale: issue.studyContext || issue.foreign?.join(", "),
      });
    }
    for (const ip of validateAccentPaths(entry, cardId)) {
      invalidPathCount++;
      add("HIGH", cardId, ip.path, ip.problem);
    }
  }

  for (const [cardId, info] of changedCards) {
    if (TARGET_CARDS.includes(cardId)) continue;
    const entry = info.entry;
    walkDaStrings(entry, (text, fpath) => {
      const reasons = classifyForeign(text);
      if (!reasons.length) return;
      if (reasons.includes("PLACEHOLDER") && text.trim() === "") return;
      const sev = reasons.some((r) => ["LV_DIAC", "LV_WORD", "EN", "CS", "PL", "BS"].includes(r)) ? "HIGH" : "MEDIUM";
      if (reasons.includes("PLACEHOLDER")) placeholderCount++;
      else add(sev, cardId, fpath, `Foreign remnant: ${reasons.join(", ")}`, { currentDa: text.slice(0, 120) });
    });
    if (entry.study?.sectionAccents) {
      for (const issue of validateSectionAccents(entry.study, entry.study.sectionAccents)) {
        if (issue.kind === "stale_accent") staleAccentCount++;
        else foreignAccentCount++;
        add(issue.severity, cardId, issue.path, `${issue.kind}: "${issue.term}"`, {
          currentDa: issue.term,
          rationale: issue.studyContext || issue.foreign?.join(", "),
        });
      }
    }
  }

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const closed =
    microPass &&
    fullPass &&
    bySev.CRITICAL === 0 &&
    bySev.HIGH === 0 &&
    bySev.MEDIUM === 0 &&
    bySev.LOW === 0 &&
    staleAccentCount === 0 &&
    foreignAccentCount === 0 &&
    placeholderCount === 0 &&
    invalidPathCount === 0 &&
    deChanges === 0 &&
    unexpectedChanges === 0 &&
    microUnexpected === 0 &&
    microStudyContentChanges === 0 &&
    syntaxPass &&
    idOrderPass &&
    structurePass &&
    deReadOnlyPass &&
    mirrorPass;

  const verdict = closed
    ? "**DA–DE B1 — OWNER ACCEPTED / FULLY CLOSED**"
    : "**DA–DE B1 REPAIR: NOT CLOSED**";

  const md = [
    "# DA–DE B1 — final micro-repair regression closure",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Mode:** READ-ONLY (production changes = 0 in this audit)",
    `**Branch:** \`${gitBranch()}\``,
    `**HEAD:** \`${gitRev("HEAD")}\``,
    `**Pre-micro baseline:** \`${PRE_MICRO_SHA.slice(0, 12)}\``,
    `**Full repair baseline:** \`origin/main\` (\`${gitRev("origin/main").slice(0, 12)}\`)`,
    "**Production:** `data/da/b1.js` + mirror `www/data/da/b1.js`",
    "**OWNER source:** `reports/da-b1-owner-decisions-final-regression-01.md`",
    "",
    "## FINAL MICRO-REPAIR",
    "",
    "| Metrika | Skaitlis |",
    "|---------|--------:|",
    `| OWNER requested | **${microStats.requested}** |`,
    `| OWNER checked | **${microStats.checked}/${microStats.requested}** |`,
    `| EXACT_MATCH | **${microStats.EXACT_MATCH}/${microStats.requested}** |`,
    `| MISMATCH | **${microStats.MISMATCH}** |`,
    `| MISSING_CARD | **${microStats.MISSING_CARD}** |`,
    `| MISSING_FIELD | **${microStats.MISSING_FIELD}** |`,
    `| UNEXPECTED_VALUE | **${microStats.UNEXPECTED_VALUE}** |`,
    `| Micro prerequisite | **${microPass ? "PASS" : "FAIL"}** |`,
    `| Study content unchanged (10 cards) | **${microStudyContentChanges === 0 ? "PASS" : "FAIL"}** (${microStudyContentChanges}) |`,
    `| Micro unexpected changes | **${microUnexpected}** |`,
    "",
    "### Micro repair checklist (11/11)",
    "",
    "| # | Card ID | Field | Stale term | Result |",
    "|--:|---|---|---|---|",
  ];

  microRows.forEach((row, i) => {
    const detail = microDetails.find((d) => d.cardId === row.cardId && d.field === row.field);
    const result = detail ? detail.match : "EXACT_MATCH";
    md.push(`| ${i + 1} | \`${row.cardId}\` | \`${row.field}\` | ${row.removeTerm} | **${result}** |`);
  });

  md.push(
    "",
    "## FINAL REGRESSION",
    "",
    "### Full authoritative OWNER scope",
    "",
    "| Metrika | Skaitlis |",
    "|---------|--------:|",
    `| All OWNER LABOT checked | **${fullStats.checked}** |`,
    `| EXACT_MATCH | **${fullStats.EXACT_MATCH}** |`,
    `| MISMATCH | **${fullStats.MISMATCH}** |`,
    `| Full scope pass | **${fullPass ? "PASS" : "FAIL"}** |`,
    "",
    "### Repair-scope regression",
    "",
    "| Metrika | Skaitlis |",
    "|---------|--------:|",
    `| Repair-scope cards audited | **${changedCards.size}** |`,
    `| Target cards (micro) | **${TARGET_CARDS.length}** |`,
    `| Target fields (micro) | **${MICRO_REQUESTED}** |`,
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
    "| Kategorija | Skaitlis |",
    "|------------|--------:|",
    `| Residual stale sectionAccents | **${staleAccentCount}** |`,
    `| Foreign-language sectionAccents | **${foreignAccentCount}** |`,
    `| Placeholders | **${placeholderCount}** |`,
    `| Invalid sectionAccent paths | **${invalidPathCount}** |`,
    "",
    "## STRUCTURE",
    "",
    "| Gate | Rezultāts |",
    "|------|-----------|",
    `| syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID/order | **${idOrderPass ? "PASS" : "FAIL"}** |`,
    `| structure | **${structurePass ? "PASS" : "FAIL"}** |`,
    `| Mirror data ↔ www | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| DE changes | **${deChanges}** |`,
    `| DE READ-ONLY | **${deReadOnlyPass ? "PASS" : "FAIL"}** |`,
    `| Unexpected production changes (full scope) | **${unexpectedChanges}** |`,
    `| Cards | **${after.length}/${EXPECTED_CARDS}** |`,
    `| Study | **${studyCount}/${EXPECTED_STUDIES}** |`,
    "",
    "## FINAL CLOSURE VERDICT",
    "",
    verdict,
    ""
  );

  if (microDetails.length) {
    md.push("## Micro match anomalies", "");
    microDetails.forEach((d) => {
      md.push(`- \`${d.cardId}\` \`${d.field}\` **${d.match}** — expected: ${d.expected || `FJERN «${d.removeTerm}»`}; actual: ${d.actual || "—"}`);
    });
    md.push("");
  }

  if (findings.length) {
    md.push("## Reālie atlikušie atradumi", "");
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
    md.push("## Reālie atlikušie atradumi", "", "_Nav._", "");
  }

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(REPORT, md.join("\n"));

  const payload = {
    generatedAt: new Date().toISOString(),
    branch: gitBranch(),
    head: gitRev("HEAD"),
    preMicroSha: PRE_MICRO_SHA,
    mainBase: gitRev("origin/main"),
    microStats,
    microPass,
    microUnexpected,
    microStudyContentChanges,
    fullStats,
    fullPass,
    changedCards: changedCards.size,
    bySeverity: bySev,
    staleAccentCount,
    foreignAccentCount,
    placeholderCount,
    invalidPathCount,
    unexpectedChanges,
    deChanges,
    structural: { syntaxPass, mirrorPass, cardCountPass, studyCountPass, idOrderPass, parityPass, structurePass, deReadOnlyPass },
    closed,
    verdict: verdict.replace(/\*\*/g, ""),
    findings,
    microDetails,
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  console.log(
    JSON.stringify(
      {
        closed,
        verdict: payload.verdict,
        microStats,
        fullStats,
        bySev,
        staleAccentCount,
        report: REPORT,
      },
      null,
      2
    )
  );
  process.exit(closed ? 0 : 1);
}

main();
