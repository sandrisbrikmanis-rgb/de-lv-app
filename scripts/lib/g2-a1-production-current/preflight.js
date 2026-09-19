#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { runMasterPremergeVerify } = require("../master-premerge-verify-core");
const { verifyEmbeddedLanguageRegistry } = require("../official-language-sources-registry");
const { buildProductionFileSetInventory } = require("./inventory");
const {
  AUDIT_LANGUAGES,
  MASTER_AUTHORIZED_MIN,
  MASTER_SEMANTIC_FLOOR,
  EXPECTED_APP_LANGUAGES,
} = require("./constants");

const MASTER_PATH = path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md");

function readMasterVersion() {
  const doc = fs.readFileSync(MASTER_PATH, "utf8");
  const m = doc.match(/\*\*Versija:\*\* ([\d.]+)/);
  return m ? m[1] : "UNKNOWN";
}

function runPreflight(options = {}) {
  const baseRef = options.baseRef || "origin/main";
  const masterVersion = readMasterVersion();
  const masterPremerge = runMasterPremergeVerify({ baseRef });
  const embeddedRegistry = verifyEmbeddedLanguageRegistry(ROOT);
  const inventory = buildProductionFileSetInventory();

  const langSet = new Set(AUDIT_LANGUAGES);
  const languageGate = {
    EXPECTED_APP_LANGUAGES,
    ACTUAL_AUDIT_LANGUAGES: langSet.size,
    MISSING_AUDIT_LANGUAGES: EXPECTED_APP_LANGUAGES - langSet.size,
    DUPLICATE_AUDIT_LANGUAGES: AUDIT_LANGUAGES.length - langSet.size,
    UNKNOWN_AUDIT_LANGUAGES: 0,
    pass:
      langSet.size === EXPECTED_APP_LANGUAGES &&
      AUDIT_LANGUAGES.length === EXPECTED_APP_LANGUAGES,
  };

  const versionPass =
    masterVersion !== "UNKNOWN" &&
    compareSemver(masterVersion, MASTER_AUTHORIZED_MIN) >= 0 &&
    compareSemver(masterVersion, MASTER_SEMANTIC_FLOOR) >= 0;

  const blockers = [];
  if (!versionPass) {
    blockers.push({
      code: "MASTER_VERSION",
      message: `Need >= ${MASTER_AUTHORIZED_MIN}, got ${masterVersion}`,
    });
  }
  if (masterPremerge.MASTER_V1_12_PREMERGE_VERIFY !== "PASS") {
    blockers.push({ code: "MASTER_PREMERGE", message: "MASTER_V1_12_PREMERGE_VERIFY FAIL" });
  }
  if (!embeddedRegistry.pass) {
    blockers.push({
      code: "EMBEDDED_REGISTRY",
      message: embeddedRegistry.blockerMessage || "embedded registry fail",
    });
  }
  if (!inventory.gate.pass) {
    blockers.push({ code: "FILE_SET", message: JSON.stringify(inventory.gate) });
  }
  if (!languageGate.pass) {
    blockers.push({ code: "LANGUAGE_SCOPE", message: JSON.stringify(languageGate) });
  }

  return {
    pass: blockers.length === 0,
    masterVersion,
    masterAuthorizedMin: MASTER_AUTHORIZED_MIN,
    masterSemanticFloor: MASTER_SEMANTIC_FLOOR,
    masterPremerge,
    embeddedRegistry,
    inventory,
    languageGate,
    blockers,
  };
}

function compareSemver(a, b) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    const da = pa[i] || 0;
    const db = pb[i] || 0;
    if (da !== db) return da - db;
  }
  return 0;
}

module.exports = {
  runPreflight,
  readMasterVersion,
};
