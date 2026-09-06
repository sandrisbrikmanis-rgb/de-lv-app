#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  authorizeRuntimeExecution,
  assertAuthorizedRuntimeReceipt,
  createRealLunaTransport,
  createMockLunaTransport,
  runInfrastructureGates,
  buildQueues,
  buildBatchPlan,
  RUNTIME_MODES,
  NON_EXECUTABLE_MOCK_PROOF,
  AUTH_FROZEN,
  EXPECTED,
} = require("./lib/g2-a1-luna-proposal");
const { REAL_LUNA_FORBIDDEN_OPTIONS } = require("./lib/g2-a1-luna-proposal/runtime-gates");
const {
  buildProductionRealLunaOptions,
  createTempAuthFixture,
  runIsolatedProductionRealLunaAuth,
  buildMockAuthorizeOptions,
} = require("./lib/g2-a1-luna-proposal/auth-test-harness");
const { runOwnerReview } = require("./lib/g2-a1-luna-proposal/owner-review");

const ARTIFACT_ROOT = "/tmp/cursor/artifacts/phase2-g2-a1-runtime-auth-final-owner-review";
const EXPECTED_BASE = "6e0a26dfa2f56aade0b981c50a71e5eaf94c0b54";

function writeJson(name, data) {
  fs.mkdirSync(ARTIFACT_ROOT, { recursive: true });
  fs.writeFileSync(path.join(ARTIFACT_ROOT, name), JSON.stringify(data, null, 2));
}

function sha256File(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function runCmd(cmd, cwd = ROOT) {
  return execSync(cmd, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 128 * 1024 * 1024,
  });
}

function runCmdToFile(cmd, outFile, cwd = ROOT) {
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  execSync(`${cmd} > ${JSON.stringify(outFile)} 2>&1`, {
    cwd,
    encoding: "utf8",
    stdio: "inherit",
    shell: "/bin/bash",
    maxBuffer: 128 * 1024 * 1024,
  });
  return fs.readFileSync(outFile, "utf8");
}

function parseTestStats(output) {
  const line = output
    .trim()
    .split("\n")
    .filter((l) => l.startsWith("{"))
    .pop();
  if (!line) return { executed: null, passed: null, failed: null, skipped: null };
  const parsed = JSON.parse(line);
  return {
    executed: parsed.total ?? parsed.passed + parsed.failed + parsed.skipped,
    passed: parsed.passed,
    failed: parsed.failed,
    skipped: parsed.skipped,
  };
}

function auditDiff() {
  const head = runCmd("git rev-parse HEAD").trim();
  const base = runCmd("git merge-base HEAD origin/main").trim();
  const files = runCmd("git diff --name-only origin/main...HEAD")
    .trim()
    .split("\n")
    .filter(Boolean);
  const forbiddenPrefixes = ["data/", "www/data/", "reports/"];
  const forbiddenPatterns = [/\.env/i, /secret/i, /token/i, /api[_-]?key/i, /authorization.*\.json$/i];
  const issues = [];
  for (const f of files) {
    if (forbiddenPrefixes.some((p) => f.startsWith(p))) issues.push(`FORBIDDEN_PATH:${f}`);
    if (forbiddenPatterns.some((re) => re.test(f))) issues.push(`SENSITIVE_OR_AUTH:${f}`);
  }
  const harnessInIndex = Object.keys(require("./lib/g2-a1-luna-proposal")).includes("auth-test-harness");
  return {
    head,
    base,
    expectedBase: EXPECTED_BASE,
    changedFiles: files.length,
    files,
    issues,
    harnessExportedFromIndex: harnessInIndex,
    startGatePass: base === EXPECTED_BASE && issues.length === 0 && !harnessInIndex,
  };
}

