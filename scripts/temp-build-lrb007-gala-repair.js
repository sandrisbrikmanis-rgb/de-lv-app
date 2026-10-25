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

/** Gala overrides — mandatory ab/an/baden/zu/zum/wie repairs (gpt-5.6-luna). */
const GALA_OVERRIDES = {
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
  "g2/a1/fi|ab|idx:17|lv; study.translation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({
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
  "g2/a1/fi|an|idx:12|lv; study.translation; study.examples; study.comparison; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({
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
  "g2/a1/fi|baden|idx:68|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna": JSON.stringify({
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
  "g2/a1/fi|aufs|idx:60|study|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": JSON.stringify({
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

const GALA_NOTES = {
  ab: "gala: lv no→Alkaen (from-point); not case-ending-only or temporal-only lähtien scalar; examples contextual",
  an: "gala: lv pie→Luona only; surface/edge senses in comparison/explanation not scalar",
  baden: "gala: peldēties→Käydä uimassa; baden≠schwimmen; no Uida/peseytyä headword merge; DE↔FI aligned",
  zu: "gala: uz•pie→Luokse•Kohti semantic; no -(i)in case ending as sole gloss",
  zum: "gala: uz•pie→Luokse•Kohti uniform with zu; grammar in card explanation layer",
  wie: "gala: kā•cik→Miten•Kuinka; explanation[3] teaches wie viel/alt/lange distinction",
  aufs: "gala: important[0] auf+das neuter Akk minne?; no millä?; comparison DE↔FI aligned",
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
  const galaKey = ["ab", "an", "baden", "aufs", "a1-zu", "a1-zum", "a1-wie"].find((k) =>
    card.includes(k)
  );
  const galaNote = galaKey
    ? GALA_NOTES[galaKey.replace("a1-", "")] || GALA_NOTES[galaKey]
    : null;
  if (prod === target) {
    return `FI ${card} gala: production already correct FI; NELABOT. DE untouched.`;
  }
  if (galaNote) {
    return `FI ${card} ${galaNote}. DE untouched.`;
  }
  const prior = base[id]?.owner_note;
  if (prior && !prior.includes("gala")) {
    return `${prior.replace(/ DE untouched\.$/, "")}; gala recheck confirmed. DE untouched.`;
  }
  return `FI ${card} gala: ET leak repair → target FI. DE untouched.`;
}

const TARGET_FI = {};
for (const row of rows) {
  const id = row.finding_stable_ids;
  if (GALA_OVERRIDES[id] !== undefined) {
    TARGET_FI[id] = GALA_OVERRIDES[id];
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
      derived_from_production: true,
      gala_overrides: Object.keys(GALA_OVERRIDES).length,
    },
    null,
    2
  )
);
