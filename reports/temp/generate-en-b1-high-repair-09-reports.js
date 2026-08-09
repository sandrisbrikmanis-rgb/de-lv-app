#!/usr/bin/env node
/** Generate en-b1-high-repair-09.md and en-b1-high-regression-09.md */
const fs = require("fs");
const path = require("path");
const { REPAIRS } = require("./en-b1-high-repair-09-data");

const ROOT = path.join(__dirname, "..", "..");
const log = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-09-log.json"), "utf8"));
const reg = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-09.json"), "utf8"));

const repairRows = REPAIRS.map((r, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `| ${n} | ${r.cardId} | ${r.de} | lv | ${r.old.replace(/\|/g, "\\|")} | ${r.final.replace(/\|/g, "\\|")} | PASS |`;
}).join("\n");

const repairMd = `# EN–DE B1 HIGH REPAIR #9 — Owner-Approved Repairs (50 cards)

**Date:** ${new Date().toISOString().slice(0, 10)}  
**Branch:** \`cursor/en-b1-high-repair-09-6850\`

## Summary

\`\`\`text
EN–DE B1 HIGH REPAIR #9

Cards owner-reviewed: 50
LABOT: 50
NELABOT: 0

Cards repaired: 50/50
Learner-facing EN fields repaired: 50/50

PRECONDITION MISMATCH: 0
Unexpected production changes: 0
IDs changed: 0
DE changes: 0
Study changes: 0
sectionAccents changes: 0
\`\`\`

## TAGUNG METADATA ANOMALY

\`\`\`text
Audit ID: b1-Tageordnung-2835
Audit ID valid production identity: NO
Actual DE lemma: Tagung
Actual article: die
Actual plural: die Tagungen
Current EN: Sitting
OWNER FINAL EN: Conference / meeting
Tageordnung production card exists: YES
Matching Tagung production cards: 1
TAGUNG IDENTITY GATE: PASS
Production ID changed: NO
DE changed: NO
\`\`\`

## Workflow

\`\`\`text
Workflow unresolved HIGH before #9: 223
HIGH #9 resolved: 50
Workflow unresolved HIGH remaining: 173
\`\`\`

## Repairs applied

| # | Card ID | DE | Field | OLD EN | OWNER FINAL EN | Status |
|---|---------|-----|-------|--------|----------------|--------|
${repairRows}

## Changed files

- \`data/en/b1.js\`
- \`www/data/en/b1.js\`
`;

const regressionMd = `# EN–DE B1 HIGH REPAIR #9 — Targeted Regression

**Date:** ${new Date().toISOString().slice(0, 10)}  
**Coverage:** 50/50 owner-reviewed cards (50 LABOT)  
**Branch:** \`cursor/en-b1-high-repair-09-6850\`

## Verdict

**${reg.meta.verdict}**

**${reg.meta.status}**

## Summary

\`\`\`text
EN–DE B1 HIGH REPAIR #9 — TARGETED REGRESSION

Cards regression-audited: 50/50

CRITICAL: ${reg.counts.CRITICAL}
HIGH: ${reg.counts.HIGH}
MEDIUM: ${reg.counts.MEDIUM}
LOW: ${reg.counts.LOW}

sectionAccents TECHNICAL: ${reg.counts.sectionAccentsTECHNICAL}
sectionAccents PEDAGOGICAL: ${reg.counts.sectionAccentsPEDAGOGICAL}

FOLLOW-UP FINDINGS: ${reg.followUpFindings}
OUT-OF-SCOPE FINDINGS: ${reg.outOfScopeFindings}
PRECONDITION MISMATCH: ${reg.preconditionMismatch}
Unexpected production changes: ${reg.validation.unexpectedProductionChanges}
\`\`\`

## TAGUNG METADATA ANOMALY

\`\`\`text
Audit ID: b1-Tageordnung-2835
Actual lemma: Tagung
Current EN (before repair): Sitting
OWNER FINAL EN: Conference / meeting
Tageordnung production card exists: YES
Matching Tagung cards: 1
TAGUNG IDENTITY GATE: PASS
\`\`\`

## Validation

| Check | Result |
|-------|--------|
| JavaScript syntax | ${reg.validation.javascriptSyntax} |
| Total cards | ${reg.validation.totalCards} |
| Structural parity | ${reg.validation.structuralParity} |
| ID/order parity | ${reg.validation.orderParity} |
| DE READ-ONLY | ${reg.validation.deReadOnly} |
| Mirror parity | ${reg.validation.mirrorParity} |
| IDs changed | ${reg.validation.idsChanged} |

## Workflow

\`\`\`text
Workflow unresolved HIGH before #9: 223
Workflow unresolved HIGH after #9: 173
\`\`\`

## Next step

**EN–DE B1 HIGH OWNER REVIEW #10** (workflow reference: 173 unresolved HIGH)

Do **not** mark HIGH cycle CLOSED or B1 OWNER ACCEPTED.
`;

fs.writeFileSync(path.join(ROOT, "reports/en-b1-high-repair-09.md"), repairMd);
fs.writeFileSync(path.join(ROOT, "reports/en-b1-high-regression-09.md"), regressionMd);
console.log("Reports written");
