# Repair broken lv lines (missing indent/comma) after fix-sentences-lines bug.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$filePath = Join-Path $root "data/sentences.js"
$lines = [System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8)
$fixed = 0
$result = New-Object System.Collections.Generic.List[string]

foreach ($line in $lines) {
  $newLine = $line
  if ($line -match '^"lv":\s*"(.*)"\s*,?\s*$') {
    $newLine = '    "lv": "' + $Matches[1] + '",'
    $fixed++
  } elseif ($line -match '^"de":\s*"(.*)"\s*,?\s*$') {
    $newLine = '    "de": "' + $Matches[1] + '",'
    $fixed++
  }
  [void]$result.Add($newLine)
}

if ($fixed -gt 0) {
  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllLines($filePath, $result.ToArray(), $utf8)
}
Write-Output "Repaired $fixed lv line(s)"
