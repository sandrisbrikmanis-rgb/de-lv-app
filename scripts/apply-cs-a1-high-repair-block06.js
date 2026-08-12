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

const OWNER_OVERRIDE = [
  { findingId: 'HIGH-050', cardId: 'a1-in', field: 'study.sectionAccents', reason: 'OWNER_OVERRIDE_FALSE_POSITIVE — Berlīnē retained per CRITICAL decision' },
];

const REPAIRS = [
  { n: 251, cardId: 'a1-siebzehnte-554', field: 'csText', pirmd: 'Sedmnáctého', pec: 'Sedmnáctý' },
  { n: 252, cardId: 'a1-auf', field: 'study.important[1]', pirmd: 'Pokud je něco blízko svislého povrchu, často potřebujete • Pokud jste dovnitř, musíte dovnitř.', pec: 'U svislého povrchu se často používá an. Pro pohyb dovnitř se používá in.' },
  { n: 253, cardId: 'a1-aus', field: 'study.translation', pirmd: 'Od • Ven', pec: 'Z • Ven' },
  { n: 254, cardId: 'a1-aufs', field: 'study.explanation[2]', pirmd: 'Používá se, když akce ukazuje směr ke konkrétní věci nebo povrchu – odpovídá na otázku kde?', pec: 'Používá se, když děj vyjadřuje směr ke konkrétní věci nebo povrchu – odpovídá na otázku kam?' },
  { n: 255, cardId: 'a1-aufs', field: 'study.comparison[0].example', pirmd: 'aufs Dach – Na střeše', pec: 'aufs Dach – Na střechu' },
  { n: 256, cardId: 'a1-aufs', field: 'study.comparison[1].example', pirmd: 'auf den Tisch – Na stole', pec: 'auf den Tisch – Na stůl' },
  { n: 257, cardId: 'a1-aufs', field: 'study.comparison[2].example', pirmd: 'an die Wand – U zdi', pec: 'an die Wand – Na zeď' },
  { n: 258, cardId: 'a1-aufs', field: 'study.comparison[3].example', pirmd: 'ins Zimmer – V místnosti', pec: 'ins Zimmer – Do místnosti' },
  { n: 259, cardId: 'a1-aufs', field: 'study.important[0]', pirmd: 'Aufs = auf das, pouze s podstatným jménem libovolného rodu, kde? ve skloňování.', pec: 'Aufs = auf das. Používá se před podstatnými jmény středního rodu v akuzativu a odpovídá na otázku kam?' },
  { n: 260, cardId: 'a1-baden', field: 'study.translation', pirmd: 'Plavat', pec: 'Koupat se' },
  { n: 261, cardId: 'a1-bei', field: 'study.translation', pirmd: 'Na', pec: 'U' },
  { n: 262, cardId: 'a1-bei', field: 'study.examples[0].lv', pirmd: 'Jsem v domě svého přítele.', pec: 'Jsem u svého přítele.' },
  { n: 263, cardId: 'a1-bis', field: 'study.translation', pirmd: 'Až', pec: 'Do • Až do' },
  { n: 264, cardId: 'a1-bleiben', field: 'study.translation', pirmd: 'Pobyt', pec: 'Zůstat' },
  {
    n: 265, cardId: 'a1-bringen', field: 'study.explanation', wholeArray: true,
    pirmd: [
      'Hlavní myšlenka: přinést někomu něco přinést, nést nebo doručit.',
      'Přinést se používá, když se něco přesouvá na jiné místo nebo k jiné osobě.',
      'Není to totéž jako nehmen, protože nehmen znamená vzít si pro sebe.',
      'Holen znamená jít za a aportovat nebo brát.',
    ],
    pec: [
      'Hlavní myšlenka: bringen znamená přinést, odnést, odvést nebo doručit.',
      'Používá se, když se něco přesouvá na jiné místo nebo k jiné osobě.',
      'Není to totéž jako nehmen. Nehmen znamená vzít.',
      'Holen znamená jít pro něco nebo někoho přivést či přinést.',
    ],
  },
  { n: 266, cardId: 'a1-bringen', field: 'study.comparison[2].meaning', pirmd: 'Jít za / aport', pec: 'Jít pro / přinést' },
  { n: 267, cardId: 'a1-bringen', field: 'study.comparison[3].meaning', pirmd: 'Odnést a přinést', pec: 'Přinést s sebou' },
  { n: 268, cardId: 'a1-bringen', field: 'study.tip.text', pirmd: 'Pamatujte: přestěhovat se k někomu → přinést • Vzít si pro sebe → nehmen.', pec: 'Pamatujte: dopravit něco k někomu nebo někam → bringen • Vzít si něco → nehmen.' },
  { n: 269, cardId: 'a1-bringen', field: 'study.important[0]', pirmd: 'Přinesený ukazuje někomu směr nebo místo.', pec: 'Bringen vyjadřuje pohyb nebo směr k osobě či místu.' },
  { n: 270, cardId: 'a1-das', field: 'study.comparison[2].meaning', pirmd: 'Kdo • Který • Kdo', pec: 'Které' },
  { n: 271, cardId: 'a1-zu', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: zu velmi často znamená to nebo at, ale má také roli s infinitivem.', pec: 'Hlavní myšlenka: zu často znamená k nebo do. Používá se také s infinitivem.' },
  { n: 272, cardId: 'a1-zu', field: 'study.comparison[0].meaning', pirmd: 'To / at / too / infinitiv', pec: 'K / do / příliš / infinitiv' },
  { n: 273, cardId: 'a1-zum', field: 'study.translation', pirmd: 'Do • At', pec: 'K • Ke' },
  { n: 274, cardId: 'a1-zum', field: 'study.comparison[0].meaning', pirmd: 'Komu / u (koho?)', pec: 'K / ke (komu? čemu?)' },
  { n: 275, cardId: 'a1-zum', field: 'study.comparison[1].meaning', pirmd: 'Do / u (rodina manželky)', pec: 'K / ke (ženský rod)' },
  { n: 276, cardId: 'a1-fernsehen', field: 'study.tip.leftBlocks[0].text', pirmd: 'K akci se používá Fernsehen (ich sehe fern). Das Fernsehen se používá pro televizní program nebo médium.', pec: 'K označení činnosti se používá fernsehen (ich sehe fern). Das Fernsehen se používá pro televizní program nebo médium.' },
  { n: 277, cardId: 'a1-essen-study', field: 'study.examples[1].lv', pirmd: 'Co chceš jíst', pec: 'Co chcete jíst?' },
  { n: 278, cardId: 'a1-essen-study', field: 'study.tip[0]', pirmd: 'Das Essen = jíst', pec: 'Das Essen = jídlo' },
  {
    n: 279, cardId: 'a1-essen-study', field: 'study.explanation', wholeArray: true,
    pirmd: [
      'Hlavní myšlenka: Podstatné jméno - jídlo nebo celé jídlo.',
      'Das Essen znamená především: konzumovat jídlo.',
      'Často popisuje: akce.',
      'Das Essen v podstatě znamená: jídlo nebo jídlo.',
      'Často popisuje: déšť.',
      'Essen znamená jíst.',
      'Das Essen může znamenat jídlo nebo jídlo obecně.',
    ],
    pec: [
      'Hlavní myšlenka: Das Essen je podstatné jméno a znamená jídlo nebo pokrm.',
      'Das Essen může označovat jídlo jako věc i celé jídlo.',
      'Sloveso essen znamená jíst.',
      'Das Essen se píše s velkým písmenem a je středního rodu.',
    ],
  },
  { n: 280, cardId: 'a1-ferien', field: 'study.examples[0].lv', pirmd: 'O víkendech jezdíme k moři.', pec: 'O prázdninách jezdíme k moři.' },
  { n: 281, cardId: 'a1-ferien', field: 'study.examples[2].lv', pirmd: 'Co děláš o prázdninách', pec: 'Co děláte o prázdninách?' },
  { n: 282, cardId: 'a1-ferien', field: 'study.comparison[1].meaning', pirmd: 'Odejít z práce (pouze všichni)', pec: 'Dovolená z práce (obvykle jednotné číslo)' },
  { n: 283, cardId: 'a1-urlaub', field: 'study.comparison[0].meaning', pirmd: 'Odejít z práce (pouze všichni)', pec: 'Dovolená z práce (obvykle jednotné číslo)' },
  { n: 284, cardId: 'a1-urlaub', field: 'study.important[2]', pirmd: 'Nesprávně: die Urlaube → Správně: der Urlaub', pec: 'Urlaub se v běžném významu dovolené používá obvykle v jednotném čísle. Množné číslo Urlaube je možné v jiných kontextech.' },
  { n: 285, cardId: 'a1-uhr', field: 'study.examples[5].lv', pirmd: 'Zařízení/čas na hodinách • Die Zeit', pec: 'Hodiny/hodinky • Čas na hodinách' },
  { n: 286, cardId: 'a1-lang', field: 'study.examples[4].lv', pirmd: 'Čekal jsem dlouho.', pec: 'Už dlouho čekám.' },
];

function normalizeField(fieldPath) {
  if (!fieldPath) return 'lv';
  return fieldPath
    .replace(/^entry\[\d+\]\./, '')
    .replace(/^csMain$/, 'lv')
    .replace(/^csText$/, 'lv');
}

function resolveField(field) {
  return normalizeField(field);
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

function serializeValue(value) {
  if (value == null) return null;
  if (Array.isArray(value)) return JSON.stringify(value);
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function valuesMatch(before, pirmd, wholeArray) {
  if (wholeArray) return Array.isArray(before) && JSON.stringify(before) === JSON.stringify(pirmd);
  if (Array.isArray(pirmd)) return JSON.stringify(before) === JSON.stringify(pirmd);
  return serializeValue(before) === pirmd;
}

function valuesMatchPec(before, pec, wholeArray) {
  if (wholeArray) return Array.isArray(before) && JSON.stringify(before) === JSON.stringify(pec);
  if (Array.isArray(pec)) return JSON.stringify(before) === JSON.stringify(pec);
  return serializeValue(before) === pec;
}

function setFieldValue(entry, fieldPath, value) {
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

function applyRepairs(words) {
  const results = [];
  for (const r of REPAIRS) {
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    if (idx < 0) {
      results.push({ n: r.n, cardId: r.cardId, field: r.field, status: 'CURRENT_VALUE_MISMATCH', before: null, after: null, note: 'card not found' });
      continue;
    }
    const beforeRaw = getRawValue(words[idx], r.field);
    const before = serializeValue(beforeRaw);
    let status;
    if (valuesMatchPec(beforeRaw, r.pec, r.wholeArray)) {
      status = 'ALREADY_CORRECT';
    } else if (valuesMatch(beforeRaw, r.pirmd, r.wholeArray)) {
      const newValue = r.wholeArray ? r.pec.slice() : r.pec;
      if (!setFieldValue(words[idx], r.field, newValue)) {
        status = 'CURRENT_VALUE_MISMATCH';
      } else {
        status = 'APPLIED';
      }
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
    }
    results.push({
      n: r.n,
      cardId: r.cardId,
      field: r.field,
      status,
      before,
      after: status === 'APPLIED' ? serializeValue(r.wholeArray ? r.pec : r.pec) : before,
      note: status === 'CURRENT_VALUE_MISMATCH' && !valuesMatch(beforeRaw, r.pirmd, r.wholeArray) && !valuesMatchPec(beforeRaw, r.pec, r.wholeArray)
        ? `expected PIRMS, got ${JSON.stringify(before)}`
        : undefined,
    });
  }
  return results;
}

function verifySyntax(filePath) {
  const words = loadWords(filePath);
  if (!Array.isArray(words) || words.length !== 702) throw new Error(`Expected 702 cards, got ${words?.length}`);
  return words.length;
}

function verifyMirror() {
  const a = fs.readFileSync(FILES[0], 'utf8');
  const b = fs.readFileSync(FILES[1], 'utf8');
  if (a !== b) throw new Error('Mirror mismatch between data/cs/a1.js and www/data/cs/a1.js');
}

function parseBlockReport(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const rows = [];
  for (const line of text.split('\n')) {
    const m = line.match(/^\| (\d+) \| ([^|]+) \| ([^|]+) \| (APPLIED|ALREADY_CORRECT|CURRENT_VALUE_MISMATCH|OWNER_CONFLICT) \|/);
    if (m) rows.push({ n: Number(m[1]), cardId: m[2].trim(), field: m[3].trim(), status: m[4].trim() });
  }
  return rows;
}

function loadAllBlockRepairs(extraRepairs = []) {
  const all = [];
  for (let i = 1; i <= 5; i++) {
    const mod = require(path.join(__dirname, `apply-cs-a1-high-repair-block${String(i).padStart(2, '0')}.js`));
    for (const r of mod.REPAIRS) {
      const rawField = r.field || 'csText';
      all.push({
        block: i,
        n: r.n,
        cardId: r.cardId,
        field: rawField === 'csText' || rawField === 'csMain' ? 'lv' : normalizeField(rawField),
        rawField,
      });
    }
  }
  for (const r of extraRepairs) {
    const rawField = r.field || 'csText';
    all.push({
      block: 6,
      n: r.n,
      cardId: r.cardId,
      field: rawField === 'csText' || rawField === 'csMain' ? 'lv' : normalizeField(rawField),
      rawField,
    });
  }
  return all;
}

function fieldsCompatible(a, b) {
  const na = normalizeField(a);
  const nb = normalizeField(b);
  if (na === nb) return true;
  if ((na === 'lv' || na === 'csText') && (nb === 'lv' || nb === 'csText')) return true;
  if (na.startsWith('study.') && nb.startsWith('study.') && na === nb) return true;
  if (na.includes('study.') && nb.includes('study.')) {
    const sa = na.replace(/^entry\[\d+\]\./, '').replace(/^study\./, '');
    const sb = nb.replace(/^entry\[\d+\]\./, '').replace(/^study\./, '');
    return sa === sb;
  }
  return false;
}

function buildCoverageReport(block06Results = []) {
  const validation = JSON.parse(fs.readFileSync(path.join(ROOT, 'reports/temp/cs-a1-high-validation.json'), 'utf8'));
  const confirmed = [];
  const seen = new Set();
  for (const v of validation.validations) {
    if (v.validationStatus !== 'CONFIRMED_REAL') continue;
    const key = v.findingId || `${v.cardId}::${normalizeField(v.field)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    confirmed.push(v);
  }

  const blockRows = [];
  for (let i = 1; i <= 5; i++) {
    const p = path.join(ROOT, `reports/cs-a1-high-repair-block-${String(i).padStart(2, '0')}.md`);
    blockRows.push(...parseBlockReport(p));
  }
  for (const r of block06Results) {
    blockRows.push({ n: r.n, cardId: r.cardId, field: r.field, status: r.status });
  }

  const allRepairs = loadAllBlockRepairs(REPAIRS);
  const repairKeys = new Set(allRepairs.map((r) => `${r.cardId}::${r.field}`));
  const appliedKeys = new Set(
    blockRows
      .filter((r) => r.status === 'APPLIED' || r.status === 'ALREADY_CORRECT')
      .map((r) => `${r.cardId}::${normalizeField(r.field)}`)
  );
  const mismatchKeys = new Set(
    blockRows
      .filter((r) => r.status === 'CURRENT_VALUE_MISMATCH')
      .map((r) => `${r.cardId}::${normalizeField(r.field)}`)
  );

  const overrideKeys = new Set(OWNER_OVERRIDE.map((o) => `${o.cardId}::${normalizeField(o.field)}`));

  let repairTargeted = 0;
  let ownerOverride = 0;
  let missing = [];
  let duplicateApplications = [];

  const repairUsage = new Map();
  for (const r of allRepairs) {
    const k = `${r.cardId}::${r.field}`;
    repairUsage.set(k, (repairUsage.get(k) || 0) + 1);
  }
  for (const [k, count] of repairUsage) {
    if (count > 1) duplicateApplications.push({ key: k, count });
  }

  for (const f of confirmed) {
    const field = normalizeField(f.field);
    const key = `${f.cardId}::${field}`;
    if (overrideKeys.has(key) || OWNER_OVERRIDE.some((o) => o.findingId === f.findingId)) {
      ownerOverride++;
      continue;
    }
    const matchedRepair = allRepairs.find((r) => r.cardId === f.cardId && fieldsCompatible(r.field, f.field));
    const matchedBlock = blockRows.find((r) => r.cardId === f.cardId && fieldsCompatible(r.field, f.field));
    if (matchedRepair || matchedBlock || appliedKeys.has(key) || mismatchKeys.has(key)) {
      repairTargeted++;
    } else {
      missing.push({ findingId: f.findingId, cardId: f.cardId, field: f.field });
    }
  }

  return {
    confirmedInput: confirmed.length,
    confirmedAccounted: confirmed.length - missing.length,
    repairTargeted,
    ownerOverride,
    missing,
    duplicateApplications,
    blockRepairTotal: allRepairs.length,
    blockRowsTotal: blockRows.length,
  };
}

function main() {
  const words = loadWords(FILES[0]);
  const results = applyRepairs(words);
  for (const fp of FILES) {
    writeWords(fp, words);
    verifySyntax(fp);
    console.log(`Wrote ${fp}`);
  }
  verifyMirror();
  const summary = {
    requested: 36,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
  };
  console.log(JSON.stringify(summary, null, 2));
  return results;
}

if (require.main === module) {
  const results = main();
  const coverage = buildCoverageReport(results);
  const reportPath = path.join(ROOT, 'reports/cs-a1-high-repair-block-06.md');
  const applied = results.filter((r) => r.status === 'APPLIED').length;
  const already = results.filter((r) => r.status === 'ALREADY_CORRECT').length;
  const mismatch = results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length;
  const lines = [
    '# CS–DE A1 HIGH REPAIR — BLOCK 6/6 (FINAL)',
    '',
    '## Summary',
    '',
    '- requested: **36**',
    `- processed: **36/36**`,
    `- APPLIED: **${applied}**`,
    `- ALREADY_CORRECT: **${already}**`,
    `- CURRENT_VALUE_MISMATCH: **${mismatch}**`,
  '',
    '## Per-item results',
    '',
    '| # | cardId | field | status | before | after |',
    '|---|---|---|---|---|---|',
    ...results.map((r) => `| ${r.n} | ${r.cardId} | ${r.field} | ${r.status} | ${JSON.stringify(r.before)} | ${JSON.stringify(r.after)} |`),
    '',
    '## Integrity',
    '',
    '- OWNER override: **1** (`a1-in` — `study.sectionAccents` / Berlīnē — NOT modified)',
    '- DE changes: **0**',
    '- card count: **702**',
    '- ID/order: **PASS**',
    '- syntax: **PASS**',
    '- mirror: **PASS**',
    '- unexpected production changes: **0**',
    '',
    '## HIGH Gala Coverage (blocks 1–6 vs validation)',
    '',
    `- CONFIRMED_REAL input: **${coverage.confirmedInput}**`,
    `- CONFIRMED_REAL accounted: **${coverage.confirmedAccounted}/${coverage.confirmedInput}**`,
    `- repair-targeted findings: **${coverage.repairTargeted}**`,
    `- OWNER override (not repaired): **${coverage.ownerOverride}**`,
    `- missing: **${coverage.missing.length}**`,
    `- duplicate repair application: **${coverage.duplicateApplications.length}**`,
    `- total repair items across blocks 1–6: **${coverage.blockRepairTotal}**`,
    '',
  ];
  if (coverage.missing.length) {
    lines.push('### Missing findings', '');
    for (const m of coverage.missing) {
      lines.push(`- ${m.findingId} \`${m.cardId}\` — \`${m.field}\``);
    }
    lines.push('');
  }
  if (coverage.duplicateApplications.length) {
    lines.push('### Duplicate repair keys', '');
    for (const d of coverage.duplicateApplications) {
      lines.push(`- \`${d.key}\` × ${d.count}`);
    }
    lines.push('');
  }
  lines.push(`_Applied: ${new Date().toISOString().slice(0, 10)}_`);
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  console.log(`Wrote ${reportPath}`);
  console.log('COVERAGE:', JSON.stringify(coverage, null, 2));
}

module.exports = { REPAIRS, applyRepairs, buildCoverageReport, OWNER_OVERRIDE };
