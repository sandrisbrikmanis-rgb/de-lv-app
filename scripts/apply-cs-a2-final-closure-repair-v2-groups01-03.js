#!/usr/bin/env node
"use strict";
/**
 * CS-DE A2 Final Closure Repair V2 Groups 01–03 — COPY-ONLY apply.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [path.join(ROOT, "data/cs/a2.js"), path.join(ROOT, "www/data/cs/a2.js")];
const DE_FIELDS = ["de", "de_article", "de_plural"];
const GROUPS = ["01", "02", "03"];
const EXPECTED_COUNTS = { "01": 50, "02": 50, "03": 49 };
const TOTAL = 149;
const BRANCH = "cursor/cs-a2-final-closure-repair-v2-groups01-03-6ea4";
const REPORT_MD = path.join(ROOT, "reports/cs-a2-final-closure-repair-v2-applied.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-a2-final-closure-repair-v2-applied.json");

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

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(words) {
  const parts = words.map((e) => JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }));
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
    const specPath = path.join(__dirname, `cs-a2-final-closure-repair-v2-group${g}-spec.json`);
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
    specs.push({ group: g, specPath: `scripts/cs-a2-final-closure-repair-v2-group${g}-spec.json`, cards: spec.cards });
  }

  if (allCards.length !== TOTAL) throw new Error(`STOP — Group coverage mismatch: ${allCards.length}/${TOTAL}`);
  if (duplicates.length) throw new Error(`STOP — duplicate cardId: ${duplicates.join(", ")}`);

  return { specs, allCards, allowed: seenIds };
}

function applyCard(words, card) {
  const { productionIndex, cardId, targetObject, group } = card;
  const r = { group, productionIndex, cardId, status: null };

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

function verifySectionAccentsForTargets(words, allCards) {
  for (const card of allCards) {
    const prod = words[card.productionIndex];
    const target = card.targetObject;
    const prodSa = prod?.study?.sectionAccents ?? null;
    const targetSa = target?.study?.sectionAccents ?? null;
    if (JSON.stringify(prodSa) !== JSON.stringify(targetSa)) return false;
  }
  return true;
}

function reconcileGroup(words, cards, group) {
  let found = 0;
  let exact = 0;
  let applied = 0;
  let alreadyTarget = 0;
  const diverged = [];
  const missing = [];

  for (const card of cards.filter((c) => c.group === group)) {
    const prod = words[card.productionIndex];
    const actualId = entryId(prod, card.productionIndex);
    if (actualId !== card.cardId) {
      missing.push({ cardId: card.cardId, reason: "ID_MISMATCH", actualId });
      continue;
    }
    found += 1;
    if (JSON.stringify(prod) === JSON.stringify(card.targetObject)) {
      exact += 1;
    } else {
      diverged.push(card.cardId);
    }
  }

  return {
    group,
    requested: EXPECTED_COUNTS[group],
    found,
    exact,
    diverged: diverged.length,
    missing: missing.length,
    divergedCards: diverged,
    missingCards: missing,
  };
}

function generateReportMd(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE A2 FINAL CLOSURE REPAIR V2 — APPLIED",
    "",
    `Branch: \`${BRANCH}\``,
    `Baseline SHA: \`${data.baselineSha}\``,
    `Apply SHA: \`${data.applySha || "(pending commit)"}\``,
    `Generated: ${new Date().toISOString()}`,
    "",
    "## GROUP RECONCILIATION",
    "",
  ];

  for (const g of GROUPS) {
    const gr = data.groupResults[g];
    lines.push(`### GROUP ${g}`);
    lines.push(`- requested: ${gr.requested}`);
    lines.push(`- found: ${gr.found}/${gr.requested}`);
    lines.push(`- exact targetObject match: ${gr.exact}/${gr.requested}`);
    lines.push(`- diverged: ${gr.diverged}`);
    lines.push(`- missing: ${gr.missing}`);
    lines.push("");
  }

  lines.push("## TOTAL", "");
  lines.push("| Metric | Value |");
  lines.push("|---|---|");
  lines.push(`| specifications | ${s.specifications}/${GROUPS.length} |`);
  lines.push(`| targets | ${s.targets}/${TOTAL} |`);
  lines.push(`| found | ${s.found}/${TOTAL} |`);
  lines.push(`| exact targetObject match | ${s.exactTargetMatches}/${TOTAL} |`);
  lines.push(`| diverged | ${s.diverged} |`);
  lines.push(`| missing | ${s.missing} |`);
  lines.push(`| duplicate target IDs | ${s.duplicateTargetIds} |`);
  lines.push(`| applied cards | ${s.appliedCards} |`);
  lines.push(`| already target | ${s.alreadyTargetCards} |`);
  lines.push(`| changed leaf values | ${s.actualChangedLeafValues} |`);
  lines.push(`| unexpected changed cards | ${s.unexpectedChangedCards} |`);
  lines.push(`| DE changes | ${s.deChanges} |`);
  lines.push("");
  lines.push("## INTEGRITY", "");
  lines.push("| Check | Result |");
  lines.push("|---|---|");
  lines.push(`| Syntax | ${s.syntax} |`);
  lines.push(`| Import/load | ${s.importLoad} |`);
  lines.push(`| Card count | ${s.a2Total}/1640 |`);
  lines.push(`| ID uniqueness | ${s.idUniqueness} |`);
  lines.push(`| ID/order | ${s.idOrder} |`);
  lines.push(`| Structure | ${s.structure} |`);
  lines.push(`| Study structure | ${s.studyStructure} |`);
  lines.push(`| sectionAccents structure | ${s.sectionAccentsStructure} |`);
  lines.push(`| DE READ-ONLY | ${s.deReadOnly} |`);
  lines.push("");
  lines.push("## STATUS", "");
  lines.push(s.overall === "PASS"
    ? "**FINAL CLOSURE REPAIR V2 APPLIED — READY FOR GPT-5.6 LUNA 1640/1640 READ-ONLY CLOSURE AUDIT**"
    : "**FAIL — DO NOT PROCEED TO CLOSURE AUDIT**");
  lines.push("");
  return lines.join("\n");
}

function main() {
  const baselineSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineA2Hash = fileHash(FILES[0]);
  const baselineDeHash = deSnapshotHash(loadWords(FILES[0]));
  const baselineIds = loadWords(FILES[0]).map((e, i) => entryId(e, i));

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
    console.error(JSON.stringify({ error: "APPLY_BLOCKED", baselineSha, hardFail }, null, 2));
    process.exit(1);
  }

  for (const fp of FILES) writeWords(fp, words);

  const wordsAfter = loadWords(FILES[0]);
  const groupResults = {};
  for (const g of GROUPS) {
    groupResults[g] = reconcileGroup(wordsAfter, allCards, g);
    if (groupResults[g].diverged > 0 || groupResults[g].missing > 0) {
      console.error(JSON.stringify({ error: "GROUP_RECONCILIATION_FAIL", group: g, result: groupResults[g] }, null, 2));
      process.exit(1);
    }
  }

  let exactTargetMatches = 0;
  let appliedCards = 0;
  let alreadyTargetCards = 0;
  let foundInProduction = 0;
  const divergedCards = [];

  for (const card of allCards) {
    const afterObj = wordsAfter[card.productionIndex];
    const beforeObj = baselineBefore[card.productionIndex];
    const actualId = entryId(afterObj, card.productionIndex);
    if (actualId === card.cardId) foundInProduction += 1;

    const exact = JSON.stringify(afterObj) === JSON.stringify(card.targetObject);
    if (exact) exactTargetMatches += 1;
    else divergedCards.push({ cardId: card.cardId, group: card.group });

    const r = results.find((x) => x.cardId === card.cardId);
    if (r?.status === "ALREADY_TARGET") alreadyTargetCards += 1;
    if (r?.status === "APPLIED") appliedCards += 1;
  }

  let unexpectedChangedCards = 0;
  let unexpectedChangedValues = 0;
  const changedTargetCards = [];
  for (let i = 0; i < wordsAfter.length; i++) {
    const id = entryId(wordsAfter[i], i);
    const leaf = collectLeafChanges(baselineBefore[i], wordsAfter[i]);
    if (!leaf.length) continue;
    if (allowed.has(id)) changedTargetCards.push(id);
    else {
      unexpectedChangedCards += 1;
      unexpectedChangedValues += leaf.length;
    }
  }

  let deChanges = 0;
  const afterDeHash = deSnapshotHash(wordsAfter);
  if (afterDeHash !== baselineDeHash) deChanges = 1;

  const actualChangedLeafValues = changedTargetCards.reduce((sum, id) => {
    const idx = wordsAfter.findIndex((e, i) => entryId(e, i) === id);
    return sum + collectLeafChanges(baselineBefore[idx], wordsAfter[idx]).length;
  }, 0);

  let syntax = "PASS";
  let importLoad = "PASS";
  try {
    execSync("node --check data/cs/a2.js", { cwd: ROOT, stdio: "pipe" });
    if (wordsAfter.length !== 1640) { syntax = "FAIL"; importLoad = "FAIL"; }
  } catch {
    syntax = "FAIL";
    importLoad = "FAIL";
  }

  const ids = wordsAfter.map((e, i) => entryId(e, i));
  const uniqueIds = new Set(ids);
  const idUniqueness = ids.length === uniqueIds.size ? "PASS" : "FAIL";
  const idOrder = verifyIdOrder(wordsAfter, baselineBefore) ? "PASS" : "FAIL";
  const mirror = fs.readFileSync(FILES[0], "utf8") === fs.readFileSync(FILES[1], "utf8") ? "PASS" : "FAIL";
  const structure = mirror === "PASS" && wordsAfter.length === 1640 ? "PASS" : "FAIL";
  const studyCount = wordsAfter.filter((e) => e.study).length;
  const studyStructure = studyCount > 0 ? "PASS" : "FAIL";
  const sectionAccentsStructure = verifySectionAccentsForTargets(wordsAfter, allCards) ? "PASS" : "FAIL";
  const deReadOnly = deChanges === 0 ? "PASS" : "FAIL";
  const diverged = TOTAL - exactTargetMatches;

  const overall = exactTargetMatches === TOTAL
    && diverged === 0
    && foundInProduction === TOTAL
    && deChanges === 0
    && unexpectedChangedCards === 0
    && syntax === "PASS"
    && importLoad === "PASS"
    && idUniqueness === "PASS"
    && idOrder === "PASS"
    && structure === "PASS"
    && sectionAccentsStructure === "PASS"
    ? "PASS"
    : "FAIL";

  const summary = {
    specifications: GROUPS.length,
    targets: TOTAL,
    found: foundInProduction,
    exactTargetMatches,
    diverged,
    missing: 0,
    duplicateTargetIds: 0,
    appliedCards,
    alreadyTargetCards,
    actualChangedLeafValues,
    unexpectedChangedCards,
    unexpectedChangedValues,
    deChanges,
    a2Total: wordsAfter.length,
    syntax,
    importLoad,
    idUniqueness,
    idOrder,
    structure,
    studyStructure,
    sectionAccentsStructure,
    deReadOnly,
    overall,
    changedTargetCards: changedTargetCards.length,
    baselineA2Hash,
    finalA2Hash: fileHash(FILES[0]),
    baselineDeHash,
    finalDeHash: afterDeHash,
    baselineIdSequenceMatch: JSON.stringify(baselineIds) === JSON.stringify(ids) ? "PASS" : "FAIL",
  };

  const reportData = {
    baselineSha,
    applySha: null,
    summary,
    groupResults,
    specs: specs.map((s) => ({ group: s.group, specPath: s.specPath, cardCount: s.cards.length })),
    divergedCards,
    results,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(reportData, null, 2));
  fs.writeFileSync(REPORT_MD, generateReportMd(reportData));

  const output = { pass: overall === "PASS", baselineSha, summary, groupResults };
  console.log(JSON.stringify(output, null, 2));
  if (overall !== "PASS") process.exit(1);
}

if (require.main === module) main();
module.exports = { main, loadAllSpecs, applyCard };
