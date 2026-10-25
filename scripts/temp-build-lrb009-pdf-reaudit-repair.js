#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-009";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const basePath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);

const base = JSON.parse(fs.readFileSync(basePath, "utf8"));

/** PDF reaudit overrides — erst + Geschichte (gpt-5.6-luna). */
const PDF_REAUDIT_OVERRIDES = {
  "g2/a1/fi|erst|idx:165|lv, study|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({
    lv: "Vain • Vasta",
    "study.translation": "Vain • Vasta",
    "study.explanation[0]":
      "Pääajatus: erst useimmiten tarkoittaa vain. Tietyissä yhteyksissä se voi tarkoittaa myös ensin.",
    "study.explanation[1]":
      "erst usein osoittaa, että jotain tapahtuu myöhemmin kuin odotettiin.",
    "study.explanation[2]": "Ich bin erst 18. — Olen vain 18-vuotias.",
    "study.explanation[3]": "Es ist erst Montag. — On vasta maanantai.",
    "study.explanation[4]": "Erst lernen, dann spielen. — Ensin opiskella, sitten leikkiä.",
    "study.examples[0].lv": "Ensin opiskella, sitten leikkiä.",
    "study.examples[1].lv": "Tulen vasta huomenna.",
    "study.examples[2].lv": "Hän on vasta 18-vuotias.",
    "study.examples[3].lv": "Syömme vasta kahdeksalta.",
    "study.comparison[0].meaning": "Vasta • vain",
    "study.comparison[0].example":
      "Erst lernen, dann spielen. – Ensin opiskellaan, sitten leikitään.",
    "study.comparison[1].meaning": "Ensin • alussa",
    "study.comparison[1].example": "Zuerst frühstücken wir. – Ensin aamiaistamme.",
    "study.comparison[2].meaning": "Vain",
    "study.comparison[2].example": "Ich habe nur 5 Euro. – Minulla on vain 5 euroa.",
    "study.comparison[3].meaning": "Sitten",
    "study.comparison[3].example": "Dann gehen wir nach Hause. – Sitten menemme kotiin.",
    "study.tip.text": "Muista: aika/määrä → erst; määrärajoitus → nur.",
    "study.important[0]":
      "erst ja nur voivat molemmat kuulostaa \"vain\", mutta ne eivät ole sama asia.",
    "study.important[1]":
      "erst puhuu usein ajasta, järjestyksestä tai vasta saavutetusta pisteestä; nur rajoittaa määrää.",
    "study.important[2]": "zuerst tarkoittaa useimmiten: ensin.",
  }),
  "g2/a1/fi|Geschichte|idx:233|lv, study.*|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna":
    JSON.stringify({
      "study.tip[0]":
        "eine Geschichte ja die Geschichten tarkoittavat yleensä tarinaa tai tarinoita.",
      "study.tip[1]":
        "Oppiaineena tai historiallisessa merkityksessä Geschichte tarkoittaa historiaa.",
    }),
};

const PDF_NOTES = {
  erst:
    "PDF reaudit: comparison[0] single DE→FI pair; erst/zuerst/nur/dann contrast; DE↔FI aligned; no scrambled pairs",
  Geschichte:
    "PDF reaudit: tip distinguishes tarina/tarinat vs historia; keine Widersprüche tip/explanation/comparison",
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
  const pdfNote = PDF_NOTES[card];
  if (pdfNote) {
    return `FI ${card} ${pdfNote}. DE untouched.`;
  }
  const prior = base[id]?.owner_note;
  if (prior) return prior;
  if (prod === target) {
    return `FI ${card} PDF reaudit: production already correct; NELABOT. DE untouched.`;
  }
  return `FI ${card} PDF reaudit: unchanged from prior review. DE untouched.`;
}

const TARGET_FI = {};
for (const row of rows) {
  const id = row.finding_stable_ids;
  if (PDF_REAUDIT_OVERRIDES[id] !== undefined) {
    TARGET_FI[id] = PDF_REAUDIT_OVERRIDES[id];
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
      pdf_reaudit: true,
      reaudit_overrides: Object.keys(PDF_REAUDIT_OVERRIDES).length,
      derived_from_production: true,
    },
    null,
    2
  )
);
