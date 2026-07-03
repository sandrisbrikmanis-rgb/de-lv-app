# Apply B1->C1/C2 moves. Removes from b1.js, appends to end of c1.js / c2.js. No ConvertTo-Json on data files.
param(
  [string]$PlanPath = "",
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
if (-not $PlanPath) { $PlanPath = Join-Path $PSScriptRoot "cefr-b1-c1-c2-plan.json" }
if (-not (Test-Path $PlanPath)) { throw "Plan not found: $PlanPath" }

$plan = Get-Content $PlanPath -Raw -Encoding UTF8 | ConvertFrom-Json
if (-not $plan.moves -or $plan.moves.Count -eq 0) {
  Write-Output "No B1->C1/C2 moves in plan."
  exit 0
}

function Parse-FileCards([string]$RelPath, [string]$Level) {
  $filePath = Join-Path $root $RelPath
  $lines = [System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8)
  $cards = [System.Collections.Generic.List[object]]::new()
  $depth = 0; $start = -1; $de = ""

  for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $open = ([regex]::Matches($line, '\{')).Count
    $close = ([regex]::Matches($line, '\}')).Count

    if ($depth -eq 0 -and $line -match '^\s*\{\s*$') {
      $start = $i; $de = ""; $depth = 1; continue
    }
    if ($depth -le 0) { continue }
    if ($depth -eq 1 -and $line -match '^\s{4}"de":\s*"([^"]*)"') { $de = $Matches[1] }
    $depth += $open - $close
    if ($depth -le 0 -and $start -ge 0 -and $de) {
      $block = $lines[$start..$i]
      [void]$cards.Add([pscustomobject]@{
        De = $de; Level = $Level; SourceFile = $RelPath
        StartLine = $start; EndLine = $i; Lines = $block
      })
      $start = -1
    }
  }

  $preamble = @()
  for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'const\s+\w+\s*=\s*\[') { $preamble += $lines[$i]; break }
    $preamble += $lines[$i]
  }
  $closeIdx = -1
  for ($i = $lines.Count - 1; $i -ge 0; $i--) {
    if ($lines[$i] -match '^\s*\]\s*;\s*$') { $closeIdx = $i; break }
  }
  if ($closeIdx -lt 0) { throw "Could not find array close in $RelPath" }
  $epilogue = $lines[$closeIdx..($lines.Count - 1)]

  return @{ Cards = $cards; Preamble = $preamble; Epilogue = $epilogue }
}

function Set-LevelInBlock([string[]]$Block, [string]$NewLevel) {
  $result = @()
  foreach ($line in $Block) {
    if ($line -match '^\s{4}"level":\s*"') {
      $indent = if ($line -match '^(\s+)') { $Matches[1] } else { "    " }
      $hasComma = $line -match ',\s*$'
      $suffix = if ($hasComma) { ',' } else { '' }
      $result += "${indent}`"level`": `"$NewLevel`"$suffix"
    } else {
      $result += $line
    }
  }
  return $result
}

function Format-CardBlock([string[]]$Block, [bool]$IsLast) {
  $out = @()
  foreach ($line in $Block) {
    if ($line -match '^\s*\}\s*,?\s*$') {
      $out += if ($IsLast) { "  }" } else { "  }," }
    } else {
      $out += $line
    }
  }
  return $out
}

function Write-LevelFile($Parsed, $Cards, [string]$RelPath) {
  $out = [System.Collections.Generic.List[string]]::new()
  foreach ($l in $Parsed.Preamble) { [void]$out.Add($l) }
  for ($i = 0; $i -lt $Cards.Count; $i++) {
    $isLast = ($i -eq $Cards.Count - 1)
    $block = Format-CardBlock $Cards[$i].Lines $isLast
    foreach ($l in $block) { [void]$out.Add($l) }
  }
  foreach ($l in $Parsed.Epilogue) { [void]$out.Add($l) }
  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllLines((Join-Path $root $RelPath), $out.ToArray(), $utf8)
}

$moveMap = @{}
$incomingC1 = [System.Collections.Generic.List[object]]::new()
$incomingC2 = [System.Collections.Generic.List[object]]::new()

foreach ($m in @($plan.moves)) {
  $key = "$($m.file)|$($m.startLine)"
  $moveMap[$key] = [string]$m.to
}

$b1Kept = [System.Collections.Generic.List[object]]::new()
$movedC1 = 0; $movedC2 = 0

$parsedB1 = Parse-FileCards "data/b1.js" "B1"
foreach ($card in $parsedB1.Cards) {
  $key = "$($card.SourceFile)|$($card.StartLine)"
  if ($moveMap.ContainsKey($key)) {
    $dest = $moveMap[$key]
    $newLines = Set-LevelInBlock $card.Lines $dest
    $item = [pscustomobject]@{ Lines = $newLines; De = $card.De }
    if ($dest -eq "C2") { [void]$incomingC2.Add($item); $movedC2++ }
    else { [void]$incomingC1.Add($item); $movedC1++ }
  } else {
    [void]$b1Kept.Add([pscustomobject]@{ Lines = $card.Lines; De = $card.De })
  }
}

$parsedC1 = Parse-FileCards "data/c1.js" "C1"
$parsedC2 = Parse-FileCards "data/c2.js" "C2"
$c1Existing = [System.Collections.Generic.List[object]]::new()
$c2Existing = [System.Collections.Generic.List[object]]::new()
foreach ($card in $parsedC1.Cards) { [void]$c1Existing.Add([pscustomobject]@{ Lines = $card.Lines; De = $card.De }) }
foreach ($card in $parsedC2.Cards) { [void]$c2Existing.Add([pscustomobject]@{ Lines = $card.Lines; De = $card.De }) }

$totalC1 = $c1Existing.Count + $incomingC1.Count
$totalC2 = $c2Existing.Count + $incomingC2.Count

if ($DryRun) {
  Write-Output "DRY RUN: would move $($movedC1 + $movedC2) cards from B1"
  Write-Output "  B1: $($b1Kept.Count) cards (was $($parsedB1.Cards.Count))"
  Write-Output "  C1: $totalC1 cards (was $($parsedC1.Cards.Count), +$movedC1 appended)"
  Write-Output "  C2: $totalC2 cards (was $($parsedC2.Cards.Count), +$movedC2 appended)"
  exit 0
}

$b1Out = [System.Collections.Generic.List[object]]::new()
foreach ($c in $b1Kept) { [void]$b1Out.Add($c) }
Write-LevelFile $parsedB1 $b1Out "data/b1.js"
Write-Output "data/b1.js: $($b1Kept.Count) cards written"

$c1All = @($c1Existing) + @($incomingC1)
Write-LevelFile $parsedC1 $c1All "data/c1.js"
Write-Output "data/c1.js: $totalC1 cards written (+$movedC1 appended at end)"

$c2All = @($c2Existing) + @($incomingC2)
Write-LevelFile $parsedC2 $c2All "data/c2.js"
Write-Output "data/c2.js: $totalC2 cards written (+$movedC2 appended at end)"

Write-Output ""
Write-Output "B1->C1/C2 move complete: C1=$movedC1, C2=$movedC2 relocated"
