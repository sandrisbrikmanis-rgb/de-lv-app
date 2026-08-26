#!/usr/bin/env node
"use strict";
/**
 * ES-DE + FR-DE full linguistic audit orchestrator (MASTER v1.9, GPT-5.6 Luna, READ-ONLY).
 * Usage: node scripts/run-es-fr-de-full-audit.js [--lang=es|fr|both] [--skip-luna] [--fresh-luna] [--module=...]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const path = require("path");
const fs = require("fs");
const { execSync, spawnSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { MASTER_VERSION, MASTER_FILE } = require("./lib/es-de-audit-config");

const LANG_ARG = process.argv.find((a) => a.startsWith("--lang="))?.split("=")[1] || "both";
const SKIP_LUNA = process.argv.includes("--skip-luna");
const FRESH_LUNA = process.argv.includes("--fresh-luna");
const TEST_LUNA = process.argv.includes("--test-luna");
const ONLY_MODULE = process.argv.find((a) => a.startsWith("--module="))?.split("=")[1];

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function runNode(script, extraArgs = []) {
  const args = [...extraArgs];
  if (SKIP_LUNA) args.push("--skip-luna");
  if (FRESH_LUNA) args.push("--fresh-luna");
  if (TEST_LUNA) args.push("--test-luna");
  if (ONLY_MODULE) args.push(`--module=${ONLY_MODULE}`);
  console.log(`\n>>> node scripts/${script} ${args.join(" ")}\n`);
  const result = spawnSync("node", [path.join(ROOT, "scripts", script), ...args], {
    cwd: ROOT,
    env: process.env,
    encoding: "utf8",
    maxBuffer: 128 * 1024 * 1024,
    stdio: "inherit",
  });
  return result.status === 0;
}

function runLang(lang) {
  const prefix = lang === "fr" ? "fr" : "es";
  const label = lang === "fr" ? "FR–DE" : "ES–DE";
  const results = {};

  console.log(`\n========== ${label} A1+A2 ==========\n`);
  results.a1a2 = runNode(`run-${prefix}-a1-a2-full-audit.js`);

  if (!ONLY_MODULE || ONLY_MODULE === "b1") {
    console.log(`\n========== ${label} B1 ==========\n`);
    results.b1 = runNode(`run-${prefix}-de-b1-full-audit.js`);
  }

  const fiveModScript = `run-${prefix}-de-b2-c1-c2-sentences-verbs-full-audit.js`;
  if (ONLY_MODULE && ONLY_MODULE !== "b1") {
    console.log(`\n========== ${label} ${ONLY_MODULE.toUpperCase()} ==========\n`);
    results[ONLY_MODULE] = runNode(fiveModScript, [`--module=${ONLY_MODULE}`]);
  } else if (!ONLY_MODULE) {
    console.log(`\n========== ${label} B2/C1/C2/SENTENCES/VERBS ==========\n`);
    results.fiveModules = runNode(fiveModScript);
  }

  return results;
}

function main() {
  const head = git("git rev-parse HEAD");
  console.log(`\n=== ES–DE + FR–DE FULL AUDIT (MASTER v${MASTER_VERSION}) ===`);
  console.log(`HEAD: ${head}`);
  console.log(`MASTER: ${MASTER_FILE}`);
  console.log(`Lang: ${LANG_ARG}`);
  console.log(`Luna: ${SKIP_LUNA ? "SKIPPED" : TEST_LUNA ? "TEST" : "FULL"}`);
  if (FRESH_LUNA) console.log("Mode: --fresh-luna");

  const allResults = {};
  if (LANG_ARG === "es" || LANG_ARG === "both") allResults.es = runLang("es");
  if (LANG_ARG === "fr" || LANG_ARG === "both") allResults.fr = runLang("fr");

  const summaryPath = path.join(ROOT, "reports/es-fr-de-full-audit-summary.md");
  const lines = [
    "# ES–DE + FR–DE pilns audits kopsavilkums",
    "",
    `**HEAD:** \`${head}\``,
    `**MASTER:** \`${MASTER_FILE}\` v${MASTER_VERSION}`,
    `**Auditors:** deterministisks + GPT-5.6 Luna`,
    `**Datums:** ${new Date().toISOString().slice(0, 10)}`,
    "",
    "## Rezultāti",
    "",
    "```json",
    JSON.stringify(allResults, null, 2),
    "```",
    "",
  ];
  fs.writeFileSync(summaryPath, lines.join("\n"));
  console.log(`\nSummary: ${summaryPath}\n`);
}

main();
