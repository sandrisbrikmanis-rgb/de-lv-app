#!/usr/bin/env node
"use strict";
/**
 * CS-DE A2 final closure findings by-card worklist v3 (READ-ONLY).
 * Source: reports/temp/cs-a2-final-closure-audit-v2.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { loadAllSpecs } = require("./apply-cs-a2-final-closure-repair-v2-groups01-03");

const ROOT = path.join(__dirname, "..");
const A2_FILE = path.join(ROOT, "data/cs/a2.js");
const AUDIT_JSON = path.join(ROOT, "reports/temp/cs-a2-final-closure-audit-v2.json");
const OUT_MD = path.join(ROOT, "reports/cs-a2-final-closure-findings-by-card-v3.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-a2-final-closure-findings-by-card-v3.json");

const EXPECTED = {
  total: 190,
  CRITICAL: 0,
  HIGH: 33,
  MEDIUM: 124,
  LOW: 33,
  reopenedOwnerDecisions: 32,
  placeholderFindings: 52,
  foreignLanguageFindings: 20,
  staleSectionAccentsFindings: 32,
};

const PLACEHOLDER_PATTERNS = [
  { re: /czech text required/i, type: "CZECH_TEXT_REQUIRED" },
  { re: /czech replacement needed/i, type: "CZECH_REPLACEMENT_NEEDED" },
  { re: /term matching czech section text/i, type: "TERM_MATCHING_SECTION_TEXT" },
  { re: /czech equivalent/i, type: "CZECH_EQUIVALENT" },
  { re: /czech term from section text/i, type: "TERM_MATCHING_SECTION_TEXT" },
  { re: /\(needs czech/i, type: "CZECH_TEXT_REQUIRED" },
  { re: /\(czech text required\)/i, type: "CZECH_TEXT_REQUIRED" },
  { re: /TODO|FIXME/i, type: "OTHER" },
];

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
    if (byId.has(id)) ambiguous.set(id, (ambiguous.get(id) || [byId.get(id)]).concat(i));
    else byId.set(id, i);
  }
  return { byId, ambiguous };
}

function loadOwnerDecisionMap() {
  const { allCards } = loadAllSpecs();
  const map = new Map();
  for (const card of allCards) {
    for (const d of card.decisions || []) {
      if (d.decision !== "NELABOT" && d.decision !== "FALSE_POSITIVE") continue;
      map.set(`${card.cardId}\x1f${d.field}`, {
        previousOwnerDecision: d.decision,
        previousOwnerReason: d.ownerReason ?? d.note ?? null,
      });
    }
  }
  return map;
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

function classifyPlaceholder(finding) {
  const text = [finding.currentCs, finding.recommendedCs, finding.reason, finding.raw?.problem].filter(Boolean).join(" ");
  for (const p of PLACEHOLDER_PATTERNS) {
    if (p.re.test(text)) return { isPlaceholderFinding: true, placeholderType: p.type };
  }
  return { isPlaceholderFinding: false, placeholderType: null };
}

function classifyForeign(finding) {
  const prob = String(finding.reason || finding.raw?.problem || "").toLowerCase();
  if (!prob.includes("foreign remnant") && !prob.includes("lv_diacritic") && !prob.includes("lv_word")
    && !prob.includes("pl_char") && !prob.includes("sk_char")) {
    return { isForeignLanguageFinding: false, suspectedLanguage: null };
  }
  let suspectedLanguage = null;
  if (prob.includes("lv_")) suspectedLanguage = "LV";
  else if (prob.includes("pl_char")) suspectedLanguage = "PL";
  else if (prob.includes("sk_char")) suspectedLanguage = "SK";
  else if (prob.includes("foreign remnant")) {
    const m = prob.match(/foreign remnant[^:]*:?\s*([A-Z_]+)/i);
    if (m) suspectedLanguage = m[1];
  }
  return { isForeignLanguageFinding: true, suspectedLanguage };
}

function classifySectionAccents(finding) {
  const field = String(finding.field || "").toLowerCase();
  const prob = String(finding.reason || finding.raw?.problem || "").toLowerCase();
  if (!field.includes("sectionaccents") && !prob.includes("accent")) {
    return { isSectionAccentsFinding: false, sectionAccentsSubtype: null };
  }
  let sectionAccentsSubtype = "OTHER";
  if (prob.includes("not found")) sectionAccentsSubtype = "STALE";
  else if (prob.includes("foreign") || prob.includes("lv_") || prob.includes("pl_")) sectionAccentsSubtype = "FOREIGN";
  else if (prob.includes("language")) sectionAccentsSubtype = "LANGUAGE";
  return { isSectionAccentsFinding: true, sectionAccentsSubtype };
}

function enrichFinding(finding, ownerMap) {
  const key = `${finding.cardId}\x1f${finding.field}`;
  const owner = ownerMap.get(key);
  const previousOwnerDecision = finding.previousOwnerDecision ?? owner?.previousOwnerDecision ?? null;
  const previousOwnerReason = owner?.previousOwnerReason ?? null;
  const reopenedPreviousOwnerDecision = finding.validationStatus === "PREVIOUS_OWNER_DECISION_REOPENED"
    || (previousOwnerDecision != null && (previousOwnerDecision === "NELABOT" || previousOwnerDecision === "FALSE_POSITIVE"));
  const placeholder = classifyPlaceholder(finding);
  const foreign = classifyForeign(finding);
  const sectionAccents = classifySectionAccents(finding);

  return {
    sourceFindingIndex: finding.findingIndex ?? finding.sourceFindingIndex ?? null,
    ...finding,
    previousOwnerDecision,
    previousOwnerReason,
    reopenedPreviousOwnerDecision: reopenedPreviousOwnerDecision && previousOwnerDecision != null,
    isPlaceholderFinding: placeholder.isPlaceholderFinding,
    placeholderType: placeholder.placeholderType,
    isForeignLanguageFinding: foreign.isForeignLanguageFinding,
    suspectedLanguage: foreign.suspectedLanguage,
    isSectionAccentsFinding: sectionAccents.isSectionAccentsFinding,
    sectionAccentsSubtype: sectionAccents.sectionAccentsSubtype,
  };
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
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const allFindings = audit.validatedRealFindings || [];
  if (allFindings.length !== EXPECTED.total) {
    console.error(`STOP — expected ${EXPECTED.total} findings, got ${allFindings.length}`);
    process.exit(1);
  }
  const inputSev = countSeverity(allFindings);
  for (const k of Object.keys(EXPECTED)) {
    if (["total", "reopenedOwnerDecisions", "placeholderFindings", "foreignLanguageFindings", "staleSectionAccentsFindings"].includes(k)) continue;
    if (inputSev[k] !== EXPECTED[k]) {
      console.error(`STOP — severity ${k}: expected ${EXPECTED[k]}, got ${inputSev[k]}`);
      process.exit(1);
    }
  }

  const words = loadA2Words();
  const { byId, ambiguous } = buildCardIndex(words);
  const ownerMap = loadOwnerDecisionMap();
  const byCard = new Map();
  const unresolved = [];
  let mapped = 0;

  for (const raw of allFindings) {
    const f = enrichFinding(raw, ownerMap);
    const resolved = resolveCard(f.cardId, f.productionIndex, byId, ambiguous, words, f);
    if (resolved.status === "UNRESOLVED" || resolved.index == null) {
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
  const mappedFindings = sortedCards.flatMap((c) => c.findings);
  const mappedSev = countSeverity(mappedFindings);

  const reopened = mappedFindings.filter((f) => f.reopenedPreviousOwnerDecision);
  const reopenedNelabot = reopened.filter((f) => f.previousOwnerDecision === "NELABOT").length;
  const reopenedFalsePositive = reopened.filter((f) => f.previousOwnerDecision === "FALSE_POSITIVE").length;
  const placeholderCount = mappedFindings.filter((f) => f.isPlaceholderFinding).length;
  const foreignCount = mappedFindings.filter((f) => f.isForeignLanguageFinding).length;
  const staleSectionAccentsCount = mappedFindings.filter((f) => f.isSectionAccentsFinding && f.sectionAccentsSubtype === "STALE").length;

  const reconciliation = {
    sourceAuditFile: "reports/temp/cs-a2-final-closure-audit-v2.json",
    sourceAuditModel: audit.meta?.linguisticAuditModel || "GPT-5.6 Luna",
    sourceCoverage: audit.summary?.coverage || "1640/1640",
    productionFile: "data/cs/a2.js",
    generatedAt: new Date().toISOString(),
    readOnly: true,
    v2ValidatedFindings: EXPECTED.total,
    findingsProcessed: allFindings.length,
    findingsMappedToProductionCards: mapped,
    unresolvedMappings: unresolved.length,
    uniqueAffectedCards: sortedCards.length,
    cardsWithoutFindings: words.length - sortedCards.length,
    criticalMapped: `${mappedSev.CRITICAL}/${EXPECTED.CRITICAL}`,
    highMapped: `${mappedSev.HIGH}/${EXPECTED.HIGH}`,
    mediumMapped: `${mappedSev.MEDIUM}/${EXPECTED.MEDIUM}`,
    lowMapped: `${mappedSev.LOW}/${EXPECTED.LOW}`,
    severityInput: inputSev,
    severityMapped: mappedSev,
    reopenedPreviousOwnerDecisions: `${reopened.length}/${EXPECTED.reopenedOwnerDecisions}`,
    previousNelabotReopened: reopenedNelabot,
    previousFalsePositiveReopened: reopenedFalsePositive,
    placeholderFindings: `${placeholderCount}/${EXPECTED.placeholderFindings}`,
    foreignLanguageFindings: `${foreignCount}/${EXPECTED.foreignLanguageFindings}`,
    staleSectionAccentsFindings: `${staleSectionAccentsCount}/${EXPECTED.staleSectionAccentsFindings}`,
  };

  const pass = allFindings.length === EXPECTED.total
    && mapped === EXPECTED.total
    && unresolved.length === 0
    && mappedSev.CRITICAL === EXPECTED.CRITICAL
    && mappedSev.HIGH === EXPECTED.HIGH
    && mappedSev.MEDIUM === EXPECTED.MEDIUM
    && mappedSev.LOW === EXPECTED.LOW
    && reopened.length === EXPECTED.reopenedOwnerDecisions
    && sortedCards.every((c) => {
      const obj = words[c.productionIndex];
      return entryId(obj, c.productionIndex) === c.cardId && c.findings.length >= 1;
    })
    && mappedFindings.length === EXPECTED.total;

  const jsonOut = {
    metadata: {
      generatedAt: reconciliation.generatedAt,
      auditSource: reconciliation.sourceAuditFile,
      auditReport: "reports/cs-a2-final-closure-audit-v2.md",
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
  md.push("# CS–DE A2 FINAL CLOSURE FINDINGS BY CARD — V3", "");
  md.push("Navigation index. Full worklist: `reports/temp/cs-a2-final-closure-findings-by-card-v3.json`", "");
  md.push("## Card Index", "");
  md.push("| worklistIndex | productionIndex | cardId | de | findingsCount | CRITICAL | HIGH | MEDIUM | LOW | reopenedOwnerDecisions | placeholderFindings | foreignFindings | sectionAccentsFindings |");
  md.push("|---:|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|");

  for (const card of jsonOut.cards) {
    const sev = countSeverity(card.findings);
    const reopenedN = card.findings.filter((f) => f.reopenedPreviousOwnerDecision).length;
    const ph = card.findings.filter((f) => f.isPlaceholderFinding).length;
    const fr = card.findings.filter((f) => f.isForeignLanguageFinding).length;
    const sa = card.findings.filter((f) => f.isSectionAccentsFinding).length;
    md.push(`| ${card.worklistIndex} | ${card.productionIndex} | \`${card.cardId}\` | ${card.de ?? "—"} | ${card.findingsCount} | ${sev.CRITICAL} | ${sev.HIGH} | ${sev.MEDIUM} | ${sev.LOW} | ${reopenedN} | ${ph} | ${fr} | ${sa} |`);
  }

  md.push("");
  md.push("## Summary", "");
  md.push("| Metric | Value |");
  md.push("|---|---|");
  md.push(`| Unique affected cards | ${reconciliation.uniqueAffectedCards} |`);
  md.push(`| Total findings | ${mappedFindings.length}/190 |`);
  md.push(`| CRITICAL | ${reconciliation.criticalMapped} |`);
  md.push(`| HIGH | ${reconciliation.highMapped} |`);
  md.push(`| MEDIUM | ${reconciliation.mediumMapped} |`);
  md.push(`| LOW | ${reconciliation.lowMapped} |`);
  md.push(`| Reopened previous OWNER decisions | ${reconciliation.reopenedPreviousOwnerDecisions} |`);
  md.push(`| Previous NELABOT reopened | ${reconciliation.previousNelabotReopened} |`);
  md.push(`| Previous FALSE_POSITIVE reopened | ${reconciliation.previousFalsePositiveReopened} |`);
  md.push(`| Placeholder findings | ${reconciliation.placeholderFindings} |`);
  md.push(`| Foreign-language findings | ${reconciliation.foreignLanguageFindings} |`);
  md.push(`| Stale sectionAccents findings | ${reconciliation.staleSectionAccentsFindings} |`);
  md.push(`| Unresolved mappings | ${reconciliation.unresolvedMappings} |`);
  md.push(`| Production changes | 0 |`);
  md.push(`| DE changes | 0 |`);
  md.push(`| **STATUS** | **${pass ? "PASS — READY FOR OWNER REVIEW / REPAIR V3" : "FAIL"}** |`);
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
    reopenedPreviousOwnerDecisions: reconciliation.reopenedPreviousOwnerDecisions,
    previousNelabotReopened: reopenedNelabot,
    previousFalsePositiveReopened: reopenedFalsePositive,
    placeholderFindings: reconciliation.placeholderFindings,
    foreignLanguageFindings: reconciliation.foreignLanguageFindings,
    staleSectionAccentsFindings: reconciliation.staleSectionAccentsFindings,
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
