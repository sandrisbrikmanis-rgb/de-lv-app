#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-041";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const ET_WORDS =
  /\b(Coos|Tyve|Kahegümce|Kaks|Kaksada|Kak korda|Teine|Sibul|Vahel|Kaksteist|Kahetíšík)\b/i;
const NO_WORDS = /\b(Coos|Tyve)\b/i;
const LV_LEAK_IS =
  /\b(kopā|divdesmit|divdesmitais|divi|divsimt|divreiz|otrais|sīpols|starp|divpadsmit|divpadsmitais)\b/i;
const LV_LEAK_IT_SEGMENTS = new Set(
  [
    "No kāda/kaut kā • Izcelsme",
    "Pretstats • Iebilde • Tomēr",
    "Uz • Virsū • Kurp?",
    "No • Ārā",
    "visita • apciemojums • visita",
    "Atnest • Aiznest",
    "Tur • Te • Šeit (vispārīgi)",
    "Kurš • Kura • Kuru",
    "Jo • Tāpēc ka",
    "Articolo indefinito • Qualcuno • Qualcuno",
    "Vienna • Reiz",
    "Ledus • Saldéjums",
    "Spirmi di pesce • Tikai",
    "Borsa • Tā • Bezpersoniska forma",
    "ˈhis • Maltīte",
    "Serra Kaut • Nedaudz",
    "Succo • Jums",
    "Braukt • Gilet • Aizvest",
    "Trova • Considera",
    "Sieva • Sieva",
    "Tūlīt • Vienāds",
    "Dal • Al • Presente",
  ].map((s) => s.toLowerCase())
);
const LV_TOKEN_IT =
  /\b(apciemojums|Atnest|Aiznest|Izcelsme|Pretstats|Iebilde|Tomēr|Virsū|Kurp|Ārā|vispārīgi|Kurš|Kura|Kuru|Tāpēc|Vienna|Saldéjums|Spirmi|Bezpersoniska|Maltīte|Serra|Nedaudz|Succo|Jums|Braukt|Gilet|Aizvest|Sieva|Vienāds)\b/i;

const IS_EXPECTED = {
  zusammen: { lv: "saman" },
  zwanzig: { lv: "tuttugu" },
  zwanzigste: { lv: "tuttugasti" },
  zwei: { lv: "tveir" },
  zweihundert: { lv: "tvö hundruð" },
  zweimal: { lv: "tvisvar" },
  zweite: { lv: "annar" },
  Zwiebel: { lv: "laukur" },
  zwischen: { lv: "á milli" },
  zwölf: { lv: "tólf" },
  zwölfte: { lv: "tólfti" },
};

const IT_EXPECTED = {
  "a1-ab": { "study.comparison[1].meaning": "Da qualcuno/qualcosa • Origine" },
  "a1-aber": { "study.comparison[0].meaning": "Contrasto • Obiezione • Però" },
  "a1-an": { lv: "A • Su • Sul bordo", "study.translation": "Sopra • In superficie • Sul bordo" },
  "a1-aufs": { lv: "Su • Sopra • Dove?", "study.translation": "Su • Sopra • Dove?" },
  "a1-aus": { lv: "Da • Fuori", "study.translation": "Da • Fuori" },
  "a1-besuch": { "study.comparison[0].meaning": "visita • visita a qualcuno • visita (ufficiale)" },
  "a1-bringen": { lv: "Portare • Consegnare", "study.translation": "Portare • Consegnare" },
  "a1-da": { "study.comparison[0].meaning": "Lì • Qui • Eccoci" },
  "a1-das": { "study.comparison[2].meaning": "Quale" },
  "a1-dass": { "study.comparison[1].meaning": "Perché • Poiché" },
  "a1-ein": { lv: "Articolo indefinito • Un/Uno", "study.translation": "Articolo indefinito • Un/Uno" },
  "a1-einmal": { lv: "Una volta", "study.translation": "Una volta" },
  "a1-eis": { lv: "Ghiaccio • Gelato", "study.translation": "Ghiaccio • Gelato" },
  "a1-erst": { lv: "Prima • Solo", "study.comparison[0].meaning": "Prima • Solo", "study.translation": "Prima • Solo" },
  "a1-es": {
    lv: "Esso • Forma impersonale",
    "study.comparison[0].meaning": "esso • forma impersonale",
    "study.translation": "Esso • Forma impersonale",
  },
  "a1-essen-study": { lv: "Cibo • Pasto", "study.translation": "Cibo • Pasto" },
  "a1-etwas": { lv: "Qualcosa • Un po'", "study.translation": "Qualcosa • Un po'" },
  "a1-euch": { lv: "Voi • A voi", "study.translation": "Voi • A voi" },
  "a1-fahren": { lv: "Guidare • Viaggiare in veicolo", "study.translation": "Guidare • Viaggiare in veicolo" },
  "a1-finden": { lv: "Trovare • Ritenere", "study.translation": "Trovare • Ritenere" },
  "a1-frau": { lv: "Donna • Moglie", "study.translation": "Donna • Moglie" },
  "a1-gleich": { lv: "Subito • Uguale" },
};

function hasDuplicateBulletSegments(text) {
  const parts = String(text).split("•").map((s) => s.trim().toLowerCase());
  if (parts.length < 2) return false;
  const seen = new Set();
  for (const p of parts) {
    if (seen.has(p)) return true;
    seen.add(p);
  }
  return false;
}

function hasFiniteVerbForm(text) {
  return /\b(Trova|Considera|Ritieni|Porta|Guida)\b/.test(text);
}

const failures = [];
let isCount = 0;
let itCount = 0;

