# Safe data polish pipeline — does NOT use ConvertTo-Json roundtrip on study content.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Output "=== DE-LV Data Build ==="
Write-Output ""

& "$root\scripts\build-noun-lookup.ps1"
& "$root\scripts\fix-noun-articles-lines.ps1"
& "$root\scripts\fix-homonym-articles-lines.ps1"
& "$root\scripts\fix-lv-line-indent.ps1"
& "$root\scripts\fix-lv-translations-lines.ps1"
& "$root\scripts\fix-sentences-lines.ps1"
& "$root\scripts\polish-data-lines.ps1"
& "$root\scripts\lowercase-lv-lines.ps1"
& "$root\scripts\fix-a2-trailing-commas.ps1"
& "$root\scripts\fix-content-semicolons.ps1" `
  "data/a1.js" "data/a2.js" "data/b1.js" "data/b2.js" "data/c1.js" "data/c2.js" "data/comparisonStudy.js" "data/sentences.js"
& "$root\scripts\remove-bad-comparison-lines.ps1"
& "$root\scripts\add-study-ids.ps1" "data/a1.js" "data/a2.js" "data/b1.js"
& "$root\scripts\validate-all-study-ids.ps1"

Write-Output ""
Write-Output "################################"
Write-Output "#         BUILD!               #"
Write-Output "################################"