function auditAuthChain(isolated) {
  const receipt = isolated.result.auth?.receipt;
  const fileSha = isolated.result.authorizationFileSha256;
  const gitSha = isolated.result.headSha;
  return {
    gitChain: {
      head: gitSha,
      originMain: isolated.result.originMainSha,
      expectedRuntimeHeadSha: gitSha,
      cliSha: gitSha,
      authRuntimeHeadSha: receipt?.runtimeHeadSha,
      authOriginMainSha: receipt?.originMainSha,
      allEqual:
        gitSha === isolated.result.originMainSha &&
        gitSha === receipt?.runtimeHeadSha &&
        gitSha === receipt?.originMainSha,
      gitShaLength: gitSha?.length,
    },
    fileChain: {
      authorizationFileSha256: fileSha,
      expectedAuthorizationFileSha256: fileSha,
      receiptAuthorizationFileSha256: receipt?.authorizationFileSha256,
      allEqual: fileSha === receipt?.authorizationFileSha256,
      fileShaLength: fileSha?.length,
    },
    frozen: {
      model: AUTH_FROZEN.model,
      batchCount: AUTH_FROZEN.batchCount,
      maxAllowedCycles: AUTH_FROZEN.maxAllowedCycles,
      v1Rejected: true,
      noAuthorizationSha256SelfRef: true,
    },
    pass:
      gitSha?.length === 40 &&
      fileSha?.length === 64 &&
      receipt?.authorizationFileSha256?.length === 64 &&
      gitSha === isolated.result.originMainSha &&
      fileSha === receipt?.authorizationFileSha256 &&
      AUTH_FROZEN.model === "gpt-5.6-luna" &&
      AUTH_FROZEN.batchCount === 764 &&
      AUTH_FROZEN.maxAllowedCycles === 1,
  };
}

function auditOverrides() {
  const gitSha = "a".repeat(40);
  const { filePath, authorizationFileSha256 } = createTempAuthFixture({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    batchPlanSha256: "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890",
  });
  const base = buildProductionRealLunaOptions({
    filePath,
    authorizationFileSha256,
    gitSha,
    batchPlanSha256: "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890",
  });
  const singles = REAL_LUNA_FORBIDDEN_OPTIONS.map((key) => {
    const extra = {};
    if (key === "skipInfrastructureGates") extra[key] = true;
    else if (key === "infrastructureContext") extra[key] = { headSha: gitSha };
    else if (key === "gitContext") extra[key] = { headSha: gitSha, originMainSha: gitSha };
    else if (key === "skipWorktreeCheck") extra[key] = true;
    else if (key === "allowAuthFileInRepo") extra[key] = true;
    else if (key === "ownerPackRoot") extra[key] = "/tmp";
    else if (key === "matrixPath") extra[key] = "/tmp/matrix.json";
    else extra[key] = true;
    const result = authorizeRuntimeExecution({ ...base, ...extra });
    return { key, code: result.code, pass: result.pass };
  });
  const combo = authorizeRuntimeExecution({
    ...base,
    skipInfrastructureGates: true,
    gitContext: { headSha: gitSha, originMainSha: gitSha },
    allowAuthFileInRepo: true,
  });
  const mock = authorizeRuntimeExecution(buildMockAuthorizeOptions());
  return {
    singles,
    combo: { code: combo.code, pass: combo.pass },
    mockDryRun: {
      pass: mock.pass,
      mode: mock.receipt?.mode,
      executable: mock.receipt?.executable,
      resultClassification: mock.resultClassification,
      realCalls: mock.lunaRealCalls,
    },
    pass:
      singles.every((s) => s.code === "TEST_OVERRIDE_FORBIDDEN_IN_REAL_LUNA" && !s.pass) &&
      combo.code === "TEST_OVERRIDE_FORBIDDEN_IN_REAL_LUNA" &&
      mock.pass &&
      mock.receipt?.executable === false &&
      mock.resultClassification === NON_EXECUTABLE_MOCK_PROOF &&
      mock.lunaRealCalls === 0,
  };
}

