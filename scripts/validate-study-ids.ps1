param(
  [string[]]$Files = @('data/a1.js', 'data/a2.js', 'data/b1.js')
)

$root = Split-Path -Parent $PSScriptRoot
$errors = @()
$allIds = @{}
$totals = @{ study = 0; id = 0; layout = 0 }

foreach ($target in $Files) {
  $filePath = Join-Path $root $target
  $text = [System.IO.File]::ReadAllText($filePath)
  $studyCount = ([regex]::Matches($text, '"study":\s*\{')).Count
  $idCount = ([regex]::Matches($text, '"id":\s*"[^"]+"')).Count
  $layoutCount = ([regex]::Matches($text, '"layout":\s*"standardStudy"')).Count

  $totals.study += $studyCount
  $totals.id += $idCount
  $totals.layout += $layoutCount

  Write-Output "$target : study=$studyCount id=$idCount layout=$layoutCount"

  if ($studyCount -ne $idCount) {
    $errors += "$target : study count ($studyCount) != id count ($idCount)"
  }
  if ($studyCount -ne $layoutCount) {
    $errors += "$target : study count ($studyCount) != layout count ($layoutCount)"
  }

  foreach ($match in [regex]::Matches($text, '"id":\s*"([^"]+)"')) {
    $id = $match.Groups[1].Value
    if ($allIds.ContainsKey($id)) {
      $errors += "Duplicate id '$id' in $($allIds[$id]) and $target"
    } else {
      $allIds[$id] = $target
    }
  }
}

Write-Output "Grand total: study=$($totals.study) id=$($totals.id) layout=$($totals.layout) uniqueIds=$($allIds.Count)"

if ($errors.Count -gt 0) {
  foreach ($err in $errors) { Write-Output "ERROR: $err" }
  exit 1
}

Write-Output "VALIDATION PASSED"
