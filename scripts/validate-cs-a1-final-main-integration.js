#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const MAIN_BEFORE = process.env.MAIN_BEFORE || execSync('git rev-parse origin/main', { cwd: ROOT }).toString().trim();
const FILES = [path.join(ROOT, 'data/cs/a1.js'), path.join(ROOT, 'www/data/cs/a1.js')];

const PARITY_STUDY_IDS = [
  'a1-besuch', 'a1-besuchen', 'a1-bitte', 'a1-bitte-study', 'a1-ein', 'a1-es',
  'a1-fussball-study', 'a1-ganz-study', 'a1-gefallen-study', 'a1-geschichte-study',
  'a1-geschwister-study', 'a1-grosseltern-study', 'a1-hand-study', 'a1-huebsch',
];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `a1-${entry.de}-${index}`;
  return `a1-${index}`;
}

function countStudies(words) {
  return words.filter((e) => e.study).length;
}

function verifyDeUnchanged(before, after) {
  let changes = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of ['de', 'de_article', 'de_plural', 'level']) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) changes++;
    }
  }
  return changes;
}

function verifyIdOrder(words) {
  const lv = loadWords(path.join(ROOT, 'data/a1.js'));
  for (let i = 0; i < lv.length; i++) if (lv[i].de !== words[i].de) return false;
  return true;
}

function validateParity(words) {
  const { validateSectionAccents } = require('./apply-cs-a1-final-missing-study-parity-repair');
  let missing = 0;
  let accentIssues = 0;
  for (const studyId of PARITY_STUDY_IDS) {
    const entry = words.find((e) => e.study?.id === studyId);
    if (!entry?.study) missing++;
    else accentIssues += validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de).length;
  }
  return { missing, accentIssues, hasStudy: PARITY_STUDY_IDS.length - missing };
}

function main() {
  const beforeMain = loadWords('/tmp/main-before-a1.js');
  const after = loadWords(FILES[0]);
  const rec = require('./apply-cs-a1-final-main-repair-batch04-final10').reconcileAllBlocks(
    require('./apply-cs-a1-final-main-repair-batch04-final10').applyRepairs(after)
  );
  const parity = validateParity(after);
  const inAccent = after.find((e) => e.study?.id === 'a1-in');
  const ownerOverride = inAccent?.study?.sectionAccents?.examples?.[0]?.lv?.purple?.[0] === 'Berlīnē';

  const gates = {
    cards: after.length === 702,
    studyCount: countStudies(after) === 134,
    confirmedReal: rec.pass,
    studyParity: parity.missing === 0 && parity.hasStudy === 14,
    sectionAccents: parity.accentIssues === 0,
    deChanges: verifyDeUnchanged(beforeMain, after) === 0,
    mirror: fs.readFileSync(FILES[0], 'utf8') === fs.readFileSync(FILES[1], 'utf8'),
    idOrder: verifyIdOrder(after),
    ownerOverride,
  };

  const pass = Object.entries(gates).filter(([k]) => k !== 'ownerOverride').every(([, v]) => v);
  console.log(JSON.stringify({ pass, gates, rec: { unique: rec.uniqueRepairIds, missing: rec.missing.length }, parity, studyCount: countStudies(after) }, null, 2));
  if (!pass) process.exit(1);
}

if (require.main === module) main();
