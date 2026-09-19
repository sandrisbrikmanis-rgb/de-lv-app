#!/usr/bin/env node
"use strict";

const { RECORD_KIND, AUDIT_VERDICTS, FORBIDDEN_AUDIT_VERDICTS } = require("./constants");
const { bindRegistryAuthorities } = require("./registry-bindings");

const LUNA_STATUS_TO_APVIENOTS = Object.freeze({
  PASS: "PASS",
  OK: "PASS",
  NO_FINDING: "PASS",
  FINDING: "FINDING",
  NEEDS_REVIEW: "NEEDS_SOURCE_REVIEW",
  NEEDS_SOURCE_REVIEW: "NEEDS_SOURCE_REVIEW",
  DE_SOURCE_ISSUE: "SOURCE_DE_ISSUE",
  SOURCE_DE_ISSUE: "SOURCE_DE_ISSUE",
});

function mapLunaStatusToAuditVerdict(status) {
  const raw = String(status || "").trim().toUpperCase();
  if (raw === "PENDING_HUMAN_REVIEW") return { pass: false, error: "FORBIDDEN_PENDING_HUMAN_REVIEW" };
  if (FORBIDDEN_AUDIT_VERDICTS.includes(raw)) return { pass: false, error: "FORBIDDEN_VERDICT" };
  const mapped = LUNA_STATUS_TO_APVIENOTS[raw];
  if (!mapped || !AUDIT_VERDICTS.includes(mapped)) {
    return { pass: false, error: "UNKNOWN_LUNA_STATUS", status: raw };
  }
  return { pass: true, verdict: mapped };
}

function buildAuditedRecordFromInventoryAndLuna(inventoryRow, lunaItem, options = {}) {
  const lang = inventoryRow.language;
  const reg = bindRegistryAuthorities(lang);
  const binding = reg.pass ? reg.binding : {};

  const statusResult = lunaItem
    ? mapLunaStatusToAuditVerdict(lunaItem.status || lunaItem.lunaVerdict || lunaItem.AUDIT_VERDICT)
    : { pass: true, verdict: "NEEDS_SOURCE_REVIEW" };

  if (!statusResult.pass) {
    return { pass: false, errors: [statusResult.error], rowId: inventoryRow.rowId };
  }

  const verdict = statusResult.verdict;
  const record = {
    recordKind: RECORD_KIND.AUDITED_EVIDENCE,
    auditSource: inventoryRow.auditSource,
    productionFile: inventoryRow.productionFile,
    language: lang,
    fieldPath: inventoryRow.fieldPath,
    currentValue: inventoryRow.currentValue,
    cardId: inventoryRow.cardId,
    rowId: inventoryRow.rowId,
    datasetProductionSha: inventoryRow.datasetProductionSha,
    auditBaselineSha: inventoryRow.auditBaselineSha,
    DE_AUTHORITY: lunaItem?.DE_AUTHORITY || binding.DE_AUTHORITY || "",
    DE_SOURCE_URL: lunaItem?.DE_SOURCE_URL || binding.DE_SOURCE_URL || "",
    DE_SOURCE_ENTRY_OR_RULE: lunaItem?.DE_SOURCE_ENTRY_OR_RULE || "",
    DE_SOURCE_EVIDENCE: lunaItem?.DE_SOURCE_EVIDENCE || "",
    TARGET_AUTHORITY: lunaItem?.TARGET_AUTHORITY || binding.TARGET_AUTHORITY || "",
    TARGET_SOURCE_URL: lunaItem?.TARGET_SOURCE_URL || binding.TARGET_SOURCE_URL || "",
    TARGET_SOURCE_ENTRY_OR_RULE: lunaItem?.TARGET_SOURCE_ENTRY_OR_RULE || "",
    TARGET_SOURCE_EVIDENCE: lunaItem?.TARGET_SOURCE_EVIDENCE || "",
    CONTEXT_REASONING: lunaItem?.CONTEXT_REASONING || lunaItem?.contextReasoning || "",
    AUDIT_VERDICT: verdict,
  };

  if (verdict === "FINDING") {
    record.CURRENT_PROBLEM = lunaItem?.CURRENT_PROBLEM || lunaItem?.problem || "";
    record.PROPOSED_NEW = lunaItem?.PROPOSED_NEW || lunaItem?.proposedNew || "";
    record.NEW_SOURCE_EVIDENCE = lunaItem?.NEW_SOURCE_EVIDENCE || "";
  }

  if (lunaItem?.CEFR_APPLICABLE) {
    record.CEFR_APPLICABLE = true;
    record.CEFR_AUTHORITY = lunaItem.CEFR_AUTHORITY || "";
    record.CEFR_SOURCE_URL = lunaItem.CEFR_SOURCE_URL || "";
    record.CEFR_LEVEL = lunaItem.CEFR_LEVEL || "";
    record.CEFR_EVIDENCE = lunaItem.CEFR_EVIDENCE || "";
  }

  if (!lunaItem && verdict === "NEEDS_SOURCE_REVIEW") {
    record.CONTEXT_REASONING =
      "No per-field Luna result; cannot close without authoritative source evidence (APVIENOTS §8).";
  }

  return { pass: true, record };
}

function indexLunaItemsByFieldPath(items, lang) {
  const map = new Map();
  for (const item of items || []) {
    const fp = item.fieldPath || item.field || null;
    if (fp) map.set(`${lang}|${fp}`, item);
  }
  return map;
}

function mergeInventoryWithLunaResults(inventoryRows, lunaItems, lang) {
  const byField = indexLunaItemsByFieldPath(lunaItems, lang);
  const records = [];
  const errors = [];
  for (const row of inventoryRows) {
    const lunaItem = byField.get(`${lang}|${row.fieldPath}`) || null;
    const built = buildAuditedRecordFromInventoryAndLuna(row, lunaItem);
    if (!built.pass) errors.push(built);
    else records.push(built.record);
  }
  return { records, errors };
}

module.exports = {
  mapLunaStatusToAuditVerdict,
  buildAuditedRecordFromInventoryAndLuna,
  mergeInventoryWithLunaResults,
  indexLunaItemsByFieldPath,
  LUNA_STATUS_TO_APVIENOTS,
};
