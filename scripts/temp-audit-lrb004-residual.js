#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-004";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const LV_LEAK =
  /\b(peldēties|apmeklējums|vīrietis|vīrs|rīt|rīts|uz • pie|tikai • vienīgi)\b/i;

const ABSENT_FIELD_IDS = new Set();

const LABOT_EXPECTED = {
  "g2/a1/et|baden|idx:68|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "suplema",
    "study.translation": "suplema",
    "study.comparison[0].meaning": "suplema / vees olema",
    "study.examples[0].lv": "Ma lähen suplema.",
  },
  "g2/a1/et|bei|idx:78|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "study.comparison[2].meaning": "kellegi juurde (suund)",
  },
  "g2/a1/et|Besuch|idx:87|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "külastus",
    "study.translation": "külastus",
  },
  "g2/a1/et|bis|idx:91|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE_AND_MEANING_MISMATCH|gpt-5.6-luna": {
    "study.comparison[0].example": "Ich bleibe bis morgen. – Ma jään homseni.",
  },
  "g2/a1/et|Bitte|idx:94|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna": {
    "study.explanation[1]": "die Bitte tähendab peamiselt: palve või soov.",
  },
  "g2/a1/et|bleiben|idx:101|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna": {
    "study.examples[3].lv": "Ma lähen koju.",
  },
  "g2/a1/et|bringen|idx:111|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna": {
    "study.comparison[0].example":
      "Ich bringe dir ein Buch. – Ma toon sulle raamatu.",
  },
  "g2/a1/et|kosten|idx:320|lv, study.examples|WRONG_TARGET_LANGUAGE_AND_MEANING|gpt-5.6-luna": {
    "study.examples[4].lv": "Ma maksan arve.",
  },
  "g2/a1/et|Laden|idx:349|lv, study.examples|WRONG_TARGET_LANGUAGE_AND_MEANING|gpt-5.6-luna": {
    "study.examples[3].lv": "Ma pean oma telefoni laadima.",
  },
  "g2/a1/et|Mann|idx:394|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "mees • abikaasa",
    "study.examples[1].lv": "See on minu abikaasa.",
    "study.important[1]": "mein Mann = minu abikaasa (mitte lihtsalt «minu mees»).",
  },
  "g2/a1/et|morgen|idx:417|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "homme",
    "study.examples[0].lv": "Ma tulen homme.",
    "study.examples[3].lv": "Homme on esmaspäev.",
  },
  "g2/a1/et|Morgen|idx:418|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "hommik",
    "study.examples[5].lv": "Hommik on ilus.",
  },
  "g2/a1/et|zum|idx:672|lv, study.*|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "study.comparison[0].example": "zum Arzt – arsti juurde",
    "study.comparison[4].example": "beim Arzt – arsti juures",
  },
};

const SOURCE_FIDELITY = {
  "g2/a1/et|baden|idx:68|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "suplema",
    maxSegments: 1,
  },
  "g2/a1/et|Besuch|idx:87|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "külastus",
    maxSegments: 1,
  },
  "g2/a1/et|Mann|idx:394|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "mees • abikaasa",
    maxSegments: 2,
  },
  "g2/a1/et|morgen|idx:417|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "homme",
    maxSegments: 1,
  },
  "g2/a1/et|Morgen|idx:418|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "hommik",
    maxSegments: 1,
  },
};

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/et|baden|idx:68|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "end pesema",
    "vannis käima",
    "ma lähen ujuma",
    "me läheme järve ujuma",
  ],
  "g2/a1/et|Besuch|idx:87|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [],
  "g2/a1/et|Mann|idx:394|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "See on minu mees.",
    "Minu mees töötab",
    "Tema mees on arst",
  ],
  "g2/a1/et|morgen|idx:417|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "nimisõna (der)",
    "mitu hommikut",
    "Homme on ilus.",
  ],
  "g2/a1/et|zum|idx:672|lv, study.*|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "zum Arzt – arsti juures",
    "meessugu või kesksugu",
  ],
  "g2/a1/et|bei|idx:78|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "juures (asukoht, mitte suund)",
  ],
};

