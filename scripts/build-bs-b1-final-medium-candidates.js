#!/usr/bin/env node
/**
 * Verify 58 remaining MEDIUM regression findings against current data/bs/b1.js ($0).
 * Output: reports/temp/bs-b1-final-medium-candidates.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const LV_FILE = path.join(ROOT, "data", "b1.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const SOURCE_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-regression-findings.json");
const OUT_PATH = path.join(ROOT, "reports", "temp", "bs-b1-final-medium-candidates.json");

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b1-${entry.de}-${index}`;
}

function parsePath(fieldPath) {
  return fieldPath.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
}

function normalizeField(field) {
  if (!field) return "lv";
  return String(field).replace(/\.bsText$/i, "").replace(/^bsText$/, "lv");
}

function getAt(root, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (const part of parts) {
    if (cur === undefined || cur === null) return undefined;
    cur = cur[part];
  }
  return typeof cur === "string" ? cur : cur === undefined ? undefined : String(cur);
}

function resolveFieldPath(entry, field) {
  const normalized = normalizeField(field);
  if (normalized === "lv") return { root: entry, path: "lv", exists: true };
  if (!normalized.startsWith("study.")) return null;
  if (!entry.study) return null;
  const sub = normalized.slice("study.".length);
  return { root: entry.study, path: sub, exists: getAt(entry.study, sub) !== undefined };
}

function getCurrentText(entry, field) {
  const resolved = resolveFieldPath(entry, field);
  if (!resolved || !resolved.exists) return null;
  return getAt(resolved.root, resolved.path) ?? "";
}

function normalizeProblem(problem) {
  return String(problem || "").toLowerCase().replace(/[„""'']/g, "").replace(/\s+/g, " ").trim().slice(0, 120);
}

function classifyIssueType(field) {
  const f = normalizeField(field);
  if (f === "lv" || f === "study.translation") return "translation";
  if (f.includes(".examples")) return "examples";
  if (f.includes(".explanation")) return "explanation";
  if (f.includes(".comparison")) return "comparison";
  if (f.includes(".tip") || f.includes(".important")) return "tip_important";
  return "other";
}

function main() {
  const lvWords = loadWords(LV_FILE);
  const bsWords = loadWords(BS_FILE);
  const byId = new Map();
  bsWords.forEach((entry, index) => byId.set(entryId(entry, index), { entry, index }));

  const raw = JSON.parse(fs.readFileSync(SOURCE_PATH, "utf8"));
  const mediumFindings = raw.filter((f) => String(f.severity || "").toUpperCase() === "MEDIUM");

  const stats = {
    regressionMedium: mediumFindings.length,
    staleAfterFix: 0,
    stalePath: 0,
    duplicates: 0,
    lunaCandidates: 0,
    uniqueCards: 0,
  };

  const stale = [];
  const candidates = [];
  const seen = new Set();

  for (const finding of mediumFindings) {
    const cardId = finding.cardId;
    const field = normalizeField(finding.field || "lv");
    const key = `${cardId}|${field}|${normalizeProblem(finding.problem)}`;

    if (seen.has(key)) {
      stats.duplicates += 1;
      continue;
    }
    seen.add(key);

    const card = byId.get(cardId);
    if (!card) {
      stats.stalePath += 1;
      stale.push({ cardId, field, status: "STALE_PATH", reason: "card_not_found" });
      continue;
    }

    const currentText = getCurrentText(card.entry, field);
    if (currentText === null) {
      stats.stalePath += 1;
      stale.push({ cardId, field, status: "STALE_PATH", reason: "field_not_found" });
      continue;
    }

    const auditedText = String(finding.existingBsText || finding.currentText || "").trim();
    if (auditedText && auditedText !== currentText) {
      stats.staleAfterFix += 1;
      stale.push({ cardId, field, status: "STALE_AFTER_FIX", auditedText, currentText, problem: finding.problem });
      continue;
    }

    const lvEntry = lvWords[card.index];
    const candidate = {
      cardId,
      field,
      issueType: classifyIssueType(field),
      problem: finding.problem || "",
      recommendedFix: finding.recommendedFix || "",
      auditedText,
      currentText,
      de: card.entry.de,
      deArticle: card.entry.de_article || null,
      dePlural: card.entry.de_plural || null,
      lvSource: field === "lv" ? lvEntry?.lv : getAt(lvEntry?.study, field.startsWith("study.") ? field.slice("study.".length) : "") ?? "",
    };

    if (field.startsWith("study.")) {
      candidate.lvSource = getAt(lvEntry?.study, field.slice("study.".length)) ?? "";
    } else {
      candidate.lvSource = lvEntry?.lv ?? "";
    }

    candidates.push(candidate);
  }

  stats.lunaCandidates = candidates.length;
  stats.uniqueCards = new Set(candidates.map((c) => c.cardId)).size;

  const byType = {};
  for (const c of candidates) byType[c.issueType] = (byType[c.issueType] || 0) + 1;

  const output = { generatedAt: new Date().toISOString(), stats, byIssueType: byType, stale, candidates };
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(output, null, 2));
  console.log(JSON.stringify({ stats, byIssueType: byType }, null, 2));
}

main();
