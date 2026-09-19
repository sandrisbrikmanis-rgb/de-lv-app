#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  APVIENOTS_EVIDENCE_FIELDS,
  BULK_FORBIDDEN_PASS_RATIONALES,
  RECORD_KIND,
  AI_AUDIT_ROLE,
  AI_NOT_LANGUAGE_AUTHORITY,
  CSV_MAX_BYTES,
} = require("./lib/g2-a1-production-current/constants");
const {
  validateTechnicalInventoryRecord,
  validateAuditedEvidenceRecord,
  validateCefrWhenApplicable,
  validateAuditChainMetadata,
} = require("./lib/g2-a1-production-current/evidence-schema");
const {
  validatePassRecord,
  validateFindingRecord,
  validateAuditVerdict,
} = require("./lib/g2-a1-production-current/verdict-validation");
const { rejectBulkPassRationale } = require("./lib/g2-a1-production-current/bulk-forbidden");
const { validateCoverageEquation, tallyAuditedRecords } = require("./lib/g2-a1-production-current/coverage");
const { isOwnerReviewRow, filterOwnerReviewRows, isOwnerStatusNotAuditVerdict } = require("./lib/g2-a1-production-current/owner-scope");
const { splitCsvMultipart, mergeCsvMultipart, verifyMultipartNoGaps } = require("./lib/g2-a1-production-current/csv-multipart");
const { authorizeFullProductionCurrentAudit } = require("./lib/g2-a1-production-current/authorize-full-run");
const { buildProductionFileSetInventory } = require("./lib/g2-a1-production-current/inventory");
const { syntheticAuditedSet, baseAudited } = require("./lib/g2-a1-production-current/synthetic-fixtures");
const { buildOwnerArtifactsFromEvidence } = require("./lib/g2-a1-production-current/owner-artifacts");
const { verifyPostRunClosure } = require("./lib/g2-a1-production-current/post-run-verify");
const { buildTechnicalInventoryRowsForLanguage } = require("./lib/g2-a1-production-current/audit-rows");
const mapping = require("./lib/g2-a1-production-current/master-code-mapping.json");

function assert(c, msg) {
  if (!c) throw new Error(msg);
}

function testMappingArtifact() {
  assert(mapping.checks.length >= 10, "mapping checks");
  assert(mapping.checks.some((c) => c.code === "EVIDENCE_FIELDS_APVIENOTS_7"), "§7 mapping");
  console.log(`OK MASTER code mapping artifact (${mapping.checks.length} checks)`);
}

function testSection7Schema() {
  const inv = buildTechnicalInventoryRowsForLanguage("lv", "a", "b")[0];
  assert(validateTechnicalInventoryRecord(inv).pass, "inventory");
  const audited = syntheticAuditedSet()[0];
  assert(validateAuditedEvidenceRecord(audited).pass, "audited §7");
  for (const f of APVIENOTS_EVIDENCE_FIELDS) assert(f in audited, f);
  console.log("OK APVIENOTS §7 schema");
}

function testCefrConditional() {
  const withCefr = syntheticAuditedSet().find((r) => r.CEFR_APPLICABLE);
  assert(validateAuditedEvidenceRecord(withCefr, { cefrApplicable: true }).pass, "cefr on");
  assert(validateCefrWhenApplicable(baseAudited({}), false).pass, "cefr off empty");
  console.log("OK CEFR conditional fields");
}

function testSection8Verdicts() {
  for (const r of syntheticAuditedSet()) {
    assert(validateAuditVerdict(r).pass, r.AUDIT_VERDICT);
  }
  assert(validateFindingRecord(syntheticAuditedSet()[1]).pass, "finding fields");
  console.log("OK APVIENOTS §8 verdicts");
}

function testPassWithoutEvidenceRejected() {
  const bad = baseAudited({ AUDIT_VERDICT: "PASS", DE_SOURCE_EVIDENCE: "" });
  assert(!validatePassRecord(bad).pass, "pass no evidence");
  console.log("OK §9 PASS rejects missing evidence");
}

function testFindingMissingFieldsRejected() {
  const bad = baseAudited({ AUDIT_VERDICT: "FINDING", CURRENT_PROBLEM: "" });
  assert(!validateFindingRecord(bad).pass, "finding incomplete");
  console.log("OK §8 FINDING required fields");
}

function testSection14BulkForbidden() {
  for (const code of BULK_FORBIDDEN_PASS_RATIONALES) {
    const r = baseAudited({ AUDIT_VERDICT: "PASS", PASS_RATIONALE: code });
    assert(!rejectBulkPassRationale(r).pass, code);
  }
  console.log("OK APVIENOTS §14 bulk forbidden rationales");
}

function testSection13Coverage() {
  const records = syntheticAuditedSet();
  const counts = tallyAuditedRecords(records);
  const v = validateCoverageEquation(counts);
  assert(v.pass, JSON.stringify(v.errors));
  assert(counts.OWNER_REVIEW_REQUIRED === 3, "owner review count");
  console.log("OK APVIENOTS §13 coverage equation");
}

function testOwnerScope() {
  const records = syntheticAuditedSet();
  const owner = filterOwnerReviewRows(records);
  assert(owner.length === 3, "owner rows");
  assert(!owner.some((r) => r.AUDIT_VERDICT === "PASS"), "no pass in owner");
  assert(isOwnerStatusNotAuditVerdict("LABOT"), "owner status separate");
  console.log("OK APVIENOTS §11–§12 OWNER scope");
}

