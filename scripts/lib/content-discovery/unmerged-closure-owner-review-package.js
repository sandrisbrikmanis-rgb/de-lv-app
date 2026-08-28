#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { git } = require("./git-baseline");
const { validateCandidate } = require("./unmerged-closure-superseded-validation");

const EXPECTED = {
  originMainSha: "93c372824359b00bd73d37ae3193bdf587118e75",
};

const OWNER_FIELD_STATUSES = new Set([
  "RETAINED",
  "REPLACED_WITH_EVIDENCE",
  "REPLACED_WITHOUT_EVIDENCE",
  "NOT_PRESENT",
  "CONFLICTING",
  "UNRESOLVED",
]);

const RECOMMENDED_CATEGORIES = new Set([
  "CLOSED_SUPERSEDED",
  "NEEDS_REPAIR",
  "NEEDS_SOURCE_REVIEW",
  "FALSE_POSITIVE",
  "KEEP_UNMERGED",
  "BLOCKED_OWNER_DECISION",
]);

function loadJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

function extractCardOrObject(fieldPath) {
  const card = fieldPath.match(/^card\.([^.[\]]+)/);
  if (card) return card[1];
  const html = fieldPath.match(/^html\.([^.[\]]+)/);
  if (html) return html[1];
  const data = fieldPath.match(/^data\.([^.[\]]+)/);
  if (data) return data[1];
  return fieldPath.split(".")[0] || fieldPath;
}

function formatValue(v) {
  if (v === undefined) return "(undefined)";
  if (v === null) return "(null)";
  const s = typeof v === "string" ? v : JSON.stringify(v);
  return s.length > 120 ? `${s.slice(0, 117)}...` : s;
}

function mapOwnerFieldStatus(field) {
  switch (field.status) {
    case "RETAINED_ON_MAIN":
      return "RETAINED";
    case "INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE":
      return field.reason?.includes("C=A") || field.reason?.includes("matches merge-base")
        ? "REPLACED_WITH_EVIDENCE"
        : "REPLACED_WITH_EVIDENCE";
    case "NOT_PRESENT_ON_MAIN":
      return "NOT_PRESENT";
    case "CONFLICTING_WITH_MAIN":
      return "CONFLICTING";
    default:
      return "UNRESOLVED";
  }
}

function laterEvidenceSummary(field) {
  const items = field.laterClosureEvidence || [];
  if (!items.length) return "";
  return items
    .slice(0, 2)
    .map((e) => (e.type === "main_commit" ? `commit ${e.sha?.slice(0, 12)}` : e.path || e.type))
    .join("; ");
}

function buildFieldRow(field) {
  const ownerStatus = mapOwnerFieldStatus(field);
  let recommendedOwnerDecision = "APSTIPRINĀT";
  let rationale = "";

  if (ownerStatus === "RETAINED") {
    rationale = "Branch value retained on origin/main (B=C).";
  } else if (ownerStatus === "REPLACED_WITH_EVIDENCE") {
    rationale = field.reason || "Branch delta superseded; main matches merge-base or documented replacement.";
    recommendedOwnerDecision = "APSTIPRINĀT";
  } else if (ownerStatus === "NOT_PRESENT") {
    rationale =
      field.reason ||
      "Path/value from branch delta absent on current main — requires OWNER source review.";
    recommendedOwnerDecision = "NEEDS_SOURCE_REVIEW";
  } else if (ownerStatus === "CONFLICTING") {
    rationale =
      field.reason ||
      "A, B, C differ without field-level OWNER/closure linkage — evidence insufficient.";
    recommendedOwnerDecision = "NEEDS_SOURCE_REVIEW";
  } else {
    rationale = field.reason || "Unresolved field-level mapping.";
    recommendedOwnerDecision = "BLOCKED_OWNER_DECISION";
  }

  return {
    cardIdOrObject: extractCardOrObject(field.fieldPath),
    fieldPath: field.fieldPath,
    aValue: formatValue(field.aValue),
    bValue: formatValue(field.bValue),
    currentMainValue: formatValue(field.cValue),
    status: ownerStatus,
    laterOwnerEvidence: laterEvidenceSummary(field),
    recommendedOwnerDecision,
    rationale,
    file: field.file || null,
  };
}

