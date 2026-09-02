#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { authorizeInfraResume } = require("./lib/phase1-luna-resume-auth");
const {
  validateExecutionIntegrity,
  checkProtectedIndexFlags,
  checkExecutionTreeIntegrity,
} = require("./lib/phase1-luna-execution-integrity");
const { buildOwnerAuthorizationDocument } = require("./lib/phase1-luna-owner-authorization-file");
const { classifyCheckpointValidation } = require("./lib/phase1-luna-checkpoint/batch-checkpoint");
const { isUntrustedLocalPatchCheckpoint } = require("./lib/phase1-luna-untrusted-checkpoint-registry");
const { getDeterministicScopeOrder } = require("./lib/content-discovery/phase1-applicability");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");
const { readPhase1ScopeInventoryRef } = require("./lib/content-discovery/phase1-scope-inventory");

const APPROVED = "bf6b76e8e018839e549603f3bc6a18a66d580a94";
const RUN_ID = "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";
const BASELINE = "6cfb96105f7f741f6052d20ee1d1e342f198fda2";

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function git(cmd) {
  try {
    return { ok: true, stdout: execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim() };
  } catch (error) {
    return { ok: false, stdout: "", stderr: error.message };
  }
}

function mockGitMatching(headSha = APPROVED) {
  const files = ["scripts/run-phase1-discovery.js", "package.json"];
  return (cmd) => {
    if (cmd === "git ls-files scripts/") return { ok: true, stdout: "scripts/run-phase1-discovery.js" };
    if (cmd === "git ls-files package.json") return { ok: true, stdout: "package.json" };
    if (cmd === "git ls-files package-lock.json") return { ok: true, stdout: "package.json" };
    if (cmd.startsWith("git ls-files -v")) return { ok: true, stdout: `H ${cmd.split("-- ").pop()}` };
    if (cmd.startsWith("git rev-parse")) return { ok: true, stdout: "abc123def4567890abc123def4567890abc12345" };
    if (cmd.startsWith("git hash-object")) return { ok: true, stdout: "abc123def4567890abc123def4567890abc12345" };
    return git(cmd);
  };
}

function loadManifest() {
  return JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/phase1-luna-runs", RUN_ID, "run-manifest.json"), "utf8"),
  );
}

function writeAuthFile(dir, manifest, sha = APPROVED) {
  const doc = buildOwnerAuthorizationDocument({
    approvedExecutionSha: sha,
    runId: manifest.runId,
    discoveryBaselineSha: manifest.discoveryBaselineSha,
    model: manifest.model,
    scopeHash: manifest.scopeHash,
    objectIdsHash: manifest.objectIdsHash,
    issuedAt: "2026-09-02T16:30:00.000Z",
  });
  const filePath = path.join(dir, "owner-auth.json");
  fs.writeFileSync(filePath, `${JSON.stringify(doc, null, 2)}\n`);
  return filePath;
}

function authOpts(overrides = {}) {
  const manifest = overrides.manifest || loadManifest();
  const authDir = overrides.authDir || fs.mkdtempSync(path.join(os.tmpdir(), "r005-auth-"));
  const ownerAuthorizationFile =
    overrides.ownerAuthorizationFile || writeAuthFile(authDir, manifest, overrides.approvedSha || APPROVED);
  return {
    resumeLuna: true,
    approvedInfraHeadSha: overrides.approvedSha || APPROVED,
    ownerAuthorizationFile,
    skipApiKeyCheck: true,
    gitIdentity: overrides.gitIdentity || {
      headSha: APPROVED,
      originMainSha: BASELINE,
      workingTreeClean: true,
      productionDiffClean: true,
      deDiffClean: true,
    },
    baseline: { originMainSha: BASELINE, verdict: "PASS" },
    manifest,
    requireManifestIdentity: true,
    runId: RUN_ID,
    cliScope: manifest.cliScope,
    scopes: getDeterministicScopeOrder(),
    transport: "REAL",
    gitIdentityDeps: overrides.gitIdentityDeps,
    ...overrides.extra,
  };
}

function testExactHeadPass() {
  const r = validateExecutionIntegrity({ headSha: APPROVED, gitFn: mockGitMatching() });
  assert(r.ok, "1: exact HEAD + identical execution files → PASS");
}

function testModifiedScriptFail() {
  const mockGit = (cmd) => {
    if (cmd.startsWith("git rev-parse")) return { ok: true, stdout: "aaa" };
    if (cmd.startsWith("git hash-object")) return { ok: true, stdout: "bbb" };
    if (cmd.startsWith("git ls-files -v")) return { ok: true, stdout: `H ${cmd.split("-- ").pop()}` };
    if (cmd === "git ls-files scripts/") return { ok: true, stdout: "scripts/run-phase1-discovery.js" };
    if (cmd === "git ls-files package.json") return { ok: true, stdout: "package.json" };
    if (cmd === "git ls-files package-lock.json") return { ok: true, stdout: "" };
    return git(cmd);
  };
  const r = validateExecutionIntegrity({ headSha: APPROVED, gitFn: mockGit });
  assert(!r.ok, "2: modified scripts file → FAIL");
  assert(r.blockers.some((b) => b.code === "EXECUTION_TREE_MISMATCH"), "2: EXECUTION_TREE_MISMATCH");
}

function testSkipWorktreeFail() {
  const target = "scripts/run-phase1-discovery.js";
  git(`git update-index --skip-worktree ${target}`);
  const r = checkProtectedIndexFlags(git);
  assert(!r.ok, "3: skip-worktree → FAIL");
  assert(r.blockers.some((b) => b.code === "EXECUTION_INDEX_FLAG_FORBIDDEN"), "3: INDEX_FLAG");
  git(`git update-index --no-skip-worktree ${target}`);
}

