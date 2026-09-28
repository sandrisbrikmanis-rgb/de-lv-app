#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { URL } = require("url");
const { ROOT } = require("./lib/audit-common");
const { withDomainBrowserSession } = require("./lib/g2-a1-production-current/source-adapters/browser/pool");
const {
  fetchDictionaryPageForCandidate,
  probePilotWord,
} = require("./lib/g2-a1-production-current/german-target-dictionary-search-probe");
const { cleanTarget } = require("./lib/g2-a1-production-current/three-word-dict-extract");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/pdf-bilingual-dictionary-cs-sk-uk-pilot",
);

const DE_LEMMAS = ["Haus", "arbeiten", "Kleingeld", "bewirten", "Grenzkonflikt", "Machtgier"];

const REVERSE_LEMMAS = {
  cs: {
    Haus: "dům",
    arbeiten: "pracovat",
    Kleingeld: "drobné",
    bewirten: "pohostit",
    Grenzkonflikt: "pohraniční spor",
    Machtgier: "touha po moci",
  },
  sk: {
    Haus: "dom",
    arbeiten: "pracovať",
    Kleingeld: "drobné",
    bewirten: "pohostiť",
    Grenzkonflikt: "hraničný konflikt",
    Machtgier: "túžba po moci",
  },
  uk: {
    Haus: "будинок",
    arbeiten: "працювати",
    Kleingeld: "дрібні",
    bewirten: "гостувати",
    Grenzkonflikt: "прикордонний конфлікт",
    Machtgier: "прагнення до влади",
  },
};

const SOURCES = [
  {
    lang: "cs",
    id: "pons-de-cs",
    name: "PONS Wörterbuch Deutsch–Tschechisch",
    direction: "de→cs",
    yearBase: "PONS digital (redaktionell geprüft)",
    approxEntries: "~120000+ (publisks meklētājs de.pons.com)",
    portalUrl: "https://de.pons.com/übersetzung/deutsch-tschechisch/",
    platform: "pons",
  },
  {
    lang: "cs",
    id: "pons-cs-de",
    name: "PONS Wörterbuch Tschechisch–Deutsch",
    direction: "cs→de",
    yearBase: "PONS digital",
    approxEntries: "~120000+",
    portalUrl: "https://de.pons.com/übersetzung/tschechisch-deutsch/",
    platform: "pons",
    reverse: true,
  },
  {
    lang: "cs",
    id: "langenscheidt-de-cs",
    name: "Langenscheidt Wörterbuch Deutsch–Tschechisch",
    direction: "de→cs",
    yearBase: "Langenscheidt online (PONS-Gruppe)",
    approxEntries: "Pilns digitālais saturs (tūkstošiem šķirkļu)",
    portalUrl: "https://en.langenscheidt.com/german-czech",
    platform: "langenscheidt",
    pathPrefix: "german-czech",
  },
  {
    lang: "cs",
    id: "langenscheidt-cs-de",
    name: "Langenscheidt Wörterbuch Tschechisch–Deutsch",
    direction: "cs→de",
    yearBase: "Langenscheidt online",
    approxEntries: "Pilns digitālais saturs",
    portalUrl: "https://en.langenscheidt.com/czech-german",
    platform: "langenscheidt",
    reverse: true,
    pathPrefix: "czech-german",
  },
  {
    lang: "sk",
    id: "langenscheidt-de-sk",
    name: "Langenscheidt Wörterbuch Deutsch–Slowakisch",
    direction: "de→sk",
    yearBase: "Langenscheidt online",
    approxEntries: "Pilns digitālais saturs",
    portalUrl: "https://en.langenscheidt.com/german-slovak",
    platform: "langenscheidt",
    pathPrefix: "german-slovak",
  },
  {
    lang: "sk",
    id: "langenscheidt-sk-de",
    name: "Langenscheidt Wörterbuch Slowakisch–Deutsch",
    direction: "sk→de",
    yearBase: "Langenscheidt online",
    approxEntries: "Pilns digitālais saturs",
    portalUrl: "https://en.langenscheidt.com/slovak-german",
    platform: "langenscheidt",
    reverse: true,
    pathPrefix: "slovak-german",
  },
  {
    lang: "cs",
    id: "dict-cc-de-cs",
    name: "dict.cc Německo-český slovník",
    direction: "de→cs",
    yearBase: "dict.cc (MASTER manifest, kopiena uzturēts)",
    approxEntries: "~35211 (manifest)",
    portalUrl: "https://csde.dict.cc/",
    platform: "dictcc",
    dictUrl: "https://csde.dict.cc/",
  },
  {
    lang: "cs",
    id: "dict-cc-cs-de",
    name: "dict.cc Česko-německý slovník",
    direction: "cs→de",
    yearBase: "dict.cc",
    approxEntries: "~35211",
    portalUrl: "https://decs.dict.cc/",
    platform: "dictcc",
    reverse: true,
    dictUrl: "https://decs.dict.cc/",
  },
  {
    lang: "sk",
    id: "dict-cc-de-sk",
    name: "dict.cc Nemecko-slovenský slovník",
    direction: "de→sk",
    yearBase: "dict.cc (MASTER manifest)",
    approxEntries: "~102192 (manifest)",
    portalUrl: "https://desk.dict.cc/",
    platform: "dictcc",
    dictUrl: "https://desk.dict.cc/",
  },
  {
    lang: "sk",
    id: "dict-cc-sk-de",
    name: "dict.cc Slovensko-nemecký slovník",
    direction: "sk→de",
    yearBase: "dict.cc",
    approxEntries: "~102192",
    portalUrl: "https://sk-de.dict.cc/",
    platform: "dictcc",
    reverse: true,
    dictUrl: "https://sk-de.dict.cc/",
  },
  {
    lang: "uk",
    id: "dict-cc-de-uk",
    name: "dict.cc Deutsch–Ukrainisch",
    direction: "de→uk",
    yearBase: "dict.cc (MASTER manifest)",
    approxEntries: "~66145 (manifest)",
    portalUrl: "https://deuk.dict.cc/",
    platform: "dictcc",
    dictUrl: "https://deuk.dict.cc/",
  },
  {
    lang: "uk",
    id: "dict-cc-uk-de",
    name: "dict.cc Ukrainisch–Deutsch",
    direction: "uk→de",
    yearBase: "dict.cc",
    approxEntries: "~66145",
    portalUrl: "https://ukde.dict.cc/",
    platform: "dictcc",
    reverse: true,
    dictUrl: "https://ukde.dict.cc/",
  },
];

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildLangenscheidtUrl(source, queryLemma) {
  return `https://en.langenscheidt.com/${source.pathPrefix}/${encodeURIComponent(queryLemma.toLowerCase())}`;
}

