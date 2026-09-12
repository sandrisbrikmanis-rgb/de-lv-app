"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadCsv } = require("./g2-a1-phase3/batch-001-csv");
const { setAt } = require("./da-a1-owner-path");
const CARD_OVERRIDES = require("../data/lrb020-card-overrides.json");

const CARD_KEY_ALIASES = {
  "a1-ab": "ab",
  "a1-aber": "aber",
  "a1-also": "also",
  "a1-an": "an",
  "a1-bitte": "bitte",
  "a1-Bitte": "Bitte",
  "a1-bleiben": "bleiben",
  "a1-bringen": "bringen",
  "a1-da": "da",
  "a1-das": "das",
  "a1-dass": "dass",
  "a1-ein": "ein",
  "a1-eis": "Eis",
  "a1-erst": "erst",
  "a1-es": "es",
  "a1-etwas": "etwas",
  "a1-euch": "euch",
  "a1-frau": "Frau",
  "a1-geschwister": "Geschwister",
  "a1-gleich": "gleich",
  "a1-gross": "groß",
  "a1-grosseltern": "Großeltern",
  "a1-gut": "gut",
  "a1-haben": "haben",
  "a1-halten": "halten",
  "a1-hand": "Hand",
  "a1-heissen": "heißen",
  "a1-hoch": "hoch",
  "a1-koennen": "können",
  "a1-kosten": "kosten",
  "a1-laden": "Laden",
  "a1-land": "Land",
  "a1-lang": "lang",
  "a1-lassen": "lassen",
  "a1-laufen": "laufen",
  "a1-unter": "unter",
  "a1-urlaub": "Urlaub",
  "a1-verstehen": "verstehen",
  "a1-vom": "vom",
  "a1-vor": "vor",
  "a1-was": "was",
  "a1-wenn": "wenn",
  "a1-wer": "wer",
  "a1-werden": "werden",
  "a1-wetter": "Wetter",
  "a1-wie": "wie",
  "a1-wissen": "wissen",
  "a1-zu": "zu",
  "a1-zug": "Zug",
  "a1-zum": "zum",
};

const _wordsByLang = {};

function loadWords(lang) {
  if (_wordsByLang[lang]) return _wordsByLang[lang];
  const ctx = { window: {} };
  vm.runInNewContext(
    fs.readFileSync(path.join(__dirname, `../../data/${lang}/a1.js`), "utf8"),
    ctx
  );
  _wordsByLang[lang] = ctx.window.A1_WORDS;
  return _wordsByLang[lang];
}

function resolveCardKey(cardKey) {
  return CARD_KEY_ALIASES[cardKey] || cardKey;
}

function loadNested(lang, cardKey) {
  const words = loadWords(lang);
  const resolved = resolveCardKey(cardKey);
  const entry =
    words.find((w) => w.study?.id === cardKey) ||
    words.find((w) => w.study?.id === `a1-${resolved}`) ||
    words.find((w) => w.de === resolved);
  if (!entry) throw new Error(`Card not found (${lang}): ${cardKey}`);
  return {
    lv: entry.lv,
    study: JSON.parse(JSON.stringify(entry.study || {})),
  };
}

function wordsIn(text, candidates) {
  if (!text) return [];
  return candidates.filter((w) => w && text.includes(w));
}

function firstWord(text, minLen = 3) {
  const m = String(text || "").match(/[A-Za-zÄÖÜäöüßÀ-ÿ'']+/g);
  if (!m) return null;
  return m.find((w) => w.length >= minLen) || m[0];
}

