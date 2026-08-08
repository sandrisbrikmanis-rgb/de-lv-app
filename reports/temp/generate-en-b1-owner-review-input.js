#!/usr/bin/env node
/**
 * Generate EN-DE B1 owner review input (deterministic + Luna merge).
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

function normalizeKey(f) {
  const id = f["Card ID"] || f.cardId || "";
  const field = f.Field || f.field || "";
  const current = (f["Current EN"] || f.currentEn || "").slice(0, 60);
  return `${id}|${field}|${current}`;
}

function main() {
  const deterministic = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-findings-consolidated.json"), "utf8")
  );
  const lunaPath = path.join(ROOT, "reports/temp/en-b1-luna-findings.json");
  const luna = JSON.parse(fs.readFileSync(lunaPath, "utf8"));

  const detFindings = deterministic.findings.map((f) => ({
    ...f,
    Source: "deterministic",
    LunaStatus: luna.status === "COMPLETE" ? "pending Luna review" : "Luna not run",
  }));

  const lunaNew = [];
  if (luna.status === "COMPLETE" && Array.isArray(luna.findings)) {
    for (const f of luna.findings) {
      lunaNew.push({
        Level: "B1",
        Severity: f.severity,
        Type: "luna linguistic",
        "Card ID": f.cardId,
        DE: "",
        Field: f.field,
        "Current EN": f.currentEn,
        "Recommended EN": f.recommendedEn,
        Reason: f.reason,
        Source: "luna",
        LunaStatus: "NEW",
      });
    }
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

  const lunaComplete = luna.status === "COMPLETE" && luna.coverage?.totalCards?.audited === 3367;
  const lunaIncomplete = luna.status !== "COMPLETE";

  const md = [
    "# EN–DE B1 — Owner Review Input",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    "**Purpose:** Consolidated findings for OWNER REVIEW (not repair).",
    "",
    "---",
    "",
    "## Audit status",
    "",
    "| Layer | Status |",
    "|---|---|",
    `| Deterministic structural/DE/heuristic audit | **COMPLETE** (3367/3367) |`,
    `| Luna linguistic audit (gpt-5.6-luna) | **${luna.status === "NOT_EXECUTED" ? "NOT EXECUTED" : luna.status}** |`,
    "",
    luna.status === "NOT_EXECUTED"
      ? `**Reason:** ${luna.reason || "OPENAI_API_KEY unavailable"}`
      : "",
    "",
    "## Summary counts",
    "",
    `- Existing deterministic findings: **${deterministic.findings.length}** (preserved)`,
    `- Luna existing confirmed: **0** (Luna not run)`,
    `- Luna existing rejected: **0** (Luna not run)`,
    `- New Luna findings: **${lunaNew.length}**`,
    `- Deduplicated repair candidates: **${merged.filter((f) => f.Severity !== "WARNING" && f.Severity !== "DE SOURCE ISSUE").length}**`,
    "",
    "### Combined severity (deduplicated list)",
    "",
    ...Object.entries(sev).map(([k, v]) => `- ${k}: **${v}**`),
    "",
    "## Luna coverage evidence",
    "",
    "| Scope | Audited | Total |",
    "|---|---|---|",
    `| Normal cards | ${luna.coverage?.normalCards?.audited ?? 0} | ${luna.coverage?.normalCards?.total ?? 3043} |`,
    `| standardStudy | ${luna.coverage?.standardStudy?.audited ?? 0} | ${luna.coverage?.standardStudy?.total ?? 323} |`,
    `| minimalStudy | ${luna.coverage?.minimalStudy?.audited ?? 0} | ${luna.coverage?.minimalStudy?.total ?? 1} |`,
    `| Total cards | ${luna.coverage?.totalCards?.audited ?? 0} | ${luna.coverage?.totalCards?.total ?? 3367} |`,
    `| Study cards | ${luna.coverage?.studyCards?.audited ?? 0} | ${luna.coverage?.studyCards?.total ?? 324} |`,
    "",
    "## Linguistic verdicts",
    "",
    `| Verdict | Status |`,
    "|---|---|",
    `| MAIN TRANSLATIONS LINGUISTIC AUDIT | **${lunaComplete ? "PASS or findings" : "NOT RUN"}** |`,
    `| STUDY LINGUISTIC AUDIT | **${lunaComplete ? "PASS or findings" : "NOT RUN"}** |`,
    "",
    "---",
    "",
    "## Deterministic findings (57) — preserved",
    "",
    "Source: `reports/temp/en-b1-findings-consolidated.json`",
    "",
    mdTable(
      deterministic.findings,
      ["Severity", "Type", "Card ID", "DE", "Field", "Current EN", "Recommended EN", "Reason"]
    ),
    "",
    "---",
    "",
    "## Luna findings",
    "",
    lunaNew.length
      ? mdTable(lunaNew, ["Severity", "Card ID", "Field", "Current EN", "Recommended EN", "Reason"])
      : "_LUNA LINGUISTIC AUDIT NOT EXECUTED — no Luna findings._",
    "",
    "---",
    "",
    "## FINAL VERDICT",
    "",
    lunaIncomplete
      ? "## EN–DE B1 — FULL LINGUISTIC AUDIT INCOMPLETE"
      : lunaComplete
        ? merged.length > 0
          ? "## EN–DE B1 — OWNER REVIEW REQUIRED"
          : "## EN–DE B1 — FULL AUDIT COMPLETE"
        : "## EN–DE B1 — FULL LINGUISTIC AUDIT INCOMPLETE",
    "",
    lunaIncomplete
      ? "Complete Luna 3367/3367 before deterministic repair. Do not use OWNER ACCEPTED."
      : "Proceed to OWNER REVIEW on deduplicated findings list.",
    "",
    "---",
    "",
    "## Artefacts",
    "",
    "- reports/en-b1-full-audit.md",
    "- reports/en-b1-luna-linguistic-audit.md",
    "- reports/en-b1-owner-review-input.md (this file)",
    "- reports/temp/en-b1-findings-consolidated.json",
    "- reports/temp/en-b1-luna-findings.json",
  ].join("\n");

  fs.writeFileSync(path.join(ROOT, "reports/en-b1-owner-review-input.md"), md);

  const outJson = {
    generatedAt: new Date().toISOString(),
    deterministicCount: deterministic.findings.length,
    lunaStatus: luna.status,
    lunaNewCount: lunaNew.length,
    lunaConfirmed: 0,
    lunaRejected: 0,
    deduplicatedRepairCandidates: merged.filter(
      (f) => f.Severity !== "WARNING" && f.Severity !== "DE SOURCE ISSUE"
    ).length,
    severity: sev,
    findings: merged,
  };

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-b1-owner-review-input.json"),
    JSON.stringify(outJson, null, 2)
  );

  console.log("Wrote reports/en-b1-owner-review-input.md");
  console.log(JSON.stringify(outJson, null, 2));
}

main();
