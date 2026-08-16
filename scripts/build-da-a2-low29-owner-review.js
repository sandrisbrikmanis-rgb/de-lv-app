#!/usr/bin/env node
"use strict";
/**
 * Build OWNER review + decisions template for 29 LOW sectionAccent residuals.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getAt } = require("./lib/da-a2-owner-path");
const CASES = require("./lib/da-a2-low29-cases");

const REVIEW = path.join(ROOT, "reports/da-a2-owner-review-low29-sectionaccents.md");
const DECISIONS = path.join(ROOT, "reports/da-a2-owner-decisions-low29-sectionaccents.md");
const README = path.join(ROOT, "reports/da-a2-owner-review-low29-README.md");

/** Luna ieteikums — OWNER apstiprina vai labo */
const PROPOSED = {
  1: { action: "LABOT", value: "abholen", note: "DE piemērā ir abholen, nevis holen" },
  2: { action: "LABOT", value: "abholen", note: "same as #1" },
  3: { action: "LABOT", value: "Hospitalet", note: "DA tekstā: Hospitalet tager imod..." },
  4: { action: "LABOT", value: "Acceptere", note: "Aizstāt angļu Accept ar DA no comparison meaning" },
  5: { action: "LABOT", value: "Sandbanke", note: "important tekstā ir Sandbanke" },
  6: { action: "LABOT", value: "Sandbanke", note: "same as #5" },
  7: { action: "LABOT", value: "Serveren", note: "DA: Serveren var meget venlig" },
  8: { action: "LABOT", value: "Servicen", note: "DA: Servicen i restauranten..." },
  9: { action: "LABOT", value: "Holde", note: "DA meaning jau ir Holde" },
  10: { action: "LABOT", value: "Problemet", note: "DA: Problemet er kendt" },
  11: { action: "LABOT", value: "berømt", note: "DA comparison side: Han er berømt" },
  12: { action: "FJERN", value: "kendt", note: "duplikāts — pietiek ar berømt (#11)" },
  13: { action: "FJERN", value: "problem", note: "DA lieto problemer, nevis problem" },
  14: { action: "LABOT", value: "radioen", note: "DA: ...tænde for radioen" },
  15: { action: "LABOT", value: "Musiknoten", note: "DA: Musiknoten er høj" },
  16: { action: "FJERN", value: "note", note: "duplikāts yellow — pietiek ar Musiknoten (#15)" },
  17: { action: "LABOT", value: "patienten", note: "DA: Patienten venter..." },
  18: { action: "LABOT", value: "patienten", note: "DA: ...undersøger patienten" },
  19: { action: "LABOT", value: "patienten", note: "DA: Patienten har det bedre" },
  20: { action: "FJERN", value: "fragment", note: "angļu stale; nav DA study saturā" },
  21: { action: "LABOT", value: "materiale", note: "DA: ...naturligt materiale" },
  22: { action: "LABOT", value: "materiale", note: "meaning saturā ir materiale" },
  23: { action: "LABOT", value: "Materiale", note: "DA: Materiale (kapitālis)" },
  24: { action: "LABOT", value: "Menuen", note: "DA: Menuen er på bordet" },
  25: { action: "FJERN", value: "forbinder", note: "comparison[0].example DA vēl LV — akcents pagaidām noņemams; comparison labojums atsevišķi" },
  26: { action: "LABOT", value: "kleine", note: "DE piemērā: kleine Tasche" },
  27: { action: "LABOT", value: "kleine", note: "same as #26" },
  28: { action: "LABOT", value: "gleiche", note: "DE piemērā: die gleiche Tasche" },
  29: { action: "LABOT", value: "gleiche", note: "same as #28" },
};

function loadWords() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/da/a2.js"), "utf8"), ctx);
  return ctx.window.A2_WORDS;
}

function studySnippet(entry, hint) {
  const val = getAt(entry, hint);
  if (val === undefined) return "(nav)";
  if (typeof val === "string") return val.slice(0, 160);
  return JSON.stringify(val).slice(0, 160);
}

