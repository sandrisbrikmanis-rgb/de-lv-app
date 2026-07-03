# Safe line-level fixes for data/sentences.js — never uses ConvertTo-Json on data files.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$bullet = [string][char]0x2022

$fixPath = Join-Path $PSScriptRoot "sentence-translation-fixes.json"
$fixJson = [System.IO.File]::ReadAllText($fixPath, [System.Text.Encoding]::UTF8)
$translationFixes = [System.Collections.Generic.Dictionary[string,string]]::new([StringComparer]::OrdinalIgnoreCase)
foreach ($prop in ($fixJson | ConvertFrom-Json).PSObject.Properties) {
  $translationFixes[$prop.Name] = [string]$prop.Value
}

function Test-FullSentence([string]$Text) {
  if ([string]::IsNullOrWhiteSpace($Text)) { return $false }
  return $Text.Trim() -match '[.!?]$'
}

function Fix-SpaceBeforePunct([string]$Value) {
  if ([string]::IsNullOrWhiteSpace($Value)) { return $Value }
  return ($Value -replace '\s+([!?.])', '$1')
}

function Fix-SemicolonSeparators([string]$Value) {
  if ($Value -notmatch ';') { return $Value }
  return ($Value -replace ';\s*', " $bullet ").Trim()
}

function Capitalize-First([string]$Text) {
  if ([string]::IsNullOrWhiteSpace($Text)) { return $Text }
  $t = $Text.Trim()
  $first = $t[0]
  if ([char]::IsLower($first)) {
    return $first.ToString().ToUpperInvariant() + $t.Substring(1)
  }
  return $t
}

function Lowercase-First([string]$Text) {
  if ([string]::IsNullOrWhiteSpace($Text)) { return $Text }
  $t = $Text.Trim()
  $first = $t[0]
  if ([char]::IsUpper($first)) {
    return $first.ToString().ToLowerInvariant() + $t.Substring(1)
  }
  return $t
}

function Get-DePunct([string]$De) {
  if ($De -match '([.!?])$') { return $Matches[1] }
  return ""
}

function Sync-LvPunctuation([string]$Lv, [string]$DePunct) {
  if ([string]::IsNullOrWhiteSpace($DePunct)) { return $Lv }
  if ($Lv.Contains($bullet)) {
    $parts = $Lv -split [regex]::Escape($bullet)
    $first = $parts[0].Trim()
    if ($first -notmatch '[.!?]$') {
      $parts[0] = $first + $DePunct
    }
    return (($parts | ForEach-Object { $_.Trim() }) -join " $bullet ")
  }
  $trim = $Lv.Trim()
  if ($trim -notmatch '[.!?]$') { return $trim + $DePunct }
  return $Lv
}

function Test-StringChanged([string]$A, [string]$B) {
  return -not [string]::Equals($A, $B, [System.StringComparison]::Ordinal)
}

function Apply-Capitalization([string]$Value, [bool]$FullSentence) {
  if ([string]::IsNullOrWhiteSpace($Value)) { return $Value }
  if ($Value.Contains($bullet)) {
    $parts = $Value -split [regex]::Escape($bullet)
    $converted = foreach ($part in $parts) {
      $seg = $part.Trim()
      if ($FullSentence) { Capitalize-First $seg } else { Lowercase-First $seg }
    }
    return ($converted -join " $bullet ")
  }
  if ($FullSentence) { return (Capitalize-First $Value) }
  return (Lowercase-First $Value)
}

