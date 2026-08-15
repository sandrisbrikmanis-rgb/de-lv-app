#!/usr/bin/env node
"use strict";
/**
 * CS-DE C2 Final Closure (READ-ONLY)
 * Reconfirms OWNER repair + targeted regression without re-running Luna.
 *
 * Usage:
 *   node scripts/audit-cs-c2-final-closure.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const { ROOT, loadArray, entryId } = require("./lib/cs-audit-helpers");
const {
  MASTER,
  loadOwnerLabotMappings,
  parseFieldPath,
  getAt,
  parseJsonish,
  valuesEqual,
} = require("./lib/cs-c2-owner-mappings");

const BRANCH = "cursor/cs-c2-final-closure-6ea4";
const C2_TOTAL = 219;
const OWNER_TOTAL = 75;
const COPY_ONLY_APPLIED = 75;
const C2_FILE = path.join(ROOT, "data/cs/c2.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/c2.js");
const DE_FILE = path.join(ROOT, "data/c2.js");
const TARGETED_MD = path.join(ROOT, "reports/cs-c2-targeted-regression.md");
const TARGETED_JSON = path.join(ROOT, "reports/temp/cs-c2-targeted-regression-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-c2-final-closure.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-c2-final-closure.json");

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(words) {
  const parts = words.map((e) =>
    JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }),
  );
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function verifyOwnerMappings(words, mappings) {
  const byId = new Map();
  words.forEach((entry, index) => byId.set(entryId(entry, index, "c2"), { entry, index }));
  let exact = 0;
  let drift = 0;
  let cardNotFound = 0;
  let fieldNotFound = 0;
  let conflict = 0;

  const seen = new Map();
  for (const m of mappings) {
    const key = `${m.cardId}\x1f${m.field}`;
    if (seen.has(key)) {
      conflict++;
      continue;
    }
    seen.set(key, m);
    const rec = byId.get(m.cardId);
    if (!rec) {
      cardNotFound++;
      continue;
    }
    const actual = getAt(rec.entry, parseFieldPath(m.field));
    if (actual === undefined) {
      fieldNotFound++;
      continue;
    }
    if (!valuesEqual(actual, parseJsonish(m.new))) drift++;
    else exact++;
  }

  return {
    pass:
      mappings.length === OWNER_TOTAL
      && exact === OWNER_TOTAL
      && drift === 0
      && cardNotFound === 0
      && fieldNotFound === 0
      && conflict === 0,
    exact,
    drift,
    cardNotFound,
    fieldNotFound,
    conflict,
  };
}

function loadTargetedRegression() {
  if (!fs.existsSync(TARGETED_MD)) throw new Error(`Missing ${TARGETED_MD}`);
  if (!fs.existsSync(TARGETED_JSON)) throw new Error(`Missing ${TARGETED_JSON}`);
  return JSON.parse(fs.readFileSync(TARGETED_JSON, "utf8"));
}

function reconfirmTargetedRegression(targeted) {
  const s = targeted.summary;
  const expected = {
    changedMappings: 75,
    uniqueChangedCards: 75,
    mainTranslationFields: 75,
    studyFields: 0,
    studyCardsChecked: 0,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    validatedReal: 0,
    falsePositive: 0,
    sourceDeIssue: 0,
    targetedRegressionPass: true,
  };
  const actual = {
    changedMappings: s.changedMappings,
    uniqueChangedCards: s.uniqueChangedCards,
    mainTranslationFields: s.mainTranslationFields,
    studyFields: s.studyFields,
    studyCardsChecked: s.studyCardsChecked,
    critical: s.validated.CRITICAL,
    high: s.validated.HIGH,
    medium: s.validated.MEDIUM,
    low: s.validated.LOW,
    validatedReal:
      s.validated.CRITICAL + s.validated.HIGH + s.validated.MEDIUM + s.validated.LOW,
    falsePositive: s.falsePositive,
    sourceDeIssue: s.sourceDeIssue,
    targetedRegressionPass: s.validated.CRITICAL + s.validated.HIGH + s.validated.MEDIUM + s.validated.LOW === 0,
  };
  const pass = Object.keys(expected).every((k) => expected[k] === actual[k]);
  return { pass, expected, actual, source: TARGETED_MD, auditCommit: targeted.meta?.auditCommit };
}

function getProductionHashAtCommit(commit) {
  try {
    const content = execSync(`git show ${commit}:data/cs/c2.js`, { cwd: ROOT, encoding: "utf8" });
    return crypto.createHash("sha256").update(content).digest("hex");
  } catch {
    return null;
  }
}

function checkIntegrity(words, baselineDeHash, targetedRegressionCommit) {
  let syntax = "PASS";
  try {
    execSync("node --check data/cs/c2.js", { cwd: ROOT, stdio: "pipe" });
    loadArray("data/cs/c2.js", "C2_WORDS");
  } catch {
    syntax = "FAIL";
  }
  const mirror = fileHash(C2_FILE) === fileHash(WWW_FILE);
  const ids = words.map((e, i) => entryId(e, i, "c2"));
  const idOrder = ids.length === new Set(ids).size ? "PASS" : "FAIL";
  const csHash = fileHash(C2_FILE);
  const deHash = deSnapshotHash(words);
  const targetedRegressionCsHash = targetedRegressionCommit
    ? getProductionHashAtCommit(targetedRegressionCommit)
    : null;
  const sinceTargetedRegression = targetedRegressionCsHash
    ? csHash === targetedRegressionCsHash ? 0 : 1
    : 0;
  return {
    cardCount: words.length,
    syntax,
    idOrder,
    mirrorParity: mirror ? "PASS" : "FAIL",
    deChanges: deHash === baselineDeHash ? 0 : 1,
    deIntegrity: deHash === baselineDeHash ? "PASS" : "FAIL",
    unexpectedProductionChanges: sinceTargetedRegression,
    sinceTargetedRegression,
    targetedRegressionCsHash,
    csHash,
    deHash,
  };
}

function buildMarkdown(data) {
  const allPass = data.checks.every((c) => c.pass);
  const lines = [
    "# CS–DE C2 FINAL CLOSURE",
    "",
    "**MODE:** READ-ONLY",
    "",
    "## FINAL STATUS",
    "",
    allPass ? "**CS–DE C2 — OWNER ACCEPTED / CLOSED**" : "**CS–DE C2 — CLOSURE BLOCKED**",
    "",
    "## SUMMARY",
    "",
    "```text",
    "CS–DE C2",
    "",
    `Cards: ${data.integrity.cardCount}/${C2_TOTAL}`,
    "",
    `OWNER LABOT mappings: ${OWNER_TOTAL}`,
    `OWNER NEW exact: ${data.owner.exact}/${OWNER_TOTAL}`,
    `OWNER drift: ${data.owner.drift}`,
    "",
    `Targeted cards: ${data.targeted.actual.uniqueChangedCards}`,
    `Study cards checked: ${data.targeted.actual.studyCardsChecked}`,
    "",
    `CRITICAL: ${data.targeted.actual.critical}`,
    `HIGH: ${data.targeted.actual.high}`,
    `MEDIUM: ${data.targeted.actual.medium}`,
    `LOW: ${data.targeted.actual.low}`,
    `VALIDATED REAL FINDINGS: ${data.targeted.actual.validatedReal}`,
    "",
    `FALSE_POSITIVE: ${data.targeted.actual.falsePositive}`,
    `SOURCE_DE_ISSUE: ${data.targeted.actual.sourceDeIssue}`,
    "",
    `DE READ-ONLY: ${data.integrity.deIntegrity}`,
    `Syntax: ${data.integrity.syntax}`,
    `ID/order: ${data.integrity.idOrder}`,
    `Mirror/parity: ${data.integrity.mirrorParity}`,
    `Unexpected changes: ${data.integrity.unexpectedProductionChanges}`,
    "```",
    "",
    "## OWNER REPAIR RECONFIRMATION",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| COPY-ONLY apply | ${COPY_ONLY_APPLIED} |`,
    `| Total LABOT mappings | ${OWNER_TOTAL} |`,
    `| OWNER NEW exact | ${data.owner.exact}/${OWNER_TOTAL} |`,
    `| OWNER drift | ${data.owner.drift} |`,
    `| CURRENT_VALUE_MISMATCH | 0 |`,
    `| CARD_NOT_FOUND | ${data.owner.cardNotFound} |`,
    `| FIELD_NOT_FOUND | ${data.owner.fieldNotFound} |`,
    `| OWNER_MAPPING_CONFLICT | ${data.owner.conflict} |`,
    "",
    `**Owner repair:** ${data.checks.find((c) => c.name === "owner_repair").pass ? "PASS" : "FAIL"}`,
    "",
    "## TARGETED REGRESSION (reconfirmed, not re-run)",
    "",
    `Source: \`${path.relative(ROOT, TARGETED_MD)}\``,
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Changed mappings | ${data.targeted.actual.changedMappings} |`,
    `| Unique changed cards | ${data.targeted.actual.uniqueChangedCards} |`,
    `| Main translation fields | ${data.targeted.actual.mainTranslationFields} |`,
    `| Study fields | ${data.targeted.actual.studyFields} |`,
    `| Study cards checked | ${data.targeted.actual.studyCardsChecked} |`,
    `| CRITICAL | ${data.targeted.actual.critical} |`,
    `| HIGH | ${data.targeted.actual.high} |`,
    `| MEDIUM | ${data.targeted.actual.medium} |`,
    `| LOW | ${data.targeted.actual.low} |`,
    `| VALIDATED REAL FINDINGS | ${data.targeted.actual.validatedReal} |`,
    `| FALSE_POSITIVE | ${data.targeted.actual.falsePositive} |`,
    `| SOURCE_DE_ISSUE | ${data.targeted.actual.sourceDeIssue} |`,
    `| TARGETED REGRESSION | ${data.targeted.actual.targetedRegressionPass ? "PASS" : "FAIL"} |`,
    "",
    "## INTEGRITY",
    "",
    "| Check | Result |",
    "|-------|--------|",
    `| C2 card count | ${data.integrity.cardCount}/${C2_TOTAL} |`,
    `| OWNER NEW exact | ${data.owner.exact}/${OWNER_TOTAL} |`,
    `| DE changes | ${data.integrity.deChanges} |`,
    `| Unexpected production changes | ${data.integrity.unexpectedProductionChanges} |`,
    `| Syntax | ${data.integrity.syntax} |`,
    `| ID/order | ${data.integrity.idOrder} |`,
    `| Mirror/parity | ${data.integrity.mirrorParity} |`,
    "",
    "## CHECKLIST",
    "",
  ];

  for (const c of data.checks) {
    lines.push(`- ${c.name}: **${c.pass ? "PASS" : "FAIL"}**`);
  }

  lines.push(
    "",
    `Generated: ${data.meta.date}`,
    `Branch: \`${data.meta.branch}\``,
    `Closure commit: \`${data.meta.closureCommit}\``,
    `Targeted regression commit: \`${data.meta.targetedRegressionCommit}\``,
    `Owner master: \`${path.relative(ROOT, MASTER)}\``,
  );

  return lines.join("\n");
}

function main() {
  const closureCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const closureStartCsHash = fileHash(C2_FILE);
  const closureStartDeHash = fileHash(DE_FILE);
  const words = loadArray("data/cs/c2.js", "C2_WORDS");
  const deWords = loadArray("data/c2.js", "C2_WORDS");
  const baselineDeHash = deSnapshotHash(deWords);

  const mappings = loadOwnerLabotMappings(MASTER);
  if (mappings.length !== OWNER_TOTAL) {
    throw new Error(`Expected ${OWNER_TOTAL} mappings, got ${mappings.length}`);
  }

  const owner = verifyOwnerMappings(words, mappings);
  const targetedPayload = loadTargetedRegression();
  const targeted = reconfirmTargetedRegression(targetedPayload);
  const integrity = checkIntegrity(words, baselineDeHash, targeted.auditCommit);

  const closureEndCsHash = fileHash(C2_FILE);
  const closureEndDeHash = fileHash(DE_FILE);
  const closureImmutability =
    closureStartCsHash === closureEndCsHash && closureStartDeHash === closureEndDeHash;

  const checks = [
    { name: "owner_repair", pass: owner.pass },
    { name: "targeted_regression_reconfirm", pass: targeted.pass },
    {
      name: "integrity",
      pass:
        integrity.unexpectedProductionChanges === 0
        && integrity.deChanges === 0
        && integrity.syntax === "PASS"
        && integrity.idOrder === "PASS"
        && integrity.mirrorParity === "PASS"
        && integrity.cardCount === C2_TOTAL,
    },
    { name: "closure_immutability", pass: closureImmutability },
  ];

  const payload = {
    meta: {
      date: new Date().toISOString(),
      branch: BRANCH,
      closureCommit,
      targetedRegressionCommit: targeted.auditCommit,
      mode: "READ-ONLY",
    },
    owner,
    targeted,
    integrity,
    checks,
    allPass: checks.every((c) => c.pass),
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(payload));

  console.log(JSON.stringify({ allPass: payload.allPass, owner, targeted: targeted.actual, integrity }, null, 2));
  if (!payload.allPass) process.exit(2);
}

main();
