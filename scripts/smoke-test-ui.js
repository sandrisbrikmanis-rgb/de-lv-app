#!/usr/bin/env node
/**
 * {lang}->DE UI smoke tests for benchmark flashcards and study cards.
 * Generalized from the LT-specific smoke-test-lt-ui.js per
 * PROJECT_LANGUAGE_MASTER_STANDARD.md §7.7.
 *
 * Run: node scripts/smoke-test-ui.js --lang=lt
 * Optional: UI_SMOKE_BASE=http://127.0.0.1:8765 node scripts/smoke-test-ui.js --lang=lt
 *
 * HTTP smoke verifies registry.js + per-language manifest.js (not datasets.js
 * substring matching) for language registration and dataset paths.
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const vm = require('vm');
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

function toUrlPath(relPath) {
  return `/${String(relPath || '').replace(/^\.\//, '')}`;
}

function runWindowScript(body) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(body, ctx);
  return ctx.window;
}

function getRegistryEntry(registryBody, code) {
  const registry = runWindowScript(registryBody).AppLanguageRegistry;
  if (!registry || typeof registry.get !== 'function') {
    return { error: 'AppLanguageRegistry missing or invalid in languages/registry.js' };
  }
  const entry = registry.get(code);
  if (!entry) {
    return { error: `"${code}" is not registered in languages/registry.js` };
  }
  if (!entry.active) {
    return { error: `"${code}" is registered but not active in languages/registry.js` };
  }
  if (!entry.dataManifestPath) {
    return { error: `"${code}" registry entry missing dataManifestPath` };
  }
  if (!entry.uiPath) {
    return { error: `"${code}" registry entry missing uiPath` };
  }
  return { entry };
}

function validateManifest(manifest, code) {
  if (!manifest || typeof manifest !== 'object') {
    return { error: `manifest for "${code}" did not define LANGUAGE_DATA_MANIFEST` };
  }
  if (manifest.code !== code || manifest.nativeLanguage !== code) {
    return {
      error: `manifest code/nativeLanguage mismatch for "${code}" (code=${manifest.code}, nativeLanguage=${manifest.nativeLanguage})`,
    };
  }
  const a1Path = manifest.datasets?.a1;
  if (!a1Path || typeof a1Path !== 'string') {
    return { error: `manifest for "${code}" missing datasets.a1` };
  }
  return { a1Path };
}

async function verifyLanguageRegistration(baseUrl, failures) {
  const registryPage = await fetchPage(`${baseUrl}/languages/registry.js`);
  if (registryPage.status !== 200) {
    failures.push(`registry.js status ${registryPage.status}`);
    return null;
  }

  const registryResult = getRegistryEntry(registryPage.body, lang);
  if (registryResult.error) {
    failures.push(registryResult.error);
    return null;
  }

  const { entry } = registryResult;
  const manifestPage = await fetchPage(`${baseUrl}${toUrlPath(entry.dataManifestPath)}`);
  if (manifestPage.status !== 200) {
    failures.push(`${entry.dataManifestPath} status ${manifestPage.status}`);
    return null;
  }

  const manifest = runWindowScript(manifestPage.body).LANGUAGE_DATA_MANIFEST;
  const manifestResult = validateManifest(manifest, lang);
  if (manifestResult.error) {
    failures.push(manifestResult.error);
    return null;
  }

  const uiPage = await fetchPage(`${baseUrl}${toUrlPath(entry.uiPath)}`);
  if (uiPage.status !== 200) {
    failures.push(`${entry.uiPath} status ${uiPage.status}`);
  }

  const a1Page = await fetchPage(`${baseUrl}${toUrlPath(manifestResult.a1Path)}`);
  if (a1Page.status !== 200) {
    failures.push(`${manifestResult.a1Path} status ${a1Page.status}`);
  }

  return { entry, manifest };
}

async function runHttpSmoke(baseUrl) {
  const failures = [];
  const index = await fetchPage(`${baseUrl}/index.html?lang=${lang}`);
  if (index.status !== 200) failures.push(`index.html status ${index.status}`);

  const datasets = await fetchPage(`${baseUrl}/languages/datasets.js`);
  if (datasets.status !== 200) failures.push(`datasets.js status ${datasets.status}`);

  await verifyLanguageRegistration(baseUrl, failures);

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
