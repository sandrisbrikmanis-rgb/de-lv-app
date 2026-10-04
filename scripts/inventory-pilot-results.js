#!/usr/bin/env node
/**
 * READ-ONLY. Sešu pilota vārdu rezultāti no attāliem zariem.
 * Neaiztiek data/, www/data/, languages/, ui.js un esošos skriptus.
 * Vārdnīcu šķirkļu tekstu neraksta — tikai id, URL, lappuse, statuss, SHA-256.
 */
const { execFileSync } = require("child_process");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "reports", "pilot-results");
const DATE = "2026-10-04";
const INVENTORY_COMMIT = "f4388492d173768652582cfa4aa1b0e15c2040b8";
const SIX = ["Haus", "arbeiten", "Kleingeld", "bewirten", "Grenzkonflikt", "Machtgier"];
const LANGS = [
  "bg", "bs", "cs", "da", "en", "es", "et", "fi", "fr", "gr", "hr", "hu", "is", "it", "lb",
  "lt", "mk", "nb", "nl", "nn", "pl", "pt", "ro", "ru", "sk", "sl", "sq", "sr", "sv", "tr", "uk",
];
const PATH_RE = /pilot|bilingual-audit|bilingual-dictionary|translation-audit|a1-card|terminology|murko|ekalba|used-sources|rescan-problematic|modern-sources/i;
const SKIP_RE = /^public\/audio\//;

function git(args, opts = {}) {
  return execFileSync("git", args, {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
    ...opts,
  });
}

