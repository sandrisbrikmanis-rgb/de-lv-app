#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const { hashCheckpointManifest } = require("./lib/phase1-report-finalization");
const { deduplicateFindings } = require("./lib/content-discovery/phase1-findings-dedup");
const { validateFindings } = require("./lib/content-discovery/phase1-findings-validation");

const RUN_ID = process.argv[2] || "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";
const HEAD = "c1c47ff7bbb99004e9ec88c59287f29dad7593cb";
const OUT = `/tmp/cursor/artifacts/phase1-report-repair-evidence-${HEAD.slice(0, 8)}.json`;

function sha256File(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

const matrixPath = path.join(ROOT, "reports", "phase1-discovery-matrix.json");
const ownerPrepDir = path.join(ROOT, "reports", "phase1-owner-prep");
const matrix = JSON.parse(fs.readFileSync(matrixPath, "utf8"));
let dedup = { pass: matrix.validation?.pass, conflicts: matrix.validation?.dedupConflicts || [] };
try {
  dedup = deduplicateFindings(matrix.findings || []);
} catch (error) {
  dedup = { pass: false, conflicts: [], error: error.message };
}

let validateError = null;
let validation = null;
try {
  validation = validateFindings(matrix.findings || []);
} catch (error) {
  validateError = { code: error.code, message: error.message };
}

const ownerPrepFiles = fs.existsSync(ownerPrepDir)
  ? fs.readdirSync(ownerPrepDir).map((name) => ({
      name,
      sha256: sha256File(path.join(ownerPrepDir, name)),
    }))
  : [];

const productionDiffBytes = Number(
  require("child_process").execSync("git diff origin/main -- production/ 2>/dev/null | wc -c", {
    encoding: "utf8",
    cwd: ROOT,
  }).trim(),
);
const deDiffBytes = Number(
  require("child_process").execSync("git diff origin/main -- DE/ 2>/dev/null | wc -c", {
    encoding: "utf8",
    cwd: ROOT,
  }).trim(),
);

const evidence = {
  generatedAt: new Date().toISOString(),
  head: HEAD,
  runId: RUN_ID,
  checkpointManifest: hashCheckpointManifest(RUN_ID),
  matrixSha256: sha256File(matrixPath),
  ownerPrepSha256: ownerPrepFiles,
  productionDiffBytes,
  deDiffBytes,
  matrixValidation: matrix.validation,
  dedupConflictCount: matrix.validation?.dedupConflicts?.length || dedup.conflicts.length,
  dedupPass: dedup.pass,
  idxUnknownCount: (matrix.findings || []).filter(
    (f) => String(f.findingStableId || "").includes("idx:?|") || f.objectIndex == null,
  ).length,
  duplicateAuditIds: (() => {
    const ids = (matrix.findings || []).map((f) => f.auditId).filter(Boolean);
    return ids.length - new Set(ids).size;
  })(),
  validateFindingsReRun: validation
    ? { pass: validation.pass, schemaErrorCount: validation.schemaErrorCount }
    : { error: validateError },
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(evidence, null, 2)}\n`);
console.log(JSON.stringify({ out: OUT, checkpointCount: evidence.checkpointManifest.count, dedupConflicts: evidence.dedupConflictCount }, null, 2));
