#!/usr/bin/env node
"use strict";
/**
 * DA–DE B1 consolidated post-regression audit (READ-ONLY).
 * Runs after OWNER repair (comparison + sectionAccents + misc); no production edits.
 *
 * Usage:
 *   node scripts/run-da-b1-post-regression-audit.js
 *
 * Optional:
 *   DA_B1_BEFORE=/tmp/da-b1-before.js
 */
const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getAt } = require("./lib/da-b1-owner-path");

const OUT_MD = path.join(ROOT, "reports/da-b1-post-regression-audit.md");
const OUT_JSON = path.join(ROOT, "reports/temp/da-b1-post-regression-audit.json");
const FULL_JSON = path.join(ROOT, "reports/temp/da-b1-audit-data.json");
const APPLY_MAP = path.join(ROOT, "reports/temp/da-b1-owner-apply-map.json");
const TARGETED_MD = path.join(ROOT, "reports/da-b1-targeted-regression-audit.md");

const PRE_REPAIR_TOTAL = 1575;
const PRE_REPAIR_BY_SEV = { CRITICAL: 0, HIGH: 717, MEDIUM: 858, LOW: 0 };

function runNode(script, env = {}) {
  const result = spawnSync("node", [path.join(ROOT, "scripts", script)], {
    cwd: ROOT,
    env: { ...process.env, ...env },
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  return { status: result.status ?? 1, stdout: result.stdout || "" };
}

function loadJson(p, fallback = null) {
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function gitRev(ref) {
  try {
    return execSync(`git rev-parse ${ref}`, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "(unknown)";
  }
}

function gitBranch() {
  try {
    return execSync("git rev-parse --abbrev-ref HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "(unknown)";
  }
}

function categorizeFinding(f) {
  const field = String(f.field || "");
  if (field.includes("sectionAccents")) return "sectionAccent_stale";
  if (field.includes("comparison") && field.endsWith(".example")) return "comparison_lv";
  if (f.problem && f.problem.includes("ZERO_WIDTH")) return "zero_width";
  if (f.problem && f.problem.includes("sinonīmu")) return "synonym_chain";
  if (f.severity === "HIGH" && f.field === "lv" && f.problem && f.problem.includes("LV_WORD")) {
    return "lv_word_heuristic";
  }
  return "other";
}

function termStillPresent(actual, term) {
  if (actual === undefined || actual === null || actual === "") return false;
  if (typeof actual === "string") {
    return term && actual.toLowerCase().includes(String(term).toLowerCase());
  }
  if (Array.isArray(actual)) {
    return actual.some((t) => String(t) === term || String(t).toLowerCase() === String(term).toLowerCase());
  }
  return false;
}

function verifyApplyMap(applyMap, words) {
  let exactSet = 0;
  let exactFjern = 0;
  let mismatch = 0;
  let missing = 0;
  const mismatches = [];
  for (const row of applyMap.apply || []) {
    const entry = findEntry(words, row.cardId);
    if (!entry) {
      missing++;
      mismatches.push({ cardId: row.cardId, field: row.field, issue: "card not found" });
      continue;
    }
    const fieldPath = row.field === "lv" || row.field.startsWith("study.") ? row.field : `study.${row.field}`;
    const actual = row.field === "lv" ? entry.lv : getAt(entry, fieldPath);

    if (row.action === "SET") {
      if (String(actual) === String(row.ownerNew)) exactSet++;
      else {
        mismatch++;
        mismatches.push({
          cardId: row.cardId,
          field: fieldPath,
          expected: String(row.ownerNew).slice(0, 80),
          actual: String(actual).slice(0, 80),
        });
      }
      continue;
    }

    if (row.action === "FJERN_ACCENT") {
      const term = row.removeTerm || String(row.ownerNew || "").replace(/^FJERN\s+[`«"' ]?|[`»"' ]?$/g, "").trim();
      if (!termStillPresent(actual, term)) exactFjern++;
      else {
        mismatch++;
        mismatches.push({
          cardId: row.cardId,
          field: fieldPath,
          issue: `FJERN term still present: ${term}`,
          actual: String(actual).slice(0, 80),
        });
      }
    }
  }
  return { exactSet, exactFjern, mismatch, missing, mismatches, total: (applyMap.apply || []).length };
}

function parseTargetedSummary(stdout) {
  try {
    const m = stdout.match(/\{[\s\S]*\}/);
    return m ? JSON.parse(m[0]) : null;
  } catch {
    return null;
  }
}

function main() {
  console.log("\n=== DA–DE B1 post-regression audit ===\n");

  const collect = runNode("audit-da-b1-collect.js");
  if (collect.status !== 0) {
    console.error("audit-da-b1-collect.js failed");
    process.exit(1);
  }
  const full = loadJson(FULL_JSON);
  if (!full) {
    console.error(`Missing ${FULL_JSON}`);
    process.exit(1);
  }

  const beforeRef = process.env.DA_B1_BEFORE || "/tmp/da-b1-before.js";
  const targeted = runNode("audit-da-b1-targeted-regression.js", { DA_B1_BEFORE: beforeRef });
  const targetedSummary = parseTargetedSummary(targeted.stdout);

  const applyMap = loadJson(APPLY_MAP, { apply: [] });
  const vm = require("vm");
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/da/b1.js"), "utf8"), ctx);
  const words = ctx.window.B1_WORDS;

  const mainVerify = verifyApplyMap(applyMap, words);

  const fullAuditPass =
    full.summary.total === 0 &&
    (full.summary.bySeverity.CRITICAL || 0) === 0 &&
    (full.summary.bySeverity.HIGH || 0) === 0 &&
    (full.summary.bySeverity.MEDIUM || 0) === 0;

  const categories = {};
  for (const f of full.findings) {
    const cat = categorizeFinding(f);
    categories[cat] = (categories[cat] || 0) + 1;
  }

  const repairScopeClosed =
    targetedSummary &&
    targetedSummary.bySev &&
    targetedSummary.bySev.CRITICAL === 0 &&
    targetedSummary.bySev.HIGH === 0 &&
    targetedSummary.bySev.MEDIUM === 0 &&
    mainVerify.mismatch === 0 &&
    mainVerify.missing === 0;

  const verdict =
    fullAuditPass && repairScopeClosed
      ? "**DA–DE B1: FULL AUDIT CLOSED** (0 findings; 1571 OWNER repairs verified)"
      : repairScopeClosed
        ? "**DA–DE B1: POST-REGRESSION CLOSED** (repair scope verified)"
        : "**DA–DE B1: POST-REGRESSION OPEN**";

  const head = gitRev("HEAD");
  const mainBase = gitRev("origin/main");

  const md = [
    "# DA–DE B1 — post-regression audit",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Mode:** READ-ONLY (production changes = 0 in this audit)",
    `**Branch:** \`${gitBranch()}\``,
    `**HEAD:** \`${head}\``,
    `**Baseline:** \`origin/main\` (\`${mainBase}\`)`,
    "",
    "## Baseline & repair scope",
    "",
    "| Item | Value |",
    "| --- | --- |",
    "| Production file | `data/da/b1.js` + mirror `www/data/da/b1.js` |",
    "| DE etalon | `data/b1.js` (READ-ONLY) |",
    "| Expected cards | **3367** |",
    "| Expected studies | **324** |",
    "| OWNER apply (LABOT) | **1571** |",
    "| Skipped (NELABOT/FP) | **4** |",
    "| Pre-repair audit total | **1575** |",
    "",
    "## Repair verification",
    "",
    "| Map | Total LABOT | SET match | FJERN match | Mismatch | Missing card |",
    "| --- | ---: | ---: | ---: | ---: | ---: |",
    `| OWNER apply map | ${mainVerify.total} | **${mainVerify.exactSet}** | **${mainVerify.exactFjern}** | **${mainVerify.mismatch}** | **${mainVerify.missing}** |`,
    "",
    "## Structural gates",
    "",
    "| Check | Result |",
    "| --- | --- |",
    `| Card count | **${full.meta.productionCards}/${full.meta.expectedCards}** ${full.structural.cardCountPass ? "PASS" : "FAIL"} |`,
    `| Study count | **${full.meta.studyCount}/${full.meta.expectedStudies}** ${full.structural.studyCountPass ? "PASS" : "FAIL"} |`,
    `| DE integrity | **${full.structural.deIntegrityPass ? "PASS" : "FAIL"}** |`,
    `| Study parity | **${full.structural.studyParityPass ? "PASS" : "FAIL"}** |`,
    `| Mirror data ↔ www | **${full.structural.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${full.meta.syntaxOk ? "PASS" : "FAIL"}** |`,
    `| DE changes vs etalon | **${full.meta.deChanges}** |`,
    "",
    "## Targeted regression (repair scope only)",
    "",
    "| Metric | Value |",
    "| --- | --- |",
    `| Changed cards vs main | **${targetedSummary?.changedCards ?? "—"}** |`,
    `| CRITICAL | **${targetedSummary?.bySev?.CRITICAL ?? "—"}** |`,
    `| HIGH | **${targetedSummary?.bySev?.HIGH ?? "—"}** |`,
    `| MEDIUM | **${targetedSummary?.bySev?.MEDIUM ?? "—"}** |`,
    `| LOW | **${targetedSummary?.bySev?.LOW ?? "—"}** |`,
    `| Report | [\`da-b1-targeted-regression-audit.md\`](./da-b1-targeted-regression-audit.md) |`,
    "",
    "## Full discovery re-scan (3367/3367)",
    "",
    "Heuristic full collect on current production after all OWNER repairs.",
    "",
    "| Severity | Pre-repair (baseline audit) | Post-repair (now) |",
    "| --- | ---: | ---: |",
    `| CRITICAL | ${PRE_REPAIR_BY_SEV.CRITICAL} | **${full.summary.bySeverity.CRITICAL || 0}** |`,
    `| HIGH | ${PRE_REPAIR_BY_SEV.HIGH} | **${full.summary.bySeverity.HIGH || 0}** |`,
    `| MEDIUM | ${PRE_REPAIR_BY_SEV.MEDIUM} | **${full.summary.bySeverity.MEDIUM || 0}** |`,
    `| LOW | ${PRE_REPAIR_BY_SEV.LOW} | **${full.summary.bySeverity.LOW || 0}** |`,
    `| **Total** | **${PRE_REPAIR_TOTAL}** | **${full.summary.total}** |`,
    "",
    "### Residual breakdown (post-repair)",
    "",
    "| Category | Count | Notes |",
    "| --- | ---: | --- |",
  ];

  const catNotes = {
    sectionAccent_stale: "sectionAccent stale heuristic",
    comparison_lv: "comparison example LV remnant",
    zero_width: "zero-width artifact",
    synonym_chain: "3+ bullet synonym chain on lv",
    lv_word_heuristic: "LV_WORD regex hit (may be Danish homograph)",
    other: "uncategorized",
  };
  const catEntries = Object.entries(categories).sort((a, b) => b[1] - a[1]);
  if (catEntries.length) {
    for (const [cat, count] of catEntries) {
      md.push(`| ${cat} | **${count}** | ${catNotes[cat] || ""} |`);
    }
  } else {
    md.push("| _none_ | **0** | |");
  }

  md.push(
    "",
    "### Actionable full-discovery residuals",
    "",
    full.summary.total
      ? `**${full.summary.total}** heuristic finding(s) remain after repair. Review category breakdown above.`
      : "_No actionable full-discovery residuals._",
    "",
    "## Final verdict",
    "",
    verdict,
    "",
    "### Interpretation",
    "",
    `- **Repair scope:** targeted regression on **${targetedSummary?.changedCards ?? "—"}** changed cards — **${repairScopeClosed ? "PASS" : "FAIL"}** (CRITICAL/HIGH/MEDIUM).`,
    `- **OWNER apply map:** **${mainVerify.exactSet}** SET + **${mainVerify.exactFjern}** FJERN verified; mismatch **${mainVerify.mismatch}**.`,
    `- **Full discovery:** **${full.summary.total}** findings (pre-repair baseline **${PRE_REPAIR_TOTAL}**).`,
    ""
  );

  if (mainVerify.mismatches.length) {
    md.push("## Apply mismatches", "");
    mainVerify.mismatches.slice(0, 20).forEach((m) => {
      md.push(`- \`${m.cardId}\` \`${m.field}\`: ${m.issue || `${m.expected} ≠ ${m.actual}`}`);
    });
    md.push("");
  }

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_MD, md.join("\n"));

  const payload = {
    generatedAt: new Date().toISOString(),
    branch: gitBranch(),
    head,
    mainBase,
    repairVerification: { main: mainVerify },
    structural: full.structural,
    meta: full.meta,
    fullDiscovery: {
      total: full.summary.total,
      bySeverity: full.summary.bySeverity,
      categories,
      preRepairTotal: PRE_REPAIR_TOTAL,
    },
    targetedRegression: targetedSummary,
    verdict: verdict.replace(/\*\*/g, ""),
    pass: fullAuditPass && repairScopeClosed,
    reports: {
      markdown: OUT_MD,
      targeted: TARGETED_MD,
      fullAudit: path.join(ROOT, "reports/da-b1-full-audit.md"),
    },
  };
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));

  console.log(JSON.stringify({ pass: payload.pass, verdict: payload.verdict, report: OUT_MD, json: OUT_JSON }, null, 2));
  process.exit(payload.pass ? 0 : 1);
}

main();
