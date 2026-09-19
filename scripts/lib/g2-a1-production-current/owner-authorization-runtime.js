#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { AUDIT_LANGUAGES, MASTER_AUTHORIZED_MIN } = require("./constants");
const { buildProductionFileSetInventory } = require("./inventory");
const { buildAuditScopeInventory } = require("./audit-scope-inventory");
const { buildBatchManifest } = require("./batch-manifest");
const { runPreflight } = require("./preflight");
const { readMasterVersion } = require("./preflight");
const { verifyEmbeddedLanguageRegistry } = require("../official-language-sources-registry");
const { RUNTIME_ABS, RUNTIME_REL, STALE_TRACKED_ABS } = require("./owner-authorization-paths");

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function buildFullAuditCommand(mainSha, fileSetSha) {
  return (
    "node scripts/run-g2-a1-production-current-full-discovery.js --full " +
    "--owner-authorize-full-audit " +
    `--expected-main-sha=${mainSha} ` +
    `--expected-production-file-set-sha=${fileSetSha}`
  );
}

function validateRuntimeGenerationGates(options = {}) {
  const blockers = [];
  const skipFetch = options.skipFetch === true;

  if (!skipFetch) {
    try {
      git("git fetch origin");
    } catch (e) {
      blockers.push({ code: "GIT_FETCH_FAIL", message: String(e.message || e) });
    }
  }

  let headSha = "";
  let originMainSha = "";
  try {
    headSha = git("git rev-parse HEAD");
    originMainSha = git("git rev-parse origin/main");
  } catch (e) {
    blockers.push({ code: "GIT_REV_PARSE_FAIL", message: String(e.message || e) });
  }

  if (headSha && originMainSha && headSha !== originMainSha) {
    blockers.push({ code: "HEAD_NOT_ORIGIN_MAIN", headSha, originMainSha });
  }

  const dirty = git("git diff --name-only -- data www/data crowdin/content crowdin/ui");
  if (dirty) {
    blockers.push({ code: "WORKTREE_DIRTY", paths: dirty.split("\n").filter(Boolean) });
  }

  const untrackedProd = git("git status --porcelain -- data www/data crowdin/content crowdin/ui");
  if (untrackedProd) {
    blockers.push({ code: "WORKTREE_UNTRACKED_PRODUCTION_PATHS", detail: untrackedProd });
  }

  if (fs.existsSync(STALE_TRACKED_ABS)) {
    blockers.push({
      code: "STALE_TRACKED_AUTHORIZATION_PACKAGE",
      path: STALE_TRACKED_ABS,
      message: "Remove tracked OWNER_AUTHORIZATION_PACKAGE.json; use template + runtime generator",
    });
  }

  const preflight = runPreflight(options.preflightOptions || {});
  if (!preflight.pass) {
    blockers.push({ code: "PREFLIGHT_FAIL", detail: preflight.blockers });
  }

  const inventory = buildProductionFileSetInventory();
  if (!inventory.gate.pass) {
    blockers.push({ code: "FILE_SET_FAIL", gate: inventory.gate });
  }

  return {
    pass: blockers.length === 0,
    blockers,
    headSha,
    originMainSha,
    preflight,
    inventory,
  };
}

function assembleRuntimePackage(gates) {
  const { inventory, headSha, originMainSha } = gates;
  const scope = buildAuditScopeInventory();
  const batch = buildBatchManifest();
  const registry = verifyEmbeddedLanguageRegistry(ROOT);
  const fileSetSha = inventory.gate.productionFileSetSha256;

  return {
    classification: "G2_A1_FULL_LINGUISTIC_DISCOVERY_AUDIT_OWNER_AUTHORIZATION_RUNTIME",
    artifactKind: "RUNTIME_ONLY_DO_NOT_COMMIT",
    generatedAt: new Date().toISOString(),
    headSha,
    originMainSha,
    headMatchesOriginMain: headSha === originMainSha,
    worktreeCleanForProductionPaths: true,
    MASTER_VERSION: readMasterVersion(),
    MASTER_AUTHORIZED_MIN,
    LANGUAGE_AUTHORITY_REGISTRY: registry.registryDocument,
    EMBEDDED_LANGUAGE_REGISTRY_COUNT: registry.EMBEDDED_LANGUAGE_REGISTRY_COUNT,
    embeddedRegistryPass: registry.pass,
    AUDIT_LANGUAGES,
    productionFileSetSha256: fileSetSha,
    fileSetGate: inventory.gate,
    fileSetManifest: inventory.rows.map((r) => ({
      language: r.language,
      productionFile: r.productionFile,
      wwwMirrorFile: r.wwwMirrorFile,
      cards: r.cards,
      flatAuditKeys: r.flatAuditKeys,
    })),
    scope: {
      totalAuditRows: scope.totalAuditRows,
      totalCards: scope.totalCards,
      cardTypeTotals: scope.cardTypeTotals,
      perLanguageRows: scope.perLanguage.map((p) => ({
        language: p.language,
        cards: p.cards,
        auditRows: p.auditRows,
      })),
    },
    batchPlan: batch,
    CURRENT_SOURCE: "data/a1.js (lv) | data/<lang>/a1.js",
    AUDIT_SOURCE: "production-current",
    forbiddenDuringAudit: [
      "modify production data/** or www/data/** without authorized COPY-ONLY apply",
      "use crowdin-staging as CURRENT",
    ],
    fullAuditCommand: buildFullAuditCommand(originMainSha, fileSetSha),
    requiredAuthorizationFlags: [
      "--owner-authorize-full-audit",
      "--expected-main-sha=<current full origin/main SHA at audit time>",
      "--expected-production-file-set-sha=<current 64-file composite SHA at audit time>",
    ],
    expectedArtifacts: [
      "reports/g2-a1-production-current/full-audit-evidence.json",
      "reports/g2-a1-production-current/owner-view.json",
      "reports/g2-a1-production-current/coverage-summary.json",
      "reports/g2-a1-production-current/reproducibility-manifest.json",
      "post-run verify PASS",
    ],
    FULL_LINGUISTIC_DISCOVERY_AUDIT_EXECUTED: 0,
  };
}

function writeRuntimePackage(options = {}) {
  const gates = validateRuntimeGenerationGates(options);
  if (!gates.pass) {
    return { pass: false, blockers: gates.blockers, path: RUNTIME_REL, written: false };
  }

  const pkg = assembleRuntimePackage(gates);
  fs.mkdirSync(path.dirname(RUNTIME_ABS), { recursive: true });
  fs.writeFileSync(RUNTIME_ABS, `${JSON.stringify(pkg, null, 2)}\n`, "utf8");

  return {
    pass: true,
    blockers: [],
    path: RUNTIME_REL,
    written: true,
    package: pkg,
    headSha: pkg.headSha,
    originMainSha: pkg.originMainSha,
    productionFileSetSha256: pkg.productionFileSetSha256,
  };
}

module.exports = {
  validateRuntimeGenerationGates,
  assembleRuntimePackage,
  writeRuntimePackage,
  buildFullAuditCommand,
};
