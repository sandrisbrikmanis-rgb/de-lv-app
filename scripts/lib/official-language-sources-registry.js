#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const APVIENOTS_REL = "docs_and_rules/MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md";
const LEGACY_APVIENOTS_REL = "docs_and_rules/MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI.md";
const REGISTRY_SECTION_TITLE = "# 3. LANGUAGE AUTHORITY REGISTRY — 33 VALODAS";

/** 32 app locales (repo folders); Greek app code is `gr`, standard authority code `el`. */
const APP_LANGUAGE_CODES = [
  "lv", "lt", "ru", "pl", "uk", "et", "en", "ro", "bg", "tr", "gr", "sq", "mk", "sl", "bs", "sr",
  "hr", "sk", "cs", "fi", "sv", "nb", "nn", "da", "nl", "lb", "fr", "it", "es", "pt", "hu", "is",
];

const URL_RE = /https?:\/\/[^\s<>"')\]|]+/gi;

function stripMarkdownBold(s) {
  return String(s || "")
    .replace(/\*\*/g, "")
    .trim();
}

function parseRegistryTable(apvienotsText) {
  const sectionIdx = apvienotsText.indexOf(REGISTRY_SECTION_TITLE);
  if (sectionIdx < 0) {
    return { pass: false, error: "REGISTRY_SECTION_NOT_FOUND", rows: [] };
  }

  const afterSection = apvienotsText.slice(sectionIdx);
  const nextMajor = afterSection.search(/\n# [^#]/);
  const sectionBody = nextMajor > 0 ? afterSection.slice(0, nextMajor) : afterSection;

  const lines = sectionBody.split(/\r?\n/);
  const rows = [];
  for (const line of lines) {
    if (!line.trim().startsWith("|")) continue;
    if (/^\|\s*#/.test(line)) continue;
    if (/^\|\s*---/.test(line)) continue;

    const cells = line
      .split("|")
      .map((c) => c.trim())
      .filter((c, i, arr) => !(i === 0 && c === "") && !(i === arr.length - 1 && c === ""));

    if (cells.length < 5) continue;

    const indexRaw = stripMarkdownBold(cells[0]);
    const index = Number(indexRaw);
    const codeRaw = cells[1];
    const languageName = stripMarkdownBold(cells[2]);
    const authorityName = stripMarkdownBold(cells[3]);
    const urlField = stripMarkdownBold(cells[4]);

    let standardCode;
    let appCode;
    if (/`el`\s*\/\s*app\s*`gr`/i.test(codeRaw)) {
      standardCode = "el";
      appCode = "gr";
    } else {
      const codeMatch = stripMarkdownBold(codeRaw).match(/`([a-z]{2})`/);
      standardCode = codeMatch ? codeMatch[1] : stripMarkdownBold(codeRaw).replace(/`/g, "").trim();
      appCode = standardCode;
    }

    const urls = [...(urlField.match(URL_RE) || [])];

    rows.push({
      index,
      standardCode,
      appCode,
      languageName,
      authorityName,
      urlField,
      urls,
      rawCodeCell: cells[1],
    });
  }

  return { pass: true, rows };
}

function verifyEmbeddedLanguageRegistry(root) {
  const apvienotsPath = path.join(root, APVIENOTS_REL);
  const legacyPath = path.join(root, LEGACY_APVIENOTS_REL);

  if (!fs.existsSync(apvienotsPath)) {
    return fail("APVIENOTS_FILE_MISSING", `Missing ${APVIENOTS_REL}`);
  }
  if (fs.existsSync(legacyPath)) {
    return fail("LEGACY_APVIENOTS_FILE_EXISTS", `Forbidden legacy file: ${LEGACY_APVIENOTS_REL}`);
  }

  const legacyPattern = /MASTER_1\.12_LINGVISTISKA_AUDITA_GROZIJUMI\.md(?!_APVIENOTS)/g;
  let legacyRefs = 0;
  const docsDir = path.join(root, "docs_and_rules");
  if (fs.existsSync(docsDir)) {
    for (const name of fs.readdirSync(docsDir)) {
      if (!name.endsWith(".md")) continue;
      const rel = path.join("docs_and_rules", name);
      if (rel === APVIENOTS_REL) continue;
      const hits = fs.readFileSync(path.join(root, rel), "utf8").match(legacyPattern);
      if (hits?.length) legacyRefs += hits.length;
    }
  }

  if (legacyRefs > 0) {
    return fail("LEGACY_APVIENOTS_REFERENCES", `Live references to legacy filename: ${legacyRefs}`);
  }

  const text = fs.readFileSync(apvienotsPath, "utf8");
  const parsed = parseRegistryTable(text);
  if (!parsed.pass) {
    return fail(parsed.error || "REGISTRY_PARSE_FAIL", "Could not parse embedded registry");
  }

  const rows = parsed.rows;
  const EMBEDDED_LANGUAGE_REGISTRY_COUNT = rows.length;

  const indices = rows.map((r) => r.index);
  const expectedIndices = Array.from({ length: 33 }, (_, i) => i + 1);
  const missingIndices = expectedIndices.filter((n) => !indices.includes(n));
  const duplicateIndices = indices.filter((n, i) => indices.indexOf(n) !== i);

  const standardCodes = rows.map((r) => r.standardCode);
  const LANGUAGE_CODE_DUPLICATES = standardCodes.filter((c, i) => standardCodes.indexOf(c) !== i);

  const registryAppCodes = new Set(rows.map((r) => r.appCode));
  const registryStandardCodes = new Set(rows.map((r) => r.standardCode));

  const missingApp = APP_LANGUAGE_CODES.filter((c) => !registryAppCodes.has(c));
  const hasDe = registryStandardCodes.has("de") || registryAppCodes.has("de");
  const hasBg = registryStandardCodes.has("bg");
  const elGrMappingPass =
    rows.some((r) => r.standardCode === "el" && r.appCode === "gr") &&
    registryAppCodes.has("gr");

  const emptyMandatoryFields = [];
  const invalidUrlFields = [];

  for (const r of rows) {
    if (!r.standardCode) emptyMandatoryFields.push({ index: r.index, field: "code" });
    if (!r.languageName) emptyMandatoryFields.push({ index: r.index, field: "languageName" });
    if (!r.authorityName) emptyMandatoryFields.push({ index: r.index, field: "authorityName" });
    if (!r.urlField) emptyMandatoryFields.push({ index: r.index, field: "urlField" });
    if (r.urls.length === 0) invalidUrlFields.push({ index: r.index, reason: "no_valid_url" });
  }

  const UNKNOWN_LANGUAGE_CODES = standardCodes.filter(
    (c) => !APP_LANGUAGE_CODES.includes(c === "el" ? "gr" : c) && c !== "de",
  );

  const pass =
    EMBEDDED_LANGUAGE_REGISTRY_COUNT === 33 &&
    missingIndices.length === 0 &&
    duplicateIndices.length === 0 &&
    LANGUAGE_CODE_DUPLICATES.length === 0 &&
    missingApp.length === 0 &&
    hasDe &&
    hasBg &&
    elGrMappingPass &&
    emptyMandatoryFields.length === 0 &&
    invalidUrlFields.length === 0 &&
    UNKNOWN_LANGUAGE_CODES.length === 0;

  return {
    pass,
    blockerCode: pass ? null : "EMBEDDED_LANGUAGE_REGISTRY_FAIL",
    blockerMessage: pass
      ? null
      : `registry=${EMBEDDED_LANGUAGE_REGISTRY_COUNT} missingIdx=${missingIndices.length} missingApp=${missingApp.join(",")}`,
    registryDocument: APVIENOTS_REL,
    registrySection: REGISTRY_SECTION_TITLE,
    EMBEDDED_LANGUAGE_REGISTRY_COUNT,
    LANGUAGE_CODE_DUPLICATES: LANGUAGE_CODE_DUPLICATES.length,
    MISSING_LANGUAGE_CODES: missingApp.length,
    UNKNOWN_LANGUAGE_CODES: UNKNOWN_LANGUAGE_CODES.length,
    missingLanguageCodesList: missingApp,
    unknownLanguageCodesList: UNKNOWN_LANGUAGE_CODES,
    duplicateLanguageCodesList: [...new Set(LANGUAGE_CODE_DUPLICATES)],
    missingIndices,
    duplicateIndices,
    elGrMappingPass,
    dePresentPass: hasDe,
    bgPresentPass: hasBg,
    emptyMandatoryFieldCount: emptyMandatoryFields.length,
    invalidUrlFieldCount: invalidUrlFields.length,
    emptyMandatoryFields: emptyMandatoryFields.slice(0, 10),
    invalidUrlFields: invalidUrlFields.slice(0, 10),
    coverageRows: rows.map((r) => ({
      index: r.index,
      standardCode: r.standardCode,
      appCode: r.appCode,
      languageName: r.languageName,
      authorityName: r.authorityName,
      urlCount: r.urls.length,
    })),
    legacyApvienotsReferences: legacyRefs,
  };
}

function fail(code, message) {
  return {
    pass: false,
    blockerCode: code,
    blockerMessage: message,
    registryDocument: APVIENOTS_REL,
    registrySection: REGISTRY_SECTION_TITLE,
    EMBEDDED_LANGUAGE_REGISTRY_COUNT: 0,
    LANGUAGE_CODE_DUPLICATES: 0,
    MISSING_LANGUAGE_CODES: 33,
    UNKNOWN_LANGUAGE_CODES: 0,
    elGrMappingPass: false,
    dePresentPass: false,
    bgPresentPass: false,
    emptyMandatoryFieldCount: 0,
    invalidUrlFieldCount: 0,
    coverageRows: [],
  };
}

/** @deprecated use verifyEmbeddedLanguageRegistry */
function verifyOfficialLanguageSources(root) {
  return verifyEmbeddedLanguageRegistry(root);
}

module.exports = {
  APVIENOTS_REL,
  LEGACY_APVIENOTS_REL,
  REGISTRY_SECTION_TITLE,
  APP_LANGUAGE_CODES,
  parseRegistryTable,
  verifyEmbeddedLanguageRegistry,
  verifyOfficialLanguageSources,
};
