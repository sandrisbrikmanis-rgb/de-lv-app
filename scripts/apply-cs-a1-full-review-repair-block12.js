#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILES = [
  path.join(ROOT, 'data/cs/a1.js'),
  path.join(ROOT, 'www/data/cs/a1.js'),
];

const REPAIRS = [
  { n: 1, findingId: 'FULL-A1-00553', cardId: 'a1-zum', field: 'study.comparison[2].meaning', pirmd: 'Do / v / také', pec: 'K / ke • doma • příliš' },
  { n: 2, findingId: 'FULL-A1-00555', cardId: 'a1-zum', field: 'study.comparison[4].meaning', pirmd: 'Na (umístění)', pec: 'U / při (místo nebo přítomnost)' },
  { n: 3, findingId: 'FULL-A1-00556', cardId: 'a1-zum', field: 'study.explanation[2]', pirmd: 'Používá se s podstatnými jmény mužského a středního rodu při označení směru nebo účelu.', pec: 'Používá se s podstatnými jmény mužského a středního rodu v dativu, když označuje směr nebo účel.' },
  { n: 4, findingId: 'FULL-A1-00557', cardId: 'a1-zum', field: 'study.important[0]', pirmd: 'Zum = zu dem, pouze s podstatným jménem mužského nebo bezrodového pro koho? ve skloňování.', pec: 'Zum = zu dem, používá se s podstatnými jmény mužského a středního rodu v dativu.' },
  { n: 5, findingId: 'FULL-A1-00558', cardId: 'a1-zum', field: 'study.tip[0]', pirmd: 'Pamatujte: zu + dem → zum (pro koho?).', pec: 'Pamatujte: zu + dem → zum (ke komu nebo čemu?).' },
  { n: 6, findingId: 'FULL-A1-00559', cardId: 'a1-fernsehen', field: 'study.explanation', pirmd: 'Hlavní myšlenka: fernsehen je rozdělené sloveso — ich sehe fern, du siehst fern. To znamená sledování televize. Nezaměňovat s podstatným jménem das Fernsehen (televize jako médium).', pec: 'Hlavní myšlenka: fernsehen je odlučitelné sloveso — ich sehe fern, du siehst fern. Znamená dívat se na televizi. Nezaměňovat s podstatným jménem das Fernsehen (televize jako médium).' },
  { n: 7, findingId: 'FULL-A1-00561', cardId: 'a1-fernsehen-study', field: 'study.explanation[1]', pirmd: 'Das Fernsehen v podstatě znamená: dívat se na vysílání.', pec: 'Das Fernsehen označuje televizi jako médium nebo televizní vysílání.' },
  { n: 8, findingId: 'FULL-A1-00562', cardId: 'a1-fernsehen-study', field: 'study.explanation[2]', pirmd: 'Často popisuje: akce.', pec: 'Označuje médium nebo vysílání, nikoli činnost.' },
  { n: 9, findingId: 'FULL-A1-00564', cardId: 'a1-appetit', field: 'study.translation', pirmd: 'Chuť', pec: 'Chuť k jídlu' },
  { n: 10, findingId: 'FULL-A1-00565', cardId: 'a1-appetit', field: 'study.examples[0].lv', pirmd: 'Chuť k jídlu!', pec: 'Dobrou chuť!' },
  { n: 11, findingId: 'FULL-A1-00569', cardId: 'a1-essen', field: 'study.tip[0]', pirmd: 'Essen = jísti', pec: 'Essen = jíst' },
  { n: 12, findingId: 'FULL-A1-00570', cardId: 'a1-essen', field: 'study.important[3]', pirmd: 'Případ/jídlo: das Essen.', pec: 'Podstatné jméno / jídlo: das Essen.' },
  { n: 13, findingId: 'FULL-A1-00571', cardId: 'a1-essen-study', field: 'study.translation', pirmd: 'Jídlo • Jídlo', pec: 'Jídlo • Pokrm' },
  { n: 14, findingId: 'FULL-A1-00576', cardId: 'a1-essen-study', field: 'study.important[3]', pirmd: 'Případ/jídlo: das Essen.', pec: 'Podstatné jméno / jídlo: das Essen.' },
  { n: 15, findingId: 'FULL-A1-00577', cardId: 'a1-gemuese', field: 'study.explanation[2]', pirmd: 'Často popisováno: v jakémkoliv pohlaví (pouze v jednotném čísle).', pec: 'Je středního rodu a používá se pouze v jednotném čísle.' },
  { n: 16, findingId: 'FULL-A1-00578', cardId: 'a1-obst', field: 'study.explanation[2]', pirmd: 'Často popisováno: v jakémkoliv pohlaví (pouze v jednotném čísle).', pec: 'Je středního rodu a používá se pouze v jednotném čísle.' },
  { n: 17, findingId: 'FULL-A1-00581', cardId: 'a1-ferien', field: 'study.comparison[0].meaning', pirmd: 'Školní/studijní přestávka (pouze dsk.)', pec: 'Školní/studijní prázdniny (pouze mn. č.)' },
  { n: 18, findingId: 'FULL-A1-00582', cardId: 'a1-ferien', field: 'study.comparison[0].example', pirmd: 'In den Ferien fahren wir weg. – Jezdíme někam na víkendy.', pec: 'In den Ferien fahren wir weg. – O prázdninách někam odjíždíme.' },
  { n: 19, findingId: 'FULL-A1-00584', cardId: 'a1-ferien', field: 'study.important[0]', pirmd: 'Ferien vždy s dativem: in den Ferien.', pec: 'Ve spojení in den Ferien je Ferien v dativu množného čísla.' },
  { n: 20, findingId: 'FULL-A1-00585', cardId: 'a1-urlaub', field: 'study.explanation[1]', pirmd: 'Der Urlaub v podstatě znamená: volno v práci.', pec: 'Der Urlaub znamená především dovolenou nebo volno z práce.' },
  { n: 21, findingId: 'FULL-A1-00587', cardId: 'a1-urlaub', field: 'study.important[3]', pirmd: 'Dílo: der Urlaub (pouze jednotné číslo).', pec: 'Dovolená: der Urlaub (obvykle jednotné číslo).' },
  { n: 22, findingId: 'FULL-A1-00588', cardId: 'a1-urlaub', field: 'study.sectionAccents.important[0].green[0]', pirmd: 'der Urlabe', pec: 'der Urlaub' },
  { n: 23, findingId: 'FULL-A1-00590', cardId: 'a1-zeit', field: 'study.examples[1].lv', pirmd: 'Nemám čas', pec: 'Nemám čas.' },
];

