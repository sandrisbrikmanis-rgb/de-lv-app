#!/usr/bin/env node
"use strict";
/**
 * CS-DE A2 final closure findings by-card worklist (READ-ONLY).
 * Source: reports/temp/cs-a2-final-post-repair-closure-audit.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const A2_FILE = path.join(ROOT, "data/cs/a2.js");
const CLOSURE_JSON = path.join(ROOT, "reports/temp/cs-a2-final-post-repair-closure-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-a2-final-closure-findings-by-card.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-a2-final-closure-findings-by-card.json");

const EXPECTED = {
  total: 697,
  CRITICAL: 221,
  HIGH: 201,
  MEDIUM: 223,
  LOW: 52,
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

function resolveCard(cardId, byId, ambiguous, words, finding) {
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
  if (finding?.currentDe || finding?.raw?.de) {
    const de = finding.currentDe || finding.raw.de;
    const deMatches = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].de === de) deMatches.push(i);
    }
    if (deMatches.length === 1) {
      const idx = deMatches[0];
      return { index: idx, cardId: entryId(words[idx], idx), status: "RESOLVED_BY_DE" };
    }
  }
  if (ambiguous.has(cardId)) {
    return { index: null, cardId, status: "AMBIGUOUS_CARD_MAPPING", candidates: ambiguous.get(cardId) };
  }
  return { index: null, cardId, status: "CARD_NOT_FOUND" };
}

function formatFindingBlock(f, i) {
  const sources = f.sources || [f.source].filter(Boolean);
  const lines = [
    `#### Finding ${i}`,
    "",
    "| Field | Value |",
    "|---|---|",
    `| sources | ${sources.join(", ")} |`,
    `| source | ${f.source ?? "—"} |`,
    `| severity | ${f.severity} |`,
    `| category | ${f.category ?? "—"} |`,
    `| field | ${f.field} |`,
    `| status | ${f.status ?? "FINDING"} |`,
    `| batch | ${f.batch ?? "—"} |`,
    `| Current CS | ${String(f.currentCs ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ")} |`,
    `| Current DE | ${String(f.currentDe ?? f.raw?.de ?? "").replace(/\|/g, "\\|")} |`,
    `| Recommended CS | ${String(f.recommendedCs ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ")} |`,
    `| Reason | ${String(f.reason ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ")} |`,
    "",
    "```json",
    JSON.stringify(f.raw ?? f, null, 2),
    "```",
    "",
  ];
  return lines.join("\n");
}

function countSeverity(findings) {
  const c = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    const s = String(f.severity || "").toUpperCase();
    if (c[s] !== undefined) c[s] += 1;
  }
  return c;
}

function main() {
  const closure = JSON.parse(fs.readFileSync(CLOSURE_JSON, "utf8"));
  const allFindings = closure.finalValidatedFindings || [];
  if (allFindings.length !== EXPECTED.total) {
    console.error(`STOP — expected ${EXPECTED.total} findings, got ${allFindings.length}`);
    process.exit(1);
  }
  const inputSev = countSeverity(allFindings);
  for (const k of Object.keys(EXPECTED)) {
    if (k === "total") continue;
    if (inputSev[k] !== EXPECTED[k]) {
      console.error(`STOP — severity ${k}: expected ${EXPECTED[k]}, got ${inputSev[k]}`);
      process.exit(1);
    }
  }

  const words = loadA2Words();
  const { byId, ambiguous } = buildCardIndex(words);
  const byCard = new Map();
  const unresolved = [];
  let mapped = 0;

  for (const f of allFindings) {
    const resolved = resolveCard(f.cardId, byId, ambiguous, words, f);
    if (resolved.status === "CARD_NOT_FOUND" || resolved.status === "AMBIGUOUS_CARD_MAPPING") {
      unresolved.push({ finding: f, mapping: resolved });
      continue;
    }
    const idx = resolved.index;
    const canonicalId = entryId(words[idx], idx);
    if (!byCard.has(idx)) {
      byCard.set(idx, {
        productionIndex: idx,
        cardId: canonicalId,
        de: words[idx].de ?? null,
        findings: [],
      });
    }
    byCard.get(idx).findings.push({
      ...f,
      mappingStatus: resolved.status,
      resolvedCardId: canonicalId,
      resolvedProductionIndex: idx,
    });
    mapped += 1;
  }

  const sortedCards = [...byCard.values()].sort((a, b) => a.productionIndex - b.productionIndex);
  const mappedSev = countSeverity(allFindings.filter((_, i) => i < mapped || true));
  const mappedFindingsList = sortedCards.flatMap((c) => c.findings);
  const mappedSeverity = countSeverity(mappedFindingsList);

  const reconciliation = {
    finalUniqueFindingsFromClosureAudit: EXPECTED.total,
    findingsProcessed: allFindings.length,
    findingsMappedToProductionCards: mapped,
    unresolvedMappings: unresolved.length,
    uniqueAffectedCards: sortedCards.length,
    cardsWithoutClosureFindings: words.length - sortedCards.length,
    criticalMapped: `${mappedSeverity.CRITICAL}/${EXPECTED.CRITICAL}`,
    highMapped: `${mappedSeverity.HIGH}/${EXPECTED.HIGH}`,
    mediumMapped: `${mappedSeverity.MEDIUM}/${EXPECTED.MEDIUM}`,
    lowMapped: `${mappedSeverity.LOW}/${EXPECTED.LOW}`,
    severityInput: inputSev,
    severityMapped: mappedSeverity,
  };

  const pass = allFindings.length === EXPECTED.total
    && mapped + unresolved.length === EXPECTED.total
    && mappedSeverity.CRITICAL === EXPECTED.CRITICAL
    && mappedSeverity.HIGH === EXPECTED.HIGH
    && mappedSeverity.MEDIUM === EXPECTED.MEDIUM
    && mappedSeverity.LOW === EXPECTED.LOW
    && unresolved.length === 0
    && sortedCards.every((c) => {
      const obj = words[c.productionIndex];
      return entryId(obj, c.productionIndex) === c.cardId;
    });

  const jsonOut = {
    metadata: {
      generatedAt: new Date().toISOString(),
      auditSource: "reports/temp/cs-a2-final-post-repair-closure-audit.json",
      auditReport: "reports/cs-a2-final-post-repair-closure-audit.md",
      productionFile: "data/cs/a2.js",
      linguisticAuditModel: closure.meta?.linguisticAuditModel || "GPT-5.6 Luna",
      readOnly: true,
      productionChanges: 0,
      deChanges: 0,
      branch: execSync("git branch --show-current", { encoding: "utf8" }).trim(),
    },
    reconciliation,
    status: pass ? "PASS" : "FAIL",
    cards: sortedCards.map((c, i) => ({
      worklistIndex: i + 1,
      productionIndex: c.productionIndex,
      cardId: c.cardId,
      de: c.de,
      currentProductionObject: words[c.productionIndex],
      findingsCount: c.findings.length,
      findings: c.findings,
    })),
    unresolvedMappings: unresolved,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(jsonOut, null, 2));

  const md = [];
  md.push("# CS–DE A2 FINAL CLOSURE FINDINGS BY CARD", "");
  md.push("## Summary", "");
  md.push("| Metric | Value |");
  md.push("|---|---|");
  md.push(`| Final unique findings from closure audit | ${reconciliation.finalUniqueFindingsFromClosureAudit} |`);
  md.push(`| Findings processed | ${reconciliation.findingsProcessed} |`);
  md.push(`| Findings mapped to production cards | ${reconciliation.findingsMappedToProductionCards} |`);
  md.push(`| Unresolved mappings | ${reconciliation.unresolvedMappings} |`);
  md.push(`| Unique affected cards | ${reconciliation.uniqueAffectedCards} |`);
  md.push(`| Cards without closure findings | ${reconciliation.cardsWithoutClosureFindings} |`);
  md.push(`| CRITICAL mapped | ${reconciliation.criticalMapped} |`);
  md.push(`| HIGH mapped | ${reconciliation.highMapped} |`);
  md.push(`| MEDIUM mapped | ${reconciliation.mediumMapped} |`);
  md.push(`| LOW mapped | ${reconciliation.lowMapped} |`);
  md.push(`| Production changes | 0 |`);
  md.push(`| DE changes | 0 |`);
  md.push(`| **STATUS** | **${pass ? "PASS" : "FAIL"}** |`);
  md.push("");

  sortedCards.forEach((card, cardIdx) => {
    const num = String(cardIdx + 1).padStart(3, "0");
    md.push(`## ${num} — \`${card.cardId}\``, "");
    md.push(`**A2 production index:** ${card.productionIndex}`);
    md.push(`**DE:** ${card.de ?? "—"}`);
    md.push(`**Closure findings:** ${card.findings.length}`, "");
    md.push("### Current production object", "");
    md.push("```json");
    md.push(JSON.stringify(words[card.productionIndex], null, 2));
    md.push("```", "");
    md.push("### Closure findings", "");
    card.findings
      .sort((a, b) => String(a.severity).localeCompare(String(b.severity)) || String(a.field).localeCompare(String(b.field)))
      .forEach((f, i) => md.push(formatFindingBlock(f, i + 1)));
  });

  if (unresolved.length) {
    md.push("## UNRESOLVED MAPPINGS", "");
    for (const u of unresolved) {
      md.push(`### ${u.finding.cardId} — ${u.mapping.status}`, "");
      md.push(`- severity: ${u.finding.severity}`);
      md.push(`- field: ${u.finding.field}`);
      md.push(`- reason: ${u.mapping.status}`);
      if (u.mapping.candidates) md.push(`- candidates: ${u.mapping.candidates.join(", ")}`);
      md.push("");
      md.push("```json");
      md.push(JSON.stringify(u.finding, null, 2));
      md.push("```", "");
    }
  }

  fs.writeFileSync(OUT_MD, md.join("\n"));

  const result = {
    status: pass ? "PASS" : "FAIL",
    finalFindings: `${allFindings.length}/${EXPECTED.total}`,
    mapped,
    unresolved: unresolved.length,
    uniqueAffectedCards: sortedCards.length,
    critical: `${mappedSeverity.CRITICAL}/${EXPECTED.CRITICAL}`,
    high: `${mappedSeverity.HIGH}/${EXPECTED.HIGH}`,
    medium: `${mappedSeverity.MEDIUM}/${EXPECTED.MEDIUM}`,
    low: `${mappedSeverity.LOW}/${EXPECTED.LOW}`,
    currentProductionObjectsIncluded: `${sortedCards.length}/${sortedCards.length}`,
    productionChanges: 0,
    deChanges: 0,
    outputMd: OUT_MD,
    outputJson: OUT_JSON,
    mdBytes: fs.statSync(OUT_MD).size,
    jsonBytes: fs.statSync(OUT_JSON).size,
  };
  console.log(JSON.stringify(result, null, 2));
  if (!pass) process.exit(1);
}

if (require.main === module) main();
module.exports = { main };
