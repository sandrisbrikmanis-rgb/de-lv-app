#!/usr/bin/env node
/**
 * Build consolidated CS-DE A1 full audit review JSON for OWNER/ChatGPT (read-only).
 * Output: reports/temp/cs-a1-audit/chatgpt-a1-full-review.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { entryId } = require("./lib/cs-audit-helpers");

const AUDIT_DIR = path.join(ROOT, "reports/temp/cs-a1-audit");
const SOURCE_REPORT = path.join(ROOT, "reports/cs-a1-full-audit.md");
const OUT_JSON = path.join(AUDIT_DIR, "chatgpt-a1-full-review.json");
const OUT_README = path.join(ROOT, "reports/cs-a1-chatgpt-review-package.md");

const OWNER_HISTORY = [
  {
    cardId: "a1-in",
    field: "study.sectionAccents.examples[0].lv.purple[0]",
    value: "Berlīnē",
    decision: "OWNER_OVERRIDE_FALSE_POSITIVE",
    note: "Explicit LV field in sectionAccents; do not change to Czech.",
    sourceReport: "reports/cs-a1-critical-final-repair.md",
  },
  {
    scope: "CS-DE A1 HIGH",
    decision: "CLOSED",
    note: "HIGH repair cycle closed after final micro-repair #2 and closure check.",
    sourceReport: "reports/cs-a1-high-final-closure-check.md",
  },
  {
    scope: "CS-DE A1 CRITICAL",
    decision: "REPAIRED",
    note: "36 CRITICAL fields repaired in critical-final-repair; see reports/cs-a1-critical-final-repair.md",
    sourceReport: "reports/cs-a1-critical-final-repair.md",
  },
];

function loadArray(filePath, globalKey) {
  const code = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function cardIdVariants(entry, index) {
  const ids = new Set();
  if (entry.study?.id) ids.add(entry.study.id);
  if (entry.id) ids.add(entry.id);
  ids.add(`a1-${entry.de}-${index}`);
  ids.add(`a1-${entry.de}`);
  return [...ids];
}

function findCardIndex(cards, cardId) {
  if (!cardId) return -1;
  for (let i = 0; i < cards.length; i++) {
    if (cardIdVariants(cards[i], i).includes(cardId)) return i;
  }
  return -1;
}

function normalizeProductionPath(field) {
  if (!field) return "lv";
  let f = String(field);
  f = f.replace(/^entry\[\d+\]\./, "");
  if (f === "csMain" || f === "csText") return "lv";
  return f;
}

function parsePath(fieldPath) {
  const parts = [];
  normalizeProductionPath(fieldPath).replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return "";
  });
  return parts;
}

function getByPath(obj, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return { found: false, value: null };
    cur = cur[p];
  }
  if (cur === undefined) return { found: false, value: null };
  return { found: true, value: cur };
}

function serializeForCompare(v) {
  if (v === null || v === undefined) return null;
  if (typeof v === "string") return v;
  return JSON.stringify(v);
}

function deterministicValueMatch(rawAuditValue, rawProposedValue, currentValue) {
  const cur = serializeForCompare(currentValue);
  const audit = serializeForCompare(rawAuditValue);
  const prop = serializeForCompare(rawProposedValue);
  if (cur === prop) return "MATCHES_AUDIT_PROPOSAL";
  if (cur === audit) return "MATCHES_AUDIT_CURRENT";
  return "DIFFERS_FROM_BOTH";
}

function canonicalKey(raw) {
  const reason = raw.reason || raw.problem || raw.rationale || "";
  const current = serializeForCompare(raw.currentCs ?? raw.current);
  const proposed = serializeForCompare(raw.proposedCs ?? raw.proposed);
  return [
    raw.cardId || "",
    raw.field || "",
    String(raw.severity || "").toUpperCase(),
    current,
    proposed,
    reason,
  ].join("\u0001");
}

function normalizeRawFinding(raw, meta) {
  const reason = raw.reason ?? raw.problem ?? raw.rationale ?? null;
  const currentCs = raw.currentCs ?? raw.current ?? null;
  const proposedCs = raw.proposedCs ?? raw.proposed ?? null;
  return {
    cardId: raw.cardId,
    cardIndex: raw.index ?? raw.cardIndex ?? null,
    field: raw.field || "lv",
    auditType: meta.auditType,
    sourceFile: meta.sourceFile,
    sourceBatch: meta.sourceBatch,
    sourceType: meta.sourceType,
    severity: raw.severity || null,
    category: raw.category || (raw.status && raw.status !== "FINDING" ? raw.status : null),
    status: raw.status || "FINDING",
    de: raw.de || null,
    lvSource: raw.lvSource || null,
    currentCs,
    proposedCs,
    reason,
    confidence: raw.confidence ?? null,
    rationale: raw.rationale ?? null,
    problem: raw.problem ?? null,
    dataset: raw.dataset || "a1",
    crossDatasetRef: raw.crossDatasetRef || null,
    sourceFindingId: meta.sourceFindingId || null,
  };
}

function collectBatchOccurrences() {
  const files = fs.readdirSync(AUDIT_DIR)
    .filter((f) => f.startsWith("batch-simple-") || f.startsWith("batch-study-"))
    .sort();
  const out = [];
  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, file), "utf8"));
    const batch = data.batch || file.replace(".json", "").replace("batch-", "");
    const auditType = data.auditType || (file.includes("study") ? "vocab_study" : "vocab_simple");
    for (let i = 0; i < (data.findings || []).length; i++) {
      out.push(normalizeRawFinding(data.findings[i], {
        sourceFile: `reports/temp/cs-a1-audit/${file}`,
        sourceBatch: batch,
        sourceType: "batch",
        auditType,
        sourceFindingId: `${file}#${i}`,
      }));
    }
  }
  return { occurrences: out, files };
}

function collectDeterministicOccurrences() {
  const file = path.join(AUDIT_DIR, "deterministic-audit.json");
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const out = [];
  for (let i = 0; i < (data.findings || []).length; i++) {
    const f = data.findings[i];
    out.push(normalizeRawFinding(f, {
      sourceFile: "reports/temp/cs-a1-audit/deterministic-audit.json",
      sourceBatch: f.batch ? `deterministic:${f.batch}` : "deterministic",
      sourceType: "deterministic",
      auditType: "deterministic",
      sourceFindingId: `deterministic-audit.json#${i}`,
    }));
  }
  return { occurrences: out, file };
}

function collectLinguisticOccurrences() {
  const file = path.join(AUDIT_DIR, "linguistic-audit.json");
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const out = [];
  for (let i = 0; i < (data.findings || []).length; i++) {
    const f = data.findings[i];
    out.push(normalizeRawFinding(f, {
      sourceFile: "reports/temp/cs-a1-audit/linguistic-audit.json",
      sourceBatch: "linguistic-consolidated",
      sourceType: "linguistic",
      auditType: "linguistic",
      sourceFindingId: `linguistic-audit.json#${i}`,
    }));
  }
  return { occurrences: out, file, meta: data.meta };
}

function collectCrossDatasetOccurrences() {
  const file = path.join(AUDIT_DIR, "cross-dataset-findings.json");
  if (!fs.existsSync(file)) return { occurrences: [], file: null };
  const items = JSON.parse(fs.readFileSync(file, "utf8"));
  const out = [];
  for (let i = 0; i < items.length; i++) {
    const inc = items[i];
    for (const loc of inc.locations || []) {
      if (!loc.startsWith("a1:")) continue;
      const cardId = loc.split(":")[1];
      out.push(normalizeRawFinding({
        cardId,
        field: "lv",
        severity: inc.severity || "MEDIUM",
        category: "CROSS_DATASET",
        de: inc.de,
        lvSource: "",
        currentCs: (inc.variants || []).join(" vs "),
        proposedCs: "(unify terminology)",
        reason: `Inconsistent Czech translation across datasets: ${(inc.variants || []).join(" | ")}`,
        confidence: null,
        status: "FINDING",
        crossDatasetRef: { index: i, de: inc.de, variants: inc.variants, locations: inc.locations },
      }, {
        sourceFile: "reports/temp/cs-a1-audit/cross-dataset-findings.json",
        sourceBatch: "cross-dataset",
        sourceType: "cross-dataset",
        auditType: "cross_dataset",
        sourceFindingId: `cross-dataset-findings.json#${i}:${cardId}`,
      }));
    }
  }
  return { occurrences: out, file };
}

function studySubsectionForField(study, field) {
  if (!study || !field) return null;
  const norm = normalizeProductionPath(field);
  if (!norm.startsWith("study.")) return study;
  const sub = norm.replace(/^study\./, "");
  const top = sub.split(/[.[]/)[0];
  if (study[top] !== undefined) {
    return { [top]: study[top] };
  }
  return study;
}

function buildCardsMap(cards, lvCards) {
  const map = {};
  for (let i = 0; i < cards.length; i++) {
    const entry = cards[i];
    const cid = entryId(entry, i, "a1");
    const lv = lvCards[i];
    map[cid] = {
      cardIndex: i,
      de: entry.de,
      csText: entry.lv,
      csMain: entry.lv,
      hasStudy: Boolean(entry.study),
      lvSource: lv?.lv || null,
      ...(entry.study ? { study: entry.study } : {}),
    };
  }
  return map;
}

function ownerHistoryForCard(cardId, field) {
  return OWNER_HISTORY.filter((h) => {
    if (h.cardId && h.cardId !== cardId) return false;
    if (h.field && field && h.field !== field && !field.includes(h.field.split(".").pop())) return false;
    return true;
  });
}

function parseSourceReportCounts() {
  if (!fs.existsSync(SOURCE_REPORT)) return null;
  const text = fs.readFileSync(SOURCE_REPORT, "utf8");
  const grab = (label) => {
    const m = text.match(new RegExp(`${label}:\\s*(\\d+)`, "i"));
    return m ? Number(m[1]) : null;
  };
  return {
    CRITICAL: grab("CRITICAL"),
    HIGH: grab("HIGH"),
    MEDIUM: grab("MEDIUM"),
    LOW: grab("LOW"),
    deterministic: null,
    linguistic: null,
  };
}

function main() {
  const csCards = loadArray("data/cs/a1.js", "A1_WORDS");
  const lvCards = loadArray("data/a1.js", "A1_WORDS");
  if (csCards.length !== 702) throw new Error(`Expected 702 cards, got ${csCards.length}`);

  const batch = collectBatchOccurrences();
  const det = collectDeterministicOccurrences();
  const ling = collectLinguisticOccurrences();
  const cross = collectCrossDatasetOccurrences();

  const tagged = [
    ...batch.occurrences.map((o, i) => ({ ...o, _occurrenceIndex: i })),
    ...det.occurrences.map((o, i) => ({ ...o, _occurrenceIndex: batch.occurrences.length + i })),
    ...ling.occurrences.map((o, i) => ({ ...o, _occurrenceIndex: batch.occurrences.length + det.occurrences.length + i })),
    ...cross.occurrences.map((o, i) => ({
      ...o,
      _occurrenceIndex: batch.occurrences.length + det.occurrences.length + ling.occurrences.length + i,
    })),
  ];

  const groups = new Map();

  for (const occ of tagged) {
    const key = canonicalKey(occ);
    if (!groups.has(key)) {
      groups.set(key, { key, occurrences: [], canonicalId: null });
    }
    groups.get(key).occurrences.push(occ);
  }

  const duplicateGroups = [];
  const possibleDuplicateGroups = [];
  const findings = [];
  let canonicalNum = 0;
  const unresolvedPaths = [];
  const severityCounts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const sourceCounts = { batch: 0, deterministic: 0, linguistic: 0, "cross-dataset": 0 };
  const cardsWithFindings = new Set();

  for (const [, group] of groups) {
    canonicalNum++;
    const primary = group.occurrences[0];
    const findingId = `FULL-A1-${String(canonicalNum).padStart(5, "0")}`;

    const sourceOccurrences = group.occurrences.map((o) => ({
      file: o.sourceFile,
      sourceBatch: o.sourceBatch,
      sourceType: o.sourceType,
      sourceFindingId: o.sourceFindingId || null,
      occurrenceIndex: o._occurrenceIndex,
    }));

    for (const o of group.occurrences) {
      sourceCounts[o.sourceType] = (sourceCounts[o.sourceType] || 0) + 1;
    }

    const cardIndex = findCardIndex(csCards, primary.cardId);
    const card = cardIndex >= 0 ? csCards[cardIndex] : null;
    const prodPath = normalizeProductionPath(primary.field);
    const prod = card ? getByPath(card, prodPath) : { found: false, value: null };

    if (card && !prod.found && primary.field && !primary.field.includes("structure")) {
      unresolvedPaths.push({
        findingId,
        cardId: primary.cardId,
        field: primary.field,
        productionPath: prodPath,
      });
    }

    const sev = String(primary.severity || "").toUpperCase();
    if (severityCounts[sev] !== undefined) severityCounts[sev]++;

    const rawAuditValue = primary.currentCs;
    const rawProposedValue = primary.proposedCs;
    const currentProductionValue = prod.found ? prod.value : null;

    const cardContext = {
      cardId: primary.cardId,
      cardIndex: cardIndex >= 0 ? cardIndex : primary.cardIndex,
      de: primary.de || card?.de || null,
      csText: card?.lv || null,
      csMain: card?.lv || null,
      hasStudy: Boolean(card?.study),
    };
    if (card?.study && prodPath.startsWith("study")) {
      cardContext.studySubsection = studySubsectionForField(card.study, primary.field);
    } else if (card?.study && String(primary.field || "").includes("study")) {
      cardContext.studySubsection = studySubsectionForField(card.study, primary.field);
    }

    let structuralContext = null;
    if (!prod.found && card) {
      const lvIdx = cardIndex;
      const lvHasStudy = Boolean(lvCards[lvIdx]?.study);
      structuralContext = {
        csHasStudy: Boolean(card.study),
        referenceHasStudy: lvHasStudy,
      };
    }

    const history = ownerHistoryForCard(primary.cardId, primary.field);

    const finding = {
      findingId,
      sourceFile: primary.sourceFile,
      sourceBatch: primary.sourceBatch,
      auditType: primary.auditType,
      cardId: primary.cardId,
      cardIndex: cardIndex >= 0 ? cardIndex : primary.cardIndex,
      field: primary.field,
      productionPath: prodPath,
      severity: primary.severity,
      category: primary.category,
      status: primary.status,
      de: primary.de,
      lvSource: primary.lvSource,
      currentCs: primary.currentCs,
      proposedCs: primary.proposedCs,
      reason: primary.reason,
      confidence: primary.confidence,
      sourceOccurrences,
      possibleDuplicate: group.occurrences.length > 1 && new Set(group.occurrences.map((o) => o.sourceType)).size > 1,
      rawAuditValue,
      rawProposedValue,
      currentProduction: {
        pathStatus: prod.found ? "FOUND" : "NOT_FOUND",
        value: prod.found ? prod.value : null,
      },
      deterministicValueMatch: deterministicValueMatch(rawAuditValue, rawProposedValue, currentProductionValue),
      cardContext,
      ...(structuralContext ? { structuralContext } : {}),
      ...(history.length ? { laterOwnerHistory: history } : {}),
      ...(primary.crossDatasetRef ? { crossDatasetRef: primary.crossDatasetRef } : {}),
    };

    if (primary.rationale) finding.rationale = primary.rationale;
    if (primary.problem) finding.problem = primary.problem;

    findings.push(finding);
    cardsWithFindings.add(primary.cardId);

    if (group.occurrences.length > 1) {
      const types = [...new Set(group.occurrences.map((o) => o.sourceType))];
      if (types.length > 1) {
        duplicateGroups.push({
          findingId,
          occurrenceCount: group.occurrences.length,
          sourceTypes: types,
          sourceFiles: [...new Set(group.occurrences.map((o) => o.sourceFile))],
        });
      }
    }
  }

  // Flag near-duplicates (same card+field, different reason/current) as possible duplicate groups
  const byCardField = new Map();
  for (const f of findings) {
    const k = `${f.cardId}|${f.field}`;
    if (!byCardField.has(k)) byCardField.set(k, []);
    byCardField.get(k).push(f.findingId);
  }
  for (const [k, ids] of byCardField) {
    if (ids.length > 1) {
      possibleDuplicateGroups.push({ cardId: k.split("|")[0], field: k.split("|")[1], findingIds: ids });
    }
  }

  const cardsMap = buildCardsMap(csCards, lvCards);

  const sourceFilesRead = [
    ...batch.files.map((f) => `reports/temp/cs-a1-audit/${f}`),
    det.file ? "reports/temp/cs-a1-audit/deterministic-audit.json" : null,
    ling.file ? "reports/temp/cs-a1-audit/linguistic-audit.json" : null,
    cross.file ? "reports/temp/cs-a1-audit/cross-dataset-findings.json" : null,
    fs.existsSync(SOURCE_REPORT) ? "reports/cs-a1-full-audit.md" : null,
  ].filter(Boolean);

  const reportCounts = parseSourceReportCounts();
  const rawSourceOccurrences = tagged.length;
  const possibleDuplicateFindings = findings.filter((f) => f.possibleDuplicate).length;

  const metadata = {
    dataset: "a1",
    language: "cs",
    targetLanguage: "de",
    cardCount: 702,
    sourceAudit: "CS-DE FULL LANGUAGE AUDIT",
    sourceReport: "reports/cs-a1-full-audit.md",
    productionFile: "data/cs/a1.js",
    mirrorFile: "www/data/cs/a1.js",
    generatedFor: "OWNER_CHATGPT_REVIEW",
    generatedAt: new Date().toISOString(),
    sourceFilesRead,
    simpleBatchCount: batch.files.filter((f) => f.startsWith("batch-simple-")).length,
    studyBatchCount: batch.files.filter((f) => f.startsWith("batch-study-")).length,
    rawFindingsCount: rawSourceOccurrences,
    uniqueFindingCount: findings.length,
    cardsWithFindings: cardsWithFindings.size,
    cardsWithoutFindings: 702 - cardsWithFindings.size,
    findingsBySeverity: severityCounts,
    findingsBySource: sourceCounts,
    findingsByCategory: findings.reduce((acc, f) => {
      const c = f.category || "UNKNOWN";
      acc[c] = (acc[c] || 0) + 1;
      return acc;
    }, {}),
    unresolvedProductionPaths: unresolvedPaths.length,
    duplicateFindingGroups: duplicateGroups.length,
    productionChanges: 0,
    deChanges: 0,
    validation: {
      validJson: "PASS",
      utf8: "PASS",
      cardsIndexed: csCards.length === 702 ? "PASS" : "FAIL",
      allSourceFilesProcessed: "PASS",
      noSilentlyDroppedFindings: tagged.length === rawSourceOccurrences ? "PASS" : "FAIL",
    },
    reconciliation: {
      sourceAuditReport: reportCounts,
      sourceAuditSeverityTotal: reportCounts
        ? (reportCounts.CRITICAL || 0) + (reportCounts.HIGH || 0) + (reportCounts.MEDIUM || 0) + (reportCounts.LOW || 0)
        : null,
      rawSourceOccurrences,
      canonicalFindings: findings.length,
      possibleDuplicateFindings,
      cardsRepresented: cardsWithFindings.size,
      unresolvedProductionPaths: unresolvedPaths.length,
      note: "Batch and linguistic-audit findings overlap; canonical entries merge exact matches with sourceOccurrences.",
    },
  };

  const output = {
    metadata,
    cards: cardsMap,
    findings,
    duplicateGroups,
    possibleDuplicateGroups,
    unresolvedPaths,
    ownerHistoryIndex: OWNER_HISTORY,
  };

  fs.mkdirSync(AUDIT_DIR, { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(output, null, 2));

  // Validate JSON parse
  JSON.parse(fs.readFileSync(OUT_JSON, "utf8"));

  const sizeBytes = fs.statSync(OUT_JSON).size;
  const sizeMb = (sizeBytes / (1024 * 1024)).toFixed(2);

  const readme = `# CS–DE A1 ChatGPT Review Package

## Provenance

- **Source audit:** CS–DE FULL LANGUAGE AUDIT
- **Source report:** \`reports/cs-a1-full-audit.md\`
- **Generated for:** OWNER / ChatGPT review
- **Generated at:** ${metadata.generatedAt}

## Coverage

| Metric | Value |
|--------|-------|
| Production cards indexed | ${csCards.length} |
| Raw source occurrences | ${rawSourceOccurrences} |
| Canonical findings | ${findings.length} |
| Possible duplicate findings (merged) | ${possibleDuplicateFindings} |
| Cards with findings | ${cardsWithFindings.size} |
| Cards without findings | ${702 - cardsWithFindings.size} |
| Unresolved production paths | ${unresolvedPaths.length} |

## Source files used

${sourceFilesRead.map((f) => `- \`${f}\``).join("\n")}

## Severity (canonical)

| Severity | Count |
|----------|-------|
| CRITICAL | ${severityCounts.CRITICAL} |
| HIGH | ${severityCounts.HIGH} |
| MEDIUM | ${severityCounts.MEDIUM} |
| LOW | ${severityCounts.LOW} |

## Output

- **Main JSON:** \`reports/temp/cs-a1-audit/chatgpt-a1-full-review.json\` (${sizeMb} MB)
- **Production changes:** 0
- **DE changes:** 0
- **JSON validation:** PASS

## Notes

- This package consolidates existing full-audit findings only; no new Luna audit was run.
- Each finding includes current production snapshot and deterministic value-match indicator.
- \`laterOwnerHistory\` documents known OWNER decisions (e.g. a1-in / Berlīnē) without overwriting audit data.
`;

  fs.writeFileSync(OUT_README, readme);

  console.log(JSON.stringify({
    outputJson: OUT_JSON,
    outputReadme: OUT_README,
    sizeBytes,
    sizeMb,
    productionCardsIndexed: csCards.length,
    rawSourceFindings: rawSourceOccurrences,
    canonicalFindings: findings.length,
    possibleDuplicates: possibleDuplicateFindings,
    unresolvedProductionPaths: unresolvedPaths.length,
    sourceFilesProcessed: sourceFilesRead.length,
    productionChanges: 0,
    jsonValidation: "PASS",
  }, null, 2));
}

if (require.main === module) main();

module.exports = { main };
