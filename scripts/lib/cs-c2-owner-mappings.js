#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const MASTER = path.join(ROOT, "cs-c2-owner-approved-master-repair.md");

function normalizeField(field) {
  if (field === "csText") return "lv";
  return field;
}

function parseFieldPath(field) {
  const nf = normalizeField(field);
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(nf)) !== null) {
    parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  }
  return parts;
}

function getAt(obj, parts) {
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function valuesEqual(a, b) {
  if (typeof a === "object" || typeof b === "object") {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return String(a) === String(b);
}

function parseJsonish(str) {
  const trimmed = str.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
    try {
      return JSON.parse(trimmed);
    } catch {
      /* fall through */
    }
  }
  const unescaped = trimmed.replace(/\\\[/g, "[").replace(/\\\]/g, "]").replace(/\\"/g, '"');
  if (unescaped.startsWith("[") || unescaped.startsWith("{")) {
    try {
      return JSON.parse(unescaped);
    } catch {
      /* fall through */
    }
  }
  return str;
}

function isContinuationLine(line) {
  if (!/^\s{8,}\S/.test(line)) return false;
  const trimmed = line.trim();
  if (/^[-=]{5,}$/.test(trimmed)) return false;
  if (/Card ID/i.test(line)) return false;
  if (/^\\?#/.test(trimmed)) return false;
  if (/^[-]{3,}\s+[-]{3,}/.test(trimmed)) return false;
  return true;
}

function joinCurrentParts(parts) {
  return parts
    .map((p, i) => {
      const trimmedEnd = p.replace(/\s+$/g, "");
      if (i === 0 && /^\s*•/.test(trimmedEnd)) return trimmedEnd.replace(/^\s+/, " ");
      return trimmedEnd.trim();
    })
    .join(" ");
}

function parseMasterMappings(content) {
  const lines = content.split(/\r?\n/);
  let columns = null;
  const rows = [];
  let buf = [];

  function detectColumns(line) {
    if (!line.includes("CURRENT") || !line.includes("NEW") || !line.includes("Card ID")) return null;
    const currentIdx = line.indexOf("CURRENT");
    const newIdx = line.indexOf("NEW");
    const statusIdx = line.indexOf("Status");
    if (currentIdx < 0 || newIdx < 0 || statusIdx < 0 || newIdx <= currentIdx) return null;
    return { current: currentIdx, new: newIdx, status: statusIdx };
  }

  function extractColumns(line, cols) {
    return {
      current: line.slice(cols.current, cols.new).replace(/\s+$/g, ""),
      new: line.slice(cols.new, cols.status).trim(),
    };
  }

  function flush() {
    if (!buf.length || !columns) {
      buf = [];
      return;
    }
    const block = buf.join("\n");
    buf = [];
    const statusMatch = block.match(/\*\*(LABOT|NELABOT|FALSE_POSITIVE)\*\*/);
    if (!statusMatch) return;
    const status = statusMatch[1];
    const head = block.replace(/\*\*(LABOT|NELABOT|FALSE_POSITIVE)\*\*/, "");
    const idField = head.match(/`(c2-[^`]+)`\s+`([^`]+)`/);
    if (!idField) return;
    const cardId = idField[1];
    const field = idField[2];
    const currentParts = [];
    const newParts = [];
    for (const line of head.split("\n")) {
      if (!line.trim()) continue;
      const { current, new: next } = extractColumns(line, columns);
      if (current) currentParts.push(current);
      if (next) newParts.push(next);
    }
    rows.push({
      cardId,
      field,
      current: joinCurrentParts(currentParts),
      new: newParts.join(" "),
      status,
      rawContent: head,
    });
  }

  for (const line of lines) {
    const cols = detectColumns(line);
    if (cols) {
      flush();
      columns = cols;
      continue;
    }
    if (/^\s*#{1,6}\s/.test(line)) {
      flush();
      continue;
    }
    if (/^\s+\d+\s+`c2-/.test(line)) {
      flush();
      buf = [line];
    } else if (buf.length && isContinuationLine(line)) {
      buf.push(line);
    } else if (buf.length && /^\s*[-=]{5,}\s*$/.test(line.trim())) {
      flush();
    }
  }
  flush();
  return rows;
}

function loadOwnerLabotMappings(filePath = MASTER) {
  const content = fs.readFileSync(filePath, "utf8");
  return parseMasterMappings(content).filter((r) => r.status === "LABOT");
}

module.exports = {
  MASTER,
  parseMasterMappings,
  parseFieldPath,
  getAt,
  parseJsonish,
  normalizeField,
  valuesEqual,
  loadOwnerLabotMappings,
};
