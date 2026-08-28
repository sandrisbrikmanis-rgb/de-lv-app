#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { MASTER_VERSION } = require("../content-crowdin-bridge/constants");
const {
  git,
  resolveOriginMainSha,
  gitProductionDiffAgainstBaseline,
  gitDeDiffAgainstBaseline,
} = require("./git-baseline");

const PRODUCTION_PATHS = ["data", "www/data", "languages"];
const REPORT_PATHS = ["reports", "docs_and_rules", "scripts", "crowdin"];

const CLOSURE_REPORT_HINTS = [
  { pattern: /data\/en\/b1\.js|www\/data\/en\/b1\.js/, reports: ["reports/en-b1-final-closure-reconfirmation.md", "reports/en-b1-final-closure.md"] },
  { pattern: /data\/cs\/courseLessons\.js|www\/data\/cs\/courseLessons\.js/, reports: ["reports/cs-kurss-final-closure.md"] },
  { pattern: /data\/cs\/a1\.js|www\/data\/cs\/a1\.js/, reports: ["reports/cs-a1-final-closure.md", "reports/cs-a1-high-final-closure.md"] },
  { pattern: /data\/courseLessons\.js|www\/data\/courseLessons\.js/, reports: ["reports/cs-kurss-final-closure.md"] },
];

function ghJson(cmd) {
  try {
    return JSON.parse(execSync(cmd, { cwd: ROOT, encoding: "utf8", stdio: "pipe" }));
  } catch (e) {
    return { error: e.message || "GH_COMMAND_FAILED" };
  }
}

function gitLines(cmd) {
  const result = git(cmd);
  if (!result.ok || !result.stdout) return [];
  return result.stdout.split("\n").map((l) => l.trim()).filter(Boolean);
}

function gitBlob(ref, filePath) {
  const result = git(`git rev-parse ${ref}:${filePath}`);
  return result.ok ? result.stdout : null;
}

function isAncestorOfMain(tipSha) {
  return git(`git merge-base --is-ancestor ${tipSha} origin/main`).ok;
}

function lastCommitOnPaths(ref, paths) {
  if (!paths.length) return null;
  const result = git(`git log -1 --format='%H|%ci|%s' ${ref} -- ${paths.join(" ")}`);
  if (!result.ok || !result.stdout) return null;
  const [sha, date, ...subject] = result.stdout.split("|");
  return { sha, date, subject: subject.join("|") };
}

function commitsMainAheadOfBranch(ref, paths) {
  return gitLines(`git log --oneline ${ref}..origin/main -- ${paths.join(" ")}`);
}

function diffFiles(ref, pathSpec) {
  return gitLines(`git diff --name-only origin/main...${ref} -- ${pathSpec}`);
}

function findClosureReportsOnMain(productionFiles) {
  const found = [];
  for (const hint of CLOSURE_REPORT_HINTS) {
    if (productionFiles.some((f) => hint.pattern.test(f))) {
      for (const rel of hint.reports) {
        if (fs.existsSync(path.join(ROOT, rel))) found.push(rel);
      }
    }
  }
  return [...new Set(found)];
}

function loadMergedPrsCache() {
  return ghJson(
    `gh pr list --repo sandrisbrikmanis-rgb/de-lv-app --state merged --limit 300 --json number,title,mergedAt,headRefName,files`,
  );
}

