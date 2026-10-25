#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { buildNnPtRoReadinessReport } = require("./lib/g2-a1-production-current/card-translation-nn-pt-ro-readiness");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-nn-pt-ro-source-chain");

function sourcePublicUrl(src) {
  return src.portalUrl || src.catalogUrl || src.viewerUrl || src.downloadUrl || null;
}

function main() {
  const report = buildNnPtRoReadinessReport();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const jsonPath = path.join(OUT_DIR, "card-translation-nn-pt-ro-source-chain.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const lines = [
    "# G2/A1 kartīšu tulkojums — pt / ro / nn audita avotu ķēde",
    "",
    `- **Ģenerēts:** ${report.generatedAt}`,
    `- **Avotu reģistrs:** \`${report.inputs.auditCatalog}\``,
    `- **Pilot verifikācija:** \`${report.inputs.pilotVerification}\``,
    `- **Discovery:** \`${report.inputs.discoveryReport}\``,
    `- **Production / OWNER / MASTER mainīti:** nē`,
    "",
    "## Kopsavilkums",
    "",
    "| Valoda | Primārais stack | Statuss |",
    "|--------|-----------------|--------|",
    "| **pt** | Torchtrop 1943 (IA OCR) + Wagener / modern IA papildus | **PT_DIGITIZED_SOURCES_REGISTERED_PARTIAL** |",
    "| **ro** | Barcianu 1886 (bidir IA) + TDRG³ (solirom) | **RO_DIGITIZED_SOURCES_REGISTERED_PARTIAL** |",
    "| **nn** | Helms 11752747 + Kaper MDZ + Hanson; DinOrdbok tikai kontrolei | **NN_DIGITIZED_SOURCES_REGISTERED_PARTIAL** |",
    "",
    "## Pilot (6 DE lemmas)",
    "",
    "- **pt:** 4/6 primārais Torchtrop; *Grenzkonflikt*, *Machtgier* nav",
    "- **ro:** 4/6 Barcianu; TDRG³ 4/6 (cásă→Haus, lucrá→arbeiten, ban→Kleingeld, cinstí→bewirten)",
    "- **nn:** 4/6 Helms/Kaper (vēsturisks dāņu–norv.); nav moderna nynorsk digitālā pāra",
    "",
    "## Audita secība",
    ...report.auditSequence.map((step) => `${step.step}. ${step.rule}`),
    "",
  ];

  for (const lang of report.languages) {
    lines.push(`## ${lang.appLang.toUpperCase()} — ${lang.readinessClassification}`);
    lines.push("");
    if (lang.primaryDigitized?.length) {
      lines.push("### Primārie avoti");
      for (const src of lang.primaryDigitized) {
        lines.push(`- **${src.name}** (${src.direction}): ${src.viewerUrl || src.portalUrl || src.ocrUrl}`);
      }
    }
    if (lang.modernInstitutional?.length) {
      lines.push("", "### Institucionālie (mūsdienīgi)");
      for (const src of lang.modernInstitutional) {
        lines.push(`- **${src.name}**: ${sourcePublicUrl(src)}`);
      }
    }
    if (lang.supplementaryControlOnly?.length) {
      lines.push("", "### Tikai papildu kontrole (nav autoritatīvi)");
      for (const src of lang.supplementaryControlOnly) {
        lines.push(`- ${src.name}: ${src.portalUrl}`);
      }
    }
    lines.push("");
  }

  fs.writeFileSync(path.join(OUT_DIR, "card-translation-nn-pt-ro-source-chain.md"), `${lines.join("\n")}\n`);
  console.log(JSON.stringify({ ok: true, summary: report.summary, jsonPath }, null, 2));
}

main();
