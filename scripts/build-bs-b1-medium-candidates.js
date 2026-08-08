#!/usr/bin/env node
/**
 * Phase A — consolidate historical MEDIUM findings against current data/bs/b1.js.
 * No API. Output: reports/temp/bs-b1-medium-current-candidates.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const LV_FILE = path.join(ROOT, "data", "b1.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const OUT_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-current-candidates.json");

const SOURCE_FILES = [
  { id: "reaudit-terra", path: path.join(ROOT, "reports", "temp", "bs-b1-reaudit-terra-findings.json") },
  { id: "luna-regression", path: path.join(ROOT, "reports", "temp", "bs-b1-luna-regression-findings.json") },
  { id: "luna-regression-2", path: path.join(ROOT, "reports", "temp", "bs-b1-luna-regression-2-findings.json") },
];

const VERIFIED_FALSE_POSITIVES = new Set([
  "b1-berichten|study.examples[2].lv",
  "b1-schmieren|study.comparison[1].word",
  "b1-nachdem|study.tip",
  "b1-nachdem|study.tip.leftBlocks[0].text",
]);

const DE_READ_ONLY_PATTERNS = [
  /^study\.comparison\[\d+\]\.word$/,
  /^study\.comparison\[\d+\]\.example$/,
];

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
  return String(field)
    .replace(/\.bsText$/i, "")
    .replace(/^bsText$/, "lv");
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
  const val = getAt(entry.study, sub);
  return { root: entry.study, path: sub, exists: val !== undefined };
}

function getCurrentText(entry, field) {
  const resolved = resolveFieldPath(entry, field);
  if (!resolved || !resolved.exists) return null;
  return getAt(resolved.root, resolved.path) ?? "";
}

function normalizeProblem(problem) {
  return String(problem || "")
    .toLowerCase()
    .replace(/[„""'']/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
}

const SOURCE_PRIORITY = {
  "luna-regression-2": 3,
  "luna-regression": 2,
  "reaudit-terra": 1,
};

function mergeCandidate(existing, incoming) {
  if (!existing.sources.includes(incoming.source)) existing.sources.push(incoming.source);
  const existingPri = Math.max(...existing.sources.map((s) => SOURCE_PRIORITY[s] || 0));
  const incomingPri = SOURCE_PRIORITY[incoming.source] || 0;
  if (incomingPri >= existingPri) {
    if (incoming.problem && !existing.problems.includes(incoming.problem)) {
      existing.problems.push(incoming.problem);
    }
    if (incoming.recommendedFix) existing.recommendedFix = incoming.recommendedFix;
    existing.problem = existing.problems[0];
  } else if (incoming.problem && !existing.problems.includes(incoming.problem)) {
    existing.problems.push(incoming.problem);
  }
}

function fieldDedupeKey(cardId, field) {
  return `${cardId}|${normalizeField(field)}`;
}

function classifyIssueType(field) {
  const f = normalizeField(field);
  if (f === "lv" || f === "study.translation") return "translation";
  if (f.includes(".examples")) return "examples";
  if (f.includes(".explanation")) return "explanation";
  if (f.includes(".comparison")) return "comparison";
  if (f.includes(".tip") || f.includes(".important")) return "tip_important";
  if (f.includes("sectionAccents")) return "sectionAccents";
  return "other";
}

function isDeReadOnly(field) {
  const f = normalizeField(field);
  return DE_READ_ONLY_PATTERNS.some((re) => re.test(f));
}

function isLocalExcluded(cardId, field, severity) {
  const key = `${cardId}|${normalizeField(field)}`;
  if (VERIFIED_FALSE_POSITIVES.has(key)) return "verified_false_positive";
  if (isDeReadOnly(field)) return "de_read_only_field";
  const sev = String(severity || "").toUpperCase();
  if (sev === "SOURCE/LV ISSUE" || sev === "SOURCE_LV_ISSUE") return "source_lv_issue";
  return null;
}

function loadFindings(source) {
  if (!fs.existsSync(source.path)) return [];
  const raw = JSON.parse(fs.readFileSync(source.path, "utf8"));
  const arr = Array.isArray(raw) ? raw : raw.findings || raw.items || [];
  return arr
    .filter((f) => String(f.severity || "").toUpperCase() === "MEDIUM")
    .map((f) => ({ ...f, source: source.id }));
}

function buildCardIndex(words) {
  const byId = new Map();
  words.forEach((entry, index) => {
    byId.set(entryId(entry, index), { entry, index });
  });
  return byId;
}

function main() {
  const lvWords = loadWords(LV_FILE);
  const bsWords = loadWords(BS_FILE);
  const cardIndex = buildCardIndex(bsWords);

  const stats = {
    historicalMedium: 0,
    duplicates: 0,
    fieldDuplicates: 0,
    staleAfterFix: 0,
    stalePath: 0,
    localExcluded: 0,
    alreadyFixed: 0,
    lunaCandidates: 0,
    uniqueCards: 0,
  };

  const stale = [];
  const localExcluded = [];
  const candidates = [];

  const allFindings = [];
  for (const source of SOURCE_FILES) {
    allFindings.push(...loadFindings(source));
  }
  stats.historicalMedium = allFindings.length;

  const seenProblems = new Set();
  const fieldSeen = new Map();

  for (const finding of allFindings) {
    const cardId = finding.cardId;
    const field = normalizeField(finding.field || "lv");
    const problemKey = `${cardId}|${field}|${normalizeProblem(finding.problem)}`;

    if (seenProblems.has(problemKey)) {
      stats.duplicates += 1;
      continue;
    }
    seenProblems.add(problemKey);

    const excludeReason = isLocalExcluded(cardId, field, finding.severity);
    if (excludeReason) {
      stats.localExcluded += 1;
      localExcluded.push({ cardId, field, reason: excludeReason, problem: finding.problem, source: finding.source });
      continue;
    }

    const card = cardIndex.get(cardId);
    if (!card) {
      stats.stalePath += 1;
      stale.push({ cardId, field, status: "STALE_PATH", reason: "card_not_found", source: finding.source });
      continue;
    }

    const currentText = getCurrentText(card.entry, field);
    if (currentText === null) {
      stats.stalePath += 1;
      stale.push({ cardId, field, status: "STALE_PATH", reason: "field_not_found", source: finding.source });
      continue;
    }

    const auditedText = String(finding.existingBsText || finding.currentText || "").trim();
    if (auditedText && auditedText !== currentText) {
      stats.staleAfterFix += 1;
      stale.push({
        cardId,
        field,
        status: "STALE_AFTER_FIX",
        auditedText,
        currentText,
        source: finding.source,
        problem: finding.problem,
      });
      continue;
    }

    const recommended = String(finding.recommendedFix || "").trim();
    if (recommended && recommended === currentText) {
      stats.alreadyFixed += 1;
      stale.push({
        cardId,
        field,
        status: "STALE_AFTER_FIX",
        reason: "matches_recommended_fix",
        currentText,
        source: finding.source,
      });
      continue;
    }

    const fKey = fieldDedupeKey(cardId, field);
    if (fieldSeen.has(fKey)) {
      stats.fieldDuplicates += 1;
      mergeCandidate(fieldSeen.get(fKey), finding);
      continue;
    }

    const lvEntry = lvWords[card.index];
    const candidate = {
      cardId,
      field,
      issueType: classifyIssueType(field),
      sources: [finding.source],
      problems: [finding.problem || ""],
      problem: finding.problem || "",
      recommendedFix: finding.recommendedFix || "",
      auditedText,
      currentText,
      de: card.entry.de,
      deArticle: card.entry.de_article || null,
      dePlural: card.entry.de_plural || null,
      lvSource: field === "lv" ? lvEntry?.lv : undefined,
    };

    if (field.startsWith("study.")) {
      const sub = field.slice("study.".length);
      candidate.lvSource = getAt(lvEntry?.study, sub) ?? "";
    } else {
      candidate.lvSource = lvEntry?.lv ?? "";
    }

    candidates.push(candidate);
    fieldSeen.set(fKey, candidate);
  }

  stats.lunaCandidates = candidates.length;
  stats.uniqueCards = new Set(candidates.map((c) => c.cardId)).size;

  const byType = {};
  for (const c of candidates) {
    byType[c.issueType] = (byType[c.issueType] || 0) + 1;
  }

  const output = {
    generatedAt: new Date().toISOString(),
    stats,
    byIssueType: byType,
    sourceFiles: SOURCE_FILES.map((s) => s.id),
    localExcluded,
    stale,
    candidates,
  };

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(output, null, 2));

  console.log(JSON.stringify({ stats, byIssueType: byType, output: OUT_PATH }, null, 2));
}

main();
