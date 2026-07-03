# Combined CEFR build: Phase 2 (A2->B1) first, then Phase 1 (A1->A2). No ConvertTo-Json on data files.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Output "=== DE-LV CEFR Build (Phase 1 + Phase 2) ==="
Write-Output ""

Write-Output "[1/6] Extracting A2->B1 plan (29 candidates)..."
& "$root\scripts\extract-a2-b1-plan.ps1"
Write-Output ""

Write-Output "[2/6] Applying A2 -> B1 moves (append to b1.js end)..."
& "$root\scripts\move-a2-b1-lines.ps1"
Write-Output ""

Write-Output "[3/6] Applying A1 -> A2 moves (line-level)..."
& "$root\scripts\move-a1-a2-lines.ps1"
Write-Output ""

Write-Output "[4/6] Fixing A2 trailing commas..."
& "$root\scripts\fix-a2-trailing-commas.ps1"
Write-Output ""

Write-Output "[5/6] Validating JS syntax (a1, a2, b1)..."
& "$root\scripts\validate-js-syntax.ps1" -Files @("data/a1.js", "data/a2.js", "data/b1.js")
Write-Output ""

Write-Output "[6/6] Validating unique study IDs..."
& "$root\scripts\validate-all-study-ids.ps1"
Write-Output ""

Write-Output ""
Write-Host "################################" -ForegroundColor DarkYellow
Write-Host "#         BUILD!               #" -ForegroundColor DarkYellow
Write-Host "################################" -ForegroundColor DarkYellow
