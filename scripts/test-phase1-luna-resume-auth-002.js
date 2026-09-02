#!/usr/bin/env node
"use strict";

const {
  OWNER_APPROVED_RESUME,
  buildResumeAuthOptionsFromCli,
} = require("./lib/phase1-luna-resume-authorization");
const { authorizeInfraResume } = require("./lib/phase1-luna-resume-auth");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

const SHA_APPROVED = OWNER_APPROVED_RESUME.infraHeadSha;
const RUN_ID = OWNER_APPROVED_RESUME.resumeRunId;
const SHA_BASELINE = OWNER_APPROVED_RESUME.discoveryBaselineSha;

function gitIdentity(overrides = {}) {
  return {
    headSha: SHA_APPROVED,
    originMainSha: SHA_BASELINE,
    workingTreeClean: true,
    productionDiffClean: true,
    deDiffClean: true,
    ...overrides,
  };
}

function authFromCli(cli, overrides = {}) {
  return authorizeInfraResume({
    ...buildResumeAuthOptionsFromCli(cli, overrides),
    skipApiKeyCheck: true,
    gitIdentity: gitIdentity(overrides.gitIdentity),
    baseline: { originMainSha: SHA_BASELINE, verdict: "PASS" },
    phase0Frozen: overrides.phase0Frozen,
  });
}

function testApprovedCliPass() {
  const r = authFromCli({
    resumeRunId: RUN_ID,
    approvedInfraHeadSha: SHA_APPROVED,
    model: DEFAULT_MODEL,
  });
  assert(r.pass, "approved CLI wiring passes");
  assert(r.realCalls === 0, "no real calls on auth pass");
}

function testWrongRunIdFails() {
  const r = authFromCli({
    resumeRunId: "wrong-run-id",
    approvedInfraHeadSha: SHA_APPROVED,
    model: DEFAULT_MODEL,
  });
  assert(!r.pass, "wrong run id fails");
  assert(r.blocker === "RUN_ID_MISMATCH", "RUN_ID_MISMATCH");
}

function testWrongHeadFails() {
  const r = authFromCli(
    {
      resumeRunId: RUN_ID,
      approvedInfraHeadSha: SHA_APPROVED,
      model: DEFAULT_MODEL,
    },
    { gitIdentity: { headSha: SHA_BASELINE } },
  );
  assert(!r.pass, "wrong head fails");
  assert(
    r.blockers.some((b) => b.code === "INFRA_RESUME_HEAD_MISMATCH"),
    "INFRA_RESUME_HEAD_MISMATCH",
  );
}

function testMissingApprovedHeadFails() {
  const r = authFromCli({ resumeRunId: RUN_ID, approvedInfraHeadSha: null, model: DEFAULT_MODEL });
  assert(!r.pass, "missing approved head fails");
}

function testSelfReferentialBaselineBlocked() {
  const opts = buildResumeAuthOptionsFromCli({
    resumeRunId: RUN_ID,
    approvedInfraHeadSha: SHA_APPROVED,
    model: DEFAULT_MODEL,
  });
  assert(opts.authorizedRunId === OWNER_APPROVED_RESUME.resumeRunId, "authorized run from OWNER constant");
  assert(
    opts.expectedDiscoveryBaselineSha === OWNER_APPROVED_RESUME.discoveryBaselineSha,
    "expected baseline from OWNER constant",
  );
  assert(opts.runId === RUN_ID, "runtime run id from CLI");
  assert(opts.authorizedRunId === opts.runId, "matching CLI run id");
}

function main() {
  testApprovedCliPass();
  testWrongRunIdFails();
  testWrongHeadFails();
  testMissingApprovedHeadFails();
  testSelfReferentialBaselineBlocked();
  console.log(`R-AUTH-002: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main();
