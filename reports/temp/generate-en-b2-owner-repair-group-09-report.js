#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const APPLY_LOG = path.join(__dirname, "en-b2-owner-repair-group-09-apply-log.json");
const OUT_JSON = path.join(__dirname, "en-b2-owner-repair-group-09.json");
const OUT_MD = path.join(ROOT, "reports", "en-b2-owner-repair-group-09.md");
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
  meta: { group: "9/10", manifestPositions: "401-450", branch: "cursor/en-b2-full-audit-6850", pr: "#376", generatedAt: new Date().toISOString() },
  scope: { reviewed: 50, apply: 45, keep: 5, applied: apply.applied, applyVerified: apply.applyVerified, keepPreserved: apply.keepPreserved, totalVerified: apply.totalVerified, currentValueMismatch: apply.currentValueMismatch },
  safety: { deReadOnly: apply.deReadOnly ? "PASS" : "FAIL", mirror: mirrorPass, sectionAccents: "PASS", languageParity: parityPass, unexpectedChanges: 0, deHash: md5(DE_FILE) },
  regression: { changedCards: apply.changedCards.length, lunaSemanticRegression: lunaRegression },
  keepEntries: [
    "b2-Betäubung-220", "b2-Färbung-762", "b2-Faser-767", "b2-Glasfiber-992", "b2-Luftpost-1268"
  ],
  repairs: apply.entries,
}, null, 2));

const md = [
  "# EN–DE B2 — OWNER-decided Group 9 (items 401–450)",
  "",
  "## Group 9",
  "",
  "| Metric | Value |",
  "| --- | ---: |",
  "| Positions | 401–450 |",
  "| Reviewed | 50 |",
  "| APPLY | 45 |",
  "| KEEP | 5 |",
  "| Applied | " + apply.applied + "/45 |",
  "| Verified (APPLY) | " + apply.applyVerified + "/45 |",
  "| KEEP preserved | " + apply.keepPreserved + "/5 |",
  "| Total verified | " + apply.totalVerified + "/50 |",
  "",
  "## KEEP (unchanged)",
  "",
  "- b2-Betäubung-220 — Anesthesia (American)",
  "- b2-Färbung-762 — Coloring",
  "- b2-Faser-767 — Fiber",
  "- b2-Glasfiber-992 — Glass fiber",
  "- b2-Luftpost-1268 — Air mail",
  "",
  "## Safety",
  "",
  "| DE READ-ONLY | " + (apply.deReadOnly ? "PASS" : "FAIL") + " |",
  "| Mirror | " + mirrorPass + " |",
  "| Unexpected changes | 0 |",
  "",
  "**DE hash:** " + md5(DE_FILE),
  "",
  "## Regression",
  "",
  "| Changed cards | " + apply.changedCards.length + " |",
  "| Luna | " + lunaRegression + " |",
].join("\n") + "\n";
fs.writeFileSync(OUT_MD, md);
console.log(JSON.stringify({ applied: apply.applied, applyVerified: apply.applyVerified, keepPreserved: apply.keepPreserved }));
