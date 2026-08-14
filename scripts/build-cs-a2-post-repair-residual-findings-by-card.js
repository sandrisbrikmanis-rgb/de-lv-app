#!/usr/bin/env node
"use strict";
/**
 * CS-DE A2 post-repair residual findings worklist (READ-ONLY).
 * Sources: reports/temp/cs-a2-post-repair-full-audit/*
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const A2_FILE = path.join(ROOT, "data/cs/a2.js");
const AUDIT_DIR = path.join(ROOT, "reports/temp/cs-a2-post-repair-full-audit");
const OUT_MD = path.join(ROOT, "reports/cs-a2-post-repair-residual-findings-by-card.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-a2-post-repair-residual-findings-by-card.json");

const EXPECTED = {
  totalRawFindings: 2559,
  deterministic: { count: 1984, CRITICAL: 1414, HIGH: 397, MEDIUM: 173, LOW: 0 },
  luna: { count: 575, CRITICAL: 6, HIGH: 164, MEDIUM: 304, LOW: 101 },
  combined: { CRITICAL: 1420, HIGH: 561, MEDIUM: 477, LOW: 101 },
};

function loadA2Words() {
  const code = fs.readFileSync(A2_FILE, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `a2-${entry.de}-${index}`;
  return `a2-${index}`;
}

function buildCardIndex(words) {
  const byId = new Map();
  const ambiguous = new Map();
  for (let i = 0; i < words.length; i++) {
    const id = entryId(words[i], i);
    if (byId.has(id)) {
      ambiguous.set(id, (ambiguous.get(id) || [byId.get(id)]).concat(i));
    } else {
      byId.set(id, i);
    }
  }
  return { byId, ambiguous };
}

function loadRepairScopeCardIds() {
  const ids = new Set();
  for (let g = 1; g <= 13; g++) {
    const id = String(g).padStart(2, "0");
    const specPath = path.join(ROOT, "scripts", `cs-a2-repair-group${id}-spec.json`);
    if (!fs.existsSync(specPath)) continue;
    const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
    for (const card of spec.cards) ids.add(card.cardId);
  }
  return ids;
}

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function normalizeSeverity(sev) {
  return String(sev || "MEDIUM").toUpperCase();
}

function collectAllFindings() {
  const det = loadJson(path.join(AUDIT_DIR, "deterministic-audit.json")).findings || [];
  const ling = (loadJson(path.join(AUDIT_DIR, "linguistic-audit.json")).findings || [])
    .filter((f) => {
      const st = String(f.status || "").toUpperCase();
      return st !== "PASS" && st !== "OK" && st !== "NO_FINDING";
    });

  const findings = [];
  let n = 0;
  for (const f of det) {
    n += 1;
    findings.push({
      findingNumber: n,
      findingSource: "deterministic",
      cardId: f.cardId,
      batch: f.batch,
      index: f.index,
      field: f.field,
      severity: normalizeSeverity(f.severity),
      status: f.status || "FINDING",
      currentCs: f.currentCs,
      de: f.de,
      lvSource: f.lvSource,
      problem: f.problem,
      recommendedCs: f.proposedCs,
      rationale: f.rationale,
      category: f.category,
      evidence: f.evidence || null,
      batchReference: f.batch || null,
      raw: f,
    });
  }
  for (const f of ling) {
    n += 1;
    findings.push({
      findingNumber: n,
      findingSource: "gpt-5.6-luna",
      cardId: f.cardId,
      batch: f.batch,
      index: f.index,
      field: f.field,
      severity: normalizeSeverity(f.severity),
      status: f.status || "FINDING",
      currentCs: f.currentCs,
      de: f.de,
      lvSource: f.lvSource,
      problem: f.reason || f.problem,
      recommendedCs: f.proposedCs,
      rationale: f.justification || f.rationale || null,
      category: f.category,
      confidence: f.confidence,
      evidence: f.evidence || null,
      batchReference: f.batch || null,
      raw: f,
    });
  }
  return { findings, detCount: det.length, lingCount: ling.length };
}

function countSeverity(findings) {
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    if (counts[f.severity] !== undefined) counts[f.severity] += 1;
  }
  return counts;
}

function findingDedupKey(f) {
  const cs = typeof f.currentCs === "string" ? f.currentCs : JSON.stringify(f.currentCs ?? "");
  const problem = String(f.problem ?? "");
  const rec = String(f.recommendedCs ?? "");
  return [
    f.findingSource,
    f.cardId,
    f.field,
    f.severity,
    cs,
    problem,
    rec,
  ].join("\x1f");
}

function reconcileSourceCounts(detFindings, lingFindings) {
  const detSev = countSeverity(detFindings);
  const lingSev = countSeverity(lingFindings);
  const checks = {
    deterministicCount: detFindings.length === EXPECTED.deterministic.count,
    lunaCount: lingFindings.length === EXPECTED.luna.count,
    totalCount: detFindings.length + lingFindings.length === EXPECTED.totalRawFindings,
    deterministicSeverity: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].every(
      (s) => detSev[s] === EXPECTED.deterministic[s],
    ),
    lunaSeverity: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].every(
      (s) => lingSev[s] === EXPECTED.luna[s],
    ),
  };
  return {
    pass: Object.values(checks).every(Boolean),
    checks,
    actual: {
      deterministic: { count: detFindings.length, ...detSev },
      luna: { count: lingFindings.length, ...lingSev },
      combined: countSeverity([...detFindings, ...lingFindings]),
    },
  };
}

function resolveCard(cardId, byId, ambiguous, words, finding = null) {
  if (byId.has(cardId)) {
    return { index: byId.get(cardId), cardId, status: "RESOLVED" };
  }
  const m = cardId.match(/^a2-(.+)-(\d+)$/);
  if (m) {
    const idx = Number(m[2]);
    if (idx >= 0 && idx < words.length && entryId(words[idx], idx) === cardId) {
      return { index: idx, cardId, status: "RESOLVED" };
    }
    if (idx >= 0 && idx < words.length && words[idx].de === m[1]) {
      return { index: idx, cardId: entryId(words[idx], idx), status: "RESOLVED_BY_INDEX" };
    }
  }
  if (ambiguous.has(cardId)) {
    return { index: null, cardId, status: "AMBIGUOUS_CARD_MAPPING", candidates: ambiguous.get(cardId) };
  }
  if (finding?.de) {
    const deMatches = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].de === finding.de) deMatches.push(i);
    }
    if (deMatches.length === 1) {
      const idx = deMatches[0];
      return { index: idx, cardId: entryId(words[idx], idx), status: "RESOLVED_BY_DE" };
    }
  }
  return { index: null, cardId, status: "CARD_NOT_FOUND" };
}

function formatFindingBlock(f, i) {
  const lines = [
    `#### Finding ${i}`,
    "",
    `| Field | Value |`,
    `|---|---|`,
    `| finding number | ${f.findingNumber} |`,
    `| source | ${f.findingSource} |`,
    `| batch | ${f.batch ?? f.batchReference ?? "—"} |`,
    `| card/index | ${f.cardId}${f.productionIndex != null ? ` / ${f.productionIndex}` : ""} |`,
    `| field | ${f.field} |`,
    `| severity | ${f.severity} |`,
    `| status | ${f.status} |`,
    `| Current CS text | ${String(f.currentCs ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ")} |`,
    `| DE source | ${String(f.de ?? "").replace(/\|/g, "\\|")} |`,
    `| LV reference | ${String(f.lvSource ?? "").replace(/\|/g, "\\|")} |`,
    `| Problem | ${String(f.problem ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ")} |`,
    `| Recommended CS | ${String(f.recommendedCs ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ")} |`,
    `| Rationale | ${String(f.rationale ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ")} |`,
  ];
  if (f.category) lines.push(`| category | ${f.category} |`);
  if (f.confidence != null) lines.push(`| confidence | ${f.confidence} |`);
  if (f.evidence) lines.push(`| evidence | ${String(f.evidence).replace(/\|/g, "\\|")} |`);
  lines.push("", "```json", JSON.stringify(f.raw, null, 2), "```", "");
  return lines.join("\n");
}

function main() {
  const words = loadA2Words();
  const { byId, ambiguous } = buildCardIndex(words);
  const repairScope = loadRepairScopeCardIds();

  const { findings: rawFindings, detCount, lingCount } = collectAllFindings();
  const detFindings = rawFindings.filter((f) => f.findingSource === "deterministic");
  const lingFindings = rawFindings.filter((f) => f.findingSource === "gpt-5.6-luna");

  const reconciliation = reconcileSourceCounts(detFindings, lingFindings);
  if (!reconciliation.pass) {
    console.error("STOP — AUDIT SOURCE COUNT MISMATCH");
    console.error(JSON.stringify(reconciliation, null, 2));
    process.exit(1);
  }

  const seen = new Set();
  const deduped = [];
  const duplicates = [];
  for (const f of rawFindings) {
    const k = findingDedupKey(f);
    if (seen.has(k)) duplicates.push(f);
    else {
      seen.add(k);
      deduped.push(f);
    }
  }

  const byCard = new Map();
  const unresolved = [];

  for (const f of deduped) {
    const resolved = resolveCard(f.cardId, byId, ambiguous, words, f);
    if (resolved.status === "CARD_NOT_FOUND" || resolved.status === "AMBIGUOUS_CARD_MAPPING") {
      unresolved.push({ finding: f, mapping: resolved });
      continue;
    }
    const idx = resolved.index;
    const canonicalId = entryId(words[idx], idx);
    if (!byCard.has(idx)) {
      byCard.set(idx, {
        cardId: canonicalId,
        productionIndex: idx,
        previousRepairScope: repairScope.has(canonicalId) ? "YES" : "NO",
        findings: [],
      });
    }
    byCard.get(idx).findings.push({
      ...f,
      productionIndex: idx,
      resolvedCardId: canonicalId,
      mappingStatus: resolved.status,
    });
  }

  const sortedCards = [...byCard.values()].sort((a, b) => a.productionIndex - b.productionIndex);
  const attachedCount = sortedCards.reduce((s, c) => s + c.findings.length, 0);

  const severityCounts = countSeverity(deduped);
  const sourceCounts = {
    deterministic: deduped.filter((f) => f.findingSource === "deterministic").length,
    luna: deduped.filter((f) => f.findingSource === "gpt-5.6-luna").length,
  };

  const residualFromRepairScope = sortedCards.filter((c) => c.previousRepairScope === "YES").length;
  const residualFromNonRepairScope = sortedCards.filter((c) => c.previousRepairScope === "NO").length;

  const summary = {
    a2TotalCards: words.length,
    rawResidualFindings: rawFindings.length,
    findingLevelDuplicatesRemoved: duplicates.length,
    finalResidualFindings: deduped.length,
    uniqueAffectedCards: sortedCards.length,
    cardsWithoutResidualFindings: words.length - sortedCards.length,
    residualCardsFromPrevious629RepairScope: residualFromRepairScope,
    residualCardsFromPrevious1011NonRepairScope: residualFromNonRepairScope,
    critical: severityCounts.CRITICAL,
    high: severityCounts.HIGH,
    medium: severityCounts.MEDIUM,
    low: severityCounts.LOW,
    deterministicFindings: sourceCounts.deterministic,
    lunaFindings: sourceCounts.luna,
    mappedFindings: attachedCount,
    unresolvedFindingMappings: unresolved.length,
    duplicateFindingRecords: duplicates.length,
    duplicateCardSections: 0,
    productionChanges: 0,
    deChanges: 0,
    reconciliation,
  };

  const validationPass = summary.a2TotalCards === 1640
    && summary.rawResidualFindings === EXPECTED.totalRawFindings
    && summary.mappedFindings === summary.finalResidualFindings
    && summary.unresolvedFindingMappings === 0
    && summary.duplicateCardSections === 0
    && summary.uniqueAffectedCards + summary.cardsWithoutResidualFindings === 1640;

  const jsonOut = {
    generatedAt: new Date().toISOString(),
    linguisticAuditModel: "GPT-5.6 Luna",
    productionFile: "data/cs/a2.js",
    auditSources: [
      "reports/cs-a2-post-repair-full-audit.md",
      "reports/temp/cs-a2-post-repair-full-audit.json",
      "reports/temp/cs-a2-post-repair-full-audit/deterministic-audit.json",
      "reports/temp/cs-a2-post-repair-full-audit/linguistic-audit.json",
    ],
    previousRepairScopeCardCount: repairScope.size,
    summary,
    validationPass,
    cards: sortedCards.map((c) => ({
      cardId: c.cardId,
      productionIndex: c.productionIndex,
      previousRepairScope: c.previousRepairScope,
      findingsCount: c.findings.length,
      productionObject: words[c.productionIndex],
      findings: c.findings,
    })),
    unresolved,
    duplicatesRemoved: duplicates,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(jsonOut, null, 2));

  const md = [];
  md.push("# CS–DE A2 POST-REPAIR RESIDUAL FINDINGS BY CARD", "");
  md.push("## Summary", "");
  md.push("| Metric | Value |");
  md.push("|---|---|");
  md.push(`| A2 total cards | ${summary.a2TotalCards} |`);
  md.push(`| Raw residual findings | ${summary.rawResidualFindings} |`);
  md.push(`| Finding-level duplicates removed | ${summary.findingLevelDuplicatesRemoved} |`);
  md.push(`| Final residual findings | ${summary.finalResidualFindings} |`);
  md.push(`| Unique affected cards | ${summary.uniqueAffectedCards} |`);
  md.push(`| Cards without residual findings | ${summary.cardsWithoutResidualFindings} |`);
  md.push(`| Residual cards from previous 629 repair scope | ${summary.residualCardsFromPrevious629RepairScope} |`);
  md.push(`| Residual cards from previous 1011 non-repair scope | ${summary.residualCardsFromPrevious1011NonRepairScope} |`);
  md.push(`| CRITICAL | ${summary.critical} |`);
  md.push(`| HIGH | ${summary.high} |`);
  md.push(`| MEDIUM | ${summary.medium} |`);
  md.push(`| LOW | ${summary.low} |`);
  md.push(`| Deterministic findings | ${summary.deterministicFindings} |`);
  md.push(`| GPT-5.6 Luna findings | ${summary.lunaFindings} |`);
  md.push(`| Unresolved finding mappings | ${summary.unresolvedFindingMappings} |`);
  md.push(`| Production changes | ${summary.productionChanges} |`);
  md.push(`| DE changes | ${summary.deChanges} |`);
  md.push("");

  sortedCards.forEach((card, cardIdx) => {
    const num = String(cardIdx + 1).padStart(3, "0");
    md.push(`## ${num} — \`${card.cardId}\``, "");
    md.push(`**A2 production index:** ${card.productionIndex}`);
    md.push(`**Previous repair scope:** ${card.previousRepairScope}`);
    md.push(`**Residual findings:** ${card.findings.length}`, "");
    md.push("### Current production object", "");
    md.push("```json");
    md.push(JSON.stringify(words[card.productionIndex], null, 2));
    md.push("```", "");
    md.push("### Residual findings", "");
    card.findings
      .sort((a, b) => a.findingNumber - b.findingNumber)
      .forEach((f, i) => md.push(formatFindingBlock(f, i + 1)));
  });

  if (unresolved.length) {
    md.push("## UNRESOLVED FINDING MAPPINGS", "");
    for (const u of unresolved) {
      md.push(`### Finding #${u.finding.findingNumber} — ${u.mapping.status}`, "");
      md.push(`- cardId: \`${u.finding.cardId}\``);
      md.push(`- field: \`${u.finding.field}\``);
      md.push(`- severity: ${u.finding.severity}`);
      md.push("");
    }
  }

  fs.writeFileSync(OUT_MD, md.join("\n"));

  console.log(JSON.stringify({
    status: validationPass ? "CS–DE A2 POST-REPAIR RESIDUAL WORKLIST — COMPLETE" : "FAIL",
    summary,
    outputMd: OUT_MD,
    outputJson: OUT_JSON,
    mdBytes: fs.statSync(OUT_MD).size,
    jsonBytes: fs.statSync(OUT_JSON).size,
    validationPass,
  }, null, 2));

  if (!validationPass) process.exit(1);
}

if (require.main === module) main();
module.exports = { main, collectAllFindings, entryId };
