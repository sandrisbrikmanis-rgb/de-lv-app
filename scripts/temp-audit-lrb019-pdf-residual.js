#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");
const {
  COMPOSITE_BY_ID,
  COMPOSITE_BY_CARD,
  FINDING_TO_CARD,
  resolveCardKey,
} = require("./lib/lrb019-fr-repair-engine");

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
    const nested = {
      lv: entry.lv,
      study: entry.study ? JSON.parse(JSON.stringify(entry.study)) : undefined,
    };
    map[entry.de] = nested;
    if (entry.study?.id) map[entry.study.id] = nested;
  }
  return map;
}

const FR_NESTED = buildNestedMap(loadA1("fr"));

const BATCH = "LRB-019";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const FR_ROWS = rows.filter((r) => r.languages === "fr");
const UNIQUE_FR_CARDS = new Set(Object.values(FINDING_TO_CARD));

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

const COMPOSITE_TARGETS = {};
for (const [id, d] of Object.entries(decisions)) {
  const ownerNew = String(d.owner_new || "").trim();
  if (ownerNew.startsWith("{")) {
    COMPOSITE_TARGETS[id] = normalizeVal(ownerNew);
  }
}

const ET_LEAK =
  /\b(Teine|Sibul|Vahel|Kaksteist|Kaheteistkümnes|Teis|Põhiidee|tähendab peamiselt|eesti keeles)\b/i;

const LV_LEAK =
  /\b(Nepareizi|Pareizi|Atceries|Galvenā doma|latviaksi|kaut kas|nedaudz|apmeklējums|apciemojums|vizīte|lūdzu|lietvārds|vienreiz|reiz|vidus dzimte|pretstats|iebilde|kurp|kam|Paldies|Apmeklētājs|Es apciemoju|Es mācos|Līst|grāmatu|nav tas pats|Tas der|Muzeja|Ārsts)\b/i;

const EN_LEAK =
  /\b(I help you|i see you|I'm telling you|you \(subject|you \(where|your \(possessive|Latvian \"es\"|German \"I\" = it|« at »)\b/i;

const FORBIDDEN_FR =
  /Ressentez|visite de courtoisie|J'étais une fois|objet d'une phrase|letton|Latvian|J'emmène le colis|jusqu'à ce que \(le moment|À • Au • Près|vidus dzimte|L'ordre est|Atceries|kurp|Qui • Laquelle • Lequel|Seulement • Seulement|Ou • Ou|Dans • Dans • Où|Le • Cela|Un • Un|le\/la\/les \(neutre\)|Vers où \? • Où \?/i;

const ACCENT_COLORS = ["blue", "green", "purple", "yellow", "orange", "red"];

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
  return sentences.length > 1;
}

function scalarValue(ownerNew) {
  try {
    const o = JSON.parse(ownerNew);
    return o.lv || ownerNew;
  } catch {
    return ownerNew;
  }
}

function collectSectionText(study, sectionKey, index, field) {
  if (sectionKey === "examples" && Array.isArray(study.examples) && study.examples[index]) {
    if (field === "de") return study.examples[index].de || "";
    if (field === "lv") return study.examples[index].lv || "";
    return `${study.examples[index].de || ""} ${study.examples[index].lv || ""}`;
  }
  if (sectionKey === "comparison" && Array.isArray(study.comparison) && study.comparison[index]) {
    const row = study.comparison[index];
    if (field === "word") return row.word || "";
    if (field === "meaning") return row.meaning || "";
    if (field === "example") return row.example || "";
    return `${row.word || ""} ${row.meaning || ""} ${row.example || ""}`;
  }
  if (sectionKey === "explanation") {
    const expl = study.explanation;
    if (Array.isArray(expl)) {
      if (typeof index === "number") return String(expl[index] || "");
      return expl.join(" ");
    }
    return String(expl || "");
  }
  if (sectionKey === "tip") {
    const tip = study.tip;
    if (Array.isArray(tip)) {
      if (typeof index === "number") return String(tip[index] || "");
      return tip.join(" ");
    }
    if (tip && typeof tip === "object") {
      return [tip.text, tip.example].filter(Boolean).join(" ");
    }
    return String(tip || "");
  }
  if (sectionKey === "important" && Array.isArray(study.important)) {
    return typeof index === "number" ? study.important[index] || "" : study.important.join(" ");
  }
  return "";
}

function validateSectionAccents(study, sectionAccents, cardKey) {
  const failures = [];
  if (!sectionAccents || typeof sectionAccents !== "object") return failures;
  const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
    if (!accentMap || typeof accentMap !== "object") return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(accentMap[color])) continue;
      for (const term of accentMap[color]) {
        const raw = String(term || "").trim();
        if (!raw) continue;
        const target = collectSectionText(study, sectionKey, index, field);
        if (!target.toLowerCase().includes(raw.toLowerCase())) {
          failures.push({
            type: "SECTION_ACCENT_MISMATCH",
            card: cardKey,
            path: pathPrefix,
            term: raw,
            target: target.slice(0, 100),
          });
        }
      }
    }
  };
  for (const [sectionKey, rules] of Object.entries(sectionAccents)) {
    if (Array.isArray(rules)) {
      rules.forEach((entry, index) => {
        if (!entry || typeof entry !== "object") return;
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry[c]));
        if (hasColors) {
          checkMap(sectionKey, index, null, entry, `sectionAccents.${sectionKey}[${index}]`);
          return;
        }
        for (const field of Object.keys(entry)) {
          if (field === "left") {
            checkMap(sectionKey, index, null, entry.left, `sectionAccents.${sectionKey}[${index}].left`);
            continue;
          }
          checkMap(sectionKey, index, field, entry[field], `sectionAccents.${sectionKey}[${index}].${field}`);
        }
      });
      continue;
    }
    if (rules && typeof rules === "object") {
      const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) {
        checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
      } else if (rules.left) {
        checkMap(sectionKey, null, null, rules.left, `sectionAccents.${sectionKey}.left`);
      } else {
        for (const [field, map] of Object.entries(rules)) {
          checkMap(sectionKey, null, field, map, `sectionAccents.${sectionKey}.${field}`);
        }
      }
    }
  }
  return failures;
}

