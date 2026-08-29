/**
 * F0-COMP-13/14 — OWNER-PREP generation after PRE_BACKLOG_HISTORY_GATE PASS.
 */
const fs = require('fs');
const path = require('path');
const { writeReportAtomic } = require('./report-builder');

const OWNER_PREP_FILES = [
  'owner-prep-findings.json',
  'owner-prep-summary.md',
  'owner-prep-status.json',
];

function runPreBacklogHistoryGate(validatedFindings, registry = {}) {
  if (!validatedFindings.length) {
    return { status: 'SKIP', reason: 'VALIDATED_FINDINGS_ZERO' };
  }
  const conflicts = validatedFindings.filter((f) => f.registryConflict);
  if (conflicts.length) {
    return { status: 'FAIL', reason: 'REGISTRY_CONFLICT', conflicts };
  }
  const unresolved = validatedFindings.filter((f) => f.semanticMatch === 'NEEDS_REVIEW');
  if (unresolved.length) {
    return { status: 'FAIL', reason: 'SEMANTIC_NEEDS_REVIEW', unresolved };
  }
  return { status: 'PASS', registrySize: Object.keys(registry).length };
}

function generateOwnerPrep(validatedFindings, scopeId, reportsDir) {
  const scopeDir = path.join(reportsDir, scopeId.replace(/\//g, '_'));
  fs.mkdirSync(scopeDir, { recursive: true });

  const findings = validatedFindings.map((f) => ({
    ...f,
    ownerStatus: 'PENDING',
    proposed: f.proposed || f.findingType,
  }));

  writeReportAtomic(path.join(scopeDir, OWNER_PREP_FILES[0]), {
    scopeId,
    findings,
    generatedAt: new Date().toISOString(),
  });

  const summary = [
    `# OWNER-PREP ${scopeId}`,
    '',
    `Findings: ${findings.length}`,
    `Status: PENDING`,
    '',
    ...findings.map((f) => `- ${f.findingType || f.type}: ${f.fieldPath || f.path || 'n/a'} [PENDING]`),
  ].join('\n');
  writeReportAtomic(path.join(scopeDir, OWNER_PREP_FILES[1]), summary);

  writeReportAtomic(path.join(scopeDir, OWNER_PREP_FILES[2]), {
    scopeId,
    ownerStatus: 'PENDING',
    count: findings.length,
    files: OWNER_PREP_FILES,
  });

  return { files: OWNER_PREP_FILES.map((f) => path.join(scopeDir, f)), count: findings.length };
}

module.exports = {
  runPreBacklogHistoryGate,
  generateOwnerPrep,
  OWNER_PREP_FILES,
};
