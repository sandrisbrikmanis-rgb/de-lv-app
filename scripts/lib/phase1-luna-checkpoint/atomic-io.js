#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

function writeJsonAtomic(targetPath, data) {
  const dir = path.dirname(targetPath);
  fs.mkdirSync(dir, { recursive: true });
  const payload = `${JSON.stringify(data, null, 2)}\n`;
  const tempPath = path.join(dir, `.${path.basename(targetPath)}.${process.pid}.${Date.now()}.tmp`);
  let fd;
  try {
    fd = fs.openSync(tempPath, "w");
    fs.writeSync(fd, payload, "utf8");
    fs.fsyncSync(fd);
    fs.closeSync(fd);
    fd = null;
    fs.renameSync(tempPath, targetPath);
  } catch (error) {
    if (fd != null) {
      try {
        fs.closeSync(fd);
      } catch (_) {
        /* ignore */
      }
    }
    try {
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    } catch (_) {
      /* ignore */
    }
    throw error;
  }
  return targetPath;
}

function readJsonFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function readJsonFileIfExists(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return readJsonFile(filePath);
  } catch (_) {
    return null;
  }
}

function isPartialTempFile(filePath) {
  const base = path.basename(filePath);
  return base.includes(".tmp") && base.startsWith(".");
}

function listCheckpointFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".json") && !isPartialTempFile(name))
    .map((name) => path.join(dir, name));
}

module.exports = {
  writeJsonAtomic,
  readJsonFile,
  readJsonFileIfExists,
  listCheckpointFiles,
  isPartialTempFile,
};
