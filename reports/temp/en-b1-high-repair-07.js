#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #7 — 24 owner-approved LABOT + 1 NELABOT (Krüppel).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { cardId: "b1-Jagdbeute-1403", de: "Jagdbeute", old: "Hunting", final: "Hunting prey / game" },
  { cardId: "b1-Schaltjahr-1409", de: "Schaltjahr", old: "Long year", final: "Leap year" },
  { cardId: "b1-jaulen-1422", de: "jaulen", old: "Howling for a dog", final: "To howl" },
  { cardId: "b1-Kabelkanal-1440", de: "Kabelkanal", old: "Cable television channel", final: "Cable duct / cable conduit" },
  { cardId: "b1-Kachel-1443", de: "Kachel", old: "Oven pot", final: "Tile" },
  { cardId: "b1-Kai-1448", de: "Kai", old: "Constructed embankment", final: "Quay / wharf" },
  { cardId: "b1-Kamerad-1451", de: "Kamerad", old: "A member", final: "Comrade / companion" },
  { cardId: "b1-Kantine-1465", de: "Kantine", old: "Buffet", final: "Canteen / cafeteria" },
  { cardId: "b1-karitativ-1473", de: "karitativ", old: "Charity", final: "Charitable" },
  { cardId: "b1-Kartei-1477", de: "Kartei", old: "Filing cabinet", final: "Card index / file index" },
  { cardId: "b1-Kanten-1464", de: "Kanten", old: "Bread dona", final: "End piece of bread / bread crust" },
  { cardId: "b1-kegeln-1486", de: "kegeln", old: "Hit the pins", final: "To bowl / play skittles" },
  { cardId: "b1-keuchen-1501", de: "keuchen", old: "Panting", final: "To pant" },
  { cardId: "b1-Kinderkrippe-1505", de: "Kinderkrippe", old: "Children's shelter", final: "Day nursery / childcare centre" },
  { cardId: "b1-Kladde-1510", de: "Kladde", old: "Clade", final: "Draft notebook / rough copy" },
  { cardId: "b1-knitterfrei-1551", de: "knitterfrei", old: "Unruffled", final: "Wrinkle-free" },
  { cardId: "b1-knüpfen-1558", de: "knüpfen", old: "Sieve", final: "To tie / knot" },
  { cardId: "b1-knurren-1559", de: "knurren", old: "Roar", final: "To growl" },
  { cardId: "b1-krächzen-1606", de: "krächzen", old: "Bark", final: "To caw / croak" },
  { cardId: "b1-krähen-1612", de: "krähen", old: "To sing about the rooster", final: "To crow" },
  { cardId: "b1-kreisen-1631", de: "kreisen", old: "Circle", final: "To circle" },
  { cardId: "b1-kriechen-1636", de: "kriechen", old: "It's raining", final: "To crawl" },
  { cardId: "b1-Kursbuch-1680", de: "Kursbuch", old: "Train list", final: "Timetable / railway timetable" },
  { cardId: "b1-krumm-1649", de: "krumm", old: "Hook", final: "Crooked / bent" },
];

const NELABOT = {
  cardId: "b1-Krüppel-1651",
  de: "Krüppel",
  lv: "A cripple",
  verdict: "NELABOT — OWNER ACCEPTED CURRENT / REGISTER-PRESERVING TRANSLATION",
  reason:
    "German Krüppel is archaic/offensive; neutral A disabled person does not preserve source register; owner retains A cripple",
};

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
    preconditionMismatches.push({
      cardId: r.cardId,
      de: r.de,
      reason: `DE not found: ${r.de}`,
    });
    continue;
  }
  if (entry.lv !== r.old) {
    preconditionMismatches.push({
      cardId: r.cardId,
      de: r.de,
      expectedOld: r.old,
      actualProduction: entry.lv,
      actualMirror: wwwEntry?.lv,
      reason: "PRECONDITION MISMATCH",
    });
    continue;
  }
  if (!wwwEntry || wwwEntry.lv !== r.old) {
    preconditionMismatches.push({
      cardId: r.cardId,
      de: r.de,
      expectedOld: r.old,
      actualProduction: entry.lv,
      actualMirror: wwwEntry?.lv,
      reason: "Mirror OLD mismatch",
    });
    continue;
  }
  entry.lv = r.final;
  wwwEntry.lv = r.final;
  log.push({
    cardId: r.cardId,
    de: r.de,
    field: "lv",
    old: r.old,
    finalEn: r.final,
    applied: "PASS",
    ownerVerdict: "LABOT",
  });
}

const kruEntry = words.find((w) => w.de === NELABOT.de);
const kruWww = wwwWords.find((w) => w.de === NELABOT.de);
if (!kruEntry || kruEntry.lv !== NELABOT.lv) {
  preconditionMismatches.push({
    cardId: NELABOT.cardId,
    de: NELABOT.de,
    expectedOld: NELABOT.lv,
    actualProduction: kruEntry?.lv,
    actualMirror: kruWww?.lv,
    reason: "Krüppel NELABOT precondition mismatch",
  });
} else if (!kruWww || kruWww.lv !== NELABOT.lv) {
  preconditionMismatches.push({
    cardId: NELABOT.cardId,
    de: NELABOT.de,
    expectedOld: NELABOT.lv,
    actualProduction: kruEntry.lv,
    actualMirror: kruWww?.lv,
    reason: "Krüppel mirror mismatch",
  });
} else {
  log.push({
    cardId: NELABOT.cardId,
    de: NELABOT.de,
    field: "lv",
    old: NELABOT.lv,
    finalEn: NELABOT.lv,
    applied: "NELABOT — NO-OP",
    ownerVerdict: NELABOT.verdict,
    ownerNote: NELABOT.reason,
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
  ownerReviewed: 25,
  labot: 24,
  nelabot: 1,
  nelabotCards: [NELABOT],
  repairs: log,
  repairedCount: log.filter((x) => x.applied === "PASS").length,
  preconditionMismatch: 0,
  workflowUnresolvedHighRemaining: 273,
};
fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-07-log.json"), JSON.stringify(output, null, 2));
console.log(JSON.stringify({ repaired: output.repairedCount, nelabot: 1 }, null, 2));
