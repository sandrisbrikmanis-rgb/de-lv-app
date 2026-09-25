#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadG2Level } = require("./lib/content-crowdin-bridge/roundtrip");
const { listAllTargetAppLanguages } = require("./lib/g2-a1-production-current/source-adapters/target");
const { runCardTranslationAuditForLanguage } = require("./lib/g2-a1-production-current/card-translation-lang-run");
const {
  provenTargetLemmaFromAudit,
  targetSourceUrlFromAudit,
  assessHausPilotTargetOfficialValidation,
} = require("./lib/g2-a1-production-current/card-translation-audit-flow");
const { closeBrowserPool } = require("./lib/g2-a1-production-current/source-adapters/browser/pool");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-sample-lemmas");
const OUT_JSON = path.join(OUT_DIR, "sample-lemmas-32lang-audit.json");

const SAMPLE_LEMMAS = Object.freeze([
  { level: "a1", lemma: "arbeiten", partOfSpeech: "verb" },
  { level: "a1", lemma: "Besucher", partOfSpeech: "noun", article: "der" },
  { level: "a1", lemma: "Brot", partOfSpeech: "noun", article: "das" },
  { level: "a1", lemma: "Frage", partOfSpeech: "noun", article: "die" },
  { level: "a2", lemma: "stinken", partOfSpeech: "verb" },
  { level: "a2", lemma: "Versprechen", partOfSpeech: "noun", article: "das" },
  { level: "a2", lemma: "Kleingeld", partOfSpeech: "noun", article: "das" },
  { level: "a2", lemma: "aufkommen", partOfSpeech: "verb" },
  { level: "b1", lemma: "umher", partOfSpeech: "adverb" },
  { level: "b1", lemma: "bewirten", partOfSpeech: "verb" },
  { level: "b1", lemma: "Attacke", partOfSpeech: "noun", article: "die" },
  { level: "b1", lemma: "gefüllt", partOfSpeech: "adjective" },
  { level: "b2", lemma: "glotzen", partOfSpeech: "verb" },
  { level: "b2", lemma: "Goldader", partOfSpeech: "noun", article: "die" },
  { level: "b2", lemma: "Grenzkonflikt", partOfSpeech: "noun", article: "der" },
  { level: "b2", lemma: "Machtgier", partOfSpeech: "noun", article: "die" },
]);

function findCurrentTarget(appLang, level, lemma) {
  const cards = loadG2Level(appLang, level);
  for (const card of cards) {
    if (String(card.de || "").trim() === lemma) {
      return card.lv != null ? String(card.lv).trim() : null;
    }
  }
  return null;
}

function summarizeAudit(appLang, spec, audit, currentTarget) {
  const targetOfficial = assessHausPilotTargetOfficialValidation(audit);
  const candidates = (audit.dictionaryCandidates || []).slice(0, 8).map((c) => ({
    targetLemma: c.targetLemma || c.wordLb,
    pos: c.pos,
    deTranslation: c.deTranslation,
    dictionaryUrl: c.articleUrl,
  }));
  return {
    appLang,
    level: spec.level,
    deLemma: spec.lemma,
    partOfSpeech: spec.partOfSpeech,
    article: spec.article || null,
    currentTarget,
    verdict: audit.verdict,
    provenTargetLemma: provenTargetLemmaFromAudit(audit),
    targetOfficialValidation: targetOfficial.valid,
    deSourceUrl: audit.deSourceUrl || audit.deAuthority?.entryUrl || null,
    bilingualSourceUrl: audit.bilingualSourceUrl || audit.bilingualMeta?.sourceUrl || null,
    bilingualResultUrl: audit.bilingualResultUrl || audit.bilingualMeta?.resultUrl || null,
    targetSourceUrl: targetSourceUrlFromAudit(audit),
    blockers: audit.blockers || [],
    dictionaryCandidates: candidates,
    rejectedCount: audit.rejectedCandidates?.length || 0,
  };
}

async function main() {
  let langs = listAllTargetAppLanguages().sort();
  let lemmas = [...SAMPLE_LEMMAS];
  const langFilter = process.env.CARD_TRANSLATION_SAMPLE_LANGS;
  const wordFilter = process.env.CARD_TRANSLATION_SAMPLE_WORDS;
  if (langFilter && langFilter.trim() !== "all") {
    const want = new Set(langFilter.split(/[\s,]+/).filter(Boolean));
    langs = langs.filter((l) => want.has(l));
  }
  if (wordFilter) {
    const want = new Set(wordFilter.split(/[\s,]+/).filter(Boolean).map((s) => s.toLowerCase()));
    lemmas = lemmas.filter((w) => want.has(w.lemma.toLowerCase()));
  }

  const rows = [];
  for (const spec of lemmas) {
    for (const appLang of langs) {
      const currentTarget = findCurrentTarget(appLang, spec.level, spec.lemma);
      const cardGerman = {
        lemma: spec.lemma,
        partOfSpeech: spec.partOfSpeech,
        article: spec.article,
        germanMeaning: null,
      };
      // eslint-disable-next-line no-await-in-loop
      const audit = await runCardTranslationAuditForLanguage(appLang, cardGerman, currentTarget);
      rows.push(summarizeAudit(appLang, spec, audit, currentTarget));
      process.stderr.write(`${spec.level}:${spec.lemma}@${appLang} ${audit.verdict}\n`);
    }
  }

  await closeBrowserPool();

  const byVerdict = {};
  for (const r of rows) {
    byVerdict[r.verdict] = (byVerdict[r.verdict] || 0) + 1;
  }

  const report = {
    schemaVersion: "g2-a1-card-translation-sample-lemmas-v1",
    generatedAt: new Date().toISOString(),
    policy: "DE DWDS/Duden + catalog DE→TARGET + TARGET official validator; production CURRENT from data/**",
    lemmaCount: lemmas.length,
    languageCount: langs.length,
    rowCount: rows.length,
    verdictCounts: byVerdict,
    rows,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_JSON, `${JSON.stringify(report, null, 2)}\n`);

  console.log(
    JSON.stringify(
      {
        ok: true,
        path: path.relative(ROOT, OUT_JSON),
        rowCount: rows.length,
        verdictCounts: byVerdict,
      },
      null,
      2,
    ),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
