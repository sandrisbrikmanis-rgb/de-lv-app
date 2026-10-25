#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const BATCH = "LRB-012";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const basePath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);
const base = JSON.parse(fs.readFileSync(basePath, "utf8"));
const PDF_REAUDIT_OVERRIDES = {
  "g2/a1/fi|lieb|idx:373|lv|WRONG_LANGUAGE|gpt-5.6-luna": "Rakas",
  "g2/a1/fi|leise|idx:368|lv; study.explanation; study.examples; study.tip; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna": "{\"lv\":\"Hiljainen\",\"study.translation\":\"Hiljainen\",\"study.explanation[0]\":\"Pääajatus: hiljainen tai pienellä äänenvoimakkuudella.\",\"study.explanation[1]\":\"leise tarkoittaa pääasiassa pientä äänenvoimakkuutta.\",\"study.explanation[2]\":\"Sitä käytetään usein äänestä, puheesta tai musiikista.\",\"study.explanation[3]\":\"leise kuvaa hiljaista ääntä tai matalaa äänenvoimakkuutta.\",\"study.examples[0].lv\":\"Ole hiljaa, ole hyvä.\",\"study.examples[1].lv\":\"Ole hiljaa, ole hyvä.\",\"study.examples[2].lv\":\"Musiikki on hiljaista.\",\"study.examples[3].lv\":\"Puhu hiljaa, ole hyvä.\",\"study.tip[0]\":\"leise = hiljainen\",\"study.tip[1]\":\"Käytä leise, kun konteksti vastaa tätä merkitystä.\",\"study.important[0]\":\"leise = hiljainen äänen puolesta.\",\"study.important[1]\":\"leise = äänenvoimakkuus.\",\"study.important[2]\":\"Hiljainen tai pienellä äänenvoimakkuudella.\"}"
};
const PDF_NOTES = {
  lieb: "PDF reaudit: ET Kallis → FI Rakas for mīļš dear/beloved (not expensive kallis sense)",
  leise: "PDF reaudit: production DE[0]=DE[1] duplicate mirrored; FI Hiljainen composite verified",
};
function normalizeVal(v) {
  const t = String(v || "").trim();
  if (t.startsWith("{") || t.startsWith("[")) { try { return JSON.stringify(JSON.parse(t)); } catch { return t; } }
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
let labotCount = 0, nelabotCount = 0;
for (const row of rows) {
  const id = row.finding_stable_ids;
  const target = TARGET_FI[id];
  const prod = normalizeVal(row.production_current);
  const normTarget = normalizeVal(target);
  const needsChange = prod !== normTarget;
  if (needsChange) {
    labotCount++;
    decisions[id] = { owner_status: "DECIDED", owner_decision: "LABOT", owner_new: target, owner_note: noteFor(id, normTarget, prod) };
  } else {
    nelabotCount++;
    decisions[id] = { owner_status: "DECIDED", owner_decision: "NELABOT", owner_new: "", owner_note: noteFor(id, normTarget, prod) };
  }
}
if (Object.keys(decisions).length !== 50) { console.error("Expected 50"); process.exit(1); }
fs.writeFileSync(outPath, JSON.stringify(decisions, null, 2) + "\n");
console.log(JSON.stringify({ total: 50, labot: labotCount, nelabot: nelabotCount, pending: 0, pdf_reaudit: true }, null, 2));
