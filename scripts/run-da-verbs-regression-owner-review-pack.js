#!/usr/bin/env node
"use strict";
/** Regenerate DA–DE Verbs regression OWNER review pack only (normally auto-runs after audit). */
const { runPostAuditOwnerReview } = require("./lib/audit-post-run");
runPostAuditOwnerReview("verbs-regression", { force: true });
