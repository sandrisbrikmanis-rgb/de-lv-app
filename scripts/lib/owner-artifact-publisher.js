#!/usr/bin/env node
"use strict";
/**
 * MASTER v1.9 — shared OWNER artifact publication pipeline (§7.20–§7.24).
 * Generates, validates, commits, pushes, and verifies GitHub blob links.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./audit-common");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";

/** @type {Record<string, import('./owner-artifact-publisher.types')>} */
const SCOPE_REGISTRY = {
  "et-a2": {
    scope: "et-a2",
    builders: ["build-et-a2-owner-review.js"],
    viewPath: "reports/et-a2-owner-view.md",
    decisionsPath: "reports/et-a2-owner-decisions.md",
    githubPath: "reports/et-a2-owner-review-GITHUB.md",
    readmePath: "reports/et-a2-owner-review-README.md",
    auditReportPath: "reports/et-a2-full-audit.md",
    auditJsonPath: "reports/et-a2-full-audit.json",
    viewHeadingRegex: /^## (ET-A2-\d+)/gm,
    decisionRowPrefix: "| ET-A2-",
    commitPaths: [
      "reports/et-a2-owner-view.md",
      "reports/et-a2-owner-decisions.md",
      "reports/et-a2-owner-review-GITHUB.md",
      "reports/et-a2-owner-review-README.md",
      "reports/et-a2-owner-view-group*.md",
      "reports/et-a2-owner-decisions-group*.md",
    ],
  },
  "et-a1": {
    scope: "et-a1",
    builders: ["build-et-a1-owner-review.js"],
    viewPath: "reports/et-a1-owner-view.md",
    decisionsPath: "reports/et-a1-owner-decisions.md",
    githubPath: "reports/et-a1-owner-review-GITHUB.md",
    readmePath: "reports/et-a1-owner-review-README.md",
    auditReportPath: "reports/et-a1-full-audit.md",
    auditJsonPath: "reports/et-a1-full-audit.json",
    viewHeadingRegex: /^## (ET-A1-\d+)/gm,
    decisionRowPrefix: "| ET-A1-",
    commitPaths: [
      "reports/et-a1-owner-view.md",
      "reports/et-a1-owner-decisions.md",
      "reports/et-a1-owner-review-GITHUB.md",
      "reports/et-a1-owner-review-README.md",
      "reports/et-a1-owner-view-group*.md",
      "reports/et-a1-owner-decisions-group*.md",
    ],
  },
  "kurss-full": {
    scope: "da-kurss",
    builders: ["build-da-kurss-owner-review.js"],
    viewPath: "reports/da-kurss-owner-view.md",
    legacyViewPath: "reports/da-kurss-owner-review.md",
    decisionsPath: "reports/da-kurss-owner-decisions.md",
    githubPath: "reports/da-kurss-owner-review-GITHUB.md",
    readmePath: "reports/da-kurss-owner-review-README.md",
    auditReportPath: "reports/da-kurss-full-audit.md",
    auditJsonPath: "reports/temp/da-kurss-full-audit.json",
    viewHeadingRegex: /^## Finding (\d+) \(Kurss\)/gm,
    decisionRowRegex: /^\| (\d+) \|/,
    commitPaths: [
      "reports/da-kurss-owner-view.md",
      "reports/da-kurss-owner-review.md",
      "reports/da-kurss-owner-decisions.md",
      "reports/da-kurss-owner-accepted.md",
      "reports/da-kurss-owner-review-GITHUB.md",
      "reports/da-kurss-owner-review-README.md",
      "reports/da-kurss-owner-review-group*.md",
      "reports/da-kurss-owner-decisions-group*.md",
    ],
  },
  "es-kurss-lessons-full": {
    scope: "es-kurss-lessons",
    builders: ["build-es-kurss-lessons-owner-review.js"],
    viewPath: "reports/es-kurss-lessons-owner-view.md",
    legacyViewPath: "reports/es-kurss-lessons-owner-review.md",
    decisionsPath: "reports/es-kurss-lessons-owner-decisions.md",
    githubPath: "reports/es-kurss-lessons-owner-review-GITHUB.md",
    readmePath: "reports/es-kurss-lessons-owner-review-README.md",
    auditReportPath: "reports/es-kurss-lessons-full-audit-v2.md",
    auditJsonPath: "reports/temp/es-kurss-lessons-full-audit-v2.json",
    viewHeadingRegex: /^## Finding (\d+) \(ES Kurss Lessons\)/gm,
    decisionRowRegex: /^\| (\d+) \|/,
    commitPaths: [
      "reports/es-kurss-lessons-owner-view.md",
      "reports/es-kurss-lessons-owner-review.md",
      "reports/es-kurss-lessons-owner-decisions.md",
      "reports/es-kurss-lessons-owner-accepted.md",
      "reports/es-kurss-lessons-owner-review-GITHUB.md",
      "reports/es-kurss-lessons-owner-review-README.md",
      "reports/es-kurss-lessons-owner-review-group*.md",
      "reports/es-kurss-lessons-owner-decisions-group*.md",
    ],
  },
};

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch (e) {
    return "";
  }
}

