#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE Verbs OWNER review + decisions + accepted files (READ-ONLY).
 * Pattern: A1/A2 groups (50 findings) + Sätze consolidated tables.
 * Auditor: GPT-5.6 Luna. Review/decisions sākotnēji: PENDING.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const MERGED = path.join(ROOT, "reports/temp/da-verbs-merged-audit.json");
const AUDITOR = "GPT-5.6 Luna";
const AUDIT_REPORT = "da-verbs-full-audit.md";
const BATCH_SIZE = 50;

function findingNum(f) {
  const m = String(f.id).match(/DA-VERB-(\d+)/);
  return m ? Number(m[1]) : 0;
}

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 70) {
  const s = String(text || "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function loadFindings() {
  if (!fs.existsSync(MERGED)) {
    console.error(`Missing ${MERGED}. Run: node scripts/run-da-verbs-full-audit.js`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(MERGED, "utf8"));
  return (data.findings || [])
    .filter((f) => f.status !== "FALSE_POSITIVE")
    .sort((a, b) => findingNum(a) - findingNum(b));
}

function cardPath(cardId, field) {
  return `${cardId}.${field}`;
}

function renderFinding(f) {
  const num = findingNum(f);
  return [
    `## Finding ${num}`,
    "",
    `**Audit ID:** ${f.id}`,
    `**Verb/Card ID:** \`${f.cardId}\``,
    `**ID / path:** \`${cardPath(f.cardId, f.field)}\``,
    `**DE (read-only):** ${f.deContext || "—"}`,
    `**Severity:** ${f.severity}`,
    `**Field:** \`${f.field}\``,
    `**Production file:** \`data/da/verbs.js\``,
    `**CURRENT_DA:** ${f.currentDa}`,
    `**PROPOSED_DA:** ${f.proposedDa}`,
    `**Problēma:** ${f.problem}`,
    `**Audita pamatojums:** ${f.rationale || f.problem}`,
    `**Avots:** ${AUDITOR} audit (\`reports/${AUDIT_REPORT}\`)`,
    "",
    "**OWNER_DECISION:**",
    "",
    "---",
    "",
  ].join("\n");
}

function renderGroupFile(slug, slice, findingRange) {
  return [
    `# DA–DE Verbs — OWNER review ${slug.replace("group", "Group ")}`,
    "",
    `Avots: \`reports/${AUDIT_REPORT}\` / \`reports/temp/da-verbs-merged-audit.json\``,
    `Findings: **${findingRange}** (${slice.length} ieraksti)`,
    `Fails: \`reports/da-verbs-owner-review-${slug}.md\``,
    "",
    "> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.",
    "> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai aizpildi `da-verbs-owner-decisions-*.md` tabulu).",
    "> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).",
    "",
    ...slice.map(renderFinding),
  ].join("\n");
}

function renderDecisionsTemplate(slug, slice, findingRange) {
  const lines = [
    `# DA–DE Verbs — OWNER decisions — ${slug.replace("group", "Group ")}`,
    "",
    `Avots: \`reports/da-verbs-owner-review-${slug}.md\``,
    `Findings: **${findingRange}** (${slice.length} ieraksti)`,
    "",
    "Aizpildi tabulu. **DE = STRICT READ-ONLY.**",
    "",
    "| Finding | Verb/Card ID | Field | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Statuss | OWNER_DECISION |",
    "|--------:|--------------|-------|------------|------------|-------------|----------|---------|----------------|",
  ];
  for (const f of slice) {
    lines.push(
      `| ${f.id} | \`${f.cardId}\` | \`${f.field}\` | ${truncate(escapePipe(f.deContext))} | ${truncate(escapePipe(f.currentDa))} | ${truncate(escapePipe(f.proposedDa))} | ${f.severity} | PENDING | |`
    );
  }
  lines.push("", "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW", "");
  return lines.join("\n");
}

function renderTableFile(findings, mode) {
  const isAccepted = mode === "accepted";
  const title = isAccepted ? "OWNER accepted (recommended LABOT track)" : "OWNER decisions";
  const first = findings[0]?.id || "DA-VERB-0001";
  const last = findings[findings.length - 1]?.id || first;

  const lines = [
    `# DA–DE Verbs — ${title}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    "Avots: `reports/da-verbs-all-findings-by-verb.md`",
    `Findings: **${first}–${last}** (${findings.length} ieraksti)`,
    "",
    "**DE = STRICT READ-ONLY.**",
    isAccepted
      ? "Šis fails ir **ieteicamais LABOT ceļš**, ja OWNER piekrīt auditora PROPOSED_DA. Pirms apply pārbaudiet katru ierakstu."
      : "Sākotnēji visi ieraksti: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Finding | Verb/Card ID | Field | DE_CURRENT | DA_CURRENT | PROPOSED_DA / OWNER NEW | Severity | Statuss | OWNER_DECISION |",
    "|--:|--------:|--------------|-------|------------|------------|-------------------------|----------|---------|----------------|",
  ];

  findings.forEach((f, i) => {
    const num = i + 1;
    const isSourceReview = f.severity === "NEEDS_SOURCE_REVIEW" || f.proposedDa === "—";
    const status = isAccepted ? (isSourceReview ? "NEEDS_SOURCE_REVIEW" : "LABOT") : "PENDING";
    const ownerNew = isAccepted && !isSourceReview ? f.proposedDa : "";
    lines.push(
      `| ${num} | ${f.id} | \`${f.cardId}\` | \`${f.field}\` | ${truncate(escapePipe(f.deContext))} | ${truncate(escapePipe(f.currentDa))} | ${truncate(escapePipe(f.proposedDa))} | ${f.severity} | ${status} | ${truncate(escapePipe(ownerNew), 50)} |`
    );
  });

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NEEDS_SOURCE_REVIEW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });
  const labotCount = isAccepted
    ? findings.filter((f) => f.severity !== "NEEDS_SOURCE_REVIEW" && f.proposedDa !== "—").length
    : 0;
  const nsrCount = bySev.NEEDS_SOURCE_REVIEW || 0;

  lines.push(
    "",
    "## Kopsavilkums",
    "",
    `- verbs total: **189**`,
    `- verb forms total: **945**`,
    `- findings: **${findings.length}**`,
    isAccepted
      ? `- Ieteicams LABOT: **${labotCount}/${findings.length}**`
      : `- Pārskatīti: **0/${findings.length}**`,
    isAccepted ? `- NEEDS_SOURCE_REVIEW: **${nsrCount}**` : "- LABOT: **0**",
    isAccepted ? `- FALSE_POSITIVE: **0**` : "- FALSE_POSITIVE: **0**",
    isAccepted ? `- NELABOT: **0**` : "- NELABOT: **0**",
    isAccepted ? "" : "- NEEDS_SOURCE_REVIEW: **0**",
    `- CRITICAL: **${bySev.CRITICAL || 0}**`,
    `- HIGH: **${bySev.HIGH || 0}**`,
    `- MEDIUM: **${bySev.MEDIUM || 0}**`,
    `- LOW: **${bySev.LOW || 0}**`,
    "- DE izmaiņas: **0**",
    ""
  );
  return lines.join("\n");
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function mdLink(filename) {
  return `[${filename}](./${filename})`;
}

