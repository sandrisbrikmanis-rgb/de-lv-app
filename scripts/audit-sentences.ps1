# Audit data/sentences.js — capitalization, punctuation, semicolons, spacing.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$filePath = Join-Path $root "data/sentences.js"
$bullet = [string][char]0x2022

$lines = [System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8)
$dePattern = [regex]'"de"\s*:\s*"([^"]+)"'
$lvPattern = [regex]'"lv"\s*:\s*"([^"]+)"'

function Test-FullSentence([string]$Text) {
  $t = $Text.Trim()
  return $t -match '[.!?]$'
}

function Test-StartsUpper([string]$Text) {
  if ([string]::IsNullOrWhiteSpace($Text)) { return $false }
  return [char]::IsUpper($Text.Trim()[0])
}

function Get-FirstSegment([string]$Lv) {
  if ($Lv.Contains($bullet)) {
    return ($Lv -split [regex]::Escape($bullet))[0].Trim()
  }
  return $Lv.Trim()
}

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

$issues = @{
  semicolon_in_lv = [System.Collections.Generic.List[object]]::new()
  space_before_punct = [System.Collections.Generic.List[object]]::new()
  de_phrase_upper = [System.Collections.Generic.List[object]]::new()
  lv_phrase_upper = [System.Collections.Generic.List[object]]::new()
  de_sentence_lower = [System.Collections.Generic.List[object]]::new()
  lv_sentence_lower = [System.Collections.Generic.List[object]]::new()
  de_sentence_no_punct = [System.Collections.Generic.List[object]]::new()
  lv_sentence_no_punct = [System.Collections.Generic.List[object]]::new()
  de_phrase_has_punct = [System.Collections.Generic.List[object]]::new()
  lv_phrase_has_punct = [System.Collections.Generic.List[object]]::new()
}

foreach ($e in $entries) {
  $de = $e.de
  $lv = $e.lv
  $lvFirst = Get-FirstSegment $lv
  $full = (Test-FullSentence $de) -or (Test-FullSentence $lvFirst)

  if ($lv -match ';') {
    $issues.semicolon_in_lv.Add(@{ de = $de; lv = $lv })
  }
  if ($lv -match '\s+[!?.]') {
    $issues.space_before_punct.Add(@{ de = $de; lv = $lv })
  }

  if ($full) {
    if (-not (Test-StartsUpper $de) -and $de -notmatch '(?i)^zugrunde\s') { $issues.de_sentence_lower.Add(@{ de = $de; lv = $lv }) }
    if (-not (Test-StartsUpper $lvFirst)) { $issues.lv_sentence_lower.Add(@{ de = $de; lv = $lv }) }
    if ($de.Trim() -notmatch '[.!?]$') { $issues.de_sentence_no_punct.Add(@{ de = $de; lv = $lv }) }
    if ($de.Trim() -match '[.!?]$' -and $lvFirst -notmatch '[.!?]$') {
      $issues.lv_sentence_no_punct.Add(@{ de = $de; lv = $lv })
    }
  } else {
    if (Test-StartsUpper $de) { $issues.de_phrase_upper.Add(@{ de = $de; lv = $lv }) }
    if (Test-StartsUpper $lvFirst) { $issues.lv_phrase_upper.Add(@{ de = $de; lv = $lv }) }
    if ($de.Trim() -match '[.!?]$') { $issues.de_phrase_has_punct.Add(@{ de = $de; lv = $lv }) }
    if ($lvFirst -match '[.!?]$') { $issues.lv_phrase_has_punct.Add(@{ de = $de; lv = $lv }) }
  }
}

Write-Output "=== sentences.js audit ==="
Write-Output "Total entries: $($entries.Count)"
Write-Output ""
foreach ($key in $issues.Keys) {
  $list = $issues[$key]
  Write-Output "$key`: $($list.Count)"
  foreach ($item in $list | Select-Object -First 5) {
    Write-Output "  de: $($item.de)"
    Write-Output "  lv: $($item.lv)"
  }
  Write-Output ""
}
