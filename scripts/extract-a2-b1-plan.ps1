# Extract A2->B1 move plan from phase-1 audit report. Verifies de at startLine in a2.js.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$srcPath = Join-Path $PSScriptRoot "cefr-a1-a2-plan.json"
$outPath = Join-Path $PSScriptRoot "cefr-a2-b1-plan.json"

if (-not (Test-Path $srcPath)) { throw "Source plan not found: $srcPath" }

$src = Get-Content $srcPath -Raw -Encoding UTF8 | ConvertFrom-Json
$candidates = @($src.a2ToB1Report.candidates)
if ($candidates.Count -eq 0) { throw "No a2ToB1Report.candidates in $srcPath" }

$a2Path = Join-Path $root "data/a2.js"
$a2Lines = [System.IO.File]::ReadAllLines($a2Path, [System.Text.Encoding]::UTF8)
$errors = [System.Collections.Generic.List[string]]::new()
$moves = [System.Collections.Generic.List[object]]::new()

function Get-DeAtCardStart([string[]]$Lines, [int]$Start) {
  $max = [Math]::Min($Start + 8, $Lines.Count - 1)
  for ($i = $Start; $i -le $max; $i++) {
    if ($Lines[$i] -match '^\s{4}"de":\s*"([^"]*)"') { return $Matches[1] }
  }
  return $null
}

foreach ($c in $candidates) {
  $startLine = [int]$c.startLine
  if ($startLine -lt 0 -or $startLine -ge $a2Lines.Count) {
    [void]$errors.Add("Line out of range: $($c.de) at startLine=$startLine")
    continue
  }
  if ($a2Lines[$startLine] -notmatch '^\s*\{\s*$') {
    [void]$errors.Add("Expected card open brace at startLine=$startLine for $($c.de), got: $($a2Lines[$startLine])")
    continue
  }
  $actualDe = Get-DeAtCardStart $a2Lines $startLine
  if (-not $actualDe) {
    [void]$errors.Add("No de field near startLine=$startLine for $($c.de)")
    continue
  }
  if ($actualDe -ne [string]$c.de) {
    [void]$errors.Add("de mismatch at startLine=$startLine`: expected '$($c.de)', found '$actualDe'")
    continue
  }
  [void]$moves.Add([ordered]@{
    de = $c.de; lv = $c.lv; from = "A2"; to = "B1"; file = "data/a2.js"
    startLine = $c.startLine; endLine = $c.endLine
    studyId = $c.studyId; reasons = $c.reasons
  })
}

if ($errors.Count -gt 0) {
  $errors | ForEach-Object { Write-Output "VERIFY ERROR: $_" }
  throw "Plan verification failed: $($errors.Count) error(s)"
}

$b1Path = Join-Path $root "data/b1.js"
$a2Count = ([regex]::Matches([System.IO.File]::ReadAllText($a2Path, [System.Text.Encoding]::UTF8), '"level":\s*"A2"')).Count
$b1Count = ([regex]::Matches([System.IO.File]::ReadAllText($b1Path, [System.Text.Encoding]::UTF8), '"level":\s*"B1"')).Count

$plan = [ordered]@{
  generatedAt = (Get-Date).ToString("o")
  phase = "A2-B1-only"
  sourcePlan = "cefr-a1-a2-plan.json"
  currentCounts = @{ A2 = $a2Count; B1 = $b1Count }
  moveCount = $moves.Count
  predictedA2 = $a2Count - $moves.Count
  predictedB1 = $b1Count + $moves.Count
  moves = @($moves)
}

$plan | ConvertTo-Json -Depth 8 | Set-Content $outPath -Encoding UTF8
Write-Output "A2->B1 plan extracted: $($moves.Count) moves"
Write-Output "  Predicted: A2=$($plan.predictedA2), B1=$($plan.predictedB1)"
Write-Output "  Saved: $outPath"
