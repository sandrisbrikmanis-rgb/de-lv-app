#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");

const FORBIDDEN_CANONICAL_PREFIXES = ["data", "www/data", "languages", "www/languages"];

function getRootCanonical() {
  return fs.realpathSync.native(ROOT);
}

function relInsideRoot(canonicalPath, rootCanonical = getRootCanonical()) {
  const rel = path.relative(rootCanonical, canonicalPath).replace(/\\/g, "/");
  if (rel.startsWith("..") || rel === "") return null;
  return rel;
}

function isForbiddenRepoRelative(rel) {
  if (!rel) return false;
  return FORBIDDEN_CANONICAL_PREFIXES.some(
    (prefix) => rel === prefix || rel.startsWith(`${prefix}/`),
  );
}

function realpathExisting(absPath) {
  return fs.realpathSync.native(absPath);
}

function canonicalizePath(absPath) {
  const resolved = path.resolve(absPath);
  if (fs.existsSync(resolved)) {
    return realpathExisting(resolved);
  }
  const parent = path.dirname(resolved);
  const base = path.basename(resolved);
  if (!fs.existsSync(parent)) {
    return resolved;
  }
  return path.join(realpathExisting(parent), base);
}

function assertCanonicalNotForbidden(canonicalPath, label) {
  const rel = relInsideRoot(canonicalPath);
  if (rel && isForbiddenRepoRelative(rel)) {
    const err = new Error(`${label}_FORBIDDEN_CANONICAL:${canonicalPath}`);
    err.code = "STAGING_PATH_FORBIDDEN";
    throw err;
  }
}

function walkExistingPrefixes(absPath) {
  const resolved = path.resolve(absPath);
  const parts = [];
  let current = resolved;
  while (true) {
    parts.push(current);
    const parent = path.dirname(current);
    if (parent === current) break;
    current = parent;
  }
  return parts;
}

function assertSymlinkSafeStagingPath(stagingDir) {
  const rootCanonical = getRootCanonical();
  const resolved = path.resolve(stagingDir);

  for (const prefixPath of walkExistingPrefixes(resolved)) {
    if (!fs.existsSync(prefixPath)) continue;
    const canonical = realpathExisting(prefixPath);
    assertCanonicalNotForbidden(canonical, "STAGING_PATH");
    if (prefixPath !== canonical && isForbiddenRepoRelative(relInsideRoot(canonical, rootCanonical))) {
      const err = new Error(`STAGING_SYMLINK_FORBIDDEN:${prefixPath}->${canonical}`);
      err.code = "STAGING_PATH_FORBIDDEN";
      throw err;
    }
  }

  const canonical = canonicalizePath(resolved);
  assertCanonicalNotForbidden(canonical, "STAGING_PATH");
  return resolved;
}

function assertSymlinkSafeOutputParent(outDir) {
  const rootCanonical = getRootCanonical();
  const resolved = path.resolve(outDir);
  const parent = path.dirname(resolved);

  for (const prefixPath of walkExistingPrefixes(parent)) {
    if (!fs.existsSync(prefixPath)) continue;
    const canonical = realpathExisting(prefixPath);
    const rel = relInsideRoot(canonical, rootCanonical);
    if (rel && isForbiddenRepoRelative(rel)) {
      const err = new Error(`OUTPUT_PARENT_FORBIDDEN_CANONICAL:${canonical}`);
      err.code = "STAGING_PATH_FORBIDDEN";
      throw err;
    }
    if (prefixPath !== canonical) {
      const targetRel = relInsideRoot(canonical, rootCanonical);
      if (targetRel && isForbiddenRepoRelative(targetRel)) {
        const err = new Error(`OUTPUT_PARENT_SYMLINK_FORBIDDEN:${prefixPath}->${canonical}`);
        err.code = "STAGING_PATH_FORBIDDEN";
        throw err;
      }
    }
  }

  const parentCanonical = canonicalizePath(parent);
  assertCanonicalNotForbidden(parentCanonical, "OUTPUT_PARENT");
  return resolved;
}

module.exports = {
  FORBIDDEN_CANONICAL_PREFIXES,
  getRootCanonical,
  relInsideRoot,
  isForbiddenRepoRelative,
  canonicalizePath,
  assertSymlinkSafeStagingPath,
  assertSymlinkSafeOutputParent,
};
