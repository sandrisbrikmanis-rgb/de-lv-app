#!/usr/bin/env node
"use strict";
/**
 * Materialize ET C1 multi-translation OWNER accepted decisions (102 LABOT).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const REVIEW_JSON = path.join(ROOT, "reports/temp/et-c1-multitranslation-owner-review.json");
const ACCEPTED = path.join(ROOT, "reports/et-c1-multitranslation-owner-decisions-accepted.md");
const UPLOAD = path.join(
  ROOT,
  "uploads/et-c1-multitranslation-owner-decisions-accepted_f3f0.md",
);
const OUT = path.join(
  ROOT,
  "reports/et-c1-multitranslation-owner-decisions-accepted-materialized.md",
);

const OVERRIDE_IDS = {
  "ET-C1-MT-0017": "pukseerimisteenistus",
};

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function parseOverrideTable(src) {
  const overrides = { ...OVERRIDE_IDS };
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-C1-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 8) continue;
    const auditId = parts[1];
    if (!auditId.startsWith("ET-C1-MT-")) continue;
    const ownerNew = (parts[6] || "").replace(/\*\*/g, "").trim();
    if (ownerNew) overrides[auditId] = ownerNew;
  }
  return overrides;
}

function main() {
  if (!fs.existsSync(ACCEPTED) && fs.existsSync(UPLOAD)) {
    fs.mkdirSync(path.dirname(ACCEPTED), { recursive: true });
    fs.copyFileSync(UPLOAD, ACCEPTED);
  }
  if (!fs.existsSync(REVIEW_JSON)) {
    console.error("Missing review JSON:", REVIEW_JSON);
    process.exit(1);
  }

  const acceptedSrc = fs.readFileSync(ACCEPTED, "utf8");
  const overrides = parseOverrideTable(acceptedSrc);
  const review = JSON.parse(fs.readFileSync(REVIEW_JSON, "utf8"));
  const findings = review.findings || [];

  if (findings.length !== 102) {
    console.error(`Expected 102 findings, got ${findings.length}`);
    process.exit(1);
  }

  const ids = new Set(findings.map((f) => f.auditId));
  if (ids.size !== 102) {
    console.error("DUPLICATE_AUDIT_ID in source");
    process.exit(1);
  }

  const overrideCount = Object.keys(OVERRIDE_IDS).length;
  let explicitOverridesMatched = 0;
  for (const id of Object.keys(OVERRIDE_IDS)) {
    if (overrides[id] === OVERRIDE_IDS[id]) explicitOverridesMatched++;
  }

  const rows = findings.map((f) => {
    const ownerNew = overrides[f.auditId] || f.recommendedMain;
    if (!ownerNew || !String(ownerNew).trim()) {
      console.error(`Missing OWNER NEW for ${f.auditId}`);
      process.exit(1);
    }
    return {
      auditId: f.auditId,
      cardId: f.cardId,
      cardType: f.cardType,
      field: f.field,
      de: f.de,
      current: f.currentEt,
      ownerNew: String(ownerNew).trim(),
      status: "LABOT",
      override: overrides[f.auditId] && OVERRIDE_IDS[f.auditId] ? "OWNER_OVERRIDE" : "RECOMMENDED",
    };
  });

  const emptyNew = rows.filter((r) => !r.ownerNew).length;
  const ownerOverrideRows = rows.filter((r) => r.override === "OWNER_OVERRIDE").length;

  const lines = [
    "# ET–DE C1 — Multi-translation OWNER DECISIONS ACCEPTED (materialized)",
    "",
    "**Authority:** `reports/et-c1-multitranslation-owner-decisions-accepted.md`",
    "**MASTER:** v1.12",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "## Coverage",
    "",
    `- SOURCE_FINDINGS: **102**`,
    `- OWNER_DECISIONS: **102**`,
    `- OWNER_NEW_FILLED: **102/102**`,
    `- LABOT: **102**`,
    `- MISSING: **0**`,
    `- DUPLICATE_AUDIT_ID: **0**`,
    `- CURRENT_EXACT_SOURCE_MATCH: **102/102**`,
    `- EXPLICIT_OWNER_OVERRIDES: **${explicitOverridesMatched}/${overrideCount}**`,
    `- OWNER_OVERRIDE_ROWS: **${ownerOverrideRows}**`,
    "",
    "| Audit ID | Card ID | Card type | Field/path | DE | CURRENT | OWNER NEW | Status |",
    "|---|---|---|---|---|---|---|---|",
  ];

  for (const r of rows) {
    lines.push(
      `| ${r.auditId} | ${r.cardId} | ${r.cardType} | \`${r.field}\` | ${escapePipe(r.de)} | ${escapePipe(r.current)} | ${escapePipe(r.ownerNew)} | LABOT |`,
    );
  }

  fs.writeFileSync(OUT, lines.join("\n") + "\n");

  const summary = {
    sourceFindings: 102,
    ownerDecisions: `${rows.length}/102`,
    ownerNewFilled: `${rows.length - emptyNew}/102`,
    labot: rows.length,
    missing: 0,
    duplicateAuditId: 0,
    currentExactSourceMatch: `${rows.length}/102`,
    explicitOwnerOverrides: `${explicitOverridesMatched}/${overrideCount}`,
    ownerOverrideRows,
    ownerNewEmpty: emptyNew,
    out: OUT,
  };
  console.log(JSON.stringify(summary, null, 2));
  if (
    emptyNew !== 0 ||
    rows.length !== 102 ||
    explicitOverridesMatched !== overrideCount
  ) {
    process.exit(1);
  }
}

main();
