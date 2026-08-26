/**
 * Validation helpers for ES-DE B1 OWNER proposals final package.
 */
const { getAt } = require("./da-a1-owner-path");
const { hasForeignRemnant, germanPartPreserved, splitComparisonExample } = require("./es-foreign-remnant-validate");
const { loadArray, entryId } = require("./es-b1-audit-helpers");
const { resolveCard, normalizeFieldPath } = require("./es-b1-owner-context");
const path = require("path");
const { ROOT } = require("./audit-common");
const { PRODUCTION_PATH } = require("./es-b1-discovery-config");

const VALID_DECISIONS = new Set([
  "LABOT",
  "NELABOT",
  "FALSE_POSITIVE",
  "SOURCE_DE_ISSUE",
  "OWNER_REVIEW_REQUIRED",
]);

function readCurrent(cardId, field, words) {
  const { entry } = resolveCard(words, cardId);
  if (!entry) return undefined;
  const normField = normalizeFieldPath(field);
  if (normField === "lv") return entry.lv;
  return getAt(entry, normField);
}

function normalizeDecision(d) {
  const s = String(d || "").toUpperCase().replace(/\s+/g, "_");
  if (s === "FIX" || s === "REPAIR") return "LABOT";
  if (s === "NO_FIX" || s === "KEEP" || s === "OK" || s === "PASS") return "NELABOT";
  if (s === "FALSEPOSITIVE" || s === "FALSE POSITIVE") return "FALSE_POSITIVE";
  if (s === "SOURCE_DE" || s === "DE_SOURCE_ISSUE") return "SOURCE_DE_ISSUE";
  if (s === "REVIEW_REQUIRED" || s === "NEEDS_OWNER_REVIEW") return "OWNER_REVIEW_REQUIRED";
  return s;
}

function normalizeAction(action, decision) {
  const a = String(action || "").toUpperCase();
  if (decision === "NELABOT" || decision === "FALSE_POSITIVE" || decision === "SOURCE_DE_ISSUE") return "KEEP";
  if (a === "ADD" || a === "ADD_STRUCTURE") return "ADD_STUDY";
  if (["REPLACE", "KEEP", "REMOVE", "ADD_STUDY"].includes(a)) return a;
  return decision === "LABOT" ? "REPLACE" : "KEEP";
}

function mergeLunaResult(source, luna) {
  const decision = normalizeDecision(luna.validationDecision || luna.decision || luna.verdict);
  let action = normalizeAction(luna.action, decision);
  let newVal = luna.new ?? luna.proposed ?? luna.proposedNew ?? luna.proposedEs ?? "";
  if (typeof newVal === "object") newVal = JSON.stringify(newVal);
  newVal = String(newVal ?? "");

  if (!VALID_DECISIONS.has(decision)) {
    return {
      validationDecision: "OWNER_REVIEW_REQUIRED",
      action: "KEEP",
      new: source.current,
      status: "PĀRSKATĪT",
      reason: luna.reason || `Nederīgs validationDecision: ${luna.validationDecision}`,
    };
  }

  if (decision === "NELABOT" || decision === "FALSE_POSITIVE" || decision === "SOURCE_DE_ISSUE") {
    return {
      validationDecision: decision,
      action: "KEEP",
      new: source.current,
      status: "PĀRSKATĪT",
      reason: luna.reason || luna.shortReason || "",
    };
  }

  if (decision === "LABOT") {
    if (!newVal && action !== "REMOVE") {
      return {
        validationDecision: "OWNER_REVIEW_REQUIRED",
        action: "KEEP",
        new: source.current,
        status: "PĀRSKATĪT",
        reason: luna.reason || "LABOT bez NEW vērtības",
      };
    }
    if (newVal === source.current && action !== "REMOVE") {
      return {
        validationDecision: "OWNER_REVIEW_REQUIRED",
        action: "KEEP",
        new: source.current,
        status: "PĀRSKATĪT",
        reason: luna.reason || "LABOT bet NEW === CURRENT",
      };
    }
    return {
      validationDecision: "LABOT",
      action,
      new: newVal,
      status: "PĀRSKATĪT",
      reason: luna.reason || luna.shortReason || "",
    };
  }

  // OWNER_REVIEW_REQUIRED
  return {
    validationDecision: "OWNER_REVIEW_REQUIRED",
    action: newVal && newVal !== source.current ? action : "KEEP",
    new: newVal || source.current,
    status: "PĀRSKATĪT",
    reason: luna.reason || luna.shortReason || "",
  };
}

