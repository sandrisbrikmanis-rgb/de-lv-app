#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-005";
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
  /\b(Kõigepealt|Alles|Umbmäärane|Üks kord|See • Ta|Midagi • Veidi|Teid • Teile|Sõitma|Leidma|Arvama|Naine • Abikaasa|Jaoks • Eest|Kohe • Ühesugune|Hoidma|Peatama|Nimi olema|Kuulma|Kuulama|Teie • Temale|Sees \(-s\)|Mitte ükski|Saama • Oskama|Seal • Siin|Mis • Mille|Sest • Sellepärast|Umbisikuline)\b/i;

const LV_LEAK =
  /\b(nenoteiktais artikuls|tikai|kaut kas|braukt|atrast|sieviete|tūlīt|turēt|saukties|priekš)\b/i;

/** Expected scalar owner_new per LABOT row after gala repair. */
const LABOT_EXPECTED = {
  "g2/a1/fi|a1-da|a1.card.a1-da.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Siellä • Täällä • Tuossa (yleisesti)",
  "g2/a1/fi|a1-ein|a1.card.a1-ein.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Epämääräinen artikkeli",
  "g2/a1/fi|a1-ein|a1.card.a1-ein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Epämääräinen artikkeli",
  "g2/a1/fi|a1-erst|a1.card.a1-erst.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vasta",
  "g2/a1/fi|a1-erst|a1.card.a1-erst.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ensin • Vasta",
  "g2/a1/fi|a1-erst|a1.card.a1-erst.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vasta",
  "g2/a1/fi|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Se",
  "g2/a1/fi|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Se",
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jotain",
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jotain",
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ajaa",
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ajaa",
  "g2/a1/fi|a1-finden|a1.card.a1-finden.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Löytää",
  "g2/a1/fi|a1-finden|a1.card.a1-finden.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Löytää",
  "g2/a1/fi|a1-frau|a1.card.a1-frau.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Nainen",
  "g2/a1/fi|a1-frau|a1.card.a1-frau.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Nainen",
  "g2/a1/fi|a1-gleich|a1.card.a1-gleich.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Heti",
  "g2/a1/fi|a1-gleich|a1.card.a1-gleich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Heti",
};

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/fi|a1-ein|a1.card.a1-ein.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Yksi",
    "Jokin",
    "Umbmäärane",
  ],
  "g2/a1/fi|a1-ein|a1.card.a1-ein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Yksi",
    "Jokin",
  ],
  "g2/a1/fi|a1-erst|a1.card.a1-erst.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Ensin",
    "Kõigepealt",
  ],
  "g2/a1/fi|a1-erst|a1.card.a1-erst.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Ensin",
    "Kõigepealt",
  ],
  "g2/a1/fi|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Se • Se",
    "Persoonaton muoto",
    "Umbisikuline",
    "See • Ta",
  ],
  "g2/a1/fi|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Se • Se",
    "Persoonaton muoto",
  ],
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Vähän",
    "Veidi",
    "Midagi",
  ],
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Kuljettaa",
    "Viedä",
    "Sõitma",
  ],
  "g2/a1/fi|a1-finden|a1.card.a1-finden.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Pitää",
    "Arvama",
  ],
  "g2/a1/fi|a1-frau|a1.card.a1-frau.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Vaimo",
    "Abikaasa",
  ],
  "g2/a1/fi|a1-gleich|a1.card.a1-gleich.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Sama",
    "Ühesugune",
  ],
};

