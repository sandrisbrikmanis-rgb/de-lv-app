#!/usr/bin/env node
"use strict";

const { URL } = require("url");
const { withDomainBrowserSession } = require("./source-adapters/browser/pool");
const {
  buildSearchUrl,
  extractFromDictCcPlainText,
  extractFromGlosbeText,
  filterTranslationCandidates,
  cleanTarget,
} = require("./three-word-dict-extract");
const { PILOT_FIELD } = require("./german-target-dictionary-search-catalog");
const { runLodLbCardTranslationAudit, TRANSLATION_AUDIT_VERDICT } = require("./lod-card-translation-audit");
const { acceptPonsConsent } = require("./german-target-dictionary-probes");
const {
  buildLodDeSearchUrl,
  buildLodDeSichUrl,
  extractLbHeadwordsFromLodDeSearchPayload,
  lookupLodGermanToLuxembourgish,
} = require("./lod-de-reverse-api");

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isSubscriptionWall(text) {
  return /subscription|tellimus|tellimust|paywall|purchase|buy now|log in to continue|sign in to/i.test(text);
}

function extractGlosbeDictionarySection(text, lemma) {
  const esc = escapeRe(lemma);
  const autoIdx = text.search(/AUTOMATIC TRANSLATIONS|SHOW ALGORITHMICALLY GENERATED/i);
  const slice = autoIdx >= 0 ? text.slice(0, autoIdx) : text;
  const topRe = new RegExp(
    `top translations of ["«]?${esc}["»]? into[^\\n]*\\n([^\\n]+)`,
    "i",
  );
  const top = slice.match(topRe);
  const found = [];
  if (top?.[1]) {
    for (const part of top[1].split(/[,;]/)) {
      const w = cleanTarget(part.replace(/\bare the.*/i, "").trim());
      if (w && !new RegExp(`^${esc}$`, "i").test(w)) found.push(w);
    }
  }
  const lineRe = new RegExp(`^([\\p{L}\\p{M}'-]{2,40})\\s+(?:noun|verb|adjective|adverb|substant|veiks)`, "gimu");
  let m;
  while ((m = lineRe.exec(slice))) {
    const w = cleanTarget(m[1]);
    if (w && !new RegExp(`^${esc}$`, "i").test(w)) found.push(w);
  }
  const uniq = [];
  const seen = new Set();
  for (const w of found) {
    const k = w.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    uniq.push(w);
  }
  return uniq;
}

function extractVokieciuLietuviu(text, lemma) {
  if (/Nėra vertimo/i.test(text)) return [];
  const blocklist = /^(Pradžia|Versti|Įveskite|Atraskite|draugai|©)/i;
  const vt = text.match(/(?:\||\s)vt\s+([^\n|]+)/i);
  if (vt?.[1]) {
    const t = cleanTarget(vt[1].split(";")[0]);
    if (t && !blocklist.test(t)) return [t];
  }
  const quoted = text.match(/\|\s*"[^"]*-\s*f[^|]*\|\s*([^|\n]+)/i);
  if (quoted?.[1]) {
    const t = cleanTarget(quoted[1]);
    if (t && !blocklist.test(t)) return [t];
  }
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const esc = escapeRe(lemma);
  const headIdx = lines.findIndex((l) => new RegExp(`^${esc}$`, "i").test(l));
  if (headIdx >= 0) {
    for (const l of lines.slice(headIdx + 1, headIdx + 8)) {
      if (blocklist.test(l) || /\[taisyti\]|\[papildyti\]/i.test(l)) continue;
      if (new RegExp(`^${esc}$`, "i").test(l)) continue;
      if (new RegExp(`^${esc}[a-zäöüß]`, "i").test(l)) continue;
      const t = cleanTarget(l);
      if (t && t.length >= 3) return [t];
    }
  }
  return [];
}

function extractLodAdvanced(text, lemma, appCode) {
  if (/Et gëtt keng Resultater|Feeler 404/i.test(text)) return [];
  if (!new RegExp(`\\b${escapeRe(lemma)}\\b`, "i").test(text)) return [];
  if (!/Resultater|Substantiv|Verb|Adjectiv/i.test(text)) return [];
  const lines = text.split("\n").map((l) => cleanTarget(l)).filter(Boolean);
  const idx = lines.findIndex((l) => l.toLowerCase() === lemma.toLowerCase());
  if (idx < 0) return [];
  if (appCode === "lb") {
    if (/Substantiv|Verb|Adjectiv/i.test(text)) return [lemma];
    const tail = lines.slice(idx + 1, idx + 6).filter((l) => !/kopéiert|Export|Cookies|Substantiv|Neutrum|Maskulinum|Femininum/i.test(l));
    if (tail.length) return [tail[0]];
    return [lemma];
  }
  return [lemma];
}

