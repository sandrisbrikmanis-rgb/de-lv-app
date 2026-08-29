#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeReportAtomic } = require("./lib/content-discovery/report-builder");
const {
  PHASE1_OWNER_PREP_DIR,
  PHASE1_OWNER_VIEW_FILE,
  PHASE1_OWNER_DECISIONS_FILE,
  ownerPrepDir,
} = require("./build-phase1-owner-review");

const PHASE1_OWNER_GITHUB_FILE = "phase1-full-owner-review-GITHUB.md";

function buildPhase1GithubIndex(options = {}) {
  const branch = options.branch || "cursor/f0-comp-infrastructure-ab00";
  const repoUrl = options.repoUrl || "https://github.com/sandrisbrikmanis-rgb/de-lv-app";
  const blob = (filePath) => `${repoUrl}/blob/${branch}/${filePath}`;

  return [
    "# Phase 1 OWNER review — GitHub index",
    "",
    "## OWNER-PREP",
    "",
    `- [OWNER view](${blob(`${PHASE1_OWNER_PREP_DIR}/${PHASE1_OWNER_VIEW_FILE}`)})`,
    `- [OWNER decisions](${blob(`${PHASE1_OWNER_PREP_DIR}/${PHASE1_OWNER_DECISIONS_FILE}`)})`,
  "",
    "## Discovery artefacts",
    "",
    `- [phase1-discovery-READONLY.md](${blob("reports/phase1-discovery-READONLY.md")})`,
    `- [phase1-discovery-matrix.json](${blob("reports/phase1-discovery-matrix.json")})`,
    `- [phase1-exit.json](${blob("reports/phase1-exit.json")})`,
    `- [phase1-exit.md](${blob("reports/phase1-exit.md")})`,
    "",
    `**Branch:** \`${branch}\``,
    "",
    options.mockNote ? `> ${options.mockNote}` : "",
    options.mockNote ? "" : null,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

function writePhase1GithubIndex(options = {}) {
  const root = options.root || ROOT;
  const outDir = options.outDir || ownerPrepDir(root);
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, PHASE1_OWNER_GITHUB_FILE);
  writeReportAtomic(
    outPath,
    `${buildPhase1GithubIndex(options)}\n`,
  );
  return {
    outPath,
    file: path.relative(root, outPath).replace(/\\/g, "/"),
  };
}

function main() {
  const result = writePhase1GithubIndex({
    mockNote: "Generated for F0-COMP infrastructure verification (mock findings only).",
  });
  console.log(JSON.stringify({ github: result.file }, null, 2));
}

if (require.main === module) {
  main();
}

module.exports = {
  PHASE1_OWNER_GITHUB_FILE,
  buildPhase1GithubIndex,
  writePhase1GithubIndex,
};
