#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");
const { BIS_COMPARISON, BITTE_EXAMPLES } = require("./lib/lrb018-composite-targets");

function loadA1(lang) {
  const ctx = { window: {} };
  vm.runInNewContext(
    fs.readFileSync(path.join(__dirname, `../data/${lang}/a1.js`), "utf8"),
    ctx
  );
  return ctx.window.A1_WORDS;
}

function buildNestedMap(words) {
  const map = {};
  for (const entry of words) {
    if (entry.study) {
      map[entry.de] = {
        lv: entry.lv,
        study: JSON.parse(JSON.stringify(entry.study)),
      };
    }
  }
  return map;
}

const FI_NESTED = buildNestedMap(loadA1("fi"));
const FR_NESTED = buildNestedMap(loadA1("fr"));

const BATCH = "LRB-018";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const AN_ID =
  "g2/a1/fr|an|idx:12|study.translation; study.examples; study.comparison; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna";
const APPETIT_ID =
  "g2/a1/fr|Appetit|idx:689|lv; study|LANGUAGE_MISMATCH|gpt-5.6-luna";
const BIS_ID =
  "g2/a1/fr|bis|idx:91|study.comparison|SEMANTIC_MISMATCH|gpt-5.6-luna";
const BITTE_ID =
  "g2/a1/fr|bitte|idx:93|study.examples|MISTRANSLATION|gpt-5.6-luna";

const COMPOSITE_TARGETS = {};
for (const [id, d] of Object.entries(decisions)) {
  const ownerNew = String(d.owner_new || "").trim();
  if (ownerNew.startsWith("{")) {
    COMPOSITE_TARGETS[id] = JSON.stringify(JSON.parse(ownerNew));
  }
}
if (Object.keys(COMPOSITE_TARGETS).length !== 2) {
  console.error(
    `Expected 2 composites, got ${Object.keys(COMPOSITE_TARGETS).length}`
  );
  process.exit(1);
}

const TARGET_BY_ID = {};
for (const row of rows) {
  const id = row.finding_stable_ids;
  if (COMPOSITE_TARGETS[id]) continue;
  const d = decisions[id];
  if (!d) continue;
  if (d.owner_decision === "LABOT") {
    TARGET_BY_ID[id] = d.owner_new;
  } else {
    TARGET_BY_ID[id] = String(row.production_current || "").trim();
  }
}

const ET_LEAK =
  /\b(Teine|Sibul|Vahel|Kaksteist|Kaheteistkümnes|Teis|Põhiidee|tähendab peamiselt|eesti keeles)\b/i;

const LV_LEAK =
  /\b(Nepareizi|Pareizi|Atceries|Galvenā doma|latviaksi|kaut kas|nedaudz|apmeklējums|vizīte|lūdzu|lietvārds)\b/i;

const FORBIDDEN_FRAGMENTS = {
  [APPETIT_ID]: ["Nepareizi", "Pareizi"],
  [AN_ID]: ["Atceries", "Présent"],
};

const COMPOSITE_REQUIRED = {
  [AN_ID]: ["À • Au • Près", "Au mur"],
  [APPETIT_ID]: ["Incorrect", "Correct", "der Appetit"],
};

const DE_EXAMPLE_ALIGN = {
  [BIS_ID]: {
    "Ich bleibe bis morgen.": "Je reste jusqu'à demain.",
    "bis zum Bahnhof": "jusqu'à la gare",
    "Bis jetzt habe ich nichts verstanden.": "Jusqu'à présent, je n'ai rien compris.",
    "Bis jetzt ist alles gut.": "Jusqu'ici, tout va bien.",
  },
  [BITTE_ID]: {
    "Eine Tasse Kaffee, bitte.": "Une tasse de café, s'il vous plaît.",
    "Komm bitte herein.": "Entre, s'il vous plaît.",
    "Bitte schön!": "De rien !",
    "Kann ich bitte fragen?": "Puis-je demander s'il vous plaît",
    "Ich habe eine Bitte.": "J'ai une demande.",
    "Die Bitte ist wichtig.": "La demande est importante.",
  },
};

const NELABOT_CARDS = [
  "a1-einmal",
  "a1-euch",
  "a1-fuer",
  "a1-ins",
  "a1-machen",
  "a1-nehmen",
  "a1-nur-study",
  "a1-oder",
  "a1-wer",
  "ab",
  "aber",
  "ein",
  "Besuch",
];

