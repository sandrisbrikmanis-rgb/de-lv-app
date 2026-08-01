#!/usr/bin/env node
/**
 * Fix TR sectionAccents terms that don't match section text (technical only).
 * Adapted from fix-bg-section-accents.js for Turkish.
 */
const fs = require('fs');
const path = require('path');

const TR_WORD_FILES = [
  ['data/tr/a1.js', 'A1_WORDS'],
  ['data/tr/a2.js', 'A2_WORDS'],
  ['data/tr/b1.js', 'B1_WORDS'],
  ['data/tr/b2.js', 'B2_WORDS'],
  ['data/tr/c1.js', 'C1_WORDS'],
  ['data/tr/c2.js', 'C2_WORDS'],
  ['data/tr/sentences.js', 'SENTENCE_ENTRIES'],
];

const ACCENT_COLORS = ['blue', 'green', 'yellow', 'orange', 'purple', 'red'];
const LV_CHARS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const STATS = { termsFixed: 0, termsRemoved: 0, termsKept: 0, cardsTouched: 0, filesTouched: new Set() };

function fold(value) {
  return String(value || '').normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function boundaryPattern(term) {
  return `(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`;
}

function matchesTerm(text, term) {
  if (!text || !term) return false;
  try {
    return new RegExp(boundaryPattern(term), 'iu').test(String(text));
  } catch {
    return false;
  }
}

function stemMatch(text, term) {
  if (!text || !term || term.length < 4) return false;
  const stem = String(term).replace(/(?:ler|lar|den|dan|de|da|in|ın|un|ün|i|ı|u|ü|e|a|yi|yı|yu|yü|si|sı|su|sü)$/iu, '');
  if (stem.length < 3) return false;
  try {
    return new RegExp(boundaryPattern(stem) + '[\\p{L}\\p{N}_]*', 'iu').test(String(text));
  } catch {
    return false;
  }
}

function wordsFromText(text) {
  return String(text || '').split(/(\s+|[^\p{L}\p{N}_]+)/u)
    .filter((w) => /[\p{L}\p{N}_]/u.test(w) && w.length >= 2);
}

function inflectionCandidates(term) {
  const candidates = [String(term)];
  const t = String(term);
  if (t.length >= 3) {
    candidates.push(t.slice(0, -1), `${t}ler`, `${t}lar`, `${t}i`, `${t}ı`, `${t}u`, `${t}ü`);
  }
  return [...new Set(candidates)];
}

function substringMatch(text, term) {
  if (!text || !term || term.length < 3) return null;
  const hay = String(text);
  const idx = fold(hay).indexOf(fold(term));
  if (idx >= 0) return hay.slice(idx, idx + term.length);
  return null;
}

function extendedForm(text, term) {
  if (!text || !term || term.length < 3) return null;
  try {
    const re = new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(term)}\\p{L}*`, 'iu');
    const m = String(text).match(re);
    if (m && m[0].length >= term.length) return m[0];
  } catch {
    // ignore
  }
  return null;
}

function findReplacement(term, texts) {
  const blob = texts.join('\n');
  for (const candidate of inflectionCandidates(term)) {
    if (matchesTerm(blob, candidate) || stemMatch(blob, candidate)) return candidate;
  }
  for (const text of texts) {
    const extended = extendedForm(text, term);
    if (extended) return extended;
    const sub = substringMatch(text, term);
    if (sub) return sub;
  }
  const foldedTerm = fold(term);
  for (const text of texts) {
    for (const word of wordsFromText(text)) {
      if (fold(word) === foldedTerm) return word;
      if (foldedTerm.length >= 3 && fold(word).startsWith(foldedTerm.slice(0, 3))) return word;
    }
  }
  return null;
}

function asArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === 'string') { if (v.trim()) texts.push(v); return; }
    if (Array.isArray(v)) { v.forEach(push); return; }
    if (typeof v === 'object') ['text', 'example', 'de', 'lv', 'word', 'meaning', 'description'].forEach((k) => push(v[k]));
  };
  if (sectionKey === 'explanation') { push(study.explanation); return texts; }
  if (sectionKey === 'examples') {
    const rows = index !== null ? asArray(study.examples?.[index]) : asArray(study.examples);
    rows.forEach((ex) => {
      if (!field || field === 'de') push(ex.de);
      if (!field || field === 'lv') push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === 'comparison') {
    const rows = index !== null ? asArray(study.comparison?.[index]) : asArray(study.comparison);
    rows.forEach((r) => {
      if (!field || field === 'word') push(r.word);
      if (!field || field === 'meaning') push(r.meaning);
      if (!field || field === 'example') push(r.example);
    });
    return texts;
  }
  if (sectionKey === 'tip') { push(study.tip); return texts; }
  if (sectionKey === 'important') {
    const source = study.important;
    const rows = index !== null ? asArray(Array.isArray(source) ? source[index] : source) : asArray(source);
    rows.forEach(push);
    return texts;
  }
  return texts;
}

function fixAccentMap(study, sectionKey, index, accentMap, field = null) {
  if (!accentMap || typeof accentMap !== 'object') return false;
  let changed = false;
  for (const color of ACCENT_COLORS) {
    if (!Array.isArray(accentMap[color])) continue;
    const next = [];
    const seen = new Set();
    for (const term of accentMap[color]) {
      const raw = String(term || '').trim();
      if (!raw) { changed = true; STATS.termsRemoved++; continue; }
      if (LV_CHARS.test(raw)) { changed = true; STATS.termsRemoved++; continue; }
      const texts = collectSectionTexts(study, sectionKey, index, field);
      let resolved = raw;
      const blob = texts.join('\n');
      if (!matchesTerm(blob, raw) && !stemMatch(blob, raw)) {
        const replacement = findReplacement(raw, texts);
        if (replacement) {
          resolved = replacement;
          if (resolved !== raw) { changed = true; STATS.termsFixed++; }
        } else {
          changed = true;
          STATS.termsRemoved++;
          continue;
        }
      } else {
        STATS.termsKept++;
      }
      const key = `${color}:${fold(resolved)}`;
      if (seen.has(key)) { changed = true; STATS.termsRemoved++; continue; }
      seen.add(key);
      next.push(resolved);
    }
    if (next.length) accentMap[color] = next;
    else { delete accentMap[color]; changed = true; }
  }
  return changed;
}

function walkSectionAccents(study, sectionAccents) {
  if (!sectionAccents || typeof sectionAccents !== 'object') return false;
  let changed = false;
  for (const [sectionKey, rules] of Object.entries(sectionAccents)) {
    if (Array.isArray(rules)) {
      rules.forEach((entry, index) => {
        if (!entry || typeof entry !== 'object') return;
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry[c]));
        if (hasColors) {
          if (fixAccentMap(study, sectionKey, index, entry)) changed = true;
          return;
        }
        for (const f of Object.keys(entry)) {
          if (fixAccentMap(study, sectionKey, index, entry[f], f)) changed = true;
        }
      });
      continue;
    }
    if (rules && typeof rules === 'object') {
      const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) {
        if (fixAccentMap(study, sectionKey, null, rules)) changed = true;
      } else {
        for (const [f, map] of Object.entries(rules)) {
          if (fixAccentMap(study, sectionKey, null, map, f)) changed = true;
        }
      }
    }
  }
  return changed;
}

function loadCards(file, varName) {
  delete global.A1_WORDS; delete global.A2_WORDS; delete global.B1_WORDS; delete global.B2_WORDS;
  delete global.C1_WORDS; delete global.C2_WORDS; delete global.SENTENCE_ENTRIES;
  eval(fs.readFileSync(path.join(process.cwd(), file), 'utf8').replace(/window\./g, 'global.'));
  return global[varName];
}

function writeCards(file, varName, cards) {
  const json = JSON.stringify(cards, null, 2);
  const content = `const ${varName} = ${json};\nwindow.${varName} = ${varName};\n`;
  fs.writeFileSync(path.join(process.cwd(), file), content, 'utf8');
  const wwwFile = file.replace(/^data\//, 'www/data/');
  if (fs.existsSync(path.dirname(path.join(process.cwd(), wwwFile)))) {
    fs.writeFileSync(path.join(process.cwd(), wwwFile), content, 'utf8');
  }
}

function processCard(card, file) {
  const study = card.study;
  if (!study?.sectionAccents) return false;
  const changed = walkSectionAccents(study, study.sectionAccents);
  if (changed) {
    STATS.cardsTouched++;
    STATS.filesTouched.add(file);
  }
  return changed;
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  for (const [file, varName] of TR_WORD_FILES) {
    if (!fs.existsSync(path.join(process.cwd(), file))) continue;
    const cards = loadCards(file, varName);
    if (!Array.isArray(cards)) continue;
    let fileChanged = false;
    for (const card of cards) {
      if (processCard(card, file)) fileChanged = true;
    }
    if (fileChanged && !dryRun) writeCards(file, varName, cards);
  }
  console.log(JSON.stringify({
    dryRun,
    cardsTouched: STATS.cardsTouched,
    filesTouched: [...STATS.filesTouched],
    termsFixed: STATS.termsFixed,
    termsRemoved: STATS.termsRemoved,
    termsKept: STATS.termsKept,
  }, null, 2));
}

main();
