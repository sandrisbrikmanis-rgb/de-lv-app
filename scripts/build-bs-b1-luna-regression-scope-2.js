#!/usr/bin/env node
/**
 * Build targeted regression scope #2 after Luna fix pass.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const FIX_APPLIED = path.join(ROOT, "reports/temp/bs-b1-luna-regression-fix-2-applied.json");
const FINDINGS = path.join(ROOT, "reports/temp/bs-b1-luna-regression-findings.json");
const OUT = path.join(ROOT, "reports/temp/bs-b1-luna-regression-scope-2.json");

const applied = JSON.parse(fs.readFileSync(FIX_APPLIED, "utf8"));
const findings = JSON.parse(fs.readFileSync(FINDINGS, "utf8"));

const cardIds = new Set(["b1-See-2572"]);
for (const f of findings.filter((x) => ["CRITICAL", "HIGH"].includes(x.severity))) {
  cardIds.add(f.cardId);
}
for (const fp of applied.stats.falsePositives || []) {
  cardIds.add(fp.cardId);
}
for (const c of applied.stats.changes.filter((x) => x.status === "applied")) {
  cardIds.add(c.cardId);
}

const accentCards = [
  "b1-sich-bedienen", "b1-behandeln", "b1-beraten", "b1-einsetzen", "b1-streichen",
];
accentCards.forEach((id) => cardIds.add(id));

const out = {
  generatedAt: new Date().toISOString(),
  purpose: "GPT-5.6 Luna targeted regression audit #2",
  totalCards: cardIds.size,
  criticalCards: ["b1-See-2572"],
  highCards: [...new Set(findings.filter((f) => f.severity === "HIGH").map((f) => f.cardId))].sort(),
  falsePositives: applied.stats.falsePositives,
  allCardIds: [...cardIds].sort(),
};

fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
console.log(JSON.stringify({ totalCards: out.totalCards, out: OUT }, null, 2));
