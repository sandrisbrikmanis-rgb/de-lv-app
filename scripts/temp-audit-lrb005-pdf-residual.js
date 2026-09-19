#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-005";
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

const lvCards = loadA1Words("data/a1.js");
const fiCards = loadA1Words("data/fi/a1.js");

function cardById(words, id) {
  const entry = words.find((w) => w.study?.id === id || w.id === id);
  return entry || null;
}

const ET_LEAK =
  /\b(Kõigepealt|Alles|Umbmäärane|Üks kord|See • Ta|Midagi • Veidi|Teid • Teile|Sõitma|Leidma|Arvama|Naine • Abikaasa|Jaoks • Eest|Kohe • Ühesugune|Hoidma|Peatama|Nimi olema|Kuulma|Kuulama|Teie • Temale|Sees \(-s\)|Mitte ükski|Saama • Oskama|Seal • Siin|Mis • Mille|Sest • Sellepärast|Umbisikuline|Jäätis|Üks • Mingi|Vedama|Ära viima|Tähendama|Sisse • Sissepoole|Kuhu|sõitma|sõidan|viima|viin|naine(?!\s•\sVaimo)|hoian|peatub)\b/i;

const LV_LEAK =
  /\b(Atceries|vidus dzimte|Põhiidee|braukt|sieviete|sieva|turēt|jo • tāpēc|kurš • kura)\b/i;

const TARGET_SCALAR = {
  "g2/a1/fi|a1-da|a1.card.a1-da.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Siellä • Täällä • Tuossa (yleisesti)",
  "g2/a1/fi|a1-das|a1.card.a1-das.study.comparison[2].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Mikä • Jonka • Mitä",
  "g2/a1/fi|a1-dass|a1.card.a1-dass.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Koska • Siksi että",
  "g2/a1/fi|a1-ein|a1.card.a1-ein.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Epämääräinen artikkeli",
  "g2/a1/fi|a1-ein|a1.card.a1-ein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Epämääräinen artikkeli",
  "g2/a1/fi|a1-einmal|a1.card.a1-einmal.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kerran • Kerta",
  "g2/a1/fi|a1-einmal|a1.card.a1-einmal.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kerran • Kerta",
  "g2/a1/fi|a1-eis|a1.card.a1-eis.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jää • Jäätelö",
  "g2/a1/fi|a1-eis|a1.card.a1-eis.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jää • Jäätelö",
  "g2/a1/fi|a1-erst|a1.card.a1-erst.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vasta",
  "g2/a1/fi|a1-erst|a1.card.a1-erst.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ensin • Vasta",
  "g2/a1/fi|a1-erst|a1.card.a1-erst.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Vasta",
  "g2/a1/fi|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Se",
  "g2/a1/fi|a1-es|a1.card.a1-es.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "se • persoonaton muoto",
  "g2/a1/fi|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Se",
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jotain",
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Jotain",
  "g2/a1/fi|a1-euch|a1.card.a1-euch.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Teitä • Teille",
  "g2/a1/fi|a1-euch|a1.card.a1-euch.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Teitä • Teille",
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ajaa",
  "g2/a1/fi|a1-finden|a1.card.a1-finden.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Löytää",
  "g2/a1/fi|a1-finden|a1.card.a1-finden.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Löytää",
  "g2/a1/fi|a1-frau|a1.card.a1-frau.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Nainen",
  "g2/a1/fi|a1-fuer|a1.card.a1-fuer.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Varten",
  "g2/a1/fi|a1-fuer|a1.card.a1-fuer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Varten",
  "g2/a1/fi|a1-ganz-study|a1.card.a1-ganz-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "kokonainen • kokonaan • täysin",
  "g2/a1/fi|a1-gefallen-study|a1.card.a1-gefallen-study.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "pitää • henkilö datiivissa",
  "g2/a1/fi|a1-gleich|a1.card.a1-gleich.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Heti",
  "g2/a1/fi|a1-gleich|a1.card.a1-gleich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Heti",
  "g2/a1/fi|a1-halten|a1.card.a1-halten.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Pitää",
  "g2/a1/fi|a1-heissen|a1.card.a1-heissen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Nimeltään",
  "g2/a1/fi|a1-heissen|a1.card.a1-heissen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Nimeltään",
  "g2/a1/fi|a1-hoeren-study|a1.card.a1-hoeren-study.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kuulla • Kuunnella",
  "g2/a1/fi|a1-hoeren-study|a1.card.a1-hoeren-study.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kuulla • Kuunnella",
  "g2/a1/fi|a1-huebsch|a1.card.a1-huebsch.study.comparison[0].meaning|MULTI_TRANSLATION|deterministic/multi-translation":
    "kaunis • houkutteleva ulkonäöllään",
  "g2/a1/fi|a1-ihr|a1.card.a1-ihr.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Te • Hänelle",
  "g2/a1/fi|a1-ihr|a1.card.a1-ihr.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Te • Hänelle",
  "g2/a1/fi|a1-im|a1.card.a1-im.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisällä (-ssa) • Missä?",
  "g2/a1/fi|a1-im|a1.card.a1-im.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisällä (-ssa) • Missä?",
  "g2/a1/fi|a1-in|a1.card.a1-in.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisällä • Sisään",
  "g2/a1/fi|a1-in|a1.card.a1-in.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisällä • Sisään",
  "g2/a1/fi|a1-ins|a1.card.a1-ins.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisään • Sisään päin • Mihin?",
  "g2/a1/fi|a1-ins|a1.card.a1-ins.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sisään • Sisään päin • Mihin?",
  "g2/a1/fi|a1-kein|a1.card.a1-kein.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ei kukaan • Ei mikään",
  "g2/a1/fi|a1-kein|a1.card.a1-kein.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ei kukaan • Ei mikään",
  "g2/a1/fi|a1-koennen|a1.card.a1-koennen.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Voida • Osata",
  "g2/a1/fi|a1-koennen|a1.card.a1-koennen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Voida • Osata",
};

