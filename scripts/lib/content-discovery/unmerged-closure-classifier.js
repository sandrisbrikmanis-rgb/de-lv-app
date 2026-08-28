#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { git } = require("./git-baseline");
const { applyOwnerDecisions } = require("./unmerged-closure-owner-decisions");

const PRODUCTION_PATHS = ["data", "www/data", "languages"];
const CLOSURE_BRANCH_RE = /closure|repair|audit/i;

const CATEGORIES = {
  INTEGRATED_HISTORICAL: "INTEGRATED_HISTORICAL",
  CLOSED_SUPERSEDED: "CLOSED_SUPERSEDED",
  ACTIVE_UNMERGED_CLOSURE: "ACTIVE_UNMERGED_CLOSURE",
  NEEDS_OWNER_REVIEW: "NEEDS_OWNER_REVIEW",
};

function repoSlugFromOrigin() {
  const result = git("git remote get-url origin");
  if (!result.ok || !result.stdout) return "sandrisbrikmanis-rgb/de-lv-app";
  const m = result.stdout.match(/[:/]([^/]+\/[^/]+?)(?:\.git)?$/);
  return m ? m[1] : "sandrisbrikmanis-rgb/de-lv-app";
}

function loadPullRequestsByHead() {
  const repo = repoSlugFromOrigin();
  try {
    const raw = execSync(
      `gh pr list --repo ${repo} --state all --limit 1000 --json number,state,mergedAt,closedAt,headRefName,isDraft,title,url,mergeable`,
      { cwd: ROOT, encoding: "utf8", stdio: "pipe" },
    );
    const prs = JSON.parse(raw);
    return { ok: true, map: new Map(prs.map((pr) => [pr.headRefName, pr])), error: null };
  } catch (e) {
    return {
      ok: false,
      map: new Map(),
      error: e.message || "GH_PR_LIST_FAILED",
    };
  }
}

function listRawClosureCandidates() {
  const result = git("git branch -r --no-merged origin/main");
  if (!result.ok) {
    return { ok: false, error: result.stderr || result.error || "GIT_BRANCH_NO_MERGED_FAILED", refs: [] };
  }
  const refs = result.stdout
    .split("\n")
    .map((line) => line.trim())
    .filter((ref) => ref && CLOSURE_BRANCH_RE.test(ref));
  return { ok: true, refs };
}

function gitBlob(ref, filePath) {
  const result = git(`git rev-parse ${ref}:${filePath}`);
  return result.ok ? result.stdout : null;
}

function productionContentDiffFiles(ref, tipSha) {
  const diffResult = git(
    `git diff --name-only origin/main...${tipSha} -- ${PRODUCTION_PATHS.join(" ")}`,
  );
  if (!diffResult.ok) return { error: diffResult.stderr || diffResult.error, files: [] };

  const candidateFiles = diffResult.stdout
    ? diffResult.stdout.split("\n").map((f) => f.trim()).filter(Boolean)
    : [];

  const contentDiffFiles = candidateFiles.filter((filePath) => {
    const mainBlob = gitBlob("origin/main", filePath);
    const branchBlob = gitBlob(ref, filePath);
    return mainBlob && branchBlob && mainBlob !== branchBlob;
  });

  return { files: contentDiffFiles, candidateFiles };
}

function isAncestorOfMain(tipSha) {
  const result = git(`git merge-base --is-ancestor ${tipSha} origin/main`);
  return result.ok;
}

