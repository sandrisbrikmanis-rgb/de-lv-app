#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { BILINGUAL_AUDIT_CATALOGS } = require("./constants");

function readCatalogFile(relPath) {
  const abs = path.join(ROOT, relPath);
  if (!fs.existsSync(abs)) return { pass: false, error: `MISSING:${relPath}`, catalog: null };
  try {
    const catalog = JSON.parse(fs.readFileSync(abs, "utf8"));
    return { pass: true, catalog, path: relPath };
  } catch (e) {
    return { pass: false, error: `PARSE_FAIL:${relPath}:${e.message}`, catalog: null };
  }
}

function flattenSourcesForLang(langEntry) {
  if (!langEntry) return [];
  const buckets = [
    langEntry.primaryDigitized,
    langEntry.reverseChainDigitized,
    langEntry.modernInstitutional,
    langEntry.supplementaryReserve,
    langEntry.supplementaryControlOnly,
  ];
  const out = [];
  for (const bucket of buckets) {
    if (!Array.isArray(bucket)) continue;
    for (const src of bucket) {
      out.push(src);
    }
  }
  return out;
}

function loadBilingualAuditRegistry() {
  const byLang = {};
  const catalogMeta = [];
  const errors = [];

  for (const spec of BILINGUAL_AUDIT_CATALOGS) {
    const loaded = readCatalogFile(spec.path);
    if (!loaded.pass) {
      errors.push(loaded.error);
      continue;
    }
    catalogMeta.push({ id: spec.id, path: spec.path, schemaVersion: loaded.catalog.schemaVersion });
    for (const lang of spec.languages) {
      const langEntry = loaded.catalog.languages?.[lang];
      if (!langEntry) continue;
      byLang[lang] = {
        catalogId: spec.id,
        catalogPath: spec.path,
        digitizedAuditStatus: langEntry.digitizedAuditStatus || null,
        sourceChainPriority: langEntry.sourceChainPriority || [],
        collectorOverrideId: langEntry.collectorOverrideId || null,
        primary: langEntry.primaryDigitized?.[0] || null,
        sources: flattenSourcesForLang(langEntry),
        pilotNotes: langEntry.pilotNotes || null,
      };
    }
  }

  return {
    pass: errors.length === 0,
    errors,
    catalogMeta,
    byLang,
  };
}

function primaryBilingualSource(lang) {
  const reg = loadBilingualAuditRegistry();
  const binding = reg.byLang[lang];
  if (!binding) return { bound: false, registry: reg, source: null };
  const primary = binding.primary || binding.sources.find((s) => s.role === "primary") || binding.sources[0] || null;
  return { bound: Boolean(primary), registry: reg, source: primary, binding };
}

module.exports = {
  loadBilingualAuditRegistry,
  primaryBilingualSource,
  flattenSourcesForLang,
};
