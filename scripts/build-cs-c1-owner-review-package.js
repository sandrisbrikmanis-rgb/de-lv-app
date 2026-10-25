#!/usr/bin/env node
"use strict";
/**
 * CS-DE C1 OWNER review package export (READ-ONLY).
 * Usage: node scripts/build-cs-c1-owner-review-package.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const C1_FILE = path.join(ROOT, "data/cs/c1.js");
const LV_FILE = path.join(ROOT, "data/c1.js");
const AUDIT_MD = path.join(ROOT, "reports/cs-c1-full-audit.md");
const AUDIT_DIR = path.join(ROOT, "reports/temp/cs-c1-audit");
const OUT_DIR = path.join(ROOT, "reports/temp/cs-c1-owner-review");
const C1_TOTAL = 572;
const NORMAL_GROUP_SIZE = 50;
const STUDY_GROUP_SIZE = 10;

function loadWords(filePath, key = "C1_WORDS") {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `c1-${entry.de}-${index}`;
  return `c1-${index}`;
}

function normalizeField(field) {
  if (!field) return field;
  let f = String(field);
  if (f === "csText" || f === "lv") return "lv";
  const m = f.match(/^entry\[\d+\]\.(.+)$/);
  if (m) f = m[1];
  return f;
}

function fieldToPath(field) {
  const nf = normalizeField(field);
  if (nf === "lv") return ["lv"];
  if (nf.startsWith("study.")) return nf.split(".");
  return [nf];
}

function getAt(obj, parts) {
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur;
}

function getProductionCurrent(entry, field) {
  const val = getAt(entry, fieldToPath(field));
  if (val === null || val === undefined) return "";
  if (typeof val === "object") return JSON.stringify(val);
  return String(val);
}

function cardType(entry) {
  if (!entry.study) return "Simple";
  return entry.study.layout || "Study";
}

function pad3(n) {
  return String(n).padStart(3, "0");
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function serializeStudy(study) {
  return JSON.stringify(study, null, 2);
}

function findingKey(f) {
  return [
    f.cardId || "",
    normalizeField(f.field || ""),
    String(f.severity || ""),
    String(f.reason || f.problem || f.rationale || "").slice(0, 120),
    String(f.proposedCs || f.proposed || "").slice(0, 80),
  ].join("\x1f");
}

function normalizeFinding(raw, source) {
  const cardId = raw.cardId || raw.card || "";
  const field = raw.field || raw.path || "lv";
  return {
    source,
    cardId,
    field,
    severity: raw.severity || "MEDIUM",
    category: raw.category || raw.status || raw.rule || null,
    auditCurrent: raw.currentCs ?? raw.current ?? raw.existingCsText ?? "",
    proposedCs: raw.proposedCs ?? raw.proposed ?? raw.recommendedFix ?? "",
    reason: raw.reason || raw.problem || raw.rationale || "",
    de: raw.de || "",
    lvSource: raw.lvSource || "",
    confidence: raw.confidence ?? null,
    raw,
  };
}

function loadJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function loadAllFindings() {
  const all = [];
  const seen = new Set();

  const pushFinding = (raw, source) => {
    const f = normalizeFinding(raw, source);
    if (!f.cardId) return;
    const key = findingKey(f);
    if (seen.has(key)) return;
    seen.add(key);
    all.push(f);
  };

  const det = loadJson(path.join(AUDIT_DIR, "deterministic-audit.json"));
  for (const f of det?.findings || []) pushFinding(f, "deterministic");

  const ling = loadJson(path.join(AUDIT_DIR, "linguistic-audit.json"));
  const lingFindings = ling?.qualityFindings || ling?.findings || [];
  for (const f of lingFindings) pushFinding(f, "linguistic");

  const batchFiles = fs.readdirSync(AUDIT_DIR).filter((f) => f.startsWith("batch-") && f.endsWith(".json"));
  for (const bf of batchFiles) {
    const batch = loadJson(path.join(AUDIT_DIR, bf));
    for (const f of batch?.findings || []) pushFinding(f, `batch:${bf}`);
  }

  return all;
}

function loadCrossDatasetFindings() {
  const raw = loadJson(path.join(AUDIT_DIR, "cross-dataset-findings.json"));
  if (!raw) return [];
  const items = Array.isArray(raw) ? raw : raw.findings || [];
  const byCard = new Map();
  for (const item of items) {
    for (const loc of item.locations || []) {
      const m = String(loc).match(/^c1:(.+)$/);
      if (!m) continue;
      const cardId = m[1];
      if (!byCard.has(cardId)) byCard.set(cardId, []);
      byCard.get(cardId).push({
        de: item.de,
        variants: item.variants || [],
        locations: item.locations || [],
        severity: item.severity || "HIGH",
        locationCount: item.locationCount || item.locations?.length || 0,
      });
    }
  }
  return byCard;
}

function enrichFinding(f, entry, index) {
  const productionCurrent = entry ? getProductionCurrent(entry, f.field) : "";
  const auditCurrent = String(f.auditCurrent ?? "");
  const currentMismatch = auditCurrent && productionCurrent && auditCurrent !== productionCurrent;
  return {
    ...f,
    productionIndex: index,
    productionCurrent,
    auditCurrent,
    currentMismatch,
  };
}

function formatFindingBlock(f, n) {
  const lines = [
    `Finding ${n}`,
    `- Severity: ${f.severity}`,
    `- Field: ${f.field}`,
    `- CURRENT: ${f.productionCurrent}`,
  ];
  if (f.resolvedFrom) {
    lines.push(`- Audit cardId (typo): ${f.resolvedFrom}`);
    lines.push(`- Resolved production cardId: ${f.cardId}`);
  }
  if (f.currentMismatch) {
    lines.push(`- AUDIT_CURRENT != PRODUCTION_CURRENT`);
    lines.push(`- Audit CURRENT: ${f.auditCurrent}`);
  }
  lines.push(`- Audit proposed replacement: ${f.proposedCs || "—"}`);
  lines.push(`- Reason: ${f.reason || "—"}`);
  lines.push(`- Rule/category: ${f.category || f.source || "—"}`);
  return lines.join("\n");
}

function formatCrossDatasetBlock(items) {
  if (!items?.length) return "NONE";
  return items.map((item, i) => [
    `Cross-dataset ${i + 1}`,
    `- DE: ${item.de}`,
    `- Severity: ${item.severity}`,
    `- Variants: ${(item.variants || []).join(" | ")}`,
    `- Locations: ${(item.locations || []).join(", ")}`,
  ].join("\n")).join("\n\n");
}

function formatNormalCard(card, findings, crossDataset) {
  const lines = [
    `## ${pad2(card.seqInGroup)} — ${card.cardId}`,
    "",
    `Production index: ${card.index}`,
    `Card ID: ${card.cardId}`,
    `DE: ${card.entry.de}`,
    `CURRENT CS: ${card.entry.lv}`,
    `Card type: ${card.type}`,
    `Has Study: ${card.hasStudy ? "YES" : "NO"}`,
    "",
    "### Audit findings",
    "",
  ];
  if (!findings.length) {
    lines.push("Audit findings: NONE");
  } else {
    findings.forEach((f, i) => {
      lines.push(formatFindingBlock(f, i + 1));
      if (i < findings.length - 1) lines.push("");
    });
  }
  lines.push("");
  lines.push("### Cross-dataset finding");
  lines.push("");
  lines.push(formatCrossDatasetBlock(crossDataset));
  return lines.join("\n");
}

function formatStudyCard(card, findings, crossDataset) {
  const lines = [
    `## ${pad2(card.seqInGroup)} — ${card.cardId}`,
    "",
    `Production index: ${card.index}`,
    `Card ID: ${card.cardId}`,
    `DE: ${card.entry.de}`,
    `CURRENT CS (front): ${card.entry.lv}`,
    `Card type: ${card.type}`,
    "",
    "### CURRENT Study object (production, exact)",
    "",
    "```json",
    serializeStudy(card.entry.study),
    "```",
    "",
    "### Audit findings",
    "",
  ];
  if (!findings.length) {
    lines.push("Audit findings: NONE");
  } else {
    findings.forEach((f, i) => {
      lines.push(formatFindingBlock(f, i + 1));
      if (i < findings.length - 1) lines.push("");
    });
  }
  lines.push("");
  lines.push("### Cross-dataset finding");
  lines.push("");
  lines.push(formatCrossDatasetBlock(crossDataset));
  return lines.join("\n");
}

function buildSnapshot(cards) {
  const lines = [
    "# CS–DE C1 Production Snapshot",
    "",
    `Total cards: ${cards.length}/${C1_TOTAL}`,
    `Generated: ${new Date().toISOString()}`,
    `Source: \`data/cs/c1.js\``,
    "",
  ];
  for (const c of cards) {
    lines.push(`### ${pad3(c.index + 1)} — ${c.cardId}`);
    lines.push(`- Index: ${c.index}`);
    lines.push(`- Card ID: ${c.cardId}`);
    lines.push(`- DE: ${c.entry.de}`);
    lines.push(`- CS: ${c.entry.lv}`);
    lines.push(`- Card type: ${c.type}`);
    lines.push(`- Has Study: ${c.hasStudy ? "YES" : "NO"}`);
    if (c.hasStudy) {
      lines.push("");
      lines.push("#### Study object");
      lines.push("");
      lines.push("```json");
      lines.push(serializeStudy(c.entry.study));
      lines.push("```");
    }
    lines.push("");
  }
  return lines.join("\n");
}

function resolveCardId(cardId, cardIndexById, cards) {
  if (cardIndexById.has(cardId)) return cardId;
  const m = String(cardId).match(/^c1-(.+)-(\d+)$/);
  if (!m) return null;
  const idx = Number(m[2]);
  const slug = m[1].replace(/\s+/g, "").toLowerCase();
  const atIdx = cards[idx];
  if (!atIdx) return null;
  const prodSlug = String(atIdx.entry.de || "").replace(/\s+/g, "").toLowerCase();
  if (prodSlug === slug || prodSlug.includes(slug) || slug.includes(prodSlug)) {
    return atIdx.cardId;
  }
  return null;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function main() {
  if (!fs.existsSync(AUDIT_MD) || !fs.existsSync(AUDIT_DIR)) {
    throw new Error("Missing C1 audit artifacts. Expected reports/cs-c1-full-audit.md and reports/temp/cs-c1-audit/");
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const words = loadWords(C1_FILE);
  if (words.length !== C1_TOTAL) {
    throw new Error(`Expected ${C1_TOTAL} C1 cards, found ${words.length}`);
  }

  const cardIndexById = new Map();
  const cards = words.map((entry, index) => {
    const cardId = entryId(entry, index);
    const card = {
      index,
      cardId,
      entry,
      type: cardType(entry),
      hasStudy: Boolean(entry.study),
    };
    cardIndexById.set(cardId, card);
    return card;
  });

  const allFindings = loadAllFindings();
  const crossDataset = loadCrossDatasetFindings();

  const findingsByCard = new Map();
  for (const c of cards) findingsByCard.set(c.cardId, []);
  const unresolved = [];
  let currentMismatches = 0;

  for (const f of allFindings) {
    const resolvedId = resolveCardId(f.cardId, cardIndexById, cards) || f.cardId;
    const card = cardIndexById.get(resolvedId);
    if (!card) {
      unresolved.push({ ...f, cardId: f.cardId });
      continue;
    }
    const enriched = enrichFinding({ ...f, cardId: resolvedId, resolvedFrom: resolvedId !== f.cardId ? f.cardId : null }, card.entry, card.index);
    if (enriched.currentMismatch) currentMismatches += 1;
    findingsByCard.get(resolvedId).push(enriched);
  }

  fs.writeFileSync(path.join(OUT_DIR, "cs-c1-production-snapshot.md"), buildSnapshot(cards), "utf8");

  const normalGroups = chunk(cards, NORMAL_GROUP_SIZE);
  const normalFiles = [];
  normalGroups.forEach((group, gi) => {
    const groupNo = gi + 1;
    const start = gi * NORMAL_GROUP_SIZE + 1;
    const end = start + group.length - 1;
    const filename = `cs-c1-owner-review-group${pad2(groupNo)}-cards-${pad3(start)}-${pad3(end)}.md`;
    const lines = [
      `# CS–DE C1 OWNER REVIEW — GROUP ${pad2(groupNo)}`,
      "",
      `- Cards: \`${pad3(start)}–${pad3(end)}\``,
      `- Count: ${group.length}`,
      `- Mode: READ-ONLY export for OWNER linguistic review`,
      `- DE: READ-ONLY context only`,
      "",
    ];
    group.forEach((card, si) => {
      const withSeq = { ...card, seqInGroup: si + 1 };
      lines.push(formatNormalCard(withSeq, findingsByCard.get(card.cardId) || [], crossDataset.get(card.cardId)));
      lines.push("");
      lines.push("---");
      lines.push("");
    });
    fs.writeFileSync(path.join(OUT_DIR, filename), lines.join("\n"), "utf8");
    normalFiles.push(filename);
  });

  const studyCards = cards.filter((c) => c.hasStudy);
  const studyGroups = chunk(studyCards, STUDY_GROUP_SIZE);
  const studyFiles = [];
  studyGroups.forEach((group, gi) => {
    const groupNo = gi + 1;
    const filename = `cs-c1-owner-review-study-group${pad2(groupNo)}.md`;
    const lines = [
      `# CS–DE C1 OWNER REVIEW — STUDY GROUP ${pad2(groupNo)}`,
      "",
      `- Study cards: ${group.length}`,
      `- Mode: READ-ONLY export for OWNER linguistic review`,
      `- DE: READ-ONLY context only`,
      "",
    ];
    group.forEach((card, si) => {
      const withSeq = { ...card, seqInGroup: si + 1 };
      lines.push(formatStudyCard(withSeq, findingsByCard.get(card.cardId) || [], crossDataset.get(card.cardId)));
      lines.push("");
      lines.push("---");
      lines.push("");
    });
    fs.writeFileSync(path.join(OUT_DIR, filename), lines.join("\n"), "utf8");
    studyFiles.push(filename);
  });

  const linkedFindings = allFindings.length - unresolved.length;
  const manifestLines = [
    "# CS–DE C1 OWNER REVIEW MANIFEST",
    "",
    `- Production C1 cards: ${cards.length}/${C1_TOTAL}`,
    `- Normal review groups: ${normalGroups.length}`,
    `- Cards exported (normal groups): ${cards.length}`,
    `- Study cards: ${studyCards.length}`,
    `- Study groups: ${studyGroups.length}`,
    `- Audit findings linked: ${linkedFindings}`,
    `- Cross-dataset findings linked: ${crossDataset.size}`,
    `- UNRESOLVED_AUDIT_CARD: ${unresolved.length}`,
    `- AUDIT_CURRENT != PRODUCTION_CURRENT: ${currentMismatches}`,
    `- Production changes: 0`,
    "",
    "## Normal review files",
    "",
    ...normalFiles.map((f) => `- \`${path.join("reports/temp/cs-c1-owner-review", f)}\``),
    "",
    "## Study review files",
    "",
    ...studyFiles.map((f) => `- \`${path.join("reports/temp/cs-c1-owner-review", f)}\``),
    "",
    "## Snapshot",
    "",
    "- `reports/temp/cs-c1-owner-review/cs-c1-production-snapshot.md`",
    "",
  ];

  if (unresolved.length) {
    manifestLines.push("## UNRESOLVED_AUDIT_CARD", "");
    for (const f of unresolved) {
      manifestLines.push(`- \`${f.cardId}\` / \`${f.field}\` — ${f.reason || f.category || "no reason"}`);
    }
    manifestLines.push("");
  }

  fs.writeFileSync(path.join(OUT_DIR, "cs-c1-owner-review-manifest.md"), manifestLines.join("\n"), "utf8");

  const validation = {
    productionCards: cards.length,
    expectedCards: C1_TOTAL,
    normalGroups: normalGroups.length,
    studyCards: studyCards.length,
    studyGroups: studyGroups.length,
    auditFindingsTotal: allFindings.length,
    auditFindingsLinked: linkedFindings,
    unresolvedFindings: unresolved.length,
    currentMismatches,
    duplicateInNormal: 0,
    missingInNormal: 0,
    duplicateInStudy: 0,
    missingInStudy: 0,
    pass: false,
  };

  const seenNormal = new Set();
  for (const c of cards) {
    if (seenNormal.has(c.cardId)) validation.duplicateInNormal += 1;
    else seenNormal.add(c.cardId);
  }
  validation.missingInNormal = C1_TOTAL - seenNormal.size;

  const seenStudy = new Set();
  for (const c of studyCards) {
    if (seenStudy.has(c.cardId)) validation.duplicateInStudy += 1;
    else seenStudy.add(c.cardId);
  }
  validation.missingInStudy = studyCards.length - seenStudy.size;

  validation.pass = cards.length === C1_TOTAL
    && validation.missingInNormal === 0
    && validation.duplicateInNormal === 0
    && validation.duplicateInStudy === 0
    && validation.missingInStudy === 0
    && linkedFindings + unresolved.length === allFindings.length;

  const manifestJson = {
    generatedAt: new Date().toISOString(),
    productionFile: "data/cs/c1.js",
    validation,
    files: {
      snapshot: "reports/temp/cs-c1-owner-review/cs-c1-production-snapshot.md",
      manifest: "reports/temp/cs-c1-owner-review/cs-c1-owner-review-manifest.md",
      normal: normalFiles.map((f) => `reports/temp/cs-c1-owner-review/${f}`),
      study: studyFiles.map((f) => `reports/temp/cs-c1-owner-review/${f}`),
    },
    unresolved: unresolved.map((f) => ({
      cardId: f.cardId,
      field: f.field,
      severity: f.severity,
      reason: f.reason,
      source: f.source,
    })),
  };
  fs.writeFileSync(path.join(OUT_DIR, "cs-c1-owner-review-manifest.json"), JSON.stringify(manifestJson, null, 2) + "\n", "utf8");

  console.log(JSON.stringify({
    productionCards: `${cards.length}/${C1_TOTAL}`,
    normalGroups: normalGroups.length,
    studyCards: studyCards.length,
    studyGroups: studyGroups.length,
    auditFindingsLinked: linkedFindings,
    unresolvedFindings: unresolved.length,
    currentMismatches,
    productionChanges: 0,
    pass: validation.pass,
  }, null, 2));

  if (!validation.pass) {
    console.error("Validation failed", validation);
    process.exit(1);
  }
}

main();
