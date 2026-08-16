#!/usr/bin/env node
/**
 * Generate reports/da-b1-owner-review-GITHUB.md — clickable GitHub blob links
 * for immediate OWNER review opening in browser.
 */
const fs = require('fs');
const path = require('path');

const REPO = 'sandrisbrikmanis-rgb/de-lv-app';
const BRANCH = process.env.GITHUB_BRANCH || 'cursor/da-b1-full-audit-fffe';
const PR_NUMBER = process.env.GITHUB_PR || '546';
const REPORTS = path.join(__dirname, '..', 'reports');
const OUT = path.join(REPORTS, 'da-b1-owner-review-GITHUB.md');

function ghLink(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function link(file, label) {
  const name = label || file;
  return `[${name}](${ghLink(file)})`;
}

function listFiles(prefix) {
  return fs
    .readdirSync(REPORTS)
    .filter((f) => f.startsWith(prefix) && f.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

const comparisonReview = listFiles('da-b1-owner-review-comparison-');
const comparisonDecisions = listFiles('da-b1-owner-decisions-comparison-');
const sectionReview = listFiles('da-b1-owner-review-sectionaccents-');
const sectionDecisions = listFiles('da-b1-owner-decisions-sectionaccents-');
const miscReview = listFiles('da-b1-owner-review-misc-');
const miscDecisions = listFiles('da-b1-owner-decisions-misc-');

function pairTable(reviews, decisions, title) {
  const lines = [`## ${title}`, '', '| # | Review (aizpildi OWNER_DECISION) | Decisions template |', '|--:|---|---|'];
  const n = Math.max(reviews.length, decisions.length);
  for (let i = 0; i < n; i++) {
    const r = reviews[i];
    const d = decisions[i];
    const num = String(i + 1).padStart(2, '0');
    lines.push(
      `| ${num} | ${r ? link(r, r.replace('da-b1-owner-review-', '')) : '—'} | ${d ? link(d, d.replace('da-b1-owner-decisions-', '')) : '—'} |`
    );
  }
  lines.push('');
  return lines.join('\n');
}

const md = `# DA–DE B1 — GitHub atvēršanas indekss

**Branch:** \`${BRANCH}\` · **PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})

Atver šo failu GitHub (PR vai branch), noklikšķini uz Review faila, aizpildi **OWNER_DECISION**, pēc tam atgriez aizpildītos failus COPY-ONLY apply.

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${link('da-b1-owner-review-README.md', 'OWNER README')} | Workflow, kopsavilkums, statusi |
| ${link('da-b1-full-audit.md', 'Pilns audits')} | 3367/3367 kartītes, 1575 findings |
| ${link('da-b1-owner-review-GITHUB.md', 'Šis indekss')} | Visas GitHub saites |

## Ātrās saites — Comparison (710, HIGH)

${comparisonReview.map((f, i) => `${i + 1}. ${link(f)} ↔ ${link(comparisonDecisions[i] || '')}`).join('\n')}

${pairTable(comparisonReview, comparisonDecisions, 'Comparison tabula')}

## Ātrās saites — sectionAccents (798, MEDIUM)

${sectionReview.map((f, i) => `${i + 1}. ${link(f)} ↔ ${link(sectionDecisions[i] || '')}`).join('\n')}

${pairTable(sectionReview, sectionDecisions, 'sectionAccents tabula')}

## Ātrās saites — Misc / zero-width (67)

${miscReview.map((f, i) => `${i + 1}. ${link(f)} ↔ ${link(miscDecisions[i] || '')}`).join('\n')}

${pairTable(miscReview, miscDecisions, 'Misc tabula')}

## Visi review faili (viena kolonna)

${[...comparisonReview, ...sectionReview, ...miscReview].map((f) => `- ${link(f)}`).join('\n')}

## Visi decisions template faili

${[...comparisonDecisions, ...sectionDecisions, ...miscDecisions].map((f) => `- ${link(f)}`).join('\n')}

---

**Verdict:** DA–DE B1: NEEDS REPAIR · **Production changes:** 0 · **DE changes:** 0
`;

fs.writeFileSync(OUT, md, 'utf8');
console.log(`Wrote ${OUT} (${comparisonReview.length + sectionReview.length + miscReview.length} review links)`);