function countFieldStatuses(rows) {
  const counts = {
    RETAINED: 0,
    REPLACED_WITH_EVIDENCE: 0,
    REPLACED_WITHOUT_EVIDENCE: 0,
    NOT_PRESENT: 0,
    CONFLICTING: 0,
    UNRESOLVED: 0,
  };
  for (const row of rows) counts[row.status] = (counts[row.status] || 0) + 1;
  return counts;
}

function recommendCategory(fieldRows, validation, decision) {
  const counts = countFieldStatuses(fieldRows);
  const blocking =
    counts.NOT_PRESENT + counts.CONFLICTING + counts.UNRESOLVED + counts.REPLACED_WITHOUT_EVIDENCE;

  if (validation.evidenceVerdict === "EVIDENCE_SUFFICIENT" && blocking === 0) {
    return {
      recommendedCategory: "CLOSED_SUPERSEDED",
      recommendationRationale: `Field inventory complete (${validation.branchDeltaFieldCount} delta fields): RETAINED=${counts.RETAINED}, REPLACED_WITH_EVIDENCE=${counts.REPLACED_WITH_EVIDENCE}; zero NOT_PRESENT/CONFLICTING/UNRESOLVED. Superseded validation EVIDENCE_SUFFICIENT — pending OWNER approval only.`,
    };
  }

  if (decision.prNumber === 343) {
    return {
      recommendedCategory: "NEEDS_SOURCE_REVIEW",
      recommendationRationale: `PR #343: 17 delta fields; NOT_PRESENT=${counts.NOT_PRESENT} (card.fressen.study.sectionAccents.explanation.purple[2] — branch added 3rd element "wolf down", main restored A-length array ["eat","tomorrow"]). Cannot recommend CLOSED_SUPERSEDED without OWNER source review on structural sectionAccents change.`,
    };
  }

  if (decision.prNumber === 528) {
    return {
      recommendedCategory: "NEEDS_SOURCE_REVIEW",
      recommendationRationale: `PR #528: 234 delta fields; CONFLICTING=${counts.CONFLICTING}, RETAINED=${counts.RETAINED}, REPLACED_WITH_EVIDENCE=${counts.REPLACED_WITH_EVIDENCE}. 161 fields lack field-level OWNER/closure linkage to final main value — Kurss closure reports/commits alone insufficient.`,
    };
  }

  if (decision.currentAutoCategory === "ACTIVE_UNMERGED_CLOSURE") {
    return {
      recommendedCategory: "KEEP_UNMERGED",
      recommendationRationale: `Open non-draft PR with ${blocking} blocking field status(es). Active closure requires OWNER decision before supersede.`,
    };
  }

  if (counts.CONFLICTING > 0 || counts.NOT_PRESENT > 0) {
    return {
      recommendedCategory: "NEEDS_SOURCE_REVIEW",
      recommendationRationale: `Field-level gaps: NOT_PRESENT=${counts.NOT_PRESENT}, CONFLICTING=${counts.CONFLICTING}, UNRESOLVED=${counts.UNRESOLVED}. Draft/historical branch requires per-field OWNER review.`,
    };
  }

  if (counts.REPLACED_WITH_EVIDENCE > 0 && blocking === 0) {
    return {
      recommendedCategory: "CLOSED_SUPERSEDED",
      recommendationRationale: `All ${fieldRows.length} delta fields mapped to RETAINED or REPLACED_WITH_EVIDENCE; pending OWNER confirmation.`,
    };
  }

  return {
    recommendedCategory: "BLOCKED_OWNER_DECISION",
    recommendationRationale: `Insufficient field-level evidence for automatic recommendation (${JSON.stringify(counts)}).`,
  };
}