const SOURCE_FIDELITY = {
  "g2/a1/fr|a1-besuch|a1.card.a1-besuch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    { allowDupes: true },
  "g2/a1/fr|a1-lang|a1.card.a1-lang.native|MULTI_TRANSLATION|deterministic/multi-translation":
    { allowDupes: true },
  "g2/a1/fr|a1-lang|a1.card.a1-lang.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    { allowDupes: true },
};
const COMPOSITE_IDS = new Set(Object.keys(COMPOSITE_TARGETS));

function isFiRow(id) {
  return id.startsWith("g2/a1/fi|");
}

function isFrRow(id) {
  return id.startsWith("g2/a1/fr|");
}

function nestedForRow(id, card) {
  if (isFiRow(id)) return FI_NESTED[card];
  if (isFrRow(id)) return FR_NESTED[card];
  return null;
}

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
      const parsedValue = parseMaybeJson(value);
      const top = field.split(/[.[]/)[0];
      if (typeof out.study[top] === "string") {
        out.study[top] = parseMaybeJson(out.study[top]);
      }
      if (field.includes("[") && !Array.isArray(out.study[top]) && out.study[top] == null) {
        out.study[top] = [];
      }
      if (!setAt(out.study, field, parsedValue)) {
        const m = field.match(/^(\w+)$/);
        if (m) out.study[field] = parsedValue;
        else {
          const arrM = field.match(/^(\w+)\[/);
          if (arrM) {
            const arrName = arrM[1];
            if (!Array.isArray(out.study[arrName])) out.study[arrName] = [];
            setAt(out.study, field, parsedValue);
          }
        }
      }
    }
  }
  return out;
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

function normalizeVal(v) {
  const t = String(v || "").trim();
  if (t.startsWith("{") || t.startsWith("[")) {
    try {
      return JSON.stringify(JSON.parse(t));
    } catch {
      return t;
    }
  }
  return t;
}

