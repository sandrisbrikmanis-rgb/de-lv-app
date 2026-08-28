#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");

const PRODUCTION_DIFF_PATHS = ["data", "www/data", "languages"];
const DE_DIFF_PATHS = ["data/de", "www/data/de", "languages/de"];

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch (e) {
    return (e.stdout || "").trim() || "";
  }
}

function fetchOriginMain() {
  git("git fetch origin main 2>/dev/null || git fetch origin");
}

function resolveOriginMainSha() {
  fetchOriginMain();
  return git("git rev-parse origin/main") || null;
}

function fileBlobSha(relPath) {
  const out = git(`git hash-object "${relPath}"`);
  return out || null;
}

function gitDiffAgainstBaseline(originMainSha, pathArgs) {
  if (!originMainSha) {
    return { changed: [], error: "BLOCKED_NO_ORIGIN_MAIN_SHA" };
  }
  const paths = pathArgs.join(" ");
  const out = git(`git diff --name-only ${originMainSha}...HEAD -- ${paths}`);
  const changed = out ? out.split("\n").filter(Boolean) : [];
  return { changed, clean: changed.length === 0, originMainSha };
}

function gitProductionDiffAgainstBaseline(originMainSha) {
  return gitDiffAgainstBaseline(originMainSha, PRODUCTION_DIFF_PATHS);
}

function gitDeDiffAgainstBaseline(originMainSha) {
  return gitDiffAgainstBaseline(originMainSha, DE_DIFF_PATHS);
}

module.exports = {
  PRODUCTION_DIFF_PATHS,
  DE_DIFF_PATHS,
  git,
  fetchOriginMain,
  resolveOriginMainSha,
  gitDiffAgainstBaseline,
  gitProductionDiffAgainstBaseline,
  gitDeDiffAgainstBaseline,
  fileBlobSha,
};
