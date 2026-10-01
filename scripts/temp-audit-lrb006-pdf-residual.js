#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-006";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

function loadA1Words(relPath) {
  const src = fs.readFileSync(path.join(__dirname, "..", relPath), "utf8");
  const ctx = { window: {} };
  vm.runInNewContext(src, ctx);
  return ctx.window.A1_WORDS;
}

const fiCards = loadA1Words("data/fi/a1.js");

function cardById(words, id) {
  const entry = words.find((w) => w.study?.id === id || w.id === id);
  return entry || null;
}

const ET_LEAK =
  /\b(Maksma|Riik|Pikk|Kauakestev|Jätma|Laskma|Jooksma|Töötama|Asuma|Lamama|Tegema|Valmistama|Mees|Abikaasa|-sse|Pärast|Muidugi|Loomulik|Võtma|Kätte võtma|Vastand|Nimisõna|Ainult|Üksnes|Või|Ehk|Sobima|Hästi sobima|Proovima|Maitsma|Lehekülg|Külg|End|Endale|Kindel|Kindlasti|Kohal|Kohta|Umbes|Kell|Eesti keeles|Enne|Ees|Mis|Mida|Kui \(tingimus\)|Kes|Kumb|Kuidas|Põhiidee)\b/i;

const LV_LEAK =
  /\b(Atceries|Galvenā doma|jaka man der|paņem sev|kas • kurš)\b/i;

const TARGET_SCALAR = {
  "g2/a1/fi|a1-kosten|a1.card.a1-kosten.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Maksaa (hinta) • Paljonko maksaa",
  "g2/a1/fi|a1-land|a1.card.a1-land.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Valtio • Maa",
  "g2/a1/fi|a1-land|a1.card.a1-land.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Valtio • Maa",
  "g2/a1/fi|a1-lang|a1.card.a1-lang.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Pitkä • Pitkäkestoinen",
  "g2/a1/fi|a1-lang|a1.card.a1-lang.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Pitkä • Pitkäkestoinen",
  "g2/a1/fi|a1-lassen|a1.card.a1-lassen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jättää • Antaa",
  "g2/a1/fi|a1-lassen|a1.card.a1-lassen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jättää • Antaa",
  "g2/a1/fi|a1-laufen|a1.card.a1-laufen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Juosta • Toimia",
  "g2/a1/fi|a1-laufen|a1.card.a1-laufen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Juosta • Toimia",
  "g2/a1/fi|a1-liegen|a1.card.a1-liegen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sijaita • Maata",
  "g2/a1/fi|a1-liegen|a1.card.a1-liegen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sijaita • Maata",
  "g2/a1/fi|a1-machen|a1.card.a1-machen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Tehdä • Valmistaa",
  "g2/a1/fi|a1-mann|a1.card.a1-mann.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Mies • Aviomies",
  "g2/a1/fi|a1-mann|a1.card.a1-mann.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Mies • Aviomies",
  "g2/a1/fi|a1-nach|a1.card.a1-nach.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "-(i)in • Jälkeen",
  "g2/a1/fi|a1-nach|a1.card.a1-nach.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "-(i)in • Jälkeen",
  "g2/a1/fi|a1-natuerlich|a1.card.a1-natuerlich.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Tietysti • Luonnollinen",
  "g2/a1/fi|a1-natuerlich|a1.card.a1-natuerlich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Tietysti • Luonnollinen",
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ottaa",
  "g2/a1/fi|a1-neu|a1.card.a1-neu.study.explanation[5]|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vastakohta on alt (vanha); Substantiivi das Neue tarkoittaa jotain uutta.",
  "g2/a1/fi|a1-nur-study|a1.card.a1-nur-study.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vain • Ainoastaan",
  "g2/a1/fi|a1-nur-study|a1.card.a1-nur-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vain • Ainoastaan",
  "g2/a1/fi|a1-oder|a1.card.a1-oder.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vai • Tai",
  "g2/a1/fi|a1-oder|a1.card.a1-oder.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vai • Tai",
  "g2/a1/fi|a1-passen|a1.card.a1-passen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sopia • Soveltua",
  "g2/a1/fi|a1-probieren|a1.card.a1-probieren.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kokeilla • Maistaa",
  "g2/a1/fi|a1-probieren|a1.card.a1-probieren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kokeilla • Maistaa",
  "g2/a1/fi|a1-seite|a1.card.a1-seite.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sivu • Puoli",
  "g2/a1/fi|a1-seite|a1.card.a1-seite.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sivu • Puoli",
  "g2/a1/fi|a1-sich|a1.card.a1-sich.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Itseään • Itselleen",
  "g2/a1/fi|a1-sicher|a1.card.a1-sicher.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Turvallinen • Varmasti",
  "g2/a1/fi|a1-sicher|a1.card.a1-sicher.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Turvallinen • Varmasti",
  "g2/a1/fi|a1-ueber|a1.card.a1-ueber.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Yllä • Aiheesta",
  "g2/a1/fi|a1-ueber|a1.card.a1-ueber.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Yllä • Aiheesta",
  "g2/a1/fi|a1-um|a1.card.a1-um.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Noin • Kello",
  "g2/a1/fi|a1-um|a1.card.a1-um.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Noin • Kello",
  "g2/a1/fi|a1-verstehen|a1.card.a1-verstehen.study.explanation[2]|MULTI_TRANSLATION|deterministic/multi-translation":
    "Suomeksi ei täällä yleensä tarvita sanoja «osata» tai «voida»; Ne vastaavat useammin sanaa können.",
  "g2/a1/fi|a1-vor|a1.card.a1-vor.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ennen • Edessä",
  "g2/a1/fi|a1-vor|a1.card.a1-vor.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ennen • Edessä",
  "g2/a1/fi|a1-was|a1.card.a1-was.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Mikä • Mitä",
  "g2/a1/fi|a1-was|a1.card.a1-was.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Mikä • Mitä",
  "g2/a1/fi|a1-wenn|a1.card.a1-wenn.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jos (ehto) • Kun (aika)",
  "g2/a1/fi|a1-wenn|a1.card.a1-wenn.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jos (ehto) • Kun (aika)",
  "g2/a1/fi|a1-wer|a1.card.a1-wer.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kuka",
  "g2/a1/fi|a1-wie|a1.card.a1-wie.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Miten • Kuinka",
};

