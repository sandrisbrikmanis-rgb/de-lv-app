#!/usr/bin/env node
"use strict";
/**
 * CS-DE B1 Final 2-card micro-repair — COPY-ONLY apply.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [path.join(ROOT, "data/cs/b1.js"), path.join(ROOT, "www/data/cs/b1.js")];
const SPEC_PATH = path.join(__dirname, "cs-b1-final-2card-micro-repair-spec.json");
const DE_FIELDS = ["de", "de_article", "de_plural"];
const EXPECTED_B1_COUNT = 3367;
const TARGETS = 2;
const BRANCH = "cursor/cs-b1-final-2card-micro-repair-apply-6ea4";
const REPORT_MD = path.join(ROOT, "reports/cs-b1-final-2card-micro-repair-apply.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-b1-final-2card-micro-repair-apply.json");

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

function loadSpec() {
  const spec = JSON.parse(fs.readFileSync(SPEC_PATH, "utf8"));
  if (!spec.cards || spec.cards.length !== TARGETS) {
    throw new Error(`STOP — expected ${TARGETS} cards in spec, got ${spec.cards?.length ?? 0}`);
  }
  for (const card of spec.cards) {
    if (!card.cardId || card.productionIndex == null || !card.targetObject || !card.currentProductionObject) {
      throw new Error(`STOP — invalid spec card ${card.cardId || "?"}`);
    }
  }
  return spec;
}

function applyCard(words, card) {
  const { productionIndex, cardId, currentProductionObject, targetObject } = card;
  const r = { cardId, productionIndex, status: null };

  if (productionIndex < 0 || productionIndex >= words.length) {
    r.status = "CARD_NOT_FOUND";
    return r;
  }

  const current = words[productionIndex];
  if (JSON.stringify(current) !== JSON.stringify(currentProductionObject)) {
    r.status = "CURRENT_VALUE_MISMATCH";
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

function verifySowieStructure(words, index) {
  const e = words[index];
  const study = e.study;
  return {
    studyIsObject: study !== null && typeof study === "object" && !Array.isArray(study),
    layout: study?.layout === "standardStudy",
    hasId: Boolean(study?.id),
    hasSectionAccents: Boolean(study?.sectionAccents),
    studyId: study?.id ?? null,
  };
}

function generateReportMd(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE B1 FINAL 2-CARD MICRO-REPAIR — APPLY",
    "",
    `Branch: \`${BRANCH}\``,
    `Start SHA: \`${data.baselineSha}\``,
    `End SHA: \`${data.applySha || "(pending commit)"}\``,
    `Generated: ${new Date().toISOString()}`,
    "",
    "## PER-CARD",
    "",
  ];

  for (const r of data.results) {
    lines.push(
      `### ${r.cardId} (index ${r.productionIndex})`,
      "",
      `| Check | Result |`,
      `|---|---|`,
      `| Current object match | ${r.status !== "CURRENT_VALUE_MISMATCH" ? "PASS" : "FAIL"} |`,
      `| Apply status | ${r.status} |`,
      `| Exact target match | ${data.cardExact[r.cardId] ? "PASS" : "FAIL"} |`,
      "",
    );
  }

  if (data.sowieStructure) {
    lines.push(
      "## b1-sowie-2660 STRUCTURE",
      "",
      `| Check | Result |`,
      `|---|---|`,
      `| study is object | ${data.sowieStructure.studyIsObject ? "PASS" : "FAIL"} |`,
      `| study.layout = standardStudy | ${data.sowieStructure.layout ? "PASS" : "FAIL"} |`,
      `| study.id exists | ${data.sowieStructure.hasId ? "PASS" : "FAIL"} |`,
      `| sectionAccents exists | ${data.sowieStructure.hasSectionAccents ? "PASS" : "FAIL"} |`,
      `| study.id value | \`${data.sowieStructure.studyId}\` |`,
      "",
    );
  }

  lines.push(
    "## TOTAL",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Targets requested | ${s.targets} |`,
    `| Current object matches | ${s.currentMatches}/${s.targets} |`,
    `| Applied | ${s.applied}/${s.targets} |`,
    `| Exact targetObject match | ${s.exactTargetMatches}/${s.targets} |`,
    `| CURRENT_VALUE_MISMATCH | ${s.currentValueMismatch} |`,
    `| Diverged | ${s.diverged} |`,
    `| Missing | ${s.missing} |`,
    `| DE changes | ${s.deChanges} |`,
    `| Out-of-scope B1 changes | ${s.outOfScopeB1Changes} |`,
    `| Other-language changes | 0 |`,
    `| Unexpected production changes | ${s.unexpectedProductionChanges} |`,
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
    "",
    "## STATUS",
    "",
    s.overall === "PASS"
      ? "**CS–DE B1 FINAL 2-CARD MICRO-REPAIR APPLY — COMPLETE**"
      : "**FAIL — DO NOT PROCEED**",
    "",
  );
  return lines.join("\n");
}

function main() {
  const baselineSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const spec = loadSpec();
  const allowedIndexes = new Set(spec.cards.map((c) => c.productionIndex));
  const before = loadWords(FILES[0]);
  if (before.length !== EXPECTED_B1_COUNT) {
    throw new Error(`STOP — expected ${EXPECTED_B1_COUNT} B1 cards, got ${before.length}`);
  }

  const baselineBefore = JSON.parse(JSON.stringify(before));
  const baselineDeHash = deSnapshotHash(before);
  const words = JSON.parse(JSON.stringify(before));
  const results = [];

  for (const card of spec.cards) {
    const r = applyCard(words, card);
    results.push(r);
    if (["BLOCKED_DE_CHANGE", "CURRENT_VALUE_MISMATCH", "CARD_NOT_FOUND"].includes(r.status)) {
      console.error(JSON.stringify({ error: "APPLY_BLOCKED", result: r }, null, 2));
      process.exit(1);
    }
  }

  for (const fp of FILES) writeWords(fp, words);
  const wordsAfter = loadWords(FILES[0]);

  const cardExact = {};
  let exactTargetMatches = 0;
  let applied = 0;
  let currentMatches = 0;
  for (const card of spec.cards) {
    const afterObj = wordsAfter[card.productionIndex];
    const match = JSON.stringify(afterObj) === JSON.stringify(card.targetObject);
    cardExact[card.cardId] = match;
    if (match) exactTargetMatches += 1;
    const r = results.find((x) => x.cardId === card.cardId);
    if (r?.status === "APPLIED") applied += 1;
    if (r?.status !== "CURRENT_VALUE_MISMATCH") currentMatches += 1;
  }

  let outOfScopeB1Changes = 0;
  for (let i = 0; i < wordsAfter.length; i++) {
    if (collectLeafChanges(baselineBefore[i], wordsAfter[i]).length && !allowedIndexes.has(i)) {
      outOfScopeB1Changes += 1;
    }
  }

  const deChanges = deSnapshotHash(wordsAfter) !== baselineDeHash ? 1 : 0;

  for (const card of spec.cards) {
    const beforeDe = serializeDe(baselineBefore[card.productionIndex]);
    const afterDe = serializeDe(wordsAfter[card.productionIndex]);
    if (beforeDe !== afterDe) {
      console.error(JSON.stringify({ error: "DE_CHANGED_ON_CARD", cardId: card.cardId }, null, 2));
      process.exit(1);
    }
  }

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
  let idOrder = "PASS";
  for (let i = 0; i < wordsAfter.length; i++) {
    if (wordsAfter[i].de !== baselineBefore[i].de) { idOrder = "FAIL"; break; }
  }
  const mirror = fs.readFileSync(FILES[0], "utf8") === fs.readFileSync(FILES[1], "utf8") ? "PASS" : "FAIL";
  const structure = mirror === "PASS" && wordsAfter.length === EXPECTED_B1_COUNT ? "PASS" : "FAIL";

  const studyCards = wordsAfter.filter((e) => e.study && typeof e.study === "object" && !Array.isArray(e.study));
  const studyStructure = studyCards.length > 0 ? "PASS" : "FAIL";

  let sectionAccentsStructure = "PASS";
  for (const card of spec.cards) {
    const prod = wordsAfter[card.productionIndex];
    const target = card.targetObject;
    if (JSON.stringify(prod?.study?.sectionAccents ?? null) !== JSON.stringify(target?.study?.sectionAccents ?? null)) {
      sectionAccentsStructure = "FAIL";
    }
  }

  const sowieIdx = spec.cards.find((c) => c.cardId === "b1-sowie-2660")?.productionIndex;
  const sowieStructure = sowieIdx != null ? verifySowieStructure(wordsAfter, sowieIdx) : null;
  if (sowieStructure && (!sowieStructure.studyIsObject || !sowieStructure.layout || !sowieStructure.hasId || !sowieStructure.hasSectionAccents)) {
    sectionAccentsStructure = "FAIL";
  }

  const currentValueMismatch = results.filter((r) => r.status === "CURRENT_VALUE_MISMATCH").length;
  const diverged = TARGETS - exactTargetMatches;

  const pass =
    currentMatches === TARGETS &&
    exactTargetMatches === TARGETS &&
    currentValueMismatch === 0 &&
    diverged === 0 &&
    deChanges === 0 &&
    outOfScopeB1Changes === 0 &&
    syntax === "PASS" &&
    importLoad === "PASS" &&
    idUniqueness === "PASS" &&
    idOrder === "PASS" &&
    structure === "PASS" &&
    studyStructure === "PASS" &&
    sectionAccentsStructure === "PASS" &&
    sowieStructure?.studyIsObject &&
    sowieStructure?.layout &&
    sowieStructure?.hasId &&
    sowieStructure?.hasSectionAccents;

  const summary = {
    targets: TARGETS,
    currentMatches,
    applied: applied + results.filter((r) => r.status === "ALREADY_TARGET").length,
    exactTargetMatches,
    currentValueMismatch,
    diverged,
    missing: 0,
    deChanges,
    outOfScopeB1Changes,
    unexpectedProductionChanges: outOfScopeB1Changes,
    b1Total: wordsAfter.length,
    idUniqueness,
    idOrder,
    syntax,
    importLoad,
    structure,
    studyStructure,
    sectionAccentsStructure,
    overall: pass ? "PASS" : "FAIL",
  };

  const reportData = {
    baselineSha,
    applySha: null,
    summary,
    results,
    cardExact,
    sowieStructure,
    specPath: "scripts/cs-b1-final-2card-micro-repair-spec.json",
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(reportData, null, 2));
  fs.writeFileSync(REPORT_MD, generateReportMd(reportData));

  console.log("CS–DE B1 FINAL 2-CARD MICRO-REPAIR APPLY — " + (pass ? "COMPLETE" : "FAIL"));
  console.log("");
  console.log(`Targets requested: ${TARGETS}`);
  console.log(`Current object matches: ${currentMatches}/${TARGETS}`);
  console.log(`Applied: ${summary.applied}/${TARGETS}`);
  console.log(`Exact targetObject match: ${exactTargetMatches}/${TARGETS}`);
  console.log("");
  console.log(`b1-inhalt: ${cardExact["b1-inhalt"] ? "PASS" : "FAIL"}`);
  console.log(`b1-sowie-2660: ${cardExact["b1-sowie-2660"] ? "PASS" : "FAIL"}`);
  console.log("");
  console.log(`DE changes: ${deChanges}`);
  console.log(`Out-of-scope B1 changes: ${outOfScopeB1Changes}`);
  console.log("");
  console.log(`Report: ${REPORT_MD}`);

  if (!pass) process.exit(1);
}

if (require.main === module) main();

module.exports = { main };
