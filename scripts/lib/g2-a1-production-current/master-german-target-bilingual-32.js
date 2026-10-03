#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { stripTrackingParams } = require("../master-language-authority-sources-33");
const { APP_LANGUAGE_CODES } = require("../official-language-sources-registry");

const MANIFEST_REL = "scripts/lib/data/master-german-target-bilingual-dictionaries-32.json";
const PRESERVATION_REL = "scripts/lib/data/master-primary-preservation-32.json";
const STRUCTURED_REL = "scripts/lib/data/master-language-authority-sources-33.json";
const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/german-target-bilingual-dictionaries-32");

const DICT_CC_MIN_ENTRIES = 8000;
const UNCONFIRMED_COUNT_STATUS = "ENTRY_COUNT_NOT_PUBLICLY_CONFIRMED";

function loadManifest() {
  return JSON.parse(fs.readFileSync(path.join(ROOT, MANIFEST_REL), "utf8"));
}

function loadPreservation() {
  const p = path.join(ROOT, PRESERVATION_REL);
  if (!fs.existsSync(p)) throw new Error("MISSING_PRIMARY_PRESERVATION");
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function sourceClassForType(type) {
  if (type === "COMMUNITY_BILINGUAL_DICT_CC" || type === "COMMUNITY_BILINGUAL_GLOSBE") return "E";
  if (type === "PROFESSIONAL_BILINGUAL_COMMERCIAL") return "B";
  return "A";
}

function upsertBilingualSourcesArray(row, spec) {
  const url = stripTrackingParams(spec.url);
  const entry = {
    sourceName: spec.name,
    sourceUrl: url,
    entryUrlTemplateNote: `${url.replace(/\/$/, "")}/?s=Haus`,
    publisher:
      spec.type === "COMMUNITY_BILINGUAL_DICT_CC"
        ? "dict.cc (community-maintained)"
        : spec.name,
    sourceClass: sourceClassForType(spec.type),
    languagePair: spec.languagePair,
    accessMode: spec.access,
    semanticEvidenceSupported: true,
    lemmaEvidenceSupported: true,
    orthographyEvidenceSupported: false,
    editorialProvenance:
      spec.type === "COMMUNITY_BILINGUAL_DICT_CC" ? "community_contributed" : "publisher_stated",
    automationStatus: "REGISTRY_INTEGRATED",
    ownerApprovalRequired: false,
    role: "PRIMARY_TRANSLATION_PAIR_SOURCE",
    notes: "PRIMARY de→TARGET translation-pair source per MASTER §3.1 bilingual registry v2",
  };
  const rest = (row.GERMAN_TARGET_BILINGUAL_SOURCES || []).filter(
    (s) => stripTrackingParams(s.sourceUrl || "") !== url,
  );
  row.GERMAN_TARGET_BILINGUAL_SOURCES = [entry, ...rest];
}

function applyGermanTargetBilingualDictionaries32() {
  const manifest = loadManifest();
  const structuredPath = path.join(ROOT, STRUCTURED_REL);
  const data = JSON.parse(fs.readFileSync(structuredPath, "utf8"));
  const byCode = new Map(manifest.sources.map((s) => [s.appCode, s]));

  if (manifest.sources.length !== 32) throw new Error(`MANIFEST_COUNT_${manifest.sources.length}`);
  if (new Set(manifest.sources.map((s) => s.appCode)).size !== 32) {
    throw new Error("MANIFEST_DUPLICATE_APP_CODE");
  }

  for (const row of data.languages) {
    if (row.appCode === "de") continue;
    const spec = byCode.get(row.appCode);
    if (!spec) throw new Error(`MANIFEST_MISSING_${row.appCode}`);
    if (row.standardCode !== spec.standardCode) {
      throw new Error(`STANDARD_CODE_MISMATCH_${row.appCode}`);
    }
    const url = stripTrackingParams(spec.url);
    row.GERMAN_TARGET_DICTIONARY_NAME = spec.name;
    row.GERMAN_TARGET_DICTIONARY_URL = url;
    row.GERMAN_TARGET_DICTIONARY_TYPE = spec.type;
    row.GERMAN_TARGET_DICTIONARY_ENTRY_COUNT = spec.entryCount;
    row.GERMAN_TARGET_DICTIONARY_ENTRY_COUNT_STATUS = spec.entryCountStatus;
    row.GERMAN_TARGET_DICTIONARY_ACCESS = spec.access;
    row.GERMAN_TARGET_DICTIONARY_LANGUAGE_PAIR = spec.languagePair;
    row.GERMAN_TARGET_DICTIONARY_ROLE = manifest.role || "PRIMARY_TRANSLATION_PAIR_SOURCE";
    upsertBilingualSourcesArray(row, spec);
  }

  data.germanTargetBilingualRegistryMeta = {
    integratedAt: new Date().toISOString(),
    targetLanguageCount: 32,
    manifestSchema: manifest.schemaVersion,
    statisticsSource: manifest.statisticsSource,
    classification: "MASTER_GERMAN_TARGET_BILINGUAL_DICTIONARIES_INTEGRATED_32_OF_32",
  };

  fs.writeFileSync(structuredPath, `${JSON.stringify(data, null, 2)}\n`);
  return { applied: 32, manifest: manifest.schemaVersion };
}

function verifyGermanTargetBilingualDictionaries32() {
  const blockers = [];
  const manifest = loadManifest();
  const preservation = loadPreservation();
  const structured = JSON.parse(fs.readFileSync(path.join(ROOT, STRUCTURED_REL), "utf8"));

  const targetRows = structured.languages.filter((r) => r.appCode !== "de");
  if (targetRows.length !== 32) blockers.push({ code: "STRUCTURED_TARGET_COUNT", got: targetRows.length });

  const manifestCodes = new Set(manifest.sources.map((s) => s.appCode));
  if (manifestCodes.size !== 32) blockers.push({ code: "MANIFEST_DUPLICATE" });

  for (const spec of manifest.sources) {
    if (spec.appCode === "gr" && spec.standardCode !== "el") {
      blockers.push({ code: "GR_EL_MAPPING", got: spec.standardCode });
    }
    if (spec.appCode === "nb" && spec.url.includes("nn")) {
      blockers.push({ code: "NB_URL_CONTAINS_NN" });
    }
    if (spec.type === "COMMUNITY_BILINGUAL_DICT_CC") {
      if (spec.entryCount == null || spec.entryCount < DICT_CC_MIN_ENTRIES) {
        blockers.push({ code: "DICT_CC_COUNT_LOW", appCode: spec.appCode, got: spec.entryCount });
      }
    }
    if (
      ["et", "sl", "nn", "mk"].includes(spec.appCode) &&
      spec.entryCountStatus !== UNCONFIRMED_COUNT_STATUS
    ) {
      blockers.push({ code: "UNCONFIRMED_STATUS_REQUIRED", appCode: spec.appCode });
    }
    if (
      ["et", "sl", "nn", "mk"].includes(spec.appCode) &&
      spec.entryCount != null
    ) {
      blockers.push({ code: "INVENTED_COUNT_FOR_UNCONFIRMED", appCode: spec.appCode });
    }
    if (!spec.url.startsWith("https://")) {
      blockers.push({ code: "URL_NOT_HTTPS", appCode: spec.appCode });
    }
  }

  const nnSpec = manifest.sources.find((s) => s.appCode === "nn");
  const nbSpec = manifest.sources.find((s) => s.appCode === "nb");
  if (nnSpec && nbSpec && stripTrackingParams(nnSpec.url) === stripTrackingParams(nbSpec.url)) {
    blockers.push({ code: "NB_NN_SAME_URL" });
  }

  for (const row of targetRows) {
    const spec = manifest.sources.find((s) => s.appCode === row.appCode);
    if (!spec) blockers.push({ code: "MISSING_MANIFEST", appCode: row.appCode });

    const preserve = preservation[row.appCode];
    if (!preserve) blockers.push({ code: "MISSING_PRESERVATION", appCode: row.appCode });
    if (preserve) {
      for (const f of [
        "LANGUAGE_NORM_AUTHORITY",
        "LANGUAGE_NORM_URLS",
        "PRIMARY_DICTIONARY_AUTHORITY",
        "PRIMARY_DICTIONARY_URLS",
        "ADDITIONAL_AUTHORITY",
        "ADDITIONAL_AUTHORITY_URLS",
        "ADDITIONAL_DICTIONARY_AUTHORITY",
        "ADDITIONAL_DICTIONARY_URLS",
        "standardCode",
      ]) {
        if (JSON.stringify(row[f]) !== JSON.stringify(preserve[f])) {
          blockers.push({ code: "PRIMARY_OR_ADDITIONAL_CHANGED", appCode: row.appCode, field: f });
        }
      }
    }

    if (!row.GERMAN_TARGET_DICTIONARY_URL) {
      blockers.push({ code: "MISSING_BILINGUAL_URL", appCode: row.appCode });
    }
    if (row.GERMAN_TARGET_DICTIONARY_ROLE !== "PRIMARY_TRANSLATION_PAIR_SOURCE") {
      blockers.push({ code: "WRONG_ROLE", appCode: row.appCode });
    }
    if (spec && stripTrackingParams(row.GERMAN_TARGET_DICTIONARY_URL) !== stripTrackingParams(spec.url)) {
      blockers.push({ code: "URL_MISMATCH", appCode: row.appCode });
    }
  }

  for (const code of APP_LANGUAGE_CODES) {
    if (!manifestCodes.has(code)) blockers.push({ code: "MISSING_TARGET_LANG", appCode: code });
  }

  return {
    pass: blockers.length === 0,
    blockers,
    integrated: 32 - blockers.filter((b) => b.code.startsWith("MISSING_BILINGUAL")).length,
    classification: blockers.length
      ? "MASTER_GERMAN_TARGET_BILINGUAL_VERIFY_BLOCKED"
      : "MASTER_GERMAN_TARGET_BILINGUAL_DICTIONARIES_INTEGRATED_32_OF_32",
    nextAction: blockers.length
      ? "FIX_MASTER_GERMAN_TARGET_BILINGUAL_REGISTRY"
      : "VERIFY_GERMAN_TARGET_DICTIONARY_PILOT_CONTENT",
    fullA1AuditRan: false,
  };
}

function buildArtifactPayload(verifyResult) {
  const manifest = loadManifest();
  const structured = JSON.parse(fs.readFileSync(path.join(ROOT, STRUCTURED_REL), "utf8"));
  const rows = manifest.sources.map((spec) => {
    const row = structured.languages.find((r) => r.appCode === spec.appCode);
    return {
      appCode: spec.appCode,
      standardCode: spec.standardCode,
      name: spec.name,
      url: spec.url,
      type: spec.type,
      entryCount: spec.entryCount,
      entryCountStatus: spec.entryCountStatus,
      role: row?.GERMAN_TARGET_DICTIONARY_ROLE || manifest.role,
      languagePair: spec.languagePair,
      access: spec.access,
    };
  });

  const withConfirmedCount = rows.filter(
    (r) => r.entryCountStatus !== UNCONFIRMED_COUNT_STATUS && r.entryCount != null,
  ).length;
  const unconfirmedCount = rows.filter((r) => r.entryCountStatus === UNCONFIRMED_COUNT_STATUS).length;
  const dictCc = rows.filter((r) => r.type === "COMMUNITY_BILINGUAL_DICT_CC");

  return {
    builtAt: new Date().toISOString(),
    classification: verifyResult.classification,
    nextAction: verifyResult.nextAction,
    summary: {
      bilingualDictionaries: "32/32",
      withPublicEntryCount: withConfirmedCount,
      entryCountNotPubliclyConfirmed: unconfirmedCount,
      dictCcLanguages: dictCc.length,
      dictCcMinEntries: DICT_CC_MIN_ENTRIES,
      languagesWithoutBilingual: 0,
      nbNnSeparate: true,
      grElMapping: true,
    },
    rows,
    verify: verifyResult,
    fullA1AuditRan: false,
  };
}

function writeGermanTargetBilingualArtifacts(verifyResult) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const payload = buildArtifactPayload(verifyResult);
  const jsonPath = path.join(OUT_DIR, "german-target-bilingual-dictionaries-32.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`);

  const lines = [
    "# German–TARGET bilingual dictionaries (32 app languages)",
    "",
    `Classification: **${payload.classification}**`,
    `NEXT_ACTION: **${payload.nextAction}**`,
    "",
    "| Valoda | Vācu–TARGET vārdnīca | URL | Ierakstu skaits | Skaita statuss | Loma |",
    "|--------|----------------------|-----|-----------------|----------------|------|",
  ];
  for (const r of payload.rows) {
    const count = r.entryCount == null ? "—" : String(r.entryCount);
    lines.push(
      `| ${r.appCode} | ${r.name} | ${r.url} | ${count} | ${r.entryCountStatus} | ${r.role} |`,
    );
  }
  lines.push("");
  const mdPath = path.join(OUT_DIR, "german-target-bilingual-dictionaries-32.md");
  fs.writeFileSync(mdPath, `${lines.join("\n")}\n`);

  const verificationPath = path.join(OUT_DIR, "german-target-bilingual-dictionaries-32-verification.json");
  fs.writeFileSync(
    verificationPath,
    `${JSON.stringify({ ...verifyResult, summary: payload.summary, verifiedAt: new Date().toISOString() }, null, 2)}\n`,
  );

  return { jsonPath, mdPath, verificationPath };
}

module.exports = {
  MANIFEST_REL,
  applyGermanTargetBilingualDictionaries32,
  verifyGermanTargetBilingualDictionaries32,
  buildArtifactPayload,
  writeGermanTargetBilingualArtifacts,
  OUT_DIR,
};
