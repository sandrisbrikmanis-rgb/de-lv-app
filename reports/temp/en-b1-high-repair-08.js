#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #8 — 50 owner-approved LABOT repairs.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { cardId: "b1-kuscheln-1690", de: "kuscheln", old: "To pat", final: "To cuddle / to snuggle" },
  { cardId: "b1-ländlich-1718", de: "ländlich", old: "Field", final: "Rural" },
  { cardId: "b1-Landstraße-1719", de: "Landstraße", old: "Highway", final: "Country road" },
  { cardId: "b1-längs-1722", de: "längs", old: "Long", final: "Along" },
  { cardId: "b1-Leertaste-1744", de: "Leertaste", old: "Long space bar", final: "Space bar" },
  { cardId: "b1-lehnen-1747", de: "lehnen", old: "Push", final: "To lean" },
  { cardId: "b1-Leine-1758", de: "Leine", old: "Accompany", final: "Leash" },
  { cardId: "b1-Lieferwagen-1777", de: "Lieferwagen", old: "A small truck for the removal of goods", final: "Delivery van" },
  { cardId: "b1-Linkshänder-1784", de: "Linkshänder", old: "Left-handed", final: "Left-handed person" },
  { cardId: "b1-Locke-1788", de: "Locke", old: "Sprung", final: "Curl" },
  { cardId: "b1-Loge-1793", de: "Loge", old: "Lodge", final: "Box (in a theatre)" },
  { cardId: "b1-Mal-1826", de: "Mal", old: "Sign", final: "Time / occasion" },
  { cardId: "b1-mangeln-1831", de: "mangeln", old: "Missing", final: "To lack" },
  { cardId: "b1-Maßnahme-1849", de: "Maßnahme", old: "Event", final: "Measure / action" },
  { cardId: "b1-meinetwegen-1861", de: "meinetwegen", old: "After me", final: "For my sake / if you like" },
  { cardId: "b1-Mobbing-1891", de: "Mobbing", old: "Psychoterror", final: "Bullying" },
  { cardId: "b1-Monatsgehalt-1900", de: "Monatsgehalt", old: "Salary of a clerk or servant", final: "Monthly salary" },
  { cardId: "b1-Mondschein-1902", de: "Mondschein", old: "Moon house", final: "Moonlight" },
  { cardId: "b1-Mumps-1925", de: "Mumps", old: "Piggies", final: "Mumps" },
  { cardId: "b1-nachholen-1945", de: "nachholen", old: "Recover the missed", final: "To catch up on" },
  { cardId: "b1-Nachteil-1950", de: "Nachteil", old: "Loss", final: "Disadvantage" },
  { cardId: "b1-nächtlich-1953", de: "nächtlich", old: "Night-", final: "Nocturnal" },
  { cardId: "b1-Nacken-1955", de: "Nacken", old: "Scoundrel", final: "Back of the neck / nape" },
  { cardId: "b1-Nebensache-1967", de: "Nebensache", old: "Next thing", final: "Minor matter" },
  { cardId: "b1-neblig-1969", de: "neblig", old: "Nebula", final: "Foggy" },
  { cardId: "b1-necken-1970", de: "necken", old: "Squeal", final: "To tease" },
  { cardId: "b1-Notfall-1997", de: "Notfall", old: "A case of extreme necessity", final: "An emergency" },
  { cardId: "b1-nutzlos-2002", de: "nutzlos", old: "Vain", final: "Useless" },
  { cardId: "b1-Opernhaus-2033", de: "Opernhaus", old: "Opera", final: "Opera house" },
  { cardId: "b1-Overall-2047", de: "Overall", old: "Work overalls", final: "Coverall / overalls" },
  { cardId: "b1-Panne-2053", de: "Panne", old: "A quibble", final: "Breakdown / mishap" },
  { cardId: "b1-Palast-2051", de: "Palast", old: "Castle", final: "Palace" },
  { cardId: "b1-Parterre-2064", de: "Parterre", old: "First floor", final: "Ground floor" },
  { cardId: "b1-Paste-2068", de: "Paste", old: "Mail", final: "Paste" },
  { cardId: "b1-peinlich-2073", de: "peinlich", old: "Unpleasant", final: "Embarrassing / awkward" },
  { cardId: "b1-per-2079", de: "per", old: "Pa", final: "Per" },
  { cardId: "b1-Personalabteilung-2081", de: "Personalabteilung", old: "Staff part", final: "HR department / personnel department" },
  { cardId: "b1-Pfarrer-2087", de: "Pfarrer", old: "Teacher", final: "Pastor / parish priest" },
  { cardId: "b1-pflügen-2103", de: "pflügen", old: "Art", final: "To plow" },
  { cardId: "b1-Pier-2109", de: "Pier", old: "Mole", final: "Pier" },
  { cardId: "b1-plump-2127", de: "plump", old: "Gluttonous", final: "Plump" },
  { cardId: "b1-poltern-2143", de: "poltern", old: "To grind", final: "To make a racket / to clatter" },
  { cardId: "b1-Postfach-2150", de: "Postfach", old: "Subscription box at the post office", final: "Post office box" },
  { cardId: "b1-Prozentsatz-2177", de: "Prozentsatz", old: "Interest rate", final: "Percentage / percentage rate" },
  { cardId: "b1-Prüfzeit-2178", de: "Prüfzeit", old: "Probationary period", final: "Test period / testing period" },
  { cardId: "b1-Radspur-2210", de: "Radspur", old: "Wheel rail", final: "Wheel track" },
  { cardId: "b1-ragen-2211", de: "ragen", old: "To lean", final: "To protrude / to project" },
  { cardId: "b1-ratlos-2227", de: "ratlos", old: "Distracted", final: "Perplexed / at a loss" },
  { cardId: "b1-rauben-2232", de: "rauben", old: "Kidnap", final: "To rob / to steal" },
  { cardId: "b1-Reh-2260", de: "Reh", old: "Doe", final: "Roe deer" },
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
  for (let i = 0; i < words.length; i++) {
    const json = JSON.stringify(words[i], null, 2).replace(/\n/g, "\n  ");
    const suffix = i < words.length - 1 ? "," : "";
    lines.push("  " + json + suffix);
  }
  lines.push("];");
  lines.push("");
  lines.push("window.B1_WORDS = B1_WORDS;");
  lines.push("");
  return lines.join("\n");
}

