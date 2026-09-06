#!/usr/bin/env node
"use strict";

/**
 * Subprocess entry: build auth v2 doc + run full production REAL_LUNA authorizeRuntimeExecution()
 * from an isolated git clone where HEAD === origin/main.
 *
 * Usage: node scripts/run-isolated-real-luna-auth-check.js <absolute-auth-output-dir>
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
  authorizeRuntimeExecution,
  assertAuthorizedRuntimeReceipt,
  createRealLunaTransport,
  runInfrastructureGates,
  buildQueues,
  buildBatchPlan,
  RUNTIME_MODES,
  AUTH_FROZEN,
} = require("./lib/g2-a1-luna-proposal");
const { buildOwnerAuthorizationDocument } = require("./lib/g2-a1-luna-proposal/owner-authorization");
const { hashObject, sha256Hex } = require("./lib/g2-a1-luna-proposal/hash");
const { isIssuedRealLunaReceipt } = require("./lib/g2-a1-luna-proposal/runtime-receipt-registry");
const { ROOT } = require("./lib/audit-common");

const authDir = process.argv[2];
const ISOLATED_RUN_ID = "g2-a1-proposal-isolated-test";

if (!authDir || !path.isAbsolute(authDir)) {
  console.log(JSON.stringify({ ok: false, code: "AUTH_DIR_REQUIRED" }));
  process.exit(1);
}

async function main() {
  const headSha = execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
  const originMainSha = execSync("git rev-parse origin/main", { encoding: "utf8" }).trim();
  const infra = runInfrastructureGates();
  const built = buildQueues({ gates: infra });
  const plan = buildBatchPlan(built.queues);
  const batchPlanSha256 = hashObject(plan);

  fs.mkdirSync(authDir, { recursive: true });
  const doc = buildOwnerAuthorizationDocument({
    runtimeHeadSha: headSha,
    originMainSha: headSha,
    runId: ISOLATED_RUN_ID,
    batchPlanSha256,
    ownerReferences: "OWNER-ISOLATED-TEST",
  });
  const authPath = path.join(authDir, "owner-auth.json");
  const raw = JSON.stringify(doc, null, 2);
  fs.writeFileSync(authPath, raw);
  const authorizationFileSha256 = sha256Hex(raw);

  const auth = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: headSha,
    cliSha: headSha,
    ownerAuthorizationFile: authPath,
    expectedAuthorizationFileSha256: authorizationFileSha256,
    runId: ISOLATED_RUN_ID,
    model: AUTH_FROZEN.model,
    batchPlanSha256,
    batchCount: AUTH_FROZEN.batchCount,
    maxAllowedCycles: AUTH_FROZEN.maxAllowedCycles,
    queueCounts: AUTH_FROZEN.queueCounts,
  });

  const payload = {
    ok: auth.pass,
    headSha,
    originMainSha,
    headEqualsOrigin: headSha === originMainSha,
    infrastructure: {
      pass: infra.pass,
      errors: infra.errors,
      mockBypass: infra.mockBypass === true,
    },
    auth: {
      pass: auth.pass,
      code: auth.code,
      errors: auth.errors,
      receipt: auth.receipt,
      lunaRealCalls: auth.lunaRealCalls,
    },
    authorizationFileSha256,
    batchPlanSha256,
    authPath,
    processCwd: process.cwd(),
    worktreeRoot: ROOT,
  };

  if (!auth.pass) {
    console.log(JSON.stringify(payload));
    process.exit(1);
  }

  assertAuthorizedRuntimeReceipt(auth.receipt, RUNTIME_MODES.REAL_LUNA);
  payload.receiptFrozen = Object.isFrozen(auth.receipt);
  payload.receiptRegistered = isIssuedRealLunaReceipt(auth.receipt);

  let modifyBlocked = false;
  try {
    auth.receipt.runtimeHeadSha = "d".repeat(40);
  } catch {
    modifyBlocked = true;
  }
  payload.receiptModifyBlocked = modifyBlocked;

  const cloned = { ...auth.receipt };
  let clonedCode = null;
  try {
    assertAuthorizedRuntimeReceipt(cloned, RUNTIME_MODES.REAL_LUNA);
  } catch (error) {
    clonedCode = error.code;
  }
  payload.clonedReceiptRejected = clonedCode;

  const transport = createRealLunaTransport(auth.receipt);
  payload.transportMode = transport.mode;
  payload.realCalls = transport.stats.realCalls;

  let executeBlocked = null;
  try {
    await transport.executeBatch();
  } catch (error) {
    executeBlocked = error.code;
  }
  payload.executeBlocked = executeBlocked;

  console.log(JSON.stringify(payload));
  process.exit(0);
}

main().catch((error) => {
  console.log(JSON.stringify({ ok: false, error: error.message, code: error.code }));
  process.exit(1);
});
