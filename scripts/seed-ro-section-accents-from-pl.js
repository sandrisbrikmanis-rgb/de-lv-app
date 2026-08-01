#!/usr/bin/env node
/**
 * Seed RO sectionAccents from PL (correct structure), then strip Latvian remnants.
 * PL accents are closer to RO text than raw LV accents; fix-ro-section-accents adapts terms.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const LEVELS = [
  ['data/a1.js', 'data/pl/a1.js', 'data/ro/a1.js', 'A1_WORDS'],
  ['data/a2.js', 'data/pl/a2.js', 'data/ro/a2.js', 'A2_WORDS'],
  ['data/b1.js', 'data/pl/b1.js', 'data/ro/b1.js', 'B1_WORDS'],
  ['data/b2.js', 'data/pl/b2.js', 'data/ro/b2.js', 'B2_WORDS'],
  ['data/c1.js', 'data/pl/c1.js', 'data/ro/c1.js', 'C1_WORDS'],
  ['data/c2.js', 'data/pl/c2.js', 'data/ro/c2.js', 'C2_WORDS'],
  ['data/sentences.js', 'data/pl/sentences.js', 'data/ro/sentences.js', 'SENTENCE_ENTRIES'],
];

const LV_CHARS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;

function loadArray(file, varName) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(process.cwd(), file), 'utf8'), ctx);
  return ctx.window[varName] || Object.values(ctx.window).find(Array.isArray);
}

function writeArray(file, varName, data) {
  const content = `const ${varName} = ${JSON.stringify(data, null, 2)};\nwindow.${varName} = ${varName};\n`;
  fs.writeFileSync(path.join(process.cwd(), file), content, 'utf8');
  const wwwFile = file.replace(/^data\//, 'www/data/');
  const wwwPath = path.join(process.cwd(), wwwFile);
  if (fs.existsSync(path.dirname(wwwPath))) {
    fs.writeFileSync(wwwPath, content, 'utf8');
  }
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function stripLatvianFromAccents(node) {
  if (!node || typeof node !== 'object') return node;
  if (Array.isArray(node)) return node.map(stripLatvianFromAccents);
  const out = {};
  for (const [k, v] of Object.entries(node)) {
    if (Array.isArray(v)) {
      const filtered = v.filter((t) => !LV_CHARS.test(String(t)));
      if (filtered.length) out[k] = filtered;
    } else if (typeof v === 'object') {
      const child = stripLatvianFromAccents(v);
      if (child && Object.keys(child).length) out[k] = child;
    }
  }
  return out;
}

function mergeAccents(plAccents, roAccents) {
  if (!plAccents) return stripLatvianFromAccents(roAccents);
  const merged = deepClone(plAccents);
  // Preserve DE accents from RO if PL missing de in a slot
  function walk(pl, ro, out) {
    if (!pl && !ro) return;
    if (Array.isArray(pl)) {
      pl.forEach((item, i) => {
        if (!out[i]) out[i] = {};
        walk(item, ro?.[i], out[i]);
      });
      return;
    }
    if (pl && typeof pl === 'object') {
      for (const [k, v] of Object.entries(pl)) {
        if (k === 'de' && ro?.de) {
          out.de = deepClone(ro.de);
        } else if (k === 'lv') {
          out.lv = deepClone(v);
        } else if (typeof v === 'object') {
          if (!out[k]) out[k] = Array.isArray(v) ? [] : {};
          walk(v, ro?.[k], out[k]);
        }
      }
    }
  }
  const result = deepClone(plAccents);
  if (roAccents?.de) {
    // keep RO de accents where they exist at top level
    for (const section of Object.keys(result)) {
      if (Array.isArray(result[section]) && Array.isArray(roAccents[section])) {
        result[section].forEach((row, i) => {
          if (roAccents[section][i]?.de) row.de = deepClone(roAccents[section][i].de);
        });
      } else if (result[section]?.de && roAccents[section]?.de) {
        result[section].de = deepClone(roAccents[section].de);
      }
    }
  }
  return stripLatvianFromAccents(result);
}

let cardsUpdated = 0;

for (const [, plFile, roFile, varName] of LEVELS) {
  if (!fs.existsSync(path.join(process.cwd(), plFile)) || !fs.existsSync(path.join(process.cwd(), roFile))) continue;
  const plCards = loadArray(plFile, varName);
  const roCards = loadArray(roFile, varName);
  if (!plCards || !roCards || plCards.length !== roCards.length) {
    console.warn(`Skip ${roFile}: length mismatch`);
    continue;
  }
  for (let i = 0; i < roCards.length; i++) {
    const ro = roCards[i];
    const pl = plCards[i];
    if (!ro.study?.sectionAccents) continue;
    if (pl.study?.sectionAccents) {
      ro.study.sectionAccents = mergeAccents(pl.study.sectionAccents, ro.study.sectionAccents);
      cardsUpdated++;
    } else {
      ro.study.sectionAccents = stripLatvianFromAccents(ro.study.sectionAccents);
    }
  }
  writeArray(roFile, varName, roCards);
  console.log(`Updated ${roFile}`);
}

console.log(`Cards with sectionAccents updated: ${cardsUpdated}`);