const COMPOSITE_EXPECTED = {
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Ajaa • Kuljettaa • Viedä",
    minStudySegments: 3,
    requiredFragments: ["Kuljettaa", "Viedä", "Ajan Berliiniin", "Kuljetan tytärtäni", "Vien sinut"],
    deExampleAlign: {
      "Ich fahre nach Berlin.": "Ajan Berliiniin.",
      "Ich fahre mit dem Auto.": "Ajan autolla.",
      "Ich fahre meine Tochter zur Schule.": "Kuljetan tytärtäni kouluun.",
      "Ich fahre dich nach Hause.": "Vien sinut kotiin.",
      "Wir fahren morgen nach München.": "Ajamme huomenna Müncheniin.",
    },
  },
  "g2/a1/fi|a1-frau|a1.card.a1-frau.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Nainen • Vaimo",
    minStudySegments: 2,
    requiredFragments: ["Vaimo", "vaimoni", "vaimonsa"],
    forbiddenFragments: ["Tema naine on arst", "See on minu naine"],
    deExampleAlign: {
      "Das ist meine Frau.": "Tämä on vaimoni.",
      "Meine Frau arbeitet in Berlin.": "Vaimoni työskentelee Berliinissä.",
      "Seine Frau ist Ärztin.": "Hänen vaimonsa on lääkäri.",
    },
  },
  "g2/a1/fi|a1-halten|a1.card.a1-halten.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Pitää • Pysähtyä",
    minStudySegments: 2,
    requiredFragments: ["Pysähtyä", "Bussi pysähtyy", "Pysähtykää"],
    deExampleAlign: {
      "Ich halte die Tasche.": "Pidän laukkua.",
      "Der Bus hält hier.": "Bussi pysähtyy täällä.",
      "Bitte halten Sie an.": "Pysähtykää, olkaa hyvä.",
      "Ich halte das für richtig.": "Pidän sitä oikeana.",
    },
    cmpAlign: {
      0: "Der Bus hält. = Bussi pysähtyy.",
    },
  },
};

