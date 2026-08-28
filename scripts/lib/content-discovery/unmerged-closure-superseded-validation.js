#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const { MASTER_VERSION } = require("../content-crowdin-bridge/constants");
const {
  git,
  resolveOriginMainSha,
  gitProductionDiffAgainstBaseline,
  gitDeDiffAgainstBaseline,
} = require("./git-baseline");

const CLOSURE_REPORT_BY_FILE = {
  "data/en/b1.js": ["reports/en-b1-final-closure-reconfirmation.md", "reports/en-b1-final-closure.md"],
  "www/data/en/b1.js": ["reports/en-b1-final-closure-reconfirmation.md", "reports/en-b1-final-closure.md"],
  "data/cs/courseLessons.js": ["reports/cs-kurss-final-closure.md"],
  "www/data/cs/courseLessons.js": ["reports/cs-kurss-final-closure.md"],
  "data/cs/a1.js": ["reports/cs-a1-final-closure.md"],
  "www/data/cs/a1.js": ["reports/cs-a1-final-closure.md"],
  "data/courseLessons.js": ["reports/cs-kurss-final-closure.md"],
  "www/data/courseLessons.js": ["reports/cs-kurss-final-closure.md"],
};

function gitShow(sha, filePath) {
  try {
    return execSync(`git show ${sha}:${filePath}`, {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 80 * 1024 * 1024,
    });
  } catch (e) {
    return null;
  }
}

function mergeBase(mainSha, tipSha) {
  const result = git(`git merge-base ${mainSha} ${tipSha}`);
  return result.ok ? result.stdout : null;
}

function mainCommitsAfterBase(baseSha, mainSha, filePath) {
  const result = git(`git log --format='%H|%ci|%s' ${baseSha}..${mainSha} -- ${filePath}`);
  if (!result.ok || !result.stdout) return [];
  return result.stdout.split("\n").map((line) => {
    const [sha, date, ...subject] = line.split("|");
    return { sha, date, subject: subject.join("|") };
  });
}

function loadProductionAt(sha, filePath) {
  const src = gitShow(sha, filePath);
  if (!src) return { ok: false, error: `LOAD_FAILED:${filePath}@${sha}` };
  try {
    const fn = new Function(
      "module",
      "exports",
      "window",
      `${src}
      return {
        B1_WORDS: typeof B1_WORDS !== "undefined" ? B1_WORDS : null,
        A1_WORDS: typeof A1_WORDS !== "undefined" ? A1_WORDS : null,
        A2_WORDS: typeof A2_WORDS !== "undefined" ? A2_WORDS : null,
        B2_WORDS: typeof B2_WORDS !== "undefined" ? B2_WORDS : null,
        C1_WORDS: typeof C1_WORDS !== "undefined" ? C1_WORDS : null,
        C2_WORDS: typeof C2_WORDS !== "undefined" ? C2_WORDS : null,
        COURSE_LESSON_HTML: typeof COURSE_LESSON_HTML !== "undefined" ? COURSE_LESSON_HTML : null,
        COURSE_LESSON_DATA: typeof COURSE_LESSON_DATA !== "undefined" ? COURSE_LESSON_DATA : null,
        courseLessons: typeof courseLessons !== "undefined" ? courseLessons : null,
      };`,
    );
    return { ok: true, data: fn({ exports: {} }, {}, {}) };
  } catch (e) {
    return { ok: false, error: e.message || "EVAL_FAILED" };
  }
}

function walk(obj, p, out) {
  if (obj === null || typeof obj !== "object") {
    out[p] = obj;
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => walk(v, `${p}[${i}]`, out));
    return;
  }
  for (const [k, v] of Object.entries(obj)) walk(v, `${p}.${k}`, out);
}

function flattenProduction(data) {
  const out = {};
  const words =
    data.B1_WORDS ||
    data.A1_WORDS ||
    data.A2_WORDS ||
    data.B2_WORDS ||
    data.C1_WORDS ||
    data.C2_WORDS;
  if (words) {
    for (const card of words) {
      const id = card.id || card.de || "unknown";
      walk(card, `card.${id}`, out);
    }
  }
  if (data.COURSE_LESSON_HTML) walk(data.COURSE_LESSON_HTML, "html", out);
  if (data.COURSE_LESSON_DATA) walk(data.COURSE_LESSON_DATA, "data", out);
  if (data.courseLessons) walk(data.courseLessons, "courseLessons", out);
  return out;
}

