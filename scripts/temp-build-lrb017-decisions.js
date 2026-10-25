#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { COMPOSITE_BY_ID } = require("./lib/lrb017-composite-targets");

const BATCH = "LRB-017";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);

const SCALAR_TARGETS = {
  voll: "Täysi",
  von: "-sta/-stä",
  Vorname: "Etunimi",
  Wald: "Metsä",
  Wand: "Seinä",
  wann: "Milloin",
  warm: "Lämmin",
  warten: "Odottaa",
  warum: "Miksi",
  waschen: "Pestä",
  Weg: "Tie",
  Weihnachten: "Joulu",
  Wein: "Viini",
  weinen: "Itkeä",
  weiß: "Valkoinen",
  welcher: "Mikä",
  Welt: "Maailma",
  wenig: "Vähän",
  wichtig: "Tärkeä",
  "wie viel": "Kuinka paljon",
  wieder: "Taas",
  Wind: "Tuuli",
  Wochenende: "Viikonloppu",
  Zigarette: "Tupakka",
  Zimmer: "Huone",
  Zitrone: "Sitruuna",
  Zoo: "Eläintarha",
  "zu viel": "Liikaa",
  Zucker: "Sokeri",
  zuerst: "Ensin",
  zumachen: "Sulkea",
  zurück: "Takaisin",
  zusammen: "Yhdessä",
  zwanzig: "Kaksikymmentä",
  zwanzigste: "Kahdeskymmenes",
  zwei: "Kaksi",
  zweihundert: "Kaksisataa",
  zweimal: "Kahdesti",
};

const NELABOT_CARDS = new Set(["Wasser"]);

const ET_FOR_NOTE = {
  voll: "Täis",
  von: "-st",
  Vorname: "Eesnimi",
  Wald: "Mets",
  Wand: "Sein",
  wann: "Millal",
  warm: "Soe",
  warten: "Ootama",
  warum: "Miks",
  waschen: "Pesema",
  Wasser: "Vesi",
  Weg: "Tee",
  Weihnachten: "Jõulud",
  Wein: "Vein",
  weinen: "Nutma",
  weiß: "Valge",
  welcher: "Milline",
  Welt: "Maailm",
  wenig: "Vähe",
  wichtig: "Tähtis",
  "wie viel": "Kui palju",
  wieder: "Jälle",
  Wind: "Tuul",
  Wochenende: "Nädalavahetus",
  Zigarette: "Sigaret",
  Zimmer: "Tuba",
  Zitrone: "Sidrun",
  Zoo: "Loomaaed",
  "zu viel": "Liiga palju",
  Zucker: "Suhkur",
  zuerst: "Kõigepealt",
  zumachen: "Kinni tegema",
  zurück: "Tagasi",
  zusammen: "Koos",
  zwanzig: "Kakskümmend",
  zwanzigste: "Kahekümnes",
  zwei: "Kaks",
  zweihundert: "Kakssada",
  zweimal: "Kaks korda",
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

function noteFor(card, decision, et, target) {
  if (decision === "NELABOT") {
    return `FI ${card} lv: production ${et} already correct Finnish. DE untouched.`;
  }
  if (COMPOSITE_BY_ID[`g2/a1/fi|${card}|`]) {
    return `FI ${card} full composite study repair: ET/LV→FI; DE↔FI aligned. DE untouched.`;
  }
  for (const id of Object.keys(COMPOSITE_BY_ID)) {
    if (id.includes(`|${card}|`)) {
      return `FI ${card} full composite study repair: ET/LV→FI; DE↔FI aligned. DE untouched.`;
    }
  }
  return `FI ${card} lv: ET ${et} → FI ${target}. DE untouched.`;
}

const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);
const decisions = {};
let labot = 0;
let nelabot = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const card = row.card_object_id.split("|")[0];
  const prod = normalizeVal(row.production_current);

  if (COMPOSITE_BY_ID[id]) {
    const target = JSON.stringify(COMPOSITE_BY_ID[id]);
    if (prod !== normalizeVal(target)) {
      labot++;
      decisions[id] = {
        owner_status: "DECIDED",
        owner_decision: "LABOT",
        owner_new: target,
        owner_note: noteFor(card, "LABOT", "", "composite"),
      };
    } else {
      nelabot++;
      decisions[id] = {
        owner_status: "DECIDED",
        owner_decision: "NELABOT",
        owner_new: "",
        owner_note: noteFor(card, "NELABOT", "", ""),
      };
    }
    continue;
  }

  if (NELABOT_CARDS.has(card)) {
    nelabot++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "NELABOT",
      owner_new: "",
      owner_note: noteFor(card, "NELABOT", prod, prod),
    };
    continue;
  }

  const target = SCALAR_TARGETS[card];
  if (!target) {
    console.error(`Missing target for ${card}`);
    process.exit(1);
  }
  const et = ET_FOR_NOTE[card] || row.production_current;
  if (prod !== normalizeVal(target)) {
    labot++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "LABOT",
      owner_new: target,
      owner_note: noteFor(card, "LABOT", et, target),
    };
  } else {
    nelabot++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "NELABOT",
      owner_new: "",
      owner_note: noteFor(card, "NELABOT", et, target),
    };
  }
}

if (Object.keys(decisions).length !== 50) {
  console.error(`Expected 50 decisions, got ${Object.keys(decisions).length}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      total: 50,
      labot,
      nelabot,
      pending: 0,
      composite: Object.keys(COMPOSITE_BY_ID).length,
      nelabot_cards: [...NELABOT_CARDS],
    },
    null,
    2,
  ),
);
