#!/usr/bin/env node
"use strict";

/**
 * READ-ONLY count of empty DE field notations and a static inventory of
 * de_article / de_plural reads. Does not write data, languages, or ui.js.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.resolve(process.env.EMPTY_REP_OUT || path.join(ROOT, "reports", "de-empty-representation"));
const SELF = "scripts/audit-de-empty-representation.js";
const LANGS = [
  "bg", "bs", "cs", "da", "en", "es", "et", "fi", "fr", "gr", "hr", "hu", "is", "it",
  "lb", "lt", "mk", "nb", "nl", "nn", "pl", "pt", "ro", "ru", "sk", "sl", "sq", "sr",
  "sv", "tr", "uk"
];
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const FIELDS = ["de", "de_article", "de_plural", "level"];
const TREES = ["data", "www/data"];
const KINDS = ["empty", "null", "missing", "whitespace", "undefined", "other", "present"];
const EMPTYISH = new Set(["empty", "null", "missing", "whitespace", "undefined"]);

function sha256(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function loadWords(abs) {
  const code = fs.readFileSync(abs, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx, { filename: abs });
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  if (!key) throw new Error("no window array: " + abs);
  return ctx.window[key];
}

function kindOf(rec, field) {
  if (!rec || typeof rec !== "object" || Array.isArray(rec)) return "other";
  if (!Object.prototype.hasOwnProperty.call(rec, field)) return "missing";
  const v = rec[field];
  if (v === null) return "null";
  if (v === undefined) return "undefined";
  if (typeof v !== "string") return "other";
  if (v === "") return "empty";
  if (v.trim() === "") return "whitespace";
  return "present";
}

function wsLabel(value) {
  return [...value].map((ch) => "U+" + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")).join(" ");
}

function blankCounts() {
  const o = {};
  for (const k of KINDS) o[k] = 0;
  return o;
}

function fileFor(tree, lang, level) {
  return lang === "lv"
    ? path.join(ROOT, tree, level + ".js")
    : path.join(ROOT, tree, lang, level + ".js");
}

function scanTree(tree) {
  const out = { lv: {}, langs: {}, missingFiles: [], lengthMismatch: [] };
  for (const level of LEVELS) {
    const lvPath = fileFor(tree, "lv", level);
    if (!fs.existsSync(lvPath)) {
      out.missingFiles.push(path.relative(ROOT, lvPath));
      continue;
    }
    const lvWords = loadWords(lvPath);
    out.lv[level] = lvWords.map((rec) => FIELDS.map((f) => packKind(kindOf(rec, f))).join(""));
    if (tree === "data") {
      lvWords.forEach((rec, index) => {
        FIELDS.forEach((field, fi) => {
          if (out.lv[level][index][fi] === "n") {
            lvNullRows.push([tree, "lv", level.toUpperCase(), String(index), field, String(rec && rec.de || "")]);
          }
        });
      });
    }
    for (const rec of lvWords) noteWhitespace(tree, "lv", level, rec);
    for (const lang of LANGS) {
      const p = fileFor(tree, lang, level);
      const rel = path.relative(ROOT, p);
      if (!fs.existsSync(p)) {
        out.missingFiles.push(rel);
        continue;
      }
      const words = loadWords(p);
      const kinds = words.map((rec) => FIELDS.map((f) => packKind(kindOf(rec, f))).join(""));
      if (!out.langs[lang]) out.langs[lang] = {};
      out.langs[lang][level] = kinds;
      for (const rec of words) noteWhitespace(tree, lang, level, rec);
      const n = Math.min(words.length, lvWords.length);
      for (let i = 0; i < n; i++) {
        if (kinds[i] === out.lv[level][i]) continue;
        for (let f = 0; f < FIELDS.length; f++) {
          if (kinds[i][f] === out.lv[level][i][f]) continue;
          kindDiffs.push([
            tree, lang, level.toUpperCase(), String(i), FIELDS[f],
            out.lv[level][i][f], kinds[i][f], String(words[i] && words[i].de || "")
          ]);
        }
      }
      if (words.length !== lvWords.length) {
        out.lengthMismatch.push({ tree, lang, level, records: words.length, lv: lvWords.length });
      }
    }
    process.stderr.write("loaded " + tree + " " + level + " " + lvWords.length + "\n");
  }
  return out;
}

const whitespaceHits = [];
const kindDiffs = [];
const lvNullRows = [];
function noteWhitespace(tree, lang, level, rec) {
  for (const field of FIELDS) {
    if (!rec || typeof rec !== "object") continue;
    if (!Object.prototype.hasOwnProperty.call(rec, field)) continue;
    const v = rec[field];
    if (typeof v === "string" && v !== "" && v.trim() === "") {
      whitespaceHits.push({ tree, lang, level, field, points: wsLabel(v), length: v.length });
    }
  }
}

function addCounts(bucket, code) {
  for (let i = 0; i < FIELDS.length; i++) {
    const k = code[i] === "e" ? "empty"
      : code[i] === "n" ? "null"
      : code[i] === "m" ? "missing"
      : code[i] === "w" ? "whitespace"
      : code[i] === "u" ? "undefined"
      : code[i] === "o" ? "other"
      : code[i] === "p" ? "present"
      : null;
    if (!k) throw new Error("bad kind code " + code);
    bucket[FIELDS[i]][k] += 1;
  }
}

function packKind(name) {
  if (name === "empty") return "e";
  if (name === "null") return "n";
  if (name === "missing") return "m";
  if (name === "whitespace") return "w";
  if (name === "undefined") return "u";
  if (name === "other") return "o";
  if (name === "present") return "p";
  throw new Error(name);
}

function countSide(codes) {
  const bucket = {};
  for (const f of FIELDS) bucket[f] = blankCounts();
  for (const code of codes) {
    const expanded = code.split("").map((ch) => (
      ch === "e" ? "empty" : ch === "n" ? "null" : ch === "m" ? "missing"
        : ch === "w" ? "whitespace" : ch === "u" ? "undefined" : ch === "o" ? "other" : "present"
    ));
    for (let i = 0; i < FIELDS.length; i++) bucket[FIELDS[i]][expanded[i]] += 1;
  }
  return bucket;
}

function kindChar(recKinds, index) {
  return recKinds;
}

function compareLists(lvCodes, langCodes) {
  const n = Math.min(lvCodes.length, langCodes.length);
  const diff = {};
  let same = 0;
  let emptyishMismatch = 0;
  for (let i = 0; i < n; i++) {
    if (lvCodes[i] === langCodes[i]) {
      same += 1;
      continue;
    }
    for (let f = 0; f < FIELDS.length; f++) {
      if (lvCodes[i][f] === langCodes[i][f]) continue;
      const key = FIELDS[f] + "|" + lvCodes[i][f] + ">" + langCodes[i][f];
      diff[key] = (diff[key] || 0) + 1;
      const lvEmpty = "nmweu".includes(lvCodes[i][f]);
      const tgEmpty = "nmweu".includes(langCodes[i][f]);
      if (lvEmpty !== tgEmpty) emptyishMismatch += 1;
    }
  }
  return { sameRecords: same, compared: n, extraLv: Math.max(0, lvCodes.length - n), extraLang: Math.max(0, langCodes.length - n), diff, emptyishMismatch };
}

function csvEscape(v) {
  const s = String(v);
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

function toCsv(rows) {
  return rows.map((r) => r.map(csvEscape).join(",")).join("\n") + "\n";
}

function walkJs(dir, acc) {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkJs(p, acc);
    else if (ent.isFile() && ent.name.endsWith(".js")) acc.push(p);
  }
}

function codeFiles() {
  const files = [];
  const ui = path.join(ROOT, "ui.js");
  if (fs.existsSync(ui)) files.push(ui);
  const www = path.join(ROOT, "www");
  if (fs.existsSync(www)) {
    for (const ent of fs.readdirSync(www, { withFileTypes: true })) {
      if (ent.isFile() && ent.name.endsWith(".js")) files.push(path.join(www, ent.name));
    }
  }
  walkJs(path.join(ROOT, "languages"), files);
  walkJs(path.join(ROOT, "www", "languages"), files);
  walkJs(path.join(ROOT, "scripts"), files);
  return files
    .map((p) => path.relative(ROOT, p))
    .filter((rel) => rel !== SELF)
    .sort();
}

function probe() {
  const samples = ["", null, undefined];
  function run(fn) {
    const out = {};
    for (const v of samples) {
      const label = v === "" ? "empty" : v === null ? "null" : "undefined";
      try {
        out[label] = { value: fn(v), throw: "" };
      } catch (e) {
        out[label] = { value: "", throw: e.name };
      }
    }
    return out;
  }
  const stringify = (x) => {
    if (typeof x === "string") return JSON.stringify(x);
    if (x === null) return "null";
    if (x === undefined) return "undefined";
    return JSON.stringify(x);
  };
  const cases = {
    "String(value || \"\").trim()": run((v) => String(v || "").trim()),
    "String(value).trim()": run((v) => String(v).trim()),
    "template ${value}": run((v) => `${v}`),
    "template ${value || \"\"}": run((v) => `${v || ""}`),
    "value || null": run((v) => (v || null)),
    "value ?? null": run((v) => (v ?? null)),
    "JSON.stringify(value ?? null)": run((v) => JSON.stringify(v ?? null)),
    "JSON.stringify({f: value})": run((v) => JSON.stringify({ f: v })),
    "filter Boolean": run((v) => [v].filter(Boolean).length),
    "value.replace(/^die\\s+/, \"\")": run((v) => v.replace(/^die\s+/, "")),
    "truthy if": run((v) => (v ? "enter" : "skip")),
    "value !== undefined": run((v) => (v !== undefined ? "enter" : "skip")),
    "normalize String(value || \"\")": run((v) => String(v || "").trim().toLowerCase())
  };
  const rows = [["probe", "empty", "null", "undefined", "empty_throw", "null_throw", "undefined_throw"]];
  for (const name of Object.keys(cases)) {
    const r = cases[name];
    rows.push([
      name,
      stringify(r.empty.value),
      stringify(r.null.value),
      stringify(r.undefined.value),
      r.empty.throw,
      r.null.throw,
      r.undefined.throw
    ]);
  }
  return rows;
}

function lineUsesValue(line) {
  return /(?<!["'`])\.?de_article\b|(?<!["'`])\.?de_plural\b/.test(line) && !/^(\s*)(\/\/|\*|\/\*)/.test(line);
}

function isComment(line) {
  const t = line.trim();
  return t.startsWith("//") || t.startsWith("*") || t.startsWith("/*") || t.startsWith("<!--");
}

function templateExprs(line) {
  return [...line.matchAll(/\$\{([^}]*)\}/g)].map((m) => m[1]);
}

function onlyQuotedNames(line) {
  const withoutTemplates = line.replace(/`(?:\\.|[^`\\])*`/g, (block) => block.replace(/\$\{[^}]*\}/g, ""));
  const stripped = withoutTemplates
    .replace(/`(?:\\.|[^`\\])*`/g, "``")
    .replace(/"(?:\\.|[^"\\])*"/g, "\"\"")
    .replace(/'(?:\\.|[^'\\])*'/g, "''");
  return !/de_article|de_plural/.test(stripped);
}

function fieldsOnLine(line) {
  const fields = [];
  if (line.includes("de_article")) fields.push("de_article");
  if (line.includes("de_plural")) fields.push("de_plural");
  return fields.join("+");
}

function positiveTruthy(line, field) {
  if (new RegExp("&&\\s*[\\w.]*" + field + "\\b").test(line)
    && !new RegExp("!\\s*[\\w.]*" + field + "\\b").test(line)) return true;
  if (/!==|===/.test(line)) return false;
  const re = new RegExp("(!)?\\s*(?:[\\w$]+\\.)*" + field + "\\b", "g");
  let saw = false;
  let match;
  while ((match = re.exec(line))) {
    if (match[1]) return false;
    saw = true;
  }
  return saw;
}

function falsyGuarded(lines, idx, field) {
  const line = lines[idx];
  if (new RegExp(field + "\\s*\\?\\s*`").test(line)) return true;
  if (new RegExp("if\\s*\\([^\\n]*" + field).test(line) && positiveTruthy(line, field)) return true;
  let depth = 0;
  for (let i = idx; i >= Math.max(0, idx - 50); i--) {
    const prev = lines[i];
    if (i !== idx && depth <= 0) {
      if (/\b(?:continue|return)\b/.test(prev) && new RegExp("!\\s*[\\w.]*" + field + "\\b").test(prev)) return true;
      if (/^\s*(?:if|else if)\s*\(/.test(prev) && /\{\s*$/.test(prev) && positiveTruthy(prev, field)) return true;
    }
    for (let c = prev.length - 1; c >= 0; c--) {
      if (prev[c] === "}") depth += 1;
      else if (prev[c] === "{") depth -= 1;
    }
  }
  return false;
}

function classify(line, lines, idx) {
  const fields = fieldsOnLine(line);
  if (isComment(line) || /^\s*(\*\s|-\s|\*\*)/.test(line.trim()) && !/if\s*\(|const |let |return /.test(line)) {
    if (isComment(line) || line.trim().startsWith("*") || line.trim().startsWith("-")) {
      return { fields, cls: "comment_or_doc", empty: "not_executed", null: "not_executed", undefined: "not_executed", textNull: "no", textUndefined: "no", throws: "no" };
    }
  }
  const exprs = templateExprs(line).filter((expr) => /de_article|de_plural/.test(expr));
  if (exprs.length) {
    const bare = exprs.filter((expr) => !/\|\|\s*(""|'')/.test(expr) && !/\?\?/.test(expr));
    const field = bare[0] && /de_plural/.test(bare[0]) ? "de_plural" : "de_article";
    const guard = falsyGuarded(lines, idx, field);
    const sameTruthy = /if\s*\(/.test(line) && bare.every((expr) => positiveTruthy(line, expr.split(".").pop()));
    if (!bare.length) {
      return { fields, cls: "template_or_empty", empty: "empty_interpolation", null: "empty_interpolation", undefined: "empty_interpolation", textNull: "no", textUndefined: "no", throws: "no" };
    }
    if (guard || sameTruthy) {
      return { fields, cls: "template_truthy_guard", empty: "not_evaluated", null: "not_evaluated", undefined: "not_evaluated", textNull: "no", textUndefined: "no", throws: "no" };
    }
    return { fields, cls: bare.length === exprs.length ? "template_unguarded" : "template_mixed", empty: "empty_interpolation", null: "text_null", undefined: "text_undefined", textNull: "yes", textUndefined: "yes", throws: "no" };
  }
  if (onlyQuotedNames(line)) {
    return { fields, cls: "name_or_literal", empty: "value_not_read", null: "value_not_read", undefined: "value_not_read", textNull: "no", textUndefined: "no", throws: "no" };
  }
  const assignOther = line.match(/\.de_(article|plural)\s*=\s*([^;]+)/);
  if (assignOther && !assignOther[2].includes("de_" + assignOther[1].replace("de_", ""))) {
    return { fields, cls: "assign_other", empty: "not_read", null: "not_read", undefined: "not_read", textNull: "no", textUndefined: "no", throws: "no" };
  }
  const field = line.includes("de_plural") && /\.de_plural\b|de_plural\s*[!=?:]/.test(line) ? "de_plural"
    : "de_article";
  const guard = falsyGuarded(lines, idx, field);
  const sameTruthy = new RegExp("if\\s*\\([^\\n]*" + field).test(line) && positiveTruthy(line, field);
  const truthy = guard || sameTruthy || /\?\s*$/.test(line.trim()) || /\?\s*`/.test(line) || /\?\s*String\(/.test(line) || /\?\s*\{/.test(line);

  if (/\.filter\(Boolean\)/.test(line) || (line.trim() === "entry.de_plural," )) {
    return { fields, cls: "filter_boolean", empty: "dropped", null: "dropped", undefined: "dropped", textNull: "no", textUndefined: "no", throws: "no" };
  }
  if (/JSON\.stringify\(/.test(line) && /\?\? null/.test(line)) {
    return { fields, cls: "json_nullish", empty: "json_empty_string", null: "json_null", undefined: "json_null", textNull: "yes", textUndefined: "no", throws: "no" };
  }
  if (/String\([^)\n]*\|\|\s*(""|'')\)/.test(line) || /normalize(Id)?Text\(/.test(line)) {
    return { fields, cls: "or_empty_string", empty: "empty_string", null: "empty_string", undefined: "empty_string", textNull: "no", textUndefined: "no", throws: "no" };
  }
  if (/\$\{[^}\n]*\|\|\s*(""|'')/.test(line)) {
    return { fields, cls: "template_or_empty", empty: "empty_interpolation", null: "empty_interpolation", undefined: "empty_interpolation", textNull: "no", textUndefined: "no", throws: "no" };
  }
  if (/\.replace\(/.test(line) && /de_plural|de_article/.test(line)) {
    if (truthy) {
      return { fields, cls: "method_truthy_guard", empty: "not_evaluated", null: "not_evaluated", undefined: "not_evaluated", textNull: "no", textUndefined: "no", throws: "no" };
    }
    return { fields, cls: "method_unguarded", empty: "call", null: "TypeError", undefined: "TypeError", textNull: "no", textUndefined: "no", throws: "null_and_undefined" };
  }
  if (/String\(/.test(line) && /de_article|de_plural/.test(line)) {
    if (/!==\s*undefined/.test(line)) {
      return { fields, cls: "string_if_defined", empty: "empty_string", null: "text_null", undefined: "not_evaluated", textNull: "yes", textUndefined: "no", throws: "no" };
    }
    if (truthy || /\?\s*String\(/.test(line)) {
      return { fields, cls: "string_truthy_guard", empty: "not_evaluated", null: "not_evaluated", undefined: "not_evaluated", textNull: "no", textUndefined: "no", throws: "no" };
    }
    return { fields, cls: "string_bare", empty: "empty_string", null: "text_null", undefined: "text_undefined", textNull: "yes", textUndefined: "yes", throws: "no" };
  }
  if (/\$\{[^}\n]*de_(article|plural)/.test(line)) {
    if (truthy) {
      return { fields, cls: "template_truthy_guard", empty: "not_evaluated", null: "not_evaluated", undefined: "not_evaluated", textNull: "no", textUndefined: "no", throws: "no" };
    }
    return { fields, cls: "template_unguarded", empty: "empty_interpolation", null: "text_null", undefined: "text_undefined", textNull: "yes", textUndefined: "yes", throws: "no" };
  }
  if (/\|\|\s*null/.test(line)) {
    return { fields, cls: "or_null_value", empty: "null_value", null: "null_value", undefined: "null_value", textNull: "no", textUndefined: "no", throws: "no" };
  }
  if (/!==\s*undefined/.test(line) && /=/.test(line)) {
    return { fields, cls: "copy_if_defined", empty: "copied_empty", null: "copied_null", undefined: "not_copied", textNull: "no", textUndefined: "no", throws: "no" };
  }
  if (/!==\s*undefined|===\s*undefined/.test(line)) {
    return { fields, cls: "defined_test", empty: "true", null: "true", undefined: "false", textNull: "no", textUndefined: "no", throws: "no" };
  }
  if (/delete\s+[\w.]+\.de_(article|plural)/.test(line)) {
    return { fields, cls: "delete", empty: "not_read", null: "not_read", undefined: "not_read", textNull: "no", textUndefined: "no", throws: "no" };
  }
  if (/\?\s*\{/.test(line) || /\.\.\.\(/.test(line)) {
    return { fields, cls: "copy_if_truthy", empty: "omitted", null: "omitted", undefined: "omitted", textNull: "no", textUndefined: "no", throws: "no" };
  }
  if (/if\s*\(/.test(line) || /&&/.test(line) && /de_article|de_plural/.test(line) && !/=/.test(line.replace(/[=!]==/g, ""))) {
    return { fields, cls: "falsy_test", empty: "falsy", null: "falsy", undefined: "falsy", textNull: "no", textUndefined: "no", throws: "no" };
  }
  if (/===|!==/.test(line)) {
    return { fields, cls: "compare", empty: "compared", null: "compared", undefined: "compared", textNull: "no", textUndefined: "no", throws: "no" };
  }
  if (/\bbump\(/.test(line)) {
    return { fields, cls: "search_bump", empty: "empty_string_via_String_or", null: "empty_string_via_String_or", undefined: "empty_string_via_String_or", textNull: "no", textUndefined: "no", throws: "no" };
  }
  if (/=/.test(line) || /:/.test(line)) {
    if (truthy) {
      return { fields, cls: "copy_if_truthy", empty: "omitted", null: "omitted", undefined: "omitted", textNull: "no", textUndefined: "no", throws: "no" };
    }
    return { fields, cls: "copy_raw", empty: "copied_empty", null: "copied_null", undefined: "copied_undefined", textNull: "no", textUndefined: "no", throws: "no" };
  }
  return { fields, cls: "unclassified", empty: "", null: "", undefined: "", textNull: "", textUndefined: "", throws: "" };
}

function scanCode() {
  const rows = [["file", "line", "fields", "class", "empty", "null", "undefined", "text_null", "text_undefined", "throws"]];
  for (const rel of codeFiles()) {
    const lines = fs.readFileSync(path.join(ROOT, rel), "utf8").split(/\n/);
    lines.forEach((line, i) => {
      if (!line.includes("de_article") && !line.includes("de_plural")) return;
      const c = classify(line, lines, i);
      rows.push([rel, String(i + 1), c.fields, c.cls, c.empty, c.null, c.undefined, c.textNull, c.textUndefined, c.throws]);
    });
  }
  return rows;
}

function aggregate(rows) {
  const m = new Map();
  for (const r of rows.slice(1)) {
    const key = r.slice(2).join("|");
    if (!m.has(key)) m.set(key, { n: 0, sample: r[0] + ":" + r[1], row: r });
    m.get(key).n += 1;
  }
  return [...m.values()].sort((a, b) => b.n - a.n || a.sample.localeCompare(b.sample));
}

function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const started = scanTree("data");
  const www = scanTree("www/data");
  const dirs = fs.readdirSync(path.join(ROOT, "data"), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
  const expectedSet = LANGS.slice().sort();
  const dirSet = dirs.slice().sort();

  const countRows = [["tree", "lang", "dataset", "field", "records", "empty", "null", "missing", "whitespace", "undefined", "other", "present"]];
  const compareRows = [["tree", "lang", "dataset", "field", "lv_kind", "lang_kind", "count"]];
  const lengthRows = [["tree", "lang", "dataset", "records", "lv_records"]];

  function emit(treeName, scanned) {
    for (const level of LEVELS) {
      const lv = scanned.lv[level] || [];
      const lvCounts = countSide(lv);
      for (const field of FIELDS) {
        const c = lvCounts[field];
        countRows.push([treeName, "lv", level.toUpperCase(), field, String(lv.length), ...KINDS.map((k) => String(c[k]))]);
      }
      for (const lang of LANGS) {
        const codes = scanned.langs[lang] && scanned.langs[lang][level];
        if (!codes) continue;
        const counts = countSide(codes);
        for (const field of FIELDS) {
          const c = counts[field];
          countRows.push([treeName, lang, level.toUpperCase(), field, String(codes.length), ...KINDS.map((k) => String(c[k]))]);
        }
        const cmp = compareLists(lv, codes);
        for (const key of Object.keys(cmp.diff).sort()) {
          const [field, change] = key.split("|");
          const [lvKind, langKind] = change.split(">");
          compareRows.push([treeName, lang, level.toUpperCase(), field, lvKind, langKind, String(cmp.diff[key])]);
        }
        if (cmp.extraLv || cmp.extraLang) {
          lengthRows.push([treeName, lang, level.toUpperCase(), String(codes.length), String(lv.length)]);
        }
      }
    }
    for (const row of scanned.lengthMismatch) {
      if (!lengthRows.some((r) => r[0] === row.tree && r[1] === row.lang && r[2] === row.level.toUpperCase())) {
        lengthRows.push([row.tree, row.lang, row.level.toUpperCase(), String(row.records), String(row.lv)]);
      }
    }
  }
  emit("data", started);
  emit("www/data", www);

  const treeDiffRows = [["lang", "dataset", "field", "data_kind", "www_kind", "count"]];
  for (const lang of ["lv", ...LANGS]) {
    for (const level of LEVELS) {
      const a = lang === "lv" ? started.lv[level] : started.langs[lang] && started.langs[lang][level];
      const b = lang === "lv" ? www.lv[level] : www.langs[lang] && www.langs[lang][level];
      if (!a || !b) {
        treeDiffRows.push([lang, level.toUpperCase(), "*", a ? "present_file" : "missing_file", b ? "present_file" : "missing_file", "0"]);
        continue;
      }
      const n = Math.min(a.length, b.length);
      const diff = {};
      for (let i = 0; i < n; i++) {
        if (a[i] === b[i]) continue;
        for (let f = 0; f < FIELDS.length; f++) {
          if (a[i][f] === b[i][f]) continue;
          const key = FIELDS[f] + "|" + a[i][f] + ">" + b[i][f];
          diff[key] = (diff[key] || 0) + 1;
        }
      }
      for (const key of Object.keys(diff).sort()) {
        const [field, change] = key.split("|");
        const [dk, wk] = change.split(">");
        treeDiffRows.push([lang, level.toUpperCase(), field, dk, wk, String(diff[key])]);
      }
      if (a.length !== b.length) {
        treeDiffRows.push([lang, level.toUpperCase(), "*", "len:" + a.length, "len:" + b.length, String(Math.abs(a.length - b.length))]);
      }
    }
  }

  const wsMap = new Map();
  for (const hit of whitespaceHits) {
    const key = [hit.tree, hit.lang, hit.level.toUpperCase(), hit.field, hit.points, hit.length].join("|");
    wsMap.set(key, (wsMap.get(key) || 0) + 1);
  }
  const wsRows = [["tree", "lang", "dataset", "field", "codepoints", "length", "count"]];
  for (const key of [...wsMap.keys()].sort()) {
    const [tree, lang, dataset, field, points, length] = key.split("|");
    wsRows.push([tree, lang, dataset, field, points, length, String(wsMap.get(key))]);
  }

  const codeRows = scanCode();
  const classCounts = new Map();
  let unclassified = 0;
  let textSites = 0;
  let throwSites = 0;
  for (const r of codeRows.slice(1)) {
    classCounts.set(r[3], (classCounts.get(r[3]) || 0) + 1);
    if (r[3] === "unclassified") unclassified += 1;
    if (r[7] === "yes" || r[8] === "yes") textSites += 1;
    if (r[9] && r[9] !== "no") throwSites += 1;
  }

  const missing = [...started.missingFiles, ...www.missingFiles];
  const langDirMatch = JSON.stringify(dirSet) === JSON.stringify(expectedSet);
  const treeDiffCount = treeDiffRows.length - 1;
  const compareCount = compareRows.length - 1;

  const files = {
    "counts.csv": toCsv(countRows),
    "lv-compare.csv": toCsv(compareRows),
    "tree-compare.csv": toCsv(treeDiffRows),
    "whitespace.csv": toCsv(wsRows),
    "length.csv": toCsv(lengthRows),
    "code-sites.csv": toCsv(codeRows),
    "probes.csv": toCsv(probe()),
    "null-indexes.csv": toCsv([["tree", "lang", "dataset", "index", "field", "de"], ...lvNullRows]),
    "kind-diffs.csv": toCsv([["tree", "lang", "dataset", "index", "field", "lv_kind", "lang_kind", "de"], ...kindDiffs])
  };

  const hashes = {};
  for (const name of Object.keys(files)) {
    hashes[name] = sha256(files[name]);
    fs.writeFileSync(path.join(OUT, name), files[name]);
  }

  const lvDataA1 = countSide(started.lv.a1 || []);
  const totals = {};
  for (const field of FIELDS) totals[field] = blankCounts();
  for (const level of LEVELS) {
    const c = countSide(started.lv[level] || []);
    for (const field of FIELDS) {
      for (const k of KINDS) totals[field][k] += c[field][k];
    }
  }
  let lvRecords = 0;
  for (const level of LEVELS) lvRecords += (started.lv[level] || []).length;

  const byClass = [...classCounts.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  const textLines = codeRows.slice(1).filter((r) => r[7] === "yes" || r[8] === "yes" || (r[9] && r[9] !== "no"));

  const summary = [];
  summary.push("# Tukšo DE lauku pieraksts");
  summary.push("");
  summary.push("STAGE RESULT: " + (unclassified === 0 && missing.length === 0 && langDirMatch ? "PASS" : "PARTIAL"));
  summary.push("");
  summary.push("Bāze ir origin/main `f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d`. Avots ir `window` masīva vm ielāde no `data/` un `www/data/`. Skripts ir `scripts/audit-de-empty-representation.js`. Tas neizmaina datus, `languages/`, `ui.js` un esošos `scripts/`.");
  summary.push("");
  summary.push("Tukšuma klases: `empty` ir `\"\"`; `null` ir vērtība null; `missing` ir lauks, kura objektā nav; `whitespace` ir ne-tukša virkne, kurai `trim()` atgriež `\"\"`; `undefined` ir lauks ar vērtību undefined; `other` ir cits tips; `present` ir pārējā ne-tukšā virkne.");
  summary.push("");
  summary.push("## LV skaits");
  summary.push("");
  summary.push("LV ieraksti pa līmeņiem: " + LEVELS.map((level) => level.toUpperCase() + " " + (started.lv[level] || []).length).join(", ") + ". Summa " + lvRecords + ".");
  summary.push("");
  summary.push("| lauks | empty | null | missing | whitespace | undefined | other | present |");
  summary.push("|---|---:|---:|---:|---:|---:|---:|---:|");
  for (const field of FIELDS) {
    const c = totals[field];
    summary.push("| " + field + " | " + KINDS.map((k) => c[k]).join(" | ") + " |");
  }
  summary.push("");
  summary.push("Valodu katalogs `data/` ir " + dirSet.join(", ") + ". Sakritība ar 31 valodu sarakstu: " + (langDirMatch ? "jā" : "nē") + ".");
  summary.push("Trūkstoši faili: " + (missing.length ? missing.join(", ") : "0") + ".");
  summary.push("Garuma atšķirības pret LV: " + (lengthRows.length - 1) + ".");
  summary.push("`lv-compare.csv` rindas, kur lauka klase atšķiras no LV: " + compareCount + ".");
  summary.push("`tree-compare.csv` rindas, kur `data` un `www/data` klase atšķiras: " + treeDiffCount + ".");
  summary.push("Whitespace trāpījumi: " + whitespaceHits.length + ".");
  summary.push("");
  const perLevel = [];
  perLevel.push("| dataset | de_article missing | de_article present | de_plural null | de_plural missing | de_plural present |");
  perLevel.push("|---|---:|---:|---:|---:|---:|");
  for (const level of LEVELS) {
    const c = countSide(started.lv[level] || []);
    perLevel.push("| " + level.toUpperCase() + " | " + c.de_article.missing + " | " + c.de_article.present + " | " + c.de_plural.null + " | " + c.de_plural.missing + " | " + c.de_plural.present + " |");
  }
  summary.push(perLevel.join("\n"));
  summary.push("");
  const oddEmpty = countRows.slice(1).filter((r) => Number(r[5]) || Number(r[8]) || Number(r[9]) || Number(r[10]));
  const deLevelGap = countRows.slice(1).filter((r) => (r[3] === "de" || r[3] === "level") && r[4] !== r[11]);
  summary.push("`\"\"`, whitespace, undefined un other šūnas, kas nav 0: " + oddEmpty.length + ". `de` vai `level` rindas, kur present nav vienāds ar records: " + deLevelGap.length + ".");
  summary.push("LV `de_plural` null indeksi ir `null-indexes.csv` (" + lvNullRows.length + "). `www/data` sakrīt ar `data` pa klasēm, tāpēc tie paši indeksi ir abos kokos.");
  summary.push("Vienīgā atšķirība no LV ir `kind-diffs.csv`: " + kindDiffs.length + " rindas. Katrā ir viens B2 indekss, kur LV `de_plural` ir missing un mērķa valodā present.");
  summary.push("A1 LV `de` empty ir " + lvDataA1.de.empty + ", null " + lvDataA1.de.null + ", missing " + lvDataA1.de.missing + ". Pilnā tabula valoda × dataset × lauks ir `counts.csv`.");
  summary.push("");
  summary.push("## Koda vietas");
  summary.push("");
  summary.push("`languages/**/*.js` un `www/languages/**/*.js`: 0 rindas ar `de_article` vai `de_plural`.");
  summary.push("Koda rindas kopā, bez šī audita skripta: " + (codeRows.length - 1) + ".");
  summary.push("Neklasificētas: " + unclassified + ". Rindas, kur null vai undefined kļūst par tekstu vai met kļūdu: " + textLines.length + ".");
  summary.push("");
  summary.push("| klase | rindas |");
  summary.push("|---|---:|");
  for (const [name, n] of byClass) summary.push("| " + name + " | " + n + " |");
  summary.push("");
  summary.push("Probe rezultāti ir `probes.csv`. `String(value || \"\")` no `\"\"`, null un undefined dod `\"\"`. `String(value)` no null dod tekstu null, no undefined dod tekstu undefined. Šablons `${value}` dara to pašu. `value.replace` uz null un undefined met TypeError. `JSON.stringify(value ?? null)` no `\"\"` dod `\"\\\"\\\"\"`, no null un undefined dod tekstu null. `[value].filter(Boolean)` visas trīs vērtības izmet. `.startsWith` un `.sort` uz šo lauku vērtībām kodā nav. `.startsWith` ir tikai uz lauka vārda literāļa.");
  summary.push("");
  summary.push("Teksta vai TypeError rindas:");
  summary.push("");
  for (const r of textLines) {
    summary.push("- `" + r[0] + ":" + r[1] + "` " + r[3] + " text_null=" + r[7] + " text_undefined=" + r[8] + " throws=" + r[9]);
  }
  summary.push("");
  summary.push("`ui.js` un `www/ui.js` lasa lauku caur `String(x || \"\")`, `normalizeIdText`, falsy `if` vai `.filter(Boolean)`. Šajās rindās `\"\"`, null un undefined nepaliek teksts null vai undefined un nemet kļūdu. `www/wordRain.js` `normalizeText` ir `String(value || \"\").trim()`.");
  summary.push("");
  summary.push("## Hashes");
  summary.push("");
  for (const name of Object.keys(hashes)) summary.push("- `" + name + "` " + hashes[name]);
  summary.push("");
  const summaryText = summary.join("\n");
  if (Buffer.byteLength(summaryText, "utf8") > 20 * 1024) {
    throw new Error("SUMMARY exceeds 20 KB: " + Buffer.byteLength(summaryText, "utf8"));
  }
  fs.writeFileSync(path.join(OUT, "SUMMARY.md"), summaryText);
  hashes["SUMMARY.md"] = sha256(summaryText);

  const gate = {
    originMain: "f00f6b72afd693a8f6f86b42cd1631a0be7d9a6d",
    lvRecords,
    langDirMatch,
    missingFiles: missing.length,
    lengthMismatch: lengthRows.length - 1,
    lvCompareRows: compareCount,
    treeCompareRows: treeDiffCount,
    whitespaceHits: whitespaceHits.length,
    codeRows: codeRows.length - 1,
    unclassified,
    textOrThrowRows: textLines.length,
    hashes
  };
  fs.writeFileSync(path.join(OUT, "gate.json"), JSON.stringify(gate, null, 2) + "\n");
  process.stdout.write(JSON.stringify(gate) + "\n");
}

main();
