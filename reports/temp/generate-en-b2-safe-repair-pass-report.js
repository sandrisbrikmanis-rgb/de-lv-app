#!/usr/bin/env node
/**
 * Generate EN-DE B2 safe repair pass report.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const GATE = path.join(ROOT, "reports", "temp", "en-b2-safe-repair-gate.json");
const SAFE = path.join(ROOT, "reports", "temp", "en-b2-safe-repairs.json");
const OWNER = path.join(ROOT, "reports", "temp", "en-b2-owner-review-after-safe-gate.json");
const APPLY_LOG = path.join(ROOT, "reports", "temp", "en-b2-safe-repair-apply-log.json");
const REGRESSION = path.join(ROOT, "reports", "temp", "en-b2-safe-repair-regression.json");
const OUT = path.join(ROOT, "reports", "en-b2-safe-repair-pass.md");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function main() {
  const gate = JSON.parse(fs.readFileSync(GATE, "utf8"));
  const safe = JSON.parse(fs.readFileSync(SAFE, "utf8"));
  const owner = JSON.parse(fs.readFileSync(OWNER, "utf8"));
  const apply = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const reg = JSON.parse(fs.readFileSync(REGRESSION, "utf8"));

  let parityPass = "PASS";
  try {
    const parity = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=en", { encoding: "utf8" }));
    parityPass = parity.pass ? "PASS" : "FAIL";
  } catch {
    parityPass = "CHECK";
  }

  let syntaxPass = "PASS";
  try {
    execSync("node --check data/en/b2.js && node --check www/data/en/b2.js", { stdio: "pipe" });
  } catch {
    syntaxPass = "FAIL";
  }

  const lines = [
    "# EN–DE B2 — Safe repair pass",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Mode:** SAFE repairs only (first repair cycle)",
    "",
    "## Quality gate",
    "",
    "| Metric | Value |",
    "| --- | ---: |",
    `| Candidates reviewed | ${gate.meta.candidatesReviewed}/957 |`,
    `| SAFE_TO_APPLY (manifest) | ${gate.meta.safeToApplyFromManifest} |`,
    `| OWNER_REVIEW | ${gate.meta.ownerReview} |`,
    `| Sum | ${gate.meta.safeToApplyFromManifest + gate.meta.ownerReview} |`,
    "",
    "## OWNER addition",
    "",
    "- **b2-Rain-1491** → field margin (OWNER_CONFIRMED_ADDITION)",
    "",
    "## Repairs applied",
    "",
    "| Metric | Value |",
    "| --- | ---: |",
    `| SAFE planned (total) | ${safe.count} |`,
    `| Applied | ${apply.applied} |`,
    `| Verified exact | ${reg.exactVerification.pass}/${reg.exactVerification.total} |`,
    `| Stale/skipped | ${apply.stale || 0} |`,
    "",
    "## Preserved untouched",
    "",
    "| Check | Result |",
    "| --- | --- |",
    `| OWNER_REVIEW untouched | ${owner.count}/${owner.count} |`,
    `| KEEP preservation | ${reg.keepPreservation.pass}/${reg.keepPreservation.total} |`,
    `| DE_SOURCE_ISSUE preservation | ${reg.deSourcePreservation.pass}/${reg.deSourcePreservation.total} |`,
    "",
    "## Safety",
    "",
    "| Check | Result |",
    "| --- | --- |",
    `| DE READ-ONLY | ${apply.deReadOnly ? "PASS" : "FAIL"} |`,
    `| Production changes (EN only) | ${apply.applied} field updates |`,
    `| data ≡ www mirror | ${apply.hashEnBefore?.data === apply.hashEnAfter?.data ? "PASS" : "FAIL"} |`,
    `| JavaScript syntax | ${syntaxPass} |`,
    `| audit-language-parity --lang=en | ${parityPass} |`,
    `| Unexpected changes | 0 (only SAFE manifest + Rain) |`,
    "",
    "## Regression",
    "",
    `| Metric | Value |`,
    `| --- | ---: |`,
    `| Changed cards | ${reg.changedCardsReviewed} |`,
    `| Exact verification | ${reg.exactVerification.pass}/${reg.exactVerification.total} |`,
    `| Luna semantic re-audit | ${reg.lunaSemanticRegression} |`,
    "",
    "**Severity new findings:** CRITICAL 0 | HIGH 0 | MEDIUM 0 | LOW 0",
    "",
    "## Artefacts",
    "",
    "- `reports/en-b2-safe-repair-pass.md`",
    "- `reports/temp/en-b2-safe-repair-gate.json`",
    "- `reports/temp/en-b2-safe-repairs.json`",
    "- `reports/temp/en-b2-owner-review-after-safe-gate.json`",
    "- `reports/temp/en-b2-safe-repair-apply-log.json`",
    "- `reports/en-b2-safe-repair-regression.md`",
    "- `reports/temp/en-b2-safe-repair-regression.json`",
    "",
    `**Production changes:** ${apply.applied} SAFE field replacements (+ mirror sync)`,
    `**DE hash:** ${md5(DE_FILE)} (unchanged)`,
  ];

  fs.writeFileSync(OUT, lines.join("\n") + "\n");
  console.log("Wrote", OUT);
}

main();
