#!/usr/bin/env node
"use strict";

const { fetchOfficialUrl, deLookupCandidateUrls } = require("./lib/g2-a1-production-current/official-source-fetch");
const { buildAllowlistForLanguage } = require("./lib/g2-a1-production-current/registry-domain-allowlist");
const { accessOfficialSourcesForField } = require("./lib/g2-a1-production-current/official-source-access");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");
const { bindRegistryAuthorities } = require("./lib/g2-a1-production-current/registry-bindings");

const integration = process.argv.includes("--integration") || process.env.G2_A1_SOURCE_ACCESS_INTEGRATION === "1";

function assert(c, msg) {
  if (!c) throw new Error(msg);
}

async function testDeDwdsLernen() {
  const allow = buildAllowlistForLanguage("bg");
  assert(allow.pass, "allowlist bg");
  const urls = deLookupCandidateUrls("lernen", allow.de.allowedDomains);
  assert(urls.length > 0, "de urls");
  const result = await fetchOfficialUrl(urls[0], {
    allowedDomains: allow.de.allowedDomains,
    searchQuery: "DE:lernen",
    searchTerm: "lernen",
  });
  assert(result.finalUrl, "final url");
  assert(result.finalDomain.includes("dwds.de"), "dwds domain");
  assert(result.evidenceFragment && result.evidenceFragment.length > 20, "fragment");
  assert(
    result.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ ||
      result.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
    result.outcome,
  );
  console.log("OK integration DE dwds lernen", result.outcome, result.finalUrl);
}

async function testTargetBgField() {
  const reg = bindRegistryAuthorities("bg");
  assert(reg.pass, "registry bg");
  const field = {
    language: "bg",
    dataset: "a1",
    productionFile: "data/bg/a1.js",
    cardId: "lernen",
    fieldPath: "a1.card.lernen.native",
    identityKey: "bg|data/bg/a1.js|lernen|a1.card.lernen.native",
    CURRENT: "Проучване",
    DE: "lernen",
    cardContext: { de: "lernen", targetHeadword: "Проучване" },
  };
  const bundle = await accessOfficialSourcesForField(field);
  assert(bundle.de.requestedUrl, "de requested");
  assert(bundle.target.requestedUrl, "target requested");
  assert(bundle.de.finalDomain, "de domain");
  console.log("OK integration TARGET bg field", bundle.de.outcome, bundle.target.outcome);
}

async function testRedirectAllowlist() {
  const allow = buildAllowlistForLanguage("bg");
  const result = await fetchOfficialUrl("https://dwds.de/wb/lernen", {
    allowedDomains: allow.de.allowedDomains,
    searchQuery: "redirect-test",
    searchTerm: "lernen",
  });
  assert(result.finalDomain.includes("dwds.de"), "redirect final domain allowlisted");
  console.log("OK integration redirect", result.finalUrl);
}

async function testRejectedDomain() {
  const allow = buildAllowlistForLanguage("bg");
  const result = await fetchOfficialUrl("https://example.com/forbidden", {
    allowedDomains: allow.de.allowedDomains,
    searchQuery: "reject",
    searchTerm: "test",
  });
  assert(result.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_DOMAIN_REJECTED, result.outcome);
  console.log("OK integration rejected domain");
}

async function testUnreachable() {
  const allow = buildAllowlistForLanguage("bg");
  const result = await fetchOfficialUrl("https://www.dwds.de:1/no-service", {
    allowedDomains: allow.de.allowedDomains,
    searchQuery: "unreachable",
    searchTerm: "x",
    timeoutMs: 5000,
  });
  assert(result.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED, result.outcome);
  console.log("OK integration unreachable on allowlisted host");
}

async function main() {
  if (!integration) {
    console.log("SKIP official source integration (set G2_A1_SOURCE_ACCESS_INTEGRATION=1 or --integration)");
    process.exit(0);
  }
  await testDeDwdsLernen();
  await testTargetBgField();
  await testRedirectAllowlist();
  await testRejectedDomain();
  await testUnreachable();
  console.log("ALL official source access integration tests passed");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
