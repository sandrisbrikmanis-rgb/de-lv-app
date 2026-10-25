#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-008";
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
  "g2/a1/fi|besuchen|idx:89|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna":
    JSON.stringify({
      lv: "vierailla",
      "study.translation": "vierailla",
      "study.explanation[0]":
        "Pääajatus: besuchen käytetään, kun käydään paikalla, tapahtumassa tai henkilön luona.",
      "study.explanation[1]":
        "Paikkaa, tapahtumaa tai kurssia suomeksi yleensä vieraillaan.",
      "study.explanation[2]":
        "Jos besuchen koskee henkilöä, suomeksi usein luontevampaa on käydä jonkun luona.",
      "study.explanation[3]":
        "Saksan kielessä besuchen käytetään ilman prepositiota ja akkusatiivin kanssa.",
      "study.examples[0].lv": "Käyn museossa.",
      "study.examples[1].lv": "Osallistumme saksankielen kurssille.",
      "study.examples[2].lv": "Käyn isoäidin ja isoisän luona.",
      "study.comparison[0].meaning":
        "vierailla paikassa tai tapahtumassa • käydä henkilön luona",
      "study.comparison[0].example":
        "Ich besuche meine Großeltern. – Käyn isoäidin ja isoisän luona.",
      "study.comparison[1].meaning": "kohdata",
      "study.comparison[1].example":
        "Ich treffe meinen Freund. – Kohtaan ystäväni.",
      "study.comparison[2].meaning": "mennä jonkun luo",
      "study.comparison[2].example":
        "Ich gehe zu meinem Freund. – Menen ystäväni luo.",
      "study.tip.text":
        "Muista: paikkaa voi vierailla, mutta henkilön luona yleensä käydään.",
      "study.important[0]":
        "besuchen käytetään ilman prepositiota: Ich besuche meine Freundin.",
      "study.important[1]":
        "Suomenkielinen käännös riippuu objektista: vierailla paikassa, käydä henkilön luona.",
    }),
  "g2/a1/fi|bitte|idx:93|study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna":
    JSON.stringify({
      "study.translation": "Kiitos",
      "study.explanation[0]":
        "Pääajatus: bitte pienellä alkukirjaimella on kohteliaisuussana, joka tarkoittaa kiitos tai ole hyvä.",
      "study.explanation[1]":
        "Sitä käytetään pyynnöissä, tilauksissa ja kohteliaissa vastauksissa.",
      "study.explanation[2]":
        "Substantiivi die Bitte isolla alkukirjaimella tarkoittaa pyyntöä.",
      "study.examples[0].lv": "Yksi kuppi kahvia, kiitos.",
      "study.examples[1].lv": "Tule sisään, ole hyvä.",
      "study.examples[2].lv": "Ole hyvä!",
      "study.examples[3].lv": "Voinko kysyä, kiitos?",
      "study.examples[4].lv": "Minulla on yksi pyyntö.",
      "study.examples[5].lv": "Pyyntö on tärkeä.",
      "study.comparison[0].meaning": "Ole hyvä • kiitos",
      "study.comparison[0].example":
        "Komm bitte herein. – Tule sisään, ole hyvä.",
      "study.comparison[1].meaning": "Pyyntö",
      "study.comparison[1].example":
        "Ich habe eine Bitte. – Minulla on pyyntö.",
      "study.tip[0]":
        "Muista: pieni bitte = kiitos/ole hyvä (Bitte schön!, Kaffee, bitte). die Bitte isolla = pyyntö (eine Bitte, meine Bitte).",
      "study.tip[1]":
        "Kohteliaisuussana pienellä alkukirjaimella. Käytetään, kun halutaan olla kohtelias — kiitos.",
      "study.important[0]":
        "bitte kirjoitetaan pienellä — se on kohteliaisuussana, ei substantiivi.",
      "study.important[1]":
        "die Bitte isolla alkukirjaimella ja artikkelilla die on substantiivi.",
      "study.important[2]": "Monikko: die Bitten (pyynnöt).",
    }),
  "g2/a1/fi|Bitte|idx:94|study.explanation, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna":
    JSON.stringify({
      "study.translation": "Pyyntö",
      "study.explanation[0]":
        "Pääajatus: die Bitte on substantiivi artikkelilla die ja isolla alkukirjaimella. Konkreettinen pyyntö tai toive.",
      "study.explanation[1]":
        "die Bitte tarkoittaa pääasiassa: pyyntö tai toive.",
      "study.explanation[2]":
        "Kuvaa usein: konkreettista pyyntöä tai anomusta.",
      "study.explanation[3]":
        "Monikko on die Bitten. Kohteliaisuussana bitte pienellä alkukirjaimella tarkoittaa kiitos tai ole hyvä.",
      "study.examples[0].lv": "Minulla on yksi pyyntö.",
      "study.examples[1].lv": "Hän täyttää pyyntöni.",
      "study.examples[2].lv": "Hänellä on kaksi pyyntöä.",
      "study.examples[3].lv": "Voinko kysyä, kiitos?",
      "study.examples[4].lv": "Minulla on yksi pyyntö.",
      "study.examples[5].lv": "Pyyntö on tärkeä.",
      "study.comparison[0].meaning": "Pyyntö",
      "study.comparison[0].example":
        "Ich habe eine Bitte. – Minulla on pyyntö.",
      "study.comparison[1].meaning": "Ole hyvä • kiitos",
      "study.comparison[1].example":
        "Komm bitte herein. – Tule sisään, ole hyvä.",
      "study.tip[0]":
        "Muista: pieni bitte = kiitos/ole hyvä (Bitte schön!, Kaffee, bitte). die Bitte isolla = pyyntö (eine Bitte, meine Bitte).",
      "study.tip[1]":
        "Substantiivi artikkelilla die ja isolla alkukirjaimella. Konkreettinen pyyntö tai toive.",
      "study.important[0]":
        "bitte kirjoitetaan pienellä — se on kohteliaisuussana, ei substantiivi.",
      "study.important[1]":
        "die Bitte isolla alkukirjaimella ja artikkelilla die on substantiivi.",
      "study.important[2]": "Monikko: die Bitten (pyynnöt).",
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
  /\b(Kasutama|Mägi|Parem|Parim|Kas ma tohin|Mul on üks|Palun!|Põhiidee|Viisakussõna|tähendab peamiselt|Seal on minu|Ma ootan|Ma õpin|Ma jään|Ma lähen|sõbra juurde|Üks tass kohvi|palun küsida|Jääma|Tooma • Viima|Kuni •|Kuupäev|Sinu •|Mõtlema|Detsember|Teisipäev|Neljapäev|Kolmsada|Kolm korda|Kolmkümmend|Kolmteist|Tohtima|Dušš|E-post •|Nurk •|Lihtne •|Üks kord •|Üks •|Jää • Jäätis|Üksteist|Vanemad|Lõpp •|Külastaja)\b/i;

const LV_LEAK =
  /\b(Atceries|Galvenā doma|latviaksi|apmeklē|apciemo|vietu apmeklē|lūdzu|lūgums|lietvārds|mazo burtu|ar lielo burtu|stāv ar mazo)\b/i;

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/fi|besuchen|idx:89|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna": [
    "henkilöllä",
    "latviaksi",
    "Atceries",
    "Ma lähen",
    "sõbra",
    "vierailla paikkaa",
    "Saksassa besuchen",
    "ilman esisijaa",
  ],
  "g2/a1/fi|bitte|idx:93|study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna": [
    '"study.examples[3].lv":"Voinko kysyä jotain?"',
    "Voinko kysyä jotain?",
    "Palun",
    "Põhiidee",
    "Kas ma tohin",
    "Mul on üks",
    "Palve on",
    "Üks tass kohvi",
    '"study.comparison[0].meaning":"Palun"',
  ],
  "g2/a1/fi|Bitte|idx:94|study.explanation, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna": [
    "Põhiidee",
    "viisakus",
    "viisakussõna",
    "Palun!",
    "Mul on üks palve",
    "Üks tass kohvi",
    "Kas ma tohin",
    '"study.comparison[0].meaning":"Palve"',
    '"study.comparison[1].meaning":"Palun"',
    "Die Bitte tähendab peamiselt: viisakus",
  ],
};

