# Heuristic article validation against suffix rules (flags likely errors).
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$extracted = Join-Path $PSScriptRoot "extracted-nouns.json"
$items = @((Get-Content $extracted -Raw -Encoding UTF8) | ConvertFrom-Json)

function Get-ExpectedArticleBySuffix([string]$Noun) {
  $n = $Noun.Trim()
  if ($n -match '(?i)(chen|lein)$') { return 'das' }
  if ($n -match '(?i)(ung|heit|keit|schaft|tion|sion|tät|ik|ei|anz|enz|ur|ität|ion|schaft|schaft|schaft)$') { return 'die' }
  if ($n -match '(?i)(tum|ment|um|nis)$') { return 'das' }
  if ($n -match '(?i)ling$') { return 'der' }
  return $null
}

$suspicious = @()
foreach ($item in $items) {
  $noun = [string]$item.noun
  $art = [string]$item.article
  $expected = Get-ExpectedArticleBySuffix $noun
  if ($expected -and $expected -ne $art) {
    $suspicious += [pscustomobject]@{ noun = $noun; current = $art; suffixGuess = $expected }
  }
}
Write-Output "Suffix mismatches: $($suspicious.Count)"
$suspicious | Sort-Object noun | ForEach-Object { Write-Output "$($_.current) $($_.noun) => suffix suggests $($_.suffixGuess)" }
