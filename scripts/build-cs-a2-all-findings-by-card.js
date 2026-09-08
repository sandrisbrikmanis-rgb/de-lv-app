#!/usr/bin/env node
'use strict';
/**
 * Build CS-DE A2 all-findings-by-card report (READ-ONLY).
 * Sources: reports/temp/cs-a2-audit/* + data/cs/a2.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const A2_FILE = path.join(ROOT, 'data/cs/a2.js');
const AUDIT_DIR = path.join(ROOT, 'reports/temp/cs-a2-audit');
const OUT_MD = path.join(ROOT, 'reports/cs-a2-all-findings-by-card.md');
const OUT_JSON = path.join(ROOT, 'reports/temp/cs-a2-all-findings-by-card.json');

const SEVERITY_ORDER = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };

function loadA2Words() {
  const code = fs.readFileSync(A2_FILE, 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `a2-${entry.de}-${index}`;
  return `a2-${index}`;
}

function buildCardIndex(words) {
  const byId = new Map();
  const ambiguous = new Map();
  for (let i = 0; i < words.length; i++) {
    const id = entryId(words[i], i);
    if (byId.has(id)) {
      ambiguous.set(id, (ambiguous.get(id) || [byId.get(id)]).concat(i));
    } else {
      byId.set(id, i);
    }
  }
  return { byId, ambiguous };
}

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function expandCrossDatasetFindings(crossItems) {
  const out = [];
  for (const item of crossItems) {
    for (const loc of item.locations || []) {
      if (!loc.startsWith('a2:')) continue;
      out.push({
        findingSource: 'cross-dataset',
        cardId: loc.split(':', 2)[1],
        field: 'cross-dataset',
        severity: item.severity || 'HIGH',
        status: 'FINDING',
        de: item.de,
        lvSource: null,
        currentCs: (item.variants || []).join(' • '),
        proposedCs: null,
        problem: `Cross-dataset DE word "${item.de}" has multiple CS variants across datasets: ${(item.variants || []).join(', ')}`,
        rationale: `Locations: ${(item.locations || []).join('; ')}`,
        variants: item.variants,
        locations: item.locations,
        locationCount: item.locationCount,
      });
    }
  }
  return out;
}

function collectAllFindings() {
  const det = loadJson(path.join(AUDIT_DIR, 'deterministic-audit.json')).findings || [];
  const ling = loadJson(path.join(AUDIT_DIR, 'linguistic-audit.json')).findings || [];
  const cross = loadJson(path.join(AUDIT_DIR, 'cross-dataset-findings.json'));

  const findings = [];
  let n = 0;
  for (const f of det) {
    n += 1;
    findings.push({
      findingNumber: n,
      findingSource: 'deterministic',
      cardId: f.cardId,
      batch: f.batch,
      index: f.index,
      field: f.field,
      severity: f.severity,
      status: f.status,
      currentCs: f.currentCs,
      de: f.de,
      lvSource: f.lvSource,
      problem: f.problem,
      recommendedCs: f.proposedCs,
      rationale: f.rationale,
      category: f.category,
      raw: f,
    });
  }
  for (const f of ling) {
    n += 1;
    findings.push({
      findingNumber: n,
      findingSource: 'linguistic',
      cardId: f.cardId,
      batch: f.batch,
      index: f.index,
      field: f.field,
      severity: f.severity,
      status: f.status || 'FINDING',
      currentCs: f.currentCs,
      de: f.de,
      lvSource: f.lvSource,
      problem: f.reason || f.problem,
      recommendedCs: f.proposedCs,
      rationale: f.justification || f.rationale,
      category: f.category,
      confidence: f.confidence,
      raw: f,
    });
  }
  for (const f of expandCrossDatasetFindings(cross)) {
    n += 1;
    findings.push({
      findingNumber: n,
      findingSource: 'cross-dataset',
      cardId: f.cardId,
      batch: null,
      index: null,
      field: f.field,
      severity: f.severity,
      status: f.status,
      currentCs: f.currentCs,
      de: f.de,
      lvSource: f.lvSource,
      problem: f.problem,
      recommendedCs: f.proposedCs,
      rationale: f.rationale,
      category: 'CROSS_DATASET',
      raw: f,
    });
  }
  return findings;
}

function findingKey(f) {
  return [
    f.findingSource,
    f.findingNumber,
    f.cardId,
    f.field,
    f.severity,
    f.currentCs,
    f.problem,
  ].join('|');
}

function resolveCard(cardId, byId, ambiguous, words) {
  if (byId.has(cardId)) {
    return { index: byId.get(cardId), cardId, status: 'RESOLVED' };
  }
  const m = cardId.match(/^a2-(.+)-(\d+)$/);
  if (m) {
    const idx = Number(m[2]);
    if (idx >= 0 && idx < words.length && entryId(words[idx], idx) === cardId) {
      return { index: idx, cardId, status: 'RESOLVED' };
    }
    if (idx >= 0 && idx < words.length && words[idx].de === m[1]) {
      return { index: idx, cardId: entryId(words[idx], idx), status: 'RESOLVED_BY_INDEX' };
    }
  }
  if (ambiguous.has(cardId)) {
    return { index: null, cardId, status: 'AMBIGUOUS_CARD_MAPPING', candidates: ambiguous.get(cardId) };
  }
  return { index: null, cardId, status: 'CARD_NOT_FOUND' };
}

function formatFindingBlock(f, i) {
  const lines = [
    `#### Finding ${i} — #${f.findingNumber} (${f.findingSource})`,
    '',
    `| Field | Value |`,
    `|---|---|`,
    `| finding number | ${f.findingNumber} |`,
    `| source | ${f.findingSource} |`,
    `| batch | ${f.batch ?? '—'} |`,
    `| card/index | ${f.cardId}${f.index != null ? ` / ${f.index}` : ''} |`,
    `| field | ${f.field} |`,
    `| severity | ${f.severity} |`,
    `| status | ${f.status} |`,
    `| Current CS text | ${String(f.currentCs ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ')} |`,
    `| DE source | ${String(f.de ?? '').replace(/\|/g, '\\|')} |`,
    `| LV reference | ${String(f.lvSource ?? '').replace(/\|/g, '\\|')} |`,
    `| Problem | ${String(f.problem ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ')} |`,
    `| Recommended CS | ${String(f.recommendedCs ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ')} |`,
    `| Rationale | ${String(f.rationale ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ')} |`,
  ];
  if (f.category) lines.push(`| category | ${f.category} |`);
  if (f.confidence != null) lines.push(`| confidence | ${f.confidence} |`);
  lines.push('', '```json', JSON.stringify(f.raw, null, 2), '```', '');
  return lines.join('\n');
}

function main() {
  const words = loadA2Words();
  const { byId, ambiguous } = buildCardIndex(words);
  const allFindings = collectAllFindings();

  const seen = new Set();
  const duplicates = [];
  for (const f of allFindings) {
    const k = findingKey(f);
    if (seen.has(k)) duplicates.push(f);
    else seen.add(k);
  }

  const byCard = new Map();
  const unresolved = [];

  for (const f of allFindings) {
    const resolved = resolveCard(f.cardId, byId, ambiguous, words);
    if (resolved.status === 'CARD_NOT_FOUND' || resolved.status === 'AMBIGUOUS_CARD_MAPPING') {
      unresolved.push({ finding: f, mapping: resolved });
      continue;
    }
    const idx = resolved.index;
    const canonicalId = entryId(words[idx], idx);
    if (!byCard.has(idx)) {
      byCard.set(idx, { cardId: canonicalId, productionIndex: idx, findings: [] });
    }
    byCard.get(idx).findings.push({ ...f, resolvedCardId: canonicalId, mappingStatus: resolved.status });
  }

  const sortedCards = [...byCard.values()].sort((a, b) => a.productionIndex - b.productionIndex);
  const attachedCount = sortedCards.reduce((s, c) => s + c.findings.length, 0);
  const severityCounts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of allFindings) {
    if (severityCounts[f.severity] !== undefined) severityCounts[f.severity] += 1;
  }

  const summary = {
    a2TotalCards: words.length,
    totalAuditFindings: allFindings.length,
    critical: severityCounts.CRITICAL,
    high: severityCounts.HIGH,
    medium: severityCounts.MEDIUM,
    low: severityCounts.LOW,
    uniqueCardsWithFindings: sortedCards.length,
    cardsWithoutFindings: words.length - sortedCards.length,
    findingsAccountedFor: attachedCount + unresolved.length,
    unresolvedCardMappings: unresolved.length,
    duplicateFindings: duplicates.length,
    productionChanges: 0,
    deChanges: 0,
    expectedFindings: 4162,
    processedFindings: allFindings.length,
    missingFindings: 4162 - allFindings.length,
    reconciliationPass: allFindings.length === 4162
      && attachedCount + unresolved.length === 4162
      && duplicates.length === 0
      && unresolved.length === 0,
  };

  const jsonOut = {
    generatedAt: new Date().toISOString(),
    productionFile: 'data/cs/a2.js',
    auditSources: [
      'reports/temp/cs-a2-audit/deterministic-audit.json',
      'reports/temp/cs-a2-audit/linguistic-audit.json',
      'reports/temp/cs-a2-audit/cross-dataset-findings.json',
    ],
    summary,
    cards: sortedCards.map((c) => ({
      cardId: c.cardId,
      productionIndex: c.productionIndex,
      findingsCount: c.findings.length,
      productionObject: words[c.productionIndex],
      findings: c.findings,
    })),
    unresolved,
    duplicates,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(jsonOut, null, 2));

  const md = [];
  md.push('# CS–DE A2 — ALL FINDINGS BY UNIQUE CARD', '');
  md.push('## Summary', '');
  md.push('| Metric | Value |');
  md.push('|---|---|');
  md.push(`| A2 total cards | ${summary.a2TotalCards} |`);
  md.push(`| total audit findings | ${summary.totalAuditFindings} |`);
  md.push(`| CRITICAL | ${summary.critical} |`);
  md.push(`| HIGH | ${summary.high} |`);
  md.push(`| MEDIUM | ${summary.medium} |`);
  md.push(`| LOW | ${summary.low} |`);
  md.push(`| unique cards with findings | ${summary.uniqueCardsWithFindings} |`);
  md.push(`| cards without findings | ${summary.cardsWithoutFindings} |`);
  md.push(`| findings accounted for | ${summary.findingsAccountedFor}/4162 |`);
  md.push(`| unresolved card mappings | ${summary.unresolvedCardMappings} |`);
  md.push(`| duplicate findings | ${summary.duplicateFindings} |`);
  md.push(`| production changes | ${summary.productionChanges} |`);
  md.push(`| DE changes | ${summary.deChanges} |`);
  md.push('');

  sortedCards.forEach((card, cardIdx) => {
    const num = String(cardIdx + 1).padStart(3, '0');
    md.push(`## ${num} — \`${card.cardId}\``, '');
    md.push(`**A2 production index:** ${card.productionIndex}`);
    md.push(`**Findings:** ${card.findings.length}`, '');
    md.push('### Production object', '');
    md.push('```json');
    md.push(JSON.stringify(words[card.productionIndex], null, 2));
    md.push('```', '');
    md.push('### Audit findings', '');
    card.findings
      .sort((a, b) => (SEVERITY_ORDER[a.severity] ?? 9) - (SEVERITY_ORDER[b.severity] ?? 9) || a.findingNumber - b.findingNumber)
      .forEach((f, i) => md.push(formatFindingBlock(f, i + 1)));
  });

  md.push('## UNRESOLVED FINDING MAPPINGS', '');
  if (!unresolved.length) {
    md.push('None', '');
  } else {
    for (const u of unresolved) {
      md.push(`### Finding #${u.finding.findingNumber} — ${u.mapping.status}`, '');
      md.push(`- cardId: \`${u.finding.cardId}\``);
      md.push(`- field: \`${u.finding.field}\``);
      md.push(`- severity: ${u.finding.severity}`);
      md.push(`- reason: ${u.mapping.status}`);
      if (u.mapping.candidates) md.push(`- candidates: ${u.mapping.candidates.join(', ')}`);
      md.push('');
    }
  }

  fs.writeFileSync(OUT_MD, md.join('\n'));

  const result = {
    summary,
    outputMd: OUT_MD,
    outputJson: OUT_JSON,
    mdBytes: fs.statSync(OUT_MD).size,
    jsonBytes: fs.statSync(OUT_JSON).size,
  };
  console.log(JSON.stringify(result, null, 2));
  if (!summary.reconciliationPass) process.exit(1);
}

if (require.main === module) main();
module.exports = { main, collectAllFindings, entryId };
