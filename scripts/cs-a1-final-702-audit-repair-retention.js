#!/usr/bin/env node
'use strict';
/**
 * Repair retention reconciliation for CS-DE A1 final 702 audit on main.
 * Checks 160/160 CONFIRMED_REAL + 14/14 Study parity + 10/10 sectionAccents micro-repair.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { ROOT, final702AuditOnMainPaths } = require('./lib/cs-audit-helpers');

const SUPERSEDED = new Set(['MAIN-A1-00098', 'MAIN-A1-00102']);

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, 'data/cs/a1.js'), 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
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

function getFieldValue(entry, fieldPath) {
  const field = resolveField(fieldPath);
  if (field === 'lv') return entry.lv;
  if (!field.startsWith('study.')) return entry[field];
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
  // Block 01 applied tip to study.tip[0] when audit field was study.tip.text
  if (cur == null && field === 'study.tip.text' && Array.isArray(entry.study?.tip)) {
    return entry.study.tip[0] ?? null;
  }
  return cur;
}

function serialize(v) {
  if (v == null) return null;
  if (typeof v === 'object') return JSON.stringify(v);
  return String(v);
}

function valuesMatch(a, b) {
  return serialize(a) === serialize(b);
}

function loadConfirmedRealRepairs() {
  const repairs = [];
  const b1 = require('./apply-cs-a1-final-main-repair-batch01-50');
  const validated = JSON.parse(fs.readFileSync(
    path.join(ROOT, 'reports/temp/cs-a1-final-audit-on-main-validated.json'), 'utf8'
  ));
  const block01Findings = validated.findings.filter((f) => b1.BLOCK01_IDS.includes(f.findingId));
  for (const f of block01Findings) {
    repairs.push({
      findingId: f.findingId,
      cardId: f.cardId,
      field: f.field,
      pec: f.proposedCs ?? f.auditProposedCs,
      block: '01',
    });
  }
  for (const [name, mod] of [
    ['02', require('./apply-cs-a1-final-main-repair-batch51-100')],
    ['03', require('./apply-cs-a1-final-main-repair-batch101-150')],
    ['04', require('./apply-cs-a1-final-main-repair-batch04-final10')],
  ]) {
    for (const r of mod.REPAIRS) {
      repairs.push({ findingId: r.findingId, cardId: r.cardId, field: r.field, pec: r.pec, block: name });
    }
  }
  return repairs;
}

const PARITY_STUDY_IDS = [
  'a1-besuch', 'a1-besuchen', 'a1-bitte', 'a1-bitte-study', 'a1-ein', 'a1-es',
  'a1-fussball-study', 'a1-ganz-study', 'a1-gefallen-study', 'a1-geschichte-study',
  'a1-geschwister-study', 'a1-grosseltern-study', 'a1-hand-study', 'a1-huebsch',
];

function main() {
  const paths = final702AuditOnMainPaths('a1');
  const cs = loadWords();
  const byCard = new Map();
  for (let i = 0; i < cs.length; i++) byCard.set(entryId(cs[i], i), i);

  const repairs = loadConfirmedRealRepairs();
  let retained = 0;
  let superseded = 0;
  let missing = 0;
  let conflicting = 0;
  const details = [];

  for (const r of repairs) {
    if (SUPERSEDED.has(r.findingId)) {
      superseded += 1;
      details.push({ ...r, status: 'superseded_by_newer_owner_repair' });
      continue;
    }
    const idx = byCard.get(r.cardId);
    if (idx === undefined) {
      missing += 1;
      details.push({ ...r, status: 'card_not_found' });
      continue;
    }
    const actual = getFieldValue(cs[idx], r.field);
    if (valuesMatch(actual, r.pec)) {
      retained += 1;
      details.push({ ...r, status: 'retained' });
    } else {
      conflicting += 1;
      details.push({ ...r, status: 'conflicting', actual: serialize(actual) });
    }
  }

  const parityResults = PARITY_STUDY_IDS.map((studyId) => {
    const entry = cs.find((e) => e.study?.id === studyId);
    return { studyId, hasStudy: Boolean(entry?.study) };
  });
  const parityMissing = parityResults.filter((p) => !p.hasStudy);

  const { validateSectionAccents } = require('./apply-cs-a1-final-missing-study-parity-repair');
  let sectionAccentIssues = 0;
  for (const studyId of PARITY_STUDY_IDS) {
    const entry = cs.find((e) => e.study?.id === studyId);
    if (entry?.study) {
      sectionAccentIssues += validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de).length;
    }
  }

  const payload = {
    auditedAt: new Date().toISOString(),
    confirmedReal: {
      expected: 160,
      retained,
      superseded_by_newer_owner_repair: superseded,
      missing,
      conflicting,
      sum: retained + superseded + missing + conflicting,
    },
    studyParity: {
      expected: 14,
      hasStudy: parityResults.filter((p) => p.hasStudy).length,
      missing: parityMissing.length,
      cardIds: parityMissing.map((p) => p.studyId),
    },
    sectionAccentsMicroRepair: {
      expectedResolved: 10,
      remainingIssues: sectionAccentIssues,
    },
    ownerOverride: {
      cardId: 'a1-in',
      field: 'study.sectionAccents.examples[0].lv.purple[0]',
      value: cs.find((e) => e.study?.id === 'a1-in')?.study?.sectionAccents?.examples?.[0]?.lv?.purple?.[0],
      status: 'OWNER_OVERRIDE_FALSE_POSITIVE',
    },
    details,
  };

  fs.mkdirSync(path.dirname(paths.repairRetentionJson), { recursive: true });
  fs.writeFileSync(paths.repairRetentionJson, JSON.stringify(payload, null, 2));
  console.log(JSON.stringify({
    confirmedReal: `${retained + superseded}/160 retained+superseded`,
    missing,
    conflicting,
    studyParity: `${payload.studyParity.hasStudy}/14`,
    sectionAccentsRemaining: sectionAccentIssues,
  }, null, 2));
}

main();
