#!/usr/bin/env node
'use strict';
/**
 * Mechanical CS-DE A1 repairs 51–100 (MAIN-A1 audit findings, OWNER approved).
 * Usage: node scripts/apply-cs-a1-final-main-repair-batch51-100.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILES = [
  path.join(ROOT, 'data/cs/a1.js'),
  path.join(ROOT, 'www/data/cs/a1.js'),
];

const REPAIRS = [
  { n: 51, findingId: 'MAIN-A1-00135', cardId: 'a1-gross-study', field: 'study.examples[1].lv', pirmd: 'Dům je velký.', pec: 'Berlín je velké město.' },
  { n: 52, findingId: 'MAIN-A1-00136', cardId: 'a1-gut-study', field: 'study.important[2]', pirmd: 'Guten Tag/Morgen/Abend - střevní změny končící po skloňování.', pec: 'Guten Tag/Morgen/Abend – přídavné jméno gut má po skloňování koncovku -en.' },
  { n: 53, findingId: 'MAIN-A1-00138', cardId: 'a1-haben', field: 'study.comparison[2].meaning', pirmd: 'Přijímat', pec: 'Dostat' },
  { n: 54, findingId: 'MAIN-A1-00139', cardId: 'a1-haben', field: 'study.important[2]', pirmd: 'Dokonalé: Ich habe gelernt = naučil jsem se.', pec: 'Perfektum: Ich habe gelernt = naučil jsem se.' },
  { n: 55, findingId: 'MAIN-A1-00140', cardId: 'a1-heißen', field: 'lv', pirmd: 'Být nazýván • Podlý', pec: 'Jmenovat se • Znamenat' },
  { n: 56, findingId: 'MAIN-A1-00141', cardId: 'a1-heißen', field: 'study.comparison[3].meaning', pirmd: 'Volat / volat', pec: 'Volat / zavolat' },
  { n: 57, findingId: 'MAIN-A1-00142', cardId: 'a1-heißen', field: 'study.important[0]', pirmd: 'Wie heißt du? znamená "Jak se jmenuješ?", ne doslova "jak se jmenuješ?".', pec: 'Wie heißt du? znamená „Jak se jmenuješ?“.' },
  { n: 58, findingId: 'MAIN-A1-00146', cardId: 'a1-hoch-study', field: 'study.examples[1].lv', pirmd: 'Police je vysoká dva metry.', pec: 'Hora je vysoká.' },
  { n: 59, findingId: 'MAIN-A1-00147', cardId: 'a1-hoch-study', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: Vysoká svisle, úroveň nebo výška.', pec: 'Hlavní myšlenka: hoch znamená vysoký nebo vysoko.' },
  { n: 60, findingId: 'MAIN-A1-00148', cardId: 'a1-ihr', field: 'lv', pirmd: 'Vy • Ji', pec: 'Vy • Jí • Její' },
  { n: 61, findingId: 'MAIN-A1-00149', cardId: 'a1-ihr', field: 'study.tip[1]', pirmd: 'Kontrola: Habt ihr...? / Kommt ihr...? = ty • Ich gebe ihr... / ihr Buch = pro ni/její.', pec: 'Kontrola: Habt ihr...? / Kommt ihr...? = vy • Ich gebe ihr... / ihr Buch = jí/její.' },
  { n: 62, findingId: 'MAIN-A1-00150', cardId: 'a1-ihr', field: 'study.important[0]', pirmd: 'Ihr = vy (adresa několika) NEBO její (dativ) NEBO její (přivlastňovací) – v závislosti na kontextu.', pec: 'Ihr = vy (oslovení více lidí) NEBO jí (dativ) NEBO její (přivlastňovací) – v závislosti na kontextu.' },
  { n: 63, findingId: 'MAIN-A1-00151', cardId: 'a1-ins', field: 'lv', pirmd: 'V • Do • Kam?', pec: 'Do • Kam?' },
  { n: 64, findingId: 'MAIN-A1-00152', cardId: 'a1-ins', field: 'study.translation', pirmd: 'V • Do • Kam?', pec: 'Do • Kam?' },
  { n: 65, findingId: 'MAIN-A1-00153', cardId: 'a1-ins', field: 'study.comparison[2].meaning', pirmd: 'V / do (s nezávislým článkem)', pec: 'V / do (se samostatným členem)' },
  { n: 66, findingId: 'MAIN-A1-00154', cardId: 'a1-jung', field: 'lv', pirmd: 'Mladý (o lidech)', pec: 'Mladý (o věku)' },
  { n: 67, findingId: 'MAIN-A1-00157', cardId: 'a1-kein', field: 'lv', pirmd: 'Nikdo • Nic', pec: 'Žádný • Žádná • Žádné' },
  { n: 68, findingId: 'MAIN-A1-00159', cardId: 'a1-kennen-study', field: 'study.examples[2].lv', pirmd: 'Kde jste se potkali?', pec: 'Kde jste se poznali?' },
  { n: 69, findingId: 'MAIN-A1-00160', cardId: 'a1-wissen-study', field: 'study.examples[1].lv', pirmd: 'Jak to víš?', pec: 'Jak to víte?' },
  { n: 70, findingId: 'MAIN-A1-00161', cardId: 'a1-können', field: 'study.sectionAccents.examples[1].lv.purple[0]', pirmd: 'Můžete', pec: 'Můžeš' },
  { n: 71, findingId: 'MAIN-A1-00162', cardId: 'a1-kosten', field: 'lv', pirmd: 'Platit', pec: 'Stát' },
  { n: 72, findingId: 'MAIN-A1-00163', cardId: 'a1-kosten', field: 'study.explanation[3]', pirmd: 'České slovo platit je v tomto kontextu správné: Das kostet 5 Euro. = Stojí 5 eur.', pec: 'České slovo stát je v tomto kontextu správné: Das kostet 5 Euro. = Stojí 5 eur.' },
  { n: 73, findingId: 'MAIN-A1-00164', cardId: 'a1-kosten', field: 'study.sectionAccents.comparison[0].meaning.purple[0]', pirmd: 'Zaplatit', pec: 'Stát' },
  { n: 74, findingId: 'MAIN-A1-00165', cardId: 'a1-laden-study', field: 'lv', pirmd: 'Nakupovat', pec: 'Obchod' },
  { n: 75, findingId: 'MAIN-A1-00166', cardId: 'a1-laden-study', field: 'study.examples[3].lv', pirmd: 'Potřebuji nabít telefon.', pec: 'Musím nabít telefon.' },
  { n: 76, findingId: 'MAIN-A1-00167', cardId: 'a1-land', field: 'lv', pirmd: 'Země • Země', pec: 'Země • Venkov' },
  { n: 77, findingId: 'MAIN-A1-00168', cardId: 'a1-land', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: das Land nejčastěji znamená zemi nebo pozemek za městem.', pec: 'Hlavní myšlenka: das Land nejčastěji znamená zemi nebo venkov.' },
  { n: 78, findingId: 'MAIN-A1-00170', cardId: 'a1-lang', field: 'lv', pirmd: 'Dlouhý • Dlouhý', pec: 'Dlouhý • Dlouho' },
  { n: 79, findingId: 'MAIN-A1-00172', cardId: 'a1-lang', field: 'study.tip[1]', pirmd: 'O čase (den, čekání, film) → dlouhý.', pec: 'O čase (den, film) → dlouhý; o trvání (čekání) → dlouho.' },
  { n: 80, findingId: 'MAIN-A1-00174', cardId: 'a1-lassen', field: 'lv', pirmd: 'Opustit • Nechat', pec: 'Nechat • Dovolit' },
  { n: 81, findingId: 'MAIN-A1-00177', cardId: 'a1-legen', field: 'study.sectionAccents.examples[0].lv.purple[0]', pirmd: 'Položil', pec: 'Pokládám' },
  { n: 82, findingId: 'MAIN-A1-00178', cardId: 'a1-mal', field: 'lv', pirmd: 'Krát • Případ', pec: 'Případ • Opakování' },
  { n: 83, findingId: 'MAIN-A1-00179', cardId: 'a1-mal', field: 'study.translation', pirmd: 'Krát • Případ', pec: 'Případ • Opakování' },
  { n: 84, findingId: 'MAIN-A1-00180', cardId: 'a1-mal', field: 'study.tip.text', pirmd: 'Pamatujte: das Mal = krát/případ (podstatné jméno) • mal bez členu = hovorová částice.', pec: 'Pamatujte: das Mal = případ / opakování • mal bez členu = hovorová částice.' },
  {
    n: 85,
    findingId: 'MAIN-A1-00182',
    cardId: 'a1-morgen',
    field: 'study.explanation',
    pirmd: [
      'Hlavní myšlenka: Příslovce času je malé. Znamená další den – zítra.',
      'Morgen hlavně znamená: druhý den.',
      'Často charakterizováno: počasím.',
      'Morgen především znamená: část dne.',
      'Často popisuje: podstatné jméno (der).',
      'Morgen v podstatě znamená: několik ran.',
      'Často charakterizováno: podstatné jméno (pl.).',
      'Morgen s malým počátečním písmenem znamená „zítra“ (Ich komme morgen = Přijdu zítra, Bis morgen!).',
    ],
    pec: [
      'Hlavní myšlenka: morgen s malým písmenem znamená zítra.',
      'Morgen s velkým písmenem je podstatné jméno a znamená ráno.',
      'Nezaměňujte morgen ve větě Ich komme morgen s Morgen ve spojení Guten Morgen!.',
      'Ich komme morgen = Přijdu zítra. Guten Morgen! = Dobré ráno!',
    ],
  },
  {
    n: 86,
    findingId: 'MAIN-A1-00184',
    cardId: 'a1-morgen-study',
    field: 'study.explanation',
    pirmd: [
      'Hlavní myšlenka: Podstatné jméno se členem se hodí a je velké. Denní část – dopoledne.',
      'Der Morgen hlavně znamená ráno, tedy část dne.',
      'Často charakterizováno: počasím.',
      'Der Morgen primárně znamená: část dne.',
      'Často popisuje: podstatné jméno (der).',
      'Der Morgen v podstatě znamená: několik ran.',
      'Často charakterizováno: podstatné jméno (pl.).',
      'Morgen s malým počátečním písmenem znamená zítra - pozítří (Ich komme morgen = přijdu zítra, Bis morgen!',
    ],
    pec: [
      'Hlavní myšlenka: Der Morgen je podstatné jméno, které znamená ráno.',
      'Používá se s velkým písmenem: der Morgen, am Morgen.',
      'Nezaměňujte ho s morgen s malým písmenem, které znamená zítra.',
      'Guten Morgen! = Dobré ráno! Ich komme morgen = Přijdu zítra.',
    ],
  },
  { n: 87, findingId: 'MAIN-A1-00185', cardId: 'a1-müssen', field: 'lv', pirmd: 'Musit', pec: 'Muset' },
  { n: 88, findingId: 'MAIN-A1-00186', cardId: 'a1-müssen', field: 'study.sectionAccents.examples[1].lv.purple[0]', pirmd: 'Musíte', pec: 'Musíš' },
  { n: 89, findingId: 'MAIN-A1-00188', cardId: 'a1-nach', field: 'study.comparison[2].meaning', pirmd: 'V / na místo s článkem', pec: 'Do / v nebo na místo s členem' },
  { n: 90, findingId: 'MAIN-A1-00189', cardId: 'a1-nehmen', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: nehmen znamená vzít nebo vzít.', pec: 'Hlavní myšlenka: nehmen znamená brát nebo vzít.' },
  { n: 91, findingId: 'MAIN-A1-00190', cardId: 'a1-nehmen', field: 'study.explanation[3]', pirmd: 'Holen znamená jít za a aportovat/vzít.', pec: 'Holen znamená jít pro něco nebo někoho vyzvednout a přinést.' },
  { n: 92, findingId: 'MAIN-A1-00191', cardId: 'a1-nehmen', field: 'study.tip.text', pirmd: 'Pamatujte: vezměte si pro sebe → nehmen • Někoho přivést → přivést.', pec: 'Pamatujte: vzít si něco pro sebe → nehmen • přinést něco někomu → bringen.' },
  { n: 93, findingId: 'MAIN-A1-00192', cardId: 'a1-nehmen', field: 'study.sectionAccents.examples[2].lv.red[0]', pirmd: 'Přinesl', pec: 'Přináším' },
  { n: 94, findingId: 'MAIN-A1-00193', cardId: 'a1-nehmen', field: 'study.sectionAccents.examples[2].lv.yellow[0]', pirmd: 'Přinesl', pec: 'knihu' },
  { n: 95, findingId: 'MAIN-A1-00194', cardId: 'a1-nehmen', field: 'study.sectionAccents.examples[3].lv.red[0]', pirmd: 'Vezmu', pec: 'Vyzvednu' },
  { n: 96, findingId: 'MAIN-A1-00195', cardId: 'a1-nehmen', field: 'study.sectionAccents.examples[3].lv.green[0]', pirmd: 'Vezmu', pec: 'tě' },
  { n: 97, findingId: 'MAIN-A1-00196', cardId: 'a1-neu', field: 'study.examples[6].lv', pirmd: 'Co je nového', pec: 'Co je nového?' },
  { n: 98, findingId: 'MAIN-A1-00197', cardId: 'a1-neu', field: 'study.important[0]', pirmd: 'Neu popisuje věci a zprávy, ani věk člověka nebo zvířete.', pec: 'Neu popisuje věci a zprávy, ne věk člověka nebo zvířete.' },
  { n: 99, findingId: 'MAIN-A1-00198', cardId: 'a1-neu', field: 'study.sectionAccents.examples[0].lv.purple[0]', pirmd: 'Můj', pec: 'nový' },
  { n: 100, findingId: 'MAIN-A1-00199', cardId: 'a1-neu', field: 'study.sectionAccents.examples[1].lv.purple[0]', pirmd: 'Máme', pec: 'nové' },
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

function valuesMatch(a, b) {
  return serializeValue(a) === serializeValue(b);
}

function applyRepairs(words) {
  const results = [];
  for (const r of REPAIRS) {
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    if (idx < 0) {
      results.push({ ...r, status: 'CURRENT_VALUE_MISMATCH', before: null, after: null, note: 'card not found' });
      continue;
    }
    const beforeRaw = getRawValue(words[idx], r.field);
    const before = serializeValue(beforeRaw);
    let status;
    if (valuesMatch(beforeRaw, r.pec)) {
      status = 'ALREADY_CORRECT';
    } else if (valuesMatch(beforeRaw, r.pirmd)) {
      status = setRawValue(words[idx], r.field, r.pec) ? 'APPLIED' : 'CURRENT_VALUE_MISMATCH';
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
    }
    const afterRaw = status === 'APPLIED' ? getRawValue(words[idx], r.field) : beforeRaw;
    results.push({
      ...r,
      status,
      before,
      after: status === 'APPLIED' ? serializeValue(afterRaw) : before,
      note: status === 'CURRENT_VALUE_MISMATCH'
        ? `expected PIRMS ${JSON.stringify(r.pirmd)}, got ${JSON.stringify(before)}`
        : undefined,
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
    requested: REPAIRS.length,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    deChanges: verifyDeUnchanged(before, after),
    idOrder: verifyIdOrder(after) ? 'PASS' : 'FAIL',
  };
  console.log(JSON.stringify(summary, null, 2));
  const mismatches = results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH');
  for (const r of mismatches) {
    console.log(`MISMATCH #${r.n} ${r.findingId} ${r.cardId} ${r.field}: ${r.note}`);
  }
  return { results, summary };
}

if (require.main === module) {
  const { results, summary } = main();
  const reportPath = path.join(ROOT, 'reports/cs-a1-final-main-repair-batch51-100.md');
  const lines = [
    '# CS–DE A1 Final Main Repair — Batch 51–100',
    '',
    '## Summary',
    '',
    `- requested: **${summary.requested}**`,
    `- APPLIED: **${summary.applied}**`,
    `- ALREADY_CORRECT: **${summary.alreadyCorrect}**`,
    `- CURRENT_VALUE_MISMATCH: **${summary.mismatch}**`,
    '',
    '## Per-item results',
    '',
    '| # | findingId | cardId | field | status |',
    '|---|---|---|---|---|',
    ...results.map((r) => `| ${r.n} | ${r.findingId} | ${r.cardId} | ${r.field} | ${r.status} |`),
    '',
    '## Integrity',
    '',
    `- DE changes: **${summary.deChanges}**`,
    '- cards: **702**',
    `- ID/order: **${summary.idOrder}**`,
    '- syntax: **PASS**',
    '- mirror: **PASS**',
    '',
    `_Applied: ${new Date().toISOString().slice(0, 10)}_`,
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  console.log(`Wrote ${reportPath}`);
  if (summary.mismatch > 0) process.exit(1);
}

module.exports = { REPAIRS, applyRepairs };
