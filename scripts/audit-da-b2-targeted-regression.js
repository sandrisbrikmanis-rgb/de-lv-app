#!/usr/bin/env node
"use strict";
/**
 * DA–DE B2 targeted regression audit (READ-ONLY).
 * Validates production vs OWNER decisions after COPY-ONLY repair.
 * Usage: node scripts/audit-da-b2-targeted-regression.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getAt, normalizeField } = require("./lib/da-b2-owner-path");

const DA_FILE = path.join(ROOT, "data/da/b2.js");
const WWW_FILE = path.join(ROOT, "www/data/da/b2.js");
const DE_FILE = path.join(ROOT, "data/b2.js");
const APPLY_MAP = path.join(ROOT, "reports/temp/da-b2-owner-apply-map.json");
const REPORT = path.join(ROOT, "reports/da-b2-targeted-regression-audit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/da-b2-targeted-regression-audit.json");
const BEFORE_REF = process.env.DA_B2_BEFORE || "/tmp/da-b2-before.js";

const EXPECTED_CARDS = 2118;
const EXPECTED_STUDIES = 60;

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(latviešu|vācu|vārd|vārdā|vārdos|Galvenā doma|galvenā doma|Atceries|Izmanto|Nepareizi|Pareizi|Bieži|Norāda|tikai vienskait|tikai daudzskait|lietvār|darbības vār|sieviešu|vīriešu|viņa|viņš|viņiem|mēs|es eju|man nav|ko jūs|labprāt|brīvdien|atvaļinā|pulksten|skolot|runā|mācī|ēst|ēdiens|dārzeņ|augļi|televīz|apetīte|vilciens|dzimšanas|Berlīn|Spānij|kā tev|mums jā|tev jā|jums|jūs\b|jūsu\b|neesmu|skatī|redzēt|sauc par|tikpat|pārāk dārgi|iekšā|uz vietu|kam\?|mērķi|nenoteik|locījum|artikul|daudzskaitļ|vienskaitļ|retāk|Izvēl|konstrukciju|Vācu valodā|latviski|Brīvdienās|Bērniem|apmeklēj|apciemoj|tāpēc|peldēt|maksāt|vecvecāk|palīdzu|stāstu|man jā|rīsi|mācēt|prast|braukt|vest|aizvest|Autobuss|Vilciens|atslēgu|pieteikumu|aizbraucu|iesniedzu|grāmatu|mājās|tagad|tūlīt|atiet|prom|rīt|sākam|Viņš|Viņa|Plūdi|plūdi|izpostīja|mājas|uzsver|termiņu|Atkārtotais|izdevums|iznāca|pavasarī|būt spiedienā|piešķir|uzdevumu|man dod|darbu|sadala|uzdevumus|nepatīk|piedāvāju|palīdzību|piedāvā|naudas)\b/i;
const EN_PATTERNS =
  /\b(Carry away|Stand-off|Translation:|TODO|TBD|the sound that is pronounced|instead of|Change this|Ready\. Next|Look at the|a tailor|gardeners?|rubber|several, several|here, here|you are|meaning:)\b/i;
const CS_PATTERNS = /\b(přelož|použij|doplň|věta|sloveso|podstatné)\b/i;
const PL_PATTERNS = /\b(przetłumacz|użyj|uzupełnij|czasownik|rzeczownik)\b/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const MOJIBAKE = /â€|Ã.|Ô./;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|```|Translation:|Tulkojums:|Pārskatīti:|COPY-ONLY apply)/;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function loadWords(filePath, key = "B2_WORDS") {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function normalizeText(text) {
  return String(text || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
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
  if (CS_PATTERNS.test(text)) reasons.push("CS");
  if (PL_PATTERNS.test(text)) reasons.push("PL");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  if (MOJIBAKE.test(text)) reasons.push("MOJIBAKE");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
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

function accentTargetInText(text, term, isDeField = false) {
  if (matchesTerm(text, term)) return true;
  if (!isDeField || !text || !term || String(term).length < 3) return false;
  return String(text).toLowerCase().includes(String(term).toLowerCase());
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
        const isDeField = field === "de";
        if (!accentTargetInText(texts.join("\n"), raw, isDeField)) {
          mismatches.push({ path: pathPrefix, target: raw, section: sectionKey, field: field || null, cardDe, isDeField });
        }
      }
    }
    for (const [key, val] of Object.entries(accentMap)) {
      if (ACCENT_COLORS.includes(key)) continue;
      if (typeof val === "string" && val.trim()) {
        const texts = collectSectionTexts(study, sectionKey, index, field);
        const isDeField = field === "de";
        if (!accentTargetInText(texts.join("\n"), val, isDeField)) {
          mismatches.push({ path: `${pathPrefix}.${key}`, target: val, section: sectionKey, field: field || null, cardDe, isDeField });
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
    if (reasons.length) issues.push({ index: i, example: ex, reasons, daSide: daSide.slice(0, 120) });
  });
  return issues;
}

function lvChainIssues(text) {
  if (typeof text !== "string" || !text.includes("•")) return [];
  const parts = text.split("•").map((p) => normalizeText(p)).filter(Boolean);
  const issues = [];
  const seen = new Set();
  for (const p of parts) {
    const key = p.toLowerCase();
    if (seen.has(key)) issues.push({ kind: "DUPLICATE_SYNONYM", part: p });
    seen.add(key);
  }
  if (parts.length > 3) issues.push({ kind: "LONG_SYNONYM_CHAIN", count: parts.length });
  return issues;
}

function ownerFieldPath(field) {
  const f = normalizeField(field);
  return f === "lv" ? "lv" : f.startsWith("study.") ? f : `study.${f}`;
}

function diffPathToOwnerField(diffPath) {
  if (!diffPath || diffPath === "lv") return "lv";
  if (diffPath.startsWith("study.")) return diffPath;
  return `study.${diffPath}`;
}

function main() {
  execSync("node scripts/build-da-b2-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  if (!fs.existsSync(BEFORE_REF)) {
    execSync(`git show origin/main:data/da/b2.js > ${BEFORE_REF}`, { cwd: ROOT, stdio: "pipe" });
  }

  const before = loadWords(BEFORE_REF);
  const after = loadWords(DA_FILE);
  const deRef = loadWords(DE_FILE);
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));

  const ownerMatch = { EXACT_MATCH: 0, MISMATCH: 0, MISSING_CARD: 0, MISSING_FIELD: 0 };
  const ownerRows = [];
  const findings = [];
  let fid = 0;

  function add(severity, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({
      id: `DA-B2-REG-${String(fid).padStart(4, "0")}`,
      severity,
      cardId,
      field,
      problem,
      current: detail.current || detail.actual || "",
      recommended: detail.recommended || detail.expected || "",
      ...detail,
    });
  }

  const syntaxPass = (() => {
    try {
      execSync("node --check data/da/b2.js", { cwd: ROOT, stdio: "pipe" });
      execSync("node --check www/data/da/b2.js", { cwd: ROOT, stdio: "pipe" });
      return true;
    } catch {
      return false;
    }
  })();

  if (!syntaxPass) add("CRITICAL", "STRUCT", "syntax", "JS syntax check failed");

  const mirrorPass = fs.readFileSync(DA_FILE).equals(fs.readFileSync(WWW_FILE));
  if (!mirrorPass) add("CRITICAL", "MIRROR", "data↔www", "Production mirror not identical");

  if (after.length !== EXPECTED_CARDS) {
    add("CRITICAL", "STRUCT", "cardCount", `Expected ${EXPECTED_CARDS}, got ${after.length}`);
  }
  const studyCount = after.filter((e) => e.study).length;
  if (studyCount !== EXPECTED_STUDIES) {
    add("CRITICAL", "STRUCT", "studyCount", `Expected ${EXPECTED_STUDIES}, got ${studyCount}`);
  }

  let deChanges = 0;
  let idOrderPass = true;
  for (let i = 0; i < after.length; i++) {
    for (const f of ["de", "de_article", "de_plural", "level"]) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
    if (before[i]?.de !== deRef[i]?.de) {
      idOrderPass = false;
      add("CRITICAL", entryId(after[i], i), "de.order", "DE order mismatch vs etalon", { index: i });
    }
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de.fields", `${deChanges} DE field changes detected`, { deChanges });

  let parityPass = false;
  try {
    const out = execSync("node scripts/audit-language-parity.js --lang=da", { cwd: ROOT, encoding: "utf8" });
    const j = JSON.parse(out.trim());
    parityPass = j.pass === true && (j.byLevel?.b2?.pass !== false);
    if (!parityPass) add("CRITICAL", "PARITY", "audit-language-parity", "Parity FAIL", { issues: j.issues });
  } catch (e) {
    add("CRITICAL", "PARITY", "audit-language-parity", "Parity script error", { error: String(e.message || e) });
  }

  const allowedFields = new Map();
  for (const row of applyMap.apply) {
    const key = `${row.cardId}|${normalizeField(row.field)}`;
    allowedFields.set(key, row);
  }

  for (const row of applyMap.apply) {
    const fieldPath = ownerFieldPath(row.field);
    const entry = findEntry(after, row.cardId);
    if (!entry) {
      ownerMatch.MISSING_CARD++;
      ownerRows.push({ finding: row.finding, cardId: row.cardId, field: fieldPath, status: "MISSING_CARD" });
      add("HIGH", row.cardId, fieldPath, "OWNER target card not found", {
        expected: row.ownerNew,
        recommended: row.ownerNew,
      });
      continue;
    }

    const actualVal = fieldPath === "lv" ? entry.lv : getAt(entry, fieldPath);
    if (actualVal === undefined) {
      ownerMatch.MISSING_FIELD++;
      ownerRows.push({ finding: row.finding, cardId: row.cardId, field: fieldPath, status: "MISSING_FIELD" });
      add("HIGH", row.cardId, fieldPath, "OWNER target path missing after apply", {
        expected: row.ownerNew,
        recommended: row.ownerNew,
      });
      continue;
    }

    if (normalizeText(actualVal) === normalizeText(row.ownerNew)) {
      ownerMatch.EXACT_MATCH++;
      ownerRows.push({ finding: row.finding, cardId: row.cardId, field: fieldPath, status: "EXACT_MATCH" });
    } else {
      ownerMatch.MISMATCH++;
      ownerRows.push({ finding: row.finding, cardId: row.cardId, field: fieldPath, status: "MISMATCH" });
      add("HIGH", row.cardId, fieldPath, "OWNER NEW value mismatch", {
        current: String(actualVal).slice(0, 160),
        expected: String(row.ownerNew).slice(0, 160),
        recommended: String(row.ownerNew).slice(0, 160),
      });
    }
  }

  const changedCards = new Map();
  const changedFields = new Set();
  let unexpectedChanges = 0;

  for (let i = 0; i < after.length; i++) {
    const diffs = walkDiff(before[i], after[i]);
    if (!diffs.length) continue;
    const cardId = entryId(after[i], i);
    changedCards.set(cardId, { index: i, de: after[i].de, diffs, entry: after[i] });

    for (const d of diffs) {
      if (["de", "de_article", "de_plural", "level"].some((x) => d.path === x || d.path.startsWith(`${x}.`))) continue;
      changedFields.add(`${cardId}|${diffPathToOwnerField(d.path)}`);

      const ownerKey = [...allowedFields.keys()].find((k) => {
        const [cid, field] = k.split("|");
        return cid === cardId && normalizeField(field) === normalizeField(diffPathToOwnerField(d.path));
      });
      if (!ownerKey) {
        unexpectedChanges++;
        add("HIGH", cardId, d.path, "UNEXPECTED_CHANGE outside OWNER scope", {
          current: String(d.after).slice(0, 120),
          before: String(d.before).slice(0, 120),
          recommended: "Revert or document in OWNER decisions",
        });
      }
    }
  }

  const remnantCounts = { LV: 0, EN: 0, OTHER: 0, PLACEHOLDER: 0, ZERO_WIDTH: 0, staleSectionAccents: 0 };
  const falsePositives = [];

  for (const [cardId, info] of changedCards) {
    const entry = info.entry;

    for (const d of info.diffs) {
      if (["de", "de_article", "de_plural", "level"].some((x) => d.path === x || d.path.startsWith(`${x}.`))) continue;
      if (typeof d.after !== "string") continue;

      const reasons = classifyForeign(d.after);
      if (reasons.includes("LV_DIAC") || reasons.includes("LV_WORD")) {
        remnantCounts.LV++;
        add("HIGH", cardId, d.path, `LV remnant in changed field: ${reasons.join(", ")}`, {
          current: d.after.slice(0, 160),
          recommended: "Replace LV fragment with natural Danish",
        });
      } else if (reasons.includes("EN")) {
        remnantCounts.EN++;
        add("HIGH", cardId, d.path, `EN remnant in changed field: ${reasons.join(", ")}`, {
          current: d.after.slice(0, 160),
          recommended: "Replace English fragment with natural Danish",
        });
      } else if (reasons.includes("CS") || reasons.includes("PL")) {
        remnantCounts.OTHER++;
        add("HIGH", cardId, d.path, `Foreign remnant in changed field: ${reasons.join(", ")}`, {
          current: d.after.slice(0, 160),
          recommended: "Replace foreign fragment with natural Danish",
        });
      } else if (reasons.includes("PLACEHOLDER") || reasons.includes("MOJIBAKE")) {
        remnantCounts.PLACEHOLDER++;
        add("HIGH", cardId, d.path, `Placeholder/corruption in changed field: ${reasons.join(", ")}`, {
          current: d.after.slice(0, 160),
          recommended: "Remove placeholder/corruption",
        });
      } else if (reasons.includes("ZERO_WIDTH")) {
        remnantCounts.ZERO_WIDTH++;
        add("MEDIUM", cardId, d.path, `Zero-width artifact in changed field`, {
          current: d.after.slice(0, 160),
          recommended: "Strip zero-width characters",
        });
      }

      if (d.path === "lv") {
        for (const issue of lvChainIssues(d.after)) {
          if (issue.kind === "DUPLICATE_SYNONYM") {
            add("MEDIUM", cardId, "lv", `Duplicate synonym in lv chain: "${issue.part}"`, {
              current: d.after.slice(0, 160),
              recommended: "Remove duplicate meaning segment",
            });
          } else if (issue.kind === "LONG_SYNONYM_CHAIN") {
            add("MEDIUM", cardId, "lv", `Long synonym chain (${issue.count} segments)`, {
              current: d.after.slice(0, 160),
              recommended: "Reduce to 1–2 natural Danish synonyms",
            });
          }
        }
      }
    }

    if (entry.study) {
      for (const c of comparisonExampleIssues(entry.study)) {
        add("HIGH", cardId, `study.comparison[${c.index}].example`, `Comparison DA side foreign: ${c.reasons.join(", ")}`, {
          current: c.example,
          recommended: "DE = DA comparison; replace foreign DA side with Danish",
        });
      }

      if (entry.study.sectionAccents) {
        for (const m of validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de)) {
          const foreignInTarget = classifyForeign(m.target);
          if (foreignInTarget.length) {
            add("MEDIUM", cardId, m.path, `sectionAccent target contains foreign fragment: "${m.target}"`, {
              current: m.target,
              recommended: "Replace accent target with Danish fragment from Study text",
            });
          } else {
            const texts = collectSectionTexts(entry.study, m.section, null, m.field);
            const inText = accentTargetInText(texts.join("\n"), m.target, m.isDeField || m.field === "de");
            if (!inText) {
              remnantCounts.staleSectionAccents++;
              add("LOW", cardId, m.path, `Stale sectionAccent target not in Study text: "${m.target}"`, {
                current: m.target,
                recommended: "Update sectionAccent to match Study text or remove stale highlight",
              });
            } else {
              falsePositives.push({
                cardId,
                field: m.path,
                note: m.isDeField ? "DE verb-stem highlight validated in conjugated form" : "sectionAccent target validated in context",
                target: m.target,
              });
            }
          }
        }
      }
    }
  }

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, FALSE_POSITIVE: falsePositives.length };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const realFindings = findings.filter((f) => f.severity !== "FALSE_POSITIVE");
  const pass =
    ownerMatch.MISMATCH === 0 &&
    ownerMatch.MISSING_CARD === 0 &&
    ownerMatch.MISSING_FIELD === 0 &&
    bySev.CRITICAL === 0 &&
    bySev.HIGH === 0 &&
    bySev.MEDIUM === 0 &&
    remnantCounts.LV === 0 &&
    remnantCounts.EN === 0 &&
    remnantCounts.OTHER === 0 &&
    remnantCounts.PLACEHOLDER === 0 &&
    remnantCounts.ZERO_WIDTH === 0 &&
    remnantCounts.staleSectionAccents === 0 &&
    deChanges === 0 &&
    unexpectedChanges === 0 &&
    syntaxPass &&
    mirrorPass &&
    idOrderPass &&
    parityPass;

  const verdict = pass
    ? "**DA–DE B2 TARGETED REGRESSION AUDIT — PASS**"
    : "**DA–DE B2 TARGETED REGRESSION AUDIT — FAIL**";

  const md = [
    "# DA–DE B2 targeted regression audit (READ-ONLY)",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Scope:** Production `data/da/b2.js` vs all OWNER decisions (`da-b2-owner-decisions-01..08.md`) after COPY-ONLY repair",
    "**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)",
    "**Production changes:** 0 (audit only)",
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| OWNER mappings loaded | **${applyMap.apply.length}** |`,
    `| Unique (Card ID, Field) | **${allowedFields.size}** |`,
    `| EXACT_MATCH | **${ownerMatch.EXACT_MATCH}** |`,
    `| MISMATCH | **${ownerMatch.MISMATCH}** |`,
    `| MISSING_CARD | **${ownerMatch.MISSING_CARD}** |`,
    `| MISSING_FIELD | **${ownerMatch.MISSING_FIELD}** |`,
    `| Changed cards audited | **${changedCards.size}** |`,
    `| Changed fields audited | **${changedFields.size}** |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    `| FALSE_POSITIVE (context-validated) | **${falsePositives.length}** |`,
    `| LV remnants | **${remnantCounts.LV}** |`,
    `| EN remnants | **${remnantCounts.EN}** |`,
    `| Other foreign remnants | **${remnantCounts.OTHER}** |`,
    `| Placeholders/corruption | **${remnantCounts.PLACEHOLDER}** |`,
    `| Zero-width artifacts | **${remnantCounts.ZERO_WIDTH}** |`,
    `| Stale sectionAccents | **${remnantCounts.staleSectionAccents}** |`,
    `| DE changes | **${deChanges}** |`,
    `| Unexpected production changes | **${unexpectedChanges}** |`,
    `| Syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID/order | **${idOrderPass ? "PASS" : "FAIL"}** |`,
    `| Structure (cards/studies) | **${after.length === EXPECTED_CARDS && studyCount === EXPECTED_STUDIES ? "PASS" : "FAIL"}** |`,
    `| Mirror data↔www | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Parity (--lang=da, B2) | **${parityPass ? "PASS" : "FAIL"}** |`,
    "",
    "### Verdict",
    "",
    verdict,
    "",
    "## OWNER exact-match regression",
    "",
    `All **${applyMap.apply.length}** deduplicated OWNER LABOT rows checked against production.`,
    ownerMatch.EXACT_MATCH === applyMap.apply.length
      ? "100% EXACT_MATCH."
      : `${ownerMatch.EXACT_MATCH}/${applyMap.apply.length} EXACT_MATCH.`,
    "",
    "## Changed cards in scope",
    "",
    ...[...changedCards.entries()]
      .sort((a, b) => a[1].index - b[1].index)
      .slice(0, 80)
      .map(([id, info]) => `- \`${id}\` (de: ${info.de}) — ${info.diffs.length} leaf diff(s)`),
    changedCards.size > 80 ? `\n_… and ${changedCards.size - 80} more changed cards._\n` : "",
  ];

  if (realFindings.length) {
    md.push("## Findings", "");
    for (const f of realFindings) {
      md.push(`### ${f.id} [${f.severity}]`, "");
      md.push(`- **Card ID:** \`${f.cardId}\``);
      md.push(`- **Field:** \`${f.field}\``);
      md.push(`- **CURRENT:** ${f.current || f.actual || "—"}`);
      md.push(`- **Problem:** ${f.problem}`);
      if (f.recommended || f.expected) md.push(`- **Recommended correction:** ${f.recommended || f.expected}`);
      md.push("");
    }
  } else {
    md.push("## Findings", "", "_No CRITICAL/HIGH/MEDIUM findings in targeted scope._", "");
  }

  if (falsePositives.length) {
    md.push("## FALSE_POSITIVE (context-validated, not counted as defects)", "");
    for (const fp of falsePositives.slice(0, 20)) {
      md.push(`- \`${fp.cardId}\` / \`${fp.field}\` — ${fp.note}: "${fp.target}"`);
    }
    if (falsePositives.length > 20) md.push(`_… ${falsePositives.length - 20} more._`);
    md.push("");
  }

  md.push("## Next step", "");
  if (pass) {
    md.push("Repair scope closed. No further OWNER/COPY-ONLY cycle required for this regression gate.");
  } else {
    md.push("For each real finding: **kļūda → OWNER labojums → COPY-ONLY apply → micro-regression**.");
  }

  fs.writeFileSync(REPORT, md.join("\n"));
  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.writeFileSync(
    JSON_OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        ownerMatch,
        ownerRows,
        changedCards: changedCards.size,
        changedFields: changedFields.size,
        remnantCounts,
        deChanges,
        unexpectedChanges,
        bySev,
        falsePositives: falsePositives.length,
        pass,
        verdict: verdict.replace(/\*\*/g, ""),
      },
      null,
      2
    )
  );

  console.log(
    JSON.stringify(
      {
        ownerMatch,
        changedCards: changedCards.size,
        changedFields: changedFields.size,
        bySev,
        remnantCounts,
        deChanges,
        unexpectedChanges,
        pass,
        verdict: verdict.replace(/\*\*/g, ""),
        report: REPORT,
      },
      null,
      2
    )
  );
  process.exit(pass ? 0 : 1);
}

main();
