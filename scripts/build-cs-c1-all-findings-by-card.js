#!/usr/bin/env node
"use strict";
/**
 * CS-DE C1 — single consolidated OWNER review file (cards with findings only).
 * Usage: node scripts/build-cs-c1-all-findings-by-card.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const C1_FILE = path.join(ROOT, "data/cs/c1.js");
const AUDIT_DIR = path.join(ROOT, "reports/temp/cs-c1-audit");
const OUT_FILE = path.join(ROOT, "reports/cs-c1-all-findings-by-card.md");
const C1_TOTAL = 572;

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

function findingKey(f) {
  return [
    f.originalCardId || f.cardId || "",
    normalizeField(f.field || ""),
    String(f.severity || ""),
    String(f.reason || "").slice(0, 120),
    String(f.proposedCs || "").slice(0, 80),
  ].join("\x1f");
}

function normalizeFinding(raw, source) {
  return {
    source,
    originalCardId: raw.cardId || raw.card || "",
    cardId: raw.cardId || raw.card || "",
    field: raw.field || raw.path || "lv",
    severity: raw.severity || "MEDIUM",
    category: raw.category || raw.status || raw.rule || null,
    auditCurrent: String(raw.currentCs ?? raw.current ?? raw.existingCsText ?? ""),
    proposedCs: raw.proposedCs ?? raw.proposed ?? raw.recommendedFix ?? "",
    reason: raw.reason || raw.problem || raw.rationale || "",
    de: raw.de || "",
    lvSource: raw.lvSource || "",
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
    if (!f.originalCardId) return;
    const key = findingKey(f);
    if (seen.has(key)) return;
    seen.add(key);
    all.push(f);
  };
  const det = loadJson(path.join(AUDIT_DIR, "deterministic-audit.json"));
  for (const f of det?.findings || []) pushFinding(f, "deterministic");
  const ling = loadJson(path.join(AUDIT_DIR, "linguistic-audit.json"));
  for (const f of ling?.qualityFindings || ling?.findings || []) pushFinding(f, "linguistic");
  for (const bf of fs.readdirSync(AUDIT_DIR).filter((f) => f.startsWith("batch-") && f.endsWith(".json"))) {
    for (const f of loadJson(path.join(AUDIT_DIR, bf))?.findings || []) pushFinding(f, `batch:${bf}`);
  }
  return all;
}

function loadCrossDatasetFindings() {
  const raw = loadJson(path.join(AUDIT_DIR, "cross-dataset-findings.json"));
  if (!raw) return new Map();
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

function resolveCardId(cardId, cardIndexById, cards) {
  if (cardIndexById.has(cardId)) return cardId;
  const m = String(cardId).match(/^c1-(.+)-(\d+)$/);
  if (!m) return null;
  const idx = Number(m[2]);
  const slug = m[1].replace(/\s+/g, "").toLowerCase();
  const atIdx = cards[idx];
  if (!atIdx) return null;
  const prodSlug = String(atIdx.entry.de || "").replace(/\s+/g, "").toLowerCase();
  if (prodSlug === slug || prodSlug.includes(slug) || slug.includes(prodSlug)) return atIdx.cardId;
  return null;
}

function enrichFinding(f, entry, index) {
  const productionCurrent = entry ? getProductionCurrent(entry, f.field) : "";
  const auditCurrent = f.auditCurrent;
  const currentMismatch = Boolean(auditCurrent && productionCurrent && auditCurrent !== productionCurrent);
  return {
    ...f,
    productionIndex: index,
    productionCurrent,
    currentMismatch,
  };
}

function formatFinding(f, n) {
  const lines = [
    `#### Finding ${n}`,
    "",
    `Severity: ${f.severity}`,
    `Field: ${f.field}`,
  ];
  if (f.currentMismatch) {
    lines.push(`AUDIT_CURRENT: ${f.auditCurrent}`);
    lines.push(`PRODUCTION_CURRENT: ${f.productionCurrent}`);
    lines.push("STATUS: AUDIT_CURRENT != PRODUCTION_CURRENT");
  } else {
    lines.push(`CURRENT: ${f.productionCurrent}`);
  }
  if (f.resolvedFrom) {
    lines.push(`Audit cardId (original): ${f.resolvedFrom}`);
    lines.push(`Production cardId: ${f.cardId}`);
  }
  lines.push(`Audit proposed replacement: ${f.proposedCs || "—"}`);
  lines.push(`Reason: ${f.reason || "—"}`);
  lines.push(`Category/rule: ${f.category || f.source || "—"}`);
  return lines.join("\n");
}

function formatCrossDataset(items) {
  return items.map((item, i) => [
    `#### Cross-dataset finding ${i + 1}`,
    "",
    `Severity: ${item.severity}`,
    `DE: ${item.de}`,
    `Variants: ${(item.variants || []).join(" | ")}`,
    `Locations: ${(item.locations || []).join(", ")}`,
  ].join("\n")).join("\n\n");
}

function hasStudyFinding(findings) {
  return findings.some((f) => String(f.field || "").startsWith("study."));
}

function main() {
  const words = loadWords(C1_FILE);
  if (words.length !== C1_TOTAL) throw new Error(`Expected ${C1_TOTAL} cards, found ${words.length}`);

  const cards = words.map((entry, index) => ({
    index,
    cardId: entryId(entry, index),
    entry,
    type: cardType(entry),
    hasStudy: Boolean(entry.study),
  }));
  const cardIndexById = new Map(cards.map((c) => [c.cardId, c]));

  const allFindings = loadAllFindings();
  const crossDataset = loadCrossDatasetFindings();
  const findingsByCard = new Map();
  const unresolved = [];

  for (const f of allFindings) {
    const resolvedId = resolveCardId(f.originalCardId, cardIndexById, cards);
    if (!resolvedId) {
      unresolved.push(f);
      continue;
    }
    const card = cardIndexById.get(resolvedId);
    const enriched = enrichFinding(
      { ...f, cardId: resolvedId, resolvedFrom: resolvedId !== f.originalCardId ? f.originalCardId : null },
      card.entry,
      card.index,
    );
    if (!findingsByCard.has(resolvedId)) findingsByCard.set(resolvedId, []);
    findingsByCard.get(resolvedId).push(enriched);
  }

  const lines = [
    "# CS–DE C1 — All Findings by Card",
    "",
    "READ-ONLY export for ChatGPT OWNER linguistic review.",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Source production: \`data/cs/c1.js\``,
    "",
    "---",
    "",
  ];

  let cardsWithFindings = 0;
  let exportedFindings = 0;
  let currentMismatches = 0;
  let studyCardsWithFindings = 0;
  let crossDatasetCount = 0;

  for (const card of cards) {
    const findings = findingsByCard.get(card.cardId) || [];
    const cross = crossDataset.get(card.cardId) || [];
    if (!findings.length && !cross.length) continue;

    cardsWithFindings += 1;
    exportedFindings += findings.length;
    crossDatasetCount += cross.length;
    if (card.hasStudy && (findings.length || cross.length)) studyCardsWithFindings += 1;

    lines.push(`## ${card.index} — ${card.cardId}`);
    lines.push("");
    lines.push(`DE: ${card.entry.de}`);
    lines.push(`CURRENT CS: ${card.entry.lv}`);
    lines.push(`Card type: ${card.type}`);
    lines.push(`Study: ${card.hasStudy ? "YES" : "NO"}`);
    lines.push("");

    if (card.hasStudy && (findings.length || hasStudyFinding(findings))) {
      lines.push("### Study context (production, exact)");
      lines.push("");
      lines.push("```json");
      lines.push(JSON.stringify(card.entry.study, null, 2));
      lines.push("```");
      lines.push("");
    }

    lines.push("### Findings");
    lines.push("");
    if (!findings.length) {
      lines.push("(No direct audit findings — cross-dataset only below)");
      lines.push("");
    } else {
      findings.forEach((f, i) => {
        if (f.currentMismatch) currentMismatches += 1;
        lines.push(formatFinding(f, i + 1));
        lines.push("");
      });
    }

    if (cross.length) {
      lines.push("### Cross-dataset findings");
      lines.push("");
      lines.push(formatCrossDataset(cross));
      lines.push("");
    }

    lines.push("---");
    lines.push("");
  }

  lines.push("# UNRESOLVED AUDIT FINDINGS");
  lines.push("");
  if (!unresolved.length) {
    lines.push("None.");
  } else {
    unresolved.forEach((f, i) => {
      lines.push(`## Unresolved ${i + 1}`);
      lines.push("");
      lines.push(`Original audit cardId: ${f.originalCardId}`);
      lines.push(`Severity: ${f.severity}`);
      lines.push(`Field: ${f.field}`);
      lines.push(`AUDIT_CURRENT: ${f.auditCurrent}`);
      lines.push(`Audit proposed replacement: ${f.proposedCs || "—"}`);
      lines.push(`Reason: ${f.reason || "—"}`);
      lines.push(`Category/rule: ${f.category || f.source || "—"}`);
      lines.push("");
    });
  }

  lines.push("---");
  lines.push("");
  lines.push("## Completeness summary");
  lines.push("");
  lines.push(`C1 production cards: ${C1_TOTAL}`);
  lines.push(`Cards with findings: ${cardsWithFindings}`);
  lines.push(`Total findings from full audit: ${allFindings.length}`);
  lines.push(`Findings exported: ${exportedFindings}`);
  lines.push(`Unresolved findings: ${unresolved.length}`);
  lines.push(`Audit/production CURRENT mismatches: ${currentMismatches}`);
  lines.push(`Study cards with findings: ${studyCardsWithFindings}`);
  lines.push(`Cross-dataset findings: ${crossDatasetCount}`);
  lines.push("");
  lines.push("Production changes: 0");
  lines.push("CS changes: 0");
  lines.push("DE changes: 0");

  fs.writeFileSync(OUT_FILE, lines.join("\n"), "utf8");

  const complete = exportedFindings + unresolved.length === allFindings.length;
  console.log(JSON.stringify({
    output: OUT_FILE,
    cardsWithFindings,
    totalFindings: allFindings.length,
    exportedFindings,
    unresolved: unresolved.length,
    currentMismatches,
    complete,
  }, null, 2));

  if (!complete) process.exit(1);
}

main();
