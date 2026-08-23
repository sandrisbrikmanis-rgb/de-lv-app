#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const MERGED = path.join(ROOT, "reports/temp/et-verbs-merged-audit.json");
const REPORT = path.join(ROOT, "reports/et-verbs-full-audit.md");

function truncate(s, n = 100) {
  const t = String(s || "");
  return t.length > n ? `${t.slice(0, n)}…` : t;
}

function main() {
  const data = JSON.parse(fs.readFileSync(MERGED, "utf8"));
  const { meta, structural, bySeverity, findings } = data;
  const realCount =
    (bySeverity.CRITICAL || 0) + (bySeverity.HIGH || 0) + (bySeverity.MEDIUM || 0) + (bySeverity.LOW || 0);

  const verdict = !meta.completenessPass
    ? "**ET–DE VERBS FULL AUDIT — INCOMPLETE**"
    : realCount > 0
      ? "**ET–DE VERBS FULL AUDIT — NEEDS REPAIR**"
      : "**ET–DE VERBS FULL AUDIT — PASS**";

  const md = [
    "# ET–DE Darbības vārdi / Verbs pilns valodas kvalitātes audits",
    "",
    `**Datums:** ${meta.date || new Date().toISOString().slice(0, 10)}`,
    "**Auditors:** GPT-5.6 Luna (READ-ONLY)",
    "**Scope:** 100% production `data/et/verbs.js`",
    "**DE etalons:** `data/verbs.js` (STRICT READ-ONLY)",
    "**Production changes:** 0",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| verbs total | **${meta.verbsTotal}** |`,
    `| verbs audited | **${meta.lunaVerbsAudited}/${meta.verbsTotal}** |`,
    `| verb forms total | **${meta.verbFormsTotal}** |`,
    `| verb forms audited | **${meta.lunaFormsAudited}/${meta.verbFormsTotal}** |`,
    `| unprocessed verbs | **${meta.unprocessedVerbs}** |`,
    `| unprocessed forms | **${meta.unprocessedForms}** |`,
    `| Luna batches | **${data.lunaBatchCount}/${Math.ceil(meta.verbsTotal / meta.batchSize)}** |`,
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
    `| structure (${meta.verbsTotal} verbs) | **${structural.countPass ? "PASS" : "FAIL"}** |`,
    `| mirror | **${structural.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| DE integrity | **${structural.deIntegrityPass ? "PASS" : "FAIL"}** |`,
    `| completeness | **${meta.completenessPass ? "PASS" : "FAIL"}** |`,
    "",
    "### Verdict",
    "",
    verdict,
    "",
    "## Audita sadalījums",
    "",
    "Lingvistisko auditu veikts pa **50 verb entries** (visas formas katrā verb kontekstā).",
    "",
  ];

  for (const sev of ["CRITICAL", "HIGH", "MEDIUM", "LOW", "NEEDS_SOURCE_REVIEW"]) {
    const group = findings.filter((f) => f.severity === sev);
    if (!group.length) continue;
    md.push(`### ${sev} (${group.length})`, "");
    for (const f of group.slice(0, 25)) {
      md.push(`#### ${f.id} — \`${f.cardId}\` / \`${f.field}\``, "");
      md.push(`- **DE_CURRENT:** ${truncate(f.deContext)}`);
      md.push(`- **ET_CURRENT:** ${truncate(f.currentEt)}`);
      md.push(`- **PROPOSED_ET:** ${truncate(f.proposedEt)}`);
      md.push(`- **Problem:** ${f.problem}`);
      md.push(`- **Reason:** ${f.rationale}`);
      md.push(`- **Statuss:** PENDING`);
      md.push(`- **OWNER_DECISION:**`);
      md.push("");
    }
    if (group.length > 25) md.push(`_… un vēl ${group.length - 25} ${sev} findings._`, "");
  }

  md.push("## Nākamais sols", "", "OWNER review → COPY-ONLY apply → targeted regression → closure.", "");

  fs.writeFileSync(REPORT, md.join("\n"));
  console.log(JSON.stringify({ report: REPORT, verdict: verdict.replace(/\*\*/g, ""), findings: findings.length }, null, 2));
}

main();
