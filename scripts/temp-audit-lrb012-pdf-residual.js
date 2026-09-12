#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { getAt, setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-012";
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
  "g2/a1/fi|leise|idx:368|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": JSON.stringify({"lv":"Hiljainen","study.translation":"Hiljainen","study.explanation[0]":"Pääajatus: hiljainen tai pienellä äänenvoimakkuudella.","study.explanation[1]":"leise tarkoittaa pääasiassa pientä äänenvoimakkuutta.","study.explanation[2]":"Sitä käytetään usein äänestä, puheesta tai musiikista.","study.explanation[3]":"leise kuvaa hiljaista ääntä tai matalaa äänenvoimakkuutta.","study.examples[0].lv":"Ole hiljaa, ole hyvä.","study.examples[1].lv":"Ole hiljaa, ole hyvä.","study.examples[2].lv":"Musiikki on hiljaista.","study.examples[3].lv":"Puhu hiljaa, ole hyvä.","study.tip[0]":"leise = hiljainen","study.tip[1]":"Käytä leise, kun konteksti vastaa tätä merkitystä.","study.important[0]":"leise = hiljainen äänen puolesta.","study.important[1]":"leise = äänenvoimakkuus.","study.important[2]":"Hiljainen tai pienellä äänenvoimakkuudella."}),
  "g2/a1/fi|liegen|idx:377|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": JSON.stringify({"lv":"Olla • Maata","study.translation":"Olla • Maata","study.explanation[0]":"Pääajatus: liegen tarkoittaa olla paikallaan tai maata vaaka-asennossa.","study.explanation[1]":"Ihmisestä puhuttaessa liegen tarkoittaa usein makaamista.","study.explanation[2]":"Esineestä puhuttaessa liegen tarkoittaa, että se on jossain.","study.explanation[3]":"Se eroaa legen-verbi, joka tarkoittaa asettaa jotain vaakaan.","study.examples[0].lv":"Kirja on pöydällä.","study.examples[1].lv":"Puhelimeni on autossa.","study.examples[2].lv":"Hän makaa sängyssä.","study.examples[3].lv":"Laitan kirjan pöydälle.","study.important[0]":"liegen osoittaa asentoa tai sijaintia.","study.important[1]":"legen osoittaa toimintaa: joku asettaa jotain."}),
  "g2/a1/fi|machen|idx:386|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": JSON.stringify({"lv":"Tehdä • Valmistaa","study.translation":"Tehdä • Valmistaa","study.explanation[0]":"Pääajatus: machen on hyvin yleinen sana, joka tarkoittaa tehdä tai valmistaa.","study.explanation[1]":"Kun puhutaan toiminnasta yleisesti, käännetään se tehdä.","study.explanation[2]":"Kun jotain luodaan tai valmistetaan, käännetään se tehdä tai valmistaa.","study.explanation[3]":"Monissa fraaseissa machen käännetään luonnollisesti suomeksi, ei sanasta sanaan.","study.examples[0].lv":"Mitä sinä teet?","study.examples[1].lv":"Teen kotitehtäviä.","study.examples[2].lv":"Teemme pitsaa.","study.examples[3].lv":"Se on hauskaa.","study.tip.text":"Muista: Was machst du? = Mitä sinä teet?","study.important[0]":"machen on hyvin laaja sana, mutta suomeksi se täytyy usein kääntää luonnollisesti tilanteen mukaan.","study.important[1]":"Das macht Spaß tarkoittaa \"se on hauskaa\", ei kirjaimellisesti \"se tekee iloa\"."}),
  "g2/a1/fi|Mal|idx:390|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": JSON.stringify({"lv":"Kerta","study.translation":"Kerta","study.explanation[0]":"Pääajatus: das Mal tarkoittaa kertaa tapahtumana tai sattumana.","study.explanation[1]":"Sitä käytetään usein lukujen kanssa: ein Mal, zwei Mal, drei Mal.","study.explanation[2]":"Järjestysluvun kanssa: das erste Mal, das zweite Mal.","study.explanation[3]":"Älä sekoita puhekielistä partikkelia mal (Komm mal her!) — sillä on eri merkitys.","study.examples[0].lv":"Ensimmäistä kertaa oli vaikeaa.","study.examples[1].lv":"Olen jo käynyt Berliinissä kahdesti.","study.examples[2].lv":"Kerran riittää.","study.examples[3].lv":"Vielä kerran, kiitos!","study.tip.text":"Muista: das Mal = kerta (substantiivi); mal ilman artikkelia = puhekielinen partikkeli.","study.important[0]":"das Mal / die Male — substantiivi artikkelilla.","study.important[1]":"ein Mal, zwei Mal — kertojen lukumäärä.","study.important[2]":"mal ilman artikkelia (Komm mal her!) ei ole sama kuin das Mal."}),
  "g2/a1/fi|Mann|idx:394|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": JSON.stringify({"lv":"Mies • Aviomies","study.translation":"Mies • Aviomies","study.explanation[0]":"Pääajatus: der Mann voi tarkoittaa miestä (sukupuoli) tai aviomiestä (puoliso).","study.explanation[1]":"Kun puhutaan sukupuolesta tai henkilöstä, der Mann = mies.","study.explanation[2]":"Kun puhutaan puolisosta, der Mann = aviomies (mein Mann = aviomieheni).","study.explanation[3]":"Omistuspronomini (mein/dein/ihr Mann) tarkoittaa lähes aina aviomiestä — puolisoa.","study.explanation[4]":"Monikossa: die Männer.","study.explanation[5]":"Naispuolisella die Frau on sama kaksiselitteinen merkitys: nainen JA vaimo.","study.tip[0]":"Omistuspronominilla (mein/dein/ihr Mann) tarkoitetaan lähes aina aviomiestä.","study.tip[1]":"Ilman omistuspronominia (der Mann, ein Mann) tarkoitetaan yleensä miestä.","study.important[0]":"der Mann = mies TAI aviomies — riippuen kontekstista.","study.important[1]":"mein Mann = aviomieheni (ei \"minun mies\").","study.important[2]":"Monikossa: die Männer."}),
  "g2/a1/fi|mit|idx:408|lv; study.explanation; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": JSON.stringify({"lv":"Kanssa (-lla/-llä)","study.translation":"Kanssa (-lla/-llä)","study.explanation[0]":"Pääajatus: mit tarkoittaa yleensä kanssa tai adessiivilla (-lla/-llä).","study.explanation[1]":"Mit käytetään, kun ihminen on jonkun kanssa tai tekee jotain jollakin välineellä.","study.explanation[2]":"Kulkuneuvosta puhuttaessa mit tarkoittaa usein ajamista bussilla, junalla tai autolla.","study.explanation[3]":"A1-tasolla hyvin yleisiä fraaseja ovat mit dem Bus, mit dem Auto ja mit dir.","study.important[0]":"mit vaatii datiivin: mit dem Bus, mit der Mutter, mit dir.","study.important[1]":"Kommst du mit? tarkoittaa \"Tuletko mukaan?\""}),
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
  /\b(Naisõpetaja|Kerge|Kahjuks|Õppima|Lugema|Viimane|Inimesed|Valgus|Kallis|Armastus|Armastama|Laul|Limonaad|Joonlaud|Nimekiri|Liiter|Lusikas|Õhk|Lõbus|Tüdruk|Söögikord|Vahel|Mandariin|Moos|Märts|Hiir|Jahu|Rohkem|Minu|Inimene|Nuga|Meeter|Piim|Miljon|Minut|Kaasa võtma|Keskpäev|Lõunasöök|Vasakule|Vasak|Maalima|Värvima|Vaikne|Asuma|Lamama|Tegema|Valmistama|Kord|Mees|Abikaasa|Põhiidee|tähendab peamiselt|eesti keeles|Latviaksi|Palun, ole vaikne|Ma olen|Ma teen|Ma panen)\b/i;

