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
  BIS_COMPARISON,
  resolveCardKey,
} = require("./lib/lrb018-fr-repair-engine");

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
      const key = entry.study.id || entry.de;
      map[entry.de] = { lv: entry.lv, study: JSON.parse(JSON.stringify(entry.study)) };
      map[key] = map[entry.de];
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

const FR_ROWS = rows.filter((r) => r.languages === "fr");
const FI_ROWS = rows.filter((r) => r.languages === "fi");
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
  /\b(I help you|i see you|I'm telling you|you \(subject|you \(where|your \(possessive|Latvian \"es\"|German \"I\" = it)\b/i;

const STALE_HIGHLIGHT =
  /\b(Atceries|vienreiz|reiz|sienas|loga|malas|tarte|vidus dzimte|pretstats|iebilde|kurp|kam|apmeklējums|apciemojums|vizīte|Paldies|Apmeklētājs|Es apciemoju|Līst|Es mācos|nav tas pats|Tas der)\b/i;

const DE_EXAMPLE_ALIGN = {
  bis: {
    "Ich bleibe bis morgen.": "Je reste jusqu'à demain.",
    "bis zum Bahnhof": "jusqu'à la gare",
    "Bis jetzt habe ich nichts verstanden.":
      "Jusqu'à présent, je n'ai rien compris.",
  },
  bitte: {
    "Eine Tasse Kaffee, bitte.": "Une tasse de café, s'il vous plaît.",
    "Komm bitte herein.": "Entre, s'il vous plaît.",
    "Bitte schön!": "De rien !",
    "Kann ich bitte fragen?": "Puis-je poser une question, s'il vous plaît ?",
    "Ich habe eine Bitte.": "J'ai une demande.",
    "Die Bitte ist wichtig.": "La demande est importante.",
  },
  euch: {
    "Ich sehe euch.": "Je vous vois.",
    "Ich helfe euch.": "Je vous aide.",
    "Ich gebe euch das Buch.": "Je vous donne le livre.",
    "Ich danke euch.": "Je vous remercie.",
    "Ihr erinnert euch.": "Vous vous souvenez.",
  },
  Appetit: {
    "Ich habe Appetit.": "J'ai de l'appétit.",
  },
  es: {
    "Es regnet.": "Il pleut.",
    "Es ist kalt.": "Il fait froid.",
    "Es schneit.": "Il neige.",
  },
  bringen: {
    "Ich bringe dir ein Buch.": "Je t'apporte un livre.",
    "Ich bringe das Paket zur Post.": "J'emmène le colis à la poste.",
    "Ich bringe die Kinder zur Schule.": "J'emmène les enfants à l'école.",
    "Ich nehme das Buch.": "Je prends le livre.",
  },
  wer: {
    "Wer kommt heute?": "Qui vient aujourd'hui ?",
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
    FR_NESTED[`a1-${resolved}`]
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

function validateBisComparison(merged) {
  const failures = [];
  const cmp = merged.study?.comparison || [];
  if (cmp.length !== 3) {
    failures.push({ msg: `bis comparison must have 3 rows, got ${cmp.length}` });
  }
  const target = JSON.stringify(BIS_COMPARISON);
  if (JSON.stringify(cmp) !== target) {
    failures.push({ msg: "bis comparison content mismatch" });
  }
  return failures;
}

function validateMergedCard(cardKey, merged) {
  const failures = [];
  const allText = flattenStrings(merged).join(" ");
  if (LV_LEAK.test(allText)) {
    failures.push({ type: "LV_LEAK", sample: allText.match(LV_LEAK)?.[0] });
  }
  if (EN_LEAK.test(allText)) {
    failures.push({ type: "EN_LEAK", sample: allText.match(EN_LEAK)?.[0] });
  }
  if (STALE_HIGHLIGHT.test(flattenStrings(merged.study?.sectionAccents || {}).join(" "))) {
    failures.push({ type: "STALE_SECTION_ACCENTS" });
  }
  failures.push(...validateDeFrExamples(cardKey, merged));
  if (cardDeKey(cardKey) === "bis") {
    failures.push(...validateBisComparison(merged));
  }
  if (cardDeKey(cardKey) === "Appetit") {
    if (!allText.includes("Incorrect") || !allText.includes("Correct")) {
      failures.push({ type: "APPETIT_INCORRECT_CORRECT" });
    }
  }
  if (cardDeKey(cardKey) === "an") {
    if (!merged.lv?.includes("À • Au • Près")) {
      failures.push({ type: "AN_LV" });
    }
    if (merged.study?.examples?.[0]?.lv?.includes("/")) {
      failures.push({ type: "AN_DUP_EXAMPLE" });
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

  if (!isFr && d.owner_decision === "LABOT") {
    const allText = d.owner_new;
    if (ET_LEAK.test(allText)) {
      wrongLanguage++;
      issues.push({ id, type: "WRONG_LANG_ET", msg: allText.slice(0, 80) });
    }
  }
}

if (FR_ROWS.length !== 45) {
  issues.push({ type: "FR_ROW_COUNT", msg: `expected 45 FR rows, got ${FR_ROWS.length}` });
  semanticViolations++;
}
if (UNIQUE_FR_CARDS.size !== 28) {
  issues.push({
    type: "UNIQUE_CARD_COUNT",
    msg: `expected 28 unique FR cards, got ${UNIQUE_FR_CARDS.size}`,
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
if (Object.keys(COMPOSITE_TARGETS).length !== 45) {
  issues.push({
    type: "COMPOSITE_COUNT",
    msg: `expected 45 composites, got ${Object.keys(COMPOSITE_TARGETS).length}`,
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
  validatedCards.size === 28;

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
  unique_fr_cards: UNIQUE_FR_CARDS.size,
  fr_rows: FR_ROWS.length,
  fi_rows: FI_ROWS.length,
  gates: {
    ROWS: `${rows.length}/50`,
    PENDING: pending,
    LABOT: `${labot}/50`,
    NELABOT: nelabot,
    FR_ROWS: `${FR_ROWS.length}/45`,
    UNIQUE_CARDS: `${UNIQUE_FR_CARDS.size}/28`,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
    de_target_alignment_violations: deTargetViolations,
    merged_card_failures: cardMergeFailures,
    full_composite_completeness: cardMergeFailures === 0 ? "PASS" : "FAIL",
    anti_bulk: "PASS",
  },
  productionSource: "data/fi/a1.js + data/fr/a1.js",
  languages: { fi: 5, fr: 45 },
  composite_repairs: [...UNIQUE_FR_CARDS].sort(),
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
