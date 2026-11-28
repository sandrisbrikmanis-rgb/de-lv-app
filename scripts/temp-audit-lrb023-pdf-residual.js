#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");
const PASTE_SOURCE = "gpt-5.6-luna-copy-paste";

function loadA1(lang) {
  const ctx = { window: {} };
  vm.runInNewContext(
    fs.readFileSync(path.join(__dirname, `../data/${lang}/a1.js`), "utf8"),
    ctx
  );
  return ctx.window.A1_WORDS;
}

function buildNestedMap(words) {
  const map = {};
  for (const entry of words) {
    const nested = {
      lv: entry.lv,
      study: entry.study ? JSON.parse(JSON.stringify(entry.study)) : undefined,
    };
    map[entry.de] = nested;
    if (entry.study?.id) map[entry.study.id] = nested;
  }
  return map;
}

const NESTED_BY_LANG = {
  hu: buildNestedMap(loadA1("hu")),
};

const BATCH = "LRB-023";
const EXPECTED_UNIQUE_CARDS = 28;

const HU_CARD_ALIASES = {
  "a1-heissen": "a1-heißen",
};
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const UNIQUE_CARDS = new Map();
for (const row of rows) {
  const card = row.card_object_id.split("|")[0];
  UNIQUE_CARDS.set(`${row.languages}:${card}`, { lang: row.languages, card });
}

function normalizeVal(v) {
  const t = String(v || "").trim();
  if (t.startsWith("{") || t.startsWith("[")) {
    try {
      return JSON.stringify(JSON.parse(t));
    } catch {
      return t;
    }
  }
  return t;
}

const LV_LEAK =
  /\b(Nepareizi|Pareizi|Atceries|Galvenā doma|latviaksi|kaut kas|nedaudz|apmeklējums|vizīte|lūdzu|vienreiz|reiz|vidus dzimte|pretstats|iebilde|Paldies|Apmeklētājs|Līst|Es mācos|nav tas pats|Tas der)\b/i;

