#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeReportAtomic } = require("./lib/content-discovery/report-builder");
const { buildOwnerPrepUsability } = require("./lib/g2-a1-phase3/owner-prep-usability");

const OUT_MD = path.join(ROOT, "reports", "g2-a1-phase3-owner-prep-usability.md");
const OUT_PROOF = path.join(ROOT, "reports", "g2-a1-phase3-owner-prep-usability-proof.json");
const OUT_TAXONOMY = path.join(ROOT, "reports", "g2-a1-phase3-owner-taxonomy-map.json");
const OUT_BATCHES = path.join(ROOT, "reports", "g2-a1-phase3-owner-review-batches.json");
const OUT_PREVIEW = path.join(ROOT, "reports", "g2-a1-phase3-owner-review-batch-001-preview.md");

function buildMarkdown(result) {
  const lines = [
    "# G2/A1 Phase 3 — OWNER-PREP usability audit",
    "",
    `**Classification:** \`${result.classification}\``,
    `**Taxonomy version:** ${result.taxonomyVersion}`,
    `**Source hash:** \`${result.sourceHash}\``,
    `**Output hash:** \`${result.outputHash}\``,
    "",
    "## Coverage",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Findings | ${result.findingCount} |`,
    `| Raw categories | ${result.rawCategoryCount} |`,
    `| Canonical buckets | ${result.canonicalBucketCount} |`,
    `| Decision targets | ${result.decisionTargetCount} |`,
    `| OWNER decision conflicts | ${result.ownerDecisionConflictCount} |`,
    `| SOURCE_LV findings | ${result.sourceLvFindings} |`,
    `| SOURCE_LV unique clusters | ${result.sourceLvUniqueClusters} |`,
    `| Exact duplicate groups | ${result.exactDuplicateGroupCount} |`,
    `| Review batches | ${result.batchCount} |`,
    `| Max batch decision targets | ${result.maxBatchDecisionTargets} |`,
    "",
    "## Canonical bucket distribution",
    "",
    "| Bucket | Count |",
    "|--------|------:|",
  ];
  for (const [bucket, count] of Object.entries(result.canonicalDistribution).sort((a, b) => b[1] - a[1])) {
    lines.push(`| ${bucket} | ${count} |`);
  }
  lines.push("");
  lines.push("## Review tracks");
  lines.push("");
  for (const track of result.taxonomyMap.reviewTracks) {
    const trackBatches = result.batches.filter((b) => b.reviewTrack === track);
    const findings = trackBatches.reduce((sum, b) => sum + b.findingCount, 0);
    lines.push(`- **${track}**: ${trackBatches.length} batches, ${findings} findings`);
  }
  lines.push("");
  lines.push("## Artifacts");
  lines.push("");
  lines.push("- `reports/g2-a1-phase3-owner-taxonomy-map.json`");
  lines.push("- `reports/g2-a1-phase3-owner-review-batches.json`");
  lines.push("- `reports/g2-a1-phase3-owner-review-batch-001-preview.md`");
  lines.push("");
  lines.push("> All OWNER statuses remain **PENDING**. No automatic decisions were made.");
  lines.push("");
  return `${lines.join("\n")}\n`;
}

function main() {
  const result = buildOwnerPrepUsability({ root: ROOT });
  if (!result.pass) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }

  const proof = {
    classification: result.classification,
    taxonomyVersion: result.taxonomyVersion,
    sourceHash: result.sourceHash,
    outputHash: result.outputHash,
    findingCount: result.findingCount,
    rawCategoryCount: result.rawCategoryCount,
    canonicalBucketCount: result.canonicalBucketCount,
    canonicalDistribution: result.canonicalDistribution,
    exactDuplicateGroupCount: result.exactDuplicateGroupCount,
    exactDuplicateMemberCount: result.exactDuplicateMemberCount,
    decisionTargetCount: result.decisionTargetCount,
    ownerDecisionConflictCount: result.ownerDecisionConflictCount,
    sourceLvFindings: result.sourceLvFindings,
    sourceLvUniqueClusters: result.sourceLvUniqueClusters,
    reviewTrackCount: result.reviewTrackCount,
    batchCount: result.batchCount,
    maxBatchDecisionTargets: result.maxBatchDecisionTargets,
    automaticOwnerDecisions: result.automaticOwnerDecisions,
    ownerStatuses: result.ownerStatuses,
    batch001: result.batches.find((b) => b.batchId === "BATCH-001") || null,
    nextStep: "OWNER_REVIEW_BATCH_001",
  };

  const batchesForFile = result.batches.map((batch) => ({
    batchId: batch.batchId,
    reviewTrack: batch.reviewTrack,
    canonicalReviewBucket: batch.canonicalReviewBucket,
    languages: batch.languages,
    decisionTargetCount: batch.decisionTargetCount,
    sourceClusterCount: batch.sourceClusterCount,
    findingCount: batch.findingCount,
    firstStableId: batch.firstStableId,
    lastStableId: batch.lastStableId,
    sourceHash: batch.sourceHash,
    status: batch.status,
  }));

  writeReportAtomic(OUT_MD, buildMarkdown(result));
  writeReportAtomic(OUT_PROOF, proof);
  writeReportAtomic(OUT_TAXONOMY, result.taxonomyMap);
  writeReportAtomic(OUT_BATCHES, { batchCount: result.batchCount, batches: batchesForFile });
  writeReportAtomic(OUT_PREVIEW, result.batch001Preview);

  console.log(
    JSON.stringify(
      {
        classification: result.classification,
        findingCount: result.findingCount,
        batchCount: result.batchCount,
        outputHash: result.outputHash,
        reports: {
          md: path.relative(ROOT, OUT_MD),
          proof: path.relative(ROOT, OUT_PROOF),
          taxonomy: path.relative(ROOT, OUT_TAXONOMY),
          batches: path.relative(ROOT, OUT_BATCHES),
          preview: path.relative(ROOT, OUT_PREVIEW),
        },
      },
      null,
      2,
    ),
  );
}

if (require.main === module) {
  main();
}

module.exports = { main };
