#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { MASTER_VERSION, G2_LEVELS } = require("../content-crowdin-bridge/constants");

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch (e) {
    return (e.stdout || "").trim() || "";
  }
}

function fileBlobSha(relPath) {
  const out = git(`git hash-object "${relPath}"`);
  return out || null;
}

function runBaselineGate() {
  git("git fetch origin");

  const originMainSha = git("git rev-parse origin/main");
  const headSha = git("git rev-parse HEAD");
  const deDiff = git("git diff --name-only HEAD -- data/de www/data/de languages/de");
  const blockers = [];

  if (!originMainSha) {
    blockers.push({ code: "BLOCKED_NO_ORIGIN_MAIN", message: "Could not resolve origin/main" });
  }

  if (deDiff) {
    blockers.push({
      code: "DE_CHANGES_ON_BRANCH",
      message: `DE paths modified on branch: ${deDiff.split("\n").filter(Boolean).join(", ")}`,
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
    deChanges: deDiff ? deDiff.split("\n").filter(Boolean) : [],
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
  git,
  fileBlobSha,
};