function ghBlob(branch, relPath) {
  return `https://github.com/${REPO}/blob/${branch}/${relPath}`;
}

function expandGlobPatterns(patterns) {
  const out = new Set();
  for (const pattern of patterns) {
    if (!pattern.includes("*")) {
      out.add(pattern);
      continue;
    }
    const dir = path.dirname(pattern);
    const base = path.basename(pattern);
    const re = new RegExp(`^${base.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`);
    const absDir = path.join(ROOT, dir);
    if (!fs.existsSync(absDir)) continue;
    for (const name of fs.readdirSync(absDir)) {
      if (re.test(name)) out.add(path.join(dir, name).replace(/\\/g, "/"));
    }
  }
  return [...out];
}

function classifyGitDiff(extraAllowedPrefixes = []) {
  const diff = git("git diff --name-only HEAD").split("\n").filter(Boolean);
  const untracked = git("git ls-files --others --exclude-standard").split("\n").filter(Boolean);
  const staged = git("git diff --cached --name-only").split("\n").filter(Boolean);
  const all = [...new Set([...diff, ...untracked, ...staged])];
  const allowedPrefixes = [
    "reports/",
    "scripts/lib/owner-artifact-publisher.js",
    "scripts/build-",
    "scripts/run-",
    "scripts/lib/audit-post-run.js",
    "docs_and_rules/",
    ...extraAllowedPrefixes,
  ];
  const production = all.filter((p) => p.startsWith("data/") || p.startsWith("www/data/"));
  const unexpected = all.filter(
    (p) => !production.includes(p) && !allowedPrefixes.some((pref) => p.startsWith(pref) || p === pref),
  );
  return { all, production, unexpectedProduction: production, unexpected };
}

function countMonolithicViewFindings(viewPath, viewHeadingRegex) {
  if (!fs.existsSync(viewPath)) return { count: 0, ids: new Set(), duplicateIds: 0 };
  const text = fs.readFileSync(viewPath, "utf8");
  const ids = new Set();
  let duplicateIds = 0;
  for (const m of text.matchAll(viewHeadingRegex)) {
    if (ids.has(m[1])) duplicateIds += 1;
    else ids.add(m[1]);
  }
  return { count: ids.size, ids, duplicateIds };
}

function countMonolithicDecisionRows(decisionsPath, scopeConfig) {
  if (!fs.existsSync(decisionsPath)) return { count: 0, ids: new Set(), duplicateIds: 0 };
  const text = fs.readFileSync(decisionsPath, "utf8");
  const ids = new Set();
  let duplicateIds = 0;
  let count = 0;

  if (scopeConfig.decisionRowRegex) {
    for (const line of text.split("\n")) {
      const m = line.match(scopeConfig.decisionRowRegex);
      if (!m) continue;
      count += 1;
      const id = m[1];
      if (ids.has(id)) duplicateIds += 1;
      else ids.add(id);
    }
    return { count, ids, duplicateIds };
  }

  const prefix = scopeConfig.decisionRowPrefix || "|";
  const lines = text.split("\n").filter((l) => l.startsWith(prefix));
  for (const line of lines) {
    const id = line.split("|")[1]?.trim();
    if (!id) continue;
    count += 1;
    if (ids.has(id)) duplicateIds += 1;
    else ids.add(id);
  }
  return { count, ids, duplicateIds };
}