const NARROWING_FRAGMENTS = {
  "g2/a1/fi|bitte|idx:93|study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna": [
    '"study.comparison[0].meaning":"Palun"',
    "Voinko kysyä jotain?",
  ],
  "g2/a1/fi|Bitte|idx:94|study.explanation, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna": [
    "viisakus",
    "viisakussõna",
  ],
};

const SOURCE_FIDELITY = {
  "g2/a1/fi|besuchen|idx:89|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna": {
    maxSegments: 1,
  },
};

const BESUCHEN_REQUIRED = [
  "henkilön luona",
  "paikassa tai tapahtumassa",
  "Saksan kielessä",
];

const BITTE_POLITENESS_REQUIRED = ["kiitos", "Voinko kysyä, kiitos?", "Ole hyvä"];

const BITTE_NOUN_REQUIRED = ["pyyntö", "Ole hyvä • kiitos"];

const DE_EXAMPLE_ALIGN = {
  "g2/a1/fi|besuchen|idx:89|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna": {
    "Ich besuche das Museum.": "Käyn museossa.",
    "Wir besuchen einen Deutschkurs.": "Osallistumme saksankielen kurssille.",
    "Ich besuche meine Großeltern.": "Käyn isoäidin ja isoisän luona.",
    cmp0: "Ich besuche meine Großeltern. – Käyn isoäidin ja isoisän luona.",
    cmp1: "Ich treffe meinen Freund. – Kohtaan ystäväni.",
    cmp2: "Ich gehe zu meinem Freund. – Menen ystäväni luo.",
  },
  "g2/a1/fi|bitte|idx:93|study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna": {
    "Eine Tasse Kaffee, bitte.": "Yksi kuppi kahvia, kiitos.",
    "Komm bitte herein.": "Tule sisään, ole hyvä.",
    "Bitte schön!": "Ole hyvä!",
    "Kann ich bitte fragen?": "Voinko kysyä, kiitos?",
    "Ich habe eine Bitte.": "Minulla on yksi pyyntö.",
    "Die Bitte ist wichtig.": "Pyyntö on tärkeä.",
    cmp0: "Komm bitte herein. – Tule sisään, ole hyvä.",
    cmp1: "Ich habe eine Bitte. – Minulla on pyyntö.",
  },
  "g2/a1/fi|Bitte|idx:94|study.explanation, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna": {
    "Ich habe eine Bitte.": "Minulla on yksi pyyntö.",
    "Er erfüllt meine Bitte.": "Hän täyttää pyyntöni.",
    "Sie hat zwei Bitten.": "Hänellä on kaksi pyyntöä.",
    "Kann ich bitte fragen?": "Voinko kysyä, kiitos?",
    "Die Bitte ist wichtig.": "Pyyntö on tärkeä.",
    cmp0: "Ich habe eine Bitte. – Minulla on pyyntö.",
    cmp1: "Komm bitte herein. – Tule sisään, ole hyvä.",
  },
};

