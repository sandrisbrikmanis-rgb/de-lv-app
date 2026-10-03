#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const PASTE_SOURCE = "gpt-5.6-luna-copy-paste";

const BATCH = "LRB-021";
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

const uniqueCards = new Set(
  rows.map((row) => `${row.languages}:${row.card_object_id.split("|")[0]}`)
);

for (const row of rows) {
  const id = row.finding_stable_ids;
  const d = decisions[id];
  const prod = normalizeVal(row.production_current);
  const lang = row.languages;

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
  if ((lang === "gr" || lang === "hr") && LV_LEAK.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: `WRONG_LANG_LV_IN_${lang.toUpperCase()}`, msg: allText.slice(0, 100) });
  }
  if ((lang === "gr" || lang === "hr") && FR_IN_GR.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: `WRONG_LANG_FR_IN_${lang.toUpperCase()}`, msg: allText.slice(0, 100) });
  }
  if (lang === "hr" && /[\u0370-\u03FF]/.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG_GR_IN_HR", msg: allText.slice(0, 100) });
  }

  try {
    JSON.parse(effective);
  } catch {
    issues.push({ id, type: "OWNER_NEW_INVALID_JSON" });
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
    ? "LRB_021_OWNER_PREP_READY_FOR_LINGUISTIC_REVIEW"
    : "LRB_021_OWNER_PREP_BLOCKED",
  reviewer: "owner-prep-pipeline",
  paste_source: PASTE_SOURCE,
  recalculated_from_production: true,
  pass,
  row_count: rows.length,
  labot,
  nelabot,
  pending,
  unique_cards: uniqueCards.size,
  gr_rows: rows.filter((r) => r.languages === "gr").length,
  hr_rows: rows.filter((r) => r.languages === "hr").length,
  gates: {
    ROWS: `${rows.length}/50`,
    PENDING: pending,
    LABOT: `${labot}/50`,
    NELABOT: nelabot,
    UNIQUE_CARDS: `${uniqueCards.size}/50`,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
  },
  languages: { gr: 26, hr: 24 },
  failures: issues,
  verdict: pass
    ? "LRB_021_OWNER_PREP_READY_FOR_LINGUISTIC_REVIEW"
    : "LRB_021_OWNER_PREP_BLOCKED",
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
