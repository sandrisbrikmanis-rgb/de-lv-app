$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$files = @('data/a1.js','data/a2.js','data/b1.js','data/b2.js','data/c1.js','data/c2.js','data/comparisonStudy.js')
$allIds = @{}
$errors = @()

foreach ($f in $files) {
  $text = [IO.File]::ReadAllText((Join-Path $root $f))
  $studies = ([regex]::Matches($text, '"study"\s*:\s*\{')).Count
  $ids = [regex]::Matches($text, '"id"\s*:\s*"([^"]+)"')
  $std = ([regex]::Matches($text, '"layout"\s*:\s*"standardStudy"')).Count
  $cmp = ([regex]::Matches($text, '"layout"\s*:\s*"comparisonStudy"')).Count
  Write-Output "$f : study=$studies ids=$($ids.Count) standardStudy=$std comparisonStudy=$cmp"
  foreach ($m in $ids) {
    $id = $m.Groups[1].Value
    if ($allIds.ContainsKey($id)) { $errors += "Duplicate id '$id' in $($allIds[$id]) and $f" }
    else { $allIds[$id] = $f }
  }
}

if ($errors.Count) { $errors | ForEach-Object { Write-Output "ERROR: $_" }; exit 1 }
Write-Output "VALIDATION PASSED: $($allIds.Count) unique ids"