function isGlosbeAutomaticOnly(text, lemma) {
  if (!/glosbe/i.test(text) && !/automatic translations/i.test(text)) {
    /* glosbe pages always mention section headers */
  }
  const hasAuto = /automatic translations/i.test(text);
  const hasDictSection = /translation memory|phrase|examples|dictionary/i.test(text);
  const extracted = extractFromGlosbeText(text, lemma);
  const dictCcStyle = extractFromDictCcPlainText(text, lemma);
  if (extracted.length || dictCcStyle.length) return false;
  if (hasAuto && !extracted.length && !dictCcStyle.length) {
    const lemmaPresent = new RegExp(`\\b${escapeRe(lemma)}\\b`, "i").test(text);
    if (lemmaPresent && hasAuto) return true;
  }
  return false;
}

function buildSearchUrlForCandidate(candidate, lemma) {
  const row = { url: candidate.url, name: candidate.name };
  if (candidate.searchMode === "LOD_DE_REVERSE_API") {
    return buildLodDeSearchUrl(lemma);
  }
  if (candidate.searchMode === "LOD_ADVANCED_SEARCH" || candidate.searchMode === "LOD_DE_INPUT") {
    return `https://lod.lu/advanced-search/1?query=${encodeURIComponent(lemma)}`;
  }
  if (/vokieciu-lietuviu\.com/i.test(candidate.url)) {
    return `http://www.vokieciu-lietuviu.com/?word=${encodeURIComponent(lemma)}`;
  }
  if (/pons\.com\/translate\//i.test(candidate.url)) {
    const base = candidate.url.replace(/\/$/, "");
    return `${base}/${encodeURIComponent(lemma)}`;
  }
  if (/dict\.leo\.org/i.test(candidate.url)) {
    const base = candidate.url.replace(/\/$/, "");
    return `${base}/search?query=${encodeURIComponent(lemma)}`;
  }
  if (/bab\.la/i.test(candidate.url)) {
    const base = candidate.url.replace(/\/$/, "");
    return `${base}/${encodeURIComponent(lemma.toLowerCase())}`;
  }
  if (/verbformen\.(de|com)/i.test(candidate.url)) {
    const base = candidate.url.replace(/\/$/, "");
    return `${base}/?w=${encodeURIComponent(lemma)}`;
  }
  if (/udew\.uni-leipzig\.de/i.test(candidate.url)) {
    return `https://udew.uni-leipzig.de/udew/en/deutsch_ukrainisch_online.htm?input=${encodeURIComponent(lemma)}`;
  }
  if (/dict\.luxdico\.com/i.test(candidate.url)) {
    const l1 = candidate.luxdicoL1 || "deu";
    const l2 = candidate.luxdicoL2 || "lux";
    return `http://dict.luxdico.com/neu/index.php?l1=${l1}&l2=${l2}&q=${encodeURIComponent(lemma)}`;
  }
  if (/dicts\.info/i.test(candidate.url)) {
    return `https://www.dicts.info/dictionary.php?l1=german&l2=albanian&word=${encodeURIComponent(lemma)}`;
  }
  if (/multitran\.com/i.test(candidate.url)) {
    return `https://www.multitran.com/m.exe?l1=3&l2=28&s=${encodeURIComponent(lemma)}`;
  }
  return buildSearchUrl(row, lemma);
}