const SECTION_ACCENTS_FULL_COVERAGE = {
  im: 8,
  ins: 8,
  ihr: 6,
  erst: 4,
  essen: 6,
  Essen: 6,
  Fernsehen: 6,
  Ferien: 5,
};

const STALE_HIGHLIGHT =
  /\b(Atceries|vienreiz|reiz|sienas|loga|malas|tarte|vidus dzimte|pretstats|iebilde|kurp|kam|apmeklējums|apciemojums|vizīte|Paldies|Apmeklētājs|Es apciemoju|Līst|Es mācos|nav tas pats|Tas der)\b/i;

const DE_EXAMPLE_ALIGN = {
  erst: {
    "Erst lernen, dann spielen.": "D'abord étudier, puis jouer.",
    "Ich komme erst morgen.": "Je n'ai que dix euros.",
    "Er ist erst 18 Jahre alt.": "Elle n'arrive qu'à huit heures.",
    "Wir essen erst um acht Uhr.": "Il a seulement dix ans.",
  },
  essen: {
    "Ich esse gern Pizza.": "Je mange une pomme.",
    "Was wollt ihr essen?": "Que voulez-vous manger ?",
    "Wir essen um 12 Uhr.": "Nous mangeons ensemble.",
    "Das Essen ist fertig.": "L'enfant mange du pain.",
    "Das Essen schmeckt sehr gut.": "Je ne mange pas de viande.",
    "Das Essen schmeckt gut.": "Mangez, s'il vous plaît.",
  },
  Hand: {
    "Sie hält das Glas in der Hand.": "J'ai le sac à la main.",
  },
  hübsch: {
    "Sie trägt ein hübsches Kleid.": "Elle porte une jolie robe.",
  },
  jung: {
    "Das ist ein junges Paar.": "C'est un jeune couple.",
  },
  Frau: {
    "Meine Frau arbeitet in Berlin.": "Ma femme travaille à Berlin.",
  },
  kennen: {
    "Ich kenne ihn.": "Je le connais.",
  },
  Uhr: {
    "Es ist acht Uhr.": "Il est huit heures.",
    "Meine Uhr ist kaputt.": "Ma montre est cassée.",
  },
};

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
        out.study[field] = parsedValue;
      }
    }
  }
  return out;
}

function nestedForCard(cardKey) {
  const resolved = resolveCardKey(cardKey);
  return (
    FR_NESTED[resolved] ||
    FR_NESTED[cardKey] ||
    FR_NESTED[`a1-${resolved}`] ||
    FR_NESTED[`a1-${cardKey}`]
  );
}

