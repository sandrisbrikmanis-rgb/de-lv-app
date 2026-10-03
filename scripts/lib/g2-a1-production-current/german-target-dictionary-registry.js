#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { closeBrowserPool } = require("./source-adapters/browser/pool");
const {
  GERMAN_TARGET_DICTIONARY_LANGUAGES,
  CANDIDATES,
  SOURCE_CLASS,
} = require("./german-target-dictionary-candidates");
const { probeCandidate } = require("./german-target-dictionary-probes");
const {
  loadStructuredLanguageAuthoritySources,
  rowByAppCode,
} = require("../master-language-authority-sources-33");
const { HAUS_DE_SENSE_NOTE } = require("./haus-de-sense");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current");

function registryEntryFromProbe(probe, role = "PRIMARY_BILINGUAL") {
  return {
    role,
    sourceName: probe.sourceName,
    sourceUrl: probe.sourceUrl,
    entryUrl: probe.entryUrl || probe.sourceUrl,
    publisher: probe.publisher,
    sourceClass: probe.sourceClass,
    languagePair: probe.languagePair,
    accessMode: probe.accessMode || null,
    semanticEvidenceSupported: Boolean(probe.semanticEvidenceSupported),
    lemmaEvidenceSupported: Boolean(probe.lemmaEvidenceSupported),
    orthographyEvidenceSupported: Boolean(probe.orthographyEvidenceSupported),
    editorialProvenance: probe.editorialProvenance,
    automationStatus: probe.automationStatus,
    ownerApprovalRequired: true,
    hausPilotPass: Boolean(probe.pass),
    notes: probe.communityDictionaryNote || probe.error || null,
  };
}

async function buildGermanTargetDictionaryRegistry() {
  const structured = loadStructuredLanguageAuthoritySources();
  const pilotRows = [];
  const registryRows = [];
  const validationRows = [];

  for (const appLang of GERMAN_TARGET_DICTIONARY_LANGUAGES) {
    const cand = CANDIDATES[appLang];
    const masterRow = structured.pass ? rowByAppCode(structured.languages, appLang) : null;
    const probes = [];
    // eslint-disable-next-line no-await-in-loop
    probes.push(await probeCandidate(appLang, cand.primary));
    if (cand.orthography) {
      // eslint-disable-next-line no-await-in-loop
      probes.push(await probeCandidate(appLang, cand.orthography));
    }
    if (cand.supplemental) {
      // eslint-disable-next-line no-await-in-loop
      probes.push(await probeCandidate(appLang, cand.supplemental));
    }

    const primary = probes[0];
    const bundleSources = probes.map((p, i) =>
      registryEntryFromProbe(
        p,
        i === 0 ? "PRIMARY_BILINGUAL" : p.sourceClass === SOURCE_CLASS.D ? "TARGET_ORTHOGRAPHY" : "SUPPLEMENTAL_TARGET",
      ),
    );

    const bundleComplete =
      primary.pass &&
      (primary.sourceClass !== SOURCE_CLASS.E || bundleSources.length > 1);

    pilotRows.push({
      language: appLang,
      standardCode: masterRow?.standardCode || appLang,
      sourceDe: primary.sourceDe,
      deMeaning: primary.deMeaning,
      deSenseNote: HAUS_DE_SENSE_NOTE,
      targetEquivalent: primary.targetEquivalent || null,
      targetLemma: primary.targetLemma || null,
      wordClass: primary.wordClass || null,
      entryUrl: primary.entryUrl || null,
      publisher: primary.publisher,
      sourceClass: primary.sourceClass,
      sourceName: primary.sourceName,
      accessMode: primary.accessMode,
      checkedAt: primary.checkedAt || new Date().toISOString(),
      evidenceFragment: primary.evidenceFragment || null,
      evidenceSha256: primary.evidenceSha256 || null,
      semanticEvidenceSupported: Boolean(primary.semanticEvidenceSupported),
      supplementalTargetSource: cand.supplemental?.sourceName || cand.orthography?.sourceName || null,
      bundleComplete,
      hausPilotPass: Boolean(primary.pass),
      finalStatus: primary.pass
        ? primary.sourceClass === SOURCE_CLASS.E
          ? bundleComplete
            ? "SOURCE_SUPPORTED_BUNDLE_CANDIDATE"
            : "COMMUNITY_DICT_NEEDS_BUNDLE"
          : "BILINGUAL_ENTRY_VALIDATED"
        : primary.accessBlocker || "PROBE_FAILED",
    });

    registryRows.push({
      language: appLang,
      appCode: appLang,
      standardCode: masterRow?.standardCode || appLang,
      sources: bundleSources,
      bundleComplete,
      ownerApprovalRequired: true,
    });

    validationRows.push({
      language: appLang,
      gates: {
        publisherDocumented: Boolean(primary.publisher),
        sourceClassAssigned: Boolean(primary.sourceClass),
        languagePairDocumented: Boolean(primary.languagePair),
        entryUrlReproducible: Boolean(primary.entryUrl && !/\/translate\/german-\w+\/?$/.test(primary.entryUrl)),
        hausPilotPass: Boolean(primary.pass),
        notHomepageOnly: Boolean(primary.entryUrl && primary.entryUrl !== primary.sourceUrl),
        notMachineTranslationOnly: primary.sourceClass !== SOURCE_CLASS.F,
        communityNotAlone: primary.sourceClass !== SOURCE_CLASS.E || bundleSources.length > 1,
      },
      primaryProbe: primary,
    });
  }

  await closeBrowserPool();

  const professionalEdited = registryRows.filter((r) =>
    r.sources.some((s) => s.sourceClass === SOURCE_CLASS.B && s.hausPilotPass),
  ).length;
  const browserAutomatable = pilotRows.filter((p) => p.hausPilotPass && p.accessMode === "PUBLIC_BROWSER_SESSION").length;
  const bundleCount = pilotRows.filter((p) => p.bundleComplete).length;
  const ownerPending = registryRows.filter((r) => r.ownerApprovalRequired).length;
  const readyCount = pilotRows.filter(
    (p) => p.hausPilotPass && (p.finalStatus === "BILINGUAL_ENTRY_VALIDATED" || p.finalStatus === "SOURCE_SUPPORTED_BUNDLE_CANDIDATE"),
  ).length;

  let classification = "G2_A1_GERMAN_TARGET_DICTIONARY_SOURCES_PARTIALLY_READY";
  let nextAction = "OWNER_REVIEW_REMAINING_EXACT_DICTIONARY_BLOCKERS";
  if (readyCount === 14) {
    classification = "G2_A1_GERMAN_TARGET_DICTIONARY_SOURCES_READY_14_OF_14";
    nextAction = "OWNER_REVIEW_MASTER_SOURCE_REGISTRY_ADDITIONS";
  }

  return {
    generatedAt: new Date().toISOString(),
    schemaVersion: 1,
    languageCount: GERMAN_TARGET_DICTIONARY_LANGUAGES.length,
    registryRows,
    pilotRows,
    validationRows,
    summary: {
      professionalEditedCount: professionalEdited,
      browserAutomatable,
      bundleCount,
      ownerPending,
      readyCount,
      hausPilotPassCount: pilotRows.filter((p) => p.hausPilotPass).length,
    },
    classification,
    nextAction,
    full95731AuditRan: false,
    sourceClassPolicy: {
      A: "state/language institute bilingual or normative",
      B: "professionally edited commercial dictionary",
      C: "university/state teaching material",
      D: "official monolingual TARGET reference",
      E: "community dictionary only with A–D bundle",
      F: "MT/AI — not evidence alone",
    },
  };
}

