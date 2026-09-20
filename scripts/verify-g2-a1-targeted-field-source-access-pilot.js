#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const {
  SOURCE_ACCESS_OUTCOME,
  LEGACY_SOURCE_FOUND_AND_READ,
  OFFICIAL_SOURCE_ACCESS_VERSION,
} = require("./lib/g2-a1-production-current/official-source-access-constants");
const { evidenceQualityOk } = require("./lib/g2-a1-production-current/targeted-source-access-validation");

function isHomepageOnly(url) {
  if (!url) return true;
  try {
    const u = new URL(url);
    return u.pathname === "/" || u.pathname === "";
  } catch {
    return false;
  }
}

function main() {
  const blockers = [];
  const cpRoot = path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-luna-raw-checkpoints/bg");
  const legacyStem = "bg|ordinary|0.g2-a1-official-source-v1";
  const v2Stem = `bg|ordinary|0.${OFFICIAL_SOURCE_ACCESS_VERSION}`;
  const legacyRaw = path.join(cpRoot, `${legacyStem}.luna-raw.json`);
  const v2Raw = path.join(cpRoot, `${v2Stem}.luna-raw.json`);

  if (fs.existsSync(legacyRaw)) {
    const legacy = JSON.parse(fs.readFileSync(legacyRaw, "utf8"));
    const keys = Object.keys(legacy.sourceAccessByKey || {});
    let legacyFalsePositive = 0;
    for (const k of keys) {
      const b = legacy.sourceAccessByKey[k];
      if (b.de?.outcome === LEGACY_SOURCE_FOUND_AND_READ || b.target?.outcome === LEGACY_SOURCE_FOUND_AND_READ) {
        legacyFalsePositive += 1;
      }
    }
    blockers.push({
      code: "LEGACY_PILOT_FALSE_POSITIVE_ENTRY_VALIDATION",
      classification: "G2_A1_OFFICIAL_SOURCE_ACCESS_PILOT_FALSE_POSITIVE_ENTRY_VALIDATION_INSUFFICIENT",
      fields: keys.length,
      legacyFalsePositive,
      note: "v1 pilot used homepage/substring validation — not valid for resume or OWNER backlog",
    });
  }

  if (!fs.existsSync(v2Raw)) {
    blockers.push({ code: "MISSING_V2_PILOT_RAW_CHECKPOINT", expected: v2Raw });
  } else {
    const raw = JSON.parse(fs.readFileSync(v2Raw, "utf8"));
    if (raw.sourceAccessVersion !== OFFICIAL_SOURCE_ACCESS_VERSION) {
      blockers.push({ code: "PILOT_SOURCE_ACCESS_VERSION_MISMATCH", actual: raw.sourceAccessVersion });
    }
    const keys = Object.keys(raw.sourceAccessByKey || {});
    for (const k of keys) {
      const b = raw.sourceAccessByKey[k];
      for (const side of [b.de, b.target]) {
        if (!side) continue;
        if (side.outcome === LEGACY_SOURCE_FOUND_AND_READ) {
          blockers.push({ code: "LEGACY_OUTCOME_IN_V2_PILOT", key: k, role: side.role });
        }
        if (isHomepageOnly(side.entryUrl || side.finalUrl)) {
          blockers.push({ code: "HOMEPAGE_ONLY_EVIDENCE", key: k, role: side.role, url: side.finalUrl });
        }
        if (side.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED && !evidenceQualityOk(side)) {
          blockers.push({ code: "WEAK_ENTRY_EVIDENCE", key: k, role: side.role });
        }
      }
    }
  }

  const gate = {
    pass: blockers.length === 0,
    blockers,
    classification: blockers.some((b) => b.code === "LEGACY_PILOT_FALSE_POSITIVE_ENTRY_VALIDATION")
      ? "G2_A1_OFFICIAL_SOURCE_ACCESS_PILOT_FALSE_POSITIVE_ENTRY_VALIDATION_INSUFFICIENT"
      : blockers.length
        ? "G2_A1_PILOT_V2_VERIFY_FAIL"
        : "G2_A1_OFFICIAL_SOURCE_PILOT_V2_VERIFIED",
    nextAction: blockers.length
      ? "FIX_ENTRY_VALIDATION_AND_RUN_NEW_PILOTS"
      : "CONTINUE_ADAPTER_MATRIX_AND_MULTI_PILOT_SUITE",
  };

  writeJsonAtomic("targeted-field-source-access-pilot-verification.json", gate);
  console.log(JSON.stringify(gate, null, 2));
  process.exit(gate.pass ? 0 : 1);
}

main();