const words = load("data/en/b1.js");
const wwwWords = load("www/data/en/b1.js");
const log = [];
const preconditionMismatches = [];

for (const r of REPAIRS) {
  const entry = words.find((w) => w.de === r.de);
  const wwwEntry = wwwWords.find((w) => w.de === r.de);
  if (!entry) {
    preconditionMismatches.push({ cardId: r.cardId, de: r.de, reason: `DE not found: ${r.de}` });
    continue;
  }
  const field = entry.lv !== undefined ? "lv" : "enText";
  const current = entry.lv !== undefined ? entry.lv : entry.enText;
  if (current !== r.old) {
    preconditionMismatches.push({
      cardId: r.cardId,
      de: r.de,
      field,
      expectedOld: r.old,
      actualProduction: current,
      actualMirror: wwwEntry?.lv ?? wwwEntry?.enText,
      reason: "PRECONDITION MISMATCH",
    });
    continue;
  }
  const mirrorVal = wwwEntry?.lv ?? wwwEntry?.enText;
  if (!wwwEntry || mirrorVal !== r.old) {
    preconditionMismatches.push({
      cardId: r.cardId,
      de: r.de,
      field,
      expectedOld: r.old,
      actualProduction: current,
      actualMirror: mirrorVal,
      reason: "Mirror OLD mismatch",
    });
    continue;
  }
  if (field === "lv") {
    entry.lv = r.final;
    wwwEntry.lv = r.final;
  } else {
    entry.enText = r.final;
    wwwEntry.enText = r.final;
  }
  log.push({
    cardId: r.cardId,
    de: r.de,
    field,
    old: r.old,
    finalEn: r.final,
    applied: "PASS",
    ownerVerdict: "LABOT",
  });
}

if (preconditionMismatches.length) {
  console.error(JSON.stringify({ preconditionMismatches }, null, 2));
  process.exit(1);
}

const out = serializeB1(words);
fs.writeFileSync(path.join(ROOT, "data/en/b1.js"), out);
fs.writeFileSync(path.join(ROOT, "www/data/en/b1.js"), out);

const output = {
  ownerReviewed: 50,
  labot: 50,
  nelabot: 0,
  nelabotCards: [],
  repairs: log,
  repairedCount: log.filter((x) => x.applied === "PASS").length,
  learnerFacingFieldsRepaired: log.length,
  preconditionMismatch: 0,
  workflowUnresolvedHighBeforeHigh8: 273,
  workflowUnresolvedHighAfterHigh8: 223,
};
fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-08-log.json"), JSON.stringify(output, null, 2));
console.log(JSON.stringify({ repaired: output.repairedCount }, null, 2));
