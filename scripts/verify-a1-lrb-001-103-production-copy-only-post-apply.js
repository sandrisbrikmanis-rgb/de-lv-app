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
const RECONCILIATION_PR_HEAD = "687495db5bd4fdc7dff3e342b5fff9fd7151f9ac";

function main() {
  const verification = runPostApplyVerification({
    reconciliationPrHead: RECONCILIATION_PR_HEAD,
  });
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

  const publicOut = {
    pass: verification.pass,
    blockers: verification.blockers,
    owner_keys_covered: `${verification.owner_keys_covered}/${verification.owner_keys_total}`,
    unique_production_slots: verification.unique_production_slots,
    changed_unique_production_cards: verification.changed_unique_production_cards,
    proven_alias_groups: verification.proven_alias_groups,
    alias_collapsed_owner_keys: verification.alias_collapsed_owner_keys,
    unresolved_alias_conflicts: verification.unresolved_alias_conflicts,
    owner_leaf_matches: `${verification.owner_leaf_matches}/${verification.owner_leaf_total}`,
    owner_leaf_trace_rows: verification.owner_leaf_trace_rows,
    unique_production_leaf_targets: verification.unique_production_leaf_targets,
    collapsed_duplicate_leaf_trace_rows: verification.collapsed_duplicate_leaf_trace_rows,
    changed_production_files: verification.changed_production_files,
    production_files_changed_vs_pr_head: verification.production_files_changed_vs_pr_head,
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
