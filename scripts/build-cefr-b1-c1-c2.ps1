# Phase 3 build: B1 -> C1/C2 audit + move + validate. No ConvertTo-Json on data files.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Output "=== DE-LV CEFR Build (Phase 3: B1 -> C1/C2) ==="
Write-Output ""

Write-Output "[1/5] Running B1 CEFR audit (C1/C2 uplift)..."
& "$root\scripts\audit-b1-c1-c2.ps1"
Write-Output ""

Write-Output "[2/5] Applying B1 -> C1/C2 moves (append to c1/c2 ends)..."
& "$root\scripts\move-b1-c1-c2-lines.ps1"
Write-Output ""

Write-Output "[3/5] Validating JS syntax (b1, c1, c2)..."
& "$root\scripts\validate-js-syntax.ps1" -Files @("data/b1.js", "data/c1.js", "data/c2.js")
Write-Output ""

Write-Output "[4/5] Validating unique study IDs..."
& "$root\scripts\validate-all-study-ids.ps1"
Write-Output ""

Write-Output "[5/5] Build complete."
Write-Output ""
Write-Host "################################" -ForegroundColor DarkYellow
Write-Host "#         BUILD!               #" -ForegroundColor DarkYellow
Write-Host "################################" -ForegroundColor DarkYellow
