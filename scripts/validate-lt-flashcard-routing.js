const fs = require('fs');

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
    return hasStudyFieldContent(study.variants)
      || hasStudyFieldContent(study.note)
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
  ['data/lt/a1.js', 'A1_WORDS'], ['data/lt/a2.js', 'A2_WORDS'], ['data/lt/b1.js', 'B1_WORDS'],
  ['data/lt/b2.js', 'B2_WORDS'], ['data/lt/c1.js', 'C1_WORDS'], ['data/lt/c2.js', 'C2_WORDS'],
  ['data/lt/sentences.js', 'SENTENCE_ENTRIES']
];

let total = 0;
let noStudy = 0;
let studyRenderer = 0;
let flashcardRenderer = 0;
const flashcardExamples = [];

for (const [file, varName] of files) {
  delete global.A1_WORDS; delete global.A2_WORDS; delete global.B1_WORDS; delete global.B2_WORDS;
  delete global.C1_WORDS; delete global.C2_WORDS; delete global.SENTENCE_ENTRIES;
  eval(fs.readFileSync(file, 'utf8').replace(/window\./g, 'global.'));
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

const kino = (() => {
  delete global.A2_WORDS;
  eval(fs.readFileSync('data/lt/a2.js', 'utf8').replace(/window\./g, 'global.'));
  return global.A2_WORDS.find((w) => w.de === 'Kino');
})();

console.log(JSON.stringify({
  total,
  noStudy,
  studyRenderer,
  flashcardRenderer,
  flashcardExamples,
  kinoLv: kino.lv,
  kinoStudyTranslation: kino.study.translation,
  kinoUsesStudyRenderer: shouldUseStudyRenderer(kino)
}, null, 2));
