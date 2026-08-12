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

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function writeWords(filePath, words) {
  const content = `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`;
  fs.writeFileSync(filePath, content, 'utf8');
}

function findByStudyId(words, id) {
  return words.find((e) => e.study?.id === id);
}

function findByDe(words, de) {
  return words.find((e) => e.de === de && !e.study);
}

function findByDeAny(words, de) {
  return words.find((e) => e.de === de);
}

const log = { applied: [], mismatches: [], skipped: [] };

function applyField(entry, cardId, fieldLabel, get, set, pirmd, pec) {
  const current = get();
  if (current !== pirmd) {
    log.mismatches.push({ cardId, field: fieldLabel, expected: pirmd, actual: current });
    return false;
  }
  set(pec);
  log.applied.push({ cardId, field: fieldLabel });
  return true;
}

function applyArrayReplace(entry, cardId, fieldLabel, get, set, pirmdArr, pecArr) {
  const current = get();
  if (!Array.isArray(current) || JSON.stringify(current) !== JSON.stringify(pirmdArr)) {
    log.mismatches.push({
      cardId,
      field: fieldLabel,
      expected: JSON.stringify(pirmdArr),
      actual: JSON.stringify(current),
    });
    return false;
  }
  set(pecArr);
  log.applied.push({ cardId, field: fieldLabel });
  return true;
}

function applyArraySet(entry, cardId, fieldLabel, get, set, pecArr) {
  set(pecArr);
  log.applied.push({ cardId, field: fieldLabel });
  return true;
}

