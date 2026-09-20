#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  PREAUTHORIZED_CAP_ROWS,
  evaluatePreauthorizedRow,
  patchHausLvInFileContent,
} = require("./lib/g2-a1-production-current/haus-preauthorized-capitalization");
const { loadG2Level } = require("./lib/content-crowdin-bridge/roundtrip");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-owner-review");
const DRY_RUN = process.argv.includes("--dry-run");

function sha256(content) {
  return crypto.createHash("sha256").update(content, "utf8").digest("hex");
}

function assertJsSyntax(relPath) {
  execSync(`node --check ${JSON.stringify(path.join(ROOT, relPath))}`, { stdio: "pipe" });
}

function main() {
  const applied = [];
  const skipped = [];
  const blockers = [];

  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    const evaluated = evaluatePreauthorizedRow(spec);
    if (!evaluated.eligible) {
      skipped.push({ language: spec.language, reason: "INELIGIBLE", blockers: evaluated.blockers });
      continue;
    }

    const dataRel = evaluated.productionFile;
    const wwwRel = evaluated.wwwMirror;
    const dataPath = path.join(ROOT, dataRel);
    const wwwPath = path.join(ROOT, wwwRel);
    if (!fs.existsSync(dataPath) || !fs.existsSync(wwwPath)) {
      skipped.push({ language: spec.language, reason: "MISSING_FILE" });
      blockers.push({ code: "MISSING_PRODUCTION_FILE", language: spec.language });
      continue;
    }

    const cards = loadG2Level(spec.language, "a1");
    const card = cards[spec.cardIndex];
    if (!card || card.lv !== spec.current) {
      skipped.push({ language: spec.language, reason: "CURRENT_MISMATCH", got: card?.lv });
      continue;
    }

    const dataBefore = fs.readFileSync(dataPath, "utf8");
    const wwwBefore = fs.readFileSync(wwwPath, "utf8");
    const dataPatch = patchHausLvInFileContent(dataBefore, spec.current, spec.proposed);
    const wwwPatch = patchHausLvInFileContent(wwwBefore, spec.current, spec.proposed);
    if (!dataPatch.ok || !wwwPatch.ok) {
      skipped.push({
        language: spec.language,
        reason: "PATCH_FAILED",
        data: dataPatch.code,
        www: wwwPatch.code,
      });
      blockers.push({ code: "PATCH_FAILED", language: spec.language });
      continue;
    }

    if (!DRY_RUN) {
      fs.writeFileSync(dataPath, dataPatch.content);
      fs.writeFileSync(wwwPath, wwwPatch.content);
      assertJsSyntax(dataRel);
      assertJsSyntax(wwwRel);
    }

    applied.push({
      language: spec.language,
      cardId: spec.cardId,
      fieldPath: spec.fieldPath,
      productionFile: dataRel,
      wwwMirror: wwwRel,
      current: spec.current,
      new: spec.proposed,
      evidenceUrl: evaluated.auditEvidenceUrl,
      evidenceSha256: evaluated.auditEvidenceSha256,
      beforeSha256: { data: sha256(dataBefore), www: sha256(wwwBefore) },
      afterSha256: DRY_RUN
        ? null
        : { data: sha256(dataPatch.content), www: sha256(wwwPatch.content) },
    });
  }

  const manifestPath = path.join(OUT_DIR, "haus-owner-review-manifest.json");
  if (!DRY_RUN && fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    manifest.productionApply = applied.length === PREAUTHORIZED_CAP_ROWS.length;
    manifest.productionApplyAt = new Date().toISOString();
    manifest.preauthorizedCapitalizationApplied = applied.length;
    manifest.preauthorizedCapitalizationSkipped = skipped.length;
    if (manifest.productionApply) {
      manifest.classification = "G2_A1_HAUS_PREAUTHORIZED_CAPITALIZATION_FIXES_APPLIED_AND_VERIFIED";
      manifest.nextAction = "OWNER_REVIEW_4_LEXICAL_HAUS_FINDINGS_AND_18_SOURCE_BLOCKERS";
    }
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    pass: blockers.length === 0 && applied.length === PREAUTHORIZED_CAP_ROWS.length,
    appliedCount: applied.length,
    skippedCount: skipped.length,
    applied,
    skipped,
    blockers,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(OUT_DIR, "haus-preauthorized-capitalization-apply.json"),
    `${JSON.stringify(report, null, 2)}\n`,
  );

  console.log(JSON.stringify(report, null, 2));
  process.exit(report.pass ? 0 : 1);
}

main();