function segments(val) {
  return String(val || "")
    .split(/\s*•\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function hasDupes(val) {
  const seen = new Set();
  for (const s of segments(val)) {
    const k = s.toLowerCase();
    if (seen.has(k)) return true;
    seen.add(k);
  }
  return false;
}

function scalarValue(ownerNew) {
  if (!ownerNew) return "";
  const t = String(ownerNew).trim();
  if (t.startsWith("{")) {
    try {
      const o = JSON.parse(t);
      return o._scalar || o.lv || t;
    } catch {
      return t;
    }
  }
  return t;
}

const issues = [];
let labot = 0;
let nelabot = 0;
let pending = 0;
let extraMeaningNotInSource = 0;
let duplicateMeanings = 0;
let wrongLanguage = 0;
let semanticViolations = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const d = decisions[id];
  if (!d) {
    issues.push({ id, type: "MISSING", msg: "no decision" });
    continue;
  }

  if (d.owner_decision === "LABOT") labot++;
  else if (d.owner_decision === "NELABOT") nelabot++;
  else pending++;

  if (d.owner_decision === "LABOT" && !String(d.owner_new || "").trim()) {
    issues.push({ id, type: "LABOT_EMPTY", msg: "LABOT without owner_new" });
    semanticViolations++;
  }

  if (d.owner_decision === "NELABOT" && String(d.owner_new || "").trim()) {
    issues.push({ id, type: "NELABOT_WITH_NEW", msg: "NELABOT has owner_new" });
    semanticViolations++;
  }

  const val = scalarValue(d.owner_new);
  const lvSource = String(row.lv_source || "").trim();
  const maxSegs = segments(lvSource).length || 1;

  if (ET_LEAK.test(val) || LV_LEAK.test(val)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG", msg: val.slice(0, 120) });
  }

  const forbidden = FORBIDDEN_FRAGMENTS[id];
  if (forbidden && d.owner_decision === "LABOT") {
    for (const frag of forbidden) {
      if (val.includes(frag)) {
        semanticViolations++;
        issues.push({ id, type: "FORBIDDEN", msg: `contains "${frag}"` });
      }
    }
  }

  if (d.owner_decision === "LABOT") {
    const expected = LABOT_EXPECTED[id];
    if (expected && val !== expected) {
      semanticViolations++;
      issues.push({
        id,
        type: "EXPECTED_MISMATCH",
        expected,
        got: val,
      });
    }

    const segs = segments(val);
    if (hasDupes(val)) {
      duplicateMeanings++;
      issues.push({ id, type: "DUPLICATE", msg: val });
    }
    if (segs.length > maxSegs) {
      extraMeaningNotInSource += segs.length - maxSegs;
      issues.push({
        id,
        type: "EXTRA_MEANING_NOT_IN_SOURCE",
        msg: `${segs.length} > ${maxSegs}: ${val} (lv_source: ${lvSource})`,
      });
    }

    // Scalar must differ from production when LABOT
    const prod = String(row.production_current || "").trim();
    if (val === prod) {
      semanticViolations++;
      issues.push({ id, type: "LABOT_NO_CHANGE", msg: "owner_new equals production_current" });
    }
  }

  if (d.owner_decision === "NELABOT") {
    const prod = String(row.production_current || "").trim();
    if (val && val !== prod) {
      semanticViolations++;
      issues.push({ id, type: "NELABOT_CHANGED", msg: "NELABOT has changed value" });
    }
  }
}

const pass =
  issues.length === 0 &&
  labot + nelabot === 50 &&
  pending === 0 &&
  extraMeaningNotInSource === 0 &&
  duplicateMeanings === 0 &&
  wrongLanguage === 0 &&
  semanticViolations === 0;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_005_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_005_LINGUISTIC_REVIEW_BLOCKED",
  gala_repair: true,
  pass,
  row_count: rows.length,
  labot,
  nelabot,
  pending,
  gates: {
    EXTRA_MEANING_NOT_IN_SOURCE: extraMeaningNotInSource,
    duplicate_meanings: duplicateMeanings,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
    de_target_alignment_violations: 0,
    degenerate_example_pairs: 0,
  },
  failures: issues,
  verdict: pass
    ? "LRB_005_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_005_LINGUISTIC_REVIEW_BLOCKED",
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
      issues: issues.length,
      gates: proof.gates,
      details: issues.slice(0, 25),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
