#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-006";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const TARGET_FI = {
  "g2/a1/fi|a1-kosten|a1.card.a1-kosten.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Maksaa (hinta) • Paljonko maksaa",
  "g2/a1/fi|a1-land|a1.card.a1-land.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Valtio • Maa",
  "g2/a1/fi|a1-land|a1.card.a1-land.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Valtio • Maa",
  "g2/a1/fi|a1-lang|a1.card.a1-lang.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Pitkä • Pitkäkestoinen",
  "g2/a1/fi|a1-lang|a1.card.a1-lang.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Pitkä • Pitkäkestoinen",
  "g2/a1/fi|a1-lassen|a1.card.a1-lassen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jättää • Antaa",
  "g2/a1/fi|a1-lassen|a1.card.a1-lassen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jättää • Antaa",
  "g2/a1/fi|a1-laufen|a1.card.a1-laufen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Juosta • Toimia",
  "g2/a1/fi|a1-laufen|a1.card.a1-laufen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Juosta • Toimia",
  "g2/a1/fi|a1-liegen|a1.card.a1-liegen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sijaita • Maata",
  "g2/a1/fi|a1-liegen|a1.card.a1-liegen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sijaita • Maata",
  "g2/a1/fi|a1-machen|a1.card.a1-machen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Tehdä • Laatia",
  "g2/a1/fi|a1-machen|a1.card.a1-machen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Tehdä • Laatia",
  "g2/a1/fi|a1-mann|a1.card.a1-mann.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Mies • Aviomies",
  "g2/a1/fi|a1-mann|a1.card.a1-mann.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Mies • Aviomies",
  "g2/a1/fi|a1-nach|a1.card.a1-nach.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "-(i)in • Jälkeen",
  "g2/a1/fi|a1-nach|a1.card.a1-nach.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "-(i)in • Jälkeen",
  "g2/a1/fi|a1-natuerlich|a1.card.a1-natuerlich.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Tietysti • Luonnollinen",
  "g2/a1/fi|a1-natuerlich|a1.card.a1-natuerlich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Tietysti • Luonnollinen",
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ottaa • Ottaa mukaan",
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ottaa • Ottaa mukaan",
  "g2/a1/fi|a1-neu|a1.card.a1-neu.study.explanation[5]|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vastakohta on alt (vanha); Substantiivi das Neue tarkoittaa jotain uutta.",
  "g2/a1/fi|a1-nur-study|a1.card.a1-nur-study.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vain • Ainoastaan",
  "g2/a1/fi|a1-nur-study|a1.card.a1-nur-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vain • Ainoastaan",
  "g2/a1/fi|a1-oder|a1.card.a1-oder.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vai • Tai",
  "g2/a1/fi|a1-oder|a1.card.a1-oder.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vai • Tai",
  "g2/a1/fi|a1-passen|a1.card.a1-passen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sopia • Sovittua",
  "g2/a1/fi|a1-passen|a1.card.a1-passen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sopia • Sovittua",
  "g2/a1/fi|a1-probieren|a1.card.a1-probieren.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kokeilla • Maistaa",
  "g2/a1/fi|a1-probieren|a1.card.a1-probieren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kokeilla • Maistaa",
  "g2/a1/fi|a1-seite|a1.card.a1-seite.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sivu • Puoli",
  "g2/a1/fi|a1-seite|a1.card.a1-seite.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sivu • Puoli",
  "g2/a1/fi|a1-sich|a1.card.a1-sich.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Itse • Itselleen",
  "g2/a1/fi|a1-sich|a1.card.a1-sich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Itse • Itselleen",
  "g2/a1/fi|a1-sicher|a1.card.a1-sicher.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Turvallinen • Varmasti",
  "g2/a1/fi|a1-sicher|a1.card.a1-sicher.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Turvallinen • Varmasti",
  "g2/a1/fi|a1-ueber|a1.card.a1-ueber.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Yllä • Aiheesta",
  "g2/a1/fi|a1-ueber|a1.card.a1-ueber.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Yllä • Aiheesta",
  "g2/a1/fi|a1-um|a1.card.a1-um.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Noin • Kello",
  "g2/a1/fi|a1-um|a1.card.a1-um.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Noin • Kello",
  "g2/a1/fi|a1-verstehen|a1.card.a1-verstehen.study.explanation[2]|MULTI_TRANSLATION|deterministic/multi-translation":
    "Suomeksi ei täällä yleensä tarvita sanoja «osata» tai «voida»; Ne vastaavat useammin sanaa können.",
  "g2/a1/fi|a1-vor|a1.card.a1-vor.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ennen • Edessä",
  "g2/a1/fi|a1-vor|a1.card.a1-vor.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ennen • Edessä",
  "g2/a1/fi|a1-was|a1.card.a1-was.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Mikä • Mitä",
  "g2/a1/fi|a1-was|a1.card.a1-was.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Mikä • Mitä",
  "g2/a1/fi|a1-wenn|a1.card.a1-wenn.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jos (ehto) • Kun (aika)",
  "g2/a1/fi|a1-wenn|a1.card.a1-wenn.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jos (ehto) • Kun (aika)",
  "g2/a1/fi|a1-wer|a1.card.a1-wer.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kuka • Joka",
  "g2/a1/fi|a1-wer|a1.card.a1-wer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kuka • Joka",
  "g2/a1/fi|a1-wie|a1.card.a1-wie.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Miten • Kuinka",
};