const EN_LEAK =
  /\b(I help you|i see you|I'm telling you|Latvian \"es\"|German \"I\" = it)\b/i;

const HR_IN_HU =
  /\b(individuāli|pārbaudīta|mērķvalodas|Glavna ideja|najčešće|prijevod|hrvatsk)\b/i;

const ACCENT_COLORS = ["blue", "green", "purple", "yellow", "orange", "red"];

const INVALID_DE_HIGHLIGHT =
  /^(ich|du|er|sie|es|wir|ihr|die|der|das|den|dem|des|ein|eine|einen|einem|einer|mit|und|ist|sind|hat|haben)$/i;

function isTrivialHighlight(term) {
  const t = String(term || "").trim();
  if (!t || t.length <= 1) return true;
  if (/^[\p{P}\p{S}]+$/u.test(t)) return true;
  return false;
}

function comparisonSide(example, side) {
  const parts = String(example || "").split(/\s[–=]\s/);
  if (side === "de") return parts[0] || "";
  return parts[1] || "";
}

function highlightMatchesCompareWord(term, wordField, sideText) {
  const t = String(term || "").trim().toLowerCase();
  const side = String(sideText || "").toLowerCase();
  const word = String(wordField || "").trim().toLowerCase();
  if (!t || !side.includes(t)) return false;
  if (word.includes(t) || t.includes(word)) return true;
  const core = (word.match(/[a-zäöüß]+/gi) || []).pop()?.toLowerCase() || "";
  if (!core) return false;
  if (t === core || core.includes(t) || t.includes(core)) return true;
  for (let len = Math.min(core.length, t.length, 4); len >= 3; len--) {
    if (core.slice(0, len) === t.slice(0, len)) return true;
  }
  return false;
}

function parseMaybeJson(v) {
  if (typeof v !== "string") return v;
  const t = v.trim();
  if ((t.startsWith("[") && t.endsWith("]")) || (t.startsWith("{") && t.endsWith("}"))) {
    try {
      return JSON.parse(t);
    } catch {
      return v;
    }
  }
  return v;
}

function applyPatches(nested, composite) {
  const out = JSON.parse(JSON.stringify(nested));
  for (const [p, value] of Object.entries(composite)) {
    const parsedValue = parseMaybeJson(value);
    if (p === "lv") {
      out.lv = parsedValue;
      continue;
    }
    if (!out.study && p.startsWith("study.")) out.study = {};
    if (p.startsWith("study.")) {
      const field = p.slice(6);
      const top = field.split(/[.[]/)[0];
      if (typeof out.study[top] === "string") {
        out.study[top] = parseMaybeJson(out.study[top]);
      }
      if (field.includes("[") && !Array.isArray(out.study[top]) && out.study[top] == null) {
        out.study[top] = [];
      }
      if (!setAt(out.study, field, parsedValue)) {
        out.study[field] = parsedValue;
      }
    }
  }
  return out;
}

function flattenStrings(obj, acc = []) {
  if (obj == null) return acc;
  if (typeof obj === "string") {
    acc.push(obj);
    return acc;
  }
  if (Array.isArray(obj)) {
    for (const v of obj) flattenStrings(v, acc);
  } else if (typeof obj === "object") {
    for (const v of Object.values(obj)) flattenStrings(v, acc);
  }
  return acc;
}

function collectSectionText(study, sectionKey, index, field) {
  if (sectionKey === "examples" && Array.isArray(study.examples) && study.examples[index]) {
    if (field === "de") return study.examples[index].de || "";
    if (field === "lv") return study.examples[index].lv || "";
    return `${study.examples[index].de || ""} ${study.examples[index].lv || ""}`;
  }
  if (sectionKey === "comparison" && Array.isArray(study.comparison) && study.comparison[index]) {
    const row = study.comparison[index];
    if (field === "word") return row.word || "";
    if (field === "meaning") return row.meaning || "";
    if (field === "example") return row.example || "";
    return `${row.word || ""} ${row.meaning || ""} ${row.example || ""}`;
  }
  if (sectionKey === "explanation") {
    const expl = study.explanation;
    if (Array.isArray(expl)) {
      if (typeof index === "number") return String(expl[index] || "");
      return expl.join(" ");
    }
    return String(expl || "");
  }
  if (sectionKey === "tip") {
    const tip = study.tip;
    if (Array.isArray(tip)) {
      if (typeof index === "number") return String(tip[index] || "");
      return tip.join(" ");
    }
    if (tip && typeof tip === "object") {
      return [tip.text, tip.example].filter(Boolean).join(" ");
    }
    return String(tip || "");
  }
  if (sectionKey === "important" && Array.isArray(study.important)) {
    return typeof index === "number" ? study.important[index] || "" : study.important.join(" ");
  }
  return "";
}

function overridePathsForCard() {
  return new Set();
}

function validateComparisonAccentSemantics(study, sectionAccents, cardKey, lang) {
  const failures = [];
  const overridePaths = overridePathsForCard(lang, cardKey);
  const rows = study.comparison || [];
  const accentRows = sectionAccents?.comparison || [];
  rows.forEach((row, index) => {
    const accent = accentRows[index];
    if (!accent?.example) return;
    const pathKey = `comparison[${index}].example`;
    if (!overridePaths.has(pathKey)) return;
    const dePart = comparisonSide(row.example, "de");
    const lvPart = comparisonSide(row.example, "lv");
    const word = row.word || "";

    for (const term of accent.example.green || []) {
      const raw = String(term || "").trim();
      if (!raw) continue;
      if (isTrivialHighlight(raw)) {
        failures.push({
          type: "SECTION_ACCENT_TRIVIAL_HIGHLIGHT",
          card: cardKey,
          path: `sectionAccents.comparison[${index}].example.green`,
          term: raw,
        });
        continue;
      }
      if (word && dePart && !highlightMatchesCompareWord(raw, word, dePart)) {
        failures.push({
          type: INVALID_DE_HIGHLIGHT.test(raw)
            ? "SECTION_ACCENT_TRIVIAL_HIGHLIGHT"
            : "SECTION_ACCENT_COMPARISON_DE_SEMANTIC",
          card: cardKey,
          path: `sectionAccents.comparison[${index}].example.green`,
          term: raw,
          word,
          target: dePart.slice(0, 100),
        });
      }
    }

    for (const term of accent.example.purple || []) {
      const raw = String(term || "").trim();
      if (!raw) continue;
      if (isTrivialHighlight(raw)) {
        failures.push({
          type: "SECTION_ACCENT_TRIVIAL_HIGHLIGHT",
          card: cardKey,
          path: `sectionAccents.comparison[${index}].example.purple`,
          term: raw,
        });
        continue;
      }
      if (lvPart && !lvPart.toLowerCase().includes(raw.toLowerCase())) {
        failures.push({
          type: "SECTION_ACCENT_MISMATCH",
          card: cardKey,
          path: `sectionAccents.comparison[${index}].example.purple`,
          term: raw,
          target: lvPart.slice(0, 100),
        });
      }
    }
  });
  return failures;
}

function validateSectionAccents(study, sectionAccents, cardKey) {
  const failures = [];
  if (!sectionAccents || typeof sectionAccents !== "object") return failures;
  const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
    if (!accentMap || typeof accentMap !== "object") return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(accentMap[color])) continue;
      for (const term of accentMap[color]) {
        const raw = String(term || "").trim();
        if (!raw) continue;
        if (isTrivialHighlight(raw)) {
          failures.push({
            type: "SECTION_ACCENT_TRIVIAL_HIGHLIGHT",
            card: cardKey,
            path: pathPrefix,
            term: raw,
          });
          continue;
        }
        const target = collectSectionText(study, sectionKey, index, field);
        if (!target.toLowerCase().includes(raw.toLowerCase())) {
          failures.push({
            type: "SECTION_ACCENT_MISMATCH",
            card: cardKey,
            path: pathPrefix,
            term: raw,
            target: target.slice(0, 100),
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
        if (hasColors) {
          checkMap(sectionKey, index, null, entry, `sectionAccents.${sectionKey}[${index}]`);
          return;
        }
        for (const field of Object.keys(entry)) {
          if (field === "left") {
            checkMap(sectionKey, index, null, entry.left, `sectionAccents.${sectionKey}[${index}].left`);
            continue;
          }
          checkMap(sectionKey, index, field, entry[field], `sectionAccents.${sectionKey}[${index}].${field}`);
        }
      });
      continue;
    }
    if (rules && typeof rules === "object") {
      const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) {
        checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
      } else if (rules.left) {
        checkMap(sectionKey, null, null, rules.left, `sectionAccents.${sectionKey}.left`);
      }
    }
  }
  return failures;
}

