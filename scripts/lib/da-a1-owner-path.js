"use strict";

function parseFieldParts(field) {
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field))) {
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
  const deGuess = cardId.replace(/^a1-/, "").replace(/-study.*$/, "");
  entry = words.find((e) => e.de === deGuess || e.de.toLowerCase() === deGuess.toLowerCase());
  return entry || null;
}

module.exports = { parseFieldParts, getAt, setAt, findEntry };
