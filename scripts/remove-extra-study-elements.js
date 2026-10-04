#!/usr/bin/env node
/**
 * COPY-ONLY removal of EXTRA study rows from target languages.
 * LV files are not modified. Existing scripts are not modified.
 * KEEP_IDS is empty unless --keep=E0001,E0002 is passed.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const LANGS = "bg bs cs da en es et fi fr gr hr hu is it lb lt mk nb nl nn pl pt ro ru sk sl sq sr sv tr uk".split(" ");
const ARRAYS = new Set(["study.examples", "study.comparison", "study.variants"]);
const OUT_DIR = path.join(ROOT, "reports/owner-a1-extra");

function argValue(name) {
  const eq = process.argv.find((arg) => arg.startsWith(`${name}=`));
  return eq ? eq.slice(name.length + 1) : "";
}

const KEEP_IDS = new Set(argValue("--keep").split(",").map((id) => id.trim()).filter(Boolean));
const DRY = process.argv.includes("--dry-run");

function sha256(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function loadAlign() {
  const srcPath = path.join(ROOT, "scripts/audit-owner-lv-additions.js");
  let src = fs.readFileSync(srcPath, "utf8");
  src = src.replace(
    "  const extras = [];\n  let orderShift = 0;",
    "  const extras = [];\n  const orderShiftItems = [];\n  let orderShift = 0;"
  );
  src = src.replace(
    "      if (match !== index) orderShift += 1;",
    "      if (match !== index) {\n        orderShift += 1;\n        orderShiftItems.push({ index, match, sig: described.sig, german: described.german });\n      }"
  );
  src = src.replace(
    "  return { extras, orderShift };",
    "  return { extras, orderShift, orderShiftItems };"
  );
  if (!src.includes("orderShiftItems")) throw new Error("align export patch failed");
  src += "\nmodule.exports = { alignArray, describeItem, studyArrays, cardId, cardKey, pairCards, loadArray, hasGermanBearing, LEVELS, LANGS };\n";
  const out = "/tmp/align-export.js";
  fs.writeFileSync(out, src);
  return require(out);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === "\"" && text[i + 1] === "\"") {
        cell += "\"";
        i += 1;
      } else if (ch === "\"") quoted = false;
      else cell += ch;
      continue;
    }
    if (ch === "\"") {
      quoted = true;
      continue;
    }
    if (ch === ",") {
      row.push(cell);
      cell = "";
      continue;
    }
    if (ch === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      continue;
    }
    if (ch !== "\r") cell += ch;
  }
  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const header = rows[0];
  return rows.slice(1).filter((item) => item.some(Boolean)).map((item) => {
    const obj = {};
    header.forEach((key, index) => {
      obj[key] = item[index] || "";
    });
    return obj;
  });
}

function canon(german) {
  const copy = {};
  Object.keys(german || {}).filter((key) => key !== "DE_VARIANT").sort().forEach((key) => {
    copy[key] = german[key];
  });
  return JSON.stringify(copy);
}

function removableClass(value) {
  return value.includes("NEW_CONTENT") || value.includes("DUPLICATE_OF_LV_ROW");
}

function parseValue(text, i) {
  while (text[i] === " " || text[i] === "\t" || text[i] === "\n" || text[i] === "\r") i += 1;
  const ch = text[i];
  if (ch === "\"") return parseString(text, i);
  if (ch === "{") return parseObject(text, i);
  if (ch === "[") return parseArray(text, i);
  const start = i;
  while (i < text.length && !",]}".includes(text[i]) && !/\s/.test(text[i])) i += 1;
  return { node: { type: "atom", start, end: i, value: text.slice(start, i) }, i };
}

function parseString(text, i) {
  const start = i;
  i += 1;
  while (i < text.length) {
    if (text[i] === "\\") {
      i += 2;
      continue;
    }
    if (text[i] === "\"") {
      i += 1;
      return { node: { type: "string", start, end: i, value: JSON.parse(text.slice(start, i)) }, i };
    }
    i += 1;
  }
  throw new Error(`unterminated string at ${start}`);
}

function parseObject(text, i) {
  const start = i;
  i += 1;
  const props = {};
  while (i < text.length) {
    while (text[i] === " " || text[i] === "\t" || text[i] === "\n" || text[i] === "\r") i += 1;
    if (text[i] === "}") {
      i += 1;
      return { node: { type: "object", start, end: i, props }, i };
    }
    const key = parseString(text, i);
    i = key.i;
    while (text[i] === " " || text[i] === "\t" || text[i] === "\n" || text[i] === "\r") i += 1;
    if (text[i] !== ":") throw new Error(`expected colon at ${i}`);
    i += 1;
    const value = parseValue(text, i);
    i = value.i;
    props[key.node.value] = value.node;
    while (text[i] === " " || text[i] === "\t" || text[i] === "\n" || text[i] === "\r") i += 1;
    if (text[i] === ",") {
      i += 1;
      continue;
    }
    if (text[i] === "}") {
      i += 1;
      return { node: { type: "object", start, end: i, props }, i };
    }
    throw new Error(`expected comma or brace at ${i}`);
  }
  throw new Error(`unterminated object at ${start}`);
}

function parseArray(text, i) {
  const start = i;
  i += 1;
  const items = [];
  while (i < text.length) {
    while (text[i] === " " || text[i] === "\t" || text[i] === "\n" || text[i] === "\r") i += 1;
    if (text[i] === "]") {
      i += 1;
      return { node: { type: "array", start, end: i, items }, i };
    }
    const value = parseValue(text, i);
    i = value.i;
    items.push(value.node);
    while (text[i] === " " || text[i] === "\t" || text[i] === "\n" || text[i] === "\r") i += 1;
    if (text[i] === ",") {
      i += 1;
      continue;
    }
    if (text[i] === "]") {
      i += 1;
      return { node: { type: "array", start, end: i, items }, i };
    }
    throw new Error(`expected comma or bracket at ${i}`);
  }
  throw new Error(`unterminated array at ${start}`);
}

function parseCardArray(text) {
  const marker = text.indexOf("= [");
  if (marker < 0) throw new Error("card array not found");
  const parsed = parseArray(text, text.indexOf("[", marker));
  return parsed.node;
}

function arrayNode(cardNode, arrayPath) {
  let node = cardNode;
  arrayPath.split(".").forEach((part) => {
    if (!node || node.type !== "object") {
      node = null;
      return;
    }
    node = node.props[part] || null;
  });
  if (!node || node.type !== "array") return null;
  return node;
}

function elementSpan(text, item) {
  let start = item.start;
  const lineStart = text.lastIndexOf("\n", start - 1) + 1;
  if (text.slice(lineStart, start).trim() === "") start = lineStart;
  let end = item.end;
  while (end < text.length && (text[end] === " " || text[end] === "\t")) end += 1;
  if (text[end] === ",") end += 1;
  if (text[end] === "\r") end += 1;
  if (text[end] === "\n") end += 1;
  return { start, end, text: text.slice(start, end) };
}

function applyDeletions(text, spans) {
  const sorted = [...spans].sort((a, b) => b.start - a.start);
  let out = text;
  sorted.forEach((span) => {
    out = out.slice(0, span.start) + out.slice(span.end);
  });
  return out;
}

function restoreText(text, spans) {
  const sorted = [...spans].sort((a, b) => a.start - b.start);
  let out = text;
  sorted.forEach((span) => {
    const chunk = span.text != null ? span.text : span.source;
    out = out.slice(0, span.start) + chunk + out.slice(span.start);
  });
  return out;
}

function main() {
  const align = loadAlign();
  const csvRows = parseCsv(fs.readFileSync(path.join(ROOT, "reports/owner-lv-additions/owner-lv-additions.csv"), "utf8"));
  if (csvRows.length !== 185) throw new Error(`expected 185 groups, got ${csvRows.length}`);
  const groups = new Map();
  csvRows.forEach((row) => {
    if (!ARRAYS.has(row.array_path)) throw new Error(`unexpected path ${row.array_path}`);
    if (!removableClass(row.classification)) throw new Error(`unexpected class ${row.classification}`);
    const german = JSON.parse(row.german_fields);
    const key = `${row.level}\0${row.card_id}\0${row.array_path}\0${canon(german)}`;
    if (groups.has(key)) throw new Error(`canon collision ${row.element_id} vs ${groups.get(key).element_id}`);
    groups.set(key, row);
  });

  const sharedCounts = new Map();
  function noteShared(value, lang) {
    const text = String(value || "").normalize("NFC").replace(/\u00A0/g, " ").trim();
    if (!text) return;
    if (!sharedCounts.has(text)) sharedCounts.set(text, new Set());
    sharedCounts.get(text).add(lang);
  }
  LEVELS.forEach((level) => {
    LANGS.forEach((lang) => {
      const list = align.loadArray(path.join(ROOT, `data/${lang}/${level}.js`));
      list.forEach((entry) => {
        align.studyArrays(entry).forEach((array) => {
          array.items.forEach((item) => {
            if (!item || typeof item !== "object") return;
            if (typeof item.example === "string") noteShared(item.example.split(/[–—]|\s-\s|\s=\s/)[0], lang);
            if (typeof item.de === "string") noteShared(item.de.split(/[–—]|\s-\s|\s=\s/)[0], lang);
          });
        });
      });
    });
  });
  const sharedGerman = new Set();
  sharedCounts.forEach((langs, text) => {
    if (langs.size >= 5) sharedGerman.add(text);
  });

  const records = [];
  const shifts = [];
  const kept = [];
  const unmatched = [];
  let unmatchedTotal = 0;
  const filePlans = new Map();

  function planFile(rel, level, lang) {
    const full = path.join(ROOT, rel);
    const original = fs.readFileSync(full, "utf8");
    const cards = parseCardArray(original);
    const lvList = align.loadArray(path.join(ROOT, `data/${level}.js`));
    const langList = align.loadArray(full);
    if (cards.items.length !== langList.length) {
      throw new Error(`${rel} source cards ${cards.items.length} != loaded ${langList.length}`);
    }
    const { pairs, unpaired } = align.pairCards(lvList, langList);
    const spans = [];
    function consider(lvEntry, langEntry, langIndex, card) {
      const arrays = new Map(align.studyArrays(lvEntry || {}).map((row) => [row.path, row.items]));
      align.studyArrays(langEntry).forEach((array) => {
        if (!ARRAYS.has(array.path)) return;
        const aligned = align.alignArray(arrays.get(array.path) || [], array.items, sharedGerman);
        aligned.orderShiftItems.forEach((item) => {
          shifts.push({
            language: lang,
            tree: rel.startsWith("www/") ? "www" : "data",
            level,
            card_id: card,
            array_path: array.path,
            index: item.index,
            lv_index: item.match,
            german: item.german
          });
        });
        const node = arrayNode(cards.items[langIndex], array.path);
        if (!node) throw new Error(`${rel} missing source array ${array.path} card ${langIndex}`);
        if (node.items.length !== array.items.length) {
          throw new Error(`${rel} ${array.path} span ${node.items.length} != loaded ${array.items.length}`);
        }
        aligned.extras.forEach((extra) => {
          const key = `${level}\0${card}\0${array.path}\0${canon(extra.german)}`;
          const group = groups.get(key);
          const tree = rel.startsWith("www/") ? "www" : "data";
          if (!group) {
            unmatchedTotal += 1;
            if (unmatched.length < 12) {
              unmatched.push({ language: lang, tree, level, card_id: card, array_path: array.path, index: extra.index, german: extra.german });
            }
            return;
          }
          if (KEEP_IDS.has(group.element_id)) {
            kept.push({ element_id: group.element_id, language: lang, tree, reason: "KEEP_IDS", index: extra.index });
            return;
          }
          const lvItems = arrays.get(array.path) || [];
          const lvAtIndex = lvItems[extra.index];
          if (lvAtIndex && typeof lvAtIndex === "object") {
            const lvCanon = canon(align.describeItem(lvAtIndex, [], sharedGerman, true).german);
            if (lvCanon !== "{}" && lvCanon === canon(extra.german)) {
              kept.push({
                element_id: group.element_id,
                language: lang,
                tree,
                reason: "LV_MATCH",
                index: extra.index,
                german: extra.german
              });
              return;
            }
          }
          const span = elementSpan(original, node.items[extra.index]);
          spans.push(span);
          records.push({
            element_id: group.element_id,
            classification: group.classification,
            language: lang,
            tree: rel.startsWith("www/") ? "www" : "data",
            level,
            card_id: card,
            array_path: array.path,
            index: extra.index,
            element: array.items[extra.index],
            file: rel,
            start: span.start,
            end: span.end,
            source: span.text
          });
        });
      });
    }
    pairs.forEach((pair) => {
      consider(pair.lv, pair.lang, pair.langIndex, align.cardId(pair.lv, pair.lvIndex));
    });
    unpaired.forEach((row) => {
      consider(null, row.lang, row.langIndex, align.cardId(row.lang, row.langIndex));
    });
    if (!spans.length) return;
    const modified = applyDeletions(original, spans);
    const restored = restoreText(modified, spans);
    if (restored !== original) {
      throw new Error(`restore mismatch ${rel} spans ${spans.length}`);
    }
    filePlans.set(rel, { original, modified, sha: sha256(original) });
  }

  LEVELS.forEach((level) => {
    LANGS.forEach((lang) => {
      planFile(`data/${lang}/${level}.js`, level, lang);
      planFile(`www/data/${lang}/${level}.js`, level, lang);
    });
  });

  function listedLangs(field) {
    const body = String(field || "").replace(/^\d+:\s*/, "").trim();
    if (!body) return [];
    return body.split(",").map((item) => item.trim()).filter(Boolean);
  }
  const removedLangs = new Map();
  records.forEach((row) => {
    if (!removedLangs.has(row.element_id)) removedLangs.set(row.element_id, new Set());
    removedLangs.get(row.element_id).add(row.language);
  });
  const keptLangs = new Map();
  kept.forEach((row) => {
    if (!keptLangs.has(row.element_id)) keptLangs.set(row.element_id, new Set());
    keptLangs.get(row.element_id).add(row.language);
  });
  const notFound = [];
  csvRows.forEach((row) => {
    const removedSet = removedLangs.get(row.element_id) || new Set();
    const keptSet = keptLangs.get(row.element_id) || new Set();
    const missing = listedLangs(row.languages_with).filter((lang) => !removedSet.has(lang) && !keptSet.has(lang));
    if (missing.length) notFound.push({ element_id: row.element_id, languages: missing });
  });

  const summary = {
    groups: csvRows.length,
    keepIds: [...KEEP_IDS],
    files: filePlans.size,
    removed: records.length,
    orderShift: shifts.length,
    kept: kept.length,
    unmatched: unmatchedTotal,
    notFoundGroups: notFound.length,
    byLevel: {}
  };
  records.forEach((row) => {
    const key = `${row.level}:${row.tree}`;
    summary.byLevel[key] = (summary.byLevel[key] || 0) + 1;
  });
  process.stdout.write(`${JSON.stringify(summary)}\n`);
  if (notFound.length) {
    process.stdout.write(`NOT_FOUND ${JSON.stringify(notFound.slice(0, 12))}\n`);
  }
  if (unmatched.length) {
    process.stdout.write(`UNMATCHED ${JSON.stringify(unmatched.slice(0, 8))}\n`);
  }
  if (kept.length) {
    process.stdout.write(`KEPT ${JSON.stringify(kept.slice(0, 8))}\n`);
  }
  if (DRY) return;

  fs.mkdirSync(OUT_DIR, { recursive: true });
  filePlans.forEach((plan, rel) => {
    fs.writeFileSync(path.join(ROOT, rel), plan.modified);
  });
  const proof = [];
  filePlans.forEach((plan, rel) => {
    const fileRecords = records.filter((row) => row.file === rel);
    const current = fs.readFileSync(path.join(ROOT, rel), "utf8");
    const restored = restoreText(current, fileRecords);
    const ok = sha256(restored) === plan.sha && restored === plan.original;
    proof.push({ file: rel, baseSha256: plan.sha, restoredSha256: sha256(restored), ok, removed: fileRecords.length });
    if (!ok) throw new Error(`post-write restore failed ${rel}`);
  });
  const payload = {
    baseCommit: execFileSync("git", ["rev-parse", "HEAD"], { cwd: ROOT, encoding: "utf8" }).trim(),
    removed: records.length,
    records: records.map((row) => ({
      element_id: row.element_id,
      classification: row.classification,
      language: row.language,
      tree: row.tree,
      level: row.level,
      card_id: row.card_id,
      array_path: row.array_path,
      index: row.index,
      element: row.element,
      file: row.file,
      start: row.start,
      end: row.end,
      source: row.source
    }))
  };
  writeRemovedParts(payload);
  fs.writeFileSync(path.join(OUT_DIR, "restore-proof.json"), `${JSON.stringify({ ok: proof.every((row) => row.ok), files: proof }, null, 2)}\n`);
  fs.writeFileSync(path.join(OUT_DIR, "order-shift.json"), `${JSON.stringify(shifts, null, 2)}\n`);
  fs.writeFileSync(path.join(OUT_DIR, "kept-in-lv.json"), `${JSON.stringify(kept, null, 2)}\n`);
  fs.writeFileSync(path.join(OUT_DIR, "not-found.json"), `${JSON.stringify(notFound, null, 2)}\n`);
  fs.writeFileSync(path.join(ROOT, "scripts/restore-extra-study-elements.js"), `${restoreScriptSource()}\n`);
}

