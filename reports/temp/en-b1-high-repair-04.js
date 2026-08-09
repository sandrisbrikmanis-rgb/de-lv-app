#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #4 — 25 owner-approved normal cards (top-level lv only).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const REPAIRS = [
  { cardId: "b1-Bestandteil-394", de: "Bestandteil", old: "Ingredient", final: "Component / part" },
  { cardId: "b1-betreiben-409", de: "betreiben", old: "To lead", final: "To run / operate" },
  { cardId: "b1-Beule-415", de: "Beule", old: "Pun", final: "Bump / dent" },
  { cardId: "b1-beugen-414", de: "beugen", old: "To put", final: "To bend" },
  { cardId: "b1-Bevölkerung-418", de: "Bevölkerung", old: "Residents", final: "Population" },
  { cardId: "b1-bewachen-420", de: "bewachen", old: "To protect", final: "To guard / watch over" },
  { cardId: "b1-bewirten-426", de: "bewirten", old: "To tolerate", final: "To host / serve guests" },
  { cardId: "b1-biegen-440", de: "biegen", old: "To put", final: "To bend", specialGate: true },
  { cardId: "b1-sich blamieren-453", de: "sich blamieren", old: "Get confused", final: "To embarrass oneself" },
  { cardId: "b1-Bombe-478", de: "Bombe", old: "Ball", final: "Bomb" },
  { cardId: "b1-Brathuhn-490", de: "Brathuhn", old: "Fried chicken", final: "Roast chicken" },
  { cardId: "b1-Brieftasche-505", de: "Brieftasche", old: "Pocket briefcase", final: "Wallet" },
  { cardId: "b1-desto-579", de: "desto", old: "Because", final: "The more ... the more ... / all the more" },
  { cardId: "b1-Dose-601", de: "Dose", old: "Box", final: "Can / tin" },
  { cardId: "b1-dritt-610", de: "dritt", old: "Thirdly", final: "Third" },
  { cardId: "b1-Durcheinander-624", de: "Durcheinander", old: "Juku jukam • A mess", final: "A muddle / a mess" },
  { cardId: "b1-ehemals-646", de: "ehemals", old: "Earlier", final: "Formerly" },
  { cardId: "b1-sich eignen-657", de: "sich eignen", old: "To bet", final: "To be suitable" },
  { cardId: "b1-einigermaßen-686", de: "einigermaßen", old: "Half way", final: "To some extent / more or less" },
  { cardId: "b1-einnehmen-695", de: "einnehmen", old: "To conceive", final: "To take / occupy" },
  { cardId: "b1-einschließen-703", de: "einschließen", old: "To count", final: "To include / enclose" },
  { cardId: "b1-erfordern-779", de: "erfordern", old: "Ask for", final: "To require" },
  { cardId: "b1-erfüllen-784", de: "erfüllen", old: "To execute", final: "To fulfil" },
  { cardId: "b1-sich erhalten-790", de: "sich erhalten", old: "To preserve", final: "To remain preserved / survive" },
  { cardId: "b1-Erklärung-795", de: "Erklärung", old: "Notification", final: "Explanation / statement" },
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

function runBiegenIdentityGate(words, wwwWords) {
  const matches = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const studyId = w.study?.id || "";
    const idNorm = studyId || `b1-${w.de}`;
    if (/bieg/i.test(studyId) || /bieg/i.test(w.de) || w.de === "biegen") {
      matches.push({
        arrayIndex: i,
        rawCardId: studyId || null,
        logicalId: `b1-${w.de}-${i}`,
        normalizedId: "b1-biegen-440",
        de: w.de,
        cardType: w.study ? (w.study.layout === "minimalStudy" ? "minimalStudy" : "standardStudy") : "normal",
        lv: w.lv,
        hasStudy: Boolean(w.study),
      });
    }
  }

  const biegenOnly = matches.filter((m) => m.de === "biegen" && m.lv === "To put");
  const wwwBiegen = wwwWords.find((w) => w.de === "biegen");
  const enBiegen = words.find((w) => w.de === "biegen");
  const mirrorMatch =
    enBiegen && wwwBiegen && enBiegen.lv === wwwBiegen.lv && enBiegen.de === wwwBiegen.de;

  const suspiciousAuditId = "b1-bie\u00adgen-440";
  const codePoints = [...suspiciousAuditId].map((c) => c.codePointAt(0));

  const gatePass =
    biegenOnly.length === 1 &&
    mirrorMatch &&
    biegenOnly[0].de === "biegen" &&
    biegenOnly[0].lv === "To put" &&
    !biegenOnly[0].hasStudy;

  return {
    verdict: gatePass ? "PASS" : "FAIL",
    rawCardId: biegenOnly[0]?.rawCardId ?? null,
    suspiciousAuditId,
    unicodeCodePointsInSuspiciousId: codePoints,
    normalizedId: "b1-biegen-440",
    deLemma: biegenOnly[0]?.de ?? null,
    cardType: biegenOnly[0]?.cardType ?? null,
    currentTopLevelLv: biegenOnly[0]?.lv ?? null,
    matchingProductionCards: matches,
    biegenToPutMatches: biegenOnly,
    mirrorMatch,
    arrayIndex: biegenOnly[0]?.arrayIndex,
  };
}

const words = load("data/en/b1.js");
const wwwWords = load("www/data/en/b1.js");
const biegenGate = runBiegenIdentityGate(words, wwwWords);

const log = [];
const preconditionMismatches = [];

for (const r of REPAIRS) {
  if (r.specialGate && biegenGate.verdict !== "PASS") {
    log.push({ cardId: r.cardId, de: r.de, field: "lv", blocked: true, reason: "BIEGEN IDENTITY GATE FAIL" });
    continue;
  }

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

  const wwwEntry = wwwWords.find((w) => w.de === r.de);
  if (!wwwEntry || wwwEntry.lv !== r.old) {
    preconditionMismatches.push({ cardId: r.cardId, reason: `Mirror OLD mismatch for ${r.de}` });
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
    productionStudyId: entry.study?.id ?? null,
  });
}

if (preconditionMismatches.length) {
  console.error(JSON.stringify({ preconditionMismatches }, null, 2));
  process.exit(1);
}

const out = serializeB1(words);
fs.writeFileSync(path.join(ROOT, "data/en/b1.js"), out);
fs.writeFileSync(path.join(ROOT, "www/data/en/b1.js"), out);

const output = { biegenIdentityGate: biegenGate, repairs: log, repairedCount: log.filter((x) => x.applied === "PASS").length };
fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-04-log.json"), JSON.stringify(output, null, 2));
console.log(JSON.stringify({ biegenGate: biegenGate.verdict, repaired: output.repairedCount }, null, 2));
