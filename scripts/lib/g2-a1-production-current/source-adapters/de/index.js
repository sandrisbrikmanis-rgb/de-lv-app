#!/usr/bin/env node
"use strict";

const { lookupDeDwds } = require("./dwds-entry-adapter");
const { lookupDeDuden } = require("./duden-entry-adapter");
const { SOURCE_ACCESS_OUTCOME } = require("../../official-source-access-constants");

async function lookupDeOfficialEntry(ctx) {
  const order = [lookupDeDwds, lookupDeDuden];
  let last = null;
  for (const fn of order) {
    // eslint-disable-next-line no-await-in-loop
    const result = await fn(ctx);
    last = result;
    if (result.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED) return result;
  }
  return last;
}

module.exports = {
  lookupDeOfficialEntry,
};
