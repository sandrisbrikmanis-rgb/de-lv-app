#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { listAllTargetAppLanguages } = require("./source-adapters/target");
const { lookupTargetOfficialEntry } = require("./source-adapters/target");
const { lookupDeOfficialEntry } = require("./source-adapters/de");
const { buildAllowlistForLanguage } = require("./registry-domain-allowlist");
const { loadStructuredLanguageAuthoritySources, rowByAppCode, allUrlsForLanguage } = require("../master-language-authority-sources-33");
const { closeBrowserPool } = require("./source-adapters/browser/pool");
const {
  GERMAN_PILOTS,
  TARGET_APP_CODES,
  ACCESS_RESULT,
  expectedTarget,
} = require("./pilot-content-access-32-catalog");
const {
  probeAdditionalDictionary,
  probePrimaryDictionaryUrls,
  probeBilingualStructured,
  adapterSideToProbeRecord,
} = require("./pilot-content-access-probe");
const { evidenceQualityOk, isValidatedEntry } = require("./targeted-source-access-validation");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/pilot-content-access-32");

function pickBestResult(primary, additional, bilingual, deBundle) {
  const tiered = [
    { tier: "PRIMARY", ...primary },
    { tier: "ADDITIONAL_DICTIONARY", ...additional },
    { tier: "BILINGUAL", ...bilingual },
  ].filter(Boolean);

  const deOk = isValidatedEntry(deBundle?.de) && evidenceQualityOk(deBundle.de);
  for (const t of tiered) {
    if (t.accessResult === "TRANSLATION_PAIR_VERIFIED") return { ...t, deValidated: deOk };
  }
  if (deOk) {
    for (const t of tiered) {
      if (t.entryFound === "YES" && t.accessResult === "TARGET_LEMMA_ONLY") {
        return {
          ...t,
          accessResult: "TRANSLATION_PAIR_VERIFIED",
          checksTranslationPair: true,
          deValidated: true,
          note: "DE_official_plus_TARGET_monolingual_entry",
        };
      }
    }
  }
  for (const t of tiered) {
    if (t.entryFound === "YES") return { ...t, deValidated: deOk };
  }
  for (const t of tiered) {
    if (t.accessResult === "SOURCE_ACCESS_BLOCKED") return { ...t, deValidated: deOk };
  }
  return {
    tier: "NONE",
    accessResult: "ENTRY_NOT_FOUND",
    entryFound: "NO",
    checksTranslationPair: false,
    deValidated: deOk,
  };
}

function summarizeLanguage(pilotRows) {
  const verified = pilotRows.filter((p) => p.final.accessResult === "TRANSLATION_PAIR_VERIFIED").length;
  const lemmaOnly = pilotRows.filter((p) => p.final.accessResult === "TARGET_LEMMA_ONLY").length;
  const blocked = pilotRows.filter((p) => p.final.accessResult === "SOURCE_ACCESS_BLOCKED").length;
  let finalStatus;
  if (verified === 3) finalStatus = "TRANSLATION_PAIR_VERIFIED";
  else if (verified === 2 || (verified === 1 && lemmaOnly >= 1)) finalStatus = ACCESS_RESULT.PARTIAL_2_OF_3;
  else if (verified === 1 || lemmaOnly >= 2) finalStatus = ACCESS_RESULT.PARTIAL_1_OF_3;
  else if (blocked > 0 && verified === 0 && lemmaOnly === 0) finalStatus = ACCESS_RESULT.SOURCE_ACCESS_BLOCKED;
  else if (lemmaOnly > 0) finalStatus = ACCESS_RESULT.TARGET_LEMMA_ONLY;
  else finalStatus = ACCESS_RESULT.ENTRY_NOT_FOUND;

  const primaryOk = pilotRows.some((p) => p.primary?.entryFound === "YES");
  const additionalOk = pilotRows.some((p) => p.additional?.entryFound === "YES");
  const translationCheckPossible = pilotRows.some((p) => p.final.checksTranslationPair);

  return {
    verifiedCount: verified,
    lemmaOnlyCount: lemmaOnly,
    blockedCount: blocked,
    finalStatus,
    primaryTierUsable: primaryOk ? "YES" : "NO",
    additionalTierUsable: additionalOk ? "YES" : "NO",
    translationPairCheckable: translationCheckPossible ? "YES" : "NO",
  };
}

