#!/usr/bin/env node
/**
 * BS-DE B1 cache context re-audit: classify SAFE vs REAL collisions.
 * Uses heuristics + optional Terra batch for ambiguous candidates.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const {
  createStats,
  auditCardsBatch,
  estimateCostUsd,
} = require("./lib/openai-audit-batch");

const LV_FILE = path.join(ROOT, "data", "b1.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const OUT = path.join(ROOT, "reports", "temp", "bs-b1-reaudit-cache-context.json");
const USE_TERRA = !process.argv.includes("--no-terra");
const TERRA_BATCH = 15;

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember", "info",
]);

function load(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b1-${entry.de}-${index}`;
}

function collectLvStrings(entry, index, visitor, ctx = { path: "", parentKey: "" }) {
  if (entry === null || entry === undefined) return;
  if (typeof entry === "string") {
    if (NATIVE_KEYS.has(ctx.parentKey) || ctx.parentKey === "lv" || ctx.path.endsWith(".lv")) {
      visitor(entry, ctx.path);
    }
    return;
  }
  if (Array.isArray(entry)) {
    entry.forEach((item, i) => collectLvStrings(item, index, visitor, { ...ctx, path: `${ctx.path}[${i}]` }));
    return;
  }
  if (typeof entry === "object") {
    for (const [key, val] of Object.entries(entry)) {
      if (key === "de" || key === "de_article" || key === "de_plural" || key === "sectionAccents") continue;
      collectLvStrings(val, index, visitor, {
        path: ctx.path ? `${ctx.path}.${key}` : key,
        parentKey: key,
      });
    }
  }
}

function getBsAtPath(entry, fieldPath) {
  if (!fieldPath || fieldPath === "lv") return entry.lv;
  try {
    const parts = fieldPath.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
    let cur = entry;
    for (const p of parts) {
      if (cur === undefined || cur === null) return null;
      cur = cur[p];
    }
    return typeof cur === "string" ? cur : null;
  } catch {
    return null;
  }
}

function deStem(de) {
  return String(de || "").toLowerCase().replace(/^(der|die|das|sich)\s+/, "").slice(0, 5);
}

function heuristicClassify(candidate) {
  const deWords = [...new Set(candidate.occurrences.map((o) => o.de))];
  const stems = deWords.map(deStem);
  const uniqueStems = new Set(stems);
  if (uniqueStems.size === 1) return "SAFE";
  const bs = candidate.sharedBsTranslation.toLowerCase();
  const broad = ["odlučiti", "mišljenje", "zahtjev", "ukazati", "susjedstvo", "međutim", "saditi"];
  if (broad.some((w) => bs.includes(w))) return "SAFE";
  if (candidate.lvText.length < 8 && deWords.length === 2) return "AMBIGUOUS";
  return "AMBIGUOUS";
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function classifyWithTerra(ambiguous, stats) {
  const results = new Map();
  const batches = chunk(ambiguous, TERRA_BATCH);
  for (let i = 0; i < batches.length; i++) {
    const cards = batches[i].map((c, idx) => ({
      cardId: `cache-collision-${i}-${idx}`,
      field: "cache_context",
      lvSource: c.lvText,
      bsText: c.sharedBsTranslation,
      de: c.occurrences.map((o) => o.de).join(" | "),
      occurrences: c.occurrences.slice(0, 5),
    }));
    const { findings } = await auditCardsBatch({
      cards,
      stats,
      batchLabel: `cache-${i}`,
      auditType: "cache_context_collision",
    });
    for (const f of findings) {
      const idx = parseInt(String(f.cardId).split("-").pop(), 10);
      const candidate = batches[i][idx];
      if (!candidate) continue;
      const sev = String(f.severity || "").toUpperCase();
      results.set(candidate.lvText, sev === "CRITICAL" || sev === "HIGH" ? "REAL" : "SAFE");
    }
  }
  return results;
}

async function main() {
  const lv = load(LV_FILE);
  const bs = load(BS_FILE);
  const index = new Map();

  for (let i = 0; i < lv.length; i++) {
    const lvE = lv[i];
    const bsE = bs[i];
    const cardId = entryId(bsE, i);
    collectLvStrings(lvE, i, (lvText, fieldPath) => {
      if (!lvText || !lvText.trim()) return;
      const key = lvText.trim();
      if (!index.has(key)) index.set(key, []);
      index.get(key).push({
        cardId,
        field: fieldPath || "lv",
        de: bsE.de,
        bsText: getBsAtPath(bsE, fieldPath) || bsE.lv,
      });
    });
  }

  const candidates = [];
  for (const [lvText, occurrences] of index.entries()) {
    if (occurrences.length < 2) continue;
    const uniqueDe = new Set(occurrences.map((o) => o.de));
    const uniqueBs = new Set(occurrences.map((o) => (o.bsText || "").trim()));
    if (uniqueDe.size > 1 && uniqueBs.size === 1) {
      candidates.push({
        lvText,
        occurrenceCount: occurrences.length,
        uniqueDeCount: uniqueDe.size,
        sharedBsTranslation: [...uniqueBs][0],
        occurrences: occurrences.slice(0, 10),
      });
    }
  }

  const safe = [];
  const ambiguous = [];
  const real = [];

  for (const c of candidates) {
    const h = heuristicClassify(c);
    if (h === "SAFE") safe.push(c);
    else ambiguous.push(c);
  }

  const stats = createStats();
  if (USE_TERRA && ambiguous.length > 0) {
    const terraResults = await classifyWithTerra(ambiguous, stats);
    for (const c of ambiguous) {
      const verdict = terraResults.get(c.lvText) || "SAFE";
      if (verdict === "REAL") real.push({ ...c, classification: "REAL", method: "terra" });
      else safe.push({ ...c, classification: "SAFE", method: "terra" });
    }
  } else {
    for (const c of ambiguous) safe.push({ ...c, classification: "SAFE", method: "heuristic_default" });
  }

  stats.estimatedCostUsd = estimateCostUsd(stats);

  const out = {
    generatedAt: new Date().toISOString(),
    stats: {
      candidates: candidates.length,
      safe: safe.length,
      realCollisions: real.length,
      terraRequests: stats.requestCount || 0,
      terraCostUsd: stats.estimatedCostUsd || 0,
    },
    safe,
    realCollisions: real,
    terraStats: stats,
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out.stats, null, 2));
  console.log(`Wrote ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
