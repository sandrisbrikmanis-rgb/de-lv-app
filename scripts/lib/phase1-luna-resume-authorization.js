#!/usr/bin/env node
"use strict";

/**
 * R-AUTH-002 — OWNER-frozen resume authorization values.
 * Runtime CLI args are compared against these constants, never self-referentially.
 */
const { DEFAULT_MODEL } = require("./luna-phase1-openai");

const OWNER_APPROVED_RESUME = Object.freeze({
  infraHeadSha: "282beac865216ba3ba03132769db25b5e87c55a9",
  resumeRunId: "phase1-2026-08-30T08-56-50-163Z-a8e1dec1",
  discoveryBaselineSha: "6cfb96105f7f741f6052d20ee1d1e342f198fda2",
  model: DEFAULT_MODEL,
});

function resolveOwnerApprovedResume(overrides = {}) {
  if (overrides.ownerApprovedResume) {
    return { ...OWNER_APPROVED_RESUME, ...overrides.ownerApprovedResume };
  }
  return { ...OWNER_APPROVED_RESUME };
}

function buildResumeAuthOptionsFromCli(cli = {}, overrides = {}) {
  const approved = resolveOwnerApprovedResume(overrides);
  return {
    resumeLuna: true,
    approvedInfraHeadSha: cli.approvedInfraHeadSha ?? null,
    ownerApprovedInfraHeadSha: approved.infraHeadSha,
    runId: cli.resumeRunId || null,
    authorizedRunId: approved.resumeRunId,
    discoveryBaselineSha: approved.discoveryBaselineSha,
    expectedDiscoveryBaselineSha: approved.discoveryBaselineSha,
    model: cli.model || approved.model,
    expectedModel: approved.model,
    ...overrides,
  };
}

module.exports = {
  OWNER_APPROVED_RESUME,
  resolveOwnerApprovedResume,
  buildResumeAuthOptionsFromCli,
};
