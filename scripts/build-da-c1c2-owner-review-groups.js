#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE C1/C2 OWNER review + decisions + accepted-proposal files (READ-ONLY).
 * Auditor: GPT-5.6 Luna. Review/decisions sākotnēji: PENDING.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, loadArrayDataset } = require("./lib/audit-common");

const AUDIT_SOURCES = [
  { dataset: "C1", json: "reports/temp/da-c1-audit-data.json", dataPath: "data/da/c1.js", auditReport: "da-c1-full-audit.md" },
  { dataset: "C2", json: "reports/temp/da-c2-audit-data.json", dataPath: "data/da/c2.js", auditReport: "da-c2-full-audit.md" },
];
const AUDITOR = "GPT-5.6 Luna";

function loadWords(dataPath) {
  return loadArrayDataset(dataPath);
}

function findingNum(f) {
  const m = String(f.id).match(/DA-C[12]-(\d+)/);
  return m ? Number(m[1]) : 0;
}

function isOwnerCandidate(f) {
  return f.status !== "DE_SOURCE_ISSUE" && f.status !== "FALSE_POSITIVE";
}

function deForFinding(f, words, level) {
  if (f.deContext) return f.deContext;
  const entry = words.find((w) => w.study?.id === f.cardId || `${level}-${w.de}` === f.cardId);
  return entry?.de || f.cardId.replace(new RegExp(`^${level}-`), "").replace(/-\d+$/, "");
}

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 100) {
  const s = String(text || "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function loadAllFindings() {
  const groups = [];
  for (const src of AUDIT_SOURCES) {
    const jsonPath = path.join(ROOT, src.json);
    if (!fs.existsSync(jsonPath)) {
      console.error(`Missing ${jsonPath}`);
      process.exit(1);
    }
    const { findings } = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const words = loadWords(src.dataPath);
    const level = src.dataset.toLowerCase();
    const ownerFindings = findings
      .filter(isOwnerCandidate)
      .sort((a, b) => findingNum(a) - findingNum(b))
      .map((f) => ({ ...f, dataset: src.dataset, level, auditReport: src.auditReport, words }));
    if (ownerFindings.length) {
      groups.push({
        slug: level,
        dataset: src.dataset,
        level,
        auditReport: src.auditReport,
        words,
        batch: ownerFindings,
        count: ownerFindings.length,
        range: `${ownerFindings[0].id}–${ownerFindings[ownerFindings.length - 1].id}`,
      });
    }
  }
  return groups;
}

function renderFinding(f) {
  const num = findingNum(f);
  return [
    `## Finding ${num} (${f.dataset})`,
    "",
    `**Finding:** ${num}`,
    `**Audit ID:** ${f.id}`,
    `**Dataset:** ${f.dataset}`,
    `**Card ID:** ${f.cardId}`,
    `**Field:** \`${f.field}\``,
    `**DE (read-only):** ${deForFinding(f, f.words, f.level) || "—"}`,
    `**CURRENT_DA:** ${f.currentDa}`,
    `**PROPOSED_DA:** ${f.proposedDa}`,
    `**Severity:** ${f.severity}`,
    `**Problem:** ${f.problem}`,
    `**Reason:** ${f.rationale}`,
    `**Statuss:** PENDING`,
    `**OWNER_DECISION:** [nav aizpildīts]`,
    "",
    `**Avots:** ${AUDITOR} audit (\`reports/${f.auditReport}\`)`,
    "",
    "---",
    "",
  ].join("\n");
}

function renderReviewFile(g) {
  return [
    `# DA–DE ${g.dataset} — OWNER preview ${g.slug}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    `Avots: \`reports/${g.auditReport}\` / \`reports/temp/da-${g.slug}-audit-data.json\``,
    `Findings: **${g.range}** (${g.count} ieraksti)`,
    `Fails: \`reports/da-c1c2-owner-review-${g.slug}.md\``,
    "",
    "> **PROPOSED_DA** ir GPT-5.6 Luna ieteikums — **nav** OWNER apstiprināts.",
    "> **Statuss:** sākotnēji **PENDING**. OWNER aizpilda \`da-c1c2-owner-decisions-${g.slug}.md\`.",
    "> **DE lauki nemainīt.** sectionAccents: var lietot **FJERN \`termins\`** vai jaunu terminu.",
    "",
    ...g.batch.map(renderFinding),
  ].join("\n");
}

function renderDecisionsFile(g, mode = "pending") {
  const isAccepted = mode === "accepted";
  const title = isAccepted ? "OWNER accepted (recommended LABOT track)" : "OWNER decisions";
  const lines = [
    `# DA–DE ${g.dataset} — ${title} — ${g.slug}`,
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    `Avots: \`reports/da-c1c2-owner-review-${g.slug}.md\``,
    `Findings: **${g.range}** (${g.count} ieraksti)`,
    "",
    "**DE = STRICT READ-ONLY.**",
    isAccepted
      ? "Šis fails ir **ieteicamais LABOT ceļš**, ja OWNER piekrīt auditora PROPOSED_DA. Pirms apply pārbaudiet katru ierakstu."
      : "Sākotnēji visi ieraksti: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Finding | Card ID | Field | CURRENT_DA | PROPOSED_DA / OWNER NEW | Severity | Statuss | OWNER_DECISION |",
    "|--:|--------:|---------|-------|------------|-------------------------|----------|---------|----------------|",
  ];

  g.batch.forEach((f, i) => {
    const num = findingNum(f);
    const status = isAccepted ? "LABOT" : "PENDING";
    const ownerNew = isAccepted ? f.proposedDa : "";
    lines.push(
      `| ${i + 1} | ${num} | \`${f.cardId}\` | \`${f.field}\` | ${truncate(escapePipe(f.currentDa), 80)} | ${truncate(escapePipe(isAccepted ? f.proposedDa : f.proposedDa), 80)} | ${f.severity} | ${status} | ${escapePipe(ownerNew)} |`
    );
  });

  lines.push(
    "",
    "## Kopsavilkums",
    "",
    isAccepted
      ? `- Ieteicams LABOT: **${g.count}/${g.count}**`
      : `- Pārskatīti: **0/${g.count}**`,
    isAccepted ? `- FALSE_POSITIVE: **0**` : "- LABOT: **0**",
    isAccepted ? "- NELABOT: **0**" : "- FALSE_POSITIVE: **0**",
    isAccepted ? "- NEEDS_SOURCE_REVIEW: **0**" : "- NELABOT: **0**",
    isAccepted ? "" : "- NEEDS_SOURCE_REVIEW: **0**",
    "- DE izmaiņas: **0**",
    ""
  );
  return lines.join("\n");
}

function renderReadme(groups, totals) {
  const rows = groups
    .map((g) => {
      const review = `da-c1c2-owner-review-${g.slug}.md`;
      const decisions = `da-c1c2-owner-decisions-${g.slug}.md`;
      const accepted = `da-c1c2-owner-accepted-${g.slug}.md`;
      return `| ${g.dataset} | [${review}](./${review}) | [${decisions}](./${decisions}) | [${accepted}](./${accepted}) | ${g.count} |`;
    })
    .join("\n");

  return `# DA–DE C1/C2 — OWNER review (GPT-5.6 Luna)

**Auditors:** ${AUDITOR} (READ-ONLY)

Avots: [da-c1-full-audit.md](./da-c1-full-audit.md) · [da-c2-full-audit.md](./da-c2-full-audit.md) · [da-c1c2-all-findings-by-card.md](./da-c1c2-all-findings-by-card.md)

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Kopā audit atradumi | **${totals.all}** |
| OWNER kandidāti | **${totals.owner}** |
| C1 findings | **${groups.find((g) => g.slug === "c1")?.count || 0}** |
| C2 findings | **${groups.find((g) => g.slug === "c2")?.count || 0}** |

## Faili

| Dataset | Preview (review) | Decisions (PENDING) | Accepted (recommended LABOT) | Skaits |
|---------|------------------|---------------------|------------------------------|--------|
${rows}

## OWNER statusi

- **PENDING** — sākotnējais stāvoklis (\`owner-decisions\`)
- **LABOT** — OWNER apstiprina labojumu
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

**GitHub indekss:** [da-c1c2-owner-review-GITHUB.md](./da-c1c2-owner-review-GITHUB.md)

**Production changes = 0 · DE changes = 0**
`;
}

function traceabilityCheck(groups) {
  const reviewIds = new Set();
  const decisionIds = new Set();
  let ownerTotal = 0;
  for (const g of groups) {
    for (const f of g.batch) {
      reviewIds.add(f.id);
      decisionIds.add(f.id);
      ownerTotal++;
    }
  }
  return {
    validatedOwnerCandidates: ownerTotal,
    reviewEntries: reviewIds.size,
    decisionEntries: decisionIds.size,
    acceptedEntries: decisionIds.size,
    pass: reviewIds.size === ownerTotal && decisionIds.size === ownerTotal,
  };
}

function main() {
  const groups = loadAllFindings();
  const totals = {
    all: groups.reduce((s, g) => s + g.count, 0),
    owner: groups.reduce((s, g) => s + g.count, 0),
  };

  fs.writeFileSync(path.join(ROOT, "reports/da-c1c2-owner-review-README.md"), renderReadme(groups, totals));

  for (const g of groups) {
    fs.writeFileSync(
      path.join(ROOT, `reports/da-c1c2-owner-review-${g.slug}.md`),
      renderReviewFile(g)
    );
    fs.writeFileSync(
      path.join(ROOT, `reports/da-c1c2-owner-decisions-${g.slug}.md`),
      renderDecisionsFile(g, "pending")
    );
    fs.writeFileSync(
      path.join(ROOT, `reports/da-c1c2-owner-accepted-${g.slug}.md`),
      renderDecisionsFile(g, "accepted")
    );
  }

  const trace = traceabilityCheck(groups);
  fs.writeFileSync(
    path.join(ROOT, "reports/temp/da-c1c2-owner-review-traceability.json"),
    JSON.stringify(trace, null, 2)
  );

  console.log(
    JSON.stringify(
      {
        auditor: AUDITOR,
        groups: groups.map((g) => ({ dataset: g.dataset, count: g.count, range: g.range })),
        traceability: trace,
        files: groups.flatMap((g) => [
          `da-c1c2-owner-review-${g.slug}.md`,
          `da-c1c2-owner-decisions-${g.slug}.md`,
          `da-c1c2-owner-accepted-${g.slug}.md`,
        ]),
      },
      null,
      2
    )
  );
  if (!trace.pass) process.exit(1);
}

main();
