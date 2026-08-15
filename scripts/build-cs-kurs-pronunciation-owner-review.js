#!/usr/bin/env node
"use strict";
/**
 * Build CS Kurss Výslovnost OWNER review source (READ-ONLY).
 * Usage: node scripts/build-cs-kurs-pronunciation-owner-review.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const AUDIT_JSON = path.join(ROOT, "reports/temp/cs-kurs-pronunciation-audit/full-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-kurs-pronunciation-owner-review-all-findings.md");

const SEV_RANK = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };

function sortKey(findingId) {
  if (findingId.startsWith("ui/")) return `010-ui-${findingId}`;
  if (findingId === "STRUCTURAL" || findingId.startsWith("STRUCTURAL")) return `999-structural`;
  if (findingId.startsWith("kurssPronunciationLesson")) return `020-vowels-${findingId}`;
  if (findingId.startsWith("kurssConsonantsLesson")) return `030-cons-${findingId}`;
  const m = findingId.match(/^kurssLesson(\d+)/);
  if (m) return `100-lesson-${String(Number(m[1])).padStart(2, "0")}-${findingId}`;
  return `500-other-${findingId}`;
}

function escapeMdBlock(text) {
  const s = String(text ?? "");
  if (!s.includes("\n") && s.length < 120) return s;
  return "\n```\n" + s + "\n```\n";
}

function buildReport(data) {
  const quality = (data.qualityFindings || []).slice();
  quality.sort((a, b) => {
    const ka = sortKey(a.findingId || "");
    const kb = sortKey(b.findingId || "");
    if (ka !== kb) return ka.localeCompare(kb);
    const sa = SEV_RANK[String(a.severity || "").toUpperCase()] ?? 9;
    const sb = SEV_RANK[String(b.severity || "").toUpperCase()] ?? 9;
    if (sa !== sb) return sa - sb;
    const fa = `${a.field || ""}|${a.category || ""}`;
    const fb = `${b.field || ""}|${b.category || ""}`;
    return fa.localeCompare(fb);
  });

  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const cats = {};
  for (const f of quality) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (sev[s] !== undefined) sev[s] += 1;
    const c = f.category || "OTHER";
    cats[c] = (cats[c] || 0) + 1;
  }

  const uniqueTargets = new Set(quality.map((f) => f.findingId));

  const lines = [
    "# CS–DE Kurss Výslovnost — OWNER review (all findings)",
    "",
    "READ-ONLY OWNER source. **No production repairs.** Fill **Status** and **OWNER NEW** per finding.",
    "",
    "**Source audit:** `reports/cs-kurs-pronunciation-full-audit.md`",
    "**Audit JSON:** `reports/temp/cs-kurs-pronunciation-audit/full-audit.json`",
    "**Luna PROPOSED** = audit recommendation only — **not** automatic production replacement.",
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Quality findings (real) | **${quality.length}** |`,
    `| Unique targets (findingId) | **${uniqueTargets.size}** |`,
    `| FALSE_POSITIVE (excluded) | ${data.nonErrorCounts?.FALSE_POSITIVE ?? 0} |`,
    `| SOURCE_DE_ISSUE (excluded) | ${data.nonErrorCounts?.SOURCE_DE_ISSUE ?? 0} |`,
    `| Production changes | **0** |`,
    "",
    "### Severity",
    "",
    `CRITICAL: ${sev.CRITICAL}, HIGH: ${sev.HIGH}, MEDIUM: ${sev.MEDIUM}, LOW: ${sev.LOW}`,
    "",
    "### Category (top)",
    "",
    Object.entries(cats)
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => `- ${k}: ${v}`)
      .join("\n"),
    "",
    "---",
    "",
  ];

  let n = 0;
  for (const f of quality) {
    n += 1;
    const id = String(n).padStart(3, "0");
    const source = f.source === "deterministic" ? "DETERMINISTIC" : "LUNA";
    const proposed = f.proposed || f.proposedCs || "";

    lines.push(`## Finding ${id}`);
    lines.push("");
    lines.push(`**Finding ID:** ${f.findingId}`);
    lines.push(`**Severity:** ${f.severity || "MEDIUM"}`);
    lines.push(`**Category:** ${f.category || ""}`);
    lines.push(`**Source:** ${source}`);
    lines.push(`**File:** ${f.file || "data/cs/courseLessons.js"}`);
    lines.push(`**Object:** ${f.objectId || ""}`);
    lines.push(`**Field:** ${f.field || ""}`);
    lines.push("");
    lines.push("### CURRENT");
    lines.push(escapeMdBlock(f.current || ""));
    lines.push("### Luna PROPOSED");
    lines.push(proposed ? escapeMdBlock(proposed) : "(empty — deterministic or no replacement suggested)");
    lines.push("### DE context");
    lines.push(escapeMdBlock(f.deContext || ""));
    lines.push("### LV MASTER context");
    lines.push(escapeMdBlock(f.lvMasterContext || ""));
    lines.push("### Reason");
    lines.push(f.reason || "");
    lines.push("");
    lines.push("### OWNER");
    lines.push("**Status:**");
    lines.push("**OWNER NEW:**");
    lines.push("**OWNER note:**");
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  lines.push("## End");
  lines.push("");
  lines.push(`Total findings listed: **${n}**. Production changes: **0**.`);
  return lines.join("\n");
}

function main() {
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const md = buildReport(data);
  fs.writeFileSync(OUT_MD, md, "utf8");
  console.log(`Written ${OUT_MD}`);
  console.log(`Findings: ${(data.qualityFindings || []).length}`);
}

main();
