#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("../audit-common");
const { MASTER_VERSION, G2_LEVELS } = require("../content-crowdin-bridge/constants");
const {
  git,
  resolveOriginMainSha,
  gitDeDiffAgainstBaseline,
  fileBlobSha,
} = require("./git-baseline");
const {
  classifyUnmergedClosureCandidates,
  writeClassificationReports,
} = require("./unmerged-closure-classifier");

function runBaselineGate(options = {}) {
  const writeReports = options.writeReports !== false;
  const origin = resolveOriginMainSha();
  const originMainSha = origin.sha;
  const headResult = git("git rev-parse HEAD");
  const headSha = headResult.ok ? headResult.stdout : null;
  const deDiffResult =
    origin.fetchStatus === "PASS" && origin.revParseStatus === "PASS"
      ? gitDeDiffAgainstBaseline(originMainSha)
      : { changed: [], clean: false, error: "SKIPPED_BASELINE_FETCH_OR_REVPARSE_FAILED" };
  const deDiff = deDiffResult.error ? [] : deDiffResult.changed;
  const blockers = [];

  if (origin.fetchStatus !== "PASS") {
    blockers.push({
      code: "BLOCKED_GIT_FETCH_FAILED",
      message: origin.fetchError || "git fetch origin failed",
    });
  }

  if (origin.revParseStatus === "FAIL" || (!originMainSha && origin.fetchStatus === "PASS")) {
    blockers.push({
      code: "BLOCKED_NO_ORIGIN_MAIN",
      message: origin.error || origin.revParseError || "Could not resolve origin/main",
    });
  }

  if (origin.fetchStatus === "PASS" && origin.revParseStatus === "PASS") {
    if (deDiffResult.error) {
      blockers.push({
        code: "BLOCKED_GIT_DIFF_FAILED",
        message: `DE baseline git diff failed: ${deDiffResult.error}`,
      });
    } else if (deDiff.length > 0) {
      blockers.push({
        code: "DE_CHANGES_ON_BRANCH",
        message: `DE paths modified vs origin/main (${originMainSha}...HEAD): ${deDiff.join(", ")}`,
        paths: deDiff,
      });
    }
  }

  if (!headResult.ok) {
    blockers.push({
      code: "BLOCKED_GIT_HEAD_FAILED",
      message: headResult.stderr || headResult.error || "git rev-parse HEAD failed",
    });
  }

  let closureClassification = null;
  let classificationReports = null;

  if (origin.fetchStatus === "PASS" && origin.revParseStatus === "PASS") {
    closureClassification = classifyUnmergedClosureCandidates();
    if (writeReports) {
      classificationReports = writeClassificationReports(closureClassification, {
        outJson: path.join(ROOT, "reports", "unmerged-closure-classification-READONLY.json"),
        outMd: path.join(ROOT, "reports", "unmerged-closure-classification-READONLY.md"),
      });
    }

    if (!closureClassification.ok) {
      blockers.push({
        code: "BLOCKED_UNMERGED_CLOSURE_CLASSIFICATION_FAILED",
        message: closureClassification.error || "Could not classify unmerged closure candidates",
      });
    } else if (closureClassification.ownerDecisionsErrors?.length) {
      blockers.push({
        code: "BLOCKED_UNMERGED_CLOSURE_OWNER_DECISIONS_INVALID",
        message: closureClassification.ownerDecisionsErrors.join("; "),
        path: closureClassification.ownerDecisionsPath,
      });
    } else if (closureClassification.ghPrLookupError) {
      blockers.push({
        code: "BLOCKED_GH_PR_LOOKUP_FAILED",
        message: closureClassification.ghPrLookupError,
      });
    } else {
      const unresolved =
        closureClassification.unresolvedOwnerReviewCount ??
        closureClassification.needsOwnerReviewCount ??
        0;

      if (closureClassification.activeUnmergedClosureCount > 0) {
        blockers.push({
          code: "BLOCKED_UNMERGED_CLOSURE",
          message: `${closureClassification.activeUnmergedClosureCount} active unmerged closure branch(es) with production content not on origin/main`,
          active: closureClassification.activeUnmergedClosureCandidates.map((c) => ({
            ref: c.ref,
            pr: c.pr?.number,
            url: c.pr?.url,
            mergeable: c.pr?.mergeable ?? null,
            files: c.productionContentDiffFiles,
            ownerDecision: c.ownerDecision?.resolvedCategory || null,
          })),
          count: closureClassification.activeUnmergedClosureCount,
        });
      }

      if (unresolved > 0) {
        blockers.push({
          code: "BLOCKED_UNMERGED_CLOSURE_OWNER_REVIEW_PENDING",
          message: `${unresolved} unmerged closure candidate(s) lack OWNER decision (NEEDS_OWNER_REVIEW)`,
          unresolved,
          ownerDecisionsPath: closureClassification.ownerDecisionsPath,
          sample: closureClassification.needsOwnerReviewCandidates.slice(0, 10).map((c) => ({
            ref: c.ref,
            pr: c.pr?.number,
            reason: c.reason,
          })),
        });
      }
    }
  }

  const unmergedResult =
    origin.fetchStatus === "PASS" ? git("git branch -r --no-merged origin/main") : { ok: false, stdout: "" };
  const unmergedClosureCandidatesRaw = unmergedResult.ok
    ? unmergedResult.stdout
        .split("\n")
        .map((b) => b.trim())
        .filter((name) => name && /closure|repair|audit/i.test(name))
    : [];

  const header = {
    masterStandardVersion: MASTER_VERSION,
    generatedAt: new Date().toISOString(),
    originMainSha,
    headSha,
    fetchStatus: origin.fetchStatus,
    fetchError: origin.fetchError || null,
    fetchCommand: origin.fetchCommand || null,
    revParseStatus: origin.revParseStatus,
    revParseError: origin.revParseError || null,
    deChanges: deDiff,
    deDiffBaseline: originMainSha ? `${originMainSha}...HEAD` : null,
    deDiffError: deDiffResult.error || null,
    unmergedClosureCandidatesRaw,
    unmergedClosureCountRaw: unmergedClosureCandidatesRaw.length,
    unmergedClosureClassification: closureClassification?.summary || null,
    unmergedClosureAutoClassification: closureClassification?.autoSummary || null,
    activeUnmergedClosureCount: closureClassification?.activeUnmergedClosureCount ?? null,
    needsOwnerReviewCount: closureClassification?.needsOwnerReviewCount ?? null,
    unresolvedOwnerReviewCount: closureClassification?.unresolvedOwnerReviewCount ?? null,
    ownerDecisionsPath: closureClassification?.ownerDecisionsPath || null,
    ownerDecisionsApplied: closureClassification?.ownerDecisionsApplied ?? null,
    activeUnmergedClosureCandidates: closureClassification?.activeUnmergedClosureCandidates || [],
    needsOwnerReviewSample: (closureClassification?.needsOwnerReviewCandidates || []).slice(0, 20),
    classificationReportJson: classificationReports?.outJson || null,
    classificationReportMd: classificationReports?.outMd || null,
    datasetBlobs: {},
    verdict: blockers.length > 0 ? "BLOCKED" : "PASS",
    blockers,
  };

  for (const level of G2_LEVELS) {
    const rel = `data/${level}.js`;
    header.datasetBlobs[level] = {
      lv: fileBlobSha(rel),
      wwwLv: fileBlobSha(`www/${rel}`),
    };
  }

  return header;
}

module.exports = {
  runBaselineGate,
};
