#!/usr/bin/env node
"use strict";

const recoveryFixture = require("../fixtures/phase1-id-recovery-lb-sq.json");

const LANDLICH_STRUCTURAL_TARGET = Object.freeze({
  scopeId: "g2/b1/lb",
  objectIndex: 1718,
  sourceFile: "b1.js",
  expectedRaw: "ländlich",
  canonicalId: recoveryFixture.landlichCanonicalId,
  prefix: "l",
  suffix: "ndlich",
  minSegmentLen: 1,
  maxSegmentLen: 3,
});

const C0_OR_DEL_RE = /[\u0000-\u001F\u007F]/;
const HEX_DIGIT_RE = /^[0-9a-fA-F]$/;

function isLandlichStructuralTarget(expectedParsed) {
  if (!expectedParsed) return false;
  return (
    expectedParsed.scopeId === LANDLICH_STRUCTURAL_TARGET.scopeId &&
    expectedParsed.objectIndex === LANDLICH_STRUCTURAL_TARGET.objectIndex &&
    expectedParsed.sourceFile === LANDLICH_STRUCTURAL_TARGET.sourceFile &&
    expectedParsed.raw === LANDLICH_STRUCTURAL_TARGET.expectedRaw
  );
}

function evaluateLandlichStructuralSegment(returnedRaw) {
  const { prefix, suffix, minSegmentLen, maxSegmentLen } = LANDLICH_STRUCTURAL_TARGET;

  if (typeof returnedRaw !== "string") {
    return { ok: false, reason: "INVALID_RETURNED_RAW" };
  }
  if (returnedRaw === LANDLICH_STRUCTURAL_TARGET.expectedRaw) {
    return { ok: false, reason: "EXACT_RAW_MATCH" };
  }
  if (!returnedRaw.startsWith(prefix)) {
    return { ok: false, reason: "PREFIX_MISMATCH" };
  }
  if (!returnedRaw.endsWith(suffix)) {
    return { ok: false, reason: "SUFFIX_MISMATCH" };
  }

  const segment = returnedRaw.slice(prefix.length, returnedRaw.length - suffix.length);
  if (segment.length < minSegmentLen || segment.length > maxSegmentLen) {
    return { ok: false, reason: "SEGMENT_LENGTH_OUT_OF_RANGE", segment };
  }

  let hasC0 = false;
  for (const ch of segment) {
    if (C0_OR_DEL_RE.test(ch)) {
      hasC0 = true;
      continue;
    }
    if (!HEX_DIGIT_RE.test(ch)) {
      return { ok: false, reason: "SEGMENT_NON_HEX_NON_C0", segment };
    }
  }

  if (!hasC0) {
    return { ok: false, reason: "SEGMENT_MISSING_C0", segment };
  }

  return { ok: true, reason: "LANDLICH_STRUCTURAL_C0_RECOVERY", segment };
}

function isLandlichStructuralC0Recovery(expectedParsed, returnedRaw) {
  if (!isLandlichStructuralTarget(expectedParsed)) return false;
  return evaluateLandlichStructuralSegment(returnedRaw).ok;
}

module.exports = {
  LANDLICH_STRUCTURAL_TARGET,
  C0_OR_DEL_RE,
  HEX_DIGIT_RE,
  isLandlichStructuralTarget,
  evaluateLandlichStructuralSegment,
  isLandlichStructuralC0Recovery,
};
