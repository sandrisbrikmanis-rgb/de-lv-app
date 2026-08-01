#!/usr/bin/env node
/** Strict cleanup: remove accent terms not found in their section text. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const FILES = [
  ['data/ro/a1.js', 'A1_WORDS'],
  ['data/ro/a2.js', 'A2_WORDS'],
  ['data/ro/b1.js', 'B1_WORDS'],
  ['data/ro/b2.js', 'B2_WORDS'],
  ['data/ro/c1.js', 'C1_WORDS'],
  ['data/ro/c2.js', 'C2_WORDS'],
  ['data/ro/sentences.js', 'SENTENCE_ENTRIES'],
];
const COLORS = ['blue', 'green', 'yellow', 'orange', 'purple', 'red'];
const stats = { removed: 0 };

function fold(v) { return String(v || '').normalize('NFD').replace(/\p{M}/gu, '').toLowerCase(); }
function inText(term, text) {
  if (!term || !text) return false;
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}_])`, 'iu').test(text);
  } catch { return fold(text).includes(fold(term)); }
}

// Reuse collect from fix-ro-section-accents
function asArray(v) { return v == null ? [] : Array.isArray(v) ? v : [v]; }
function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => { if (typeof v === 'string' && v.trim()) texts.push(v); };
  if (sectionKey === 'explanation') { const e = study.explanation; if (Array.isArray(e)) e.forEach(push); else push(e); return texts; }
  if (sectionKey === 'examples') {
    const rows = index !== null ? asArray(study.examples?.[index]) : asArray(study.examples);
    rows.forEach((ex) => { if (!field || field === 'de') push(ex.de); if (!field || field === 'lv') push(ex.lv); });
    return texts;
  }
  if (sectionKey === 'comparison') {
    const rows = index !== null ? asArray(study.comparison?.[index]) : asArray(study.comparison);
    rows.forEach((r) => { if (!field || field === 'word') push(r.word); if (!field || field === 'meaning') push(r.meaning); if (!field || field === 'example') push(r.example); });
    return texts;
  }
  if (sectionKey === 'tip') {
    if (field === 'left' || field === 'text') { push(study.tip?.left || study.tip?.text); return texts; }
    if (field === 'right' || field === 'example') { push(study.tip?.right || study.tip?.example); return texts; }
    if (study.tip?.leftBlocks) study.tip.leftBlocks.forEach((b) => push(b.text));
    push(study.tip?.left); push(study.tip?.right);
    return texts;
  }
  if (sectionKey === 'important') {
    const src = study.important;
    if (src && typeof src === 'object' && !Array.isArray(src)) {
      if (!field || field === 'text') push(src.text);
      if (!field || field === 'example') push(src.example);
      return texts;
    }
    asArray(index !== null && Array.isArray(src) ? src[index] : src).forEach(push);
    return texts;
  }
  return texts;
}

function cleanMap(study, sectionKey, index, map, field) {
  if (!map || typeof map !== 'object') return;
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join('\n');
  for (const color of COLORS) {
    if (!Array.isArray(map[color])) continue;
    const next = map[color].filter((term) => {
      const ok = inText(term, blob) || (field === 'de' && inText(term, texts.join('\n')));
      if (!ok) stats.removed++;
      return ok;
    });
    if (next.length) map[color] = next; else delete map[color];
  }
}

function walk(study, accents) {
  if (!accents) return;
  for (const [sectionKey, rules] of Object.entries(accents)) {
    if (Array.isArray(rules)) {
      rules.forEach((entry, i) => {
        if (!entry || typeof entry !== 'object') return;
        const hasColors = COLORS.some((c) => Array.isArray(entry[c]));
        if (hasColors) cleanMap(study, sectionKey, i, entry, null);
        else for (const [field, map] of Object.entries(entry)) cleanMap(study, sectionKey, i, map, field);
      });
    } else if (rules && typeof rules === 'object') {
      const hasColors = COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) cleanMap(study, sectionKey, null, rules, null);
      else for (const [field, map] of Object.entries(rules)) cleanMap(study, sectionKey, null, map, field);
    }
  }
}

function load(f, v) { const ctx = { window: {} }; vm.createContext(ctx); vm.runInContext(fs.readFileSync(path.join(process.cwd(), f), 'utf8'), ctx); return ctx.window[v]; }
function write(f, v, d) {
  const c = `const ${v} = ${JSON.stringify(d, null, 2)};\nwindow.${v} = ${v};\n`;
  fs.writeFileSync(path.join(process.cwd(), f), c, 'utf8');
  const w = f.replace(/^data\//, 'www/data/');
  if (fs.existsSync(path.dirname(path.join(process.cwd(), w)))) fs.writeFileSync(path.join(process.cwd(), w), c, 'utf8');
}

for (const [file, varName] of FILES) {
  const cards = load(file, varName);
  if (!Array.isArray(cards)) continue;
  cards.forEach((card) => { if (card.study?.sectionAccents) walk(card.study, card.study.sectionAccents); });
  write(file, varName, cards);
}
console.log(JSON.stringify(stats));
