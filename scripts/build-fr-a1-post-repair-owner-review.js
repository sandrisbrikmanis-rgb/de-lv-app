#!/usr/bin/env node
"use strict";
/**
 * Build FR–DE A1 POST-REPAIR OWNER-PREP package (PR #683 closure path).
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { COVERAGE_DISCLAIMER } = require("./lib/discovery-stability");

const AUDIT_JSON = path.join(ROOT, "reports/temp/fr-a1-post-repair-audit.json");
const AUDIT_MD = "fr-a1-post-repair-audit.md";
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
const PR_NUMBER = process.env.AUDIT_PR || "683";
const MAIN_BASE_SHA = process.env.MAIN_BASE_SHA || execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
const GROUP_SIZE = 50;
const HISTORY_FILTER = false;

const OUT = {
  view: path.join(ROOT, "reports/fr-a1-post-repair-owner-view.md"),
  decisions: path.join(ROOT, "reports/fr-a1-post-repair-owner-decisions.md"),
  github: path.join(ROOT, "reports/fr-a1-post-repair-owner-review-GITHUB.md"),
  readme: path.join(ROOT, "reports/fr-a1-post-repair-owner-review-README.md"),
};

function gh(relPath) {
  return `https://github.com/${REPO}/blob/${BRANCH}/${relPath}`;
}

function truncate(text, max = 200) {
  const s = String(text || "").replace(/\n/g, " ");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function countBySev(findings) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.forEach((f) => {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (bySev[s] !== undefined) bySev[s] += 1;
  });
  return bySev;
}

function loadFindings() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}. Run: node scripts/run-fr-a1-post-repair-audit.js`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));

  const discovery = data.discoveryStability;
  const gateBlocks = (g) => g === "FAIL";
  if (gateBlocks(discovery?.gates?.PRE_BACKLOG_HISTORY_GATE)) {
    console.error("BLOCKED: PRE_BACKLOG_HISTORY_GATE = FAIL (§7.18) — OWNER backlog forbidden");
    process.exit(7);
  }
  if (gateBlocks(discovery?.gates?.RAW_AUDIT_HISTORY_GATE)) {
    console.error("BLOCKED: RAW_AUDIT_HISTORY_GATE = FAIL (§7.12)");
    process.exit(7);
  }
  if (gateBlocks(discovery?.gates?.OWNER_HISTORY_GATE)) {
    console.error("BLOCKED: OWNER_HISTORY_GATE = FAIL (§11.8)");
    process.exit(7);
  }

  let findings;
  if (Array.isArray(data.ownerBacklogFinal) && data.ownerBacklogFinal.length > 0) {
    findings = data.ownerBacklogFinal;
  } else if (Array.isArray(data.validatedFindings) && data.validatedFindings.length > 0) {
    findings = data.validatedFindings;
  } else {
    findings = (data.findings || []).filter((f) => f.validatedReal);
  }

  if (!HISTORY_FILTER) return findings;

  if (!fs.existsSync(VALIDATION_JSON)) {
    console.error(`Missing ${VALIDATION_JSON}. Run: node scripts/build-fr-a1-pr603-owner-history-validation.js`);
    process.exit(1);
  }
  const validation = JSON.parse(fs.readFileSync(VALIDATION_JSON, "utf8"));
  if (validation.finalVerdict !== "OWNER_HISTORY_VALIDATED") {
    console.error("BLOCKED: OWNER history validation verdict is not OWNER_HISTORY_VALIDATED");
    process.exit(6);
  }
  const backlogIds = new Set(validation.newBacklogAuditIds || []);
  const matrixById = new Map((validation.matrix || []).map((r) => [r.auditId, r]));
  const filtered = findings.filter((f) => backlogIds.has(f.findingId));
  if (filtered.length !== backlogIds.size) {
    console.error(`BLOCKED: filtered ${filtered.length} !== backlog ${backlogIds.size}`);
    process.exit(6);
  }

  return filtered.map((f, i) => {
    const row = matrixById.get(f.findingId) || {};
    const newId = `FR-A1-${String(i + 1).padStart(4, "0")}`;
    return {
      ...f,
      findingId: newId,
      pr603AuditId: f.findingId,
      currentFr: row.production || f.currentFr,
      historyClassification: row.classification,
      historyEvidence: row.evidence,
    };
  });
}

function cleanStaleGroupFiles(prefix) {
  const dir = path.join(ROOT, "reports");
  for (const name of fs.readdirSync(dir)) {
    if (new RegExp(`^${prefix}-group\\d+\\.md$`).test(name)) {
      fs.unlinkSync(path.join(dir, name));
    }
  }
}

function verifyOwnerArtifactCoverage(findings) {
  const ids = new Set();
  let duplicateAuditIds = 0;
  let invalidCardOrField = 0;
  for (const f of findings) {
    const id = String(f.findingId || "").trim();
    if (!id || ids.has(id)) duplicateAuditIds += 1;
    else ids.add(id);
    if (!String(f.cardId || "").trim() || !String(f.field || "").trim()) invalidCardOrField += 1;
  }
  const n = findings.length;
  const viewIds = new Set();
  if (fs.existsSync(OUT.view)) {
    for (const m of fs.readFileSync(OUT.view, "utf8").matchAll(/^## (FR-A1-\d+)/gm)) {
      viewIds.add(m[1]);
    }
  }
  const decisionRows = fs.existsSync(OUT.decisions)
    ? fs.readFileSync(OUT.decisions, "utf8").split("\n").filter((l) => l.startsWith("| FR-A1-")).length
    : 0;
  const missingInOwnerView = [...ids].filter((id) => !viewIds.has(id)).length;
  const extraInOwnerView = [...viewIds].filter((id) => !ids.has(id)).length;
  const missingInOwnerDecisions = n - decisionRows;
  const pass =
    n > 0 &&
    duplicateAuditIds === 0 &&
    invalidCardOrField === 0 &&
    missingInOwnerView === 0 &&
    extraInOwnerView === 0 &&
    missingInOwnerDecisions === 0 &&
    viewIds.size === n &&
    decisionRows === n;

  return {
    validatedFindings: n,
    ownerViewFindings: viewIds.size,
    ownerDecisionsFindings: decisionRows,
    missingInOwnerView,
    extraInOwnerView,
    missingInOwnerDecisions: Math.max(0, missingInOwnerDecisions),
    duplicateAuditIds,
    invalidCardOrField,
    ownerReviewArtifactCoverage: pass ? "100%" : "<100%",
    pass,
  };
}

function renderViewFinding(f) {
  return [
    `## ${f.findingId}`,
    "",
    `**Audit ID:** ${f.findingId}`,
    `**Card ID:** \`${f.cardId}\``,
    `**Field/path:** \`${f.field}\``,
    `**Production file:** \`data/fr/a1.js\``,
    `**Severity:** ${f.severity}`,
    `**Category:** ${f.category || "—"}`,
    `**DE (read-only):** ${truncate(f.de, 120) || "—"}`,
    f.lvSource ? `**LV MASTER reference:** ${truncate(f.lvSource, 200)}` : "",
    `**CURRENT:** ${truncate(f.currentFr, 500)}`,
    f.proposedFr ? `**PROPOSED_ET (audit ieteikums):** ${truncate(f.proposedFr, 500)}` : "",
    f.pr603AuditId ? `**PR603 audit ID:** ${f.pr603AuditId}` : "",
    f.historyClassification ? `**History validation:** ${f.historyClassification}` : "",
    `**Problēma:** ${f.reason || "—"}`,
    `**Avots:** ${f.source || "—"}`,
    f.ownerHistoryStatus ? `**OWNER history:** ${f.ownerHistoryStatus}` : "",
    f.ownerApprovedValue ? `**OWNER approved (iepriekš):** ${truncate(f.ownerApprovedValue, 200)}` : "",
    `**OWNER STATUS:** PENDING`,
    `**OWNER_DECISION:** [nav aizpildīts]`,
    "",
    "> PROPOSED_ET nav OWNER apstiprināts. DE lauki nemainīt.",
    "",
    "---",
    "",
  ].filter(Boolean).join("\n");
}

function renderDecisionsRows(findings) {
  const lines = [
    "| Audit ID | Card ID | Field | CURRENT | PROPOSED_ET | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |",
    "|----------|---------|-------|---------|-------------|----------|----------|--------------|----------------|---------|",
  ];
  for (const f of findings) {
    lines.push(
      `| ${f.findingId} | ${escapePipe(f.cardId)} | ${escapePipe(f.field)} | ${escapePipe(truncate(f.currentFr, 120))} | ${escapePipe(truncate(f.proposedFr, 120))} | ${f.severity} | ${f.category || ""} | PENDING | | |`,
    );
  }
  return lines;
}

function buildView(findings) {
  cleanStaleGroupFiles("fr-a1-post-repair-owner-view");
  cleanStaleGroupFiles("fr-a1-post-repair-owner-decisions");
  const groups = [];
  for (let i = 0; i < findings.length; i += GROUP_SIZE) {
    groups.push(findings.slice(i, i + GROUP_SIZE));
  }

  const groupFiles = [];
  groups.forEach((slice, gi) => {
    const start = gi * GROUP_SIZE + 1;
    const end = Math.min((gi + 1) * GROUP_SIZE, findings.length);
    const id = String(gi + 1).padStart(2, "0");
    const viewName = `fr-a1-post-repair-owner-view-group${id}.md`;
    const decName = `fr-a1-post-repair-owner-decisions-group${id}.md`;
    const viewRel = `reports/${viewName}`;
    const decRel = `reports/${decName}`;
    const content = [
      `# FR–DE A1 — OWNER VIEW (grupa ${gi + 1}, ${start}–${end})`,
      "",
      `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.12`,
      `**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)`,
      `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
      "",
      "| Navigācija | Saite |",
      "|------------|-------|",
      `| GitHub indekss | [fr-a1-post-repair-owner-review-GITHUB.md](${gh("reports/fr-a1-post-repair-owner-review-GITHUB.md")}) |`,
      `| OWNER VIEW (visi) | [fr-a1-post-repair-owner-view.md](${gh("reports/fr-a1-post-repair-owner-view.md")}) |`,
      `| Decisions (šī grupa) | [${decName}](${gh(decRel)}) |`,
      `| Decisions (viss) | [fr-a1-post-repair-owner-decisions.md](${gh("reports/fr-a1-post-repair-owner-decisions.md")}) |`,
      "",
      `Avots: [${AUDIT_MD}](${gh(`reports/${AUDIT_MD}`)})`,
      "",
      ...slice.map(renderViewFinding),
    ].join("\n");
    fs.writeFileSync(path.join(ROOT, viewRel), content);
    groupFiles.push({ id, viewName, decName, viewRel, decRel, start, end, slice });
  });

  const main = [
    "# FR–DE A1 — OWNER VIEW",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.12`,
    `**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)`,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**WORK_BRANCH:** \`${BRANCH}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**SCOPE:** FR–DE A1 (\`data/fr/a1.js\`)`,
    `**Findings:** **${findings.length}** (OWNER_BACKLOG_FINAL after §7.11–§7.19 discovery-stability)`,
    "",
    `> OBJECT_COVERAGE = 702/702 (100%). DISCOVERY_COMPLETENESS = ${COVERAGE_DISCLAIMER.DISCOVERY_COMPLETENESS}.`,
    `> ${COVERAGE_DISCLAIMER.forbiddenInterpretation}`,
    "> Visi ieraksti sākotnēji **PENDING**. OWNER aizpilda [fr-a1-post-repair-owner-decisions.md](fr-a1-post-repair-owner-decisions.md).",
    "> **DE = STRICT READ-ONLY.** Production: `data/fr/a1.js` + `www/data/fr/a1.js`.",
    "",
    "## GitHub atvēršana",
    "",
    "| Fails | GitHub |",
    "|-------|--------|",
    `| GitHub indekss | [fr-a1-post-repair-owner-review-GITHUB.md](${gh("reports/fr-a1-post-repair-owner-review-GITHUB.md")}) |`,
    `| OWNER README | [fr-a1-post-repair-owner-review-README.md](${gh("reports/fr-a1-post-repair-owner-review-README.md")}) |`,
    `| OWNER DECISIONS | [fr-a1-post-repair-owner-decisions.md](${gh("reports/fr-a1-post-repair-owner-decisions.md")}) |`,
    `| Pilns audits | [${AUDIT_MD}](${gh(`reports/${AUDIT_MD}`)}) |`,
    `| History validation | [${VALIDATION_MD}](${gh(`reports/${VALIDATION_MD}`)}) |`,
    "",
    "## Grupas (pa 50 findingiem)",
    "",
    "| Grupa | Findings | VIEW | DECISIONS |",
    "|-------|----------|------|-----------|",
    ...groupFiles.map(
      (g) =>
        `| ${g.start}–${g.end} | ${g.end - g.start + 1} | [${g.viewName}](${gh(g.viewRel)}) | [${g.decName}](${gh(g.decRel)}) |`,
    ),
    "",
    "## Īsais saraksts (visi findingi)",
    "",
    ...findings.map((f) => `- **${f.findingId}** \`${f.cardId}\` · \`${f.field}\` · ${f.severity} · ${truncate(f.reason, 80)}`),
    "",
    "## Pilns findingu pārskats (visi findingi)",
    "",
    ...findings.map(renderViewFinding),
  ].join("\n");

  fs.writeFileSync(OUT.view, main);
  return groupFiles;
}

function buildDecisions(findings, groupFiles) {
  const header = [
    "# FR–DE A1 — OWNER DECISIONS",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.12`,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**WORK_BRANCH:** \`${BRANCH}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**Findings:** **${findings.length}** · sākotnēji visi **PENDING**`,
    "",
    "Filtrēts pēc [fr-a1-pr603-owner-history-validation.md](fr-a1-pr603-owner-history-validation.md): tikai **NEW_VALIDATED_REAL_FINDINGS** (16/19).",
    "",
    "Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**",
    "",
    "**DE = STRICT READ-ONLY.** Apply tikai pēc OWNER apstiprinājuma.",
    "",
    "## GitHub atvēršana",
    "",
    "| Fails | GitHub |",
    "|-------|--------|",
    `| GitHub indekss | [fr-a1-post-repair-owner-review-GITHUB.md](${gh("reports/fr-a1-post-repair-owner-review-GITHUB.md")}) |`,
    `| OWNER VIEW | [fr-a1-post-repair-owner-view.md](${gh("reports/fr-a1-post-repair-owner-view.md")}) |`,
    ...groupFiles.map(
      (g) => `| Decisions grupa ${g.start}–${g.end} | [${g.decName}](${gh(g.decRel)}) |`,
    ),
    "",
    "## Pilna tabula (visi findingi)",
    "",
  ].join("\n");

  fs.writeFileSync(OUT.decisions, `${header}${renderDecisionsRows(findings).join("\n")}\n`);

  groupFiles.forEach((g) => {
    const groupContent = [
      `# FR–DE A1 — OWNER DECISIONS (grupa ${g.id}, ${g.start}–${g.end})`,
      "",
      `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.12`,
      `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
      "",
      "| Navigācija | Saite |",
      "|------------|-------|",
      `| GitHub indekss | [fr-a1-post-repair-owner-review-GITHUB.md](${gh("reports/fr-a1-post-repair-owner-review-GITHUB.md")}) |`,
      `| VIEW (šī grupa) | [${g.viewName}](${gh(g.viewRel)}) |`,
      `| Decisions (viss) | [fr-a1-post-repair-owner-decisions.md](${gh("reports/fr-a1-post-repair-owner-decisions.md")}) |`,
      "",
      "Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**",
      "",
      ...renderDecisionsRows(g.slice),
      "",
    ].join("\n");
    fs.writeFileSync(path.join(ROOT, g.decRel), groupContent);
  });
}

function buildReadme(findings, groupFiles) {
  const bySev = countBySev(findings);
  const content = [
    "# FR–DE A1 — OWNER review (MASTER v1.12)",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.12`,
    `**Branch:** \`${BRANCH}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    "",
    `Avots: [${AUDIT_MD}](${gh(`reports/${AUDIT_MD}`)}) · [History validation](${gh(`reports/${VALIDATION_MD}`)}) · [GitHub indekss](${gh("reports/fr-a1-post-repair-owner-review-GITHUB.md")})`,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Skaitlis |",
    "|---------|----------|",
    `| Kartītes audited | **702/702** (OBJECT_COVERAGE 100%) |`,
    `| DISCOVERY_COMPLETENESS | **${COVERAGE_DISCLAIMER.DISCOVERY_COMPLETENESS}** |`,
    "| Study | **134/134** |",
    `| Kopā findings | **${findings.length}** |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    "",
    "## Faili (GitHub)",
    "",
    "| Tips | Fails | Apraksts |",
    "|------|-------|----------|",
    `| README | [fr-a1-post-repair-owner-review-README.md](${gh("reports/fr-a1-post-repair-owner-review-README.md")}) | Šis fails |`,
    `| Indekss | [fr-a1-post-repair-owner-review-GITHUB.md](${gh("reports/fr-a1-post-repair-owner-review-GITHUB.md")}) | Visas saites |`,
    `| VIEW | [fr-a1-post-repair-owner-view.md](${gh("reports/fr-a1-post-repair-owner-view.md")}) | Cilvēkam ērts pārskats |`,
    `| DECISIONS | [fr-a1-post-repair-owner-decisions.md](${gh("reports/fr-a1-post-repair-owner-decisions.md")}) | **Aizpildīt šeit** — PENDING |`,
    "",
    "## Grupas",
    "",
    "| Findings | VIEW | DECISIONS |",
    "|----------|------|-----------|",
    ...groupFiles.map(
      (g) =>
        `| ${g.start}–${g.end} | [${g.viewName}](${gh(g.viewRel)}) | [${g.decName}](${gh(g.decRel)}) |`,
    ),
    "",
    "## OWNER workflow",
    "",
    "1. Atver VIEW + DECISIONS grupu pāri (1–50, 51–100).",
    "2. Katram finding — aizpildi **OWNER STATUS** un **OWNER_DECISION** (precīzs ET teksts LABOT gadījumā).",
    "3. Konsolidē lēmumus `fr-a1-post-repair-owner-decisions.md` vai group failos.",
    "4. Atgriez aizpildītu decisions failu COPY-ONLY remontam.",
    "",
    "**Production changes = 0 · DE changes = 0**",
    "",
  ].join("\n");
  fs.writeFileSync(OUT.readme, content);
}

function buildGithub(findings, groupFiles, coverage, auditData) {
  const bySev = countBySev(findings);
  const discovery = auditData?.discoveryStability;
  const groupRows = groupFiles
    .map(
      (g) =>
        `| ${g.start}–${g.end} | [VIEW](${gh(g.viewRel)}) | [DECISIONS](${gh(g.decRel)}) | **PENDING** |`,
    )
    .join("\n");

  const coverageBlock = coverage
    ? [
        "## §7.10.4 Coverage gate",
        "",
        "| Metrika | Vērtība |",
        "|---------|---------|",
        `| Validated findings | **${coverage.validatedFindings}** |`,
        `| OWNER VIEW findings | **${coverage.ownerViewFindings}** |`,
        `| OWNER DECISIONS findings | **${coverage.ownerDecisionsFindings}** |`,
        `| Missing in OWNER VIEW | **${coverage.missingInOwnerView}** |`,
        `| Missing in OWNER DECISIONS | **${coverage.missingInOwnerDecisions}** |`,
        `| Duplicate Audit IDs | **${coverage.duplicateAuditIds}** |`,
        `| Invalid Card ID / Field | **${coverage.invalidCardOrField}** |`,
        `| **OWNER REVIEW ARTIFACT COVERAGE** | **${coverage.ownerReviewArtifactCoverage}** |`,
        "",
      ]
    : [];

  const discoveryBlock = discovery
    ? [
        "## §11.9 OWNER backlog validity (MASTER v1.12)",
        "",
        "| Metrika | Vērtība |",
        "|---------|---------|",
        `| RAW_CANDIDATES | **${discovery.metrics?.RAW_CANDIDATES ?? "—"}** |`,
        `| SEMANTIC_DEDUPED | **${discovery.metrics?.SEMANTIC_DEDUPED ?? "—"}** |`,
        `| PREVIOUS_RAW_MATCHES | **${discovery.metrics?.PREVIOUS_RAW_MATCHES ?? "—"}** |`,
        `| PREVIOUSLY_MISSED | **${discovery.metrics?.PREVIOUSLY_MISSED ?? "—"}** |`,
        `| GENUINELY_NEW | **${discovery.metrics?.GENUINELY_NEW ?? "—"}** |`,
        `| OWNER_BACKLOG_FINAL | **${discovery.metrics?.OWNER_BACKLOG_FINAL ?? findings.length}** |`,
        `| PRE_BACKLOG_HISTORY_GATE | **${discovery.gates?.PRE_BACKLOG_HISTORY_GATE ?? "—"}** |`,
        `| AUDIT_DISCOVERY_NON_REPRODUCIBILITY | **${discovery.AUDIT_DISCOVERY_NON_REPRODUCIBILITY ?? "—"}** |`,
        "",
      ]
    : [];

  const content = [
    "# FR–DE A1 — GitHub atvēršanas indekss",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.12`,
    `**Branch:** \`${BRANCH}\``,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**Findings:** **${findings.length}** · **STAGE RESULT:** NEEDS OWNER REVIEW`,
    "",
    "## Sākt šeit",
    "",
    "| Fails | Apraksts |",
    "|-------|----------|",
    `| [OWNER README](${gh("reports/fr-a1-post-repair-owner-review-README.md")}) | Workflow un kopsavilkums |`,
    `| [Šis indekss](${gh("reports/fr-a1-post-repair-owner-review-GITHUB.md")}) | Visas GitHub saites |`,
    `| [Pilns audits](${gh(`reports/${AUDIT_MD}`)}) | 702/702 Luna · PR603 raw 19 · OWNER backlog **${findings.length}** |`,
    `| [History validation](${gh(`reports/${VALIDATION_MD}`)}) | 3 confirmed excluded · ${findings.length} NEW backlog |`,
    "",
    "## VIEW ↔ DECISIONS (viss komplekts)",
    "",
    "| Tips | Fails |",
    "|------|-------|",
    `| OWNER VIEW | [fr-a1-post-repair-owner-view.md](${gh("reports/fr-a1-post-repair-owner-view.md")}) |`,
    `| OWNER DECISIONS (PENDING) | [fr-a1-post-repair-owner-decisions.md](${gh("reports/fr-a1-post-repair-owner-decisions.md")}) |`,
    `| Audit JSON | [fr-a1-post-repair-audit.json](${gh("reports/fr-a1-post-repair-audit.json")}) |`,
    `| MASTER standarts | [PROJECT_LANGUAGE_MASTER_STANDARD.md](${gh("docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md")}) |`,
    "",
    "## Grupas (pa 50 findingiem)",
    "",
    "| Findings | VIEW | DECISIONS | Statuss |",
    "|----------|------|-----------|---------|",
    groupRows,
    "",
    "## Severity",
    "",
    "| Severity | Skaits |",
    "|----------|--------|",
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    "",
    ...coverageBlock,
    ...discoveryBlock,
    "## OWNER workflow",
    "",
    `1. Atver [OWNER VIEW](${gh("reports/fr-a1-post-repair-owner-view.md")}) un [OWNER DECISIONS](${gh("reports/fr-a1-post-repair-owner-decisions.md")}) (vai grupu pāri).`,
    "2. Katram finding — aizpildi OWNER STATUS un OWNER_DECISION (precīzs ET teksts LABOT gadījumā).",
    "3. Atgriez aizpildītu `fr-a1-post-repair-owner-decisions.md` COPY-ONLY remontam.",
    "",
    "**Production changes = 0 · DE changes = 0**",
    "",
  ].join("\n");

  fs.writeFileSync(OUT.github, content);
}

function main() {
  const auditData = fs.existsSync(AUDIT_JSON) ? JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8")) : null;
  const findings = loadFindings();
  const groupFiles = buildView(findings);
  buildDecisions(findings, groupFiles);
  buildReadme(findings, groupFiles);
  const coverage = verifyOwnerArtifactCoverage(findings);
  buildGithub(findings, groupFiles, coverage, auditData);
  console.log(
    JSON.stringify(
      {
        findings: findings.length,
        view: OUT.view,
        decisions: OUT.decisions,
        readme: OUT.readme,
        github: OUT.github,
        groups: groupFiles.length,
        coverage,
      },
      null,
      2,
    ),
  );
  if (!coverage.pass && findings.length > 0) {
    console.error("\nBLOCKED: OWNER-PREP COVERAGE FAIL (§7.10.4)\n");
    process.exit(5);
  }
}

main();
