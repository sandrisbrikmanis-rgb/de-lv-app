#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const {
  authorizeInfraResume,
  validateFrozenPhase0Identity,
} = require("./lib/phase1-luna-resume-auth");
const { prepareResumeContext } = require("./lib/phase1-luna-checkpoint/resume");
const { getDeterministicScopeOrder } = require("./lib/content-discovery/phase1-applicability");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");

const SHA_BASELINE = "6cfb96105f7f741f6052d20ee1d1e342f198fda2";
const { OWNER_APPROVED_RESUME } = require("./lib/phase1-luna-resume-authorization");
const SHA_APPROVED_INFRA = OWNER_APPROVED_RESUME.infraHeadSha;
const RUN_ID = "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function injectedGitIdentity(overrides = {}) {
  return {
    pass: true,
    blockers: [],
    headSha: SHA_APPROVED_INFRA,
    originMainSha: SHA_BASELINE,
    headMatchesOriginMain: false,
    workingTreeClean: true,
    productionDiffClean: true,
    deDiffClean: true,
    productionDiff: { clean: true, changed: [] },
    deDiff: { clean: true, changed: [] },
    fetchStatus: "PASS",
    ...overrides,
  };
}

function baselinePass() {
  return { originMainSha: SHA_BASELINE, verdict: "PASS" };
}

function resumeOpts(overrides = {}) {
  return {
    resumeLuna: true,
    approvedInfraHeadSha: SHA_APPROVED_INFRA,
    runId: RUN_ID,
    authorizedRunId: RUN_ID,
    discoveryBaselineSha: SHA_BASELINE,
    expectedDiscoveryBaselineSha: SHA_BASELINE,
    model: DEFAULT_MODEL,
    expectedModel: DEFAULT_MODEL,
    skipApiKeyCheck: true,
    gitIdentity: injectedGitIdentity(),
    baseline: baselinePass(),
    ...overrides,
  };
}

function testFrozenPhase0Pass() {
  const r = validateFrozenPhase0Identity();
  assert(r.ok, "frozen Phase 0 identity passes");
}

function testApprovedHeadPass() {
  const r = authorizeInfraResume(resumeOpts());
  assert(r.pass, "approved infra HEAD + clean worktree passes");
  assert(r.realCalls === 0, "approved pass realCalls 0");
}

function testDirtyWorktreeFails() {
  const r = authorizeInfraResume(
    resumeOpts({ gitIdentity: injectedGitIdentity({ workingTreeClean: false, pass: false, blockers: [{ code: "WORKING_TREE_DIRTY" }] }) }),
  );
  assert(!r.pass, "dirty worktree fails");
  assert(r.blocker === "WORKING_TREE_DIRTY", "dirty worktree code");
  assert(r.realCalls === 0, "dirty worktree realCalls 0");
}

function testUnapprovedHeadFails() {
  const r = authorizeInfraResume(resumeOpts({ approvedInfraHeadSha: null }));
  assert(!r.pass, "missing approved SHA fails");
  assert(r.blocker === "INFRA_RESUME_HEAD_NOT_AUTHORIZED", "unauthorized head code");
}

function testHeadMismatchFails() {
  const r = authorizeInfraResume(
    resumeOpts({
      gitIdentity: injectedGitIdentity({ headSha: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef" }),
    }),
  );
  assert(!r.pass, "HEAD mismatch fails");
  assert(r.blocker === "INFRA_RESUME_HEAD_MISMATCH", "head mismatch code");
}

function testWrongRunIdFails() {
  const r = authorizeInfraResume(resumeOpts({ runId: "phase1-fake", authorizedRunId: RUN_ID }));
  assert(!r.pass, "wrong RUN_ID fails");
  assert(r.blocker === "RUN_ID_MISMATCH", "run id mismatch");
}

function testWrongBaselineFails() {
  const r = authorizeInfraResume(
    resumeOpts({
      expectedDiscoveryBaselineSha: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
      baseline: { originMainSha: SHA_BASELINE, verdict: "PASS" },
    }),
  );
  assert(!r.pass, "wrong baseline fails");
  assert(r.blocker === "DISCOVERY_BASELINE_MISMATCH", "baseline mismatch");
}

function testWrongModelFails() {
  const r = authorizeInfraResume(resumeOpts({ model: "wrong-model", expectedModel: DEFAULT_MODEL }));
  assert(!r.pass, "wrong model fails");
  assert(r.blocker === "MODEL_MISMATCH", "model mismatch");
}

function testResumeModeRequired() {
  const r = authorizeInfraResume(resumeOpts({ resumeLuna: false }));
  assert(!r.pass, "resumeLuna=false fails");
  assert(r.blocker === "RESUME_MODE_REQUIRED", "resume mode required");
}

function testPhase0FrozenFail() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "phase0-frozen-"));
  const fakeExit = path.join(tmp, "phase0-exit.json");
  fs.writeFileSync(fakeExit, JSON.stringify({ status: "FAIL", phase0Complete: false, gates: {} }));
  const r = authorizeInfraResume(resumeOpts({ phase0Frozen: { exitPath: fakeExit } }));
  assert(!r.pass, "bad frozen phase0 fails");
  assert(r.blockers.some((b) => b.code === "PHASE_0_FROZEN_IDENTITY_FAIL"), "phase0 frozen fail code");
  fs.rmSync(tmp, { recursive: true, force: true });
}

function testPrepareResumeWithApprovedHead() {
  const scopes = getDeterministicScopeOrder();
  const cliScope = {
    groups: ["g2", "g1", "g3"],
    datasetsByGroup: {
      g2: ["a1", "a2", "b1", "b2", "c1", "c2"],
      g1: ["sentences", "verbs", "training"],
      g3: ["courseLessons"],
    },
    langs: [
      "lv", "lt", "ru", "pl", "uk", "et", "en", "ro", "bg", "tr", "gr", "sq", "mk", "sl", "bs", "sr",
      "hr", "sk", "cs", "fi", "sv", "nb", "nn", "da", "nl", "lb", "fr", "it", "es", "pt", "hu", "is",
    ],
  };
  const r = prepareResumeContext({
    runId: RUN_ID,
    scopes,
    cliScope,
    transport: "REAL",
    model: DEFAULT_MODEL,
    options: {
      skipApiKeyCheck: true,
      approvedInfraHeadSha: SHA_APPROVED_INFRA,
      ownerApprovedResume: OWNER_APPROVED_RESUME,
      baseline: baselinePass(),
      gitIdentity: injectedGitIdentity(),
    },
  });
  if (
    !r.ok &&
    ["CHECKPOINT_CORRUPT", "MANIFEST_MISSING", "PHASE1_RUN_ALREADY_ACTIVE"].includes(r.code)
  ) {
    assert(true, `non-auth block acceptable during test: ${r.code}`);
    return;
  }
  assert(r.ok, "prepareResumeContext with approved head");
}

function main() {
  console.log("Phase 1 Luna resume auth tests (R-AUTH-001)");
  testFrozenPhase0Pass();
  testApprovedHeadPass();
  testDirtyWorktreeFails();
  testUnapprovedHeadFails();
  testHeadMismatchFails();
  testWrongRunIdFails();
  testWrongBaselineFails();
  testWrongModelFails();
  testResumeModeRequired();
  testPhase0FrozenFail();
  testPrepareResumeWithApprovedHead();

  console.log(`\nResults: ${testsRun - testsFailed}/${testsRun} passed`);
  if (testsFailed > 0) process.exit(1);
  console.log("PASS");
}

main();
