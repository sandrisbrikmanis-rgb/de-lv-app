#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const {
  HISTORICAL_OWNER_APPROVED_HEAD_SHA,
  TEST_FIXTURE_RESUME_IDENTITY,
  buildResumeAuthOptionsFromCli,
} = require("./lib/phase1-luna-resume-authorization");
const { authorizeInfraResume } = require("./lib/phase1-luna-resume-auth");
const {
  buildOwnerAuthorizationDocument,
  OWNER_AUTH_SCHEMA_VERSION,
  OWNER_AUTH_PURPOSE,
} = require("./lib/phase1-luna-owner-authorization-file");
const { getDeterministicScopeOrder } = require("./lib/content-discovery/phase1-applicability");
const { DEFAULT_MODEL } = require("./lib/luna-phase1-openai");
const { ROOT } = require("./lib/audit-common");

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

const RUN_ID = TEST_FIXTURE_RESUME_IDENTITY.resumeRunId;
const SHA_BASELINE = TEST_FIXTURE_RESUME_IDENTITY.discoveryBaselineSha;
const SHA_EXEC = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const DESCENDANT_HEAD = "da16e3028b950ca5ef248bd57d52526b918e52fb";

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

function loadFixtureManifest() {
  const manifestPath = path.join(
    ROOT,
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
    scopeHash: "fixture-scope-hash",
    objectIdsHash: "fixture-object-hash",
    objectCount: 1,
    batchingConfig: {},
    promptSchemaHash: "fixture-prompt-hash",
    startedAt: "2026-08-30T08:56:51.688Z",
    status: "IN_PROGRESS",
  };
}

function gitIdentity(overrides = {}) {
  return {
    headSha: SHA_EXEC,
    originMainSha: SHA_BASELINE,
    workingTreeClean: true,
    productionDiffClean: true,
    deDiffClean: true,
    ...overrides,
  };
}

function allScopes() {
  return getDeterministicScopeOrder();
}

function writeExternalAuthFile(manifest, overrides = {}, dir = null) {
  const targetDir = dir || fs.mkdtempSync(path.join(os.tmpdir(), "owner-auth-"));
  const doc = buildOwnerAuthorizationDocument({
    approvedExecutionSha: SHA_EXEC,
    runId: manifest.runId,
    discoveryBaselineSha: manifest.discoveryBaselineSha,
    model: manifest.model,
    scopeHash: manifest.scopeHash,
    objectIdsHash: manifest.objectIdsHash,
    issuedAt: "2026-09-02T12:00:00.000Z",
    ...overrides,
  });
  const filePath = path.join(targetDir, "owner-authorization.json");
  fs.writeFileSync(filePath, `${JSON.stringify(doc, null, 2)}\n`);
  return { filePath, dir: targetDir, doc };
}

function authOpts(overrides = {}) {
  const manifest = overrides.manifest || loadFixtureManifest();
  const authFile = overrides.ownerAuthorizationFile
    ? { filePath: overrides.ownerAuthorizationFile }
    : writeExternalAuthFile(manifest, overrides.authDocOverrides || {}, overrides.authDir);

  return {
    ...buildResumeAuthOptionsFromCli(
      {
        resumeRunId: RUN_ID,
        approvedInfraHeadSha: overrides.approvedInfraHeadSha ?? SHA_EXEC,
        ownerAuthorizationFile: overrides.ownerAuthorizationFile ?? authFile.filePath,
        model: DEFAULT_MODEL,
      },
      overrides.authOverrides || {},
    ),
    skipApiKeyCheck: true,
    gitIdentity: gitIdentity(overrides.gitIdentity),
    baseline: overrides.baseline || { originMainSha: SHA_BASELINE, verdict: "PASS" },
    manifest,
    requireManifestIdentity: true,
    runId: RUN_ID,
    cliScope: overrides.cliScope || CLI_SCOPE,
    scopes: overrides.scopes || allScopes(),
    transport: "REAL",
    phase0Frozen: overrides.phase0Frozen,
    ...overrides.extra,
  };
}

function test1ExternalAuthExactHeadPass() {
  const r = authorizeInfraResume(authOpts());
  assert(r.pass, "1: external auth file + exact HEAD → PASS");
  assert(r.realCalls === 0, "1: realCalls 0");
}

