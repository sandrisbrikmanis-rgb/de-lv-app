#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { buildHrHuIsReadinessReport } = require("./lib/g2-a1-production-current/card-translation-hr-hu-is-readiness");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-hr-hu-is-source-chain");

function main() {
  const report = buildHrHuIsReadinessReport();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const jsonPath = path.join(OUT_DIR, "card-translation-hr-hu-is-source-chain.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const lines = [];
  lines.push("# G2/A1 kartīšu tulkojums — hr / hu / is audita avotu ķēde");
  lines.push("");
  lines.push(`- **Ģenerēts:** ${report.generatedAt}`);
  lines.push(`- **Avotu reģistrs:** \`${report.inputs.auditCatalog}\``);
  lines.push(`- **Pilot verifikācija:** \`${report.inputs.pilotVerification}\``);
  lines.push(`- **Production / OWNER / MASTER mainīti:** nē`);
  lines.push("");
  lines.push("## Kopsavilkums");
  lines.push("");
  lines.push("| Valoda | Audita ķēde | Gala statuss |");
  lines.push("|--------|-------------|--------------|");
  lines.push(
    `| **hr** | Šulek DE→HR (MDZ I–II) + Filipović 1875 HR→DE A–O | **${report.summary.hrStatus}** |`,
  );
  lines.push(
    `| **hu** | MEK 24482 DE→HU + MEK 00072 DE↔HU; REAL-EOD papild. | **${report.summary.huStatus}** |`,
  );
  lines.push(`| **is** | — (nav audit-ready digitizācijas) | **${report.summary.isStatus}** |`);
  lines.push("");
  lines.push("## Avotu prioritāte un pilot (īss)");
  lines.push("");
  lines.push("- **hr:** DE→HR izmantojams (Šulek); HR→DE nepilns A–O; pilot **3/6** + reverse **kuća**.");
  lines.push("- **hu:** MEK 24482 atvērts PDF; MEK 00072 meklējams DE↔HU; pilot **4/6** + **Haus→ház**.");
  lines.push("- **is:** LEXÍA nav pipeline-verificēta; pilns DE↔IS PDF nav — **nav reģistrēts** kā gatavs avots.");
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
      lines.push("> **Jaunie avoti:** reģistrēti audita katalogā (PARTIAL — nav READY).");
    }
    lines.push("");
    if (lang.digitizedAuditStatus) {
      lines.push(`- **Digitizācijas audits:** \`${lang.digitizedAuditStatus}\``);
    }
    if (lang.auditReady === false) {
      lines.push("- **Audit READY:** nē (apzināti PARTIAL / not verified)");
    }
    lines.push("### Primārie digitizētie avoti");
    for (const src of lang.primaryDigitized) {
      const url = src.viewerUrl || src.pdfUrl || src.pdfUrlPart1 || "—";
      lines.push(`- **${src.name}** (${src.direction}): ${url}`);
    }
    if (lang.reverseChainDigitized?.length) {
      lines.push("");
      lines.push("### HR→DE / reverse ķēde");
      for (const src of lang.reverseChainDigitized) {
        lines.push(`- **${src.name}** [${src.role}]: ${src.viewerUrl || src.ocrUrl}`);
        if (src.coverageGap) lines.push(`  - Gap: ${src.coverageGap}`);
      }
    }
    if (lang.supplementaryReserve?.length) {
      lines.push("");
      lines.push("### Papildu / rezerves avoti");
      for (const src of lang.supplementaryReserve) {
        lines.push(`- ${src.name} (${src.role})${src.pdfUrl ? `: ${src.pdfUrl}` : ""}`);
      }
    }
    if (lang.rejectedNotUsable?.length) {
      lines.push("");
      lines.push("### Noraidīti / nav audit avoti");
      for (const src of lang.rejectedNotUsable) {
        lines.push(`- ${src.name}: ${src.reason}`);
      }
    }
    lines.push("");
    lines.push("### Avotu secība");
    for (const line of lang.sourceChainPriority) {
      lines.push(`- ${line}`);
    }
    if (lang.pilotSummary) {
      lines.push("");
      lines.push("### Pilot kopsavilkums");
      lines.push("```json");
      lines.push(JSON.stringify(lang.pilotSummary, null, 2));
      lines.push("```");
    }
    lines.push("");
    lines.push("### Regresija (pilot)");
    lines.push("| Lemma | Solis | Avots | Pāris | URL |");
    lines.push("| --- | --- | --- | --- | --- |");
    for (const row of lang.regressionPilotDe) {
      const pair = row.pairFound ? row.targetGloss || "FOUND" : "NOT_FOUND";
      const url = row.entryUrl ? `[link](${row.entryUrl})` : "—";
      lines.push(`| ${row.deLemma} | ${row.auditStepUsed} | ${row.sourceName} | ${pair} | ${url} |`);
    }
    lines.push("");
  }

  const mdPath = path.join(OUT_DIR, "card-translation-hr-hu-is-source-chain.md");
  fs.writeFileSync(mdPath, `${lines.join("\n")}\n`);

  console.log(
    JSON.stringify(
      {
        ok: true,
        summary: report.summary,
        paths: [
          "reports/g2-a1-production-current/card-translation-hr-hu-is-source-chain/card-translation-hr-hu-is-source-chain.json",
          "reports/g2-a1-production-current/card-translation-hr-hu-is-source-chain/card-translation-hr-hu-is-source-chain.md",
        ],
      },
      null,
      2,
    ),
  );
}

main();