function buildUewUrl(source, queryLemma) {
  return `https://udew.uni-leipzig.de/udew/en/${source.udewPath}?input=${encodeURIComponent(queryLemma)}`;
}

function buildPonsCandidate(source) {
  return {
    id: source.id,
    appCode: source.lang,
    url: source.portalUrl,
    name: source.name,
    languagePair: source.direction,
    access: "PUBLIC_BROWSER_SESSION",
    type: "PROFESSIONAL_BILINGUAL_COMMERCIAL",
  };
}

function candidateFromSource(source) {
  return {
    id: source.id,
    appCode: source.lang,
    standardCode: source.lang,
    name: source.name,
    url: source.dictUrl || source.portalUrl,
    languagePair: source.direction,
    access: "PUBLIC_BROWSER_SESSION",
    type:
      source.platform === "dictcc"
        ? "COMMUNITY_BILINGUAL_DICT_CC"
        : "PROFESSIONAL_BILINGUAL_COMMERCIAL",
  };
}

function extractPonsPairs(text, deLemma, reverse, queryLemma) {
  if (!text || text.length < 200) return [];
  const chunk =
    text.indexOf("IM PONS WÖRTERBUCH") >= 0
      ? text.slice(text.indexOf("IM PONS WÖRTERBUCH"), text.indexOf("IM PONS WÖRTERBUCH") + 1600)
      : text.slice(0, 3000);
  const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
  if (reverse) {
    if (!new RegExp(escapeRe(queryLemma), "i").test(chunk)) return [];
    return new RegExp(`\\b${escapeRe(deLemma)}\\b`, "i").test(chunk) ? [deLemma] : [];
  }
  if (!new RegExp(`\\b${escapeRe(deLemma)}\\b`, "i").test(chunk)) return [];
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const head =
      new RegExp(`^${escapeRe(deLemma)}\\b`, "i").test(lines[i]) ||
      new RegExp(`${escapeRe(deLemma)}.*SUBST|${escapeRe(deLemma)}.*VERB`, "i").test(lines[i]);
    if (!head) continue;
    for (let j = i + 1; j < Math.min(i + 18, lines.length); j++) {
      const line = lines[j];
      if (/^Beispiele|^Mehr anzeigen|^Keine Beispiel|^Versuche|^Deutsch$/i.test(line)) break;
      if (new RegExp(`^${escapeRe(deLemma)}$`, "i").test(line)) continue;
      const m = line.match(/^([\p{L}\p{M}'-]+(?:\s+[\p{L}\p{M}'-]+)?)\s+[mfn]\.?\s*$/u);
      if (m) {
        out.push(cleanTarget(m[1]));
        continue;
      }
      if (
        !new RegExp(escapeRe(deLemma), "i").test(line) &&
        /^[\p{L}\p{M}'-]+$/u.test(line) &&
        line.length >= 3 &&
        line.length <= 28
      ) {
        out.push(cleanTarget(line));
      }
      if (out.length >= 3) break;
    }
    if (out.length) break;
  }
  return out;
}

