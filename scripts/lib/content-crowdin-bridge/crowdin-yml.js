#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const {
  CROWDIN_TARGET_LOCALE_IDS,
  crowdinLocaleToRepo,
  buildCrowdinLanguagesMapping,
} = require("./locale-map");

const CROWDIN_YML_PATH = path.join(ROOT, "crowdin.yml");

const EXPECTED_UI_FILE = {
  source: "/crowdin/ui/lv.json",
  translation: "/crowdin/ui/%two_letters_code%.json",
};

const EXPECTED_G2_A1_FILE = {
  source: "/crowdin/content/g2/lv-a1.json",
  translation: "/crowdin/content/g2/%locale%-a1.json",
};

function parseSimpleYaml(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const files = [];
  let current = null;
  let inLanguagesMapping = false;
  let inLocaleBlock = false;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    if (trimmed === "files:") continue;

    if (trimmed.startsWith("- source:")) {
      if (current) files.push(current);
      current = { source: trimmed.slice("- source:".length).trim() };
      inLanguagesMapping = false;
      inLocaleBlock = false;
      continue;
    }

    if (!current) continue;

    if (trimmed.startsWith("translation:")) {
      current.translation = trimmed.slice("translation:".length).trim();
      continue;
    }

    if (trimmed === "languages_mapping:") {
      current.languages_mapping = {};
      inLanguagesMapping = true;
      inLocaleBlock = false;
      continue;
    }

    if (inLanguagesMapping && trimmed === "locale:") {
      current.languages_mapping.locale = {};
      inLocaleBlock = true;
      continue;
    }

    if (inLanguagesMapping && inLocaleBlock) {
      const match = trimmed.match(/^([^:]+):\s*(.+)$/);
      if (match) {
        current.languages_mapping.locale[match[1].trim()] = match[2].trim();
      }
      continue;
    }
  }

  if (current) files.push(current);
  return { files };
}

function loadCrowdinYmlConfig(ymlPath = CROWDIN_YML_PATH) {
  const text = fs.readFileSync(ymlPath, "utf8");
  if (/\nlanguages_mapping:\s*\n\s+el:/m.test(text) && !/translation:[^\n]+\n\s+languages_mapping:/m.test(text)) {
    throw new Error("CROWDIN_YML_INVALID: top-level languages_mapping is not allowed");
  }
  return parseSimpleYaml(text);
}

function repoFilenameForCrowdinLocale(crowdinLocale, level = "a1", mapping = null) {
  const localeMap = mapping?.locale || {};
  const repoLang = localeMap[crowdinLocale] ?? crowdinLocaleToRepo(crowdinLocale);
  return `${repoLang}-${level}.json`;
}

function resolveG2A1TranslationPath(crowdinLocale, config) {
  const g2 = findG2A1FileEntry(config);
  const repoFile = repoFilenameForCrowdinLocale(crowdinLocale, "a1", g2.languages_mapping);
  return g2.translation.replace("%locale%", repoFile.replace(/-a1\.json$/, "")).replace(
    "%locale%-a1.json",
    repoFile,
  );
}

function findG2A1FileEntry(config) {
  const entry = config.files.find((f) => f.source === EXPECTED_G2_A1_FILE.source);
  if (!entry) throw new Error("CROWDIN_YML_INVALID: missing G2/A1 file entry");
  return entry;
}

function findUiFileEntry(config) {
  const entry = config.files.find((f) => f.source === EXPECTED_UI_FILE.source);
  if (!entry) throw new Error("CROWDIN_YML_INVALID: missing UI file entry");
  return entry;
}

