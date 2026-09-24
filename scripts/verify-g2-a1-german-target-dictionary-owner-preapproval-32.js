#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  OUT_DIR,
  CANONICAL_TARGET_APP_CODES_32,
  EDITORIAL_ENTRY_TYPE,
} = require("./lib/g2-a1-production-current/german-target-dictionary-owner-preapproval-32");

const JSON_PATH = path.join(OUT_DIR, "german-target-dictionary-owner-preapproval-32.json");

function main() {
  const blockers = [];
  for (const f of [
    "german-target-dictionary-owner-preapproval-32.json",
    "german-target-dictionary-owner-preapproval-32.md",
    "german-target-dictionary-owner-preapproval-25-changes.csv",
    "german-target-dictionary-owner-preapproval-verification.json",
  ]) {
    if (!fs.existsSync(path.join(OUT_DIR, f))) blockers.push({ code: "MISSING_ARTIFACT", file: f });
  }
  if (!fs.existsSync(JSON_PATH)) {
    console.log(JSON.stringify({ pass: false, blockers }, null, 2));
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  if (!data.languageSetVerification?.pass) blockers.push({ code: "LANGUAGE_SET_FAIL", details: data.languageSetVerification?.blockers });
  if (!data.sourceLanguageDe?.pass || data.sourceLanguageDe.appCode !== "de") {
    blockers.push({ code: "DE_BLOCK_INVALID" });
  }
  if (data.sourceLanguageDe?.notInTarget32 !== true) blockers.push({ code: "DE_NOT_FLAGGED_SEPARATE" });

  const changes = data.proposedMasterChanges || [];
  if (changes.length !== 25) blockers.push({ code: "CHANGE_COUNT", got: changes.length });

  for (const code of CANONICAL_TARGET_APP_CODES_32) {
    if (changes.some((c) => c.appCode === "de")) blockers.push({ code: "DE_IN_CHANGES" });
  }

  for (const c of changes) {
    if (!c.entryEditorialType) blockers.push({ code: "MISSING_EDITORIAL_TYPE", appCode: c.appCode });
    if (!c.sourceClass) blockers.push({ code: "MISSING_SOURCE_CLASS", appCode: c.appCode });
    if (c.ownerDecision !== "PENDING") blockers.push({ code: "OWNER_DECISION_PRESET", appCode: c.appCode });
    if (c.ownerApprovalRequired !== true) blockers.push({ code: "OWNER_FLAG", appCode: c.appCode });
    const validTypes = new Set(Object.values(EDITORIAL_ENTRY_TYPE));
    if (!validTypes.has(c.entryEditorialType)) blockers.push({ code: "INVALID_EDITORIAL_TYPE", appCode: c.appCode });
  }

  if (data.constraints?.ownerLabotNelabotAssigned) blockers.push({ code: "OWNER_LABOT_ASSIGNED_FORBIDDEN" });

  const prodDiff = execSync("git diff --name-only -- data www/data crowdin scripts/lib/data/master-language-authority-sources-33.json", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  if (prodDiff) blockers.push({ code: "MASTER_OR_PRODUCTION_DIRTY", files: prodDiff.split("\n") });

  const pass = blockers.length === 0;
  console.log(
    JSON.stringify(
      {
        pass,
        blockers,
        classification: data.classification,
        metrics: data.metrics,
        canonicalTarget32: CANONICAL_TARGET_APP_CODES_32,
      },
      null,
      2,
    ),
  );
  process.exit(pass ? 0 : 1);
}

main();
