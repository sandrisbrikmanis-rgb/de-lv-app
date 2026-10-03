#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { buildFrBgBsReadinessReport } = require("./lib/g2-a1-production-current/card-translation-fr-bg-bs-readiness");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-fr-bg-bs-source-chain");

function main() {
  const report = buildFrBgBsReadinessReport();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const jsonPath = path.join(OUT_DIR, "card-translation-fr-bg-bs-source-chain.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const lines = [];
  lines.push("# G2/A1 kartīšu tulkojums — fr / bg / bs audita avotu ķēde");
  lines.push("");
  lines.push(`- **Ģenerēts:** ${report.generatedAt}`);
  lines.push(`- **Avotu reģistrs:** \`${report.inputs.auditCatalog}\``);
  lines.push(`- **Pilot verifikācija:** \`${report.inputs.pilotVerification}\``);
  lines.push(`- **Production / OWNER / MASTER mainīti:** nē`);
  lines.push("");
  lines.push("## Kopsavilkums");
  lines.push("");
  lines.push(`| Valoda | Jaunais audita avots | Statuss |`);
  lines.push(`|--------|----------------------|---------|`);
  lines.push(
    `| **fr** | Sachs–Villatte 1906 (primārais); Mozin/Biber tikai rezerve | ${report.summary.frPrimarySourceId} |`,
  );
  lines.push(
    `| **bg** | Miladinov vol. I DE→BG; vol. II HathiTrust + MultiSlavDict BG→DE | ${report.summary.bgPrimarySourceId} + reverse chain |`,
  );
  lines.push(`| **bs** | — | **${report.summary.bsStatus}** (nav derīga digitizēta DE↔BS vārdnīca) |`);
  lines.push("");
  lines.push("## Audita secība");
  for (const step of report.auditSequence) {
    lines.push(`${step.step}. ${step.rule}`);
  }
  lines.push("");

  for (const lang of report.languages) {
    lines.push(`## ${lang.appLang.toUpperCase()} — ${lang.readinessClassification}`);
    if (lang.usesNewAuditSources) {
      lines.push("");
      lines.push("> **Jaunie avoti:** reģistrēti audita katalogā un dokumentēti šajā atskaitē.");
    }
    lines.push("");
    if (lang.digitizedAuditStatus) {
      lines.push(`- **Digitizācijas audits:** \`${lang.digitizedAuditStatus}\``);
    }
    lines.push("### Primārie digitizētie avoti");
    for (const src of lang.primaryDigitized) {
      const url = src.viewerUrl || src.pdfUrl || src.portalUrl || "—";
      lines.push(`- **${src.name}** (${src.direction}): ${url}`);
    }
    if (lang.reverseChainDigitized?.length) {
      lines.push("");
      lines.push("### BG→DE ķēde (otrais posms)");
      for (const src of lang.reverseChainDigitized) {
        lines.push(`- **${src.name}** [${src.role}]: ${src.viewerUrl}`);
      }
    }
    if (lang.supplementaryReserve?.length) {
      lines.push("");
      lines.push("### Rezerves avoti");
      for (const src of lang.supplementaryReserve) {
        lines.push(`- ${src.name} (${src.role})`);
      }
    }
    if (lang.rejectedNotUsable?.length) {
      lines.push("");
      lines.push("### Noraidīti (nav audita avoti)");
      for (const src of lang.rejectedNotUsable) {
        lines.push(`- ${src.name}: ${src.reason}`);
      }
    }
    lines.push("");
    lines.push("### Avotu secība");
    for (const line of lang.sourceChainPriority) {
      lines.push(`- ${line}`);
    }
    lines.push("");
    lines.push("### Regresija (pilot OCR / skenējums)");
    lines.push("| Lemma | Solis | Avots | Pāris | URL |");
    lines.push("| --- | --- | --- | --- | --- |");
    for (const row of lang.regressionPilotDe) {
      const pair = row.pairFound ? row.targetGloss || "FOUND" : "NOT_FOUND";
      const url = row.entryUrl ? `[link](${row.entryUrl})` : "—";
      lines.push(`| ${row.deLemma} | ${row.auditStepUsed} | ${row.sourceName} | ${pair} | ${url} |`);
    }
    lines.push("");
  }

  const mdPath = path.join(OUT_DIR, "card-translation-fr-bg-bs-source-chain.md");
  fs.writeFileSync(mdPath, `${lines.join("\n")}\n`);

  console.log(
    JSON.stringify(
      {
        ok: true,
        summary: report.summary,
        paths: [
          "reports/g2-a1-production-current/card-translation-fr-bg-bs-source-chain/card-translation-fr-bg-bs-source-chain.json",
          "reports/g2-a1-production-current/card-translation-fr-bg-bs-source-chain/card-translation-fr-bg-bs-source-chain.md",
        ],
      },
      null,
      2,
    ),
  );
}

main();
