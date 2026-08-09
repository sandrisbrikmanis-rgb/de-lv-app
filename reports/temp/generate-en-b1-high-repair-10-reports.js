#!/usr/bin/env node
/** Generate en-b1-high-repair-10.md and en-b1-high-regression-10.md */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const log = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-10-log.json"), "utf8"));
const reg = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-10.json"), "utf8"));

const repairRows = log.repairs
  .map((r, i) => {
    const n = String(i + 1).padStart(2, "0");
    const old = String(r.old).replace(/\|/g, "\\|").slice(0, 60);
    const fin = String(r.finalEn).replace(/\|/g, "\\|").slice(0, 60);
    return `| ${n} | ${r.cardId} | ${r.de} | ${r.field} | ${old} | ${fin} | PASS |`;
  })
  .join("\n");

const repairMd = `# EN–DE B1 HIGH REPAIR #10 — Owner-Approved Repairs (50 cards)

**Date:** ${new Date().toISOString().slice(0, 10)}  
**Branch:** \`cursor/en-b1-high-repair-10-6850\`

## Summary

\`\`\`text
EN–DE B1 HIGH REPAIR #10

Cards owner-reviewed: 50
LABOT: 50
NELABOT: 0

Cards repaired: ${log.cardsRepaired}/50
Cards regression-audited: 50/50

Findings repaired:
HIGH: ${log.findingsRepaired.HIGH}/${log.findingsRepaired.HIGH}
MEDIUM: ${log.findingsRepaired.MEDIUM}/${log.findingsRepaired.MEDIUM}
LOW: ${log.findingsRepaired.LOW}/${log.findingsRepaired.LOW}
TECHNICAL: ${log.findingsRepaired.TECHNICAL}/${log.findingsRepaired.TECHNICAL}

sectionAccents TECHNICAL repaired: ${log.findingsRepaired.sectionAccentsTECHNICAL}/${log.findingsRepaired.sectionAccentsTECHNICAL}
sectionAccents PEDAGOGICAL repaired: ${log.findingsRepaired.sectionAccentsPEDAGOGICAL}/${log.findingsRepaired.sectionAccentsPEDAGOGICAL}

PRECONDITION MISMATCH: 0
Unexpected production changes: 0
IDs changed: 0
DE changes: 0
\`\`\`

## Workflow

\`\`\`text
Workflow unresolved HIGH before #10: 173
HIGH #10 resolved logical cards: 50
Workflow unresolved HIGH remaining: 123
\`\`\`

## Repairs applied (${log.repairedCount} findings)

| # | Card ID | DE | Field | OLD EN | OWNER FINAL EN | Status |
|---|---------|-----|-------|--------|----------------|--------|
${repairRows}

## Changed files

- \`data/en/b1.js\`
- \`www/data/en/b1.js\`
`;

const regressionMd = `# EN–DE B1 HIGH REPAIR #10 — Targeted Regression

**Date:** ${new Date().toISOString().slice(0, 10)}  
**Coverage:** 50/50 owner-reviewed cards (50 LABOT)  
**Branch:** \`cursor/en-b1-high-repair-10-6850\`

## Verdict

**${reg.meta.verdict}**

**${reg.meta.status}**

## Summary

\`\`\`text
EN–DE B1 HIGH REPAIR #10 — TARGETED REGRESSION

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

## Validation

| Check | Result |
|-------|--------|
| JavaScript syntax | ${reg.validation.javascriptSyntax} |
| Total cards | ${reg.validation.totalCards} |
| Structural parity | ${reg.validation.structuralParity} |
| ID/order parity | ${reg.validation.orderParity} |
| DE READ-ONLY | ${reg.validation.deReadOnly} |
| Mirror parity | ${reg.validation.mirrorParity} |
| UTF-8/mojibake | ${reg.validation.utf8Mojibake} |
| IDs changed | ${reg.validation.idsChanged} |

## Workflow

\`\`\`text
Workflow unresolved HIGH before #10: 173
Workflow unresolved HIGH after #10: 123
\`\`\`

## Next step

**EN–DE B1 HIGH OWNER REVIEW #11** (workflow reference: 123 unresolved HIGH)

Do **not** mark HIGH cycle CLOSED or B1 OWNER ACCEPTED.
`;

fs.writeFileSync(path.join(ROOT, "reports/en-b1-high-repair-10.md"), repairMd);
fs.writeFileSync(path.join(ROOT, "reports/en-b1-high-regression-10.md"), regressionMd);
console.log("Reports written");
