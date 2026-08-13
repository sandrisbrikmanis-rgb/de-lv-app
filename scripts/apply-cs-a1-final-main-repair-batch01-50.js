#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILES = [path.join(ROOT, 'data/cs/a1.js'), path.join(ROOT, 'www/data/cs/a1.js')];
const VALIDATED = path.join(ROOT, 'reports/temp/cs-a1-final-audit-on-main-validated.json');

const BLOCK01_IDS = [
  'MAIN-A1-00066', 'MAIN-A1-00071', 'MAIN-A1-00072', 'MAIN-A1-00073', 'MAIN-A1-00074',
  'MAIN-A1-00075', 'MAIN-A1-00076', 'MAIN-A1-00077', 'MAIN-A1-00078', 'MAIN-A1-00079',
  'MAIN-A1-00081', 'MAIN-A1-00082', 'MAIN-A1-00085', 'MAIN-A1-00086', 'MAIN-A1-00087',
  'MAIN-A1-00090', 'MAIN-A1-00094', 'MAIN-A1-00095', 'MAIN-A1-00096', 'MAIN-A1-00097',
  'MAIN-A1-00098', 'MAIN-A1-00100', 'MAIN-A1-00101', 'MAIN-A1-00102', 'MAIN-A1-00103',
  'MAIN-A1-00104', 'MAIN-A1-00107', 'MAIN-A1-00108', 'MAIN-A1-00113', 'MAIN-A1-00114',
  'MAIN-A1-00115', 'MAIN-A1-00116', 'MAIN-A1-00117', 'MAIN-A1-00118', 'MAIN-A1-00119',
  'MAIN-A1-00120', 'MAIN-A1-00121', 'MAIN-A1-00122', 'MAIN-A1-00123', 'MAIN-A1-00124',
  'MAIN-A1-00125', 'MAIN-A1-00126', 'MAIN-A1-00127', 'MAIN-A1-00128', 'MAIN-A1-00129',
  'MAIN-A1-00130', 'MAIN-A1-00131', 'MAIN-A1-00132', 'MAIN-A1-00133', 'MAIN-A1-00134',
];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(filePath, `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`, 'utf8');
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `a1-${entry.de}-${index}`;
  return `a1-${index}`;
}

function resolveField(field) {
  if (field === 'csMain' || field === 'csText') return 'lv';
  return field;
}

function parsePath(fieldPath) {
  const parts = [];
  resolveField(fieldPath).replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return '';
  });
  return parts;
}

function getRawValue(entry, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = entry;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur == null ? null : cur;
}

function resolveTipField(entry, fieldPath) {
  if (!fieldPath.includes('study.tip.text')) return fieldPath;
  const tip = entry.study?.tip;
  if (Array.isArray(tip)) return fieldPath.replace('study.tip.text', 'study.tip[0]');
  return fieldPath;
}

function setRawValue(entry, fieldPath, value) {
  const resolved = resolveTipField(entry, fieldPath);
  const parts = parsePath(resolved);
  let cur = entry;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur == null) return false;
    if (cur[parts[i]] == null) cur[parts[i]] = typeof parts[i + 1] === 'number' ? [] : {};
    cur = cur[parts[i]];
  }
  if (cur == null) return false;
  cur[parts[parts.length - 1]] = value;
  return true;
}

function getRawValueResolved(entry, fieldPath) {
  return getRawValue(entry, resolveTipField(entry, fieldPath));
}

function serializeValue(value) {
  if (value == null) return null;
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function main() {
  const validated = JSON.parse(fs.readFileSync(VALIDATED, 'utf8'));
  const findings = validated.findings.filter((f) => BLOCK01_IDS.includes(f.findingId));
  const words = loadWords(FILES[0]);
  const results = [];
  for (const f of findings) {
    const idx = words.findIndex((e, i) => entryId(e, i) === f.cardId);
    const pec = f.proposedCs ?? f.auditProposedCs;
    const pirmd = f.currentCs ?? f.auditCurrentCs;
    if (idx < 0) {
      results.push({ findingId: f.findingId, status: 'CARD_NOT_FOUND' });
      continue;
    }
    const before = getRawValueResolved(words[idx], f.field);
    let status;
    if (serializeValue(before) === serializeValue(pec)) status = 'ALREADY_CORRECT';
    else if (serializeValue(before) === serializeValue(pirmd)) {
      setRawValue(words[idx], f.field, typeof pec === 'object' ? JSON.parse(JSON.stringify(pec)) : pec);
      status = 'APPLIED';
    } else status = 'CURRENT_VALUE_MISMATCH';
    results.push({ findingId: f.findingId, cardId: f.cardId, field: f.field, status });
  }
  for (const fp of FILES) writeWords(fp, words);
  const summary = {
    requested: 50,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
  };
  console.log(JSON.stringify(summary, null, 2));
  const report = [
    '# CS–DE A1 Final Repair — Block 01 (first 50)',
    '',
    `- requested: **50**`,
    `- APPLIED: **${summary.applied}**`,
    `- ALREADY_CORRECT: **${summary.alreadyCorrect}**`,
    `- CURRENT_VALUE_MISMATCH: **${summary.mismatch}**`,
    '',
    '_Applied from OWNER-approved CONFIRMED_REAL validated JSON during main integration._',
  ].join('\n');
  fs.writeFileSync(path.join(ROOT, 'reports/cs-a1-final-repair-block-01.md'), report);
  if (summary.mismatch > 0) process.exit(1);
}

if (require.main === module) main();

module.exports = { BLOCK01_IDS };