function validateMonolithicCoverage(scopeConfig, expectedCount) {
  const viewPath = path.join(ROOT, scopeConfig.viewPath);
  const decisionsPath = path.join(ROOT, scopeConfig.decisionsPath);
  const view = countMonolithicViewFindings(viewPath, scopeConfig.viewHeadingRegex);
  const decisions = countMonolithicDecisionRows(decisionsPath, scopeConfig);
  const n = expectedCount;
  const missingInOwnerView = [...decisions.ids || []].filter((id) => !view.ids.has(id)).length;
  const missingInOwnerDecisions = n - decisions.count;
  const pass =
    n > 0 &&
    view.count === n &&
    decisions.count === n &&
    view.duplicateIds === 0 &&
    decisions.duplicateIds === 0 &&
    missingInOwnerView === 0 &&
    missingInOwnerDecisions === 0;

  return {
    ownerBacklogFinal: n,
    ownerViewFindings: view.count,
    ownerDecisionsFindings: decisions.count,
    missingInOwnerView: Math.max(0, n - view.count),
    missingInOwnerDecisions: Math.max(0, missingInOwnerDecisions),
    duplicateAuditIdsView: view.duplicateIds,
    duplicateAuditIdsDecisions: decisions.duplicateIds,
    ownerArtifactCoverage: pass ? "100%" : "<100%",
    pass,
  };
}

function runBuilders(scopeConfig) {
  for (const script of scopeConfig.builders) {
    console.log(`\n=== ${script} (OWNER artifact builder) ===\n`);
    execSync(`node scripts/${script}`, { cwd: ROOT, stdio: "inherit", env: process.env });
  }
}

function verifyGithubBlobOnBranch(branch, relPaths) {
  const missing = [];
  for (const rel of relPaths) {
    try {
      execSync(`gh api "repos/${REPO}/contents/${rel}?ref=${branch}" --jq .name`, {
        cwd: ROOT,
        stdio: ["pipe", "pipe", "pipe"],
      });
    } catch {
      missing.push(rel);
    }
  }
  return { pass: missing.length === 0, missing, checked: relPaths.length };
}

function collectPublicationPaths(scopeConfig) {
  const required = [
    scopeConfig.viewPath,
    scopeConfig.decisionsPath,
    scopeConfig.githubPath,
  ];
  if (scopeConfig.auditReportPath && fs.existsSync(path.join(ROOT, scopeConfig.auditReportPath))) {
    required.push(scopeConfig.auditReportPath);
  }
  if (scopeConfig.auditJsonPath && fs.existsSync(path.join(ROOT, scopeConfig.auditJsonPath))) {
    required.push(scopeConfig.auditJsonPath);
  }
  return required;
}

function commitOwnerArtifacts(scopeConfig, message, { dryRun = false } = {}) {
  const files = expandGlobPatterns(scopeConfig.commitPaths).filter((p) => fs.existsSync(path.join(ROOT, p)));
  if (!files.length) {
    return { pass: false, reason: "no artifact files to commit" };
  }
  if (dryRun) {
    return { pass: true, dryRun: true, files };
  }
  execSync(`git add ${files.map((f) => JSON.stringify(f)).join(" ")}`, { cwd: ROOT, stdio: "pipe" });
  const status = git("git diff --cached --name-only");
  if (!status) return { pass: true, skipped: true, reason: "nothing to commit" };
  execSync(`git commit -m ${JSON.stringify(message)}`, { cwd: ROOT, stdio: "inherit" });
  return { pass: true, commitSha: git("git rev-parse HEAD"), files: status.split("\n").filter(Boolean) };
}

function pushArtifacts(branch, { dryRun = false } = {}) {
  if (dryRun) return { pass: true, dryRun: true, branch };
  execSync(`git push -u origin ${branch}`, { cwd: ROOT, stdio: "inherit" });
  return { pass: true, branch };
}

function resolveFinalVerdict({ backlogCount, baseVerdict, publication }) {
  if (backlogCount === 0) return baseVerdict;
  if (!publication) return "BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED";
  if (publication.skipped) return baseVerdict;
  if (!publication.coverage?.pass) return "BLOCKED_OWNER_ARTIFACT_COVERAGE_FAIL";
  if (publication.unexpectedProduction?.length) return "BLOCKED_UNEXPECTED_PRODUCTION_CHANGE";
  if (!publication.committed?.pass && !publication.committed?.skipped) {
    return "BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED";
  }
  if (!publication.pushed?.pass && !publication.pushed?.dryRun) {
    return "BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED";
  }
  if (!publication.githubVerify?.pass && !publication.githubVerify?.dryRun) {
    return "BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED";
  }
  if (baseVerdict === "NEEDS_OWNER_REVIEW" || backlogCount > 0) return "NEEDS_OWNER_REVIEW";
  return baseVerdict;
}

function formatPublicationResponse(links) {
  return [
    "",
    "## OWNER artifact links (MASTER v1.9 §7.21.2)",
    "",
    `OWNER VIEW: ${links.view}`,
    "",
    `OWNER DECISIONS: ${links.decisions}`,
    "",
    `OWNER REVIEW INDEX: ${links.index}`,
    "",
  ].join("\n");
}

