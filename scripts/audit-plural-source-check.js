#!/usr/bin/env node
/**
 * Read-only plural source check against Duden and Goethe-Institut PDFs.
 * Does not edit data, www/data, languages, ui.js, or existing scripts.
 * Network: www.duden.de and www.goethe.de only. Cache: /tmp/plural-cache.
 *
 * Extraction rules (observed page structure, 2026-10-03):
 * 1. Duden URL is https://www.duden.de/rechtschreibung/<slug>. slug replaces spaces with _, and ä ö ü ß with ae oe ue ss. HTTP 200 whose h1 headword equals the lemma is the entry. HTTP 404 is not an entry; other senses are the sitemap-lexeme/<letter>?page=N links whose slug is <slug> or <slug>_.
 * 2. Genus comes from the Wortart tuple: maskulin→der, feminin→die, Neutrum→das. h1 "Band, das" must agree. Wortart Pluralwort → PLURAL_ONLY.
 * 3. Plural forms come only from an explicit "Plural:" or "Plural (…):" label in the first div#grammatik <p> and in Bedeutung tuples dt Grammatik / dd. Angle brackets, IPA, and parenthetical notes are removed. Orthographic [s]/[n] expands to both spellings. "(Plural selten)" yields PLURAL_RARE. Examples: Erlaubnis → Erlaubnisse; Pfahlbau ⟨Plural: Pfahlbauten⟩ → Pfahlbauten; Beton → Betons, Betone.
 * 4. Grammar text "nur im Plural" or Wortart Pluralwort, with no separate plural form, is PLURAL_ONLY. Example: Eltern.
 * 5. A "Plural:" form and no Bedeutung note "ohne Plural" is PLURAL_FOUND. Example: Band, der → die Bände. das Band notes "Plural: Bänder" and "Plural: Bande" stay a set; one data match is enough. A genitive tail (des Blut[e]s, Blute; des Bargeldes, Bargelds) is never a plural form.
 * 6. No "Plural:" form, and the grammar line is only genus plus genitive doublets (Bargeld, Gepäck, Kosmetik), is NO_PLURAL_LISTED.
 * 7. A listed plural together with a Bedeutung note "ohne Plural" is NEEDS_SOURCE_REVIEW. Examples: Schaden, Geld, Anbau. A grammar line with no Plural: label that still has (Sorten:), (Arten:), (Fachsprache), or the word Plural (Blut; Sport "Sporte (Plural selten)") is NEEDS_SOURCE_REVIEW. Those tails are not stored as the plural form.
 * 8. Several headwords (Band_Buch der, Band_Gewebestreifen das, Band_Musikergruppe die): keep the entry whose Genus equals de_article. Zero or more than one match is AMBIGUOUS and every entry is listed.
 * 9. Goethe noun lines, read from PDF word boxes, not from memory. A2/B1: "der Anfang, ¨-e", "das Fenster, -" (hyphen alone = plural equals singular), "das Alter (Sg.)" = no plural, "Eltern (Pl.)" = plural only. Start Deutsch 1: "die Birne, -n", "der Bruder, -ü", "das Buch, -ü, er"; en dash "–" (das Brötchen, –) = no plural. Fit in Deutsch 1: "r Ausflug, ü, -e" = der, "s Bad, ä, -er" = das, "e Bibliothek, -en" = die. A word absent from every retrieved list is NOT_IN_SOURCE.
 * 10. Data comparison follows the stage rules. Cached HTML/PDF stay in /tmp/plural-cache and are not copied into the repository. The report stores lemma, article, plural form, verdict, source id, URL or PDF page, and access date.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const CACHE = "/tmp/plural-cache";
const HTTP_CACHE = path.join(CACHE, "http");
const OUT_MD = path.join(ROOT, "reports/plural-source-check.md");
const OUT_JSON = path.join(ROOT, "reports/plural-source-check.json");
const OUT_CSV = path.join(ROOT, "reports/plural-source-check.csv");
const UA = "Mozilla/5.0 (compatible; de-lv-plural-check/1.0)";
const MIN_INTERVAL_MS = 1100;
const LEVEL_FILES = ["a1", "a2", "b1", "b2", "c1", "c2"];
const LEVEL_ORDER = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };
const CONTROL = ["Schaden", "Geld", "Pfahlbau", "Anbau", "Erlaubnis", "Jagderlaubnis", "Blut", "Gepäck", "Eltern", "Ferien", "Kosmetik", "Band", "See", "Tor"];
const GOETHE_SOURCES = [
  {
    id: "Goethe-A1-Fit1",
    level: "A1",
    title: "Goethe-Zertifikat A1 Fit in Deutsch 1 Wortliste",
    url: "https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A1_Fit1_Wortliste.pdf"
  },
  {
    id: "Goethe-A1-SD1",
    level: "A1",
    title: "Goethe-Zertifikat A1 Start Deutsch 1 Wortliste",
    url: "https://www.goethe.de/pro/relaunch/prf/en/Goethe-Zertifikat_A1_Start_Deutsch_1_Wortliste.pdf"
  },
  {
    id: "Goethe-A2",
    level: "A2",
    title: "Goethe-Zertifikat A2 Wortliste",
    url: "https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A2_Wortliste.pdf"
  },
  {
    id: "Goethe-B1",
    level: "B1",
    title: "Goethe-Zertifikat B1 Wortliste",
    url: "https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf"
  }
];

let lastRequestAt = 0;

function sha256Text(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function sha256File(filePath) {
  return sha256Text(fs.readFileSync(filePath));
}

function sleepSync(ms) {
  if (ms > 0) Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function cleanText(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\u00ad/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function foldSlug(value) {
  return String(value || "")
    .normalize("NFC")
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue").replace(/ß/g, "ss")
    .replace(/\s+/g, "_")
    .replace(/[^\w_]/g, "");
}

function letterKey(lemma) {
  const folded = foldSlug(lemma).toLowerCase();
  const char = folded[0] || "a";
  return /[a-z]/.test(char) ? char : "a";
}

function sortKey(value) {
  return foldSlug(value).toLowerCase();
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function allowedUrl(url) {
  const parsed = new URL(url);
  if (parsed.protocol !== "https:") return false;
  if (parsed.hostname === "www.duden.de") {
    if (parsed.pathname.startsWith("/rechtschreibung/")) return true;
    if (parsed.pathname === "/sitemap-lexeme" || parsed.pathname.startsWith("/sitemap-lexeme/")) return true;
    if (parsed.pathname === "/robots.txt") return true;
    return false;
  }
  if (parsed.hostname === "www.goethe.de") {
    if (parsed.search) return false;
    if (parsed.pathname === "/robots.txt") return true;
    if (parsed.pathname === "/sitemap.xml" || parsed.pathname.endsWith("/sitemap.xml")) return true;
    if (parsed.pathname.toLowerCase().endsWith(".pdf")) return true;
    if (parsed.pathname.endsWith(".html")) return true;
    return false;
  }
  return false;
}

function fetchUrl(url) {
  if (!allowedUrl(url)) throw new Error(`URL not allowed: ${url}`);
  fs.mkdirSync(HTTP_CACHE, { recursive: true });
  const key = sha256Text(url);
  const metaPath = path.join(HTTP_CACHE, `${key}.json`);
  const bodyPath = path.join(HTTP_CACHE, `${key}.body`);
  if (fs.existsSync(metaPath) && fs.existsSync(bodyPath)) {
    const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
    meta.body = fs.readFileSync(bodyPath);
    meta.fromCache = true;
    return meta;
  }
  const wait = MIN_INTERVAL_MS - (Date.now() - lastRequestAt);
  sleepSync(wait);
  lastRequestAt = Date.now();
  const headerPath = path.join(HTTP_CACHE, `${key}.hdr`);
  const curlOnce = () => {
    try {
      const output = execFileSync("curl", [
        "-sS", "-L", "--max-time", "45", "-A", UA,
        "-D", headerPath, "-o", bodyPath, "-w", "%{http_code}", url
      ], { encoding: "utf8" });
      return Number(output.trim().slice(-3)) || 0;
    } catch (error) {
      fs.writeFileSync(bodyPath, "");
      return 0;
    }
  };
  let status = curlOnce();
  if (status === 0) {
    sleepSync(MIN_INTERVAL_MS);
    lastRequestAt = Date.now();
    status = curlOnce();
  }
  const header = fs.existsSync(headerPath) ? fs.readFileSync(headerPath, "utf8") : "";
  const contentType = (header.match(/content-type:\s*([^\r\n]+)/i) || ["", ""])[1];
  const date = new Date().toISOString().slice(0, 10);
  const meta = { url, status, contentType, date, bytes: fs.existsSync(bodyPath) ? fs.statSync(bodyPath).size : 0 };
  fs.writeFileSync(metaPath, `${JSON.stringify(meta)}\n`);
  meta.body = fs.existsSync(bodyPath) ? fs.readFileSync(bodyPath) : Buffer.alloc(0);
  meta.fromCache = false;
  return meta;
}

function articlesFromWortart(text) {
  const value = String(text || "").toLowerCase();
  if (value.includes("pluralwort")) return { articles: ["die"], pluralwort: true };
  const articles = [];
  if (value.includes("maskulin")) articles.push("der");
  if (value.includes("feminin")) articles.push("die");
  if (value.includes("neutrum")) articles.push("das");
  return { articles, pluralwort: false };
}

function expandOrthographic(token) {
  const match = String(token || "").match(/^([A-ZÄÖÜ][A-Za-zÄÖÜäöüß0-9-]*)\[([a-zäöü]{1,3})\]([A-Za-zÄÖÜäöüß0-9-]*)$/);
  if (!match) return [token];
  return [`${match[1]}${match[3]}`, `${match[1]}${match[2]}${match[3]}`];
}

function pluralFormsFromSpan(span) {
  const text = String(span || "")
    .replace(/[⟨⟩]/g, " ")
    .replace(/\[[^\]]*[ˈːˌ….ˑ()0-9][^\]]*\]/g, " ")
    .replace(/\([^)]*\)/g, " ");
  const forms = [];
  let unclear = false;
  text.split(/\s+und\s+|\s+oder\s+|\/|,/i).forEach((rawPart) => {
    let part = rawPart.trim();
    if (!part) return;
    if (/^(?:selten|seltener|auch)\s*:\s*(?:der|das)\s+/i.test(part)) return;
    let previous = "";
    while (part !== previous) {
      previous = part;
      part = part.replace(/^(?:auch|selten|seltener|besonders|süddeutsch|österreichisch|ostösterreichisch|schweizerisch|mundartlich|umgangssprachlich|norddeutsch|regional|fachsprache)\s*:?\s*/i, "").trim();
      part = part.replace(/^(?:die|der|das|des|dem|den)\s+/i, "").trim();
    }
    if (!part) return;
    expandOrthographic(part).forEach((token) => {
      const clean = token.normalize("NFC").trim();
      if (/^[A-ZÄÖÜ][A-Za-zÄÖÜäöüß0-9-]*(?:\s+[A-ZÄÖÜ][A-Za-zÄÖÜäöüß0-9-]*)*$/.test(clean)) forms.push(clean);
      else unclear = true;
    });
  });
  return { forms, unclear };
}

