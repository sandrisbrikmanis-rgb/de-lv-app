#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { createLunaTransport } = require("../luna-transport");
const { runBatchedAdapter } = require("../luna-adapter-runner");
const { buildLunaRequestPayload, getLegacyObjectId } = require("../phase1-luna-checkpoint/object-identity");
const { splitObjectsIntoBatches } = require("../phase1-luna-checkpoint/batch-split");
const { isApiKeyConfigured } = require("../luna-phase1-openai");
const { authorizeFullProductionCurrentAudit } = require("./authorize-full-run");
const { buildProductionFileSetInventory } = require("./inventory");
const { buildBatchManifest } = require("./batch-manifest");
const { buildTechnicalInventoryRowsForLanguage } = require("./audit-rows");
const { mergeInventoryWithLunaResults } = require("./luna-apvienots-mapper");
const { buildFullDiscoveryMetadata } = require("./full-discovery-metadata");
const { buildOwnerArtifactsFromEvidence } = require("./owner-artifacts");
const { writeJsonAtomic } = require("./artifacts");
const { verifyPostRunClosure } = require("./post-run-verify");
const { tallyAuditedRecords, validateCoverageEquation } = require("./coverage");
const {
  AUDIT_LANGUAGES,
  G2_A1_BATCH_LIMITS,
  RECORD_KIND,
} = require("./constants");
const {
  loadG2ProductionObjects,
  splitObjectsByCardType,
  getBatchSizeForCardType,
} = require("./objects");

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function verifyG2BatchLimitsOnly() {
  const manifest = buildBatchManifest();
  const limits = G2_A1_BATCH_LIMITS;
  const pass =
    manifest.pass &&
    limits.ordinary === 25 &&
    limits.minimalStudy === 10 &&
    limits.standardStudy === 5 &&
    manifest.g2A1Limits?.ordinary === 25;
  return { pass, manifest, limits };
}

async function runLunaBatchesForLanguage(lang, transport, options = {}) {
  const scopeId = `g2/a1/production-current/${lang}`;
  const objects = loadG2ProductionObjects(lang);
  const groups = splitObjectsByCardType(objects);
  const allItems = [];
  let stats = { lunaCalls: 0, batches: 0, retries: 0 };

  for (const [cardType, groupObjects] of Object.entries(groups)) {
    if (!groupObjects.length) continue;
    const limitKey =
      cardType === "comparisonStudy" ? "standardStudy" : cardType in G2_A1_BATCH_LIMITS ? cardType : "ordinary";
    const maxAllowed =
      cardType === "comparisonStudy"
        ? G2_A1_BATCH_LIMITS.comparisonStudyUsesStandardStudyLimit
        : G2_A1_BATCH_LIMITS[limitKey] || G2_A1_BATCH_LIMITS.ordinary;
    const batchSize = getBatchSizeForCardType(cardType === "comparisonStudy" ? "standardStudy" : cardType);
    if (batchSize !== maxAllowed) {
      throw new Error(`BATCH_LIMIT_MISMATCH:${lang}:${cardType}:${batchSize}:expected:${maxAllowed}`);
    }
    const subBatches = splitObjectsIntoBatches(groupObjects, batchSize);
    for (let batchIndex = 0; batchIndex < subBatches.length; batchIndex++) {
      const batch = subBatches[batchIndex];
      if (batch.length > batchSize) throw new Error(`BATCH_OVERSIZE:${lang}:${cardType}:${batch.length}`);
      const result = await runBatchedAdapter({
        transport,
        objects: batch,
        getId: getLegacyObjectId,
        serialize: (obj) => buildLunaRequestPayload(scopeId, obj),
        batchSize,
        scopeId: `${scopeId}:${cardType}:${batchIndex}`,
        adapterName: "g2-production-current-full-discovery",
        missingCanonicalIdRetry: true,
        cardType,
      });
      stats.lunaCalls += result.stats?.realCalls || 0;
      stats.batches += result.stats?.batches || 0;
      stats.retries += result.stats?.retries || 0;
      if (!result.ok) {
        return {
          ok: false,
          lang,
          reason: result.reason,
          stats,
          items: allItems,
        };
      }
      const items = (result.results || []).map((item) => ({
        ...item,
        lang,
        productionFile: objects[0]?.productionFile,
      }));
      allItems.push(...items);
    }
  }

  return { ok: true, lang, stats, items: allItems, objects: objects.length };
}

function writeFullDiscoveryArtifactSet(bundle, meta) {
  const prefix = meta.artifactPrefix || "full-discovery";
  const written = {};
  written.metadata = writeJsonAtomic(`${prefix}-metadata.json`, bundle.metadata);
  written.evidence = writeJsonAtomic("full-audit-evidence.json", bundle.fullAuditEvidence);
  written.passEvidence = writeJsonAtomic("audit-pass-evidence.json", bundle.auditPassEvidence);
  written.ownerView = writeJsonAtomic("owner-view.json", bundle.ownerView);
  written.ownerDecisions = writeJsonAtomic("owner-decisions.json", bundle.ownerDecisions);
  written.finalCards = writeJsonAtomic("final-cards-findings.json", bundle.finalCardsFindings);
  written.coverage = writeJsonAtomic("coverage-summary.json", {
    coverageSummary: bundle.coverageSummary,
    coverageValidation: bundle.coverageValidation,
  });
  written.batchManifest = writeJsonAtomic("full-discovery-batch-manifest.json", bundle.batchManifest);
  written.repro = writeJsonAtomic("reproducibility-manifest.json", bundle.reproducibilityManifest);
  written.postRun = writeJsonAtomic("post-run-verification.json", bundle.postRunVerification);
  if (bundle.ownerCsvMultipart) {
    written.csvMultipart = writeJsonAtomic("owner-decisions-csv-multipart.json", bundle.ownerCsvMultipart);
  }
  return written;
}

