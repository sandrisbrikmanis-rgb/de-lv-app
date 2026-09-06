#!/usr/bin/env node
"use strict";

/**
 * Raw JSON top-level key extraction and duplicate detection.
 * Independent of value types (string, number, object, array, etc.).
 */

function skipWhitespace(text, pos) {
  while (pos < text.length && /\s/.test(text[pos])) pos += 1;
  return pos;
}

function malformed(pos) {
  const err = new Error(`MALFORMED_JSON:${pos}`);
  err.code = "MALFORMED_JSON";
  return err;
}

function readJsonStringLiteral(text, pos) {
  if (text[pos] !== '"') throw malformed(pos);
  let i = pos + 1;
  while (i < text.length) {
    const ch = text[i];
    if (ch === "\\") {
      i += 1;
      if (i >= text.length) throw malformed(i);
      if (text[i] === "u") {
        if (i + 4 >= text.length) throw malformed(i);
        i += 5;
      } else {
        i += 1;
      }
      continue;
    }
    if (ch === '"') {
      const literal = text.slice(pos, i + 1);
      let decoded;
      try {
        decoded = JSON.parse(literal);
      } catch {
        throw malformed(pos);
      }
      return { literal, decoded, end: i + 1 };
    }
    i += 1;
  }
  throw malformed(pos);
}

function skipJsonValue(text, pos) {
  pos = skipWhitespace(text, pos);
  if (pos >= text.length) throw malformed(pos);
  const ch = text[pos];

  if (ch === '"') {
    return readJsonStringLiteral(text, pos).end;
  }
  if (ch === "{") {
    pos += 1;
    pos = skipWhitespace(text, pos);
    if (text[pos] === "}") return pos + 1;
    while (pos < text.length) {
      const key = readJsonStringLiteral(text, pos);
      pos = skipWhitespace(text, key.end);
      if (text[pos] !== ":") throw malformed(pos);
      pos = skipJsonValue(text, pos + 1);
      pos = skipWhitespace(text, pos);
      if (text[pos] === "}") return pos + 1;
      if (text[pos] !== ",") throw malformed(pos);
      pos = skipWhitespace(text, pos + 1);
    }
    throw malformed(pos);
  }
  if (ch === "[") {
    pos += 1;
    pos = skipWhitespace(text, pos);
    if (text[pos] === "]") return pos + 1;
    while (pos < text.length) {
      pos = skipJsonValue(text, pos);
      pos = skipWhitespace(text, pos);
      if (text[pos] === "]") return pos + 1;
      if (text[pos] !== ",") throw malformed(pos);
      pos = skipWhitespace(text, pos + 1);
    }
    throw malformed(pos);
  }
  if (ch === "t" && text.slice(pos, pos + 4) === "true") return pos + 4;
  if (ch === "f" && text.slice(pos, pos + 5) === "false") return pos + 5;
  if (ch === "n" && text.slice(pos, pos + 4) === "null") return pos + 4;
  const numMatch = text.slice(pos).match(/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+\-]?\d+)?/);
  if (numMatch) return pos + numMatch[0].length;
  throw malformed(pos);
}

function extractTopLevelJsonKeys(rawText) {
  const text = rawText.replace(/^\uFEFF/, "").trim();
  let pos = skipWhitespace(text, 0);
  if (text[pos] !== "{") {
    const err = malformed(pos);
    return { keys: [], duplicates: [], error: err.message, code: err.code };
  }
  pos += 1;
  pos = skipWhitespace(text, pos);
  if (text[pos] === "}") {
    return { keys: [], duplicates: [] };
  }

  const keys = [];
  const seen = new Set();
  const duplicates = [];

  while (pos < text.length) {
    const keyToken = readJsonStringLiteral(text, pos);
    keys.push(keyToken.decoded);
    if (seen.has(keyToken.decoded)) {
      duplicates.push(keyToken.decoded);
    } else {
      seen.add(keyToken.decoded);
    }
    pos = skipWhitespace(text, keyToken.end);
    if (text[pos] !== ":") {
      const err = malformed(pos);
      return { keys, duplicates, error: err.message, code: err.code };
    }
    pos = skipJsonValue(text, pos + 1);
    pos = skipWhitespace(text, pos);
    if (text[pos] === "}") break;
    if (text[pos] !== ",") {
      const err = malformed(pos);
      return { keys, duplicates, error: err.message, code: err.code };
    }
    pos = skipWhitespace(text, pos + 1);
  }

  return { keys, duplicates };
}

function detectDuplicateJsonKeys(rawText) {
  const result = extractTopLevelJsonKeys(rawText);
  if (result.error) {
    return { keys: result.keys || [], duplicates: result.duplicates || [], error: result.error, code: result.code };
  }
  return { keys: result.keys, duplicates: result.duplicates };
}

module.exports = {
  extractTopLevelJsonKeys,
  detectDuplicateJsonKeys,
  skipJsonValue,
  readJsonStringLiteral,
};
