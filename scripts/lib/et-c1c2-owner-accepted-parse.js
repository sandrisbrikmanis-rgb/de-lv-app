"use strict";

const STATUS_RE = /^(LABOT|NELABOT|FALSE_POSITIVE|NEEDS_SOURCE_REVIEW|PENDING)$/;

function parsePipeRows(md) {
  const rows = [];
  for (const line of String(md).split("\n")) {
    if (!line.startsWith("| ET-C1C2-")) continue;
    const parts = line
      .split("|")
      .slice(1, -1)
      .map((p) => p.trim());
    if (parts.length < 4) continue;
    if (parts.length >= 6) {
      const [auditId, cardId, field, current, status, ownerNew, ownerNote = ""] = parts;
      if (!STATUS_RE.test(status)) continue;
      rows.push({
        auditId,
        cardId,
        field,
        current,
        status,
        ownerNew: ownerNew || "",
        ownerNote,
      });
      continue;
    }
    // sectionAccents NSR table: Audit ID | Card | Field | STATUS
    const [auditId, cardId, field, status] = parts;
    if (!STATUS_RE.test(status)) continue;
    rows.push({
      auditId,
      cardId,
      field,
      current: "",
      status,
      ownerNew: "",
      ownerNote: "",
    });
  }
  return rows;
}

module.exports = { parsePipeRows, STATUS_RE };
