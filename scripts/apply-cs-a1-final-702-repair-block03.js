#!/usr/bin/env node
'use strict';
/**
 * CS-DE A1 FINAL 702 audit repair — Block 03 (findings 101–125).
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const FILES = [path.join(ROOT, 'data/cs/a1.js'), path.join(ROOT, 'www/data/cs/a1.js')];

const REPAIRS = [
  { findingId: 'FINAL702-A1-00183', cardId: 'a1-was', field: 'study.examples[3].lv', pirmd: 'Co chceš pít', pec: 'Co chceš pít?' },
  { findingId: 'FINAL702-A1-00184', cardId: 'a1-was', field: 'study.examples[6].lv', pirmd: 'Co jsi říkal', pec: 'Co jsi říkal?' },
  { findingId: 'FINAL702-A1-00185', cardId: 'a1-was', field: 'study.sectionAccents.important[0].blue[0]', pirmd: 'Byl', pec: 'was' },
  { findingId: 'FINAL702-A1-00186', cardId: 'a1-wenn', field: 'study.sectionAccents.comparison[1].meaning.purple[0]', pirmd: 'Nebo', pec: 'Zda' },
  { findingId: 'FINAL702-A1-00187', cardId: 'a1-wenn', field: 'study.sectionAccents.comparison[2].meaning.purple[0]', pirmd: 'Když', pec: 'Kdy' },
  { findingId: 'FINAL702-A1-00188', cardId: 'a1-wenn', field: 'study.important[1]', pirmd: 'Kdy přijedeš? je tu otázka. Wenn du kommst... je stav/napětí.', pec: '„Kdy přijedeš?“ je otázka. „Wenn du kommst…“ vyjadřuje podmínku.' },
  { findingId: 'FINAL702-A1-00189', cardId: 'a1-wer', field: 'lv', pirmd: 'Kdo • Kdo', pec: 'Kdo' },
  { findingId: 'FINAL702-A1-00190', cardId: 'a1-wer', field: 'study.tip[0]', pirmd: 'Wer se ptá na osoby (kdo/kdo) - na věci a události, používáme was.', pec: 'Wer se ptá na osoby (kdo) – na věci a události používáme was.' },
  { findingId: 'FINAL702-A1-00191', cardId: 'a1-wer', field: 'study.tip[1]', pirmd: 'Chcete-li se zeptat na volbu mezi několika lidmi, použijte wer von... (který z...).', pec: 'Chcete-li se zeptat, kdo z několika lidí, použijte wer von... (kdo z...).' },
  { findingId: 'FINAL702-A1-00192', cardId: 'a1-wer', field: 'study.important[1]', pirmd: 'Věci a události jsou žádány s was, ne wer.', pec: 'Na věci a události se ptáme pomocí was, ne wer.' },
  { findingId: 'FINAL702-A1-00193', cardId: 'a1-wer', field: 'study.sectionAccents.important[0].blue[0]', pirmd: 'Ptali', pec: 'wer' },
  { findingId: 'FINAL702-A1-00194', cardId: 'a1-werden', field: 'study.examples[3].lv', pirmd: 'Jsem unavený', pec: 'Jsem unavený.' },
  { findingId: 'FINAL702-A1-00195', cardId: 'a1-werden', field: 'study.sectionAccents.comparison[2].meaning.purple[0]', pirmd: 'Pobyt', pec: 'Zůstat' },
  { findingId: 'FINAL702-A1-00196', cardId: 'a1-wetter', field: 'lv', pirmd: 'Čas (počasí)', pec: 'Počasí' },
  { findingId: 'FINAL702-A1-00197', cardId: 'a1-wetter', field: 'study.sectionAccents.examples[0].lv.purple[0]', pirmd: 'Kolik', pec: 'Jaké' },
  { findingId: 'FINAL702-A1-00198', cardId: 'a1-wetter', field: 'study.sectionAccents.examples[5].lv.green[0]', pirmd: 'Zítra', pec: 'lepší' },
  { findingId: 'FINAL702-A1-00199', cardId: 'a1-wie', field: 'study.examples[1].lv', pirmd: 'Jak se jmenuješ', pec: 'Jak se jmenuješ?' },
  { findingId: 'FINAL702-A1-00200', cardId: 'a1-wie', field: 'study.examples[2].lv', pirmd: 'Kolik to stojí', pec: 'Kolik to stojí?' },
  { findingId: 'FINAL702-A1-00201', cardId: 'a1-wie', field: 'study.sectionAccents.examples[5].lv.purple[0]', pirmd: 'stejně', pec: 'jako' },
  { findingId: 'FINAL702-A1-00203', cardId: 'a1-zu', field: 'study.sectionAccents.comparison[0].meaning.purple', pirmd: ['too', 'too', 'too', 'infinitiv'], pec: ['K', 'do', 'příliš', 'infinitiv'] },
  { findingId: 'FINAL702-A1-00205', cardId: 'a1-fernsehen-study', field: 'study.examples[5].lv', pirmd: 'Co se zobrazuje v televizi?', pec: 'Co dávají v televizi?' },
  { findingId: 'FINAL702-A1-00210', cardId: 'a1-urlaub', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: pouze jednotné číslo. Dovolená z práce – vždy v jednotném čísle.', pec: 'Hlavní myšlenka: v běžném významu dovolené se používá obvykle jednotné číslo. Jde o dovolenou z práce.' },
  { findingId: 'FINAL702-A1-00211', cardId: 'a1-urlaub', field: 'study.explanation[2]', pirmd: 'Často charakterizován: pouze jednotné číslo.', pec: 'V běžném významu dovolené se často používá v jednotném čísle.' },
  { findingId: 'FINAL702-A1-00212', cardId: 'a1-urlaub', field: 'study.explanation[3]', pirmd: 'Der Urlaub je pouze v jednotném čísle – dovolená z práce (im Urlaub).', pec: 'Der Urlaub se v běžném významu dovolené používá obvykle v jednotném čísle – dovolená z práce (im Urlaub).' },
  { findingId: 'FINAL702-A1-00213', cardId: 'a1-urlaub', field: 'study.important[0]', pirmd: 'Nesprávně: die Ferie, der Urlabe (na úrovni A1).', pec: 'Nesprávně: die Ferie, der Urlaube (na úrovni A1).' },
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

function parsePath(fieldPath) {
  const parts = [];
  fieldPath.replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
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

function setRawValue(entry, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = entry;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur == null) return false;
    if (cur[parts[i]] == null) cur[parts[i]] = typeof parts[i + 1] === 'number' ? [] : {};
    cur = cur[parts[i]];
  }
  if (cur == null) return false;
  cur[parts[parts.length - 1]] = Array.isArray(value) ? [...value] : value;
  return true;
}

function serializeValue(value) {
  if (value == null) return null;
  if (Array.isArray(value) || typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function accentTermMatches(text, term) {
  if (!text || !term) return false;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, 'iu').test(text);
  } catch {
    return text.includes(term);
  }
}

function getSectionText(study, section, index = 0) {
  if (section === 'explanation') {
    const e = study.explanation;
    return Array.isArray(e) ? e.join(' ') : String(e || '');
  }
  if (section === 'tip') {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip.join(' ');
    if (tip && typeof tip === 'object') return [tip.text, tip.example].filter(Boolean).join(' ');
    return String(tip || '');
  }
  if (section === 'important') {
    const imp = study.important;
    if (Array.isArray(imp)) return imp.map((t) => (typeof t === 'object' ? [t.text, t.example].filter(Boolean).join(' ') : t)).join(' ');
    return String(imp || '');
  }
  if (section === 'examples' && Array.isArray(study.examples)) {
    const ex = study.examples[index];
    return ex ? [ex.de, ex.lv].filter(Boolean).join(' ') : '';
  }
  if (section === 'comparison' && Array.isArray(study.comparison)) {
    const c = study.comparison[index];
    return c ? [c.word, c.meaning, c.example].filter(Boolean).join(' ') : '';
  }
  return '';
}

function validateChangedTargets(words, repairs) {
  const issues = [];
  for (const r of repairs) {
    if (!r.field.includes('sectionAccents') || r.status !== 'APPLIED' && r.status !== 'ALREADY_MATCHED') continue;
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    if (idx < 0) continue;
    const study = words[idx].study;
    if (!study) continue;
    const terms = Array.isArray(r.pec) ? r.pec : [r.pec];
    for (const term of terms) {
      if (!term) continue;
      let found = false;
      for (const section of ['explanation', 'tip', 'important', 'examples', 'comparison']) {
        if (section === 'examples') {
          for (let i = 0; i < (study.examples?.length || 0); i++) {
            if (accentTermMatches(getSectionText(study, section, i), term)) { found = true; break; }
          }
        } else if (section === 'comparison') {
          for (let i = 0; i < (study.comparison?.length || 0); i++) {
            if (accentTermMatches(getSectionText(study, section, i), term)) { found = true; break; }
          }
        } else if (accentTermMatches(getSectionText(study, section), term)) {
          found = true;
        }
        if (found) break;
      }
      if (!found) issues.push({ cardId: r.cardId, field: r.field, term });
    }
  }
  return issues;
}

function verifyTechnical(words) {
  const csPath = path.join(ROOT, 'data/cs/a1.js');
  const wwwPath = path.join(ROOT, 'www/data/cs/a1.js');
  let syntax = 'PASS';
  try {
    execSync('node --check data/cs/a1.js', { cwd: ROOT, stdio: 'pipe' });
    if (words.length !== 702) syntax = 'FAIL';
  } catch {
    syntax = 'FAIL';
  }
  return {
    cards: words.length,
    studyCount: words.filter((e) => e.study).length,
    mirror: fs.readFileSync(csPath).equals(fs.readFileSync(wwwPath)) ? 'PASS' : 'FAIL',
    syntax,
  };
}

function main() {
  const words = loadWords(FILES[0]);
  const results = [];

  for (const r of REPAIRS) {
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    if (idx < 0) {
      results.push({ ...r, status: 'CARD_NOT_FOUND' });
      continue;
    }
    const before = getRawValue(words[idx], r.field);
    let status;
    if (serializeValue(before) === serializeValue(r.pec)) {
      status = 'ALREADY_MATCHED';
    } else if (serializeValue(before) === serializeValue(r.pirmd)) {
      setRawValue(words[idx], r.field, r.pec);
      status = 'APPLIED';
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
      results.push({ ...r, status, actual: serializeValue(before) });
      continue;
    }
    results.push({ ...r, status });
  }

  for (const fp of FILES) writeWords(fp, words);

  const accentIssues = validateChangedTargets(words, results);
  const technical = verifyTechnical(words);

  const summary = {
    requested: REPAIRS.length,
    processed: REPAIRS.length,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyMatched: results.filter((r) => r.status === 'ALREADY_MATCHED').length,
    currentValueMismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    sectionAccentsValidated: results.filter((r) => r.field.includes('sectionAccents')).length,
    sectionAccentsIssues: accentIssues.length,
    technical,
  };

  console.log(JSON.stringify(summary, null, 2));
  if (accentIssues.length) console.log('SECTIONACCENTS_ISSUES:', JSON.stringify(accentIssues, null, 2));

  const report = [
    '# CS–DE A1 Final 702 Repair — Block 03',
    '',
    'Source: FINAL 702/702 audit on main (findings 101–125 / last 25)',
    '',
    '| Metric | Count |',
    '|---|---|',
    `| requested | ${summary.requested} |`,
    `| processed | ${summary.processed} |`,
    `| APPLIED | ${summary.applied} |`,
    `| ALREADY_MATCHED | ${summary.alreadyMatched} |`,
    `| CURRENT_VALUE_MISMATCH | ${summary.currentValueMismatch} |`,
  '',
    '## sectionAccents validation (changed targets only)',
    '',
    `| Metric | Value |`,
    `|---|---|`,
    `| cards with changed sectionAccents | ${summary.sectionAccentsValidated} |`,
    `| post-apply target issues | ${summary.sectionAccentsIssues} |`,
    '',
    '## Technical',
    '',
    `| Check | Result |`,
    `|---|---|`,
    `| cards | ${technical.cards} |`,
    `| Study count | ${technical.studyCount} |`,
    `| syntax | ${technical.syntax} |`,
    `| mirror | ${technical.mirror} |`,
    `| DE changes | 0 |`,
    '',
    '## Results',
    '',
    ...results.map((r) => `- **${r.findingId}** \`${r.cardId}\` \`${r.field}\` → ${r.status}${r.actual ? ` (actual: ${r.actual})` : ''}`),
  ];

  if (accentIssues.length) {
    report.push('', '## sectionAccents post-check issues', '', ...accentIssues.map((i) => `- \`${i.cardId}\` term \`${i.term}\` not found in section text`));
  }

  fs.writeFileSync(path.join(ROOT, 'reports/cs-a1-final-702-repair-block-03.md'), report.join('\n'));

  if (summary.currentValueMismatch > 0) process.exit(1);
}

if (require.main === module) main();

module.exports = { REPAIRS };
