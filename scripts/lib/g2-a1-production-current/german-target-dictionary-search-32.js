#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { loadStructuredLanguageAuthoritySources, stripTrackingParams } = require("../master-language-authority-sources-33");
const { closeBrowserPool } = require("./source-adapters/browser/pool");
const {
  SEARCH_PILOT_WORDS,
  FINAL_STATUS,
  PILOT_FIELD,
  TARGET_APP_CODES,
  loadManifest,
  loadOverrides,
  candidatesForLanguage,
  formatEntryCount,
} = require("./german-target-dictionary-search-catalog");
const { probePilotWord } = require("./german-target-dictionary-search-probe");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/german-target-dictionary-search-32");

function scoreCandidate(pilotResults) {
  const counts = {
    TRANSLATION_VALIDATED: 0,
    FOUND: 0,
    NOT_FOUND: 0,
    BLOCKED: 0,
    AUTOMATIC_TRANSLATION_ONLY: 0,
    NEEDS_SOURCE_REVIEW: 0,
  };
  for (const p of pilotResults) counts[p.pilotStatus] = (counts[p.pilotStatus] || 0) + 1;
  return (
    counts.TRANSLATION_VALIDATED * 12 +
    counts.FOUND * 10 -
    counts.NOT_FOUND -
    counts.BLOCKED * 5 -
    counts.AUTOMATIC_TRANSLATION_ONLY * 8 -
    counts.NEEDS_SOURCE_REVIEW * 3
  );
}

function classifyLanguage(candidate, pilotMap, triedSubscriptionOnly) {
  const statuses = SEARCH_PILOT_WORDS.map((w) => pilotMap[w.lemma].pilotStatus);
  const found = statuses.filter(
    (s) => s === PILOT_FIELD.FOUND || s === PILOT_FIELD.TRANSLATION_VALIDATED,
  ).length;
  const blocked = statuses.every((s) => s === PILOT_FIELD.BLOCKED);
  const autoOnly = statuses.every((s) => s === PILOT_FIELD.AUTOMATIC_TRANSLATION_ONLY);

  if (candidate.access === "SUBSCRIPTION_REQUIRED" || triedSubscriptionOnly) {
    if (found === 0 && blocked) return FINAL_STATUS.SUBSCRIPTION_REQUIRED;
  }
  if (blocked && found === 0) return FINAL_STATUS.TECHNICAL_ACCESS_BLOCKED;
  if (autoOnly && found === 0) return FINAL_STATUS.AUTOMATIC_TRANSLATOR_ONLY;
  if (found === SEARCH_PILOT_WORDS.length) return FINAL_STATUS.DICTIONARY_READY;
  if (found > 0) return FINAL_STATUS.DICTIONARY_PARTIALLY_READY;
  return FINAL_STATUS.NO_SUITABLE_DICTIONARY_FOUND;
}

async function evaluateCandidate(candidate, appCode) {
  const pilots = {};
  for (const word of SEARCH_PILOT_WORDS) {
    // eslint-disable-next-line no-await-in-loop
    pilots[word.lemma] = await probePilotWord(candidate, word.lemma, appCode, word);
  }
  const triedSubscriptionOnly = Boolean(candidate.subscriptionReferenceOnly);
  const finalStatus = classifyLanguage(candidate, pilots, triedSubscriptionOnly);
  return { candidate, pilots, finalStatus, score: scoreCandidate(Object.values(pilots)) };
}

async function selectDictionaryForLanguage(appCode, manifest, overrides) {
  const candidates = candidatesForLanguage(appCode, manifest, overrides);
  let best = null;
  for (const candidate of candidates) {
    if (candidate.subscriptionReferenceOnly) continue;
    // eslint-disable-next-line no-await-in-loop
    const evalResult = await evaluateCandidate(candidate, appCode);
    if (!best || evalResult.score > best.score) best = evalResult;
    if (evalResult.finalStatus === FINAL_STATUS.DICTIONARY_READY) break;
    if (evalResult.score >= 30) break;
  }

  if (!best) {
    const fallback = candidates[0];
    const evalResult = await evaluateCandidate(fallback, appCode);
    best = evalResult;
  }

  return best;
}

function registryUrlFor(appCode, structured) {
  const row = structured.languages.find((r) => r.appCode === appCode);
  return row?.GERMAN_TARGET_DICTIONARY_URL ? stripTrackingParams(row.GERMAN_TARGET_DICTIONARY_URL) : null;
}