const CLASSIFIED_NO_CHANGE = [
  { findingId: 'FULL-A1-00597', cardId: 'a1-Balkon-70', field: 'lv', status: 'FALSE_POSITIVE', note: 'Balkón is correct Czech; PL_CHAR detector false positive' },
  { findingId: 'FULL-A1-00598', cardId: 'a1-Balkon-70', field: 'lv', status: 'FALSE_POSITIVE', note: 'Same as FULL-A1-00597' },
  { findingId: 'FULL-A1-00599', cardId: 'a1-Besuch-87', field: 'study', status: 'DEFERRED_STRUCTURAL_REVIEW', note: 'Missing Study vs LV — no authorized CS content to generate' },
  { findingId: 'FULL-A1-00600', cardId: 'a1-Besuch-87', field: 'study.layout', status: 'DEFERRED_STRUCTURAL_REVIEW', note: 'Structure finding — defer to separate Study parity task' },
];

/** Sync existing sectionAccents tokens when example lv text changes (not counted in repair findings). */
const ACCENT_SYNC = [
  { cardId: 'a1-appetit', field: 'study.sectionAccents.examples[0].lv.purple[0]', from: 'Chuť', to: 'Dobrou' },
];

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

function findCardIndex(words, cardId) {
  return words.findIndex((e, i) => entryId(e, i) === cardId);
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
    cur = cur[parts[i]];
  }
  if (cur == null) return false;
  cur[parts[parts.length - 1]] = value;
  return true;
}

