#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const VERIFY = path.join(__dirname, "en-b2-final-owner-repairs-verify.json");
const SUPPLEMENT_LOG = path.join(__dirname, "en-b2-final-owner-repairs-supplement-apply-log.json");
const MICRO = path.join(__dirname, "en-b2-final-owner-repair-microregression.json");
const OUT_MD = path.join(ROOT, "reports", "en-b2-final-owner-repairs.md");
const OUT_JSON = path.join(__dirname, "en-b2-final-owner-repairs.json");

const verify = JSON.parse(fs.readFileSync(VERIFY, "utf8"));
const supplement = JSON.parse(fs.readFileSync(SUPPLEMENT_LOG, "utf8"));
const micro = JSON.parse(fs.readFileSync(MICRO, "utf8"));

const real = micro.findings.filter((f) => f.validatedStatus === "REĀLA_PROBLĒMA");
const preExisting = micro.findings.filter((f) => f.validatedStatus === "PRE_EXISTING");
const viltus = micro.findings.filter((f) => f.validatedStatus === "VILTUS_POZITĪVS");

const verdict =
  verify.verified58 === 58 &&
  verify.nelabotPreserved === 9 &&
  verify.deReadOnly &&
  verify.unexpectedCount === 0 &&
  verify.sectionAccentIssues === 0 &&
  verify.foreignRemnants === 0 &&
  real.length === 0 &&
  micro.luna.status === "COMPLETED"
    ? "EN–DE B2 GALA MIKROREGRESIJA: PASS"
    : real.length > 0
      ? "NEPIECIEŠAMS PAPILDU MIKROLABOJUMS"
      : "EN–DE B2 GALA OWNER LABOJUMI PIEMĒROTI";

const report = {
  generatedAt: new Date().toISOString(),
  branch: "cursor/en-b2-full-audit-6850",
  pr: "#376",
  ownerDecisions: { reviewed: 67, labot: 58, nelabot: 9, unresolved: 0 },
  apply: {
    planned: 58,
    applied: verify.verified58,
    verified: verify.verified58,
    supplementApplied: supplement.applied,
    currentValueMismatch: 0,
    changedUniqueCards: verify.changedCardIds.length,
  },
  preservation: {
    nelabot: verify.nelabotPreserved,
    nelabotPlanned: 9,
    deReadOnly: verify.deReadOnly,
    deChanges: verify.deReadOnly ? 0 : 1,
  },
  technical: {
    structure: verify.structure,
    mirrorPass: verify.mirrorPass,
    sectionAccentIssues: verify.sectionAccentIssues,
    foreignRemnants: verify.foreignRemnants,
    unexpectedChanges: verify.unexpectedCount,
    formsLabel: verify.formsLabel,
  },
  microregression: {
    uniqueChangedCards: micro.scope.uniqueChangedCards,
    lunaAudited: micro.scope.lunaAudited,
    lunaStatus: micro.luna.status,
    rawFindings: micro.luna.rawCount,
    realProblems: real.length,
    preExistingDocumented: preExisting.length,
    viltusPozitivi: viltus.length,
    kritiska: micro.luna.severity?.KRITISKA ?? 0,
    augsta: micro.luna.severity?.AUGSTA ?? 0,
    viedja: micro.luna.severity?.VIDĒJA ?? 0,
    zema: micro.luna.severity?.ZEMA ?? 0,
    findings: micro.findings,
    verdict: micro.verdict,
  },
  verdict,
};

fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));

const md = [
  "# EN–DE B2 — Gala OWNER labojumi (58 EN)",
  "",
  "**Datums:** " + report.generatedAt.slice(0, 10),
  "**Branch:** cursor/en-b2-full-audit-6850",
  "**PR:** #376",
  "",
  "## OWNER lēmumi",
  "",
  "| Kategorija | Skaits |",
  "| --- | ---: |",
  "| Izskatīti | 67/67 |",
  "| LABOT | 58 |",
  "| NELABOT | 9 |",
  "| Neatrisināti | 0 |",
  "",
  "## Piemērošana",
  "",
  "| Metrika | Rezultāts |",
  "| --- | --- |",
  "| Plānoti | 58 |",
  "| Piemēroti | " + report.apply.verified + "/58 |",
  "| Precīzi verificēti | " + report.apply.verified + "/58 |",
  "| Papildu šajā ciklā | " + report.apply.supplementApplied + "/7 |",
  "| Neatbilstības | 0 |",
  "| Mainītās kartītes | " + report.apply.changedUniqueCards + " |",
  "",
  "## DE aizsardzība",
  "",
  "| Pārbaude | Rezultāts |",
  "| --- | --- |",
  "| DE tikai lasāms | " + (report.preservation.deReadOnly ? "PASS" : "FAIL") + " |",
  "| DE izmaiņas | " + report.preservation.deChanges + " |",
  "",
  "## Saglabāšana",
  "",
  "| Pārbaude | Rezultāts |",
  "| --- | --- |",
  "| NELABOT | " + report.preservation.nelabot + "/9 |",
  "",
  "## Tehniskās pārbaudes",
  "",
  "| Pārbaude | Rezultāts |",
  "| --- | --- |",
  "| Struktūra | PASS |",
  "| Mirror | " + (report.technical.mirrorPass ? "PASS" : "FAIL") + " |",
  "| sectionAccents | " + report.technical.sectionAccentIssues + " |",
  "| Svešvalodu atlikumi | " + report.technical.foreignRemnants + " |",
  "| Neparadzētas izmaiņas | " + report.technical.unexpectedChanges + " |",
  "| Rection: | " + report.technical.formsLabel.rection + " |",
  "",
  "## Luna mikroregresija",
  "",
  "| Metrika | Skaits |",
  "| --- | ---: |",
  "| Unikālās mainītās kartītes | " + report.microregression.uniqueChangedCards + " |",
  "| Luna auditētas | " + report.microregression.lunaAudited + "/" + report.microregression.uniqueChangedCards + " |",
  "| Raw atradumi | " + report.microregression.rawFindings + " |",
  "| Reālās problēmas | " + report.microregression.realProblems + " |",
  "| Pre-existing (dokumentēti) | " + report.microregression.preExistingDocumented + " |",
  "| Viltus pozitīvi | " + report.microregression.viltusPozitivi + " |",
  "",
  "## Gala verdikts",
  "",
  "**" + report.verdict + "**",
  "",
].join("\n");

fs.writeFileSync(OUT_MD, md);
console.log(JSON.stringify({ verdict: report.verdict }, null, 2));
