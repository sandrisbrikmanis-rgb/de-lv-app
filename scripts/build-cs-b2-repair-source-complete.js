#!/usr/bin/env node
"use strict";
/**
 * Build consolidated CS-DE B2 repair source (READ-ONLY).
 * Usage: node scripts/build-cs-b2-repair-source-complete.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const AUDIT_DIR = path.join(ROOT, "reports/temp/cs-b2-audit");
const OUT_MD = path.join(ROOT, "reports/cs-b2-repair-source-complete.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-b2-repair-source-complete.json");
const DATASET = "b2";
const TOTAL_OBJECTS = 2118;
const BATCH_SIZE = 50;

const PLACEHOLDER_RE = /^\((czech text required|czech replacement needed|unify terminology)\)$/i;

function serializeValue(value) {
  if (value === null || value === undefined) return "—";
  if (typeof value === "object") return JSON.stringify(value, null, 2);
  return String(value);
}

function buildIndexMaps(words) {
  const idToIndex = new Map();
  const deToIndices = new Map();
  words.forEach((entry, index) => {
    const id = entryId(entry, index);
    idToIndex.set(id, index);
    const deKey = String(entry.de || "").toLowerCase();
    if (!deToIndices.has(deKey)) deToIndices.set(deKey, []);
    deToIndices.get(deKey).push(index);
    if (entry.study?.id) idToIndex.set(entry.study.id, index);
  });
  return { idToIndex, deToIndices };
}

function resolveCardIndex(cardId, deSource, source, idToIndex, deToIndices) {
  if (cardId && idToIndex.has(cardId)) return { cardIndex: idToIndex.get(cardId), resolvedCardId: cardId };

  const deKey = String(deSource || "").toLowerCase();
  if (deKey && deToIndices.has(deKey)) {
    const indices = deToIndices.get(deKey);
    if (indices.length === 1) {
      const idx = indices[0];
      return { cardIndex: idx, resolvedCardId: entryId(wordsRef[idx], idx), cardIdNote: `audit cardId "${cardId}" resolved via DE match "${deSource}"` };
    }
    if (indices.length > 1) {
      const batchIds = new Set(source?.batchCardIds || []);
      const inBatch = indices.filter((idx) => batchIds.has(entryId(wordsRef[idx], idx)));
      if (inBatch.length === 1) {
        const idx = inBatch[0];
        return { cardIndex: idx, resolvedCardId: entryId(wordsRef[idx], idx), cardIdNote: `audit cardId "${cardId}" resolved via DE+batch match "${deSource}"` };
      }
    }
  }

  const batchIds = source?.batchCardIds;
  if (Array.isArray(batchIds)) {
    for (const bid of batchIds) {
      if (idToIndex.has(bid)) return { cardIndex: idToIndex.get(bid), resolvedCardId: bid, cardIdNote: `audit cardId "${cardId}" resolved via batch cardId "${bid}"` };
    }
  }

  const m = String(cardId || "").match(/-(\d+)$/);
  if (m) {
    const idx = Number(m[1]);
    if (idx >= 0 && idx < TOTAL_OBJECTS) return { cardIndex: idx, resolvedCardId: cardId };
  }

  return { cardIndex: null, resolvedCardId: cardId };
}

let wordsRef = [];

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/cs/b2.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function loadLvWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/b2.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `b2-${entry.de}-${index}`;
  return `b2-${index}`;
}

function batchLabelForIndex(cardIndex) {
  const start = Math.floor(cardIndex / BATCH_SIZE) * BATCH_SIZE;
  const end = Math.min(start + BATCH_SIZE, TOTAL_OBJECTS);
  const pad = (n) => String(n).padStart(3, "0");
  return `${pad(start + 1)}-${pad(end)}`;
}

function normalizeField(field, cardIndex) {
  const f = String(field || "");
  if (f.startsWith("entry[")) return f;
  if (f === "csText" || f === "lv") return `entry[${cardIndex}].${f}`;
  if (f.startsWith("study.")) return `entry[${cardIndex}].${f}`;
  return `entry[${cardIndex}].${f}`;
}

function dedupeKey(f) {
  return [
    f.cardId,
    f.field,
    serializeValue(f.currentCs),
    f.problem,
  ].join("\0");
}

function isMissingRecommendation(value) {
  if (value === null || value === undefined) return true;
  const s = String(value).trim();
  if (!s) return true;
  return PLACEHOLDER_RE.test(s);
}

function repairValueStatus(recommendedCs) {
  return isMissingRecommendation(recommendedCs) ? "MISSING_RECOMMENDATION" : "HAS_RECOMMENDATION";
}

function normalizeRaw(raw, source) {
  const cardId = raw.cardId || raw.id;
  const field = raw.field || raw.path || "—";
  const currentCs = raw.currentCs ?? raw.currentCsText ?? raw.text ?? "—";
  const recommendedCs = raw.proposedCs ?? raw.recommendedCs ?? "";
  const problem = raw.problem || raw.reason || "—";
  const severity = String(raw.severity || "MEDIUM").toUpperCase();
  const status = raw.status || raw.category || "FINDING";
  const rationale = raw.rationale || raw.reason || "—";
  const confidence = raw.confidence ?? null;
  const batch = raw.batch || source.batch || null;

  return {
    dataset: DATASET,
    batch,
    cardId,
    field,
    severity,
    status,
    deSource: raw.de || raw.deSource || "—",
    lvReference: raw.lvSource || raw.lvReference || "—",
    currentCs,
    recommendedCs,
    repairValueStatus: repairValueStatus(recommendedCs),
    problem,
    rationale,
    confidence,
    sources: [source],
    sourceType: source.type,
  };
}

function mergeFinding(existing, incoming) {
  const merged = { ...existing };
  const srcKeys = new Set(existing.sources.map((s) => `${s.type}:${s.location}`));
  for (const s of incoming.sources) {
    const k = `${s.type}:${s.location}`;
    if (!srcKeys.has(k)) {
      merged.sources.push(s);
      srcKeys.add(k);
    }
  }
  return merged;
}

function loadAllRawFindings() {
  const raw = [];

  const det = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, "deterministic-audit.json"), "utf8"));
  for (const f of det.findings || []) {
    raw.push({
      ...f,
      _source: { type: "deterministic", location: "reports/temp/cs-b2-audit/deterministic-audit.json" },
    });
  }

  for (const name of fs.readdirSync(AUDIT_DIR).sort()) {
    if (!name.startsWith("batch-")) continue;
    const filePath = `reports/temp/cs-b2-audit/${name}`;
    const batch = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, name), "utf8"));
    for (const f of batch.findings || []) {
      raw.push({
        ...f,
        batch: batch.batch,
        _source: {
          type: batch.auditType || "linguistic",
          location: filePath,
          batch: batch.batch,
          batchCardIds: batch.cardIds || [],
        },
      });
    }
  }

  const cross = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, "cross-dataset-findings.json"), "utf8"));
  for (const inc of cross) {
    const b2Loc = (inc.locations || []).find((l) => l.startsWith("b2:"));
    const loc = b2Loc || inc.locations?.[0];
    if (!loc) continue;
    const cardId = String(loc).includes(":") ? String(loc).split(":")[1] : loc;
    raw.push({
      cardId,
      field: "csText",
      severity: inc.severity || "MEDIUM",
      status: "FINDING",
      currentCs: (inc.variants || []).join(" | "),
      de: inc.de,
      lvSource: "—",
      problem: `Cross-dataset Czech inconsistency for DE "${inc.de}": ${(inc.variants || []).join(" | ")}`,
      proposedCs: "(unify terminology)",
      rationale: "Cross-dataset consistency pass",
      batch: "cross-dataset",
      _source: { type: "cross-dataset", location: "reports/temp/cs-b2-audit/cross-dataset-findings.json", crossLocation: loc, allLocations: inc.locations },
    });
  }

  return raw;
}

function enrichWithIndex(findings, words, lvWords) {
  wordsRef = words;
  const { idToIndex, deToIndices } = buildIndexMaps(words);

  return findings.map((f) => {
    const primarySource = f.sources[0] || {};
    const resolved = resolveCardIndex(f.cardId, f.deSource, primarySource, idToIndex, deToIndices);
    const cardIndex = resolved.cardIndex;
    if (cardIndex === null || cardIndex < 0 || cardIndex >= words.length) {
      return { ...f, cardIndex: null, malformed: true };
    }
    const entry = words[cardIndex];
    const lvEntry = lvWords[cardIndex];
    const field = normalizeField(f.field, cardIndex);
    const lvReference = f.lvReference !== "—" ? f.lvReference : (lvEntry?.lv || entry?.lv || "—");
    const deSource = f.deSource !== "—" ? f.deSource : (entry?.de || "—");
    const batch = f.batch && !String(f.batch).startsWith("simple-") && !String(f.batch).startsWith("study-")
      ? f.batch
      : batchLabelForIndex(cardIndex);
    return {
      ...f,
      cardIndex,
      cardId: resolved.resolvedCardId || f.cardId,
      auditCardId: f.cardId !== resolved.resolvedCardId ? f.cardId : undefined,
      cardIdNote: resolved.cardIdNote,
      field,
      lvReference,
      deSource,
      batch,
      currentCsDisplay: serializeValue(f.currentCs),
      recommendedCsDisplay: serializeValue(f.recommendedCs),
      malformed: false,
    };
  });
}

function consolidate(rawFindings) {
  const map = new Map();
  const consolidatedRecords = [];

  for (const raw of rawFindings) {
    const norm = normalizeRaw(raw, raw._source);
    const key = dedupeKey(norm);
    if (map.has(key)) {
      const merged = mergeFinding(map.get(key), norm);
      map.set(key, merged);
      consolidatedRecords.push({ key, sources: norm.sources.map((s) => s.location) });
    } else {
      map.set(key, norm);
    }
  }

  return { findings: [...map.values()], consolidatedRecords };
}

function formatMdFinding(f, n) {
  const lines = [
    `### Finding ${n}: ${f.cardId}`,
    "",
    `- **dataset:** ${f.dataset}`,
    `- **batch:** ${f.batch}`,
    `- **cardIndex:** ${f.cardIndex}`,
    `- **cardId:** ${f.cardId}`,
    `- **field:** ${f.field}`,
    `- **severity:** ${f.severity}`,
    `- **status:** ${f.status}`,
    `- **DE source:** ${f.deSource}`,
    `- **LV reference:** ${f.lvReference}`,
    `- **CURRENT CS exact value:**`,
    "```",
    f.currentCsDisplay || serializeValue(f.currentCs),
    "```",
    `- **Recommended CS exact value:**`,
    "```",
    f.recommendedCsDisplay || serializeValue(f.recommendedCs),
    "```",
    `- **REPAIR_VALUE_STATUS:** ${f.repairValueStatus}`,
    `- **problem:** ${f.problem}`,
    `- **rationale:** ${f.rationale}`,
  ];
  if (f.confidence !== null && f.confidence !== undefined) {
    lines.push(`- **confidence:** ${f.confidence}`);
  }
  if (f.cardIdNote) lines.push(`- **cardId resolution:** ${f.cardIdNote}`);
  if (f.auditCardId) lines.push(`- **audit cardId (raw):** ${f.auditCardId}`);
  lines.push(`- **source artifact / source location:** ${f.sources.map((s) => `${s.location}${s.batch ? ` (${s.batch})` : ""}`).join("; ")}`);
  if (f.sources.length > 1) {
    lines.push(`- **consolidated sources:** ${f.sources.length}`);
  }
  lines.push("");
  return lines.join("\n");
}

function groupFindings(findings) {
  const groups = new Map();
  for (const f of findings) {
    const start = Math.floor((f.cardIndex ?? 0) / BATCH_SIZE) * BATCH_SIZE;
    if (!groups.has(start)) groups.set(start, []);
    groups.get(start).push(f);
  }
  for (const arr of groups.values()) {
    arr.sort((a, b) => (a.cardIndex - b.cardIndex) || a.field.localeCompare(b.field));
  }
  return [...groups.entries()].sort((a, b) => a[0] - b[0]);
}

function severityCounts(findings) {
  const c = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, OTHER: 0 };
  for (const f of findings) {
    if (c[f.severity] !== undefined) c[f.severity]++;
    else c.OTHER++;
  }
  return c;
}

function main() {
  const words = loadWords();
  const lvWords = loadLvWords();
  if (words.length !== TOTAL_OBJECTS) {
    throw new Error(`Expected ${TOTAL_OBJECTS} B2 cards, got ${words.length}`);
  }

  const raw = loadAllRawFindings();
  const { findings: consolidated, consolidatedRecords } = consolidate(raw);
  const enriched = enrichWithIndex(consolidated, words, lvWords);
  enriched.sort((a, b) => (a.cardIndex - b.cardIndex) || a.field.localeCompare(b.field));

  const malformed = enriched.filter((f) => f.malformed);
  const valid = enriched.filter((f) => !f.malformed);
  const sev = severityCounts(valid);
  const missingRec = valid.filter((f) => f.repairValueStatus === "MISSING_RECOMMENDATION").length;
  const uniqueCards = new Set(valid.map((f) => f.cardId)).size;
  const groups = groupFindings(valid);

  const expected = { CRITICAL: 99, HIGH: 652, MEDIUM: 535, LOW: 55 };
  const gates = {
    b2Coverage: words.length === TOTAL_OBJECTS,
    criticalMatch: sev.CRITICAL === expected.CRITICAL,
    highMatch: sev.HIGH === expected.HIGH,
    mediumMatch: sev.MEDIUM === expected.MEDIUM,
    lowMatch: sev.LOW === expected.LOW,
    totalFindings: valid.length,
    expectedTotal: 1342,
    malformed: malformed.length === 0,
    missingRecommendations: missingRec,
    consolidatedRecords: consolidatedRecords.length,
  };

  const md = [];
  md.push("# CS–DE B2 Repair Source — Complete");
  md.push("");
  md.push("**MODE:** READ-ONLY consolidation for repair group planning");
  md.push("");
  md.push("## Summary");
  md.push("");
  md.push(`- Dataset: B2`);
  md.push(`- Total objects: ${TOTAL_OBJECTS}`);
  md.push(`- Total findings: ${valid.length}`);
  md.push(`- Unique affected cards: ${uniqueCards}`);
  md.push(`- CRITICAL: ${sev.CRITICAL}`);
  md.push(`- HIGH: ${sev.HIGH}`);
  md.push(`- MEDIUM: ${sev.MEDIUM}`);
  md.push(`- LOW: ${sev.LOW}`);
  if (sev.OTHER) md.push(`- Other severity: ${sev.OTHER}`);
  md.push(`- MISSING_RECOMMENDATION: ${missingRec}`);
  md.push(`- Consolidated duplicate records: ${consolidatedRecords.length}`);
  md.push(`- Malformed records: ${malformed.length}`);
  md.push(`- Production changes: 0`);
  md.push(`- DE changes: 0`);
  md.push("");
  md.push("## Sources");
  md.push("");
  md.push("- `reports/cs-b2-full-audit.md`");
  md.push("- `reports/temp/cs-b2-audit/deterministic-audit.json`");
  md.push("- `reports/temp/cs-b2-audit/batch-simple-*.json`");
  md.push("- `reports/temp/cs-b2-audit/batch-study-*.json`");
  md.push("- `reports/temp/cs-b2-audit/cross-dataset-findings.json`");
  md.push("");
  md.push("## Findings by card-index group");
  md.push("");

  let findingNo = 0;
  for (const [start, items] of groups) {
    const end = Math.min(start + BATCH_SIZE, TOTAL_OBJECTS);
    const pad = (n) => String(n).padStart(3, "0");
    const label = `${pad(start + 1)}-${pad(end)}`;
    const gSev = severityCounts(items);
    const gCards = new Set(items.map((f) => f.cardId)).size;
    md.push(`## Group ${label}`);
    md.push("");
    md.push(`- Card index range: ${start}–${end - 1}`);
    md.push(`- Findings: ${items.length}`);
    md.push(`- Unique affected cards: ${gCards}`);
    md.push(`- CRITICAL: ${gSev.CRITICAL}`);
    md.push(`- HIGH: ${gSev.HIGH}`);
    md.push(`- MEDIUM: ${gSev.MEDIUM}`);
    md.push(`- LOW: ${gSev.LOW}`);
    md.push("");
    for (const f of items) {
      findingNo += 1;
      md.push(formatMdFinding(f, findingNo));
    }
  }

  if (malformed.length) {
    md.push("## Malformed records");
    md.push("");
    for (const f of malformed) md.push(formatMdFinding(f, ++findingNo));
  }

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_MD, md.join("\n"));

  const jsonOut = {
    dataset: DATASET,
    totalObjects: TOTAL_OBJECTS,
    generatedAt: new Date().toISOString(),
    summary: {
      totalFindings: valid.length,
      uniqueAffectedCards: uniqueCards,
      severity: sev,
      missingRecommendations: missingRec,
      consolidatedRecords: consolidatedRecords.length,
      malformedRecords: malformed.length,
      productionChanges: 0,
      deChanges: 0,
      validation: gates,
    },
    findings: valid.map((f) => ({
      cardIndex: f.cardIndex,
      cardId: f.cardId,
      batch: f.batch,
      field: f.field,
      severity: f.severity,
      status: f.status,
      deSource: f.deSource,
      lvReference: f.lvReference,
      currentCs: f.currentCs,
      recommendedCs: f.recommendedCs,
      repairValueStatus: f.repairValueStatus,
      problem: f.problem,
      rationale: f.rationale,
      confidence: f.confidence,
      sources: f.sources,
    })),
  };
  fs.writeFileSync(OUT_JSON, `${JSON.stringify(jsonOut, null, 2)}\n`);

  const pass = gates.criticalMatch && gates.highMatch && gates.mediumMatch && gates.lowMatch
    && gates.malformed && gates.b2Coverage && valid.length === 1342;

  console.log(JSON.stringify({ pass, gates, sev, totalFindings: valid.length, uniqueCards, missingRec, outMd: OUT_MD, outJson: OUT_JSON }, null, 2));
  if (!pass) process.exit(1);
}

if (require.main === module) main();
module.exports = { main };