function catBlob(blob) {
  return execFileSync("git", ["cat-file", "-p", blob], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
}

function blobAt(commit, filePath) {
  try {
    return git(["rev-parse", `${commit}:${filePath}`]).trim();
  } catch {
    return "";
  }
}

function loadJsonBlob(blob) {
  return JSON.parse(catBlob(blob));
}

function sha256Text(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function csvCell(value) {
  const s = value == null ? "" : String(value);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function csv(rows, headers) {
  const lines = [headers.join(",")];
  for (const row of rows) lines.push(headers.map((h) => csvCell(row[h])).join(","));
  return lines.join("\n") + "\n";
}

function mapStatus(value) {
  if (value === true || value === "FOUND" || value === "TRANSLATION_PAIR_FOUND" || value === "BILINGUAL_ENTRY_FOUND") {
    return "FOUND";
  }
  if (value === false || value === "NOT_FOUND" || value === "NOT_FOUND_DIGITIZED" || value === "NOT_FOUND_IN_DICTIONARY") {
    return "NOT_FOUND";
  }
  if (value === "PARTIAL" || value === "PARTIAL_OCR") return "AMBIGUOUS";
  return "";
}

function kindOf(id, url) {
  const s = `${id || ""} ${url || ""}`.toLowerCase();
  if (s.includes("archive.org") || /(^|\s)ia-/.test(s) || s.includes("bub_gb") || s.includes("ia _djvu") || s.includes("ia_djvu")) {
    return "archive.org";
  }
  if (s.includes("digitale-sammlungen") || s.includes("mdz-") || s.includes("mdz ") || s.startsWith("mdz")) return "PDF";
  if (s.includes(".pdf") || s.includes("pdftotext") || s.includes("mek-pdf") || s.includes("mekpdf")) return "PDF";
  return "web";
}

function aggregateOf(text) {
  const m = String(text == null ? "" : text).match(/(\d+)\s*\/\s*6/);
  return m ? `${m[1]}/6` : "";
}

function refOf(item) {
  if (!item || typeof item !== "object") return "";
  if (typeof item.entryUrl === "string" && item.entryUrl) return item.entryUrl;
  if (typeof item.viewerUrl === "string" && item.viewerUrl) return item.viewerUrl;
  if (typeof item.verifiedPageUrl === "string" && item.verifiedPageUrl) return item.verifiedPageUrl;
  if (typeof item.searchUrl === "string" && item.searchUrl) return item.searchUrl;
  if (item.txtLocation && item.txtLocation.file && item.txtLocation.line != null) {
    return `${item.txtLocation.file} line ${item.txtLocation.line}`;
  }
  if (item.page != null && item.page !== "") return `p.${item.page}`;
  if (item.pageIndex != null) return `pageIndex ${item.pageIndex}`;
  if (typeof item.dlibSourceUrl === "string" && item.dlibSourceUrl && !item.dlibSourceUrl.includes("/TEXT")) {
    return item.dlibSourceUrl;
  }
  return "";
}

function takeRows(rows) {
  const lemmas = {};
  if (!Array.isArray(rows)) return lemmas;
  for (const item of rows) {
    if (!item || typeof item !== "object") continue;
    const lemma = item.lemma || item.deLemma || item.pilotDe || item.queryLemma;
    if (!SIX.includes(lemma)) continue;
    const status = mapStatus(item.found != null ? item.found : item.status != null ? item.status : item.lookupStatus);
    if (!status) continue;
    lemmas[lemma] = { status, ref: refOf(item) };
  }
  return lemmas;
}

function source(partial) {
  return {
    lang: partial.lang,
    sourceId: partial.sourceId || "",
    kind: partial.kind || kindOf(partial.sourceId, partial.url),
    url: partial.url || "",
    direction: partial.direction || "de→x",
    lemmas: partial.lemmas || {},
    aggregate: partial.aggregate || "",
    aggregateOnly: Boolean(partial.aggregateOnly),
    automationBlocked: Boolean(partial.automationBlocked),
    filePath: partial.filePath || "",
    note: partial.note || "",
  };
}

function addAggregateMap(list, lang, filePath, map) {
  if (!map || typeof map !== "object") return;
  for (const [id, text] of Object.entries(map)) {
    list.push(source({
      lang,
      sourceId: id,
      kind: kindOf(id, ""),
      lemmas: {},
      aggregate: aggregateOf(text),
      aggregateOnly: true,
      filePath,
    }));
  }
}

function parseStandard(doc, filePath) {
  const out = [];
  const pv = doc.pilotVerification || {};
  for (const lang of Object.keys(pv).sort()) {
    const block = pv[lang];
    if (!block || typeof block !== "object") continue;
    const url = block.ocrUrl || block.viewerUrl || "";
    if (Array.isArray(block.deToTarget)) {
      out.push(source({
        lang,
        sourceId: block.primarySourceId || "primary",
        url,
        lemmas: takeRows(block.deToTarget),
        filePath,
      }));
    }
    if (block.snorre && Array.isArray(block.snorre.deToTarget)) {
      out.push(source({
        lang,
        sourceId: block.snorre.sourceId || "snorre",
        url: block.snorre.catalogUrl || block.snorre.downloadUrl || "",
        lemmas: takeRows(block.snorre.deToTarget),
        filePath,
      }));
    }
    if (block.tdrg3 && Array.isArray(block.tdrg3.deToTargetViaRoHeadword)) {
      out.push(source({
        lang,
        sourceId: "tdrg3-solirom",
        kind: "web",
        url: block.tdrg3.portalUrl || "",
        lemmas: takeRows(block.tdrg3.deToTargetViaRoHeadword),
        filePath,
      }));
    }
    addAggregateMap(out, lang, filePath, block.supplementHits);
  }
  return out;
}

function parseBg(doc, filePath) {
  const out = [];
  const pv = doc.pilotVerification || {};
  const summary = doc.summary || {};
  const fr = pv.fr || {};
  for (const key of Object.keys(fr).sort()) {
    const block = fr[key];
    const label = key === "sachsVillatte1906" ? "sachs-villatte-1906" : key === "mozin1823Baseline" ? "mozin-1823-de-ak" : key;
    out.push(source({
      lang: "fr",
      sourceId: label,
      kind: "archive.org",
      url: "",
      lemmas: takeRows(block && block.deToTarget),
      filePath,
    }));
  }
  const bg = pv.bg && pv.bg.mdzMiladinovVol1;
  out.push(source({
    lang: "bg",
    sourceId: (summary.bg && summary.bg.sourcePrimary) || "mdz-miladinov-vol1",
    kind: "PDF",
    lemmas: takeRows(bg && bg.deToTarget),
    filePath,
    note: "faila piezīme: arbeiten possible substring match",
  }));
  out.push(source({
    lang: "bs",
    sourceId: "",
    kind: "",
    lemmas: takeRows(pv.bs && pv.bs.deToTarget),
    filePath,
    note: (summary.bs && summary.bs.note) || "",
  }));
  return out;
}

function parseHr(doc, filePath) {
  const out = [];
  const pv = doc.pilotVerification || {};
  const summary = doc.summary || {};
  out.push(source({
    lang: "hr",
    sourceId: (summary.hr && summary.hr.sourceDeToTarget) || "hr-de-to-target",
    kind: kindOf(summary.hr && summary.hr.sourceDeToTarget, ""),
    lemmas: takeRows(pv.hr && pv.hr.deToTarget),
    filePath,
  }));
  if (summary.hr && summary.hr.sourceTargetToDe) {
    out.push(source({
      lang: "hr",
      sourceId: summary.hr.sourceTargetToDe,
      kind: kindOf(summary.hr.sourceTargetToDe, ""),
      lemmas: {},
      aggregateOnly: true,
      aggregate: "",
      filePath,
      note: "reverse avota id; sešu de rindu šajā blokā nav",
    }));
  }
  out.push(source({
    lang: "hu",
    sourceId: "mek-html",
    kind: "web",
    lemmas: takeRows(pv.huHtml && pv.huHtml.deToTarget),
    filePath,
  }));
  out.push(source({
    lang: "hu",
    sourceId: "mek-pdf",
    kind: "PDF",
    lemmas: takeRows(pv.huPdf && pv.huPdf.deToTarget),
    filePath,
  }));
  out.push(source({
    lang: "is",
    sourceId: "lexia",
    kind: "web",
    url: (pv.is && pv.is.lexiaUrl) || "",
    lemmas: {},
    automationBlocked: true,
    filePath,
    note: (pv.is && pv.is.reason) || "",
  }));
  for (const row of summary.round2Hr || []) {
    out.push(source({
      lang: "hr",
      sourceId: row.id || "",
      kind: kindOf(row.id, ""),
      lemmas: {},
      aggregate: aggregateOf(row.hits),
      aggregateOnly: true,
      filePath,
    }));
  }
  for (const row of summary.round2Hu || []) {
    out.push(source({
      lang: "hu",
      sourceId: row.id || "",
      kind: kindOf(row.id, ""),
      lemmas: {},
      aggregate: aggregateOf(row.hits),
      aggregateOnly: true,
      filePath,
    }));
  }
  return out;
}

function parseIt(doc, filePath) {
  const out = [];
  const pv = doc.pilotVerification || {};
  const summary = doc.summary || {};
  const it = pv.it || {};
  out.push(source({
    lang: "it",
    sourceId: (summary.it && summary.it.sourceId) || "it-primary",
    url: "",
    lemmas: takeRows(it.deToTarget),
    filePath,
    note: summary.it && summary.it.status === "READY" ? "faila statuss READY; sešu skaits no found karogiem" : "",
  }));
  for (const key of ["altSource11645915", "altSourceBull00"]) {
    const alt = it[key];
    if (!alt) continue;
    out.push(source({
      lang: "it",
      sourceId: alt.id || key,
      lemmas: takeRows(alt.deToTarget),
      filePath,
    }));
  }
  out.push(source({
    lang: "nl",
    sourceId: (summary.nl && summary.nl.sourceId) || "nl-primary",
    lemmas: takeRows(pv.nl && pv.nl.deToTarget),
    filePath,
    note: summary.nl && summary.nl.kleinGeldVariant ? "faila piezīme kleinGeldVariant; Kleingeld found karogs netiek mainīts" : "",
  }));
  const mkSummary = summary.mk || {};
  out.push(source({
    lang: "mk",
    sourceId: mkSummary.sourceId || "mk-web",
    kind: "web",
    lemmas: takeRows(pv.mk && pv.mk.deToTarget),
    automationBlocked: mkSummary.status === "NOT_VERIFIED_AUTOMATION",
    filePath,
    note: mkSummary.reason || "",
  }));
  return out;
}

function parseDirections(doc, filePath) {
  const out = [];
  for (const block of doc.directions || []) {
    const lang = block.appCode;
    if (!lang) continue;
    const access = block.accessPrimary || {};
    const url = typeof access === "object" && access ? access.url || "" : "";
    const id = block.title ? "" : "";
    const viewer = Array.isArray(block.pilotLemmas)
      ? (block.pilotLemmas.find((row) => row && row.viewerUrl) || {}).viewerUrl || ""
      : "";
    const sourceId = viewer.includes("NDIGDRUK014604")
      ? "jbc.bj.uj.edu.pl.NDIGDRUK014604"
      : viewer.includes("NDIGDRUK014605")
        ? "jbc.bj.uj.edu.pl.NDIGDRUK014605"
        : viewer.includes("bub_gb_vFhKAAAAcAAJ")
          ? "bub_gb_vFhKAAAAcAAJ"
          : block.galaStatus === "VERIFIED_PARTIAL_VOLUME"
            ? "zodynas-t.-3-1957"
            : block.galaStatus || "direction";
    out.push(source({
      lang,
      sourceId,
      url: url || viewer,
      direction: block.direction || "",
      lemmas: takeRows(block.pilotLemmas),
      filePath,
      note: block.galaStatus || "",
    }));
  }
  return out;
}

function parseEkalba(doc, filePath) {
  const buckets = new Map();
  const slots = [
    ["ekalbaDeLt", "ekalba-de-lt", "https://ekalba.lt/vokieciu-lietuviu-kalbu-zodynas/"],
    ["ekalbaLtDe", "ekalba-lt-de", "https://ekalba.lt/lietuviu-vokieciu-kalbu-zodynas/"],
    ["lkiIaLtDe", "lki-zodynas-ia", ""],
  ];
  for (const [slot, id, fallbackUrl] of slots) {
    buckets.set(id, source({ lang: "lt", sourceId: id, url: fallbackUrl, lemmas: {}, filePath, direction: slot === "ekalbaLtDe" ? "lt→de" : "de→lt" }));
  }
  for (const row of doc.results || []) {
    const lemma = row.pilotDe;
    if (!SIX.includes(lemma)) continue;
    for (const [slot, id] of slots) {
      const cell = row[slot];
      if (!cell) continue;
      const status = mapStatus(cell.status);
      if (!status) continue;
      buckets.get(id).lemmas[lemma] = { status, ref: refOf(cell) };
      if (!buckets.get(id).url && cell.entryUrl) buckets.get(id).url = cell.entryUrl.split("?")[0];
    }
  }
  return [...buckets.values()];
}

function parseUk(doc, filePath) {
  const buckets = new Map();
  for (const row of doc.results || []) {
    const lemma = row.deLemma;
    if (!SIX.includes(lemma)) continue;
    const id = row.dictionaryId || row.dictionary || "uk-source";
    const direction = row.direction || "";
    const key = `${id}|${direction}`;
    if (!buckets.has(key)) {
      buckets.set(key, source({
        lang: "uk",
        sourceId: id,
        url: "",
        direction,
        lemmas: {},
        filePath,
      }));
    }
    const status = mapStatus(row.status);
    if (!status) continue;
    buckets.get(key).lemmas[lemma] = { status, ref: refOf(row) };
  }
  return [...buckets.values()];
}

function parseModernCs(doc, filePath) {
  const out = [];
  for (const row of doc.sources || []) {
    out.push(source({
      lang: row.lang,
      sourceId: row.id,
      url: row.portalUrl || "",
      direction: row.direction || "",
      lemmas: takeRows(row.pilots),
      filePath,
      note: row.status || "",
    }));
  }
  for (const row of doc.rejected || []) {
    out.push(source({
      lang: row.lang,
      sourceId: row.id || "",
      url: "",
      lemmas: {},
      aggregateOnly: true,
      filePath,
      note: "rejected",
    }));
  }
  return out;
}

function parseLvModern(doc, filePath) {
  const out = [];
  for (const lang of Object.keys(doc.languages || {}).sort()) {
    const block = doc.languages[lang];
    const primary = Array.isArray(block.primaryModern) ? block.primaryModern[0] : null;
    const id = (primary && primary.id) || `${lang}-modern`;
    const url = (primary && primary.portalUrl) || "";
    for (const direction of Object.keys(block.pilotResults || {}).sort()) {
      const lemmas = takeRows(block.pilotResults[direction]);
      if (!Object.keys(lemmas).length) continue;
      out.push(source({
        lang,
        sourceId: id,
        url,
        direction,
        lemmas,
        filePath,
        note: (primary && primary.status) || "",
      }));
    }
  }
  return out;
}

function parseEt(verifyDoc, metaDoc, filePath) {
  const dict = (metaDoc && metaDoc.dictionaries && metaDoc.dictionaries[0]) || {};
  const lemmas = {};
  for (const row of verifyDoc.liveChecks || []) {
    if (!SIX.includes(row.lemma)) continue;
    const status = mapStatus(row.lookupStatus);
    if (!status) continue;
    lemmas[row.lemma] = { status, ref: row.page != null ? `p.${row.page}` : "" };
  }
  return [source({
    lang: "et",
    sourceId: (metaDoc && metaDoc.primaryDictionaryId) || dict.id || "de-et",
    kind: "PDF",
    url: "",
    lemmas,
    filePath,
    note: dict.name || "",
  })];
}

function parseMurko(doc, filePath) {
  const src = doc.source || {};
  return [source({
    lang: "sl",
    sourceId: "murko-dlib-1833",
    kind: "web",
    url: src.dlibDetailsUrl || "",
    lemmas: takeRows(doc.deToSl && doc.deToSl.entries),
    filePath,
    note: src.yearLabel || "",
  })];
}

function parseRescan(doc) {
  const rows = [];
  const summary = doc.pilotAuditSummary || {};
  for (const lang of Object.keys(summary).sort()) {
    for (const lemma of doc.pilotLemmas || []) {
      rows.push({
        set: "rescan",
        lang,
        lemma,
        status: summary[lang][lemma] || "",
        inSix: SIX.includes(lemma) ? "jā" : "nē",
      });
    }
  }
  return {
    lemmas: doc.pilotLemmas || [],
    generatedAt: doc.generatedAt || "",
    rows,
  };
}

function parseOtherLemmaNames(doc) {
  const names = new Set();
  const langs = doc.languages;
  if (!Array.isArray(langs)) return [];
  for (const lang of langs) {
    for (const pilot of lang.pilots || []) {
      if (pilot.germanSourceWord) names.add(pilot.germanSourceWord);
    }
  }
  return [...names].sort();
}

function deLemmasOf(doc) {
  const names = new Set();
  for (const row of doc.results || []) {
    if (row && row.deLemma) names.add(row.deLemma);
  }
  return [...names].sort();
}

function preferRef(refs) {
  function score(ref) {
    if (ref.includes("audit-only")) return 0;
    if (ref.includes("pilot")) return 1;
    if (ref.includes("discovery")) return 2;
    if (ref === "origin" || ref === "origin/main") return 8;
    return 5;
  }
  return refs.slice().sort((a, b) => score(a) - score(b) || a.localeCompare(b))[0];
}

function listRefs() {
  return git(["for-each-ref", "--format=%(objectname) %(refname:short)", "refs/remotes/origin"])
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const space = line.indexOf(" ");
      return { commit: line.slice(0, space), ref: line.slice(space + 1) };
    })
    .filter((row) => !row.ref.endsWith("/HEAD"));
}

function listPrs() {
  try {
    const raw = execFileSync(
      "gh",
      ["pr", "list", "--state", "all", "--limit", "1000", "--json", "number,state,title,headRefName,body"],
      { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
    );
    const rows = JSON.parse(raw);
    return rows.map((row) => ({
      number: row.number,
      state: row.state,
      title: row.title || "",
      head: row.headRefName || "",
      body: row.body || "",
    })).sort((a, b) => a.number - b.number);
  } catch (error) {
    return { error: String(error.message || error).slice(0, 200) };
  }
}

function matchedTerms(text) {
  const hay = text.toLowerCase();
  const terms = ["g2", "pilot", "pilots", "bilingual-audit", "translation-audit", "pilot words", "a1-card", "terminology"];
  return terms.filter((term) => hay.includes(term));
}

function splitCsvLine(line) {
  const out = [];
  let cur = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i += 1;
        } else quoted = false;
      } else cur += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  out.push(cur);
  return out;
}

