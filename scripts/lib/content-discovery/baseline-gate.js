#!/usr/bin/env node
"use strict";

const { ROOT } = require("../audit-common");
const { MASTER_VERSION, G2_LEVELS } = require("../content-crowdin-bridge/constants");
const {
  git,
  resolveOriginMainSha,
  gitDeDiffAgainstBaseline,
  fileBlobSha,
} = require("./git-baseline");

function runBaselineGate() {
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

  const unmergedResult =
    origin.fetchStatus === "PASS" ? git("git branch -r --no-merged origin/main") : { ok: false, stdout: "" };
  const unmerged = unmergedResult.ok
    ? unmergedResult.stdout.split("\n").filter((b) => {
        const name = b.trim();
        return name && /closure|repair|audit/i.test(name);
      })
    : [];
  if (!unmergedResult.ok && origin.fetchStatus === "PASS") {
    blockers.push({
      code: "BLOCKED_GIT_UNMERGED_FAILED",
      message: unmergedResult.stderr || unmergedResult.error || "git branch --no-merged failed",
      severity: "WARNING",
    });
  } else if (unmerged.length > 0) {
    blockers.push({
      code: "BLOCKED_UNMERGED_CLOSURE_CANDIDATES",
      message: `Remote branches not merged to main (sample): ${unmerged.slice(0, 5).join(", ")}`,
      severity: "WARNING",
    });
  }

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
    datasetBlobs: {},
    verdict: blockers.some((b) => b.severity !== "WARNING") ? "BLOCKED" : "PASS",
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
