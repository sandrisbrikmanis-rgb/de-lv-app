#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-002";
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
  /\b(ar lielo burtu|lietvards|veikals|Tikai|Borsa|Bezpersoniska|ˈhis|Maltīte|Serra Kaut|Nedaudz|Succo|Jums|Braukt|Gilet|Aizvest|Por favor!|una taza de café)\b/i;
const ET_NO_LEAK = /\b(tjene penge|wife's family|genderless)\b/i;

const ABSENT_FIELD_IDS = new Set([
  "g2/a1/en|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation",
  "g2/a1/en|bitte|idx:93|study.examples.lv|MISTRANSLATION|gpt-5.6-luna",
  "g2/a1/en|Bitte|idx:94|study.examples.lv|MISTRANSLATION|gpt-5.6-luna",
  "g2/a1/en|bringen|idx:111|study.examples.lv|MISTRANSLATION|gpt-5.6-luna",
  "g2/a1/en|die|idx:137|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/en|dieser|idx:139|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/en|euch|idx:170|study.examples[2].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/en|fahren|idx:172|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/en|Frau|idx:198|study.examples[4].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/en|für|idx:216|study.examples[3].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/en|groß|idx:250|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/en|hoch|idx:285|study.examples[1].lv|MISTRANSLATION|gpt-5.6-luna",
  "g2/a1/en|in|idx:295|study.examples[0].lv|ORTHOGRAPHY|gpt-5.6-luna",
  "g2/a1/en|klein|idx:6|study.examples[1-2].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/en|nach|idx:426|study.sectionAccents.examples[3].lv|MEANING_ERROR|gpt-5.6-luna",
  "g2/a1/en|natürlich|idx:433|study.examples[4].lv|STYLE_ONLY|gpt-5.6-luna",
  "g2/a1/en|probieren|idx:482|study.examples[3].lv|CAPITALIZATION|gpt-5.6-luna",
  "g2/a1/en|schauen|idx:510|study.examples[2].lv|CAPITALIZATION|gpt-5.6-luna",
  "g2/a1/en|über|idx:608|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/en|unter|idx:615|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna",
]);

/** Critical owner_new fields per LABOT row after gala repair. */
const LABOT_EXPECTED = {
  "g2/a1/da|kosten|idx:320|study.translation; study.important|MISTRANSLATION|gpt-5.6-luna": {
    "study.translation": "At koste",
  },
  "g2/a1/da|Laden|idx:349|study.explanation; study.tip|TARGET_LANGUAGE_GRAMMAR|gpt-5.6-luna": {
    "study.tip[0]": "der Laden med stort L — navneord (butik).",
  },
  "g2/a1/da|Land|idx:351|study.examples; study.important|MEANING_AND_USAGE|gpt-5.6-luna": {
    "study.examples[2].lv": "Vi kører ud på landet.",
  },
  "g2/a1/en|an|idx:12|lv; study.translation; study.examples[].lv|UNTRANSLATED_TARGET|gpt-5.6-luna": {
    lv: "At",
    "study.translation": "At",
  },
  "g2/a1/en|ein|idx:154|lv; study.examples[3].lv; study.sectionAccents|MISTRANSLATION|gpt-5.6-luna": {
    lv: "Indefinite article",
  },
  "g2/a1/en|Eis|idx:157|lv; study.examples[*].lv; study.comparison[1].meaning|UNTRANSLATED_LV|gpt-5.6-luna": {
    "study.comparison[1].meaning": "Ice cream",
  },
  "g2/a1/en|erst|idx:165|lv; study.examples[0].lv; study.comparison[0].example|MISTRANSLATION|gpt-5.6-luna": {
    lv: "Only",
    "study.examples[0].lv": "First learn, then play.",
  },
  "g2/a1/en|es|idx:167|lv; study.examples[*].lv; study.comparison[1].meaning|MISTRANSLATION|gpt-5.6-luna": {
    lv: "It",
  },
  "g2/a1/en|essen|idx:690|study.explanation|DE_SOURCE_ISSUE|gpt-5.6-luna": {
    "study.explanation[4]": "Often describes: thing.",
  },
  "g2/a1/en|etwas|idx:169|lv; study.examples[*].lv; study.important[1]|UNTRANSLATED_LV|gpt-5.6-luna": {
    lv: "Something",
  },
  "g2/a1/en|ganz|idx:219|lv; study.examples[].lv|TRANSLATION_ERROR|gpt-5.6-luna": {
    lv: "Whole",
  },
  "g2/a1/en|Hand|idx:267|lv; study.translation; study.explanation|SEMANTIC_NARROWING|gpt-5.6-luna": {
    lv: "Hand",
    "study.explanation[2]": "Hand = hand; Arm = arm; palm = palm (die Handfläche).",
  },
  "g2/a1/en|müssen|idx:423|lv; study.translation; study.explanation; study.comparison|MEANING_ERROR|gpt-5.6-luna": {
    lv: "Must • Have to",
  },
  "g2/a1/en|nehmen|idx:435|study.examples[2].lv; study.examples[3].lv; study.important[0]|MEANING_ERROR|gpt-5.6-luna": {
    "study.important[0]": 'Ich nehme den Bus means "I take the bus" in English.',
  },
  "g2/a1/en|ob|idx:457|lv, study.translation, study.examples[1].lv|MISTRANSLATION|gpt-5.6-luna": {
    lv: "Whether • If",
  },
  "g2/a1/en|stehen|idx:576|study.explanation, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna": {
    "study.comparison[2].meaning": "Lie (down)",
  },
  "g2/a1/en|Wetter|idx:658|lv, study.examples, study.tip|MISTRANSLATION|gpt-5.6-luna": {
    lv: "Weather",
    "study.examples[0].lv": "What's the weather like today?",
  },
  "g2/a1/en|wie|idx:660|lv, study.important|MISTRANSLATION|gpt-5.6-luna": {
    "study.important[2]":
      "Incorrect: How are you? → Correct: How old are you? (Wie alt bist du?)",
  },
  "g2/a1/en|zum|idx:672|study.explanation, study.comparison, study.important|DE_SOURCE_ISSUE|gpt-5.6-luna": {
    "study.comparison[4].example": "beim Arzt – At the doctor's",
  },
  "g2/a1/es|aufs|idx:60|study.explanation; study.comparison; study.important|MISTRANSLATION|gpt-5.6-luna": {
    "study.explanation[1]": "Forma completa: auf das (¿adónde?).",
  },
  "g2/a1/es|baden|idx:68|study.examples, study.comparison|MISTRANSLATION|gpt-5.6-luna": {
    "study.examples[2].lv": "Nada muy bien.",
    "study.examples[3].lv": "Nado todos los lunes.",
  },
  "g2/a1/es|bitte|idx:93|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE_AND_MISTRANSLATION|gpt-5.6-luna": {
    "study.examples[0].lv": "Una taza de café, por favor.",
    "study.examples[1].lv": "Entra, por favor.",
  },
  "g2/a1/es|Bitte|idx:94|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE_AND_MISTRANSLATION|gpt-5.6-luna": {
    "study.examples[1].lv": "Cumple mi petición.",
    "study.examples[2].lv": "Tiene dos peticiones.",
  },
  "g2/a1/es|bleiben|idx:101|lv, study.translation, study.explanation, study.examples, study.comparison, study.important|WRONG_LANGUAGE_AND_MISTRANSLATION|gpt-5.6-luna": {
    "study.examples[3].lv": "Me voy a casa.",
  },
};

const SOURCE_FIDELITY = {
  "g2/a1/en|an|idx:12|lv; study.translation; study.examples[].lv|UNTRANSLATED_TARGET|gpt-5.6-luna": {
    lv: "At",
    maxSegments: 1,
  },
  "g2/a1/en|ein|idx:154|lv; study.examples[3].lv; study.sectionAccents|MISTRANSLATION|gpt-5.6-luna": {
    lv: "Indefinite article",
    maxSegments: 1,
  },
  "g2/a1/en|erst|idx:165|lv; study.examples[0].lv; study.comparison[0].example|MISTRANSLATION|gpt-5.6-luna": {
    lv: "Only",
    maxSegments: 1,
  },
  "g2/a1/en|es|idx:167|lv; study.examples[*].lv; study.comparison[1].meaning|MISTRANSLATION|gpt-5.6-luna": {
    lv: "It",
    maxSegments: 1,
  },
  "g2/a1/en|etwas|idx:169|lv; study.examples[*].lv; study.important[1]|UNTRANSLATED_LV|gpt-5.6-luna": {
    lv: "Something",
    maxSegments: 1,
  },
  "g2/a1/en|ganz|idx:219|lv; study.examples[].lv|TRANSLATION_ERROR|gpt-5.6-luna": {
    lv: "Whole",
    maxSegments: 1,
  },
};

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/en|an|idx:12|lv; study.translation; study.examples[].lv|UNTRANSLATED_TARGET|gpt-5.6-luna": [
    "To",
    "Present",
  ],
  "g2/a1/en|ein|idx:154|lv; study.examples[3].lv; study.sectionAccents|MISTRANSLATION|gpt-5.6-luna": [
    "One",
    "Someone",
  ],
  "g2/a1/en|es|idx:167|lv; study.examples[*].lv; study.comparison[1].meaning|MISTRANSLATION|gpt-5.6-luna": [
    "It • It",
    "Impersonal form",
  ],
  "g2/a1/en|ganz|idx:219|lv; study.examples[].lv|TRANSLATION_ERROR|gpt-5.6-luna": [
    "Quite",
    "Everything",
  ],
  "g2/a1/en|Hand|idx:267|lv; study.translation; study.explanation|SEMANTIC_NARROWING|gpt-5.6-luna": [
    "hand can refer to both Arm",
    "Hand (palm)",
  ],
  "g2/a1/en|Wetter|idx:658|lv, study.examples, study.tip|MISTRANSLATION|gpt-5.6-luna": [
    "Time (weather)",
    "What time is it",
  ],
  "g2/a1/da|Land|idx:351|study.examples; study.important|MEANING_AND_USAGE|gpt-5.6-luna": [
    "ikke 'til landet', ikke 'til landet'",
  ],
};

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

  if (LV_LEAK.test(allText) || ET_NO_LEAK.test(allText)) {
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
    ? "LRB_002_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_002_LINGUISTIC_REVIEW_BLOCKED",
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
  },
  failures: issues,
  verdict: pass
    ? "LRB_002_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_002_LINGUISTIC_REVIEW_BLOCKED",
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
