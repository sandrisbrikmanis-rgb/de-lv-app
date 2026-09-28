#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-005";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);

/** Scalar FI targets — PDF reaudit, derived per row from lv_source + LV→DE study card. */
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

/** Full study composites — preserve LV→DE taught senses; no scalar narrowing. */
const TARGET_COMPOSITE = {
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Ajaa • Kuljettaa • Viedä",
    "study.explanation[0]":
      "Pääajatus: fahren tarkoittaa ajamista ajoneuvolla ja joissakin lauseissa myös kuljettamista tai viemistä.",
    "study.explanation[1]":
      "Fahrenia käytetään, kun liike tapahtuu autolla, bussilla, junalla, polkupyörällä tai muulla ajoneuvolla.",
    "study.explanation[2]":
      "Jos lauseessa on henkilö objektina, fahren voi tarkoittaa kuljettaa tai viedä.",
    "study.explanation[3]":
      "Jos liike tapahtuu jalkaisin, käytetään yleensä gehen tai laufen.",
    "study.examples[0].lv": "Ajan Berliiniin.",
    "study.examples[1].lv": "Ajan autolla.",
    "study.examples[2].lv": "Kuljetan tytärtäni kouluun.",
    "study.examples[3].lv": "Vien sinut kotiin.",
    "study.examples[4].lv": "Ajamme huomenna Müncheniin.",
    "study.comparison[0].meaning": "Ajaa ajoneuvolla",
    "study.comparison[1].meaning": "Mennä jalkaisin",
    "study.comparison[2].meaning": "Juosta / kävellä",
    "study.comparison[3].meaning": "Tuoda / toimittaa",
    "study.comparison[4].meaning": "Ottaa mukaan",
    "study.tip.text": "Muista: ajoneuvo → fahren; jalkaisin → gehen.",
    "study.important.text": "Fahren ≠ vain \"ajaa\"",
    "study.important.example":
      "Saksassa sama verbi usein tarkoittaa: ajaa • kuljettaa • viedä kontekstin mukaan.",
  },
  "g2/a1/fi|a1-frau|a1.card.a1-frau.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Nainen • Vaimo",
    "study.explanation[0]":
      "Pääajatus: die Frau voi tarkoittaa naista (sukupuoli) tai vaimoa (puoliso).",
    "study.explanation[1]":
      "Jos puhutaan sukupuolesta tai henkilöstä, die Frau = nainen.",
    "study.explanation[2]":
      "Jos puhutaan puolisosta, die Frau = vaimo (meine Frau = vaimoni).",
    "study.explanation[3]":
      "Omistuspronomini (meine/deine/seine Frau) tarkoittaa lähes aina vaimoa — puolisoa.",
    "study.examples[0].lv": "Hän on mukava nainen.",
    "study.examples[1].lv": "Tämä on vaimoni.",
    "study.examples[2].lv": "Kuinka monta naista on täällä?",
    "study.examples[3].lv": "Vaimoni työskentelee Berliinissä.",
    "study.examples[4].lv": "Nainen käyttää mekkoa.",
    "study.examples[5].lv": "Hänen vaimonsa on lääkäri.",
    "study.tip[0]":
      "Omistuspronominilla (meine/deine/seine Frau) tarkoitetaan lähes aina vaimoa (puolisoa).",
    "study.tip[1]":
      "Ilman omistuspronominia (die Frau, eine Frau) tarkoitetaan yleensä naista.",
    "study.important[0]": "die Frau = nainen TAI vaimo — riippuu kontekstista.",
    "study.important[1]": "meine Frau = vaimoni — ei tarkoita yleistä naista.",
    "study.important[2]": "Monikossa: die Frauen.",
  },
  "g2/a1/fi|a1-halten|a1.card.a1-halten.study.translation|MULTI_TRANSLATION|deterministic/multi-translation": {
    "study.translation": "Pitää • Pysähtyä",
    "study.explanation[0]": "Pääajatus: halten tarkoittaa useimmiten pitämistä.",
    "study.explanation[1]":
      "Bussin, junan tai muun kulkuneuvon yhteydessä halten voi tarkoittaa pysähtymistä.",
    "study.explanation[2]":
      "Erottuva verbi anhalten tarkoittaa pysähtymistä tai pysäyttämistä.",
    "study.explanation[3]":
      "Rakenne etwas für ... halten tarkoittaa pitää jotakin joksikin.",
    "study.examples[0].lv": "Pidän laukkua.",
    "study.examples[1].lv": "Bussi pysähtyy täällä.",
    "study.examples[2].lv": "Pysähtykää, olkaa hyvä.",
    "study.examples[3].lv": "Pidän sitä oikeana.",
    "study.comparison[0].meaning": "Pitää • liikenteessä myös pysähtyä",
    "study.comparison[0].example": "Der Bus hält. = Bussi pysähtyy.",
    "study.comparison[1].meaning": "Ottaa",
    "study.comparison[1].example": "Ich nehme die Tasche. = Otan laukun.",
    "study.comparison[2].meaning": "Pysähtyä • pysäyttää",
    "study.comparison[2].example": "Bitte halten Sie an. = Pysähtykää, olkaa hyvä.",
    "study.comparison[3].meaning": "Ajatella",
    "study.comparison[3].example":
      "Ich denke, das ist richtig. = Mielestäni se on oikein.",
    "study.tip.text":
      "Muista: esine kädessä → halten; pysähtyä → anhalten; kulkuneuvo pysähtyy → hält.",
    "study.important[0]": "halten tarkoittaa useimmiten pitää.",
    "study.important[1]": "Der Bus hält tarkoittaa: bussi pysähtyy.",
    "study.important[2]":
      "Bitte halten Sie an käytetään erillistä verbiä anhalten.",
  },
};

function noteFor(id, target, prod, pdfNote) {
  const card = id.match(/a1-[^|]+/)[0];
  if (pdfNote) return `FI ${card} PDF reaudit: ${pdfNote} DE untouched.`;
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
