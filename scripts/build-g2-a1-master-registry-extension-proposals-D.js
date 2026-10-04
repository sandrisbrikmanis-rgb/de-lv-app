#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const {
  loadStructuredLanguageAuthoritySources,
  rowByAppCode,
} = require("./lib/master-language-authority-sources-33");

/**
 * OWNER proposal D only — not merged into MASTER without separate approval.
 */
const PROPOSALS = [
  {
    language: "bs",
    appCode: "bs",
    candidateResource: "Institut za jezik / Rječnik bosanskoga jezika (online if published on izj.unsa.ba or gov.ba domain)",
    institutionOwner: "University of Sarajevo — Institute for Language (izj.unsa.ba); language policy: Bosnian Language Council",
    authorityEvidence:
      "State/academic language institute listed in MASTER as norm authority; no stable public lemma→entry URL chain verified for automation.",
    proposedDomain: "izj.unsa.ba (existing MASTER norm URL — entry deep-link not verified)",
    entryLookupFeasibility: "Homepage and institute pages fetch; no verified machine- or browser-validated dictionary entry URL pattern.",
    usageConstraints: "Public pages only; no CAPTCHA bypass; no unofficial Wiktionary substitute.",
    whyCurrentMasterInsufficient:
      "MASTER cites institute/norm site without a concrete, repeatable dictionary entry resource for SOURCE_ENTRY_VALIDATED.",
    masterJsonDiffHint: {
      file: "scripts/lib/data/master-language-authority-sources-33.json",
      field: "PRIMARY_DICTIONARY_URLS",
      action: "OWNER to approve adding explicit PRIMARY_DICTIONARY_* with entry URL template after manual verification",
    },
    status: "PROPOSAL_AWAITING_OWNER_APPROVAL",
  },
  {
    language: "sq",
    appCode: "sq",
    candidateResource: "Akademia e Shkencave — Fjalor i gjuhës shqipe (if hosted on akad.gov.al or dedicated lexicography subdomain)",
    institutionOwner: "Academy of Sciences of Albania (akad.gov.al)",
    authorityEvidence: "MASTER lists akad.gov.al as authority; national academy — normative for Albanian.",
    proposedDomain: "akad.gov.al (or future dedicated lexicography host under .gov.al)",
    entryLookupFeasibility: "HTTP fetch of homepage succeeds; no automated entry chain validated in G2/A1 browser pilots.",
    usageConstraints: "Public browser session only; stop on auth/CAPTCHA.",
    whyCurrentMasterInsufficient: "No PRIMARY_DICTIONARY entry URL with verified lookup in structured MASTER row.",
    masterJsonDiffHint: {
      file: "scripts/lib/data/master-language-authority-sources-33.json",
      field: "PRIMARY_DICTIONARY_AUTHORITY + PRIMARY_DICTIONARY_URLS",
      action: "Add academy dictionary product URL once OWNER confirms official entry search path",
    },
    status: "PROPOSAL_AWAITING_OWNER_APPROVAL",
  },
  {
    language: "sr",
    appCode: "sr",
    candidateResource: "Matica srpska / SANU language institute — Rečnik srpskoga jezika (online edition if on maticasrpska.org.rs or isj.sanu.ac.rs)",
    institutionOwner: "Matica srpska; Institute for Serbian Language (SANU)",
    authorityEvidence: "MASTER references SANU/Matica normative institutions for Serbian.",
    proposedDomain: "maticasrpska.org.rs or isj.sanu.ac.rs",
    entryLookupFeasibility: "No verified public entry lookup without manual navigation proof in this PR.",
    usageConstraints: "Official domains only; no unofficial sr.wiktionary.",
    whyCurrentMasterInsufficient: "Norm URLs present; primary dictionary entry automation path not established.",
    masterJsonDiffHint: {
      file: "scripts/lib/data/master-language-authority-sources-33.json",
      field: "PRIMARY_DICTIONARY_URLS",
      action: "OWNER approves canonical online dictionary host + search/entry pattern",
    },
    status: "PROPOSAL_AWAITING_OWNER_APPROVAL",
  },
  {
    language: "mk",
    appCode: "mk",
    conditional: true,
    candidateResource: "drmj.eu / IMJ (Institute for Macedonian Language) — only if normal public browser session reaches entry content",
    institutionOwner: "Institute for Macedonian Language (IMJ), North Macedonia",
    authorityEvidence: "MASTER lists Macedonian language institute resources; drmj.eu attempted in browser pilot.",
    proposedDomain: "drmj.eu (conditional — connection/availability observed in cloud pilot)",
    entryLookupFeasibility: "Browser pilot: net::ERR_CONNECTION_CLOSED on search URL in this environment; re-test required when site reachable.",
    usageConstraints: "Use only if public session works without bypass; otherwise remain blocked pending OWNER access decision.",
    whyCurrentMasterInsufficient: "If drmj.eu remains unreachable, MASTER needs an alternate IMJ-hosted official dictionary URL approved by OWNER.",
    masterJsonDiffHint: {
      file: "scripts/lib/data/master-language-authority-sources-33.json",
      field: "PRIMARY_DICTIONARY_URLS",
      action: "Replace or supplement drmj.eu with IMJ-official stable dictionary URL if pilot stays blocked",
    },
    status: "CONDITIONAL_ON_BROWSER_REACHABILITY",
  },
];

