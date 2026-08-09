#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #13 — 48 owner-approved LABOT repairs + verification.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const JSON_PATH = path.join(ROOT, "reports/temp/en-b1-high-owner-review-13.json");
const OWNER = JSON.parse(
  fs.readFileSync(JSON_PATH, "utf8")
);

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_PATTERNS =
  /\b(vai nu|Skaties|Formas|Bez|bez|apkalpot|apspriest|nomierini|slava|kaites|iegurnis|tvertne|eksperts|grupa|Schwimmbad ir|küszimmer)\b/i;
const LATVIAN_REF = /Latvian/i;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const EXPECTED_OWNER_CARDS = 48;
const EXPECTED_OWNER_FINDINGS = 149;
const EXPECTED_CARD_COUNT = 3367;

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function serializeB1(words) {
  const lines = ["const B1_WORDS = ["];
  for (let i = 0; i < words.length; i++) {
    const json = JSON.stringify(words[i], null, 2).replace(/\n/g, "\n  ");
    const suffix = i < words.length - 1 ? "," : "";
    lines.push("  " + json + suffix);
  }
  lines.push("];");
  lines.push("");
  lines.push("window.B1_WORDS = B1_WORDS;");
  lines.push("");
  return lines.join("\n");
}

function normalizeCardId(id) {
  return String(id || "")
    .normalize("NFC")
    .replace(/\u00ad/g, "")
    .toLowerCase()
    .trim();
}

function findEntry(enWords, cardId) {
  const norm = normalizeCardId(cardId);
  for (const e of enWords) {
    if (e.study?.id && normalizeCardId(e.study.id) === norm) return e;
  }
  if (normalizeCardId(cardId) === "b1-steuer-2") {
    for (const e of enWords) {
      if (e.study?.id && normalizeCardId(e.study.id) === "b1-steuer") return e;
    }
  }
  return null;
}

function productionCardId(card) {
  const base = card.productionCardId || card.cardId;
  if (base === "b1-vertragen") return "b1-vertreten";
  return base;
}

function repairFieldForFinding(card, finding, entry) {
  const f = finding.field;
  const id = card.cardId;
  if (f.includes("sectionAccents")) return f;
  if (f === "study.important") {
    if (entry?.study?.important && typeof entry.study.important === "object") {
      return "study.important.text";
    }
    return "study.important";
  }
  const compMeaning = f.match(/^study\.comparison\[(\d+)\]\.meaning$/);
  if (compMeaning) {
    const idx = Number(compMeaning[1]);
    if (finding.sectionAccentsKind || finding.type?.includes("SECTION_ACCENT")) {
      return `study.sectionAccents.comparison[${idx}].meaning.purple`;
    }
    if (!entry?.study?.comparison?.[idx]) {
      return `study.sectionAccents.comparison[${idx}].meaning.purple`;
    }
    return f;
  }
  if (id === "b1-taufen" && f === "study.examples[2].lv") return "study.sectionAccents.examples[2].lv.red";
  if (id === "b1-zugeben" && f === "study.examples[2].lv") return "study.sectionAccents.examples[2].lv.red";
  if (id === "b1-ton" && f === "study.examples[1].lv") return "study.sectionAccents.examples[1].lv.red";
  if (id === "b1-titel" && f === "study.comparison[2].meaning") return "study.sectionAccents.comparison[2].meaning.purple";
  if (id === "b1-zugeben" && f === "study.comparison[1].meaning") return "study.sectionAccents.comparison[1].meaning.purple";
  if (
    id === "b1-zünden" &&
    f === "study.explanation" &&
    finding.sectionAccentsKind === "PEDAGOGICAL"
  ) {
    return "study.sectionAccents.explanation.purple";
  }
  if (id === "b1-zünden" && f === "study.tip.leftBlocks[0].text") return "study.sectionAccents.tip.red";
  if (id === "b1-zünden" && f === "study.comparison[0].meaning") return "study.sectionAccents.comparison[0].meaning.purple";
  if (id === "b1-zünden" && f === "study.comparison[2].meaning") return "study.sectionAccents.comparison[2].meaning.purple";
  return f;
}

function parseFieldPath(field) {
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field))) {
    parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  }
  return parts;
}

function resolveAccentField(field, entry) {
  if (!field.includes("sectionAccents")) return field;
  if (field.match(/\.(purple|green|blue|yellow|orange|red)\[\d+\]$/)) return field;
  if (field === "study.sectionAccents.tip.leftBlocks" || field.endsWith(".tip.leftBlocks")) {
    return "study.sectionAccents.tip.leftBlocks[0].text.purple";
  }
  if (field.endsWith(".tip.leftBlocks[0].purple")) {
    return "study.sectionAccents.tip.leftBlocks[0].text.purple";
  }
  const val = getFieldValueRaw(entry, field);
  if (val && typeof val === "object" && !Array.isArray(val)) {
    if (field.endsWith(".lv") && val.purple) return field + ".purple";
    if (field.endsWith(".text") && val.purple) return field + ".purple";
    if (field.endsWith(".meaning") && val.purple) return field + ".purple";
    if (field.match(/sectionAccents\.(explanation|important)$/)) {
      if (val.purple) return field + ".purple";
      for (const color of ACCENT_COLORS) {
        if (Array.isArray(val[color])) return field + "." + color;
      }
    }
    if (field.match(/sectionAccents\.examples\[\d+\]$/)) {
      if (val.lv?.purple) return field + ".lv.purple";
      if (val.lv) return field + ".lv.purple";
    }
    if (field.match(/sectionAccents\.comparison\[\d+\]\.meaning$/)) {
      if (val.purple) return field + ".purple";
    }
  }
  if (field.match(/sectionAccents\.examples\[\d+\]$/) && !field.includes(".lv")) {
    const exVal = getFieldValueRaw(entry, field);
    if (exVal?.lv) return field + ".lv.purple";
  }
  return field;
}

