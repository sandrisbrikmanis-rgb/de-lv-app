#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-010";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const basePath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);

const base = JSON.parse(fs.readFileSync(basePath, "utf8"));

/** PDF reaudit overrides — Gesundheit + composite verification (gpt-5.6-luna). */
const PDF_REAUDIT_OVERRIDES = {
  "g2/a1/fi|Gesundheit|idx:238|lv|WRONG_LANGUAGE|gpt-5.6-luna": "Terveys",
  "g2/a1/fi|gleich|idx:243|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({
    lv: "Kohta • Sama",
    "study.translation": "Kohta • Sama",
    "study.explanation[0]":
      "Pääajatus: gleich tarkoittaa ajallisesti kohta tai pian, vertailussa sama tai yhtä suuri.",
    "study.explanation[1]":
      "Kun puhutaan ajasta, gleich = kohta/pian (Ich komme gleich. = Tulen kohta.).",
    "study.explanation[2]":
      "Kun puhutaan vertailusta, gleich = sama/yhtä suuri (die gleiche Farbe = sama väri).",
    "study.explanation[3]": "Konteksti (aikalause tai vertailu) kertoo oikean merkityksen.",
    "study.examples[0].lv": "Tulen kohta.",
    "study.examples[1].lv": "Meillä on sama väri.",
    "study.examples[2].lv": "Ruoka on kohta valmista.",
    "study.examples[3].lv": "Molemmat tiet ovat yhtä pitkät.",
    "study.examples[4].lv": "Nähdään kohta!",
    "study.examples[5].lv": "He ovat yhtä pitkät.",
    "study.tip[0]": "Ajasta → kohta.",
    "study.tip[1]": "Vertailusta → sama.",
    "study.important[0]":
      "gleich = kohta (aika) TAI sama (vertailu) — riippuen kontekstista.",
    "study.important[1]": "Bis gleich! = nähdään kohta! — yleinen hyvästely.",
  }),
  "g2/a1/fi|groß|idx:250|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({
    lv: "Suuri",
    "study.translation": "Suuri",
    "study.explanation[0]":
      "Pääajatus: groß tarkoittaa suurta mitassa; ihmisestä se tarkoittaa yleensä pitkää.",
    "study.explanation[1]": "groß kuvaa esineitä, paikkoja ja yleistä kokoa.",
    "study.explanation[2]":
      "Ihmisen kohdalla Er ist groß tarkoittaa pitkää, ei leveää tai paksua.",
    "study.examples[0].lv": "Talo on suuri.",
    "study.examples[1].lv": "Berliini on suuri kaupunki.",
    "study.examples[2].lv": "Hän on pitkä.",
    "study.examples[3].lv": "Huone on suuri.",
    "study.tip[0]": "Esineille ja paikoille groß = suuri.",
    "study.tip[1]": "Ihmiselle groß = pitkä.",
    "study.important[0]": "Ihmisestä Er ist groß tarkoittaa: hän on pitkä.",
    "study.important[1]": "Esineestä tai paikasta groß tarkoittaa suurta.",
  }),
  "g2/a1/fi|Großeltern|idx:251|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({
    "study.comparison[1].meaning": "Isoäiti",
    "study.comparison[2].meaning": "Isoisä",
  }),
  "g2/a1/fi|gut|idx:259|lv/study|LANGUAGE_MISMATCH|gpt-5.6-luna": JSON.stringify({
    lv: "Hyvä",
    "study.translation": "Hyvä",
    "study.explanation[0]":
      "Pääajatus: gut on adjektiivi tai adverbi — hyvä, hyvin, kunnossa.",
    "study.explanation[1]":
      "gut kuvaa laatua, terveyttä tai miten jokin menee (Es geht mir gut. = Minulla menee hyvin.).",
    "study.explanation[2]":
      "Tervehdyksissä Guten Morgen!, Guten Tag! ja Guten Abend! sanalla gut on pääte -en.",
    "study.explanation[3]": "Kun gut kuvaa verbiä, se on adverbi (gut schwimmen = uida hyvin).",
    "study.explanation[4]":
      "Älä sekoita sanan das Gut kanssa — se isolla alkukirjaimella ja artikkelilla on substantiivi (omaisuus, kartano).",
    "study.examples[0].lv": "Ruoka on hyvää.",
    "study.examples[1].lv": "Mitä kuuluu? – Hyvin, kiitos!",
    "study.examples[2].lv": "Hän puhuu hyvin saksaa.",
    "study.examples[3].lv": "Hyvää huomenta!",
    "study.examples[4].lv": "Se on hyvä idea.",
    "study.examples[5].lv": "Kaikki on kunnossa.",
    "study.tip[0]": "gut ilman artikkelia on adjektiivi/adverbi — hyvä/hyvin.",
    "study.tip[1]":
      "das Gut isolla alkukirjaimella ja artikkelilla on eri sana — substantiivi (omaisuus, kartano).",
    "study.important[0]": "gut = hyvä/hyvin (adjektiivi/adverbi).",
    "study.important[1]":
      "das Gut = omaisuus/kartano (substantiivi) — älä sekoita gut-sanaan.",
    "study.important[2]": "Guten Morgen/Tag/Abend — gut päättyy -en taivutuksessa.",
  }),
};

const PDF_NOTES = {
  Gesundheit:
    "PDF reaudit: ET Tervis → FI Terveys; not genuine Finnish",
  gleich: "PDF reaudit: full composite Kohta/Sama; DE↔FI aligned; no ET/LV residue",
  groß: "PDF reaudit: full composite Suuri; Berlin example aligned; no ET/LV residue",
  Großeltern: "PDF reaudit: comparison Isoäiti/Isoisä; DE↔FI aligned",
  gut: "PDF reaudit: full composite Hyvä; DE↔FI aligned; no ET/LV residue",
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
