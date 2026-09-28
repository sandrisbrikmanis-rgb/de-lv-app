#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-003";
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
  /\b(augsts|kurp\?|vecumu|letón|letón|lietvards|veikals|Tikai|ar lielo burtu)\b/i;

const ABSENT_FIELD_IDS = new Set();

/** Critical owner_new fields per LABOT row after gala repair. */
const LABOT_EXPECTED = {
  "g2/a1/es|bringen|idx:111|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE_AND_MISTRANSLATION|gpt-5.6-luna": {
    "study.examples[0].lv": "Te traigo un libro.",
    "study.comparison[1].meaning": "tomar / coger",
  },
  "g2/a1/es|da|idx:126|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna": {
    lv: "ahí • allí",
    "study.translation": "ahí • allí",
    "study.comparison[0].meaning": "ahí • allí (general)",
  },
  "g2/a1/es|dass|idx:130|study.comparison, study.important|MISTRANSLATION|gpt-5.6-luna": {
    "study.comparison[1].meaning": "porque",
    "study.comparison[2].meaning": "para que",
    "study.important[0]":
      "Dass introduce una oración subordinada con «que»; no significa «eso».",
  },
  "g2/a1/es|Eis|idx:157|study.explanation; study.comparison[1].meaning|MISTRANSLATION|gpt-5.6-luna": {
    "study.comparison[1].meaning": "helado",
  },
  "g2/a1/es|es|idx:167|study.examples; study.comparison[1].meaning|MEANING_MISMATCH|gpt-5.6-luna": {
    "study.examples[0].lv": "Está lloviendo.",
    "study.examples[3].lv": "Está cansado.",
  },
  "g2/a1/es|essen|idx:690|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "study.explanation[4]": "A menudo describe: acción o cosa.",
  },
  "g2/a1/es|Essen|idx:691|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "comida",
    "study.translation": "comida",
  },
  "g2/a1/es|hoch|idx:285|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": {
    "study.examples[1].lv": "La estantería mide dos metros de alto.",
  },
  "g2/a1/es|ins|idx:296|study|GRAMMAR_MEANING|gpt-5.6-luna": {
    "study.translation": "al • hacia el",
    "study.explanation[1]": "Forma completa: in das (¿adónde?).",
    "study.important[1]":
      "¿Adónde? → ins; ¿dónde? → im — movimiento, no ubicación.",
  },
  "g2/a1/es|jung|idx:304|study|SEMANTIC_ACCURACY|gpt-5.6-luna": {
    "study.translation": "joven (personas y animales)",
  },
  "g2/a1/es|kosten|idx:320|lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "study.examples[5].lv": "¿Puedo pagar en efectivo?",
    "study.comparison[1].meaning": "pagar",
  },
  "g2/a1/es|Laut|idx:359|study.examples; study.explanation; lv|SEMANTIC_ERROR|gpt-5.6-luna": {
    "study.examples[1].lv": "La música está alta.",
  },
  "g2/a1/es|machen|idx:386|lv; study.explanation|MISTRANSLATION|gpt-5.6-luna": {
    lv: "hacer • cocinar",
  },
  "g2/a1/es|morgen|idx:417|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "study.examples[0].lv": "Vengo mañana.",
    "study.examples[1].lv": "¡Hasta mañana!",
  },
  "g2/a1/es|Morgen|idx:418|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "study.examples[0].lv": "Buenos días.",
    "study.examples[5].lv": "La mañana es hermosa.",
  },
  "g2/a1/es|nehmen|idx:435|study|MISTRANSLATION|gpt-5.6-luna": {
    "study.translation": "coger • tomar",
    "study.examples[0].lv": "Tomo el autobús.",
    "study.important[0]": "Ich nehme den Bus significa «Tomo el autobús».",
  },
  "g2/a1/es|Obst|idx:693|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "fruta",
    "study.translation": "fruta",
  },
  "g2/a1/es|oder|idx:459|study.comparison[1].meaning; study.tip.text|MEANING_ERROR|gpt-5.6-luna": {
    "study.comparison[1].meaning": "o (elección)",
  },
  "g2/a1/es|passen|idx:471|study.comparison[1].meaning; study.tip.text|MEANING_ERROR|gpt-5.6-luna": {
    "study.comparison[1].meaning": "encajar • quedar bien",
  },
  "g2/a1/es|sitzen|idx:558|lv, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna": {
    lv: "estar sentado",
    "study.examples[2].lv": "Él está de pie en la puerta.",
    "study.examples[3].lv": "El gato está tumbado en el sofá.",
  },
  "g2/a1/es|sollen|idx:564|lv, study|TRANSLATION_ERROR|gpt-5.6-luna": {
    "study.examples[0].lv": "¿Qué debo hacer?",
    "study.comparison[0].example": "Was soll ich machen? – ¿Qué debo hacer?",
  },
  "g2/a1/es|Urlaub|idx:695|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "vacaciones • permiso laboral",
    "study.comparison[1].meaning": "vacaciones escolares",
  },
};

