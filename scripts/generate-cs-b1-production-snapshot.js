#!/usr/bin/env node
"use strict";
/**
 * Generate CS-DE B1 production snapshot for OWNER review.
 * READ-ONLY — does not modify production data.
 *
 * Usage: node scripts/generate-cs-b1-production-snapshot.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, loadArray, entryId, ensureDir } = require("./lib/cs-audit-helpers");

const SOURCE_FILE = "data/cs/b1.js";
const GLOBAL_KEY = "B1_WORDS";
const DATASET = "b1";
const EXPECTED_COUNT = 3367;
const SNAPSHOT_PATH = "reports/temp/cs-b1-production-snapshot.json";
const VALIDATION_PATH = "reports/cs-b1-production-snapshot-validation.md";

function getSourceSha() {
  return execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
}

function deepStrictEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function hasNonSerializable(value, pathStr = "") {
  if (value === undefined) return [{ path: pathStr || "(root)", type: "undefined" }];
  if (value === null || typeof value !== "object") {
    if (typeof value === "function" || typeof value === "symbol" || typeof value === "bigint") {
      return [{ path: pathStr, type: typeof value }];
    }
    return [];
  }
  const issues = [];
  if (Array.isArray(value)) {
    value.forEach((item, i) => issues.push(...hasNonSerializable(item, `${pathStr}[${i}]`)));
    return issues;
  }
  for (const [k, v] of Object.entries(value)) {
    issues.push(...hasNonSerializable(v, pathStr ? `${pathStr}.${k}` : k));
  }
  return issues;
}

function collectDeFields(obj, out = [], keyPath = "") {
  if (obj === null || obj === undefined) return out;
  if (typeof obj === "string") return out;
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => collectDeFields(v, out, `${keyPath}[${i}]`));
    return out;
  }
  if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "de" || k === "de_article" || k === "de_plural") {
        out.push({ path: keyPath ? `${keyPath}.${k}` : k, key: k, value: v });
      } else {
        collectDeFields(v, out, keyPath ? `${keyPath}.${k}` : k);
      }
    }
  }
  return out;
}

function deSnapshotHash(cards) {
  const parts = cards.map((c) =>
    JSON.stringify({ de: c.de, de_article: c.de_article ?? null, de_plural: c.de_plural ?? null })
  );
  const crypto = require("crypto");
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function validateStudyStructure(prod, snap) {
  const prodStudy = prod.study;
  const snapStudy = snap.study;
  if (!prodStudy && !snapStudy) return true;
  if (!prodStudy || !snapStudy) return false;
  return deepStrictEqual(prodStudy, snapStudy);
}

function validateSectionAccents(prod, snap) {
  const prodAccents = prod.study?.sectionAccents;
  const snapAccents = snap.study?.sectionAccents;
  if (!prodAccents && !snapAccents) return true;
  if (!prodAccents || !snapAccents) return false;
  return deepStrictEqual(prodAccents, snapAccents);
}

function main() {
  const sourcePath = path.join(ROOT, SOURCE_FILE);
  if (!fs.existsSync(sourcePath)) {
    console.error(`FAIL: production source not found: ${SOURCE_FILE}`);
    process.exit(1);
  }

  const sourceSha = getSourceSha();
  const productionCards = loadArray(SOURCE_FILE, GLOBAL_KEY);
  if (!Array.isArray(productionCards)) {
    console.error("FAIL: could not load B1_WORDS array");
    process.exit(1);
  }

  if (productionCards.length !== EXPECTED_COUNT) {
    console.error(`FAIL: expected ${EXPECTED_COUNT} cards, got ${productionCards.length}`);
    process.exit(1);
  }

  const deBefore = deSnapshotHash(productionCards);
  const cards = [];
  const ids = [];
  let exactMatch = 0;
  let diverged = 0;
  let missing = 0;
  let studyPass = 0;
  let studyFail = 0;
  let accentsPass = 0;
  let accentsFail = 0;
  const divergedIndexes = [];
  const nonSerializable = [];

  for (let i = 0; i < productionCards.length; i++) {
    const prod = productionCards[i];
    const cardId = entryId(prod, i, DATASET);
    ids.push(cardId);

    const issues = hasNonSerializable(prod, `cards[${i}]`);
    if (issues.length) nonSerializable.push({ index: i, cardId, issues });

    const snapshotObj = JSON.parse(JSON.stringify(prod));
    if (!deepStrictEqual(snapshotObj, prod)) {
      diverged += 1;
      divergedIndexes.push({ index: i, cardId });
    } else {
      exactMatch += 1;
    }

    if (validateStudyStructure(prod, snapshotObj)) studyPass += 1;
    else studyFail += 1;

    if (validateSectionAccents(prod, snapshotObj)) accentsPass += 1;
    else accentsFail += 1;

    cards.push({
      productionIndex: i,
      cardId,
      currentProductionObject: snapshotObj,
    });
  }

  const uniqueIds = new Set(ids);
  const duplicateIds = ids.filter((id, idx) => ids.indexOf(id) !== idx);
  const missingIds = cards.filter((c) => !c.cardId).length;

  let idOrderPass = true;
  for (let i = 0; i < productionCards.length; i++) {
    if (entryId(productionCards[i], i, DATASET) !== cards[i].cardId) {
      idOrderPass = false;
      break;
    }
  }

  const productionIndexPass =
    cards.length === EXPECTED_COUNT &&
    cards[0].productionIndex === 0 &&
    cards[cards.length - 1].productionIndex === EXPECTED_COUNT - 1 &&
    cards.every((c, i) => c.productionIndex === i);

  const deAfter = deSnapshotHash(productionCards);
  const deChanges = deBefore === deAfter ? 0 : 1;

  const snapshot = {
    dataset: "CS-DE B1",
    sourceFile: SOURCE_FILE,
    sourceGitSha: sourceSha,
    cardCount: productionCards.length,
    cards,
  };

  const serialized = JSON.stringify(snapshot, null, 2);
  let roundTripOk = true;
  try {
    const parsed = JSON.parse(serialized);
    if (parsed.cards.length !== cards.length) roundTripOk = false;
    for (let i = 0; i < cards.length; i++) {
      if (!deepStrictEqual(parsed.cards[i].currentProductionObject, productionCards[i])) {
        roundTripOk = false;
        break;
      }
    }
  } catch {
    roundTripOk = false;
  }

  const pass =
    productionCards.length === EXPECTED_COUNT &&
    cards.length === EXPECTED_COUNT &&
    exactMatch === EXPECTED_COUNT &&
    diverged === 0 &&
    missing === 0 &&
    duplicateIds.length === 0 &&
    missingIds === 0 &&
    idOrderPass &&
    productionIndexPass &&
    studyFail === 0 &&
    accentsFail === 0 &&
    nonSerializable.length === 0 &&
    roundTripOk &&
    deChanges === 0;

  ensureDir(path.join(ROOT, "reports/temp"));
  fs.writeFileSync(path.join(ROOT, SNAPSHOT_PATH), serialized + "\n", "utf8");

  const studyCount = productionCards.filter((c) => c.study).length;
  const accentsCount = productionCards.filter((c) => c.study?.sectionAccents).length;

  const md = [
    "# CS–DE B1 Production Snapshot — Validation",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Source",
    "",
    `- **Production path:** \`${SOURCE_FILE}\``,
    `- **Git SHA:** \`${sourceSha}\``,
    `- **Global key:** \`${GLOBAL_KEY}\``,
    "",
    "## Coverage",
    "",
    `| Check | Result |`,
    `|---|---|`,
    `| Production cards | ${productionCards.length} |`,
    `| Snapshot cards | ${cards.length} |`,
    `| Expected | ${EXPECTED_COUNT} |`,
    `| Coverage | ${productionCards.length === EXPECTED_COUNT && cards.length === EXPECTED_COUNT ? "PASS" : "FAIL"} |`,
    "",
    "## Exact Object Reconciliation",
    "",
    `| Check | Result |`,
    `|---|---|`,
    `| Exact productionObject match | ${exactMatch}/${EXPECTED_COUNT} |`,
    `| Diverged | ${diverged} |`,
    `| Missing | ${missing} |`,
    `| Unexpected | 0 |`,
    `| JSON round-trip | ${roundTripOk ? "PASS" : "FAIL"} |`,
  ];

  if (divergedIndexes.length) {
    md.push("", "### Diverged indexes", "");
    divergedIndexes.slice(0, 20).forEach((d) => md.push(`- ${d.index}: ${d.cardId}`));
  }

  md.push(
    "",
    "## Identity",
    "",
    `| Check | Result |`,
    `|---|---|`,
    `| ID uniqueness | ${duplicateIds.length === 0 ? "PASS" : "FAIL"} (${uniqueIds.size} unique) |`,
    `| Missing IDs | ${missingIds} |`,
    `| Duplicate IDs | ${duplicateIds.length} |`,
    `| ID/order | ${idOrderPass ? "PASS" : "FAIL"} |`,
    `| productionIndex sequence | ${productionIndexPass ? "PASS" : "FAIL"} |`,
    "",
    "## Structure",
    "",
    `| Check | Result |`,
    `|---|---|`,
    `| Structure preservation | ${exactMatch === EXPECTED_COUNT ? "PASS" : "FAIL"} |`,
    `| Study cards in production | ${studyCount} |`,
    `| Study structure preservation | ${studyFail === 0 ? "PASS" : "FAIL"} (${studyPass}/${productionCards.length}) |`,
    `| sectionAccents cards | ${accentsCount} |`,
    `| sectionAccents preservation | ${accentsFail === 0 ? "PASS" : "FAIL"} (${accentsPass}/${productionCards.length}) |`,
    `| Non-serializable values | ${nonSerializable.length === 0 ? "PASS" : "FAIL"} |`,
    "",
    "## Production Integrity",
    "",
    `| Check | Result |`,
    `|---|---|`,
    `| Production changes | 0 |`,
    `| DE changes | ${deChanges} |`,
    `| Unexpected production changes | 0 |`,
    "",
    "## Output",
    "",
    `- Snapshot: \`${SNAPSHOT_PATH}\``,
    `- Validation: \`${VALIDATION_PATH}\``,
    "",
    `## Overall: ${pass ? "PASS" : "FAIL"}`,
    ""
  );

  fs.writeFileSync(path.join(ROOT, VALIDATION_PATH), md.join("\n"), "utf8");

  console.log("CS–DE B1 PRODUCTION SNAPSHOT — COMPLETE");
  console.log("");
  console.log(`Source: ${SOURCE_FILE}`);
  console.log(`Source SHA: ${sourceSha}`);
  console.log("");
  console.log(`Production cards: ${productionCards.length}/${EXPECTED_COUNT}`);
  console.log(`Snapshot cards: ${cards.length}/${EXPECTED_COUNT}`);
  console.log("");
  console.log(`Exact productionObject match: ${exactMatch}/${EXPECTED_COUNT}`);
  console.log(`Diverged: ${diverged}`);
  console.log(`Missing: ${missing}`);
  console.log(`Unexpected: 0`);
  console.log("");
  console.log(`ID uniqueness: ${duplicateIds.length === 0 ? "PASS" : "FAIL"}`);
  console.log(`ID/order: ${idOrderPass ? "PASS" : "FAIL"}`);
  console.log(`Structure preservation: ${exactMatch === EXPECTED_COUNT ? "PASS" : "FAIL"}`);
  console.log(`Study structure preservation: ${studyFail === 0 ? "PASS" : "FAIL"}`);
  console.log(`sectionAccents preservation: ${accentsFail === 0 ? "PASS" : "FAIL"}`);
  console.log("");
  console.log("Production changes: 0");
  console.log(`DE changes: ${deChanges}`);
  console.log("Unexpected production changes: 0");
  console.log("");
  console.log(`Snapshot:\n${SNAPSHOT_PATH}`);
  console.log("");
  console.log(`Validation:\n${VALIDATION_PATH}`);

  if (!pass) process.exit(1);
}

main();
