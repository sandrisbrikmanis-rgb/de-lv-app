#!/usr/bin/env node
/**
 * Consolidate CS-DE A1 audit batch findings into one JSON (read-only).
 * Output: reports/temp/cs-a1-audit/cs-a1-all-findings.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const AUDIT_DIR = path.join(ROOT, "reports", "temp", "cs-a1-audit");
const OUT_FILE = path.join(AUDIT_DIR, "cs-a1-all-findings.json");

function loadA1Cards() {
  const code = fs.readFileSync(path.join(ROOT, "data/cs/a1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function cardIdsForEntry(entry, index) {
  const ids = new Set();
  ids.add(entry.study?.id || `a1-${entry.de}-${index}`);
  ids.add(`a1-${entry.de}-${index}`);
  ids.add(`a1-${entry.de}`);
  return [...ids];
}

function normalizeFinding(raw, sourceBatch) {
  const f = { ...raw, sourceBatch };
  if (f.reason === undefined && f.problem !== undefined) {
    f.reason = f.problem;
  }
  if (f.category === undefined && f.status && f.status !== "FINDING") {
    f.category = f.status;
  }
  return f;
}

function dedupKey(cardId, f) {
  const cs = typeof f.currentCs === "string" ? f.currentCs : JSON.stringify(f.currentCs || "");
  const reason = f.reason || f.problem || "";
  return `${cardId}|${f.field || ""}|${cs}|${f.proposedCs || ""}|${reason}|${f.severity || ""}`;
}

function collectBatchFindings() {
  const files = fs.readdirSync(AUDIT_DIR)
    .filter((f) => f.startsWith("batch-simple-") || f.startsWith("batch-study-"))
    .sort();
  const all = [];
  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, file), "utf8"));
    const batchName = data.batch || file.replace(".json", "");
    for (const finding of data.findings || []) {
      all.push(normalizeFinding(finding, batchName));
    }
  }
  return { findings: all, sourceFileCount: files.length };
}

function collectDeterministicFindings() {
  const file = path.join(AUDIT_DIR, "deterministic-audit.json");
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  return (data.findings || []).map((f) =>
    normalizeFinding(f, `deterministic:${f.batch || "deterministic"}`)
  );
}

function collectCrossDatasetFindings() {
  const file = path.join(AUDIT_DIR, "cross-dataset-findings.json");
  if (!fs.existsSync(file)) return [];
  const items = JSON.parse(fs.readFileSync(file, "utf8"));
  const out = [];
  for (const inc of items) {
    for (const loc of inc.locations || []) {
      if (!loc.startsWith("a1:")) continue;
      const cardId = loc.split(":")[1];
      out.push(normalizeFinding({
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
      }, "cross-dataset"));
    }
  }
  return out;
}

function matchCardIndex(cards, finding) {
  const cid = finding.cardId;
  if (!cid) return -1;
  for (let i = 0; i < cards.length; i++) {
    if (cardIdsForEntry(cards[i], i).includes(cid)) return i;
  }
  return -1;
}

function main() {
  const cards = loadA1Cards();
  const { findings: batchFindings, sourceFileCount } = collectBatchFindings();
  const detFindings = collectDeterministicFindings();
  const crossFindings = collectCrossDatasetFindings();
  const allRaw = [...batchFindings, ...detFindings, ...crossFindings];

  const sourceCounts = {
    batchFiles: sourceFileCount,
    batchFindings: batchFindings.length,
    deterministicFindings: detFindings.length,
    crossDatasetFindings: crossFindings.length,
    totalRaw: allRaw.length,
  };

  const cardBuckets = cards.map((entry, index) => ({
    cardId: entry.study?.id || `a1-${entry.de}-${index}`,
    index,
    de: entry.de,
    findings: [],
  }));

  const globalSeen = new Set();
  let exactDuplicatesRemoved = 0;
  let unmatched = 0;

  for (const raw of allRaw) {
    const idx = matchCardIndex(cards, raw);
    if (idx < 0) {
      unmatched++;
      continue;
    }
    const cardId = cardBuckets[idx].cardId;
    const key = dedupKey(cardId, raw);
    if (globalSeen.has(key)) {
      exactDuplicatesRemoved++;
      continue;
    }
    globalSeen.add(key);

    const { cardId: _cid, batch, dataset, problem, rationale, ...rest } = raw;
    const finding = { ...rest };
    if (rationale !== undefined) finding.rationale = rationale;
    cardBuckets[idx].findings.push(finding);
  }

  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  let totalFindings = 0;
  let cardsWithFindings = 0;
  for (const c of cardBuckets) {
    totalFindings += c.findings.length;
    if (c.findings.length > 0) cardsWithFindings++;
    for (const f of c.findings) {
      const s = String(f.severity || "").toUpperCase();
      if (sev[s] !== undefined) sev[s]++;
    }
  }

  const output = {
    dataset: "a1",
    audit: "CS-DE A1 FULL AUDIT",
    totalCards: cards.length,
    consolidatedAt: new Date().toISOString(),
    sourceCounts,
    validation: {
      exactDuplicatesRemoved,
      unmatchedFindings: unmatched,
      cardsWithFindings,
      cardsWithoutFindings: cards.length - cardsWithFindings,
      totalFindings,
      severity: sev,
    },
    cards: cardBuckets.map(({ cardId, index, findings }) => ({ cardId, index, findings })),
  };

  fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2));

  console.log(JSON.stringify({
    output: OUT_FILE,
    cardsCount: cards.length,
    cardsWithFindings,
    cardsWithoutFindings: cards.length - cardsWithFindings,
    totalFindings,
    severity: sev,
    sourceBatchFiles: sourceFileCount,
    exactDuplicatesRemoved,
    unmatchedFindings: unmatched,
    allSourceFindingsAccounted: unmatched === 0,
    productionChanges: 0,
  }, null, 2));
}

main();