function test2FileNotSpecifiedFail() {
  const manifest = loadFixtureManifest();
  const r = authorizeInfraResume({
    ...buildResumeAuthOptionsFromCli(
      {
        resumeRunId: RUN_ID,
        approvedInfraHeadSha: SHA_EXEC,
        ownerAuthorizationFile: null,
        model: DEFAULT_MODEL,
      },
      {},
    ),
    skipApiKeyCheck: true,
    gitIdentity: gitIdentity(),
    baseline: { originMainSha: SHA_BASELINE, verdict: "PASS" },
    manifest,
    requireManifestIdentity: true,
    runId: RUN_ID,
    cliScope: CLI_SCOPE,
    scopes: allScopes(),
    transport: "REAL",
  });
  assert(!r.pass, "2: owner authorization file not specified → FAIL");
  assert(r.blockers.some((b) => b.code === "OWNER_AUTHORIZATION_FILE_REQUIRED"), "2: FILE_REQUIRED");
}

function test3FileMissingFail() {
  const missing = path.join(os.tmpdir(), `missing-owner-auth-${Date.now()}.json`);
  const r = authorizeInfraResume(authOpts({ ownerAuthorizationFile: missing }));
  assert(!r.pass, "3: owner authorization file missing → FAIL");
  assert(r.blockers.some((b) => b.code === "OWNER_AUTHORIZATION_FILE_MISSING"), "3: FILE_MISSING");
}

function test4FileInsideRepoFail() {
  const manifest = loadFixtureManifest();
  const inRepoDir = path.join(ROOT, "reports", "temp");
  fs.mkdirSync(inRepoDir, { recursive: true });
  const { filePath } = writeExternalAuthFile(manifest, {}, inRepoDir);
  const r = authorizeInfraResume(authOpts({ ownerAuthorizationFile: filePath }));
  assert(!r.pass, "4: authorization file inside repo → FAIL");
  assert(r.blockers.some((b) => b.code === "OWNER_AUTHORIZATION_FILE_IN_REPO"), "4: IN_REPO");
}

function test5SymlinkFail() {
  const manifest = loadFixtureManifest();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "owner-auth-symlink-"));
  const real = writeExternalAuthFile(manifest, {}, dir);
  const linkPath = path.join(dir, "owner-auth-link.json");
  fs.symlinkSync(real.filePath, linkPath);
  const r = authorizeInfraResume(authOpts({ ownerAuthorizationFile: linkPath }));
  assert(!r.pass, "5: symlink authorization file → FAIL");
  assert(r.blockers.some((b) => b.code === "OWNER_AUTHORIZATION_FILE_SYMLINK"), "5: SYMLINK");
}

function test6CliShaMismatchFail() {
  const r = authorizeInfraResume(authOpts({ approvedInfraHeadSha: DESCENDANT_HEAD }));
  assert(!r.pass, "6: CLI SHA != authorization SHA → FAIL");
  assert(
    r.blockers.some((b) => b.code === "INFRA_RESUME_HEAD_NOT_AUTHORIZED"),
    "6: CLI/auth SHA mismatch",
  );
}

function test7HeadMismatchFail() {
  const r = authorizeInfraResume(authOpts({ gitIdentity: { headSha: DESCENDANT_HEAD } }));
  assert(!r.pass, "7: HEAD != authorization SHA → FAIL");
  assert(r.blockers.some((b) => b.code === "INFRA_RESUME_HEAD_MISMATCH"), "7: HEAD_MISMATCH");
}

function test8WrongRunIdFail() {
  const manifest = loadFixtureManifest();
  const { filePath } = writeExternalAuthFile(manifest, { runId: "phase1-wrong-run-id" });
  const r = authorizeInfraResume(authOpts({ ownerAuthorizationFile: filePath, manifest }));
  assert(!r.pass, "8: wrong RUN_ID in authorization file → FAIL");
  assert(r.blockers.some((b) => b.code === "RUN_ID_MISMATCH"), "8: RUN_ID_MISMATCH");
}