const DE_EXAMPLE_ALIGN = {
  "g2/a1/et|baden|idx:68|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "Ich gehe baden.": "Ma lähen suplema.",
    "Wir gehen im See baden.": "Me läheme järves suplema.",
    "Er schwimmt sehr gut.": "Ta ujub väga hästi.",
    "Ich schwimme jeden Montag.": "Ma käin igal esmaspäeval ujumas.",
  },
  "g2/a1/et|bleiben|idx:101|study|TARGET_LANGUAGE_WRONG_LANGUAGE|gpt-5.6-luna": {
    "Ich gehe nach Hause.": "Ma lähen koju.",
    cmp1: "Ich gehe nach Hause. – Ma lähen koju.",
  },
  "g2/a1/et|morgen|idx:417|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "Ich komme morgen.": "Ma tulen homme.",
    "Bis morgen!": "Homseni!",
    "Morgen ist Montag.": "Homme on esmaspäev.",
  },
  "g2/a1/et|Morgen|idx:418|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "Guten Morgen!": "Tere hommikust!",
    "Der Morgen ist schön.": "Hommik on ilus.",
    "Bis morgen!": "Homseni!",
    "Ich komme morgen.": "Ma tulen homme.",
  },
  "g2/a1/et|kosten|idx:320|lv, study.examples|WRONG_TARGET_LANGUAGE_AND_MEANING|gpt-5.6-luna": {
    "Ich bezahle die Rechnung.": "Ma maksan arve.",
    "Kann ich bar bezahlen?": "Kas ma saan sularahas maksta?",
  },
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

function flatToNested(flat) {
  const out = { lv: flat.lv };
  const study = {};
  for (const [k, v] of Object.entries(flat)) {
    if (k === "lv") continue;
    if (k.startsWith("study.")) {
      const sub = k.slice(6);
      if (sub.includes("[") || sub.includes(".")) continue;
      study[sub] = parseMaybeJson(v);
    }
  }
  if (Object.keys(study).length) out.study = study;
  return out;
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
        const m = field.match(/^(\w+)$/);
        if (m) out.study[field] = value;
        else {
          const arrM = field.match(/^(\w+)\[/);
          if (arrM) {
            const arrName = arrM[1];
            if (!Array.isArray(out.study[arrName])) out.study[arrName] = [];
            setAt(out.study, field, value);
          }
        }
      }
    }
  }
  return out;
}

function isDegeneratePair(text) {
  if (!text || !/ – | -- /.test(text)) return false;
  const parts = text.split(/\s+–\s+|\s+--\s+/);
  if (parts.length !== 2) return false;
  return parts[0].trim().toLowerCase() === parts[1].trim().toLowerCase();
}

function parseOwnerNew(str) {
  if (!str) return {};
  try {
    return JSON.parse(str);
  } catch {
    return { _scalar: str };
  }
}

