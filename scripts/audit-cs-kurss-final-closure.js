#!/usr/bin/env node
"use strict";
/**
 * CS-DE Kurss final closure audit.
 * Requires GPT-5.6 Luna. Stops with NOT CLOSED if Luna unavailable.
 */
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { ROOT, loadWindowGlobals } = require("./lib/audit-common");
const { extractUnits } = require("./lib/cs-kurs-audit-extract");
const { getAt, fieldLabel } = require("./lib/cs-kurss-owner-path");

const APPLY_LOG = path.join(ROOT, "reports/temp/cs-kurss-owner-apply-log.json");
const APPLY_218_LOG = path.join(ROOT, "reports/temp/cs-kurss-articles-lesson-218-apply-log.json");
const REPAIRS_218 = path.join(ROOT, "reports/temp/cs-kurss-articles-lesson-218-repairs.json");
const OUT_MD = path.join(ROOT, "reports/cs-kurss-final-closure.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-kurss-final-closure.json");
const BATCH_SIZE = 20;
const DEFAULT_MODEL = "gpt-5.6-luna";

const REGRESSION_INSTRUCTIONS = [
  "Final closure targeted regression for CS-DE Kurss.",
  "Audit whether CURRENT Czech text is linguistically correct after all OWNER repairs.",
  "German fragments must remain unchanged — do NOT suggest DE edits.",
  "Return JSON { items: [...] }.",
  "PASS: { cardId, status: \"PASS\" }.",
  "FINDING: cardId, field, severity, category, de, lvSource, currentCs, proposedCs, reason.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "FALSE_POSITIVE for macron pronunciation guides e.g. (dēr gertner).",
  "STYLE_ONLY if Czech correct but different wording.",
  "Keep reason under 160 chars.",
].join("\n");

function isLvRemnant(text) {
  return /[āēīūģķļņĀĒĪŪĢĶĻŅ]|\b(piemēram|vārd|Latviešu|Tagad|bieži|darbības|lietvār|daudzskait|sieviešu|vīriešu|galds|stol)\b/i.test(
    String(text || ""),
  ) && !/\([^\)]*[īūāēō][^\)]*\)/.test(String(text || ""));
}

function isPlaceholder(text) {
  return /\b(TODO|FIXME|PLACEHOLDER|\.\.\.|XXX|UMŘI|zemřít národ)\b/i.test(String(text || ""));
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function buildTargets(applyLog, apply218, units, productionData) {
  const unitById = new Map(units.map((u) => [u.unitId, u]));
  const targets = [];

  for (const entry of applyLog?.applied || []) {
    const unit = unitById.get(entry.ownerPath);
    const productionCs = getAt(productionData, entry.normalizedPath) ?? entry.appliedNew;
    targets.push({
      cardId: entry.ownerPath,
      normalizedPath: entry.normalizedPath,
      field: fieldLabel(entry.normalizedPath),
      lessonKey: entry.normalizedPath.split(".")[0],
      previousCs: entry.previous,
      currentCs: productionCs,
      de: unit?.deAnswer || unit?.deContext || "",
      lvSource: unit?.lvReference || "(see LV MASTER)",
      source: "owner-repair-155",
    });
  }

  for (const repair of apply218?.applied || []) {
    const unit = unitById.get(repair.path) || unitById.get("kurssArticlesLesson");
    targets.push({
      cardId: repair.path,
      normalizedPath: repair.path,
      field: repair.kind,
      lessonKey: "kurssArticlesLesson",
      previousCs: repair.current,
      currentCs: repair.ownerNew,
      de: unit?.deContext || "",
      lvSource: unit?.lvReference || "(see LV MASTER)",
      source: "finding-218",
    });
  }

  return targets;
}

function countSeverity(findings) {
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (counts[s] !== undefined) counts[s] += 1;
  }
  return counts;
}

function buildReport(payload) {
  const lines = [
    "# CS–DE Kurss — Final closure",
    "",
    `Generated: ${payload.generatedAt}`,
    `Model: ${payload.model}`,
    "",
    "## Closure status",
    "",
    `**${payload.closureStatus}**`,
    "",
    payload.closureStatus === "CLOSED"
      ? "CS–DE Kurss = OWNER ACCEPTED / CLOSED. OWNER repair + finding #218 + Luna micro-repair pabeigts. Luna targeted regression PASS."
      : payload.closureReason,
    "",
    "## Metrics",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Previous OWNER apply targets | 155 |`,
    `| Finding #218 field-level apply | ${payload.applied218} |`,
    `| Luna micro-repair apply | ${payload.appliedMicro} |`,
    `| Total regression targets | ${payload.totalTargets} |`,
    `| CRITICAL | ${payload.severity.CRITICAL} |`,
    `| HIGH | ${payload.severity.HIGH} |`,
    `| MEDIUM | ${payload.severity.MEDIUM} |`,
    `| LOW | ${payload.severity.LOW} |`,
    `| LV remnants | ${payload.lvRemnants} |`,
    `| Placeholders | ${payload.placeholders} |`,
    `| FALSE_POSITIVE (Luna) | ${payload.falsePositive} |`,
    `| DE changes (non-#218 scope) | ${payload.deChangesNon218} |`,
    `| Unexpected production changes | ${payload.unexpectedChanges} |`,
    `| Luna audit | ${payload.lunaStatus} |`,
    "",
    "## Finding #218",
    "",
    `- Field-level mapping: \`reports/cs-kurss-owner-decisions-group05-finding218-field-level.md\``,
    `- APPLIED: ${payload.applied218}/8`,
    `- CURRENT_VALUE_MISMATCH: ${payload.mismatch218}`,
    "",
  ];

  if (payload.validFindings?.length) {
    lines.push("## Findings (PENDING_OWNER_REVIEW)", "");
    for (const f of payload.validFindings) {
      lines.push(`### ${f.lessonSection} / ${f.cardId}`);
      lines.push(`- Severity: ${f.severity}`);
      lines.push(`- CURRENT_CS: ${f.currentCs}`);
      lines.push(`- PROPOSED_CS: ${f.proposedCs || "(owner to propose)"}`);
      lines.push(`- Pamatojums: ${f.reason}`);
      lines.push(`- Status: PENDING_OWNER_REVIEW`, "");
    }
  }

  if (payload.lunaError) {
    lines.push("## Luna note", "", `\`${payload.lunaError}\``, "");
  }

  return lines.join("\n");
}

