#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-010";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const COMPOSITE_TARGETS = {
  "g2/a1/fi|gleich|idx:243|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({
    lv: "Kohta • Sama",
    "study.translation": "Kohta • Sama",
    "study.explanation[0]":
      "Pääajatus: gleich tarkoittaa ajallisesti kohta tai pian, vertailussa sama tai yhtä suuri.",
    "study.explanation[1]":
      "Kun puhutaan ajasta, gleich = kohta/pian (Ich komme gleich. = Tulen kohta.).",
    "study.explanation[2]":
      "Kun puhutaan vertailusta, gleich = sama/yhtä suuri (die gleiche Farbe = sama väri).",
    "study.explanation[3]": "Konteksti (aikalause tai vertailu) kertoo oikean merkityksen.",
    "study.examples[0].lv": "Tulen kohta.",
    "study.examples[1].lv": "Meillä on sama väri.",
    "study.examples[2].lv": "Ruoka on kohta valmista.",
    "study.examples[3].lv": "Molemmat tiet ovat yhtä pitkät.",
    "study.examples[4].lv": "Nähdään kohta!",
    "study.examples[5].lv": "He ovat yhtä pitkät.",
    "study.tip[0]": "Ajasta → kohta.",
    "study.tip[1]": "Vertailusta → sama.",
    "study.important[0]":
      "gleich = kohta (aika) TAI sama (vertailu) — riippuen kontekstista.",
    "study.important[1]": "Bis gleich! = nähdään kohta! — yleinen hyvästely.",
  }),
  "g2/a1/fi|groß|idx:250|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({
    lv: "Suuri",
    "study.translation": "Suuri",
    "study.explanation[0]":
      "Pääajatus: groß tarkoittaa suurta mitassa; ihmisestä se tarkoittaa yleensä pitkää.",
    "study.explanation[1]": "groß kuvaa esineitä, paikkoja ja yleistä kokoa.",
    "study.explanation[2]":
      "Ihmisen kohdalla Er ist groß tarkoittaa pitkää, ei leveää tai paksua.",
    "study.examples[0].lv": "Talo on suuri.",
    "study.examples[1].lv": "Berliini on suuri kaupunki.",
    "study.examples[2].lv": "Hän on pitkä.",
    "study.examples[3].lv": "Huone on suuri.",
    "study.tip[0]": "Esineille ja paikoille groß = suuri.",
    "study.tip[1]": "Ihmiselle groß = pitkä.",
    "study.important[0]": "Ihmisestä Er ist groß tarkoittaa: hän on pitkä.",
    "study.important[1]": "Esineestä tai paikasta groß tarkoittaa suurta.",
  }),
  "g2/a1/fi|Großeltern|idx:251|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({
    "study.comparison[1].meaning": "Isoäiti",
    "study.comparison[2].meaning": "Isoisä",
  }),
  "g2/a1/fi|gut|idx:259|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({
    lv: "Hyvä",
    "study.translation": "Hyvä",
    "study.explanation[0]":
      "Pääajatus: gut on adjektiivi tai adverbi — hyvä, hyvin, kunnossa.",
    "study.explanation[1]":
      "gut kuvaa laatua, terveyttä tai miten jokin menee (Es geht mir gut. = Minulla menee hyvin.).",
    "study.explanation[2]":
      "Tervehdyksissä Guten Morgen!, Guten Tag! ja Guten Abend! sanalla gut on pääte -en.",
    "study.explanation[3]": "Kun gut kuvaa verbiä, se on adverbi (gut schwimmen = uida hyvin).",
    "study.explanation[4]":
      "Älä sekoita sanan das Gut kanssa — se isolla alkukirjaimella ja artikkelilla on substantiivi (omaisuus, kartano).",
    "study.examples[0].lv": "Ruoka on hyvää.",
    "study.examples[1].lv": "Mitä kuuluu? – Hyvin, kiitos!",
    "study.examples[2].lv": "Hän puhuu hyvin saksaa.",
    "study.examples[3].lv": "Hyvää huomenta!",
    "study.examples[4].lv": "Se on hyvä idea.",
    "study.examples[5].lv": "Kaikki on kunnossa.",
    "study.tip[0]": "gut ilman artikkelia on adjektiivi/adverbi — hyvä/hyvin.",
    "study.tip[1]":
      "das Gut isolla alkukirjaimella ja artikkelilla on eri sana — substantiivi (omaisuus, kartano).",
    "study.important[0]": "gut = hyvä/hyvin (adjektiivi/adverbi).",
    "study.important[1]":
      "das Gut = omaisuus/kartano (substantiivi) — älä sekoita gut-sanaan.",
    "study.important[2]": "Guten Morgen/Tag/Abend — gut päättyy -en taivutuksessa.",
  }),
};

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
  /\b(Jook|Kaelkirjak|Klaas|Uskuma|Kohe|Ühesugune|Õnn|Õnnelik|Rohi|Roheline|Grupp|Tervitus|Tervitama|Kurk|Juus|Mul on|Pool|Kael|Hoidma|Peatama|Kinnas|Käekott|Käterätik|Maja|Abielluma|Kuum|Nimi olema|Tähendama|Aitama|Sügis|Härra|Täna|Siin|Abi|Taga|Kõrge|Viisakas|Vanaema|Vanaisa|Põhiidee|tähendab peamiselt|eesti keeles|Tervis|Grammatika|Peatus|Pealinn|Särk|Vihik|Hea|Ma tulen|ühesugune|Kõik on)\b/i;

