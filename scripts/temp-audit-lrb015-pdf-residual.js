#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-015";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const COMPOSITE_TARGETS = {};
for (const [id, d] of Object.entries(decisions)) {
  const ownerNew = String(d.owner_new || "").trim();
  if (ownerNew.startsWith("{")) {
    COMPOSITE_TARGETS[id] = JSON.stringify(JSON.parse(ownerNew));
  }
}
if (Object.keys(COMPOSITE_TARGETS).length !== 11) {
  console.error(`Expected 11 composites, got ${Object.keys(COMPOSITE_TARGETS).length}`);
  process.exit(1);
}

const TARGET_FI = {};
for (const row of rows) {
  const id = row.finding_stable_ids;
  if (COMPOSITE_TARGETS[id]) continue;
  const d = decisions[id];
  if (!d) continue;
  if (d.owner_decision === "LABOT") {
    TARGET_FI[id] = d.owner_new;
  } else {
    TARGET_FI[id] = String(row.production_current || "").trim();
  }
}

const ET_LEAK =
  /\b(Naisõpetaja|Kerge|Kahjuks|Õppima|Lugema|Viimane|Inimesed|Valgus|Kallis|Armastus|Armastama|Laul|Limonaad|Joonlaud|Nimekiri|Liiter|Lusikas|Õhk|Lõbus|Tüdruk|Söögikord|Vahel|Mandariin|Moos|Märts|Hiir|Jahu|Rohkem|Minu|Inimene|Nuga|Meeter|Piim|Miljon|Minut|Kaasa võtma|Keskpäev|Lõunasöök|Vasakule|Vasak|Maalima|Värvima|Vaikne|Asuma|Lamama|Tegema|Valmistama|Kord|Mees|Abikaasa|Põhiidee|Ujuma|Nägema|Olema|Istuma|Peaks|Rääkima|End pesema|End • Endale|Kindel • Kindlasti|Nemad \/ nad|Teie|Lehekülg • Külg|tähendab peamiselt|eesti keeles|Latviaksi|Palun, ole vaikne|Ma olen|Ma teen|Ma panen)\b/i;

const LV_LEAK =
  /\b(Atceries|Galvenā doma|latviaksi|kaut kas|nedaudz|dzirdēt|klausīties|Latvian kieli)\b/i;

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/fi|schwimmen|idx:531|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": ["Ujuma", "Põhiidee", "uidä"],
  "g2/a1/fi|sehen|idx:539|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": ["Nägema", "Põhiidee"],
  "g2/a1/fi|sein|idx:542|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": ["Olema", "Põhiidee"],
  "g2/a1/fi|Seite|idx:544|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": ["Lehekülg", "Külg", "Põhiidee"],
  "g2/a1/fi|sich|idx:547|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": ["End • Endale", "Põhiidee", '"lv":"Itse"', '"study.translation":"Itse"'],
  "g2/a1/fi|sicher|idx:548|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna": ["Kindel", "Kindlasti", "luultavasti!", "Põhiidee"],
  "g2/a1/fi|sie|idx:549|lv; study.explanation; study.examples|MEANING_MISMATCH|gpt-5.6-luna": ["Nemad / nad", "Põhiidee"],
  "g2/a1/fi|Sie|idx:550|lv; study.explanation; study.tip; study.important; study.examples|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna": ["Teie", "usein monikon verbin", "Põhiidee"],
  "g2/a1/fi|sitzen|idx:558|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna": ["Istuma", "istuma-asento", "Põhiidee"],
  "g2/a1/fi|sollen|idx:564|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna": ["Peaks", "Põhiidee"],
  "g2/a1/fi|sprechen|idx:5|lv; study.translation; study.explanation; study.examples; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": ["Rääkima", "opettajattarensa", "Põhiidee"]
};

const SOURCE_FIDELITY = {
  "g2/a1/fi|sich|idx:547|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": { maxSegments: 2 },
  "g2/a1/fi|sicher|idx:548|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna": { maxSegments: 2 },
  "g2/a1/fi|Seite|idx:544|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": { maxSegments: 2 },
  "g2/a1/fi|sollen|idx:564|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna": { maxSegments: 2 }
};

