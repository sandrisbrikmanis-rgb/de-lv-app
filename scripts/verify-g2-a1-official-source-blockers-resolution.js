#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");
const {
  ENTRY_ACCESS_VERIFIED,
  MANUAL_OFFICIAL_EVIDENCE_REQUIRED,
  MASTER_SOURCE_CHANGE_REQUIRED,
} = require("./lib/g2-a1-production-current/official-source-blocker-resolution");

const TOTAL_BLOCKED_AT_START = 18;

function productionDiffClean() {
  const diff = execSync("git diff --name-only -- data www/data crowdin/content crowdin/ui", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return { pass: !diff, diff: diff ? diff.split("\n") : [] };
}

function main() {
  const blockers = [];
  const resPath = path.join(ROOT, "reports/g2-a1-production-current/official-source-exact-blockers-resolution.json");
  if (!fs.existsSync(resPath)) {
    blockers.push({ code: "MISSING_RESOLUTION", hint: "npm run build:g2-a1:official-source-exact-blockers-resolution" });
  }

  let payload = null;
  if (fs.existsSync(resPath)) {
    payload = JSON.parse(fs.readFileSync(resPath, "utf8"));
    if (payload.totalBlockedAtStart !== TOTAL_BLOCKED_AT_START) {
      blockers.push({ code: "TOTAL_BLOCKED_MISMATCH", expected: TOTAL_BLOCKED_AT_START, got: payload.totalBlockedAtStart });
    }
    const resolutions = payload.resolutions || [];
    if (resolutions.length !== TOTAL_BLOCKED_AT_START) {
      blockers.push({ code: "RESOLUTION_ROW_COUNT", expected: TOTAL_BLOCKED_AT_START, got: resolutions.length });
    }
    const langs = resolutions.map((r) => r.language);
    if (new Set(langs).size !== langs.length) {
      blockers.push({ code: "DUPLICATE_LANGUAGES" });
    }

    const counts = { ENTRY_ACCESS_VERIFIED: 0, MANUAL_OFFICIAL_EVIDENCE_REQUIRED: 0, MASTER_SOURCE_CHANGE_REQUIRED: 0 };
    for (const r of resolutions) {
      if (!(r.result in counts)) {
        blockers.push({ code: "INVALID_RESULT_GROUP", language: r.language, result: r.result });
        continue;
      }
      counts[r.result] += 1;
    }

    const sum = counts.ENTRY_ACCESS_VERIFIED + counts.MANUAL_OFFICIAL_EVIDENCE_REQUIRED + counts.MASTER_SOURCE_CHANGE_REQUIRED;
    if (sum !== TOTAL_BLOCKED_AT_START) {
      blockers.push({ code: "PARTITION_SUM_FAIL", sum, expected: TOTAL_BLOCKED_AT_START, counts });
    }

    for (const r of resolutions) {
      if (r.result === ENTRY_ACCESS_VERIFIED) {
        if (!r.entryUrl || isHomepageUrl(r.entryUrl)) {
          blockers.push({ code: "VERIFIED_HOMEPAGE_URL", language: r.language, entryUrl: r.entryUrl });
        }
        if (!r.headword || !r.evidenceFragment || String(r.evidenceFragment).length < 25) {
          blockers.push({ code: "VERIFIED_MISSING_EVIDENCE", language: r.language });
        }
        if (!r.contentSha256) {
          blockers.push({ code: "VERIFIED_MISSING_SHA256", language: r.language });
        }
        if (r.negativeOutcome === "SOURCE_ENTRY_VALIDATED") {
          blockers.push({ code: "VERIFIED_NEGATIVE_FALSE_POSITIVE", language: r.language });
        }
      }
    }
  }

  const prod = productionDiffClean();
  if (!prod.pass) {
    blockers.push({ code: "UNEXPECTED_PRODUCTION_OR_CROWDIN_CHANGE", files: prod.diff });
  }

  const pass = blockers.length === 0 && payload?.classification?.includes("INDIVIDUALLY_RESOLVED");

  const gate = {
    pass,
    blockers,
    totalBlockedAtStart: TOTAL_BLOCKED_AT_START,
    counts: payload?.counts || null,
    totalEntryPathsVerified: payload?.totalEntryPathsVerified || null,
    classification: pass
      ? "G2_A1_OFFICIAL_SOURCE_BLOCKERS_INDIVIDUALLY_RESOLVED_AWAITING_OWNER_ACTION"
      : "G2_A1_OFFICIAL_SOURCE_BLOCKER_RESOLUTION_INCOMPLETE",
    nextAction: pass
      ? "OWNER_REVIEW_MANUAL_EVIDENCE_AND_MASTER_SOURCE_CHANGE_PROPOSALS"
      : "RESOLVE_EXACT_REMAINING_SOURCE_ACCESS_BLOCKERS",
    productionDiffClean: prod.pass,
    full95731AuditRan: false,
    ownerBacklogGenerated: false,
  };

  writeJsonAtomic("official-source-resolution-verification.json", gate);
  console.log(JSON.stringify(gate, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
