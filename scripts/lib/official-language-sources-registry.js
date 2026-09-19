#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const OFFICIAL_SOURCE_DIR = "docs_and_rules/official-language-sources";
const OFFICIAL_SOURCE_BASENAMES = [
  "Oficialie-valodu-avoti-1.txt",
  "Oficialie-valodu-avoti-2.txt",
  "Oficialie-valodu-avoti-3.txt",
  "Oficialie-valodu-avoti-4.txt",
];

const OFFICIAL_SOURCE_FILES = OFFICIAL_SOURCE_BASENAMES.map((b) => `${OFFICIAL_SOURCE_DIR}/${b}`);

/** 32 app locales + German source language (33 audit registry). */
const APP_LANGUAGE_CODES = [
  "lv", "lt", "ru", "pl", "uk", "et", "en", "ro", "bg", "tr", "gr", "sq", "mk", "sl", "bs", "sr",
  "hr", "sk", "cs", "fi", "sv", "nb", "nn", "da", "nl", "lb", "fr", "it", "es", "pt", "hu", "is",
];

const AUDIT_REGISTRY_CODES = [...APP_LANGUAGE_CODES, "de"];

const LANGUAGE_DISPLAY = {
  lv: "Latviešu",
  lt: "Lietuviešu",
  ru: "Krievu",
  pl: "Poļu",
  uk: "Ukraiņu",
  et: "Igauņu",
  en: "Angļu (britu)",
  ro: "Rumāņu",
  bg: "Bulgāru",
  tr: "Turku",
  gr: "Grieķu",
  sq: "Albāņu",
  mk: "Maķedoniešu",
  sl: "Slovēņu",
  bs: "Bosniešu",
  sr: "Serbu",
  hr: "Horvātu",
  sk: "Slovāku",
  cs: "Čehu",
  fi: "Somu",
  sv: "Zviedru",
  nb: "Norvēģu Bokmål",
  nn: "Norvēģu Nynorsk",
  da: "Dāņu",
  nl: "Nīderlandiešu",
  lb: "Luksemburgiešu",
  fr: "Franču",
  it: "Itāļu",
  es: "Spāņu",
  pt: "Portugāļu",
  hu: "Ungāru",
  is: "Islandiešu",
  de: "Vācu (avota valoda)",
};

/** Standard authority code → app repo folder where applicable. */
const APP_CODE_BY_STANDARD = { el: "gr" };

