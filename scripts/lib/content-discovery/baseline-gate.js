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
  const originMainSha = resolveOriginMainSha();
  const headSha = git("git rev-parse HEAD");
  const deDiffResult = gitDeDiffAgainstBaseline(originMainSha);
  const deDiff = deDiffResult.changed;
  const blockers = [];

  if (!originMainSha) {
    blockers.push({ code: "BLOCKED_NO_ORIGIN_MAIN", message: "Could not resolve origin/main" });
  }

  if (deDiff.length > 0) {
    blockers.push({
      code: "DE_CHANGES_ON_BRANCH",
      message: `DE paths modified vs origin/main (${originMainSha}...HEAD): ${deDiff.join(", ")}`,
      paths: deDiff,
    });
  }

  const unmerged = git("git branch -r --no-merged origin/main").split("\n").filter((b) => {
    const name = b.trim();
    return name && /closure|repair|audit/i.test(name);
  });
  if (unmerged.length > 0) {
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
    deChanges: deDiff,
    deDiffBaseline: `${originMainSha}...HEAD`,
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
