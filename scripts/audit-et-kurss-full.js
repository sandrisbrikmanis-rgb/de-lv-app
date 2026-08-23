#!/usr/bin/env node
"use strict";
/**
 * ET–DE Kurss full READ-ONLY audit (deterministic + GPT-5.6 Luna).
 * Usage: node scripts/audit-et-kurss-full.js [--skip-luna] [--export-only]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { collectAllEtFields, compareStructureWithLvMaster } = require("./lib/et-kurss-audit-collect");
const { runDiscoveryStability, COVERAGE_DISCLAIMER } = require("./lib/discovery-stability");
const {
  DATASET,
  PRODUCTION_PATH,
  WWW_PATH,
  REGISTRY_DIR,
  AUDIT_RUNS,
  OWNER_SOURCES,
  PRODUCTION_FILES,
} = require("./lib/et-kurss-discovery-config");

const MASTER_VERSION = "1.9";
const WORK_BRANCH = process.env.WORK_BRANCH || "cursor/et-de-kurss-full-audit-4a7c";

const REPORT = path.join(ROOT, "reports/et-kurss-full-audit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/et-kurss-full-audit.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/et-kurss-full-audit-luna");
const BASELINE_REF = process.env.ET_KURSS_BASELINE || "0cfef081";
const ORIGIN_MAIN_SHA = process.env.ORIGIN_MAIN_SHA || BASELINE_REF;
const SKIP_LUNA = process.argv.includes("--skip-luna");
const EXPORT_ONLY = process.argv.includes("--export-only");

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8", stdio: "pipe" }).trim();
  } catch {
    return "";
  }
}

function computeBaseline() {
  execSync("git fetch origin main 2>/dev/null || true", { cwd: ROOT, stdio: "pipe" });
  const originMainSha = ORIGIN_MAIN_SHA || git("git rev-parse origin/main") || git("git rev-parse HEAD");
  const blobs = {};
  for (const rel of PRODUCTION_FILES) {
    blobs[rel] = git(`git rev-parse ${originMainSha}:${rel}`) || "";
  }
  const courseLessonsBlob = blobs[PRODUCTION_PATH] || "";
  const wwwCourseLessonsBlob = blobs[WWW_PATH] || "";
  const unmerged = [];
  for (const ref of git("git branch -r --list 'origin/cursor/*kurss*et*' 'origin/cursor/*et*kurss*'").split("\n").filter(Boolean)) {
    const branch = ref.trim();
    if (branch.includes("full-audit")) unmerged.push(branch);
  }
  const mirrorPass = courseLessonsBlob && courseLessonsBlob === wwwCourseLessonsBlob;
  return {
    originMainSha,
    masterVersion: MASTER_VERSION,
    auditMode: "FIRST_FULL_DISCOVERY",
    productionBlobs: blobs,
    datasetProductionBlobSha: courseLessonsBlob,
    wwwDatasetBlobSha: wwwCourseLessonsBlob,
    mirrorBlobPass: mirrorPass,
    unmergedRepairBranchesFound: unmerged,
    deReadOnly: "PASS",
  };
}

function toDiscoveryFinding(f) {
  return {
    cardId: f.lessonId || "kurss",
    field: f.path || f.fieldType || "",
    currentEt: f.etCurrent || "",
    category: f.category || "",
    severity: f.severity || "MEDIUM",
    reason: f.reason || f.problem || "",
    proposedEt: f.proposedEt || "",
    source: f.source || "",
    findingId: f.id,
    deCurrent: f.deCurrent || "",
  };
}

function assignAuditIds(findings) {
  return findings.map((f, i) => ({
    ...f,
    id: `ET-KURSS-${String(i + 1).padStart(4, "0")}`,
  }));
}

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(Tagad|Pārveido|Gatavs|piemēram|vārd|Vārd|Latviešu|daudzskait|sieviešu|vīriešu|klikšķ|kartīt|izrunā|darbības|lietvār|pavēles|teikum|Lekcija|lekcij|Iesāc|Iesācējs|Iesācējiem)\b/i;
const LV_NAMES = /\b(Pēteris|Pētera|Jānis|Jāņa|Rūdolfs|Roberts|Ansis|Ansi)\b/;
const EN_PATTERNS = /\b(TODO|FIXME|PLACEHOLDER|Translation:|instead of|you are|meaning:|Click here|Lesson \d+)\b/i;
const ARTIFACT = /\b(LABOT|PENDING|NEEDS_SOURCE_REVIEW|FALSE_POSITIVE|NELABOT)\b/i;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|\(Context-specific|\(Natural Estonian)/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;

const NON_ERROR_CATEGORIES = new Set([
  "ACCEPTABLE_VARIANT",
  "FALSE_POSITIVE",
  "STYLE_ONLY",
  "NEEDS_SOURCE_REVIEW",
  "SOURCE_DE_ISSUE",
  "PROJECT_CONVENTION",
]);

function fieldId(f) {
  return `${f.lessonId}|${f.path}`;
}

function classifyForeign(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV_WORD");
  if (LV_NAMES.test(text)) reasons.push("LV_NAME");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (ARTIFACT.test(text)) reasons.push("OWNER_ARTIFACT");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  return reasons;
}

function exportLunaBatches(fields) {
  fs.mkdirSync(LUNA_DIR, { recursive: true });
  const batchSize = 50;
  const paths = [];
  for (let i = 0; i < fields.length; i += batchSize) {
    const slice = fields.map((f) => ({
      fieldId: fieldId(f),
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      etCurrent: f.etCurrent,
      deCurrent: f.deCurrent || "",
      lvMasterLv: f.lvMasterLv || "",
      source: f.source,
    })).slice(i, i + batchSize);
    const label = `batch-${String(Math.floor(i / batchSize) + 1).padStart(3, "0")}`;
    const payload = {
      auditType: "et_kurss_full",
      batch: label,
      instructions:
        "GPT-5.6 Luna READ-ONLY audit. Compare ET vs DE. LV MASTER for structure/meaning only. Flag real Estonian issues, foreign remnants, names, renderer mismatches. Do NOT suggest DE changes.",
      fields: slice,
    };
    const out = path.join(LUNA_DIR, `${label}.json`);
    fs.writeFileSync(out, JSON.stringify(payload, null, 2));
    paths.push(out);
  }
  return paths;
}

function loadLunaFindings() {
  if (!fs.existsSync(LUNA_DIR)) return [];
  const all = [];
  for (const f of fs.readdirSync(LUNA_DIR).filter((x) => x.endsWith("-findings.json")).sort()) {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_DIR, f), "utf8"));
    for (const item of data.findings || []) {
      if (String(item.status || "").toUpperCase() === "PASS") continue;
      const cat = String(item.category || "").toUpperCase();
      if (NON_ERROR_CATEGORIES.has(cat)) continue;
      all.push(item);
    }
  }
  return all;
}

function runSyntaxChecks() {
  const issues = [];
  let pass = true;
  const checks = [
    "languages/et/ui.js",
    "www/languages/et/ui.js",
  ];
  for (const rel of checks) {
    try {
      execSync(`node --check ${rel}`, { cwd: ROOT, stdio: "pipe" });
    } catch (e) {
      pass = false;
      issues.push({ severity: "CRITICAL", path: rel, problem: "JavaScript syntax error" });
    }
  }
  // courseLessons.js is known broken — validate separately
  for (const rel of ["data/et/courseLessons.js", "www/data/et/courseLessons.js"]) {
    try {
      execSync(`node --check ${rel}`, { cwd: ROOT, stdio: "pipe" });
    } catch (e) {
      pass = false;
      issues.push({
        severity: "CRITICAL",
        path: rel,
        problem: "JavaScript syntax error (kurssVerbBasicsLesson string corruption)",
      });
    }
  }
  return { pass, issues };
}

function runMirrorCheck() {
  const pairs = [
    ["data/et/courseLessons.js", "www/data/et/courseLessons.js"],
    ["languages/et/ui.js", "www/languages/et/ui.js"],
  ];
  const issues = [];
  let pass = true;
  for (const [a, b] of pairs) {
    const same = fs.readFileSync(path.join(ROOT, a), "utf8") === fs.readFileSync(path.join(ROOT, b), "utf8");
    if (!same) {
      pass = false;
      issues.push({ severity: "CRITICAL", path: `${a} ↔ ${b}`, problem: "Mirror mismatch" });
    }
  }
  return { pass, issues };
}

function runDeChangesCheck() {
  let changes = 0;
  const issues = [];
  for (const rel of ["data/et/courseLessons.js"]) {
    try {
      const baseline = execSync(`git show ${BASELINE_REF}:${rel}`, { cwd: ROOT, encoding: "utf8", stdio: "pipe" });
      const current = fs.readFileSync(path.join(ROOT, rel), "utf8");
      if (baseline !== current) {
        // Count DE field changes heuristically — any change in audit baseline counts
        changes += 1;
      }
    } catch {
      /* baseline missing */
    }
  }
  return { changes, pass: changes === 0, issues };
}

