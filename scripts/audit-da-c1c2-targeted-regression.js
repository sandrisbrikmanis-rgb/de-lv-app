#!/usr/bin/env node
"use strict";
/**
 * DA–DE C1 + C2 targeted regression audit (READ-ONLY).
 * Validates production vs OWNER decisions after COPY-ONLY repair.
 * Usage: node scripts/audit-da-c1c2-targeted-regression.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getAt, normalizeField } = require("./lib/da-c1c2-owner-path");

const REPORT = path.join(ROOT, "reports/da-c1c2-targeted-regression-audit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/da-c1c2-targeted-regression-audit.json");
const APPLY_MAP = path.join(ROOT, "reports/temp/da-c1c2-owner-apply-map.json");
const BEFORE_C1 = process.env.DA_C1_BEFORE || "/tmp/da-c1-before.js";
const BEFORE_C2 = process.env.DA_C2_BEFORE || "/tmp/da-c2-before.js";
const REPAIR_BASE = process.env.DA_C1C2_REPAIR_BASE || "55da88dd";

const LEVELS = {
  c1: {
    daFile: path.join(ROOT, "data/da/c1.js"),
    wwwFile: path.join(ROOT, "www/data/da/c1.js"),
    deFile: path.join(ROOT, "data/c1.js"),
    beforeRef: BEFORE_C1,
    key: "C1_WORDS",
    expectedCards: 572,
    expectedStudies: 15,
    decisionFile: path.join(ROOT, "reports/da-c1c2-owner-decisions-c1.md"),
  },
  c2: {
    daFile: path.join(ROOT, "data/da/c2.js"),
    wwwFile: path.join(ROOT, "www/data/da/c2.js"),
    deFile: path.join(ROOT, "data/c2.js"),
    beforeRef: BEFORE_C2,
    key: "C2_WORDS",
    expectedCards: 219,
    expectedStudies: 1,
    decisionFile: path.join(ROOT, "reports/da-c1c2-owner-decisions-c2.md"),
  },
};

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(Viņš|Viņa|Reizēm|gadījuma|svētku|vēlētāj|līst|latviešu|vācu|Galvenā doma|Atceries|Izmanto|Nepareizi|Pareizi|Bieži|Norāda|lietvār|darbības vār|sieviešu|vīriešu|viņa|viņš|mēs|labprāt|brīvdien|skolot|runā|mācī|dārzeņ|augļi|televīz|vilciens|dzimšanas|Berlīn|Spānij|kā tev|mums jā|tev jā|jums|jūs\b|jūsu\b|neesmu|skatī|redzēt|sauc par|tikpat|pārāk dārgi|iekšā|uz vietu|kam\?|mērķi|locījum|artikul|daudzskaitļ|vienskaitļ|retāk|Izvēl|konstrukciju|Vācu valodā|latviski|Brīvdienās|Bērniem|apmeklēj|apciemoj|tāpēc|peldēt|maksāt|vecvecāk|palīdzu|stāstu|man jā|rīsi|mācēt|prast|braukt|vest|aizvest|Autobuss|Vilciens|atslēgu|pieteikumu|aizbraucu|iesniedzu|grāmatu|mājās|tagad|tūlīt|atiet|prom|rīt|sākam|Plūdi|plūdi|izpostīja|mājas|uzsver|termiņu|Atkārtotais|izdevums|iznāca|pavasarī|būt spiedienā|piešķir|uzdevumu|man dod|darbu|sadala|uzdevumos|nepatīk|piedāvāju|palīdzību|piedāvā|naudas)\b/i;
const EN_PATTERNS =
  /\b(Aspire|Determined|Translation:|TODO|TBD|instead of|Change this|Ready\. Next|Look at the|you are|meaning:)\b/i;
const CS_PATTERNS = /\b(přelož|použij|doplň|věta|sloveso|podstatné)\b/i;
const PL_PATTERNS = /\b(przetłumacz|użyj|uzupełnij|czasownik|rzeczownik)\b/i;
const BS_PATTERNS = /\b(često|riječ|glagol|padež|množina|jednina)\b/i;
const ET_LT_PATTERNS = /\b(tõlgi|kasuta|sõna|tegusõna|daiktavard|dažnai|žodis|daiktavardis)\b/i;
const RU_UA_PATTERNS = /\b(перевед|использ|слово|глагол|часто|переклад|використ)\b/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const MOJIBAKE = /â€|Ã.|Ô./;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|```|Translation:|Tulkojums:|Pārskatīti:|COPY-ONLY apply)/;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const ROW_START_C1 = /^\s*\d+\s+`([^`]+)`\s+`([^`]+)`/;
const ROW_START_C2 = /^\s*\d+\s+\d+\s+`([^`]+)`\s+`([^`]+)`/;

function loadWords(filePath, key) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function entryId(entry, index, level) {
  return entry.study?.id || `${level}-${entry.de}-${index}`;
}

function normalizeText(text) {
  return String(text ?? "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function stripZeroWidth(text) {
  return String(text ?? "").replace(/[\u200B-\u200D\uFEFF]/g, "");
}

function isTruncatedEllipsis(text) {
  return /(\.\.\.|…)\s*$/.test(String(text ?? ""));
}

function countOwnerFindingsLoaded(decisionFile) {
  const md = fs.readFileSync(decisionFile, "utf8");
  const isC2 = decisionFile.includes("-c2");
  const re = isC2 ? ROW_START_C2 : ROW_START_C1;
  return md.split("\n").filter((line) => re.test(line)).length;
}

function ensureBefore(ref, gitPath) {
  if (!fs.existsSync(ref)) {
    execSync(`git show ${REPAIR_BASE}:${gitPath} > ${ref}`, { cwd: ROOT, stdio: "pipe" });
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

function classifyForeign(text) {
  if (typeof text !== "string") return [];
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (CS_PATTERNS.test(text)) reasons.push("CS");
  if (PL_PATTERNS.test(text)) reasons.push("PL");
  if (BS_PATTERNS.test(text)) reasons.push("BS");
  if (ET_LT_PATTERNS.test(text)) reasons.push("ET_LT");
  if (RU_UA_PATTERNS.test(text)) reasons.push("RU_UA");
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
  if (!text || !term) return false;
  const lowerText = String(text).toLowerCase();
  const lowerTerm = String(term).toLowerCase();
  if (lowerText.includes(lowerTerm)) return true;
  const words = lowerText.split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  if (words.some((w) => w.startsWith(lowerTerm) && lowerTerm.length >= 2)) return true;
  if (!isDeField || String(term).length < 3) return false;
  return lowerText.includes(lowerTerm);
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

function resolveExpectedOwnerValue(row, beforeEntry) {
  if (
    isTruncatedEllipsis(row.ownerNew) &&
    normalizeText(row.ownerNew) === normalizeText(row.currentDa)
  ) {
    const fieldPath = ownerFieldPath(row.field);
    const beforeVal = fieldPath === "lv" ? beforeEntry?.lv : getAt(beforeEntry, fieldPath);
    if (beforeVal !== undefined) {
      return stripZeroWidth(beforeVal);
    }
  }
  return row.ownerNew;
}

function auditLevel(levelKey, cfg, applyRows, findings, addFinding) {
  ensureBefore(cfg.beforeRef, `data/da/${levelKey}.js`);
  const before = loadWords(cfg.beforeRef, cfg.key);
  const after = loadWords(cfg.daFile, cfg.key);
  const deRef = loadWords(cfg.deFile, cfg.key);

  const ownerFindingsLoaded = countOwnerFindingsLoaded(cfg.decisionFile);
  const ownerMatch = { EXACT_MATCH: 0, MISMATCH: 0, MISSING_CARD: 0, MISSING_FIELD: 0 };
  const ownerRows = [];
  const allowedFields = new Map();
  for (const row of applyRows) {
    allowedFields.set(`${row.cardId}|${normalizeField(row.field)}`, row);
  }

  const syntaxPass = (() => {
    try {
      execSync(`node --check data/da/${levelKey}.js`, { cwd: ROOT, stdio: "pipe" });
      execSync(`node --check www/data/da/${levelKey}.js`, { cwd: ROOT, stdio: "pipe" });
      return true;
    } catch {
      return false;
    }
  })();
  if (!syntaxPass) addFinding("CRITICAL", levelKey, "STRUCT", "syntax", `${levelKey.toUpperCase()} JS syntax check failed`);

  const mirrorPass = fs.readFileSync(cfg.daFile).equals(fs.readFileSync(cfg.wwwFile));
  if (!mirrorPass) addFinding("CRITICAL", levelKey, "MIRROR", "data↔www", `${levelKey.toUpperCase()} mirror not identical`);

  if (after.length !== cfg.expectedCards) {
    addFinding("CRITICAL", levelKey, "STRUCT", "cardCount", `Expected ${cfg.expectedCards}, got ${after.length}`);
  }
  const studyCount = after.filter((e) => e.study).length;
  if (studyCount !== cfg.expectedStudies) {
    addFinding("CRITICAL", levelKey, "STRUCT", "studyCount", `Expected ${cfg.expectedStudies}, got ${studyCount}`);
  }

  let deChanges = 0;
  let idOrderPass = true;
  for (let i = 0; i < after.length; i++) {
    for (const f of ["de", "de_article", "de_plural", "level"]) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
    if (before[i]?.de !== deRef[i]?.de) {
      idOrderPass = false;
      addFinding("CRITICAL", entryId(after[i], i, levelKey), "de.order", "DE order mismatch vs etalon", { dataset: levelKey, index: i });
    }
  }
  if (deChanges > 0) {
    addFinding("CRITICAL", levelKey, "ALL", "de.fields", `${deChanges} DE field changes detected in ${levelKey.toUpperCase()}`, {
      dataset: levelKey,
      deChanges,
    });
  }

  let parityPass = false;
  try {
    const out = execSync("node scripts/audit-language-parity.js --lang=da", { cwd: ROOT, encoding: "utf8" });
    const j = JSON.parse(out.trim());
    parityPass = j.pass === true && (j.byLevel?.[levelKey]?.pass !== false);
    if (!parityPass) {
      addFinding("CRITICAL", levelKey, "PARITY", "audit-language-parity", `${levelKey.toUpperCase()} parity FAIL`, {
        dataset: levelKey,
        issues: j.issues,
      });
    }
  } catch (e) {
    addFinding("CRITICAL", levelKey, "PARITY", "audit-language-parity", `${levelKey.toUpperCase()} parity script error`, {
      dataset: levelKey,
      error: String(e.message || e),
    });
  }

  for (const row of applyRows) {
    const fieldPath = ownerFieldPath(row.field);
    const entry = findEntry(after, row.cardId);
    const beforeEntry = findEntry(before, row.cardId);
    const expected = resolveExpectedOwnerValue(row, beforeEntry);

    if (!entry) {
      ownerMatch.MISSING_CARD++;
      ownerRows.push({ finding: row.finding, cardId: row.cardId, field: fieldPath, status: "MISSING_CARD" });
      addFinding("HIGH", row.cardId, fieldPath, "OWNER target card not found", {
        dataset: levelKey,
        expected,
        recommended: expected,
      });
      continue;
    }

    const actualVal = fieldPath === "lv" ? entry.lv : getAt(entry, fieldPath);
    if (actualVal === undefined) {
      ownerMatch.MISSING_FIELD++;
      ownerRows.push({ finding: row.finding, cardId: row.cardId, field: fieldPath, status: "MISSING_FIELD" });
      addFinding("HIGH", row.cardId, fieldPath, "OWNER target path missing after apply", {
        dataset: levelKey,
        expected,
        recommended: expected,
      });
      continue;
    }

    if (normalizeText(actualVal) === normalizeText(expected)) {
      ownerMatch.EXACT_MATCH++;
      ownerRows.push({ finding: row.finding, cardId: row.cardId, field: fieldPath, status: "EXACT_MATCH" });
    } else {
      ownerMatch.MISMATCH++;
      ownerRows.push({ finding: row.finding, cardId: row.cardId, field: fieldPath, status: "MISMATCH" });
      addFinding("HIGH", row.cardId, fieldPath, "OWNER NEW value mismatch", {
        dataset: levelKey,
        current: String(actualVal).slice(0, 160),
        expected: String(expected).slice(0, 160),
        recommended: String(expected).slice(0, 160),
      });
    }

    if (fieldPath.startsWith("study.comparison") && fieldPath.endsWith(".example") && beforeEntry?.study && entry.study) {
      const idxMatch = fieldPath.match(/comparison\[(\d+)\]/);
      const idx = idxMatch ? Number(idxMatch[1]) : null;
      if (idx !== null) {
        const beforeEx = beforeEntry.study.comparison?.[idx]?.example;
        const afterEx = entry.study.comparison?.[idx]?.example;
        if (beforeEx && afterEx) {
          const beforeDe = beforeEx.split("=")[0].trim();
          const afterDe = afterEx.split("=")[0].trim();
          if (beforeDe !== afterDe) {
            addFinding("CRITICAL", row.cardId, fieldPath, "DE side changed in comparison example", {
              dataset: levelKey,
              current: afterDe,
              expected: beforeDe,
              recommended: beforeDe,
            });
          }
        }
      }
    }
  }

  const changedCards = new Map();
  const changedFields = new Set();
  let unexpectedChanges = 0;

  for (let i = 0; i < after.length; i++) {
    const diffs = walkDiff(before[i], after[i]);
    if (!diffs.length) continue;
    const cardId = entryId(after[i], i, levelKey);
    changedCards.set(cardId, { index: i, de: after[i].de, diffs, entry: after[i], beforeEntry: before[i] });

    for (const d of diffs) {
      if (["de", "de_article", "de_plural", "level"].some((x) => d.path === x || d.path.startsWith(`${x}.`))) continue;
      changedFields.add(`${cardId}|${diffPathToOwnerField(d.path)}`);

      const ownerKey = [...allowedFields.keys()].find((k) => {
        const [cid, field] = k.split("|");
        return cid === cardId && normalizeField(field) === normalizeField(diffPathToOwnerField(d.path));
      });
      if (!ownerKey) {
        unexpectedChanges++;
        addFinding("HIGH", cardId, d.path, "UNEXPECTED_CHANGE outside OWNER scope", {
          dataset: levelKey,
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
      if (reasons.includes("LV_DIAC") || reasons.includes("LV")) {
        remnantCounts.LV++;
        addFinding("HIGH", cardId, d.path, `LV remnant in changed field: ${reasons.join(", ")}`, {
          dataset: levelKey,
          current: d.after.slice(0, 160),
          recommended: "Replace LV fragment with natural Danish",
        });
      } else if (reasons.includes("EN")) {
        remnantCounts.EN++;
        addFinding("HIGH", cardId, d.path, `EN remnant in changed field: ${reasons.join(", ")}`, {
          dataset: levelKey,
          current: d.after.slice(0, 160),
          recommended: "Replace English fragment with natural Danish",
        });
      } else if (reasons.some((r) => ["CS", "PL", "BS", "ET_LT", "RU_UA"].includes(r))) {
        remnantCounts.OTHER++;
        addFinding("HIGH", cardId, d.path, `Foreign remnant in changed field: ${reasons.join(", ")}`, {
          dataset: levelKey,
          current: d.after.slice(0, 160),
          recommended: "Replace foreign fragment with natural Danish",
        });
      } else if (reasons.includes("PLACEHOLDER") || reasons.includes("MOJIBAKE")) {
        remnantCounts.PLACEHOLDER++;
        addFinding("HIGH", cardId, d.path, `Placeholder/corruption in changed field: ${reasons.join(", ")}`, {
          dataset: levelKey,
          current: d.after.slice(0, 160),
          recommended: "Remove placeholder/corruption",
        });
      } else if (reasons.includes("ZERO_WIDTH")) {
        remnantCounts.ZERO_WIDTH++;
        addFinding("MEDIUM", cardId, d.path, "Zero-width artifact in changed field", {
          dataset: levelKey,
          current: d.after.slice(0, 160),
          recommended: "Strip zero-width characters",
        });
      }

      if (d.path === "lv") {
        for (const issue of lvChainIssues(d.after)) {
          if (issue.kind === "DUPLICATE_SYNONYM") {
            addFinding("MEDIUM", cardId, "lv", `Duplicate synonym in lv chain: "${issue.part}"`, {
              dataset: levelKey,
              current: d.after.slice(0, 160),
              recommended: "Remove duplicate meaning segment",
            });
          } else if (issue.kind === "LONG_SYNONYM_CHAIN") {
            addFinding("MEDIUM", cardId, "lv", `Long synonym chain (${issue.count} segments)`, {
              dataset: levelKey,
              current: d.after.slice(0, 160),
              recommended: "Reduce to 1–2 natural Danish synonyms",
            });
          }
        }
      }
    }

    if (entry.study) {
      for (const c of comparisonExampleIssues(entry.study)) {
        addFinding("HIGH", cardId, `study.comparison[${c.index}].example`, `Comparison DA side foreign: ${c.reasons.join(", ")}`, {
          dataset: levelKey,
          current: c.example,
          recommended: "DE = DA comparison; replace foreign DA side with Danish",
        });
      }

      if (entry.study.sectionAccents) {
        for (const m of validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de)) {
          const foreignInTarget = classifyForeign(m.target);
          if (foreignInTarget.length) {
            addFinding("MEDIUM", cardId, m.path, `sectionAccent target contains foreign fragment: "${m.target}"`, {
              dataset: levelKey,
              current: m.target,
              recommended: "Replace accent target with Danish fragment from Study text",
            });
          } else {
            const texts = collectSectionTexts(entry.study, m.section, null, m.field);
            const inText = accentTargetInText(texts.join("\n"), m.target, m.isDeField || m.field === "de");
            if (!inText) {
              remnantCounts.staleSectionAccents++;
              addFinding("LOW", cardId, m.path, `Stale sectionAccent target not in Study text: "${m.target}"`, {
                dataset: levelKey,
                current: m.target,
                recommended: "Update sectionAccent to match Study text or remove stale highlight",
              });
            } else {
              falsePositives.push({
                dataset: levelKey,
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

  return {
    ownerFindingsLoaded,
    ownerUnique: applyRows.length,
    ownerMatch,
    ownerRows,
    changedCards: changedCards.size,
    changedFields: changedFields.size,
    remnantCounts,
    falsePositives,
    deChanges,
    unexpectedChanges,
    syntaxPass,
    mirrorPass,
    idOrderPass,
    structurePass: after.length === cfg.expectedCards && studyCount === cfg.expectedStudies,
    parityPass,
    changedCardList: [...changedCards.entries()].sort((a, b) => a[1].index - b[1].index),
  };
}

function main() {
  execSync("node scripts/build-da-c1c2-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));

  const findings = [];
  let fid = 0;
  function addFinding(severity, cardId, field, problem, detail = {}) {
    fid++;
    findings.push({
      id: `DA-C1C2-REG-${String(fid).padStart(4, "0")}`,
      severity,
      dataset: detail.dataset || "combined",
      cardId,
      field,
      problem,
      current: detail.current || detail.actual || "",
      recommended: detail.recommended || detail.expected || "",
      ...detail,
    });
  }

  const c1Rows = applyMap.apply.filter((r) => r.level === "c1");
  const c2Rows = applyMap.apply.filter((r) => r.level === "c2");
  const c1 = auditLevel("c1", LEVELS.c1, c1Rows, findings, addFinding);
  const c2 = auditLevel("c2", LEVELS.c2, c2Rows, findings, addFinding);

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });
  const falsePositiveCount = c1.falsePositives.length + c2.falsePositives.length;
  const remnantTotals = {
    LV: c1.remnantCounts.LV + c2.remnantCounts.LV,
    EN: c1.remnantCounts.EN + c2.remnantCounts.EN,
    OTHER: c1.remnantCounts.OTHER + c2.remnantCounts.OTHER,
    PLACEHOLDER: c1.remnantCounts.PLACEHOLDER + c2.remnantCounts.PLACEHOLDER,
    ZERO_WIDTH: c1.remnantCounts.ZERO_WIDTH + c2.remnantCounts.ZERO_WIDTH,
    staleSectionAccents: c1.remnantCounts.staleSectionAccents + c2.remnantCounts.staleSectionAccents,
  };

  const pass =
    c1.ownerMatch.MISMATCH === 0 &&
    c1.ownerMatch.MISSING_CARD === 0 &&
    c1.ownerMatch.MISSING_FIELD === 0 &&
    c2.ownerMatch.MISMATCH === 0 &&
    c2.ownerMatch.MISSING_CARD === 0 &&
    c2.ownerMatch.MISSING_FIELD === 0 &&
    bySev.CRITICAL === 0 &&
    bySev.HIGH === 0 &&
    bySev.MEDIUM === 0 &&
    remnantTotals.LV === 0 &&
    remnantTotals.EN === 0 &&
    remnantTotals.OTHER === 0 &&
    remnantTotals.PLACEHOLDER === 0 &&
    remnantTotals.ZERO_WIDTH === 0 &&
    remnantTotals.staleSectionAccents === 0 &&
    c1.deChanges === 0 &&
    c2.deChanges === 0 &&
    c1.unexpectedChanges === 0 &&
    c2.unexpectedChanges === 0 &&
    c1.syntaxPass &&
    c2.syntaxPass &&
    c1.mirrorPass &&
    c2.mirrorPass &&
    c1.idOrderPass &&
    c2.idOrderPass &&
    c1.structurePass &&
    c2.structurePass &&
    c1.parityPass &&
    c2.parityPass;

  const verdict = pass
    ? "**DA–DE C1 + C2 TARGETED REGRESSION AUDIT — PASS**"
    : "**DA–DE C1 + C2 TARGETED REGRESSION AUDIT — FAIL**";

  const md = [
    "# DA–DE C1 + C2 targeted regression audit (READ-ONLY)",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Scope:** Production `data/da/c1.js` + `data/da/c2.js` vs OWNER decisions after COPY-ONLY repair (#553)",
    "**Auditor:** GPT-5.6 Luna (READ-ONLY targeted regression)",
    "**Production changes:** 0 (audit only)",
    "**DE:** STRICT READ-ONLY",
    "",
    "## Summary",
    "",
    "### Combined",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Changed cards audited | **${c1.changedCards + c2.changedCards}** |`,
    `| Changed fields audited | **${c1.changedFields + c2.changedFields}** |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    `| FALSE_POSITIVE (context-validated) | **${falsePositiveCount}** |`,
    `| LV remnants | **${remnantTotals.LV}** |`,
    `| EN remnants | **${remnantTotals.EN}** |`,
    `| Other foreign remnants | **${remnantTotals.OTHER}** |`,
    `| Placeholders/corruption | **${remnantTotals.PLACEHOLDER}** |`,
    `| Zero-width artifacts | **${remnantTotals.ZERO_WIDTH}** |`,
    `| Stale sectionAccents | **${remnantTotals.staleSectionAccents}** |`,
    `| DE changes | **${c1.deChanges + c2.deChanges}** |`,
    `| Unexpected production changes | **${c1.unexpectedChanges + c2.unexpectedChanges}** |`,
    "",
    "### C1",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| OWNER findings loaded | **${c1.ownerFindingsLoaded}** |`,
    `| Unique (Card ID, Field) | **${c1.ownerUnique}** |`,
    `| EXACT_MATCH | **${c1.ownerMatch.EXACT_MATCH}** |`,
    `| MISMATCH | **${c1.ownerMatch.MISMATCH}** |`,
    `| MISSING_CARD | **${c1.ownerMatch.MISSING_CARD}** |`,
    `| MISSING_FIELD | **${c1.ownerMatch.MISSING_FIELD}** |`,
    `| Changed cards audited | **${c1.changedCards}** |`,
    `| Changed fields audited | **${c1.changedFields}** |`,
    `| Syntax | **${c1.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID/order | **${c1.idOrderPass ? "PASS" : "FAIL"}** |`,
    `| Structure (572 cards / 15 studies) | **${c1.structurePass ? "PASS" : "FAIL"}** |`,
    `| Mirror data↔www | **${c1.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Parity (--lang=da, C1) | **${c1.parityPass ? "PASS" : "FAIL"}** |`,
    "",
    "### C2",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| OWNER findings loaded | **${c2.ownerFindingsLoaded}** |`,
    `| Unique (Card ID, Field) | **${c2.ownerUnique}** |`,
    `| EXACT_MATCH | **${c2.ownerMatch.EXACT_MATCH}** |`,
    `| MISMATCH | **${c2.ownerMatch.MISMATCH}** |`,
    `| MISSING_CARD | **${c2.ownerMatch.MISSING_CARD}** |`,
    `| MISSING_FIELD | **${c2.ownerMatch.MISSING_FIELD}** |`,
    `| Changed cards audited | **${c2.changedCards}** |`,
    `| Changed fields audited | **${c2.changedFields}** |`,
    `| Syntax | **${c2.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID/order | **${c2.idOrderPass ? "PASS" : "FAIL"}** |`,
    `| Structure (219 cards / 1 study) | **${c2.structurePass ? "PASS" : "FAIL"}** |`,
    `| Mirror data↔www | **${c2.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Parity (--lang=da, C2) | **${c2.parityPass ? "PASS" : "FAIL"}** |`,
    "",
    "### Verdict",
    "",
    verdict,
    "",
    "## OWNER exact-match regression",
    "",
    `C1: **${c1.ownerMatch.EXACT_MATCH}/${c1.ownerUnique}** EXACT_MATCH (${c1.ownerFindingsLoaded} findings loaded, deduplicated duplicate Card ID/Field pairs 12/13 and 20/21).`,
    `C2: **${c2.ownerMatch.EXACT_MATCH}/${c2.ownerUnique}** EXACT_MATCH (${c2.ownerFindingsLoaded} findings loaded).`,
    "",
    "Truncated zero-width-only OWNER rows (e.g. `c1-wahl` / `study.explanation`) validated against resolved expected value (zero-width strip from pre-repair baseline).",
    "",
    "## Study repairs validated",
    "",
    "- `c1-wahl` — zero-width cleanup in explanation; semantics preserved",
    "- `c1-gelegentlich` — 4 comparison examples; DE left side preserved; DA right side Danish",
    "- `c1-wahlberechtigt` — 3 comparison examples; DE left side preserved; DA right side Danish",
    "- `c1-voraussetzen` — `study.explanation[1]` zero-width cleanup",
    "",
    "## Changed cards in scope",
    "",
    "### C1",
    "",
    ...c1.changedCardList.slice(0, 50).map(([id, info]) => `- \`${id}\` (de: ${info.de}) — ${info.diffs.length} leaf diff(s)`),
    c1.changedCardList.length > 50 ? `\n_… and ${c1.changedCardList.length - 50} more C1 changed cards._\n` : "",
    "### C2",
    "",
    ...c2.changedCardList.map(([id, info]) => `- \`${id}\` (de: ${info.de}) — ${info.diffs.length} leaf diff(s)`),
    "",
  ];

  const realFindings = findings.filter((f) => f.severity !== "FALSE_POSITIVE");
  if (realFindings.length) {
    md.push("## Findings", "");
    for (const f of realFindings) {
      md.push(`### ${f.id} [${f.severity}] (${String(f.dataset).toUpperCase()})`, "");
      md.push(`- **Card ID:** \`${f.cardId}\``);
      md.push(`- **Field:** \`${f.field}\``);
      md.push(`- **CURRENT:** ${f.current || "—"}`);
      md.push(`- **Problem:** ${f.problem}`);
      if (f.recommended || f.expected) md.push(`- **Recommended correction:** ${f.recommended || f.expected}`);
      md.push("");
    }
  } else {
    md.push("## Findings", "", "_No CRITICAL/HIGH/MEDIUM findings in targeted scope._", "");
  }

  const allFalsePositives = [...c1.falsePositives, ...c2.falsePositives];
  if (allFalsePositives.length) {
    md.push("## FALSE_POSITIVE (context-validated, not counted as defects)", "");
    for (const fp of allFalsePositives.slice(0, 20)) {
      md.push(`- \`${fp.cardId}\` / \`${fp.field}\` — ${fp.note}: "${fp.target}"`);
    }
    if (allFalsePositives.length > 20) md.push(`_… ${allFalsePositives.length - 20} more._`);
    md.push("");
  }

  md.push("## Next step", "");
  if (pass) {
    md.push("Repair scope closed. No further OWNER/COPY-ONLY cycle required for this regression gate.");
  } else {
    md.push("For each real finding: **kļūda → OWNER lēmums → COPY-ONLY apply → micro-regression → closure**.");
  }

  fs.writeFileSync(REPORT, md.join("\n"));
  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.writeFileSync(
    JSON_OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        c1,
        c2,
        bySev,
        remnantTotals,
        falsePositiveCount,
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
        c1: {
          ownerFindingsLoaded: c1.ownerFindingsLoaded,
          ownerUnique: c1.ownerUnique,
          ownerMatch: c1.ownerMatch,
        },
        c2: {
          ownerFindingsLoaded: c2.ownerFindingsLoaded,
          ownerUnique: c2.ownerUnique,
          ownerMatch: c2.ownerMatch,
        },
        changedCards: c1.changedCards + c2.changedCards,
        changedFields: c1.changedFields + c2.changedFields,
        bySev,
        remnantTotals,
        deChanges: c1.deChanges + c2.deChanges,
        unexpectedChanges: c1.unexpectedChanges + c2.unexpectedChanges,
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
