#!/usr/bin/env node
"use strict";

const RUNTIME_MODES = Object.freeze({
  MOCK_DRY_RUN: "MOCK_DRY_RUN",
  REAL_LUNA: "REAL_LUNA",
});

const NON_EXECUTABLE_MOCK_PROOF = "NON_EXECUTABLE_MOCK_PROOF";

function isRuntimeMode(mode) {
  return mode === RUNTIME_MODES.MOCK_DRY_RUN || mode === RUNTIME_MODES.REAL_LUNA;
}

function assertRuntimeMode(mode) {
  if (!isRuntimeMode(mode)) {
    const err = new Error(`RUNTIME_MODE_REQUIRED:${mode || "undefined"}`);
    err.code = "RUNTIME_MODE_REQUIRED";
    return { ok: false, error: err };
  }
  return { ok: true, mode };
}

module.exports = {
  RUNTIME_MODES,
  NON_EXECUTABLE_MOCK_PROOF,
  isRuntimeMode,
  assertRuntimeMode,
};
