#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");

const PRODUCTION_DIFF_PATHS = ["data", "www/data", "languages"];
const DE_DIFF_PATHS = ["data/de", "www/data/de", "languages/de"];

function git(cmd) {
  try {
    const stdout = execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
    return { ok: true, stdout };
  } catch (e) {
    return {
      ok: false,
      stdout: (e.stdout || "").toString().trim(),
      stderr: (e.stderr || "").toString().trim(),
      error: e.message || "git command failed",
    };
  }
}

function gitStdout(cmd) {
  const result = git(cmd);
  if (!result.ok) {
    const detail = result.stderr || result.error || "unknown git error";
    throw new Error(`${cmd} — ${detail}`);
  }
  return result.stdout;
}

function fetchOriginMain() {
  const mainFetch = git("git fetch origin main");
  if (mainFetch.ok) {
    return { ok: true, status: "PASS", command: "git fetch origin main" };
  }

  const originFetch = git("git fetch origin");
  if (originFetch.ok) {
    return {
      ok: true,
      status: "PASS",
      command: "git fetch origin",
      fallback: true,
      mainFetchError: mainFetch.stderr || mainFetch.error || null,
    };
  }

  return {
    ok: false,
    status: "FAIL",
    error:
      originFetch.stderr ||
      originFetch.error ||
      mainFetch.stderr ||
      mainFetch.error ||
      "GIT_FETCH_FAILED",
    commands: ["git fetch origin main", "git fetch origin"],
  };
}

function resolveOriginMainSha() {
  const fetch = fetchOriginMain();
  if (!fetch.ok) {
    return {
      sha: null,
      error: "BLOCKED_GIT_FETCH_FAILED",
      fetchStatus: "FAIL",
      fetchError: fetch.error,
      revParseStatus: "SKIPPED",
    };
  }

  const result = git("git rev-parse origin/main");
  if (!result.ok) {
    return {
      sha: null,
      error: result.stderr || result.error || "GIT_REV_PARSE_ORIGIN_MAIN_FAILED",
      fetchStatus: "PASS",
      fetchCommand: fetch.command,
      revParseStatus: "FAIL",
      revParseError: result.stderr || result.error || null,
    };
  }
  if (!result.stdout) {
    return {
      sha: null,
      error: "GIT_REV_PARSE_ORIGIN_MAIN_EMPTY",
      fetchStatus: "PASS",
      fetchCommand: fetch.command,
      revParseStatus: "FAIL",
    };
  }

  return {
    sha: result.stdout,
    error: null,
    fetchStatus: "PASS",
    fetchCommand: fetch.command,
    revParseStatus: "PASS",
  };
}

function fileBlobSha(relPath) {
  const result = git(`git hash-object "${relPath}"`);
  return result.ok && result.stdout ? result.stdout : null;
}

function gitDiffAgainstBaseline(originMainSha, pathArgs) {
  if (!originMainSha) {
    return { changed: [], clean: false, error: "BLOCKED_NO_ORIGIN_MAIN_SHA" };
  }
  const paths = pathArgs.join(" ");
  const result = git(`git diff --name-only ${originMainSha}...HEAD -- ${paths}`);
  if (!result.ok) {
    return {
      changed: [],
      clean: false,
      error: result.stderr || result.error || "GIT_DIFF_FAILED",
      originMainSha,
    };
  }
  const changed = result.stdout ? result.stdout.split("\n").filter(Boolean) : [];
  return { changed, clean: changed.length === 0, originMainSha, error: null };
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
  gitStdout,
  fetchOriginMain,
  resolveOriginMainSha,
  gitDiffAgainstBaseline,
  gitProductionDiffAgainstBaseline,
  gitDeDiffAgainstBaseline,
  fileBlobSha,
};