function getPatchValue(patches, key) {
  if (patches._scalar) return patches._scalar;
  if (key in patches) return patches[key];
  const out = { study: {} };
  for (const [p, value] of Object.entries(patches)) {
    if (p === "_scalar") continue;
    if (p === "lv") {
      out.lv = value;
      continue;
    }
    if (p.startsWith("study.")) {
      const field = p.slice(6);
      if (!setAt(out.study, field, value)) {
        out.study[field] = value;
      }
    }
  }
  if (key === "lv") return out.lv;
  if (key.startsWith("study.")) return getAt(out.study, key.slice(6));
  return undefined;
}

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
let extraMeaningNotInSource = 0;
let duplicateMeanings = 0;
let wrongLanguage = 0;
let semanticViolations = 0;
let deTargetAlignmentViolations = 0;
let degenerateExamplePairs = 0;

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

  const patches = parseOwnerNew(d.owner_new);
  const allText = flattenStrings(patches).join(" ");

  if (LV_LEAK.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG", msg: allText.slice(0, 120) });
  }

  const forbidden = FORBIDDEN_FRAGMENTS[id];
  if (forbidden) {
    for (const frag of forbidden) {
      if (allText.includes(frag)) {
        semanticViolations++;
        issues.push({ id, type: "FORBIDDEN", msg: `contains "${frag}"` });
      }
    }
  }

  if (d.owner_decision === "LABOT") {
    const expected = LABOT_EXPECTED[id];
    if (!expected) {
      issues.push({ id, type: "NO_EXPECTED", msg: "LABOT row missing from LABOT_EXPECTED" });
      semanticViolations++;
    } else {
      for (const [key, val] of Object.entries(expected)) {
        const got = getPatchValue(patches, key);
        if (String(got) !== String(val)) {
          semanticViolations++;
          issues.push({
            id,
            type: "EXPECTED_MISMATCH",
            field: key,
            expected: val,
            got,
          });
        }
      }
    }
  }

  const srcFid = SOURCE_FIDELITY[id];
  if (srcFid && d.owner_decision === "LABOT") {
    const lvVal = getPatchValue(patches, "lv");
    if (lvVal && hasDupes(lvVal)) {
      duplicateMeanings++;
      issues.push({ id, type: "DUPLICATE", msg: lvVal });
    }
    const segs = segments(lvVal);
    if (segs.length > srcFid.maxSegments) {
      extraMeaningNotInSource += segs.length - srcFid.maxSegments;
      issues.push({
        id,
        type: "EXTRA_MEANING_NOT_IN_SOURCE",
        msg: `${segs.length} > ${srcFid.maxSegments}: ${lvVal}`,
      });
    }
  }

  if (d.owner_decision === "LABOT") {
    let flat;
    try {
      flat = JSON.parse(row.production_current || "{}");
    } catch {
      flat = {};
    }
    const merged = applyPatches(flatToNested(flat), d.owner_new);

    const align = DE_EXAMPLE_ALIGN[id];
    if (align) {
      for (const [k, expectedVal] of Object.entries(align)) {
        if (k.startsWith("cmp")) {
          const idx = Number(k.slice(3));
          const got = merged.study?.comparison?.[idx]?.example || "";
          if (got !== expectedVal) {
            deTargetAlignmentViolations++;
            semanticViolations++;
            issues.push({
              id,
              type: "DE_TARGET_ALIGN",
              field: `study.comparison[${idx}].example`,
              expected: expectedVal,
              got,
            });
          }
          continue;
        }
        const examples = merged.study?.examples;
        if (Array.isArray(examples)) {
          for (const ex of examples) {
            const de = ex?.de;
            if (!de || de !== k) continue;
            if (ex.lv !== expectedVal) {
              deTargetAlignmentViolations++;
              semanticViolations++;
              issues.push({
                id,
                type: "DE_TARGET_ALIGN",
                field: `study.examples de="${de}"`,
                expected: expectedVal,
                got: ex.lv,
              });
            }
          }
        }
      }
    }

    const comparisons = merged.study?.comparison;
    if (Array.isArray(comparisons)) {
      for (let i = 0; i < comparisons.length; i++) {
        const ex = comparisons[i]?.example;
        if (ex && isDegeneratePair(ex)) {
          degenerateExamplePairs++;
          semanticViolations++;
          issues.push({
            id,
            type: "DEGENERATE_PAIR",
            field: `study.comparison[${i}].example`,
            msg: ex,
          });
        }
      }
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
  semanticViolations === 0 &&
  deTargetAlignmentViolations === 0 &&
  degenerateExamplePairs === 0;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_004_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_004_LINGUISTIC_REVIEW_BLOCKED",
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
    de_target_alignment_violations: deTargetAlignmentViolations,
    degenerate_example_pairs: degenerateExamplePairs,
  },
  failures: issues,
  verdict: pass
    ? "LRB_004_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_004_LINGUISTIC_REVIEW_BLOCKED",
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
