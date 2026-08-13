#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');
const { ROOT, finalClosureAuditOnMainPaths } = require('./lib/cs-audit-helpers');
const { reconcileConfirmedReal, reconcileOwner, reconcileSectionAccents, verifyTechnical } = require('./validate-cs-a1-final-repair-main-integration');

const MAIN_BEFORE = 'd658e2b591837e9656bbb322fa039faee2293c8d';
const FERIEN_IMPORTANT = 'Ferien se používá pouze v množném čísle; ve spojení in den Ferien je v dativu množného čísla.';

function loadWordsFromString(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function loadWords() {
  return loadWordsFromString(fs.readFileSync(path.join(ROOT, 'data/cs/a1.js'), 'utf8'));
}

function loadWordsAtRef(ref) {
  const code = execSync(`git show ${ref}:data/cs/a1.js`, { cwd: ROOT, encoding: 'utf8' });
  return loadWordsFromString(code);
}

function main() {
  const paths = finalClosureAuditOnMainPaths('a1');
  const words = loadWords();
  const beforeMain = loadWordsAtRef(MAIN_BEFORE);
  const confirmedReal = reconcileConfirmedReal(words);
  const owner = reconcileOwner(words);
  const sectionAccents = reconcileSectionAccents(words);
  const technical = verifyTechnical(words, beforeMain);
  const ferien = words.find((e) => e.study?.id === 'a1-ferien');

  const payload = {
    confirmedReal: {
      source: confirmedReal.source,
      accounted: confirmedReal.accounted,
      appliedRetained: confirmedReal.appliedRetained,
      noOp: confirmedReal.noOp,
      missing: confirmedReal.missing,
      conflicting: confirmedReal.conflicting,
      pass: confirmedReal.pass,
    },
    owner: {
      source: owner.source,
      labot: owner.labot,
      ownerKeep: owner.ownerKeep,
      remaining: owner.remaining,
      pass: owner.pass,
    },
    ferien: {
      hasStudy: Boolean(ferien?.study),
      importantRetained: ferien?.study?.important?.[0] === FERIEN_IMPORTANT,
    },
    sectionAccents: {
      oldReal: sectionAccents.oldReal,
      resolvedByRepair: sectionAccents.resolvedByRepair,
      realRemaining: sectionAccents.realRemaining,
      ownerOverride: sectionAccents.ownerOverride,
      pass: sectionAccents.pass,
    },
    studyParity: {
      cards: technical.cards,
      studyCount: technical.studyCount,
      missing: technical.missingStudyParity,
      pass: technical.missingStudyParity === 0 && technical.studyCount === 134,
    },
    technical,
    pass: confirmedReal.pass && owner.pass && sectionAccents.pass && technical.missingStudyParity === 0,
    completedAt: new Date().toISOString(),
  };

  fs.mkdirSync(path.dirname(paths.repairRetentionJson), { recursive: true });
  fs.writeFileSync(paths.repairRetentionJson, JSON.stringify(payload, null, 2));
  console.log(JSON.stringify(payload, null, 2));
  if (!payload.pass) process.exit(1);
}

if (require.main === module) main();