function loadInventory() {
  const text = git(["show", `${INVENTORY_COMMIT}:reports/dictionary-sources/languages.csv`]);
  const lines = text.trim().split("\n");
  const header = splitCsvLine(lines[0]);
  const typeIndex = header.indexOf("bilingual_source_type");
  const map = {};
  for (const line of lines.slice(1)) {
    const cells = splitCsvLine(line);
    map[cells[0]] = cells[typeIndex] || "";
  }
  return map;
}

function rankStatus(status) {
  if (status === "FOUND") return 3;
  if (status === "AMBIGUOUS") return 2;
  if (status === "NOT_FOUND") return 1;
  return 0;
}

function rollup(lang, sources) {
  const relevant = sources.filter((row) => row.lang === lang);
  const withLemmas = relevant.filter((row) => Object.keys(row.lemmas).length > 0);
  const union = {};
  const unionRef = {};
  for (const row of withLemmas) {
    for (const lemma of SIX) {
      const cell = row.lemmas[lemma];
      if (!cell) continue;
      if (rankStatus(cell.status) > rankStatus(union[lemma])) {
        union[lemma] = cell.status;
        unionRef[lemma] = `${row.sourceId} ${cell.ref}`.trim();
      }
    }
  }
  const covered = SIX.filter((lemma) => union[lemma]);
  const foundCount = SIX.filter((lemma) => union[lemma] === "FOUND").length;
  const sourcesTested = relevant.filter((row) => row.note !== "rejected" && (Object.keys(row.lemmas).length || row.aggregate || row.automationBlocked)).length;
  const sourcesAllSix = withLemmas.filter((row) => SIX.every((lemma) => row.lemmas[lemma] && row.lemmas[lemma].status === "FOUND")).length;
  const explicitSix = withLemmas.some((row) => SIX.every((lemma) => row.lemmas[lemma]));
  const automation = relevant.some((row) => row.automationBlocked);
  const recordExists = relevant.length > 0;

  if (!recordExists) {
    return {
      pilot_tested: "nē",
      words_found: "",
      sources_tested: "",
      sources_with_all_six: "",
      language_status: "NOT_TESTED",
      problem_reason: "",
      union,
      unionRef,
    };
  }

  if (covered.length < 6) {
    const bits = covered.map((lemma) => `${lemma} ${union[lemma]}${unionRef[lemma] ? ` (${unionRef[lemma]})` : ""}`);
    const missing = SIX.filter((lemma) => !union[lemma]);
    return {
      pilot_tested: "jā",
      words_found: "",
      sources_tested: automation && covered.length === 0 ? "" : String(sourcesTested),
      sources_with_all_six: covered.length === 0 && automation ? "" : String(sourcesAllSix),
      language_status: "PROBLEMATIC",
      problem_reason: covered.length
        ? `nav sešu vārdu pilna protokola; nav rindas: ${missing.join(", ")}; ir: ${bits.join("; ")}`
        : (relevant.map((row) => row.note).filter(Boolean)[0] || "sešu vārdu rindas nav"),
      union,
      unionRef,
    };
  }

  let languageStatus = "PARTIAL";
  let problem = "";
  if (foundCount === 6) languageStatus = "ALL_SIX_FOUND";
  else if (foundCount === 0 && SIX.every((lemma) => union[lemma] === "NOT_FOUND") && automation) {
    languageStatus = "PROBLEMATIC";
    problem = relevant.map((row) => row.note).filter(Boolean)[0] || "NOT_VERIFIED_AUTOMATION";
  } else if (foundCount === 0 && SIX.every((lemma) => union[lemma] === "NOT_FOUND")) {
    languageStatus = "NONE_FOUND";
    problem = relevant.map((row) => row.note).filter(Boolean)[0] || "";
  } else if (foundCount === 0) {
    languageStatus = "PROBLEMATIC";
    problem = "neviena FOUND; ir AMBIGUOUS vai jauktas rindas";
  } else {
    languageStatus = `PARTIAL ${foundCount}/6`;
  }
  const fileNotes = [...new Set(relevant.map((row) => row.note).filter((note) => note && note.startsWith("faila")))];
  if (!problem && fileNotes.length && languageStatus !== "ALL_SIX_FOUND") problem = fileNotes.join(" | ");
  if (languageStatus.startsWith("PARTIAL") && !explicitSix) problem = problem || "apvienojums no vairākiem avotiem";
  return {
    pilot_tested: "jā",
    words_found: String(foundCount),
    sources_tested: String(sourcesTested),
    sources_with_all_six: String(sourcesAllSix),
    language_status: languageStatus,
    problem_reason: problem,
    union,
    unionRef,
  };
}

