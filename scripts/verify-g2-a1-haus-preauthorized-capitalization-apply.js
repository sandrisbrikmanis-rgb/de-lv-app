#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  PREAUTHORIZED_CAP_ROWS,
  LEXICAL_FINDING_LANGS,
} = require("./lib/g2-a1-production-current/haus-preauthorized-capitalization");
const { productionA1Rel, wwwA1Rel } = require("./lib/g2-a1-production-current/paths");
const { loadG2Level } = require("./lib/content-crowdin-bridge/roundtrip");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-owner-review");

function sha256(content) {
  return crypto.createHash("sha256").update(content, "utf8").digest("hex");
}

function listProductionDiffFiles() {
  const diff = execSync("git diff --name-only -- data www/data", { cwd: ROOT, encoding: "utf8" }).trim();
  return diff ? diff.split("\n").filter(Boolean) : [];
}

function main() {
  const blockers = [];
  const applyReportPath = path.join(OUT_DIR, "haus-preauthorized-capitalization-apply.json");
  if (!fs.existsSync(applyReportPath)) {
    blockers.push({ code: "MISSING_APPLY_REPORT" });
  }
  const applyReport = applyReportPath && fs.existsSync(applyReportPath) ? JSON.parse(fs.readFileSync(applyReportPath, "utf8")) : null;
  if (applyReport && !applyReport.pass) {
    blockers.push({ code: "APPLY_REPORT_NOT_PASS" });
  }

  const expectedFiles = new Set();
  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    expectedFiles.add(productionA1Rel(spec.language));
    expectedFiles.add(wwwA1Rel(spec.language));
  }

  const diffFiles = listProductionDiffFiles();
  for (const f of diffFiles) {
    if (!expectedFiles.has(f)) {
      blockers.push({ code: "UNAUTHORIZED_PRODUCTION_FILE", file: f });
    }
  }
  for (const f of expectedFiles) {
    if (!diffFiles.includes(f) && applyReport?.appliedCount === PREAUTHORIZED_CAP_ROWS.length) {
      blockers.push({ code: "EXPECTED_FILE_NOT_IN_DIFF", file: f });
    }
  }

  let mirrorMismatches = 0;
  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    const dataRel = productionA1Rel(spec.language);
    const wwwRel = wwwA1Rel(spec.language);
    const dataPath = path.join(ROOT, dataRel);
    const wwwPath = path.join(ROOT, wwwRel);
    const dataSha = sha256(fs.readFileSync(dataPath, "utf8"));
    const wwwSha = sha256(fs.readFileSync(wwwPath, "utf8"));
    if (dataSha !== wwwSha) {
      mirrorMismatches += 1;
      blockers.push({ code: "MIRROR_MISMATCH", language: spec.language });
    }

    const cards = loadG2Level(spec.language, "a1");
    const card = cards[spec.cardIndex];
    if (!card || card.lv !== spec.proposed) {
      blockers.push({ code: "POST_APPLY_LV_MISMATCH", language: spec.language, got: card?.lv });
    }
    if (card && card.de !== "Haus") {
      blockers.push({ code: "DE_FIELD_CHANGED", language: spec.language });
    }
  }

  for (const lang of LEXICAL_FINDING_LANGS) {
    const cards = loadG2Level(lang, "a1");
    const inv = cards[3];
    const expected = { sk: "Domov", nb: "Maya", nn: "Maya", fi: "Maja" }[lang];
    if (inv && inv.lv !== expected) {
      blockers.push({ code: "LEXICAL_LV_CHANGED", language: lang, got: inv.lv });
    }
  }

  const deDiff = execSync("git diff --name-only -- data/de", { cwd: ROOT, encoding: "utf8" }).trim();
  if (deDiff) blockers.push({ code: "DE_CHANGED", files: deDiff.split("\n") });

  const crowdinDiff = execSync("git diff --name-only -- crowdin", { cwd: ROOT, encoding: "utf8" }).trim();
  if (crowdinDiff) blockers.push({ code: "CROWDIN_CHANGED", files: crowdinDiff.split("\n") });

  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    const dataRel = productionA1Rel(spec.language);
    const wwwRel = wwwA1Rel(spec.language);
    try {
      execSync(`node --check ${JSON.stringify(path.join(ROOT, dataRel))}`, { stdio: "pipe" });
      execSync(`node --check ${JSON.stringify(path.join(ROOT, wwwRel))}`, { stdio: "pipe" });
    } catch {
      blockers.push({ code: "SYNTAX_FAILURE", language: spec.language });
    }
  }

  const changedFieldCount = PREAUTHORIZED_CAP_ROWS.length;
  const payload = {
    generatedAt: new Date().toISOString(),
    pass: blockers.length === 0,
    changedProductionFieldCount: changedFieldCount,
    unauthorizedProductionFieldChanges: blockers.filter((b) => b.code === "UNAUTHORIZED_PRODUCTION_FILE").length,
    deChanges: deDiff ? deDiff.split("\n").length : 0,
    crowdinChanges: crowdinDiff ? crowdinDiff.split("\n").length : 0,
    mirrorMismatches,
    syntaxFailures: blockers.filter((b) => b.code === "SYNTAX_FAILURE").length,
    diffFileCount: diffFiles.length,
    blockers,
  };

  fs.writeFileSync(
    path.join(OUT_DIR, "haus-preauthorized-capitalization-apply-verification.json"),
    `${JSON.stringify(payload, null, 2)}\n`,
  );
  console.log(JSON.stringify(payload, null, 2));
  process.exit(payload.pass ? 0 : 1);
}

main();