function findLaterMergedPrs(headRefName, productionFiles, createdAt, mergedPrs) {
  const prs = Array.isArray(mergedPrs) ? mergedPrs : [];
  const createdMs = createdAt ? Date.parse(createdAt) : 0;
  const keywords = productionFiles
    .map((f) => f.replace(/^www\//, "").replace(/^data\//, "").replace(/\.js$/, ""))
    .slice(0, 2)
    .join(" ");
  return prs
    .filter((pr) => {
      if (pr.headRefName === headRefName) return false;
      if (createdMs && pr.mergedAt && Date.parse(pr.mergedAt) <= createdMs) return false;
      const touches = (pr.files || []).some((f) =>
        productionFiles.some((pf) => f.path === pf || f.path === pf.replace(/^www\//, "")),
      );
      const titleHit = keywords && pr.title && pr.title.toLowerCase().includes(keywords.split("/")[0]?.toLowerCase() || "");
      return touches || titleHit;
    })
    .slice(0, 5)
    .map((pr) => ({
      number: pr.number,
      title: pr.title,
      mergedAt: pr.mergedAt,
      headRefName: pr.headRefName,
      url: `https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/${pr.number}`,
    }));
}

function loadScopeCandidates(classificationPath) {
  const classification = JSON.parse(fs.readFileSync(classificationPath, "utf8"));
  const active = classification.activeUnmergedClosureCandidates || [];
  const needs = classification.needsOwnerReviewCandidates || [];
  const candidates = [...active, ...needs];
  return { classification, candidates };
}

function validateScope(candidates) {
  const keys = new Set();
  let duplicates = 0;
  for (const row of candidates) {
    const key = `${row.headRefName}|${row.tipSha}|${row.pr?.number ?? "none"}`;
    if (keys.has(key)) duplicates += 1;
    keys.add(key);
  }
  return {
    expected: 53,
    processed: candidates.length,
    missing: Math.max(0, 53 - candidates.length),
    duplicates,
    unique: keys.size,
  };
}

function proposeCategory(evidence) {
  const {
    isAncestor,
    prMergedAt,
    productionBlobMatchMain,
    productionDiffFiles,
    nonProductionOnly,
    prState,
    mainAheadCommits,
    branchLastCommit,
    mainLastCommit,
    currentAutoCategory,
    closureReportsOnMain,
    laterMergedPrs,
  } = evidence;

  if (isAncestor) {
    return {
      proposedCategory: "INTEGRATED_HISTORICAL",
      proposedReason: "Branch tip is an ancestor of origin/main.",
    };
  }
  if (prMergedAt) {
    return {
      proposedCategory: "INTEGRATED_HISTORICAL",
      proposedReason: `Linked PR merged at ${prMergedAt}.`,
    };
  }
  if (productionBlobMatchMain) {
    return {
      proposedCategory: "INTEGRATED_HISTORICAL",
      proposedReason: "All production blobs match origin/main.",
    };
  }
  if (!productionDiffFiles.length && nonProductionOnly) {
    return {
      proposedCategory: "INTEGRATED_HISTORICAL",
      proposedReason: "No production blob diff vs origin/main (reports/docs/scripts only).",
    };
  }
  if (prState === "CLOSED") {
    return {
      proposedCategory: "CLOSED_SUPERSEDED",
      proposedReason: "PR closed without merge.",
    };
  }

  const mainAhead = mainAheadCommits.length > 0;
  const mainNewer =
    !branchLastCommit?.date ||
    !mainLastCommit?.date ||
    Date.parse(mainLastCommit.date) >= Date.parse(branchLastCommit.date);

  if (mainAhead && mainNewer) {
    const closureNote = closureReportsOnMain.length
      ? `Closure on main: ${closureReportsOnMain.join(", ")}.`
      : "";
    const laterNote = laterMergedPrs.length
      ? `Later merged PRs: ${laterMergedPrs.map((p) => `#${p.number}`).join(", ")}.`
      : "";
    return {
      proposedCategory: "CLOSED_SUPERSEDED",
      proposedReason:
        `origin/main has ${mainAheadCommits.length} production commit(s) after branch tip ` +
        `(${mainAheadCommits[0] || "see evidence"}). ` +
        (mainLastCommit?.date ? `Main production last touched ${mainLastCommit.date}. ` : "") +
        (branchLastCommit?.date ? `Branch production last touched ${branchLastCommit.date}. ` : "") +
        `${closureNote} ${laterNote}`.trim(),
    };
  }

  if (currentAutoCategory === "ACTIVE_UNMERGED_CLOSURE") {
    return {
      proposedCategory: "ACTIVE_UNMERGED_CLOSURE",
      proposedReason:
        "Open non-draft PR with production blob diff; main-ahead supersession not proven conclusively.",
    };
  }

  return {
    proposedCategory: "NEEDS_OWNER_REVIEW",
    proposedReason:
      "Draft or ambiguous PR with production diff; insufficient supersession proof for auto-PROPOSED resolution.",
  };
}

function auditCandidate(row, originMainSha, prDetailsCache, mergedPrsCache) {
  const ref = row.ref;
  const productionDiffFiles = row.productionContentDiffFiles || [];
  const prNumber = row.pr?.number ?? null;
  const prDetails = prNumber ? prDetailsCache.get(prNumber) : null;

  const productionBlobs = {};
  let productionBlobMatchMain = true;
  for (const filePath of productionDiffFiles) {
    const mainBlob = gitBlob("origin/main", filePath);
    const branchBlob = gitBlob(ref, filePath);
    productionBlobs[filePath] = { main: mainBlob, branch: branchBlob, match: mainBlob === branchBlob };
    if (mainBlob && branchBlob && mainBlob !== branchBlob) productionBlobMatchMain = false;
  }

  const allDiffProduction = diffFiles(ref, PRODUCTION_PATHS.join(" "));
  const allDiffReports = diffFiles(ref, "reports");
  const allDiffDocs = diffFiles(ref, "docs_and_rules scripts crowdin");
  const reportDocsOnlyDiffFiles = [...new Set([...allDiffReports, ...allDiffDocs])].filter(
    (f) => !allDiffProduction.includes(f),
  );

  const mainAheadCommits = commitsMainAheadOfBranch(ref, productionDiffFiles.length ? productionDiffFiles : PRODUCTION_PATHS);
  const branchLastCommit = lastCommitOnPaths(ref, productionDiffFiles);
  const mainLastCommit = lastCommitOnPaths("origin/main", productionDiffFiles);
  const closureReportsOnMain = findClosureReportsOnMain(productionDiffFiles);
  const laterMergedPrs = findLaterMergedPrs(
    row.headRefName,
    productionDiffFiles,
    prDetails?.createdAt || row.pr?.createdAt,
    mergedPrsCache,
  );

  const evidence = {
    branchRef: ref,
    headRefName: row.headRefName,
    tipSha: row.tipSha,
    prNumber,
    prTitle: prDetails?.title || row.pr?.title || null,
    prState: prDetails?.state || row.pr?.state || null,
    isDraft: prDetails?.isDraft ?? row.pr?.isDraft ?? null,
    mergeable: prDetails?.mergeable ?? row.pr?.mergeable ?? null,
    baseBranch: prDetails?.baseRefName || "main",
    prCreatedAt: prDetails?.createdAt || null,
    prUpdatedAt: prDetails?.updatedAt || null,
    prMergedAt: prDetails?.mergedAt || null,
    prUrl: prDetails?.url || row.pr?.url || null,
    productionContentDiffFiles: productionDiffFiles,
    reportDocsOnlyDiffFiles,
    allProductionDiffFiles: allDiffProduction,
    originMainSha,
    isAncestor: isAncestorOfMain(row.tipSha),
    productionBlobs,
    productionBlobMatchMain,
    nonProductionOnly: productionDiffFiles.length === 0 && reportDocsOnlyDiffFiles.length > 0,
    mainAheadCommits,
    branchLastCommit,
    mainLastCommit,
    closureReportsOnMain,
    laterMergedPrs,
    currentAutoCategory: row.category,
    baselineComparison: productionDiffFiles
      .map((f) => {
        const b = productionBlobs[f];
        return `${f}: main=${b?.main?.slice(0, 12) || "null"} branch=${b?.branch?.slice(0, 12) || "null"} match=${b?.match}`;
      })
      .join("; "),
    latestKnownClosureMetadata: closureReportsOnMain,
    maySupersede: laterMergedPrs,
  };

  const { proposedCategory, proposedReason } = proposeCategory({
    ...evidence,
    productionDiffFiles,
    prState: evidence.prState,
    prMergedAt: evidence.prMergedAt,
  });

  return {
    ...evidence,
    proposedCategory,
    proposedReason,
    ownerResolvedCategory: null,
    ownerReason: null,
    ownerDecisionDate: null,
  };
}

function buildBaseline() {
  const headResult = git("git rev-parse HEAD");
  const origin = resolveOriginMainSha();
  const productionDiff =
    origin.fetchStatus === "PASS" && origin.revParseStatus === "PASS" && origin.sha
      ? gitProductionDiffAgainstBaseline(origin.sha)
      : { changed: [], clean: false, error: "SKIPPED" };
  const deDiff =
    origin.fetchStatus === "PASS" && origin.revParseStatus === "PASS" && origin.sha
      ? gitDeDiffAgainstBaseline(origin.sha)
      : { changed: [], clean: false, error: "SKIPPED" };

  const blocked =
    origin.fetchStatus !== "PASS" ||
    origin.revParseStatus !== "PASS" ||
    !origin.sha ||
    !headResult.ok;

  return {
    masterStandardVersion: MASTER_VERSION,
    originMainSha: origin.sha,
    pr693HeadSha: headResult.ok ? headResult.stdout : null,
    fetchStatus: origin.fetchStatus,
    revParseStatus: origin.revParseStatus,
    fetchError: origin.fetchError || null,
    revParseError: origin.revParseError || null,
    productionDiffPr693: productionDiff.changed || [],
    productionDiffClean: productionDiff.clean === true && !productionDiff.error,
    deChangesPr693: deDiff.changed || [],
    deDiffClean: deDiff.clean === true && !deDiff.error,
    verdict: blocked ? "BLOCKED" : "PASS",
  };
}

function loadPrDetailsCache(candidates) {
  const cache = new Map();
  const numbers = [...new Set(candidates.map((c) => c.pr?.number).filter(Boolean))];
  for (const num of numbers) {
    const pr = ghJson(
      `gh pr view ${num} --repo sandrisbrikmanis-rgb/de-lv-app --json number,title,state,isDraft,mergeable,baseRefName,createdAt,updatedAt,mergedAt,closedAt,url`,
    );
    if (!pr.error) cache.set(num, pr);
  }
  return cache;
}

function summarizeProposed(audits) {
  const summary = {
    INTEGRATED_HISTORICAL: 0,
    CLOSED_SUPERSEDED: 0,
    ACTIVE_UNMERGED_CLOSURE: 0,
    NEEDS_OWNER_REVIEW: 0,
  };
  for (const row of audits) summary[row.proposedCategory] = (summary[row.proposedCategory] || 0) + 1;
  return summary;
}

function writeOwnerViewMd(audit, baseline, scope, proposedSummary) {
  const lines = [
    "# Unmerged closure — OWNER view (53/53 READ-ONLY prep)",
    "",
    `**Generated:** ${audit.generatedAt}`,
    `**MASTER:** ${baseline.masterStandardVersion}`,
    `**ORIGIN_MAIN_SHA:** \`${baseline.originMainSha}\``,
    `**PR #693 HEAD:** \`${baseline.pr693HeadSha}\``,
    `**Scope:** ${scope.processed}/${scope.expected} · duplicates ${scope.duplicates} · missing ${scope.missing}`,
    `**OWNER decisions:** 0/53 (all \`resolvedCategory\` null)`,
    `**Verdict:** NEEDS_OWNER_REVIEW`,
    "",
    "## PROPOSED summary (not OWNER decisions)",
    "",
    "| PROPOSED_CATEGORY | Count |",
    "|-------------------|------:|",
  ];
  for (const [cat, count] of Object.entries(proposedSummary)) {
    lines.push(`| ${cat} | ${count} |`);
  }
  lines.push("", "## Priority baseline comparisons", "");
  for (const pr of [343, 528]) {
    const row = audit.candidates.find((c) => c.prNumber === pr);
    if (!row) continue;
    lines.push(`### PR #${pr} — \`${row.headRefName}\``, "");
    lines.push(`- **PROPOSED:** ${row.proposedCategory}`);
    lines.push(`- **Reason:** ${row.proposedReason}`);
    lines.push(`- **Baseline:** ${row.baselineComparison}`);
    lines.push(`- **mergeable:** ${row.mergeable}`);
    lines.push(`- **Main ahead commits (sample):** ${row.mainAheadCommits.slice(0, 3).join("; ") || "(none)"}`);
    if (row.latestKnownClosureMetadata?.length) {
      lines.push(`- **Closure on main:** ${row.latestKnownClosureMetadata.join(", ")}`);
    }
    lines.push("");
  }

  lines.push("## All 53 candidates", "");
  let idx = 0;
  for (const row of audit.candidates) {
    idx += 1;
    lines.push(`### ${idx}. \`${row.headRefName}\` (${row.currentAutoCategory})`, "");
    lines.push(`| Field | Value |`);
    lines.push(`|-------|-------|`);
    lines.push(`| tipSha | \`${row.tipSha}\` |`);
    lines.push(`| PR | ${row.prNumber ? `[#${row.prNumber}](${row.prUrl})` : "(none)"} |`);
    lines.push(`| PR state / draft | ${row.prState} / ${row.isDraft} |`);
    lines.push(`| mergeable | ${row.mergeable} |`);
    lines.push(`| base | ${row.baseBranch} |`);
    lines.push(`| created / updated | ${row.prCreatedAt} / ${row.prUpdatedAt} |`);
    lines.push(`| production diff | ${row.productionContentDiffFiles.join(", ") || "(none)"} |`);
    lines.push(`| reports/docs diff | ${row.reportDocsOnlyDiffFiles.slice(0, 5).join(", ") || "(none)"}${row.reportDocsOnlyDiffFiles.length > 5 ? " …" : ""} |`);
    lines.push(`| baseline comparison | ${row.baselineComparison} |`);
    lines.push(`| main ahead (count) | ${row.mainAheadCommits.length} |`);
    lines.push(`| closure metadata | ${row.latestKnownClosureMetadata.join(", ") || "(none found on main)"} |`);
    lines.push(`| later merged PRs | ${row.laterMergedPrs.map((p) => `#${p.number}`).join(", ") || "(none matched)"} |`);
    lines.push(`| **PROPOSED_CATEGORY** | **${row.proposedCategory}** |`);
    lines.push(`| PROPOSED_REASON | ${row.proposedReason} |`);
    lines.push(`| OWNER resolvedCategory | _pending_ |`);
    lines.push(`| OWNER reason | _pending_ |`);
    lines.push("");
  }

  lines.push("## Notes", "", "- READ-ONLY OWNER-PREP — no merge, close, delete, or apply.", "");
  return `${lines.join("\n")}\n`;
}

function writeGithubIndex(branch) {
  const base = `https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/${branch}`;
  const lines = [
    "# Unmerged closure — GitHub OWNER index (53/53)",
    "",
    "**PR #693:** [Phase 0 content bridge](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/693)",
    `**Branch:** \`${branch}\``,
    "",
    "## OWNER artefacts",
    "",
    "| Artefact | Link |",
    "|----------|------|",
    `| OWNER view (53/53) | [unmerged-closure-owner-view.md](${base}/reports/unmerged-closure-owner-view.md) |`,
    `| Evidence JSON | [unmerged-closure-owner-evidence.json](${base}/reports/unmerged-closure-owner-evidence.json) |`,
    `| Decisions template (null OWNER fields) | [unmerged-closure-owner-decisions.json](${base}/reports/unmerged-closure-owner-decisions.json) |`,
    `| Classification source | [unmerged-closure-classification-READONLY.json](${base}/reports/unmerged-closure-classification-READONLY.json) |`,
    `| Prep README | [unmerged-closure-owner-review-README.md](${base}/reports/unmerged-closure-owner-review-README.md) |`,
    "",
    "## Priority PRs",
    "",
    "| PR | Branch | GitHub |",
    "|----|--------|--------|",
    "| [#343](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/343) | `cursor/en-b1-critical-repair-6850` | EN–DE B1 |",
    "| [#528](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/528) | `cursor/cs-kurs-articles-full-audit-6850` | CS–DE Kurss |",
    "",
    "## Verification",
    "",
    "```bash",
    "npm run i18n:content:unmerged-closure-owner-prep",
    "npm run i18n:content:unmerged-closure-classify",
    "npm run i18n:content:phase0-exit",
    "```",
    "",
  ];
  return `${lines.join("\n")}\n`;
}

function buildDecisionsJson(audits, baseline) {
  return {
    schemaVersion: 1,
    module: "unmerged-closure-d1",
    decidedBy: "OWNER",
    description:
      "OWNER-PREP manifest — 53/53 candidates. Cursor fills evidence fields only; resolvedCategory/ownerReason/ownerDecisionDate remain null until OWNER decides.",
    generatedAt: new Date().toISOString(),
    originMainSha: baseline.originMainSha,
    pr693HeadSha: baseline.pr693HeadSha,
    expectedCandidates: 53,
    decisions: audits.map((row) => ({
      headRefName: row.headRefName,
      tipSha: row.tipSha,
      prNumber: row.prNumber,
      prUrl: row.prUrl,
      currentAutoCategory: row.currentAutoCategory,
      productionContentDiffFiles: row.productionContentDiffFiles,
      baselineComparison: row.baselineComparison,
      proposedCategory: row.proposedCategory,
      proposedReason: row.proposedReason,
      latestKnownClosureMetadata: row.latestKnownClosureMetadata,
      laterMergedPrs: row.laterMergedPrs,
      resolvedCategory: null,
      ownerReason: null,
      ownerDecisionDate: null,
    })),
  };
}

function validateOutputs(audits, decisions, baseline) {
  const keys = new Set();
  let duplicates = 0;
  let autoResolved = 0;
  for (const row of decisions.decisions) {
    const key = `${row.headRefName}|${row.tipSha}|${row.prNumber ?? "none"}`;
    if (keys.has(key)) duplicates += 1;
    keys.add(key);
    if (row.resolvedCategory != null) autoResolved += 1;
    if (row.ownerReason != null) autoResolved += 1;
  }
  return {
    EXPECTED_CANDIDATES: 53,
    PROCESSED_CANDIDATES: audits.length,
    OWNER_DECISION_OBJECTS: decisions.decisions.length,
    DUPLICATES: duplicates,
    MISSING: Math.max(0, 53 - audits.length),
    AUTO_FILLED_OWNER_FIELDS: autoResolved,
    PRODUCTION_CHANGES: baseline.productionDiffPr693.length,
    DE_CHANGES: baseline.deChangesPr693.length,
    PR_MERGES: 0,
    PR_CLOSES: 0,
    BRANCH_DELETIONS: 0,
    APPLY: "NOT_STARTED",
    PHASE_1: "NOT_STARTED",
    OWNER_DECISIONS: `${decisions.decisions.filter((d) => d.resolvedCategory).length}/53`,
    F0_5: "FAIL",
    VERDICT: baseline.verdict === "BLOCKED" ? "BLOCKED" : "NEEDS_OWNER_REVIEW",
    MERGE: "FORBIDDEN",
  };
}

function runOwnerPrepAudit(options = {}) {
  const classificationPath =
    options.classificationPath ||
    path.join(ROOT, "reports", "unmerged-closure-classification-READONLY.json");

  const baseline = buildBaseline();
  if (baseline.verdict === "BLOCKED") {
    return { ok: false, baseline, error: "BASELINE_GATE_BLOCKED" };
  }

  const { classification, candidates } = loadScopeCandidates(classificationPath);
  const scope = validateScope(candidates);
  if (scope.processed !== 53 || scope.duplicates > 0 || scope.missing > 0) {
    return {
      ok: false,
      baseline,
      scope,
      error: `SCOPE_VALIDATION_FAILED processed=${scope.processed} duplicates=${scope.duplicates} missing=${scope.missing}`,
    };
  }

  const prDetailsCache = loadPrDetailsCache(candidates);
  const mergedPrsCache = loadMergedPrsCache();
  const audits = candidates.map((row) =>
    auditCandidate(row, baseline.originMainSha, prDetailsCache, mergedPrsCache),
  );
  const proposedSummary = summarizeProposed(audits);

  const audit = {
    generatedAt: new Date().toISOString(),
    mode: "READ_ONLY_OWNER_PREP",
    baseline,
    scope,
    proposedSummary,
    candidates: audits,
  };

  const decisions = buildDecisionsJson(audits, baseline);
  const validation = validateOutputs(audits, decisions, baseline);

  const branch =
    git("git rev-parse --abbrev-ref HEAD").stdout || "cursor/phase0-content-bridge-ab00";

  const outEvidence = options.outEvidence || path.join(ROOT, "reports", "unmerged-closure-owner-evidence.json");
  const outDecisions = options.outDecisions || path.join(ROOT, "reports", "unmerged-closure-owner-decisions.json");
  const outView = options.outView || path.join(ROOT, "reports", "unmerged-closure-owner-view.md");
  const outGithub = options.outGithub || path.join(ROOT, "reports", "unmerged-closure-owner-review-GITHUB.md");

  fs.mkdirSync(path.dirname(outEvidence), { recursive: true });
  fs.writeFileSync(outEvidence, `${JSON.stringify({ ...audit, validation }, null, 2)}\n`, "utf8");
  fs.writeFileSync(outDecisions, `${JSON.stringify(decisions, null, 2)}\n`, "utf8");
  fs.writeFileSync(outView, writeOwnerViewMd(audit, baseline, scope, proposedSummary), "utf8");
  fs.writeFileSync(outGithub, writeGithubIndex(branch), "utf8");

  return {
    ok: true,
    baseline,
    scope,
    proposedSummary,
    validation,
    paths: { outEvidence, outDecisions, outView, outGithub },
    priority: {
      pr343: audits.find((a) => a.prNumber === 343) || null,
      pr528: audits.find((a) => a.prNumber === 528) || null,
    },
  };
}

module.exports = {
  runOwnerPrepAudit,
  buildBaseline,
  auditCandidate,
  proposeCategory,
};