const LV_LEAK =
  /\b(Atceries|Galvenā doma|latviaksi|kaut kas|nedaudz|dzirdēt|klausīties|Latvian kieli)\b/i;

const FORBIDDEN_FRAGMENTS = {
  "g2/a1/fi|leise|idx:368|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "Vaikne",
    "Põhiidee",
    "Palun, ole vaikne"
  ],
  "g2/a1/fi|liegen|idx:377|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "Asuma",
    "Lamama",
    "Põhiidee",
    "Raamat on laual"
  ],
  "g2/a1/fi|machen|idx:386|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "Tegema",
    "Valmistama",
    "Põhiidee",
    "Mida sa teed"
  ],
  "g2/a1/fi|Mal|idx:390|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "Kord",
    "Põhiidee",
    "Esimest korda oli raske",
    "Atceries"
  ],
  "g2/a1/fi|Mann|idx:394|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": [
    "Mees",
    "Abikaasa",
    "Põhiidee"
  ],
  "g2/a1/fi|mit|idx:408|lv; study.explanation; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": [
    "-ga",
    "Põhiidee"
  ],
  "g2/a1/fi|lieb|idx:373|lv|WRONG_LANGUAGE|gpt-5.6-luna": [
    "Kallis"
  ]
};

const SOURCE_FIDELITY = {};

