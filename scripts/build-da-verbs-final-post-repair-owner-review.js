#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE Verbs final post-repair OWNER review + decisions + accepted (READ-ONLY).
 * Pattern: A1/A2 groups + GitHub index with clickable blob links.
 * Source: reports/temp/da-verbs-final-post-repair-audit.json
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-verbs-final-post-repair-audit.json");
const AUDIT_MD = "da-verbs-final-post-repair-audit.md";
const PREFIX = "final-post-repair";
const BATCH_SIZE = 50;
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const DEFAULT_BRANCH = "cursor/da-verbs-final-post-repair-audit-fffe";
const DEFAULT_PR = "563";

const FILES = {
  readme: "da-verbs-owner-review-final-post-repair-README.md",
  github: "da-verbs-owner-review-final-post-repair-GITHUB.md",
  decisions: "da-verbs-owner-decisions-final-post-repair.md",
  accepted: "da-verbs-owner-accepted-final-post-repair.md",
  reviewGroup: (n) => `da-verbs-owner-review-final-post-repair-${n}.md`,
  decisionsGroup: (n) => `da-verbs-owner-decisions-final-post-repair-${n}.md`,
};

function getBranch() {
  if (process.env.GITHUB_BRANCH) return process.env.GITHUB_BRANCH;
  try {
    return execSync("git rev-parse --abbrev-ref HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return DEFAULT_BRANCH;
  }
}

const BRANCH = getBranch();
const AUDIT_PR = process.env.GITHUB_AUDIT_PR || DEFAULT_PR;

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 60) {
  const s = String(text || "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function findingNum(f) {
  const m = String(f.id).match(/DA-VERB-FPR-(\d+)/);
  return m ? Number(m[1]) : 0;
}

function cardPath(cardId, field) {
  const f = String(field || "").replace(/\.lv$/, "");
  return `${cardId}.${f}.lv`;
}

function loadFindings() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}. Run: node scripts/run-da-verbs-final-post-repair-audit.js`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  return (data.findings || [])
    .filter((f) => f.severity !== "FALSE_POSITIVE")
    .sort((a, b) => findingNum(a) - findingNum(b));
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function mdLink(file, label) {
  return `[${label || file}](./${file})`;
}

function ghLink(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function ghMd(file, label) {
  return `[${label || file}](${ghLink(file)})`;
}

function renderReviewHeader(title, slug, count, range) {
  const reviewFile = FILES.reviewGroup(slug);
  return [
    `# DA–DE Verbs — OWNER review ${title}`,
    "",
    `Avots: [${AUDIT_MD}](./${AUDIT_MD})`,
    `Findings: **${range}** (${count} ieraksti)`,
    `Fails: \`reports/${reviewFile}\``,
    "",
    "> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.",
    "> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.",
    "> **DE lauki nemainīt.** Labojam tikai DA (`*.lv` formu laukus).",
    "",
  ].join("\n");
}

function renderFinding(f, num) {
  return [
    `## Finding ${num}`,
    "",
    `**Audit ID:** ${f.id}`,
    `**Verb/Card ID:** \`${f.cardId}\``,
    `**ID / path:** \`${cardPath(f.cardId, f.field)}\``,
    `**DE (read-only):** ${f.deCurrent || "—"}`,
    `**Severity:** ${f.severity}`,
    `**Category:** ${f.category || "—"}`,
    `**Field:** \`${f.field}\``,
    `**Production file:** \`data/da/verbs.js\``,
    `**CURRENT_DA:** ${f.daCurrent || "—"}`,
    `**PROPOSED_DA:** ${f.proposedDa || "—"}`,
    `**Problēma:** ${f.problem || "—"}`,
    `**Audita pamatojums:** ${f.reason || f.problem || "—"}`,
    `**Avots:** GPT-5.6 Luna final post-repair audit (\`reports/${AUDIT_MD}\`)`,
    "",
    "**OWNER_DECISION:**",
    "",
    "---",
    "",
  ].join("\n");
}

function renderDecisionsHeader(title, slug) {
  return [
    `# DA–DE Verbs — OWNER decisions — ${title}`,
    "",
    `Avots: [${FILES.reviewGroup(slug)}](./${FILES.reviewGroup(slug)})`,
    "",
    "Aizpildi tabulu. **DE = STRICT READ-ONLY.**",
    "",
    "| Audit ID | Verb/Card ID | Field | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Statuss | OWNER_DECISION |",
    "|----------|--------------|-------|------------|------------|-------------|----------|---------|----------------|",
  ].join("\n");
}

function renderDecisionRow(f) {
  return `| ${f.id} | \`${f.cardId}\` | \`${f.field}\` | ${truncate(escapePipe(f.deCurrent))} | ${truncate(escapePipe(f.daCurrent))} | ${truncate(escapePipe(f.proposedDa))} | ${f.severity} | PENDING | |`;
}

