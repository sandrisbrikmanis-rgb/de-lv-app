#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  runPostApplyVerification,
  writePostApplyArtifacts,
  APPLY_DIR,
} = require("./lib/g2-a1-lrb-production-copy-only-post-apply");

const PREFIX = "A1-LRB-001-103";

function main() {
  const verification = runPostApplyVerification();
  const liveSummaryPath = path.join(
    ROOT,
    "reports/g2-a1-owner/consolidation/production-apply",
    `${PREFIX}-LIVE-APPLY-RUN-SNAPSHOT.json`
  );
  let liveApplySummary = null;
  if (fs.existsSync(liveSummaryPath)) {
    liveApplySummary = JSON.parse(fs.readFileSync(liveSummaryPath, "utf8"));
  }
  writePostApplyArtifacts(verification, { exit_code: verification.pass ? 0 : 1, ...liveApplySummary });

  const outPath = path.join(APPLY_DIR, `${PREFIX}-PRODUCTION-COPY-ONLY-POST-APPLY-VERIFICATION.json`);
  const publicOut = {
    pass: verification.pass,
    blockers: verification.blockers,
    applied_cards: `${verification.applied_cards}/${verification.total_cards}`,
    owner_leaf_matches: `${verification.owner_leaf_matches}/${verification.owner_leaf_total}`,
    changed_production_files: verification.changed_production_files,
    changed_non_target_cards: verification.changed_non_target_cards,
    data_www_mirror_mismatches: verification.data_www_mirror_mismatches,
    de_changes: verification.de_changes,
    syntax_failures: verification.syntax_failures,
    unauthorized_file_changes: verification.unauthorized_file_changes,
    production_file_set_sha256_after: verification.production_file_set_sha256_after,
    atomic_mapping_sha256: verification.atomic_mapping_sha256,
    classification: verification.classification,
    next_action: verification.next_action,
  };
  console.log(JSON.stringify(publicOut, null, 2));
  process.exit(verification.pass ? 0 : 1);
}

main();