async function runPilotForLanguage(appCode, structuredRow, options = {}) {
  const allow = buildAllowlistForLanguage(appCode);
  if (!allow.pass) {
    return { appCode, error: allow.error, pilots: [] };
  }
  const allowedDomains = [...allow.target.allowedDomains, ...allow.de.allowedDomains];
  const pilotRecords = [];

  for (const pilot of GERMAN_PILOTS) {
    const targetLemma = expectedTarget(appCode, pilot.id);
    if (!targetLemma) {
      pilotRecords.push({ pilotId: pilot.id, error: "MISSING_EXPECTED_TARGET" });
      continue;
    }

    const deSide = await lookupDeOfficialEntry({
      lookupTerm: pilot.deLemma,
      allowedDomains: allow.de.allowedDomains,
      authorityName: allow.de.authorityName,
      provenance: { role: "DE", language: "de", pilotId: pilot.id },
    });

    const adapterTarget = await lookupTargetOfficialEntry({
      appLang: appCode,
      lookupTerm: targetLemma,
      allowedDomains: allow.target.allowedDomains,
      authorityName: allow.target.authorityName,
      provenance: { role: "TARGET", language: appCode, pilotId: pilot.id },
    });

    let primary = adapterSideToProbeRecord(adapterTarget, structuredRow.PRIMARY_DICTIONARY_AUTHORITY);
    if (!primary || primary.entryFound !== "YES") {
      const primaryUrls =
        structuredRow.PRIMARY_DICTIONARY_URLS?.length > 0
          ? structuredRow.PRIMARY_DICTIONARY_URLS
          : structuredRow.LANGUAGE_NORM_URLS || [];
      primary = await probePrimaryDictionaryUrls({
        urls: primaryUrls,
        authorityName:
          structuredRow.PRIMARY_DICTIONARY_AUTHORITY || structuredRow.LANGUAGE_NORM_AUTHORITY,
        allowedDomains,
        pilot,
        targetLemma,
      });
      primary.tier = "PRIMARY";
    } else {
      primary.tier = "PRIMARY_ADAPTER";
    }

    let additional = null;
    if (structuredRow.ADDITIONAL_DICTIONARY_URLS?.length) {
      additional = await probeAdditionalDictionary({
        baseUrl: structuredRow.ADDITIONAL_DICTIONARY_URLS[0],
        authorityName: structuredRow.ADDITIONAL_DICTIONARY_AUTHORITY,
        appCode,
        standardCode: structuredRow.standardCode,
        allowedDomains,
        pilot,
        targetLemma,
      });
      additional.tier = "ADDITIONAL_DICTIONARY";
    }

    let bilingual = await probeBilingualStructured(structuredRow.GERMAN_TARGET_BILINGUAL_SOURCES, {
      appCode,
      pilot,
      targetLemma,
    });
    if (bilingual) bilingual.tier = "BILINGUAL";

    const final = pickBestResult(primary, additional, bilingual, { de: deSide });

    pilotRecords.push({
      language: appCode,
      germanSourceWord: pilot.deSurface,
      expectedTargetPilot: targetLemma,
      pilotId: pilot.id,
      pilotLabel: pilot.label,
      primary,
      additional,
      bilingual,
      de: {
        authorityName: deSide.authorityName,
        entryUrl: deSide.entryUrl || deSide.finalUrl,
        outcome: deSide.outcome,
        entryFound: isValidatedEntry(deSide) && evidenceQualityOk(deSide) ? "YES" : "NO",
      },
      final,
    });

    if (options.onProgress) {
      options.onProgress({ appCode, pilotId: pilot.id, final: final.accessResult });
    }
  }

  return { appCode, pilots: pilotRecords, summary: summarizeLanguage(pilotRecords) };
}