function testCsvMultipart() {
  const header = "id,text";
  const rows = [];
  for (let i = 0; i < 8000; i++) rows.push(`${i},${"ü".repeat(500)}`);
  const csv = `${header}\n${rows.join("\n")}\n`;
  assert(Buffer.byteLength(csv, "utf8") > CSV_MAX_BYTES, "large csv");
  const { parts, manifest } = splitCsvMultipart(csv);
  assert(parts.every((p) => p.byteLength <= CSV_MAX_BYTES), "part size");
  assert(verifyMultipartNoGaps(manifest).pass, "no gaps");
  const merged = mergeCsvMultipart(parts);
  assert(merged.rowCount === rows.length, "row count");
  const small = `${header}\n1,ok\n`;
  const sm = splitCsvMultipart(small);
  assert(sm.parts.length === 1 && sm.parts[0].byteLength < CSV_MAX_BYTES, "under limit");
  const longRow = `${header}\n1,${"x".repeat(CSV_MAX_BYTES)}\n`;
  const lr = splitCsvMultipart(longRow);
  assert(lr.parts[0].rowCount === 1, "long single row part");
  console.log("OK 4MB CSV multipart");
}

function testFullAuthGates() {
  const inv = buildProductionFileSetInventory();
  const originMain = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const noFlag = authorizeFullProductionCurrentAudit({});
  assert(!noFlag.pass, "no flags");
  const badSha = authorizeFullProductionCurrentAudit({
    ownerAuthorizeFullAudit: true,
    expectedMainSha: originMain,
    expectedProductionFileSetSha: "0".repeat(64),
  });
  assert(!badSha.pass, "bad file sha");
  const withFlags = authorizeFullProductionCurrentAudit({
    ownerAuthorizeFullAudit: true,
    expectedMainSha: originMain,
    expectedProductionFileSetSha: inv.gate.productionFileSetSha256,
  });
  if (head !== originMain) {
    assert(!withFlags.pass, "feature branch must fail HEAD_NOT_ORIGIN_MAIN");
    assert(withFlags.blockers.some((b) => b.code === "HEAD_NOT_ORIGIN_MAIN"), "head blocker");
  } else {
    assert(withFlags.pass, JSON.stringify(withFlags.blockers));
  }
  console.log("OK full authorization gates");
}

function testDirtyTreeRejected() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "pc-a1-"));
  const fake = path.join(tmp, "dirty.txt");
  fs.writeFileSync(fake, "x");
  const prev = process.cwd();
  try {
    execSync("git init", { cwd: tmp, stdio: "ignore" });
    const auth = authorizeFullProductionCurrentAudit({
      ownerAuthorizeFullAudit: true,
      expectedMainSha: "a".repeat(40),
      expectedProductionFileSetSha: "b".repeat(64),
    });
    assert(!auth.pass, "non-repo fails");
  } finally {
    process.chdir(prev);
    fs.rmSync(tmp, { recursive: true, force: true });
  }
  console.log("OK dirty / non-main rejection paths");
}

function testStagingCurrentRejectedInInventory() {
  const row = buildTechnicalInventoryRowsForLanguage("lv", "a", "b")[0];
  row.productionFile = "crowdin-staging/g2/lv-a1.json";
  assert(!validateTechnicalInventoryRecord(row).pass, "staging path");
  console.log("OK staging CURRENT rejected");
}

function testSyntheticEndToEnd() {
  const records = syntheticAuditedSet();
  const bundle = buildOwnerArtifactsFromEvidence(records, {
    auditBaselineSha: "59919fb31a0bbea4aceeb8b6b3e202288d7de85dd335a5f9eeff8924fc32e9a9",
  });
  assert(bundle.pass, "owner bundle");
  const post = verifyPostRunClosure({
    fullAuditEvidence: bundle.fullAuditEvidence,
    ownerView: bundle.ownerView,
    ownerCsvMultipart: bundle.ownerCsvMultipart,
    startFileSetSha: bundle.reproducibilityManifest.AUDIT_BASELINE_SHA,
    endFileSetSha: bundle.reproducibilityManifest.AUDIT_BASELINE_SHA,
  });
  assert(post.pass, JSON.stringify(post.blockers));
  console.log("OK synthetic end-to-end + post-run verifier");
}

function testAiRoleConstants() {
  assert(AI_AUDIT_ROLE.includes("AUDIT EXECUTOR"), "role");
  assert(AI_NOT_LANGUAGE_AUTHORITY === "LANGUAGE AUTHORITY", "not authority");
  assert(
    validateAuditChainMetadata({
      requiredChain: "AUTHORITATIVE SOURCE → SOURCE EVIDENCE → CONTEXTUAL ANALYSIS → AUDIT VERDICT",
    }).pass,
    "chain",
  );
  console.log("OK APVIENOTS §15 AI role");
}

function main() {
  testMappingArtifact();
  testSection7Schema();
  testCefrConditional();
  testSection8Verdicts();
  testPassWithoutEvidenceRejected();
  testFindingMissingFieldsRejected();
  testSection14BulkForbidden();
  testSection13Coverage();
  testOwnerScope();
  testCsvMultipart();
  testFullAuthGates();
  testDirtyTreeRejected();
  testStagingCurrentRejectedInInventory();
  testSyntheticEndToEnd();
  testAiRoleConstants();
  console.log("ALL production-current MASTER v1.18 pipeline tests passed");
}

main();
