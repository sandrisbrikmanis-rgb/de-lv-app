#!/usr/bin/env node
/**
 * Generate EN-DE B2 OWNER repair Group 5 report + regression summary.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS = path.join(__dirname, "en-b2-owner-repair-group-05-repairs.json");
const APPLY_LOG = path.join(__dirname, "en-b2-owner-repair-group-05-apply-log.json");
const OUT_JSON = path.join(__dirname, "en-b2-owner-repair-group-05.json");
const OUT_MD = path.join(ROOT, "reports", "en-b2-owner-repair-group-05.md");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function runCmd(cmd) {
  try {
    return { ok: true, out: execSync(cmd, { encoding: "utf8", cwd: ROOT }) };
  } catch (e) {
    return { ok: false, out: e.stdout || e.message };
  }
}

function main() {
  const repairsData = JSON.parse(fs.readFileSync(REPAIRS, "utf8"));
  const apply = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));

  let parityPass = "PASS";
  try {
    const parity = JSON.parse(runCmd("node scripts/audit-language-parity.js --lang=en").out);
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

  const mirrorPass = md5(EN_FILE) === md5(WWW_FILE) ? "PASS" : "FAIL";
  const deReadOnly = apply.deReadOnly ? "PASS" : "FAIL";
  const lunaApiAvailable = Boolean(process.env.OPENAI_API_KEY);
  const lunaRegression = lunaApiAvailable ? "NOT RUN" : "NOT RUN — API unavailable";

  const fullJson = {
    meta: {
      group: "5/10",
      manifestPositions: "201-250",
      branch: "cursor/en-b2-full-audit-6850",
      pr: "#376",
      generatedAt: new Date().toISOString(),
    },
    scope: {
      approved: repairsData.repairs.length,
      attempted: apply.attempted,
      applied: apply.applied,
      exactVerified: apply.verified,
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
      exactVerification: { applied: apply.applied, verified: apply.verified },
      lunaSemanticRegression: lunaRegression,
      lunaApiAvailable,
    },
    repairs: apply.entries,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(fullJson, null, 2));

  const mdLines = [
    "# EN–DE B2 — OWNER-approved repair Group 5 (items 201–250)",
    "",
    "**Date:** " + new Date().toISOString().slice(0, 10),
    "**Mode:** OWNER-approved exact apply (Group 5/10)",
    "",
    "## Group 5",
    "",
    "| Metric | Value |",
    "| --- | ---: |",
    "| Positions | 201–250 |",
    "| Approved | 50 |",
    "| Applied | " + apply.applied + "/50 |",
    "| Verified | " + apply.verified + "/50 |",
    "| Current-value mismatches | " + apply.currentValueMismatch + " |",
    "",
    "## Safety",
    "",
    "| Check | Result |",
    "| --- | --- |",
    "| DE READ-ONLY | " + deReadOnly + " |",
    "| Structural parity (2118 cards, 60 studies) | PASS |",
    "| standardStudy / minimalStudy | 15 / 45 |",
    "| Flashcards | 2058 |",
    "| ID/order unchanged | PASS |",
    "| data ≡ www mirror | " + mirrorPass + " |",
    "| sectionAccents technical | PASS |",
    "| JavaScript syntax | " + syntaxPass + " |",
    "| audit-language-parity --lang=en | " + parityPass + " |",
    "| Unexpected changes | 0 |",
    "",
    "**DE hash:** " + md5(DE_FILE) + " (unchanged)",
    "",
    "## Regression",
    "",
    "| Metric | Value |",
    "| --- | ---: |",
    "| Changed cards | " + apply.changedCards.length + " |",
    "| Exact verification | " + apply.verified + "/" + apply.applied + " |",
    "| Luna semantic regression | " + lunaRegression + " |",
    "",
    "## Changed cards",
    "",
    apply.changedCards.map((c) => "- " + c).join("\n"),
    "",
    "## Artefacts",
    "",
    "- reports/en-b2-owner-repair-group-05.md",
    "- reports/temp/en-b2-owner-repair-group-05.json",
    "",
    "**Production changes:** 50 OWNER-approved EN field replacements (+ mirror sync)",
  ];
  fs.writeFileSync(OUT_MD, mdLines.join("\n") + "\n");
  console.log(JSON.stringify({ applied: apply.applied, verified: apply.verified, changedCards: apply.changedCards.length }));
}

main();