function validateCrowdinYmlG2A1() {
  const errors = [];
  const config = loadCrowdinYmlConfig();

  if (config.files.length !== 2) {
    errors.push(`FILES_COUNT:${config.files.length}`);
  }

  const ui = findUiFileEntry(config);
  if (ui.source !== EXPECTED_UI_FILE.source || ui.translation !== EXPECTED_UI_FILE.translation) {
    errors.push("UI_MAPPING_CHANGED");
  }
  if (ui.languages_mapping) {
    errors.push("UI_ENTRY_HAS_LANGUAGES_MAPPING");
  }

  const g2 = findG2A1FileEntry(config);
  if (g2.translation !== EXPECTED_G2_A1_FILE.translation) {
    errors.push("G2_A1_TRANSLATION_PATTERN_CHANGED");
  }
  if (!g2.languages_mapping?.locale) {
    errors.push("G2_A1_LANGUAGES_MAPPING_MISSING");
  }

  const expectedRemap = buildCrowdinLanguagesMapping();
  const remapOnly = Object.fromEntries(
    Object.entries(expectedRemap).filter(([crowdinId, repoCode]) => crowdinId !== repoCode),
  );
  for (const [crowdinId, repoCode] of Object.entries(remapOnly)) {
    if (g2.languages_mapping.locale[crowdinId] !== repoCode) {
      errors.push(`LOCALE_MAP_MISMATCH:${crowdinId}`);
    }
  }
  for (const crowdinId of CROWDIN_TARGET_LOCALE_IDS) {
    if (crowdinId !== expectedRemap[crowdinId] && g2.languages_mapping.locale[crowdinId] === undefined) {
      errors.push(`LOCALE_MAP_MISSING:${crowdinId}`);
    }
    if (crowdinId === expectedRemap[crowdinId] && g2.languages_mapping.locale[crowdinId] !== undefined) {
      errors.push(`UNNECESSARY_LOCALE_MAP:${crowdinId}`);
    }
  }

  const filenames = new Set();
  for (const crowdinId of CROWDIN_TARGET_LOCALE_IDS) {
    const repoFile = repoFilenameForCrowdinLocale(crowdinId, "a1", g2.languages_mapping);
    const resolved = `/crowdin/content/g2/${repoFile}`;
    if (filenames.has(repoFile)) {
      errors.push(`DUPLICATE_REPO_FILENAME:${repoFile}`);
    }
    filenames.add(repoFile);

    const translationPath = g2.translation.replace("%locale%", crowdinId).replace(
      "%locale%-a1.json",
      `${crowdinLocaleToRepo(crowdinId)}-a1.json`,
    );
    // Crowdin applies languages_mapping before path substitution — verify repo filename directly.
    if (!repoFile.endsWith("-a1.json")) {
      errors.push(`INVALID_REPO_FILENAME:${repoFile}`);
    }
    void resolved;
    void translationPath;
  }

  if (repoFilenameForCrowdinLocale("el", "a1", g2.languages_mapping) !== "gr-a1.json") {
    errors.push("EL_NOT_GR_A1");
  }
  const regionalChecks = {
    "en-GB": "en-a1.json",
    "es-ES": "es-a1.json",
    "pt-PT": "pt-a1.json",
    "nn-NO": "nn-a1.json",
    "sv-SE": "sv-a1.json",
  };
  for (const [crowdinId, expectedFile] of Object.entries(regionalChecks)) {
    if (repoFilenameForCrowdinLocale(crowdinId, "a1", g2.languages_mapping) !== expectedFile) {
      errors.push(`REGIONAL_FILENAME_MISMATCH:${crowdinId}`);
    }
  }

  if (filenames.size !== 31) {
    errors.push(`REPO_FILENAME_COUNT:${filenames.size}`);
  }

  return {
    pass: errors.length === 0,
    errors,
    ui,
    g2,
    repoFilenames: [...filenames].sort(),
  };
}

module.exports = {
  CROWDIN_YML_PATH,
  EXPECTED_UI_FILE,
  EXPECTED_G2_A1_FILE,
  loadCrowdinYmlConfig,
  validateCrowdinYmlG2A1,
  repoFilenameForCrowdinLocale,
  resolveG2A1TranslationPath,
};
