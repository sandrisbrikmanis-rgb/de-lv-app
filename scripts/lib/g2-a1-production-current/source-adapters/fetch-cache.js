#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("../../audit-common");

const CACHE_ROOT = path.join(ROOT, "reports/temp/g2-a1-production-current/official-source-fetch-cache");

function cacheKey(url) {
  return crypto.createHash("sha256").update(url, "utf8").digest("hex");
}

function readCached(url) {
  const p = path.join(CACHE_ROOT, `${cacheKey(url)}.json`);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function writeCached(url, payload) {
  fs.mkdirSync(CACHE_ROOT, { recursive: true });
  const p = path.join(CACHE_ROOT, `${cacheKey(url)}.json`);
  fs.writeFileSync(p, `${JSON.stringify({ url, cachedAt: new Date().toISOString(), ...payload }, null, 2)}\n`);
}

module.exports = { readCached, writeCached, CACHE_ROOT };
