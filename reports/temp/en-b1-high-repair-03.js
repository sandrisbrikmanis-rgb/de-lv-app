#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #3 — 25 owner-approved normal cards (top-level lv only).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { cardId: "b1-anstiften-149", de: "anstiften", old: "To encourage", final: "To incite" },
  { cardId: "b1-Antiquariat-156", de: "Antiquariat", old: "Antique store", final: "Second-hand bookshop" },
  { cardId: "b1-anweisen-160", de: "anweisen", old: "Indicate", final: "To instruct" },
  { cardId: "b1-Anzahlung-163", de: "Anzahlung", old: "Contribution", final: "Down payment / deposit" },
  { cardId: "b1-Appell-164", de: "Appell", old: "Invitation", final: "Appeal" },
  { cardId: "b1-Auflauf-179", de: "Auflauf", old: "Concoction", final: "Casserole" },
  { cardId: "b1-Aufschnitt-185", de: "Aufschnitt", old: "Cold snaps", final: "Cold cuts" },
  { cardId: "b1-aufgeregt-197", de: "aufgeregt", old: "Worried", final: "Excited / nervous" },
  { cardId: "b1-sich aufregen-200", de: "sich aufregen", old: "To worry", final: "To get upset" },
  { cardId: "b1-ausziehbar-224", de: "ausziehbar", old: "Retractable", final: "Extendable / pull-out" },
  { cardId: "b1-beauftragen-254", de: "beauftragen", old: "To ask", final: "To commission / assign" },
  { cardId: "b1-bedrücken-267", de: "bedrücken", old: "To suppress", final: "To weigh down / depress" },
  { cardId: "b1-Behälter-302", de: "Behälter", old: "Tank", final: "Container" },
  { cardId: "b1-behindern-308", de: "behindern", old: "Disturb", final: "To hinder / obstruct" },
  { cardId: "b1-beitragen-322", de: "beitragen", old: "Promote", final: "To contribute" },
  { cardId: "b1-belasten-327", de: "belasten", old: "To bother", final: "To burden / put a strain on" },
  { cardId: "b1-beleidigen-331", de: "beleidigen", old: "Take offence", final: "To insult / offend" },
  { cardId: "b1-Beleidigung-332", de: "Beleidigung", old: "Resentment", final: "Insult / offence" },
  { cardId: "b1-beleuchten-333", de: "beleuchten", old: "To enlighten", final: "To illuminate / light" },
  { cardId: "b1-beliebig-335", de: "beliebig", old: "Anyone", final: "Any / arbitrary" },
  { cardId: "b1-Bergführer-357", de: "Bergführer", old: "A companion in the mountains", final: "Mountain guide" },
  { cardId: "b1-Bericht-362", de: "Bericht", old: "Message", final: "Report" },
  { cardId: "b1-sich berühren-372", de: "sich berühren", old: "To face", final: "To touch each other" },
  { cardId: "b1-beseitigen-385", de: "beseitigen", old: "To prevent", final: "To remove / eliminate" },
  { cardId: "b1-besiegen-388", de: "besiegen", old: "To win", final: "To defeat" },
];

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function serializeB1(words) {
  const lines = ["const B1_WORDS = ["];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];\n\nwindow.B1_WORDS = B1_WORDS;\n");
  return lines.join("\n");
}

const words = load("data/en/b1.js");
const log = [];
const preconditionMismatches = [];

for (const r of REPAIRS) {
  const entry = words.find((w) => w.de === r.de);
  if (!entry) {
    preconditionMismatches.push({ cardId: r.cardId, reason: `DE lemma not found: ${r.de}` });
    continue;
  }
  if (entry.lv !== r.old) {
    preconditionMismatches.push({
      cardId: r.cardId,
      reason: `PRECONDITION MISMATCH: lv is "${entry.lv}", expected OLD "${r.old}"`,
    });
    continue;
  }
  entry.lv = r.final;
  log.push({
    cardId: r.cardId,
    de: r.de,
    field: "lv",
    old: r.old,
    finalEn: r.final,
    applied: "PASS",
  });
}

if (preconditionMismatches.length) {
  console.error(JSON.stringify({ preconditionMismatches }, null, 2));
  process.exit(1);
}

const out = serializeB1(words);
fs.writeFileSync(path.join(ROOT, "data/en/b1.js"), out);
fs.writeFileSync(path.join(ROOT, "www/data/en/b1.js"), out);
fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-03-log.json"), JSON.stringify(log, null, 2));
console.log(`Applied ${log.length}/25 lv repairs`);
