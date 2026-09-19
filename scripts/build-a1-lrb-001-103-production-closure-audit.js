#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  runProductionClosureAudit,
  writeClosureArtifacts,
  CLOSURE_DIR,
} = require("./lib/g2-a1-lrb-production-closure-audit");

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).trim();
}

function main() {
  execSync("git fetch --all --prune", { cwd: ROOT, stdio: "inherit" });

  const status = git("git status --porcelain");
  const forbidden = status
    .split("\n")
    .filter(Boolean)
    .map((line) => line.slice(3).trim())
    .filter(
      (pathPart) =>
        pathPart.startsWith("data/") ||
        pathPart.startsWith("www/data/") ||
        (pathPart.startsWith("reports/") &&
          !pathPart.startsWith("reports/g2-a1-owner/consolidation/production-closure/"))
    );
  if (forbidden.length) {
    console.error(JSON.stringify({ pass: false, blockers: ["forbidden_worktree_changes"], forbidden }, null, 2));
    process.exit(1);
  }

  const audit = runProductionClosureAudit();
  writeClosureArtifacts(audit);

  const out = {
    pass: audit.pass,
    classification: audit.classification,
    next_action: audit.next_action,
    blockers: audit.blockers,
    closure_dir: CLOSURE_DIR.replace(`${ROOT}/`, ""),
    numbers_table: audit.numbers_table,
    finding_row_reconciliation_sum: audit.finding_row_reconciliation_sum,
    finding_row_classification_counts: audit.finding_row_classification_counts,
  };
  console.log(JSON.stringify(out, null, 2));
  process.exit(audit.pass ? 0 : 1);
}

main();
