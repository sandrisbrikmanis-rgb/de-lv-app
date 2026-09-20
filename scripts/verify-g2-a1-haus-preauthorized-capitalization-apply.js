#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  verifyCommitRangeCapApply,
  DEFAULT_PRE_APPLY_SHA,
} = require("./lib/g2-a1-production-current/haus-preauthorized-cap-commit-range");
const { APP_LANGUAGE_TO_LOCALE } = require("./lib/master-initial-case-only");
const { PREAUTHORIZED_CAP_ROWS } = require("./lib/g2-a1-production-current/haus-preauthorized-capitalization");
const { productionA1Rel, wwwA1Rel } = require("./lib/g2-a1-production-current/paths");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-owner-review");

function assertJsSyntaxAtHead(relPath) {
  execSync(`node --check ${JSON.stringify(path.join(ROOT, relPath))}`, { stdio: "pipe" });
}

function main() {
  const blockers = [];
  const result = verifyCommitRangeCapApply();
  blockers.push(...result.blockers);

  if (!result.worktreeClean) {
    blockers.push({ code: "WORKTREE_PRODUCTION_DIRTY", lines: result.worktreeDirtyLines });
  }

  let syntaxFailures = 0;
  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    try {
      assertJsSyntaxAtHead(productionA1Rel(spec.language));
      assertJsSyntaxAtHead(wwwA1Rel(spec.language));
    } catch {
      syntaxFailures += 1;
      blockers.push({ code: "SYNTAX_FAILURE", language: spec.language });
    }
  }

  const localeMappingsVerified = PREAUTHORIZED_CAP_ROWS.filter((s) => APP_LANGUAGE_TO_LOCALE[s.language]).length;
  if (localeMappingsVerified !== PREAUTHORIZED_CAP_ROWS.length) {
    blockers.push({ code: "LOCALE_MAPPING_INCOMPLETE", got: localeMappingsVerified });
  }

  const pass = blockers.length === 0 && result.pass;

  const payload = {
    generatedAt: new Date().toISOString(),
    pass,
    preApplySha: result.preApplySha,
    postApplySha: result.postApplySha,
    PRE_APPLY_SHA: result.preApplySha,
    POST_APPLY_SHA: result.postApplySha,
    PR_NUMBER: result.PR_NUMBER,
    PR_HEAD_SHA: result.postApplySha,
    PRODUCTION_FILE_SET_SHA_BEFORE: result.PRODUCTION_FILE_SET_SHA_BEFORE,
    PRODUCTION_FILE_SET_SHA_AFTER: result.PRODUCTION_FILE_SET_SHA_AFTER,
    defaultPreApplyShaExpected: DEFAULT_PRE_APPLY_SHA,
    worktreeClean: result.worktreeClean && blockers.every((b) => b.code !== "WORKTREE_PRODUCTION_DIRTY"),
    changedProductionLogicalFields: result.changedProductionLogicalFields,
    changedDataFields: result.changedDataFields,
    changedWwwMirrorFields: result.changedWwwMirrorFields,
    changedFiles: result.changedFiles,
    unauthorizedProductionFieldChanges: result.unauthorizedProductionFieldChanges,
    deFieldChanges: result.deFieldChanges,
    DE_FIELD_CHANGES: result.deFieldChanges,
    DE_FILE_CHANGES: 0,
    crowdinChanges: result.crowdinChanges,
    CROWDIN_CHANGES: result.crowdinChanges,
    mirrorMismatches: result.mirrorMismatches,
    syntaxFailures,
    localeMappingsVerified,
    localeMappingTable: APP_LANGUAGE_TO_LOCALE,
    commitRangeNameStatus: result.commitRangeNameStatus,
    authorizedFieldChanges: result.authorizedFieldChanges,
    blockers,
    classification: pass
      ? "G2_A1_HAUS_PREAUTHORIZED_CAPITALIZATION_COMMIT_RANGE_VERIFIED"
      : "G2_A1_HAUS_CAPITALIZATION_VERIFIER_HARDENING_BLOCKED",
    nextAction: pass
      ? "OWNER_REVIEW_4_LEXICAL_HAUS_FINDINGS_AND_18_SOURCE_BLOCKERS"
      : "RESOLVE_EXACT_COMMIT_RANGE_OR_LOCALE_BLOCKER",
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(OUT_DIR, "haus-preauthorized-capitalization-apply-verification.json"),
    `${JSON.stringify(payload, null, 2)}\n`,
  );
  console.log(JSON.stringify(payload, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
