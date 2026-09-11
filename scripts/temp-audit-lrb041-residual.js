#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { setAt } = require("./lib/da-a1-owner-path");

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
const LV_LEAK_IT =
  /\b(No kāda|kaut kā|Izcelsme|Pretstats|Iebilde|Tomēr|Uz|Virsū|Kurp|Ārā|apciemojums|Atnest|Aiznest|Tur|Te|Šeit|vispārīgi|Kurš|Kura|Kuru|Jo|Tāpēc|Vienna|Reiz|Ledus|Saldéjums|Spirmi|Tikai|Borsa|Tā|Bezpersoniska|Maltīte|Serra|Kaut|Nedaudz|Succo|Jums|Braukt|Gilet|Sieva|Tūlīt|Vienāds)\b/i;

const IS_EXPECTED = {
  zusammen: { lv: "saman" },
  zwanzig: { lv: "tuttugu" },
  zwanzigste: { lv: "tuttugasti" },
  zwei: { lv: "tveir" },
  zweihundert: { lv: "tveir hundruð" },
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
  "a1-besuch": { "study.comparison[0].meaning": "visita • ospite • visita" },
  "a1-bringen": { lv: "Portare • Consegnare", "study.translation": "Portare • Consegnare" },
  "a1-da": { "study.comparison[0].meaning": "Lì • Qui • Eccoci" },
  "a1-das": { "study.comparison[2].meaning": "Quale • Quale • Quale" },
  "a1-dass": { "study.comparison[1].meaning": "Perché • Poiché" },
  "a1-ein": { lv: "Articolo indefinito • Uno • Qualcuno", "study.translation": "Articolo indefinito • Uno • Qualcuno" },
  "a1-einmal": { lv: "Una volta • Una volta", "study.translation": "Una volta • Una volta" },
  "a1-eis": { lv: "Ghiaccio • Gelato", "study.translation": "Ghiaccio • Gelato" },
  "a1-erst": { lv: "Prima • Solo", "study.comparison[0].meaning": "Prima • Solo", "study.translation": "Prima • Solo" },
  "a1-es": { lv: "Esso • Esso • Forma impersonale", "study.comparison[0].meaning": "esso • forma impersonale", "study.translation": "Esso • Esso • Forma impersonale" },
  "a1-essen-study": { lv: "Cibo • Pasto", "study.translation": "Cibo • Pasto" },
  "a1-etwas": { lv: "Qualcosa • Un po'", "study.translation": "Qualcosa • Un po'" },
  "a1-euch": { lv: "Voi • A voi", "study.translation": "Voi • A voi" },
  "a1-fahren": { lv: "Guidare • Portare • Trasportare", "study.translation": "Guidare • Portare • Trasportare" },
  "a1-finden": { lv: "Trovare • Ritieni", "study.translation": "Trovare • Ritieni" },
  "a1-frau": { lv: "Donna • Moglie", "study.translation": "Donna • Moglie" },
  "a1-gleich": { lv: "Subito • Uguale" },
};

function parseMaybeJson(v) {
  if (typeof v !== "string") return v;
  const t = v.trim();
  if (
    (t.startsWith("[") && t.endsWith("]")) ||
    (t.startsWith("{") && t.endsWith("}"))
  ) {
    try {
      return JSON.parse(t);
    } catch {
      return v;
    }
  }
  return v;
}

function applyPatches(nested, ownerNewStr) {
  const out = JSON.parse(JSON.stringify(nested));
  if (!ownerNewStr) return out;
  const patches = JSON.parse(ownerNewStr);
  for (const [p, value] of Object.entries(patches)) {
    if (p === "lv") {
      out.lv = value;
      continue;
    }
    if (!out.study && p.startsWith("study.")) out.study = {};
    if (p.startsWith("study.")) {
      const field = p.slice(6);
      if (!setAt(out.study, field, value)) {
        const m = field.match(/^(\w+)\[(\d+)\]/);
        if (m) {
          const arrName = m[1];
          if (!Array.isArray(out.study[arrName])) out.study[arrName] = [];
          setAt(out.study, field, value);
        }
      }
    }
  }
  return out;
}

function collectStrings(obj, prefix = "", acc = []) {
  if (obj == null) return acc;
  if (typeof obj === "string") {
    if (prefix.endsWith(".de") || prefix.endsWith(".word")) return acc;
    acc.push({ path: prefix, text: obj });
    return acc;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => collectStrings(v, `${prefix}[${i}]`, acc));
    return acc;
  }
  if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "de" || k === "word") continue;
      collectStrings(v, prefix ? `${prefix}.${k}` : k, acc);
    }
  }
  return acc;
}

function getAt(obj, fieldPath) {
  if (fieldPath === "lv") return obj.lv;
  if (fieldPath.startsWith("study.")) {
    const sub = fieldPath.slice(6);
    const parts = sub.split(/\.|\[|\]/).filter(Boolean);
    let cur = obj.study || {};
    for (const p of parts) cur = cur?.[p];
    return cur;
  }
  return undefined;
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

  const patches = JSON.parse(decision.owner_new);
  const lang = row.languages;
  const cardId = String(row.card_object_id || "").split("|")[0];

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
    for (const [field, want] of Object.entries(patches)) {
      if (patches[field] !== want) {
        failures.push({ id: row.finding_stable_ids, reason: "IT_PATCH_MISMATCH", field, got: patches[field], want });
      }
      if (LV_LEAK_IT.test(patches[field])) {
        failures.push({ id: row.finding_stable_ids, reason: "IT_LV_RESIDUE", field, val: patches[field] });
      }
    }
    const fieldPath = row.field_path.replace(/^a1\.card\.[^.]+\./, "").replace(/^a1\.card\.[^.]+$/, "native");
    let expectedField;
    if (row.field_path.endsWith(".native")) expectedField = "lv";
    else if (row.field_path.includes("study.translation")) expectedField = "study.translation";
    else {
      const m = row.field_path.match(/comparison\[(\d+)\]\.meaning/);
      expectedField = m ? `study.comparison[${m[1]}].meaning` : null;
    }
    if (expectedField && exp[expectedField] && patches[expectedField] !== exp[expectedField]) {
      failures.push({ id: row.finding_stable_ids, reason: "IT_EXPECTED_FIELD", field: expectedField });
    }
  }
}

const proof = {
  batch_id: BATCH,
  classification: failures.length ? "LRB_041_RESIDUAL_FAIL" : "LRB_041_RESIDUAL_PASS",
  row_count: rows.length,
  is_cards: isCount,
  it_cards: itCount,
  individual_linguistic: rows.length,
  failures,
  verdict: failures.length ? "BLOCKED" : "LRB_041_FULL_50_50_LINGUISTIC_REVIEW_PASS",
};

const proofPath = path.join(ROOT, `reports/g2-a1-owner/batches-reviewed/${BATCH}-residual-wrong-language-proof.json`);
fs.mkdirSync(path.dirname(proofPath), { recursive: true });
fs.writeFileSync(proofPath, `${JSON.stringify(proof, null, 2)}\n`);
console.log(JSON.stringify(proof, null, 2));
if (failures.length) process.exit(1);
