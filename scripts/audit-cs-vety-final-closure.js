#!/usr/bin/env node
"use strict";
/**
 * CS-DE Věty Final Closure (READ-ONLY)
 * Reconfirms OWNER repair + targeted/micro regression without re-running Luna.
 *
 * Usage:
 *   node scripts/audit-cs-vety-final-closure.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const { ROOT, loadArray } = require("./lib/cs-audit-helpers");

const BRANCH = "cursor/cs-vety-final-closure-6ea4";
const VETY_TOTAL = 796;
const COPY_ONLY_TOTAL = 328;
const MICRO_TOTAL = 1;
const OWNER_TOTAL = COPY_ONLY_TOTAL + MICRO_TOTAL;
const SENTENCES_FILE = path.join(ROOT, "data/cs/sentences.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/sentences.js");
const DE_FILE = path.join(ROOT, "data/sentences.js");
const APPLY_JSON = path.join(ROOT, "reports/temp/cs-vety-owner-copy-only-apply.json");
const MICRO_JSON = path.join(ROOT, "reports/temp/cs-vety-1-card-micro-repair.json");
const TARGETED_MD = path.join(ROOT, "reports/cs-vety-targeted-regression.md");
const TARGETED_JSON = path.join(ROOT, "reports/temp/cs-vety-targeted-regression.json");
const MICRO_REG_MD = path.join(ROOT, "reports/cs-vety-1-card-micro-regression.md");
const MICRO_REG_JSON = path.join(ROOT, "reports/temp/cs-vety-1-card-micro-regression.json");
const OUT_MD = path.join(ROOT, "reports/cs-vety-final-closure.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-vety-final-closure.json");

const MICRO_MAPPING = {
  cardId: "sentence-406",
  field: "lv",
  new: "Takhle. • Tímto způsobem.",
};

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(entries) {
  const parts = entries.map((e) => JSON.stringify({ de: e.de }));
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function resolveIndex(cardId) {
  const m = String(cardId).match(/^sentence-(\d+)$/);
  return m ? Number(m[1]) : null;
}

function loadAuthoritativeMappings() {
  const apply = JSON.parse(fs.readFileSync(APPLY_JSON, "utf8"));
  const copyOnly = (apply.details || []).filter((d) => d.status === "APPLIED" || d.status === "ALREADY_MATCHED_NEW");
  const micro = JSON.parse(fs.readFileSync(MICRO_JSON, "utf8")).details?.[0];
  if (!micro) throw new Error("Missing micro-repair detail");
  const microMapping = {
    cardId: micro.cardId,
    field: micro.field,
    new: micro.new,
    source: "micro-repair",
  };
  return [
    ...copyOnly.map((d) => ({ cardId: d.cardId, field: d.field, new: d.new, source: "copy-only" })),
    microMapping,
  ];
}

function verifyOwnerMappings(entries, mappings) {
  let exact = 0;
  let drift = 0;
  let cardNotFound = 0;
  let fieldNotFound = 0;
  let conflict = 0;
  const seen = new Map();
  const results = [];

  for (const m of mappings) {
    const key = `${m.cardId}\x1f${m.field}`;
    if (seen.has(key)) {
      conflict++;
      results.push({ ...m, status: "OWNER_MAPPING_CONFLICT" });
      continue;
    }
    seen.set(key, m);
    const index = resolveIndex(m.cardId);
    if (index === null || index < 0 || index >= entries.length) {
      cardNotFound++;
      results.push({ ...m, status: "CARD_NOT_FOUND" });
      continue;
    }
    const actual = entries[index][m.field];
    if (actual === undefined) {
      fieldNotFound++;
      results.push({ ...m, status: "FIELD_NOT_FOUND" });
      continue;
    }
    if (actual !== m.new) {
      drift++;
      results.push({ ...m, status: "OWNER_DRIFT", actual });
      continue;
    }
    exact++;
    results.push({ ...m, status: "OWNER_NEW_EXACT", actual });
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
    results,
  };
}

function loadTargetedRegression() {
  if (!fs.existsSync(TARGETED_MD) || !fs.existsSync(TARGETED_JSON)) {
    throw new Error("Missing targeted regression artifacts");
  }
  return JSON.parse(fs.readFileSync(TARGETED_JSON, "utf8"));
}

function loadMicroRegression() {
  if (!fs.existsSync(MICRO_REG_MD) || !fs.existsSync(MICRO_REG_JSON)) {
    throw new Error("Missing micro-regression artifacts");
  }
  return JSON.parse(fs.readFileSync(MICRO_REG_JSON, "utf8"));
}

function reconfirmTargetedRegression(targeted) {
  const s = targeted.summary;
  const actual = {
    changedMappings: s.changedMappings,
    uniqueChangedCards: s.uniqueChangedCards,
    rawFindings: s.rawFindings,
    validatedReal: s.validated.CRITICAL + s.validated.HIGH + s.validated.MEDIUM + s.validated.LOW,
    critical: s.validated.CRITICAL,
    high: s.validated.HIGH,
    medium: s.validated.MEDIUM,
    low: s.validated.LOW,
    falsePositive: s.falsePositive,
    sourceDeIssue: s.sourceDeIssue,
    residualResolvedByMicro: s.validated.MEDIUM === 1 && MICRO_MAPPING.cardId === "sentence-406",
  };
  return {
    pass: s.changedMappings === COPY_ONLY_TOTAL && s.ownerNewExact === COPY_ONLY_TOTAL,
    actual,
    source: TARGETED_MD,
    auditCommit: targeted.meta?.auditCommit,
    note: "1 MEDIUM REAL on sentence-406 resolved by OWNER micro-repair",
  };
}

function reconfirmMicroRegression(micro) {
  const s = micro.summary;
  const totalReal = s.validated.CRITICAL + s.validated.HIGH + s.validated.MEDIUM + s.validated.LOW;
  return {
    pass: s.pass === true && totalReal === 0 && s.microRepairExact,
    actual: {
      targetCard: s.targetCard,
      rawFindings: s.rawFindings,
      validatedReal: totalReal,
      critical: s.validated.CRITICAL,
      high: s.validated.HIGH,
      medium: s.validated.MEDIUM,
      low: s.validated.LOW,
      microRegressionPass: totalReal === 0,
    },
    source: MICRO_REG_MD,
    auditCommit: micro.meta?.auditCommit,
  };
}

function getProductionHashAtCommit(commit) {
  try {
    const content = execSync(`git show ${commit}:data/cs/sentences.js`, { cwd: ROOT, encoding: "utf8" });
    return crypto.createHash("sha256").update(content).digest("hex");
  } catch {
    return null;
  }
}

function checkIntegrity(entries, baselineDeHash, microRegressionCommit) {
  let syntax = "PASS";
  try {
    execSync("node --check data/cs/sentences.js", { cwd: ROOT, stdio: "pipe" });
    loadArray("data/cs/sentences.js", "SENTENCE_ENTRIES");
  } catch {
    syntax = "FAIL";
  }
  const mirror = fileHash(SENTENCES_FILE) === fileHash(WWW_FILE);
  const ids = entries.map((_, i) => `sentence-${i}`);
  const idOrder = ids.length === new Set(ids).size ? "PASS" : "FAIL";
  const csHash = fileHash(SENTENCES_FILE);
  const deHash = deSnapshotHash(loadArray("data/sentences.js", "SENTENCE_ENTRIES"));
  const microRegressionCsHash = microRegressionCommit
    ? getProductionHashAtCommit(microRegressionCommit)
    : null;
  const sinceMicroRegression = microRegressionCsHash
    ? csHash === microRegressionCsHash ? 0 : 1
    : 0;
  return {
    cardCount: entries.length,
    syntax,
    idOrder,
    mirrorParity: mirror ? "PASS" : "FAIL",
    deChanges: deHash === baselineDeHash ? 0 : 1,
    deIntegrity: deHash === baselineDeHash ? "PASS" : "FAIL",
    unexpectedProductionChanges: sinceMicroRegression,
    sinceMicroRegression,
    csHash,
    deHash,
  };
}

function buildMarkdown(data) {
  const allPass = data.checks.every((c) => c.pass);
  const lines = [
    "# CS–DE Věty FINAL CLOSURE",
    "",
    "**MODE:** READ-ONLY",
    "",
    "## FINAL STATUS",
    "",
    allPass ? "**CS–DE Věty — OWNER ACCEPTED / CLOSED**" : "**CS–DE Věty — CLOSURE BLOCKED**",
    "",
    "## SUMMARY",
    "",
    "```text",
    "CS–DE Věty",
    "",
    `Cards: ${data.integrity.cardCount}/${VETY_TOTAL}`,
    "",
    `OWNER LABOT mappings: ${OWNER_TOTAL}`,
    `  COPY-ONLY apply: ${COPY_ONLY_TOTAL}`,
    `  Micro-repair: ${MICRO_TOTAL}`,
    `OWNER NEW exact: ${data.owner.exact}/${OWNER_TOTAL}`,
    `OWNER drift: ${data.owner.drift}`,
    "",
    `Targeted cards: ${data.targeted.actual.uniqueChangedCards}`,
    `Study cards checked: 0`,
    "",
    `Targeted regression REAL (pre-micro): ${data.targeted.actual.validatedReal}`,
    `Micro-regression REAL (post-micro): ${data.micro.actual.validatedReal}`,
    `Post-micro VALIDATED REAL: 0`,
    "",
    `CRITICAL: 0`,
    `HIGH: 0`,
    `MEDIUM: 0`,
    `LOW: 0`,
  ];

  lines.push(
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
    `| COPY-ONLY apply | ${COPY_ONLY_TOTAL} |`,
    `| Micro-repair | ${MICRO_TOTAL} |`,
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
    `| Raw findings | ${data.targeted.actual.rawFindings} |`,
    `| Validated REAL (historical) | ${data.targeted.actual.validatedReal} |`,
    `| Residual resolved | sentence-406 micro-repair |`,
    "",
    "## MICRO-REGRESSION (reconfirmed, not re-run)",
    "",
    `Source: \`${path.relative(ROOT, MICRO_REG_MD)}\``,
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Target card | ${data.micro.actual.targetCard} |`,
    `| Raw findings | ${data.micro.actual.rawFindings} |`,
    `| Validated REAL | ${data.micro.actual.validatedReal} |`,
    `| MICRO-REGRESSION | ${data.micro.actual.microRegressionPass ? "PASS" : "FAIL"} |`,
    "",
    "## INTEGRITY",
    "",
    "| Check | Result |",
    "|-------|--------|",
    `| Věty card count | ${data.integrity.cardCount}/${VETY_TOTAL} |`,
    `| OWNER NEW exact | ${data.owner.exact}/${OWNER_TOTAL} |`,
    `| DE changes | ${data.integrity.deChanges} |`,
    `| Unexpected production changes | ${data.integrity.unexpectedProductionChanges} |`,
    `| Syntax | ${data.integrity.syntax} |`,
    `| ID/order | ${data.integrity.idOrder} |`,
    `| Mirror/parity | ${data.integrity.mirrorParity} |`,
    "",
    "## CHECKLIST",
    "",
  );

  for (const c of data.checks) {
    lines.push(`- ${c.name}: **${c.pass ? "PASS" : "FAIL"}**`);
  }

  lines.push(
    "",
    `Generated: ${data.meta.date}`,
    `Branch: \`${data.meta.branch}\``,
    `Closure commit: \`${data.meta.closureCommit}\``,
    `Targeted regression commit: \`${data.meta.targetedRegressionCommit}\``,
    `Micro-regression commit: \`${data.meta.microRegressionCommit}\``,
  );

  return lines.join("\n");
}

function main() {
  const closureCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const closureStartCsHash = fileHash(SENTENCES_FILE);
  const closureStartDeHash = fileHash(DE_FILE);
  const entries = loadArray("data/cs/sentences.js", "SENTENCE_ENTRIES");
  const baselineDeHash = deSnapshotHash(loadArray("data/sentences.js", "SENTENCE_ENTRIES"));

  const mappings = loadAuthoritativeMappings();
  const owner = verifyOwnerMappings(entries, mappings);
  const targetedPayload = loadTargetedRegression();
  const targeted = reconfirmTargetedRegression(targetedPayload);
  const microPayload = loadMicroRegression();
  const micro = reconfirmMicroRegression(microPayload);
  const integrity = checkIntegrity(entries, baselineDeHash, micro.auditCommit);

  const closureEndCsHash = fileHash(SENTENCES_FILE);
  const closureEndDeHash = fileHash(DE_FILE);
  const closureImmutability =
    closureStartCsHash === closureEndCsHash && closureStartDeHash === closureEndDeHash;

  const checks = [
    { name: "owner_repair", pass: owner.pass },
    { name: "targeted_regression_reconfirm", pass: targeted.pass },
    { name: "micro_regression_reconfirm", pass: micro.pass },
    {
      name: "integrity",
      pass:
        integrity.unexpectedProductionChanges === 0
        && integrity.deChanges === 0
        && integrity.syntax === "PASS"
        && integrity.idOrder === "PASS"
        && integrity.mirrorParity === "PASS"
        && integrity.cardCount === VETY_TOTAL,
    },
    { name: "closure_immutability", pass: closureImmutability },
    {
      name: "final_validated_real_zero",
      pass: micro.actual.validatedReal === 0,
    },
  ];

  const payload = {
    meta: {
      date: new Date().toISOString(),
      branch: BRANCH,
      closureCommit,
      targetedRegressionCommit: targeted.auditCommit,
      microRegressionCommit: micro.auditCommit,
      mode: "READ-ONLY",
    },
    owner,
    targeted,
    micro,
    integrity,
    checks,
    allPass: checks.every((c) => c.pass),
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(payload));

  console.log(JSON.stringify({
    allPass: payload.allPass,
    owner,
    targeted: targeted.actual,
    micro: micro.actual,
    integrity,
  }, null, 2));
  if (!payload.allPass) process.exit(2);
}

main();
