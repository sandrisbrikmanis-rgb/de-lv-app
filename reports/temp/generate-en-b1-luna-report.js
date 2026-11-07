#!/usr/bin/env node
/**
 * Generate EN-DE B1 Luna linguistic audit report from en-b1-luna-findings.json
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");

function main() {
  const lunaPath = path.join(ROOT, "reports/temp/en-b1-luna-findings.json");
  const luna = JSON.parse(fs.readFileSync(lunaPath, "utf8"));
  const executed = luna.status === "EXECUTED";
  const summary = luna.summary || {};

  const md = [
    "# EN–DE B1 GPT-5.6 Luna Linguistic Audit",
    "",
    `**Generated:** ${luna.generatedAt || new Date().toISOString()}`,
    `**Model:** ${luna.model || "gpt-5.6-luna"}`,
    `**Status:** ${luna.status}`,
    "",
    executed
      ? "## LUNA LINGUISTIC AUDIT EXECUTED"
      : luna.status === "NOT_EXECUTED"
        ? "## LUNA LINGUISTIC AUDIT NOT EXECUTED"
        : "## LUNA LINGUISTIC AUDIT INCOMPLETE",
    "",
    luna.reason ? `**Reason:** ${luna.reason}` : "",
    "",
    "## Coverage",
    "",
    "| Scope | Audited | Total |",
    "|---|---|---|",
    `| Normal cards | ${luna.coverage?.normalCards?.audited ?? 0} | ${luna.coverage?.normalCards?.total ?? 3043} |`,
    `| standardStudy | ${luna.coverage?.standardStudy?.audited ?? 0} | ${luna.coverage?.standardStudy?.total ?? 323} |`,
    `| minimalStudy | ${luna.coverage?.minimalStudy?.audited ?? 0} | ${luna.coverage?.minimalStudy?.total ?? 1} |`,
    `| Total cards | ${luna.coverage?.totalCards?.audited ?? 0} | ${luna.coverage?.totalCards?.total ?? 3367} |`,
    `| Study cards | ${luna.coverage?.studyCards?.audited ?? 0} | ${luna.coverage?.studyCards?.total ?? 324} |`,
    "",
    "## Luna summary",
    "",
    `- Existing deterministic findings reviewed: **${summary.existingDeterministic ?? 57}**`,
    `- Luna confirmed: **${summary.lunaConfirmed ?? 0}**`,
    `- Luna rejected (false positive): **${summary.lunaRejected ?? 0}**`,
    `- New Luna findings: **${summary.newLunaFindings ?? 0}**`,
    `- Deduplicated repair candidates: **${summary.deduplicatedRepairCandidates ?? 0}**`,
    `- DE source issues: **${summary.deSourceIssues ?? 0}**`,
    `- OWNER_DECISION: **${summary.ownerDecision ?? 0}**`,
    `- sectionAccents TECHNICAL: **${summary.sectionAccentsTechnical ?? 0}**`,
    `- sectionAccents PEDAGOGICAL: **${summary.sectionAccentsPedagogical ?? 0}**`,
    "",
    "## Luna findings severity (confirmed + new)",
    "",
    ...(luna.severityCounts
      ? Object.entries(luna.severityCounts).map(([k, v]) => `- ${k}: **${v}**`)
      : ["- _(none)_"]),
    "",
    "## Linguistic verdicts",
    "",
    executed && luna.coverage?.normalCards?.audited === 3043
      ? `- MAIN TRANSLATIONS: **LINGUISTIC AUDIT COMPLETE** (${luna.coverage.normalCards.audited}/3043)`
      : `- MAIN TRANSLATIONS: **NOT COMPLETE**`,
    executed && luna.coverage?.studyCards?.audited === 324
      ? `- STUDY: **LINGUISTIC AUDIT COMPLETE** (${luna.coverage.studyCards.audited}/324)`
      : `- STUDY: **NOT COMPLETE**`,
    "",
    "## FINAL VERDICT",
    "",
    executed && luna.coverage?.totalCards?.audited === 3367
      ? "## EN–DE B1 — FULL LINGUISTIC AUDIT COMPLETE — READY FOR OWNER REVIEW"
      : "## EN–DE B1 — FULL LINGUISTIC AUDIT INCOMPLETE",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(ROOT, "reports/en-b1-luna-linguistic-audit.md"), md);
  console.log("Wrote reports/en-b1-luna-linguistic-audit.md");
}

main();
