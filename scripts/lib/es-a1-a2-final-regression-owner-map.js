#!/usr/bin/env node
"use strict";

const { getAt } = require("./da-a1-owner-path");
const { resolveEntry, readCurrent } = require("./es-a1-a2-final-regression-retention");
const { hasForeignRemnant, germanPartPreserved } = require("./es-foreign-remnant-validate");

const SEIN_IMPORTANT_OVERRIDE = {
  id: "a1-sein",
  field: "study.important[1]",
  new: "Ich bin significa «yo soy/estoy», no «yo ser/estar».",
  category: "TRANSLATION",
  reason:
    "Ich bin ir locīta forma «yo soy/estoy», nevis infinitīvs «yo ser/estar».",
};

function normalizeField(field) {
  if (field === "esText" || field === "esMain") return "lv";
  return field;
}

function stringifyValue(value) {
  if (value === undefined || value === null) return String(value);
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function walkStringPaths(value, prefix, out) {
  if (typeof value === "string") {
    out.push({ path: prefix, value });
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      walkStringPaths(item, `${prefix}[${index}]`, out);
    });
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const next = prefix ? `${prefix}.${key}` : key;
      walkStringPaths(child, next, out);
    }
  }
}

function findPathsByValue(entry, target) {
  const paths = [];
  walkStringPaths(entry.lv, "lv", paths);
  if (entry.study) walkStringPaths(entry.study, "study", paths);
  return paths.filter((p) => p.value === target).map((p) => p.path);
}

function resolveProductionField(entry, finding) {
  const normalized = normalizeField(finding.field);
  const direct = readCurrent(entry, normalized);
  if (stringifyValue(direct) === finding.current) {
    return { field: normalized, current: finding.current, resolvedBy: "direct" };
  }

  const matches = findPathsByValue(entry, finding.current);
  if (matches.length === 1) {
    return { field: matches[0], current: finding.current, resolvedBy: "value_search" };
  }
  if (matches.length > 1) {
    return {
      error: "OWNER_CONFLICT",
      reason: `Multiple production paths for CURRENT: ${matches.join(", ")}`,
      matches,
    };
  }
  return {
    error: "CURRENT_MISMATCH",
    reason: `CURRENT not found at ${normalized}; production=${stringifyValue(direct)}`,
    field: normalized,
    production: stringifyValue(direct),
  };
}

function severityRank(severity) {
  const order = { KRITISKA: 4, AUGSTA: 3, VIDĒJA: 2, ZEMA: 1 };
  return order[severity] || 0;
}

function buildOwnerDecisions({ regression, wordsByLevel, head }) {
  const reviewItems = regression.items.filter(
    (f) => f.validation === "REAL" || f.validation === "OWNER_REVIEW_REQUIRED",
  );

  const prepared = [];
  const errors = [];
  const noOpFindingIds = [];

  for (const finding of reviewItems) {
    const { entry } = resolveEntry(wordsByLevel, finding.cardId);
    if (!entry) {
      errors.push({ id: finding.id, error: "CARD_NOT_FOUND", cardId: finding.cardId });
      continue;
    }

    let field = normalizeField(finding.field);
    let current = finding.current;
    let newValue = finding.proposedNew;
    let category = finding.category;
    let reason = finding.reason || "";
    let status = "LABOT";

    if (
      finding.validation === "OWNER_REVIEW_REQUIRED" &&
      finding.cardId === SEIN_IMPORTANT_OVERRIDE.id &&
      field === SEIN_IMPORTANT_OVERRIDE.field
    ) {
      newValue = SEIN_IMPORTANT_OVERRIDE.new;
      category = SEIN_IMPORTANT_OVERRIDE.category;
      reason = SEIN_IMPORTANT_OVERRIDE.reason;
    }

    const resolved = resolveProductionField(entry, { ...finding, field });
    if (resolved.error) {
      errors.push({ id: finding.id, ...resolved });
      continue;
    }
    field = resolved.field;
    current = resolved.current;

    if (finding.validation === "REAL" && current === newValue) {
      noOpFindingIds.push(finding.id);
      continue;
    }
    if (!newValue || String(newValue).trim() === "") {
      errors.push({ id: finding.id, error: "EMPTY_NEW" });
      continue;
    }

    prepared.push({
      sourceFindingIds: [finding.id],
      severity: finding.severity,
      category,
      level: finding.level,
      cardId: finding.cardId,
      de: finding.de || entry.de || "",
      field,
      current,
      new: newValue,
      status,
      reason,
      resolvedBy: resolved.resolvedBy,
    });
  }

  const groups = new Map();
  for (const item of prepared) {
    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }

  const items = [];
  const consolidatedDuplicates = [];

  for (const [key, group] of groups.entries()) {
    const news = [...new Set(group.map((g) => g.new))];
    if (news.length > 1) {
      errors.push({
        error: "OWNER_CONFLICT",
        key,
        sourceFindingIds: group.flatMap((g) => g.sourceFindingIds),
        proposals: news,
      });
      continue;
    }

    const merged = {
      ...group[0],
      sourceFindingIds: group.flatMap((g) => g.sourceFindingIds),
      severity: group.reduce(
        (best, g) => (severityRank(g.severity) > severityRank(best) ? g.severity : best),
        group[0].severity,
      ),
      reason: group.map((g) => g.reason).filter(Boolean).join(" | "),
    };

    if (group.length > 1) consolidatedDuplicates.push({ key, count: group.length, ids: merged.sourceFindingIds });
    items.push(merged);
  }

  items.sort((a, b) => a.sourceFindingIds[0].localeCompare(b.sourceFindingIds[0]));

  const payload = {
    repository: "sandrisbrikmanis-rgb/de-lv-app",
    pr: 664,
    branch: "cursor/es-de-a1-a2-owner-apply-001-200-3141",
    sourceHead: head,
    reviewFindings: reviewItems.length,
    uniqueOwnerTargets: items.length,
    consolidatedDuplicates: consolidatedDuplicates.reduce((n, d) => n + (d.count - 1), 0),
    noOpFindingIds,
    status: errors.length ? "BLOCKED" : "OWNER ACCEPTED",
    items: items.map((item, index) => ({
      id: `ES-A1A2-FINAL-OWNER-${String(index + 1).padStart(4, "0")}`,
      ...item,
    })),
    errors,
    consolidatedDuplicateGroups: consolidatedDuplicates,
  };

  return payload;
}