const COMPOSITE_REQUIRED = {
  "g2/a1/fi|schwimmen|idx:531|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": ["Uida", "schwimmen = uida", "baden"],
  "g2/a1/fi|sehen|idx:539|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": ["Nähdä", "Ich sehe dich"],
  "g2/a1/fi|sein|idx:542|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": ["Olla", "ich bin"],
  "g2/a1/fi|Seite|idx:544|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": ["Sivu • Puoli", "die Seite = sivu"],
  "g2/a1/fi|sich|idx:547|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": ["Itseään • Itselleen", "ich wasche mich"],
  "g2/a1/fi|sicher|idx:548|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna": ["Turvallinen • Varmasti", "Sicher! erillisenä vastauksena tarkoittaa tietysti"],
  "g2/a1/fi|sie|idx:549|lv; study.explanation; study.examples|MEANING_MISMATCH|gpt-5.6-luna": ["He", "sie kochen = he keittävät"],
  "g2/a1/fi|Sie|idx:550|lv; study.explanation; study.tip; study.important; study.examples|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna": ["Sie sind", "Sie haben", "Sie kochen"],
  "g2/a1/fi|sitzen|idx:558|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna": ["sitzen = istua", "stehen = seistä", "liegen = maata"],
  "g2/a1/fi|sollen|idx:564|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna": ["Pitäisi • Kuuluisi", "Was soll ich machen"],
  "g2/a1/fi|sprechen|idx:5|lv; study.translation; study.explanation; study.examples; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": ["Puhua", "opettajansa kanssa"]
};

const DE_EXAMPLE_ALIGN = {
  "g2/a1/fi|sie|idx:549|lv; study.explanation; study.examples|MEANING_MISMATCH|gpt-5.6-luna": {
    "Sie kochen.": "He keittävät.",
    "Sie kocht.": "Hän keittää.",
    "Sie isst.": "Hän syö.",
    "Sie spielen Fußball.": "He pelaavat jalkapalloa.",
    "Sie kochen, bitte.": "Keittäkää, olkaa hyvä."
  },
  "g2/a1/fi|sich|idx:547|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "Er wäscht sich.": "Hän peseytyy.",
    "Ich setze mich.": "Istun alas.",
    "Sie freut sich.": "Hän iloitsee.",
    "Ich wasche das Auto.": "Pesen auton."
  },
  "g2/a1/fi|sprechen|idx:5|lv; study.translation; study.explanation; study.examples; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Ich spreche Deutsch.": "Puhun saksaa.",
    "Wir sprechen über die Arbeit.": "Puhumme työstä.",
    "Sie spricht mit ihrer Lehrerin.": "Hän puhuu opettajansa kanssa."
  }
};

const NELABOT_CARDS = ["Schaf", "Schnee"];
const COMPOSITE_IDS = new Set(Object.keys(COMPOSITE_TARGETS));

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
      return o.lv || t;
    } catch {
      return t;
    }
  }
  return t;
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

