#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { git } = require("./git-baseline");
const {
  runSupersededValidation,
  validateCandidate,
} = require("./unmerged-closure-superseded-validation");

const EXPECTED_BASELINE = {
  originMainSha: "93c372824359b00bd73d37ae3193bdf587118e75",
  pr693HeadSha: "5425de1122ee2a9dc1fbde65f348e2e133faa94b",
};

const CLOSURE_REPORT_HINTS = {
  "data/cs/a1.js": [
    "reports/cs-a1-final-closure-reconfirmation.md",
    "reports/cs-a1-final-closure-repair-main-integration.md",
    "reports/cs-a1-final-closure-residual-repair.md",
  ],
  "data/cs/b2.js": ["reports/cs-b2-final-closure-audit.md"],
  "data/es/courseLessons.js": [
    "reports/es-kurss-lessons-01-21-final-closure.md",
    "reports/es-kurss-lessons-01-21-owner-gala-main-closure.md",
  ],
};

function assertBaseline(baseline, pr693HeadSha) {
  const errors = [];
  if (baseline.originMainSha !== EXPECTED_BASELINE.originMainSha) {
    errors.push(
      `ORIGIN_MAIN_SHA mismatch: expected ${EXPECTED_BASELINE.originMainSha}, got ${baseline.originMainSha}`,
    );
  }
  if (pr693HeadSha !== EXPECTED_BASELINE.pr693HeadSha) {
    errors.push(
      `PR_693_HEAD_SHA mismatch: expected ${EXPECTED_BASELINE.pr693HeadSha}, got ${pr693HeadSha}`,
    );
  }
  return errors;
}

function loadJson(relPath) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, relPath), "utf8"));
}

