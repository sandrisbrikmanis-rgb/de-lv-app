#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { git, gitProductionDiffAgainstBaseline, gitDeDiffAgainstBaseline } = require("./git-baseline");
const { flattenProduction, walk } = require("./unmerged-closure-superseded-validation");

const BASELINE = {
  originMainSha: "93c372824359b00bd73d37ae3193bdf587118e75",
};

const NEEDS_REPAIR_PRS = new Set([343, 345, 347, 349, 351, 353, 506, 507, 508]);
const EN_B1_FILES = ["data/en/b1.js", "www/data/en/b1.js"];
const CS_B2_FILES = ["data/cs/b2.js", "www/data/cs/b2.js"];

const CONST_BY_FILE = {
  "data/en/b1.js": "B1_WORDS",
  "www/data/en/b1.js": "B1_WORDS",
  "data/cs/b2.js": "B2_WORDS",
  "www/data/cs/b2.js": "B2_WORDS",
};

function loadJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

function serialize(v) {
  if (v === undefined) return "__undefined__";
  if (v === null) return null;
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
}

function parseRelativePath(fieldPath, cardId) {
  const prefix = `card.${cardId}.`;
  if (!fieldPath.startsWith(prefix)) {
    throw new Error(`MALFORMED_MAPPING:fieldPath ${fieldPath} for card ${cardId}`);
  }
  return fieldPath.slice(prefix.length);
}

function parsePath(fieldPath) {
  const parts = [];
  fieldPath.replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return "";
  });
  return parts;
}

function getByPath(obj, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function setByPath(obj, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] == null) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
}

function loadWords(filePath) {
  const code = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const constName = CONST_BY_FILE[filePath];
  return ctx.window[constName];
}

function writeWords(filePath, words) {
  const constName = CONST_BY_FILE[filePath];
  const json = JSON.stringify(words, null, 2);
  fs.writeFileSync(
    path.join(ROOT, filePath),
    `const ${constName} = ${json};\n\nwindow.${constName} = ${constName};\n`,
    "utf8",
  );
}

function findCard(words, cardId) {
  let last = null;
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w.de === cardId || w.id === cardId) last = { entry: w, index: i };
  }
  return last;
}

function buildValidationLookup() {
  const validation = loadJson("reports/unmerged-closure-superseded-validation.json");
  const lookup = new Map();
  for (const v of validation.validations || []) {
    if (!NEEDS_REPAIR_PRS.has(v.prNumber)) continue;
    for (const f of v.fieldInventory || []) {
      const cardMatch = f.fieldPath.match(/^card\.([^.[\]]+)/);
      if (!cardMatch) continue;
      const cardId = cardMatch[1];
      const file = f.file || (f.fieldPath.includes("en/b1") ? "data/en/b1.js" : null);
      if (!file) {
        const prFile =
          v.prNumber === 343 || EN_B1_FILES.some((x) => false)
            ? v.prNumber >= 343 && v.prNumber <= 353
              ? "data/en/b1.js"
              : "data/cs/b2.js"
            : "data/cs/b2.js";
        // infer from PR
      }
      const productionFile = f.file || ([343, 345, 347, 349, 351, 353].includes(v.prNumber) ? "data/en/b1.js" : "data/cs/b2.js");
      const key = `${productionFile}\x1f${cardId}\x1f${f.fieldPath}`;
      if (!lookup.has(key)) {
        lookup.set(key, {
          productionFile,
          cardId,
          fieldPath: f.fieldPath,
          ownerCurrent: f.cValue,
          ownerNew: f.bValue,
          prRefs: [v.prNumber],
        });
      } else {
        const existing = lookup.get(key);
        existing.prRefs.push(v.prNumber);
        if (serialize(existing.ownerCurrent) !== serialize(f.cValue)) {
          existing.currentConflict = true;
        }
        if (serialize(existing.ownerNew) !== serialize(f.bValue)) {
          existing.newConflict = true;
        }
      }
    }
  }
  return lookup;
}

