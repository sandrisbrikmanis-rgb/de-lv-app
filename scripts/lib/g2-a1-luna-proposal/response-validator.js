#!/usr/bin/env node
"use strict";

const { LUNA_ACTIONS } = require("./constants");

function htmlIssues(text) {
  const s = String(text || "");
  const issues = [];
  if (/<script\b/i.test(s)) issues.push("SCRIPT_TAG");
  if (/<\/?[a-z][^>]*>/i.test(s)) {
    const opens = (s.match(/<[a-z][^>/]*>/gi) || []).length;
    const closes = (s.match(/<\/[a-z][^>]*>/gi) || []).length;
    if (opens !== closes) issues.push("UNBALANCED_HTML");
  }
  return issues;
}

function placeholderTokens(text) {
  const s = String(text || "");
  const patterns = [/\{[^}]+\}/g, /%[sdif]/g, /\{\{[^}]+\}\}/g, /%\([^)]+\)[sdif]/g];
  const found = [];
  for (const re of patterns) {
    const m = s.match(re);
    if (m) found.push(...m);
  }
  return [...new Set(found)];
}

function validateLunaResponseItem(item, task, options = {}) {
  const issues = [];
  if (!item || typeof item !== "object") {
    return { ok: false, issues: ["INVALID_ITEM"] };
  }
  if (!item.taskId) issues.push("MISSING_TASK_ID");
  else if (item.taskId !== task.taskId) issues.push("TASK_ID_MISMATCH");

  const action = item.action;
  if (!action) issues.push("MISSING_ACTION");
  else if (!LUNA_ACTIONS.includes(action)) issues.push(`UNKNOWN_ACTION:${action}`);

  if (action === "PROPOSE_REPLACEMENT") {
    if (!item.proposedValue || String(item.proposedValue).trim() === "") issues.push("EMPTY_PROPOSED_VALUE");
    if (!item.rationale || String(item.rationale).trim() === "") issues.push("MISSING_RATIONALE");
    if (item.confidence == null) issues.push("MISSING_CONFIDENCE");
    if (!item.targetLanguageConfirmed) issues.push("MISSING_TARGET_LANGUAGE_CONFIRMATION");
    if (item.proposedValue === task.currentValue) issues.push("PROPOSED_EQUALS_CURRENT");
    const html = htmlIssues(item.proposedValue);
    if (html.length) issues.push(...html.map((h) => `HTML_INVALID:${h}`));
    const propPh = placeholderTokens(item.proposedValue);
    const curPh = placeholderTokens(task.currentValue);
    if (propPh.length && JSON.stringify(propPh.sort()) !== JSON.stringify(curPh.sort())) {
      issues.push("PLACEHOLDER_MISMATCH");
    }
    if (
      item.proposedValue === task.lvSourceValue &&
      action !== "INTENTIONAL_SAME_CANDIDATE"
    ) {
      issues.push("LV_TEXT_AS_TARGET_WITHOUT_INTENTIONAL_SAME");
    }
    if (item.proposedValue === task.deContextReadOnly && task.deContextReadOnly) {
      issues.push("DE_TEXT_AS_TARGET");
    }
  } else if (item.proposedValue != null && item.proposedValue !== "") {
    issues.push("PROPOSED_VALUE_MUST_BE_NULL");
  }

  if (item.locale && item.locale !== task.locale) issues.push("LOCALE_MISMATCH");
  if (item.crowdinKey && item.crowdinKey !== task.crowdinKey) issues.push("CROWDIN_KEY_MISMATCH");

  if (options.forbidDeWrite && task.fieldPath && /\.de\b|\[\d*\]\.de/i.test(task.fieldPath)) {
    issues.push("DE_FIELD_WRITE_TARGET");
  }

  if (item.lunaResultStatus && item.lunaResultStatus !== "PROPOSED_LUNA_PENDING_OWNER") {
    issues.push(`FORBIDDEN_STATUS:${item.lunaResultStatus}`);
  }
  if (item.ownerStatus && ["OWNER_APPROVED", "LABOT", "AUTO_APPLIED"].includes(item.ownerStatus)) {
    issues.push(`FORBIDDEN_OWNER_STATUS:${item.ownerStatus}`);
  }
  if (task.taskKind === "GROUPED_MANUAL_REVIEW" && action === "PROPOSE_REPLACEMENT") {
    issues.push("GROUPED_TASK_INDIVIDUAL_APPLY");
  }

  return { ok: issues.length === 0, issues, normalized: issues.length === 0 ? { ...item, lunaResultStatus: "PROPOSED_LUNA_PENDING_OWNER" } : null };
}

function validateLunaBatchResponse(batch, tasks, options = {}) {
  const byId = new Map(tasks.map((t) => [t.taskId, t]));
  const returnedIds = (batch.items || []).map((i) => i.taskId);
  const expectedIds = tasks.map((t) => t.taskId);
  const issues = [];

  if (returnedIds.length !== expectedIds.length) issues.push("ITEM_COUNT_MISMATCH");
  const missing = expectedIds.filter((id) => !returnedIds.includes(id));
  const extra = returnedIds.filter((id) => !expectedIds.includes(id));
  if (missing.length) issues.push(`MISSING_IDS:${missing.join(",")}`);
  if (extra.length) issues.push(`EXTRA_IDS:${extra.join(",")}`);
  const dup = returnedIds.filter((id, i) => returnedIds.indexOf(id) !== i);
  if (dup.length) issues.push(`DUPLICATE_IDS:${[...new Set(dup)].join(",")}`);

  const normalized = [];
  for (const item of batch.items || []) {
    const task = byId.get(item.taskId);
    if (!task) {
      issues.push(`UNKNOWN_TASK:${item.taskId}`);
      continue;
    }
    const v = validateLunaResponseItem(item, task, options);
    if (!v.ok) issues.push(...v.issues.map((x) => `${item.taskId}:${x}`));
    else normalized.push(v.normalized);
  }

  return { ok: issues.length === 0, issues, normalized };
}

module.exports = {
  validateLunaResponseItem,
  validateLunaBatchResponse,
  htmlIssues,
  placeholderTokens,
};
