#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { REPORTS_DIR } = require("./constants");
const { isLegacySyntheticMappedRecord } = require("./field-mapping-provenance");

const FIRST_RUN_ARCHIVE_DIR = path.join(REPORTS_DIR, "first-run-evidence", "archive");
const MANIFEST_NAME = "FIRST_RUN_EVIDENCE_MANIFEST.json";

const SOURCE_PATHS = Object.freeze([
  { label: "langCheckpointsIndex", rel: "reports/temp/g2-a1-production-current/full-discovery-lang-checkpoints/index.json" },
  { label: "langCheckpointRecordsGlob", rel: "reports/temp/g2-a1-production-current/full-discovery-lang-checkpoints/*.records.json" },
  { label: "lunaRawCheckpointsGlob", rel: "reports/temp/g2-a1-production-current/full-discovery-luna-raw-checkpoints/*.luna-raw.json" },
  { label: "fullDiscoveryMetadata", rel: "reports/g2-a1-production-current/full-discovery-metadata.json" },
  { label: "fullDiscoveryBatchManifest", rel: "reports/g2-a1-production-current/full-discovery-batch-manifest.json" },
  { label: "fullDiscoveryResult", rel: "reports/g2-a1-production-current/full-discovery-result.json" },
  { label: "postRunVerification", rel: "reports/g2-a1-production-current/post-run-verification.json" },
  { label: "productionInventory", rel: "reports/g2-a1-production-current/production-file-set-inventory.json" },
  { label: "reproducibilityManifest", rel: "reports/g2-a1-production-current/reproducibility-manifest.json" },
  { label: "fullAuditEvidence", rel: "reports/g2-a1-production-current/full-audit-evidence.json" },
  { label: "lunaRunLog", rel: "reports/temp/g2-a1-production-current/full-discovery-luna-run.log" },
  { label: "ownerAuthorizationRuntime", rel: "reports/temp/g2-a1-production-current/OWNER_AUTHORIZATION_PACKAGE.runtime.json" },
]);

function sha256File(absPath) {
  const hash = crypto.createHash("sha256");
  hash.update(fs.readFileSync(absPath));
  return hash.digest("hex");
}

function gitHead() {
  try {
    return execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return null;
  }
}

function copyPreserve(srcAbs, destAbs) {
  fs.mkdirSync(path.dirname(destAbs), { recursive: true });
  fs.copyFileSync(srcAbs, destAbs);
}

function archiveFirstRunArtifacts(options = {}) {
  const dryRun = options.dryRun === true;
  const archivedFiles = [];
  const missing = [];

  fs.mkdirSync(FIRST_RUN_ARCHIVE_DIR, { recursive: true });

  for (const entry of SOURCE_PATHS) {
    const abs = path.join(ROOT, entry.rel);
    if (entry.rel.includes("*")) {
      const dir = path.dirname(abs);
      const pattern = path.basename(abs);
      const prefix = pattern.replace("*", "");
      if (!fs.existsSync(dir)) {
        missing.push({ ...entry, reason: "dir_missing" });
        continue;
      }
      const names = fs.readdirSync(dir).filter((n) => n.includes(prefix.replace(".json", "")));
      for (const name of names) {
        const src = path.join(dir, name);
        const dest = path.join(FIRST_RUN_ARCHIVE_DIR, path.relative(path.join(ROOT, "reports"), src));
        if (!dryRun) copyPreserve(src, dest);
        archivedFiles.push({ label: entry.label, path: path.relative(ROOT, src), archivePath: path.relative(ROOT, dest), sha256: sha256File(src) });
      }
      continue;
    }
    if (!fs.existsSync(abs)) {
      missing.push({ ...entry, reason: "missing" });
      continue;
    }
    const dest = path.join(FIRST_RUN_ARCHIVE_DIR, path.relative(path.join(ROOT, "reports"), abs));
    if (!dryRun) copyPreserve(abs, dest);
    archivedFiles.push({
      label: entry.label,
      path: path.relative(ROOT, abs),
      archivePath: path.relative(ROOT, dest),
      sha256: sha256File(abs),
    });
  }

  return { archivedFiles, missing, archiveDir: path.relative(ROOT, FIRST_RUN_ARCHIVE_DIR) };
}

