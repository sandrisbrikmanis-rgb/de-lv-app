#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { writeJsonAtomic } = require("./lib/g2-a1-production-current/artifacts");
const {
  loadStructuredLanguageAuthoritySources,
  rowByAppCode,
  allUrlsForLanguage,
} = require("./lib/master-language-authority-sources-33");

const PROPOSALS = [
  {
    language: "bs",
    currentMasterGap: "PRIMARY_DICTIONARY missing; izj.unsa.ba is institute portal only",
    candidateInstitution: "Institut za jezik UNSA / Bosnian Language Council (official norm body)",
    candidateResource: "Rječnik bosanskoga jezika — digital edition if published under izj.unsa.ba or gov.ba",
    candidateUrl: "https://izj.unsa.ba/",
    entryLookupFeasibility: "No verified public lemma→entry URL in MASTER or reprobe",
    positiveTest: "kuća",
    negativeTest: "zzqqxxnotaword999",
    proposedMasterRole: "② PRIMARY_DICTIONARY",
    authorityEvidence: "State university language institute; norm authority in MASTER §3.1",
    ownerDecisionField: "NEEDS_MORE_EVIDENCE",
  },
  {
    language: "sq",
    currentMasterGap: "PRIMARY_DICTIONARY missing; akad.gov.al homepage only",
    candidateInstitution: "Akademia e Shkencave e Shqipërisë",
    candidateResource: "Fjalor i Gjuhës Shqipe (academy dictionary product if hosted on akad.gov.al subdomain)",
    candidateUrl: "https://akad.gov.al/",
    entryLookupFeasibility: "Not validated in browser automation",
    positiveTest: "shtëpi",
    negativeTest: "zzqqxxnotaword999",
    proposedMasterRole: "② PRIMARY_DICTIONARY",
    authorityEvidence: "National academy — official language authority in MASTER",
    ownerDecisionField: "NEEDS_MORE_EVIDENCE",
  },
  {
    language: "sr",
    currentMasterGap: "maticasrpska.org.rs / isj.sanu.ac.rs lack verified entry deep-link",
    candidateInstitution: "Matica srpska; Institut za srpski jezik SANU",
    candidateResource: "Rečnik srpskoga jezika — online if offered on maticasrpska.org.rs",
    candidateUrl: "https://www.maticasrpska.org.rs/",
    entryLookupFeasibility: "Institute site reachable; dictionary entry chain not automated",
    positiveTest: "кућа",
    negativeTest: "zzqqxxnotaword999",
    proposedMasterRole: "② PRIMARY_DICTIONARY",
    authorityEvidence: "Matica srpska + SANU ISJ listed in MASTER",
    ownerDecisionField: "NEEDS_MORE_EVIDENCE",
  },
  {
    language: "mk",
    currentMasterGap: "drmj.eu unreachable (ERR_CONNECTION_CLOSED) from cloud browser",
    candidateInstitution: "Институт за македонски јазик „Крсте Мисирков“ (UKIM)",
    candidateResource: "IMJ digital resources on imj.ukim.edu.mk; drmJ.eu only if OWNER confirms stable public access",
    candidateUrl: "https://imj.ukim.edu.mk/",
    entryLookupFeasibility: "drmj.eu failed; IMJ norm URL in MASTER as LANGUAGE_NORM",
    positiveTest: "куќа",
    negativeTest: "zzqqxxnotaword999",
    proposedMasterRole: "② PRIMARY_DICTIONARY (supplement or replace drmj.eu)",
    authorityEvidence: "IMJ is state language institute per MASTER §3.1",
    ownerDecisionField: "NEEDS_MORE_EVIDENCE",
  },
];

function main() {
  const structured = loadStructuredLanguageAuthoritySources();
  const enriched = PROPOSALS.map((p) => {
    const row = structured.pass ? rowByAppCode(structured.languages, p.language) : null;
    return {
      ...p,
      appCode: p.language,
      currentMasterSnapshot: row
        ? {
            LANGUAGE_NORM_AUTHORITY: row.LANGUAGE_NORM_AUTHORITY,
            LANGUAGE_NORM_URLS: row.LANGUAGE_NORM_URLS,
            PRIMARY_DICTIONARY_AUTHORITY: row.PRIMARY_DICTIONARY_AUTHORITY,
            PRIMARY_DICTIONARY_URLS: row.PRIMARY_DICTIONARY_URLS,
            allUrls: allUrlsForLanguage(row),
          }
        : null,
    };
  });

  writeJsonAtomic("master-source-proposals-owner-review.json", {
    generatedAt: new Date().toISOString(),
    masterNotModified: true,
    proposals: enriched,
  });

  const md = [
    "# MASTER source change proposals — OWNER review (bs, sq, sr, mk)",
    "",
    "**MASTER not modified in this task.**",
    "",
    ...enriched.flatMap((p) => [
      `## ${p.language.toUpperCase()}`,
      "",
      `- **Current MASTER gap:** ${p.currentMasterGap}`,
      `- **Candidate institution:** ${p.candidateInstitution}`,
      `- **Candidate URL:** ${p.candidateUrl}`,
      `- **Resource:** ${p.candidateResource}`,
      `- **Entry lookup:** ${p.entryLookupFeasibility}`,
      `- **Positive test:** \`${p.positiveTest}\` | **Negative:** \`${p.negativeTest}\``,
      `- **Proposed role:** ${p.proposedMasterRole}`,
      `- **Authority evidence:** ${p.authorityEvidence}`,
      `- **OWNER decision:** \`${p.ownerDecisionField}\` (APPROVE / REJECT / NEEDS_MORE_EVIDENCE)`,
      "",
    ]),
  ].join("\n");

  fs.writeFileSync(path.join(ROOT, "reports/g2-a1-production-current/master-source-proposals-owner-review.json"), JSON.stringify({ generatedAt: new Date().toISOString(), proposals: enriched }, null, 2));
  fs.writeFileSync(path.join(ROOT, "reports/g2-a1-production-current/master-source-proposals-owner-review.md"), md);
  console.log(JSON.stringify({ gate: "MASTER_PROPOSALS", count: enriched.length }, null, 2));
}

main();