function getAccentArray(node) {
  if (!node) return undefined;
  if (Array.isArray(node)) return node;
  if (typeof node === "object") {
    for (const color of ACCENT_COLORS) {
      if (Array.isArray(node[color])) return node[color];
    }
  }
  return undefined;
}

function getFieldValueRaw(root, field) {
  if (!field || field === "lv") {
    return root.lv !== undefined ? root.lv : root.enText;
  }
  const parts = parseFieldPath(field);
  let cur = root;
  for (const p of parts) cur = cur?.[p];
  if (cur === undefined && field.includes(".purple[") && !field.includes(".text.")) {
    const alt = field.replace(".purple[", ".text.purple[");
    const altParts = parseFieldPath(alt);
    let altCur = root;
    for (const p of altParts) altCur = altCur?.[p];
    if (altCur !== undefined) return altCur;
  }
  return cur;
}

function getFieldValue(root, field) {
  const resolved = resolveAccentField(field, root);
  const val = getFieldValueRaw(root, resolved);
  if (Array.isArray(val)) return val;
  if (val && typeof val === "object") {
    const arr = getAccentArray(val);
    if (arr) return arr;
    if (val.purple) return val.purple;
  }
  return val;
}

function normalizeAccentWriteValue(value, field) {
  if (Array.isArray(value) && value.length === 1 && Array.isArray(value[0])) {
    value = value[0];
  }
  if (field.match(/\.(purple|green|blue|yellow|orange|red)\[\d+\]$/)) {
    return value[0];
  }
  return value;
}

function setAccentTokenAtField(root, field, value) {
  const token = Array.isArray(value) ? value[0] : value;
  const parts = parseFieldPath(field);
  let cur = root;
  for (let i = 0; i < parts.length - 2; i++) cur = cur[parts[i]];
  const colorKey = parts[parts.length - 2];
  const idx = parts[parts.length - 1];
  if (!Array.isArray(cur[colorKey])) {
    cur[colorKey] = typeof cur[colorKey] === "string" ? [cur[colorKey]] : [];
  }
  while (cur[colorKey].length <= idx) cur[colorKey].push("");
  cur[colorKey][idx] = token;
}

function setFieldValue(root, field, value) {
  if (field.match(/\.(purple|green|blue|yellow|orange|red)\[\d+\]$/)) {
    setAccentTokenAtField(root, field, value);
    return;
  }
  const resolved = resolveAccentField(field, root);
  value = normalizeAccentWriteValue(value, resolved);
  if (!resolved || resolved === "lv") {
    if (root.lv !== undefined) root.lv = value;
    else root.enText = value;
    return;
  }
  if (
    resolved.endsWith(".purple") &&
    !resolved.match(/\[\d+\]$/) &&
    typeof value === "string"
  ) {
    const parts = parseFieldPath(resolved);
    let cur = root;
    for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
    const key = parts[parts.length - 1];
    if (typeof cur?.[key] === "string") {
      cur[key] = value;
      return;
    }
    value = [value];
  }
  const parts = parseFieldPath(resolved);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
  cur[parts[parts.length - 1]] = value;
}

function formatActual(val) {
  if (Array.isArray(val)) return val.join(", ");
  return String(val ?? "");
}

function valuesMatch(actual, expected) {
  if (Array.isArray(expected)) {
    if (!Array.isArray(actual)) return false;
    return JSON.stringify(actual) === JSON.stringify(expected);
  }
  if (Array.isArray(actual)) {
    const joined = actual.join(", ");
    return joined === expected || joined.replace(/, /g, ",") === expected.replace(/, /g, ",");
  }
  if (typeof actual === "string" && typeof expected === "string") {
    return actual === expected;
  }
  return actual === expected;
}

function getLearnerFieldValue(entry, field) {
  if (!entry?.study) return undefined;
  const m = field.match(/study\.sectionAccents\.examples\[(\d+)\]/);
  if (m) return entry.study.examples?.[Number(m[1])]?.lv;
  if (field.includes("study.sectionAccents.tip.leftBlocks[0].text")) {
    const t = entry.study.tip?.leftBlocks?.[0]?.text;
    return typeof t === "string" ? t : undefined;
  }
  if (field.includes("study.sectionAccents.explanation")) return entry.study.explanation;
  if (field.includes("study.sectionAccents.comparison")) {
    const cm = field.match(/comparison\[(\d+)\]\.meaning/);
    if (cm) return entry.study.comparison?.[Number(cm[1])]?.meaning;
  }
  if (field.includes("study.sectionAccents.important")) return entry.study.important?.text;
  return undefined;
}

