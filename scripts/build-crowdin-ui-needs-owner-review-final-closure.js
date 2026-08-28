#!/usr/bin/env node
"use strict";

/**
 * Final closure report after NEEDS_OWNER_REVIEW 78 LABOT apply.
 * Run: node scripts/build-crowdin-ui-needs-owner-review-final-closure.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
  ROOT,
  UI_LANGUAGES,
  CROWDIN_SOURCE_LANG,
  parseCrowdinJson,
  flattenUiStrings,
  loadUiObject,
  UI_JS_REL,
  extractPlaceholderMultiset,
  extractHtmlTagStructure,
} = require("./lib/ui-crowdin-bridge");
const { classifySameRow } = require("./lib/crowdin-ui-untranslated-classify");

const DECISIONS_JSON = path.join(ROOT, "reports", "crowdin-ui-needs-owner-review-decisions.json");
const APPLY_PROOF_JSON = path.join(ROOT, "reports", "crowdin-ui-needs-owner-review-apply-proof.json");
const OUT_MD = path.join(ROOT, "reports", "crowdin-ui-needs-owner-review-final-closure.md");

function multisetEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if ((a[key] || 0) !== (b[key] || 0)) return false;
  }
  return true;
}

function main() {
  const generatedAt = new Date().toISOString();
  const commitAfter = execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();

  const decisions = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const applyProof = JSON.parse(fs.readFileSync(APPLY_PROOF_JSON, "utf8"));

  const labotRows = decisions.rows.filter(
    (r) => r.ownerStatus === "LABOT" && r.ownerApproved === true
  );
  const nelabotRows = decisions.rows.filter(
    (r) => r.ownerStatus === "NELABOT" && r.ownerApproved === true
  );

  const lvFlat = parseCrowdinJson(
    fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${CROWDIN_SOURCE_LANG}.json`), "utf8")
  );
  const lvKeys = Object.keys(lvFlat).sort();
  const targetLangs = UI_LANGUAGES.filter((l) => l !== CROWDIN_SOURCE_LANG);

  let realUntranslated = 0;
  let needsOwnerReview = 0;
  let placeholderErrors = 0;
  let htmlErrors = 0;
  let missingKeys = 0;
  let extraKeys = 0;
  let emptyValues = 0;

  let nelabotUnchanged = 0;
  let nelabotMismatch = 0;
  let labotVerified = 0;
  let labotMismatch = 0;

  for (const row of nelabotRows) {
    const jsonFlat = parseCrowdinJson(
      fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${row.language}.json`), "utf8")
    );
    const uiFlat = flattenUiStrings(loadUiObject(UI_JS_REL(row.language)).obj);
    if (jsonFlat[row.key] === row.current && uiFlat[row.key] === row.current) {
      nelabotUnchanged += 1;
    } else {
      nelabotMismatch += 1;
    }
  }

  for (const row of labotRows) {
    const jsonFlat = parseCrowdinJson(
      fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${row.language}.json`), "utf8")
    );
    const uiFlat = flattenUiStrings(loadUiObject(UI_JS_REL(row.language)).obj);
    if (jsonFlat[row.key] === row.newValue && uiFlat[row.key] === row.newValue) {
      labotVerified += 1;
    } else {
      labotMismatch += 1;
    }
  }

  let parityErrors = 0;

  for (const repoLang of targetLangs) {
    const jsonPath = path.join(ROOT, "crowdin", "ui", `${repoLang}.json`);
    const jsonFlat = parseCrowdinJson(fs.readFileSync(jsonPath, "utf8"));
    const targetKeys = new Set(Object.keys(jsonFlat));
    missingKeys += lvKeys.filter((k) => !targetKeys.has(k)).length;
    extraKeys += Object.keys(jsonFlat).filter((k) => !lvFlat[k]).length;
    emptyValues += lvKeys.filter((k) => targetKeys.has(k) && jsonFlat[k] === "").length;

    const uiFlat = flattenUiStrings(loadUiObject(UI_JS_REL(repoLang)).obj);
    for (const key of Object.keys(jsonFlat)) {
      if (jsonFlat[key] !== uiFlat[key]) parityErrors += 1;
    }

    for (const key of lvKeys) {
      if (!targetKeys.has(key)) continue;
      const source = lvFlat[key];
      const target = jsonFlat[key];
      if (!multisetEqual(extractPlaceholderMultiset(source), extractPlaceholderMultiset(target))) {
        placeholderErrors += 1;
      }
      if (extractHtmlTagStructure(source) !== extractHtmlTagStructure(target)) {
        htmlErrors += 1;
      }
      if (target === source) {
        const [status] = classifySameRow(key, source, repoLang);
        if (status === "REAL_UNTRANSLATED") realUntranslated += 1;
        if (status === "NEEDS_OWNER_REVIEW") needsOwnerReview += 1;
      }
    }
  }

  const gates = {
    REQUESTED: 78,
    APPLIED_VERIFIED: applyProof.summary.APPLIED_VERIFIED,
    CURRENT_VALUE_MISMATCH: applyProof.summary.CURRENT_VALUE_MISMATCH,
    FAILED: applyProof.summary.FAILED,
    UNEXPECTED_CHANGES: applyProof.summary.UNEXPECTED_CHANGES,
    CROWDIN_VERIFIED: applyProof.summary.CROWDIN_VERIFIED,
    NELABOT_UNCHANGED: nelabotUnchanged,
    placeholderErrors,
    htmlErrors,
    missingKeys,
    extraKeys,
    emptyValues,
    REAL_UNTRANSLATED: realUntranslated,
    NEEDS_OWNER_REVIEW: needsOwnerReview,
    LABOT_REPO_VERIFIED: labotVerified,
    LABOT_REPO_MISMATCH: labotMismatch,
    NELABOT_MISMATCH: nelabotMismatch,
    jsonUiParityErrors: parityErrors,
  };

  let i18nVerifyPass = false;
  let i18nVerifyOutput = "";
  try {
    i18nVerifyOutput = execSync("npm run i18n:ui:verify", {
      encoding: "utf8",
      cwd: ROOT,
    });
    i18nVerifyPass = !i18nVerifyOutput.includes("FAILED");
  } catch (e) {
    i18nVerifyOutput = (e.stdout || "") + (e.stderr || "");
  }
  gates.i18nUiVerifyPass = i18nVerifyPass;

  const allPass =
    gates.REQUESTED === 78 &&
    gates.APPLIED_VERIFIED === 78 &&
    gates.CURRENT_VALUE_MISMATCH === 0 &&
    gates.FAILED === 0 &&
    gates.UNEXPECTED_CHANGES === 0 &&
    gates.CROWDIN_VERIFIED === 78 &&
    gates.NELABOT_UNCHANGED === 116 &&
    gates.NELABOT_MISMATCH === 0 &&
    gates.LABOT_REPO_VERIFIED === 78 &&
    gates.LABOT_REPO_MISMATCH === 0 &&
    gates.placeholderErrors === 0 &&
    gates.htmlErrors === 0 &&
    gates.missingKeys === 0 &&
    gates.extraKeys === 0 &&
    gates.jsonUiParityErrors === 0 &&
    gates.REAL_UNTRANSLATED === 0 &&
    gates.NEEDS_OWNER_REVIEW === 0 &&
    gates.i18nUiVerifyPass;

  const md = [
    "# Crowdin UI NEEDS_OWNER_REVIEW — final closure (194/194)",
    "",
    `**Generated:** ${generatedAt}  `,
    `**Commit after apply:** \`${commitAfter}\`  `,
    `**Commit before apply:** \`${applyProof.summary.commitBefore}\`  `,
    "PR: **#691**",
    "",
    `## Gala verdikts: **${allPass ? "PASS" : "FAIL/BLOCKED"}**`,
    "",
    "## Obligātie vārti",
    "",
    "| Metrika | Prasība | Faktiski |",
    "| --- | --- | --- |",
    `| REQUESTED | 78 | ${gates.REQUESTED} |`,
    `| APPLIED_VERIFIED | 78/78 | ${gates.APPLIED_VERIFIED}/78 |`,
    `| CURRENT_VALUE_MISMATCH | 0 | ${gates.CURRENT_VALUE_MISMATCH} |`,
    `| FAILED | 0 | ${gates.FAILED} |`,
    `| UNEXPECTED_CHANGES | 0 | ${gates.UNEXPECTED_CHANGES} |`,
    `| CROWDIN_VERIFIED | 78/78 | ${gates.CROWDIN_VERIFIED}/78 |`,
    `| NELABOT_UNCHANGED | 116/116 | ${gates.NELABOT_UNCHANGED}/116 |`,
    `| placeholderErrors | 0 | ${gates.placeholderErrors} |`,
    `| htmlErrors | 0 | ${gates.htmlErrors} |`,
    `| missingKeys | 0 | ${gates.missingKeys} |`,
    `| extraKeys | 0 | ${gates.extraKeys} |`,
    `| emptyValues | 0 | ${gates.emptyValues} |`,
    `| REAL_UNTRANSLATED | 0 | ${gates.REAL_UNTRANSLATED} |`,
    `| NEEDS_OWNER_REVIEW | 0 | ${gates.NEEDS_OWNER_REVIEW} |`,
    `| npm run i18n:ui:verify | PASS | ${gates.i18nUiVerifyPass ? "PASS" : "FAIL"} |`,
    "",
    "## Izpildītās komandas",
    "",
    "1. `node scripts/apply-crowdin-ui-needs-owner-review.js --apply`",
    "2. `node scripts/audit-crowdin-ui-untranslated.js`",
    "3. `npm run i18n:ui:verify`",
    "4. `node scripts/build-crowdin-ui-needs-owner-review-final-closure.js`",
    "",
    "## Mainītie production faili (78 LABOT)",
    "",
    ...applyProof.summary.changedFiles.map((f) => `- \`${f}\``),
    "",
    "## 194 NEEDS_OWNER_REVIEW closure",
    "",
    `- **78 LABOT:** COPY-ONLY apply repo + Crowdin — \`${APPLY_PROOF_JSON.replace(`${ROOT}/`, "")}\``,
    `- **116 NELABOT:** OWNER_ACCEPTED, unchanged — klasificēti kā INTENTIONAL_SAME auditā`,
  ];

  if (!gates.i18nUiVerifyPass) {
    md.push("", "### i18n:ui:verify output (snippet)", "", "```", i18nVerifyOutput.slice(-800), "```");
  }

  md.push(
    "",
    "## PR #691 status",
    "",
    allPass
      ? "Visi vārti PASS — PR var atzīmēt gatavu review (vēl Draft līdz explicit merge)."
      : "PR paliek **Draft** — viens vai vairāki vārti nav PASS.",
    ""
  );

  fs.writeFileSync(OUT_MD, `${md.join("\n")}\n`, "utf8");
  console.log(JSON.stringify({ result: allPass ? "PASS" : "FAIL", gates }, null, 2));
  if (!allPass) process.exit(1);
}

main();
