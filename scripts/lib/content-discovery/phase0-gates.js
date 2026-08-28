#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
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

function verifyExportDryRunOnly() {
  const exportPath = path.join(ROOT, "scripts/export-content-crowdin.js");
  if (!fs.existsSync(exportPath)) {
    return { pass: false, note: "export-content-crowdin.js missing" };
  }

  const source = fs.readFileSync(exportPath, "utf8");
  const issues = [];

  if (!/let\s+dryRun\s*=\s*true/.test(source)) {
    issues.push("default dryRun is not true");
  }
  if (!/dryRun\s*&&\s*!out/.test(source) && !/if\s*\(\s*dryRun/.test(source)) {
    issues.push("dry-run guard before write not found");
  }
  if (/writeFileSync\([^)]*['"`]data\//.test(source)) {
    issues.push("export script may write directly to data/");
  }
  if (/writeFileSync\([^)]*['"`]www\/data\//.test(source)) {
    issues.push("export script may write directly to www/data/");
  }
  if (/writeFileSync\([^)]*['"`]languages\//.test(source)) {
    issues.push("export script may write directly to languages/");
  }

  const defaultTarget = source.match(/path\.join\([^)]*crowdin/);
  if (!defaultTarget) {
    issues.push("default export target under crowdin/ not found");
  }

  return {
    pass: issues.length === 0,
    note: issues.length === 0
      ? "export-content-crowdin.js dry-run by default; writes only to crowdin/ with --write"
      : "export script safety checks failed",
    issues,
  };
}

module.exports = {
  verifyBridgeLibrary,
  verifyExportDryRunOnly,
};