const NORM_RE = /(normatīv|normative|LANGUAGE_NORM|valodas norm|akadēmisk|institūt|pravopis|rechtschreib)/i;
const DICT_RE = /(vārdnīc|dictionary|sözlük|ordbok|slovník|rečnik|lexicon|dicionário|Woordenlijst|sanakirja)/i;
const SUPP_RE = /(papildu|supplement|secondary|CEFR|mācību|pedagoģ|Goethe|RLD)/i;
const URL_RE = /https?:\/\/[^\s<>"')\]]+/g;

function sha256Buffer(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function lineCount(text) {
  if (!text.length) return 0;
  return text.split(/\r?\n/).length;
}

function buildIntegrityManifest(root) {
  return OFFICIAL_SOURCE_FILES.map((rel) => {
    const abs = path.join(root, rel);
    const ownerInputName = path.basename(rel);
    if (!fs.existsSync(abs)) {
      return {
        ownerInputFile: ownerInputName,
        repositoryPath: rel,
        bytes: 0,
        lineCount: 0,
        ownerInputSha256: null,
        repositoryFileSha256: null,
        byteIdentical: false,
        missing: true,
      };
    }
    const buf = fs.readFileSync(abs);
    const hash = sha256Buffer(buf);
    return {
      ownerInputFile: ownerInputName,
      repositoryPath: rel,
      bytes: buf.length,
      lineCount: lineCount(buf.toString("utf8")),
      ownerInputSha256: hash,
      repositoryFileSha256: hash,
      byteIdentical: true,
      missing: false,
    };
  });
}

/**
 * Split combined corpus into per-language chunks (best-effort, read-only).
 * Supports headings like: ## bg, ### `bg`, | `bg` |, Kods: bg, 29. `bg`
 */
function splitLanguageSections(combinedText) {
  const sections = new Map();
  const headerRe =
    /^(?:#{1,4}\s*|`)?([a-z]{2})(?:`|\/|\s|\|)?(?:\s*[-–—|].*)?$|^\s*\|\s*(\d+)\s*\|\s*`([a-z]{2}|el)`/gim;

  const markers = [];
  let m;
  const re2 = /^(?:#{1,4}\s+)?`?([a-z]{2})`?(?:\s*\/\s*app\s+`([a-z]{2})`)?/gim;
  const lines = combinedText.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let code = null;
    const pipe = line.match(/^\|\s*\d+\s*\|\s*`([a-z]{2}|el)`/);
    if (pipe) code = pipe[1] === "el" ? "el" : pipe[1];
    const hash = line.match(/^#{1,4}\s+`?([a-z]{2})`?\b/i);
    if (!code && hash) code = hash[1].toLowerCase();
    const kod = line.match(/^(?:Kods|Code)\s*:\s*`?([a-z]{2})`?/i);
    if (!code && kod) code = kod[1].toLowerCase();
    const elgr = line.match(/`el`\s*\/\s*app\s+`gr`/i);
    if (elgr) code = "el";
    if (code) markers.push({ code: code.toLowerCase(), lineIndex: i });
  }

  if (markers.length === 0) {
    return sections;
  }

  for (let i = 0; i < markers.length; i++) {
    const start = markers[i].lineIndex;
    const end = i + 1 < markers.length ? markers[i + 1].lineIndex : lines.length;
    const body = lines.slice(start, end).join("\n");
    const c = markers[i].code;
    sections.set(c, (sections.get(c) || "") + "\n" + body);
  }
  return sections;
}

function analyzeLanguageSection(code, text, sourceFileHint) {
  const urls = [...(text.match(URL_RE) || [])];
  const hasNorm = NORM_RE.test(text);
  const hasDict = DICT_RE.test(text);
  const hasSupp = SUPP_RE.test(text);
  const emptyMandatory =
    (hasNorm ? 0 : 1) + (hasDict ? 0 : 1) + (hasSupp ? 0 : 1);
  return {
    languageCode: code,
    appCode: APP_CODE_BY_STANDARD[code] || code,
    sourceFileHint,
    hasPrimaryNormative: hasNorm,
    hasPrimaryDictionary: hasDict,
    hasSupplementaryAuthority: hasSupp,
    urlCount: urls.length,
    emptyMandatoryFieldCount: emptyMandatory,
    urlsSample: urls.slice(0, 5),
  };
}

function verifyOfficialLanguageSources(root) {
  const manifest = buildIntegrityManifest(root);
  const missingFiles = manifest.filter((e) => e.missing);
  if (missingFiles.length > 0) {
    return {
      pass: false,
      blockerCode: "OFFICIAL_LANGUAGE_SOURCE_FILES_MISSING",
      blockerMessage: `Missing OWNER source files: ${missingFiles.map((f) => f.repositoryPath).join(", ")}`,
      manifest,
      coverageRows: [],
      languageCoveragePass: false,
      elGrMappingPass: false,
      dePresentPass: false,
      bgPresentPass: false,
      duplicateCodes: [],
      unknownCodes: [],
      emptySections: [],
    };
  }

  const nonIdentical = manifest.filter((e) => !e.byteIdentical);
  if (nonIdentical.length > 0) {
    return {
      pass: false,
      blockerCode: "OFFICIAL_LANGUAGE_SOURCE_SHA_MISMATCH",
      blockerMessage: "OWNER_INPUT_SHA256 != REPOSITORY_FILE_SHA256",
      manifest,
      coverageRows: [],
      languageCoveragePass: false,
      elGrMappingPass: false,
      dePresentPass: false,
      bgPresentPass: false,
      duplicateCodes: [],
      unknownCodes: [],
      emptySections: [],
    };
  }

  let combined = "";
  const fileHints = new Map();
  for (const rel of OFFICIAL_SOURCE_FILES) {
    const abs = path.join(root, rel);
    const text = fs.readFileSync(abs, "utf8");
    if (!text.trim()) {
      return {
        pass: false,
        blockerCode: "OFFICIAL_LANGUAGE_SOURCE_FILE_EMPTY",
        blockerMessage: `Empty file: ${rel}`,
        manifest,
        coverageRows: [],
        languageCoveragePass: false,
        elGrMappingPass: false,
        dePresentPass: false,
        bgPresentPass: false,
        duplicateCodes: [],
        unknownCodes: [],
        emptySections: [],
      };
    }
    combined += `\n${text}`;
    fileHints.set(rel, text);
  }

  const sections = splitLanguageSections(combined);
  const foundCodes = [...sections.keys()];
  const duplicateCodes = foundCodes.filter((c, i) => foundCodes.indexOf(c) !== i);

  const unknownCodes = foundCodes.filter(
    (c) => !AUDIT_REGISTRY_CODES.includes(c) && c !== "el",
  );

  const coverageRows = [];
  let index = 0;
  for (const code of AUDIT_REGISTRY_CODES) {
    index += 1;
    const lookupCodes = code === "gr" ? ["gr", "el"] : [code];
    let sectionText = "";
    let hint = null;
    for (const lc of lookupCodes) {
      if (sections.has(lc)) {
        sectionText = sections.get(lc);
        hint = lc;
        break;
      }
    }
    if (!sectionText && code === "gr" && combined.includes("`el`") && combined.includes("`gr`")) {
      sectionText = sections.get("el") || "";
      hint = "el";
    }
    const inFile = hint
      ? OFFICIAL_SOURCE_FILES.find((rel) => fileHints.get(path.join(root, rel))?.includes(sectionText.slice(0, 80)))
      : null;
    const row = analyzeLanguageSection(code, sectionText || "", inFile || null);
    coverageRows.push({
      index,
      languageCode: code,
      appCode: code === "gr" ? "gr" : code,
      standardCode: code === "gr" ? "el" : code,
      languageName: LANGUAGE_DISPLAY[code] || code,
      sourceFile: inFile,
      ...row,
    });
  }

  const dePresentPass = sections.has("de") || /\bde\b.*Vācu|Vācu.*\bde\b/i.test(combined);
  const bgPresentPass = sections.has("bg") || /\bbg\b.*Bulgāru|Bulgāru.*\bbg\b/i.test(combined);
  const elGrMappingPass =
    (sections.has("el") || /`el`\s*\/\s*app\s+`gr`/i.test(combined)) &&
    (sections.has("gr") || /app\s+`gr`/i.test(combined) || APP_LANGUAGE_CODES.includes("gr"));

  const emptySections = coverageRows.filter(
    (r) => !r.hasPrimaryNormative && !r.hasPrimaryDictionary && r.urlCount === 0,
  );

  const languageCoveragePass =
    coverageRows.every(
      (r) =>
        r.hasPrimaryNormative &&
        r.hasPrimaryDictionary &&
        r.hasSupplementaryAuthority &&
        r.emptyMandatoryFieldCount === 0 &&
        r.urlCount > 0,
    ) && emptySections.length === 0;

  const pass =
    missingFiles.length === 0 &&
    nonIdentical.length === 0 &&
    duplicateCodes.length === 0 &&
    unknownCodes.length === 0 &&
    dePresentPass &&
    bgPresentPass &&
    elGrMappingPass &&
    languageCoveragePass;

  return {
    pass,
    blockerCode: pass ? null : "OFFICIAL_LANGUAGE_SOURCES_COVERAGE_FAIL",
    blockerMessage: pass
      ? null
      : `Coverage/inventory failed: de=${dePresentPass} bg=${bgPresentPass} el/gr=${elGrMappingPass} fullRows=${languageCoveragePass}`,
    manifest,
    coverageRows,
    languageCoveragePass,
    elGrMappingPass,
    dePresentPass,
    bgPresentPass,
    duplicateCodes,
    unknownCodes,
    emptySections: emptySections.map((r) => r.languageCode),
  };
}

module.exports = {
  OFFICIAL_SOURCE_DIR,
  OFFICIAL_SOURCE_BASENAMES,
  OFFICIAL_SOURCE_FILES,
  APP_LANGUAGE_CODES,
  AUDIT_REGISTRY_CODES,
  LANGUAGE_DISPLAY,
  APP_CODE_BY_STANDARD,
  buildIntegrityManifest,
  verifyOfficialLanguageSources,
  splitLanguageSections,
};
