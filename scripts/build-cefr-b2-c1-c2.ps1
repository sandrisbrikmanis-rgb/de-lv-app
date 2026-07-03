# Phase 4 build: B2 -> C1/C2 audit + downward report + move + validate. No ConvertTo-Json on data files.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Output "=== DE-LV CEFR Build (Phase 4: B2 -> C1/C2) ==="
Write-Output ""

Write-Output "[1/6] Running B2 CEFR audit (C1/C2 uplift)..."
& "$root\scripts\audit-b2-c1-c2.ps1"
Write-Output ""

Write-Output "[2/6] Running B2 downward audit (A1/A2/B1 report only)..."
& "$root\scripts\audit-b2-downward.ps1"
Write-Output ""

Write-Output "[3/6] Applying B2 -> C1/C2 moves (append to c1/c2 ends)..."
& "$root\scripts\move-b2-c1-c2-lines.ps1"
Write-Output ""

Write-Output "[4/6] Validating JS syntax (b2, c1, c2)..."
& "$root\scripts\validate-js-syntax.ps1" -Files @("data/b2.js", "data/c1.js", "data/c2.js")
Write-Output ""

Write-Output "[5/6] Validating unique study IDs..."
& "$root\scripts\validate-all-study-ids.ps1"
Write-Output ""

Write-Output "[6/6] Build complete."
Write-Output ""
Write-Host "################################" -ForegroundColor DarkYellow
Write-Host "#         BUILD!               #" -ForegroundColor DarkYellow
Write-Host "################################" -ForegroundColor DarkYellow
