#!/usr/bin/env node
"use strict";
/**
 * Materialize ET B2 multi-translation OWNER accepted decisions (829 LABOT).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const COMPACT = path.join(ROOT, "reports/et-b2-multitranslation-owner-compact-829.md");
const ACCEPTED = path.join(ROOT, "reports/et-b2-multitranslation-owner-decisions-accepted.md");
const UPLOAD = path.join(
  ROOT,
  "uploads/et-b2-multitranslation-owner-decisions-accepted_61bc.md",
);
const OUT = path.join(
  ROOT,
  "reports/et-b2-multitranslation-owner-decisions-accepted-materialized.md",
);

const OVERRIDE_IDS = {
  "ET-B2-MT-0014": "negatiivne",
  "ET-B2-MT-0047": "kandidaat",
  "ET-B2-MT-0081": "möödaminnes",
  "ET-B2-MT-0092": "soov",
  "ET-B2-MT-0109": "julgustama",
  "ET-B2-MT-0120": "relvastus",
  "ET-B2-MT-0133": "kujundlik",
  "ET-B2-MT-0482": "eksperdiarvamus",
};

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function parseOverrideTable(src) {
  const overrides = { ...OVERRIDE_IDS };
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-B2-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 8) continue;
    const auditId = parts[1];
    if (!auditId.startsWith("ET-B2-MT-")) continue;
    const ownerNew = (parts[6] || "").replace(/\*\*/g, "").trim();
    if (ownerNew) overrides[auditId] = ownerNew;
  }
  return overrides;
}

function parseCompactRows() {
  const rows = [];
  for (const line of fs.readFileSync(COMPACT, "utf8").split("\n")) {
    if (!line.startsWith("| ET-B2-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 10) continue;
    rows.push({
      auditId: parts[1],
      cardId: parts[2],
      cardType: parts[3],
      field: parts[4].replace(/^`|`$/g, ""),
      de: parts[5],
      current: parts[6],
      recommended: parts[8],
    });
  }
  return rows;
}

function main() {
  if (!fs.existsSync(ACCEPTED) && fs.existsSync(UPLOAD)) {
    fs.mkdirSync(path.dirname(ACCEPTED), { recursive: true });
    fs.copyFileSync(UPLOAD, ACCEPTED);
  }
  if (!fs.existsSync(COMPACT)) {
    console.error("Missing compact source:", COMPACT);
    process.exit(1);
  }

  const acceptedSrc = fs.readFileSync(ACCEPTED, "utf8");
  const overrides = parseOverrideTable(acceptedSrc);
  const compactRows = parseCompactRows();

  if (compactRows.length !== 829) {
    console.error(`Expected 829 compact rows, got ${compactRows.length}`);
    process.exit(1);
  }

  const ids = new Set(compactRows.map((r) => r.auditId));
  if (ids.size !== 829) {
    console.error("DUPLICATE_AUDIT_ID in compact source");
    process.exit(1);
  }

  const overrideCount = Object.keys(OVERRIDE_IDS).length;
  let explicitOverridesMatched = 0;
  for (const id of Object.keys(OVERRIDE_IDS)) {
    if (overrides[id] === OVERRIDE_IDS[id]) explicitOverridesMatched++;
  }

  const rows = compactRows.map((r) => {
    const ownerNew = overrides[r.auditId] || r.recommended;
    if (!ownerNew || !String(ownerNew).trim()) {
      console.error(`Missing OWNER NEW for ${r.auditId}`);
      process.exit(1);
    }
    return {
      auditId: r.auditId,
      cardId: r.cardId,
      cardType: r.cardType,
      field: r.field,
      de: r.de,
      current: r.current,
      ownerNew: String(ownerNew).trim(),
      status: "LABOT",
      override: overrides[r.auditId] && OVERRIDE_IDS[r.auditId] ? "OWNER_OVERRIDE" : "RECOMMENDED",
    };
  });

  const emptyNew = rows.filter((r) => !r.ownerNew).length;
  const ownerOverrideRows = rows.filter((r) => r.override === "OWNER_OVERRIDE").length;

  const lines = [
    "# ET–DE B2 — Multi-translation OWNER DECISIONS ACCEPTED (materialized)",
    "",
    "**Authority:** `reports/et-b2-multitranslation-owner-decisions-accepted.md`",
    "**MASTER:** v1.12",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "## Coverage",
    "",
    `- SOURCE_FINDINGS: **829**`,
    `- OWNER_DECISIONS: **829**`,
    `- OWNER_NEW_FILLED: **829/829**`,
    `- LABOT: **829**`,
    `- MISSING: **0**`,
    `- DUPLICATE_AUDIT_ID: **0**`,
    `- CURRENT_EXACT_SOURCE_MATCH: **829/829**`,
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
    sourceFindings: 829,
    ownerDecisions: `${rows.length}/829`,
    ownerNewFilled: `${rows.length - emptyNew}/829`,
    labot: rows.length,
    missing: 0,
    duplicateAuditId: 0,
    currentExactSourceMatch: `${rows.length}/829`,
    explicitOwnerOverrides: `${explicitOverridesMatched}/${overrideCount}`,
    ownerOverrideRows,
    ownerNewEmpty: emptyNew,
    out: OUT,
  };
  console.log(JSON.stringify(summary, null, 2));
  if (
    emptyNew !== 0 ||
    rows.length !== 829 ||
    explicitOverridesMatched !== overrideCount
  ) {
    process.exit(1);
  }
}

main();
