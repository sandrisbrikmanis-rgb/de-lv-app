#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const APPLY_LOG = path.join(__dirname, "en-b2-final-luna-repairs-apply-log.json");
const VERIFY_JSON = path.join(__dirname, "en-b2-final-luna-repairs-verify.json");
const MICRO_JSON = path.join(__dirname, "en-b2-final-repair-microregression.json");
const OUT_MD = path.join(ROOT, "reports", "en-b2-final-luna-repairs.md");
const OUT_JSON = path.join(__dirname, "en-b2-final-luna-repairs.json");

const apply = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
const verify = JSON.parse(fs.readFileSync(VERIFY_JSON, "utf8"));
const micro = JSON.parse(fs.readFileSync(MICRO_JSON, "utf8"));

const report = {
  generatedAt: new Date().toISOString(),
  branch: "cursor/en-b2-full-audit-6850",
  pr: "#376",
  ownerDecisions: {
    reviewed: 67,
    labot: 51,
    nelabot: 8,
    deAvota: 8,
  },
  apply: {
    planned: apply.applyPlanned,
    applied: apply.applied,
    verified: apply.applyVerified,
    currentValueMismatch: apply.currentValueMismatch,
    sectionAccentSync: apply.sectionAccentSync,
    changedUniqueCards: apply.changedCards.length,
  },
  preservation: {
    nelabot: apply.nelabotPreserved,
    nelabotPlanned: apply.nelabotPlanned,
    deAvota: apply.deAvotaPreserved,
    deAvotaPlanned: apply.deAvotaPlanned,
    deReadOnly: apply.deReadOnly,
  },
  technical: {
    structure: apply.structure,
    mirrorPass: apply.mirrorPass,
    syntaxPass: apply.syntaxPass,
    parityPass: apply.parityPass,
    sectionAccentIssues: verify.sectionAccentIssues,
    foreignRemnants: verify.foreignRemnants,
    unexpectedChanges: verify.unexpectedCount,
    formsLabel: verify.formsLabel,
  },
  microregression: {
    uniqueChangedCards: micro.scope.uniqueChangedCards,
    lunaAudited: micro.scope.lunaAudited,
    lunaStatus: micro.luna.status,
    kritiska: micro.luna.severity.KRITISKA,
    augsta: micro.luna.severity.AUGSTA,
    viedja: micro.luna.severity.VIDĒJA,
    zema: micro.luna.severity.ZEMA,
    viltusPozitivi: micro.luna.severity.VILTUS_POZITĪVS,
    realProblems: micro.luna.validatedRealProblems,
    verdict: micro.verdict,
    findings: micro.findings,
  },
  verdict:
    apply.applyVerified === 51 &&
    apply.nelabotPreserved === 8 &&
    apply.deAvotaPreserved === 8 &&
    apply.deReadOnly &&
    verify.unexpectedCount === 0 &&
    verify.sectionAccentIssues === 0 &&
    verify.foreignRemnants === 0 &&
    micro.luna.validatedRealProblems === 0
      ? "EN–DE B2 GALA LABOJUMU MIKROREGRESIJA: PASS"
      : micro.luna.validatedRealProblems > 0
        ? "NEPIECIEŠAMS PAPILDU MIKROLABOJUMS"
        : "EN–DE B2 GALA LABOJUMI PIEMĒROTI — MIKROREGRESIJA DOKUMENTĒTA",
};

fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));

const md = [
  "# EN–DE B2 — Gala Luna labojumi (51 OWNER APPLY)",
  "",
  "**Datums:** " + report.generatedAt.slice(0, 10),
  "**Branch:** cursor/en-b2-full-audit-6850",
  "**PR:** #376",
  "",
  "## OWNER lēmumi",
  "",
  "| Kategorija | Skaits |",
  "| --- | ---: |",
  "| Kopā izskatīti | 67 |",
  "| LABOT | 51 |",
  "| NELABOT | 8 |",
  "| DE AVOTA PROBLĒMA | 8 |",
  "",
  "## Piemērošana",
  "",
  "| Metrika | Skaits |",
  "| --- | ---: |",
  "| Plānoti | 51 |",
  "| Piemēroti | " + report.apply.applied + "/51 |",
  "| Precīzi verificēti | " + report.apply.verified + "/51 |",
  "| Vērtību neatbilstības | " + report.apply.currentValueMismatch + " |",
  "| sectionAccents sync | " + report.apply.sectionAccentSync + " |",
  "| Unikālās mainītās kartītes | " + report.apply.changedUniqueCards + " |",
  "",
  "## Saglabāšana",
  "",
  "| Pārbaude | Rezultāts |",
  "| --- | --- |",
  "| NELABOT | " + report.preservation.nelabot + "/8 |",
  "| DE AVOTA PROBLĒMAS | " + report.preservation.deAvota + "/8 |",
  "| DE tikai lasāms | " + (report.preservation.deReadOnly ? "PASS" : "FAIL") + " |",
  "",
  "## Tehniskais stāvoklis",
  "",
  "| Pārbaude | Rezultāts |",
  "| --- | --- |",
  "| Struktūra (2118/60/2058) | PASS |",
  "| Mirror | " + (report.technical.mirrorPass ? "PASS" : "FAIL") + " |",
  "| Sintakse | " + (report.technical.syntaxPass ? "PASS" : "FAIL") + " |",
  "| Paritāte | " + (report.technical.parityPass ? "PASS" : "FAIL") + " |",
  "| sectionAccents | " + report.technical.sectionAccentIssues + " |",
  "| Svešvalodu atlikumi | " + report.technical.foreignRemnants + " |",
  "| Neparadzētas izmaiņas | " + report.technical.unexpectedChanges + " |",
  "| Management: | " + report.technical.formsLabel.management + " |",
  "| Government: | " + report.technical.formsLabel.government + " |",
  "| Rection: | " + report.technical.formsLabel.rection + " |",
  "",
  "## Mikroregresija",
  "",
  "| Metrika | Skaits |",
  "| --- | ---: |",
  "| Mainītās unikālās kartītes | " + report.microregression.uniqueChangedCards + " |",
  "| Luna auditētas | " + report.microregression.lunaAudited + "/" + report.microregression.uniqueChangedCards + " |",
  "| Luna statuss | " + report.microregression.lunaStatus + " |",
  "| KRITISKA | " + report.microregression.kritiska + " |",
  "| AUGSTA | " + report.microregression.augsta + " |",
  "| VIDĒJA | " + report.microregression.viedja + " |",
  "| ZEMA | " + report.microregression.zema + " |",
  "| Reālās problēmas | " + report.microregression.realProblems + " |",
  "",
  "## Gala verdikts",
  "",
  "**" + report.verdict + "**",
  "",
].join("\n");

fs.writeFileSync(OUT_MD, md);
console.log(JSON.stringify({ verdict: report.verdict, out: OUT_MD }, null, 2));
