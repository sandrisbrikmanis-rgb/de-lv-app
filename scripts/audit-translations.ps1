$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$bullet = [string][char]0x2022

function Split-Meanings([string]$s) {
    if ([string]::IsNullOrWhiteSpace($s)) { return @() }
    return @($s -split '\s*•\s*|\s*;\s*' | ForEach-Object { $_.Trim().ToLower() } | Where-Object { $_ })
}

function Parse-WordFile([string]$FilePath) {
    $lines = [System.IO.File]::ReadAllLines($FilePath)
    $cards = @()
    $current = $null
    $depth = 0

    foreach ($line in $lines) {
        $openCount = ([regex]::Matches($line, '\{')).Count
        $closeCount = ([regex]::Matches($line, '\}')).Count

        if ($null -eq $current -and $line -match '^\s*\{\s*$') {
            $current = [ordered]@{ De = ""; Lv = ""; Translation = "" }
            $depth = 1
            continue
        }
        if ($null -eq $current) { continue }

        if ($depth -eq 1 -and $line -match '^\s*"de":\s*"([^"]*)"') { $current.De = $Matches[1] }
        elseif ($depth -eq 1 -and $line -match '^\s*"lv":\s*"([^"]*)"') { $current.Lv = $Matches[1] }
        elseif ($line -match '^\s*"translation":\s*"([^"]*)"') { $current.Translation = $Matches[1] }

        $depth += $openCount - $closeCount
        if ($depth -le 0) {
            if ($current.De) { $cards += [pscustomobject]$current }
            $current = $null
            $depth = 0
        }
    }
    return $cards
}

$issues = @()

foreach ($pair in @(
    @{ File = "data/a1.js"; Level = "A1" },
    @{ File = "data/a2.js"; Level = "A2" }
)) {
    $cards = Parse-WordFile (Join-Path $root $pair.File)
    foreach ($c in $cards) {
        if ($c.Lv -match ';') {
            $issues += [pscustomobject]@{ Type = "semicolon_in_lv"; Level = $pair.Level; De = $c.De; Lv = $c.Lv; Translation = $c.Translation; Fix = "Replace ; with $bullet" }
        }
        if ($c.Translation -match ';') {
            $issues += [pscustomobject]@{ Type = "semicolon_in_translation"; Level = $pair.Level; De = $c.De; Lv = $c.Lv; Translation = $c.Translation; Fix = "Replace ; with $bullet" }
        }

        if (-not $c.Translation) { continue }

        $lvParts = Split-Meanings $c.Lv
        $transParts = Split-Meanings $c.Translation

        if ($lvParts.Count -gt 0 -and $transParts.Count -gt 0) {
            $lvOnly = @($lvParts | Where-Object { $transParts -notcontains $_ })
            $transOnly = @($transParts | Where-Object { $lvParts -notcontains $_ })
            if ($lvOnly.Count -gt 0 -or $transOnly.Count -gt 0) {
                $issues += [pscustomobject]@{
                    Type = "content_mismatch"
                    Level = $pair.Level
                    De = $c.De
                    Lv = $c.Lv
                    Translation = $c.Translation
                    Fix = "Align lv and translation"
                }
            }
        }
        elseif ($c.Lv -and ($c.Lv -notmatch [char]0x2022) -and ($c.Translation -notmatch [char]0x2022) -and ($c.Lv.Trim().ToLower() -ne $c.Translation.Trim().ToLower())) {
            $issues += [pscustomobject]@{ Type = "content_mismatch_simple"; Level = $pair.Level; De = $c.De; Lv = $c.Lv; Translation = $c.Translation; Fix = "Align lv and translation" }
        }
        elseif ($c.Lv -and $c.Translation -and (($c.Lv -match [char]0x2022) -xor ($c.Translation -match [char]0x2022))) {
            $issues += [pscustomobject]@{ Type = "separator_or_scope_mismatch"; Level = $pair.Level; De = $c.De; Lv = $c.Lv; Translation = $c.Translation; Fix = "Align lv and translation" }
        }
    }
}

# Deduplicate content_mismatch where semicolons are the only issue
$real = $issues | Where-Object {
    if ($_.Type -eq "content_mismatch") {
        $lvN = ($_.Lv -replace ';', $bullet)
        $trN = ($_.Translation -replace ';', $bullet)
        return ($lvN.Trim().ToLower() -ne $trN.Trim().ToLower())
    }
    return $true
}

Write-Output "REAL ISSUES: $($real.Count)"
$real | Format-Table Type, Level, De, Lv, Translation, Fix -AutoSize -Wrap
