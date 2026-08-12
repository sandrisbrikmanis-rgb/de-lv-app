#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const FILES = [
  path.join(__dirname, '../data/cs/a1.js'),
  path.join(__dirname, '../www/data/cs/a1.js'),
];

const REPLACEMENTS = [
  // 1. a1-einmal
  ['"de": "einmal",\n    "lv": "Jednou • Jednou",\n    "level": "A1",\n    "study": {\n      "id": "a1-einmal",\n      "layout": "standardStudy",\n      "translation": "Jednou • Jednou",\n      "explanation": [\n        "Hlavní myšlenka: Odkazuje na čas nebo minulost (kdysi jsem byl...).",\n        "Einmal v podstatě znamená: jednou / v minulosti.",\n        "Často charakterizované: povětrnostními podmínkami.",',
   '"de": "einmal",\n    "lv": "Jednou • Kdysi",\n    "level": "A1",\n    "study": {\n      "id": "a1-einmal",\n      "layout": "standardStudy",\n      "translation": "Jednou • Kdysi",\n      "explanation": [\n        "Hlavní myšlenka: Odkazuje na čas nebo minulost (kdysi jsem byl...).",\n        "Einmal v podstatě znamená: jednou / v minulosti.",\n        "Často se používá jako příslovečné určení času.",'],

  // 2. a1-noch-mal
  ['"id": "a1-noch-mal",\n      "layout": "standardStudy",\n      "translation": "Znovu",\n      "explanation": [\n        "Hlavní myšlenka: Znovu znamená - opakovat akci nebo požádat o její opakování."\n      ],\n      "examples": [\n        {\n          "de": "Noch mal, bitte.",\n          "lv": "Ještě jednou, prosím."\n        },\n        {\n          "de": "Noch mal, bitte.",\n          "lv": "Znovu prosím"\n        },\n        {\n          "de": "Sag das noch mal.",\n          "lv": "Řekni to znovu"\n        }',
   '"id": "a1-noch-mal",\n      "layout": "standardStudy",\n      "translation": "Znovu",\n      "explanation": [\n        "Hlavní myšlenka: noch mal znamená znovu nebo ještě jednou. Používá se při opakování činnosti nebo při žádosti o její zopakování."\n      ],\n      "examples": [\n        {\n          "de": "Noch mal, bitte.",\n          "lv": "Ještě jednou, prosím."\n        },\n        {\n          "de": "Noch mal, bitte.",\n          "lv": "Znovu, prosím."\n        },\n        {\n          "de": "Sag das noch mal.",\n          "lv": "Řekni to znovu."\n        }'],
];

function verifySyntax(filePath, content) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(content, ctx);
  if (!ctx.window.A1_WORDS || !Array.isArray(ctx.window.A1_WORDS)) {
    throw new Error(`${filePath}: A1_WORDS not defined`);
  }
  return ctx.window.A1_WORDS.length;
}

function applyAll(content) {
  const results = [];
  for (let i = 0; i < REPLACEMENTS.length; i++) {
    const [before, after] = REPLACEMENTS[i];
    const count = content.split(before).length - 1;
    if (count === 0) {
      results.push({ index: i, status: 'MISS', before: before.slice(0, 80) });
      continue;
    }
    if (count > 1) {
      results.push({ index: i, status: 'AMBIG', count, before: before.slice(0, 80) });
      continue;
    }
    content = content.replace(before, after);
    results.push({ index: i, status: 'OK' });
  }
  return { content, results };
}

let hadError = false;
for (const filePath of FILES) {
  let content = fs.readFileSync(filePath, 'utf8');
  const { content: newContent, results } = applyAll(content);
  const failed = results.filter((r) => r.status !== 'OK');
  if (failed.length) {
    hadError = true;
    console.error(`\n${filePath} failures:`);
    for (const f of failed) console.error(`  [${f.index}] ${f.status}: ${f.before}...`);
  }
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`${filePath}: ${results.filter((r) => r.status === 'OK').length}/${REPLACEMENTS.length} OK, ${verifySyntax(filePath, newContent)} cards`);
}

if (hadError) process.exit(1);