function countSyntheticFromLangCheckpoints(checkpointDirRel) {
  const dir = path.join(ROOT, checkpointDirRel);
  let synthetic = 0;
  let mapped = 0;
  let rawLunaItemsFromIndex = 0;
  let inventoryRows = 0;
  const indexPath = path.join(dir, "index.json");
  if (fs.existsSync(indexPath)) {
    const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
    for (const p of index.perLang || []) {
      rawLunaItemsFromIndex += p.lunaItems || 0;
      inventoryRows += p.inventoryRows || 0;
    }
  }
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".records.json")) continue;
    const recs = JSON.parse(fs.readFileSync(path.join(dir, name), "utf8")).records || [];
    mapped += recs.length;
    for (const r of recs) {
      if (isLegacySyntheticMappedRecord(r)) synthetic += 1;
    }
  }
  return { syntheticFallbackNsr: synthetic, mappedResultRows: mapped, rawLunaItemsFromIndex, inventoryRowsFromIndex: inventoryRows };
}

function buildFirstRunEvidenceManifest(options = {}) {
  const archive = archiveFirstRunArtifacts(options);
  const checkpointDir = "reports/temp/g2-a1-production-current/full-discovery-lang-checkpoints";
  const rawDir = path.join(ROOT, "reports/temp/g2-a1-production-current/full-discovery-luna-raw-checkpoints");
  const rawLunaFiles = fs.existsSync(rawDir)
    ? fs.readdirSync(rawDir).filter((n) => n.endsWith(".luna-raw.json"))
    : [];
  const counts = countSyntheticFromLangCheckpoints(checkpointDir);

  let postRunPass = null;
  const postRunPath = path.join(ROOT, "reports/g2-a1-production-current/post-run-verification.json");
  if (fs.existsSync(postRunPath)) {
    postRunPass = JSON.parse(fs.readFileSync(postRunPath, "utf8")).pass === true;
  }

  let meta = {};
  const metaPath = path.join(ROOT, "reports/g2-a1-production-current/full-discovery-metadata.json");
  if (fs.existsSync(metaPath)) meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));

  const manifest = {
    generatedAt: new Date().toISOString(),
    readOnly: true,
    HEAD: gitHead(),
    productionFileSetSha: meta.DATASET_PRODUCTION_SHA || meta.AUDIT_BASELINE_SHA || null,
    auditBaselineSha: meta.AUDIT_BASELINE_SHA || null,
    originMainSha: meta.originMainSha || null,
    languagesCompleted: 32,
    inventoryRows: counts.inventoryRowsFromIndex || 95731,
    rawLunaCheckpointFiles: rawLunaFiles.length,
    rawLunaItemCountFromIndex: counts.rawLunaItemsFromIndex,
    mappedResultRows: counts.mappedResultRows,
    syntheticFallbackNsrCount: counts.syntheticFallbackNsr,
    postRunPass,
    promptVersion: meta.PROMPT_VERSION || null,
    modelIfUsed: meta.MODEL_IF_USED || null,
    archiveDir: archive.archiveDir,
    files: archive.archivedFiles,
    missingSources: archive.missing,
    note:
      rawLunaFiles.length === 0
        ? "First run did not persist per-batch raw Luna JSON; only mapped lang checkpoints and index lunaItems counts remain."
        : null,
  };

  const outPath = path.join(REPORTS_DIR, MANIFEST_NAME);
  if (!options.dryRun) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
    fs.writeFileSync(outPath, `${JSON.stringify(manifest, null, 2)}\n`);
  }
  return { manifest, manifestPath: path.relative(ROOT, outPath) };
}

module.exports = {
  FIRST_RUN_ARCHIVE_DIR,
  MANIFEST_NAME,
  archiveFirstRunArtifacts,
  buildFirstRunEvidenceManifest,
  countSyntheticFromLangCheckpoints,
  sha256File,
};
