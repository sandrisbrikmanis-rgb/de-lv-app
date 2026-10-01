#!/usr/bin/env node
/**
 * Apply OWNER decisions to en-b1-high-owner-review-09.md and JSON.
 */
const fs = require("fs");
const path = require("path");
const { REPAIRS } = require("./en-b1-high-repair-09-data");

const ROOT = path.join(__dirname, "..", "..");
const mdPath = path.join(ROOT, "reports/en-b1-high-owner-review-09.md");
const jsonPath = path.join(ROOT, "reports/temp/en-b1-high-owner-review-09.json");

let md = fs.readFileSync(mdPath, "utf8");

for (const r of REPAIRS) {
  const esc = r.cardId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `(## ${String(r.seq).padStart(2, "0")} — ${esc}[\\s\\S]*?)OWNER VERDICT: PENDING\\nOWNER FINAL EN: PENDING\\nOWNER NOTE: PENDING`
  );
  if (!re.test(md)) throw new Error(`OWNER block not found for ${r.cardId}`);
  md = md.replace(
    re,
    `$1OWNER VERDICT: LABOT\nOWNER FINAL EN: ${r.final}\nOWNER NOTE: ${r.note}`
  );
}

md = md.replace(
  "**Status:** READY FOR OWNER REVIEW — no production changes",
  "**Status:** OWNER REVIEW COMPLETE — repairs applied in HIGH REPAIR #9"
);
md = md.replace("OWNER decisions made: 0", "OWNER decisions made: 50");

const tagungSection = `
## TAGUNG AUDIT METADATA ANOMALY

Audit ID: b1-Tageordnung-2835
Audit ID valid production identity: NO
Actual DE lemma: Tagung
Actual article: die
Actual plural: die Tagungen
Current EN: Sitting
OWNER FINAL EN: Conference / meeting
Tageordnung B1 production card exists: NO
Tagesordnung B1 production card exists: YES (index 2835; separate card, EN Agenda)
Matching Tagung production cards: 1
TAGUNG IDENTITY GATE: PASS
Production ID changed: NO
DE changed: NO
`;

if (!md.includes("TAGUNG AUDIT METADATA ANOMALY")) {
  md = md.replace("---\n\n## Coverage summary", tagungSection + "\n---\n\n## Coverage summary");
}

fs.writeFileSync(mdPath, md);

const json = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
for (const card of json.cards) {
  const r = REPAIRS.find((x) => x.cardId === card.cardId || x.cardId === card.auditCardId);
  if (!r) continue;
  for (const f of card.findings) {
    f.ownerVerdict = "LABOT";
    f.ownerFinalEn = r.final;
    f.ownerNote = r.note;
  }
  if (r.de === "Tagung") {
    card.productionCardId = "Tagung";
    card.lemma = "Tagung";
    card.article = "die";
    card.plural = "die Tagungen";
    card.cardType = "normal";
  }
}
json.status = "OWNER REVIEW COMPLETE";
json.ownerDecisionsMade = 50;
json.labot = 50;
json.nelabot = 0;
json.tagungMetadataAnomaly = {
  auditId: "b1-Tageordnung-2835",
  auditIdValidProductionIdentity: false,
  actualDeLemma: "Tagung",
  actualArticle: "die",
  actualPlural: "die Tagungen",
  currentEn: "Sitting",
  ownerFinalEn: "Conference / meeting",
  tageordnungProductionCardExists: false,
  tagesordnungB1ProductionCardExists: true,
  tagesordnungB1Note: "Production lemma is Tagesordnung (with s), not Tageordnung. Index 2835, EN Agenda.",
  matchingTagungProductionCards: 1,
  tagungIdentityGate: "PASS",
  productionIdChanged: false,
  deChanged: false,
};
fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
console.log("OWNER decisions applied to MD and JSON");