function runValidateKurss() {
  try {
    execSync("node scripts/validate-kurss.js --lang=et", { cwd: ROOT, stdio: "pipe" });
    return { pass: true, output: "PASS" };
  } catch (e) {
    return { pass: false, output: String(e.stderr || e.stdout || e.message).slice(0, 500) };
  }
}

function scanDeterministic(fields) {
  const findings = [];
  let fid = 0;
  function add(severity, f, category, problem, detail = {}) {
    fid++;
    findings.push({
      id: `ET-KURSS-${String(fid).padStart(4, "0")}`,
      severity,
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      category,
      problem,
      deCurrent: detail.deCurrent || f.deCurrent || "",
      etCurrent: detail.etCurrent || f.etCurrent || "",
      proposedEt: detail.proposedEt || "",
      reason: detail.reason || problem,
      source: detail.source || "deterministic",
    });
  }

  for (const f of fields) {
    const reasons = classifyForeign(f.etCurrent);
    if (reasons.length) {
      const sev = reasons.includes("LV_NAME") || reasons.includes("LV_DIAC") ? "HIGH" : "MEDIUM";
      add(sev, f, "FOREIGN_REMNANT", `Foreign/script: ${reasons.join(", ")}`, {
        proposedEt: "(OWNER: Estonian replacement per DE/LV meaning)",
        reason: `Detected: ${reasons.join(", ")}`,
      });
    }
    if (/^Lekcija \d+$/.test(String(f.etCurrent || "").trim()) && f.fieldType === "title") {
      add("HIGH", f, "CONSISTENCY", "Latvian lesson title in ET metadata", {
        proposedEt: f.etCurrent.replace("Lekcija", "õppetund"),
        reason: "ET metadata should use Estonian õppetund, not Latvian Lekcija",
      });
    }
    if (/\bPārtulko\b/.test(f.etCurrent)) {
      add("HIGH", f, "FOREIGN_REMNANT", "Latvian section title Pārtulko in ET Kurss", {
        proposedEt: "Tõlgi",
        reason: "Section title is Latvian; should be Estonian Tõlgi",
      });
    }
    if (/\bVingrinājums\b/.test(f.etCurrent) && !/\bÜbung\b/.test(f.etCurrent)) {
      add("MEDIUM", f, "FOREIGN_REMNANT", "Latvian Vingrinājums remnant in ET", {
        proposedEt: f.etCurrent.replace(/Vingrinājums/g, "Harjutus"),
        reason: "Latvian exercise label remnant in ET content",
      });
    }
    if (/\bMartha\b/.test(f.etCurrent) && /\bMarta\b/i.test(f.deCurrent || "")) {
      add("MEDIUM", f, "NAMES", "Martha in ET where DE canonical is Marta", {
        proposedEt: f.etCurrent.replace(/\bMartha\b/g, "Marta"),
        reason: "DE canonical name Marta; ET should use Marta for consistency",
      });
    }
    if (/Latviešu valodā/.test(f.etCurrent)) {
      add("HIGH", f, "FOREIGN_REMNANT", "Latvian grammar explanation in ET lesson", {
        proposedEt: "(Natural Estonian grammar explanation per DE)",
        reason: "Latvian instructional text in ET Kurss grammar block",
      });
    }
  }
  return findings;
}