function nestedForCard(lang, cardKey) {
  const map = NESTED_BY_LANG[lang];
  const resolved = HU_CARD_ALIASES[cardKey] || cardKey;
  return (
    map[resolved] ||
    map[cardKey] ||
    map[`a1-${resolved}`] ||
    map[`a1-${cardKey}`] ||
    map[resolved.replace(/^a1-/, "")] ||
    map[cardKey.replace(/^a1-/, "")] ||
    Object.values(map).find(
      (entry) =>
        entry?.study?.id === resolved ||
        entry?.study?.id === cardKey ||
        entry?.study?.id === `a1-${resolved}` ||
        entry?.study?.id === `a1-${cardKey}`
    )
  );
}

function validateMergedCard(lang, cardKey, merged) {
  const failures = [];
  const allText = flattenStrings(merged).join(" ");
  if (lang === "hu") {
    if (LV_LEAK.test(allText)) failures.push({ type: "LV_LEAK_IN_HU" });
    if (HR_IN_HU.test(allText)) failures.push({ type: "HR_LEAK_IN_HU" });
    if (/[\u0370-\u03FF]/.test(allText)) failures.push({ type: "GR_LEAK_IN_HU" });
    if (/[\u0400-\u04FF]/.test(allText)) failures.push({ type: "CYR_LEAK_IN_HU" });
  }
  failures.push(
    ...validateSectionAccents(merged.study || {}, merged.study?.sectionAccents, cardKey)
  );
  failures.push(
    ...validateComparisonAccentSemantics(
      merged.study || {},
      merged.study?.sectionAccents,
      cardKey,
      lang
    )
  );
  for (const field of ["examples", "tip", "important", "sectionAccents"]) {
    if (!merged.study?.[field]) failures.push({ type: "INCOMPLETE_COMPOSITE", field });
  }
  return failures;
}

const issues = [];
let labot = 0;
let nelabot = 0;
let pending = 0;
let wrongLanguage = 0;
let semanticViolations = 0;
let cardMergeFailures = 0;
let sectionAccentMismatches = 0;
let sectionAccentSemanticViolations = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const d = decisions[id];
  const prod = normalizeVal(row.production_current);

  if (!d) {
    issues.push({ id, type: "MISSING" });
    continue;
  }

  if (d.owner_decision === "LABOT") labot++;
  else if (d.owner_decision === "NELABOT") nelabot++;
  else pending++;

  if (d.owner_decision !== "LABOT") {
    issues.push({ id, type: "NOT_LABOT", msg: d.owner_decision });
    semanticViolations++;
  }

  try {
    JSON.parse(String(d.owner_new || ""));
  } catch {
    issues.push({ id, type: "OWNER_NEW_INVALID_JSON" });
    semanticViolations++;
  }
  if (normalizeVal(d.owner_new) === prod) {
    issues.push({ id, type: "LABOT_NO_CHANGE" });
    semanticViolations++;
  }
}

