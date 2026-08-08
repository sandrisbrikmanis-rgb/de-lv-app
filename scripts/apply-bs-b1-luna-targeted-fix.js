#!/usr/bin/env node
/**
 * Apply BS-DE B1 CRITICAL/HIGH fixes from Terra re-audit findings.
 * Local application only — no API. Luna batch handled separately.
 *
 * Run: node scripts/apply-bs-b1-luna-targeted-fix.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const DRY_RUN = process.argv.includes("--dry-run");
const FINDINGS_PATH = path.join(ROOT, "reports", "temp", "bs-b1-reaudit-terra-findings.json");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");
const REPORT_PATH = path.join(ROOT, "reports", "temp", "bs-b1-luna-targeted-fix-applied.json");

const SKIP_RESOLVED = new Set([
  "b1-Weise-3228",
]);

const stats = {
  criticalTotal: 0,
  highTotal: 0,
  criticalApplied: 0,
  highApplied: 0,
  criticalSkipped: 0,
  highSkipped: 0,
  criticalResolvedNoChange: 0,
  mainTranslationChanged: 0,
  studyFieldsChanged: 0,
  studyCardsChanged: new Set(),
  requiresReview: [],
  changes: [],
};

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function writeB1(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const B1_WORDS = ${json};\n\nwindow.B1_WORDS = B1_WORDS;\n`, "utf8");
}

function normalizeText(value) {
  return String(value || "")
    .replace(/[„""''`]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function parsePath(fieldPath) {
  return fieldPath.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
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

function setAt(root, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] === undefined || cur[parts[i]] === null) return false;
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
  return true;
}

function buildIndex(words) {
  const byStudyId = new Map();
  const byIndexId = new Map();
  words.forEach((entry, index) => {
    if (entry.study?.id) byStudyId.set(entry.study.id, entry);
    byIndexId.set(`b1-${entry.de}-${index}`, entry);
  });
  return { byStudyId, byIndexId };
}

function findEntry(index, cardId) {
  if (index.byStudyId.has(cardId)) return index.byStudyId.get(cardId);
  if (index.byIndexId.has(cardId)) return index.byIndexId.get(cardId);
  return null;
}

function isInvalidFix(fix) {
  if (!fix) return true;
  const lower = fix.toLowerCase();
  if (lower.includes("latvian source") || lower.includes("correct the latvian")) return true;
  if (lower.startsWith("keep ") && lower.includes("način")) return true;
  return false;
}

function pickRecommendedFix(fix, field) {
  if (!fix || isInvalidFix(fix)) return "";
  const trimmed = fix.trim();
  if (!trimmed.includes(";")) return trimmed;
  const first = trimmed.split(";")[0].trim();
  if (field === "lv" || field === "study.translation") {
    return first.charAt(0).toUpperCase() + first.slice(1);
  }
  return trimmed;
}

function capitalizeMain(value) {
  const s = String(value || "").trim();
  if (!s) return s;
  if (s.includes("•")) {
    return s.split("•").map((p) => {
      const t = p.trim();
      return t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
    }).join(" • ");
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function resolveFieldPath(entry, field) {
  if (field === "lv") return { root: entry, path: "lv" };
  if (!field.startsWith("study.")) return null;
  if (!entry.study) return null;
  const sub = field.slice("study.".length);
  if (sub === "important" && typeof entry.study.important === "string") {
    return { root: entry.study, path: "important" };
  }
  if (sub === "tip" && typeof entry.study.tip === "string") {
    return { root: entry.study, path: "tip" };
  }
  if (sub === "important" && entry.study.important && typeof entry.study.important === "object" && !Array.isArray(entry.study.important)) {
    if (entry.study.important.text !== undefined) {
      return { root: entry.study, path: "important.text" };
    }
  }
  if (sub === "tip" && entry.study.tip && typeof entry.study.tip === "object") {
    if (entry.study.tip.leftBlocks?.[0]?.text !== undefined) {
      if (typeof entry.study.tip.leftBlocks[0].text === "string") {
        return { root: entry.study, path: "tip.leftBlocks[0].text" };
      }
    }
    if (typeof entry.study.tip.text === "string") {
      return { root: entry.study, path: "tip.text" };
    }
  }
  return { root: entry.study, path: sub };
}

function textsMatch(current, expected) {
  if (current === expected) return true;
  return normalizeText(current) === normalizeText(expected);
}

function recordSkip(finding, reason, actual) {
  if (finding.severity === "CRITICAL") stats.criticalSkipped++;
  else stats.highSkipped++;
  stats.requiresReview.push({
    cardId: finding.cardId,
    field: finding.field,
    severity: finding.severity,
    reason,
    existingBsText: finding.existingBsText,
    recommendedFix: finding.recommendedFix,
    actualCurrent: actual !== undefined ? String(actual).slice(0, 200) : undefined,
  });
}

function recordChange(finding, entry, current, next, method = "replace") {
  const severity = finding.severity.toUpperCase();
  if (severity === "CRITICAL") stats.criticalApplied++;
  else stats.highApplied++;
  if (finding.field === "lv") stats.mainTranslationChanged++;
  else stats.studyFieldsChanged++;
  if (entry.study?.id) stats.studyCardsChanged.add(entry.study.id);
  stats.changes.push({
    cardId: finding.cardId,
    field: finding.field,
    severity,
    before: current,
    after: next,
    method,
  });
}

function applyFinding(finding, entry) {
  const severity = finding.severity.toUpperCase();
  if (severity === "CRITICAL") stats.criticalTotal++;
  else if (severity === "HIGH") stats.highTotal++;

  if (SKIP_RESOLVED.has(finding.cardId) && severity === "CRITICAL") {
    stats.criticalResolvedNoChange++;
    stats.changes.push({
      cardId: finding.cardId,
      field: finding.field,
      severity,
      before: finding.existingBsText,
      after: finding.existingBsText,
      method: "resolved_no_change_bs_correct_per_de",
      note: "BS Način matches DE Weise (way/manner); LV source mismatch only",
    });
    return;
  }

  const resolved = resolveFieldPath(entry, finding.field);
  if (!resolved) {
    recordSkip(finding, "unresolved_field_path");
    return;
  }

  const current = getAt(resolved.root, resolved.path);
  if (current === undefined || current === null) {
    recordSkip(finding, "field_missing");
    return;
  }
  if (typeof current !== "string") {
    recordSkip(finding, "field_not_string");
    return;
  }

  const nextRaw = pickRecommendedFix(finding.recommendedFix, finding.field);
  if (!nextRaw) {
    recordSkip(finding, "invalid_recommended_fix");
    return;
  }

  let next = nextRaw;
  if (finding.field === "lv" || finding.field === "study.translation") {
    next = capitalizeMain(next);
  }

  if (!textsMatch(current, finding.existingBsText)) {
    if (current.includes(finding.existingBsText)) {
      const replaced = current.replace(finding.existingBsText, nextRaw);
      const finalNext = (finding.field === "lv" || finding.field === "study.translation")
        ? capitalizeMain(replaced)
        : replaced;
      if (finalNext !== current) {
        setAt(resolved.root, resolved.path, finalNext);
        recordChange(finding, entry, current, finalNext, "substring_replace");
        return;
      }
    }
    recordSkip(finding, "existing_text_mismatch", current);
    return;
  }

  if (!next || normalizeText(next) === normalizeText(current)) {
    recordSkip(finding, "no_effective_change");
    return;
  }

  if (!setAt(resolved.root, resolved.path, next)) {
    recordSkip(finding, "set_failed");
    return;
  }

  recordChange(finding, entry, current, next);
}

function main() {
  const findings = JSON.parse(fs.readFileSync(FINDINGS_PATH, "utf8"));
  const targets = findings.filter((f) => ["CRITICAL", "HIGH"].includes(String(f.severity).toUpperCase()));
  const words = loadWords(BS_FILE);
  const index = buildIndex(words);

  for (const finding of targets) {
    const entry = findEntry(index, finding.cardId);
    if (!entry) {
      recordSkip(finding, "card_not_found");
      continue;
    }
    applyFinding(finding, entry);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    findingsSource: FINDINGS_PATH,
    stats: {
      ...stats,
      studyCardsChanged: [...stats.studyCardsChanged],
    },
  };

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  console.log(JSON.stringify({
    critical: `${stats.criticalApplied}/${stats.criticalTotal} (+${stats.criticalResolvedNoChange} resolved no-change)`,
    high: `${stats.highApplied}/${stats.highTotal}`,
    mainChanged: stats.mainTranslationChanged,
    studyFields: stats.studyFieldsChanged,
    review: stats.requiresReview.length,
  }, null, 2));

  if (!DRY_RUN) {
    writeB1(BS_FILE, words);
    writeB1(WWW_FILE, words);
    console.log(`Wrote ${BS_FILE} and ${WWW_FILE}`);
  }
}

main();