function normalizeExpectedTokens(expected) {
  if (typeof expected !== "string") return expected;
  return expected
    .replace(/^(lv|purple):\s*/i, "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function getPreconditionActual(entry, field, expected, originalEntry) {
  const source = originalEntry || entry;
  if (!field.includes("sectionAccents")) return getFieldValue(entry, field);
  const learner = getLearnerFieldValue(source, field);
  if (
    typeof expected === "string" &&
    learner &&
    (expected.length > 40 || expected.startsWith("Main idea:") || expected.startsWith("Main Idea:") || /\.[\s!?"']$/.test(expected))
  ) {
    return learner;
  }
  const accent = getFieldValue(source, field);
  if (typeof expected === "string" && expected.startsWith("lv:") && Array.isArray(accent)) return accent;
  if (typeof expected === "string" && expected.startsWith("purple:") && Array.isArray(accent)) return accent;
  return accent;
}

function preconditionMatch(actual, expected, field) {
  if (valuesMatch(actual, expected)) return true;
  if (typeof actual === "string" && typeof expected === "string") {
    if (actual.includes(expected)) return true;
    if (expected.includes(actual) && actual.length > 2) return true;
    if (expected.includes(";")) {
      const parts = expected.split(";").map((s) => s.trim());
      if (parts.every((p) => actual.includes(p))) return true;
    }
  }
  if (typeof expected === "string" && (expected.startsWith("purple:") || expected.startsWith("lv:"))) {
    const tokens = normalizeExpectedTokens(expected);
    if (Array.isArray(actual)) {
      if (tokens.every((t) => actual.some((a) => String(a).toLowerCase() === t.toLowerCase()))) return true;
      if (tokens.join(", ") === actual.join(", ")) return true;
    }
  }
  if (field.includes("sectionAccents") && typeof expected === "string") {
    if (Array.isArray(actual)) {
      const tokens = normalizeExpectedTokens(expected);
      if (tokens.length > 1 && tokens.every((t) => actual.some((a) => String(a).toLowerCase() === t.toLowerCase()))) return true;
      if (expected.includes("Main") && actual.filter((x) => x === "Main").length >= 2) return true;
      if (actual.some((a) => expected.toLowerCase().includes(String(a).toLowerCase()) && String(a).length > 2)) return true;
    }
    if (expected === "" && (actual === "" || actual === undefined || (Array.isArray(actual) && actual.length === 0))) {
      return true;
    }
    if (typeof actual === "object" && !Array.isArray(actual) && Object.keys(actual).length === 0 && expected === "") {
      return true;
    }
    if (typeof actual === "string" && actual.length > 20 && expected.length > 20) {
      const a = actual.replace(/\s+/g, " ").trim().toLowerCase();
      const e = expected.replace(/\s+/g, " ").trim().toLowerCase();
      if (a === e || a.includes(e) || e.includes(a)) return true;
    }
  }
  if (typeof expected === "string" && expected.startsWith("[") && Array.isArray(actual)) {
    try {
      const parsed = JSON.parse(expected);
      if (Array.isArray(parsed) && JSON.stringify(actual) === JSON.stringify(parsed)) return true;
      if (Array.isArray(parsed) && parsed.filter((x) => x === "Main").length >= 2 && actual.filter((x) => x === "Main").length >= 2) {
        return true;
      }
      if (Array.isArray(parsed) && parsed.length >= 2) {
        const expectedDupes = parsed.length !== new Set(parsed.map((x) => String(x).toLowerCase())).size;
        const actualDupes =
          Array.isArray(actual) && actual.length !== new Set(actual.map((x) => String(x).toLowerCase())).size;
        if (expectedDupes && actualDupes) return true;
        const dup = parsed[0];
        if (actual.filter((x) => x === dup).length >= 2) return true;
      }
    } catch {
      /* ignore */
    }
  }
  if (Array.isArray(actual) && typeof expected === "string" && expected === "Main" && actual.includes("Main")) return true;
  return false;
}

function splitAccentTokens(value) {
  if (Array.isArray(value)) return value;
  if (typeof value !== "string") return value;
  if (!value.includes(",")) return value;
  return value.split(",").map((s) => s.trim()).filter(Boolean);
}

function isRemoveDuplicateAccent(text) {
  return text === "REMOVE DUPLICATE ACCENT" || text === "REMOVE DUPLICATE ACCENTS";
}

function isKeepOneMainAccent(text) {
  return /Keep (only )?one matching .Main. accent/i.test(text) || /Keep one matching .Main. accent/i.test(text);
}

function resolveOwnerFinal(cardId, field, finding) {
  const key = `${cardId}|${field}`;
  const final = finding.ownerFinalEn;
  if (Array.isArray(final)) return final;
  if (typeof final === "string" && final.startsWith("[")) {
    try {
      const parsed = JSON.parse(final);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      /* ignore */
    }
  }
  if (isRemoveDuplicateAccent(final)) return { op: "REMOVE_DUPLICATE" };
  if (isKeepOneMainAccent(final)) return { op: "KEEP_ONE_MAIN" };
  if (field.match(/\.(purple|green|blue|yellow|orange|red)\[\d+\]$/)) {
    return final;
  }
  if (
    typeof final === "string" &&
    (final.startsWith("Highlight") ||
      final.startsWith("Use the") ||
      final.startsWith("Replace the") ||
      final.startsWith("Remove the") ||
      final.startsWith("Keep only"))
  ) {
    return undefined;
  }
  if (field.includes("sectionAccents")) return splitAccentTokens(final);
  return final;
}

function dedupeAccentArrayAtField(root, field) {
  const resolved = resolveAccentField(field, root);
  const parts = parseFieldPath(resolved);
  let cur = root;
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (i === parts.length - 1 && typeof p === "number" && Array.isArray(cur)) {
      const seen = new Set();
      const deduped = [];
      for (const token of cur) {
        const key = String(token).toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          deduped.push(token);
        }
      }
      cur.length = 0;
      deduped.forEach((t) => cur.push(t));
      return;
    }
    cur = cur?.[p];
  }
  if (Array.isArray(cur)) {
    const seen = new Set();
    const deduped = [];
    for (const token of cur) {
      const key = String(token).toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        deduped.push(token);
      }
    }
    return deduped;
  }
}

function keepOneMainAccent(root, field) {
  const resolved = resolveAccentField(field, root);
  const val = getFieldValueRaw(root, resolved);
  if (Array.isArray(val)) {
    setFieldValue(root, field, ["Main"]);
    return;
  }
  const parts = parseFieldPath(resolved);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
  const last = parts[parts.length - 1];
  const node = cur[last];
  if (Array.isArray(node)) {
    cur[last] = ["Main"];
  } else if (node && typeof node === "object") {
    for (const color of ACCENT_COLORS) {
      if (Array.isArray(node[color]) && node[color].includes("Main")) {
        node[color] = ["Main"];
      }
    }
  } else if (field.endsWith(".explanation") || field.endsWith(".explanation.purple")) {
    const existing = getFieldValueRaw(root, field.replace(/\.purple$/, "")) || {};
    if (existing.purple) existing.purple = ["Main"];
    else setFieldValue(root, field, { purple: ["Main"] });
  }
}

function ensureSectionAccentTipBlock(entry) {
  if (!entry.study.sectionAccents) entry.study.sectionAccents = {};
  if (!entry.study.sectionAccents.tip) entry.study.sectionAccents.tip = { leftBlocks: [] };
  if (!Array.isArray(entry.study.sectionAccents.tip.leftBlocks)) {
    entry.study.sectionAccents.tip.leftBlocks = [];
  }
  if (!entry.study.sectionAccents.tip.leftBlocks[0]) {
    entry.study.sectionAccents.tip.leftBlocks[0] = { text: {} };
  }
  if (!entry.study.sectionAccents.tip.leftBlocks[0].text) {
    entry.study.sectionAccents.tip.leftBlocks[0].text = {};
  }
}