function buildIndexAlignedSectionAccents(study, cardDe) {
  const accents = {};
  const deKey = cardDe || "";

  if (study.examples?.length) {
    accents.examples = study.examples.map((ex) => {
      const de = {};
      const lv = {};
      const deHits = wordsIn(ex.de, [deKey, deKey.charAt(0).toUpperCase() + deKey.slice(1)]);
      if (deHits.length) de.blue = [deHits[0]];
      else {
        const fw = firstWord(ex.de);
        if (fw && ex.de.includes(fw)) de.blue = [fw];
      }
      const fwLv = firstWord(ex.lv, 3);
      if (fwLv && ex.lv.includes(fwLv)) lv.purple = [fwLv];
      return { de, lv };
    });
  }

  if (study.comparison?.length) {
    accents.comparison = study.comparison.map((row) => {
      const entry = {};
      if (row.word) entry.word = { green: [row.word.split(/\s+/).pop() || row.word] };
      if (row.meaning) {
        const mh = firstWord(row.meaning, 3);
        if (mh && row.meaning.includes(mh)) entry.meaning = { purple: [mh] };
      }
      if (row.example) {
        const parts = row.example.split(" – ");
        const dePart = parts[0] || row.example;
        const lvPart = parts[1] || "";
        const de = {};
        const lv = {};
        const dh = wordsIn(dePart, [deKey, firstWord(dePart)]);
        if (dh.length) de.green = [dh[0]];
        const lh = firstWord(lvPart, 3);
        if (lh && lvPart.includes(lh)) lv.purple = [lh];
        entry.example = { ...de, ...lv };
      }
      return entry;
    });
  }

  if (study.tip !== undefined) {
    if (Array.isArray(study.tip)) {
      accents.tip = study.tip.map((t) => {
        const text = typeof t === "string" ? t : t.text || "";
        const hit = firstWord(text, 4);
        return hit && text.includes(hit) ? { purple: [hit] } : {};
      });
    } else if (typeof study.tip === "object" && study.tip !== null) {
      const text = study.tip.text || "";
      const left = {};
      const dh = wordsIn(text, [deKey]);
      if (dh.length) left.blue = [dh[0]];
      const ph = firstWord(text, 4);
      if (ph && text.includes(ph)) left.purple = [ph];
      accents.tip = { left };
    }
  }

  if (study.important?.length) {
    accents.important = study.important.map((line) => {
      const hit =
        wordsIn(line, [deKey, `der ${deKey}`, `das ${deKey}`, `die ${deKey}`]).find((w) =>
          line.includes(w)
        ) || firstWord(line, 4);
      return hit && line.includes(hit) ? { blue: [hit] } : { purple: [firstWord(line, 5)] };
    });
  }

  if (Array.isArray(study.explanation) && study.explanation.length) {
    const core = study.explanation[0];
    const hit = wordsIn(core, [deKey, firstWord(core, 5)]).find((w) => core.includes(w));
    if (hit) accents.explanation = { purple: [hit] };
  } else if (typeof study.explanation === "string") {
    const hit = wordsIn(study.explanation, [deKey]).find((w) => study.explanation.includes(w));
    if (hit) accents.explanation = { blue: [hit] };
  }

  return accents;
}

function parseMaybeJson(v) {
  if (typeof v !== "string") return v;
  const t = v.trim();
  if ((t.startsWith("[") && t.endsWith("]")) || (t.startsWith("{") && t.endsWith("}"))) {
    try {
      return JSON.parse(t);
    } catch {
      return v;
    }
  }
  return v;
}

function applyFlatPatches(nested, patches) {
  const out = JSON.parse(JSON.stringify(nested));
  if (!patches) return out;
  for (const [p, value] of Object.entries(patches)) {
    const parsedValue = parseMaybeJson(value);
    if (p === "lv") {
      out.lv = parsedValue;
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
      if (!setAt(out.study, field, parsedValue)) {
        out.study[field] = parsedValue;
      }
    }
  }
  return out;
}

function scrubString(text, lang) {
  if (!text || typeof text !== "string") return text;
  let s = text;
  if (lang === "fr") {
    s = s
      .replace(/\bAtceries\b/g, "Rappelez-vous")
      .replace(/\bNepareizi\s*:\s*/g, "Incorrect : ")
      .replace(/\bPareizi\s*:\s*/g, "Correct : ")
      .replace(/Galvenā doma:/g, "Idée principale :")
      .replace(/\bnav tas pats\b/gi, "n'est pas la même chose que")
      .replace(/\blatviaksi\b/gi, "en français");
  } else if (lang === "gr") {
    s = s
      .replace(/\bAtceries\b/g, "Θυμήσου")
      .replace(/\bNepareizi\s*:\s*/g, "Λάθος : ")
      .replace(/\bPareizi\s*:\s*/g, "Σωστό : ")
      .replace(/\bGalvenā doma:/g, "Κύρια ιδέα:")
      .replace(/\bRappelez-vous\b/g, "Θυμήσου")
      .replace(/\bIncorrect\s*:\s*/g, "Λάθος : ")
      .replace(/\bCorrect\s*:\s*/g, "Σωστό : ");
  }
  return s;
}