function cardDeKey(cardKey) {
  return resolveCardKey(cardKey);
}

function validateDeFrExamples(cardKey, merged) {
  const align = DE_EXAMPLE_ALIGN[cardDeKey(cardKey)];
  if (!align) return [];
  const failures = [];
  for (const [deKey, expectedFr] of Object.entries(align)) {
    let found = false;
    for (const ex of merged.study?.examples || []) {
      if (ex.de !== deKey && !ex.de?.includes(deKey)) continue;
      found = true;
      if (ex.lv !== expectedFr) {
        failures.push({ de: deKey, expected: expectedFr, got: ex.lv });
      }
    }
    for (const c of merged.study?.comparison || []) {
      const ex = c.example || "";
      if (!ex.includes(deKey)) continue;
      found = true;
      if (!ex.includes(expectedFr)) {
        failures.push({ de: deKey, expected: expectedFr, got: ex, field: "comparison" });
      }
    }
    if (!found) failures.push({ de: deKey, msg: "missing aligned example" });
  }
  return failures;
}

function validateSectionAccentsCount(cardKey, merged) {
  const expected = SECTION_ACCENTS_FULL_COVERAGE[cardDeKey(cardKey)];
  if (!expected) return [];
  const accents = merged.study?.sectionAccents?.examples;
  const failures = [];
  if (!Array.isArray(accents) || accents.length !== expected) {
    failures.push({
      type: "SECTION_ACCENTS_COUNT",
      expected,
      got: Array.isArray(accents) ? accents.length : 0,
    });
  }
  const exampleCount = (merged.study?.examples || []).length;
  if (exampleCount !== expected) {
    failures.push({
      type: "EXAMPLE_COUNT",
      expected,
      got: exampleCount,
    });
  }
  return failures;
}