function writeRemovedParts(payload) {
  const dir = path.join(OUT_DIR, "removed-elements");
  fs.mkdirSync(dir, { recursive: true });
  const limit = 480 * 1024;
  const parts = [];
  let batch = [];
  payload.records.forEach((row) => {
    batch.push(row);
    const trial = JSON.stringify({
      baseCommit: payload.baseCommit,
      part: parts.length + 1,
      parts: 0,
      removedTotal: payload.removed,
      removedInPart: batch.length,
      records: batch
    });
    if (Buffer.byteLength(trial) > limit && batch.length > 1) {
      batch.pop();
      parts.push(batch);
      batch = [row];
    }
  });
  if (batch.length) parts.push(batch);
  parts.forEach((records, index) => {
    const body = {
      baseCommit: payload.baseCommit,
      part: index + 1,
      parts: parts.length,
      removedTotal: payload.removed,
      removedInPart: records.length,
      records
    };
    const text = `${JSON.stringify(body)}\n`;
    if (Buffer.byteLength(text) > 500 * 1024) {
      throw new Error(`removed part ${index + 1} exceeds 500KB`);
    }
    const name = `part-${String(index + 1).padStart(2, "0")}.json`;
    fs.writeFileSync(path.join(dir, name), text);
  });
  const readme = [
    "# removed-elements",
    "",
    "Pilnais noņemto Study elementu saraksts sadalīts daļās, jo viens JSON pārsniedz 500 KB.",
    `Daļas: ${parts.length}. Kopā elementi: ${payload.removed}.`,
    "Katra daļa satur baseCommit, part, parts, removedTotal, removedInPart un records.",
    "Katrs records: element_id, classification, language, tree, level, card_id, array_path, index, element, file, start, end, source.",
    "Atjaunošana: node scripts/restore-extra-study-elements.js (saliek visas part-*.json un salīdzina SHA-256 ar restore-proof.json).",
    ""
  ].join("\n");
  fs.writeFileSync(path.join(dir, "README.md"), readme);
}

