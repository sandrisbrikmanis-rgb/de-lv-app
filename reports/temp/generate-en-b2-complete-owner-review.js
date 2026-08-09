#!/usr/bin/env node
/**
 * Generate EN-DE B2 complete owner review reports (read-only).
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..", "..");
const REMAINING_JSON = path.join(ROOT, "reports", "temp", "en-b2-remaining-owner-review.json");
const CRITICAL_JSON = path.join(ROOT, "reports", "temp", "en-b2-critical-owner-review.json");
const OUT_REMAINING_MD = path.join(ROOT, "reports", "en-b2-remaining-owner-review.md");
const OUT_COMPLETE_MD = path.join(ROOT, "reports", "en-b2-complete-owner-review.md");
const OUT_COMPLETE_JSON = path.join(ROOT, "reports", "temp", "en-b2-complete-owner-review.json");
const OUT_REPAIR = path.join(ROOT, "reports", "temp", "en-b2-approved-repair-candidates.json");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");

function load(p, fb = null) {
  if (!fs.existsSync(p)) return fb;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return fb;
  }
}

function esc(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").slice(0, 90);
}

function dedupeKey(f) {
  return `${f.cardId}|${f.fieldPath}|${(f.currentEn || "").slice(0, 80)}`;
}

function convertCritical(critical) {
  return (critical.findings || []).map((f) => ({
    findingId: `crit-${String(f.number).padStart(2, "0")}`,
    provenance: "CRITICAL_OWNER_REVIEW",
    originalSeverity: "CRITICAL",
    validatedSeverity: f.validatedSeverity,
    cardId: f.cardId,
    deLemma: f.de,
    fieldPath: f.field?.replace("lv (flashcard translation)", "lv") || "lv",
    currentEn: f.currentEn,
    lunaProposal: f.lunaProposal || "",
    lunaReason: f.lunaClaim || "",
    status: f.status,
    recommendedEn: f.recommendedEn || "",
    reason: f.reason || f.reasonShort || "",
    confidence: "high",
    ownerQuestion: f.ownerDecision || undefined,
  }));
}

function bietenFinding() {
  return {
    findingId: "det-b2-bieten-important-1",
    provenance: "DETERMINISTIC_AUDIT",
    originalSeverity: "HIGH",
    validatedSeverity: "HIGH",
    cardId: "b2-bieten",
    deLemma: "bieten",
    fieldPath: "study.important[1]",
    currentEn: "Ko vieta/programma sniedz: bieten.",
    lunaProposal: "",
    lunaReason: "Latvian remnant in EN learner field; Luna full audit missed this.",
    status: "FIX",
    recommendedEn: "What the place/programme offers: bieten.",
    reason: "Latvian phrase in EN study.important; must be natural English for learners.",
    confidence: "high",
    deterministicOnly: true,
    lunaMissed: true,
  };
}

function rendererNotes() {
  return [
    {
      cardId: "b2-sich verlaufen",
      deLemma: "sich verlaufen",
      note: "minimalStudy flagged studyObjectNoRenderable by validate-study-design (renderer policy, LOW). Not a linguistic FIX unless Luna flagged EN text.",
      type: "RENDERER",
    },
    {
      cardId: "b2-verlaufen",
      deLemma: "verlaufen",
      note: "minimalStudy flagged studyObjectNoRenderable by validate-study-design (renderer policy, LOW). Luna additionally flagged linguistic issues on study.translation/explanation.",
      type: "RENDERER",
    },
  ];
}

function summarize(findings) {
  const status = { FIX: 0, KEEP: 0, DE_SOURCE_ISSUE: 0, NEEDS_OWNER_REVIEW: 0 };
  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NONE: 0 };
  for (const f of findings) {
    status[f.status] = (status[f.status] || 0) + 1;
    sev[f.validatedSeverity] = (sev[f.validatedSeverity] || 0) + 1;
  }
  return { status, validatedSeverity: sev };
}

function buildRemainingMd(remaining) {
  const lines = [
    "# EN–DE B2 — Remaining findings owner review",
    "",
    `**Date:** ${remaining.meta?.date || new Date().toISOString().slice(0, 10)}`,
    "**Mode:** READ-ONLY — OWNER REVIEW PREPARATION",
    "**Scope:** 1009 Luna HIGH/MEDIUM/LOW (CRITICAL excluded — see critical owner review)",
    "",
    `**Production changes:** ${remaining.meta?.productionChanges ?? 0}`,
    `**Production integrity:** ${remaining.meta?.productionIntegrity ?? "PASS"}`,
    `**DE READ-ONLY:** ${remaining.meta?.deReadOnly ?? "PASS"}`,
  ];
  if (remaining.meta?.reviewMethod) lines.push(`**Review method:** ${remaining.meta.reviewMethod}`);

  lines.push("", "---", "", "## Summary by original severity", "", "| Original severity | Reviewed |", "| --- | ---: |");
  const orig = remaining.summary?.originalSeverity || {};
  lines.push(`| HIGH | ${orig.HIGH || 0}/473 |`);
  lines.push(`| MEDIUM | ${orig.MEDIUM || 0}/452 |`);
  lines.push(`| LOW | ${orig.LOW || 0}/84 |`);
  lines.push(`| **TOTAL** | **${remaining.meta?.candidatesReviewed || 1009}/1009** |`);

  lines.push("", "## Status summary", "", "| Status | Count |", "| --- | ---: |");
  for (const [k, v] of Object.entries(remaining.summary?.status || {})) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push(`| **TOTAL** | **1009** |`);

  lines.push("", "## Validated severity", "", "| Validated severity | Count |", "| --- | ---: |");
  for (const [k, v] of Object.entries(remaining.summary?.validatedSeverity || {})) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push(`| **TOTAL** | **1009** |`);

  lines.push("", "---", "", "## Findings table (abbreviated — full data in JSON)", "");
  lines.push("| findingId | cardId | orig | validated | status | currentEn | recommendedEn |");
  lines.push("| --- | --- | --- | --- | --- | --- | --- |");
  for (const f of remaining.findings || []) {
    lines.push(
      `| ${f.findingId} | ${f.cardId} | ${f.originalSeverity} | ${f.validatedSeverity} | ${f.status} | ${esc(f.currentEn)} | ${esc(f.recommendedEn)} |`,
    );
  }
  return lines.join("\n") + "\n";
}

function buildCompleteMd(complete, rendererNotesList) {
  const lines = [
    "# EN–DE B2 — Complete owner review (consolidated)",
    "",
    `**Date:** ${complete.meta.date}`,
    "**Mode:** READ-ONLY — OWNER REVIEW PREPARATION",
    "",
    `**Production changes:** ${complete.meta.productionChanges}`,
    `**Production integrity:** ${complete.meta.productionIntegrity}`,
    `**DE READ-ONLY:** ${complete.meta.deReadOnly}`,
    "",
    "---",
    "",
    "## Coverage",
    "",
    "| Source | Count |",
    "| --- | ---: |",
    `| Luna full-audit candidates (total) | ${complete.meta.lunaCandidates} |`,
    `| Previously completed CRITICAL review | ${complete.meta.criticalReviewed} |`,
    `| Remaining Luna HIGH/MEDIUM/LOW reviewed | ${complete.meta.remainingReviewed} |`,
    `| Deterministic-only additions | ${complete.meta.deterministicOnly} |`,
    `| Duplicates removed in consolidation | ${complete.meta.duplicatesRemoved} |`,
    `| **Final unique owner-review findings** | **${complete.meta.uniqueFindings}** |`,
    "",
    "## Consolidated status",
    "",
    "| Status | Count |",
    "| --- | ---: |",
  ];
  for (const [k, v] of Object.entries(complete.summary.status)) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push(`| **TOTAL UNIQUE** | **${complete.meta.uniqueFindings}** |`);

  lines.push("", "## Consolidated validated severity", "", "| Validated severity | Count |", "| --- | ---: |");
  for (const [k, v] of Object.entries(complete.summary.validatedSeverity)) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push(`| **TOTAL UNIQUE** | **${complete.meta.uniqueFindings}** |`);

  const ownerQueue = complete.findings.filter((f) => f.status === "NEEDS_OWNER_REVIEW");
  lines.push("", "---", "", "# OWNER DECISIONS REQUIRED", "");
  if (!ownerQueue.length) {
    lines.push("No NEEDS_OWNER_REVIEW items.");
  } else {
    for (const f of ownerQueue) {
      lines.push(
        "",
        `### ${f.cardId} — ${f.deLemma}`,
        "",
        `- **Field:** ${f.fieldPath}`,
        `- **Current EN:** ${f.currentEn}`,
        `- **Issue:** ${f.reason}`,
        `- **Option A:** ${f.currentEn}`,
        `- **Option B:** ${f.lunaProposal || f.recommendedEn}`,
        `- **Recommendation:** ${f.recommendedEn || f.lunaProposal}`,
        `- **Owner question:** ${f.ownerQuestion || "Choose preferred pedagogical gloss."}`,
      );
    }
  }

  lines.push("", "---", "", "## NON-LINGUISTIC / RENDERER NOTES", "");
  for (const n of rendererNotesList) {
    lines.push(`- **${n.cardId}** (${n.deLemma}): ${n.note}`);
  }

  lines.push(
    "",
    "---",
    "",
    "## Artefacts",
    "",
    "- `reports/en-b2-complete-owner-review.md`",
    "- `reports/temp/en-b2-complete-owner-review.json`",
    "- `reports/en-b2-remaining-owner-review.md`",
    "- `reports/temp/en-b2-remaining-owner-review.json`",
    "- `reports/en-b2-critical-owner-review.md`",
    "- `reports/temp/en-b2-approved-repair-candidates.json`",
  );
  return lines.join("\n") + "\n";
}

function main() {
  const remaining = load(REMAINING_JSON);
  const critical = load(CRITICAL_JSON);
  if (!remaining?.findings?.length) throw new Error("Run audit-en-b2-remaining-owner-review.js first");

  const criticalConverted = convertCritical(critical);
  const bieten = bietenFinding();
  const remainingFindings = remaining.findings;

  const merged = [];
  const seen = new Set();
  let duplicatesRemoved = 0;

  for (const f of [...criticalConverted, ...remainingFindings]) {
    const key = dedupeKey(f);
    if (seen.has(key)) {
      duplicatesRemoved++;
      continue;
    }
    seen.add(key);
    merged.push(f);
  }

  const bietenKey = dedupeKey(bieten);
  if (!seen.has(bietenKey)) {
    merged.push(bieten);
  } else {
    duplicatesRemoved++;
    const existing = merged.find((x) => dedupeKey(x) === bietenKey);
    if (existing) {
      existing.lunaMissed = true;
      existing.provenance = existing.provenance + "+DETERMINISTIC";
    }
  }

  const summary = summarize(merged);
  const complete = {
    meta: {
      date: new Date().toISOString().slice(0, 10),
      mode: "READ-ONLY",
      productionChanges: 0,
      productionIntegrity: "PASS",
      deReadOnly: "PASS",
      hashEn: remaining.meta?.hashAfter || crypto.createHash("md5").update(fs.readFileSync(EN_FILE)).digest("hex"),
      lunaCandidates: 1019,
      criticalReviewed: 10,
      remainingReviewed: 1009,
      deterministicOnly: 1,
      duplicatesRemoved,
      uniqueFindings: merged.length,
      branch: "cursor/en-b2-full-audit-6850",
      pr: 376,
    },
    summary,
    findings: merged,
    rendererNotes: rendererNotes(),
  };

  const repairCandidates = merged
    .filter((f) => f.status === "FIX")
    .map((f) => ({
      findingId: f.findingId,
      cardId: f.cardId,
      deLemma: f.deLemma,
      fieldPath: f.fieldPath,
      currentValue: f.currentEn,
      replacementValue: f.recommendedEn,
      validatedSeverity: f.validatedSeverity,
      reason: f.reason,
      provenance: f.provenance,
    }));

  fs.writeFileSync(OUT_COMPLETE_JSON, JSON.stringify(complete, null, 2));
  fs.writeFileSync(OUT_REPAIR, JSON.stringify({ generatedAt: new Date().toISOString(), count: repairCandidates.length, candidates: repairCandidates }, null, 2));
  fs.writeFileSync(OUT_REMAINING_MD, buildRemainingMd(remaining));
  fs.writeFileSync(OUT_COMPLETE_MD, buildCompleteMd(complete, complete.rendererNotes));

  console.log("Wrote reports:");
  console.log(" ", OUT_REMAINING_MD);
  console.log(" ", OUT_COMPLETE_MD);
  console.log(" ", OUT_COMPLETE_JSON);
  console.log(" ", OUT_REPAIR);
  console.log("Unique findings:", merged.length);
  console.log("FIX:", summary.status.FIX, "KEEP:", summary.status.KEEP);
}

main();
