#!/usr/bin/env node
"use strict";
/**
 * Build CS–DE Kurss Členy OWNER review source (READ-ONLY).
 * Usage: node scripts/build-cs-kurs-articles-owner-review.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const AUDIT_JSON = path.join(ROOT, "reports/temp/cs-kurs-articles-audit/full-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-kurs-articles-owner-review-all-findings.md");
const { extractArticleUnits } = require("./lib/cs-kurs-articles-audit-extract");

const PREFIX_ORDER = {
  "UI-ART": 10,
  "ART-HTML": 20,
  "ART-L01": 30,
  "ART-L03": 40,
  "ART-L04": 50,
  "ART-L05": 60,
  "ART-L06": 70,
  "ART-L16": 80,
  "ART-XSEC": 90,
};

const CAT_RANK = {
  FOREIGN_LEFTOVER: 0,
  CS_TERMINOLOGY: 1,
  CS_GRAMMAR: 2,
  CS_ORTHOGRAPHY: 3,
  CS_NATURALNESS: 4,
  SEMANTIC_MISMATCH: 5,
  PEDAGOGICAL_ISSUE: 6,
  ARTICLE_ERROR: 7,
  GENDER_ERROR: 8,
  CASE_ERROR: 9,
  TABLE_MISMATCH: 10,
  SOURCE_DE_ISSUE: 11,
  DE_PARITY_ISSUE: 12,
  FALSE_POSITIVE: 13,
  OTHER: 99,
};

function auditSortKey(findingId) {
  const m = String(findingId).match(/^([A-Z0-9]+(?:-[A-Z0-9]+)?)-(\d+)$/);
  if (!m) return `999-${findingId}`;
  const prefix = m[1];
  const num = Number(m[2]);
  const ord = PREFIX_ORDER[prefix] ?? 500;
  return `${String(ord).padStart(3, "0")}-${prefix}-${String(num).padStart(4, "0")}`;
}

function escapeMdBlock(text) {
  const s = String(text ?? "");
  if (!s) return "(empty)";
  if (!s.includes("\n") && s.length < 200) return s;
  return "\n```\n" + s + "\n```\n";
}

function rawFindingKey(f) {
  return `${f.findingId}|${f.source}|${f.category}|${f.field}|${f.current}`;
}

function normalizeFindings(findings) {
  const byId = new Map();
  for (const f of findings) {
    if (!byId.has(f.findingId)) byId.set(f.findingId, []);
    byId.get(f.findingId).push(f);
  }

  const consumed = new Set();
  const ownerObjects = [];

  for (const f of findings) {
    if (f.source !== "deterministic" || f.category !== "FOREIGN_LEFTOVER") continue;
    const group = byId.get(f.findingId) || [];
    const lunaFL = group.find((x) => x.source === "luna" && x.category === "FOREIGN_LEFTOVER");
    if (!lunaFL) continue;

    ownerObjects.push({
      primaryFindingId: f.findingId,
      findings: [f, lunaFL],
      mergeType: "DET_LUNA_FOREIGN_LEFTOVER",
      foreignReconciliation: "A",
      foreignReconciliationNote:
        "Deterministic FOREIGN_LEFTOVER + Luna FOREIGN_LEFTOVER on same audit unit — single OWNER object (same LV/production issue).",
    });
    consumed.add(rawFindingKey(f));
    consumed.add(rawFindingKey(lunaFL));
  }

  for (const f of findings) {
    if (consumed.has(rawFindingKey(f))) continue;

    let foreignReconciliation = "";
    let foreignNote = "";
    if (f.source === "deterministic" && f.category === "FOREIGN_LEFTOVER") {
      foreignReconciliation = "B";
      foreignNote =
        "Deterministic FOREIGN_LEFTOVER only — Luna did not flag FOREIGN_LEFTOVER on this audit unit.";
    }

    ownerObjects.push({
      primaryFindingId: f.findingId,
      findings: [f],
      mergeType: "SINGLE",
      foreignReconciliation,
      foreignReconciliationNote: foreignNote,
    });
    consumed.add(rawFindingKey(f));
  }

  return { ownerObjects, consumed };
}

function sortOwnerObjects(ownerObjects) {
  ownerObjects.sort((a, b) => {
    const ka = auditSortKey(a.primaryFindingId);
    const kb = auditSortKey(b.primaryFindingId);
    if (ka !== kb) return ka.localeCompare(kb);
    const ca = CAT_RANK[a.findings[0].category] ?? 50;
    const cb = CAT_RANK[b.findings[0].category] ?? 50;
    if (ca !== cb) return ca - cb;
    return String(a.findings[0].source).localeCompare(String(b.findings[0].source));
  });
}

function buildSharedTargets(ownerObjects, unitMap) {
  const groups = new Map();
  for (let i = 0; i < ownerObjects.length; i++) {
    const obj = ownerObjects[i];
    const ownerNum = i + 1;
    const unit = unitMap.get(obj.primaryFindingId);
    const prodField = unit?.field || obj.findings[0].field || "";
    const objectId = unit?.objectId || obj.findings[0].objectId || "";
    const key = `${objectId}|${prodField}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({ ownerNum, obj, unit, prodField, objectId });
  }

  const shared = [];
  for (const [, members] of groups) {
    if (members.length < 2) continue;
    const categories = members.map((m) =>
      [...new Set(m.obj.findings.map((f) => f.category))].join("+"),
    );
    shared.push({
      key: `${members[0].objectId}|${members[0].prodField}`,
      members,
      reason: `Multiple distinct findings on same production target (${members.length} OWNER objects): ${categories.join("; ")}`,
    });
  }

  shared.sort((a, b) => a.key.localeCompare(b.key));
  return shared;
}

function formatOwnerObject(obj, ownerNum, unitMap) {
  const unit = unitMap.get(obj.primaryFindingId);
  const primary = obj.findings.find((f) => f.source === "luna") || obj.findings[0];
  const det = obj.findings.find((f) => f.source === "deterministic");
  const luna = obj.findings.find((f) => f.source === "luna");

  const prodCurrent = unit?.currentCs ?? "";
  const auditCurrent = primary.current ?? "";
  let status = "PENDING";
  if (unit && prodCurrent !== auditCurrent) {
    status = "CURRENT_MISMATCH_REVIEW_REQUIRED";
  }

  const sources = [...new Set(obj.findings.map((f) => f.source))];
  const sourceLabel = sources
    .map((s) => (s === "deterministic" ? "DETERMINISTIC" : "LUNA"))
    .join("+");

  const auditIds = [...new Set(obj.findings.map((f) => f.findingId))].join(", ");
  const categories = [...new Set(obj.findings.map((f) => f.category))].join(" + ");
  const severities = obj.findings.map((f) => f.severity).join(" / ");
  const reasons = obj.findings
    .map((f) => {
      const tag = f.source === "deterministic" ? "[DET]" : "[LUNA]";
      return `${tag} ${f.reason || "(no reason)"}`;
    })
    .join("\n");

  const proposed = luna?.proposed || "";
  const confidence = luna?.confidence || det?.confidence || "";

  const lines = [];
  lines.push(`### #${String(ownerNum).padStart(3, "0")}`);
  lines.push("");
  lines.push(`Audit ID: ${auditIds}`);
  lines.push(`Source object: ${unit?.objectId || primary.objectId || ""}`);
  lines.push(`Target: ${unit?.unitId || primary.unitId || ""}`);
  lines.push(`Field: ${unit?.field || primary.field || ""}`);
  lines.push(`Category: ${categories}`);
  lines.push(`Severity: ${severities}`);
  if (obj.mergeType === "DET_LUNA_FOREIGN_LEFTOVER" || obj.foreignReconciliation) {
    lines.push(
      `FOREIGN_LEFTOVER reconciliation: ${obj.foreignReconciliation} — ${obj.foreignReconciliationNote}`,
    );
  }
  lines.push(`Audit sources: ${sourceLabel}`);
  lines.push(`Raw audit finding count: ${obj.findings.length}`);
  lines.push("");
  lines.push("CURRENT:");
  lines.push(escapeMdBlock(prodCurrent || auditCurrent));
  lines.push("");
  const deCtx = unit?.deContext || primary.deContext || "";
  if (deCtx) {
    lines.push("DE context:");
    lines.push(escapeMdBlock(deCtx));
    lines.push("");
  }
  const lvCtx = unit?.lvReference || primary.lvMasterContext || "";
  if (lvCtx) {
    lines.push("LV MASTER context:");
    lines.push(escapeMdBlock(lvCtx));
    lines.push("");
  }
  lines.push("Luna PROPOSED:");
  lines.push(
    proposed
      ? escapeMdBlock(proposed)
      : "(empty — deterministic only or no Luna replacement suggested)",
  );
  lines.push("");
  lines.push("Audit reason:");
  lines.push(reasons || "(no reason recorded)");
  lines.push("");
  lines.push(`Confidence: ${confidence || "(n/a)"}`);
  lines.push("");
  lines.push(`Status: ${status}`);
  lines.push("");
  lines.push("OWNER NEW:");
  lines.push("");
  lines.push("OWNER note:");
  lines.push("");
  lines.push("---");
  lines.push("");

  return { status, lines };
}

function validate(findings, consumed, ownerObjects) {
  const errors = [];
  if (consumed.size !== findings.length) {
    errors.push(`findings accounting mismatch: consumed ${consumed.size} vs raw ${findings.length}`);
  }

  let ownerNewNonEmpty = 0;
  let currentMismatch = 0;
  let reconciliationA = 0;
  let reconciliationB = 0;

  for (const obj of ownerObjects) {
    if (obj.mergeType === "DET_LUNA_FOREIGN_LEFTOVER") reconciliationA += 1;
    if (obj.foreignReconciliation === "B") reconciliationB += 1;
  }

  // exact duplicates in raw findings
  const seen = new Set();
  let exactDuplicates = 0;
  for (const f of findings) {
    const k = `${f.file}|${f.objectId}|${f.field}|${f.current}|${f.category}`;
    if (seen.has(k)) exactDuplicates += 1;
    seen.add(k);
  }

  const passed = errors.length === 0 && ownerNewNonEmpty === 0;

  return {
    passed,
    errors,
    currentMismatch,
    exactDuplicates,
    reconciliationA,
    reconciliationB,
    reconciliationC: 0,
    ownerNewNonEmpty,
  };
}

function buildHeader(data, ownerObjects, shared, validation) {
  const findings = data.findings || [];
  const quality = data.qualityFindings || [];
  const lunaFindings = findings.filter((f) => f.source === "luna");
  const detFL = findings.filter(
    (f) => f.source === "deterministic" && f.category === "FOREIGN_LEFTOVER",
  );
  const fp = findings.filter((f) => f.category === "FALSE_POSITIVE");
  const deSource = findings.filter((f) => f.category === "SOURCE_DE_ISSUE");
  const deParity = findings.filter((f) => f.category === "DE_PARITY_ISSUE");

  const batchSize = 50;
  const batchCount = Math.ceil(ownerObjects.length / batchSize);
  const batchLines = [];
  for (let b = 0; b < batchCount; b++) {
    const start = b * batchSize + 1;
    const end = Math.min((b + 1) * batchSize, ownerObjects.length);
    batchLines.push(
      `- **${String(start).padStart(3, "0")}–${String(end).padStart(3, "0")}** (batch ${b + 1})`,
    );
  }

  const pendingCount = ownerObjects.length - validation.currentMismatch;

  const lines = [
    "# CS–DE Kurss Členy — OWNER review (all findings)",
    "",
    "READ-ONLY OWNER source prep. **No production repairs in this phase.**",
    "",
    "**Source audit:** `reports/cs-kurs-articles-full-audit.md`",
    "**Audit JSON:** `reports/temp/cs-kurs-articles-audit/full-audit.json`",
    "**Luna PROPOSED** = audit recommendation only — **not** automatic OWNER NEW.",
    "",
    "## OWNER batch index",
    "",
    "Review index only — no separate batch files.",
    "",
    ...batchLines,
    "",
    "## Normalization summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Raw audit findings (findings array) | **${findings.length}** |`,
    `| Luna findings (source=luna) | **${lunaFindings.length}** |`,
    `| Deterministic FOREIGN_LEFTOVER candidates | **${detFL.length}** |`,
    `| FALSE_POSITIVE (audit trail) | **${fp.length}** |`,
    `| qualityFindings (excludes non-error categories) | **${quality.length}** |`,
    `| Normalized OWNER objects | **${ownerObjects.length}** |`,
    `| Status PENDING | **${pendingCount}** |`,
    `| CURRENT_MISMATCH_REVIEW_REQUIRED | **${validation.currentMismatch}** |`,
    `| Shared production target groups (2+ OWNER) | **${shared.length}** |`,
    `| Exact duplicate findings (post-audit dedupe) | **${validation.exactDuplicates}** |`,
    `| DET+LUNA FOREIGN_LEFTOVER merges | **${validation.reconciliationA}** |`,
    `| SOURCE_DE_ISSUE findings | **${deSource.length}** |`,
    `| DE_PARITY_ISSUE findings | **${deParity.length}** |`,
    `| OWNER review batches (50/batch) | **${batchCount}** |`,
    `| Production changes | **0** |`,
    `| DE changes | **0** |`,
    `| LV MASTER changes | **0** |`,
    "",
    "### Luna severity (qualityFindings only)",
    "",
    `CRITICAL: ${data.severityCounts?.CRITICAL ?? 0}, HIGH: ${data.severityCounts?.HIGH ?? 0}, MEDIUM: ${data.severityCounts?.MEDIUM ?? 0}, LOW: ${data.severityCounts?.LOW ?? 0}`,
    "",
    "### FOREIGN_LEFTOVER reconciliation",
    "",
    `- A (DET+LUNA FL merged): **${validation.reconciliationA}**`,
    `- B (deterministic FL only): **${validation.reconciliationB}**`,
    `- C (deterministic false positive): **${validation.reconciliationC}**`,
    `- D (same target, different finding category): **${shared.length}** shared-target groups`,
    "",
    "### Validation gate",
    "",
    validation.passed
      ? "✅ **PASS** — all audit findings accounted; OWNER NEW empty; production/DE/LV MASTER = 0 changes."
      : `❌ **FAIL** — ${validation.errors.join("; ")}`,
    "",
    "---",
    "",
    "## Shared production targets",
    "",
    "Multiple OWNER objects on the same `(objectId, production field)` — distinct problems, not deduped in this phase.",
    "",
  ];

  if (shared.length === 0) {
    lines.push("_No shared production targets with multiple OWNER objects._", "");
  } else {
    for (const g of shared) {
      const primary = g.members[0];
      const related = g.members.slice(1).map((m) => `#${String(m.ownerNum).padStart(3, "0")}`);
      lines.push(`### Shared: ${g.key}`);
      lines.push("");
      lines.push(`Primary OWNER ID: #${String(primary.ownerNum).padStart(3, "0")}`);
      lines.push(`Related OWNER IDs: ${related.join(", ")}`);
      lines.push(`Target: ${primary.unit?.unitId || ""}`);
      lines.push(`Field: ${primary.prodField}`);
      lines.push(`Reason: ${g.reason}`);
      lines.push("");
    }
  }

  lines.push("---", "", "## OWNER findings", "", "");
  return lines.join("\n");
}

function main() {
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings = data.findings || [];
  const { units } = extractArticleUnits();
  const unitByAuditId = new Map(units.map((u) => [u.auditId, u]));

  const { ownerObjects, consumed } = normalizeFindings(findings);
  sortOwnerObjects(ownerObjects);

  let validation = validate(findings, consumed, ownerObjects);
  const shared = buildSharedTargets(ownerObjects, unitByAuditId);

  const findingBlocks = [];
  for (let i = 0; i < ownerObjects.length; i++) {
    const { status, lines } = formatOwnerObject(ownerObjects[i], i + 1, unitByAuditId);
    findingBlocks.push(lines.join("\n"));
    if (status === "CURRENT_MISMATCH_REVIEW_REQUIRED") validation.currentMismatch += 1;
  }

  validation = {
    ...validation,
    passed:
      validation.errors.length === 0 &&
      validation.ownerNewNonEmpty === 0 &&
      validation.currentMismatch === 0 &&
      consumed.size === findings.length,
  };
  if (consumed.size !== findings.length) {
    validation.errors.push(`consumed ${consumed.size} vs raw ${findings.length}`);
    validation.passed = false;
  }

  const md =
    buildHeader(data, ownerObjects, shared, validation) + findingBlocks.join("\n") + "\n## End\n\n";

  fs.writeFileSync(OUT_MD, md, "utf8");

  console.log(`Written ${OUT_MD}`);
  console.log(`Raw findings: ${findings.length}`);
  console.log(`OWNER objects: ${ownerObjects.length}`);
  console.log(`Shared targets: ${shared.length}`);
  console.log(`Validation: ${validation.passed ? "PASS" : "FAIL"}`);
  if (!validation.passed) console.error(validation.errors);

  process.exit(validation.passed ? 0 : 1);
}

main();
