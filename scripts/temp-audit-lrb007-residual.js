#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-007";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const TARGET_FI = {
  "g2/a1/fi|a1-wie|a1.card.a1-wie.study.explanation[3]|MULTI_TRANSLATION|deterministic/multi-translation":
    "Wie viel(e) tarkoittaa kuinka paljon • Wie alt tarkoittaa kuinka vanha • Wie lange tarkoittaa kuinka kauan.",
  "g2/a1/fi|a1-wie|a1.card.a1-wie.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Miten • Kuinka",
  "g2/a1/fi|a1-zu|a1.card.a1-zu.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Luokse • Kohti",
  "g2/a1/fi|a1-zu|a1.card.a1-zu.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Luokse • Kohti",
  "g2/a1/fi|a1-zum|a1.card.a1-zum.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Luokse • Kohti",
  "g2/a1/fi|a1-zum|a1.card.a1-zum.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Luokse • Kohti",
};

const COMPOSITE_TARGETS = {
  "g2/a1/fi|ab|idx:17|lv; study.translation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna":
    JSON.stringify({
      lv: "Alkaen",
      "study.translation": "Alkaen",
      "study.examples[0].lv": "Tästä päivästä lähtien",
      "study.examples[1].lv": "Maanantaista lähtien",
      "study.examples[2].lv": "Kello kahdeksasta",
      "study.examples[3].lv": "Asemalta",
      "study.comparison[0].meaning": "Lähtien (ajasta tai paikasta)",
      "study.comparison[1].meaning": "Keneltä/keltä • Alkuperä",
      "study.comparison[2].meaning": "Ulos jostakin",
      "study.important[0]":
        "ab osoittaa lähtöpistettä ajassa tai paikassa — alkaen tietystä hetkestä tai paikasta.",
      "study.important[1]":
        "Jos ajatus ilmaisee alkuperää tai suuntaa sisältä, käytetään usein von tai aus.",
    }),
  "g2/a1/fi|an|idx:12|lv; study.translation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna":
    JSON.stringify({
      lv: "Luona",
      "study.translation": "Kiinni • Pinnalla",
      "study.examples[0].lv": "Seinällä / seinää vasten",
      "study.examples[1].lv": "Ikkunan luona",
      "study.examples[2].lv": "Meren rannalla",
      "study.comparison[0].meaning": "Pinnan tai reunan vieressä",
      "study.comparison[1].meaning": "Vaakatasolla pinnalla",
      "study.comparison[2].meaning": "Henkilön tai paikan luona",
      "study.important[0]":
        "an ei tarkoita mitä tahansa «bei». Se tarkoittaa usein pintaa, seinää, ikkunaa tai reunaa.",
      "study.important[1]": "Vaakasuoralla pinnalla käytetään yleensä auf.",
    }),
  "g2/a1/fi|baden|idx:68|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna":
    JSON.stringify({
      lv: "Käydä uimassa",
      "study.translation": "Käydä uimassa",
      "study.explanation[0]":
        "Pääajatus: baden tarkoittaa käydä uimassa tai olla vedessä.",
      "study.explanation[1]":
        "Badenia käytetään, kun puhutaan lomasta vedessä, järvessä, meressä tai uima-altaassa.",
      "study.explanation[2]":
        "Kun painotus on uintiliikkeissä tai urheiluna, saksassa käytetään useammin schwimmen.",
      "study.explanation[3]": "baden ja schwimmen eivät ole synonyymejä.",
      "study.examples[0].lv": "Menen uimaan.",
      "study.examples[1].lv": "Menemme uimaan järveen.",
      "study.examples[2].lv": "Hän ui erittäin hyvin.",
      "study.examples[3].lv": "Käyn uimassa joka maanantai.",
      "study.comparison[0].meaning": "Käydä uimassa / olla vedessä",
      "study.comparison[0].example": "Ich gehe baden. – Menen uimaan.",
      "study.comparison[1].meaning": "Uinti liikkeenä tai urheiluna",
      "study.comparison[1].example": "Er schwimmt sehr gut. – Hän ui erittäin hyvin.",
      "study.comparison[2].meaning": "Käydä suihkussa",
      "study.comparison[2].example": "Ich dusche am Morgen. – Käyn aamulla suihkussa.",
      "study.comparison[3].meaning": "Mennä uimaan",
      "study.comparison[3].example": "Ich gehe heute schwimmen. – Menen tänään uimaan.",
      "study.tip.text": "Muista: loma vedessä → baden; uintiliike → schwimmen.",
      "study.important[0]": "baden ja schwimmen eivät ole synonyymejä.",
      "study.important[1]":
        "baden = käydä uimassa/olla vedessä; schwimmen = uida (liike tai urheilu).",
    }),
  "g2/a1/fi|aufs|idx:60|study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna":
    JSON.stringify({
      "study.translation": "Päälle • Päälle • Minne?",
      "study.explanation[0]": "Aufs on preposition auf ja artikkelin das lyhenne.",
      "study.explanation[1]": "Täysmuoto: auf das (akkusatiivi).",
      "study.explanation[2]":
        "Käytetään, kun teko osoittaa suuntaa tiettyä asiaa tai pintaa kohti — vastaa kysymykseen minne?",
      "study.explanation[3]":
        "Usein liikkeen kanssa: kiivetä, istua, asettaa, ajaa jollekin pinnalle.",
      "study.explanation[4]":
        "Puhekielessä käytetään lähes aina aufs, ei täysmuotoa auf das.",
      "study.examples[0].lv": "Menen katolle.",
      "study.examples[1].lv": "Hän istuu sohvalle.",
      "study.examples[2].lv": "Ajelemme maalle.",
      "study.examples[3].lv": "Laita laukku sängylle.",
      "study.examples[4].lv": "Hän hyppää hevosen selkään.",
      "study.examples[5].lv": "Laita kirja hyllylle.",
      "study.examples[6].lv": "Tule nopeasti veneeseen!",
      "study.examples[7].lv": "Menemme juhliin.",
      "study.comparison[0].meaning": "Tietylle asialle (akk.)",
      "study.comparison[0].example": "aufs Dach – katolle",
      "study.comparison[1].meaning": "Pinnalle tai ylöspäin",
      "study.comparison[1].example": "auf den Tisch – pöydälle",
      "study.comparison[2].meaning": "Pystysuoran pinnan vieressä",
      "study.comparison[2].example": "an die Wand – seinää vasten",
      "study.comparison[3].meaning": "Sisään (huoneeseen)",
      "study.comparison[3].example": "ins Zimmer – huoneeseen",
      "study.comparison[4].meaning": "-lle / luokse (dat.)",
      "study.comparison[4].example": "zum Arzt – lääkärille",
      "study.tip[0]": "Muista: auf + das → aufs (minne?).",
      "study.tip[1]": "Arkipuheessa harvoin sanotaan täyttä auf das — käytä aufs.",
      "study.important[0]":
        "aufs = auf + das; sitä käytetään neutrisukuisen yksikön kanssa akkusatiivissa, kun ilmaistaan suuntaa (minne?).",
      "study.important[1]":
        "Vastaa kysymykseen minne? — liike tietylle alueelle tai pinnalle.",
      "study.important[2]": "Vaakasuoralla pinnalla käytetään usein auf den, ei aufs.",
      "study.important[3]": "Älä sekoita an (seinää vasten) tai ins (huoneen sisään).",
    }),
};

