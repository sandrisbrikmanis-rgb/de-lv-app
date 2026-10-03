#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  runHaus32LanguageSourcePilot,
  loadHausProductionInventory,
} = require("./lib/g2-a1-production-current/haus-32-language-source-pilot");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-32-language-source-pilot");

function writeJson(name, obj) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, name), `${JSON.stringify(obj, null, 2)}\n`);
}

function csvEscape(v) {
  const s = String(v ?? "");
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

async function main() {
  const inventoryOnly = loadHausProductionInventory();
  writeJson("haus-production-current-inventory.json", inventoryOnly);

  const result = await runHaus32LanguageSourcePilot();
  if (!result.pass && result.code === "HAUS_INVENTORY_INVALID") {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }

  writeJson("haus-de-source-evidence.json", result.deEvidence);
  writeJson("haus-target-source-evidence.json", {
    generatedAt: new Date().toISOString(),
    rows: result.pilotRows.map((r) => ({
      language: r.language,
      targetEntryUrl: r.targetEntryUrl,
      targetHeadword: r.targetHeadword,
      targetMeaningFragment: r.targetMeaningFragment,
      sourceAccessStatus: r.sourceAccessStatus,
      evidenceSha256: r.evidenceSha256,
    })),
  });
  writeJson("haus-32-language-verdicts.json", {
    generatedAt: new Date().toISOString(),
    counts: result.counts,
    classification: result.classification,
    nextAction: result.nextAction,
    rows: result.pilotRows,
  });

  const mdLines = [
    "# das Haus — 32 language SOURCE-SUPPORTED pilot",
    "",
    `Classification: **${result.classification}**`,
    "",
    "| Valoda | CURRENT | Headword | Verdict | Finding | Proposed |",
    "|--------|---------|----------|---------|---------|----------|",
    ...result.pilotRows.map(
      (r) =>
        `| ${r.language} | ${csvEscape(r.currentTarget).replace(/"/g, "")} | ${r.targetHeadword || "—"} | ${r.verdict} | ${r.findingType || "—"} | ${r.proposedTarget || "—"} |`,
    ),
    "",
    `PASS: ${result.counts.PASS} | FINDING: ${result.counts.FINDING} | NSR: ${result.counts.NEEDS_SOURCE_REVIEW} | DE_ISSUE: ${result.counts.SOURCE_DE_ISSUE}`,
  ];
  fs.writeFileSync(path.join(OUT_DIR, "haus-32-language-verdicts.md"), mdLines.join("\n"));

  const csvHeader = [
    "language",
    "currentTarget",
    "verdict",
    "findingType",
    "proposedTarget",
    "targetEntryUrl",
    "sourceAccessStatus",
    "ownerReviewRequired",
  ].join(",");
  const csvBody = result.pilotRows.map((r) =>
    [
      r.language,
      r.currentTarget,
      r.verdict,
      r.findingType,
      r.proposedTarget,
      r.targetEntryUrl,
      r.sourceAccessStatus,
      r.ownerReviewRequired,
    ]
      .map(csvEscape)
      .join(","),
  );
  fs.writeFileSync(path.join(OUT_DIR, "haus-owner-review.csv"), [csvHeader, ...csvBody].join("\n"));

  writeJson("haus-source-access-summary.json", {
    generatedAt: new Date().toISOString(),
    targetEntryValidated: result.pilotRows.filter((r) => r.sourceAccessStatus === "SOURCE_ENTRY_VALIDATED").length,
    deValidated: result.deEvidence.deOutcome === "SOURCE_ENTRY_VALIDATED",
    counts: result.counts,
  });

  writeJson("haus-pilot-verification.json", {
    generatedAt: new Date().toISOString(),
    pilotRowCount: result.pilotRows.length,
    counts: result.counts,
    classification: result.classification,
  });

  fs.writeFileSync(
    path.join(OUT_DIR, "README.md"),
    [
      "# Haus 32-language pilot artifacts",
      "",
      "Read-only pilot on production CURRENT (`lv` field in each `data/<lang>/a1.js`). No production writes.",
      "",
      "Run: `npm run build:g2-a1:haus-32-language-source-pilot`",
      "Verify: `npm run verify:g2-a1:haus-32-language-source-pilot`",
    ].join("\n"),
  );

  console.log(JSON.stringify({ gate: "HAUS_32_PILOT", counts: result.counts, classification: result.classification }, null, 2));
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
