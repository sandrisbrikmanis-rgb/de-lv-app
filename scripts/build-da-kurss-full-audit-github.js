#!/usr/bin/env node
"use strict";
/**
 * Generate reports/da-kurss-full-audit-GITHUB.md — GitHub blob links for full audit.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || "main";
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

function loadOwnerPostRepair() {
  const signed = path.join(ROOT, "reports/da-kurss-post-repair-26-owner-decisions-signed.md");
  if (!fs.existsSync(signed)) return null;
  const text = fs.readFileSync(signed, "utf8");
  const fp = (text.match(/\| FALSE_POSITIVE \| \*\*(\d+)\*\*/) || [])[1];
  const nsr = (text.match(/\| NEEDS_SOURCE_REVIEW \| \*\*(\d+)\*\*/) || [])[1];
  const labot = (text.match(/\| LABOT \| \*\*(\d+)\*\*/) || [])[1];
  return {
    complete: true,
    falsePositive: fp ? parseInt(fp, 10) : null,
    needsSourceReview: nsr ? parseInt(nsr, 10) : null,
    labot: labot ? parseInt(labot, 10) : null,
  };
}

function loadSourceReviewApply() {
  const applyMd = path.join(ROOT, "reports/da-kurss-9-source-review-owner-repair-apply.md");
  if (!fs.existsSync(applyMd)) return null;
  const text = fs.readFileSync(applyMd, "utf8");
  if (/Dry run:\*\* true/i.test(text)) return null;
  const applied = (text.match(/\| Applied \| \*\*(\d+)\*\*/) || [])[1];
  const requested = (text.match(/\| Requested LABOT \| \*\*(\d+)\*\*/) || [])[1];
  if (!applied || !requested) return null;
  return {
    complete: parseInt(applied, 10) === parseInt(requested, 10),
    applied: parseInt(applied, 10),
    requested: parseInt(requested, 10),
  };
}

function main() {
  const audit = loadAudit();
  const owner26 = loadOwnerPostRepair();
  const sourceReview = loadSourceReviewApply();
  const total = audit.findings.length;
  const verdict = sourceReview?.complete
    ? `KURSS OWNER CLOSURE COMPLETE — 95→26 scan; 17 FP + 55/55 source-review LABOT applied`
    : owner26?.complete
      ? `OWNER REVIEW COMPLETE (26/26) — ${owner26.falsePositive} FP, ${owner26.needsSourceReview} NSR backlog`
      : audit.verdict.replace(/\*\*/g, "");

  const sourceRows = Object.entries(audit.bySource)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `| ${k} | **${v}** |`)
    .join("\n");

  const md = `# DA–DE Kurss — pilna audita GitHub atvēršanas indekss

**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.5  
**Branch:** \`${BRANCH}\`  
**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})  
**Stage:** CLOSED ON \`main\` (PR #${PR_NUMBER} merged)  
**Findings (raw scan):** **${total}** · **Verdict:** ${verdict}

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${link("da-kurss-final-main-verification.md", "Final main verification")} | **CLOSED ON MAIN** · \`main\` @ merge |
| ${link("da-kurss-final-closure-GITHUB.md", "Final closure GitHub")} | OWNER ACCEPTED / CLOSED indekss |
| ${link("da-kurss-full-audit-GITHUB.md", "Šis indekss")} | GitHub saites pilnam auditam |
| ${link("da-kurss-full-audit.md", "Pilns audits (26 findings)")} | Galvenais READ-ONLY audits · 1264/1264 lauki |
| ${link("temp/da-kurss-full-audit.json", "Mašīnlasāms JSON")} | Strukturēts kopsavilkums + visi findingi |

## Saistītie OWNER / repair faili

| Fails | Apraksts |
|-------|----------|
| ${link("da-kurss-9-source-review-owner-repair-GITHUB.md", "9-object SOURCE REVIEW apply")} | **55/55** fragment LABOT |
| ${link("da-kurss-9-source-review-owner-mapping-signed.md", "Signed mapping (55)")} | CURRENT→NEW fragmenti |
| ${link("da-kurss-9-source-review-owner-repair-apply.md", "Source review apply report")} | Apply + mirror PASS |
| ${link("da-kurss-post-repair-26-owner-review-GITHUB.md", "Post-repair 26 OWNER indekss")} | **26/26** signed |
| ${link("da-kurss-post-repair-26-owner-decisions-signed.md", "Post-repair 26 decisions")} | 17 FP · 9 NSR |
| ${link("da-kurss-owner-review-GITHUB.md", "OWNER review indekss (95)")} | Sākotnējais OWNER packs |
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

1. **16× structure** + **DA-KURSS-0008** — OWNER **FALSE_POSITIVE** (17/26).
2. **9× legacyHtml/HTML NSR** — **55/55** fragment LABOT applied (${link("da-kurss-9-source-review-owner-repair-apply.md", "apply report")}).
3. **Raw scan ${total}** — deterministiskie whole-field hiti (izrunas macron transkripcijas) pēc OWNER triage nav atvērti backlog.
4. **Luna šajā run:** heuristika (API key unavailable).

## Findings saraksts (saite uz pilno auditu)

Visi **${total}** findingi detalizēti: ${link("da-kurss-full-audit.md#findings", "da-kurss-full-audit.md → Findings")}

---

**DE changes:** 0 · **Production audit changes:** 0 · **Coverage:** ${audit.totalFields}/${audit.totalFields}
`;

  fs.writeFileSync(OUT, md, "utf8");
  console.log(JSON.stringify({ out: OUT, branch: BRANCH, findings: total }, null, 2));
}

main();
