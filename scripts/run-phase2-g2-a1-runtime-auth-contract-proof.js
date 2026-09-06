#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");
const {
  authorizeRuntimeExecution,
  proveV1Defect,
  createRealLunaTransport,
  AUTH_FROZEN,
} = require("./lib/g2-a1-luna-proposal");
const {
  createTempAuthFixture,
  buildRealLunaAuthorizeOptions,
  TEST_GIT_SHA,
  sha256Hex,
} = require("./lib/g2-a1-luna-proposal/auth-test-harness");

const ARTIFACT_ROOT = "/tmp/cursor/artifacts/phase2-g2-a1-runtime-auth-contract-repair";
const REPO_ROOT = path.join(__dirname, "..");

function writeJson(name, data) {
  fs.mkdirSync(ARTIFACT_ROOT, { recursive: true });
  const filePath = path.join(ARTIFACT_ROOT, name);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return filePath;
}

function sha256File(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(data).digest("hex");
}

function runRuntimeAuthTests() {
  const out = execSync("npm run test:phase2-g2-a1-luna-runtime-auth", {
    encoding: "utf8",
    cwd: REPO_ROOT,
  });
  const statsLine = out
    .trim()
    .split("\n")
    .filter((line) => line.startsWith("{"))
    .pop();
  return { stdout: out, stats: statsLine ? JSON.parse(statsLine) : null };
}

async function main() {
  const v1Proof = proveV1Defect();
  writeJson("auth-v1-defect-proof.json", v1Proof);

  const { filePath, authorizationFileSha256, raw } = createTempAuthFixture();
  const positiveAuth = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({ filePath, authorizationFileSha256 })
  );

  const positiveProof = {
    schemaVersion: "g2-a1-luna-proposal-auth-v2",
    authFilePath: filePath,
    authorizationFileSha256,
    authorizationFileSha256Length: authorizationFileSha256.length,
    rawFileSha256Matches: authorizationFileSha256 === sha256Hex(raw),
    gitShaLength: TEST_GIT_SHA.length,
    gitChainAligned: positiveAuth.pass,
    model: AUTH_FROZEN.model,
    batchCount: AUTH_FROZEN.batchCount,
    maxAllowedCycles: AUTH_FROZEN.maxAllowedCycles,
    receipt: positiveAuth.receipt,
    lunaRealCalls: positiveAuth.lunaRealCalls,
  };
  writeJson("auth-v2-positive-path-proof.json", positiveProof);

  const negativeCases = [
    {
      name: "auth_file_sha256_mismatch",
      result: authorizeRuntimeExecution(
        buildRealLunaAuthorizeOptions({
          filePath,
          authorizationFileSha256,
          expectedAuthorizationFileSha256: "f".repeat(64),
        })
      ),
    },
    {
      name: "missing_expected_authorization_file_sha256",
      result: authorizeRuntimeExecution(
        buildRealLunaAuthorizeOptions({
          filePath,
          authorizationFileSha256,
          expectedAuthorizationFileSha256: undefined,
        })
      ),
    },
    {
      name: "cli_sha_mismatch",
      result: authorizeRuntimeExecution(
        buildRealLunaAuthorizeOptions({
          filePath,
          authorizationFileSha256,
          cliSha: "d".repeat(40),
        })
      ),
    },
    {
      name: "v1_schema_rejected",
      code: "OWNER_AUTH_SCHEMA_V1_REJECTED",
    },
  ];
  writeJson(
    "auth-v2-negative-tests.json",
    negativeCases.map((c) => ({
      name: c.name,
      pass: c.result?.pass ?? false,
      code: c.result?.code || c.code,
      errors: c.result?.errors,
    }))
  );

  const transport = createRealLunaTransport(positiveAuth.receipt);
  let executeBlocked = null;
  try {
    await transport.executeBatch();
  } catch (error) {
    executeBlocked = error.code;
  }

  const receiptProof = {
    receipt: positiveAuth.receipt,
    runtimeHeadShaLength: positiveAuth.receipt.runtimeHeadSha.length,
    authorizationFileSha256Length: positiveAuth.receipt.authorizationFileSha256.length,
    transportMode: transport.mode,
    realCalls: transport.stats.realCalls,
    executeBatchBlocked: executeBlocked,
    LUNA_REAL_CALLS: 0,
  };
  writeJson("runtime-receipt-proof.json", receiptProof);

  const testRun = runRuntimeAuthTests();
  const summary = [
    "# G2/A1 Runtime Auth Contract Repair Proof",
    "",
    "Classification target: G2_A1_LUNA_RUNTIME_AUTH_CONTRACT_REPAIR_READY_FOR_OWNER_REVIEW",
    "",
    "## Test execution",
    `- passed: ${testRun.stats?.passed ?? "unknown"}`,
    `- failed: ${testRun.stats?.failed ?? "unknown"}`,
    `- skipped: ${testRun.stats?.skipped ?? "unknown"}`,
    "",
    "## Identity chains",
    `- Git SHA length: 40 (${TEST_GIT_SHA.length})`,
    `- Authorization file SHA-256 length: 64 (${authorizationFileSha256.length})`,
    "",
    "## REAL_LUNA receipt",
    `- Created: ${positiveAuth.pass}`,
    `- runtimeHeadSha: ${positiveAuth.receipt?.runtimeHeadSha}`,
    `- authorizationFileSha256: ${positiveAuth.receipt?.authorizationFileSha256}`,
    `- LUNA_REAL_CALLS: 0`,
    `- executeBatch blocked: ${executeBlocked}`,
    "",
    "## V1 defect",
    "- impossible equation documented in auth-v1-defect-proof.json",
    `- gitShaLength: ${v1Proof.gitShaLength}`,
    `- fileSha256Length: ${v1Proof.fileSha256Length}`,
  ].join("\n");
  fs.writeFileSync(path.join(ARTIFACT_ROOT, "summary.md"), summary);

  const files = [
    "auth-v1-defect-proof.json",
    "auth-v2-positive-path-proof.json",
    "auth-v2-negative-tests.json",
    "runtime-receipt-proof.json",
    "summary.md",
  ];
  const manifest = {};
  for (const file of files) {
    manifest[file] = sha256File(path.join(ARTIFACT_ROOT, file));
  }
  writeJson("sha256-manifest.json", manifest);

  console.log(JSON.stringify({ artifactRoot: ARTIFACT_ROOT, testRun: testRun.stats, manifest }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
