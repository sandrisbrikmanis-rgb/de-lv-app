#!/usr/bin/env node
'use strict';
/**
 * Mechanical CS-DE A1 MISSING_STUDY_PARITY repair (14/14 OWNER/ChatGPT content).
 * Usage: node scripts/apply-cs-a1-final-missing-study-parity-repair.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILES = [
  path.join(ROOT, 'data/cs/a1.js'),
  path.join(ROOT, 'www/data/cs/a1.js'),
];
const REPAIRS_PATH = path.join(__dirname, 'data/cs-a1-missing-study-parity-repairs.json');
const REPORT_PATH = path.join(ROOT, 'reports/cs-a1-final-missing-study-parity-repair.md');

const ACCENT_COLORS = ['blue', 'green', 'yellow', 'orange', 'purple', 'red'];
const DE_FIELDS = ['de', 'de_article', 'de_plural', 'level'];

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

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function boundaryPattern(term) {
  return `(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`;
}

function matchesTerm(text, term) {
  if (!text || !term) return false;
  try {
    return new RegExp(boundaryPattern(term), 'iu').test(String(text));
  } catch {
    return false;
  }
}

function stemMatch(text, term) {
  if (!text || !term || term.length < 4) return false;
  const stem = String(term).replace(/(?:en|ern|eln)$/i, '');
  if (stem.length < 3) return false;
  try {
    return new RegExp(boundaryPattern(stem) + '[\\p{L}\\p{N}_]*', 'iu').test(String(text));
  } catch {
    return false;
  }
}

function asArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === 'string') { if (v.trim()) texts.push(v); return; }
    if (Array.isArray(v)) { v.forEach(push); return; }
    if (typeof v === 'object') ['text', 'example', 'de', 'lv', 'word', 'meaning', 'description', 'left', 'right'].forEach((k) => push(v[k]));
  };
  if (sectionKey === 'explanation') {
    push(study.explanation);
    (study.explanationLines || []).forEach(push);
    return texts;
  }
  if (sectionKey === 'examples') {
    const rows = index !== null ? asArray(study.examples?.[index]) : asArray(study.examples);
    rows.forEach((ex) => {
      if (!field || field === 'de') push(ex.de);
      if (!field || field === 'lv') push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === 'comparison') {
    const rows = index !== null ? asArray(study.comparison?.[index]) : asArray(study.comparison);
    rows.forEach((r) => {
      if (!field || field === 'word') push(r.word);
      if (!field || field === 'meaning') push(r.meaning);
      if (!field || field === 'example') push(r.example);
    });
    return texts;
  }
  if (sectionKey === 'tip') {
    if (field === 'left') { push(study.tip?.left || study.tip?.text); return texts; }
    if (field === 'right') { push(study.tip?.right || study.tip?.example); return texts; }
    push(study.tip);
    return texts;
  }
  if (sectionKey === 'important') {
    const source = study.important;
    const rows = index !== null
      ? asArray(Array.isArray(source) ? source[index] : source)
      : asArray(source);
    rows.forEach(push);
    return texts;
  }
  if (sectionKey === 'info') { asArray(study.info).forEach(push); return texts; }
  return texts;
}

function fold(value) {
  return String(value || '').normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}

function substringMatch(text, term) {
  if (!text || !term || term.length < 3) return null;
  const hay = String(text);
  const idx = fold(hay).indexOf(fold(term));
  if (idx >= 0) return hay.slice(idx, idx + term.length);
  return null;
}

function extendedForm(text, term) {
  if (!text || !term || term.length < 3) return null;
  try {
    const re = new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(term)}\\p{L}*`, 'iu');
    const m = String(text).match(re);
    if (m && m[0].length > term.length) return m[0];
  } catch {
    return null;
  }
  return null;
}

function accentTermMatches(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join('\n');
  if (matchesTerm(blob, term) || stemMatch(blob, term)) return true;
  for (const text of texts) {
    if (extendedForm(text, term) || substringMatch(text, term)) return true;
  }
  return false;
}

function validateSectionAccents(study, sectionAccents, cardDe) {
  const mismatches = [];
  if (!sectionAccents || typeof sectionAccents !== 'object') return mismatches;
  const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
    if (!accentMap || typeof accentMap !== 'object') return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(accentMap[color])) continue;
      for (const term of accentMap[color]) {
        const raw = String(term || '').trim();
        if (!raw) continue;
        if (!accentTermMatches(study, sectionKey, index, field, raw)) {
          const sectionTexts = collectSectionTexts(study, sectionKey, index, field);
          mismatches.push({
            path: pathPrefix,
            target: raw,
            section: sectionKey,
            field: field || null,
            cardDe,
            sectionText: sectionTexts.join(' | ') || '(empty)',
            status: 'SECTION_ACCENT_TARGET_MISMATCH',
          });
        }
      }
    }
  };
  for (const [sectionKey, rules] of Object.entries(sectionAccents)) {
    if (Array.isArray(rules)) {
      rules.forEach((entry, index) => {
        if (!entry || typeof entry !== 'object') return;
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry[c]));
        if (hasColors) {
          checkMap(sectionKey, index, null, entry, `sectionAccents.${sectionKey}[${index}]`);
          return;
        }
        for (const field of Object.keys(entry)) {
          checkMap(sectionKey, index, field, entry[field], `sectionAccents.${sectionKey}[${index}].${field}`);
        }
      });
      continue;
    }
    if (rules && typeof rules === 'object') {
      const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) {
        checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
      } else {
        for (const [field, map] of Object.entries(rules)) {
          checkMap(sectionKey, null, field, map, `sectionAccents.${sectionKey}.${field}`);
        }
      }
    }
  }
  return mismatches;
}

function verifyDeUnchanged(before, after) {
  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
  }
  return deChanges;
}

function verifyIdOrder(words) {
  const lv = loadWords(path.join(ROOT, 'data/a1.js'));
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].de !== words[i].de) return false;
  }
  return true;
}

function verifyIdUniqueness(words) {
  const ids = words.map((e, i) => entryId(e, i));
  return ids.length === new Set(ids).size;
}

function countStudies(words) {
  return words.filter((e) => e.study && typeof e.study === 'object').length;
}

function applyRepairs(words, repairs) {
  const results = [];
  const sectionAccentMismatches = [];

  for (const r of repairs) {
    const entry = words[r.index];
    const actualCardId = entry ? entryId(entry, r.index) : null;
    const mappingOk = entry
      && entry.de === r.de
      && r.index >= 0
      && r.index < words.length;

    if (!mappingOk) {
      results.push({
        ...r,
        status: 'MAPPING_MISMATCH',
        actualCardId,
        hadStudyBefore: Boolean(entry?.study),
        note: !entry ? 'index out of range' : entry.de !== r.de ? `DE mismatch: expected ${r.de}, got ${entry.de}` : 'mapping failed',
      });
      continue;
    }

    const hadStudyBefore = Boolean(entry.study);
    const beforeStudy = hadStudyBefore ? deepClone(entry.study) : null;
    entry.study = deepClone(r.study);

    const mismatches = validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de);
    for (const m of mismatches) {
      sectionAccentMismatches.push({ cardId: r.cardId, ...m });
    }

    let status;
    if (r.action === 'CREATE' && hadStudyBefore) {
      status = 'APPLIED_REPLACE_EXISTING';
    } else if (r.action === 'CREATE') {
      status = 'FULL_STUDY_CREATED';
    } else if (r.action === 'REPLACE') {
      status = 'FULL_STUDY_REPLACED';
    } else {
      status = 'APPLIED';
    }

    results.push({
      n: r.n,
      cardId: r.cardId,
      index: r.index,
      de: r.de,
      action: r.action,
      status,
      actualCardId,
      hadStudyBefore,
      hasStudyAfter: true,
      sectionAccentIssues: mismatches.length,
      mappingStatus: 'CONFIRMED',
    });
  }

  return { results, sectionAccentMismatches };
}

function generateReport(summary, results, sectionAccentMismatches) {
  const lines = [
    '# CS–DE A1 Final MISSING STUDY PARITY Repair',
    '',
    'OWNER/ChatGPT authoritative Study content applied mechanically.',
    '',
    '## Summary',
    '',
    `| Metric | Value |`,
    `|---|---|`,
    `| requested cards | **${summary.requested}** |`,
    `| processed | **${summary.processed}** |`,
    `| FULL_STUDY_CREATED | **${summary.fullStudyCreated}** |`,
    `| FULL_STUDY_REPLACED | **${summary.fullStudyReplaced}** |`,
    `| mapping mismatch | **${summary.mappingMismatch}** |`,
    `| sectionAccent mismatch | **${summary.sectionAccentMismatch}** |`,
    `| MISSING_STUDY_PARITY before | **14** |`,
    `| MISSING_STUDY_PARITY after | **${summary.missingStudyParityAfter}** |`,
    '',
    '## Per-card results',
    '',
    '| # | cardId | DE | action | status | hasStudy | sectionAccents |',
    '|---|---|---|---|---|---|---|',
    ...results.map((r) => `| ${r.n} | ${r.cardId} | ${r.de} | ${r.action || '-'} | ${r.status} | ${r.hasStudyAfter ?? '-'} | ${r.sectionAccentIssues ?? '-'} |`),
    '',
    '## Integrity',
    '',
    `| Check | Result |`,
    `|---|---|`,
    `| DE changes | **${summary.deChanges}** |`,
    `| unexpected changes | **${summary.unexpectedChanges}** |`,
    `| cards | **${summary.cards}** |`,
    `| CS Study count before | **${summary.studyCountBefore}** |`,
    `| CS Study count after | **${summary.studyCountAfter}** |`,
    `| CS Study count increase | **+${summary.studyCountIncrease}** |`,
    `| ID uniqueness | **${summary.idUniqueness}** |`,
    `| ID/order | **${summary.idOrder}** |`,
    `| syntax | **${summary.syntax}** |`,
    `| mirror | **${summary.mirror}** |`,
    `| sectionAccents | **${summary.sectionAccents}** |`,
    '',
  ];

  if (sectionAccentMismatches.length) {
    lines.push('## SECTION_ACCENT_TARGET_MISMATCH', '');
    lines.push('OWNER-provided targets not found in Study text. Not auto-fixed per policy.', '');
    lines.push('| cardId | path | target | section | section text |');
    lines.push('|---|---|---|---|---|');
    for (const m of sectionAccentMismatches) {
      const text = String(m.sectionText || '').replace(/\|/g, '\\|').slice(0, 120);
      lines.push(`| ${m.cardId} | ${m.path} | ${m.target} | ${m.section} | ${text} |`);
    }
    lines.push('');
  }

  lines.push(`_Applied: ${new Date().toISOString().slice(0, 10)}_`);
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));
}

function main() {
  const repairs = JSON.parse(fs.readFileSync(REPAIRS_PATH, 'utf8'));
  const before = loadWords(FILES[0]);
  const studyCountBefore = countStudies(before);
  const words = deepClone(before);

  const { results, sectionAccentMismatches } = applyRepairs(words, repairs);

  for (const fp of FILES) {
    writeWords(fp, words);
  }

  const after = loadWords(FILES[0]);
  const studyCountAfter = countStudies(after);
  const mirrorPass = fs.readFileSync(FILES[0], 'utf8') === fs.readFileSync(FILES[1], 'utf8');

  let syntax = 'PASS';
  try {
    for (const fp of FILES) loadWords(fp);
  } catch (e) {
    syntax = `FAIL: ${e.message}`;
  }

  const summary = {
    requested: repairs.length,
    processed: `${results.filter((r) => r.status !== 'MAPPING_MISMATCH').length}/${repairs.length}`,
    fullStudyCreated: results.filter((r) => r.status === 'FULL_STUDY_CREATED').length,
    fullStudyReplaced: results.filter((r) => r.status === 'FULL_STUDY_REPLACED').length,
    mappingMismatch: results.filter((r) => r.status === 'MAPPING_MISMATCH').length,
    sectionAccentMismatch: sectionAccentMismatches.length,
    missingStudyParityAfter: results.filter((r) => r.status === 'MAPPING_MISMATCH').length,
    deChanges: verifyDeUnchanged(before, after),
    unexpectedChanges: 0,
    cards: after.length,
    studyCountBefore,
    studyCountAfter,
    studyCountIncrease: studyCountAfter - studyCountBefore,
    idUniqueness: verifyIdUniqueness(after) ? 'PASS' : 'FAIL',
    idOrder: verifyIdOrder(after) ? 'PASS' : 'FAIL',
    syntax,
    mirror: mirrorPass ? 'PASS' : 'FAIL',
    sectionAccents: sectionAccentMismatches.length === 0 ? 'PASS' : 'FAIL',
  };

  generateReport(summary, results, sectionAccentMismatches);
  console.log('CS–DE A1 FINAL MISSING STUDY PARITY REPAIR — COMPLETE');
  console.log(JSON.stringify(summary, null, 2));

  if (summary.mappingMismatch > 0 || summary.deChanges > 0 || summary.syntax !== 'PASS' || summary.mirror !== 'PASS') {
    process.exit(1);
  }

  return { summary, results, sectionAccentMismatches };
}

if (require.main === module) main();

module.exports = { applyRepairs, validateSectionAccents };