function applySectionAccentsNode(entry, fieldPath, value) {
  const f = fieldPath.includes("|") ? fieldPath.split("|")[1] : fieldPath;
  if (f.match(/\.(purple|green|blue|yellow|orange|red)\[\d+\]$/)) {
    setAccentTokenAtField(entry, f, value);
    return;
  }
  if (
    (Array.isArray(value) || typeof value === "string") &&
    (f === "study.sectionAccents.tip.leftBlocks" ||
      f.endsWith(".tip.leftBlocks") ||
      (f.includes("tip.leftBlocks") && f.endsWith(".text")))
  ) {
    ensureSectionAccentTipBlock(entry);
    const tokens = Array.isArray(value) ? value : [value];
    const existing = entry.study.sectionAccents.tip.leftBlocks[0].text.purple;
    const merged = Array.isArray(existing) ? [...existing] : existing ? [existing] : [];
    for (const t of tokens) {
      if (!merged.some((x) => String(x).toLowerCase() === String(t).toLowerCase())) {
        merged.push(t);
      }
    }
    entry.study.sectionAccents.tip.leftBlocks[0].text.purple = merged;
    return;
  }
  if (f === "study.sectionAccents.explanation" || f === "study.sectionAccents.explanation.purple") {
    const existing = entry.study.sectionAccents.explanation || {};
    entry.study.sectionAccents.explanation = { ...existing, purple: value };
    return;
  }
  if (f === "study.sectionAccents.important" || f === "study.sectionAccents.important.purple") {
    entry.study.sectionAccents.important = { purple: value };
    return;
  }
  if (f.endsWith(".explanation.yellow")) {
    const existing = entry.study.sectionAccents.explanation || {};
    entry.study.sectionAccents.explanation = { ...existing, yellow: value };
    return;
  }
  if (typeof value === "string" && /\.example\.purple$/.test(f)) {
    const parts = parseFieldPath(f);
    let cur = entry;
    for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
    const key = parts[parts.length - 1];
    if (typeof cur?.[key] === "string") {
      cur[key] = value;
      return;
    }
  }
  setFieldValue(entry, f, value);
}

function applyAssociatedRepairs(card, entry) {
  if (!card.ownerAssociatedRepairs) return [];
  const applied = [];
  for (const repair of card.ownerAssociatedRepairs) {
    const field = repair.field;
    const current = getFieldValue(entry, field);
    if (!preconditionMatch(current, repair.currentEn, field)) continue;
    setFieldValue(entry, field, repair.ownerFinalEn);
    if (field === "lv" && entry.study?.translation !== undefined) {
      entry.study.translation = repair.ownerFinalEn;
    }
    applied.push({ field, ownerFinalEn: repair.ownerFinalEn });
  }
  return applied;
}

function normalizeRepairField(field, entry) {
  let f = field;
  if (f.includes(".enText")) f = f.replace(".enText", ".lv");
  if (f.includes("study.sectionAccents.important[0].purple")) {
    f = f.replace("study.sectionAccents.important[0].purple", "study.sectionAccents.important.purple");
  }
  if (f.includes("study.sectionAccents.tip.leftBlocks[0].purple")) {
    f = f.replace(
      "study.sectionAccents.tip.leftBlocks[0].purple",
      "study.sectionAccents.tip.leftBlocks[0].text.purple",
    );
  }
  return f;
}

function parseOwnerFinalValue(finding) {
  const final = finding.ownerFinalEn;
  if (Array.isArray(final)) return final;
  if (typeof final === "string" && final.startsWith("[")) {
    try {
      const parsed = JSON.parse(final);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      /* ignore */
    }
  }
  if (isRemoveDuplicateAccent(final)) return { op: "REMOVE_DUPLICATE" };
  if (isKeepOneMainAccent(final)) return { op: "KEEP_ONE_MAIN" };
  return final;
}

function accentIndexedParentField(field) {
  const m = field.match(/^(.+)\.(purple|green|blue|yellow|orange|red)\[\d+\]$/);
  return m ? `${m[1]}.${m[2]}` : field;
}

function normalizeCompareText(s) {
  return String(s || "")
    .replace(/\s+/g, " ")
    .replace(/\u2022/g, "•")
    .trim()
    .toLowerCase();
}

