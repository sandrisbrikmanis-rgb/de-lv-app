#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { verifyG2BatchLimitsOnly } = require("./lib/g2-a1-production-current/full-discovery-executor");
const { buildFullDiscoveryMetadata } = require("./lib/g2-a1-production-current/full-discovery-metadata");
const { STALE_TRACKED_ABS } = require("./lib/g2-a1-production-current/owner-authorization-paths");
const fs = require("fs");

function main() {
  const blockers = [];
  const batch = verifyG2BatchLimitsOnly();
  if (!batch.pass) blockers.push({ code: "BATCH", detail: batch });

  const meta = buildFullDiscoveryMetadata({ executeLuna: false });
  if (!meta.AUDIT_EXECUTOR || meta.AUDIT_MODE !== "FULL_DISCOVERY") {
    blockers.push({ code: "METADATA" });
  }

  if (fs.existsSync(STALE_TRACKED_ABS)) {
    blockers.push({ code: "STALE_TRACKED_AUTH_PACKAGE" });
  }

  const prodDiff = execSync("git diff --name-only -- data www/data crowdin/content crowdin/ui", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();

  const gate = {
    G2_A1_FULL_DISCOVERY_EXECUTOR_VERIFY: blockers.length === 0 ? "PASS" : "FAIL",
    batchLimits: batch.limits,
    BATCH_LIMIT_CHANGES: 0,
    productionChanges: prodDiff ? prodDiff.split("\n").length : 0,
    FULL_LINGUISTIC_AUDIT_EXECUTED: 0,
    blockers,
  };

  console.log(JSON.stringify(gate, null, 2));
  process.exit(blockers.length === 0 ? 0 : 1);
}

main();