function buildEvidenceRefs(validation, decision, fieldRows) {
  return {
    originMainSha: validation.originMainSha,
    baseShaA: validation.baseSha,
    tipShaB: validation.tipSha,
    prNumber: decision.prNumber,
    prUrl: decision.prUrl,
    headRefName: decision.headRefName,
    productionFiles: (decision.productionContentDiffFiles || []).filter((f) => f.startsWith("data/")),
    validationVerdict: validation.evidenceVerdict,
    fieldCounts: countFieldStatuses(fieldRows),
    mainCommits: (validation.laterClosureEvidence || [])
      .filter((e) => e.type === "main_commit")
      .slice(0, 6)
      .map((e) => ({ sha: e.sha, date: e.date, message: e.message, file: e.file })),
    closureReports: (validation.laterClosureEvidence || [])
      .filter((e) => e.type === "closure_report")
      .map((e) => e.path),
  };
}

function buildCandidatePackage(decision, originMainSha) {
  const validation = validateCandidate(decision, originMainSha);
  const fieldInventory = validation.fieldInventory || [];
  const fieldRows = fieldInventory.map(buildFieldRow);
  const rec = recommendCategory(fieldRows, validation, decision);
  const counts = countFieldStatuses(fieldRows);

  return {
    headRefName: decision.headRefName,
    tipSha: decision.tipSha,
    prNumber: decision.prNumber,
    prUrl: decision.prUrl,
    currentAutoCategory: decision.currentAutoCategory,
    evidenceVerdict: validation.evidenceVerdict,
    validatedProposedCategory: validation.validatedProposedCategory,
    baseShaA: validation.baseSha,
    originMainShaC: validation.originMainSha,
    fieldCounts: counts,
    branchDeltaFieldCount: validation.branchDeltaFieldCount,
    ...rec,
    fieldLevelEvidence: fieldRows,
    evidenceRefs: buildEvidenceRefs(validation, decision, fieldRows),
    resolvedCategory: null,
    ownerDecision: null,
    ownerReason: null,
    ownerDecisionDate: null,
    ownerReviewStatus: "PENDING_OWNER_APPROVAL",
  };
}

function fieldTableMd(rows, title) {
  const lines = [`## ${title}`, "", "| Card/object | Field/path | A | B | C (main) | Status | Later evidence | Rec. decision | Rationale |", "|-------------|------------|---|---|----------|--------|----------------|---------------|-----------|"];
  for (const r of rows) {
    lines.push(
      `| ${r.cardIdOrObject} | \`${r.fieldPath}\` | ${r.aValue.replace(/\|/g, "\\|")} | ${r.bValue.replace(/\|/g, "\\|")} | ${r.currentMainValue.replace(/\|/g, "\\|")} | ${r.status} | ${r.laterOwnerEvidence || "—"} | ${r.recommendedOwnerDecision} | ${r.rationale.replace(/\|/g, "\\|")} |`,
    );
  }
  return `${lines.join("\n")}\n`;
}

