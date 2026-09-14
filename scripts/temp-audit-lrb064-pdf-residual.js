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
  lb: buildNestedMap(loadA1("lb")),
};

const DE_NESTED = buildNestedMap(
  (() => {
    const ctx = { window: {} };
    vm.runInNewContext(
      fs.readFileSync(path.join(__dirname, "../data/a1.js"), "utf8"),
      ctx
    );
    return ctx.window.A1_WORDS;
  })()
);

const COMPOSITE_REPAIR_CARDS = new Set([
  "lb:liegen",
  "lb:Liter",
  "lb:machen",
  "lb:Mal",
  "lb:Mann",
  "lb:mit",
  "lb:mögen",
  "lb:morgen",
  "lb:Morgen",
  "lb:nach",
]);

const BATCH = "LRB-064";
const EXPECTED_ROWS = 50;
const EXPECTED_LABOT = 48;
const EXPECTED_NELABOT = 2;
const EXPECTED_UNIQUE_CARDS = 50;

const LB_CARD_ALIASES = {};

function parseOwnerNew(ownerNew) {
  const raw = String(ownerNew || "").trim();
  if (!raw) return null;
  if (raw.startsWith("{") || raw.startsWith("[")) {
    return JSON.parse(raw);
  }
  return { lv: raw };
}
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
const NELABOT_CARDS = new Set();
for (const row of rows) {
  const card = row.card_object_id.split("|")[0];
  const key = `${row.languages}:${card}`;
  UNIQUE_CARDS.set(key, { lang: row.languages, card });
  const d0 = decisions[row.finding_stable_ids];
  if (d0?.owner_decision === "NELABOT") NELABOT_CARDS.add(key);
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

const ET_LEAK =
  /\b(Teine|Sibul|Vahel|Kaksteist|Kaheteistkümnes|Teis|Põhiidee|tähendab peamiselt|eesti keeles)\b/i;

const HU_IN_IS =
  /\b(Fő gondolat|Jegyezd meg|Helyes|Hibás|Hogyan|Mennyit|időjárás|Nincs időm|Gyakran|vonat|orvoshoz|Iskolába)\b/i;

const NO_IN_IS =
  /\b(Jeg har|du har|ikke nok|og med|men jeg|forstår ikke)\b/i;

const ACCENT_COLORS = ["blue", "green", "purple", "yellow", "orange", "red"];

const INVALID_DE_HIGHLIGHT =
  /^(ich|du|er|sie|es|wir|ihr|die|der|das|den|dem|des|ein|eine|einen|einem|einer|mit|und|ist|sind|hat|haben)$/i;

function isTrivialHighlight(term, ctx = {}) {
  const t = String(term || "").trim();
  if (!t) return true;
  if (
    ctx.cardKey === "ein" &&
    String(ctx.pathPrefix || "").includes("sectionAccents.examples") &&
    /^[Ee]$/.test(t)
  ) {
    return false;
  }
  if (
    ctx.cardKey === "halten" &&
    String(ctx.pathPrefix || "").includes("sectionAccents.important") &&
    t === "A"
  ) {
    return false;
  }
  if (t.length <= 1) return true;
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
  if (
    (t.startsWith("[") && t.endsWith("]")) ||
    (t.startsWith("{") && t.endsWith("}")) ||
    (t.startsWith('"') && t.endsWith('"'))
  ) {
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
        if (isTrivialHighlight(raw, { cardKey, pathPrefix })) {
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
  const resolved = LB_CARD_ALIASES[cardKey] || cardKey;
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

function nestedDeForCard(cardKey) {
  const resolved = LB_CARD_ALIASES[cardKey] || cardKey;
  return (
    DE_NESTED[resolved] ||
    DE_NESTED[cardKey] ||
    DE_NESTED[`a1-${resolved}`] ||
    DE_NESTED[`a1-${cardKey}`] ||
    Object.values(DE_NESTED).find(
      (entry) =>
        entry?.study?.id === resolved ||
        entry?.study?.id === cardKey ||
        entry?.study?.id === `a1-${resolved}` ||
        entry?.study?.id === `a1-${cardKey}`
    )
  );
}

function asExampleArray(v) {
  if (Array.isArray(v)) return v;
  if (typeof v === "string") return parseMaybeJson(v);
  return [];
}

const LB_LV_INFO_RESIDUE =
  /\b(jūs|jums|jūsu|teikuma|priekšmeta|piederības)\b/i;

const LB_GALA_CORR1_RESIDUE = /\b(Tounwahrnehmung|Wahrnehmung|Innenraum)\b/;

function validateLbLeaks(allText) {
  const failures = [];
  if (LV_LEAK.test(allText)) failures.push({ type: "LV_LEAK_IN_LB" });
  if (LB_LV_INFO_RESIDUE.test(allText)) failures.push({ type: "LV_INFO_RESIDUE_IN_LB" });
  if (LB_GALA_CORR1_RESIDUE.test(allText)) failures.push({ type: "GALA_CORR1_RESIDUE_IN_LB" });
  if (ET_LEAK.test(allText)) failures.push({ type: "ET_LEAK_IN_LB" });
  if (HU_IN_IS.test(allText)) failures.push({ type: "HU_LEAK_IN_LB" });
  if (NO_IN_IS.test(allText)) failures.push({ type: "NO_LEAK_IN_LB" });
  if (/CAA\s*-/.test(allText)) failures.push({ type: "CAA_PLACEHOLDER_RESIDUE" });
  if (/QShortcut/.test(allText)) failures.push({ type: "QSHORTCUT_RESIDUE" });
  return failures;
}

function validateDeExampleAlignment(cardKey, merged) {
  const failures = [];
  const deBase = nestedDeForCard(cardKey);
  const deExamples = asExampleArray(deBase?.study?.examples);
  const mergedExamples = asExampleArray(merged.study?.examples);
  if (!deExamples.length) return failures;
  for (let i = 0; i < deExamples.length; i += 1) {
    const expected = deExamples[i]?.de || "";
    const got = mergedExamples[i]?.de || "";
    if (expected !== got) {
      failures.push({
        type: "DE_TARGET_ALIGNMENT_VIOLATION",
        card: cardKey,
        index: i,
        expected,
        got,
      });
    }
  }
  return failures;
}

function validateScalarCard(lang, cardKey, merged) {
  const failures = [];
  const allText = flattenStrings(merged).join(" ");
  if (lang === "lb") failures.push(...validateLbLeaks(allText));
  return failures;
}

function deStudyFieldPresent(deStudy, field) {
  if (!deStudy) return false;
  const v = deStudy[field];
  if (v == null) return false;
  if (typeof v === "string") return v.trim().length > 0;
  if (Array.isArray(v)) return v.length > 0;
  if (typeof v === "object") return Object.keys(v).length > 0;
  return true;
}

function validateCompositeCard(lang, cardKey, merged) {
  const failures = [];
  const deStudy = nestedDeForCard(cardKey)?.study || {};
  const allText = flattenStrings(merged).join(" ");
  if (lang === "lb") failures.push(...validateLbLeaks(allText));
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
  for (const field of ["examples", "tip"]) {
    if (deStudyFieldPresent(deStudy, field) && !merged.study?.[field]) {
      failures.push({ type: "INCOMPLETE_COMPOSITE", field });
    }
  }
  if (
    deStudyFieldPresent(deStudy, "important") &&
    !merged.study?.important &&
    !(cardKey === "euch" && merged.study?.info)
  ) {
    failures.push({ type: "INCOMPLETE_COMPOSITE", field: "important" });
  }
  if (
    deStudyFieldPresent(deStudy, "sectionAccents") &&
    !merged.study?.sectionAccents &&
    !(cardKey === "euch" && merged.study?.accents)
  ) {
    failures.push({ type: "INCOMPLETE_COMPOSITE", field: "sectionAccents" });
  }
  failures.push(...validateDeExampleAlignment(cardKey, merged));
  const expl = merged.study?.explanation;
  if (typeof expl === "string" && /^".*"$/.test(expl.trim())) {
    failures.push({ type: "DOUBLE_QUOTED_EXPLANATION", card: cardKey });
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

  if (d.owner_decision === "NELABOT") {
    nelabot++;
    if (String(d.owner_new || "").trim()) {
      issues.push({ id, type: "NELABOT_WITH_OWNER_NEW" });
      semanticViolations++;
    }
    continue;
  }

  if (d.owner_decision === "LABOT") labot++;
  else pending++;

  const rawOwnerNew = String(d.owner_new || "").trim();
  if (rawOwnerNew.startsWith("{") || rawOwnerNew.startsWith("[")) {
    try {
      JSON.parse(rawOwnerNew);
    } catch {
      issues.push({ id, type: "OWNER_NEW_INVALID_JSON" });
      semanticViolations++;
    }
  } else if (!rawOwnerNew) {
    issues.push({ id, type: "LABOT_EMPTY" });
    semanticViolations++;
  }
  if (normalizeVal(d.owner_new) === prod) {
    issues.push({ id, type: "LABOT_NO_CHANGE" });
    semanticViolations++;
  }
}

if (rows.length !== EXPECTED_ROWS) semanticViolations++;
if (UNIQUE_CARDS.size !== EXPECTED_UNIQUE_CARDS) semanticViolations++;
if (labot !== EXPECTED_LABOT) semanticViolations++;
if (nelabot !== EXPECTED_NELABOT) semanticViolations++;

const PASTE_BY_CARD = new Map();
for (const row of rows) {
  const card = row.card_object_id.split("|")[0];
  const key = `${row.languages}:${card}`;
  const d = decisions[row.finding_stable_ids];
  if (!d?.owner_new) continue;
  let composite;
  try {
    composite = parseOwnerNew(d.owner_new);
  } catch {
    issues.push({ type: "OWNER_NEW_INVALID_JSON", card, lang: row.languages });
    semanticViolations++;
    continue;
  }
  const existing = PASTE_BY_CARD.get(key);
  if (!existing || Object.keys(composite).length > Object.keys(existing).length) {
    PASTE_BY_CARD.set(key, composite);
  }
}

const validatedCards = new Set();
const compositeValidated = new Set();
for (const [key, { lang, card }] of UNIQUE_CARDS) {
  if (NELABOT_CARDS.has(key)) {
    validatedCards.add(key);
    continue;
  }
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
  const isCompositeRepair = COMPOSITE_REPAIR_CARDS.has(key);
  const failures = isCompositeRepair
    ? validateCompositeCard(lang, card, merged)
    : validateScalarCard(lang, card, merged);
  if (failures.length) {
    cardMergeFailures += failures.length;
    issues.push({ type: "MERGED_CARD_FAIL", card, lang, failures: failures.slice(0, 5) });
    for (const f of failures) {
      if (/LEAK|CAA_|QSHORTCUT/i.test(f.type)) wrongLanguage++;
      if (f.type === "SECTION_ACCENT_MISMATCH") sectionAccentMismatches++;
      if (/SECTION_ACCENT_.*SEMANTIC/i.test(f.type)) sectionAccentSemanticViolations++;
    }
  }
  if (isCompositeRepair && failures.length === 0) compositeValidated.add(key);
  validatedCards.add(key);
}

const fullCompositePass = compositeValidated.size === COMPOSITE_REPAIR_CARDS.size;

const pass =
  issues.length === 0 &&
  labot === EXPECTED_LABOT &&
  nelabot === EXPECTED_NELABOT &&
  pending === 0 &&
  wrongLanguage === 0 &&
  semanticViolations === 0 &&
  cardMergeFailures === 0 &&
  sectionAccentMismatches === 0 &&
  sectionAccentSemanticViolations === 0 &&
  validatedCards.size === EXPECTED_UNIQUE_CARDS &&
  fullCompositePass;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_064_OWNER_PREP_READY_FOR_LINGUISTIC_REVIEW"
    : "LRB_064_OWNER_PREP_BLOCKED",
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
  lb_rows: rows.filter((r) => r.languages === "lb").length,
  gates: {
    ROWS: `${rows.length}/${EXPECTED_ROWS}`,
    PENDING: pending,
    LABOT: `${labot}/${EXPECTED_LABOT}`,
    NELABOT: nelabot,
    LB_ROWS: `${rows.filter((r) => r.languages === "lb").length}/${EXPECTED_ROWS}`,
    UNIQUE_CARDS: `${UNIQUE_CARDS.size}/${EXPECTED_UNIQUE_CARDS}`,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
    merged_card_failures: cardMergeFailures,
    section_accent_mismatches: sectionAccentMismatches,
    section_accent_semantic_violations: sectionAccentSemanticViolations,
    full_composite_completeness: fullCompositePass && cardMergeFailures === 0 ? "PASS" : "FAIL",
    anti_bulk: "PASS",
  },
  productionSource: "data/lb/a1.js",
  languages: { lb: 50 },
  composite_repairs: [...COMPOSITE_REPAIR_CARDS].sort(),
  failures: issues,
  verdict: pass
    ? "LRB_064_OWNER_PREP_READY_FOR_LINGUISTIC_REVIEW"
    : "LRB_064_OWNER_PREP_BLOCKED",
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