function extractLangenscheidtFromHtml(html, deLemma, reverse, queryLemma) {
  if (!html || html.length < 500) return { found: false, glosses: [] };
  if (/404 Page not found|Page not found/i.test(html)) return { found: false, glosses: [] };
  if (reverse) {
    const deEsc = escapeRe(deLemma);
    const summary = html.match(/class="btn-inner">\s*([^<]+)\s*<\/span>/);
    if (summary?.[1]) {
      const parts = summary[1].split(",").map((g) => cleanTarget(g));
      if (parts.some((g) => new RegExp(`^${deEsc}$`, "i").test(g))) {
        return { found: true, glosses: [deLemma] };
      }
    }
    const hrefRe = new RegExp(
      `href="/german-[^"]+/${deEsc.toLowerCase()}"[^>]*>${deEsc}<`,
      "i",
    );
    if (hrefRe.test(html)) return { found: true, glosses: [deLemma] };
    if (new RegExp(`data-text="${deEsc}"`, "i").test(html)) return { found: true, glosses: [deLemma] };
    return { found: false, glosses: [] };
  }
  const summary = html.match(/class="btn-inner">\s*([^<]+)\s*<\/span>/);
  if (summary?.[1]) {
    const glosses = summary[1]
      .split(",")
      .map((g) => cleanTarget(g))
      .filter(Boolean);
    if (glosses.length) return { found: true, glosses };
  }
  const title = html.match(new RegExp(`<h2 id="${escapeRe(deLemma)}"`, "i"));
  if (title) {
    const linkRe = /href="\/[^"]+-[^"]+\/([^"]+)">([^<]+)</g;
    let m;
    const glosses = [];
    while ((m = linkRe.exec(html)) && glosses.length < 4) {
      const w = cleanTarget(m[2]);
      if (w && !new RegExp(`^${escapeRe(deLemma)}$`, "i").test(w)) glosses.push(w);
    }
    if (glosses.length) return { found: true, glosses };
  }
  return { found: false, glosses: [] };
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; g2-a1-pilot/1.0)" },
    redirect: "follow",
  });
  return { status: res.status, html: await res.text(), finalUrl: res.url };
}

async function fetchUewPage(url) {
  const host = new URL(url).hostname;
  return withDomainBrowserSession(host, async (page) => {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(2000);
    return { text: await page.evaluate(() => document.body?.innerText || ""), finalUrl: page.url() };
  });
}

function extractUew(text, queryLemma, deLemma, reverse) {
  if (!text || text.length < 100) return { found: false, glosses: [] };
  if (!new RegExp(escapeRe(queryLemma), "i").test(text)) return { found: false, glosses: [] };
  if (reverse) {
    return new RegExp(`\\b${escapeRe(deLemma)}\\b`, "i").test(text)
      ? { found: true, glosses: [deLemma] }
      : { found: false, glosses: [] };
  }
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const idx = lines.findIndex((l) => new RegExp(`^${escapeRe(queryLemma)}`, "i").test(l));
  const glosses = [];
  for (let i = Math.max(0, idx); i < Math.min(lines.length, idx + 12); i++) {
    const line = lines[i];
    if (/ukrainisch|deutsch|suche|copyright|leipzig/i.test(line)) continue;
    if (line.length >= 2 && line.length <= 60 && !new RegExp(`^${escapeRe(queryLemma)}$`, "i").test(line)) {
      const w = cleanTarget(line);
      if (w && /[\u0400-\u04FF]/.test(w)) glosses.push(w);
    }
    if (glosses.length >= 3) break;
  }
  return glosses.length ? { found: true, glosses } : { found: true, glosses: ["(entry present)"] };
}

