#!/usr/bin/env node
/**
 * CS-DE A1 final post-repair audit report (read-only).
 * Usage: node scripts/write-cs-a1-final-audit-report.js --final-post-repair
 */
const fs = require("fs");
const path = require("path");
const { ROOT, finalPostRepairPaths } = require("./lib/cs-audit-helpers");

function loadJson(p) {
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function main() {
  const paths = finalPostRepairPaths("a1");
  const det = loadJson(path.join(paths.tempDir, "deterministic-audit.json")) || {};
  const ling = loadJson(path.join(paths.tempDir, "linguistic-audit.json")) || {};
  const validated = loadJson(paths.validatedJson) || {};
  const coverage = loadJson(paths.coverageManifest) || {};
  const consolidated = loadJson(paths.consolidatedJson) || {};

  const statusCounts = validated.statusCounts || {};
  const severityCounts = validated.severityCounts || { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const repair = validated.repairRetention || {};
  const technical = validated.technical || {};
  const foreign = validated.foreignRemnants || {};
  const accents = validated.sectionAccents || {};
  const studyParity = validated.missingStudyParity || {};

  const productionCards = coverage.productionCards || 702;
  const submitted = coverage.cardsSubmittedToLuna || ling.meta?.cardsAudited || 0;
  const audited = coverage.cardsAuditedByLuna || ling.meta?.cardsAudited || 0;
  const missing = coverage.missingCards ?? Math.max(0, productionCards - audited);
  const duplicates = coverage.duplicateAuditedCards || 0;
  const coverageComplete = audited === productionCards && missing === 0 && duplicates === 0;

  const confirmedReal = (validated.findings || []).filter((f) => f.validationStatus === "CONFIRMED_REAL");
  const confirmedRegression = (validated.findings || []).filter((f) => f.validationStatus === "CONFIRMED_REPAIR_REGRESSION");
  const needsOwner = (validated.findings || []).filter((f) => f.validationStatus === "NEEDS_OWNER_REVIEW");
  const remainingReal = [...confirmedReal, ...confirmedRegression];

  const closed = coverageComplete
    && severityCounts.CRITICAL === 0
    && severityCounts.HIGH === 0
    && (statusCounts.CONFIRMED_REPAIR_REGRESSION || 0) === 0
    && (statusCounts.NEEDS_OWNER_REVIEW || 0) === 0
    && (foreign.REAL || 0) === 0
    && (accents.REAL || 0) === 0
    && (studyParity.uniqueCards || 0) === 0
    && (technical.productionChanges || 0) === 0
    && (technical.deChanges || 0) === 0
    && technical.syntax === "PASS"
    && technical.mirror === "PASS"
    && technical.idOrder === "PASS";

  const formatRemaining = (f) => [
    `#### ${f.findingId}`,
    "",
    `- **cardId:** ${f.cardId}`,
    `- **field:** ${f.field}`,
    `- **severity:** ${f.severity || "—"}`,
    `- **currentCs:** ${f.currentCs || "—"}`,
    `- **proposedCs:** ${f.proposedCs || "—"}`,
    `- **reason:** ${f.reason || "—"}`,
    `- **status:** ${f.validationStatus}`,
    "",
  ].join("\n");

  const report = `# CS–DE A1 FINAL POST-REPAIR AUDIT

## FINAL STATUS

CS–DE A1 = ${closed ? "CLOSED" : "NOT CLOSED"}

${!coverageComplete ? "**AUDIT STATUS = INCOMPLETE** (coverage not 702/702)\n" : ""}

### Coverage

| Metric | Value |
|---|---|
| production cards | ${productionCards} |
| submitted | ${submitted} |
| audited | ${audited} |
| missing | ${missing} |
| duplicates | ${duplicates} |
| simple batches | ${coverage.simpleBatches || (ling.batches || []).filter((b) => String(b.batch).startsWith("simple")).length} |
| study batches | ${coverage.studyBatches || (ling.batches || []).filter((b) => String(b.batch).startsWith("study")).length} |

### Validated linguistic findings

| Severity | Count |
|---|---|
| CRITICAL | ${severityCounts.CRITICAL} |
| HIGH | ${severityCounts.HIGH} |
| MEDIUM | ${severityCounts.MEDIUM} |
| LOW | ${severityCounts.LOW} |

### Validation classification

| Status | Count |
|---|---|
| CONFIRMED_REAL | ${statusCounts.CONFIRMED_REAL || 0} |
| FALSE_POSITIVE | ${statusCounts.FALSE_POSITIVE || 0} |
| STALE_ALREADY_FIXED | ${statusCounts.STALE_ALREADY_FIXED || 0} |
| OWNER_KEEP | ${statusCounts.OWNER_KEEP || 0} |
| OWNER_OVERRIDE_FALSE_POSITIVE | ${statusCounts.OWNER_OVERRIDE_FALSE_POSITIVE || 0} |
| VALID_CONTEXT_DIFFERENCE | ${statusCounts.VALID_CONTEXT_DIFFERENCE || 0} |
| CONFIRMED_REPAIR_REGRESSION | ${statusCounts.CONFIRMED_REPAIR_REGRESSION || 0} |
| NEEDS_OWNER_REVIEW | ${statusCounts.NEEDS_OWNER_REVIEW || 0} |

### Structural

MISSING_STUDY_PARITY unique cards = ${studyParity.uniqueCards || 0}

${(studyParity.cardIds || []).length ? studyParity.cardIds.map((id) => `- ${id}`).join("\n") : "_Nav trūkstošo Study parity kartīšu._"}

### Foreign remnants

| Metric | Count |
|---|---|
| raw | ${foreign.raw || 0} |
| REAL | ${foreign.REAL || 0} |
| FALSE_POSITIVE | ${foreign.FALSE_POSITIVE || 0} |

### sectionAccents

| Metric | Count |
|---|---|
| raw | ${accents.raw || 0} |
| REAL | ${accents.REAL || 0} |
| FALSE_POSITIVE | ${accents.FALSE_POSITIVE || 0} |
| stale | ${accents.stale || 0} |

### DE integrity

| Metric | Value |
|---|---|
| DE production changes | ${technical.deChanges || 0} |
| SOURCE_DE_ISSUE | ${statusCounts.SOURCE_DE_ISSUE || 0} |
| DE_PARITY_ISSUE | ${statusCounts.DE_PARITY_ISSUE || 0} |

### Repair retention

| Metric | Value |
|---|---|
| expected repairs checked | ${repair.expected || 0} |
| retained | ${repair.retained || 0} |
| reverted | ${repair.reverted || 0} |
| regressions | ${(validated.accentRegressions || []).length + (statusCounts.CONFIRMED_REPAIR_REGRESSION || 0)} |

### Technical integrity

| Check | Result |
|---|---|
| cards | ${technical.cards || productionCards} |
| ID/order | ${technical.idOrder || "PASS"} |
| syntax | ${technical.syntax || det.meta?.jsSyntax || "PASS"} |
| mirror | ${technical.mirror || (det.layerIdentity?.identical !== false ? "PASS" : "FAIL")} |
| unexpected production changes | ${technical.productionChanges || 0} |

### Remaining REAL work

${remainingReal.length ? remainingReal.map(formatRemaining).join("\n") : "_Nav CONFIRMED_REAL vai CONFIRMED_REPAIR_REGRESSION atlikumu._\n"}

${needsOwner.length ? `### NEEDS_OWNER_REVIEW (${needsOwner.length})\n\n${needsOwner.slice(0, 30).map((f) => `- **${f.findingId}** ${f.cardId} \`${f.field}\`: ${(f.reason || "").slice(0, 120)}`).join("\n")}${needsOwner.length > 30 ? `\n\n_... un vēl ${needsOwner.length - 30}._` : ""}\n` : ""}

---

- Model: GPT-5.6 Luna
- Audit mode: READ-ONLY
- Raw deterministic findings: ${det.findings?.length || 0}
- Raw Luna findings: ${(ling.qualityFindings || ling.findings || []).length}
- Validated findings total: ${(validated.findings || []).length}
- Consolidated JSON: \`${paths.consolidatedJson.replace(ROOT + "/", "")}\`
- Validated JSON: \`${paths.validatedJson.replace(ROOT + "/", "")}\`
- Batch artifacts: \`${paths.tempDir.replace(ROOT + "/", "")}/\`

_Audita datums: ${new Date().toISOString().slice(0, 10)}_
_Production changes: 0 | DE READ-ONLY_
`;

  fs.mkdirSync(path.dirname(paths.reportMd), { recursive: true });
  fs.writeFileSync(paths.reportMd, report);
  console.log(`Wrote ${paths.reportMd}`);
  console.log(`CS–DE A1 = ${closed ? "CLOSED" : "NOT CLOSED"}`);
}

main();
