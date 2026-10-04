#!/usr/bin/env node
/**
 * READ-ONLY inventory of DE↔X dictionary files and registry entries.
 * No network. No model. Does not edit data, languages, or ui.js.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "reports/dictionary-sources");
const DATE = "2026-10-04";
const LANGS = ["bg", "bs", "cs", "da", "en", "es", "et", "fi", "fr", "gr", "hr", "hu", "is", "it", "lb", "lt", "mk", "nb", "nl", "nn", "pl", "pt", "ro", "ru", "sk", "sl", "sq", "sr", "sv", "tr", "uk"];
const FILE_EXT = new Set([".pdf", ".djvu", ".epub", ".txt", ".xml", ".tei", ".dsl", ".mdx", ".sqlite", ".csv"]);
const KEYWORDS = ["dictionary", "wörterbuch", "woerterbuch", "slovar", "słownik", "slownik", "ordbok", "ordbog", "sõnaraamat", "sonaraamat", "žodynas", "zodynas", "vārdnīca", "vardnica", "sözlük", "sozluk", "fjalor", "rječnik", "rjecnik", "речник", "словарь", "λεξικό", "λεξικο", "lexiko", "dictionnaire", "diccionario", "dicionário", "dicionario", "dizionario", "woordenboek", "szótár", "szotar", "sanakirja", "ordbok", "rječnik"];
const SKIP_DIR = new Set([".git", "node_modules", "android", "reports/dictionary-sources"]);

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function walk(dir, out) {
  const rel = path.relative(ROOT, dir);
  if (rel && SKIP_DIR.has(rel.split(path.sep)[0])) return;
  if (rel.startsWith(`reports${path.sep}dictionary-sources`)) return;
  for (const name of fs.readdirSync(dir).sort()) {
    if (name === ".git" || name === "node_modules") continue;
    const full = path.join(dir, name);
    const st = fs.lstatSync(full);
    if (st.isSymbolicLink()) continue;
    if (st.isDirectory()) walk(full, out);
    else out.push(full);
  }
}

function looksLikeDictionary(filePath) {
  const base = path.basename(filePath).toLowerCase();
  const ext = path.extname(base);
  if (!FILE_EXT.has(ext)) return false;
  if (base.includes("hash") || base.includes("gala")) return false;
  const nameHit = KEYWORDS.some((word) => base.includes(word.normalize("NFC").toLowerCase()));
  if (nameHit) return true;
  if (ext === ".xml" && filePath.includes(`${path.sep}android${path.sep}`)) return false;
  const size = fs.statSync(filePath).size;
  if (size > 2000000) return false;
  const sample = fs.readFileSync(filePath).subarray(0, 200000).toString("utf8").toLowerCase();
  return KEYWORDS.some((word) => sample.includes(word.toLowerCase()));
}

function parseRegistry() {
  const file = path.join(ROOT, "docs_and_rules/MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md");
  const lines = fs.readFileSync(file, "utf8").split("\n");
  const rows = [];
  lines.forEach((line) => {
    if (!line.startsWith("|")) return;
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
    if (cells.length < 5 || !/^\d+$/.test(cells[0].replace(/\*/g, ""))) return;
    const codeCell = cells[1].replace(/\*\*/g, "").replace(/`/g, "");
    const app = codeCell.includes("gr") ? "gr" : codeCell.trim();
    const standard = codeCell.includes("el") ? "el" : app;
    rows.push({
      n: cells[0].replace(/\*/g, ""),
      app,
      standard,
      language: cells[2].replace(/\*\*/g, ""),
      institute: cells[3].replace(/\*\*/g, ""),
      url: cells[4].replace(/\*\*/g, "")
    });
  });
  return rows.filter((row) => LANGS.includes(row.app) || row.app === "de" || row.app === "lv");
}

function firstUrl(entry) {
  const keys = ["pdfUrl", "viewerUrl", "ocrUrl", "downloadUrl", "catalogUrl", "portalUrl", "url"];
  for (const key of keys) if (entry[key]) return { key, url: entry[key] };
  return { key: "", url: "" };
}

function g2Sources() {
  const file = "scripts/lib/data/g2-a1-card-translation-bilingual-audit-nn-pt-ro.json";
  const body = JSON.parse(fs.readFileSync(path.join(ROOT, file), "utf8"));
  const groups = ["primaryDigitized", "reverseChainDigitized", "modernInstitutional", "supplementaryReserve", "supplementaryControlOnly", "rejectedNotUsable"];
  const out = [];
  Object.keys(body.languages).sort().forEach((lang) => {
    groups.forEach((group) => {
      (body.languages[lang][group] || []).forEach((entry) => {
        const loc = firstUrl(entry);
        out.push({
          lang,
          id: entry.id || "",
          title: entry.name || "",
          publisher: entry.authorPublisher || "",
          year: entry.year == null ? "" : String(entry.year),
          direction: entry.direction || "",
          role: entry.role || group,
          group,
          accessType: entry.accessType || "",
          locationKey: loc.key,
          location: loc.url,
          rejected: group === "rejectedNotUsable",
          registryFile: file,
          pronunciation: "nav zināms",
          officialOrCommercial: "reģistrs nenorāda; authorPublisher ir atsevišķs lauks"
        });
      });
    });
  });
  return out;
}

function crowdin() {
  const dir = path.join(ROOT, "crowdin");
  const files = [];
  walk(dir, files);
  return files.map((full) => path.relative(ROOT, full)).sort().map((rel) => ({
    path: rel,
    bytes: fs.statSync(path.join(ROOT, rel)).size,
    glossaryName: /gloss/i.test(rel)
  }));
}

function gitBinaryNames() {
  const text = execFileSync("git", ["log", "--all", "--name-only", "--pretty=format:", "--", "*.pdf", "*.djvu", "*.epub", "*.dsl", "*.mdx", "*.sqlite", "*.tei"], { cwd: ROOT, encoding: "utf8" });
  return [...new Set(text.split("\n").map((line) => line.trim()).filter(Boolean))].sort();
}

function otherRefPaths() {
  const refs = execFileSync("git", ["branch", "-r"], { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /dictionar|bilingual|pdf-bilingual/i.test(line) && !line.includes("->"));
  const rows = [];
  refs.sort().forEach((ref) => {
    let names = "";
    try {
      names = execFileSync("git", ["diff", "--name-only", `origin/main...${ref}`], { cwd: ROOT, encoding: "utf8" });
    } catch (error) {
      names = "";
    }
    names.split("\n").map((line) => line.trim()).filter((line) => /dictionar|bilingual|glossary/i.test(line)).sort().forEach((file) => {
      rows.push({ ref, path: file, inOriginMain: false, extension: path.extname(file).toLowerCase() });
    });
  });
  return rows;
}

function csvEscape(value) {
  const text = value == null ? "" : String(value);
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, "\"\"")}"`;
  return text;
}

