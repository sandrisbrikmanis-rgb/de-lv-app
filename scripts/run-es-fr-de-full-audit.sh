#!/usr/bin/env bash
set -euo pipefail
cd /workspace
LOG_DIR="reports/temp/es-fr-de-full-audit-logs"
mkdir -p "$LOG_DIR"
STAMP=$(date +%Y%m%d-%H%M%S)
LOG="$LOG_DIR/full-audit-$STAMP.log"
echo "Logging to $LOG"
exec > >(tee -a "$LOG") 2>&1
echo "=== ES-FR-DE full audit started $(date) ==="
node scripts/run-es-fr-de-full-audit.js --lang=both --fresh-luna
echo "=== ES-FR-DE full audit finished $(date) ==="
