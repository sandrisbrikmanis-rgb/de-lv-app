"use strict";

function normalizeField(field) {
  let f = String(field).replace(/^`|`$/g, "").replace(/\.root\./g, ".");

  f = f.replace(/\.(leftBlocks|rightBlocks)\.text\.(\w+)\.\[(\d+)\]\[(\d+)\]/g, ".$1[$4].text.$2[$3]");
  f = f.replace(/\.(leftBlocks|rightBlocks)\.text\.(\w+)\.\[(\d+)\](?!\[)/g, ".$1[$3].text.$2");

  f = f.replace(/\.examples\.(lv|de)\.(\w+)\.\[(\d+)\]\[(\d+)\]/g, ".examples[$4].$1.$2[$3]");
  f = f.replace(/\.examples\.(lv|de)\.(\w+)\[(\d+)\](?!\])/g, ".examples[$3].$1.$2");

  f = f.replace(/\.comparison\.(example|meaning|word)\.(\w+)\.\[(\d+)\]\[(\d+)\]/g, ".comparison[$4].$1.$2[$3]");
  f = f.replace(/\.comparison\.(example|meaning|word)\.(\w+)\.\[(\d+)\](?!\[)/g, ".comparison[$3].$1.$2");
  f = f.replace(/\.comparison\.(example|meaning|word)\.(\w+)\[(\d+)\](?!\])/g, ".comparison[$3].$1.$2");

  f = f.replace(/\.important\.(text|example)\.(\w+)\.\[(\d+)\]\[(\d+)\]/g, ".important[$4].$1.$2[$3]");
  f = f.replace(/\.important\.(text|example)\.(\w+)\.\[(\d+)\](?!\[)/g, ".important[$3].$1.$2");

  // sectionAccents color arrays: .purple.[0] -> .purple[0]
  f = f.replace(/\.(blue|green|yellow|orange|purple|red)\.\[(\d+)\]/g, ".$1[$2]");

  return f;
}

function parseFieldParts(field) {
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(normalizeField(field)))) {
    parts.push(m[1] !== undefined ? m[1] : parseInt(m[2], 10));
  }
  return parts;
}

function getAt(root, field) {
  const parts = parseFieldParts(field);
  let cur = root;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function setAt(root, field, value) {
  const parts = parseFieldParts(field);
  if (!parts.length) return false;
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] == null) return false;
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
  return true;
}

function findEntry(words, cardId) {
  let entry = words.find((e) => e.study?.id === cardId);
  if (entry) return entry;

  const base = cardId.replace(/^b1-/, "").replace(/-study.*$/, "");
  entry = words.find((e) => e.de === base || e.de.toLowerCase() === base.toLowerCase());
  if (entry) return entry;

  const stripped = base.replace(/-\d+$/, "");
  if (stripped !== base) {
    entry = words.find((e) => e.de === stripped || e.de.toLowerCase() === stripped.toLowerCase());
    if (entry) return entry;
    entry = words.find(
      (e) =>
        e.study?.id === `b1-${stripped}` ||
        e.study?.id?.toLowerCase() === `b1-${stripped}`.toLowerCase()
    );
    if (entry) return entry;
  }

  entry = words.find((e) => e.study?.id?.replace(/-\d+$/, "") === cardId.replace(/-\d+$/, ""));
  return entry || null;
}

function entryIndex(words, cardId) {
  const entry = findEntry(words, cardId);
  if (!entry) return -1;
  return words.indexOf(entry);
}

module.exports = { parseFieldParts, getAt, setAt, findEntry, entryIndex, normalizeField };
