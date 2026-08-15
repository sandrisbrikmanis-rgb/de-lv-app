const DASH_RE = /\s*[–—\-]\s*/;

function findDash(text) {
  const s = String(text || "");
  const m = s.match(DASH_RE);
  if (!m) return null;
  const idx = s.search(DASH_RE);
  return {
    sep: m[0],
    de: s.slice(0, idx).trim(),
    native: s.slice(idx + m[0].length).trim()
  };
}

function parseGridTables(content) {
  const meta = {};
  const byId = {};
  const lines = content.split("\n");

  let inTable = false;
  let colStarts = null;
  let currentId = null;
  let currentField = null;
  let approvedParts = [];

  function flush() {
    const value = approvedParts.join(" ").replace(/\s+/g, " ").trim();
    if (currentId && value) byId[currentId] = value;
    if (currentField && value) meta[currentField] = value;
    currentId = null;
    currentField = null;
    approvedParts = [];
  }

  function columnStartsFromSeparator(line) {
    const starts = [];
    for (let i = 0; i < line.length; i++) {
      if (line[i] !== "-") continue;
      starts.push(i);
      while (i < line.length && line[i] === "-") i += 1;
    }
    return starts.length >= 2 ? starts : null;
  }

  function sliceColumn(line, index) {
    if (!colStarts || index >= colStarts.length) return "";
    const start = colStarts[index];
    const end = index + 1 < colStarts.length ? colStarts[index + 1] : line.length;
    return line.slice(start, end).trim();
  }

  function approvedFromLine(line) {
    if (!colStarts) return "";
    return sliceColumn(line, colStarts.length - 1);
  }

  function appendApproved(text) {
    const col = text.trim();
    if (!col) return;
    if (!approvedParts.length) approvedParts.push(col);
    else approvedParts[approvedParts.length - 1] += ` ${col}`;
  }

  for (const line of lines) {
    const isTableEdge = /^\s*-{10,}\s*$/.test(line);
    if (isTableEdge) {
      if (inTable) flush();
      inTable = !inTable;
      if (!inTable) colStarts = null;
      continue;
    }
    if (!inTable) continue;

    const sepStarts = columnStartsFromSeparator(line);
    if (sepStarts) {
      colStarts = sepStarts;
      continue;
    }
    if (/approved/i.test(line) && !line.includes("`")) continue;

    const idMatch = line.match(/^\s+`([^`]+)`/);
    if (idMatch) {
      flush();
      currentId = idMatch[1];
      appendApproved(approvedFromLine(line));
      continue;
    }

    const fieldMatch = line.match(/^\s+(title|subtitle|intro)\s+/i);
    if (fieldMatch && !line.includes("`")) {
      flush();
      currentField = fieldMatch[1].toLowerCase();
      appendApproved(approvedFromLine(line));
      continue;
    }

    if ((currentId || currentField) && colStarts && /^\s{6,}/.test(line)) {
      const col = approvedFromLine(line);
      if (col) appendApproved(col);
    }
  }

  flush();
  return { meta, byId };
}

function parseApprovedMarkdown(content) {
  const meta = {};
  const byId = {};
  const lines = content.split("\n");
  let headers = [];

  for (const line of lines) {
    if (!line.startsWith("|")) {
      headers = [];
      continue;
    }
    if (line.includes("---")) continue;

    const cells = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim().replace(/\\\|/g, "|"));
    if (!cells.length) continue;

    if (headers.length === 0) {
      headers = cells.map((h) => h.toLowerCase());
      continue;
    }

    const approvedIdx = headers.findIndex((h) => h.includes("approved"));
    if (approvedIdx < 0) continue;
    const approved = cells[approvedIdx];
    if (!approved) continue;

    const idCell = cells[0];
    const idMatch = idCell.match(/`([^`]+)`/);
    if (idMatch) {
      byId[idMatch[1]] = approved;
      continue;
    }

    const fieldIdx = headers.findIndex((h) => h === "field" || h === "id");
    if (fieldIdx >= 0 && cells[fieldIdx] && !cells[fieldIdx].includes("`")) {
      const key = cells[fieldIdx].replace(/`/g, "").trim();
      if (key) byId[key] = approved;
      continue;
    }
  }

  const grid = parseGridTables(content);
  for (const [k, v] of Object.entries(grid.meta)) {
    if (!byId[k]) byId[k] = v;
  }
  for (const [k, v] of Object.entries(grid.byId)) {
    if (!byId[k]) byId[k] = v;
  }

  return { meta, byId };
}

module.exports = { findDash, parseApprovedMarkdown };
