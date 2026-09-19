#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  PREFIX,
  PREP_DIR,
  buildPrepPackage,
  writePrepManifest,
  writeSummary,
} = require("./lib/g2-a1-lrb-production-copy-only-prep");

const VERIFICATION_PROOF = path.join(
  ROOT,
  "reports/g2-a1-owner/consolidation/final/A1-LRB-001-103-CONSOLIDATION-VERIFICATION-PROOF.json"
);

function main() {
  const proofBefore = fs.existsSync(VERIFICATION_PROOF) ? fs.readFileSync(VERIFICATION_PROOF) : null;
  const result = buildPrepPackage();
  if (proofBefore) {
    fs.writeFileSync(VERIFICATION_PROOF, proofBefore);
  }

  const dryRunPath = path.join(PREP_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`);
  if (!fs.existsSync(dryRunPath)) {
    fs.writeFileSync(
      dryRunPath,
      JSON.stringify(
        {
          schema_version: 1,
          note: "Run node scripts/apply-a1-lrb-001-103-production-copy-only.js --dry-run to populate",
        },
        null,
        2
      ) + "\n"
    );
  }

  writePrepManifest(result.artifactPaths, result.generatedAt);
  const dryRun = fs.existsSync(dryRunPath) ? JSON.parse(fs.readFileSync(dryRunPath, "utf8")) : null;
  const diff = execSync("git diff --name-only", { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .filter(Boolean);
  writeSummary({ ...result.prepProof, classification_counts: result.mapping.classification_counts }, dryRun, diff);

  writePrepManifest(
    [
      `${PREFIX}-PRODUCTION-COPY-ONLY-APPLY-MAPPING.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-BLOCKERS.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-PREP-PROOF.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-DRY-RUN.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-MANIFEST.json`,
      `${PREFIX}-PRODUCTION-COPY-ONLY-SUMMARY.md`,
    ],
    result.generatedAt
  );

  console.log(
    JSON.stringify(
      {
        classification: result.prepProof.classification,
        blocked_count: result.prepProof.blocked_count,
        classification_counts: result.mapping.classification_counts,
        full_cards_atomic_ready: result.prepProof.full_cards_atomic_ready,
      },
      null,
      2
    )
  );
}

main();
