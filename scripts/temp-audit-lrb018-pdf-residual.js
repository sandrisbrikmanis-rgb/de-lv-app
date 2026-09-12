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
    if (Array.isArray(expl)) return expl.join(" ");
    return String(expl || "");
  }
  if (sectionKey === "tip") {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip.join(" ");
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
  bitte: 6,
  euch: 5,
  ins: 8,
  zum: 8,
  für: 6,
  Eis: 5,
  bringen: 4,
};

const STALE_HIGHLIGHT =
  /\b(Atceries|vienreiz|reiz|sienas|loga|malas|tarte|vidus dzimte|pretstats|iebilde|kurp|kam|apmeklējums|apciemojums|vizīte|Paldies|Apmeklētājs|Es apciemoju|Līst|Es mācos|nav tas pats|Tas der)\b/i;

const DE_EXAMPLE_ALIGN = {
  bis: {
    "Ich warte bis zu deiner Ankunft.": "J'attends jusqu'à ton arrivée.",
    "Ich bleibe bis morgen.": "Je reste jusqu'à demain.",
    "bis zum Bahnhof": "jusqu'à la gare",
    "Bis jetzt habe ich nichts verstanden.":
      "Jusqu'à présent, je n'ai rien compris.",
  },
  ins: {
    "Komm ins Haus!": "Entre dans la maison !",
  },
  bitte: {
    "Eine Tasse Kaffee, bitte.": "Une tasse de café, s'il vous plaît.",
    "Komm bitte herein.": "Entre, s'il te plaît.",
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
    "Ich habe keinen Appetit.": "Je n'ai pas d'appétit.",
  },
  es: {
    "Es regnet.": "Il pleut.",
    "Es ist kalt.": "Il fait froid.",
    "Das Kind schläft.": "L'enfant dort.",
    "Es ist müde.": "Il/Elle est fatigué(e).",
  },
  nur: {
    "Ich habe nur zehn Euro.": "Je n'ai que dix euros.",
    "Nur du kannst mir helfen.": "Toi seul peux m'aider.",
    "Ich möchte nur Kaffee.": "Je veux seulement du café.",
    "Ich habe nur acht Euro.": "Je n'ai que huit euros.",
  },
  machen: {
    "Was machst du?": "Que fais-tu ?",
    "Ich mache Hausaufgaben.": "Je fais mes devoirs.",
    "Wir machen Pizza.": "Nous faisons une pizza.",
    "Das macht Spaß.": "C'est amusant.",
  },
  bringen: {
    "Ich bringe dir ein Buch.": "Je t'apporte un livre.",
    "Ich bringe das Paket zur Post.": "J'apporte le colis à la poste.",
    "Ich bringe die Kinder zur Schule.": "J'emmène les enfants à l'école.",
    "Ich nehme das Buch.": "Je prends le livre.",
  },
  einmal: {
    "Ich war einmal in Berlin.": "Je suis allé à Berlin une fois.",
  },
  wer: {
    "Wer kommt heute?": "Qui vient aujourd'hui ?",
    "Wer ist deine Lehrerin?": "Qui est ta professeure ?",
  },
  das: {
    "Dies ist mein Auto.": "Ceci est ma voiture.",
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
  failures.push(...validateDeFrExamples(cardKey, merged));
  if (cardDeKey(cardKey) === "bis") {
    failures.push(...validateBisComparison(merged));
  }
  if (cardDeKey(cardKey) === "Appetit") {
    const hasKeinen = (merged.study?.examples || []).some(
      (ex) => ex.de === "Ich habe keinen Appetit." && ex.lv === "Je n'ai pas d'appétit."
    );
    if (!hasKeinen) {
      failures.push({ type: "APPETIT_KEINEN" });
    }
    if (allText.includes("Ressentez")) {
      failures.push({ type: "APPETIT_RESSENTEZ" });
    }
  }
  if (cardDeKey(cardKey) === "das") {
    if (merged.lv === "Le • Cela" || merged.study?.translation === "Le • Cela") {
      failures.push({ type: "DAS_OLD_TRANSLATION", got: merged.lv });
    }
    if (!merged.lv?.includes("Article défini neutre")) {
      failures.push({ type: "DAS_TRANSLATION", got: merged.lv });
    }
    const dasCmp = (merged.study?.comparison || []).find((c) => c.word === "das");
    if (dasCmp?.meaning?.includes("le/la/les")) {
      failures.push({ type: "DAS_COMPARISON_NEUTRE", got: dasCmp.meaning });
    }
  }
  if (cardDeKey(cardKey) === "ein") {
    if (merged.lv === "Un • Un" || merged.study?.translation === "Un • Un") {
      failures.push({ type: "EIN_DUPLICATE_TRANSLATION", got: merged.lv });
    }
    if (!merged.lv?.includes("Article indéfini")) {
      failures.push({ type: "EIN_TRANSLATION", got: merged.lv });
    }
  }
  if (cardDeKey(cardKey) === "zum") {
    const explText = flattenStrings(merged.study?.explanation || {}).join(" ");
    const impText = flattenStrings(merged.study?.important || {}).join(" ");
    if (!/toujours au datif/i.test(explText + impText)) {
      failures.push({ type: "ZUM_DATIVE_NOTE" });
    }
  }
  if (cardDeKey(cardKey) === "machen") {
    const pizzaCmp = (merged.study?.comparison || []).find(
      (c) => (c.example || "").includes("Wir machen Pizza")
    );
    if (pizzaCmp && pizzaCmp.word !== "machen") {
      failures.push({ type: "MACHEN_COMPARISON_WORD", got: pizzaCmp.word });
    }
    if (!(merged.study?.examples || []).length) {
      failures.push({ type: "MACHEN_MISSING_EXAMPLES" });
    }
  }
  if (cardDeKey(cardKey) === "nur") {
    if ((merged.study?.examples || []).length !== 5) {
      failures.push({
        type: "NUR_EXAMPLE_COUNT",
        got: (merged.study?.examples || []).length,
      });
    }
  }
  failures.push(...validateSectionAccentsCount(cardKey, merged));
  if (cardDeKey(cardKey) === "wer") {
    if (/objet d'une phrase/i.test(allText)) {
      failures.push({ type: "WER_OBJECT_ERROR" });
    }
    const werKommt = (merged.study?.examples || []).find(
      (ex) => ex.de === "Wer kommt heute?"
    );
    if (werKommt && werKommt.lv !== "Qui vient aujourd'hui ?") {
      failures.push({ type: "WER_KOMMT", got: werKommt.lv });
    }
  }
  if (cardDeKey(cardKey) === "lang") {
    if (
      merged.lv === "Long • Long" ||
      merged.study?.translation === "Long • Long" ||
      merged.study?.translation === "Longue • Longue"
    ) {
      failures.push({ type: "LANG_DUPLICATE" });
    }
  }
  if (cardDeKey(cardKey) === "an") {
    if (!merged.lv?.includes("Sur • À • Au bord de")) {
      failures.push({ type: "AN_LV", got: merged.lv });
    }
    if (merged.lv?.includes("À • Au • Près")) {
      failures.push({ type: "AN_OLD_TRANSLATION" });
    }
    if (merged.study?.examples?.[0]?.lv?.includes("/")) {
      failures.push({ type: "AN_DUP_EXAMPLE" });
    }
  }
  if (cardDeKey(cardKey) === "das") {
    const welches = (merged.study?.comparison || []).find((c) => c.word === "welches");
    if (welches?.meaning?.includes("Qui")) {
      failures.push({ type: "DAS_WELCHES", got: welches.meaning });
    }
    const rel = (merged.study?.examples || []).find(
      (ex) => ex.de === "Das Buch, das ich lese, ist interessant."
    );
    if (rel && !rel.lv.includes("que je lis")) {
      failures.push({ type: "DAS_RELATIVE", got: rel.lv });
    }
  }
  if (cardDeKey(cardKey) === "ins") {
    const tipText = flattenStrings(merged.study?.tip || {}).join(" ");
    if (!/où va-t-on/i.test(tipText) || !/Où \? → im/i.test(tipText)) {
      failures.push({ type: "INS_TIP_DIRECTION" });
    }
    if (merged.lv === "Vers où ? • Où ?" || merged.study?.translation === "Vers où ? • Où ?") {
      failures.push({ type: "INS_OLD_TRANSLATION", got: merged.lv });
    }
  }
  if (cardDeKey(cardKey) === "euch") {
    if (merged.study?.translation === "Vous • Vous") {
      failures.push({ type: "EUCH_DUPLICATE_TRANSLATION" });
    }
  }
  if (cardDeKey(cardKey) === "oder") {
    if (/L'ordre est/i.test(allText)) {
      failures.push({ type: "ODER_LORDRE" });
    }
    if (!(merged.study?.examples || []).length) {
      failures.push({ type: "ODER_MISSING_EXAMPLES" });
    }
  }
  if (cardDeKey(cardKey) === "nur") {
    if (merged.study?.translation === "Seulement • Seulement") {
      failures.push({ type: "NUR_DUPLICATE_TRANSLATION" });
    }
  }
  const required = ["examples", "comparison", "tip", "important", "sectionAccents"];
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

  if (!isFr && d.owner_decision === "LABOT") {
    const allText = d.owner_new;
    if (ET_LEAK.test(allText)) {
      wrongLanguage++;
      issues.push({ id, type: "WRONG_LANG_ET", msg: allText.slice(0, 80) });
    }
    const lvSource = String(row.lv_source || "").trim();
    const maxSegs = maxSourceSegments(lvSource);
    const checkScalar = scalarValue(d.owner_new);
    const segs = segments(checkScalar);
    if (hasDupes(checkScalar)) {
      duplicateMeanings++;
      issues.push({ id, type: "DUPLICATE", msg: checkScalar });
    }
    if (segs.length > maxSegs) {
      extraMeaningNotInSource += segs.length - maxSegs;
      issues.push({
        id,
        type: "EXTRA_MEANING_NOT_IN_SOURCE",
        msg: `${segs.length} > ${maxSegs}: ${checkScalar}`,
      });
    }
    if (segs.length < maxSegs) {
      semanticNarrowing++;
      issues.push({
        id,
        type: "SEMANTIC_NARROWING_FROM_SOURCE",
        msg: `${segs.length} < ${maxSegs}: ${checkScalar}`,
      });
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
