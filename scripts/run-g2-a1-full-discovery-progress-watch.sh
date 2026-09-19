#!/usr/bin/env bash
set -euo pipefail
cd /workspace
INTERVAL_SEC="${G2_A1_PROGRESS_INTERVAL_SEC:-600}"
echo "G2/A1 full discovery progress watch every ${INTERVAL_SEC}s (started $(date -u +%Y-%m-%dT%H:%M:%SZ))"
while pgrep -f 'run-g2-a1-production-current-full-discovery.js --full --with-luna' >/dev/null 2>&1; do
  node scripts/report-g2-a1-full-discovery-progress.js || true
  sleep "$INTERVAL_SEC"
done
node scripts/report-g2-a1-full-discovery-progress.js || true
echo "Audit process ended; final progress snapshot written $(date -u +%Y-%m-%dT%H:%M:%SZ)"
