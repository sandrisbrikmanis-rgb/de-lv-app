#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const { isHostnameAllowed, buildAllowlistForLanguage } = require("./lib/g2-a1-production-current/registry-domain-allowlist");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");
const { isLinguisticVerdictClosed } = require("./lib/g2-a1-production-current/linguistic-closure");

function main() {
  const blockers = [];
  const pilotResultPath = path.join(ROOT, "reports/g2-a1-production-current/targeted-field-source-access-pilot-result.json");
  const cpRoot = path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-luna-raw-checkpoints/bg");
  const stem = "bg|ordinary|0.g2-a1-official-source-v1";
  const rawPath = path.join(cpRoot, `${stem}.luna-raw.json`);
  const verifiedPath = path.join(cpRoot, `${stem}.luna-verified.json`);

  if (!fs.existsSync(pilotResultPath)) blockers.push({ code: "MISSING_PILOT_RESULT" });
  if (!fs.existsSync(rawPath)) blockers.push({ code: "MISSING_PILOT_RAW_CHECKPOINT" });
  if (!fs.existsSync(verifiedPath)) blockers.push({ code: "MISSING_PILOT_VERIFIED_CHECKPOINT" });

  const raw = fs.existsSync(rawPath) ? JSON.parse(fs.readFileSync(rawPath, "utf8")) : null;
  const verified = fs.existsSync(verifiedPath) ? JSON.parse(fs.readFileSync(verifiedPath, "utf8")) : null;
  const allow = buildAllowlistForLanguage("bg");

  const sourceKeys = raw?.sourceAccessByKey ? Object.keys(raw.sourceAccessByKey) : [];
  if (sourceKeys.length !== 25) blockers.push({ code: "PILOT_FIELD_SOURCE_COUNT", count: sourceKeys.length });

  let passFindingWithoutDualRead = 0;
  let technicalMislabeledNsr = 0;
  for (const key of sourceKeys) {
    const bundle = raw.sourceAccessByKey[key];
    if (!bundle?.de?.requestedUrl || !bundle?.target?.requestedUrl) {
      blockers.push({ code: "MISSING_DE_OR_TARGET_REQUEST", key });
    }
    if (bundle.de.finalDomain && !isHostnameAllowed(bundle.de.finalDomain, allow.de.allowedDomains)) {
      blockers.push({ code: "DE_DOMAIN_NOT_ALLOWLIST", key, domain: bundle.de.finalDomain });
    }
    if (bundle.target.finalDomain && !isHostnameAllowed(bundle.target.finalDomain, allow.target.allowedDomains)) {
      blockers.push({ code: "TARGET_DOMAIN_NOT_ALLOWLIST", key, domain: bundle.target.finalDomain });
    }
  }

  for (const rec of verified?.validatedItems || []) {
    const prov = rec.sourceAccessProvenance;
    if (rec.AUDIT_VERDICT === "PASS" || rec.AUDIT_VERDICT === "FINDING") {
      const deOk = prov?.de?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ;
      const tOk = prov?.target?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ;
      if (!deOk || !tOk) passFindingWithoutDualRead += 1;
    }
    if (rec.AUDIT_VERDICT === "NEEDS_SOURCE_REVIEW") {
      const deOk = prov?.de?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ;
      const tOk = prov?.target?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ;
      if (!deOk || !tOk) technicalMislabeledNsr += 1;
    }
  }

  if (passFindingWithoutDualRead) blockers.push({ code: "PASS_FINDING_WITHOUT_DUAL_READ", count: passFindingWithoutDualRead });
  if (technicalMislabeledNsr) blockers.push({ code: "TECHNICAL_MISLABELED_NSR", count: technicalMislabeledNsr });

  const gate = {
    pass: blockers.length === 0,
    blockers,
    pilotFields: sourceKeys.length,
    classification: blockers.length === 0 ? "G2_A1_OFFICIAL_SOURCE_ACCESS_WIRED_AND_PILOT_VERIFIED" : "G2_A1_PILOT_VERIFY_FAIL",
    nextAction: blockers.length === 0 ? "OWNER_MAY_AUTHORIZE_RESUME_OF_FULL_TARGETED_FIELD_LEVEL_AUDIT" : "FIX_PILOT_BLOCKERS",
  };

  writeJsonAtomic("targeted-field-source-access-pilot-verification.json", gate);
  console.log(JSON.stringify(gate, null, 2));
  process.exit(gate.pass ? 0 : 1);
}

main();
