#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const os = require("os");
const { ROOT } = require("../audit-common");

const BRIDGE_MODULES = [
  "index.js",
  "constants.js",
  "slug.js",
  "guards.js",
  "flatten-g2-flashcards.js",
  "flatten-g1-sentences.js",
  "flatten-g1-verbs.js",
  "flatten-g1-training.js",
  "flatten-g3-lessons.js",
  "roundtrip.js",
];

const BRIDGE_EXPORTS = [
  "verifyRoundTrip",
  "exportContentToCrowdinJson",
  "flattenGroup",
  "GROUPS",
  "CONTENT_LANGUAGES",
  "G2_LEVELS",
];

function verifyBridgeLibrary() {
  const bridgeDir = path.join(ROOT, "scripts/lib/content-crowdin-bridge");
  const missingFiles = BRIDGE_MODULES.filter((f) => !fs.existsSync(path.join(bridgeDir, f)));
  if (missingFiles.length) {
    return { pass: false, note: "content-crowdin-bridge modules missing", missingFiles };
  }

  let bridge;
  try {
    bridge = require("../content-crowdin-bridge");
  } catch (e) {
    return { pass: false, note: "content-crowdin-bridge require failed", error: e.message };
  }

  const missingExports = BRIDGE_EXPORTS.filter((name) => bridge[name] === undefined);
  if (missingExports.length) {
    return { pass: false, note: "content-crowdin-bridge exports missing", missingExports };
  }

  const smoke = bridge.verifyRoundTrip({ group: "g2", lang: "lv", level: "a1" });
  if (!smoke?.pass) {
    return {
      pass: false,
      note: "content-crowdin-bridge smoke round-trip failed",
      smokeReason: smoke?.reason || "unknown",
    };
  }

  return {
    pass: true,
    note: "content-crowdin-bridge modules present and smoke round-trip OK",
    modules: BRIDGE_MODULES.length,
    exports: BRIDGE_EXPORTS.length,
  };
}

function runExportCli(args) {
  try {
    const stdout = execSync(`node scripts/export-content-crowdin.js ${args}`, {
      cwd: ROOT,
      encoding: "utf8",
      stdio: "pipe",
    });
    return { exitCode: 0, stdout };
  } catch (e) {
    return {
      exitCode: typeof e.status === "number" ? e.status : 1,
      stdout: (e.stdout || "").toString(),
      stderr: (e.stderr || "").toString(),
    };
  }
}

function verifyExportDryRunOnly() {
  const exportPath = path.join(ROOT, "scripts/export-content-crowdin.js");
  if (!fs.existsSync(exportPath)) {
    return { pass: false, note: "export-content-crowdin.js missing" };
  }

  const issues = [];
  const tests = [];
  const probeProduction = path.join(ROOT, "data", ".phase0-export-probe.json");
  const probeCrowdin = path.join(ROOT, "crowdin", ".phase0-export-probe.json");
  const probeOutside = path.join(os.tmpdir(), `phase0-export-outside-${process.pid}.json`);

  for (const probe of [probeProduction, probeCrowdin, probeOutside]) {
    if (fs.existsSync(probe)) fs.unlinkSync(probe);
  }

  // --out without --write must not write (including production paths)
  const dryOut = runExportCli(`--group g2 --level a1 --lang lv --out ${probeProduction}`);
  tests.push({ name: "out_without_write_exit", exitCode: dryOut.exitCode });
  if (dryOut.exitCode !== 0) {
    issues.push(`--out without --write exited ${dryOut.exitCode} (expected 0 dry-run)`);
  }
  if (fs.existsSync(probeProduction)) {
    issues.push("--out without --write created production file");
    fs.unlinkSync(probeProduction);
  }

  // default dry-run must not write default crowdin target
  const defaultTarget = path.join(ROOT, "crowdin", "content", "g2", "lv-a1.json");
  const hadDefault = fs.existsSync(defaultTarget);
  const defaultBefore = hadDefault ? fs.statSync(defaultTarget).mtimeMs : null;
  const dryDefault = runExportCli("--group g2 --level a1 --lang lv");
  tests.push({ name: "default_dry_run_exit", exitCode: dryDefault.exitCode });
  if (dryDefault.exitCode !== 0) {
    issues.push(`default dry-run exited ${dryDefault.exitCode}`);
  }
  if (!hadDefault && fs.existsSync(defaultTarget)) {
    issues.push("default dry-run created crowdin output file");
    fs.unlinkSync(defaultTarget);
  }
  if (hadDefault && fs.existsSync(defaultTarget) && fs.statSync(defaultTarget).mtimeMs !== defaultBefore) {
    issues.push("default dry-run modified existing crowdin output file");
  }

  // --write --out outside crowdin/ must fail
  const outside = runExportCli(`--group g2 --level a1 --lang lv --write --out ${probeOutside}`);
  tests.push({ name: "write_outside_crowdin_exit", exitCode: outside.exitCode });
  if (outside.exitCode === 0) {
    issues.push("--write --out outside crowdin/ succeeded (should fail)");
  }
  if (fs.existsSync(probeOutside)) {
    issues.push("--write --out outside crowdin/ created file");
    fs.unlinkSync(probeOutside);
  }

  // --write under crowdin/ must succeed
  const writeCrowdin = runExportCli(`--group g2 --level a1 --lang lv --write --out ${probeCrowdin}`);
  tests.push({ name: "write_under_crowdin_exit", exitCode: writeCrowdin.exitCode });
  if (writeCrowdin.exitCode !== 0) {
    issues.push(`--write under crowdin/ failed (exit ${writeCrowdin.exitCode})`);
  }
  if (!fs.existsSync(probeCrowdin)) {
    issues.push("--write under crowdin/ did not create file");
  } else {
    fs.unlinkSync(probeCrowdin);
  }

  return {
    pass: issues.length === 0,
    note:
      issues.length === 0
        ? "export-content-crowdin.js dry-run enforced; --write only under crowdin/ (execution verified)"
        : "export script execution safety checks failed",
    issues,
    tests,
  };
}

module.exports = {
  verifyBridgeLibrary,
  verifyExportDryRunOnly,
};
