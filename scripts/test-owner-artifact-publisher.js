#!/usr/bin/env node
"use strict";
/**
 * MASTER v1.9 — owner artifact publisher tests.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  validateMonolithicCoverage,
  publishOwnerArtifacts,
  classifyGitDiff,
  resolveFinalVerdict,
  SCOPE_REGISTRY,
  ghBlob,
} = require("./lib/owner-artifact-publisher");

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function writeTempScope(scopeDir, files) {
  fs.mkdirSync(scopeDir, { recursive: true });
  for (const [rel, content] of Object.entries(files)) {
    const abs = path.join(scopeDir, rel);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, content);
  }
}

function testResolveFinalVerdict() {
  assert(
    resolveFinalVerdict({ backlogCount: 0, baseVerdict: "PASS", publication: null }) === "PASS",
    "zero backlog keeps PASS",
  );
  assert(
    resolveFinalVerdict({ backlogCount: 3, baseVerdict: "NEEDS_OWNER_REVIEW", publication: null }) ===
      "BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED",
    "missing publication blocks",
  );
  assert(
    resolveFinalVerdict({
      backlogCount: 3,
      baseVerdict: "NEEDS_OWNER_REVIEW",
      publication: {
        coverage: { pass: false },
        committed: { pass: true },
        pushed: { pass: true },
        githubVerify: { pass: true },
      },
    }) === "BLOCKED_OWNER_ARTIFACT_COVERAGE_FAIL",
    "coverage fail blocks",
  );
  assert(
    resolveFinalVerdict({
      backlogCount: 3,
      baseVerdict: "NEEDS_OWNER_REVIEW",
      publication: {
        coverage: { pass: true },
        committed: { pass: true },
        pushed: { pass: true, dryRun: true },
        githubVerify: { pass: true, dryRun: true },
      },
    }) === "NEEDS_OWNER_REVIEW",
    "dry-run publication allows NEEDS_OWNER_REVIEW",
  );
}

function testSyntheticCoverageThree() {
  const relDir = "reports/temp/owner-pub-test-synthetic";
  const absDir = path.join(ROOT, relDir);
  fs.mkdirSync(absDir, { recursive: true });
  const viewRel = `${relDir}/view.md`;
  const decisionsRel = `${relDir}/decisions.md`;
  const findings = [
    { id: "ET-TEST-0001" },
    { id: "ET-TEST-0002" },
    { id: "ET-TEST-0003" },
  ];
  fs.writeFileSync(
    path.join(ROOT, viewRel),
    findings.map((_, i) => `## ET-TEST-${String(i + 1).padStart(4, "0")}\n`).join("\n"),
  );
  fs.writeFileSync(
    path.join(ROOT, decisionsRel),
    findings.map((f) => `| ${f.id} | card | field | cur | prop | HIGH | CAT | PENDING | | |`).join("\n"),
  );
  const scopeConfig = {
    viewPath: viewRel,
    decisionsPath: decisionsRel,
    viewHeadingRegex: /^## (ET-TEST-\d+)/gm,
    decisionRowPrefix: "| ET-TEST-",
  };
  const cov = validateMonolithicCoverage(scopeConfig, 3);
  assert(cov.pass, `synthetic 3/3 coverage: ${JSON.stringify(cov)}`);
  assert(cov.ownerArtifactCoverage === "100%", "coverage 100%");
  fs.rmSync(absDir, { recursive: true, force: true });
}

function testZeroBacklogSkipsPublication() {
  const pub = publishOwnerArtifacts({
    moduleKey: "et-a2",
    backlogCount: 0,
    dryRun: true,
    skipBuilders: true,
  });
  assert(pub.skipped && pub.pass, "zero backlog skips publication");
}

function testProductionDiffBlocker() {
  const prodPath = path.join(ROOT, "data/.owner-pub-test-blocker");
  fs.mkdirSync(path.dirname(prodPath), { recursive: true });
  fs.writeFileSync(prodPath, "touch");
  try {
    execSync(`git add ${JSON.stringify(path.relative(ROOT, prodPath))}`, { cwd: ROOT, stdio: "pipe" });
    const diff = classifyGitDiff();
    assert(diff.unexpectedProduction.length > 0, "production diff detected");
  } finally {
    fs.unlinkSync(prodPath);
    execSync("git reset HEAD -- .", { cwd: ROOT, stdio: "pipe" });
  }
}

function testGhBlobFormat() {
  const link = ghBlob("main", "reports/et-a2-owner-view.md");
  assert(link.includes("/blob/main/"), "blob link contains branch");
  assert(link.endsWith("reports/et-a2-owner-view.md"), "blob link contains path");
}

function testEtA2Reconstruction225() {
  const auditJson = path.join(ROOT, "reports/temp/et-a2-full-audit.json");
  assert(fs.existsSync(auditJson), "et-a2-full-audit.json fixture exists");
  const data = JSON.parse(fs.readFileSync(auditJson, "utf8"));
  const backlog = Array.isArray(data.ownerBacklogFinal) ? data.ownerBacklogFinal : [];
  assert(backlog.length === 225, `expected 225 backlog, got ${backlog.length}`);

  process.env.OWNER_PUBLISH_DRY_RUN = "1";
  process.env.WORK_BRANCH = "main";
  execSync("node scripts/build-et-a2-owner-review.js", { cwd: ROOT, stdio: "pipe" });

  const cov = validateMonolithicCoverage(SCOPE_REGISTRY["et-a2"], 225);
  assert(cov.pass, `ET A2 225 reconstruction: ${JSON.stringify(cov)}`);
  assert(cov.ownerViewFindings === 225, "view count 225");
  assert(cov.ownerDecisionsFindings === 225, "decisions count 225");
}

function testAutomaticBuilderInvocationDryRun() {
  const pub = publishOwnerArtifacts({
    moduleKey: "et-a2",
    backlogCount: 3,
    dryRun: true,
    skipBuilders: true,
    scopeConfig: {
      ...SCOPE_REGISTRY["et-a2"],
      builders: [],
      viewPath: "reports/__missing-view__.md",
    },
  });
  assert(pub.verdict === "BLOCKED_OWNER_ARTIFACT_COVERAGE_FAIL", "missing artifacts fail coverage");
}

function testMonolithicPathsRegistered() {
  for (const key of ["et-a2", "et-a1", "kurss-full"]) {
    assert(SCOPE_REGISTRY[key], `${key} registered`);
    assert(SCOPE_REGISTRY[key].viewPath.includes("owner-view"), `${key} monolithic view path`);
    assert(SCOPE_REGISTRY[key].decisionsPath.includes("owner-decisions"), `${key} monolithic decisions path`);
  }
}

function main() {
  const tests = [
    testResolveFinalVerdict,
    testSyntheticCoverageThree,
    testZeroBacklogSkipsPublication,
    testProductionDiffBlocker,
    testGhBlobFormat,
    testMonolithicPathsRegistered,
    testAutomaticBuilderInvocationDryRun,
    testEtA2Reconstruction225,
  ];
  for (const t of tests) t();
  console.log(
    JSON.stringify(
      {
        OWNER_ARTIFACT_PUBLISHER_TESTS: "PASS",
        tests: tests.length,
        ET_A2_225_RECONSTRUCTION: "PASS",
        ZERO_BACKLOG: "PASS",
        PRODUCTION_DIFF_BLOCKER: "PASS",
      },
      null,
      2,
    ),
  );
}

main();
