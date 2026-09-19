#!/usr/bin/env node
"use strict";

const { authorizeFullProductionCurrentAudit } = require("./authorize-full-run");

function authorizeFullLinguisticAudit(options = {}) {
  return authorizeFullProductionCurrentAudit(options);
}

module.exports = {
  authorizeFullLinguisticAudit,
  authorizeFullProductionCurrentAudit,
};
