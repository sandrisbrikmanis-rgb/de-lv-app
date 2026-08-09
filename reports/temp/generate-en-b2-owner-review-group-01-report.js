#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'en-b2-owner-review-group-01-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const jsonOut = {
  meta: {
    group: '1/10',
    itemsReviewed: 50,
    remainingAfterGroup: 420,
    sourceManifest: 'reports/temp/en-b2-owner-review-after-safe-gate.json',
    productionChanges: 0,
    deReadOnly: 'PASS',
    generatedAt: new Date().toISOString(),
    branch: 'cursor/en-b2-full-audit-6850',
    pr: '#376',
  },
  summary: {
    FIX_AS_PROPOSED: data.filter((r) => r.recommendation === 'FIX_AS_PROPOSED').length,
    FIX_WITH_CORRECTION: data.filter((r) => r.recommendation === 'FIX_WITH_CORRECTION').length,
    KEEP: data.filter((r) => r.recommendation === 'KEEP').length,
    OWNER_DECISION_REQUIRED: data.filter((r) => r.recommendation === 'OWNER_DECISION_REQUIRED').length,
    TOTAL: 50,
  },
  reviews: data,
};

fs.writeFileSync(
  path.join(__dirname, 'en-b2-owner-review-group-01.json'),
  JSON.stringify(jsonOut, null, 2)
);

function escTable(s) {
  return String(s || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

let md = '# EN–DE B2 — OWNER REVIEW GROUP 1/10 — ITEMS 001–050\n\n';
md += '**Group:** 1/10 | **Reviewed:** 50/50 | **Remaining after group:** 420  \n';
md += '**Source:** `reports/temp/en-b2-owner-review-after-safe-gate.json` (first 50 entries in manifest order)  \n';
md += '**Branch:** `cursor/en-b2-full-audit-6850` | **PR:** #376  \n';
md += '**Production changes:** 0 | **DE READ-ONLY:** PASS\n\n';
md += '---\n\n';
md += '## OWNER REVIEW TABLE\n\n';
md += '| # | Card ID | DE | Current EN | Proposed | Recommendation | Recommended final EN |\n';
md += '| -: | ------- | -- | ---------- | -------- | -------------- | -------------------- |\n';

for (const r of data) {
  const seq = String(r.sequence).padStart(2, '0');
  md += `| ${seq} | ${r.cardId} | ${r.deLemma} | ${escTable(r.currentEn)} | ${escTable(r.manifestProposal)} | ${r.recommendation} | ${escTable(r.recommendedFinalEn)} |\n`;
}

md += '\n---\n\n## DETAILED OWNER CARDS\n\n';

for (const r of data) {
  const seq = String(r.sequence).padStart(2, '0');
  md += `## ${seq} — \`${r.cardId}\` — ${r.deLemma}\n\n`;
  md += `**Field:** \`${r.fieldPath}\`\n\n`;
  md += `**DE:**\n${r.deLemma}\n\n`;
  md += `**Current EN:**\n${r.currentEn}\n\n`;
  md += `**Manifest proposal:**\n${r.manifestProposal}\n\n`;
  md += `**My recommendation:**\n\`${r.recommendation}\`\n\n`;
  md += `**Recommended final EN:**\n${r.recommendedFinalEn}\n\n`;
  md += `**Reason:**\n${r.reason}\n\n`;
  md += '---\n\n';
}

md += '## SUMMARY\n\n';
md += '| Recommendation | Count |\n';
md += '| -------------- | ----: |\n';
md += `| FIX_AS_PROPOSED | ${jsonOut.summary.FIX_AS_PROPOSED} |\n`;
md += `| FIX_WITH_CORRECTION | ${jsonOut.summary.FIX_WITH_CORRECTION} |\n`;
md += `| KEEP | ${jsonOut.summary.KEEP} |\n`;
md += `| OWNER_DECISION_REQUIRED | ${jsonOut.summary.OWNER_DECISION_REQUIRED} |\n`;
md += `| TOTAL | ${jsonOut.summary.TOTAL} |\n`;

const ownerDecisions = data.filter((r) => r.recommendation === 'OWNER_DECISION_REQUIRED');
md += '\n---\n\n## OWNER DECISIONS REQUIRED\n\n';
if (ownerDecisions.length === 0) {
  md += 'No entries in this group require OWNER decision between competing valid options.\n';
} else {
  for (const r of ownerDecisions) {
    md += `### ${r.cardId} — ${r.deLemma}\n\n`;
    md += `- **Current EN:** ${r.currentEn}\n`;
    md += `- **Reason:** ${r.reason}\n\n`;
  }
}

fs.writeFileSync(path.join(__dirname, '../en-b2-owner-review-group-01.md'), md);

console.log('Summary:', JSON.stringify(jsonOut.summary));
console.log('Written reports/en-b2-owner-review-group-01.md');
console.log('Written reports/temp/en-b2-owner-review-group-01.json');
