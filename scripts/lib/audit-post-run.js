#!/usr/bin/env node
"use strict";
/**
 * Post-audit hooks: auto-generate OWNER review + decisions + accepted + GitHub index.
 * Used by all run-da-*-audit orchestrators (A1/A2 pattern).
 */
const { execSync } = require("child_process");
const { ROOT } = require("./audit-common");

/** @type {Record<string, { scripts: string[], github?: string, readme?: string, label: string }>} */
const HOOKS = {
  "verbs-full": {
    label: "DA–DE Verbs full audit",
    scripts: ["build-da-verbs-owner-review.js", "build-da-verbs-github-index.js"],
    github: "reports/da-verbs-owner-review-GITHUB.md",
    readme: "reports/da-verbs-owner-review-README.md",
  },
  "verbs-regression": {
    label: "DA–DE Verbs regression audit",
    scripts: ["build-da-verbs-regression-owner-review.js"],
    github: "reports/da-verbs-owner-review-regression-GITHUB.md",
    readme: "reports/da-verbs-owner-review-regression-README.md",
  },
  "verbs-final-post-repair": {
    label: "DA–DE Verbs final post-repair audit",
    scripts: ["build-da-verbs-final-post-repair-owner-review.js"],
    github: "reports/da-verbs-owner-review-final-post-repair-GITHUB.md",
    readme: "reports/da-verbs-owner-review-final-post-repair-README.md",
  },
  "sentences-full": {
    label: "DA–DE Sätze full audit",
    scripts: ["build-da-sentences-owner-review.js", "build-da-sentences-github-index.js"],
    github: "reports/da-sentences-owner-review-GITHUB.md",
    readme: "reports/da-sentences-owner-review-README.md",
  },
  "c1c2-full": {
    label: "DA–DE C1/C2 full audit",
    scripts: [
      "build-da-c1c2-owner-review.js",
      "build-da-c1c2-owner-review-groups.js",
      "build-da-c1c2-github-index.js",
    ],
    github: "reports/da-c1c2-owner-review-GITHUB.md",
    readme: "reports/da-c1c2-owner-review-README.md",
  },
  "b1-full": {
    label: "DA–DE B1 full audit",
    scripts: ["build-da-b1-owner-review-groups.js", "build-da-b1-github-index.js"],
    github: "reports/da-b1-owner-review-GITHUB.md",
    readme: "reports/da-b1-owner-review-README.md",
  },
  "b2-full": {
    label: "DA–DE B2 full audit",
    scripts: ["build-da-b2-owner-review-groups.js", "build-da-b2-github-index.js"],
    github: "reports/da-b2-owner-review-GITHUB.md",
    readme: "reports/da-b2-owner-review-README.md",
  },
  "b1-final-regression": {
    label: "DA–DE B1 final repair regression",
    scripts: ["build-da-b1-final-regression-owner-review.js"],
    readme: "reports/da-b1-owner-review-final-regression-README.md",
  },
  "kurss-full": {
    label: "DA–DE Kurss full audit",
    scripts: ["build-da-kurss-owner-review.js", "build-da-kurss-full-luna-owner-review-groups.js"],
    github: "reports/da-kurss-owner-review-GITHUB.md",
    readme: "reports/da-kurss-owner-review-README.md",
  },
  "kurss-final-post-repair": {
    label: "DA–DE Kurss final post-repair audit",
    scripts: ["build-da-kurss-final-post-repair-owner-review.js"],
    github: "reports/da-kurss-owner-review-final-post-repair-GITHUB.md",
    readme: "reports/da-kurss-owner-review-final-post-repair-README.md",
  },
};

function skipOwnerReview(argv = process.argv.slice(2)) {
  return argv.includes("--skip-owner-review");
}

function filterAuditArgs(argv = process.argv.slice(2)) {
  return argv.filter((a) => a !== "--skip-owner-review");
}

function runScript(script) {
  console.log(`\n=== ${script} ===\n`);
  execSync(`node scripts/${script}`, { cwd: ROOT, stdio: "inherit" });
}

/**
 * Run post-audit OWNER review pack for a module.
 * @param {string} moduleKey
 * @param {{ argv?: string[], force?: boolean }} [opts]
 */
function runPostAuditOwnerReview(moduleKey, opts = {}) {
  const argv = opts.argv || process.argv.slice(2);
  if (!opts.force && skipOwnerReview(argv)) {
    console.log("\n=== OWNER review pack SKIPPED (--skip-owner-review) ===\n");
    return { skipped: true, moduleKey };
  }
  const hook = HOOKS[moduleKey];
  if (!hook) {
    console.warn(`\nWARNING: No post-audit OWNER hook for "${moduleKey}"\n`);
    return { skipped: true, moduleKey, reason: "unknown module" };
  }
  console.log(`\n=== OWNER review pack (${hook.label}) ===\n`);
  for (const script of hook.scripts) {
    runScript(script);
  }
  printOwnerReviewSummary(hook);
  return { skipped: false, moduleKey, hook };
}

function printOwnerReviewSummary(hook) {
  console.log("\n=== OWNER review outputs ===\n");
  if (hook.readme) console.log(`  ${hook.readme}`);
  if (hook.github) console.log(`  ${hook.github}`);
  console.log("");
}

module.exports = {
  HOOKS,
  skipOwnerReview,
  filterAuditArgs,
  runPostAuditOwnerReview,
  printOwnerReviewSummary,
};
