#!/usr/bin/env node
"use strict";

const { runPreflight } = require("./preflight");

const OWNER_AUTH_ENV = "G2_A1_PRODUCTION_CURRENT_FULL_OWNER_AUTHORIZED";

function authorizeFullLinguisticAudit(options = {}) {
  const blockers = [];
  if (process.env[OWNER_AUTH_ENV] !== "1") {
    blockers.push({
      code: "OWNER_AUTHORIZATION_MISSING",
      message: `Set ${OWNER_AUTH_ENV}=1 after explicit OWNER authorization for full linguistic audit`,
    });
  }
  const preflight = runPreflight(options);
  if (!preflight.pass) {
    blockers.push({
      code: "PREFLIGHT_FAIL",
      message: preflight.blockers.map((b) => b.code).join(", "),
    });
  }
  return {
    pass: blockers.length === 0,
    blockers,
    preflightPass: preflight.pass,
    masterVersion: preflight.masterVersion,
    ownerAuthEnv: OWNER_AUTH_ENV,
  };
}

module.exports = {
  OWNER_AUTH_ENV,
  authorizeFullLinguisticAudit,
};