function main() {
  const refs = listRefs();
  const catalog = [];
  const byPath = new Map();
  for (const row of refs) {
    const names = git(["ls-tree", "-r", "--name-only", row.commit]).split("\n").filter(Boolean);
    for (const filePath of names) {
      if (!PATH_RE.test(filePath) || SKIP_RE.test(filePath)) continue;
      const blob = blobAt(row.commit, filePath);
      catalog.push({ path: filePath, blob, ref: row.ref, commit: row.commit });
      if (!byPath.has(filePath)) byPath.set(filePath, []);
      byPath.get(filePath).push({ ...row, blob });
    }
  }
  catalog.sort((a, b) => a.path.localeCompare(b.path) || a.ref.localeCompare(b.ref));

  const prPack = listPrs();
  const prs = Array.isArray(prPack) ? prPack : [];
  const prByHead = new Map();
  for (const pr of prs) {
    if (!prByHead.has(pr.head)) prByHead.set(pr.head, []);
    prByHead.get(pr.head).push(pr);
  }
  function prsForRef(ref) {
    const head = ref.replace(/^origin\//, "");
    return prByHead.get(head) || [];
  }

  const parsers = new Map([
    ["pdf-bilingual-dictionary-nn-pt-ro-pilot-verify.json", (doc, filePath) => parseStandard(doc, filePath)],
    ["pdf-bilingual-dictionary-sl-sq-sr-sv-pilot-verify.json", (doc, filePath) => parseStandard(doc, filePath)],
    ["pdf-bilingual-dictionary-bg-bs-fr-pilot-verify.json", (doc, filePath) => parseBg(doc, filePath)],
    ["pdf-bilingual-dictionary-hr-hu-is-pilot-verify.json", (doc, filePath) => parseHr(doc, filePath)],
    ["pdf-bilingual-dictionary-it-mk-nl-pilot-verify.json", (doc, filePath) => parseIt(doc, filePath)],
    ["pdf-bilingual-dictionary-lv-lt-pl-pilot-verification.json", (doc, filePath) => parseDirections(doc, filePath)],
    ["lt-de-pilot-ekalba-lki-zodynas-verification.json", (doc, filePath) => parseEkalba(doc, filePath)],
    ["uk-bilingual-source-pilot-verification.json", (doc, filePath) => parseUk(doc, filePath)],
    ["pdf-bilingual-dictionary-cs-sk-uk-modern-sources.json", (doc, filePath) => parseModernCs(doc, filePath)],
    ["pdf-bilingual-dictionary-lv-lt-pl-modern-sources.json", (doc, filePath) => parseLvModern(doc, filePath)],
    ["pdf-bilingual-dictionary-sl-murko-dlib-pilot.json", (doc, filePath) => parseMurko(doc, filePath)],
  ]);

  const parsed = [];
  const blobNotes = [];
  function evidenceFor(filePath) {
    const hits = byPath.get(filePath) || [];
    if (!hits.length) return null;
    const blobs = [...new Set(hits.map((hit) => hit.blob))].sort();
    const chosenRef = preferRef(hits.map((hit) => hit.ref));
    const chosen = hits.find((hit) => hit.ref === chosenRef);
    const pr = prsForRef(chosen.ref)[0];
    return { filePath, blobs, ref: chosen.ref, commit: chosen.commit, pr: pr ? pr.number : "", prState: pr ? pr.state : "" };
  }

  const allSources = [];
  for (const [base, parser] of parsers) {
    const filePath = [...byPath.keys()].find((item) => item.endsWith("/" + base));
    if (!filePath) {
      blobNotes.push(`${base}: FAILA NAV`);
      continue;
    }
    const evidence = evidenceFor(filePath);
    if (evidence.blobs.length !== 1) blobNotes.push(`${filePath}: blob skaits ${evidence.blobs.length}`);
    const doc = loadJsonBlob(evidence.blobs[0]);
    const sources = parser(doc, filePath).map((row) => ({ ...row, evidence }));
    allSources.push(...sources);
    parsed.push({ filePath, blob: evidence.blobs[0], ref: evidence.ref, commit: evidence.commit, pr: evidence.pr });
  }

  const etPath = [...byPath.keys()].find((item) => item.endsWith("/german-target-dictionary-de-et-used-sources-verification.json"));
  const etMetaPath = [...byPath.keys()].find((item) => item.startsWith("reports/") && item.endsWith("/german-target-dictionary-de-et-used-sources.json"));
  if (etPath && etMetaPath) {
    const evidence = evidenceFor(etPath);
    if (evidence.blobs.length !== 1) blobNotes.push(`${etPath}: blob skaits ${evidence.blobs.length}`);
    const metaEvidence = evidenceFor(etMetaPath);
    const verifyDoc = loadJsonBlob(evidence.blobs[0]);
    const metaDoc = loadJsonBlob(metaEvidence.blobs[0]);
    const sources = parseEt(verifyDoc, metaDoc, etPath).map((row) => ({ ...row, evidence }));
    allSources.push(...sources);
    parsed.push({ filePath: etPath, blob: evidence.blobs[0], ref: evidence.ref, commit: evidence.commit, pr: evidence.pr });
  } else {
    blobNotes.push("et verification: FAILA NAV");
  }

  const rescanPath = [...byPath.keys()].find((item) => item.endsWith("/german-target-dictionary-rescan-problematic-verification.json"));
  let rescan = { lemmas: [], rows: [], generatedAt: "" };
  if (rescanPath) {
    const evidence = evidenceFor(rescanPath);
    rescan = parseRescan(loadJsonBlob(evidence.blobs[0]));
    rescan.evidence = evidence;
  }

  const contentPath = [...byPath.keys()].find((item) => item.endsWith("/pilot-content-access-32.json"));
  let contentWords = [];
  if (contentPath) {
    const evidence = evidenceFor(contentPath);
    contentWords = parseOtherLemmaNames(loadJsonBlob(evidence.blobs[0]));
    rescan.contentEvidence = evidence;
  }
  const validationPath = [...byPath.keys()].find((item) => item.endsWith("/complete-bilingual-validation-38.json"));
  let validationLemmas = [];
  if (validationPath) {
    const evidence = evidenceFor(validationPath);
    validationLemmas = deLemmasOf(loadJsonBlob(evidence.blobs[0]));
    rescan.validationEvidence = evidence;
  }

  const merged = new Map();
  const passthrough = [];
  for (const row of allSources) {
    if (!row.sourceId || row.aggregateOnly) {
      passthrough.push(row);
      continue;
    }
    const key = [row.lang, row.sourceId, row.direction].join("|");
    if (!merged.has(key)) {
      merged.set(key, { ...row, lemmas: { ...row.lemmas } });
      continue;
    }
    const dest = merged.get(key);
    for (const [lemma, cell] of Object.entries(row.lemmas)) {
      const prev = dest.lemmas[lemma];
      if (!prev || rankStatus(cell.status) > rankStatus(prev.status)) dest.lemmas[lemma] = cell;
    }
  }
  allSources.length = 0;
  allSources.push(...merged.values(), ...passthrough);

  const inventory = loadInventory();
  const languageRows = LANGS.map((lang) => {
    const rolled = rollup(lang, allSources);
    const evidencePaths = [...new Set(allSources.filter((row) => row.lang === lang).map((row) => {
      const ev = row.evidence;
      const pr = ev.pr ? ` PR #${ev.pr}` : "";
      return `${ev.ref}@${ev.commit}${pr} ${ev.filePath}`;
    }))];
    const inv = inventory[lang] || "";
    let match = "atbilst";
    if ((inv === "B" || inv === "NONE") && rolled.pilot_tested === "jā") match = "neatbilst";
    if (inv === "A" && rolled.pilot_tested === "nē") match = "neatbilst";
    let reason = rolled.problem_reason;
    if (lang === "lb" && rescan.rows.some((row) => row.lang === "lb")) {
      reason = reason
        ? `${reason}; cits lemmas komplekts rescan: Haus, abholen, Route, Getriebe`
        : "sešu vārdu pilots nav; cits lemmas komplekts rescan: Haus, abholen, Route, Getriebe";
    }
    return {
      lang,
      pilot_tested: rolled.pilot_tested,
      words_found: rolled.words_found,
      sources_tested: rolled.sources_tested,
      sources_with_all_six: rolled.sources_with_all_six,
      language_status: rolled.language_status,
      problem_reason: reason,
      evidence: evidencePaths.join(" | "),
      inventory_type: inv,
      inventory_match: match,
      union: rolled.union,
      unionRef: rolled.unionRef,
    };
  });

  const outside = ["lv"].map((lang) => {
    const rolled = rollup(lang, allSources);
    const evidencePaths = [...new Set(allSources.filter((row) => row.lang === lang).map((row) => {
      const ev = row.evidence;
      const pr = ev.pr ? ` PR #${ev.pr}` : "";
      return `${ev.ref}@${ev.commit}${pr} ${ev.filePath}`;
    }))];
    return {
      lang,
      pilot_tested: rolled.pilot_tested,
      words_found: rolled.words_found,
      sources_tested: rolled.sources_tested,
      sources_with_all_six: rolled.sources_with_all_six,
      language_status: rolled.language_status,
      problem_reason: rolled.problem_reason,
      evidence: evidencePaths.join(" | "),
      note: "nav 31 mērķvalodu sarakstā",
    };
  });

  const lemmaRows = [];
  for (const row of allSources) {
    if (row.note === "rejected") continue;
    if (row.aggregateOnly && !Object.keys(row.lemmas).length) {
      if (!row.aggregate) continue;
      lemmaRows.push({
        lang: row.lang,
        source_id: row.sourceId,
        kind: row.kind,
        url: row.url,
        direction: row.direction,
        lemma: "",
        result: "",
        entry_ref: "",
        aggregate: row.aggregate,
        file: row.filePath,
        ref: row.evidence.ref,
        commit: row.evidence.commit,
        pr: row.evidence.pr,
      });
      continue;
    }
    for (const lemma of SIX) {
      const cell = row.lemmas[lemma];
      if (!cell) continue;
      lemmaRows.push({
        lang: row.lang,
        source_id: row.sourceId,
        kind: row.kind,
        url: row.url,
        direction: row.direction,
        lemma,
        result: cell.status,
        entry_ref: cell.ref,
        aggregate: "",
        file: row.filePath,
        ref: row.evidence.ref,
        commit: row.evidence.commit,
        pr: row.evidence.pr,
      });
    }
  }

  const hashRows = [];
  for (const filePath of [...byPath.keys()].sort()) {
    if (!/murko-dlib-vol.*\.txt$/.test(filePath)) continue;
    const evidence = evidenceFor(filePath);
    const bytes = catBlob(evidence.blobs[0]);
    hashRows.push({
      path: filePath,
      blob: evidence.blobs[0],
      bytes: Buffer.byteLength(bytes, "utf8"),
      sha256: sha256Text(bytes),
      ref: evidence.ref,
      commit: evidence.commit,
      note: "TXT saturs šajā atskaitē netiek kopēts",
    });
  }

  const catalogRows = catalog.map((row) => {
    const head = row.ref.replace(/^origin\//, "");
    const pr = (prByHead.get(head) || [])[0];
    return {
      path: row.path,
      blob: row.blob,
      ref: row.ref,
      commit: row.commit,
      pr: pr ? pr.number : "",
      pr_state: pr ? pr.state : "",
    };
  });

  const prRows = [];
  if (!Array.isArray(prPack)) {
    prRows.push({ number: "", state: "", head: "", title: "", matched: "GH_LIST_FAILED", commit: "" });
  } else {
    for (const pr of prs) {
      const terms = [...new Set([...matchedTerms(`${pr.title}\n${pr.head}`), ...matchedTerms(pr.body)])].sort();
      if (!terms.length) continue;
      const ref = refs.find((row) => row.ref === `origin/${pr.head}`);
      prRows.push({
        number: pr.number,
        state: pr.state,
        head: pr.head,
        title: pr.title.replace(/\s+/g, " ").slice(0, 180),
        matched: terms.join("|"),
        commit: ref ? ref.commit : "",
      });
    }
  }

  const tested = languageRows.filter((row) => row.pilot_tested === "jā").map((row) => row.lang);
  const notTested = languageRows.filter((row) => row.language_status === "NOT_TESTED").map((row) => row.lang);
  const mismatches = languageRows.filter((row) => row.inventory_match === "neatbilst");
  const beyondNn = tested.filter((lang) => !["nn", "pt", "ro"].includes(lang));

  fs.mkdirSync(OUT, { recursive: true });
  const catalogDir = path.join(OUT, "catalog");
  fs.mkdirSync(catalogDir, { recursive: true });
  const catalogBody = csv(catalogRows, ["path", "blob", "ref", "commit", "pr", "pr_state"]);
  const catalogFullSha = sha256Text(catalogBody);
  const catalogLines = catalogBody.split("\n");
  if (catalogLines[catalogLines.length - 1] === "") catalogLines.pop();
  const headerLine = catalogLines[0];
  const dataLines = catalogLines.slice(1);
  const partLimit = 450 * 1024;
  const ranges = [];
  let start = 0;
  let size = Buffer.byteLength(headerLine + "\n");
  for (let i = 0; i < dataLines.length; i += 1) {
    const next = Buffer.byteLength(dataLines[i] + "\n");
    if (i > start && size + next > partLimit) {
      ranges.push([start, i]);
      start = i;
      size = Buffer.byteLength(headerLine + "\n");
    }
    size += next;
  }
  if (start < dataLines.length) ranges.push([start, dataLines.length]);
  for (const old of fs.readdirSync(catalogDir)) fs.unlinkSync(path.join(catalogDir, old));
  const staleCatalog = path.join(OUT, "catalog.csv");
  if (fs.existsSync(staleCatalog)) fs.unlinkSync(staleCatalog);
  const parts = ranges.map(([from, to], index) => {
    const name = `catalog-part-${String(index + 1).padStart(2, "0")}.csv`;
    const body = [headerLine, ...dataLines.slice(from, to)].join("\n") + "\n";
    const file = `reports/pilot-results/catalog/${name}`;
    fs.writeFileSync(path.join(catalogDir, name), body);
    return {
      file,
      bytes: Buffer.byteLength(body),
      start: from + 2,
      end: to + 1,
      sha256: sha256Text(body),
    };
  });
  const catalogReadme = [
    "# Kataloga daļas",
    "",
    "Pilnais catalog.csv šajā komitā netiek glabāts, jo tas pārsniedz 500 KB. Daļas ir pilnais saturs sadalīts pa rindām. Pilnā teksta SHA-256 ir zemāk.",
    "",
    `Pilns teksts: baiti ${Buffer.byteLength(catalogBody)}, rindas ${catalogLines.length}, SHA-256 ${catalogFullSha}.`,
    "",
    "| fails | baiti | rindas | SHA-256 |",
    "|---|---:|---|---|",
    ...parts.map((part) => `| ${part.file} | ${part.bytes} | ${part.start}-${part.end} | ${part.sha256} |`),
    "",
  ].join("\n");
  fs.writeFileSync(path.join(catalogDir, "README.md"), catalogReadme);

  const languagesCsv = csv(languageRows, [
    "lang", "pilot_tested", "words_found", "sources_tested", "sources_with_all_six",
    "language_status", "problem_reason", "evidence", "inventory_type", "inventory_match",
  ]);
  const lemmaCsv = csv(lemmaRows, [
    "lang", "source_id", "kind", "url", "direction", "lemma", "result", "entry_ref",
    "aggregate", "file", "ref", "commit", "pr",
  ]);
  const prCsv = csv(prRows, ["number", "state", "head", "title", "matched", "commit"]);
  const otherCsv = csv(rescan.rows, ["set", "lang", "lemma", "status", "inSix"]);
  const hashCsv = csv(hashRows, ["path", "blob", "bytes", "sha256", "ref", "commit", "note"]);
  const outsideCsv = csv(outside, [
    "lang", "pilot_tested", "words_found", "sources_tested", "sources_with_all_six",
    "language_status", "problem_reason", "evidence", "note",
  ]);

  const json = {
    date: DATE,
    six: SIX,
    originMain: git(["rev-parse", "origin/main"]).trim(),
    remoteRefCount: refs.length,
    catalogRowCount: catalogRows.length,
    uniqueCatalogPaths: byPath.size,
    catalogFullSha256: catalogFullSha,
    catalogPartCount: parts.length,
    prListCount: prs.length,
    prMatchCount: prRows.length,
    ghError: Array.isArray(prPack) ? "" : prPack.error,
    blobNotes,
    parsed,
    inventoryCommit: INVENTORY_COMMIT,
    languages: languageRows.map(({ union, unionRef, ...row }) => ({ ...row, lemmas: union, lemmaRefs: unionRef })),
    outside31: outside,
    otherPilotSets: {
      rescanLemmas: rescan.lemmas,
      rescanGeneratedAt: rescan.generatedAt,
      contentAccessGermanWords: contentWords,
      validation38DeLemmas: validationLemmas,
    },
    tested,
    notTested,
    beyondNnPtRo: beyondNn,
    mismatchLangs: mismatches.map((row) => row.lang),
  };

  function table(rows) {
    const head = "| lang | pilot_tested | words_found | sources_tested | sources_with_all_six | language_status | inventory | match | problem_reason |";
    const sep = "|---|---|---:|---:|---:|---|---|---|---|";
    const body = rows.map((row) => `| ${row.lang} | ${row.pilot_tested} | ${row.words_found} | ${row.sources_tested} | ${row.sources_with_all_six} | ${row.language_status} | ${row.inventory_type || ""} | ${row.inventory_match || ""} | ${String(row.problem_reason || "").replace(/\|/g, "/")} |`);
    return [head, sep, ...body].join("\n");
  }

  const summary = [
    "# Sešu pilota vārdu rezultāti",
    "",
    "STAGE RESULT: NEEDS OWNER REVIEW",
    "",
    `Seši de lemmas: ${SIX.join(", ")}. Jauna rinda netiek izdomāta. AMBIGUOUS (PARTIAL vai PARTIAL_OCR) neskaita kā FOUND. words_found ir lemmas skaits, kam kādā avotā ir FOUND. sources_with_all_six ir avoti, kur visi seši ir FOUND. Valodai bez sešu vārdu rindas statuss ir NOT_TESTED, nevis NONE.`,
    "",
    `Attālie ref: ${refs.length}. Kataloga ceļi: ${byPath.size}. Kataloga rindas (ceļš × zars): ${catalogRows.length}. Pilnais katalogs sadalīts ${parts.length} daļās; pilnā teksta SHA-256 ${catalogFullSha}. gh pr list ieraksti: ${prs.length}. PR ar meklēšanas vārdiem: ${prRows.length}.`,
    "",
    `Pilots ir vairāk valodām nekā nn, pt un ro: ${beyondNn.join(", ")}.`,
    `31 tabulā pilot_tested jā: ${tested.join(", ")}.`,
    `NOT_TESTED: ${notTested.join(", ")}.`,
    outside[0].pilot_tested === "jā"
      ? `Ārpus 31 mērķvalodām sešu vārdu pilots ir arī lv: ${outside[0].language_status}, words_found ${outside[0].words_found}.`
      : "Ārpus 31 mērķvalodām sešu vārdu pilots lv nav atrasts.",
    "",
    "Inventāra tipi ņemti no commit f4388492d173768652582cfa4aa1b0e15c2040b8 languages.csv. Neatbilst nozīmē: tips B vai NONE un sešu vārdu pilots ir ierakstīts, vai tips A un sešu vārdu pilots nav. Tips A kopā ar pilotu atbilst. Tips B kopā ar NOT_TESTED atbilst. Šī atskaite neizvēlas pilota valodu un nevērtē vārdnīcas kvalitāti.",
    "",
    `Neatbilst (${mismatches.length}): ${mismatches.map((row) => `${row.lang} inventārs ${row.inventory_type}, pilots ${row.language_status}`).join("; ")}.`,
    "",
    "## 31 valodas",
    "",
    table(languageRows),
    "",
    "## Ārpus 31",
    "",
    `| lang | pilot_tested | words_found | sources_tested | sources_with_all_six | language_status | problem_reason |`,
    `|---|---|---:|---:|---:|---|---|`,
    ...outside.map((row) => `| ${row.lang} | ${row.pilot_tested} | ${row.words_found} | ${row.sources_tested} | ${row.sources_with_all_six} | ${row.language_status} | ${String(row.problem_reason || "").replace(/\|/g, "/")} |`),
    "",
    "## Citi pilota komplekti",
    "",
    `rescan lemmas ${rescan.lemmas.join(", ")} valodām mk, nn, lb. Tie nepārraksta sešu vārdu kolonnas. mk un nn paliek pie sešu vārdu statusa. lb paliek NOT_TESTED sešiem vārdiem.`,
    contentWords.length ? `pilot-content-access-32 germanSourceWord: ${contentWords.join(", ")}. Tas nav sešu vārdu DE↔X protokols.` : "",
    validationLemmas.length ? `complete-bilingual-validation-38 deLemma kopa: ${validationLemmas.join(", ")}. Tā nav sešu vārdu tabula.` : "",
    "Murko TXT saturs nav kopēts. SHA-256 ir text-hashes.csv.",
    blobNotes.length ? `Blob piezīmes: ${blobNotes.join("; ")}.` : "Katram izvilktajam JSON ir viens blobs visos ref.",
    "",
    "Šķirkļu citāti, OCR fragmenti un tulkojumu glosas šajos failos nav ierakstīti.",
    "",
  ].filter((line) => line !== undefined).join("\n");

  fs.writeFileSync(path.join(OUT, "languages.csv"), languagesCsv);
  fs.writeFileSync(path.join(OUT, "lemma-results.csv"), lemmaCsv);
  fs.writeFileSync(path.join(OUT, "prs.csv"), prCsv);
  fs.writeFileSync(path.join(OUT, "other-pilots.csv"), otherCsv);
  fs.writeFileSync(path.join(OUT, "outside-31.csv"), outsideCsv);
  fs.writeFileSync(path.join(OUT, "text-hashes.csv"), hashCsv);
  fs.writeFileSync(path.join(OUT, "pilot-results.json"), JSON.stringify(json, null, 2) + "\n");
  fs.writeFileSync(path.join(OUT, "SUMMARY.md"), summary.endsWith("\n") ? summary : summary + "\n");

  const diff = git(["diff", "--name-only", "--", "data", "www/data", "languages", "ui.js", "scripts"]).trim();
  const summaryBytes = Buffer.byteLength(fs.readFileSync(path.join(OUT, "SUMMARY.md")));
  const hashes = {};
  function walk(dir, prefix) {
    for (const name of fs.readdirSync(dir).sort()) {
      const full = path.join(dir, name);
      const rel = prefix ? `${prefix}/${name}` : name;
      if (fs.statSync(full).isDirectory()) walk(full, rel);
      else {
        const buf = fs.readFileSync(full);
        hashes[rel] = { bytes: buf.length, sha256: crypto.createHash("sha256").update(buf).digest("hex") };
        if (buf.length > 500 * 1024) process.exitCode = 4;
      }
    }
  }
  walk(OUT, "");
  const stamp = {
    summaryBytes,
    forbiddenDiff: diff,
    hashes,
  };
  process.stdout.write(JSON.stringify(stamp, null, 2) + "\n");
  if (summaryBytes > 20 * 1024) process.exitCode = 2;
  if (diff) process.exitCode = 3;
}

main();
