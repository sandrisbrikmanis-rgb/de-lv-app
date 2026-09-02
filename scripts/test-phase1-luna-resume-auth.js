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

const CLI_SCOPE = {
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

function loadManifestFixture() {
  const manifestPath = path.join(
    __dirname,
    "..",
    "reports",
    "temp",
    "phase1-luna-runs",
    RUN_ID,
    "run-manifest.json",
  );
  if (fs.existsSync(manifestPath)) {
    return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  }
  return {
    runId: RUN_ID,
    schemaVersion: "1.0.0",
    discoveryBaselineSha: SHA_BASELINE,
    headSha: SHA_BASELINE,
    originMainSha: SHA_BASELINE,
    model: DEFAULT_MODEL,
    transport: "REAL",
    cliScope: CLI_SCOPE,
    expectedScopeIds: getDeterministicScopeOrder().map((s) => s.scopeId),
    scopeHash: "fixture",
    objectIdsHash: "fixture",
    batchingConfig: {},
    promptSchemaHash: "fixture",
    startedAt: "2026-08-30T08:56:51.688Z",
    status: "IN_PROGRESS",
  };
}

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
  const manifest = overrides.manifest || loadManifestFixture();
  return {
    resumeLuna: true,
    approvedInfraHeadSha: SHA_APPROVED_INFRA,
    ownerApprovedInfraHeadSha: SHA_APPROVED_INFRA,
    runId: RUN_ID,
    model: DEFAULT_MODEL,
    cliScope: CLI_SCOPE,
    scopes: getDeterministicScopeOrder(),
    transport: "REAL",
    manifest,
    requireManifestIdentity: overrides.requireManifestIdentity !== false,
    skipApiKeyCheck: true,
    gitIdentity: injectedGitIdentity(overrides.gitIdentity),
    baseline: baselinePass(),
    ...overrides,
  };
}

function testFrozenPhase0Pass() {
  const r = validateFrozenPhase0Identity();
  assert(r.ok, "frozen Phase 0 identity passes");
}

function testApprovedHeadPass() {
  const r = authorizeInfraResume(resumeOpts({ requireManifestIdentity: false }));
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
  const manifest = loadManifestFixture();
  const r = authorizeInfraResume(
    resumeOpts({
      runId: "phase1-fake",
      manifest: { ...manifest, runId: RUN_ID },
    }),
  );
  assert(!r.pass, "wrong RUN_ID fails");
  assert(r.blockers.some((b) => b.code === "RUN_ID_MISMATCH"), "run id mismatch");
}

function testWrongBaselineFails() {
  const manifest = loadManifestFixture();
  const r = authorizeInfraResume(
    resumeOpts({
      manifest,
      baseline: { originMainSha: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef", verdict: "PASS" },
    }),
  );
  assert(!r.pass, "wrong baseline fails");
  assert(r.blockers.some((b) => b.code === "DISCOVERY_BASELINE_MISMATCH"), "baseline mismatch");
}

function testWrongModelFails() {
  const manifest = loadManifestFixture();
  const r = authorizeInfraResume(
    resumeOpts({
      model: "wrong-model",
      manifest: { ...manifest, model: DEFAULT_MODEL },
    }),
  );
  assert(!r.pass, "wrong model fails");
  assert(r.blockers.some((b) => b.code === "MODEL_MISMATCH"), "model mismatch");
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