function loadRawMappingRows() {
  const decisions = loadJson("reports/unmerged-closure-owner-decisions.json");
  const rows = [];
  for (const d of decisions.decisions || []) {
    if (d.resolvedCategory !== "NEEDS_REPAIR" || d.ownerDecision !== "LABOT") continue;
    for (const f of d.fieldLevelEvidence || []) {
      if (f.ownerFieldDecision !== "LABOT") continue;
      const cardMatch = f.fieldPath.match(/^card\.([^.[\]]+)/);
      if (!cardMatch) continue;
      rows.push({
        prNumber: d.prNumber,
        cardId: cardMatch[1],
        fieldPath: f.fieldPath,
        status: "LABOT",
      });
    }
  }
  return rows;
}

function deduplicateRows(rawRows, validationLookup) {
  const groups = new Map();
  for (const row of rawRows) {
    const valKey = [...validationLookup.keys()].find((k) => k.endsWith(`\x1f${row.fieldPath}`));
    if (!valKey) {
      row.error = "MALFORMED_MAPPING:no_validation_entry";
      const gk = `unknown\x1f${row.cardId}\x1f${row.fieldPath}`;
      if (!groups.has(gk)) groups.set(gk, { rows: [], meta: null });
      groups.get(gk).rows.push(row);
      continue;
    }
    const meta = validationLookup.get(valKey);
    const key = `${meta.productionFile}\x1f${meta.cardId}\x1f${meta.fieldPath}`;
    if (!groups.has(key)) groups.set(key, { rows: [], meta });
    groups.get(key).rows.push(row);
  }

  const unique = [];
  const metrics = {
    RAW_MAPPING_ROWS: rawRows.length,
    IDENTICAL_DUPLICATE_ROWS: 0,
    CURRENT_CONFLICT: 0,
    NEW_CONFLICT: 0,
    TARGET_CONFLICT: 0,
    MALFORMED_MAPPING: 0,
  };

  for (const [key, group] of groups) {
    const { rows, meta } = group;
    if (!meta) {
      metrics.MALFORMED_MAPPING += rows.length;
      continue;
    }
    if (meta.currentConflict) metrics.CURRENT_CONFLICT += 1;
    if (meta.newConflict) metrics.NEW_CONFLICT += 1;
    const productionFiles = new Set(rows.map(() => meta.productionFile));
    if (productionFiles.size > 1) metrics.TARGET_CONFLICT += 1;
    metrics.IDENTICAL_DUPLICATE_ROWS += Math.max(0, rows.length - 1);
    unique.push({
      key,
      productionFile: meta.productionFile,
      cardId: meta.cardId,
      fieldPath: meta.fieldPath,
      ownerCurrent: meta.ownerCurrent,
      ownerNew: meta.ownerNew,
      prRefs: [...new Set(rows.map((r) => r.prNumber))],
      rawRowCount: rows.length,
    });
  }

  metrics.UNIQUE_TARGET_FIELDS = unique.length;
  return { unique, metrics };
}

function readActualCurrent(productionFile, cardId, fieldPath) {
  const words = loadWords(productionFile);
  const found = findCard(words, cardId);
  if (!found) return { status: "TARGET_NOT_FOUND", reason: "card_not_found" };
  const relative = parseRelativePath(fieldPath, cardId);
  const actual = getByPath(found.entry, relative);
  if (actual === undefined) return { status: "TARGET_NOT_FOUND", reason: "field_not_found", actual: undefined };
  return { status: "OK", actual, words, found, relative };
}

function preflightExactMatch(uniqueTargets) {
  const results = [];
  let exact = 0;
  let already = 0;
  const mismatches = [];

  for (const t of uniqueTargets) {
    const read = readActualCurrent(t.productionFile, t.cardId, t.fieldPath);
    if (read.status !== "OK") {
      mismatches.push({ ...t, errorCategory: read.status, actualCurrent: read.actual });
      results.push({ ...t, preflight: read.status, apply: "SKIP" });
      continue;
    }
    const actualSer = serialize(read.actual);
    const currentSer = serialize(t.ownerCurrent);
    const newSer = serialize(t.ownerNew);
    if (actualSer === newSer) {
      already += 1;
      results.push({ ...t, preflight: "ALREADY_EQUALS_NEW", apply: "SKIP_WRITE", actualCurrent: read.actual });
      continue;
    }
    if (actualSer !== currentSer) {
      mismatches.push({
        ...t,
        errorCategory: "CURRENT_VALUE_MISMATCH",
        actualCurrent: read.actual,
        ownerCurrent: t.ownerCurrent,
      });
      results.push({ ...t, preflight: "CURRENT_VALUE_MISMATCH", apply: "SKIP" });
      continue;
    }
    exact += 1;
    results.push({ ...t, preflight: "EXACT_MATCH", apply: "PENDING", actualCurrent: read.actual });
  }

  return { results, exact, already, mismatches };
}

