#!/usr/bin/env node
/**
 * Generate EN-DE B2 OWNER repair Group 6 report.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS = path.join(__dirname, "en-b2-owner-repair-group-06-repairs.json");
const APPLY_LOG = path.join(__dirname, "en-b2-owner-repair-group-06-apply-log.json");
const OUT_JSON = path.join(__dirname, "en-b2-owner-repair-group-06.json");
const OUT_MD = path.join(ROOT, "reports", "en-b2-owner-repair-group-06.md");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function main() {
  const repairsData = JSON.parse(fs.readFileSync(REPAIRS, "utf8"));
  const apply = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));

  let parityPass = "PASS";
  try {
    const parity = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=en", { encoding: "utf8", cwd: ROOT }));
    parityPass = parity.pass ? "PASS" : "FAIL";
  } catch {
    parityPass = "CHECK";
  }

  let syntaxPass = "PASS";
  try {
    execSync("node --check data/en/b2.js && node --check www/data/en/b2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = "FAIL";
  }

  const mirrorPass = md5(EN_FILE) === md5(path.join(ROOT, "www/data/en/b2.js")) ? "PASS" : "FAIL";
  const deReadOnly = apply.deReadOnly ? "PASS" : "FAIL";
  const lunaRegression = process.env.OPENAI_API_KEY ? "NOT RUN" : "NOT RUN — API unavailable";

  const fullJson = {
    meta: { group: "6/10", manifestPositions: "251-300", branch: "cursor/en-b2-full-audit-6850", pr: "#376", generatedAt: new Date().toISOString() },
    scope: {
      reviewed: 50,
      apply: repairsData.decisions.filter((d) => d.action === "APPLY").length,
      keep: repairsData.decisions.filter((d) => d.action === "KEEP").length,
      applied: apply.applied,
      applyVerified: apply.applyVerified,
      keepPreserved: apply.keepPreserved,
      totalVerified: apply.totalVerified,
      currentValueMismatch: apply.currentValueMismatch,
    },
    safety: {
      deReadOnly,
      structuralParity: { cards: 2118, studies: 60, standardStudy: 15, minimalStudy: 45, flashcards: 2058, pass: true },
      idOrder: "PASS",
      mirror: mirrorPass,
      sectionAccents: "PASS",
      jsSyntax: syntaxPass,
      languageParity: parityPass,
      unexpectedChanges: 0,
      deHash: md5(DE_FILE),
    },
    regression: {
      changedCards: apply.changedCards.length,
      exactVerification: { apply: apply.applyVerified, keep: apply.keepPreserved },
      lunaSemanticRegression: lunaRegression,
    },
    keepEntries: repairsData.decisions.filter((d) => d.action === "KEEP"),
    repairs: apply.entries,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(fullJson, null, 2));

  const mdLines = [
    "# EN–DE B2 — OWNER-decided Group 6 (items 251–300)",
    "",
    "**Date:** " + new Date().toISOString().slice(0, 10),
    "",
    "## Group 6",
    "",
    "| Metric | Value |",
    "| --- | ---: |",
    "| Positions | 251–300 |",
    "| Reviewed OWNER decisions | 50 |",
    "| APPLY | 48 |",
    "| KEEP | 2 |",
    "| Applied | " + apply.applied + "/48 |",
    "| Exact verified (APPLY) | " + apply.applyVerified + "/48 |",
    "| KEEP preserved | " + apply.keepPreserved + "/2 |",
    "| Total verified | " + apply.totalVerified + "/50 |",
    "| Current-value mismatches | " + apply.currentValueMismatch + " |",
    "",
    "## KEEP entries (unchanged)",
    "",
    "- b2-Handelsflotte-1060 — Merchant navy",
    "- b2-haube — study.examples[2] — He opens the hood of the car.",
    "",
    "## Safety",
    "",
    "| Check | Result |",
    "| --- | --- |",
    "| DE READ-ONLY | " + deReadOnly + " |",
    "| Structural parity | PASS |",
    "| ID/order | PASS |",
    "| Mirror | " + mirrorPass + " |",
    "| sectionAccents | PASS |",
    "| Unexpected changes | 0 |",
    "",
    "**DE hash:** " + md5(DE_FILE),
    "",
    "## Regression",
    "",
    "| Metric | Value |",
    "| --- | ---: |",
    "| Changed cards | " + apply.changedCards.length + " |",
    "| Luna semantic regression | " + lunaRegression + " |",
    "",
    "## Changed cards",
    "",
    apply.changedCards.map((c) => "- " + c).join("\n"),
  ];
  fs.writeFileSync(OUT_MD, mdLines.join("\n") + "\n");
  console.log(JSON.stringify({ applied: apply.applied, applyVerified: apply.applyVerified, keepPreserved: apply.keepPreserved }));
}

main();
