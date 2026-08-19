#!/usr/bin/env node
"use strict";
/**
 * ET-DE A1 sectionAccents auto-repair (technical only, per MASTER §4).
 * Fixes highlight term mismatches via fuzzy inflection matching; syncs www mirror.
 * Usage: node scripts/run-et-a1-section-accents-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");

const DRY_RUN = process.argv.includes("--dry-run");
const SYNC_WWW = true;
const REPORT = path.join(ROOT, "reports", "et-a1-section-accents-repair.md");
const REL = "data/et/a1.js";

function run(cmd) {
  console.log(`\n$ ${cmd}\n`);
  execSync(cmd, { cwd: ROOT, stdio: "inherit" });
}

function capture(script, args = []) {
  return spawnSync("node", [path.join(ROOT, "scripts", script), ...args], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
}

function countCollectIssues() {
  run("node scripts/audit-et-a1-collect.js");
  const data = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-a1-audit-data.json"), "utf8"));
  return {
    total: data.sectionAccents?.issues?.length || 0,
    issues: data.sectionAccents?.issues || [],
    pass: data.sectionAccents?.pass,
  };
}

function countValidateIssues() {
  const r = capture("validate-study-design.js", ["--lang=et"]);
  const data = JSON.parse(r.stdout || "{}");
  const a1 = data.perFile?.find((f) => f.file === REL);
  return a1?.sectionAccentIssues || 0;
}

function main() {
  console.log("\n=== ET-DE A1 sectionAccents AUTO-REPAIR ===\n");
  const beforeValidate = countValidateIssues();
  const beforeCollect = countCollectIssues();

  const fixArgs = ["--level=a1"];
  if (SYNC_WWW) fixArgs.push("--sync-www");
  if (DRY_RUN) fixArgs.push("--dry-run");
  run(`node scripts/fix-et-highlight-mismatches.js ${fixArgs.join(" ")}`);

  if (!DRY_RUN && !process.argv.includes("--sync-www")) {
    const src = path.join(ROOT, REL);
    const dst = path.join(ROOT, "www", REL);
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.writeFileSync(dst, fs.readFileSync(src, "utf8"));
  }

  run("node --check data/et/a1.js");
  run("node --check www/data/et/a1.js");

  const afterValidate = countValidateIssues();
  const afterCollect = countCollectIssues();
  const mirror = isSyncedWithWww(REL) ? "PASS" : "FAIL";

  const lines = [
    "# ET–DE A1 — sectionAccents auto-repair",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.1 §4",
    "**Scope:** `data/et/a1.js` + `www/data/et/a1.js`",
    "**DE:** STRICT READ-ONLY (sectionAccents DE branches untouched)",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Pirms | Pēc |",
    "|---------|-------|-----|",
    `| validate-study-design A1 mismatches | **${beforeValidate}** | **${afterValidate}** |`,
    `| audit-et-a1-collect sectionAccents issues | **${beforeCollect.total}** | **${afterCollect.total}** |`,
    `| Mirror data ↔ www | — | **${mirror}** |`,
    "",
    "## Atlikušie sectionAccents atradumi (collect)",
    "",
  ];

  if (afterCollect.issues.length) {
    lines.push("| Card | Section | Term | Message |");
    lines.push("|------|---------|------|---------|");
    for (const i of afterCollect.issues) {
      lines.push(`| ${i.id} | ${i.section || "—"} | ${i.term || "—"} | ${i.message} |`);
    }
  } else {
    lines.push("_Nav atlikušo collect atradumu._");
  }

  lines.push("");
  lines.push("## Skripts");
  lines.push("");
  lines.push("```bash");
  lines.push("node scripts/fix-et-highlight-mismatches.js --level=a1 --sync-www");
  lines.push("```");
  lines.push("");

  if (!DRY_RUN) fs.writeFileSync(REPORT, lines.join("\n"));
  console.log(`\nWrote ${REPORT}`);
  console.log(JSON.stringify({
    beforeValidate,
    afterValidate,
    beforeCollect: beforeCollect.total,
    afterCollect: afterCollect.total,
    mirror,
  }, null, 2));
}

main();
