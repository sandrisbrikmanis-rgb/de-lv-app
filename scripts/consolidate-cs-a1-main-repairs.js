#!/usr/bin/env node
'use strict';
/**
 * Mechanical CS-DE A1 repair consolidation onto current data/cs/a1.js.
 * Applies approved PIRMS→PĒC repairs in canonical order; does not invent translations.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILES = [
  path.join(ROOT, 'data/cs/a1.js'),
  path.join(ROOT, 'www/data/cs/a1.js'),
];

const REPAIR_MODULES = [
  { source: 'full-review-block01', mod: () => require('./apply-cs-a1-full-review-repair-block01') },
  { source: 'full-review-block02', mod: () => require('./apply-cs-a1-full-review-repair-block02') },
  { source: 'full-review-block03', mod: () => require('./apply-cs-a1-full-review-repair-block03') },
  { source: 'full-review-block04', mod: () => require('./apply-cs-a1-full-review-repair-block04') },
  { source: 'full-review-block05', mod: () => require('./apply-cs-a1-full-review-repair-block05') },
  { source: 'full-review-block06', mod: () => require('./apply-cs-a1-full-review-repair-block06') },
  { source: 'full-review-block07', mod: () => require('./apply-cs-a1-full-review-repair-block07') },
  { source: 'full-review-block08', mod: () => require('./apply-cs-a1-full-review-repair-block08') },
  { source: 'full-review-block09', mod: () => require('./apply-cs-a1-full-review-repair-block09') },
  { source: 'full-review-block10', mod: () => require('./apply-cs-a1-full-review-repair-block10') },
  { source: 'full-review-block11', mod: () => require('./apply-cs-a1-full-review-repair-block11') },
  { source: 'full-review-block12', mod: () => require('./apply-cs-a1-full-review-repair-block12') },
];

function resolveField(field) {
  if (field === 'csMain' || field === 'csText') return 'lv';
  return field;
}

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`,
    'utf8'
  );
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `a1-${entry.de}-${index}`;
  return `a1-${index}`;
}

function getFieldValue(entry, fieldPath) {
  const field = resolveField(fieldPath);
  if (field === 'lv') return entry.lv;
  if (!field.startsWith('study.')) {
    const direct = entry[field];
    if (direct !== undefined) return direct;
    return entry.lv;
  }
  const parts = [];
  field.replace(/^study\./, '').replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return '';
  });
  let cur = entry.study;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur;
}

function setFieldValue(entry, fieldPath, value) {
  const field = resolveField(fieldPath);
  if (field === 'lv') {
    entry.lv = value;
    return;
  }
  if (!field.startsWith('study.')) {
    entry[field] = value;
    return;
  }
  const parts = [];
  field.replace(/^study\./, '').replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return '';
  });
  let cur = entry.study;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (cur[p] == null) cur[p] = typeof parts[i + 1] === 'number' ? [] : {};
    cur = cur[p];
  }
  cur[parts[parts.length - 1]] = value;
}

function serialize(v) {
  if (v == null) return null;
  if (Array.isArray(v) || typeof v === 'object') return JSON.stringify(v);
  return String(v);
}

function findIndex(words, cardId) {
  for (let i = 0; i < words.length; i++) {
    if (entryId(words[i], i) === cardId) return i;
  }
  return -1;
}

function collectRepairs() {
  const all = [];
  for (const { source, mod } of REPAIR_MODULES) {
    try {
      const m = mod();
      const repairs = m.REPAIRS || [];
      for (const r of repairs) {
        all.push({ ...r, source, field: r.field || 'csText' });
      }
    } catch (e) {
      console.warn(`Skip ${source}: ${e.message}`);
    }
  }
  return all;
}

function main() {
  const words = loadWords(FILES[0]);
  const repairs = collectRepairs();
  const results = {
    applied: 0,
    alreadyCorrect: 0,
    staleMismatch: 0,
    conflicts: [],
    missingCard: 0,
  };

  for (const r of repairs) {
    const idx = findIndex(words, r.cardId);
    if (idx < 0) {
      results.missingCard++;
      continue;
    }
    const actual = getFieldValue(words[idx], r.field);
    const pirmd = r.pirmd ?? r.pirms ?? r.PIRMS;
    const pec = r.pec ?? r.PECS;
    const a = serialize(actual);
    const p = serialize(pec);
    const m = serialize(pirmd);

    if (a === p) {
      results.alreadyCorrect++;
      continue;
    }
    if (a === m) {
      if (Array.isArray(pec) || (typeof pec === 'object' && pec !== null)) {
        setFieldValue(words[idx], r.field, JSON.parse(JSON.stringify(pec)));
      } else {
        setFieldValue(words[idx], r.field, pec);
      }
      results.applied++;
      continue;
    }
    results.staleMismatch++;
    results.conflicts.push({
      source: r.source,
      cardId: r.cardId,
      field: r.field,
      expectedPirmd: m,
      actual: a,
      pec: p,
      status: 'NEEDS_OWNER_REVIEW',
    });
  }

  for (const f of FILES) writeWords(f, words);

  const out = path.join(ROOT, 'reports/temp/cs-a1-consolidation-apply-results.json');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify({ results, repairCount: repairs.length, conflicts: results.conflicts }, null, 2));

  console.log(JSON.stringify({
    repairCount: repairs.length,
    applied: results.applied,
    alreadyCorrect: results.alreadyCorrect,
    staleMismatch: results.staleMismatch,
    conflicts: results.conflicts.length,
    missingCard: results.missingCard,
  }, null, 2));

  if (results.conflicts.length > 0) {
    console.log('Conflicts (first 10):');
    for (const c of results.conflicts.slice(0, 10)) {
      console.log(`  ${c.source} ${c.cardId} ${c.field}: actual=${String(c.actual).slice(0, 50)} pec=${String(c.pec).slice(0, 50)}`);
    }
  }
}

main();
