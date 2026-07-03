# Phase 1 build pipeline: A1/A2 CEFR audit + move + validate. No ConvertTo-Json on data files.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Output "=== DE-LV A1/A2 CEFR Build (Phase 1) ==="
Write-Output ""

Write-Output "[1/4] Running CEFR audit (A1/A2 only)..."
& "$root\scripts\audit-a1-a2.ps1"
Write-Output ""

Write-Output "[2/4] Applying A1 -> A2 moves (line-level)..."
& "$root\scripts\move-a1-a2-lines.ps1"
Write-Output ""

Write-Output "[3/4] Fixing A2 trailing commas..."
& "$root\scripts\fix-a2-trailing-commas.ps1"
Write-Output ""

Write-Output "[4/4] Validating JS syntax..."
& "$root\scripts\validate-js-syntax.ps1" "data/a1.js" "data/a2.js"
Write-Output ""

Write-Output ""
Write-Host "################################" -ForegroundColor DarkYellow
Write-Host "#         BUILD!               #" -ForegroundColor DarkYellow
Write-Host "################################" -ForegroundColor DarkYellow
