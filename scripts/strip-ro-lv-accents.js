#!/usr/bin/env node
/**
 * Remove Latvian terms from RO sectionAccents lv arrays (comparison synonyms etc.)
 * and rebuild from Romanian section text where possible.
 */
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

const LV_CHARS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const COLORS = ['blue', 'green', 'yellow', 'orange', 'purple', 'red'];

function load(file, varName) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(process.cwd(), file), 'utf8'), ctx);
  return ctx.window[varName];
}

function write(file, varName, data) {
  const content = `const ${varName} = ${JSON.stringify(data, null, 2)};\nwindow.${varName} = ${varName};\n`;
  fs.writeFileSync(path.join(process.cwd(), file), content, 'utf8');
  const www = file.replace(/^data\//, 'www/data/');
  if (fs.existsSync(path.dirname(path.join(process.cwd(), www)))) {
    fs.writeFileSync(path.join(process.cwd(), www), content, 'utf8');
  }
}

function collectRoTexts(study) {
  const texts = [];
  const push = (v) => { if (typeof v === 'string' && v.trim()) texts.push(v); };
  const pushArr = (v) => { if (Array.isArray(v)) v.forEach(push); else push(v); };
  push(study.translation);
  pushArr(study.explanation);
  (study.examples || []).forEach((ex) => push(ex.lv));
  (study.comparison || []).forEach((r) => { push(r.meaning); push(r.example); });
  (study.tip?.leftBlocks || []).forEach((b) => push(b.text));
  push(study.tip?.left || study.tip?.text);
  pushArr(study.important);
  return texts.join('\n');
}

function findRoMatch(term, texts) {
  const blob = texts.toLowerCase();
  const t = term.toLowerCase();
  if (blob.includes(t)) return term;
  const words = texts.split(/[\s.,!?;:()]+/).filter((w) => w.length >= 3);
  for (const w of words) {
    if (w.toLowerCase().startsWith(t.slice(0, Math.min(4, t.length)))) return w;
  }
  return null;
}

function cleanLvAccents(node, roTexts, stats) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    node.forEach((item) => cleanLvAccents(item, roTexts, stats));
    return;
  }
  if (node.lv && typeof node.lv === 'object') {
    for (const color of COLORS) {
      if (!Array.isArray(node.lv[color])) continue;
      const next = [];
      for (const term of node.lv[color]) {
        if (LV_CHARS.test(String(term))) {
          stats.removed++;
          const match = findRoMatch(String(term), roTexts);
          if (match && !LV_CHARS.test(match)) { next.push(match); stats.replaced++; }
        } else {
          next.push(term);
        }
      }
      if (next.length) node.lv[color] = next;
      else delete node.lv[color];
    }
    if (!Object.keys(node.lv).length) delete node.lv;
  }
  for (const v of Object.values(node)) {
    if (typeof v === 'object') cleanLvAccents(v, roTexts, stats);
  }
}

const stats = { removed: 0, replaced: 0, cards: 0 };

for (const [file, varName] of FILES) {
  const cards = load(file, varName);
  if (!Array.isArray(cards)) continue;
  for (const card of cards) {
    if (!card.study?.sectionAccents) continue;
    const texts = collectRoTexts(card.study);
    cleanLvAccents(card.study.sectionAccents, texts, stats);
    stats.cards++;
  }
  write(file, varName, cards);
}

console.log(JSON.stringify(stats, null, 2));