function buildOwnerProposals(rows, structured, overrides) {
  const proposals = [];
  for (const row of rows) {
    const regUrl = registryUrlFor(row.appCode, structured);
    const selUrl = stripTrackingParams(row.dictionaryUrl);
    const changed = regUrl && selUrl !== regUrl;
    const ov = overrides.languages?.[row.appCode];

    if (changed || !regUrl) {
      proposals.push({
        appCode: row.appCode,
        standardCode: row.standardCode,
        dictionaryName: row.dictionaryName,
        publisher: row.publisher,
        languagePair: row.languagePair,
        url: selUrl,
        entryCount: row.entryCount,
        entryCountStatus: row.entryCountStatus,
        access: row.access,
        finalStatus: row.finalStatus,
        pilotSummary: row.pilotSummary,
        ownerApprovalRequired: "OWNER_APPROVAL_REQUIRED",
        notes: changed
          ? `Proposed public de→TARGET source differs from current MASTER GERMAN_TARGET_DICTIONARY_URL (${regUrl})`
          : "New MASTER integration proposal",
      });
    }

    if (ov?.subscriptionOnly) {
      proposals.push({
        appCode: row.appCode,
        standardCode: row.standardCode,
        dictionaryName: ov.subscriptionOnly.name,
        publisher: ov.subscriptionOnly.publisher,
        languagePair: ov.subscriptionOnly.languagePair,
        url: stripTrackingParams(ov.subscriptionOnly.url),
        entryCount: ov.subscriptionOnly.entryCount,
        entryCountStatus: ov.subscriptionOnly.entryCountStatus,
        access: "SUBSCRIPTION_REQUIRED",
        finalStatus: FINAL_STATUS.SUBSCRIPTION_REQUIRED,
        pilotSummary: "Not used as sole audit source without OWNER subscription",
        ownerApprovalRequired: "OWNER_APPROVAL_REQUIRED",
        notes: "Subscription reference — supplement to public dictionary",
      });
    }
  }
  return proposals;
}

function pilotSummaryFrom(pilots) {
  return SEARCH_PILOT_WORDS.map((w) => `${w.lemma}=${pilots[w.lemma].pilotStatus}`).join("; ");
}

function computeMetrics(rows) {
  const m = {
    DICTIONARY_READY: 0,
    DICTIONARY_PARTIALLY_READY: 0,
    SUBSCRIPTION_REQUIRED: 0,
    AUTOMATIC_TRANSLATOR_ONLY: 0,
    TECHNICAL_ACCESS_BLOCKED: 0,
    NO_SUITABLE_DICTIONARY_FOUND: 0,
  };
  for (const r of rows) m[r.finalStatus] = (m[r.finalStatus] || 0) + 1;
  return m;
}

function resolveClassification(metrics) {
  if (metrics.DICTIONARY_READY === 32) {
    return {
      classification: "G2_A1_GERMAN_TARGET_DICTIONARY_ACCESS_READY_32_OF_32",
      nextAction: "OWNER_REVIEW_AND_APPROVE_DICTIONARY_REGISTRY",
    };
  }
  return {
    classification: "G2_A1_GERMAN_TARGET_DICTIONARY_ACCESS_PARTIALLY_READY",
    nextAction: "RESOLVE_REMAINING_EXACT_DICTIONARY_GAPS",
  };
}

function rowsToMarkdownTable(rows) {
  const header =
    "| Valoda | Vārdnīca | Vācu–TARGET URL | Haus | abholen | Route | Getriebe | Apjoms | Piekļuve | Gala statuss |";
  const sep =
    "|--------|-----------|-----------------|------|---------|-------|----------|---------|----------|---------------|";
  const lines = rows.map((r) => {
    const p = r.pilots;
    return `| ${r.appCode} | ${r.dictionaryName} | ${r.dictionaryUrl} | ${p.Haus.pilotStatus} | ${p.abholen.pilotStatus} | ${p.Route.pilotStatus} | ${p.Getriebe.pilotStatus} | ${r.entryCountDisplay} | ${r.access} | ${r.finalStatus} |`;
  });
  return [header, sep, ...lines].join("\n");
}

function proposalsToCsv(proposals) {
  const header =
    "appCode,standardCode,dictionaryName,publisher,languagePair,url,entryCount,entryCountStatus,access,finalStatus,pilotSummary,ownerApprovalRequired,notes";
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const lines = proposals.map((p) =>
    [
      p.appCode,
      p.standardCode,
      p.dictionaryName,
      p.publisher,
      p.languagePair,
      p.url,
      p.entryCount,
      p.entryCountStatus,
      p.access,
      p.finalStatus,
      p.pilotSummary,
      p.ownerApprovalRequired,
      p.notes,
    ]
      .map(esc)
      .join(","),
  );
  return [header, ...lines].join("\n");
}