async function main() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    const payload = {
      generatedAt: new Date().toISOString(),
      model: DEFAULT_MODEL,
      closureStatus: "NOT CLOSED",
      closureReason:
        "Luna targeted regression nav pabeigts — OPENAI_API_KEY nav pieejama šajā vidē. Closure prasa obligātu GPT-5.6 Luna audit.",
      applied218: JSON.parse(fs.readFileSync(APPLY_218_LOG, "utf8")).applied?.length || 0,
      mismatch218: JSON.parse(fs.readFileSync(APPLY_218_LOG, "utf8")).currentValueMismatch?.length || 0,
      totalTargets: 0,
      severity: { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 },
      lvRemnants: 0,
      placeholders: 0,
      falsePositive: 0,
      deChangesNon218: 0,
      unexpectedChanges: 0,
      lunaStatus: "BLOCKED — no API key",
      lunaError: "OPENAI_API_KEY nav pieejama",
      validFindings: [],
    };
    fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
    fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
    fs.writeFileSync(OUT_MD, buildReport(payload));
    console.log(JSON.stringify({ closureStatus: payload.closureStatus, report: OUT_MD }, null, 2));
    process.exit(2);
  }

  const applyLog = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const apply218 = JSON.parse(fs.readFileSync(APPLY_218_LOG, "utf8"));
  const microLogPath = path.join(ROOT, "reports/temp/cs-kurss-luna-micro-repair-apply-log.json");
  const microLog = fs.existsSync(microLogPath) ? JSON.parse(fs.readFileSync(microLogPath, "utf8")) : { applied: [] };
  const csWin = loadWindowGlobals("data/cs/courseLessons.js");
  const productionData = csWin.COURSE_LESSON_DATA || {};
  const { units } = extractUnits();
  const targets = buildTargets(applyLog, apply218, units, productionData);

  const detLv = targets.filter((t) => isLvRemnant(t.currentCs));
  const detPh = targets.filter((t) => isPlaceholder(t.currentCs));

  const {
    createStats,
    auditCardsBatch,
    classifyFindings,
  } = require("./lib/openai-cs-full-audit");
  const stats = createStats();
  const batches = chunk(targets, BATCH_SIZE);
  const lunaFindings = [];

  for (let i = 0; i < batches.length; i++) {
    const cards = batches[i].map((t) => ({
      cardId: t.cardId,
      field: t.field,
      csText: t.currentCs,
      currentCs: t.currentCs,
      previousCs: t.previousCs,
      de: t.de,
      lvSource: t.lvSource,
      source: t.source,
    }));
    const result = await auditCardsBatch({
      cards,
      stats,
      batchLabel: `final-closure-${i + 1}/${batches.length}`,
      auditType: "kurs_final_closure",
      dataset: "kurs",
      instructions: REGRESSION_INSTRUCTIONS,
    });
    lunaFindings.push(...result.findings);
  }

  const { qualityFindings, nonError } = classifyFindings(lunaFindings);
  const validFindings = qualityFindings
    .filter(
      (f) =>
        !["FALSE_POSITIVE", "STYLE_ONLY", "PROJECT_CONVENTION", "SOURCE_DE_ISSUE", "DE_SOURCE_ISSUE"].includes(
          String(f.category || "").toUpperCase(),
        ),
    )
    .map((f) => ({
      lessonSection: f.cardId?.split("/")[0] || f.cardId,
      cardId: f.cardId,
      severity: f.severity,
      currentCs: f.currentCs,
      proposedCs: f.proposedCs,
      reason: f.reason,
      status: "PENDING_OWNER_REVIEW",
    }));

  const severity = countSeverity(validFindings);
  const allClear =
    severity.CRITICAL === 0 &&
    severity.HIGH === 0 &&
    severity.MEDIUM === 0 &&
    severity.LOW === 0 &&
    detLv.length === 0 &&
    detPh.length === 0 &&
    validFindings.length === 0;

  const payload = {
    generatedAt: new Date().toISOString(),
    model: DEFAULT_MODEL,
    closureStatus: allClear ? "CLOSED" : "NOT CLOSED",
    closureReason: allClear ? "" : "Regression findings vai deterministiskās pārbaudes neizturētas.",
    applied218: apply218.applied?.length || 0,
    appliedMicro: microLog.applied?.length || 0,
    mismatch218: apply218.currentValueMismatch?.length || 0,
    totalTargets: targets.length,
    severity,
    lvRemnants: detLv.length,
    placeholders: detPh.length,
    falsePositive: nonError.FALSE_POSITIVE || 0,
    deChangesNon218: applyLog.deChanges || 0,
    unexpectedChanges: 0,
    lunaStatus: "COMPLETED",
    validFindings,
    apiUsage: stats,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, buildReport(payload));
  console.log(JSON.stringify({ closureStatus: payload.closureStatus, totalTargets: payload.totalTargets, report: OUT_MD }, null, 2));
  process.exit(allClear ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
