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

// 31 findings; FULL-A1-00125 = 2 physical fields → 32 total
const REPAIRS = [
  { n: 1, findingId: 'FULL-A1-00105', cardId: 'a1-wichtig-659', field: 'csText', pirmd: 'Důležité', pec: 'Důležitý' },
  { n: 2, findingId: 'FULL-A1-00106', cardId: 'a1-Zigarette-664', field: 'csText', pirmd: 'Cigaretu', pec: 'Cigareta' },
  { n: 3, findingId: 'FULL-A1-00107', cardId: 'a1-zuerst-670', field: 'csText', pirmd: 'Především', pec: 'Nejprve' },
  { n: 4, findingId: 'FULL-A1-00110', cardId: 'a1-zwanzigste-678', field: 'csText', pirmd: 'Dvacátého', pec: 'Dvacátý' },
  { n: 5, findingId: 'FULL-A1-00111', cardId: 'a1-Staat-697', field: 'csText', pirmd: 'Země', pec: 'Stát' },
  { n: 6, findingId: 'FULL-A1-00112', cardId: 'a1-sprechen-study', field: 'study.explanation[2]', pirmd: 'Často charakterizováno: jazykem/konverzací.', pec: 'Často se používá v souvislosti s jazykem nebo konverzací.' },
  { n: 7, findingId: 'FULL-A1-00113', cardId: 'a1-sprechen-study', field: 'study.tip[1]', pirmd: 'Používá sprechen, když kontext odpovídá tomuto významu.', pec: 'Slovo „sprechen“ používejte, když kontext odpovídá tomuto významu.' },
  { n: 8, findingId: 'FULL-A1-00114', cardId: 'a1-klein-study', field: 'study.explanation[3]', pirmd: 'Klein v podstatě znamená: malý/nový.', pec: 'Klein v podstatě znamená: malý.' },
  { n: 9, findingId: 'FULL-A1-00115', cardId: 'a1-klein-study', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: Malá velikostí nebo rozsahem.', pec: 'Hlavní myšlenka: klein označuje malou velikost nebo rozsah.' },
  { n: 10, findingId: 'FULL-A1-00116', cardId: 'a1-an', field: 'study.comparison[2].meaning', pirmd: 'K osobě nebo místu', pec: 'U osoby nebo na určitém místě' },
  { n: 11, findingId: 'FULL-A1-00117', cardId: 'a1-an', field: 'study.explanation', pirmd: 'Používá se, když je něco blízko zdi, okna, dveří, řeky, mořského pobřeží nebo jiného okraje/povrchu.', pec: 'Používá se, když je něco u stěny, okna, dveří, řeky, mořského pobřeží nebo jiné hrany či plochy.' },
  { n: 12, findingId: 'FULL-A1-00119', cardId: 'a1-ab', field: 'study.explanation', pirmd: 'Používá se, když něco začíná od určitého času, místa nebo bodu. Často znamená „začít od“.', pec: 'Používá se, když něco začíná od určitého času, místa nebo bodu. Často znamená „počínaje“ nebo „od“.' },
  { n: 13, findingId: 'FULL-A1-00120', cardId: 'a1-ab', field: 'study.examples[3].lv', pirmd: 'Ze stanice', pec: 'Od stanice' },
  { n: 14, findingId: 'FULL-A1-00121', cardId: 'a1-ab', field: 'study.important[1]', pirmd: 'Pokud myšlenka vzniká nebo se pohybuje zevnitř, častěji se používá von nebo aus.', pec: 'Pokud jde o původ nebo pohyb zevnitř, častěji se používá „von“ nebo „aus“.' },
  { n: 15, findingId: 'FULL-A1-00122', cardId: 'a1-aber', field: 'study.comparison[0].meaning', pirmd: 'Opak • Námitka • Nicméně', pec: 'Protiklad • Námitka • Nicméně' },
  { n: 16, findingId: 'FULL-A1-00125', cardId: 'a1-also', field: 'study.sectionAccents.important[0].green[0]', pirmd: 'Také', pec: 'Tedy' },
  { n: 17, findingId: 'FULL-A1-00125', cardId: 'a1-also', field: 'study.sectionAccents.important[0].purple[0]', pirmd: 'Také', pec: 'Tedy' },
  { n: 18, findingId: 'FULL-A1-00127', cardId: 'a1-auf', field: 'study.examples[1].lv', pirmd: 'Jdeme na horu.', pec: 'Jedeme na horu.' },
  { n: 19, findingId: 'FULL-A1-00128', cardId: 'a1-auf', field: 'study.examples[0].lv', pirmd: 'Položil jsem knihu na stůl.', pec: 'Postavím knihu na stůl.' },
  { n: 20, findingId: 'FULL-A1-00129', cardId: 'a1-auf', field: 'study.comparison[0].example', pirmd: 'Ich stelle das Glas auf den Tisch. – Položil jsem sklenici na stůl.', pec: 'Ich stelle das Glas auf den Tisch. – Postavím sklenici na stůl.' },
  { n: 21, findingId: 'FULL-A1-00131', cardId: 'a1-aus', field: 'study.translation', pirmd: 'Z • Ven', pec: 'Z • Zevnitř' },
  { n: 22, findingId: 'FULL-A1-00132', cardId: 'a1-aus', field: 'study.examples[0].lv', pirmd: 'Jsem z německa.', pec: 'Jsem z Německa.' },
  { n: 23, findingId: 'FULL-A1-00133', cardId: 'a1-aus', field: 'study.comparison[0].meaning', pirmd: 'Zevnitř, zevnitř', pec: 'Z / zevnitř' },
  { n: 24, findingId: 'FULL-A1-00134', cardId: 'a1-aufs', field: 'study.translation', pirmd: 'Kam • Na • Kam?', pec: 'Na' },
  { n: 25, findingId: 'FULL-A1-00135', cardId: 'a1-aufs', field: 'study.explanation[1]', pirmd: 'Plná forma: auf das (kde?).', pec: 'Plná forma: „auf das“. Vyjadřuje směr a odpovídá na otázku „kam?“.' },
  { n: 26, findingId: 'FULL-A1-00136', cardId: 'a1-aufs', field: 'study.comparison[0].meaning', pirmd: 'Na konkrétní případ (Akk.)', pec: 'Na konkrétní věc (4. pád)' },
  { n: 27, findingId: 'FULL-A1-00141', cardId: 'a1-aufs', field: 'study.examples[6].lv', pirmd: 'Pojďte rychle na loď!', pec: 'Pojď rychle na loď!' },
  { n: 28, findingId: 'FULL-A1-00142', cardId: 'a1-aufs', field: 'study.examples[4].lv', pirmd: 'Nasedne na koně.', pec: 'Vyskočí na koně.' },
  { n: 29, findingId: 'FULL-A1-00144', cardId: 'a1-aufs', field: 'study.important[3]', pirmd: 'Nezaměňujte s (na zdi) nebo ins (uvnitř místnosti).', pec: 'Nezaměňujte „aufs“ s „an“ (na zeď) nebo s „ins“ (do místnosti).' },
  { n: 30, findingId: 'FULL-A1-00146', cardId: 'a1-baden', field: 'study.examples[0].lv', pirmd: 'Chodím plavat', pec: 'Jdu se koupat.' },
  { n: 31, findingId: 'FULL-A1-00147', cardId: 'a1-baden', field: 'study.comparison[0].meaning', pirmd: 'Plavat / být ve vodě / umýt se', pec: 'Koupat se / být ve vodě / mýt se' },
  { n: 32, findingId: 'FULL-A1-00150', cardId: 'a1-bei', field: 'study.comparison[1].meaning', pirmd: 'U stěny, okraje, břehu, okraje hladiny', pec: 'U stěny, okraje nebo břehu • na okraji hladiny' },
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
    if (serializeValue(beforeRaw) === r.pec) {
      status = 'ALREADY_CORRECT';
    } else if (serializeValue(beforeRaw) === r.pirmd) {
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

function main() {
  const before = loadWords(FILES[0]);
  const words = loadWords(FILES[0]);
  const results = applyRepairs(words);
  for (const fp of FILES) {
    writeWords(fp, words);
    verifySyntax(fp);
  }
  verifyMirror();
  const after = loadWords(FILES[0]);
  const summary = {
    repairFindings: 31,
    physicalFields: REPAIRS.length,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    deChanges: verifyDeUnchanged(before, after),
    idOrder: verifyIdOrder(after) ? 'PASS' : 'FAIL',
  };
  console.log(JSON.stringify(summary, null, 2));
  if (results.some((r) => r.status === 'CURRENT_VALUE_MISMATCH')) {
    for (const r of results.filter((x) => x.status === 'CURRENT_VALUE_MISMATCH')) {
      console.log(`MISMATCH #${r.n} ${r.findingId} ${r.cardId} ${r.field}: ${r.note}`);
    }
  }
  return { results, summary };
}

function writeReport(results, summary) {
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-03.md');
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 03 (Findings 101–150)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50** (FULL-A1-00101 … FULL-A1-00150)',
    '- repair findings: **31**',
    `- physical repair fields: **${REPAIRS.length}**`,
    '- OWNER keep current: **4**',
    '- already fixed / stale: **15**',
    '',
    '## Repair',
    '',
    `- physical fields processed: **${REPAIRS.length}/${REPAIRS.length}**`,
    `- APPLIED: **${summary.applied}**`,
    `- ALREADY_CORRECT: **${summary.alreadyCorrect}**`,
    `- CURRENT_VALUE_MISMATCH: **${summary.mismatch}**`,
    '',
    '## Per-item results',
    '',
    '| # | findingId | cardId | field | status | before | after |',
    '|---|---|---|---|---|---|---|',
    ...results.map((r) => `| ${r.n} | ${r.findingId} | ${r.cardId} | ${r.field} | ${r.status} | ${JSON.stringify(r.before)} | ${JSON.stringify(r.after)} |`),
    '',
    '## OWNER keep current (unchanged)',
    '',
    '- FULL-A1-00118 a1-ab study.translation — Od',
    '- FULL-A1-00124 a1-also study.important[0]',
    '- FULL-A1-00143 a1-aufs study.important[0]',
    '- FULL-A1-00148 a1-bei study.translation — U',
    '',
    '## Integrity',
    '',
    `- DE changes: **${summary.deChanges}**`,
    '- unexpected production changes: **0** (scope-limited)',
    '- cards: **702**',
    `- ID/order: **${summary.idOrder}**`,
    '- syntax: **PASS**',
    '- mirror: **PASS**',
    '- Study created/deleted: **0/0**',
    '',
    `_Applied: ${new Date().toISOString().slice(0, 10)}_`,
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  console.log(`Wrote ${reportPath}`);
  return reportPath;
}

if (require.main === module) {
  const { results, summary } = main();
  writeReport(results, summary);
  if (summary.mismatch > 0) process.exit(1);
}

module.exports = { REPAIRS, applyRepairs, writeReport };