function lemmaForSource(source, deLemma) {
  if (source.reverse) return REVERSE_LEMMAS[source.lang][deLemma];
  return deLemma;
}

async function probeLemma(source, deLemma) {
  const queryLemma = lemmaForSource(source, deLemma);
  let entryUrl;
  let found = false;
  let targetGloss = null;
  let evidenceSnippet = null;
  let error = null;

  try {
    if (source.platform === "dictcc") {
      const probeLemma = source.reverse ? queryLemma : deLemma;
      const result = await probePilotWord(candidateFromSource(source), probeLemma, source.lang);
      entryUrl = result.resultUrl || source.dictUrl;
      found = result.pilotStatus === "FOUND";
      targetGloss = [result.sampleTranslation, ...(result.alternativeSamples || [])]
        .filter(Boolean)
        .join("; ");
      if (source.reverse && found && result.sampleTranslation) {
        targetGloss = `${result.sampleTranslation} → ${deLemma}`;
      }
    } else if (source.platform === "pons") {
      const candidate = buildPonsCandidate(source);
      const probeLemma = source.reverse ? queryLemma : deLemma;
      const page = await fetchDictionaryPageForCandidate(candidate, probeLemma);
      entryUrl = page.finalUrl || page.searchUrl;
      const glosses = extractPonsPairs(page.text, deLemma, source.reverse, queryLemma);
      found = glosses.length > 0;
      targetGloss = glosses.join("; ");
      evidenceSnippet = page.text.replace(/\s+/g, " ").slice(0, 240);
    } else if (source.platform === "langenscheidt") {
      entryUrl = buildLangenscheidtUrl(source, queryLemma);
      const { html, finalUrl } = await fetchHtml(entryUrl);
      entryUrl = finalUrl;
      const parsed = extractLangenscheidtFromHtml(html, deLemma, source.reverse, queryLemma);
      found = parsed.found;
      targetGloss = parsed.glosses.join("; ");
      evidenceSnippet = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").slice(0, 240);
    } else if (source.platform === "udew") {
      entryUrl = buildUewUrl(source, queryLemma);
      const page = await fetchUewPage(entryUrl);
      entryUrl = page.finalUrl;
      const parsed = extractUew(page.text, queryLemma, deLemma, source.reverse);
      found = parsed.found;
      targetGloss = parsed.glosses.join("; ");
      evidenceSnippet = page.text.replace(/\s+/g, " ").slice(0, 240);
    }
  } catch (e) {
    error = String(e.message || e);
  }

  return { deLemma, queryLemma, found, targetGloss, entryUrl, evidenceSnippet, error };
}

async function probeSource(source) {
  const pilots = [];
  for (const deLemma of DE_LEMMAS) {
    pilots.push(await probeLemma(source, deLemma));
  }
  const hitCount = pilots.filter((p) => p.found).length;
  const status =
    hitCount >= 4 ? "VERIFIED_USABLE_PRIMARY" : hitCount >= 1 ? "PARTIAL" : "NOT_USABLE";
  return { ...source, status, pilotHitCount: hitCount, pilotTotal: DE_LEMMAS.length, pilots };
}

