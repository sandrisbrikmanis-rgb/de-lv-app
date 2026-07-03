# Apply A2->B1 moves only. Removes from a2.js, appends to end of b1.js. No ConvertTo-Json on data files.
# Preserves study.id, layout, de_article, sectionAccents; only changes file + "level".
param(
  [string]$PlanPath = "",
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
if (-not $PlanPath) { $PlanPath = Join-Path $PSScriptRoot "cefr-a2-b1-plan.json" }
if (-not (Test-Path $PlanPath)) { throw "Plan not found: $PlanPath" }

$plan = Get-Content $PlanPath -Raw -Encoding UTF8 | ConvertFrom-Json
if (-not $plan.moves -or $plan.moves.Count -eq 0) {
  Write-Output "No A2->B1 moves in plan."
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
    if ($depth -le 0 -and $start -ge 0) {
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

$moveMap = @{}
$incomingB1 = [System.Collections.Generic.List[object]]::new()
foreach ($m in @($plan.moves)) {
  $key = "$($m.file)|$($m.startLine)"
  $moveMap[$key] = $true
}

$a2Kept = [System.Collections.Generic.List[object]]::new()
$moved = 0

$parsedA2 = Parse-FileCards "data/a2.js" "A2"
foreach ($card in $parsedA2.Cards) {
  $key = "$($card.SourceFile)|$($card.StartLine)"
  if ($moveMap.ContainsKey($key)) {
    $newLines = Set-LevelInBlock $card.Lines "B1"
    [void]$incomingB1.Add([pscustomobject]@{ Lines = $newLines; De = $card.De })
    $moved++
  } else {
    [void]$a2Kept.Add([pscustomobject]@{ Lines = $card.Lines; De = $card.De })
  }
}

$parsedB1 = Parse-FileCards "data/b1.js" "B1"
$b1Existing = [System.Collections.Generic.List[object]]::new()
foreach ($card in $parsedB1.Cards) {
  [void]$b1Existing.Add([pscustomobject]@{ Lines = $card.Lines; De = $card.De })
}

$totalB1 = $b1Existing.Count + $incomingB1.Count

if ($DryRun) {
  Write-Output "DRY RUN: would move $moved cards from A2 to B1 (append at end)"
  Write-Output "  A2: $($a2Kept.Count) cards (was $($parsedA2.Cards.Count))"
  Write-Output "  B1: $totalB1 cards (was $($parsedB1.Cards.Count), +$moved incoming)"
  exit 0
}

# Write a2.js (without moved cards)
$a2Out = [System.Collections.Generic.List[string]]::new()
foreach ($l in $parsedA2.Preamble) { [void]$a2Out.Add($l) }
for ($i = 0; $i -lt $a2Kept.Count; $i++) {
  $isLast = ($i -eq $a2Kept.Count - 1)
  $block = Format-CardBlock $a2Kept[$i].Lines $isLast
  foreach ($l in $block) { [void]$a2Out.Add($l) }
}
foreach ($l in $parsedA2.Epilogue) { [void]$a2Out.Add($l) }

$utf8 = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllLines((Join-Path $root "data/a2.js"), $a2Out.ToArray(), $utf8)
Write-Output "data/a2.js: $($a2Kept.Count) cards written"

# Write b1.js (existing + appended incoming at end)
$b1Out = [System.Collections.Generic.List[string]]::new()
foreach ($l in $parsedB1.Preamble) { [void]$b1Out.Add($l) }
$allB1Cards = @($b1Existing) + @($incomingB1)
for ($i = 0; $i -lt $allB1Cards.Count; $i++) {
  $isLast = ($i -eq $allB1Cards.Count - 1)
  $block = Format-CardBlock $allB1Cards[$i].Lines $isLast
  foreach ($l in $block) { [void]$b1Out.Add($l) }
}
foreach ($l in $parsedB1.Epilogue) { [void]$b1Out.Add($l) }

[System.IO.File]::WriteAllLines((Join-Path $root "data/b1.js"), $b1Out.ToArray(), $utf8)
Write-Output "data/b1.js: $totalB1 cards written (+$moved appended at end)"

Write-Output ""
Write-Output "A2->B1 move complete: $moved relocated to end of b1.js"