function testAssumeUnchangedFail() {
  const target = "scripts/run-phase1-discovery.js";
  git(`git update-index --assume-unchanged ${target}`);
  const r = checkProtectedIndexFlags(git);
  assert(!r.ok, "4: assume-unchanged → FAIL");
  git(`git update-index --no-assume-unchanged ${target}`);
}

function testCleanStatusDifferentBytesFail() {
  const mockGit = (cmd) => {
    if (cmd.startsWith("git rev-parse")) return { ok: true, stdout: "aaa" };
    if (cmd.startsWith("git hash-object")) return { ok: true, stdout: "bbb" };
    if (cmd.startsWith("git ls-files -v")) return { ok: true, stdout: `H ${cmd.split("-- ").pop()}` };
    if (cmd === "git ls-files scripts/") return { ok: true, stdout: "scripts/run-phase1-discovery.js" };
    if (cmd === "git ls-files package.json") return { ok: true, stdout: "package.json" };
    if (cmd === "git ls-files package-lock.json") return { ok: true, stdout: "" };
    return git(cmd);
  };
  const tree = checkExecutionTreeIntegrity(APPROVED, mockGit);
  assert(!tree.ok, "5: clean porcelain but different bytes → FAIL");
}

function testDirtyReportsFail() {
  const auth = authorizeInfraResume(
    authOpts({
      gitIdentityDeps: { git: mockGitMatching(), skipFetch: true },
      gitIdentity: {
        headSha: APPROVED,
        originMainSha: BASELINE,
        workingTreeClean: false,
        productionDiffClean: true,
        deDiffClean: true,
      },
      extra: {
        gitIdentityDeps: { git: mockGitMatching(), skipFetch: true, workingTreeClean: false },
      },
    }),
  );
  assert(!auth.pass, "6: reports-only dirty tree → FAIL");
}

function testAuthShaMismatch() {
  const manifest = loadManifest();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "r005-bad-auth-"));
  const file = writeAuthFile(dir, manifest, "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef");
  const auth = authorizeInfraResume({
    ...authOpts({ ownerAuthorizationFile: file, approvedSha: APPROVED }),
    gitIdentityDeps: { git: mockGitMatching(), skipFetch: true },
  });
  assert(!auth.pass, "7: auth SHA != HEAD → FAIL");
}

function testCliShaMismatch() {
  const auth = authorizeInfraResume({
    ...authOpts({ approvedSha: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef" }),
    gitIdentityDeps: { git: mockGitMatching(), skipFetch: true },
  });
  assert(!auth.pass, "8: CLI SHA != auth SHA → FAIL");
}

function testFailedAuthNoInventoryWrite() {
  const inv = path.join(ROOT, "reports/phase1-scope-inventory.json");
  const before = fs.statSync(inv).mtimeMs;
  const ref = readPhase1ScopeInventoryRef();
  assert(ref.ok, "9: read-only inventory ref available");
  const auth = authorizeInfraResume({
    ...authOpts({ ownerAuthorizationFile: "/tmp/missing-owner-auth.json" }),
    gitIdentityDeps: { git: mockGitMatching(), skipFetch: true },
  });
  const after = fs.statSync(inv).mtimeMs;
  assert(!auth.pass, "9: failed authorization blocks");
  assert(before === after, "9: failed authorization does not rewrite scope inventory");
}

function testResumePreflightBeforeWrite() {
  const src = fs.readFileSync(path.join(ROOT, "scripts/run-phase1-discovery.js"), "utf8");
  assert(src.includes("if (useCheckpoint && options.resumeLuna)"), "10: resume preflight precedes inventory write");
  assert(src.includes("readPhase1ScopeInventoryRef"), "10: resume uses read-only inventory ref");
}

function testUntrustedRegistryNotValidPass() {
  const fixture = JSON.parse(
    fs.readFileSync(path.join(ROOT, "scripts/fixtures/r-auth-005-pid-327971-untrusted-checkpoints.json"), "utf8"),
  );
  const sample = fixture.entries[0];
  const cp = JSON.parse(fs.readFileSync(path.join(ROOT, sample.file), "utf8"));
  const cls = classifyCheckpointValidation({ ok: false, issues: ["RETURNED_ID_POSITION_MISMATCH"] }, cp, {
    scopeId: sample.scopeId,
    filePath: path.join(ROOT, sample.file),
  });
  assert(cls === "UNTRUSTED_LOCAL_PATCH_RUN", "11: PID 327971 checkpoint not VALID_PASS");
  assert(
    isUntrustedLocalPatchCheckpoint(path.join(ROOT, sample.file), {
      scopeId: sample.scopeId,
      batchId: sample.batchId,
    }),
    "11: registry recognizes checkpoint by SHA",
  );
}

function testNoRealCallsInAuthTests() {
  const auth = authorizeInfraResume({
    ...authOpts(),
    gitIdentityDeps: { git: mockGitMatching(), skipFetch: true },
  });
  assert(auth.realCalls === 0, "12: auth tests realCalls 0");
}

function main() {
  testExactHeadPass();
  testModifiedScriptFail();
  testSkipWorktreeFail();
  testAssumeUnchangedFail();
  testCleanStatusDifferentBytesFail();
  testDirtyReportsFail();
  testAuthShaMismatch();
  testCliShaMismatch();
  testFailedAuthNoInventoryWrite();
  testResumePreflightBeforeWrite();
  testUntrustedRegistryNotValidPass();
  testNoRealCallsInAuthTests();

  console.log(`R-AUTH-005: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main();
