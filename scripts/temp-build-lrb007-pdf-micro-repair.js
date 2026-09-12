#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-007";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const basePath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);

const base = JSON.parse(fs.readFileSync(basePath, "utf8"));

/** PDF micro-repair overrides — baden + aufs only (gpt-5.6-luna). */
const PDF_MICRO_OVERRIDES = {
  "g2/a1/fi|baden|idx:68|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna": JSON.stringify({
    lv: "Käydä uimassa",
    "study.translation": "Käydä uimassa",
    "study.explanation[0]":
      "Pääajatus: baden tarkoittaa käydä uimassa, olla vedessä tai nauttia vedestä.",
    "study.explanation[1]":
      "Badenia käytetään, kun puhutaan virkistäytymisestä vedessä — järven, meren tai uima-altaan ympäristössä.",
    "study.explanation[2]": "Baden voi tarkoittaa myös kylpyä kylvyssä.",
    "study.explanation[3]":
      "Kun painotus on uintiliikkeissä tai urheiluna, saksassa käytetään useammin schwimmen.",
    "study.examples[0].lv": "Menen uimaan.",
    "study.examples[1].lv": "Menemme uimaan järveen.",
    "study.examples[2].lv": "Hän ui erittäin hyvin.",
    "study.examples[3].lv": "Käyn uimassa joka maanantai.",
    "study.comparison[0].meaning": "Käydä uimassa / olla vedessä / kylpeä",
    "study.comparison[0].example": "Ich gehe baden. – Menen uimaan.",
    "study.comparison[1].meaning": "Uinti liikkeenä tai urheiluna",
    "study.comparison[1].example": "Er schwimmt sehr gut. – Hän ui erittäin hyvin.",
    "study.comparison[2].meaning": "Käydä suihkussa",
    "study.comparison[2].example": "Ich dusche am Morgen. – Käyn aamulla suihkussa.",
    "study.comparison[3].meaning": "Mennä uimaan",
    "study.comparison[3].example": "Ich gehe heute schwimmen. – Menen tänään uimaan.",
    "study.tip.text": "Muista: oleskelu vedessä → baden; uintiliike → schwimmen.",
    "study.important[0]": "baden ja schwimmen eivät ole synonyymejä.",
    "study.important[1]":
      "baden korostaa useammin oleskelua tai virkistäytymistä vedessä; schwimmen korostaa uintiliikettä.",
  }),
  "g2/a1/fi|aufs|idx:60|study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": JSON.stringify({
    "study.translation": "Päälle • Minne?",
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

const PDF_NOTES = {
  baden:
    "PDF micro: lv/study.translation Käydä uimassa; no lomasta/loma vedessä; virkistäytyminen/oleskelu vedessä; baden≠schwimmen; DE↔FI aligned",
  aufs:
    "PDF micro: study.translation Päälle • Minne? (no duplicate); auf+das neuter Akk minne? preserved; DE↔FI aligned",
};

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

function noteFor(id, target, prod) {
  const cardMatch = id.match(/\|([^|]+)\|/);
  const card = cardMatch ? cardMatch[1] : id;
  const pdfNote = PDF_NOTES[card];
  if (pdfNote) {
    return `FI ${card} ${pdfNote}. DE untouched.`;
  }
  const prior = base[id]?.owner_note;
  if (prior) return prior;
  if (prod === target) {
    return `FI ${card} PDF micro: production already correct; NELABOT. DE untouched.`;
  }
  return `FI ${card} PDF micro: unchanged from prior review. DE untouched.`;
}

const TARGET_FI = {};
for (const row of rows) {
  const id = row.finding_stable_ids;
  if (PDF_MICRO_OVERRIDES[id] !== undefined) {
    TARGET_FI[id] = PDF_MICRO_OVERRIDES[id];
  } else if (base[id]?.owner_decision === "LABOT" && base[id].owner_new) {
    TARGET_FI[id] = base[id].owner_new;
  } else {
    TARGET_FI[id] = String(row.production_current || "").trim();
  }
}

const decisions = {};
let labotCount = 0;
let nelabotCount = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const target = TARGET_FI[id];
  if (!target) {
    console.error(`Missing TARGET_FI for ${id}`);
    process.exit(1);
  }
  const prod = normalizeVal(row.production_current);
  const normTarget = normalizeVal(target);
  const needsChange = prod !== normTarget;

  if (needsChange) {
    labotCount++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "LABOT",
      owner_new: target,
      owner_note: noteFor(id, normTarget, prod),
    };
  } else {
    nelabotCount++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "NELABOT",
      owner_new: "",
      owner_note: noteFor(id, normTarget, prod),
    };
  }
}

if (Object.keys(decisions).length !== 50) {
  console.error(`Expected 50 decisions, got ${Object.keys(decisions).length}`);
  process.exit(1);
}

fs.writeFileSync(outPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      total: 50,
      labot: labotCount,
      nelabot: nelabotCount,
      pending: 0,
      pdf_micro_repair: true,
      micro_overrides: Object.keys(PDF_MICRO_OVERRIDES).length,
      derived_from_production: true,
    },
    null,
    2
  )
);
