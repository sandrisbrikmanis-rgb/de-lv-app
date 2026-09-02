#!/usr/bin/env node
"use strict";

/**
 * R-AUTH-004 — Resume identity fixtures for tests/documentation only.
 * Runtime OWNER execution authorization comes exclusively from an external
 * --owner-authorization-file outside the repository worktree.
 */
const { DEFAULT_MODEL } = require("./luna-phase1-openai");

/** Historical OWNER-approved repair HEAD (documentation / self-reference proof only). */
const HISTORICAL_OWNER_APPROVED_HEAD_SHA = "282beac865216ba3ba03132769db25b5e87c55a9";

/** @deprecated R-AUTH-003 self-reference fixture — not used for runtime authorization. */
const OWNER_APPROVED_RESUME = Object.freeze({
  infraHeadSha: HISTORICAL_OWNER_APPROVED_HEAD_SHA,
  resumeRunId: "phase1-2026-08-30T08-56-50-163Z-a8e1dec1",
  discoveryBaselineSha: "6cfb96105f7f741f6052d20ee1d1e342f198fda2",
  model: DEFAULT_MODEL,
});

const TEST_FIXTURE_RESUME_IDENTITY = Object.freeze({
  resumeRunId: OWNER_APPROVED_RESUME.resumeRunId,
  discoveryBaselineSha: OWNER_APPROVED_RESUME.discoveryBaselineSha,
  model: DEFAULT_MODEL,
});

function buildResumeAuthOptionsFromCli(cli = {}, overrides = {}) {
  return {
    resumeLuna: true,
    approvedInfraHeadSha: cli.approvedInfraHeadSha ?? null,
    ownerAuthorizationFile: cli.ownerAuthorizationFile ?? null,
    runId: cli.resumeRunId || null,
    model: cli.model || DEFAULT_MODEL,
    ...overrides,
  };
}

module.exports = {
  HISTORICAL_OWNER_APPROVED_HEAD_SHA,
  OWNER_APPROVED_RESUME,
  TEST_FIXTURE_RESUME_IDENTITY,
  buildResumeAuthOptionsFromCli,
};
