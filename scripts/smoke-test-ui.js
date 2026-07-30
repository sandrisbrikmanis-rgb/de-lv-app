#!/usr/bin/env node
/**
 * {lang}->DE UI smoke tests for benchmark flashcards and study cards.
 * Generalized from the LT-specific smoke-test-lt-ui.js per
 * LANGUAGE_AUDIT_STANDARD.md §5.
 *
 * Run: node scripts/smoke-test-ui.js --lang=lt
 * Optional: UI_SMOKE_BASE=http://127.0.0.1:8765 node scripts/smoke-test-ui.js --lang=lt
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');
const { ROOT, parseLangArg, dataDir, fileExists } = require('./lib/audit-common');

const lang = parseLangArg('lt');
const DIR = dataDir(lang);

const BENCHMARKS = [
  { query: 'der Vorname', expectFlashcard: true, label: 'Vorname normal flashcard' },
  { query: 'die Kiste', expectFlashcard: true, label: 'Kiste normal flashcard' },
  { query: 'das Essen', expectFlashcard: false, label: 'Essen standardStudy' },
  { query: 'bitte', expectFlashcard: false, label: 'bitte study accents' },
  { query: 'das Kino', expectFlashcard: true, label: 'Kino flashcard not minimalStudy shell' },
  { query: 'sich verlaufen', expectFlashcard: true, label: 'sich verlaufen flashcard' },
  { query: 'verlaufen', expectFlashcard: true, label: 'verlaufen flashcard' },
];

function hasContent(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.some(hasContent);
  if (typeof value === 'object') return Object.values(value).some(hasContent);
  return Boolean(value);
}

function cardHasRenderableStudy(study) {
  if (!study || typeof study !== 'object') return false;
  const layout = study.layout || 'standardStudy';
  if (layout === 'minimalStudy') {
    return hasContent(study.note) || hasContent(study.forms) || hasContent(study.tip) || hasContent(study.examples);
  }
  if (layout === 'comparisonStudy') {
    return hasContent(study.words) || hasContent(study.items) || hasContent(study.terms)
      || hasContent(study.comparison) || hasContent(study.comparisonTable)
      || hasContent(study.subtitle) || hasContent(study.subtitleText)
      || hasContent(study.title) || hasContent(study.lead) || hasContent(study.question);
  }
  return hasContent(study.explanation) || hasContent(study.explanationLines)
    || hasContent(study.examples) || hasContent(study.comparison)
    || hasContent(study.tip) || hasContent(study.important) || hasContent(study.info)
    || hasContent(study.words) || hasContent(study.items) || hasContent(study.terms);
}

function loadCards() {
  for (const name of ['A1_WORDS', 'A2_WORDS', 'B1_WORDS', 'B2_WORDS', 'C1_WORDS', 'C2_WORDS', 'SENTENCE_ENTRIES', 'VERB_ENTRIES']) delete global[name];
  const all = [];
  for (const [fileName, varName] of [
    ['a1.js', 'A1_WORDS'], ['a2.js', 'A2_WORDS'], ['b1.js', 'B1_WORDS'], ['b2.js', 'B2_WORDS'],
    ['c1.js', 'C1_WORDS'], ['c2.js', 'C2_WORDS'], ['sentences.js', 'SENTENCE_ENTRIES'], ['verbs.js', 'VERB_ENTRIES']
  ]) {
    const rel = `${DIR}/${fileName}`;
    if (!fileExists(rel)) continue;
    eval(fs.readFileSync(path.join(ROOT, rel), 'utf8').replace(/window\./g, 'global.'));
    const arr = global[varName];
    if (Array.isArray(arr)) all.push(...arr);
  }
  return all;
}

function findCard(cards, query) {
  const q = String(query).toLowerCase();
  return cards.find((c) => {
    const de = String(c.de || '').toLowerCase();
    const art = String(c.de_article || '').toLowerCase();
    const full = art ? `${art} ${de}` : de;
    return full === q || de === q;
  });
}

function runRoutingSmoke() {
  const cards = loadCards();
  const failures = [];
  for (const bench of BENCHMARKS) {
    const card = findCard(cards, bench.query);
    if (!card) {
      failures.push(`${bench.label}: card not found (${bench.query})`);
      continue;
    }
    const usesStudy = cardHasRenderableStudy(card.study);
    const expectStudy = !bench.expectFlashcard;
    if (usesStudy !== expectStudy) {
      failures.push(`${bench.label}: expected ${expectStudy ? 'study' : 'flashcard'}, got ${usesStudy ? 'study' : 'flashcard'}`);
    }
  }
  return { total: cards.length, failures };
}

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body }));
    }).on('error', reject);
  });
}

async function runHttpSmoke(baseUrl) {
  const failures = [];
  const index = await fetchPage(`${baseUrl}/index.html?lang=${lang}`);
  if (index.status !== 200) failures.push(`index.html status ${index.status}`);
  const datasets = await fetchPage(`${baseUrl}/languages/datasets.js`);
  if (datasets.status !== 200) failures.push(`datasets.js status ${datasets.status}`);
  if (!new RegExp(lang, 'i').test(datasets.body)) failures.push(`"${lang}" language not referenced in languages/datasets.js`);
  for (const bench of BENCHMARKS.slice(0, 4)) {
    const page = await fetchPage(`${baseUrl}/index.html?lang=${lang}&card=${encodeURIComponent(bench.query)}`);
    if (page.status !== 200) {
      failures.push(`${bench.query}: page status ${page.status}`);
      continue;
    }
    if (bench.expectFlashcard && page.body.includes('has-minimal-study-card')) {
      failures.push(`${bench.query}: unexpected minimalStudy shell in HTML`);
    }
    if (bench.expectFlashcard && page.body.includes('card-study-inner') && !page.body.includes('has-study-card')) {
      failures.push(`${bench.query}: unexpected study inner without study card class`);
    }
  }
  return failures;
}

function startServer(root, port) {
  return new Promise((resolve) => {
    const proc = spawn('python3', ['-m', 'http.server', String(port)], { cwd: root, stdio: 'ignore' });
    setTimeout(() => resolve(proc), 500);
  });
}

async function main() {
  const routing = runRoutingSmoke();
  const report = {
    lang,
    routing: { totalCards: routing.total, failures: routing.failures },
    http: { ran: false, failures: [] },
    pass: routing.failures.length === 0,
  };

  const base = process.env.UI_SMOKE_BASE || process.env.LT_UI_BASE;
  if (base) {
    report.http.ran = true;
    report.http.failures = await runHttpSmoke(base.replace(/\/$/, ''));
    report.pass = report.pass && report.http.failures.length === 0;
  } else {
    const port = 8765;
    const proc = await startServer(ROOT, port);
    try {
      report.http.ran = true;
      report.http.failures = await runHttpSmoke(`http://127.0.0.1:${port}`);
      report.pass = report.pass && report.http.failures.length === 0;
    } finally {
      proc.kill('SIGTERM');
    }
  }

  console.log(JSON.stringify(report, null, 2));
  process.exit(report.pass ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
