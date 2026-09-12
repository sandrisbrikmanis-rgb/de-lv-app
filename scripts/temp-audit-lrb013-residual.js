#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-013";
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
  /\b(Naisõpetaja|Kerge|Kahjuks|Õppima|Lugema|Viimane|Inimesed|Valgus|Armastus|Armastama|Laul|Limonaad|Joonlaud|Nimekiri|Liiter|Lusikas|Õhk|Lõbus|Tüdruk|Söögikord|Vahel|Mandariin|Moos|Märts|Hiir|Jahu|Rohkem|Minu|Inimene|Nuga|Meeter|Piim|Miljon|Minut|Kaasa võtma|Keskpäev|Lõunasöök|Vasakule|Vasak|Maalima|Värvima|Vaikne|Asuma|Lamama|Tegema|Valmistama|Kord|Mees|Abikaasa|Põhiidee|tähendab peamiselt|eesti keeles|Latviaksi|Palun, ole vaikne|Ma olen|Ma teen|Ma panen|Veel üks kord|Meeldima|Kolmapäev|Porgand|Kuu|Esmaspäev|Homme|Hommik|Hommikul|Väsinud|Muusika|Pidama|Ema|Müts|Pärastlõuna|Öö|Nina|Märg|Loodus|Näiteks|Võta|Nimetada|Armas|Uus|Üheksa|Üheksasada|Üheksas|Üheksateist|Üheksateistkümnes|Üheksakümmend|Üheksakümmendkümnes|Mitte midagi|Mitte kunagi|Mitte keegi|Normaalne|November|Null|Nummer)\b/i;

const LV_LEAK =
  /\b(Atceries|Galvenā doma|latviaksi|kaut kas|nedaudz|reize)\b/i;

const NELABOT_CARDS = ["Mund", "nein"];

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
    if (ET_LEAK.test(allText) || LV_LEAK.test(allText)) {
      wrongLanguage++;
      issues.push({ id, type: "WRONG_LANG", msg: allText.slice(0, 100) });
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

if (nelabot !== 2) {
  issues.push({ type: "NELABOT_COUNT", msg: `expected 2 NELABOT, got ${nelabot}` });
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
  labot === 48 &&
  nelabot === 2 &&
  pending === 0 &&
  wrongLanguage === 0 &&
  semanticViolations === 0;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_013_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_013_LINGUISTIC_REVIEW_BLOCKED",
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
  failures: issues,
  verdict: pass
    ? "LRB_013_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_013_LINGUISTIC_REVIEW_BLOCKED",
  updatedAt: new Date().toISOString(),
};

// Post-PDF-reaudit canonical proof is written by temp-audit-lrb013-pdf-residual.js.
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
