"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");

const STATUS_RE = /\*\*(LABOT|NEEDS_SOURCE_REVIEW|NELABOT|FALSE_POSITIVE)\*\*/;

function parsePendingPipeTable(md) {
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("| ET-A2-")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cols.length < 8 || cols[0] === "Audit ID") continue;
    rows.push({
      auditId: cols[0],
      cardId: cols[1],
      field: cols[2],
      current: cols[3],
      proposedEt: cols[4],
      severity: cols[5],
      category: cols[6],
      status: cols[7],
      ownerNew: cols[8] || "",
      note: cols[9] || "",
    });
  }
  return rows;
}

function loadPendingDecisions() {
  const rows = [];
  for (let g = 1; g <= 11; g++) {
    const file = path.join(ROOT, "reports", `et-a2-owner-decisions-group${String(g).padStart(2, "0")}.md`);
    if (!fs.existsSync(file)) continue;
    rows.push(...parsePendingPipeTable(fs.readFileSync(file, "utf8")));
  }
  return rows;
}

function extractOwnerNewFromLabotBlock(block) {
  const lines = block.split("\n");
  const deParts = [];
  const etParts = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const pairs = [...line.matchAll(/([^=\n]{1,80}?)\s*=\s*([^=\n|]{2,80}?)(?=\s{2,}|$|\*\*)/g)];

    if (i === 0 && line.includes("**LABOT**")) {
      const after = line.split("**LABOT**")[1] || "";
      const m = after.match(
        /\s+(Ich [^=]{2,}?|Der [^=]{2,}?|Die [^=]{2,}?|Das [^=]{2,}?|Er [^=]{2,}?|Wir [^=]{2,}?|Es [^=]{2,}?|Sie [^=]{2,}?|Man [^=]{2,}?)\s*(?:\s{2,}|$)/,
      );
      if (m) deParts.push(m[1].trim());
    }

    if (pairs.length >= 2) {
      deParts.push(pairs[1][1].trim());
      etParts.push(
        pairs[1][2]
          .trim()
          .replace(/\s{2,}(LV\/|fragments).*$/i, "")
          .trim(),
      );
    } else if (i > 0 && !pairs.length) {
      const chunks = line
        .trim()
        .split(/\s{2,}/)
        .map((s) => s.trim())
        .filter(Boolean);
      const newCol = chunks[1];
      if (newCol && /^[a-zäöüõ]/i.test(newCol) && !/^(HIGH|MEDIUM|fragments|dabisku|LV)/.test(newCol)) {
        etParts.push(newCol);
      }
    }
  }

  const de = deParts.join(" ").replace(/\s+/g, " ").trim();
  const et = etParts
    .filter((p, idx, arr) => idx === 0 || p !== arr[idx - 1])
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  if (de && et) return `${de} = ${et}`;
  return "";
}

function parseAcceptedGrid(md) {
  const byId = new Map();
  const blocks = md.split(/\n(?=\s*ET-A2-\d{4}\b)/);
  for (const block of blocks) {
    const idMatch = block.match(/ET-A2-\d{4}/);
    if (!idMatch) continue;
    const auditId = idMatch[0];
    const statusMatch = block.match(STATUS_RE);
    const status = statusMatch ? statusMatch[1] : "";
    let ownerNew = "";
    if (status === "LABOT") {
      ownerNew = extractOwnerNewFromLabotBlock(block);
    }
    byId.set(auditId, { auditId, status, ownerNew, rawBlock: block.slice(0, 200) });
  }
  return byId;
}

function loadAcceptedFromPaths(paths) {
  const merged = new Map();
  for (const p of paths) {
    if (!fs.existsSync(p)) continue;
    const parsed = parseAcceptedGrid(fs.readFileSync(p, "utf8"));
    for (const [id, row] of parsed) merged.set(id, row);
  }
  return merged;
}

function defaultAcceptedPaths() {
  const dir = path.join(ROOT, "reports");
  const uploads = "/home/ubuntu/.cursor/projects/workspace/uploads";
  const paths = [];
  for (let g = 1; g <= 11; g++) {
    const name = `et-a2-owner-decisions-group${String(g).padStart(2, "0")}-accepted.md`;
    const repo = path.join(dir, name);
    if (fs.existsSync(repo)) paths.push(repo);
    else {
      const glob = fs.readdirSync(uploads).filter((f) => f.startsWith(`et-a2-owner-decisions-group${String(g).padStart(2, "0")}-accepted`));
      if (glob[0]) paths.push(path.join(uploads, glob[0]));
    }
  }
  return paths;
}

function mergeAcceptedWithPending(acceptedPaths) {
  const pending = loadPendingDecisions();
  const accepted = loadAcceptedFromPaths(acceptedPaths);
  const merged = [];
  const skipped = [];

  for (const row of pending) {
    const acc = accepted.get(row.auditId);
    if (!acc) {
      skipped.push({ ...row, reason: "no_accepted_row" });
      continue;
    }
    const status = acc.status || row.status;
    if (status !== "LABOT") {
      skipped.push({ ...row, reason: status || "not_labot", acceptedStatus: status });
      continue;
    }
    const ownerNew = (acc.ownerNew || row.ownerNew || "").trim();
    if (!ownerNew || /^\(ET tulkojums\)/i.test(ownerNew)) {
      skipped.push({ ...row, reason: "no_concrete_owner_new", acceptedStatus: status });
      continue;
    }
    if (row.cardId === "STRUCT" || row.field === "study.count" || row.field === "study") {
      skipped.push({ ...row, reason: "struct_skip", acceptedStatus: status });
      continue;
    }
    if (/sectionAccents/i.test(row.field)) {
      skipped.push({ ...row, reason: "sectionaccents_nsr", acceptedStatus: status });
      continue;
    }
    merged.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field: row.field,
      rawField: row.field,
      current: row.current,
      ownerNew,
      status,
    });
  }

  return { merged, skipped, pendingCount: pending.length, acceptedCount: accepted.size };
}

module.exports = {
  parsePendingPipeTable,
  parseAcceptedGrid,
  loadPendingDecisions,
  loadAcceptedFromPaths,
  defaultAcceptedPaths,
  mergeAcceptedWithPending,
  normalizeApplyField(field) {
    let f = String(field || "").trim();
    const entryMatch = f.match(/^entry\[\d+\]\.(.+)$/);
    if (entryMatch) f = entryMatch[1];
    if (f === "etText" || f === "etMain") return "lv";
    if (/sectionAccents/i.test(f)) return null;
    return f;
  },
};
