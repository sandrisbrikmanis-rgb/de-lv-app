# Safe line-level LV fixes for B2/C1/C2 — never touches de/de_article/de_plural.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$bullet = [string][char]0x2022

$fixJson = [System.IO.File]::ReadAllText((Join-Path $PSScriptRoot "lv-translation-fixes.json"), [System.Text.Encoding]::UTF8)
$translationFixes = @{}
foreach ($prop in ($fixJson | ConvertFrom-Json).PSObject.Properties) {
  $translationFixes[$prop.Name] = [string]$prop.Value
}

function Test-RelativeClauseComma([string]$Value) {
  return $Value -match ',\s*(kas|ko|kur|ar[iī]|lai|par|no|vai)\s'
}

function Convert-CommaSynonymsToBullets([string]$Value) {
  if ([string]::IsNullOrWhiteSpace($Value)) { return $Value }
  if ($Value -notmatch ',') { return $Value }

  function Convert-Segment([string]$Segment) {
    if ([string]::IsNullOrWhiteSpace($Segment)) { return $Segment }
    if ($Segment -notmatch ',') { return $Segment }
    if (Test-RelativeClauseComma $Segment) { return $Segment }
    $parts = $Segment -split ',\s*'
    $trimmed = @($parts | ForEach-Object { $_.Trim() } | Where-Object { $_ })
    if ($trimmed.Count -lt 2) { return $Segment }
    return ($trimmed -join " $bullet ")
  }

  if ($Value.Contains($bullet)) {
    $segments = $Value -split [regex]::Escape($bullet)
    $converted = @($segments | ForEach-Object { Convert-Segment $_.Trim() })
    return ($converted -join " $bullet ")
  }

  return (Convert-Segment $Value)
}

function Fix-EmDash([string]$Value) {
  if ($Value -notmatch [char]0x2014) { return $Value }
  $emDash = [string][char]0x2014
  return ($Value -replace ("\s*" + [regex]::Escape($emDash) + "\s*"), " $bullet ")
}

function Process-File([string]$RelativePath) {
  $filePath = Join-Path $root $RelativePath
  $lines = [System.Collections.Generic.List[string]]::new()
  $lines.AddRange([string[]][System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8))

  $stats = @{ translationFixes = 0; commaToBullet = 0; emDash = 0 }
  $currentDe = ""
  $result = New-Object System.Collections.Generic.List[string]
  $lvPattern = [regex]'(?<prefix>"lv"\s*:\s*")(?<val>[^"]*)(?<suffix>")'
  $dePattern = [regex]'"de"\s*:\s*"([^"]+)"'

  foreach ($line in $lines) {
    $newLine = $line
    $deMatch = $dePattern.Match($line)
    if ($deMatch.Success) { $currentDe = $deMatch.Groups[1].Value }

    $lvMatch = $lvPattern.Match($line)
    if ($lvMatch.Success) {
      $val = $lvMatch.Groups['val'].Value
      $fixed = $val

      if ($currentDe -and $translationFixes.ContainsKey($currentDe)) {
        $candidate = $translationFixes[$currentDe]
        if ($candidate -ne $val) {
          $fixed = $candidate
          $stats.translationFixes++
        }
      } else {
        $afterComma = Convert-CommaSynonymsToBullets $fixed
        if ($afterComma -ne $fixed) { $stats.commaToBullet++; $fixed = $afterComma }
        $afterDash = Fix-EmDash $fixed
        if ($afterDash -ne $fixed) { $stats.emDash++; $fixed = $afterDash }
      }

      if ($fixed -ne $val) {
        $newLine = $lvMatch.Groups['prefix'].Value + $fixed + $lvMatch.Groups['suffix'].Value
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

$grand = @{ translationFixes = 0; commaToBullet = 0; emDash = 0 }
foreach ($target in @("data/b2.js", "data/c1.js", "data/c2.js")) {
  $s = Process-File $target
  Write-Output "$target : translationFixes=$($s.translationFixes) commaToBullet=$($s.commaToBullet) emDash=$($s.emDash)"
  $grand.translationFixes += $s.translationFixes
  $grand.commaToBullet += $s.commaToBullet
  $grand.emDash += $s.emDash
}

Write-Output ""
Write-Output "=== LV translation fixes complete ==="
Write-Output "Total: translationFixes=$($grand.translationFixes) commaToBullet=$($grand.commaToBullet) emDash=$($grand.emDash)"