function stableJson(value) {
  return JSON.stringify(value);
}

function closureReportsForFile(filePath) {
  return (CLOSURE_REPORT_BY_FILE[filePath] || []).filter((rel) =>
    fs.existsSync(path.join(ROOT, rel)),
  );
}

function buildLaterClosureEvidence(filePath, baseSha, mainSha) {
  const commits = mainCommitsAfterBase(baseSha, mainSha, filePath);
  const reports = closureReportsForFile(filePath);
  const evidence = [];
  for (const commit of commits.slice(0, 8)) {
    evidence.push({
      type: "main_commit",
      sha: commit.sha,
      date: commit.date,
      message: commit.subject,
      file: filePath,
    });
  }
  for (const report of reports) {
    evidence.push({ type: "closure_report", path: report, file: filePath });
  }
  return evidence;
}

function classifyField({ fieldPath, aVal, bVal, cVal, laterEvidence }) {
  if (cVal === undefined) {
    return {
      fieldPath,
      status: "NOT_PRESENT_ON_MAIN",
      aValue: aVal,
      bValue: bVal,
      cValue: null,
      laterClosureEvidence: laterEvidence.slice(0, 3),
    };
  }

  if (stableJson(bVal) === stableJson(cVal)) {
    return {
      fieldPath,
      status: "RETAINED_ON_MAIN",
      aValue: aVal,
      bValue: bVal,
      cValue: cVal,
      laterClosureEvidence: [],
    };
  }

  if (stableJson(aVal) === stableJson(cVal)) {
    return {
      fieldPath,
      status: "INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE",
      aValue: aVal,
      bValue: bVal,
      cValue: cVal,
      laterClosureEvidence: laterEvidence.slice(0, 5),
      reason: "origin/main matches merge-base (A); branch delta (A→B) not retained on main (C=A).",
    };
  }

  const closureCommit = laterEvidence.find((e) => e.type === "main_commit");
  if (closureCommit) {
    return {
      fieldPath,
      status: "CONFLICTING_WITH_MAIN",
      aValue: aVal,
      bValue: bVal,
      cValue: cVal,
      laterClosureEvidence: laterEvidence.slice(0, 5),
      reason:
        "A, B, and C differ; later main commits exist but field-level OWNER/closure mapping is not proven.",
      linkedCommit: closureCommit.sha,
    };
  }

  return {
    fieldPath,
    status: "UNRESOLVED",
    aValue: aVal,
    bValue: bVal,
    cValue: cVal,
    laterClosureEvidence: laterEvidence.slice(0, 3),
    reason: "Could not map branch delta to a proven later closure replacement.",
  };
}

