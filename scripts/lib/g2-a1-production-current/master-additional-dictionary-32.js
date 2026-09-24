#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { stripTrackingParams } = require("../master-language-authority-sources-33");

const MANIFEST_REL = "scripts/lib/data/master-additional-dictionary-sources-32.json";
const PRESERVATION_REL = "scripts/lib/data/master-primary-preservation-32.json";
const STRUCTURED_REL = "scripts/lib/data/master-language-authority-sources-33.json";

function loadManifest() {
  const p = path.join(ROOT, MANIFEST_REL);
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function loadPreservation() {
  const p = path.join(ROOT, PRESERVATION_REL);
  if (!fs.existsSync(p)) throw new Error("MISSING_PRIMARY_PRESERVATION");
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function applyAdditionalDictionariesToStructuredJson() {
  const manifest = loadManifest();
  const structuredPath = path.join(ROOT, STRUCTURED_REL);
  const data = JSON.parse(fs.readFileSync(structuredPath, "utf8"));
  const byCode = new Map(manifest.sources.map((s) => [s.appCode, s]));

  if (manifest.sources.length !== 32) {
    throw new Error(`MANIFEST_COUNT_${manifest.sources.length}`);
  }
  const codes = new Set(manifest.sources.map((s) => s.appCode));
  if (codes.size !== 32) throw new Error("MANIFEST_DUPLICATE_APP_CODE");

  for (const row of data.languages) {
    if (row.appCode === "de") continue;
    const spec = byCode.get(row.appCode);
    if (!spec) throw new Error(`MANIFEST_MISSING_${row.appCode}`);
    if (row.standardCode !== spec.standardCode) {
      throw new Error(`STANDARD_CODE_MISMATCH_${row.appCode}`);
    }
    const url = stripTrackingParams(spec.url);
    row.ADDITIONAL_DICTIONARY_AUTHORITY = spec.authorityName;
    row.ADDITIONAL_DICTIONARY_URLS = [url];
    row.ADDITIONAL_DICTIONARY_ROLE = "SUPPLEMENTARY_LEXICAL_A1";
    row.ADDITIONAL_DICTIONARY_NOTES =
      "Community Wiktionary sources are comparison-only; not sole evidence for production changes. AI/MT not linguistic authority.";
  }

  data.additionalDictionaryRegistryMeta = {
    integratedAt: new Date().toISOString(),
    targetLanguageCount: 32,
    manifestSchema: manifest.schemaVersion,
    classification: "MASTER_ADDITIONAL_DICTIONARY_SOURCES_INTEGRATED_32_OF_32",
  };

  fs.writeFileSync(structuredPath, `${JSON.stringify(data, null, 2)}\n`);
  return { applied: 32, manifest: manifest.schemaVersion };
}

function verifyAdditionalDictionaryIntegration() {
  const blockers = [];
  const manifest = loadManifest();
  const preservation = loadPreservation();
  const structured = JSON.parse(fs.readFileSync(path.join(ROOT, STRUCTURED_REL), "utf8"));

  if (manifest.sources.length !== 32) {
    blockers.push({ code: "MANIFEST_COUNT", got: manifest.sources.length });
  }

  const seen = new Set();
  for (const spec of manifest.sources) {
    if (seen.has(spec.appCode)) blockers.push({ code: "DUPLICATE_MANIFEST", appCode: spec.appCode });
    seen.add(spec.appCode);
    if (spec.appCode === "gr" && spec.standardCode !== "el") {
      blockers.push({ code: "GR_EL_MAPPING", got: spec.standardCode });
    }
  }

  for (const row of structured.languages) {
    if (row.appCode === "de") continue;
    const spec = manifest.sources.find((s) => s.appCode === row.appCode);
    const preserve = preservation[row.appCode];
    if (!spec) blockers.push({ code: "MISSING_MANIFEST_ROW", appCode: row.appCode });
    if (!preserve) blockers.push({ code: "MISSING_PRESERVATION", appCode: row.appCode });

    if (preserve) {
      const fields = [
        "LANGUAGE_NORM_AUTHORITY",
        "LANGUAGE_NORM_URLS",
        "PRIMARY_DICTIONARY_AUTHORITY",
        "PRIMARY_DICTIONARY_URLS",
        "ADDITIONAL_AUTHORITY",
        "ADDITIONAL_AUTHORITY_URLS",
        "standardCode",
      ];
      for (const f of fields) {
        if (JSON.stringify(row[f]) !== JSON.stringify(preserve[f])) {
          blockers.push({ code: "PRIMARY_OR_NORM_CHANGED", appCode: row.appCode, field: f });
        }
      }
    }

    if (!row.ADDITIONAL_DICTIONARY_AUTHORITY) {
      blockers.push({ code: "MISSING_ADDITIONAL_DICTIONARY", appCode: row.appCode });
    }
    if (!row.ADDITIONAL_DICTIONARY_URLS?.length) {
      blockers.push({ code: "MISSING_ADDITIONAL_DICTIONARY_URL", appCode: row.appCode });
    } else if (row.ADDITIONAL_DICTIONARY_URLS.length !== 1) {
      blockers.push({ code: "ADDITIONAL_DICTIONARY_URL_COUNT", appCode: row.appCode });
    } else if (spec && stripTrackingParams(row.ADDITIONAL_DICTIONARY_URLS[0]) !== stripTrackingParams(spec.url)) {
      blockers.push({ code: "URL_MISMATCH", appCode: row.appCode });
    }
  }

  if (seen.size !== 32) blockers.push({ code: "TARGET_COUNT", got: seen.size });

  return {
    pass: blockers.length === 0,
    blockers,
    integrated: 32 - blockers.filter((b) => b.code.startsWith("MISSING_ADDITIONAL")).length,
    classification: blockers.length
      ? "MASTER_ADDITIONAL_DICTIONARY_VERIFY_BLOCKED"
      : "MASTER_ADDITIONAL_DICTIONARY_SOURCES_INTEGRATED_32_OF_32",
    nextAction: blockers.length
      ? "FIX_MASTER_ADDITIONAL_DICTIONARY_REGISTRY"
      : "OWNER_REVIEW_MASTER_ADDITIONAL_SOURCE_LIST",
    fullA1AuditRan: false,
  };
}

module.exports = {
  MANIFEST_REL,
  applyAdditionalDictionariesToStructuredJson,
  verifyAdditionalDictionaryIntegration,
};
