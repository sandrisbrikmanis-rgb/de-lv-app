#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-006";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);

/** Scalar FI targets — PDF reaudit, derived per row from lv_source + LV→DE study card. */
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

/** Full study composites — preserve LV→DE taught senses; no scalar narrowing. */
const TARGET_COMPOSITE = {
  "g2/a1/fi|a1-machen|a1.card.a1-machen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Tehdä • Valmistaa",
    "study.explanation[0]":
      "Pääajatus: machen on hyvin yleinen sana, joka tarkoittaa tehdä tai valmistaa.",
    "study.explanation[1]":
      "Jos puhutaan toiminnasta yleisesti, käännetään tehdä.",
    "study.explanation[2]":
      "Jos jotain muodostetaan tai valmistetaan, käännetään tehdä tai valmistaa.",
    "study.explanation[3]":
      "Monissa fraaseissa machen käännetään luonnollisesti suomen mukaan, ei kirjaimellisesti.",
    "study.examples[0].lv": "Mitä sinä teet?",
    "study.examples[1].lv": "Teen läksyjä.",
    "study.examples[2].lv": "Teemme pizzaa.",
    "study.examples[3].lv": "Se on hauskaa.",
    "study.tip.text": "Muista: Was machst du? = Mitä sinä teet?",
    "study.important[0]":
      "machen on hyvin laaja sana, mutta suomeksi usein täytyy kääntää luonnollisesti tilanteen mukaan.",
    "study.important[1]":
      "Das macht Spaß tarkoittaa \"se on hauskaa\", ei kirjaimellisesti \"se tekee iloa\".",
  },
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Ottaa",
    "study.explanation[0]": "Pääajatus: nehmen tarkoittaa ottaa.",
    "study.explanation[1]":
      "nehmen käytetään, kun otat jotain itsellesi tai valitset.",
    "study.explanation[2]":
      "Se ei ole sama kuin bringen, koska bringen tarkoittaa tuoda tai viedä jollekulle.",
    "study.explanation[3]":
      "holen tarkoittaa mennä hakemaan ja tuoda/ottaa.",
    "study.examples[0].lv": "Ajan bussilla.",
    "study.examples[1].lv": "Ota kirja!",
    "study.examples[2].lv": "Tuon sinulle kirjan.",
    "study.examples[3].lv": "Noudan sinut.",
    "study.comparison[0].meaning": "Ottaa",
    "study.comparison[1].meaning": "Tuoda / viedä / toimittaa",
    "study.comparison[2].meaning": "Mennä hakemaan / tuoda",
    "study.comparison[3].meaning": "Ottaa mukaan",
    "study.comparison[3].example": "Ich nehme dich mit. – Ottaan sinut mukaan.",
    "study.tip.text": "Muista: ota itsellesi → nehmen; tuo jollekulle → bringen.",
    "study.important[0]":
      "Ich nehme den Bus suomeksi tarkoittaa \"matkustan bussilla\".",
    "study.important[1]": "nehmen ei ole sama kuin bringen.",
  },
  "g2/a1/fi|a1-passen|a1.card.a1-passen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Sopia • Soveltua",
    "study.explanation[0]":
      "Pääajatus: passen tarkoittaa sopiaa, olla sopiva tai kelvata.",
    "study.explanation[1]":
      "Vaatteista puhuessa passen usein tarkoittaa sopimista koon mukaan.",
    "study.explanation[2]":
      "Väreistä tai tyylistä puhuessa passen tarkoittaa sopivuutta.",
    "study.explanation[3]": "Hyvin yleinen fraasi on Das passt. = Se sopii.",
    "study.examples[0].lv": "Takki sopii minulle.",
    "study.examples[1].lv": "Mekko sopii hyvin.",
    "study.examples[2].lv": "Tämä väri sopii sinulle.",
    "study.examples[3].lv": "Se sopii.",
    "study.comparison[0].meaning": "Sopia / soveltua",
    "study.comparison[1].meaning": "Sopia / käydä",
    "study.comparison[2].meaning": "Olla sopiva",
    "study.comparison[3].meaning": "Toimia",
    "study.tip.text": "Muista: Das passt. = Se sopii.",
    "study.important[0]": "passen ei tarkoita vain vaatteita.",
    "study.important[1]":
      "Se voi tarkoittaa myös sitä, että aika, suunnitelma tai ratkaisu sopii.",
  },
  "g2/a1/fi|a1-sich|a1.card.a1-sich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Itseään • Itselleen",
    "study.explanation[0]":
      "Pääajatus: sich osoittaa, että teko kohdistuu tekijään itseensä.",
    "study.explanation[1]":
      "Suomeksi sitä usein käännetään itseään tai itselleen.",
    "study.explanation[2]":
      "Joissakin saksan verbeissä sich on pakollinen osa, esimerkiksi sich waschen.",
    "study.explanation[3]":
      "A1-tasolla on tärkeää huomata: ich wasche mich, er wäscht sich.",
    "study.examples[0].lv": "Hän peseytyy.",
    "study.examples[1].lv": "Istun alas.",
    "study.examples[2].lv": "Hän iloitsee.",
    "study.examples[3].lv": "Pesen auton.",
    "study.comparison[0].meaning": "Itseään / itselleen",
    "study.comparison[1].meaning": "Minua / itseään ich-muodossa",
    "study.comparison[2].meaning": "Sinua / itseään du-muodossa",
    "study.comparison[3].meaning": "Häntä",
    "study.tip.text": "Muista: teko kohdistuu itseen → sich/mich/dich.",
    "study.important[0]": "sich ei ole itsenäinen substantiivi.",
    "study.important[1]":
      "Se muuttuu persoonan mukaan: ich → mich, du → dich, er/sie/es → sich.",
  },
  "g2/a1/fi|a1-wer|a1.card.a1-wer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Kuka",
    "study.explanation[0]":
      "Pääajatus: wer on kysymyssana henkilön identiteetistä — suomeksi se on kuka.",
    "study.explanation[1]":
      "wer kysyy ihmisistä, ei asioista tai tapahtumista.",
    "study.explanation[2]":
      "Asioista ja tapahtumista kysytään was, ei wer.",
    "study.explanation[3]":
      "wer on saksan kielessä yleensä lauseen subjekti (nominatiivi) — Wer ist das? = Kuka se on?",
    "study.explanation[4]":
      "Jos kysytään, kuka useista ihmisistä, wer usein yhdessä von (wer von euch = kuka teistä).",
    "study.explanation[5]":
      "wer muuttaa muotoa sijainnin mukaan: wen (akkusatiivi), wem (datiivi), wessen (genetiivi) — A1-tasolla yleisin on juuri wer.",
    "study.examples[0].lv": "Kuka se on?",
    "study.examples[1].lv": "Kuka sinä olet?",
    "study.examples[2].lv": "Kuka tulee tänään?",
    "study.examples[3].lv": "Kuka on opettajasi?",
    "study.examples[4].lv": "Kuka teistä puhuu saksaa?",
    "study.examples[5].lv": "Kuka sen sanoi?",
    "study.examples[6].lv": "Kuka haluaa kahvia?",
    "study.tip[0]":
      "wer kysyy henkilöistä (kuka) — asioista ja tapahtumista käytetään was.",
    "study.tip[1]":
      "Kysyäksesi valinnasta useiden ihmisten välillä, käytä wer von... (kuka... joukosta).",
    "study.important[0]": "wer kysyy vain henkilöistä, ei koskaan asioista.",
    "study.important[1]": "Asioista ja tapahtumista kysytään was, ei wer.",
    "study.important[2]":
      "wer muuttuu sijainnin mukaan: wen, wem, wessen — mutta perusmuoto on wer.",
    "study.important[3]": "Väärin: Wer ist passiert? → Oikein: Was ist passiert?",
  },
};