function renderPendingTable(rows) {
  const lines = [
    `# DA–DE Verbs — OWNER decisions final post-repair (PENDING)`,
    "",
    `Avots: [${FILES.readme}](./${FILES.readme})`,
    `Findings: **${rows.length}** ieraksti`,
    "",
    "Sākotnēji visi: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Audit ID | Verb/Card ID | Field | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Category | Statuss | OWNER_DECISION |",
    "|--:|----------|--------------|-------|------------|------------|-------------|----------|----------|---------|----------------|",
  ];
  rows.forEach((f, i) => {
    lines.push(
      `| ${i + 1} | ${f.id} | \`${f.cardId}\` | \`${f.field}\` | ${truncate(escapePipe(f.deCurrent))} | ${truncate(escapePipe(f.daCurrent))} | ${truncate(escapePipe(f.proposedDa))} | ${f.severity} | ${f.category || "—"} | PENDING | |`
    );
  });
  lines.push("", "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW", "");
  return lines.join("\n");
}

function renderAcceptedTable(rows) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  rows.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });
  const labot = rows.filter((f) => f.proposedDa && f.proposedDa !== "—").length;

  const lines = [
    `# DA–DE Verbs — OWNER accepted final post-repair (recommended LABOT track)`,
    "",
    "**Auditors:** GPT-5.6 Luna (READ-ONLY final post-repair audit)",
    `Avots: [${AUDIT_MD}](./${AUDIT_MD})`,
    `Findings: **${rows.length}** ieraksti`,
    "",
    "**DE = STRICT READ-ONLY.**",
    "Šis fails ir **ieteicamais LABOT ceļš**, ja OWNER piekrīt auditora PROPOSED_DA. Pārbaudi katru ierakstu pirms apply.",
    "",
    "| # | Audit ID | Verb/Card ID | Field | DE_CURRENT | DA_CURRENT | PROPOSED / OWNER NEW | Severity | Category | Statuss | OWNER_DECISION |",
    "|--:|----------|--------------|-------|------------|------------|----------------------|----------|----------|---------|----------------|",
  ];
  rows.forEach((f, i) => {
    const ownerNew = f.proposedDa && f.proposedDa !== "—" ? f.proposedDa : "";
    lines.push(
      `| ${i + 1} | ${f.id} | \`${f.cardId}\` | \`${f.field}\` | ${truncate(escapePipe(f.deCurrent))} | ${truncate(escapePipe(f.daCurrent))} | ${truncate(escapePipe(f.proposedDa))} | ${f.severity} | ${f.category || "—"} | LABOT | ${truncate(escapePipe(ownerNew), 50)} |`
    );
  });
  lines.push(
    "",
    "## Kopsavilkums",
    "",
    `- Findings: **${rows.length}**`,
    `- Ieteicams LABOT: **${labot}/${rows.length}**`,
    `- CRITICAL: **${bySev.CRITICAL || 0}**`,
    `- HIGH: **${bySev.HIGH || 0}**`,
    `- MEDIUM: **${bySev.MEDIUM || 0}**`,
    `- LOW: **${bySev.LOW || 0}**`,
    "- DE izmaiņas: **0**",
    ""
  );
  return lines.join("\n");
}

function renderReadme(groups, rows, meta) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  rows.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const groupRows = groups
    .map((g) => {
      const review = FILES.reviewGroup(g.slug);
      const decisions = FILES.decisionsGroup(g.slug);
      return `| ${g.range} | ${mdLink(review, "Preview")} | ${mdLink(decisions, "Decisions")} | ${g.count} |`;
    })
    .join("\n");

  return `# DA–DE Verbs — OWNER review final post-repair (Copy-Only workflow)

Tas pats princips kā **DA–DE A1/A2**:

1. Atver review failus (lokāli vai caur ${mdLink(FILES.github, "GitHub indeksu")}).
2. Katram finding — **CURRENT_DA** ir faktiskais production teksts (\`data/da/verbs.js\`, \`*.lv\`).
3. **OWNER** apstiprina **PROPOSED_DA** laukā **OWNER_DECISION** (vai aizpilda decisions tabulu).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply.

**GitHub indekss:** ${mdLink(FILES.github, FILES.github)}

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Final post-repair audit | [${AUDIT_MD}](./${AUDIT_MD}) |
| Verbs / forms | **${meta.totalVerbs || 189}** / **${meta.totalDaFields || 945}** |
| Kopā OWNER review | **${rows.length}** |
| CRITICAL | **${bySev.CRITICAL || 0}** |
| HIGH | **${bySev.HIGH || 0}** |
| MEDIUM | **${bySev.MEDIUM || 0}** |
| LOW | **${bySev.LOW || 0}** |
| Review grupas | **${groups.length}** (pa ${BATCH_SIZE}) |
| DE changes | **0** |

## Grupu faili

| Findings | Preview | Decisions | Skaits |
|----------|---------|-----------|--------|
${groupRows}

## Konsolidētie faili

| Tips | Fails |
|------|-------|
| Decisions (viss, PENDING) | ${mdLink(FILES.decisions)} |
| Accepted (ieteicamais LABOT) | ${mdLink(FILES.accepted)} |
| GitHub | ${mdLink(FILES.github)} |

## OWNER statusi

- **LABOT** — copy-paste PROPOSED/OWNER_DECISION
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — DE avota jautājums

## Apply noteikumi

- COPY-ONLY pēc OWNER lēmuma.
- Pirms apply: \`actual current === CURRENT_DA\`, citādi SKIP.
- **DE = STRICT READ-ONLY.**

**Production changes = 0 · DE changes = 0**
`;
}