function applyRegistryToStructuredJson(payload) {
  const jsonPath = path.join(ROOT, "scripts/lib/data/master-language-authority-sources-33.json");
  const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  for (const row of payload.registryRows) {
    const lang = data.languages.find((l) => l.appCode === row.appCode);
    if (!lang) continue;
    const sources = row.sources.length
      ? row.sources
      : [
          {
            sourceName: CANDIDATES[row.appCode]?.primary?.sourceName || "candidate",
            sourceUrl: CANDIDATES[row.appCode]?.primary?.baseUrl,
            publisher: CANDIDATES[row.appCode]?.primary?.publisher,
            sourceClass: CANDIDATES[row.appCode]?.primary?.sourceClass,
            languagePair: CANDIDATES[row.appCode]?.primary?.languagePair,
            automationStatus: "PROBE_FAILED",
            ownerApprovalRequired: true,
            hausPilotPass: false,
            role: "PRIMARY_BILINGUAL",
          },
        ];
    lang.GERMAN_TARGET_BILINGUAL_SOURCES = sources.map((s) => ({
      sourceName: s.sourceName,
      sourceUrl: s.sourceUrl,
      entryUrlTemplateNote: s.entryUrl,
      publisher: s.publisher,
      sourceClass: s.sourceClass,
      languagePair: s.languagePair,
      accessMode: s.accessMode,
      semanticEvidenceSupported: s.semanticEvidenceSupported,
      lemmaEvidenceSupported: s.lemmaEvidenceSupported,
      orthographyEvidenceSupported: s.orthographyEvidenceSupported,
      editorialProvenance: s.editorialProvenance,
      automationStatus: s.automationStatus,
      ownerApprovalRequired: true,
      hausPilotPass: s.hausPilotPass,
      role: s.role,
      notes: s.notes,
    }));
    lang.registryGapNotes = [
      lang.registryGapNotes,
      "§3.1 GERMAN_TARGET_BILINGUAL_SOURCES added via G2/A1 dictionary registry pilot (OWNER approval required before audit default).",
    ]
      .filter(Boolean)
      .join(" ");
  }
  data.germanTargetBilingualRegistryMeta = {
    updatedAt: payload.generatedAt,
    ownerApprovalRequired: true,
    classification: payload.classification,
  };
  fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`);
}

function writeArtifacts(payload) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const write = (name, obj) => fs.writeFileSync(path.join(OUT_DIR, name), `${JSON.stringify(obj, null, 2)}\n`);

  write("g2-a1-german-target-dictionary-registry.json", {
    generatedAt: payload.generatedAt,
    classification: payload.classification,
    nextAction: payload.nextAction,
    registryRows: payload.registryRows,
    summary: payload.summary,
  });

  const md = [
    "# G2/A1 — German→TARGET bilingual dictionary registry",
    "",
    `Generated: ${payload.generatedAt}`,
    "",
    `Ready: **${payload.summary.readyCount}/14** · Haus pilot pass: **${payload.summary.hausPilotPassCount}/14**`,
    "",
    "| Lang | Source | Class | Haus entry | Status |",
    "|------|--------|-------|------------|--------|",
    ...payload.pilotRows.map(
      (p) =>
        `| ${p.language} | ${p.sourceName} | ${p.sourceClass} | ${String(p.entryUrl || "—").slice(0, 42)} | ${p.finalStatus} |`,
    ),
    "",
    `Classification: **${payload.classification}**`,
  ].join("\n");
  fs.writeFileSync(path.join(OUT_DIR, "g2-a1-german-target-dictionary-registry.md"), md);

  write("g2-a1-german-target-dictionary-validation.json", {
    generatedAt: payload.generatedAt,
    validationRows: payload.validationRows,
  });

  fs.writeFileSync(
    path.join(OUT_DIR, "g2-a1-german-target-dictionary-validation.md"),
    [
      "# Validation gates (14 languages)",
      "",
      ...payload.validationRows.map(
        (v) =>
          `- **${v.language}**: hausPilotPass=${v.gates.hausPilotPass} publisher=${v.gates.publisherDocumented} communityNotAlone=${v.gates.communityNotAlone}`,
      ),
    ].join("\n"),
  );

  write("g2-a1-haus-14-language-bilingual-pilot.json", {
    generatedAt: payload.generatedAt,
    deSenseNote: HAUS_DE_SENSE_NOTE,
    rows: payload.pilotRows,
  });

  const csvHeader =
    "language,sourceDe,deMeaning,targetLemma,entryUrl,publisher,sourceClass,semanticEvidence,accessMode,evidenceSha256,finalStatus";
  const csvLines = payload.pilotRows.map((p) =>
    [
      p.language,
      p.sourceDe,
      p.deMeaning,
      p.targetLemma,
      p.entryUrl,
      p.publisher,
      p.sourceClass,
      p.semanticEvidenceSupported,
      p.accessMode,
      p.evidenceSha256,
      p.finalStatus,
    ]
      .map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`)
      .join(","),
  );
  fs.writeFileSync(
    path.join(OUT_DIR, "g2-a1-haus-14-language-bilingual-pilot.csv"),
    `${csvHeader}\n${csvLines.join("\n")}\n`,
  );

  write("g2-a1-source-bundle-policy-verification.json", {
    generatedAt: payload.generatedAt,
    policy:
      "DE authority + bilingual dictionary + optional TARGET D-source orthography; PASS only when bundle covers sense.",
    rows: payload.pilotRows.map((p) => ({
      language: p.language,
      bundleComplete: p.bundleComplete,
      communityPrimary: p.sourceClass === SOURCE_CLASS.E,
    })),
  });

  write("g2-a1-commercial-dictionary-editorial-provenance.json", {
    generatedAt: payload.generatedAt,
    note: "Commercial (PONS class B) accepted when professionally edited with reproducible entry URL.",
    sources: payload.registryRows.flatMap((r) => r.sources).filter((s) => s.sourceClass === SOURCE_CLASS.B),
  });

  const ownerMd = [
    "# OWNER review — German→TARGET bilingual MASTER additions",
    "",
    "**OWNER_APPROVAL_REQUIRED** for all `GERMAN_TARGET_BILINGUAL_SOURCES` JSON entries.",
    "",
    ...payload.registryRows.flatMap((r) => [
      `## ${r.appCode}`,
      "",
      ...r.sources.map(
        (s) =>
          `- **${s.sourceName}** (${s.sourceClass}) — ${s.sourceUrl} — hausPilotPass=${s.hausPilotPass}`,
      ),
      "",
    ]),
  ].join("\n");
  fs.writeFileSync(path.join(OUT_DIR, "g2-a1-german-target-dictionary-master-owner-review.md"), ownerMd);
}

module.exports = {
  buildGermanTargetDictionaryRegistry,
  applyRegistryToStructuredJson,
  writeArtifacts,
};
