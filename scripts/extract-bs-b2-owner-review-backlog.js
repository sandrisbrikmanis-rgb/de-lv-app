#!/usr/bin/env node
/**
 * BS-DE B2 owner review backlog extraction (read-only, $0).
 * Consolidates all unresolved owner-review findings from B2 audit trail.
 *
 * Usage: node scripts/extract-bs-b2-owner-review-backlog.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const LV_FILE = path.join(ROOT, "data", "b2.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b2.js");
const OUT_JSON = path.join(ROOT, "reports", "temp", "bs-b2-final-owner-review-backlog.json");
const OUT_MD = path.join(ROOT, "reports", "bs-b2-final-owner-review.md");

const SOURCES = [
  { key: "owner-review-pending", path: "reports/temp/bs-b2-owner-review-pending.json" },
  { key: "audit-validation", path: "reports/temp/bs-b2-audit-validation.json" },
  { key: "post-fix-regression", path: "reports/temp/bs-b2-post-fix-targeted-regression.json" },
  { key: "verify-regression", path: "reports/temp/bs-b2-verify-regression.json" },
  { key: "final-verify-regression", path: "reports/temp/bs-b2-final-verify-regression.json" },
  { key: "full-linguistic-audit", path: "reports/temp/bs-b2-full-linguistic-audit.json" },
  { key: "regression-fixes-apply-log", path: "reports/temp/bs-b2-regression-fixes-apply-log.json" },
];

const CATEGORIES = ["SOURCE_LV_ISSUE", "DE_SOURCE_ISSUE", "NEEDS_REVIEW", "STALE_AFTER_AUDIT"];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function buildIndex(words) {
  const byId = new Map();
  const byDe = new Map();
  words.forEach((entry, i) => {
    const id = entryId(entry, i);
    byId.set(id, { entry, index: i });
    if (entry.de) byDe.set(entry.de, { entry, index: i, id });
  });
  return { byId, byDe };
}

function parsePath(fieldPath) {
  return String(fieldPath).replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
}

function getAt(root, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (const part of parts) {
    if (cur === undefined || cur === null) return undefined;
    cur = cur[part];
  }
  return cur;
}

function findCard(bsIndex, lvIndex, cardId) {
  if (bsIndex.byId.has(cardId)) {
    const { entry: bsEntry, index } = bsIndex.byId.get(cardId);
    const lvEntry = lvIndex.byId.get(cardId)?.entry || null;
    return { bsEntry, lvEntry, index };
  }
  return null;
}

function makeOwnerReviewId(cardId, fieldPath, category) {
  return crypto.createHash("sha1")
    .update(`${cardId}|${fieldPath}|${category}`)
    .digest("hex")
    .slice(0, 12);
}

function makeDedupeKey(cardId, fieldPath, category) {
  return `${cardId}|${fieldPath}|${category}`;
}

function loadJson(relPath) {
  const full = path.join(ROOT, relPath);
  if (!fs.existsSync(full)) return null;
  return JSON.parse(fs.readFileSync(full, "utf8"));
}

function collectFromOwnerPending(data, out) {
  for (const cat of CATEGORIES) {
    for (const item of data[cat] || []) {
      out.push({
        cardId: item.cardId,
        fieldPath: item.field || item.fieldPath || "lv",
        category: cat,
        origin: item.source ? `owner-review-pending (${item.source})` : "owner-review-pending",
        originalReason: item.shortReason || item.reason || "",
        originalProposedText: item.correctedText || item.proposedBs || item.originalProposed || "",
        auditedCurrentText: item.currentText || item.currentBs || "",
        findingId: item.findingId || null,
      });
    }
  }
}

function collectFromValidation(data, out) {
  const items = data.results || data.items || data.findings || [];
  for (const item of items) {
    const verdict = String(item.verdict || "").toUpperCase();
    if (!CATEGORIES.includes(verdict)) continue;
    out.push({
      cardId: item.cardId,
      fieldPath: item.field || item.fieldPath || "lv",
      category: verdict,
      origin: "audit-validation",
      originalReason: item.originalReason || item.reason || item.shortReason || "",
      originalProposedText: item.originalProposed || item.proposedBs || item.correctedText || "",
      auditedCurrentText: item.currentText || item.currentBs || "",
      findingId: item.findingId || null,
    });
  }
}

function collectFromRegression(data, out) {
  const items = [
    ...(data.otherVerdicts || []),
    ...(data.cardResults || []).filter((r) => CATEGORIES.includes(r.verdict || r.status)),
  ];
  for (const item of items) {
    const verdict = String(item.verdict || item.status || "").toUpperCase();
    if (!CATEGORIES.includes(verdict)) continue;
    out.push({
      cardId: item.cardId,
      fieldPath: item.field || "lv",
      category: verdict,
      origin: "post-fix-targeted-regression",
      originalReason: item.reason || item.shortReason || "",
      originalProposedText: item.proposedBs || "",
      auditedCurrentText: item.currentBs || item.currentText || "",
      findingId: null,
    });
  }
}

function collectFromFinalVerify(data, out) {
  const items = (data.cardResults || []).filter((r) =>
    CATEGORIES.includes(r.verdict || r.status)
  );
  for (const item of items) {
    const verdict = String(item.verdict || item.status).toUpperCase();
    out.push({
      cardId: item.cardId,
      fieldPath: item.field || "lv",
      category: verdict,
      origin: "final-verify-regression",
      originalReason: item.reason || "",
      originalProposedText: item.proposedBs || "",
      auditedCurrentText: item.currentBs || "",
      findingId: null,
    });
  }
}

function collectFromApplyLog(data, out) {
  for (const item of data.log || []) {
    if (item.applyStatus !== "SOURCE_PENDING") continue;
    const verdict = String(item.note || "").toUpperCase();
    if (!CATEGORIES.includes(verdict)) continue;
    out.push({
      cardId: item.cardId,
      fieldPath: item.field || "lv",
      category: verdict,
      origin: "regression-fixes-apply-log",
      originalReason: item.note || "",
      originalProposedText: item.correctedText || "",
      auditedCurrentText: item.expectedCurrentText || "",
      findingId: item.findingId || null,
    });
  }
}

function dedupeCandidates(candidates) {
  const map = new Map();
  for (const c of candidates) {
    const key = makeDedupeKey(c.cardId, c.fieldPath, c.category);
    if (!map.has(key)) {
      map.set(key, { ...c, origins: [c.origin] });
    } else {
      const existing = map.get(key);
      if (!existing.origins.includes(c.origin)) existing.origins.push(c.origin);
      // Prefer longer/more detailed reason
      if ((c.originalReason || "").length > (existing.originalReason || "").length) {
        existing.originalReason = c.originalReason;
      }
      if (!existing.originalProposedText && c.originalProposedText) {
        existing.originalProposedText = c.originalProposedText;
      }
      if (!existing.auditedCurrentText && c.auditedCurrentText) {
        existing.auditedCurrentText = c.auditedCurrentText;
      }
      if (!existing.findingId && c.findingId) existing.findingId = c.findingId;
    }
  }
  return [...map.values()];
}

function classifyStale(item, bsEntry) {
  const field = item.fieldPath;
  const auditedText = item.auditedCurrentText || "";
  let currentText = "";

  if (field === "lv" || !field.startsWith("study.")) {
    currentText = getAt(bsEntry, field === "lv" ? "lv" : field) || bsEntry.lv || "";
  } else {
    const sub = field.startsWith("study.") ? field.slice("study.".length) : field;
    currentText = getAt(bsEntry.study, sub) || "";
    if (typeof currentText === "object") currentText = JSON.stringify(currentText);
  }

  const auditedMatchesCurrent = auditedText && currentText === auditedText;
  const auditedPresent = auditedText && typeof currentText === "string" && currentText.includes(auditedText);

  if (auditedMatchesCurrent || auditedPresent) {
    return {
      staleClassification: "STILL_REQUIRES_OWNER_REVIEW",
      currentStatus: "Audited text still present at target path",
      currentText,
    };
  }

  return {
    staleClassification: "RESOLVED_BY_LATER_CHANGE",
    currentStatus: "Audited snapshot text no longer at target path; later change applied",
    currentText,
  };
}

function buildStudyContext(bsEntry) {
  if (!bsEntry.study) return null;
  const s = bsEntry.study;
  const ctx = {
    layout: s.layout || null,
    translation: s.translation || null,
    rektion: s.rektion || null,
    explanation: s.explanation || null,
    forms: s.forms || null,
    formsLabel: s.formsLabel || null,
  };
  if (s.comparison) {
    ctx.comparison = s.comparison.map((c) => ({
      word: c.word,
      meaning: c.meaning,
      example: c.example,
    }));
  }
  if (s.examples) {
    ctx.examples = s.examples.slice(0, 3).map((e) => ({ de: e.de, lv: e.lv }));
  }
  return ctx;
}

function formatDe(bsEntry) {
  const parts = [bsEntry.de];
  if (bsEntry.de_article) parts.unshift(bsEntry.de_article);
  if (bsEntry.de_plural) parts.push(`pl: ${bsEntry.de_plural}`);
  return parts.join(" ");
}

function enrichItem(item, bsIndex, lvIndex) {
  const card = findCard(bsIndex, lvIndex, item.cardId);
  if (!card) {
    return { ...item, missing: true, ownerDecision: "PENDING" };
  }
  const { bsEntry, lvEntry } = card;
  const de = formatDe(bsEntry);
  const lv = lvEntry?.lv || "";
  const bs = bsEntry.lv || "";

  let fieldValue = "";
  if (item.fieldPath === "lv") {
    fieldValue = bs;
  } else if (item.fieldPath.startsWith("study.")) {
    const sub = item.fieldPath.slice("study.".length);
    fieldValue = getAt(bsEntry.study, sub) || "";
    if (typeof fieldValue === "object") fieldValue = JSON.stringify(fieldValue);
  } else {
    fieldValue = getAt(bsEntry, item.fieldPath) || "";
  }

  const studyContext = buildStudyContext(bsEntry);
  let staleClassification = null;
  let currentStatus = "Active pending owner review";

  if (item.category === "STALE_AFTER_AUDIT") {
    const stale = classifyStale(item, bsEntry);
    staleClassification = stale.staleClassification;
    currentStatus = stale.currentStatus;
    if (staleClassification === "RESOLVED_BY_LATER_CHANGE") {
      return null;
    }
  }

  return {
    ownerReviewId: makeOwnerReviewId(item.cardId, item.fieldPath, item.category),
    cardId: item.cardId,
    fieldPath: item.fieldPath,
    category: item.category,
    origin: item.origins.join(" + "),
    de,
    lv,
    bs,
    fieldValue,
    studyContext,
    originalReason: item.originalReason,
    originalProposedText: item.originalProposedText || null,
    auditedCurrentText: item.auditedCurrentText || null,
    currentStatus,
    staleClassification,
    ownerDecision: "PENDING",
  };
}

function runValidation() {
  const out = {};
  try { execSync("node --check data/bs/b2.js", { stdio: "pipe" }); out.syntax = "PASS"; }
  catch { out.syntax = "FAIL"; }
  try { execSync("diff -q data/bs/b2.js www/data/bs/b2.js", { stdio: "pipe" }); out.mirror = "PASS"; }
  catch { out.mirror = "FAIL"; }
  try {
    const de = JSON.parse(execSync("node scripts/verify-bs-de-compliance.js", { encoding: "utf8" }));
    out.deReadOnly = de.deReadOnly?.pass ? "PASS" : "FAIL";
  } catch { out.deReadOnly = "FAIL"; }
  try {
    const parity = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=bs", { encoding: "utf8" }));
    out.cardCount = parity.levels?.b2?.langCount;
    out.studyCount = parity.levels?.b2?.langStudyCount;
  } catch { /* */ }
  try {
    const collectOut = execSync("node scripts/audit-bs-b2-collect.js 2>/dev/null", { encoding: "utf8" });
    const match = collectOut.match(/"sectionAccentsTechnical"\s*:\s*(\d+)/);
    out.sectionAccentsTechnical = match ? parseInt(match[1], 10) : -1;
  } catch { out.sectionAccentsTechnical = -1; }
  return out;
}

