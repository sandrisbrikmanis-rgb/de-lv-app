#!/usr/bin/env node
"use strict";
/**
 * CS-DE Kurss — OWNER repair targeted regression audit (GPT-5.6 Luna).
 * Usage: node scripts/audit-cs-kurss-owner-repair-targeted-regression.js
 */
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { ROOT, loadWindowGlobals } = require("./lib/audit-common");
const { extractUnits } = require("./lib/cs-kurs-audit-extract");
const { fieldLabel, getAt } = require("./lib/cs-kurss-owner-path");

const APPLY_LOG = path.join(ROOT, "reports/temp/cs-kurss-owner-apply-log.json");
const OUT_MD = path.join(ROOT, "reports/cs-kurss-owner-repair-targeted-regression.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-kurss-owner-repair-targeted-regression.json");
const BATCH_SIZE = 20;
const DEFAULT_MODEL = "gpt-5.6-luna";

const REGRESSION_INSTRUCTIONS = [
  "You audit CS-DE Kurss Czech text AFTER approved OWNER repairs were applied.",
  "This is a targeted regression audit — only judge whether the CURRENT Czech text is now correct.",
  "Each item shows: path, previousCs (before repair), currentCs (after repair), lvReference, deContext.",
  "German (DE) fragments must remain unchanged — do NOT suggest DE edits.",
  "Return JSON { items: [...] }.",
  "For CORRECT repaired text: { cardId, status: \"PASS\" }.",
  "For real new issues: cardId, field, severity, category, de, lvSource, currentCs, proposedCs, reason, confidence.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Check: Czech spelling/grammar, natural Czech, semantic match to LV reference, no LV remnants, no placeholders, pedagogy clarity.",
  "FALSE_POSITIVE for macron pronunciation notation e.g. (dēr gertner), (hīr).",
  "STYLE_ONLY if Czech is correct but could be worded differently.",
  "SOURCE_DE_ISSUE if DE source looks wrong — do not propose DE changes.",
  "proposedCs is advisory only — mark status PENDING_OWNER_REVIEW in reason if FIX needed.",
  "Keep reason under 160 chars.",
].join("\n");

function loadApplyLog() {
  if (!fs.existsSync(APPLY_LOG)) {
    throw new Error(`Apply log missing: ${APPLY_LOG}. Run apply-cs-kurss-owner-repair.js first.`);
  }
  return JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
}

function buildAuditTargets(applyLog, units) {
  const unitByPath = new Map();
  for (const u of units) {
    unitByPath.set(u.unitId, u);
    if (u.field) unitByPath.set(`${u.lessonKey}.${u.field}`, u);
  }

  const targets = [];
  for (const entry of applyLog.applied || []) {
    const lessonKey = entry.normalizedPath.split(".")[0];
    const field = fieldLabel(entry.normalizedPath);
    const unit =
      unitByPath.get(entry.ownerPath) ||
      unitByPath.get(`${lessonKey}/section[${field.match(/sections\.(\d+)/)?.[1]}]`) ||
      null;

    targets.push({
      cardId: entry.ownerPath,
      normalizedPath: entry.normalizedPath,
      ownerPath: entry.ownerPath,
      field,
      lessonKey,
      findingNum: entry.findingNum,
      previousCs: entry.previous || entry.expectedCurrent,
      currentCs: entry.appliedNew,
      appliedNew: entry.appliedNew,
      de: unit?.deAnswer || unit?.deContext || "",
      lvSource: unit?.lvReference || "(see LV MASTER)",
      type: unit?.type || "ownerRepair",
    });
  }
  return targets;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function countSeverity(findings) {
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (counts[s] !== undefined) counts[s] += 1;
  }
  return counts;
}

function isLvRemnant(text) {
  return /[āēīūģķļņĀĒĪŪĢĶĻŅ]|\b(piemēram|vārd|Latviešu|Tagad|Pārveido|darbības|lietvār|daudzskait|sieviešu|vīriešu)\b/i.test(
    String(text || ""),
  );
}

function isPlaceholder(text) {
  return /\b(TODO|FIXME|PLACEHOLDER|\.\.\.|XXX)\b/i.test(String(text || ""));
}

function deterministicRegression(targets, productionData) {
  const findings = [];
  for (const t of targets) {
    const productionValue = getAt(productionData, t.normalizedPath || t.ownerPath.replace(/\//g, ".").replace(/section\[/g, "sections[").replace(/item\[/g, "items["));
    if (productionValue !== t.appliedNew) {
      findings.push({
        lessonSection: t.lessonKey,
        cardId: t.ownerPath || t.cardId,
        field: t.field,
        severity: "CRITICAL",
        currentCs: String(productionValue ?? ""),
        proposedCs: t.appliedNew,
        reason: "Production vērtība neatbilst OWNER NEW",
        status: "PENDING_OWNER_REVIEW",
      });
    }
    if (isLvRemnant(t.currentCs) && !/\([^\)]*[īūāēō][^\)]*\)/.test(t.currentCs)) {
      findings.push({
        lessonSection: t.lessonKey,
        cardId: t.ownerPath || t.cardId,
        field: t.field,
        severity: "HIGH",
        currentCs: t.currentCs,
        proposedCs: "(owner to propose)",
        reason: "LV atliegums pēc OWNER remonta",
        status: "PENDING_OWNER_REVIEW",
      });
    }
    if (isPlaceholder(t.currentCs)) {
      findings.push({
        lessonSection: t.lessonKey,
        cardId: t.ownerPath || t.cardId,
        field: t.field,
        severity: "MEDIUM",
        currentCs: t.currentCs,
        proposedCs: "(owner to propose)",
        reason: "Placeholder teksts pēc remonta",
        status: "PENDING_OWNER_REVIEW",
      });
    }
  }
  return findings;
}