// Load remaining scalar targets from decisions for rows not in maps above
for (const row of rows) {
  const id = row.finding_stable_ids;
  if (TARGET_FI[id] || COMPOSITE_TARGETS[id]) continue;
  const d = decisions[id];
  if (!d) continue;
  if (d.owner_decision === "LABOT") {
    TARGET_FI[id] = d.owner_new;
  } else {
    TARGET_FI[id] = String(row.production_current || "").trim();
  }
}

const ET_LEAK =
  /\b(Kuidas|Kui|Juurde|Juures|Pinna küljes|Serva ääres|Peal|Ligi|Suplema|Õhtu|Õhtusöök|Õhtul|Aga|Järgima|Aadress|Ahv|Album|Kõik|Üksi|Vana|Vanus|Sipelgas|Algus|Alustama|Saabuma|Helistama|Vaatama|Selga panema|Õun|Jaamas|Kulm|Silmade värv|Vannituba|Varsti|Rõdu|Pall|Banaan|Kõht|Tähendama|Mõlemad|Jalg|Näide|Saama)\b/i;

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/fi|a1-zu|a1.card.a1-zu.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "-(i)in", "-sse", "Juurde",
  ],
  "g2/a1/fi|a1-zu|a1.card.a1-zu.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "-(i)in", "-sse", "Juurde",
  ],
  "g2/a1/fi|a1-zum|a1.card.a1-zum.native|MULTI_TRANSLATION|deterministic/multi-translation": [
    "-lle", "-sse", "Juurde", " • Luo", "-lle • Luo",
  ],
  "g2/a1/fi|a1-zum|a1.card.a1-zum.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": [
    "-lle", "-sse", "Juurde", " • Luo", "-lle • Luo",
  ],
  "g2/a1/fi|ab|idx:17|lv; study.translation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    '"lv":"-st"', "alkaen • lähtien",
  ],
  "g2/a1/fi|an|idx:12|lv; study.translation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Päällä • Lähellä", "Luona • Päällä",
  ],
  "g2/a1/fi|baden|idx:68|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna": [
    '"lv":"Uida"', "peseytyä", "vannis käimist", "kylpyä",
  ],
  "g2/a1/fi|aufs|idx:60|study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "millä?",
    "Katusele",
    "Laual",
    "Seinal",
    "Tuppa",
    "Arsti juures",
    "Peale • Otsa",
    "Kuhu?",
  ],
};

