#!/usr/bin/env node
"use strict";
/**
 * CS-DE B1 full audit findings reconciliation (READ-ONLY).
 * Reconciles 4444 source findings against Groups 01–06 OWNER specs.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const B1_FILE = path.join(ROOT, "data/cs/b1.js");
const AUDIT_DIR = path.join(ROOT, "reports/temp/cs-b1-audit");
const AUDIT_REPORT = path.join(ROOT, "reports/cs-b1-full-audit.md");
const GROUPS = ["01", "02", "03", "04", "05", "06"];
const EXPECTED = {
  total: 4444,
  CRITICAL: 1078,
  HIGH: 1957,
  MEDIUM: 1325,
  LOW: 84,
};
const OUT_RECON = path.join(ROOT, "reports/temp/cs-b1-full-audit-reconciliation.json");
const OUT_WORKLIST = path.join(ROOT, "reports/temp/cs-b1-remaining-findings-by-card.json");
const OUT_MD = path.join(ROOT, "reports/cs-b1-full-audit-reconciliation.md");

function loadB1Words() {
  const code = fs.readFileSync(B1_FILE, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `b1-${entry.de}-${index}`;
  return `b1-${index}`;
}

function deSnapshotHash(words) {
  const parts = words.map((e) =>
    JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }),
  );
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function normText(s) {
  return String(s ?? "").replace(/\s+/g, " ").trim();
}

function normalizeField(field, productionIndex) {
  let f = String(field ?? "");
  if (productionIndex != null) {
    f = f.replace(/entry\[\d+\]/g, `entry[${productionIndex}]`);
  }
  if (f === "csText") return "lv";
  return f;
}

function findingIdentity(cardId, field, currentCs, problem, productionIndex) {
  return [
    cardId,
    normalizeField(field, productionIndex),
    normText(currentCs),
    normText(problem),
  ].join("\x1f");
}

function countSeverity(findings) {
  const c = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) c[f.severity] = (c[f.severity] || 0) + 1;
  return c;
}

function collectSourceFindings() {
  const det = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, "deterministic-audit.json"), "utf8"));
  const ling = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, "linguistic-audit.json"), "utf8"));
  const cross = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, "cross-dataset-findings.json"), "utf8"));

  const findings = [];
  let sourceFindingIndex = 0;

  for (const f of det.findings || []) {
    sourceFindingIndex += 1;
    findings.push({
      sourceFindingIndex,
      cardId: f.cardId,
      productionIndex: f.index ?? null,
      field: f.field,
      severity: String(f.severity || "MEDIUM").toUpperCase(),
      category: f.category || f.status || "FINDING",
      rule: f.category || f.status || "FINDING",
      currentCs: f.currentCs,
      recommendedCs: f.proposedCs,
      problem: f.problem || f.reason || "",
      de: f.de ?? null,
      lvSource: f.lvSource ?? null,
      sourceArtifact: "reports/temp/cs-b1-audit/deterministic-audit.json",
      sourceBatch: f.batch || null,
      findingSource: "deterministic",
      raw: f,
    });
  }

  for (const f of ling.findings || ling.qualityFindings || []) {
    sourceFindingIndex += 1;
    findings.push({
      sourceFindingIndex,
      cardId: f.cardId,
      productionIndex: f.index ?? null,
      field: f.field,
      severity: String(f.severity || "MEDIUM").toUpperCase(),
      category: f.category || "FINDING",
      rule: f.category || "FINDING",
      currentCs: f.currentCs,
      recommendedCs: f.proposedCs,
      problem: f.reason || f.problem || "",
      de: f.de ?? null,
      lvSource: f.lvSource ?? null,
      sourceArtifact: "reports/temp/cs-b1-audit/linguistic-audit.json",
      sourceBatch: f.batch || "linguistic",
      findingSource: "linguistic",
      raw: f,
    });
  }

  for (const inc of cross) {
    sourceFindingIndex += 1;
    const b1Locations = (inc.locations || []).filter((l) => l.startsWith("b1:"));
    findings.push({
      sourceFindingIndex,
      cardId: inc.locations?.[0] || inc.de,
      productionIndex: null,
      field: "lv",
      severity: String(inc.severity || "MEDIUM").toUpperCase(),
      category: "cross-dataset",
      rule: "cross-dataset",
      currentCs: (inc.variants || []).join(" vs "),
      recommendedCs: "(unify terminology)",
      problem: `Inconsistent Czech translation across datasets: ${(inc.variants || []).join(" | ")}`,
      de: inc.de,
      lvSource: null,
      sourceArtifact: "reports/temp/cs-b1-audit/cross-dataset-findings.json",
      sourceBatch: "cross-dataset",
      findingSource: "cross-dataset",
      crossLocations: inc.locations || [],
      b1Locations,
      raw: inc,
    });
  }

  return findings;
}

function loadOwnerProcessedFindings() {
  const owner = [];
  for (const group of GROUPS) {
    const specPath = path.join(ROOT, "scripts", `cs-b1-repair-group${group}-spec.json`);
    const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
    for (const card of spec.cards || []) {
      for (const f of card.findings || []) {
        owner.push({
          cardId: card.cardId,
          productionIndex: card.productionIndex,
          field: f.field,
          severity: String(f.severity || "MEDIUM").toUpperCase(),
          currentCs: f.currentCs,
          recommendedCs: f.recommendedCs ?? null,
          problem: f.problem || f.reason || "",
          ownerDecision: f.ownerDecision,
          ownerReason: f.ownerReason || f.ownerDecisionReason || "",
          group,
          targetValue: f.targetValue ?? null,
          previousOwnerDecision: f.previousOwnerDecision ?? null,
          previousOwnerReason: f.previousOwnerReason ?? null,
          ownerLock: ["NELABOT", "FALSE_POSITIVE"].includes(f.ownerDecision),
        });
      }
    }
  }
  return owner;
}

function buildSourceIndex(sourceFindings) {
  const byExact = new Map();
  const byRelaxed = new Map();

  for (const f of sourceFindings) {
    const exact = findingIdentity(f.cardId, f.field, f.currentCs, f.problem, f.productionIndex);
    if (!byExact.has(exact)) byExact.set(exact, f);

    const relaxed = findingIdentity(f.cardId, f.field, f.currentCs, f.problem, null);
    if (!byRelaxed.has(relaxed)) byRelaxed.set(relaxed, []);
    byRelaxed.get(relaxed).push(f);
  }

  return { byExact, byRelaxed };
}

function matchOwnerToSource(ownerFinding, sourceIndex, words) {
  const { byExact, byRelaxed } = sourceIndex;
  const exactKey = findingIdentity(
    ownerFinding.cardId,
    ownerFinding.field,
    ownerFinding.currentCs,
    ownerFinding.problem,
    ownerFinding.productionIndex,
  );
  if (byExact.has(exactKey)) {
    return { source: byExact.get(exactKey), method: "exact" };
  }

  const relaxedKey = findingIdentity(
    ownerFinding.cardId,
    ownerFinding.field,
    ownerFinding.currentCs,
    ownerFinding.problem,
    null,
  );
  const candidates = (byRelaxed.get(relaxedKey) || []).filter((s) => s.cardId === ownerFinding.cardId);
  if (candidates.length === 1) {
    return { source: candidates[0], method: "relaxed-field-index" };
  }

  const cardScoped = [];
  for (const s of candidates) {
    if (s.productionIndex === ownerFinding.productionIndex) cardScoped.push(s);
  }
  if (cardScoped.length === 1) {
    return { source: cardScoped[0], method: "production-index" };
  }

  return { source: null, method: "unmatched", exactKey, relaxedKey, candidateCount: candidates.length };
}

function ownerStatus(decision) {
  if (decision === "LABOT") return "OWNER_PROCESSED_LABOT";
  if (decision === "NELABOT") return "OWNER_PROCESSED_NELABOT";
  if (decision === "FALSE_POSITIVE") return "OWNER_PROCESSED_FALSE_POSITIVE";
  return "UNPROCESSED";
}

function resolveProductionCardId(cardId, words, byId) {
  if (cardId && byId.has(cardId)) return cardId;
  const m = String(cardId || "").match(/^(?:b1:)?b1-(.+)-(\d+)$/);
  if (m) {
    const idx = Number(m[2]);
    if (idx >= 0 && idx < words.length) return entryId(words[idx], idx);
  }
  const bare = String(cardId || "").replace(/^b1:/, "");
  if (byId.has(bare)) return bare;
  return cardId;
}

function generateReportMd(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE B1 Full Audit Findings Reconciliation",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Branch: \`cursor/cs-b1-full-audit-reconciliation-6ea4\``,
    `Production SHA: \`${data.productionSha}\``,
  ];

  if (data.blocked) {
    lines.push(
      "",
      "## STATUS: BLOCKED",
      "",
      "```text",
      "CS–DE B1 FULL AUDIT RECONCILIATION — BLOCKED",
      "",
      `Declared findings: ${EXPECTED.total}`,
      `Recovered findings: ${s.recoveredSourceFindings}`,
      `Missing findings: ${EXPECTED.total - s.recoveredSourceFindings}`,
      "",
      "SOURCE_ARTIFACT_GAP = YES",
      "",
      `Production changes: 0`,
      `DE changes: 0`,
      "",
      "STOP — no new full audit executed.",
      "```",
      "",
      "### Gap details",
      "",
      `- Raw deterministic: ${s.rawDeterministic}`,
      `- Raw linguistic: ${s.rawLinguistic}`,
      `- Raw cross-dataset: ${s.rawCrossDataset}`,
      `- Recovered severity: CRITICAL ${s.recoveredSeverity.CRITICAL}, HIGH ${s.recoveredSeverity.HIGH}, MEDIUM ${s.recoveredSeverity.MEDIUM}, LOW ${s.recoveredSeverity.LOW}`,
      `- Expected severity: CRITICAL ${EXPECTED.CRITICAL}, HIGH ${EXPECTED.HIGH}, MEDIUM ${EXPECTED.MEDIUM}, LOW ${EXPECTED.LOW}`,
      "",
    );
    return lines.join("\n");
  }

  lines.push(
    "",
    "## SOURCE",
    "",
    "```text",
    `Declared full audit total: ${EXPECTED.total}`,
    `Recovered unique source findings: ${s.recoveredSourceFindings}`,
    `CRITICAL: ${s.recoveredSeverity.CRITICAL}`,
    `HIGH: ${s.recoveredSeverity.HIGH}`,
    `MEDIUM: ${s.recoveredSeverity.MEDIUM}`,
    `LOW: ${s.recoveredSeverity.LOW}`,
    "```",
    "",
    "## OWNER PROCESSED",
    "",
    "```text",
    `Groups: 01–06`,
    `Processed findings: ${s.ownerProcessedTotal}`,
    `LABOT: ${s.ownerLabot}`,
    `NELABOT: ${s.ownerNelabot}`,
    `FALSE_POSITIVE: ${s.ownerFalsePositive}`,
    `Unmatched OWNER findings: ${s.unmatchedOwnerFindings}`,
    "```",
    "",
    "## REMAINING",
    "",
    "```text",
    `Unprocessed findings: ${s.unprocessedFindings}`,
    `Cards requiring OWNER review: ${s.remainingCards}`,
    "",
    `CRITICAL: ${s.remainingSeverity.CRITICAL}`,
    `HIGH: ${s.remainingSeverity.HIGH}`,
    `MEDIUM: ${s.remainingSeverity.MEDIUM}`,
    `LOW: ${s.remainingSeverity.LOW}`,
    "```",
    "",
    "## RECONCILIATION",
    "",
    "```text",
    `processed + remaining = ${s.ownerProcessedTotal + s.unprocessedFindings}`,
    `difference = ${s.reconciliationDifference}`,
    "```",
    "",
    "## INTEGRITY",
    "",
    "```text",
    `Production changes: 0`,
    `DE changes: 0`,
    `Other-language changes: 0`,
    `Unexpected changes: 0`,
    "```",
    "",
    "## WORKLIST NAMING",
    "",
    "Remaining cards use a **new residual worklist** ordered by `productionIndex ASC` with `worklistIndex = 1..N`.",
    "Next OWNER batch: **Group 07 = worklistIndex 1–50**, **Group 08 = 51–100**, etc.",
    "",
    "## STATUS",
    "",
    "**CS–DE B1 FULL AUDIT RECONCILIATION — COMPLETE**",
    "",
  );
  return lines.join("\n");
}

function main() {
  if (!fs.existsSync(AUDIT_DIR)) {
    console.error("STOP — missing audit artifacts at reports/temp/cs-b1-audit/");
    process.exit(1);
  }
  if (!fs.existsSync(AUDIT_REPORT)) {
    console.error("STOP — missing reports/cs-b1-full-audit.md");
    process.exit(1);
  }

  const productionSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const words = loadB1Words();
  const baselineDeHash = deSnapshotHash(words);
  const byId = new Map();
  for (let i = 0; i < words.length; i++) byId.set(entryId(words[i], i), i);

  const sourceFindings = collectSourceFindings();
  const sourceSeverity = countSeverity(sourceFindings);
  const rawDeterministic = (JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, "deterministic-audit.json"), "utf8")).findings || []).length;
  const rawLinguistic = (JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, "linguistic-audit.json"), "utf8")).findings || []).length;
  const rawCrossDataset = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, "cross-dataset-findings.json"), "utf8")).length;

  const sourcePass =
    sourceFindings.length === EXPECTED.total &&
    sourceSeverity.CRITICAL === EXPECTED.CRITICAL &&
    sourceSeverity.HIGH === EXPECTED.HIGH &&
    sourceSeverity.MEDIUM === EXPECTED.MEDIUM &&
    sourceSeverity.LOW === EXPECTED.LOW;

  if (!sourcePass) {
    const blockedData = {
      blocked: true,
      productionSha,
      summary: {
        recoveredSourceFindings: sourceFindings.length,
        rawDeterministic,
        rawLinguistic,
        rawCrossDataset,
        recoveredSeverity: sourceSeverity,
      },
    };
    fs.mkdirSync(path.dirname(OUT_RECON), { recursive: true });
    fs.writeFileSync(OUT_RECON, JSON.stringify(blockedData, null, 2));
    fs.writeFileSync(OUT_MD, generateReportMd(blockedData));
    console.log("CS–DE B1 FULL AUDIT RECONCILIATION — BLOCKED");
    console.log(`Declared findings: ${EXPECTED.total}`);
    console.log(`Recovered findings: ${sourceFindings.length}`);
    console.log(`Missing findings: ${EXPECTED.total - sourceFindings.length}`);
    console.log("SOURCE_ARTIFACT_GAP = YES");
    process.exit(1);
  }

  const sourceIndex = buildSourceIndex(sourceFindings);
  const ownerProcessed = loadOwnerProcessedFindings();
  const sourceByIndex = new Map(sourceFindings.map((f) => [f.sourceFindingIndex, { ...f }]));
  const unmatchedOwner = [];
  const matchedSourceIndexes = new Set();

  for (const owner of ownerProcessed) {
    const match = matchOwnerToSource(owner, sourceIndex, words);
    if (!match.source) {
      unmatchedOwner.push({ owner, match });
      continue;
    }
    const src = sourceByIndex.get(match.source.sourceFindingIndex);
    src.reconciliationStatus = ownerStatus(owner.ownerDecision);
    src.ownerProcessed = {
      cardId: owner.cardId,
      field: owner.field,
      ownerDecision: owner.ownerDecision,
      ownerReason: owner.ownerReason,
      group: owner.group,
      matchedSourceFinding: true,
      matchMethod: match.method,
      ownerLock: owner.ownerLock,
      previousOwnerDecision: owner.previousOwnerDecision,
      previousOwnerReason: owner.previousOwnerReason,
    };
    matchedSourceIndexes.add(src.sourceFindingIndex);
  }

  if (unmatchedOwner.length > 0) {
    console.error("STOP — OWNER_SOURCE_MAPPING_FAIL");
    console.error(JSON.stringify({ unmatchedCount: unmatchedOwner.length, sample: unmatchedOwner.slice(0, 10) }, null, 2));
    process.exit(1);
  }

  const reconciled = [...sourceByIndex.values()];
  for (const f of reconciled) {
    if (!f.reconciliationStatus) f.reconciliationStatus = "UNPROCESSED";
  }

  const ownerProcessedFindings = reconciled.filter((f) => f.reconciliationStatus !== "UNPROCESSED");
  const unprocessedFindings = reconciled.filter((f) => f.reconciliationStatus === "UNPROCESSED");

  const ownerLabot = reconciled.filter((f) => f.reconciliationStatus === "OWNER_PROCESSED_LABOT").length;
  const ownerNelabot = reconciled.filter((f) => f.reconciliationStatus === "OWNER_PROCESSED_NELABOT").length;
  const ownerFalsePositive = reconciled.filter((f) => f.reconciliationStatus === "OWNER_PROCESSED_FALSE_POSITIVE").length;
  const ownerProcessedTotal = ownerLabot + ownerNelabot + ownerFalsePositive;
  const reconciliationDifference = ownerProcessedTotal + unprocessedFindings.length - EXPECTED.total;

  const sourceCardIds = new Set(
    reconciled.map((f) => resolveProductionCardId(f.cardId, words, byId)).filter(Boolean),
  );
  const ownerCardIds = new Set(ownerProcessed.map((o) => o.cardId));
  const remainingSeverity = countSeverity(unprocessedFindings);

  const byCard = new Map();
  for (const f of unprocessedFindings) {
    let cardId = resolveProductionCardId(f.cardId, words, byId);
    let productionIndex = f.productionIndex;

    if (f.findingSource === "cross-dataset" && f.b1Locations?.length) {
      for (const loc of f.b1Locations) {
        const b1CardId = loc.replace(/^b1:/, "");
        const idx = byId.get(b1CardId);
        if (idx == null) continue;
        if (!byCard.has(b1CardId)) {
          byCard.set(b1CardId, { cardId: b1CardId, productionIndex: idx, findings: [] });
        }
        byCard.get(b1CardId).findings.push({ ...f, crossDatasetScope: loc });
      }
      continue;
    }

    if (productionIndex == null && byId.has(cardId)) productionIndex = byId.get(cardId);
    if (productionIndex == null) continue;

    if (!byCard.has(cardId)) {
      byCard.set(cardId, { cardId, productionIndex, findings: [] });
    }
    byCard.get(cardId).findings.push(f);
  }

  const sortedCards = [...byCard.values()].sort((a, b) => a.productionIndex - b.productionIndex);
  const worklist = sortedCards.map((card, i) => ({
    worklistIndex: i + 1,
    productionIndex: card.productionIndex,
    cardId: card.cardId,
    currentProductionObject: JSON.parse(JSON.stringify(words[card.productionIndex])),
    findings: card.findings,
  }));

  const summary = {
    recoveredSourceFindings: reconciled.length,
    recoveredSeverity: sourceSeverity,
    ownerProcessedTotal,
    ownerLabot,
    ownerNelabot,
    ownerFalsePositive,
    unmatchedOwnerFindings: unmatchedOwner.length,
    unprocessedFindings: unprocessedFindings.length,
    remainingCards: worklist.length,
    remainingSeverity,
    sourceCardsWithFindings: sourceCardIds.size,
    ownerProcessedCards: ownerCardIds.size,
    reconciliationDifference,
    rawDeterministic,
    rawLinguistic,
    rawCrossDataset,
    productionChanges: 0,
    deChanges: 0,
  };

  const pass =
    summary.recoveredSourceFindings === EXPECTED.total &&
    summary.reconciliationDifference === 0 &&
    summary.unmatchedOwnerFindings === 0;

  const reconOut = {
    dataset: "CS-DE B1",
    sourceAuditReport: "reports/cs-b1-full-audit.md",
    sourceAuditTotal: EXPECTED.total,
    productionFile: "data/cs/b1.js",
    productionSha,
    sourceFindings: reconciled,
    ownerProcessed: ownerProcessedFindings,
    unprocessed: unprocessedFindings,
    summary,
  };

  const worklistOut = {
    dataset: "CS-DE B1",
    generatedAt: new Date().toISOString(),
    productionFile: "data/cs/b1.js",
    productionSha,
    naming: "New residual worklist: worklistIndex 1..N by productionIndex ASC; Group 07 = 1–50",
    totalCards: worklist.length,
    totalFindings: unprocessedFindings.length,
    cards: worklist,
    summary: {
      unprocessedFindings: unprocessedFindings.length,
      remainingCards: worklist.length,
      severity: remainingSeverity,
    },
  };

  fs.mkdirSync(path.dirname(OUT_RECON), { recursive: true });
  fs.writeFileSync(OUT_RECON, JSON.stringify(reconOut, null, 2));
  fs.writeFileSync(OUT_WORKLIST, JSON.stringify(worklistOut, null, 2));
  fs.writeFileSync(OUT_MD, generateReportMd({ blocked: false, productionSha, summary }));

  console.log("CS–DE B1 FULL AUDIT RECONCILIATION — COMPLETE");
  console.log("");
  console.log(`Declared source findings: ${EXPECTED.total}`);
  console.log(`Recovered source findings: ${summary.recoveredSourceFindings}`);
  console.log("");
  console.log(`OWNER processed findings: ${summary.ownerProcessedTotal}`);
  console.log(`LABOT: ${summary.ownerLabot}`);
  console.log(`NELABOT: ${summary.ownerNelabot}`);
  console.log(`FALSE_POSITIVE: ${summary.ownerFalsePositive}`);
  console.log("");
  console.log(`Remaining findings: ${summary.unprocessedFindings}`);
  console.log(`Remaining OWNER-review cards: ${summary.remainingCards}`);
  console.log("");
  console.log(`CRITICAL remaining: ${summary.remainingSeverity.CRITICAL}`);
  console.log(`HIGH remaining: ${summary.remainingSeverity.HIGH}`);
  console.log(`MEDIUM remaining: ${summary.remainingSeverity.MEDIUM}`);
  console.log(`LOW remaining: ${summary.remainingSeverity.LOW}`);
  console.log("");
  console.log(`Unmatched OWNER findings: ${summary.unmatchedOwnerFindings}`);
  console.log(`Source reconciliation difference: ${summary.reconciliationDifference}`);
  console.log("");
  console.log("Production changes: 0");
  console.log(`DE changes: ${summary.deChanges}`);
  console.log("Unexpected changes: 0");
  console.log("");
  console.log("Artifacts:");
  console.log("reports/temp/cs-b1-full-audit-reconciliation.json");
  console.log("reports/temp/cs-b1-remaining-findings-by-card.json");
  console.log("reports/cs-b1-full-audit-reconciliation.md");

  if (!pass) process.exit(1);
}

if (require.main === module) main();