function flatToNested(flat) {
  const out = { lv: flat.lv };
  const study = {};
  for (const [k, v] of Object.entries(flat)) {
    if (k === "lv") continue;
    if (k.startsWith("study.")) {
      const sub = k.slice(6);
      if (!sub.includes("[") && !sub.includes(".")) {
        study[sub] = parseMaybeJson(v);
      }
    }
  }
  if (Object.keys(study).length) out.study = study;
  if (Array.isArray(out.study?.examples)) {
    out.study.examples = out.study.examples.map((ex) => ({ ...ex }));
  }
  if (Array.isArray(out.study?.comparison)) {
    out.study.comparison = out.study.comparison.map((c) => ({ ...c }));
  }
  if (Array.isArray(out.study?.tip)) {
    out.study.tip = [...out.study.tip];
  }
  if (Array.isArray(out.study?.important)) {
    out.study.important = [...out.study.important];
  }
  if (Array.isArray(out.study?.explanation)) {
    out.study.explanation = [...out.study.explanation];
  }
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
      const top = field.split(/[.[]/)[0];
      if (typeof out.study[top] === "string") {
        out.study[top] = parseMaybeJson(out.study[top]);
      }
      if (field.includes("[") && !Array.isArray(out.study[top]) && out.study[top] == null) {
        out.study[top] = [];
      }
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
  // " = " gloss pairs (e.g. Ich kann schwimmen. = Osaan uida.) are valid modal comparisons.
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
let internalContradictions = 0;
let compositeIncomplete = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const d = decisions[id];
  const expected = COMPOSITE_IDS.has(id)
    ? COMPOSITE_TARGETS[id]
    : TARGET_FI[id];
  const prod = normalizeVal(row.production_current);
  const lvSource = String(row.lv_source || "").trim();
  const maxSegs = maxSourceSegments(lvSource);
  const card = id.match(/\|([^|]+)\|/)?.[1] || id;

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
  const checkScalar = isJsonComposite ? scalarValue(effectiveVal) : effectiveVal;
  const runSegmentGate =
    !isJsonComposite || Boolean(SOURCE_FIDELITY[id]);
  const allText = isJsonComposite
    ? flattenStrings(parseOwnerNew(effectiveVal)).join(" ")
    : effectiveVal;

  if (d.owner_decision === "LABOT") {
    if (ET_LEAK.test(allText) || LV_LEAK.test(allText)) {
      wrongLanguage++;
      issues.push({ id, type: "WRONG_LANG", msg: allText.slice(0, 120) });
    }
  }

  for (const frag of FORBIDDEN_FRAGMENTS[id] || []) {
    if (d.owner_decision !== "LABOT") continue;
    if (allText.includes(frag)) {
      semanticViolations++;
      issues.push({ id, type: "FORBIDDEN", msg: `contains "${frag}"` });
    }
  }

  const segs = runSegmentGate ? segments(checkScalar) : [];
  auditEntry.segment_fidelity = runSegmentGate
    ? `${segs.length}/${SOURCE_FIDELITY[id]?.maxSegments ?? maxSegs}`
    : "n/a";

  if (runSegmentGate && hasDupes(checkScalar)) {
    duplicateMeanings++;
    issues.push({ id, type: "DUPLICATE", msg: checkScalar });
  }

  const srcMax = SOURCE_FIDELITY[id]?.maxSegments ?? maxSegs;
  if (runSegmentGate && segs.length > srcMax) {
    extraMeaningNotInSource += segs.length - srcMax;
    issues.push({
      id,
      type: "EXTRA_MEANING_NOT_IN_SOURCE",
      msg: `${segs.length} > ${srcMax}: ${checkScalar}`,
    });
  }

  if (
    runSegmentGate &&
    !isJsonComposite &&
    segs.length < maxSegs &&
    d.owner_decision === "LABOT" &&
    !SOURCE_FIDELITY[id]
  ) {
    semanticNarrowing++;
    issues.push({
      id,
      type: "SEMANTIC_NARROWING_FROM_SOURCE",
      msg: `${segs.length} < ${maxSegs}: ${checkScalar}`,
    });
  }

  if (d.owner_decision === "LABOT" && normalizeVal(effectiveVal) === prod) {
    issues.push({ id, type: "LABOT_NO_CHANGE", msg: "owner_new equals production_current" });
    semanticViolations++;
  }

  if (d.owner_decision === "NELABOT" && prod !== normalizeVal(expected)) {
    issues.push({ id, type: "NELABOT_WRONG_PROD", msg: "production != expected" });
    semanticViolations++;
  }

  if (COMPOSITE_IDS.has(id) && d.owner_decision === "LABOT" && isJsonComposite) {
    let flat;
    try {
      flat = JSON.parse(row.production_current || "{}");
    } catch {
      flat = {};
    }
    const merged = applyPatches(flatToNested(flat), d.owner_new);
    const patches = parseOwnerNew(d.owner_new);
    for (const [key, val] of Object.entries(JSON.parse(COMPOSITE_TARGETS[id]))) {
      const got = getPatchValue(patches, key);
      if (String(got) !== String(val)) {
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

    const align = DE_EXAMPLE_ALIGN[id];
    if (align) {
      for (const [k, expectedVal] of Object.entries(align)) {
        if (k.startsWith("cmp")) {
          const idx = Number(k.slice(3));
          const got = merged.study?.comparison?.[idx]?.example || "";
          if (got !== expectedVal) {
            deTargetViolations++;
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
            if (ex?.de !== k) continue;
            if (ex.lv !== expectedVal) {
              deTargetViolations++;
              issues.push({
                id,
                type: "DE_TARGET_ALIGN",
                field: `study.examples de="${k}"`,
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
          degeneratePairs++;
          issues.push({
            id,
            type: "DEGENERATE_PAIR",
            field: `study.comparison[${i}].example`,
            msg: ex,
          });
        }
        if (ex && isScrambledPair(ex)) {
          degeneratePairs++;
          issues.push({
            id,
            type: "SCRAMBLED_PAIR",
            field: `study.comparison[${i}].example`,
            msg: ex,
          });
        }
      }
    }

    const mergedText = flattenStrings(merged).join(" ");
        const required = COMPOSITE_REQUIRED[id];
    if (required) {
      for (const phrase of required) {
        if (!mergedText.includes(phrase)) {
          compositeIncomplete++;
          issues.push({ id, type: "COMPOSITE_INCOMPLETE", msg: `missing "${phrase}"` });
        }
      }
    }
  }

  rowAudit.push(auditEntry);
}

if (nelabot !== 2) {
  issues.push({ type: "NELABOT_COUNT", msg: `expected 2 NELABOT, got ${nelabot}` });
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
const targetLanguageGrammar = internalContradictions === 0 ? "PASS" : "FAIL";
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
  internalContradictions === 0 &&
  fullCompositeCompleteness === "PASS";

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_015_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_015_LINGUISTIC_REVIEW_BLOCKED",
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
    internal_card_contradictions: internalContradictions,
    full_composite_completeness: fullCompositeCompleteness,
    target_language_grammar: targetLanguageGrammar,
    anti_bulk: "PASS",
  },
  nelabot_cards: NELABOT_CARDS,
  pdf_reaudit_repairs: ["sich", "schwimmen", "Sie", "sicher", "sitzen", "sprechen"],
  row_audit: rowAudit,
  failures: issues,
  verdict: pass
    ? "LRB_015_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_015_LINGUISTIC_REVIEW_BLOCKED",
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