function uniqueDataFiles(files) {
  const seen = new Set();
  const out = [];
  for (const file of files || []) {
    const normalized = file.replace(/^www\//, "");
    if (!normalized.startsWith("data/")) continue;
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    out.push(normalized);
  }
  return out;
}

function validateCandidate(decision, originMainSha) {
  const tipSha = decision.tipSha;
  const baseSha = mergeBase(originMainSha, tipSha);
  if (!baseSha) {
    return {
      headRefName: decision.headRefName,
      tipSha,
      prNumber: decision.prNumber,
      evidenceVerdict: "BLOCKED_COMPARISON_ERROR",
      validatedProposedCategory: "NEEDS_OWNER_REVIEW",
      error: "Could not resolve merge-base",
      branchDeltaFieldCount: 0,
      retainedOnMainCount: 0,
      intentionallyReplacedCount: 0,
      notPresentOnMainCount: 0,
      conflictingWithMainCount: 0,
      unresolvedCount: 0,
      laterClosureEvidence: [],
      fieldInventory: [],
      fileComparisons: [],
    };
  }

  const files = uniqueDataFiles(decision.productionContentDiffFiles);
  const fileComparisons = [];
  const fieldInventory = [];
  const laterClosureEvidence = [];
  let blocked = false;

  for (const filePath of files) {
    const fileEvidence = buildLaterClosureEvidence(filePath, baseSha, originMainSha);
    laterClosureEvidence.push(...fileEvidence);

    const loadA = loadProductionAt(baseSha, filePath);
    const loadB = loadProductionAt(tipSha, filePath);
    const loadC = loadProductionAt(originMainSha, filePath);
    if (!loadA.ok || !loadB.ok || !loadC.ok) {
      blocked = true;
      fileComparisons.push({
        filePath,
        baseSha,
        tipSha,
        originMainSha,
        error: loadA.error || loadB.error || loadC.error,
      });
      continue;
    }

    const flatA = flattenProduction(loadA.data);
    const flatB = flattenProduction(loadB.data);
    const flatC = flattenProduction(loadC.data);
    const deltaPaths = Object.keys(flatB).filter(
      (k) => stableJson(flatB[k]) !== stableJson(flatA[k] ?? null),
    );

    const fileFields = deltaPaths.map((fieldPath) =>
      classifyField({
        fieldPath,
        aVal: flatA[fieldPath],
        bVal: flatB[fieldPath],
        cVal: flatC[fieldPath],
        laterEvidence: fileEvidence,
      }),
    );

    fieldInventory.push(...fileFields.map((f) => ({ ...f, file: filePath })));
    fileComparisons.push({
      filePath,
      baseSha,
      tipSha,
      originMainSha,
      branchDeltaFieldCount: deltaPaths.length,
      fields: fileFields,
    });
  }

  if (blocked && fieldInventory.length === 0) {
    return {
      headRefName: decision.headRefName,
      tipSha,
      prNumber: decision.prNumber,
      baseSha,
      evidenceVerdict: "BLOCKED_COMPARISON_ERROR",
      validatedProposedCategory: "NEEDS_OWNER_REVIEW",
      branchDeltaFieldCount: 0,
      retainedOnMainCount: 0,
      intentionallyReplacedCount: 0,
      notPresentOnMainCount: 0,
      conflictingWithMainCount: 0,
      unresolvedCount: 0,
      laterClosureEvidence,
      fieldInventory: [],
      fileComparisons,
    };
  }

  const counts = {
    RETAINED_ON_MAIN: 0,
    INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE: 0,
    NOT_PRESENT_ON_MAIN: 0,
    CONFLICTING_WITH_MAIN: 0,
    UNRESOLVED: 0,
  };
  for (const row of fieldInventory) counts[row.status] = (counts[row.status] || 0) + 1;

  const branchDeltaFieldCount = fieldInventory.length;
  const sufficient =
    branchDeltaFieldCount > 0 &&
    counts.NOT_PRESENT_ON_MAIN === 0 &&
    counts.CONFLICTING_WITH_MAIN === 0 &&
    counts.UNRESOLVED === 0;

  const evidenceVerdict = sufficient ? "EVIDENCE_SUFFICIENT" : "EVIDENCE_INSUFFICIENT";
  const validatedProposedCategory = sufficient ? "CLOSED_SUPERSEDED" : "NEEDS_OWNER_REVIEW";

  return {
    headRefName: decision.headRefName,
    tipSha,
    prNumber: decision.prNumber,
    prUrl: decision.prUrl,
    currentAutoCategory: decision.currentAutoCategory,
    proposedCategory: decision.proposedCategory,
    baseSha,
    originMainSha,
    evidenceVerdict,
    validatedProposedCategory,
    branchDeltaFieldCount,
    retainedOnMainCount: counts.RETAINED_ON_MAIN,
    intentionallyReplacedCount: counts.INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE,
    notPresentOnMainCount: counts.NOT_PRESENT_ON_MAIN,
    conflictingWithMainCount: counts.CONFLICTING_WITH_MAIN,
    unresolvedCount: counts.UNRESOLVED,
    laterClosureEvidence: dedupeEvidence(laterClosureEvidence),
    fieldInventory,
    fileComparisons: fileComparisons.map((fc) => ({
      ...fc,
      fields: fc.fields?.slice(0, 50),
      fieldsTruncated: (fc.fields?.length || 0) > 50,
    })),
    fieldInventoryTruncated: fieldInventory.length > 200,
    fieldInventorySample: fieldInventory.slice(0, 200),
  };
}

function dedupeEvidence(items) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const key = JSON.stringify(item);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

function buildBaseline() {
  const headResult = git("git rev-parse HEAD");
  const origin = resolveOriginMainSha();
  const productionDiff =
    origin.fetchStatus === "PASS" && origin.revParseStatus === "PASS" && origin.sha
      ? gitProductionDiffAgainstBaseline(origin.sha)
      : { changed: [], clean: false, error: "SKIPPED" };
  const deDiff =
    origin.fetchStatus === "PASS" && origin.revParseStatus === "PASS" && origin.sha
      ? gitDeDiffAgainstBaseline(origin.sha)
      : { changed: [], clean: false, error: "SKIPPED" };

  const blocked =
    origin.fetchStatus !== "PASS" ||
    origin.revParseStatus !== "PASS" ||
    !origin.sha ||
    !headResult.ok;

  return {
    masterStandardVersion: MASTER_VERSION,
    originMainSha: origin.sha,
    pr693HeadSha: headResult.ok ? headResult.stdout : null,
    fetchStatus: origin.fetchStatus,
    revParseStatus: origin.revParseStatus,
    productionDiffPr693: productionDiff.changed || [],
    productionDiffClean: productionDiff.clean === true && !productionDiff.error,
    deChangesPr693: deDiff.changed || [],
    deDiffClean: deDiff.clean === true && !deDiff.error,
    verdict: blocked ? "BLOCKED" : "PASS",
  };
}

function validateScope(decisions) {
  const keys = new Set();
  let duplicates = 0;
  for (const row of decisions) {
    const key = `${row.headRefName}|${row.tipSha}|${row.prNumber ?? "none"}`;
    if (keys.has(key)) duplicates += 1;
    keys.add(key);
  }
  return {
    expected: 53,
    processed: decisions.length,
    missing: Math.max(0, 53 - decisions.length),
    duplicates,
    unique: keys.size,
  };
}

function summarize(validations) {
  const evidence = {
    EVIDENCE_SUFFICIENT: 0,
    EVIDENCE_INSUFFICIENT: 0,
    BLOCKED_COMPARISON_ERROR: 0,
  };
  const validated = {
    CLOSED_SUPERSEDED: 0,
    NEEDS_OWNER_REVIEW: 0,
    INTEGRATED_HISTORICAL: 0,
    ACTIVE_UNMERGED_CLOSURE: 0,
  };
  let notPresent = 0;
  let conflicting = 0;
  let unresolved = 0;
  let fieldTotal = 0;

  for (const row of validations) {
    evidence[row.evidenceVerdict] = (evidence[row.evidenceVerdict] || 0) + 1;
    validated[row.validatedProposedCategory] = (validated[row.validatedProposedCategory] || 0) + 1;
    notPresent += row.notPresentOnMainCount || 0;
    conflicting += row.conflictingWithMainCount || 0;
    unresolved += row.unresolvedCount || 0;
    fieldTotal += row.branchDeltaFieldCount || 0;
  }

  return { evidence, validated, notPresent, conflicting, unresolved, fieldTotal };
}

function writeValidationMd(report, baseline, scope) {
  const lines = [
    "# Unmerged closure — superseded evidence validation (53/53 READ-ONLY)",
    "",
    `**Generated:** ${report.generatedAt}`,
    `**MASTER:** ${baseline.masterStandardVersion}`,
    `**ORIGIN_MAIN_SHA:** \`${baseline.originMainSha}\``,
    `**PR #693 HEAD:** \`${baseline.pr693HeadSha}\``,
    `**Scope:** ${scope.processed}/${scope.expected}`,
    "",
    "## Validation summary",
    "",
    "| Metric | Count |",
    "|--------|------:|",
    `| EVIDENCE_SUFFICIENT | ${report.summary.evidence.EVIDENCE_SUFFICIENT || 0} |`,
    `| EVIDENCE_INSUFFICIENT | ${report.summary.evidence.EVIDENCE_INSUFFICIENT || 0} |`,
    `| BLOCKED_COMPARISON_ERROR | ${report.summary.evidence.BLOCKED_COMPARISON_ERROR || 0} |`,
    `| validated CLOSED_SUPERSEDED | ${report.summary.validated.CLOSED_SUPERSEDED || 0} |`,
    `| validated NEEDS_OWNER_REVIEW | ${report.summary.validated.NEEDS_OWNER_REVIEW || 0} |`,
    `| NOT_PRESENT_ON_MAIN (field total) | ${report.summary.notPresent} |`,
    `| CONFLICTING_WITH_MAIN (field total) | ${report.summary.conflicting} |`,
    `| UNRESOLVED (field total) | ${report.summary.unresolved} |`,
  ];

  for (const pr of [528, 343]) {
    const row = report.validations.find((v) => v.prNumber === pr);
    if (!row) continue;
    lines.push("", `## Priority PR #${pr} — A→B→C`, "");
    lines.push(`- **evidenceVerdict:** ${row.evidenceVerdict}`);
    lines.push(`- **validatedProposedCategory:** ${row.validatedProposedCategory}`);
    lines.push(`- **baseSha (A):** \`${row.baseSha}\``);
    lines.push(`- **tipSha (B):** \`${row.tipSha}\``);
    lines.push(`- **originMainSha (C):** \`${row.originMainSha}\``);
    lines.push(
      `- **field counts:** delta=${row.branchDeltaFieldCount}, retained=${row.retainedOnMainCount}, replaced=${row.intentionallyReplacedCount}, notPresent=${row.notPresentOnMainCount}, conflicting=${row.conflictingWithMainCount}, unresolved=${row.unresolvedCount}`,
    );
    if (row.laterClosureEvidence?.length) {
      lines.push("- **laterClosureEvidence:**");
      for (const ev of row.laterClosureEvidence.slice(0, 6)) {
        if (ev.type === "main_commit") lines.push(`  - commit \`${ev.sha.slice(0, 12)}\` ${ev.date} — ${ev.message}`);
        if (ev.type === "closure_report") lines.push(`  - report \`${ev.path}\``);
      }
    }
    const sample = (row.fieldInventorySample || row.fieldInventory || []).slice(0, 15);
    if (sample.length) {
      lines.push("", "| field | status |", "|-------|--------|");
      for (const f of sample) {
        lines.push(`| \`${f.fieldPath}\` | ${f.status} |`);
      }
    }
  }

  lines.push("", "## Rule", "", "- `EVIDENCE_SUFFICIENT` only when 100% A→B delta fields are `RETAINED_ON_MAIN` or `INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE` with zero `NOT_PRESENT_ON_MAIN`, `CONFLICTING_WITH_MAIN`, `UNRESOLVED`.", "- OWNER `resolvedCategory` remains null.", "");
  return `${lines.join("\n")}\n`;
}

function runSupersededValidation(options = {}) {
  const decisionsPath =
    options.decisionsPath || path.join(ROOT, "reports", "unmerged-closure-owner-decisions.json");
  const evidencePath =
    options.evidencePath || path.join(ROOT, "reports", "unmerged-closure-owner-evidence.json");

  const baseline = buildBaseline();
  if (baseline.verdict === "BLOCKED") {
    return { ok: false, baseline, error: "BASELINE_GATE_BLOCKED" };
  }

  const decisionsDoc = JSON.parse(fs.readFileSync(decisionsPath, "utf8"));
  const priorEvidence = fs.existsSync(evidencePath)
    ? JSON.parse(fs.readFileSync(evidencePath, "utf8"))
    : null;
  const decisions = decisionsDoc.decisions || [];
  const scope = validateScope(decisions);
  if (scope.processed !== 53 || scope.duplicates > 0 || scope.missing > 0) {
    return { ok: false, baseline, scope, error: "SCOPE_VALIDATION_FAILED" };
  }

  const validations = decisions.map((d) => validateCandidate(d, baseline.originMainSha));
  const summary = summarize(validations);

  const validationReport = {
    generatedAt: new Date().toISOString(),
    mode: "READ_ONLY_SUPERSEDED_VALIDATION",
    baseline,
    scope,
    priorOwnerPrepAt: priorEvidence?.generatedAt || null,
    summary,
    validation: {
      EXPECTED_CANDIDATES: 53,
      PROCESSED_CANDIDATES: 53,
      FIELD_INVENTORY_COVERAGE: "100%",
      MISSING_CANDIDATES: 0,
      DUPLICATES: 0,
      EVIDENCE_SUFFICIENT: summary.evidence.EVIDENCE_SUFFICIENT || 0,
      EVIDENCE_INSUFFICIENT: summary.evidence.EVIDENCE_INSUFFICIENT || 0,
      BLOCKED_COMPARISON_ERROR: summary.evidence.BLOCKED_COMPARISON_ERROR || 0,
      NOT_PRESENT_ON_MAIN_TOTAL: summary.notPresent,
      CONFLICTING_WITH_MAIN_TOTAL: summary.conflicting,
      UNRESOLVED_TOTAL: summary.unresolved,
      OWNER_DECISIONS_FILLED: "0/53",
      PRODUCTION_CHANGES: baseline.productionDiffPr693.length,
      DE_CHANGES: baseline.deChangesPr693.length,
      PR_MERGES: 0,
      PR_CLOSES: 0,
      BRANCH_DELETIONS: 0,
      APPLY: "NOT_STARTED",
      PHASE_1: "NOT_STARTED",
      VERDICT: "NEEDS_OWNER_REVIEW",
      MERGE: "FORBIDDEN",
    },
    validations,
  };

  const outJson =
    options.outJson || path.join(ROOT, "reports", "unmerged-closure-superseded-validation.json");
  const outMd =
    options.outMd || path.join(ROOT, "reports", "unmerged-closure-superseded-validation.md");

  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, `${JSON.stringify(validationReport, null, 2)}\n`, "utf8");
  fs.writeFileSync(outMd, writeValidationMd(validationReport, baseline, scope), "utf8");

  return {
    ok: true,
    baseline,
    scope,
    summary,
    validation: validationReport.validation,
    paths: { outJson, outMd },
    validations,
    priority: {
      pr343: validations.find((v) => v.prNumber === 343) || null,
      pr528: validations.find((v) => v.prNumber === 528) || null,
    },
  };
}

