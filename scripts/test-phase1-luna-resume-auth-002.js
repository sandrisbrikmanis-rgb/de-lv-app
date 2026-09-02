#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const {
  OWNER_APPROVED_RESUME,
  HISTORICAL_OWNER_APPROVED_HEAD_SHA,
  buildResumeAuthOptionsFromCli,
} = require("./lib/phase1-luna-resume-authorization");
const { authorizeInfraResume } = require("./lib/phase1-luna-resume-auth");
const { buildOwnerAuthorizationDocument } = require("./lib/phase1-luna-owner-authorization-file");
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

const SHA_APPROVED = HISTORICAL_OWNER_APPROVED_HEAD_SHA;
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

function loadManifest() {
  const manifestPath = path.join(
    __dirname,
    "..",
    "reports",
    "temp",
    "phase1-luna-runs",
    RUN_ID,
    "run-manifest.json",
  );
  if (!fs.existsSync(manifestPath)) return null;
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

function writeOwnerAuthFile(manifest, executionSha = SHA_APPROVED) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "owner-auth-r002-"));
  const doc = buildOwnerAuthorizationDocument({
    approvedExecutionSha: executionSha,
    runId: manifest.runId,
    discoveryBaselineSha: manifest.discoveryBaselineSha,
    model: manifest.model,
    scopeHash: manifest.scopeHash,
    objectIdsHash: manifest.objectIdsHash,
    issuedAt: "2026-09-02T12:00:00.000Z",
  });
  const filePath = path.join(dir, "owner-authorization.json");
  fs.writeFileSync(filePath, `${JSON.stringify(doc, null, 2)}\n`);
  return filePath;
}

function authFromCli(cli, overrides = {}) {
  const manifest = loadManifest();
  const { getDeterministicScopeOrder } = require("./lib/content-discovery/phase1-applicability");
  const ownerAuthorizationFile =
    cli.ownerAuthorizationFile ||
    (manifest ? writeOwnerAuthFile(manifest, cli.approvedInfraHeadSha || SHA_APPROVED) : null);
  return authorizeInfraResume({
    ...buildResumeAuthOptionsFromCli({ ...cli, ownerAuthorizationFile }, overrides),
    skipApiKeyCheck: true,
    gitIdentity: gitIdentity(overrides.gitIdentity),
    baseline: { originMainSha: SHA_BASELINE, verdict: "PASS" },
    phase0Frozen: overrides.phase0Frozen,
    manifest,
    requireManifestIdentity: Boolean(manifest),
    runId: cli.resumeRunId || RUN_ID,
    cliScope: manifest?.cliScope,
    scopes: getDeterministicScopeOrder(),
    transport: "REAL",
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
  assert(r.blockers.some((b) => b.code === "RUN_ID_MISMATCH"), "RUN_ID_MISMATCH");
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

function testExternalAuthRequired() {
  const opts = buildResumeAuthOptionsFromCli({
    resumeRunId: RUN_ID,
    approvedInfraHeadSha: SHA_APPROVED,
    ownerAuthorizationFile: "/tmp/example-owner-auth.json",
    model: DEFAULT_MODEL,
  });
  assert(opts.ownerAuthorizationFile === "/tmp/example-owner-auth.json", "owner auth file from CLI");
  assert(opts.runId === RUN_ID, "runtime run id from CLI");
  assert(!("ownerApprovedInfraHeadSha" in opts), "no committed owner SHA in runtime opts");
  assert(
    HISTORICAL_OWNER_APPROVED_HEAD_SHA === OWNER_APPROVED_RESUME.infraHeadSha,
    "historical fixture SHA preserved for docs/tests only",
  );
}

function main() {
  testApprovedCliPass();
  testWrongRunIdFails();
  testWrongHeadFails();
  testMissingApprovedHeadFails();
  testExternalAuthRequired();
  console.log(`R-AUTH-002: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main();