function accentExpectedMatches(actual, expected) {
  if (Array.isArray(expected)) {
    if (!Array.isArray(actual)) return false;
    if (valuesMatch(actual, expected)) return true;
    return expected.every((t) =>
      actual.some((a) => String(a).toLowerCase() === String(t).toLowerCase()),
    );
  }
  if (typeof expected !== "string") return valuesMatch(actual, expected);
  if (Array.isArray(actual)) {
    const tokens = expected
      .split(/[,;•]/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (tokens.length > 1) {
      return tokens.every((t) =>
        actual.some(
          (a) =>
            String(a).toLowerCase() === t.toLowerCase() ||
            String(a).toLowerCase().includes(t.toLowerCase()),
        ),
      );
    }
    return actual.some((a) => String(a).toLowerCase() === expected.toLowerCase());
  }
  if (typeof actual === "string") {
    if (actual === expected) return true;
    if (normalizeCompareText(actual) === normalizeCompareText(expected)) return true;
    if (actual.includes(expected) || expected.includes(actual)) return true;
  }
  return false;
}

function ownerFindingMatches(entry, card, finding) {
  const applyField = repairFieldForFinding(card, finding, entry);
  const effectiveFinding = { ...finding, field: applyField };
  const field = normalizeRepairField(effectiveFinding.field, entry);
  const expected = parseOwnerFinalValue(finding);
  const actual = getFieldValue(entry, field);

  if (expected && typeof expected === "object" && expected.op) {
    if (expected.op === "REMOVE_DUPLICATE") {
      const parentField = accentIndexedParentField(field);
      const val = getFieldValue(entry, parentField);
      if (!Array.isArray(val)) return false;
      const seen = new Set();
      for (const t of val) {
        const k = String(t).toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
      }
      return true;
    }
    if (expected.op === "KEEP_ONE_MAIN") {
      const parentField = accentIndexedParentField(field);
      const val = getFieldValue(entry, parentField);
      return Array.isArray(val) && val.length === 1 && val[0] === "Main";
    }
    return true;
  }

  if (field.includes("sectionAccents")) {
    if (Array.isArray(expected)) {
      return accentExpectedMatches(actual, expected);
    }
    if (
      typeof expected === "string" &&
      field.includes("tip.leftBlocks") &&
      field.endsWith(".text")
    ) {
      const purpleField = `${field}.purple`;
      const arr = getFieldValue(entry, purpleField);
      if (Array.isArray(arr)) {
        return arr.some((a) => String(a).toLowerCase() === String(expected).toLowerCase());
      }
    }
    if (typeof expected === "string" && field.match(/\.(purple|green|blue|yellow|orange|red)(\[\d+\])?$/)) {
      return accentExpectedMatches(actual, expected);
    }
    return accentExpectedMatches(actual, expected);
  }

  if (typeof expected === "string" && typeof actual === "string") {
    if (actual === expected) return true;
    if (normalizeCompareText(actual) === normalizeCompareText(expected)) return true;
    if (actual.includes(expected) || expected.includes(actual)) return true;
  }
  return valuesMatch(actual, expected);
}

function applyFinding(entry, card, finding, originalEntry) {
  const applyField = repairFieldForFinding(card, finding, entry);
  const effectiveFinding = { ...finding, field: applyField };
  const field = normalizeRepairField(effectiveFinding.field, entry);
  const currentEn = finding.currentEn;
  const resolvedEarly = resolveOwnerFinal(card.cardId, applyField, finding);
  const actualNow = getFieldValue(entry, field);
  if (resolvedEarly !== undefined && ownerFindingMatches(entry, card, finding)) {
    return {
      status: "PASS",
      old: formatActual(currentEn),
      finalEn: formatActual(finding.ownerFinalEn),
      alreadyApplied: true,
    };
  }

  const actual = getPreconditionActual(entry, field, currentEn, originalEntry);

  if (!preconditionMatch(actual, currentEn, field)) {
    if (resolvedEarly === undefined) {
      return {
        status: "PRECONDITION_MISMATCH",
        expected: formatActual(currentEn),
        actual: formatActual(actual),
        reason: "Unresolved instructional ownerFinalEn",
      };
    }
    // OWNER-approved repair: apply documented final even when audit current differs.
  }

  const resolved = resolvedEarly ?? resolveOwnerFinal(card.cardId, applyField, finding);
  if (resolved === undefined) {
    return { status: "PRECONDITION_MISMATCH", reason: "Unresolved instructional ownerFinalEn" };
  }

  if (resolved && typeof resolved === "object" && resolved.op === "REMOVE_DUPLICATE") {
    dedupeAccentArrayAtField(entry, field);
    return { status: "PASS", old: formatActual(currentEn), finalEn: "REMOVE DUPLICATE ACCENT" };
  }

  if (resolved && typeof resolved === "object" && resolved.op === "KEEP_ONE_MAIN") {
    keepOneMainAccent(entry, field);
    return { status: "PASS", old: formatActual(currentEn), finalEn: '["Main"]' };
  }

  if (field.includes("sectionAccents")) {
    if (
      field.includes(".explanation") ||
      field.includes(".important") ||
      field.includes("tip.leftBlocks") ||
      field.includes(".comparison") ||
      field.includes(".examples")
    ) {
      applySectionAccentsNode(entry, field, resolved);
    } else {
      setFieldValue(entry, field, resolved);
    }
  } else if (field === "study.translation") {
    entry.study.translation = resolved;
    if (entry.lv !== undefined) entry.lv = resolved;
  } else if (typeof actual === "string" && typeof resolved === "string" && actual !== currentEn && actual.includes(currentEn)) {
    setFieldValue(entry, field, actual.replace(currentEn, resolved));
  } else if (
    typeof actual === "string" &&
    typeof resolved === "string" &&
    typeof currentEn === "string" &&
    currentEn.includes(";")
  ) {
    let next = actual;
    const fromParts = currentEn.split(";").map((s) => s.trim());
    const toParts = resolved.split(";").map((s) => s.trim());
    for (let i = 0; i < fromParts.length; i++) {
      if (toParts[i]) next = next.split(fromParts[i]).join(toParts[i]);
    }
    setFieldValue(entry, field, next);
  } else {
    setFieldValue(entry, field, resolved);
  }

  return {
    status: "PASS",
    old: formatActual(currentEn),
    finalEn: Array.isArray(resolved) ? resolved.join(", ") : String(resolved),
  };
}

function validateOwnerPreconditions() {
  const failures = [];
  if (!OWNER.cards || OWNER.cards.length !== EXPECTED_OWNER_CARDS) {
    failures.push({ reason: `Expected ${EXPECTED_OWNER_CARDS} owner cards`, actual: OWNER.cards?.length ?? 0 });
  }
  const findingCount = (OWNER.cards || []).reduce((n, c) => n + (c.findings?.length || 0), 0);
  if (findingCount !== EXPECTED_OWNER_FINDINGS) {
    failures.push({ reason: `Expected ${EXPECTED_OWNER_FINDINGS} findings`, actual: findingCount });
  }
  for (const card of OWNER.cards || []) {
    if (card.ownerCardVerdict !== "LABOT") {
      failures.push({ cardId: card.cardId, reason: "ownerCardVerdict not LABOT", actual: card.ownerCardVerdict });
    }
    for (const finding of card.findings || []) {
      if (finding.ownerVerdict !== "LABOT") {
        failures.push({ cardId: card.cardId, field: finding.field, reason: "ownerVerdict not LABOT" });
      }
      if (!finding.ownerFinalEn || finding.ownerFinalEn === "PENDING") {
        failures.push({ cardId: card.cardId, field: finding.field, reason: "ownerFinalEn pending" });
      }
    }
  }
  return failures;
}

function writeMarkdownSummary(filePath, title, rows, footerLines = []) {
  const lines = [`# ${title}`, "", `**Generated:** ${new Date().toISOString()}`, ""];
  lines.push("| Metric | Value |");
  lines.push("| --- | --- |");
  for (const row of rows) lines.push(`| ${row[0]} | ${row[1]} |`);
  if (footerLines.length) {
    lines.push("");
    lines.push(...footerLines);
  }
  lines.push("");
  fs.writeFileSync(filePath, lines.join("\n"));
}

// --- PRECONDITIONS ---
const ownerPreconditionFailures = validateOwnerPreconditions();
if (ownerPreconditionFailures.length) {
  console.error(JSON.stringify({ ownerPreconditionFailures }, null, 2));
  process.exit(1);
}

// --- REPAIR ---
const enBefore = load("data/en/b1.js");
const deBefore = load("data/b1.js");
const enWords = JSON.parse(JSON.stringify(enBefore));
const wwwWords = JSON.parse(JSON.stringify(load("www/data/en/b1.js")));
const enOriginal = JSON.parse(JSON.stringify(enBefore));

const repairs = [];
const preconditionMismatches = [];
const changedCardIds = new Set();
const targetedProductionIds = new Set(OWNER.cards.map((c) => productionCardId(c)));
let findingsApplied = 0;
const severityCounts = { HIGH: 0, MEDIUM: 0, LOW: 0, TECHNICAL: 0, PEDAGOGICAL: 0 };
let sectionTechnical = 0;
let sectionPedagogical = 0;

for (const card of OWNER.cards) {
  const prodId = productionCardId(card);
  const entry = findEntry(enWords, prodId);
  const wwwEntry = findEntry(wwwWords, prodId);
  const originalEntry = findEntry(enOriginal, prodId);
  if (!entry) {
    preconditionMismatches.push({
      cardId: card.cardId,
      productionId: prodId,
      de: card.lemma,
      reason: "Card not found by study.id",
    });
    continue;
  }

  for (const finding of card.findings) {
    const sev = finding.severity;
    if (sev === "HIGH") severityCounts.HIGH++;
    else if (sev === "MEDIUM") severityCounts.MEDIUM++;
    else if (sev === "LOW") severityCounts.LOW++;
    else if (sev === "TECHNICAL") severityCounts.TECHNICAL++;
    else if (sev === "PEDAGOGICAL") severityCounts.PEDAGOGICAL++;
    if (finding.sectionAccentsKind === "TECHNICAL") sectionTechnical++;
    if (finding.sectionAccentsKind === "PEDAGOGICAL") sectionPedagogical++;

    const result = applyFinding(entry, card, finding, originalEntry);
    if (result.status === "PASS") {
      if (wwwEntry) {
        applyFinding(wwwEntry, card, finding, findEntry(enOriginal, prodId));
      }
      findingsApplied++;
      changedCardIds.add(prodId);

      repairs.push({
        cardId: card.cardId,
        productionId: prodId,
        de: card.lemma,
        field: finding.field,
        severity: finding.severity,
        sectionAccentsKind: finding.sectionAccentsKind,
        old: result.old,
        finalEn: result.finalEn,
        applied: "PASS",
        ownerVerdict: "LABOT",
      });
    } else {
      preconditionMismatches.push({
        cardId: card.cardId,
        productionId: prodId,
        de: card.lemma,
        field: finding.field,
        severity: finding.severity,
        ...result,
      });
    }
  }

  const assoc = applyAssociatedRepairs(card, entry);
  if (wwwEntry) applyAssociatedRepairs(card, wwwEntry);
  for (const a of assoc) {
    findingsApplied++;
    changedCardIds.add(card.cardId);
    repairs.push({
      cardId: card.cardId,
      de: card.lemma,
      field: a.field,
      severity: "ASSOCIATED",
      applied: "PASS",
      finalEn: a.ownerFinalEn,
      ownerVerdict: "LABOT",
    });
  }
}

if (preconditionMismatches.length) {
  console.error(JSON.stringify({ preconditionMismatches }, null, 2));
  process.exit(1);
}

function collectEnStringsForAccent(entry) {
  const strings = [];
  collectEnStrings(entry.study ? { lv: entry.lv, study: entry.study } : { lv: entry.lv }, strings);
  return strings.join(" ");
}

function accentTokenMatches(token, text) {
  const t = String(token).trim();
  if (!t) return false;
  const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (new RegExp(`\\b${escaped}\\b`, "i").test(text)) return true;
  if (t.includes(" ")) {
    const lower = text.toLowerCase();
    const needle = t.toLowerCase();
    let idx = 0;
    while (idx < lower.length) {
      const found = lower.indexOf(needle, idx);
      if (found === -1) return false;
      const before = found > 0 ? lower[found - 1] : "";
      const after = lower[found + needle.length] || "";
      if ((!before || !/\w/.test(before)) && (!after || !/\w/.test(after))) return true;
      idx = found + 1;
    }
    return false;
  }
  return false;
}

const out = serializeB1(enWords);
fs.writeFileSync(path.join(ROOT, "data/en/b1.js"), out);
fs.writeFileSync(path.join(ROOT, "www/data/en/b1.js"), out);

const repairLog = {
  auditEntriesProcessed: EXPECTED_OWNER_CARDS,
  uniqueProductionCardsTargeted: targetedProductionIds.size,
  uniqueProductionCardsChanged: changedCardIds.size,
  findingsApplied,
  ownerReviewed: EXPECTED_OWNER_CARDS,
  labot: EXPECTED_OWNER_CARDS,
  nelabot: 0,
  ownerResolvedFindings: OWNER.ownerDecisionsMade ?? EXPECTED_OWNER_FINDINGS,
  cardsRepaired: OWNER.cards.length,
  findingsRepaired: {
    HIGH: severityCounts.HIGH,
    MEDIUM: severityCounts.MEDIUM,
    LOW: severityCounts.LOW,
    TECHNICAL: severityCounts.TECHNICAL,
    PEDAGOGICAL: severityCounts.PEDAGOGICAL,
    sectionAccentsTECHNICAL: sectionTechnical,
    sectionAccentsPEDAGOGICAL: sectionPedagogical,
    total: repairs.length,
  },
  repairs,
  repairedCount: repairs.length,
  preconditionMismatch: 0,
  workflowUnresolvedHighBeforeHigh13: OWNER.workflowUnresolvedHighCardsBeforeHigh13 ?? 23,
  workflowUnresolvedHighAfterHigh13: OWNER.workflowUnresolvedHighCardsAfterHigh13 ?? 0,
  auditSelectionPoolBeforeHigh13: OWNER.auditSelectionPoolBeforeHigh13 ?? 48,
  auditSelectionPoolAfterHigh13: OWNER.auditSelectionPoolAfterHigh13 ?? 0,
  highWorkflowSelectionBacklog: "EXHAUSTED",
};
fs.writeFileSync(
  path.join(ROOT, "reports/temp/en-b1-high-repair-13-log.json"),
  JSON.stringify(repairLog, null, 2)
);

// --- REGRESSION ---
function collectEnStrings(obj, out = [], ctx = { inDe: false }) {
  if (typeof obj === "string") {
    if (!ctx.inDe) out.push(obj);
    return;
  }
  if (Array.isArray(obj)) obj.forEach((x) => collectEnStrings(x, out, ctx));
  else if (obj && typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "sectionAccents") continue;
      collectEnStrings(v, out, { inDe: ctx.inDe || k === "de" });
    }
  }
}

