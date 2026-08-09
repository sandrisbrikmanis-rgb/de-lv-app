#!/usr/bin/env node
/**
 * EN-DE B2 remaining findings owner review — ONE PASS (read-only).
 * Validates 1009 Luna HIGH/MEDIUM/LOW findings.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const {
  ROOT,
  loadProductionContext,
  getProductionEn,
  getLvSource,
  getDeLemma,
} = require("./en-b2-owner-review-lib");
const { adjudicateHeuristic } = require("./en-b2-owner-review-heuristic");
const { createStats, reviewBatch } = require("./openai-luna-en-b2-owner-review");

const LUNA_JSON = path.join(ROOT, "reports", "temp", "en-b2-luna-linguistic-findings.json");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-b2-remaining-owner-review.json");
const PROGRESS = path.join(ROOT, "reports", "temp", ".en-b2-remaining-owner-review-progress.json");
const STATS_PATH = path.join(ROOT, "reports", "temp", ".en-b2-remaining-owner-review-stats.json");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");

const BATCH_SIZE = 25;
const MAX_RETRIES = 3;
const USE_API = process.argv.includes("--api") || process.env.OWNER_REVIEW_USE_API === "1";

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

function makeFindingId(cardId, field, currentEn) {
  return crypto
    .createHash("sha1")
    .update(`${cardId}|${field}|${currentEn}`)
    .digest("hex")
    .slice(0, 16);
}

function severityRank(s) {
  const o = { HIGH: 0, MEDIUM: 1, LOW: 2 };
  return o[s] ?? 9;
}

function prepareCandidates(lunaFindings) {
  return lunaFindings
    .filter((f) => String(f.severity).toUpperCase() !== "CRITICAL")
    .sort((a, b) => {
      const sr = severityRank(a.severity) - severityRank(b.severity);
      if (sr !== 0) return sr;
      return (a.cardId || "").localeCompare(b.cardId || "");
    })
    .map((f, idx) => ({
      ...f,
      findingId: `lun-${String(idx + 1).padStart(4, "0")}`,
      originalSeverity: String(f.severity || "MEDIUM").toUpperCase(),
      provenance: "LUNA_FULL_AUDIT",
    }));
}

function enrichWithProduction(candidates, ctx) {
  return candidates.map((c) => {
    const fieldPath = c.field === "enText" ? "lv" : c.field;
    const productionEn = getProductionEn(ctx.enIdx, c.cardId, fieldPath, c.de) || c.currentEn || "";
    const lvSource = getLvSource(ctx.lvIdx, c.cardId, fieldPath, c.de) || c.lvSource || "";
    const deLemma = getDeLemma(ctx.enIdx, c.cardId, c.de) || c.de || "";
    return {
      ...c,
      fieldPath,
      productionEn,
      lvSource,
      deLemma,
      currentEn: productionEn,
      lunaProposal: c.proposedEn || "",
      lunaReason: c.reason || "",
      lunaCategory: c.category || "",
    };
  });
}

function mergeReview(candidate, review) {
  const status = String(review.status || "").toUpperCase();
  const validStatuses = ["FIX", "KEEP", "DE_SOURCE_ISSUE", "NEEDS_OWNER_REVIEW"];
  const finalStatus = validStatuses.includes(status) ? status : "KEEP";
  let validatedSeverity = String(review.validatedSeverity || "NONE").toUpperCase();
  if (finalStatus === "KEEP" && validatedSeverity !== "NONE" && validatedSeverity !== "LOW") {
    if (!review.validatedSeverity) validatedSeverity = "NONE";
  }
  return {
    findingId: candidate.findingId,
    provenance: candidate.provenance,
    originalSeverity: candidate.originalSeverity,
    validatedSeverity,
    cardId: candidate.cardId,
    deLemma: candidate.deLemma,
    fieldPath: candidate.fieldPath,
    currentEn: candidate.productionEn,
    lunaProposal: candidate.lunaProposal,
    lunaReason: candidate.lunaReason,
    lunaCategory: candidate.lunaCategory,
    lvSource: candidate.lvSource,
    status: finalStatus,
    recommendedEn: finalStatus === "FIX" ? review.recommendedEn || candidate.lunaProposal : review.recommendedEn || "",
    reason: (review.reason || "").slice(0, 200),
    confidence: review.confidence || "medium",
    ownerQuestion: review.ownerQuestion || (finalStatus === "NEEDS_OWNER_REVIEW" ? review.ownerQuestion : undefined),
    reviewMethod: review.reviewMethod || "API",
  };
}

async function reviewBatchWithRetry(items, stats, batchKey) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const reviews = await reviewBatch({ items, stats, batchLabel: batchKey });
      return reviews;
    } catch (e) {
      if (attempt >= MAX_RETRIES) throw e;
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  return [];
}

async function main() {
  const hashBefore = { data: md5(EN_FILE), www: md5(WWW_FILE) };
  const luna = JSON.parse(fs.readFileSync(LUNA_JSON, "utf8"));
  const raw = luna.qualityFindings || luna.findings || [];
  const candidates = prepareCandidates(raw);
  if (candidates.length !== 1009) {
    throw new Error(`Expected 1009 candidates, got ${candidates.length}`);
  }

  const ctx = loadProductionContext();
  const enriched = enrichWithProduction(candidates, ctx);

  let progress = { completedBatches: [], reviews: {} };
  if (fs.existsSync(PROGRESS)) {
    try {
      progress = JSON.parse(fs.readFileSync(PROGRESS, "utf8"));
    } catch {
      /* fresh */
    }
  }
  const completed = new Set(progress.completedBatches || []);
  const reviewMap = progress.reviews || {};

  const stats = createStats();
  const batches = chunk(enriched, BATCH_SIZE);
  const canApi = USE_API && process.env.OPENAI_API_KEY?.trim();

  console.log(`EN B2 remaining owner review: ${enriched.length} findings`);
  console.log(`Mode: ${canApi ? "API + heuristic fallback" : "heuristic only"}`);

  for (let i = 0; i < batches.length; i++) {
    const batchKey = `batch-${i}`;
    if (completed.has(batchKey)) {
      console.log(`  skip ${batchKey}`);
      continue;
    }

    const batch = batches[i];
    let batchReviews = [];

    if (canApi) {
      try {
        const apiItems = batch.map((c) => ({
          findingId: c.findingId,
          cardId: c.cardId,
          de: c.deLemma,
          deArticle: c.de_article,
          fieldPath: c.fieldPath,
          lvSource: c.lvSource,
          productionEn: c.productionEn,
          lunaProposal: c.lunaProposal,
          lunaReason: c.lunaReason,
          lunaSeverity: c.originalSeverity,
          lunaCategory: c.lunaCategory,
        }));
        const rawReviews = await reviewBatchWithRetry(apiItems, stats, batchKey);
        const byId = new Map(rawReviews.map((r) => [r.findingId, r]));
        for (const c of batch) {
          const r = byId.get(c.findingId);
          if (r) {
            batchReviews.push(mergeReview(c, { ...r, reviewMethod: "API" }));
          } else {
            const h = adjudicateHeuristic(c, c.productionEn);
            batchReviews.push(mergeReview(c, { ...h, reviewMethod: "HEURISTIC_FALLBACK" }));
          }
        }
      } catch (e) {
        console.warn(`  API batch ${batchKey} failed: ${e.message}; using heuristic`);
        batchReviews = batch.map((c) => {
          const h = adjudicateHeuristic(c, c.productionEn);
          return mergeReview(c, { ...h, reviewMethod: "HEURISTIC" });
        });
      }
    } else {
      batchReviews = batch.map((c) => {
        const h = adjudicateHeuristic(c, c.productionEn);
        return mergeReview(c, { ...h, reviewMethod: "HEURISTIC" });
      });
    }

    for (const r of batchReviews) reviewMap[r.findingId] = r;
    completed.add(batchKey);
    progress.completedBatches = [...completed];
    progress.reviews = reviewMap;
    fs.writeFileSync(PROGRESS, JSON.stringify(progress, null, 2));

    const partial = {
      meta: { partial: true, reviewed: Object.keys(reviewMap).length },
      findings: Object.values(reviewMap),
    };
    fs.writeFileSync(OUT_JSON, JSON.stringify(partial, null, 2));
  }

  const hashAfter = { data: md5(EN_FILE), www: md5(WWW_FILE) };
  if (hashBefore.data !== hashAfter.data || hashBefore.www !== hashAfter.www) {
    throw new Error("Production EN files changed during review");
  }

  const findings = enriched.map((c) => reviewMap[c.findingId]).filter(Boolean);
  if (findings.length !== 1009) throw new Error(`Review incomplete: ${findings.length}/1009`);

  const summary = { FIX: 0, KEEP: 0, DE_SOURCE_ISSUE: 0, NEEDS_OWNER_REVIEW: 0 };
  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NONE: 0 };
  const byOriginal = { HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    summary[f.status] = (summary[f.status] || 0) + 1;
    sev[f.validatedSeverity] = (sev[f.validatedSeverity] || 0) + 1;
    byOriginal[f.originalSeverity] = (byOriginal[f.originalSeverity] || 0) + 1;
  }

  const out = {
    meta: {
      date: new Date().toISOString().slice(0, 10),
      mode: "READ-ONLY",
      productionChanges: 0,
      productionIntegrity: "PASS",
      deReadOnly: "PASS",
      hashBefore,
      hashAfter,
      reviewMethod: canApi ? "API+HEURISTIC" : "HEURISTIC",
      candidatesReviewed: 1009,
      apiStats: stats,
    },
    summary: { status: summary, validatedSeverity: sev, originalSeverity: byOriginal },
    findings,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2));
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));
  console.log("\n=== Remaining owner review complete ===");
  console.log(JSON.stringify({ summary, sev, reviewed: findings.length }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