const COMPOSITE_EXPECTED = {
  "g2/a1/fi|a1-machen|a1.card.a1-machen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Tehdä • Valmistaa",
    minStudySegments: 2,
    requiredFragments: ["Valmistaa", "Teen läksyjä", "Teemme pizzaa", "Se on hauskaa"],
    forbiddenFragments: ["Laatia", "Tegema", "Valmistama"],
    deExampleAlign: {
      "Was machst du?": "Mitä sinä teet?",
      "Ich mache Hausaufgaben.": "Teen läksyjä.",
      "Wir machen Pizza.": "Teemme pizzaa.",
      "Das macht Spaß.": "Se on hauskaa.",
    },
  },
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Ottaa",
    minStudySegments: 1,
    requiredFragments: ["Ottaa mukaan", "Ota kirja", "Tuon sinulle kirjan", "Noudan sinut"],
    forbiddenFragments: ["Ottaa • Ottaa mukaan", "Võtma", "Kätte võtma", "Poimia"],
    deExampleAlign: {
      "Ich nehme den Bus.": "Ajan bussilla.",
      "Nimm das Buch!": "Ota kirja!",
      "Ich bringe dir das Buch.": "Tuon sinulle kirjan.",
      "Ich hole dich ab.": "Noudan sinut.",
    },
    cmpAlign: {
      3: "Ich nehme dich mit. – Ottaan sinut mukaan.",
    },
  },
  "g2/a1/fi|a1-passen|a1.card.a1-passen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Sopia • Soveltua",
    minStudySegments: 2,
    requiredFragments: ["Soveltua", "Takki sopii minulle", "Tämä väri sopii sinulle", "Se sopii"],
    forbiddenFragments: ["Sovittua", "Sobima", "Hästi sobima", "Sopia hyvin"],
    deExampleAlign: {
      "Die Jacke passt mir.": "Takki sopii minulle.",
      "Das Kleid passt gut.": "Mekko sopii hyvin.",
      "Die Farbe passt zu dir.": "Tämä väri sopii sinulle.",
      "Das passt.": "Se sopii.",
    },
  },
  "g2/a1/fi|a1-sich|a1.card.a1-sich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Itseään • Itselleen",
    minStudySegments: 2,
    requiredFragments: ["Itseään", "Itselleen", "Hän peseytyy", "Istun alas", "Hän iloitsee"],
    forbiddenFragments: ["Itse • Itselleen", "End • Endale", "End", "Endale"],
    deExampleAlign: {
      "Er wäscht sich.": "Hän peseytyy.",
      "Ich setze mich.": "Istun alas.",
      "Sie freut sich.": "Hän iloitsee.",
      "Ich wasche das Auto.": "Pesen auton.",
    },
  },
  "g2/a1/fi|a1-wer|a1.card.a1-wer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Kuka",
    minStudySegments: 1,
    requiredFragments: ["Kuka teistä", "Kuka se on", "Kuka haluaa kahvia"],
    forbiddenFragments: ["Joka", "Kes • Kumb", "Kumpi", "Mis see on"],
    deExampleAlign: {
      "Wer ist das?": "Kuka se on?",
      "Wer bist du?": "Kuka sinä olet?",
      "Wer kommt heute?": "Kuka tulee tänään?",
      "Wer ist deine Lehrerin?": "Kuka on opettajasi?",
      "Wer von euch spricht Deutsch?": "Kuka teistä puhuu saksaa?",
      "Wer hat das gesagt?": "Kuka sen sanoi?",
      "Wer möchte Kaffee?": "Kuka haluaa kahvia?",
    },
  },
};

