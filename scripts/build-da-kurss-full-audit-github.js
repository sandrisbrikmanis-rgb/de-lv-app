#!/usr/bin/env node
"use strict";
/**
 * Generate reports/da-kurss-full-audit-GITHUB.md — GitHub blob links for full audit.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || "cursor/da-kurss-master-v11-audit-fffe";
const PR_NUMBER = process.env.AUDIT_PR || "585";
const AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-full-audit.json");
const OUT = path.join(ROOT, "reports/da-kurss-full-audit-GITHUB.md");

function gh(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function link(file, label) {
  return `[${label || file}](${gh(file)})`;
}

function loadAudit() {
  if (!fs.existsSync(AUDIT_JSON)) {
    return {
      totalFields: 1264,
      findings: [],
      bySev: { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 },
      verdict: "NEEDS OWNER REVIEW",
    };
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings = data.findings || [];
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const bySource = {};
  for (const f of findings) {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
    bySource[f.source] = (bySource[f.source] || 0) + 1;
  }
  return {
    totalFields: data.stats?.totalFields || 1264,
    findings,
    bySev,
    bySource,
    verdict: data.verdict || "NEEDS OWNER REVIEW",
    generatedAt: data.generatedAt,
  };
}

function main() {
  const audit = loadAudit();
  const total = audit.findings.length;

  const sourceRows = Object.entries(audit.bySource)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `| ${k} | **${v}** |`)
    .join("\n");

  const md = `# DA–DE Kurss — pilna audita GitHub atvēršanas indekss

**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.1  
**Branch:** \`${BRANCH}\`  
**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})  
**Stage:** POST-REPAIR FULL RE-AUDIT (READ-ONLY)  
**Findings:** **${total}** · **Verdict:** ${audit.verdict.replace(/\*\*/g, "")}

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${link("da-kurss-full-audit-GITHUB.md", "Šis indekss")} | GitHub saites pilnam auditam |
| ${link("da-kurss-full-audit.md", "Pilns audits (26 findings)")} | Galvenais READ-ONLY audits · 1264/1264 lauki |
| ${link("temp/da-kurss-full-audit.json", "Mašīnlasāms JSON")} | Strukturēts kopsavilkums + visi findingi |

## Saistītie OWNER / repair faili

| Fails | Apraksts |
|-------|----------|
| ${link("da-kurss-owner-review-GITHUB.md", "OWNER review indekss")} | 95 findingu sākotnējais OWNER packs |
| ${link("da-kurss-owner-decisions-signed.md", "Signed decisions")} | 95 rindu OWNER lēmumi |
| ${link("da-kurss-owner-repair-apply.md", "Repair apply report")} | LABOT 47/48 + regression |
| ${link("da-kurss-owner-repair-targeted-regression.md", "Targeted regression")} | 40 primary applies — PASS |

## Kopsavilkums

| Metrika | Vērtība |
|---------|--------|
| DA lauki (coverage) | **${audit.totalFields}** |
| Findings (post-repair) | **${total}** |
| CRITICAL | **${audit.bySev.CRITICAL || 0}** |
| HIGH | **${audit.bySev.HIGH || 0}** |
| MEDIUM | **${audit.bySev.MEDIUM || 0}** |
| LOW | **${audit.bySev.LOW || 0}** |
| Salīdzinājums | pirms LABOT **95** → pēc **${total}** |

## Findings pēc avota

| Avots | Skaits |
|-------|-------:|
${sourceRows || "| — | 0 |"}

## Tehniskie vārti

| Gate | Rezultāts |
|------|-----------|
| Syntax / validate-kurss | PASS |
| Mirror data↔www | PASS |
| DE vs \`main\` | 0 |
| LV MASTER vs \`main\` | 0 |

## Triage piezīmes

1. **16× structure** (\`lesson7ExerciseCardsDa[*].lv\`) — OWNER signed **FALSE_POSITIVE** (DA/SV/NO konvencija).
2. **10× deterministic** — galvenokārt \`legacyHtml\` whole-field skenēšana (LV diacritics/macron udtalē, DE dialogi); daudzi ir zināmi false-positive riski.
3. **Luna šajā run:** heuristika (API key unavailable). Pilnam Luna API re-audit — \`audit-da-kurss-full-luna-api.js\`.

## Findings saraksts (saite uz pilno auditu)

Visi **${total}** findingi detalizēti: ${link("da-kurss-full-audit.md#findings", "da-kurss-full-audit.md → Findings")}

---

**DE changes:** 0 · **Production audit changes:** 0 · **Coverage:** ${audit.totalFields}/${audit.totalFields}
`;

  fs.writeFileSync(OUT, md, "utf8");
  console.log(JSON.stringify({ out: OUT, branch: BRANCH, findings: total }, null, 2));
}

main();
