# Extract all sentences.js entries and flag mechanical grammar issues.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$filePath = Join-Path $root "data/sentences.js"
$bullet = [string][char]0x2022

$lines = [System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8)
$dePattern = [regex]'"de"\s*:\s*"([^"]+)"'
$lvPattern = [regex]'"lv"\s*:\s*"([^"]+)"'

$entries = @()
$current = $null
foreach ($line in $lines) {
  $deMatch = $dePattern.Match($line)
  if ($deMatch.Success) {
    if ($null -ne $current) { $entries += $current }
    $current = @{ de = $deMatch.Groups[1].Value; lv = "" }
  }
  $lvMatch = $lvPattern.Match($line)
  if ($lvMatch.Success -and $null -ne $current) {
    $current.lv = $lvMatch.Groups[1].Value
  }
}
if ($null -ne $current) { $entries += $current }

$relativeClausePattern = ',\s*(kas|ko|kur|ar[iī]|lai|par|no|vai)\s'
$issues = @()
foreach ($e in $entries) {
  $tags = [System.Collections.Generic.List[string]]::new()
  if ($e.lv -match ';') { [void]$tags.Add('semicolon') }
  if ($e.lv -match '\[[^\]]+\]') { [void]$tags.Add('bracket_artifact') }
  if ($e.de -match '(?i)Zugrunde|erstenmal') { [void]$tags.Add('de_orthography') }
  if ($e.lv -match ',' -and $e.lv -notmatch $relativeClausePattern) { [void]$tags.Add('comma_synonym') }
  if ($tags.Count -gt 0) {
    $issues += @{ de = $e.de; lv = $e.lv; tags = @($tags) }
  }
}

$report = @{
  total = $entries.Count
  issueCount = $issues.Count
  baselineAudit = @{
    semicolon_in_lv = ($issues | Where-Object { $_.tags -contains 'semicolon' }).Count
    comma_synonym = ($issues | Where-Object { $_.tags -contains 'comma_synonym' }).Count
    bracket_artifact = ($issues | Where-Object { $_.tags -contains 'bracket_artifact' }).Count
    de_orthography = ($issues | Where-Object { $_.tags -contains 'de_orthography' }).Count
  }
  entries = $entries
  issues = $issues
}

$outPath = Join-Path $PSScriptRoot "sentences-grammar-audit-report.json"
$json = $report | ConvertTo-Json -Depth 6
$utf8 = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($outPath, $json, $utf8)
Write-Output "Wrote $outPath - $($entries.Count) entries, $($issues.Count) flagged"