function validateOwnerDecisions({ regression, payload, wordsByLevel, syntaxPass, mirrorPass }) {
  const errors = [];
  const reviewItems = regression.items.filter(
    (f) => f.validation === "REAL" || f.validation === "OWNER_REVIEW_REQUIRED",
  );
  const reviewIds = new Set(reviewItems.map((f) => f.id));
  const covered = new Set([
    ...payload.items.flatMap((i) => i.sourceFindingIds),
    ...(payload.noOpFindingIds || []),
  ]);

  if (reviewItems.filter((f) => f.validation === "REAL").length !== 579) {
    errors.push(`REAL count ${reviewItems.filter((f) => f.validation === "REAL").length} !== 579`);
  }
  if (reviewItems.filter((f) => f.validation === "OWNER_REVIEW_REQUIRED").length !== 1) {
    errors.push("OWNER_REVIEW_REQUIRED count !== 1");
  }
  if (payload.reviewFindings !== 580) errors.push(`reviewFindings ${payload.reviewFindings} !== 580`);
  if (covered.size !== 580) errors.push(`source finding coverage ${covered.size}/580`);
  for (const id of reviewIds) {
    if (!covered.has(id)) errors.push(`missing source finding ${id}`);
  }

  const seen = new Set();
  let currentExact = 0;
  let emptyNew = 0;
  let sameNew = 0;
  let foreignInNew = 0;
  let germanChecked = 0;
  let germanPreserved = 0;
  let deTargets = 0;

  for (const item of payload.items) {
    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate target ${key}`);
    seen.add(key);

    if (item.status !== "LABOT") errors.push(`${item.id}: status !== LABOT`);
    if (item.field.startsWith("de") || item.field.includes(".de")) deTargets += 1;

    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) {
      errors.push(`${item.id}: card not found`);
      continue;
    }
    const actual = readCurrent(entry, item.field);
    if (stringifyValue(actual) === item.current) currentExact += 1;
    else errors.push(`${item.id}: CURRENT mismatch production (${item.field})`);

    if (!item.new || String(item.new).trim() === "") {
      emptyNew += 1;
      errors.push(`${item.id}: empty NEW`);
    }
    if (item.current === item.new) {
      sameNew += 1;
      errors.push(`${item.id}: CURRENT === NEW`);
    }
    if (hasForeignRemnant(String(item.new))) {
      foreignInNew += 1;
      errors.push(`${item.id}: foreign remnant in NEW`);
    }
    if (item.field.includes("comparison") && item.field.endsWith(".example")) {
      germanChecked += 1;
      if (germanPartPreserved(item.current, item.new)) germanPreserved += 1;
      else errors.push(`${item.id}: German comparison part not preserved`);
    }
  }

  const mandatoryCards = [
    "a2-abfahren",
    "a1-vor",
    "a1-vom",
    "a1-zum",
    "a1-sein",
  ];
  for (const cardId of mandatoryCards) {
    if (!payload.items.some((i) => i.cardId === cardId)) errors.push(`missing mandatory card ${cardId}`);
  }
  if (!payload.items.some((i) => i.cardId === "a1-sein" && i.field === "study.sectionAccents.examples[1].lv.purple[0]")) {
    errors.push("missing a1-sein sectionAccents stale esi");
  }
  if (!payload.items.some((i) => i.cardId === "a1-sein" && i.field === "study.important[1]")) {
    errors.push("missing a1-sein study.important[1]");
  }
  const foreignCount = payload.items.filter((i) => i.category === "FOREIGN_REMNANT").length;
  if (foreignCount !== 13) errors.push(`foreign remnants ${foreignCount} !== 13`);
  const sectionAccentsReal = payload.items.filter((i) => i.category === "SECTION_ACCENTS").length;
  if (sectionAccentsReal !== 1) errors.push(`sectionAccents REAL ${sectionAccentsReal} !== 1`);

  if (payload.errors?.length) errors.push(...payload.errors.map((e) => JSON.stringify(e)));
  if ((payload.noOpFindingIds || []).length !== 5) {
    errors.push(`expected 5 no-op findings, got ${(payload.noOpFindingIds || []).length}`);
  }

  const pct = payload.items.length ? (currentExact / payload.items.length) * 100 : 0;
  const verdict = errors.length ? "BLOCKED" : "READY FOR COPY-ONLY APPLY";

  return {
    errors,
    verdict,
    metrics: {
      realFindings: 579,
      resolvedOwnerReview: 1,
      reviewCoverage: `${covered.size}/580`,
      uniqueOwnerTargets: payload.items.length,
      consolidatedDuplicates: payload.consolidatedDuplicates,
      labot: payload.items.filter((i) => i.status === "LABOT").length,
      ownerConflict: payload.errors?.filter((e) => e.error === "OWNER_CONFLICT").length || 0,
      currentExactMatchPct: pct,
      deTargets,
      foreignInNew,
      germanPreserved,
      germanChecked,
      foreignRemnants: foreignCount,
      sectionAccentsReal,
      syntaxPass,
      mirrorPass,
      noOpSkipped: (payload.noOpFindingIds || []).length,
    },
  };
}

function buildViewMd(payload) {
  const lines = [
    "# ES–DE A1+A2 — final regression OWNER decisions",
    "",
    `**Source HEAD:** \`${payload.sourceHead}\``,
    `**Review findings:** ${payload.reviewFindings}`,
    `**Unique OWNER targets:** ${payload.uniqueOwnerTargets}`,
    `**Status:** ${payload.status}`,
    "",
  ];
  for (const item of payload.items) {
    lines.push(`## ${item.id}`, "");
    lines.push(`- Source Finding IDs: ${item.sourceFindingIds.map((id) => `\`${id}\``).join(", ")}`);
    lines.push(`- Severity: ${item.severity}`);
    lines.push(`- Category: ${item.category}`);
    lines.push(`- Level: ${item.level}`);
    lines.push(`- Card ID: \`${item.cardId}\``);
    lines.push(`- DE: \`${item.de}\``);
    lines.push(`- Field/path: \`${item.field}\``);
    lines.push(`- CURRENT: \`${item.current}\``);
    lines.push(`- NEW: \`${item.new}\``);
    lines.push(`- Status: ${item.status}`);
    lines.push(`- Pamatojums: ${item.reason}`);
    lines.push("");
  }
  return lines.join("\n");
}