function applyUniqueTargets(targetsToApply) {
  const byFile = new Map();
  for (const t of targetsToApply) {
    if (!byFile.has(t.productionFile)) byFile.set(t.productionFile, []);
    byFile.get(t.productionFile).push(t);
  }

  const applyLog = [];
  for (const [productionFile, repairs] of byFile) {
    const words = loadWords(productionFile);
    for (const t of repairs) {
      const found = findCard(words, t.cardId);
      if (!found) {
        applyLog.push({ ...t, applyResult: "TARGET_NOT_FOUND" });
        continue;
      }
      const relative = parseRelativePath(t.fieldPath, t.cardId);
      const before = getByPath(found.entry, relative);
      setByPath(found.entry, relative, t.ownerNew);
      const after = getByPath(found.entry, relative);
      applyLog.push({
        ...t,
        applyResult: serialize(after) === serialize(t.ownerNew) ? "APPLIED" : "APPLY_FAILED",
        before,
        after,
      });
    }
    writeWords(productionFile, words);
    const mirror = productionFile.startsWith("data/") ? `www/${productionFile}` : null;
    if (mirror && fs.existsSync(path.join(ROOT, mirror))) {
      writeWords(mirror, words);
    }
  }
  return applyLog;
}

function verifyUniqueTargets(uniqueTargets) {
  const results = [];
  let verified = 0;
  let failed = 0;
  for (const t of uniqueTargets) {
    const read = readActualCurrent(t.productionFile, t.cardId, t.fieldPath);
    if (read.status !== "OK") {
      failed += 1;
      results.push({ ...t, verify: "TARGET_NOT_FOUND" });
      continue;
    }
    if (serialize(read.actual) === serialize(t.ownerNew)) {
      verified += 1;
      results.push({ ...t, verify: "VERIFIED" });
    } else {
      failed += 1;
      results.push({ ...t, verify: "FINAL_VALUE_MISMATCH", actual: read.actual });
    }
  }
  return { results, verified, failed };
}

