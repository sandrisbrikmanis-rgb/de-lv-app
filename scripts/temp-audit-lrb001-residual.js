#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-001";
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
  /\b(uz jumta|uz galda|uz kino|pie sienas|Tas ir mans|Man tas|šķiet|porodica supruge|To \/ at \/ too|раздразнен|мусон)\b/i;
const EN_LEAK = /\b(To \/ at \/ too)\b/;

const ABSENT_FIELD_IDS = new Set([
  "g2/a1/bg|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation",
  "g2/a1/bg|also|idx:26|study.examples[1].lv; study.examples[2].lv|MISTRANSLATION|gpt-5.6-luna",
  "g2/a1/bg|auch|idx:48|study.examples[1].lv; study.examples[2].lv|MISTRANSLATION|gpt-5.6-luna",
  "g2/a1/bg|auf|idx:49|study.comparison[1]; study.examples[1].lv|CONTENT_ERROR|gpt-5.6-luna",
  "g2/a1/bg|die|idx:137|study.examples[1].lv, study.examples[2].lv, study.important[0]|MISTRANSLATION|gpt-5.6-luna",
  "g2/a1/bg|dieser|idx:139|study.examples[1].lv, study.examples[2].lv|MISTRANSLATION|gpt-5.6-luna",
  "g2/a1/bs|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation",
  "g2/a1/bs|erst|idx:165|study.examples[0].lv; study.examples[1].lv; study.comparison[0].example|MISTRANSLATION|gpt-5.6-luna",
  "g2/a1/bs|es|idx:167|study.examples[1].lv; study.examples[3].lv|MISTRANSLATION|gpt-5.6-luna",
  "g2/a1/bs|groß|idx:250|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/bs|Großeltern|idx:251|study.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/bs|gut|idx:259|study.sectionAccents.examples[1].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/bs|halten|idx:265|study.examples[2].lv|TRANSLATION_ERROR|gpt-5.6-luna",
  "g2/a1/bs|hoch|idx:285|study.examples[1].lv|MEANING_MISMATCH|gpt-5.6-luna",
  "g2/a1/bs|über|idx:608|study.examples[3].lv|SEMANTIC_MISMATCH|gpt-5.6-luna",
  "g2/a1/bs|um|idx:611|study.examples[1].lv|SEMANTIC_MISMATCH|gpt-5.6-luna",
  "g2/a1/bs|unter|idx:615|study.examples[1].lv|SEMANTIC_MISMATCH|gpt-5.6-luna",
  "g2/a1/bs|verstehen|idx:621|study.examples[0].lv, study.examples[1].lv|ORTHOGRAPHY|gpt-5.6-luna",
  "g2/a1/cs|a1-uhr|a1.card.a1-uhr.study.examples[5].native|MULTI_TRANSLATION|deterministic/multi-translation",
]);

