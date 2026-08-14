#!/usr/bin/env node
"use strict";
/**
 * CS-DE A2 final closure findings by-card worklist v2 (READ-ONLY).
 * Source: reports/temp/cs-a2-final-closure-audit.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const A2_FILE = path.join(ROOT, "data/cs/a2.js");
const CLOSURE_JSON = path.join(ROOT, "reports/temp/cs-a2-final-closure-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-a2-final-closure-findings-by-card-v2.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-a2-final-closure-findings-by-card-v2.json");

const EXPECTED = {
  total: 298,
  CRITICAL: 16,
  HIGH: 61,
  MEDIUM: 193,
  LOW: 28,
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

function resolveCard(cardId, productionIndex, byId, ambiguous, words, finding) {
  if (productionIndex != null && productionIndex >= 0 && productionIndex < words.length) {
    const actualId = entryId(words[productionIndex], productionIndex);
    if (actualId === cardId) {
      return { index: productionIndex, cardId: actualId, status: "RESOLVED_BY_PRODUCTION_INDEX" };
    }
  }
  if (byId.has(cardId)) {
    return { index: byId.get(cardId), cardId, status: "RESOLVED_BY_CARD_ID" };
  }
  const m = cardId.match(/^a2-(.+)-(\d+)$/);
  if (m) {
    const idx = Number(m[2]);
    if (idx >= 0 && idx < words.length && entryId(words[idx], idx) === cardId) {
      return { index: idx, cardId, status: "RESOLVED_BY_INDEX_SUFFIX" };
    }
    if (idx >= 0 && idx < words.length && words[idx].de === m[1]) {
      return { index: idx, cardId: entryId(words[idx], idx), status: "RESOLVED_BY_INDEX_DE" };
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
    return { index: null, cardId, status: "UNRESOLVED", reason: "AMBIGUOUS_CARD_MAPPING", candidates: ambiguous.get(cardId) };
  }
  return { index: null, cardId, status: "UNRESOLVED", reason: "CARD_NOT_FOUND" };
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
  const allFindings = closure.validatedRealFindings || [];
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

  allFindings.forEach((f, sourceFindingIndex) => {
    const resolved = resolveCard(f.cardId, f.productionIndex, byId, ambiguous, words, f);
    if (resolved.status === "UNRESOLVED" || resolved.index == null) {
      unresolved.push({ sourceFindingIndex, finding: f, mapping: resolved });
      return;
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
      sourceFindingIndex,
      ...f,
      mappingStatus: resolved.status,
      resolvedCardId: canonicalId,
      resolvedProductionIndex: idx,
    });
    mapped += 1;
  });

  const sortedCards = [...byCard.values()].sort((a, b) => a.productionIndex - b.productionIndex);
  const mappedFindingsList = sortedCards.flatMap((c) => c.findings);
  const mappedSeverity = countSeverity(mappedFindingsList);
  const totalFindingsCount = sortedCards.reduce((s, c) => s + c.findings.length, 0);

  const reconciliation = {
    sourceAuditFile: "reports/temp/cs-a2-final-closure-audit.json",
    productionFile: "data/cs/a2.js",
    sourceAuditModel: closure.meta?.linguisticAuditModel || "GPT-5.6 Luna",
    sourceCoverage: closure.summary?.coverage || "1640/1640",
    finalFindingsFromClosureAudit: EXPECTED.total,
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
    sumFindingsCount: totalFindingsCount,
  };

  const pass = allFindings.length === EXPECTED.total
    && mapped === EXPECTED.total
    && unresolved.length === 0
    && totalFindingsCount === EXPECTED.total
    && mappedSeverity.CRITICAL === EXPECTED.CRITICAL
    && mappedSeverity.HIGH === EXPECTED.HIGH
    && mappedSeverity.MEDIUM === EXPECTED.MEDIUM
    && mappedSeverity.LOW === EXPECTED.LOW
    && sortedCards.every((c, i) => c.productionIndex >= (i === 0 ? -1 : sortedCards[i - 1].productionIndex))
    && sortedCards.every((c) => {
      const obj = words[c.productionIndex];
      return entryId(obj, c.productionIndex) === c.cardId && c.findings.length >= 1;
    });

  const jsonOut = {
    metadata: {
      generatedAt: new Date().toISOString(),
      auditSource: reconciliation.sourceAuditFile,
      auditReport: "reports/cs-a2-final-closure-audit.md",
      productionFile: reconciliation.productionFile,
      linguisticAuditModel: reconciliation.sourceAuditModel,
      sourceCoverage: reconciliation.sourceCoverage,
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
  md.push("# CS–DE A2 FINAL CLOSURE FINDINGS BY CARD — V2", "");
  md.push("Navigation index. Full worklist: `reports/temp/cs-a2-final-closure-findings-by-card-v2.json`", "");
  md.push("## Card Index", "");
  md.push("| worklistIndex | productionIndex | cardId | de | findingsCount | CRITICAL | HIGH | MEDIUM | LOW |");
  md.push("|---:|---:|---|---|---:|---:|---:|---:|---:|");

  for (const card of jsonOut.cards) {
    const sev = countSeverity(card.findings);
    md.push(`| ${card.worklistIndex} | ${card.productionIndex} | \`${card.cardId}\` | ${card.de ?? "—"} | ${card.findingsCount} | ${sev.CRITICAL} | ${sev.HIGH} | ${sev.MEDIUM} | ${sev.LOW} |`);
  }

  md.push("");
  md.push("## Summary", "");
  md.push("| Metric | Value |");
  md.push("|---|---|");
  md.push(`| Unique affected cards | ${reconciliation.uniqueAffectedCards} |`);
  md.push(`| Total findings | ${totalFindingsCount}/298 |`);
  md.push(`| CRITICAL | ${reconciliation.criticalMapped} |`);
  md.push(`| HIGH | ${reconciliation.highMapped} |`);
  md.push(`| MEDIUM | ${reconciliation.mediumMapped} |`);
  md.push(`| LOW | ${reconciliation.lowMapped} |`);
  md.push(`| Unresolved mappings | ${reconciliation.unresolvedMappings} |`);
  md.push(`| Production changes | 0 |`);
  md.push(`| DE changes | 0 |`);
  md.push(`| **STATUS** | **${pass ? "PASS — READY FOR OWNER REVIEW / REPAIR GROUPING" : "FAIL"}** |`);
  md.push("");

  fs.writeFileSync(OUT_MD, md.join("\n"));

  const result = {
    status: pass ? "PASS" : "FAIL",
    finalFindings: `${allFindings.length}/${EXPECTED.total}`,
    mapped: `${mapped}/${EXPECTED.total}`,
    unresolved: unresolved.length,
    uniqueAffectedCards: sortedCards.length,
    critical: reconciliation.criticalMapped,
    high: reconciliation.highMapped,
    medium: reconciliation.mediumMapped,
    low: reconciliation.lowMapped,
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
