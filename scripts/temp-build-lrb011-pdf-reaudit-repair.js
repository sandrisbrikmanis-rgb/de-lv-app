#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-011";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const basePath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);

const base = JSON.parse(fs.readFileSync(basePath, "utf8"));

/** PDF reaudit overrides — hübsch explanation[2] micro-repair (gpt-5.6-luna). */
const PDF_REAUDIT_OVERRIDES = {
  "g2/a1/fi|hübsch|idx:288|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": "{\"lv\":\"kaunis\",\"study.translation\":\"kaunis\",\"study.explanation[0]\":\"Pääajatus: hübsch tarkoittaa kaunista, houkuttelevaa tai sympatiaa herättävää ulkonäköä.\",\"study.explanation[1]\":\"hübsch usein kuvailee henkilön, vaatteen, huoneen tai esineen ulkonäköä.\",\"study.explanation[2]\":\"Sana mukava voi sopia joihinkin yhteyksiin, mutta se on liian laaja pääkäännökseksi.\",\"study.explanation[3]\":\"Persoonallisuutta tai ystävällistä käytöstä saksassa yleensä kuvataan sanalla nett.\",\"study.examples[0].lv\":\"Hänellä on kaunis puku.\",\"study.examples[1].lv\":\"Huone on kaunis.\",\"study.examples[2].lv\":\"Se on kaunis kuva.\",\"study.comparison[0].meaning\":\"kaunis • houkutteleva ulkonäöllään\",\"study.comparison[0].example\":\"Das ist ein hübsches Kleid. – Se on kaunis puku.\",\"study.comparison[1].meaning\":\"kaunis • miellyttävä\",\"study.comparison[1].example\":\"Der Garten ist schön. – Puutarha on kaunis.\",\"study.comparison[2].meaning\":\"mukava • ystävällinen\",\"study.comparison[2].example\":\"Sie ist sehr nett. – Hän on hyvin mukava.\",\"study.tip.text\":\"Muista: hübsch kuvaa ennen kauneutta ulkonäössä, nett ystävällistä käytöstä tai persoonallisuutta.\",\"study.important[0]\":\"hübsch ei ole yleinen käännös sanalle mukava.\",\"study.important[1]\":\"Persoonallisuudelle tai ystävälliselle käytökselle sopii yleensä paremmin nett.\"}"
};

const PDF_NOTES = {
  hübsch:
    "PDF reaudit: study.explanation[2] natural FI — Sana mukava voi sopia joihinkin yhteyksiin",
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