for (const row of rows) {
  const decision = decisions[row.finding_stable_ids];
  if (!decision) {
    failures.push({ id: row.finding_stable_ids, reason: "MISSING_DECISION" });
    continue;
  }
  if (decision.owner_decision !== "LABOT") {
    failures.push({ id: row.finding_stable_ids, reason: "NOT_LABOT" });
    continue;
  }
  if (!String(decision.owner_note || "").trim()) {
    failures.push({ id: row.finding_stable_ids, reason: "MISSING_OWNER_NOTE" });
  }

  const patches = JSON.parse(decision.owner_new);
  const lang = row.languages;
  const cardId = String(row.card_object_id || "").split("|")[0];
  const lvSource = String(row.lv_source || "");

  if (lang === "is") {
    isCount += 1;
    const exp = IS_EXPECTED[cardId];
    if (!exp) {
      failures.push({ id: row.finding_stable_ids, reason: "NO_IS_EXPECTED", cardId });
      continue;
    }
    const val = patches.lv;
    if (val !== exp.lv) {
      failures.push({ id: row.finding_stable_ids, reason: "IS_VALUE_MISMATCH", got: val, want: exp.lv });
    }
    if (ET_WORDS.test(val) || NO_WORDS.test(val) || LV_LEAK_IS.test(val)) {
      failures.push({ id: row.finding_stable_ids, reason: "IS_WRONG_LANGUAGE_RESIDUE", val });
    }
  } else if (lang === "it") {
    itCount += 1;
    const exp = IT_EXPECTED[cardId];
    if (!exp) {
      failures.push({ id: row.finding_stable_ids, reason: "NO_IT_EXPECTED", cardId });
      continue;
    }

    let expectedField;
    if (row.field_path.endsWith(".native")) expectedField = "lv";
    else if (row.field_path.includes("study.translation")) expectedField = "study.translation";
    else {
      const m = row.field_path.match(/comparison\[(\d+)\]\.meaning/);
      expectedField = m ? `study.comparison[${m[1]}].meaning` : null;
    }

    if (!expectedField || !exp[expectedField]) {
      failures.push({ id: row.finding_stable_ids, reason: "UNMAPPED_IT_FIELD", field: row.field_path });
      continue;
    }

    const val = patches[expectedField];
    if (val !== exp[expectedField]) {
      failures.push({
        id: row.finding_stable_ids,
        reason: "IT_VALUE_MISMATCH",
        field: expectedField,
        got: val,
        want: exp[expectedField],
      });
    }
    if (LV_LEAK_IT_SEGMENTS.has(String(val).toLowerCase()) || LV_TOKEN_IT.test(val)) {
      failures.push({ id: row.finding_stable_ids, reason: "IT_LV_RESIDUE", field: expectedField, val });
    }
    if (hasDuplicateBulletSegments(val)) {
      failures.push({ id: row.finding_stable_ids, reason: "IT_DUPLICATE_BULLET_SEGMENT", field: expectedField, val });
    }
    if (hasFiniteVerbForm(val)) {
      failures.push({ id: row.finding_stable_ids, reason: "IT_NON_INFINITIVE_FORM", field: expectedField, val });
    }
    if (cardId === "a1-fahren" && /\b(Portare|Trasportare)\b/.test(val)) {
      failures.push({ id: row.finding_stable_ids, reason: "IT_FAHREN_TRANSITIVE_LEAK", val });
    }
    if (cardId === "a1-ein" && /\bQualcuno\b/i.test(val)) {
      failures.push({ id: row.finding_stable_ids, reason: "IT_EIN_QUALCUNO_LEAK", val });
    }
    if (cardId === "a1-besuch" && /\bospite\b/i.test(val)) {
      failures.push({ id: row.finding_stable_ids, reason: "IT_BESUCH_OSPITE_LEAK", val });
    }
    if (cardId === "a1-es" && /Esso\s*•\s*Esso/i.test(val)) {
      failures.push({ id: row.finding_stable_ids, reason: "IT_ES_ESSO_DUPLICATE", val });
    }
    if (Object.keys(patches).length !== 1) {
      failures.push({ id: row.finding_stable_ids, reason: "IT_PATCH_COUNT", count: Object.keys(patches).length });
    }
  }
}

if (isCount !== 11) failures.push({ reason: "IS_COUNT", got: isCount, want: 11 });
if (itCount !== 39) failures.push({ reason: "IT_COUNT", got: itCount, want: 39 });
if (rows.length !== 50) failures.push({ reason: "ROW_COUNT", got: rows.length, want: 50 });

const proof = {
  batch_id: BATCH,
  classification: failures.length ? "LRB_041_RESIDUAL_FAIL" : "LRB_041_RESIDUAL_PASS",
  repair_pass: true,
  row_count: rows.length,
  is_cards: isCount,
  it_cards: itCount,
  individual_linguistic: rows.length,
  gala_repair_items: [
    "IS zweihundert tvö hundruð",
    "IT einmal Una volta",
    "IT es Esso•Forma impersonale",
    "IT das Quale",
    "IT besuch visita•visita a qualcuno•visita (ufficiale)",
    "IT ein Articolo indefinito•Un/Uno",
    "IT finden Trovare•Ritenere",
    "IT fahren Guidare•Viaggiare in veicolo",
  ],
  failures,
  verdict: failures.length ? "BLOCKED" : "LRB_041_LINGUISTIC_REPAIR_PASS",
};

const proofPath = path.join(ROOT, `reports/g2-a1-owner/batches-reviewed/${BATCH}-residual-wrong-language-proof.json`);
fs.mkdirSync(path.dirname(proofPath), { recursive: true });
fs.writeFileSync(proofPath, `${JSON.stringify(proof, null, 2)}\n`);
console.log(JSON.stringify(proof, null, 2));
if (failures.length) process.exit(1);
