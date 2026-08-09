#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #6 — 25 owner-approved LABOT repairs.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { cardId: "b1-gönnen-1133", de: "gönnen", old: "Allocate", final: "To allow oneself / grant" },
  { cardId: "b1-Gräte-1138", de: "Gräte", old: "Asaka", final: "Fish bone" },
  { cardId: "b1-Grieß-1143", de: "Grieß", old: "Manna", final: "Semolina" },
  { cardId: "b1-Größe-1152", de: "Größe", old: "Sise", final: "Size" },
  { cardId: "b1-Halbschuh-1181", de: "Halbschuh", old: "Street shoe", final: "Low-cut shoe" },
  { cardId: "b1-Halstuch-1184", de: "Halstuch", old: "A necktie", final: "Scarf / neckerchief" },
  { cardId: "b1-Hammel-1189", de: "Hammel", old: "Ram", final: "Wether" },
  { cardId: "b1-Handwerk-1197", de: "Handwerk", old: "Position", final: "Craft / trade" },
  { cardId: "b1-Heftklammer-1224", de: "Heftklammer", old: "Paper clip", final: "Staple" },
  { cardId: "b1-Heimweh-1234", de: "Heimweh", old: "Homesick", final: "Homesickness" },
  { cardId: "b1-heiter-1237", de: "heiter", old: "Fun", final: "Cheerful / merry" },
  { cardId: "b1-Herkunft-1254", de: "Herkunft", old: "Standing out", final: "Origin / background" },
  { cardId: "b1-hindern-1268", de: "hindern", old: "Delay", final: "To hinder / prevent" },
  { cardId: "b1-hinzu-1277", de: "hinzu", old: "Present", final: "In addition / additionally" },
  { cardId: "b1-hobeln-1285", de: "hobeln", old: "To plan", final: "To plane" },
  { cardId: "b1-höchstens-1289", de: "höchstens", old: "Highest • No more than", final: "At most / no more than" },
  { cardId: "b1-Holzscheit-1301", de: "Holzscheit", old: "End", final: "Log / piece of firewood" },
  { cardId: "b1-Holzspan-1302", de: "Holzspan", old: "Wooden scale", final: "Wood chip / wood shaving" },
  { cardId: "b1-Hopfenstange-1307", de: "Hopfenstange", old: "Hop mellowness", final: "Hop pole" },
  { cardId: "b1-Hörsaal-1312", de: "Hörsaal", old: "The audience", final: "Lecture hall" },
  { cardId: "b1-Hungersnot-1328", de: "Hungersnot", old: "Hunger", final: "Famine" },
  { cardId: "b1-Inbegriff-1349", de: "Inbegriff", old: "Symbol", final: "Epitome / embodiment" },
  { cardId: "b1-Inland-1368", de: "Inland", old: "Inland", final: "Domestic territory / home country" },
  { cardId: "b1-irdisch-1394", de: "irdisch", old: "Land-", final: "Earthly / terrestrial" },
  { cardId: "b1-Irrtum-1398", de: "Irrtum", old: "Misunderstanding", final: "Mistake / error" },
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

if (preconditionMismatches.length) {
  console.error(JSON.stringify({ preconditionMismatches }, null, 2));
  process.exit(1);
}

const out = serializeB1(words);
fs.writeFileSync(path.join(ROOT, "data/en/b1.js"), out);
fs.writeFileSync(path.join(ROOT, "www/data/en/b1.js"), out);

const output = {
  ownerReviewed: 25,
  labot: 25,
  nelabot: 0,
  nelabotCards: [],
  repairs: log,
  repairedCount: log.filter((x) => x.applied === "PASS").length,
  preconditionMismatch: 0,
};
fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-06-log.json"), JSON.stringify(output, null, 2));
console.log(JSON.stringify({ repaired: output.repairedCount, nelabot: 0 }, null, 2));