async function fetchDictionaryPageForCandidate(candidate, lemma) {
  if (candidate.searchMode === "LOD_DE_REVERSE_API") {
    const lookup = await lookupLodGermanToLuxembourgish(lemma);
    const searchUrl = lookup.searchUrl;
    if (lookup.error && !lookup.found) {
      return {
        blocked: /abort|HTTP_5|HTTP_4/i.test(lookup.error),
        finalUrl: lookup.entryUrl,
        text: "",
        searchUrl,
        lodLbHeadwords: [],
      };
    }
    return {
      blocked: false,
      finalUrl: lookup.bestMatch?.articleUrl || lookup.entryUrl || buildLodDeSichUrl(lemma),
      text: lookup.payload ? JSON.stringify(lookup.payload) : "",
      searchUrl,
      lodLbHeadwords: lookup.lbHeadwords || [],
      lodBestMatch: lookup.bestMatch || null,
    };
  }

  if (candidate.searchMode === "LOD_ADVANCED_SEARCH" || candidate.searchMode === "LOD_DE_INPUT") {
    const searchUrl = `https://lod.lu/advanced-search/1?query=${encodeURIComponent(lemma)}`;
    return withDomainBrowserSession("lod.lu", async (page) => {
      await page.goto(searchUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
      await page.waitForTimeout(8000);
      const finalUrl = page.url();
      const text = await page.evaluate(() => document.body?.innerText || "");
      return { blocked: false, finalUrl, text, searchUrl };
    });
  }

  const searchUrl = buildSearchUrlForCandidate(candidate, lemma);
  const host = new URL(searchUrl).hostname;
  return withDomainBrowserSession(host, async (page) => {
    await page.goto(searchUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
    if (/pons\.com/i.test(searchUrl)) {
      await acceptPonsConsent(page);
    }
    await page.waitForTimeout(8000);
    const finalUrl = page.url();
    const text = await page.evaluate(() => document.body?.innerText || "");
    if (/captcha|access denied|403 forbidden|cf-browser-verification/i.test(text)) {
      return { blocked: true, finalUrl, text, searchUrl };
    }
    if (candidate.access === "SUBSCRIPTION_REQUIRED" || /keelevara\.ee/i.test(searchUrl)) {
      if (isSubscriptionWall(text)) {
        return { blocked: true, subscription: true, finalUrl, text, searchUrl };
      }
    }
    return { blocked: false, finalUrl, text, searchUrl };
  });
}

function extractDictsInfo(text, lemma) {
  const esc = escapeRe(lemma);
  const re = new RegExp(`${esc}\\s*\\([^)]*\\)\\s+([^\\n|]+)`, "i");
  const m = text.match(re);
  if (m?.[1]) return [cleanTarget(m[1])].filter(Boolean);
  return [];
}

function extractVerbformen(text, lemma) {
  const esc = escapeRe(lemma);
  if (!new RegExp(`\\b${esc}\\b`, "i").test(text)) return [];
  const block = text.match(new RegExp(`${esc}[\\s\\S]{0,400}`, "i"));
  if (!block) return [];
  const lines = block[0].split("\n").map((l) => cleanTarget(l)).filter(Boolean);
  return lines.filter((l) => !new RegExp(`^${esc}$`, "i").test(l)).slice(0, 4);
}

function extractUdek(text, lemma) {
  if (!new RegExp(escapeRe(lemma), "i").test(text)) return [];
  const lines = text.split("\n").map((l) => cleanTarget(l)).filter(Boolean);
  const idx = lines.findIndex((l) => new RegExp(escapeRe(lemma), "i").test(l));
  if (idx < 0) return [];
  return lines.slice(idx + 1, idx + 5).filter((l) => l.length >= 2 && l.length <= 50);
}

function extractLuxdico(text, lemma) {
  if (/kein(e)? (Treffer|Ergebnis)/i.test(text)) return [];
  const esc = escapeRe(lemma);
  if (!new RegExp(esc, "i").test(text)) return [];

  const o2Re = /<div id="o2_(\d+)"[^>]*>([^<]*)<\/div>/gi;
  let m;
  while ((m = o2Re.exec(text)) !== null) {
    const idx = m[1];
    const deSide = cleanTarget(m[2]);
    if (!new RegExp(`^${esc}$`, "i").test(deSide)) continue;
    const o1 = text.match(new RegExp(`<div id="o1_${idx}"[^>]*>([^<]*)</div>`, "i"));
    if (o1?.[1]) {
      const lbSide = cleanTarget(o1[1]);
      if (lbSide && lbSide.length >= 2 && lbSide.length <= 60) return [lbSide];
    }
    return [lemma];
  }

  const lines = text.split("\n").map((l) => cleanTarget(l)).filter(Boolean);
  for (let i = 0; i < lines.length; i += 1) {
    if (!new RegExp(`^${esc}$`, "i").test(lines[i])) continue;
    const next = lines[i + 1];
    if (next && !new RegExp(`^${esc}$`, "i").test(next) && next.length >= 2 && next.length <= 60) {
      return [next];
    }
    return [lemma];
  }
  for (const l of lines) {
    if (new RegExp(`^${esc}$`, "i").test(l)) continue;
    if (l.length >= 2 && l.length <= 40 && !/^(Suche|Search|Luxdico)/i.test(l)) return [l];
  }
  return [];
}

function extractLodDeReverseApi(page, lemma) {
  if (Array.isArray(page.lodLbHeadwords) && page.lodLbHeadwords.length) {
    return page.lodLbHeadwords.map((w) => cleanTarget(w)).filter(Boolean);
  }
  if (!page.text) return [];
  try {
    const payload = JSON.parse(page.text);
    return extractLbHeadwordsFromLodDeSearchPayload(payload, lemma).map((w) => cleanTarget(w)).filter(Boolean);
  } catch {
    return [];
  }
}

function extractTranslations(page, lemma, searchUrl, appCode) {
  if (page.blocked) return [];
  let translations = [];
  if (/lod\.lu\/api\/de\/search/i.test(searchUrl) || Array.isArray(page.lodLbHeadwords)) {
    translations = extractLodDeReverseApi(page, lemma);
  } else if (/vokieciu-lietuviu\.com/i.test(searchUrl)) {
    translations = extractVokieciuLietuviu(page.text, lemma);
  } else if (/dict\.cc/i.test(searchUrl)) {
    translations = extractFromDictCcPlainText(page.text, lemma);
  } else if (/glosbe\.com/i.test(searchUrl)) {
    translations = extractGlosbeDictionarySection(page.text, lemma);
    if (!translations.length) translations = extractFromGlosbeText(page.text, lemma);
    if (!translations.length) translations = extractFromDictCcPlainText(page.text, lemma);
  } else if (/lod\.lu/i.test(searchUrl)) {
    translations = extractLodAdvanced(page.text, lemma, appCode);
  } else if (/verbformen\.(de|com)/i.test(searchUrl)) {
    translations = extractVerbformen(page.text, lemma);
  } else if (/udew\.uni-leipzig\.de/i.test(searchUrl)) {
    translations = extractUdek(page.text, lemma);
  } else if (/dicts\.info/i.test(searchUrl)) {
    translations = extractDictsInfo(page.text, lemma);
  } else if (/dict\.luxdico\.com/i.test(searchUrl)) {
    translations = extractLuxdico(page.text, lemma);
  } else if (/multitran\.com/i.test(searchUrl)) {
    translations = extractFromDictCcPlainText(page.text, lemma);
  } else {
    translations = extractFromDictCcPlainText(page.text, lemma);
    if (!translations.length && new RegExp(escapeRe(lemma), "i").test(page.text)) {
      const idx = page.text.search(new RegExp(escapeRe(lemma), "i"));
      const chunk = page.text.slice(idx, idx + 800);
      const lines = chunk
        .split("\n")
        .map((l) => cleanTarget(l))
        .filter(Boolean)
        .filter((l) => !new RegExp(`^${escapeRe(lemma)}$`, "i").test(l));
      translations = lines.slice(0, 5);
    }
  }
  return filterTranslationCandidates(translations, lemma, appCode);
}

async function probePilotWord(candidate, lemma, appCode, pilotWordSpec = null) {
  if (
    appCode === "lb" &&
    candidate.searchMode === "LOD_DE_REVERSE_API" &&
    pilotWordSpec?.expectedTargetLb
  ) {
    const audit = await runLodLbCardTranslationAudit(
      {
        lemma,
        partOfSpeech: pilotWordSpec.partOfSpeech,
        article: pilotWordSpec.article,
        germanMeaning: pilotWordSpec.deSenseNote || null,
      },
      pilotWordSpec.expectedTargetLb,
    ); /* currentTarget = pilot CORRECT form (simulates matching CURRENT on card) */
    const sel = audit.selectedCandidate;
    const base = {
      resultUrl: sel?.articleUrl || audit.lodSearchUrl,
      sampleTranslation: sel?.wordLb || null,
      lodArticleId: sel?.articleId || null,
      lodArticleUrl: sel?.articleUrl || null,
      translationAuditVerdict: audit.verdict,
      translationAuditBlockers: audit.blockers,
      dictionaryCandidateCount: audit.dictionaryCandidates?.length ?? 0,
      rejectedCandidateCount: audit.rejectedCandidates?.length ?? 0,
      access: candidate.access,
    };
    if (audit.verdict === TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED) {
      return {
        ...base,
        pilotStatus: PILOT_FIELD.TRANSLATION_VALIDATED,
        note: `LOD ${sel?.articleId} DE="${sel?.deTranslation}" TARGET official OK`,
      };
    }
    if (audit.verdict === TRANSLATION_AUDIT_VERDICT.FINDING) {
      return {
        ...base,
        pilotStatus: PILOT_FIELD.NEEDS_SOURCE_REVIEW,
        sampleTranslation: sel?.wordLb || base.sampleTranslation,
        note: `FINDING: CURRENT≠${sel?.wordLb}`,
      };
    }
    if (
      audit.verdict === TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW ||
      audit.verdict === TRANSLATION_AUDIT_VERDICT.DE_NOT_CONFIRMED ||
      audit.verdict === TRANSLATION_AUDIT_VERDICT.TARGET_OFFICIAL_NOT_VALIDATED
    ) {
      return {
        ...base,
        pilotStatus: PILOT_FIELD.NEEDS_SOURCE_REVIEW,
        sampleTranslation: sel?.wordLb || base.sampleTranslation,
        note: (audit.blockers?.[0]?.code || audit.verdict || "NEEDS_SOURCE_REVIEW").slice(0, 200),
      };
    }
    return {
      ...base,
      pilotStatus: PILOT_FIELD.NOT_FOUND,
      sampleTranslation: null,
      note: audit.blockers?.[0]?.code || audit.verdict,
    };
  }

  if (candidate.subscriptionReferenceOnly) {
    return {
      pilotStatus: PILOT_FIELD.BLOCKED,
      resultUrl: candidate.url,
      sampleTranslation: null,
      note: "SUBSCRIPTION_REQUIRED reference — not used as audit translation source",
      access: "SUBSCRIPTION_REQUIRED",
    };
  }

  let page;
  const searchUrlFallback = buildSearchUrlForCandidate(candidate, lemma);
  try {
    page = await fetchDictionaryPageForCandidate(candidate, lemma);
  } catch (e) {
    return {
      pilotStatus: PILOT_FIELD.BLOCKED,
      resultUrl: searchUrlFallback,
      sampleTranslation: null,
      note: String(e.message || e).slice(0, 200),
      access: candidate.access,
    };
  }
  const searchUrl = page.searchUrl || searchUrlFallback;

  if (page.blocked) {
    if (page.subscription || candidate.access === "SUBSCRIPTION_REQUIRED") {
      return {
        pilotStatus: PILOT_FIELD.BLOCKED,
        resultUrl: page.finalUrl || searchUrl,
        sampleTranslation: null,
        note: "SUBSCRIPTION_REQUIRED",
        access: "SUBSCRIPTION_REQUIRED",
      };
    }
    return {
      pilotStatus: PILOT_FIELD.BLOCKED,
      resultUrl: page.finalUrl || searchUrl,
      sampleTranslation: null,
      note: "Technical access blocked",
      access: candidate.access,
    };
  }

  if (/glosbe\.com/i.test(searchUrl) && !extractGlosbeDictionarySection(page.text, lemma).length && isGlosbeAutomaticOnly(page.text, lemma)) {
    return {
      pilotStatus: PILOT_FIELD.AUTOMATIC_TRANSLATION_ONLY,
      resultUrl: page.finalUrl || searchUrl,
      sampleTranslation: null,
      note: "Glosbe automatic translations only — dictionary entry not extracted",
      access: candidate.access,
    };
  }

  const translations = extractTranslations(page, lemma, searchUrl, appCode);
  if (!translations.length) {
    return {
      pilotStatus: PILOT_FIELD.NOT_FOUND,
      resultUrl: page.finalUrl || searchUrl,
      sampleTranslation: null,
      note: null,
      access: candidate.access,
    };
  }

  const lodMeta = page.lodBestMatch;
  const resultUrl = lodMeta?.articleUrl || page.finalUrl || searchUrl;
  const note = lodMeta
    ? `LOD ${lodMeta.articleId} DE="${lodMeta.deTranslation}"`
    : null;

  return {
    pilotStatus: PILOT_FIELD.FOUND,
    resultUrl,
    sampleTranslation: translations[0],
    alternativeSamples: translations.slice(1, 4),
    note,
    lodArticleId: lodMeta?.articleId || null,
    lodArticleUrl: lodMeta?.articleUrl || null,
    access: candidate.access,
  };
}

module.exports = {
  probePilotWord,
  buildSearchUrlForCandidate,
  isGlosbeAutomaticOnly,
  isSubscriptionWall,
};