/**
 * @param {object} opts
 * @param {string} opts.moduleKey - key in SCOPE_REGISTRY or audit-post-run HOOKS
 * @param {number} opts.backlogCount - OWNER_BACKLOG_FINAL
 * @param {string} [opts.branch]
 * @param {boolean} [opts.dryRun]
 * @param {boolean} [opts.skipCommit]
 * @param {boolean} [opts.skipPush]
 * @param {boolean} [opts.skipBuilders]
 * @param {string} [opts.commitMessage]
 */
function publishOwnerArtifacts(opts) {
  const moduleKey = opts.moduleKey;
  const backlogCount = opts.backlogCount ?? 0;
  const branch = opts.branch || process.env.WORK_BRANCH || git("git branch --show-current") || "main";
  const dryRun = Boolean(opts.dryRun || process.env.OWNER_PUBLISH_DRY_RUN === "1");
  const skipCommit = Boolean(opts.skipCommit || dryRun);
  const skipPush = Boolean(opts.skipPush || dryRun);
  const scopeConfig = opts.scopeConfig || SCOPE_REGISTRY[moduleKey];

  if (!scopeConfig) {
    return {
      pass: false,
      skipped: true,
      reason: `unknown moduleKey: ${moduleKey}`,
      verdict: "BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED",
    };
  }

  if (backlogCount === 0) {
    return {
      pass: true,
      skipped: true,
      reason: "OWNER_BACKLOG_FINAL = 0",
      verdict: null,
      publication: null,
    };
  }

  process.env.WORK_BRANCH = branch;

  if (!opts.skipBuilders) {
    runBuilders(scopeConfig);
  }

  const coverage = validateMonolithicCoverage(scopeConfig, backlogCount);
  if (!coverage.pass) {
    return {
      pass: false,
      coverage,
      verdict: "BLOCKED_OWNER_ARTIFACT_COVERAGE_FAIL",
      links: null,
    };
  }

  const diff = classifyGitDiff(opts.extraAllowedPrefixes || []);
  if (diff.unexpectedProduction.length) {
    return {
      pass: false,
      coverage,
      unexpectedProduction: diff.unexpectedProduction,
      verdict: "BLOCKED_UNEXPECTED_PRODUCTION_CHANGE",
      links: null,
    };
  }

  const commitMessage =
    opts.commitMessage ||
    `${scopeConfig.scope.toUpperCase()}: auto-publish OWNER artifacts (${backlogCount} findings, MASTER v1.9)`;

  const committed = skipCommit
    ? { pass: true, dryRun: true }
    : commitOwnerArtifacts(scopeConfig, commitMessage, { dryRun: false });

  const pushed = skipPush ? { pass: true, dryRun: true, branch } : pushArtifacts(branch, { dryRun: false });

  const verifyPaths = collectPublicationPaths(scopeConfig);
  const githubVerify = dryRun || skipPush
    ? { pass: true, dryRun: true, checked: verifyPaths.length }
    : verifyGithubBlobOnBranch(branch, verifyPaths);

  const links = {
    view: ghBlob(branch, scopeConfig.viewPath),
    decisions: ghBlob(branch, scopeConfig.decisionsPath),
    index: ghBlob(branch, scopeConfig.githubPath),
    branch,
  };

  const publication = {
    coverage,
    committed,
    pushed,
    githubVerify,
    links,
    ownerArtifactPublication: githubVerify.pass && committed.pass ? "PASS" : "FAIL",
  };

  const pass =
    coverage.pass &&
    committed.pass &&
    pushed.pass &&
    githubVerify.pass &&
    !diff.unexpectedProduction.length;

  return {
    pass,
    coverage,
    committed,
    pushed,
    githubVerify,
    links,
    publication,
    verdict: pass ? "NEEDS_OWNER_REVIEW" : "BLOCKED_OWNER_ARTIFACT_PUBLICATION_FAILED",
    responseText: formatPublicationResponse(links),
  };
}

module.exports = {
  REPO,
  SCOPE_REGISTRY,
  classifyGitDiff,
  countMonolithicViewFindings,
  countMonolithicDecisionRows,
  validateMonolithicCoverage,
  publishOwnerArtifacts,
  resolveFinalVerdict,
  formatPublicationResponse,
  ghBlob,
  verifyGithubBlobOnBranch,
  expandGlobPatterns,
};