const SOURCE_FIDELITY = {
  "g2/a1/es|machen|idx:386|lv; study.explanation|MISTRANSLATION|gpt-5.6-luna": {
    lv: "hacer • cocinar",
    maxSegments: 2,
  },
  "g2/a1/es|da|idx:126|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna": {
    lv: "ahí • allí",
    maxSegments: 2,
  },
  "g2/a1/es|sollen|idx:564|lv, study|TRANSLATION_ERROR|gpt-5.6-luna": {
    lv: "deber • tener que (por indicación)",
    maxSegments: 2,
  },
  "g2/a1/es|Urlaub|idx:695|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    lv: "vacaciones • permiso laboral",
    maxSegments: 2,
  },
};

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/es|bringen|idx:111|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE_AND_MISTRANSLATION|gpt-5.6-luna":
    ["La traducción al letón", "tomar / tomar"],
  "g2/a1/es|da|idx:126|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna":
    ["aquí • aquí", "aquí o aquí"],
  "g2/a1/es|dass|idx:130|study.comparison, study.important|MISTRANSLATION|gpt-5.6-luna": [
    "significa \"eso\"",
    "significa «eso» e introduce",
  ],
  "g2/a1/es|hoch|idx:285|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": [
    "augsts",
  ],
  "g2/a1/es|ins|idx:296|study|GRAMMAR_MEANING|gpt-5.6-luna": [
    "kurp?",
    "¿dónde?).",
    "en cualquier género",
  ],
  "g2/a1/es|jung|idx:304|study|SEMANTIC_ACCURACY|gpt-5.6-luna": [
    "vecumu",
    "personas, animales y cosas",
  ],
  "g2/a1/es|nehmen|idx:435|study|MISTRANSLATION|gpt-5.6-luna": [
    "tomar • tomar",
    "conduzco el autobús",
    "letón",
  ],
  "g2/a1/es|Obst|idx:693|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "cualquier género",
    "nunca",
  ],
  "g2/a1/es|sitzen|idx:558|lv, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna": [
    "sentado en la puerta",
    "sentado en el sofá",
    "sentarse / sentarse",
  ],
  "g2/a1/es|Urlaub|idx:695|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "solo singular",
    "siempre singular",
    "solo para estudiantes",
  ],
  "g2/a1/es|morgen|idx:417|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "Voy mañana.",
    "¡Buen día!",
  ],
  "g2/a1/es|Morgen|idx:418|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "Por la mañana.",
    "¡Buen día!",
  ],
};

