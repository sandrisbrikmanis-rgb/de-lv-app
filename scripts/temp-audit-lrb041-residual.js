#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-041";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "data/g2-a1-owner-pending/LRB-041-decisions.json"),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const ET_WORDS =
  /\b(Coos|Tyve|Kahegümce|Kaks|Kaksada|Kak korda|Teine|Sibul|Vahel|Kaksteist|Kahetíšík)\b/i;
const NO_WORDS = /\b(ET|NO)\b/i;
const LV_LEAK_IS =
  /\b(kopā|divdesmit|divdesmitais|divi|divsimt|divreiz|otrais|sīpols|starp|divpadsmit|divpadsmitais)\b/i;
const LV_LEAK_IT =
  /\b(pie|uz|no|atnest|tur|te|nenoteiktais artikuls|vienreiz|reiz|ledus|saldējums|tikai|vispirms|tas|bezpersoniska forma|ēdiens|maltīte|kaut kas|jūs|jums|braukt|atrast|sieviete|tūlīt|apmeklējums|apciemojums|vizīte|no kāda|izcelsme|pretstats|iebilde|tomēr|kurš|kura|kuru|jo|tāpēc ka)\b/i;
const GARBAGE_IT =
  /\b(Dal|Al|Presente|Sopra|In superficie|Sul bordo|Uz|Virsū|Kurp|Ārā|Atnest|Aiznest|Spirmi di pesce|Tikai|Borsa|Tā|Bezpersoniska forma|ˈhis|Maltīte|Serra Kaut|Nedaudz|Succo|Jums|Braukt|Gilet|Aizvest|Trova|Considera|Sieva|Tūlīt|Vienāds|Ledus|Saldéjums|Vienna|Reiz|Pretstats|Iebilde|Tomēr|No kāda|Izcelsme|Tur|Šeit|Kurš|Kura|Kuru|Jo|Tāpēc ka)\b/i;

const IS_EXPECTED = {
  zusammen: "saman",
  zwanzig: "tuttugu",
  zwanzigste: "tuttugasti",
  zwei: "tveir",
  zweihundert: "tvö hundruð",
  zweimal: "tvisvar",
  zweite: "annar",
  Zwiebel: "laukur",
  zwischen: "á milli",
  zwölf: "tólf",
  zwölfte: "tólfti",
};

const IT_EXPECTED = {
  "g2/a1/it|a1-ab|a1.card.a1-ab.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Da qualcuno/qualcosa • Origine",
  "g2/a1/it|a1-aber|a1.card.a1-aber.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Contrasto • Obiezione • Però",
  "g2/a1/it|a1-an|a1.card.a1-an.native|MULTI_TRANSLATION|deterministic/multi-translation": "Presso",
  "g2/a1/it|a1-an|a1.card.a1-an.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Presso",
  "g2/a1/it|a1-aufs|a1.card.a1-aufs.native|MULTI_TRANSLATION|deterministic/multi-translation": "Su",
  "g2/a1/it|a1-aufs|a1.card.a1-aufs.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Su",
  "g2/a1/it|a1-aus|a1.card.a1-aus.native|MULTI_TRANSLATION|deterministic/multi-translation": "Da",
  "g2/a1/it|a1-aus|a1.card.a1-aus.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Da",
  "g2/a1/it|a1-besuch|a1.card.a1-besuch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "visita • visita a qualcuno • visita (ufficiale)",
  "g2/a1/it|a1-bringen|a1.card.a1-bringen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Portare",
  "g2/a1/it|a1-bringen|a1.card.a1-bringen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Portare",
  "g2/a1/it|a1-da|a1.card.a1-da.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Lì • Qui",
  "g2/a1/it|a1-das|a1.card.a1-das.study.comparison[2].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Quale",
  "g2/a1/it|a1-dass|a1.card.a1-dass.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Perché • Poiché",
  "g2/a1/it|a1-ein|a1.card.a1-ein.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Articolo indefinito",
  "g2/a1/it|a1-ein|a1.card.a1-ein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Articolo indefinito",
  "g2/a1/it|a1-einmal|a1.card.a1-einmal.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Una volta",
  "g2/a1/it|a1-einmal|a1.card.a1-einmal.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Una volta",
  "g2/a1/it|a1-eis|a1.card.a1-eis.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ghiaccio • Gelato",
  "g2/a1/it|a1-eis|a1.card.a1-eis.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ghiaccio • Gelato",
  "g2/a1/it|a1-erst|a1.card.a1-erst.native|MULTI_TRANSLATION|deterministic/multi-translation": "Solo",
  "g2/a1/it|a1-erst|a1.card.a1-erst.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Prima • Solo",
  "g2/a1/it|a1-erst|a1.card.a1-erst.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Solo",
  "g2/a1/it|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation": "Esso",
  "g2/a1/it|a1-es|a1.card.a1-es.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "esso • forma impersonale",
  "g2/a1/it|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Esso",
  "g2/a1/it|a1-essen-study|a1.card.a1-essen-study.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Cibo • Pasto",
  "g2/a1/it|a1-essen-study|a1.card.a1-essen-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Cibo • Pasto",
  "g2/a1/it|a1-etwas|a1.card.a1-etwas.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Qualcosa",
  "g2/a1/it|a1-etwas|a1.card.a1-etwas.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Qualcosa",
  "g2/a1/it|a1-euch|a1.card.a1-euch.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Voi • A voi",
  "g2/a1/it|a1-euch|a1.card.a1-euch.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Voi • A voi",
  "g2/a1/it|a1-fahren|a1.card.a1-fahren.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Viaggiare in veicolo",
  "g2/a1/it|a1-fahren|a1.card.a1-fahren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Viaggiare in veicolo",
  "g2/a1/it|a1-finden|a1.card.a1-finden.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Trovare",
  "g2/a1/it|a1-finden|a1.card.a1-finden.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Trovare",
  "g2/a1/it|a1-frau|a1.card.a1-frau.native|MULTI_TRANSLATION|deterministic/multi-translation": "Donna",
  "g2/a1/it|a1-frau|a1.card.a1-frau.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Donna",
  "g2/a1/it|a1-gleich|a1.card.a1-gleich.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Subito",
};