function Process-File([string]$RelativePath) {
  $filePath = Join-Path $root $RelativePath
  $lines = [System.Collections.Generic.List[string]]::new()
  $lines.AddRange([string[]][System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8))

  $stats = @{
    translationFixes = 0
    deCapitalize = 0
    deSentenceCap = 0
    lvCapitalize = 0
    lvSentenceCap = 0
    lvPunct = 0
    spacePunct = 0
    semicolons = 0
  }

  $currentDe = ""
  $currentDeOriginal = ""
  $result = New-Object System.Collections.Generic.List[string]
  $dePattern = [regex]'"de"\s*:\s*"([^"]+)"'
  $lvPattern = [regex]'(?<prefix>"lv"\s*:\s*")(?<val>[^"]*)(?<suffix>")'

  foreach ($line in $lines) {
    $newLine = $line
    $deMatch = $dePattern.Match($line)
    if ($deMatch.Success) {
      $deVal = $deMatch.Groups[1].Value
      $currentDeOriginal = $deVal
      $deFixed = $deVal
      $deFull = Test-FullSentence $deVal

      if ($deVal -match '(?i)^zugrunde\s') {
        $deFixed = $deVal
      } elseif ($deFull) {
        if ($deVal -cmatch '^[a-zäöüß]') {
          $deFixed = Apply-Capitalization $deVal $true
        }
      } elseif ($deVal -cmatch '^[A-ZÄÖÜ]') {
        $deFixed = Apply-Capitalization $deVal $false
      }

      if (Test-StringChanged $deFixed $deVal) {
        if ($deFull) { $stats.deSentenceCap++ } else { $stats.deCapitalize++ }
        $valGroup = $deMatch.Groups[1]
        $newLine = $line.Substring(0, $valGroup.Index) + $deFixed + $line.Substring($valGroup.Index + $valGroup.Length)
      }
      $currentDe = $deFixed
    }

    $lvMatch = $lvPattern.Match($newLine)
    if ($lvMatch.Success) {
      $val = $lvMatch.Groups['val'].Value
      $fixed = $val
      $deFull = Test-FullSentence $currentDe

      $fixKey = if ($translationFixes.ContainsKey($currentDeOriginal)) { $currentDeOriginal }
                elseif ($translationFixes.ContainsKey($currentDe)) { $currentDe }
                else { "" }
      if ($fixKey) {
        $candidate = $translationFixes[$fixKey]
        if (Test-StringChanged $candidate $val) {
          $fixed = $candidate
          $stats.translationFixes++
        }
      }

      $afterSemi = Fix-SemicolonSeparators $fixed
      if (Test-StringChanged $afterSemi $fixed) { $stats.semicolons++; $fixed = $afterSemi }

      $afterSpace = Fix-SpaceBeforePunct $fixed
      if (Test-StringChanged $afterSpace $fixed) { $stats.spacePunct++; $fixed = $afterSpace }

      $capFixed = Apply-Capitalization $fixed $deFull
      if (Test-StringChanged $capFixed $fixed) {
        if ($deFull) { $stats.lvSentenceCap++ } else { $stats.lvCapitalize++ }
        $fixed = $capFixed
      }

      if ($deFull) {
        $dePunct = Get-DePunct $currentDe
        $punctFixed = Sync-LvPunctuation $fixed $dePunct
        if (Test-StringChanged $punctFixed $fixed) { $stats.lvPunct++; $fixed = $punctFixed }
      }

      if (Test-StringChanged $fixed $val) {
        $valGroup = $lvMatch.Groups['val']
        $newLine = $line.Substring(0, $valGroup.Index) + $fixed + $line.Substring($valGroup.Index + $valGroup.Length)
      }
    }

    [void]$result.Add($newLine)
  }

  if (($stats.Values | Measure-Object -Sum).Sum -gt 0) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllLines($filePath, $result.ToArray(), $utf8)
  }

  return $stats
}

$s = Process-File "data/sentences.js"
Write-Output "data/sentences.js : translationFixes=$($s.translationFixes) deCapitalize=$($s.deCapitalize) deSentenceCap=$($s.deSentenceCap) lvCapitalize=$($s.lvCapitalize) lvSentenceCap=$($s.lvSentenceCap) lvPunct=$($s.lvPunct) spacePunct=$($s.spacePunct) semicolons=$($s.semicolons)"
Write-Output ""
Write-Output "=== Sentences fix complete ==="
