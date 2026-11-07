#!/usr/bin/env node
/**
 * Generate EN-DE B1 owner review input (deterministic + Luna merge with confirmation).
 */
const fs = require("fs");
const path = require("path");
const { lunaMatchesDeterministic } = require("./finalize-en-b1-luna-findings");

const ROOT = path.join(__dirname, "..", "..");

function mdTable(rows, cols) {
  if (!rows.length) return "_(none)_\n";
  let md = "| " + cols.join(" | ") + " |\n|" + cols.map(() => "---").join("|") + "|\n";
  for (const r of rows) {
    md +=
      "| " +
      cols
        .map((c) => String(r[c] ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ").slice(0, 160))
        .join(" | ") +
      " |\n";
  }
  return md;
}

function main() {
  const deterministic = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-findings-consolidated.json"), "utf8")
  );
  const luna = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-luna-findings.json"), "utf8"));
  const lunaExecuted = luna.status === "EXECUTED";
  const lunaFindings = Array.isArray(luna.findings) ? luna.findings : [];
  const summary = luna.summary || {};

  const detReview = luna.deterministicReview || [];
  const detFindings =
    detReview.length > 0
      ? detReview.map((d) => ({
          Level: "B1",
          Severity: d.severity,
          Type: d.issueType,
          "Card ID": d.cardId,
          DE: d.deSource,
          Field: d.field,
          "Current EN": d.currentEn,
          "Recommended EN": d.recommendedEn,
          Reason: d.explanation,
          Source: d.sourceClassification,
          LunaVerdict: d.lunaVerdict,
          sectionAccentsKind: d.sectionAccentsKind || "",
        }))
      : deterministic.findings.map((f) => {
          const match = lunaFindings.find((lf) => lunaMatchesDeterministic(f, lf));
          return {
            ...f,
            Source: "deterministic",
            LunaVerdict: lunaExecuted
              ? match
                ? match.severity === "DE SOURCE ISSUE"
                  ? "DE_SOURCE_ISSUE"
                  : "CONFIRMED"
                : f.Severity === "WARNING"
                  ? "OWNER_DECISION"
                  : "REJECTED_FALSE_POSITIVE"
              : "Luna not run",
          };
        });

  const lunaNew = (luna.newLunaFindings || []).map((f) => ({
    Level: "B1",
    Severity: f.severity,
    Type: f.issueType || "luna linguistic",
    "Card ID": f.cardId,
    DE: f.de || "",
    Field: f.field,
    "Current EN": f.currentEn,
    "Recommended EN": f.recommendedEn,
    Reason: f.reason,
    Source: "new Luna finding",
    LunaVerdict: f.lunaVerdict || "CONFIRMED",
    sectionAccentsKind: f.sectionAccentsKind || "",
  }));

  const merged = [...detFindings, ...lunaNew];

  const confirmed = summary.lunaConfirmed ?? detFindings.filter((f) => f.LunaVerdict === "CONFIRMED").length;
  const rejected = summary.lunaRejected ?? detFindings.filter((f) => f.LunaVerdict === "REJECTED_FALSE_POSITIVE").length;
  const lunaNewCount = summary.newLunaFindings ?? lunaNew.length;
  const repairCandidates =
    summary.deduplicatedRepairCandidates ??
    merged.filter(
      (f) =>
        f.LunaVerdict === "CONFIRMED" &&
        f.Severity !== "WARNING" &&
        f.Severity !== "DE SOURCE ISSUE"
    ).length;
  const falsePositives = rejected;
  const deSource = summary.deSourceIssues ?? merged.filter((f) => f.LunaVerdict === "DE_SOURCE_ISSUE").length;
  const ownerDecision = summary.ownerDecision ?? merged.filter((f) => f.LunaVerdict === "OWNER_DECISION").length;

  const fullLuna =
    lunaExecuted &&
    luna.coverage?.totalCards?.audited === 3367 &&
    luna.coverage?.normalCards?.audited === 3043 &&
    luna.coverage?.studyCards?.audited === 324;

  const md = [
    "# EN–DE B1 — Owner Review Input",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "## Audit layers",
    "",
    "| Layer | Status |",
    "|---|---|",
    `| Deterministic audit | **COMPLETE** (57 findings) |`,
    `| Luna linguistic (gpt-5.6-luna) | **${luna.status}** |`,
    "",
    "## Luna coverage",
    "",
    "| Scope | Audited | Total |",
    "|---|---|---|",
    `| Normal cards | ${luna.coverage?.normalCards?.audited ?? 0} | 3043 |`,
    `| standardStudy | ${luna.coverage?.standardStudy?.audited ?? 0} | 323 |`,
    `| minimalStudy | ${luna.coverage?.minimalStudy?.audited ?? 0} | 1 |`,
    `| Total cards | ${luna.coverage?.totalCards?.audited ?? 0} | 3367 |`,
    `| Study cards | ${luna.coverage?.studyCards?.audited ?? 0} | 324 |`,
    "",
    "## Summary counts",
    "",
    `- Existing deterministic findings: **57**`,
    `- Luna confirmed: **${confirmed}**`,
    `- Luna rejected (false positive): **${rejected}**`,
    `- New Luna findings: **${lunaNewCount}**`,
    `- Deduplicated repair candidates: **${repairCandidates}**`,
    `- False positives: **${falsePositives}**`,
    `- DE source issues: **${deSource}**`,
    `- Owner decision (OWNER_DECISION): **${ownerDecision}**`,
    `- sectionAccents TECHNICAL: **${summary.sectionAccentsTechnical ?? 0}**`,
    `- sectionAccents PEDAGOGICAL: **${summary.sectionAccentsPedagogical ?? 0}**`,
    "",
    "### Severity (repair-relevant)",
    "",
    ...(luna.severityCounts
      ? Object.entries(luna.severityCounts).map(([k, v]) => `- ${k}: **${v}**`)
      : ["- _(Luna not executed)_"]),
    "",
    "## Linguistic verdicts",
    "",
    fullLuna
      ? "- MAIN TRANSLATIONS LINGUISTIC AUDIT: **COMPLETE** (3043/3043)"
      : "- MAIN TRANSLATIONS LINGUISTIC AUDIT: **NOT COMPLETE**",
    fullLuna
      ? "- STUDY LINGUISTIC AUDIT: **COMPLETE** (324/324)"
      : "- STUDY LINGUISTIC AUDIT: **NOT COMPLETE**",
    "",
    "---",
    "",
    "## Merged findings table",
    "",
    mdTable(merged, [
      "Severity",
      "Type",
      "Card ID",
      "Field",
      "Current EN",
      "Recommended EN",
      "LunaVerdict",
      "sectionAccentsKind",
      "Reason",
    ]),
    "",
    "## FINAL VERDICT",
    "",
    fullLuna
      ? "## EN–DE B1 — FULL LINGUISTIC AUDIT COMPLETE — READY FOR OWNER REVIEW"
      : "## EN–DE B1 — FULL LINGUISTIC AUDIT INCOMPLETE",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(ROOT, "reports/en-b1-owner-review-input.md"), md);

  const outJson = {
    generatedAt: new Date().toISOString(),
    lunaStatus: luna.status,
    deterministicCount: 57,
    lunaConfirmed: confirmed,
    lunaRejected: rejected,
    lunaNewCount,
    lunaSeverity: luna.severityCounts || {},
    deduplicatedRepairCandidates: repairCandidates,
    falsePositives,
    deSourceIssues: deSource,
    ownerDecisionNeeded: ownerDecision,
    sectionAccentsTechnical: summary.sectionAccentsTechnical ?? 0,
    sectionAccentsPedagogical: summary.sectionAccentsPedagogical ?? 0,
    coverage: luna.coverage,
    findings: merged,
  };

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-b1-owner-review-input.json"),
    JSON.stringify(outJson, null, 2)
  );

  console.log(JSON.stringify(outJson, null, 2));
}

main();
