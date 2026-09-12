#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const {
  COMPOSITE_BY_ID,
  FINDING_TO_CARD,
  resolveCardKey,
} = require("./lib/lrb018-fr-repair-engine");

const BATCH = "LRB-018";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);

const FI_SCALAR_TARGETS = {
  "g2/a1/fi|zweite|idx:682|lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    target: "Toinen",
    note:
      "FI zweite lv: ET Teine → FI Toinen for otrais second ordinal. DE untouched.",
  },
  "g2/a1/fi|Zwiebel|idx:683|lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    target: "Sipuli",
    note:
      "FI Zwiebel lv: ET Sibul → FI Sipuli for sīpols onion. DE untouched.",
  },
  "g2/a1/fi|zwischen|idx:684|lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    target: "Välissä",
    note:
      "FI zwischen lv: ET Vahel → FI Välissä for starp between/among. DE untouched.",
  },
  "g2/a1/fi|zwölf|idx:685|lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    target: "Kaksitoista",
    note:
      "FI zwölf lv: ET Kaksteist → FI Kaksitoista for divpadsmit twelve. DE untouched.",
  },
  "g2/a1/fi|zwölfte|idx:686|lv|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": {
    target: "Kahdestoista",
    note:
      "FI zwölfte lv: ET Kaheteistkümnes → FI Kahdestoista for divpadsmitais twelfth. DE untouched.",
  },
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

function makeLabot(ownerNew, note) {
  return {
    owner_status: "DECIDED",
    owner_decision: "LABOT",
    owner_new: ownerNew,
    owner_note: note,
  };
}

function frNote(cardKey) {
  const card = resolveCardKey(cardKey);
  return `FR ${card} full composite repair from data/fr/a1.js merge: LV/ET/EN leak → French; DE↔FR aligned. DE untouched.`;
}

const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);
const decisions = {};
let labot = 0;
let nelabot = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const prod = normalizeVal(row.production_current);

  if (FI_SCALAR_TARGETS[id]) {
    const { target, note } = FI_SCALAR_TARGETS[id];
    if (prod !== normalizeVal(target)) {
      labot++;
      decisions[id] = makeLabot(target, note);
    } else {
      nelabot++;
      decisions[id] = {
        owner_status: "DECIDED",
        owner_decision: "NELABOT",
        owner_new: "",
        owner_note: note.replace("→", "already"),
      };
    }
    continue;
  }

  if (!FINDING_TO_CARD[id]) {
    console.error(`Missing FR mapping for ${id}`);
    process.exit(1);
  }

  const composite = COMPOSITE_BY_ID[id];
  if (!composite) {
    console.error(`Missing composite for ${id}`);
    process.exit(1);
  }

  const target = JSON.stringify(composite);
  const cardKey = FINDING_TO_CARD[id];
  labot++;
  decisions[id] = makeLabot(target, frNote(cardKey));
}

if (Object.keys(decisions).length !== 50) {
  console.error(`Expected 50 decisions, got ${Object.keys(decisions).length}`);
  process.exit(1);
}

if (labot !== 50) {
  console.error(`Expected labot=50, got ${labot}`);
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
      fr_composite_cards: new Set(Object.values(FINDING_TO_CARD)).size,
      fr_rows: Object.keys(FINDING_TO_CARD).length,
    },
    null,
    2
  )
);