function classifyBranchRef(ref, prByHead) {
  const headRefName = ref.replace(/^origin\//, "");
  const tipResult = git(`git rev-parse ${ref}`);
  if (!tipResult.ok) {
    return {
      ref,
      headRefName,
      category: CATEGORIES.NEEDS_OWNER_REVIEW,
      reason: "Could not resolve branch tip",
      error: tipResult.stderr || tipResult.error,
    };
  }

  const tipSha = tipResult.stdout;
  const pr = prByHead.get(headRefName);
  const ancestor = isAncestorOfMain(tipSha);
  const { files: contentDiffFiles, candidateFiles, error: diffError } = productionContentDiffFiles(
    ref,
    tipSha,
  );

  if (diffError) {
    return {
      ref,
      headRefName,
      tipSha,
      category: CATEGORIES.NEEDS_OWNER_REVIEW,
      reason: `Production diff check failed: ${diffError}`,
      pr: pr ? { number: pr.number, state: pr.state, isDraft: pr.isDraft, url: pr.url } : null,
    };
  }

  if (ancestor) {
    return {
      ref,
      headRefName,
      tipSha,
      category: CATEGORIES.INTEGRATED_HISTORICAL,
      reason: "Branch tip is ancestor of origin/main",
      productionContentDiffFiles: contentDiffFiles,
      pr: pr ? { number: pr.number, state: pr.state, mergedAt: pr.mergedAt, url: pr.url } : null,
    };
  }

  if (pr?.mergedAt) {
    return {
      ref,
      headRefName,
      tipSha,
      category: CATEGORIES.INTEGRATED_HISTORICAL,
      reason: `PR #${pr.number} merged (${pr.mergedAt})`,
      productionContentDiffFiles: contentDiffFiles,
      pr: { number: pr.number, state: pr.state, mergedAt: pr.mergedAt, url: pr.url, title: pr.title },
    };
  }

  if (contentDiffFiles.length === 0) {
    return {
      ref,
      headRefName,
      tipSha,
      category: CATEGORIES.INTEGRATED_HISTORICAL,
      reason: "No production content blob diff vs origin/main",
      productionContentDiffFiles: [],
      productionCandidateFiles: candidateFiles,
      pr: pr ? { number: pr.number, state: pr.state, isDraft: pr.isDraft, url: pr.url } : null,
    };
  }

  if (pr?.state === "CLOSED") {
    return {
      ref,
      headRefName,
      tipSha,
      category: CATEGORIES.CLOSED_SUPERSEDED,
      reason: `PR #${pr.number} closed without merge`,
      productionContentDiffFiles: contentDiffFiles,
      pr: { number: pr.number, state: pr.state, closedAt: pr.closedAt, url: pr.url, title: pr.title },
    };
  }

  if (pr?.state === "OPEN" && !pr.isDraft) {
    const mergeableNote = pr.mergeable === false ? " (mergeable: false)" : "";
    return {
      ref,
      headRefName,
      tipSha,
      category: CATEGORIES.ACTIVE_UNMERGED_CLOSURE,
      reason: `Open non-draft PR #${pr.number} with production content not on origin/main${mergeableNote}`,
      productionContentDiffFiles: contentDiffFiles,
      pr: {
        number: pr.number,
        state: pr.state,
        isDraft: false,
        mergeable: pr.mergeable ?? null,
        url: pr.url,
        title: pr.title,
      },
    };
  }

  const reason = pr?.state === "OPEN" && pr.isDraft
    ? `Open draft PR #${pr.number} with production content diff — OWNER review required`
    : pr
      ? `PR #${pr.number} state=${pr.state} with production content diff`
      : "No GitHub PR found; production content differs from origin/main";

  return {
    ref,
    headRefName,
    tipSha,
    category: CATEGORIES.NEEDS_OWNER_REVIEW,
    reason,
    productionContentDiffFiles: contentDiffFiles,
    pr: pr
      ? { number: pr.number, state: pr.state, isDraft: pr.isDraft, url: pr.url, title: pr.title }
      : null,
  };
}

/**
 * READ-ONLY classification of remote closure/repair/audit branches not merged to origin/main.
 * D1 blocks when final active > 0 OR unresolved NEEDS_OWNER_REVIEW > 0 (after OWNER decisions).
 */
function classifyUnmergedClosureCandidates(options = {}) {
  const raw = listRawClosureCandidates();
  if (!raw.ok) {
    return {
      ok: false,
      error: raw.error,
      generatedAt: new Date().toISOString(),
      mode: "READ_ONLY",
      candidates: [],
      summary: {},
      activeUnmergedClosureCount: 0,
      needsOwnerReviewCount: 0,
      unmergedClosureCountRaw: 0,
    };
  }

  const prLoad = loadPullRequestsByHead();
  const prByHead = prLoad.map;
  const ghError = prLoad.ok ? null : prLoad.error;

  const candidates = raw.refs.map((ref) => classifyBranchRef(ref, prByHead));

  const summary = {
    INTEGRATED_HISTORICAL: 0,
    CLOSED_SUPERSEDED: 0,
    ACTIVE_UNMERGED_CLOSURE: 0,
    NEEDS_OWNER_REVIEW: 0,
  };
  for (const row of candidates) {
    summary[row.category] = (summary[row.category] || 0) + 1;
  }

  const active = candidates.filter((c) => c.category === CATEGORIES.ACTIVE_UNMERGED_CLOSURE);
  const needsOwner = candidates.filter((c) => c.category === CATEGORIES.NEEDS_OWNER_REVIEW);

  const autoClassification = {
    ok: true,
    generatedAt: new Date().toISOString(),
    mode: "READ_ONLY",
    ghPrLookupError: ghError,
    unmergedClosureCountRaw: candidates.length,
    autoSummary: { ...summary },
    summary,
    activeUnmergedClosureCount: active.length,
    needsOwnerReviewCount: needsOwner.length,
    activeUnmergedClosureCandidates: active,
    needsOwnerReviewCandidates: needsOwner,
    candidates,
  };

  return applyOwnerDecisions(autoClassification, options);
}

function writeClassificationReports(classification, options = {}) {
  const outJson =
    options.outJson || path.join(ROOT, "reports", "unmerged-closure-classification-READONLY.json");
  const outMd =
    options.outMd || path.join(ROOT, "reports", "unmerged-closure-classification-READONLY.md");

  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, `${JSON.stringify(classification, null, 2)}\n`, "utf8");

  const lines = [
    "# Unmerged closure candidate classification — READ-ONLY",
    "",
    `**Generated:** ${classification.generatedAt}`,
    `**Mode:** ${classification.mode}`,
    `**Raw candidates:** ${classification.unmergedClosureCountRaw}`,
    `**ACTIVE (D1 blocker):** ${classification.activeUnmergedClosureCount}`,
    `**Unresolved NEEDS_OWNER_REVIEW (D1 blocker):** ${classification.unresolvedOwnerReviewCount ?? classification.needsOwnerReviewCount}`,
    `**OWNER decisions applied:** ${classification.ownerDecisionsApplied ?? 0}`,
    "",
    "## Summary (after OWNER decisions)",
    "",
    "| Category | Count | D1 blocks? |",
    "|----------|------:|------------|",
    `| INTEGRATED_HISTORICAL | ${classification.summary.INTEGRATED_HISTORICAL || 0} | no |`,
    `| CLOSED_SUPERSEDED | ${classification.summary.CLOSED_SUPERSEDED || 0} | no |`,
    `| ACTIVE_UNMERGED_CLOSURE | ${classification.summary.ACTIVE_UNMERGED_CLOSURE || 0} | **yes** |`,
    `| NEEDS_OWNER_REVIEW (unresolved) | ${classification.summary.NEEDS_OWNER_REVIEW || 0} | **yes** |`,
    "",
    "## Rules (deterministic auto-classification)",
    "",
    "1. PR merged → INTEGRATED_HISTORICAL",
    "2. Branch tip ancestor of origin/main → INTEGRATED_HISTORICAL",
    "3. No production blob diff vs origin/main → INTEGRATED_HISTORICAL",
    "4. PR closed without merge → CLOSED_SUPERSEDED",
    "5. Open non-draft PR with production blob diff → ACTIVE_UNMERGED_CLOSURE",
    "6. Otherwise (draft PR, no PR, ambiguous) → NEEDS_OWNER_REVIEW",
    "",
    "## F0-5 D1 gate (fail-closed)",
    "",
    "PASS only when `activeUnmergedClosureCount === 0` **and** `unresolvedOwnerReviewCount === 0`.",
    "Each unresolved candidate requires an OWNER decision in",
    "`reports/unmerged-closure-owner-decisions.json` with one of:",
    "`INTEGRATED_HISTORICAL`, `CLOSED_SUPERSEDED`, `ACTIVE_UNMERGED_CLOSURE`, `DOCUMENTED_EXCEPTION`.",
    "",
  ];

  if (classification.ownerDecisionsPath) {
    lines.push(`**OWNER decisions file:** \`${path.basename(classification.ownerDecisionsPath)}\``, "");
  }

  if (classification.autoSummary) {
    lines.push(
      "## Auto-classification (before OWNER decisions)",
      "",
      `| Category | Count |`,
      `|----------|------:|`,
      `| INTEGRATED_HISTORICAL | ${classification.autoSummary.INTEGRATED_HISTORICAL || 0} |`,
      `| CLOSED_SUPERSEDED | ${classification.autoSummary.CLOSED_SUPERSEDED || 0} |`,
      `| ACTIVE_UNMERGED_CLOSURE | ${classification.autoSummary.ACTIVE_UNMERGED_CLOSURE || 0} |`,
      `| NEEDS_OWNER_REVIEW | ${classification.autoSummary.NEEDS_OWNER_REVIEW || 0} |`,
      "",
    );
  }

  if (classification.ghPrLookupError) {
    lines.push(`**GitHub PR lookup warning:** ${classification.ghPrLookupError}`, "");
  }

  if (classification.activeUnmergedClosureCandidates?.length) {
    lines.push("## ACTIVE unmerged closures (D1 blockers)", "");
    for (const row of classification.activeUnmergedClosureCandidates) {
      lines.push(`- \`${row.ref}\` — ${row.reason}`);
      if (row.pr?.url) lines.push(`  - PR: ${row.pr.url}`);
      if (row.pr?.mergeable === false) lines.push(`  - mergeable: false`);
      if (row.productionContentDiffFiles?.length) {
        lines.push(`  - Production files: ${row.productionContentDiffFiles.join(", ")}`);
      }
    }
    lines.push("");
  }

  if (classification.needsOwnerReviewCandidates?.length) {
    lines.push("## Unresolved NEEDS_OWNER_REVIEW (D1 blockers until decided)", "");
    for (const row of classification.needsOwnerReviewCandidates.slice(0, 25)) {
      lines.push(`- \`${row.ref}\` — ${row.reason}`);
    }
    if (classification.needsOwnerReviewCandidates.length > 25) {
      lines.push(`- … and ${classification.needsOwnerReviewCandidates.length - 25} more (see JSON)`);
    }
    lines.push("");
  }

  lines.push("## Notes", "", "- READ-ONLY — no branch delete, no merge.", "");

  fs.writeFileSync(outMd, `${lines.join("\n")}\n`, "utf8");
  return { outJson, outMd };
}

module.exports = {
  CATEGORIES,
  classifyUnmergedClosureCandidates,
  writeClassificationReports,
  listRawClosureCandidates,
};
