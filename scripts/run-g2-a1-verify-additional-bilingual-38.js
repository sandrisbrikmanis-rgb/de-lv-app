#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  buildSearchUrlForCandidate,
} = require("./lib/g2-a1-production-current/german-target-dictionary-search-probe");
const { withDomainBrowserSession } = require("./lib/g2-a1-production-current/source-adapters/browser/pool");
const {
  cleanTarget,
  filterTranslationCandidates,
  extractFromDictCcPlainText,
} = require("./lib/g2-a1-production-current/three-word-dict-extract");
const { pageTextIsAutomaticTranslationOnly } = require("./lib/g2-a1-production-current/card-translation-forbidden-sources");

const AUDIT_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/sample-lemmas-32lang-audit.json",
);
const OUT_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/additional-bilingual-source-verify-38.json",
);
const OUT_MD = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/additional-bilingual-source-verify-38.md",
);

/** P1 avoti no additional-bilingual-source-recommendations */
const P1_BY_LANG = Object.freeze({
  bs: {
    dictionaryName: "Netzverb verbformen DE–BS",
    url: "https://www.verbformen.de/de-bs/",
    platform: "verbformen",
  },
  sq: {
    dictionaryName: "Netzverb verbformen DE–SQ",
    url: "https://www.verbformen.de/de-sq/",
    platform: "verbformen",
  },
  et: {
    dictionaryName: "Netzverb verbformen DE–ET",
    url: "https://www.verbformen.de/de-et/",
    platform: "verbformen",
  },
  uk: {
    dictionaryName: "Netzverb verbformen DE–UK",
    url: "https://www.verbformen.de/de-uk/",
    platform: "verbformen",
  },
  sk: {
    dictionaryName: "Netzverb verbformen DE–SK",
    url: "https://www.verbformen.de/de-sk/",
    platform: "verbformen",
  },
  nn: {
    dictionaryName: "DinOrdbok Tysk–Nynorsk",
    url: "https://www.dinordbok.no/tysk-nynorsk/",
    platform: "dinordbok",
  },
  lt: {
    dictionaryName: "lietuviu-vokieciu.com (DE→LT)",
    url: "http://www.lietuviu-vokieciu.com/",
    platform: "lietuviu-vokieciu-reverse",
  },
});

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function uniqueTargets(list) {
  const seen = new Set();
  const out = [];
  for (const t of list) {
    const c = cleanTarget(t);
    if (!c) continue;
    const k = c.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(c);
  }
  return out;
}

