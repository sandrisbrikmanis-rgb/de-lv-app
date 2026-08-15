#!/usr/bin/env node
"use strict";
/**
 * CS-DE B1 Targeted Regression Residual Groups 01–03 — COPY-ONLY apply.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [path.join(ROOT, "data/cs/b1.js"), path.join(ROOT, "www/data/cs/b1.js")];
const DE_FIELDS = ["de", "de_article", "de_plural"];
const GROUPS = ["01", "02", "03"];
const EXPECTED_COUNTS = { "01": 50, "02": 50, "03": 16 };
const TOTAL = 116;
const EXPECTED_B1_COUNT = 3367;
const RESIDUAL_GROUPS_07_32 = 1281;
const BRANCH = "cursor/cs-b1-targeted-regression-residual-apply-6ea4";
const REPORT_MD = path.join(ROOT, "reports/cs-b1-targeted-regression-residual-groups01-03-apply.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-b1-targeted-regression-residual-groups01-03-apply.json");

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const B1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.B1_WORDS = B1_WORDS;\n`,
    "utf8",
  );
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `b1-${entry.de}-${index}`;
  return `b1-${index}`;
}

function deSnapshotHash(words) {
  const parts = words.map((e) =>
    JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }),
  );
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
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
    for (let i = 0; i < max; i++) collectLeafChanges(before[i], after[i], `${fieldPath}[${i}]`, out);
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
    const specPath = path.join(__dirname, `cs-b1-targeted-regression-residual-group${g}-spec.json`);
    if (!fs.existsSync(specPath)) throw new Error(`STOP — MISSING SPEC: ${specPath}`);
    const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
    const expected = EXPECTED_COUNTS[g];
    if (!spec.cards || spec.cards.length !== expected) {
      throw new Error(`STOP — INVALID SPEC: group ${g} has ${spec.cards?.length ?? 0}, expected ${expected}`);
    }
    for (const card of spec.cards) {
      if (!card.cardId || card.productionIndex == null || !card.targetObject || !card.currentProductionObject) {
        throw new Error(`STOP — INVALID SPEC: group ${g} card ${card.cardId || "?"} missing required fields`);
      }
      if (seenIds.has(card.cardId)) duplicates.push(card.cardId);
      else seenIds.add(card.cardId);
      allCards.push({ ...card, group: g });
    }
    specs.push({ group: g, specPath: `scripts/cs-b1-targeted-regression-residual-group${g}-spec.json`, cards: spec.cards });
  }

  if (allCards.length !== TOTAL) throw new Error(`STOP — coverage mismatch: ${allCards.length}/${TOTAL}`);
  if (duplicates.length) throw new Error(`STOP — duplicate cardId: ${duplicates.join(", ")}`);

  return { specs, allCards, allowed: seenIds, allowedIndexes: new Set(allCards.map((c) => c.productionIndex)) };
}

function verifyGroups0732Prerequisite(words) {
  const groups0732 = Array.from({ length: 26 }, (_, i) => String(i + 7).padStart(2, "0"));
  let exact = 0;
  let total = 0;
  for (const g of groups0732) {
    const specPath = path.join(__dirname, `cs-b1-repair-group${g}-spec.json`);
    if (!fs.existsSync(specPath)) throw new Error(`STOP — missing Groups 07–32 spec: ${g}`);
    const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
    for (const card of spec.cards || []) {
      total += 1;
      const prod = words[card.productionIndex];
      if (prod && JSON.stringify(prod) === JSON.stringify(card.targetObject)) exact += 1;
    }
  }
  if (exact !== RESIDUAL_GROUPS_07_32 || total !== RESIDUAL_GROUPS_07_32) {
    throw new Error(`STOP — Groups 07–32 prerequisite FAIL: ${exact}/${RESIDUAL_GROUPS_07_32} exact match`);
  }
  if (words.length !== EXPECTED_B1_COUNT) {
    throw new Error(`STOP — expected ${EXPECTED_B1_COUNT} B1 cards, got ${words.length}`);
  }
  return { pass: true, exact, total };
}

function applyCard(words, card) {
  const { productionIndex, cardId, currentProductionObject, targetObject, group } = card;
  const r = { group, productionIndex, cardId, status: null };

  if (productionIndex < 0 || productionIndex >= words.length) {
    r.status = "CARD_NOT_FOUND";
    return r;
  }

  const current = words[productionIndex];
  if (JSON.stringify(current) !== JSON.stringify(currentProductionObject)) {
    r.status = "CURRENT_VALUE_MISMATCH";
    r.reason = "currentProductionObject mismatch";
    return r;
  }

  if (serializeDe(targetObject) !== serializeDe(current)) {
    r.status = "BLOCKED_DE_CHANGE";
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

function reconcileGroup(words, cards, group, results) {
  const groupCards = cards.filter((c) => c.group === group);
  let currentMatches = 0;
  let applied = 0;
  let exact = 0;
  let mismatch = 0;
  const diverged = [];
  const missing = [];

  for (const card of groupCards) {
    const prod = words[card.productionIndex];
    const r = results.find((x) => x.cardId === card.cardId);
    if (r?.status === "CURRENT_VALUE_MISMATCH" || r?.status === "CARD_NOT_FOUND") mismatch += 1;
    else currentMatches += 1;

    if (!prod) {
      missing.push(card.cardId);
      continue;
    }
    if (JSON.stringify(prod) === JSON.stringify(card.targetObject)) {
      exact += 1;
      if (r?.status === "APPLIED") applied += 1;
      else if (JSON.stringify(card.currentProductionObject) !== JSON.stringify(card.targetObject)) applied += 1;
    } else {
      diverged.push(card.cardId);
    }
  }

  return {
    group,
    specFile: `scripts/cs-b1-targeted-regression-residual-group${group}-spec.json`,
    requested: groupCards.length,
    currentMatches,
    applied,
    exact,
    currentValueMismatch: mismatch,
    diverged: diverged.length,
    missing: missing.length,
    divergedCards: diverged,
    missingCards: missing,
    deChanges: 0,
    unexpectedChanges: 0,
  };
}

function verifyIdOrder(words, baseline) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].de !== baseline[i].de) return false;
  }
  return true;
}

function verifySectionAccentsForTargets(words, allCards) {
  for (const card of allCards) {
    const prod = words[card.productionIndex];
    const target = card.targetObject;
    if (JSON.stringify(prod?.study?.sectionAccents ?? null) !== JSON.stringify(target?.study?.sectionAccents ?? null)) {
      return false;
    }
  }
  return true;
}

function generateReportMd(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE B1 TARGETED REGRESSION RESIDUAL GROUPS 01–03 — APPLY",
    "",
    `Branch: \`${BRANCH}\``,
    `Start SHA: \`${data.baselineSha}\``,
    `End SHA: \`${data.applySha || "(pending commit)"}\``,
    `Generated: ${new Date().toISOString()}`,
    "",
    "## PREREQUISITE (Groups 07–32)",
    "",
    `| Check | Result |`,
    `|---|---|`,
    `| Groups 07–32 exact targetObject match | ${data.prerequisite.exact}/${RESIDUAL_GROUPS_07_32} |`,
    `| B1 cards | ${EXPECTED_B1_COUNT}/${EXPECTED_B1_COUNT} |`,
    `| Prerequisite | ${data.prerequisite.pass ? "PASS" : "FAIL"} |`,
    "",
    "## GROUP RECONCILIATION",
    "",
  ];

  for (const g of GROUPS) {
    const gr = data.groupResults[g];
    lines.push(
      `### Residual Group ${g}`,
      "",
      `| Metric | Value |`,
      `|---|---|`,
      `| cards requested | ${gr.requested} |`,
      `| currentProductionObject match | ${gr.currentMatches}/${gr.requested} |`,
      `| applied | ${gr.applied}/${gr.requested} |`,
      `| exact targetObject match | ${gr.exact}/${gr.requested} |`,
      `| CURRENT_VALUE_MISMATCH | ${gr.currentValueMismatch} |`,
      `| diverged | ${gr.diverged} |`,
      `| missing | ${gr.missing} |`,
      `| DE changes | ${gr.deChanges} |`,
      `| unexpected changes | ${gr.unexpectedChanges} |`,
      "",
    );
  }

  lines.push(
    "## TOTAL",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Groups applied | ${s.groupsApplied}/3 |`,
    `| Residual OWNER-review cards | ${TOTAL}/${TOTAL} |`,
    `| Target cards requested | ${s.targets} |`,
    `| Applied | ${s.appliedCards + s.alreadyTargetCards}/${s.targets} |`,
    `| Exact targetObject match | ${s.exactTargetMatches}/${s.targets} |`,
    `| CURRENT_VALUE_MISMATCH | ${s.currentValueMismatch} |`,
    `| Diverged | ${s.diverged} |`,
    `| Missing | ${s.missing} |`,
    `| Out-of-scope B1 changes | ${s.unexpectedChangedCards} |`,
    `| DE changes | ${s.deChanges} |`,
    `| Other-language changes | 0 |`,
    `| Unexpected production changes | ${s.unexpectedChangedCards} |`,
    "",
    "## INTEGRITY",
    "",
    `| Check | Result |`,
    `|---|---|`,
    `| B1 cards | ${s.b1Total}/${EXPECTED_B1_COUNT} |`,
    `| ID uniqueness | ${s.idUniqueness} |`,
    `| ID/order | ${s.idOrder} |`,
    `| Syntax | ${s.syntax} |`,
    `| Import/load | ${s.importLoad} |`,
    `| Structure | ${s.structure} |`,
    `| Study structure | ${s.studyStructure} |`,
    `| sectionAccents structure | ${s.sectionAccentsStructure} |`,
    `| DE READ-ONLY | ${s.deReadOnly} |`,
    "",
    "## STATUS",
    "",
    s.overall === "PASS"
      ? "**CS–DE B1 TARGETED REGRESSION RESIDUAL GROUPS 01–03 APPLY — COMPLETE**"
      : "**FAIL — DO NOT PROCEED**",
    "",
  );
  return lines.join("\n");
}

function main() {
  const baselineSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const wordsBefore = loadWords(FILES[0]);
  const prerequisite = verifyGroups0732Prerequisite(wordsBefore);
  console.log(`Prerequisite PASS: Groups 07–32 ${prerequisite.exact}/${RESIDUAL_GROUPS_07_32}`);

  const baselineDeHash = deSnapshotHash(wordsBefore);
  const { specs, allCards, allowedIndexes } = loadAllSpecs();
  const baselineBefore = JSON.parse(JSON.stringify(wordsBefore));
  const words = JSON.parse(JSON.stringify(wordsBefore));
  const results = [];
  const groupResults = {};

  for (const g of GROUPS) {
    for (const card of allCards.filter((c) => c.group === g)) {
      const r = applyCard(words, card);
      results.push(r);
      if (["BLOCKED_DE_CHANGE", "CURRENT_VALUE_MISMATCH", "CARD_NOT_FOUND"].includes(r.status)) {
        console.error(JSON.stringify({ error: "APPLY_BLOCKED", group: g, result: r }, null, 2));
        process.exit(1);
      }
    }
    groupResults[g] = reconcileGroup(words, allCards, g, results);
    if (groupResults[g].diverged > 0 || groupResults[g].missing > 0 || groupResults[g].currentValueMismatch > 0) {
      console.error(JSON.stringify({ error: "GROUP_RECONCILIATION_FAIL", group: g, result: groupResults[g] }, null, 2));
      process.exit(1);
    }
    console.log(`Group ${g} PASS: ${groupResults[g].exact}/${groupResults[g].requested} exact targetObject match`);
  }

  for (const fp of FILES) writeWords(fp, words);
  const wordsAfter = loadWords(FILES[0]);

  let exactTargetMatches = 0;
  let appliedCards = 0;
  let alreadyTargetCards = 0;
  for (const card of allCards) {
    const afterObj = wordsAfter[card.productionIndex];
    if (JSON.stringify(afterObj) === JSON.stringify(card.targetObject)) exactTargetMatches += 1;
    const r = results.find((x) => x.cardId === card.cardId);
    if (r?.status === "ALREADY_TARGET") alreadyTargetCards += 1;
    if (r?.status === "APPLIED") appliedCards += 1;
  }

  let unexpectedChangedCards = 0;
  for (let i = 0; i < wordsAfter.length; i++) {
    if (collectLeafChanges(baselineBefore[i], wordsAfter[i]).length && !allowedIndexes.has(i)) {
      unexpectedChangedCards += 1;
    }
  }

  const deChanges = deSnapshotHash(wordsAfter) !== baselineDeHash ? 1 : 0;
  let syntax = "PASS";
  let importLoad = "PASS";
  try {
    execSync("node --check data/cs/b1.js", { cwd: ROOT, stdio: "pipe" });
    if (wordsAfter.length !== EXPECTED_B1_COUNT) {
      syntax = "FAIL";
      importLoad = "FAIL";
    }
  } catch {
    syntax = "FAIL";
    importLoad = "FAIL";
  }

  const ids = wordsAfter.map((e, i) => entryId(e, i));
  const idUniqueness = ids.length === new Set(ids).size ? "PASS" : "FAIL";
  const idOrder = verifyIdOrder(wordsAfter, baselineBefore) ? "PASS" : "FAIL";
  const mirror = fs.readFileSync(FILES[0], "utf8") === fs.readFileSync(FILES[1], "utf8") ? "PASS" : "FAIL";
  const structure = mirror === "PASS" && wordsAfter.length === EXPECTED_B1_COUNT ? "PASS" : "FAIL";
  const studyStructure = wordsAfter.filter((e) => e.study).length > 0 ? "PASS" : "FAIL";
  const sectionAccentsStructure = verifySectionAccentsForTargets(wordsAfter, allCards) ? "PASS" : "FAIL";
  const deReadOnly = deChanges === 0 ? "PASS" : "FAIL";
  const diverged = TOTAL - exactTargetMatches;
  const currentValueMismatch = results.filter((r) => r.status === "CURRENT_VALUE_MISMATCH").length;

  const pass =
    exactTargetMatches === TOTAL &&
    currentValueMismatch === 0 &&
    diverged === 0 &&
    deChanges === 0 &&
    unexpectedChangedCards === 0 &&
    syntax === "PASS" &&
    importLoad === "PASS" &&
    idUniqueness === "PASS" &&
    idOrder === "PASS" &&
    structure === "PASS" &&
    sectionAccentsStructure === "PASS";

  const summary = {
    groupsApplied: GROUPS.length,
    targets: TOTAL,
    appliedCards,
    alreadyTargetCards,
    exactTargetMatches,
    currentValueMismatch,
    diverged,
    missing: 0,
    unexpectedChangedCards,
    deChanges,
    b1Total: wordsAfter.length,
    syntax,
    importLoad,
    idUniqueness,
    idOrder,
    structure,
    studyStructure,
    sectionAccentsStructure,
    deReadOnly,
    overall: pass ? "PASS" : "FAIL",
  };

  const reportData = {
    baselineSha,
    applySha: null,
    prerequisite,
    summary,
    groupResults,
    specs: specs.map((s) => ({ group: s.group, specPath: s.specPath, cardCount: s.cards.length })),
    results,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(reportData, null, 2));
  fs.writeFileSync(REPORT_MD, generateReportMd(reportData));

  console.log("");
  console.log("CS–DE B1 TARGETED REGRESSION RESIDUAL GROUPS 01–03 APPLY — " + (pass ? "COMPLETE" : "FAIL"));
  console.log("");
  console.log(`Groups: ${GROUPS.length}/3`);
  console.log(`Residual OWNER-review cards: ${TOTAL}/${TOTAL}`);
  console.log(`Applied: ${appliedCards + alreadyTargetCards}/${TOTAL}`);
  console.log(`Exact targetObject match: ${exactTargetMatches}/${TOTAL}`);
  console.log("");
  console.log(`CURRENT_VALUE_MISMATCH: ${currentValueMismatch}`);
  console.log(`Diverged: ${diverged}`);
  console.log(`Missing: 0`);
  console.log(`Out-of-scope B1 changes: ${unexpectedChangedCards}`);
  console.log(`DE changes: ${deChanges}`);
  console.log("");
  console.log(`Report: ${REPORT_MD}`);

  if (!pass) process.exit(1);
}

if (require.main === module) main();

module.exports = { main, loadAllSpecs, applyCard };
