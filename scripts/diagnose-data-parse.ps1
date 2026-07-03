$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

function Repair-Json([string]$Json) {
  $prev = $null
  while ($prev -ne $Json) {
    $prev = $Json
    $Json = $Json -replace ',(\s*[\]}])', '$1'
  }
  return $Json
}

function Get-ArrayJson([string]$Code) {
  $start = $Code.IndexOf('[')
  if ($start -lt 0) { throw "No array" }
  $depth = 0; $inS = $false; $esc = $false
  for ($i = $start; $i -lt $Code.Length; $i++) {
    $ch = $Code[$i]
    if ($inS) {
      if ($esc) { $esc = $false; continue }
      if ($ch -eq '\') { $esc = $true; continue }
      if ($ch -eq '"') { $inS = $false }
      continue
    }
    if ($ch -eq '"') { $inS = $true; continue }
    if ($ch -eq '[') { $depth++ }
    elseif ($ch -eq ']') {
      $depth--
      if ($depth -eq 0) { return $Code.Substring($start, $i - $start + 1) }
    }
  }
  throw "Unterminated array"
}

function Get-LineNumber([string]$Code, [int]$Index) {
  $line = 1
  for ($i = 0; $i -lt $Index -and $i -lt $Code.Length; $i++) {
    if ($Code[$i] -eq "`n") { $line++ }
  }
  return $line
}

$files = @('data/a1.js','data/a2.js','data/b1.js','data/b2.js','data/c1.js','data/c2.js','data/comparisonStudy.js','data/sentences.js')
foreach ($rel in $files) {
  $path = Join-Path $root $rel
  $code = [IO.File]::ReadAllText($path, [Text.Encoding]::UTF8)
  try {
    $json = Repair-Json (Get-ArrayJson $code)
    $null = $json | ConvertFrom-Json
    $count = ($json | ConvertFrom-Json).Count
    Write-Output "OK   $rel entries=$count"
  } catch {
    $msg = $_.Exception.Message
    Write-Output "FAIL $rel : $msg"
    if ($msg -match 'char (\d+)') {
      $pos = [int]$Matches[1]
      $line = Get-LineNumber $code $pos
      $lines = $code -split "`r?`n"
      $start = [Math]::Max(0, $line - 4)
      $end = [Math]::Min($lines.Count, $line + 2)
      for ($i = $start; $i -lt $end; $i++) {
        $marker = if ($i + 1 -eq $line) { ">>>" } else { "   " }
        Write-Output ("$marker L$($i+1): " + $lines[$i])
      }
    }
  }
}
