#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { loadG2Level } = require("./lib/content-crowdin-bridge/roundtrip");
const {
  OWNER_LEXICAL_APPLY_ROWS,
  LEXICAL_APPLY_CLOSURE_REL,
  evaluateLexicalApplyRow,
  patchHausLvInFileContent,
} = require("./lib/g2-a1-production-current/haus-owner-lexical-apply");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-owner-review");
const DRY_RUN = process.argv.includes("--dry-run");

function sha256(content) {
  return crypto.createHash("sha256").update(content, "utf8").digest("hex");
}

function assertJsSyntax(relPath) {
  execSync(`node --check ${JSON.stringify(path.join(ROOT, relPath))}`, { stdio: "pipe" });
}

function main() {
  const ownerReviewedAt = new Date().toISOString();
  const applied = [];
  const skipped = [];
  const blockers = [];

  for (const spec of OWNER_LEXICAL_APPLY_ROWS) {
    const evaluated = evaluateLexicalApplyRow(spec);
    if (!evaluated.eligible) {
      skipped.push({ language: spec.language, reason: "INELIGIBLE", blockers: evaluated.blockers });
      blockers.push({ code: "LEXICAL_ROW_INELIGIBLE", language: spec.language, blockers: evaluated.blockers });
      continue;
    }

    const dataPath = path.join(ROOT, evaluated.productionFile);
    const wwwPath = path.join(ROOT, evaluated.wwwMirror);
    if (!fs.existsSync(dataPath) || !fs.existsSync(wwwPath)) {
      skipped.push({ language: spec.language, reason: "MISSING_FILE" });
      blockers.push({ code: "MISSING_PRODUCTION_FILE", language: spec.language });
      continue;
    }

    const dataBefore = fs.readFileSync(dataPath, "utf8");
    const wwwBefore = fs.readFileSync(wwwPath, "utf8");

    if (dataBefore === wwwBefore) {
      /* mirror ok before */
    } else {
      blockers.push({ code: "PRE_APPLY_MIRROR_MISMATCH", language: spec.language });
    }

    const liveCard = loadG2Level(spec.language, "a1")[spec.cardIndex];
    if (liveCard?.lv === spec.proposed) {
      applied.push({
        language: spec.language,
        cardId: spec.cardId,
        fieldPath: spec.fieldPath,
        productionFile: evaluated.productionFile,
        wwwMirror: evaluated.wwwMirror,
        before: spec.current,
        after: spec.proposed,
        idempotent: true,
        evidenceUrl: evaluated.auditEvidenceUrl,
        evidenceSha256: evaluated.auditEvidenceSha256,
      });
      continue;
    }

    const dataPatch = patchHausLvInFileContent(dataBefore, spec.current, spec.proposed);
    const wwwPatch = patchHausLvInFileContent(wwwBefore, spec.current, spec.proposed);

    if (!dataPatch.ok || !wwwPatch.ok) {
      skipped.push({
        language: spec.language,
        reason: "PATCH_FAILED",
        data: dataPatch.code || dataPatch,
        www: wwwPatch.code || wwwPatch,
      });
      blockers.push({ code: "PATCH_FAILED", language: spec.language });
      continue;
    }

    if (!DRY_RUN) {
      fs.writeFileSync(dataPath, dataPatch.content);
      fs.writeFileSync(wwwPath, wwwPatch.content);
      assertJsSyntax(evaluated.productionFile);
      assertJsSyntax(evaluated.wwwMirror);
    }

    if (sha256(dataPatch.content) !== sha256(wwwPatch.content)) {
      blockers.push({ code: "POST_PATCH_MIRROR_MISMATCH", language: spec.language });
    }

    applied.push({
      language: spec.language,
      cardId: spec.cardId,
      fieldPath: spec.fieldPath,
      productionFile: evaluated.productionFile,
      wwwMirror: evaluated.wwwMirror,
      before: spec.current,
      after: spec.proposed,
      evidenceUrl: evaluated.auditEvidenceUrl,
      evidenceSha256: evaluated.auditEvidenceSha256,
      beforeSha256: { data: sha256(dataBefore), www: sha256(wwwBefore) },
      afterSha256: DRY_RUN ? null : { data: sha256(dataPatch.content), www: sha256(wwwPatch.content) },
    });
  }

  const pass = blockers.length === 0 && applied.length === OWNER_LEXICAL_APPLY_ROWS.length;
  const applyHead = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  const closure = {
    schemaVersion: 1,
    role: "OWNER_LEXICAL_PRODUCTION_APPLY_CLOSURE",
    generatedAt: ownerReviewedAt,
    ownerReviewedAt,
    pass,
    dryRun: DRY_RUN,
    applyAtHead: applyHead,
    changedProductionLogicalFields: applied.filter((a) => !a.idempotent).length,
    changedFiles: applied.filter((a) => !a.idempotent).length * 2,
    applied,
    skipped,
    blockers,
  };

  if (!DRY_RUN) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    fs.writeFileSync(path.join(ROOT, LEXICAL_APPLY_CLOSURE_REL), `${JSON.stringify(closure, null, 2)}\n`);
    fs.writeFileSync(
      path.join(OUT_DIR, "haus-owner-lexical-apply-report.json"),
      `${JSON.stringify(closure, null, 2)}\n`,
    );
  }

  console.log(JSON.stringify(closure, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
