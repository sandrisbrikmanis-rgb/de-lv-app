#!/usr/bin/env node
/**
 * LT→DE UI smoke tests for benchmark flashcards and study cards.
 * Run: node scripts/smoke-test-lt-ui.js
 * Optional: LT_UI_BASE=http://127.0.0.1:8765 node scripts/smoke-test-lt-ui.js
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

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

function loadLtCards() {
  delete global.A1_WORDS; delete global.A2_WORDS; delete global.B1_WORDS; delete global.B2_WORDS;
  delete global.C1_WORDS; delete global.C2_WORDS; delete global.SENTENCE_ENTRIES; delete global.VERB_ENTRIES;
  for (const file of ['a1.js', 'a2.js', 'b1.js', 'b2.js', 'c1.js', 'c2.js', 'sentences.js', 'verbs.js']) {
    eval(fs.readFileSync(path.join(process.cwd(), 'data/lt', file), 'utf8').replace(/window\./g, 'global.'));
  }
  return [
    ...global.A1_WORDS, ...global.A2_WORDS, ...global.B1_WORDS, ...global.B2_WORDS,
    ...global.C1_WORDS, ...global.C2_WORDS, ...global.SENTENCE_ENTRIES, ...global.VERB_ENTRIES,
  ];
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
  const cards = loadLtCards();
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
  const index = await fetchPage(`${baseUrl}/index.html?lang=lt`);
  if (index.status !== 200) failures.push(`index.html status ${index.status}`);
  const datasets = await fetchPage(`${baseUrl}/languages/datasets.js`);
  if (datasets.status !== 200) failures.push(`datasets.js status ${datasets.status}`);
  if (!/lt/i.test(datasets.body)) failures.push('LT language not referenced in languages/datasets.js');
  if (/data\/lv\//i.test(index.body) && !/lang=lt|language.*lt/i.test(index.body)) {
    failures.push('possible LV fallback without LT language switch');
  }
  for (const bench of BENCHMARKS.slice(0, 4)) {
    const page = await fetchPage(`${baseUrl}/index.html?lang=lt&card=${encodeURIComponent(bench.query)}`);
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
    routing: { totalCards: routing.total, failures: routing.failures },
    http: { ran: false, failures: [] },
    pass: routing.failures.length === 0,
  };

  const base = process.env.LT_UI_BASE;
  if (base) {
    report.http.ran = true;
    report.http.failures = await runHttpSmoke(base.replace(/\/$/, ''));
    report.pass = report.pass && report.http.failures.length === 0;
  } else {
    const port = 8765;
    const proc = await startServer(process.cwd(), port);
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
