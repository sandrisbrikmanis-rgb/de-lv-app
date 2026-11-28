#!/usr/bin/env node
/**
 * Verifies that ui.js's study-vs-flashcard routing decision is consistent
 * for a given native language's data. Generalized from the LT-specific
 * validate-lt-flashcard-routing.js per PROJECT_LANGUAGE_MASTER_STANDARD.md §7.7.
 *
 * Run: node scripts/validate-flashcard-routing.js --lang=lt
 */
const fs = require('fs');
const path = require('path');
const { ROOT, parseLangArg, dataDir, fileExists } = require('./lib/audit-common');

const lang = parseLangArg('lt');
const DIR = dataDir(lang);

function hasStudyFieldContent(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.some(hasStudyFieldContent);
  if (typeof value === 'object') return Object.values(value).some(hasStudyFieldContent);
  return Boolean(value);
}

function cardHasRenderableStudy(study) {
  if (!study || typeof study !== 'object') return false;
  const layout = study.layout || 'standardStudy';
  if (layout === 'minimalStudy') {
    return hasStudyFieldContent(study.note)
      || hasStudyFieldContent(study.forms)
      || hasStudyFieldContent(study.tip)
      || hasStudyFieldContent(study.examples);
  }
  if (layout === 'comparisonStudy') {
    return hasStudyFieldContent(study.words)
      || hasStudyFieldContent(study.items)
      || hasStudyFieldContent(study.terms)
      || hasStudyFieldContent(study.comparison)
      || hasStudyFieldContent(study.comparisonTable)
      || hasStudyFieldContent(study.subtitle)
      || hasStudyFieldContent(study.subtitleText)
      || hasStudyFieldContent(study.title)
      || hasStudyFieldContent(study.lead)
      || hasStudyFieldContent(study.question);
  }
  return hasStudyFieldContent(study.explanation)
    || hasStudyFieldContent(study.explanationLines)
    || hasStudyFieldContent(study.examples)
    || hasStudyFieldContent(study.comparison)
    || hasStudyFieldContent(study.tip)
    || hasStudyFieldContent(study.important)
    || hasStudyFieldContent(study.info)
    || hasStudyFieldContent(study.words)
    || hasStudyFieldContent(study.items)
    || hasStudyFieldContent(study.terms);
}

function shouldUseStudyRenderer(card) {
  return Boolean(card.study && cardHasRenderableStudy(card.study));
}

const files = [
  [`${DIR}/a1.js`, 'A1_WORDS'], [`${DIR}/a2.js`, 'A2_WORDS'], [`${DIR}/b1.js`, 'B1_WORDS'],
  [`${DIR}/b2.js`, 'B2_WORDS'], [`${DIR}/c1.js`, 'C1_WORDS'], [`${DIR}/c2.js`, 'C2_WORDS'],
  [`${DIR}/sentences.js`, 'SENTENCE_ENTRIES']
];

let total = 0;
let noStudy = 0;
let studyRenderer = 0;
let flashcardRenderer = 0;
const flashcardExamples = [];

for (const [file, varName] of files) {
  if (!fileExists(file)) continue;
  for (const name of ['A1_WORDS', 'A2_WORDS', 'B1_WORDS', 'B2_WORDS', 'C1_WORDS', 'C2_WORDS', 'SENTENCE_ENTRIES']) delete global[name];
  eval(fs.readFileSync(path.join(ROOT, file), 'utf8').replace(/window\./g, 'global.'));
  const words = global[varName];
  if (!Array.isArray(words)) continue;
  for (const card of words) {
    total++;
    if (!card.study) {
      noStudy++;
      flashcardRenderer++;
      continue;
    }
    if (shouldUseStudyRenderer(card)) {
      studyRenderer++;
    } else {
      flashcardRenderer++;
      flashcardExamples.push({ de: card.de, file, layout: card.study.layout || 'standardStudy' });
    }
  }
}

// Benchmark card (any language): "Kino" is a well-known LT/LV audit case where
// the card must render as a plain flashcard, not a minimalStudy shell.
const kinoFile = `${DIR}/a2.js`;
let kino = null;
if (fileExists(kinoFile)) {
  delete global.A2_WORDS;
  eval(fs.readFileSync(path.join(ROOT, kinoFile), 'utf8').replace(/window\./g, 'global.'));
  kino = (global.A2_WORDS || []).find((w) => w.de === 'Kino');
}

console.log(JSON.stringify({
  lang,
  total,
  noStudy,
  studyRenderer,
  flashcardRenderer,
  flashcardExamples,
  kinoLv: kino ? kino.lv : null,
  kinoStudyTranslation: kino?.study ? kino.study.translation : null,
  kinoUsesStudyRenderer: kino ? shouldUseStudyRenderer(kino) : null
}, null, 2));
