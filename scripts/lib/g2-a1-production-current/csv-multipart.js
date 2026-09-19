#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const { CSV_MAX_BYTES } = require("./constants");

function sha256(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function parseCsvLine(line) {
  return line;
}

function splitCsvMultipart(csvText, options = {}) {
  const maxBytes = options.maxBytes || CSV_MAX_BYTES;
  const lines = csvText.split(/\r?\n/);
  if (lines.length === 0) throw new Error("empty_csv");
  const header = lines[0];
  const dataLines = lines.slice(1).filter((l) => l.length > 0);
  const parts = [];
  let i = 0;
  while (i < dataLines.length) {
    const partIndex = parts.length + 1;
    const chunk = [];
    let body = `${header}\n`;
    while (i < dataLines.length) {
      const candidate = `${body}${dataLines[i]}\n`;
      if (Buffer.byteLength(candidate, "utf8") > maxBytes && chunk.length > 0) break;
      if (Buffer.byteLength(candidate, "utf8") > maxBytes && chunk.length === 0) {
        chunk.push(dataLines[i]);
        body = `${header}\n${chunk.join("\n")}\n`;
        i += 1;
        break;
      }
      chunk.push(dataLines[i]);
      body = `${header}\n${chunk.join("\n")}\n`;
      i += 1;
    }
    const rowStart = i - chunk.length + 1;
    const rowEnd = i;
    parts.push({
      partIndex,
      header,
      rowStart,
      rowEnd,
      rowCount: chunk.length,
      byteLength: Buffer.byteLength(body, "utf8"),
      sha256: sha256(body),
      content: body,
    });
  }
  const manifest = {
    multipart: parts.length > 1 || parts[0]?.byteLength > maxBytes,
    totalRows: dataLines.length,
    maxBytes,
    parts: parts.map(({ content, ...meta }) => meta),
    combinedSha256: sha256(parts.map((p) => p.content).join("")),
  };
  return { parts, manifest };
}

function mergeCsvMultipart(parts) {
  if (!parts.length) throw new Error("no_parts");
  const header = parts[0].header;
  const rows = [];
  for (const p of parts) {
    if (p.header !== header) throw new Error("header_mismatch");
    const lines = p.content.split(/\r?\n/).slice(1).filter(Boolean);
    rows.push(...lines);
  }
  const merged = `${header}\n${rows.join("\n")}\n`;
  return { merged, rowCount: rows.length, sha256: sha256(merged) };
}

function verifyMultipartNoGaps(manifest) {
  const sorted = [...manifest.parts].sort((a, b) => a.partIndex - b.partIndex);
  let expectedStart = 1;
  for (const p of sorted) {
    if (p.rowStart !== expectedStart) return { pass: false, code: "ROW_GAP", part: p.partIndex };
    expectedStart = p.rowEnd + 1;
    if (p.byteLength > manifest.maxBytes) return { pass: false, code: "PART_OVERSIZE", part: p.partIndex };
  }
  if (expectedStart - 1 !== manifest.totalRows) return { pass: false, code: "ROW_COUNT" };
  return { pass: true };
}

module.exports = {
  splitCsvMultipart,
  mergeCsvMultipart,
  verifyMultipartNoGaps,
  sha256,
};