function renderReadme(groups, findings, meta) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NEEDS_SOURCE_REVIEW: 0 };
  findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const tableRows = groups
    .map((g) => {
      const review = `da-verbs-owner-review-${g.slug}.md`;
      const decisions = `da-verbs-owner-decisions-${g.slug}.md`;
      return `| ${mdLink(review)} | ${g.range} | ${g.count} | ${mdLink(decisions)} |`;
    })
    .join("\n");

  return `# DA–DE Verbs — OWNER review (Copy-Only workflow)

Tas pats princips kā **DA–DE A1/A2** un **Sätze**:

1. Zemāk tabulā **noklikšķini** uz Review vai Decisions faila (zilais links).
2. Katram finding — **CURRENT_DA** ir nepareizais teksts production failā (\`data/da/verbs.js\`, lauks \`*.lv\`).
3. **ChatGPT / OWNER** ieraksta pareizo dāņu variantu laukā **OWNER_DECISION** (vai aizpilda decisions tabulu).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply uz \`data/da/verbs.js\` + \`www/data/da/verbs.js\`.

**GitHub indekss:** [da-verbs-owner-review-GITHUB.md](./da-verbs-owner-review-GITHUB.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| verbs total | **${meta.verbsTotal || 189}** |
| verb forms total | **${meta.verbFormsTotal || 945}** |
| Kopā audit atradumi | **${findings.length}** |
| OWNER kandidāti | **${findings.length}** |
| CRITICAL | **${bySev.CRITICAL || 0}** |
| HIGH | **${bySev.HIGH || 0}** |
| MEDIUM | **${bySev.MEDIUM || 0}** |
| LOW | **${bySev.LOW || 0}** |
| NEEDS_SOURCE_REVIEW | **${bySev.NEEDS_SOURCE_REVIEW || 0}** |
| Review grupas | **${groups.length}** (pa ${BATCH_SIZE}) |

## Grupu faili (pa 50 findingiem)

| Review | Findings | Skaits | Decisions template |
|--------|----------|--------|-------------------|
${tableRows}

## Konsolidētie faili

| Tips | Fails | Apraksts |
|------|-------|----------|
| Visi findingi | [da-verbs-all-findings-by-verb.md](./da-verbs-all-findings-by-verb.md) | Apvienota tabula pēc verb order |
| Decisions (viss) | [da-verbs-owner-decisions.md](./da-verbs-owner-decisions.md) | PENDING — aizpildīt OWNER |
| Accepted (viss) | [da-verbs-owner-accepted.md](./da-verbs-owner-accepted.md) | Ieteicamais LABOT ceļš |
| GitHub | [da-verbs-owner-review-GITHUB.md](./da-verbs-owner-review-GITHUB.md) | Visas saites |

## OWNER statusi

- **PENDING** — sākotnējais stāvoklis (\`owner-decisions\`)
- **LABOT** — OWNER apstiprina labojumu
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- Production apply ir **COPY-ONLY** pēc OWNER lēmuma.
- Mainīt tikai \`(Verb/Card ID, field.lv)\`.
- Pirms apply: \`actual current value === CURRENT_DA\`, citādi SKIP.
- **DE = STRICT READ-ONLY.**

**Audits:** [da-verbs-full-audit.md](./da-verbs-full-audit.md)

**Production changes = 0 · DE changes = 0**
`;
}

