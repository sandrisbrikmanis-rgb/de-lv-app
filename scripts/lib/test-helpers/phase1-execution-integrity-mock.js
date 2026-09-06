#!/usr/bin/env node
"use strict";

function createMatchingExecutionGit(blobSha = "abc123def4567890abc123def4567890abc12345") {
  return function mockGit(cmd) {
    if (cmd === "git ls-files scripts/") {
      return { ok: true, stdout: "scripts/run-phase1-discovery.js" };
    }
    if (cmd === "git ls-files package.json") {
      return { ok: true, stdout: "package.json" };
    }
    if (cmd === "git ls-files package-lock.json") {
      return { ok: true, stdout: "package-lock.json" };
    }
    if (cmd.startsWith("git ls-files -v")) {
      const file = cmd.split("-- ").pop();
      return { ok: true, stdout: `H ${file}` };
    }
    if (cmd.startsWith("git rev-parse") && cmd.includes(":")) {
      return { ok: true, stdout: blobSha };
    }
    if (cmd.startsWith("git hash-object")) {
      return { ok: true, stdout: blobSha };
    }
    return { ok: false, stdout: "" };
  };
}

module.exports = {
  createMatchingExecutionGit,
};