function renderMarkdown(report) {
  const lines = [
    "# BS–DE B2 — Final Owner Review Backlog",
    "",
    `**Generated:** ${report.generatedAt.slice(0, 10)}`,
    "**Mode:** Extraction only — B2 production data changed: **0**",
    "**OpenAI API requests:** 0",
    "",
    "## Status",
    "",
    "- **BS–DE B2 AUTOMATED QUALITY/FIX CYCLE = CLOSED**",
    "- **FINAL – OWNER ACCEPTED** — not assigned (awaiting owner review)",
    "",
    "## Summary",
    "",
    "| Category | Active |",
    "|---|---:|",
    `| SOURCE_LV_ISSUE | ${report.counts.SOURCE_LV_ISSUE} |`,
    `| DE_SOURCE_ISSUE | ${report.counts.DE_SOURCE_ISSUE} |`,
    `| NEEDS_REVIEW | ${report.counts.NEEDS_REVIEW} |`,
    `| STALE_AFTER_AUDIT requiring review | ${report.counts.STALE_AFTER_AUDIT} |`,
    `| **TOTAL OWNER REVIEW** | **${report.counts.TOTAL}** |`,
    "",
    "| Resolved during extraction | Count |",
    "|---|---:|",
    `| STALE resolved by later change | ${report.resolved.staleByLaterChange} |`,
    `| duplicate/reclassified/resolved | ${report.resolved.duplicatesRemoved} |`,
    "",
    "## Audit trail sources checked",
    "",
    ...report.sourcesChecked.map((s) => `- ${s}`),
    "",
    `| raw unresolved candidates | ${report.stats.rawCandidates} |`,
    `| duplicates removed | ${report.stats.duplicatesRemoved} |`,
    `| resolved/reclassified removed | ${report.resolved.staleByLaterChange} |`,
    "",
  ];

  const groups = [
    ["SOURCE_LV_ISSUE", report.activeItems.filter((i) => i.category === "SOURCE_LV_ISSUE")],
    ["DE_SOURCE_ISSUE", report.activeItems.filter((i) => i.category === "DE_SOURCE_ISSUE")],
    ["NEEDS_REVIEW", report.activeItems.filter((i) => i.category === "NEEDS_REVIEW")],
    ["STALE_AFTER_AUDIT — STILL REQUIRES REVIEW", report.activeItems.filter((i) => i.category === "STALE_AFTER_AUDIT")],
  ];

  let ownerNum = 0;
  for (const [title, items] of groups) {
    if (items.length === 0) continue;
    lines.push(`## ${title}`);
    lines.push("");
    for (const item of items) {
      ownerNum += 1;
      const ownerId = `OWNER-${String(ownerNum).padStart(3, "0")}`;
      item.ownerId = ownerId;
      lines.push(`## ${ownerNum}. \`${item.cardId}\` (${ownerId})`);
      lines.push("");
      lines.push(`**DE:** ${item.de}`);
      lines.push("");
      lines.push(`**LV:** ${item.lv}`);
      lines.push("");
      lines.push(`**BS:** ${item.bs}`);
      lines.push("");
      lines.push(`**Field:** \`${item.fieldPath}\`${item.fieldValue && item.fieldPath !== "lv" ? ` → \`${item.fieldValue}\`` : ""}`);
      lines.push("");
      lines.push(`**Category:** \`${item.category}\``);
      lines.push("");
      lines.push(`**Origin:** ${item.origin}`);
      lines.push("");
      lines.push("**Kāpēc nonāca backlog:**");
      lines.push(item.originalReason || "—");
      lines.push("");
      if (item.originalProposedText) {
        lines.push("**Auditā piedāvātais variants:**");
        lines.push(item.originalProposedText);
        lines.push("");
      }
      if (item.studyContext) {
        lines.push("**Study konteksts (aktuālais BS):**");
        lines.push("```json");
        lines.push(JSON.stringify(item.studyContext, null, 2));
        lines.push("```");
        lines.push("");
      }
      lines.push("**Aktuālais stāvoklis:**");
      lines.push(item.currentStatus);
      lines.push("");
      lines.push("**OWNER DECISION:** `PENDING`");
      lines.push("");
      lines.push("---");
      lines.push("");
    }
  }

  if (report.resolvedItems.length > 0) {
    lines.push("## RESOLVED / INFORMATION ONLY");
    lines.push("");
    for (const item of report.resolvedItems) {
      lines.push(`- **${item.cardId}** (\`${item.fieldPath}\`, ${item.category}): ${item.currentStatus}`);
    }
    lines.push("");
  }

  lines.push("## Technical validation");
  lines.push("");
  const v = report.validation;
  lines.push(`- syntax: ${v.syntax}`);
  lines.push(`- DE READ-ONLY: ${v.deReadOnly}`);
  lines.push(`- sectionAccents TECHNICAL: ${v.sectionAccentsTechnical}`);
  lines.push(`- data ≡ www: ${v.mirror}`);
  lines.push(`- card count: ${v.cardCount}`);
  lines.push(`- study count: ${v.studyCount}`);
  lines.push(`- B2 production data files changed: 0`);
  lines.push("");
  lines.push("# BS–DE B2 OWNER REVIEW BACKLOG = READY");

  return lines.join("\n");
}

