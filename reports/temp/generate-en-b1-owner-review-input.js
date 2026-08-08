#!/usr/bin/env node
/**
 * Generate EN-DE B1 owner review input (deterministic + Luna merge with confirmation).
 */
const fs = require("fs");
const path = require("path");

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

function cardKey(f) {
  return String(f["Card ID"] || f.cardId || "").toLowerCase();
}

function fieldKey(f) {
  return String(f.Field || f.field || "").toLowerCase();
}

function textKey(f) {
  return String(f["Current EN"] || f.currentEn || "").slice(0, 80).toLowerCase().trim();
}

function normalizeKey(f) {
  return `${cardKey(f)}|${fieldKey(f)}|${textKey(f)}`;
}

function lunaMatchesDeterministic(det, lunaF) {
  const sameCard = cardKey(det) === String(lunaF.cardId || "").toLowerCase();
  if (!sameCard) return false;
  const detField = fieldKey(det);
  const lunaField = fieldKey(lunaF);
  if (detField && lunaField && detField.includes(lunaField.split(".").pop()) || lunaField.includes(detField.split(".").pop())) {
    return true;
  }
  const detText = textKey(det);
  const lunaText = textKey(lunaF);
  if (detText && lunaText && (detText.includes(lunaText.slice(0, 40)) || lunaText.includes(detText.slice(0, 40)))) {
    return true;
  }
  return sameCard && detField === lunaField;
}

function main() {
  const deterministic = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-findings-consolidated.json"), "utf8")
  );
  const luna = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-luna-findings.json"), "utf8"));
  const lunaExecuted = luna.status === "EXECUTED";
  const lunaFindings = Array.isArray(luna.findings) ? luna.findings : [];

  let confirmed = 0;
  let rejected = 0;
  const detFindings = deterministic.findings.map((f) => {
    const match = lunaFindings.find((lf) => lunaMatchesDeterministic(f, lf));
    if (lunaExecuted && match) {
      confirmed++;
      return { ...f, Source: "deterministic", LunaStatus: "LUNA CONFIRMED" };
    }
    if (lunaExecuted && !match) {
      // Luna did not flag this deterministic item — may be false positive heuristic
      rejected++;
      return { ...f, Source: "deterministic", LunaStatus: "LUNA NOT FLAGGED (review)" };
    }
    return { ...f, Source: "deterministic", LunaStatus: "Luna not run" };
  });

  const lunaNew = [];
  for (const f of lunaFindings) {
    const dup = deterministic.findings.some((d) => lunaMatchesDeterministic(d, f));
    if (dup) continue;
    lunaNew.push({
      Level: "B1",
      Severity: f.severity,
      Type: "luna linguistic",
      "Card ID": f.cardId,
      DE: f.de || "",
      Field: f.field,
      "Current EN": f.currentEn,
      "Recommended EN": f.recommendedEn,
      Reason: f.reason,
      Source: "luna",
      LunaStatus: "NEW",
    });
  }

  const merged = [];
  const seen = new Set();
  for (const f of detFindings) {
    seen.add(normalizeKey(f));
    merged.push(f);
  }
  for (const f of lunaNew) {
    const k = normalizeKey(f);
    if (seen.has(k)) continue;
    seen.add(k);
    merged.push(f);
  }

  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, WARNING: 0, "DE SOURCE ISSUE": 0 };
  for (const f of merged) {
    const s = f.Severity;
    if (sev[s] !== undefined) sev[s]++;
  }

  const repairCandidates = merged.filter(
    (f) => f.Severity !== "WARNING" && f.Severity !== "DE SOURCE ISSUE" && f.LunaStatus !== "LUNA NOT FLAGGED (review)"
  ).length;
  const falsePositives = merged.filter((f) => f.LunaStatus === "LUNA NOT FLAGGED (review)").length;
  const deSource = merged.filter((f) => f.Severity === "DE SOURCE ISSUE").length;
  const ownerDecision = merged.filter((f) => f.Severity === "WARNING").length;

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
    `- Luna existing confirmed: **${confirmed}**`,
    `- Luna existing rejected / not flagged: **${rejected}**`,
    `- New Luna findings: **${lunaNew.length}**`,
    `- Deduplicated repair candidates: **${repairCandidates}**`,
    `- False positives / Luna not flagged: **${falsePositives}**`,
    `- DE source issues: **${deSource}**`,
    `- Owner decision (WARNING): **${ownerDecision}**`,
    "",
    "### New Luna severity",
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
      "LunaStatus",
      "Reason",
    ]),
    "",
    "## FINAL VERDICT",
    "",
    fullLuna
      ? repairCandidates > 0
        ? "## EN–DE B1 — FULL LINGUISTIC AUDIT COMPLETE\n\n## READY FOR OWNER REVIEW"
        : "## EN–DE B1 — FULL LINGUISTIC AUDIT COMPLETE"
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
    lunaNewCount: lunaNew.length,
    lunaSeverity: luna.severityCounts || {},
    deduplicatedRepairCandidates: repairCandidates,
    falsePositives,
    deSourceIssues: deSource,
    ownerDecisionNeeded: ownerDecision,
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
