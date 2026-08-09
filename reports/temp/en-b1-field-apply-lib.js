/**
 * EN B1 field mutation utilities for production repairs.
 * Adapted from en-b1-high-repair-13.js and generate-en-b1-main-reconciliation-audit.js.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

const IDENTITY_ALIAS = {
  "b1-kunde": "b1-kunde-2",
  "b1-vertragen": "b1-vertreten",
  "b1-steuer-2": "b1-steuer",
};

function loadB1(rel) {
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

function indexFromCardId(cardId) {
  const m = String(cardId || "").match(/-(\d+)$/);
  if (!m) return -1;
  const n = Number(m[1]);
  if (n < 100) return -1;
  return n;
}

function findEntry(enWords, productionId, indexHint, auditCardId) {
  if (auditCardId) {
    for (const e of enWords) {
      if (e.study?.id === auditCardId) return e;
    }
    const aliasedAudit = IDENTITY_ALIAS[auditCardId];
    if (aliasedAudit) {
      for (const e of enWords) {
        if (e.study?.id === aliasedAudit) return e;
      }
    }
  }
  if (typeof indexHint === "number" && indexHint >= 0 && indexHint < enWords.length) {
    const hinted = enWords[indexHint];
    if (
      !auditCardId ||
      !hinted?.study?.id ||
      hinted.study.id === auditCardId ||
      hinted.study.id === IDENTITY_ALIAS[auditCardId]
    ) {
      return hinted;
    }
  }
  const aliased = IDENTITY_ALIAS[productionId] || productionId;
  const norm = normalizeCardId(aliased);
  for (const e of enWords) {
    if (e.study?.id && normalizeCardId(e.study.id) === norm) return e;
  }
  if (String(productionId || "").startsWith("idx:")) {
    const idx = Number(String(productionId).slice(4));
    if (idx >= 0 && idx < enWords.length) return enWords[idx];
  }
  const idxFromAudit = indexFromCardId(auditCardId);
  if (idxFromAudit >= 0 && idxFromAudit < enWords.length) {
    return enWords[idxFromAudit];
  }
  const deHint = String(productionId || auditCardId || "")
    .replace(/^b1-/, "")
    .replace(/-\d+$/, "");
  if (deHint) {
    for (const e of enWords) {
      if (e.de && normalizeCardId(e.de) === normalizeCardId(deHint.replace(/-/g, " "))) return e;
    }
  }
  return null;
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

function dedupeAccentArrayAtField(root, field) {
  const resolved = resolveAccentField(field, root);
  const parts = parseFieldPath(resolved);
  if (!parts.length) return;
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) cur = cur?.[parts[i]];
  if (!cur) return;
  const lastKey = parts[parts.length - 1];
  const val = cur[lastKey];
  if (!Array.isArray(val)) return;
  const seen = new Set();
  const deduped = [];
  for (const token of val) {
    const key = String(token).toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(token);
    }
  }
  cur[lastKey] = deduped;
}

function removeAccentAtField(root, field) {
  const resolved = resolveAccentField(field, root);
  const parts = parseFieldPath(resolved);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) cur = cur?.[parts[i]];
  if (!cur) return;
  const last = parts[parts.length - 1];
  if (Array.isArray(cur[last])) {
    delete cur[last];
    return;
  }
  if (typeof cur[last] === "string") {
    delete cur[last];
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

function formatVal(v) {
  if (v === undefined || v === null) return "";
  if (Array.isArray(v)) return JSON.stringify(v);
  if (typeof v === "object") {
    if (Array.isArray(v.purple)) return JSON.stringify(v.purple);
    if (typeof v.purple === "string") return v.purple;
    return JSON.stringify(v);
  }
  return String(v);
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

function normalizeExpectedTokens(expected) {
  if (typeof expected !== "string") return expected;
  return expected
    .replace(/^(lv|purple):\s*/i, "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
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
      if (tokens.length > 1 && tokens.every((t) => actual.some((a) => String(a).toLowerCase() === t.toLowerCase()))) {
        return true;
      }
      if (expected.includes("Main") && actual.filter((x) => x === "Main").length >= 2) return true;
      if (actual.some((a) => expected.toLowerCase().includes(String(a).toLowerCase()) && String(a).length > 2)) {
        return true;
      }
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

function isRemoveDuplicateAccent(text) {
  return text === "REMOVE DUPLICATE ACCENT" || text === "REMOVE DUPLICATE ACCENTS";
}

function isKeepOneMainAccent(text) {
  return /Keep (only )?one matching .Main. accent/i.test(text) || /Keep one matching .Main. accent/i.test(text);
}

function parseManifestExpected(s) {
  if (Array.isArray(s)) return s;
  if (s && typeof s === "object") return s;
  if (typeof s !== "string") return s;
  if (s === "__REMOVE_ACCENT__") return { op: "REMOVE_ACCENT" };
  if (isRemoveDuplicateAccent(s)) return { op: "REMOVE_DUPLICATE" };
  if (isKeepOneMainAccent(s)) return { op: "KEEP_ONE_MAIN" };
  if (s.startsWith("[")) {
    try {
      const parsed = JSON.parse(s);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      /* ignore */
    }
  }
  return s;
}

function applyRepairMapping(entry, fieldPath, expectedValue) {
  const field = normalizeRepairField(fieldPath, entry);
  const resolved = parseManifestExpected(expectedValue);

  if (resolved && typeof resolved === "object" && resolved.op === "REMOVE_DUPLICATE") {
    dedupeAccentArrayAtField(entry, field);
    return;
  }

  if (resolved && typeof resolved === "object" && resolved.op === "REMOVE_ACCENT") {
    removeAccentAtField(entry, field);
    return;
  }

  if (resolved && typeof resolved === "object" && resolved.op === "KEEP_ONE_MAIN") {
    keepOneMainAccent(entry, field);
    return;
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
  } else if (field === "lv") {
    setFieldValue(entry, field, resolved);
    if (entry.study?.translation !== undefined) entry.study.translation = resolved;
  } else {
    setFieldValue(entry, field, resolved);
  }
}

module.exports = {
  ACCENT_COLORS,
  normalizeCardId,
  findEntry,
  parseFieldPath,
  resolveAccentField,
  getFieldValueRaw,
  getFieldValue,
  setFieldValue,
  setAccentTokenAtField,
  normalizeRepairField,
  normalizeAccentWriteValue,
  dedupeAccentArrayAtField,
  removeAccentAtField,
  keepOneMainAccent,
  applySectionAccentsNode,
  ensureSectionAccentTipBlock,
  formatVal,
  valuesMatch,
  preconditionMatch,
  parseManifestExpected,
  applyRepairMapping,
  serializeB1,
  loadB1,
};