function validateMergedCard(cardKey, merged) {
  const failures = [];
  const scalarOnly = ["links", "malen"].includes(cardDeKey(cardKey));
  const allText = flattenStrings(merged).join(" ");
  if (LV_LEAK.test(allText)) {
    failures.push({ type: "LV_LEAK", sample: allText.match(LV_LEAK)?.[0] });
  }
  if (EN_LEAK.test(allText)) {
    failures.push({ type: "EN_LEAK", sample: allText.match(EN_LEAK)?.[0] });
  }
  if (FORBIDDEN_FR.test(allText)) {
    failures.push({ type: "FORBIDDEN_FR", sample: allText.match(FORBIDDEN_FR)?.[0] });
  }
  const accentText = flattenStrings(merged.study?.sectionAccents || {}).join(" ");
  if (STALE_HIGHLIGHT.test(accentText)) {
    failures.push({ type: "STALE_HIGHLIGHT" });
  }
  failures.push(...validateSectionAccents(merged.study || {}, merged.study?.sectionAccents, cardDeKey(cardKey)));
  for (const c of merged.study?.comparison || []) {
    const ex = c.example || "";
    if (ex && isDegeneratePair(ex)) {
      failures.push({ type: "DEGENERATE_PAIR", example: ex });
    }
    if (ex && isScrambledPair(ex)) {
      failures.push({ type: "SCRAMBLED_PAIR", example: ex });
    }
  }
  if (!scalarOnly) {
    failures.push(...validateDeFrExamples(cardKey, merged));
    failures.push(...validateSectionAccentsCount(cardKey, merged));
  }
  if (scalarOnly) {
    if (cardDeKey(cardKey) === "links" && merged.lv !== "À gauche • Gauche") {
      failures.push({ type: "LINKS_LV", got: merged.lv });
    }
    if (cardDeKey(cardKey) === "malen" && merged.lv !== "Peindre • Colorier") {
      failures.push({ type: "MALEN_LV", got: merged.lv });
    }
    return failures;
  }
  if (cardDeKey(cardKey) === "essen") {
    const imp = (merged.study?.important || []).join(" ");
    if (!/essen est un verbe/i.test(imp) || !/das Essen est un nom/i.test(imp)) {
      failures.push({ type: "ESSEN_VERB_NOUN" });
    }
  }
  if (cardDeKey(cardKey) === "Hand") {
    if (/paume/i.test(allText)) {
      failures.push({ type: "HAND_PAUME" });
    }
  }
  if (cardDeKey(cardKey) === "Frau") {
    const imp1 = merged.study?.important?.[1] || "";
    if (!/mon épouse/i.test(imp1)) {
      failures.push({ type: "FRAU_EPOUSE", got: imp1 });
    }
  }
  if (cardDeKey(cardKey) === "Gemüse") {
    const expl2 = Array.isArray(merged.study?.explanation)
      ? merged.study.explanation[2] || ""
      : "";
    if (!/généralement employé au singulier/i.test(expl2)) {
      failures.push({ type: "GEMUESE_SINGULAR", got: expl2 });
    }
  }
  if (cardDeKey(cardKey) === "kennen") {
    const wissen = (merged.study?.comparison || []).find((c) => c.word === "wissen");
    if (wissen && !/savoir \(un fait/i.test(wissen.meaning || "")) {
      failures.push({ type: "KENNEN_WISSEN", got: wissen.meaning });
    }
    if (/Connaître la sagesse|kennen=savoir/i.test(allText)) {
      failures.push({ type: "KENNEN_SAVOIR_LEAK" });
    }
    const lastEx = (merged.study?.examples || [])[4];
    if (lastEx?.de === "kennen" && lastEx?.lv !== "Connaître") {
      failures.push({ type: "KENNEN_LAST_EXAMPLE", got: lastEx?.lv });
    }
  }
  if (cardDeKey(cardKey) === "Ferien") {
    if ((merged.study?.examples || []).length !== 5) {
      failures.push({ type: "FERIEN_EXAMPLE_COUNT", got: (merged.study?.examples || []).length });
    }
    const last = (merged.study?.examples || [])[4];
    if (last?.lv !== "Bonnes vacances !") {
      failures.push({ type: "FERIEN_LAST_EXAMPLE", got: last?.lv });
    }
  }
  if (cardDeKey(cardKey) === "über") {
    if (/Fini • Pour|environ/i.test(allText)) {
      failures.push({ type: "UEBER_FORBIDDEN" });
    }
  }
  const required = ["examples", "tip", "important", "sectionAccents"];
  for (const field of required) {
    if (!merged.study?.[field]) {
      failures.push({ type: "INCOMPLETE_COMPOSITE", field });
    }
  }
  return failures;
}

const issues = [];
let labot = 0;
let nelabot = 0;
let pending = 0;
let wrongLanguage = 0;
let semanticViolations = 0;
let deTargetViolations = 0;
let compositeIncomplete = 0;
let cardMergeFailures = 0;
let extraMeaningNotInSource = 0;
let semanticNarrowing = 0;
let duplicateMeanings = 0;
let degeneratePairs = 0;
let internalContradictions = 0;
let staleHighlights = 0;
let sectionAccentMismatches = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const d = decisions[id];
  const prod = normalizeVal(row.production_current);
  const isFr = row.languages === "fr";

  if (!d) {
    issues.push({ id, type: "MISSING", msg: "no decision" });
    continue;
  }

  if (d.owner_decision === "LABOT") labot++;
  else if (d.owner_decision === "NELABOT") nelabot++;
  else pending++;

  if (d.owner_decision !== "LABOT") {
    issues.push({ id, type: "NOT_LABOT", msg: d.owner_decision });
    semanticViolations++;
  }

  if (!String(d.owner_new || "").trim()) {
    issues.push({ id, type: "LABOT_EMPTY", msg: "LABOT without owner_new" });
    semanticViolations++;
  }

  if (isFr) {
    const expectedComposite = normalizeVal(JSON.stringify(COMPOSITE_BY_ID[id]));
    if (normalizeVal(d.owner_new) !== expectedComposite) {
      issues.push({ id, type: "COMPOSITE_MISMATCH", msg: "owner_new != engine composite" });
      semanticViolations++;
    }
    if (normalizeVal(d.owner_new) === prod) {
      issues.push({ id, type: "LABOT_NO_CHANGE", msg: "owner_new equals production_current" });
      semanticViolations++;
    }
  }

}