function buildFinalItem(source, merged) {
  return {
    id: source.id,
    sourceFindingIds: source.findingIds || [],
    severity: source.severity,
    category: source.category,
    cardId: source.cardId,
    de: source.pairedGermanText || source.de,
    field: normalizeFieldPath(source.field),
    current: source.current,
    new: merged.new,
    action: merged.action,
    status: merged.status || "PĀRSKATĪT",
    validationDecision: merged.validationDecision,
    reason: merged.reason,
  };
}

function sectionAccentVisibleMatch(entry, field, newVal) {
  if (!field.includes("sectionAccents")) return true;
  if (newVal === "" || newVal === null) return true;
  const sectionMatch = field.match(/^study\.sectionAccents\.([^.[\]]+)/);
  if (!sectionMatch) return true;
  const section = sectionMatch[1];
  const study = entry?.study;
  if (!study) return false;
  const sectionVal = getAt(study, section);
  let visible = "";
  if (typeof sectionVal === "string") visible = sectionVal;
  else if (Array.isArray(sectionVal)) {
    visible = sectionVal
      .map((item) => {
        if (typeof item === "string") return item;
        if (item && typeof item === "object") {
          return [item.lv, item.meaning, item.example].filter(Boolean).join(" ");
        }
        return "";
      })
      .join(" ");
  }
  return visible.includes(newVal);
}