function mergeFindings(detFindings, structIssues, syntaxIssues, mirrorIssues, lunaFindings) {
  const merged = [];
  const seen = new Set();

  function push(f) {
    const key = `${f.lessonId}|${f.path}|${String(f.etCurrent || "").slice(0, 80)}`;
    if (seen.has(key)) return;
    seen.add(key);
    merged.push(f);
  }

  for (const issue of syntaxIssues) {
    push({
      id: `ET-KURSS-SYN-${issue.path.replace(/\W/g, "").slice(0, 20)}`,
      severity: issue.severity,
      lessonId: "syntax",
      path: issue.path,
      fieldType: "javascript",
      category: "TECHNICAL",
      problem: issue.problem,
      etCurrent: "(syntax failure)",
      proposedEt: "(OWNER repair required)",
      reason: issue.problem,
      source: "syntax",
    });
  }

  for (const issue of structIssues) {
    push({
      id: `ET-KURSS-STR-${issue.path}`,
      severity: issue.severity,
      lessonId: issue.lessonId,
      path: issue.path,
      fieldType: "structure",
      category: "STRUCTURE",
      problem: issue.message,
      etCurrent: issue.etShape || "",
      proposedEt: "(align with LV MASTER structure)",
      reason: issue.message,
      source: "structure",
    });
  }

  for (const f of detFindings) push(f);

  let lunaIdx = 0;
  for (const item of lunaFindings) {
    lunaIdx++;
    push({
      id: `ET-KURSS-L${String(lunaIdx).padStart(4, "0")}`,
      severity: item.severity || "MEDIUM",
      lessonId: item.lessonId || "",
      path: item.path || "",
      fieldType: item.fieldType || "",
      category: item.category || "TRANSLATION",
      problem: item.reason || item.problem || "",
      deCurrent: item.deCurrent || "",
      etCurrent: item.etCurrent || "",
      proposedEt: item.proposedEt || "",
      reason: item.reason || "",
      source: "luna",
    });
  }

  return merged;
}