const LABOT_EXPECTED = {
  "g2/a1/bg|aufs|idx:60|study.explanation[2]; study.important[0]; study.important[2]; study.important[3]; study.examples[6].lv|CONTENT_ERROR|gpt-5.6-luna":
    {
      "study.explanation[1]": "Пълна форма: auf das (накъде?).",
      "study.important[0]":
        "Aufs = auf das, само с неутрално съществително в единствено число — Wohin? (накъде?).",
    },
  "g2/a1/bg|das|idx:129|study.comparison, study.important, study.examples[2].lv|MISTRANSLATION|gpt-5.6-luna":
    {
      "study.comparison[2].meaning": "кой",
      "study.important[1]":
        "Das не е същото като dass: das е член или местоимение; dass е съюз и означава „че“.",
    },
  "g2/a1/bg|dass|idx:130|lv, study.translation, study.comparison, study.important|MISTRANSLATION|gpt-5.6-luna":
    {
      lv: "че",
      "study.comparison[1].meaning": "защото",
      "study.comparison[2].meaning": "за да",
      "study.comparison[3].meaning": "дали",
    },
  "g2/a1/bg|ein|idx:154|study|MISTRANSLATION|gpt-5.6-luna": {
    "study.examples[0].lv": "Един мъж чака отвън.",
  },
  "g2/a1/bg|finden|idx:187|study.examples; study.explanation; study.comparison|SEMANTIC_MISMATCH|gpt-5.6-luna":
    {
      "study.examples[0].lv": "Намирам ключа си.",
    },
  "g2/a1/bg|groß|idx:250|study.examples, study.explanation, study.tip|MEANING_ERROR|gpt-5.6-luna": {
    "study.examples[1].lv": "Берлин е голям град.",
  },
  "g2/a1/bg|Großeltern|idx:251|study.examples, study.comparison|MEANING_ERROR|gpt-5.6-luna": {
    "study.examples[0].lv": "Баба ми и дядо ми живеят на село.",
  },
  "g2/a1/bg|ihr|idx:292|study.explanation, study.examples, study.tip|TRANSLATION_ERROR|gpt-5.6-luna": {
    "study.examples[0].lv": "Идвате ли вечерта?",
  },
  "g2/a1/bg|im|idx:293|study.explanation, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna":
    {
      "study.examples[6].lv": "Тя е в киното.",
      "study.explanation[1]": "Пълна форма: in dem (Dativ, на кого?).",
    },
  "g2/a1/bg|schwimmen|idx:531|lv, study.translation|MISTRANSLATION|gpt-5.6-luna": {
    lv: "плувам",
    "study.translation": "плувам",
  },
  "g2/a1/bg|sein|idx:542|lv, study.translation|MISTRANSLATION|gpt-5.6-luna": {
    lv: "съм • бъда",
  },
  "g2/a1/bg|Seite|idx:544|lv, study.translation|MISTRANSLATION|gpt-5.6-luna": {
    lv: "Страница • Страна",
  },
  "g2/a1/bg|sollen|idx:564|study|CONTENT_ERROR|gpt-5.6-luna": {
    "study.tip.text":
      "Запомнете: някой ви казва какво да правите → sollen • силна необходимост → müssen.",
  },
  "g2/a1/bs|etwas|idx:169|study.comparison[3].meaning; study.comparison[3].example; study.important[2]|MISTRANSLATION|gpt-5.6-luna":
    {
      "study.comparison[3].meaning": "Nešto",
    },
  "g2/a1/bs|Morgen|idx:418|study.explanation; study.tip|MEANING_ERROR|gpt-5.6-luna": {
    "study.tip[1]": "Der Morgen = jutro (imenica), morgen = sutra (prilog).",
  },
  "g2/a1/bs|zum|idx:672|lv, study|TRANSLATION_ERROR|gpt-5.6-luna": {
    lv: "do",
    "study.comparison[1].meaning": "do/kod (ženski rod)",
  },
  "g2/a1/cs|mit|idx:408|lv; study.explanation; study.examples[].lv; study.comparison[].meaning; study.important|TRANSLATION_ERROR|gpt-5.6-luna":
    {
      lv: "s",
    },
};

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/bg|aufs|idx:60|study.explanation[2]; study.important[0]; study.important[2]; study.important[3]; study.examples[6].lv|CONTENT_ERROR|gpt-5.6-luna":
    ["произволен род", "къде?, къде?", "uz jumta", "uz galda", "pie sienas"],
  "g2/a1/bg|das|idx:129|study.comparison, study.important, study.examples[2].lv|MISTRANSLATION|gpt-5.6-luna":
    ["Tas ir mans", "Кой • Кой • Кой", "dass означава „това“"],
  "g2/a1/bg|dass|idx:130|lv, study.translation, study.comparison, study.important|MISTRANSLATION|gpt-5.6-luna":
    ["Какво", "Защото • Защото", "ДО", "Или"],
  "g2/a1/bg|im|idx:293|study.explanation, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna":
    ["uz kino", "uz galda", "Тя се снима"],
  "g2/a1/bg|schwimmen|idx:531|lv, study.translation|MISTRANSLATION|gpt-5.6-luna":
    ["Плувайте", "Отидете да плувате", "Вземете душ"],
  "g2/a1/bg|sein|idx:542|lv, study.translation|MISTRANSLATION|gpt-5.6-luna":
    ["Бъди", "Станете", "Остани"],
  "g2/a1/bg|Seite|idx:544|lv, study.translation|MISTRANSLATION|gpt-5.6-luna":
    ["Странично"],
  "g2/a1/bg|finden|idx:187|study.examples; study.explanation; study.comparison|SEMANTIC_MISMATCH|gpt-5.6-luna":
    ["Man tas", "Мислете"],
  "g2/a1/bs|Morgen|idx:418|study.explanation; study.tip|MEANING_ERROR|gpt-5.6-luna":
    ["Der Morgen = sutra"],
  "g2/a1/bs|zum|idx:672|lv, study|TRANSLATION_ERROR|gpt-5.6-luna":
    ["porodica supruge", "To / at / too"],
};

