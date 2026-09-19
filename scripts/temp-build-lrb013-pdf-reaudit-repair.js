#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-013";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const basePath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);
const base = JSON.parse(fs.readFileSync(basePath, "utf8"));

const PDF_REAUDIT_OVERRIDES = {
  "g2/a1/fi|nicht|idx:447|lv|TARGET_LANGUAGE|gpt-5.6-luna": "ei (+verbi)",
  "g2/a1/fi|noch mal|idx:701|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna":
    JSON.stringify({
      lv: "Uudestaan",
      "study.translation": "Uudestaan",
      "study.explanation[0]":
        "Pääajatus: Tarkoittaa uudestaan — toiminnon toistaminen tai toiston pyytäminen.",
      "study.examples[0].lv": "Uudestaan, olkaa hyvä.",
      "study.examples[1].lv": "Uudestaan, olkaa hyvä.",
      "study.examples[2].lv": "Sano se uudestaan.",
      "study.tip": '["Käytä noch mal, kun konteksti vastaa tätä merkitystä."]',
      "study.important[0]":
        "Tarkoittaa uudelleen — toiminnon toistaminen tai toiston pyytäminen.",
      "study.important[1]": "noch mal: tarkista konteksti ennen käyttöä.",
    }),
};

const PDF_NOTES = {
  nicht:
    "PDF reaudit: scalar Ei is verb-negation form, not independent nicht equivalent; metalinguistic ei (+verbi)",
  "noch mal":
    "PDF reaudit: removed mechanical duplicate study.tip[1]; examples[0]/[1] mirror source DE duplicate",
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
  const card = id.match(/\|([^|]+)\|/)?.[1] || id;
  const pdfNote = PDF_NOTES[card];
  if (pdfNote) return `FI ${card} ${pdfNote}. DE untouched.`;
  const prior = base[id]?.owner_note;
  if (prior) return prior;
  if (prod === target) return `FI ${card} PDF reaudit: production already correct; NELABOT. DE untouched.`;
  return `FI ${card} PDF reaudit: unchanged from prior review. DE untouched.`;
}

const TARGET_FI = {};
for (const row of rows) {
  const id = row.finding_stable_ids;
  if (PDF_REAUDIT_OVERRIDES[id] !== undefined) TARGET_FI[id] = PDF_REAUDIT_OVERRIDES[id];
  else if (base[id]?.owner_decision === "LABOT" && base[id].owner_new) TARGET_FI[id] = base[id].owner_new;
  else TARGET_FI[id] = String(row.production_current || "").trim();
}

const decisions = {};
let labotCount = 0;
let nelabotCount = 0;
for (const row of rows) {
  const id = row.finding_stable_ids;
  const target = TARGET_FI[id];
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
  console.error("Expected 50");
  process.exit(1);
}
fs.writeFileSync(outPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(
  JSON.stringify(
    { total: 50, labot: labotCount, nelabot: nelabotCount, pending: 0, pdf_reaudit: true },
    null,
    2
  )
);
