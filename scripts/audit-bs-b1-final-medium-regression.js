#!/usr/bin/env node
/** Final targeted regression — only cards from bs-b1-final-medium-regression-scope.json */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { createStats, auditCardsBatch, recordRetryReason } = require("./lib/openai-luna-audit-batch");

const LV_FILE = path.join(ROOT, "data", "b1.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const SCOPE_PATH = path.join(ROOT, "reports", "temp", "bs-b1-final-medium-regression-scope.json");
const FINDINGS_PATH = path.join(ROOT, "reports", "temp", "bs-b1-final-medium-regression-findings.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-b1-final-medium-regression-stats.json");

const MAX_RETRIES = 3;

function md5(p) { return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex"); }
function load(p) { const c = fs.readFileSync(p, "utf8"); const ctx = { window: {} }; vm.createContext(ctx); vm.runInContext(c, ctx); return ctx.window.B1_WORDS; }
function entryId(e, i) { return e.study?.id || `b1-${e.de}-${i}`; }
function chunk(a, n) { const o = []; for (let i = 0; i < a.length; i += n) o.push(a.slice(i, i + n)); return o; }

function collectStudyFields(lvStudy, bsStudy, prefix = "study") {
  const fields = [];
  const KEYS = new Set(["translation", "meaning", "text", "explanation", "tip", "important", "word", "content"]);
  function walk(lo, bo, p) {
    if (!lo && !bo) return;
    if (typeof lo === "string" && typeof bo === "string") {
      const k = p.split(".").pop();
      if (KEYS.has(k) || k === "lv" || p.includes(".lv")) fields.push({ field: p, lvSource: lo, bsText: bo });
      return;
    }
    if (Array.isArray(lo) && Array.isArray(bo)) for (let i = 0; i < Math.max(lo.length, bo.length); i++) walk(lo[i], bo[i], `${p}[${i}]`);
    else if (lo && bo && typeof lo === "object" && typeof bo === "object")
      for (const key of new Set([...Object.keys(lo), ...Object.keys(bo)]))
        if (!["de", "sectionAccents", "id", "layout"].includes(key)) walk(lo[key], bo[key], p ? `${p}.${key}` : key);
  }
  walk(lvStudy, bsStudy, prefix);
  return fields;
}

async function auditRetry(cards, stats, key) {
  for (let a = 0; a <= MAX_RETRIES; a++) {
    try {
      if (a === 0) stats.initialBatchRequests++; else { stats.retryRequests++; recordRetryReason(stats, "retry"); }
      return (await auditCardsBatch({ cards, stats, batchLabel: key, auditType: "final_medium_regression" })).findings;
    } catch (e) { if (a >= MAX_RETRIES) throw e; await new Promise((r) => setTimeout(r, 2000 * (a + 1))); }
  }
  return [];
}

async function main() {
  if (!fs.existsSync(SCOPE_PATH)) { console.log("No scope"); return; }
  const scope = JSON.parse(fs.readFileSync(SCOPE_PATH, "utf8"));
  const ids = new Set(scope.cardIds || []);
  if (!ids.size) { console.log("Empty scope"); return; }

  const hashBefore = md5(BS_FILE);
  const lv = load(LV_FILE), bs = load(BS_FILE);
  const stats = createStats();
  const simple = [], study = [];
  for (let i = 0; i < lv.length; i++) {
    const id = entryId(bs[i], i);
    if (!ids.has(id)) continue;
    if (bs[i].study) study.push({ cardId: id, de: bs[i].de, deArticle: bs[i].de_article, fields: collectStudyFields(lv[i].study, bs[i].study), sectionAccents: bs[i].study?.sectionAccents });
    else simple.push({ cardId: id, field: "lv", de: bs[i].de, deArticle: bs[i].de_article, lvSource: lv[i].lv, bsText: bs[i].lv });
  }

  const all = [];
  for (let i = 0; i < chunk(simple, 10).length; i++) all.push(...await auditRetry(chunk(simple, 10)[i], stats, `s-${i}`));
  for (let i = 0; i < chunk(study, 10).length; i++) all.push(...await auditRetry(chunk(study, 10)[i], stats, `st-${i}`));

  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, WARNING: 0, "SOURCE/LV ISSUE": 0 };
  for (const f of all) { const s = (f.severity || "WARNING").toUpperCase(); sev[s] = (sev[s] || 0) + 1; }

  stats.severityCounts = sev;
  stats.completedAt = new Date().toISOString();
  stats.dataUnchanged = hashBefore === md5(BS_FILE);
  fs.writeFileSync(FINDINGS_PATH, JSON.stringify(all, null, 2));
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));
  console.log(JSON.stringify({ scope: ids.size, findings: all.length, severity: sev, tokens: stats.totalTokens }, null, 2));
}

main().catch((e) => { console.error(e.message); process.exit(1); });
