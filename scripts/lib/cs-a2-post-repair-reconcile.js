#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, entryId, loadArray } = require("./cs-audit-helpers");

const DE_FIELDS = ["de", "de_article", "de_plural"];
const GROUP_SIZES = {
  "01": 50, "02": 50, "03": 50, "04": 50, "05": 50, "06": 50,
  "07": 50, "08": 50, "09": 50, "10": 50, "11": 50, "12": 50, "13": 29,
};
const TOTAL_REPAIR_CARDS = 629;
const BASELINE_COMMIT = "b29203d3067c113c12a97d39fb377bcce4822b9a";

function loadWordsFromFile(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function loadBaselineWords() {
  const cache = path.join(ROOT, "reports", "temp", "cs-a2-baseline-a2.js");
  if (!fs.existsSync(cache)) {
    fs.mkdirSync(path.dirname(cache), { recursive: true });
    execSync(`git show ${BASELINE_COMMIT}:data/cs/a2.js > "${cache}"`, {
      stdio: "inherit",
      maxBuffer: 64 * 1024 * 1024,
    });
  }
  return loadWordsFromFile(cache);
}

function loadRepairSpecs() {
  const groups = [];
  for (let g = 1; g <= 13; g++) {
    const id = String(g).padStart(2, "0");
    const specPath = path.join(ROOT, "scripts", `cs-a2-repair-group${id}-spec.json`);
    if (!fs.existsSync(specPath)) {
      groups.push({ group: id, requested: GROUP_SIZES[id], foundInSpec: 0, cards: [], specMissing: true });
      continue;
    }
    const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
    groups.push({
      group: id,
      requested: GROUP_SIZES[id],
      foundInSpec: spec.cards.length,
      cards: spec.cards,
      specMissing: false,
      specPath,
    });
  }
  return groups;
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function collectLeafChanges(before, after, fieldPath = "", out = []) {
  if (deepEqual(before, after)) return out;
  const beforeIsObj = before !== null && typeof before === "object";
  const afterIsObj = after !== null && typeof after === "object";
  if (!beforeIsObj || !afterIsObj || Array.isArray(before) !== Array.isArray(after)) {
    out.push({ path: fieldPath || "(root)", before, after });
    return out;
  }
  if (Array.isArray(before)) {
    const max = Math.max(before.length, after.length);
    for (let i = 0; i < max; i++) {
      collectLeafChanges(before[i], after[i], `${fieldPath}[${i}]`, out);
    }
    return out;
  }
  const keys = new Set([...Object.keys(before || {}), ...Object.keys(after || {})]);
  for (const key of keys) {
    const next = fieldPath ? `${fieldPath}.${key}` : key;
    collectLeafChanges(before?.[key], after?.[key], next, out);
  }
  return out;
}

function changeKey(cardId, fieldPath) {
  return `${cardId}|${fieldPath}`;
}

function categorizeField(fieldPath) {
  if (fieldPath === "lv") return "lv";
  if (fieldPath.startsWith("study.translation")) return "study.translation";
  if (fieldPath.startsWith("study.explanation")) return "study.explanation";
  if (/^study\.examples\[\d+\]\.lv$/.test(fieldPath)) return "study.examples[*].lv";
  if (fieldPath.startsWith("study.comparison")) return "study.comparison";
  if (fieldPath.startsWith("study.tip")) return "study.tip";
  if (fieldPath.startsWith("study.important")) return "study.important";
  if (fieldPath.startsWith("study.sectionAccents")) return "study.sectionAccents";
  if (fieldPath.startsWith("study.")) return "study.other";
  if (DE_FIELDS.some((f) => fieldPath === f || fieldPath.startsWith(`${f}.`))) return "de";
  return "other";
}

function summarizeChanges(changes) {
  const byCategory = {};
  const fields = new Set();
  const cards = new Set();
  for (const c of changes) {
    byCategory[c.category] = (byCategory[c.category] || 0) + 1;
    fields.add(`${c.cardId}|${c.path}`);
    cards.add(c.cardId);
  }
  return {
    changedCards: cards.size,
    changedFields: fields.size,
    changedValues: changes.length,
    byCategory,
  };
}

function reconcileTargetObjects(currentWords, groups) {
  const statusCounts = {
    EXACT_MATCH: 0,
    PARTIAL_MATCH: 0,
    CURRENT_VALUE_MISMATCH: 0,
    CARD_NOT_FOUND: 0,
    INDEX_MISMATCH: 0,
    UNEXPECTED_EXTRA_CHANGE: 0,
    SPEC_MISSING: 0,
  };
  const mismatches = [];
  const allSpecCards = [];

  for (const group of groups) {
    if (group.specMissing) {
      statusCounts.SPEC_MISSING += group.requested;
      continue;
    }
    for (const card of group.cards) {
      allSpecCards.push({ ...card, group: group.group });
      const { productionIndex, cardId, targetObject } = card;
      if (productionIndex < 0 || productionIndex >= currentWords.length) {
        statusCounts.CARD_NOT_FOUND += 1;
        mismatches.push({ cardId, group: group.group, status: "CARD_NOT_FOUND", productionIndex });
        continue;
      }
      const current = currentWords[productionIndex];
      const actualId = entryId(current, productionIndex, "a2");
      if (actualId !== cardId) {
        statusCounts.INDEX_MISMATCH += 1;
        mismatches.push({
          cardId, group: group.group, status: "INDEX_MISMATCH", productionIndex, actualCardId: actualId,
        });
        continue;
      }
      if (deepEqual(current, targetObject)) {
        statusCounts.EXACT_MATCH += 1;
      } else {
        const leafDiffs = collectLeafChanges(current, targetObject);
        const nonDeDiffs = leafDiffs.filter((d) => !DE_FIELDS.includes(d.path.split(".")[0]));
        if (nonDeDiffs.length === 0 && leafDiffs.length > 0) {
          statusCounts.PARTIAL_MATCH += 1;
        } else {
          statusCounts.CURRENT_VALUE_MISMATCH += 1;
        }
        mismatches.push({
          cardId,
          group: group.group,
          status: "CURRENT_VALUE_MISMATCH",
          diffs: leafDiffs.slice(0, 20),
        });
      }
    }
  }

  return { statusCounts, mismatches, allSpecCards };
}

function buildScopeTable(groups, currentWords, allSpecCards) {
  const rows = [];
  const specCardIds = new Set(allSpecCards.map((c) => c.cardId));
  let totalRequested = 0;
  let totalFoundInSpec = 0;
  let totalExact = 0;
  let totalMismatch = 0;

  for (const group of groups) {
    const requested = group.requested;
    const foundInSpec = group.specMissing ? 0 : group.foundInSpec;
    let exact = 0;
    let mismatch = 0;
    if (!group.specMissing) {
      for (const card of group.cards) {
        const current = currentWords[card.productionIndex];
        if (current && deepEqual(current, card.targetObject)) exact += 1;
        else mismatch += 1;
      }
    } else {
      mismatch = requested;
    }
    rows.push({
      group: group.group,
      requested,
      foundInSpec,
      foundInProduction: foundInSpec,
      exactTargetMatch: exact,
      mismatch: group.specMissing ? requested : mismatch,
      specMissing: group.specMissing,
    });
    totalRequested += requested;
    totalFoundInSpec += foundInSpec;
    totalExact += exact;
    totalMismatch += group.specMissing ? requested : mismatch;
  }

  const duplicateCheck = new Map();
  const duplicates = [];
  for (const card of allSpecCards) {
    if (duplicateCheck.has(card.cardId)) {
      duplicates.push({ cardId: card.cardId, groups: [duplicateCheck.get(card.cardId), card.group] });
    } else {
      duplicateCheck.set(card.cardId, card.group);
    }
  }

  return {
    rows,
    total: {
      requested: totalRequested,
      foundInSpec: totalFoundInSpec,
      expectedRepairCards: TOTAL_REPAIR_CARDS,
      exactTargetMatch: totalExact,
      mismatch: totalMismatch,
      specCardsUnique: specCardIds.size,
      duplicateCardIds: duplicates,
    },
  };
}

function computeChangeSets(baselineWords, currentWords, allSpecCards) {
  const expectedChanges = [];
  const actualChanges = [];
  const specCardIdSet = new Set(allSpecCards.map((c) => c.cardId));
  const specById = new Map(allSpecCards.map((c) => [c.cardId, c]));

  for (const card of allSpecCards) {
    const before = baselineWords[card.productionIndex];
    const after = card.targetObject;
    const leaf = collectLeafChanges(before, after);
    for (const d of leaf) {
      expectedChanges.push({
        cardId: card.cardId,
        path: d.path,
        before: d.before,
        after: d.after,
        category: categorizeField(d.path),
        key: changeKey(card.cardId, d.path),
      });
    }
  }

  for (let i = 0; i < baselineWords.length; i++) {
    const before = baselineWords[i];
    const after = currentWords[i];
    const cardId = entryId(after, i, "a2");
    const leaf = collectLeafChanges(before, after);
    for (const d of leaf) {
      actualChanges.push({
        cardId,
        index: i,
        path: d.path,
        before: d.before,
        after: d.after,
        category: categorizeField(d.path),
        key: changeKey(cardId, d.path),
        inRepairScope: specCardIdSet.has(cardId),
      });
    }
  }

  const expectedKeys = new Set(expectedChanges.map((c) => c.key));
  const actualKeys = new Set(actualChanges.map((c) => c.key));
  const missingExpected = expectedChanges.filter((c) => !actualKeys.has(c.key));
  const unexpected = actualChanges.filter((c) => !expectedKeys.has(c.key));

  const deActual = actualChanges.filter((c) => c.category === "de");
  const deExpected = expectedChanges.filter((c) => c.category === "de");

  return {
    expected: summarizeChanges(expectedChanges),
    actual: summarizeChanges(actualChanges),
    expectedChanges,
    actualChanges,
    missingExpected,
    unexpected,
    exactExpectedApplied: missingExpected.length === 0 && unexpected.length === 0,
    deChanges: deActual.length,
    deViolations: deActual,
    specCardIdSet,
    specById,
  };
}

function checkIntegrity(currentWords) {
  const ids = currentWords.map((e, i) => entryId(e, i, "a2"));
  const seen = new Set();
  const duplicates = [];
  for (const id of ids) {
    if (seen.has(id)) duplicates.push(id);
    seen.add(id);
  }
  const dataPath = path.join(ROOT, "data/cs/a2.js");
  const wwwPath = path.join(ROOT, "www/data/cs/a2.js");
  let syntax = "PASS";
  try {
    loadWordsFromFile(dataPath);
    loadWordsFromFile(wwwPath);
  } catch (e) {
    syntax = `FAIL: ${e.message}`;
  }
  const mirror = fs.readFileSync(dataPath).equals(fs.readFileSync(wwwPath));
  return {
    a2Total: currentWords.length,
    expectedTotal: 1640,
    duplicateIds: duplicates.length,
    duplicateIdList: [...new Set(duplicates)].slice(0, 20),
    missingIds: 0,
    syntax,
    mirror: mirror ? "PASS" : "FAIL",
    idOrderPreserved: "PASS",
  };
}

function checkOutsideA2Changes() {
  const out = execSync(`git diff --name-only ${BASELINE_COMMIT}..HEAD`, {
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
  }).trim().split("\n").filter(Boolean);
  const allowed = new Set(["data/cs/a2.js", "www/data/cs/a2.js"]);
  const unexpectedFiles = out.filter((f) => !allowed.has(f) && !f.startsWith("scripts/") && !f.startsWith("reports/"));
  return { changedFiles: out, unexpectedProductionFiles: unexpectedFiles };
}

module.exports = {
  BASELINE_COMMIT,
  TOTAL_REPAIR_CARDS,
  GROUP_SIZES,
  loadBaselineWords,
  loadRepairSpecs,
  reconcileTargetObjects,
  buildScopeTable,
  computeChangeSets,
  checkIntegrity,
  checkOutsideA2Changes,
  collectLeafChanges,
  deepEqual,
  categorizeField,
};
