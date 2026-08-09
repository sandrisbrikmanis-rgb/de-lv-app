#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #9 — 50 owner-approved LABOT repairs.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");
const { REPAIRS } = require("./en-b1-high-repair-09-data");

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

// Tagung identity gate
const deWords = load("data/b1.js");
const enWords = load("data/en/b1.js");
const tagungCandidates = enWords.filter(
  (w) =>
    w.de === "Tagung" &&
    w.de_article === "die" &&
    w.de_plural === "die Tagungen" &&
    (w.lv === "Sitting" || w.enText === "Sitting")
);
const tageordnungExists = enWords.some((w) => w.de === "Tageordnung");

if (tagungCandidates.length !== 1) {
  console.error(
    JSON.stringify({
      tagungIdentityGate: "FAIL",
      matchingTagungCards: tagungCandidates.length,
      tageordnungProductionCardExists: tageordnungExists,
    })
  );
  process.exit(1);
}

const words = enWords;
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
    auditCardId: r.auditCardId || r.cardId,
    de: r.de,
    field,
    old: r.old,
    finalEn: r.final,
    applied: "PASS",
    ownerVerdict: "LABOT",
    ownerNote: r.note,
    tagungMetadata: r.tagungMetadata || false,
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
  tagungMetadataAnomaly: {
    auditId: "b1-Tageordnung-2835",
    auditIdValidProductionIdentity: false,
    actualDeLemma: "Tagung",
    actualArticle: "die",
    actualPlural: "die Tagungen",
    currentEn: "Sitting",
    ownerFinalEn: "Conference / meeting",
    tageordnungProductionCardExists: tageordnungExists,
    matchingTagungProductionCards: tagungCandidates.length,
    tagungIdentityGate: "PASS",
    productionIdChanged: false,
    deChanged: false,
  },
  workflowUnresolvedHighBeforeHigh9: 223,
  workflowUnresolvedHighAfterHigh9: 173,
};
fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-09-log.json"), JSON.stringify(output, null, 2));
console.log(JSON.stringify({ repaired: output.repairedCount, tagungGate: "PASS" }, null, 2));
