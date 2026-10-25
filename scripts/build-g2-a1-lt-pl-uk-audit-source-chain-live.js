#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadOverrides } = require("./lib/g2-a1-production-current/german-target-dictionary-search-catalog");
const {
  probePilotWord,
  buildSearchUrlForCandidate,
  fetchDictionaryPageForCandidate,
  extractReverseTargetDePair,
} = require("./lib/g2-a1-production-current/german-target-dictionary-search-probe");
const { lookupTargetOfficialEntry } = require("./lib/g2-a1-production-current/source-adapters/target");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");
const { closeBrowserPool } = require("./lib/g2-a1-production-current/source-adapters/browser/pool");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-lt-pl-uk-source-chain");
const HAUS = Object.freeze({
  lt: { de: "Haus", target: "namas", reverseDe: "Haus" },
  pl: { de: "Haus", target: "Dom", reverseDe: "Haus" },
  uk: { de: "Haus", target: "будинок", reverseDe: "Haus" },
});

function candidateFromSpec(spec) {
  if (!spec) return null;
  return {
    id: spec.id,
    name: spec.name,
    url: spec.url,
    type: spec.type,
    access: spec.access || "PUBLIC_BROWSER_SESSION",
    languagePair: spec.languagePair,
    platform: spec.platform,
  };
}

async function probeDeToTarget(appLang, deLemma) {
  const langSpec = loadOverrides().languages?.[appLang];
  const cand = candidateFromSpec(langSpec?.publicPrimary);
  if (!cand) return { ok: false, code: "NO_PUBLIC_PRIMARY" };
  const probe = await probePilotWord(cand, deLemma, appLang);
  const ok = probe.pilotStatus === "FOUND" && Boolean(probe.sampleTranslation);
  return {
    ok,
    direction: "de→target",
    sourceId: cand.id,
    sourceUrl: cand.url,
    entryUrl: probe.resultUrl || null,
    pair: ok ? `${deLemma} → ${probe.sampleTranslation}` : null,
    pilotStatus: probe.pilotStatus,
    note: probe.note || null,
  };
}

async function probeTargetToDe(appLang, targetLemma, expectedDe) {
  const langSpec = loadOverrides().languages?.[appLang];
  const cand = candidateFromSpec(langSpec?.reversePrimary);
  if (!cand) return { ok: false, code: "NO_REVERSE_PRIMARY" };
  const searchUrl = buildSearchUrlForCandidate(cand, targetLemma, appLang);
  const page = await fetchDictionaryPageForCandidate(cand, targetLemma);
  let confirmed = extractReverseTargetDePair(page.text, targetLemma, expectedDe);
  if (!confirmed.length && /udew\.uni-leipzig\.de/i.test(searchUrl) && page.html) {
    const { extractUdewGermanFromHtml } = require("./lib/g2-a1-production-current/udew-http-fetch");
    const germanHits = extractUdewGermanFromHtml(page.html, expectedDe);
    if (germanHits.some((g) => new RegExp(`^${expectedDe}$`, "i").test(g))) {
      confirmed = [expectedDe];
    }
  }
  const ok = confirmed.length > 0;
  return {
    ok,
    direction: "target→de",
    sourceId: cand.id,
    sourceUrl: cand.url,
    entryUrl: page.finalUrl || searchUrl,
    pair: ok ? `${targetLemma} → ${expectedDe}` : null,
    pilotStatus: ok ? "FOUND" : "NOT_FOUND",
  };
}

async function probeTargetOfficial(appLang, targetLemma) {
  const r = await lookupTargetOfficialEntry({
    appLang,
    lookupTerm: targetLemma,
    allowedDomains: [],
    authorityName: appLang,
    provenance: { probe: "lt-pl-uk-source-chain-live" },
  });
  const ok = r.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED;
  return {
    ok,
    lookupTerm: targetLemma,
    adapterId: r.adapterId,
    entryUrl: r.entryUrl || r.finalUrl || null,
    headword: r.entryHeadwordOrRule || null,
    outcome: r.outcome,
  };
}

async function main() {
  const langs = ["lt", "pl", "uk"];
  const live = {};
  for (const appLang of langs) {
    const pilot = HAUS[appLang];
    // eslint-disable-next-line no-await-in-loop
    const deToTarget = await probeDeToTarget(appLang, pilot.de);
    // eslint-disable-next-line no-await-in-loop
    const targetToDe = await probeTargetToDe(appLang, pilot.target, pilot.reverseDe);
    // eslint-disable-next-line no-await-in-loop
    const targetOfficial = await probeTargetOfficial(appLang, pilot.target);
    live[appLang] = {
      pilotLemma: pilot.de,
      productionTarget: pilot.target,
      deToTarget,
      targetToDe,
      targetOfficial,
    };
  }
  await closeBrowserPool();

  const report = {
    schemaVersion: "g2-a1-lt-pl-uk-audit-source-chain-live-v1",
    generatedAt: new Date().toISOString(),
    pilotCard: "Haus (a1)",
    languages: live,
    auditCatalogs: [
      "scripts/lib/data/g2-a1-card-translation-bilingual-audit-lv-lt-pl.json",
      "scripts/lib/data/g2-a1-card-translation-bilingual-audit-uk.json",
    ],
    overrides: "scripts/lib/data/german-target-dictionary-search-overrides-32.json",
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "lt-pl-uk-audit-source-chain-live.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const lines = [
    "# lt / pl / uk — audita avotu ķēde (live)",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "| Valoda | DE→TARGET | TARGET→DE | TARGET oficiālais |",
    "|--------|-----------|-----------|-------------------|",
  ];
  for (const lang of langs) {
    const row = live[lang];
    const dt = row.deToTarget.ok ? "OK" : "BLOCKED";
    const td = row.targetToDe.ok ? "OK" : "BLOCKED";
    const to = row.targetOfficial.ok ? "OK" : "BLOCKED";
    lines.push(`| ${lang} | ${dt} | ${td} | ${to} |`);
  }
  lines.push("", "## URL pierādījumi (Haus)", "");
  for (const lang of langs) {
    const row = live[lang];
    lines.push(`### ${lang}`);
    lines.push(`- DE→TARGET: ${row.deToTarget.pair || "—"} @ ${row.deToTarget.entryUrl || "—"}`);
    lines.push(`- TARGET→DE: ${row.targetToDe.pair || "—"} @ ${row.targetToDe.entryUrl || "—"}`);
    lines.push(
      `- TARGET oficiālais (${row.targetOfficial.adapterId}): ${row.targetOfficial.headword || "—"} @ ${row.targetOfficial.entryUrl || "—"}`,
    );
    lines.push("");
  }
  fs.writeFileSync(path.join(OUT_DIR, "lt-pl-uk-audit-source-chain-live.md"), `${lines.join("\n")}\n`);
  console.log(JSON.stringify({ ok: true, jsonPath, languages: langs }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
