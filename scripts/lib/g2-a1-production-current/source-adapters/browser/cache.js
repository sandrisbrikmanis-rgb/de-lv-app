#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("../../../audit-common");

const CACHE_ROOT = path.join(ROOT, "reports/temp/g2-a1-production-current/official-source-browser-evidence-cache");

function cacheKey({ appLang, lookupTerm, authoritySeed, entryUrl }) {
  const raw = `${appLang}|${lookupTerm}|${authoritySeed}|${entryUrl || ""}`;
  return crypto.createHash("sha256").update(raw, "utf8").digest("hex");
}

function readBrowserCached(key) {
  const p = path.join(CACHE_ROOT, `${key}.json`);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function writeBrowserCached(key, payload) {
  fs.mkdirSync(CACHE_ROOT, { recursive: true });
  const p = path.join(CACHE_ROOT, `${key}.json`);
  fs.writeFileSync(p, `${JSON.stringify({ cachedAt: new Date().toISOString(), ...payload }, null, 2)}\n`);
}

module.exports = { readBrowserCached, writeBrowserCached, cacheKey, CACHE_ROOT };