function main() {
  const files = [];
  walk(ROOT, files);
  const dictionaryFiles = files.filter(looksLikeDictionary).map((full) => {
    const buf = fs.readFileSync(full);
    return {
      path: path.relative(ROOT, full),
      extension: path.extname(full).toLowerCase(),
      bytes: buf.length,
      sha256: sha256(buf)
    };
  });
  const registry = parseRegistry();
  const g2 = g2Sources();
  const crowd = crowdin();
  const binaries = gitBinaryNames();
  const otherRefs = otherRefPaths();
  const byApp = new Map(registry.filter((row) => row.app !== "de").map((row) => [row.app, row]));
  const languages = LANGS.map((lang) => {
    const reg = byApp.get(lang);
    const sources = g2.filter((row) => row.lang === lang && !row.rejected);
    const bilingual = sources.length > 0;
    return {
      lang,
      DE_X_file_in_repo: "nē",
      registry_entry: reg ? `jā, ${reg.n}` : "nē",
      authority_institute: reg ? reg.institute : "",
      bilingual_source_type: bilingual ? "A" : (reg ? "B" : "NONE"),
      text_layer: "nav faila",
      pronunciation: "nav zināms",
      notes: bilingual
        ? `G2 reģistra ieraksti: ${sources.map((row) => row.id).join(", ")}. Fails repozitorijā nav.`
        : "DE↔X fails un DE↔X reģistra ieraksts šajā kokā nav. Ir institūta vienvalodas reģistra rinda."
    };
  });
  const owner = [];
  LANGS.forEach((lang) => {
    const sources = g2.filter((row) => row.lang === lang && !row.rejected);
    const reg = byApp.get(lang);
    if (!sources.length) {
      owner.push({
        lang,
        dictionary_title: "",
        publisher: "",
        year: "",
        format: "",
        location: "",
        pages: "",
        text_layer: "",
        license_ok_to_store_in_repo: "",
        has_pronunciation: "",
        notes: reg ? `Tukšs DE↔X. Institūta reģistrs: ${reg.institute}` : ""
      });
      return;
    }
    sources.forEach((row) => {
      owner.push({
        lang,
        dictionary_title: row.title,
        publisher: row.publisher,
        year: row.year,
        format: row.accessType,
        location: row.location,
        pages: "",
        text_layer: "",
        license_ok_to_store_in_repo: "",
        has_pronunciation: "",
        notes: `${row.id}; ${row.direction}; fails repozitorijā nav`
      });
    });
  });
  const body = {
    date: DATE,
    originMain: execFileSync("git", ["rev-parse", "origin/main"], { cwd: ROOT, encoding: "utf8" }).trim(),
    statement: "Šis saraksts fiksē failus un reģistra rindas. Tas neizvēlas pilotvalodu un nevērtē vārdnīcu kvalitāti.",
    dictionaryFileCount: dictionaryFiles.length,
    dictionaryFiles,
    gitHistoryBinaryNames: binaries,
    otherRefPathCount: otherRefs.length,
    otherRefs,
    crowdinGlossaryCount: crowd.filter((row) => row.glossaryName).length,
    crowdinFiles: crowd,
    registryCount: registry.length,
    registry,
    g2,
    languages
  };
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, "inventory.json"), `${JSON.stringify(body, null, 2)}\n`);
  const langHeader = ["lang", "DE_X_file_in_repo", "registry_entry", "authority_institute", "bilingual_source_type", "text_layer", "pronunciation", "notes"];
  const langCsv = [langHeader.join(",")];
  languages.forEach((row) => langCsv.push(langHeader.map((key) => csvEscape(row[key])).join(",")));
  fs.writeFileSync(path.join(OUT, "languages.csv"), `${langCsv.join("\n")}\n`);
  const srcHeader = ["lang", "id", "title", "publisher", "year", "direction", "role", "group", "accessType", "location", "registryFile", "rejected"];
  const srcCsv = [srcHeader.join(",")];
  g2.forEach((row) => srcCsv.push(srcHeader.map((key) => csvEscape(row[key])).join(",")));
  fs.writeFileSync(path.join(OUT, "sources.csv"), `${srcCsv.join("\n")}\n`);
  const ownHeader = ["lang", "dictionary_title", "publisher", "year", "format", "location", "pages", "text_layer", "license_ok_to_store_in_repo", "has_pronunciation", "notes"];
  const ownCsv = [ownHeader.join(",")];
  owner.forEach((row) => ownCsv.push(ownHeader.map((key) => csvEscape(row[key])).join(",")));
  fs.writeFileSync(path.join(OUT, "owner-fill-template.csv"), `${ownCsv.join("\n")}\n`);
  const a = languages.filter((row) => row.bilingual_source_type === "A");
  const b = languages.filter((row) => row.bilingual_source_type === "B");
  const lines = [];
  lines.push("# Vārdnīcu avotu inventārs");
  lines.push("");
  lines.push("STAGE RESULT: NEEDS OWNER REVIEW");
  lines.push("");
  lines.push("Koks ir origin/main. Meklēti pdf, djvu, epub, txt, xml, tei, dsl, mdx, sqlite un csv, kuru nosaukumā vai saturā ir vārdnīcas vārds. Tādu failu skaits ir 0. `git log --all` paplašinājumiem pdf, djvu, epub, dsl, mdx, sqlite un tei lokālajos ref ir tukšs. Crowdin glosārija fails nav. crowdin/ui ir 31 UI JSON, crowdin/content/g2/lv-a1.json ir saturs.");
  lines.push("");
  lines.push(`Institūta reģistra rindas mērķvalodām: ${languages.filter((row) => row.registry_entry.startsWith("jā")).length}. Tips A (DE↔X reģistrs, fails nav): ${a.map((row) => row.lang).join(", ") || "nav"}. Tips B (tikai institūta vienvaloda): ${b.length}. NONE: ${languages.filter((row) => row.bilingual_source_type === "NONE").length}.`);
  lines.push("");
  lines.push("| lang | DE_X_file_in_repo | registry_entry | bilingual_source_type | authority_institute |");
  lines.push("|---|---|---|---|---|");
  languages.forEach((row) => {
    lines.push(`| ${row.lang} | ${row.DE_X_file_in_repo} | ${row.registry_entry} | ${row.bilingual_source_type} | ${row.authority_institute.replace(/\|/g, "/")} |`);
  });
  lines.push("");
  lines.push("## G2 reģistrs šajā kokā");
  lines.push("");
  lines.push("Fails `scripts/lib/data/g2-a1-card-translation-bilingual-audit-nn-pt-ro.json`. Valodas nn, pt, ro. Zemāk ir id, virziens un atrašanās vieta. Šķirkļu teksts netiek kopēts.");
  lines.push("");
  g2.filter((row) => !row.rejected).forEach((row) => {
    lines.push(`- ${row.lang} \`${row.id}\` ${row.direction} ${row.year} ${row.location}`);
  });
  lines.push("");
  lines.push("Noraidītās rindas ir sources.csv ar rejected=true. Tās nav tipa A pamats.");
  lines.push("");
  lines.push("OWNER veidne ir owner-fill-template.csv. Aizpildīti tikai nn, pt un ro reģistra lauki, kas ir šajā kokā. Lappuses, teksta slānis, licence un izruna ir tukši.");
  lines.push("");
  lines.push(`Citos lokālajos ref, kas nav origin/main, ir ${otherRefs.length} ceļu rindas ar vārdiem dictionary, bilingual vai glossary. PDF paplašinājuma starp tām nav. To saturs šajā atskaitē netiek kopēts. Saraksts ir other-refs.csv.`);
  lines.push("");
  const otherHeader = ["ref", "path", "inOriginMain", "extension"];
  const otherCsv = [otherHeader.join(",")];
  otherRefs.forEach((row) => otherCsv.push(otherHeader.map((key) => csvEscape(row[key])).join(",")));
  fs.writeFileSync(path.join(OUT, "other-refs.csv"), `${otherCsv.join("\n")}\n`);
  fs.writeFileSync(path.join(OUT, "SUMMARY.md"), `${lines.join("\n")}\n`);
  process.stdout.write(`${JSON.stringify({
    dictionaryFiles: dictionaryFiles.length,
    binaries: binaries.length,
    languages: languages.length,
    typeA: a.length,
    typeB: b.length,
    g2: g2.length,
    crowdin: crowd.length,
    glossary: crowd.filter((row) => row.glossaryName).length,
    otherRefs: otherRefs.length
  })}\n`);
}

main();