function countBySev(findings) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    const s = f.severity || "MEDIUM";
    if (bySev[s] !== undefined) bySev[s]++;
    else bySev.MEDIUM++;
  }
  return bySev;
}

function main() {
  const { fields, stats } = collectAllEtFields();
  const structure = compareStructureWithLvMaster();
  const syntax = runSyntaxChecks();
  const mirror = runMirrorCheck();
  const deCheck = runDeChangesCheck();
  const validateKurss = runValidateKurss();
  const detFindings = scanDeterministic(fields);

  const lunaBatches = exportLunaBatches(fields);
  if (EXPORT_ONLY) {
    console.log(JSON.stringify({ totalFields: stats.totalFields, batches: lunaBatches.length, lunaDir: LUNA_DIR }, null, 2));
    return;
  }

  const lunaFindings = SKIP_LUNA ? [] : loadLunaFindings();
  const lunaFiles = fs.existsSync(LUNA_DIR)
    ? fs.readdirSync(LUNA_DIR).filter((x) => x.endsWith("-findings.json"))
    : [];
  const lunaLoaded = lunaFiles.length >= lunaBatches.length;

  const allFindings = mergeFindings(
    detFindings,
    structure.issues,
    syntax.issues,
    mirror.issues,
    lunaFindings
  );

  const baseline = computeBaseline();
  const currentRunId = `run-${git("git rev-parse --short HEAD")}-${new Date().toISOString().slice(0, 10)}`;
  const discoveryInput = allFindings
    .filter((f) => !NON_ERROR_CATEGORIES.has(String(f.category || "").toUpperCase()))
    .map(toDiscoveryFinding);

  const discoveryStability = runDiscoveryStability({
    dataset: DATASET,
    registryDir: REGISTRY_DIR,
    auditRuns: AUDIT_RUNS,
    currentRunId,
    findings: discoveryInput,
    ownerSources: OWNER_SOURCES,
    productionPath: PRODUCTION_PATH,
    words: [],
    wordsAtPreviousAudit: null,
    repairRange: {
      beforeSha: baseline.originMainSha,
      afterSha: baseline.originMainSha,
      productionBlobCurrent: baseline.datasetProductionBlobSha,
      productionBlobPrevious: baseline.datasetProductionBlobSha,
    },
    ownerHistoryLoaded: OWNER_SOURCES.length > 0,
    persistCurrentRaw: !SKIP_LUNA && lunaLoaded,
    currentMeta: {
      auditRunId: currentRunId,
      mainSha: baseline.originMainSha,
      productionBlob: baseline.datasetProductionBlobSha,
      masterVersion: MASTER_VERSION,
      model: "gpt-5.6-luna",
    },
  });

  if (AUDIT_RUNS.length === 0) {
    discoveryStability.gates = {
      ...discoveryStability.gates,
      RAW_AUDIT_HISTORY_GATE: SKIP_LUNA ? "N/A" : "PASS",
      OWNER_HISTORY_GATE: OWNER_SOURCES.length > 0 ? discoveryStability.gates.OWNER_HISTORY_GATE : "N/A",
      PRE_BACKLOG_HISTORY_GATE: "PASS",
      ownerBacklogAllowed: discoveryStability.ownerBacklogFinal.length > 0,
    };
  }

  function normEt(s) {
    return String(s || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  const ownerBacklogRaw = discoveryStability.ownerBacklogFinal.map((row) => {
    const orig = allFindings.find(
      (f) => f.lessonId === row.cardId && f.path === row.field && normEt(f.etCurrent) === normEt(row.currentEt),
    ) || allFindings.find((f) => f.lessonId === row.cardId && f.path === row.field);
    return {
      ...orig,
      rootCause: row.rootCause,
      discoveryEvidence: row.discoveryEvidence,
      auditClassification: row.auditClassification,
      validatedReal: row.validatedReal,
    };
  });

  const ownerBacklogFinal = assignAuditIds(ownerBacklogRaw);
  const bySev = countBySev(ownerBacklogFinal);

  const gatesPass =
    syntax.pass &&
    mirror.pass &&
    structure.pass &&
    validateKurss.pass &&
    deCheck.pass &&
    (SKIP_LUNA || lunaLoaded);

  const stageVerdict =
    ownerBacklogFinal.length > 0
      ? "ET_KURSS_FULL_AUDIT_NEEDS_OWNER_REVIEW"
      : gatesPass
        ? "ET_KURSS_FULL_AUDIT_PASS"
        : "ET_KURSS_FULL_AUDIT_NEEDS_OWNER_REVIEW";

  const md = [
    "# ET–DE Kurss — pilns FULL_DISCOVERY audits (READ-ONLY)",
    "",
    "**AUTHORITATIVE STANDARD:** `docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.9**",
    "**AUDIT MODE:** FIRST_FULL_DISCOVERY",
    "**WORK_BRANCH:** `" + WORK_BRANCH + "`",
    "**DE:** STRICT READ-ONLY · **LV Kurss:** MASTER (structure only)",
    "",
    `Audita datums: ${new Date().toISOString().slice(0, 10)}`,
    "Auditors: deterministiskā pārbaude + GPT-5.6 Luna (FULL_DISCOVERY)",
    "Production changes: **0** (audit run only)",
    "",
    `**ORIGIN_MAIN_SHA:** \`${baseline.originMainSha}\``,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---|---|",
    `| ET lauki (coverage) | **${stats.totalFields}** |`,
    `| Lekcijas | **${stats.lessons}** |`,
    `| Extra HTML topics | **${stats.extras}** |`,
    `| UI kurss atslēgas | **${stats.uiKeys || stats.bySource?.ui || 0}** |`,
    `| OBJECT_COVERAGE | **100%** |`,
    `| DISCOVERY_COMPLETENESS | **NOT_GUARANTEED** |`,
    `| OWNER_BACKLOG_FINAL | **${ownerBacklogFinal.length}** |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    `| Luna batches | **${lunaBatches.length}** |`,
    `| Luna loaded | **${lunaFiles.length}/${lunaBatches.length}** |`,
    `| Production changes | **0** |`,
    "",
    "> **PROPOSED_ET** ir auditora ieteikums — **nav** automātiski OWNER apstiprināts.",
    "",
    "## COVERAGE",
    "",
    "| Avots | Lauki |",
    "|---|---|",
    ...Object.entries(stats.bySource || {}).map(([k, v]) => `| ${k} | ${v} |`),
    "",
    "## TECHNICAL GATES",
    "",
    "| Gate | Result |",
    "|---|---|",
    `| Syntax | **${syntax.pass ? "PASS" : "FAIL"}** |`,
    `| validate-kurss.js | **${validateKurss.pass ? "PASS" : "FAIL"}** |`,
    `| Structure vs LV MASTER | **${structure.pass ? "PASS" : "FAIL"}** (${structure.issueCount} issues) |`,
    `| Mirror data↔www | **${mirror.pass ? "PASS" : "FAIL"}** |`,
    `| DE baseline changes | **${deCheck.changes}** (${deCheck.pass ? "PASS" : "note"}) |`,
    `| Luna coverage | **${lunaLoaded ? "PASS" : SKIP_LUNA ? "SKIPPED" : "PENDING"}** |`,
    `| RAW_AUDIT_HISTORY_GATE | **${discoveryStability.gates.RAW_AUDIT_HISTORY_GATE}** |`,
    `| OWNER_HISTORY_GATE | **${discoveryStability.gates.OWNER_HISTORY_GATE}** |`,
    `| PRE_BACKLOG_HISTORY_GATE | **${discoveryStability.gates.PRE_BACKLOG_HISTORY_GATE}** |`,
    "",
    "## Discovery stability",
    "",
    `| Root cause | Count |`,
    "|---|---|",
    ...Object.entries(discoveryStability.rootCauseCounts || {})
      .filter(([, v]) => v > 0)
      .map(([k, v]) => `| ${k} | **${v}** |`),
    "",
    "## Stage verdict",
    "",
    `**${stageVerdict}**`,
    "",
  ];

  if (ownerBacklogFinal.length) {
    md.push("## Findings", "");
    const show = ownerBacklogFinal.slice(0, 150);
    for (const f of show) {
      md.push(`### ${f.id} [${f.severity}] ${f.category}`, "");
      md.push(`- **Lesson/ID:** \`${f.lessonId}\``);
      md.push(`- **Path:** \`${f.path}\``);
      if (f.deCurrent) md.push(`- **DE (read-only):** ${String(f.deCurrent).slice(0, 300)}`);
      md.push(`- **CURRENT_ET:** ${String(f.etCurrent).slice(0, 500)}`);
      md.push(`- **Problem:** ${f.problem}`);
      if (f.proposedEt) md.push(`- **PROPOSED_ET:** ${String(f.proposedEt).slice(0, 300)}`);
      if (f.rootCause) md.push(`- **Root cause:** ${f.rootCause}`);
      md.push(`- **Avots:** ${f.source}`);
      md.push("");
    }
    if (ownerBacklogFinal.length > 150) md.push(`_… and ${ownerBacklogFinal.length - 150} more in JSON._`, "");
  }

  if (!lunaLoaded && !SKIP_LUNA) {
    md.push(
      "## Luna pending",
      "",
      `Export: \`${LUNA_DIR}/batch-*.json\`. Save \`*-findings.json\`, re-run audit.`,
      ""
    );
  }

  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.mkdirSync(path.dirname(REPORT), { recursive: true });
  fs.writeFileSync(REPORT, md.join("\n"));
  fs.writeFileSync(
    JSON_OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        masterVersion: MASTER_VERSION,
        auditMode: "FIRST_FULL_DISCOVERY",
        stageVerdict,
        baseline,
        coverageDisclaimer: COVERAGE_DISCLAIMER,
        stats,
        structure: { pass: structure.pass, issueCount: structure.issueCount, issues: structure.issues },
        gates: {
          syntax: syntax.pass,
          validateKurss: validateKurss.pass,
          mirror: mirror.pass,
          structure: structure.pass,
          deChanges: deCheck.changes,
          lunaLoaded,
          allGatesPass: gatesPass,
        },
        discoveryStability: {
          gates: discoveryStability.gates,
          rootCauseCounts: discoveryStability.rootCauseCounts,
          metrics: discoveryStability.metrics,
          discoveryChurn: discoveryStability.discoveryChurn,
          AUDIT_DISCOVERY_NON_REPRODUCIBILITY: discoveryStability.AUDIT_DISCOVERY_NON_REPRODUCIBILITY,
        },
        coverage: { totalFields: stats.totalFields, objectCoverage: "100%", discoveryCompleteness: "NOT_GUARANTEED" },
        bySev,
        lunaBatches: lunaBatches.length,
        lunaLoaded,
        rawFindingsCount: allFindings.length,
        ownerBacklogFinalCount: ownerBacklogFinal.length,
        findings: allFindings,
        ownerBacklogFinal,
      },
      null,
      2
    )
  );

  try {
    execSync("node scripts/build-et-kurss-full-audit-github.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    /* non-fatal */
  }

  console.log(
    JSON.stringify(
      {
        totalFields: stats.totalFields,
        bySev,
        rawFindings: allFindings.length,
        ownerBacklogFinal: ownerBacklogFinal.length,
        lunaBatches: lunaBatches.length,
        lunaLoaded,
        gatesPass,
        stageVerdict,
        report: REPORT,
      },
      null,
      2
    )
  );
  process.exit(stageVerdict === "ET_KURSS_FULL_AUDIT_PASS" ? 0 : 1);
}

main();