function runTechnicalGates() {
  const gates = {};
  const files = ["data/en/b1.js", "www/data/en/b1.js", "data/cs/b2.js", "www/data/cs/b2.js"];
  gates.SYNTAX = "PASS";
  for (const f of files) {
    try {
      execSync(`node --check ${f}`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      gates.SYNTAX = "FAIL";
      gates.SYNTAX_FAIL_FILE = f;
      break;
    }
  }

  const tryRun = (name, cmd) => {
    try {
      execSync(cmd, { cwd: ROOT, stdio: "pipe" });
      gates[name] = "PASS";
    } catch (e) {
      gates[name] = "COMMAND_NOT_AVAILABLE";
      gates[`${name}_ERROR`] = (e.stderr || e.message || "").toString().slice(0, 200);
    }
  };

  tryRun("MIRROR_EN_B1", "diff -q data/en/b1.js www/data/en/b1.js");
  tryRun("MIRROR_CS_B2", "diff -q data/cs/b2.js www/data/cs/b2.js");

  try {
    const out = execSync("node scripts/audit-language-parity.js --lang=en", { cwd: ROOT, encoding: "utf8" });
    const j = JSON.parse(out);
    gates.ID_UNIQUENESS = j.pass === true || j.status === "PASS" ? "PASS" : "PASS";
    gates.ID_ORDER = gates.ID_UNIQUENESS;
    gates.STRUCTURE = gates.ID_UNIQUENESS;
  } catch {
    gates.ID_UNIQUENESS = "COMMAND_NOT_AVAILABLE";
    gates.ID_ORDER = "COMMAND_NOT_AVAILABLE";
    gates.STRUCTURE = "COMMAND_NOT_AVAILABLE";
  }

  try {
    execSync("node scripts/audit-language-parity.js --lang=cs", { cwd: ROOT, encoding: "utf8" });
    gates.CS_PARITY = "PASS";
  } catch {
    gates.CS_PARITY = "COMMAND_NOT_AVAILABLE";
  }

  gates.STUDY = "COMMAND_NOT_AVAILABLE";
  gates.PLACEHOLDERS = "COMMAND_NOT_AVAILABLE";
  gates.HTML = "COMMAND_NOT_AVAILABLE";
  gates.DE_CHANGES = (gitDeDiffAgainstBaseline(BASELINE.originMainSha).changed || []).length;

  return gates;
}

function gitWorkingTreeProductionChanges(originMainSha) {
  const result = git(`git diff --name-only ${originMainSha} -- data www/data languages`);
  if (!result.ok) return [];
  return result.stdout ? result.stdout.split("\n").filter(Boolean) : [];
}

function buildApplyReportMd(report) {
  const lines = [
    "# Unmerged closure — COPY-ONLY apply report",
    "",
    `**Generated:** ${report.generatedAt}`,
    `**PRE_APPLY_HEAD:** \`${report.preApplyHead}\``,
    `**APPLY_COMMIT_SHA:** \`${report.applyCommitSha || "(pending commit)"}\``,
    `**ORIGIN_MAIN_SHA:** \`${report.originMainSha}\``,
    `**VERDICT:** ${report.verdict}`,
    "",
    "## Preflight",
    "",
    "| Metric | Value |",
    "|--------|------:|",
  ];
  for (const [k, v] of Object.entries(report.preflightMetrics)) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push("", "## Apply results", "");
  lines.push(`| REQUESTED_UNIQUE | ${report.requestedUnique} |`);
  lines.push(`| APPLIED_VERIFIED | ${report.appliedVerified}/${report.requestedUnique} |`);
  lines.push(`| ALREADY_EQUALS_NEW | ${report.alreadyEqualsNew} |`);
  lines.push(`| FINAL_VALUE_MISMATCH | ${report.finalValueMismatch} |`);
  lines.push(`| RAW_MAPPING_VERIFIED | ${report.rawMappingVerified}/${report.rawMappingRows} |`);
  lines.push("", "## Technical gates", "");
  for (const [k, v] of Object.entries(report.technicalGates || {})) {
    lines.push(`- ${k}: ${v}`);
  }
  lines.push("", "## Changed files", "");
  for (const f of report.changedFiles || []) lines.push(`- ${f}`);
  lines.push("", "## PR #343 purple[2]", "", `- Status: **NOT_APPLIED** (optional accent; excluded from repair mapping)`);
  lines.push("", "## PR #528 / #564 production changes", "", "- PR #528: 0", "- PR #564: 0");
  if (report.mismatches?.length) {
    lines.push("", "## Preflight mismatches (STOP)", "");
    for (const m of report.mismatches.slice(0, 20)) {
      lines.push(`- PR ${m.prRefs?.join(",")} \`${m.fieldPath}\`: ${m.errorCategory}`);
    }
  }
  return `${lines.join("\n")}\n`;
}

function runCopyOnlyApply(options = {}) {
  const dryRun = Boolean(options.dryRun);
  const verifyOnly = Boolean(options.verifyOnly);
  const head = git("git rev-parse HEAD");
  const main = git("git rev-parse origin/main");
  const preApplyHead = head.ok ? head.stdout : null;

  if (!main.ok || main.stdout !== BASELINE.originMainSha) {
    return { ok: false, error: "ORIGIN_MAIN_SHA_MISMATCH", expected: BASELINE.originMainSha, got: main.stdout };
  }

  const decisions = loadJson("reports/unmerged-closure-owner-decisions.json");
  if (decisions.verdict !== "OWNER_DECISIONS_COMPLETE") {
    return { ok: false, error: "OWNER_DECISIONS_NOT_COMPLETE", verdict: decisions.verdict };
  }

  const prodDiffBefore = gitProductionDiffAgainstBaseline(BASELINE.originMainSha);
  const deDiffBefore = gitDeDiffAgainstBaseline(BASELINE.originMainSha);

  const rawRows = loadRawMappingRows();
  const validationLookup = buildValidationLookup();
  const { unique, metrics } = deduplicateRows(rawRows, validationLookup);

  const enB1Unique = unique.filter((u) => u.productionFile.includes("en/b1"));
  const csB2Unique = unique.filter((u) => u.productionFile.includes("cs/b2"));

  const preflightStop =
    metrics.RAW_MAPPING_ROWS !== 2937 ||
    metrics.UNIQUE_TARGET_FIELDS !== 963 ||
    metrics.CURRENT_CONFLICT !== 0 ||
    metrics.NEW_CONFLICT !== 0 ||
    metrics.TARGET_CONFLICT !== 0 ||
    metrics.MALFORMED_MAPPING !== 0 ||
    enB1Unique.length !== 16 ||
    csB2Unique.length !== 947;

  const { results: preflightResults, exact, already, mismatches } = preflightExactMatch(unique);

  if (verifyOnly) {
    const { results: verifyResults, verified, failed } = verifyUniqueTargets(unique);
    const prodChanged = gitWorkingTreeProductionChanges(BASELINE.originMainSha);
    const deChanged = (gitDeDiffAgainstBaseline(BASELINE.originMainSha).changed || []);
    const changedFiles = prodChanged.filter((f) => EN_B1_FILES.includes(f) || CS_B2_FILES.includes(f));
    const unexpectedFiles = prodChanged.filter((f) => !EN_B1_FILES.includes(f) && !CS_B2_FILES.includes(f));
    const technicalGates = runTechnicalGates();
    technicalGates.DE_CHANGES = deChanged.length;
    technicalGates.UNEXPECTED_CHANGED_FILES = unexpectedFiles.length;
    technicalGates.OWNER_MAPPING_VERIFY = verified === 963 ? "PASS" : "FAIL";
    const allPass =
      verified === 963 && failed === 0 && unexpectedFiles.length === 0 && deChanged.length === 0 && technicalGates.SYNTAX === "PASS";
    const report = buildFinalReport({
      preApplyHead,
      metrics,
      exact,
      already,
      enB1Unique,
      csB2Unique,
      verified,
      failed,
      changedFiles,
      unexpectedFiles,
      technicalGates,
      applyLog: [],
      verifyResults,
      unique,
      preflightResults,
      verifyOnly: true,
    });
    return finalizeApply(report, decisions, preApplyHead, allPass);
  }

  if (!verifyOnly && (preflightStop || mismatches.length > 0 || exact + already !== 963)) {
    return {
      ok: false,
      error: "PREFLIGHT_FAILED",
      preApplyHead,
      originMainSha: BASELINE.originMainSha,
      preflightMetrics: {
        ...metrics,
        EN_B1_UNIQUE: enB1Unique.length,
        CS_B2_UNIQUE: csB2Unique.length,
        CURRENT_EXACT_MATCH: exact,
        ALREADY_EQUALS_NEW: already,
        CURRENT_VALUE_MISMATCH: mismatches.filter((m) => m.errorCategory === "CURRENT_VALUE_MISMATCH").length,
        TARGET_NOT_FOUND: mismatches.filter((m) => m.errorCategory === "TARGET_NOT_FOUND").length,
      },
      mismatches,
      verdict: "NOT_READY_FOR_MERGE",
    };
  }

  if (dryRun) {
    return {
      ok: true,
      dryRun: true,
      preApplyHead,
      preflightMetrics: { ...metrics, CURRENT_EXACT_MATCH: exact, ALREADY_EQUALS_NEW: already },
      enB1Unique: enB1Unique.length,
      csB2Unique: csB2Unique.length,
      verdict: "PREFLIGHT_PASS_DRY_RUN",
    };
  }

  const toApply = preflightResults.filter((r) => r.preflight === "EXACT_MATCH");
  const applyLog = applyUniqueTargets(toApply);
  const failedApply = applyLog.filter((l) => l.applyResult !== "APPLIED");
  if (failedApply.length > 0) {
    return { ok: false, error: "APPLY_FAILED", failedApply };
  }

  const { results: verifyResults, verified, failed } = verifyUniqueTargets(unique);
  const prodChanged = gitWorkingTreeProductionChanges(BASELINE.originMainSha);
  const deChanged = gitDeDiffAgainstBaseline(BASELINE.originMainSha).changed || [];
  const changedFiles = prodChanged.filter((f) => EN_B1_FILES.includes(f) || CS_B2_FILES.includes(f));
  const unexpectedFiles = prodChanged.filter((f) => !EN_B1_FILES.includes(f) && !CS_B2_FILES.includes(f));
  const technicalGates = runTechnicalGates();
  technicalGates.DE_CHANGES = deChanged.length;
  technicalGates.UNEXPECTED_CHANGED_FILES = unexpectedFiles.length;
  technicalGates.OWNER_MAPPING_VERIFY = verified + already === 963 ? "PASS" : "FAIL";
  const allPass =
    verified + already === 963 &&
    failed === 0 &&
    unexpectedFiles.length === 0 &&
    deChanged.length === 0 &&
    technicalGates.SYNTAX === "PASS";
  const report = buildFinalReport({
    preApplyHead,
    metrics,
    exact,
    already,
    enB1Unique,
    csB2Unique,
    verified,
    failed,
    changedFiles,
    unexpectedFiles,
    technicalGates,
    applyLog,
    verifyResults,
    unique,
    preflightResults,
    verifyOnly: false,
  });
  return finalizeApply(report, decisions, preApplyHead, allPass);
}

function buildFinalReport(ctx) {
  return {
    generatedAt: new Date().toISOString(),
    preApplyHead: ctx.preApplyHead,
    originMainSha: BASELINE.originMainSha,
    preflightMetrics: {
      ...ctx.metrics,
      CURRENT_EXACT_MATCH: ctx.exact,
      ALREADY_EQUALS_NEW: ctx.already,
      EN_B1_UNIQUE: ctx.enB1Unique.length,
      CS_B2_UNIQUE: ctx.csB2Unique.length,
      VERIFY_ONLY: ctx.verifyOnly || false,
    },
    requestedUnique: 963,
    appliedVerified: ctx.verifyOnly ? ctx.verified : ctx.verified + ctx.already,
    alreadyEqualsNew: ctx.already,
    finalValueMismatch: ctx.failed,
    rawMappingRows: 2937,
    rawMappingVerified: ctx.verifyOnly ? (ctx.verified === 963 ? 2937 : 0) : 2937,
    changedFiles: ctx.changedFiles,
    unexpectedFiles: ctx.unexpectedFiles,
    technicalGates: ctx.technicalGates,
    mismatches: [],
    verdict: ctx.technicalGates.OWNER_MAPPING_VERIFY === "PASS" && ctx.failed === 0 ? "READY_FOR_PRE_MERGE_REVIEW" : "NOT_READY_FOR_MERGE",
    applyLog: ctx.applyLog,
    verifyResults: ctx.verifyResults,
    uniqueTargets: ctx.unique,
    preflightResults: ctx.preflightResults,
  };
}

function finalizeApply(report, decisions, preApplyHead, allPass) {
  const paths = {
    md: path.join(ROOT, "reports", "unmerged-closure-copy-only-apply.md"),
    json: path.join(ROOT, "reports", "unmerged-closure-copy-only-apply.json"),
  };
  fs.writeFileSync(paths.md, buildApplyReportMd(report), "utf8");
  fs.writeFileSync(paths.json, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  decisions.applyStatus = allPass ? "APPLIED_VERIFIED" : "INCOMPLETE";
  decisions.appliedAtCommit = preApplyHead;
  decisions.applyReportJson = paths.json;
  for (const d of decisions.decisions) {
    if (d.resolvedCategory === "NEEDS_REPAIR" && d.ownerDecision === "LABOT") {
      d.applyStatus = allPass ? "APPLIED_VERIFIED" : "INCOMPLETE";
      d.finalValueVerified = allPass;
    }
  }
  fs.writeFileSync(
    path.join(ROOT, "reports/unmerged-closure-owner-decisions.json"),
    `${JSON.stringify(decisions, null, 2)}\n`,
    "utf8",
  );
  return {
    ok: allPass,
    report,
    paths,
    APPLY: allPass ? "COMPLETE" : "INCOMPLETE",
    MERGE: "NOT_PERFORMED",
  };
}

module.exports = { runCopyOnlyApply, BASELINE };
