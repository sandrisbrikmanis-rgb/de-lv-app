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

/** Expected correct FI scalar for every row — must match temp-build-lrb005-gala-repair.js TARGET_FI. */
const TARGET_FI = {
  "g2/a1/fi|a1-da|a1.card.a1-da.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Siellä • Täällä • Tuossa (yleisesti)",
  "g2/a1/fi|a1-das|a1.card.a1-das.study.comparison[2].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Mikä • Jonka • Mitä",
  "g2/a1/fi|a1-dass|a1.card.a1-dass.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Koska • Siksi että",
  "g2/a1/fi|a1-ein|a1.card.a1-ein.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Epämääräinen artikkeli",
  "g2/a1/fi|a1-ein|a1.card.a1-ein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Epämääräinen artikkeli",
  "g2/a1/fi|a1-einmal|a1.card.a1-einmal.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kerran • Kerta",
  "g2/a1/fi|a1-einmal|a1.card.a1-einmal.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kerran • Kerta",
  "g2/a1/fi|a1-eis|a1.card.a1-eis.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jää • Jäätelö",
  "g2/a1/fi|a1-eis|a1.card.a1-eis.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jää • Jäätelö",
  "g2/a1/fi|a1-erst|a1.card.a1-erst.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vasta",
  "g2/a1/fi|a1-erst|a1.card.a1-erst.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ensin • Vasta",
  "g2/a1/fi|a1-erst|a1.card.a1-erst.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vasta",
  "g2/a1/fi|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Se",
  "g2/a1/fi|a1-es|a1.card.a1-es.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "se • persoonaton muoto",
  "g2/a1/fi|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Se",
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jotain",
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jotain",
  "g2/a1/fi|a1-euch|a1.card.a1-euch.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Teitä • Teille",
  "g2/a1/fi|a1-euch|a1.card.a1-euch.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Teitä • Teille",
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
  "g2/a1/fi|a1-fuer|a1.card.a1-fuer.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Varten",
  "g2/a1/fi|a1-fuer|a1.card.a1-fuer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Varten",
  "g2/a1/fi|a1-ganz-study|a1.card.a1-ganz-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "kokonainen • kokonaan • täysin",
  "g2/a1/fi|a1-gefallen-study|a1.card.a1-gefallen-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "pitää • henkilö datiivissa",
  "g2/a1/fi|a1-gleich|a1.card.a1-gleich.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Heti",
  "g2/a1/fi|a1-gleich|a1.card.a1-gleich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Heti",
  "g2/a1/fi|a1-halten|a1.card.a1-halten.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Pitää",
  "g2/a1/fi|a1-halten|a1.card.a1-halten.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Pitää",
  "g2/a1/fi|a1-heissen|a1.card.a1-heissen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Nimeltään",
  "g2/a1/fi|a1-heissen|a1.card.a1-heissen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Nimeltään",
  "g2/a1/fi|a1-hoeren-study|a1.card.a1-hoeren-study.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kuulla • Kuunnella",
  "g2/a1/fi|a1-hoeren-study|a1.card.a1-hoeren-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kuulla • Kuunnella",
  "g2/a1/fi|a1-huebsch|a1.card.a1-huebsch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "kaunis • houkutteleva ulkonäöllään",
  "g2/a1/fi|a1-ihr|a1.card.a1-ihr.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Te • Hänelle",
  "g2/a1/fi|a1-ihr|a1.card.a1-ihr.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Te • Hänelle",
  "g2/a1/fi|a1-im|a1.card.a1-im.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisällä (-ssa) • Missä?",
  "g2/a1/fi|a1-im|a1.card.a1-im.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisällä (-ssa) • Missä?",
  "g2/a1/fi|a1-in|a1.card.a1-in.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisällä • Sisään",
  "g2/a1/fi|a1-in|a1.card.a1-in.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisällä • Sisään",
  "g2/a1/fi|a1-ins|a1.card.a1-ins.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisään • Sisään päin • Mihin?",
  "g2/a1/fi|a1-ins|a1.card.a1-ins.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisään • Sisään päin • Mihin?",
  "g2/a1/fi|a1-kein|a1.card.a1-kein.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ei kukaan • Ei mikään",
  "g2/a1/fi|a1-kein|a1.card.a1-kein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ei kukaan • Ei mikään",
  "g2/a1/fi|a1-koennen|a1.card.a1-koennen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Voida • Osata",
  "g2/a1/fi|a1-koennen|a1.card.a1-koennen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Voida • Osata",
};