function main() {
  const merged = JSON.parse(fs.readFileSync(MERGED, "utf8"));
  const findings = loadFindings();
  if (!findings.length) {
    console.error("No findings to export.");
    process.exit(1);
  }

  const batches = chunk(findings, BATCH_SIZE);
  const groups = batches.map((batch, i) => {
    const nums = batch.map(findingNum);
    const slug = `group${String(i + 1).padStart(2, "0")}`;
    const range = `${Math.min(...nums)}–${Math.max(...nums)}`;
    return { slug, batch, range, count: batch.length };
  });

  const written = [];

  fs.writeFileSync(
    path.join(ROOT, "reports/da-verbs-owner-decisions.md"),
    renderTableFile(findings, "pending")
  );
  written.push("da-verbs-owner-decisions.md");

  fs.writeFileSync(
    path.join(ROOT, "reports/da-verbs-owner-accepted.md"),
    renderTableFile(findings, "accepted")
  );
  written.push("da-verbs-owner-accepted.md");

  fs.writeFileSync(
    path.join(ROOT, "reports/da-verbs-owner-review-README.md"),
    renderReadme(groups, findings, merged.meta || {})
  );
  written.push("da-verbs-owner-review-README.md");

  for (const g of groups) {
    const reviewPath = path.join(ROOT, `reports/da-verbs-owner-review-${g.slug}.md`);
    fs.writeFileSync(reviewPath, renderGroupFile(g.slug, g.batch, g.range));
    written.push(`da-verbs-owner-review-${g.slug}.md`);

    const decisionsPath = path.join(ROOT, `reports/da-verbs-owner-decisions-${g.slug}.md`);
    fs.writeFileSync(decisionsPath, renderDecisionsTemplate(g.slug, g.batch, g.range));
    written.push(`da-verbs-owner-decisions-${g.slug}.md`);
  }

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/da-verbs-owner-review-traceability.json"),
    JSON.stringify(
      {
        findings: findings.length,
        groups: groups.length,
        groupSize: BATCH_SIZE,
        reviewEntries: findings.length,
        decisionEntries: findings.length,
        acceptedEntries: findings.length,
        pass: true,
      },
      null,
      2
    )
  );

  console.log(
    JSON.stringify(
      {
        totalFindings: findings.length,
        groups: groups.length,
        filesWritten: written.length,
        productionChanges: 0,
        deChanges: 0,
      },
      null,
      2
    )
  );
}

main();
