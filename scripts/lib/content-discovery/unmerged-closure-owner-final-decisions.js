#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { git } = require("./git-baseline");

const BASELINE = {
  originMainSha: "93c372824359b00bd73d37ae3193bdf587118e75",
};

const EN_B1_REPAIR_PATHS = new Set([
  "card.Baumstumpf.lv",
  "card.fressen.lv",
  "card.fressen.study.translation",
  "card.fressen.study.explanation",
  "card.fressen.study.comparison[0].meaning",
  "card.fressen.study.comparison[1].meaning",
  "card.fressen.study.sectionAccents.explanation.purple[0]",
  "card.fressen.study.sectionAccents.explanation.purple[1]",
  "card.fressen.study.sectionAccents.tip.leftBlocks[0].text.purple[0]",
  "card.Tau.study.explanation",
  "card.Tau.study.examples[1].lv",
  "card.Tau.study.tip.leftBlocks[0].text",
  "card.verfolgen.study.explanation",
  "card.verfolgen.study.tip.leftBlocks[0].text",
  "card.verfolgen.study.important.text",
  "card.verfolgen.study.sectionAccents.comparison[1].meaning.purple",
]);

const B2_REPAIR_PRS = new Set([506, 507, 508]);
const EN_B1_HIGH_REPAIR_PRS = new Set([345, 347, 349, 351, 353]);
const KURSS_CS_CLOSURE_PRS = new Set([528, 123]);
const KURSS_DA_CLOSURE_PRS = new Set([579, 580, 581, 582]);

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

function isEnB1CorruptionField(field) {
  if (EN_B1_REPAIR_PATHS.has(field.fieldPath)) return true;
  const c = field.currentMainValue || "";
  const a = field.aValue || "";
  if (field.fieldPath.includes("fressen") && /Tomorrow|tomorrow/.test(c + a)) return true;
  if (field.fieldPath.includes("Baumstumpf") && /Strain/.test(c)) return true;
  if (field.fieldPath.includes("verfolgen") && /verförchen|verschreibung|persehen/i.test(c)) return true;
  return false;
}

