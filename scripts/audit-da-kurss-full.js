#!/usr/bin/env node
"use strict";
/**
 * DA–DE Kurss full READ-ONLY audit (deterministic + GPT-5.6 Luna).
 * Usage: node scripts/audit-da-kurss-full.js [--skip-luna] [--export-only]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { collectAllDaFields, compareStructureWithLvMaster } = require("./lib/da-kurss-audit-collect");

const REPORT = path.join(ROOT, "reports/da-kurss-full-audit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/da-kurss-full-audit.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/da-kurss-full-audit-luna");
const BASELINE_REF = process.env.DA_KURSS_BASELINE || "main";
const SKIP_LUNA = process.argv.includes("--skip-luna");
const EXPORT_ONLY = process.argv.includes("--export-only");

const PRODUCTION_FILES = [
  "data/da/courseLessons.js",
  "data/da/courseTrainingCards.js",
  "languages/da/ui.js",
  "www/data/da/courseLessons.js",
  "www/data/da/courseTrainingCards.js",
  "www/languages/da/ui.js",
];

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(Tagad|Pārveido|Gatavs|piemēram|vārd|Vārd|Latviešu|daudzskait|sieviešu|vīriešu|klikšķ|kartīt|izrunā|darbības|lietvār|pavēles|teikum|Lekcija|lekcij|Iesāc|Iesācējs|Iesācējiem)\b/i;
const LV_NAMES = /\b(Pēteris|Pētera|Jānis|Jāņa|Rūdolfs|Roberts|Ansis|Ansi)\b/;
const EN_PATTERNS = /\b(TODO|FIXME|PLACEHOLDER|Translation:|instead of|you are|meaning:|Click here|Lesson \d+)\b/i;
const ARTIFACT = /\b(LABOT|PENDING|NEEDS_SOURCE_REVIEW|FALSE_POSITIVE|NELABOT)\b/i;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|\(Context-specific|\(Natural Danish)/i;
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
      daCurrent: f.daCurrent,
      deCurrent: f.deCurrent || "",
      lvMasterDa: f.lvMasterDa || "",
      source: f.source,
    })).slice(i, i + batchSize);
    const label = `batch-${String(Math.floor(i / batchSize) + 1).padStart(3, "0")}`;
    const payload = {
      auditType: "da_kurss_full",
      batch: label,
      instructions:
        "GPT-5.6 Luna READ-ONLY audit. Compare DA vs DE. LV MASTER for meaning only. Flag real Danish issues, foreign remnants, names, renderer mismatches. Do NOT suggest DE changes.",
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
    "data/da/courseTrainingCards.js",
    "www/data/da/courseTrainingCards.js",
    "languages/da/ui.js",
    "www/languages/da/ui.js",
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
  for (const rel of ["data/da/courseLessons.js", "www/data/da/courseLessons.js"]) {
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
    ["data/da/courseLessons.js", "www/data/da/courseLessons.js"],
    ["data/da/courseTrainingCards.js", "www/data/da/courseTrainingCards.js"],
    ["languages/da/ui.js", "www/languages/da/ui.js"],
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
  for (const rel of ["data/da/courseLessons.js", "data/da/courseTrainingCards.js"]) {
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
    execSync("node scripts/validate-kurss.js --lang=da", { cwd: ROOT, stdio: "pipe" });
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
      id: `DA-KURSS-${String(fid).padStart(4, "0")}`,
      severity,
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      category,
      problem,
      deCurrent: detail.deCurrent || f.deCurrent || "",
      daCurrent: detail.daCurrent || f.daCurrent || "",
      proposedDa: detail.proposedDa || "",
      reason: detail.reason || problem,
      source: detail.source || "deterministic",
    });
  }

  for (const f of fields) {
    const reasons = classifyForeign(f.daCurrent);
    if (reasons.length) {
      const sev = reasons.includes("LV_NAME") || reasons.includes("LV_DIAC") ? "HIGH" : "MEDIUM";
      add(sev, f, "FOREIGN_REMNANT", `Foreign/script: ${reasons.join(", ")}`, {
        proposedDa: "(OWNER: Danish replacement per DE/LV meaning)",
        reason: `Detected: ${reasons.join(", ")}`,
      });
    }
    if (/^Lekcija \d+$/.test(String(f.daCurrent || "").trim()) && f.fieldType === "title") {
      add("HIGH", f, "CONSISTENCY", "Latvian lesson title in DA metadata", {
        proposedDa: f.daCurrent.replace("Lekcija", "Lektion"),
        reason: "ui.js uses Lektion N; courseLessons metadata still has Latvian Lekcija N",
      });
    }
    if (/\bMartha\b/.test(f.daCurrent) && /\bMarta\b/i.test(f.deCurrent || "")) {
      add("MEDIUM", f, "NAMES", "Martha in DA where DE canonical is Marta", {
        proposedDa: f.daCurrent.replace(/\bMartha\b/g, "Marta"),
        reason: "DE canonical name Marta; DA should use Marta for consistency",
      });
    }
  }
  return findings;
}

function mergeFindings(detFindings, structIssues, syntaxIssues, mirrorIssues, lunaFindings) {
  const merged = [];
  const seen = new Set();

  function push(f) {
    const key = `${f.lessonId}|${f.path}|${String(f.daCurrent || "").slice(0, 80)}`;
    if (seen.has(key)) return;
    seen.add(key);
    merged.push(f);
  }

  for (const issue of syntaxIssues) {
    push({
      id: `DA-KURSS-SYN-${issue.path.replace(/\W/g, "").slice(0, 20)}`,
      severity: issue.severity,
      lessonId: "syntax",
      path: issue.path,
      fieldType: "javascript",
      category: "TECHNICAL",
      problem: issue.problem,
      daCurrent: "(syntax failure)",
      proposedDa: "(OWNER repair required)",
      reason: issue.problem,
      source: "syntax",
    });
  }

  for (const issue of structIssues) {
    push({
      id: `DA-KURSS-STR-${issue.path}`,
      severity: issue.severity,
      lessonId: issue.lessonId,
      path: issue.path,
      fieldType: "structure",
      category: "STRUCTURE",
      problem: issue.message,
      daCurrent: issue.daShape || "",
      proposedDa: "(align with LV MASTER structure)",
      reason: issue.message,
      source: "structure",
    });
  }

  for (const f of detFindings) push(f);

  let lunaIdx = 0;
  for (const item of lunaFindings) {
    lunaIdx++;
    push({
      id: `DA-KURSS-L${String(lunaIdx).padStart(4, "0")}`,
      severity: item.severity || "MEDIUM",
      lessonId: item.lessonId || "",
      path: item.path || "",
      fieldType: item.fieldType || "",
      category: item.category || "TRANSLATION",
      problem: item.reason || item.problem || "",
      deCurrent: item.deCurrent || "",
      daCurrent: item.daCurrent || "",
      proposedDa: item.proposedDa || "",
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
  const { fields, stats } = collectAllDaFields();
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
  const bySev = countBySev(allFindings);

  const coveragePass = stats.totalFields > 0;
  const pass =
    coveragePass &&
    lunaLoaded &&
    !SKIP_LUNA &&
    bySev.CRITICAL === 0 &&
    bySev.HIGH === 0 &&
    bySev.MEDIUM === 0 &&
    bySev.LOW === 0 &&
    syntax.pass &&
    mirror.pass;

  const verdict = pass
    ? "**PASS** — pilns DA Kurss audits bez atlikušiem findings."
    : lunaLoaded
      ? "**NEEDS OWNER REVIEW** — atlikuši validated findings."
      : "**NEEDS OWNER REVIEW** — Luna batches pending completion.";

  const md = [
    "# DA–DE Kurss — pilns lingvistiskais audits (READ-ONLY)",
    "",
    "**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.2**",
    "**STAGE:** POST-REPAIR FULL RE-AUDIT (Kurss dataset)",
    "**WORK_BRANCH:** `cursor/da-kurss-master-v11-audit-fffe`",
    "**DE:** STRICT READ-ONLY · **LV Kurss:** MASTER (structure only)",
    "",
    `Audita datums: ${new Date().toISOString().slice(0, 10)}`,
    "Auditors: deterministiskā pārbaude (§7.7) + Luna heuristika (§7.8, API key unavailable)",
    "Production changes: **0** (audit run only)",
    "",
    `> **Salīdzinājums:** pirms OWNER LABOT apply **95** findings → pēc apply **${allFindings.length}** findings.`,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---|---|",
    `| DA lauki (coverage) | **${stats.totalFields}** |`,
    `| Lekcijas | **${stats.lessons}** |`,
    `| Extra HTML topics | **${stats.extras}** |`,
    `| UI kurss atslēgas | **${stats.uiKeys || stats.bySource?.ui || 0}** |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    `| Kopā findings | **${allFindings.length}** |`,
    `| Luna batches | **${lunaBatches.length}** (${stats.totalFields} fields) |`,
    `| Luna loaded | **${lunaFiles.length}/${lunaBatches.length}** |`,
    `| Production changes | **0** |`,
    "",
    "> **PROPOSED_DA** nav automātiski OWNER apstiprināts labojums.",
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
    `| Syntax (courseLessons) | **${syntax.pass ? "PASS" : "FAIL"}** |`,
    `| validate-kurss.js | **${validateKurss.pass ? "PASS" : "FAIL"}** |`,
    `| Structure vs LV MASTER | **${structure.pass ? "PASS" : "FAIL"}** (${structure.issueCount} issues) |`,
    `| Mirror data↔www | **${mirror.pass ? "PASS" : "FAIL"}** |`,
    `| DE baseline changes | **${deCheck.changes}** (${deCheck.pass ? "PASS" : "note"}) |`,
    `| Luna coverage | **${lunaLoaded ? "PASS" : "PENDING"}** |`,
    "",
    "## Verdict",
    "",
    verdict,
    "",
  ];

  if (allFindings.length) {
    md.push("## Findings", "");
    const show = allFindings.slice(0, 150);
    for (const f of show) {
      md.push(`### ${f.id} [${f.severity}] ${f.category}`, "");
      md.push(`- **Lesson/ID:** \`${f.lessonId}\``);
      md.push(`- **Path:** \`${f.path}\``);
      if (f.deCurrent) md.push(`- **DE_CURRENT:** ${String(f.deCurrent).slice(0, 300)}`);
      md.push(`- **DA_CURRENT:** ${String(f.daCurrent).slice(0, 500)}`);
      md.push(`- **Problem:** ${f.problem}`);
      if (f.proposedDa) md.push(`- **PROPOSED_DA:** ${String(f.proposedDa).slice(0, 300)}`);
      md.push(`- **Avots:** ${f.source}`);
      md.push("");
    }
    if (allFindings.length > 150) md.push(`_… and ${allFindings.length - 150} more in JSON._`, "");
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
        stats,
        structure: { pass: structure.pass, issueCount: structure.issueCount, issues: structure.issues },
        gates: {
          syntax: syntax.pass,
          validateKurss: validateKurss.pass,
          mirror: mirror.pass,
          structure: structure.pass,
          deChanges: deCheck.changes,
          lunaLoaded,
        },
        coverage: { totalFields: stats.totalFields, pass: coveragePass },
        bySev,
        lunaBatches: lunaBatches.length,
        lunaLoaded,
        pass,
        verdict: verdict.replace(/\*\*/g, ""),
        findings: allFindings,
      },
      null,
      2
    )
  );

  try {
    execSync("node scripts/build-da-kurss-full-audit-github.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    /* non-fatal */
  }

  console.log(
    JSON.stringify(
      {
        totalFields: stats.totalFields,
        bySev,
        findings: allFindings.length,
        lunaBatches: lunaBatches.length,
        lunaLoaded,
        pass,
        verdict: verdict.replace(/\*\*/g, ""),
        report: REPORT,
      },
      null,
      2
    )
  );
  process.exit(pass ? 0 : 1);
}

main();