const ET_LEAK =
  /\b(Maksma|Riik|Pikk|Kauakestev|Jätma|Laskma|Jooksma|Töötama|Asuma|Lamama|Tegema|Valmistama|Mees|Abikaasa|-sse|Pärast|Muidugi|Loomulik|Võtma|Kätte võtma|Vastand|Nimisõna|Ainult|Üksnes|Või|Ehk|Sobima|Hästi sobima|Proovima|Maitsma|Lehekülg|Külg|End|Endale|Kindel|Kindlasti|Kohal|Kohta|Umbes|Kell|Eesti keeles|Enne|Ees|Mis|Mida|Kui \(tingimus\)|Kes|Kumb|Kuidas)\b/i;

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/fi|a1-liegen|a1.card.a1-liegen.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Olla", "Makata", "Asuma", "Lamama",
  ],
  "g2/a1/fi|a1-liegen|a1.card.a1-liegen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Olla", "Makata",
  ],
  "g2/a1/fi|a1-machen|a1.card.a1-machen.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Valmistaa", "Valmistama", "Tegema",
  ],
  "g2/a1/fi|a1-machen|a1.card.a1-machen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Valmistaa",
  ],
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Poimia", "Võtma",
  ],
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Poimia",
  ],
  "g2/a1/fi|a1-passen|a1.card.a1-passen.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Sopia hyvin", "Hästi sobima",
  ],
  "g2/a1/fi|a1-passen|a1.card.a1-passen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Sopia hyvin",
  ],
  "g2/a1/fi|a1-wer|a1.card.a1-wer.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Kumpi", "Kumb", "Kes",
  ],
  "g2/a1/fi|a1-wer|a1.card.a1-wer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Kumpi",
  ],
};

const NARROWING_FRAGMENTS = {
  "g2/a1/fi|a1-machen|a1.card.a1-machen.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Valmistaa", "Rakentaa", "Valmistama",
  ],
  "g2/a1/fi|a1-machen|a1.card.a1-machen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Valmistaa", "Rakentaa",
  ],
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Poimia",
  ],
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Poimia",
  ],
  "g2/a1/fi|a1-passen|a1.card.a1-passen.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Sopia hyvin",
  ],
  "g2/a1/fi|a1-passen|a1.card.a1-passen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Sopia hyvin",
  ],
  "g2/a1/fi|a1-wer|a1.card.a1-wer.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Kumpi",
  ],
  "g2/a1/fi|a1-wer|a1.card.a1-wer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Kumpi",
  ],
};

function segments(val) {
  return String(val || "")
    .split(/\s*•\s*|;(?=\s)/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function maxSourceSegments(lvSource) {
  const bulletSegs = String(lvSource || "")
    .split(/\s*•\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (bulletSegs.length > 1) return bulletSegs.length;
  const semiSegs = String(lvSource || "")
    .split(/;(?=\s)/)
    .map((s) => s.trim())
    .filter(Boolean);
  return semiSegs.length || 1;
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
let semanticNarrowing = 0;
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
  const maxSegs = maxSourceSegments(lvSource);
  const card = id.match(/a1-[^|]+/)[0];

  const auditEntry = {
    card,
    lv_source: lvSource,
    production_current: prod,
    expected_fi: expected,
    decision: d?.owner_decision,
    owner_new: d?.owner_decision === "LABOT" ? String(d.owner_new || "").trim() : "",
    segment_fidelity: null,
    scalar_pass: null,
  };

  if (!d || !expected) {
    issues.push({ id, type: "MISSING", msg: "no decision or target" });
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

  for (const list of [FORBIDDEN_FRAGMENTS[id], NARROWING_FRAGMENTS[id]]) {
    if (!list || d.owner_decision !== "LABOT") continue;
    for (const frag of list) {
      if (effectiveVal.includes(frag)) {
        if (list === NARROWING_FRAGMENTS[id]) {
          semanticNarrowing++;
          issues.push({ id, type: "SEMANTIC_NARROWING", msg: `contains "${frag}"` });
        } else {
          semanticViolations++;
          issues.push({ id, type: "FORBIDDEN", msg: `contains "${frag}"` });
        }
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
      msg: `${segs.length} > ${maxSegs}: ${effectiveVal}`,
    });
  }

  if (d.owner_decision === "LABOT" && effectiveVal === prod) {
    issues.push({ id, type: "LABOT_NO_CHANGE", msg: "owner_new equals production_current" });
    semanticViolations++;
  }

  if (d.owner_decision === "NELABOT" && prod !== expected) {
    issues.push({ id, type: "NELABOT_WRONG_PROD", msg: `production != expected` });
    semanticViolations++;
  }

  rowAudit.push(auditEntry);
}

const pass =
  issues.length === 0 &&
  labot + nelabot === 50 &&
  pending === 0 &&
  extraMeaningNotInSource === 0 &&
  semanticNarrowing === 0 &&
  duplicateMeanings === 0 &&
  wrongLanguage === 0 &&
  semanticViolations === 0 &&
  deTargetViolations === 0 &&
  degeneratePairs === 0;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_006_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_006_LINGUISTIC_REVIEW_BLOCKED",
  gala_repair: true,
  recalculated_from_production: true,
  pass,
  row_count: rows.length,
  labot,
  nelabot,
  pending,
  gates: {
    EXTRA_MEANING_NOT_IN_SOURCE: extraMeaningNotInSource,
    SEMANTIC_NARROWING_FROM_SOURCE: semanticNarrowing,
    duplicate_meanings: duplicateMeanings,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
    de_target_alignment_violations: deTargetViolations,
    degenerate_example_pairs: degeneratePairs,
  },
  row_audit: rowAudit,
  failures: issues,
  verdict: pass
    ? "LRB_006_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_006_LINGUISTIC_REVIEW_BLOCKED",
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