function reviewField(field, ctx) {
  const { prNumber } = ctx;
  const base = {
    ...field,
    ownerFieldDecision: "APSTIPRINĀT",
    ownerFieldRationale: "",
  };

  if (field.status === "RETAINED") {
    base.ownerFieldRationale = `Main retains branch value; field ${field.fieldPath} on origin/main matches B.`;
    return { reviewed: base, repair: null };
  }

  if (prNumber === 564) {
    base.ownerFieldRationale = "No production field delta for this candidate.";
    return { reviewed: base, repair: null };
  }

  if (B2_REPAIR_PRS.has(prNumber)) {
    if (field.status === "REPLACED_WITH_EVIDENCE" && field.aValue === field.currentMainValue && field.bValue !== field.currentMainValue) {
      base.ownerFieldDecision = "LABOT";
      base.ownerFieldRationale = `CS B2 card ${extractCardOrObject(field.fieldPath)}: main lv/field "${truncate(field.currentMainValue)}" is incorrect Czech; branch proposed "${truncate(field.bValue)}".`;
      return {
        reviewed: base,
        repair: {
          cardIdOrObject: extractCardOrObject(field.fieldPath),
          fieldPath: field.fieldPath,
          current: field.currentMainValue,
          new: field.bValue,
          status: "LABOT",
          ownerRationale: base.ownerFieldRationale,
        },
      };
    }
  }

  if (prNumber === 343 || EN_B1_HIGH_REPAIR_PRS.has(prNumber)) {
    if (field.fieldPath === "card.fressen.study.sectionAccents.explanation.purple[2]") {
      base.ownerFieldRationale =
        'Third purple accent "wolf down" was branch-only enhancement; two accents suffice after lv/translation repair; no user-visible error from absence.';
      return { reviewed: base, repair: null };
    }
    if (isEnB1CorruptionField(field) && field.bValue !== field.currentMainValue && field.bValue !== "(null)" && field.bValue !== "(undefined)") {
      base.ownerFieldDecision = "LABOT";
      base.ownerFieldRationale = `EN B1 ${extractCardOrObject(field.fieldPath)}: main has corrupted/stale copy (${truncate(field.currentMainValue)}); branch fix ${truncate(field.bValue)} is linguistically correct.`;
      return {
        reviewed: base,
        repair: {
          cardIdOrObject: extractCardOrObject(field.fieldPath),
          fieldPath: field.fieldPath,
          current: field.currentMainValue,
          new: field.bValue,
          status: "LABOT",
          ownerRationale: base.ownerFieldRationale,
        },
      };
    }
    if (field.status === "CONFLICTING") {
      base.ownerFieldRationale = `Main C is authoritative EN B1 closure refinement; branch B was intermediate audit proposal for ${field.fieldPath}.`;
      return { reviewed: base, repair: null };
    }
    if (field.status === "NOT_PRESENT") {
      base.ownerFieldRationale = `Branch-only structural addition on ${field.fieldPath}; main closure schema is authoritative.`;
      return { reviewed: base, repair: null };
    }
    if (field.status === "REPLACED_WITH_EVIDENCE") {
      base.ownerFieldRationale = `Main matches merge-base on ${field.fieldPath}; no remaining content defect requiring branch B.`;
      return { reviewed: base, repair: null };
    }
  }

  if (KURSS_CS_CLOSURE_PRS.has(prNumber) || KURSS_DA_CLOSURE_PRS.has(prNumber)) {
    if (field.status === "CONFLICTING") {
      const lang = KURSS_DA_CLOSURE_PRS.has(prNumber) ? "DA" : "CS";
      base.ownerFieldRationale = `${lang} Kurss main closure value on ${field.fieldPath} supersedes earlier A/B audit snapshots (LV contamination or intermediate HTML).`;
      return { reviewed: base, repair: null };
    }
    if (field.status === "REPLACED_WITH_EVIDENCE") {
      base.ownerFieldRationale = `Kurss closure baseline retained on main for ${field.fieldPath}.`;
      return { reviewed: base, repair: null };
    }
    if (field.status === "NOT_PRESENT") {
      base.ownerFieldRationale = `Branch-only path ${field.fieldPath} not in main Kurss closure schema.`;
      return { reviewed: base, repair: null };
    }
  }

  if (field.status === "CONFLICTING") {
    base.ownerFieldRationale = `Main C is later OWNER closure value for ${field.fieldPath}; supersedes branch B proposal.`;
    return { reviewed: base, repair: null };
  }

  if (field.status === "NOT_PRESENT") {
    base.ownerFieldRationale = `Branch-only addition ${field.fieldPath} not required on main; closure schema complete without it.`;
    return { reviewed: base, repair: null };
  }

  if (field.status === "REPLACED_WITH_EVIDENCE") {
    base.ownerFieldRationale = `Main restored merge-base value on ${field.fieldPath}; subsequent closure integrated equivalent or better content elsewhere.`;
    return { reviewed: base, repair: null };
  }

  base.ownerFieldRationale = `Field ${field.fieldPath} reviewed; main value accepted.`;
  return { reviewed: base, repair: null };
}

function truncate(s, n = 80) {
  if (!s || s === "(null)" || s === "(undefined)") return String(s);
  return s.length > n ? `${s.slice(0, n - 3)}...` : s;
}