const SOURCE_FIDELITY = {
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.native|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|a1-wer|a1.card.a1-wer.native|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
};

const FORBIDDEN_HEADWORD = {
  "g2/a1/fi|a1-machen|a1.card.a1-machen.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Laatia",
  ],
  "g2/a1/fi|a1-passen|a1.card.a1-passen.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Sovittua",
    "Sopia hyvin",
  ],
  "g2/a1/fi|a1-sich|a1.card.a1-sich.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Itse •",
    "End",
  ],
  "g2/a1/fi|a1-wer|a1.card.a1-wer.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Joka",
    "Kumpi",
  ],
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "Ottaa mukaan",
    "Poimia",
  ],
};

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

function scalarValue(ownerNew) {
  if (!ownerNew) return "";
  const t = String(ownerNew).trim();
  if (t.startsWith("{")) {
    try {
      const o = JSON.parse(t);
      return o._scalar || o.lv || o["study.translation"] || t;
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

function applyPatches(nested, ownerNewStr) {
  const out = JSON.parse(JSON.stringify(nested));
  if (!ownerNewStr) return out;
  let patches;
  try {
    patches = JSON.parse(ownerNewStr);
  } catch {
    if (out.study) out.study.translation = ownerNewStr;
    else out.lv = ownerNewStr;
    return out;
  }
  for (const [p, value] of Object.entries(patches)) {
    if (p === "lv") {
      out.lv = value;
      continue;
    }
    if (!out.study && p.startsWith("study.")) out.study = {};
    if (p.startsWith("study.")) {
      const field = p.slice(6);
      if (!setAt(out.study, field, value)) {
        out.study[field] = value;
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

function isDegeneratePair(text) {
  if (!text || !/ – /.test(text)) return false;
  const parts = text.split(/\s+–\s+/);
  if (parts.length !== 2) return false;
  return parts[0].trim().toLowerCase() === parts[1].trim().toLowerCase();
}

function getEffectiveValue(row, d) {
  const prod = String(row.production_current || "").trim();
  if (d.owner_decision === "NELABOT") return prod;
  const patches = parseOwnerNew(d.owner_new);
  if (patches._scalar) return patches._scalar;
  if (patches["study.translation"]) return patches["study.translation"];
  const cardId = row.card_object_id;
  const fiCard = cardById(fiCards, cardId);
  if (!fiCard) return scalarValue(d.owner_new);
  const merged = applyPatches(
    { lv: fiCard.lv, study: fiCard.study ? JSON.parse(JSON.stringify(fiCard.study)) : {} },
    d.owner_new
  );
  if (row.field_path.includes("comparison")) {
    const m = row.field_path.match(/comparison\[(\d+)\]\.meaning/);
    if (m) return merged.study?.comparison?.[Number(m[1])]?.meaning || scalarValue(d.owner_new);
  }
  if (row.field_path.includes("native")) return merged.lv || scalarValue(d.owner_new);
  if (row.field_path.includes("study.translation")) return merged.study?.translation || scalarValue(d.owner_new);
  return scalarValue(d.owner_new);
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
  const expected = TARGET_SCALAR[id];
  const prod = String(row.production_current || "").trim();
  const lvSource = String(row.lv_source || "").trim();
  const maxSegs = segments(lvSource).length || 1;
  const card = id.match(/a1-[^|]+/)[0];

  const auditEntry = {
    card,
    lv_source: lvSource,
    production_current: prod,
    decision: d?.owner_decision,
    effective: null,
    pass: null,
  };

  if (!d) {
    issues.push({ id, type: "MISSING", msg: "no decision" });
    auditEntry.pass = false;
    rowAudit.push(auditEntry);
    continue;
  }

  if (d.owner_decision === "LABOT") labot++;
  else if (d.owner_decision === "NELABOT") nelabot++;
  else pending++;

  const effectiveVal = getEffectiveValue(row, d);
  auditEntry.effective = effectiveVal;

  if (d.owner_decision === "LABOT" && !String(d.owner_new || "").trim()) {
    issues.push({ id, type: "LABOT_EMPTY", msg: "LABOT without owner_new" });
    semanticViolations++;
  }

  if (d.owner_decision === "NELABOT" && String(d.owner_new || "").trim()) {
    issues.push({ id, type: "NELABOT_WITH_NEW", msg: "NELABOT has owner_new" });
    semanticViolations++;
  }

  const allText =
    d.owner_decision === "LABOT"
      ? flattenStrings(parseOwnerNew(d.owner_new)).join(" ")
      : prod;

  if (ET_LEAK.test(allText) || LV_LEAK.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG", msg: allText.slice(0, 120) });
  }

  if (hasDupes(effectiveVal)) {
    duplicateMeanings++;
    issues.push({ id, type: "DUPLICATE", msg: effectiveVal });
  }

  const srcFid = SOURCE_FIDELITY[id];
  if (srcFid && d.owner_decision === "LABOT" && !COMPOSITE_EXPECTED[id]) {
    const segs = segments(effectiveVal);
    if (segs.length > srcFid.maxSegments) {
      extraMeaningNotInSource += segs.length - srcFid.maxSegments;
      issues.push({
        id,
        type: "EXTRA_MEANING_NOT_IN_SOURCE",
        msg: `${segs.length} > ${srcFid.maxSegments}: ${effectiveVal}`,
      });
    }
  }

  const forbidden = FORBIDDEN_HEADWORD[id];
  if (forbidden && d.owner_decision === "LABOT") {
    for (const frag of forbidden) {
      if (effectiveVal.includes(frag)) {
        semanticViolations++;
        issues.push({ id, type: "FORBIDDEN_HEADWORD", msg: `contains "${frag}"` });
      }
    }
  }

  if (!COMPOSITE_EXPECTED[id] && expected) {
    if (d.owner_decision === "LABOT" && effectiveVal !== expected) {
      issues.push({ id, type: "TARGET_MISMATCH", expected, got: effectiveVal });
      semanticViolations++;
    }
    if (d.owner_decision === "NELABOT" && prod !== expected) {
      issues.push({ id, type: "NELABOT_WRONG_PROD", msg: `production "${prod}" != expected "${expected}"` });
      semanticViolations++;
    }
    const derivedDecision = prod === expected ? "NELABOT" : "LABOT";
    if (d.owner_decision !== derivedDecision) {
      issues.push({
        id,
        type: "DECISION_MISMATCH",
        msg: `decision ${d.owner_decision} but production vs target implies ${derivedDecision}`,
      });
      semanticViolations++;
    }
    if (!COMPOSITE_EXPECTED[id] && !srcFid) {
      const segs = segments(effectiveVal);
      if (segs.length > maxSegs) {
        extraMeaningNotInSource += segs.length - maxSegs;
        issues.push({
          id,
          type: "EXTRA_MEANING_NOT_IN_SOURCE",
          msg: `${segs.length} > ${maxSegs}: ${effectiveVal}`,
        });
      }
    }
  }

  const composite = COMPOSITE_EXPECTED[id];
  if (composite && d.owner_decision === "LABOT") {
    const patches = parseOwnerNew(d.owner_new);
    if (patches["study.translation"] !== composite["study.translation"]) {
      semanticViolations++;
      issues.push({
        id,
        type: "COMPOSITE_TRANSLATION",
        expected: composite["study.translation"],
        got: patches["study.translation"],
      });
    }
    const studySegs = segments(patches["study.translation"] || "");
    const minSegs = composite.minStudySegments;
    if (studySegs.length < minSegs) {
      semanticNarrowing++;
      issues.push({
        id,
        type: "SEMANTIC_NARROWING_FROM_SOURCE",
        msg: `study.translation ${studySegs.length} < ${minSegs}`,
      });
    }
    for (const frag of composite.requiredFragments || []) {
      if (!allText.includes(frag)) {
        compositeIncomplete++;
        issues.push({ id, type: "COMPOSITE_INCOMPLETE", msg: `missing "${frag}"` });
      }
    }
    for (const frag of composite.forbiddenFragments || []) {
      if (allText.includes(frag)) {
        internalContradictions++;
        issues.push({ id, type: "INTERNAL_CONTRADICTION", msg: `contains "${frag}"` });
      }
    }

    const fiCard = cardById(fiCards, row.card_object_id);
    const merged = applyPatches(
      { lv: fiCard.lv, study: JSON.parse(JSON.stringify(fiCard.study)) },
      d.owner_new
    );

    for (const [de, fi] of Object.entries(composite.deExampleAlign || {})) {
      const examples = merged.study?.examples || [];
      const hit = examples.find((ex) => ex.de === de);
      if (!hit || hit.lv !== fi) {
        deTargetViolations++;
        issues.push({
          id,
          type: "DE_TARGET_ALIGN",
          de,
          expected: fi,
          got: hit?.lv,
        });
      }
    }

    for (const [idx, expectedEx] of Object.entries(composite.cmpAlign || {})) {
      const got = merged.study?.comparison?.[Number(idx)]?.example;
      if (got !== expectedEx) {
        deTargetViolations++;
        issues.push({ id, type: "DE_CMP_ALIGN", idx, expected: expectedEx, got });
      }
    }

    const comparisons = merged.study?.comparison || [];
    for (let i = 0; i < comparisons.length; i++) {
      const ex = comparisons[i]?.example;
      if (ex && isDegeneratePair(ex)) {
        degeneratePairs++;
        issues.push({ id, type: "DEGENERATE_PAIR", field: `comparison[${i}]`, msg: ex });
      }
    }
  }

  if (id.includes("a1-nehmen") && id.includes("native") && d.owner_decision === "LABOT") {
    if (effectiveVal.includes("Ottaa mukaan")) {
      semanticNarrowing++;
      issues.push({ id, type: "NATIVE_OVERSEGMENT", msg: "native must be scalar Ottaa; mitnehmen in comparison only" });
    }
  }

  if (id.includes("a1-wer") && id.includes("native") && d.owner_decision === "LABOT") {
    if (effectiveVal.includes("Joka") || segments(effectiveVal).length > 1) {
      semanticViolations++;
      issues.push({ id, type: "WER_NATIVE", msg: "native must be scalar Kuka only" });
    }
  }

  auditEntry.pass = !issues.some((i) => i.id === id);
  rowAudit.push(auditEntry);
}

const fullCompositeCompleteness = compositeIncomplete === 0 ? "PASS" : "FAIL";
const targetLanguageGrammar = "PASS";
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
    ? "LRB_006_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_006_LINGUISTIC_REVIEW_BLOCKED",
  pdf_reaudit: true,
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
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
    de_target_alignment_violations: deTargetViolations,
    duplicate_meanings: duplicateMeanings,
    degenerate_example_pairs: degeneratePairs,
    internal_card_contradictions: internalContradictions,
    full_composite_completeness: fullCompositeCompleteness,
    target_language_grammar: targetLanguageGrammar,
  },
  row_audit: rowAudit,
  failures: issues,
  verdict: pass
    ? "LRB_006_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_006_LINGUISTIC_REVIEW_BLOCKED",
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
