#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-016";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);

const UHR_ID =
  "g2/a1/fi|Uhr|idx:698|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna";

const UHR_SECTION_ACCENTS = {
  explanation: { blue: ["Uhr"], purple: ["Kello"] },
  examples: [
    { de: { blue: ["uhr"] }, lv: { purple: ["kahdeksan"] } },
    { de: { blue: ["uhr"] }, lv: { purple: ["kahdeksan"] } },
    { de: { blue: ["uhr"] }, lv: { purple: ["Kelloni", "rikki"] } },
    { de: { blue: ["uhr"] }, lv: { purple: ["kahdeksan"] } },
    { de: { blue: ["uhr"] }, lv: { purple: ["kahdeksan"] } },
    { de: { blue: ["die Uhr", "uhr"] }, lv: { purple: ["Kello"] } },
  ],
  tip: [{ purple: ["Kello"] }],
  important: [{ blue: ["die Uhr"] }],
};

const UHR_COMPOSITE = {
  lv: "Kello",
  "study.translation": "Kello",
  "study.explanation[0]":
    "Pääajatus: die Uhr tarkoittaa kelloa — käekelloa tai seinäkelloa.",
  "study.explanation[1]":
    "Es ist acht Uhr tarkoittaa, että kello on kahdeksan.",
  "study.explanation[2]":
    "Kontekstista riippuu, tarkoitetaanko kellolaitetta vai kellonaikaa.",
  "study.explanation[3]":
    "Yleisiä esimerkkejä: Meine Uhr ist kaputt. = Kelloni on rikki.",
  "study.examples[0].lv": "Kello on kahdeksan.",
  "study.examples[1].lv": "Kello on kahdeksan.",
  "study.examples[2].lv": "Kelloni on rikki.",
  "study.examples[3].lv": "Kello on kahdeksan.",
  "study.examples[4].lv": "Kello on kahdeksan.",
  "study.examples[5].lv": "Kello",
  "study.tip[0]": "Kello tai rannekello. Myös aika kellolla: Es ist acht Uhr.",
  "study.tip[1]": "Käytä die Uhr, kun konteksti vastaa tätä merkitystä.",
  "study.important[0]": "die Uhr: laite (meine Uhr) tai aika (acht Uhr).",
  "study.important[1]": "die Uhr: tarkista konteksti ennen käyttöä.",
  "study.sectionAccents": UHR_SECTION_ACCENTS,
};

/** card → FI target (scalar lv) */
const SCALAR_TARGETS = {
  Stadt: "Kaupunki",
  Student: "Opiskelija",
  Stuhl: "Tuoli",
  Stunde: "Tunti",
  suchen: "Etsiä",
  "süß": "Makea",
  Tag: "Päivä",
  Tante: "Täti",
  tanzen: "Tanssia",
  Tasche: "Laukku",
  Tasse: "Kuppi",
  Taxi: "Taksi",
  Telefon: "Puhelin",
  telefonieren: "Soittaa",
  Teller: "Lautanen",
  teuer: "Kallis",
  Text: "Teksti",
  Tier: "Eläin",
  Tisch: "Pöytä",
  Tochter: "Tytär",
  Toilette: "Vessa",
  Tomate: "Tomaatti",
  Treppe: "Portaat",
  trinken: "Juoda",
  tun: "Tehdä",
  Tür: "Ovi",
  "U-Bahn": "Metro",
  überall: "Kaikkialla",
  übermorgen: "Ylihuomen",
  unser: "Meidän",
  unten: "Alhaalla",
  Vase: "Maljakko",
  Vater: "Isä",
  verheiratet: "Naimisissa",
  verkaufen: "Myydä",
  verlieren: "Menettää",
  versuchen: "Yrittää",
  viel: "Paljon",
  vielleicht: "Ehkä",
  vier: "Neljä",
  vierhundert: "Neljäsataa",
  vierte: "Neljäs",
  vierzehn: "Neljätoista",
  vierzehnte: "Neljästoista",
  vierzig: "Neljäkymmentä",
  vierzigste: "Neljäskymmenes",
  Vogel: "Lintu",
};

