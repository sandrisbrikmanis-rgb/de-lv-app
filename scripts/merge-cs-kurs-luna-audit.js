#!/usr/bin/env node
/**
 * Merge deterministic + Luna Kurs audit findings into final report.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { extractUnits } = require("./lib/cs-kurs-audit-extract");

const OUT_DIR = path.join(ROOT, "reports", "temp", "cs-kurs-audit");
const DET_JSON = path.join(OUT_DIR, "full-audit.json");
const LUNA_JSON = path.join(OUT_DIR, "linguistic-audit.json");
const OUT_MD = path.join(ROOT, "reports", "cs-kurs-full-audit.md");

function mapLunaSeverity(f) {
  const cat = String(f.category || "").toUpperCase();
  const sev = String(f.severity || "MEDIUM").toUpperCase();
  if (cat === "SEMANTICS" || cat === "TRANSLATION") return "HIGH";
  if (cat === "GRAMMAR" || cat === "ORTHOGRAPHY") return sev === "LOW" ? "LOW" : "HIGH";
  if (cat.includes("SECTIONACCENTS") || cat.includes("FOREIGN")) return "HIGH";
  return sev;
}

function mapLunaStatus(f) {
  const cat = String(f.category || f.status || "").toUpperCase();
  if (cat === "SOURCE_DE_ISSUE" || cat === "DE_SOURCE_ISSUE") return "SOURCE_DE_ISSUE";
  if (cat === "FALSE_POSITIVE") return "FALSE_POSITIVE";
  if (cat === "SOURCE_LV_ISSUE") return "OWNER_REVIEW";
  return "OWNER_REVIEW";
}

function normalizeKey(file, lesson, location, field, current) {
  return `${file}|${lesson}|${location}|${field}|${String(current).slice(0, 80)}`;
}

function buildMarkdown(audit) {
  const m = audit.meta;
  const lines = [];
  lines.push("# CS–DE KURS — FULL QUALITY AUDIT");
  lines.push("");
  lines.push("## CS–DE KURS — FULL AUDIT SUMMARY");
  lines.push("");
  lines.push("| Metrika | Vērtība |");
  lines.push("|---|---|");
  lines.push(`| Auditētie production faili | ${m.productionFiles.join(", ")} |`);
  lines.push(`| LV MASTER faili | ${m.lvMasterFiles.join(", ")} |`);
  lines.push(`| Lessons skaits | ${m.lessons} |`);
  lines.push(`| Sections skaits | ${m.sectionCount || "—"} |`);
  lines.push(`| Practice/training kartīšu skaits | ${m.translateCards} (translate/training) |`);
  lines.push(`| Exercise kartīšu skaits | ${m.exerciseCards} |`);
  lines.push(`| Auditēto CS teksta vienību skaits | ${m.auditedCsTextUnits} |`);
  lines.push(`| Luna auditētas vienības | ${m.lunaUnitsAudited || 0}/${m.lunaUnitsTotal || 0} |`);
  lines.push(`| Findings skaits | ${m.findingsCount} |`);
  lines.push(`| Unique affected objects | ${m.uniqueAffectedObjects} |`);
  lines.push(`| SOURCE_DE_ISSUE | ${m.sourceDeIssue} |`);
  lines.push(`| DE_PARITY_ISSUE | ${m.deParityIssue} |`);
  lines.push(`| FALSE_POSITIVE | ${m.falsePositive} |`);
  lines.push(`| OWNER_REVIEW | ${m.ownerReview} |`);
  lines.push(`| CRITICAL | ${m.severity.CRITICAL} |`);
  lines.push(`| HIGH | ${m.severity.HIGH} |`);
  lines.push(`| MEDIUM | ${m.severity.MEDIUM} |`);
  lines.push(`| LOW | ${m.severity.LOW} |`);
  lines.push(`| Production changes | **${m.gates.productionChanges}** |`);
  lines.push(`| Linguistic audit | ${m.linguisticModel} |`);
  if (m.lunaTokens) lines.push(`| Luna tokens | ${m.lunaTokens} (${m.lunaRequests} requests) |`);
  lines.push("");
  lines.push("## OBLIGĀTIE GATES");
  lines.push("");
  lines.push("| Gate | Rezultāts |");
  lines.push("|---|---|");
  for (const [k, v] of Object.entries(m.gates)) {
    const label = k.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
    lines.push(`| ${label.toUpperCase()} | **${v}** |`);
  }
  lines.push("");
  lines.push(`## FINAL VERDICT: **${m.verdict}**`);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## FINDINGS TABLE");
  lines.push("");
  lines.push("| # | Severity | Status | File | Lesson/Section | ID/Location | Field | CURRENT | Proposed / Recommendation | Reason |");
  lines.push("| - | -------- | ------ | ---- | -------------- | ----------- | ----- | ------- | ------------------------- | ------ |");

  for (const f of audit.findings) {
    const cur = String(f.current || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
    const prop = String(f.proposed || "").replace(/\|/g, "\\|");
    const reason = String(f.reason || "").replace(/\|/g, "\\|");
    lines.push(`| ${f.num} | ${f.severity} | ${f.status} | ${f.file} | ${f.lessonSection} | ${f.location} | ${f.field} | ${cur} | ${prop} | ${reason} |`);
  }

  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## GROUPING BY OBJECT (OWNER REVIEW)");
  lines.push("");
  const groups = {};
  for (const f of audit.findings) {
    const gk = `${f.file} :: ${f.lessonSection} :: ${f.location}`;
    if (!groups[gk]) groups[gk] = [];
    groups[gk].push(f);
  }
  for (const [gk, items] of Object.entries(groups)) {
    lines.push(`### ${gk}`);
    lines.push("");
    for (const f of items) {
      lines.push(`- **#${f.num}** [${f.severity}] ${f.status} — \`${f.field}\`: ${f.reason}`);
      if (f.source) lines.push(`  - Source: ${f.source}`);
      lines.push(`  - CURRENT: ${String(f.current).slice(0, 200)}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

function main() {
  const det = JSON.parse(fs.readFileSync(DET_JSON, "utf8"));
  const luna = fs.existsSync(LUNA_JSON) ? JSON.parse(fs.readFileSync(LUNA_JSON, "utf8")) : null;
  const { units } = extractUnits();
  const unitMap = new Map(units.map((u) => [u.unitId, u]));

  const merged = [];
  const seen = new Set();
  let num = 0;

  function add(f) {
    const key = normalizeKey(f.file, f.lessonSection, f.location, f.field, f.current);
    if (seen.has(key)) return;
    seen.add(key);
    num += 1;
    merged.push({ num, ...f });
  }

  for (const f of det.findings) {
    add({
      severity: f.severity,
      status: f.status,
      file: f.file,
      lessonSection: f.lessonSection,
      location: f.location,
      field: f.field,
      current: f.current,
      proposed: f.proposed,
      reason: f.reason,
      source: "deterministic",
    });
  }

  if (luna?.findings) {
    for (const f of luna.findings) {
      const unit = unitMap.get(f.cardId);
      const current = f.currentCs || unit?.currentCs || "";
      if (!current && !f.reason) continue;
      const status = mapLunaStatus(f);
      if (status === "FALSE_POSITIVE") continue;
      add({
        severity: mapLunaSeverity(f),
        status,
        file: unit?.file || "data/cs/courseLessons.js",
        lessonSection: unit?.lessonKey || f.cardId?.split("/")[0] || "",
        location: f.cardId,
        field: unit?.field || f.field || "lv",
        current,
        proposed: f.proposedCs || "(OWNER review)",
        reason: `[Luna ${f.category || "LINGUISTIC"}] ${f.reason}`,
        source: "luna",
      });
    }
  }

  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const statusCounts = {};
  for (const f of merged) {
    severity[f.severity] = (severity[f.severity] || 0) + 1;
    statusCounts[f.status] = (statusCounts[f.status] || 0) + 1;
  }

  const uniqueObjects = new Set(merged.map((f) => `${f.file}|${f.lessonSection}|${f.location}`));

  const gates = { ...det.meta.gates };
  gates.csLinguisticQuality = (severity.CRITICAL > 0 || severity.HIGH > 0) ? "FAIL" : "PASS";
  gates.pedagogicalParity = severity.CRITICAL > 0 || merged.some((f) => f.reason?.includes("SEMANTIC")) ? "FAIL" : det.meta.gates.pedagogicalParity;

  const meta = {
    ...det.meta,
    findingsCount: merged.length,
    uniqueAffectedObjects: uniqueObjects.size,
    sourceDeIssue: statusCounts.SOURCE_DE_ISSUE || 0,
    deParityIssue: statusCounts.DE_PARITY_ISSUE || 0,
    falsePositive: statusCounts.FALSE_POSITIVE || 0,
    ownerReview: statusCounts.OWNER_REVIEW || 0,
    severity,
    gates,
    verdict: merged.length === 0 ? "CS–DE KURS — AUDIT CLEAN" : "CS–DE KURS — OWNER REVIEW / REPAIRS REQUIRED",
    linguisticModel: luna ? `GPT-5.6 Luna (${luna.meta.model}) + deterministic/heuristic` : det.meta.linguisticModel,
    lunaUnitsAudited: luna?.meta?.unitsAudited || 0,
    lunaUnitsTotal: luna?.meta?.unitsTotal || 0,
    lunaTokens: luna?.apiUsage?.totalTokens || 0,
    lunaRequests: luna?.apiUsage?.requestCount || 0,
    auditedCsTextUnits: det.meta.auditedCsTextUnits || units.length,
  };

  const audit = { meta, findings: merged };
  fs.writeFileSync(path.join(OUT_DIR, "merged-audit.json"), JSON.stringify(audit, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(audit));

  console.log(JSON.stringify({
    mergedFindings: merged.length,
    deterministic: det.findings.length,
    luna: luna?.findings?.length || 0,
    severity,
    lunaTokens: meta.lunaTokens,
  }, null, 2));
}

main();
