#!/usr/bin/env node
"use strict";

const { resolvePhase1GitIdentity } = require("./lib/phase1-git-identity");
const { authorizeWithLunaDiscovery } = require("./lib/phase1-luna-authorize");

const SHA_A = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const SHA_B = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

function passingIdentity(overrides = {}) {
  const originMainSha = overrides.originMainSha || SHA_A;
  const headSha = overrides.headSha || originMainSha;
  return resolvePhase1GitIdentity({
    skipFetch: true,
    fetchStatus: "PASS",
    originMainSha,
    headSha,
    workingTreeClean: true,
    productionDiffClean: true,
    deDiffClean: true,
    ...overrides,
  });
}

function passingPhase0(headSha = SHA_A) {
  return {
    phase0Complete: true,
    status: "PHASE_0_COMPLETE",
    evaluatedHeadSha: headSha,
    gates: {
      F0_1_bridge_library: { pass: true },
      F0_2_export_dry_run: { pass: true },
      F0_3_roundtrip: { pass: true },
      F0_4_discovery_orchestrator: { pass: true },
      F0_5_baseline_header: { pass: true },
      F0_6_deterministic_collectors: { pass: true },
      F0_7_production_diff_zero: { pass: true },
      F0_8_all_groups_coverage: { pass: true },
    },
  };
}

function passingBaseline() {
  return { verdict: "PASS", originMainSha: SHA_A, blockers: [] };
}

function testHeadMatchesOriginMainPass() {
  const identity = passingIdentity();
  assert(identity.pass, "HEAD=origin/main PASS");
  assert(identity.headMatchesOriginMain, "headMatchesOriginMain true");
}

function testOriginMainAdvancesWithHeadPass() {
  const identity = passingIdentity({ originMainSha: SHA_B, headSha: SHA_B });
  assert(identity.pass, "HEAD follows new origin/main PASS");
  assert(identity.originMainSha === SHA_B, "origin/main SHA_B");
}

function testHeadStaleAfterOriginAdvanceFail() {
  const identity = passingIdentity({ originMainSha: SHA_B, headSha: SHA_A });
  assert(!identity.pass, "stale HEAD FAIL");
  assert(
    identity.blockers.some((b) => b.code === "HEAD_NOT_AT_ORIGIN_MAIN"),
    "HEAD_NOT_AT_ORIGIN_MAIN",
  );
}

function testHeadAheadOfMainFail() {
  const identity = passingIdentity({ originMainSha: SHA_A, headSha: SHA_B });
  assert(!identity.pass, "feature branch ahead FAIL");
  assert(
    identity.blockers.some((b) => b.code === "HEAD_NOT_AT_ORIGIN_MAIN"),
    "HEAD_NOT_AT_ORIGIN_MAIN ahead",
  );
}

function testFetchFail() {
  const identity = resolvePhase1GitIdentity({
    skipFetch: true,
    fetchStatus: "FAIL",
    fetchError: "network down",
    originMainSha: SHA_A,
    headSha: SHA_A,
    workingTreeClean: true,
    productionDiffClean: true,
    deDiffClean: true,
  });
  assert(!identity.pass, "fetch fail");
  assert(identity.blockers.some((b) => b.code === "GIT_FETCH_FAILED"), "GIT_FETCH_FAILED");
}

function testOriginMainUnresolved() {
  const identity = resolvePhase1GitIdentity({
    skipFetch: true,
    fetchStatus: "PASS",
    git: (cmd) => {
      if (cmd.includes("origin/main")) return { ok: false, stderr: "bad ref" };
      if (cmd.includes("HEAD")) return { ok: true, stdout: SHA_A };
      if (cmd.includes("porcelain")) return { ok: true, stdout: "" };
      return { ok: true, stdout: "" };
    },
    gitProductionDiffAgainstBaseline: () => ({ clean: true }),
    gitDeDiffAgainstBaseline: () => ({ clean: true }),
  });
  assert(!identity.pass, "origin/main unresolved FAIL");
  assert(
    identity.blockers.some((b) => b.code === "ORIGIN_MAIN_SHA_UNRESOLVED"),
    "ORIGIN_MAIN_SHA_UNRESOLVED",
  );
}

function testHeadUnresolved() {
  const identity = resolvePhase1GitIdentity({
    skipFetch: true,
    fetchStatus: "PASS",
    originMainSha: SHA_A,
    git: (cmd) => {
      if (cmd.includes("HEAD")) return { ok: false, stderr: "bad head" };
      if (cmd.includes("porcelain")) return { ok: true, stdout: "" };
      return { ok: true, stdout: "" };
    },
    gitProductionDiffAgainstBaseline: () => ({ clean: true }),
    gitDeDiffAgainstBaseline: () => ({ clean: true }),
  });
  assert(!identity.pass, "HEAD unresolved FAIL");
  assert(identity.blockers.some((b) => b.code === "HEAD_SHA_UNRESOLVED"), "HEAD_SHA_UNRESOLVED");
}

function testInvalidShaLength() {
  const identity = resolvePhase1GitIdentity({
    skipFetch: true,
    fetchStatus: "PASS",
    originMainSha: "abc123",
    headSha: "abc123",
    workingTreeClean: true,
    productionDiffClean: true,
    deDiffClean: true,
  });
  assert(!identity.pass, "invalid SHA FAIL");
  assert(
    identity.blockers.some((b) => b.code === "ORIGIN_MAIN_SHA_INVALID"),
    "ORIGIN_MAIN_SHA_INVALID",
  );
}