function existingReportsForFiles(files) {
  const reports = new Set();
  for (const file of files || []) {
    const normalized = file.replace(/^www\//, "");
    for (const rel of CLOSURE_REPORT_HINTS[normalized] || []) {
      if (fs.existsSync(path.join(ROOT, rel))) reports.add(rel);
    }
  }
  return [...reports];
}

function groupFieldsByStatus(fieldInventory) {
  const groups = {
    RETAINED_ON_MAIN: [],
    INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE: [],
    NOT_PRESENT_ON_MAIN: [],
    CONFLICTING_WITH_MAIN: [],
    UNRESOLVED: [],
  };
  for (const row of fieldInventory || []) {
    if (groups[row.status]) groups[row.status].push(row);
  }
  return groups;
}

function extractCardIds(fieldPath) {
  const m = fieldPath.match(/^card\.([^.[\]]+)/);
  return m ? m[1] : null;
}

function buildEvidenceRefs(validation, decision) {
  const fields = validation.fieldInventory || validation.fieldInventorySample || [];
  const groups = groupFieldsByStatus(fields);
  const cardIds = {
    retained: [...new Set(groups.RETAINED_ON_MAIN.map((f) => extractCardIds(f.fieldPath)).filter(Boolean))],
    replaced: [
      ...new Set(
        groups.INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE.map((f) => extractCardIds(f.fieldPath)).filter(
          Boolean,
        ),
      ),
    ],
  };

  const refs = {
    baseline: {
      originMainSha: validation.originMainSha,
      baseShaA: validation.baseSha,
      tipShaB: validation.tipSha,
    },
    pr: {
      number: decision.prNumber,
      url: decision.prUrl,
      headRefName: decision.headRefName,
    },
    productionFiles: (decision.productionContentDiffFiles || [])
      .filter((f) => f.startsWith("data/"))
      .map((f) => f.replace(/^www\//, "")),
    validation: {
      evidenceVerdict: validation.evidenceVerdict,
      branchDeltaFieldCount: validation.branchDeltaFieldCount,
      retainedOnMainCount: validation.retainedOnMainCount,
      intentionallyReplacedCount: validation.intentionallyReplacedCount,
      notPresentOnMainCount: validation.notPresentOnMainCount,
      conflictingWithMainCount: validation.conflictingWithMainCount,
      unresolvedCount: validation.unresolvedCount,
    },
    mainCommits: (validation.laterClosureEvidence || [])
      .filter((e) => e.type === "main_commit")
      .slice(0, 8)
      .map((e) => ({ sha: e.sha, date: e.date, message: e.message, file: e.file })),
    closureReports: [
      ...new Set([
        ...(decision.latestKnownClosureMetadata || []),
        ...existingReportsForFiles(decision.productionContentDiffFiles),
        ...(validation.laterClosureEvidence || [])
          .filter((e) => e.type === "closure_report")
          .map((e) => e.path),
      ]),
    ],
    fieldPaths: {
      retainedSample: groups.RETAINED_ON_MAIN.slice(0, 15).map((f) => ({
        path: f.fieldPath,
        file: f.file,
      })),
      replacedSample: groups.INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE.slice(0, 15).map((f) => ({
        path: f.fieldPath,
        file: f.file,
        linkedCommit: f.linkedCommit || null,
      })),
      notPresent: groups.NOT_PRESENT_ON_MAIN.map((f) => ({ path: f.fieldPath, file: f.file })),
      conflicting: groups.CONFLICTING_WITH_MAIN.slice(0, 15).map((f) => ({ path: f.fieldPath, file: f.file })),
    },
    cardIds,
  };

  return refs;
}

function buildOwnerRationale(validation, evidenceRefs) {
  const v = validation;
  const lines = [
    `A→B→C field inventory: ${v.branchDeltaFieldCount} changed production field(s) on branch vs merge-base.`,
    `RETAINED_ON_MAIN=${v.retainedOnMainCount}; INTENTIONALLY_REPLACED_BY_LATER_OWNER_CLOSURE=${v.intentionallyReplacedCount}; NOT_PRESENT_ON_MAIN=${v.notPresentOnMainCount}; CONFLICTING_WITH_MAIN=${v.conflictingWithMainCount}; UNRESOLVED=${v.unresolvedCount}.`,
  ];

  if (v.retainedOnMainCount > 0) {
    lines.push(
      `${v.retainedOnMainCount} branch delta field(s) already match origin/main (B=C); integration not required.`,
    );
  }
  if (v.intentionallyReplacedCount > 0) {
    lines.push(
      `${v.intentionallyReplacedCount} branch delta field(s) were not retained on main (C=A); superseded by later main/OWNER closure path.`,
    );
  }
  if (evidenceRefs.mainCommits.length) {
    lines.push(
      `Later main commits: ${evidenceRefs.mainCommits
        .slice(0, 3)
        .map((c) => `${c.sha.slice(0, 12)} (${c.message})`)
        .join("; ")}.`,
    );
  }
  if (evidenceRefs.closureReports.length) {
    lines.push(`Closure reports on main: ${evidenceRefs.closureReports.join(", ")}.`);
  }
  if (evidenceRefs.cardIds.retained.length) {
    lines.push(`Retained card sample: ${evidenceRefs.cardIds.retained.slice(0, 8).join(", ")}.`);
  }
  if (evidenceRefs.cardIds.replaced.length) {
    lines.push(`Replaced card sample: ${evidenceRefs.cardIds.replaced.slice(0, 8).join(", ")}.`);
  }

  return lines.join(" ");
}

function buildPreparedEntry(decision, validation, recheck) {
  const evidenceRefs = buildEvidenceRefs(validation, decision);
  const ownerRationale = buildOwnerRationale(validation, evidenceRefs);

  return {
    headRefName: decision.headRefName,
    tipSha: decision.tipSha,
    prNumber: decision.prNumber,
    prUrl: decision.prUrl,
    evidenceVerdict: validation.evidenceVerdict,
    recheckPassed: recheck.passed,
    recheckNote: recheck.note,
    preparedOwnerDecision: {
      status: "PENDING_OWNER_APPROVAL",
      ownerDecision: "APSTIPRINĀT",
      preparedResolvedCategory: "CLOSED_SUPERSEDED",
      ownerRationale,
      evidenceRefs,
      preparedAt: new Date().toISOString(),
      preparedBy: "READ_ONLY_OWNER_PREP",
      applyToResolvedCategory: false,
      note: "Copy preparedResolvedCategory → resolvedCategory only after OWNER explicit approval.",
    },
    resolvedCategory: null,
    ownerReason: null,
    ownerDecisionDate: null,
  };
}

function recheckValidation(decision, originMainSha) {
  const fresh = validateCandidate(decision, originMainSha);
  const passed =
    fresh.evidenceVerdict === "EVIDENCE_SUFFICIENT" &&
    fresh.notPresentOnMainCount === 0 &&
    fresh.conflictingWithMainCount === 0 &&
    fresh.unresolvedCount === 0 &&
    fresh.branchDeltaFieldCount > 0;
  return {
    passed,
    note: passed
      ? "Recheck confirms EVIDENCE_SUFFICIENT with zero blocking field statuses."
      : `Recheck failed: verdict=${fresh.evidenceVerdict}, notPresent=${fresh.notPresentOnMainCount}, conflicting=${fresh.conflictingWithMainCount}, unresolved=${fresh.unresolvedCount}`,
    fresh,
  };
}

function writePreparedMd(packageDoc) {
  const lines = [
    "# Unmerged closure — OWNER decision preparation (12 EVIDENCE_SUFFICIENT)",
    "",
    `**Generated:** ${packageDoc.generatedAt}`,
    `**ORIGIN_MAIN_SHA:** \`${packageDoc.baseline.originMainSha}\``,
    `**PR #693 HEAD:** \`${packageDoc.baseline.pr693HeadSha}\``,
    `**Coverage:** ${packageDoc.coverage.processed}/${packageDoc.coverage.expected}`,
    "",
    "## Summary",
    "",
    "| Bucket | Count |",
    "|--------|------:|",
    `| EVIDENCE_SUFFICIENT prepared | ${packageDoc.preparedCount} |`,
    `| EVIDENCE_INSUFFICIENT (no prepared decision) | ${packageDoc.blockedCount} |`,
    "",
    "## Prepared entries (PENDING_OWNER_APPROVAL)",
    "",
    "These are **recommendations only**. `resolvedCategory` in `unmerged-closure-owner-decisions.json` remains null until OWNER copies approval.",
    "",
  ];

  for (const entry of packageDoc.prepared) {
    lines.push(`### PR #${entry.prNumber} — \`${entry.headRefName}\``, "");
    lines.push(`- **preparedResolvedCategory:** CLOSED_SUPERSEDED`);
    lines.push(`- **ownerDecision:** APSTIPRINĀT`);
    lines.push(`- **recheck:** ${entry.recheckPassed ? "PASS" : "FAIL"}`);
    lines.push(`- **field inventory:** ${entry.preparedOwnerDecision.evidenceRefs.validation.branchDeltaFieldCount} delta`);
    lines.push(`- **rationale:** ${entry.preparedOwnerDecision.ownerRationale}`);
    lines.push("- **evidenceRefs:**");
    lines.push(`  - production: ${entry.preparedOwnerDecision.evidenceRefs.productionFiles.join(", ")}`);
    lines.push(
      `  - main commits: ${entry.preparedOwnerDecision.evidenceRefs.mainCommits
        .slice(0, 3)
        .map((c) => c.sha.slice(0, 12))
        .join(", ")}`,
    );
    lines.push(
      `  - reports: ${entry.preparedOwnerDecision.evidenceRefs.closureReports.join(", ") || "(none)"}`,
    );
    lines.push("");
  }

  lines.push("## Blocked (41 EVIDENCE_INSUFFICIENT)", "", "No prepared OWNER decision — field-level review required first.", "");
  return `${lines.join("\n")}\n`;
}

function runOwnerDecisionPreparation(options = {}) {
  const headResult = git("git rev-parse HEAD");
  const pr693HeadSha = headResult.ok ? headResult.stdout : null;

  const validationDoc = loadJson("reports/unmerged-closure-superseded-validation.json");
  const decisionsDoc = loadJson("reports/unmerged-closure-owner-decisions.json");
  const evidenceDoc = loadJson("reports/unmerged-closure-owner-evidence.json");

  const baselineErrors = assertBaseline(validationDoc.baseline, pr693HeadSha);
  if (baselineErrors.length) {
    return { ok: false, error: "BASELINE_MISMATCH", baselineErrors };
  }
  if (decisionsDoc.originMainSha !== EXPECTED_BASELINE.originMainSha) {
    return { ok: false, error: "DECISIONS_BASELINE_MISMATCH" };
  }

  const decisions = decisionsDoc.decisions || [];
  const coverage = {
    expected: 53,
    processed: decisions.length,
    missing: Math.max(0, 53 - decisions.length),
    duplicates: 0,
  };
  const keys = new Set();
  for (const row of decisions) {
    const key = `${row.headRefName}|${row.tipSha}|${row.prNumber}`;
    if (keys.has(key)) coverage.duplicates += 1;
    keys.add(key);
  }
  if (coverage.processed !== 53 || coverage.duplicates > 0) {
    return { ok: false, error: "COVERAGE_FAILED", coverage };
  }

  const validationByKey = new Map(
    validationDoc.validations.map((v) => [`${v.headRefName}|${v.tipSha}|${v.prNumber}`, v]),
  );

  const sufficient = decisions.filter((d) => {
    const v = validationByKey.get(`${d.headRefName}|${d.tipSha}|${d.prNumber}`);
    return v?.evidenceVerdict === "EVIDENCE_SUFFICIENT";
  });

  const prepared = [];
  for (const decision of sufficient) {
    const validation = validationByKey.get(`${decision.headRefName}|${decision.tipSha}|${decision.prNumber}`);
    const recheck = recheckValidation(decision, validationDoc.baseline.originMainSha);
  if (!recheck.passed) {
      return {
        ok: false,
        error: "RECHECK_FAILED",
        candidate: decision.headRefName,
        recheck,
      };
    }
    prepared.push(buildPreparedEntry(decision, recheck.fresh, recheck));
  }

  const preparedByKey = new Map(
    prepared.map((p) => [`${p.headRefName}|${p.tipSha}|${p.prNumber}`, p]),
  );

  const updatedDecisions = {
    ...decisionsDoc,
    generatedAt: new Date().toISOString(),
    pr693HeadSha,
    ownerDecisionPreparationAt: new Date().toISOString(),
    preparedOwnerDecisionCount: prepared.length,
    decisions: decisions.map((row) => {
      const p = preparedByKey.get(`${row.headRefName}|${row.tipSha}|${row.prNumber}`);
      return {
        ...row,
        resolvedCategory: null,
        ownerReason: null,
        ownerDecisionDate: null,
        preparedOwnerDecision: p?.preparedOwnerDecision || null,
        preparedOwnerDecisionStatus: p ? "PENDING_OWNER_APPROVAL" : "NOT_PREPARED_EVIDENCE_INSUFFICIENT",
      };
    }),
  };

  const packageDoc = {
    generatedAt: new Date().toISOString(),
    mode: "READ_ONLY_OWNER_DECISION_PREPARATION",
    baseline: {
      originMainSha: EXPECTED_BASELINE.originMainSha,
      pr693HeadSha: EXPECTED_BASELINE.pr693HeadSha,
    },
    coverage,
    preparedCount: prepared.length,
    blockedCount: 53 - prepared.length,
    prepared,
    blocked: decisions
      .filter((d) => !preparedByKey.has(`${d.headRefName}|${d.tipSha}|${d.prNumber}`))
      .map((d) => ({
        headRefName: d.headRefName,
        prNumber: d.prNumber,
        evidenceVerdict: d.evidenceVerdict,
        validatedProposedCategory: d.validatedProposedCategory,
        reason: "EVIDENCE_INSUFFICIENT — no prepared OWNER decision",
      })),
  };

  const outPreparedJson =
    options.outPreparedJson ||
    path.join(ROOT, "reports", "unmerged-closure-owner-decisions-prepared.json");
  const outPreparedMd =
    options.outPreparedMd || path.join(ROOT, "reports", "unmerged-closure-owner-decisions-prepared.md");
  const outDecisions =
    options.outDecisions || path.join(ROOT, "reports", "unmerged-closure-owner-decisions.json");

  fs.mkdirSync(path.dirname(outPreparedJson), { recursive: true });
  fs.writeFileSync(outPreparedJson, `${JSON.stringify(packageDoc, null, 2)}\n`, "utf8");
  fs.writeFileSync(outPreparedMd, writePreparedMd(packageDoc), "utf8");
  fs.writeFileSync(outDecisions, `${JSON.stringify(updatedDecisions, null, 2)}\n`, "utf8");

  if (evidenceDoc) {
    evidenceDoc.ownerDecisionPreparation = {
      generatedAt: packageDoc.generatedAt,
      preparedCount: packageDoc.preparedCount,
      blockedCount: packageDoc.blockedCount,
      preparedJson: outPreparedJson,
      preparedMd: outPreparedMd,
    };
    fs.writeFileSync(
      options.outEvidence || path.join(ROOT, "reports", "unmerged-closure-owner-evidence.json"),
      `${JSON.stringify(evidenceDoc, null, 2)}\n`,
      "utf8",
    );
  }

  return {
    ok: true,
    baseline: packageDoc.baseline,
    coverage,
    preparedCount: prepared.length,
    blockedCount: packageDoc.blockedCount,
    paths: { outPreparedJson, outPreparedMd, outDecisions },
    prepared,
  };
}

module.exports = {
  runOwnerDecisionPreparation,
  buildPreparedEntry,
  buildEvidenceRefs,
  EXPECTED_BASELINE,
};
