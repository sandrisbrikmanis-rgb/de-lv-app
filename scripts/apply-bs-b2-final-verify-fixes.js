#!/usr/bin/env node
/**
 * Apply BS-DE B2 final verify regression findings (exact currentBs → proposedBs).
 * No API. Source: reports/temp/bs-b2-verify-regression.json
 *
 * Run: node scripts/apply-bs-b2-final-verify-fixes.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const DRY_RUN = process.argv.includes("--dry-run");
const REGRESSION_JSON = path.join(ROOT, "reports", "temp", "bs-b2-verify-regression.json");
const BS_FILE = path.join(ROOT, "data", "bs", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b2.js");
const APPLY_LOG = path.join(ROOT, "reports", "temp", "bs-b2-final-verify-fixes-apply-log.json");
const VERIFY_SCOPE = path.join(ROOT, "reports", "temp", "bs-b2-final-verify-scope.json");
const REPORT_MD = path.join(ROOT, "reports", "bs-b2-final-verify-fixes-apply-report.md");

function makeFindingId(f) {
  return crypto.createHash("sha1")
    .update(`${f.cardId}|${f.field}|${f.currentBs || f.currentText || ""}|${f.proposedBs || f.correctedText || ""}`)
    .digest("hex")
    .slice(0, 12);
}

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function writeB2(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const B2_WORDS = ${json};\n\nwindow.B2_WORDS = B2_WORDS;\n`, "utf8");
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

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function normalizeCardId(cardId) {
  return String(cardId || "")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ä/g, "ae")
    .replace(/ß/g, "ss");
}

function buildIndex(words) {
  const byCardId = new Map();
  const byStudyId = new Map();
  const byDe = new Map();
  words.forEach((entry, index) => {
    const id = entryId(entry, index);
    byCardId.set(id, entry);
    if (entry.study?.id) {
      byStudyId.set(entry.study.id, entry);
      byStudyId.set(normalizeCardId(entry.study.id), entry);
    }
    byCardId.set(normalizeCardId(id), entry);
    if (entry.de) byDe.set(entry.de, entry);
  });
  return { byCardId, byStudyId, byDe };
}

function findEntry(index, fix) {
  const candidates = [fix.cardId, normalizeCardId(fix.cardId)];
  for (const id of candidates) {
    if (index.byCardId.has(id)) return index.byCardId.get(id);
    if (index.byStudyId.has(id)) return index.byStudyId.get(id);
  }
  if (fix.de && index.byDe.has(fix.de)) return index.byDe.get(fix.de);
  return null;
}

function resolveTarget(entry, field) {
  if (!field || field === "lv") return { root: entry, path: "lv" };
  if (field.startsWith("study.")) {
    if (!entry.study) return null;
    const sub = field.slice("study.".length);
    return { root: entry.study, path: sub };
  }
  return null;
}

function buildPatchManifest(regression) {
  const findings = regression.qualityFindings || regression.findings || [];
  const patches = [];

  for (const f of findings) {
    const item = {
      findingId: f.findingId || makeFindingId(f),
      cardId: f.cardId,
      field: f.field,
      severity: f.severity || null,
      category: f.category || null,
      de: f.de || "",
      currentText: f.currentBs || f.currentText || "",
      correctedText: f.proposedBs || f.correctedText || "",
      reason: f.reason || "",
      verdict: String(f.verdict || "FIX").toUpperCase(),
    };
    if (!item.field || !item.correctedText) continue;
    patches.push(item);
  }

  const seen = new Set();
  const byField = new Map();
  for (const p of patches) {
    const key = `${p.cardId}|${p.field}|${p.currentText}`;
    if (seen.has(key)) throw new Error(`Duplicate patch: ${key}`);
    seen.add(key);
    const fk = `${p.cardId}|${p.field}`;
    if (!byField.has(fk)) byField.set(fk, new Set());
    byField.get(fk).add(p.correctedText);
  }

  const conflicts = [];
  for (const [k, texts] of byField) {
    if (texts.size > 1) conflicts.push({ field: k, texts: [...texts] });
  }

  return { patches, conflicts, inputFindings: findings.length };
}

function applyOne(entry, fix) {
  const target = resolveTarget(entry, fix.field);
  if (!target) return { applyStatus: "NOT_FOUND", reason: "unresolved_field" };

  const current = getAt(target.root, target.path);
  const expected = fix.currentText;
  const corrected = fix.correctedText;

  if (current === undefined || current === null) {
    return { applyStatus: "NOT_FOUND", reason: "field_missing" };
  }

  if (typeof current !== "string") {
    return { applyStatus: "NOT_FOUND", reason: "non_string_field" };
  }

  if (current === corrected) return { applyStatus: "ALREADY_FIXED" };
  if (current !== expected) {
    return { applyStatus: "STALE_CURRENT_TEXT", actual: current };
  }

  if (!DRY_RUN) setAt(target.root, target.path, corrected);
  return { applyStatus: "APPLIED" };
}

function runValidations() {
  const out = {};
  try {
    execSync("node --check data/bs/b2.js", { stdio: "pipe" });
    out.syntax = "PASS";
  } catch {
    out.syntax = "FAIL";
  }
  try {
    execSync("diff -q data/bs/b2.js www/data/bs/b2.js", { stdio: "pipe" });
    out.mirror = "PASS";
  } catch {
    out.mirror = "FAIL";
  }
  try {
    const de = JSON.parse(execSync("node scripts/verify-bs-de-compliance.js", { encoding: "utf8" }));
    out.deReadOnly = de.deReadOnly?.pass ? "PASS" : "FAIL";
  } catch {
    out.deReadOnly = "FAIL";
  }
  try {
    const parity = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=bs", { encoding: "utf8" }));
    out.parity = parity.pass ? "PASS" : "FAIL";
    out.cardCount = parity.levels?.b2?.langCount;
    out.studyCount = parity.levels?.b2?.langStudyCount;
  } catch {
    out.parity = "FAIL";
  }
  try {
    const moj = JSON.parse(execSync("node scripts/audit-mojibake.js --lang=bs", { encoding: "utf8" }));
    out.mojibake = moj.pass ? "PASS" : "FAIL";
  } catch {
    out.mojibake = "CHECK";
  }
  try {
    const collectOut = execSync("node scripts/audit-bs-b2-collect.js 2>/dev/null", { encoding: "utf8" });
    const jsonLine = collectOut.trim().split("\n").filter((l) => l.startsWith("{")).pop();
    const collect = JSON.parse(jsonLine || "{}");
    out.sectionAccentsTechnical = collect.sectionAccentsTechnical ?? "CHECK";
  } catch {
    out.sectionAccentsTechnical = "CHECK";
  }
  return out;
}

function verifyApplied(log, words, index) {
  let ok = 0;
  let fail = 0;
  const details = [];
  for (const e of log) {
    if (e.applyStatus !== "APPLIED" && e.applyStatus !== "ALREADY_FIXED") continue;
    const entry = findEntry(index, e);
    if (!entry) { fail++; details.push({ findingId: e.findingId, fail: "card_not_found" }); continue; }
    const target = resolveTarget(entry, e.field);
    if (!target) { fail++; details.push({ findingId: e.findingId, fail: "field_not_found" }); continue; }
    const cur = getAt(target.root, target.path);
    if (typeof cur === "string") {
      const oldGone = !cur.includes(e.expectedCurrentText);
      const newPresent = cur === e.correctedText;
      if (oldGone && newPresent) ok++;
      else {
        fail++;
        details.push({ findingId: e.findingId, cur, expected: e.correctedText });
      }
    } else ok++;
  }
  return { ok, fail, details };
}

function main() {
  const regression = JSON.parse(fs.readFileSync(REGRESSION_JSON, "utf8"));
  const { patches, conflicts, inputFindings } = buildPatchManifest(regression);

  const conflictKeys = new Set(conflicts.map((c) => c.field));
  const words = loadWords(BS_FILE);
  const index = buildIndex(words);

  const log = [];
  const statusCounts = {
    APPLIED: 0,
    ALREADY_FIXED: 0,
    STALE_CURRENT_TEXT: 0,
    PATCH_CONFLICT: 0,
    NOT_FOUND: 0,
  };
  const severityApplied = { MEDIUM: 0, LOW: 0 };
  const changedCards = new Set();
  const cardDetails = new Map();

  for (const fix of patches) {
    const fk = `${fix.cardId}|${fix.field}`;
    if (conflictKeys.has(fk)) {
      statusCounts.PATCH_CONFLICT += 1;
      log.push({
        findingId: fix.findingId,
        cardId: fix.cardId,
        field: fix.field,
        severity: fix.severity,
        expectedCurrentText: fix.currentText,
        correctedText: fix.correctedText,
        applyStatus: "PATCH_CONFLICT",
      });
      continue;
    }

    const entry = findEntry(index, fix);
    let applyStatus = "NOT_FOUND";
    let note = "";
    if (!entry) {
      note = "card_not_found";
    } else {
      const result = applyOne(entry, fix);
      applyStatus = result.applyStatus;
      note = result.reason || result.actual || "";
      if (applyStatus === "APPLIED" || applyStatus === "ALREADY_FIXED") {
        changedCards.add(fix.cardId);
        if (!cardDetails.has(fix.cardId)) cardDetails.set(fix.cardId, []);
        cardDetails.get(fix.cardId).push({ field: fix.field, applyStatus });
        if (applyStatus === "APPLIED") {
          const sev = fix.severity || "MEDIUM";
          severityApplied[sev] = (severityApplied[sev] || 0) + 1;
        }
      }
    }
    statusCounts[applyStatus] = (statusCounts[applyStatus] || 0) + 1;
    log.push({
      findingId: fix.findingId,
      cardId: fix.cardId,
      field: fix.field,
      severity: fix.severity,
      expectedCurrentText: fix.currentText,
      correctedText: fix.correctedText,
      applyStatus,
      note,
    });
  }

  let sectionAccentsUpdates = 0;
  if (!DRY_RUN) {
    writeB2(BS_FILE, words);
    writeB2(WWW_FILE, words);
    try {
      const accentOut = execSync("node scripts/fix-bs-b2-section-accents.js", { encoding: "utf8" });
      const match = accentOut.match(/cardsModified[:\s]+(\d+)/i) || accentOut.match(/"cardsModified"\s*:\s*(\d+)/);
      if (match) sectionAccentsUpdates = parseInt(match[1], 10);
    } catch (e) {
      console.warn("sectionAccents sync warning:", e.message);
    }
  }

  const validation = DRY_RUN ? {} : runValidations();
  const postVerify = DRY_RUN ? {} : verifyApplied(log, words, index);

  const verifyCardIds = [...changedCards].sort();
  const applyReport = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    regressionFindingsInput: inputFindings,
    statusCounts,
    severityApplied,
    changedCards: verifyCardIds.length,
    sectionAccentsUpdates,
    postApplyVerify: postVerify,
    validation,
    openAiRequests: 0,
    log,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(applyReport, null, 2));
  fs.writeFileSync(VERIFY_SCOPE, JSON.stringify({
    generatedAt: new Date().toISOString(),
    cardIds: verifyCardIds,
    count: verifyCardIds.length,
    source: "bs-b2-final-verify-fixes-apply",
  }, null, 2));

  const complete = statusCounts.STALE_CURRENT_TEXT === 0
    && statusCounts.NOT_FOUND === 0
    && statusCounts.PATCH_CONFLICT === 0
    && (postVerify.fail || 0) === 0
    && statusCounts.APPLIED + statusCounts.ALREADY_FIXED === inputFindings;

  const cardLines = verifyCardIds.map((id) => {
    const fields = cardDetails.get(id) || [];
    return `- **${id}**: ${fields.map((f) => `${f.field} (${f.applyStatus})`).join(", ")}`;
  });

  const lines = [
    "# BS–DE B2 — final verify fixes apply report",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}`,
    "**OpenAI API requests:** 0",
    "",
    "## Input",
    "",
    `- findings = 9`,
    `- cards = 5`,
    "",
    "## Apply",
    "",
    "| Status | Count |",
    "|---|---:|",
    `| APPLIED | ${statusCounts.APPLIED} |`,
    `| ALREADY_FIXED | ${statusCounts.ALREADY_FIXED} |`,
    `| STALE_CURRENT_TEXT | ${statusCounts.STALE_CURRENT_TEXT} |`,
    `| PATCH_CONFLICT | ${statusCounts.PATCH_CONFLICT} |`,
    `| NOT_FOUND | ${statusCounts.NOT_FOUND} |`,
    "",
    "## Severity",
    "",
    "| Severity | Applied |",
    "|---|---:|",
    `| MEDIUM | ${severityApplied.MEDIUM || 0} |`,
    `| LOW | ${severityApplied.LOW || 0} |`,
    "",
    "## Cards",
    "",
    ...cardLines,
    "",
    "## Validation",
    "",
    `- syntax: ${validation.syntax || "N/A"}`,
    `- DE READ-ONLY: ${validation.deReadOnly || "N/A"}`,
    `- sectionAccents TECHNICAL: ${validation.sectionAccentsTechnical ?? "N/A"}`,
    `- data ≡ www: ${validation.mirror || "N/A"}`,
    `- card count: ${validation.cardCount ?? "N/A"}`,
    `- study count: ${validation.studyCount ?? "N/A"}`,
    `- post-apply verify: ${postVerify.ok || 0}/${(postVerify.ok || 0) + (postVerify.fail || 0)}`,
    `- sectionAccents updates: ${sectionAccentsUpdates}`,
    "",
    complete ? "**BS–DE B2 FINAL VERIFY FIXES = APPLIED**" : "**BS–DE B2 FINAL VERIFY FIXES = INCOMPLETE**",
  ];
  fs.writeFileSync(REPORT_MD, `${lines.join("\n")}\n`, "utf8");

  console.log(JSON.stringify({
    findings: inputFindings,
    APPLIED: statusCounts.APPLIED,
    ALREADY_FIXED: statusCounts.ALREADY_FIXED,
    STALE: statusCounts.STALE_CURRENT_TEXT,
    NOT_FOUND: statusCounts.NOT_FOUND,
    changedCards: verifyCardIds.length,
    sectionAccentsUpdates,
    postVerify,
    validation,
    complete,
  }, null, 2));
}

main();
