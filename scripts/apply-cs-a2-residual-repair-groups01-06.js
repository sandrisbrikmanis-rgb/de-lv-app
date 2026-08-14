#!/usr/bin/env node
"use strict";
/**
 * CS-DE A2 Residual Repair Groups 01–06 — COPY-ONLY apply.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [path.join(ROOT, "data/cs/a2.js"), path.join(ROOT, "www/data/cs/a2.js")];
const DE_FIELDS = ["de", "de_article", "de_plural"];
const GROUPS = ["01", "02", "03", "04", "05", "06"];
const EXPECTED_COUNTS = { "01": 50, "02": 50, "03": 50, "04": 50, "05": 50, "06": 27 };
const TOTAL = 277;
const BRANCH = "cursor/cs-a2-residual-repair-groups01-06-6ea4";
const REPORT = path.join(ROOT, "reports/cs-a2-residual-repair-groups01-06-apply.md");

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const A2_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A2_WORDS = A2_WORDS;\n`,
    "utf8",
  );
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `a2-${entry.de}-${index}`;
  return `a2-${index}`;
}

function serializeDe(entry) {
  const o = {};
  for (const f of DE_FIELDS) o[f] = entry[f] ?? null;
  return JSON.stringify(o);
}

function collectLeafChanges(before, after, fieldPath = "", out = []) {
  if (JSON.stringify(before) === JSON.stringify(after)) return out;
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

function loadAllSpecs() {
  const specs = [];
  const allCards = [];
  const seenIds = new Set();
  const duplicates = [];

  for (const g of GROUPS) {
    const specPath = path.join(__dirname, `cs-a2-residual-repair-group${g}-spec.json`);
    if (!fs.existsSync(specPath)) throw new Error(`Missing spec: ${specPath}`);
    const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
    const expected = EXPECTED_COUNTS[g];
    if (!spec.cards || spec.cards.length !== expected) {
      throw new Error(`STOP — INVALID SPECIFICATION: group ${g} has ${spec.cards?.length ?? 0}, expected ${expected}`);
    }
    for (const card of spec.cards) {
      if (!card.cardId || card.productionIndex == null || !card.targetObject) {
        throw new Error(`STOP — INVALID SPECIFICATION: group ${g} card missing required fields`);
      }
      if (seenIds.has(card.cardId)) duplicates.push(card.cardId);
      else seenIds.add(card.cardId);
      allCards.push({ ...card, group: g });
    }
    specs.push({ group: g, spec, cards: spec.cards });
  }

  if (allCards.length !== TOTAL) throw new Error(`STOP — Group coverage mismatch: ${allCards.length}/${TOTAL}`);
  if (duplicates.length) throw new Error(`STOP — duplicate cardId: ${duplicates.join(", ")}`);

  return { specs, allCards, allowed: seenIds };
}

function applyCard(words, card) {
  const { groupOrder, productionIndex, cardId, targetObject, group } = card;
  const r = { group, groupOrder, productionIndex, cardId, status: null };

  if (productionIndex < 0 || productionIndex >= words.length) {
    r.status = "CARD_NOT_FOUND";
    return r;
  }

  const current = words[productionIndex];
  const actualId = entryId(current, productionIndex);
  if (actualId !== cardId) {
    r.status = "CURRENT_VALUE_MISMATCH";
    r.actualCardId = actualId;
    return r;
  }

  if (serializeDe(targetObject) !== serializeDe(current)) {
    r.status = "BLOCKED_DE_CHANGE";
    r.deFields = {};
    for (const f of DE_FIELDS) {
      r.deFields[f] = { current: current[f] ?? null, target: targetObject[f] ?? null };
    }
    return r;
  }

  if (JSON.stringify(current) === JSON.stringify(targetObject)) {
    r.status = "ALREADY_TARGET";
    return r;
  }

  words[productionIndex] = JSON.parse(JSON.stringify(targetObject));
  r.status = "APPLIED";
  return r;
}

function verifyIdOrder(words, baseline) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].de !== baseline[i].de) return false;
  }
  return true;
}

function generateReport(data) {
  const lines = [
    "# CS–DE A2 RESIDUAL REPAIR GROUPS 01–06 — APPLY COMPLETE",
    "",
    `Branch: \`${BRANCH}\``,
    `Generated: ${new Date().toISOString()}`,
    "",
    "## SPEC COVERAGE",
    "",
    ...GROUPS.map((g) => `- Group ${g}: ${data.groupStats[g].requested}/${EXPECTED_COUNTS[g]}`),
    "",
    `- **TOTAL:** ${data.summary.requested}/${TOTAL}`,
    `- **Unique cardId:** ${data.summary.uniqueCardIds}`,
    `- **Duplicate cardId:** ${data.summary.duplicateCardIds}`,
    "",
    "## APPLY",
    "",
    "| Metric | Value |",
    "|---|---|",
    `| Requested | ${data.summary.requested} |`,
    `| Processed | ${data.summary.processed} |`,
    `| Exact target matches | ${data.summary.exactTargetMatches}/${TOTAL} |`,
    `| Target mismatches | ${data.summary.targetMismatches} |`,
    `| Actually changed cards | ${data.summary.actuallyChangedCards} |`,
    `| Already target / unchanged | ${data.summary.alreadyTargetCards} |`,
    `| Actual changed leaf values | ${data.summary.actualChangedLeafValues} |`,
    `| DE changes | ${data.summary.deChanges} |`,
    `| Unexpected changed cards | ${data.summary.unexpectedChangedCards} |`,
    `| Unexpected changed values | ${data.summary.unexpectedChangedValues} |`,
    "",
    "### By group",
    "",
    "| Group | Requested | Applied/target match | Actually changed | Changed values |",
    "|---|---:|---:|---:|---:|",
    ...GROUPS.map((g) => {
      const s = data.groupStats[g];
      return `| ${g} | ${s.requested} | ${s.exactTargetMatch}/${s.requested} | ${s.actuallyChanged} | ${s.changedValues} |`;
    }),
    `| **TOTAL** | **${TOTAL}** | **${data.summary.exactTargetMatches}/${TOTAL}** | **${data.summary.actuallyChangedCards}** | **${data.summary.actualChangedLeafValues}** |`,
    "",
    "## VALIDATION",
    "",
    "| Check | Result |",
    "|---|---|",
    `| A2 total | ${data.summary.a2Total}/1640 |`,
    `| Syntax | ${data.summary.syntax} |`,
    `| ID uniqueness | ${data.summary.idUniqueness} |`,
    `| ID/order | ${data.summary.idOrder} |`,
    `| Structure | ${data.summary.structure} |`,
    `| DE READ-ONLY | ${data.summary.deReadOnly} |`,
    `| Scope integrity | ${data.summary.scopeIntegrity} |`,
    `| **Overall** | **${data.summary.overall}** |`,
    "",
  ];

  const blocked = data.results.filter((r) =>
    ["BLOCKED_DE_CHANGE", "CURRENT_VALUE_MISMATCH", "CARD_NOT_FOUND"].includes(r.status),
  );
  if (blocked.length) {
    lines.push("## Blocked cards", "");
    for (const b of blocked) {
      lines.push(`- ${b.cardId} (group ${b.group}): ${b.status}`);
      if (b.deFields) lines.push(`  - DE fields: ${JSON.stringify(b.deFields)}`);
      if (b.actualCardId) lines.push(`  - actualCardId: ${b.actualCardId}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

function main() {
  const { specs, allCards, allowed } = loadAllSpecs();
  const before = loadWords(FILES[0]);
  const baselineBefore = JSON.parse(JSON.stringify(before));
  const words = JSON.parse(JSON.stringify(before));

  const results = [];
  for (const card of allCards) {
    results.push(applyCard(words, card));
  }

  const hardFail = results.filter((r) =>
    ["BLOCKED_DE_CHANGE", "CURRENT_VALUE_MISMATCH", "CARD_NOT_FOUND"].includes(r.status),
  );
  if (hardFail.length) {
    console.error(JSON.stringify({ error: "APPLY_BLOCKED", hardFail }, null, 2));
    process.exit(1);
  }

  for (const fp of FILES) writeWords(fp, words);

  const groupStats = {};
  for (const g of GROUPS) {
    groupStats[g] = {
      requested: EXPECTED_COUNTS[g],
      exactTargetMatch: 0,
      actuallyChanged: 0,
      changedValues: 0,
      alreadyTarget: 0,
      applied: 0,
    };
  }

  let exactTargetMatches = 0;
  let alreadyTargetCards = 0;
  let appliedCards = 0;
  const perCardLeafChanges = new Map();

  for (const card of allCards) {
    const afterObj = words[card.productionIndex];
    const beforeObj = baselineBefore[card.productionIndex];
    const exact = JSON.stringify(afterObj) === JSON.stringify(card.targetObject);
    if (exact) exactTargetMatches += 1;
    groupStats[card.group].exactTargetMatch += exact ? 1 : 0;

    const leaf = collectLeafChanges(beforeObj, afterObj);
    perCardLeafChanges.set(card.cardId, leaf);
    if (leaf.length > 0) {
      groupStats[card.group].actuallyChanged += 1;
      groupStats[card.group].changedValues += leaf.length;
    }

    const r = results.find((x) => x.cardId === card.cardId);
    if (r?.status === "ALREADY_TARGET") {
      alreadyTargetCards += 1;
      groupStats[card.group].alreadyTarget += 1;
    }
    if (r?.status === "APPLIED") {
      appliedCards += 1;
      groupStats[card.group].applied += 1;
    }
  }

  let unexpectedChangedCards = 0;
  let unexpectedChangedValues = 0;
  for (let i = 0; i < words.length; i++) {
    const id = entryId(words[i], i);
    const leaf = collectLeafChanges(baselineBefore[i], words[i]);
    if (!leaf.length) continue;
    if (!allowed.has(id)) {
      unexpectedChangedCards += 1;
      unexpectedChangedValues += leaf.length;
    }
  }

  let deChanges = 0;
  for (let i = 0; i < words.length; i++) {
    if (serializeDe(baselineBefore[i]) !== serializeDe(words[i])) deChanges += 1;
  }

  const actualChangedLeafValues = [...perCardLeafChanges.values()].reduce((s, l) => s + l.length, 0);
  const actuallyChangedCards = [...perCardLeafChanges.values()].filter((l) => l.length > 0).length;

  let syntax = "PASS";
  try {
    execSync("node --check data/cs/a2.js", { cwd: ROOT, stdio: "pipe" });
    if (words.length !== 1640) syntax = "FAIL";
  } catch {
    syntax = "FAIL";
  }

  const ids = words.map((e, i) => entryId(e, i));
  const uniqueIds = new Set(ids);
  const idUniqueness = ids.length === uniqueIds.size ? "PASS" : "FAIL";
  const idOrder = verifyIdOrder(words, baselineBefore) ? "PASS" : "FAIL";
  const mirror = fs.readFileSync(FILES[0], "utf8") === fs.readFileSync(FILES[1], "utf8") ? "PASS" : "FAIL";
  const structure = mirror === "PASS" && words.length === 1640 ? "PASS" : "FAIL";
  const deReadOnly = deChanges === 0 ? "PASS" : "FAIL";
  const scopeIntegrity = unexpectedChangedCards === 0 && unexpectedChangedValues === 0 ? "PASS" : "FAIL";
  const targetMismatches = TOTAL - exactTargetMatches;

  const overall = exactTargetMatches === TOTAL
    && targetMismatches === 0
    && deChanges === 0
    && unexpectedChangedCards === 0
    && unexpectedChangedValues === 0
    && syntax === "PASS"
    && idUniqueness === "PASS"
    && idOrder === "PASS"
    && structure === "PASS"
    ? "PASS"
    : "FAIL";

  const summary = {
    requested: TOTAL,
    processed: results.length,
    exactTargetMatches,
    targetMismatches,
    actuallyChangedCards,
    alreadyTargetCards,
    appliedCards,
    actualChangedLeafValues,
    deChanges,
    unexpectedChangedCards,
    unexpectedChangedValues,
    uniqueCardIds: allowed.size,
    duplicateCardIds: 0,
    a2Total: words.length,
    syntax,
    idUniqueness,
    idOrder,
    structure,
    deReadOnly,
    scopeIntegrity,
    overall,
  };

  const reportData = { summary, groupStats, results };
  fs.writeFileSync(REPORT, generateReport(reportData));

  const output = { pass: overall === "PASS", summary, groupStats, results };
  console.log(JSON.stringify(output, null, 2));
  if (overall !== "PASS") process.exit(1);
}

if (require.main === module) main();
module.exports = { main, loadAllSpecs, applyCard };
