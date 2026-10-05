#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const {
  COMPOSITE_BY_ID,
  FINDING_TO_CARD,
  FINDING_TO_LANG,
  resolveCardKey,
} = require("./lib/lrb021-repair-engine");

const BATCH = "LRB-021";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);

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

function note(lang, cardKey) {
  const card = resolveCardKey(cardKey);
  if (lang === "gr") {
    return `GR ${card} full composite repair from data/gr/a1.js merge: FR/LV leak → Greek; DE↔GR aligned. DE untouched.`;
  }
  return `HR ${card} full composite repair from data/hr/a1.js merge: FR/LV leak → Croatian; DE↔HR aligned. DE untouched.`;
}

const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);
const decisions = {};
let labot = 0;
let nelabot = 0;

for (const row of rows) {
  const id = row.finding_stable_ids;
  const prod = normalizeVal(row.production_current);

  if (!FINDING_TO_CARD[id]) {
    console.error(`Missing mapping for ${id}`);
    process.exit(1);
  }

  const composite = COMPOSITE_BY_ID[id];
  if (!composite) {
    console.error(`Missing composite for ${id}`);
    process.exit(1);
  }

  const target = JSON.stringify(composite);
  const cardKey = FINDING_TO_CARD[id];
  const lang = FINDING_TO_LANG[id];
  labot++;
  decisions[id] = makeLabot(target, note(lang, cardKey));
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
      gr_rows: Object.values(FINDING_TO_LANG).filter((l) => l === "gr").length,
      hr_rows: Object.values(FINDING_TO_LANG).filter((l) => l === "hr").length,
      unique_cards: new Set(Object.values(FINDING_TO_CARD)).size,
    },
    null,
    2
  )
);