/** DE → merged target lv pairs for LABOT rows (index-by-index). */
const DE_EXAMPLE_ALIGN = {
  "g2/a1/es|bringen|idx:111|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE_AND_MISTRANSLATION|gpt-5.6-luna": {
    "Ich bringe dir ein Buch.": "Te traigo un libro.",
    "Ich bringe das Paket zur Post.": "Llevo el paquete a correos.",
    "Ich bringe die Kinder zur Schule.": "Llevo a los niños a la escuela.",
    "Ich nehme das Buch.": "Cojo el libro.",
  },
  "g2/a1/es|da|idx:126|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE|gpt-5.6-luna": {
    "Da ist mein Auto.": "Ahí está mi auto.",
    "Ich war da.": "Yo estuve allí.",
    "Da kommt er.": "Ahí viene.",
    "Komm mal da her!": "¡Ven aquí!",
  },
  "g2/a1/es|es|idx:167|study.examples; study.comparison[1].meaning|MEANING_MISMATCH|gpt-5.6-luna": {
    "Es regnet.": "Está lloviendo.",
    "Es ist kalt.": "Hace frío.",
    "Das Kind schläft.": "El niño está durmiendo.",
    "Es ist müde.": "Está cansado.",
    "Es schneit.": "Nieva.",
  },
  "g2/a1/es|hoch|idx:285|lv, study|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": {
    "Der Berg ist hoch.": "La montaña es alta.",
    "Das Regal ist zwei Meter hoch.": "La estantería mide dos metros de alto.",
    "Die Miete ist hoch.": "El alquiler es alto.",
    "Die Mauer ist hoch.": "La pared es alta.",
    "Die Preise sind hoch.": "Los precios son altos.",
  },
  "g2/a1/es|ins|idx:296|study|GRAMMAR_MEANING|gpt-5.6-luna": {
    "Ich gehe ins Kino.": "Voy al cine.",
    "Sie geht ins Bett.": "Ella se va a dormir.",
    "Wir fahren ins Ausland.": "Nos vamos al extranjero.",
    "Komm ins Haus!": "¡Ven a la casa!",
  },
  "g2/a1/es|kosten|idx:320|lv; study.translation; study.explanation; study.examples; study.comparison; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Das kostet 5 Euro.": "Cuesta 5 euros.",
    "Was kostet das?": "¿Cuánto cuesta?",
    "Ich bezahle die Rechnung.": "Pago la cuenta.",
    "Kann ich bar bezahlen?": "¿Puedo pagar en efectivo?",
  },
  "g2/a1/es|Laut|idx:359|study.examples; study.explanation; lv|SEMANTIC_ERROR|gpt-5.6-luna": {
    "Der Laut ist schön.": "El sonido es hermoso.",
    "Die Musik ist laut.": "La música está alta.",
  },
  "g2/a1/es|morgen|idx:417|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "Ich komme morgen.": "Vengo mañana.",
    "Bis morgen!": "¡Hasta mañana!",
  },
  "g2/a1/es|Morgen|idx:418|lv, study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "Guten Morgen!": "Buenos días.",
    "Der Morgen ist schön.": "La mañana es hermosa.",
  },
  "g2/a1/es|nehmen|idx:435|study|MISTRANSLATION|gpt-5.6-luna": {
    "Ich nehme den Bus.": "Tomo el autobús.",
    "Nimm das Buch!": "¡Toma el libro!",
    "Ich bringe dir das Buch.": "Te traigo el libro.",
    "Ich hole dich ab.": "Voy a recogerte.",
  },
  "g2/a1/es|sitzen|idx:558|lv, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna": {
    "Ich sitze am Tisch.": "Estoy sentado a la mesa.",
    "Die Kinder sitzen im Bus.": "Los niños están sentados en el autobús.",
    "Er steht an der Tür.": "Él está de pie en la puerta.",
    "Die Katze liegt auf dem Sofa.": "El gato está tumbado en el sofá.",
    cmp1: "Er steht an der Tür. – Él está de pie en la puerta.",
    cmp2: "Die Katze liegt auf dem Sofa. – El gato está tumbado en el sofá.",
  },
  "g2/a1/es|sollen|idx:564|lv, study|TRANSLATION_ERROR|gpt-5.6-luna": {
    "Was soll ich machen?": "¿Qué debo hacer?",
    cmp0: "Was soll ich machen? – ¿Qué debo hacer?",
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

  if (ABSENT_FIELD_IDS.has(id) && d.owner_decision !== "NELABOT") {
    issues.push({ id, type: "ABSENT_FIELD", msg: "absent field must be NELABOT" });
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
        if (Array.isArray(val)) {
          if (JSON.stringify(got) !== JSON.stringify(val)) {
            semanticViolations++;
            issues.push({
              id,
              type: "EXPECTED_MISMATCH",
              field: key,
              expected: val,
              got,
            });
          }
        } else if (String(got) !== String(val)) {
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
    ? "LRB_003_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_003_LINGUISTIC_REVIEW_BLOCKED",
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
    ? "LRB_003_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_003_LINGUISTIC_REVIEW_BLOCKED",
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