function noteFor(id, target, prod, pdfNote) {
  const card = id.match(/a1-[^|]+/)[0];
  if (pdfNote) return `FI ${card} PDF reaudit: ${pdfNote}. DE untouched.`;
  if (prod === target) {
    return `FI ${card} PDF reaudit: production already correct FI (${target}); NELABOT. DE untouched.`;
  }
  return `FI ${card} PDF reaudit: production "${prod}" → "${target}"; LABOT. DE untouched.`;
}

function effectiveScalarTarget(id) {
  const composite = TARGET_COMPOSITE[id];
  if (composite) return composite["study.translation"] || "";
  return TARGET_SCALAR[id];
}

const decisions = {};
let labotCount = 0;
let nelabotCount = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const prod = String(row.production_current || "").trim();
  const composite = TARGET_COMPOSITE[id];
  const scalar = TARGET_SCALAR[id];

  if (!composite && !scalar) {
    console.error(`Missing target for ${id}`);
    process.exit(1);
  }

  let ownerNew;
  let pdfNote;
  let needsChange;

  if (composite) {
    ownerNew = JSON.stringify(composite);
    needsChange = true;
    pdfNote = `full study composite ${composite["study.translation"]}`;
  } else {
    ownerNew = scalar;
    needsChange = prod !== scalar;
  }

  if (needsChange) {
    labotCount++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "LABOT",
      owner_new: ownerNew,
      owner_note: noteFor(id, effectiveScalarTarget(id), prod, pdfNote),
    };
  } else {
    nelabotCount++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "NELABOT",
      owner_new: "",
      owner_note: noteFor(id, scalar, prod, null),
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
      pdf_reaudit: true,
      derived_from_production: true,
    },
    null,
    2
  )
);