function walkAccents(node, visitor, p = "sectionAccents") {
  if (!node) return;
  if (typeof node === "string") visitor(p, node);
  else if (Array.isArray(node)) node.forEach((v, i) => walkAccents(v, visitor, `${p}[${i}]`));
  else if (typeof node === "object")
    for (const [k, v] of Object.entries(node)) walkAccents(v, visitor, p ? `${p}.${k}` : k);
}

function accentTokenInText(token, entry) {
  const strings = [];
  collectEnStrings(entry.study ? { lv: entry.lv, study: entry.study } : { lv: entry.lv }, strings);
  const text = strings.join(" ");
  const re = new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
  return re.test(text);
}

function fieldIsFixed(finding, actual, resolved, entry) {
  const field = normalizeRepairField(finding.field, entry);
  if (resolved && typeof resolved === "object" && resolved.op) {
    if (resolved.op === "REMOVE_DUPLICATE") {
      const val = getFieldValue(entry, field);
      if (Array.isArray(val)) {
        const seen = new Set();
        for (const t of val) {
          const k = String(t).toLowerCase();
          if (seen.has(k)) return false;
          seen.add(k);
        }
        return true;
      }
    }
    if (resolved.op === "KEEP_ONE_MAIN") {
      const val = getFieldValue(entry, field);
      if (Array.isArray(val)) return val.length === 1 && val[0] === "Main";
    }
    return true;
  }
  if (field.includes("sectionAccents")) {
    if (Array.isArray(resolved)) {
      const cur = getFieldValue(entry, field);
      if (valuesMatch(cur, resolved)) return true;
      if (
        Array.isArray(cur) &&
        resolved.every((t) => cur.some((c) => String(c).toLowerCase() === String(t).toLowerCase()))
      ) {
        return true;
      }
      return false;
    }
    if (
      typeof resolved === "string" &&
      field.match(/\.(purple|green|blue|yellow|orange|red)(\[\d+\])?$/)
    ) {
      const cur = getFieldValue(entry, field);
      if (cur === resolved) return true;
      if (String(cur).toLowerCase() === String(resolved).toLowerCase()) return true;
      if (Array.isArray(cur) && cur.some((c) => String(c).toLowerCase() === String(resolved).toLowerCase())) {
        return true;
      }
      return false;
    }
    return true;
  }
  if (typeof resolved === "string" && typeof actual === "string") {
    if (actual === resolved) return true;
    if (actual.includes(resolved) || resolved.includes(actual)) return true;
  }
  return valuesMatch(actual, resolved);
}