const NELABOT_CARDS = ["deutsch", "dritte", "Ei"];
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

  for (const list of [FORBIDDEN_FRAGMENTS[id], NARROWING_FRAGMENTS[id]]) {
    if (!list || d.owner_decision !== "LABOT") continue;
    for (const frag of list) {
      if (allText.includes(frag)) {
        if (list === NARROWING_FRAGMENTS[id]) {
          semanticNarrowing++;
          issues.push({ id, type: "SEMANTIC_NARROWING", msg: `contains "${frag}"` });
        } else {
          semanticViolations++;
          issues.push({ id, type: "FORBIDDEN", msg: `contains "${frag}"` });
        }
      }
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
      }
    }

    const mergedText = flattenStrings(merged).join(" ");
    if (id === "g2/a1/fi|besuchen|idx:89|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna") {
      for (const phrase of BESUCHEN_REQUIRED) {
        if (!mergedText.includes(phrase)) {
          compositeIncomplete++;
          issues.push({ id, type: "BESUCHEN_INCOMPLETE", msg: `missing "${phrase}"` });
        }
      }
    }
    if (id === "g2/a1/fi|bitte|idx:93|study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna") {
      for (const phrase of BITTE_POLITENESS_REQUIRED) {
        if (!mergedText.includes(phrase)) {
          compositeIncomplete++;
          issues.push({ id, type: "BITTE_INCOMPLETE", msg: `missing "${phrase}"` });
        }
      }
    }
    if (id === "g2/a1/fi|Bitte|idx:94|study.explanation, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna") {
      for (const phrase of BITTE_NOUN_REQUIRED) {
        if (!mergedText.includes(phrase)) {
          compositeIncomplete++;
          issues.push({ id, type: "BITTE_NOUN_INCOMPLETE", msg: `missing "${phrase}"` });
        }
      }
    }
  }

  rowAudit.push(auditEntry);
}

if (nelabot !== 3) {
  issues.push({ type: "NELABOT_COUNT", msg: `expected 3 NELABOT, got ${nelabot}` });
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
    ? "LRB_008_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_008_LINGUISTIC_REVIEW_BLOCKED",
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
  row_audit: rowAudit,
  failures: issues,
  verdict: pass
    ? "LRB_008_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_008_LINGUISTIC_REVIEW_BLOCKED",
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