async function buildPilotContentAccess32(options = {}) {
  let langs = TARGET_APP_CODES.filter((c) => listAllTargetAppLanguages().includes(c));
  if (options.onlyLanguages?.length) {
    langs = langs.filter((c) => options.onlyLanguages.includes(c));
  }
  if (!options.onlyLanguages?.length && langs.length !== 32) {
    throw new Error(`TARGET_LANG_COUNT_${langs.length}`);
  }
  const structured = loadStructuredLanguageAuthoritySources();
  if (!structured.pass) throw new Error(structured.error);

  const rows = [];
  for (const appCode of langs) {
    const masterRow = rowByAppCode(structured.languages, appCode);
    if (!masterRow) throw new Error(`MISSING_ROW_${appCode}`);
    // eslint-disable-next-line no-await-in-loop
    const langResult = await runPilotForLanguage(appCode, masterRow, options);
    rows.push(langResult);
  }

  await closeBrowserPool();

  const metrics = {
    languagesTotal: 32,
    fullTranslationPairVerified: rows.filter((r) => r.summary.finalStatus === "TRANSLATION_PAIR_VERIFIED").length,
    targetLemmaOnlyFull: rows.filter((r) => r.summary.finalStatus === ACCESS_RESULT.TARGET_LEMMA_ONLY).length,
    partial2of3: rows.filter((r) => r.summary.finalStatus === ACCESS_RESULT.PARTIAL_2_OF_3).length,
    partial1of3: rows.filter((r) => r.summary.finalStatus === ACCESS_RESULT.PARTIAL_1_OF_3).length,
    zeroOf3: rows.filter((r) => r.summary.verifiedCount === 0 && r.summary.lemmaOnlyCount === 0).length,
    technicallyBlocked: rows.filter((r) => r.summary.finalStatus === ACCESS_RESULT.SOURCE_ACCESS_BLOCKED).length,
    notSuitableForTranslationCheck: rows.filter((r) =>
      r.pilots.some((p) => p.final?.accessResult === ACCESS_RESULT.SOURCE_NOT_SUITABLE_FOR_TRANSLATION_CHECK),
    ).length,
  };

  const targetCount = options.onlyLanguages?.length || 32;
  if (targetCount === 32) {
    metrics.languagesTotal = 32;
  }
  const allFull = targetCount === 32 && metrics.fullTranslationPairVerified === 32;
  return {
    builtAt: new Date().toISOString(),
    classification: allFull
      ? "G2_A1_OFFICIAL_SOURCE_CONTENT_ACCESS_VERIFIED_32_OF_32"
      : "G2_A1_OFFICIAL_SOURCE_CONTENT_ACCESS_PARTIALLY_VERIFIED",
    nextAction: allFull ? "OWNER_REVIEW_CONTENT_ACCESS_MATRIX" : "RESOLVE_EXACT_LANGUAGE_AND_PILOT_SOURCE_GAPS",
    metrics,
    languages: rows,
    fullA1AuditRan: false,
  };
}

function writePilotContentAccessArtifacts(payload) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "pilot-content-access-32.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`);

  const lines = [
    "# G2/A1 — 32 valodu avotu satura pieejamība (3 piloti)",
    "",
    `Classification: **${payload.classification}**`,
    `NEXT_ACTION: **${payload.nextAction}**`,
    "",
    "## Metriķas",
    "",
    `- valodas kopā: ${payload.metrics.languagesTotal}`,
    `- pilni 3/3 tulkojuma pāri verificēti: ${payload.metrics.fullTranslationPairVerified}`,
    `- 3/3 TARGET lemmas (tulkojuma pāris nav pilnībā pierādīts): ${payload.metrics.targetLemmaOnlyFull}`,
    `- daļēji 2/3: ${payload.metrics.partial2of3}`,
    `- daļēji 1/3: ${payload.metrics.partial1of3}`,
    `- 0/3: ${payload.metrics.zeroOf3}`,
    `- tehniski bloķēti avoti: ${payload.metrics.technicallyBlocked}`,
    "",
    "## Gala tabula",
    "",
    "| Valoda | Māja | Vakar | Nakts | PRIMARY | ADDITIONAL | Tulkojuma pāris pārbaudāms | Gala statuss |",
    "|--------|------|-------|-------|---------|------------|----------------------------|--------------|",
  ];

  for (const lang of payload.languages) {
    const byPilot = Object.fromEntries(lang.pilots.map((p) => [p.pilotId, p.final?.accessResult || "—"]));
    lines.push(
      `| ${lang.appCode} | ${byPilot.haus || "—"} | ${byPilot.gestern || "—"} | ${byPilot.nacht || "—"} | ${lang.summary.primaryTierUsable} | ${lang.summary.additionalTierUsable} | ${lang.summary.translationPairCheckable} | ${lang.summary.finalStatus} |`,
    );
  }

  lines.push("");
  fs.writeFileSync(path.join(OUT_DIR, "pilot-content-access-32.md"), `${lines.join("\n")}\n`);
  return { jsonPath, mdPath: path.join(OUT_DIR, "pilot-content-access-32.md") };
}

module.exports = {
  OUT_DIR,
  buildPilotContentAccess32,
  writePilotContentAccessArtifacts,
  runPilotForLanguage,
};