function main() {
  const structured = loadStructuredLanguageAuthoritySources();
  const enriched = PROPOSALS.map((p) => {
    const row = structured.pass ? rowByAppCode(structured.languages, p.appCode) : null;
    return {
      ...p,
      currentMasterSnapshot: row
        ? {
            LANGUAGE_NORM_AUTHORITY: row.LANGUAGE_NORM_AUTHORITY,
            LANGUAGE_NORM_URLS: row.LANGUAGE_NORM_URLS,
            PRIMARY_DICTIONARY_AUTHORITY: row.PRIMARY_DICTIONARY_AUTHORITY,
            PRIMARY_DICTIONARY_URLS: row.PRIMARY_DICTIONARY_URLS,
            ADDITIONAL_AUTHORITY: row.ADDITIONAL_AUTHORITY,
            ADDITIONAL_AUTHORITY_URLS: row.ADDITIONAL_AUTHORITY_URLS,
          }
        : null,
    };
  });

  writeJsonAtomic("master-registry-extension-proposals-D.json", {
    generatedAt: new Date().toISOString(),
    ownerDecision: "D_REGISTRY_EXTENSION_PROPOSAL_ONLY_NO_MASTER_MERGE",
    proposals: enriched,
  });

  const md = [
    "# G2/A1 — MASTER registry extension proposals (OWNER D)",
    "",
    "**Not merged into MASTER** until separate OWNER approval per language.",
    "",
    ...enriched.flatMap((p) => [
      `## ${p.language.toUpperCase()} (\`${p.appCode}\`)`,
      "",
      `- **Candidate resource:** ${p.candidateResource}`,
      `- **Institution / owner:** ${p.institutionOwner}`,
      `- **Authority evidence:** ${p.authorityEvidence}`,
      `- **Domain:** ${p.proposedDomain}`,
      `- **Entry lookup:** ${p.entryLookupFeasibility}`,
      `- **Constraints:** ${p.usageConstraints}`,
      `- **Why current MASTER is insufficient:** ${p.whyCurrentMasterInsufficient}`,
      `- **JSON diff hint:** \`${p.masterJsonDiffHint.file}\` → \`${p.masterJsonDiffHint.field}\` — ${p.masterJsonDiffHint.action}`,
      `- **Status:** ${p.status}`,
      "",
    ]),
  ].join("\n");

  fs.writeFileSync(path.join(ROOT, "reports/g2-a1-production-current/master-registry-extension-proposals-D.md"), md);
  console.log(JSON.stringify({ gate: "MASTER_REGISTRY_EXTENSION_D", count: enriched.length }, null, 2));
}

main();
