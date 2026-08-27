#!/usr/bin/env node
"use strict";

/**
 * Write-safety integration tests (uses temp copy + git, never touches production):
 * 1. Copy languages/ + crowdin/ui to temp, run import --write, expect git diff = 0 (32 langs).
 * 2. Synthetic single-value change: diff must touch only the changed string literal.
 * 3. Unknown Crowdin key outside LV source set must FAIL.
 */

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execSync } = require("child_process");
const {
  ROOT,
  UI_LANGUAGES,
  CROWDIN_SOURCE_LANG,
  prepareUiCrowdinImport,
  parseCrowdinJson,
  getLvSourceKeySet,
} = require("./lib/ui-crowdin-bridge");

function copyUiTree(srcRoot, destRoot) {
  for (const lang of UI_LANGUAGES) {
    const rel = path.join("languages", lang, "ui.js");
    const src = path.join(srcRoot, rel);
    const dest = path.join(destRoot, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
  const crowdinSrc = path.join(srcRoot, "crowdin", "ui");
  const crowdinDest = path.join(destRoot, "crowdin", "ui");
  fs.mkdirSync(crowdinDest, { recursive: true });
  for (const file of fs.readdirSync(crowdinSrc)) {
    if (file.endsWith(".json")) {
      fs.copyFileSync(path.join(crowdinSrc, file), path.join(crowdinDest, file));
    }
  }
}

function runImportWrite(root, langs = UI_LANGUAGES) {
  const langArgs = langs.map((l) => `--lang ${l}`).join(" ");
  execSync(`node scripts/import-ui-crowdin.js --write --root ${JSON.stringify(root)} ${langArgs}`, {
    cwd: ROOT,
    stdio: "pipe",
  });
}

function gitInitCommit(dir) {
  execSync("git init -q", { cwd: dir });
  execSync("git config user.email 'ui-crowdin-test@example.com'", { cwd: dir });
  execSync("git config user.name 'ui-crowdin-test'", { cwd: dir });
  execSync("git add languages", { cwd: dir });
  execSync("git commit -q -m baseline", { cwd: dir });
}

function expectGitCleanLanguages(root, label) {
  execSync("git diff --exit-code -- languages/", { cwd: root, stdio: "pipe" });
  console.log(`OK ${label}: git diff --exit-code -- languages/ = PASS`);
}

function testIdenticalImportWriteAllLanguages() {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ui-crowdin-write-safe-"));
  copyUiTree(ROOT, tmpRoot);
  gitInitCommit(tmpRoot);
  runImportWrite(tmpRoot);
  expectGitCleanLanguages(tmpRoot, "32-language identical import --write");
  fs.rmSync(tmpRoot, { recursive: true, force: true });
}

function testSingleValueSurgicalDiff() {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ui-crowdin-single-change-"));
  copyUiTree(ROOT, tmpRoot);
  gitInitCommit(tmpRoot);

  const lvJsonPath = path.join(tmpRoot, "crowdin", "ui", `${CROWDIN_SOURCE_LANG}.json`);
  const lvFlat = parseCrowdinJson(fs.readFileSync(lvJsonPath, "utf8"));
  const targetKey = "buttons.close";
  const originalValue = lvFlat[targetKey];
  const mutatedValue = `${originalValue} [crowdin-test]`;
  lvFlat[targetKey] = mutatedValue;
  fs.writeFileSync(lvJsonPath, `${JSON.stringify(lvFlat, null, 2)}\n`, "utf8");

  runImportWrite(tmpRoot, [CROWDIN_SOURCE_LANG]);

  const diff = execSync("git diff --unified=0 -- languages/", {
    cwd: tmpRoot,
    encoding: "utf8",
  });
  const oldLiteral = JSON.stringify(originalValue);
  const newLiteral = JSON.stringify(mutatedValue);
  if (!diff.includes(oldLiteral) || !diff.includes(newLiteral)) {
    throw new Error(`Expected diff to contain ${oldLiteral} -> ${newLiteral}\n${diff}`);
  }
  const diffLines = diff.split("\n").filter((line) => line.startsWith("+") || line.startsWith("-"));
  const contentLines = diffLines.filter((line) => !line.startsWith("+++") && !line.startsWith("---"));
  const removed = contentLines.filter((line) => line.startsWith("-"));
  const added = contentLines.filter((line) => line.startsWith("+"));
  if (removed.length !== 1 || added.length !== 1) {
    throw new Error(`Expected exactly one removed and one added content line, got ${removed.length}/${added.length}\n${diff}`);
  }
  if (!removed[0].includes(oldLiteral) || !added[0].includes(newLiteral)) {
    throw new Error(`Diff lines do not match the single targeted string change\n${diff}`);
  }
  if (diff.includes("window.LANGUAGE_UI_STRINGS = {") && diff.split("\n").length > 8) {
    throw new Error(`Diff appears to include whole-file reformatting\n${diff}`);
  }
  console.log(`OK single-value change: surgical diff only for ${targetKey}`);

  fs.rmSync(tmpRoot, { recursive: true, force: true });
}

function testUnknownCrowdinKeyFails() {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ui-crowdin-unknown-key-"));
  copyUiTree(ROOT, tmpRoot);
  const lvJsonPath = path.join(tmpRoot, "crowdin", "ui", `${CROWDIN_SOURCE_LANG}.json`);
  const lvFlat = parseCrowdinJson(fs.readFileSync(lvJsonPath, "utf8"));
  lvFlat["crowdin.unknown.test.key"] = "must fail";
  fs.writeFileSync(lvJsonPath, `${JSON.stringify(lvFlat, null, 2)}\n`, "utf8");

  const result = prepareUiCrowdinImport(CROWDIN_SOURCE_LANG, { root: tmpRoot });
  if (result.ok) {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
    throw new Error("Expected unknown Crowdin key import to FAIL");
  }
  if (!result.errors.some((e) => e.includes("Unknown Crowdin key"))) {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
    throw new Error(`Expected unknown key error, got: ${result.errors.join("; ")}`);
  }
  console.log("OK unknown Crowdin key outside LV source set is rejected");

  fs.rmSync(tmpRoot, { recursive: true, force: true });
}

function main() {
  const lvKeys = getLvSourceKeySet();
  console.log(`LV source key set: ${lvKeys.size} keys`);
  testUnknownCrowdinKeyFails();
  testIdenticalImportWriteAllLanguages();
  testSingleValueSurgicalDiff();
  console.log("");
  console.log("UI Crowdin import write-safety tests passed.");
}

main();
