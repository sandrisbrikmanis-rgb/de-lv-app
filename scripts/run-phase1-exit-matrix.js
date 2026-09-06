#!/usr/bin/env node
"use strict";

/**
 * Phase 1 exit matrix (F1-1…F1-9) — F0-COMP-12.
 * Distinguishes F0 completion vs full Phase 1 completion states.
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const { runBaselineGate } = require("./lib/content-discovery/baseline-gate");
const { gitProductionDiffAgainstBaseline } = require("./lib/content-discovery/git-baseline");
const { evaluateAllCoverageGates } = require("./lib/content-discovery/phase1-coverage-gates");
const { validateFindings } = require("./lib/content-discovery/phase1-findings-validation");
const { normalizeOperationalPaths, toRepoRelativePath } = require("./lib/content-discovery/report-builder");
const { summarizeApplicability } = require("./lib/content-discovery/phase1-applicability");
const { evaluateOwnerPrepCoverage } = require("./lib/content-discovery/phase1-owner-prep");

const MATRIX_PATH = path.join(ROOT, "reports", "phase1-discovery-matrix.json");
const SCOPE_INVENTORY_PATH = path.join(ROOT, "reports", "phase1-scope-inventory.json");
const MATRIX_TIMESTAMP_FIELDS = ["generatedAt", "updatedAt", "startedAt", "endedAt", "heartbeatAt"];

function loadJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function hashMatrixForIdentity(matrix) {
  const clone = JSON.parse(JSON.stringify(matrix || {}));
  for (const field of MATRIX_TIMESTAMP_FIELDS) {
    delete clone[field];
  }
  return crypto.createHash("sha256").update(JSON.stringify(clone)).digest("hex");
}

function computeOwnerPrepSourceHash(validatedFindings = []) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(validatedFindings.map((f) => f.auditId).sort()))
    .digest("hex");
}

function assertFinalizedBundleIdentity({
  matrix,
  matrixPath,
  ownerPrepOutDir,
  expectedMatrixSha256,
  expectedOwnerPrepSourceHash,
  requireExplicitHashes = false,
}) {
  if (requireExplicitHashes) {
    const missing = [];
    if (!matrixPath) missing.push("matrixPath");
    if (!ownerPrepOutDir) missing.push("ownerPrepOutDir");
    if (!expectedMatrixSha256) missing.push("expectedMatrixSha256");
    if (!expectedOwnerPrepSourceHash) missing.push("expectedOwnerPrepSourceHash");
    if (missing.length) {
      const error = new Error(
        `FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED: missing ${missing.join(", ")}`,
      );
      error.code = "FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED";
      error.missing = missing;
      throw error;
    }
  }

  const actualMatrixSha256 = hashMatrixForIdentity(matrix);
  if (requireExplicitHashes || expectedMatrixSha256) {
    if (!expectedMatrixSha256) {
      const error = new Error("FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED: expectedMatrixSha256");
      error.code = "FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED";
      error.field = "expectedMatrixSha256";
      throw error;
    }
    if (actualMatrixSha256 !== expectedMatrixSha256) {
      const error = new Error(
        `FINALIZED_REPORT_BUNDLE_IDENTITY_MISMATCH: matrixSha256 expected ${expectedMatrixSha256}, got ${actualMatrixSha256} (${matrixPath})`,
      );
      error.code = "FINALIZED_REPORT_BUNDLE_IDENTITY_MISMATCH";
      error.field = "matrixSha256";
      throw error;
    }
  }

  const validatedFindings = (matrix.findings || []).filter((f) =>
    ["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED"].includes(f.classificationStatus),
  );
  const actualOwnerPrepSourceHash = computeOwnerPrepSourceHash(validatedFindings);
  if (requireExplicitHashes || expectedOwnerPrepSourceHash) {
    if (!expectedOwnerPrepSourceHash) {
      const error = new Error("FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED: expectedOwnerPrepSourceHash");
      error.code = "FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED";
      error.field = "expectedOwnerPrepSourceHash";
      throw error;
    }
    if (actualOwnerPrepSourceHash !== expectedOwnerPrepSourceHash) {
      const error = new Error(
        `FINALIZED_REPORT_BUNDLE_IDENTITY_MISMATCH: ownerPrepSourceHash expected ${expectedOwnerPrepSourceHash}, got ${actualOwnerPrepSourceHash}`,
      );
      error.code = "FINALIZED_REPORT_BUNDLE_IDENTITY_MISMATCH";
      error.field = "ownerPrepSourceHash";
      throw error;
    }
  }

  if (requireExplicitHashes || ownerPrepOutDir) {
    if (!ownerPrepOutDir) {
      const error = new Error("FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED: ownerPrepOutDir");
      error.code = "FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED";
      error.field = "ownerPrepOutDir";
      throw error;
    }
    const coverage = evaluateOwnerPrepCoverage({ matrix, ownerPrepOutDir });
    if (!coverage.SOURCE_HASH_MATCH) {
      const error = new Error(
        `FINALIZED_REPORT_BUNDLE_IDENTITY_MISMATCH: OWNER-PREP source hash mismatch in ${ownerPrepOutDir}`,
      );
      error.code = "FINALIZED_REPORT_BUNDLE_IDENTITY_MISMATCH";
      error.field = "ownerPrepFiles";
      throw error;
    }
  }

  return {
    matrixSha256: actualMatrixSha256,
    ownerPrepSourceHash: actualOwnerPrepSourceHash,
    match: true,
  };
}

function assertPhase1BundleInvocation(options = {}) {
  if (!options.withLuna) return;
  const requiredKeys = [
    "matrixPath",
    "ownerPrepOutDir",
    "expectedMatrixSha256",
    "expectedOwnerPrepSourceHash",
  ];
  const missing = requiredKeys.filter((key) => !Object.prototype.hasOwnProperty.call(options, key));
  const empty = requiredKeys.filter(
    (key) =>
      Object.prototype.hasOwnProperty.call(options, key) &&
      (options[key] == null || options[key] === ""),
  );
  if (missing.length || empty.length) {
    const fields = [...new Set([...missing, ...empty])];
    const error = new Error(
      `FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED: missing ${fields.join(", ")}`,
    );
    error.code = "FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED";
    error.missing = fields;
    throw error;
  }
  for (const [label, value] of [
    ["matrixPath", options.matrixPath],
    ["ownerPrepOutDir", options.ownerPrepOutDir],
  ]) {
    if (!path.isAbsolute(value)) {
      const error = new Error(
        `FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED: ${label} must be an absolute path, got ${value}`,
      );
      error.code = "FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED";
      error.field = label;
      throw error;
    }
  }
}

function createCliArgumentError(message, field) {
  const error = new Error(message);
  error.code = "PHASE1_EXIT_CLI_INVALID_ARGUMENT";
  error.field = field;
  return error;
}

const PHASE1_EXIT_BOOLEAN_FLAGS = new Set(["--with-luna", "--dry-run"]);
const PHASE1_EXIT_VALUE_FLAGS = new Set([
  "--matrix-path",
  "--owner-prep-out-dir",
  "--expected-matrix-sha256",
  "--expected-owner-prep-source-hash",
]);

function assertExitPreWriteGates({ matrix, evaluation, withLuna }) {
  if (!withLuna) return;
  if (matrix?.validation?.pass !== true) {
    const error = new Error("PHASE1_EXIT_PREWRITE_GATE_FAILED: matrix.validation.pass !== true");
    error.code = "PHASE1_EXIT_PREWRITE_GATE_FAILED";
    error.field = "matrix.validation.pass";
    throw error;
  }
  if (!evaluation?.pass) {
    const error = new Error(
      `PHASE1_EXIT_PREWRITE_GATE_FAILED: F1 gates not PASS (status=${evaluation?.status})`,
    );
    error.code = "PHASE1_EXIT_PREWRITE_GATE_FAILED";
    error.field = "f1Gates";
    error.gates = evaluation?.gates;
    throw error;
  }
  if (!matrix?.ownerPrep || matrix?.gates?.ownerPrepGenerated !== true) {
    const error = new Error(
      "PHASE1_EXIT_PREWRITE_GATE_FAILED: matrix missing ownerPrep metadata (ownerPrep / gates.ownerPrepGenerated)",
    );
    error.code = "PHASE1_EXIT_PREWRITE_GATE_FAILED";
    error.field = "ownerPrepMetadata";
    throw error;
  }
}

function parsePhase1ExitCliArgs(argv = process.argv.slice(2)) {
  const options = {
    withLuna: false,
    dryRun: false,
    writeReports: true,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) {
      throw createCliArgumentError(`PHASE1_EXIT_CLI_INVALID_ARGUMENT: unexpected token ${arg}`, arg);
    }
    if (PHASE1_EXIT_BOOLEAN_FLAGS.has(arg)) {
      if (arg === "--with-luna") options.withLuna = true;
      if (arg === "--dry-run") {
        options.dryRun = true;
        options.writeReports = false;
      }
      continue;
    }
    if (PHASE1_EXIT_VALUE_FLAGS.has(arg)) {
      const value = argv[i + 1];
      if (value == null || value === "" || value.startsWith("--")) {
        throw createCliArgumentError(`PHASE1_EXIT_CLI_INVALID_ARGUMENT: ${arg} requires a value`, arg);
      }
      if (arg === "--matrix-path") {
        options.matrixPath = path.resolve(value);
      } else if (arg === "--owner-prep-out-dir") {
        options.ownerPrepOutDir = path.resolve(value);
      } else if (arg === "--expected-matrix-sha256") {
        options.expectedMatrixSha256 = value;
      } else if (arg === "--expected-owner-prep-source-hash") {
        options.expectedOwnerPrepSourceHash = value;
      }
      i += 1;
      continue;
    }
    throw createCliArgumentError(`PHASE1_EXIT_CLI_INVALID_ARGUMENT: unknown argument ${arg}`, arg);
  }

  return options;
}

function gateStatus(pass) {
  return pass ? "PASS" : "FAIL";
}

function evaluateF1Gates({ matrix, baseline, productionDiff, options = {} }) {
  const summary = matrix?.summary || [];
  const coverage = evaluateAllCoverageGates(matrix, {
    luna: { mode: options.withLuna ? "LIVE" : "NOT_RUN", fixture: options.lunaFixture },
  });
  const validation = matrix?.validation || validateFindings(matrix?.findings || []);
  const applicability = summarizeApplicability();
  const f0Completion = !options.withLuna;

  const f1_1 = {
    pass:
      baseline?.verdict === "PASS" &&
      baseline?.fetchStatus === "PASS" &&
      baseline?.revParseStatus === "PASS" &&
      (baseline?.activeUnmergedClosureCount ?? 0) === 0,
    status: gateStatus(
      baseline?.verdict === "PASS" &&
        baseline?.fetchStatus === "PASS" &&
        baseline?.revParseStatus === "PASS" &&
        (baseline?.activeUnmergedClosureCount ?? 0) === 0,
    ),
  };

  const f1_2 = {
    pass: coverage.deterministic.pass,
    status: gateStatus(coverage.deterministic.pass),
    processed: coverage.deterministic.processed,
    expected: coverage.deterministic.expected,
    notApplicable: coverage.deterministic.notApplicable,
  };

  const f1_3 = {
    pass: coverage.inventory.pass,
    status: gateStatus(coverage.inventory.pass),
    coverage: `${coverage.inventory.processed}/${coverage.inventory.expected}`,
  };

  const f1_4 = {
    pass: coverage.multiScan.pass,
    status: gateStatus(coverage.multiScan.pass),
    coverage: `${coverage.multiScan.processed}/${coverage.multiScan.expected}`,
  };

  const f1_5 = f0Completion
    ? { pass: true, status: "NOT_RUN", coverage: "NOT_RUN" }
    : {
        pass: coverage.luna.pass,
        status: gateStatus(coverage.luna.pass),
        coverage: coverage.luna.coverage,
      };

  const f1_6 = f0Completion
    ? { pass: true, status: "NOT_RUN", note: "Skipped during F0 infrastructure completion" }
    : {
        pass: validation.pass,
        status: gateStatus(validation.pass),
        schemaErrors: validation.schemaErrorCount || 0,
        unclassifiedCount: validation.unclassifiedCount || 0,
      };

  const f1_7 = {
    pass: productionDiff?.clean === true && !productionDiff?.error,
    status: gateStatus(productionDiff?.clean === true && !productionDiff?.error),
    productionDiffClean: productionDiff?.clean === true,
  };

  const validatedFindings = matrix?.totals?.findingsValidated || 0;
  const ownerPrepCoverage = f0Completion
    ? { pass: true, status: "NOT_RUN" }
    : evaluateOwnerPrepCoverage({
        matrix,
        ownerPrepOutDir: options.ownerPrepOutDir,
      });
  const f1_8 = f0Completion
    ? { pass: true, status: "NOT_RUN", validatedFindings, note: "OWNER-PREP not required during F0 smoke" }
    : {
        pass: ownerPrepCoverage.pass,
        status: gateStatus(ownerPrepCoverage.pass),
        validatedFindings,
        ownerPrepCoverage,
      };

  const gates = {
    "F1-1": f1_1.status,
    "F1-2": f1_2.status,
    "F1-3": f1_3.status,
    "F1-4": f1_4.status,
    "F1-5": f1_5.status,
    "F1-6": f1_6.status,
    "F1-7": f1_7.status,
    "F1-8": f1_8.status,
    "F1-9": "PENDING",
  };

  const operationalGatesPass = [
    f1_1.pass,
    f1_2.pass,
    f1_3.pass,
    f1_4.pass,
    f0Completion ? true : f1_5.pass,
    f0Completion ? true : f1_6.pass,
    f1_7.pass,
    f0Completion ? true : f1_8.pass,
  ].every(Boolean);

  gates["F1-9"] = gateStatus(operationalGatesPass);

  const allGatesPass = operationalGatesPass && gates["F1-9"] === "PASS";
  const status = f0Completion
    ? allGatesPass
      ? "PHASE_0_COMPLETION_PASS"
      : "PHASE_0_BLOCKED"
    : allGatesPass
      ? "PHASE_1_COMPLETE"
      : "PHASE_1_BLOCKED";

  return {
    status,
    f0Completion,
    gates,
    details: {
      F1_1: f1_1,
      F1_2: f1_2,
      F1_3: f1_3,
      F1_4: f1_4,
      F1_5: f1_5,
      F1_6: f1_6,
      F1_7: f1_7,
      F1_8: f1_8,
    },
    coverage,
    validation,
    applicability,
    pass: operationalGatesPass && gates["F1-9"] === "PASS",
  };
}

function buildExitPayload({ matrix, baseline, productionDiff, evaluation, options = {} }) {
  const lunaStats = matrix?.lunaStats || {
    lunaScopesExpected: 0,
    lunaScopesProcessed: 0,
    lunaCalls: 0,
    lunaSuccessfulBatches: 0,
    lunaRetryAttempts: 0,
    status: "NOT_RUN",
  };

  return normalizeOperationalPaths({
    phase: 1,
    status: evaluation.status,
    generatedAt: new Date().toISOString(),
    originMainSha: baseline?.originMainSha || matrix?.originMainSha || null,
    masterVersion: matrix?.masterVersion || "1.17",
    ownerDecisionRef: options.ownerDecisionRef || "PENDING",
    phase1StartAuthorizationRef: options.phase1StartAuthorizationRef || "OWNER-APPROVED-2026-08-29",
    phase1TechnicalOwnerDecisionRef: options.phase1TechnicalOwnerDecisionRef || "PENDING",
    scope: {
      expected: 320,
      processed: matrix?.summary?.length || 0,
      notApplicable: matrix?.scope?.notApplicable || 2,
      lunaApplicable: 318,
      inventoryApplicable: 309,
      multiScanApplicable: 309,
    },
    gates: evaluation.gates,
    coverage: {
      deterministic: `${evaluation.coverage.deterministic.processed}/${evaluation.coverage.deterministic.expected}`,
      mainTranslationFieldInventory: `${evaluation.coverage.inventory.processed}/${evaluation.coverage.inventory.expected}`,
      multiTranslationScan: `${evaluation.coverage.multiScan.processed}/${evaluation.coverage.multiScan.expected}`,
      lunaAudit: evaluation.f0Completion ? "NOT_RUN" : evaluation.coverage.luna.coverage,
    },
    constraints: {
      productionChanges: 0,
      deChanges: (baseline?.deChanges || []).length,
      crowdinProductionImport: 0,
      translationApply: 0,
    },
    lunaStats,
    productionDiff: {
      clean: productionDiff?.clean === true,
      changedFiles: productionDiff?.changedFiles || [],
    },
    details: evaluation.details,
    pass: evaluation.pass,
  });
}

function writeExitReports(exitPayload) {
  const outJson = path.join(ROOT, "reports", "phase1-exit.json");
  const outMd = path.join(ROOT, "reports", "phase1-exit.md");
  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, `${JSON.stringify(exitPayload, null, 2)}\n`, "utf8");

  const lines = [
    "# Phase 1 exit matrix",
    "",
    `**Status:** ${exitPayload.status}`,
    `**Generated:** ${exitPayload.generatedAt}`,
    `**ORIGIN_MAIN_SHA:** \`${exitPayload.originMainSha}\``,
  ];

  for (const [gate, status] of Object.entries(exitPayload.gates)) {
    lines.push(`- ${gate}: **${status}**`);
  }

  lines.push(
    "",
    `**Production diff clean:** ${exitPayload.productionDiff.clean}`,
    `**Luna calls:** ${exitPayload.lunaStats.lunaCalls}`,
    "",
  );

  fs.writeFileSync(outMd, `${lines.join("\n")}\n`, "utf8");
  return {
    outJson: toRepoRelativePath(outJson),
    outMd: toRepoRelativePath(outMd),
  };
}

function runPhase1ExitMatrix(options = {}) {
  assertPhase1BundleInvocation(options);

  const withLuna = options.withLuna === true;
  const writeReports = options.writeReports !== false;
  const matrixPath = withLuna ? options.matrixPath : options.matrixPath ?? MATRIX_PATH;
  const ownerPrepOutDir = options.ownerPrepOutDir;
  const expectedMatrixSha256 = options.expectedMatrixSha256;
  const expectedOwnerPrepSourceHash = options.expectedOwnerPrepSourceHash;

  const baseline = runBaselineGate({ writeReports: false });
  const matrix = loadJson(matrixPath);
  if (!matrix || (!matrix.findings?.length && !matrix.summary?.length)) {
    const error = new Error(`FINALIZED_REPORT_BUNDLE_IDENTITY_MISMATCH: matrix missing at ${matrixPath}`);
    error.code = "FINALIZED_REPORT_BUNDLE_IDENTITY_MISMATCH";
    error.field = "matrixPath";
    throw error;
  }

  const bundleIdentity = assertFinalizedBundleIdentity({
    matrix,
    matrixPath,
    ownerPrepOutDir,
    expectedMatrixSha256,
    expectedOwnerPrepSourceHash,
    requireExplicitHashes: withLuna === true,
  });

  const productionDiff = gitProductionDiffAgainstBaseline(baseline.originMainSha);
  const evaluation = evaluateF1Gates({
    matrix,
    baseline,
    productionDiff,
    options: { withLuna, ownerPrepOutDir, lunaFixture: options.lunaFixture },
  });

  assertExitPreWriteGates({ matrix, evaluation, withLuna });

  const exitPayload = buildExitPayload({ matrix, baseline, productionDiff, evaluation, options });
  const reports = writeReports ? writeExitReports(exitPayload) : null;
  return {
    exitPayload,
    reports,
    evaluation,
    baseline,
    productionDiff,
    bundleIdentity,
    matrixPath,
    ownerPrepOutDir,
    matrix,
  };
}

function main() {
  let cli;
  try {
    cli = parsePhase1ExitCliArgs();
  } catch (error) {
    console.error(
      JSON.stringify(
        {
          pass: false,
          code: error.code || "PHASE1_EXIT_CLI_INVALID_ARGUMENT",
          message: error.message,
          field: error.field,
        },
        null,
        2,
      ),
    );
    process.exit(1);
  }
  try {
    const result = runPhase1ExitMatrix(cli);
    console.log(
      JSON.stringify(
        {
          status: result.exitPayload.status,
          pass: result.exitPayload.pass,
          gates: result.exitPayload.gates,
          lunaCalls: result.exitPayload.lunaStats.lunaCalls,
          dryRun: cli.dryRun,
          reports: result.reports,
          bundleIdentity: result.bundleIdentity,
          matrixHasOwnerPrep: Boolean(result.matrix?.ownerPrep),
          ownerPrepGenerated: result.matrix?.gates?.ownerPrepGenerated === true,
        },
        null,
        2,
      ),
    );
    process.exit(result.exitPayload.pass ? 0 : 1);
  } catch (error) {
    console.error(
      JSON.stringify(
        {
          pass: false,
          code: error.code || "PHASE1_EXIT_FAILED",
          message: error.message,
          field: error.field,
          missing: error.missing,
          gates: error.gates,
        },
        null,
        2,
      ),
    );
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  evaluateF1Gates,
  buildExitPayload,
  runPhase1ExitMatrix,
  writeExitReports,
  hashMatrixForIdentity,
  computeOwnerPrepSourceHash,
  assertFinalizedBundleIdentity,
  assertPhase1BundleInvocation,
  assertExitPreWriteGates,
  parsePhase1ExitCliArgs,
  createCliArgumentError,
  PHASE1_EXIT_BOOLEAN_FLAGS,
  PHASE1_EXIT_VALUE_FLAGS,
  MATRIX_PATH,
  SCOPE_INVENTORY_PATH,
};