async function runFullDiscoveryAudit(options = {}) {
  const blockers = [];
  const executeLuna = options.executeLuna === true;

  const auth = authorizeFullProductionCurrentAudit({
    ownerAuthorizeFullAudit: options.ownerAuthorizeFullAudit === true,
    expectedMainSha: options.expectedMainSha,
    expectedProductionFileSetSha: options.expectedProductionFileSetSha,
    baseRef: options.baseRef || "origin/main",
  });
  if (!auth.pass) {
    return { pass: false, phase: "authorization", blockers: auth.blockers, linguisticAuditsExecuted: 0 };
  }

  const batchGate = verifyG2BatchLimitsOnly();
  if (!batchGate.pass) blockers.push({ code: "G2_BATCH_LIMITS", detail: batchGate });

  const inventory = buildProductionFileSetInventory();
  if (!inventory.gate.pass) blockers.push({ code: "FILE_SET", gate: inventory.gate });

  if (executeLuna && !options.transport && !isApiKeyConfigured()) {
    blockers.push({ code: "OPENAI_API_KEY_MISSING", message: "Required for executeLuna without mock transport" });
  }

  if (blockers.length) {
    return { pass: false, phase: "preflight", blockers, linguisticAuditsExecuted: 0 };
  }

  const headSha = git("git rev-parse HEAD");
  const originMainSha = git("git rev-parse origin/main");
  const auditBaselineSha = inventory.gate.productionFileSetSha256;

  if (!executeLuna) {
    const metadata = buildFullDiscoveryMetadata({
      executeLuna: false,
      datasetProductionSha: auditBaselineSha,
      auditBaselineSha,
      originMainSha,
      headSha,
    });
    return {
      pass: true,
      phase: "full-discovery-ready",
      authorization: auth,
      metadata,
      batchManifest: batchGate.manifest,
      inventoryGate: inventory.gate,
      auditLanguages: AUDIT_LANGUAGES.length,
      expectedInventoryRows: "run dry-run for count",
      linguisticAuditsExecuted: 0,
      message:
        "FULL LINGUISTIC DISCOVERY executor ready. Re-run with executeLuna:true (--with-luna) after OWNER runtime authorization.",
    };
  }

  const transport = options.transport || createLunaTransport({ mode: "real" });
  const allRecords = [];
  const perLang = [];
  let lunaCalls = 0;

  for (const lang of AUDIT_LANGUAGES) {
    const row = inventory.rows.find((r) => r.language === lang);
    const datasetProductionSha = row?.dataSha256 || null;
    const inventoryRows = buildTechnicalInventoryRowsForLanguage(lang, datasetProductionSha, auditBaselineSha);
    const lunaResult = await runLunaBatchesForLanguage(lang, transport, options);
    if (!lunaResult.ok) {
      return {
        pass: false,
        phase: "luna",
        lang,
        reason: lunaResult.reason,
        linguisticAuditsExecuted: 1,
        partialRecords: allRecords.length,
      };
    }
    lunaCalls += lunaResult.stats.lunaCalls;
    const merged = mergeInventoryWithLunaResults(inventoryRows, lunaResult.items, lang);
    if (merged.errors.length) {
      return { pass: false, phase: "map", lang, mapErrors: merged.errors.slice(0, 5) };
    }
    allRecords.push(...merged.records);
    perLang.push({
      language: lang,
      inventoryRows: inventoryRows.length,
      lunaItems: lunaResult.items.length,
      auditRecords: merged.records.length,
    });
  }

  const coverage = validateCoverageEquation(tallyAuditedRecords(allRecords));
  const metadata = buildFullDiscoveryMetadata({
    executeLuna: true,
    datasetProductionSha: auditBaselineSha,
    auditBaselineSha,
    originMainSha,
    headSha,
    coverageSummary: coverage.counts,
  });

  const ownerBundle = buildOwnerArtifactsFromEvidence(allRecords, {
    auditBaselineSha,
    datasetProductionSha: auditBaselineSha,
    originMainSha,
    batchManifest: batchGate.manifest,
  });

  const postRun = verifyPostRunClosure(
    {
      fullAuditEvidence: ownerBundle.fullAuditEvidence,
      ownerView: ownerBundle.ownerView,
      ownerCsvMultipart: ownerBundle.ownerCsvMultipart,
      startFileSetSha: auditBaselineSha,
      endFileSetSha: auditBaselineSha,
    },
    options.postRunOptions || {},
  );

  const fullBundle = {
    ...ownerBundle,
    metadata,
    batchManifest: batchGate.manifest,
    postRunVerification: postRun,
    perLang,
    lunaCalls,
  };

  let artifacts = null;
  if (options.writeArtifacts) {
    artifacts = writeFullDiscoveryArtifactSet(fullBundle, options);
  }

  return {
    pass: postRun.pass && ownerBundle.pass,
    phase: "full-discovery-complete",
    metadata,
    coverage: coverage.counts,
    postRun,
    linguisticAuditsExecuted: 1,
    totalRecords: allRecords.length,
    lunaCalls,
    artifacts,
    recordKind: RECORD_KIND.AUDITED_EVIDENCE,
  };
}

module.exports = {
  runFullDiscoveryAudit,
  runLunaBatchesForLanguage,
  verifyG2BatchLimitsOnly,
  writeFullDiscoveryArtifactSet,
};
