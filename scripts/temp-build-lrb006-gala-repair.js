#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-006";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);

/** Correct FI owner_new per finding_stable_id — individual linguistic review (gpt-5.6-luna). */
const TARGET_FI = {
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
    "Tehdä • Laatia",
  "g2/a1/fi|a1-machen|a1.card.a1-machen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Tehdä • Laatia",
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
    "Ottaa • Ottaa mukaan",
  "g2/a1/fi|a1-nehmen|a1.card.a1-nehmen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Ottaa • Ottaa mukaan",
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
    "Sopia • Sovittua",
  "g2/a1/fi|a1-passen|a1.card.a1-passen.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sopia • Sovittua",
  "g2/a1/fi|a1-probieren|a1.card.a1-probieren.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kokeilla • Maistaa",
  "g2/a1/fi|a1-probieren|a1.card.a1-probieren.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kokeilla • Maistaa",
  "g2/a1/fi|a1-seite|a1.card.a1-seite.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sivu • Puoli",
  "g2/a1/fi|a1-seite|a1.card.a1-seite.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Sivu • Puoli",
  "g2/a1/fi|a1-sich|a1.card.a1-sich.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Itse • Itselleen",
  "g2/a1/fi|a1-sich|a1.card.a1-sich.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Itse • Itselleen",
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
    "Kuka • Joka",
  "g2/a1/fi|a1-wer|a1.card.a1-wer.study.translation|MULTI_TRANSLATION|deterministic/multi-translation":
    "Kuka • Joka",
  "g2/a1/fi|a1-wie|a1.card.a1-wie.native|MULTI_TRANSLATION|deterministic/multi-translation":
    "Miten • Kuinka",
};

function noteFor(id, target, prod) {
  const card = id.match(/a1-[^|]+/)[0];
  const fixes = {
    "a1-liegen": "gala: atrasties•gulēt→Sijaita•Maata; no Olla•Makata",
    "a1-machen": "gala: darīt•taisīt→Tehdä•Laatia; no Valmistaa/sagatavot expansion",
    "a1-nehmen": "gala: ņemt•paņemt→Ottaa•Ottaa mukaan; no Poimia",
    "a1-passen": "gala: derēt•piestāvēt→Sopia•Sovittua; no Sopia hyvin",
    "a1-wer": "gala: kas•kurš→Kuka•Joka; no Kumpi (which-of-two)",
    "a1-was": "gala: kas•ko→Mikä•Mitä lexical nom/acc fidelity",
  };
  const fix = fixes[card];
  if (prod === target) {
    return `FI ${card} gala: production already correct FI (${target}); NELABOT. DE untouched.`;
  }
  if (fix) {
    return `FI ${card} ${fix}. DE untouched.`;
  }
  return `FI ${card} gala: ET leak repair → "${target}". DE untouched.`;
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
