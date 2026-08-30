#!/usr/bin/env node
"use strict";

function mapLunaStatusToClassification(status) {
  const normalized = String(status || "PASS").toUpperCase();
  if (normalized === "PASS" || normalized === "OK" || normalized === "NO_FINDING") return null;
  if (normalized === "FINDING" || normalized === "VALIDATED_REAL_FINDING") return "VALIDATED_REAL_FINDING";
  if (normalized === "SOURCE_LV_ISSUE") return "SOURCE_LV_ISSUE";
  if (normalized === "DE_SOURCE_ISSUE") return "DE_SOURCE_ISSUE";
  if (normalized === "STYLE_ONLY") return "STYLE_ONLY";
  if (normalized === "PROJECT_CONVENTION") return "PROJECT_CONVENTION";
  if (normalized === "NEEDS_REVIEW") return "NEEDS_REVIEW";
  if (normalized === "OWNER_DECISION_REQUIRED") return "OWNER_DECISION_REQUIRED";
  return "NEEDS_REVIEW";
}

function normalizeLunaItemsToFindings(items, scope, options = {}) {
  const findings = [];
  let seq = options.seqStart || 1;
  const [group, dataset, lang] = String(scope.scopeId || "").split("/");

  for (const item of items || []) {
    const classificationStatus = mapLunaStatusToClassification(item.status || item.lunaVerdict);
    if (!classificationStatus) continue;

    const cardId = item.cardId || item.id || item.lessonKey || "unknown";
    const fieldPath = item.field || item.fieldPath || "lv";
    const category = String(item.category || item.verdict || "TRANSLATION").toUpperCase();
    const auditId = `DISC-${String(group).toUpperCase()}-${String(dataset).toUpperCase()}-${String(lang).toUpperCase()}-L${String(seq).padStart(4, "0")}`;
    seq += 1;

    findings.push({
      auditId,
      findingStableId: `${scope.scopeId}|${cardId}|${fieldPath}|${category}|gpt-5.6-luna`,
      dedupKey: `${group}|${dataset}|${cardId}|${fieldPath}|${category}`,
      scopeId: scope.scopeId,
      group,
      dataset,
      lang,
      cardId,
      fieldPath,
      severity: String(item.severity || "MEDIUM").toUpperCase(),
      category,
      classificationStatus,
      productionFile: item.productionFile || options.productionFile || null,
      current: item.current || item.currentText || item.lv || "",
      de: item.de || "",
      proposed: item.proposed || item.proposedNative || item.proposedFix || null,
      source: "gpt-5.6-luna",
      lunaVerdict: classificationStatus,
      confidence: item.confidence || null,
    });
  }

  return findings;
}

module.exports = {
  mapLunaStatusToClassification,
  normalizeLunaItemsToFindings,
};
