#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");

const DEFAULT_MAIN_REF = "origin/main";
const DEFAULT_PR842_REF = "origin/cursor/g2-a1-official-target-adapters-17f5";
const PRODUCTION_PATHSPEC = "data www/data";

function gitLines(cmd) {
  try {
    const out = execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
    if (!out) return [];
    return out.split("\n").filter(Boolean);
  } catch {
    return [];
  }
}

function uniquePaths(paths) {
  return [...new Set(paths.filter(Boolean))];
}

/**
 * Production datu stāvoklis — reāls git diff (nav hardkodēts false).
 * - productionDataModified: šīs PR (#843) darba koku / commit diff production ceļos
 * - inheritedFromPr842: production izmaiņas, kas jau ir PR #842 zarā pret main
 */
function assessCardTranslationProductionGitState(options = {}) {
  const mainRef = options.mainRef || process.env.CARD_TRANSLATION_MAIN_BASE || DEFAULT_MAIN_REF;
  const pr842Ref = options.pr842Ref || process.env.CARD_TRANSLATION_PR842_BASE || DEFAULT_PR842_REF;
  const headRef = options.headRef || "HEAD";

  const workingTree = gitLines(`git diff --name-only -- ${PRODUCTION_PATHSPEC}`);
  const staged = gitLines(`git diff --cached --name-only -- ${PRODUCTION_PATHSPEC}`);
  const pr843Only = gitLines(`git diff --name-only ${pr842Ref}...${headRef} -- ${PRODUCTION_PATHSPEC}`);
  const inherited842 = gitLines(`git diff --name-only ${mainRef}...${pr842Ref} -- ${PRODUCTION_PATHSPEC}`);
  const branchVsMain = gitLines(`git diff --name-only ${mainRef}...${headRef} -- ${PRODUCTION_PATHSPEC}`);

  const thisTaskPaths = uniquePaths([...workingTree, ...staged, ...pr843Only]);

  return {
    mainRef,
    pr842Ref,
    headRef,
    productionDataModified: thisTaskPaths.length > 0,
    workingTreeProductionPaths: uniquePaths([...workingTree, ...staged]),
    pr843ProductionPaths: uniquePaths(pr843Only),
    inheritedFromPr842: {
      description: "Production paths changed on PR #842 branch relative to main (inherited; not #843 task scope)",
      paths: uniquePaths(inherited842),
      pathCount: uniquePaths(inherited842).length,
    },
    branchProductionDiffVsMain: {
      paths: uniquePaths(branchVsMain),
      pathCount: uniquePaths(branchVsMain).length,
    },
  };
}

module.exports = {
  assessCardTranslationProductionGitState,
  PRODUCTION_PATHSPEC,
};