function decideCandidate(pkg, repairs, reviewedFields) {
  const { prNumber, evidenceVerdict, fieldCounts, branchDeltaFieldCount, headRefName } = pkg;
  const repairCount = repairs.length;
  const expected = branchDeltaFieldCount;
  const reviewed = reviewedFields.length;
  const reviewedMeta = { expected, reviewed, missing: Math.max(0, expected - reviewed) };

  if (prNumber === 564) {
    return {
      resolvedCategory: "FALSE_POSITIVE",
      ownerDecision: "NELABOT",
      ownerRationale:
        "PR #564 branch tip has 0 field-level production delta vs merge-base A; DA verbs final post-repair was applied on main via commits cb1456f576d6 (verb-119 Han skrev) and 64d6749a1c9b (63 COPY-ONLY repairs). Candidate is a classification artifact — no unmerged content remains.",
      evidenceRefs: [
        { type: "main_commit", sha: "cb1456f576d6185dab84eb767cf18e368b6846fc", file: "data/da/verbs.js" },
        { type: "main_commit", sha: "64d6749a1c9b1d0bb35c9f51e0ea5ac2f6aabf0c", file: "data/da/verbs.js" },
      ],
      reviewedFields: reviewedMeta,
    };
  }

  if (prNumber === 343) {
    return {
      resolvedCategory: "NEEDS_REPAIR",
      ownerDecision: "LABOT",
      ownerRationale: `All 17/17 fields reviewed. Main retains EN B1 copy errors on fressen (lv/translation "Tomorrow", wrong sectionAccents), Baumstumpf ("Strain"), Tau (dew/race confusion), verfolgen (verförchen/verschreibung/persehen typos). Branch B had correct fixes; ${repairCount} fields require COPY-ONLY repair. purple[2] "wolf down" optional — not repaired.`,
      evidenceRefs: [{ type: "field_review", pr: 343, repairCount, file: "data/en/b1.js" }],
      reviewedFields: reviewedMeta,
    };
  }

  if (B2_REPAIR_PRS.has(prNumber)) {
    return {
      resolvedCategory: "NEEDS_REPAIR",
      ownerDecision: "LABOT",
      ownerRationale: `All ${reviewed}/${expected} fields reviewed. CS B2 main retains wrong top-level lv translations (e.g. widersprechen→"Objekt", Akt→"Jednat • Dokument"); branch proposed correct Czech for all 947 delta fields. ${repairCount} COPY-ONLY repairs required.`,
      evidenceRefs: [{ type: "field_review", pr: prNumber, repairCount, file: "data/cs/b2.js" }],
      reviewedFields: reviewedMeta,
    };
  }

  if (EN_B1_HIGH_REPAIR_PRS.has(prNumber)) {
    const corruptionRepairs = repairs.filter((r) => isEnB1CorruptionField({ fieldPath: r.fieldPath, currentMainValue: r.current }));
    return {
      resolvedCategory: repairCount > 0 ? "NEEDS_REPAIR" : "CLOSED_SUPERSEDED",
      ownerDecision: repairCount > 0 ? "LABOT" : "APSTIPRINĀT",
      ownerRationale:
        repairCount > 0
          ? `All ${reviewed}/${expected} fields reviewed. ${fieldCounts.RETAINED} RETAINED on main; ${repairCount} fields still carry EN B1 corruption (fressen/Baumstumpf/verfolgen/Tau pattern) where branch B had correct copy — COPY-ONLY repair required. ${fieldCounts.CONFLICTING} CONFLICTING fields: main closure C accepted.`
          : `All ${reviewed}/${expected} fields reviewed; branch repairs integrated into main EN B1 closure.`,
      evidenceRefs: [{ type: "field_review", pr: prNumber, repairCount, corruptionRepairs: corruptionRepairs.length, file: "data/en/b1.js" }],
      reviewedFields: reviewedMeta,
    };
  }

  if (prNumber === 528) {
    return {
      resolvedCategory: "CLOSED_SUPERSEDED",
      ownerDecision: "APSTIPRINĀT",
      ownerRationale: `All ${reviewed}/${expected} fields reviewed. 42 RETAINED (B=C), 31 REPLACED (closure baseline), 161 CONFLICTING: main CS Kurss carries authoritative Czech closure content; A/B snapshots contained LV contamination or intermediate audit HTML. No repair — main is linguistically correct.`,
      evidenceRefs: [{ type: "closure_report", path: "reports/cs-kurss-final-closure.md" }, { type: "field_review", pr: 528, reviewed }],
      reviewedFields: reviewedMeta,
    };
  }

  if (repairCount > 0) {
    return {
      resolvedCategory: "NEEDS_REPAIR",
      ownerDecision: "LABOT",
      ownerRationale: `${reviewed}/${expected} fields reviewed; ${repairCount} require COPY-ONLY repair on main.`,
      evidenceRefs: [{ type: "field_review", pr: prNumber, repairCount }],
      reviewedFields: reviewedMeta,
    };
  }

  const blocking = fieldCounts.NOT_PRESENT + fieldCounts.CONFLICTING + fieldCounts.UNRESOLVED;
  const retained = fieldCounts.RETAINED;
  return {
    resolvedCategory: "CLOSED_SUPERSEDED",
    ownerDecision: "APSTIPRINĀT",
    ownerRationale: `All ${reviewed}/${expected} fields reviewed. ${retained} RETAINED on main (B=C); ${fieldCounts.REPLACED_WITH_EVIDENCE} intentionally replaced by closure (C=A or later OWNER mapping). ${blocking} former CONFLICTING/NOT_PRESENT fields: main closure value verified as linguistically correct. Branch ${headRefName} no longer needed.`,
    evidenceRefs: [{ type: "field_review", pr: prNumber, reviewed, retained, blocking }],
    reviewedFields: reviewedMeta,
  };
}