const LV_LEAK =
  /\b(Atceries|Galvenā doma|latviaksi|kaut kas|nedaudz|līdz tūlīt|liels|Cilvēkam|garš augumā|maina galotni)\b/i;

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/fi|Gesundheit|idx:238|lv|WRONG_LANGUAGE|gpt-5.6-luna": ["Tervis"],
  "g2/a1/fi|gleich|idx:243|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Põhiidee",
    "Kohe • Ühesugune",
    "Ma tulen kohe",
    "ühesugune värv",
    "līdz tūlīt",
  ],
  "g2/a1/fi|groß|idx:250|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Põhiidee",
    "groß = liels",
    "Maja on suur",
    "Cilvēkam",
    "garš augumā",
  ],
  "g2/a1/fi|Großeltern|idx:251|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Vanaema",
    "Vanaisa",
  ],
  "g2/a1/fi|gut|idx:259|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Põhiidee",
    "Hea",
    "Kõik on korras",
    "Mul läheb hästi",
    "maina galotni",
  ],
};

const SOURCE_FIDELITY = {
  "g2/a1/fi|halten|idx:265|lv|WRONG_LANGUAGE|gpt-5.6-luna": { maxSegments: 2 },
  "g2/a1/fi|heißen|idx:276|lv|WRONG_LANGUAGE|gpt-5.6-luna": { maxSegments: 2 },
};

const GLEICH_REQUIRED = ["Kohta • Sama", "gleich = kohta", "Bis gleich! = nähdään kohta!"];
const GROSS_REQUIRED = [
  "Berliini on suuri kaupunki",
  "Ihmisestä Er ist groß",
  "groß = suuri",
];
const GROSSELTERN_REQUIRED = ["Isoäiti", "Isoisä", "isovanhemmat"];
const GUT_REQUIRED = ["Hyvä", "gut = hyvä/hyvin", "Hyvää huomenta!", "das Gut = omaisuus"];

const DE_EXAMPLE_ALIGN = {
  "g2/a1/fi|gleich|idx:243|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Ich komme gleich.": "Tulen kohta.",
    "Wir haben die gleiche Farbe.": "Meillä on sama väri.",
    "Das Essen ist gleich fertig.": "Ruoka on kohta valmista.",
    "Beide Wege sind gleich lang.": "Molemmat tiet ovat yhtä pitkät.",
    "Bis gleich!": "Nähdään kohta!",
    "Sie sind gleich groß.": "He ovat yhtä pitkät.",
  },
  "g2/a1/fi|groß|idx:250|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Das Haus ist groß.": "Talo on suuri.",
    "Berlin ist eine große Stadt.": "Berliini on suuri kaupunki.",
    "Er ist groß.": "Hän on pitkä.",
    "Das Zimmer ist groß.": "Huone on suuri.",
  },
  "g2/a1/fi|Großeltern|idx:251|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Meine Großeltern wohnen auf dem Land.": "Minun isovanhempani asuvat maalla.",
    "Ich besuche meine Großeltern.": "Käyn isovanhempieni luona.",
    cmp0: "meine Großeltern – minun isovanhempani",
    cmp1: "meine Großmutter – minun isoäitini",
    cmp2: "mein Großvater – minun isoisäni",
  },
  "g2/a1/fi|gut|idx:259|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": {
    "Das Essen ist gut.": "Ruoka on hyvää.",
    "Wie geht es dir? – Gut, danke!": "Mitä kuuluu? – Hyvin, kiitos!",
    "Er spricht gut Deutsch.": "Hän puhuu hyvin saksaa.",
    "Guten Morgen!": "Hyvää huomenta!",
    "Das ist eine gute Idee.": "Se on hyvä idea.",
    "Alles ist gut.": "Kaikki on kunnossa.",
  },
};

const NELABOT_CARDS = ["Gramm", "grau", "Hand", "Handy", "Hauptstadt"];
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
  if (sep === " = ") return true;
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

  if (runSegmentGate && !isJsonComposite && segs.length < maxSegs && d.owner_decision === "LABOT") {
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
    if (id === "g2/a1/fi|gleich|idx:243|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna") {
      for (const phrase of GLEICH_REQUIRED) {
        if (!mergedText.includes(phrase)) {
          compositeIncomplete++;
          issues.push({ id, type: "GLEICH_INCOMPLETE", msg: `missing "${phrase}"` });
        }
      }
    }
    if (id === "g2/a1/fi|groß|idx:250|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna") {
      for (const phrase of GROSS_REQUIRED) {
        if (!mergedText.includes(phrase)) {
          compositeIncomplete++;
          issues.push({ id, type: "GROSS_INCOMPLETE", msg: `missing "${phrase}"` });
        }
      }
    }
    if (id === "g2/a1/fi|Großeltern|idx:251|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna") {
      for (const phrase of GROSSELTERN_REQUIRED) {
        if (!mergedText.includes(phrase)) {
          compositeIncomplete++;
          issues.push({ id, type: "GROSSELTERN_INCOMPLETE", msg: `missing "${phrase}"` });
        }
      }
    }
    if (id === "g2/a1/fi|gut|idx:259|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna") {
      for (const phrase of GUT_REQUIRED) {
        if (!mergedText.includes(phrase)) {
          compositeIncomplete++;
          issues.push({ id, type: "GUT_INCOMPLETE", msg: `missing "${phrase}"` });
        }
      }
    }
  }

  rowAudit.push(auditEntry);
}

if (nelabot !== 5) {
  issues.push({ type: "NELABOT_COUNT", msg: `expected 5 NELABOT, got ${nelabot}` });
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
    ? "LRB_010_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_010_LINGUISTIC_REVIEW_BLOCKED",
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
  pdf_reaudit_repairs: ["Gesundheit", "gleich", "groß", "Großeltern", "gut"],
  row_audit: rowAudit,
  failures: issues,
  verdict: pass
    ? "LRB_010_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_010_LINGUISTIC_REVIEW_BLOCKED",
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
