# Apply curated DE/LV grammar fixes to data/sentences.js — line-level only, never ConvertTo-Json on data.
param(
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$filePath = Join-Path $root "data/sentences.js"
$fixPath = Join-Path $PSScriptRoot "sentence-grammar-fixes.json"

$fixJson = [System.IO.File]::ReadAllText($fixPath, [System.Text.Encoding]::UTF8)
$grammarFixes = @{}
foreach ($prop in ($fixJson | ConvertFrom-Json).PSObject.Properties) {
  $grammarFixes[$prop.Name] = $prop.Value
}

function Test-StringChanged([string]$A, [string]$B) {
  return -not [string]::Equals($A, $B, [System.StringComparison]::Ordinal)
}

function Replace-FieldValue([string]$Line, [regex]$Pattern, [string]$NewValue) {
  $match = $Pattern.Match($Line)
  if (-not $match.Success) { return $Line }
  $valGroup = $match.Groups['val']
  $oldVal = $valGroup.Value
  if (-not (Test-StringChanged $NewValue $oldVal)) { return $Line }
  return $Line.Substring(0, $valGroup.Index) + $NewValue + $Line.Substring($valGroup.Index + $valGroup.Length)
}

$deFieldPattern = [regex]'(?<prefix>"de"\s*:\s*")(?<val>[^"]*)(?<suffix>")'
$lvFieldPattern = [regex]'(?<prefix>"lv"\s*:\s*")(?<val>[^"]*)(?<suffix>")'
$deKeyPattern = [regex]'"de"\s*:\s*"([^"]+)"'

$lines = [System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8)
$result = New-Object System.Collections.Generic.List[string]
$stats = @{
  deFixes = 0
  lvFixes = 0
  entriesMatched = 0
  entriesNotFound = [System.Collections.Generic.List[string]]::new()
}
$matchedKeys = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::Ordinal)
$pendingFix = $null
$currentDeOriginal = ""

foreach ($line in $lines) {
  $newLine = $line

  $deKeyMatch = $deKeyPattern.Match($line)
  if ($deKeyMatch.Success) {
    $currentDeOriginal = $deKeyMatch.Groups[1].Value
    $pendingFix = if ($grammarFixes.ContainsKey($currentDeOriginal)) { $grammarFixes[$currentDeOriginal] } else { $null }

    if ($null -ne $pendingFix -and $pendingFix.PSObject.Properties['de']) {
      $before = $newLine
      $newLine = Replace-FieldValue $newLine $deFieldPattern ([string]$pendingFix.de)
      if (Test-StringChanged $newLine $before) {
        $stats.deFixes++
        [void]$matchedKeys.Add($currentDeOriginal)
      }
    }
  }

  if ($null -ne $pendingFix -and $pendingFix.PSObject.Properties['lv']) {
    $before = $newLine
    $newLine = Replace-FieldValue $newLine $lvFieldPattern ([string]$pendingFix.lv)
    if (Test-StringChanged $newLine $before) {
      $stats.lvFixes++
      [void]$matchedKeys.Add($currentDeOriginal)
    }
  }

  if ($deKeyPattern.IsMatch($line) -or $lvFieldPattern.IsMatch($line)) {
    if ($null -ne $pendingFix -and $lvFieldPattern.IsMatch($line)) {
      $stats.entriesMatched++
      $pendingFix = $null
    }
  }

  [void]$result.Add($newLine)
}

foreach ($key in $grammarFixes.Keys) {
  if (-not $matchedKeys.Contains($key)) {
    [void]$stats.entriesNotFound.Add($key)
  }
}

Write-Output "=== polish-sentences-grammar ==="
Write-Output "deFixes=$($stats.deFixes) lvFixes=$($stats.lvFixes) entriesMatched=$($stats.entriesMatched)"
if ($stats.entriesNotFound.Count -gt 0) {
  Write-Output "Keys not matched ($($stats.entriesNotFound.Count)):"
  foreach ($k in $stats.entriesNotFound | Select-Object -First 10) {
    Write-Output "  $k"
  }
}

if (-not $DryRun -and ($stats.deFixes + $stats.lvFixes) -gt 0) {
  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllLines($filePath, $result.ToArray(), $utf8)
  Write-Output "Written: $filePath"
} elseif ($DryRun) {
  Write-Output "DryRun - no file written"
}
