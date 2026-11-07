#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const {
  COMPOSITE_BY_ID,
  FINDING_TO_CARD,
  FINDING_TO_LANG,
} = require("./lib/lrb020-repair-engine");

const BATCH = "LRB-020";
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

const FR_IN_GR =
  /\b(Rappelez-vous|Incorrect\s*:|Correct\s*:|Idée principale|Comprendre|Sous|Avant|Le train|Savoir)\b/i;

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

const uniqueCards = new Set(Object.values(FINDING_TO_CARD));

for (const row of rows) {
  const id = row.finding_stable_ids;
  const d = decisions[id];
  const prod = normalizeVal(row.production_current);
  const lang = FINDING_TO_LANG[id];

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

  if (ET_LEAK.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG_ET", msg: allText.slice(0, 100) });
  }
  if (lang === "fr" && LV_LEAK.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG_LV", msg: allText.slice(0, 100) });
  }
  if (lang === "fr" && EN_LEAK.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG_EN", msg: allText.slice(0, 100) });
  }
  if (lang === "gr" && LV_LEAK.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG_LV_IN_GR", msg: allText.slice(0, 100) });
  }
  if (lang === "gr" && FR_IN_GR.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG_FR_IN_GR", msg: allText.slice(0, 100) });
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

if (rows.length !== 50) {
  issues.push({ type: "ROW_COUNT", msg: `expected 50, got ${rows.length}` });
  semanticViolations++;
}
if (uniqueCards.size !== 50) {
  issues.push({ type: "UNIQUE_CARDS", msg: `expected 50, got ${uniqueCards.size}` });
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
    ? "LRB_020_OWNER_PREP_READY_FOR_LINGUISTIC_REVIEW"
    : "LRB_020_OWNER_PREP_BLOCKED",
  reviewer: "owner-prep-pipeline",
  recalculated_from_production: true,
  pass,
  row_count: rows.length,
  labot,
  nelabot,
  pending,
  unique_cards: uniqueCards.size,
  fr_rows: rows.filter((r) => r.languages === "fr").length,
  gr_rows: rows.filter((r) => r.languages === "gr").length,
  gates: {
    ROWS: `${rows.length}/50`,
    PENDING: pending,
    LABOT: `${labot}/50`,
    NELABOT: nelabot,
    UNIQUE_CARDS: `${uniqueCards.size}/50`,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
  },
  languages: { fr: 15, gr: 35 },
  failures: issues,
  verdict: pass
    ? "LRB_020_OWNER_PREP_READY_FOR_LINGUISTIC_REVIEW"
    : "LRB_020_OWNER_PREP_BLOCKED",
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
      unique_cards: uniqueCards.size,
      issues: issues.length,
      gates: proof.gates,
      details: issues.slice(0, 20),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