function isGenitiveDoublet(token, headword) {
  const head = String(headword || "").normalize("NFC");
  const allowed = new Set();
  [head, ...head.split(/\s+/)].filter(Boolean).forEach((word) => {
    allowed.add(word);
    allowed.add(`${word}s`);
    allowed.add(`${word}es`);
    allowed.add(`${word}ns`);
    allowed.add(`${word}'`);
    allowed.add(`${word}'s`);
  });
  const candidates = [
    token,
    token.replace(/\[e\]s$/i, "s"),
    token.replace(/\[e\]s$/i, "es"),
    token.replace(/\[e\]/gi, "")
  ];
  return candidates.some((candidate) => allowed.has(candidate.normalize("NFC")));
}

function unlistedPluralSignal(grammarText, notes, headword) {
  const rest = [grammarText, ...notes].filter(Boolean).join(" ; ")
    .replace(/[⟨⟩]/g, " ")
    .replace(/Plural(?:\s*\([^)]*\))?\s*:[^;]*/gi, " ");
  if (/\bplural\b/i.test(rest)) return true;
  if (/\((?:[^)]*\b(?:sorten|arten|fachsprache)\b[^)]*)\)/i.test(rest)) return true;
  const skip = /^(der|die|das|des|dem|den|genitiv|oder|und|auch|seltener|selten|meist|ohne|artikel|nominativ)$/i;
  return rest.split(/[\s,;:]+/).some((piece) => {
    const token = piece.replace(/[()[\]⟨⟩]/g, "");
    if (!token || skip.test(token) || !/^[A-ZÄÖÜ]/.test(token)) return false;
    return !isGenitiveDoublet(token, headword);
  });
}

function parseDudenHtml(html) {
  const title = cleanText((html.match(/<title>([^<]*)<\/title>/i) || ["", ""])[1]);
  if (/nicht gefunden/i.test(title)) return null;
  const h1 = cleanText((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || ["", ""])[1]);
  const headword = h1.split(",")[0].trim();
  const wortartRaw = cleanText((html.match(/Wortart:[\s\S]*?<dd class="tuple__val">([\s\S]*?)<\/dd>/i) || ["", ""])[1]);
  const genus = articlesFromWortart(wortartRaw);
  const division = html.match(/<div class="division "[^>]*id="grammatik">([\s\S]*?)<\/div>/i);
  const grammarText = cleanText(division ? ((division[1].match(/<p>([\s\S]*?)<\/p>/i) || ["", ""])[1]) : "");
  const notes = [...new Set([...html.matchAll(/<dt class="tuple__key">Grammatik<\/dt>\s*<dd class="tuple__val">([\s\S]*?)<\/dd>/gi)]
    .map((match) => cleanText(match[1]))
    .filter(Boolean))];
  const forms = [];
  let unclear = false;
  const grab = (text) => {
    const labeled = [...text.replace(/[⟨⟩]/g, " ").matchAll(/Plural(?:\s*\([^)]*\))?\s*:\s*([^;]+)/gi)];
    labeled.forEach((match) => {
      const parsed = pluralFormsFromSpan(match[1]);
      forms.push(...parsed.forms);
      if (parsed.unclear) unclear = true;
    });
  };
  grab(grammarText);
  notes.forEach(grab);
  const uniqueForms = [...new Set(forms.map((form) => form.normalize("NFC")))];
  const texts = [grammarText, ...notes];
  const rare = texts.some((text) => /plural selten|selten plural/i.test(text));
  const ohne = texts.some((text) => /ohne plural/i.test(text));
  const only = genus.pluralwort || texts.some((text) => /nur im plural/i.test(text));
  const residue = !uniqueForms.length && unlistedPluralSignal(grammarText, notes, headword);
  let status = "NEEDS_SOURCE_REVIEW";
  let formsOut = uniqueForms;
  if (only && uniqueForms.length === 0) {
    status = "PLURAL_ONLY";
    formsOut = headword ? [headword.normalize("NFC")] : [];
  } else if (uniqueForms.length && ohne) status = "NEEDS_SOURCE_REVIEW";
  else if (uniqueForms.length && unclear) status = "NEEDS_SOURCE_REVIEW";
  else if (rare && uniqueForms.length) status = "PLURAL_RARE";
  else if (uniqueForms.length) status = "PLURAL_FOUND";
  else if (ohne) status = "NO_PLURAL_LISTED";
  else if (residue || (!grammarText && !notes.length)) status = "NEEDS_SOURCE_REVIEW";
  else status = "NO_PLURAL_LISTED";
  const technicalMass = /fachsprache|\(sorten\b|\(arten\b|stoffname|stoffbezeichnung|massenomen/i.test([grammarText, ...notes].join(" "));
  return {
    title,
    headword,
    wortart: wortartRaw,
    article: genus.articles.length === 1 ? genus.articles[0] : genus.articles.join(" oder "),
    articles: genus.articles,
    pluralwort: genus.pluralwort,
    grammarText,
    quote: shortQuote(grammarText),
    notes,
    forms: formsOut,
    technicalMass,
    status
  };
}

function joinedQuote(entries) {
  const words = [];
  entries.forEach((entry) => {
    const quote = entry.quote || shortQuote(entry.grammarText);
    String(quote || "").split(/\s+/).filter(Boolean).forEach((word) => {
      if (words.length < 15 && word !== "||") words.push(word);
    });
  });
  return words.join(" ");
}

function shortQuote(text) {
  const words = String(text || "").replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  if (!words.length) return "";
  if (words.length <= 15) return words.join(" ");
  return `${words.slice(0, 15).join(" ")} …`;
}

function chooseDudenEntries(entries, article) {
  const wanted = String(article || "").trim();
  let pool = entries.slice();
  if (wanted) pool = pool.filter((entry) => entryArticles(entry).includes(wanted));
  const current = pool.filter((entry) => !/frueher/i.test(String(entry.url || "")));
  const droppedDative = [];
  if (current.length && current.length < pool.length) {
    pool.filter((entry) => /frueher/i.test(String(entry.url || ""))).forEach((entry) => {
      if (entry.forms.length === 1 && entry.headword && entry.forms[0] === `${entry.headword}n`) droppedDative.push(entry.forms[0]);
    });
    pool = current;
  }
  const pluralOnly = pool.filter((entry) => entry.pluralwort || entry.status === "PLURAL_ONLY");
  if (pluralOnly.length) {
    pool = pool.filter((entry) => {
      const dative = entry.forms.length === 1 && entry.headword && entry.forms[0] === `${entry.headword}n`;
      if (dative) droppedDative.push(entry.forms[0]);
      return !dative;
    });
  }
  pool.droppedDative = droppedDative;
  return pool;
}

function indexLinks(html) {
  return [...new Set([...html.matchAll(/href="(\/rechtschreibung\/([^"]+))"/g)].map((match) => ({
    path: match[1],
    slug: decodeURIComponent(match[2])
  })))];
}

function findSlugPage(letter, targetSlug) {
  let low = 0;
  let high = 1;
  let lastGood = 0;
  const probe = (page) => {
    const url = page === 0
      ? `https://www.duden.de/sitemap-lexeme/${letter}`
      : `https://www.duden.de/sitemap-lexeme/${letter}?page=${page}`;
    const response = fetchUrl(url);
    if (response.status !== 200) return { page, links: [], first: "", last: "" };
    const links = indexLinks(response.body.toString("utf8"));
    const keys = links.map((link) => sortKey(link.slug)).filter(Boolean).sort();
    const lo = keys.length ? Math.min(keys.length - 1, Math.floor(keys.length * 0.05)) : 0;
    const hi = keys.length ? Math.min(keys.length - 1, Math.max(lo, Math.ceil(keys.length * 0.95) - 1)) : 0;
    return {
      page,
      links,
      first: keys[lo] || "",
      last: keys[hi] || ""
    };
  };
  let upper = probe(0);
  if (!upper.last) return [];
  while (sortKey(upper.last) < sortKey(targetSlug) && high < 80) {
    lastGood = high;
    high *= 2;
    upper = probe(high);
    if (!upper.last) break;
  }
  low = Math.max(0, lastGood);
  let found = null;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const row = probe(mid);
    if (!row.last) {
      high = mid - 1;
      continue;
    }
    if (sortKey(row.first) <= sortKey(targetSlug) && sortKey(targetSlug) <= sortKey(row.last)) {
      found = row;
      break;
    }
    if (sortKey(row.last) < sortKey(targetSlug)) low = mid + 1;
    else high = mid - 1;
  }
  if (!found) return [];
  const pages = [found];
  if (found.page > 0) pages.push(probe(found.page - 1));
  pages.push(probe(found.page + 1));
  const wanted = new Map();
  pages.forEach((row) => {
    row.links.forEach((link) => {
      if (link.slug === targetSlug || link.slug.startsWith(`${targetSlug}_`)) wanted.set(link.slug, `https://www.duden.de${link.path}`);
    });
  });
  return [...wanted.values()];
}