async function buildGermanTargetDictionarySearch32(options = {}) {
  const manifest = loadManifest();
  const overrides = loadOverrides();
  const structured = loadStructuredLanguageAuthoritySources();
  if (!structured.pass) throw new Error(structured.error);

  const langs = options.onlyLanguages?.length
    ? TARGET_APP_CODES.filter((c) => options.onlyLanguages.includes(c))
    : TARGET_APP_CODES;

  const rows = [];
  for (const appCode of langs) {
    // eslint-disable-next-line no-await-in-loop
    const selected = await selectDictionaryForLanguage(appCode, manifest, overrides);
    const { candidate, pilots, finalStatus } = selected;
    const pilotObj = {};
    for (const w of SEARCH_PILOT_WORDS) pilotObj[w.lemma] = pilots[w.lemma];

    rows.push({
      appCode,
      standardCode: candidate.standardCode,
      dictionaryName: candidate.name,
      publisher: candidate.publisher,
      dictionaryUrl: candidate.url,
      languagePair: candidate.languagePair,
      entryCount: candidate.entryCount,
      entryCountStatus: candidate.entryCountStatus,
      entryCountDisplay: formatEntryCount(candidate),
      access: candidate.access,
      finalStatus,
      pilotSummary: pilotSummaryFrom(pilots),
      pilots: pilotObj,
      masterRegistryUrl: registryUrlFor(appCode, structured),
      registryMatch: registryUrlFor(appCode, structured) === stripTrackingParams(candidate.url),
      candidateId: candidate.id,
    });

    if (options.onProgress) {
      options.onProgress({ appCode, finalStatus, score: selected.score });
    }
  }

  await closeBrowserPool();

  const metrics = computeMetrics(rows);
  const { classification, nextAction } = resolveClassification(metrics);
  const proposals = buildOwnerProposals(rows, structured, overrides);

  const problematic = rows
    .filter((r) => r.finalStatus !== FINAL_STATUS.DICTIONARY_READY)
    .map((r) => ({ appCode: r.appCode, status: r.finalStatus, dictionary: r.dictionaryName }));

  return {
    schemaVersion: "g2-a1-german-target-dictionary-search-v1",
    generatedAt: new Date().toISOString(),
    classification,
    nextAction,
    metrics,
    problematicLanguages: problematic,
    newOrUpdatedDictionaries: rows.filter((r) => !r.registryMatch).map((r) => ({ appCode: r.appCode, url: r.dictionaryUrl, name: r.dictionaryName })),
    rows,
    ownerProposals: proposals,
    constraints: {
      productionDataChanged: false,
      deContentChanged: false,
      crowdinChanged: false,
      fullA1AuditRan: false,
      aiTranslationUsed: false,
    },
  };
}

function writeGermanTargetDictionarySearchArtifacts(payload) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "german-target-dictionary-search-32.json");
  const mdPath = path.join(OUT_DIR, "german-target-dictionary-search-32.md");
  const csvPath = path.join(OUT_DIR, "german-target-dictionary-owner-proposals.csv");
  const verifyPath = path.join(OUT_DIR, "german-target-dictionary-search-verification.json");

  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  const md = [
    "# G2/A1 — German–TARGET dictionary search (32 languages)",
    "",
    `**Classification:** \`${payload.classification}\``,
    `**NEXT_ACTION:** \`${payload.nextAction}\``,
    "",
    "## Status counts",
    "",
    ...Object.entries(payload.metrics).map(([k, v]) => `- \`${k}\`: ${v}/32`),
    "",
    "## Final table",
    "",
    rowsToMarkdownTable(payload.rows),
    "",
    "## Problematic languages",
    "",
    payload.problematicLanguages.length
      ? payload.problematicLanguages.map((p) => `- **${p.appCode}**: ${p.status} (${p.dictionary})`).join("\n")
      : "_None — all DICTIONARY_READY._",
    "",
    "## Constraints",
    "",
    "- No `data/**` / `www/data/**` / DE / Crowdin changes",
    "- No full 95 731-field A1 audit",
    "- Pilot translations read from dictionary pages only (no AI/MT)",
    "",
  ].join("\n");
  fs.writeFileSync(mdPath, md, "utf8");
  fs.writeFileSync(csvPath, `${proposalsToCsv(payload.ownerProposals)}\n`, "utf8");

  const verification = {
    schemaVersion: "g2-a1-german-target-dictionary-search-verification-v1",
    generatedAt: payload.generatedAt,
    languageCount: payload.rows.length,
    pilotWordsPerLanguage: SEARCH_PILOT_WORDS.length,
    classification: payload.classification,
    metrics: payload.metrics,
    constraints: payload.constraints,
  };
  fs.writeFileSync(verifyPath, `${JSON.stringify(verification, null, 2)}\n`, "utf8");

  return { jsonPath, mdPath, csvPath, verifyPath };
}

module.exports = {
  OUT_DIR,
  buildGermanTargetDictionarySearch32,
  writeGermanTargetDictionarySearchArtifacts,
  evaluateCandidate,
  selectDictionaryForLanguage,
  scoreCandidate,
  classifyLanguage,
  FINAL_STATUS,
  PILOT_FIELD,
  SEARCH_PILOT_WORDS,
};
