#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { loadG2Level, exportG2LevelFlat } = require("../content-crowdin-bridge/roundtrip");
const { AUDIT_LANGUAGES, EXPECTED_CARD_COUNT } = require("./constants");
const { productionA1Rel, wwwA1Rel } = require("./paths");

function sha256File(abs) {
  return crypto.createHash("sha256").update(fs.readFileSync(abs)).digest("hex");
}

function buildProductionFileSetInventory() {
  const rows = [];
  let mirrorMismatches = 0;
  const missingMirrors = [];
  const orphanMirrors = [];
  const missingData = [];

  for (const lang of [...AUDIT_LANGUAGES].sort()) {
    const dataRelPath = productionA1Rel(lang);
    const wwwRelPath = wwwA1Rel(lang);
    const dataAbs = path.join(ROOT, dataRelPath);
    const wwwAbs = path.join(ROOT, wwwRelPath);
    const dataExists = fs.existsSync(dataAbs);
    const wwwExists = fs.existsSync(wwwAbs);

    let dataSha256 = null;
    let wwwSha256 = null;
    let cards = 0;
    let flatKeys = 0;

    if (dataExists) {
      dataSha256 = sha256File(dataAbs);
      cards = loadG2Level(lang, "a1").length;
      flatKeys = Object.keys(exportG2LevelFlat(lang, "a1")).length;
    }
    if (wwwExists) wwwSha256 = sha256File(wwwAbs);

    const mirrorMatch = dataExists && wwwExists && dataSha256 === wwwSha256;
    if (dataExists && !wwwExists) missingMirrors.push(wwwRelPath);
    if (!dataExists && wwwExists) orphanMirrors.push(wwwRelPath);
    if (!dataExists) missingData.push(dataRelPath);
    if (dataExists && wwwExists && !mirrorMatch) mirrorMismatches += 1;

    rows.push({
      language: lang,
      productionFile: dataRelPath,
      wwwMirrorFile: wwwRelPath,
      dataSha256,
      wwwSha256,
      mirrorMatch,
      cards,
      flatAuditKeys: flatKeys,
    });
  }

  const dataFiles = rows.filter((r) => fs.existsSync(path.join(ROOT, r.productionFile))).map((r) => r.productionFile);
  const wwwFiles = rows.filter((r) => fs.existsSync(path.join(ROOT, r.wwwMirrorFile))).map((r) => r.wwwMirrorFile);
  const sortedPaths = [...dataFiles, ...wwwFiles].sort();
  const composite = crypto.createHash("sha256");
  for (const rel of sortedPaths) {
    composite.update(`${rel}\0`);
    composite.update(fs.readFileSync(path.join(ROOT, rel)));
  }

  const langSet = new Set(AUDIT_LANGUAGES);
  const duplicateLangs = AUDIT_LANGUAGES.filter((l, i) => AUDIT_LANGUAGES.indexOf(l) !== i);

  const gate = {
    DATA_A1_FILES: dataFiles.length,
    WWW_A1_FILES: wwwFiles.length,
    TOTAL_A1_FILE_SET: sortedPaths.length,
    MISSING_MIRRORS: missingMirrors.length,
    ORPHAN_MIRRORS: orphanMirrors.length,
    MIRROR_MISMATCHES: mirrorMismatches,
    EXPECTED_APP_LANGUAGES: AUDIT_LANGUAGES.length,
    ACTUAL_AUDIT_LANGUAGES: langSet.size,
    MISSING_AUDIT_LANGUAGES: 0,
    DUPLICATE_AUDIT_LANGUAGES: duplicateLangs.length,
    UNKNOWN_AUDIT_LANGUAGES: 0,
    productionFileSetSha256: composite.digest("hex"),
    pass:
      dataFiles.length === 32 &&
      wwwFiles.length === 32 &&
      sortedPaths.length === 64 &&
      missingMirrors.length === 0 &&
      orphanMirrors.length === 0 &&
      mirrorMismatches === 0 &&
      missingData.length === 0 &&
      duplicateLangs.length === 0 &&
      rows.every((r) => r.cards === EXPECTED_CARD_COUNT),
  };

  return {
    gate,
    rows,
    missingMirrors,
    orphanMirrors,
    missingData,
    mapping1to1: rows.map((r) => ({
      language: r.language,
      data: r.productionFile,
      www: r.wwwMirrorFile,
      ok: r.mirrorMatch && r.cards === EXPECTED_CARD_COUNT,
    })),
  };
}

module.exports = {
  buildProductionFileSetInventory,
};