function testWorkingTreeDirty() {
  const identity = passingIdentity({ workingTreeClean: false });
  assert(!identity.pass, "dirty tree FAIL");
  assert(identity.blockers.some((b) => b.code === "WORKING_TREE_DIRTY"), "WORKING_TREE_DIRTY");
}

function testStagedChangesDirty() {
  const identity = resolvePhase1GitIdentity({
    skipFetch: true,
    fetchStatus: "PASS",
    originMainSha: SHA_A,
    headSha: SHA_A,
    git: (cmd) => {
      if (cmd.includes("porcelain")) return { ok: true, stdout: "M  data/de/a1.js\n" };
      return { ok: true, stdout: "" };
    },
    gitProductionDiffAgainstBaseline: () => ({ clean: true }),
    gitDeDiffAgainstBaseline: () => ({ clean: true }),
  });
  assert(!identity.pass, "staged changes FAIL");
  assert(identity.blockers.some((b) => b.code === "WORKING_TREE_DIRTY"), "WORKING_TREE_DIRTY staged");
}

function testProductionDiffNonZero() {
  const identity = passingIdentity({ productionDiffClean: false });
  assert(!identity.pass, "production diff FAIL");
  assert(
    identity.blockers.some((b) => b.code === "PRODUCTION_DIFF_NONZERO"),
    "PRODUCTION_DIFF_NONZERO",
  );
}

function testDeDiffNonZero() {
  const identity = passingIdentity({ deDiffClean: false });
  assert(!identity.pass, "DE diff FAIL");
  assert(identity.blockers.some((b) => b.code === "DE_DIFF_NONZERO"), "DE_DIFF_NONZERO");
}

function testAuthorizePhase0Fail() {
  const auth = authorizeWithLunaDiscovery({
    skipApiKeyCheck: true,
    gitIdentity: passingIdentity(),
    baseline: passingBaseline(),
    phase0Matrix: { phase0Complete: false, status: "PHASE_0_INCOMPLETE", gates: {} },
  });
  assert(!auth.pass, "phase0 fail blocks");
  assert(auth.blocker === "PHASE_0_EXIT_FAIL", "PHASE_0_EXIT_FAIL");
}

function testAuthorizePhase0HeadMismatch() {
  const auth = authorizeWithLunaDiscovery({
    skipApiKeyCheck: true,
    gitIdentity: passingIdentity({ headSha: SHA_A }),
    baseline: passingBaseline(),
    phase0Matrix: passingPhase0(SHA_B),
  });
  assert(!auth.pass, "phase0 head mismatch blocks");
  assert(auth.blocker === "PHASE_0_HEAD_SHA_MISMATCH", "PHASE_0_HEAD_SHA_MISMATCH");
}

function testAuthorizeMissingApiKey() {
  const saved = process.env.OPENAI_API_KEY;
  delete process.env.OPENAI_API_KEY;
  const auth = authorizeWithLunaDiscovery({
    skipPhase0Check: true,
    gitIdentity: passingIdentity(),
    baseline: passingBaseline(),
  });
  assert(!auth.pass, "missing api key blocks");
  assert(auth.blocker === "OPENAI_API_KEY_MISSING", "OPENAI_API_KEY_MISSING");
  process.env.OPENAI_API_KEY = saved;
}

function testAuthorizeFullPass() {
  const saved = process.env.OPENAI_API_KEY;
  process.env.OPENAI_API_KEY = "sk-test-injected-key-for-gate-only";
  const auth = authorizeWithLunaDiscovery({
    gitIdentity: passingIdentity(),
    baseline: passingBaseline(),
    phase0Matrix: passingPhase0(SHA_A),
    productionDiff: { clean: true, changed: [] },
  });
  assert(auth.pass, "full injected authorize PASS");
  process.env.OPENAI_API_KEY = saved;
}

function testPostMergeSimulation() {
  let originMainSha = SHA_A;
  let headSha = SHA_A;

  const resolve = () =>
    resolvePhase1GitIdentity({
      skipFetch: true,
      fetchStatus: "PASS",
      originMainSha,
      headSha,
      workingTreeClean: true,
      productionDiffClean: true,
      deDiffClean: true,
    });

  assert(resolve().pass, "sim step 1: SHA_A PASS");

  originMainSha = SHA_B;
  headSha = SHA_B;
  assert(resolve().pass, "sim step 2: advance to SHA_B PASS without code change");

  headSha = SHA_A;
  const stale = resolve();
  assert(!stale.pass, "sim step 3: stale HEAD at SHA_A FAIL");
  assert(
    stale.blockers.some((b) => b.code === "HEAD_NOT_AT_ORIGIN_MAIN"),
    "sim step 3 blocker",
  );
}

function run() {
  testHeadMatchesOriginMainPass();
  testOriginMainAdvancesWithHeadPass();
  testHeadStaleAfterOriginAdvanceFail();
  testHeadAheadOfMainFail();
  testFetchFail();
  testOriginMainUnresolved();
  testHeadUnresolved();
  testInvalidShaLength();
  testWorkingTreeDirty();
  testStagedChangesDirty();
  testProductionDiffNonZero();
  testDeDiffNonZero();
  testAuthorizePhase0Fail();
  testAuthorizePhase0HeadMismatch();
  testAuthorizeMissingApiKey();
  testAuthorizeFullPass();
  testPostMergeSimulation();
}

if (require.main === module) {
  run();
  console.log("PASS: phase1 dynamic baseline gate tests");
}

module.exports = { run };