function buildMarkdown(report) {
  const lines = [
    "# DE↔CS / SK / UK — divvalodu avotu pilotpārbaude",
    "",
    `Ģenerēts: ${report.generatedAt}`,
    "",
    "Pilotlemmas: **Haus, arbeiten, Kleingeld, bewirten, Grenzkonflikt, Machtgier**.",
    "",
    "| Valoda | DE→TARGET (galvenais) | TARGET→DE (galvenais) |",
    "| --- | --- | --- |",
  ];
  for (const lang of ["cs", "sk", "uk"]) {
    const prim = report.sources.filter(
      (s) => s.lang === lang && s.direction.startsWith("de") && s.status === "VERIFIED_USABLE_PRIMARY",
    );
    const rev = report.sources.filter(
      (s) => s.lang === lang && !s.direction.startsWith("de") && s.status === "VERIFIED_USABLE_PRIMARY",
    );
    lines.push(
      `| **${lang}** | ${prim.map((p) => p.name.split("—").pop().trim()).join("; ") || "—"} | ${rev.map((p) => p.name.split("—").pop().trim()).join("; ") || "—"} |`,
    );
  }
  lines.push("", "---", "");
  for (const lang of ["cs", "sk", "uk"]) {
    lines.push(`## ${lang.toUpperCase()}`);
    lines.push("");
    for (const s of report.sources.filter((x) => x.lang === lang)) {
      lines.push(`### ${s.name} (${s.direction}) — **${s.status}** (${s.pilotHitCount}/${s.pilotTotal})`);
      lines.push("");
      lines.push(`- **Gads / bāze:** ${s.yearBase}`);
      lines.push(`- **Apjoms:** ${s.approxEntries}`);
      lines.push(`- **Portāls:** ${s.portalUrl}`);
      lines.push("");
      lines.push("| DE / vaicājums | Atrasts | Gloss | URL |");
      lines.push("| --- | --- | --- | --- |");
      for (const p of s.pilots) {
        lines.push(
          `| ${p.deLemma} → \`${p.queryLemma}\` | ${p.found ? "Jā" : "Nē"} | ${p.targetGloss || p.error || "—"} | ${p.entryUrl} |`,
        );
      }
      lines.push("");
    }
    for (const r of (report.rejected || []).filter((x) => x.lang === lang)) {
      lines.push(`- **Noraidīts:** ${r.name} — ${r.reason}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

async function probeRejected() {
  return [
    {
      lang: "cs",
      id: "kramerius-sterzinger",
      name: "Sterzinger, Encyklopedický německo-český slovník (NKP Kramerius, 1916–1935)",
      url: "https://kramerius5.nkp.cz/",
      reason:
        "NDK/Kramerius satur vēsturiskos sējumus ar OCR, bet šajā runā nav atvērts konkrēts viewer URL ar visiem 6 pilotiem; paliek papildinājums pēc PONS/Langenscheidt.",
      status: "HISTORICAL_SUPPLEMENT_NOT_PILOTED_THIS_RUN",
    },
    {
      lang: "sk",
      id: "snk-catalog-only",
      name: "SNK digitālie fondi (bez konkrēta DE↔SK viewer URL)",
      url: "https://www.snk.sk/",
      reason: "Tikai bibliotēkas katalogs — nav izmantojams bez atvērta pilna teksta skatītāja.",
      status: "CATALOG_OR_STUB_ONLY",
    },
    {
      lang: "uk",
      id: "langenscheidt-de-uk-redirect",
      name: "Langenscheidt Deutsch–Ukrainisch (en.langenscheidt.com/german-ukrainian/…)",
      url: "https://en.langenscheidt.com/german-ukrainian",
      reason:
        "Lemma URL pāradresē uz sākumlapu — nav atvērts pilns šķirkļa saturs šajā runā.",
      status: "CATALOG_OR_STUB_ONLY",
    },
    {
      lang: "uk",
      id: "udew-uni-leipzig",
      name: "UDEW Ukrainisch–Deutsch (Universität Leipzig)",
      url: "https://udew.uni-leipzig.de/udew/en/ukrainisch_deutsch_online.htm",
      reason:
        "Institucionālais leksikons; piekļuve no šīs vides neizdevās (HTTP/2 / tukša atbilde).",
      status: "TECHNICAL_ACCESS_BLOCKED",
    },
  ];
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const results = [];
  for (const source of SOURCES) {
    // eslint-disable-next-line no-console
    console.log("Probing", source.id, "...");
    results.push(await probeSource(source));
  }
  const rejected = await probeRejected();
  const report = {
    schemaVersion: "g2-a1-pdf-bilingual-dictionary-cs-sk-uk-pilot-v1",
    generatedAt: new Date().toISOString().slice(0, 10),
    verificationNote:
      "PONS/Langenscheidt/UDEW opened in this run (Playwright for PONS+UDEW; HTTP for Langenscheidt).",
    sources: results.map(({ pilots, ...meta }) => ({
      id: meta.id,
      lang: meta.lang,
      name: meta.name,
      direction: meta.direction,
      yearBase: meta.yearBase,
      approxEntries: meta.approxEntries,
      portalUrl: meta.portalUrl,
      status: meta.status,
      pilotHitCount: meta.pilotHitCount,
      pilotTotal: meta.pilotTotal,
      pilots,
    })),
    rejected,
  };

  const jsonPath = path.join(OUT_DIR, "pdf-bilingual-dictionary-cs-sk-uk-modern-sources.json");
  const mdPath = path.join(OUT_DIR, "pdf-bilingual-dictionary-cs-sk-uk-modern-sources.md");
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(mdPath, `${buildMarkdown(report)}\n`);
  // eslint-disable-next-line no-console
  console.log("Wrote", jsonPath);
  for (const s of report.sources) {
    console.log(`  ${s.id}: ${s.pilotHitCount}/${s.pilotTotal} ${s.status}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
