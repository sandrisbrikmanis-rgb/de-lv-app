#!/usr/bin/env node
"use strict";
/**
 * Generate DA-DE Sätze full audit report.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const MERGED = path.join(ROOT, "reports/temp/da-sentences-merged-audit.json");
const REPORT = path.join(ROOT, "reports/da-sentences-full-audit.md");

function truncate(s, n = 100) {
  const t = String(s || "");
  return t.length > n ? `${t.slice(0, n)}…` : t;
}

function main() {
  const data = JSON.parse(fs.readFileSync(MERGED, "utf8"));
  const { meta, structural, bySeverity, findings } = data;

  const realCount =
    (bySeverity.CRITICAL || 0) + (bySeverity.HIGH || 0) + (bySeverity.MEDIUM || 0) + (bySeverity.LOW || 0);
  const verdict =
    !meta.completenessPass
      ? "**DA–DE SENTENCES FULL AUDIT — INCOMPLETE**"
      : realCount > 0
        ? "**DA–DE SENTENCES FULL AUDIT — NEEDS REPAIR**"
        : "**DA–DE SENTENCES FULL AUDIT — PASS**";

  const md = [
    "# DA–DE Teikumi / Sätze pilns valodas kvalitātes audits",
    "",
    `**Datums:** ${meta.date || new Date().toISOString().slice(0, 10)}`,
    "**Auditors:** GPT-5.6 Luna (READ-ONLY)",
    "**Scope:** 100% production `data/da/sentences.js` (796 sentences)",
    "**DE etalons:** `data/sentences.js` (STRICT READ-ONLY)",
    "**Production changes:** 0 (audit only)",
    "",
    "---",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| sentences total | **${meta.sentencesTotal}** |`,
    `| sentences audited | **${meta.lunaSentencesAudited}/${meta.sentencesTotal}** |`,
    `| unprocessed sentences | **${meta.unprocessedSentences}** |`,
    `| Luna batches | **${data.lunaBatchCount}/16** |`,
    `| raw candidates | **${meta.rawCandidates}** |`,
    `| validated real findings | **${meta.validatedRealFindings}** |`,
    `| FALSE_POSITIVE | **${meta.falsePositives}** |`,
    `| CRITICAL | **${bySeverity.CRITICAL || 0}** |`,
    `| HIGH | **${bySeverity.HIGH || 0}** |`,
    `| MEDIUM | **${bySeverity.MEDIUM || 0}** |`,
    `| LOW | **${bySeverity.LOW || 0}** |`,
    `| NEEDS_SOURCE_REVIEW | **${bySeverity.NEEDS_SOURCE_REVIEW || 0}** |`,
    `| production changes | **0** |`,
    `| DE changes | **0** |`,
    "",
    "### Strukturālie vārti",
    "",
    "| Pārbaude | Rezultāts |",
    "|----------|-----------|",
    `| syntax | **${structural.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID/order | **${structural.idOrderPass ? "PASS" : "FAIL"}** |`,
    `| structure (796 count) | **${structural.countPass ? "PASS" : "FAIL"}** |`,
    `| mirror data↔www | **${structural.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| DE integrity | **${structural.deIntegrityPass ? "PASS" : "FAIL"}** |`,
    `| completeness (796/796 Luna) | **${meta.completenessPass ? "PASS" : "FAIL"}** |`,
    "",
    "### Verdict",
    "",
    verdict,
    "",
    "## Audita sadalījums",
    "",
    "Lingvistisko auditu veikts pa **50 teikumiem** (16 Luna darba bloki).",
    "",
    "## Findings pēc smaguma",
    "",
  ];

  for (const sev of ["CRITICAL", "HIGH", "MEDIUM", "LOW", "NEEDS_SOURCE_REVIEW"]) {
    const group = findings.filter((f) => f.severity === sev);
    if (!group.length) continue;
    md.push(`### ${sev} (${group.length})`, "");
    for (const f of group.slice(0, 30)) {
      md.push(`#### ${f.id} — \`${f.cardId}\``, "");
      md.push(`- **DE:** ${truncate(f.deContext, 120)}`);
      md.push(`- **DA (CURRENT):** ${truncate(f.currentDa, 120)}`);
      md.push(`- **PROPOSED_DA:** ${truncate(f.proposedDa, 120)}`);
      md.push(`- **Problem:** ${f.problem}`);
      md.push(`- **Reason:** ${f.rationale}`);
      md.push(`- **Statuss:** PENDING`);
      md.push("");
    }
    if (group.length > 30) md.push(`_… un vēl ${group.length - 30} ${sev} findings._`, "");
  }

  md.push("## Nākamais solis", "");
  md.push(
    "Šis audits ir READ-ONLY. Pareizā secība: **100% audits → OWNER review → COPY-ONLY apply → targeted regression → closure**."
  );
  md.push("");
  md.push("OWNER review fails: `reports/da-sentences-all-findings-by-sentence.md`");

  fs.writeFileSync(REPORT, md.join("\n"));
  console.log(JSON.stringify({ report: REPORT, findings: findings.length, verdict: verdict.replace(/\*\*/g, "") }, null, 2));
}

main();