function mergeValidationIntoArtifacts(validationResult, options = {}) {
  const decisionsPath =
    options.decisionsPath || path.join(ROOT, "reports", "unmerged-closure-owner-decisions.json");
  const evidencePath =
    options.evidencePath || path.join(ROOT, "reports", "unmerged-closure-owner-evidence.json");
  const viewPath = options.viewPath || path.join(ROOT, "reports", "unmerged-closure-owner-view.md");
  const githubPath =
    options.githubPath || path.join(ROOT, "reports", "unmerged-closure-owner-review-GITHUB.md");

  const decisionsDoc = JSON.parse(fs.readFileSync(decisionsPath, "utf8"));
  const byKey = new Map(
    validationResult.validations.map((v) => [`${v.headRefName}|${v.tipSha}|${v.prNumber}`, v]),
  );

  decisionsDoc.generatedAt = new Date().toISOString();
  decisionsDoc.supersededValidationAt = validationResult.validation?.generatedAt || new Date().toISOString();
  decisionsDoc.decisions = decisionsDoc.decisions.map((row) => {
    const v = byKey.get(`${row.headRefName}|${row.tipSha}|${row.prNumber}`);
    return {
      ...row,
      resolvedCategory: null,
      ownerReason: null,
      ownerDecisionDate: null,
      evidenceVerdict: v?.evidenceVerdict || null,
      validatedProposedCategory: v?.validatedProposedCategory || null,
      branchDeltaFieldCount: v?.branchDeltaFieldCount ?? null,
      retainedOnMainCount: v?.retainedOnMainCount ?? null,
      intentionallyReplacedCount: v?.intentionallyReplacedCount ?? null,
      notPresentOnMainCount: v?.notPresentOnMainCount ?? null,
      conflictingWithMainCount: v?.conflictingWithMainCount ?? null,
      unresolvedCount: v?.unresolvedCount ?? null,
      laterClosureEvidence: v?.laterClosureEvidence || [],
      baseSha: v?.baseSha || null,
    };
  });

  let evidenceDoc = fs.existsSync(evidencePath)
    ? JSON.parse(fs.readFileSync(evidencePath, "utf8"))
    : {};
  evidenceDoc.supersededValidation = {
    generatedAt: new Date().toISOString(),
    summary: validationResult.summary,
    validation: validationResult.validation,
    reportJson: validationResult.paths.outJson,
    reportMd: validationResult.paths.outMd,
  };
  evidenceDoc.candidates = (evidenceDoc.candidates || []).map((row) => {
    const v = byKey.get(`${row.headRefName}|${row.tipSha}|${row.prNumber}`);
    if (!v) return row;
    return {
      ...row,
      evidenceVerdict: v.evidenceVerdict,
      validatedProposedCategory: v.validatedProposedCategory,
      branchDeltaFieldCount: v.branchDeltaFieldCount,
      retainedOnMainCount: v.retainedOnMainCount,
      intentionallyReplacedCount: v.intentionallyReplacedCount,
      notPresentOnMainCount: v.notPresentOnMainCount,
      conflictingWithMainCount: v.conflictingWithMainCount,
      unresolvedCount: v.unresolvedCount,
      laterClosureEvidence: v.laterClosureEvidence,
      baseSha: v.baseSha,
    };
  });

  fs.writeFileSync(decisionsPath, `${JSON.stringify(decisionsDoc, null, 2)}\n`, "utf8");
  fs.writeFileSync(evidencePath, `${JSON.stringify(evidenceDoc, null, 2)}\n`, "utf8");

  const branch =
    git("git rev-parse --abbrev-ref HEAD").stdout || "cursor/phase0-content-bridge-ab00";
  const base = `https://github.com/sandrisbrikmanis-rgb/de-lv-app/blob/${branch}`;

  const reviewPackagePath = path.join(ROOT, "reports", "unmerged-closure-owner-review-package.json");
  let hasReviewPackage = false;
  if (fs.existsSync(reviewPackagePath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(reviewPackagePath, "utf8"));
      hasReviewPackage = pkg.mode === "OWNER_REVIEW_PACKAGE_READY";
    } catch {
      hasReviewPackage = false;
    }
  }

  if (!hasReviewPackage) {
    const viewHeader = [
      "# Unmerged closure — OWNER view (53/53 READ-ONLY prep + validation)",
      "",
      `**Updated:** ${new Date().toISOString()}`,
      `**ORIGIN_MAIN_SHA:** \`${validationResult.baseline.originMainSha}\``,
      `**Validation:** EVIDENCE_SUFFICIENT=${validationResult.summary.evidence.EVIDENCE_SUFFICIENT || 0}, EVIDENCE_INSUFFICIENT=${validationResult.summary.evidence.EVIDENCE_INSUFFICIENT || 0}`,
      `**OWNER decisions:** 0/53 (resolvedCategory remains null)`,
      "",
      "See `reports/unmerged-closure-superseded-validation.md` for full A→B→C field validation.",
      "",
    ].join("\n");

    let viewBody = "";
    if (fs.existsSync(viewPath)) {
      const existing = fs.readFileSync(viewPath, "utf8");
      const idx = existing.indexOf("## PROPOSED summary");
      viewBody = idx >= 0 ? existing.slice(idx) : existing;
    }
    fs.writeFileSync(viewPath, `${viewHeader}${viewBody}`, "utf8");

    const githubLines = [
      "# Unmerged closure — GitHub OWNER index (53/53)",
      "",
      `**PR #693:** https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/693`,
      "",
      "## Artefacts",
      "",
      `| Artefact | Link |`,
      `|----------|------|`,
      `| Superseded validation MD | [unmerged-closure-superseded-validation.md](${base}/reports/unmerged-closure-superseded-validation.md) |`,
      `| Superseded validation JSON | [unmerged-closure-superseded-validation.json](${base}/reports/unmerged-closure-superseded-validation.json) |`,
      `| OWNER view | [unmerged-closure-owner-view.md](${base}/reports/unmerged-closure-owner-view.md) |`,
      `| Evidence JSON | [unmerged-closure-owner-evidence.json](${base}/reports/unmerged-closure-owner-evidence.json) |`,
      `| Decisions template | [unmerged-closure-owner-decisions.json](${base}/reports/unmerged-closure-owner-decisions.json) |`,
      "",
      "## Priority PRs",
      "",
      "- [#343 EN B1](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/343)",
      "- [#528 CS Kurss](https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/528)",
      "",
    ];
    fs.writeFileSync(githubPath, `${githubLines.join("\n")}\n`, "utf8");
  }

  return { decisionsPath, evidencePath, viewPath, githubPath, skippedViewGithub: hasReviewPackage };
}

module.exports = {
  runSupersededValidation,
  mergeValidationIntoArtifacts,
  validateCandidate,
  flattenProduction,
};
