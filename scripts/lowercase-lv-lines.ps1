$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$bullet = [string][char]0x2022

$targets = @(
  "data/a1.js", "data/a2.js", "data/b1.js", "data/b2.js", "data/c1.js", "data/c2.js", "data/comparisonStudy.js"
)

$stemJson = [System.IO.File]::ReadAllText((Join-Path $PSScriptRoot "proper-noun-stems.json"), [System.Text.Encoding]::UTF8)
$stemData = $stemJson | ConvertFrom-Json
$properNounStems = @($stemData.stems)
$properNounExact = @{}
foreach ($item in $stemData.exact) {
  $properNounExact[$item.ToLowerInvariant()] = $true
}

function Get-FirstWord([string]$Text) {
  if ([string]::IsNullOrWhiteSpace($Text)) { return "" }
  $t = $Text.Trim()
  if ($t -match '^([^/\s' + [char]0x2022 + ',;:.!?()\-]+)') { return $Matches[1] }
  return $t
}

function Test-ProperNounWord([string]$Word) {
  $w = [string]$Word
  if ([string]::IsNullOrWhiteSpace($w)) { return $false }
  $lower = $w.ToLowerInvariant()
  if ($properNounExact.ContainsKey($lower)) { return $true }
  foreach ($stem in $properNounStems) {
    if ($lower.StartsWith([string]$stem)) { return $true }
  }
  return $false
}

function Convert-Segment([string]$Segment) {
  $s = [string]$Segment
  if ([string]::IsNullOrWhiteSpace($s)) { return $s }
  $s = $s.Trim()
  $firstWord = Get-FirstWord $s
  if (Test-ProperNounWord $firstWord) { return $s }
  $first = $s[0]
  if ([char]::IsUpper($first)) {
    return $first.ToString().ToLowerInvariant() + $s.Substring(1)
  }
  return $s
}

function Convert-LvValue([string]$Value) {
  if ([string]::IsNullOrEmpty($Value)) { return $Value }
  if ($Value.Contains($bullet)) {
    $parts = $Value -split [regex]::Escape($bullet)
    $converted = foreach ($part in $parts) {
      Convert-Segment $part
    }
    return ($converted -join " $bullet ").Trim()
  }
  return (Convert-Segment $Value)
}

function Replace-QuotedField([string]$Line, [string]$Key, [ref]$Changed) {
  $escapedKey = [regex]::Escape($Key)
  $pattern = '(?i)(?<prefix>"?' + $escapedKey + '"?\s*:\s*")(?<val>[^"]*)(?<suffix>")'
  $matches = [regex]::Matches($Line, $pattern)
  if ($matches.Count -eq 0) { return $Line }
  $result = $Line
  for ($i = $matches.Count - 1; $i -ge 0; $i--) {
    $m = $matches[$i]
    $val = $m.Groups['val'].Value
    $fixed = Convert-LvValue $val
    if ([string]::Equals($fixed, $val, [System.StringComparison]::Ordinal)) { continue }
    $Changed.Value = $true
    $replacement = $m.Groups['prefix'].Value + $fixed + $m.Groups['suffix'].Value
    $result = $result.Substring(0, $m.Index) + $replacement + $result.Substring($m.Index + $m.Length)
  }
  return $result
}

function Replace-ArrayString([string]$Line, [ref]$Changed) {
  $pattern = '^(?<prefix>\s*)"(?<val>[^"]+)"(?<suffix>,?\s*)$'
  $match = [regex]::Match($Line, $pattern)
  if (-not $match.Success) { return $Line }
  $val = $match.Groups['val'].Value
  $fixed = Convert-LvValue $val
  if ([string]::Equals($fixed, $val, [System.StringComparison]::Ordinal)) { return $Line }
  $Changed.Value = $true
  return $match.Groups['prefix'].Value + '"' + $fixed + '"' + $match.Groups['suffix'].Value
}

function Get-BraceDelta([string]$Line) {
  return ([regex]::Matches($Line, '\{')).Count - ([regex]::Matches($Line, '\}')).Count
}

function Get-BracketDelta([string]$Line) {
  return ([regex]::Matches($Line, '\[')).Count - ([regex]::Matches($Line, '\]')).Count
}

function Process-File([string]$RelativePath) {
  $filePath = Join-Path $root $RelativePath
  $lines = [System.Collections.Generic.List[string]]::new()
  $lines.AddRange([string[]][System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8))

  $stats = @{ lvFields = 0; translations = 0; purpleItems = 0 }

  $inSectionAccents = $false
  $sectionDepth = 0
  $accentField = $null
  $inPurpleArray = $false
  $purpleDepth = 0

  $lvFieldKeys = @('lv', 'translation', 'title', 'meaning', 'describes')
  $result = New-Object System.Collections.Generic.List[string]

  for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $newLine = $line
    $changed = $false

    if (-not $inSectionAccents -and $line -match '(?i)"?sectionAccents"?\s*:\s*\{') {
      $inSectionAccents = $true
      $sectionDepth = Get-BraceDelta $line
      if ($sectionDepth -le 0) { $sectionDepth = 1 }
    }
    elseif ($inSectionAccents) {
      $sectionDepth += Get-BraceDelta $line
      if ($sectionDepth -le 0) {
        $inSectionAccents = $false
        $accentField = $null
        $inPurpleArray = $false
        $purpleDepth = 0
      }
    }

    if ($inSectionAccents) {
      if ($line -match '(?i)"(lv|meaning|translation|describes)"\s*:\s*\{') {
        $accentField = $Matches[1].ToLowerInvariant()
        $inPurpleArray = $false
        $purpleDepth = 0
      }
      if ($accentField -and $line -match '(?i)"purple"\s*:\s*\[') {
        $inPurpleArray = $true
        $purpleDepth = Get-BracketDelta $line
        if ($purpleDepth -le 0) { $purpleDepth = 1 }
      }
      elseif ($inPurpleArray) {
        $purpleDepth += Get-BracketDelta $line
        if ($purpleDepth -le 0) {
          $inPurpleArray = $false
          $purpleDepth = 0
        }
        elseif ($line -match '^\s+"[^"]+"') {
          $itemChanged = $false
          $newLine = Replace-ArrayString $line ([ref]$itemChanged)
          if ($itemChanged) { $stats.purpleItems++; $changed = $true }
        }
      }
    }

    foreach ($key in $lvFieldKeys) {
      $fieldChanged = $false
      $testLine = Replace-QuotedField $newLine $key ([ref]$fieldChanged)
      if ($fieldChanged) {
        $newLine = $testLine
        $changed = $true
        if ($key -eq 'lv') { $stats.lvFields++ }
        else { $stats.translations++ }
      }
    }

    if (-not $changed) {
      [void]$result.Add($line)
      continue
    }
    [void]$result.Add($newLine)
  }

  if (($stats.Values | Measure-Object -Sum).Sum -gt 0) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllLines($filePath, $result.ToArray(), $utf8)
  }

  return $stats
}

$grand = @{ lvFields = 0; translations = 0; purpleItems = 0 }
foreach ($target in $targets) {
  $s = Process-File $target
  Write-Output "$target : lv=$($s.lvFields) translation/title/meaning=$($s.translations) purple=$($s.purpleItems)"
  $grand.lvFields += $s.lvFields
  $grand.translations += $s.translations
  $grand.purpleItems += $s.purpleItems
}

Write-Output ""
Write-Output "=== Lowercase LV complete ==="
Write-Output "Total: lv=$($grand.lvFields) translation/title/meaning=$($grand.translations) purple=$($grand.purpleItems)"