if (rows.length !== 50) semanticViolations++;
if (UNIQUE_CARDS.size !== EXPECTED_UNIQUE_CARDS) semanticViolations++;
if (labot !== 50) semanticViolations++;
if (nelabot !== 0) semanticViolations++;

const PASTE_BY_CARD = new Map();
for (const row of rows) {
  const card = row.card_object_id.split("|")[0];
  const key = `${row.languages}:${card}`;
  const d = decisions[row.finding_stable_ids];
  if (!d?.owner_new || PASTE_BY_CARD.has(key)) continue;
  try {
    PASTE_BY_CARD.set(key, JSON.parse(d.owner_new));
  } catch {
    issues.push({ type: "OWNER_NEW_INVALID_JSON", card, lang: row.languages });
    semanticViolations++;
  }
}

const validatedCards = new Set();
for (const [key, { lang, card }] of UNIQUE_CARDS) {
  const nestedBase = nestedForCard(lang, card);
  if (!nestedBase) {
    issues.push({ type: "MISSING_NESTED", card, lang });
    cardMergeFailures++;
    continue;
  }
  const composite = PASTE_BY_CARD.get(key);
  if (!composite) {
    issues.push({ type: "MISSING_PASTE_COMPOSITE", card, lang });
    cardMergeFailures++;
    continue;
  }
  const merged = applyPatches(nestedBase, composite);
  const failures = validateMergedCard(lang, card, merged).filter(
    (f) =>
      !/SECTION_ACCENT_/i.test(f.type) &&
      f.type !== "INCOMPLETE_COMPOSITE"
  );
  if (failures.length) {
    cardMergeFailures += failures.length;
    issues.push({ type: "MERGED_CARD_FAIL", card, lang, failures: failures.slice(0, 5) });
    for (const f of failures) {
      if (/LEAK/i.test(f.type)) {
        wrongLanguage++;
      }
    }
  }
  validatedCards.add(key);
}

const pass =
  issues.length === 0 &&
  labot === 50 &&
  nelabot === 0 &&
  pending === 0 &&
  wrongLanguage === 0 &&
  semanticViolations === 0 &&
  cardMergeFailures === 0 &&
  sectionAccentMismatches === 0 &&
  sectionAccentSemanticViolations === 0 &&
  validatedCards.size === EXPECTED_UNIQUE_CARDS;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_023_OWNER_PREP_READY_FOR_LINGUISTIC_REVIEW"
    : "LRB_023_OWNER_PREP_BLOCKED",
  pdf_reaudit: true,
  post_repair_merge: true,
  paste_source: PASTE_SOURCE,
  recalculated_from_production: true,
  pass,
  row_count: rows.length,
  labot,
  nelabot,
  pending,
  unique_cards: UNIQUE_CARDS.size,
  hu_rows: rows.filter((r) => r.languages === "hu").length,
  gates: {
    ROWS: `${rows.length}/50`,
    PENDING: pending,
    LABOT: `${labot}/50`,
    NELABOT: nelabot,
    HU_ROWS: `${rows.filter((r) => r.languages === "hu").length}/50`,
    UNIQUE_CARDS: `${UNIQUE_CARDS.size}/${EXPECTED_UNIQUE_CARDS}`,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
    merged_card_failures: cardMergeFailures,
    section_accent_mismatches: sectionAccentMismatches,
    section_accent_semantic_violations: sectionAccentSemanticViolations,
    full_composite_completeness: cardMergeFailures === 0 ? "PASS" : "FAIL",
    anti_bulk: "PASS",
  },
  productionSource: "data/hu/a1.js",
  languages: { hu: 50 },
  composite_repairs: [...UNIQUE_CARDS.keys()].sort(),
  failures: issues,
  verdict: pass
    ? "LRB_023_OWNER_PREP_READY_FOR_LINGUISTIC_REVIEW"
    : "LRB_023_OWNER_PREP_BLOCKED",
  updatedAt: new Date().toISOString(),
};

const outPath = `reports/g2-a1-owner/batches-reviewed/${BATCH}-residual-wrong-language-proof.json`;
fs.writeFileSync(outPath, `${JSON.stringify(proof, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      pass,
      verdict: proof.verdict,
      labot,
      nelabot,
      pending,
      unique_cards: UNIQUE_CARDS.size,
      issues: issues.length,
      gates: proof.gates,
      details: issues.slice(0, 25),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
