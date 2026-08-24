#!/usr/bin/env node
"use strict";
/**
 * Materialize ET A2 multi-translation OWNER accepted decisions (228 LABOT).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/et-a2-full-audit.json");
const ACCEPTED = path.join(ROOT, "reports/et-a2-multitranslation-owner-decisions-accepted.md");
const UPLOAD = path.join(
  ROOT,
  "uploads/et-a2-multitranslation-owner-decisions-accepted_90b6.md",
);
const OUT = path.join(ROOT, "reports/et-a2-multitranslation-owner-decisions-accepted-materialized.md");

const OVERRIDE_IDS = {
  "ET-A2-0003": "väljumine",
  "ET-A2-0005": "kokku lepitud",
  "ET-A2-0014": "tähelepanu",
  "ET-A2-0016": "praegune",
  "ET-A2-0018": "rakenduslik",
  "ET-A2-0022": "registreerimine",
  "ET-A2-0030": "pahameel",
  "ET-A2-0035": "üles-alla",
  "ET-A2-0043": "kutsuma",
  "ET-A2-0063": "populaarne",
  "ET-A2-0096": "samuti",
  "ET-A2-0116": "autojuht",
  "ET-A2-0148": "küpsetised",
  "ET-A2-0156": "täpselt",
  "ET-A2-0163": "kanaliha",
  "ET-A2-0185": "võistlus",
  "ET-A2-0197": "serveerima",
  "ET-A2-0202": "lõbu",
  "ET-A2-0203": "toimuma",
  "ET-A2-0208": "tahvel",
  "ET-A2-0219": "veetma",
};

function parseOverrideTable(src) {
  const overrides = { ...OVERRIDE_IDS };
  for (const line of src.split("\n")) {
    if (!line.startsWith("| `ET-A2-")) continue;
    const m = line.match(/`(ET-A2-\d+)`/);
    if (!m) continue;
    const parts = line.split("|").map((p) => p.trim());
    const ownerNew = (parts[4] || "").replace(/\*\*/g, "").trim();
    if (ownerNew) overrides[m[1]] = ownerNew;
  }
  return overrides;
}

function main() {
  if (!fs.existsSync(ACCEPTED) && fs.existsSync(UPLOAD)) {
    fs.mkdirSync(path.dirname(ACCEPTED), { recursive: true });
    fs.copyFileSync(UPLOAD, ACCEPTED);
  }
  const acceptedSrc = fs.readFileSync(ACCEPTED, "utf8");
  const overrides = parseOverrideTable(acceptedSrc);

  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings = audit.findings.filter((f) => f.category === "MULTIPLE_TRANSLATION" && f.validated);
  if (findings.length !== 228) {
    console.error(`Expected 228 findings, got ${findings.length}`);
    process.exit(1);
  }

  const ids = new Set(findings.map((f) => f.auditId));
  if (ids.size !== 228) {
    console.error("DUPLICATE_AUDIT_ID in source");
    process.exit(1);
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
      override: overrides[f.auditId] ? "OWNER_OVERRIDE" : "RECOMMENDED",
    };
  });

  const emptyNew = rows.filter((r) => !r.ownerNew).length;
  const overrideCount = rows.filter((r) => r.override === "OWNER_OVERRIDE").length;

  const lines = [
    "# ET–DE A2 — Multi-translation OWNER DECISIONS ACCEPTED (materialized)",
    "",
    "**Authority:** `reports/et-a2-multitranslation-owner-decisions-accepted.md`",
    "**MASTER:** v1.12",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "## Coverage",
    "",
    `- SOURCE_FINDINGS: **228**`,
    `- OWNER_RESOLVED: **228/228**`,
    `- LABOT: **228**`,
    `- OWNER_DECISION_REQUIRED: **0**`,
    `- PENDING: **0**`,
    `- MISSING_SOURCE_ROW: **0**`,
    `- DUPLICATE_AUDIT_ID: **0**`,
    `- OWNER_NEW_EMPTY: **${emptyNew}**`,
    `- OWNER_OVERRIDE_ROWS: **${overrideCount}**`,
    "",
    "| Audit ID | Card ID | Card type | Field/path | DE | CURRENT | OWNER NEW | Status |",
    "|---|---|---|---|---|---|---|---|",
  ];

  for (const r of rows) {
    const esc = (s) => String(s).replace(/\|/g, "\\|").replace(/\n/g, " ");
    lines.push(
      `| ${r.auditId} | ${r.cardId} | ${r.cardType} | \`${r.field}\` | ${esc(r.de)} | ${esc(r.current)} | ${esc(r.ownerNew)} | LABOT |`,
    );
  }

  fs.writeFileSync(OUT, lines.join("\n") + "\n");

  const summary = {
    sourceFindings: 228,
    ownerResolved: `${rows.length}/228`,
    labot: rows.length,
    ownerDecisionRequired: 0,
    pending: 0,
    ownerNewEmpty: emptyNew,
    overrideRows: overrideCount,
    out: OUT,
  };
  console.log(JSON.stringify(summary, null, 2));
  if (emptyNew !== 0 || rows.length !== 228) process.exit(1);
}

main();
