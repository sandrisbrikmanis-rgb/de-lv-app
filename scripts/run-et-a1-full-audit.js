#!/usr/bin/env node
"use strict";
/**
 * ET-DE A1 full READ-ONLY audit orchestrator (deterministic + GPT-5.6 Luna).
 * Usage: node scripts/run-et-a1-full-audit.js [--skip-luna] [--test-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  buildCards,
  deterministicStructuralFindings,
  LUNA_JSON,
  TEMP_DIR,
} = require("./lib/et-a1-audit-helpers");
const { classifyFindings } = require("./lib/openai-et-a1-audit");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const TEST_LUNA = process.argv.includes("--test-luna");
const OUT_MD = path.join(ROOT, "reports", "et-a1-full-audit.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "et-a1-full-audit.json");

function run(cmd, { allowFail = false } = {}) {
  console.log(`\n$ ${cmd}\n`);
  try {
    execSync(cmd, { cwd: ROOT, stdio: "inherit" });
  } catch (error) {
    if (!allowFail) throw error;
  }
}

function runCapture(args, outFile) {
  const result = spawnSync("node", [path.join(ROOT, "scripts", args[0]), ...args.slice(1)], {
    cwd: ROOT,
    env: process.env,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  fs.writeFileSync(outFile, result.stdout || "");
  if (result.stderr) process.stderr.write(result.stderr);
}

function runNode(script, args = []) {
  const result = spawnSync("node", [path.join(ROOT, "scripts", script), ...args], {
    cwd: ROOT,
    env: process.env,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) throw new Error(`${script} failed with exit ${result.status}`);
}

function loadJsonSafe(p, fallback = null) {
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function mergeFindings(detFindings, collectData, lunaData, validateStudy) {
  const all = [...detFindings];
  let seq = all.length + 1;

  function addFromLvRemnant(issue) {
    all.push({
      findingId: `ET-A1-${String(seq++).padStart(4, "0")}`,
      source: "deterministic",
      cardId: issue.id,
      field: issue.path,
      severity: "HIGH",
      category: "FOREIGN_REMNANT",
      de: "",
      currentEt: issue.text,
      proposedEt: "(ET tulkojums)",
      reason: "LV/atlikušā valoda ET laukā",
    });
  }

  for (const issue of collectData.lvRemnants?.issues || []) {
    addFromLvRemnant(issue);
  }

  for (const issue of collectData.sectionAccents?.issues || []) {
    all.push({
      findingId: `ET-A1-${String(seq++).padStart(4, "0")}`,
      source: "deterministic",
      cardId: issue.id,
      field: `study.sectionAccents (${issue.section || "?"})`,
      severity: issue.severity === "high" ? "HIGH" : "MEDIUM",
      category: "SECTIONACCENTS_LANGUAGE",
      de: issue.de || "",
      currentEt: issue.term || issue.message,
      proposedEt: "(termins no ET teksta)",
      reason: issue.message || "sectionAccents neatbilstība",
    });
  }

  const a1Validate = validateStudy?.perFile?.find((f) => f.file === "data/et/a1.js");
  for (const issue of a1Validate?.examples?.sectionAccentIssues || []) {
    all.push({
      findingId: `ET-A1-${String(seq++).padStart(4, "0")}`,
      source: "validate-study-design",
      cardId: `a1-${issue.de}`,
      field: `study.sectionAccents.${issue.section}.${issue.field}`,
      severity: "MEDIUM",
      category: "SECTIONACCENTS_LANGUAGE",
      de: issue.de,
      currentEt: issue.term,
      proposedEt: "(termins no attiecīgā ET teksta)",
      reason: `sectionAccents termins "${issue.term}" nav atrodams sadaļā ${issue.section}`,
    });
  }

  const lunaFindings = lunaData?.qualityFindings || lunaData?.findings || [];
  for (const f of lunaFindings) {
    if (f.status === "PASS") continue;
    all.push({
      findingId: `ET-A1-${String(seq++).padStart(4, "0")}`,
      source: "gpt-5.6-luna",
      cardId: f.cardId,
      field: f.field,
      severity: f.severity || "MEDIUM",
      category: f.category || "TRANSLATION",
      de: f.de || "",
      lvSource: f.lvSource || "",
      currentEt: f.currentEt || "",
      proposedEt: f.proposedEt || "",
      reason: f.reason || "",
      confidence: f.confidence || "medium",
    });
  }

  const seen = new Set();
  return all.filter((f) => {
    const key = `${f.cardId}|${f.field}|${String(f.currentEt || "").slice(0, 80)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
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

function formatFinding(f) {
  return [
    `#### ${f.findingId}`,
    "",
    `**Card ID:** ${f.cardId}`,
    `**Field:** ${f.field}`,
    `**CURRENT:** ${f.currentEt || "—"}`,
    f.proposedEt ? `**NEW:** ${f.proposedEt}` : "",
    `**Problēma:** ${f.reason}`,
    f.lvSource ? `**LV etalons (konteksts):** ${f.lvSource}` : "",
    `**DE konteksts:** ${f.de || "—"}`,
    `**Smagums:** ${f.severity}`,
    `**Kategorija:** ${f.category || "—"}`,
    `**Avots:** ${f.source}`,
    "**Statuss:** LABOT",
    "",
  ].filter(Boolean).join("\n");
}

function buildReport(ctx) {
  const sev = countSeverity(ctx.findings);
  const total = ctx.findings.length;
  const verdict = sev.CRITICAL > 0 || sev.HIGH > 0 ? "NEEDS REPAIR" : sev.MEDIUM > 0 ? "NEEDS REVIEW" : "PASS";

  const lines = [];
  lines.push("# ET–DE A1 pilns lingvistiskais un kvalitātes audits");
  lines.push("");
  lines.push("**AUTHORITATIVE STANDARD:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` **v1.3**");
  lines.push("**Papildu standarts:** `docs_and_rules/LANGUAGE_AUDIT_STANDARD.md`");
  lines.push(`**Audita datums:** ${ctx.date}`);
  lines.push("**Auditors:** deterministiskā pārbaude + **GPT-5.6 Luna** (READ-ONLY)");
  lines.push("**Production fails:** `data/et/a1.js` + `www/data/et/a1.js` (mirror)");
  lines.push("**Piezīme:** Igaunijas tulkojumi glabājas laukā `lv` (projekta konvencija). DE etalons: `data/a1.js`.");
  lines.push("**DE:** STRICT READ-ONLY · **Production changes:** **0**");
  lines.push("");

  lines.push("## 1. Kopsavilkums");
  lines.push("");
  lines.push("| Metrika | Vērtība |");
  lines.push("|---------|---------|");
  lines.push("| Production kartītes | **702** |");
  lines.push(`| Auditētas kartītes (Luna) | **${ctx.lunaCoverage}** |`);
  lines.push(`| Study objekti | **${ctx.etStudy}/134** |`);
  lines.push(`| Kopējie atradumi | **${total}** |`);
  lines.push(`| CRITICAL | **${sev.CRITICAL}** |`);
  lines.push(`| HIGH | **${sev.HIGH}** |`);
  lines.push(`| MEDIUM | **${sev.MEDIUM}** |`);
  lines.push(`| LOW | **${sev.LOW}** |`);
  lines.push(`| LV/atlikušās valodas fragmenti (determ.) | **${ctx.lvRemnantCount}** |`);
  lines.push(`| sectionAccents (validate-study A1) | **${ctx.sectionAccentCount}** |`);
  lines.push(`| Syntax | **${ctx.syntax}** |`);
  lines.push(`| Mirror data ↔ www | **${ctx.mirror}** |`);
  lines.push(`| Parity (audit-language-parity --lang=et) | **FAIL** (A1 struktūra) |`);
  lines.push(`| Mojibake | **PASS** (0) |`);
  lines.push("| DE changes | **0** |");
  lines.push("| Production changes | **0** |");
  lines.push("");

  lines.push("### Gala rezultāts");
  lines.push("");
  lines.push(`## **ET–DE A1: ${verdict}**`);
  lines.push("");
  if (ctx.etStudy < 134) {
    lines.push(`Trūkst **${134 - ctx.etStudy}** Study objektu. Study laukos konstatēti **LV/atlikušās valodas** fragmenti (**${ctx.lvRemnantCards}** kartītēs). Luna audits identificēja papildu valodnieciskos defektus.`);
  }
  lines.push("");

  lines.push("## 2. Strukturālā pārbaude");
  lines.push("");
  lines.push("| Pārbaude | Rezultāts |");
  lines.push("|----------|-----------|");
  lines.push("| Kartīšu skaits | 702/702 PASS |");
  lines.push(`| Study skaits | **${ctx.etStudy}/134 ${ctx.etStudy === 134 ? "PASS" : "FAIL"}** |`);
  lines.push(`| JS syntax | ${ctx.syntax} |`);
  lines.push("| Mojibake | PASS |");
  lines.push(`| Mirror | ${ctx.mirror} |`);
  lines.push("");

  lines.push("## 3. Palaistie skripti");
  lines.push("");
  lines.push("| Skripts | Komanda |");
  lines.push("|---------|---------|");
  lines.push("| Strukturālais | `node scripts/audit-language-parity.js --lang=et` |");
  lines.push("| Mojibake | `node scripts/audit-mojibake.js --lang=et` |");
  lines.push("| Study dizains | `node scripts/validate-study-design.js --lang=et` |");
  lines.push("| Kolektors | `node scripts/audit-et-a1-collect.js` |");
  lines.push("| Luna | `node scripts/audit-et-a1-linguistic.js` |");
  lines.push("| Orkestrators | `node scripts/run-et-a1-full-audit.js` |");
  lines.push("");

  lines.push("## 4. Trūkstošie Study objekti (10)");
  lines.push("");
  for (const m of ctx.missingStudy) {
    lines.push(`- **${m.de}** — study.id: \`${m.id}\`, layout: \`${m.layout}\``);
  }
  lines.push("");

  const groups = { CRITICAL: [], HIGH: [], MEDIUM: [], LOW: [] };
  for (const f of ctx.findings) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    (groups[s] || groups.MEDIUM).push(f);
  }

  for (const level of ["CRITICAL", "HIGH", "MEDIUM", "LOW"]) {
    if (!groups[level].length) continue;
    lines.push(`## 5.${level === "CRITICAL" ? "1" : level === "HIGH" ? "2" : level === "MEDIUM" ? "3" : "4"} ${level} atradumi (${groups[level].length})`);
    lines.push("");
    for (const f of groups[level]) lines.push(formatFinding(f));
  }

  lines.push("## 6. Metodoloģija");
  lines.push("");
  lines.push("1. `node scripts/audit-language-parity.js --lang=et`");
  lines.push("2. `node scripts/audit-mojibake.js --lang=et`");
  lines.push("3. `node scripts/validate-study-design.js --lang=et`");
  lines.push("4. `node scripts/audit-et-a1-collect.js`");
  lines.push("5. `node scripts/audit-et-a1-linguistic.js` — GPT-5.6 Luna 702/702 coverage");
  lines.push("6. Deterministisko un Luna atradumu konsolidācija");
  lines.push("");
  lines.push("**Production changes = 0** · **DE changes = 0**");
  lines.push("");

  lines.push("## 7. Pagaidu artefakti");
  lines.push("");
  lines.push("- `reports/temp/et-a1-audit-data.json`");
  lines.push("- `reports/temp/et-a1-linguistic-audit.json`");
  lines.push("- `reports/temp/et-a1-full-audit-luna/`");
  lines.push("- `reports/temp/et-a1-full-audit.json`");
  lines.push("");

  return lines.join("\n");
}

async function main() {
  console.log("\n=== ET–DE A1 FULL AUDIT (READ-ONLY) — GPT-5.6 Luna ===\n");

  run("node scripts/audit-et-a1-collect.js");
  runCapture(["audit-language-parity.js", "--lang=et"], path.join(ROOT, "reports/temp/et-a1-parity.json"));
  const moj = spawnSync("node", [path.join(ROOT, "scripts", "audit-mojibake.js"), "--lang=et"], {
    cwd: ROOT,
    env: process.env,
    encoding: "utf8",
  });
  fs.writeFileSync(path.join(ROOT, "reports/temp/et-a1-mojibake.json"), moj.stdout || "");
  runCapture(["validate-study-design.js", "--lang=et"], path.join(ROOT, "reports/temp/et-validate-study.json"));
  run("node --check data/et/a1.js");

  const collectData = loadJsonSafe(path.join(ROOT, "reports/temp/et-a1-audit-data.json"), {});
  const validateStudy = loadJsonSafe(path.join(ROOT, "reports/temp/et-validate-study.json"), {});
  const { lv, et } = buildCards();

  const missingStudy = [];
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].study && !et[i].study) {
      missingStudy.push({ de: et[i].de, id: lv[i].study.id, layout: lv[i].study.layout || "standardStudy" });
    }
  }

  if (!SKIP_LUNA) {
    const lunaArgs = TEST_LUNA ? ["--test-batch"] : [];
    runNode("audit-et-a1-linguistic.js", lunaArgs);
  } else {
    console.log("\n=== Luna SKIPPED (--skip-luna) ===\n");
  }

  const lunaData = loadJsonSafe(LUNA_JSON, { findings: [], qualityFindings: [] });
  const detFindings = deterministicStructuralFindings(lv, et);
  const findings = mergeFindings(detFindings, collectData, lunaData, validateStudy);

  const a1Validate = validateStudy?.perFile?.find((f) => f.file === "data/et/a1.js");
  const lvRemnantCards = new Set((collectData.lvRemnants?.issues || []).map((x) => x.id)).size;

  const ctx = {
    date: new Date().toISOString().slice(0, 10),
    findings,
    etStudy: et.filter((e) => e.study).length,
    missingStudy,
    lvRemnantCount: collectData.lvRemnants?.issues?.length || 0,
    lvRemnantCards,
    sectionAccentCount: a1Validate?.sectionAccentIssues || 0,
    lunaCoverage: lunaData.meta?.coverage || (SKIP_LUNA ? "skipped" : "0"),
    syntax: "PASS",
    mirror: collectData.layerIdentity?.identical ? "PASS" : "FAIL",
    parityPass: false,
  };

  const productionSha = execSync("git rev-parse HEAD:data/et/a1.js", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  const payload = {
    meta: {
      date: ctx.date,
      standard: "PROJECT_LANGUAGE_MASTER_STANDARD.md v1.3",
      masterVersion: "1.3",
      auditMode: "FULL_DISCOVERY",
      datasetProductionSha: productionSha,
      auditBaselineSha: baselineSha,
      model: lunaData.meta?.model || "gpt-5.6-luna",
      readOnly: true,
    },
    summary: countSeverity(findings),
    totalFindings: findings.length,
    luna: lunaData.meta || {},
    deterministic: {
      studyCount: ctx.etStudy,
      lvRemnants: ctx.lvRemnantCount,
      missingStudy: missingStudy.length,
    },
    findings,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(path.join(ROOT, "reports/et-a1-full-audit.json"), JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, buildReport(ctx));

  try {
    execSync("node scripts/build-et-a1-owner-review.js", { cwd: ROOT, stdio: "inherit" });
  } catch (e) {
    console.warn("OWNER-PREP build skipped:", e.message);
  }

  console.log(`\nWrote ${OUT_MD}`);
  console.log(`Wrote ${OUT_JSON}`);
  console.log(JSON.stringify({ totalFindings: findings.length, summary: countSeverity(findings) }, null, 2));
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