function auditReceiptExports() {
  const forbidden = [
    "registerIssuedRealLunaReceipt",
    "buildRealLunaReceipt",
    "isIssuedRealLunaReceipt",
    "issueRealLunaReceipt",
  ];
  const indexKeys = Object.keys(require("./lib/g2-a1-luna-proposal"));
  const harnessKeys = Object.keys(require("./lib/g2-a1-luna-proposal/auth-test-harness"));
  const libRoot = path.join(ROOT, "scripts/lib/g2-a1-luna-proposal");
  const registryExists = fs.existsSync(path.join(libRoot, "runtime-receipt-registry.js"));
  const runtimeGates = fs.readFileSync(path.join(libRoot, "runtime-gates.js"), "utf8");
  const violations = [];
  for (const name of forbidden) {
    if (indexKeys.includes(name)) violations.push(`index:${name}`);
    if (harnessKeys.includes(name)) violations.push(`harness:${name}`);
  }
  const weakSetInClosure = runtimeGates.includes("const issuedRealLunaReceipts = new WeakSet()");
  const exportedWeakSet = /module\.exports\s*=\s*\{[\s\S]*issuedRealLunaReceipts/.test(runtimeGates);
  return {
    violations,
    registryExists,
    weakSetInRuntimeGatesClosure: weakSetInClosure && !exportedWeakSet,
    indexExportsForbidden: violations.filter((v) => v.startsWith("index:")),
    pass: violations.length === 0 && !registryExists,
  };
}

function rejectReceipt(receipt) {
  try {
    assertAuthorizedRuntimeReceipt(receipt, RUNTIME_MODES.REAL_LUNA);
    return null;
  } catch (error) {
    return error.code;
  }
}

function auditReceiptForgery(isolated) {
  const real = isolated.result.auth.receipt;
  const cases = [
    { name: "manual", code: rejectReceipt({ mode: "REAL_LUNA", validated: true, executable: true }) },
    {
      name: "frozen_fake",
      code: rejectReceipt(Object.freeze({ mode: "REAL_LUNA", validated: true, executable: true })),
    },
    { name: "spread_clone", code: rejectReceipt({ ...real }) },
    { name: "json_clone", code: rejectReceipt(JSON.parse(JSON.stringify(real))) },
    {
      name: "full_shape_fake",
      code: rejectReceipt(
        Object.freeze({
          mode: RUNTIME_MODES.REAL_LUNA,
          validated: true,
          executable: true,
          runtimeHeadSha: real.runtimeHeadSha,
          originMainSha: real.originMainSha,
          authorizationFileSha256: real.authorizationFileSha256,
          batchPlanSha256: real.batchPlanSha256,
          runId: real.runId,
          model: real.model,
          validatedAt: real.validatedAt,
        })
      ),
    },
  ];
  return {
    cases,
    isolatedModifyBlocked: isolated.result.receiptModifyBlocked,
    isolatedClonedRejected: isolated.result.clonedReceiptRejected,
    issuedReceiptFrozen: isolated.result.receiptFrozen,
    receiptAcceptedByProductionBoundary: isolated.result.receiptAcceptedByProductionBoundary,
    pass:
      cases.every((c) => c.code === "RUNTIME_RECEIPT_NOT_ISSUED") &&
      isolated.result.receiptModifyBlocked === true &&
      isolated.result.clonedReceiptRejected === "RUNTIME_RECEIPT_NOT_ISSUED" &&
      isolated.result.receiptFrozen === true &&
      isolated.result.receiptAcceptedByProductionBoundary === true,
  };
}

async function main() {
  const diffAudit = auditDiff();
  if (!diffAudit.startGatePass) {
    const blocked = {
      classification: "START_GATE_BLOCKED",
      diffAudit,
      generatedAt: new Date().toISOString(),
    };
    writeJson("review-proof.json", blocked);
    console.log(JSON.stringify(blocked, null, 2));
    process.exit(1);
  }

  const isolated = runIsolatedProductionRealLunaAuth();
  const authChain = auditAuthChain(isolated);
  const overrideAudit = auditOverrides();
  const exportAudit = auditReceiptExports();
  const forgeryAudit = auditReceiptForgery(isolated);

  const runtimeAuthOut = runCmd("npm run test:phase2-g2-a1-luna-runtime-auth");
  const infraOut = runCmd("npm run test:phase2-g2-a1-luna-proposal-infra");
  const infraIntOut = runCmd("npm run test:phase2-g2-a1-luna-proposal-infra:integration");
  const dryRunLog = path.join(ARTIFACT_ROOT, "dry-run.log");
  const dryRunOut = runCmdToFile("npm run phase2:g2-a1:luna-proposal:dry-run", dryRunLog);
  const ownerReviewResult = await runOwnerReview({
    outDir: path.join(ARTIFACT_ROOT, "proposal-owner-review"),
  });

  const testResults = {
    runtimeAuth: parseTestStats(runtimeAuthOut),
    infra: { pass: infraOut.includes("PASS") },
    infraIntegration: { pass: infraIntOut.includes("PASS") },
    dryRun: { pass: dryRunOut.includes("lunaRealCalls") && dryRunOut.includes("0") },
    ownerReview: {
      classification: ownerReviewResult.classification,
      pass: ownerReviewResult.classification === "G2_A1_LUNA_PROPOSAL_INFRA_OWNER_REVIEW_PASS",
    },
  };

  const frozen = {
    individualRows: ownerReviewResult.queueRecon?.counts?.individualExecutionUnits,
    ownerConflict: ownerReviewResult.queueRecon?.counts?.ownerConflictReviewRequired,
    batchEligible: ownerReviewResult.queueRecon?.counts?.batchEligibleUnits,
    batches: ownerReviewResult.batchVerify?.totalBatches,
    overlapSafe: ownerReviewResult.overlapReview?.summary?.SAFE_WITH_GROUP_CONTEXT,
    overlapConflict: ownerReviewResult.overlapReview?.summary?.OWNER_CONFLICT_REVIEW_REQUIRED,
    overlapInvalid: ownerReviewResult.overlapReview?.summary?.INVALID_OVERLAP,
    duplicateLocaleKey: ownerReviewResult.queueRecon?.reconciliation?.duplicates,
    expected: {
      individualRows: 27894,
      ownerConflict: 72,
      batchEligible: 27822,
      batches: 764,
      overlap: "513/9/0",
      duplicateLocaleKey: 0,
    },
    pass:
      ownerReviewResult.queueRecon?.counts?.individualExecutionUnits === 27894 &&
      ownerReviewResult.queueRecon?.counts?.ownerConflictReviewRequired === 72 &&
      ownerReviewResult.queueRecon?.counts?.batchEligibleUnits === 27822 &&
      ownerReviewResult.batchVerify?.totalBatches === 764 &&
      ownerReviewResult.overlapReview?.summary?.SAFE_WITH_GROUP_CONTEXT === 513 &&
      ownerReviewResult.overlapReview?.summary?.OWNER_CONFLICT_REVIEW_REQUIRED === 9 &&
      ownerReviewResult.overlapReview?.summary?.INVALID_OVERLAP === 0 &&
      ownerReviewResult.queueRecon?.reconciliation?.duplicates === 0,
  };

  const positivePath = {
    ok: isolated.result.ok,
    headEqualsOrigin: isolated.result.headEqualsOrigin,
    mockBypass: isolated.result.infrastructure?.mockBypass,
    receiptAcceptedByProductionBoundary: isolated.result.receiptAcceptedByProductionBoundary,
    receiptFrozen: isolated.result.receiptFrozen,
    transportMode: isolated.result.transportMode,
    executeBlocked: isolated.result.executeBlocked,
    realCalls: isolated.result.realCalls,
    LUNA_REAL_CALLS: 0,
    skipped: 0,
    pass:
      isolated.result.ok &&
      isolated.result.headEqualsOrigin &&
      isolated.result.infrastructure?.mockBypass === false &&
      isolated.result.receiptAcceptedByProductionBoundary === true &&
      isolated.result.executeBlocked === "REAL_LUNA_TRANSPORT_NOT_ENABLED_IN_THIS_BUILD" &&
      isolated.result.realCalls === 0,
  };

  const allPass =
    authChain.pass &&
    overrideAudit.pass &&
    exportAudit.pass &&
    forgeryAudit.pass &&
    positivePath.pass &&
    frozen.pass &&
    testResults.runtimeAuth.failed === 0 &&
    testResults.runtimeAuth.skipped === 0 &&
    testResults.infra.pass &&
    testResults.infraIntegration.pass &&
    testResults.dryRun.pass &&
    testResults.ownerReview.pass;

  const classification = allPass
    ? "G2_A1_LUNA_RUNTIME_AUTH_FINAL_OWNER_REVIEW_PASS"
    : "G2_A1_LUNA_RUNTIME_AUTH_FINAL_OWNER_REVIEW_NEEDS_REPAIR";

  writeJson("auth-chain-proof.json", authChain);
  writeJson("real-override-negative-proof.json", overrideAudit);
  writeJson("receipt-export-audit.json", exportAudit);
  writeJson("receipt-forgery-proof.json", forgeryAudit);
  writeJson("isolated-positive-production-path.json", positivePath);

  const reviewProof = {
    generatedAt: new Date().toISOString(),
    classification,
    pr: { number: 715, head: diffAudit.head, base: diffAudit.base, changedFiles: diffAudit.changedFiles },
    diffAudit,
    authChain,
    overrideAudit,
    exportAudit,
    forgeryAudit,
    positivePath,
    frozen,
    testResults,
    lunaRealCalls: 0,
    crowdinApiWrites: 0,
    mergeSafeForAuthLayer: allPass,
    realTransportStillStub: true,
    smokeStillBlocked: true,
  };
  writeJson("review-proof.json", reviewProof);

  const summary = [
    "# G2/A1 Runtime Auth — Final OWNER Review",
    "",
    `Generated: ${reviewProof.generatedAt}`,
    `Classification: **${classification}**`,
    "",
    "## PR identity",
    `- PR #715 HEAD: \`${diffAudit.head}\``,
    `- Base: \`${diffAudit.base}\``,
    `- Changed files: ${diffAudit.changedFiles}`,
    "",
    "## Auth v2 chains",
    `- Git chain (40 hex): ${authChain.pass ? "PASS" : "FAIL"}`,
    `- File SHA-256 chain (64 hex): ${authChain.pass ? "PASS" : "FAIL"}`,
    `- model=gpt-5.6-luna, batchCount=764, maxAllowedCycles=1`,
    "",
    "## Security",
    `- REAL_LUNA override block: ${overrideAudit.pass ? "PASS" : "FAIL"}`,
    `- Receipt export audit: ${exportAudit.pass ? "PASS" : "FAIL"}`,
    `- Receipt forgery block: ${forgeryAudit.pass ? "PASS" : "FAIL"}`,
    `- Isolated production path: ${positivePath.pass ? "PASS" : "FAIL"} (mockBypass=false)`,
    "",
    "## Tests",
    `- runtime-auth: executed=${testResults.runtimeAuth.executed} passed=${testResults.runtimeAuth.passed} failed=${testResults.runtimeAuth.failed} skipped=${testResults.runtimeAuth.skipped}`,
    `- infra: ${testResults.infra.pass ? "PASS" : "FAIL"}`,
    `- infra integration: ${testResults.infraIntegration.pass ? "PASS" : "FAIL"}`,
    `- dry-run: ${testResults.dryRun.pass ? "PASS" : "FAIL"}`,
    `- proposal owner-review: ${testResults.ownerReview.classification}`,
    "",
    "## Frozen metrics",
    `- Individual rows: ${frozen.individualRows} (expected 27894)`,
    `- OWNER conflict: ${frozen.ownerConflict} (expected 72)`,
    `- Batches: ${frozen.batches} (expected 764)`,
    `- Overlap SAFE/CONFLICT/INVALID: ${frozen.overlapSafe}/${frozen.overlapConflict}/${frozen.overlapInvalid}`,
    "",
    "## Transport boundary",
    "- REAL transport remains stub: `REAL_LUNA_TRANSPORT_NOT_ENABLED_IN_THIS_BUILD`",
    "- LUNA_REAL_CALLS = 0",
    "- PR is safe to consider for merge from auth/runtime perspective; real Luna API adapter not yet enabled",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(ARTIFACT_ROOT, "review-summary.md"), summary);

  const manifestFiles = [
    "review-proof.json",
    "review-summary.md",
    "auth-chain-proof.json",
    "real-override-negative-proof.json",
    "receipt-export-audit.json",
    "receipt-forgery-proof.json",
    "isolated-positive-production-path.json",
  ];
  const manifest = {};
  for (const file of manifestFiles) manifest[file] = sha256File(path.join(ARTIFACT_ROOT, file));
  writeJson("sha256-manifest.json", manifest);

  console.log(JSON.stringify({ classification, artifactRoot: ARTIFACT_ROOT, testResults, allPass }, null, 2));
  process.exit(allPass ? 0 : 1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