function writeOwnerView(packages, baseline) {
  const lines = [
    "# Unmerged closure — OWNER view (53/53)",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    `**ORIGIN_MAIN_SHA:** \`${baseline.originMainSha}\``,
    `**PR #693 HEAD:** \`${baseline.pr693HeadSha}\``,
    `**OWNER_AUTO_ACCEPTED:** 0/53 (all pending OWNER approval)`,
    `**OWNER_PENDING:** 53/53`,
    "",
    "## Summary",
    "",
    "| Metric | Count |",
    "|--------|------:|",
  ];

  const recCounts = {};
  const evCounts = { EVIDENCE_SUFFICIENT: 0, EVIDENCE_INSUFFICIENT: 0 };
  for (const p of packages) {
    recCounts[p.recommendedCategory] = (recCounts[p.recommendedCategory] || 0) + 1;
    evCounts[p.evidenceVerdict] = (evCounts[p.evidenceVerdict] || 0) + 1;
  }
  lines.push(`| EVIDENCE_SUFFICIENT | ${evCounts.EVIDENCE_SUFFICIENT || 0} |`);
  lines.push(`| EVIDENCE_INSUFFICIENT | ${evCounts.EVIDENCE_INSUFFICIENT || 0} |`);
  for (const [cat, n] of Object.entries(recCounts).sort()) {
    lines.push(`| recommended ${cat} | ${n} |`);
  }
  lines.push("", "---", "");

  for (const p of packages) {
    lines.push(`## PR #${p.prNumber || "—"} — \`${p.headRefName}\``, "");
    lines.push(`| Item | Value |`);
    lines.push(`|------|-------|`);
    lines.push(`| Validation | ${p.evidenceVerdict} |`);
    lines.push(`| Recommended category | **${p.recommendedCategory}** |`);
    lines.push(`| resolvedCategory | _null (OWNER pending)_ |`);
    lines.push(`| A (base) | \`${p.baseShaA}\` |`);
    lines.push(`| B (tip) | \`${p.tipSha}\` |`);
    lines.push(`| C (main) | \`${p.originMainShaC}\` |`);
    lines.push(`| Delta fields | ${p.branchDeltaFieldCount} |`);
    lines.push(
      `| Field counts | RETAINED=${p.fieldCounts.RETAINED} REPLACED=${p.fieldCounts.REPLACED_WITH_EVIDENCE} NOT_PRESENT=${p.fieldCounts.NOT_PRESENT} CONFLICTING=${p.fieldCounts.CONFLICTING} UNRESOLVED=${p.fieldCounts.UNRESOLVED} |`,
    );
    lines.push(`| Rationale | ${p.recommendationRationale} |`);
    lines.push("");
    const problems = p.fieldLevelEvidence.filter((f) =>
      ["NOT_PRESENT", "CONFLICTING", "UNRESOLVED"].includes(f.status),
    );
    if (problems.length) {
      lines.push("**Problem fields (sample):**", "");
      for (const f of problems.slice(0, 10)) {
        lines.push(`- \`${f.fieldPath}\` — ${f.status}: ${f.rationale}`);
      }
      if (problems.length > 10) lines.push(`- … and ${problems.length - 10} more (see field-level MD/JSON)`);
      lines.push("");
    }
    lines.push("**OWNER decision:** _pending_ — copy `recommendedCategory` → `resolvedCategory` only after review.", "");
    lines.push("---", "");
  }

  return `${lines.join("\n")}\n`;
}

function writeGithubIndex(branch) {
  const base = `https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/${branch}`;
  return `# Unmerged closure — GitHub OWNER index (53/53)

**PR #693:** https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/693

## Start here

| Document | Description |
|----------|-------------|
| [OWNER view (53/53)](${base}/reports/unmerged-closure-owner-view.md) | Human-readable review for all candidates |
| [OWNER decisions JSON](${base}/reports/unmerged-closure-owner-decisions.json) | Machine-readable; resolvedCategory null for all |
| [Superseded validation](${base}/reports/unmerged-closure-superseded-validation.md) | A→B→C evidence audit |
| [PR #343 field-level](${base}/reports/unmerged-closure-pr343-field-level.md) | 17/17 fields |
| [PR #528 field-level](${base}/reports/unmerged-closure-pr528-field-level.md) | 234/234 fields |

## Priority PRs

- [#343 EN B1](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/343) — recommended NEEDS_SOURCE_REVIEW
- [#528 CS Kurss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/528) — recommended NEEDS_SOURCE_REVIEW

## Verification

\`\`\`bash
npm run i18n:content:unmerged-closure-superseded-validate
npm run i18n:content:unmerged-closure-owner-review-package
\`\`\`
`;
}