function buildSummaryMd(payload, validation) {
  const m = validation.metrics;
  const lines = [
    "# ES–DE A1+A2 — final regression OWNER decisions summary",
    "",
    `**Source HEAD:** \`${payload.sourceHead}\``,
    `**Branch:** \`${payload.branch}\``,
    `**PR:** #${payload.pr}`,
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| REAL findings | **${m.realFindings}** |`,
    `| Resolved OWNER_REVIEW_REQUIRED | **${m.resolvedOwnerReview}** |`,
    `| Review coverage | **${m.reviewCoverage}** |`,
    `| Unique OWNER targets | **${m.uniqueOwnerTargets}** |`,
    `| Consolidated duplicates | **${m.consolidatedDuplicates}** |`,
    `| Skipped no-op REAL (current===proposed) | **${m.noOpSkipped}** |`,
    `| LABOT | **${m.labot}** |`,
    `| OWNER_CONFLICT | **${m.ownerConflict}** |`,
    `| CURRENT exact match | **${m.currentExactMatchPct.toFixed(0)}%** |`,
    `| DE targets | **${m.deTargets}** |`,
    `| Production changes | **0** |`,
    `| Mirror | **${m.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${m.syntaxPass ? "PASS" : "FAIL"}** |`,
    "",
    `## FINAL VERDICT: **${validation.verdict}**`,
    "",
  ];
  if (validation.errors.length) {
    lines.push("## Validation errors", "");
    for (const e of validation.errors.slice(0, 30)) lines.push(`- ${e}`);
    if (validation.errors.length > 30) lines.push(`- ... and ${validation.errors.length - 30} more`);
    lines.push("");
  }
  return lines.join("\n");
}

module.exports = {
  buildOwnerDecisions,
  validateOwnerDecisions,
  buildViewMd,
  buildSummaryMd,
  normalizeField,
  SEIN_IMPORTANT_OVERRIDE,
};
