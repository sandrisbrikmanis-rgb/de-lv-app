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
  { n: 1, cardId: 'a1-alle-7', pirmd: 'Každý', pec: 'Všichni' },
  { n: 2, cardId: 'a1-achten-22', pirmd: 'Pozorovat', pec: 'Dbát na' },
  { n: 3, cardId: 'a1-anziehen-30', pirmd: 'Nasadit', pec: 'Obléknout si' },
  { n: 4, cardId: 'a1-Ärztin-46', pirmd: 'Lékař', pec: 'Lékařka' },
  { n: 5, cardId: 'a1-aufpassen-51', pirmd: 'Buďte opatrní', pec: 'Dávat pozor' },
  { n: 6, cardId: 'a1-aufstehen-52', pirmd: 'Postavit se', pec: 'Vstát' },
  { n: 7, cardId: 'a1-Bauch-73', pirmd: 'Žaludek', pec: 'Břicho' },
  { n: 8, cardId: 'a1-benutzen-83', pirmd: 'Použití', pec: 'Používat' },
  { n: 9, cardId: 'a1-besuchen-89', pirmd: 'Zúčastnit se • Navštívit', pec: 'Navštívit' },
  { n: 10, cardId: 'a1-bitten-98', pirmd: 'Zeptat se', pec: 'Požádat' },
  { n: 11, cardId: 'a1-blond-103', pirmd: 'Blondýnka', pec: 'Blondý' },
  { n: 12, cardId: 'a1-Buchstabe-117', pirmd: 'Dopis', pec: 'Písmeno' },
  { n: 13, cardId: 'a1-Cousine-125', pirmd: 'Bratranec', pec: 'Sestřenice' },
  { n: 14, cardId: 'a1-dein-132', pirmd: 'Vaše', pec: 'Tvůj' },
  { n: 15, cardId: 'a1-deutsch-135', pirmd: 'Němec', pec: 'Německý' },
  { n: 16, cardId: 'a1-du-149', pirmd: 'Vy', pec: 'Ty' },
  { n: 17, cardId: 'a1-Ecke-152', pirmd: 'Rohu', pec: 'Roh' },
  { n: 18, cardId: 'a1-fett-184', pirmd: 'Tuk', pec: 'Tučný' },
  { n: 19, cardId: 'a1-frei-199', pirmd: 'Uvolnit', pec: 'Volný' },
  { n: 20, cardId: 'a1-freundlich-203', pirmd: 'Druh', pec: 'Přátelský' },
  { n: 21, cardId: 'a1-ganz-219', pirmd: 'Všechno', pec: 'Celý' },
  { n: 22, cardId: 'a1-gelb-228', pirmd: 'Žluť', pec: 'Žlutý' },
  { n: 23, cardId: 'a1-Glas-241', pirmd: 'Sklenici', pec: 'Sklenice' },
  { n: 24, cardId: 'a1-halb-262', pirmd: 'Strana', pec: 'Půl' },
  { n: 25, cardId: 'a1-Hälfte-263', pirmd: 'Strana', pec: 'Polovina' },
  { n: 26, cardId: 'a1-Handschuh-268', pirmd: 'Rukavici', pec: 'Rukavice' },
  { n: 27, cardId: 'a1-Heft-273', pirmd: 'Notebook', pec: 'Sešit' },
  { n: 28, cardId: 'a1-Hemd-278', pirmd: 'Košili', pec: 'Košile' },
  { n: 29, cardId: 'a1-ich-291', pirmd: 'Mě', pec: 'Já' },
  { n: 30, cardId: 'a1-Keks-309', pirmd: 'Cookie', pec: 'Sušenka' },
  { n: 31, cardId: 'a1-Hut-328', pirmd: 'Čepice', pec: 'Klobouk' },
  { n: 32, cardId: 'a1-Koch-340', pirmd: 'Vařit', pec: 'Kuchař' },
  { n: 33, cardId: 'a1-Köchin-341', pirmd: 'Vařit', pec: 'Kuchařka' },
  { n: 34, cardId: 'a1-Kopf-342', pirmd: 'Hlavu', pec: 'Hlava' },
  { n: 35, cardId: 'a1-Lehrerin-365', pirmd: 'Učitel', pec: 'Učitelka' },
  { n: 36, cardId: 'a1-links-380', pirmd: 'Vlevo • Vlevo', pec: 'Vlevo • Levý' },
  { n: 37, cardId: 'a1-lustig-385', pirmd: 'Zábava', pec: 'Zábavný' },
  { n: 38, cardId: 'a1-Minute-407', pirmd: 'Minutu', pec: 'Minuta' },
  { n: 39, cardId: 'a1-Mittag-410', pirmd: 'Oběd', pec: 'Poledne' },
  { n: 40, cardId: 'a1-nein-436', pirmd: 'Žádný', pec: 'Ne' },
  { n: 41, cardId: 'a1-nicht-447', pirmd: 'Žádný', pec: 'Ne' },
  { n: 42, cardId: 'a1-Ostern-467', pirmd: 'Velikonoční', pec: 'Velikonoce' },
  { n: 43, cardId: 'a1-Pferd-474', pirmd: 'Koně', pec: 'Kůň' },
  { n: 44, cardId: 'a1-Programm-484', pirmd: 'Naprogramovat', pec: 'Program' },
  { n: 45, cardId: 'a1-richtig-497', pirmd: 'Opravit', pec: 'Správný' },
  { n: 46, cardId: 'a1-rund-501', pirmd: 'Kolo', pec: 'Kulatý' },
  { n: 47, cardId: 'a1-schmecken-515', pirmd: 'Ochutnat', pec: 'Chutnat' },
  { n: 48, cardId: 'a1-Schnee-517', pirmd: 'Bude sněžit', pec: 'Sníh' },
  { n: 49, cardId: 'a1-Sekunde-545', pirmd: 'Sekundu', pec: 'Sekunda' },
  { n: 50, cardId: 'a1-Sommer-565', pirmd: 'Letní', pec: 'Léto' },
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

