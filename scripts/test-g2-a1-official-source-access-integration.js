#!/usr/bin/env node
"use strict";

const { lookupDeDwds } = require("./lib/g2-a1-production-current/source-adapters/de/dwds-entry-adapter");
const { lookupDeDuden } = require("./lib/g2-a1-production-current/source-adapters/de/duden-entry-adapter");
const { lookupEtSonaveeb } = require("./lib/g2-a1-production-current/source-adapters/target/et-sonaveeb-adapter");
const { fetchAllowlistedPage } = require("./lib/g2-a1-production-current/source-adapters/http-page");
const { buildAllowlistForLanguage } = require("./lib/g2-a1-production-current/registry-domain-allowlist");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");
const { evidenceQualityOk } = require("./lib/g2-a1-production-current/targeted-source-access-validation");

const integration = process.argv.includes("--integration") || process.env.G2_A1_SOURCE_ACCESS_INTEGRATION === "1";

function assert(c, msg) {
  if (!c) throw new Error(msg);
}

async function testDeDwdsKnownEntry() {
  const allow = buildAllowlistForLanguage("bg");
  const r = await lookupDeDwds({
    lookupTerm: "lernen",
    allowedDomains: allow.de.allowedDomains,
    authorityName: allow.de.authorityName,
    provenance: { role: "DE" },
  });
  assert(r.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED, r.outcome);
  assert(evidenceQualityOk(r), "de dwds evidence");
  assert(r.entryUrl.includes("/wb/lernen"), r.entryUrl);
  console.log("OK DE DWDS validated entry", r.entryUrl);
}

async function testDeDudenKnownEntry() {
  const allow = buildAllowlistForLanguage("bg");
  const r = await lookupDeDuden({
    lookupTerm: "lernen",
    allowedDomains: allow.de.allowedDomains,
    authorityName: allow.de.authorityName,
    provenance: { role: "DE" },
  });
  assert(r.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED, r.outcome);
  assert(r.entryUrl.includes("/rechtschreibung/"), r.entryUrl);
  console.log("OK DE Duden validated entry", r.entryUrl);
}

async function testDeMissingEntry() {
  const allow = buildAllowlistForLanguage("bg");
  const r = await lookupDeDwds({
    lookupTerm: "zzqqxxnotaword999",
    allowedDomains: allow.de.allowedDomains,
    authorityName: allow.de.authorityName,
    provenance: { role: "DE" },
  });
  assert(
    r.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND ||
      r.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED ||
      r.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_PAGE_FETCHED,
    r.outcome,
  );
  console.log("OK DE missing/non-entry", r.outcome);
}

async function testEtKnownEntry() {
  const allow = buildAllowlistForLanguage("et");
  const r = await lookupEtSonaveeb({
    lookupTerm: "õppima",
    allowedDomains: allow.target.allowedDomains,
    authorityName: allow.target.authorityName,
    provenance: { role: "TARGET", language: "et" },
  });
  assert(r.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED, r.outcome);
  assert(evidenceQualityOk(r), "et evidence");
  console.log("OK ET sonaveeb validated entry", r.entryUrl);
}

async function testRejectedDomain() {
  const allow = buildAllowlistForLanguage("bg");
  const page = await fetchAllowlistedPage("https://example.com/x", { allowedDomains: allow.de.allowedDomains });
  assert(page.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_DOMAIN_REJECTED, page.outcome);
  console.log("OK rejected domain");
}

async function testUnreachableAllowlistedHost() {
  const allow = buildAllowlistForLanguage("bg");
  const page = await fetchAllowlistedPage("https://www.dwds.de:1/x", { allowedDomains: allow.de.allowedDomains, timeoutMs: 4000 });
  assert(page.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED, page.outcome);
  console.log("OK unreachable allowlisted host");
}

async function main() {
  if (!integration) {
    console.log("SKIP (set G2_A1_SOURCE_ACCESS_INTEGRATION=1 or --integration)");
    process.exit(0);
  }
  await testDeDwdsKnownEntry();
  await testDeDudenKnownEntry();
  await testDeMissingEntry();
  await testEtKnownEntry();
  await testRejectedDomain();
  await testUnreachableAllowlistedHost();
  console.log("ALL official source entry validation integration tests passed");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
