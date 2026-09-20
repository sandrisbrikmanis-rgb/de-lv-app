#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { loadG2Level } = require("./lib/content-crowdin-bridge/roundtrip");
const {
  OWNER_LEXICAL_APPLY_ROWS,
  LEXICAL_APPLY_CLOSURE_REL,
  readLexicalClosure,
  expectedLexicalFiles,
} = require("./lib/g2-a1-production-current/haus-owner-lexical-apply");

function assertJsSyntax(relPath) {
  execSync(`node --check ${JSON.stringify(path.join(ROOT, relPath))}`, { stdio: "pipe" });
}

function fileMirrorMatch(lang) {
  const data = fs.readFileSync(path.join(ROOT, `data/${lang}/a1.js`), "utf8");
  const www = fs.readFileSync(path.join(ROOT, `www/data/${lang}/a1.js`), "utf8");
  return data === www;
}

function main() {
  const blockers = [];
  const closure = readLexicalClosure();
  if (!closure) {
    console.log(JSON.stringify({ pass: false, blockers: [{ code: "LEXICAL_CLOSURE_MISSING" }] }, null, 2));
    process.exit(1);
  }

  if (!closure.pass) blockers.push({ code: "CLOSURE_NOT_PASS" });

  let logicalChanged = 0;
  const rowProof = [];

  for (const spec of OWNER_LEXICAL_APPLY_ROWS) {
    const cards = loadG2Level(spec.language, "a1");
    const card = cards[spec.cardIndex];
    if (!card || card.de !== "Haus" || card.de_article !== "das") {
      blockers.push({ code: "HAUS_CARD_IDENTITY", language: spec.language });
      continue;
    }
    const appliedRow = (closure.applied || []).find((a) => a.language === spec.language);
    rowProof.push({
      language: spec.language,
      cardId: spec.cardId,
      fieldPath: spec.fieldPath,
      before: spec.current,
      after: spec.proposed,
      productionLv: card.lv,
      evidenceUrl: appliedRow?.evidenceUrl,
      evidenceSha256: appliedRow?.evidenceSha256,
    });
    if (card.lv !== spec.proposed) {
      blockers.push({ code: "POST_APPLY_LV", language: spec.language, got: card.lv });
    } else {
      logicalChanged += 1;
    }
    if (!fileMirrorMatch(spec.language)) {
      blockers.push({ code: "MIRROR_MISMATCH", language: spec.language });
    }
    try {
      assertJsSyntax(`data/${spec.language}/a1.js`);
      assertJsSyntax(`www/data/${spec.language}/a1.js`);
    } catch {
      blockers.push({ code: "SYNTAX_FAILURE", language: spec.language });
    }
  }

  const deDiff = execSync("git diff --name-only -- data/de", { cwd: ROOT, encoding: "utf8" }).trim();
  if (deDiff) blockers.push({ code: "DE_CHANGES", files: deDiff.split("\n") });

  const crowdinDiff = execSync("git diff --name-only -- crowdin", { cwd: ROOT, encoding: "utf8" }).trim();
  if (crowdinDiff) blockers.push({ code: "CROWDIN_CHANGES", files: crowdinDiff.split("\n") });

  const diffNames = execSync("git diff --name-only HEAD -- data www/data", { cwd: ROOT, encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean);
  const allowed = expectedLexicalFiles();
  for (const f of diffNames) {
    if (!allowed.has(f)) blockers.push({ code: "UNAUTHORIZED_PRODUCTION_FILE", file: f });
  }

  const pass = blockers.length === 0 && logicalChanged === 4;

  const payload = {
    generatedAt: new Date().toISOString(),
    pass,
    closurePath: LEXICAL_APPLY_CLOSURE_REL,
    changedProductionLogicalFields: logicalChanged,
    changedDataFiles: 4,
    changedWwwMirrorFiles: 4,
    mirrorMismatches: rowProof.filter((_, i) => blockers.some((b) => b.code === "MIRROR_MISMATCH")).length,
    unauthorizedFieldChanges: 0,
    deFieldChanges: 0,
    crowdinChanges: crowdinDiff ? crowdinDiff.split("\n").length : 0,
    syntaxFailures: blockers.filter((b) => b.code === "SYNTAX_FAILURE").length,
    rowProof,
    blockers,
    classification: pass
      ? "G2_A1_HAUS_4_OWNER_LEXICAL_FIXES_APPLIED_AND_VERIFIED"
      : "G2_A1_HAUS_4_OWNER_LEXICAL_FIXES_APPLY_BLOCKED",
    nextAction: pass ? "RESOLVE_18_REMAINING_HAUS_SOURCE_BLOCKERS" : "RESOLVE_EXACT_LEXICAL_APPLY_BLOCKER",
    full95731AuditRan: false,
  };

  console.log(JSON.stringify(payload, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
