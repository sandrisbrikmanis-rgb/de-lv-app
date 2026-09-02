#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { git: defaultGit } = require("./content-discovery/git-baseline");

const INDEX_FLAG_SKIP_WORKTREE = "S";
const INDEX_FLAG_ASSUME_UNCHANGED = "h";

function listProtectedFiles(gitFn = defaultGit) {
  const files = new Set();
  const scripts = gitFn("git ls-files scripts/");
  if (scripts.ok && scripts.stdout) {
    for (const line of scripts.stdout.split("\n")) {
      if (line.trim()) files.add(line.trim());
    }
  }
  for (const rel of ["package.json", "package-lock.json"]) {
    const tracked = gitFn(`git ls-files ${rel}`);
    if (tracked.ok && tracked.stdout.trim()) files.add(rel);
  }
  return [...files].sort();
}

function parseIndexFlagLine(line) {
  if (!line || !line.trim()) return null;
  const flag = line.charAt(0);
  const file = line.slice(2).trim();
  return { flag, file };
}

function checkProtectedIndexFlags(gitFn = defaultGit) {
  const blockers = [];
  const flagged = [];

  for (const file of listProtectedFiles(gitFn)) {
    const result = gitFn(`git ls-files -v -- ${file}`);
    if (!result.ok || !result.stdout) continue;
    const parsed = parseIndexFlagLine(result.stdout.split("\n")[0]);
    if (!parsed) continue;
    if (parsed.flag === INDEX_FLAG_SKIP_WORKTREE || parsed.flag === INDEX_FLAG_ASSUME_UNCHANGED) {
      flagged.push({ file, flag: parsed.flag });
      blockers.push({
        code: "EXECUTION_INDEX_FLAG_FORBIDDEN",
        message: `Protected file ${file} has forbidden index flag '${parsed.flag}'`,
        file,
        flag: parsed.flag,
      });
    }
  }

  return { ok: blockers.length === 0, blockers, flagged };
}

function checkExecutionTreeIntegrity(headSha, gitFn = defaultGit) {
  const blockers = [];
  const mismatches = [];

  if (!headSha) {
    return {
      ok: false,
      blockers: [{ code: "EXECUTION_TREE_MISMATCH", message: "HEAD SHA is required for execution tree integrity" }],
      mismatches,
    };
  }

  for (const file of listProtectedFiles(gitFn)) {
    const absPath = path.join(ROOT, file);
    if (!fs.existsSync(absPath)) {
      mismatches.push({ file, reason: "MISSING_WORKING_FILE" });
      blockers.push({
        code: "EXECUTION_TREE_MISMATCH",
        message: `Protected file missing on disk: ${file}`,
        file,
      });
      continue;
    }

    const headBlob = gitFn(`git rev-parse ${headSha}:${file}`);
    const workBlob = gitFn(`git hash-object -- ${file}`);
    if (!headBlob.ok || !workBlob.ok) {
      mismatches.push({ file, reason: "BLOB_RESOLUTION_FAILED" });
      blockers.push({
        code: "EXECUTION_TREE_MISMATCH",
        message: `Could not resolve blob hash for ${file}`,
        file,
      });
      continue;
    }

    if (headBlob.stdout !== workBlob.stdout) {
      mismatches.push({
        file,
        headBlob: headBlob.stdout,
        workBlob: workBlob.stdout,
      });
      blockers.push({
        code: "EXECUTION_TREE_MISMATCH",
        message: `Working file bytes for ${file} do not match HEAD ${headSha}`,
        file,
        headBlob: headBlob.stdout,
        workBlob: workBlob.stdout,
      });
    }
  }

  return { ok: blockers.length === 0, blockers, mismatches };
}

function validateExecutionIntegrity({ headSha, gitFn = defaultGit } = {}) {
  const indexFlags = checkProtectedIndexFlags(gitFn);
  const tree = checkExecutionTreeIntegrity(headSha, gitFn);
  const blockers = [...indexFlags.blockers, ...tree.blockers];

  return {
    ok: blockers.length === 0,
    blockers,
    indexFlags,
    tree,
    protectedFileCount: listProtectedFiles(gitFn).length,
  };
}

module.exports = {
  INDEX_FLAG_SKIP_WORKTREE,
  INDEX_FLAG_ASSUME_UNCHANGED,
  listProtectedFiles,
  checkProtectedIndexFlags,
  checkExecutionTreeIntegrity,
  validateExecutionIntegrity,
};
