#!/usr/bin/env node
/**
 * ES-DE A1+A2 full READ-ONLY audit orchestrator.
 * Usage: node scripts/run-es-a1-a2-full-audit.js
 */
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_MD = path.join(ROOT, "reports", "es-de-a1-a2-full-audit.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "es-de-a1-a2-full-audit.json");
const COLLECT_JSON = path.join(ROOT, "reports", "temp", "es-de-a1-a2-audit-data.json");

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function runNode(script, args = [], { allowFail = false } = {}) {
  const result = spawnSync("node", [path.join(ROOT, "scripts", script), ...args], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0 && !allowFail) {
    throw new Error(`${script} failed with exit ${result.status}`);
  }
  return result;
}

function loadJson(p, fallback = null) {
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function main() {
  console.log("\n=== ES–DE A1+A2 FULL READ-ONLY AUDIT ===\n");

  fs.mkdirSync(path.join(ROOT, "reports", "temp"), { recursive: true });

  runNode("audit-es-a1-a2-collect.js");

  const parity = spawnSync("node", [path.join(ROOT, "scripts", "audit-language-parity.js"), "--lang=es"], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  fs.writeFileSync(path.join(ROOT, "reports", "temp", "es-parity.json"), parity.stdout || "{}");

  const validate = spawnSync("node", [path.join(ROOT, "scripts", "validate-study-design.js"), "--lang=es"], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  fs.writeFileSync(path.join(ROOT, "reports", "temp", "es-validate-study.json"), validate.stdout || "{}");

  const moj = spawnSync("node", [path.join(ROOT, "scripts", "audit-mojibake.js"), "--lang=es"], {
    cwd: ROOT,
    encoding: "utf8",
  });
  fs.writeFileSync(path.join(ROOT, "reports", "temp", "es-mojibake.json"), moj.stdout || "{}");

  const compliance = spawnSync("node", [path.join(ROOT, "scripts", "verify-es-de-compliance.js")], {
    cwd: ROOT,
    encoding: "utf8",
  });
  fs.writeFileSync(path.join(ROOT, "reports", "temp", "es-de-compliance.json"), compliance.stdout || "{}");

  execSync("node --check data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
  execSync("node --check data/es/a2.js", { cwd: ROOT, stdio: "pipe" });

  const collect = loadJson(COLLECT_JSON, {});
  const parityData = loadJson(path.join(ROOT, "reports/temp/es-parity.json"), {});
  const validateData = loadJson(path.join(ROOT, "reports/temp/es-validate-study.json"), {});
  const mojData = loadJson(path.join(ROOT, "reports/temp/es-mojibake.json"), {});
  const complianceData = loadJson(path.join(ROOT, "reports/temp/es-de-compliance.json"), {});

  const a1Validate = validateData.perFile?.find((f) => f.file === "data/es/a1.js") || {};
  const a2Validate = validateData.perFile?.find((f) => f.file === "data/es/a2.js") || {};

  const originSha = git("git rev-parse HEAD");
  const date = new Date().toISOString().slice(0, 10);

  const payload = {
    meta: {
      date,
      standard: "LANGUAGE_AUDIT_STANDARD.md",
      scope: "ES-DE A1+A2",
      originMainSha: originSha,
      readOnly: true,
      productionChanges: 0,
    },
    summary: collect.summary,
    gates: {
      syntax: "PASS",
      mirror: collect.summary?.mirrorPass ? "PASS" : "FAIL",
      mojibake: mojData.pass ? "PASS" : "FAIL",
      parity: parityData.pass ? "PASS" : "FAIL",
      validateStudy: validateData.pass ? "PASS" : "FAIL",
      deReadOnly: complianceData.deReadOnly?.pass ? "PASS" : "FAIL",
    },
    a1: {
      cards: 702,
      study: { lv: 134, es: collect.levels?.[0]?.counts?.esStudy || 0 },
      sectionAccentIssues: a1Validate.sectionAccentIssues || 0,
      lvRemnantCards: new Set(
        (collect.levels?.[0]?.foreignRemnants?.issues || [])
          .filter((i) => i.category === "LV_REMNANT")
          .map((i) => i.de),
      ).size,
      missingStudy: collect.levels?.[0]?.missingStudy || [],
    },
    a2: {
      cards: 1640,
      study: { lv: 231, es: collect.levels?.[1]?.counts?.esStudy || 0 },
      sectionAccentIssues: a2Validate.sectionAccentIssues || 0,
      lvRemnantCards: new Set(
        (collect.levels?.[1]?.foreignRemnants?.issues || [])
          .filter((i) => i.category === "LV_REMNANT")
          .map((i) => i.de),
      ).size,
      minimalStudyNoRenderable: collect.levels?.[1]?.minimalStudyNoRenderable || [],
    },
    verdict: "NEEDS_REPAIR",
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  console.log(`\nWrote ${OUT_JSON}`);
  console.log(`VERDICT: ${payload.verdict}`);
}

main();