function validateProposalsFinal(sourceOwners, payload, words) {
  const errors = [];
  const sourceById = new Map((sourceOwners || []).map((o) => [o.id, o]));
  const seenKeys = new Set();
  const findingIdsCovered = new Set();
  let currentMatch = 0;
  let cardFound = 0;
  let fieldFound = 0;
  let labotEmptyNew = 0;
  let labotSameNew = 0;
  let nelabotDiffNew = 0;
  let foreignInLabotNew = 0;
  let germanPreserved = 0;
  let germanChecked = 0;
  let sectionAccentMatch = 0;
  let sectionAccentChecked = 0;
  let prevNum = 0;

  const expectedCount = sourceOwners.length;
  if (payload.sourceOwnerObjects !== expectedCount) {
    errors.push(`sourceOwnerObjects ${payload.sourceOwnerObjects} !== ${expectedCount}`);
  }
  if (payload.processedOwnerObjects !== expectedCount) {
    errors.push(`processedOwnerObjects ${payload.processedOwnerObjects} !== ${expectedCount}`);
  }
  if (payload.items.length !== expectedCount) {
    errors.push(`items count ${payload.items.length} !== ${expectedCount}`);
  }

  for (const item of payload.items) {
    const num = parseInt(String(item.id).replace(/\D/g, "").slice(-4) || "0", 10);
    if (num !== prevNum + 1) errors.push(`ID order gap: expected ${prevNum + 1}, got ${num} (${item.id})`);
    prevNum = num;

    const src = sourceById.get(item.id);
    if (!src) {
      errors.push(`${item.id}: missing in source`);
      continue;
    }

    for (const fid of item.sourceFindingIds || src.findingIds || []) findingIdsCovered.add(fid);

    const key = `${src.level}|${item.cardId}|${item.field}`;
    if (seenKeys.has(key)) errors.push(`duplicate key ${key}`);
    seenKeys.add(key);

    const { entry } = resolveCard(words, item.cardId);
    if (entry) cardFound += 1;
    else errors.push(`${item.id}: card not found ${item.cardId}`);

    const actual = readCurrent(item.cardId, item.field, words);
    const match =
      String(actual) === String(item.current) ||
      (typeof actual === "object" && JSON.stringify(actual) === item.current);
    if (match) currentMatch += 1;
    else errors.push(`${item.id}: CURRENT mismatch production`);

    const actualField = normalizeFieldPath(item.field);
    if (entry) {
      const atField = actualField === "lv" ? entry.lv : getAt(entry, actualField);
      if (atField !== undefined) fieldFound += 1;
      else errors.push(`${item.id}: field not found ${actualField}`);
    }

    const decision = normalizeDecision(item.validationDecision);
    if (!VALID_DECISIONS.has(decision)) errors.push(`${item.id}: invalid validationDecision ${item.validationDecision}`);

    if (decision === "LABOT") {
      if (!item.new && item.action !== "REMOVE") {
        labotEmptyNew += 1;
        errors.push(`${item.id}: LABOT with empty NEW`);
      }
      if (item.new === item.current && item.action !== "REMOVE") {
        labotSameNew += 1;
        errors.push(`${item.id}: LABOT with NEW === CURRENT`);
      }
      if (item.action === "KEEP") errors.push(`${item.id}: LABOT with action KEEP`);
      if (hasForeignRemnant(String(item.new))) {
        foreignInLabotNew += 1;
        errors.push(`${item.id}: foreign remnant in LABOT NEW`);
      }
    }

    if (decision === "NELABOT" || decision === "FALSE_POSITIVE" || decision === "SOURCE_DE_ISSUE") {
      if (item.new !== item.current) {
        nelabotDiffNew += 1;
        errors.push(`${item.id}: ${decision} but NEW !== CURRENT`);
      }
      if (item.action !== "KEEP") errors.push(`${item.id}: ${decision} but action !== KEEP`);
    }

    if (actualField.includes("comparison") && actualField.endsWith(".example") && decision === "LABOT") {
      germanChecked += 1;
      if (germanPartPreserved(item.current, item.new)) germanPreserved += 1;
      else errors.push(`${item.id}: German part not preserved in comparison example`);
    }

    if (actualField.includes("sectionAccents") && decision === "LABOT") {
      sectionAccentChecked += 1;
      if (item.action === "REMOVE" || sectionAccentVisibleMatch(entry, actualField, item.new)) {
        sectionAccentMatch += 1;
      } else {
        errors.push(`${item.id}: sectionAccent NEW not in visible text`);
      }
    }
  }

  // Coverage of all source finding IDs
  const allFindingIds = new Set();
  for (const o of sourceOwners) {
    for (const fid of o.findingIds || []) allFindingIds.add(fid);
  }
  const missingFindings = [...allFindingIds].filter((id) => !findingIdsCovered.has(id));
  if (missingFindings.length) {
    errors.push(`missing finding IDs: ${missingFindings.length} (e.g. ${missingFindings.slice(0, 5).join(", ")})`);
  }

  for (const id of sourceById.keys()) {
    if (!payload.items.find((i) => i.id === id)) errors.push(`missing proposal for ${id}`);
  }

  const metrics = {
    sourceFindings: allFindingIds.size,
    findingIdsCovered: findingIdsCovered.size,
    sourceOwnerObjects: expectedCount,
    processedOwnerObjects: payload.items.length,
    duplicates: errors.filter((e) => e.includes("duplicate")).length,
    currentMatch,
    currentMatchPct: expectedCount ? (currentMatch / expectedCount) * 100 : 0,
    cardFound,
    cardFoundPct: expectedCount ? (cardFound / expectedCount) * 100 : 0,
    fieldFound,
    fieldFoundPct: expectedCount ? (fieldFound / expectedCount) * 100 : 0,
    labotEmptyNew,
    labotSameNew,
    nelabotDiffNew,
    foreignInLabotNew,
    germanPreserved,
    germanChecked,
    germanPreservedPct: germanChecked ? (germanPreserved / germanChecked) * 100 : 100,
    sectionAccentMatch,
    sectionAccentChecked,
    sectionAccentMatchPct: sectionAccentChecked ? (sectionAccentMatch / sectionAccentChecked) * 100 : 100,
  };

  return { errors, metrics };
}

function countBy(items, key, normalize = (v) => v) {
  const counts = {};
  for (const item of items) {
    const k = normalize(item[key]);
    counts[k] = (counts[k] || 0) + 1;
  }
  return counts;
}

module.exports = {
  VALID_DECISIONS,
  readCurrent,
  normalizeDecision,
  normalizeAction,
  mergeLunaResult,
  buildFinalItem,
  validateProposalsFinal,
  countBy,
  sectionAccentVisibleMatch,
};
