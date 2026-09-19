#!/usr/bin/env node
"use strict";
/**
 * OWNER authorization package (metadata only — does NOT run full linguistic audit).
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { AUDIT_LANGUAGES, MASTER_AUTHORIZED_MIN } = require("./lib/g2-a1-production-current/constants");
const { buildProductionFileSetInventory } = require("./lib/g2-a1-production-current/inventory");
const { buildAuditScopeInventory } = require("./lib/g2-a1-production-current/audit-scope-inventory");
const { buildBatchManifest } = require("./lib/g2-a1-production-current/batch-manifest");
const { readMasterVersion } = require("./lib/g2-a1-production-current/preflight");
const { verifyEmbeddedLanguageRegistry } = require("./lib/official-language-sources-registry");

function main() {
  const originMainSha = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  const headSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const inventory = buildProductionFileSetInventory();
  const scope = buildAuditScopeInventory();
  const batch = buildBatchManifest();
  const registry = verifyEmbeddedLanguageRegistry(ROOT);

  const pkg = {
    classification: "G2_A1_FULL_LINGUISTIC_DISCOVERY_AUDIT_OWNER_AUTHORIZATION_PACKAGE",
    generatedAt: new Date().toISOString(),
    originMainSha,
    headSha,
    headMatchesOriginMain: headSha === originMainSha,
    MASTER_VERSION: readMasterVersion(),
    MASTER_AUTHORIZED_MIN,
    LANGUAGE_AUTHORITY_REGISTRY: registry.registryDocument,
    EMBEDDED_LANGUAGE_REGISTRY_COUNT: registry.EMBEDDED_LANGUAGE_REGISTRY_COUNT,
    AUDIT_LANGUAGES,
    productionFileSetSha256: inventory.gate.productionFileSetSha256,
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
    fullAuditCommand:
      "node scripts/run-g2-a1-production-current-full-discovery.js --full " +
      "--owner-authorize-full-audit " +
      `--expected-main-sha=${originMainSha} ` +
      `--expected-production-file-set-sha=${inventory.gate.productionFileSetSha256}`,
    requiredAuthorizationFlags: [
      "--owner-authorize-full-audit",
      "--expected-main-sha=<full origin/main SHA>",
      "--expected-production-file-set-sha=<64-file composite SHA>",
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

  const outDir = path.join(ROOT, "reports", "g2-a1-production-current");
  fs.mkdirSync(outDir, { recursive: true });
  const rel = "reports/g2-a1-production-current/OWNER_AUTHORIZATION_PACKAGE.json";
  fs.writeFileSync(path.join(ROOT, rel), `${JSON.stringify(pkg, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ pass: true, path: rel, originMainSha, productionFileSetSha256: pkg.productionFileSetSha256 }, null, 2));
}

main();