function renderGithubIndex(groups, rows) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  rows.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const groupRows = groups
    .map((g) => {
      const review = FILES.reviewGroup(g.slug);
      const decisions = FILES.decisionsGroup(g.slug);
      return `| ${g.range} | ${ghMd(review, "Preview")} | ${ghMd(decisions, "Decisions")} | ${g.count} |`;
    })
    .join("\n");

  return `# DA–DE Verbs — GitHub indekss (final post-repair OWNER review)

**Auditors:** GPT-5.6 Luna
**Branch:** \`${BRANCH}\`
**Final post-repair audit PR:** [#${AUDIT_PR}](https://github.com/${REPO}/pull/${AUDIT_PR})

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${ghMd(FILES.readme, "OWNER README")} | Workflow + kopsavilkums |
| ${ghMd(FILES.github, "Šis indekss")} | Visas GitHub saites |
| ${ghMd(AUDIT_MD, "Final post-repair audits")} | NEEDS OWNER REVIEW · ${rows.length} findings |

## Konsolidētie faili

| Tips | Fails |
|------|-------|
| Decisions (PENDING) | ${ghMd(FILES.decisions)} |
| Accepted (ieteicamais LABOT) | ${ghMd(FILES.accepted)} |

## Grupu preview (pa ${BATCH_SIZE} findingiem)

| Findings | Preview | Decisions | Skaits |
|----------|---------|-----------|--------|
${groupRows}

---

**Findings:** **${rows.length}** · **HIGH:** **${bySev.HIGH || 0}** · **MEDIUM:** **${bySev.MEDIUM || 0}** · **DE changes:** **0**
`;
}

function main() {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const rows = loadFindings();
  if (!rows.length) {
    console.log(JSON.stringify({ totalFindings: 0, skipped: true, reason: "no findings" }, null, 2));
    return;
  }

  const batches = chunk(rows, BATCH_SIZE);
  const groups = batches.map((batch, i) => {
    const nums = batch.map(findingNum);
    const slug = `group${String(i + 1).padStart(2, "0")}`;
    const range = `${Math.min(...nums)}–${Math.max(...nums)}`;
    return { slug, batch, range, count: batch.length };
  });

  const reports = path.join(ROOT, "reports");
  const written = [];

  fs.writeFileSync(path.join(reports, FILES.decisions), renderPendingTable(rows));
  written.push(FILES.decisions);

  fs.writeFileSync(path.join(reports, FILES.accepted), renderAcceptedTable(rows));
  written.push(FILES.accepted);

  fs.writeFileSync(path.join(reports, FILES.readme), renderReadme(groups, rows, audit.coverage || {}));
  written.push(FILES.readme);

  for (const g of groups) {
    const reviewFile = FILES.reviewGroup(g.slug);
    const reviewContent = [
      renderReviewHeader(g.slug.replace("group", "Group "), g.slug, g.count, g.range),
      ...g.batch.map((f, i) => renderFinding(f, i + 1)),
    ].join("\n");
    fs.writeFileSync(path.join(reports, reviewFile), reviewContent);
    written.push(reviewFile);

    const decFile = FILES.decisionsGroup(g.slug);
    const decContent = [
      renderDecisionsHeader(g.slug.replace("group", "Group "), g.slug),
      ...g.batch.map(renderDecisionRow),
      "",
      "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW",
      "",
    ].join("\n");
    fs.writeFileSync(path.join(reports, decFile), decContent);
    written.push(decFile);
  }

  fs.writeFileSync(path.join(reports, FILES.github), renderGithubIndex(groups, rows));
  written.push(FILES.github);

  fs.mkdirSync(path.join(reports, "temp"), { recursive: true });
  fs.writeFileSync(
    path.join(reports, "temp/da-verbs-final-post-repair-owner-review-traceability.json"),
    JSON.stringify(
      {
        findings: rows.length,
        groups: groups.length,
        groupSize: BATCH_SIZE,
        branch: BRANCH,
        filesWritten: written.length,
        pass: true,
      },
      null,
      2
    )
  );

  console.log(
    JSON.stringify(
      {
        totalFindings: rows.length,
        groups: groups.length,
        filesWritten: written.length,
        github: `reports/${FILES.github}`,
        branch: BRANCH,
        productionChanges: 0,
        deChanges: 0,
      },
      null,
      2
    )
  );
}

main();
