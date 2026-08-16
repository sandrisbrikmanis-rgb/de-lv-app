#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE Kurss final post-repair OWNER review + decisions groups (READ-ONLY).
 * Sources:
 *  - reports/temp/da-kurss-final-post-repair-audit.json (248 FPR findings)
 *  - reports/temp/da-kurss-full-audit.json + signed group decisions (73 NEEDS_SOURCE_REVIEW carry-forward)
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const FPR_JSON = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-audit.json");
const FULL_AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-full-audit.json");
const AUDIT_MD = "da-kurss-final-post-repair-audit.md";
const BATCH_SIZE = 50;
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const DEFAULT_BRANCH = "cursor/da-kurss-final-post-repair-audit-fffe";
const DEFAULT_PR = "568";

const FILES = {
  readme: "da-kurss-owner-review-final-post-repair-README.md",
  github: "da-kurss-owner-review-final-post-repair-GITHUB.md",
  decisions: "da-kurss-owner-decisions-final-post-repair.md",
  accepted: "da-kurss-owner-accepted-final-post-repair.md",
  nsrSummary: "da-kurss-owner-decisions-nsr-carryforward.md",
  reviewGroup: (n) => `da-kurss-owner-review-final-post-repair-group${String(n).padStart(2, "0")}.md`,
  decisionsGroup: (n) => `da-kurss-owner-decisions-final-post-repair-group${String(n).padStart(2, "0")}.md`,
  nsrGroup: (n) => `da-kurss-owner-decisions-nsr-carryforward-group${String(n).padStart(2, "0")}.md`,
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

const STATUS_RE = /\*\*(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)\*\*/;

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 60) {
  const s = String(text || "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
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

function findingNum(f) {
  const m = String(f.id || "").match(/DA-KURSS-FPR-(\d+)/);
  return m ? Number(m[1]) : 0;
}

function loadFprFindings() {
  if (!fs.existsSync(FPR_JSON)) {
    console.error(`Missing ${FPR_JSON}. Run audit-da-kurss-final-post-repair.js first.`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(FPR_JSON, "utf8"));
  return (data.findings || [])
    .filter((f) => f.category !== "FALSE_POSITIVE" && f.category !== "OWNER_REGRESSION")
    .sort((a, b) => findingNum(a) - findingNum(b));
}

function extractCell(text) {
  let raw = String(text || "").trim();
  const m = raw.match(/^`([^`]+)`$/);
  if (m) return m[1];
  if (raw.startsWith("`") && raw.endsWith("`")) return raw.slice(1, -1);
  return raw;
}

function loadNsrCarryForward() {
  if (!fs.existsSync(FULL_AUDIT_JSON)) return [];
  const audit = JSON.parse(fs.readFileSync(FULL_AUDIT_JSON, "utf8"));
  const byId = new Map((audit.findings || []).map((f) => [f.id, f]));
  const rows = [];

  for (let i = 1; i <= 13; i++) {
    const file = path.join(ROOT, "reports", `da-kurss-owner-decisions-group${String(i).padStart(2, "0")}.md`);
    if (!fs.existsSync(file)) continue;
    for (const line of fs.readFileSync(file, "utf8").split("\n")) {
      if (!line.startsWith("|") || /^\|\s*[-:]+/.test(line)) continue;
      const cells = line.split("|").slice(1, -1).map((c) => c.trim());
      if (cells.length < 4 || !/^\d+$/.test(cells[0])) continue;

      let statusIdx;
      let findingId;
      let ownerNote = "";

      if (cells.length >= 8) {
        findingId = extractCell(cells[1]);
        statusIdx = 7;
        ownerNote = cells[8] || "";
      } else if (cells.length === 6) {
        findingId = extractCell(cells[1]);
        statusIdx = 4;
        ownerNote = cells[5] || "";
      } else if (cells.length === 5) {
        findingId = extractCell(cells[1]);
        statusIdx = 3;
        ownerNote = cells[4] || "";
      } else if (cells.length === 4) {
        findingId = extractCell(cells[1]);
        statusIdx = 2;
        ownerNote = cells[3] || "";
      } else continue;

      const statusMatch = cells[statusIdx].match(STATUS_RE);
      const status = statusMatch ? statusMatch[1] : cells[statusIdx].replace(/\*/g, "").trim();
      if (status !== "NEEDS_SOURCE_REVIEW") continue;

      const af = byId.get(findingId);
      rows.push({
        id: findingId,
        legacyNum: Number(cells[0]),
        lessonId: af?.lessonId || "",
        path: af?.path || "",
        fieldType: af?.fieldType || "",
        severity: af?.severity || "HIGH",
        category: af?.category || "NEEDS_SOURCE_REVIEW",
        problem: af?.problem || ownerNote,
        deCurrent: af?.deCurrent || "",
        daCurrent: af?.daCurrent || "",
        proposedDa: af?.proposedDa || "",
        reason: af?.reason || ownerNote,
        source: "prior-nsr",
        priorOwnerNote: ownerNote,
        track: "NSR_CARRYFORWARD",
      });
    }
  }
  return rows;
}

function renderFinding(f, num) {
  return [
    `## Finding ${num}`,
    "",
    `**Audit ID:** ${f.id}`,
    `**Lesson/ID:** \`${f.lessonId}\``,
    `**Path:** \`${f.path}\``,
    `**Field type:** \`${f.fieldType || "—"}\``,
    `**DE (read-only):** ${truncate(f.deCurrent || "—", 200)}`,
    `**Severity:** ${f.severity}`,
    `**Category:** ${f.category || "—"}`,
    `**Production:** \`data/da/courseLessons.js\` / \`courseTrainingCards.js\` / \`languages/da/ui.js\``,
    `**CURRENT_DA:** ${truncate(f.daCurrent, 500)}`,
    `**PROPOSED_DA:** ${truncate(f.proposedDa, 500)}`,
    `**Problēma:** ${f.problem || "—"}`,
    `**Audita pamatojums:** ${f.reason || f.problem || "—"}`,
    `**Avots:** GPT-5.6 Luna final post-repair audit (\`reports/${AUDIT_MD}\`) · ${f.source || "luna"}`,
    "",
    "**OWNER_DECISION:**",
    "",
    "---",
    "",
  ].join("\n");
}

function renderNsrFinding(f, num) {
  return [
    `## NSR ${num} (carry-forward)`,
    "",
    `**Audit ID:** ${f.id}`,
    `**Lesson/ID:** \`${f.lessonId}\``,
    `**Path:** \`${f.path}\``,
    `**DE (read-only):** ${truncate(f.deCurrent || "—", 200)}`,
    `**Severity:** ${f.severity}`,
    `**Category:** ${f.category || "NEEDS_SOURCE_REVIEW"}`,
    `**CURRENT_DA:** ${truncate(f.daCurrent, 500)}`,
    `**PROPOSED_DA:** ${truncate(f.proposedDa, 500)}`,
    `**Problēma:** ${f.problem || "—"}`,
    `**Iepriekšējais OWNER komentārs:** ${truncate(f.priorOwnerNote, 300)}`,
    `**Avots:** Prior signed audit (#566) · NEEDS_SOURCE_REVIEW carry-forward`,
    "",
    "**OWNER_DECISION:**",
    "",
    "---",
    "",
  ].join("\n");
}

function renderReviewHeader(title, count, range) {
  return [
    `# DA–DE Kurss — OWNER review ${title}`,
    "",
    `Avots: [${AUDIT_MD}](./${AUDIT_MD})`,
    `Findings: **${range}** (${count} ieraksti)`,
    "",
    "> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts.",
    "> Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** vai aizpildi decisions tabulu.",
    "> **DE lauki nemainīt.** Labojam tikai DA saturu.",
    "",
  ].join("\n");
}

function renderDecisionsHeader(title, range, count) {
  return [
    `# DA–DE Kurss — OWNER decisions — ${title}`,
    "",
    `Avots: final post-repair audit · Findings **${range}** (${count} ieraksti)`,
    "",
    "Aizpildi tabulu. **DE = STRICT READ-ONLY.**",
    "",
    "| Audit ID | Lesson/ID | Path | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Category | Statuss | OWNER_DECISION |",
    "|----------|-----------|------|------------|------------|-------------|----------|----------|---------|----------------|",
  ].join("\n");
}

function renderDecisionRow(f) {
  return `| ${f.id} | \`${f.lessonId}\` | \`${truncate(f.path, 45)}\` | ${truncate(escapePipe(f.deCurrent), 40)} | ${truncate(escapePipe(f.daCurrent), 40)} | ${truncate(escapePipe(f.proposedDa), 40)} | ${f.severity} | ${f.category || "—"} | PENDING | |`;
}

function renderNsrDecisionRow(f, idx) {
  return `| ${idx} | ${f.id} | \`${f.lessonId}\` | \`${truncate(f.path, 45)}\` | ${truncate(escapePipe(f.deCurrent), 40)} | ${truncate(escapePipe(f.daCurrent), 40)} | ${truncate(escapePipe(f.proposedDa), 40)} | ${f.severity} | NEEDS_SOURCE_REVIEW | |`;
}

function renderPendingTable(rows, title) {
  const lines = [
    `# DA–DE Kurss — ${title}`,
    "",
    `Avots: [${FILES.readme}](./${FILES.readme})`,
    `Findings: **${rows.length}** ieraksti`,
    "",
    "Sākotnēji visi: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Audit ID | Lesson/ID | Path | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Category | Statuss | OWNER_DECISION |",
    "|--:|----------|-----------|------|------------|------------|-------------|----------|----------|---------|----------------|",
  ];
  rows.forEach((f, i) => {
    lines.push(
      `| ${i + 1} | ${f.id} | \`${f.lessonId}\` | \`${truncate(f.path, 40)}\` | ${truncate(escapePipe(f.deCurrent))} | ${truncate(escapePipe(f.daCurrent))} | ${truncate(escapePipe(f.proposedDa))} | ${f.severity} | ${f.category || "—"} | PENDING | |`,
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
  const labot = rows.filter((f) => f.proposedDa && !/^\(/.test(String(f.proposedDa))).length;

  const lines = [
    `# DA–DE Kurss — OWNER accepted final post-repair (recommended LABOT track)`,
    "",
    "**Auditors:** GPT-5.6 Luna final post-repair audit",
    `Avots: [${AUDIT_MD}](./${AUDIT_MD})`,
    `Findings: **${rows.length}** ieraksti`,
    "",
    "**DE = STRICT READ-ONLY.**",
    "Šis fails ir **ieteicamais LABOT ceļš**, ja OWNER piekrīt auditora PROPOSED_DA. Pārbaudi katru ierakstu pirms apply.",
    "",
    "| # | Audit ID | Lesson/ID | Path | DE_CURRENT | DA_CURRENT | PROPOSED / OWNER NEW | Severity | Category | Statuss | OWNER_DECISION |",
    "|--:|----------|-----------|------|------------|------------|----------------------|----------|----------|---------|----------------|",
  ];
  rows.forEach((f, i) => {
    const ownerNew = f.proposedDa && !/^\(/.test(String(f.proposedDa)) ? f.proposedDa : "";
    lines.push(
      `| ${i + 1} | ${f.id} | \`${f.lessonId}\` | \`${truncate(f.path, 40)}\` | ${truncate(escapePipe(f.deCurrent))} | ${truncate(escapePipe(f.daCurrent))} | ${truncate(escapePipe(f.proposedDa))} | ${f.severity} | ${f.category || "—"} | LABOT | ${truncate(escapePipe(ownerNew), 50)} |`,
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
    "",
  );
  return lines.join("\n");
}

function renderReadme(fprGroups, nsrGroups, fprRows, nsrRows, audit) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  fprRows.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const fprGroupRows = fprGroups
    .map((g) => {
      const review = FILES.reviewGroup(g.num);
      const decisions = FILES.decisionsGroup(g.num);
      return `| ${g.range} | ${mdLink(review, "Preview")} | ${mdLink(decisions, "Decisions")} | ${g.count} |`;
    })
    .join("\n");

  const nsrGroupRows = nsrGroups
    .map((g) => {
      const dec = FILES.nsrGroup(g.num);
      return `| ${g.range} | ${mdLink(dec, "NSR decisions")} | ${g.count} |`;
    })
    .join("\n");

  return `# DA–DE Kurss — OWNER review final post-repair (Copy-Only workflow)

Tas pats princips kā **DA–DE Verbs/A1/A2**:

1. Atver review failus (lokāli vai caur ${mdLink(FILES.github, "GitHub indeksu")}).
2. Katram finding — **CURRENT_DA** ir faktiskais production teksts.
3. **OWNER** apstiprina **PROPOSED_DA** laukā **OWNER_DECISION** (vai aizpilda decisions tabulu).
4. Atgriez aizpildītos failus — deterministisks **COPY-ONLY** apply.

**GitHub indekss:** ${mdLink(FILES.github, FILES.github)}

## Kopsavilkums

| Metrika | Skaitlis |
|---------|----------|
| Final post-repair audit | [${AUDIT_MD}](./${AUDIT_MD}) |
| DA fields audited | **${audit.stats?.totalFields || 1266}** |
| **Jaunie FPR findings** | **${fprRows.length}** |
| **Prior NEEDS_SOURCE_REVIEW** | **${nsrRows.length}** |
| Kopā OWNER review | **${fprRows.length + nsrRows.length}** |
| CRITICAL | **${bySev.CRITICAL || 0}** |
| HIGH | **${bySev.HIGH || 0}** |
| MEDIUM | **${bySev.MEDIUM || 0}** |
| LOW | **${bySev.LOW || 0}** |
| FPR review grupas | **${fprGroups.length}** (pa ${BATCH_SIZE}) |
| NSR carry-forward grupas | **${nsrGroups.length}** |
| DE changes | **0** |

> **Piezīme:** 16 lesson7 \`.lv\` STRUCTURE ieraksti var pārklāties starp FPR un NSR — pārskati abus trackus pirms apply.

## FPR grupu faili (248 findings)

| Findings | Preview | Decisions | Skaits |
|----------|---------|-----------|--------|
${fprGroupRows}

## NSR carry-forward (73 prior NEEDS_SOURCE_REVIEW)

| Items | Decisions | Skaits |
|-------|-----------|--------|
${nsrGroupRows}

| Konsolidēts NSR | ${mdLink(FILES.nsrSummary, FILES.nsrSummary)} |

## Konsolidētie faili

| Tips | Fails |
|------|-------|
| Decisions FPR (viss, PENDING) | ${mdLink(FILES.decisions)} |
| Accepted FPR (ieteicamais LABOT) | ${mdLink(FILES.accepted)} |
| NSR carry-forward (viss) | ${mdLink(FILES.nsrSummary)} |
| GitHub | ${mdLink(FILES.github)} |

## OWNER statusi

- **LABOT** — copy-paste PROPOSED/OWNER_DECISION
- **FALSE_POSITIVE** — nemainām
- **NELABOT** — apzināti atstājam
- **NEEDS_SOURCE_REVIEW** — vajag pilnu production/LV MASTER kontekstu

## Apply noteikumi

- COPY-ONLY pēc OWNER lēmuma.
- Pirms apply: \`actual current === CURRENT_DA\`, citādi SKIP.
- **DE = STRICT READ-ONLY.**

**Production changes = 0 · DE changes = 0**
`;
}

function renderGithubIndex(fprGroups, nsrGroups, fprRows, nsrRows) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  fprRows.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  const fprGroupRows = fprGroups
    .map((g) => {
      const review = FILES.reviewGroup(g.num);
      const decisions = FILES.decisionsGroup(g.num);
      return `| ${g.range} | ${ghMd(review, "Preview")} | ${ghMd(decisions, "Decisions")} | ${g.count} |`;
    })
    .join("\n");

  const nsrGroupRows = nsrGroups
    .map((g) => {
      const dec = FILES.nsrGroup(g.num);
      return `| ${g.range} | ${ghMd(dec, "NSR decisions")} | ${g.count} |`;
    })
    .join("\n");

  return `# DA–DE Kurss — GitHub indekss (final post-repair OWNER review)

**Auditors:** GPT-5.6 Luna
**Branch:** \`${BRANCH}\`
**Final post-repair audit PR:** [#${AUDIT_PR}](https://github.com/${REPO}/pull/${AUDIT_PR})

## Sākt šeit

| Fails | Apraksts |
|-------|----------|
| ${ghMd(FILES.readme, "OWNER README")} | Workflow + kopsavilkums |
| ${ghMd(FILES.github, "Šis indekss")} | Visas GitHub saites |
| ${ghMd(AUDIT_MD, "Final post-repair audit")} | NEEDS OWNER REVIEW · ${fprRows.length} FPR findings |

## Konsolidētie faili

| Tips | Fails |
|------|-------|
| FPR decisions (PENDING) | ${ghMd(FILES.decisions)} |
| FPR accepted (ieteicamais LABOT) | ${ghMd(FILES.accepted)} |
| NSR carry-forward (73) | ${ghMd(FILES.nsrSummary)} |

## FPR grupas (pa ${BATCH_SIZE})

| Findings | Preview | Decisions | Skaits |
|----------|---------|-----------|--------|
${fprGroupRows}

## NSR carry-forward grupas

| Items | Decisions | Skaits |
|-------|-----------|--------|
${nsrGroupRows}

---

**FPR findings:** **${fprRows.length}** · **NSR carry-forward:** **${nsrRows.length}** · **CRITICAL:** **${bySev.CRITICAL || 0}** · **HIGH:** **${bySev.HIGH || 0}** · **DE changes:** **0**
`;
}

function main() {
  const audit = JSON.parse(fs.readFileSync(FPR_JSON, "utf8"));
  const fprRows = loadFprFindings();
  const nsrRows = loadNsrCarryForward();

  if (!fprRows.length && !nsrRows.length) {
    console.log(JSON.stringify({ skipped: true, reason: "no findings" }, null, 2));
    return;
  }

  const fprBatches = chunk(fprRows, BATCH_SIZE);
  const fprGroups = fprBatches.map((batch, i) => {
    const nums = batch.map(findingNum);
    const num = i + 1;
    const range = `${Math.min(...nums)}–${Math.max(...nums)}`;
    return { num, batch, range, count: batch.length };
  });

  const nsrBatches = chunk(nsrRows, BATCH_SIZE);
  const nsrGroups = nsrBatches.map((batch, i) => {
    const num = i + 1;
    const range = `${(i * BATCH_SIZE) + 1}–${(i * BATCH_SIZE) + batch.length}`;
    return { num, batch, range, count: batch.length };
  });

  const reports = path.join(ROOT, "reports");
  const written = [];

  fs.writeFileSync(path.join(reports, FILES.decisions), renderPendingTable(fprRows, "OWNER decisions final post-repair (PENDING)"));
  written.push(FILES.decisions);

  fs.writeFileSync(path.join(reports, FILES.accepted), renderAcceptedTable(fprRows));
  written.push(FILES.accepted);

  fs.writeFileSync(path.join(reports, FILES.nsrSummary), renderPendingTable(nsrRows, "OWNER decisions NSR carry-forward (prior audit #566)"));
  written.push(FILES.nsrSummary);

  for (const g of fprGroups) {
    const reviewFile = FILES.reviewGroup(g.num);
    const reviewContent = [
      renderReviewHeader(`final post-repair Group ${String(g.num).padStart(2, "0")}`, g.count, g.range),
      ...g.batch.map((f, i) => renderFinding(f, i + 1)),
    ].join("\n");
    fs.writeFileSync(path.join(reports, reviewFile), reviewContent);
    written.push(reviewFile);

    const decFile = FILES.decisionsGroup(g.num);
    const decContent = [
      renderDecisionsHeader(`final post-repair Group ${String(g.num).padStart(2, "0")}`, g.range, g.count),
      ...g.batch.map(renderDecisionRow),
      "",
      "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW",
      "",
    ].join("\n");
    fs.writeFileSync(path.join(reports, decFile), decContent);
    written.push(decFile);
  }

  for (const g of nsrGroups) {
    const decFile = FILES.nsrGroup(g.num);
    const lines = [
      `# DA–DE Kurss — NSR carry-forward — Group ${String(g.num).padStart(2, "0")}`,
      "",
      "Prior signed audit (#566) · **NEEDS_SOURCE_REVIEW** items not yet resolved.",
      `Items: **${g.range}** (${g.count} ieraksti)`,
      "",
      "Aizpildi tabulu. **DE = STRICT READ-ONLY.**",
      "",
      "| # | Audit ID | Lesson/ID | Path | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Statuss | OWNER_DECISION |",
      "|--:|----------|-----------|------|------------|------------|-------------|----------|---------|----------------|",
      ...g.batch.map((f, i) => renderNsrDecisionRow(f, (g.num - 1) * BATCH_SIZE + i + 1)),
      "",
      "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW",
      "",
      ...g.batch.map((f, i) => renderNsrFinding(f, (g.num - 1) * BATCH_SIZE + i + 1)),
    ];
    fs.writeFileSync(path.join(reports, decFile), lines.join("\n"));
    written.push(decFile);
  }

  fs.writeFileSync(path.join(reports, FILES.readme), renderReadme(fprGroups, nsrGroups, fprRows, nsrRows, audit));
  written.push(FILES.readme);

  fs.writeFileSync(path.join(reports, FILES.github), renderGithubIndex(fprGroups, nsrGroups, fprRows, nsrRows));
  written.push(FILES.github);

  fs.mkdirSync(path.join(reports, "temp"), { recursive: true });
  fs.writeFileSync(
    path.join(reports, "temp/da-kurss-final-post-repair-owner-review-traceability.json"),
    JSON.stringify(
      {
        fprFindings: fprRows.length,
        nsrCarryForward: nsrRows.length,
        totalOwnerReview: fprRows.length + nsrRows.length,
        fprGroups: fprGroups.length,
        nsrGroups: nsrGroups.length,
        groupSize: BATCH_SIZE,
        branch: BRANCH,
        filesWritten: written.length,
      },
      null,
      2,
    ),
  );

  console.log(
    JSON.stringify(
      {
        fprFindings: fprRows.length,
        nsrCarryForward: nsrRows.length,
        totalOwnerReview: fprRows.length + nsrRows.length,
        fprGroups: fprGroups.length,
        nsrGroups: nsrGroups.length,
        filesWritten: written.length,
        github: `reports/${FILES.github}`,
        branch: BRANCH,
        productionChanges: 0,
      },
      null,
      2,
    ),
  );
}

main();