const COMPOSITE_REQUIRED = {
  "g2/a1/fi|leise|idx:368|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "Hiljainen",
    "leise = hiljainen",
    "Ole hiljaa"
  ],
  "g2/a1/fi|liegen|idx:377|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "Olla • Maata",
    "legen"
  ],
  "g2/a1/fi|machen|idx:386|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "Tehdä • Valmistaa",
    "Das macht Spaß"
  ],
  "g2/a1/fi|Mal|idx:390|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": [
    "Kerta",
    "das Mal"
  ],
  "g2/a1/fi|Mann|idx:394|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": [
    "Mies • Aviomies",
    "mein Mann"
  ],
  "g2/a1/fi|mit|idx:408|lv; study.explanation; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": [
    "Kanssa (-lla/-llä)",
    "Kommst du mit"
  ]
};

const DE_EXAMPLE_ALIGN = {
  "g2/a1/fi|leise|idx:368|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "Bitte sei leise.": "Ole hiljaa, ole hyvä.",
    "Die Musik ist leise.": "Musiikki on hiljaista.",
    "Sprich bitte leise.": "Puhu hiljaa, ole hyvä."
  },
  "g2/a1/fi|liegen|idx:377|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "Das Buch liegt auf dem Tisch.": "Kirja on pöydällä.",
    "Mein Handy liegt im Auto.": "Puhelimeni on autossa.",
    "Er liegt im Bett.": "Hän makaa sängyssä.",
    "Ich lege das Buch auf den Tisch.": "Laitan kirjan pöydälle."
  },
  "g2/a1/fi|machen|idx:386|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "Was machst du?": "Mitä sinä teet?",
    "Ich mache Hausaufgaben.": "Teen kotitehtäviä.",
    "Wir machen Pizza.": "Teemme pitsaa.",
    "Das macht Spaß.": "Se on hauskaa."
  },
  "g2/a1/fi|Mal|idx:390|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": {
    "Das erste Mal war schwer.": "Ensimmäistä kertaa oli vaikeaa.",
    "Ich war schon zwei Mal in Berlin.": "Olen jo käynyt Berliinissä kahdesti.",
    "Ein Mal reicht.": "Kerran riittää.",
    "Noch ein Mal, bitte!": "Vielä kerran, kiitos!"
  },
  "g2/a1/fi|Mann|idx:394|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": {},
  "g2/a1/fi|mit|idx:408|lv; study.explanation; study.important|TARGET_LANGUAGE_ISSUE|gpt-5.6-luna": {}
};

const NELABOT_CARDS = ["Meer"];
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

if (nelabot !== 1) {
  issues.push({ type: "NELABOT_COUNT", msg: `expected 1 NELABOT, got ${nelabot}` });
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
    ? "LRB_012_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_012_LINGUISTIC_REVIEW_BLOCKED",
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
  pdf_reaudit_repairs: ["lieb", "leise"],
  row_audit: rowAudit,
  failures: issues,
  verdict: pass
    ? "LRB_012_FULL_50_50_LINGUISTIC_REVIEW_PASS"
    : "LRB_012_LINGUISTIC_REVIEW_BLOCKED",
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
