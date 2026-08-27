#!/usr/bin/env node
"use strict";
/**
 * Split filled ES Kurss Lessons OWNER decisions into per-lesson JSON + markdown.
 * Authority: reports/es-kurss-lessons-owner-decisions-filled.json
 *
 * Usage: node scripts/build-es-kurss-lessons-owner-decisions-per-lesson.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { collectAllLessons, LESSON_COUNT } = require("./lib/es-kurss-lessons-owner-extract");

const AGGREGATE_JSON = path.join(ROOT, "reports/es-kurss-lessons-owner-decisions-filled.json");
const SUMMARY_JSON = path.join(ROOT, "reports/es-kurss-lessons-01-21-owner-decisions-filled-summary.json");
const SUMMARY_MD = path.join(ROOT, "reports/es-kurss-lessons-01-21-owner-decisions-filled-summary.md");

function getHeadSha() {
  try {
    return execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 100) {
  const s = String(text || "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function loadTargetMap() {
  const { byLesson } = collectAllLessons();
  const map = new Map();
  for (const targets of Object.values(byLesson)) {
    for (const t of targets) {
      map.set(`lesson${t.lessonNumber}|${t.path}`, t);
    }
  }
  return map;
}

function summarizeDecisions(decisions) {
  const summary = {
    total: decisions.length,
    labot: 0,
    nelabot: 0,
    falsePositive: 0,
    technicalDefer: 0,
    labotMissingNew: 0,
  };
  for (const d of decisions) {
    if (d.status === "LABOT") {
      summary.labot += 1;
      if (d.new === null || d.new === "") summary.labotMissingNew += 1;
    } else if (d.status === "NELABOT") summary.nelabot += 1;
    else if (d.status === "FALSE_POSITIVE") summary.falsePositive += 1;
    else if (d.status === "TECHNICAL_DEFER") summary.technicalDefer += 1;
  }
  return summary;
}

function decisionToTarget(decision, fieldTarget) {
  return {
    id: decision.id,
    lessonNumber: fieldTarget.lessonNumber,
    file: fieldTarget.file,
    field: fieldTarget.field,
    path: decision.path,
    category: fieldTarget.category || decision.category,
    structureContext: fieldTarget.structureContext || "",
    deContext: decision.deContext || fieldTarget.deContext || "",
    current: decision.current,
    new: decision.new,
    status: decision.status,
    track: decision.track || null,
    ownerDecision: decision.ownerDecision || "",
    reason: decision.reason || decision.problem || "",
    changeTag: decision.changeTag || null,
    proposedEs: decision.proposedEs || null,
    problem: decision.problem || "",
    severity: decision.severity || null,
    source: decision.source || null,
  };
}

function buildLessonMarkdown(lessonNumber, payload) {
  const lines = [
    `# ES Kurss — Lección ${lessonNumber} OWNER decisions (filled)`,
    "",
    `**Source HEAD:** \`${payload.sourceMain}\``,
    `**Aggregate authority:** \`${payload.aggregateAuthority}\``,
    `**Decision count:** ${payload.decisionCount}`,
    `**LABOT:** ${payload.summary.labot} | **NELABOT:** ${payload.summary.nelabot} | **FALSE_POSITIVE:** ${payload.summary.falsePositive} | **TECHNICAL_DEFER:** ${payload.summary.technicalDefer}`,
    `**Status:** ${payload.status}`,
    "",
  ];

  for (const d of payload.decisions) {
    lines.push(`## ${d.id}`);
    lines.push("");
    lines.push(`- Status: **${d.status}**`);
    if (d.track) lines.push(`- Track: ${d.track}`);
    if (d.category) lines.push(`- Category: ${d.category}`);
    if (d.severity) lines.push(`- Severity: ${d.severity}`);
    if (d.source) lines.push(`- Source: ${d.source}`);
    if (d.changeTag) lines.push(`- Change tag: ${d.changeTag}`);
    lines.push(`- Path: \`${escapePipe(d.path)}\``);
    const target = payload.targets.find((t) => t.id === d.id);
    if (target) {
      lines.push(`- File: \`${target.file}\``);
      lines.push(`- Field: \`${target.field}\``);
      if (target.structureContext) lines.push(`- Structure: ${escapePipe(target.structureContext)}`);
    }
    if (d.deContext) lines.push(`- DE: \`${escapePipe(d.deContext)}\``);
    lines.push(`- CURRENT: \`${escapePipe(d.current)}\``);
    if (d.status === "LABOT" || d.status === "NELABOT") {
      lines.push(`- NEW: \`${escapePipe(d.new)}\``);
    }
    if (d.proposedEs && d.proposedEs !== d.new) {
      lines.push(`- Proposed (audit): \`${escapePipe(d.proposedEs)}\``);
    }
    if (d.ownerDecision) lines.push(`- Owner decision: ${escapePipe(d.ownerDecision)}`);
    if (d.reason || d.problem) lines.push(`- Pamatojums: ${escapePipe(d.reason || d.problem)}`);
    lines.push("");
  }

  return `${lines.join("\n")}\n`;
}

function buildSummaryMarkdown(head, files, aggregateSummary) {
  const lines = [
    "# ES Kurss Lessons 1–21 — per-lesson OWNER decisions (filled)",
    "",
    `**Source HEAD:** \`${head}\``,
    `**Aggregate authority:** \`reports/es-kurss-lessons-owner-decisions-filled.json\``,
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "## Aggregate totals",
    "",
    `| Metric | Count |`,
    `|--------|------:|`,
    `| Total | ${aggregateSummary.total} |`,
    `| LABOT | ${aggregateSummary.labot} |`,
    `| NELABOT | ${aggregateSummary.nelabot} |`,
    `| FALSE_POSITIVE | ${aggregateSummary.falsePositive} |`,
    `| TECHNICAL_DEFER | ${aggregateSummary.technicalDefer} |`,
    "",
    "## Per-lesson files",
    "",
    "| Lesson | Decisions | LABOT | NELABOT | FALSE_POSITIVE | TECHNICAL_DEFER | JSON | Markdown |",
    "|--------|----------:|------:|--------:|---------------:|----------------:|------|----------|",
  ];

  for (const f of files) {
    lines.push(
      `| ${f.lessonNumber} | ${f.decisionCount} | ${f.summary.labot} | ${f.summary.nelabot} | ${f.summary.falsePositive} | ${f.summary.technicalDefer} | \`${f.jsonPath}\` | \`${f.mdPath}\` |`,
    );
  }

  lines.push("");
  return `${lines.join("\n")}\n`;
}

function main() {
  if (!fs.existsSync(AGGREGATE_JSON)) {
    throw new Error(`Missing aggregate: ${AGGREGATE_JSON}`);
  }

  const head = getHeadSha();
  const aggregate = JSON.parse(fs.readFileSync(AGGREGATE_JSON, "utf8"));
  const allDecisions = aggregate.decisions || [];
  const targetMap = loadTargetMap();
  const byLesson = Array.from({ length: LESSON_COUNT }, () => []);
  const unmapped = [];

  for (const d of allDecisions) {
    const lessonNum = Number(String(d.lessonId || "").replace(/^lesson/, ""));
    if (!lessonNum || lessonNum < 1 || lessonNum > LESSON_COUNT) {
      throw new Error(`Invalid lessonId on ${d.id}: ${d.lessonId}`);
    }
    byLesson[lessonNum - 1].push(d);
  }

  const written = [];

  for (let n = 1; n <= LESSON_COUNT; n++) {
    const pad = String(n).padStart(2, "0");
    const decisions = byLesson[n - 1].sort((a, b) => (a.num || 0) - (b.num || 0));
    const summary = summarizeDecisions(decisions);
    const targets = [];

    for (const d of decisions) {
      if (d.status === "TECHNICAL_DEFER") continue;
      const fieldTarget = targetMap.get(`${d.lessonId}|${d.path}`);
      if (!fieldTarget) {
        if (d.status === "LABOT" || d.status === "NELABOT") {
          unmapped.push({ lesson: n, id: d.id, status: d.status, path: d.path });
        }
        continue;
      }
      targets.push(decisionToTarget(d, fieldTarget));
    }

    const jsonPath = `reports/es-kurss-lesson-${pad}-owner-decisions-filled.json`;
    const mdPath = `reports/es-kurss-lesson-${pad}-owner-decisions-filled.md`;
    const payload = {
      schemaVersion: 1,
      title: `ES Kurss — Lección ${n} OWNER decisions (Luna v2 audit filled)`,
      authority: "OWNER",
      scope: `ES Kurss → Lección ${n}`,
      sourceMain: head,
      aggregateAuthority: "reports/es-kurss-lessons-owner-decisions-filled.json",
      aggregateGeneratedAt: aggregate.generatedAt || null,
      lessonNumber: n,
      lessonId: `lesson${n}`,
      decisionCount: decisions.length,
      targetCount: targets.length,
      summary,
      status: "OWNER_FILLED",
      rules: {
        linguisticAudit: true,
        translation: false,
        newPrefill: true,
        productionChanges: false,
        currentExactMatchRequired: true,
      },
      decisions,
      targets,
    };

    fs.writeFileSync(path.join(ROOT, jsonPath), JSON.stringify(payload, null, 2) + "\n");
    fs.writeFileSync(path.join(ROOT, mdPath), buildLessonMarkdown(n, payload));

    written.push({
      lessonNumber: n,
      jsonPath,
      mdPath,
      decisionCount: decisions.length,
      targetCount: targets.length,
      summary,
    });
  }

  if (unmapped.length) {
    throw new Error(`Unmapped LABOT/NELABOT: ${JSON.stringify(unmapped.slice(0, 5))}`);
  }

  const totalFromParts = written.reduce((a, w) => a + w.decisionCount, 0);
  if (totalFromParts !== allDecisions.length) {
    throw new Error(`Split mismatch: ${totalFromParts} !== ${allDecisions.length}`);
  }

  const summaryPayload = {
    sourceMain: head,
    aggregateAuthority: "reports/es-kurss-lessons-owner-decisions-filled.json",
    aggregateGeneratedAt: aggregate.generatedAt || null,
    lessonCount: LESSON_COUNT,
    totalDecisions: allDecisions.length,
    aggregateSummary: aggregate.summary || null,
    files: written,
    status: "OWNER_FILLED_PER_LESSON",
  };

  fs.writeFileSync(SUMMARY_JSON, JSON.stringify(summaryPayload, null, 2) + "\n");
  fs.writeFileSync(
    SUMMARY_MD,
    buildSummaryMarkdown(head, written, aggregate.summary || summarizeDecisions(allDecisions)),
  );

  console.log(
    JSON.stringify(
      {
        sourceMain: head,
        lessonCount: LESSON_COUNT,
        totalDecisions: allDecisions.length,
        written: written.map((w) => ({
          lesson: w.lessonNumber,
          decisions: w.decisionCount,
          targets: w.targetCount,
          labot: w.summary.labot,
        })),
        summaryJson: "reports/es-kurss-lessons-01-21-owner-decisions-filled-summary.json",
        summaryMd: "reports/es-kurss-lessons-01-21-owner-decisions-filled-summary.md",
      },
      null,
      2,
    ),
  );
}

if (require.main === module) main();

module.exports = { main, summarizeDecisions, decisionToTarget };