/** production already correct Finnish — NELABOT */
const NELABOT_CARDS = new Set(["Tee", "teuer", "und"]);

const ET_FOR_NOTE = {
  Stadt: "Linn",
  Student: "Üliõpilane",
  Stuhl: "Tool",
  Stunde: "Tund",
  suchen: "Otsima",
  "süß": "Magus",
  Tag: "Päev",
  Tante: "Tädi",
  tanzen: "Tantsima",
  Tasche: "Kott",
  Tasse: "Tass",
  Taxi: "Takso",
  Telefon: "Telefon",
  telefonieren: "Telefoniga helistama",
  Teller: "Taldrik",
  teuer: "Kallis",
  Text: "Tekst",
  Tier: "Loom",
  Tisch: "Laud",
  Tochter: "Tütar",
  Toilette: "Tualett",
  Tomate: "Tomat",
  Treppe: "Trepp",
  trinken: "Jooma",
  tun: "Tegema",
  Tür: "Uks",
  "U-Bahn": "Metroo",
  überall: "Kõikjal",
  übermorgen: "Ülehomme",
  unser: "Meie",
  unten: "All",
  Vase: "Vaas",
  Vater: "Isa",
  verheiratet: "Abielus",
  verkaufen: "Müüma",
  verlieren: "Kaotama",
  versuchen: "Üritama",
  viel: "Palju",
  vielleicht: "Võib-olla",
  vier: "Neli",
  vierhundert: "Nelisada",
  vierte: "Neljas",
  vierzehn: "Neliteist",
  vierzehnte: "Neljateistkümnes",
  vierzig: "Nelikümmend",
  vierzigste: "Neljakümnes",
  Vogel: "Lind",
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
    if (card === "Tee") {
      return "FI Tee lv: production Tee already correct Finnish for tēja (tea). DE untouched.";
    }
    if (card === "und") {
      return "FI und lv: production Ja already correct Finnish for un (and). DE untouched.";
    }
    if (card === "teuer") {
      return "FI teuer lv: production Kallis already correct Finnish for dārgs (expensive). DE untouched.";
    }
    return `FI ${card} production already correct Finnish; NELABOT. DE untouched.`;
  }
  if (card === "Uhr") {
    return "FI Uhr composite repair: Kell→Kello; examples[5]=Kello; sectionAccents.examples FI-aligned (no kell/kaheksa/aega ET highlights). DE untouched.";
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

  if (id === UHR_ID) {
    const target = JSON.stringify(UHR_COMPOSITE);
    const normTarget = normalizeVal(target);
    if (prod !== normTarget) {
      labot++;
      decisions[id] = {
        owner_status: "DECIDED",
        owner_decision: "LABOT",
        owner_new: target,
        owner_note: noteFor("Uhr", "LABOT", "Põhiidee/tähendab", "Kell composite"),
      };
    } else {
      nelabot++;
      decisions[id] = {
        owner_status: "DECIDED",
        owner_decision: "NELABOT",
        owner_new: "",
        owner_note: noteFor("Uhr", "NELABOT", "", ""),
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
      owner_note: noteFor(card, "NELABOT", "", prod),
    };
    continue;
  }

  const target = SCALAR_TARGETS[card];
  if (!target) {
    console.error(`Missing SCALAR_TARGETS for ${card}`);
    process.exit(1);
  }
  const normTarget = normalizeVal(target);
  const et = ET_FOR_NOTE[card] || row.production_current;

  if (prod !== normTarget) {
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
    { total: 50, labot, nelabot, pending: 0, composite: 1, nelabot_cards: [...NELABOT_CARDS] },
    null,
    2,
  ),
);