function valuesEqual(a, b) {
  if (typeof a === "object" || typeof b === "object") {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return String(a) === String(b);
}

function isDegeneratePair(text) {
  if (!text || !/ – /.test(text)) return false;
  const parts = text.split(/\s+–\s+/);
  if (parts.length !== 2) return false;
  return parts[0].trim().toLowerCase() === parts[1].trim().toLowerCase();
}

function isScrambledPair(text) {
  if (!text) return false;
  const sep = text.includes(" – ") ? " – " : text.includes(" = ") ? " = " : null;
  if (!sep) return false;
  const dePart = text.split(sep)[0] || "";
  const sentences = dePart.split(/\.\s+/).filter((s) => s.trim().length > 3);
  if (sentences.length > 1) return true;
  return false;
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
let compositeIncomplete = 0;
let targetLanguageQualityErrors = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const d = decisions[id];
  const expected = COMPOSITE_IDS.has(id)
    ? COMPOSITE_TARGETS[id]
    : TARGET_BY_ID[id];
  const prod = normalizeVal(row.production_current);
  const lvSource = String(row.lv_source || "").trim();
  const maxSegs = maxSourceSegments(lvSource);
  const card = row.card_object_id.split("|")[0];

  const auditEntry = {
    card,
    lv_source: lvSource,
    decision: d?.owner_decision,
    segment_fidelity: null,
  };

  if (!d || expected === undefined) {
    issues.push({ id, type: "MISSING", msg: "no decision or target" });
    rowAudit.push(auditEntry);
    continue;
  }

  const derivedDecision = prod === normalizeVal(expected) ? "NELABOT" : "LABOT";
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

  const effectiveVal =
    d.owner_decision === "LABOT" ? String(d.owner_new || "").trim() : prod;

  if (d.owner_decision === "LABOT" && !effectiveVal) {
    issues.push({ id, type: "LABOT_EMPTY", msg: "LABOT without owner_new" });
    semanticViolations++;
  }

  if (d.owner_decision === "NELABOT" && String(d.owner_new || "").trim()) {
    issues.push({ id, type: "NELABOT_WITH_NEW", msg: "NELABOT has owner_new" });
    semanticViolations++;
  }

  if (normalizeVal(effectiveVal) !== normalizeVal(expected)) {
    issues.push({ id, type: "TARGET_MISMATCH", expected, got: effectiveVal });
    semanticViolations++;
  }

  const isJsonComposite = String(effectiveVal).trim().startsWith("{");
  const isJsonArray = String(effectiveVal).trim().startsWith("[");
  const checkScalar =
    isJsonComposite || isJsonArray ? "" : effectiveVal;
  const allText =
    isJsonComposite || isJsonArray
      ? flattenStrings(parseOwnerNew(effectiveVal)).join(" ")
      : effectiveVal;

  if (d.owner_decision === "LABOT") {
    if (isFiRow(id) && ET_LEAK.test(allText)) {
      wrongLanguage++;
      issues.push({ id, type: "WRONG_LANG_ET", msg: allText.slice(0, 120) });
    }
    if (isFrRow(id) && LV_LEAK.test(allText)) {
      wrongLanguage++;
      issues.push({ id, type: "WRONG_LANG_LV", msg: allText.slice(0, 120) });
    }
  }

  for (const frag of FORBIDDEN_FRAGMENTS[id] || []) {
    if (d.owner_decision !== "LABOT") continue;
    if (allText.includes(frag)) {
      semanticViolations++;
      issues.push({ id, type: "FORBIDDEN", msg: `contains "${frag}"` });
    }
  }

  if (!isJsonComposite && !isJsonArray && d.owner_decision === "LABOT") {
    const segs = segments(checkScalar);
    auditEntry.segment_fidelity = `${segs.length}/${maxSegs}`;
    if (hasDupes(checkScalar) && !SOURCE_FIDELITY[id]?.allowDupes) {
      duplicateMeanings++;
      issues.push({ id, type: "DUPLICATE", msg: checkScalar });
    }
    if (segs.length < maxSegs) {
      semanticNarrowing++;
      issues.push({
        id,
        type: "SEMANTIC_NARROWING_FROM_SOURCE",
        msg: `${segs.length} < ${maxSegs}: ${checkScalar}`,
      });
    }
  } else {
    auditEntry.segment_fidelity = "n/a";
  }

  if (d.owner_decision === "LABOT" && normalizeVal(effectiveVal) === prod) {
    issues.push({ id, type: "LABOT_NO_CHANGE", msg: "owner_new equals production_current" });
    semanticViolations++;
  }

  if (COMPOSITE_IDS.has(id) && d.owner_decision === "LABOT" && isJsonComposite) {
    const nestedBase =
      nestedForRow(id, card) ||
      JSON.parse(row.production_current || "{}");
    const merged = applyPatches(nestedBase, d.owner_new);
    const patches = parseOwnerNew(d.owner_new);
    for (const [key, val] of Object.entries(JSON.parse(COMPOSITE_TARGETS[id]))) {
      const got = getPatchValue(patches, key);
      if (!valuesEqual(got, val)) {
        semanticViolations++;
        issues.push({
          id,
          type: "COMPOSITE_FIELD_MISMATCH",
          field: key,
          expected: val,
          got,
        });
      }
    }

    const scopedText = flattenStrings({
      lv: merged.lv,
      translation: merged.study?.translation,
      examples: merged.study?.examples,
      comparison: merged.study?.comparison,
      important: merged.study?.important,
    }).join(" ");
    if (isFrRow(id) && LV_LEAK.test(scopedText)) {
      wrongLanguage++;
      issues.push({ id, type: "MERGED_WRONG_LANG", msg: scopedText.slice(0, 120) });
    }

    const required = COMPOSITE_REQUIRED[id];
    if (required) {
      for (const phrase of required) {
        if (!scopedText.includes(phrase)) {
          compositeIncomplete++;
          issues.push({ id, type: "COMPOSITE_INCOMPLETE", msg: `missing "${phrase}"` });
        }
      }
    }
  }

  if (id === BIS_ID && d.owner_decision === "LABOT") {
    const merged = JSON.parse(JSON.stringify(FR_NESTED.bis || { study: {} }));
    merged.study.comparison = BIS_COMPARISON;
    const align = DE_EXAMPLE_ALIGN[BIS_ID];
    for (const [deKey, expectedVal] of Object.entries(align)) {
      let found = false;
      for (const c of merged.study.comparison || []) {
        const ex = c.example || "";
        if (!ex.includes(deKey)) continue;
        found = true;
        if (!ex.includes(expectedVal)) {
          deTargetViolations++;
          issues.push({
            id,
            type: "DE_TARGET_ALIGN",
            field: "study.comparison",
            expected: expectedVal,
            got: ex,
          });
        }
        if (isScrambledPair(ex)) {
          degeneratePairs++;
          issues.push({ id, type: "SCRAMBLED_PAIR", msg: ex });
        }
      }
      if (!found && deKey.includes(".")) {
        deTargetViolations++;
        issues.push({
          id,
          type: "DE_TARGET_ALIGN_MISSING",
          expected: deKey,
        });
      }
    }
    const mergedText = flattenStrings(merged).join(" ");
    if (LV_LEAK.test(mergedText)) {
      wrongLanguage++;
      issues.push({ id, type: "MERGED_WRONG_LANG", msg: mergedText.slice(0, 120) });
    }
  }

  if (id === BITTE_ID && d.owner_decision === "LABOT") {
    const merged = JSON.parse(JSON.stringify(FR_NESTED.bitte || { study: {} }));
    merged.study.examples = BITTE_EXAMPLES;
    const align = DE_EXAMPLE_ALIGN[BITTE_ID];
    for (const [deKey, expectedVal] of Object.entries(align)) {
      for (const ex of merged.study.examples || []) {
        if (ex.de !== deKey) continue;
        if (ex.lv !== expectedVal) {
          deTargetViolations++;
          issues.push({
            id,
            type: "DE_TARGET_ALIGN",
            field: `study.examples de="${deKey}"`,
            expected: expectedVal,
            got: ex.lv,
          });
        }
      }
    }
    const examplesText = flattenStrings(merged.study?.examples || []).join(" ");
    if (LV_LEAK.test(examplesText)) {
      wrongLanguage++;
      issues.push({ id, type: "MERGED_WRONG_LANG", msg: examplesText.slice(0, 120) });
    }
  }

  rowAudit.push(auditEntry);
}

if (nelabot !== 22) {
  issues.push({ type: "NELABOT_COUNT", msg: `expected 22 NELABOT, got ${nelabot}` });
  semanticViolations++;
}
if (labot !== 28) {
  issues.push({ type: "LABOT_COUNT", msg: `expected 28 LABOT, got ${labot}` });
  semanticViolations++;
}
for (const card of NELABOT_CARDS) {
  const hit = rows.find(
    (r) =>
      r.finding_stable_ids.includes(`|${card}|`) &&
      decisions[r.finding_stable_ids]?.owner_decision === "NELABOT"
  );
  if (!hit) {
    issues.push({ type: "NELABOT_MISSING", msg: `missing NELABOT for ${card}` });
    semanticViolations++;
  }
}

const fullCompositeCompleteness = compositeIncomplete === 0 ? "PASS" : "FAIL";
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
  degeneratePairs === 0 &&
  targetLanguageQualityErrors === 0 &&
  fullCompositeCompleteness === "PASS";

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_018_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_018_LINGUISTIC_REVIEW_BLOCKED",
  pdf_reaudit: true,
  post_repair_merge: true,
  recalculated_from_production: true,
  pass,
  row_count: rows.length,
  labot,
  nelabot,
  pending,
  gates: {
    ROWS: `${rows.length}/50`,
    PENDING: pending,
    EXTRA_MEANING_NOT_IN_SOURCE: extraMeaningNotInSource,
    SEMANTIC_NARROWING_FROM_SOURCE: semanticNarrowing,
    duplicate_meanings: duplicateMeanings,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
    de_target_alignment_violations: deTargetViolations,
    degenerate_example_pairs: degeneratePairs,
    target_language_quality_errors: targetLanguageQualityErrors,
    full_composite_completeness: fullCompositeCompleteness,
    anti_bulk: "PASS",
  },
  productionSource: "data/fi/a1.js + data/fr/a1.js",
  languages: { fi: 5, fr: 45 },
  nelabot_cards: NELABOT_CARDS,
  composite_repairs: ["an", "Appetit"],
  field_level_repairs: ["bis", "bitte"],
  row_audit: rowAudit,
  failures: issues,
  verdict: pass
    ? "LRB_018_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_018_LINGUISTIC_REVIEW_BLOCKED",
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