function currentAt(entry, field) {
  const v = getAt(entry, field);
  return v === undefined ? "(nav)" : String(v);
}

function proposedText(p) {
  if (p.action === "FJERN") return `FJERN \`${p.value}\``;
  if (p.action === "FALSE_POSITIVE") return "FALSE_POSITIVE";
  return p.value;
}

function main() {
  const words = loadWords();
  const review = [];
  const decisions = [];

  review.push("# DA–DE A2 — OWNER review (29 LOW sectionAccent residuals)");
  review.push("");
  review.push("Avots: [da-a2-targeted-regression-audit.md](./da-a2-targeted-regression-audit.md) (LOW = 29)");
  review.push("");
  review.push("> Katram ierakstam aizpildi **Statuss** un **OWNER_DECISION** [decisions tabulā](./da-a2-owner-decisions-low29-sectionaccents.md).");
  review.push("> **PROPOSED** = Luna ieteikums pēc faktiskā DA Study teksta — nav automātiski apstiprināts.");
  review.push("> **DE nemainīt.** Tikai sectionAccents termini.");
  review.push("> Statusi: **LABOT** (precīzs DA terms) | **FJERN** `termins` | **FALSE_POSITIVE** (validators kļūdās)");
  review.push("");

  decisions.push("# DA–DE A2 — OWNER decisions — low29-sectionaccents");
  decisions.push("");
  decisions.push("Avots: [da-a2-owner-review-low29-sectionaccents.md](./da-a2-owner-review-low29-sectionaccents.md)");
  decisions.push("");
  decisions.push("| # | Reg ID | Card ID | Field | Term | Statuss | OWNER_DECISION |");
  decisions.push("|---:|---|---|---|---|---|---|");

  for (const c of CASES) {
    const entry = findEntry(words, c.cardId);
    const de = entry?.de || "?";
    const p = PROPOSED[c.id];
    const current = currentAt(entry, c.field);
    const study = studySnippet(entry, c.studyHint);

    review.push(`## ${c.id}. ${c.reg}`);
    review.push("");
    review.push(`**Card ID:** \`${c.cardId}\` (de: ${de})`);
    review.push(`**Field:** \`${c.field}\``);
    review.push(`**CURRENT term:** ${current}`);
    review.push(`**Study context (\`${c.studyHint}\`):** ${study}`);
    review.push(`**Problēma:** sectionAccent termins \`${c.term}\` nav atrodams DA Study tekstā`);
    review.push(`**PROPOSED (${p.action}):** ${proposedText(p)} — ${p.note}`);
    review.push("");
    review.push("**OWNER_DECISION:**");
    review.push("");
    review.push("---");
    review.push("");

    decisions.push(
      `| ${c.id} | ${c.reg} | \`${c.cardId}\` | \`${c.field}\` | \`${c.term}\` | | |`
    );
  }

  const readme = `# DA–DE A2 — OWNER review LOW29 (sectionAccents)

29 mērķēti [targeted regression](../da-a2-targeted-regression-audit.md) LOW atradumi.

| Fails | Saturs |
|-------|--------|
| [da-a2-owner-review-low29-sectionaccents.md](./da-a2-owner-review-low29-sectionaccents.md) | Pilns konteksts + PROPOSED |
| [da-a2-owner-decisions-low29-sectionaccents.md](./da-a2-owner-decisions-low29-sectionaccents.md) | Tabula OWNER lēmumiem |

## Pēc OWNER atgriešanas

\`\`\`bash
node scripts/build-da-a2-low29-owner-apply-map.js
node scripts/apply-da-a2-low29-owner-repair.js
node scripts/audit-da-a2-low29-regression.js
\`\`\`

**Gala mērķis:** 29/29 pārbaudīti, LOW = 0, DE changes = 0.
`;

  fs.writeFileSync(REVIEW, review.join("\n"));
  fs.writeFileSync(DECISIONS, decisions.join("\n"));
  fs.writeFileSync(README, readme);

  console.log(JSON.stringify({ cases: CASES.length, review: REVIEW, decisions: DECISIONS, readme: README }, null, 2));
}

main();