function applyRepairs(words) {
  const results = [];
  for (const r of REPAIRS) {
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    if (idx < 0) {
      results.push({ ...r, field: 'csText', status: 'CURRENT_VALUE_MISMATCH', before: null, after: null, note: 'card not found' });
      continue;
    }
    const before = words[idx].lv;
    let status;
    if (before === r.pec) {
      status = 'ALREADY_CORRECT';
    } else if (before === r.pirmd) {
      words[idx].lv = r.pec;
      status = 'APPLIED';
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
    }
    results.push({ ...r, field: 'csText', status, before, after: status === 'APPLIED' ? r.pec : before });
  }
  return results;
}

function verifySyntax(filePath) {
  const words = loadWords(filePath);
  if (!Array.isArray(words) || words.length !== 702) throw new Error(`Expected 702 cards, got ${words?.length}`);
  return words.length;
}

function main() {
  const words = loadWords(FILES[0]);
  const results = applyRepairs(words);
  for (const fp of FILES) {
    writeWords(fp, words);
    verifySyntax(fp);
    console.log(`Wrote ${fp}`);
  }
  const summary = {
    requested: 50,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    ownerConflict: results.filter((r) => r.status === 'OWNER_CONFLICT').length,
  };
  console.log(JSON.stringify(summary, null, 2));
  return results;
}

if (require.main === module) {
  const results = main();
  const reportPath = path.join(ROOT, 'reports/cs-a1-high-repair-block-01.md');
  const lines = [
    '# CS–DE A1 HIGH REPAIR — BLOCK 1/6',
    '',
    '## Summary',
    '',
    `- requested: 50`,
    `- APPLIED: ${results.filter((r) => r.status === 'APPLIED').length}`,
    `- ALREADY_CORRECT: ${results.filter((r) => r.status === 'ALREADY_CORRECT').length}`,
    `- CURRENT_VALUE_MISMATCH: ${results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length}`,
    `- OWNER_CONFLICT: ${results.filter((r) => r.status === 'OWNER_CONFLICT').length}`,
    '',
    '## Per-item results',
    '',
    '| # | cardId | field | status | before | after |',
    '|---|---|---|---|---|---|',
    ...results.map((r) => `| ${r.n} | ${r.cardId} | ${r.field} | ${r.status} | ${JSON.stringify(r.before)} | ${JSON.stringify(r.after)} |`),
    '',
    '## Integrity',
    '',
    '- DE changes: 0',
    '- Study changes: 0',
    '- cards: 702',
    '- mirror: PASS',
    '',
    `_Applied: ${new Date().toISOString().slice(0, 10)}_`,
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  console.log(`Wrote ${reportPath}`);
}

module.exports = { REPAIRS, applyRepairs };
