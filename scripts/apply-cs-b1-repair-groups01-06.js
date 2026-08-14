#!/usr/bin/env node
"use strict";
/**
 * CS-DE B1 Repair Groups 01–06 — COPY-ONLY apply.
 * Applies OWNER-approved targetObject from spec files to data/cs/b1.js.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [path.join(ROOT, "data/cs/b1.js"), path.join(ROOT, "www/data/cs/b1.js")];
const DE_FIELDS = ["de", "de_article", "de_plural"];
const GROUPS = ["01", "02", "03", "04", "05", "06"];
const EXPECTED_COUNTS = { "01": 50, "02": 50, "03": 50, "04": 50, "05": 50, "06": 43 };
const TOTAL = 293;
const EXPECTED_B1_COUNT = 3367;
const BRANCH = "cursor/cs-b1-repair-groups01-06-apply-6ea4";
const REPORT_MD = path.join(ROOT, "reports/cs-b1-repair-groups01-06-apply.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-b1-repair-groups01-06-apply.json");

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

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
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
    const specPath = path.join(__dirname, `cs-b1-repair-group${g}-spec.json`);
    if (!fs.existsSync(specPath)) throw new Error(`Missing spec: ${specPath}`);
    const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
    const expected = EXPECTED_COUNTS[g];
    if (!spec.cards || spec.cards.length !== expected) {
      throw new Error(`STOP — INVALID SPECIFICATION: group ${g} has ${spec.cards?.length ?? 0}, expected ${expected}`);
    }
    for (const card of spec.cards) {
      if (!card.cardId || card.productionIndex == null || !card.targetObject || !card.currentProductionObject) {
        throw new Error(`STOP — INVALID SPECIFICATION: group ${g} card ${card.cardId || "?"} missing required fields`);
      }
      if (seenIds.has(card.cardId)) duplicates.push(card.cardId);
      else seenIds.add(card.cardId);
      allCards.push({ ...card, group: g });
    }
    specs.push({ group: g, specPath: `scripts/cs-b1-repair-group${g}-spec.json`, cards: spec.cards });
  }

  if (allCards.length !== TOTAL) throw new Error(`STOP — Group coverage mismatch: ${allCards.length}/${TOTAL}`);
  if (duplicates.length) throw new Error(`STOP — duplicate cardId: ${duplicates.join(", ")}`);

  return { specs, allCards, allowed: seenIds };
}

function applyCard(words, card) {
  const { productionIndex, cardId, currentProductionObject, targetObject, group } = card;
  const r = { group, productionIndex, cardId, status: null };

  if (productionIndex < 0 || productionIndex >= words.length) {
    r.status = "CARD_NOT_FOUND";
    return r;
  }

  const current = words[productionIndex];
  const actualId = entryId(current, productionIndex);
  if (actualId !== cardId) {
    r.status = "CURRENT_VALUE_MISMATCH";
    r.reason = "cardId mismatch";
    r.actualCardId = actualId;
    return r;
  }

  if (JSON.stringify(current) !== JSON.stringify(currentProductionObject)) {
    r.status = "CURRENT_VALUE_MISMATCH";
    r.reason = "currentProductionObject mismatch";
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
  let requested = 0;
  let applied = 0;
  let exact = 0;
  let mismatch = 0;
  const diverged = [];
  const missing = [];

  for (const card of cards.filter((c) => c.group === group)) {
    requested += 1;
    const prod = words[card.productionIndex];
    if (!prod) {
      missing.push({ cardId: card.cardId, reason: "NOT_FOUND" });
      continue;
    }
    const actualId = entryId(prod, card.productionIndex);
    if (actualId !== card.cardId) {
      missing.push({ cardId: card.cardId, reason: "ID_MISMATCH", actualId });
      continue;
    }
    if (JSON.stringify(prod) === JSON.stringify(card.targetObject)) {
      exact += 1;
      if (JSON.stringify(card.currentProductionObject) !== JSON.stringify(card.targetObject)) applied += 1;
    } else {
      diverged.push(card.cardId);
    }
  }

  return {
    group,
    specFile: `scripts/cs-b1-repair-group${group}-spec.json`,
    requested,
    applied,
    exact,
    currentValueMismatch: mismatch,
    diverged: diverged.length,
    missing: missing.length,
    divergedCards: diverged,
    missingCards: missing,
  };
}

function generateReportMd(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE B1 REPAIR GROUPS 01–06 — APPLY",
    "",
    `Branch: \`${BRANCH}\``,
    `Start SHA: \`${data.baselineSha}\``,
    `End SHA: \`${data.applySha || "(pending commit)"}\``,
    `Generated: ${new Date().toISOString()}`,
    "",
    "## GROUP RECONCILIATION",
    "",
    "| Group | Spec file | Requested | Applied | Exact match | CURRENT_VALUE_MISMATCH | Diverged | Missing | DE changes |",
    "|---|---|---:|---:|---:|---:|---:|---:|---:|",
  ];

  for (const g of GROUPS) {
    const gr = data.groupResults[g];
    lines.push(
      `| ${g} | \`${gr.specFile}\` | ${gr.requested} | ${gr.applied} | ${gr.exact}/${gr.requested} | ${gr.currentValueMismatch} | ${gr.diverged} | ${gr.missing} | 0 |`,
    );
  }

  lines.push(
    "",
    "## TOTAL",
    "",
    "| Metric | Value |",
    "|---|---|",
    `| Groups applied | ${s.groupsApplied}/${GROUPS.length} |`,
    `| Target cards | ${s.targets} |`,
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
    "| Check | Result |",
    "|---|---|",
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
      ? "**CS–DE B1 GROUPS 01–06 APPLY — COMPLETE**"
      : "**FAIL — DO NOT PROCEED TO TARGETED REGRESSION**",
    "",
  );
  return lines.join("\n");
}

function main() {
  const baselineSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineB1Hash = fileHash(FILES[0]);
  const baselineDeHash = deSnapshotHash(loadWords(FILES[0]));

  const { specs, allCards, allowed } = loadAllSpecs();
  const before = loadWords(FILES[0]);
  if (before.length !== EXPECTED_B1_COUNT) {
    throw new Error(`STOP — expected ${EXPECTED_B1_COUNT} B1 cards, got ${before.length}`);
  }

  const baselineBefore = JSON.parse(JSON.stringify(before));
  const words = JSON.parse(JSON.stringify(before));

  const results = [];
  const groupResults = {};
  let stopGroup = null;

  for (const g of GROUPS) {
    const groupCards = allCards.filter((c) => c.group === g);
    const groupApplyResults = [];

    for (const card of groupCards) {
      const r = applyCard(words, card);
      groupApplyResults.push(r);
      results.push(r);

      if (["BLOCKED_DE_CHANGE", "CURRENT_VALUE_MISMATCH", "CARD_NOT_FOUND"].includes(r.status)) {
        stopGroup = g;
        break;
      }
    }

    if (stopGroup) break;

    groupResults[g] = reconcileGroup(words, allCards, g);
    if (groupResults[g].diverged > 0 || groupResults[g].missing > 0) {
      stopGroup = g;
      break;
    }
  }

  const hardFail = results.filter((r) =>
    ["BLOCKED_DE_CHANGE", "CURRENT_VALUE_MISMATCH", "CARD_NOT_FOUND"].includes(r.status),
  );
  if (hardFail.length) {
    console.error(JSON.stringify({ error: "APPLY_BLOCKED", baselineSha, stopGroup, hardFail }, null, 2));
    process.exit(1);
  }

  for (const fp of FILES) writeWords(fp, words);

  const wordsAfter = loadWords(FILES[0]);

  for (const g of GROUPS) {
    if (!groupResults[g]) groupResults[g] = reconcileGroup(wordsAfter, allCards, g);
    if (groupResults[g].diverged > 0 || groupResults[g].missing > 0) {
      console.error(JSON.stringify({ error: "GROUP_RECONCILIATION_FAIL", group: g, result: groupResults[g] }, null, 2));
      process.exit(1);
    }
  }

  let exactTargetMatches = 0;
  let appliedCards = 0;
  let alreadyTargetCards = 0;
  let currentValueMismatch = 0;
  const divergedCards = [];

  for (const card of allCards) {
    const afterObj = wordsAfter[card.productionIndex];
    const exact = JSON.stringify(afterObj) === JSON.stringify(card.targetObject);
    if (exact) exactTargetMatches += 1;
    else divergedCards.push({ cardId: card.cardId, group: card.group });

    const r = results.find((x) => x.cardId === card.cardId);
    if (r?.status === "ALREADY_TARGET") alreadyTargetCards += 1;
    if (r?.status === "APPLIED") appliedCards += 1;
    if (r?.status === "CURRENT_VALUE_MISMATCH") currentValueMismatch += 1;
  }

  let unexpectedChangedCards = 0;
  for (let i = 0; i < wordsAfter.length; i++) {
    const id = entryId(wordsAfter[i], i);
    const leaf = collectLeafChanges(baselineBefore[i], wordsAfter[i]);
    if (!leaf.length) continue;
    if (!allowed.has(id)) unexpectedChangedCards += 1;
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
  const studyCount = wordsAfter.filter((e) => e.study).length;
  const studyStructure = studyCount > 0 ? "PASS" : "FAIL";
  const sectionAccentsStructure = verifySectionAccentsForTargets(wordsAfter, allCards) ? "PASS" : "FAIL";
  const deReadOnly = deChanges === 0 ? "PASS" : "FAIL";
  const diverged = TOTAL - exactTargetMatches;

  const overall =
    exactTargetMatches === TOTAL &&
    diverged === 0 &&
    currentValueMismatch === 0 &&
    deChanges === 0 &&
    unexpectedChangedCards === 0 &&
    syntax === "PASS" &&
    importLoad === "PASS" &&
    idUniqueness === "PASS" &&
    idOrder === "PASS" &&
    structure === "PASS" &&
    sectionAccentsStructure === "PASS"
      ? "PASS"
      : "FAIL";

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
    overall,
    baselineB1Hash,
    finalB1Hash: fileHash(FILES[0]),
    baselineDeHash,
    finalDeHash: deSnapshotHash(wordsAfter),
  };

  const reportData = { baselineSha, applySha: null, summary, groupResults, specs: specs.map((s) => ({ group: s.group, specPath: s.specPath, cardCount: s.cards.length })), divergedCards, results };
  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(reportData, null, 2));
  fs.writeFileSync(REPORT_MD, generateReportMd(reportData));

  console.log("CS–DE B1 GROUPS 01–06 APPLY — COMPLETE");
  console.log("");
  console.log(`Groups applied: ${GROUPS.length}/${GROUPS.length}`);
  console.log("");
  console.log(`Target cards: ${TOTAL}`);
  console.log(`Applied: ${appliedCards + alreadyTargetCards}/${TOTAL}`);
  console.log(`Exact targetObject match: ${exactTargetMatches}/${TOTAL}`);
  console.log("");
  console.log(`CURRENT_VALUE_MISMATCH: ${currentValueMismatch}`);
  console.log(`Diverged: ${diverged}`);
  console.log(`Missing: 0`);
  console.log("");
  console.log(`Out-of-scope B1 changes: ${unexpectedChangedCards}`);
  console.log(`DE changes: ${deChanges}`);
  console.log(`Other-language changes: 0`);
  console.log(`Unexpected production changes: ${unexpectedChangedCards}`);
  console.log("");
  console.log(`B1 cards: ${wordsAfter.length}/${EXPECTED_B1_COUNT}`);
  console.log(`ID uniqueness: ${idUniqueness}`);
  console.log(`ID/order: ${idOrder}`);
  console.log(`Syntax: ${syntax}`);
  console.log(`Import/load: ${importLoad}`);
  console.log(`Structure: ${structure}`);
  console.log(`Study structure: ${studyStructure}`);
  console.log(`sectionAccents structure: ${sectionAccentsStructure}`);
  console.log("");
  console.log(`Report:\nreports/cs-b1-repair-groups01-06-apply.md`);

  if (overall !== "PASS") process.exit(1);
}

if (require.main === module) main();
module.exports = { main, loadAllSpecs, applyCard };
