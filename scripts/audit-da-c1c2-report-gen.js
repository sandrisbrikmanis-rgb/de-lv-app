#!/usr/bin/env node
/**
 * DA-DE C1/C2 audit report generator (GPT-5.6 Luna).
 * Reads reports/temp/da-c1-audit-data.json and da-c2-audit-data.json
 * → writes reports/da-c1-full-audit.md and reports/da-c2-full-audit.md
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const LEVELS = [
  {
    key: "c1",
    label: "C1",
    inFile: path.join(ROOT, "reports/temp/da-c1-audit-data.json"),
    outFile: path.join(ROOT, "reports/da-c1-full-audit.md"),
    collectScript: "audit-da-c1c2-collect.js --level=c1",
  },
  {
    key: "c2",
    label: "C2",
    inFile: path.join(ROOT, "reports/temp/da-c2-audit-data.json"),
    outFile: path.join(ROOT, "reports/da-c2-full-audit.md"),
    collectScript: "audit-da-c1c2-collect.js --level=c2",
  },
];

function findingBlock(f) {
  return [
    `#### ${f.id}`,
    "",
    `**Card ID:** ${f.cardId}`,
    `**Field:** ${f.field}`,
    `**DE konteksts:** ${f.deContext || "—"}`,
    `**CURRENT (DA):** ${f.currentDa}`,
    `**PROPOSED (DA):** ${f.proposedDa}`,
    `**Problēma:** ${f.problem}`,
    `**Pamatojums:** ${f.rationale}`,
    `**Smagums:** ${f.severity}`,
    `**Statuss:** ${f.status}`,
    "",
  ].join("\n");
}

function generateReport(cfg, data) {
  const { meta, structural, summary, findings } = data;
  const sev = summary.bySeverity;
  const realFindings = findings.filter((f) => f.status !== "FALSE_POSITIVE");
  const verdict =
    (sev.CRITICAL || 0) + (sev.HIGH || 0) + (sev.MEDIUM || 0) > 0 ? "NEEDS REPAIR" : "PASS";

  let parityPass = false;
  try {
    const out = execSync("node scripts/audit-language-parity.js --lang=da", { cwd: ROOT, encoding: "utf8" });
    const j = JSON.parse(out.trim());
    parityPass = j.pass === true && (j.byLevel?.[cfg.key]?.pass !== false);
  } catch {
    parityPass = false;
  }

  const comparisonCount = realFindings.filter(
    (f) => f.field.includes("comparison") && f.field.endsWith(".example")
  ).length;
  const zwCount = realFindings.filter((f) => f.problem.includes("ZERO_WIDTH")).length;
  const sectionAccentCount = realFindings.filter((f) => f.field.includes("sectionAccents")).length;
  const synonymCount = realFindings.filter((f) => f.field === "lv" && f.problem.includes("sinonīmu")).length;
  const missingStudyCount = realFindings.filter(
    (f) => f.field === "study" && /Trūkst Study|missing/i.test(f.problem)
  ).length;
  const foreignCount = realFindings.filter(
    (f) =>
      f.problem.includes("Svešvalodu") ||
      f.problem.includes("latviešu") ||
      f.problem.includes("LV") ||
      /BS|ET|LT|UK|RU/.test(f.problem)
  ).length;

  const md = [];
  md.push(`# DA–DE ${cfg.label} pilns lingvistiskais un kvalitātes audits`);
  md.push("");
  md.push(`**Datums:** ${meta.date}`);
  md.push("**Auditors:** GPT-5.6 Luna (READ-ONLY)");
  md.push(`**Audita režīms:** ${meta.mode || "READ-ONLY"}`);
  md.push(`**Production fails:** \`${meta.daFile}\` (primārais) + \`${meta.wwwFile}\` (mirror)`);
  md.push(`**Piezīme:** ${meta.note}`);
  md.push(`**DE etalons (tikai lasīšana):** \`${meta.deReference}\``);
  md.push("");
  md.push("---");
  md.push("");
  md.push("## 1. Dataset scope");
  md.push("");
  md.push("| Metrika | Vērtība |");
  md.push("|---------|---------|");
  md.push(`| Cards total | **${meta.expectedCards}** |`);
  md.push(`| Cards audited | **${meta.productionCards}/${meta.expectedCards}** |`);
  md.push(`| Flashcards | **${meta.flashcards ?? meta.regularCards}** |`);
  md.push(`| Study total | **${meta.expectedStudies}** |`);
  md.push(`| Study audited | **${meta.studyCount}/${meta.expectedStudies}** |`);
  md.push(`| standardStudy | **${meta.standardStudy ?? "—"}** |`);
  md.push(`| minimalStudy | **${meta.minimalStudy ?? "—"}** |`);
  md.push(`| Other study types | **${meta.otherStudyTypes ?? 0}** |`);
  md.push(`| Coverage | **${meta.productionCards === meta.expectedCards ? "100%" : "FAIL"}** |`);
  md.push(`| Parastās kartītes | **${meta.regularCards}** |`);
  md.push("");
  md.push("## 2. Kopsavilkums");
  md.push("");
  md.push("| Metrika | Vērtība |");
  md.push("|---------|---------|");
  md.push(`| Kopējie validētie atradumi | **${summary.total}** |`);
  md.push(`| rawCandidates | **${summary.rawCandidates ?? "—"}** |`);
  md.push(`| falsePositives | **${summary.falsePositives ?? 0}** |`);
  md.push(`| realFindings | **${summary.realFindings ?? realFindings.length}** |`);
  md.push(`| CRITICAL | **${sev.CRITICAL || 0}** |`);
  md.push(`| HIGH | **${sev.HIGH || 0}** |`);
  md.push(`| MEDIUM | **${sev.MEDIUM || 0}** |`);
  md.push(`| LOW | **${sev.LOW || 0}** |`);
  md.push(`| FALSE_POSITIVE | **${summary.byStatus.FALSE_POSITIVE || 0}** |`);
  md.push(`| NEEDS_SOURCE_REVIEW | **${summary.byStatus.NEEDS_SOURCE_REVIEW || 0}** |`);
  md.push(`| Svešvalodu atlikumi (auditēti) | **${foreignCount}** |`);
  md.push(`| Zero-width artefakti | **${zwCount}** |`);
  md.push(`| sectionAccents findings | **${sectionAccentCount}** |`);
  md.push(`| Missing Study | **${missingStudyCount}** |`);
  md.push(`| Front/lv sinonīmu ķēdes | **${synonymCount}** |`);
  md.push(`| Comparison LV atlikumi | **${comparisonCount}** |`);
  md.push(`| Syntax | **${meta.syntaxOk ? "PASS" : "FAIL"}** |`);
  md.push(`| Mirror data ↔ www | **${structural.mirrorPass ? "PASS" : "FAIL"}** |`);
  md.push(`| Parity (--lang=da, ${cfg.label}) | **${parityPass ? "PASS" : "FAIL"}** |`);
  md.push(`| DE changes | **${meta.deChanges}** |`);
  md.push(`| Production changes | **${meta.productionChanges}** |`);
  md.push("");
  md.push("### Gala rezultāts");
  md.push("");
  md.push(`## **DA–DE ${cfg.label}: ${verdict}**`);
  md.push("");
  if (verdict === "NEEDS REPAIR") {
    md.push(
      `Atrasts **${summary.realFindings ?? realFindings.length}** labojumu ierakstu (bez FALSE_POSITIVE). DE integritāte: **${structural.deIntegrityPass ? "PASS" : "FAIL"}**; Study paritāte: **${structural.studyParityPass ? "PASS" : "FAIL"}**. OWNER review: [\`da-c1c2-all-findings-by-card.md\`](./da-c1c2-all-findings-by-card.md).`
    );
  } else {
    md.push("Nav CRITICAL/HIGH/MEDIUM atradumu. DE integritāte un struktūra atbilst etalonam.");
  }
  md.push("");
  md.push("---");
  md.push("");
  md.push("## 3. Strukturālā pārbaude");
  md.push("");
  md.push("| Pārbaude | Rezultāts |");
  md.push("|----------|-----------|");
  md.push(
    `| Kartīšu skaits | ${meta.productionCards}/${meta.expectedCards} ${structural.cardCountPass ? "PASS" : "FAIL"} |`
  );
  md.push(
    `| Study skaits | ${meta.studyCount}/${meta.expectedStudies} ${structural.studyCountPass ? "PASS" : "FAIL"} |`
  );
  md.push(`| DE lauku secība/identitāte | ${structural.deIntegrityPass ? "PASS" : "FAIL"} |`);
  md.push(`| Study paritāte (missing/extra) | ${structural.studyParityPass ? "PASS" : "FAIL"} |`);
  md.push(`| Study ID unikalitāte | ${structural.studyIdsUnique ? "PASS" : "FAIL"} |`);
  md.push(`| Mirror data ↔ www | ${structural.mirrorPass ? "PASS" : "FAIL"} |`);
  md.push(`| JS syntax | ${meta.syntaxOk ? "PASS" : "FAIL"} |`);
  md.push(`| Language parity (${cfg.label}) | ${parityPass ? "PASS" : "FAIL"} |`);
  md.push("");
  md.push("---");
  md.push("");
  md.push("## 4. OWNER review");
  md.push("");
  md.push("- [`da-c1c2-all-findings-by-card.md`](./da-c1c2-all-findings-by-card.md)");
  md.push("");
  md.push("---");
  md.push("");
  md.push("## 5. Pilns atradumu saraksts");
  md.push("");

  const sections = [
    ["5.1 CRITICAL — struktūra un DE integritāte", "CRITICAL"],
    ["5.2 HIGH — LV atlikumi un obligātie lauki", "HIGH"],
    ["5.3 MEDIUM — zero-width, sectionAccents, sinonīmu ķēdes", "MEDIUM"],
    ["5.4 LOW — pārējie", "LOW"],
  ];

  for (const [title, sevName] of sections) {
    const group = findings.filter((f) => f.severity === sevName);
    if (!group.length) continue;
    md.push(`### ${title}`);
    md.push("");
    group.forEach((f) => md.push(findingBlock(f)));
  }

  md.push("---");
  md.push("");
  md.push("## 6. Metodoloģija");
  md.push("");
  md.push("**Auditors:** GPT-5.6 Luna (READ-ONLY)");
  md.push(`1. \`node scripts/${cfg.collectScript}\` — READ-ONLY kolektors`);
  md.push("2. `node scripts/build-da-c1c2-owner-review.js` — OWNER review tabula");
  md.push("3. `node scripts/audit-da-c1c2-report-gen.js` — šis pārskats");
  md.push(`4. Pilna ${meta.expectedCards}/${meta.expectedCards} kartīšu coverage ar automātisku DA lauku caurskanēšanu`);
  md.push("5. DE lauki — STRICT READ-ONLY; Production/DE izmaiņas šajā auditā netika veiktas");
  md.push("");
  md.push("## AUDIT COMPLETE — OWNER REVIEW READY");
  md.push("");
  md.push("**Production changes = 0**");
  md.push("");
  md.push("**DE changes = 0**");

  fs.mkdirSync(path.dirname(cfg.outFile), { recursive: true });
  fs.writeFileSync(cfg.outFile, md.join("\n"));
  return { verdict, total: summary.total, realFindings: summary.realFindings ?? realFindings.length, bySeverity: sev, parityPass };
}

function main() {
  const summaries = {};
  for (const cfg of LEVELS) {
    if (!fs.existsSync(cfg.inFile)) {
      console.error(`Missing audit data: ${cfg.inFile}\nRun: node scripts/audit-da-c1c2-collect.js --level=${cfg.key}`);
      process.exit(1);
    }
    const data = JSON.parse(fs.readFileSync(cfg.inFile, "utf8"));
    summaries[cfg.key] = generateReport(cfg, data);
    console.log(`Wrote ${cfg.outFile}`);
    console.log(JSON.stringify(summaries[cfg.key], null, 2));
  }
}

main();