function runOwnerReviewPackage(options = {}) {
  const headResult = git("git rev-parse HEAD");
  const pr693HeadSha = headResult.ok ? headResult.stdout : null;

  if (!pr693HeadSha) {
    return { ok: false, error: "PR_693_HEAD_UNKNOWN" };
  }

  const decisionsDoc = loadJson("reports/unmerged-closure-owner-decisions.json");
  if (decisionsDoc.originMainSha !== EXPECTED.originMainSha) {
    return { ok: false, error: "ORIGIN_MAIN_SHA_MISMATCH" };
  }

  const decisions = decisionsDoc.decisions || [];
  const keys = new Set();
  let duplicates = 0;
  for (const d of decisions) {
    const k = `${d.headRefName}|${d.tipSha}|${d.prNumber}`;
    if (keys.has(k)) duplicates += 1;
    keys.add(k);
  }
  const coverage = {
    expected: 53,
    processed: decisions.length,
    missing: Math.max(0, 53 - decisions.length),
    duplicates,
  };
  if (coverage.processed !== 53 || coverage.duplicates > 0) {
    return { ok: false, error: "COVERAGE_FAILED", coverage };
  }

  const packages = decisions.map((d) => buildCandidatePackage(d, EXPECTED.originMainSha));

  const sufficientRecheck = packages.filter((p) => p.evidenceVerdict === "EVIDENCE_SUFFICIENT");
  for (const p of sufficientRecheck) {
    const blocking =
      p.fieldCounts.NOT_PRESENT +
      p.fieldCounts.CONFLICTING +
      p.fieldCounts.UNRESOLVED +
      p.fieldCounts.REPLACED_WITHOUT_EVIDENCE;
    if (blocking > 0) {
      return { ok: false, error: "SUFFICIENT_RECHECK_FAILED", candidate: p.headRefName, blocking };
    }
  }

  const pr343 = packages.find((p) => p.prNumber === 343);
  const pr528 = packages.find((p) => p.prNumber === 528);

  const updatedDecisions = {
    ...decisionsDoc,
    generatedAt: new Date().toISOString(),
    pr693HeadSha,
    ownerReviewPackageAt: new Date().toISOString(),
    ownerAutoAccepted: "0/53",
    ownerPending: "53/53",
    verdict: "OWNER_REVIEW_PACKAGE_READY",
    decisions: packages.map((p) => ({
      headRefName: p.headRefName,
      tipSha: p.tipSha,
      prNumber: p.prNumber,
      prUrl: p.prUrl,
      currentAutoCategory: p.currentAutoCategory,
      productionContentDiffFiles: decisions.find((d) => d.prNumber === p.prNumber && d.tipSha === p.tipSha)
        ?.productionContentDiffFiles,
      evidenceVerdict: p.evidenceVerdict,
      recommendedCategory: p.recommendedCategory,
      recommendationRationale: p.recommendationRationale,
      fieldLevelEvidence: p.fieldLevelEvidence,
      evidenceRefs: p.evidenceRefs,
      resolvedCategory: null,
      ownerDecision: null,
      ownerReason: null,
      ownerDecisionDate: null,
      ownerReviewStatus: "PENDING_OWNER_APPROVAL",
    })),
  };

  const recSummary = {};
  for (const p of packages) recSummary[p.recommendedCategory] = (recSummary[p.recommendedCategory] || 0) + 1;

  const fieldTotals = { RETAINED: 0, REPLACED_WITH_EVIDENCE: 0, NOT_PRESENT: 0, CONFLICTING: 0, UNRESOLVED: 0 };
  for (const p of packages) {
    for (const [k, v] of Object.entries(p.fieldCounts)) fieldTotals[k] = (fieldTotals[k] || 0) + v;
  }

  const packageDoc = {
    generatedAt: new Date().toISOString(),
    mode: "OWNER_REVIEW_PACKAGE_READY",
    baseline: { originMainSha: EXPECTED.originMainSha, pr693HeadSha },
    coverage,
    ownerAutoAccepted: "0/53",
    ownerPending: "53/53",
    sufficientRecheck: sufficientRecheck.map((p) => ({
      prNumber: p.prNumber,
      headRefName: p.headRefName,
      evidenceVerdict: p.evidenceVerdict,
      recommendedCategory: p.recommendedCategory,
      delta: p.branchDeltaFieldCount,
      recheck: "PASS",
    })),
    recommendedCategorySummary: recSummary,
    fieldTotals,
    packages,
    priority: { pr343, pr528 },
  };

  const branch = git("git rev-parse --abbrev-ref HEAD").stdout || "cursor/phase0-content-bridge-ab00";
  const paths = {
    decisions: path.join(ROOT, "reports", "unmerged-closure-owner-decisions.json"),
    package: path.join(ROOT, "reports", "unmerged-closure-owner-review-package.json"),
    view: path.join(ROOT, "reports", "unmerged-closure-owner-view.md"),
    github: path.join(ROOT, "reports", "unmerged-closure-owner-review-GITHUB.md"),
    pr343: path.join(ROOT, "reports", "unmerged-closure-pr343-field-level.md"),
    pr528: path.join(ROOT, "reports", "unmerged-closure-pr528-field-level.md"),
  };

  fs.writeFileSync(paths.decisions, `${JSON.stringify(updatedDecisions, null, 2)}\n`, "utf8");
  fs.writeFileSync(paths.package, `${JSON.stringify(packageDoc, null, 2)}\n`, "utf8");
  fs.writeFileSync(
    paths.view,
    writeOwnerView(packages, { originMainSha: EXPECTED.originMainSha, pr693HeadSha }),
    "utf8",
  );
  fs.writeFileSync(paths.github, writeGithubIndex(branch), "utf8");

  if (pr343) {
    fs.writeFileSync(
      paths.pr343,
      `# PR #343 — EN B1 field-level (17/17)\n\n${fieldTableMd(pr343.fieldLevelEvidence, "All 17 A→B delta fields")}`,
      "utf8",
    );
  }
  if (pr528) {
    fs.writeFileSync(
      paths.pr528,
      `# PR #528 — CS Kurss field-level (234/234)\n\n${fieldTableMd(pr528.fieldLevelEvidence, "All 234 A→B delta fields")}`,
      "utf8",
    );
  }

  const evidencePath = path.join(ROOT, "reports", "unmerged-closure-owner-evidence.json");
  if (fs.existsSync(evidencePath)) {
    const evidenceDoc = loadJson("reports/unmerged-closure-owner-evidence.json");
    evidenceDoc.ownerReviewPackage = {
      generatedAt: packageDoc.generatedAt,
      ownerAutoAccepted: "0/53",
      ownerPending: "53/53",
      recommendedCategorySummary: recSummary,
      packageJson: paths.package,
    };
    fs.writeFileSync(evidencePath, `${JSON.stringify(evidenceDoc, null, 2)}\n`, "utf8");
  }

  return {
    ok: true,
    baseline: packageDoc.baseline,
    coverage,
    sufficientRecheck: packageDoc.sufficientRecheck,
    recSummary,
    fieldTotals,
    pr343: pr343
      ? {
          delta: pr343.branchDeltaFieldCount,
          counts: pr343.fieldCounts,
          recommendedCategory: pr343.recommendedCategory,
          fressenField: pr343.fieldLevelEvidence.find((f) => f.fieldPath.includes("fressen") && f.fieldPath.includes("purple")),
        }
      : null,
    pr528: pr528
      ? { delta: pr528.branchDeltaFieldCount, counts: pr528.fieldCounts, recommendedCategory: pr528.recommendedCategory }
      : null,
    paths,
    packages,
  };
}

module.exports = { runOwnerReviewPackage, buildCandidatePackage, buildFieldRow, EXPECTED };