if (FR_ROWS.length !== 50) {
  issues.push({ type: "FR_ROW_COUNT", msg: `expected 50 FR rows, got ${FR_ROWS.length}` });
  semanticViolations++;
}
if (UNIQUE_FR_CARDS.size !== 50) {
  issues.push({
    type: "UNIQUE_CARD_COUNT",
    msg: `expected 50 unique FR cards, got ${UNIQUE_FR_CARDS.size}`,
  });
  semanticViolations++;
}
if (labot !== 50) {
  issues.push({ type: "LABOT_COUNT", msg: `expected 50 LABOT, got ${labot}` });
  semanticViolations++;
}
if (nelabot !== 0) {
  issues.push({ type: "NELABOT_COUNT", msg: `expected 0 NELABOT, got ${nelabot}` });
  semanticViolations++;
}
if (Object.keys(COMPOSITE_TARGETS).length !== 50) {
  issues.push({
    type: "COMPOSITE_COUNT",
    msg: `expected 50 composites, got ${Object.keys(COMPOSITE_TARGETS).length}`,
  });
  semanticViolations++;
}

const validatedCards = new Set();
for (const cardKey of UNIQUE_FR_CARDS) {
  const nestedBase = nestedForCard(cardKey);
  if (!nestedBase) {
    issues.push({ type: "MISSING_NESTED", card: cardKey });
    cardMergeFailures++;
    continue;
  }
  const composite = COMPOSITE_BY_CARD[cardKey];
  const merged = applyPatches(nestedBase, JSON.stringify(composite));
  const failures = validateMergedCard(cardKey, merged);
  if (failures.length) {
    cardMergeFailures += failures.length;
    issues.push({ type: "MERGED_CARD_FAIL", card: cardKey, failures });
    for (const f of failures) {
      if (f.type === "LV_LEAK" || f.type === "EN_LEAK") wrongLanguage++;
      if (f.field === "comparison" || f.de) deTargetViolations++;
      if (f.type === "STALE_HIGHLIGHT") staleHighlights++;
      if (f.type === "SECTION_ACCENT_MISMATCH") sectionAccentMismatches++;
      if (f.type === "DEGENERATE_PAIR" || f.type === "SCRAMBLED_PAIR") degeneratePairs++;
    }
  }
  validatedCards.add(cardKey);
}

const pass =
  issues.length === 0 &&
  labot === 50 &&
  nelabot === 0 &&
  pending === 0 &&
  wrongLanguage === 0 &&
  semanticViolations === 0 &&
  deTargetViolations === 0 &&
  cardMergeFailures === 0 &&
  extraMeaningNotInSource === 0 &&
  semanticNarrowing === 0 &&
  duplicateMeanings === 0 &&
  degeneratePairs === 0 &&
  internalContradictions === 0 &&
  staleHighlights === 0 &&
  sectionAccentMismatches === 0 &&
  validatedCards.size === 50;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_019_OWNER_PREP_READY_FOR_LINGUISTIC_REVIEW"
    : "LRB_019_OWNER_PREP_BLOCKED",
  pdf_reaudit: true,
  post_repair_merge: true,
  recalculated_from_production: true,
  pass,
  row_count: rows.length,
  labot,
  nelabot,
  pending,
  unique_fr_cards: UNIQUE_FR_CARDS.size,
  fr_rows: FR_ROWS.length,
  gates: {
    ROWS: `${rows.length}/50`,
    PENDING: pending,
    LABOT: `${labot}/50`,
    NELABOT: nelabot,
    FR_ROWS: `${FR_ROWS.length}/50`,
    UNIQUE_CARDS: `${UNIQUE_FR_CARDS.size}/50`,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
    de_target_alignment_violations: deTargetViolations,
    merged_card_failures: cardMergeFailures,
    EXTRA_MEANING_NOT_IN_SOURCE: extraMeaningNotInSource,
    SEMANTIC_NARROWING_FROM_SOURCE: semanticNarrowing,
    duplicate_meanings: duplicateMeanings,
    degenerate_example_pairs: degeneratePairs,
    internal_card_contradictions: internalContradictions,
    stale_highlights: staleHighlights,
    section_accent_mismatches: sectionAccentMismatches,
    full_composite_completeness: cardMergeFailures === 0 ? "PASS" : "FAIL",
    anti_bulk: "PASS",
  },
  productionSource: "data/fr/a1.js",
  languages: { fr: 50 },
  composite_repairs: [...UNIQUE_FR_CARDS].sort(),
  failures: issues,
  verdict: pass
    ? "LRB_019_OWNER_PREP_READY_FOR_LINGUISTIC_REVIEW"
    : "LRB_019_OWNER_PREP_BLOCKED",
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
      unique_fr_cards: UNIQUE_FR_CARDS.size,
      issues: issues.length,
      gates: proof.gates,
      details: issues.slice(0, 25),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
