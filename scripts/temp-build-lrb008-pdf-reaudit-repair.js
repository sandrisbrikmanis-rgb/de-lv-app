#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-008";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const basePath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);

const base = JSON.parse(fs.readFileSync(basePath, "utf8"));

/** PDF reaudit overrides — besuchen, bitte, Bitte (gpt-5.6-luna). */
const PDF_REAUDIT_OVERRIDES = {
  "g2/a1/fi|besuchen|idx:89|lv; study.*|TARGET_LANGUAGE_ERROR|gpt-5.6-luna": JSON.stringify({
    lv: "vierailla",
    "study.translation": "vierailla",
    "study.explanation[0]":
      "Pääajatus: besuchen käytetään, kun käydään paikalla, tapahtumassa tai henkilön luona.",
    "study.explanation[1]":
      "Paikkaa, tapahtumaa tai kurssia suomeksi yleensä vieraillaan.",
    "study.explanation[2]":
      "Jos besuchen koskee henkilöä, suomeksi usein luontevampaa on käydä jonkun luona.",
    "study.explanation[3]":
      "Saksan kielessä besuchen käytetään ilman prepositiota ja akkusatiivin kanssa.",
    "study.examples[0].lv": "Käyn museossa.",
    "study.examples[1].lv": "Osallistumme saksankielen kurssille.",
    "study.examples[2].lv": "Käyn isoäidin ja isoisän luona.",
    "study.comparison[0].meaning":
      "vierailla paikassa tai tapahtumassa • käydä henkilön luona",
    "study.comparison[0].example":
      "Ich besuche meine Großeltern. – Käyn isoäidin ja isoisän luona.",
    "study.comparison[1].meaning": "kohdata",
    "study.comparison[1].example":
      "Ich treffe meinen Freund. – Kohtaan ystäväni.",
    "study.comparison[2].meaning": "mennä jonkun luo",
    "study.comparison[2].example":
      "Ich gehe zu meinem Freund. – Menen ystäväni luo.",
    "study.tip.text":
      "Muista: paikkaa voi vierailla, mutta henkilön luona yleensä käydään.",
    "study.important[0]":
      "besuchen käytetään ilman prepositiota: Ich besuche meine Freundin.",
    "study.important[1]":
      "Suomenkielinen käännös riippuu objektista: vierailla paikassa, käydä henkilön luona.",
  }),
  "g2/a1/fi|bitte|idx:93|study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna":
    JSON.stringify({
      "study.translation": "Kiitos",
      "study.explanation[0]":
        "Pääajatus: bitte pienellä alkukirjaimella on kohteliaisuussana, joka tarkoittaa kiitos tai ole hyvä.",
      "study.explanation[1]":
        "Sitä käytetään pyynnöissä, tilauksissa ja kohteliaissa vastauksissa.",
      "study.explanation[2]":
        "Substantiivi die Bitte isolla alkukirjaimella tarkoittaa pyyntöä.",
      "study.examples[0].lv": "Yksi kuppi kahvia, kiitos.",
      "study.examples[1].lv": "Tule sisään, ole hyvä.",
      "study.examples[2].lv": "Ole hyvä!",
      "study.examples[3].lv": "Voinko kysyä, kiitos?",
      "study.examples[4].lv": "Minulla on yksi pyyntö.",
      "study.examples[5].lv": "Pyyntö on tärkeä.",
      "study.comparison[0].meaning": "Ole hyvä • kiitos",
      "study.comparison[0].example":
        "Komm bitte herein. – Tule sisään, ole hyvä.",
      "study.comparison[1].meaning": "Pyyntö",
      "study.comparison[1].example":
        "Ich habe eine Bitte. – Minulla on pyyntö.",
      "study.tip[0]":
        "Muista: pieni bitte = kiitos/ole hyvä (Bitte schön!, Kaffee, bitte). die Bitte isolla = pyyntö (eine Bitte, meine Bitte).",
      "study.tip[1]":
        "Kohteliaisuussana pienellä alkukirjaimella. Käytetään, kun halutaan olla kohtelias — kiitos.",
      "study.important[0]":
        "bitte kirjoitetaan pienellä — se on kohteliaisuussana, ei substantiivi.",
      "study.important[1]":
        "die Bitte isolla alkukirjaimella ja artikkelilla die on substantiivi.",
      "study.important[2]": "Monikko: die Bitten (pyynnöt).",
    }),
  "g2/a1/fi|Bitte|idx:94|study.explanation, study.examples, study.comparison|TRANSLATION_ERROR|gpt-5.6-luna":
    JSON.stringify({
      "study.translation": "Pyyntö",
      "study.explanation[0]":
        "Pääajatus: die Bitte on substantiivi artikkelilla die ja isolla alkukirjaimella. Konkreettinen pyyntö tai toive.",
      "study.explanation[1]":
        "die Bitte tarkoittaa pääasiassa: pyyntö tai toive.",
      "study.explanation[2]":
        "Kuvaa usein: konkreettista pyyntöä tai anomusta.",
      "study.explanation[3]":
        "Monikko on die Bitten. Kohteliaisuussana bitte pienellä alkukirjaimella tarkoittaa kiitos tai ole hyvä.",
      "study.examples[0].lv": "Minulla on yksi pyyntö.",
      "study.examples[1].lv": "Hän täyttää pyyntöni.",
      "study.examples[2].lv": "Hänellä on kaksi pyyntöä.",
      "study.examples[3].lv": "Voinko kysyä, kiitos?",
      "study.examples[4].lv": "Minulla on yksi pyyntö.",
      "study.examples[5].lv": "Pyyntö on tärkeä.",
      "study.comparison[0].meaning": "Pyyntö",
      "study.comparison[0].example":
        "Ich habe eine Bitte. – Minulla on pyyntö.",
      "study.comparison[1].meaning": "Ole hyvä • kiitos",
      "study.comparison[1].example":
        "Komm bitte herein. – Tule sisään, ole hyvä.",
      "study.tip[0]":
        "Muista: pieni bitte = kiitos/ole hyvä (Bitte schön!, Kaffee, bitte). die Bitte isolla = pyyntö (eine Bitte, meine Bitte).",
      "study.tip[1]":
        "Substantiivi artikkelilla die ja isolla alkukirjaimella. Konkreettinen pyyntö tai toive.",
      "study.important[0]":
        "bitte kirjoitetaan pienellä — se on kohteliaisuussana, ei substantiivi.",
      "study.important[1]":
        "die Bitte isolla alkukirjaimella ja artikkelilla die on substantiivi.",
      "study.important[2]": "Monikko: die Bitten (pyynnöt).",
    }),
};

const PDF_NOTES = {
  besuchen:
    "PDF reaudit: henkilön luona; comparison paikassa/tapahtumassa; ET/LV residue removed; DE↔FI aligned",
  bitte:
    "PDF reaudit: bitte politeness kiitos/ole hyvä; examples[3] Voinko kysyä, kiitos?; die Bitte contrast preserved",
  Bitte:
    "PDF reaudit: die Bitte=pyyntö/toive; bitte=Ole hyvä • kiitos contrast; no semantic narrowing; DE↔FI aligned",
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