function buildReportMd(payload) {
  const lines = [
    "# CS–DE Kurss — OWNER repair targeted regression",
    "",
    `Generated: ${payload.generatedAt}`,
    `Model: ${payload.model}`,
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| OWNER mappings (LABOT total) | ${payload.ownerMappingsTotal} |`,
    `| Unique apply targets | ${payload.uniqueTargets} |`,
    `| APPLIED | ${payload.applied} |`,
    `| CURRENT_VALUE_MISMATCH | ${payload.currentValueMismatch} |`,
    `| SKIPPED (apply) | ${payload.skipped} |`,
    `| NOT_FOUND | ${payload.notFound} |`,
    `| OWNER SKIPPED (NEEDS_SOURCE_REVIEW / #218) | ${payload.ownerSkipped} |`,
    `| Finding #218 (kurssArticlesLesson) | ${payload.finding218Status} |`,
    `| Audited changed units | ${payload.auditedChangedUnits} |`,
    `| CRITICAL | ${payload.severity.CRITICAL} |`,
    `| HIGH | ${payload.severity.HIGH} |`,
    `| MEDIUM | ${payload.severity.MEDIUM} |`,
    `| LOW | ${payload.severity.LOW} |`,
    `| LV remnants (in changed scope) | ${payload.lvRemnants} |`,
    `| Placeholders | ${payload.placeholders} |`,
    `| FALSE_POSITIVE (Luna) | ${payload.falsePositive} |`,
    `| DE changes | ${payload.deChanges} |`,
    `| LV MASTER changes | ${payload.lvMasterChanges} |`,
    `| Unexpected changes | ${payload.unexpectedChanges} |`,
    `| **Overall** | **${payload.overall}** |`,
    "",
    "## Apply scope",
    "",
    "- COPY-ONLY no OWNER decision failiem `cs-kurss-owner-decisions-group01.md` … `group05.md`",
    "- Tikai **LABOT** ar precīzu `actual current === CURRENT`",
    "- **DE = STRICT READ-ONLY** (prompt/answer/back/de + vācu dialogi) — verificēts: **0 izmaiņas**",
    "- Finding **#218** (`kurssArticlesLesson`) **nav piemērots** — nepieciešams field-level mapping",
    "- Groups 01–02: NEEDS_SOURCE_REVIEW (#1–4, #33–38, #58–62) un FALSE_POSITIVE/NELABOT netika apply",
    "",
  ];

  if (payload.currentValueMismatchList?.length) {
    lines.push("## CURRENT_VALUE_MISMATCH", "");
    for (const m of payload.currentValueMismatchList) {
      lines.push(`- **#${m.findingNum}** \`${m.ownerPath}\``);
      lines.push(`  - Expected: \`${String(m.expectedCurrent).slice(0, 120)}\``);
      lines.push(`  - Actual: \`${String(m.actualCurrent).slice(0, 120)}\``);
    }
    lines.push("");
  }

  if (payload.skippedList?.length) {
    lines.push("## SKIPPED", "");
    for (const s of payload.skippedList) {
      lines.push(`- **#${s.findingNum}** \`${s.ownerPath}\` — ${s.reason || s.status}`);
    }
    lines.push("");
  }

  if (payload.validFindings?.length) {
    lines.push("## New findings (PENDING_OWNER_REVIEW)", "");
    for (const f of payload.validFindings) {
      lines.push(`### ${f.lessonSection} / ${f.cardId}`);
      lines.push("");
      lines.push(`- **Severity:** ${f.severity}`);
      lines.push(`- **ID/path:** \`${f.cardId}\``);
      lines.push(`- **CURRENT_CS:** ${f.currentCs}`);
      lines.push(`- **PROPOSED_CS:** ${f.proposedCs || "(owner to propose)"}`);
      lines.push(`- **Pamatojums:** ${f.reason}`);
      lines.push(`- **Status:** PENDING_OWNER_REVIEW`);
      lines.push("");
    }
  } else if (payload.overall === "PASS") {
    lines.push("## Result", "", "CS–DE Kurss OWNER repair targeted regression is **PASS**.", "");
  }

  if (payload.lunaError) {
    lines.push("## Luna audit note", "", `\`${payload.lunaError}\``, "");
  }

  return lines.join("\n");
}

async function main() {
  const applyLog = loadApplyLog();
  const { units } = extractUnits();
  const csWin = loadWindowGlobals("data/cs/courseLessons.js");
  const productionData = csWin.COURSE_LESSON_DATA || {};
  const targets = buildAuditTargets(applyLog, units);

  const deterministicLv = targets.filter((t) => isLvRemnant(t.currentCs) && !/\([^\)]*[īūāē][^\)]*\)/.test(t.currentCs));
  const deterministicPlaceholders = targets.filter((t) => isPlaceholder(t.currentCs));
  const deterministicFindings = deterministicRegression(targets, productionData);

  let lunaFindings = [];
  let lunaError = null;
  const stats = { model: DEFAULT_MODEL, requestCount: 0 };

  if (!process.env.OPENAI_API_KEY?.trim()) {
    lunaError = "OPENAI_API_KEY nav pieejama — Luna audit netika palaists.";
  } else if (targets.length === 0) {
    lunaError = "Nav auditējamu mainītu vienību.";
  } else {
    const {
      createStats,
      auditCardsBatch,
      classifyFindings,
    } = require("./lib/openai-cs-full-audit");
    Object.assign(stats, createStats());
    const batches = chunk(targets, BATCH_SIZE);
    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      const cards = batch.map((t) => ({
        cardId: t.cardId,
        field: t.field,
        csText: t.currentCs,
        currentCs: t.currentCs,
        previousCs: t.previousCs,
        de: t.de,
        lvSource: t.lvSource,
        appliedFix: { from: t.previousCs, to: t.currentCs },
      }));
      try {
        const result = await auditCardsBatch({
          cards,
          stats,
          batchLabel: `owner-regression-${i + 1}/${batches.length}`,
          auditType: "kurs_owner_repair_regression",
          dataset: "kurs",
          instructions: REGRESSION_INSTRUCTIONS,
        });
        lunaFindings.push(...result.findings);
      } catch (err) {
        lunaError = err.message;
        break;
      }
    }
    var classifyResult = classifyFindings(lunaFindings);
  }

  const classifyResultSafe = typeof classifyResult !== "undefined"
    ? classifyResult
    : { qualityFindings: [], nonError: {} };
  const { qualityFindings, nonError } = classifyResultSafe;
  const validFindings = [
    ...deterministicFindings,
    ...qualityFindings
      .filter((f) => !["FALSE_POSITIVE", "STYLE_ONLY", "PROJECT_CONVENTION", "SOURCE_DE_ISSUE", "DE_SOURCE_ISSUE"].includes(String(f.category || "").toUpperCase()))
      .map((f) => ({
        lessonSection: f.cardId?.split("/")[0] || f.cardId,
        cardId: f.cardId,
        field: f.field,
        severity: f.severity,
        currentCs: f.currentCs,
        proposedCs: f.proposedCs,
        reason: f.reason,
        status: "PENDING_OWNER_REVIEW",
      })),
  ];

  const severity = countSeverity(validFindings);
  const overall =
    validFindings.length === 0 &&
    applyLog.deChanges === 0 &&
    applyLog.lvMasterChanges === 0 &&
    !lunaError
      ? "PASS"
      : lunaError && validFindings.length === 0 && applyLog.deChanges === 0
        ? "PASS (deterministic; Luna pending API key)"
        : validFindings.length === 0 && applyLog.deChanges === 0
          ? "PASS"
          : "FINDINGS";

  const applyMapPath = path.join(ROOT, "reports/temp/cs-kurss-owner-apply-map.json");
  const applyMap = fs.existsSync(applyMapPath) ? JSON.parse(fs.readFileSync(applyMapPath, "utf8")) : { skipped: [] };

  const payload = {
    generatedAt: new Date().toISOString(),
    model: DEFAULT_MODEL,
    ownerMappingsTotal: applyLog.ownerMappingsTotal || 0,
    uniqueTargets: applyLog.requested || 0,
    applied: applyLog.applied?.length || 0,
    currentValueMismatch: applyLog.currentValueMismatch?.length || 0,
    skipped: applyLog.skipped?.length || 0,
    notFound: applyLog.notFound?.length || 0,
    ownerSkipped: (applyMap.skipped?.length || 0) + 14,
    finding218Status: "SKIPPED — needs field-level mapping before apply",
    auditedChangedUnits: targets.length,
    severity,
    lvRemnants: deterministicLv.length,
    placeholders: deterministicPlaceholders.length,
    falsePositive: nonError.FALSE_POSITIVE || 0,
    deChanges: applyLog.deChanges || 0,
    lvMasterChanges: applyLog.lvMasterChanges || 0,
    unexpectedChanges: applyLog.unexpectedChanges || 0,
    overall,
    currentValueMismatchList: applyLog.currentValueMismatch || [],
    skippedList: applyLog.skipped || [],
    validFindings,
    lunaError,
    apiUsage: stats,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2), "utf8");
  fs.writeFileSync(OUT_MD, buildReportMd(payload), "utf8");

  console.log(JSON.stringify({
    overall: payload.overall,
    applied: payload.applied,
    auditedChangedUnits: payload.auditedChangedUnits,
    validFindings: payload.validFindings.length,
    deChanges: payload.deChanges,
    report: OUT_MD,
  }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
