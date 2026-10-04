#!/usr/bin/env node
/**
 * COPY-ONLY. Sets de_plural where Goethe lists one plural and the LV field is empty.
 * No network. No model. Does not change any field except de_plural.
 * Input CSV is reports/plural-source-check.csv from commit 9cdffb4173d61e17113a5dff3d0d20e42b844186
 * (SHA-256 32d86dc3018b2e595587a6b00da3b6be0043def57b99df8c19ff3d9852124d0a).
 * That CSV is not stored on this branch because it contains Duden grammar lines.
 * This script writes reports/goethe-plural-apply/decisions.csv and selection.md.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const LANGS = ["bg", "bs", "cs", "da", "en", "es", "et", "fi", "fr", "gr", "hr", "hu", "is", "it", "lb", "lt", "mk", "nb", "nl", "nn", "pl", "pt", "ro", "ru", "sk", "sl", "sq", "sr", "sv", "tr", "uk"];
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === "\"") {
        if (text[i + 1] === "\"") { cell += "\""; i += 1; }
        else quoted = false;
      } else cell += char;
    } else if (char === "\"") quoted = true;
    else if (char === ",") { row.push(cell); cell = ""; }
    else if (char === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; }
    else if (char !== "\r") cell += char;
  }
  if (cell.length || row.length) { row.push(cell); rows.push(row); }
  const header = rows.shift();
  return rows.filter((item) => item.length > 1).map((item) => Object.fromEntries(header.map((key, index) => [key, item[index] || ""])));
}

function formsOf(value) {
  return String(value || "").split(/\s+\|\s+/).map((part) => part.normalize("NFC").trim()).filter(Boolean);
}

function singleWord(de) {
  return /^[^\s]+$/.test(String(de || "").trim());
}

function decide(row) {
  if (row.goethe_status !== "PLURAL_FOUND") return null;
  if (String(row.de_plural || "").trim()) return null;
  if (!["der", "die", "das"].includes(row.de_article)) return null;
  if (!singleWord(row.de)) return null;
  const goetheForms = formsOf(row.goethe_plural);
  const dudenForms = formsOf(row.duden_plural);
  const selten = row.duden_status === "PLURAL_RARE" || /plural selten|selten plural/i.test(row.duden_quote || "");
  const sg = /\(Sg\.\)/.test(`${row.goethe_ref} ${row.goethe_plural}`);
  const base = {
    level: row.level,
    index: Number(row.index),
    de: row.de,
    de_article: row.de_article,
    goetheForm: goetheForms.join(" | "),
    goethePage: row.goethe_ref,
    dudenStatus: row.duden_status,
    dudenForm: dudenForms.join(" | ")
  };
  if (selten) return { ...base, decision: "NEPIEMĒROT", reason: "Duden Plural selten" };
  if (goetheForms.length !== 1) return { ...base, decision: "NEPIEMĒROT", reason: "Goethe forma nav viena" };
  const form = goetheForms[0];
  if (sg) return { ...base, decision: "NEPIEMĒROT", reason: "Goethe (Sg.)" };
  const plural = `die ${form}`;
  if (row.duden_status === "NOT_IN_SOURCE" || (row.duden_status === "NEEDS_SOURCE_REVIEW" && dudenForms.length === 0)) {
    return { ...base, decision: "PIEMĒROT", reason: `${row.duden_status} bez formas, Goethe viena forma`, plural };
  }
  if (dudenForms.includes(form)) return { ...base, decision: "PIEMĒROT", reason: "Duden forma sakrīt ar Goethe", plural };
  if (dudenForms.length) return { ...base, decision: "NEPIEMĒROT", reason: "SOURCES_DISAGREE" };
  return { ...base, decision: "NEPIEMĒROT", reason: `Duden ${row.duden_status} bez sakrītošas formas` };
}

function setPlural(filePath, index, de, article, plural) {
  const lines = fs.readFileSync(filePath, "utf8").split("\n");
  let seen = -1;
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i] !== "  {") continue;
    seen += 1;
    const fields = {};
    const fieldLine = {};
    let j = i + 1;
    while (j < lines.length && !lines[j].startsWith("  }")) {
      const match = lines[j].match(/^    "([^"]+)": (.*),?$/);
      if (match) {
        fields[match[1]] = match[2].replace(/,$/, "");
        fieldLine[match[1]] = j;
      }
      j += 1;
    }
    if (seen !== index) continue;
    const gotDe = JSON.parse(fields.de);
    const gotArticle = fields.de_article ? JSON.parse(fields.de_article) : "";
    if (gotDe !== de || gotArticle !== article) {
      throw new Error(`${filePath} index ${index} ir ${gotDe}/${gotArticle}, gaidīts ${de}/${article}`);
    }
    const current = fields.de_plural ? JSON.parse(fields.de_plural) : "";
    if (current && current !== plural) throw new Error(`${filePath} ${de} de_plural jau ir ${current}`);
    const line = `    "de_plural": ${JSON.stringify(plural)},`;
    if (current === plural) return false;
    if (fieldLine.de_plural != null) lines[fieldLine.de_plural] = line;
    else lines.splice(fieldLine.de_article + 1, 0, line);
    fs.writeFileSync(filePath, `${lines.join("\n")}`);
    return true;
  }
  throw new Error(`${filePath} nav indeksa ${index}`);
}

function filesFor(level) {
  const name = `${level.toLowerCase()}.js`;
  const out = [
    path.join(ROOT, "data", name),
    path.join(ROOT, "www/data", name)
  ];
  LANGS.forEach((lang) => {
    out.push(path.join(ROOT, "data", lang, name));
    out.push(path.join(ROOT, "www/data", lang, name));
  });
  return out;
}

function main() {
  const csvPath = path.join(ROOT, "reports/plural-source-check.csv");
  const rows = parseCsv(fs.readFileSync(csvPath, "utf8"));
  const decisions = rows.map(decide).filter(Boolean);
  const apply = decisions.filter((row) => row.decision === "PIEMĒROT");
  const skip = decisions.filter((row) => row.decision === "NEPIEMĒROT");
  apply.forEach((row) => {
    filesFor(row.level).forEach((filePath) => {
      setPlural(filePath, row.index, row.de, row.de_article, row.plural);
    });
  });
  const outDir = path.join(ROOT, "reports/goethe-plural-apply");
  fs.mkdirSync(outDir, { recursive: true });
  const header = ["level", "index", "de", "de_article", "goethe_form", "goethe_page", "duden_status", "duden_form", "decision", "reason", "de_plural"];
  const csv = [header.join(",")];
  decisions.forEach((row) => {
    csv.push([row.level, row.index, JSON.stringify(row.de), row.de_article, JSON.stringify(row.goetheForm), JSON.stringify(row.goethePage), row.dudenStatus, JSON.stringify(row.dudenForm), row.decision, JSON.stringify(row.reason), JSON.stringify(row.plural || "")].join(","));
  });
  fs.writeFileSync(path.join(outDir, "decisions.csv"), `${csv.join("\n")}\n`);
  const summary = [];
  summary.push("# Goethe daudzskaitļu piemērošana");
  summary.push("");
  summary.push(`PIEMĒROT: ${apply.length}. NEPIEMĒROT: ${skip.length}.`);
  summary.push("");
  summary.push("## PIEMĒROT");
  summary.push("");
  apply.forEach((row) => summary.push(`- ${row.level}[${row.index}] ${row.de} ${row.de_article} ${row.plural} | ${row.reason} | ${row.goethePage}`));
  summary.push("");
  summary.push("## NEPIEMĒROT");
  summary.push("");
  const byReason = new Map();
  skip.forEach((row) => {
    if (!byReason.has(row.reason)) byReason.set(row.reason, []);
    byReason.get(row.reason).push(row);
  });
  [...byReason.keys()].sort().forEach((reason) => {
    summary.push(`### ${reason} (${byReason.get(reason).length})`);
    summary.push("");
    byReason.get(reason).slice(0, 10).forEach((row) => summary.push(`- ${row.level}[${row.index}] ${row.de} Goethe=${row.goetheForm} Duden=${row.dudenStatus}:${row.dudenForm}`));
    summary.push("");
  });
  fs.writeFileSync(path.join(outDir, "selection.md"), `${summary.join("\n")}\n`);
  process.stdout.write(`${JSON.stringify({ candidates: decisions.length, apply: apply.length, skip: skip.length, applied: apply.map((row) => `${row.level}:${row.index}:${row.de}:${row.plural}`) })}\n`);
}

main();
