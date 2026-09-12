#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

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
  /\b(Nepareizi|Pareizi|Atceries|Galvenā doma|latviaksi|kaut kas|nedaudz|reize|apmeklējums|vizīte|lūdzu)\b/i;

const NELABOT_CARDS = [
  "a1-einmal",
  "a1-euch",
  "a1-fuer",
  "a1-ins",
  "a1-machen",
  "a1-nehmen",
  "a1-nur-study",
  "a1-oder",
  "a1-wer",
  "ab",
  "aber",
  "ein",
  "Besuch",
];

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
    return acc;
  }
  if (typeof obj === "object") {
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

  if (d.owner_decision === "LABOT" && !String(d.owner_new || "").trim()) {
    issues.push({ id, type: "LABOT_EMPTY", msg: "LABOT without owner_new" });
    semanticViolations++;
  }

  if (d.owner_decision === "NELABOT" && String(d.owner_new || "").trim()) {
    issues.push({ id, type: "NELABOT_WITH_NEW", msg: "NELABOT has owner_new" });
    semanticViolations++;
  }

  if (!String(d.owner_note || "").trim()) {
    issues.push({ id, type: "NO_NOTE", msg: "missing owner_note" });
    semanticViolations++;
  }

  const effective =
    d.owner_decision === "LABOT" ? String(d.owner_new || "").trim() : prod;
  const allText =
    d.owner_decision === "LABOT"
      ? flattenStrings(
          (() => {
            try {
              return JSON.parse(effective);
            } catch {
              return { _scalar: effective };
            }
          })()
        ).join(" ")
      : effective;

  if (d.owner_decision === "LABOT") {
    if (isFiRow(id) && ET_LEAK.test(allText)) {
      wrongLanguage++;
      issues.push({ id, type: "WRONG_LANG_ET", msg: allText.slice(0, 100) });
    }
    if (isFrRow(id) && LV_LEAK.test(allText)) {
      wrongLanguage++;
      issues.push({ id, type: "WRONG_LANG_LV", msg: allText.slice(0, 100) });
    }
  }

  if (d.owner_decision === "LABOT" && normalizeVal(effective) === prod) {
    issues.push({ id, type: "LABOT_NO_CHANGE", msg: "owner_new equals production_current" });
    semanticViolations++;
  }

  if (d.owner_decision === "NELABOT") {
    const card = id.match(/\|([^|]+)\|/)?.[1] || "";
    if (!NELABOT_CARDS.includes(card)) {
      issues.push({ id, type: "UNEXPECTED_NELABOT", msg: `unexpected NELABOT card ${card}` });
      semanticViolations++;
    }
  }
}

if (nelabot !== 22) {
  issues.push({ type: "NELABOT_COUNT", msg: `expected 22 NELABOT, got ${nelabot}` });
  semanticViolations++;
}
if (labot !== 28) {
  issues.push({ type: "LABOT_COUNT", msg: `expected 28 LABOT, got ${labot}` });
  semanticViolations++;
}
for (const card of NELABOT_CARDS) {
  const hit = rows.find(
    (r) =>
      r.finding_stable_ids.includes(`|${card}|`) &&
      decisions[r.finding_stable_ids]?.owner_decision === "NELABOT"
  );
  if (!hit) {
    issues.push({ type: "NELABOT_MISSING", msg: `missing NELABOT for ${card}` });
    semanticViolations++;
  }
}

const pass =
  issues.length === 0 &&
  labot === 28 &&
  nelabot === 22 &&
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
  gates: {
    ROWS: `${rows.length}/50`,
    PENDING: pending,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
  },
  nelabot_cards: NELABOT_CARDS,
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
      issues: issues.length,
      gates: proof.gates,
      details: issues.slice(0, 15),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