function scrubNested(node, lang) {
  if (node == null) return node;
  if (typeof node === "string") return scrubString(node, lang);
  if (Array.isArray(node)) return node.map((v) => scrubNested(v, lang));
  if (typeof node === "object") {
    const out = {};
    for (const [k, v] of Object.entries(node)) out[k] = scrubNested(v, lang);
    return out;
  }
  return node;
}

const FR_EXTRA = {
  unter: {
    "study.tip.text": "Rappelez-vous : sous la table → unter dem Tisch.",
    "study.comparison[1].meaning": "Au-dessus / à propos de",
  },
  zu: { lv: "À • Chez", "study.translation": "À • Chez" },
  zum: {
    lv: "Au • Chez le",
    "study.translation": "Au • Chez le",
    "study.tip[0]": "Rappelez-vous : zu + dem → zum (Datif).",
  },
};

function repairCard(lang, cardKey, nested) {
  const resolved = resolveCardKey(cardKey);
  let out = JSON.parse(JSON.stringify(nested));
  const overrides = CARD_OVERRIDES[lang]?.[resolved] || CARD_OVERRIDES[lang]?.[cardKey];
  if (overrides) out = applyFlatPatches(out, overrides);
  const extra = lang === "fr" ? FR_EXTRA[resolved] || FR_EXTRA[cardKey] : null;
  if (extra) out = applyFlatPatches(out, extra);
  out = scrubNested(out, lang);
  out.study.sectionAccents = buildIndexAlignedSectionAccents(out.study, resolved);
  return out;
}

function nestedToFlatPatches(nested) {
  const flat = {};
  if (nested.lv !== undefined) flat.lv = nested.lv;
  const study = nested.study || {};

  if (study.translation !== undefined) flat["study.translation"] = study.translation;

  if (study.explanation !== undefined) {
    if (Array.isArray(study.explanation)) {
      flat["study.explanation"] = JSON.stringify(study.explanation);
    } else {
      flat["study.explanation"] = study.explanation;
    }
  }

  for (const key of ["examples", "comparison", "info", "important"]) {
    if (study[key] !== undefined) flat[`study.${key}`] = JSON.stringify(study[key]);
  }

  if (study.tip !== undefined) {
    if (Array.isArray(study.tip) || (typeof study.tip === "object" && study.tip !== null)) {
      flat["study.tip"] = JSON.stringify(study.tip);
    } else {
      flat["study.tip"] = study.tip;
    }
  }

  if (study.sectionAccents !== undefined) {
    flat["study.sectionAccents"] = study.sectionAccents;
  }
  if (study.accents !== undefined) flat["study.accents"] = study.accents;

  return flat;
}

function buildCompositeForCard(lang, cardKey) {
  const nested = loadNested(lang, cardKey);
  const repaired = repairCard(lang, cardKey, nested);
  return nestedToFlatPatches(repaired);
}

function buildFindingMaps() {
  const { rows } = loadCsv(
    path.join(__dirname, "../../reports/g2-a1-owner/batches-pending/LRB-020-input.csv")
  );
  const findingToCard = {};
  const findingToLang = {};
  for (const row of rows) {
    findingToCard[row.finding_stable_ids] = row.card_object_id.split("|")[0];
    findingToLang[row.finding_stable_ids] = row.languages;
  }
  return { findingToCard, findingToLang, rows };
}

const { findingToCard: FINDING_TO_CARD, findingToLang: FINDING_TO_LANG } = buildFindingMaps();

const COMPOSITE_BY_CARD = {};
for (const row of buildFindingMaps().rows) {
  const cardKey = row.card_object_id.split("|")[0];
  const lang = row.languages;
  const key = `${lang}:${cardKey}`;
  if (!COMPOSITE_BY_CARD[key]) {
    COMPOSITE_BY_CARD[key] = buildCompositeForCard(lang, cardKey);
  }
}

const COMPOSITE_BY_ID = {};
for (const [id, cardKey] of Object.entries(FINDING_TO_CARD)) {
  const lang = FINDING_TO_LANG[id];
  COMPOSITE_BY_ID[id] = COMPOSITE_BY_CARD[`${lang}:${cardKey}`];
}

module.exports = {
  FINDING_TO_CARD,
  FINDING_TO_LANG,
  loadNested,
  repairCard,
  nestedToFlatPatches,
  buildCompositeForCard,
  buildIndexAlignedSectionAccents,
  applyFlatPatches,
  scrubNested,
  COMPOSITE_BY_ID,
  COMPOSITE_BY_CARD,
  CARD_KEY_ALIASES,
  resolveCardKey,
  CARD_OVERRIDES,
};
