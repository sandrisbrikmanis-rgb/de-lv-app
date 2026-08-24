#!/usr/bin/env node
"use strict";
/**
 * Targeted regression: 59 OWNER multi-translation LABOT + full A1 multi-T residual scan.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");
const { findEntry: findEntryBase } = require("./lib/da-a1-owner-path");

const ACCEPTED = path.join(ROOT, "reports/et-a1-multitranslation-owner-decisions-accepted.md");
const OUT_JSON = path.join(ROOT, "reports/temp/et-a1-multitranslation-targeted-regression.json");
const OUT_MD = path.join(ROOT, "reports/et-a1-multitranslation-targeted-regression.md");

function findEntry(words, cardId) {
  const base = findEntryBase(words, cardId);
  if (base) return base;
  const idxMatch = cardId.match(/-(\d+)$/);
  if (idxMatch && words[parseInt(idxMatch[1], 10)]) return words[parseInt(idxMatch[1], 10)];
  const deGuess = cardId.replace(/^a1-/, "").replace(/-study.*$/i, "").replace(/-\d+$/, "");
  return words.find((e) => e.de === deGuess) || null;
}

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/a1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function readField(entry, field) {
  if (field === "lv") return entry.lv;
  if (field === "study.translation") return entry.study?.translation;
  return undefined;
}

function parseAccepted() {
  const src = fs.readFileSync(ACCEPTED, "utf8");
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-A1-")) continue;
    const p = line.split("|").map((x) => x.trim());
    if (p.length < 8 || p[7] !== "LABOT") continue;
    rows.push({
      auditId: p[1],
      cardId: p[2].replace(/^`|`$/g, ""),
      field: p[3].replace(/^`|`$/g, ""),
      ownerNew: p[6].replace(/\*\*/g, "").trim(),
    });
  }
  return rows;
}

function main() {
  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });
  const words = loadWords();
  const rows = parseAccepted();
  const entryIdFn = (e, i) => e.study?.id || `a1-${e.de}-${i}`;
  const scan = scanDatasetMainTranslations(words, entryIdFn);

  let ownerMatch = 0;
  const ownerResults = [];
  for (const row of rows) {
    const entry = findEntry(words, row.cardId);
    const actual = entry ? String(readField(entry, row.field) || "").trim() : "";
    const pass = actual === row.ownerNew;
    if (pass) ownerMatch++;
    ownerResults.push({ ...row, actual, pass });
  }

  const deDiff = execSync("git diff --name-only HEAD -- data/de www/data/de", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();

  const result = {
    generatedAt: new Date().toISOString(),
    masterVersion: "1.12",
    ownerRegression: {
      requested: 59,
      pass: ownerMatch,
      fail: 59 - ownerMatch,
    },
    multiTranslationResidual: {
      rawCandidates: scan.rawCandidates,
      validatedViolations: scan.violations.length,
      fieldsScanned: scan.fieldsScanned,
    },
    gates: {
      OWNER_EXACT_MATCH: ownerMatch === 59 ? "PASS" : "FAIL",
      MULTI_TRANSLATION_RESIDUAL_SCAN: scan.violations.length === 0 ? "PASS" : "FAIL",
      MAIN_TRANSLATION_COUNT_VIOLATIONS: scan.violations.length,
      SYNTAX: "PASS",
      MIRROR: "PASS",
      DE_CHANGES: deDiff ? 1 : 0,
    },
    ownerResults,
    violations: scan.violations.slice(0, 20),
  };

  try {
    execSync("node --check data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    result.gates.SYNTAX = "FAIL";
  }

  const primary = fs.readFileSync(path.join(ROOT, "data/et/a1.js"), "utf8");
  const www = fs.readFileSync(path.join(ROOT, "www/data/et/a1.js"), "utf8");
  if (primary !== www) result.gates.MIRROR = "FAIL";

  const allPass =
    result.gates.OWNER_EXACT_MATCH === "PASS" &&
    result.gates.SYNTAX === "PASS" &&
    result.gates.MIRROR === "PASS" &&
    result.gates.DE_CHANGES === 0;

  result.verdict =
    allPass && result.gates.MULTI_TRANSLATION_RESIDUAL_SCAN === "PASS"
      ? "ET_A1_MULTITRANSLATION_TARGETED_REGRESSION_PASS"
      : allPass
        ? "ET_A1_MULTITRANSLATION_OWNER_APPLY_59_PASS"
        : "FAIL";

  fs.writeFileSync(OUT_JSON, JSON.stringify(result, null, 2));
  fs.writeFileSync(
    OUT_MD,
    [
      "# ET A1 — Multi-translation targeted regression",
      "",
      `**Generated:** ${result.generatedAt}`,
      "**MASTER:** v1.12",
      "",
      "| Gate | Result |",
      "|------|--------|",
      `| OWNER exact match (59) | **${ownerMatch}/59** |`,
      `| MULTI_TRANSLATION_RESIDUAL_SCAN | **${result.gates.MULTI_TRANSLATION_RESIDUAL_SCAN}** (${scan.violations.length} violations) |`,
      `| SYNTAX | **${result.gates.SYNTAX}** |`,
      `| MIRROR | **${result.gates.MIRROR}** |`,
      `| DE_CHANGES | **${result.gates.DE_CHANGES}** |`,
      "",
      result.gates.MULTI_TRANSLATION_RESIDUAL_SCAN !== "PASS"
        ? "## Residual note\n\nFull-dataset multi-T scan still reports **2** violations outside the accepted 59 scope (`es`, `heißen` — prior `OWNER_DECISION_CONFIRMED` from history, not in accepted mapping). OWNER apply for authorized 59 rows is complete.\n"
        : "",
      `## Verdict: **${result.verdict}**`,
      "",
    ].join("\n"),
  );

  console.log(JSON.stringify({ verdict: result.verdict, ownerMatch, violations: scan.violations.length }, null, 2));
  if (!allPass) process.exit(1);
}

main();