function restoreScriptSource() {
  return `#!/usr/bin/env node
/**
 * Restores study rows removed by remove-extra-study-elements.js.
 * Inserts the stored source text at the original offsets, ascending.
 * Does not write files. Compares SHA-256 with the base files in restore-proof.json.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "reports/owner-a1-extra/removed-elements");
const files = fs.readdirSync(DIR).filter((name) => /^part-\\d+\\.json$/.test(name)).sort();
if (!files.length) throw new Error("no removed-elements parts");
const records = [];
files.forEach((name) => {
  const payload = JSON.parse(fs.readFileSync(path.join(DIR, name), "utf8"));
  records.push(...payload.records);
});
const byFile = new Map();
records.forEach((row) => {
  if (!byFile.has(row.file)) byFile.set(row.file, []);
  byFile.get(row.file).push(row);
});

function restoreText(text, spans) {
  const sorted = [...spans].sort((a, b) => a.start - b.start);
  let out = text;
  sorted.forEach((span) => {
    out = out.slice(0, span.start) + span.source + out.slice(span.start);
  });
  return out;
}

const proofPath = path.join(ROOT, "reports/owner-a1-extra/restore-proof.json");
const proof = JSON.parse(fs.readFileSync(proofPath, "utf8"));
let failed = 0;
proof.files.forEach((row) => {
  const current = fs.readFileSync(path.join(ROOT, row.file), "utf8");
  const spans = byFile.get(row.file) || [];
  const restored = restoreText(current, spans);
  const digest = crypto.createHash("sha256").update(restored).digest("hex");
  if (digest !== row.baseSha256) {
    failed += 1;
    process.stderr.write(\`MISMATCH \${row.file} \${digest} != \${row.baseSha256}\\n\`);
  }
});
process.stdout.write(\`\${JSON.stringify({ files: proof.files.length, failed })}\\n\`);
if (failed) process.exit(1);
`;
}

if (require.main === module) main();
