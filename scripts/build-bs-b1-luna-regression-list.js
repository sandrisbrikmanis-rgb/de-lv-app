#!/usr/bin/env node
/**
 * Build targeted regression list for next Luna audit pass.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const fixApplied = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/bs-b1-luna-targeted-fix-applied.json"), "utf8"));
const cacheApplied = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/bs-b1-cache-collisions-fix-applied.json"), "utf8"));
const cacheCtx = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/bs-b1-reaudit-cache-context.json"), "utf8"));

const cardIds = new Set();
const fields = [];

for (const c of fixApplied.stats.changes) {
  cardIds.add(c.cardId);
  fields.push({ cardId: c.cardId, field: c.field, source: "critical_high_fix" });
}

for (const c of cacheApplied.stats.changes) {
  cardIds.add(c.cardId);
  fields.push({ cardId: c.cardId, field: c.field, source: "cache_collision_fix" });
}

const criticalIds = ["b1-hobeln-1285", "b1-See-2572", "b1-Tonne-2897", "b1-Weise-3228"];
criticalIds.forEach((id) => cardIds.add(id));

for (const col of cacheCtx.realCollisions || []) {
  for (const o of col.occurrences) cardIds.add(o.cardId);
}

const findings = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/bs-b1-reaudit-terra-findings.json"), "utf8"));
const highCritical = findings.filter((f) => ["CRITICAL", "HIGH"].includes(f.severity));
for (const f of highCritical) cardIds.add(f.cardId);

const studyCardsChanged = new Set([
  ...fixApplied.stats.studyCardsChanged,
  ...cacheApplied.stats.studyCardsChanged,
]);

const out = {
  generatedAt: new Date().toISOString(),
  purpose: "GPT-5.6 Luna targeted regression audit (post fix pass)",
  totalCards: cardIds.size,
  studyCardsWithTextChanges: [...studyCardsChanged].sort(),
  criticalCards: criticalIds,
  realCacheCollisionCards: [...new Set((cacheCtx.realCollisions || []).flatMap((c) => c.occurrences.map((o) => o.cardId)))].sort(),
  allCardIds: [...cardIds].sort(),
  fieldChanges: fields,
};

const outPath = path.join(ROOT, "reports/temp/bs-b1-luna-targeted-regression.json");
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(JSON.stringify({ totalCards: out.totalCards, studyCards: studyCardsChanged.size, outPath }, null, 2));
