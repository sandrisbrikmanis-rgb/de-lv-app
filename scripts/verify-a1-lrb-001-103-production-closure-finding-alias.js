#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { PREFIX, PREP_DIR, loadDecisionsFromManifest } = require("./lib/g2-a1-lrb-production-copy-only-prep");
const { verifyFindingRowAliasClassifications } = require("./lib/g2-a1-lrb-production-closure-finding-alias");

const CLOSURE_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/production-closure");
const APPLY_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/production-apply");
const FINAL_DIR = path.join(ROOT, "reports/g2-a1-owner/consolidation/final");
const FINDING_ROW_TOTAL = 4968;

function loadFindingRows() {
  const partPrefix = `${PREFIX}-FINDING-ROW-CLOSURE-RECONCILIATION.part-`;
  const parts = fs
    .readdirSync(CLOSURE_DIR)
    .filter((f) => f.startsWith(partPrefix))
    .sort();
  if (parts.length) {
    const rows = [];
    for (const part of parts) {
      const doc = JSON.parse(fs.readFileSync(path.join(CLOSURE_DIR, part), "utf8"));
      rows.push(...(doc.rows || []));
    }
    return rows;
  }
  const base = path.join(CLOSURE_DIR, `${PREFIX}-FINDING-ROW-CLOSURE-RECONCILIATION.json`);
  if (fs.existsSync(base)) {
    return JSON.parse(fs.readFileSync(base, "utf8")).rows;
  }
  return [];
}

function main() {
  const findingRows = loadFindingRows();
  if (findingRows.length !== FINDING_ROW_TOTAL) {
    console.log(
      JSON.stringify(
        { pass: false, blockers: [`finding_row_count:${findingRows.length}`] },
        null,
        2
      )
    );
    process.exit(1);
  }

  const atomic = JSON.parse(
    fs.readFileSync(path.join(PREP_DIR, `${PREFIX}-PRODUCTION-ATOMIC-CARD-MAPPING.json`), "utf8")
  );
  const manifest = JSON.parse(
    fs.readFileSync(path.join(FINAL_DIR, `${PREFIX}-CONSOLIDATED-OWNER-MANIFEST.json`), "utf8")
  );
  const leafDecisions = loadDecisionsFromManifest(manifest);
  const reconciliationAbs = path.join(
    APPLY_DIR,
    `${PREFIX}-PRODUCTION-TARGET-ALIAS-RECONCILIATION.json`
  );

  const result = verifyFindingRowAliasClassifications(
    findingRows,
    reconciliationAbs,
    atomic.cards,
    leafDecisions
  );

  const aliasCount = findingRows.filter((r) => r.final_classification === "PROVEN_IDENTICAL_ALIAS").length;
  const blockers = [];
  if (!result.pass) {
    if (result.false_alias_classifications) blockers.push(`false_alias_classifications:${result.false_alias_classifications}`);
    if (result.alias_rows_without_proven_group) {
      blockers.push(`alias_rows_without_proven_group:${result.alias_rows_without_proven_group}`);
    }
    if (result.alias_rows_without_two_distinct_owner_keys) {
      blockers.push(`alias_rows_without_two_distinct_owner_keys:${result.alias_rows_without_two_distinct_owner_keys}`);
    }
    if (result.alias_rows_without_identical_payload_proof) {
      blockers.push(
        `alias_rows_without_identical_payload_proof:${result.alias_rows_without_identical_payload_proof}`
      );
    }
  }
  if (aliasCount !== result.alias_row_count) {
    blockers.push(`alias_row_count_mismatch:artifact=${aliasCount},independent=${result.alias_row_count}`);
  }

  const pass = blockers.length === 0 && result.pass;
  console.log(
    JSON.stringify(
      {
        pass,
        blockers,
        alias_row_count: result.alias_row_count,
        proven_alias_groups: result.proven_alias_groups,
        false_alias_classifications: result.false_alias_classifications,
        alias_rows_without_proven_group: result.alias_rows_without_proven_group,
        alias_rows_without_two_distinct_owner_keys: result.alias_rows_without_two_distinct_owner_keys,
        alias_rows_without_identical_payload_proof: result.alias_rows_without_identical_payload_proof,
        proven_identical_alias_rows: result.alias_rows,
      },
      null,
      2
    )
  );
  process.exit(pass ? 0 : 1);
}

main();
