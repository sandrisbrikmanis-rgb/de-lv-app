#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #5 — 24 owner-approved + 1 NELABOT (Gen).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { cardId: "b1-sich ernähren-807", de: "sich ernähren", old: "To make a living", final: "To feed oneself / live on" },
  { cardId: "b1-erschrecken-820", de: "erschrecken", old: "Get confused", final: "To get frightened / be startled" },
  { cardId: "b1-Erwartung-829", de: "Erwartung", old: "Waiting", final: "Expectation" },
  { cardId: "b1-erwecken-830", de: "erwecken", old: "Wake up", final: "To awaken" },
  { cardId: "b1-faszinieren-871", de: "faszinieren", old: "Get carried away", final: "To fascinate" },
  { cardId: "b1-feige-880", de: "feige", old: "Coward", final: "Cowardly" },
  { cardId: "b1-Feinwäsche-882", de: "Feinwäsche", old: "Fine linen", final: "Delicates" },
  { cardId: "b1-fernbleiben-885", de: "fernbleiben", old: "Don't come", final: "To stay away" },
  { cardId: "b1-Fischgericht-902", de: "Fischgericht", old: "Fish food", final: "Fish dish" },
  { cardId: "b1-fortbleiben-936", de: "fortbleiben", old: "Don't come", final: "To stay away / remain absent" },
  { cardId: "b1-Fußnote-971", de: "Fußnote", old: "Subtext note", final: "Footnote" },
  { cardId: "b1-sich füllen-964", de: "sich füllen", old: "To fulfil", final: "To fill up / become full" },
  { cardId: "b1-gedankenlos-1006", de: "gedankenlos", old: "Reckless", final: "Thoughtless" },
  { cardId: "b1-Gefallen-1014", de: "Gefallen", old: "Service", final: "Favor" },
  { cardId: "b1-genial-1059", de: "genial", old: "Genius", final: "Brilliant" },
  { cardId: "b1-genügen-1063", de: "genügen", old: "Enough", final: "To be enough" },
  { cardId: "b1-Genuss-1065", de: "Genuss", old: "Enjoying", final: "Enjoyment" },
  { cardId: "b1-geräumig-1069", de: "geräumig", old: "Wide", final: "Spacious" },
  { cardId: "b1-gerecht-1071", de: "gerecht", old: "Righteous", final: "Fair / just" },
  { cardId: "b1-gesamt-1080", de: "gesamt", old: "Everything", final: "Entire / total" },
  { cardId: "b1-geschickt-1085", de: "geschickt", old: "Neat", final: "Skillful" },
  { cardId: "b1-gewöhnen-1109", de: "gewöhnen", old: "Tame", final: "To accustom / get used to" },
  { cardId: "b1-Glatteis-1119", de: "Glatteis", old: "Again", final: "Black ice" },
  { cardId: "b1-Glocke-1130", de: "Glocke", old: "Call", final: "Bell" },
];

const NELABOT = {
  cardId: "b1-Gen-1055",
  de: "Gen",
  lv: "Gene",
  verdict: "NELABOT — AUDIT FALSE POSITIVE / NO-OP",
  reason: "Current EN and Recommended EN both Gene; singular correct for das Gen",
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
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];\n\nwindow.B1_WORDS = B1_WORDS;\n");
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
    preconditionMismatches.push({ cardId: r.cardId, reason: `DE not found: ${r.de}` });
    continue;
  }
  if (entry.lv !== r.old) {
    preconditionMismatches.push({
      cardId: r.cardId,
      reason: `PRECONDITION MISMATCH: "${entry.lv}" vs OLD "${r.old}"`,
    });
    continue;
  }
  if (!wwwEntry || wwwEntry.lv !== r.old) {
    preconditionMismatches.push({ cardId: r.cardId, reason: "Mirror OLD mismatch" });
    continue;
  }
  entry.lv = r.final;
  log.push({ cardId: r.cardId, de: r.de, field: "lv", old: r.old, finalEn: r.final, applied: "PASS" });
}

const genEntry = words.find((w) => w.de === NELABOT.de);
if (!genEntry || genEntry.lv !== NELABOT.lv) {
  preconditionMismatches.push({
    cardId: NELABOT.cardId,
    reason: `Gen expected lv "${NELABOT.lv}", got "${genEntry?.lv}"`,
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
};
fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-05-log.json"), JSON.stringify(output, null, 2));
console.log(JSON.stringify({ repaired: output.repairedCount, nelabot: 1 }, null, 2));
