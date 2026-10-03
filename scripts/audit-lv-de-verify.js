#!/usr/bin/env node
/**
 * LV-DE internal verification for data/a1.js … data/c2.js.
 * Read-only. Does not edit data, www/data, languages, ui.js, or existing scripts.
 * Does not use a network, a model, or a dictionary download.
 * Pass 2 runs only when --source-file is given. Without it, no record is PASS.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const LEVEL_FILES = ["a1", "a2", "b1", "b2", "c1", "c2"];
const ARTICLES = new Set(["der", "die", "das"]);
const PLURAL_SUFFIXES = ["", "e", "en", "er", "n", "s", "nen"];
const LV_DIACRITICS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const FOREIGN_RE = /[\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u10A0-\u10FF\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]/;
const OUT_MD = path.join(ROOT, "reports/lv-de-verify.md");
const OUT_JSON = path.join(ROOT, "reports/lv-de-verify.json");

function sha256Text(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function sha256File(filePath) {
  return sha256Text(fs.readFileSync(filePath));
}

function loadArray(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx, { filename: filePath });
  const key = Object.keys(ctx.window).find((name) => Array.isArray(ctx.window[name]));
  if (!key) throw new Error(`no array global in ${filePath}`);
  return ctx.window[key];
}

function argValue(name) {
  const eq = process.argv.find((arg) => arg.startsWith(`${name}=`));
  if (eq) return eq.slice(name.length + 1);
  const index = process.argv.indexOf(name);
  if (index >= 0) return process.argv[index + 1] || "";
  return null;
}

function fieldOf(entry, key) {
  if (!entry || typeof entry !== "object" || !Object.prototype.hasOwnProperty.call(entry, key) || entry[key] == null) {
    return { present: false, raw: "", trim: "", empty: true, badType: false };
  }
  if (typeof entry[key] !== "string") {
    return { present: true, raw: "", trim: "", empty: false, badType: true, type: typeof entry[key] };
  }
  const raw = entry[key];
  const trim = raw.trim();
  return { present: true, raw, trim, empty: trim === "", badType: false };
}

function foldStem(value) {
  return String(value)
    .normalize("NFC")
    .toLowerCase()
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ß/g, "ss");
}

function pluralStemMatches(de, pluralWord) {
  const left = foldStem(de);
  const right = foldStem(pluralWord);
  return PLURAL_SUFFIXES.some((suffix) => right === left + suffix);
}

function posFromData(articleTrim, pluralTrim) {
  if (ARTICLES.has(articleTrim) || pluralTrim.startsWith("die ")) return "lietvārds";
  return "nezināms";
}

function isLowerLetter(char) {
  return Boolean(char) && char !== char.toUpperCase() && char.toLowerCase() === char;
}

function issue(partial) {
  return {
    severity: partial.severity,
    category: partial.category,
    level: partial.level,
    index: partial.index,
    de: partial.de,
    de_article: partial.de_article,
    de_plural: partial.de_plural,
    lv: partial.lv,
    pos: partial.pos || "",
    detail: partial.detail || "",
    flag: partial.flag || ""
  };
}

function classifyRecord(level, index, entry) {
  const out = [];
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
    out.push(issue({
      severity: "FINDING",
      category: "RECORD_SHAPE",
      level,
      index,
      de: "",
      de_article: "",
      de_plural: "",
      lv: "",
      detail: "ieraksts nav objekts"
    }));
    return out;
  }
  const de = fieldOf(entry, "de");
  const article = fieldOf(entry, "de_article");
  const plural = fieldOf(entry, "de_plural");
  const lv = fieldOf(entry, "lv");
  const base = {
    level,
    index,
    de: de.badType ? "" : de.raw,
    de_article: article.badType ? "" : article.raw,
    de_plural: plural.badType ? "" : plural.raw,
    lv: lv.badType ? "" : lv.raw
  };
  const pos = posFromData(article.trim, plural.trim);
  if (de.badType) {
    out.push(issue({ ...base, severity: "FINDING", category: "RECORD_SHAPE", pos, detail: "de nav virkne" }));
  }
  if (article.badType) {
    out.push(issue({ ...base, severity: "FINDING", category: "ARTICLE_FORMAT", pos, detail: `de_article tips ${article.type}` }));
  } else if (!article.empty && !ARTICLES.has(article.trim)) {
    out.push(issue({ ...base, severity: "FINDING", category: "ARTICLE_FORMAT", pos, detail: article.raw }));
  }
  if (plural.badType) {
    out.push(issue({ ...base, severity: "FINDING", category: "PLURAL_FORMAT", pos, detail: `de_plural tips ${plural.type}` }));
  } else if (!plural.empty && plural.trim !== "-" && !plural.trim.startsWith("die ")) {
    out.push(issue({ ...base, severity: "FINDING", category: "PLURAL_FORMAT", pos, detail: plural.raw }));
  }
  [
    ["de", de],
    ["de_article", article],
    ["de_plural", plural]
  ].forEach(([name, state]) => {
    if (!state.present || state.badType) return;
    if (state.raw !== state.trim) {
      out.push(issue({ ...base, severity: "FINDING", category: "CASE_AND_WHITESPACE", pos, detail: `${name} EDGE_WHITESPACE` }));
    }
    if (state.raw.includes("\u00A0")) {
      out.push(issue({ ...base, severity: "FINDING", category: "CASE_AND_WHITESPACE", pos, detail: `${name} NBSP` }));
    }
    if (state.raw.includes("\u00AD")) {
      out.push(issue({ ...base, severity: "FINDING", category: "CASE_AND_WHITESPACE", pos, detail: `${name} SOFT_HYPHEN` }));
    }
    if (state.raw.normalize("NFC") !== state.raw) {
      out.push(issue({ ...base, severity: "FINDING", category: "CASE_AND_WHITESPACE", pos, detail: `${name} NOT_NFC` }));
    }
    if (LV_DIACRITICS.test(state.raw)) {
      out.push(issue({ ...base, severity: "FINDING", category: "LV_DIACRITIC", pos, detail: name }));
    }
    if (FOREIGN_RE.test(state.raw)) {
      out.push(issue({ ...base, severity: "FINDING", category: "FOREIGN_SCRIPT", pos, detail: name }));
    }
  });
  if (!article.empty && !article.badType && !de.badType && de.trim) {
    const first = [...de.trim][0];
    if (isLowerLetter(first)) {
      out.push(issue({
        ...base,
        severity: "FINDING",
        category: "CASE_AND_WHITESPACE",
        pos,
        detail: "de LOWERCASE_WITH_ARTICLE"
      }));
    }
  }
  if (article.empty && !article.badType) {
    const severity = pos === "nezināms" ? "NEEDS_SOURCE_REVIEW" : "OBSERVATION";
    out.push(issue({ ...base, severity, category: "EMPTY_ARTICLE", pos, detail: pos }));
  }
  if (plural.empty && !plural.badType) {
    const severity = pos === "nezināms" ? "NEEDS_SOURCE_REVIEW" : "OBSERVATION";
    out.push(issue({ ...base, severity, category: "EMPTY_PLURAL", pos, detail: pos }));
  }
  if (!plural.badType && plural.trim.startsWith("die ")) {
    const word = plural.trim.slice(4).trim();
    if (!word || !de.trim || de.badType || !pluralStemMatches(de.trim, word)) {
      out.push(issue({
        ...base,
        severity: "REVIEW",
        category: "PLURAL_STEM_CHECK",
        pos,
        detail: word ? "STEM_MISMATCH" : "EMPTY_AFTER_DIE"
      }));
    }
  }
  return out;
}

function classifyAll(recordsByLevel) {
  const issues = [];
  const rows = [];
  LEVEL_FILES.forEach((file) => {
    const level = file.toUpperCase();
    recordsByLevel[file].forEach((entry, index) => {
      const de = fieldOf(entry, "de");
      const article = fieldOf(entry, "de_article");
      const plural = fieldOf(entry, "de_plural");
      const lv = fieldOf(entry, "lv");
      rows.push({
        level,
        index,
        de: de.badType ? "" : de.raw,
        deKey: de.badType ? `\0bad:${index}` : de.raw,
        articleKey: article.badType ? `\0bad:${index}` : article.raw,
        lv: lv.badType ? "" : lv.raw,
        de_article: article.badType ? "" : article.raw,
        de_plural: plural.badType ? "" : plural.raw
      });
      classifyRecord(level, index, entry).forEach((row) => issues.push(row));
    });
  });
  const byKey = new Map();
  rows.forEach((row) => {
    const key = `${row.deKey}\0${row.articleKey}`;
    if (!byKey.has(key)) byKey.set(key, []);
    byKey.get(key).push(row);
  });
  byKey.forEach((group) => {
    const levels = new Set(group.map((row) => row.level));
    group.forEach((row) => {
      const sameLevel = group.filter((item) => item.level === row.level && item.index !== row.index);
      if (sameLevel.length) {
        issues.push(issue({
          severity: "FINDING",
          category: "DUPLICATE_IN_LEVEL",
          level: row.level,
          index: row.index,
          de: row.de,
          de_article: row.de_article,
          de_plural: row.de_plural,
          lv: row.lv,
          detail: sameLevel.map((item) => `${item.level}[${item.index}]`).sort().join(",")
        }));
      }
      if (levels.size > 1) {
        const others = group
          .filter((item) => item.level !== row.level || item.index !== row.index)
          .map((item) => `${item.level}[${item.index}]`)
          .sort();
        issues.push(issue({
          severity: "FINDING",
          category: "DUPLICATE_ACROSS_LEVELS",
          level: row.level,
          index: row.index,
          de: row.de,
          de_article: row.de_article,
          de_plural: row.de_plural,
          lv: row.lv,
          detail: others.join(",")
        }));
      }
    });
  });
  const byDe = new Map();
  rows.forEach((row) => {
    if (!byDe.has(row.deKey)) byDe.set(row.deKey, []);
    byDe.get(row.deKey).push(row);
  });
  byDe.forEach((group) => {
    const articles = new Set(group.map((row) => row.articleKey));
    if (articles.size < 2) return;
    const lvValues = new Set(group.map((row) => row.lv));
    const flag = lvValues.size > 1 ? "POSSIBLE_HOMONYM" : "SAME_LV";
    const lvList = [...lvValues].sort().join(" | ");
    group.forEach((row) => {
      issues.push(issue({
        severity: "REVIEW",
        category: "SAME_DE_DIFFERENT_ARTICLE",
        level: row.level,
        index: row.index,
        de: row.de,
        de_article: row.de_article,
        de_plural: row.de_plural,
        lv: row.lv,
        flag,
        detail: lvList
      }));
    });
  });
  issues.sort(compareIssue);
  return { issues, recordCount: rows.length };
}

function compareIssue(a, b) {
  const order = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };
  return (order[a.level] - order[b.level])
    || (a.index - b.index)
    || a.category.localeCompare(b.category)
    || a.detail.localeCompare(b.detail)
    || a.flag.localeCompare(b.flag);
}

function splitCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (quoted && char === "\"" && line[i + 1] === "\"") {
      current += "\"";
      i += 1;
    } else if (char === "\"") quoted = !quoted;
    else if (char === "," && !quoted) {
      cells.push(current);
      current = "";
    } else current += char;
  }
  cells.push(current);
  return cells;
}

function loadSource(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const hash = sha256Text(text);
  let rows;
  if (filePath.toLowerCase().endsWith(".csv")) {
    const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter((line) => line.trim() !== "");
    const headers = splitCsvLine(lines[0]).map((cell) => cell.trim());
    rows = lines.slice(1).map((line) => {
      const cells = splitCsvLine(line);
      const row = {};
      headers.forEach((header, index) => { row[header] = cells[index] == null ? "" : cells[index]; });
      return row;
    });
  } else {
    const parsed = JSON.parse(text);
    rows = Array.isArray(parsed) ? parsed : parsed.entries;
  }
  if (!Array.isArray(rows)) throw new Error("source file must be an array or {entries:[]}");
  const required = ["source_id", "lemma", "article", "plural"];
  const entries = rows.map((row, index) => {
    required.forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(row, key)) throw new Error(`source row ${index} missing ${key}`);
    });
    return {
      source_id: String(row.source_id),
      lemma: String(row.lemma).trim(),
      article: String(row.article == null ? "" : row.article).trim(),
      plural: String(row.plural == null ? "" : row.plural).trim(),
      pos: row.pos == null ? "" : String(row.pos),
      ipa: row.ipa == null ? "" : String(row.ipa),
      entry_ref: row.entry_ref == null ? "" : String(row.entry_ref)
    };
  });
  return { hash, entries, path: filePath };
}

function sourceForRecord(record, entries) {
  const lemma = String(record.de ?? "").trim();
  const article = String(record.de_article ?? "").trim();
  const plural = String(record.de_plural ?? "").trim();
  const hits = entries.filter((row) => row.lemma === lemma);
  const evidence = hits.map((row) => ({
    source_id: row.source_id,
    entry_ref: row.entry_ref,
    article: row.article,
    plural: row.plural
  }));
  if (hits.length === 0) {
    return { verdict: "NOT_IN_SOURCE", needsSourceReview: true, differs: [], evidence };
  }
  if (hits.length > 1) {
    return { verdict: "AMBIGUOUS", needsSourceReview: true, differs: [], evidence };
  }
  const hit = hits[0];
  const differs = [];
  if (hit.article !== article) differs.push("article");
  if (hit.plural !== plural) differs.push("plural");
  if (differs.length) return { verdict: "MISMATCH", needsSourceReview: false, differs, evidence };
  return { verdict: "MATCH", needsSourceReview: false, differs: [], evidence };
}

function countBy(rows, keyFn) {
  const out = {};
  rows.forEach((row) => {
    const key = keyFn(row);
    out[key] = (out[key] || 0) + 1;
  });
  return out;
}

function cell(value) {
  return `\`${JSON.stringify(value ?? "")}\``;
}

function lineOf(row) {
  const flag = row.flag ? ` flag=${row.flag}` : "";
  const pos = row.pos ? ` pos=${row.pos}` : "";
  return `- ${row.level}[${row.index}] ${row.category}${pos}${flag} de=${cell(row.de)} de_article=${cell(row.de_article)} de_plural=${cell(row.de_plural)} lv=${cell(row.lv)} detail=${cell(row.detail)}`;
}

function examplesOf(rows, count) {
  return rows.slice(0, count);
}

function masterVersion() {
  const text = fs.readFileSync(path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md"), "utf8");
  const match = text.match(/\*\*Versija:\*\*\s*([0-9.]+)/);
  return match ? match[1] : "";
}

function datasetHashes() {
  const files = {};
  LEVEL_FILES.forEach((level) => {
    files[`data/${level}.js`] = sha256File(path.join(ROOT, "data", `${level}.js`));
  });
  const joined = LEVEL_FILES.map((level) => files[`data/${level}.js`]).join("\n");
  return { files, combined: sha256Text(joined) };
}

function emptySummary() {
  const categories = [
    "ARTICLE_FORMAT", "PLURAL_FORMAT", "DUPLICATE_IN_LEVEL", "DUPLICATE_ACROSS_LEVELS",
    "SAME_DE_DIFFERENT_ARTICLE", "EMPTY_ARTICLE", "EMPTY_PLURAL", "PLURAL_STEM_CHECK",
    "CASE_AND_WHITESPACE", "FOREIGN_SCRIPT", "LV_DIACRITIC", "RECORD_SHAPE", "NEEDS_SOURCE_REVIEW"
  ];
  const summary = {};
  LEVEL_FILES.forEach((file) => {
    const level = file.toUpperCase();
    summary[level] = { records: 0 };
    categories.forEach((category) => { summary[level][category] = 0; });
  });
  return summary;
}

function buildReport(recordsByLevel, source) {
  const { issues, recordCount } = classifyAll(recordsByLevel);
  const summary = emptySummary();
  LEVEL_FILES.forEach((file) => {
    summary[file.toUpperCase()].records = recordsByLevel[file].length;
  });
  issues.forEach((row) => {
    if (!summary[row.level][row.category] && summary[row.level][row.category] !== 0) summary[row.level][row.category] = 0;
    summary[row.level][row.category] += 1;
    if (row.severity === "NEEDS_SOURCE_REVIEW") summary[row.level].NEEDS_SOURCE_REVIEW += 1;
  });
  const findings = issues.filter((row) => row.severity === "FINDING");
  const needs = issues.filter((row) => row.severity === "NEEDS_SOURCE_REVIEW");
  const reviews = issues.filter((row) => row.severity === "REVIEW");
  const observations = issues.filter((row) => row.severity === "OBSERVATION");
  const sourceResults = [];
  if (source) {
    LEVEL_FILES.forEach((file) => {
      const level = file.toUpperCase();
      recordsByLevel[file].forEach((entry, index) => {
        const de = fieldOf(entry, "de");
        const article = fieldOf(entry, "de_article");
        const plural = fieldOf(entry, "de_plural");
        const lv = fieldOf(entry, "lv");
        const result = sourceForRecord({
          de: de.badType ? "" : de.raw,
          de_article: article.badType ? "" : article.raw,
          de_plural: plural.badType ? "" : plural.raw
        }, source.entries);
        sourceResults.push({
          level,
          index,
          de: de.badType ? "" : de.raw,
          de_article: article.badType ? "" : article.raw,
          de_plural: plural.badType ? "" : plural.raw,
          lv: lv.badType ? "" : lv.raw,
          verdict: result.verdict,
          differs: result.differs,
          needsSourceReview: result.needsSourceReview,
          evidence: result.evidence
        });
        if (result.needsSourceReview) {
          needs.push(issue({
            severity: "NEEDS_SOURCE_REVIEW",
            category: result.verdict,
            level,
            index,
            de: de.badType ? "" : de.raw,
            de_article: article.badType ? "" : article.raw,
            de_plural: plural.badType ? "" : plural.raw,
            lv: lv.badType ? "" : lv.raw,
            detail: result.verdict
          }));
          summary[level].NEEDS_SOURCE_REVIEW += 1;
          summary[level][result.verdict] = (summary[level][result.verdict] || 0) + 1;
        }
      });
    });
    needs.sort(compareIssue);
  }
  const pass1 = "CHECKED";
  const pass2 = source ? "CHECKED" : "NOT_RUN";
  const verdict = pass2 === "CHECKED" && findings.length === 0 && needs.length === 0 ? "PASS" : "PARTIAL";
  const hashes = datasetHashes();
  const originMain = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  const branch = execSync("git rev-parse --abbrev-ref HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const consulted = "cursor/master-version-numbering-f86b";
  let consultedSha = "";
  try {
    consultedSha = execSync(`git rev-parse ${consulted}`, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch (error) {
    consultedSha = "";
  }
  const baseline = {
    masterVersionOnAuditedTree: masterVersion(),
    standardConsulted: "1.19",
    standardConsultedBranch: consulted,
    standardConsultedSha: consultedSha,
    section7158B: "ABSENT",
    auditMode: "LV_DE_INTERNAL_VERIFY",
    originMainSha: originMain,
    branch,
    date: new Date().toISOString().slice(0, 10),
    datasetProductionSha: hashes.combined,
    datasetFiles: hashes.files,
    lastFinalClosure: "NOT_RECORDED_FOR_LV_DE_WORDLIST",
    lastFinalClosureMainSha: "",
    lastFinalClosureDatasetBlob: "",
    unmergedClosureOrRepairFound: "NOT_CHECKED",
    baselineStatus: pass2 === "NOT_RUN" ? "SOURCE_PASS_NOT_RUN" : verdict,
    ownerHistoryAvailable: "NO",
    ownerHistoryFilesLoaded: 0,
    ownerApprovedFields: "0/0/0/0",
    ownerHistoryGate: "NOT_RUN",
    rawAuditHistoryGate: "NOT_APPLICABLE",
    discoveryChurnRate: 0,
    auditDiscoveryNonReproducibility: 0,
    deReadOnly: "YES",
    pass1,
    pass2,
    sourceFile: source ? source.path : "",
    sourceSha256: source ? source.hash : "",
    recordCount,
    verdict
  };
  const posBuckets = ["lietvārds", "īpašības vārds", "vietniekvārds", "darbības vārda frāze", "singulare tantum", "plurale tantum", "nezināms"];
  const emptyByPos = { EMPTY_ARTICLE: {}, EMPTY_PLURAL: {} };
  posBuckets.forEach((pos) => {
    emptyByPos.EMPTY_ARTICLE[pos] = 0;
    emptyByPos.EMPTY_PLURAL[pos] = 0;
  });
  issues.filter((row) => row.category === "EMPTY_ARTICLE" || row.category === "EMPTY_PLURAL").forEach((row) => {
    const pos = emptyByPos[row.category][row.pos] == null ? "nezināms" : row.pos;
    emptyByPos[row.category][pos] += 1;
  });
  const body = {
    statement: "Šis audits pārbauda LV-DE pret norādīto avotu. Bez avotu faila DE pareizība NAV pierādīta.",
    baseline,
    summary,
    emptyByPos,
    counts: {
      FINDING: findings.length,
      NEEDS_SOURCE_REVIEW: needs.length,
      REVIEW: reviews.length,
      OBSERVATION: observations.length,
      sourceVerdicts: source
        ? countBy(sourceResults, (row) => row.verdict)
        : { NOT_RUN: recordCount }
    },
    findings,
    needsSourceReview: needs,
    reviews,
    observations,
    sourceResults
  };
  return { body, markdown: renderMarkdown(body) };
}

function renderMarkdown(body) {
  const lines = [];
  const push = (text) => lines.push(text);
  const base = body.baseline;
  push("# LV-DE verify");
  push("");
  push(body.statement);
  push("");
  push("DE lauki netiek laboti. Skripts neizvēlas pareizo formu un neizsauc modeli. Avota fails repozitorijā netiek kopēts.");
  push("");
  push("```text");
  push(`MASTER VERSION: ${base.masterVersionOnAuditedTree}`);
  push(`STANDARD CONSULTED: ${base.standardConsulted} (${base.standardConsultedBranch} ${base.standardConsultedSha})`);
  push("SECTION 7.158.B: ABSENT");
  push(`AUDIT MODE: ${base.auditMode}`);
  push(`ORIGIN_MAIN_SHA: ${base.originMainSha}`);
  push(`BRANCH: ${base.branch}`);
  push(`DATE: ${base.date}`);
  push(`DATASET_PRODUCTION_SHA/BLOB: ${base.datasetProductionSha}`);
  push(`LAST FINAL CLOSURE: ${base.lastFinalClosure}`);
  push(`LAST FINAL CLOSURE MAIN SHA: ${base.lastFinalClosureMainSha}`);
  push(`LAST FINAL CLOSURE DATASET BLOB: ${base.lastFinalClosureDatasetBlob}`);
  push(`UNMERGED CLOSURE/REPAIR FOUND: ${base.unmergedClosureOrRepairFound}`);
  push(`BASELINE STATUS: ${base.baselineStatus}`);
  push(`OWNER HISTORY AVAILABLE: ${base.ownerHistoryAvailable}`);
  push(`OWNER HISTORY FILES LOADED: ${base.ownerHistoryFilesLoaded}`);
  push(`OWNER APPROVED FIELDS TOTAL/CHECKED/MATCHING/DRIFTED: ${base.ownerApprovedFields}`);
  push(`OWNER HISTORY GATE: ${base.ownerHistoryGate}`);
  push(`RAW AUDIT HISTORY GATE: ${base.rawAuditHistoryGate}`);
  push(`DISCOVERY CHURN RATE: ${base.discoveryChurnRate}`);
  push(`AUDIT_DISCOVERY_NON_REPRODUCIBILITY: ${base.auditDiscoveryNonReproducibility}`);
  push(`DE READ-ONLY: ${base.deReadOnly}`);
  push("```");
  push("");
  push("Piemērotais standarts ir §1.2, §7.153, §7.158 un §7.158.A. §7.158.B lokālajā MASTER 1.19 tekstā nav. Auditējamā koka MASTER fails ir versija uz `origin/main`. Vārdšķira tiek piešķirta tikai no datiem: `de_article` ir `der`, `die` vai `das`, vai `de_plural` sākas ar `die `, dod `lietvārds`. Citas vārdšķiras datos nav atzīmētas, tāpēc tās netiek uzminētas. `singulare tantum` un `plurale tantum` netiek piešķirti.");
  push("");
  push("## Kopsavilkums");
  push("");
  push("| līmenis | ieraksti | ARTICLE_FORMAT | PLURAL_FORMAT | DUPLICATE_IN_LEVEL | DUPLICATE_ACROSS_LEVELS | SAME_DE_DIFFERENT_ARTICLE | EMPTY_ARTICLE | EMPTY_PLURAL | PLURAL_STEM_CHECK | CASE_AND_WHITESPACE | FOREIGN_SCRIPT | LV_DIACRITIC | NEEDS_SOURCE_REVIEW |");
  push("|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
  const totals = {
    records: 0, ARTICLE_FORMAT: 0, PLURAL_FORMAT: 0, DUPLICATE_IN_LEVEL: 0, DUPLICATE_ACROSS_LEVELS: 0,
    SAME_DE_DIFFERENT_ARTICLE: 0, EMPTY_ARTICLE: 0, EMPTY_PLURAL: 0, PLURAL_STEM_CHECK: 0,
    CASE_AND_WHITESPACE: 0, FOREIGN_SCRIPT: 0, LV_DIACRITIC: 0, NEEDS_SOURCE_REVIEW: 0
  };
  Object.keys(body.summary).forEach((level) => {
    const row = body.summary[level];
    push(`| ${level} | ${row.records} | ${row.ARTICLE_FORMAT} | ${row.PLURAL_FORMAT} | ${row.DUPLICATE_IN_LEVEL} | ${row.DUPLICATE_ACROSS_LEVELS} | ${row.SAME_DE_DIFFERENT_ARTICLE} | ${row.EMPTY_ARTICLE} | ${row.EMPTY_PLURAL} | ${row.PLURAL_STEM_CHECK} | ${row.CASE_AND_WHITESPACE} | ${row.FOREIGN_SCRIPT} | ${row.LV_DIACRITIC} | ${row.NEEDS_SOURCE_REVIEW} |`);
    Object.keys(totals).forEach((key) => { totals[key] += row[key] || 0; });
  });
  push(`| summa | ${totals.records} | ${totals.ARTICLE_FORMAT} | ${totals.PLURAL_FORMAT} | ${totals.DUPLICATE_IN_LEVEL} | ${totals.DUPLICATE_ACROSS_LEVELS} | ${totals.SAME_DE_DIFFERENT_ARTICLE} | ${totals.EMPTY_ARTICLE} | ${totals.EMPTY_PLURAL} | ${totals.PLURAL_STEM_CHECK} | ${totals.CASE_AND_WHITESPACE} | ${totals.FOREIGN_SCRIPT} | ${totals.LV_DIACRITIC} | ${totals.NEEDS_SOURCE_REVIEW} |`);
  push("");
  push(`FINDING ${body.counts.FINDING}. NEEDS_SOURCE_REVIEW ${body.counts.NEEDS_SOURCE_REVIEW}. REVIEW ${body.counts.REVIEW}. OBSERVATION ${body.counts.OBSERVATION}.`);
  push("");
  push("NEEDS_SOURCE_REVIEW skaita rindas, kurām vārdšķira no datiem ir `nezināms` un artikuls vai daudzskaitlis ir tukšs. Tās pašas rindas ir arī EMPTY_ARTICLE vai EMPTY_PLURAL kolonnā. Tukšs daudzskaitlis pie `lietvārds` ir OBSERVATION, nevis pierādīta kļūda un nevis singulare tantum.");
  push("");
  push("## 1. kārta");
  push("");
  push("PASS1: CHECKED");
  push("");
  push("Iekšējā pārbaude salīdzina lauku formu, dublikātus, reģistru, rakstību un daudzskaitļa sakni. PLURAL_STEM_CHECK nesakritība ir REVIEW. SAME_DE_DIFFERENT_ARTICLE ir REVIEW; ja `lv` atšķiras, karogs ir POSSIBLE_HOMONYM.");
  push("");
  push("## 2. kārta");
  push("");
  push(base.pass2 === "CHECKED"
    ? `SOURCE_PASS: CHECKED`
    : "SOURCE_PASS: NOT_RUN");
  push("");
  if (base.pass2 === "NOT_RUN") {
    push("Avota fails nav dots. Nevienam ierakstam nav verdikta PASS.");
  } else {
    push(`Avota ceļš ${base.sourceFile}. SHA-256 ${base.sourceSha256}. Avota saturs repozitorijā nav iekopēts.`);
    push("");
    push("| verdikts | skaits |");
    push("|---|---:|");
    Object.keys(body.counts.sourceVerdicts).sort().forEach((name) => {
      push(`| ${name} | ${body.counts.sourceVerdicts[name]} |`);
    });
    push("");
    push("MISMATCH norāda atšķirīgo lauku. Tā nav ieteiktā jaunā vērtība.");
  }
  push("");
  push("## FINDING");
  push("");
  if (!body.findings.length) push("Nav.");
  body.findings.forEach((row) => push(lineOf(row)));
  push("");
  push("## NEEDS_SOURCE_REVIEW");
  push("");
  if (!body.needsSourceReview.length) push("Nav.");
  body.needsSourceReview.forEach((row) => push(lineOf(row)));
  push("");
  push("## Kategoriju piemēri");
  push("");
  [
    "ARTICLE_FORMAT", "PLURAL_FORMAT", "DUPLICATE_IN_LEVEL", "DUPLICATE_ACROSS_LEVELS",
    "SAME_DE_DIFFERENT_ARTICLE", "EMPTY_ARTICLE", "PLURAL_STEM_CHECK", "CASE_AND_WHITESPACE",
    "FOREIGN_SCRIPT", "LV_DIACRITIC", "RECORD_SHAPE"
  ].forEach((category) => {
    const rows = [...body.findings, ...body.reviews, ...body.observations, ...body.needsSourceReview]
      .filter((row) => row.category === category)
      .sort(compareIssue);
    push(`### ${category}`);
    push("");
    push(`Skaits: ${rows.length}.`);
    push("");
    if (!rows.length) push("Nav.");
    examplesOf(rows, 10).forEach((row) => push(lineOf(row)));
    push("");
  });
  push("### EMPTY_PLURAL pēc vārdšķiras");
  push("");
  push("| vārdšķira | skaits |");
  push("|---|---:|");
  Object.keys(body.emptyByPos.EMPTY_PLURAL).forEach((pos) => {
    push(`| ${pos} | ${body.emptyByPos.EMPTY_PLURAL[pos]} |`);
  });
  push("");
  Object.keys(body.emptyByPos.EMPTY_PLURAL).forEach((pos) => {
    const rows = [...body.observations, ...body.needsSourceReview]
      .filter((row) => row.category === "EMPTY_PLURAL" && row.pos === pos)
      .sort(compareIssue);
    push(`#### ${pos}`);
    push("");
    if (!rows.length) push("Nav.");
    examplesOf(rows, 10).forEach((row) => push(lineOf(row)));
    push("");
  });
  push("### EMPTY_ARTICLE pēc vārdšķiras");
  push("");
  push("| vārdšķira | skaits |");
  push("|---|---:|");
  Object.keys(body.emptyByPos.EMPTY_ARTICLE).forEach((pos) => {
    push(`| ${pos} | ${body.emptyByPos.EMPTY_ARTICLE[pos]} |`);
  });
  push("");
  push("## STAGE RESULT");
  push("");
  push(`STAGE RESULT: ${base.verdict}`);
  push("");
  push("PASS ir iespējams tikai tad, ja abas kārtas ir izpildītas un nav FINDING vai NEEDS_SOURCE_REVIEW.");
  push("");
  return `${lines.join("\n")}`;
}

function loadLevelsFromDir(dir) {
  const records = {};
  LEVEL_FILES.forEach((level) => {
    const filePath = path.join(dir, `${level}.js`);
    records[level] = fs.existsSync(filePath) ? loadArray(filePath) : [];
  });
  return records;
}

function selfTest() {
  const failures = [];
  const expect = (ok, message) => { if (!ok) failures.push(message); };
  expect(pluralStemMatches("Apfel", "Äpfel"), "Apfel");
  expect(pluralStemMatches("Haus", "Häuser"), "Haus");
  expect(pluralStemMatches("Hund", "Hunde"), "Hund");
  expect(pluralStemMatches("Kind", "Kinder"), "Kind");
  expect(pluralStemMatches("Auto", "Autos"), "Autos");
  expect(pluralStemMatches("Lehrer", "Lehrer"), "Lehrer");
  expect(pluralStemMatches("Studentin", "Studentinnen"), "Studentinnen");
  expect(pluralStemMatches("Name", "Namen"), "Namen");
  expect(pluralStemMatches("Fluss", "Flüsse"), "Fluss");
  expect(!pluralStemMatches("Firma", "Firmen"), "Firma");
  expect(!pluralStemMatches("Bus", "Busse"), "Bus");
  const tmp = fs.mkdtempSync(path.join("/tmp", "lv-de-verify-"));
  const original = fs.readFileSync(path.join(ROOT, "data/a1.js"), "utf8");
  const before = sha256Text(original);
  const corrupted = original
    .replace("\"de_article\": \"der\"", "\"de_article\": \"dar\"")
    .replace("\"de_plural\": \"die ", "\"de_plural\": \"");
  const copyPath = path.join(tmp, "a1.js");
  fs.writeFileSync(copyPath, corrupted);
  const loaded = loadArray(copyPath);
  const found = [];
  loaded.forEach((entry, index) => classifyRecord("A1", index, entry).forEach((row) => found.push(row)));
  expect(found.some((row) => row.category === "ARTICLE_FORMAT" && row.detail === "dar"), "corrupt article");
  expect(found.some((row) => row.category === "PLURAL_FORMAT" && row.de_plural === "Äpfel"), "corrupt plural");
  expect(sha256File(path.join(ROOT, "data/a1.js")) === before, "data/a1.js unchanged");
  const sourcePath = path.join(tmp, "source.json");
  fs.writeFileSync(sourcePath, JSON.stringify([
    { source_id: "s1", lemma: "Haus", article: "das", plural: "die Häuser", pos: "noun", entry_ref: "p.1" },
    { source_id: "s2", lemma: "Apfel", article: "das", plural: "die Äpfel", pos: "noun", entry_ref: "p.2" },
    { source_id: "s3", lemma: "See", article: "der", plural: "die Seen", pos: "noun", entry_ref: "p.3" },
    { source_id: "s4", lemma: "See", article: "die", plural: "die Seen", pos: "noun", entry_ref: "p.4" }
  ]));
  const source = loadSource(sourcePath);
  const haus = sourceForRecord({ de: "Haus", de_article: "das", de_plural: "die Häuser" }, source.entries);
  const apfel = sourceForRecord({ de: "Apfel", de_article: "der", de_plural: "die Äpfel" }, source.entries);
  const see = sourceForRecord({ de: "See", de_article: "der", de_plural: "die Seen" }, source.entries);
  const missing = sourceForRecord({ de: "Wort", de_article: "das", de_plural: "die Wörter" }, source.entries);
  expect(haus.verdict === "MATCH" && haus.evidence[0].source_id === "s1" && haus.evidence[0].entry_ref === "p.1", "match");
  expect(apfel.verdict === "MISMATCH" && apfel.differs.includes("article") && apfel.evidence[0].entry_ref === "p.2", "mismatch");
  expect(see.verdict === "AMBIGUOUS" && see.needsSourceReview && see.evidence.length === 2, "ambiguous");
  expect(missing.verdict === "NOT_IN_SOURCE" && missing.needsSourceReview, "missing source");
  if (failures.length) {
    process.stderr.write(`${failures.join("\n")}\n`);
    process.exit(1);
  }
  process.stdout.write(`${JSON.stringify({ selfTest: "SELF_TEST_PASS", tmp, articleFindings: found.filter((row) => row.category === "ARTICLE_FORMAT").length, pluralFindings: found.filter((row) => row.category === "PLURAL_FORMAT").length })}\n`);
}

function assertCleanTree() {
  const diff = execSync("git diff -- data www/data languages ui.js scripts", { cwd: ROOT, encoding: "utf8" });
  if (diff !== "") throw new Error("git diff of data, www/data, languages, ui.js or scripts is not empty");
}

function main() {
  assertCleanTree();
  if (process.argv.includes("--self-test")) {
    selfTest();
    return;
  }
  const sourceArg = argValue("--source-file");
  const source = sourceArg ? loadSource(path.resolve(sourceArg)) : null;
  const records = loadLevelsFromDir(path.join(ROOT, "data"));
  const report = buildReport(records, source);
  fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
  fs.writeFileSync(OUT_JSON, `${JSON.stringify(report.body, null, 2)}\n`);
  fs.writeFileSync(OUT_MD, report.markdown);
  process.stdout.write(`${JSON.stringify({
    verdict: report.body.baseline.verdict,
    pass1: report.body.baseline.pass1,
    pass2: report.body.baseline.pass2,
    records: report.body.baseline.recordCount,
    finding: report.body.counts.FINDING,
    needsSourceReview: report.body.counts.NEEDS_SOURCE_REVIEW,
    review: report.body.counts.REVIEW,
    observation: report.body.counts.OBSERVATION
  })}\n`);
}

if (require.main === module) main();

module.exports = {
  classifyRecord,
  pluralStemMatches,
  sourceForRecord,
  loadSource
};