function mutate(words) {
  // 1. a1-es
  const es = findByStudyId(words, 'a1-es');
  applyField(es, 'a1-es', 'study.info[0]',
    () => es.study.info[0],
    (v) => { es.study.info[0] = v; },
    'Český “es” = vācu “ich”',
    'České „já“ = německé „ich“');
  applyField(es, 'a1-es', 'study.info[1]',
    () => es.study.info[1],
    (v) => { es.study.info[1] = v; },
    'Vācu “es” = tas • Tā • Bezpersoniska forma',
    'Německé „es“ = to • ono • bezosobní tvar');
  applyField(es, 'a1-es', 'study.explanation',
    () => es.study.explanation,
    (v) => { es.study.explanation = v; },
    'Německé „já“ není zvyklé mluvit o sobě. Používá se k označení: to, to nebo neosobní tvar (počasí, čas, různé neosobní věty).',
    'Německé „es“ neznamená „já“. Používá se jako „to“ nebo „ono“ a také v neosobních větách o počasí, čase a dalších dějích.');

  // 2. a1-fahren
  const fahren = findByStudyId(words, 'a1-fahren');
  applyField(fahren, 'a1-fahren', 'study.important.example',
    () => fahren.study.important.example,
    (v) => { fahren.study.important.example = v; },
    'Vācu valodā viens un tas pats darbības vārds bieži nozīmē: braukt • Vest • Aizvest atkarībā no konteksta.',
    'V němčině může stejné sloveso podle kontextu znamenat: jezdit • vézt • odvézt.');
  applyField(fahren, 'a1-fahren', 'study.accents.green[1]',
    () => fahren.study.accents.green[1],
    (v) => { fahren.study.accents.green[1] = v; },
    'Transportlīdzekli',
    'dopravním prostředkem');
  applyField(fahren, 'a1-fahren', 'study.accents.green[5]',
    () => fahren.study.accents.green[5],
    (v) => { fahren.study.accents.green[5] = v; },
    'Velosipēdu',
    'jízdní kolo');

  // 3. a1-in — only important accent (examples Berlīnē = FALSE_POSITIVE, skip)
  const inEntry = findByStudyId(words, 'a1-in');
  applyField(inEntry, 'a1-in', 'study.sectionAccents.important[0].purple[0]',
    () => inEntry.study.sectionAccents.important[0].purple[0],
    (v) => { inEntry.study.sectionAccents.important[0].purple[0] = v; },
    'Berlīnē',
    'Berlíně');

  // 4. a1-land
  const land = findByStudyId(words, 'a1-land');
  applyField(land, 'a1-land', 'study.sectionAccents.comparison[3].meaning.purple[1]',
    () => land.study.sectionAccents.comparison[3].meaning.purple[1],
    (v) => { land.study.sectionAccents.comparison[3].meaning.purple[1] = v; },
    'planēta',
    'planeta');

  // 5. a1-sitzen
  const sitzen = findByStudyId(words, 'a1-sitzen');
  applyField(sitzen, 'a1-sitzen', 'study.sectionAccents.explanation.purple[0]',
    () => sitzen.study.sectionAccents.explanation.purple[0],
    (v) => { sitzen.study.sectionAccents.explanation.purple[0] = v; },
    'sēdēt',
    'sedět');
  applyField(sitzen, 'a1-sitzen', 'study.sectionAccents.explanation.purple[1]',
    () => sitzen.study.sectionAccents.explanation.purple[1],
    (v) => { sitzen.study.sectionAccents.explanation.purple[1] = v; },
    'sēž',
    'sedí');
  applyField(sitzen, 'a1-sitzen', 'study.sectionAccents.comparison[0].meaning.purple[0]',
    () => sitzen.study.sectionAccents.comparison[0].meaning.purple[0],
    (v) => { sitzen.study.sectionAccents.comparison[0].meaning.purple[0] = v; },
    'sēdēt',
    'Sedět');

  // 6. a1-stehen
  const stehen = findByStudyId(words, 'a1-stehen');
  applyField(stehen, 'a1-stehen', 'study.sectionAccents.comparison[1].meaning.purple[0]',
    () => stehen.study.sectionAccents.comparison[1].meaning.purple[0],
    (v) => { stehen.study.sectionAccents.comparison[1].meaning.purple[0] = v; },
    'sēdēt',
    'sedět');

  // 7. a1-über
  const uber = findByStudyId(words, 'a1-über');
  applyField(uber, 'a1-über', 'study.sectionAccents.tip.left.purple[0]',
    () => uber.study.sectionAccents.tip.left.purple[0],
    (v) => { uber.study.sectionAccents.tip.left.purple[0] = v; },
    'tēma',
    'téma');

  // 8. a1-essen
  const essenStudy = findByStudyId(words, 'a1-essen');
  applyField(essenStudy, 'a1-essen', 'study.sectionAccents.explanation.purple[0]',
    () => essenStudy.study.sectionAccents.explanation.purple[0],
    (v) => { essenStudy.study.sectionAccents.explanation.purple[0] = v; },
    'ēst',
    'jíst');

  // 9. a1-Baum-74 — FALSE_POSITIVE skip
  log.skipped.push({ cardId: 'a1-Baum-74', field: 'lv', reason: 'FALSE_POSITIVE' });

  // 10-13 simple cards
  const bedeuten = findByDe(words, 'bedeuten');
  applyField(bedeuten, 'a1-bedeuten-75', 'lv',
    () => bedeuten.lv,
    (v) => { bedeuten.lv = v; },
    'Střední',
    'Znamenat');

  const buch = findByDe(words, 'Buch');
  applyField(buch, 'a1-Buch-116', 'lv',
    () => buch.lv,
    (v) => { buch.lv = v; },
    'Rezervovat',
    'Kniha');

  const erde = findByDe(words, 'Erde');
  applyField(erde, 'a1-Erde-164', 'lv',
    () => erde.lv,
    (v) => { erde.lv = v; },
    'Přistát',
    'Země');

  const marz = findByDe(words, 'März');
  applyField(marz, 'a1-März-396', 'lv',
    () => marz.lv,
    (v) => { marz.lv = v; },
    'Pochod',
    'Březen');

  // 14. a1-bitte
  const bitte = findByStudyId(words, 'a1-bitte');
  applyArrayReplace(bitte, 'a1-bitte', 'study.explanation',
    () => bitte.study.explanation,
    (v) => { bitte.study.explanation = v; },
    [
      'Hlavní myšlenka: Zdvořilé slovo s malými písmeny. Byl jsem zdvořilý - prosím.',
      'Bitte znamená hlavně: zdvořilost.',
      'Často popisuje: zdvořilé slovo.',
      'Bitte znamená především: požadavek/žádost.',
      'Často charakterizováno: podstatné jméno (zemřít).',
      'Bitte s malým písmenem je zdvořilé slovo - znamená prosím (Bitte schön!, Eine Tasse Kaffee, bitte).',
      'Die Bitte s velkým písmenem a členem die je podstatné jméno - znamená žádost nebo žádost (Ich habe eine Bitte = mám žádost).',
      'Množné číslo: zemřít pokousán.',
    ],
    [
      'Hlavní myšlenka: bitte s malým písmenem je zdvořilostní výraz a znamená „prosím“.',
      'Používá se například v prosbě, žádosti nebo zdvořilé odpovědi.',
      'Die Bitte s velkým písmenem je podstatné jméno ženského rodu a znamená prosbu nebo žádost.',
      'Množné číslo je die Bitten.',
    ]);

  // 15. a1-bitte-study
  const bitteStudy = findByStudyId(words, 'a1-bitte-study');
  applyArraySet(bitteStudy, 'a1-bitte-study', 'study.explanation',
    () => bitteStudy.study.explanation,
    (v) => { bitteStudy.study.explanation = v; },
    [
      'Hlavní myšlenka: die Bitte je podstatné jméno ženského rodu se členem die a znamená prosbu nebo žádost.',
      'Píše se s velkým písmenem.',
      'Množné číslo je die Bitten.',
      'Pozor: bitte s malým písmenem znamená „prosím“ a není podstatné jméno.',
    ]);

  // 16. a1-das
  const das = findByStudyId(words, 'a1-das');
  applyField(das, 'a1-das', 'study.translation',
    () => das.study.translation,
    (v) => { das.study.translation = v; },
    'Neuter určitý člen',
    'Určitý člen středního rodu');

  // 17. a1-die
  const die = findByStudyId(words, 'a1-die');
  applyField(die, 'a1-die', 'study.explanation',
    () => die.study.explanation,
    (v) => { die.study.explanation = v; },
    'Používá se s podstatnými jmény ženského rodu. V některých větách může „umřít“ fungovat také jako zájmeno nebo vztažné zájmeno.',
    'Používá se s podstatnými jmény ženského rodu. V některých větách může „die“ fungovat také jako zájmeno nebo vztažné zájmeno.');
  applyField(die, 'a1-die', 'study.important[1]',
    () => die.study.important[1],
    (v) => { die.study.important[1] = v; },
    'Množné číslo kostky se také používá pro všechna pohlaví.',
    'V množném čísle se die používá pro všechny rody.');

  // 18. a1-heißen
  const heissen = findByStudyId(words, 'a1-heißen');
  applyField(heissen, 'a1-heißen', 'study.translation',
    () => heissen.study.translation,
    (v) => { heissen.study.translation = v; },
    'Být nazýván • Podlý',
    'Jmenovat se • Znamenat');
  applyField(heissen, 'a1-heißen', 'study.comparison[2].meaning',
    () => heissen.study.comparison[2].meaning,
    (v) => { heissen.study.comparison[2].meaning = v; },
    'Střední',
    'Znamenat');

  // 19. a1-laden-study
  const laden = findByStudyId(words, 'a1-laden-study');
  applyField(laden, 'a1-laden-study', 'study.translation',
    () => laden.study.translation,
    (v) => { laden.study.translation = v; },
    'Nakupovat',
    'Obchod');

  // 20. a1-legen
  const legen = findByStudyId(words, 'a1-legen');
  applyField(legen, 'a1-legen', 'study.explanation[3]',
    () => legen.study.explanation[3],
    (v) => { legen.study.explanation[3] = v; },
    'Na úrovni A1 je nejdůležitější rozdíl: legen = ležet, liegen = ležet.',
    'Na úrovni A1 je nejdůležitější rozdíl: legen = položit, liegen = ležet.');

  // 21. a1-schauen-study
  const schauen = findByStudyId(words, 'a1-schauen-study');
  applyField(schauen, 'a1-schauen-study', 'study.translation',
    () => schauen.study.translation,
    (v) => { schauen.study.translation = v; },
    'Hodinky',
    'Dívat se');
  applyField(schauen, 'a1-schauen-study', 'study.comparison[0].meaning',
    () => schauen.study.comparison[0].meaning,
    (v) => { schauen.study.comparison[0].meaning = v; },
    'Sledovat (aktivně)',
    'Dívat se (aktivně)');

  // 22. a1-sehen
  const sehen = findByStudyId(words, 'a1-sehen');
  applyField(sehen, 'a1-sehen', 'study.comparison[1].meaning',
    () => sehen.study.comparison[1].meaning,
    (v) => { sehen.study.comparison[1].meaning = v; },
    'Hodinky',
    'Dívat se');

  // 23. a1-sich
  const sich = findByStudyId(words, 'a1-sich');
  applyField(sich, 'a1-sich', 'study.explanation[1]',
    () => sich.study.explanation[1],
    (v) => { sich.study.explanation[1] = v; },
    'V češtině se často překládá jako já nebo já.',
    'V češtině se často překládá jako se, sebe nebo sobě podle pádu.');

  // 24. a1-sollen
  const sollen = findByStudyId(words, 'a1-sollen');
  applyField(sollen, 'a1-sollen', 'study.important[0]',
    () => sollen.study.important[0],
    (v) => { sollen.study.important[0] = v; },
    'Byl soll ich machen? je velmi častá věta.',
    'Was soll ich machen? je velmi častá věta.');

  // 25. a1-fernsehen-study
  const fernsehen = findByStudyId(words, 'a1-fernsehen-study');
  applyField(fernsehen, 'a1-fernsehen-study', 'study.important[0]',
    () => fernsehen.study.important[0],
    (v) => { fernsehen.study.important[0] = v; },
    'Fernsehen je dělitelné: sehen + kapradina.',
    'Sloveso fernsehen je dělitelné na fern + sehen.');

  // FALSE_POSITIVE skip a1-in examples
  log.skipped.push({ cardId: 'a1-in', field: 'study.sectionAccents.examples[0].lv.purple[0]', reason: 'FALSE_POSITIVE' });
}

function verifySyntax(filePath) {
  const words = loadWords(filePath);
  if (!Array.isArray(words) || words.length !== 702) {
    throw new Error(`${filePath}: expected 702 cards, got ${words?.length}`);
  }
  return words.length;
}

function main() {
  const sourceWords = loadWords(FILES[0]);
  const words = JSON.parse(JSON.stringify(sourceWords));
  mutate(words);

  for (const filePath of FILES) {
    writeWords(filePath, words);
    verifySyntax(filePath);
    console.log(`Wrote ${filePath}`);
  }

  const uniqueFields = new Set(log.applied.map((a) => `${a.cardId}|${a.field}`));
  console.log(JSON.stringify({
    applied: log.applied.length,
    uniqueFields: uniqueFields.size,
    mismatches: log.mismatches.length,
    skipped: log.skipped.length,
    mismatchDetails: log.mismatches,
    skippedDetails: log.skipped,
  }, null, 2));

  if (log.mismatches.length) process.exit(2);
}

if (require.main === module) main();
module.exports = { mutate, log, loadWords };
