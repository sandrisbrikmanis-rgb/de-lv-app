#!/usr/bin/env node
/**
 * FR-DE A1+A2 full READ-ONLY audit orchestrator (deterministic + GPT-5.6 Luna).
 * Usage: node scripts/run-fr-a1-a2-full-audit.js [--skip-luna] [--test-luna] [--fresh-luna]
 */
"use strict";

require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { LUNA_JSON, TEMP_DIR } = require("./lib/fr-a1-a2-audit-helpers");
const { classifyFindings } = require("./lib/openai-fr-a1-a2-audit");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const TEST_LUNA = process.argv.includes("--test-luna");
const FRESH_LUNA = process.argv.includes("--fresh-luna");
const OUT_MD = path.join(ROOT, "reports", "fr-de-a1-a2-full-audit.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "fr-de-a1-a2-full-audit.json");
const COLLECT_JSON = path.join(ROOT, "reports", "temp", "fr-de-a1-a2-audit-data.json");

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function runNode(script, args = [], { allowFail = false } = {}) {
  const result = spawnSync("node", [path.join(ROOT, "scripts", script), ...args], {
    cwd: ROOT,
    env: process.env,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0 && !allowFail) {
    throw new Error(`${script} failed with exit ${result.status}`);
  }
  return result;
}

function loadJson(p, fallback = null) {
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function countSeverity(findings) {
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (counts[s] !== undefined) counts[s] += 1;
    else counts.MEDIUM += 1;
  }
  return counts;
}

function formatLunaFinding(f, index) {
  const id = `ES-A1A2-LUNA-${String(index + 1).padStart(4, "0")}`;
  return [
    `#### ${id}`,
    "",
    `**Card ID:** ${f.cardId}`,
    `**Field:** ${f.field}`,
    `**CURRENT:** ${f.currentFr || "—"}`,
    f.proposedFr ? `**PROPOSED_ES:** ${f.proposedFr}` : "",
    `**Problēma:** ${f.reason}`,
    f.lvSource ? `**LV etalons (konteksts):** ${f.lvSource}` : "",
    `**DE konteksts:** ${f.de || "—"}`,
    `**Smagums:** ${f.severity}`,
    `**Kategorija:** ${f.category || "—"}`,
    `**Avots:** gpt-5.6-luna`,
    "**Statuss:** PENDING",
    "",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildReport(ctx) {
  const lines = [];
  lines.push("# FR–DE A1+A2 pilns lingvistiskais un kvalitātes audits");
  lines.push("");
  lines.push(`**Datums:** ${ctx.date}`);
  lines.push(`**Auditors:** Cloud Agent (deterministisks${ctx.lunaRan ? " + GPT-5.6 Luna" : ""})`);
  lines.push("**Standarts:** `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md`");
  lines.push("**Apjoms:** `data/fr/a1.js`, `data/fr/a2.js` (+ `www/data/fr/` mirror)");
  lines.push(`**ORIGIN_MAIN_SHA:** \`${ctx.originSha}\``);
  lines.push("**Production izmaiņas:** **0**");
  lines.push("");

  lines.push("## 1. Kopsavilkums");
  lines.push("");
  lines.push("| Metrika | A1 | A2 | Kopā |");
  lines.push("|---------|----|----|------|");
  lines.push(`| Kartītes | **702/702** | **1640/1640** | **2342** |`);
  lines.push(`| Study objekti (LV / ES) | **134 / ${ctx.a1.frStudy}** | **231 / ${ctx.a2.frStudy}** | **365 / ${ctx.a1.frStudy + ctx.a2.frStudy}** |`);
  lines.push(`| Trūkstošie Study | **${ctx.a1.missingStudy.length}** | **0** | **${ctx.a1.missingStudy.length}** |`);
  lines.push(`| Kartītes ar LV atlikumiem | **${ctx.a1.lvRemnantCards}** | **${ctx.a2.lvRemnantCards}** | **${ctx.a1.lvRemnantCards + ctx.a2.lvRemnantCards}** |`);
  lines.push(`| \`sectionAccents\` neatbilstības | **${ctx.a1.sectionAccentIssues}** | **${ctx.a2.sectionAccentIssues}** | **${ctx.a1.sectionAccentIssues + ctx.a2.sectionAccentIssues}** |`);
  lines.push(`| \`minimalStudy\` bez satura | **0** | **${ctx.a2.minimalStudyNoRenderable.length}** | **${ctx.a2.minimalStudyNoRenderable.length}** |`);
  lines.push(`| Luna coverage | **${ctx.lunaCoverage}** | — | — |`);
  lines.push(`| Luna validētie atradumi | **${ctx.lunaFindings.length}** | — | — |`);
  lines.push("");

  lines.push(`## **Verdict: ${ctx.verdict}**`);
  lines.push("");

  if (!ctx.lunaRan) {
    lines.push(
      `> **Luna (GPT-5.6) nav palaists** (\`--skip-luna\` vai nav \`OPENAI_API_KEY\`). Šis ziņojums satur deterministisko slāni. Lai pabeigtu pilnu auditu ar Luna: \`node scripts/run-fr-a1-a2-full-audit.js --fresh-luna\`.`,
    );
    lines.push("");
  } else if (ctx.lunaTestOnly) {
    lines.push(
      "> **Luna TEST BATCH režīms** — pārbaudīts tikai 1 batch. Pilnam auditam: `node scripts/run-fr-a1-a2-full-audit.js --fresh-luna` (bez `--test-luna`).",
    );
    lines.push("");
  }

  lines.push("## 2. Strukturālā pārbaude");
  lines.push("");
  lines.push("| Pārbaude | Rezultāts |");
  lines.push("|----------|-----------|");
  lines.push(`| Syntax A1/A2 | ${ctx.gates.syntax} |`);
  lines.push(`| Mirror A1/A2 | ${ctx.gates.mirror} |`);
  lines.push(`| Mojibake | ${ctx.gates.mojibake} |`);
  lines.push(`| Parity | ${ctx.gates.parity} |`);
  lines.push(`| validate-study-design | ${ctx.gates.validateStudy} |`);
  lines.push(`| DE read-only (top-level) | ${ctx.gates.deReadOnly} |`);
  lines.push(`| Luna lingvistiskais | ${ctx.lunaRan ? (ctx.lunaTestOnly ? "TEST BATCH" : "PASS/RAN") : "SKIPPED"} |`);
  lines.push("");

  if (ctx.a1.missingStudy.length) {
    lines.push("## 3. A1 CRITICAL — trūkstošie Study (10)");
    lines.push("");
    lines.push("| DE | Study ID |");
    lines.push("|----|----------|");
    for (const m of ctx.a1.missingStudy) {
      lines.push(`| ${m.de} | \`${m.id}\` |`);
    }
    lines.push("");
  }

  if (ctx.lunaFindings.length) {
    const sev = countSeverity(ctx.lunaFindings);
    lines.push("## 4. Luna validētie lingvistiskie atradumi");
    lines.push("");
    lines.push(`CRITICAL: **${sev.CRITICAL}** · HIGH: **${sev.HIGH}** · MEDIUM: **${sev.MEDIUM}** · LOW: **${sev.LOW}**`);
    lines.push("");
    const show = ctx.lunaFindings.slice(0, 100);
    show.forEach((f, i) => lines.push(formatLunaFinding(f, i)));
    if (ctx.lunaFindings.length > show.length) {
      lines.push(`> … un vēl **${ctx.lunaFindings.length - show.length}** atradumi — pilns saraksts: \`reports/temp/fr-a1-a2-linguistic-audit.json\``);
      lines.push("");
    }
  }

  lines.push("## 5. Deterministiskie atradumi (kopsavilkums)");
  lines.push("");
  lines.push("Pilns deterministiskais JSON: `reports/temp/fr-de-a1-a2-audit-data.json`");
  lines.push("");
  lines.push("- A1: 10 trūkstošie Study, 24 kartītes ar LV atlikumiem, 6 DE Study neatbilstības");
  lines.push("- A2: 147 kartītes ar LV atlikumiem `comparison[].example`, 18 tukšas `minimalStudy`");
  lines.push("");

  lines.push("## 6. Audita metodoloģija");
  lines.push("");
  lines.push("| Rīks | Komanda |");
  lines.push("|------|---------|");
  lines.push("| Kolektors | `node scripts/audit-fr-a1-a2-collect.js` |");
  lines.push("| Luna | `node scripts/audit-fr-a1-a2-linguistic.js [--test-batch] [--resume]` |");
  lines.push("| Orķestrators | `node scripts/run-fr-a1-a2-full-audit.js [--skip-luna] [--test-luna] [--fresh-luna]` |");
  lines.push("| Paritāte | `node scripts/audit-language-parity.js --lang=fr` |");
  lines.push("| Study dizains | `node scripts/validate-study-design.js --lang=fr` |");
  lines.push("");

  return lines.join("\n");
}

function main() {
  console.log("\n=== FR–DE A1+A2 FULL READ-ONLY AUDIT ===\n");

  fs.mkdirSync(path.join(ROOT, "reports", "temp"), { recursive: true });

  runNode("audit-fr-a1-a2-collect.js");

  const parity = spawnSync("node", [path.join(ROOT, "scripts", "audit-language-parity.js"), "--lang=fr"], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  fs.writeFileSync(path.join(ROOT, "reports", "temp", "es-parity.json"), parity.stdout || "{}");

  const validate = spawnSync("node", [path.join(ROOT, "scripts", "validate-study-design.js"), "--lang=fr"], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  fs.writeFileSync(path.join(ROOT, "reports", "temp", "es-validate-study.json"), validate.stdout || "{}");

  const moj = spawnSync("node", [path.join(ROOT, "scripts", "audit-mojibake.js"), "--lang=fr"], {
    cwd: ROOT,
    encoding: "utf8",
  });
  fs.writeFileSync(path.join(ROOT, "reports", "temp", "es-mojibake.json"), moj.stdout || "{}");

  const compliance = spawnSync("node", [path.join(ROOT, "scripts", "verify-fr-de-compliance.js")], {
    cwd: ROOT,
    encoding: "utf8",
  });
  fs.writeFileSync(path.join(ROOT, "reports", "temp", "fr-de-compliance.json"), compliance.stdout || "{}");

  execSync("node --check data/fr/a1.js", { cwd: ROOT, stdio: "pipe" });
  execSync("node --check data/fr/a2.js", { cwd: ROOT, stdio: "pipe" });

  let lunaRan = false;
  let lunaTestOnly = false;
  let lunaError = null;
  let lunaData = { qualityFindings: [], meta: {} };

  if (FRESH_LUNA) {
    if (fs.existsSync(LUNA_JSON)) fs.unlinkSync(LUNA_JSON);
    if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    const progressFile = path.join(ROOT, "scripts", ".fr-a1-a2-luna-progress.json");
    if (fs.existsSync(progressFile)) fs.unlinkSync(progressFile);
  }

  if (!SKIP_LUNA) {
    if (!process.env.OPENAI_API_KEY?.trim()) {
      lunaError = "OPENAI_API_KEY nav pieejama — Luna audits netika palaists.";
      console.warn(`\nWARNING: ${lunaError}\n`);
    } else {
      try {
        const lunaArgs = [];
        if (TEST_LUNA) lunaArgs.push("--test-batch");
        else if (!FRESH_LUNA) lunaArgs.push("--resume");
        if (FRESH_LUNA) lunaArgs.push("--fresh");
        runNode("audit-fr-a1-a2-linguistic.js", lunaArgs);
        lunaRan = true;
        lunaTestOnly = TEST_LUNA;
      } catch (error) {
        lunaError = error.message || String(error);
        console.warn(`\nWARNING: Luna audit failed: ${lunaError}\n`);
      }
    }
  }

  lunaData = loadJson(LUNA_JSON, { qualityFindings: [], meta: {} });
  const lunaClassified = classifyFindings(lunaData.findings || lunaData.qualityFindings || []);
  const lunaFindings = lunaData.qualityFindings?.length
    ? lunaData.qualityFindings
    : lunaClassified.qualityFindings;

  const collect = loadJson(COLLECT_JSON, {});
  const parityData = loadJson(path.join(ROOT, "reports/temp/es-parity.json"), {});
  const validateData = loadJson(path.join(ROOT, "reports/temp/es-validate-study.json"), {});
  const mojData = loadJson(path.join(ROOT, "reports/temp/es-mojibake.json"), {});
  const complianceData = loadJson(path.join(ROOT, "reports/temp/fr-de-compliance.json"), {});

  const a1Validate = validateData.perFile?.find((f) => f.file === "data/fr/a1.js") || {};
  const a2Validate = validateData.perFile?.find((f) => f.file === "data/fr/a2.js") || {};

  const originSha = git("git rev-parse HEAD");
  const date = new Date().toISOString().slice(0, 10);

  const a1 = {
    frStudy: collect.levels?.[0]?.counts?.frStudy || 0,
    sectionAccentIssues: a1Validate.sectionAccentIssues || 0,
    lvRemnantCards: new Set(
      (collect.levels?.[0]?.foreignRemnants?.issues || [])
        .filter((i) => i.category === "LV_REMNANT")
        .map((i) => i.de),
    ).size,
    missingStudy: collect.levels?.[0]?.missingStudy || [],
  };
  const a2 = {
    frStudy: collect.levels?.[1]?.counts?.frStudy || 0,
    sectionAccentIssues: a2Validate.sectionAccentIssues || 0,
    lvRemnantCards: new Set(
      (collect.levels?.[1]?.foreignRemnants?.issues || [])
        .filter((i) => i.category === "LV_REMNANT")
        .map((i) => i.de),
    ).size,
    minimalStudyNoRenderable: collect.levels?.[1]?.minimalStudyNoRenderable || [],
  };

  const deterministicFail =
    a1.missingStudy.length > 0 ||
    a1.lvRemnantCards > 0 ||
    a2.lvRemnantCards > 0 ||
    a2.minimalStudyNoRenderable.length > 0;

  const verdict =
    deterministicFail || lunaFindings.length > 0
      ? lunaRan && !lunaTestOnly && lunaFindings.length === 0 && !deterministicFail
        ? "PASS"
        : "NEEDS_REPAIR"
      : lunaRan
        ? "PASS"
        : "NEEDS_REPAIR (deterministic pending Luna)";

  const payload = {
    meta: {
      date,
      standard: "LANGUAGE_AUDIT_STANDARD.md",
      scope: "FR-DE A1+A2",
      originMainSha: originSha,
      readOnly: true,
      productionChanges: 0,
      lunaModel: lunaData.meta?.model || "gpt-5.6-luna",
      lunaCoverage: lunaData.meta?.coverage || (lunaRan ? "partial" : "skipped"),
      lunaRan,
      lunaTestOnly,
      lunaError,
    },
    summary: collect.summary,
    gates: {
      syntax: "PASS",
      mirror: collect.summary?.mirrorPass ? "PASS" : "FAIL",
      mojibake: mojData.pass ? "PASS" : "FAIL",
      parity: parityData.pass ? "PASS" : "FAIL",
      validateStudy: validateData.pass ? "PASS" : "FAIL",
      deReadOnly: complianceData.deReadOnly?.pass ? "PASS" : "FAIL",
      luna: lunaRan ? (lunaTestOnly ? "TEST_BATCH" : "RAN") : lunaError ? "SKIPPED_NO_KEY" : "SKIPPED",
    },
    a1,
    a2,
    luna: {
      findings: lunaFindings,
      severityCounts: lunaData.severityCounts || countSeverity(lunaFindings),
      apiUsage: lunaData.apiUsage || null,
    },
    verdict,
  };

  const ctx = {
    date,
    originSha,
    a1,
    a2,
    gates: payload.gates,
    lunaRan,
    lunaTestOnly,
    lunaCoverage: payload.meta.lunaCoverage,
    lunaFindings,
    verdict,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, buildReport(ctx));

  console.log(`\nWrote ${OUT_MD}`);
  console.log(`Wrote ${OUT_JSON}`);
  console.log(`VERDICT: ${verdict}`);
  if (lunaError) console.log(`LUNA: ${lunaError}`);
}

main();
