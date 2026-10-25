#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-005";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);

/** Correct FI owner_new per finding_stable_id — derived from individual linguistic review. */
const TARGET_FI = {
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
  "g2/a1/fi|a1-fahren|a1.card.a1-fahren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ajaa",
  "g2/a1/fi|a1-finden|a1.card.a1-finden.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Löytää",
  "g2/a1/fi|a1-finden|a1.card.a1-finden.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Löytää",
  "g2/a1/fi|a1-frau|a1.card.a1-frau.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Nainen",
  "g2/a1/fi|a1-frau|a1.card.a1-frau.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
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
  "g2/a1/fi|a1-halten|a1.card.a1-halten.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
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

function noteFor(id, target, prod) {
  const card = id.match(/a1-[^|]+/)[0];
  if (prod === target) {
    return `FI ${card} gala: production already correct FI (${target}); NELABOT. DE untouched.`;
  }
  return `FI ${card} gala: production "${prod}" → "${target}"; LABOT. DE untouched.`;
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
  const prod = String(row.production_current || "").trim();
  const needsChange = prod !== target;

  if (needsChange) {
    labotCount++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "LABOT",
      owner_new: target,
      owner_note: noteFor(id, target, prod),
    };
  } else {
    nelabotCount++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "NELABOT",
      owner_new: "",
      owner_note: noteFor(id, target, prod),
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
    },
    null,
    2
  )
);