function lookupDuden(lemma) {
  const slug = foldSlug(lemma);
  const directUrl = `https://www.duden.de/rechtschreibung/${encodeURIComponent(slug)}`;
  const direct = fetchUrl(directUrl);
  const entries = [];
  if (direct.status === 200) {
    const parsed = parseDudenHtml(direct.body.toString("utf8"));
    if (parsed && parsed.headword.toLowerCase() === lemma.toLowerCase()) {
      entries.push({ ...parsed, url: directUrl, accessed: direct.date });
    }
  } else if (direct.status !== 404 && direct.status !== 200) {
    return { status: "NOT_CHECKED", entries: [], accessed: direct.date, url: directUrl, httpStatus: direct.status };
  }
  if (entries.length === 1) return { status: "FOUND", entries, accessed: entries[0].accessed };
  const extraUrls = findSlugPage(letterKey(lemma), slug).filter((url) => url !== directUrl);
  let blocked = null;
  extraUrls.forEach((url) => {
    const response = fetchUrl(url);
    if (response.status !== 200) {
      if (response.status !== 404) blocked = { status: "NOT_CHECKED", url, httpStatus: response.status, accessed: response.date };
      return;
    }
    const parsed = parseDudenHtml(response.body.toString("utf8"));
    if (parsed && parsed.headword.toLowerCase() === lemma.toLowerCase()) {
      entries.push({ ...parsed, url, accessed: response.date });
    }
  });
  if (blocked && !entries.length) return { status: "NOT_CHECKED", entries: [], accessed: blocked.accessed, url: blocked.url, httpStatus: blocked.httpStatus };
  if (!entries.length) return { status: "NOT_IN_SOURCE", entries: [], accessed: direct.date, url: directUrl };
  return { status: "FOUND", entries, accessed: entries[0].accessed };
}

function entryArticles(entry) {
  if (entry.articles && entry.articles.length) return entry.articles;
  if (entry.article && /^(der|die|das)$/.test(entry.article)) return [entry.article];
  return [];
}

function selectDuden(lookup, article) {
  if (lookup.status !== "FOUND") return lookup;
  const wanted = String(article || "").trim();
  const pool = wanted ? chooseDudenEntries(lookup.entries, article) : lookup.entries;
  const droppedDative = pool.droppedDative || [];
  if (pool.length === 1) {
    return {
      status: pool[0].status,
      entry: pool[0],
      entries: lookup.entries,
      accessed: lookup.accessed,
      droppedDative,
      pluralwort: Boolean(pool[0].pluralwort || pool[0].status === "PLURAL_ONLY")
    };
  }
  return {
    status: "AMBIGUOUS",
    entry: null,
    entries: pool.length ? pool : lookup.entries,
    accessed: lookup.accessed,
    droppedDative,
    pluralwort: false
  };
}

function umlautStem(stem) {
  const map = { a: "ä", o: "ö", u: "ü", A: "Ä", O: "Ö", U: "Ü" };
  for (let i = stem.length - 1; i >= 0; i -= 1) {
    if (i > 0 && stem.slice(i - 1, i + 1).toLowerCase() === "au") {
      const pair = stem.slice(i - 1, i + 1);
      const repl = pair === "AU" ? "ÄU" : pair[0] === pair[0].toUpperCase() ? "Äu" : "äu";
      return stem.slice(0, i - 1) + repl + stem.slice(i + 1);
    }
    if (map[stem[i]]) return stem.slice(0, i) + map[stem[i]] + stem.slice(i + 1);
  }
  return null;
}

function applyEnding(lemma, ending) {
  const noun = lemma.normalize("NFC");
  if (!ending || ending.kind === "none") return { status: "NO_PLURAL_LISTED", forms: [] };
  if (ending.kind === "only") return { status: "PLURAL_ONLY", forms: [noun] };
  if (ending.kind === "same") return { status: "PLURAL_FOUND", forms: [noun] };
  const suffixes = ending.suffixes || [""];
  const forms = [];
  for (const suffix of suffixes) {
    const stem = ending.umlaut ? umlautStem(noun) : noun;
    if (!stem) return { status: "NEEDS_SOURCE_REVIEW", forms: [] };
    forms.push(`${stem}${suffix}`);
  }
  return { status: ending.rare ? "PLURAL_RARE" : "PLURAL_FOUND", forms };
}

function parseEndingTokens(tokens) {
  const umlautMark = new Set(["ü", "ä", "ö", "¨", "-ü", "-ä", "-ö", "-¨"]);
  let umlaut = false;
  const suffixes = [];
  let index = 0;
  while (index < tokens.length) {
    const token = tokens[index].replace(/,$/, "");
    if (!token || token === ",") {
      index += 1;
      continue;
    }
    if (token === "(Sg.)" || token === "(sg.)") return { kind: "none" };
    if (token === "(Pl.)" || token === "(pl.)") return { kind: "only" };
    if (token === "–" || token === "—" || token === "−") return { kind: "none" };
    if (/^\((?:A|D|CH)(?:\s*,\s*(?:A|D|CH))*\)$/.test(token)) {
      index += 1;
      continue;
    }
    if (umlautMark.has(token)) {
      umlaut = true;
      index += 1;
      continue;
    }
    if (token === "-") {
      suffixes.push("");
      index += 1;
      continue;
    }
    const marked = token.match(/^(?:¨-|-¨|¨)(-?[a-zäöü]*)$/i);
    if (marked) {
      umlaut = true;
      suffixes.push((marked[1] || "").replace(/^-/, ""));
      index += 1;
      continue;
    }
    const plain = token.match(/^-([a-zäöü]+)$/i);
    if (plain) {
      plain[1].split("/").forEach((part) => suffixes.push(part));
      index += 1;
      continue;
    }
    if (umlaut && /^(e|er|en|n|s)$/i.test(token)) {
      suffixes.push(token);
      index += 1;
      continue;
    }
    break;
  }
  if (!suffixes.length && umlaut) suffixes.push("");
  if (!suffixes.length && !umlaut) return null;
  return { kind: "ending", umlaut, suffixes: suffixes.length ? suffixes : [""] };
}

function parseNounChunk(text) {
  const raw = String(text || "").replace(/\u00ad/g, "").replace(/\s+/g, " ").trim();
  const pluralOnly = raw.match(/^(?:die\s+)?([A-ZÄÖÜ][\wÄÖÜäöüß-]*)\s+\(Pl\.\)$/);
  if (pluralOnly) return { article: "die", lemma: pluralOnly[1], ending: { kind: "only" }, rest: "" };
  const singularOnly = raw.match(/^(der|die|das|[res])\s+([A-ZÄÖÜ][\wÄÖÜäöüß-]*)\s+\(Sg\.\)$/);
  if (singularOnly) {
    const article = { r: "der", e: "die", s: "das", der: "der", die: "die", das: "das" }[singularOnly[1]];
    return { article, lemma: singularOnly[2], ending: { kind: "none" }, rest: "" };
  }
  const match = raw.match(/^(der|die|das|[res])\s+([A-ZÄÖÜ][\wÄÖÜäöüß-]*),?\s*(.*)$/);
  if (!match) return null;
  const article = { r: "der", e: "die", s: "das", der: "der", die: "die", das: "das" }[match[1]];
  const lemma = match[2];
  const rest = match[3] || "";
  const tokens = rest.split(/\s+/).filter(Boolean);
  const ending = parseEndingTokens(tokens);
  if (!ending) return null;
  return { article, lemma, ending, rest };
}