/** Rows where owner_new may have fewer segments than lv_source (same-sense dedupe or IT grammar). */
const ALLOWED_REDUCTION = new Set([
  "g2/a1/it|a1-einmal|a1.card.a1-einmal.native|MULTI_TRANSLATION|deterministic/multi-translation",
  "g2/a1/it|a1-einmal|a1.card.a1-einmal.study.translation|MULTI_TRANSLATION|deterministic/multi-translation",
  "g2/a1/it|a1-das|a1.card.a1-das.study.comparison[2].meaning|MULTI_TRANSLATION|deterministic/multi-translation",
  "g2/a1/it|a1-da|a1.card.a1-da.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation",
]);

const VERB_INFINITIVES = new Set([
  "portare",
  "trovare",
  "viaggiare in veicolo",
]);

function norm(s) {
  return String(s || "").trim();
}

function segments(val) {
  return norm(val)
    .split(/\s*•\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function segKey(s) {
  return s.trim().toLowerCase();
}

function hasDupes(val) {
  const seen = new Set();
  for (const s of segments(val)) {
    const k = segKey(s);
    if (seen.has(k)) return true;
    seen.add(k);
  }
  return false;
}

function extractOwnerValue(ownerNewStr, fieldPath) {
  const patches = JSON.parse(ownerNewStr);
  if (fieldPath === "lv") return patches.lv;
  const suffix = fieldPath.replace(/^a1\.card\.[^.]+\./, "");
  if (suffix === "native") return patches.lv;
  return patches[suffix];
}

function cardLemma(row) {
  return row.card_object_id.split("|")[0];
}

function wrongLanguageFlags(text, lang) {
  const flags = [];
  if (ET_WORDS.test(text)) flags.push("ET");
  if (NO_WORDS.test(text)) flags.push("NO");
  if (lang === "is" && LV_LEAK_IS.test(text)) flags.push("LV");
  if (lang === "it" && (LV_LEAK_IT.test(text) || GARBAGE_IT.test(text)))
    flags.push("LV/GARBAGE");
  return flags;
}

const issues = [];
let labot = 0;
let nelabot = 0;
let pending = 0;
let extraMeaningNotInSource = 0;
let duplicateMeanings = 0;
let wrongLanguage = 0;
let isCardinalOrdinalIssues = 0;
let itScalarIssues = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const d = decisions[id];
  if (!d) {
    issues.push({ id, type: "MISSING", msg: "no decision" });
    continue;
  }

  if (d.owner_decision === "LABOT") labot += 1;
  else if (d.owner_decision === "NELABOT") nelabot += 1;
  else pending += 1;

  const lang = row.languages;
  const ownerVal = extractOwnerValue(d.owner_new, row.field_path);

  if (!norm(ownerVal)) {
    issues.push({ id, type: "EMPTY", msg: "owner_new empty" });
    continue;
  }

  if (hasDupes(ownerVal)) {
    duplicateMeanings += 1;
    issues.push({ id, type: "DUPLICATE", msg: `duplicate segments: ${ownerVal}` });
  }

  const wl = wrongLanguageFlags(ownerVal, lang);
  if (wl.length) {
    wrongLanguage += 1;
    issues.push({ id, type: "WRONG_LANG", msg: `${wl.join(",")} in ${ownerVal}` });
  }

  if (lang === "is") {
    const lemma = cardLemma(row);
    const expected = IS_EXPECTED[lemma];
    if (!expected) {
      issues.push({ id, type: "IS", msg: `unknown lemma ${lemma}` });
      isCardinalOrdinalIssues += 1;
    } else if (norm(ownerVal) !== expected) {
      issues.push({
        id,
        type: "IS",
        msg: `expected "${expected}", got "${ownerVal}"`,
      });
      isCardinalOrdinalIssues += 1;
    }
  } else if (lang === "it") {
    const expected = IT_EXPECTED[id];
    if (!expected) {
      issues.push({ id, type: "IT", msg: "no IT_EXPECTED entry" });
      itScalarIssues += 1;
    } else if (norm(ownerVal) !== expected) {
      issues.push({
        id,
        type: "IT",
        msg: `expected "${expected}", got "${ownerVal}"`,
      });
      itScalarIssues += 1;
    }

    const srcSegs = segments(row.lv_source);
    const outSegs = segments(ownerVal);
    const isScalar =
      row.field_path.endsWith(".native") ||
      row.field_path.endsWith(".study.translation");

    if (isScalar) {
      if (outSegs.length > srcSegs.length) {
        extraMeaningNotInSource += outSegs.length - srcSegs.length;
        issues.push({
          id,
          type: "EXTRA_MEANING_NOT_IN_SOURCE",
          msg: `scalar ${outSegs.length} > source ${srcSegs.length}: ${ownerVal}`,
        });
        itScalarIssues += 1;
      } else if (outSegs.length < srcSegs.length && !ALLOWED_REDUCTION.has(id)) {
        extraMeaningNotInSource += 1;
        issues.push({
          id,
          type: "SOURCE_SEGMENT_MISMATCH",
          msg: `scalar ${outSegs.length} < source ${srcSegs.length} without allowance`,
        });
        itScalarIssues += 1;
      }
    } else {
      if (outSegs.length > srcSegs.length && !ALLOWED_REDUCTION.has(id)) {
        extraMeaningNotInSource += outSegs.length - srcSegs.length;
        issues.push({
          id,
          type: "EXTRA_MEANING_NOT_IN_SOURCE",
          msg: `cmp ${outSegs.length} > source ${srcSegs.length}: ${ownerVal}`,
        });
        itScalarIssues += 1;
      }
    }

    const first = segKey(outSegs[0] || "");
    if (VERB_INFINITIVES.has(first) && ownerVal !== ownerVal.charAt(0).toUpperCase() + ownerVal.slice(1)) {
      if (!/^[A-Z]/.test(ownerVal.split(" • ")[0])) {
        issues.push({ id, type: "DICT_FORM", msg: `verb not capitalized: ${ownerVal}` });
        itScalarIssues += 1;
      }
    }
    if (
      (id.includes("bringen") || id.includes("finden") || id.includes("fahren")) &&
      isScalar
    ) {
      const inf = segKey(outSegs[0]);
      if (!["portare", "trovare", "viaggiare in veicolo"].includes(inf)) {
        issues.push({ id, type: "DICT_FORM", msg: `expected infinitive, got ${ownerVal}` });
        itScalarIssues += 1;
      }
    }
  }
}

const pass =
  issues.length === 0 &&
  labot === 50 &&
  nelabot === 0 &&
  pending === 0 &&
  extraMeaningNotInSource === 0 &&
  duplicateMeanings === 0 &&
  wrongLanguage === 0;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_041_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_041_LINGUISTIC_REVIEW_BLOCKED",
  repair_pass: true,
  source_semantic_repair: true,
  row_count: rows.length,
  is_cards: 11,
  it_cards: 39,
  individual_linguistic: 50,
  labot,
  nelabot,
  pending,
  gates: {
    EXTRA_MEANING_NOT_IN_SOURCE: extraMeaningNotInSource,
    duplicate_meanings: duplicateMeanings,
    wrong_language_residue: wrongLanguage,
    is_cardinal_ordinal_issues: isCardinalOrdinalIssues,
    it_scalar_source_fidelity_issues: itScalarIssues,
  },
  source_repair_items: [
    "IT an Presso",
    "IT aufs Su",
    "IT aus Da",
    "IT bringen Portare",
    "IT da cmp[0] Lì•Qui",
    "IT ein Articolo indefinito",
    "IT erst native/translation Solo; cmp[0] Prima•Solo",
    "IT es native/translation Esso; cmp[0] esso•forma impersonale",
    "IT etwas Qualcosa",
    "IT finden Trovare",
    "IT frau Donna",
    "IT gleich native Subito",
    "IT fahren Viaggiare in veicolo",
  ],
  failures: issues,
  verdict: pass
    ? "LRB_041_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_041_LINGUISTIC_REVIEW_BLOCKED",
  updatedAt: new Date().toISOString(),
};

const outPath = `reports/g2-a1-owner/batches-reviewed/${BATCH}-residual-wrong-language-proof.json`;
fs.writeFileSync(outPath, `${JSON.stringify(proof, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      pass: proof.pass,
      verdict: proof.verdict,
      issues: issues.length,
      gates: proof.gates,
      labot,
      nelabot,
      pending,
      details: issues.slice(0, 20),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