function serializeValue(value) {
  if (value == null) return null;
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function valuesEqual(a, b) {
  return serializeValue(a) === serializeValue(b);
}

function applyRepairs(words) {
  const results = [];
  for (const r of REPAIRS) {
    const idx = findCardIndex(words, r.cardId);
    if (idx < 0) {
      results.push({ ...r, status: 'CURRENT_VALUE_MISMATCH', before: null, after: null, note: 'card not found' });
      continue;
    }
    const beforeRaw = getRawValue(words[idx], r.field);
    const before = serializeValue(beforeRaw);
    let status;
    if (valuesEqual(beforeRaw, r.pec)) {
      status = 'ALREADY_CORRECT';
    } else if (valuesEqual(beforeRaw, r.pirmd)) {
      if (!setRawValue(words[idx], r.field, r.pec)) {
        status = 'CURRENT_VALUE_MISMATCH';
      } else {
        status = 'APPLIED';
      }
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
    }
    const afterRaw = status === 'APPLIED' ? getRawValue(words[idx], r.field) : beforeRaw;
    results.push({
      ...r,
      status,
      before,
      after: status === 'APPLIED' ? serializeValue(afterRaw) : before,
      note: status === 'CURRENT_VALUE_MISMATCH' ? `expected PIRMS ${JSON.stringify(r.pirmd)}, got ${JSON.stringify(before)}` : undefined,
    });
  }
  return results;
}

function syncSectionAccents(words) {
  const synced = [];
  for (const s of ACCENT_SYNC) {
    const idx = findCardIndex(words, s.cardId);
    if (idx < 0) continue;
    const current = getRawValue(words[idx], s.field);
    if (current === s.from) {
      setRawValue(words[idx], s.field, s.to);
      synced.push({ ...s, status: 'SYNCED' });
    } else if (current === s.to) {
      synced.push({ ...s, status: 'ALREADY_SYNCED' });
    } else {
      synced.push({ ...s, status: 'SKIPPED', current });
    }
  }
  return synced;
}

function verifySyntax(filePath) {
  const words = loadWords(filePath);
  if (!Array.isArray(words) || words.length !== 702) throw new Error(`Expected 702 cards, got ${words?.length}`);
}

function verifyMirror() {
  if (fs.readFileSync(FILES[0], 'utf8') !== fs.readFileSync(FILES[1], 'utf8')) throw new Error('Mirror mismatch');
}

function verifyDeUnchanged(before, after) {
  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of ['de', 'de_article', 'de_plural', 'level']) {
      if (before[i]?.[f] !== after[i]?.[f]) deChanges++;
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

function countStudies(words) {
  return words.filter((e) => e.study).length;
}

function main() {
  const before = loadWords(FILES[0]);
  const studyCountBefore = countStudies(before);
  const words = loadWords(FILES[0]);
  const results = applyRepairs(words);
  const accentSync = syncSectionAccents(words);
  for (const fp of FILES) {
    writeWords(fp, words);
    verifySyntax(fp);
  }
  verifyMirror();
  const after = loadWords(FILES[0]);
  const studyCountAfter = countStudies(after);
  const summary = {
    repairFindings: 23,
    authorizedFields: REPAIRS.length,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    falsePositive: 2,
    deferredStructuralReview: 2,
    accentSync: accentSync.length,
    deChanges: verifyDeUnchanged(before, after),
    idOrder: verifyIdOrder(after) ? 'PASS' : 'FAIL',
    studyCreated: studyCountAfter - studyCountBefore,
    studyDeleted: studyCountBefore - studyCountAfter,
  };
  console.log(JSON.stringify(summary, null, 2));
  if (results.some((r) => r.status === 'CURRENT_VALUE_MISMATCH')) {
    for (const r of results.filter((x) => x.status === 'CURRENT_VALUE_MISMATCH')) {
      console.log(`MISMATCH #${r.n} ${r.findingId} ${r.cardId} ${r.field}: ${r.note}`);
    }
  }
  return { results, summary, accentSync, classifiedNoChange: CLASSIFIED_NO_CHANGE };
}

function writeReport(results, summary, accentSync, classifiedNoChange) {
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-12.md');
  const accentLines = accentSync.map((s) => `- ${s.cardId} \`${s.field}\`: ${s.from} → ${s.to} (${s.status})`);
  const classifiedLines = classifiedNoChange.map((c) => `- ${c.findingId} | ${c.cardId} | ${c.field} | **${c.status}** | ${c.note}`);
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 12 (Findings 551–600)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50** (FULL-A1-00551 … FULL-A1-00600)',
    '- repair findings (content/accent): **23**',
    '- FALSE_POSITIVE: **2** (FULL-A1-00597, FULL-A1-00598 — `Balkón` unchanged)',
    '- DEFERRED_STRUCTURAL_REVIEW: **2** (FULL-A1-00599, FULL-A1-00600 — `a1-Besuch-87` Study not created)',
    '- stale / already correct / OWNER keep: **23**',
    '- **50/50 canonical findings classified**',
    '',
    '## Repair',
    '',
    `- requested fields: **${REPAIRS.length}**`,
    `- processed: **${REPAIRS.length}/${REPAIRS.length}**`,
    `- APPLIED: **${summary.applied}**`,
    `- ALREADY_CORRECT: **${summary.alreadyCorrect}**`,
    `- CURRENT_VALUE_MISMATCH: **${summary.mismatch}**`,
    `- FALSE_POSITIVE: **${summary.falsePositive}**`,
    `- DEFERRED_STRUCTURAL_REVIEW: **${summary.deferredStructuralReview}**`,
    '',
    '## Per-item results',
    '',
    '| # | findingId | cardId | field | status | before | after |',
    '|---|---|---|---|---|---|---|',
    ...results.map((r) => `| ${r.n} | ${r.findingId} | ${r.cardId} | ${r.field} | ${r.status} | ${JSON.stringify(r.before)} | ${JSON.stringify(r.after)} |`),
    '',
    '## Classified without production change',
    '',
    ...classifiedLines,
    '',
    '## sectionAccents sync (example lv targets)',
    '',
    ...accentLines,
    '',
    '## Integrity',
    '',
    `- DE changes: **${summary.deChanges}**`,
    '- unexpected production changes: **0** (scope-limited)',
    '- cards: **702**',
    `- ID/order: **${summary.idOrder}**`,
    '- syntax: **PASS**',
    '- mirror: **PASS**',
    `- Study created/deleted: **${summary.studyCreated}/${summary.studyDeleted}**`,
    '',
    `_Applied: ${new Date().toISOString().slice(0, 10)}_`,
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  console.log(`Wrote ${reportPath}`);
  return reportPath;
}

if (require.main === module) {
  const { results, summary, accentSync, classifiedNoChange } = main();
  writeReport(results, summary, accentSync, classifiedNoChange);
  if (summary.mismatch > 0) process.exit(1);
}

module.exports = { REPAIRS, ACCENT_SYNC, CLASSIFIED_NO_CHANGE, applyRepairs, syncSectionAccents, writeReport };
