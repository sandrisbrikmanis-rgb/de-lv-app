#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const {
  COMPOSITE_BY_ID,
  FINDING_TO_CARD,
} = require("./lib/lrb018-fr-repair-engine");

const BATCH = "LRB-018";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const ET_LEAK =
  /\b(Teine|Sibul|Vahel|Kaksteist|Kaheteistkümnes|Teis|Põhiidee|tähendab peamiselt|eesti keeles)\b/i;

const LV_LEAK =
  /\b(Nepareizi|Pareizi|Atceries|Galvenā doma|latviaksi|kaut kas|nedaudz|apmeklējums|vizīte|lūdzu|vienreiz|reiz|vidus dzimte|pretstats|iebilde|Paldies|Apmeklētājs|Līst|Es mācos|nav tas pats|Tas der)\b/i;

const EN_LEAK =
  /\b(I help you|i see you|I'm telling you|Latvian \"es\"|German \"I\" = it)\b/i;

function isFiRow(id) {
  return id.startsWith("g2/a1/fi|");
}

function isFrRow(id) {
  return id.startsWith("g2/a1/fr|");
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

const issues = [];
let labot = 0;
let nelabot = 0;
let pending = 0;
let wrongLanguage = 0;
let semanticViolations = 0;

const frRows = rows.filter((r) => r.languages === "fr");
const uniqueCards = new Set(Object.values(FINDING_TO_CARD));

for (const row of rows) {
  const id = row.finding_stable_ids;
  const d = decisions[id];
  const prod = normalizeVal(row.production_current);

  if (!d) {
    issues.push({ id, type: "MISSING", msg: "no decision" });
    continue;
  }

  if (d.owner_decision === "LABOT") labot++;
  else if (d.owner_decision === "NELABOT") nelabot++;
  else pending++;

  if (d.owner_status !== "DECIDED") {
    issues.push({ id, type: "NOT_DECIDED", msg: d.owner_status });
    semanticViolations++;
  }

  if (d.owner_decision !== "LABOT") {
    issues.push({ id, type: "NOT_LABOT", msg: d.owner_decision });
    semanticViolations++;
  }

  if (!String(d.owner_new || "").trim()) {
    issues.push({ id, type: "LABOT_EMPTY", msg: "LABOT without owner_new" });
    semanticViolations++;
  }

  if (!String(d.owner_note || "").trim()) {
    issues.push({ id, type: "NO_NOTE", msg: "missing owner_note" });
    semanticViolations++;
  }

  const effective = String(d.owner_new || "").trim();
  let parsedEffective;
  try {
    parsedEffective = JSON.parse(effective);
  } catch {
    parsedEffective = { _scalar: effective };
  }
  const allText = flattenStrings(parsedEffective).join(" ");

  if (isFiRow(id) && ET_LEAK.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG_ET", msg: allText.slice(0, 100) });
  }
  if (isFrRow(id)) {
    if (LV_LEAK.test(allText)) {
      wrongLanguage++;
      issues.push({ id, type: "WRONG_LANG_LV", msg: allText.slice(0, 100) });
    }
    if (EN_LEAK.test(allText)) {
      wrongLanguage++;
      issues.push({ id, type: "WRONG_LANG_EN", msg: allText.slice(0, 100) });
    }
    const expected = normalizeVal(JSON.stringify(COMPOSITE_BY_ID[id]));
    if (normalizeVal(effective) !== expected) {
      issues.push({ id, type: "COMPOSITE_ENGINE_MISMATCH" });
      semanticViolations++;
    }
    if (normalizeVal(effective) === prod) {
      issues.push({ id, type: "LABOT_NO_CHANGE", msg: "owner_new equals production_current" });
      semanticViolations++;
    }
  }
}

if (frRows.length !== 45) {
  issues.push({ type: "FR_ROW_COUNT", msg: `expected 45, got ${frRows.length}` });
  semanticViolations++;
}
if (uniqueCards.size !== 28) {
  issues.push({ type: "UNIQUE_CARDS", msg: `expected 28, got ${uniqueCards.size}` });
  semanticViolations++;
}
if (labot !== 50) {
  issues.push({ type: "LABOT_COUNT", msg: `expected 50 LABOT, got ${labot}` });
  semanticViolations++;
}
if (nelabot !== 0) {
  issues.push({ type: "NELABOT_COUNT", msg: `expected 0 NELABOT, got ${nelabot}` });
  semanticViolations++;
}

const pass =
  issues.length === 0 &&
  labot === 50 &&
  nelabot === 0 &&
  pending === 0 &&
  wrongLanguage === 0 &&
  semanticViolations === 0;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_018_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_018_LINGUISTIC_REVIEW_BLOCKED",
  reviewer: "gpt-5.6-luna",
  recalculated_from_production: true,
  pass,
  row_count: rows.length,
  labot,
  nelabot,
  pending,
  unique_fr_cards: uniqueCards.size,
  fr_rows: frRows.length,
  gates: {
    ROWS: `${rows.length}/50`,
    PENDING: pending,
    LABOT: `${labot}/50`,
    NELABOT: nelabot,
    FR_ROWS: `${frRows.length}/45`,
    UNIQUE_CARDS: `${uniqueCards.size}/28`,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
  },
  composite_repairs: [...uniqueCards].sort(),
  languages: { fi: 5, fr: 45 },
  failures: issues,
  verdict: pass
    ? "LRB_018_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_018_LINGUISTIC_REVIEW_BLOCKED",
  updatedAt: new Date().toISOString(),
};

const outPath = `reports/g2-a1-owner/batches-reviewed/${BATCH}-owner-auth-residual-proof.json`;
fs.writeFileSync(outPath, `${JSON.stringify(proof, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      pass,
      verdict: proof.verdict,
      labot,
      nelabot,
      pending,
      unique_fr_cards: uniqueCards.size,
      issues: issues.length,
      gates: proof.gates,
      details: issues.slice(0, 15),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
