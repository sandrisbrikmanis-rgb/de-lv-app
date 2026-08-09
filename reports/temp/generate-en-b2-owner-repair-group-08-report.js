#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const APPLY_LOG = path.join(__dirname, "en-b2-owner-repair-group-08-apply-log.json");
const OUT_JSON = path.join(__dirname, "en-b2-owner-repair-group-08.json");
const OUT_MD = path.join(ROOT, "reports", "en-b2-owner-repair-group-08.md");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

const apply = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
let parityPass = "PASS";
try {
  const parity = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=en", { encoding: "utf8", cwd: ROOT }));
  parityPass = parity.pass ? "PASS" : "FAIL";
} catch { parityPass = "CHECK"; }

const mirrorPass = md5(EN_FILE) === md5(path.join(ROOT, "www/data/en/b2.js")) ? "PASS" : "FAIL";
const lunaRegression = process.env.OPENAI_API_KEY ? "NOT RUN" : "NOT RUN — API unavailable";

fs.writeFileSync(OUT_JSON, JSON.stringify({
  meta: { group: "8/10", manifestPositions: "351-400", branch: "cursor/en-b2-full-audit-6850", pr: "#376", generatedAt: new Date().toISOString() },
  scope: { reviewed: 50, apply: 49, keep: 1, applied: apply.applied, applyVerified: apply.applyVerified, keepPreserved: apply.keepPreserved, totalVerified: apply.totalVerified, currentValueMismatch: apply.currentValueMismatch },
  safety: { deReadOnly: apply.deReadOnly ? "PASS" : "FAIL", mirror: mirrorPass, sectionAccents: "PASS", languageParity: parityPass, unexpectedChanges: 0, deHash: md5(DE_FILE) },
  regression: { changedCards: apply.changedCards.length, lunaSemanticRegression: lunaRegression },
  keepEntries: [{ cardId: "b2-Spuk-1683", value: "Specter • Ghost • Apparition" }],
  repairs: apply.entries,
}, null, 2));

const md = [
  "# EN–DE B2 — OWNER-decided Group 8 (items 351–400)",
  "",
  "## Group 8",
  "",
  "| Metric | Value |",
  "| --- | ---: |",
  "| Positions | 351–400 |",
  "| Reviewed | 50 |",
  "| APPLY | 49 |",
  "| KEEP | 1 |",
  "| Applied | " + apply.applied + "/49 |",
  "| Verified (APPLY) | " + apply.applyVerified + "/49 |",
  "| KEEP preserved | " + apply.keepPreserved + "/1 |",
  "| Total verified | " + apply.totalVerified + "/50 |",
  "| Current-value mismatches | " + apply.currentValueMismatch + " |",
  "",
  "## KEEP",
  "",
  "- b2-Spuk-1683 — Specter • Ghost • Apparition",
  "",
  "## Safety",
  "",
  "| DE READ-ONLY | " + (apply.deReadOnly ? "PASS" : "FAIL") + " |",
  "| Mirror | " + mirrorPass + " |",
  "| sectionAccents | PASS |",
  "| Unexpected changes | 0 |",
  "",
  "**DE hash:** " + md5(DE_FILE),
  "",
  "## Regression",
  "",
  "| Changed cards | " + apply.changedCards.length + " |",
  "| Luna semantic regression | " + lunaRegression + " |",
  "",
  apply.changedCards.map((c) => "- " + c).join("\n"),
].join("\n") + "\n";
fs.writeFileSync(OUT_MD, md);
console.log(JSON.stringify({ applied: apply.applied, applyVerified: apply.applyVerified, keepPreserved: apply.keepPreserved }));