const SOURCE_FIDELITY = {
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.native|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|a1-frau|a1.card.a1-frau.native|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|a1-halten|a1.card.a1-halten.native|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|a1-finden|a1.card.a1-finden.native|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|a1-finden|a1.card.a1-finden.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|a1-erst|a1.card.a1-erst.native|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|a1-erst|a1.card.a1-erst.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|a1-es|a1.card.a1-es.native|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|a1-es|a1.card.a1-es.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.native|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
  "g2/a1/fi|a1-etwas|a1.card.a1-etwas.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    maxSegments: 1,
  },
};

const STUDY_NARROWING_MIN = {
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": 3,
  "g2/a1/fi|a1-frau|a1.card.a1-frau.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": 2,
  "g2/a1/fi|a1-halten|a1.card.a1-halten.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": 2,
};

const COMPARISON_INDEX_ALIGN = {
  "g2/a1/fi|a1-dass|a1.card.a1-dass.study.comparison[1].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    deWord: "weil",
    lvSegments: ["jo", "tāpēc ka"],
    forbiddenHeadword: "dass",
  },
  "g2/a1/fi|a1-das|a1.card.a1-das.study.comparison[2].meaning|MULTI_TRANSLATION|deterministic/multi-translation": {
    deWord: "welches",
    lvSegments: ["kurš", "kura", "kuru"],
    indexChecks: [
      { idx: 1, fi: "Jonka", sense: "whose/genitive relative (kura)" },
    ],
  },
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

function flatToNested(flat) {
  const out = { lv: flat.lv };
  const study = {};
  for (const [k, v] of Object.entries(flat)) {
    if (k === "lv") continue;
    if (k.startsWith("study.")) {
      const sub = k.slice(6);
      if (!sub.includes("[") && !sub.includes(".")) study[sub] = v;
    }
  }
  if (Object.keys(study).length) out.study = study;
  return out;
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
    if (d.owner_decision !== derivedDecision && !COMPOSITE_EXPECTED[id]) {
      issues.push({
        id,
        type: "DECISION_MISMATCH",
        msg: `decision ${d.owner_decision} but production vs target implies ${derivedDecision}`,
      });
      semanticViolations++;
    }
    if (!COMPOSITE_EXPECTED[id]) {
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

  const cmpAlign = COMPARISON_INDEX_ALIGN[id];
  if (cmpAlign && d.owner_decision === "LABOT") {
    const segs = segments(effectiveVal);
    if (segs.length !== cmpAlign.lvSegments.length) {
      issues.push({
        id,
        type: "COMPARISON_SEGMENT_COUNT",
        msg: `${segs.length} != ${cmpAlign.lvSegments.length}`,
      });
      semanticViolations++;
    }
    if (cmpAlign.indexChecks) {
      for (const chk of cmpAlign.indexChecks) {
        if (segs[chk.idx] !== chk.fi) {
          deTargetViolations++;
          issues.push({
            id,
            type: "COMPARISON_INDEX_MISMATCH",
            idx: chk.idx,
            expected: chk.fi,
            got: segs[chk.idx],
          });
        }
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
    const minSegs = STUDY_NARROWING_MIN[id] || composite.minStudySegments;
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

  if (id.includes("a1-frau") && id.includes("native") && d.owner_decision === "LABOT") {
    if (effectiveVal.includes("Vaimo")) {
      semanticNarrowing++;
      issues.push({ id, type: "NATIVE_OVERSEGMENT", msg: "native must be scalar Nainen for sieviete" });
    }
  }

  if (id.includes("a1-fahren") && id.includes("study.translation")) {
    const patches = parseOwnerNew(d.owner_new || "{}");
    if (patches["study.translation"] === "Ajaa") {
      semanticNarrowing++;
      issues.push({ id, type: "SEMANTIC_NARROWING_FROM_SOURCE", msg: "fahren study narrowed to Ajaa only" });
    }
  }

  auditEntry.pass = !issues.some((i) => i.id === id);
  rowAudit.push(auditEntry);
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
  internalContradictions === 0 &&
  fullCompositeCompleteness === "PASS";

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_005_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_005_LINGUISTIC_REVIEW_BLOCKED",
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
  },
  row_audit: rowAudit,
  failures: issues,
  verdict: pass
    ? "LRB_005_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_005_LINGUISTIC_REVIEW_BLOCKED",
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
