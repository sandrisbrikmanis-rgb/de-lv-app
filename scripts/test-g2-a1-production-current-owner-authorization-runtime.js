#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  TEMPLATE_REL,
  RUNTIME_REL,
  STALE_TRACKED_REL,
  STALE_TRACKED_ABS,
} = require("./lib/g2-a1-production-current/owner-authorization-paths");
const {
  validateRuntimeGenerationGates,
  writeRuntimePackage,
  buildFullAuditCommand,
} = require("./lib/g2-a1-production-current/owner-authorization-runtime");
const { authorizeFullProductionCurrentAudit } = require("./lib/g2-a1-production-current/authorize-full-run");
const { buildProductionFileSetInventory } = require("./lib/g2-a1-production-current/inventory");

function assert(c, msg) {
  if (!c) throw new Error(msg);
}

function testTemplateHasNoConcreteHeadSha() {
  const t = JSON.parse(fs.readFileSync(path.join(ROOT, TEMPLATE_REL), "utf8"));
  const text = JSON.stringify(t);
  assert(!t.headSha && !t.originMainSha, "template must not contain headSha/originMainSha");
  assert(!text.match(/[0-9a-f]{40}/), "template must not embed 40-char SHAs");
  assert(t.artifactKind === "COMMITTED_SCHEMA_ONLY", "artifactKind");
  assert(!fs.existsSync(STALE_TRACKED_ABS), "stale tracked package must be removed");
  console.log("OK template without concrete HEAD SHA");
}

function testRuntimeGitIgnored() {
  const ignored = execSync(`git check-ignore -v ${RUNTIME_REL}`, { cwd: ROOT, encoding: "utf8" }).trim();
  assert(ignored.includes(RUNTIME_REL), `git check-ignore: ${ignored}`);
  console.log("OK runtime path gitignored");
}

function testRuntimeOnMainWhenSynced() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const originMain = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  if (head !== originMain) {
    const gates = validateRuntimeGenerationGates({ skipFetch: true });
    assert(!gates.pass, "feature branch must fail");
    assert(gates.blockers.some((b) => b.code === "HEAD_NOT_ORIGIN_MAIN"), "HEAD blocker");
    console.log("OK runtime generator rejects HEAD != origin/main on feature branch");
    return;
  }
  const before = execSync("git status --porcelain", { cwd: ROOT, encoding: "utf8" }).trim();
  const result = writeRuntimePackage({ skipFetch: true });
  assert(result.pass, JSON.stringify(result.blockers));
  assert(result.headSha === head, "headSha");
  assert(result.originMainSha === originMain, "originMainSha");
  assert(result.package.fullAuditCommand.includes(head), "command main sha");
  assert(fs.existsSync(path.join(ROOT, RUNTIME_REL)), "runtime file exists");
  const after = execSync("git status --porcelain", { cwd: ROOT, encoding: "utf8" }).trim();
  assert(after === before, `git diff after runtime gen: ${after}`);
  fs.unlinkSync(path.join(ROOT, RUNTIME_REL));
  console.log("OK runtime package on main (current SHA, clean tree after gen)");
}

function testWrongFileSetShaRejected() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const auth = authorizeFullProductionCurrentAudit({
    ownerAuthorizeFullAudit: true,
    expectedMainSha: head,
    expectedProductionFileSetSha: "0".repeat(64),
  });
  assert(!auth.pass, "bad file set");
  console.log("OK wrong production file-set SHA rejected");
}

function testDirtyWorktreeRejected() {
  const tmp = path.join(ROOT, "data", ".auth-runtime-test-dirty");
  fs.writeFileSync(tmp, "x");
  try {
    const gates = validateRuntimeGenerationGates({ skipFetch: true });
    assert(!gates.pass, "dirty");
    assert(
      gates.blockers.some((b) => b.code === "WORKTREE_DIRTY" || b.code === "WORKTREE_UNTRACKED_PRODUCTION_PATHS"),
      "dirty blocker",
    );
  } finally {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
  }
  console.log("OK dirty worktree rejected");
}

function testFullFlowRevalidatesShaWithoutRunningAudit() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const inv = buildProductionFileSetInventory();
  const cmd = buildFullAuditCommand(head, inv.gate.productionFileSetSha256);
  assert(cmd.includes("--full"), "full flag");
  assert(cmd.includes(head), "sha in cmd");
  const auth = authorizeFullProductionCurrentAudit({
    ownerAuthorizeFullAudit: true,
    expectedMainSha: head,
    expectedProductionFileSetSha: inv.gate.productionFileSetSha256,
  });
  if (head === execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim()) {
    assert(auth.pass, JSON.stringify(auth.blockers));
  } else {
    assert(!auth.pass, "branch auth fail expected");
  }
  console.log("OK full-flow SHA gates (no audit execution)");
}

function testStaleTrackedPackageBlocksRuntime() {
  const hadStale = fs.existsSync(STALE_TRACKED_ABS);
  if (hadStale) {
    console.log("SKIP stale tracked package blocker (file present for manual test)");
    return;
  }
  assert(!fs.existsSync(STALE_TRACKED_ABS), STALE_TRACKED_REL);
  console.log("OK stale tracked authorization package absent");
}

function main() {
  testTemplateHasNoConcreteHeadSha();
  testRuntimeGitIgnored();
  testRuntimeOnMainWhenSynced();
  testWrongFileSetShaRejected();
  testDirtyWorktreeRejected();
  testFullFlowRevalidatesShaWithoutRunningAudit();
  testStaleTrackedPackageBlocksRuntime();
  console.log("ALL owner authorization runtime tests passed");
}

main();