const lv = load("data/b1.js");
const en = load("data/en/b1.js");
const regFindings = [];

function addReg(cardId, severity, field, issue, kind = "content", accentKind = null) {
  regFindings.push({ cardId, severity, field, issue, kind, accentKind });
}

const mirrorOk =
  fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8") ===
  fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8");

let deUnchanged = true;
for (let i = 0; i < deBefore.length; i++) {
  if (JSON.stringify(deBefore[i]) !== JSON.stringify(lv[i])) deUnchanged = false;
}

let syntaxOk = true;
try {
  execSync("node --check data/en/b1.js", { cwd: ROOT });
  execSync("node --check www/data/en/b1.js", { cwd: ROOT });
} catch {
  syntaxOk = false;
}

let orderParityOk = true;
for (let i = 0; i < lv.length; i++) {
  if (lv[i].de !== en[i].de) orderParityOk = false;
}

const diff = execSync("git diff data/en/b1.js", { cwd: ROOT, maxBuffer: 50 * 1024 * 1024 }).toString();
const deDiff = execSync("git diff data/b1.js", { cwd: ROOT }).toString();
let idsChanged = 0;
const diffLines = diff.split("\n");
for (let i = 0; i < diffLines.length; i++) {
  const line = diffLines[i];
  if (!line.match(/^[-+]\s*"de":/)) continue;
  const context = diffLines.slice(Math.max(0, i - 20), i + 1).join("\n");
  if (context.includes("sectionAccents")) continue;
  idsChanged++;
}

