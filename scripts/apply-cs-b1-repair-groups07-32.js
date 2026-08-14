#!/usr/bin/env node
"use strict";
/**
 * CS-DE B1 Repair Groups 07–32 — COPY-ONLY apply.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [path.join(ROOT, "data/cs/b1.js"), path.join(ROOT, "www/data/cs/b1.js")];
const DE_FIELDS = ["de", "de_article", "de_plural"];
const GROUPS_ALL = Array.from({ length: 26 }, (_, i) => String(i + 7).padStart(2, "0"));
const EXPECTED_COUNTS = Object.fromEntries(
  GROUPS_ALL.map((g) => [g, g === "32" ? 31 : 50]),
);
const TOTAL_ALL = 1281;
const EXPECTED_B1_COUNT = 3367;
const RESIDUAL_CARDS = 1281;
const BRANCH = "cursor/cs-b1-repair-groups07-32-apply-6ea4";
const REPORT_MD = path.join(ROOT, "reports/cs-b1-repair-groups07-32-apply.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-b1-repair-groups07-32-apply.json");
const ALLOW_PARTIAL = process.argv.includes("--allow-partial");
const ONLY_GROUPS = (() => {
  const arg = process.argv.find((a) => a.startsWith("--only="));
  if (!arg) return null;
  const val = arg.slice("--only=".length);
  if (val.includes("-")) {
    const [from, to] = val.split("-").map((n) => Number(n));
    return Array.from({ length: to - from + 1 }, (_, i) => String(from + i).padStart(2, "0"));
  }
  return val.split(",").map((n) => String(Number(n)).padStart(2, "0"));
})();

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

function resolveGroups() {
  const scope = ONLY_GROUPS || GROUPS_ALL;
  const present = [];
  const missing = [];
  for (const g of scope) {
    const specPath = path.join(__dirname, `cs-b1-repair-group${g}-spec.json`);
    if (fs.existsSync(specPath)) present.push(g);
    else missing.push(g);
  }
  if (missing.length && !ALLOW_PARTIAL) {
    throw new Error(`STOP — MISSING SPEC FILES for groups: ${missing.join(", ")}`);
  }
  if (!present.length) throw new Error("STOP — no group spec files found for 07–32");
  const scopeMissing = ONLY_GROUPS
    ? []
    : GROUPS_ALL.filter((g) => !present.includes(g));
  return { groups: present, missing: scopeMissing };
}

function loadAllSpecs(groups) {
  const specs = [];
  const allCards = [];
  const seenIds = new Set();
  const duplicates = [];

  for (const g of groups) {
    const specPath = path.join(__dirname, `cs-b1-repair-group${g}-spec.json`);
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
    if (JSON.stringify(prod?.study?.sectionAccents ?? null) !== JSON.stringify(target?.study?.sectionAccents ?? null)) {
      return false;
    }
  }
  return true;
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
    specFile: `scripts/cs-b1-repair-group${group}-spec.json`,
    requested: groupCards.length,
    currentMatches,
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
    "# CS–DE B1 REPAIR GROUPS 07–32 — APPLY",
    "",
    `Branch: \`${BRANCH}\``,
    `Start SHA: \`${data.baselineSha}\``,
    `End SHA: \`${data.applySha || "(pending commit)"}\``,
    `Generated: ${new Date().toISOString()}`,
    "",
  ];

  if (data.missingGroups?.length) {
    lines.push("## MISSING SPECS", "", `Groups not applied (spec files missing): **${data.missingGroups.join(", ")}**`, "");
  }

  lines.push(
    "## GROUP RECONCILIATION",
    "",
    "| Group | Requested | Current matches | Applied | Exact match | CURRENT_VALUE_MISMATCH | Diverged | Missing | DE changes |",
    "|---|---:|---:|---:|---:|---:|---:|---:|---:|",
  );

  for (const g of data.groupsAppliedList) {
    const gr = data.groupResults[g];
    lines.push(
      `| ${g} | ${gr.requested} | ${gr.currentMatches}/${gr.requested} | ${gr.applied}/${gr.requested} | ${gr.exact}/${gr.requested} | ${gr.currentValueMismatch} | ${gr.diverged} | ${gr.missing} | 0 |`,
    );
  }

  lines.push(
    "",
    "## TOTAL",
    "",
    "| Metric | Value |",
    "|---|---|",
    `| Groups applied | ${s.groupsApplied}/${s.groupsExpected} |`,
    `| Residual OWNER-review cards target | ${RESIDUAL_CARDS} |`,
    `| Target cards in this apply | ${s.targets} |`,
    `| Applied | ${s.appliedCards + s.alreadyTargetCards}/${s.targets} |`,
    `| Exact targetObject match | ${s.exactTargetMatches}/${s.targets} |`,
    `| CURRENT_VALUE_MISMATCH | ${s.currentValueMismatch} |`,
    `| Diverged | ${s.diverged} |`,
    `| Missing | ${s.missing} |`,
    `| Out-of-scope B1 changes | ${s.unexpectedChangedCards} |`,
    `| DE changes | ${s.deChanges} |`,
    "",
    "## FINAL B1 REPAIR STATE",
    "",
    "| Metric | Value |",
    "|---|---|",
    "| Initial full audit coverage | 3367/3367 |",
    "| Initial findings | 4444 |",
    "| Groups 01–06 OWNER findings | 1178 |",
    "| Residual findings | 3266 |",
    "| Residual OWNER-review cards | 1281/1281 |",
    `| Residual groups completed in this apply | ${data.groupsAppliedList[0]}–${data.groupsAppliedList.at(-1)} |`,
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
    s.overall === "PASS" && !data.missingGroups?.length
      ? "**CS–DE B1 GROUPS 07–32 APPLY — COMPLETE**"
      : data.missingGroups?.length
        ? `**PARTIAL — Groups ${data.groupsAppliedList.join(", ")} applied; missing specs for ${data.missingGroups.join(", ")}**`
        : "**FAIL — DO NOT PROCEED TO TARGETED REGRESSION**",
    "",
  );
  return lines.join("\n");
}

function main() {
  const baselineSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineDeHash = deSnapshotHash(loadWords(FILES[0]));
  const { groups, missing } = resolveGroups();
  const { specs, allCards, allowed } = loadAllSpecs(groups);
  const allowedIndexes = new Set(allCards.map((c) => c.productionIndex));
  const before = loadWords(FILES[0]);
  if (before.length !== EXPECTED_B1_COUNT) {
    throw new Error(`STOP — expected ${EXPECTED_B1_COUNT} B1 cards, got ${before.length}`);
  }

  const baselineBefore = JSON.parse(JSON.stringify(before));
  const words = JSON.parse(JSON.stringify(before));
  const results = [];
  const groupResults = {};

  for (const g of groups) {
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
  const total = allCards.length;
  const diverged = total - exactTargetMatches;
  const currentValueMismatch = results.filter((r) => r.status === "CURRENT_VALUE_MISMATCH").length;

  const fullPass =
    !missing.length &&
    groups.length === GROUPS_ALL.length &&
    exactTargetMatches === TOTAL_ALL &&
    currentValueMismatch === 0 &&
    diverged === 0 &&
    deChanges === 0 &&
    unexpectedChangedCards === 0;

  const partialPass =
    exactTargetMatches === total &&
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
    groupsApplied: groups.length,
    groupsExpected: GROUPS_ALL.length,
    targets: total,
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
    overall: fullPass || (ALLOW_PARTIAL && partialPass && missing.length) ? "PASS" : "FAIL",
    fullComplete: fullPass,
  };

  const reportData = {
    baselineSha,
    applySha: null,
    groupsAppliedList: groups,
    missingGroups: missing,
    summary,
    groupResults,
    specs: specs.map((s) => ({ group: s.group, specPath: s.specPath, cardCount: s.cards.length })),
    results,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(reportData, null, 2));
  fs.writeFileSync(REPORT_MD, generateReportMd(reportData));

  console.log(missing.length ? "CS–DE B1 GROUPS 07–32 APPLY — PARTIAL" : "CS–DE B1 GROUPS 07–32 APPLY — COMPLETE");
  console.log("");
  console.log(`Groups: ${groups.length}/${GROUPS_ALL.length}`);
  if (missing.length) console.log(`Missing spec groups: ${missing.join(", ")}`);
  console.log("");
  console.log(`Residual OWNER-review cards in this apply: ${total}/${RESIDUAL_CARDS}`);
  console.log(`Applied: ${appliedCards + alreadyTargetCards}/${total}`);
  console.log(`Exact targetObject match: ${exactTargetMatches}/${total}`);
  console.log("");
  console.log(`CURRENT_VALUE_MISMATCH: ${currentValueMismatch}`);
  console.log(`Diverged: ${diverged}`);
  console.log(`Missing: 0`);
  console.log("");
  console.log(`Out-of-scope B1 changes: ${unexpectedChangedCards}`);
  console.log(`DE changes: ${deChanges}`);
  console.log("");
  console.log(`B1 cards: ${wordsAfter.length}/${EXPECTED_B1_COUNT}`);
  console.log(`ID uniqueness: ${idUniqueness}`);
  console.log(`ID/order: ${idOrder}`);
  console.log(`Syntax: ${syntax}`);
  console.log(`Structure: ${structure}`);
  console.log(`sectionAccents structure: ${sectionAccentsStructure}`);
  console.log("");
  console.log("Report:\nreports/cs-b1-repair-groups07-32-apply.md");

  if (!partialPass && !fullPass) process.exit(1);
  if (!ALLOW_PARTIAL && missing.length) process.exit(1);
}

if (require.main === module) main();
module.exports = { main, loadAllSpecs, applyCard };