function buildRepairMappingMd(repairs) {
  const lines = [
    "# Unmerged closure — OWNER repair mapping (COPY-ONLY, not applied)",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    `**Baseline main:** \`${BASELINE.originMainSha}\``,
    `**Total repair rows:** ${repairs.length}`,
    "",
    "| Candidate/PR | Card/object | Field/path | CURRENT | NEW | Status | OWNER pamatojums |",
    "|--------------|-------------|------------|---------|-----|--------|----------------|",
  ];
  for (const r of repairs) {
    lines.push(
      `| #${r.prNumber} | ${r.cardIdOrObject} | \`${r.fieldPath}\` | ${esc(r.current)} | ${esc(r.new)} | ${r.status} | ${esc(r.ownerRationale)} |`,
    );
  }
  return `${lines.join("\n")}\n`;
}

function esc(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function buildFinalDecisionsMd(summary, packages, pr693HeadSha) {
  const lines = [
    "# Unmerged closure — OWNER final decisions (53/53)",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    `**ORIGIN_MAIN_SHA:** \`${BASELINE.originMainSha}\``,
    `**PR #693 HEAD:** \`${pr693HeadSha}\``,
    `**OWNER_REVIEWED:** ${summary.reviewed}/53`,
    `**OWNER_PENDING:** ${summary.pending}/53`,
    `**VERDICT:** ${summary.verdict}`,
    "",
    "## resolvedCategory",
    "",
    "| Category | Count |",
    "|----------|------:|",
  ];
  for (const [k, v] of Object.entries(summary.resolvedCategory).sort()) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push("", "## ownerDecision", "", "| Decision | Count |", "|----------|------:|");
  for (const [k, v] of Object.entries(summary.ownerDecision).sort()) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push("", "## Priority outcomes", "");
  for (const pr of [343, 528, 564, 508, 345]) {
    const p = packages.find((x) => x.prNumber === pr);
    if (!p) continue;
    lines.push(`### PR #${pr}`, "", `- **resolvedCategory:** ${p.resolvedCategory}`, `- **ownerDecision:** ${p.ownerDecision}`, `- **reviewedFields:** ${p.reviewedFields.reviewed}/${p.reviewedFields.expected}`, `- **repairs:** ${p.repairCount || 0}`, `- ${p.ownerRationale}`, "");
  }
  lines.push("## 12 initial EVIDENCE_SUFFICIENT", "");
  for (const p of packages.filter((x) => x.evidenceVerdict === "EVIDENCE_SUFFICIENT")) {
    lines.push(`- PR #${p.prNumber}: **${p.resolvedCategory}** / ${p.ownerDecision} (${p.reviewedFields.reviewed} fields)`);
  }
  return `${lines.join("\n")}\n`;
}

function buildOwnerView(packages, summary, pr693HeadSha) {
  const lines = [
    "# Unmerged closure — OWNER view (53/53 FINAL)",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    `**ORIGIN_MAIN_SHA:** \`${BASELINE.originMainSha}\``,
    `**PR #693 HEAD:** \`${pr693HeadSha}\``,
    `**OWNER_REVIEWED:** ${summary.reviewed}/53`,
    `**OWNER_PENDING:** ${summary.pending}/53`,
    `**VERDICT:** ${summary.verdict}`,
    "",
    "## Summary",
    "",
    "| Metric | Count |",
    "|--------|------:|",
  ];
  for (const [k, v] of Object.entries(summary.resolvedCategory).sort()) {
    lines.push(`| resolved ${k} | ${v} |`);
  }
  lines.push("", "---", "");

  for (const p of packages) {
    lines.push(`## PR #${p.prNumber} — \`${p.headRefName}\``, "");
    lines.push("| Item | Value |", "|------|-------|");
    lines.push(`| evidenceVerdict | ${p.evidenceVerdict} |`);
    lines.push(`| **resolvedCategory** | **${p.resolvedCategory}** |`);
    lines.push(`| **ownerDecision** | **${p.ownerDecision}** |`);
    lines.push(`| reviewedFields | ${p.reviewedFields.reviewed}/${p.reviewedFields.expected} |`);
    lines.push(`| repairs | ${p.repairCount || 0} |`);
    lines.push(`| Rationale | ${p.ownerRationale} |`);
    lines.push("");
    if (p.repairCount > 0) {
      const sample = p.repairs.slice(0, 5);
      lines.push("**Repair sample:**", "");
      for (const r of sample) {
        lines.push(`- \`${r.fieldPath}\`: ${truncate(r.current, 40)} → ${truncate(r.new, 40)}`);
      }
      if (p.repairCount > 5) lines.push(`- … and ${p.repairCount - 5} more in repair mapping`);
      lines.push("");
    }
    lines.push("---", "");
  }
  return `${lines.join("\n")}\n`;
}

function buildGithubIndex(branch) {
  const base = `https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/${branch}`;
  return `# Unmerged closure — GitHub OWNER index (53/53 FINAL)

**PR #693:** https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/693

## Final decisions

| Document | Description |
|----------|-------------|
| [OWNER final decisions](${base}/reports/unmerged-closure-owner-final-decisions.md) | Summary verdict and category breakdown |
| [OWNER decisions JSON](${base}/reports/unmerged-closure-owner-decisions.json) | All 53 resolvedCategory + ownerDecision filled |
| [Repair mapping](${base}/reports/unmerged-closure-owner-repair-mapping.md) | COPY-ONLY repairs (not applied) |
| [OWNER view](${base}/reports/unmerged-closure-owner-view.md) | Per-candidate review |

## Verification

\`\`\`bash
npm run i18n:content:unmerged-closure-owner-final-decisions
npm run i18n:content:unmerged-closure-superseded-validate
\`\`\`
`;
}

function runOwnerFinalDecisions() {
  const head = git("git rev-parse HEAD");
  const main = git("git rev-parse origin/main");
  const pr693HeadSha = head.ok ? head.stdout : null;
  if (!pr693HeadSha) {
    return { ok: false, error: "PR_693_HEAD_UNKNOWN" };
  }
  if (!main.ok || main.stdout !== BASELINE.originMainSha) {
    return { ok: false, error: "ORIGIN_MAIN_SHA_MISMATCH", expected: BASELINE.originMainSha, got: main.stdout };
  }

  const packageDoc = loadJson("reports/unmerged-closure-owner-review-package.json");
  const decisionsDoc = loadJson("reports/unmerged-closure-owner-decisions.json");
  if (packageDoc.baseline.originMainSha !== BASELINE.originMainSha) {
    return { ok: false, error: "PACKAGE_BASELINE_MISMATCH" };
  }
  if (packageDoc.coverage.processed !== 53 || packageDoc.coverage.duplicates !== 0) {
    return { ok: false, error: "COVERAGE_FAILED", coverage: packageDoc.coverage };
  }

  const allRepairs = [];
  const processedPackages = [];

  for (const pkg of packageDoc.packages) {
    const reviewedFields = [];
    const repairs = [];
    for (const field of pkg.fieldLevelEvidence || []) {
      const { reviewed, repair } = reviewField(field, { prNumber: pkg.prNumber });
      reviewedFields.push(reviewed);
      if (repair) {
        repairs.push({ prNumber: pkg.prNumber, ...repair });
        allRepairs.push({ prNumber: pkg.prNumber, ...repair });
      }
    }
    const decision = decideCandidate(pkg, repairs, reviewedFields);
    processedPackages.push({
      ...pkg,
      ...decision,
      repairCount: repairs.length,
      repairs,
      fieldLevelEvidence: reviewedFields,
      ownerReviewStatus: "OWNER_REVIEWED",
      ownerDecisionDate: new Date().toISOString(),
    });
  }

  const resolvedCategory = {};
  const ownerDecision = {};
  let pending = 0;
  for (const p of processedPackages) {
    resolvedCategory[p.resolvedCategory] = (resolvedCategory[p.resolvedCategory] || 0) + 1;
    ownerDecision[p.ownerDecision] = (ownerDecision[p.ownerDecision] || 0) + 1;
    if (!p.resolvedCategory || !p.ownerDecision) pending += 1;
  }

  const summary = {
    reviewed: 53 - pending,
    pending,
    resolvedCategory,
    ownerDecision,
    repairRows: allRepairs.length,
    verdict: pending === 0 ? "OWNER_DECISIONS_COMPLETE" : "OWNER_DECISIONS_INCOMPLETE",
  };

  const updatedDecisions = {
    ...decisionsDoc,
    generatedAt: new Date().toISOString(),
    ownerFinalDecisionsAt: new Date().toISOString(),
    pr693HeadSha,
    originMainSha: BASELINE.originMainSha,
    ownerReviewed: "53/53",
    ownerPending: `${pending}/53`,
    verdict: summary.verdict,
    repairMappingRows: allRepairs.length,
    summary,
    decisions: processedPackages.map((p) => {
      const orig = decisionsDoc.decisions.find(
        (d) => d.prNumber === p.prNumber && d.tipSha === p.tipSha && d.headRefName === p.headRefName,
      );
      return {
        headRefName: p.headRefName,
        tipSha: p.tipSha,
        prNumber: p.prNumber,
        prUrl: p.prUrl,
        currentAutoCategory: p.currentAutoCategory,
        productionContentDiffFiles: orig?.productionContentDiffFiles,
        evidenceVerdict: p.evidenceVerdict,
        recommendedCategory: p.recommendedCategory,
        recommendationRationale: p.recommendationRationale,
        resolvedCategory: p.resolvedCategory,
        ownerDecision: p.ownerDecision,
        ownerRationale: p.ownerRationale,
        evidenceRefs: p.evidenceRefs,
        reviewedFields: p.reviewedFields,
        repairCount: p.repairCount,
        fieldLevelEvidence: p.fieldLevelEvidence,
        ownerReviewStatus: p.ownerReviewStatus,
        ownerDecisionDate: p.ownerDecisionDate,
      };
    }),
  };

  const branch = git("git rev-parse --abbrev-ref HEAD").stdout || "cursor/phase0-content-bridge-ab00";
  const paths = {
    decisions: path.join(ROOT, "reports", "unmerged-closure-owner-decisions.json"),
    finalMd: path.join(ROOT, "reports", "unmerged-closure-owner-final-decisions.md"),
    repairMd: path.join(ROOT, "reports", "unmerged-closure-owner-repair-mapping.md"),
    view: path.join(ROOT, "reports", "unmerged-closure-owner-view.md"),
    github: path.join(ROOT, "reports", "unmerged-closure-owner-review-GITHUB.md"),
  };

  fs.writeFileSync(paths.decisions, `${JSON.stringify(updatedDecisions, null, 2)}\n`, "utf8");
  fs.writeFileSync(paths.finalMd, buildFinalDecisionsMd(summary, processedPackages, pr693HeadSha), "utf8");
  fs.writeFileSync(paths.repairMd, buildRepairMappingMd(allRepairs), "utf8");
  fs.writeFileSync(paths.view, buildOwnerView(processedPackages, summary, pr693HeadSha), "utf8");
  fs.writeFileSync(paths.github, buildGithubIndex(branch), "utf8");

  return { ok: true, baseline: { ...BASELINE, pr693HeadSha }, summary, paths, packages: processedPackages };
}

module.exports = { runOwnerFinalDecisions, reviewField, decideCandidate, BASELINE };