const ET_LEAK =
  /\b(Kõigepealt|Alles|Umbmäärane|Üks kord|See • Ta|Midagi • Veidi|Teid • Teile|Sõitma|Leidma|Arvama|Naine • Abikaasa|Jaoks • Eest|Kohe • Ühesugune|Hoidma|Peatama|Nimi olema|Kuulma|Kuulama|Teie • Temale|Sees \(-s\)|Mitte ükski|Saama • Oskama|Seal • Siin|Mis • Mille|Sest • Sellepärast|Umbisikuline|Jäätis|Üks • Mingi|Vedama|Ära viima|Tähendama|Sisse • Sissepoole|Kuhu)\b/i;

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/fi|a1-ein|a1.card.a1-ein.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Yksi", "Jokin", "Umbmäärane",
  ],
  "g2/a1/fi|a1-ein|a1.card.a1-ein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Yksi", "Jokin",
  ],
  "g2/a1/fi|a1-erst|a1.card.a1-erst.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Ensin", "Kõigepealt",
  ],
  "g2/a1/fi|a1-erst|a1.card.a1-erst.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Ensin", "Kõigepealt",
  ],
  "g2/a1/fi|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Se • Se", "Persoonaton muoto", "Umbisikuline", "See • Ta",
  ],
  "g2/a1/fi|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Se • Se", "Persoonaton muoto",
  ],
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Vähän", "Veidi", "Midagi",
  ],
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Vähän", "Veidi", "Midagi",
  ],
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Kuljettaa", "Viedä", "Sõitma",
  ],
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Kuljettaa", "Viedä", "Sõitma",
  ],
  "g2/a1/fi|a1-finden|a1.card.a1-finden.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Pitää", "Arvama",
  ],
  "g2/a1/fi|a1-finden|a1.card.a1-finden.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Pitää", "Arvama",
  ],
  "g2/a1/fi|a1-frau|a1.card.a1-frau.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Vaimo", "Abikaasa",
  ],
  "g2/a1/fi|a1-frau|a1.card.a1-frau.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Vaimo", "Abikaasa",
  ],
  "g2/a1/fi|a1-gleich|a1.card.a1-gleich.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Sama", "Ühesugune",
  ],
  "g2/a1/fi|a1-gleich|a1.card.a1-gleich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Sama", "Ühesugune",
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
const rowAudit = [];
let labot = 0;
let nelabot = 0;
let pending = 0;
let extraMeaningNotInSource = 0;
let duplicateMeanings = 0;
let wrongLanguage = 0;
let semanticViolations = 0;
let deTargetViolations = 0;
let degeneratePairs = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const d = decisions[id];
  const expected = TARGET_FI[id];
  const prod = String(row.production_current || "").trim();
  const lvSource = String(row.lv_source || "").trim();
  const deRef = String(row.de_reference || "").trim();
  const maxSegs = segments(lvSource).length || 1;
  const card = id.match(/a1-[^|]+/)[0];

  const auditEntry = {
    card,
    lv_source: lvSource,
    de_reference: deRef,
    production_current: prod,
    expected_fi: expected,
    decision: d?.owner_decision,
    owner_new: d?.owner_decision === "LABOT" ? String(d.owner_new || "").trim() : "",
    segment_fidelity: null,
    scalar_pass: null,
  };

  if (!d) {
    issues.push({ id, type: "MISSING", msg: "no decision" });
    auditEntry.scalar_pass = false;
    rowAudit.push(auditEntry);
    continue;
  }

  if (!expected) {
    issues.push({ id, type: "NO_TARGET", msg: "missing TARGET_FI" });
    semanticViolations++;
    auditEntry.scalar_pass = false;
    rowAudit.push(auditEntry);
    continue;
  }

  const derivedDecision = prod === expected ? "NELABOT" : "LABOT";
  if (d.owner_decision !== derivedDecision) {
    issues.push({
      id,
      type: "DECISION_MISMATCH",
      msg: `decision ${d.owner_decision} but production vs target implies ${derivedDecision}`,
    });
    semanticViolations++;
  }

  if (d.owner_decision === "LABOT") labot++;
  else if (d.owner_decision === "NELABOT") nelabot++;
  else pending++;

  const effectiveVal = d.owner_decision === "LABOT" ? scalarValue(d.owner_new) : prod;

  if (d.owner_decision === "LABOT" && !String(d.owner_new || "").trim()) {
    issues.push({ id, type: "LABOT_EMPTY", msg: "LABOT without owner_new" });
    semanticViolations++;
  }

  if (d.owner_decision === "NELABOT" && String(d.owner_new || "").trim()) {
    issues.push({ id, type: "NELABOT_WITH_NEW", msg: "NELABOT has owner_new" });
    semanticViolations++;
  }

  if (effectiveVal !== expected) {
    issues.push({ id, type: "TARGET_MISMATCH", expected, got: effectiveVal });
    semanticViolations++;
    auditEntry.scalar_pass = false;
  } else {
    auditEntry.scalar_pass = true;
  }

  const segs = segments(effectiveVal);
  auditEntry.segment_fidelity = `${segs.length}/${maxSegs}`;

  if (ET_LEAK.test(effectiveVal)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG", msg: effectiveVal.slice(0, 120) });
  }

  const forbidden = FORBIDDEN_FRAGMENTS[id];
  if (forbidden && d.owner_decision === "LABOT") {
    for (const frag of forbidden) {
      if (effectiveVal.includes(frag)) {
        semanticViolations++;
        issues.push({ id, type: "FORBIDDEN", msg: `contains "${frag}"` });
      }
    }
  }

  if (hasDupes(effectiveVal)) {
    duplicateMeanings++;
    issues.push({ id, type: "DUPLICATE", msg: effectiveVal });
  }

  if (segs.length > maxSegs) {
    extraMeaningNotInSource += segs.length - maxSegs;
    issues.push({
      id,
      type: "EXTRA_MEANING_NOT_IN_SOURCE",
      msg: `${segs.length} > ${maxSegs}: ${effectiveVal} (lv_source: ${lvSource})`,
    });
  }

  if (d.owner_decision === "LABOT" && effectiveVal === prod) {
    issues.push({ id, type: "LABOT_NO_CHANGE", msg: "owner_new equals production_current" });
    semanticViolations++;
  }

  if (d.owner_decision === "NELABOT" && prod !== expected) {
    issues.push({ id, type: "NELABOT_WRONG_PROD", msg: `production "${prod}" != expected "${expected}"` });
    semanticViolations++;
  }

  rowAudit.push(auditEntry);
}

const pass =
  issues.length === 0 &&
  labot + nelabot === 50 &&
  pending === 0 &&
  extraMeaningNotInSource === 0 &&
  duplicateMeanings === 0 &&
  wrongLanguage === 0 &&
  semanticViolations === 0 &&
  deTargetViolations === 0 &&
  degeneratePairs === 0;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_005_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_005_LINGUISTIC_REVIEW_BLOCKED",
  gala_repair: true,
  recalculated_from_production: true,
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
    de_target_alignment_violations: deTargetViolations,
    degenerate_example_pairs: degeneratePairs,
  },
  row_audit: rowAudit,
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
      nelabot_rows: rowAudit.filter((r) => r.decision === "NELABOT").map((r) => r.card),
      details: issues.slice(0, 25),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
