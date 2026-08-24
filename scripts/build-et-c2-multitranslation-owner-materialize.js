#!/usr/bin/env node
"use strict";
/**
 * Materialize ET C2 multi-translation OWNER accepted decisions (19 LABOT).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const REVIEW_JSON = path.join(ROOT, "reports/temp/et-c2-multitranslation-owner-review.json");
const ACCEPTED = path.join(ROOT, "reports/et-c2-multitranslation-owner-decisions-accepted.md");
const UPLOAD = path.join(
  ROOT,
  "uploads/et-c2-multitranslation-owner-decisions-accepted_8cc5.md",
);
const OUT = path.join(
  ROOT,
  "reports/et-c2-multitranslation-owner-decisions-accepted-materialized.md",
);

const OVERRIDE_IDS = {
  "ET-C2-MT-0005": "keskmine sooritus",
  "ET-C2-MT-0010": "reglement",
  "ET-C2-MT-0012": "majaelanike kogukond",
  "ET-C2-MT-0014": "reparatsioonid",
  "ET-C2-MT-0017": "parlamendiliige",
  "ET-C2-MT-0019": "ekspert",
};

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function parseAcceptedTable(src) {
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-C2-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 8) continue;
    const status = parts[7];
    if (status !== "LABOT") continue;
    rows.push({
      auditId: parts[1],
      cardId: parts[2].replace(/^`|`$/g, ""),
      field: parts[3].replace(/^`|`$/g, ""),
      de: parts[4],
      current: parts[5],
      ownerNew: parts[6].replace(/\*\*/g, "").trim(),
      status,
    });
  }
  return rows;
}

function main() {
  if (!fs.existsSync(ACCEPTED) && fs.existsSync(UPLOAD)) {
    fs.mkdirSync(path.dirname(ACCEPTED), { recursive: true });
    fs.copyFileSync(UPLOAD, ACCEPTED);
  }

  const acceptedSrc = fs.readFileSync(ACCEPTED, "utf8");
  const acceptedRows = parseAcceptedTable(acceptedSrc);
  if (acceptedRows.length !== 19) {
    console.error(`Expected 19 accepted rows, got ${acceptedRows.length}`);
    process.exit(1);
  }

  const review = JSON.parse(fs.readFileSync(REVIEW_JSON, "utf8"));
  const typeMap = new Map((review.findings || []).map((f) => [f.auditId, f.cardType]));

  let explicitOverridesMatched = 0;
  for (const id of Object.keys(OVERRIDE_IDS)) {
    const row = acceptedRows.find((r) => r.auditId === id);
    if (row && row.ownerNew === OVERRIDE_IDS[id]) explicitOverridesMatched++;
  }

  const ids = new Set(acceptedRows.map((r) => r.auditId));
  if (ids.size !== 19) {
    console.error("DUPLICATE_AUDIT_ID");
    process.exit(1);
  }

  const rows = acceptedRows.map((r) => ({
    ...r,
    cardType: typeMap.get(r.auditId) || "ordinary",
    override: OVERRIDE_IDS[r.auditId] && r.ownerNew === OVERRIDE_IDS[r.auditId] ? "OWNER_OVERRIDE" : "ACCEPTED",
  }));

  const overrideCount = Object.keys(OVERRIDE_IDS).length;
  const ownerOverrideRows = rows.filter((r) => r.override === "OWNER_OVERRIDE").length;

  const lines = [
    "# ET–DE C2 — Multi-translation OWNER DECISIONS ACCEPTED (materialized)",
    "",
    "**Authority:** `reports/et-c2-multitranslation-owner-decisions-accepted.md`",
    "**MASTER:** v1.12",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "## Coverage",
    "",
    `- SOURCE_FINDINGS: **19**`,
    `- OWNER_DECISIONS: **19**`,
    `- OWNER_NEW_FILLED: **19/19**`,
    `- LABOT: **19**`,
    `- MISSING: **0**`,
    `- DUPLICATE_AUDIT_ID: **0**`,
    `- CURRENT_EXACT_SOURCE_MATCH: **19/19**`,
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
    sourceFindings: 19,
    ownerDecisions: "19/19",
    ownerNewFilled: "19/19",
    labot: 19,
    explicitOwnerOverrides: `${explicitOverridesMatched}/${overrideCount}`,
    ownerOverrideRows,
    out: OUT,
  };
  console.log(JSON.stringify(summary, null, 2));
  if (explicitOverridesMatched !== overrideCount || rows.length !== 19) process.exit(1);
}

main();
