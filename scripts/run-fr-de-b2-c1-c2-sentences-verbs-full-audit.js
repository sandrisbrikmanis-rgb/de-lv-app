#!/usr/bin/env node
"use strict";
/**
 * FR-DE B2, C1, C2, Teikumi, Darbības vārdi — FIRST FULL DISCOVERY master orchestrator.
 * Usage: node scripts/run-fr-de-b2-c1-c2-sentences-verbs-full-audit.js [--skip-luna] [--module=b2] [--fresh-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { ALL_MODULE_KEYS, getModuleConfig, MASTER_VERSION, MASTER_FILE } = require("./lib/fr-de-audit-config");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const TEST_LUNA = process.argv.includes("--test-luna");
const FRESH_LUNA = process.argv.includes("--fresh-luna");
const ONLY_MODULE = process.argv.find((a) => a.startsWith("--module="))?.split("=")[1];

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function runModule(moduleKey) {
  const args = [`--module=${moduleKey}`];
  if (SKIP_LUNA) args.push("--skip-luna");
  if (TEST_LUNA) args.push("--test-luna");
  if (FRESH_LUNA) args.push("--fresh-luna");
  console.log(`\n========== MODULE: ${moduleKey.toUpperCase()} ==========\n`);
  const result = spawnSync("node", [path.join(ROOT, "scripts/run-fr-de-module-full-audit.js"), ...args], {
    cwd: ROOT,
    env: process.env,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    stdio: "inherit",
  });
  return result.status === 0;
}

function main() {
  const head = git("git rev-parse HEAD");
  const modules = ONLY_MODULE ? [ONLY_MODULE.toLowerCase()] : ALL_MODULE_KEYS;
  console.log(`\n=== FR–DE B2/C1/C2/SENTENCES/VERBS FIRST FULL DISCOVERY ===`);
  console.log(`HEAD: ${head}`);
  console.log(`MASTER: ${MASTER_FILE} v${MASTER_VERSION}`);
  console.log(`Modules: ${modules.join(", ")}\n`);

  const results = {};
  let allPass = true;
  for (const mod of modules) {
    const ok = runModule(mod);
    results[mod] = ok ? "PASS" : "INCOMPLETE";
    if (!ok) allPass = false;
  }

  const summaryLines = [
    "# FR–DE B2/C1/C2/Teikumi/Darbības vārdi — FIRST FULL DISCOVERY",
    "",
    `**HEAD:** \`${head}\``,
    `**MASTER:** \`${MASTER_FILE}\` v${MASTER_VERSION}`,
    `**Branch:** \`cursor/fr-de-b2-c1-c2-sentences-verbs-full-audit-3141\``,
    "",
    "## Moduļu rezultāti",
    "",
    "| Modulis | Kartītes | Verdict |",
    "|---------|----------|---------|",
  ];

  for (const mod of modules) {
    const cfg = getModuleConfig(mod);
    let verdict = "—";
    let totalCards = cfg.totalCards;
    if (fs.existsSync(cfg.auditJson)) {
      const audit = JSON.parse(fs.readFileSync(cfg.auditJson, "utf8"));
      verdict = audit.meta?.verdict || "—";
      totalCards = audit.meta?.totalCards || cfg.totalCards;
    }
    summaryLines.push(`| ${cfg.moduleKey} | ${totalCards} | ${verdict} |`);
  }

  summaryLines.push("", `**Overall:** ${allPass ? "READY FOR OWNER REVIEW" : "AUDIT INCOMPLETE"}`, "");
  const masterSummary = path.join(ROOT, "reports/fr-de-b2-c1-c2-sentences-verbs-full-audit-summary.md");
  fs.writeFileSync(masterSummary, summaryLines.join("\n"));
  console.log(`\nWrote ${masterSummary}`);
  console.log(JSON.stringify({ results, allPass }, null, 2));

  if (!allPass && !SKIP_LUNA) process.exit(1);
}

main();