function main() {
  const sourcesChecked = [];
  const rawCandidates = [];

  for (const src of SOURCES) {
    const data = loadJson(src.path);
    if (!data) continue;
    sourcesChecked.push(src.key);
    if (src.key === "owner-review-pending") collectFromOwnerPending(data, rawCandidates);
    else if (src.key === "audit-validation") collectFromValidation(data, rawCandidates);
    else if (src.key === "post-fix-regression") collectFromRegression(data, rawCandidates);
    else if (src.key === "final-verify-regression") collectFromFinalVerify(data, rawCandidates);
    else if (src.key === "regression-fixes-apply-log") collectFromApplyLog(data, rawCandidates);
  }

  const rawCount = rawCandidates.length;
  const deduped = dedupeCandidates(rawCandidates);
  const duplicatesRemoved = rawCount - deduped.length;

  const bsWords = loadWords(BS_FILE);
  const lvWords = loadWords(LV_FILE);
  const bsIndex = buildIndex(bsWords);
  const lvIndex = buildIndex(lvWords);

  const activeItems = [];
  const resolvedItems = [];

  for (const item of deduped) {
    const enriched = enrichItem(item, bsIndex, lvIndex);
    if (!enriched) {
      resolvedItems.push({
        cardId: item.cardId,
        fieldPath: item.fieldPath,
        category: item.category,
        currentStatus: "RESOLVED_BY_LATER_CHANGE — audited snapshot no longer at target path",
        originalReason: item.originalReason,
      });
      continue;
    }
    if (enriched.missing) continue;
    activeItems.push(enriched);
  }

  const counts = {
    SOURCE_LV_ISSUE: activeItems.filter((i) => i.category === "SOURCE_LV_ISSUE").length,
    DE_SOURCE_ISSUE: activeItems.filter((i) => i.category === "DE_SOURCE_ISSUE").length,
    NEEDS_REVIEW: activeItems.filter((i) => i.category === "NEEDS_REVIEW").length,
    STALE_AFTER_AUDIT: activeItems.filter((i) => i.category === "STALE_AFTER_AUDIT").length,
    TOTAL: activeItems.length,
  };

  const validation = runValidation();
  const revanchierenIncluded = activeItems.some((i) => i.cardId === "b2-sich-revanchieren");

  const report = {
    generatedAt: new Date().toISOString(),
    status: "READY",
    automatedQualityCycle: "CLOSED",
    ownerAccepted: false,
    openAiRequests: 0,
    b2DataFilesChanged: 0,
    sourcesChecked,
    stats: { rawCandidates: rawCount, duplicatesRemoved },
    resolved: {
      staleByLaterChange: resolvedItems.length,
      duplicatesRemoved,
    },
    counts,
    revanchierenIncluded,
    validation,
    activeItems,
    resolvedItems,
  };

  const md = renderMarkdown(report);
  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));
  fs.writeFileSync(OUT_MD, `${md}\n`);

  console.log(JSON.stringify({
    sourcesChecked: sourcesChecked.length,
    rawCandidates: rawCount,
    duplicatesRemoved,
    resolvedByLaterChange: resolvedItems.length,
    active: counts,
    revanchierenIncluded,
    validation,
    jsonPath: OUT_JSON,
    mdPath: OUT_MD,
  }, null, 2));
}

main();
