# Apply A1->A2 moves only. Line-level card moves, no ConvertTo-Json on data files.
# Preserves study.id, layout, de_article, sectionAccents; only changes file + "level".
param(
  [string]$PlanPath = "",
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
if (-not $PlanPath) { $PlanPath = Join-Path $PSScriptRoot "cefr-a1-a2-plan.json" }
if (-not (Test-Path $PlanPath)) { throw "Plan not found: $PlanPath" }

$plan = Get-Content $PlanPath -Raw -Encoding UTF8 | ConvertFrom-Json
if (-not $plan.moves -or $plan.moves.Count -eq 0) {
  Write-Output "No A1->A2 moves in plan."
  exit 0
}

$LEVEL_FILES = @{
  A1 = @{ File = "data/a1.js"; Var = "A1_WORDS" }
  A2 = @{ File = "data/a2.js"; Var = "A2_WORDS" }
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
  $epilogue = @()
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
foreach ($m in @($plan.moves)) {
  $key = "$($m.file)|$($m.startLine)"
  $moveMap[$key] = [string]$m.to
}

$allCardsByDest = @{
  A1 = [System.Collections.Generic.List[object]]::new()
  A2 = [System.Collections.Generic.List[object]]::new()
}

$moved = 0; $kept = 0
foreach ($level in @("A1", "A2")) {
  $meta = $LEVEL_FILES[$level]
  $parsed = Parse-FileCards $meta.File $level
  foreach ($card in $parsed.Cards) {
    $key = "$($card.SourceFile)|$($card.StartLine)"
    if ($moveMap.ContainsKey($key)) {
      $dest = $moveMap[$key]
      $newLines = Set-LevelInBlock $card.Lines $dest
      [void]$allCardsByDest[$dest].Add([pscustomobject]@{ Lines = $newLines; De = $card.De })
      $moved++
    } else {
      [void]$allCardsByDest[$level].Add([pscustomobject]@{ Lines = $card.Lines; De = $card.De })
      $kept++
    }
  }
}

if ($DryRun) {
  Write-Output "DRY RUN: would move $moved cards from A1 to A2, keep $kept"
  Write-Output "  A1: $($allCardsByDest.A1.Count) cards"
  Write-Output "  A2: $($allCardsByDest.A2.Count) cards"
  exit 0
}

foreach ($level in @("A1", "A2")) {
  $meta = $LEVEL_FILES[$level]
  $parsed = Parse-FileCards $meta.File $level
  $cards = $allCardsByDest[$level]
  $filePath = Join-Path $root $meta.File

  $out = [System.Collections.Generic.List[string]]::new()
  foreach ($l in $parsed.Preamble) { [void]$out.Add($l) }

  for ($i = 0; $i -lt $cards.Count; $i++) {
    $isLast = ($i -eq $cards.Count - 1)
    $block = Format-CardBlock $cards[$i].Lines $isLast
    foreach ($l in $block) { [void]$out.Add($l) }
  }

  foreach ($l in $parsed.Epilogue) { [void]$out.Add($l) }

  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllLines($filePath, $out.ToArray(), $utf8)
  Write-Output "$($meta.File): $($cards.Count) cards written"
}

Write-Output ""
Write-Output "A1->A2 move complete: $moved relocated, $kept unchanged"