function test9WrongBaselineFail() {
  const manifest = loadFixtureManifest();
  const { filePath } = writeExternalAuthFile(manifest, {
    discoveryBaselineSha: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
  });
  const r = authorizeInfraResume(authOpts({ ownerAuthorizationFile: filePath, manifest }));
  assert(!r.pass, "9: wrong baseline in authorization file → FAIL");
  assert(r.blockers.some((b) => b.code === "DISCOVERY_BASELINE_MISMATCH"), "9: BASELINE_MISMATCH");
}

function test10WrongModelFail() {
  const manifest = loadFixtureManifest();
  const { filePath } = writeExternalAuthFile(manifest, { model: "wrong-model" });
  const r = authorizeInfraResume(authOpts({ ownerAuthorizationFile: filePath, manifest }));
  assert(!r.pass, "10: wrong model in authorization file → FAIL");
  assert(r.blockers.some((b) => b.code === "MODEL_MISMATCH"), "10: MODEL_MISMATCH");
}

function test11WrongScopeHashFail() {
  const manifest = loadFixtureManifest();
  const { filePath } = writeExternalAuthFile(manifest, { scopeHash: "deadbeef", objectIdsHash: "deadbeef" });
  const r = authorizeInfraResume(authOpts({ ownerAuthorizationFile: filePath, manifest }));
  assert(!r.pass, "11: wrong scopeHash/objectIdsHash → FAIL");
  assert(
    r.blockers.some((b) => b.code === "SCOPE_HASH_MISMATCH" || b.code === "OBJECT_IDS_HASH_MISMATCH"),
    "11: hash mismatch",
  );
}

function test12DirtyReportsFail() {
  const r = authorizeInfraResume(authOpts({ gitIdentity: { workingTreeClean: false } }));
  assert(!r.pass, "12: dirty reports-only tree → FAIL");
  assert(r.blockers.some((b) => b.code === "WORKING_TREE_DIRTY"), "12: WORKING_TREE_DIRTY");
}

function test13DescendantHeadFail() {
  const r = authorizeInfraResume(authOpts({ gitIdentity: { headSha: DESCENDANT_HEAD } }));
  assert(!r.pass, "13: descendant HEAD → FAIL");
  assert(r.blockers.some((b) => b.code === "INFRA_RESUME_HEAD_MISMATCH"), "13: descendant blocked");
}

function test14NoRealCalls() {
  const r = authorizeInfraResume(authOpts());
  assert(r.realCalls === 0, "14: no real Luna API calls");
}

function testHistoricalShaNotRuntimeAuthority() {
  assert(
    HISTORICAL_OWNER_APPROVED_HEAD_SHA === "282beac865216ba3ba03132769db25b5e87c55a9",
    "historical SHA retained for documentation only",
  );
  const opts = buildResumeAuthOptionsFromCli({
    resumeRunId: RUN_ID,
    approvedInfraHeadSha: SHA_EXEC,
    ownerAuthorizationFile: "/tmp/example.json",
    model: DEFAULT_MODEL,
  });
  assert(!("ownerApprovedInfraHeadSha" in opts), "no committed ownerApprovedInfraHeadSha in CLI opts");
}

function testSchemaConstants() {
  assert(OWNER_AUTH_SCHEMA_VERSION === "1.0.0", "schema version constant");
  assert(OWNER_AUTH_PURPOSE === "PHASE1_LUNA_RESUME", "authorization purpose constant");
}

function main() {
  test1ExternalAuthExactHeadPass();
  test2FileNotSpecifiedFail();
  test3FileMissingFail();
  test4FileInsideRepoFail();
  test5SymlinkFail();
  test6CliShaMismatchFail();
  test7HeadMismatchFail();
  test8WrongRunIdFail();
  test9WrongBaselineFail();
  test10WrongModelFail();
  test11WrongScopeHashFail();
  test12DirtyReportsFail();
  test13DescendantHeadFail();
  test14NoRealCalls();
  testHistoricalShaNotRuntimeAuthority();
  testSchemaConstants();

  console.log(`R-AUTH-004: ${testsRun - testsFailed}/${testsRun} PASS`);
  if (testsFailed) process.exit(1);
}

main();