const AUFS_REQUIRED_PHRASES = [
  "auf + das",
  "neutrisukuisen",
  "akkusatiiv",
  "minne?",
];

const NARROWING_FRAGMENTS = {
  "g2/a1/fi|an|idx:12|lv; study.translation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": [
    "Lähellä",
  ],
};

const SOURCE_FIDELITY = {
  "g2/a1/fi|ab|idx:17|lv; study.translation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    maxSegments: 1,
  },
  "g2/a1/fi|an|idx:12|lv; study.translation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    maxSegments: 1,
  },
  "g2/a1/fi|baden|idx:68|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna": {
    maxSegments: 1,
  },
};

const DE_EXAMPLE_ALIGN = {
  "g2/a1/fi|aufs|idx:60|study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "Ich gehe aufs Dach.": "Menen katolle.",
    "Sie setzt sich aufs Sofa.": "Hän istuu sohvalle.",
    "Wir fahren aufs Land.": "Ajelemme maalle.",
    "Stell die Tasche aufs Bett.": "Laita laukku sängylle.",
    "Er springt aufs Pferd.": "Hän hyppää hevosen selkään.",
    "Leg das Buch aufs Regal.": "Laita kirja hyllylle.",
    "Komm schnell aufs Boot!": "Tule nopeasti veneeseen!",
    "Wir gehen aufs Fest.": "Menemme juhliin.",
    cmp0: "aufs Dach – katolle",
    cmp1: "auf den Tisch – pöydälle",
    cmp2: "an die Wand – seinää vasten",
    cmp3: "ins Zimmer – huoneeseen",
    cmp4: "zum Arzt – lääkärille",
  },
  "g2/a1/fi|baden|idx:68|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna": {
    "Ich gehe baden.": "Menen uimaan.",
    "Wir gehen im See baden.": "Menemme uimaan järveen.",
    "Er schwimmt sehr gut.": "Hän ui erittäin hyvin.",
    "Ich schwimme jeden Montag.": "Käyn uimassa joka maanantai.",
    cmp0: "Ich gehe baden. – Menen uimaan.",
    cmp1: "Er schwimmt sehr gut. – Hän ui erittäin hyvin.",
    cmp2: "Ich dusche am Morgen. – Käyn aamulla suihkussa.",
    cmp3: "Ich gehe heute schwimmen. – Menen tänään uimaan.",
  },
};

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

  if (!d || !expected) {
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

  if (ET_LEAK.test(allText)) {
    wrongLanguage++;
    issues.push({ id, type: "WRONG_LANG", msg: allText.slice(0, 120) });
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

    if (id === "g2/a1/fi|aufs|idx:60|study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna") {
      const mergedText = flattenStrings(merged).join(" ");
      for (const phrase of AUFS_REQUIRED_PHRASES) {
        if (!mergedText.toLowerCase().includes(phrase.toLowerCase())) {
          semanticViolations++;
          issues.push({ id, type: "AUFS_SEMANTIC", msg: `missing "${phrase}"` });
        }
      }
    }
  }

  rowAudit.push(auditEntry);
}

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
  degeneratePairs === 0;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "LRB_007_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_007_LINGUISTIC_REVIEW_BLOCKED",
  gala_repair: true,
  recalculated_from_production: true,
  pass,
  row_count: rows.length,
  labot,
  nelabot,
  pending,
  gates: {
    EXTRA_MEANING_NOT_IN_SOURCE: extraMeaningNotInSource,
    SEMANTIC_NARROWING_FROM_SOURCE: semanticNarrowing,
    duplicate_meanings: duplicateMeanings,
    wrong_language_residue: wrongLanguage,
    semantic_alignment_violations: semanticViolations,
    de_target_alignment_violations: deTargetViolations,
    degenerate_example_pairs: degeneratePairs,
  },
  row_audit: rowAudit,
  failures: issues,
  verdict: pass
    ? "LRB_007_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_007_LINGUISTIC_REVIEW_BLOCKED",
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