function parseGoethePdf(pdfPath) {
  const html = execFileSync("pdftotext", ["-bbox-layout", pdfPath, "-"], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const pages = html.split(/<page\b/).slice(1);
  const nouns = [];
  pages.forEach((page, pageIndex) => {
    const words = [...page.matchAll(/<word xMin="([0-9.]+)" yMin="([0-9.]+)"[^>]*>([^<]*)<\/word>/g)];
    const lines = new Map();
    words.forEach((match) => {
      const y = Math.round(Number(match[2]) / 2) * 2;
      if (!lines.has(y)) lines.set(y, []);
      lines.get(y).push({ x: Number(match[1]), text: match[3].replace(/\u00ad/g, "") });
    });
    [...lines.keys()].sort((a, b) => a - b).forEach((y) => {
      const tokens = lines.get(y).sort((a, b) => a.x - b.x);
      const columns = [[], []];
      tokens.forEach((token) => columns[token.x < 280 ? 0 : 1].push(token.text));
      columns.forEach((column) => {
        if (!column.length) return;
        const parsed = parseNounChunk(column.join(" "));
        if (!parsed) return;
        const applied = applyEnding(parsed.lemma, parsed.ending);
        nouns.push({
          page: pageIndex + 1,
          article: parsed.article,
          lemma: parsed.lemma,
          ending: parsed.ending.kind === "ending"
            ? `${parsed.ending.umlaut ? "¨" : ""}${parsed.ending.suffixes.map((suffix) => `-${suffix}`).join("/")}`
            : parsed.ending.kind,
          status: applied.status,
          forms: applied.forms
        });
      });
    });
  });
  return nouns;
}

function locValues(body) {
  return [...String(body || "").matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

function discoverGoetheB2() {
  const tried = [];
  const remember = (response) => {
    tried.push({ url: response.url, httpStatus: response.status });
    return response;
  };
  const index = remember(fetchUrl("https://www.goethe.de/sitemap.xml"));
  if (index.status !== 200) return { status: "NOT_AVAILABLE", tried, url: "" };
  const children = locValues(index.body.toString("utf8")).filter((loc) => (
    loc === "https://www.goethe.de/de/sitemap.xml" || loc === "https://www.goethe.de/ins/de/de/sitemap.xml"
  ));
  const pages = [];
  children.forEach((loc) => {
    const response = remember(fetchUrl(loc));
    if (response.status !== 200) return;
    locValues(response.body.toString("utf8")).forEach((page) => {
      if (/\/prf\/prf\/gzb2(?:\/|\.html)/.test(page) || page.endsWith("/spr/prf/ueb/pb2.html")) pages.push(page);
    });
  });
  let pdfUrl = "";
  [...new Set(pages)].forEach((page) => {
    const response = remember(fetchUrl(page));
    if (response.status !== 200 || pdfUrl) return;
    const hrefs = [...response.body.toString("utf8").matchAll(/href="(https:\/\/www\.goethe\.de[^"]+\.pdf)"/gi)]
      .map((match) => match[1].split("?")[0]);
    pdfUrl = hrefs.find((href) => /wortliste/i.test(href) && /b2/i.test(href)) || "";
  });
  const parallel = "https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B2_Wortliste.pdf";
  if (!pdfUrl) {
    const response = remember(fetchUrl(parallel));
    const body = response.body ? response.body.toString("utf8") : "";
    const isPdf = response.status === 200 && (body.startsWith("%PDF") || (response.contentType || "").includes("pdf"));
    if (isPdf) pdfUrl = parallel;
  }
  if (!pdfUrl) return { status: "NOT_PUBLISHED", tried, url: "" };
  return { status: "FOUND", tried, url: pdfUrl };
}

function loadGoethe() {
  const lists = [];
  const b2Discovery = discoverGoetheB2();
  const sources = GOETHE_SOURCES.slice();
  sources.push({
    id: "Goethe-B2",
    level: "B2",
    title: "Goethe-Zertifikat B2 Wortliste",
    url: b2Discovery.url,
    discovery: b2Discovery
  });
  sources.forEach((source) => {
    if (source.id === "Goethe-B2" && b2Discovery.status !== "FOUND") {
      lists.push({
        ...source,
        status: b2Discovery.status,
        httpStatus: 0,
        nouns: [],
        sha256: "",
        nounCount: 0,
        tried: b2Discovery.tried
      });
      return;
    }
    const response = fetchUrl(source.url);
    const pdfBody = response.body && response.body.slice(0, 5).toString() === "%PDF-";
    if (response.status !== 200 || !pdfBody) {
      lists.push({ ...source, status: response.status === 404 ? "NOT_IN_SOURCE" : "NOT_CHECKED", httpStatus: response.status, nouns: [], sha256: "" });
      return;
    }
    const key = sha256Text(source.url);
    const pdfPath = path.join(HTTP_CACHE, `${key}.body`);
    const nouns = parseGoethePdf(pdfPath);
    lists.push({
      ...source,
      status: "LOADED",
      httpStatus: 200,
      accessed: response.date,
      sha256: sha256File(pdfPath),
      nounCount: nouns.length,
      nouns
    });
  });
  const byLemma = new Map();
  lists.forEach((list) => {
    if (list.status !== "LOADED") return;
    list.nouns.forEach((noun) => {
      const key = noun.lemma.toLowerCase();
      if (!byLemma.has(key)) byLemma.set(key, []);
      byLemma.get(key).push({ ...noun, sourceId: list.id, sourceTitle: list.title });
    });
  });
  return { lists, byLemma, anyLoaded: lists.some((list) => list.status === "LOADED"), b2Discovery };
}

function goetheFor(index, lemma, article) {
  const byLemma = index.byLemma || index;
  if (index.anyLoaded === false) return { status: "NOT_CHECKED", hits: [] };
  const hits = byLemma.get(String(lemma || "").toLowerCase()) || [];
  if (!hits.length) return { status: "NOT_IN_SOURCE", hits: [] };
  const wanted = String(article || "").trim();
  const pool = wanted ? hits.filter((hit) => hit.article === wanted) : hits;
  const chosen = pool.length ? pool : hits;
  if (wanted && pool.length === 0) {
    return { status: "AMBIGUOUS", hits };
  }
  const statuses = new Set(chosen.map((hit) => hit.status));
  const formSet = new Set(chosen.flatMap((hit) => hit.forms));
  if (chosen.length > 1 && (statuses.size > 1 || new Set(chosen.map((hit) => hit.forms.join("|"))).size > 1)) {
    const articles = new Set(chosen.map((hit) => hit.article));
    if (!wanted && articles.size > 1) return { status: "AMBIGUOUS", hits: chosen };
    if (statuses.size === 1 && [...formSet].length) {
      return { status: [...statuses][0], hits: chosen, forms: [...formSet], article: chosen[0].article };
    }
    return { status: "NEEDS_SOURCE_REVIEW", hits: chosen, forms: [...formSet] };
  }
  return { status: chosen[0].status, hits: chosen, forms: [...formSet], article: chosen[0].article };
}

function normForm(value) {
  return String(value || "").normalize("NFC").replace(/^die\s+/i, "").replace(/\s+/g, " ").trim();
}

function dataForms(plural) {
  const text = String(plural || "").trim();
  if (!text || text === "-") return [];
  return text.split(/\s+\/\s+/).map(normForm).filter(Boolean);
}

function formsAgree(left, right) {
  const a = new Set((left || []).map(normForm));
  const b = new Set((right || []).map(normForm));
  if (!a.size || !b.size) return false;
  for (const form of a) if (b.has(form)) return true;
  return false;
}

function compareSide(dataPlural, source) {
  const present = dataForms(dataPlural);
  if (!source || source.status === "NOT_IN_SOURCE") return "NOT_IN_SOURCE";
  if (source.status === "NOT_CHECKED") return "NOT_CHECKED";
  if (source.status === "AMBIGUOUS") return "AMBIGUOUS";
  if (source.status === "NEEDS_SOURCE_REVIEW") return "NEEDS_SOURCE_REVIEW";
  if (!present.length && source.status === "PLURAL_FOUND") return "MISSING_PLURAL_IN_DATA";
  if (!present.length && (source.status === "NO_PLURAL_LISTED" || source.status === "PLURAL_ONLY")) return "CONSISTENT";
  if (!present.length && source.status === "PLURAL_RARE") return "REVIEW_RARE_PLURAL";
  if (present.length && source.status === "PLURAL_ONLY") {
    if (formsAgree(present, source.forms || [])) return "CONSISTENT";
    return "PLURAL_FORM_MISMATCH";
  }
  if (present.length && source.status === "NO_PLURAL_LISTED") return "PLURAL_FORM_MISMATCH";
  if (present.length && formsAgree(present, source.forms || (source.entry && source.entry.forms))) return "CONSISTENT";
  if (present.length) return "PLURAL_FORM_MISMATCH";
  return "NEEDS_SOURCE_REVIEW";
}

function sourceForms(source) {
  if (!source) return [];
  if (source.forms) return source.forms;
  if (source.entry) return source.entry.forms || [];
  return [];
}

function sourcesDisagree(duden, goethe) {
  const informative = new Set(["PLURAL_FOUND", "NO_PLURAL_LISTED", "PLURAL_RARE", "PLURAL_ONLY"]);
  if (!informative.has(duden.status) || !informative.has(goethe.status)) return false;
  const dudenForms = sourceForms(duden);
  const goetheForms = sourceForms(goethe);
  return dudenForms.length > 0 && goetheForms.length > 0 && !formsAgree(dudenForms, goetheForms);
}

function dudenIsFormal(duden) {
  const entry = duden && duden.entry;
  if (!sourceForms(duden).length) return false;
  if (duden.status === "PLURAL_RARE" || (entry && entry.status === "PLURAL_RARE")) return true;
  if (entry && entry.technicalMass) return true;
  const text = entry ? [entry.grammarText, ...(entry.notes || [])].join(" ") : "";
  return /fachsprache|gehoben|veraltet|amtssprache|plural selten|selten plural/i.test(text);
}

function pluralOnlyConsistent(dataPlural, duden, goethe) {
  if (dataForms(dataPlural).length) return false;
  if (goethe && goethe.status === "PLURAL_ONLY") return true;
  return Boolean(duden && (duden.pluralwort || (duden.entry && duden.entry.pluralwort) || duden.status === "PLURAL_ONLY"));
}

function combineComparison(dataPlural, duden, goethe) {
  const left = compareSide(dataPlural, { ...duden, forms: sourceForms(duden) });
  const right = compareSide(dataPlural, { ...goethe, forms: sourceForms(goethe) });
  const present = dataForms(dataPlural);
  let note = "";
  let comparison = left;
  if (left === "NOT_CHECKED" || right === "NOT_CHECKED") comparison = "NOT_CHECKED";
  else if (pluralOnlyConsistent(dataPlural, duden, goethe)) comparison = "CONSISTENT";
  else if (sourcesDisagree(duden, goethe)) comparison = "SOURCES_DISAGREE";
  else if (goethe.status === "NO_PLURAL_LISTED" && dudenIsFormal(duden)) {
    comparison = "DUDEN_FORMAL_ONLY";
    note = "DUDEN_FORMAL_ONLY";
  } else if (!present.length && goethe.status === "PLURAL_FOUND" && (duden.status === "NEEDS_SOURCE_REVIEW" || duden.status === "PLURAL_RARE" || duden.status === "NO_PLURAL_LISTED")) {
    comparison = "MISSING_PLURAL_IN_DATA";
    note = "GOETHE_LISTS_PLURAL";
  } else if (left === "NOT_IN_SOURCE" && right !== "NOT_IN_SOURCE") comparison = right;
  return { comparison, dudenComparison: left, goetheComparison: right, sourcesDisagree: comparison === "SOURCES_DISAGREE", note };
}

function articleMismatch(dataArticle, duden, goethe) {
  const wanted = String(dataArticle || "").trim();
  if (!wanted) return [];
  const out = [];
  const dudenArticles = duden.entry ? entryArticles(duden.entry) : [];
  if (dudenArticles.length && !dudenArticles.includes(wanted)) out.push({ source: "Duden", article: duden.entry.article });
  if (goethe.article && goethe.article !== wanted && goethe.status !== "NOT_IN_SOURCE" && goethe.status !== "AMBIGUOUS") {
    out.push({ source: "Goethe", article: goethe.article });
  }
  return out;
}

function nEndingDiff(rows) {
  const out = [];
  rows.forEach((row) => {
    if (row.pluralwort) return;
    const afterForms = String(row.dudenPlural || "").split(/\s+\|\s+/).map(normForm).filter(Boolean);
    const beforeForms = String(row.dudenPluralBefore || "").split(/\s+\|\s+/).map(normForm).filter(Boolean);
    lemmasOf(row.de).forEach((lemma) => {
      afterForms.forEach((form) => {
        if (!form.endsWith("n") || form === `${normForm(lemma)}n`) return;
        const before = beforeForms.length ? beforeForms.join(" | ") : form;
        out.push({
          level: row.level,
          index: row.index,
          de: row.de,
          lemma,
          before,
          after: form,
          dudenStatus: row.dudenStatus
        });
      });
    });
  });
  return out;
}

function lemmasOf(de) {
  const text = String(de || "").trim();
  if (text.includes(" / ")) return text.split(/\s+\/\s+/).map((part) => part.trim()).filter(Boolean);
  return [text];
}


function loadArray(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx, { filename: filePath });
  const key = Object.keys(ctx.window).find((name) => Array.isArray(ctx.window[name]));
  if (!key) throw new Error(`no array in ${filePath}`);
  return ctx.window[key];
}


function uncheckedNounPlan(checkedRows) {
  const checked = new Set(checkedRows.map((row) => `${row.level}|${row.index}`));
  const levels = loadLevels();
  const plan = [];
  let nouns = 0;
  let checkedNouns = 0;
  const lemmas = new Set();
  LEVEL_FILES.forEach((file) => {
    const level = file.toUpperCase();
    let unchecked = 0;
    const levelLemmas = new Set();
    levels[file].forEach((entry, index) => {
      if (!entry || !["der", "die", "das"].includes(String(entry.de_article || "").trim())) return;
      nouns += 1;
      const key = `${level}|${index}`;
      if (checked.has(key)) {
        checkedNouns += 1;
        return;
      }
      unchecked += 1;
      const lemma = String(entry.de || "").trim();
      if (lemma) {
        lemmas.add(lemma);
        levelLemmas.add(lemma);
      }
    });
    plan.push({ level, unchecked, lemmas: levelLemmas.size });
  });
  return { nouns, checkedNouns, unchecked: nouns - checkedNouns, distinctLemmas: lemmas.size, levels: plan };
}

function foldStem(value) {
  return String(value).normalize("NFC").toLowerCase().replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss");
}

function pluralStemMatches(de, pluralWord) {
  const left = foldStem(de);
  const right = foldStem(pluralWord);
  const suffixes = ["", "e", "en", "er", "n", "s", "nen", "ten"];
  const replacements = [["ia", "ien"], ["um", "a"], ["um", "en"], ["us", "i"], ["us", "en"], ["is", "en"], ["a", "en"], ["o", "en"]];
  if (!left || !right) return false;
  if (suffixes.some((suffix) => right === left + suffix)) return true;
  if (replacements.some(([from, to]) => left.length > from.length && left.endsWith(from) && right === `${left.slice(0, -from.length)}${to}`)) return true;
  const last = left[left.length - 1];
  if (/[bcdfghjklmnpqrstvwxyz]/.test(last)) {
    const doubled = left + last;
    if (suffixes.some((suffix) => right === doubled + suffix)) return true;
  }
  return false;
}

function loadLevels() {
  const out = {};
  ["a1", "a2", "b1", "b2", "c1", "c2"].forEach((level) => {
    out[level] = loadArray(path.join(ROOT, "data", `${level}.js`));
  });
  return out;
}

function loadInput() {
  const levels = loadLevels();
  const selected = [];
  ["a1", "a2", "b1", "b2", "c1", "c2"].forEach((file) => {
    const level = file.toUpperCase();
    levels[file].forEach((entry, index) => {
      if (!entry || typeof entry !== "object") return;
      const de = entry.de == null ? "" : String(entry.de);
      const article = entry.de_article == null ? "" : String(entry.de_article).trim();
      const plural = entry.de_plural == null ? "" : String(entry.de_plural);
      const lv = entry.lv == null ? "" : String(entry.lv);
      const base = { level, index, de, de_article: article, de_plural: plural, lv };
      if (["der", "die", "das"].includes(article) && plural.trim() === "") {
        const single = !/\s/.test(de.trim());
        const ismus = /ismus$/i.test(de.trim().split(/\s+/).filter(Boolean).pop() || "");
        if (single && !ismus) selected.push({ ...base, category: "EMPTY_PLURAL", detail: "" });
      }
      if (plural.trim().startsWith("die ")) {
        const word = plural.trim().slice(4).trim();
        if (!word || !de.trim() || !pluralStemMatches(de.trim(), word)) {
          selected.push({ ...base, category: "PLURAL_STEM_CHECK", detail: word ? "STEM_MISMATCH" : "EMPTY_AFTER_DIE" });
        }
      }
    });
  });
  if (selected.length !== 506) throw new Error(`expected 506 input rows, got ${selected.length}`);
  return selected;
}

function refOf(duden, goethe) {
  const parts = [];
  if (duden.entry) parts.push(`Duden ${duden.entry.url}`);
  else if (duden.entries && duden.entries.length) parts.push(duden.entries.map((entry) => entry.url).join(" "));
  (goethe.hits || []).forEach((hit) => parts.push(`${hit.sourceId} p.${hit.page}`));
  return parts.join("; ");
}

function summarize(rows) {
  const count = (keyFn) => {
    const out = {};
    rows.forEach((row) => {
      const key = keyFn(row);
      out[key] = (out[key] || 0) + 1;
    });
    return out;
  };
  return {
    comparison: count((row) => row.comparison),
    duden: count((row) => row.dudenStatus),
    goethe: count((row) => row.goetheStatus),
    articleMismatch: rows.filter((row) => row.articleMismatch.length).length
  };
}

function rowLine(row) {
  return `- ${row.level}[${row.index}] de=${csvEscape(row.de)} de_article=${csvEscape(row.de_article)} de_plural=${csvEscape(row.de_plural)} duden=${csvEscape(row.dudenStatus)}:${csvEscape(row.dudenPlural)} goethe=${csvEscape(row.goetheStatus)}:${csvEscape(row.goethePlural)} note=${csvEscape(row.comparisonNote || "")} duden_quote=${csvEscape(row.dudenQuote || "")} goethe_page=${csvEscape(row.goetheRef || "")}`;
}

function renderMarkdown(body) {
  const lines = [];
  const push = (text) => lines.push(text);
  push("# Plural source check");
  push("");
  push("Šis audits pārbauda daudzskaitli pret Duden un Goethe-Institut. Verdikts NOT_CHECKED vai NOT_IN_SOURCE nenozīmē, ka forma ir pareiza.");
  push("");
  push("DE lauki netiek laboti. Avota forma atskaitē ir atrastā forma, nevis ieteiktais labojums. Šķirkļu teksts repozitorijā netiek glabāts.");
  push("");
  push("## Izdalīšanas noteikumi");
  push("");
  body.method.forEach((line) => push(`${line}`));
  push("");
  const base = body.baseline;
  push("```text");
  push(`MASTER VERSION: ${base.masterVersion}`);
  push("AUDIT MODE: LV_DE_PLURAL_SOURCE_CHECK");
  push(`ORIGIN_MAIN_SHA: ${base.originMainSha}`);
  push(`BRANCH: ${base.branch}`);
  push(`DATE: ${base.date}`);
  push(`DATASET_PRODUCTION_SHA/BLOB: ${base.datasetProductionSha}`);
  push("LAST FINAL CLOSURE: NOT_RECORDED_FOR_LV_DE_WORDLIST");
  push("LAST FINAL CLOSURE MAIN SHA:");
  push("LAST FINAL CLOSURE DATASET BLOB:");
  push("UNMERGED CLOSURE/REPAIR FOUND: NOT_CHECKED");
  push(`BASELINE STATUS: ${base.baselineStatus}`);
  push("OWNER HISTORY AVAILABLE: NO");
  push("OWNER HISTORY FILES LOADED: 0");
  push("OWNER APPROVED FIELDS TOTAL/CHECKED/MATCHING/DRIFTED: 0/0/0/0");
  push("OWNER HISTORY GATE: NOT_RUN");
  push("RAW AUDIT HISTORY GATE: NOT_APPLICABLE");
  push("DISCOVERY CHURN RATE: 0");
  push("AUDIT_DISCOVERY_NON_REPRODUCIBILITY: 0");
  push("DE READ-ONLY: YES");
  push("```");
  push("");
  push("## Avoti");
  push("");
  push("| avots | statuss | URL | SHA-256 | lietvārdi |");
  push("|---|---|---|---|---:|");
  body.sources.forEach((source) => {
    push(`| ${source.id} | ${source.status} | ${source.url} | ${source.sha256 || ""} | ${source.nounCount ?? ""} |`);
  });
  push("");
  push("## Kontrolkopa");
  push("");
  push("| lemma | Duden artikuls | Duden daudzskaitlis | Duden verdikts | Goethe artikuls | Goethe daudzskaitlis | Goethe verdikts |");
  push("|---|---|---|---|---|---|---|");
  body.control.forEach((row) => {
    push(`| ${row.lemma} | ${row.dudenArticle} | ${row.dudenPlural} | ${row.dudenStatus} | ${row.goetheArticle} | ${row.goethePlural} | ${row.goetheStatus} |`);
  });
  push("");
  push("## Kopsavilkums");
  push("");
  push(`Rindas: ${body.rows.length}. CHECK_COMPLETENESS: ${body.baseline.verdict}.`);
  push("");
  push("| salīdzinājums | skaits |");
  push("|---|---:|");
  Object.keys(body.summary.comparison).sort().forEach((key) => push(`| ${key} | ${body.summary.comparison[key]} |`));
  push("");
  push("| Duden | skaits |");
  push("|---|---:|");
  Object.keys(body.summary.duden).sort().forEach((key) => push(`| ${key} | ${body.summary.duden[key]} |`));
  push("");
  push("| Goethe | skaits |");
  push("|---|---:|");
  Object.keys(body.summary.goethe).sort().forEach((key) => push(`| ${key} | ${body.summary.goethe[key]} |`));
  push("");
  push(`ARTICLE_MISMATCH rindas: ${body.summary.articleMismatch}.`);
  push("");
  push("## Goethe saraksti");
  push("");
  push("| saraksts | lietvārdi sarakstā | pārbaudītie vārdi, kas atrasti |");
  push("|---|---:|---:|");
  body.goetheCoverage.forEach((row) => push(`| ${row.id} | ${row.nounCount} | ${row.checkedFound} |`));
  push("");
  const missingGroups = ["IDENTICAL_TO_SINGULAR", "TECHNICAL_OR_MASS", "NORMAL"];
  push("## MISSING_PLURAL_IN_DATA");
  push("");
  const missingRows = body.rows.filter((row) => row.comparison === "MISSING_PLURAL_IN_DATA");
  push(`Skaits: ${missingRows.length}.`);
  push("");
  const subtypeSum = missingGroups.reduce((sum, name) => sum + missingRows.filter((row) => row.missingSubtype === name).length, 0);
  if (subtypeSum !== missingRows.length) throw new Error(`missing subtype sum ${subtypeSum} != ${missingRows.length}`);
  missingGroups.forEach((name) => {
    const group = missingRows.filter((row) => row.missingSubtype === name);
    push(`### ${name}`);
    push("");
    push(`Skaits: ${group.length}. Piemēri: ${Math.min(10, group.length)}.`);
    push("");
    if (!group.length) push("Nav.");
    group.slice(0, 10).forEach((row) => push(rowLine(row)));
    push("");
  });
  push("Apakškategoriju summa ir vienāda ar MISSING_PLURAL_IN_DATA. Pilnās rindas ir CSV.");
  push("");
  ["PLURAL_FORM_MISMATCH", "SOURCES_DISAGREE", "REVIEW_RARE_PLURAL", "NEEDS_SOURCE_REVIEW", "NOT_IN_SOURCE", "AMBIGUOUS"].forEach((name) => {
    const group = body.rows.filter((row) => row.comparison === name);
    push(`## ${name}`);
    push("");
    push(`Skaits: ${group.length}.`);
    push("");
    if (!group.length) push("Nav.");
    group.forEach((row) => push(rowLine(row)));
    push("");
  });
  push("## Galotne -n, kas nav lemma+n");
  push("");
  push("Pluralwort forma netiek izdalīta atsevišķi un šajā sarakstā nav. Kolonna 'kā bija' ir nomestā datīva forma, ja tāda bija; citādi tā sakrīt ar nominatīvu.");
  push("");
  push(`Skaits: ${body.nEndingDiff.length}.`);
  push("");
  if (!body.nEndingDiff.length) push("Nav.");
  body.nEndingDiff.forEach((row) => {
    push(`- ${row.level}[${row.index}] de=${csvEscape(row.de)} lemma=${csvEscape(row.lemma)} bija=${csvEscape(row.before)} tagad=${csvEscape(row.after)} duden=${row.dudenStatus}`);
  });
  push("");
  push("## Datīva nomešana");
  push("");
  push(`Skaits: ${body.dativeCorrections.length}.`);
  push("");
  if (!body.dativeCorrections.length) push("Nav.");
  body.dativeCorrections.forEach((row) => {
    push(`- ${row.level}[${row.index}] de=${csvEscape(row.de)} bija=${csvEscape(row.before)} tagad=${csvEscape(row.after)}`);
  });
  push("");
  push("## robots.txt");
  push("");
  push(`Duden User-agent * neaizliedz /rechtschreibung/ un /sitemap-lexeme: ${body.robots.dudenAllowsRechtschreibung ? "jā" : "nē"}. Aizliegts /search/ un /suche/: ${body.robots.dudenDisallowsSearch ? "jā, šie ceļi nav prasīti" : "nē"}.`);
  push(`Goethe User-agent * aizliedz /*.pdf?* : ${body.robots.goetheDisallowsPdfQuery ? "jā; PDF pieprasījumi ir bez vaicājuma" : "nē"}. Aizliegts /suche/: ${body.robots.goetheDisallowsSuche ? "jā, nav prasīts" : "nē"}.`);
  push(`Temps: ${body.robots.rate}. HTTP 403 netiek apieta.`);
  push("");
  push("## Goethe B2");
  push("");
  push(`Statuss: ${body.b2Discovery.status}. PDF URL: ${body.b2Discovery.url || ""}.`);
  push("");
  body.b2Discovery.tried.forEach((item) => push(`- ${item.httpStatus} ${item.url}`));
  push("");
  push("## Salīdzinājums ar iepriekšējo skaitu");
  push("");
  push("Iepriekšējā secība no #860: CONSISTENT / NEEDS_SOURCE_REVIEW / MISSING_PLURAL_IN_DATA / NOT_IN_SOURCE / AMBIGUOUS / SOURCES_DISAGREE / REVIEW_RARE_PLURAL / PLURAL_FORM_MISMATCH = 236 / 109 / 60 / 51 / 19 / 8 / 22 / 1.");
  push("");
  push("| salīdzinājums | iepriekš | tagad | delta |");
  push("|---|---:|---:|---:|");
  Object.keys(body.previousComparison).forEach((key) => {
    const before = body.previousComparison[key];
    const now = body.summary.comparison[key] || 0;
    push(`| ${key} | ${before} | ${now} | ${now - before} |`);
  });
  push("");
  push("Izmaiņu iemesls: Duden piezīme ohne Plural bez Plural: formas tagad ir NO_PLURAL_LISTED, un tukšs de_plural tad ir CONSISTENT. Goethe PLURAL_ONLY vai Duden Pluralwort ar die un tukšu de_plural ir CONSISTENT. SOURCES_DISAGREE paliek tikai tad, ja abi avoti dod divas atšķirīgas formas. Duden formāla vai reta forma pret Goethe NO_PLURAL_LISTED ir DUDEN_FORMAL_ONLY un nav SOURCES_DISAGREE. Citāts ir līdz 15 vārdiem kopā, bez ||. 4491 Duden pieprasījumi nav izdarīti.");
  push("");
  push("## MISSING_PLURAL_IN_DATA ar GOETHE_LISTS_PLURAL");
  push("");
  const goetheLists = body.rows.filter((row) => row.comparisonNote === "GOETHE_LISTS_PLURAL");
  push(`Skaits: ${goetheLists.length}.`);
  push("");
  goetheLists.forEach((row) => push(`- ${row.level}[${row.index}] de=${row.de} forma=${row.goethePlural} lappuse=${row.goetheRef}`));
  push("");
  push("## Vēl nepārbaudītie lietvārdi");
  push("");
  push(`Lietvārdi ar de_article der/die/das: ${body.uncheckedPlan.nouns}. Šajā 506 kopā: ${body.uncheckedPlan.checkedNouns}. Vēl nav pārbaudīti pret Duden/Goethe: ${body.uncheckedPlan.unchecked}.`);
  push("");
  push("| līmenis | nepārbaudīti | atšķirīgas lemmas |");
  push("|---|---:|---:|");
  body.uncheckedPlan.levels.forEach((row) => push(`| ${row.level} | ${row.unchecked} | ${row.lemmas} |`));
  push("");
  push(`Plāns nav izpildīts. Goethe PDF jau ir lokāli. Duden minimums ir viens /rechtschreibung/ pieprasījums katrai vēl nepārbaudītai lemmai: ${body.uncheckedPlan.distinctLemmas}. Pie 1 pieprasījuma/s tas ir ${body.uncheckedPlan.distinctLemmas} sekundes, ja katra lemma atbild ar 200. Homonymu sitemap-lexeme pieprasījumi šajā skaitā nav iekļauti un tiktu veikti tikai pēc 404. Šie pieprasījumi šajā palaišanā nav izdarīti.`);
  push("");
  push("## STAGE RESULT");
  push("");
  push(`CHECK_COMPLETENESS: ${body.baseline.verdict}`);
  push("");
  push(`STAGE RESULT: ${body.baseline.stageResult}`);
  push("");
  return `${lines.join("\n")}\n`;
}

function renderCsv(rows) {
  const header = [
    "id", "level", "index", "de", "de_article", "de_plural", "lv", "category", "lemma",
    "duden_status", "duden_article", "duden_plural", "duden_quote", "duden_url",
    "goethe_status", "goethe_article", "goethe_plural", "goethe_ref",
    "comparison", "comparison_note", "missing_subtype", "article_mismatch"
  ];
  const lines = [header.join(",")];
  rows.forEach((row, index) => {
    lines.push([
      String(index + 1),
      csvEscape(row.level),
      String(row.index),
      csvEscape(row.de),
      csvEscape(row.de_article),
      csvEscape(row.de_plural),
      csvEscape(row.lv),
      csvEscape(row.category),
      csvEscape(row.lemma),
      csvEscape(row.dudenStatus),
      csvEscape(row.dudenArticle),
      csvEscape(row.dudenPlural),
      csvEscape(row.dudenQuote),
      csvEscape(row.dudenUrl),
      csvEscape(row.goetheStatus),
      csvEscape(row.goetheArticle),
      csvEscape(row.goethePlural),
      csvEscape(row.goetheRef),
      csvEscape(row.comparison),
      csvEscape(row.comparisonNote),
      csvEscape(row.missingSubtype),
      csvEscape(row.articleMismatch.map((item) => `${item.source}:${item.article}`).join(" "))
    ].join(","));
  });
  return `${lines.join("\n")}\n`;
}

function datasetSha() {
  const files = ["a1", "a2", "b1", "b2", "c1", "c2"].map((level) => sha256File(path.join(ROOT, "data", `${level}.js`)));
  return sha256Text(files.join("\n"));
}

function masterVersion() {
  const text = fs.readFileSync(path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md"), "utf8");
  const match = text.match(/\*\*Versija:\*\*\s*([0-9.]+)/);
  return match ? match[1] : "";
}

function selfTestParsers() {
  const cases = [
    ["die Adresse, -n Können Sie", "die", "Adresse", "PLURAL_FOUND", "Adressen"],
    ["das Alter (Sg.) Alter:", "das", "Alter", "NO_PLURAL_LISTED", ""],
    ["der Anfang, ¨-e Sie", "der", "Anfang", "PLURAL_FOUND", "Anfänge"],
    ["der Apfel, ¨- Ein", "der", "Apfel", "PLURAL_FOUND", "Äpfel"],
    ["das Fenster, - Kannst", "das", "Fenster", "PLURAL_FOUND", "Fenster"],
    ["Eltern (Pl.)", "die", "Eltern", "PLURAL_ONLY", "Eltern"],
    ["r Ausflug, ü, -e Wir", "der", "Ausflug", "PLURAL_FOUND", "Ausflüge"],
    ["s Bad, ä, -er Wo", "das", "Bad", "PLURAL_FOUND", "Bäder"],
    ["e Bibliothek, -en In", "die", "Bibliothek", "PLURAL_FOUND", "Bibliotheken"],
    ["das Brötchen, – Möchtest", "das", "Brötchen", "NO_PLURAL_LISTED", ""],
    ["der Bruder, -ü Sein", "der", "Bruder", "PLURAL_FOUND", "Brüder"],
    ["das Buch, -ü, er Gute", "das", "Buch", "PLURAL_FOUND", "Bücher"],
    ["die Anmeldung,-en Wo", "die", "Anmeldung", "PLURAL_FOUND", "Anmeldungen"]
  ];
  cases.forEach(([text, article, lemma, status, form]) => {
    const parsed = parseNounChunk(text);
    if (!parsed) throw new Error(`no parse ${text}`);
    const applied = applyEnding(parsed.lemma, parsed.ending);
    if (parsed.article !== article || parsed.lemma !== lemma || applied.status !== status || (applied.forms[0] || "") !== form) {
      throw new Error(`parse mismatch ${text} => ${JSON.stringify({ parsed, applied })}`);
    }
  });
  const dudenPage = (h1, wortart, grammar, notes) => `<title>${h1}</title><h1>${h1}</h1><dt>Wortart:</dt><dd class="tuple__val">${wortart}</dd><div class="division " id="grammatik"><p>${grammar}</p></div>${(notes || []).map((note) => `<dt class="tuple__key">Grammatik</dt><dd class="tuple__val">${note}</dd>`).join("")}`;
  const dudenCases = [
    ["Blut , das", "Substantiv, Neutrum", "das Blut; Genitiv: des Blut[e]s, (Fachsprache) Blute", [], "NEEDS_SOURCE_REVIEW", []],
    ["Bargeld , das", "Substantiv, Neutrum", "das Bargeld; Genitiv: des Bargeldes, Bargelds", [], "NO_PLURAL_LISTED", []],
    ["Gepäck , das", "Substantiv, Neutrum", "das Gepäck; Genitiv: des Gepäck[e]s", [], "NO_PLURAL_LISTED", []],
    ["Pfahlbau , der", "Substantiv, maskulin", "der ⟨Plural: Pfahlbauten⟩", [], "PLURAL_FOUND", ["Pfahlbauten"]],
    ["Beton , der", "Substantiv, maskulin", "der Beton; Genitiv: des Betons, Plural: (Arten:) die Betons, besonders süddeutsch, österreichisch Betone [beˈtoːnə]", [], "PLURAL_FOUND", ["Betons", "Betone"]],
    ["Aerobic , das oder die", "Substantiv, Neutrum, oder Substantiv, feminin", "das Aerobic; Genitiv: des Aerobics, auch: die Aerobic; Genitiv: der Aerobic ⟨meist ohne Artikel⟩", [], "NO_PLURAL_LISTED", []],
    ["Erlaubnis , die", "Substantiv, feminin", "die Erlaubnis; Genitiv: der Erlaubnis, Plural: die Erlaubnisse (Plural selten)", [], "PLURAL_RARE", ["Erlaubnisse"]],
    ["Schaden , der", "Substantiv, maskulin", "der Schaden; Genitiv: des Schadens, Plural: die Schäden", ["ohne Plural"], "NEEDS_SOURCE_REVIEW", ["Schäden"]],
    ["Band , das", "Substantiv, Neutrum", "das Band; Genitiv: des Band[e]s, Bänder und Bande", ["Plural: Bänder", "Plural: Bande; Singular selten"], "PLURAL_FOUND", ["Bänder", "Bande"]],
    ["Eltern , die", "Pluralwort", "nur im Plural", [], "PLURAL_ONLY", ["Eltern"]],
    ["Cello , das", "Substantiv, Neutrum", "das Cello; Genitiv: des Cellos, Plural: die Cellos, auch Celli", [], "PLURAL_FOUND", ["Cellos", "Celli"]],
    ["Joghurt , der", "Substantiv, maskulin, oder Substantiv, feminin, oder Substantiv, Neutrum", "der Joghurt; Genitiv: des Joghurt[s], Plural: die Joghurt[s]", [], "PLURAL_FOUND", ["Joghurt", "Joghurts"]],
    ["Milch , die", "Substantiv, feminin", "die Milch; Genitiv: der Milch, Plural: (Fachsprache:) die Milche[n]", [], "PLURAL_FOUND", ["Milche", "Milchen"]],
    ["Geschäftsmann , der", "Substantiv, maskulin", "der ⟨Plural: Geschäftsleute, selten: Geschäftsmänner⟩", [], "PLURAL_FOUND", ["Geschäftsleute", "Geschäftsmänner"]],
    ["Wetter-App , die", "Substantiv, feminin, oder Substantiv, Neutrum", "die Wetter-App; Genitiv: der Wetter-App, Plural: die Wetter-Apps, selten: das Wetter-App; Genitiv: des Wetter-Apps, Plural: die Wetter-Apps", [], "PLURAL_FOUND", ["Wetter-Apps"]],
    ["Pater , der", "Substantiv, maskulin", "der Pater; Genitiv: des Paters, Plural: die Pater und Patres […reːs]", [], "PLURAL_FOUND", ["Pater", "Patres"]],
    ["Alter Ego , das", "Substantiv, Neutrum", "das Alter Ego; Genitiv: des Alter Ego[s], Plural: die Alter Egos", [], "PLURAL_FOUND", ["Alter Egos"]],
    ["Sand , der", "Substantiv, maskulin", "der Sand; Genitiv: des Sand[e]s", ["(ohne Plural)"], "NO_PLURAL_LISTED", []]
  ];
  dudenCases.forEach(([h1, wortart, grammar, notes, status, forms]) => {
    const parsed = parseDudenHtml(dudenPage(h1, wortart, grammar, notes));
    const got = (parsed.forms || []).join("|");
    const want = forms.join("|");
    if (!parsed || parsed.status !== status || got !== want) {
      throw new Error(`duden mismatch ${h1} => ${JSON.stringify({ status: parsed && parsed.status, forms: parsed && parsed.forms, article: parsed && parsed.article })}`);
    }
  });
  const aerobic = parseDudenHtml(dudenPage("Aerobic , das oder die", "Substantiv, Neutrum, oder Substantiv, feminin", "das Aerobic; Genitiv: des Aerobics", []));
  if (!aerobic.articles.includes("das") || !aerobic.articles.includes("die")) throw new Error("Aerobic articles");
  const eltern = parseDudenHtml(dudenPage("Eltern , die", "Pluralwort", "nur im Plural", []));
  if (!eltern.articles.includes("die") || eltern.forms[0] !== "Eltern") throw new Error("Eltern nominative");
  const trummer = chooseDudenEntries([
    { url: "https://www.duden.de/rechtschreibung/Truemmer_Bruchstueck_frueher", headword: "Trümmer", articles: ["die"], forms: ["Trümmern"], status: "PLURAL_FOUND", pluralwort: false },
    { url: "https://www.duden.de/rechtschreibung/Truemmer_Bruchstueck_Ueberrest_Plural", headword: "Trümmer", articles: ["die"], forms: ["Trümmer"], status: "PLURAL_ONLY", pluralwort: true }
  ], "die");
  if (trummer.length !== 1 || trummer[0].forms[0] !== "Trümmer") throw new Error(`Trümmer dative leak ${JSON.stringify(trummer)}`);
}

function publicSource(source) {
  if (!source) return { status: "NOT_CHECKED", forms: [], article: "", hits: [], entry: null, entries: [] };
  return source;
}

function evaluateLemma(lemma, article, goetheIndex) {
  const lookup = lookupDuden(lemma);
  const duden = lookup.status === "FOUND" || lookup.status === "NOT_IN_SOURCE" || lookup.status === "NOT_CHECKED"
    ? selectDuden(lookup, article)
    : lookup;
  const goethe = goetheFor(goetheIndex, lemma, article);
  return { lemma, duden, goethe };
}

function main() {
  selfTestParsers();
  const robots = fetchUrl("https://www.duden.de/robots.txt");
  if (robots.status !== 200) throw new Error("Duden robots.txt unavailable");
  const goetheRobots = fetchUrl("https://www.goethe.de/robots.txt");
  if (goetheRobots.status !== 200) throw new Error("Goethe robots.txt unavailable");
  const dudenRobotsText = robots.body.toString("utf8");
  const goetheRobotsText = goetheRobots.body.toString("utf8");
  const robotsReport = {
    dudenAllowsRechtschreibung: !/Disallow:\s*\/rechtschreibung/i.test(dudenRobotsText),
    dudenDisallowsSearch: dudenRobotsText.includes("Disallow: /search/") && dudenRobotsText.includes("Disallow: /suche/"),
    goetheDisallowsPdfQuery: goetheRobotsText.includes("Disallow: /*.pdf?*"),
    goetheDisallowsSuche: goetheRobotsText.includes("Disallow: /suche/"),
    rate: "viens pieprasījums vienlaikus, vismaz 1100 ms starp pieprasījumu sākumiem"
  };
  const goetheIndex = loadGoethe();
  const input = loadInput();
  const cache = new Map();
  const remember = (lemma, article) => {
    const key = `${lemma}\u0000${article || ""}`;
    if (!cache.has(key)) cache.set(key, evaluateLemma(lemma, article, goetheIndex));
    return cache.get(key);
  };
  const control = CONTROL.map((lemma) => {
    const result = remember(lemma, "");
    const dudenEntry = result.duden.entry;
    return {
      lemma,
      dudenArticle: dudenEntry ? dudenEntry.article : (result.duden.entries || []).map((entry) => `${entry.article || "∅"}:${entry.url.split("/").pop()}`).join("; "),
      dudenPlural: dudenEntry ? (dudenEntry.forms || []).join("; ") : (result.duden.entries || []).map((entry) => `${entry.article}:${(entry.forms || []).join("/")}:${entry.status}`).join("; "),
      dudenStatus: result.duden.status,
      goetheArticle: result.goethe.article || "",
      goethePlural: (result.goethe.forms || []).join(" | "),
      goetheStatus: result.goethe.status
    };
  });
  const rows = [];
  input.forEach((row, index) => {
    const lemmas = lemmasOf(row.de);
    const parts = lemmas.map((lemma) => remember(lemma, row.de_article));
    if ((index + 1) % 25 === 0) process.stderr.write(`checked ${index + 1}/${input.length}\n`);
    const dudenStatuses = parts.map((part) => part.duden.status);
    const goetheStatuses = parts.map((part) => part.goethe.status);
    const dudenStatus = dudenStatuses.includes("NOT_CHECKED") ? "NOT_CHECKED"
      : dudenStatuses.includes("AMBIGUOUS") ? "AMBIGUOUS"
        : dudenStatuses.includes("NEEDS_SOURCE_REVIEW") ? "NEEDS_SOURCE_REVIEW"
          : dudenStatuses.length === 1 ? dudenStatuses[0]
            : dudenStatuses.every((status) => status === dudenStatuses[0]) ? dudenStatuses[0] : "NEEDS_SOURCE_REVIEW";
    const goetheStatus = goetheStatuses.includes("NOT_CHECKED") ? "NOT_CHECKED"
      : goetheStatuses.includes("AMBIGUOUS") ? "AMBIGUOUS"
        : goetheStatuses.every((status) => status === "NOT_IN_SOURCE") ? "NOT_IN_SOURCE"
          : goetheStatuses.filter((status) => status !== "NOT_IN_SOURCE").length === 1
            ? goetheStatuses.find((status) => status !== "NOT_IN_SOURCE")
            : "NEEDS_SOURCE_REVIEW";
    const duden = parts.length === 1 ? parts[0].duden : {
      status: dudenStatus,
      entry: parts.length === 1 ? parts[0].duden.entry : null,
      entries: parts.flatMap((part) => part.duden.entries || (part.duden.entry ? [part.duden.entry] : [])),
      forms: parts.flatMap((part) => sourceForms(part.duden))
    };
    const goethe = parts.length === 1 ? parts[0].goethe : {
      status: goetheStatus,
      forms: parts.flatMap((part) => part.goethe.forms || []),
      hits: parts.flatMap((part) => part.goethe.hits || []),
      article: parts.map((part) => part.goethe.article).filter(Boolean)[0] || ""
    };
    if (parts.length > 1) {
      duden.forms = parts.flatMap((part) => sourceForms(part.duden));
      goethe.forms = parts.flatMap((part) => part.goethe.forms || []);
    }
    const droppedDative = parts.flatMap((part) => part.duden.droppedDative || []);
    const pluralwort = parts.some((part) => part.duden.pluralwort || (part.duden.entry && (part.duden.entry.pluralwort || part.duden.entry.status === "PLURAL_ONLY")));
    const compared = combineComparison(row.de_plural, duden, goethe);
    const mismatch = parts.flatMap((part) => articleMismatch(row.de_article, part.duden, part.goethe));
    const quoteEntries = parts.flatMap((part) => (part.duden.entry ? [part.duden.entry] : (part.duden.entries || [])));
    const usedForms = compared.note === "GOETHE_LISTS_PLURAL"
      ? parts.flatMap((part) => part.goethe.forms || [])
      : parts.flatMap((part) => sourceForms(part.duden));
    const identical = usedForms.length > 0 && usedForms.every((form) => lemmas.some((lemma) => normForm(form) === normForm(lemma)));
    const technical = quoteEntries.some((entry) => entry.technicalMass);
    let missingSubtype = "";
    if (compared.comparison === "MISSING_PLURAL_IN_DATA") {
      if (identical) missingSubtype = "IDENTICAL_TO_SINGULAR";
      else if (technical) missingSubtype = "TECHNICAL_OR_MASS";
      else missingSubtype = "NORMAL";
    }
    rows.push({
      ...row,
      lemma: lemmas.join(" | "),
      dudenStatus,
      dudenArticle: parts.map((part) => (part.duden.entry ? part.duden.entry.article : "")).filter(Boolean).join(" | "),
      dudenPlural: parts.flatMap((part) => sourceForms(part.duden)).join(" | "),
      dudenPluralBefore: droppedDative.join(" | "),
      pluralwort,
      dudenQuote: joinedQuote(quoteEntries),
      dudenUrl: parts.flatMap((part) => (part.duden.entry ? [part.duden.entry.url] : (part.duden.entries || []).map((entry) => entry.url))).join(" "),
      goetheStatus,
      goetheArticle: parts.map((part) => part.goethe.article || "").filter(Boolean).join(" | "),
      goethePlural: parts.flatMap((part) => part.goethe.forms || []).join(" | "),
      goetheRef: parts.flatMap((part) => (part.goethe.hits || []).map((hit) => `${hit.sourceId} p.${hit.page} ${hit.ending}`)).join(" "),
      comparison: compared.comparison,
      comparisonNote: compared.note,
      missingSubtype,
      dudenComparison: compared.dudenComparison,
      goetheComparison: compared.goetheComparison,
      articleMismatch: mismatch,
      ref: parts.map((part) => refOf(part.duden, part.goethe)).join(" ")
    });
  });
  rows.sort((a, b) => a.category.localeCompare(b.category)
    || (LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level])
    || (a.index - b.index)
    || a.de.localeCompare(b.de));
  const unchecked = rows.filter((row) => row.comparison === "NOT_CHECKED" || row.dudenStatus === "NOT_CHECKED" || row.goetheStatus === "NOT_CHECKED");
  const completeness = unchecked.length ? "PARTIAL" : "PASS";
  const unresolved = rows.filter((row) => row.comparison !== "CONSISTENT" || row.articleMismatch.length);
  let stageResult = "PASS";
  if (completeness === "PARTIAL") stageResult = "PARTIAL";
  else if (unresolved.length) stageResult = "NEEDS OWNER REVIEW";
  const summary = summarize(rows);
  const goetheCoverage = goetheIndex.lists.map((list) => {
    const found = new Set();
    rows.forEach((row) => {
      lemmasOf(row.de).forEach((lemma) => {
        if ((list.nouns || []).some((noun) => noun.lemma.toLowerCase() === lemma.toLowerCase())) found.add(`${row.level}|${row.index}|${lemma}`);
      });
    });
    return { id: list.id, nounCount: list.nounCount || 0, checkedFound: found.size };
  });
  const dates = [];
  if (fs.existsSync(HTTP_CACHE)) {
    fs.readdirSync(HTTP_CACHE).filter((name) => name.endsWith(".json")).forEach((name) => {
      const meta = JSON.parse(fs.readFileSync(path.join(HTTP_CACHE, name), "utf8"));
      if (meta.date) dates.push(meta.date);
    });
  }
  const body = {
    statement: "Šis audits pārbauda daudzskaitli pret Duden un Goethe-Institut. Verdikts NOT_CHECKED vai NOT_IN_SOURCE nenozīmē, ka forma ir pareiza.",
    method: [
      "1. Duden URL ir /rechtschreibung/<slug> (atstarpe → _, äöüß → ae/oe/ue/ss). HTTP 200 un h1 = lemma ir šķirklis. HTTP 404 nav šķirklis; citus šķirkļus dod sitemap-lexeme saites <slug> un <slug>_.",
      "2. Genus nāk no Wortart: maskulin→der, feminin→die, Neutrum→das. Vairāki dzimumi paliek kopa; de_article atbilst vienam no tiem. Pluralwort → PLURAL_ONLY.",
      "3. Daudzskaitļa forma nāk tikai no 'Plural:' vai 'Plural (…):' pirmā gramatikas <p> un Bedeutung Grammatik rindās. Leņķiekavas, IPA un iekavas noņem. [s]/[n] dod abus rakstījumus. '(Plural selten)' → PLURAL_RARE. Piemēri: Erlaubnis → Erlaubnisse; Pfahlbau → Pfahlbauten; Beton → Betons, Betone.",
      "4. 'nur im Plural' vai Pluralwort ir nominatīva daudzskaitlis = lemma, artikuls die. Piemērs: Eltern, Trümmer. Šķirklis ar slug frueher un formu lemma+n ir datīvs (Trümmern) un netiek ņemts, ja ir aktuālais šķirklis.",
      "5. 'Plural:' forma bez 'ohne Plural' ir PLURAL_FOUND. Piemērs: der Band → Bände. das Band piezīmes 'Plural: Bänder' un 'Plural: Bande' paliek kopa. Ģenitīva aste (Blute, Bargelds) nav daudzskaitlis.",
      "6. Nav 'Plural:' formas un rinda ir tikai dzimte un ģenitīvs (Bargeld, Gepäck, Kosmetik) → NO_PLURAL_LISTED.",
      "7. Forma un 'ohne Plural' kopā ir NEEDS_SOURCE_REVIEW. Piemēri: Schaden, Geld, Anbau. Bez 'Plural:' etiķetes, bet ar (Sorten:), (Arten:), (Fachsprache) vai vārdu Plural (Blut; Sport) → NEEDS_SOURCE_REVIEW. Aste netiek glabāta kā forma.",
      "8. Vairāki šķirkļi (Band der/das/die): patur Genus = de_article. Nulle vai vairāk nekā viens → AMBIGUOUS, visi uzskaitīti.",
      "9. Goethe: A2/B1 'der Anfang, ¨-e'; 'das Fenster, -' = daudzskaitlis vienāds ar vienskaitli; '(Sg.)' = nav daudzskaitļa; '(Pl.)' = tikai daudzskaitlis. SD1 'der Bruder, -ü', 'das Buch, -ü, er'; '–' (das Brötchen, –) = nav daudzskaitļa. Fit1 'r/e/s' = der/die/das un 'ü/-e'. Nav sarakstā → NOT_IN_SOURCE.",
      "10. Salīdzinājums ar de_plural ir determinēts. Kešs ir /tmp/plural-cache. Repozitorijā paliek lemma, artikuls, forma, verdikts, avota ID, URL vai PDF lappuse un datums."
    ],
    baseline: {
      masterVersion: masterVersion(),
      originMainSha: execFileSync("git", ["rev-parse", "origin/main"], { cwd: ROOT, encoding: "utf8" }).trim(),
      branch: execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], { cwd: ROOT, encoding: "utf8" }).trim(),
      date: dates.sort()[0] || new Date().toISOString().slice(0, 10),
      datasetProductionSha: datasetSha(),
      baselineStatus: completeness,
      verdict: completeness,
      stageResult
    },
    sources: [
      { id: "Duden", status: "LOOKUP", url: "https://www.duden.de/rechtschreibung/<slug>", sha256: "", nounCount: "" },
      ...goetheIndex.lists.map((list) => ({
        id: list.id,
        status: list.status,
        url: list.url,
        sha256: list.sha256 || "",
        nounCount: list.nounCount || 0
      }))
    ],
    control,
    summary,
    goetheCoverage,
    nEndingDiff: nEndingDiff(rows),
    dativeCorrections: rows.filter((row) => row.dudenPluralBefore).map((row) => ({
      level: row.level,
      index: row.index,
      de: row.de,
      before: row.dudenPluralBefore,
      after: row.dudenPlural
    })),
    previousComparison: {
      CONSISTENT: 236,
      NEEDS_SOURCE_REVIEW: 109,
      MISSING_PLURAL_IN_DATA: 60,
      NOT_IN_SOURCE: 51,
      AMBIGUOUS: 19,
      SOURCES_DISAGREE: 8,
      REVIEW_RARE_PLURAL: 22,
      PLURAL_FORM_MISMATCH: 1,
      DUDEN_FORMAL_ONLY: 0
    },
    uncheckedPlan: uncheckedNounPlan(rows),
    robots: robotsReport,
    b2Discovery: goetheIndex.b2Discovery,
    rows
  };
  fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
  fs.writeFileSync(OUT_JSON, `${JSON.stringify(body, null, 2)}\n`);
  fs.writeFileSync(OUT_MD, renderMarkdown(body));
  fs.writeFileSync(OUT_CSV, renderCsv(rows));
  process.stdout.write(`${JSON.stringify({
    rows: rows.length,
    completeness,
    stageResult,
    unchecked: unchecked.length,
    comparison: summary.comparison,
    control: control.map((row) => ({ lemma: row.lemma, duden: row.dudenStatus, goethe: row.goetheStatus }))
  })}\n`);
}

if (require.main === module) main();

module.exports = {
  parseNounChunk,
  applyEnding,
  parseDudenHtml,
  selfTestParsers
};
