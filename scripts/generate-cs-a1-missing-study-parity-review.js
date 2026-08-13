#!/usr/bin/env node
'use strict';
/**
 * READ-ONLY: Generate MISSING_STUDY_PARITY review package for ChatGPT/OWNER.
 * Usage: node scripts/generate-cs-a1-missing-study-parity-review.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const VALIDATED_PATH = path.join(ROOT, 'reports/temp/cs-a1-final-audit-on-main-validated.json');
const OUT_JSON = path.join(ROOT, 'reports/temp/cs-a1-missing-study-parity-review.json');
const OUT_MD = path.join(ROOT, 'reports/cs-a1-missing-study-parity-review.md');

function loadWords(filePath, globalKey = 'A1_WORDS') {
  const code = fs.readFileSync(path.join(ROOT, filePath), 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `a1-${entry.de}-${index}`;
  return `a1-${index}`;
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function schemaKeys(obj, prefix = '', exclude = new Set()) {
  const keys = [];
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return keys;
  for (const k of Object.keys(obj)) {
    if (exclude.has(k)) continue;
    const p = prefix ? `${prefix}.${k}` : k;
    keys.push(p);
    const v = obj[k];
    if (v && typeof v === 'object' && !Array.isArray(v)) keys.push(...schemaKeys(v, p, exclude));
    else if (Array.isArray(v) && v.length && typeof v[0] === 'object') {
      v.forEach((item, i) => {
        if (item && typeof item === 'object') keys.push(...schemaKeys(item, `${p}[${i}]`, exclude));
      });
    }
  }
  return keys;
}

function missingKeys(lvStudy, csStudy) {
  const lvKeys = new Set(schemaKeys(lvStudy || {}));
  const csKeys = new Set(schemaKeys(csStudy || {}));
  const missing = [...lvKeys].filter((k) => !csKeys.has(k));
  const extra = [...csKeys].filter((k) => !lvKeys.has(k));
  return { missing, extra };
}

function deIdentity(lvEntry, csEntry, index, cardId) {
  return {
    cardId,
    index,
    lvDe: lvEntry?.de ?? null,
    csDe: csEntry?.de ?? null,
    lvDeArticle: lvEntry?.de_article ?? null,
    csDeArticle: csEntry?.de_article ?? null,
    lvDePlural: lvEntry?.de_plural ?? null,
    csDePlural: csEntry?.de_plural ?? null,
    deLemmaMatch: lvEntry?.de === csEntry?.de,
    deArticleMatch: (lvEntry?.de_article ?? null) === (csEntry?.de_article ?? null),
    dePluralMatch: (lvEntry?.de_plural ?? null) === (csEntry?.de_plural ?? null),
    orderAligned: lvEntry?.de === csEntry?.de,
  };
}

function studyMeta(study) {
  if (!study) {
    return { hasStudy: false, studyType: null, studyKeys: [], studyId: null };
  }
  return {
    hasStudy: true,
    studyType: study.layout || null,
    studyKeys: Object.keys(study).sort(),
    studyId: study.id || null,
  };
}

function classifyParity(lvStudy, csStudy) {
  if (!lvStudy && !csStudy) return 'STRUCTURE_DIFFERENCE';
  if (lvStudy && !csStudy) return 'MISSING_FULL_STUDY';
  if (!lvStudy && csStudy) return 'STRUCTURE_DIFFERENCE';
  const { missing, extra } = missingKeys(lvStudy, csStudy);
  if (missing.length === 0 && extra.length === 0) return 'STRUCTURE_DIFFERENCE';
  if (missing.length > 0) return 'MISSING_STUDY_FIELDS';
  return 'STRUCTURE_DIFFERENCE';
}

function mappingStatus(identity) {
  if (!identity.orderAligned || !identity.deLemmaMatch) return 'MAPPING_NEEDS_OWNER_REVIEW';
  return 'CONFIRMED';
}

function cardSnapshot(entry, index, lang) {
  if (!entry) return null;
  const snap = deepClone(entry);
  snap._meta = {
    index,
    cardId: entryId(entry, index),
    lang,
  };
  return snap;
}

function loadValidatedFindings() {
  if (!fs.existsSync(VALIDATED_PATH)) {
    try {
      const raw = execSync(
        'git show cursor/cs-a1-final-audit-on-main-6ea4:reports/temp/cs-a1-final-audit-on-main-validated.json',
        { cwd: ROOT, encoding: 'utf8' }
      );
      return JSON.parse(raw);
    } catch {
      throw new Error(`Validated JSON not found: ${VALIDATED_PATH}`);
    }
  }
  return JSON.parse(fs.readFileSync(VALIDATED_PATH, 'utf8'));
}

function verifyIntegrity(beforeHash) {
  const csPath = path.join(ROOT, 'data/cs/a1.js');
  const wwwPath = path.join(ROOT, 'www/data/cs/a1.js');
  const afterHash = require('crypto').createHash('md5').update(fs.readFileSync(csPath)).digest('hex');
  const mirror = fs.readFileSync(csPath, 'utf8') === fs.readFileSync(wwwPath, 'utf8');
  let syntax = 'PASS';
  try {
    execSync('node --check data/cs/a1.js', { cwd: ROOT, stdio: 'pipe' });
  } catch {
    syntax = 'FAIL';
  }
  const cs = loadWords('data/cs/a1.js');
  const lv = loadWords('data/a1.js');
  let order = 'PASS';
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].de !== cs[i].de) { order = 'FAIL'; break; }
  }
  const ids = cs.map((e, i) => entryId(e, i));
  const unique = new Set(ids);
  return {
    productionChanges: beforeHash === afterHash ? 0 : 1,
    deChanges: 0,
    cards: cs.length,
    idUniqueness: unique.size === ids.length ? 'PASS' : 'FAIL',
    idOrder: order,
    syntax,
    mirror: mirror ? 'PASS' : 'FAIL',
  };
}

function main() {
  const csPath = path.join(ROOT, 'data/cs/a1.js');
  const beforeHash = require('crypto').createHash('md5').update(fs.readFileSync(csPath)).digest('hex');

  const validated = loadValidatedFindings();
  const parityFindings = validated.findings.filter((f) => f.validationStatus === 'MISSING_STUDY_PARITY');

  const byCard = new Map();
  for (const f of parityFindings) {
    if (!byCard.has(f.cardId)) byCard.set(f.cardId, f);
  }

  if (byCard.size !== 14) {
    throw new Error(`Expected 14 unique MISSING_STUDY_PARITY cards, got ${byCard.size}`);
  }
  if (parityFindings.length !== 14) {
    throw new Error(`Expected 14 findings, got ${parityFindings.length}`);
  }

  const lv = loadWords('data/a1.js');
  const cs = loadWords('data/cs/a1.js');
  const lvById = new Map(lv.map((e, i) => [entryId(e, i), { entry: e, index: i }]));
  const csById = new Map(cs.map((e, i) => [entryId(e, i), { entry: e, index: i }]));

  const items = [];
  const cardIds = [...byCard.keys()].sort((a, b) => {
    const ia = csById.get(a)?.index ?? 9999;
    const ib = csById.get(b)?.index ?? 9999;
    return ia - ib;
  });

  cardIds.forEach((cardId, n) => {
    const finding = byCard.get(cardId);
    const csHit = csById.get(cardId);
    if (!csHit) {
      throw new Error(`CS card not found for audit cardId ${cardId}`);
    }

    const csEntry = csHit.entry;
    const index = csHit.index;
    const lvEntry = lv[index];
    const lvCardId = entryId(lvEntry, index);
    const csCardId = entryId(csEntry, index);

    const identity = deIdentity(lvEntry, csEntry, index, cardId);
    identity.lvCardId = lvCardId;
    identity.csCardId = csCardId;
    identity.auditCardId = cardId;
    identity.cardIdMatch = lvCardId === csCardId && csCardId === cardId;

    const mapStatus = mappingStatus(identity);
    const lvStudy = lvEntry.study || null;
    const csStudy = csEntry.study || null;
    const parityStatus = classifyParity(lvStudy, csStudy);
    const lvMeta = studyMeta(lvStudy);
    const csMeta = studyMeta(csStudy);
    const keyDiff = missingKeys(lvStudy, csStudy);

    const notes = [
      finding.auditProblem || finding.reason || '',
      `Audit findingId: ${finding.findingId}`,
      `Audit cardId: ${cardId}`,
      `LV cardId at index: ${lvCardId}`,
      `CS cardId at index: ${csCardId}`,
      `LV study keys: ${lvMeta.studyKeys.length}`,
      `CS study keys: ${csMeta.studyKeys.length}`,
    ];
    if (!identity.cardIdMatch) {
      notes.push('CardId strings differ between LV study.id and CS entryId; mapped by shared index + DE lemma.');
    }
    if (keyDiff.missing.length) notes.push(`Missing vs LV: ${keyDiff.missing.join(', ')}`);
    if (keyDiff.extra.length) notes.push(`Extra in CS: ${keyDiff.extra.join(', ')}`);

    items.push({
      number: n + 1,
      auditFindingId: finding.findingId,
      cardId,
      index,
      deIdentity: identity,
      mappingStatus: mapStatus,
      parityStatus,
      lvStudyMeta: lvMeta,
      csStudyMeta: csMeta,
      missingStudyFields: keyDiff.missing,
      extraCsStudyFields: keyDiff.extra,
      lvCard: cardSnapshot(lvEntry, index, 'LV'),
      csCard: cardSnapshot(csEntry, index, 'CS'),
      lvStudy: lvStudy ? deepClone(lvStudy) : null,
      csStudy: csStudy ? deepClone(csStudy) : null,
      notes,
    });
  });

  const integrity = verifyIntegrity(beforeHash);
  if (integrity.productionChanges !== 0) {
    throw new Error('Production files changed during read-only package generation');
  }

  const summary = {
    totalAuditFindings: 14,
    uniqueCards: items.length,
    processed: `${items.length}/14`,
    mappingConfirmed: items.filter((i) => i.mappingStatus === 'CONFIRMED').length,
    mappingNeedsOwnerReview: items.filter((i) => i.mappingStatus === 'MAPPING_NEEDS_OWNER_REVIEW').length,
    missingFullStudy: items.filter((i) => i.parityStatus === 'MISSING_FULL_STUDY').length,
    missingStudyFields: items.filter((i) => i.parityStatus === 'MISSING_STUDY_FIELDS').length,
    structureDifference: items.filter((i) => i.parityStatus === 'STRUCTURE_DIFFERENCE').length,
    integrity,
    generatedAt: new Date().toISOString(),
    sourceValidatedJson: 'reports/temp/cs-a1-final-audit-on-main-validated.json',
    lvReference: 'data/a1.js',
    csProduction: 'data/cs/a1.js',
  };

  const payload = { summary, cards: items };
  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  const md = [
    '# CS–DE A1 MISSING STUDY PARITY — Review Package',
    '',
    'READ-ONLY package for ChatGPT/OWNER review. No production changes.',
    '',
    '## Summary',
    '',
    `| Metric | Value |`,
    `|---|---|`,
    `| total audit findings | ${summary.totalAuditFindings} |`,
    `| processed | ${summary.processed} |`,
    `| mapping CONFIRMED | ${summary.mappingConfirmed} |`,
    `| mapping NEEDS_OWNER_REVIEW | ${summary.mappingNeedsOwnerReview} |`,
    `| MISSING_FULL_STUDY | ${summary.missingFullStudy} |`,
    `| MISSING_STUDY_FIELDS | ${summary.missingStudyFields} |`,
    `| STRUCTURE_DIFFERENCE | ${summary.structureDifference} |`,
  '',
    '## Integrity',
    '',
    `| Check | Result |`,
    `|---|---|`,
    `| production changes | ${integrity.productionChanges} |`,
    `| DE changes | ${integrity.deChanges} |`,
    `| cards | ${integrity.cards} |`,
    `| ID uniqueness | ${integrity.idUniqueness} |`,
    `| ID/order | ${integrity.idOrder} |`,
    `| syntax | ${integrity.syntax} |`,
    `| mirror | ${integrity.mirror} |`,
    '',
    '## Cards',
    '',
    '| # | findingId | cardId | DE | LV hasStudy | CS hasStudy | parityStatus | mappingStatus |',
    '|---|---|---|---|---|---|---|---|',
    ...items.map((c) => `| ${c.number} | ${c.auditFindingId} | ${c.cardId} | ${c.deIdentity.lvDe} | ${c.lvStudyMeta.hasStudy} | ${c.csStudyMeta.hasStudy} | ${c.parityStatus} | ${c.mappingStatus} |`),
    '',
    '## Artifacts',
    '',
    '- Full JSON: `reports/temp/cs-a1-missing-study-parity-review.json`',
    '- Source audit: `reports/temp/cs-a1-final-audit-on-main-validated.json`',
    '',
    `_Generated: ${summary.generatedAt.slice(0, 10)}_`,
  ].join('\n');

  fs.writeFileSync(OUT_MD, md);

  console.log('CS–DE A1 MISSING STUDY PARITY REVIEW PACKAGE — COMPLETE');
  console.log(JSON.stringify(summary, null, 2));
  return payload;
}

if (require.main === module) main();
module.exports = { main };
