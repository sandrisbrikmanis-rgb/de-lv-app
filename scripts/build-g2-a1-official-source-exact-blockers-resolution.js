#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const {
  runOfficialSourceBlockerResolution,
  ENTRY_ACCESS_VERIFIED,
  MANUAL_OFFICIAL_EVIDENCE_REQUIRED,
  MASTER_SOURCE_CHANGE_REQUIRED,
} = require("./lib/g2-a1-production-current/official-source-blocker-resolution");

function mdTable(rows) {
  const header = "| Valoda | MASTER avots | Tehniskais rezultāts | Gala grupa | OWNER darbība |";
  const sep = "|--------|---------------|-----------------------|-------------|---------------|";
  const body = rows.map((r) => {
    const owner =
      r.result === ENTRY_ACCESS_VERIFIED
        ? "Nav (automātiski verificēts)"
        : r.result === MANUAL_OFFICIAL_EVIDENCE_REQUIRED
          ? "Manuāla oficiāla evidence"
          : "MASTER avota reģistra izmaiņa";
    return `| ${r.language} | ${(r.sourceUrl || r.authorityName || "").replace(/\|/g, "\\|")} | ${r.positiveOutcome}${r.technicalBlocker ? ` (${String(r.technicalBlocker).slice(0, 40)}…)` : ""} | ${r.result} | ${owner} |`;
  });
  return [header, sep, ...body].join("\n");
}

async function main() {
  const payload = await runOfficialSourceBlockerResolution();
  if (!payload.pass && payload.code) {
    console.error(JSON.stringify(payload, null, 2));
    process.exit(1);
  }

  writeJsonAtomic("official-source-exact-blockers-resolution.json", payload);

  const md = [
    "# G2/A1 — Official source exact blockers resolution (18 languages)",
    "",
    `Classification: **${payload.classification}**`,
    "",
    `Entry access verified at start: **${payload.inventory.entryAccessVerifiedAtStart}/32**`,
    `Blockers resolved individually: **${payload.totalBlockedAtStart}**`,
    "",
    `- **${ENTRY_ACCESS_VERIFIED}:** ${payload.counts.ENTRY_ACCESS_VERIFIED}`,
    `- **${MANUAL_OFFICIAL_EVIDENCE_REQUIRED}:** ${payload.counts.MANUAL_OFFICIAL_EVIDENCE_REQUIRED}`,
    `- **${MASTER_SOURCE_CHANGE_REQUIRED}:** ${payload.counts.MASTER_SOURCE_CHANGE_REQUIRED}`,
    "",
    `Total entry paths verified (est.): **${payload.totalEntryPathsVerified}/32**`,
    "",
    mdTable(payload.resolutions),
    "",
  ].join("\n");

  fs.writeFileSync(
    path.join(ROOT, "reports/g2-a1-production-current/official-source-exact-blockers-resolution.md"),
    md,
  );

  const manualLines = [
    "# Manual official evidence — OWNER instructions (per language)",
    "",
    "Do not use AI as authority. Capture from live official browser session only.",
    "",
  ];
  for (const r of payload.resolutions.filter((x) => x.result === MANUAL_OFFICIAL_EVIDENCE_REQUIRED)) {
    manualLines.push(`## ${r.language} (${r.adapterId})`);
    manualLines.push("");
    manualLines.push(payload.manualInstructionFor(r));
    manualLines.push("");
  }
  fs.writeFileSync(
    path.join(ROOT, "reports/g2-a1-production-current/manual-official-evidence-owner-instructions.md"),
    manualLines.join("\n"),
  );

  const masterLines = [
    "# MASTER source change proposals — OWNER review",
    "",
    "No MASTER merge without OWNER approval. See also `master-registry-extension-proposals-D.md`.",
    "",
  ];
  for (const r of payload.resolutions.filter((x) => x.result === MASTER_SOURCE_CHANGE_REQUIRED)) {
    masterLines.push(`## ${r.language}`);
    masterLines.push("");
    masterLines.push(`- **Blocker:** ${r.technicalBlocker}`);
    masterLines.push(`- **Current MASTER URL:** ${r.sourceUrl || "n/a"}`);
    masterLines.push(`- **Required:** OWNER-approved PRIMARY_DICTIONARY or norm URL with verified entry lookup`);
    masterLines.push("");
  }
  fs.writeFileSync(
    path.join(ROOT, "reports/g2-a1-production-current/master-source-change-proposals-owner-review.md"),
    masterLines.join("\n"),
  );

  const verification = {
    generatedAt: new Date().toISOString(),
    totalBlockedAtStart: 18,
    partitionSum:
      payload.counts.ENTRY_ACCESS_VERIFIED +
      payload.counts.MANUAL_OFFICIAL_EVIDENCE_REQUIRED +
      payload.counts.MASTER_SOURCE_CHANGE_REQUIRED,
    counts: payload.counts,
    totalEntryPathsVerified: payload.totalEntryPathsVerified,
    classification: payload.classification,
    languages: payload.resolutions.map((r) => r.language),
  };
  writeJsonAtomic("official-source-resolution-verification.json", verification);

  console.log(JSON.stringify({ gate: "BLOCKER_RESOLUTION", ...verification }, null, 2));
  process.exit(payload.classification.includes("RESOLVED") ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