const DE_EXAMPLE_ALIGN = {
  "g2/a1/bg|im|idx:293|study.explanation, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna":
    {
      "Sie ist im Kino.": "Тя е в киното.",
    },
  "g2/a1/bg|schwimmen|idx:531|lv, study.translation|MISTRANSLATION|gpt-5.6-luna": {
    cmp0: "Er schwimmt sehr gut. – Той плува много добре.",
  },
  "g2/a1/bg|sein|idx:542|lv, study.translation|MISTRANSLATION|gpt-5.6-luna": {
    cmp0: "Ich bin hier. – Аз съм тук.",
  },
  "g2/a1/bg|finden|idx:187|study.examples; study.explanation; study.comparison|SEMANTIC_MISMATCH|gpt-5.6-luna":
    {
      "Ich finde meinen Schlüssel.": "Намирам ключа си.",
    },
  "g2/a1/bs|zum|idx:672|lv, study|TRANSLATION_ERROR|gpt-5.6-luna": {
    cmp1: "zur Schule – u školu",
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

function ensureSetAt(root, field, value) {
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field))) {
    parts.push(m[1] !== undefined ? m[1] : parseInt(m[2], 10));
  }
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (cur[p] == null) {
      cur[p] = typeof parts[i + 1] === "number" ? [] : {};
    }
    cur = cur[p];
  }
  cur[parts[parts.length - 1]] = value;
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
        ensureSetAt(out.study, field, value);
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

  const patches = JSON.parse(d.owner_new || "{}");
  const allText = flattenStrings(patches).join(" ");

  if (LV_LEAK.test(allText) || EN_LEAK.test(allText)) {
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

    if (patches.lv && hasDupes(patches.lv)) {
      duplicateMeanings++;
      issues.push({ id, type: "DUPLICATE", msg: patches.lv });
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
      for (const [k, expected] of Object.entries(align)) {
        if (k.startsWith("cmp")) {
          const idx = parseInt(k.slice(3), 10);
          const got = merged.study?.comparison?.[idx]?.example || "";
          if (got !== expected) {
            deTargetAlignmentViolations++;
            semanticViolations++;
            issues.push({
              id,
              type: "DE_TARGET_ALIGN",
              field: `study.comparison[${idx}].example`,
              expected,
              got,
            });
          }
        } else {
          const examples = merged.study?.examples;
          if (Array.isArray(examples)) {
            for (const ex of examples) {
              if (ex?.de === k && ex.lv !== expected) {
                deTargetAlignmentViolations++;
                semanticViolations++;
                issues.push({
                  id,
                  type: "DE_TARGET_ALIGN",
                  field: `de="${k}"`,
                  expected,
                  got: ex.lv,
                });
              }
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
    ? "LRB_001_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_001_LINGUISTIC_REVIEW_BLOCKED",
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
    ? "LRB_001_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_001_LINGUISTIC_REVIEW_BLOCKED",
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