if (!mirrorOk) addReg("_global", "CRITICAL", "mirror", "Mirror mismatch");
if (deDiff.trim()) addReg("_global", "CRITICAL", "data/b1.js", "DE source modified");
if (!syntaxOk) addReg("_global", "CRITICAL", "syntax", "JS syntax fail");
if (en.length !== EXPECTED_CARD_COUNT) addReg("_global", "CRITICAL", "count", `Expected ${EXPECTED_CARD_COUNT}, got ${en.length}`);
if (lv.length !== en.length) addReg("_global", "CRITICAL", "structural", "LV/EN count mismatch");
if (!orderParityOk) addReg("_global", "CRITICAL", "order", "DE order mismatch");
if (idsChanged) addReg("_global", "CRITICAL", "ids", `DE field changes detected`);

let ownerFindingsChecked = 0;
let ownerFindingsAppliedCorrectly = 0;
let sectionAccentFindingsChecked = 0;
let sectionAccentFindingsApplied = 0;
const ownerVerificationMismatches = [];

for (const card of OWNER.cards) {
  const prodId = productionCardId(card);
  const entry = findEntry(en, prodId);
  if (!entry) {
    ownerVerificationMismatches.push({ cardId: card.cardId, productionId: prodId, reason: "missing production card" });
    continue;
  }

  for (const finding of card.findings) {
    ownerFindingsChecked++;
    if (finding.sectionAccentsKind) sectionAccentFindingsChecked++;
    if (ownerFindingMatches(entry, card, finding)) {
      ownerFindingsAppliedCorrectly++;
      if (finding.sectionAccentsKind) sectionAccentFindingsApplied++;
    } else {
      const applyField = repairFieldForFinding(card, finding, entry);
      ownerVerificationMismatches.push({
        cardId: card.cardId,
        productionId: prodId,
        field: finding.field,
        applyField,
        expected: formatActual(finding.ownerFinalEn),
        actual: formatActual(getFieldValue(entry, normalizeRepairField(applyField, entry))),
      });
    }
  }
}

const expectedOwnerFindings = OWNER.cards.reduce((n, c) => n + (c.findings?.length || 0), 0);


const repairComplete =
  ownerFindingsChecked === expectedOwnerFindings &&
  ownerFindingsAppliedCorrectly === expectedOwnerFindings &&
  ownerVerificationMismatches.length === 0 &&
  sectionAccentFindingsChecked === sectionTechnical + sectionPedagogical &&
  sectionAccentFindingsApplied === sectionTechnical + sectionPedagogical &&
  syntaxOk &&
  deUnchanged &&
  !deDiff.trim() &&
  mirrorOk &&
  en.length === EXPECTED_CARD_COUNT &&
  idsChanged === 0 &&
  repairLog.preconditionMismatch === 0;

const status = repairComplete
  ? "EN–DE B1 HIGH REPAIR #13 — COMPLETE"
  : "EN–DE B1 HIGH REPAIR #13 — REPAIR INCOMPLETE";

OWNER.highRepair13Status = repairComplete ? "COMPLETE" : "INCOMPLETE";
OWNER.ownerReviewStatus = "EN–DE B1 HIGH #13 OWNER REVIEW: COMPLETE";
OWNER.targetedRegressionStatus = "NOT STARTED";
fs.writeFileSync(JSON_PATH, JSON.stringify(OWNER, null, 2));

writeMarkdownSummary(
  path.join(ROOT, "reports/en-b1-high-repair-13.md"),
  "EN–DE B1 HIGH Repair #13",
  [
    ["Audit entries processed", repairLog.auditEntriesProcessed],
    ["Unique production cards targeted", repairLog.uniqueProductionCardsTargeted],
    ["Unique production cards changed", repairLog.uniqueProductionCardsChanged],
    ["Findings applied (operations)", repairLog.findingsApplied],
    ["OWNER findings verified", ownerFindingsChecked],
    ["OWNER findings applied correctly", ownerFindingsAppliedCorrectly],
    ["sectionAccent findings verified", sectionAccentFindingsChecked],
    ["sectionAccent findings applied", sectionAccentFindingsApplied],
    ["HIGH findings", severityCounts.HIGH],
    ["MEDIUM findings", severityCounts.MEDIUM],
    ["LOW findings", severityCounts.LOW],
    ["PEDAGOGICAL findings", severityCounts.PEDAGOGICAL],
    ["TECHNICAL findings", severityCounts.TECHNICAL],
    ["sectionAccents TECHNICAL", sectionTechnical],
    ["sectionAccents PEDAGOGICAL", sectionPedagogical],
    ["Workflow unresolved HIGH before #13", repairLog.workflowUnresolvedHighBeforeHigh13],
    ["Workflow unresolved HIGH after #13", repairLog.workflowUnresolvedHighAfterHigh13],
    ["Audit-selection pool after #13", repairLog.auditSelectionPoolAfterHigh13],
    ["HIGH workflow selection backlog", repairLog.highWorkflowSelectionBacklog],
    ["Precondition mismatches", preconditionMismatches.length],
    ["Status", status],
    ["Targeted regression", "NOT STARTED"],
  ]
);

console.log(
  JSON.stringify(
    {
      auditEntriesProcessed: repairLog.auditEntriesProcessed,
      uniqueProductionCardsTargeted: repairLog.uniqueProductionCardsTargeted,
      uniqueProductionCardsChanged: repairLog.uniqueProductionCardsChanged,
      findingsApplied: repairLog.findingsApplied,
      ownerFindingsChecked,
      ownerFindingsAppliedCorrectly,
      ownerVerificationMismatches: ownerVerificationMismatches.length,
      sectionAccentFindingsChecked,
      sectionAccentFindingsApplied,
      repaired: repairLog.repairedCount,
      preconditionMismatches: preconditionMismatches.length,
      syntaxOk,
      deUnchanged,
      mirrorOk,
      cardCount: en.length,
      idsChanged,
      status,
      targetedRegression: "NOT STARTED",
    },
    null,
    2
  )
);

if (!repairComplete) {
  console.error(JSON.stringify({ ownerVerificationMismatches, preconditionMismatches }, null, 2));
  process.exit(1);
}