/** Netzverb: pirmā īsā komatu rinda virs reklāmas (tulkojumu galvene, ne daudzvalodu saraksts). */
function extractVerbformenDictionarySection(text, lemma, appCode) {
  const esc = escapeRe(lemma);
  if (!new RegExp(`\\b${esc}\\b`, "i").test(text)) return [];
  const head = text.split(/Unsere Webseite als App|Werbung ausblenden/i)[0] || text;
  const lines = head.split("\n").map((l) => l.trim());
  for (const line of lines) {
    if (!line || line.length > 110 || !/,/.test(line)) continue;
    if (/^\(|^mit\+|^Akk\.|^Dat\.|^nach\+D/i.test(line)) continue;
    if (
      /[›/·]|Flexion|Konjugation|Deklination|Imperativ|Netzverb|dict\.cc|★|PDF|Video|Wechsel des Stammvokals|Unsere Webseite|regelmäßig|Substantiv ·|feminin ·|[ABC][12] ·/i.test(
        line,
      )
    ) {
      continue;
    }
    if (/»|Chat:|Neuer Chat/i.test(line)) continue;
    const parts = line
      .split(",")
      .map((p) => cleanTarget(p.replace(/\s+(sports|noun|verb|Dat\.|nach\+D)$/i, "")))
      .filter(Boolean)
      .filter((p) => !/^-\w*$/.test(p) && p !== "-" && !/^\{/.test(p));
    if (parts.length < 2 || parts.length > 8) continue;
    if (parts.some((p) => p.length > 42 || new RegExp(`^${esc}$`, "i").test(p))) continue;
    if (parts.some((p) => /^(DE|Flexion|Substantiv|Verb)$/i.test(p))) continue;
    if (appCode === "uk" && !parts.some((p) => /[\u0400-\u04FF]/.test(p))) continue;
    if (appCode !== "uk" && parts.some((p) => /[\u0400-\u04FF]/.test(p))) continue;
    if (["bs", "sq", "hr", "sr"].includes(appCode) && parts.every((p) => /^[a-zA-Z\s-]+$/.test(p) && !/[žćčšđ]/i.test(p))) {
      /* bosnian/albanian without diacritics ok for some lemmas */
    }
    if (/[äöüßÄÖÜ]/.test(line) && !/[\u0400-\u04FF]/.test(line)) {
      if (!/ž|ć|č|š|đ|ë|ç|õ|ä/i.test(line)) continue;
    }
    return filterTranslationCandidates(uniqueTargets(parts), lemma, appCode);
  }
  const metaIdx = lines.findIndex((l) => /[ABC][12]\s*·\s*(Substantiv|Verb)/i.test(l));
  if (metaIdx >= 0) {
    for (const line of lines.slice(metaIdx + 1, metaIdx + 10)) {
      if (!line || /^die |^der |^das |^Endungen|^\/.*\/$/.test(line)) continue;
      if (/·|⁰|\u2070/.test(line)) continue;
      if (/^[A-Z][a-z]+;/.test(line) || /Angriff|Auftreten|Substantiv/i.test(line)) continue;
      const t = cleanTarget(line);
      if (t && t.length >= 2 && t.length <= 40 && !new RegExp(`^${esc}$`, "i").test(t)) {
        if (appCode === "uk" && !/[\u0400-\u04FF]/.test(t)) continue;
        if (appCode !== "uk" && /[\u0400-\u04FF]/.test(t)) continue;
        if (/[äöüß]/.test(t) && !["et", "lt", "sk"].includes(appCode)) continue;
        return filterTranslationCandidates([t], lemma, appCode);
      }
    }
  }
  return [];
}

async function fetchVerifyPage(spec, lemma) {
  let searchUrl;
  if (spec.platform === "dinordbok") {
    searchUrl = `https://www.dinordbok.no/tysk-nynorsk/?q=${encodeURIComponent(lemma)}`;
  } else if (spec.platform === "lietuviu-vokieciu-reverse") {
    searchUrl = `http://www.lietuviu-vokieciu.com/?word=${encodeURIComponent(lemma)}`;
  } else {
    searchUrl = buildSearchUrlForCandidate(
      { url: spec.url, name: spec.dictionaryName, platform: spec.platform },
      lemma,
    );
  }
  const host = new URL(searchUrl).hostname;
  return withDomainBrowserSession(host, async (page) => {
    await page.goto(searchUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(5000);
    const finalUrl = page.url();
    const text = await page.evaluate(() => document.body?.innerText || "");
    if (/captcha|access denied|403 forbidden/i.test(text)) {
      return { blocked: true, finalUrl, text, searchUrl };
    }
    return { blocked: false, finalUrl, text, searchUrl };
  });
}

function extractDinordbokDictionarySection(text, lemma) {
  if (/Det er ingen oversettelser av/i.test(text)) return [];
  if (!/Vi har \d+ oversettelser av/i.test(text) && !/ oversettelser av .* i tysk-nynorsk ordbok/i.test(text)) {
    return [];
  }
  const idx = text.indexOf("Norsk Nynorsk");
  if (idx < 0) return [];
  const chunk = text.split("+ Legg til ny oversettelse")[0].slice(idx, idx + 1200);
  const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
  const esc = escapeRe(lemma);
  const raw = [];
  for (const line of lines) {
    if (/^\+ Legg til|^Loading|^Oversettelser av|^Vis mer|^Tysk$|^Norsk Nynorsk$|^Annonsering|^Oppdag mer|^Hjelp oss|^Stem dette|^Språk|^Sponsored|^Play |^Search For|^Learn More|^DinOrdbok|^Om oss/i.test(line)) {
      continue;
    }
    if (new RegExp(`^${esc}$`, "i").test(line)) continue;
    if (/^s\.$/.test(line)) continue;
    if (/^\d+$/.test(line)) continue;
    if (line.length > 45) continue;
    const t = cleanTarget(line.replace(/\s+(sports|noun|verb|substantiv)$/i, ""));
    if (!t || t.length < 2) continue;
    if (/[äöüßÄÖÜ]/.test(t)) continue;
    raw.push(t);
    if (raw.length >= 6) break;
  }
  return filterTranslationCandidates(uniqueTargets(raw), lemma, "nn");
}

function extractLietuviuReverseDictionarySection(text, lemma) {
  if (/Nėra vertimo/i.test(text)) return [];
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const esc = escapeRe(lemma);
  const headIdx = lines.findIndex((l) => new RegExp(`^${esc}$`, "i").test(l));
  if (headIdx >= 0) {
    for (const l of lines.slice(headIdx + 1, headIdx + 12)) {
      if (/\[papildyti\]|©|draugai|Pradžia|Versti|Įveskite/i.test(l)) continue;
      if (new RegExp(`^${esc}$`, "i").test(l)) continue;
      const t = cleanTarget(l);
      if (t && t.length >= 2) return filterTranslationCandidates([t], lemma, "lt");
    }
  }
  const vt = text.match(/(?:\||\s)vt\s+([^\n|]+)/i);
  if (vt?.[1]) {
    const t = cleanTarget(vt[1].split(";")[0]);
    if (t) return filterTranslationCandidates([t], lemma, "lt");
  }
  return [];
}

function pageHasVerbformenEvidence(text, lemma, appCode) {
  const head = text.split(/Unsere Webseite als App|Werbung ausblenden/i)[0] || text;
  return extractVerbformenDictionarySection(head, lemma, appCode).length > 0;
}

function extractForPlatform(platform, text, lemma, appCode) {
  if (platform === "verbformen") return extractVerbformenDictionarySection(text, lemma, appCode);
  if (platform === "dinordbok") return extractDinordbokDictionarySection(text, lemma);
  if (platform === "lietuviu-vokieciu-reverse") return extractLietuviuReverseDictionarySection(text, lemma);
  return [];
}

function legacyProductionExtractorWouldFail(text, lemma, appCode, platform) {
  if (platform !== "verbformen") return false;
  const good = extractVerbformenDictionarySection(text, lemma, appCode);
  if (!good.length) return false;
  const { extractTranslations } = require("./lib/g2-a1-production-current/german-target-dictionary-search-probe");
  const fakePage = { blocked: false, text, searchUrl: "https://www.verbformen.de/" };
  const legacy = extractTranslations(fakePage, lemma, fakePage.searchUrl, appCode, { partOfSpeech: "noun" });
  const legacyOk = legacy.filter((t) => !/^(Chat:|Neuer Chat)$/i.test(t));
  return good.length > 0 && legacyOk.length === 0;
}

async function verifyRow(row) {
  const appLang = row.appLang;
  const deLemma = row.deLemma;
  const spec = P1_BY_LANG[appLang];
  if (!spec) {
    return {
      appLang,
      deLemma,
      level: row.level,
      dictionaryName: null,
      resultUrl: null,
      targetTranslations: [],
      status: "NOT_FOUND",
      notes: "NO_P1_SPEC",
    };
  }

  const candidate = {
    id: `verify-p1-${appLang}`,
    name: spec.dictionaryName,
    url: spec.url,
    platform: spec.platform,
    access: "PUBLIC_BROWSER_SESSION",
  };

  let page;
  try {
    page = await fetchVerifyPage(spec, deLemma);
  } catch (e) {
    return {
      appLang,
      deLemma,
      level: row.level,
      dictionaryName: spec.dictionaryName,
      resultUrl:
        spec.platform === "dinordbok"
          ? `https://www.dinordbok.no/tysk-nynorsk/?q=${encodeURIComponent(deLemma)}`
          : buildSearchUrlForCandidate(candidate, deLemma),
      targetTranslations: [],
      status: "NOT_FOUND",
      notes: `FETCH_ERROR: ${String(e.message || e).slice(0, 80)}`,
      dictionaryGap: false,
      parserGapOnPriorCatalog: false,
    };
  }

  const resultUrl =
    page.finalUrl ||
    page.searchUrl ||
    (spec.platform === "dinordbok"
      ? `https://www.dinordbok.no/tysk-nynorsk/?q=${encodeURIComponent(deLemma)}`
      : buildSearchUrlForCandidate(candidate, deLemma));
  if (page.blocked) {
    return {
      appLang,
      deLemma,
      level: row.level,
      dictionaryName: spec.dictionaryName,
      resultUrl,
      targetTranslations: [],
      status: "NOT_FOUND",
      notes: "SOURCE_ACCESS_BLOCKED",
      dictionaryGap: false,
      parserGapOnPriorCatalog: false,
    };
  }

  const text = page.text || "";
  if (pageTextIsAutomaticTranslationOnly(text) && spec.platform === "verbformen") {
    /* verbformen nav MT-only ja ir tulkojumu bloks */
  }

  const targets = extractForPlatform(spec.platform, text, deLemma, appLang);
  const dictionaryGap =
    (spec.platform === "dinordbok" && /Det er ingen oversettelser av/i.test(text)) ||
    (spec.platform === "lietuviu-vokieciu-reverse" && /Nėra vertimo/i.test(text)) ||
    (spec.platform === "verbformen" &&
      !targets.length &&
      !pageHasVerbformenEvidence(text, deLemma, appLang));

  const parserGapOnPriorCatalog =
    targets.length > 0 && legacyProductionExtractorWouldFail(text, deLemma, appLang, spec.platform);

  const parserGapEvidence =
    !targets.length &&
    spec.platform === "verbformen" &&
    pageHasVerbformenEvidence(text, deLemma, appLang) &&
    !dictionaryGap;

  return {
    appLang,
    deLemma,
    level: row.level,
    dictionaryName: spec.dictionaryName,
    resultUrl,
    targetTranslations: targets,
    targetTranslationDisplay: targets.join("; ") || "—",
    status: targets.length ? "FOUND" : "NOT_FOUND",
    dictionaryGap,
    parserGapOnPriorCatalog,
    parserGapEvidence,
    notes: dictionaryGap
      ? "DICTIONARY_ENTRY_ABSENT"
      : parserGapEvidence
        ? "PARSER_WOULD_MISS_EVIDENCE"
        : parserGapOnPriorCatalog
          ? "PRIOR_CATALOG_PARSER_GAP"
          : targets.length
            ? null
            : "NOT_IN_RECOMMENDED_DICTIONARY",
  };
}

async function main() {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const rows = audit.needsAdditionalBilingualSource || [];
  if (rows.length !== 38) {
    console.warn(`Expected 38 rows, got ${rows.length}`);
  }

  const results = [];
  for (const row of rows) {
    // eslint-disable-next-line no-await-in-loop
    const r = await verifyRow(row);
    results.push(r);
    process.stderr.write(`${r.status} ${r.appLang} ${r.deLemma} ${r.targetTranslationDisplay || ""}\n`);
  }

  const found = results.filter((r) => r.status === "FOUND");
  const notFound = results.filter((r) => r.status === "NOT_FOUND");
  const parserGapRows = results.filter(
    (r) => r.parserGapOnPriorCatalog || r.parserGapEvidence,
  );

  const payload = {
    schemaVersion: "g2-a1-additional-bilingual-source-verify-38-v1",
    generatedAt: new Date().toISOString(),
    rowCount: results.length,
    foundCount: found.length,
    notFoundCount: notFound.length,
    parserGapRowCount: parserGapRows.length,
    policy: "P1 recommended DE→TARGET only; FOUND requires dictionary-section translation extract, not HTTP 200 alone",
    results,
  };

  fs.writeFileSync(OUT_JSON, `${JSON.stringify(payload, null, 2)}\n`);

  const mdLines = [
    "# G2/A1 — papildu avotu verifikācija (38 rindas)",
    "",
    `Ģenerēts: ${payload.generatedAt}`,
    "",
    `**FOUND:** ${found.length}/38 | **NOT_FOUND:** ${notFound.length}/38 | **Parsera problēma (prior/extract):** ${parserGapRows.length} rindas`,
    "",
    "| Valoda | DE vārds | TARGET tulkojums | Vārdnīca | Precīzs URL | Statuss |",
    "|--------|----------|------------------|----------|-------------|---------|",
  ];

  for (const r of results) {
    const url = r.resultUrl || "—";
    mdLines.push(
      `| ${r.appLang} | ${r.deLemma} | ${r.targetTranslationDisplay || "—"} | ${r.dictionaryName} | ${url} | ${r.status} |`,
    );
  }

  mdLines.push("", "## Parsera vs vārdnīcas trūkums", "");
  for (const r of results.filter((x) => x.parserGapOnPriorCatalog || x.parserGapEvidence || x.dictionaryGap)) {
    mdLines.push(
      `- **${r.appLang}** / ${r.deLemma}: ${r.notes || (r.dictionaryGap ? "DICTIONARY_ENTRY_ABSENT" : "—")}`,
    );
  }

  fs.writeFileSync(OUT_MD, `${mdLines.join("\n")}\n`);
  console.log(JSON.stringify({ found: found.length, notFound: notFound.length, out: OUT_JSON }, null, 2));
}

if (require.main === module) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
