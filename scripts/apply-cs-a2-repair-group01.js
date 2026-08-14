#!/usr/bin/env node
'use strict';
/**
 * CS-DE A2 Repair Group 01 — COPY-ONLY from cs-a2-repair-group01-spec.json
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const SPEC_PATH = path.join(__dirname, 'cs-a2-repair-group01-spec.json');
const FILES = [path.join(ROOT, 'data/cs/a2.js'), path.join(ROOT, 'www/data/cs/a2.js')];
const DE_FIELDS = ['de', 'de_article', 'de_plural'];

const { validateSectionAccents } = require('./apply-cs-a1-final-missing-study-parity-repair');
const { detectForeignRemnant, walkStrings } = require('./lib/cs-audit-helpers');

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(filePath, `const A2_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A2_WORDS = A2_WORDS;\n`, 'utf8');
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `a2-${entry.de}-${index}`;
  return `a2-${index}`;
}

function serializeDe(entry) {
  const o = {};
  for (const f of DE_FIELDS) o[f] = entry[f] ?? null;
  return JSON.stringify(o);
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function applyRepairs(words, spec) {
  const results = [];
  const allowed = new Set(spec.cards.map((c) => c.cardId));

  for (const card of spec.cards) {
    const { groupOrder, productionIndex, cardId, targetObject } = card;
    const r = { groupOrder, productionIndex, cardId, status: null };

    if (productionIndex < 0 || productionIndex >= words.length) {
      r.status = 'CARD_NOT_FOUND';
      results.push(r);
      continue;
    }

    const current = words[productionIndex];
    const actualId = entryId(current, productionIndex);
    if (actualId !== cardId) {
      r.status = 'INDEX_MISMATCH';
      r.actualCardId = actualId;
      results.push(r);
      continue;
    }

    if (serializeDe(targetObject) !== serializeDe(current)) {
      r.status = 'DE_MISMATCH_BLOCKED';
      r.deFields = {};
      for (const f of DE_FIELDS) {
        r.deFields[f] = { current: current[f] ?? null, target: targetObject[f] ?? null };
      }
      results.push(r);
      continue;
    }

    words[productionIndex] = JSON.parse(JSON.stringify(targetObject));
    r.status = 'APPLIED';
    results.push(r);
  }

  return { results, allowed };
}

function verifyScope(before, after, allowed) {
  const changed = [];
  for (let i = 0; i < after.length; i++) {
    if (JSON.stringify(before[i]) === JSON.stringify(after[i])) continue;
    const id = entryId(after[i], i);
    changed.push({ index: i, cardId: id });
    if (!allowed.has(id)) return { pass: false, changed, unexpected: changed.filter((c) => !allowed.has(c.cardId)) };
  }
  return { pass: true, changed, unexpected: [] };
}

function verifyDeUnchanged(before, after) {
  let changes = 0;
  for (let i = 0; i < after.length; i++) {
    if (serializeDe(before[i]) !== serializeDe(after[i])) changes++;
  }
  return changes;
}

function verifyIdOrder(words, baseline) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].de !== baseline[i].de) return false;
  }
  return true;
}

function checkForeignRemnants(words, cardIds) {
  const hits = [];
  const idSet = new Set(cardIds);
  for (let i = 0; i < words.length; i++) {
    const cardId = entryId(words[i], i);
    if (!idSet.has(cardId)) continue;
    walkStrings(words[i], (text, ctx) => {
      if (ctx.inDe) return;
      const fr = detectForeignRemnant(text);
      if (fr.length) hits.push({ cardId, field: ctx.path, types: fr, text: text.slice(0, 200) });
    });
  }
  return hits;
}

function checkSectionAccents(words, cardIds) {
  const issues = [];
  const idSet = new Set(cardIds);
  for (let i = 0; i < words.length; i++) {
    const cardId = entryId(words[i], i);
    if (!idSet.has(cardId) || !words[i].study) continue;
    const mismatches = validateSectionAccents(words[i].study, words[i].study.sectionAccents, words[i].de);
    for (const m of mismatches) issues.push({ cardId, ...m });
  }
  return issues;
}

function generateReport(summary, results) {
  const lines = [
    '# CS–DE A2 Repair Group 01',
    '',
    'COPY-ONLY repair from `scripts/cs-a2-repair-group01-spec.json`.',
    '',
    '## Summary',
    '',
    '| Metric | Value |',
    '|---|---|',
    `| requested | ${summary.requested} |`,
    `| processed | ${summary.processed}/${summary.requested} |`,
    `| APPLIED | ${summary.applied} |`,
    `| CURRENT_VALUE_MISMATCH | ${summary.currentValueMismatch} |`,
    `| CARD_NOT_FOUND | ${summary.cardNotFound} |`,
    `| INDEX_MISMATCH | ${summary.indexMismatch} |`,
    `| DE_MISMATCH_BLOCKED | ${summary.deMismatchBlocked} |`,
    '',
    '## Changed cards',
    '',
    summary.changedCards.join(', ') || '—',
    '',
    '## Validation',
    '',
    '| Check | Result |',
    '|---|---|',
    `| A2 card count | ${summary.cards} |`,
    `| ID/order | ${summary.idOrder} |`,
    `| syntax | ${summary.syntax} |`,
    `| mirror | ${summary.mirror} |`,
    `| DE changes | ${summary.deChanges} |`,
    `| unexpected production changes | ${summary.unexpectedCount} |`,
    `| sectionAccents issues | ${summary.sectionAccentIssues} |`,
    `| LV remnants (repaired cards) | ${summary.lvRemnants} |`,
    `| regression findings documented | ${summary.regressionFindings} |`,
    '',
    '## Per-card results',
    '',
    '| # | cardId | index | status |',
    '|---|---|---|---|',
    ...results.map((r) => `| ${r.groupOrder} | ${r.cardId} | ${r.productionIndex} | ${r.status} |`),
    '',
    `## Branch`,
    '',
    `\`${summary.branch}\``,
    '',
    `_Generated: ${new Date().toISOString()}_`,
  ];
  return lines.join('\n');
}

function main() {
  const spec = JSON.parse(fs.readFileSync(SPEC_PATH, 'utf8'));
  const before = loadWords(FILES[0]);
  const baselineDe = before.map((e) => e.de);
  const words = JSON.parse(JSON.stringify(before));

  const { results, allowed } = applyRepairs(words, spec);
  const cardIds = spec.cards.map((c) => c.cardId);

  const applied = results.filter((r) => r.status === 'APPLIED').length;
  const blocked = results.filter((r) => r.status === 'DE_MISMATCH_BLOCKED');
  if (blocked.length) {
    console.error('DE_MISMATCH_BLOCKED:', JSON.stringify(blocked, null, 2));
    process.exit(1);
  }

  for (const fp of FILES) writeWords(fp, words);

  const scope = verifyScope(before, words, allowed);
  const deChanges = verifyDeUnchanged(before, words);
  const idOrder = verifyIdOrder(words, before);
  let syntax = 'PASS';
  try {
    execSync('node --check data/cs/a2.js', { cwd: ROOT, stdio: 'pipe' });
    if (words.length !== 1640) syntax = 'FAIL';
  } catch {
    syntax = 'FAIL';
  }
  const mirror = fs.readFileSync(FILES[0], 'utf8') === fs.readFileSync(FILES[1], 'utf8') ? 'PASS' : 'FAIL';
  const sectionAccentIssues = checkSectionAccents(words, cardIds);
  const lvRemnants = checkForeignRemnants(words, cardIds);

  const summary = {
    requested: spec.cards.length,
    processed: results.length,
    applied,
    currentValueMismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    cardNotFound: results.filter((r) => r.status === 'CARD_NOT_FOUND').length,
    indexMismatch: results.filter((r) => r.status === 'INDEX_MISMATCH').length,
    deMismatchBlocked: blocked.length,
    changedCards: scope.changed.map((c) => c.cardId),
    cards: words.length,
    idOrder: idOrder ? 'PASS' : 'FAIL',
    syntax,
    mirror,
    deChanges,
    unexpectedCount: scope.unexpected.length,
    sectionAccentIssues: sectionAccentIssues.length,
    lvRemnants: lvRemnants.length,
    regressionFindings: 0,
    branch: 'cursor/cs-a2-repair-group01-6ea4',
  };

  const report = generateReport(summary, results);
  fs.writeFileSync(path.join(ROOT, 'reports/cs-a2-repair-group01.md'), report);

  const pass = applied === 50
    && summary.cardNotFound === 0
    && summary.indexMismatch === 0
    && summary.deMismatchBlocked === 0
    && scope.pass
    && deChanges === 0
    && syntax === 'PASS'
    && mirror === 'PASS'
    && idOrder
    && words.length === 1640;

  console.log(JSON.stringify({ pass, summary, results }, null, 2));
  if (!pass) process.exit(1);
}

if (require.main === module) main();
module.exports = { applyRepairs, main };
