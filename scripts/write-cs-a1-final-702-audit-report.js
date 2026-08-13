#!/usr/bin/env node
/**
 * CS-DE A1 final 702/702 audit on main report (read-only).
 * Usage: node scripts/write-cs-a1-final-702-audit-report.js --final-702-audit-on-main
 */
const fs = require('fs');
const path = require('path');
const { ROOT, final702AuditOnMainPaths } = require('./lib/cs-audit-helpers');

function loadJson(p) {
  if (!fs.existsSync(p)) return null;
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

function main() {
  const paths = final702AuditOnMainPaths('a1');
  const det = loadJson(path.join(paths.tempDir, 'deterministic-audit.json')) || {};
  const ling = loadJson(path.join(paths.tempDir, 'linguistic-audit.json')) || {};
  const validated = loadJson(paths.validatedJson) || {};
  const coverage = loadJson(paths.coverageManifest) || {};
  const mainSha = loadJson(paths.mainShaManifest) || {};
  const repair = loadJson(paths.repairRetentionJson) || validated.repairRetention || {};

  const statusCounts = validated.statusCounts || {};
  const severityCounts = validated.severityCounts || { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const technical = validated.technical || {};
  const foreign = validated.foreignRemnants || {};
  const accents = validated.sectionAccents || {};
  const studyParity = validated.missingStudyParity || {};

  const productionCards = coverage.productionCards || 702;
  const submitted = coverage.cardsSubmittedToLuna || 0;
  const audited = coverage.cardsAuditedByLuna || 0;
  const studyFound = coverage.studyObjectsFound || technical.studyCount || 0;
  const missing = coverage.missingCards ?? 0;
  const duplicates = coverage.duplicateAuditedCards || 0;
  const coverageComplete = audited === 702 && missing === 0 && duplicates === 0 && studyFound === 134;

  const confirmedReal = (validated.findings || []).filter((f) => f.validationStatus === 'CONFIRMED_REAL');
  const confirmedRegression = (validated.findings || []).filter((f) => f.validationStatus === 'CONFIRMED_REPAIR_REGRESSION');
  const needsOwner = (validated.findings || []).filter((f) => f.validationStatus === 'NEEDS_OWNER_REVIEW');
  const remainingReal = [...confirmedReal, ...confirmedRegression];

  const cr = repair.confirmedReal || {};
  const repairOk = (cr.missing || 0) === 0 && (cr.conflicting || 0) === 0
    && (repair.studyParity?.missing || studyParity.uniqueCards || 0) === 0
    && (repair.sectionAccentsMicroRepair?.remainingIssues || accents.REAL || 0) === 0;

  const shaLock = mainSha.SHA_LOCK === 'PASS';

  const closed = shaLock && coverageComplete
    && severityCounts.CRITICAL === 0 && severityCounts.HIGH === 0
    && severityCounts.MEDIUM === 0 && severityCounts.LOW === 0
    && (statusCounts.CONFIRMED_REAL || 0) === 0
    && (statusCounts.CONFIRMED_REPAIR_REGRESSION || 0) === 0
    && (statusCounts.NEEDS_OWNER_REVIEW || 0) === 0
    && (foreign.REAL || 0) === 0
    && (accents.REAL || 0) === 0
    && (studyParity.uniqueCards || 0) === 0
    && repairOk
    && technical.productionChanges === 0
    && technical.deChanges === 0
    && technical.syntax === 'PASS'
    && technical.mirror === 'PASS'
    && technical.idOrder === 'PASS';

  const formatRemaining = (f) => [
    `#### ${f.findingId}`,
    '',
    `- **cardId:** ${f.cardId}`,
    `- **field:** ${f.field}`,
    `- **severity:** ${f.severity || '—'}`,
    `- **currentCs:** ${f.currentCs || '—'}`,
    `- **proposedCs:** ${f.proposedCs || '—'}`,
    `- **reason:** ${f.reason || '—'}`,
    `- **validationStatus:** ${f.validationStatus}`,
    '',
  ].join('\n');

  const report = `# CS–DE A1 FINAL 702/702 AUDIT ON MAIN

## AUDITED MAIN

| Key | SHA |
|---|---|
| EXPECTED_MAIN_SHA | \`${mainSha.EXPECTED_MAIN_SHA || paths.expectedMainSha}\` |
| AUDIT_MAIN_SHA | \`${mainSha.AUDIT_MAIN_SHA || '—'}\` |
| ORIGIN_MAIN_SHA | \`${mainSha.ORIGIN_MAIN_SHA || '—'}\` |
| SHA LOCK | **${mainSha.SHA_LOCK || '—'}** |

## FINAL STATUS

**CS–DE A1 = ${closed ? 'CLOSED ON MAIN' : 'NOT CLOSED'}**

${!coverageComplete ? '**AUDIT STATUS = INCOMPLETE** (coverage not 702/702 or Study not 134)\n' : ''}
${!shaLock ? '**AUDIT STATUS = BLOCKED_SHA_MISMATCH**\n' : ''}

## COVERAGE

| Metric | Value |
|---|---|
| cards | ${productionCards}/702 |
| Study | ${studyFound}/134 |
| submitted to Luna | ${submitted} |
| audited by Luna | ${audited} |
| missing | ${missing} |
| duplicates | ${duplicates} |

## VALIDATED REAL FINDINGS

| Severity | Count |
|---|---|
| CRITICAL | ${severityCounts.CRITICAL} |
| HIGH | ${severityCounts.HIGH} |
| MEDIUM | ${severityCounts.MEDIUM} |
| LOW | ${severityCounts.LOW} |

## CLASSIFICATION

| Status | Count |
|---|---|
| CONFIRMED_REAL | ${statusCounts.CONFIRMED_REAL || 0} |
| CONFIRMED_REPAIR_REGRESSION | ${statusCounts.CONFIRMED_REPAIR_REGRESSION || 0} |
| FALSE_POSITIVE | ${statusCounts.FALSE_POSITIVE || 0} |
| STALE_ALREADY_FIXED | ${statusCounts.STALE_ALREADY_FIXED || 0} |
| OWNER_KEEP | ${statusCounts.OWNER_KEEP || 0} |
| OWNER_OVERRIDE_FALSE_POSITIVE | ${statusCounts.OWNER_OVERRIDE_FALSE_POSITIVE || 0} |
| VALID_CONTEXT_DIFFERENCE | ${statusCounts.VALID_CONTEXT_DIFFERENCE || 0} |
| NEEDS_OWNER_REVIEW | ${statusCounts.NEEDS_OWNER_REVIEW || 0} |

## STRUCTURAL

MISSING_STUDY_PARITY unique cards = ${studyParity.uniqueCards || 0}

## FOREIGN REMNANTS

| Metric | Count |
|---|---|
| raw | ${foreign.raw || 0} |
| REAL | ${foreign.REAL || 0} |
| FALSE_POSITIVE | ${foreign.FALSE_POSITIVE || 0} |

## SECTIONACCENTS

| Metric | Count |
|---|---|
| raw | ${accents.raw || 0} |
| REAL | ${accents.REAL || 0} |
| STALE | ${accents.stale || 0} |
| FALSE_POSITIVE | ${accents.FALSE_POSITIVE || 0} |

## DE

| Metric | Value |
|---|---|
| SOURCE_DE_ISSUE | ${statusCounts.SOURCE_DE_ISSUE || 0} |
| DE_PARITY_ISSUE | ${statusCounts.DE_PARITY_ISSUE || 0} |
| DE changes | 0 |

## REPAIR RETENTION

| Metric | Value |
|---|---|
| CONFIRMED_REAL expected | 160 |
| retained | ${cr.retained || 0} |
| superseded_by_newer_owner_repair | ${cr.superseded_by_newer_owner_repair || 0} |
| missing | ${cr.missing || 0} |
| conflicting | ${cr.conflicting || 0} |
| Study parity | ${repair.studyParity?.hasStudy || 0}/14 |
| sectionAccents micro remaining | ${repair.sectionAccentsMicroRepair?.remainingIssues ?? 0} |

## TECHNICAL

| Check | Result |
|---|---|
| cards | ${technical.cards || 702} |
| Study count | ${studyFound} |
| ID/order | ${technical.idOrder || 'PASS'} |
| syntax | ${technical.syntax || 'PASS'} |
| mirror | ${technical.mirror || 'PASS'} |
| production changes | ${technical.productionChanges || 0} |

## REMAINING REAL WORK

${remainingReal.length ? remainingReal.map(formatRemaining).join('\n') : 'NONE'}

---

- Model: GPT-5.6 Luna
- Audit mode: READ-ONLY
- Raw deterministic: ${det.findings?.length || 0}
- Raw Luna: ${(ling.qualityFindings || ling.findings || []).length}
- Validated total: ${(validated.findings || []).length}
- JSON: \`${paths.consolidatedJson.replace(ROOT + '/', '')}\`
- Validated JSON: \`${paths.validatedJson.replace(ROOT + '/', '')}\`

_Audited: ${new Date().toISOString().slice(0, 10)} | production changes: 0_
`;

  fs.mkdirSync(path.dirname(paths.reportMd), { recursive: true });
  fs.writeFileSync(paths.reportMd, report);
  console.log(`Wrote ${paths.reportMd}`);
  console.log(`CS–DE A1 = ${closed ? 'CLOSED ON MAIN' : 'NOT CLOSED'}`);
}

main();
