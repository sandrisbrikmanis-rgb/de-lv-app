#!/usr/bin/env node
'use strict';
/**
 * CS-DE A1 FINAL 702 audit repair — Block 01 (first 50 CONFIRMED_REAL).
 * Source: reports/temp/cs-a1-final-702-audit-on-main-validated.json
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILES = [path.join(ROOT, 'data/cs/a1.js'), path.join(ROOT, 'www/data/cs/a1.js')];

const REPAIRS = [
  { findingId: 'FINAL702-A1-00032', cardId: 'a1-verlieren-620', field: 'lv', pirmd: 'Prohrát', pec: 'Ztratit • Prohrát' },
  { findingId: 'FINAL702-A1-00034', cardId: 'a1-also', field: 'lv', pirmd: 'Tedy • Takže', pec: 'Tedy • Takže', noop: true },
  { findingId: 'FINAL702-A1-00035', cardId: 'a1-also', field: 'study.translation', pirmd: 'Proto', pec: 'Tedy • Takže' },
  { findingId: 'FINAL702-A1-00036', cardId: 'a1-also', field: 'study.explanation', pirmd: 'Používá se k vyvození závěru nebo zobrazení výsledku. Znamená „proto“, „proto“.', pec: 'Používá se k vyvození závěru nebo vyjádření výsledku. Znamená „tedy“ nebo „takže“.' },
  { findingId: 'FINAL702-A1-00037', cardId: 'a1-also', field: 'study.important[1]', pirmd: 'České „tak“ může být často také deshalb.', pec: 'České „tak“ může podle kontextu překládat také „also“; „deshalb“ obvykle znamená „proto“.' },
  { findingId: 'FINAL702-A1-00038', cardId: 'a1-auch-study', field: 'study.examples[1].lv', pirmd: 'Já také přijdu.', pec: 'Ona zde také pracuje.' },
  { findingId: 'FINAL702-A1-00039', cardId: 'a1-auch-study', field: 'study.examples[2].lv', pirmd: 'Ona zde také pracuje.', pec: 'Také vám přeji hezký den.' },
  { findingId: 'FINAL702-A1-00042', cardId: 'a1-aus', field: 'lv', pirmd: 'Od • Ven', pec: 'Z • Zevnitř' },
  { findingId: 'FINAL702-A1-00043', cardId: 'a1-aufs', field: 'lv', pirmd: 'Kam • Na • Kam?', pec: 'Na' },
  { findingId: 'FINAL702-A1-00044', cardId: 'a1-aufs', field: 'study.explanation[4]', pirmd: 'V hovorové a každodenní řeči se téměř vždy používá aufs místo plného auf das.', pec: 'V běžné řeči se často používá aufs místo plného auf das; obě podoby jsou gramaticky správné.' },
  { findingId: 'FINAL702-A1-00047', cardId: 'a1-baden', field: 'study.important[1]', pirmd: 'čeština často říká jednoduše „plavat“, ale v němčině si musíte vybrat podle situace.', pec: 'Čeština často říká jednoduše „plavat“, ale v němčině si musíte vybrat podle situace.' },
  { findingId: 'FINAL702-A1-00048', cardId: 'a1-bleiben', field: 'study.examples[0].lv', pirmd: 'Zůstávám doma', pec: 'Zůstávám doma.' },
  { findingId: 'FINAL702-A1-00049', cardId: 'a1-bleiben', field: 'study.examples[3].lv', pirmd: 'Jdu domů', pec: 'Jdu domů.' },
  { findingId: 'FINAL702-A1-00050', cardId: 'a1-bringen', field: 'study.examples[2].lv', pirmd: 'Donese knihu do školy.', pec: 'Přináší knihu do školy.' },
  { findingId: 'FINAL702-A1-00051', cardId: 'a1-bringen', field: 'study.comparison[1].meaning', pirmd: 'Vzít / vzít', pec: 'Vzít / brát' },
  { findingId: 'FINAL702-A1-00052', cardId: 'a1-da', field: 'study.comparison[0].meaning', pirmd: 'Tam • Zde • Zde (obecně)', pec: 'Tam • Tady • Zde (obecně)' },
  { findingId: 'FINAL702-A1-00053', cardId: 'a1-das', field: 'lv', pirmd: 'Neuter určitý člen', pec: 'Určitý člen středního rodu' },
  { findingId: 'FINAL702-A1-00054', cardId: 'a1-das', field: 'study.comparison[1].meaning', pirmd: 'Tenhle', pec: 'Tohle' },
  { findingId: 'FINAL702-A1-00055', cardId: 'a1-das', field: 'study.examples[0].lv', pirmd: 'Je to moje auto', pec: 'Je to moje auto.' },
  { findingId: 'FINAL702-A1-00056', cardId: 'a1-der', field: 'study.translation', pirmd: 'Mužský rod určitý člen', pec: 'Určitý člen mužského rodu' },
  { findingId: 'FINAL702-A1-00057', cardId: 'a1-die', field: 'study.translation', pirmd: 'Ženský určitý člen', pec: 'Určitý člen ženského rodu' },
  { findingId: 'FINAL702-A1-00058', cardId: 'a1-dieser', field: 'study.examples[1].lv', pirmd: 'Líbí se mi tento pes', pec: 'Líbí se mi tento pes.' },
  { findingId: 'FINAL702-A1-00059', cardId: 'a1-eis', field: 'study.examples[0].lv', pirmd: 'Jím zmrzlinu', pec: 'Jím zmrzlinu.' },
  { findingId: 'FINAL702-A1-00060', cardId: 'a1-eis', field: 'study.examples[1].lv', pirmd: 'Chceš zmrzlinu', pec: 'Chceš zmrzlinu?' },
  { findingId: 'FINAL702-A1-00061', cardId: 'a1-etwas', field: 'study.comparison[1].meaning', pirmd: 'Něco (hovorové)', pec: 'Něco (hovorově)' },
  { findingId: 'FINAL702-A1-00062', cardId: 'a1-etwas', field: 'study.examples[1].lv', pirmd: 'Máš trochu času', pec: 'Máš trochu času?' },
  { findingId: 'FINAL702-A1-00063', cardId: 'a1-etwas', field: 'study.examples[2].lv', pirmd: 'Jsem trochu unavený', pec: 'Jsem trochu unavený.' },
  { findingId: 'FINAL702-A1-00064', cardId: 'a1-etwas', field: 'study.examples[3].lv', pirmd: 'Něco pro tebe mám', pec: 'Něco pro tebe mám.' },
  { findingId: 'FINAL702-A1-00065', cardId: 'a1-euch', field: 'lv', pirmd: 'Ty • Ty', pec: 'Vás • Vám' },
  { findingId: 'FINAL702-A1-00066', cardId: 'a1-fahren', field: 'study.examples[3].lv', pirmd: 'Vezmu tě domů', pec: 'Vezmu tě domů.' },
  { findingId: 'FINAL702-A1-00067', cardId: 'a1-fahren', field: 'study.accents.purple[1]', pirmd: 'Braucu', pec: 'Jedu' },
  { findingId: 'FINAL702-A1-00068', cardId: 'a1-fahren', field: 'study.accents.green[4]', pirmd: 'Vilcienu', pec: 'Vlakem' },
  { findingId: 'FINAL702-A1-00069', cardId: 'a1-finden', field: 'study.examples[0].lv', pirmd: 'Nemohu najít svůj klíč', pec: 'Nemohu najít svůj klíč.' },
  { findingId: 'FINAL702-A1-00070', cardId: 'a1-finden', field: 'study.examples[1].lv', pirmd: 'Zdá se mi to dobré.', pec: 'Našel/našla jsi svůj telefon?' },
  { findingId: 'FINAL702-A1-00071', cardId: 'a1-finden', field: 'study.examples[2].lv', pirmd: 'Co si myslíš o filmu?', pec: 'Myslím si, že je to dobré.' },
  { findingId: 'FINAL702-A1-00072', cardId: 'a1-frau', field: 'study.examples[0].lv', pirmd: 'Je to pěkná žena.', pec: 'Je to milá žena.' },
  { findingId: 'FINAL702-A1-00073', cardId: 'a1-fuer', field: 'study.explanation[1]', pirmd: 'Když mluvíme o příjemci nebo záměru, für = pro (für dich = pro vás).', pec: 'Když mluvíme o příjemci nebo záměru, für = pro (für dich = pro tebe).' },
  { findingId: 'FINAL702-A1-00074', cardId: 'a1-ganz-study', field: 'study.translation', pirmd: 'Celý • Úplně', pec: 'Celý • Úplně • Docela' },
  { findingId: 'FINAL702-A1-00075', cardId: 'a1-geben', field: 'study.examples[1].lv', pirmd: 'Dávám ti své číslo', pec: 'Dávám ti své číslo.' },
  { findingId: 'FINAL702-A1-00076', cardId: 'a1-geben', field: 'study.examples[2].lv', pirmd: 'Beru knihu', pec: 'Beru knihu.' },
  { findingId: 'FINAL702-A1-00077', cardId: 'a1-geben', field: 'study.examples[3].lv', pirmd: 'Dostanu dárek', pec: 'Dostanu dárek.' },
  { findingId: 'FINAL702-A1-00078', cardId: 'a1-gleich', field: 'study.explanation[2]', pirmd: 'Pokud jde o srovnání, gleich = stejný/stejný (die gleiche Farbe = stejná barva).', pec: 'Pokud jde o srovnání, gleich = stejný (die gleiche Farbe = stejná barva).' },
  { findingId: 'FINAL702-A1-00079', cardId: 'a1-gross-study', field: 'study.examples[1].lv', pirmd: 'Berlín je velké město.', pec: 'Dům je velký.' },
  { findingId: 'FINAL702-A1-00080', cardId: 'a1-gut-study', field: 'study.examples[1].lv', pirmd: 'Jak se máš - dobře, díky!', pec: 'Jak se máš – dobře, díky!' },
  { findingId: 'FINAL702-A1-00081', cardId: 'a1-haben', field: 'study.explanation[1]', pirmd: 'Česká dativní konstrukce „I have / you have“ v němčině je nominativ + haben: Ich habe ..., Du hast ..., Er hat ... — ne *mir habe.', pec: 'Anglické „I have / you have“ se v němčině vyjadřuje nominativem + haben: Ich habe ..., Du hast ..., Er hat ... — ne *mir habe.' },
  { findingId: 'FINAL702-A1-00082', cardId: 'a1-haben', field: 'study.explanation[2]', pirmd: 'Po Habenovi následuje akuzativ: Ich habe ein Auto. = Mám auto.', pec: 'Po slovese haben následuje akuzativ: Ich habe ein Auto. = Mám auto.' },
  { findingId: 'FINAL702-A1-00084', cardId: 'a1-halten', field: 'study.comparison[2].word', pirmd: 'stoppen', pec: 'anhalten' },
  { findingId: 'FINAL702-A1-00087', cardId: 'a1-hoeren-study', field: 'study.important[0]', pirmd: 'Hören = slyšet/poslechnout zvuk.', pec: 'hören = slyšet zvuk / poslouchat hudbu.' },
  { findingId: 'FINAL702-A1-00088', cardId: 'a1-hoeren-study', field: 'study.explanation[2]', pirmd: 'Často charakterizované: zvuky.', pec: 'Často se používá pro zvuky.' },
  { findingId: 'FINAL702-A1-00097', cardId: 'a1-kennen-study', field: 'study.important[0]', pirmd: 'Kennen = poznat osobu/místo.', pec: 'Kennen = znát osobu/místo.' },
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
  cur[parts[parts.length - 1]] = value;
  return true;
}

function serializeValue(value) {
  if (value == null) return null;
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function main() {
  const words = loadWords(FILES[0]);
  const results = [];

  for (const r of REPAIRS) {
    if (r.noop) {
      results.push({ ...r, status: 'NO_OP' });
      continue;
    }
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    if (idx < 0) {
      results.push({ ...r, status: 'CARD_NOT_FOUND' });
      continue;
    }
    const before = getRawValue(words[idx], r.field);
    let status;
    if (serializeValue(before) === serializeValue(r.pec)) {
      status = 'ALREADY_CORRECT';
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

  const summary = {
    requested: REPAIRS.length,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    noOp: results.filter((r) => r.status === 'NO_OP').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    notFound: results.filter((r) => r.status === 'CARD_NOT_FOUND').length,
  };

  console.log(JSON.stringify(summary, null, 2));
  const mismatches = results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH');
  if (mismatches.length) {
    console.log('MISMATCHES:', JSON.stringify(mismatches, null, 2));
    process.exit(1);
  }

  const report = [
    '# CS–DE A1 Final 702 Repair — Block 01',
    '',
    `Source: FINAL 702/702 audit on main`,
    '',
    `| Metric | Count |`,
    `|---|---|`,
    `| requested | ${summary.requested} |`,
    `| APPLIED | ${summary.applied} |`,
    `| ALREADY_CORRECT | ${summary.alreadyCorrect} |`,
    `| NO_OP | ${summary.noOp} |`,
    `| CURRENT_VALUE_MISMATCH | ${summary.mismatch} |`,
    '',
    '## Results',
    '',
    ...results.map((r) => `- **${r.findingId}** \`${r.cardId}\` \`${r.field}\` → ${r.status}`),
  ].join('\n');

  fs.writeFileSync(path.join(ROOT, 'reports/cs-a1-final-702-repair-block01.md'), report);
}

if (require.main === module) main();

module.exports = { REPAIRS };
